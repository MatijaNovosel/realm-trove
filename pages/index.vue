<template>
  <div class="w-full h-full flex justify-center items-center">
    <div
      class="z-2 flex flex-col items-center justify-center user-select-none mx-auto text-center"
    >
      <img width="86" height="86" src="/whiteBag.png" class="mb-3" />
      <h2 class="text-3xl md:text-7xl mt-4">Realm trove</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setMeta } = useMetadata();
setMeta("Realm trove");
</script>
