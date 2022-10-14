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
        <div class="flex justify-center items-center my-5">
          <MouseButtonLeftIcon class="mr-1" />
          <span class="mr-3"> Increase </span>
          <MouseButtonRightIcon class="mr-1" />
          <span> Decrease </span>
        </div>
        <items-progress-bar
          :progress="
            (itemsCollected[activeTab] / items[activeTab].length) * 100
          "
          class="mb-5 user-select-none"
        >
          <span>
            {{ itemsCollected[activeTab] }} / {{ items[activeTab].length }} ({{
              (
                (itemsCollected[activeTab] / items[activeTab].length) *
                100
              ).toFixed(2)
            }}%)
          </span>
        </items-progress-bar>
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

const activeTab = ref(Tabs.UT);
const { items } = useItems();

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

const updateCollection = async (id: number, increment: boolean = true) => {
  const { firestore } = useFirebase();
  const docRef = doc(firestore, "items", "UnvQmlkSkodFO6NTyv3mtY1bJyJ3");

  const newPlayerCollection = JSON.parse(
    JSON.stringify(playerCollection.value)
  );

  if (id in newPlayerCollection[activeTab.value]) {
    if (increment) {
      newPlayerCollection[activeTab.value][id]++;
    } else {
      if (newPlayerCollection[activeTab.value][id] - 1 <= 0) {
        delete newPlayerCollection[activeTab.value][id];
      } else {
        newPlayerCollection[activeTab.value][id]--;
      }
    }
  } else {
    if (increment) {
      newPlayerCollection[activeTab.value][id] = 1;
    }
  }

  if (
    JSON.stringify(playerCollection.value) !==
    JSON.stringify(newPlayerCollection)
  ) {
    await updateDoc(docRef, newPlayerCollection);
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
    console.error(e);
    error.value = true;
  }
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Items");
</script>
