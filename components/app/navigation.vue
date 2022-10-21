<template>
  <header
    class="flex md:justify-between md:w-full items-center fixed md:absolute mt-4 z-4 bg-dark-400 rounded-lg md:bg-transparent px-4 py-3"
  >
    <NuxtLink
      to="/"
      class="md:text-2xl ripple py-1 px-3 rounded"
      :class="{
        'hidden md:block': $route.name === 'slug' && !!user
      }"
    >
      v{{ $config.CLIENT_VERSION }}
    </NuxtLink>
    <div class="flex" v-if="user">
      <client-only>
        <NuxtLink :to="userData.shortId">
          <app-text-button
            class="mr-2"
            background-color="green-vue"
            tooltip="Your collection"
            :text="userData.username || ''"
          />
        </NuxtLink>
      </client-only>
      <app-text-button
        class="mr-2"
        background-color="red-500"
        text="Sign out"
        @on-click="() => logOut()"
      />
    </div>
    <app-text-button
      v-else-if="$route.name !== 'index'"
      background-color="green-vue"
      text="Sign in"
      :loading="loginTrigger"
      :disabled="loginTrigger"
      @on-click="() => (loginTrigger = true)"
    />
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
    userData.value = {
      shortId: null,
      username: null
    };
    createToast("Signed out!", "green-500");
  } catch (e) {
    createToast(e.message, "red-500");
  }
};
</script>
