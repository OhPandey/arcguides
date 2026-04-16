import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const gloriousVictory: Omit<Event, "type"> = {
  id: "glorious-victory",
  name: "Glorious Victory",
  description: "Destroy Shattered Skulls' Fortresses with your alliance and earn rewards.",
  duration: 2,
  repeat: 14,
  startDate: "2026-04-10",
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Earn 30 points",
          [
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 3 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 3 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Earn 70 points",
          [
            { resource: Resources.GEM, amount: 150 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 3 }
          ]
        ],
        [
          "Earn 120 points",
          [
            { resource: Resources.GEM, amount: 20 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 3 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 3 },
            { resource: Resources.SPEEDUP, amount: 60 * 5 }
          ]
        ],
        [
          "Earn 200 points",
          [
            { resource: Resources.GEM, amount: 300 },
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 10 }
          ]
        ]
      ]
    }
  ],
  rewards: [
    {
      title: "Alliance Ranking",
      headers: ["Rank", "Reward"],
      rows: [
        [
          "1",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 20 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 20 },
            { resource: Resources.SPEEDUP, amount: 60 * 10 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 20 }
          ]
        ],
        [
          "2",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 15 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 15 },
            { resource: Resources.SPEEDUP, amount: 60 * 5 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 15 }
          ]
        ],
        [
          "3",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 10 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 60 * 3 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
          ]
        ],
        [
          "4-5",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 5 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
          ]
        ],
        [
          "6-10",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 2 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 60 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 2 }
          ]
        ]
      ]
    }
  ],
  details: [
    { type: "p", content: "The joy of victory is doubled when shared.", space: true },
    {
      type: "ol", items: [
        "Destroy Shattered Skulls' Fortresses on the field and earn points.",
        "Shattered Skulls' Fortresses are very powerful. Cooperate with alliance members to destroy them.",
        "Shattered SKulls' Fortresses provide different points depending on their level.",
        "Alliances that rank in the event and score at least 200 points will recieve amazing rewards."
      ], space: true
    },
    { type: "p", content: "Scoring Rules", space: true },
    {
      type: "ul", items: [
        "Level 1: 10 Points",
        "Level 2: 20 Points",
        "Level 3: 30 Points",
        "Level 4: 45 Points",
        "Level 5: 50 Points",
        "Level 6: 60 Points",
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-11" }
  ]
}