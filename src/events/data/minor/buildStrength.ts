import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const buildStrength: Omit<Event, "type"> = {
    id: "build-strength",
    name: "Build Strength",
    description: "Strengthen your power through building upgrades, research and bender recruiting.",
    duration: 2,
    repeat: 14,
    startDate: "2026-04-03",
    tasks: [
        {
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Increase Power by 120,000*",
                    [
                        { resource: Resources.SPIRIT_SHARD_RARE, amount: 3 },
                        { resource: Resources.SPEEDUP, amount: 100 },
                    ]
                ],
                [
                    "Increase Power by 240,000*",
                    [
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
                        { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 240 },
                    ]
                ],
                [
                    "Increase Power by 360,000*",
                    [
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 2 },
                        { resource: Resources.SPEEDUP, amount: 480 },
                    ]
                ],
                [
                    "Increase Power by 480,000*",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 720 },
                    ]
                ],
                [
                    "Increase Power by 600,000*",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
                        { resource: Resources.SPEEDUP, amount: 1200 },
                    ]
                ]
            ]
        }
    ],
    rewards: [
        {
            title: "Overall Ranking",
            headers: ["Rank", "Reward"],
            rows: [
                [
                    "1",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30 },
                        { resource: Resources.GEM, amount: 1000 },
                        { resource: Resources.SPEEDUP, amount: 60 * 20 },
                        { resource: Resources.FOOD, amount: 150000 * 10 },
                        { resource: Resources.WOOD, amount: 150000 * 10 },
                    ]
                ],
                [
                    "2",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20 },
                        { resource: Resources.GEM, amount: 500 },
                        { resource: Resources.SPEEDUP, amount: 60 * 15 },
                        { resource: Resources.FOOD, amount: 150000 * 8 },
                        { resource: Resources.WOOD, amount: 150000 * 8 },
                    ]
                ],
                [
                    "3",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
                        { resource: Resources.GEM, amount: 300 },
                        { resource: Resources.SPEEDUP, amount: 60 * 10 },
                        { resource: Resources.FOOD, amount: 150000 * 6 },
                        { resource: Resources.WOOD, amount: 150000 * 6 },
                    ]
                ],
                [
                    "4-10",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
                        { resource: Resources.GEM, amount: 200 },
                        { resource: Resources.SPEEDUP, amount: 60 * 5 },
                        { resource: Resources.FOOD, amount: 150000 * 4 },
                        { resource: Resources.WOOD, amount: 150000 * 4 },
                    ]
                ],
                [
                    "11-20",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
                        { resource: Resources.GEM, amount: 100 },
                        { resource: Resources.SPEEDUP, amount: 60 * 3 },
                        { resource: Resources.FOOD, amount: 150000 * 3 },
                        { resource: Resources.WOOD, amount: 150000 * 3 },
                    ]
                ],
                [
                    "21-50",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
                        { resource: Resources.GEM, amount: 50 },
                        { resource: Resources.SPEEDUP, amount: 60 * 2 },
                        { resource: Resources.FOOD, amount: 150000 * 2 },
                        { resource: Resources.WOOD, amount: 150000 * 2 },
                    ]
                ],
                [
                    "51-100",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
                        { resource: Resources.GEM, amount: 20 },
                        { resource: Resources.SPEEDUP, amount: 60 },
                        { resource: Resources.FOOD, amount: 150000 },
                        { resource: Resources.WOOD, amount: 150000 },
                    ]
                ]
            ]
        }
    ],
    disclaimer: "* Hero Power is excluded.",
    details: [
        { type: "p", content: "Build your strength and create a magnificent city!", space: true },
        {
            type: "ol", items: [
                "Rankings are based on Power gained during the event period (Hero excluded).",
                "Leaders who earn at lesat 10,000 points and place in the rankings will receive amazing rewards.",
            ], space: true
        },
        { type: "quotedate", author: "ANGames", date: "2026-04-03" }
    ],
    image: "strength.png"
}