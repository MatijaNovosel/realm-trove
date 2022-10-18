<template>
  <div class="w-full h-full flex justify-center items-center">
    <spinner class="mt-4 mx-auto" />
  </div>
</template>

<script setup lang="ts">
import useTokenExpiryStatus from "~/composables/useTokenExpiryStatus";

const { $firebaseAuth: auth } = useNuxtApp();
const tokenExpired = useTokenExpiryStatus();
const router = useRouter();
const route = useRoute();

const setServerSession = (token) => {
  return $fetch("/api/session", {
    method: "POST",
    body: {
      token
    }
  });
};

onMounted(() => {
  auth.onIdTokenChanged(async (user) => {
    if (user) {
      const redirectUrl = route.query.redirectUrl;
      const token = await user.getIdToken();
      setServerSession(token);
      tokenExpired.value = false;

      if (redirectUrl) {
        router.push(redirectUrl as string);
      } else {
        router.push("/");
      }
    }
  });
});
</script>
