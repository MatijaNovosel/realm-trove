import { IDictionary, ItemInfo } from "~/models";
import { ITEMS_UT, ITEMS_ST } from "~/utils/constants";

export const useItems = () => {
  const items: IDictionary<ItemInfo[]> = {
    ut: ITEMS_UT,
    st: ITEMS_ST
  };

  return {
    items
  };
};
