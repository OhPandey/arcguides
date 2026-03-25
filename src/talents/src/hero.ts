import { starting } from "../data/categories/starting";
import { HeroCategory, HeroRarity, HeroTree } from "../headers/hero";
import { TalentNode } from "../headers/talent";
import { getBackground } from "../data/background";
import { categoryMapping } from "../data/category";

export const MAXPOINTS = 89

export function buildTalents(categories: HeroCategory[]): TalentNode[] {
    return [
        ...starting.layout,
        ...categories.flatMap(c => categoryMapping[c]?.layout ?? [])
    ]
}

export function createHero(config: { iconImage: string, title: string, rarity: HeroRarity, categories: HeroCategory[]}): HeroTree {
  return {
    ...config,
    backgroundImage: getBackground(config.categories),
    layout: buildTalents(config.categories)
  }
}

export function getHeroStar(talentPoints: number): string {
    const pointsPerStar = [14, 29, 44, 59, 74, MAXPOINTS]
    let stars = 0

    for (let i = 0; i < pointsPerStar.length; i++) {
        if (talentPoints >= pointsPerStar[i])
            stars = i + 1  
        else
            break
    }

    return ((stars > 0) ? "Required Stars: " :"")+"⭐".repeat(stars) 
}
