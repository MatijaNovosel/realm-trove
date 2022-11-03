<template>
  <div
    class="flex flex-wrap justify-center md:justify-start no-highlight"
    v-if="marks.length > 0"
  >
    <div v-for="{ pos, id, name } in marks" :key="id">
      <Tooltip theme="info-tooltip">
        <quests-grid-item
          :x="pos.x"
          :y="pos.y"
          :status-class="badgeClass(id) || ''"
          :count="collection[id] || 0"
          :id="id"
          @lclick="$emit('increment', id)"
          @rclick="$emit('decrement', id)"
        />
        <template #popper>
          <span class="text-center md:text-left">
            {{ name }}
          </span>
        </template>
      </Tooltip>
    </div>
  </div>
  <div class="text-center pt-3" v-else>
    <span class="text-2xl"> No marks found 😢 </span>
  </div>
</template>

<script lang="ts" setup>
import { Tooltip } from "floating-vue";
import { IDictionary, MarkInfo } from "~/models";

const props = defineProps<{
  collection: IDictionary<number>;
  initial: IDictionary<number> | undefined;
  marks: MarkInfo[];
}>();

const badgeClass = (id: number) => {
  if (props.initial) {
    const initialCollectionCount = props.initial[id] || 0;
    const currentCollectionCount = props.collection[id];

    if (initialCollectionCount > currentCollectionCount) {
      return "text-error font-bold";
    } else if (initialCollectionCount < currentCollectionCount) {
      return "text-green-vue font-bold";
    }
  }
};

defineEmits(["increment", "decrement"]);
</script>
