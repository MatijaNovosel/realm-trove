<template>
  <button
    @click="disabled ? null : $emit('on-click')"
    class="p-1.5 rounded text-sm flex items-center user-select-none"
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
import LoadingIcon from "~icons/eos-icons/loading";

const props = defineProps<{
  loading?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  iconColor?: string;
  tooltip?: string;
  onClick?: () => void;
}>();

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
