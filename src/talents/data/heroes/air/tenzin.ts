import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const tenzinTree = createHero({
    iconImage: "/images/tenzin_icon.png",
    title: "Tenzin - Spiritual Mentor",
    rarity: HeroRarity.Epic,
    categories: [HeroCategory.Garrison, HeroCategory.Air, HeroCategory.Defense],
})