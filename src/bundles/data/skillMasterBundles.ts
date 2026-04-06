import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const skillMasterBundles: Bundle[] = [
    {
        name: "Legendary Skill Master Bundle I",
        image: "legendary_skill_master.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2100
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 70
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 15
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 1000
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_RARE,
                amount: 200
            },
            {
                resource: Resources.VIPPOINT,
                amount: 2000
            }
        ]
    },
    {
        name: "Legendary Skill Master Bundle II",
        image: "legendary_skill_master.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 175
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 35
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 2500
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_RARE,
                amount: 200
            },
            {
                resource: Resources.VIPPOINT,
                amount: 5000
            }
        ]
    }
]