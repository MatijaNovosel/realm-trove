export interface LinkItem {
  to: string;
  text: string;
}

export interface ItemCoordinate {
  x: number;
  y: number;
}

export interface BpData {
  quality: number;
  items: ItemCoordinate[];
}

export interface ItemInfo {
  pos?: ItemCoordinate;
  name?: string;
  source: number;
  type?: number;
  bp?: BpData;
  vanity?: boolean;
  id: number;
}

export interface IDictionary<T> {
  [index: string]: T;
}

export interface PlayerCollection {
  ut: IDictionary<number>;
  st: IDictionary<number>;
  bp: IDictionary<number>;
}

export interface Profile {
  shortId: string;
  uid: string;
  username: string;
  collection: PlayerCollection;
}

export interface ChangeModel {
  date: string;
  body: string;
  version: string;
}

export interface SelectItem<T> {
  text: string;
  value: T;
}
