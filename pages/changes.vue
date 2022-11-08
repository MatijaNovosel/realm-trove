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
      <div class="flex flex-col pl-2">
        <changes-item
          v-for="(item, i) in changes"
          :data="item"
          :key="i"
          :class="{
            'mt-4': i !== 0
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { createToast } = useToast();

const loading = ref(true);
const error = ref(false);
const changes = ref();

onMounted(async () => {
  try {
    changes.value = await $fetch("/api/changes");
  } catch (e) {
    createToast(e.message, "error");
    error.value = true;
  } finally {
    loading.value = false;
  }
});

const { setMeta } = useMetadata();
setMeta("Realm trove | Changes");
</script>
