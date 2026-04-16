import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const login: Omit<Event, "type"> = {
    id: "login",
    name: "Login Event",
    description: "Log in and get Legendary Airbender hero 'Bumi'!",
    duration: 30,
    repeat: 0,
    tasks: [
        {
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Log in for 1 Day",
                    [
                        { resource: Resources.GEM, amount: 100 }
                    ]
                ],
                [
                    "Log in for 2 Days",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10, disclaimer: "*" }
                    ]
                ],
                [
                    "Log in for 3 Days",
                    [
                        { resource: Resources.GOLDEN_SCROLL, amount: 5 }
                    ]
                ],
                [
                    "Log in for 4 Days",
                    [
                        { resource: Resources.SPEEDUP, amount: 720 }
                    ]
                ],
                [
                    "Log in for 5 Days",
                    [
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
                    ]
                ],
                [
                    "Log in for 6 Days",
                    [
                        { resource: Resources.SPIRIT_SHARD_EPIC, amount: 10 }
                    ]
                ],
                [
                    "Log in for 4 Days",
                    [
                        { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20, disclaimer: "*" }
                    ]
                ],
            ]
        }
    ],
    disclaimer: "* This is not a generic Legendary Spirit Shard. This is Legendary Spirit Shard: Bumi.",
    details: [
        { type: "p", content: "Welcome to Avatar Legends: Realms Collide!", space: true },
        {
            type: "ol", items: [
                "Log in every day for 7 days to get amazing rewards!",
                "This event lasts for 30 days!"
            ], space: true
        },
        { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
        "This is a special event everyone gets upon unlocking the calendar (Town Hall 4 and Chapter 4)."
    ],
    tips: [
        "You do not need to log in consecutively. You only need to log in 7 times during the month-long event."
    ]
}