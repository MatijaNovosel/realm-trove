<template>
  <div class="mask">
    <div class="wrapper">
      <div
        class="container bg-dark-600 rounded-lg mx-auto"
        :style="{
          maxWidth: maxWidth || '600px'
        }"
        ref="modal"
      >
        <div class="w-full">
          <div class="p-4 flex justify-between items-center">
            <span>
              {{ title }}
            </span>
            <app-icon-button
              v-if="hasCloseBtn"
              tooltip="Close"
              background-color="dark"
              @on-click="$emit('close-btn')"
            >
              <CloseIcon />
            </app-icon-button>
          </div>
          <hr class="divider" />
        </div>
        <div>
          <slot name="top" />
        </div>
        <div class="px-4 py-2 inner overflow-auto relative">
          <slot />
        </div>
        <div>
          <slot name="bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import CloseIcon from "~icons/material-symbols/close";

const modal = ref(null);
const emit = defineEmits(["close", "close-btn"]);

defineProps<{
  title: string;
  hasCloseBtn?: boolean;
  maxWidth?: string;
}>();

onClickOutside(modal, () => {
  emit("close");
});
</script>

<style scoped>
.mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.wrapper {
  display: table-cell;
  vertical-align: middle;
}

.container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.186);
  transition: all 0.3s ease;
}

.inner {
  max-height: 400px;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 300px;
  }
}
</style>
