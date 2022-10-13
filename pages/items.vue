<template>
  <div
    class="offset w-full"
    :class="{
      'h-full flex justify-center items-center': pending
    }"
  >
    <transition name="bounce">
      <spinner class="mt-4 mx-auto" v-if="pending" />
      <div class="mt-4 mx-auto text-red text-2xl" v-else-if="error">
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
        <div class="flex flex-wrap justify-center md:justify-start">
          <items-grid :collection="playerCollection" :tab="activeTab" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { PlayerCollection } from "~/models";
import { Tabs } from "~/utils/constants";
import { doc, onSnapshot } from "firebase/firestore";

const activeTab = ref(Tabs.UT);

const { data: playerCollection, pending, error } = useFetch("/api/items");

const changeTab = (tab: Tabs) => {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
};

onMounted(() => {
  const { firestore } = useFirebase();
  const docRef = doc(firestore, "items", "UnvQmlkSkodFO6NTyv3mtY1bJyJ3");
  onSnapshot(docRef, (snap) => {
    playerCollection.value = snap.data() as PlayerCollection;
  });
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Items");
</script>
