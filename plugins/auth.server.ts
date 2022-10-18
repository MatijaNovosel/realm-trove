import { getAuth } from "firebase-admin/auth";
import { formatUser } from "~/utils/helpers";
import app from "~/config/firebase-admin";

export default defineNuxtPlugin(async () => {
  const token = useFirebaseToken();
  const user = useUser();
  const auth = getAuth(app);
  const tokenExpired = useTokenExpiryStatus();

  try {
    const result = await auth.verifyIdToken(token.value);
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
