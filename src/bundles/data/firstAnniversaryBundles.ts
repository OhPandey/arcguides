import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const firstAnniversaryBundles: Bundle[] = [
    {
        name: "First Anniversary: Festival I",
        image: "first_anniversary_festival.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2100
            },
            {
                resource: Resources.TAG("Reminiscent Pages"),
                amount: 1
            },
            {
                resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST,
                amount: 200
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 5
            },
            {
                resource: Resources.GOLD,
                amount: 5000*5000
            },
            {
                resource: Resources.FOOD,
                amount: 1000*1400
            },
            {
                resource: Resources.WOOD,
                amount: 1000*1400
            },
            {
                resource: Resources.STONE,
                amount: 1000*1400
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
        name: "First Anniversary: Festival II",
        image: "first_anniversary_festival.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST,
                amount: 500
            },
            {
                resource: Resources.PURIFIED_ESSENCE,
                amount: 150
            },
            {
                resource: Resources.GOLD,
                amount: 5000*15000
            },
            {
                resource: Resources.FOOD,
                amount: 1000*3500
            },
            {
                resource: Resources.WOOD,
                amount: 1000*3500
            },
            {
                resource: Resources.STONE,
                amount: 1000*3500
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
        name: "First Anniversary: Frame",
        image: "first_anniversary_festival.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.FRAME("1st Anniversairy: Glow"),
                amount: 1
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
        name: "First Anniversary: Portrait",
        image: "first_anniversary_portrait.png",
        priceUSD: 2.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 300
            },
            {
                resource: Resources.PORTRAIT("Chibi Aang"),
                amount: 1
            },
            {
                resource: Resources.FOOD,
                amount: 1000*200
            },
            {
                resource: Resources.WOOD,
                amount: 1000*200
            },
            {
                resource: Resources.STONE,
                amount: 1000*200
            },
            {
                resource: Resources.GOLD,
                amount: 500*200
            },
            {
                resource: Resources.VIPPOINT,
                amount: 300
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV1,
                amount: 1
            }
        ]
    },
]