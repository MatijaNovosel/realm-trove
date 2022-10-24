<template>
  <transition name="modal">
    <app-modal title="Filter items" v-if="open" @close="$emit('close')">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-2 flex items-center">
          <SackIcon class="mr-2 text-green-vue" /> Source
        </div>
        <div class="col-span-10">
          <multi-select
            v-model="lootSource"
            :options="options"
            multiple
            placeholder="Loot source"
            label="text"
            :reduce="(opt) => opt.value"
          />
        </div>
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import { SOURCE, SOURCE_NAMES } from "~/utils/constants";
import SackIcon from "~icons/mdi/sack";

const options = computed(() => {
  return Object.entries(SOURCE)
    .filter((value) => typeof value[1] === "string")
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map((x) => ({
      value: parseInt(x[0]),
      text: SOURCE_NAMES[x[0]]
    }));
});

defineProps<{
  lootSource: number[];
  open: boolean;
}>();

defineEmits(["close", "update:lootSource"]);
</script>
