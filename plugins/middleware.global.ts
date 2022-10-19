export default defineNuxtPlugin(() => {
  const tokenExpired = useTokenExpiryStatus();

  addRouteMiddleware(
    "auth",
    (to) => {
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
