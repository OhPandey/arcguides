import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const gearBundles: Bundle[] = [
    {
        name: "Legendary Hero Gear Mastery Bundle",
        image: "legendary_hero_gear_mastery.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.VERDANT_SPLINTER,
                amount: 4000
            },
            {
                resource: Resources.PURIFIED_ESSENCE,
                amount: 40
            },
            {
                resource: Resources.FORGE_COIN,
                amount: 4000
            },
            {
                resource: Resources.GOLD,
                amount: 500*3000
            },
            {
                resource: Resources.VIPPOINT,
                amount: 500
            }
        ]
    },
    {
        name: "Legendary Hero Gear Mastery Bundle I",
        image: "legendary_hero_gear_mastery.png",
        priceUSD: 9.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 1050
            },
            {
                resource: Resources.VERDANT_SPLINTER,
                amount: 8000
            },
            {
                resource: Resources.PURIFIED_ESSENCE,
                amount: 90
            },
            {
                resource: Resources.GOLD,
                amount: 500*6000
            },
            {
                resource: Resources.VIPPOINT,
                amount: 1000
            }
        ]
    },
    {
        name: "Legendary Hero Gear Mastery Bundle II",
        image: "legendary_hero_gear_mastery.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.VERDANT_SPLINTER,
                amount: 40000
            },
            {
                resource: Resources.PURIFIED_ESSENCE,
                amount: 450
            },
            {
                resource: Resources.GOLD,
                amount: 500*37500
            },
            {
                resource: Resources.VIPPOINT,
                amount: 5000
            }
        ]
    },
    {
        name: "Hero Gear Enhancement Special Bundle",
        image: "hero_gear_enhancement_special.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.VERDANT_SPLINTER,
                amount: 3500
            },
            {
                resource: Resources.PURIFIED_ESSENCE,
                amount: 35
            },
            {
                resource: Resources.GOLD,
                amount: 500*700
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
        name: "Hero Gear Special Bundle",
        image: "hero_gear_special.png",
        priceUSD: 9.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 1050
            },
            {
                resource: Resources.GEAR_CUSTOM_CHEST_LEGENDARY,
                amount: 1
            },
            {
                resource: Resources.VERDANT_SPLINTER,
                amount: 2500
            },
            {
                resource: Resources.PURIFIED_ESSENCE,
                amount: 30
            },
            {
                resource: Resources.GOLD,
                amount: 500*1400
            },
            {
                resource: Resources.FOOD,
                amount: 1000*700
            },
            {
                resource: Resources.WOOD,
                amount: 1000*700
            },
            {
                resource: Resources.STONE,
                amount: 1000*700
            },
            {
                resource: Resources.VIPPOINT,
                amount: 1000
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV3,
                amount: 1
            }
        ]
    }
]