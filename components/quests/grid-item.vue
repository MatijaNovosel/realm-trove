<template>
  <div
    class="item p-3 text-center m-1 relative cursor-pointer"
    :style="{
      backgroundPosition: `${x}px ${y}px`,
      filter: `grayscale(${count ? 0 : 100}%)`
    }"
    @click="$emit('lclick', id)"
    @contextmenu.prevent="$emit('rclick', id)"
  >
    <div class="badge user-select-none" :class="statusClass">
      {{ count !== 0 ? count : "" }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
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
