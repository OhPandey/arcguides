import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const kingBumiTree = createHero({
    iconImage: "/images/kingBumi_icon.png",
    title: "King Bumi - King of Omashut",
    rarity: HeroRarity.Legendary,
    categories: [HeroCategory.Garrison, HeroCategory.Earth, HeroCategory.Skill],
})