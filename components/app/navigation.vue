<template>
  <header
    class="flex flex-col md:flex-row justify-between w-full items-center absolute mt-4 z-4 rounded-lg bg-transparent py-3"
  >
    <nuxt-link to="/" class="text-xl md:text-2xl ripple py-1 px-3 rounded">
      👑 Realm trove
    </nuxt-link>
    <div class="flex-center mt-3 md:mt-0" v-if="user">
      <client-only v-if="$route.params.slug !== userData.shortId">
        <nuxt-link :to="userData.shortId">
          <text-button
            class="text-sm md:text-base"
            background-color="green-vue"
            tooltip="Your collection"
            :text="userData.username || ''"
          />
        </nuxt-link>
      </client-only>
      <nuxt-link v-if="$route.name !== 'quests'" to="quests">
        <text-button
          class="ml-2 text-sm md:text-base"
          background-color="blue"
          text="Quests"
        />
      </nuxt-link>
      <text-button
        class="mx-2 text-sm md:text-base"
        background-color="error"
        text="Log out"
        @on-click="logOut"
      />
    </div>
    <text-button
      class="mt-3 md:mt-0"
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
const logoutTrigger = useLogoutTrigger();
const userData = useUserData();
const { createToast, removePermanentToasts } = useToast();
const { $firebaseAuth } = useNuxtApp();
const route = useRoute();
const router = useRouter();

const logOut = async () => {
  try {
    logoutTrigger.value = true;
    await signOut($firebaseAuth);

    userData.value = {
      shortId: null,
      username: null
    };

    loginTrigger.value = false;
    logoutTrigger.value = false;
    removePermanentToasts();
    createToast("Signed out!", "green-vue");

    if (route.name === "quests") {
      router.push("/");
    }
  } catch (e) {
    createToast(e.message, "error");
  }
};
</script>
