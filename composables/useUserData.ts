import { useStorage } from "@vueuse/core";

export default () => {
  const userData = useStorage("user-data", {
    username: ""
  });

  return useState("user-data", () => userData);
};
