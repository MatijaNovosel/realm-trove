export interface LinkItem {
  to: string;
  text: string;
}

export interface ItemCoordinate {
  x: number;
  y: number;
}

export interface ItemInfo {
  pos: ItemCoordinate;
  name: string;
  id: number;
}

export interface IDictionary<T> {
  [index: string]: T;
}

export interface PlayerCollection {
  ut: IDictionary<number>;
  st: IDictionary<number>;
}
