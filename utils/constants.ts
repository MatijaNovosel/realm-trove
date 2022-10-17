import { ItemInfo } from "~/models";

export enum TAB {
  UT = "ut",
  ST = "st"
}

export enum SOURCE {
  PIRATE_CAVE = 1,
  FOREST_MAZE,
  SPIDER_DEN,
  FORBIDDEN_JUNGLE,
  THE_HIVE,
  CANDYLAND_HUNTING_GROUNDS,
  ANCIENT_RUINS,
  MAGIC_WOODS,
  SNAKE_PIT,
  SPRITE_WORLD,
  CAVE_OF_A_THOUSAND_TREASURES,
  UNDEAD_LAIR,
  MANOR_OF_THE_IMMORTALS,
  PUPPET_MASTERS_THEATRE,
  TOXIC_SEWERS,
  CURSED_LIBRARY,
  MAD_LAB,
  ABYSS_OF_DEMONS,
  HAUNTED_CEMETERY,
  THE_MACHINE,
  THE_INNER_WORKINGS,
  THE_CRAWLING_DEPTHS,
  PARASITE_CHAMBERS,
  WOODLAND_LABYRINTH,
  DEADWATER_DOCKS,
  BEACHZONE,
  DAVY_JONES_LOCKER,
  ICE_CAVE,
  MOUNTAIN_TEMPLE,
  LAIR_OF_DRACONIS,
  OCEAN_TRENCH,
  TOMB_OF_THE_ANCIENTS,
  THE_THIRD_DIMENSION,
  THE_NEST,
  FUNGAL_CAVERN,
  CRYSTAL_CAVERN,
  LOST_HALLS,
  CULTIST_HIDEOUT,
  THE_VOID,
  THE_SHATTERS,
  ALIENS,
  ORYXS_CHAMBER,
  WINE_CELLAR,
  COURT_OF_ORYX,
  ORYXS_SANCTUARY,
  PUPPET_MASTERS_ENCORE,
  LAIR_OF_SHAITAN,
  CNIDARIAN_REEF,
  SECLUDED_THICKET,
  HIGH_TECH_TERROR,
  RAINBOW_ROAD,
  SANTAS_WORKSHOP,
  ICE_TOMB,
  BATTLE_FOR_THE_NEXUS,
  BELLADONNAS_GARDEN,
  MAD_GOD_MAYHEM,
  HIDDEN_INTERREGNUM,
  EVENT,
  REALM,
  FORGE,
  ORYX_CASTLE,
  HEROIC_UNDEAD_LAIR
}

export const ITEM_DIMENSION = 46;

export const ITEMS_UT: ItemInfo[] = [
  {
    id: 1,
    name: "Gambler's Fate",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -46
    }
  },
  {
    id: 2,
    name: "Turncoat cape",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -92
    }
  },
  {
    id: 3,
    name: "Collector's Monocle",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -138
    }
  },
  {
    id: 4,
    name: "Lumiaire",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -184
    }
  },
  {
    id: 5,
    name: "Chaotic Scripture",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -230
    }
  },
  {
    id: 6,
    name: "Vesture of Duality",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -276
    }
  },
  {
    id: 7,
    name: "Divine Coronation",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -322
    }
  },
  {
    id: 8,
    name: "Superior",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -368
    }
  },
  {
    id: 9,
    name: "Genesis Spell",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -414
    }
  },
  {
    id: 10,
    name: "Diplomatic Robe",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -460
    }
  },
  {
    id: 11,
    name: "Chancellor's Cranium",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -506
    }
  },
  {
    id: 12,
    name: "Enforcer",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -552
    }
  },
  {
    id: 13,
    name: "Ballistic Star",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -598
    }
  },
  {
    id: 14,
    name: "Centaur's Shielding",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -644
    }
  },
  {
    id: 15,
    name: "Battalion Banner",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -690
    }
  },
  {
    id: 16,
    name: "Divinity",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -736
    }
  },
  {
    id: 17,
    name: "Oryx's Escutcheon",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -782
    }
  },
  {
    id: 18,
    name: "Gladiator Guard",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -828
    }
  },
  {
    id: 19,
    name: "Exalted God's Horn",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -874
    }
  },
  {
    id: 20,
    name: "Helm of the Juggernaut",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -920
    }
  },
  {
    id: 21,
    name: "Quiver of Thunder",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -966
    }
  },
  {
    id: 22,
    name: "Thousand Shot",
    source: SOURCE.PUPPET_MASTERS_ENCORE,
    pos: {
      y: 0,
      x: -1012
    }
  },
  {
    id: 23,
    name: "Coral Venom Trap",
    source: SOURCE.OCEAN_TRENCH,
    pos: {
      y: 0,
      x: -1058
    }
  },
  {
    id: 24,
    name: "Trap of the Vile Spirit",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -1104
    }
  },
  {
    id: 25,
    name: "Tome of Holy Protection",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      y: 0,
      x: -1150
    }
  },
  {
    id: 26,
    name: "Tome of Purification",
    source: SOURCE.MANOR_OF_THE_IMMORTALS,
    pos: {
      y: 0,
      x: -1196
    }
  },
  {
    id: 27,
    name: "Spirit Dagger",
    source: SOURCE.DAVY_JONES_LOCKER,
    pos: {
      y: 0,
      x: -1242
    }
  },
  {
    id: 28,
    name: "Ghostly Prism",
    source: SOURCE.DAVY_JONES_LOCKER,
    pos: {
      y: 0,
      x: -1288
    }
  },
  {
    id: 29,
    name: "Robe of the Mad Scientist",
    source: SOURCE.MAD_LAB,
    pos: {
      y: 0,
      x: -1334
    }
  },
  {
    id: 30,
    name: "Conducting Wand",
    source: SOURCE.MAD_LAB,
    pos: {
      y: 0,
      x: -1380
    }
  },
  {
    id: 31,
    name: "Scepter of Fulmination",
    source: SOURCE.MAD_LAB,
    pos: {
      y: 0,
      x: -1426
    }
  },
  {
    id: 32,
    name: "Ray Katana",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -1472
    }
  },
  {
    id: 33,
    name: "Midnight Star",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      y: 0,
      x: -1518
    }
  },
  {
    id: 34,
    name: "Plague Poison",
    source: SOURCE.HAUNTED_CEMETERY,
    pos: {
      y: 0,
      x: -1564
    }
  },
  {
    id: 35,
    name: "Resurrected Warrior's Armor",
    source: SOURCE.HAUNTED_CEMETERY,
    pos: {
      y: 0,
      x: -1610
    }
  },
  {
    id: 36,
    name: "Soul's Guidance",
    source: SOURCE.HAUNTED_CEMETERY,
    pos: {
      y: 0,
      x: -1656
    }
  },
  {
    id: 37,
    name: "Esben's Shaman Attire",
    source: SOURCE.ICE_CAVE,
    pos: {
      y: 0,
      x: -1702
    }
  },
  {
    id: 38,
    name: "Esben's Wedding Ring",
    source: SOURCE.ICE_CAVE,
    pos: {
      y: 0,
      x: -1748
    }
  },
  {
    id: 39,
    name: "Candy Coated Armor",
    source: SOURCE.CANDYLAND_HUNTING_GROUNDS,
    pos: {
      y: 0,
      x: -1794
    }
  },
  {
    id: 40,
    name: "Leaf Dragon Hide Armor",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      y: 0,
      x: -1840
    }
  },
  {
    id: 41,
    name: "Water Dragon Silk Robe",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      y: 0,
      x: -1886
    }
  },
  {
    id: 42,
    name: "Fire Dragon Battle Armor",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      y: 0,
      x: -1932
    }
  },
  {
    id: 43,
    name: "Celestial Blade",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      y: 0,
      x: -1978
    }
  },
  {
    id: 44,
    name: "Pirate King's Cutlass",
    source: SOURCE.DEADWATER_DOCKS,
    pos: {
      y: 0,
      x: -2024
    }
  },
  {
    id: 45,
    name: "Doku No Ken",
    source: SOURCE.THE_CRAWLING_DEPTHS,
    pos: {
      y: 0,
      x: -2070
    }
  },
  {
    id: 46,
    name: "Leaf Bow",
    source: SOURCE.WOODLAND_LABYRINTH,
    pos: {
      y: 0,
      x: -2116
    }
  },
  {
    id: 47,
    name: "Tablet of the King's Avatar",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -2162
    }
  },
  {
    id: 48,
    name: "Harlequin Armor",
    source: SOURCE.PUPPET_MASTERS_THEATRE,
    pos: {
      y: 0,
      x: -2208
    }
  },
  {
    id: 49,
    name: "Snake Charmer Pungi",
    source: SOURCE.SNAKE_PIT,
    pos: {
      y: 0,
      x: -2254
    }
  },
  {
    id: 50,
    name: "Wavecrest Concertina",
    source: SOURCE.DEADWATER_DOCKS,
    pos: {
      y: 0,
      x: -2300
    }
  },
  {
    id: 51,
    name: "Pharaoh's Requiem",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      y: 0,
      x: -2346
    }
  },
  {
    id: 52,
    name: "Void Blade",
    source: SOURCE.TOXIC_SEWERS,
    pos: {
      y: 0,
      x: -2392
    }
  },
  {
    id: 53,
    name: "Murky Toxin",
    source: SOURCE.TOXIC_SEWERS,
    pos: {
      y: 0,
      x: -2438
    }
  },
  {
    id: 54,
    name: "Prism of Dire Instability",
    source: SOURCE.PUPPET_MASTERS_ENCORE,
    pos: {
      y: 0,
      x: -2484
    }
  },
  {
    id: 55,
    name: "Spiteful Scutum",
    source: SOURCE.ORYXS_CHAMBER,
    pos: {
      y: 0,
      x: -2530
    }
  },
  {
    id: 56,
    name: "Cnidaria Rod",
    source: SOURCE.CNIDARIAN_REEF,
    pos: {
      y: 0,
      x: -2576
    }
  },
  {
    id: 57,
    name: "Bottled Medusozoan",
    source: SOURCE.CNIDARIAN_REEF,
    pos: {
      y: 0,
      x: -2622
    }
  },
  {
    id: 58,
    name: "Ice Crown",
    source: SOURCE.ICE_TOMB,
    pos: {
      y: 0,
      x: -2668
    }
  },
  {
    id: 59,
    name: "Arcane Rapier",
    source: SOURCE.ANCIENT_RUINS,
    pos: {
      y: 0,
      x: -2714
    }
  },
  {
    id: 60,
    name: "Wand of the Fallen",
    source: SOURCE.MOUNTAIN_TEMPLE,
    pos: {
      y: 0,
      x: -2760
    }
  },
  {
    id: 61,
    name: "Kageboshi",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -2806
    }
  },
  {
    id: 62,
    name: "Apocalypse Feather",
    source: SOURCE.ORYXS_CHAMBER,
    pos: {
      y: 0,
      x: -2852
    }
  },
  {
    id: 63,
    name: "Helm of the Swift Bunny",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -2898
    }
  },
  {
    id: 64,
    name: "Vitamin Buster",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -2944
    }
  },
  {
    id: 65,
    name: "Queen's Stinger",
    source: SOURCE.THE_NEST,
    pos: {
      y: 0,
      x: -2990
    }
  },
  {
    id: 66,
    name: "Hivemaster Helm",
    source: SOURCE.THE_NEST,
    pos: {
      y: 0,
      x: -3036
    }
  },
  {
    id: 67,
    name: "Yellow Beehemoth Quiver",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -3082
    }
  },
  {
    id: 68,
    name: "Red Beehemoth Quiver",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -3128
    }
  },
  {
    id: 69,
    name: "Blue Beehemoth Quiver",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -3174
    }
  },
  {
    id: 70,
    name: "Marble Seal",
    source: SOURCE.LOST_HALLS,
    pos: {
      y: 0,
      x: -3220
    }
  },
  {
    id: 71,
    name: "Staff of Unholy Sacrifice",
    source: SOURCE.CULTIST_HIDEOUT,
    pos: {
      y: 0,
      x: -3266
    }
  },
  {
    id: 72,
    name: "Shield of Ogmur",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -3312
    }
  },
  {
    id: 73,
    name: "Bow of the Void",
    source: SOURCE.THE_VOID,
    pos: {
      y: 0,
      x: -3358
    }
  },
  {
    id: 74,
    name: "Quiver of the Shadows",
    source: SOURCE.THE_VOID,
    pos: {
      y: 0,
      x: -3404
    }
  },
  {
    id: 75,
    name: "Armor of Nil",
    source: SOURCE.THE_VOID,
    pos: {
      y: 0,
      x: -3450
    }
  },
  {
    id: 76,
    name: "Sourcestone",
    source: SOURCE.THE_VOID,
    pos: {
      y: 0,
      x: -3496
    }
  },
  {
    id: 77,
    name: "Omnipotence Ring",
    source: SOURCE.THE_VOID,
    pos: {
      y: 0,
      x: -3542
    }
  },
  {
    id: 78,
    name: "Skull of Corrupted Souls",
    source: SOURCE.CULTIST_HIDEOUT,
    pos: {
      y: 0,
      x: -3588
    }
  },
  {
    id: 79,
    name: "Ritual Robe",
    source: SOURCE.CULTIST_HIDEOUT,
    pos: {
      y: 0,
      x: -3634
    }
  },
  {
    id: 80,
    name: "Bloodshed Ring",
    source: SOURCE.CULTIST_HIDEOUT,
    pos: {
      y: 0,
      x: -3680
    }
  },
  {
    id: 81,
    name: "Sword of the Colossus",
    source: SOURCE.LOST_HALLS,
    pos: {
      y: 0,
      x: -3726
    }
  },
  {
    id: 82,
    name: "Breastplate of New Life",
    source: SOURCE.LOST_HALLS,
    pos: {
      y: 0,
      x: -3772
    }
  },
  {
    id: 83,
    name: "Magical Lodestone",
    source: SOURCE.LOST_HALLS,
    pos: {
      y: 0,
      x: -3818
    }
  },
  {
    id: 84,
    name: "Shadow Serpent Sidearm",
    source: SOURCE.THE_THIRD_DIMENSION,
    pos: {
      y: 0,
      x: -3864
    }
  },
  {
    id: 85,
    name: "Seal of Cubic Conundra",
    source: SOURCE.THE_THIRD_DIMENSION,
    pos: {
      y: 0,
      x: -3910
    }
  },
  {
    id: 86,
    name: "Cloak of Cubic Enigma",
    source: SOURCE.THE_THIRD_DIMENSION,
    pos: {
      y: 0,
      x: -3956
    }
  },
  {
    id: 87,
    name: "Cloak of Bloody Surprises",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -4002
    }
  },
  {
    id: 88,
    name: "Dirk of Cronus",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -4048
    }
  },
  {
    id: 89,
    name: "Recurring Terror Spell",
    source: SOURCE.PARASITE_CHAMBERS,
    pos: {
      y: 0,
      x: -4094
    }
  },
  {
    id: 90,
    name: "Tome of Pain",
    source: SOURCE.PARASITE_CHAMBERS,
    pos: {
      y: 0,
      x: -4140
    }
  },
  {
    id: 91,
    name: "Scepter of Devastation",
    source: SOURCE.PARASITE_CHAMBERS,
    pos: {
      y: 0,
      x: -4186
    }
  },
  {
    id: 92,
    name: "Doom Bow",
    source: SOURCE.UNDEAD_LAIR,
    pos: {
      y: 0,
      x: -4232
    }
  },
  {
    id: 93,
    name: "Coral Bow",
    source: SOURCE.OCEAN_TRENCH,
    pos: {
      y: 0,
      x: -4278
    }
  },
  {
    id: 94,
    name: "Peacekeeper",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4324
    }
  },
  {
    id: 95,
    name: "Vanguard's Visage",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4370
    }
  },
  {
    id: 96,
    name: "Noble Mandolin",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4416
    }
  },
  {
    id: 97,
    name: "Polarity Poison",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4462
    }
  },
  {
    id: 98,
    name: "Sentinel's Sidearm",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4508
    }
  },
  {
    id: 99,
    name: "Primal Arcana",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4554
    }
  },
  {
    id: 100,
    name: "Valor",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4600
    }
  },
  {
    id: 101,
    name: "Dusky Catalyst",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4646
    }
  },
  {
    id: 102,
    name: "Warmonger",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4692
    }
  },
  {
    id: 103,
    name: "Mantle of the Monarchy",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4738
    }
  },
  {
    id: 104,
    name: "Vest of Abandoned Shadows",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4784
    }
  },
  {
    id: 105,
    name: "Royal Guard's Cuirass",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4830
    }
  },
  {
    id: 106,
    name: "The Forgotten Crown",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4876
    }
  },
  {
    id: 107,
    name: "The Twilight Gemstone",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4922
    }
  },
  {
    id: 108,
    name: "Bracer of the Guardian",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -4968
    }
  },
  {
    id: 109,
    name: "Ring of the Sphinx",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      y: 0,
      x: -5014
    }
  },
  {
    id: 110,
    name: "Ring of the Nile",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      y: 0,
      x: -5060
    }
  },
  {
    id: 111,
    name: "Ring of the Pyramid",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      y: 0,
      x: -5106
    }
  },
  {
    id: 112,
    name: "Enchanted Ice Shard",
    source: SOURCE.ICE_TOMB,
    pos: {
      y: 0,
      x: -5152
    }
  },
  {
    id: 113,
    name: "Ring of the Northern Light",
    source: SOURCE.ICE_TOMB,
    pos: {
      y: 0,
      x: -5198
    }
  },
  {
    id: 114,
    name: "Frimarra",
    source: SOURCE.ICE_TOMB,
    pos: {
      y: 0,
      x: -5244
    }
  },
  {
    id: 115,
    name: "Volcanic Sheath",
    source: SOURCE.ABYSS_OF_DEMONS,
    pos: {
      y: 0,
      x: -5290
    }
  },
  {
    id: 116,
    name: "Kaiken",
    source: SOURCE.MOUNTAIN_TEMPLE,
    pos: {
      y: 0,
      x: -5336
    }
  },
  {
    id: 117,
    name: "Labyrinth Dweller's Sheath",
    source: SOURCE.WOODLAND_LABYRINTH,
    pos: {
      y: 0,
      x: -5382
    }
  },
  {
    id: 118,
    name: "Quartermaster Scabbard",
    source: SOURCE.DAVY_JONES_LOCKER,
    pos: {
      y: 0,
      x: -5428
    }
  },
  {
    id: 119,
    name: "Irradiance Sheath",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -5474
    }
  },
  {
    id: 120,
    name: "Paper Machete",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -5520
    }
  },
  {
    id: 121,
    name: "Seal of Blasphemous Prayer",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -5566
    }
  },
  {
    id: 122,
    name: "Cloak of the Planewalker",
    source: SOURCE.SPRITE_WORLD,
    pos: {
      y: 0,
      x: -5612
    }
  },
  {
    id: 123,
    name: "Skull of Endless Torment",
    source: SOURCE.LAIR_OF_SHAITAN,
    pos: {
      y: 0,
      x: -5658
    }
  },
  {
    id: 124,
    name: "Staff of Extreme Prejudice",
    source: SOURCE.SPRITE_WORLD,
    pos: {
      y: 0,
      x: -5704
    }
  },
  {
    id: 125,
    name: "Barnacle Basher",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -5750
    }
  },
  {
    id: 126,
    name: "Corruption Cutter",
    source: SOURCE.CURSED_LIBRARY,
    pos: {
      y: 0,
      x: -5796
    }
  },
  {
    id: 127,
    name: "Scholar's Seal",
    source: SOURCE.CURSED_LIBRARY,
    pos: {
      y: 0,
      x: -5842
    }
  },
  {
    id: 128,
    name: "K.I.D.D. Force",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -5888
    }
  },
  {
    id: 129,
    name: "MMace MMurderer",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -5934
    }
  },
  {
    id: 130,
    name: "Mister Mango",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -5980
    }
  },
  {
    id: 131,
    name: "Butter Bow",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6026
    }
  },
  {
    id: 132,
    name: "Caduceus of Current Craziness",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6072
    }
  },
  {
    id: 133,
    name: "Blade of Ages",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6118
    }
  },
  {
    id: 134,
    name: "Mirror Cloak",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6164
    }
  },
  {
    id: 135,
    name: "Archerang",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6210
    }
  },
  {
    id: 136,
    name: "Spelling Spell",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6256
    }
  },
  {
    id: 137,
    name: "Tome of Moral Support",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6302
    }
  },
  {
    id: 138,
    name: "Challenger Helm",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6348
    }
  },
  {
    id: 139,
    name: "Shield of Pogmur",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6394
    }
  },
  {
    id: 140,
    name: "Lightning in a Bottle",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6440
    }
  },
  {
    id: 141,
    name: "Epiphany Skull",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6486
    }
  },
  {
    id: 142,
    name: "Helium Trap",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6532
    }
  },
  {
    id: 143,
    name: "Karma Orb",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6578
    }
  },
  {
    id: 144,
    name: "Fool's Prism",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6624
    }
  },
  {
    id: 145,
    name: "Honey Scepter Supreme",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6670
    }
  },
  {
    id: 146,
    name: "Unshuriken",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6716
    }
  },
  {
    id: 147,
    name: "NSFWakizashi",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -6762
    }
  },
  {
    id: 148,
    name: "Gem of Tenderness",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -6808
    }
  },
  {
    id: 149,
    name: "Gem of Adoration",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -6854
    }
  },
  {
    id: 150,
    name: "Soulful Affection",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -6900
    }
  },
  {
    id: 151,
    name: "Beekeeper's Flamethrower",
    source: SOURCE.THE_NEST,
    pos: {
      y: 0,
      x: -6946
    }
  },
  {
    id: 152,
    name: "Crystal Wand",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -6992
    }
  },
  {
    id: 153,
    name: "Wand of the Bulwark",
    source: SOURCE.SNAKE_PIT,
    pos: {
      y: 0,
      x: -7038
    }
  },
  {
    id: 154,
    name: "Crystal Sword",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -7084
    }
  },
  {
    id: 155,
    name: "Demon Blade",
    source: SOURCE.ABYSS_OF_DEMONS,
    pos: {
      y: 0,
      x: -7130
    }
  },
  {
    id: 156,
    name: "Mace of the Celestial Forest",
    source: SOURCE.SPRITE_WORLD,
    pos: {
      y: 0,
      x: -7176
    }
  },
  {
    id: 157,
    name: "Mace of the Depths",
    source: SOURCE.THE_CRAWLING_DEPTHS,
    pos: {
      y: 0,
      x: -7222
    }
  },
  {
    id: 158,
    name: "Hivemind Mace",
    source: SOURCE.THE_NEST,
    pos: {
      y: 0,
      x: -7268
    }
  },
  {
    id: 159,
    name: "Crystal Mace",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -7314
    }
  },
  {
    id: 160,
    name: "Recursion Mace",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -7360
    }
  },
  {
    id: 161,
    name: "Orb of Aether",
    source: SOURCE.MOUNTAIN_TEMPLE,
    pos: {
      y: 0,
      x: -7406
    }
  },
  {
    id: 162,
    name: "Silex's Hammer",
    source: SOURCE.MAD_GOD_MAYHEM,
    pos: {
      y: 0,
      x: -7452
    }
  },
  {
    id: 163,
    name: "Jade Storm",
    source: SOURCE.MAD_GOD_MAYHEM,
    pos: {
      y: 0,
      x: -7498
    }
  },
  {
    id: 164,
    name: "Cloak of the Mad God",
    source: SOURCE.MAD_GOD_MAYHEM,
    pos: {
      y: 0,
      x: -7544
    }
  },
  {
    id: 165,
    name: "Shield of Flowing Clarity",
    source: SOURCE.MAD_GOD_MAYHEM,
    pos: {
      y: 0,
      x: -7590
    }
  },
  {
    id: 166,
    name: "Sealed Crystal Skull",
    source: SOURCE.SECLUDED_THICKET,
    pos: {
      y: 0,
      x: -7636
    }
  },
  {
    id: 167,
    name: "Penetrating Blast Spell",
    source: SOURCE.SECLUDED_THICKET,
    pos: {
      y: 0,
      x: -7682
    }
  },
  {
    id: 168,
    name: "Tome of the Mushroom Tribes",
    source: SOURCE.FUNGAL_CAVERN,
    pos: {
      y: 0,
      x: -7728
    }
  },
  {
    id: 169,
    name: "Sporous Spray Spell",
    source: SOURCE.FUNGAL_CAVERN,
    pos: {
      y: 0,
      x: -7774
    }
  },
  {
    id: 170,
    name: "Fungal Breastplate",
    source: SOURCE.FUNGAL_CAVERN,
    pos: {
      y: 0,
      x: -7820
    }
  },
  {
    id: 171,
    name: "Echoes Prism",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -7866
    }
  },
  {
    id: 172,
    name: "Crystal Shield",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -7912
    }
  },
  {
    id: 173,
    name: "Crystallised Fang's Venom",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -7958
    }
  },
  {
    id: 174,
    name: "Crystallised Mist",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -8004
    }
  },
  {
    id: 175,
    name: "Cave Dweller Trap",
    source: SOURCE.FUNGAL_CAVERN,
    pos: {
      y: 0,
      x: -8050
    }
  },
  {
    id: 176,
    name: "Cloak of Refraction",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -8096
    }
  },
  {
    id: 177,
    name: "Fractured Gemstone Wakizashi",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -8142
    }
  },
  {
    id: 178,
    name: "Star of Enlightenment",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -8188
    }
  },
  {
    id: 179,
    name: "Burial Blades",
    source: SOURCE.CULTIST_HIDEOUT,
    pos: {
      y: 0,
      x: -8234
    }
  },
  {
    id: 180,
    name: "Fractal Blades",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      y: 0,
      x: -8280
    }
  },
  {
    id: 181,
    name: "Perennial Cranium",
    source: SOURCE.BELLADONNAS_GARDEN,
    pos: {
      y: 0,
      x: -8326
    }
  },
  {
    id: 182,
    name: "Clover Bow",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -8372
    }
  },
  {
    id: 183,
    name: "Sword of the Rainbow's End",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -8418
    }
  },
  {
    id: 184,
    name: "Katana of Good Fortune",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -8464
    }
  },
  {
    id: 185,
    name: "Clover Star",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -8510
    }
  },
  {
    id: 186,
    name: "Evergreen Dagger",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -8556
    }
  },
  {
    id: 187,
    name: "Sleigh Bell Staff",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -8602
    }
  },
  {
    id: 188,
    name: "Brass Chamberstick",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -8648
    }
  },
  {
    id: 189,
    name: "Cheerful Chipper",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -8694
    }
  },
  {
    id: 190,
    name: "Candy Katana",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -8740
    }
  },
  {
    id: 191,
    name: "Garland Bow",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -8786
    }
  },
  {
    id: 192,
    name: "Chrysalis of Eternity",
    source: SOURCE.THE_SHATTERS,
    pos: {
      y: 0,
      x: -8832
    }
  },
  {
    id: 193,
    name: "Necronomicon",
    source: SOURCE.CURSED_LIBRARY,
    pos: {
      y: 0,
      x: -8878
    }
  },
  {
    id: 194,
    name: "Fire Blade",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -8924
    }
  },
  {
    id: 195,
    name: "Moonbeam Blade",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -8970
    }
  },
  {
    id: 196,
    name: "Foramite Staff",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -9016
    }
  },
  {
    id: 197,
    name: "Comet of Calamity",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -9062
    }
  },
  {
    id: 198,
    name: "Gaseous Glaive",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -9108
    }
  },
  {
    id: 199,
    name: "Acidic Slasher",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -9154
    }
  },
  {
    id: 200,
    name: "Helm of the Jack-o'-naut",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -9200
    }
  },
  {
    id: 201,
    name: "Random Spell Extraction Device",
    source: SOURCE.MAD_GOD_MAYHEM,
    pos: {
      y: 0,
      x: -9246
    }
  },
  {
    id: 202,
    name: "Corrosion Cutter",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -9292
    }
  },
  {
    id: 203,
    name: "Orb of Conflict",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -9338
    }
  },
  {
    id: 204,
    name: "Keychain Cutlass",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -9384
    }
  },
  {
    id: 205,
    name: "Anatis Staff",
    source: SOURCE.ORYXS_CHAMBER,
    pos: {
      y: 0,
      x: -9430
    }
  },
  {
    id: 206,
    name: "Phantasm Dirk",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -9476
    }
  },
  {
    id: 207,
    name: "Useless Katana",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -9522
    }
  },
  {
    id: 208,
    name: "Wakizashi of Eastern Winds",
    source: SOURCE.WOODLAND_LABYRINTH,
    pos: {
      y: 0,
      x: -9568
    }
  },
  {
    id: 209,
    name: "Wakizashi of Crossing Fires",
    source: SOURCE.LAIR_OF_SHAITAN,
    pos: {
      y: 0,
      x: -9614
    }
  },
  {
    id: 210,
    name: "Hanagasaku",
    source: SOURCE.BELLADONNAS_GARDEN,
    pos: {
      y: 0,
      x: -9660
    }
  },
  {
    id: 211,
    name: "Doctor Swordsworth",
    source: SOURCE.BATTLE_FOR_THE_NEXUS,
    pos: {
      y: 0,
      x: -9706
    }
  },
  {
    id: 212,
    name: "KoalaPOW",
    source: SOURCE.BATTLE_FOR_THE_NEXUS,
    pos: {
      y: 0,
      x: -9752
    }
  },
  {
    id: 213,
    name: "Spicy Wand of Spice",
    source: SOURCE.BATTLE_FOR_THE_NEXUS,
    pos: {
      y: 0,
      x: -9798
    }
  },
  {
    id: 214,
    name: "Robobow",
    source: SOURCE.BATTLE_FOR_THE_NEXUS,
    pos: {
      y: 0,
      x: -9844
    }
  },
  {
    id: 215,
    name: "Sunshine Shiv",
    source: SOURCE.BATTLE_FOR_THE_NEXUS,
    pos: {
      y: 0,
      x: -9890
    }
  },
  {
    id: 216,
    name: "Arbiter's Wrath",
    source: SOURCE.BATTLE_FOR_THE_NEXUS,
    pos: {
      y: 0,
      x: -9936
    }
  },
  {
    id: 217,
    name: "Staff of Esben",
    source: SOURCE.ICE_CAVE,
    pos: {
      y: 0,
      x: -9982
    }
  },
  {
    id: 218,
    name: "Skullish Remains of Esben",
    source: SOURCE.ICE_CAVE,
    pos: {
      y: 0,
      x: -10028
    }
  },
  {
    id: 219,
    name: "Frozen Wand",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10074
    }
  },
  {
    id: 220,
    name: "Enchanted Ice Blade",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10120
    }
  },
  {
    id: 221,
    name: "Staff of Iceblast",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10166
    }
  },
  {
    id: 222,
    name: "Eternal Snowflake Wand",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10212
    }
  },
  {
    id: 223,
    name: "Arctic Bow",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10258
    }
  },
  {
    id: 224,
    name: "Tome of Frigid Protection",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10304
    }
  },
  {
    id: 225,
    name: "Q.U.I.V.E.R.",
    source: SOURCE.HIGH_TECH_TERROR,
    pos: {
      y: 0,
      x: -10350
    }
  },
  {
    id: 226,
    name: "B.O.W.",
    source: SOURCE.HIGH_TECH_TERROR,
    pos: {
      y: 0,
      x: -10396
    }
  },
  {
    id: 227,
    name: "S.T.A.F.F.",
    source: SOURCE.HIGH_TECH_TERROR,
    pos: {
      y: 0,
      x: -10442
    }
  },
  {
    id: 228,
    name: "E.Y.E.",
    source: SOURCE.HIGH_TECH_TERROR,
    pos: {
      y: 0,
      x: -10488
    }
  },
  {
    id: 229,
    name: "Heart of Gold Prism",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10534
    }
  },
  {
    id: 230,
    name: "Spirit Staff",
    source: SOURCE.MAGIC_WOODS,
    pos: {
      y: 0,
      x: -10580
    }
  },
  {
    id: 231,
    name: "Enchantment Orb",
    source: SOURCE.MAGIC_WOODS,
    pos: {
      y: 0,
      x: -10626
    }
  },
  {
    id: 232,
    name: "Krathana",
    source: SOURCE.MAD_GOD_MAYHEM,
    pos: {
      y: 0,
      x: -10672
    }
  },
  {
    id: 233,
    name: "Tezcacoatl's Tail",
    source: SOURCE.SECLUDED_THICKET,
    pos: {
      y: 0,
      x: -10718
    }
  },
  {
    id: 234,
    name: "Sword of Illumination",
    source: SOURCE.ABYSS_OF_DEMONS,
    pos: {
      y: 0,
      x: -10764
    }
  },
  {
    id: 235,
    name: "Rainbow Rod",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -10810
    }
  },
  {
    id: 236,
    name: "Painbow",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -10856
    }
  },
  {
    id: 237,
    name: "Prismatic Slasher",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -10902
    }
  },
  {
    id: 238,
    name: "Staff of the Saint",
    source: SOURCE.RAINBOW_ROAD,
    pos: {
      y: 0,
      x: -10948
    }
  },
  {
    id: 239,
    name: "Mimicry Trap",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -10994
    }
  },
  {
    id: 240,
    name: "Prismimic",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11040
    }
  },
  {
    id: 241,
    name: "Tome of Holy Furor",
    source: SOURCE.MAD_GOD_MAYHEM,
    pos: {
      y: 0,
      x: -11086
    }
  },
  {
    id: 242,
    name: "Seal of Eternal Life",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -11132
    }
  },
  {
    id: 243,
    name: "Blazon Bow",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -11178
    }
  },
  {
    id: 244,
    name: "Sun's Judgement",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -11224
    }
  },
  {
    id: 245,
    name: "Warlord Wand",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -11270
    }
  },
  {
    id: 246,
    name: "Snowblind Wand",
    source: SOURCE.ALIENS,
    pos: {
      y: 0,
      x: -11316
    }
  },
  {
    id: 247,
    name: "Cheater Heavy Armor",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -11362
    }
  },
  {
    id: 248,
    name: "Trap of the Blood Spirit",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11408
    }
  },
  {
    id: 249,
    name: "Orb of Terror",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11454
    }
  },
  {
    id: 250,
    name: "Fitted Protective Matrix",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11500
    }
  },
  {
    id: 251,
    name: "Magic Protective Matrix",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11546
    }
  },
  {
    id: 252,
    name: "Heavy Protective Matrix",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11592
    }
  },
  {
    id: 253,
    name: "Prism of Dancing Swords",
    source: SOURCE.PUPPET_MASTERS_THEATRE,
    pos: {
      y: 0,
      x: -11638
    }
  },
  {
    id: 254,
    name: "Chicken Leg of Doom",
    source: SOURCE.ORYXS_SANCTUARY,
    pos: {
      y: 0,
      x: -11684
    }
  },
  {
    id: 255,
    name: "Lullaby",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -11730
    }
  },
  {
    id: 256,
    name: "Greaterhosen",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11776
    }
  },
  {
    id: 257,
    name: "Mighty Stein",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11822
    }
  },
  {
    id: 258,
    name: "Crystallized Worm Spellblade",
    source: SOURCE.FUNGAL_CAVERN,
    pos: {
      y: 0,
      x: -11868
    }
  },
  {
    id: 259,
    name: "Sakura Wakizashi",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11914
    }
  },
  {
    id: 260,
    name: "Botany Book",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -11960
    }
  },
  {
    id: 261,
    name: "Ancient Stone Sword",
    source: SOURCE.ORYX_CASTLE,
    pos: {
      y: 0,
      x: -12006
    }
  },
  {
    id: 262,
    name: "Cheater Light Armor",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -12052
    }
  },
  {
    id: 263,
    name: "Cheater Robe",
    source: SOURCE.THE_MACHINE,
    pos: {
      y: 0,
      x: -12098
    }
  },
  {
    id: 264,
    name: "Sunny Side Bow",
    source: SOURCE.EVENT,
    pos: {
      y: 0,
      x: -12144
    }
  }
];

export const ITEMS_ST: ItemInfo[] = [
  {
    id: 1501,
    name: "Reikoku",
    source: SOURCE.SECLUDED_THICKET,
    pos: {
      x: 0,
      y: -46
    }
  },
  {
    id: 1502,
    name: "Daybreak Chakram",
    source: SOURCE.SECLUDED_THICKET,
    pos: {
      x: -46,
      y: -46
    }
  },
  {
    id: 1503,
    name: "Hirejou Tenne",
    source: SOURCE.SECLUDED_THICKET,
    pos: {
      x: -92,
      y: -46
    }
  },
  {
    id: 1504,
    name: "Heavenly Magatama",
    source: SOURCE.SECLUDED_THICKET,
    pos: {
      x: -138,
      y: -46
    }
  },
  {
    id: 1505,
    name: "Deathless Crossbow",
    source: SOURCE.CURSED_LIBRARY,
    pos: {
      x: -184,
      y: -46
    }
  },
  {
    id: 1506,
    name: "Quiver of Shrieking Specters",
    source: SOURCE.DAVY_JONES_LOCKER,
    pos: {
      x: -230,
      y: -46
    }
  },
  {
    id: 1507,
    name: "Wraith’s Brigandine",
    source: SOURCE.CURSED_LIBRARY,
    pos: {
      x: -276,
      y: -46
    }
  },
  {
    id: 1508,
    name: "Revenant Ring",
    source: SOURCE.DAVY_JONES_LOCKER,
    pos: {
      x: -322,
      y: -46
    }
  },
  {
    id: 1509,
    name: "Jagged Hatchet",
    source: SOURCE.FORGE,
    pos: {
      x: -368,
      y: -46
    }
  },
  {
    id: 1510,
    name: "Burlap Cowl",
    source: SOURCE.FORGE,
    pos: {
      x: -414,
      y: -46
    }
  },
  {
    id: 1511,
    name: "Overalls of Endurance",
    source: SOURCE.FORGE,
    pos: {
      x: -460,
      y: -46
    }
  },
  {
    id: 1512,
    name: "Headless Ted",
    source: SOURCE.FORGE,
    pos: {
      x: -506,
      y: -46
    }
  },
  {
    id: 1513,
    name: "Fiery Katana",
    source: SOURCE.LAIR_OF_SHAITAN,
    pos: {
      x: -552,
      y: -46
    }
  },
  {
    id: 1514,
    name: "Pyro Sheath",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      x: -598,
      y: -46
    }
  },
  {
    id: 1515,
    name: "Flame Guard",
    source: SOURCE.THE_NEST,
    pos: {
      x: -644,
      y: -46
    }
  },
  {
    id: 1516,
    name: "Firelight Necklace",
    source: SOURCE.ABYSS_OF_DEMONS,
    pos: {
      x: -690,
      y: -46
    }
  },
  {
    id: 1517,
    name: "Withered Poncho",
    source: SOURCE.EVENT,
    pos: {
      x: -736,
      y: -46
    }
  },
  {
    id: 1518,
    name: "Burlap Hat",
    source: SOURCE.EVENT,
    pos: {
      x: -782,
      y: -46
    }
  },
  {
    id: 1519,
    name: "Bone Bow",
    source: SOURCE.EVENT,
    pos: {
      x: -828,
      y: -46
    }
  },
  {
    id: 1520,
    name: "Spinal Quiver",
    source: SOURCE.EVENT,
    pos: {
      x: -874,
      y: -46
    }
  },
  {
    id: 1521,
    name: "Torso Tunic",
    source: SOURCE.EVENT,
    pos: {
      x: -920,
      y: -46
    }
  },
  {
    id: 1522,
    name: "Collarbone Collar",
    source: SOURCE.EVENT,
    pos: {
      x: -966,
      y: -46
    }
  },
  {
    id: 1523,
    name: "Hellfire Broadsword",
    source: SOURCE.EVENT,
    pos: {
      x: -1012,
      y: -46
    }
  },
  {
    id: 1524,
    name: "Sacrilege Seal",
    source: SOURCE.EVENT,
    pos: {
      x: -1058,
      y: -46
    }
  },
  {
    id: 1525,
    name: "Tormentor’s Chainmail",
    source: SOURCE.EVENT,
    pos: {
      x: -1104,
      y: -46
    }
  },
  {
    id: 1526,
    name: "Horned Ring",
    source: SOURCE.EVENT,
    pos: {
      x: -1150,
      y: -46
    }
  },
  {
    id: 1527,
    name: "Stygian Torch",
    source: SOURCE.EVENT,
    pos: {
      x: -1196,
      y: -46
    }
  },
  {
    id: 1528,
    name: "Orb of the Sabbath",
    source: SOURCE.EVENT,
    pos: {
      x: -1242,
      y: -46
    }
  },
  {
    id: 1529,
    name: "Robe of the Enchantress",
    source: SOURCE.EVENT,
    pos: {
      x: -1288,
      y: -46
    }
  },
  {
    id: 1530,
    name: "Witch’s Brooch",
    source: SOURCE.EVENT,
    pos: {
      x: -1334,
      y: -46
    }
  },
  {
    id: 1531,
    name: "Ring of the Inferno",
    source: SOURCE.REALM,
    pos: {
      x: -1380,
      y: -46
    }
  },
  {
    id: 1532,
    name: "Molten Mantle",
    source: SOURCE.ABYSS_OF_DEMONS,
    pos: {
      x: -1426,
      y: -46
    }
  },
  {
    id: 1533,
    name: "Scorchium Stone",
    source: SOURCE.ABYSS_OF_DEMONS,
    pos: {
      x: -1472,
      y: -46
    }
  },
  {
    id: 1534,
    name: "Staff of Eruption",
    source: SOURCE.LAIR_OF_SHAITAN,
    pos: {
      x: -1518,
      y: -46
    }
  },
  {
    id: 1535,
    name: "Radiant Heart",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      x: -1564,
      y: -46
    }
  },
  {
    id: 1536,
    name: "Luminous Armor",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      x: -1610,
      y: -46
    }
  },
  {
    id: 1537,
    name: "Crystalline Kunai",
    source: SOURCE.FUNGAL_CAVERN,
    pos: {
      x: -1656,
      y: -46
    }
  },
  {
    id: 1538,
    name: "Quartz Cutter",
    source: SOURCE.CRYSTAL_CAVERN,
    pos: {
      x: -1702,
      y: -46
    }
  },
  {
    id: 1539,
    name: "Pernicious Peridot",
    source: SOURCE.SNAKE_PIT,
    pos: {
      x: -1748,
      y: -46
    }
  },
  {
    id: 1540,
    name: "Acidic Armor",
    source: SOURCE.SNAKE_PIT,
    pos: {
      x: -1794,
      y: -46
    }
  },
  {
    id: 1541,
    name: "Virulent Venom",
    source: SOURCE.TOXIC_SEWERS,
    pos: {
      x: -1840,
      y: -46
    }
  },
  {
    id: 1542,
    name: "Toxin Tooth",
    source: SOURCE.TOXIC_SEWERS,
    pos: {
      x: -1886,
      y: -46
    }
  },
  {
    id: 1543,
    name: "Kiritsukeru",
    source: SOURCE.REALM,
    pos: {
      x: -1932,
      y: -46
    }
  },
  {
    id: 1544,
    name: "Watarimono",
    source: SOURCE.REALM,
    pos: {
      x: -1978,
      y: -46
    }
  },
  {
    id: 1545,
    name: "Reinforced Root Armor",
    source: SOURCE.REALM,
    pos: {
      x: -2024,
      y: -46
    }
  },
  {
    id: 1546,
    name: "Traveler’s Trinket",
    source: SOURCE.REALM,
    pos: {
      x: -2070,
      y: -46
    }
  },
  {
    id: 1547,
    name: "Tideturner Trident",
    source: SOURCE.OCEAN_TRENCH,
    pos: {
      x: -2116,
      y: -46
    }
  },
  {
    id: 1548,
    name: "Slurpian Sea Scroll",
    source: SOURCE.CNIDARIAN_REEF,
    pos: {
      x: -2162,
      y: -46
    }
  },
  {
    id: 1549,
    name: "Oceanic Apparel",
    source: SOURCE.OCEAN_TRENCH,
    pos: {
      x: -2208,
      y: -46
    }
  },
  {
    id: 1550,
    name: "Imperial Keepsake",
    source: SOURCE.CNIDARIAN_REEF,
    pos: {
      x: -2254,
      y: -46
    }
  },
  {
    id: 1551,
    name: "Magic Wand",
    source: SOURCE.PUPPET_MASTERS_THEATRE,
    pos: {
      x: -2300,
      y: -46
    }
  },
  {
    id: 1552,
    name: "Lightshow Scepter",
    source: SOURCE.PUPPET_MASTERS_THEATRE,
    pos: {
      x: -2346,
      y: -46
    }
  },
  {
    id: 1553,
    name: "Magician’s Robe",
    source: SOURCE.PUPPET_MASTERS_THEATRE,
    pos: {
      x: -2392,
      y: -46
    }
  },
  {
    id: 1554,
    name: "Performer’s Hat",
    source: SOURCE.PUPPET_MASTERS_THEATRE,
    pos: {
      x: -2438,
      y: -46
    }
  },
  {
    id: 1555,
    name: "Corruption Tether",
    source: SOURCE.THE_SHATTERS,
    pos: {
      x: -2484,
      y: -46
    }
  },
  {
    id: 1556,
    name: "Theurgy Wand",
    source: SOURCE.ORYX_CASTLE,
    pos: {
      x: -2484,
      y: -46
    }
  },
  {
    id: 1557,
    name: "Ceremonial Merlot",
    source: SOURCE.ORYXS_CHAMBER,
    pos: {
      x: -2530,
      y: -46
    }
  },
  {
    id: 1558,
    name: "Anointed Robe",
    source: SOURCE.ORYX_CASTLE,
    pos: {
      x: -2576,
      y: -46
    }
  },
  {
    id: 1559,
    name: "Ring of Pagan Favor",
    source: SOURCE.ORYX_CASTLE,
    pos: {
      x: -2622,
      y: -46
    }
  },
  {
    id: 1560,
    name: "Bergenia Bow",
    source: SOURCE.WOODLAND_LABYRINTH,
    pos: {
      x: -2668,
      y: -46
    }
  },
  {
    id: 1561,
    name: "Lifebringing Lotus",
    source: SOURCE.MAGIC_WOODS,
    pos: {
      x: -2714,
      y: -46
    }
  },
  {
    id: 1562,
    name: "Hollyhock Hide",
    source: SOURCE.WOODLAND_LABYRINTH,
    pos: {
      x: -2760,
      y: -46
    }
  },
  {
    id: 1563,
    name: "Chrysanthemum Corsage",
    source: SOURCE.WOODLAND_LABYRINTH,
    pos: {
      x: -2806,
      y: -46
    }
  },
  {
    id: 1564,
    name: "Swashbuckler’s Sickle",
    source: SOURCE.DAVY_JONES_LOCKER,
    pos: {
      x: -2852,
      y: -46
    }
  },
  {
    id: 1565,
    name: "Tricorne of the High Seas",
    source: SOURCE.DEADWATER_DOCKS,
    pos: {
      x: -2898,
      y: -46
    }
  },
  {
    id: 1566,
    name: "Naval Uniform",
    source: SOURCE.DEADWATER_DOCKS,
    pos: {
      x: -2944,
      y: -46
    }
  },
  {
    id: 1567,
    name: "First Mate's Hook",
    source: SOURCE.DEADWATER_DOCKS,
    pos: {
      x: -2990,
      y: -46
    }
  },
  {
    id: 1568,
    name: "Shendyt of Geb",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      x: -3036,
      y: -46
    }
  },
  {
    id: 1569,
    name: "Geb's Ring of Wisdom",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      x: -3082,
      y: -46
    }
  },
  {
    id: 1570,
    name: "Book of Geb",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      x: -3128,
      y: -46
    }
  },
  {
    id: 1571,
    name: "Wand of Geb",
    source: SOURCE.TOMB_OF_THE_ANCIENTS,
    pos: {
      x: -3174,
      y: -46
    }
  },
  {
    id: 1572,
    name: "Soulless Robe",
    source: SOURCE.REALM,
    pos: {
      x: -3220,
      y: -46
    }
  },
  {
    id: 1573,
    name: "Ring of the Covetous Heart",
    source: SOURCE.REALM,
    pos: {
      x: -3266,
      y: -46
    }
  },
  {
    id: 1574,
    name: "Soul of the Bearer",
    source: SOURCE.REALM,
    pos: {
      x: -3312,
      y: -46
    }
  },
  {
    id: 1575,
    name: "The Phylactery",
    source: SOURCE.REALM,
    pos: {
      x: -3358,
      y: -46
    }
  },
  {
    id: 1576,
    name: "Pixie-Enchanted Sword",
    source: SOURCE.CANDYLAND_HUNTING_GROUNDS,
    pos: {
      x: -3404,
      y: -46
    }
  },
  {
    id: 1577,
    name: "Seal of the Enchanted Forest",
    source: SOURCE.CANDYLAND_HUNTING_GROUNDS,
    pos: {
      x: -3450,
      y: -46
    }
  },
  {
    id: 1578,
    name: "Fairy Plate",
    source: SOURCE.CANDYLAND_HUNTING_GROUNDS,
    pos: {
      x: -3496,
      y: -46
    }
  },
  {
    id: 1579,
    name: "Ring of Pure Wishes",
    source: SOURCE.CANDYLAND_HUNTING_GROUNDS,
    pos: {
      x: -3542,
      y: -46
    }
  },
  {
    id: 1580,
    name: "Etherite Dagger",
    source: SOURCE.HAUNTED_CEMETERY,
    pos: {
      x: -3588,
      y: -46
    }
  },
  {
    id: 1581,
    name: "Mantle of Skuld",
    source: SOURCE.HAUNTED_CEMETERY,
    pos: {
      x: -3634,
      y: -46
    }
  },
  {
    id: 1582,
    name: "Ghastly Drape",
    source: SOURCE.HAUNTED_CEMETERY,
    pos: {
      x: -3680,
      y: -46
    }
  },
  {
    id: 1583,
    name: "Spectral Ring of Horrors",
    source: SOURCE.HAUNTED_CEMETERY,
    pos: {
      x: -3726,
      y: -46
    }
  },
  {
    id: 1584,
    name: "Corruption Tether",
    source: SOURCE.THE_SHATTERS,
    pos: {
      x: -3772,
      y: -46
    }
  },
  {
    id: 1585,
    name: "Ancient Eminence",
    source: SOURCE.THE_SHATTERS,
    pos: {
      x: -3818,
      y: -46
    }
  },
  {
    id: 1586,
    name: "Twilight Shroud",
    source: SOURCE.THE_SHATTERS,
    pos: {
      x: -3864,
      y: -46
    }
  },
  {
    id: 1587,
    name: "Defiled Equilibrium",
    source: SOURCE.THE_SHATTERS,
    pos: {
      x: -3910,
      y: -46
    }
  },
  {
    id: 1588,
    name: "Indomptable",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      x: -3956,
      y: -46
    }
  },
  {
    id: 1589,
    name: "Helm of Draconic Dominance",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      x: -4002,
      y: -46
    }
  },
  {
    id: 1590,
    name: "Zaarvox's Heart",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      x: -4048,
      y: -46
    }
  },
  {
    id: 1591,
    name: "Amulet of Drakefyre",
    source: SOURCE.LAIR_OF_DRACONIS,
    pos: {
      x: -4094,
      y: -46
    }
  },
  {
    id: 1592,
    name: "Edictum Praetoris",
    source: SOURCE.UNDEAD_LAIR,
    pos: {
      x: -4140,
      y: -46
    }
  },
  {
    id: 1593,
    name: "Memento Mori",
    source: SOURCE.HEROIC_UNDEAD_LAIR,
    pos: {
      x: -4186,
      y: -46
    }
  },
  {
    id: 1594,
    name: "Toga Picta",
    source: SOURCE.UNDEAD_LAIR,
    pos: {
      x: -4232,
      y: -46
    }
  },
  {
    id: 1595,
    name: "Interregnum",
    source: SOURCE.REALM,
    pos: {
      x: -4278,
      y: -46
    }
  },
  {
    id: 1596,
    name: "Squaroid Staff",
    source: SOURCE.THE_THIRD_DIMENSION,
    pos: {
      x: -4324,
      y: -46
    }
  },
  {
    id: 1597,
    name: "Cubic Frame",
    source: SOURCE.THE_THIRD_DIMENSION,
    pos: {
      x: -4370,
      y: -46
    }
  },
  {
    id: 1598,
    name: "Polygonal Garbs",
    source: SOURCE.THE_THIRD_DIMENSION,
    pos: {
      x: -4416,
      y: -46
    }
  },
  {
    id: 1599,
    name: "Cuband",
    source: SOURCE.SPRITE_WORLD,
    pos: {
      x: -4462,
      y: -46
    }
  },
  {
    id: 1600,
    name: "Dalvar's Battle Axe",
    source: SOURCE.ICE_CAVE,
    pos: {
      x: -4508,
      y: -46
    }
  },
  {
    id: 1601,
    name: "Sunken Buckler",
    source: SOURCE.ICE_CAVE,
    pos: {
      x: -4554,
      y: -46
    }
  },
  {
    id: 1602,
    name: "Chainmail Body Armor",
    source: SOURCE.ICE_CAVE,
    pos: {
      x: -4600,
      y: -46
    }
  },
  {
    id: 1603,
    name: "Gjallarhorn",
    source: SOURCE.ICE_CAVE,
    pos: {
      x: -4646,
      y: -46
    }
  },
  {
    id: 1604,
    name: "C.L.A.W.",
    source: SOURCE.HIGH_TECH_TERROR,
    pos: {
      x: -4692,
      y: -46
    }
  },
  {
    id: 1605,
    name: "B.O.O.M.",
    source: SOURCE.HIGH_TECH_TERROR,
    pos: {
      x: -4738,
      y: -46
    }
  },
  {
    id: 1606,
    name: "A.R.M.O.R.",
    source: SOURCE.HIGH_TECH_TERROR,
    pos: {
      x: -4784,
      y: -46
    }
  },
  {
    id: 1607,
    name: "C.O.N.T.R.O.L.L.E.R.",
    source: SOURCE.MAD_LAB,
    pos: {
      x: -4830,
      y: -46
    }
  },
  {
    id: 1608,
    name: "Fallen One’s Blade",
    source: SOURCE.THE_NEST,
    pos: {
      x: -4876,
      y: -46
    }
  },
  {
    id: 1609,
    name: "Abyssal Insignia",
    source: SOURCE.THE_SHATTERS,
    pos: {
      x: -4922,
      y: -46
    }
  },
  {
    id: 1610,
    name: "Vortex Plating",
    source: SOURCE.ICE_CAVE,
    pos: {
      x: -4968,
      y: -46
    }
  },
  {
    id: 1611,
    name: "Eye of the Void",
    source: SOURCE.REALM,
    pos: {
      x: -5014,
      y: -46
    }
  },
  {
    id: 1612,
    name: "Archangel's Judgement",
    source: SOURCE.THE_SHATTERS,
    pos: {
      x: -5060,
      y: -46
    }
  },
  {
    id: 1613,
    name: "Daevite Progenitor",
    source: SOURCE.FUNGAL_CAVERN,
    pos: {
      x: -5106,
      y: -46
    }
  },
  {
    id: 1614,
    name: "Seraphim's Guard",
    source: SOURCE.OCEAN_TRENCH,
    pos: {
      x: -5152,
      y: -46
    }
  },
  {
    id: 1615,
    name: "Flames of Genesis",
    source: SOURCE.REALM,
    pos: {
      x: -5198,
      y: -46
    }
  },
  {
    id: 1616,
    name: "Symbiotic Ripper",
    source: SOURCE.THE_CRAWLING_DEPTHS,
    pos: {
      x: -5244,
      y: -46
    }
  },
  {
    id: 1617,
    name: "Parasitic Concoction",
    source: SOURCE.PARASITE_CHAMBERS,
    pos: {
      x: -5290,
      y: -46
    }
  },
  {
    id: 1618,
    name: "Rags of the Host",
    source: SOURCE.PARASITE_CHAMBERS,
    pos: {
      x: -5336,
      y: -46
    }
  },
  {
    id: 1619,
    name: "Hivemind Circlet",
    source: SOURCE.PARASITE_CHAMBERS,
    pos: {
      x: -5382,
      y: -46
    }
  },
  {
    id: 1620,
    name: "Kazekiri",
    source: SOURCE.MOUNTAIN_TEMPLE,
    pos: {
      x: -5428,
      y: -46
    }
  },
  {
    id: 1621,
    name: "Kamishimo",
    source: SOURCE.MOUNTAIN_TEMPLE,
    pos: {
      x: -5474,
      y: -46
    }
  },
  {
    id: 1622,
    name: "Akuma's Tear",
    source: SOURCE.MOUNTAIN_TEMPLE,
    pos: {
      x: -5520,
      y: -46
    }
  },
  {
    id: 1623,
    name: "Ryu's Blade",
    source: SOURCE.MOUNTAIN_TEMPLE,
    pos: {
      x: -5566,
      y: -46
    }
  },
  {
    id: 1624,
    name: "Mercy's Bane",
    source: SOURCE.WINE_CELLAR,
    pos: {
      x: -5612,
      y: -46
    }
  },
  {
    id: 1625,
    name: "Bloodstone Ring",
    source: SOURCE.WINE_CELLAR,
    pos: {
      x: -5658,
      y: -46
    }
  },
  {
    id: 1626,
    name: "Champion's Bastion",
    source: SOURCE.WINE_CELLAR,
    pos: {
      x: -5704,
      y: -46
    }
  },
  {
    id: 1627,
    name: "Oryx's Greatsword",
    source: SOURCE.WINE_CELLAR,
    pos: {
      x: -5750,
      y: -46
    }
  },
  {
    id: 1628,
    name: "Gravekeeper’s Scythe",
    source: SOURCE.EVENT,
    pos: {
      x: -5796,
      y: -46
    }
  },
  {
    id: 1629,
    name: "Hooded Skull",
    source: SOURCE.EVENT,
    pos: {
      x: -5842,
      y: -46
    }
  },
  {
    id: 1630,
    name: "Executioner’s Garb",
    source: SOURCE.EVENT,
    pos: {
      x: -5888,
      y: -46
    }
  },
  {
    id: 1631,
    name: "Grim Goblet",
    source: SOURCE.EVENT,
    pos: {
      x: -5934,
      y: -46
    }
  }
];
