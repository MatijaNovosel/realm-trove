import { IDictionary, ItemInfo } from "~/models";
import { ITEM_NAMES_UT, ITEM_DIMENSION } from "~/utils/constants";

export const useItems = () => {
  const items: IDictionary<ItemInfo[]> = {
    ut: ITEM_NAMES_UT.map<ItemInfo>((name, i) => ({
      id: i + 1,
      name,
      pos: {
        x: -(ITEM_DIMENSION * i),
        y: 0
      }
    })),
    st: []
  };

  return {
    items
  };
};
