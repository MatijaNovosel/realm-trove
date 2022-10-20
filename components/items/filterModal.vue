<template>
  <transition name="modal">
    <app-modal title="Loot source" v-if="open" @close="$emit('close')">
      <div class="flex flex-col">
        <div
          class="flex items-center my-2"
          v-for="(s, i) in Object.entries(SOURCE)
            .filter((value) => typeof value[1] === 'string')
            .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))"
          :key="i"
        >
          <input type="checkbox" class="mr-3" />
          <span>
            {{ s[1] }}
          </span>
        </div>
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import { SOURCE } from "~/utils/constants";

defineProps<{
  open: boolean;
}>();

defineEmits(["close"]);
</script>
