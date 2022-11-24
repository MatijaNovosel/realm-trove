<template>
  <div
    class="flex flex-wrap justify-center md:justify-start no-highlight gap-3"
    v-if="items[selectedTab].length > 0"
  >
    <div
      v-for="{ pos, id, name, source, type, bp, vanity } in items[selectedTab]"
      :key="id"
    >
      <tooltip theme="info-tooltip">
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
              {{ ITEM_TYPE_ICON[type] }} {{ ITEM_TYPE_NAMES[type] }}
            </span>
            <span class="mt-1.5" v-if="vanity">
              🎭 Limited edition / Vanity
            </span>
          </div>
        </template>
      </tooltip>
    </div>
  </div>
  <div class="text-center pt-3" v-else>
    <span class="text-2xl"> No items found 😢 </span>
  </div>
</template>

<script lang="ts" setup>
import { Tooltip } from "floating-vue";
import { PropType } from "vue";
import { IDictionary, ItemInfo, PlayerCollection } from "~/models";
import {
  BP_QUALITY_POS,
  ITEM_TYPE_ICON,
  ITEM_TYPE_NAMES,
  SOURCE_NAMES
} from "~/utils/constants";

const props = defineProps({
  collection: Object as PropType<PlayerCollection>,
  initial: Object as PropType<PlayerCollection>,
  items: Object as PropType<IDictionary<ItemInfo[]>>,
  disabled: Boolean
});

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
