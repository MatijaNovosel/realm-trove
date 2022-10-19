import type { DecodedIdToken } from "firebase-admin/auth";
import type { User } from "firebase/auth";
import type { User as CustomUser } from "~/composables/useUser";

export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Groups values in an array of objects.
 * @param {any[]} array - The array of objects to be grouped by.
 * @param {string} property - The property of the objects to group by.
 * @return {any[]} Array of objects grouped by the provided property.
 */
export const groupBy = (array: any[], property: string): any[] => {
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
