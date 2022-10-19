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
    <div v-if="user">
      <NuxtLink
        class="ripple px-4 bg-green-vue rounded mr-3 py-0.5"
        :to="user.uid"
      >
        {{ user.email }}
      </NuxtLink>
      <button @click="logOut" class="ripple px-4 bg-red-500 rounded">
        Sign out
      </button>
    </div>
    <div v-else-if="$route.name !== 'index'">
      <button
        @click="signInDisabled ? null : signIn()"
        class="ml-4 px-4 rounded"
        :class="{
          'bg-green-vue ripple': !signInDisabled,
          'cursor-not-allowed bg-dark-500': signInDisabled
        }"
      >
        Sign in
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const user = useUser();
const { createToast } = useToast();
const { $firebaseAuth, $firebaseFirestore } = useNuxtApp();

const signInDisabled = ref(false);

const logOut = async () => {
  try {
    await signOut($firebaseAuth);
    createToast("Signed out!", "green-500");
  } catch (e) {
    createToast(e.message, "red-500");
  }
};

const signIn = async () => {
  signInDisabled.value = true;

  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup($firebaseAuth, provider);
    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      const docRef = doc($firebaseFirestore, "profile", result.user.uid);
      await setDoc(docRef, {
        username: result.user.displayName,
        collection: {
          st: {},
          ut: {}
        }
      });
    }

    createToast("Signed in!", "green-500");
  } catch (e) {
    createToast(e.message, "red-500");
  } finally {
    signInDisabled.value = false;
  }
};
</script>
