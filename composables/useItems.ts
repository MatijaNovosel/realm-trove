import { IDictionary, ItemInfo } from "~/models";
import { ITEMS_UT } from "~/utils/utItems";
import { ITEMS_BP } from "~/utils/blueprints";
import { ITEMS_ST } from "~/utils/stItems";

export const useItems = () => {
  const items: IDictionary<ItemInfo[]> = {
    ut: ITEMS_UT,
    st: ITEMS_ST,
    bp: ITEMS_BP
  };

  return {
    items
  };
};
