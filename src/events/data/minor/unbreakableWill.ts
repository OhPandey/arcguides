import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const unbreakableWill: Omit<Event, "type"> = {
    id: "unbreakable-will",
    name: "Unbreakable Will",
    description: "What matters is an unyielding determination!",
    duration: 3,
    repeat: 14,
    startDate: "2026-04-01",
    tasks: [
        {
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Use 300 AP",
                    [
                        { resource: Resources.SPEEDUP, amount: 60 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Use 1,000 AP",
                    [
                        { resource: Resources.SPEEDUP, amount: 60 * 5 },
                        { resource: Resources.FOOD, amount: 10000 * 3 },
                        { resource: Resources.WOOD, amount: 10000 * 3 },
                        { resource: Resources.STONE, amount: 10000 * 3 }
                    ]
                ],
                [
                    "Gather 20,000 Resources in the City",
                    [
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 + 5 + 5 }
                    ]
                ],
                [
                    "Gather 100,000 Resources in the City",
                    [
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 3 + 5 * 3 + 5 * 3 }
                    ]
                ],
                [
                    "Recruit 1,000 Benders",
                    [
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Recruit 2,000 Benders",
                    [
                        { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 3 },
                        { resource: Resources.WOOD, amount: 10000 * 3 },
                        { resource: Resources.STONE, amount: 10000 * 3 }
                    ]
                ],
                [
                    "Recruit 6,000 Benders",
                    [
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
            ]
        }
    ],
    details: [
        { type: "p", content: "What matters is an unyielding determination!", space: true },
        {
            type: "ol", items: [
                "You will get points by using AP, bender recruiting, producing resouces in town.",
                "Reach the goals and get rewards.",
                "This event resets at UTC 00:00"
            ], space: true
        },
        { type: "quotedate", author: "AGN Games", date: "2026-04-01" }
    ],
    informations: [
        "Unbreakable Will resets every day at 00:00 UTC, for 3 days.",
    ]
}