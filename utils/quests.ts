import { QUEST_QUALITY } from "~/utils/constants";
import { QuestInfo } from "~/models";
import { MARK_ENUM } from "./marks";

export const QUESTS: QuestInfo[] = [
  {
    id: 1,
    name: "Epic Showdown",
    marks: [
      MARK_ENUM.BILGEWATER,
      MARK_ENUM.BILGEWATER,
      MARK_ENUM.SON_OF_ARACHNA,
      MARK_ENUM.SON_OF_ARACHNA,
      MARK_ENUM.MEGAMOTH,
      MARK_ENUM.MEGAMOTH
    ],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 2,
    name: "Double Trouble",
    marks: [
      MARK_ENUM.ORYX,
      MARK_ENUM.ORYX,
      MARK_ENUM.ORYX,
      MARK_ENUM.JANUS,
      MARK_ENUM.JANUS,
      MARK_ENUM.JANUS
    ],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 3,
    name: "Havoc in the Halls",
    marks: [
      MARK_ENUM.MALUS,
      MARK_ENUM.MALUS,
      MARK_ENUM.COLOSSUS,
      MARK_ENUM.COLOSSUS
    ],
    quality: QUEST_QUALITY.EPIC
  },
  {
    id: 4,
    name: "Scout the Pit",
    marks: [MARK_ENUM.STHENO],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 5,
    name: "The Apparition",
    marks: [MARK_ENUM.SKULD, MARK_ENUM.SKULD, MARK_ENUM.SKULD],
    quality: QUEST_QUALITY.STANDARD
  }
];
