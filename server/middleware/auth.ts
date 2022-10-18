import { getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export default defineEventHandler(async (event) => {
  const { req, res } = event;
  const config = useRuntimeConfig();

  if (req.url === "/api/protected") {
    const cookie = useCookie(`${config.COOKIE_OPTIONS.name}-token`);
    const app = getApp();
    const auth = getAuth(app);

    try {
      await auth.verifyIdToken(cookie.value);
    } catch (e) {
      res.statusCode = 400;
      res.end(
        "You must be signed in to view the protected content on this page."
      );
    }
  }
});
