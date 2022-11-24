<template>
  <div
    @click="disabled ? null : $emit('on-click')"
    class="px-2 flex-center rounded cursor-pointer"
    :class="buttonClass"
    v-tooltip="{
      content: tooltip,
      theme: 'info-tooltip'
    }"
  >
    <loading-icon class="my-0.5 mx-3" v-if="loading" />
    <span v-else> {{ text }} </span>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import LoadingIcon from "~icons/eos-icons/loading";

const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  backgroundColor: String,
  textColor: String,
  tooltip: String,
  text: String,
  onClick: Function as PropType<() => void>
});

defineEmits(["on-click"]);

const buttonClass = computed(() => ({
  [`ripple bg-${props.backgroundColor || "dark-500"} text-${
    props.textColor || "white"
  }`]: !props.disabled,
  "cursor-not-allowed bg-dark-500": props.disabled
}));
</script>
