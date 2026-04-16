import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const meltTheCandle: Omit<Event, "type"> = {
    id: "melt-the-candle",
    name: "Melt the Candle",
    description: "Who can melt the candle first?",
    duration: 2,
    startDate: "2026-04-10",
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    tasks: [
        {
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Use 200min of Speedup items",
                    [
                        { resource: Resources.SPIRIT_SHARD_RARE, amount: 3 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 + 5 * 5 },
                    ]
                ],
                [
                    "Use 1,000min of Speedup items",
                    [
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
                        { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 + 60 },
                    ]
                ],
                [
                    "Use 3,000min of Speedup items",
                    [
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 2 },
                        { resource: Resources.SPEEDUP, amount: 2 * 60 + 2 * 60 + 2 * 60 + 2 * 60 },
                    ]
                ],
                [
                    "Use 6,000min of Speedup items",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 3 * 60 + 3 * 60 + 3 * 60 + 3 * 60 },
                    ]
                ],
                [
                    "Use 12,000min of Speedup items",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
                        { resource: Resources.SPEEDUP, amount: 5 * 60 + 5 * 60 + 5 * 60 + 5 * 60 },
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
    details: [
        { type: "p", content: "As time passes, the candle wax melts and drips. Who can melt the candle first?", space: true },
        {
            type: "ol", items: [
                "Ranks are determined based on the time value of speedup items used during the event period.",
                "Highly ranked leaders who earn a minimum of 1,000 will receive amazing rewards.",
            ], space: true
        },
        { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ]
}