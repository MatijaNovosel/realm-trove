import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
  const firebaseApp = initializeApp(JSON.parse(process.env.firebaseConfig));
  const firestore = getFirestore(firebaseApp);

  return {
    firebaseApp,
    firestore
  };
};
