<template>
  <transition name="modal">
    <app-modal title="Filter items" v-if="open" @close="$emit('close')">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-2 flex items-center">
          <SackIcon class="mr-2 text-green-vue" /> Source
        </div>
        <div class="col-span-10">
          <select
            class="flex flex-col w-full my-2 rounded bg-dark-900 p-2"
            @change="
              $emit(
                'update:lootSource',
                parseInt(($event.target as HTMLInputElement).value)
              )
            "
            :value="lootSource"
          >
            <option value="0">All</option>
            <option
              class="bg-dark-400"
              :value="s[0]"
              v-for="(s, i) in Object.entries(SOURCE)
                .filter(
                  (value) => typeof value[1] === 'string' && value[1] !== 'ALL'
                )
                .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))"
              :key="i"
            >
              {{ SOURCE_NAMES[s[0]] }}
            </option>
          </select>
        </div>
        <div class="col-span-2 flex items-center">
          <SwordIcon class="mr-2 text-green-vue" /> Type
        </div>
        <div class="col-span-10">
          <select class="flex flex-col w-full my-2 rounded bg-dark-900 p-2">
            <option value="0">All</option>
            <option
              class="bg-dark-400"
              :value="s"
              v-for="(s, i) in 10"
              :key="i"
            >
              {{ s }}
            </option>
          </select>
        </div>
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import { SOURCE, SOURCE_NAMES } from "~/utils/constants";
import SackIcon from "~icons/mdi/sack";
import SwordIcon from "~icons/jam/sword-f";

defineProps<{
  lootSource: number | null;
  open: boolean;
}>();

defineEmits(["close", "update:lootSource"]);
</script>
