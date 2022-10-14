<template>
  <div
    class="bg-dark-800 w-full progress-bar rounded-lg relative flex items-center justify-center"
  >
    <div
      class="bg-green-vue progress-bar absolute top-0 left-0"
      :style="style"
      :class="{
        'rounded-l-lg': progress < 100,
        'rounded-lg': progress === 100
      }"
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
</script>

<style scoped>
.progress-bar {
  height: 28px;
}
</style>
