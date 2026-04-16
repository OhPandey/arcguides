import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const beyondLimits: Omit<Event, "type"> = {
    id: "beyond-limits",
    name: "Beyond Limits",
    description: "Keep trying and strive to surpass your limits!",
    duration: 1,
    repeat: "Unknown",  // IS NOT 2 weeks
    startDate: "2026-04-01",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Increase your Power by 60,000*",
            [
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.SPEEDUP, amount: 25 },
              { resource: Resources.FOOD, amount: 150000 },
              { resource: Resources.WOOD, amount: 150000 },
              { resource: Resources.STONE, amount: 150000 }
            ]
          ],
          [
            "Increase your Power by 120,000*",
            [
              { resource: Resources.GEM, amount: 150 },
              { resource: Resources.SPEEDUP, amount: 25 * 2 },
              { resource: Resources.FOOD, amount: 150000 * 2 },
              { resource: Resources.WOOD, amount: 150000 * 2 },
              { resource: Resources.STONE, amount: 150000 * 2 }
            ]
          ],
          [
            "Increase your Power by 240,000*",
            [
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.FOOD, amount: 150000 * 3 },
              { resource: Resources.WOOD, amount: 150000 * 3 },
              { resource: Resources.STONE, amount: 150000 * 3 }
            ]
          ],
          [
            "Increase your Power by 360,000*",
            [
              { resource: Resources.GEM, amount: 250 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.FOOD, amount: 150000 * 4 },
              { resource: Resources.WOOD, amount: 150000 * 4 },
              { resource: Resources.STONE, amount: 150000 * 4 }
            ]
          ],
          [
            "Increase your Power by 480,000*",
            [
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.SPEEDUP, amount: 60 * 4 },
              { resource: Resources.FOOD, amount: 150000 * 5 },
              { resource: Resources.WOOD, amount: 150000 * 5 },
              { resource: Resources.STONE, amount: 150000 * 5 }
            ]
          ],
          [
            "Increase your Power by 600,000*",
            [
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
              { resource: Resources.FOOD, amount: 150000 * 10 },
              { resource: Resources.WOOD, amount: 150000 * 10 },
              { resource: Resources.STONE, amount: 150000 * 10 }
            ]
          ]
        ]
      }
    ],
    disclaimer: "* Excluding Hero Power.",
    tips: [],
    details: [
      { type: "p", content: "\"If I try, I fail. If I don't try, I'm never going to get it.\" - Aang" },
      { type: "p", content: "Keep trying and strive to surpass your limits!", space: true },
      {
        type: "ol", items: [
          "Increase your Power to recieve higher rewards.",
          "This event will take place for one day.",
        ], space: true
      },
      { type: "quotedate", author: "AGN Games", date: "2026-04-01" }
    ],
  }