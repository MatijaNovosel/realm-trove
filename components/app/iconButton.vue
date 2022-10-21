<template>
  <button
    @click="disabled ? null : onClick()"
    class="p-1.5 rounded text-sm flex items-center"
    :class="buttonClass"
    v-tooltip="{
      content: tooltip,
      theme: 'info-tooltip'
    }"
  >
    <LoadingIcon class="my-0.5 mx-3" v-if="loading" />
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

const buttonClass = computed(() => {
  return {
    [`ripple bg-${props.backgroundColor || "dark-800"} text-${
      props.iconColor || "white"
    }`]: !props.disabled,
    "cursor-not-allowed bg-dark-800": props.disabled
  };
});
</script>
