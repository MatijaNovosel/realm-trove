import type { DecodedIdToken } from "firebase-admin/auth";
import type { User } from "firebase/auth";
import type { User as CustomUser } from "~/composables/useUser";
import { SelectItem } from "~/models";

export const formatUser = (user: User | DecodedIdToken): CustomUser => ({
  uid: user.uid,
  email: user.email
});

export const selectItemFromEnum = (
  val: object,
  textSrc: Record<string, string>
): SelectItem<number>[] => {
  return Object.entries(val)
    .filter((value) => typeof value[1] === "string")
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map((x) => ({
      value: parseInt(x[0]),
      text: textSrc[x[0]]
    }));
};
