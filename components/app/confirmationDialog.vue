<template>
  <transition name="modal">
    <app-modal title="Are you sure?" v-if="open" @close="$emit('close')">
      <div class="flex justify-center py-3">
        <button
          class="mr-2 rounded px-2 bg-green-500 ripple"
          @click="$emit('yes')"
        >
          Yes
        </button>
        <button class="rounded px-2 bg-red-500 ripple" @click="$emit('no')">
          No
        </button>
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
defineProps<{
  open: boolean;
}>();

defineEmits(["close", "yes", "no"]);
</script>
