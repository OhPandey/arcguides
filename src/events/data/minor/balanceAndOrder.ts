import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const balanceAndOrder: Omit<Event, "type"> = {
  id: "balance-and-order",
  name: "Balance and Order",
  description: "You are the guardians fo balance and order.",
  duration: 3,
  repeat: 14,
  startDate: "2026-04-08",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        ["Gather 100,000 Resources from the Field",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 + 5 + 5 }
          ]
        ],
        ["Gather 300,000 Resources from the Field",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 3 * 5 + 3 * 5 + 3 * 5 }
          ]
        ],
        ["Defeat 3 Shattered Skulls",
          [
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
            { resource: Resources.FOOD, amount: 50000 },
            { resource: Resources.WOOD, amount: 50000 },
            { resource: Resources.STONE, amount: 50000 }
          ]
        ],
        ["Defeat 10 Shattered Skulls",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
            { resource: Resources.FOOD, amount: 50000 },
            { resource: Resources.WOOD, amount: 50000 },
            { resource: Resources.STONE, amount: 50000 }
          ]
        ],
        ["Recruit 2,000 benders",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 },
            { resource: Resources.WOOD, amount: 10000 },
            { resource: Resources.STONE, amount: 10000 },
          ]
        ],
        ["Recruit 6,000 benders",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.FOOD, amount: 3 * 10000 },
            { resource: Resources.WOOD, amount: 3 * 10000 },
            { resource: Resources.STONE, amount: 3 * 10000 },
          ]
        ]
      ]
    }
  ],
  details: [
    { type: "p", content: "You are the guardians of balance and order.", space: true },
    {
      type: "ol", items: [
        "Gather resources on the field, recruit benders and defeat Shattered Skulls.",
        "Reach the goals and get rewards.",
        "This event resets at UTC 00:00."
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-08" }
  ],
  informations: [
    "Balance and Order resets every day at 00:00 UTC, for 3 days.",
  ]
}