import { HeroCategory } from "../headers/hero"

export const categoryBackgrounds: Partial<Record<HeroCategory, string>> = {
  [HeroCategory.Fire]: "/arcguides/images/fire_tree_bg.png",
  [HeroCategory.Water]: "/arcguides/images/water_tree_bg.png",
  [HeroCategory.Earth]: "/arcguides/images/earth_tree_bg.png",
  [HeroCategory.Air]: "/arcguides/images/air_tree_bg.png",
}

export function getBackground(categories: HeroCategory[]): string {
  const match = categories.find(cat => categoryBackgrounds[cat])
  return match ? categoryBackgrounds[match]! : "/arcguides/images/water_tree_bg.png"
}