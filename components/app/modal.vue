<template>
  <div class="mask">
    <div class="wrapper">
      <div class="container bg-dark-600 rounded-lg mx-auto" ref="modal">
        <div class="text-sm w-full">
          <div class="p-4">
            {{ title }}
          </div>
          <hr class="divider" />
        </div>
        <div class="px-4 py-2 inner overflow-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
const modal = ref(null);
const emit = defineEmits(["close"]);

defineProps({
  title: {
    type: String
  }
});

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

.divider {
  border: 0.5px solid rgba(128, 128, 128, 0.318);
}

.wrapper {
  display: table-cell;
  vertical-align: middle;
}

.container {
  max-width: 600px;
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
