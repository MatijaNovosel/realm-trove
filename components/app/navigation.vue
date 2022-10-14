<template>
  <header
    class="flex md:justify-between md:w-full items-center fixed md:absolute mt-4 z-4"
  >
    <span class="text-2xl hidden md:block pl-2"> Realm trove </span>
    <nav
      class="flex items-center rounded-lg md:rounded-none bg-dark-400 md:bg-transparent"
    >
      <div class="nav-slider" :style="navSliderStyle" />
      <NuxtLink
        :id="link.to"
        v-for="(link, i) in links"
        :key="i"
        active-class="active-tab"
        :to="link.to"
        class="relative flex items-center text-base md:text-lg font-bold nav-tab"
        @mouseover="tabHover(link.to)"
      >
        {{ link.text }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { LinkItem } from "@/models";
import { useElementSize } from "@vueuse/core";
import { Ref } from "vue";

const navSliderOffset = ref(0);
const navSliderWidth = ref(54);

let widths: {
  dimensions: {
    width: Ref<number>;
    height: Ref<number>;
  };
  id: string;
}[] = [];

const links: LinkItem[] = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "/items",
    text: "Items"
  },
  {
    to: "/login",
    text: "Log in"
  }
];

const tabHover = (id: string) => {
  let offsetCalc = 0;

  for (let i = widths.length - 1; i >= 0; i--) {
    const tabId = widths[i].id;
    const w = widths[i].dimensions.width.value;

    if (tabId === id) {
      navSliderWidth.value = w;
      break;
    }

    offsetCalc += widths[i].dimensions.width.value + 24;
  }

  navSliderOffset.value = offsetCalc;
};

const navSliderStyle = computed(() => ({
  transform: `translateX(${-navSliderOffset.value}px)`,
  width: `${navSliderWidth.value + 20}px`
}));

onMounted(() => {
  links.forEach((link) => {
    widths.push({
      id: link.to,
      dimensions: useElementSize(document.getElementById(link.to))
    });
  });
});
</script>

<style scoped>
nav:hover .nav-slider {
  opacity: 1;
}

.nav-slider {
  width: 86px;
  transform: translateX(0px);
  transition-duration: 150ms;
  opacity: 0;
  contain: strict;
  background: rgba(171, 154, 154, 0.25);
  position: absolute;
  top: 8px;
  right: 3px;
  border-radius: 4px;
  z-index: -1;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
}

.nav-tab {
  color: grey;
  position: relative;
  display: inline-block;
  padding: 10px 12px;
  text-decoration: none;
  transition: color 0.2s ease;
  outline: none;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.active-tab {
  color: white;
}

.active-tab::before {
  content: "";
  display: block;
  position: absolute;
  height: 0;
  left: 9px;
  right: 9px;
  bottom: 0;
  border-bottom: 2px solid var(--vue-green);
}

@media only screen and (max-width: 600px) {
  .nav-slider {
    visibility: hidden;
  }
}
</style>
