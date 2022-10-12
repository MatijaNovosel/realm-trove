export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export enum Tabs {
  UT = "ut",
  ST = "st"
}

export const ITEM_WIDTH = 46;
export const ITEM_HEIGHT = 46;
