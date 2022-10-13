import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccountJson from "./serviceAccount.json";

export const app = initializeApp({
  // @ts-ignore
  credential: cert(serviceAccountJson)
});

export const firestore = getFirestore();
