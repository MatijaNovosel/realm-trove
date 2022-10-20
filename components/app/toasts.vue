<template>
  <TransitionGroup
    name="list"
    class="toast-container flex flex-col fixed text-white z-3 text-center text-sm items-center user-select-none"
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
  </TransitionGroup>
</template>

<script lang="ts" setup>
const { toasts } = useToast();
</script>
