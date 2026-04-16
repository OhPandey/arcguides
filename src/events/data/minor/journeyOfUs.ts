import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const journeyOfUs: Omit<Event, "type"> = {
  id: "journey-of-us",
  name: "Journey of Us",
  description: "Let's nto forget our journey. Every step has been meaningful.",
  duration: 2,
  repeat: 14,
  startDate: "2026-03-30",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Use 5 Silver Scrolls",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 },
            { resource: Resources.WOOD, amount: 10000 },
            { resource: Resources.STONE, amount: 10000 }
          ]
        ],
        [
          "Use 20 Silver Scrolls",
          [
            { resource: Resources.SILVER_SCROLL, amount: 3 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 * 3 },
            { resource: Resources.WOOD, amount: 10000 * 3 },
            { resource: Resources.STONE, amount: 10000 * 3 }
          ]
        ],
        [
          "Use 5 Golden Scrolls",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 },
            { resource: Resources.WOOD, amount: 10000 },
            { resource: Resources.STONE, amount: 10000 }
          ]
        ],
        [
          "Use 20 Golden Scrolls",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 3 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.FOOD, amount: 10000 * 3 },
            { resource: Resources.WOOD, amount: 10000 * 3 },
            { resource: Resources.STONE, amount: 10000 * 3 }
          ]
        ],
        [
          "Send 4 airships",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
          ]
        ],
        [
          "Successfully raid 4 other airships",
          [
            { resource: Resources.GOLD, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
          ]
        ],
      ]
    }
  ],
  details: [
    { type: "p", content: "Let's not forget our journey. Every step has been meaningful.", space: true },
    {
      type: "ol", items: [
        "Earn points during the event period by using scrolls in the Altar of Heroes, sending airships, or attacking enemy airships.",
        "Reach the goal and get rewards."
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-13" }
  ]
}