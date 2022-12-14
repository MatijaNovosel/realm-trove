<template>
  <div class="contents">
    <items-filter-modal
      :open="state.modalOpen"
      v-model:loot-source="state.lootSource"
      v-model:item-type="state.itemType"
      v-model:show-vanity="state.showVanity"
      v-model:show-missing-items="state.showOnlyMissingItems"
      @close="state.modalOpen = false"
    />
    <confirmation-dialog
      :open="state.confirmDialogOpen"
      @close="state.confirmDialogOpen = false"
      @yes="resetCollection"
      @no="state.confirmDialogOpen = false"
    />
    <div
      class="offset w-full"
      :class="{
        'h-full flex-center': loading || error
      }"
    >
      <transition name="bounce">
        <spinner class="mt-4 mx-auto" v-if="loading" />
        <div class="mt-4 mx-auto text-error text-4xl" v-else-if="error">
          An error ocurred.
        </div>
        <div class="contents" v-else>
          <items-type-tab />
          <div class="flex-center" v-if="profile">
            <div v-if="state.editingUsername">
              <custom-input
                placeholder="New username"
                :loading="loading"
                :error="error"
                hide-clear
                v-model="state.usernameEditText"
              />
            </div>
            <div class="text-2xl md:text-4xl flex-center" v-else>
              <nuxt-link
                :to="`https://www.realmeye.com/player/${profile.username}`"
                class="mr-2 text-2xl flex-center"
              >
                <eye-icon />
              </nuxt-link>
              {{ profile.username }}'s Loot
            </div>
            <icon-button
              v-if="isCurrentUser"
              class="ml-4"
              :tooltip="state.editingUsername ? 'Confirm' : 'Change username'"
              @on-click="
                state.editingUsername
                  ? changeUsername()
                  : (state.editingUsername = !state.editingUsername)
              "
              :background-color="state.editingUsername ? 'green-vue' : 'dark'"
            >
              <checkmark-icon v-if="state.editingUsername" />
              <pencil-icon v-else />
            </icon-button>
          </div>
          <div
            class="row my-5 px-5 md:px-2 items-center"
            :class="{ 'mt-0 md:mt-5': !isCurrentUser }"
          >
            <div
              class="col-span-12 md:col-span-3 flex items-center justify-center md:justify-start"
            >
              <instructions v-if="isCurrentUser" />
            </div>
            <div
              class="col-span-12 md:col-span-6 mt-4 md:mt-0 flex-center"
              :class="{
                'md:col-span-12 justify-center': !isCurrentUser
              }"
            >
              <custom-input
                placeholder="Search items"
                dense
                :loading="loading"
                :error="error"
                v-model="state.searchText"
              />
              <icon-button
                class="mx-2 relative"
                tooltip="Filter"
                background-color="dark"
                @on-click="state.modalOpen = true"
                :class="{
                  badge: filterActive
                }"
              >
                <filter-icon />
              </icon-button>
              <icon-button
                tooltip="Export"
                icon-color="green-vue"
                background-color="dark"
                :disabled="actionsDisabled"
                :loading="state.screenshotLoading"
                @on-click="actionsDisabled ? null : exportAsScreenshot()"
              >
                <camera-icon />
              </icon-button>
              <icon-button
                v-if="isCurrentUser"
                class="ml-2"
                tooltip="Reset"
                icon-color="green-vue"
                :disabled="actionsDisabled"
                @on-click="
                  actionsDisabled ? null : (state.confirmDialogOpen = true)
                "
                background-color="dark"
              >
                <reset-icon />
              </icon-button>
            </div>
            <div
              v-if="isCurrentUser"
              class="col-span-12 md:col-span-3 flex md:justify-end fixed md:relative z-5 right-10 md:right-0 bottom-5 md:bottom-0 h-min"
            >
              <text-button
                background-color="error"
                text="Cancel"
                class="ml-2"
                :disabled="!pendingChanges"
                @on-click="cancelChanges"
              />
              <text-button
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
              'bg-black p-5': state.screenshotLoading
            }"
          >
            <div
              class="px-5 md:px-1"
              :class="{
                'pb-1': state.screenshotLoading
              }"
            >
              <progress-bar :progress="itemCollectionPercentage" class="mb-5">
                <span>
                  {{ itemsCollected[selectedTab] }} /
                  {{ items[selectedTab].length }} ({{
                    itemCollectionPercentage.toFixed(2)
                  }}%)
                </span>
              </progress-bar>
            </div>
            <items-grid
              :items="state.filteredCollection"
              :collection="profile.collection"
              :initial="state.initialCollection"
              :disabled="!isCurrentUser || state.screenshotLoading"
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
import { useDebounceFn } from "@vueuse/core";
import domtoimage from "dom-to-image";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import JSConfetti from "js-confetti";
import { ItemInfo, Profile } from "~/models";
import { TAB } from "~/utils/constants";
import ResetIcon from "~icons/carbon/reset";
import CheckmarkIcon from "~icons/ic/baseline-check";
import FilterIcon from "~icons/material-symbols/filter-list";
import CameraIcon from "~icons/mdi/camera";
import PencilIcon from "~icons/mdi/grease-pencil";
import EyeIcon from "~icons/ri/eye-2-fill";

const { $firebaseFirestore } = useNuxtApp();
const { items } = useItems();
const { createToast, removePermanentToasts, permanentToastExists } = useToast();
const user = useUser();
const userData = useUserData();
const selectedTab = useSelectedTab();
const route = useRoute();
const logoutTrigger = useLogoutTrigger();
const { setMeta } = useMetadata();

const state = reactive({
  searchText: "",
  usernameEditText: "",
  lootSource: [],
  itemType: [],
  showVanity: undefined,
  showOnlyMissingItems: undefined,
  modalOpen: false,
  confirmDialogOpen: false,
  screenshotLoading: false,
  initialMount: false,
  initialCollection: undefined,
  editingUsername: false,
  unsubscribe: undefined,
  docRef: undefined,
  filteredCollection: {
    [TAB.UT]: items[TAB.UT],
    [TAB.ST]: items[TAB.ST],
    [TAB.BP]: items[TAB.BP]
  }
});

setMeta("Realm trove | Items");

const {
  data: profile,
  pending: loading,
  error
} = await useLazyFetch<Profile>(`/api/${route.params.slug}?property=shortId`, {
  key: `/api/${route.params.slug}?property=shortId`
});

const filterActive = computed(
  () =>
    state.lootSource.length !== 0 ||
    state.itemType.length !== 0 ||
    state.showVanity === true ||
    state.showVanity === false ||
    state.showOnlyMissingItems === true ||
    state.showOnlyMissingItems === false
);

const isCurrentUser = computed(() => {
  if (user.value) {
    return user.value.uid === profile.value.uid;
  }
  return false;
});

const itemsCollected = computed(() => {
  return {
    [TAB.UT]: Object.keys(profile.value.collection.ut).length,
    [TAB.ST]: Object.keys(profile.value.collection.st).length,
    [TAB.BP]: Object.keys(profile.value.collection.bp).length
  };
});

const itemCollectionPercentage = computed(
  () =>
    (itemsCollected.value[selectedTab.value] /
      items[selectedTab.value].length) *
    100
);

const pendingChanges = computed(
  () =>
    state.initialCollection !== undefined &&
    JSON.stringify(state.initialCollection) !==
      JSON.stringify(profile.value.collection)
);

const actionsDisabled = computed(
  () => pendingChanges.value || state.screenshotLoading
);

const updateCollection = async (id: number, increment: boolean = true) => {
  const existsInCollection = id in profile.value.collection[selectedTab.value];

  if (!increment && !existsInCollection) {
    return;
  }

  if (!state.initialCollection) {
    state.initialCollection = JSON.parse(
      JSON.stringify(profile.value.collection)
    );

    if (!permanentToastExists.value) {
      createToast("You have pending changes", "green-vue", -1, true);
    }
  }

  if (existsInCollection) {
    if (increment) {
      profile.value.collection[selectedTab.value][id]++;
    } else {
      if (profile.value.collection[selectedTab.value][id] - 1 <= 0) {
        delete profile.value.collection[selectedTab.value][id];
      } else {
        profile.value.collection[selectedTab.value][id]--;
      }
    }
  } else {
    if (increment) {
      profile.value.collection[selectedTab.value][id] = 1;
    }
  }
};

const changeUsername = async () => {
  const username = state.usernameEditText.trim();

  if (username.length === 0 || username.length > 15) {
    createToast("Invalid username (must be <=15 chars)!", "error");
    return;
  }

  if (username === profile.value.username) {
    state.editingUsername = false;
    return;
  }

  try {
    profile.value.username = username;
    await setDoc(state.docRef, profile.value);
    userData.value.username = username;
    setMeta(`Realm trove | ${username}'s Items`);
    createToast("Username updated!", "green-vue");
    state.editingUsername = false;
  } catch (e) {
    createToast(e.message, "error");
  }
};

const cancelChanges = () => {
  profile.value.collection = state.initialCollection;
  state.initialCollection = undefined;
};

const confirmChanges = async () => {
  try {
    await setDoc(state.docRef, profile.value);
    if (itemCollectionPercentage.value === 100) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      createToast("Congratulations!!!", "green-vue", 10000);
    } else {
      createToast("Saved!", "green-vue");
    }
    searchItems();
    state.initialCollection = undefined;
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  }
};

const resetCollection = async () => {
  try {
    const emptyCollection = { ...profile.value };
    emptyCollection.collection[selectedTab.value] = {};
    await setDoc(state.docRef, emptyCollection);
    createToast("Progress has been reset!", "green-vue");
    state.initialCollection = undefined;
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  } finally {
    state.confirmDialogOpen = false;
  }
};

const searchItems = useDebounceFn(() => {
  const filterConditions: ((item: ItemInfo) => boolean)[] = [
    (item) => item.name.toLowerCase().includes(state.searchText.toLowerCase())
  ];

  // Source
  if (state.lootSource.length !== 0) {
    filterConditions.push((item) => state.lootSource.includes(item.source));
  }

  // Type
  if (state.itemType.length !== 0) {
    filterConditions.push((item) => state.itemType.includes(item.type));
  }

  // Vanity items
  if (state.showVanity === false) {
    filterConditions.push((item) => item.vanity !== true);
  } else if (state.showVanity === true) {
    filterConditions.push((item) => item.vanity === true);
  }

  // Missing items
  if (state.showOnlyMissingItems === true) {
    filterConditions.push(
      (item) => !(item.id in profile.value.collection[selectedTab.value])
    );
  } else if (state.showOnlyMissingItems === false) {
    filterConditions.push(
      (item) => item.id in profile.value.collection[selectedTab.value]
    );
  }

  state.filteredCollection = {
    [TAB.UT]: items[TAB.UT].filter((item) =>
      filterConditions.every((i) => i(item))
    ),
    [TAB.ST]: items[TAB.ST].filter((item) =>
      filterConditions.every((i) => i(item))
    ),
    [TAB.BP]: items[TAB.BP].filter((item) =>
      filterConditions.every((i) => i(item))
    )
  };
}, 300);

const exportAsScreenshot = async () => {
  try {
    state.screenshotLoading = true;
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
    state.screenshotLoading = false;
    removePermanentToasts();
  }
};

watch(
  () => [
    state.searchText,
    state.lootSource,
    state.itemType,
    state.showOnlyMissingItems,
    state.showVanity
  ],
  searchItems
);

watch(pendingChanges, (val) => {
  if (!val) {
    removePermanentToasts();
    state.initialCollection = undefined;
  }
});

watch(logoutTrigger, (val) => {
  if (val) {
    if (state.initialCollection) {
      profile.value.collection = state.initialCollection;
    }
    state.initialCollection = undefined;
  }
});

watch(
  loading,
  () => {
    if (profile.value) {
      setMeta(`Realm trove | ${profile.value.username}'s Items`);
      state.usernameEditText = profile.value.username;

      state.docRef = doc(
        $firebaseFirestore,
        "profile",
        route.params.slug as string
      );

      state.unsubscribe = onSnapshot(state.docRef, (snap) => {
        if (state.initialMount) {
          state.initialMount = false;
        } else {
          profile.value = snap.data() as Profile;
        }
      });
    } else {
      setMeta("Loading ...");
    }
  },
  {
    immediate: true
  }
);

onBeforeUnmount(() => {
  if (state.unsubscribe) {
    state.unsubscribe();
  }
  state.docRef = undefined;
  state.initialCollection = undefined;
  removePermanentToasts();
});
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
