export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const cookieOptions = useRuntimeConfig().public.COOKIE_OPTIONS;

  if (body.token) {
    setCookie(event, `${cookieOptions.name}-token`, body.token, {
      domain: cookieOptions.domain,
      maxAge: cookieOptions.lifetime ?? 0,
      path: cookieOptions.path,
      sameSite: cookieOptions.sameSite as boolean | "lax" | "strict" | "none"
    });

    return "auth cookie set";
  }

  setCookie(event, `${cookieOptions.name}-token`, "", {
    maxAge: -1,
    path: cookieOptions.path,
    sameSite: "lax",
    secure: true,
    httpOnly: true
  });

  return "auth cookie cleared";
});
