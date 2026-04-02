import { attack } from "./categories/attack"
import { water } from "./categories/water"
import { siege } from "./categories/siege"
import { versatile } from "./categories/versatile"
import { avatar } from "./categories/avatar"
import { gathering } from "./categories/gathering"
import { support } from "./categories/support"
import { hunt } from "./categories/hunt"
import { fire } from "./categories/fire"
import { garrison } from "./categories/garrison"
import { defense } from "./categories/defense"
import { earth } from "./categories/earth"
import { mobility } from "./categories/mobility"
import { skill } from "./categories/skill"
import { air } from "./categories/air"
import { HeroCategory } from "../headers/hero"
import { TalentNode } from "../headers/talent"

export const categoryMapping: Partial<Record<HeroCategory, { layout: TalentNode[] }>> = {
  [HeroCategory.Fire]: fire,
  [HeroCategory.Water]: water,
  [HeroCategory.Earth]: earth,
  [HeroCategory.Air]: air,
  [HeroCategory.Attack]: attack,
  [HeroCategory.Siege]: siege,
  [HeroCategory.Versatile]: versatile,
  [HeroCategory.Avatar]: avatar,
  [HeroCategory.Gathering]: gathering,
  [HeroCategory.Support]: support,
  [HeroCategory.Hunt]: hunt,
  [HeroCategory.Garrison]: garrison,
  [HeroCategory.Defense]: defense,
  [HeroCategory.Mobility]: mobility,
  [HeroCategory.Skill]: skill,
}

export const categoryIcons: Partial<Record<HeroCategory, string>> = {
  [HeroCategory.Fire]: "/images/icons/categories/fire.png",
  [HeroCategory.Water]: "/images/icons/categories/water.png",
  [HeroCategory.Earth]: "/images/icons/categories/earth.png",
  [HeroCategory.Air]: "/images/icons/categories/air.png",
  [HeroCategory.Attack]: "/images/icons/categories/attack.png",
  [HeroCategory.Siege]: "/images/icons/categories/siege.png",
  [HeroCategory.Versatile]: "/images/icons/categories/versatile.png",
  [HeroCategory.Avatar]: "/images/icons/categories/avatar.png",
  [HeroCategory.Gathering]: "/images/icons/categories/gathering.png",
  [HeroCategory.Support]: "/images/icons/categories/support.png",
  [HeroCategory.Hunt]: "/images/icons/categories/hunt.png",
  [HeroCategory.Garrison]: "/images/icons/categories/garrison.png",
  [HeroCategory.Defense]: "/images/icons/categories/defense.png",
  [HeroCategory.Mobility]: "/images/icons/categories/mobility.png",
  [HeroCategory.Skill]: "/images/icons/categories/skill.png",
};