import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const firstAnniversary: Omit<Event, "type"> = {
    id: "first-anniversary",
    name: "1st Anniversary",
    description: "Participate in the 1st Anniversary: Traces of Memory event to earn amazing rewards.",
    duration: 12,
    repeat: 0,
    startDate: "2026-04-02",
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
              { resource: Resources.PORTRAIT("Chibi Aang & Katara"), amount: 1 },
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
              { resource: Resources.PORTRAIT("Chibi Aang & Katara"), amount: 1 },
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
              { resource: Resources.PORTRAIT("Chibi Aang & Katara"), amount: 1 },
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
              { resource: Resources.PORTRAIT("Chibi Aang & Katara"), amount: 1 },
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
              { resource: Resources.PORTRAIT("Chibi Aang & Katara"), amount: 1 },
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
  }