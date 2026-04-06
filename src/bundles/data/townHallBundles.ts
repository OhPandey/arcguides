import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const townHallBundles: Bundle[] = [
    {
        name: "Town Hall Level Up Bundle I",
        image: "town_hall_level_up.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 1500
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 5
            },
            {
                resource: Resources.SPEEDUP,
                amount: 30*60+180*5
            },
            {
                resource: Resources.FOOD,
                amount: 10000*375
            },
            {
                resource: Resources.WOOD,
                amount: 10000*375
            },
            {
                resource: Resources.STONE,
                amount: 10000*375
            },
            {
                resource: Resources.GOLD,
                amount: 5000*375
            },
            {
                resource: Resources.VIPPOINT,
                amount: 500
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV2,
                amount: 1
            },
        ]
    },
    {
        name: "Town Hall Level Up Bundle II",
        image: "town_hall_level_up.png",
        priceUSD: 9.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 3050
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 10
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*60+360*5
            },
            {
                resource: Resources.FOOD,
                amount: 10000*750
            },
            {
                resource: Resources.WOOD,
                amount: 10000*750
            },
            {
                resource: Resources.STONE,
                amount: 10000*750
            },
            {
                resource: Resources.GOLD,
                amount: 5000*750
            },
            {
                resource: Resources.VIPPOINT,
                amount: 1000
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV3,
                amount: 1
            },
        ]
    },
    {
        name: "Town Hall Level Up Bundle III",
        image: "town_hall_level_up.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 6100
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 10
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 10
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*120+720*5
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
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV4,
                amount: 1
            },
        ]
    },
    {
        name: "Town Hall Level Up Bundle IV",
        image: "town_hall_level_up.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 15500
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 25
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 25
            },
            {
                resource: Resources.SPEEDUP,
                amount: 30000 // Need  confirmation
            },
            {
                resource: Resources.FOOD,
                amount: 100000*375
            },
            {
                resource: Resources.WOOD,
                amount: 100000*375
            },
            {
                resource: Resources.STONE,
                amount: 100000*375
            },
            {
                resource: Resources.GOLD,
                amount: 50000*375
            },
            {
                resource: Resources.VIPPOINT,
                amount: 5000
            },
            {
                resource: Resources.BUNDLE_SUPPLY_CHEST_LV5,
                amount: 1
            },
        ]
    }
]