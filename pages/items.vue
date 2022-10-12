<template>
  <div class="offset w-full">
    <div class="text-4xl font-bold mb-5 mt-6 flex items-center justify-center user-select-none">
      <div @click="activeTab = Tabs.UT" class="ripple px-3 py-1 cursor-pointer rounded-lg" :class="{
        'text-green-vue': activeTab === Tabs.UT
      }">
        UT
      </div>
      <div class="mx-3">
        •
      </div>
      <div @click="activeTab = Tabs.ST" class="ripple px-3 py-1 cursor-pointer rounded-lg" :class="{
        'text-green-vue': activeTab === Tabs.ST
      }">
        ST
      </div>
    </div>
    <div class=" grid grid-cols-12 gap-4 justify-center">
      <div class="item bg-dark-700 rounded-lg p-3 col-span-1 text-center relative" v-for="n in 100" :key="n" :style="{
      background: 'url(renders.png)',
      backgroundPosition: '-13708px -184px'}" />
    </div>
  </div>
</template>

<script setup lang="ts">
enum Tabs {
  UT = "ut",
  ST = "st"
}

const activeTab = ref(Tabs.UT);

const { setMeta } = useMetadata();
setMeta("Realm trove | Items");
</script>

<style>
.item {
  display: inline-block;
  position: relative;
  width: 46px;
  margin: -1px -3px -3px;
  background-image: url("renders.png");
}
</style>