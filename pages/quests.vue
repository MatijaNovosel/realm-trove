<template>
  <div
    class="offset w-full px-3"
    :class="{
      'h-full flex-center': pending || error
    }"
  >
    <spinner class="mt-4 mx-auto" v-if="pending" />
    <div v-else>
      <h1>Quests</h1>
      <quests-grid
        :marks="state.filteredMarks"
        :collection="data.quests.marks"
        :initial="state.initialCollection"
        @increment="updateCollection"
        @decrement="updateCollection($event, false)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Profile } from "~/models";
import { MARKS } from "~/utils/marks";

const userData = useUserData();
const { createToast, removePermanentToasts, permanentToastExists } = useToast();

const { data, pending, error } = await useLazyFetch<Profile>(
  `/api/${userData.value.shortId}?property=shortId`,
  {
    key: `/api/${userData.value.shortId}?property=shortId`
  }
);

const state = reactive({
  initialCollection: undefined,
  filteredMarks: MARKS
});

const pendingChanges = computed(() => {
  return (
    state.initialCollection !== undefined &&
    JSON.stringify(state.initialCollection) !==
      JSON.stringify(data.value.quests.marks)
  );
});

const updateCollection = async (id: number, increment = true) => {
  const existsInCollection = id in data.value.quests.marks;

  if (!increment && !existsInCollection) {
    return;
  }

  if (!state.initialCollection) {
    state.initialCollection = JSON.parse(
      JSON.stringify(data.value.quests.marks)
    );

    if (!permanentToastExists.value) {
      createToast("You have pending changes", "green-vue", -1, true);
    }
  }

  if (existsInCollection) {
    if (increment) {
      data.value.quests.marks[id]++;
    } else {
      if (data.value.quests.marks[id] - 1 <= 0) {
        delete data.value.quests.marks[id];
      } else {
        data.value.quests.marks[id]--;
      }
    }
  } else {
    if (increment) {
      data.value.quests.marks[id] = 1;
    }
  }
};

const cancelChanges = () => {
  data.value.quests.marks = state.initialCollection;
  state.initialCollection = undefined;
};

watch(pendingChanges, (val) => {
  if (!val) {
    removePermanentToasts();
    state.initialCollection = undefined;
  }
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Quests");
</script>

<style scoped>
h1 {
  @apply text-xl md:text-3xl mt-5 mb-3;
}
</style>
