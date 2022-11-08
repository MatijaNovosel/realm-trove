<template>
  <div
    class="flex flex-wrap justify-center md:justify-start no-highlight gap-1"
    v-if="items[selectedTab].length > 0"
  >
    <div
      v-for="{ pos, id, name, source, type, bp, vanity } in items[selectedTab]"
      :key="id"
    >
      <Tooltip theme="info-tooltip">
        <items-grid-item
          :bp="bp"
          :x="bp ? BP_QUALITY_POS[bp.quality].x : pos.x"
          :y="bp ? BP_QUALITY_POS[bp.quality].y : pos.y"
          :status-class="badgeClass(id) || ''"
          :count="collection[selectedTab][id] || 0"
          :id="id"
          :disabled="disabled"
          @lclick="$emit('increment', id)"
          @rclick="$emit('decrement', id)"
        />
        <template #popper>
          <div class="text-xs flex flex-col py-1">
            <span class="text-green-vue text-center md:text-left">
              {{ `${name}${bp ? " Blueprint" : ""}` }}
            </span>
            <hr class="divider my-1.5" />
            <span class="mb-1"> 🌍 {{ SOURCE_NAMES[source] }} </span>
            <span v-if="type">
              {{ formatItemTypeIcon(type) }} {{ ITEM_TYPE_NAMES[type] }}
            </span>
            <span class="mt-1.5" v-if="vanity">
              🎭 Limited edition / Vanity
            </span>
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
import {
  SOURCE_NAMES,
  ITEM_TYPE_NAMES,
  BP_QUALITY_POS
} from "~/utils/constants";
import { formatItemTypeIcon } from "~/utils/helpers";

const props = defineProps<{
  collection: PlayerCollection;
  initial: PlayerCollection | undefined;
  items: IDictionary<ItemInfo[]>;
  disabled: boolean;
}>();

const selectedTab = useSelectedTab();

const badgeClass = (id: number) => {
  if (props.initial) {
    const initialCollectionCount = props.initial[selectedTab.value][id] || 0;
    const currentCollectionCount = props.collection[selectedTab.value][id];

    if (initialCollectionCount > currentCollectionCount) {
      return "text-error font-bold";
    } else if (initialCollectionCount < currentCollectionCount) {
      return "text-green-vue font-bold";
    }
  }
};

defineEmits(["increment", "decrement"]);
</script>
