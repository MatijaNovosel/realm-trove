<template>
  <div
    class="text-4xl font-bold mb-2 mt-6 flex items-center justify-center user-select-none"
  >
    <div
      @click="$emit('change', TAB.UT)"
      class="ripple px-3 py-1 cursor-pointer rounded-lg"
      :class="{
        'text-green-vue': activeTab === TAB.UT
      }"
    >
      UT
    </div>
    <div class="mx-3">•</div>
    <div
      @click="$emit('change', TAB.ST)"
      class="ripple px-3 py-1 cursor-pointer rounded-lg"
      :class="{
        'text-green-vue': activeTab === TAB.ST
      }"
    >
      ST
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TAB } from "~/utils/constants";

defineProps<{
  activeTab: TAB;
}>();

defineEmits(["change"]);
</script>
