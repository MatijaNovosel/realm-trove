<template>
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
            @click="changeTab(Tabs.UT)"
            class="ripple px-3 py-1 cursor-pointer rounded-lg"
            :class="{
              'text-green-vue': activeTab === Tabs.UT
            }"
          >
            UT
          </div>
          <div class="mx-3">•</div>
          <div
            @click="changeTab(Tabs.ST)"
            class="ripple px-3 py-1 cursor-pointer rounded-lg"
            :class="{
              'text-green-vue': activeTab === Tabs.ST
            }"
          >
            ST
          </div>
        </div>
        <div class="flex justify-between items-center my-5 px-8 md:px-3">
          <div class="flex items-center">
            <MouseButtonLeftIcon class="mr-1" />
            <span class="mr-3"> Increase </span>
            <MouseButtonRightIcon class="mr-1" />
            <span> Decrease </span>
          </div>
          <div>
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
        <div class="px-8 md:px-3">
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
          :items="items"
          :collection="playerCollection"
          :tab="activeTab"
          @increment="updateCollection"
          @decrement="updateCollection($event, false)"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { PlayerCollection } from "~/models";
import { Tabs } from "~/utils/constants";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import MouseButtonLeftIcon from "~icons/iconoir/mouse-button-left";
import MouseButtonRightIcon from "~icons/iconoir/mouse-button-right";
import { POSITION, useToast } from "vue-toastification";

const activeTab = ref(Tabs.UT);
const initialCollection = ref<PlayerCollection>(undefined);

const { items } = useItems();
const toast = useToast();

const { data: playerCollection, pending, error } = useFetch("/api/items");

const changeTab = (tab: Tabs) => {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
};

const itemsCollected = computed(() => {
  return {
    [Tabs.UT]: Object.keys(playerCollection.value.ut).length,
    [Tabs.ST]: Object.keys(playerCollection.value.st).length
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
