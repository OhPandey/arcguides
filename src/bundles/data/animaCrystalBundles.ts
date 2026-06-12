import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const animaCrystalBundles: Bundle[] = [
    {
        name: "Bending Academy Research Bundle I",
        image: "placeholder.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.ANIMA_CRYSTAL,
                amount: 750
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60 * 20 + 5 * 50
            },
            {
                resource: Resources.FOOD,
                amount: 1000 * 400
            },
            {
                resource: Resources.WOOD,
                amount: 1000 * 400
            },
            {
                resource: Resources.STONE,
                amount: 1000 * 400
            },
            {
                resource: Resources.GOLD,
                amount: 500 * 400
            },
            {
                resource: Resources.VIPPOINT,
                amount: 500
            }
        ]
    },
    {
        name: "Bending Academy Research Bundle II",
        image: "placeholder.png",
        priceUSD: 9.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 1050
            },
            {
                resource: Resources.ANIMA_CRYSTAL,
                amount: 1500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60 * 40 + 5 * 100
            },
            {
                resource: Resources.FOOD,
                amount: 1000 * 800
            },
            {
                resource: Resources.WOOD,
                amount: 1000 * 800
            },
            {
                resource: Resources.STONE,
                amount: 1000 * 800
            },
            {
                resource: Resources.GOLD,
                amount: 500 * 800
            },
            {
                resource: Resources.VIPPOINT,
                amount: 1000
            }
        ]
    },
    {
        name: "Anima Crystal Special Bundle I",
        image: "anima_crystal_special_bundle.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.ANIMA_CRYSTAL,
                amount: 375
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60 * 5 + 5 * 30
            },
            {
                resource: Resources.FOOD,
                amount: 1000 * 500
            },
            {
                resource: Resources.WOOD,
                amount: 1000 * 500
            },
            {
                resource: Resources.STONE,
                amount: 1000 * 500
            },
            {
                resource: Resources.GOLD,
                amount: 500 * 500
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
];