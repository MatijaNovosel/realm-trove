<template>
  <footer
    class="w-full flex items-center justify-between z-2 md:pb-5 pt-7 md:px-0 pr-4 pl-6 md:pr-0 md:pl-2"
  >
    <div class="flex-center">
      <nuxt-link to="https://github.com/MatijaNovosel/realm-trove">
        <github-icon :style="{ fontSize: '1.3em' }" />
      </nuxt-link>
      <nuxt-link class="mx-2" to="https://www.realmeye.com/player/CrabFeeder">
        <eye-icon :style="{ fontSize: '1.3em' }" />
      </nuxt-link>
      <nuxt-link to="/changes" class="text-sm md:text-base ripple px-2 rounded">
        v{{ $config.CLIENT_VERSION }}
      </nuxt-link>
    </div>
    <nuxt-link
      to="/privacy"
      class="underline underline-offset-4 decoration-dotted"
    >
      Privacy policy
    </nuxt-link>
  </footer>
</template>

<script setup lang="ts">
import GithubIcon from "~icons/mdi/github";
import EyeIcon from "~icons/ri/eye-2-fill";
</script>

<style scoped>
a {
  @apply flex items-center;
}
</style>
