<template>
  <div
    class="item p-3 text-center p-2 m-1 relative cursor-pointer"
    v-for="(coordinate, i) in coordinates"
    :key="i"
    :style="{
      backgroundPosition: `${coordinate.x}px ${coordinate.y}px`,
      filter: `grayscale(${i % 2 === 0 ? 0 : 100}%)`
    }"
  >
    <div class="badge user-select-none">3</div>
  </div>
</template>

<script lang="ts" setup>
import { ItemCoordinate } from "~/models";

defineProps<{
  coordinates: ItemCoordinate[];
}>();

const animated = ref(false);
</script>

<style scoped>
.item {
  width: 46px;
  height: 46px;
  background-image: url("/renders.png");
}

.badge {
  position: absolute;
  background-color: black;
  bottom: 0px;
  right: 0px;
}
</style>
