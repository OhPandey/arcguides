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
}