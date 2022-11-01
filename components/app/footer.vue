<template>
  <footer
    class="w-full flex items-center justify-between z-2 md:pb-5 pt-7 md:px-0 user-select-none pr-4 pl-2 md:pr-0"
  >
    <div class="flex items-center">
      <NuxtLink
        class="flex items-center"
        to="https://github.com/MatijaNovosel/realm-trove"
      >
        <IconGithub :style="{ fontSize: '1.3em' }" />
      </NuxtLink>
      <NuxtLink
        class="flex items-center mx-2"
        to="https://www.realmeye.com/player/CrabFeeder"
      >
        <IconEye :style="{ fontSize: '1.3em' }" />
      </NuxtLink>
      <NuxtLink to="/changes" class="text-sm md:text-base ripple px-2 rounded">
        v{{ $config.CLIENT_VERSION }}
      </NuxtLink>
    </div>
    <NuxtLink
      to="/privacy"
      class="underline underline-offset-4 decoration-dotted"
    >
      Privacy policy
    </NuxtLink>
  </footer>
</template>

<script setup lang="ts">
import IconGithub from "~icons/mdi/github";
import IconEye from "~icons/ri/eye-2-fill";
</script>
