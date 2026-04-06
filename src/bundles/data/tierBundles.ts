import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const tierBundles: Bundle[] = [
    {
        name: "Tier 4 Research Bundle",
        image: "t4.png",
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
            },
        ]
    },
    {
        name: "Tier 4 Recruitment Bundle",
        image: "t4.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 600*60+3600*5
            },
            {
                resource: Resources.FOOD,
                amount: 10000*3750
            },
            {
                resource: Resources.WOOD,
                amount: 10000*1500
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
            },
        ]
    },
    {
        name: "Tier 5 Research Bundle",
        image: "t5.png",
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
            },
        ]
    },
    {
        name: "Tier 5 Recruitment Bundle",
        image: "t5.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 600*60+3600*5
            },
            {
                resource: Resources.FOOD,
                amount: 10000*3750
            },
            {
                resource: Resources.WOOD,
                amount: 10000*1500
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
            },
        ]
    }
]