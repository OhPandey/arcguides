import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const supplyDepotBundles: Bundle[] = [
    {
        name: "Supply Depot > 30 days of Gems (Deprecated)",
        image: "supply_depot_gem.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500+7500
            }
        ]
    },
    {
        name: "Supply Depot > 30 days of Speedups (Deprecated)",
        image: "supply_depot_speedup.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPEEDUP,
                amount: 7500
            }
        ]
    },
    {
        name: "Supply Depot > 14 days of Companion Material Custom Chest (Deprecated)",
        image: "supply_depot_companion.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST,
                amount: 140
            }
        ]
    },
    {
        name: "Supply Depot > 14 days of Forge Coin (Deprecated)",
        image: "supply_depot_forge_coin.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.FORGE_COIN,
                amount: 9800
            }
        ]
    },
    {
        name: "Supply Depot > 14 days of Hero Gear Enhancement (Deprecated)",
        image: "supply_depot_hero_gear.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.GEAR_MATERIAL_CHEST,
                amount: 28
            }
        ]
    },
    {
        name: "Supply Depot > 14 days of Food (Deprecated)",
        image: "supply_depot_food.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.FOOD,
                amount: 15000000
            }
        ]
    },
    {
        name: "Supply Depot > 14 days of Wood (Deprecated)",
        image: "supply_depot_wood.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.WOOD,
                amount: 15000000
            }
        ]
    },
    {
        name: "Supply Depot > 14 days of Stone (Deprecated)",
        image: "supply_depot_stone.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.STONE,
                amount: 15000000
            }
        ]
    },
    {
        name: "Supply Depot > 14 days of Gold (Deprecated)",
        image: "supply_depot_gold.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.STONE,
                amount: 7500000
            }
        ]
    }
]