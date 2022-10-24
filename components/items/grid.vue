<template>
  <div
    class="flex flex-wrap justify-center md:justify-start no-highlight"
    v-if="items[tab].length > 0"
  >
    <div v-for="{ pos, id, name, source, type } in items[tab]" :key="id">
      <Tooltip theme="info-tooltip">
        <items-grid-item
          :x="pos.x"
          :y="pos.y"
          :status-class="badgeClass(id)"
          :count="collection[tab][id]"
          :id="id"
          :disabled="disabled"
          @lclick="$emit('increment', id)"
          @rclick="$emit('decrement', id)"
        />
        <template #popper>
          <div class="text-xs flex flex-col">
            <span class="text-green-vue">
              {{ name }}
            </span>
            <hr class="divider my-1.5" />
            <span> 🔸 {{ SOURCE_NAMES[source] }} </span>
            <span> 🔸 {{ ITEM_TYPE_NAMES[type] }} </span>
          </div>
        </template>
      </Tooltip>
    </div>
  </div>
  <div class="text-center pt-3" v-else>
    <span class="text-2xl"> No items found 😢 </span>
  </div>
</template>

<script lang="ts" setup>
import { Tooltip } from "floating-vue";
import { IDictionary, ItemInfo, PlayerCollection } from "~/models";
import { TAB, SOURCE_NAMES, ITEM_TYPE_NAMES } from "~/utils/constants";

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
      return "text-error font-bold";
    } else if (initialCollectionCount < currentCollectionCount) {
      return "text-green-vue font-bold";
    }
  }
};

defineEmits(["increment", "decrement"]);
</script>
