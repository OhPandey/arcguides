import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const korraEqTree = createHero({
    iconImage: "images/heroes/korraeq_icon.png",
    title: "Korra - Disguised Equalist",
    rarity: HeroRarity.Legendary,
    categories: [HeroCategory.Siege, HeroCategory.Water, HeroCategory.Mobility],
})