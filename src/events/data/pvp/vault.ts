import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const vaultOfMurang: Omit<Event, "type"> = {
    id: "vault-of-murang",
    name: "Vault of Murang",
    description: "Capture Vault of Murang and claim amazing rewards with your alliance!",
    duration: 1,
    repeat: 7,
    startDate: "2026-04-12",
    rewards: [
      {
        title: "Alliance Rewards",
        headers: ["Goal", "Reward"],
        rows: [
          [
            "Capture 1 Murong's structure",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 60 * 6 },
              { resource: Resources.FOOD, amount: 150000 * 6 },
              { resource: Resources.WOOD, amount: 150000 * 6 },
              { resource: Resources.STONE, amount: 150000 * 6 }
            ]
          ],
          [
            "Capture 2 Murong's structures",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 4 },
              { resource: Resources.SPEEDUP, amount: 60 * 8 },
              { resource: Resources.FOOD, amount: 150000 * 8 },
              { resource: Resources.WOOD, amount: 150000 * 8 },
              { resource: Resources.STONE, amount: 150000 * 8 }
            ]
          ],
          [
            "Capture 3 Murong's structures",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.SPEEDUP, amount: 60 * 10 },
              { resource: Resources.FOOD, amount: 150000 * 10 },
              { resource: Resources.WOOD, amount: 150000 * 10 },
              { resource: Resources.STONE, amount: 150000 * 10 }
            ]
          ],
          [
            "Capture 5 Murong's structures",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 6 },
              { resource: Resources.SPEEDUP, amount: 60 * 12 },
              { resource: Resources.FOOD, amount: 150000 * 12 },
              { resource: Resources.WOOD, amount: 150000 * 12 },
              { resource: Resources.STONE, amount: 150000 * 12 }
            ]
          ],
          [
            "Capture 7 Murong's structures",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 7 },
              { resource: Resources.SPEEDUP, amount: 60 * 14 },
              { resource: Resources.FOOD, amount: 150000 * 14 },
              { resource: Resources.WOOD, amount: 150000 * 14 },
              { resource: Resources.STONE, amount: 150000 * 14 }
            ]
          ],
          [
            "Capture 10 Murong's structures",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
              { resource: Resources.SPEEDUP, amount: 60 * 16 },
              { resource: Resources.FOOD, amount: 150000 * 16 },
              { resource: Resources.WOOD, amount: 150000 * 16 },
              { resource: Resources.STONE, amount: 150000 * 16 }
            ]
          ],
          [
            "Capture 15 Murong's structures",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 9 },
              { resource: Resources.SPEEDUP, amount: 60 * 18 },
              { resource: Resources.FOOD, amount: 150000 * 18 },
              { resource: Resources.WOOD, amount: 150000 * 18 },
              { resource: Resources.STONE, amount: 150000 * 18 }
            ]
          ],
          [
            "Capture 20+ Murong's structures",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
              { resource: Resources.SPEEDUP, amount: 60 * 20 },
              { resource: Resources.FOOD, amount: 150000 * 20 },
              { resource: Resources.WOOD, amount: 150000 * 20 },
              { resource: Resources.STONE, amount: 150000 * 20 }
            ]
          ],
        ]
      },
      {
        title: "Individual Rewards",
        headers: ["Goal", "Reward"],
        rows: [
          [
            "Achieve 40,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 2 },
              { resource: Resources.VERDANT_SPLINTER, amount: 200 },
            ]
          ],
          [
            "Achieve 80,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 2 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 4 },
              { resource: Resources.VERDANT_SPLINTER, amount: 400 },
            ]
          ],
          [
            "Achieve 160,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 3 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 6 },
              { resource: Resources.VERDANT_SPLINTER, amount: 600 },
            ]
          ],
          [
            "Achieve 400,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 8 },
              { resource: Resources.VERDANT_SPLINTER, amount: 800 },
            ]
          ],
          [
            "Achieve 800,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 10 },
              { resource: Resources.VERDANT_SPLINTER, amount: 1000 },
            ]
          ],
          [
            "Achieve 1,440,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 12 },
              { resource: Resources.VERDANT_SPLINTER, amount: 1200 },
            ]
          ],
          [
            "Achieve 2,400,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 7 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 14 },
              { resource: Resources.VERDANT_SPLINTER, amount: 1400 },
            ]
          ],
          [
            "Achieve 6,000,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 9 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 18 },
              { resource: Resources.VERDANT_SPLINTER, amount: 1800 },
            ]
          ],
          [
            "Achieve 8,000,000+ Individual Points",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 20 },
              { resource: Resources.VERDANT_SPLINTER, amount: 2000 },
            ]
          ],
        ]
      }
    ],
    informations: [
      "The Vault of Murang occurs every Sunday and lasts for 1 hour. The starting time alternates weekly between 19:00 UTC and 00:00 UTC."
    ],
    details: [
      { type: "p", content: "Introduction", space: true },
      {
        type: "ul", items:
          [
            "Vaults that were hidden by Murong, the King of the Shattered Skulls, are being discovered all over.",
            "Join your alliance members to capture the Vault of Murong and bring peace."
          ], space: true
      },
      { type: "p", content: "Schedule", space: true },
      { type: "p", content: "Vault of Murong is held once a week during the Chronicle.", space: true },
      { type: "p", content: "Registration", space: true },
      {
        type: "ul", items:
          [
            "Vault of Murong must be participated in as an alliance, and registration will be open for 24 hours.",
            "Only alliance officers can register to participate.",
            "Alliances that are not in the process of registering or participating in Vault of Murong temporarily cannot disband."
          ], space: true
      },
      { type: "p", content: "Participating Alliances and Matching", space: true },
      {
        type: "ul", items:
          [
            "Vault of Murong can have up to 3 Warzones per round, with at least 1 Warzone opening each time.",
            "If more alliances register than the available slots, the participating alliances for this round will be selected based on their Terriotry Points ranking.",
            "Each Warzone will have 4 alliances to capture Vault of Murong.",
            "Once the matching is complete, you will be able to see which alliances you'll be facing in your Warzone. Analyze your strategy in advance and make a plan with your alliance."
          ], space: true
      },
      { type: "p", content: "Basic Rules", space: true },
      {
        type: "ol", items:
          [
            "Vault of Murong lasts for 1 hour.",
            "Vault of Murong will be held on a seperate Warzone map, and all alliance members can participate.",
            "You cannot perform activites in the city while participating in Vault of Murong.",
            "Participating in Vault of Murong will grant your city a City Shield for 1 hour.",
            "Leaving the Vault event is allowed at any time, but once exited, re-entry into the Warzone is not permitted.",
            "Even if leaving while participating in Vault of Murong, rewards will still be granted based on the results.",
            "All benders owned will be brought into Vault of Murong, and while benders may be wounded during the event, all benders will be fully resotred once exiting Vault of Murong or when the event ends.",
            "Buff items will remain active if their duration has not expired.",
            "In the Warzone, all buffs you owned are applied. For Alliance Buffs, the buffs applied to the Warzone are determined once the matching is complete.",
            "Selecting the city while it is under attack displays the [Emergency Return] function. In the Warzone, the city be relocated up to two times to a random location within the Alliance Landing Zone."
          ], space: true
      },
      { type: "p", content: "Victory Condition", space: true },
      { type: "p", content: "Restore Vault of Murong located at the center of the Warzone and successfully defend it for 15 minutes, or if your alliance controls Vault of Murong at the end of the event, victory will be achieved.", space: true },
      { type: "p", content: "Murong's Structures", space: true },
      { type: "p", content: "All structres in the Warzone automatically begin restoration once captured. Restoration takes 1 minute and requires no resources.", space: true },
      { type: "p", content: "Murong's Tower", space: true },
      {
        type: "ul", items:
          [
            "Murong's Tower are located all over the Warzone.",
            "By restoring one of the Murong's Tower, you can relocate your City to the surrounding territory and capture adjacent structures."
          ], space: true
      },
      { type: "p", content: "Murong's Post", space: true },
      {
        type: "ul", items:
          [
            "There are 4 Murong's Posts surrounding the final strucutre, Vault of Murong.",
            "To attack the Vault of Murong, at least 2 Posts must be restored.",
            "Restoring a Murong's Post does not allow you to relocate your City to the surrounding territory."
          ], space: true
      },
      { type: "p", content: "Vault of Murong", space: true },
      {
        type: "ul", items:
          [
            "This structure must be captured to achieve victory.",
            "Capture the Vault of Murong and bring glory to your Alliance!"
          ], space: true
      },
      { type: "p", content: "Supplies", space: true },
      {
        type: "ul", items:
          [
            "Upon entering the Warzone, you can recieve supplies.",
            "The supplies include Healing Speedups and City Relocations.",
            "Once received, you can claim them again after 15 minutes.",
            "When the Warzone ends, the Supplies will expire."
          ], space: true
      },
      { type: "p", content: "MVP/SVP", space: true },
      { type: "p", content: "MVP", space: true },
      {
        type: "ul", items:
          [
            "The leader who is part of the winning Alliance has the highest Individual Points in the Warzone will have the honor of being selected as MVP.",
            "If there is no winning Alliance in the Warzone, an MVP will not be selected."
          ], space: true
      },
      { type: "p", content: "SVP", space: true },
      {
        type: "ul", items:
          [
            "The leader who is not part of the winning Alliance and hast he highest Individual Points in the Warzone will have the honor of being selected as the SVP.",
          ], space: true
      },
      { type: "p", content: "Final Capture Reward", space: true },
      {
        type: "ul", items:
          [
            "Alliances that successfully capture Vault of Murong will recieve rewards.",
            "These rewards can be distributed by the alliance leader to the alliance members, and once the leader distrbutes the rewards, they will be sent via mail."
          ], space: true
      },
      { type: "p", content: "Territory Rewards", space: true },
      {
        type: "ul", items:
          [
            "Leaders participating in Vault of Murong will recieve rewards based on the number of Murong's Structures their alliance has captured by the end of the event.",
          ], space: true
      },
      { type: "p", content: "Individual Rewards", space: true },
      {
        type: "ul", items:
          [
            "Leaders particiapting in the Vault of Murong will recieve rewards based on Individual Points they earned from Vault of Murong.",
            {
              content: "Individual Points are earned based on the number of wounded benders inflicted on the enemy troop.",
              children: [
                {
                  type: "ul",
                  items: [
                    "Tier 1 Unit: 2 points",
                    "Tier 2 Unit: 4 points",
                    "Tier 3 Unit: 12 points",
                    "Tier 4 Unit: 32 points",
                    "Tier 5 Unit: 80 points",
                    "Tier 6 Unit: 200 points",
                  ]
                }
              ]
            },
          ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-11" }
    ]
  }