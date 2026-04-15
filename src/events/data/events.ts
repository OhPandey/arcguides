import { Event } from "../type/event"
import * as Resources from "../../shared/resources"

export const events: Event[] = [
  {
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
    type: "TGL",
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
              { resource: Resources.SPEEDUP, amount: 60 * 2 ^ 3 }
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
      "You can prepare your recruitments, researches, and constructions in advance so that once the event starts, you can immediately gain points.",
      "During the first three days, the [Wheel of Fate](wheel-of-fate) event runs and gives you up to 15M points, which is otherwise very hard to achieve. If you are a top competing player, this is a must-buy.",
      "This event can be quite competitive. If you're a budget player (or free-to-play), try to focus on reaching at least Rank 50, which will grant you 5 Spirit Shards. After two events, you can obtain the hero.",
      "Keep in mind that after the event ends, you can still get the hero under *Daily Deals* in the shop. So if you miss out on the event or can't compete, you can still obtain the hero later!\n This **is not** a Fear Of Missing Out (FOMO) event.",
      "**For newer servers only**: save up all your Hero Spirit Shards and Scrolls for Day 3 of the event.",
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
    ]
  },
  {
    id: "tgl-crossserver",
    name: "The Greatest Leader (Cross Server)",
    description: "Do your best to prove that you are the greatest leader!",
    duration: 5,
    repeat: 14,
    seedStartDate: {
      SEED_A: "2026-04-06",
      SEED_B: "2026-04-01",
      SEED_C: "2026-04-08",
    },
    type: "TGL_CROSSSERVER",
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
              { resource: Resources.SPEEDUP, amount: 60 * 2 ^ 3 }
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
          ["1", "10 Legendary Spirit Shards*, 500 Gems, 100,000 Experience, 1,500,000 Food, 1,500,000 Wood, 1,500,000 Stone"],
          ["2", "5 Legendary Spirit Shards*, 300 Gems, 80,000 Experience, 1,250,000 Food, 1,250,000 Wood, 1,250,000 Stone"],
          ["3", "2 Legendary Spirit Shards*, 200 Gems, 60,000 Experience, 1,000,000 Food, 1,000,000 Wood, 1,000,000 Stone"],
          ["4-5", "100 Gems, 40,000 Experience, 750,000 Food, 750,000 Wood, 750,000 Stone"],
          ["6-10", "50 Gems, 30,000 Experience, 500,000 Food, 500,000 Wood, 500,000 Stone"],
          ["11-15", "40 Gems, 20,000 Experience, 250,000 Food, 250,000 Wood, 250,000 Stone"],
          ["16-20", "30 Gems, 10,000 Experience, 200,000 Food, 200,000 Wood, 200,000 Stone"],
          ["21-25", "20 Gems, 5,000 Experience, 150,000 Food, 150,000 Wood, 150,000 Stone"],
          ["26-50", "10 Gems, 3,000 Experience, 100,000 Food, 100,000 Wood, 100,000 Stone"],
          ["50-100", "5 Gems, 2,000 Experience, 50,000 Food, 50,000 Wood, 50,000 Stone"],
        ]
      },
      {
        title: "Overall Reward",
        headers: ["Rank", "Reward"],
        rows: [
          ["1", "200 Legendary Spirit Shards*, 2,000 Gems, 1,800m Speedup, 5,000,000 Food, 5,000,000 Wood, 5,000,000 Stone"],
          ["2", "150 Legendary Spirit Shards*, 1,500 Gems, 1,500m Speedup, 4,000,000 Food, 4,000,000 Wood, 4,000,000 Stone"],
          ["3", "100 Legendary Spirit Shards*, 1,000 Gems, 1,200m Speedup, 3,500,000 Food, 3,500,000 Wood, 3,500,000 Stone"],
          ["4-5", "70 Legendary Spirit Shards*, 700 Gems, 900m Speedup, 3,000,000 Food, 3,000,000 Wood, 3,000,000 Stone"],
          ["6-10", "50 Legendary Spirit Shards*, 500 Gems, 720m Speedup, 2,500,000 Food, 2,500,000 Wood, 2,500,000 Stone"],
          ["11-15", "30 Legendary Spirit Shards*, 300 Gems, 600m Speedup, 2,000,000 Food, 2,000,000 Wood, 2,000,000 Stone"],
          ["16-20", "20 Legendary Spirit Shards*, 200 Gems, 480m Speedup, 1,500,000 Food, 1,500,000 Wood, 1,500,000 Stone"],
          ["21-25", "10 Legendary Spirit Shards*, 100 Gems, 360m Speedup, 1,000,000 Food, 1,000,000 Wood, 1,000,000 Stone"],
          ["26-50", "5 Legendary Spirit Shards*, 50 Gems, 240m Speedup, 500,000 Food, 500,000 Wood, 500,000 Stone"],
          ["50-100", "2 Legendary Spirit Shards*, 20 Gems, 120m Speedup, 250,000 Food, 250,000 Wood, 250,000 Stone"],
        ]
      }
    ],
    disclaimer: '* This is not a generic Legendary Spirit Shard. The Legendary Spirit Shard obtained depends on the current hero rotation (See information box above).\n** Hero Power is excluded',
    tips: [
      "You can prepare your recruitments, researches, and constructions in advance so that once the event starts, you can immediately gain points.",
      "During the first three days, the [Wheel of Fate](wheel-of-fate) event runs and gives you up to 15M points, which is otherwise very hard to achieve. If you are a top competing player, this is a must-buy.",
      "This event can be quite competitive. If you're a budget player (or free-to-play), try to focus on reaching at least Rank 50, which will grant you 5 Spirit Shards. After two events, you can obtain the hero.",
      "Keep in mind that after the event ends, you can still get the hero under *Daily Deals* in the shop. So if you miss out on the event or can't compete, you can still obtain the hero later!\n This **is not** a Fear Of Missing Out (FOMO) event.",
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
          "Increase Power by 1 with Research or ebnder Recruitment: 25 Points",
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
          "use Golden Scroll: 1,500 points",
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
      "The hero rotates after **every third event**.\nThe rotation for The Greatest Leader (Cross Server) is **Yangchen → Roku → Kuruk → Zaheer → Kuivra → Jinora → Desna & Eska → Opal**.",
    ],
    wip: true
  },
  {
    id: "beyond-limits",
    name: "Beyond Limits",
    description: "Keep trying and strive to surpass your limits!",
    duration: 1,
    repeat: "Unknown",  // IS NOT 2 weeks
    startDate: "2026-04-01",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Increase your Power by 60,000*",
            [
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.SPEEDUP, amount: 25 },
              { resource: Resources.FOOD, amount: 150000 },
              { resource: Resources.WOOD, amount: 150000 },
              { resource: Resources.STONE, amount: 150000 }
            ]
          ],
          [
            "Increase your Power by 120,000*",
            [
              { resource: Resources.GEM, amount: 150 },
              { resource: Resources.SPEEDUP, amount: 25 * 2 },
              { resource: Resources.FOOD, amount: 150000 * 2 },
              { resource: Resources.WOOD, amount: 150000 * 2 },
              { resource: Resources.STONE, amount: 150000 * 2 }
            ]
          ],
          [
            "Increase your Power by 240,000*",
            [
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.FOOD, amount: 150000 * 3 },
              { resource: Resources.WOOD, amount: 150000 * 3 },
              { resource: Resources.STONE, amount: 150000 * 3 }
            ]
          ],
          [
            "Increase your Power by 360,000*",
            [
              { resource: Resources.GEM, amount: 250 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.FOOD, amount: 150000 * 4 },
              { resource: Resources.WOOD, amount: 150000 * 4 },
              { resource: Resources.STONE, amount: 150000 * 4 }
            ]
          ],
          [
            "Increase your Power by 480,000*",
            [
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.SPEEDUP, amount: 60 * 4 },
              { resource: Resources.FOOD, amount: 150000 * 5 },
              { resource: Resources.WOOD, amount: 150000 * 5 },
              { resource: Resources.STONE, amount: 150000 * 5 }
            ]
          ],
          [
            "Increase your Power by 600,000*",
            [
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
              { resource: Resources.FOOD, amount: 150000 * 10 },
              { resource: Resources.WOOD, amount: 150000 * 10 },
              { resource: Resources.STONE, amount: 150000 * 10 }
            ]
          ]
        ]
      }
    ],
    disclaimer: "* Excluding Hero Power.",
    tips: [],
    details: [
      { type: "p", content: "\"If I try, I fail. If I don't try, I'm never going to get it.\" - Aang" },
      { type: "p", content: "Keep trying and strive to surpass your limits!", space: true },
      {
        type: "ol", items: [
          "Increase your Power to recieve higher rewards.",
          "This event will take place for one day.",
        ], space: true
      },
      { type: "quotedate", author: "AGN Games", date: "2026-04-01" }
    ],
  },
  {
    id: "unbreakable-will",
    name: "Unbreakable Will",
    description: "What matters is an unyielding determination!",
    duration: 3,
    repeat: 14,
    startDate: "2026-04-01",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Use 300 AP",
            [
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Use 1,000 AP",
            [
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
              { resource: Resources.FOOD, amount: 10000 * 3 },
              { resource: Resources.WOOD, amount: 10000 * 3 },
              { resource: Resources.STONE, amount: 10000 * 3 }
            ]
          ],
          [
            "Gather 20,000 Resources in the City",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 + 5 + 5 }
            ]
          ],
          [
            "Gather 100,000 Resources in the City",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 3 + 5 * 3 + 5 * 3 }
            ]
          ],
          [
            "Recruit 1,000 Benders",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Recruit 2,000 Benders",
            [
              { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 3 },
              { resource: Resources.WOOD, amount: 10000 * 3 },
              { resource: Resources.STONE, amount: 10000 * 3 }
            ]
          ],
          [
            "Recruit 6,000 Benders",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 50000 },
              { resource: Resources.WOOD, amount: 50000 },
              { resource: Resources.STONE, amount: 50000 }
            ]
          ],
        ]
      }
    ],
    details: [
      { type: "p", content: "What matters is an unyielding determination!", space: true },
      {
        type: "ol", items: [
          "You will get points by using AP, bender recruiting, producing resouces in town.",
          "Reach the goals and get rewards.",
          "This event resets at UTC 00:00"
        ], space: true
      },
      { type: "quotedate", author: "AGN Games", date: "2026-04-01" }
    ],
    informations: [
      "Unbreakable Will resets every day at 00:00 UTC, for 3 days.",
    ]
  },

  {
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
    type: "WHEEL",
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
      "The Wheel of Fate runs during [The Greatest Leader](tgl-single). You can get up to 15M points each day by using all of your Lucky Tickets, which gives you an incredible boost for TGL.",
    ],
    informations: [
      "During the Wheel of Fate event, you can spin the wheel by using Lucky Tickets.",
      "The Wheel of Fate resets every day at 00:00 UTC, for 3 days.",
      "The hero rotates after **every third event**.\nThe rotation for the Wheel of Fate is **Uncle Iroh → King Bumi → Painted Lady Katara → Fire Nation Aang → Avatar Hunter Zuko → White Wolf Sokka → Mako → Lady Beifong Toph → Ozai**",]
  },

  {
    id: "harvest-season",
    name: "Harvest Season",
    description: "The seasons have turned, and harvest season is upon us.",
    duration: 2,
    repeat: 14,
    startDate: "2026-04-02",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Gather 200,000 Resources from the Field",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Gather 500,000 Resources from the Field",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 3 },
              { resource: Resources.WOOD, amount: 10000 * 3 },
              { resource: Resources.STONE, amount: 10000 * 3 }
            ]
          ],
          [
            "Gather 1,000,000 Resources from the Field",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 5 },
              { resource: Resources.WOOD, amount: 10000 * 5 },
              { resource: Resources.STONE, amount: 10000 * 5 }
            ]
          ],
          [
            "Purchase 5 items at the Trading Post",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 },
              { resource: Resources.AP, amount: 100 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 1 }
            ]
          ],
          [
            "Purchase 15 items at the Trading Post",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.AP, amount: 300 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 2 }
            ]
          ],
          [
            "Purchase 30 items at the Trading Post",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.AP, amount: 500 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 3 }
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "The seasons have turned, and harvest season is upon us. Gather abundant resources to build an outstanding city.", space: true },
      {
        type: "ol", items: [
          "Gather resources, purchase items at the Trading Post during the event period to earn points.",
          "Reach the goals and get rewards."
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ]
  },

  {
    id: "community",
    name: "Community",
    description: "Join our community.",
    duration: "Always",
    repeat: 0,
    type: "ALL_TIME",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Visit either Discord, X, Facebook, Instgram or TikTok", [{ resource: Resources.GEM, amount: 100 }]],
        ]
      }
    ],
    details: [
      { type: "p", content: "Community", space: true },
      { type: "p", content: "By joining our official community, you can keep up with the latest updates, events, and more inofrmation about the game. Enjoy Avatar Legends. Realms Collide with leaders from around the world!", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 4 and Chapter 4)."
    ]
  },

  {
    id: "website",
    name: "Official Website",
    description: "Visit our website.",
    duration: "Always",
    repeat: 0,
    type: "ALL_TIME",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Visit avatarrealmscollide.com", [{ resource: Resources.GEM, amount: 100 }]],
        ]
      }
    ],
    details: [
      { type: "p", content: "Official Website", space: true },
      { type: "p", content: "Visit our website for the latest game news, exclusive in-game currency, amazing gallery, and 100 free gems!", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 4 and Chapter 4)."
    ]
  },
  {
    id: "purrification",
    name: "Purrification",
    description: "Defeat the Shattered Skulls step by step to purify the land!",
    duration: "Always",
    repeat: 0,
    type: "ALL_TIME",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Defeat Shattered Skull - Level 1 Fuzhi",

            "100 Gems, 1x Epic Spirit Shard, 5x Rare Spirit Shard, 30m Speedup, 1x Lv 1. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 2 Toghrul", "100 Gems, 2x Epic Spirit Shard, 5x Rare Spirit Shard, 30m Speedup, 1x Lv 2. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 3 Fuzhi", "100 Gems, 3x Epic Spirit Shard, 5x Rare Spirit Shard, 30m Speedup, 1x Lv 3. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 4 Toghrul", "100 Gems, 4x Epic Spirit Shard, 5x Rare Spirit Shard, 30m Speedup, 1x Lv 4. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 5 Fuzhi", "100 Gems, 5x Epic Spirit Shard, 5x Rare Spirit Shard, 30m Speedup, 1x Lv 5. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 6 Fuzhi", "150 Gems, 6x Epic Spirit Shard, 5x Rare Spirit Shard, 60m Speedup, 1x Lv 6. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 7 Fuzhi", "150 Gems, 7x Epic Spirit Shard, 5x Rare Spirit Shard, 60m Speedup, 1x Lv 7. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 8 Toghrul", "150 Gems, 8x Epic Spirit Shard, 5x Rare Spirit Shard, 60m Speedup, 1x Lv 8. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 9 Fuzhi", "150 Gems, 9x Epic Spirit Shard, 5x Rare Spirit Shard, 60m Speedup, 1x Lv 9. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 10 Toghrul", "150 Gems, 10x Epic Spirit Shard, 5x Rare Spirit Shard, 60m Speedup, 1x Lv 10. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 11 Amur", "200 Gems, 1x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 11. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 12 Lushan", "200 Gems, 1x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 12. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 13 Amur", "200 Gems, 2x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 13. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 14 Lushan", "200 Gems, 2x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 14. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 15 Amur", "200 Gems, 3x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 15. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 16 Lushan", "250 Gems, 3x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 16. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 17 Amur", "250 Gems, 4x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 17. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 18 Lushan", "250 Gems, 4x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 18. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 19 Amur", "250 Gems, 5x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 19. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 20 <Missing>", "250 Gems, 5x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 20. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 21 <Missing>", "300 Gems, 6x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 21, Purification Event Chest"],
          ["Defeat Shattered Skull - Level 22 Kyro", "300 Gems, 6x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 22. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 23 Kyro", "300 Gems, 7x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 23. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 24 Kyro", "300 Gems, 7x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 24. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 25 Kyro", "300 Gems, 8x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 25. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 26 Chanyu", "500 Gems, 8x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 26. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 27 Chanyu", "500 Gems, 9x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 27. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 28 Chanyu", "500 Gems, 9x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 28. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 29 Chanyu", "500 Gems, 10x Legendary Spirit Shard, 5x Epic Spirit Shard, 120m Speedup, 1x Lv 29. Purification Event Chest"],
          ["Defeat Shattered Skull - Level 30 Chanyu", "500 Gems, 10x Legendary Spirit Badge, 5x Epic Spirit Badge, 120m Speedup, 1x Lv 30. Purification Event Chest"]
        ]
      }
    ],
    disclaimer: "This is a step-by-step task line. You must complete the previous step to unlock the next one.",
    tips: [
      "There is no need to rush this event. It is permanent.",
      "Depending on the server age, you may have to wait for milestones to unlock in the Chronicle of Harmony before you can defeat higher Shattered Skull enemies.",
      "Levels 26 to 30 require access to Zone 3, which is only available after reaching *Gate 3* in the Chronicle of Harmony, and your alliance must have conquered a Gate 3.",
      "You can attack with multiple troops. However, a single maxed-out troop is able to defeat all enemies in this event."
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 4 and Chapter 4)."
    ],
    details: [
      { type: "p", content: "The Shattered Skulls who follow Father Glowworm are gradually increasing in Power. You must build your strength, lead your benders and heroes, and defeat the Shattered Skulls step by step to purify the land.", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    wip: true
  },
  {
    id: "into-the-fray",
    name: "Into the Fray",
    description: "Get ready!",
    duration: 1,
    repeat: "Unregularly",
    type: "CHRONICLE",
    informations: [
      "This time-limited reminder event notifies you that an important milestone will soon unlock in your Chronicle of Harmony.",
    ],
    tips: [
      "Known Trigger of this event:\n- Level 1 Base\n- Level 2 Base\n- Level  3 Base\n- Level 1 Gate\n- Level 2 Gate\n- Level 3 Gate\n- Level 4 Gate\n- Altar\n- Sanctum\n- Shrine\n- Legacy\n- Sanctuary\n- Temple"
    ]
  },
  {
    id: "the-dominator",
    name: "The Dominator",
    description: "Build a frontline in the Rift to bring peace to the raging spirits. Alliance members, assemble!",
    duration: 30,
    repeat: 0,
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Participate in 1 Invasion",
            [
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.FORGE_COIN, amount: 2000 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 2 },
              { resource: Resources.VERDANT_SPLINTER, amount: 200 }
            ]
          ],
          [
            "Participate in 3 Invasions",
            [
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.FORGE_COIN, amount: 3000 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 5 },
              { resource: Resources.VERDANT_SPLINTER, amount: 500 }
            ]
          ],
          [
            "Participate in 5 Invasions",
            [
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.FORGE_COIN, amount: 5000 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 10 },
              { resource: Resources.VERDANT_SPLINTER, amount: 1000 }
            ]
          ],
        ]
      }
    ],
    details: [
      { type: "p", content: "Raging spirits are crossing over throught he Rift. You must stregthen yourself and collaborate with your alliance members to stop them.", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon joining an alliance."
    ]
  },
  {
    id: "avatar-day-festival",
    name: "Avatar Day Festival",
    description: "Complete the missions to earn Aang Cookies!",
    duration: 5,
    repeat: 28,
    seedStartDate: {
      SEED_A: "2026-03-30",
      SEED_B: "2026-04-01",
      SEED_B2: "2026-04-15",
      SEED_C: "2026-04-08",
      SEED_C2: "2026-04-21",
    },
    type: "BIWEEKLY",
    tasks: [
      {
        title: "Day 1 - I (Login)",
        headers: ["Task", "Reward"],
        rows: [
          ["Log in for 1 Day", "1x Avatar Cookie, 1,000 EXP, 10,000 Food, 10,000 Wood, 10,000 Stone"],
          ["Log in for 2 Days", "2x Avatar Cookie, 2,000 EXP, 20,000 Food, 20,000 Wood, 20,000 Stone"],
          ["Log in for 3 Days", "3x Avatar Cookie, 5,000 EXP, 30,000 Food, 30,000 Wood, 30,000 Stone"],
          ["Log in for 4 Days", "4x Avatar Cookie, 1x Silver Scroll, 40,000 Food, 40,000 Wood, 40,000 Stone"],
          ["Log in for 5 Days", "5x Avatar Cookie, 1x Golden Scroll, 50,000 Food, 50,000 Wood, 50,000 Stone"],


        ]
      },
      {
        title: "Day 1 - II (Recruitment)",
        headers: ["Task", "Reward"],
        rows: [
          ["Recruit 3,000 Benders", "1x Avatar Cookie, 60m Speedup, 50,000 Food, 50,000 Wood, 50,000 Stone"],
          ["Recruit 6,000 Benders", "3x Avatar Cookie, 120m Speedup, 150,000 Food, 150,000 Wood, 150,000 Stone"],
          ["Recruit 12,000 Benders", "5x Avatar Cookie, 1x Silver Scroll, 180m Speedup, 250,000 Food, 250,000 Wood, 250,000 Stone"],
          ["Recruit 20,000 Benders", "10x Avatar Cookie, 1x Golden Scroll, 300m Speedup, 500,000 Food, 500,000 Wood, 500,000 Stone"]
        ]
      },
      {
        title: "Day 2 - I (AP)",
        headers: ["Task", "Reward"],
        rows: [
          ["Use 500 AP", "1x Avatar Cookie, 5,000 EXP, 50,000 Food, 50,000 Wood, 50,000 Stone"],
          ["Use 1,000 AP", "3x Avatar Cookie, 1x Silver Scroll, 150,000 Food, 150,000 Wood, 150,000 Stone"],
          ["Use 2,000 AP", "5x Avatar Cookie, 1x Golden Scroll, 250,000 Food, 250,000 Wood, 250,000 Stone"]
        ]
      },
      {
        title: "Day 2 - II (Field resources)",
        headers: ["Task", "Reward"],
        rows: [
          ["Gather 100,000 Resources from the Field", "1x Avatar Cookie, 5,000 EXP, 75m Speedup"],
          ["Gather 200,000 Resources from the Field", "2x Avatar Cookie, 1x Silver Scroll, 150m Speedup"],
          ["Gather 400,000 Resources from the Field", "3x Avatar Cookie, 1x Golden Scroll, 225m Speedup"],
          ["Gather 800,000 Resources from the Field", "5x Avatar Cookie, 2x Golden Scroll, 360m Speedup"]
        ]
      },
      {
        title: "Day 3 - I (Construction)",
        headers: ["Task", "Reward"],
        rows: [
          ["Increase Power by 1,000 with Construction", "1x Avatar Cookie, 5,000 EXP, 75m Speedup"],
          ["Increase Power by 2,000 with Construction", "3x Avatar Cookie, 1x Silver Scroll, 180m Speedup"],
          ["Increase Power by 3,000 with Construction", "5x Avatar Cookie, 1x Golden Scroll, 360m Speedup"]
        ]
      },
      {
        title: "Day 3 - II (Expedition)",
        headers: ["Task", "Reward"],
        rows: [
          ["Complete 10 Expedition missions", "1x Avatar Cookie, 5,000 EXP, 50,000 Food, 50,000 Wood, 50,000 Stone"],
          ["Complete 20 Expedition missions", "3x Avatar Cookie, 1x Silver Scroll, 150,000 Food, 150,000 Wood, 150,000 Stone"],
          ["Complete 30 Expedition missions", "5x Avatar Cookie, 1x Golden Scroll, 250,000 Food, 250,000 Wood, 250,000 Stone"],
        ]
      },
      {
        title: "Day 4 - I (City resources)",
        headers: ["Task", "Reward"],
        rows: [
          ["Gather 10,000 Resources from the City", "1x Avatar Cookie, 1,000 EXP, 10,000 Food, 10,000 Wood, 10,000 Stone"],
          ["Gather 50,000 Resources from the City", "2x Avatar Cookie, 5,000 EXP, 30,000 Food, 30,000 Wood, 30,000 Stone"],
          ["Gather 100,000 Resources from the City", "3x Avatar Cookie, 1x Silver Scroll, 50,000 Food, 50,000 Wood, 50,000 Stone"],
          ["Gather 150,000 Resources from the City", "5x Avatar Cookie, 1x Golden Scroll, 150,000 Food, 150,000 Wood, 150,000 Stone"]
        ]
      },
      {
        title: "Day 4 - II (Research)",
        headers: ["Task", "Reward"],
        rows: [
          ["Increase Power by 1,500 with Research", "1x Avatar Cookie, 5,000 EXP, 75m Speedup"],
          ["Increase Power by 3,000 with Research", "3x Avatar Cookie, 1x Silver Scroll, 180m Speedup"],
          ["Increase Power by 5,000 with Research", "5x Avatar Cookie, 1x Golden Scroll, 360m Speedup"]
        ]
      },
      {
        title: "Day 5 - I (Shattered Skulls)",
        headers: ["Task", "Reward"],
        rows: [
          ["Defeat 5 Shattered Skulls", "1x Avatar Cookie, 5,000 EXP, 20,000 Food, 20,000 Wood, 20,000 Stone"],
          ["Defeat 10 Shattered Skulls", "3x Avatar Cookie, 10,000 EXP, 50,000 Food, 50,000 Wood, 50,000 Stone"],
          ["Defeat 20 Shattered Skulls", "5x Avatar Cookie, 1x Silver Scroll, 150,000 Food, 150,000 Wood, 150,000 Stone"],
          ["Defeat 30 Shattered Skulls", "7x Avatar Cookie, 1x Golden Scroll, 250,000 Food, 250,000 Wood, 250,000 Stone"]
        ]
      },
      {
        title: "Day 5 - II (Scrolls)",
        headers: ["Task", "Reward"],
        rows: [
          ["Use 5 Scrolls", "1x Avatar Cookie, 5,000 EXP, 30m Speedup"],
          ["Use 10 Scrolls", "3x Avatar Cookie, 1x Silver Scroll, 75m Speedup"],
          ["Use 15 Scrolls", "5x Avatar Cookie, 1x Golden Scroll, 180m Speedup"],
        ]
      }
    ],
    rewards: [
      {
        title: "Avatar Day Festival Exchange",
        headers: ["Aang Cookie", "Reward"],
        rows: [
          ["1", [{ resource: Resources.FOOD, amount: 50000 }]],
          ["1", [{ resource: Resources.WOOD, amount: 50000 }]],
          ["1", [{ resource: Resources.STONE, amount: 50000 }]],
          ["1", [{ resource: Resources.GOLD, amount: 25000 }]],
          ["1", [{ resource: Resources.SPEEDUP, amount: 60 }]],
          ["2", [{ resource: Resources.SPIRIT_SHARD_RARE, amount: 1 }]],
          ["2", [{ resource: Resources.SPIRIT_BADGE_RARE, amount: 1 }]],
          ["2", [{ resource: Resources.SILVER_SCROLL, amount: 1 }]],
          ["8", [{ resource: Resources.SPIRIT_SHARD_EPIC, amount: 25000 }]],
          ["10", [{ resource: Resources.RESET_TALENT, amount: 1 }]],
          ["10", [{ resource: Resources.GOLDEN_SCROLL, amount: 1 }]],
          ["30", [{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 }]],
          ["30", [{ resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 }]]
        ]
      }
    ],
    details: [
      { type: "p", content: "Join the festivites honoring avatars and enjoy amazing rewards!", space: true },
      {
        type: "ol", items:
          [
            "Different goals will be presented each day throughout the duration of the festival.",
            "Upon completing the goals, you will recieve [Aang Cookie].",
            "Collect [Aang Cookie] and exchange them at the [Avatar Day Festival Exchange] for amazing rewards."
          ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    tips: [
      "The event lasts for 5 days, but you can continue purchasing rewards for an additional day.",
      "You can receive a total of 117 Avatar Cookies throughout the event."
    ]
  },
  {
    id: "way-to-harmony",
    name: "Way to Harmony",
    description: "Acquire Coins of Harmony by clearing challenging missions!",
    duration: 5,
    repeat: 28,
    seedStartDate: {
      SEED_A: "2026-04-13",
      SEED_B: "2026-04-15",
      SEED_B2: "2026-04-01",
      SEED_C: "2026-04-21",
      SEED_C2: "2026-04-08",
    },
    type: "BIWEEKLY",
    tasks: [
      {
        title: "Day 1",
        headers: ["Task", "Reward"],
        rows: [
          [
            "Recruit 1,000 Benders",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Recruit 3,000 Benders",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 2 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 2 },
              { resource: Resources.FOOD, amount: 10000 * 2 },
              { resource: Resources.WOOD, amount: 10000 * 2 },
              { resource: Resources.STONE, amount: 10000 * 2 }
            ]
          ],
          [
            "Recruit 6,000 Benders",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 3 },
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 50000 },
              { resource: Resources.WOOD, amount: 50000 },
              { resource: Resources.STONE, amount: 50000 }
            ]
          ],
          [
            "Recruit 12,000 Benders",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 3 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 50000 * 2 },
              { resource: Resources.WOOD, amount: 50000 * 2 },
              { resource: Resources.STONE, amount: 50000 * 2 }
            ]
          ],
          [
            "Use 5 Scrolls",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 2 + 5 * 2 + 5 * 2 }
            ]
          ],
          [
            "Use 10 Scrolls",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 3 },
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
            ]
          ],
          [
            "Use 15 Scrolls",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 5 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
            ]
          ],
        ]
      },
      {
        title: "Day 2",
        headers: ["Task", "Reward"],
        rows: [
          [
            "Defeat 5 Shattered Skulls",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount:  5 * 2 + 5 * 2 + 5 * 2 }
            ]
          ],
          [
            "Defeat 10 Shattered Skulls",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 3 },
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount:  5 * 5 + 5 * 5 + 5 * 5 }
            ]
          ],
          [
            "Defeat 15 Shattered Skulls",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 5 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount:  60 + 60 + 60 }
            ]
          ],
          [
            "Send 1 airship",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Send 2 airships",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 3 },
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 2 },
              { resource: Resources.WOOD, amount: 10000 * 2 },
              { resource: Resources.STONE, amount: 10000 * 2 }
            ]
          ],
          [
            "Successfully raid 2 other airships",
            [
              { resource: Resources.COIN_OF_HARMONY, amount: 5 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 50000 },
              { resource: Resources.WOOD, amount: 50000 },
              { resource: Resources.STONE, amount: 50000 }
            ]
          ],
        ]
      }
    ],
    rewards: [
      {
        title: "Way to Harmony Exchange",
        headers: ["Coins of Harmony", "Reward"],
        rows: [
          [
            "1",
            [
              { resource: Resources.FOOD, amount: 50000 }
            ]
          ],
          [
            "1",
            [
              { resource: Resources.WOOD, amount: 50000 }
            ]
          ],
          [
            "1",
            [
              { resource: Resources.STONE, amount: 50000 }
            ]
          ],
          [
            "1",
            [
              { resource: Resources.GOLD, amount: 25000 }
            ]
          ],
          [
            "1",
            [
              { resource: Resources.SPEEDUP, amount: 60 }
            ]
          ],
          [
            "2",
            [
              { resource: Resources.SPIRIT_BADGE_RARE, amount: 1 }
            ]
          ],
          [
            "2",
            [
              { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 }
            ]
          ],
          [
            "2",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 }
            ]
          ],
          [
            "8",
            [
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 }
            ]
          ],
          [
            "8",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 }
            ]
          ],
          [
            "10",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 }
            ]
          ],
          [
            "10",
            [
              { resource: Resources.RESET_TALENT, amount: 1 }
            ]
          ],
          [
            "30",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 }
            ]
          ],
          [
            "30",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 }
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "Restore harmony to the world by completing various daily goals during the event!", space: true },
      {
        type: "ol", items: [
          "This event runs for 5 days.",
          "Different types fo goals will be revealed each day.",
          "Complete goals to earn [Harmony Coins]",
          "Collect [Harmony Coins] to trade for amazing rewards at the exchange Shop."
        ]
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-13" }
    ],
    wip: true
  },
  {
    id: "path-to-development",
    name: "Path to Development",
    description: "Upgrade the Town Hall and make your city more Powerful!",
    duration: "Always",
    repeat: 0,
    type: "ALL_TIME",
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
    wip: true
  },
  {
    id: "login",
    name: "Login Event",
    description: "Log in and get Legendary Airbender hero 'Bumi'!",
    duration: 30,
    repeat: 0,
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Log in for 1 Day",
            [
              { resource: Resources.GEM, amount: 100 }
            ]
          ],
          [
            "Log in for 2 Days",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10, disclaimer: "*" }
            ]
          ],
          [
            "Log in for 3 Days",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 5 }
            ]
          ],
          [
            "Log in for 4 Days",
            [
              { resource: Resources.SPEEDUP, amount: 720 }
            ]
          ],
          [
            "Log in for 5 Days",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
            ]
          ],
          [
            "Log in for 6 Days",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 10 }
            ]
          ],
          [
            "Log in for 4 Days",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20, disclaimer: "*" }
            ]
          ],
        ]
      }
    ],
    disclaimer: "* This is not a generic Legendary Spirit Shard. This is Legendary Spirit Shard: Bumi.",
    details: [
      { type: "p", content: "Welcome to Avatar Legends: Realms Collide!", space: true },
      {
        type: "ol", items: [
          "Log in every day for 7 days to get amazing rewards!",
          "This event lasts for 30 days!"
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 4 and Chapter 4)."
    ],
    tips: [
      "You do not need to log in consecutively. You only need to log in 7 times during the month-long event."
    ]
  },
  {
    id: "new-world",
    name: "New World Event",
    description: "Boost your Power to receive a limited Town Hall skin!",
    duration: 8,
    repeat: 0,
    type: "NEW_WORLD",
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
  },
  {
    id: "melt-the-candle",
    name: "Melt the Candle",
    description: "Who can melt the candle first?",
    duration: 2,
    startDate: "2026-04-10",
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Use 200min of Speedup items",
            [
              { resource: Resources.SPIRIT_SHARD_RARE, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 + 5 * 5 },
            ]
          ],
          [
            "Use 1,000min of Speedup items",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 + 60 },
            ]
          ],
          [
            "Use 3,000min of Speedup items",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 2 * 60 + 2 * 60 + 2 * 60 + 2 * 60 },
            ]
          ],
          [
            "Use 6,000min of Speedup items",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 3 * 60 + 3 * 60 + 3 * 60 + 3 * 60 },
            ]
          ],
          [
            "Use 12,000min of Speedup items",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 5 * 60 + 5 * 60 + 5 * 60 + 5 * 60 },
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
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30 },
              { resource: Resources.GEM, amount: 1000 },
              { resource: Resources.SPEEDUP, amount: 60 * 20 },
              { resource: Resources.FOOD, amount: 150000 * 10 },
              { resource: Resources.WOOD, amount: 150000 * 10 },
            ]
          ],
          [
            "2",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20 },
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.SPEEDUP, amount: 60 * 15 },
              { resource: Resources.FOOD, amount: 150000 * 8 },
              { resource: Resources.WOOD, amount: 150000 * 8 },
            ]
          ],
          [
            "3",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.SPEEDUP, amount: 60 * 10 },
              { resource: Resources.FOOD, amount: 150000 * 6 },
              { resource: Resources.WOOD, amount: 150000 * 6 },
            ]
          ],
          [
            "4-10",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
              { resource: Resources.FOOD, amount: 150000 * 4 },
              { resource: Resources.WOOD, amount: 150000 * 4 },
            ]
          ],
          [
            "11-20",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.FOOD, amount: 150000 * 3 },
              { resource: Resources.WOOD, amount: 150000 * 3 },
            ]
          ],
          [
            "21-50",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
              { resource: Resources.GEM, amount: 50 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.FOOD, amount: 150000 * 2 },
              { resource: Resources.WOOD, amount: 150000 * 2 },
            ]
          ],
          [
            "51-100",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
              { resource: Resources.GEM, amount: 20 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.FOOD, amount: 150000 },
              { resource: Resources.WOOD, amount: 150000 },
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "As time passes, the candle wax melts and drips. Who can melt the candle first?", space: true },
      {
        type: "ol", items: [
          "Ranks are determined based on the time value of speedup items used during the event period.",
          "Highly ranked leaders who earn a minimum of 1,000 will receive amazing rewards.",
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ]
  },
  {
    id: "build-strength",
    name: "Build Strength",
    description: "Strengthen your power through building upgrades, research and bender recruiting.",
    duration: 2,
    repeat: 14,
    startDate: "2026-04-03",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Increase Power by 120,000*",
            [
              { resource: Resources.SPIRIT_SHARD_RARE, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 100 },
            ]
          ],
          [
            "Increase Power by 240,000*",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 240 },
            ]
          ],
          [
            "Increase Power by 360,000*",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 480 },
            ]
          ],
          [
            "Increase Power by 480,000*",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 720 },
            ]
          ],
          [
            "Increase Power by 600,000*",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 1200 },
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
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30 },
              { resource: Resources.GEM, amount: 1000 },
              { resource: Resources.SPEEDUP, amount: 60 * 20 },
              { resource: Resources.FOOD, amount: 150000 * 10 },
              { resource: Resources.WOOD, amount: 150000 * 10 },
            ]
          ],
          [
            "2",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20 },
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.SPEEDUP, amount: 60 * 15 },
              { resource: Resources.FOOD, amount: 150000 * 8 },
              { resource: Resources.WOOD, amount: 150000 * 8 },
            ]
          ],
          [
            "3",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.SPEEDUP, amount: 60 * 10 },
              { resource: Resources.FOOD, amount: 150000 * 6 },
              { resource: Resources.WOOD, amount: 150000 * 6 },
            ]
          ],
          [
            "4-10",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
              { resource: Resources.FOOD, amount: 150000 * 4 },
              { resource: Resources.WOOD, amount: 150000 * 4 },
            ]
          ],
          [
            "11-20",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.FOOD, amount: 150000 * 3 },
              { resource: Resources.WOOD, amount: 150000 * 3 },
            ]
          ],
          [
            "21-50",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
              { resource: Resources.GEM, amount: 50 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.FOOD, amount: 150000 * 2 },
              { resource: Resources.WOOD, amount: 150000 * 2 },
            ]
          ],
          [
            "51-100",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
              { resource: Resources.GEM, amount: 20 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.FOOD, amount: 150000 },
              { resource: Resources.WOOD, amount: 150000 },
            ]
          ]
        ]
      }
    ],
    disclaimer: "* Hero Power is excluded.",
    details: [
      { type: "p", content: "Build your strength and create a magnificent city!", space: true },
      {
        type: "ol", items: [
          "Rankings are based on Power gained during the event period (Hero excluded).",
          "Leaders who earn at lesat 10,000 points and place in the rankings will receive amazing rewards.",
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-03" }
    ]
  },
  {
    id: "stay-focused",
    name: "Stay Focused",
    description: "Maintain your focus!",
    duration: 2,
    repeat: 14,
    startDate: "2026-04-04",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Gather 200,000 Resources from the Field",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 75 },
            ]
          ],
          [
            "Gather 500,000 Resources from the Field",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 150 },
            ]
          ],
          [
            "Gather 1,000,000 Resources from the Field",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 225 },
              { resource: Resources.CITY_RELOCATION_COMMON, amount: 1 },
            ]
          ],
          [
            "Complete 5 Expedition missions",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 },
            ]
          ],
          [
            "Complete 10 Expedition missions",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 3 * 10000 },
              { resource: Resources.WOOD, amount: 3 * 10000 },
              { resource: Resources.STONE, amount: 3 * 10000 },
            ]
          ],
          [
            "Complete 20 Expedition missions",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 5 * 10000 },
              { resource: Resources.WOOD, amount: 5 * 10000 },
              { resource: Resources.STONE, amount: 5 * 10000 },
              { resource: Resources.POWER_BOOST_RARE, amount: 1 },
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "Maintain your focus!", space: true },
      {
        type: "ol", items: [
          "Gather resources on the field, complete Expedition missions during the event period.",
          "Reach the goals and get rewards.",
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-03" }
    ]
  },
  {
    id: "first-anniversary",
    name: "1st Anniversary",
    description: "Participate in the 1st Anniversary: Traces of Memory event to earn amazing rewards.",
    duration: 12,
    repeat: 0,
    startDate: "2026-04-02",
    type: "UNIQUE",
    tasks: [
      {
        title: "First Anniversary Daily Rewards",
        headers: ["Task", "Reward"],
        rows: [
          ["Log in for 1 Day", [{ resource: Resources.LUCKY_DICE, amount: 10 }]],
          ["Log in for 2 Days", [{ resource: Resources.GOLDEN_SCROLL, amount: 5 }]],
          ["Log in for 3 Days", [{ resource: Resources.SACRED_FRUIT, amount: 10 }]],
          ["Log in for 4 Days", [{ resource: Resources.MYSTIC_ORB, amount: 5 }]],
          ["Log in for 5 Days", [{ resource: Resources.SPEEDUP, amount: 60 * 5 }]],
          ["Log in for 6 Days", [{ resource: Resources.GEM, amount: 200 }]],
          ["Log in for 7 Days", [{ resource: Resources.FRAME("Moment of Memories"), amount: 1 }]],
        ]
      },
      {
        title: "Firm Faith",
        headers: ["Task", "Reward"],
        rows: [
          ["Defeat Shattered Skulls (Daily Cap: 5)", [{ resource: Resources.SPECIAL_SUPPLY_BOX, amount: 1 }]],
          ["Harvest Resources (Daily Cap: 5)", [{ resource: Resources.SPECIAL_SUPPLY_BOX, amount: 1 }]],
          ["Use 480m Speedup (Repeatable)", [{ resource: Resources.SPECIAL_SUPPLY_BOX, amount: 1 }]],
          ["Use 50 Gems (Repeatable)", [{ resource: Resources.SPECIAL_SUPPLY_BOX, amount: 1 }]],
        ]
      },
      {
        title: "Limited Time Top-Up",
        headers: ["Task", "Reward"],
        rows: [
          [
            "Collect 500 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.SPEEDUP, amount: 60 * 4 },
            ]
          ],
          [
            "Collect 1,500 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.GEM, amount: 1500 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 + 60 * 5 + 60 * 5 },
            ]
          ],
          [
            "Collect 2,500 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.GEM, amount: 2000 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
            ]
          ],
          [
            "Collect 5,000 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.SACRED_FRUIT, amount: 50 },
              { resource: Resources.SPEEDUP, amount: 60 * 20 },
            ]
          ],
          [
            "Collect 10,000 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 30 },
              { resource: Resources.VERDANT_SPLINTER, amount: 2000 },
              { resource: Resources.SPEEDUP, amount: 60 * 20 },
            ]
          ],
          [
            "Collect 20,000 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 20 },
              { resource: Resources.SPEEDUP, amount: 60 * 60 + 60 * 20 + 60 * 20 },
            ]
          ],
          [
            "Collect 40,000 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 100 },
              { resource: Resources.PURIFIED_ESSENCE, amount: 100 },
              { resource: Resources.VERDANT_SPLINTER, amount: 10000 },
              { resource: Resources.SPEEDUP, amount: 60 * 100 },
            ]
          ],
        ]
      },
      {
        title: "Fragments of Life",
        description: "This has a 5x3 board layout.",
        headers: ["Board Position", "Task", "Reward"],
        rows: [
          [
            "1-1",
            "Login in for 1 Day",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 }
            ]
          ],
          [
            "1-2",
            "Complete 80 Expditions",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "1-3",
            "Recruit 30,000 Benders",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
            ]
          ],
          [
            "2-1",
            "Defeat 80 Shattered Skulls",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "2-2",
            "Increase Power by 100,000*",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
            ]
          ],
          [
            "2-3",
            "Purchase 80 items at the Trading Post",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "3-1",
            "Use 8,0000min of Speedup",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
            ]
          ],
          [
            "3-2",
            "Use 100 Scrolls",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "3-3",
            "Gather 3,000,000 Resources from the Field",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "4-1",
            "Destroy 10 Shattered Skull Fortresses",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
            ]
          ],
          [
            "4-2",
            "Use 5,000 Gems",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
            ]
          ],
          [
            "4-3",
            "Complete 30 Companion surveys",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "5-1",
            "Donate 200 to allinace research",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "5-2",
            "Win 25 arena fights",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 }
            ]
          ],
          [
            "5-3",
            "Collect 500 Top-Up Points (by purchasing bundles)",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 }
            ]
          ],
          [
            "1-4",
            "Complete 1-1, 1-2 and 1-3",
            [
              { resource: Resources.LUCKY_DICE, amount: 4 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "2-4",
            "Complete 2-1, 2-2 and 2-3",
            [
              { resource: Resources.LUCKY_DICE, amount: 4 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "3-4",
            "Complete 3-1, 3-2 and 3-3",
            [
              { resource: Resources.LUCKY_DICE, amount: 4 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "4-4",
            "Complete 4-1, 4-2 and 4-3",
            [
              { resource: Resources.LUCKY_DICE, amount: 4 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "5-4",
            "Complete 5-1, 5-2 and 5-3",
            [
              { resource: Resources.LUCKY_DICE, amount: 4 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "6-1",
            "Complete 1-1, 2-1, 3-1, 4-1, and 5-1",
            [
              { resource: Resources.LUCKY_DICE, amount: 5 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "6-2",
            "Complete 1-2, 2-2, 3-2, 4-2, and 5-2",
            [
              { resource: Resources.LUCKY_DICE, amount: 5 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "6-3",
            "Complete 1-3, 2-3, 3-3, 4-3, and 5-3",
            [
              { resource: Resources.LUCKY_DICE, amount: 5 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV5, amount: 1 }
            ]
          ],
          [
            "None",
            "Complete all missions",
            [
              { resource: Resources.LUCKY_DICE, amount: 20 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
              { resource: Resources.SACRED_FRUIT, amount: 10 },
              { resource: Resources.SACRED_DEW, amount: 10 }
            ]
          ],
        ]
      },
      {
        title: "Secret Tunnel",
        headers: ["Laps", "Reward"],
        rows: [
          [
            "10",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 2 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 20 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 10 }
            ]
          ],
          [
            "30",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 3 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 30 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 20 }
            ]
          ],
          [
            "60",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 40 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 30 }
            ]
          ],
          [
            "100",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 8 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 50 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 40 }
            ]
          ],
          [
            "200",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 12 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 12 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 70 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 60 }
            ]
          ],
          [
            "400",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 20 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 90 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 100 }
            ]
          ],
          [
            "700",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 30 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 150 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 200 }
            ]
          ],
          ["1000", [{ resource: Resources.TOWNHALL("1st Anniversary: Twilight"), amount: 1 }]]
        ]
      },
      {
        title: "Paths of Fate (Start: Day 2, Duration: 5 Days)",
        description: "At any given time, five random tasks are available. These tasks reset automatically once per day. When a task is completed, it is replaced by a new random task.\nAll five tasks can also be manually reset once per day for free. Subsequent resets require Gems, starting at 100 Gems, with the cost doubling for each additional reset.\n\n**This list is incomplete**",
        headers: ["Task", "Reward"],
        rows: [
          // Arena
          ["Win 1 Arena Battle", "10 S-coins"],
          ["Win 2 Arena Battles", "20 S-coins"],
          ["Win 4 Arena Battles", "40 S-coins"],

          // Airship
          ["Send 1 airship", "10 S-coins"],
          ["Send 3 airships", "20 S-coins"],
          ["Successfully raid 1 other airship", "10 S-coins"],
          ["Successfully raid 3 other airship", "20 S-coins"],

          // Alliance
          ["Help 5 alliance members", "10 S-coins"],
          ["Help 10 alliance members", "20 S-coins"],
          ["Help 20 alliance members", "40 S-coins"],
          ["Donate 5 times to alliance research", "10 S-coins"],
          ["Donate 10 times to alliance research", "20 S-coins"],
          ["Donate 20 times to alliance research", "40 S-coins"],

          // Companion
          ["Complete 1 Companion survey", "10 S-coins"],
          ["Complete 3 Companion surveys", "40 S-coins"],
          ["Bond with Companion 2 times", "10 S-coins"],
          ["Bond with Companion 4 times", "20 S-coins"],
          ["Skill Up Companion 1 time", "40 S-coins"],
          ["Level Up Companion 1 time", "40 S-coins"],

          // Speedups
          ["Use 200min of Speedup", "10 S-coins"],
          ["Use 600min of Speedup", "20 S-coins"],
          ["Use 1,200min of Speedup", "40 S-coins"],
          ["Use 2,500min of Speedup", "100 S-coins"],

          // Power Increase
          ["Increase Power by 2,000 (Excluding Hero Power)", "10 S-coins"],
          ["Increase Power by 5,000 (Excluding Hero Power)", "20 S-coins"],
          ["Increase Power by 10,000 (Excluding Hero Power)", "40 S-coins"],
          ["Increase Power by 20,000 (Excluding Hero Power)", "100 S-coins"],

          // Trading Post
          ["Purchase 2 items at the Trading Post", "10 S-coins"],
          ["Purchase 5 items at the Trading Post", "20 S-coins"],
          ["Purchase 10 items at the Trading Post", "40 S-coins"],
          ["Purchase 20 items at the Trading Post", "100 S-coins"],

          // Hero Upgrades
          ["Level Up a Hero Skill", "20 S-coins"],
          ["Rank Up a Hero", "20 S-coins"],
          ["Level Up 3 Heroes", "20 S-coins"],
          ["Enhance Gear 1 time", "20 S-coins"],
          ["Enhance Gear 2 times", "40 S-coins"],


          // Scrolls
          ["Use 5 Scrolls", "10 S-coins"],
          ["Use 10 Scrolls", "20 S-coins"],
          ["Use 20 Scrolls", "40 S-coins"],
          ["Use 30 Golden Scrolls", "100 S-coins"],

          // Mystic Ores
          ["Use 1 Mystic Ores at the Forge", "20 S-coins"],
          ["Use 5 Mystic Ores at the Forge", "100 S-coins"],

          // Troops
          ["Recruit 1,000 Tier 2 or Higher Benders", "10 S-coins"],
          ["Recruit 2,500 Tier 2 or Higher Benders", "20 S-coins"],
          ["Recruit 6,000 Tier 2 or Higher Benders", "40 S-coins"],
          ["Recruit 2,000 Tier 5 or Higher Benders", "40 S-coins"],
          ["Recruit 4,000 Tier 5 or Higher Benders", "100 S-coins"],

          // Gems
          ["Use 500 Gems", "20 S-coins"],
          ["Use 1,000 Gems", "40 S-coins"],
          ["Use 2,000 Gems", "100 S-coins"],

          // Avatar Trail
          ["Complete 1 Avatar Trail", "20 S-coins"],

          // Expedition
          ["Complete 6 Expedition missions", "40 S-coins"],

          // Construction
          ["Construct Upgrade 1 building", "40 S-coins"],

          // Research
          ["Complete 1 Research", "40 S-coins"],
        ]
      },
      {
        title: "Harvest of Bonds I (Start: Day 6, Duration: 2 Days)",
        headers: ["Task", "Reward"],
        rows: [
          [
            "Destroy 5 Shattered Skulls' Fortress",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 }
            ]
          ],
          [
            "Destroy 10 Shattered Skulls' Fortress",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 3 },
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 }
            ]
          ],
          [
            "Destroy 20 Shattered Skulls' Fortress",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 5 },
              { resource: Resources.SPIRIT_BADGE_EPIC, amount: 5 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 }
            ]
          ],
          [
            "Recruit 5,000 Tier 2 or Higher Benders",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 }
            ]
          ],
          [
            "Recruit 10,000 Tier 2 or Higher Benders",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 }
            ]
          ],
          [
            "Recruit 20,000 Tier 2 or Higher Benders",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.GOLDEN_SCROLL, amount: 2 },
              { resource: Resources.MYSTIC_ORB, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 }
            ]
          ],
        ]
      },
      {
        title: "Harvest of Bonds II (Start: Day 8: Duration: 2 Days)",
        headers: ["Task", "Reward"],
        rows: [
          [
            "Defeat 10 Shattered Skulls",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV4, amount: 1 }
            ]
          ],
          [
            "Defeat 30 Shattered Skulls",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.GOLDEN_SCROLL, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV4, amount: 3 }
            ]
          ],
          [
            "Donate 20 times to alliance research",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 5 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV4, amount: 1 }
            ]
          ],
          [
            "Donate 50 times to alliance research",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 10 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV4, amount: 3 }
            ]
          ],
          [
            "Increase Power by 20,000*",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV4, amount: 1 }
            ]
          ],
          [
            "Increase Power by 50,000*",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.MYSTIC_ORB, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV4, amount: 3 }
            ]
          ],
        ]
      },
    ],
    rewards: [
      {
        title: "1st Anniversary Antiques (Lotus Shop)",
        headers: ["Lotus", "Item"],
        rows: [
          ["10", [{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 }]],
          ["12", [{ resource: Resources.FOOD, amount: 1500000 }]],
          ["12", [{ resource: Resources.WOOD, amount: 1500000 }]],
          ["12", [{ resource: Resources.STONE, amount: 1500000 }]],
          ["12", [{ resource: Resources.GOLD, amount: 750000 }]],
          ["20", [{ resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 }]],
          ["20", [{ resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 }]],
          ["20", [{ resource: Resources.PURIFIED_ESSENCE, amount: 10 }]],
          ["20", [{ resource: Resources.VERDANT_SPLINTER, amount: 1000 }]],
          ["34", [{ resource: Resources.SPEEDUP, amount: 1440 }]],
          ["150", [{ resource: Resources.GEAR_CUSTOM_CHEST_EPIC, amount: 1 }]],
          ["200", [{ resource: Resources.EPIC_DECO, amount: 1 }]],
          ["500", [{ resource: Resources.GEAR_CUSTOM_CHEST_LEGENDARY, amount: 1 }]],
          ["2,000", [{ resource: Resources.FRAME(), amount: 1 }]],
          ["20,000", [{ resource: Resources.TOWNHALL(), amount: 1 }]],
        ]
      },
      {
        title: "Secret Tunnel (Overall Ranking)",
        headers: ["Rank", "Reward"],
        rows: [
          [
            "1",
            [
              { resource: Resources.PORTRAIT("Chibi Aang"), amount: 1 },
              { resource: Resources.PORTRAIT("Chibi Katara"), amount: 1 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 100 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 100 },
              { resource: Resources.SPEEDUP, amount: 60 * 100 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 100 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 100 },
            ]

          ],
          [
            "2",
            [
              { resource: Resources.PORTRAIT("Chibi Aang"), amount: 1 },
              { resource: Resources.PORTRAIT("Chibi Katara"), amount: 1 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 80 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 80 },
              { resource: Resources.SPEEDUP, amount: 60 * 80 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 80 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 80 },
            ]
          ],
          [
            "3",
            [
              { resource: Resources.PORTRAIT("Chibi Aang"), amount: 1 },
              { resource: Resources.PORTRAIT("Chibi Katara"), amount: 1 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 60 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 60 },
              { resource: Resources.SPEEDUP, amount: 60 * 60 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 60 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 60 },
            ]
          ],
          [
            "4-5",
            [
              { resource: Resources.PORTRAIT("Chibi Aang"), amount: 1 },
              { resource: Resources.PORTRAIT("Chibi Katara"), amount: 1 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 50 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 50 },
              { resource: Resources.SPEEDUP, amount: 60 * 50 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 50 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 50 },
            ]
          ],
          [
            "6-10",
            [
              { resource: Resources.PORTRAIT("Chibi Aang"), amount: 1 },
              { resource: Resources.PORTRAIT("Chibi Katara"), amount: 1 },
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 40 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 40 },
              { resource: Resources.SPEEDUP, amount: 60 * 40 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 40 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 40 },
            ]
          ],
          [
            "11-20",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 30 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 30 },
              { resource: Resources.SPEEDUP, amount: 60 * 30 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 30 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 30 },
            ]
          ],
          [
            "21-30",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 20 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 20 },
              { resource: Resources.SPEEDUP, amount: 60 * 20 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 20 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 20 },
            ]
          ],
          [
            "31-50",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
              { resource: Resources.SPEEDUP, amount: 60 * 10 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 10 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 10 },
            ]
          ],
          [
            "51-100",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 5 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 5 },
            ]
          ],
          [
            "101-200",
            [
              { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 2 },
              { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.GEAR_MATERIAL_CUSTOM_CHEST, amount: 2 },
              { resource: Resources.COMPANION_MATERIAL_CUSTOM_CHEST, amount: 2 },
            ]
          ]
        ]
      },
      {
        title: "Paths of Fate",
        description: "Rewards reset daily at 00:00 UTC.\nUnclaimed rewards expire.",
        headers: ["S-Coins", "Reward"],
        rows: [
          [
            "20",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV3, amount: 1 },
            ]
          ],
          [
            "50",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 2 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV3, amount: 4 },
            ]
          ],
          [
            "100",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 4 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV3, amount: 8 },
            ]
          ],
          [
            "170",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 8 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV3, amount: 16 },
            ]
          ],
          [
            "250",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.MYSTIC_ORB, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 12 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV3, amount: 24 },
            ]
          ],
          [
            "360",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.GOLDEN_SCROLL, amount: 2 },
              { resource: Resources.MYSTIC_ORB, amount: 2 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 16 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV3, amount: 32 },
            ]
          ],
          [
            "500",
            [
              { resource: Resources.LUCKY_DICE, amount: 3 },
              { resource: Resources.GOLDEN_SCROLL, amount: 3 },
              { resource: Resources.MYSTIC_ORB, amount: 3 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 20 },
              { resource: Resources.CUSTOM_RESOURCE_CHEST_LV3, amount: 40 },
            ]
          ]
        ]
      },
      {
        title: "Harvest of Bonds I",
        headers: ["Rank", "Reward"],
        rows: [
          [
            "1",
            [
              { resource: Resources.LUCKY_DICE, amount: 10 },
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.FOOD, amount: 150000 * 20 },
              { resource: Resources.WOOD, amount: 150000 * 20 },
              { resource: Resources.STONE, amount: 150000 * 20 },
            ]
          ],
          [
            "2",
            [
              { resource: Resources.LUCKY_DICE, amount: 8 },
              { resource: Resources.GEM, amount: 250 },
              { resource: Resources.FOOD, amount: 150000 * 15 },
              { resource: Resources.WOOD, amount: 150000 * 15 },
              { resource: Resources.STONE, amount: 150000 * 15 },
            ]
          ],
          [
            "3",
            [
              { resource: Resources.LUCKY_DICE, amount: 6 },
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.FOOD, amount: 150000 * 12 },
              { resource: Resources.WOOD, amount: 150000 * 12 },
              { resource: Resources.STONE, amount: 150000 * 12 },
            ]
          ],
          [
            "4",
            [
              { resource: Resources.LUCKY_DICE, amount: 4 },
              { resource: Resources.GEM, amount: 150 },
              { resource: Resources.FOOD, amount: 150000 * 10 },
              { resource: Resources.WOOD, amount: 150000 * 10 },
              { resource: Resources.STONE, amount: 150000 * 10 },
            ]
          ],
          [
            "5",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.FOOD, amount: 150000 * 8 },
              { resource: Resources.WOOD, amount: 150000 * 8 },
              { resource: Resources.STONE, amount: 150000 * 8 },
            ]
          ],
          [
            "6-10",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GEM, amount: 50 },
              { resource: Resources.FOOD, amount: 150000 * 5 },
              { resource: Resources.WOOD, amount: 150000 * 5 },
              { resource: Resources.STONE, amount: 150000 * 5 },
            ]
          ]
        ]
      },
      {
        title: "Harvest of Bonds II (Start: Day 8: Duration: 2 Days)",
        headers: ["Task", "Rewards"],
        rows: [
          [
            "1",
            [
              { resource: Resources.LUCKY_DICE, amount: 10 },
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.FOOD, amount: 150000 * 20 },
              { resource: Resources.WOOD, amount: 150000 * 20 },
              { resource: Resources.STONE, amount: 150000 * 20 },
            ]
          ],
          [
            "2",
            [
              { resource: Resources.LUCKY_DICE, amount: 8 },
              { resource: Resources.GEM, amount: 250 },
              { resource: Resources.FOOD, amount: 150000 * 15 },
              { resource: Resources.WOOD, amount: 150000 * 15 },
              { resource: Resources.STONE, amount: 150000 * 15 },
            ]
          ],
          [
            "3",
            [
              { resource: Resources.LUCKY_DICE, amount: 6 },
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.FOOD, amount: 150000 * 12 },
              { resource: Resources.WOOD, amount: 150000 * 12 },
              { resource: Resources.STONE, amount: 150000 * 12 },
            ]
          ],
          [
            "4",
            [
              { resource: Resources.LUCKY_DICE, amount: 4 },
              { resource: Resources.GEM, amount: 150 },
              { resource: Resources.FOOD, amount: 150000 * 10 },
              { resource: Resources.WOOD, amount: 150000 * 10 },
              { resource: Resources.STONE, amount: 150000 * 10 },
            ]
          ],
          [
            "5",
            [
              { resource: Resources.LUCKY_DICE, amount: 2 },
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.FOOD, amount: 150000 * 8 },
              { resource: Resources.WOOD, amount: 150000 * 8 },
              { resource: Resources.STONE, amount: 150000 * 8 },
            ]
          ],
          [
            "6-10",
            [
              { resource: Resources.LUCKY_DICE, amount: 1 },
              { resource: Resources.GEM, amount: 50 },
              { resource: Resources.FOOD, amount: 150000 * 5 },
              { resource: Resources.WOOD, amount: 150000 * 5 },
              { resource: Resources.STONE, amount: 150000 * 5 },
            ]
          ]
        ]
      },
    ],
    disclaimer: "* Hero Power is excluded.",
    details: [
      { type: "p", content: "Harvest of Bonds I", space: true },
      {
        type: "ul", items: [
          "Per recruiting 1 bender (Tier-1): 25 Points",
          "Per recruiting 1 bender (Tier-2): 50 Points",
          "Per recruiting 1 bender (Tier-3): 75 Points",
          "Per recruiting 1 bender (Tier-4): 100 Points",
          "Per recruiting 1 bender (Tier-5): 150 Points",
          "Per recruiting 1 bender (Tier-6): 350 Points"
        ], space: true
      },
      {
        type: "ul", items: [
          "Destroy Shattered Skulls' Fortress Level 1: 10,000 Points",
          "Destroy Shattered Skulls' Fortress Level 2: 12,000 Points",
          "Destroy Shattered Skulls' Fortress Level 3: 14,000 Points",
          "Destroy Shattered Skulls' Fortress Level 4: 16,000 Points",
          "Destroy Shattered Skulls' Fortress Level 5: 18,000 Points",
          "Destroy Shattered Skulls' Fortress Level 6: 20,000 Points",
        ], space: true
      },
      { type: "p", content: "Harvest of Bonds II", space: true },
      {
        type: "ul", items: [
          "Defeat Shattered Skull Levels 1-5: 1,500 Points",
          "Defeat Shattered Skull Levels 6-10: 1,800 Points",
          "Defeat Shattered Skull Levels 11-15: 2,100 Points",
          "Defeat Shattered Skull Levels 16-20: 2,400 Points",
          "Defeat Shattered Skull Levels 21-25: 2,700 Points",
          "Defeat Shattered Skull Levels 26-30: 3,000 Points",
        ], space: true
      },
      { type: "p", content: "Donate to alliance research 1 time: 500 Points", space: true },
      { type: "p", content: "Increase Power by 1: 20 (Hero Power Excluded)", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-11" }
    ],
    informations: [
      'This is a “mega” event that unlocks over time and features multiple smaller events running simultaneously.',
      "The Secret Tunnel and Harvest of Bonds I and II rankings are cross-server, regardless of whether the server has reached the cross-server milestone (approximately 60 days)."
    ]
  },
  {
    id: "desert-troublemakers",
    name: "Desert Troublemakers",
    description: "Defeat Scorched Skulls!",
    duration: 3,
    repeat: 14,
    seedStartDate: {
      SEED_A: "2026-04-03",
      SEED_B: "2026-04-06",
      SEED_C: "2026-03-30",
    },
    type: "DESERT_TROUBLEMAKERS",
    tasks: [
      {
        title: "Easy Difficulty",
        headers: ["Task", "Item"],
        rows: [
          ["Defeat a Level 1 Scorched Skull", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 30m Speedup, 1x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 2 Scorched Skull", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 60m Speedup, 2x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 3 Scorched Skull", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 90m Speedup, 3x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 4 Scorched Skull", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 120m Speedup, 4x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 5 Scorched Skull", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 150m Speedup, 5x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 6 Scorched Skull", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 180m Speedup, 6x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 7 Scorched Skull", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 210m Speedup, 7x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 8 Scorched Skull", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 240m Speedup, 8x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 9 Scorched Skull", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 270m Speedup, 9x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 10 Scorched Skull", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 300m Speedup, 10x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 11 Scorched Skull", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 330m Speedup, 11x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 12 Scorched Skull", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 360m Speedup, 12x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 13 Scorched Skull", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 390m Speedup, 13x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 14 Scorched Skull", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 420m Speedup, 14x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 15 Scorched Skull", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 450m Speedup, 15x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 16 Scorched Skull", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 480m Speedup, 16x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 17 Scorched Skull", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 510m Speedup, 17x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 18 Scorched Skull", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 540m Speedup, 18x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 19 Scorched Skull", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 570m Speedup, 19x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 20 Scorched Skull", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 600m Speedup, 20x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 21 Scorched Skull", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 630m Speedup, 21x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 22 Scorched Skull", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 660m Speedup, 22x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 23 Scorched Skull", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 690m Speedup, 23x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 24 Scorched Skull", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 720m Speedup, 24x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 25 Scorched Skull", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 750m Speedup, 25x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 26 Scorched Skull", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 780m Speedup, 26x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 27 Scorched Skull", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 810m Speedup, 27x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 28 Scorched Skull", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 840m Speedup, 28x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 29 Scorched Skull", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 870m Speedup, 29x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 30 Scorched Skull", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 900m Speedup, 30x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 31 Scorched Skull", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 930m Speedup, 31x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 32 Scorched Skull", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 960m Speedup, 32x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 33 Scorched Skull", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 990m Speedup, 33x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 34 Scorched Skull", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 1020m Speedup, 34x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 35 Scorched Skull", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1050m Speedup, 35x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 36 Scorched Skull", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1080m Speedup, 36x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 37 Scorched Skull", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1110m Speedup, 37x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 38 Scorched Skull", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1140m Speedup, 38x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 39 Scorched Skull", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1170m Speedup, 39x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 40 Scorched Skull", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1200m Speedup, 40x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 41 Scorched Skull", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1230m Speedup, 41x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 42 Scorched Skull", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1260m Speedup, 42x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 43 Scorched Skull", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1290m Speedup, 43x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 44 Scorched Skull", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1320m Speedup, 44x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 45 Scorched Skull", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1350m Speedup, 45x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 46 Scorched Skull", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1380m Speedup, 46x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 47 Scorched Skull", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1410m Speedup, 47x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 48 Scorched Skull", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1440m Speedup, 48x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 49 Scorched Skull", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1470m Speedup, 49x Lv.2 Custom Resource Chest"],
          ["Defeat a Level 50 Scorched Skull", "5x Legendary Spirit Shard, 5x Legendary Spirit Badge, 1500m Speedup, 50x Lv.2 Custom Resource Chest"]
        ]
      },
      {
        title: "Normal Difficulty",
        headers: ["Task"],
        rows: [
          ["Need Data"]
        ]
      },
      {
        title: "Hard Difficulty",
        headers: ["Task"],
        rows: [
          ["Need Data"]
        ]
      },
      {
        title: "Nightmare Difficulty",
        headers: ["Task"],
        rows: [
          ["Need Data"]
        ]
      },
      {
        title: "Hell Difficulty",
        headers: ["Task"],
        rows: [
          ["Need Data"]
        ]
      }
    ],
    rewards: [
      {
        title: "Easy Difficulty",
        headers: ["Level", "Item"],
        rows: [
          ["10", "1x Epic Spirit Shard, 1x Silver Scroll, 200 AP, 60m Speedup"],
          ["20", "1x Epic Spirit Badge, 2x Silver Scroll, 200 AP, 60m"],
          ["30", "1x Legendary Spirit Shard, 1x Golden Scroll, 400 AP, 60m"],
          ["40", "1x Legendary Spirit Badge, 2x Golden Scroll, 400 AP, 120m"],
          ["50", "3x Legendary Spirit Shard, 3x Golden Scroll, 600 AP, 180m"],

        ]
      },
      {
        title: "Normal Difficulty",
        headers: ["Level"],
        rows: [
          ["Need Data"]
        ]
      },
      {
        title: "Hard Difficulty",
        headers: ["Level"],
        rows: [
          ["Need Data"]
        ]
      },
      {
        title: "Nightmare Difficulty",
        headers: ["Level"],
        rows: [
          ["Need Data"]
        ]
      },
      {
        title: "Hell Difficulty",
        headers: ["Level"],
        rows: [
          ["Need Data"]
        ]
      }
    ],
    disclaimer: "This is a step-by-step task line. You must complete the previous step to unlock the next one.",
    details: [
      { type: "p", content: "Take down these troublemakers!" },
      { type: "p", content: "Warning: Extremly dangerous!", space: true },
      {
        type: "ol", items: [
          "During the event period, you can choose a difficulty and search for Scorched Skulls to attack. Try challenging from the lowest level to the highest!",
          "You can only challenge one difficulty level during the event. Once selected, it cannot be changed.",
          "After the event ends, you can claim additional rewards based on the highest level of Scorched defeated during the event. Be sure the claim your rewards before the event period is over!"
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-03" }
    ],
    informations: [
      "Before starting this event, you have to select a difficulty. You cannot change the difficulty afterward."
    ],
    wip: true
  },
  {
    id: "temple-war",
    name: "Temple War",
    duration: 1,
    repeat: 14,
    startDate: "2026-03-31",
    description: "The event to capture the Temple of Corruption is approaching.",
    type: "TEMPLE_WAR",
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

    ]
  },
  {
    id: "bortes-scheme",
    name: "Borte's Scheme",
    description: "High Priestress of the Shattered Skulls is seeking the throne of Murong.",
    duration: 2,
    repeat: 14,
    startDate: "2026-04-04",
    type: "MINOR",
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
  },
  {
    id: "united_mind",
    name: "United Mind",
    description: "Join forces with the alliance to crush the enemies!",
    duration: 2,
    startDate: "2026-04-06",
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Help alliance 10 times",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 1 },
            ]
          ],
          ["Help alliance 20 times",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 3 },
              { resource: Resources.WOOD, amount: 10000 * 3 },
              { resource: Resources.STONE, amount: 10000 * 3 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 2 },
            ]
          ],
          ["Help alliance 30 times",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 * 5 },
              { resource: Resources.WOOD, amount: 10000 * 5 },
              { resource: Resources.STONE, amount: 10000 * 5 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 3 },
            ]
          ],
          ["Donate 10 times to alliance research",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 10 * 5 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 1 },
            ]
          ],
          ["Donate 20 times to alliance research",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 20 * 5 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 2 },
            ]
          ],
          ["Donate 30 times to alliance research",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 30 * 5 },
              { resource: Resources.SEAL_OF_SOLIDARITY, amount: 3 },
            ]
          ],
        ]
      }
    ],
    details: [
      { type: "p", content: "Join forces with the alliance to crush the enemies!", space: true },
      {
        type: "ol", items: [
          "Help alliance members and donate to alliance research.",
          "Reach the goals and get rewards."
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-06" }
    ]
  },
  {
    id: "roar-of-battle",
    name: "Roar of Battle",
    description: "Defeat Shattered Skulls and earn points to receive rewards.",
    duration: 2,
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    startDate: "2026-04-07",
    type: "MINOR",
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
  },
  {
    id: "glorious-victory",
    name: "Glorious Victory",
    description: "Destroy Shattered Skulls' Fortresses with your alliance and earn rewards.",
    duration: 2,
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    startDate: "2026-04-10",
    type: "MINOR",
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
  },
  {
    id: "balance-and-order",
    name: "Balance and Order",
    description: "You are the guardians fo balance and order.",
    duration: 3,
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    startDate: "2026-04-08",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Gather 100,000 Resources from the Field",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 + 5 + 5 }
            ]
          ],
          ["Gather 300,000 Resources from the Field",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 3 * 5 + 3 * 5 + 3 * 5 }
            ]
          ],
          ["Defeat 3 Shattered Skulls",
            [
              { resource: Resources.SPIRIT_SHARD_RARE, amount: 1 },
              { resource: Resources.FOOD, amount: 50000 },
              { resource: Resources.WOOD, amount: 50000 },
              { resource: Resources.STONE, amount: 50000 }
            ]
          ],
          ["Defeat 10 Shattered Skulls",
            [
              { resource: Resources.SPIRIT_SHARD_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 50000 },
              { resource: Resources.WOOD, amount: 50000 },
              { resource: Resources.STONE, amount: 50000 }
            ]
          ],
          ["Recruit 2,000 benders",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 },
            ]
          ],
          ["Recruit 6,000 benders",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.FOOD, amount: 3 * 10000 },
              { resource: Resources.WOOD, amount: 3 * 10000 },
              { resource: Resources.STONE, amount: 3 * 10000 },
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "You are the guardians of balance and order.", space: true },
      {
        type: "ol", items: [
          "Gather resources on the field, recruit benders and defeat Shattered Skulls.",
          "Reach the goals and get rewards.",
          "This event resets at UTC 00:00."
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-08" }
    ],
    informations: [
      "Balance and Order resets every day at 00:00 UTC, for 3 days.",
    ]
  },
  {
    id: "readiness",
    name: "Readiness",
    description: '"Failure is only the opportunity to begin again. Only this time, more wisely." - Uncle Iroh',
    duration: 2,
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    startDate: "2026-04-09",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Use 5 Silver Scrolls",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
            ]
          ],
          [
            "Use 15 Silver Scrolls",
            [
              { resource: Resources.SILVER_SCROLL, amount: 3 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
            ]
          ],
          [
            "Use 5 Golden Scrolls",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
            ]
          ],
          [
            "Use 15 Golden Scrolls",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 3 },
              { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 + 60 + 60 }
            ]
          ],
          [
            "Gather 200,000 Resources from the Field",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.AP, amount: 100 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 }
            ]
          ],
          [
            "Gather 500,000 Resources from the Field",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.AP, amount: 100 * 2 },
              { resource: Resources.SPEEDUP, amount: 60 + 5 * 5 }
            ]
          ],
          [
            "Gather 1,000,000 Resources from the Field",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.AP, amount: 500 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 + 5 * 5 },
              { resource: Resources.POWER_BOOST_RARE, amount: 1 }
            ]
          ],
        ]
      }
    ],
    details: [
      { type: "p", content: '"Failure is only the opportunity to begin again. Only this time, more wisely." - Uncle Iroh', space: true },
      {
        type: "ol", items: [
          "Use Scrolls and gather resources during the event period.",
          "Reach the goals and get rewards."
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-09" }
    ],
  },
  {
    id: "vault-of-murang",
    name: "Vault of Murang",
    description: "Capture Vault of Murang and claim amazing rewards with your alliance!",
    duration: 1,
    repeat: 7,
    startDate: "2026-04-12",
    type: "VAULT",
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
    ],
    wip: true,
  },
  {
    id: "supply-quest",
    name: "Supply Quest",
    description: "Collect as many Supply Chests as possible.",
    duration: 2,
    repeat: 14,
    startDate: "2026-03-30",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Defeat 1 Shattered Skull (Repeatable)",
            "1x Supply Chest"
          ],
          [
            "Gather X (Unknown yet) Resoures from the Field (Repeatable)",
            "1x Supply Chest"
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
              { resource: Resources.GEM, amount: 500 },
              { resource: Resources.GOLDEN_SCROLL, amount: 10 },
              { resource: Resources.SPEEDUP, amount: 60*10 },
              { resource: Resources.FOOD, amount: 50000*10 },
              { resource: Resources.WOOD, amount: 50000*10 }
            ]
          ],
          [
            "2",
            [
              { resource: Resources.GEM, amount: 400 },
              { resource: Resources.GOLDEN_SCROLL, amount: 8 },
              { resource: Resources.SPEEDUP, amount: 60*8 },
              { resource: Resources.FOOD, amount: 50000*8 },
              { resource: Resources.WOOD, amount: 50000*8 }
            ]
          ],
          [
            "3",
            [
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.GOLDEN_SCROLL, amount: 6 },
              { resource: Resources.SPEEDUP, amount: 60*6 },
              { resource: Resources.FOOD, amount: 50000*6 },
              { resource: Resources.WOOD, amount: 50000*6 }
            ]
          ],
          [
            "4-10",
            [
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.GOLDEN_SCROLL, amount: 4 },
              { resource: Resources.SPEEDUP, amount: 60*4 },
              { resource: Resources.FOOD, amount: 50000*4 },
              { resource: Resources.WOOD, amount: 50000*4 }
            ]
          ],
          [
            "11-20",
            [
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.GOLDEN_SCROLL, amount: 3 },
              { resource: Resources.SPEEDUP, amount: 60*3 },
              { resource: Resources.FOOD, amount: 50000*3 },
              { resource: Resources.WOOD, amount: 50000*3 }
            ]
          ],
          [
            "21-50",
            [
              { resource: Resources.GEM, amount: 50 },
              { resource: Resources.GOLDEN_SCROLL, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 60*2 },
              { resource: Resources.FOOD, amount: 50000*2 },
              { resource: Resources.WOOD, amount: 50000*2 }
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
      { type: "ol", items: [
        "Gather resources on the world map, and defeat Shattered Skulls to obtain [Supply Chests].",
        "Earn rank points by defeating Shattered Skulls and Gahtering resources on the Field.",
        "This event resets at UTC 00:00"
      ], space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-13" }
    ],
    wip: true
  },
  {
    id: "journey-of-us",
    name: "Journey of Us",
    description: "Let's nto forget our journey. Every step has been meaningful.",
    duration: 2,
    repeat: 14,
    startDate: "2026-03-30",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Use 5 Silver Scrolls",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Use 20 Silver Scrolls",
            [
              { resource: Resources.SILVER_SCROLL, amount: 3 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.FOOD, amount: 10000*3 },
              { resource: Resources.WOOD, amount: 10000*3 },
              { resource: Resources.STONE, amount: 10000*3 }
            ]
          ],
          [
            "Use 5 Golden Scrolls",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
              { resource: Resources.FOOD, amount: 10000 },
              { resource: Resources.WOOD, amount: 10000 },
              { resource: Resources.STONE, amount: 10000 }
            ]
          ],
          [
            "Use 20 Golden Scrolls",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 3 },
              { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 1 },
              { resource: Resources.FOOD, amount: 10000*3 },
              { resource: Resources.WOOD, amount: 10000*3 },
              { resource: Resources.STONE, amount: 10000*3 }
            ]
          ],
          [
            "Send 4 airships",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_RARE, amount: 2 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
            ]
          ],
          [
            "Successfully raid 4 other airships",
            [
              { resource: Resources.GOLD, amount: 1 },
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60+60+60 }
            ]
          ],
        ]
      }
    ],
    details: [
      { type: "p", content: "Let's not forget our journey. Every step has been meaningful.", space: true },
      {
        type: "ol", items: [
          "Earn points during the event period by using scrolls in the Altar of Heroes, sending airships, or attacking enemy airships.",
          "Reach the goal and get rewards."
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-13" }
    ]
  },
  {
    id: "search-and-upgrade",
    name: "Search & Upgrade",
    description: "To achieve faster growth, it's important to observe your surroundings carefully!",
    duration: 2,
    repeat: 14,  // Probably 2 weeks, need to check later for confirmation
    startDate: "2026-04-11",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Increase Power by 40,000 with Construction",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 },
              { resource: Resources.FOOD, amount: 50000 },
              { resource: Resources.WOOD, amount: 50000 },
              { resource: Resources.STONE, amount: 50000 }
            ]
          ],
          [
            "Increase Power by 80,000 with Construction",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 },
              { resource: Resources.FOOD, amount: 50000 * 2 },
              { resource: Resources.WOOD, amount: 50000 * 2 },
              { resource: Resources.STONE, amount: 50000 * 2 }
            ]
          ],
          [
            "Increase Power by 120,000 with Construction",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.FOOD, amount: 50000 * 3 },
              { resource: Resources.WOOD, amount: 50000 * 3 },
              { resource: Resources.STONE, amount: 50000 * 3 }
            ]
          ],
          [
            "Complete 5 Expedition missions",
            [
              { resource: Resources.BOOK_OF_EXPERIENCE_EPIC, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 + 5 * 5 + 5 * 5 }
            ]
          ],
          [
            "Complete 10 Expedition missions",
            [
              { resource: Resources.SILVER_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 10 + 5 * 10 + 5 * 10 }
            ]
          ],
          [
            "Complete 20 Expedition missions",
            [
              { resource: Resources.GOLDEN_SCROLL, amount: 1 },
              { resource: Resources.SPEEDUP, amount: 5 * 15 + 5 * 15 + 5 * 15 },
              { resource: Resources.SQUAD_EXPANSION_EPIC, amount: 1 }
            ]
          ]
        ]
      }
    ],
    details: [
      { type: "p", content: "To achieve faster growth, it's important to observe your surroundings carefully!", space: true },
      {
        type: "ol", items: [
          "During the event period, earn points by upgrading buildings and completing expeditions.",
          "Reach the goal and get rewards."
        ], space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-04" },
    ],
    tips: [
      "Keep in mind that you can solo rally after reaching VIP 5"
    ]
  },
  {
    id: "timeless",
    name: "Timeless",
    description: "Cherished values transcend the ages.",
    duration: 1,
    repeat: 14, // Probably 2 weeks, need to check later for confirmation
    startDate: "2026-04-15",
    type: "MINOR",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          [
            "Use 200m of Speedup items",
            [
              { resource: Resources.GEM, amount: 100 },
              { resource: Resources.SPEEDUP, amount: 5 * 5 },
              { resource: Resources.FOOD, amount: 150000 },
              { resource: Resources.WOOD, amount: 150000 },
              { resource: Resources.STONE, amount: 150000 }
            ]
          ],
          [
            "Use 1,000m of Speedup items",
            [
              { resource: Resources.GEM, amount: 150 },
              { resource: Resources.SPEEDUP, amount: 5 * 10 },
              { resource: Resources.FOOD, amount: 150000 * 2 },
              { resource: Resources.WOOD, amount: 150000 * 2 },
              { resource: Resources.STONE, amount: 150000 * 2 }
            ]
          ],
          [
            "Use 3,000m of Speedup items",
            [
              { resource: Resources.GEM, amount: 200 },
              { resource: Resources.SPEEDUP, amount: 60 * 2 },
              { resource: Resources.FOOD, amount: 150000 * 3 },
              { resource: Resources.WOOD, amount: 150000 * 3 },
              { resource: Resources.STONE, amount: 150000 * 3 }
            ]
          ],
          [
            "Use 6,000m of Speedup items",
            [
              { resource: Resources.GEM, amount: 250 },
              { resource: Resources.SPEEDUP, amount: 60 * 3 },
              { resource: Resources.FOOD, amount: 150000 * 4 },
              { resource: Resources.WOOD, amount: 150000 * 4 },
              { resource: Resources.STONE, amount: 150000 * 4 }
            ]
          ],
          [
            "Use 12,000m of Speedup items",
            [
              { resource: Resources.GEM, amount: 300 },
              { resource: Resources.SPEEDUP, amount: 60 * 5 },
              { resource: Resources.FOOD, amount: 150000 * 5 },
              { resource: Resources.WOOD, amount: 150000 * 5 },
              { resource: Resources.STONE, amount: 150000 * 5 }
            ]
          ]
        ]
      }
    ],

    details: [
      { type: "p", content: "Cherished values transcend the ages.", space: true },
      {
        type: "ol", items: [
          "Reduce the time of construction, research, recruitment or healing with speedup items.",
          "Reach the goal and get rewards.",
          "The event will last for one day."
        ], space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-15" },
    ],
  },
  {
    id: "unalaq_pass",
    name: "Unalaq Pass",
    description: "Collect Pass Points to earn Unalaq.",
    duration: 5,
    repeat: 0,
    type: "UNALAQ_PASS",
    tasks: [
      {
        title: "Day 1",
        headers: ["Task", "Reward"],
        rows: [
          ["Defeat 20 Shattered Skulls", "30x Unalaq Pass Points"],
          ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
          ["Donate 30 times to alliance research", "20x Unalaq Pass Points"],
          ["Use 10 scrolls", "30x Unalaq Pass Points"],
          ["Complete 10 Expedition missions", "30x Unalaq Pass Points"]
        ]
      },
      {
        title: "Day 2",
        headers: ["Task", "Reward"],
        rows: [
          ["Gather 500,000 Resources from the Field", "20x Unalaq Pass Points"],
          ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
          ["Destroy 5 Shattered Skulls' Fortresses", "30x Unalaq Pass Points"],
          ["Participate in 5 arena fights", "30x Unalaq Pass Points"],
          ["Use 1,000 AP", "30x Unalaq Pass Points"]
        ]
      },
      {
        title: "Day 3",
        headers: ["Task", "Reward"],
        rows: [
          ["Defeat 20 Shattered Skulls", "30x Unalaq Pass Points"],
          ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
          ["Donate 30 times to alliance research", "20x Unalaq Pass Points"],
          ["Send 4 airships", "30x Unalaq Pass Points"],
          ["Purchase 20 items at the Trading Post", "30x Unalaq Pass Points"]
        ]
      },
      {
        title: "Day 4",
        headers: ["Task", "Reward"],
        rows: [
          ["Gather 500,000 Resources in the City", "20x Unalaq Pass Points"],
          ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
          ["Destroy 5 Shattered Skulls' Fortresses", "30x Unalaq Pass Points"],
          ["Participate in 5 arena fights", "30x Unalaq Pass Points"],
          ["Use 1,000min of Speedup", "30x Unalaq Pass Points"],
        ]
      },
      {
        title: "Day 5",
        headers: ["Task", "Reward"],
        rows: [
          ["Defeat 20 Shattered Skulls", "30x Unalaq Pass Points"],
          ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
          ["Donate 30 times to alliance research", "20x Unalaq Pass Points"],
          ["Clear Avatar Trail 1 time", "30x Unalaq Pass Points"],
          ["Use 500 Gems", "50x Unalaq Pass Points"],
        ]
      },
    ],
    rewards: [
      {
        title: "Unalaq Pass",
        headers: ["Level", "Points Required", "Total Points"],
        rows: [
          ["1", "5 Unalaq Pass Points", "5 Unalaq Pass Points"],
          ["2", "5 Unalaq Pass Points", "10 Unalaq Pass Points"],
          ["3", "5 Unalaq Pass Points", "15 Unalaq Pass Points"],
          ["4", "5 Unalaq Pass Points", "20 Unalaq Pass Points"],
          ["5", "10 Unalaq Pass Points", "30 Unalaq Pass Points"],
          ["6", "10 Unalaq Pass Points", "40 Unalaq Pass Points"],
          ["7", "10 Unalaq Pass Points", "50 Unalaq Pass Points"],
          ["8", "10 Unalaq Pass Points", "60 Unalaq Pass Points"],
          ["9", "15 Unalaq Pass Points", "75 Unalaq Pass Points"],
          ["10", "15 Unalaq Pass Points", "90 Unalaq Pass Points"],
          ["11", "15 Unalaq Pass Points", "105 Unalaq Pass Points"],
          ["12", "15 Unalaq Pass Points", "120 Unalaq Pass Points"],
          ["13", "20 Unalaq Pass Points", "140 Unalaq Pass Points"],
          ["14", "20 Unalaq Pass Points", "160 Unalaq Pass Points"],
          ["15", "20 Unalaq Pass Points", "180 Unalaq Pass Points"],
          ["16", "20 Unalaq Pass Points", "200 Unalaq Pass Points"],
          ["17", "25 Unalaq Pass Points", "225 Unalaq Pass Points"],
          ["18", "25 Unalaq Pass Points", "250 Unalaq Pass Points"],
          ["19", "25 Unalaq Pass Points", "275 Unalaq Pass Points"],
          ["20", "25 Unalaq Pass Points", "300 Unalaq Pass Points"]
        ]
      }
    ],
    details: [
      { type: "p", content: "Clear the missions assigned to each day and earn Pass Points to use in the Unalaq Pass!", space: true },
      {
        type: "ol", items: [
          "The event runs for a total of 5 days.",
          "Missions are limited each day.",
          "Only missions unlocked on the current day can be completed.",
          "Missions from previous days cannot be completed.",
          "Pass Points earned from clearing missions can be used in [Unalaq Pass]"
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-11" }
    ],
    informations: [
      "Unlike most events, tasks must be completed on the same day they become available."
    ]
  },
]