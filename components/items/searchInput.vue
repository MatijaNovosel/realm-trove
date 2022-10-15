<template>
  <div class="flex">
    <div
      class="bg-dark-800 icon flex items-center justify-center rounded-l-lg px-3"
    >
      <IconSearch class="text-lg text-gray-700" />
    </div>
    <input
      :disabled="loading || !!error"
      placeholder="Search items"
      class="bg-dark-800"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="search"
    />
    <div
      class="bg-dark-800 icon flex items-center justify-center rounded-r-lg px-3"
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
  loading: boolean;
  error: boolean | Error;
}>();

const emit = defineEmits(["update:modelValue"]);

const clearSearch = () => {
  emit("update:modelValue", "");
};
</script>

<style scoped>
input {
  height: 30px;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  color: rgb(193, 194, 197);
  outline: none;
  width: calc(100% - 100px);
}

.icon {
  height: 30px;
  width: 50px;
  -webkit-tap-highlight-color: transparent;
}

.tag-search-btn {
  height: 30px;
  width: 50px;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
}
</style>
