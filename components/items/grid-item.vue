<template>
  <div
    class="item p-3 text-center m-1 relative"
    :style="{
      backgroundPosition: `${x}px ${y}px`,
      filter: `grayscale(${count ? 0 : 100}%)`
    }"
    :class="{
      'cursor-pointer': !disabled
    }"
    @click="disabled ? null : $emit('lclick', id)"
    @contextmenu.prevent="disabled ? null : $emit('rclick', id)"
  >
    <div class="badge user-select-none" :class="statusClass">
      {{ count !== 0 ? count : "" }}
    </div>
    <template v-if="bp">
      <div
        class="item absolute right-2"
        :style="{
          scale: 0.5,
          backgroundPosition: `${item.x}px ${item.y}px`,
          filter: `grayscale(${count ? 0 : 100}%)`
        }"
        v-for="(item, i) in bp.items"
        :key="i"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { BpData } from "~/models";

defineProps<{
  bp?: BpData;
  disabled: boolean;
  x: number;
  y: number;
  count: number;
  id: number;
  statusClass: string;
}>();

defineEmits(["lclick", "rclick"]);
</script>

<style scoped>
.item {
  width: 46px;
  height: 46px;
  background-image: url("/items.png");
  background-repeat: no-repeat;
}

.badge {
  position: absolute;
  font-size: 14px;
  bottom: -6px;
  right: -10px;
  border-radius: 100%;
  width: 22px;
  height: 22px;
}
</style>
