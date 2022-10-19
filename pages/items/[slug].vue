<template>
  <div class="contents">
    <transition name="modal">
      <app-modal
        title="Loot source"
        v-if="modalOpen"
        @close="modalOpen = false"
      >
        <div class="flex flex-col">
          <div
            class="flex items-center my-2"
            v-for="(s, i) in Object.entries(SOURCE)
              .filter((value) => typeof value[1] === 'string')
              .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))"
            :key="i"
          >
            <input type="checkbox" class="mr-3" />
            <span>
              {{ s[1] }}
            </span>
          </div>
        </div>
      </app-modal>
    </transition>
    <transition name="modal">
      <app-modal
        title="Are you sure?"
        v-if="confirmDialogOpen"
        @close="confirmDialogOpen = false"
      >
        <div class="flex justify-center py-3">
          <button
            class="mr-2 rounded px-2 bg-green-500 ripple"
            @click="resetCollection"
          >
            Yes
          </button>
          <button
            class="rounded px-2 bg-red-500 ripple"
            @click="confirmDialogOpen = false"
          >
            No
          </button>
        </div>
      </app-modal>
    </transition>
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
          <div
            class="text-4xl font-bold mb-2 mt-6 flex items-center justify-center user-select-none"
          >
            <div
              @click="changeTab(TAB.UT)"
              class="ripple px-3 py-1 cursor-pointer rounded-lg"
              :class="{
                'text-green-vue': activeTab === TAB.UT
              }"
            >
              UT
            </div>
            <div class="mx-3">•</div>
            <div
              @click="changeTab(TAB.ST)"
              class="ripple px-3 py-1 cursor-pointer rounded-lg"
              :class="{
                'text-green-vue': activeTab === TAB.ST
              }"
            >
              ST
            </div>
          </div>
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
            <div
              v-if="isCurrentUser"
              class="bg-dark-800 ml-4 filter-btn flex items-center rounded-lg cursor-pointer ripple h-full"
              :class="{
                'bg-green-vue': editingUsername
              }"
              v-tooltip="{
                content: editingUsername ? 'Confirm' : 'Change username',
                theme: 'info-tooltip'
              }"
              @click="
                editingUsername
                  ? changeUsername()
                  : (editingUsername = !editingUsername)
              "
            >
              <CheckmarkIcon v-if="editingUsername" />
              <PencilIcon v-else />
            </div>
          </div>
          <div class="grid grid-cols-12 my-5 px-7 md:px-3">
            <div
              v-if="isCurrentUser"
              class="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start"
            >
              <MouseButtonLeftIcon class="mr-1" />
              <span class="mr-3"> Increase </span>
              <MouseButtonRightIcon class="mr-1" />
              <span> Decrease </span>
            </div>
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
              <div
                class="bg-dark-800 mx-2 filter-btn flex items-center rounded-lg cursor-pointer ripple"
                @click="modalOpen = true"
                v-tooltip="{
                  content: 'Filter',
                  theme: 'info-tooltip'
                }"
              >
                <FilterIcon />
              </div>
              <div
                v-if="isCurrentUser"
                class="bg-dark-800 filter-btn flex items-center rounded-lg cursor-pointer"
                v-tooltip="{
                  content: 'Reset',
                  theme: 'info-tooltip'
                }"
                :class="{
                  'cursor-not-allowed': pendingChanges,
                  'text-green-vue ripple': !pendingChanges
                }"
                :disabled="pendingChanges"
                @click="pendingChanges ? null : (confirmDialogOpen = true)"
              >
                <ResetIcon />
              </div>
            </div>
            <div
              v-if="isCurrentUser"
              class="col-span-12 md:col-span-4 flex justify-center md:justify-end"
            >
              <button
                :disabled="!pendingChanges"
                :class="{
                  'bg-dark-400 cursor-not-allowed': !pendingChanges,
                  'bg-red-500 ripple': pendingChanges
                }"
                class="rounded px-2"
                @click="pendingChanges ? cancelChanges() : null"
              >
                Cancel
              </button>
              <button
                :disabled="!pendingChanges"
                :class="{
                  'bg-dark-400 cursor-not-allowed': !pendingChanges,
                  'bg-green-500 ripple': pendingChanges
                }"
                class="ml-2 rounded px-2"
                @click="pendingChanges ? confirmChanges() : null"
              >
                Save
              </button>
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
import { TAB, SOURCE } from "~/utils/constants";
import {
  doc,
  DocumentData,
  DocumentReference,
  onSnapshot,
  setDoc,
  Unsubscribe
} from "firebase/firestore";
import MouseButtonLeftIcon from "~icons/iconoir/mouse-button-left";
import MouseButtonRightIcon from "~icons/iconoir/mouse-button-right";
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
const selectedGroups = ref<number[]>([]);
const profile = ref<Profile>();
const usernameEditText = ref("");
const docRef = ref<DocumentReference<DocumentData>>();

const { $firebaseFirestore } = useNuxtApp();
const { items } = useItems();
const { createToast, removePermanentToasts, permanentToastExists } = useToast();
const user = useUser();
const route = useRoute();

const userSlug = computed(() => {
  return route.params.slug;
});

const isCurrentUser = computed(() => {
  if (user.value) {
    return user.value.uid === userSlug.value;
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
  if (!initialCollection.value) {
    initialCollection.value = JSON.parse(
      JSON.stringify(profile.value.collection)
    );
  }

  if (!permanentToastExists.value) {
    createToast("You have pending changes", "green-500", -1, true);
  }

  if (id in profile.value.collection[activeTab.value]) {
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
    await setDoc(docRef.value, {
      username: profile.value.username,
      collection: {
        st: {},
        ut: {}
      }
    });
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
    const data = await $fetch(`/api/items/${userSlug.value}`);

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
    }
  }
);

const { setMeta } = useMetadata();
setMeta("Realm trove | Items");
</script>

<style scoped>
.filter-btn {
  padding: 5px;
}
</style>
