import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const researchBundles: Bundle[] = [
    {
        name: "Research Boost Bundle I",
        image: "research_boost.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2100
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*240+5*1440
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
        name: "Research Boost Bundle II",
        image: "research_boost.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*600+5*3600
            },
            {
                resource: Resources.FOOD,
                amount: 10000*3750
            },
            {
                resource: Resources.WOOD,
                amount: 10000*3750
            },
            {
                resource: Resources.STONE,
                amount: 10000*3750
            },
            {
                resource: Resources.GOLD,
                amount: 5000*3750
            },
            {
                resource: Resources.VIPPOINT,
                amount: 5000
            }
        ]
    },
    {
        name: "Research Boost Bundle III",
        image: "research_boost.png",
        priceUSD: 99.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 11500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*1200+5*3600
            },
            {
                resource: Resources.FOOD,
                amount: 10000*7500
            },
            {
                resource: Resources.WOOD,
                amount: 10000*7500
            },
            {
                resource: Resources.STONE,
                amount: 10000*7500
            },
            {
                resource: Resources.GOLD,
                amount: 5000*7500
            },
            {
                resource: Resources.VIPPOINT,
                amount: 10000
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