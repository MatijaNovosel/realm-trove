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
        class="item absolute"
        :style="{
          right: '12px',
          top: bp.items.length !== 1 ? `${11 * (i - 1.3)}px` : '10px',
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
