import { PlayerCollection } from "~/models";
import { firestore } from "../../utils/firebase";

export default defineEventHandler(async () => {
  const ref = firestore.collection("items").doc("UnvQmlkSkodFO6NTyv3mtY1bJyJ3");
  const snapshot = await ref.get();
  const data = snapshot.data();
  return data as PlayerCollection;
});
