import { useStorage } from "@vueuse/core";

export default () => {
  const userData = useStorage("user-data", {
    username: null,
    shortId: null
  });

  return useState("user-data", () => userData);
};
