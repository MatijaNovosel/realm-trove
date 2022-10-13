import { IDictionary, ItemInfo } from "../models/index";

export enum Tabs {
  UT = "ut",
  ST = "st"
}

export const ITEM_DIMENSION = 46;

export const ITEMS: IDictionary<ItemInfo[]> = {
  st: [],
  ut: [
    {
      name: "Avarice",
      id: 1,
      pos: {
        x: 0,
        y: 0
      }
    },
    {
      name: "Gambler's Fate",
      id: 2,
      pos: {
        x: -46,
        y: 0
      }
    },
    {
      name: "Turncoat cape",
      id: 3,
      pos: {
        x: -92,
        y: 0
      }
    },
    {
      name: "Collector's Monocle",
      id: 4,
      pos: {
        x: -138,
        y: 0
      }
    },
    {
      name: "Lumiaire",
      id: 5,
      pos: {
        x: -184,
        y: 0
      }
    },
    {
      name: "Chaotic Scripture",
      id: 6,
      pos: {
        x: -184,
        y: 0
      }
    },
    {
      name: "Vesture of Duality",
      id: 7,
      pos: {
        x: -230,
        y: 0
      }
    },
    {
      name: "Divine Coronation",
      id: 8,
      pos: {
        x: -276,
        y: 0
      }
    },
    {
      name: "Superior",
      id: 9,
      pos: {
        x: -322,
        y: 0
      }
    },
    {
      name: "Genesis Spell",
      id: 10,
      pos: {
        x: -368,
        y: 0
      }
    },
    {
      name: "Diplomatic Robe",
      id: 11,
      pos: {
        x: -414,
        y: 0
      }
    },
    {
      name: "Chancellor's Cranium",
      id: 12,
      pos: {
        x: -460,
        y: 0
      }
    },
    {
      name: "Enforcer",
      id: 13,
      pos: {
        x: -506,
        y: 0
      }
    },
    {
      name: "Ballistic Star",
      id: 14,
      pos: {
        x: -552,
        y: 0
      }
    },
    {
      name: "Centaur's Shielding",
      id: 15,
      pos: {
        x: -598,
        y: 0
      }
    },
    {
      name: "Battalion Banner",
      id: 16,
      pos: {
        x: -644,
        y: 0
      }
    },
    {
      name: "Divinity",
      id: 17,
      pos: {
        x: -736,
        y: 0
      }
    },
    {
      name: "Oryx's Escutcheon",
      id: 18,
      pos: {
        x: -782,
        y: 0
      }
    },
    {
      name: "Gladiator Guard",
      id: 19,
      pos: {
        x: -828,
        y: 0
      }
    },
    {
      name: "Exalted God's Horn",
      id: 20,
      pos: {
        x: -874,
        y: 0
      }
    }
  ]
};
