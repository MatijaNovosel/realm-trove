<template>
  <div
    @click="disabled ? null : onClick!()"
    class="px-2 rounded flex items-center cursor-pointer"
    :class="buttonClass"
    v-tooltip="{
      content: tooltip,
      theme: 'info-tooltip'
    }"
  >
    <LoadingIcon class="my-0.5 mx-3" v-if="loading" />
    <span v-else> {{ text }} </span>
  </div>
</template>

<script lang="ts" setup>
import LoadingIcon from "~icons/eos-icons/loading";

const props = defineProps<{
  loading?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  tooltip?: string;
  text: string;
  onClick?: () => void;
}>();

const buttonClass = computed(() => {
  return {
    [`ripple bg-${props.backgroundColor || "dark-800"} text-${
      props.textColor || "white"
    }`]: !props.disabled,
    "cursor-not-allowed bg-dark-800": props.disabled
  };
});
</script>
