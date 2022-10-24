<template>
  <div
    class="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start user-select-none"
  >
    <MouseButtonLeftIcon class="mr-1" />
    <span class="mr-3"> Increase </span>
    <MouseButtonRightIcon class="mr-1" />
    <span> Decrease </span>
  </div>
</template>

<script lang="ts" setup>
import MouseButtonLeftIcon from "~icons/iconoir/mouse-button-left";
import MouseButtonRightIcon from "~icons/iconoir/mouse-button-right";
</script>
