<template>
  <div class="w-full h-full flex justify-center items-center">
    <transition name="bounce">
      <spinner class="mt-4 mx-auto" v-if="loggingIn" />
      <div
        v-else
        class="z-2 flex flex-col items-center justify-center user-select-none mx-auto text-center"
      >
        <img width="86" height="86" src="/whiteBag.png" class="mb-3" />
        <span class="text-3xl md:text-7xl mt-4">Realm trove</span>
        <span class="md:text-lg mt-4 text-gray-400">Track your loot!</span>
        <button
          @click="signIn"
          class="ripple px-4 bg-green-vue mt-6 rounded-lg"
        >
          Sign in with Google
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const router = useRouter();
const { $firebaseAuth, $firebaseFirestore } = useNuxtApp();
const { createToast } = useToast();

const loggingIn = ref(false);

const signIn = async () => {
  loggingIn.value = true;
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup($firebaseAuth, provider);
    const { isNewUser } = getAdditionalUserInfo(result);

    console.log(isNewUser);

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
    router.push(`items/${result.user.uid}`);
  } catch (e) {
    createToast(e.message, "red-500");
    loggingIn.value = false;
  }
};

const { setMeta } = useMetadata();
setMeta("Realm trove | Home");
</script>
