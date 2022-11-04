import { IDictionary, ItemCoordinate, MarkInfo } from "~/models";

export enum MARK_ENUM {
  SEPTAVIUS = 1,
  MALPHAS,
  GULPORD,
  DR_TERRIBLE,
  PUPPET_MASTER,
  SKULD,
  RUTHVEN,
  DAICHI,
  ESBEN,
  LIMON,
  THESSAL,
  GEB,
  ORYX,
  JANUS,
  WYVERN,
  FORGOTTEN_KING,
  SHAITAN,
  BILGEWATER,
  MEGAMOTH,
  BEE_QUEEN,
  SON_OF_ARACHNA,
  STHENO,
  DAVY_JONES,
  PARASITIC_HORRORS,
  FOUNTAIN_SPIRIT,
  ARCHIVIST,
  COLOSSUS,
  VOID,
  MALUS,
  TREASURE,
  PIRATE,
  MOTH,
  ARACHNA,
  BEE,
  JUNGLE,
  TESSERACT,
  EXALTED,
  CRYSTAL_ENTITY,
  SANDSTONE,
  INTERREGNUM
}

export const MARK_POS: IDictionary<ItemCoordinate> = {
  [MARK_ENUM.SEPTAVIUS]: {
    x: 0,
    y: -138
  },
  [MARK_ENUM.MALPHAS]: {
    x: -46,
    y: -138
  },
  [MARK_ENUM.GULPORD]: {
    x: -92,
    y: -138
  },
  [MARK_ENUM.DR_TERRIBLE]: {
    x: -138,
    y: -138
  },
  [MARK_ENUM.PUPPET_MASTER]: {
    x: -184,
    y: -138
  },
  [MARK_ENUM.RUTHVEN]: {
    x: -276,
    y: -138
  },
  [MARK_ENUM.SKULD]: {
    x: -230,
    y: -138
  },
  [MARK_ENUM.SHAITAN]: {
    x: -736,
    y: -138
  },
  [MARK_ENUM.INTERREGNUM]: {
    x: -1794,
    y: -138
  },
  [MARK_ENUM.FORGOTTEN_KING]: {
    x: -690,
    y: -138
  },
  [MARK_ENUM.BEE_QUEEN]: {
    x: -874,
    y: -138
  },
  [MARK_ENUM.CRYSTAL_ENTITY]: {
    x: -1702,
    y: -138
  },
  [MARK_ENUM.COLOSSUS]: {
    x: -1196,
    y: -138
  },
  [MARK_ENUM.MALUS]: {
    x: -1288,
    y: -138
  },
  [MARK_ENUM.VOID]: {
    x: -1242,
    y: -138
  },
  [MARK_ENUM.EXALTED]: {
    x: -1656,
    y: -138
  },
  [MARK_ENUM.TREASURE]: {
    x: -1334,
    y: -138
  },
  [MARK_ENUM.PARASITIC_HORRORS]: {
    x: -1058,
    y: -138
  },
  [MARK_ENUM.BILGEWATER]: {
    x: -782,
    y: -138
  },
  [MARK_ENUM.MEGAMOTH]: {
    x: -828,
    y: -138
  },
  [MARK_ENUM.SON_OF_ARACHNA]: {
    x: -920,
    y: -138
  },
  [MARK_ENUM.DAVY_JONES]: {
    x: -1012,
    y: -138
  },
  [MARK_ENUM.DAICHI]: {
    x: -322,
    y: -138
  },
  [MARK_ENUM.WYVERN]: {
    x: -644,
    y: -138
  },
  [MARK_ENUM.TESSERACT]: {
    x: -1610,
    y: -138
  },
  [MARK_ENUM.ESBEN]: {
    x: -368,
    y: -138
  },
  [MARK_ENUM.THESSAL]: {
    x: -460,
    y: -138
  },
  [MARK_ENUM.GEB]: {
    x: -506,
    y: -138
  },
  [MARK_ENUM.ORYX]: {
    x: -552,
    y: -138
  },
  [MARK_ENUM.JANUS]: {
    x: -598,
    y: -138
  },
  [MARK_ENUM.SANDSTONE]: {
    x: -1748,
    y: -138
  },
  [MARK_ENUM.STHENO]: {
    x: -966,
    y: -138
  },
  [MARK_ENUM.LIMON]: {
    x: -414,
    y: -138
  },
  [MARK_ENUM.FOUNTAIN_SPIRIT]: {
    x: -1104,
    y: -138
  },
  [MARK_ENUM.ARCHIVIST]: {
    x: -1150,
    y: -138
  },
  [MARK_ENUM.PIRATE]: {
    x: -1380,
    y: -138
  },
  [MARK_ENUM.MOTH]: {
    x: -1426,
    y: -138
  },
  [MARK_ENUM.ARACHNA]: {
    x: -1472,
    y: -138
  },
  [MARK_ENUM.BEE]: {
    x: -1518,
    y: -138
  },
  [MARK_ENUM.JUNGLE]: {
    x: -1564,
    y: -138
  }
};

export const MARKS: MarkInfo[] = [
  {
    id: MARK_ENUM.SHAITAN,
    name: "Mark of Shaitan",
    pos: MARK_POS[MARK_ENUM.SHAITAN]
  },
  {
    id: MARK_ENUM.INTERREGNUM,
    name: "Mark of the Interregnum",
    pos: MARK_POS[MARK_ENUM.INTERREGNUM]
  },
  {
    id: MARK_ENUM.FORGOTTEN_KING,
    name: "Mark of the Forgotten King",
    pos: MARK_POS[MARK_ENUM.FORGOTTEN_KING]
  },
  {
    id: MARK_ENUM.BEE_QUEEN,
    name: "Mark of the Killer Bee Queen",
    pos: MARK_POS[MARK_ENUM.BEE_QUEEN]
  },
  {
    id: MARK_ENUM.CRYSTAL_ENTITY,
    name: "Mark of the Crystal Entity",
    pos: MARK_POS[MARK_ENUM.CRYSTAL_ENTITY]
  },
  {
    id: MARK_ENUM.COLOSSUS,
    name: "Mark of the Marble Colossus",
    pos: MARK_POS[MARK_ENUM.COLOSSUS]
  },
  {
    id: MARK_ENUM.MALUS,
    name: "Mark of Malus",
    pos: MARK_POS[MARK_ENUM.MALUS]
  },
  {
    id: MARK_ENUM.VOID,
    name: "Mark of the Void Entity",
    pos: MARK_POS[MARK_ENUM.VOID]
  },
  {
    id: MARK_ENUM.EXALTED,
    name: "Mark of the Exalted God",
    pos: MARK_POS[MARK_ENUM.EXALTED]
  },
  {
    id: MARK_ENUM.TREASURE,
    name: "Mark of the Effigy",
    pos: MARK_POS[MARK_ENUM.TREASURE]
  },
  {
    id: MARK_ENUM.PARASITIC_HORRORS,
    name: "Mark of Parasitic Horrors",
    pos: MARK_POS[MARK_ENUM.PARASITIC_HORRORS]
  },
  {
    id: MARK_ENUM.BILGEWATER,
    name: "Mark of Bilgewater",
    pos: MARK_POS[MARK_ENUM.BILGEWATER]
  },
  {
    id: MARK_ENUM.MEGAMOTH,
    name: "Mark of the Megamoth",
    pos: MARK_POS[MARK_ENUM.MEGAMOTH]
  },
  {
    id: MARK_ENUM.SON_OF_ARACHNA,
    name: "Mark of the Son of Arachna",
    pos: MARK_POS[MARK_ENUM.SON_OF_ARACHNA]
  },
  {
    id: MARK_ENUM.SON_OF_ARACHNA,
    name: "Mark of Davy Jones",
    pos: MARK_POS[MARK_ENUM.DAVY_JONES]
  },
  {
    id: MARK_ENUM.DAICHI,
    name: "Mark of Daichi",
    pos: MARK_POS[MARK_ENUM.DAICHI]
  },
  {
    id: MARK_ENUM.WYVERN,
    name: "Mark of the Wyvern",
    pos: MARK_POS[MARK_ENUM.WYVERN]
  },
  {
    id: MARK_ENUM.TESSERACT,
    name: "Mark of the Tesseract Goddess",
    pos: MARK_POS[MARK_ENUM.TESSERACT]
  },
  {
    id: MARK_ENUM.ESBEN,
    name: "Mark of Esben",
    pos: MARK_POS[MARK_ENUM.ESBEN]
  },
  {
    id: MARK_ENUM.THESSAL,
    name: "Mark of Thessal",
    pos: MARK_POS[MARK_ENUM.THESSAL]
  },
  {
    id: MARK_ENUM.GEB,
    name: "Mark of Geb",
    pos: MARK_POS[MARK_ENUM.GEB]
  },
  {
    id: MARK_ENUM.ORYX,
    name: "Mark of Oryx",
    pos: MARK_POS[MARK_ENUM.ORYX]
  },
  {
    id: MARK_ENUM.JANUS,
    name: "Mark of Janus",
    pos: MARK_POS[MARK_ENUM.JANUS]
  },
  {
    id: MARK_ENUM.SANDSTONE,
    name: "Mark of the Sandstone Titan",
    pos: MARK_POS[MARK_ENUM.SANDSTONE]
  },
  {
    id: MARK_ENUM.STHENO,
    name: "Mark of Stheno",
    pos: MARK_POS[MARK_ENUM.STHENO]
  },
  {
    id: MARK_ENUM.LIMON,
    name: "Mark of Limon",
    pos: MARK_POS[MARK_ENUM.LIMON]
  },
  {
    id: MARK_ENUM.FOUNTAIN_SPIRIT,
    name: "Mark of the Fountain Spirit",
    pos: MARK_POS[MARK_ENUM.FOUNTAIN_SPIRIT]
  },
  {
    id: MARK_ENUM.SEPTAVIUS,
    name: "Mark of Septavius",
    pos: MARK_POS[MARK_ENUM.SEPTAVIUS]
  },
  {
    id: MARK_ENUM.MALPHAS,
    name: "Mark of Malphas",
    pos: MARK_POS[MARK_ENUM.MALPHAS]
  },
  {
    id: MARK_ENUM.ARCHIVIST,
    name: "Mark of the Archivist",
    pos: MARK_POS[MARK_ENUM.ARCHIVIST]
  },
  {
    id: MARK_ENUM.GULPORD,
    name: "Mark of Gulpord",
    pos: MARK_POS[MARK_ENUM.GULPORD]
  },
  {
    id: MARK_ENUM.DR_TERRIBLE,
    name: "Mark of Dr Terrible",
    pos: MARK_POS[MARK_ENUM.DR_TERRIBLE]
  },
  {
    id: MARK_ENUM.PUPPET_MASTER,
    name: "Mark of the Puppet Master",
    pos: MARK_POS[MARK_ENUM.PUPPET_MASTER]
  },
  {
    id: MARK_ENUM.RUTHVEN,
    name: "Mark of Ruthven",
    pos: MARK_POS[MARK_ENUM.RUTHVEN]
  },
  {
    id: MARK_ENUM.SKULD,
    name: "Mark of Skuld",
    pos: MARK_POS[MARK_ENUM.SKULD]
  },
  {
    id: MARK_ENUM.PIRATE,
    name: "Mark of Dreadstump",
    pos: MARK_POS[MARK_ENUM.PIRATE]
  },
  {
    id: MARK_ENUM.MOTH,
    name: "Mark of Mama Megamoth",
    pos: MARK_POS[MARK_ENUM.MOTH]
  },
  {
    id: MARK_ENUM.ARACHNA,
    name: "Mark of Arachna",
    pos: MARK_POS[MARK_ENUM.ARACHNA]
  },
  {
    id: MARK_ENUM.BEE,
    name: "Mark of the Queen Bee",
    pos: MARK_POS[MARK_ENUM.BEE]
  },
  {
    id: MARK_ENUM.JUNGLE,
    name: "Mark of Mixcoatl",
    pos: MARK_POS[MARK_ENUM.JUNGLE]
  }
];
