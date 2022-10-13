import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
  const firebaseApp = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  });

  const firestore = getFirestore(firebaseApp);

  return {
    firebaseApp,
    firestore
  };
};
