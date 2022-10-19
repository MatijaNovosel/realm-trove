import app from "~/config/firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { Profile } from "~/models";

export default defineEventHandler(async (event) => {
  const slug = event.context.params.slug;
  const firestore = getFirestore(app);

  const ref = firestore.doc(`profile/${slug}`);
  const snapshot = await ref.get();
  return snapshot.data() as Profile;
});
