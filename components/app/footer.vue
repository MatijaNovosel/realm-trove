<template>
  <footer
    class="w-full flex items-center justify-between z-2 md:pb-5 pt-7 md:px-0 user-select-none px-4 md:px-0"
  >
    <NuxtLink
      to="/changes"
      class="text-sm md:text-base ripple px-3 py-0.5 rounded"
    >
      v{{ $config.CLIENT_VERSION }}
    </NuxtLink>
    <div class="flex">
      <a class="text-white" href="https://github.com/MatijaNovosel/realm-trove">
        <IconGithub :style="{ fontSize: '1.3em' }" />
      </a>
      <a
        class="text-white pl-2"
        href="https://www.realmeye.com/player/CrabFeeder"
      >
        <IconEye :style="{ fontSize: '1.3em' }" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconGithub from "~icons/mdi/github";
import IconEye from "~icons/ri/eye-2-fill";
</script>
