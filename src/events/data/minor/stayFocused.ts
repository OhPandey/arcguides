import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const stayFocused: Omit<Event, "type"> = {
    id: "stay-focused",
    name: "Stay Focused",
    description: "Maintain your focus!",
    duration: 2,
    repeat: 14,
    startDate: "2026-04-04",
    tasks: [
        {
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Gather 200,000 Resources from the Field",
                    [
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 75 },
                    ]
                ],
                [
                    "Gather 500,000 Resources from the Field",
                    [
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 150 },
                    ]
                ],
                [
                    "Gather 1,000,000 Resources from the Field",
                    [
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 225 },
                        { resource: Resources.CITY_RELOCATION_COMMON, amount: 1 },
                    ]
                ],
                [
                    "Complete 5 Expedition missions",
                    [
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 },
                    ]
                ],
                [
                    "Complete 10 Expedition missions",
                    [
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 3 * 10000 },
                        { resource: Resources.WOOD, amount: 3 * 10000 },
                        { resource: Resources.STONE, amount: 3 * 10000 },
                    ]
                ],
                [
                    "Complete 20 Expedition missions",
                    [
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 5 * 10000 },
                        { resource: Resources.WOOD, amount: 5 * 10000 },
                        { resource: Resources.STONE, amount: 5 * 10000 },
                        { resource: Resources.POWER_BOOST_RARE, amount: 1 },
                    ]
                ]
            ]
        }
    ],
    details: [
        { type: "p", content: "Maintain your focus!", space: true },
        {
            type: "ol", items: [
                "Gather resources on the field, complete Expedition missions during the event period.",
                "Reach the goals and get rewards.",
            ], space: true
        },
        { type: "quotedate", author: "ANGames", date: "2026-04-03" }
    ]
}