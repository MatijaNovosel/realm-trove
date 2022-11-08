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
          :options="optionsLootSource"
          v-model="selectedLootSource"
          @on-selected="$emit('update:loot-source', selectedLootSource)"
        />
        <template v-if="selectedTab !== TAB.BP">
          <custom-select
            class="mt-4"
            placeholder="Item type"
            :options="optionsItemType"
            v-model="selectedItemType"
            @on-selected="$emit('update:item-type', selectedItemType)"
          />
        </template>
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import {
  SOURCE,
  SOURCE_NAMES,
  ITEM_TYPE,
  ITEM_TYPE_NAMES,
  TAB,
  CHECKBOX_STATE
} from "~/utils/constants";
import { SelectItem } from "~/models";

const selectedTab = useSelectedTab();

const optionsLootSource = computed<SelectItem<number>[]>(() => {
  return Object.entries(SOURCE)
    .filter((value) => typeof value[1] === "string")
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map((x) => ({
      value: parseInt(x[0]),
      text: SOURCE_NAMES[x[0]]
    }));
});

const optionsItemType = computed<SelectItem<number>[]>(() => {
  return Object.entries(ITEM_TYPE)
    .filter((value) => typeof value[1] === "string")
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map((x) => ({
      value: parseInt(x[0]),
      text: ITEM_TYPE_NAMES[x[0]]
    }));
});

const props = defineProps<{
  lootSource: number[];
  itemType: number[];
  open: boolean;
  showVanity: CHECKBOX_STATE;
  showMissingItems: CHECKBOX_STATE;
}>();

const selectedLootSource = ref<number[]>(props.lootSource);
const selectedItemType = ref<number[]>(props.itemType);
const showVanity = ref<CHECKBOX_STATE>(props.showVanity);
const showMissingItems = ref<CHECKBOX_STATE>(props.showMissingItems);

defineEmits(["close", "update:loot-source", "update:item-type"]);
</script>
