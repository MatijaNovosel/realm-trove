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
import { generateRandomString } from "matija-utils";

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
      const shortId = generateRandomString(6);
      const docRef = doc($firebaseFirestore, "profile", shortId);
      const username = generateRandomString(11);

      await setDoc(docRef, {
        username,
        shortId,
        uid: result.user.uid,
        quests: {
          activeQuests: [],
          marks: {}
        },
        collection: {
          st: {},
          ut: {},
          bp: {}
        }
      });

      userData.value = {
        shortId,
        username
      };
    } else {
      const { username, shortId } = await $fetch(
        `/api/${result.user.uid}?property=uid`
      );
      userData.value = {
        shortId,
        username
      };
    }

    createToast("Signed in!", "green-vue");

    if (route.name === "index") {
      router.push(userData.value.shortId);
    } else {
      loginTrigger.value = false;
    }
  } catch (e) {
    createToast(e.message, "error");
    loginTrigger.value = false;
  }
};

watch(loginTrigger, (val) => {
  if (val) signIn();
});

const { setMeta } = useMetadata();
setMeta("Realm trove");
</script>

<style scoped>
.max-w-container {
  max-width: 1165px;
}
</style>
