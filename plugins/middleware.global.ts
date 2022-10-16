export default defineNuxtPlugin(() => {
  const user = useUser();
  addRouteMiddleware(
    "auth",
    (to) => {
      if (to.path === "/" && user.value) return navigateTo("/items");
      if (to.path !== "/" && !user.value) return navigateTo("/");
    },
    { global: true }
  );
});
