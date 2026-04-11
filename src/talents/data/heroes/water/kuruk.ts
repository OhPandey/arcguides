import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const kurukTree = createHero({
    iconImage: "images/heros/kuruk_icon.png",
    title: "Kuruk - Spirit-Hunter",
    rarity: HeroRarity.Legendary,
    categories: [HeroCategory.Hunt, HeroCategory.Water, HeroCategory.Avatar],
})