import { defineNuxtPlugin } from "#app";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

declare module "#app" {
  interface NuxtApp {
    $firebaseApp: FirebaseApp;
    $firestore: Firestore;
    $firebaseAuth: Auth;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const app = initializeApp({
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGING_SENDER_ID,
    appId: config.APP_ID,
    measurementId: config.MEASUREMENT_ID
  });

  nuxtApp.provide("firebaseApp", app);
  nuxtApp.provide("firestore", getFirestore(app));
  // nuxtApp.provide("firebaseAuth", getAuth(app));
});
