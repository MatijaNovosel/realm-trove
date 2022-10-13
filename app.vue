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
  </Html>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("Realm trove");
</script>

<style scoped>
.max-w-container {
  max-width: 1026px;
}
</style>
