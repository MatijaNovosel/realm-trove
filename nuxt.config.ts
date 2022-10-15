import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["@/assets/styles.css"],
  modules: ["nuxt-windicss", "unplugin-icons/nuxt"],
  experimental: {
    viteNode: true
  },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID
    }
  }
});
