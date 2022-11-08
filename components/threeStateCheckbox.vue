<template>
  <div class="flex user-select-none">
    <div
      class="flex items-center ripple cursor-pointer p-1 rounded text-green-vue"
      @click="changeState"
    >
      <CheckIcon v-if="selected === CHECKBOX_STATE.CHECKED" />
      <CheckIconIndeterminate
        v-else-if="selected === CHECKBOX_STATE.INDETERMINATE"
      />
      <CheckIconEmpty v-else />
    </div>
    <div class="ml-2 flex items-center">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import CheckIcon from "~icons/material-symbols/check-box";
import CheckIconIndeterminate from "~icons/material-symbols/indeterminate-check-box";
import CheckIconEmpty from "~icons/material-symbols/check-box-outline-blank";
import { CHECKBOX_STATE } from "~/utils/constants";

const props = defineProps<{
  modelValue: CHECKBOX_STATE;
  label: string;
}>();

const selected = ref<CHECKBOX_STATE>(props.modelValue);

const emit = defineEmits(["update:modelValue", "on-selected"]);

const changeState = () => {
  if (
    selected.value === CHECKBOX_STATE.EMPTY ||
    selected.value === CHECKBOX_STATE.INDETERMINATE
  ) {
    selected.value++;
  } else {
    selected.value = CHECKBOX_STATE.EMPTY;
  }

  emit("update:modelValue", selected);
  emit("on-selected");
};
</script>
