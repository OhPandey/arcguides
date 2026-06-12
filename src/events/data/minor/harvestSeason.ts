import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const harvestSeason: Omit<Event, "type"> = {
    id: "harvest-season",
    name: "Harvest Season",
    description: "The seasons have turned, and harvest season is upon us.",
    duration: 2,
    repeat: 14,
    startDate: "2026-04-02",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Gather 200,000 Resources from the Field",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Gather 500,000 Resources from the Field",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 3 },
              { resource: Resources.WOOD, amount: 10000 * 3 },
              { resource: Resources.STONE, amount: 10000 * 3 }
            ]
          ],
          [
            "Gather 1,000,000 Resources from the Field",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 5 },
              { resource: Resources.WOOD, amount: 10000 * 5 },
              { resource: Resources.STONE, amount: 10000 * 5 }
            ]
          ],
          [
            "Purchase 5 items at the Trading Post",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 },
              { resource: Resources.AP, amount: 100 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 1 }
            ]
          ],
          [
            "Purchase 15 items at the Trading Post",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.AP, amount: 300 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 2 }
            ]
          ],
          [
            "Purchase 30 items at the Trading Post",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.AP, amount: 500 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 3 }
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "The seasons have turned, and harvest season is upon us. Gather abundant resources to build an outstanding city.", space: true },
      {
        type: "ol", items: [
          "Gather resources, purchase items at the Trading Post during the event period to earn points.",
          "Reach the goals and get rewards."
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    image: "harvest.png"
  }