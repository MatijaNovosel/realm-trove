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

export interface PlayerCollection {
  ut: Record<string, number>;
  st: Record<string, number>;
  bp: Record<string, number>;
}

export interface ProfileQuests {
  activeQuests: number[];
  marks: Record<string, number>;
}

export interface Profile {
  shortId: string;
  uid: string;
  username: string;
  collection: PlayerCollection;
  quests: ProfileQuests;
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

export interface MarkInfo {
  id: number;
  name: string;
  pos: ItemCoordinate;
}

export interface QuestInfo {
  id: number;
  name: string;
  marks: number[];
  quality: number;
}
