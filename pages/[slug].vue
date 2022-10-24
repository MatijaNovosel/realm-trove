<template>
  <div class="contents">
    <items-filter-modal
      :open="modalOpen"
      v-model:loot-source="lootSource"
      v-model:item-type="itemType"
      @close="modalOpen = false"
    />
    <app-confirmation-dialog
      :open="confirmDialogOpen"
      @close="confirmDialogOpen = false"
      @yes="resetCollection"
      @no="confirmDialogOpen = false"
    />
    <div
      class="offset w-full"
      :class="{
        'h-full flex justify-center items-center': pending || error
      }"
    >
      <transition name="bounce">
        <spinner class="mt-4 mx-auto" v-if="pending" />
        <div class="mt-4 mx-auto text-error text-4xl" v-else-if="error">
          An error ocurred.
        </div>
        <div class="display-contents" v-else>
          <items-type-tab :active-tab="activeTab" @change="changeTab" />
          <div class="flex justify-center items-center" v-if="profile">
            <div v-if="editingUsername">
              <items-custom-input
                placeholder="New username"
                :loading="pending"
                :error="error"
                hide-clear
                v-model="usernameEditText"
              />
            </div>
            <span class="text-2xl md:text-4xl" v-else>
              {{ profile.username }}'s Loot
            </span>
            <app-icon-button
              v-if="isCurrentUser"
              class="ml-4"
              :tooltip="editingUsername ? 'Confirm' : 'Change username'"
              @on-click="
                editingUsername
                  ? changeUsername()
                  : (editingUsername = !editingUsername)
              "
              :background-color="editingUsername ? 'green-vue' : 'dark'"
            >
              <CheckmarkIcon v-if="editingUsername" />
              <PencilIcon v-else />
            </app-icon-button>
          </div>
          <div class="grid grid-cols-12 my-5 px-7 md:px-3">
            <items-instructions v-if="isCurrentUser" />
            <div
              class="col-span-12 md:col-span-4 my-4 md:my-0 flex items-center"
              :class="{
                'md:col-span-12 justify-center': !isCurrentUser
              }"
            >
              <items-custom-input
                placeholder="Search items"
                dense
                :loading="pending"
                :error="error"
                v-model="searchText"
              />
              <app-icon-button
                class="mx-2 relative"
                tooltip="Filter"
                background-color="dark"
                @on-click="modalOpen = true"
                :class="{
                  badge: filterActive
                }"
              >
                <FilterIcon />
              </app-icon-button>
              <app-icon-button
                v-if="isCurrentUser"
                tooltip="Reset"
                icon-color="green-vue"
                :disabled="pendingChanges || screenshotLoading"
                @on-click="
                  pendingChanges || screenshotLoading
                    ? null
                    : (confirmDialogOpen = true)
                "
                background-color="dark"
              >
                <ResetIcon />
              </app-icon-button>
              <app-icon-button
                :class="{
                  'ml-2': isCurrentUser
                }"
                tooltip="Export"
                icon-color="green-vue"
                background-color="dark"
                :disabled="pendingChanges || screenshotLoading"
                :loading="screenshotLoading"
                @on-click="
                  pendingChanges || screenshotLoading
                    ? null
                    : exportAsScreenshot()
                "
              >
                <CameraIcon />
              </app-icon-button>
            </div>
            <div
              v-if="isCurrentUser"
              class="col-span-12 md:col-span-4 flex justify-center md:justify-end"
            >
              <app-text-button
                background-color="error"
                text="Cancel"
                class="ml-2"
                :disabled="!pendingChanges"
                @on-click="cancelChanges"
              />
              <app-text-button
                background-color="green-vue"
                text="Save"
                class="ml-2"
                :disabled="!pendingChanges"
                @on-click="confirmChanges"
              />
            </div>
          </div>
          <div
            id="grid"
            :class="{
              'bg-black p-5': screenshotLoading
            }"
          >
            <div
              class="px-5 md:px-3"
              :class="{
                'pb-1': screenshotLoading
              }"
            >
              <items-progress-bar
                :progress="itemCollectionPercentage * 100"
                class="mb-5 user-select-none"
              >
                <span>
                  {{ itemsCollected[activeTab] }} /
                  {{ items[activeTab].length }} ({{
                    (itemCollectionPercentage * 100).toFixed(2)
                  }}%)
                </span>
              </items-progress-bar>
            </div>
            <items-grid
              :items="filteredCollection"
              :collection="profile.collection"
              :initial="initialCollection"
              :tab="activeTab"
              :disabled="!isCurrentUser || screenshotLoading"
              @increment="updateCollection"
              @decrement="updateCollection($event, false)"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IDictionary, ItemInfo, PlayerCollection, Profile } from "~/models";
import { TAB } from "~/utils/constants";
import {
  doc,
  DocumentData,
  DocumentReference,
  onSnapshot,
  setDoc,
  Unsubscribe
} from "firebase/firestore";
import { useDebounceFn } from "@vueuse/core";
import FilterIcon from "~icons/material-symbols/filter-list";
import ResetIcon from "~icons/carbon/reset";
import CameraIcon from "~icons/mdi/camera";
import PencilIcon from "~icons/mdi/grease-pencil";
import CheckmarkIcon from "~icons/ic/baseline-check";
import domtoimage from "dom-to-image";

const activeTab = ref(TAB.UT);
const initialCollection = ref<PlayerCollection>();
const searchText = ref("");
const modalOpen = ref(false);
const confirmDialogOpen = ref(false);
const pending = ref(true);
const screenshotLoading = ref(false);
const initialMount = ref(true);
const editingUsername = ref(false);
const error = ref(false);
const unsubscribe = ref<Unsubscribe>();
const profile = ref<Profile>();
const usernameEditText = ref("");
const lootSource = ref<number[]>([]);
const itemType = ref<number[]>([]);
const docRef = ref<DocumentReference<DocumentData>>();

const { $firebaseFirestore } = useNuxtApp();
const { items } = useItems();
const { createToast, removePermanentToasts, permanentToastExists } = useToast();
const user = useUser();
const userData = useUserData();
const route = useRoute();
const { setMeta } = useMetadata();
const loginTrigger = useLoginTrigger();

const filteredCollection = ref<IDictionary<ItemInfo[]>>({
  [TAB.UT]: items[TAB.UT],
  [TAB.ST]: items[TAB.ST]
});

const filterActive = computed(() => {
  return lootSource.value.length !== 0 || itemType.value.length !== 0;
});

const userSlug = computed(() => {
  return route.params.slug;
});

const isCurrentUser = computed(() => {
  if (user.value) {
    return user.value.uid === profile.value.uid;
  }
  return false;
});

const changeTab = (tab: TAB) => {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
};

const itemsCollected = computed(() => {
  return {
    [TAB.UT]: Object.keys(profile.value.collection.ut).length,
    [TAB.ST]: Object.keys(profile.value.collection.st).length
  };
});

const itemCollectionPercentage = computed(() => {
  return itemsCollected.value[activeTab.value] / items[activeTab.value].length;
});

const pendingChanges = computed(() => {
  return (
    initialCollection.value !== undefined &&
    JSON.stringify(initialCollection.value) !==
      JSON.stringify(profile.value.collection)
  );
});

const updateCollection = async (id: number, increment: boolean = true) => {
  const existsInCollection = id in profile.value.collection[activeTab.value];

  if (!increment && !existsInCollection) {
    return;
  }

  if (!initialCollection.value) {
    initialCollection.value = JSON.parse(
      JSON.stringify(profile.value.collection)
    );

    if (!permanentToastExists.value) {
      createToast("You have pending changes", "green-vue", -1, true);
    }
  }

  if (existsInCollection) {
    if (increment) {
      profile.value.collection[activeTab.value][id]++;
    } else {
      if (profile.value.collection[activeTab.value][id] - 1 <= 0) {
        delete profile.value.collection[activeTab.value][id];
      } else {
        profile.value.collection[activeTab.value][id]--;
      }
    }
  } else {
    if (increment) {
      profile.value.collection[activeTab.value][id] = 1;
    }
  }
};

const changeUsername = async () => {
  if (
    usernameEditText.value.length === 0 ||
    usernameEditText.value.length > 15
  ) {
    createToast("Invalid username (must be <=15 chars)!", "error");
    return;
  }

  if (usernameEditText.value === profile.value.username) {
    editingUsername.value = false;
    return;
  }

  try {
    profile.value.username = usernameEditText.value;
    await setDoc(docRef.value, profile.value);
    userData.value.username = usernameEditText.value;
    createToast("Username updated!", "green-vue");
    editingUsername.value = false;
  } catch (e) {
    createToast(e.message, "error");
  }
};

const cancelChanges = () => {
  profile.value.collection = initialCollection.value;
  initialCollection.value = undefined;
};

const confirmChanges = async () => {
  try {
    await setDoc(docRef.value, profile.value);
    createToast("Saved!", "green-vue");
    initialCollection.value = undefined;
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  }
};

const resetCollection = async () => {
  try {
    const emptyCollection = { ...profile.value };
    emptyCollection.collection = {
      st: {},
      ut: {}
    };
    await setDoc(docRef.value, emptyCollection);
    createToast("Progress has been reset!", "green-vue");
    initialCollection.value = undefined;
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  } finally {
    confirmDialogOpen.value = false;
  }
};

const searchItems = useDebounceFn(() => {
  const filterConditions: ((item: ItemInfo) => boolean)[] = [
    (item) => item.name.toLowerCase().includes(searchText.value.toLowerCase())
  ];

  if (lootSource.value.length !== 0) {
    filterConditions.push((item) => lootSource.value.includes(item.source));
  }

  if (itemType.value.length !== 0) {
    filterConditions.push((item) => itemType.value.includes(item.type));
  }

  filteredCollection.value = {
    [TAB.UT]: items[TAB.UT].filter((item) =>
      filterConditions.every((i) => i(item))
    ),
    [TAB.ST]: items[TAB.ST].filter((item) =>
      filterConditions.every((i) => i(item))
    )
  };
}, 300);

const exportAsScreenshot = async () => {
  try {
    screenshotLoading.value = true;
    if (!permanentToastExists.value) {
      createToast(
        "This'll take just a moment, sit tight!",
        "green-vue",
        -1,
        true
      );
    }
    const res = await domtoimage.toJpeg(document.getElementById("grid"));
    var link = document.createElement("a");
    link.download = `${new Date().toISOString()}.jpeg`;
    link.href = res;
    link.click();
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  } finally {
    screenshotLoading.value = false;
    removePermanentToasts();
  }
};

onMounted(async () => {
  try {
    if (loginTrigger.value) {
      loginTrigger.value = false;
    }

    const data = await $fetch(`/api/${userSlug.value}?property=shortId`);

    setMeta(`Realm trove | ${data.username}'s Items`);

    profile.value = data;
    usernameEditText.value = data.username;
    docRef.value = doc($firebaseFirestore, "profile", userSlug.value as string);

    unsubscribe.value = onSnapshot(docRef.value, (snap) => {
      if (initialMount.value) {
        initialMount.value = false;
      } else {
        profile.value = snap.data() as Profile;
      }
    });
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  } finally {
    pending.value = false;
  }
});

onBeforeUnmount(() => {
  if (unsubscribe.value) {
    unsubscribe.value();
  }
  docRef.value = undefined;
});

watch(
  () => [searchText.value, lootSource.value, itemType.value],
  () => searchItems()
);

watch(
  () => pendingChanges.value,
  (val) => {
    if (!val) {
      removePermanentToasts();
      initialCollection.value = undefined;
    }
  }
);

setMeta("Realm trove | Items");
</script>

<style scoped>
.badge::after {
  content: "";
  border-radius: 100%;
  border: 7px solid var(--vue-green);
  top: -5px;
  right: -5px;
  position: absolute;
}
</style>
