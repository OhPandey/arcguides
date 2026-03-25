import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const kataraTree = createHero({
    iconImage: "/images/katara_icon.png",
    title: "Katara - Waterbending Master",
    rarity: HeroRarity.Rare,
    categories: [HeroCategory.Hunt, HeroCategory.Water, HeroCategory.Support],
})