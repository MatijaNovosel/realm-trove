<template>
  <div
    class="bg-dark-800 w-full progress-bar rounded-lg relative flex items-center justify-center"
  >
    <div
      class="bg-green-vue progress-bar absolute top-0 left-0"
      :style="style"
      :class="clsMain"
    />
    <div
      class="bg-green-vue-100 progress-bar-shade absolute bottom-0 left-0"
      :style="style"
      :class="clsShade"
    />
    <div class="z-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  progress: number;
}>();

const style = computed(() => {
  return {
    width: `${props.progress}%`
  };
});

const clsShade = computed(() => {
  return {
    "rounded-bl-lg": props.progress < 100,
    "rounded-b-lg": props.progress === 100
  };
});

const clsMain = computed(() => {
  return {
    "rounded-l-lg": props.progress < 100,
    "rounded-lg": props.progress === 100
  };
});
</script>

<style scoped>
.progress-bar {
  height: 28px;
}

.progress-bar-shade {
  height: 6px;
}
</style>
