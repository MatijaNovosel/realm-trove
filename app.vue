<template>
  <Html lang="en-US" class="bg-black">
    <div class="flex justify-center text-white px-5 pb-5 min-h-full">
      <div
        class="max-w-container w-full flex flex-col items-center md:items-end justify-between relative"
      >
        <AppNavigation />
        <NuxtPage />
        <AppFooter />
      </div>
    </div>
    <TransitionGroup
      name="list"
      class="toast-container fixed text-white z-3 text-center text-sm"
      tag="div"
    >
      <div
        class="px-6 py-2 rounded-lg"
        v-for="(t, i) in toasts"
        :key="i"
        :class="{
          'mb-4': i !== toasts.length - 1,
          [`bg-${t.color}`]: true
        }"
      >
        {{ t.msg }}
      </div>
    </TransitionGroup>
  </Html>
</template>

<script lang="ts" setup>
const { toasts } = useToast();
const { setMeta } = useMetadata();
setMeta("Realm trove");
</script>

<style scoped>
.max-w-container {
  max-width: 1026px;
}

.toast-container {
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
