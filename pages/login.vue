<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="z-2 flex flex-col items-center justify-center user-select-none mx-auto text-center">
      <h2 class="text-3xl md:text-7xl font-bold my-4 text-green-vue">
        Login
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setMeta } = useMetadata();
setMeta("Realm trove | Login");
</script>
