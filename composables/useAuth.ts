import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const data = ref(null);

    const isAuthenticated = computed(() => {
      return data.value != null;
    });

    const logout = () => {
      data.value = null;
    };

    const login = (payload) => {
      data.value = payload;
    };

    return {
      data,
      isAuthenticated,
      logout,
      login
    };
  },
  {
    persist: true
  }
);
