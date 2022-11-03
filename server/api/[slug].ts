import app from "~/config/firebase-admin";
import { Profile } from "~/models";

export default defineEventHandler(async (event) => {
  const slug = event.context.params.slug;
  const { property } = getQuery(event);

  const col = app
    .firestore()
    .collection("profile")
    .where(property as string, "==", slug);

  const data = await col.get();

  if (data.empty) {
    throw Error("No profile found.");
  }

  const res = data.docs[0].data();
  return res as Profile;
});
