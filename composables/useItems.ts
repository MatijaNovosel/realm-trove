import { ItemInfo } from "~/models";
import { ITEMS_BP } from "~/utils/blueprints";
import { ITEMS_ST } from "~/utils/stItems";
import { ITEMS_UT } from "~/utils/utItems";

export const useItems = () => {
  const items: Record<string, ItemInfo[]> = {
    ut: ITEMS_UT,
    st: ITEMS_ST,
    bp: ITEMS_BP
  };

  return {
    items
  };
};
