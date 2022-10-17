<template>
  <header
    v-if="user"
    class="flex md:justify-between md:w-full items-center fixed md:absolute mt-4 z-4 bg-dark-400 rounded-lg md:bg-transparent px-4 py-3"
  >
    <span class="text-2xl hidden md:block"> Realm trove </span>
    <div>
      <span class="mr-4">
        {{ user.username }}
      </span>
      <button @click="logOut" class="ripple px-4 bg-green-vue rounded-lg">
        Sign out
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { signOut } from "firebase/auth";

const user = useUser();
const router = useRouter();
const { createToast } = useToast();
const { $firebaseAuth } = useNuxtApp();

const logOut = async () => {
  try {
    await signOut($firebaseAuth);
    createToast("Signed out!", "green-500");
    router.push("/");
  } catch (e) {
    createToast(e.message, "red-500");
  }
};
</script>
