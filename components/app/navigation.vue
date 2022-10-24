<template>
  <header
    class="flex justify-between w-full items-center absolute mt-4 z-4 rounded-lg bg-transparent py-3"
  >
    <NuxtLink to="/" class="text-sm md:text-2xl ripple py-1 px-3 rounded">
      👑 Realm trove
    </NuxtLink>
    <div class="flex" v-if="user">
      <client-only v-if="$route.params.slug !== userData.shortId">
        <NuxtLink :to="userData.shortId">
          <app-text-button
            class="mr-2 text-sm md:text-base"
            background-color="green-vue"
            tooltip="Your collection"
            :text="userData.username || ''"
          />
        </NuxtLink>
      </client-only>
      <app-text-button
        class="mr-2 text-sm md:text-base"
        background-color="error"
        text="Sign out"
        @on-click="logOut"
      />
    </div>
    <app-text-button
      v-else-if="$route.name !== 'index'"
      background-color="green-vue"
      text="Sign in"
      :loading="loginTrigger"
      :disabled="loginTrigger"
      @on-click="loginTrigger = true"
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
    createToast("Signed out!", "green-vue");
  } catch (e) {
    createToast(e.message, "error");
  }
};
</script>
