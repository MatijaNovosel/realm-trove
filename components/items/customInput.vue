<template>
  <div class="flex">
    <div
      class="bg-dark-800 icon flex-center rounded-l-lg px-3"
      :style="{
        height: dense ? '30px' : '50px'
      }"
    >
      <IconSearch class="text-lg text-gray-700" />
    </div>
    <input
      :style="{
        fontSize: dense ? '14px' : '20px',
        height: dense ? '30px' : '50px',
        width: `calc(100% - ${hideClear ? 50 : 100}px)`
      }"
      :disabled="loading || !!error"
      :placeholder="placeholder"
      class="bg-dark-800 w-full"
      :class="{
        'rounded-r-lg': hideClear
      }"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="search"
    />
    <div
      v-if="!hideClear"
      class="bg-dark-800 icon flex-center rounded-r-lg px-3"
      :style="{
        height: dense ? '30px' : '50px'
      }"
    >
      <IconClear
        @click="clearSearch"
        class="text-xl ripple cursor-pointer rounded-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconSearch from "~icons/material-symbols/search";
import IconClear from "~icons/ic/round-clear";

defineProps<{
  modelValue: string;
  placeholder?: string;
  loading: boolean;
  error: boolean | Error;
  dense?: boolean;
  hideClear?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const clearSearch = () => {
  emit("update:modelValue", "");
};
</script>

<style scoped>
input {
  -webkit-tap-highlight-color: transparent;
  color: rgb(193, 194, 197);
  outline: none;
}

.icon {
  width: 50px;
  -webkit-tap-highlight-color: transparent;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
}
</style>
