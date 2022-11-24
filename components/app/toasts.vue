<template>
  <transition-group
    name="list"
    class="toast-container top-5 md:bottom-5 md:top-auto flex flex-col fixed text-white z-5 text-center text-sm items-center"
    tag="div"
  >
    <div
      class="px-6 py-2 rounded-lg w-fit-content"
      v-for="(t, i) in toasts"
      :key="t.id"
      :class="{
        'mb-4': i !== toasts.length - 1,
        [`bg-${t.color}`]: true
      }"
    >
      {{ t.msg }}
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
const { toasts } = useToast();
</script>

<style scoped>
.toast-container {
  left: 50%;
  transform: translateX(-50%);
}
</style>
