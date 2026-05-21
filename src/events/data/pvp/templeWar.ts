import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const templeWar: Omit<Event, "type"> = {
    id: "temple-war",
    name: "Temple War",
    duration: 1,
    repeat: 14,
    startDate: "2026-03-31",
    description: "The event to capture the Temple of Corruption is approaching.",
    rewards: [
      {
        headers: ["Stage", "War Points", "War Reward", "", "Territory Points", "Territory Reward"],
        description: "1. Rewards unlocked at each stage are determined by individual War Points.\n2. To unlock Territory Points Rewards, the corresponding stage's War Points must be reached, and Territory Points must also be satisfied.\n3. After the event ends, the rewards can be claimed through the event page for 48 hours. Don't forget to claim them!",

        dividerAfterColumns: [1, 3, 4],
        rows: [
          [
            "1", "10,000+",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 }
            ],
            "→", "0+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 2 },
              { resource: Resources.VERDANT_SPLINTER, amount: 2000 }
            ]
          ],
          [
            "2", "50,000+",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 }
            ],
            "→", "500+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 4 },
              { resource: Resources.VERDANT_SPLINTER, amount: 4000 }
            ]
          ],
          [
            "3", "200,000+",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 }
            ],
            "→", "1,000+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 6 },
              { resource: Resources.VERDANT_SPLINTER, amount: 6000 }
            ]
          ],
          [
            "4", "500,000+",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 4 }
            ],
            "→", "1,500+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 8 },
              { resource: Resources.VERDANT_SPLINTER, amount: 8000 }
            ]
          ],
          [
            "5", "1,200,000+",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 }
            ],
            "→", "2,000+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 10 },
              { resource: Resources.VERDANT_SPLINTER, amount: 10000 }
            ]
          ],
          [
            "6", "2,500,000+",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 60 * 6 }
            ],
            "→", "3,000+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 15 },
              { resource: Resources.VERDANT_SPLINTER, amount: 15000 }
            ]
          ],
          [
            "7", "5,000,000+",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 4 },
              { resource: Resources.SPEEDUP, amount: 60 * 7 }
            ],
            "→", "4,000+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 20 },
              { resource: Resources.VERDANT_SPLINTER, amount: 20000 }
            ]
          ],
          [
            "8", "10,000,000+",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
              { resource: Resources.SPEEDUP, amount: 60 * 8 }
            ],
            "→", "5,000+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 25 },
              { resource: Resources.VERDANT_SPLINTER, amount: 25000 }
            ]
          ],
          [
            "9", "15,000,000+",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.SPEEDUP, amount: 60 * 9 }
            ],
            "→", "7,000+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 30 },
              { resource: Resources.VERDANT_SPLINTER, amount: 30000 }
            ]
          ],
          [
            "10", "20,500,000+",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
              { resource: Resources.SPEEDUP, amount: 60 * 10 }
            ],
            "→", "3,000+",
            [
              { resource: Resources.PURIFIED_ESSENCE, amount: 40 },
              { resource: Resources.VERDANT_SPLINTER, amount: 40000 }
            ]
          ]
        ]
      },
      {
        title: "Overall Ranking",
        headers: ["Rank", "Reward"],
        rows: [
          [
            "1",
            [
              { resource: Resources.GEM, amount: 5000 },
              { resource: Resources.SPEEDUP, amount: 60 * 200 },
              { resource: Resources.FOOD, amount: 1500000 * 20 },
              { resource: Resources.WOOD, amount: 1500000 * 20 },
              { resource: Resources.STONE, amount: 1500000 * 20 },
            ]
          ],
          [
            "2",
            [
              { resource: Resources.GEM, amount: 3000 },
              { resource: Resources.SPEEDUP, amount: 60 * 150 },
              { resource: Resources.FOOD, amount: 1500000 * 15 },
              { resource: Resources.WOOD, amount: 1500000 * 15 },
              { resource: Resources.STONE, amount: 1500000 * 15 },
            ]
          ],
          [
            "3",
            [
              { resource: Resources.GEM, amount: 2000 },
              { resource: Resources.SPEEDUP, amount: 60 * 100 },
              { resource: Resources.FOOD, amount: 1500000 * 10 },
              { resource: Resources.WOOD, amount: 1500000 * 10 },
              { resource: Resources.STONE, amount: 1500000 * 10 },
            ]
          ],
          [
            "4-10",
            [
              { resource: Resources.GEM, amount: 1000 },
              { resource: Resources.SPEEDUP, amount: 60 * 80 },
              { resource: Resources.FOOD, amount: 1500000 * 7 },
              { resource: Resources.WOOD, amount: 1500000 * 7 },
              { resource: Resources.STONE, amount: 1500000 * 7 },
            ]
          ],
          [
            "11-20",
            [
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.SPEEDUP, amount: 60 * 60 },
              { resource: Resources.FOOD, amount: 1500000 * 5 },
              { resource: Resources.WOOD, amount: 1500000 * 5 },
              { resource: Resources.STONE, amount: 1500000 * 5 },
            ]
          ],
          [
            "21-50",
            [
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.SPEEDUP, amount: 60 * 40 },
              { resource: Resources.FOOD, amount: 1500000 * 3 },
              { resource: Resources.WOOD, amount: 1500000 * 3 },
              { resource: Resources.STONE, amount: 1500000 * 3 },
            ]
          ],
        ]
      },
    ],
    informations: [
      "This event becomes available 14 days after the last milestone of the Chronicle of Harmony - 'Father Glowworm' has been completed."],
    details: [
      { type: "p", content: "The fate of this land is stirring once more.", space: true },
      { type: "p", content: "Event Schedule" },
      {
        type: "ol", items:
          [
            "This event takes place every 2 weeks and lasts for 24 hours.",
            "The first event will start 14 days after the Chronicle ends, and the second event will begin at a certain point at least 7 days afer the first event ends. Subsequent events will occure every 2 weeks.",
            "The Temple of Corruption can only be captured during the event period after the Chronicle ends."
          ], space: true
      },
      { type: "p", content: "Event Rewards" },
      {
        type: "ol", items:
          [
            "Rewards are given based on the War Points obtained during the event.",
            "Additional rewards are given based on the Territory Points of the alliance's territory surrounding the Temple of Corruption.",
            "Leaders who rank high and score at least 1,000,000 War Points during the event will receive amazing rewards."
          ], space: true
      },
      { type: "p", content: "War Points" },
      {
        type: "ol",
        items: [
          "War Points are earned after defeating other Leaders' troops in the territory surrounding the Temple of Corruption.",
          {
            content: "War Points are earned based on the number of wounded/retired benders inflicted on the enemy troops.",
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
          {
            content: "War Points are earned based on the number of wounded/retired benders caused by enemies.",
            children: [
              {
                type: "ul",
                items: [
                  "Tier 1 Unit: 1 points",
                  "Tier 2 Unit: 2 points",
                  "Tier 3 Unit: 6 points",
                  "Tier 4 Unit: 16 points",
                  "Tier 5 Unit: 40 points",
                  "Tier 6 Unit: 100 points",
                ]
              }
            ]
          },
          "Event points are earned from the time of login after the event starts."
        ],
        space: true
      },
      { type: "p", content: "Territories surrounding the Temple of Corruption" },
      {
        type: "ol",
        items: [
          {
            content: "War Points can be earned in the following territories:",
            children: [
              {
                type: "ul",
                items: [
                  "Lv.4 Gate and surrounding territory",
                  "Lv.3 Base and surrounding territory",
                  "Sanctuary and surrounding territory",
                  "Temple of Corruption and surrounding territory",
                ]
              }
            ]
          },
          {
            content: "At the end of the event, the Territory Points earned by the alliance for the occupied and restored territories are as follows:",
            children: [
              {
                type: "ul",
                items: [
                  "Lv4 Gate: 1500 points each",
                  "Lv3 Base: 300 points each",
                  "Sanctuary: 1500 points each",
                  "Temple of Corruption: 10,000 points",
                ]
              }
            ]
          }
        ],
        space: true
      },
      { type: "p", content: "Caution" },
      {
        type: "ul", items: [
          "The Guardian of Harmony cannot be used during the Temple War."
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-03" },
    ],
    image: "temple.png"
  }