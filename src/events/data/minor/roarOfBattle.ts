import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const roarOfBattle: Omit<Event, "type"> = {
  id: "roar-of-battle",
  name: "Roar of Battle",
  description: "Defeat Shattered Skulls and earn points to receive rewards.",
  duration: 2,
  repeat: 14,  // Probably 2 weeks, need to check later for confirmation
  startDate: "2026-04-07",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Earn 200 points",
          [
            { resource: Resources.GEM, amount: 30 },
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 2 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Earn 400 points",
          [
            { resource: Resources.GEM, amount: 60 },
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 4 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 4 },
            { resource: Resources.SPEEDUP, amount: 2 * 60 }
          ]
        ],
        [
          "Earn 600 points",
          [
            { resource: Resources.GEM, amount: 90 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 2 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 3 * 60 }
          ]
        ],
        [
          "Earn 800 points",
          [
            { resource: Resources.GEM, amount: 120 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 4 },
            { resource: Resources.SPEEDUP, amount: 5 * 60 }
          ]
        ]
      ]
    }
  ],
  rewards: [
    {
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
    { type: "p", content: "To maintain balance and harmony there are times when you must fight.", space: true },
    { type: "p", content: "Defeat Shattered Skulls on the field to earn points." },
    { type: "p", content: "Shattered Skulls provide different scores absed on their level." },
    { type: "p", content: "Highly ranked leaders who earn a minimum of 500 points by defeating Shattered Skulls will recieve amazing rewards", space: true },
    { type: "p", content: "Scoring Rules" },
    {
      type: "ul", items: [
        "Levels 1-6: 10 points",
        "Levels 7-9: 20 points",
        "Levels 10-12: 30 points",
        "Levels 13-15: 40 points",
        "Levels 16-17: 50 points",
        "Levels 18-19: 60 points",
        "Levels 20-22: 70 points",
        "Levels 23-24: 80 points",
        "Levels 25-26: 90 points",
        "Levels 27-28: 100 points",
        "Level 29: 110 points",
        "Level 30: 120 points",
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-07" }
  ]
}