<template>
  <div
    class="item p-3 text-center relative"
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
    <div class="badge" :class="statusClass">
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
import { PropType } from "vue";
import { BpData } from "~/models";

defineProps({
  bp: Object as PropType<BpData>,
  disabled: Boolean,
  x: Number,
  y: Number,
  count: Number,
  id: Number,
  statusClass: String
});

defineEmits(["lclick", "rclick"]);
</script>

<style scoped>
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
