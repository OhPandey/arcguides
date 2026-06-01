import { Resource } from "../bundles/type/bundle";

export const GEM: Resource = {
  name: "Gem",
  gemValue: 1
};

export const VIPPOINT: Resource = {
  name: "VIP Point",
  gemValue: 1
};

export const FOOD: Resource = {
  name: "Food",
  gemValue: 0.001
};

export const WOOD: Resource = {
  name: "Wood",
  gemValue: 0.001
};

export const STONE: Resource = {
  name: "Stone",
  gemValue: 0.001
};

export const GOLD: Resource = {
  name: "Gold",
  gemValue: 0.002
};

export const SPIRIT_SHARD_RARE: Resource = {
  name: "Rare Spirit Shard",
  gemValue: 50
};

export const SPIRIT_SHARD_EPIC: Resource = {
  name: "Epic Spirit Shard",
  gemValue: 250
};

export const SPIRIT_SHARD_LEGENDARY: Resource = {
  name: "Legendary Spirit Shard",
  gemValue: 1000
};

export const SPIRIT_BADGE_RARE: Resource = {
  name: "Rare Spirit Badge",
  gemValue: 40
};

export const SPIRIT_BADGE_EPIC: Resource = {
  name: "Epic Spirit Badge",
  gemValue: 250
};

export const SPIRIT_BADGE_LEGENDARY: Resource = {
  name: "Legendary Spirit Badge",
  gemValue: 700
};

export const BOOK_OF_EXPERIENCE_UNCOMMON: Resource = {
  name: "Book of Experience (250 Experience)",
  gemValue: 1.25
};

export const BOOK_OF_EXPERIENCE_COMMON: Resource = {
  name: "Book of Experience (500 Experience)",
  gemValue: 2.5
};

export const BOOK_OF_EXPERIENCE_RARE: Resource = {
  name: "Book of Experience (1,000 Experience)",
  gemValue: 5
};

export const BOOK_OF_EXPERIENCE_EPIC: Resource = {
  name: "Book of Experience (5,000 Experience)",
  gemValue: 25
};

export const SPEEDUP: Resource = {
  name: "Speedup",
  gemValue: 1
};

export const SILVER_SCROLL: Resource = {
  name: "Silver Scroll",
  gemValue: 100
};

export const GOLDEN_SCROLL: Resource = {
  name: "Golden Scroll",
  gemValue: 500
};

export const POWER_BOOST_RARE: Resource = {
  name: "ATK/DEF Boost (8h)",
  gemValue: 150
};

export const POWER_BOOST_EPIC: Resource = {
  name: "ATK/DEF Boost (1d)",
  gemValue: 250
};

export const GATHERING_BOOST_RARE: Resource = {
  name: "Gathering Boost (8h)",
  gemValue: 150
};

export const GATHERING_BOOST_EPIC: Resource = {
  name: "Gathering Boost (1d)",
  gemValue: 250
};

export const RESOURCE_BOOST_RARE: Resource = {
  name: "Resource Boost (8h)",
  gemValue: 150
};

export const RESOURCE_BOOST_EPIC: Resource = {
  name: "Resource Boost (1d)",
  gemValue: 250
};

export const CITY_RELOCATION_COMMON: Resource = {
  name: "Random City Relocation",
  gemValue: 200
};

export const CITY_RELOCATION_RARE: Resource = {
  name: "Teritorial City Relocation",
  gemValue: 400
};

export const CITY_RELOCATION_EPIC: Resource = {
  name: "City Relocation",
  gemValue: 800
};

export const CITY_SHIELD_RARE_8H: Resource = {
  name: "Rare City Shield (8h)",
  gemValue: 250
};

export const CITY_SHIELD_RARE_12H: Resource = {
  name: "Rare City Shield (12h)",
  gemValue: 350
};

export const CITY_SHIELD_EPIC_1D: Resource = {
  name: "Epic City Shield (1d)",
  gemValue: 500
};

export const CITY_SHIELD_LEGENDARY_3D: Resource = {
  name: "Legendary City Shield (3d)",
  gemValue: 1200
};

export const CITY_SHIELD_LEGENDARY_7D: Resource = {
  name: "Legendary City Shield (7d)",
  gemValue: 2500
};

export const SQUAD_EXPANSION_EPIC: Resource = {
  name: "Squad Expansion (25%)",
  gemValue: 1000
};

export const SQUAD_EXPANSION_LEGENDARY: Resource = {
  name: "Squad Expansion (50%)",
  gemValue: 1000
};

export const AP: Resource = {
  name: "AP",
  gemValue: 1/3
};

export const AIRSHIP_REORGANIZER: Resource = {
  name: "Airship Reorganizer",
  gemValue: 100
};

export const RESET_TALENT: Resource = {
  name: "Reset Talents",
  gemValue: 500
};

export const CHANGE_BENDING_ART: Resource = {
  name: "Change Bending Art",
  gemValue: 10000
};

export const MYSTIC_ORB: Resource = {
  name: "Mystic Orb",
  gemValue: 500
};

export const FORGE_COIN: Resource = {
  name: "Forge Coin",
  gemValue: 1/3
};

export const PURIFIED_ESSENCE: Resource = {
  name: "Purified Essence",
  gemValue: 400/7
};

export const VERDANT_SPLINTER: Resource = {
  name: "Verdant Splinter",
  gemValue: 5/7
};

export const GEAR_MATERIAL_CHEST: Resource = {
  name: "Gear Material Chest",
  gemValue: PURIFIED_ESSENCE.gemValue+125*VERDANT_SPLINTER.gemValue
};

export const GEAR_MATERIAL_CUSTOM_CHEST: Resource = {
  name: "Gear Material Custom Chest",
  gemValue: (PURIFIED_ESSENCE.gemValue+100*VERDANT_SPLINTER.gemValue)/2
};

export const GEAR_CUSTOM_CHEST_EPIC: Resource = {
  name: "Epic Gear Custom Chest",
  gemValue: FORGE_COIN.gemValue*15000
};

export const GEAR_CUSTOM_CHEST_LEGENDARY: Resource = {
  name: "Legendary Gear Custom Chest",
  gemValue: FORGE_COIN.gemValue*50000
};

export const GEAR_CUSTOM_CHEST_LEGENDARY_GEN2: Resource = {
  name: "Legendary Gear Custom Chest",
  gemValue: FORGE_COIN.gemValue*50000 //Placeholder, need more data
};

export const SACRED_DEW: Resource = {
  name: "Scared Dew",
  gemValue: 50
};

export const SACRED_GLYPH: Resource = {
  name: "Scared Glyph",
  gemValue: 150
};

export const SACRED_FRUIT: Resource = {
  name: "Scared Fruit",
  gemValue: 50
};

export const COMPANION_MATERIAL_CUSTOM_CHEST: Resource = {
  name: "Companion Material Custom Chest",
  gemValue: 150
};

export const LUCKY_TICKET: Resource = {
  name: "Lucky Ticket",
  gemValue: 400
};

export const LUCKY_DICE: Resource = {
  name: "Lucky Dice",
  gemValue: 500 // The Paths of Fate puts the the Lucky Dice at the same level as Golden Scroll and Mystic Ore which both are 500 Gem
};

export const SEAL_OF_SOLIDARITY: Resource = {
  name: "Seal of Solidarity",
  gemValue: 10
};

export const LOTUS_TILE: Resource = {
  name: "Lotus Tile",
  gemValue: 67.9
};

export const FRAME = (variant?: string): Resource => ({
  name: variant ? `"${variant}" Frame Skin`: "Frame Skin",
  gemValue: LOTUS_TILE.gemValue*20000
})

export const TOWNHALL = (variant?: string): Resource => ({
  name: variant ? `"${variant}" Town Hall Skin`: "Town Hall Skin",
  gemValue: LOTUS_TILE.gemValue*20000
})

export const TAG = (variant?: string): Resource => ({
  name: variant ? `"${variant}" Name Tag`: "Name Tag",
  gemValue: FRAME().gemValue // Should have the same value as Frame. They give similar buffs
})

export const PORTRAIT = (variant?: string): Resource => ({
  name: variant ? `"${variant}" Portrait`: "Portrait",
  gemValue:  0 // Portrait has new real value, just looks cool
})

export const BUNDLE_SUPPLY_CHEST_LV1: Resource = {
  name: "Level 1 Bundle Supply Chest",
  gemValue: 2.73
};

export const BUNDLE_SUPPLY_CHEST_LV2: Resource = {
  name: "Level 2 Bundle Supply Chest",
  gemValue: 11.725
};

export const BUNDLE_SUPPLY_CHEST_LV3: Resource = {
  name: "Level 3 Bundle Supply Chest",
  gemValue: 24.7
};

export const BUNDLE_SUPPLY_CHEST_LV4: Resource = {
  name: "Level 4 Bundle Supply Chest",
  gemValue: 51.9
};

export const BUNDLE_SUPPLY_CHEST_LV5: Resource = {
  name: "Level 5 Bundle Supply Chest",
  gemValue: 124.75
};

export const BUNDLE_SUPPLY_CHEST_LV6: Resource = {
  name: "Level 5 Bundle Supply Chest",
  gemValue: 254.25
};

export const CUSTOM_RESOURCE_CHEST_LV2: Resource = {
  name: "Lv.2 Custom Resource Chest",
  gemValue: FOOD.gemValue*10000
};

export const CUSTOM_RESOURCE_CHEST_LV3: Resource = {
  name: "Lv.3 Custom Resource Chest",
  gemValue: FOOD.gemValue*50000
};

export const CUSTOM_RESOURCE_CHEST_LV4: Resource = {
  name: "Lv.4 Custom Resource Chest",
  gemValue: FOOD.gemValue*150000
};

export const CUSTOM_RESOURCE_CHEST_LV5: Resource = {
  name: "Lv.6 Custom Resource Chest",
  gemValue: FOOD.gemValue*750000
};

export const CUSTOM_RESOURCE_CHEST_LV6: Resource = {
  name: "Lv.6 Custom Resource Chest",
  gemValue: FOOD.gemValue*1500000
};

export const CUSTOM_RESOURCE_CHEST_LV7: Resource = {
  name: "Lv.7 Custom Resource Chest",
  gemValue: FOOD.gemValue*5000000
};

export const SPECIAL_SUPPLY_BOX: Resource = {
  name: "Special Supply Box (1st Anniversary)",
  gemValue: 20 // Average reward

}

export const EPIC_DECO: Resource = {
  name: "Epic Deco",
  gemValue: 0  // has no value
}

export const COIN_OF_HARMONY: Resource = {
  name: "Coin of Harmony",
  gemValue: 41 // Average net worth (not weighted)
}

export const AVATAR_COOKIE: Resource = {
  name: "Avatar Cookie",
  gemValue: 41 // Average net worth (not weighted)
}

export const ANIMA_CRYSTAL: Resource = {
  name: "Anima Crystal",
  gemValue: 40
}