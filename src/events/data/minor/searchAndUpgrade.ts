import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const searchAndUpgrade: Omit<Event, "type"> = {
  id: "search-and-upgrade",
  name: "Search & Upgrade",
  description: "To achieve faster growth, it's important to observe your surroundings carefully!",
  duration: 2,
  repeat: 14,
  startDate: "2026-04-11",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Increase Power by 40,000 with Construction",
          [
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 },
            { resource: Resources.FOOD, amount: 50000 },
            { resource: Resources.WOOD, amount: 50000 },
            { resource: Resources.STONE, amount: 50000 }
          ]
        ],
        [
          "Increase Power by 80,000 with Construction",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 },
            { resource: Resources.FOOD, amount: 50000 * 2 },
            { resource: Resources.WOOD, amount: 50000 * 2 },
            { resource: Resources.STONE, amount: 50000 * 2 }
          ]
        ],
        [
          "Increase Power by 120,000 with Construction",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 },
            { resource: Resources.FOOD, amount: 50000 * 3 },
            { resource: Resources.WOOD, amount: 50000 * 3 },
            { resource: Resources.STONE, amount: 50000 * 3 }
          ]
        ],
        [
          "Complete 5 Expedition missions",
          [
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
          ]
        ],
        [
          "Complete 10 Expedition missions",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 + 5 * 10 + 5 * 10 }
          ]
        ],
        [
          "Complete 20 Expedition missions",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 15 + 5 * 15 + 5 * 15 },
            { resource: Resources.SQUAD_EXPANSION_EPIC, amount: 1 }
          ]
        ]
      ]
    }
  ],
  details: [
    { type: "p", content: "To achieve faster growth, it's important to observe your surroundings carefully!", space: true },
    {
      type: "ol", items: [
        "During the event period, earn points by upgrading buildings and completing expeditions.",
        "Reach the goal and get rewards."
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-04" },
  ],
  tips: [
    "Keep in mind that you can solo rally after reaching VIP 5"
  ]
}