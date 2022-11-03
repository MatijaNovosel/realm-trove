<template>
  <div class="contents">
    <app-confirmation-dialog
      :open="state.confirmDialogOpen"
      @close="state.confirmDialogOpen = false"
      @yes="resetCollection"
      @no="state.confirmDialogOpen = false"
    />
    <div
      class="offset w-full px-3"
      :class="{
        'h-full flex-center': pending || error
      }"
    >
      <spinner class="mt-4 mx-auto" v-if="pending" />
      <div v-else>
        <h1>Quests</h1>
        <div class="row my-5 md:px-0 items-center">
          <div
            class="col-span-12 md:col-span-3 flex items-center justify-center md:justify-start user-select-none"
          >
            <items-instructions />
          </div>
          <div class="col-span-12 md:col-span-6 mt-4 md:mt-0 flex-center">
            <items-custom-input
              class="w-full"
              placeholder="Search marks"
              dense
              :loading="pending"
              :error="error"
              v-model="state.searchText"
            />
            <app-icon-button
              class="ml-2"
              tooltip="Reset"
              icon-color="green-vue"
              background-color="dark"
              @on-click="state.confirmDialogOpen = true"
            >
              <ResetIcon />
            </app-icon-button>
          </div>
          <div
            class="col-span-12 md:col-span-3 flex md:justify-end fixed md:relative z-5 right-10 md:right-0 bottom-5 md:bottom-0 h-min"
          >
            <app-text-button
              background-color="error"
              text="Cancel"
              class="ml-2"
              :disabled="!pendingChanges"
              @on-click="cancelChanges"
            />
            <app-text-button
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
import { MarkInfo, Profile } from "~/models";
import { MARKS } from "~/utils/marks";
import ResetIcon from "~icons/carbon/reset";
import {
  doc,
  DocumentData,
  DocumentReference,
  setDoc
} from "firebase/firestore";

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
  confirmDialogOpen: false
});

const docRef = ref<DocumentReference<DocumentData>>();

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
    await setDoc(docRef.value, data.value);
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
    await setDoc(docRef.value, emptyCollection);
    createToast("Progress has been reset!", "green-vue");
    state.initialCollection = undefined;
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  } finally {
    state.confirmDialogOpen = false;
  }
};

watch(
  () => [state.searchText],
  () => searchMarks()
);

watch(pendingChanges, (val) => {
  if (!val) {
    removePermanentToasts();
    state.initialCollection = undefined;
  }
});

watch(
  pending,
  () => {
    if (data.value) {
      docRef.value = doc($firebaseFirestore, "profile", userData.value.shortId);
      setMeta("Realm trove | Quests");
    } else {
      setMeta("Loading ...");
    }
  },
  {
    immediate: true
  }
);
</script>

<style scoped>
h1 {
  @apply text-xl md:text-3xl mt-5 mb-3 text-center;
}
</style>
