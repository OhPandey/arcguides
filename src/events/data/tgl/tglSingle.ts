import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const tglSingle: Omit<Event, "type"> = {
  id: "tgl-single",
  name: "The Greatest Leader (Single Server)",
  description: "All the leaders in the world wills trive with all their might for rankings.",
  duration: 5,
  repeat: 14,
  seedStartDate: {
    SEED_A: "2026-04-06",
    SEED_B: "2026-04-01",
    SEED_C: "2026-04-08",
  },
  tasks: [
    {
      title: "Stage 1: Gathering/Research/Bender Recruitment",
      headers: ["Task", "Reward"],
      rows: [
        [
          "Gather 100,000 Resources from the Field",
          [
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.FOOD, amount: 50000 },
            { resource: Resources.WOOD, amount: 50000 }
          ]
        ],
        [
          "Gather 300,000 Resources from the Field",
          [
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.FOOD, amount: 50000 * 2 },
            { resource: Resources.WOOD, amount: 50000 * 2 }
          ]
        ],
        [
          "Gather 500,000 Resources from the Field",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.FOOD, amount: 50000 * 3 },
            { resource: Resources.WOOD, amount: 50000 * 3 }
          ]
        ],
        [
          "Increase your Power by 30,000 with Research and Bender Recruitment",
          [
            { resource: Resources.GEM, amount: 50 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 }
          ]
        ],
        [
          "Increase your Power by 60,000 with Research and Bender Recruitment",
          [
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Increase your Power by 90,000 with Research and Bender Recruitment",
          [
            { resource: Resources.GEM, amount: 200 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ]
      ]
    },
    {
      title: "Stage 2: Recruitment",
      headers: ["Task", "Reward"],
      rows: [
        [
          "Recruit 1,000 Tier 2 or Higher Benders",
          [
            { resource: Resources.GEM, amount: 30 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 5 }
          ]
        ],
        [
          "Recruit 3,000 Tier 2 or Higher Benders",
          [
            { resource: Resources.GEM, amount: 60 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 }
          ]
        ],
        [
          "Recruit 6,000 Tier 2 or Higher Benders",
          [
            { resource: Resources.GEM, amount: 90 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 5 * 15 }
          ]
        ],
        [
          "Recruit 12,000 Tier 2 or Higher Benders",
          [
            { resource: Resources.GEM, amount: 120 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Recruit 18,000 Tier 2 or Higher Benders",
          [
            { resource: Resources.GEM, amount: 150 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 3 }
          ]
        ],
        [
          "Recruit 25,000 Tier 2 or Higher Benders",
          [
            { resource: Resources.GEM, amount: 200 },
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 5 }
          ]
        ]
      ]
    },
    {
      title: "Stage 3: Hero Growth",
      headers: ["Task", "Reward"],
      rows: [
        [
          "Use 10 Silver Scrolls",
          [
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 5 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Use 10 Golden Scrolls",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 5 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ],
        [
          "Level Up 1 Hero Skill",
          [
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Level Up 3 Hero Skills",
          [
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 3 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ],
        [
          "Rank Up 1 Hero",
          [
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 3 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Rank Up 3 Heros",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 3 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ],
      ]
    },
    {
      title: "Stage 4: Defeated Shatered Skulls/Destroy Shattered Skulls' Fortress/Construction/Bender Recruitment",
      headers: ["Task", "Reward"],
      rows: [
        [
          "Defeat 10 Shattered Skulls",
          [
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 1 }
          ]
        ],
        [
          "Defeat 20 Shattered Skulls",
          [
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 3 }
          ]
        ],
        [
          "Destroy 2 Shattered Skulls' Fortresses",
          [
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 2 }
          ]
        ],
        [
          "Destroy 4 Shattered Skulls' Fortresses",
          [
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
            { resource: Resources.SEAL_OF_SOLIDARITY, amount: 5 }
          ]
        ],
        [
          "Increase Power by 30,000 with Construction and Bender Recruitment",
          [
            { resource: Resources.GEM, amount: 50 },
            { resource: Resources.SPIRIT_SHARD_EPIC, amount: 3 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Increase Power by 60,000 with Construction and Bender Recruitment",
          [
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ]
      ]
    },
    {
      title: "Stage 5: Increase Total Combat Power",
      headers: ["Task", "Reward"],
      rows: [
        [
          "Increase Power by 40,000**",
          [
            { resource: Resources.GEM, amount: 50 },
            { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 25 }
          ]
        ],
        [
          "Increase Power by 80,000**",
          [
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
            { resource: Resources.SILVER_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 25 * 2 }
          ]
        ],
        [
          "Increase Power by 120,000**",
          [
            { resource: Resources.GEM, amount: 150 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 25 * 3 }
          ]
        ],
        [
          "Increase Power by 180,000**",
          [
            { resource: Resources.GEM, amount: 200 },
            { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ],
        [
          "Increase Power by 240,000**",
          [
            { resource: Resources.GEM, amount: 250 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 * 3 }
          ]
        ],
        [
          "Increase Power by 300,000**",
          [
            { resource: Resources.GEM, amount: 300 },
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
            { resource: Resources.GOLDEN_SCROLL, amount: 1 },
            { resource: Resources.SPEEDUP, amount: 60 * 5 }
          ]
        ]
      ]
    },
  ],
  rewards: [
    {
      title: "Daily Reward",
      headers: ["Rank", "Reward"],
      rows: [
        [
          "1",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10, disclaimer: "*" },
            { resource: Resources.GEM, amount: 500 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 100 },
            { resource: Resources.FOOD, amount: 50000 * 30 },
            { resource: Resources.WOOD, amount: 50000 * 30 },
            { resource: Resources.STONE, amount: 50000 * 30 }
          ]
        ],
        [
          "2",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5, disclaimer: "*" },
            { resource: Resources.GEM, amount: 300 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 80 },
            { resource: Resources.FOOD, amount: 50000 * 25 },
            { resource: Resources.WOOD, amount: 50000 * 25 },
            { resource: Resources.STONE, amount: 50000 * 25 }
          ]
        ],
        [
          "3",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2, disclaimer: "*" },
            { resource: Resources.GEM, amount: 200 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 60 },
            { resource: Resources.FOOD, amount: 50000 * 20 },
            { resource: Resources.WOOD, amount: 50000 * 20 },
            { resource: Resources.STONE, amount: 50000 * 20 }
          ]
        ],
        [
          "4-5",
          [
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 40 },
            { resource: Resources.FOOD, amount: 50000 * 15 },
            { resource: Resources.WOOD, amount: 50000 * 15 },
            { resource: Resources.STONE, amount: 50000 * 15 }
          ]
        ],
        [
          "6-10",
          [
            { resource: Resources.GEM, amount: 50 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 30 },
            { resource: Resources.FOOD, amount: 50000 * 10 },
            { resource: Resources.WOOD, amount: 50000 * 10 },
            { resource: Resources.STONE, amount: 50000 * 10 }
          ]
        ],
        [
          "11-15",
          [
            { resource: Resources.GEM, amount: 40 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 20 },
            { resource: Resources.FOOD, amount: 50000 * 5 },
            { resource: Resources.WOOD, amount: 50000 * 5 },
            { resource: Resources.STONE, amount: 50000 * 5 }
          ]
        ],
        [
          "16-20",
          [
            { resource: Resources.GEM, amount: 30 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 10 },
            { resource: Resources.FOOD, amount: 50000 * 4 },
            { resource: Resources.WOOD, amount: 50000 * 4 },
            { resource: Resources.STONE, amount: 50000 * 4 }
          ]
        ],
        [
          "21-25",
          [
            { resource: Resources.GEM, amount: 20 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 5 },
            { resource: Resources.FOOD, amount: 50000 * 3 },
            { resource: Resources.WOOD, amount: 50000 * 3 },
            { resource: Resources.STONE, amount: 50000 * 3 }
          ]
        ],
        [
          "26-50",
          [
            { resource: Resources.GEM, amount: 10 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 3 },
            { resource: Resources.FOOD, amount: 50000 * 2 },
            { resource: Resources.WOOD, amount: 50000 * 2 },
            { resource: Resources.STONE, amount: 50000 * 2 }
          ]
        ],
        [
          "50-100",
          [
            { resource: Resources.GEM, amount: 5 },
            { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 2 },
            { resource: Resources.FOOD, amount: 50000 },
            { resource: Resources.WOOD, amount: 50000 },
            { resource: Resources.STONE, amount: 50000 }
          ]
        ]
      ]
    },
    {
      title: "Overall Reward",
      headers: ["Rank", "Reward"],
      rows: [
        [
          "1",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 200, disclaimer: "*" },
            { resource: Resources.GEM, amount: 2000 },
            { resource: Resources.SPEEDUP, amount: 60 * 30 },
            { resource: Resources.FOOD, amount: 50000 * 100 },
            { resource: Resources.WOOD, amount: 50000 * 100 },
            { resource: Resources.STONE, amount: 50000 * 100 }
          ]
        ],
        [
          "2",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 150, disclaimer: "*" },
            { resource: Resources.GEM, amount: 1500 },
            { resource: Resources.SPEEDUP, amount: 60 * 25 },
            { resource: Resources.FOOD, amount: 50000 * 80 },
            { resource: Resources.WOOD, amount: 50000 * 80 },
            { resource: Resources.STONE, amount: 50000 * 80 }
          ]
        ],
        [
          "3",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 100, disclaimer: "*" },
            { resource: Resources.GEM, amount: 1000 },
            { resource: Resources.SPEEDUP, amount: 60 * 20 },
            { resource: Resources.FOOD, amount: 50000 * 70 },
            { resource: Resources.WOOD, amount: 50000 * 70 },
            { resource: Resources.STONE, amount: 50000 * 70 }
          ]
        ],
        [
          "4-5",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 70, disclaimer: "*" },
            { resource: Resources.GEM, amount: 700 },
            { resource: Resources.SPEEDUP, amount: 60 * 15 },
            { resource: Resources.FOOD, amount: 50000 * 60 },
            { resource: Resources.WOOD, amount: 50000 * 60 },
            { resource: Resources.STONE, amount: 50000 * 60 }
          ]
        ],
        [
          "6-10",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 50, disclaimer: "*" },
            { resource: Resources.GEM, amount: 500 },
            { resource: Resources.SPEEDUP, amount: 60 * 12 },
            { resource: Resources.FOOD, amount: 50000 * 50 },
            { resource: Resources.WOOD, amount: 50000 * 50 },
            { resource: Resources.STONE, amount: 50000 * 50 }
          ]
        ],
        [
          "11-15",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30, disclaimer: "*" },
            { resource: Resources.GEM, amount: 300 },
            { resource: Resources.SPEEDUP, amount: 60 * 10 },
            { resource: Resources.FOOD, amount: 50000 * 40 },
            { resource: Resources.WOOD, amount: 50000 * 40 },
            { resource: Resources.STONE, amount: 50000 * 40 }
          ]
        ],
        [
          "16-20",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20, disclaimer: "*" },
            { resource: Resources.GEM, amount: 200 },
            { resource: Resources.SPEEDUP, amount: 60 * 8 },
            { resource: Resources.FOOD, amount: 50000 * 30 },
            { resource: Resources.WOOD, amount: 50000 * 30 },
            { resource: Resources.STONE, amount: 50000 * 30 }
          ]
        ],
        [
          "21-25",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10, disclaimer: "*" },
            { resource: Resources.GEM, amount: 100 },
            { resource: Resources.SPEEDUP, amount: 60 * 6 },
            { resource: Resources.FOOD, amount: 50000 * 20 },
            { resource: Resources.WOOD, amount: 50000 * 20 },
            { resource: Resources.STONE, amount: 50000 * 20 }
          ]
        ],
        [
          "26-50",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5, disclaimer: "*" },
            { resource: Resources.GEM, amount: 50 },
            { resource: Resources.SPEEDUP, amount: 60 * 4 },
            { resource: Resources.FOOD, amount: 50000 * 10 },
            { resource: Resources.WOOD, amount: 50000 * 10 },
            { resource: Resources.STONE, amount: 50000 * 10 }
          ]
        ],
        [
          "50-100",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2, disclaimer: "*" },
            { resource: Resources.GEM, amount: 20 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 },
            { resource: Resources.FOOD, amount: 50000 * 5 },
            { resource: Resources.WOOD, amount: 50000 * 5 },
            { resource: Resources.STONE, amount: 50000 * 5 }
          ]
        ]
      ]
    }
  ],
  disclaimer: '* This is not a generic Legendary Spirit Shard. The Legendary Spirit Shard obtained depends on the current hero rotation (See information box above).\n** Hero Power is excluded',
  tips: [
    "Prepare your researches (Stage I), recruitments (Stage II) and constructions (Stage IV) in advance so you can immediately start earning points once the event begins.",
    "During the first three days, the [Wheel of Fate](wheel-of-fate) event is available and can provide up to 15M points, which are otherwise difficult to obtain. For highly competitive players, this is a must-buy.",
    "The event is usually very competitive. Budget and free-to-play players should aim for at least Rank 50, which rewards 5 Spirit Shards. Reaching this milestone in two events is enough to unlock the hero.",
    "Even after the event ends, the hero can still be obtained later through *Daily Deals* in the shop. Missing the event will not permanently lock you out of acquiring the hero.",
    "The first TGL after the start of a new cycle is typically the most competitive, as many players compete to max shards for newly released heroes. If obtaining the hero immediately is not a priority, consider skipping the first TGL and competing in the second or third instead.",
    "**For newer servers only**: save all Hero Spirit Shards and Scrolls for Stage III.",
  ],
  details: [
    { type: "p", content: "Determine the greatest leader in the world." },
    { type: "p", content: "Do your best to prove that you are the greatest leader!", space: true },
    {
      type: "ol", items: [
        "The event will take place every two weeks for a duration of 5 days.",
        "Each day during the event period, a different type of mission will be given.",
        "Daily rankings will be determined based on the scores gained according to the scoring rules.",
        "The strongest leader in the world is selected through the 'Overall Rank' that integrates all points accumulated during the event period.",
        "Leaders who achieve a ranking position will receive amazing awards."
      ], space: true
    },
    { type: "p", content: "Power gained from Construction is only applied while the leader is online.", space: true },
    { type: "p", content: "Event Rules:", space: true },
    { type: "p", content: "Day 1 - Resource Gathering/Increase Power with Research or Bender Recruitment", space: true },
    {
      type: "ul", items: [
        "Per gathering 100 Food on the field: 3 Points",
        "Per gathering 100 Stones on the field: 3 Points",
        "Per gathering 50 Gold on the field: 3 Points",
        "Increase Power by 1 with Research or Bender Recruitment: 25 Points",
        "Per 1 Lucky Ticket: 150,000 points"
      ], space: true
    },
    { type: "p", content: "Day 2 - Bender Recruitment", space: true },
    {
      type: "ul", items: [
        "Per recruiting 1 bender (Tier-1): 25 Points",
        "Per recruiting 1 bender (Tier-2): 50 Points",
        "Per recruiting 1 bender (Tier-3): 75 Points",
        "Per recruiting 1 bender (Tier-4): 100 Points",
        "Per recruiting 1 bender (Tier-5): 150 Points",
        "Per recruiting 1 bender (Tier-6): 350 Points",
        "Per 1 Lucky Ticket: 150,000 points"
      ], space: true
    },
    { type: "p", content: "Day 3 - Hero Growth", space: true },
    {
      type: "ul", items: [
        "Use Silver Scroll: 750 points",
        "Use Golden Scroll: 1,500 points",
        "Use Rare Hero Spirit Shard: 250 points",
        "Use Epic Hero Spirit Shard: 1,250 points",
        "Use Legendary Hero Spirit Shard: 50,000 points",
        "Use Rare Hero Spirit Badge: 250 points",
        "Use Epic Hero Spirit Badge: 1,250 points",
        "Use Legendary Hero Spirit Badge: 50,000 points",
        "Per 1 Lucky Ticket: 150,000 points"
      ], space: true
    },
    { type: "p", content: "Day 4 - Defeat Shattered Skulls/Increase Power with Construction or Bender Recruitment", space: true },
    {
      type: "ul", items: [
        "Defeat Shattered Skull Levels 1-5: 1,500 Points",
        "Defeat Shattered Skull Levels 6-10: 1,800 Points",
        "Defeat Shattered Skull Levels 11-15: 2,100 Points",
        "Defeat Shattered Skull Levels 16-20: 2,400 Points",
        "Defeat Shattered Skull Levels 21-25: 2,700 Points",
        "Destroy Shattered Skulls' Fortress Level 1: 10,000 Points",
        "Destroy Shattered Skulls' Fortress Level 2: 12,000 Points",
        "Destroy Shattered Skulls' Fortress Level 3: 14,000 Points",
        "Destroy Shattered Skulls' Fortress Level 4: 16,000 Points",
        "Destroy Shattered Skulls' Fortress Level 5: 18,000 Points",
        "Destroy Shattered Skulls' Fortress Level 6: 20,000 Points",
        "Increase Power by 1 with Construction or Bender Recruitment: 25 Points"
      ], space: true
    },
    { type: "p", content: "Day 5 - Increase Power" },
    { type: "p", content: "Increase Power by 1: 20 Points", space: true },
    { type: "p", content: "(Hero Power Excluded)", space: true },
    { type: "quotedate", author: "AGN Games", date: "2026-04-01" }
  ],
  informations: [
    "For the first 6 times, The Greatest Leader (TGL) only takes place on **your server**, after that the event will become [cross-server](tgl-crossserver).",
    "The hero rotates after **every third event**.\nThe rotation for The Greatest Leader (Single Server) is **Aang → Amon**.",
  ],
  image: "tgl.png"
}