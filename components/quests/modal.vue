<template>
  <transition name="modal">
    <app-modal
      title="Add quests"
      v-show="open"
      has-close-btn
      max-width="800px"
      @close-btn="$emit('close')"
    >
      <template #top>
        <div class="p-3">
          <custom-input
            class="w-full"
            placeholder="Search quests"
            dense
            v-model="state.searchText"
          />
        </div>
      </template>
      <div class="pb-2 row relative">
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
                  :active="state.selectedQuests.includes(quest.id)"
                  :quest="quest"
                  @on-click="modifyQuestList(quest.id)"
                />
              </div>
            </div>
          </div>
        </template>
        <div class="col-span-12 text-center mt-3" v-else>No quests found.</div>
      </div>
      <template #bottom>
        <div class="flex justify-center md:justify-end pr-3 py-3">
          <text-button
            background-color="error"
            text="Cancel"
            class="ml-2"
            :disabled="!pendingChanges"
            @on-click="cancelChanges"
          />
          <text-button
            background-color="green-vue"
            text="Save"
            class="ml-2"
            :disabled="!pendingChanges"
            @on-click="confirmChanges"
          />
        </div>
      </template>
    </app-modal>
  </transition>
</template>

<script lang="ts" setup>
import { useDebounceFn } from "@vueuse/core";
import { groupBy } from "matija-utils";
import { PropType } from "vue";
import { QuestInfo } from "~/models";
import { QUEST_QUALITY_COLOR, QUEST_QUALITY_NAME } from "~/utils/constants";
import { QUESTS } from "~/utils/quests";

const props = defineProps({
  open: Boolean,
  activeQuests: Array as PropType<number[]>
});

const emit = defineEmits(["close", "confirm-changes"]);

const state = reactive({
  searchText: "",
  filteredQuests: [...QUESTS],
  selectedQuests: [],
  initialSelectedQuests: []
});

const questsGroupedByQuality = computed(() => {
  return Object.entries(
    groupBy<QuestInfo>(state.filteredQuests, "quality")
  ).map((e) => ({
    quality: e[0],
    quests: e[1]
  }));
});

const pendingChanges = computed(() => {
  return (
    JSON.stringify(state.initialSelectedQuests.sort()) !==
    JSON.stringify(state.selectedQuests.sort())
  );
});

const searchQuests = useDebounceFn(() => {
  state.filteredQuests = QUESTS.filter((item) =>
    item.name.toLowerCase().includes(state.searchText.toLowerCase())
  );
}, 300);

const modifyQuestList = (questId: number) => {
  if (state.selectedQuests.includes(questId)) {
    state.selectedQuests = state.selectedQuests.filter(
      (qId) => qId !== questId
    );
  } else {
    state.selectedQuests.push(questId);
  }
};

const cancelChanges = () => {
  state.selectedQuests = [...state.initialSelectedQuests];
};

const confirmChanges = () => {
  emit("confirm-changes", state.selectedQuests);
  emit("close");
};

watch(
  () => state.searchText,
  () => searchQuests()
);

watch(
  () => props.open,
  (val) => {
    if (val) {
      state.selectedQuests = [...props.activeQuests];
      state.initialSelectedQuests = [...props.activeQuests];
    }
  }
);
</script>
