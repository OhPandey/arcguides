import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const readiness: Omit<Event, "type"> = {
  id: "readiness",
  name: "Readiness",
  description: '"Failure is only the opportunity to begin again. Only this time, more wisely." - Uncle Iroh',
  duration: 2,
  repeat: 14,
  startDate: "2026-04-09",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Use 5 Silver Scrolls",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
          ]
        ],
        [
          "Use 15 Silver Scrolls",
          [
            { resource: Resources.SILVER_SCROLL, amount: 3 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
          ]
        ],
        [
          "Use 5 Golden Scrolls",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
          ]
        ],
        [
          "Use 15 Golden Scrolls",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 3 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
          ]
        ],
        [
          "Gather 200,000 Resources from the Field",
          [
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.AP, amount: 100 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 }
          ]
        ],
        [
          "Gather 500,000 Resources from the Field",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.AP, amount: 100 * 2 },
            { resource: Resources.SPEEDUP, amount: 60 + 5 * 5 }
          ]
        ],
        [
          "Gather 1,000,000 Resources from the Field",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.AP, amount: 500 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 + 5 * 5 },
            { resource: Resources.POWER_BOOST_RARE, amount: 1 }
          ]
        ],
      ]
    }
  ],
  details: [
    { type: "p", content: '"Failure is only the opportunity to begin again. Only this time, more wisely." - Uncle Iroh', space: true },
    {
      type: "ol", items: [
        "Use Scrolls and gather resources during the event period.",
        "Reach the goals and get rewards."
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-09" }
  ],
  image: "readiness.png"
}