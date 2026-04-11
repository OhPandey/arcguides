import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const starterBundles: Bundle[] = [
    {
        name: "Starter Bundle I",
        image: "starter.png",
        priceUSD: 1.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 200
            },
            {
                resource: Resources.GOLDEN_SCROLL,
                amount: 1
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*12+5*72
            },
            {
                resource: Resources.FOOD,
                amount: 10000*180
            },
            {
                resource: Resources.WOOD,
                amount: 10000*180
            },
            {
                resource: Resources.STONE,
                amount: 10000*180
            },
            {
                resource: Resources.GOLD,
                amount: 5000*180
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
    },
    {
        name: "Starter Bundle II",
        image: "starter.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.GOLDEN_SCROLL,
                amount: 2
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*30+5*180
            },
            {
                resource: Resources.FOOD,
                amount: 10000*450
            },
            {
                resource: Resources.WOOD,
                amount: 10000*450
            },
            {
                resource: Resources.STONE,
                amount: 10000*450
            },
            {
                resource: Resources.GOLD,
                amount: 5000*450
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
        name: "Starter Bundle IV",
        image: "starter.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2100
            },
            {
                resource: Resources.GOLDEN_SCROLL,
                amount: 8
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*120+5*720
            },
            {
                resource: Resources.FOOD,
                amount: 10000*1800
            },
            {
                resource: Resources.WOOD,
                amount: 10000*1800
            },
            {
                resource: Resources.STONE,
                amount: 10000*1800
            },
            {
                resource: Resources.GOLD,
                amount: 5000*1800
            },
            {
                resource: Resources.VIPPOINT,
                amount: 2000
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV4,
                amount: 1
            }
        ]
    },
    {
        name: "Starter Bundle V",
        image: "starter.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.GOLDEN_SCROLL,
                amount: 20
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*300+5*1800
            },
            {
                resource: Resources.FOOD,
                amount: 10000*4500
            },
            {
                resource: Resources.WOOD,
                amount: 10000*4500
            },
            {
                resource: Resources.STONE,
                amount: 10000*4500
            },
            {
                resource: Resources.GOLD,
                amount: 5000*4500
            },
            {
                resource: Resources.VIPPOINT,
                amount: 5000
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV5,
                amount: 1
            }
        ]
    },
    {
         name: "Cai's Bundle",
        image: "cai.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.FRAME("Cabbage Crew"),
                amount: 1
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 12
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 2
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


]