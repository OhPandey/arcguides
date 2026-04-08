import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const skillUpBundles: Bundle[] = [
    {
        name: "Skill Up Booster Bundle",
        image: "skill_up_booster.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 15
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 7
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 40
            },
            {
                resource: Resources.SPEEDUP,
                amount: 500
            },
            {
                resource: Resources.FOOD,
                amount: 1000*350
            },
            {
                resource: Resources.WOOD,
                amount: 1000*350
            },
            {
                resource: Resources.STONE,
                amount: 1000*350
            },
            {
                resource: Resources.GOLD,
                amount: 500*350
            },
            {
                resource: Resources.VIPPOINT,
                amount: 2000
            }
        ]
    },
    {
        name: "Limited Skill Up Boost Bundle",
        image: "limited_skill_up_boost.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 20
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 10
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 40
            },
            {
                resource: Resources.SPEEDUP,
                amount: 500
            },
            {
                resource: Resources.FOOD,
                amount: 1000*350
            },
            {
                resource: Resources.WOOD,
                amount: 1000*350
            },
            {
                resource: Resources.STONE,
                amount: 1000*350
            },
            {
                resource: Resources.GOLD,
                amount: 500*350
            },
            {
                resource: Resources.VIPPOINT,
                amount: 500
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV2,
                amount: 1
            }
        ]
    },
    {
        name: "Legendary Skill Up Special Bundle",
        image: "legendary_skill_up_special.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 7
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 1
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 70
            },
            {
                resource: Resources.FOOD,
                amount: 1000*350
            },
            {
                resource: Resources.WOOD,
                amount: 1000*350
            },
            {
                resource: Resources.STONE,
                amount: 1000*350
            },
            {
                resource: Resources.GOLD,
                amount: 500*350
            },
            {
                resource: Resources.VIPPOINT,
                amount: 500
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV2,
                amount: 1
            }
        ]
    }
]