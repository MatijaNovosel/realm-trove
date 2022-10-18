import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { formatUser } from "~/utils/helpers";

export default defineNuxtPlugin(async (nuxtApp) => {
  const currentUser = useUser();
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGING_SENDER_ID,
    appId: config.APP_ID,
    measurementId: config.MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.hooks.hook("app:mounted", () => {
    auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setServerSession(token);
        currentUser.value = formatUser(user);
      } else {
        setServerSession("");
        currentUser.value = null;
      }
    });
  });

  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth,
      firebaseFirestore: firestore
    }
  };
});

function setServerSession(token: string) {
  return $fetch("/api/session", {
    method: "POST",
    body: {
      token
    }
  });
}
