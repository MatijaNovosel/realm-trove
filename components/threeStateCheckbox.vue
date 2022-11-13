<template>
  <div class="flex">
    <div
      class="flex items-center ripple cursor-pointer p-1 rounded text-green-vue"
      @click="changeState"
    >
      <CheckIcon v-if="selected === true" />
      <CheckIconIndeterminate v-else-if="selected === undefined" />
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

const props = defineProps<{
  modelValue?: boolean;
  label: string;
}>();

const selected = ref<boolean | undefined>(props.modelValue);

const emit = defineEmits(["update:modelValue", "on-selected"]);

const changeState = () => {
  switch (selected.value) {
    case true:
      selected.value = false;
      break;
    case false:
      selected.value = undefined;
      break;
    case undefined:
      selected.value = true;
      break;
  }

  emit("update:modelValue", selected);
  emit("on-selected");
};
</script>
