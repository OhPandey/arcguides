import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const bortesScheme: Omit<Event, "type"> = {
  id: "bortes-scheme",
  name: "Borte's Scheme",
  description: "High Priestress of the Shattered Skulls is seeking the throne of Murong.",
  duration: 2,
  repeat: 14,
  startDate: "2026-04-04",
  tasks: [
    {
      description: "To fight Borte's Berserkers or Elite Borte's Berserkers, you need a Drum or Beads, respectively. These items can be obtained by defeating Shattered Skulls in the Field.",
      headers: ["Task", "Reward"],
      rows: [
        ["Defeat 1x Borte's Berserker or Elite Borte's Berserker",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 3, disclaimer: "*" },
            { resource: Resources.SPEEDUP, amount: 4 * 5 },
            { resource: Resources.FOOD, amount: 10000 * 5 },
            { resource: Resources.WOOD, amount: 10000 * 5 },
          ]
        ]
      ]
    }
  ],
  disclaimer: "*Epic Spirit Shard: Borte will be distributed diffrently based on performance in rally battles.",
  details: [
    { type: "p", content: "Borte was once a slave girl offered as a sacrifice to Father Glowworm, but through her cunning and deceit, she rose to become the corrupt high priestess of a temple that guides fanatacis. However, her thirst for Power knows no bounds. It seems she now seeks to oust Chanyu and evne aims for the mocking throne. They say the enemy of your enemy is your friend. Leveraging Borte's insatiable greed might just aid in purging the corruption entrenched in this land.", space: true },
    {
      type: "ol", items: [
        "During the event period, defeating Shattered Skull on the field map will give you a chance to obtain Borte's Drum or Beads.",
        "Using Borte's Drum from your inventory will summon Borte's Berserkers, while using Borte's Beads will summon Elite Borte's Berserkers on the field.",
        "Defeat Borte in rallies alongside alliance members to obtain Spirit Shard: Borte.",
        "Spirit Shard: Borte will be distributed differently based on performance in rally battles."
      ], space: true
    },
    { type: "quotedate", author: "ANGames", date: "2026-04-04" },
  ],
  tips: [
    "Keep in mind that you can solo rally after reaching VIP 5"
  ]
}