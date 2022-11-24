<template>
  <div class="contents">
    <confirmation-dialog
      :open="state.confirmDialogOpen"
      @close="state.confirmDialogOpen = false"
      @yes="resetCollection"
      @no="state.confirmDialogOpen = false"
    />
    <quests-modal
      :active-quests="data ? data.quests.activeQuests : []"
      :open="state.newQuestsModalOpen"
      @close="state.newQuestsModalOpen = false"
      @confirm-changes="modifyQuests"
    />
    <div
      class="offset px-3 w-full"
      :class="{
        'h-full flex-center': pending || error
      }"
    >
      <spinner class="mt-4 mx-auto" v-if="pending" />
      <div class="mt-4 mx-auto text-error text-4xl" v-else-if="error">
        An error ocurred.
      </div>
      <div v-else>
        <h1>Quests</h1>
        <div class="row mt-3">
          <div class="col-span-12 mb-5">
            <text-button
              class="text-sm md:text-base w-fit-content mx-auto"
              background-color="green-vue"
              text="Add quests"
              @on-click="state.newQuestsModalOpen = true"
            />
          </div>
          <div class="col-span-12 text-center" v-if="quests.length === 0">
            No active quests.
          </div>
          <div class="col-span-12" v-else>
            <div class="row flex gap-4">
              <div
                class="col-span-12 md:col-span-3"
                v-for="(quest, i) in quests"
                :key="i"
              >
                <quests-card
                  show-subtitle
                  preview
                  @on-click="modifyQuests"
                  :quest="quest"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row my-5 md:px-0 items-center">
          <div class="col-span-12 mb-5">
            <hr class="divider" />
          </div>
          <div
            class="col-span-12 md:col-span-3 flex items-center justify-center md:justify-start"
          >
            <instructions />
          </div>
          <div class="col-span-12 md:col-span-6 mt-4 md:mt-0 flex-center">
            <custom-input
              class="w-full"
              placeholder="Search marks"
              dense
              :loading="pending"
              :error="error"
              v-model="state.searchText"
            />
            <icon-button
              class="ml-2"
              tooltip="Reset"
              icon-color="green-vue"
              background-color="dark"
              @on-click="state.confirmDialogOpen = true"
            >
              <ResetIcon />
            </icon-button>
          </div>
          <div
            class="col-span-12 md:col-span-3 flex md:justify-end fixed md:relative z-5 right-10 md:right-0 bottom-5 md:bottom-0 h-min"
          >
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
        </div>
        <quests-grid
          :marks="state.filteredMarks"
          :collection="data.quests.marks"
          :initial="state.initialCollection"
          @increment="updateCollection"
          @decrement="updateCollection($event, false)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDebounceFn } from "@vueuse/core";
import { doc, setDoc } from "firebase/firestore";
import { MarkInfo, Profile } from "~/models";
import { MARKS } from "~/utils/marks";
import { QUESTS } from "~/utils/quests";
import ResetIcon from "~icons/carbon/reset";

const userData = useUserData();
const { setMeta } = useMetadata();
const { $firebaseFirestore } = useNuxtApp();
const { createToast, removePermanentToasts, permanentToastExists } = useToast();

const { data, pending, error } = await useLazyFetch<Profile>(
  `/api/${userData.value.shortId}?property=shortId`,
  {
    key: `/api/${userData.value.shortId}?property=shortId`
  }
);

const state = reactive({
  initialCollection: undefined,
  filteredMarks: MARKS,
  searchText: "",
  confirmDialogOpen: false,
  newQuestsModalOpen: false,
  docRef: undefined
});

const pendingChanges = computed(() => {
  return (
    state.initialCollection !== undefined &&
    JSON.stringify(state.initialCollection) !==
      JSON.stringify(data.value.quests.marks)
  );
});

const quests = computed(() => {
  if (data.value.quests.activeQuests.length === 0) {
    return [];
  }
  return QUESTS.filter((q) =>
    data.value.quests.activeQuests.includes(q.id)
  ).sort((a, b) => b.quality - a.quality);
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

const searchMarks = useDebounceFn(() => {
  const filterConditions: ((item: MarkInfo) => boolean)[] = [
    (item) => item.name.toLowerCase().includes(state.searchText.toLowerCase())
  ];

  state.filteredMarks = MARKS.filter((item) =>
    filterConditions.every((i) => i(item))
  );
}, 300);

const confirmChanges = async () => {
  try {
    await setDoc(state.docRef, data.value);
    createToast("Saved!", "green-vue");
    searchMarks();
    state.initialCollection = undefined;
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  }
};

const resetCollection = async () => {
  try {
    const emptyCollection = { ...data.value };
    emptyCollection.quests.marks = {};
    await setDoc(state.docRef, emptyCollection);
    createToast("Progress has been reset!", "green-vue");
    state.initialCollection = undefined;
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  } finally {
    state.confirmDialogOpen = false;
  }
};

const modifyQuests = (id: number | number[]) => {
  if (typeof id === "number") {
    if (data.value.quests.activeQuests.includes(id)) {
      data.value.quests.activeQuests = data.value.quests.activeQuests.filter(
        (qId) => qId !== id
      );
    } else {
      data.value.quests.activeQuests.push(id);
    }
  } else {
    data.value.quests.activeQuests = id;
  }
  setDoc(state.docRef, data.value);
};

watch(
  () => state.searchText,
  () => searchMarks()
);

watch(pendingChanges, (val) => {
  if (!val) {
    removePermanentToasts();
    state.initialCollection = undefined;
  }
});

watch(
  data,
  (val) => {
    if (val) {
      state.docRef = doc($firebaseFirestore, "profile", val.shortId);
      setMeta("Realm trove | Quests");
    } else {
      setMeta("Loading ...");
    }
  },
  {
    immediate: true
  }
);

onBeforeUnmount(() => {
  state.initialCollection = undefined;
  removePermanentToasts();
});
</script>

<style scoped>
h1 {
  @apply text-xl md:text-3xl mt-5 text-center;
}
</style>
