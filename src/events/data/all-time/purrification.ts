import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const purrification: Omit<Event, "type"> = {
    id: "purrification",
    name: "Purrification",
    description: "Defeat the Shattered Skulls step by step to purify the land!",
    duration: "Always",
    repeat: 0,
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
  }