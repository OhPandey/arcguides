import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const avatarDay: Omit<Event, "type"> = {
    id: "avatar-day-festival",
    name: "Avatar Day Festival",
    description: "Complete the missions to earn Aang Cookies!",
    duration: 5,
    repeat: 28,
    seedStartDate: {
        SEED_A: "2026-03-30",
        SEED_B: "2026-04-01",
        SEED_B2: "2026-04-15",
        SEED_C: "2026-04-15",
        SEED_C2: "2026-04-28",
    },
    tasks: [
        {
            title: "Day 1 - I (Login)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Log in for 1 Day",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Log in for 2 Days",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 2 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 2 },
                        { resource: Resources.FOOD, amount: 10000 * 2 },
                        { resource: Resources.WOOD, amount: 10000 * 2 },
                        { resource: Resources.STONE, amount: 10000 * 2 }
                    ]
                ],
                [
                    "Log in for 3 Days",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 3 },
                        { resource: Resources.WOOD, amount: 10000 * 3 },
                        { resource: Resources.STONE, amount: 10000 * 3 }
                    ]
                ],
                [
                    "Log in for 4 Days",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 4 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 4 },
                        { resource: Resources.WOOD, amount: 10000 * 4 },
                        { resource: Resources.STONE, amount: 10000 * 4 }
                    ]
                ],
                [
                    "Log in for 5 Days",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 5 },
                        { resource: Resources.WOOD, amount: 10000 * 5 },
                        { resource: Resources.STONE, amount: 10000 * 5 }
                    ]
                ]
            ]
        },
        {
            title: "Day 1 - II (Recruitment)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Recruit 3,000 Benders",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
                [
                    "Recruit 6,000 Benders",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.SPEEDUP, amount: 60 * 2 },
                        { resource: Resources.FOOD, amount: 50000 * 3 },
                        { resource: Resources.WOOD, amount: 50000 * 3 },
                        { resource: Resources.STONE, amount: 50000 * 3 }
                    ]
                ],
                [
                    "Recruit 12,000 Benders",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 * 3 },
                        { resource: Resources.FOOD, amount: 50000 * 5 },
                        { resource: Resources.WOOD, amount: 50000 * 5 },
                        { resource: Resources.STONE, amount: 50000 * 5 }
                    ]
                ],
                [
                    "Recruit 20,000 Benders",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 10 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 * 5 },
                        { resource: Resources.FOOD, amount: 50000 * 10 },
                        { resource: Resources.WOOD, amount: 50000 * 10 },
                        { resource: Resources.STONE, amount: 50000 * 10 }
                    ]
                ]
            ]
        },
        {
            title: "Day 2 - I (AP)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Use 500 AP",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
                [
                    "Use 1,000 AP",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 3 },
                        { resource: Resources.WOOD, amount: 50000 * 3 },
                        { resource: Resources.STONE, amount: 50000 * 3 }
                    ]
                ],
                [
                    "Use 2,000 AP",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 5 },
                        { resource: Resources.WOOD, amount: 50000 * 5 },
                        { resource: Resources.STONE, amount: 50000 * 5 }
                    ]
                ]
            ]
        },
        {
            title: "Day 2 - II (Field resources)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Gather 100,000 Resources from the Field",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Gather 200,000 Resources from the Field",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 2 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 10 + 5 * 10 + 5 * 10 }
                    ]
                ],
                [
                    "Gather 400,000 Resources from the Field",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 15 + 5 * 15 + 5 * 15 }
                    ]
                ],
                [
                    "Gather 800,000 Resources from the Field",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 2 },
                        { resource: Resources.SPEEDUP, amount: 60 * 2 + 60 * 2 + 60 * 2 }
                    ]
                ]
            ]
        },
        {
            title: "Day 3 - I (Construction)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Increase Power by 1,000 with Construction",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Increase Power by 2,000 with Construction",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
                    ]
                ],
                [
                    "Increase Power by 3,000 with Construction",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 * 2 + 60 * 2 + 60 * 2 }
                    ]
                ]
            ]
        },
        {
            title: "Day 3 - II (Expedition)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Complete 10 Expedition missions",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
                [
                    "Complete 20 Expedition missions",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 3 },
                        { resource: Resources.WOOD, amount: 50000 * 3 },
                        { resource: Resources.STONE, amount: 50000 * 3 }
                    ]
                ],
                [
                    "Complete 30 Expedition missions",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 5 },
                        { resource: Resources.WOOD, amount: 50000 * 5 },
                        { resource: Resources.STONE, amount: 50000 * 5 }
                    ]
                ]
            ]
        },
        {
            title: "Day 4 - I (City resources)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Gather 10,000 Resources from the City",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 },
                        { resource: Resources.WOOD, amount: 10000 },
                        { resource: Resources.STONE, amount: 10000 }
                    ]
                ],
                [
                    "Gather 50,000 Resources from the City",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 2 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 3 },
                        { resource: Resources.WOOD, amount: 10000 * 3 },
                        { resource: Resources.STONE, amount: 10000 * 3 }
                    ]
                ],
                [
                    "Gather 100,000 Resources from the City",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
                [
                    "Gather 150,000 Resources from the City",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 3 },
                        { resource: Resources.WOOD, amount: 50000 * 3 },
                        { resource: Resources.STONE, amount: 50000 * 3 }
                    ]
                ]
            ]
        },
        {
            title: "Day 4 - II (Research)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Increase Power by 1,500 with Research",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Increase Power by 3,000 with Research",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
                    ]
                ],
                [
                    "Increase Power by 5,000 with Research",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 * 2 + 60 * 2 + 60 * 2 }
                    ]
                ]
            ]
        },
        {
            title: "Day 5 - I (Shattered Skulls)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Defeat 5 Shattered Skulls",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.FOOD, amount: 10000 * 2 },
                        { resource: Resources.WOOD, amount: 10000 * 2 },
                        { resource: Resources.STONE, amount: 10000 * 2 }
                    ]
                ],
                [
                    "Defeat 10 Shattered Skulls",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 2 },
                        { resource: Resources.FOOD, amount: 50000 },
                        { resource: Resources.WOOD, amount: 50000 },
                        { resource: Resources.STONE, amount: 50000 }
                    ]
                ],
                [
                    "Defeat 20 Shattered Skulls",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 3 },
                        { resource: Resources.WOOD, amount: 50000 * 3 },
                        { resource: Resources.STONE, amount: 50000 * 3 }
                    ]
                ],
                [
                    "Defeat 30 Shattered Skulls",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 7 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.FOOD, amount: 50000 * 5 },
                        { resource: Resources.WOOD, amount: 50000 * 5 },
                        { resource: Resources.STONE, amount: 50000 * 5 }
                    ]
                ]
            ]
        },
        {
            title: "Day 5 - II (Scrolls)",
            headers: ["Task", "Reward"],
            rows: [
                [
                    "Use 5 Scrolls",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 1 },
                        { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 2 + 5 * 2 + 5 * 2 }
                    ]
                ],
                [
                    "Use 10 Scrolls",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 3 },
                        { resource: Resources.SILVER_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
                    ]
                ],
                [
                    "Use 15 Scrolls",
                    [
                        { resource: Resources.AVATAR_COOKIE, amount: 5 },
                        { resource: Resources.GOLDEN_SCROLL, amount: 1 },
                        { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
                    ]
                ]
            ]
        }
    ],
    rewards: [
        {
            title: "Avatar Day Festival Exchange",
            headers: ["Aang Cookie", "Reward"],
            rows: [
                ["1", [{ resource: Resources.FOOD, amount: 50000 }]],
                ["1", [{ resource: Resources.WOOD, amount: 50000 }]],
                ["1", [{ resource: Resources.STONE, amount: 50000 }]],
                ["1", [{ resource: Resources.GOLD, amount: 25000 }]],
                ["1", [{ resource: Resources.SPEEDUP, amount: 60 }]],
                ["2", [{ resource: Resources.SPIRIT_SHARD_RARE, amount: 1 }]],
                ["2", [{ resource: Resources.SPIRIT_BADGE_RARE, amount: 1 }]],
                ["2", [{ resource: Resources.SILVER_SCROLL, amount: 1 }]],
                ["8", [{ resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 }]],
                ["10", [{ resource: Resources.RESET_TALENT, amount: 1 }]],
                ["10", [{ resource: Resources.GOLDEN_SCROLL, amount: 1 }]],
                ["30", [{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 }]],
                ["30", [{ resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 }]]
            ]
        }
    ],
    details: [
        { type: "p", content: "Join the festivites honoring avatars and enjoy amazing rewards!", space: true },
        {
            type: "ol", items:
                [
                    "Different goals will be presented each day throughout the duration of the festival.",
                    "Upon completing the goals, you will recieve [Aang Cookie].",
                    "Collect [Aang Cookie] and exchange them at the [Avatar Day Festival Exchange] for amazing rewards."
                ], space: true
        },
        { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    tips: [
        "The event lasts for 5 days, but you can continue purchasing rewards for an additional day.",
        "You can receive a total of 117 Avatar Cookies throughout the event."
    ]
}