import app from "~/config/firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { Profile } from "~/models";

export default defineEventHandler(async (event) => {
  const slug = event.context.params.slug;
  const query = getQuery(event);
  const firestore = getFirestore(app);
  const c = firestore
    .collection("profile")
    .where(query.property as string, "==", slug);
  const d = await c.get();
  const res = d.docs[0].data();
  return res as Profile;
});
