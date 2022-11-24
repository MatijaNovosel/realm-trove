<template>
  <transition name="modal">
    <app-modal
      title="Filter items"
      v-show="open"
      has-close-btn
      @close-btn="$emit('close')"
    >
      <div class="py-2">
        <three-state-checkbox
          v-model="showVanity"
          label="Show vanity and/or limited items"
          @on-selected="$emit('update:show-vanity', showVanity)"
        />
        <three-state-checkbox
          class="my-3"
          v-model="showMissingItems"
          label="Show unobtained items"
          @on-selected="$emit('update:show-missing-items', showMissingItems)"
        />
        <custom-select
          placeholder="Loot source"
          :options="selectItemFromEnum(SOURCE, SOURCE_NAMES)"
          v-model="selectedLootSource"
          @on-selected="$emit('update:loot-source', selectedLootSource)"
        />
        <template v-if="selectedTab !== TAB.BP">
          <custom-select
            class="mt-4"
            placeholder="Item type"
            :options="selectItemFromEnum(ITEM_TYPE, ITEM_TYPE_NAMES)"
            v-model="selectedItemType"
            @on-selected="$emit('update:item-type', selectedItemType)"
          />
        </template>
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import {
  ITEM_TYPE,
  ITEM_TYPE_NAMES,
  SOURCE,
  SOURCE_NAMES,
  TAB
} from "~/utils/constants";
import { selectItemFromEnum } from "~/utils/helpers";

const selectedTab = useSelectedTab();

const props = defineProps({
  lootSource: Array as PropType<number[]>,
  itemType: Array as PropType<number[]>,
  open: Boolean,
  showVanity: Boolean,
  showMissingItems: Boolean
});

const selectedLootSource = ref<number[]>(props.lootSource);
const selectedItemType = ref<number[]>(props.itemType);
const showVanity = ref<boolean | undefined>(props.showVanity);
const showMissingItems = ref<boolean | undefined>(props.showMissingItems);

defineEmits([
  "close",
  "update:loot-source",
  "update:item-type",
  "update:show-missing-items",
  "update:show-vanity"
]);
</script>
