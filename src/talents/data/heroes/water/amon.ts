import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const amonTree = createHero({
    iconImage: "/images/amon_icon.png",
    title: "Amon - Equalists' Leader",
    rarity: HeroRarity.Legendary,
    categories: [HeroCategory.Siege, HeroCategory.Water, HeroCategory.Attack],
})