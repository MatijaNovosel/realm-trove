import { IDictionary, ItemInfo } from "~/models";
import { ITEMS_UT } from "~/utils/constants";

export const useItems = () => {
  const items: IDictionary<ItemInfo[]> = {
    ut: ITEMS_UT,
    st: []
  };

  return {
    items
  };
};
