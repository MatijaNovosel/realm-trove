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
    marks: [...new Array(3)].map(() => MARK_ENUM.SKULD),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 6,
    name: "Scout the Sewers",
    marks: [MARK_ENUM.GULPORD],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 7,
    name: "Scout the Theatre",
    marks: [MARK_ENUM.PUPPET_MASTER],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 8,
    name: "Scout the Theatre",
    marks: [MARK_ENUM.PUPPET_MASTER],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 9,
    name: "Scout the Sprites",
    marks: [MARK_ENUM.LIMON],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 10,
    name: "Scout the Abyss",
    marks: [MARK_ENUM.MALPHAS],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 11,
    name: "Scout the Lair",
    marks: [MARK_ENUM.SEPTAVIUS],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 12,
    name: "Scout the Woods",
    marks: [MARK_ENUM.FOUNTAIN_SPIRIT],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 13,
    name: "Scout the Library",
    marks: [MARK_ENUM.ARCHIVIST],
    quality: QUEST_QUALITY.SCOUT
  },
  {
    id: 14,
    name: "The Snake Queen",
    marks: [...new Array(8)].map(() => MARK_ENUM.STHENO),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 15,
    name: "The Sprite Goddess",
    marks: [...new Array(8)].map(() => MARK_ENUM.LIMON),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 16,
    name: "The Archdemon",
    marks: [...new Array(8)].map(() => MARK_ENUM.MALPHAS),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 17,
    name: "The Ghost God",
    marks: [...new Array(8)].map(() => MARK_ENUM.SEPTAVIUS),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 18,
    name: "The Puppet Master",
    marks: [...new Array(6)].map(() => MARK_ENUM.PUPPET_MASTER),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 19,
    name: "The Slime God",
    marks: [...new Array(6)].map(() => MARK_ENUM.GULPORD),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 20,
    name: "The Titan",
    marks: [...new Array(6)].map(() => MARK_ENUM.SANDSTONE),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 21,
    name: "The Fountain Spirit",
    marks: [...new Array(5)].map(() => MARK_ENUM.FOUNTAIN_SPIRIT),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 22,
    name: "The Archivist",
    marks: [...new Array(5)].map(() => MARK_ENUM.ARCHIVIST),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 23,
    name: "The Vampire Lord",
    marks: [...new Array(4)].map(() => MARK_ENUM.RUTHVEN),
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 24,
    name: "To the Mountains!",
    marks: [
      MARK_ENUM.SEPTAVIUS,
      MARK_ENUM.LIMON,
      MARK_ENUM.GULPORD,
      MARK_ENUM.MALPHAS,
      MARK_ENUM.DR_TERRIBLE,
      MARK_ENUM.PUPPET_MASTER,
      MARK_ENUM.SKULD
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 25,
    name: "So Above, So Below",
    marks: [
      MARK_ENUM.LIMON,
      MARK_ENUM.LIMON,
      MARK_ENUM.LIMON,
      MARK_ENUM.GULPORD,
      MARK_ENUM.GULPORD,
      MARK_ENUM.GULPORD
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 26,
    name: "Dimensional Foes",
    marks: [
      MARK_ENUM.LIMON,
      MARK_ENUM.LIMON,
      MARK_ENUM.LIMON,
      MARK_ENUM.LIMON,
      MARK_ENUM.TESSERACT,
      MARK_ENUM.TESSERACT
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 27,
    name: "Smite the Undead",
    marks: [
      MARK_ENUM.SEPTAVIUS,
      MARK_ENUM.SEPTAVIUS,
      MARK_ENUM.SKULD,
      MARK_ENUM.SKULD,
      MARK_ENUM.RUTHVEN,
      MARK_ENUM.RUTHVEN
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 28,
    name: "Blessings and Curses",
    marks: [
      MARK_ENUM.FOUNTAIN_SPIRIT,
      MARK_ENUM.FOUNTAIN_SPIRIT,
      MARK_ENUM.FOUNTAIN_SPIRIT,
      MARK_ENUM.ARCHIVIST,
      MARK_ENUM.ARCHIVIST,
      MARK_ENUM.ARCHIVIST
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 29,
    name: "Demonhunter",
    marks: [
      MARK_ENUM.MALPHAS,
      MARK_ENUM.MALPHAS,
      MARK_ENUM.MALPHAS,
      MARK_ENUM.DAICHI,
      MARK_ENUM.DAICHI
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 30,
    name: "The Cost of Wisdom",
    marks: [
      MARK_ENUM.DR_TERRIBLE,
      MARK_ENUM.DR_TERRIBLE,
      MARK_ENUM.ARCHIVIST,
      MARK_ENUM.ARCHIVIST
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 31,
    name: "That's the Spirit",
    marks: [
      MARK_ENUM.LIMON,
      MARK_ENUM.SEPTAVIUS,
      MARK_ENUM.FOUNTAIN_SPIRIT,
      MARK_ENUM.SKULD
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 32,
    name: "Rainbow Road",
    marks: [
      MARK_ENUM.LIMON,
      MARK_ENUM.SEPTAVIUS,
      MARK_ENUM.GULPORD,
      MARK_ENUM.MALPHAS
    ],
    quality: QUEST_QUALITY.STANDARD
  },
  {
    id: 33,
    name: "Exterminate!",
    marks: [
      MARK_ENUM.SON_OF_ARACHNA,
      MARK_ENUM.SON_OF_ARACHNA,
      MARK_ENUM.MEGAMOTH,
      MARK_ENUM.MEGAMOTH,
      MARK_ENUM.BEE_QUEEN
    ],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 34,
    name: "The Mad God",
    marks: [...new Array(4)].map(() => MARK_ENUM.ORYX),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 35,
    name: "The Doorwarden",
    marks: [...new Array(4)].map(() => MARK_ENUM.JANUS),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 36,
    name: "The Prodigal Son",
    marks: [...new Array(4)].map(() => MARK_ENUM.SON_OF_ARACHNA),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 37,
    name: "The Megamoth",
    marks: [...new Array(4)].map(() => MARK_ENUM.MEGAMOTH),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 38,
    name: "The New King",
    marks: [...new Array(4)].map(() => MARK_ENUM.BILGEWATER),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 39,
    name: "The Mermaid Goddess",
    marks: [...new Array(4)].map(() => MARK_ENUM.THESSAL),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 40,
    name: "The Nightmare",
    marks: [...new Array(4)].map(() => MARK_ENUM.PARASITIC_HORRORS),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 41,
    name: "The Ghost Pirate",
    marks: [...new Array(4)].map(() => MARK_ENUM.DAVY_JONES),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 42,
    name: "The Elemental Wyvern",
    marks: [...new Array(4)].map(() => MARK_ENUM.WYVERN),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 43,
    name: "The Fallen",
    marks: [...new Array(4)].map(() => MARK_ENUM.DAICHI),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 44,
    name: "The Unwilling",
    marks: [...new Array(4)].map(() => MARK_ENUM.ESBEN),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 45,
    name: "The Ancients",
    marks: [...new Array(4)].map(() => MARK_ENUM.GEB),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 46,
    name: "The Goddess",
    marks: [...new Array(4)].map(() => MARK_ENUM.TESSERACT),
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 47,
    name: "Long Forgotten",
    marks: [MARK_ENUM.ESBEN, MARK_ENUM.ESBEN, MARK_ENUM.GEB, MARK_ENUM.GEB],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 48,
    name: "Thar be Pirates!",
    marks: [
      MARK_ENUM.BILGEWATER,
      MARK_ENUM.BILGEWATER,
      MARK_ENUM.DAVY_JONES,
      MARK_ENUM.DAVY_JONES
    ],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 49,
    name: "Ocean Man",
    marks: [
      MARK_ENUM.THESSAL,
      MARK_ENUM.THESSAL,
      MARK_ENUM.DAVY_JONES,
      MARK_ENUM.BILGEWATER
    ],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 50,
    name: "Unsettling Foes",
    marks: [
      MARK_ENUM.PARASITIC_HORRORS,
      MARK_ENUM.PARASITIC_HORRORS,
      MARK_ENUM.ESBEN,
      MARK_ENUM.DAVY_JONES
    ],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 51,
    name: "Lost and Found",
    marks: [
      MARK_ENUM.PARASITIC_HORRORS,
      MARK_ENUM.WYVERN,
      MARK_ENUM.DAVY_JONES,
      MARK_ENUM.GEB
    ],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 51,
    name: "The Effigy",
    marks: [MARK_ENUM.TREASURE],
    quality: QUEST_QUALITY.MIGHTY
  },
  {
    id: 52,
    name: "The Colossus",
    marks: [...new Array(3)].map(() => MARK_ENUM.COLOSSUS),
    quality: QUEST_QUALITY.EPIC
  },
  {
    id: 53,
    name: "The Cultist",
    marks: [...new Array(3)].map(() => MARK_ENUM.MALUS),
    quality: QUEST_QUALITY.EPIC
  },
  {
    id: 54,
    name: "The End",
    marks: [...new Array(3)].map(() => MARK_ENUM.VOID),
    quality: QUEST_QUALITY.EPIC
  },
  {
    id: 55,
    name: "The King",
    marks: [...new Array(3)].map(() => MARK_ENUM.FORGOTTEN_KING),
    quality: QUEST_QUALITY.EPIC
  },
  {
    id: 56,
    name: "The Crystal",
    marks: [...new Array(3)].map(() => MARK_ENUM.CRYSTAL_ENTITY),
    quality: QUEST_QUALITY.EPIC
  },
  {
    id: 57,
    name: "The Killer Queen",
    marks: [...new Array(3)].map(() => MARK_ENUM.BEE_QUEEN),
    quality: QUEST_QUALITY.EPIC
  }
];
