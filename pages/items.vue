<template>
  <div
    class="offset w-full"
    :class="{
      'h-full flex justify-center items-center': loading
    }"
  >
    <transition name="bounce">
      <spinner class="mt-4 mx-auto" v-if="loading" />
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
          <items-grid
            :coordinates="activeTab === Tabs.UT ? utCoordinates : stCoordinates"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ItemCoordinate } from "~/models";
import { Tabs } from "~/utils/helpers";

const activeTab = ref(Tabs.UT);
const loading = ref(true);
const utCoordinates = ref<ItemCoordinate[]>([]);
const stCoordinates = ref<ItemCoordinate[]>([]);

const utItemData = [
  {
    id: 1,
    name: "Helm of the juggernaut",
    acquired: true,
    event: true
  }
];

const changeTab = (tab: Tabs) => {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
};

onMounted(() => {
  for (let i = 0; i < 50; i++) {
    utCoordinates.value.push({
      x: -13708 - i * 46,
      y: -184
    });
  }

  for (let i = 0; i < 50; i++) {
    stCoordinates.value.push({
      x: -12788 - i * 46,
      y: -184
    });
  }

  setTimeout(() => {
    loading.value = false;
  }, 750);
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Items");
</script>
