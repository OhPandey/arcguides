import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const vaultBundles: Bundle[] = [
    {
        name: "Vault of Purification Day 1-4",
        image: "vault_of_purification_1.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 10
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 2
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 70
            },
            {
                resource: Resources.SPEEDUP,
                amount: 5*100
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
                resource: Resources.STONE,
                amount: 500*350
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
        name: "Vault of Purification Day 5",
        image: "vault_of_purification_1.png",
        priceUSD: 9.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 1050
            },
            {
                resource: Resources.SPIRIT_SHARD_LEGENDARY,
                amount: 20
            },
            {
                resource: Resources.SPIRIT_BADGE_LEGENDARY,
                amount: 2
            },
            {
                resource: Resources.BOOK_OF_EXPERIENCE_EPIC,
                amount: 140
            },
            {
                resource: Resources.SPEEDUP,
                amount: 5*200
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
                resource: Resources.STONE,
                amount: 500*700
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
    }
]