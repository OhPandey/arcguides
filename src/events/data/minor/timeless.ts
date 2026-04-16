import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const timeless: Omit<Event, "type"> = {
  id: "timeless",
  name: "Timeless",
  description: "Cherished values transcend the ages.",
  duration: 1,
  repeat: 14,
  startDate: "2026-04-15",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Use 200m of Speedup items",
          [
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 },
            { resource: Resources.FOOD, amount: 150000 },
            { resource: Resources.WOOD, amount: 150000 },
            { resource: Resources.STONE, amount: 150000 }
          ]
        ],
        [
          "Use 1,000m of Speedup items",
          [
            { resource: Resources.GEM, amount: 150 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 },
            { resource: Resources.FOOD, amount: 150000 * 2 },
            { resource: Resources.WOOD, amount: 150000 * 2 },
            { resource: Resources.STONE, amount: 150000 * 2 }
          ]
        ],
        [
          "Use 3,000m of Speedup items",
          [
            { resource: Resources.GEM, amount: 200 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 },
            { resource: Resources.FOOD, amount: 150000 * 3 },
            { resource: Resources.WOOD, amount: 150000 * 3 },
            { resource: Resources.STONE, amount: 150000 * 3 }
          ]
        ],
        [
          "Use 6,000m of Speedup items",
          [
            { resource: Resources.GEM, amount: 250 },
            { resource: Resources.SPEEDUP, amount: 60 * 3 },
            { resource: Resources.FOOD, amount: 150000 * 4 },
            { resource: Resources.WOOD, amount: 150000 * 4 },
            { resource: Resources.STONE, amount: 150000 * 4 }
          ]
        ],
        [
          "Use 12,000m of Speedup items",
          [
            { resource: Resources.GEM, amount: 300 },
            { resource: Resources.SPEEDUP, amount: 60 * 5 },
            { resource: Resources.FOOD, amount: 150000 * 5 },
            { resource: Resources.WOOD, amount: 150000 * 5 },
            { resource: Resources.STONE, amount: 150000 * 5 }
          ]
        ]
      ]
    }
  ],

  details: [
    { type: "p", content: "Cherished values transcend the ages.", space: true },
    {
      type: "ol", items: [
        "Reduce the time of construction, research, recruitment or healing with speedup items.",
        "Reach the goal and get rewards.",
        "The event will last for one day."
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-15" },
  ],
}