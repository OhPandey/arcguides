import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const pathToDevelopment: Omit<Event, "type"> = {
    id: "path-to-development",
    name: "Path to Development",
    description: "Upgrade the Town Hall and make your city more Powerful!",
    duration: "Always",
    repeat: 0,
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Achieve Town Hall Level 5",
            [
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 }
            ]
          ],
          [
            "Achieve Town Hall Level 8",
            [
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 }
            ]
          ],
          [
            "Achieve Town Hall Level 11",
            [
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 }
            ]
          ],
          [
            "Achieve Town Hall Level 14",
            [
              { resource: Resources.GEM, amount: 400 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 4 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
              { resource: Resources.SPEEDUP, amount: 60 * 10 }
            ]
          ],
          [
            "Achieve Town Hall Level 17",
            [
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
              { resource: Resources.SPEEDUP, amount: 60 * 15 }
            ]
          ],
          [
            "Achieve Town Hall Level 20",
            [
              { resource: Resources.GEM, amount: 600 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 6 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
              { resource: Resources.SPEEDUP, amount: 60 * 20 }
            ]
          ],
          [
            "Achieve Town Hall Level <Missing>",
            [
              { resource: Resources.GEM, amount: 700 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 7 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 7 },
              { resource: Resources.SPEEDUP, amount: 60 * 40 }
            ]
          ],
          [
            "Achieve Town Hall Level <Missing>",
            [
              { resource: Resources.GEM, amount: 800 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 8 },
              { resource: Resources.SPEEDUP, amount: 60 * 60 }
            ]
          ],
          [
            "Achieve Town Hall Level 27",
            [
              { resource: Resources.GEM, amount: 900 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 9 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 9 },
              { resource: Resources.SPEEDUP, amount: 60 * 80 }
            ]
          ],
          [
            "Achieve Town Hall Level 30",
            [
              { resource: Resources.GEM, amount: 1000 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
              { resource: Resources.SPEEDUP, amount: 60 * 100 }
            ]
          ],
        ]
      }
    ],
    disclaimer: "This is a step-by-step task line. You must complete the previous step to unlock the next one.",
    details: [
      { type: "p", content: "Upgrade the Town Hall and make your city more Powerful!", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 4 and Chapter 4)."
    ],
    wip: true,
    image: "development.png"
  }