<template>
  <div class="w-full h-full flex-center">
    <transition name="bounce">
      <spinner class="mt-4 mx-auto" v-if="loginTrigger" />
      <div
        v-else
        class="z-2 flex flex-col items-center justify-center mx-auto text-center"
      >
        <img width="86" height="86" src="/whiteBag.png" class="mb-3 border-0" />
        <span class="text-3xl md:text-7xl mt-4">Realm trove</span>
        <span class="md:text-lg mt-4 text-gray-400 mb-6">Track your loot!</span>
        <nuxt-link :to="userData.shortId" v-if="user">
          <text-button
            background-color="green-vue"
            text="Go to your collection"
          />
        </nuxt-link>
        <text-button
          v-else
          background-color="green-vue"
          text="Sign in with Google"
          @on-click="loginTrigger = true"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const loginTrigger = useLoginTrigger();
const user = useUser();
const userData = useUserData();

onMounted(() => {
  loginTrigger.value = false;
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Home");
</script>
