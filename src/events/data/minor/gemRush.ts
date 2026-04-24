import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const gemRush: Omit<Event, "type"> = {
    id: "gem-rush",
    name: "Gem Rush",
    description: "Everyone's friend, Gems!",
    duration: 2,
    repeat: "Unregularly", // 24-04-2026 on global sync
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Use 200 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 2 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 2 },
            ]
          ],
          [
            "Use 500 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60*3 },
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 5 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 5 },
            ]
          ],
          [
            "Use 1,500 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60*4 },
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 10 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 10 },
            ]
          ],
          [
            "Use 4,000 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60*6 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
            ]
          ],
          [
            "Use 8,000 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60*10 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
            ]
          ],
          [
            "Use 12,000 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60*15 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
            ]
          ],
          [
            "Use 18,000 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60*24 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 15 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
            ]
          ],
          [
            "Use 25,000 Gems",
            [
              { resource: Resources.SPEEDUP, amount: 60*24*2 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 20 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 15 },
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "Everyone's friend, Gems! Enjoy great benefits by using gems for a limited time!", space: true },
      {
        type: "ol", items: [
          "Use gems during the event period.",
          "Reach the goal and get rewards.",
        ], space: true
      },
      { type: "quotedate", author: "AGN Games", date: "2026-04-24" }
    ],
  }