<template>
  <div class="flex flex-wrap justify-center md:justify-start">
    <div
      class="item p-3 text-center p-2 m-1 relative cursor-pointer"
      v-for="({ pos, id, name }, i) in items[tab]"
      :key="i"
      :style="{
        backgroundPosition: `${pos.x}px ${pos.y}px`,
        filter: `grayscale(${collection[tab][id] ? 0 : 100}%)`
      }"
      v-tooltip="{
        content: name,
        theme: 'info-tooltip'
      }"
      @click="$emit('increment', id)"
      @contextmenu.prevent="$emit('decrement', id)"
    >
      <div class="badge user-select-none">
        {{ collection[tab][id] !== 0 ? collection[tab][id] : "" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IDictionary, ItemInfo, PlayerCollection } from "~/models";
import { TAB } from "~/utils/constants";

defineProps<{
  collection: PlayerCollection;
  tab: TAB;
  items: IDictionary<ItemInfo[]>;
}>();

defineEmits(["increment", "decrement"]);
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
  background-color: black;
  bottom: 0px;
  right: 0px;
}
</style>
