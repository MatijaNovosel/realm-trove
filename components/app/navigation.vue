<template>
  <header
    class="flex md:justify-between md:w-full items-center fixed md:absolute mt-4 z-4 bg-dark-400 rounded-lg md:bg-transparent px-4 py-3"
  >
    <span
      class="md:text-2xl"
      :class="{
        'hidden md:block': $route.name === 'slug' && !!user
      }"
    >
      v{{ $config.CLIENT_VERSION }}
    </span>
    <div class="flex" v-if="user">
      <client-only>
        <NuxtLink
          class="bg-green-vue mx-2 filter-btn flex items-center rounded cursor-pointer ripple px-2 py-1"
          :to="user.uid"
          v-tooltip="{
            content: 'Your collection',
            theme: 'info-tooltip'
          }"
        >
          {{ userData.username }}
        </NuxtLink>
      </client-only>
      <button @click="logOut" class="ripple px-4 bg-red-500 rounded">
        Sign out
      </button>
    </div>
    <div v-else-if="$route.name !== 'index'">
      <button
        @click="loginTrigger = true"
        class="ml-4 px-4 rounded bg-green-vue ripple"
      >
        Sign in
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { signOut } from "firebase/auth";

const user = useUser();
const loginTrigger = useLoginTrigger();
const userData = useUserData();
const { createToast } = useToast();
const { $firebaseAuth } = useNuxtApp();

const logOut = async () => {
  try {
    await signOut($firebaseAuth);
    userData.value.username = "";
    createToast("Signed out!", "green-500");
  } catch (e) {
    createToast(e.message, "red-500");
  }
};
</script>
