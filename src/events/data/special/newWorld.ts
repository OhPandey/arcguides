import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const newWorld: Omit<Event, "type"> = {
  id: "new-world",
  name: "New World Event",
  description: "Boost your Power to receive a limited Town Hall skin!",
  duration: 8,
  repeat: 0,
  tasks: [
    {
      headers: ["Task", "Reward"],
      rows: [
        [
          "Achieve 30,000 Power",
          [
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 25 + 25 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 }
          ]
        ],
        [
          "Achieve 80,000 Power",
          [
            { resource: Resources.SILVER_SCROLL, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 5 },
            { resource: Resources.FOOD, amount: 2 * 50000 }
          ]
        ],
        [
          "Achieve 150,000 Power",
          [
            { resource: Resources.SILVER_SCROLL, amount: 3 },
            { resource: Resources.SPEEDUP, amount: 100 + 100 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 3 }
          ]
        ],
        [
          "Achieve 300,000 Power",
          [
            { resource: Resources.SILVER_SCROLL, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 24 * 5 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 },
            { resource: Resources.FOOD, amount: 150000 }
          ]
        ],
        [
          "Achieve 600,000 Power",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 36 * 5 + 36 + 5 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 20 }
          ]
        ],
        [
          "Achieve 1,000,000 Power",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 2 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 3 },
            { resource: Resources.SPEEDUP, amount: 120 * 5 }
          ]
        ],
        [
          "Achieve 1,500,000 Power",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 3 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 180 * 5 }
          ]
        ],
        [
          "Achieve 2,000,000 Power",
          [
            { resource: Resources.GOLDEN_SCROLL, amount: 5 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 7 },
            { resource: Resources.SPEEDUP, amount: 300 * 5 },
          ]
        ],
        [
          "Achieve 2,500,000 Power",
          [
            { resource: Resources.TOWNHALL("Obisidian Palace"), amount: 1 },
            { resource: Resources.GEM, amount: 500 },
            { resource: Resources.GOLDEN_SCROLL, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 600 * 5 },
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
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 50 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 100 },
            { resource: Resources.GOLDEN_SCROLL, amount: 20 },
            { resource: Resources.SPEEDUP, amount: 60 * 20 },
          ]
        ],
        [
          "2",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 80 },
            { resource: Resources.GOLDEN_SCROLL, amount: 15 },
            { resource: Resources.SPEEDUP, amount: 60 * 15 },
          ]
        ],
        [
          "3",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 60 },
            { resource: Resources.GOLDEN_SCROLL, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 60 * 10 },
          ]
        ],
        [
          "4-10",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 40 },
            { resource: Resources.GOLDEN_SCROLL, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 60 * 5 },
          ]
        ],
        [
          "11-20",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 30 },
            { resource: Resources.GOLDEN_SCROLL, amount: 3 },
            { resource: Resources.SPEEDUP, amount: 60 * 5 },
          ]
        ],
        [
          "21-50",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 20 },
            { resource: Resources.GOLDEN_SCROLL, amount: 2 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 },
          ]
        ],
        [
          "51-100",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 10 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 },
          ]
        ],
      ]
    }
  ],
  details: [
    { type: "p", content: "A new world full of endless possibilities awaits!", space: true },
    {
      type: "ol", items: [
        "This event will take place when a new world opens and will last for 8 days.",
        "Increase your Power and seize amazing rewards. Limited Town Hall skin may be available again in the distant future.",
        "Power gained from equipped Hero gear is not counted!",
        "This event won’t happen again!"
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-02" }
  ],
  informations: [
    "This special event is only available at the start of a new world (server). New servers open every Friday."
  ],
  tips: [
    "This event is among the most significant milestones in a server's lifecycle. At present, the Town Hall skin - which permanently increases all benders' ATK and DEF by 2% - can only be obtained through this event or later by purchasing it for an absurd high Lotus Tile cost."
  ]
}