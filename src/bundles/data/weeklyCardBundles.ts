import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const weeklyCardBundles: Bundle[] = [
    {
        name: "Gem Weekly Card",
        image: "gem_weekly_card.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2500 + 50 * 7
            },
        ]
    },
    {
        name: "Speedup Weekly Card",
        image: "speedup_weekly_card.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 5 * 150 * 7
            },
        ]
    },
    {
        name: "Resource Weekly Card",
        image: "resource_weekly_card.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.CUSTOM_RESOURCE_CHEST_LV5,
                amount: 6 * 7
            },
        ]
    },
    {
        name: "Gear Weekly Card",
        image: "gear_weekly_card.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST,
                amount: 12 * 7
            },
        ]
    },

    {
        name: "Companion Weekly Card",
        image: "companion_weekly_card.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST,
                amount: 25 * 7
            },
        ]
    },

    {
        name: "All Weekly Card",
        image: "all_weekly_card.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2500 + 50 * 7 + 4 * 500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 5 * 150 * 7
            },
            {
                resource: Resources.CUSTOM_RESOURCE_CHEST_LV5,
                amount: 6 * 7
            },
            {
                resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST,
                amount: 12 * 7
            },
            {
                resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST,
                amount: 25 * 7
            },
        ]
    },
]