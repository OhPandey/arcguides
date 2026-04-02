import { HeroCategory, HeroRarity } from "@/src/talents/headers/hero";
import { createHero } from "@/src/talents/src/hero";

export const bumiTree = createHero({
    iconImage: "/images/bumi_icon.png",
    title: "Bumi - Late Bloomer",
    rarity: HeroRarity.Legendary,
    categories: [HeroCategory.Hunt, HeroCategory.Air, HeroCategory.Skill],
})