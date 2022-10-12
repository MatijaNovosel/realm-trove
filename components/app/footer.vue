<template>
  <footer class="w-full flex justify-between z-2 md:pb-5 pt-7 px-1 md:px-0 user-select-none">
    <div>
      <span class="text-sm md:text-base">
        &copy; Realm trove {{ new Date().getFullYear() }}
      </span>
    </div>
    <div>
      <a class="text-white" href="https://github.com/realm-trove">
        <IconGithub :style="{ fontSize: '1.3em' }" />
      </a>
      <a class="text-white pl-2" href="https://www.realmeye.com/player/Ormar">
        <IconEye :style="{ fontSize: '1.3em' }" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconGithub from "~icons/mdi/github";
import IconEye from "~icons/ri/eye-2-fill";
</script>
