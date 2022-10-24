<template>
  <transition name="modal">
    <app-modal
      title="Filter items"
      v-show="open"
      has-close-btn
      @close-btn="$emit('close')"
    >
      <items-custom-select
        :options="options"
        v-model="selected"
        @on-selected="onSelected"
        popper-class="w-64 bg-white border rounded-lg shadow-md"
      />
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import { SOURCE, SOURCE_NAMES } from "~/utils/constants";
import { SelectItem } from "~/models";

const options = computed<SelectItem<number>[]>(() => {
  return Object.entries(SOURCE)
    .filter((value) => typeof value[1] === "string")
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map((x) => ({
      value: parseInt(x[0]),
      text: SOURCE_NAMES[x[0]]
    }));
});

const props = defineProps<{
  lootSource: number[];
  open: boolean;
}>();

const selected = ref<number[]>(props.lootSource);

const emit = defineEmits(["close", "update:loot-source"]);

const onSelected = () => {
  emit("update:loot-source", selected.value);
};
</script>
