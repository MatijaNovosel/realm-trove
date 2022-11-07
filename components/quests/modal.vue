<template>
  <transition name="modal">
    <app-modal
      title="Add quests"
      v-show="open"
      has-close-btn
      max-width="800px"
      @close-btn="$emit('close')"
    >
      <div class="py-2 row">
        <div class="col-span-12">
          <app-custom-input
            class="w-full"
            placeholder="Search quests"
            dense
            v-model="state.searchText"
          />
        </div>
        <template v-if="state.filteredQuests.length !== 0">
          <div
            class="col-span-12"
            v-for="({ quality, quests }, i) in questsGroupedByQuality"
            :key="i"
          >
            <div class="row gap-2 my-2">
              <div
                class="col-span-12"
                :style="{
                  color: QUEST_QUALITY_COLOR[quality]
                }"
              >
                {{ QUEST_QUALITY_NAME[quality] }}
              </div>
              <div
                class="col-span-12 md:col-span-4"
                v-for="(quest, j) in quests"
                :key="j"
              >
                <quests-card
                  :active="activeQuests.includes(quest.id)"
                  :quest="quest"
                />
              </div>
            </div>
          </div>
        </template>
        <div class="col-span-12 text-center mt-3" v-else>No quests found.</div>
      </div>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import { groupBy } from "~/utils/helpers";
import { QUESTS } from "~/utils/quests";
import { QUEST_QUALITY_NAME, QUEST_QUALITY_COLOR } from "~/utils/constants";
import { QuestInfo } from "~/models";
import { useDebounceFn } from "@vueuse/core";

defineProps<{
  open: boolean;
  activeQuests: number[];
}>();

defineEmits(["close"]);

const state = reactive({
  searchText: "",
  filteredQuests: [...QUESTS]
});

const questsGroupedByQuality = computed(() => {
  return Object.entries(
    groupBy<QuestInfo>(state.filteredQuests, "quality")
  ).map((e) => ({
    quality: e[0],
    quests: e[1]
  }));
});

const searchQuests = useDebounceFn(() => {
  state.filteredQuests = QUESTS.filter((item) =>
    item.name.toLowerCase().includes(state.searchText.toLowerCase())
  );
}, 300);

watch(
  () => state.searchText,
  () => searchQuests()
);
</script>
