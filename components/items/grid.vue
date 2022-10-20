<template>
  <div
    class="flex flex-wrap justify-center md:justify-start no-highlight"
    v-if="items[tab].length > 0"
  >
    <div
      class="item p-3 text-center p-2 m-1 relative"
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
      :class="{
        'cursor-pointer': !disabled
      }"
      @click="disabled ? null : $emit('increment', id)"
      @contextmenu.prevent="disabled ? null : $emit('decrement', id)"
    >
      <div class="badge user-select-none" :class="badgeClass(id)">
        {{ collection[tab][id] !== 0 ? collection[tab][id] : "" }}
      </div>
    </div>
  </div>
  <div class="text-center pt-3" v-else>
    <span class="text-2xl"> No items found 😢 </span>
  </div>
</template>

<script lang="ts" setup>
import { IDictionary, ItemInfo, PlayerCollection } from "~/models";
import { TAB } from "~/utils/constants";

const props = defineProps<{
  collection: PlayerCollection;
  initial: PlayerCollection | undefined;
  tab: TAB;
  items: IDictionary<ItemInfo[]>;
  disabled: boolean;
}>();

const badgeClass = (id: number) => {
  if (props.initial) {
    const initialCollectionCount = props.initial[props.tab][id] || 0;
    const currentCollectionCount = props.collection[props.tab][id];

    if (initialCollectionCount > currentCollectionCount) {
      return "text-red-500 font-bold";
    } else if (initialCollectionCount < currentCollectionCount) {
      return "text-green-500 font-bold";
    }
  }
};

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
  font-size: 14px;
  bottom: -6px;
  right: -10px;
  border-radius: 100%;
  width: 22px;
  height: 22px;
}
</style>
