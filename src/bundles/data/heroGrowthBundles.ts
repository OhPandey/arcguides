import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const heroGrowthBundles: Bundle[] = [
    {
        name: "Legendary Hero Growth Bundle I",
        image: "legendary_hero_growth.png",
        priceUSD: 9.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 1050
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 35
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 25
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 80
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_RARE,
                amount: 20
            },
            {
                resource: Resources.VIPPOINT,
                amount: 1000
            }
        ]
    },
    {
        name: "Legendary Hero Growth Bundle II",
        image: "legendary_hero_growth.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2100
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 60
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 50
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 160
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_RARE,
                amount: 40
            },
            {
                resource: Resources.VIPPOINT,
                amount: 2000
            }
        ]
    },
    {
        name: "Legendary Hero Growth Bundle III",
        image: "legendary_hero_growth.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 125
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 125
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 400
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_RARE,
                amount: 100
            },
            {
                resource: Resources.VIPPOINT,
                amount: 5000
            }
        ]
    }
]