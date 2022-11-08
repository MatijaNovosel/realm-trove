<template>
  <div class="flex flex-col text-xs md:text-sm">
    <div class="flex flex-col">
      <div class="text-3xl">
        {{ data.version }}
      </div>
      <div class="text-sm text-green-vue my-1.5">
        {{ new Date(data.date).toISOString().substring(0, 10) }}
      </div>
    </div>
    <pre class="text-sm">{{ data.body }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ChangeModel } from "~/models";

defineProps<{
  data: ChangeModel;
}>();
</script>
