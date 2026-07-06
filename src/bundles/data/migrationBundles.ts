import * as Resources from "@/src/shared/resources";
import { Bundle } from "../type/bundle";

export const migrationBundles: Bundle[] = [
    {
        name: "Migration Ticket Bundle I",
        image: "migration_bundle.png",
        priceUSD: 4.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 500
            },
            {
                resource: Resources.MIGRATION_TICKET,
                amount: 2
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*15
            },
            {
                resource: Resources.FOOD,
                amount: 10000*200
            },
            {
                resource: Resources.WOOD,
                amount: 10000*200
            },
            {
                resource: Resources.STONE,
                amount: 10000*200
            },
            {
                resource: Resources.GOLD,
                amount: 5000*200
            },
            {
                resource: Resources.VIPPOINT,
                amount: 500
            }
        ]
    },
    {
        name: "Migration Ticket Bundle II",
        image: "migration_bundle_2.png",
        priceUSD: 9.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 1050
            },
            {
                resource: Resources.MIGRATION_TICKET,
                amount: 3
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*30
            },
            {
                resource: Resources.FOOD,
                amount: 10000*400
            },
            {
                resource: Resources.WOOD,
                amount: 10000*400
            },
            {
                resource: Resources.STONE,
                amount: 10000*400
            },
            {
                resource: Resources.GOLD,
                amount: 5000*400
            },
            {
                resource: Resources.VIPPOINT,
                amount: 1000
            }
        ]
    },
    {
        name: "Migration Ticket Bundle III",
        image: "migration_bundle_3.png",
        priceUSD: 19.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 2100
            },
            {
                resource: Resources.MIGRATION_TICKET,
                amount: 5
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*60
            },
            {
                resource: Resources.FOOD,
                amount: 10000*800
            },
            {
                resource: Resources.WOOD,
                amount: 10000*800
            },
            {
                resource: Resources.STONE,
                amount: 10000*800
            },
            {
                resource: Resources.GOLD,
                amount: 5000*800
            },
            {
                resource: Resources.VIPPOINT,
                amount: 2000
            }
        ]
    },
    {
        name: "Migration Ticket Bundle IV",
        image: "migration_bundle_4.png",
        priceUSD: 49.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 5500
            },
            {
                resource: Resources.MIGRATION_TICKET,
                amount: 10
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*150
            },
            {
                resource: Resources.FOOD,
                amount: 10000*2000
            },
            {
                resource: Resources.WOOD,
                amount: 10000*2000
            },
            {
                resource: Resources.STONE,
                amount: 10000*2000
            },
            {
                resource: Resources.GOLD,
                amount: 5000*2000
            },
            {
                resource: Resources.VIPPOINT,
                amount: 5000
            }
        ]
    },
    {
        name: "Migration Ticket Bundle V",
        image: "migration_bundle_5.png",
        priceUSD: 99.99,
        resources: [
            {
                resource: Resources.GEM,
                amount: 11500
            },
            {
                resource: Resources.MIGRATION_TICKET,
                amount: 20
            },
            {
                resource: Resources.SPEEDUP,
                amount: 60*300
            },
            {
                resource: Resources.FOOD,
                amount: 10000*4000
            },
            {
                resource: Resources.WOOD,
                amount: 10000*4000
            },
            {
                resource: Resources.STONE,
                amount: 10000*4000
            },
            {
                resource: Resources.GOLD,
                amount: 5000*4000
            },
            {
                resource: Resources.VIPPOINT,
                amount: 10000
            }
        ]
    },
]