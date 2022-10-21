<template>
  <transition name="modal">
    <app-modal title="Are you sure?" v-show="open" @close="$emit('close')">
      <div class="flex justify-center py-3">
        <app-text-button
          class="mr-2"
          background-color="green-vue"
          text="Yes"
          :on-click="() => $emit('yes')"
        />
        <app-text-button
          background-color="red-500"
          text="No"
          :on-click="() => $emit('no')"
        />
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
