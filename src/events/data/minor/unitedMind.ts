import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const unitedMind: Omit<Event, "type"> = {
  id: "united_mind",
  name: "United Mind",
  description: "Join forces with the alliance to crush the enemies!",
  duration: 2,
  startDate: "2026-04-06",
  repeat: 14,
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        ["Help alliance 10 times",
          [
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 },
            { resource: Resources.WOOD, amount: 10000 },
            { resource: Resources.STONE, amount: 10000 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 1 },
          ]
        ],
        ["Help alliance 20 times",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 * 3 },
            { resource: Resources.WOOD, amount: 10000 * 3 },
            { resource: Resources.STONE, amount: 10000 * 3 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 2 },
          ]
        ],
        ["Help alliance 30 times",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 * 5 },
            { resource: Resources.WOOD, amount: 10000 * 5 },
            { resource: Resources.STONE, amount: 10000 * 5 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 3 },
          ]
        ],
        ["Donate 10 times to alliance research",
          [
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 10 * 5 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 1 },
          ]
        ],
        ["Donate 20 times to alliance research",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 20 * 5 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 2 },
          ]
        ],
        ["Donate 30 times to alliance research",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 30 * 5 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 3 },
          ]
        ],
      ]
    }
  ],
  details: [
    { type: "p", content: "Join forces with the alliance to crush the enemies!", space: true },
    {
      type: "ol", items: [
        "Help alliance members and donate to alliance research.",
        "Reach the goals and get rewards."
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-06" }
  ],
  image: "um.png"
}