<template>
  <transition name="modal">
    <app-modal title="Are you sure?" v-show="open" @close="$emit('close')">
      <div class="flex justify-center py-3">
        <text-button
          class="mr-2"
          background-color="green-vue"
          text="Yes"
          @on-click="$emit('yes')"
        />
        <text-button
          background-color="error"
          text="No"
          @on-click="$emit('no')"
        />
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
defineProps({
  open: Boolean
});

defineEmits(["close", "yes", "no"]);
</script>
