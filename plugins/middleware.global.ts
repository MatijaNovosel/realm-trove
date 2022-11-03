export default defineNuxtPlugin(() => {
  const tokenExpired = useTokenExpiryStatus();
  const userData = useUserData();

  addRouteMiddleware(
    "auth",
    (to) => {
      if (!userData.value.shortId && to.name === "quests") {
        return navigateTo({
          path: "/"
        });
      }

      if (to.path !== "/tokenexpired" && tokenExpired.value) {
        return navigateTo({
          path: "/tokenexpired",
          query: {
            redirectUrl: to.path
          }
        });
      }
    },
    { global: true }
  );
});
