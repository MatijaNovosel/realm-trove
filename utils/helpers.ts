import type { DecodedIdToken } from "firebase-admin/auth";
import type { User } from "firebase/auth";
import type { User as CustomUser } from "~/composables/useUser";
import { IDictionary, SelectItem } from "~/models";

export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Groups values in an array of objects.
 * @param {T[]} array - The array of objects to be grouped by.
 * @param {string} property - The property of the objects to group by.
 * @return {IDictionary<T[]>} A dictionary with the key being the property and the value being the objects grouped by the provided property.
 */
export const groupBy = <T>(array: T[], property: string): IDictionary<T[]> => {
  return array.reduce((memo, x) => {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
};

export const formatUser = (user: User | DecodedIdToken): CustomUser => {
  return {
    uid: user.uid,
    email: user.email
  };
};

export const generateShortId = () => {
  return (Math.random() + 1).toString(36).substring(2, 8).toUpperCase();
};

export const generateRandomUsername = () => {
  return (Math.random() + 1).toString(36).substring(2, 15).toUpperCase();
};

export const selectItemFromEnum = (
  val: object,
  textSrc: IDictionary<string>
): SelectItem<number>[] => {
  return Object.entries(val)
    .filter((value) => typeof value[1] === "string")
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map((x) => ({
      value: parseInt(x[0]),
      text: textSrc[x[0]]
    }));
};
