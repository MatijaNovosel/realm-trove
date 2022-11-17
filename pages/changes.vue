<template>
  <div
    class="offset w-full px-3"
    :class="{
      'h-full flex-center': loading || error
    }"
  >
    <spinner class="mt-4 mx-auto" v-if="loading" />
    <div v-else>
      <div class="text-xl md:text-3xl mt-5 mb-3">Changes</div>
      <div class="flex flex-col pl-2 gap-3">
        <changes-item v-for="(change, i) in changes" :data="change" :key="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChangeModel } from "~/models";

const {
  data: changes,
  pending: loading,
  error
} = await useLazyFetch<ChangeModel[]>("/api/changes", {
  key: "/api/changes"
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Changes");
</script>
