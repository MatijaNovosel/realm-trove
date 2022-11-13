<template>
  <div class="text-2xl md:text-4xl font-bold mb-2 mt-6 flex-center">
    <div class="contents" v-for="(tab, i) in tabs" :key="i">
      <div
        @click="selectedTab = tab[1]"
        class="ripple px-3 py-1 cursor-pointer rounded-lg"
        :class="{
          'text-green-vue': selectedTab === tab[1]
        }"
      >
        {{ tab[0] }}
      </div>
      <div class="mx-3" v-if="i !== tabs.length - 1">•</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TAB } from "~/utils/constants";

defineEmits(["change"]);

const selectedTab = useSelectedTab();

const tabs = computed(() =>
  Object.entries(TAB).filter((value) => typeof value[1] === "string")
);
</script>
