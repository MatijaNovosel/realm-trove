export default defineNuxtPlugin(() => {
  const user = useUser();
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

      if (to.path === "/" && user.value) {
        return navigateTo(`items/${user.value.uid}`);
      }

      if (to.path !== "/" && !user.value) {
        return navigateTo("/");
      }
    },
    { global: true }
  );
});
