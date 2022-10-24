<template>
  <FloatingVueDropdown
    ref="popoverRef"
    :distance="5"
    :triggers="['click']"
    theme="dropdown-menu"
    placement="bottom-start"
    auto-hide
    auto-size
    :prevent-overflow="false"
    auto-boundary-max-size
    :flip="false"
    @hide="onHide"
  >
    <template #default>
      <button
        class="px-3 py-1 bg-dark rounded hover:bg-dark-100 transition duration-150 ease-in-out w-full text-left user-select-none no-highlight"
      >
        <div class="flex flex-wrap" v-if="selectedItems.size !== 0">
          <div
            class="my-1 mr-3 rounded text-sm flex"
            v-for="item in selectedItems"
            :key="item"
          >
            <div class="bg-green-vue px-3 rounded-l">
              {{ options.find((opt) => opt.value === item).text }}
            </div>
            <div
              @click.stop="selectedItems.delete(item)"
              class="flex items-center justify-center bg-dark-800 rounded-r px-1 ripple"
            >
              <CloseIcon />
            </div>
          </div>
        </div>
        <span v-else> {{ placeholder }} </span>
      </button>
    </template>
    <template #popper>
      <ul class="py-1 bg-dark-300 text-white rounded">
        <li
          v-for="{ text, value } in options"
          :key="value"
          class="py-1 px-2 hover:bg-dark-500 cursor-pointer text-sm"
          :class="{
            'text-green-vue': selectedItems.has(value)
          }"
          @click="
            selectedItems.has(value)
              ? selectedItems.delete(value)
              : selectedItems.add(value)
          "
        >
          {{ text }}
        </li>
      </ul>
    </template>
  </FloatingVueDropdown>
</template>

<script lang="ts" setup>
import { Dropdown as FloatingVueDropdown } from "floating-vue";
import { SelectItem } from "~/models";
import CloseIcon from "~icons/material-symbols/close";

const popoverRef = ref(null);
const selectedItems = ref<Set<number>>(new Set());

defineProps<{
  modelValue: number[];
  placeholder: string;
  options: SelectItem<number>[];
}>();

const onHide = () => {
  const popover = popoverRef.value;
  popover?.$refs.popper.$_targetNodes[0].focus();
};

const emit = defineEmits(["update:modelValue", "on-selected"]);

watch(
  () => selectedItems.value.values(),
  () => {
    emit("update:modelValue", [...selectedItems.value]);
    emit("on-selected");
  }
);
</script>

<style>
.v-popper--theme-dropdown-menu .v-popper__arrow-container {
  display: none;
}
</style>
