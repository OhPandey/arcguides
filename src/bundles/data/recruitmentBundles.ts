import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const recruitmentBundles: Bundle[] = [
    {
        name: "Recruitment Special Bundle",
        image: "recruitment_special.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*20+5*170
            },
            {
                resource: Resources.FOOD,
                amount: 1000*1100
            },
            {
                resource: Resources.WOOD,
                amount: 1000*1100
            },
            {
                resource: Resources.STONE,
                amount: 1000*1100
            },
            {
                resource: Resources.GOLD,
                amount: 500*1100
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
        name: "Hero Recruitement Bundle",
        image: "hero_recruitement.png",
        priceUSD: 1.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 200
            },
            {
                resource: Resources.GOLDEN_SCROLL,
                amount: 10
            },
            {
                resource: Resources.SILVER_SCROLL,
                amount: 10
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 5
            },
            {
                resource: Resources.VIPPOINT,
                amount: 200
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV1,
                amount: 1
            }
        ]
    }
]