<template>
  <button
    @click="disabled ? null : $emit('on-click')"
    class="p-1.5 flex-center rounded text-sm"
    :class="buttonClass"
    v-tooltip="{
      content: tooltip,
      theme: 'info-tooltip'
    }"
  >
    <LoadingIcon class="mx-0.2" v-if="loading" />
    <slot v-else />
  </button>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import LoadingIcon from "~icons/eos-icons/loading";

const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  backgroundColor: String,
  iconColor: String,
  tooltip: String,
  onClick: Function as PropType<() => void>
});

defineEmits(["on-click"]);

const buttonClass = computed(() => {
  return {
    [`ripple bg-${props.backgroundColor || "dark"} text-${
      props.iconColor || "white"
    }`]: !props.disabled,
    "cursor-not-allowed bg-dark text-gray-500": props.disabled
  };
});
</script>
