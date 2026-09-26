import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const kelsangTree = createHero({
    iconImage: "images/heroes/kelsang_icon.png",
    title: "Kelsang - The Living Typhoon",
    rarity: HeroRarity.Legendary,
    categories: [HeroCategory.Hunt, HeroCategory.Air, HeroCategory.Attack],
})