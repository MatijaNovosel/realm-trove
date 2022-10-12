<template>
  <div class="offset w-full">
    <div class="text-4xl font-bold mb-5 mt-6 flex items-center justify-center">
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
      <div class="item bg-dark-700 rounded-lg p-3 col-span-1" v-for="n in 100" :key="n">
        Item
      </div>
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
