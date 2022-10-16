<template>
  <div class="w-full h-full flex justify-center items-center">
    <div
      class="z-2 flex flex-col items-center justify-center user-select-none mx-auto text-center"
    >
      <img width="86" height="86" src="/whiteBag.png" class="mb-3" />
      <span class="text-3xl md:text-7xl mt-4">Realm trove</span>
      <span class="md:text-lg mt-4 text-gray-400">Track your loot!</span>
      <button @click="signIn" class="ripple px-4 bg-green-vue mt-6 rounded-lg">
        Sign in with Google
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useToast } from "vue-toastification";

const { $firebaseAuth } = useNuxtApp();
const router = useRouter();
const toast = useToast();

const disabled = ref(false);

const signIn = async () => {
  disabled.value = true;
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup($firebaseAuth, provider);
    router.push("/items");
  } catch (e) {
    toast.error(e, {
      timeout: 5000
    });
  }

  disabled.value = false;
};

const { setMeta } = useMetadata();
setMeta("Realm trove | Home");
</script>
