<template>
  <transition name="modal">
    <app-modal
      title="Add quests"
      v-show="open"
      has-close-btn
      @close-btn="$emit('close')"
    >
      <div class="py-2">Hi!</div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
const props = defineProps<{
  open: boolean;
}>();

defineEmits(["close"]);
</script>
