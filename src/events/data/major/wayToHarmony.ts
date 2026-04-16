import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const wayToHarmony: Omit<Event, "type"> = {
    id: "way-to-harmony",
    name: "Way to Harmony",
    description: "Acquire Coins of Harmony by clearing challenging missions!",
    duration: 5,
    repeat: 28,
    seedStartDate: {
        SEED_A: "2026-04-13",
        SEED_B: "2026-04-15",
        SEED_B2: "2026-04-01",
        SEED_C: "2026-04-28",
        SEED_C2: "2026-04-15",
    },
    tasks: [
        {
            title: "Day 1",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Recruit 1,000 Benders",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Recruit 3,000 Benders",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 2 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 2 },
                        { resource: Resources.FOOD, amount: 10000 * 2 },
                        { resource: Resources.WOOD, amount: 10000 * 2 },
                        { resource: Resources.STONE, amount: 10000 * 2 }
                    ]
                ],
                [
                    "Recruit 6,000 Benders",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
                [
                    "Recruit 12,000 Benders",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 2 },
                        { resource: Resources.WOOD, amount: 50000 * 2 },
                        { resource: Resources.STONE, amount: 50000 * 2 }
                    ]
                ],
                [
                    "Use 5 Scrolls",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 2 + 5 * 2 + 5 * 2 }
                    ]
                ],
                [
                    "Use 10 Scrolls",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Use 15 Scrolls",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
                    ]
                ],
            ]
        },
        {
            title: "Day 2",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Defeat 5 Shattered Skulls",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 2 + 5 * 2 + 5 * 2 }
                    ]
                ],
                [
                    "Defeat 10 Shattered Skulls",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Defeat 15 Shattered Skulls",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
                    ]
                ],
                [
                    "Send 1 airship",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Send 2 airships",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 2 },
                        { resource: Resources.WOOD, amount: 10000 * 2 },
                        { resource: Resources.STONE, amount: 10000 * 2 }
                    ]
                ],
                [
                    "Successfully raid 2 other airships",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
            ]
        },
        {
            title: "Day 3",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Gather 100,000 Resources from the Field",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 2 + 5 * 2 + 5 * 2 }
                    ]
                ],
                [
                    "Gather 300,000 Resources from the Field",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Gather 500,000 Resources from the Field",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
                    ]
                ],
                [
                    "Purchase 3 items at the Trading Post",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Purchase 10 items at the Trading Post",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 2 },
                        { resource: Resources.WOOD, amount: 10000 * 2 },
                        { resource: Resources.STONE, amount: 10000 * 2 }
                    ]
                ],
                [
                    "Purchase 15 items at the Trading Post",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ]
            ]
        },
        {
            title: "Day 4",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Destroy a Shattered Skulls' Fortresses",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 2 + 5 * 2 + 5 * 2 }
                    ]
                ],
                [
                    "Destroy 3 Shattered Skulls' Fortresses",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Destroy 5 Shattered Skulls' Fortresses",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
                    ]
                ],
                [
                    "Donate 5 times to alliance research",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Donate 20 times to alliance research",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 2 },
                        { resource: Resources.WOOD, amount: 10000 * 2 },
                        { resource: Resources.STONE, amount: 10000 * 2 }
                    ]
                ],
                [
                    "Donate 40 times to alliance research",
                    [
                        { resource: Resources.COIN_OF_HARMONY, amount: 3 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ]
            ]
        }
    ],
    rewards: [
        {
            title: "Way to Harmony Exchange",
            headers: ["Coins of Harmony", "Reward"],
            rows: [
                [
                    "1",
                    [
                        { resource: Resources.FOOD, amount: 50000 }
                    ]
                ],
                [
                    "1",
                    [
                        { resource: Resources.WOOD, amount: 50000 }
                    ]
                ],
                [
                    "1",
                    [
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
                [
                    "1",
                    [
                        { resource: Resources.GOLD, amount: 25000 }
                    ]
                ],
                [
                    "1",
                    [
                        { resource: Resources.SPEEDUP, amount: 60 }
                    ]
                ],
                [
                    "2",
                    [
                        { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 }
                    ]
                ],
                [
                    "2",
                    [
                        { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 }
                    ]
                ],
                [
                    "2",
                    [
                        { resource: Resources.SILVER_SCROLL, amount: 1 }
                    ]
                ],
                [
                    "8",
                    [
                        { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 }
                    ]
                ],
                [
                    "8",
                    [
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 }
                    ]
                ],
                [
                    "10",
                    [
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 }
                    ]
                ],
                [
                    "10",
                    [
                        { resource: Resources.RESET_TALENT, amount: 1 }
                    ]
                ],
                [
                    "30",
                    [
                        { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 }
                    ]
                ],
                [
                    "30",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 }
                    ]
                ]
            ]
        }
    ],
    details: [
        { type: "p", content: "Restore harmony to the world by completing various daily goals during the event!", space: true },
        {
            type: "ol", items: [
                "This event runs for 5 days.",
                "Different types fo goals will be revealed each day.",
                "Complete goals to earn [Harmony Coins]",
                "Collect [Harmony Coins] to trade for amazing rewards at the exchange Shop."
            ], space: true
        },
        { type: "quotedate", author: "ANGames", date: "2026-04-13" }
    ],
    wip: true
}