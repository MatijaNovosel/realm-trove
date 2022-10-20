<template>
  <Html lang="en-US" class="bg-black">
    <div class="flex justify-center text-white px-5 pb-5 min-h-full">
      <div
        class="max-w-container w-full flex flex-col items-center md:items-end justify-between relative"
      >
        <AppNavigation />
        <NuxtPage />
        <AppFooter />
      </div>
    </div>
    <app-toasts />
  </Html>
</template>

<script lang="ts" setup>
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const router = useRouter();
const route = useRoute();
const { createToast } = useToast();
const loginTrigger = useLoginTrigger();
const { $firebaseAuth, $firebaseFirestore } = useNuxtApp();
const userData = useUserData();

const signIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup($firebaseAuth, provider);
    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      const docRef = doc($firebaseFirestore, "profile", result.user.uid);
      const username = result.user.displayName.substring(0, 15);

      await setDoc(docRef, {
        username,
        collection: {
          st: {},
          ut: {}
        }
      });

      userData.value.username = username;
    } else {
      const { username } = await $fetch(`/api/items/${result.user.uid}`);
      userData.value.username = username;
    }

    createToast("Signed in!", "green-500");

    if (route.name === "index") {
      router.push(result.user.uid);
    }
  } catch (e) {
    createToast(e.message, "red-500");
    loginTrigger.value = false;
  }
};

watch(
  () => loginTrigger.value,
  (val) => {
    if (val) {
      signIn();
    }
  }
);

const { setMeta } = useMetadata();
setMeta("Realm trove");
</script>

<style scoped>
.max-w-container {
  max-width: 1026px;
}

.toast-container {
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
