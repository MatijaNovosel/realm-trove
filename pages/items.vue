<template>
  <div class="offset w-full" :class="{
    'h-full flex justify-center items-center': loading
  }">
    <transition name="bounce">
      <spinner class="mt-4 mx-auto" v-if="loading" />
      <div class="display-contents" v-else>
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
        <div class="flex flex-wrap justify-center md:justify-start">
          <template v-if="activeTab === Tabs.UT">
            <div class="item p-3 text-center p-2 m-1" v-for="(coordinate, i) in utCoordinates" :key="i"
              :style="{ backgroundPosition: `${coordinate.x}px ${coordinate.y}px` }" />
          </template>
          <template v-else>
            <div class="item p-3 text-center p-2 m-1" v-for="(coordinate, i) in stCoordinates" :key="i"
              :style="{ backgroundPosition: `${coordinate.x}px ${coordinate.y}px` }" />
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ItemCoordinate } from '~/models';
import { Tabs } from '~/utils/helpers';

const activeTab = ref(Tabs.UT);
const loading = ref(true);
const utCoordinates = ref<ItemCoordinate[]>([]);
const stCoordinates = ref<ItemCoordinate[]>([]);

onMounted(() => {
  for (let i = 0; i < 50; i++) {
    utCoordinates.value.push({
      x: -13708 - (i * 46),
      y: -184
    });
  }

  for (let i = 0; i < 50; i++) {
    stCoordinates.value.push({
      x: -12788 - (i * 46),
      y: -184
    });
  }

  setTimeout(() => {
    loading.value = false;
  }, 1500);
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Items");
</script>

<style>
.item {
  width: 46px;
  height: 46px;
  background-image: url("/renders.png");
}
</style>