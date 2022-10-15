<template>
  <div class="contents">
    <transition name="modal">
      <app-modal
        title="Loot source"
        v-if="modalOpen"
        @close="modalOpen = false"
      >
        <div class="flex flex-wrap">Hi</div>
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
            class="text-4xl font-bold mb-5 mt-6 flex items-center justify-center user-select-none"
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
          <div class="grid grid-cols-12 my-5 px-7 md:px-3">
            <div
              class="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start"
            >
              <MouseButtonLeftIcon class="mr-1" />
              <span class="mr-3"> Increase </span>
              <MouseButtonRightIcon class="mr-1" />
              <span> Decrease </span>
            </div>
            <div
              class="col-span-12 md:col-span-4 my-4 md:my-0 flex items-center"
            >
              <items-search-input
                :loading="pending"
                :error="error"
                v-model="searchText"
              />
              <div
                class="bg-dark-800 ml-2 filter-btn flex items-center rounded-lg cursor-pointer ripple"
                @click="modalOpen = true"
              >
                <FilterIcon />
              </div>
            </div>
            <div
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
            :collection="playerCollection"
            :initial="initialCollection"
            :tab="activeTab"
            @increment="updateCollection"
            @decrement="updateCollection($event, false)"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayerCollection } from "~/models";
import { TAB } from "~/utils/constants";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import MouseButtonLeftIcon from "~icons/iconoir/mouse-button-left";
import MouseButtonRightIcon from "~icons/iconoir/mouse-button-right";
import FilterIcon from "~icons/material-symbols/filter-list";
import { POSITION, useToast } from "vue-toastification";

const activeTab = ref(TAB.UT);
const initialCollection = ref<PlayerCollection>();
const searchText = ref("");
const modalOpen = ref(false);

const { items } = useItems();
const toast = useToast();

const { data: playerCollection, pending, error } = useFetch("/api/items");

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
    [TAB.UT]: Object.keys(playerCollection.value.ut).length,
    [TAB.ST]: Object.keys(playerCollection.value.st).length
  };
});

const itemCollectionPercentage = computed(() => {
  return itemsCollected.value[activeTab.value] / items[activeTab.value].length;
});

const pendingChanges = computed(() => {
  return (
    initialCollection.value !== undefined &&
    JSON.stringify(initialCollection.value) !==
      JSON.stringify(playerCollection.value)
  );
});

const updateCollection = async (id: number, increment: boolean = true) => {
  if (!initialCollection.value) {
    initialCollection.value = JSON.parse(
      JSON.stringify(playerCollection.value)
    );
  }

  if (id in playerCollection.value[activeTab.value]) {
    if (increment) {
      playerCollection.value[activeTab.value][id]++;
    } else {
      if (playerCollection.value[activeTab.value][id] - 1 <= 0) {
        delete playerCollection.value[activeTab.value][id];
      } else {
        playerCollection.value[activeTab.value][id]--;
      }
    }
  } else {
    if (increment) {
      playerCollection.value[activeTab.value][id] = 1;
    }
  }
};

const cancelChanges = () => {
  playerCollection.value = initialCollection.value;
  initialCollection.value = undefined;
};

const confirmChanges = async () => {
  try {
    const { firestore } = useFirebase();
    const docRef = doc(firestore, "items", "UnvQmlkSkodFO6NTyv3mtY1bJyJ3");
    await updateDoc(docRef, JSON.parse(JSON.stringify(playerCollection.value)));
    toast.success("Saved!", {
      timeout: 2000,
      position: POSITION.BOTTOM_CENTER
    });
    initialCollection.value = undefined;
  } catch (e) {
    toast.error(e, {
      timeout: 2000,
      position: POSITION.BOTTOM_CENTER
    });
    error.value = true;
  }
};

onMounted(() => {
  try {
    const { firestore } = useFirebase();
    const docRef = doc(firestore, "items", "UnvQmlkSkodFO6NTyv3mtY1bJyJ3");
    onSnapshot(docRef, (snap) => {
      playerCollection.value = snap.data() as PlayerCollection;
    });
  } catch (e) {
    toast.error(e, {
      timeout: 2000,
      position: POSITION.BOTTOM_CENTER
    });
    error.value = true;
  }
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Items");
</script>

<style scoped>
.filter-btn {
  padding: 5px;
}
</style>
