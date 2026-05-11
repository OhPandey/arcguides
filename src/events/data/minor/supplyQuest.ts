import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const supplyQuest: Omit<Event, "type"> = {
  id: "supply-quest",
  name: "Supply Quest",
  description: "Collect as many Supply Chests as possible.",
  duration: 2,
  repeat: 14,
  startDate: "2026-03-30",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Defeat 1 Shattered Skull (Repeatable)",
          [
            { resource: Resources.SUPPLY_BOX, amount: 1}
          ]
        ],
        [
          "Gather 50,000 Resources from the Field (Repeatable)",
          [
            { resource: Resources.SUPPLY_BOX, amount: 1}
          ]
        ]
      ]
    }
  ],
  rewards: [
    {
      title: "Overall Ranking",
      headers: ["Rank", "Reward"],
      rows: [
        [
          "1",
          [
            { resource: Resources.GEM, amount: 500 },
            { resource: Resources.GOLDEN_SCROLL, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 60 * 10 },
            { resource: Resources.FOOD, amount: 50000 * 10 },
            { resource: Resources.WOOD, amount: 50000 * 10 }
          ]
        ],
        [
          "2",
          [
            { resource: Resources.GEM, amount: 400 },
            { resource: Resources.GOLDEN_SCROLL, amount: 8 },
            { resource: Resources.SPEEDUP, amount: 60 * 8 },
            { resource: Resources.FOOD, amount: 50000 * 8 },
            { resource: Resources.WOOD, amount: 50000 * 8 }
          ]
        ],
        [
          "3",
          [
            { resource: Resources.GEM, amount: 300 },
            { resource: Resources.GOLDEN_SCROLL, amount: 6 },
            { resource: Resources.SPEEDUP, amount: 60 * 6 },
            { resource: Resources.FOOD, amount: 50000 * 6 },
            { resource: Resources.WOOD, amount: 50000 * 6 }
          ]
        ],
        [
          "4-10",
          [
            { resource: Resources.GEM, amount: 200 },
            { resource: Resources.GOLDEN_SCROLL, amount: 4 },
            { resource: Resources.SPEEDUP, amount: 60 * 4 },
            { resource: Resources.FOOD, amount: 50000 * 4 },
            { resource: Resources.WOOD, amount: 50000 * 4 }
          ]
        ],
        [
          "11-20",
          [
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.GOLDEN_SCROLL, amount: 3 },
            { resource: Resources.SPEEDUP, amount: 60 * 3 },
            { resource: Resources.FOOD, amount: 50000 * 3 },
            { resource: Resources.WOOD, amount: 50000 * 3 }
          ]
        ],
        [
          "21-50",
          [
            { resource: Resources.GEM, amount: 50 },
            { resource: Resources.GOLDEN_SCROLL, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 },
            { resource: Resources.FOOD, amount: 50000 * 2 },
            { resource: Resources.WOOD, amount: 50000 * 2 }
          ]
        ],
        [
          "51-100",
          [
            { resource: Resources.GEM, amount: 20 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 },
            { resource: Resources.FOOD, amount: 50000 },
            { resource: Resources.WOOD, amount: 50000 }
          ]
        ],
      ]
    }
  ],
  details: [
    {
      type: "ol", items: [
        "Gather resources on the world map, and defeat Shattered Skulls to obtain [Supply Chests].",
        "Earn rank points by defeating Shattered Skulls and Gathering resources on the Field.",
        "This event resets at UTC 00:00"
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-13" }
  ],
  image: "supply.png"
}