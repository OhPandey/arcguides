import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const researchBundles: Bundle[] = [
    {
        name: "Research Boost Bundle",
        image: "research_boost.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2100
            },
            {
                resource: Resources.SPEEDUP,
                amount: 240*60+1440*5
            },
            {
                resource: Resources.FOOD,
                amount: 10000*1500
            },
            {
                resource: Resources.WOOD,
                amount: 10000*1500
            },
            {
                resource: Resources.STONE,
                amount: 10000*1500
            },
            {
                resource: Resources.GOLD,
                amount: 5000*1500
            },
            {
                resource: Resources.VIPPOINT,
                amount: 2000
            }
        ]
    },
    {
        name: "Research Special Bundle",
        image: "research_special.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 20*60+170*5
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
    }
]