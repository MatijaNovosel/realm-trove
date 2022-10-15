import { defineStore } from "pinia";
import { ref } from "vue";
import { PlayerCollection } from "~/models";

export const useDataStore = defineStore(
  "data",
  () => {
    const data = ref<PlayerCollection | null>(null);
    const lastUpdated = ref<Date | null>(null);

    const setData = (payload: PlayerCollection) => {
      data.value = payload;
    };

    return {
      data,
      lastUpdated
    };
  },
  {
    persist: true
  }
);
