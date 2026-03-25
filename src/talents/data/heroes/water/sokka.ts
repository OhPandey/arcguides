import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const sokkaTree = createHero({
    iconImage: "/images/sokka_icon.png",
    title: "Sokka - Sarcastic Tactician",
    rarity: HeroRarity.Epic,
    categories: [HeroCategory.Siege, HeroCategory.Water, HeroCategory.Attack],
})