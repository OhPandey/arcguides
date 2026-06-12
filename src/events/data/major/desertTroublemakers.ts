import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const desertTroublemakers: Omit<Event, "type"> = {
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
  tasks: [
    {
      title: "Easy Difficulty",
      headers: ["Task", "Item"],
      rows: [
        ["Reach Level 10", "1x Epic Spirit Shard, 1x Silver Scroll, 200 AP, 60m Speedup"],
        ["Reach Level 20", "1x Epic Spirit Badge, 2x Silver Scroll, 200 AP, 60m"],
        ["Reach Level 30", "1x Legendary Spirit Shard, 1x Golden Scroll, 400 AP, 60m"],
        ["Reach Level 40", "1x Legendary Spirit Badge, 2x Golden Scroll, 400 AP, 120m"],
        ["Reach Level 50", "3x Legendary Spirit Shard, 3x Golden Scroll, 600 AP, 180m"],

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
      headers: ["Level", "Item"],
      rows: [
        [
          "Reach Level 10",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
            { resource: Resources.MYSTIC_ORB, amount: 1 },
            { resource: Resources.AP, amount: 200 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Reach Level 20",
          [
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
            { resource: Resources.MYSTIC_ORB, amount: 1 },
            { resource: Resources.AP, amount: 200 },
            { resource: Resources.SPEEDUP, amount: 60 }
          ]
        ],
        [
          "Reach Level 30",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 1 },
            { resource: Resources.MYSTIC_ORB, amount: 2 },
            { resource: Resources.AP, amount: 200 * 2 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ],
        [
          "Reach Level 40",
          [
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 1 },
            { resource: Resources.MYSTIC_ORB, amount: 2 },
            { resource: Resources.AP, amount: 200 * 2 },
            { resource: Resources.SPEEDUP, amount: 60 * 2 }
          ]
        ],
        [
          "Reach Level 50",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 3 },
            { resource: Resources.MYSTIC_ORB, amount: 3 },
            { resource: Resources.AP, amount: 200 * 3 },
            { resource: Resources.SPEEDUP, amount: 60 * 3 }
          ]
        ]
      ]
    },
  ],
  rewards: [
    {
      title: "Easy Difficulty",
      headers: ["Level", "Reward"],
      rows: [
        ["1", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 30m Speedup, 1x Lv.2 Custom Resource Chest"],
        ["2", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 60m Speedup, 2x Lv.2 Custom Resource Chest"],
        ["3", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 90m Speedup, 3x Lv.2 Custom Resource Chest"],
        ["4", "1x Rare Spirit Shard, 1x Rare Spirit Badge, 120m Speedup, 4x Lv.2 Custom Resource Chest"],
        ["5", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 150m Speedup, 5x Lv.2 Custom Resource Chest"],
        ["6", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 180m Speedup, 6x Lv.2 Custom Resource Chest"],
        ["7", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 210m Speedup, 7x Lv.2 Custom Resource Chest"],
        ["8", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 240m Speedup, 8x Lv.2 Custom Resource Chest"],
        ["9", "2x Rare Spirit Shard, 2x Rare Spirit Badge, 270m Speedup, 9x Lv.2 Custom Resource Chest"],
        ["10", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 300m Speedup, 10x Lv.2 Custom Resource Chest"],
        ["11", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 330m Speedup, 11x Lv.2 Custom Resource Chest"],
        ["12", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 360m Speedup, 12x Lv.2 Custom Resource Chest"],
        ["13", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 390m Speedup, 13x Lv.2 Custom Resource Chest"],
        ["14", "3x Rare Spirit Shard, 3x Rare Spirit Badge, 420m Speedup, 14x Lv.2 Custom Resource Chest"],
        ["15", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 450m Speedup, 15x Lv.2 Custom Resource Chest"],
        ["16", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 480m Speedup, 16x Lv.2 Custom Resource Chest"],
        ["17", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 510m Speedup, 17x Lv.2 Custom Resource Chest"],
        ["18", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 540m Speedup, 18x Lv.2 Custom Resource Chest"],
        ["19", "1x Epic Spirit Shard, 1x Epic Spirit Badge, 570m Speedup, 19x Lv.2 Custom Resource Chest"],
        ["20", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 600m Speedup, 20x Lv.2 Custom Resource Chest"],
        ["21", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 630m Speedup, 21x Lv.2 Custom Resource Chest"],
        ["22", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 660m Speedup, 22x Lv.2 Custom Resource Chest"],
        ["23", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 690m Speedup, 23x Lv.2 Custom Resource Chest"],
        ["24", "2x Epic Spirit Shard, 2x Epic Spirit Badge, 720m Speedup, 24x Lv.2 Custom Resource Chest"],
        ["25", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 750m Speedup, 25x Lv.2 Custom Resource Chest"],
        ["26", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 780m Speedup, 26x Lv.2 Custom Resource Chest"],
        ["27", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 810m Speedup, 27x Lv.2 Custom Resource Chest"],
        ["28", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 840m Speedup, 28x Lv.2 Custom Resource Chest"],
        ["29", "3x Epic Spirit Shard, 3x Epic Spirit Badge, 870m Speedup, 29x Lv.2 Custom Resource Chest"],
        ["30", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 900m Speedup, 30x Lv.2 Custom Resource Chest"],
        ["31", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 930m Speedup, 31x Lv.2 Custom Resource Chest"],
        ["32", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 960m Speedup, 32x Lv.2 Custom Resource Chest"],
        ["33", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 990m Speedup, 33x Lv.2 Custom Resource Chest"],
        ["34", "1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 1020m Speedup, 34x Lv.2 Custom Resource Chest"],
        ["35", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1050m Speedup, 35x Lv.2 Custom Resource Chest"],
        ["36", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1080m Speedup, 36x Lv.2 Custom Resource Chest"],
        ["37", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1110m Speedup, 37x Lv.2 Custom Resource Chest"],
        ["38", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1140m Speedup, 38x Lv.2 Custom Resource Chest"],
        ["39", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 1170m Speedup, 39x Lv.2 Custom Resource Chest"],
        ["40", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1200m Speedup, 40x Lv.2 Custom Resource Chest"],
        ["41", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1230m Speedup, 41x Lv.2 Custom Resource Chest"],
        ["42", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1260m Speedup, 42x Lv.2 Custom Resource Chest"],
        ["43", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1290m Speedup, 43x Lv.2 Custom Resource Chest"],
        ["44", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 1320m Speedup, 44x Lv.2 Custom Resource Chest"],
        ["45", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1350m Speedup, 45x Lv.2 Custom Resource Chest"],
        ["46", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1380m Speedup, 46x Lv.2 Custom Resource Chest"],
        ["47", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1410m Speedup, 47x Lv.2 Custom Resource Chest"],
        ["48", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1440m Speedup, 48x Lv.2 Custom Resource Chest"],
        ["49", "4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 1470m Speedup, 49x Lv.2 Custom Resource Chest"],
        ["50", "5x Legendary Spirit Shard, 5x Legendary Spirit Badge, 1500m Speedup, 50x Lv.2 Custom Resource Chest"]
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
      headers: ["Level", "Reward"],
      rows: [
        [
          "1",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 4 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 }
          ]
        ],
        [
          "2",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 4 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 2 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 2 }
          ]
        ],
        [
          "3",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 4 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 3 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 3 }
          ]
        ],
        [
          "4",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 4 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 4 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 4 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 4 }
          ]
        ],
        [
          "5",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 5 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 5 }
          ]
        ],
        [
          "6",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 6 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 6 }
          ]
        ],
        [
          "7",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 7 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 7 }
          ]
        ],
        [
          "8",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 8 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 8 }
          ]
        ],
        [
          "9",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 5 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 5 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 9 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 9 }
          ]
        ],
        [
          "10",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 6 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 10 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 10 }
          ]
        ],
        [
          "11",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 6 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 11 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 11 }
          ]
        ],
        [
          "12",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 6 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 12 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 12 }
          ]
        ],
        [
          "13",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 6 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 13 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 13 }
          ]
        ],
        [
          "14",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 6 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 6 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 14 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 14 }
          ]
        ],
        [
          "15",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 7 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 7 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 15 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 15 }
          ]
        ],
        [
          "16",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 7 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 7 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 16 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 16 }
          ]
        ],
        [
          "17",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 7 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 7 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 17 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 17 }
          ]
        ],
        [
          "18",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 7 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 7 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 18 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 18 }
          ]
        ],
        [
          "19",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 7 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 7 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 19 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 19 }
          ]
        ],
        [
          "20",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 8 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 20 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 20 }
          ]
        ],
        [
          "21",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 8 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 21 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 21 }
          ]
        ],
        [
          "22",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 8 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 22 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 22 }
          ]
        ],
        [
          "23",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 8 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 23 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 23 }
          ]
        ],
        [
          "24",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 8 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 8 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 24 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 24 }
          ]
        ],
        [
          "25",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 9 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 9 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 25 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 25 }
          ]
        ],
        [
          "26",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 9 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 9 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 26 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 26 }
          ]
        ],
        [
          "27",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 9 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 9 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 27 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 27 }
          ]
        ],
        [
          "28",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 9 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 9 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 28 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 28 }
          ]
        ],
        [
          "29",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 9 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 9 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 29 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 29 }
          ]
        ],
        [
          "30",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 30 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 30 }
          ]
        ],
        [
          "31",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 31 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 31 }
          ]
        ],
        [
          "32",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 32 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 32 }
          ]
        ],
        [
          "33",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 33 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 33 }
          ]
        ],
        [
          "34",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 10 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 10 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 34 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 34 }
          ]
        ],
        [
          "35",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 11 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 11 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 35 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 35 }
          ]
        ],
        [
          "36",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 11 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 11 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 36 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 36 }
          ]
        ],
        [
          "37",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 11 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 11 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 37 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 37 }
          ]
        ],
        [
          "38",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 11 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 11 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 38 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 38 }
          ]
        ],
        [
          "39",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 11 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 11 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 39 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 39 }
          ]
        ],
        [
          "40",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 12 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 12 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 40 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 40 }
          ]
        ],
        [
          "41",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 12 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 12 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 41 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 41 }
          ]
        ],
        [
          "42",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 12 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 12 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 42 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 42 }
          ]
        ],
        [
          "43",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 12 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 12 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 43 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 43 }
          ]
        ],
        [
          "44",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 12 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 12 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 44 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 44 }
          ]
        ],
        [
          "45",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 13 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 13 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 45 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 45 }
          ]
        ],
        [
          "46",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 13 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 13 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 46 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 46 }
          ]
        ],
        [
          "47",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 13 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 13 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 47 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 47 }
          ]
        ],
        [
          "48",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 13 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 13 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 48 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 48 }
          ]
        ],
        [
          "49",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 13 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 13 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 49 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 49 }
          ]
        ],
        [
          "50",
          [
            { resource: Resources.SPIRIT_SHARD_LEGENDARY, amount: 15 },
            { resource: Resources.SPIRIT_BADGE_LEGENDARY, amount: 15 },
            { resource: Resources.SPEEDUP, amount: 5 * 10 * 50 },
            { resource: Resources.CUSTOM_RESOURCE_CHEST_LV2, amount: 5 * 50 }
          ]
        ]
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
  image: "dt.png",
  wip: true
}