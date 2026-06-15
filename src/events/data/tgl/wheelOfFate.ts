import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const wheelOfFate: Omit<Event, "type"> = {
  id: "wheel-of-fate",
  name: "Wheel of Fate",
  description: "Predict your fate with Wheel of Fate!",
  duration: 3,
  repeat: 14,
  seedStartDate: {
    SEED_A: "2026-04-06",
    SEED_B: "2026-04-01",
    SEED_C: "2026-04-08",
  },
  rewards: [
    {
      title: "Spin drop rates",
      headers: ["Item", "Rate"],
      rows: [
        [[{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5, disclaimer: "*" }], "2%"],
        [[{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 }], "5%"],
        [[{ resource: Resources.FOOD, amount: 2500000 }], "6%"],
        [[{ resource: Resources.WOOD, amount: 2500000 }], "6%"],
        [[{ resource: Resources.STONE, amount: 2500000 }], "6%"],
        [[{ resource: Resources.GOLD, amount: 1250000 }], "6%"],
        [[{ resource: Resources.SPEEDUP, amount: 2400 }], "10%"],
        [[{ resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 2 }], "12%"],
        [[{ resource: Resources.SPEEDUP, amount: 1200 }], "22%"],
        [[{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1, disclaimer: "*" }], "25%"],
      ]
    },
    {
      title: "Spin rewards",
      description: "Only available once every Wheel event.",
      headers: ["Requirement", "Reward"],
      rows: [
        ["Use 10 Spins", [{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5, disclaimer: "*" }]],
        ["Use 25 Spins", [{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10, disclaimer: "*" }]],
        [
          "Use 45 Spins",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 15, disclaimer: "*" },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 }
          ]
        ],
        [
          "Use 75 Spins",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20, disclaimer: "*" },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 15 }
          ]
        ],
        [
          "Use 100 Spins",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30, disclaimer: "*" },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 20 }
          ]
        ]
      ]
    }
  ],
  disclaimer: "* This is not a generic Legendary Spirit Shard. The Legendary Spirit Shard obtained depends on the current hero rotation (See information box above).",
  tips: [
    "Other than during the Lotus Event, there is no way to get the specific Legendary Spirit Shards from the Wheel of Fate.\nThis **is** a Fear of Missing Out (FOMO) event.",
    "You can use up to 100 Lucky Tickets each day, for a total of 300 Lucky Tickets per event.",
    "The $100 bundle available in the shop during this event can be purchased up to 3 times.",
    "Lucky Tickets carry over to the next event, so don't stress about using all of them in a single event.",
    "The average reward for a single spin is 1,744 Gems, and one spin costs 400 Gems.",
    "The Wheel of Fate runs during [The Greatest Leader (Single Server)](tgl-single) and [The Greatest Leader (Cross Server)](tgl-single). You can get up to 15M points each day by using all of your Lucky Tickets, which gives you an incredible boost for TGL.",
  ],
  informations: [
    "During the Wheel of Fate event, you can spin the wheel by using Lucky Tickets.",
    "The Wheel of Fate resets every day at 00:00 UTC, for 3 days.",
    "The hero rotates after **every third event**.\nThe rotation for the Wheel of Fate is **Uncle Iroh → King Bumi → Painted Lady Katara → Fire Nation Aang → Avatar Hunter Zuko → White Wolf Sokka → Mako → Lady Beifong Toph → Ozai → Disguised Equalist Korra**"
  ],
  image: "wheel.png"
}