import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const app = initializeApp({
  // @ts-ignore
  credential: cert(JSON.parse(process.env.SERVICE_ACCOUNT))
});

export const firestore = getFirestore();
