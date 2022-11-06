<template>
  <div class="flex bg-dark-800 rounded-lg relative">
    <div class="flex flex-col" style="width: 70%">
      <div class="pl-3 pt-2 flex flex-col">
        <span class="text-sm">
          {{ quest.name }}
        </span>
        <span
          :style="{
            color: QUEST_QUALITY_COLOR[quest.quality]
          }"
          class="text-xs mt-1"
        >
          {{ QUEST_QUALITY_NAME[quest.quality] }}
        </span>
      </div>
      <div
        class="px-2 py-2 flex relative"
        :style="{
          height: '46px'
        }"
      >
        <div
          v-for="(mark, j) in quest.marks"
          :key="j"
          class="item absolute"
          :style="{
            backgroundPosition: `${MARK_POS[mark].x}px ${MARK_POS[mark].y}px`,
            scale: 0.8,
            bottom: '0px',
            left: `${j * 18}px`
          }"
        />
      </div>
    </div>
    <div style="width: 30%" class="flex-center">
      <app-icon-button
        background-color="dark"
        @on-click="$emit('remove', quest.id)"
      >
        <CheckIcon />
      </app-icon-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QuestInfo } from "~/models";
import { QUEST_QUALITY_COLOR, QUEST_QUALITY_NAME } from "~/utils/constants";
import { MARK_POS } from "~/utils/marks";
import CheckIcon from "~icons/ic/baseline-check";

defineProps<{
  quest: QuestInfo;
}>();

defineEmits(["remove"]);
</script>
