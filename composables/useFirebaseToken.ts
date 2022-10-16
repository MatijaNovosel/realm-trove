import { useCookie, useRuntimeConfig } from "#imports";

export default () => {
  const cookieOptions = useRuntimeConfig().public.firebaseAuthCookie;
  return useCookie(`${cookieOptions.name}-token`);
};
