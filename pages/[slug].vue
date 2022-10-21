<template>
  <div class="contents">
    <items-filter-modal :open="modalOpen" @close="modalOpen = false" />
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
        <div class="mt-4 mx-auto text-red-500 text-4xl" v-else-if="error">
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
              :on-click="
                () =>
                  editingUsername
                    ? changeUsername()
                    : (editingUsername = !editingUsername)
              "
              :background-color="editingUsername ? 'green-vue' : 'dark-800'"
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
                class="mx-4"
                tooltip="Filter"
                :on-click="() => (modalOpen = true)"
              >
                <FilterIcon />
              </app-icon-button>
              <app-icon-button
                v-if="isCurrentUser"
                tooltip="Reset"
                icon-color="green-vue"
                :disabled="pendingChanges"
                :on-click="
                  () => (pendingChanges ? null : (confirmDialogOpen = true))
                "
                :background-color="editingUsername ? 'green-vue' : 'dark-800'"
              >
                <ResetIcon />
              </app-icon-button>
            </div>
            <div
              v-if="isCurrentUser"
              class="col-span-12 md:col-span-4 flex justify-center md:justify-end"
            >
              <app-text-button
                background-color="red-500"
                text="Cancel"
                class="ml-2"
                :disabled="!pendingChanges"
                :on-click="() => cancelChanges()"
              />
              <app-text-button
                background-color="green-vue"
                text="Save"
                class="ml-2"
                :disabled="!pendingChanges"
                :on-click="() => confirmChanges()"
              />
            </div>
          </div>
          <div class="px-7 md:px-3">
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
            :items="filteredItems"
            :collection="profile.collection"
            :initial="initialCollection"
            :tab="activeTab"
            :disabled="!isCurrentUser"
            @increment="updateCollection"
            @decrement="updateCollection($event, false)"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayerCollection, Profile } from "~/models";
import { TAB } from "~/utils/constants";
import {
  doc,
  DocumentData,
  DocumentReference,
  onSnapshot,
  setDoc,
  Unsubscribe
} from "firebase/firestore";
import FilterIcon from "~icons/material-symbols/filter-list";
import ResetIcon from "~icons/carbon/reset";
import PencilIcon from "~icons/mdi/grease-pencil";
import CheckmarkIcon from "~icons/ic/baseline-check";

const activeTab = ref(TAB.UT);
const initialCollection = ref<PlayerCollection>();
const searchText = ref("");
const modalOpen = ref(false);
const confirmDialogOpen = ref(false);
const pending = ref(true);
const initialMount = ref(true);
const editingUsername = ref(false);
const error = ref(false);
const unsubscribe = ref<Unsubscribe>();
const profile = ref<Profile>();
const usernameEditText = ref("");
const docRef = ref<DocumentReference<DocumentData>>();

const { $firebaseFirestore } = useNuxtApp();
const { items } = useItems();
const { createToast, removePermanentToasts, permanentToastExists } = useToast();
const user = useUser();
const route = useRoute();
const { setMeta } = useMetadata();
const loginTrigger = useLoginTrigger();

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

const filteredItems = computed(() => {
  return {
    [TAB.UT]: items[TAB.UT].filter((item) =>
      item.name.toLowerCase().includes(searchText.value.toLowerCase())
    ),
    [TAB.ST]: items[TAB.ST].filter((item) =>
      item.name.toLowerCase().includes(searchText.value.toLowerCase())
    )
  };
});

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
      createToast("You have pending changes", "green-500", -1, true);
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
    createToast("Invalid username (must be <=15 chars)!", "red-500");
    return;
  }

  if (usernameEditText.value === profile.value.username) {
    editingUsername.value = false;
    return;
  }

  try {
    profile.value.username = usernameEditText.value;
    await setDoc(docRef.value, profile.value);
    createToast("Username updated!", "green-500");
    editingUsername.value = false;
  } catch (e) {
    createToast(e.message, "red-500");
  }
};

const cancelChanges = () => {
  profile.value.collection = initialCollection.value;
  initialCollection.value = undefined;
};

const confirmChanges = async () => {
  try {
    await setDoc(docRef.value, profile.value);
    createToast("Saved!", "green-500");
    initialCollection.value = undefined;
  } catch (e) {
    createToast(e.message, "red-500");
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
    createToast("Progress has been reset!", "green-500");
    initialCollection.value = undefined;
  } catch (e) {
    createToast(e.message, "red-500");
    error.value = true;
  } finally {
    confirmDialogOpen.value = false;
  }
};

onMounted(async () => {
  try {
    if (loginTrigger.value) {
      loginTrigger.value = false;
    }

    const data = await $fetch(`/api/${userSlug.value}?property=shortId`);

    setMeta(
      `Realm trove | ${data.username}'s Items`,
      `${data.username} has collected ${
        Object.keys(data.collection.ut).length
      }/${items["ut"].length} UTs and ${
        Object.keys(data.collection.st).length
      }/${items["st"].length} STs!`
    );

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
    createToast(e.message, "red-500");
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
.filter-btn {
  padding: 5px;
}
</style>
