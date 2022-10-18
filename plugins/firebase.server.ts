import { getAuth } from "firebase-admin/auth";
import { formatUser } from "~/utils/helpers";
import app from "~/config/firebase-admin";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  const cookie = useCookie(`${config.COOKIE_OPTIONS.name}-token`);
  const user = useUser();
  const tokenExpired = useTokenExpiryStatus();

  const auth = getAuth(app);

  if (!cookie.value) {
    return;
  }

  try {
    const result = await auth.verifyIdToken(cookie.value);
    user.value = formatUser(result);
  } catch (e) {
    switch (e.code) {
      case "auth/id-token-expired":
        tokenExpired.value = true;
        console.log("Token expired");
        break;
      default:
        console.log("Error while verifying token:", e.message);
    }
  }
});
