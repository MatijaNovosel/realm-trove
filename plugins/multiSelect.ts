import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("multi-select", vSelect);
});
