import { Event } from "../type/event"
export const events: Event[] = [
  {
    id: "tgl-single",
    name: "The Greatest Leader (Single Server)",
    description: "Do your best to prove that you are the greatest leader!",
    duration: 5,
    repeat: 14,
    startDate: "2026-04-01",
    serverStartDates: {
      "1001": "2026-04-06"
    },
    tasks: [
      {
        title: "Stage 1: Gathering/Research/Bender Recruitment",
        headers: ["Task", "Reward"],
        rows: [
          ["Gather 100,000 Resources from the Field", "1x Rare Spirit Shard, 1x Silver Scroll, 50,000 Food, 50,000 Stone"],
          ["Gather 300,000 Resources from the Field", "1x Rare Spirit Shard, 1x Golden Scroll, 100,000 Food, 100,000 Stone"],
          ["Gather 500,000 Resources from the Field", "1x Epic Spirit Shard, 1x Golden Scroll, 150,000 Food, 150,000 Stone"],
          ["Increase your Power by 30,000 with Research and Bender Recruitment", "50 Gems, 1x Rare Spirit Badge, 1x Silver Scroll, 5m Speedup"],
          ["Increase your Power by 60,000 with Research and Bender Recruitment", "100 Gems, 1x Epic Spirit Badge, 1x Golden Scroll, 60m Speedup"],
          ["Increase your Power by 90,000 with Research and Bender Recruitment", "200 Gems, 1x Legendary Spirit Badge, 1x Golden Scroll, 120m Speedup"],
        ]
      },
      {
        title: "Stage 2: Recruitment",
        headers: ["Task", "Reward"],
        rows: [
          ["Recruit 1,000 Tier 2 or Higher Benders", "30 Gems, 1x Rare Spirit Badge, 1x Silver Scroll, 25m Speedup"],
          ["Recruit 3,000 Tier 2 or Higher Benders", "60 Gems, 1x Rare Spirit Shard, 1x Silver Scroll, 50m Speedup"],
          ["Recruit 6,000 Tier 2 or Higher Benders", "90 Gems, 1x Epic Spirit Badge, 1x Silver Scroll, 75m Speedup"],
          ["Recruit 12,000 Tier 2 or Higher Benders", "120 Gems, 1x Epic Spirit Shard, 1x Golden Scroll, 120m Speedup"],
          ["Recruit 18,000 Tier 2 or Higher Benders", "150 Gems, 1x Legendary Spirit Badge, 1x Golden Scroll, 180m Speedup"],
          ["Recruit 25,000 Tier 2 or Higher Benders", "200 Gems, 1x Legendary Spirit Shard, 1x Golden Scroll, 3000m Speedup"],
        ]
      },
      {
        title: "Stage 3: Hero Growth",
        headers: ["Task", "Reward"],
        rows: [
          ["Use 10 Silver Scrolls", "1x Rare Spirit Shard, 5x Silver Scroll, 1000 EXP, 60m Speedup"],
          ["Use 10 Golden Scrolls", "1x Epic Spirit Shard, 5x Golden Scroll, 5000 EXP, 120m Speedup"],
          ["Level Up 1 Hero Skill", "1x Epic Spirit Badge, 1x Silver Scroll, 1000 EXP, 60m Speedup"],
          ["Level Up 3 Hero Skills", "3x Epic Spirit Shard, 1x Golden Scroll, 5000 EXP, 120m Speedup"],
          ["Rank Up 1 Hero", "3x Rare Spirit Shard, 1x Silver Scroll, 1000 EXP, 60m Speedup"],
          ["Rank Up 3 Heros", "3x Epic Spirit Shard, 1x Golden Scroll, 5000 EXP, 120m Speedup"],
        ]
      },
      {
        title: "Stage 4: Defeated Shatered Skulls/Destroy Shattered Skulls' Fortress/Construction/Bender Recruitment",
        headers: ["Task"],
        rows: [
          ["Waiting for confimation"]
        ]
      },
      {
        title: "Stage 5: Increase Total Combat Power",
        headers: ["Task"],
        rows: [
          ["Waiting for confimation"]
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
    disclaimer: "* This is not a generic Legendary Spirit Shard. The Legendary Spirit Shard obtained depends on the current hero rotation (See information box above).",
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
      "For the first 7 times, The Greatest Leader (TGL) only takes place on **your server**, after that the event will become [cross-server](tgl-multiple).",
      "The hero rotates after **every third event**.\nThe rotation for The Greatest Leader (Single Server) is **Aang (3x) → Amon (3x) → Yangchen (1x)**.",
    ],
    wip: true
  },
  {
    id: "beyond-limits",
    name: "Beyond Limits",
    description: "Keep trying and strive to surpass your limits!",
    duration: 1,
    repeat: "Unknown",
    startDate: "2026-04-01",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Increase your Power by 60,000*", "100 Gems, 25m Speedup, 150,000 Food, 150,000 Wood, 150,000 Stone"],
          ["Increase your Power by 120,000*", "150 Gems, 50m Speedup, 300,000 Food, 300,000 Wood, 300,000 Stone"],
          ["Increase your Power by 240,000*", "200 Gems, 120m Speedup, 450,000 Food, 450,000 Wood, 450,000 Stone"],
          ["Increase your Power by 360,000*", "250 Gems, 180m Speedup, 600,000 Food, 600,000 Wood, 600,000 Stone"],
          ["Increase your Power by 480,000*", "300 Gems, 240m Speedup, 750,000 Food, 750,000 Wood, 750,000 Stone"],
          ["Increase your Power by 600,000*", "500 Gems, 300m Speedup, 1,500,000 Food, 1,500,000 Wood, 1,500,000 Stone"],
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
    repeat: "Unknown",
    startDate: "2026-04-01",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Use 300 AP", "60m Speedup, 10,000 Food, 10,000 Wood, 10,000 Stone"],
          ["Use 1,000 AP", "300m Speedup, 30,000 Food, 30,000 Wood, 30,000 Stone"],
          ["Gather 20,000 Resources in the City", "1x Silver Scroll, 15m Speedup"],
          ["Gather 100,000 Resources in the City", "1x Golden Scroll, 45m Speedup"],
          ["Recruit 1,000 Benders", "5,000 EXP, 10,000 Food, 10,000 Wood, 10,000 Stone"],
          ["Recruit 2,000 Benders", "1x Rare Spirit Shard, 30,000 Food, 30,000 Wood, 30,000 Stone"],
          ["Recruit 6,000 Benders", "1x Epic Spirit Shard, 50,000 Food, 50,000 Wood, 50,000 Stone"],
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
    startDate: "2026-04-01",
    serverStartDates: {
      "1001": "2026-04-06"
    },
    rewards: [
      {
        title: "Spin drop rates",
        headers: ["Item", "Rate"],
        rows: [
          ["5x Legendary Spirit Shard*", "2%"],
          ["1x Legendary Spirit Shard", "5%"],
          ["2,500,000 Food", "6%"],
          ["2,500,000 Wood", "6%"],
          ["2,500,000 Stone", "6%"],
          ["1,250,000 Food", "6%"],
          ["2,400m Speedup", "10%"],
          ["2x Legendary Spirit Badge", "12%"],
          ["1,200m Speedup", "22%"],
          ["1x Legendary Spirit Shard*", "25%"],
        ]
      },
      {
        title: "Spin rewards",
        headers: ["Requirement", "Reward"],
        rows: [
          ["Use 10 Spins", "5x Legendary Spirit Shard*"],
          ["Use 25 Spins", "10x Legendary Spirit Shard*"],
          ["Use 45 Spins", "15x Legendary Spirit Shard*, 10x Legendary Spirit Badge"],
          ["Use 75 Spins", "20x Legendary Spirit Shard*, 15x Legendary Spirit Badge"],
          ["Use 100 Spins", "30x Legendary Spirit Shard*, 20x Legendary Spirit Badge"],
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
    startDate: "2026-04-02",
    duration: 2,
    repeat: "Unknown",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Gather 200,000 Resources from the Field", "5,000 EXP, 10,000 Food, 10,000 Wood, 10,000 Stone"],
          ["Gather 500,000 Resources from the Field", "1x Silver Scroll, 30,000 Food, 30,000 Wood, 30,000 Stone"],
          ["Gather 1,000,000 Resources from the Field", "1x Golden Scroll, 50,000 Food, 50,000 Wood, 50,000 Stone"],
          ["Purchase 5 items at the Trading Post", "5,000 EXP, 5m Speedup, 100 AP, 1x Seal of Solidarity"],
          ["Purchase 15 items at the Trading Post", "1x Silver Scroll, 60m Speedup, 300 AP, 2x Seal of Solidarity"],
          ["Purchase 300 items at the Trading Post", "1x Golden Scroll, 120m Speedup, 500 AP, 3x Seal of Solidarity"],
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
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Visit either Discord, X, Facebook, Instgram or TikTok", "100 Gems"],
        ]
      }
    ],
    details: [
      { type: "p", content: "Community", space: true },
      { type: "p", content: "By joining our official community, you can keep up with the latest updates, events, and more inofrmation about the game. Enjoy Avatar Legends. Realms Collide with leaders from around the world!", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 5)."
    ]
  },

  {
    id: "website",
    name: "Official Website",
    description: "Visit our website.",
    duration: "Always",
    repeat: 0,
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Visit avatarrealmscollide.com", "100 Gems"],
        ]
      }
    ],
    details: [
      { type: "p", content: "Official Website", space: true },
      { type: "p", content: "Visit our website for the latest game news, exclusive in-game currency, amazing gallery, and 100 free gems!", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 5)."
    ]
  },
  {
    id: "purrification",
    name: "Purrification",
    description: "Defeat the Shattered Skulls step by step to purify the land!",
    duration: "Always",
    repeat: 0,
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Defeat Shattered Skull - Level 1 Fuzhi", "100 Gems, 1x Epic Spirit Shard, 5x Rare Spirit Shard, 30m Speedup, 1x Lv 1. Purification Event Chest"],
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
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 5)."
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
    disclaimer: "There are no Tasks or Rewards tied to this event.",
    informations: [
      "This time-limited reminder event notifies you that an important milestone will soon unlock in your Chronicle of Harmony.",
    ],
    tips: [
      "Known Trigger of this event:\n- Level 1 Base\n- Level 2 Base\n- Level  3 Base\n - Level 1 Gate\n- Level 2 Gate\n- Level 3 Gate\n- Level 4 Gate\n- Altar\n- Sanctum\n- Shrine\n- Legacy"
    ]
  },
  {
    id: "the-dominator",
    name: "The Dominator",
    description: "Build a frontline in the Rift to bring peace to the raging spirits. Alliance members, assemble!",
    duration: 30,
    repeat: 0,
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Participate in 1 Invasion", "100 Gems, 2,000x Forge Coin, 2x Purified Essence, 200x Verdant Splinter"],
          ["Participate in 3 Invasions", "200 Gems, 3,000x Forge Coin, 5x Purified Essence, 500x Verdant Splinter"],
          ["Participate in 5 Invasions", "300 Gems, 5,000x Forge Coin, 10x Purified Essence, 1,000x Verdant Splinter"],


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
    serverStartDates: {
      "1001": "2026-03-30"
    },
    repeat: "Unknown",
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
          ["1", "50,000 Food/Wood/Stone"],
          ["1", "25,000 Gold"],
          ["1", "60m Speedup"],
          ["2", "1x Rare Spirit Shard"],
          ["2", "1x Rare Spirit Badge"],
          ["2", "1x Silver Scroll"],
          ["8", "1x Epic Spirit Shard (Tenzin/Toph/Zuko/Katara)"],
          ["10", "1x Reset Talents"],
          ["10", "1x Golden Scroll"],
          ["30", "1x Legendary Spirit Shard"],
          ["30", "1x Legendary Spirit Badge"],
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
    id: "path-to-development",
    name: "Path to Development",
    description: "Upgrade the Town Hall and make your city more Powerful!",
    duration: "Always",
    repeat: 0,
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Achieve Town Hall Level 5", "100 Gems, 1x Legendary Spirit Shard, 1x Legendary Spirit Badge, 60m Speedup"],
          ["Achieve Town Hall Level 8", "200 Gems, 2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 180m Speedup"],
          ["Achieve Town Hall Level 11", "300 Gems, 3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 300m Speedup"],
          ["Achieve Town Hall Level 14", "400 Gems, 4x Legendary Spirit Shard, 4x Legendary Spirit Badge, 600m Speedup"],
          ["Achieve Town Hall Level 17", "500 Gems, 5x Legendary Spirit Shard, 5x Legendary Spirit Badge, 900m Speedup"],
          ["Achieve Town Hall Level 20", "600 Gems, 6x Legendary Spirit Shard, 6x Legendary Spirit Badge, 1200m Speedup"],
          ["Achieve Town Hall Level <Missing>", "700 Gems, 7x Legendary Spirit Shard, 7x Legendary Spirit Badge, <Missing> Speedup"],
          ["Achieve Town Hall Level <Missing>", "800 Gems, 8x Legendary Spirit Shard, 8x Legendary Spirit Badge, <Missing> Speedup"],
          ["Achieve Town Hall Level 27", "900 Gems, 9x Legendary Spirit Shard, 9x Legendary Spirit Badge, 4200m Speedup"],
          ["Achieve Town Hall Level 30", "1000 Gems, 10x Legendary Spirit Shard, 10x Legendary Spirit Badge, 6000m Speedup"],
        ]
      }
    ],
    disclaimer: "This is a step-by-step task line. You must complete the previous step to unlock the next one.",
    details: [
      { type: "p", content: "Upgrade the Town Hall and make your city more Powerful!", space: true },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 5)."
    ],
    wip: true
  },
  {
    id: "login",
    name: "Login Event",
    description: "Log in and get Legendary Airbender hero 'Bumi'!",
    duration: 30,
    repeat: 0,
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Log in for 1 Day", "100 Gems"],
          ["Log in for 2 Days", "10x Legendary Spirit Shard: Bumi"],
          ["Log in for 3 Days", "5x Golden Scroll"],
          ["Log in for 4 Days", "720m Speedup"],
          ["Log in for 5 Days", "50,000 EXP"],
          ["Log in for 6 Days", "10x Epic Spirit Shard"],
          ["Log in for 4 Days", "20x Legendary Spirit Shard: Bumi"],
        ]
      }
    ],
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
      "This is a special event everyone gets upon unlocking the calendar (Town Hall 5)."
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
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Achieve 30,000 Power", "1x Silver Scroll, 50m Speedup, 1,000 EXP"],
          ["Achieve 80,000 Power", "2x Silver Scroll, 50m Speedup, 10,000 EXP, 10,000 Food"],
          ["Achieve 150,000 Power", "3x Silver Scroll, 200m Speedup, 15,000 EXP"],
          ["Achieve 300,000 Power", "5x Silver Scroll, 120m Speedup, 50,000 EXP, 150,000 Food"],
          ["Achieve 600,000 Power", "1x Golden Scroll, 3600m Speedup, 100,000 EXP"],
          ["Achieve 1,000,000 Power", "2x Golden Scroll, 3x Epic Spirit Badge, 600m Speedup"],
          ["Achieve 1,500,000 Power", "3x Golden Scroll, 5x Epic Spirit Badge, 900m Speedup"],
          ["Achieve 2,000,000 Power", "5x Golden Scroll, 7x Epic Spirit Badge, 1500m Speedup"],
          ["Achieve 2,500,000 Power", "Obisidian Palace Hall Skin, 500 Gems, 10x Golden Scroll, 000m Speedup"],
        ]
      }
    ],
    rewards: [
      {
        title: "Overall Ranking",
        headers: ["Rank", "Reward"],
        rows: [
          ["1", "50x Legendary Spirit Shard, 100x Epic Spirit Shard, 20x Golden Scroll, 1,200m Speedup"],
          ["2", "30x Legendary Spirit Shard, 80x Epic Spirit Shard, 15x Golden Scroll, 900m Speedup"],
          ["3", "20x Legendary Spirit Shard, 60x Epic Spirit Shard, 10x Golden Scroll, 600m Speedup"],
          ["4-10", "10x Legendary Spirit Shard, 40x Epic Spirit Shard, 5x Golden Scroll, 300m Speedup"],
          ["11-20", "5x Legendary Spirit Shard, 30x Epic Spirit Shard, 3x Golden Scroll, 180m Speedup"],
          ["21-50", "3x Legendary Spirit Shard, 20x Epic Spirit Shard, 2x Golden Scroll, 120m Speedup"],
          ["51-100", "2x Legendary Spirit Shard, 10x Epic Spirit Shard, 1x Golden Scroll, 60m Speedup"],
        ]
      }
    ],
    details: [
      { type: "p", content: "A new world full of endless possibilities awaits!", space: true },
      {
        type: "ol", items: [
          "This event will take place when a new world opens and will last for 8 days.",
          "Increase your Power and seize amazing rewards.",
          "Power can be increased with construction, research, recruitment and hero growth.",
          "This event won’t happen again!"
        ], space: true
      },
      { type: "quotedate", author: "ANGames", date: "2026-04-02" }
    ],
    informations: [
      "This special event is only available at the start of a new world (server). New servers open every Friday."
    ],
    tips: [
      "This is one of the most important events in a server's lifecycle. Currently, the Town Hall skin - which permanently increases all benders' ATK and DEF by 2% - can only be obtained through this event."
    ]
  },
  {
    id: "melt-the-candle",
    name: "Melt the Candle",
    description: "Who can melt the candle first?",
    duration: 2,
    repeat: "Unknown",
    tasks: [
      {
        headers: ["Task"],
        rows: [
          ["<Need confirmation>"]
        ]
      }
    ],
    rewards: [
      {
        title: "Overall Ranking",
        headers: ["Rank", "Reward"],
        rows: [
          ["1", "30x Legendary Spirit Shard, 1,000 Gems, 1,200m Speedup, 1,500,000 Food, 1,500,000 Wood"],
          ["2", "20x Legendary Spirit Shard, 500 Gems, 900m Speedup, 1,200,000 Food, 1,200,000 Wood"],
          ["3", "10x Legendary Spirit Shard, 300 Gems, 600m Speedup, 900,000 Food, 900,000 Wood"],
          ["4-10", "5x Legendary Spirit Shard, 200 Gems, 300m Speedup, 600,000 Food, 600,000 Wood"],
          ["11-20", "3x Legendary Spirit Shard, 100 Gems, 180m Speedup, 450,000 Food, 450,000 Wood"],
          ["21-50", "2x Legendary Spirit Shard, 50 Gems, 120m Speedup, 300,000 Food, 300,000 Wood"],
          ["51-100", "1x Legendary Spirit Shard, 20 Gems, 60m Speedup, 150,000 Food, 150,000 Wood"],
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
    ],
    wip: true
  },
  {
    id: "build-strength",
    name: "Build Strength",
    description: "Strengthen your power through building upgrades, research and bender recruiting.",
    duration: 2,
    repeat: "Unknown",
    startDate: "2026-04-03",
    tasks: [
      {
        headers: ["Task", "Reward"],
        rows: [
          ["Increase Power by 120,000*", "3 Rare Spirit Shard, 100m Speedup"],
          ["Increase Power by 240,000*", "1 Epic Spirit Shard, 1 Rare Spirit Shard, 240m Speedup"],
          ["Increase Power by 360,000*", "2 Epic Spirit Shard, 480m Speedup"],
          ["Increase Power by 480,000*", "1 Legendary Spirit Shard, 1 Epic Spirit Shard, 720m Speedup"],
          ["Increase Power by 600,000*", "3 Legendary Spirit Shard, 1200m Speedup"]
        ]
      }
    ],
    rewards: [
      {
        title: "Overall Ranking",
        headers: ["Rank", "Reward"],
        rows: [
          ["1", "30x Legendary Spirit Shard, 1,000 Gems, 1,200m Speedup, 1,500,000 Food, 1,500,000 Wood"],
          ["2", "20x Legendary Spirit Shard, 500 Gems, 900m Speedup, 1,200,000 Food, 1,200,000 Wood"],
          ["3", "10x Legendary Spirit Shard, 300 Gems, 600m Speedup, 900,000 Food, 900,000 Wood"],
          ["4-10", "5x Legendary Spirit Shard, 200 Gems, 300m Speedup, 600,000 Food, 600,000 Wood"],
          ["11-20", "3x Legendary Spirit Shard, 100 Gems, 180m Speedup, 450,000 Food, 450,000 Wood"],
          ["21-50", "2x Legendary Spirit Shard, 50 Gems, 120m Speedup, 300,000 Food, 300,000 Wood"],
          ["51-100", "1x Legendary Spirit Shard, 20 Gems, 60m Speedup, 150,000 Food, 150,000 Wood"],
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
    id: "first-anniversary",
    name: "1st Anniversary",
    description: "Traces of Memory",
    duration: 11,
    startDate: "2026-04-02",
    repeat: "Unknown",
    tasks: [
      {
        title: "First Anniversary Daily Rewards",
        headers: ["Task", "Reward"],
        rows: [
          ["Log in for 1 Day", "10x Lucky Dice"],
          ["Log in for 2 Days", "5x Golden Scroll"],
          ["Log in for 3 Days", "10x Sacred Fruit"],
          ["Log in for 4 Days", "5x Mystic Orb"],
          ["Log in for 5 Days", "300m Speedup"],
          ["Log in for 6 Days", "200 Gems"],
          ["Log in for 7 Days", '"Moment of Memories" Frame Skin'],
        ]
      },
      {
        title: "Firm Faith",
        headers: ["Task", "Reward"],
        rows: [
          ["Defeat Shattered Skulls (Daily Cap: 5)", "1x Supply Box"],
          ["Harvest Resources (Daily Cap: 5)", "1x Supply Box"],
          ["Use 480m Speedup (Repeatable)", "1x Supply Box"],
          ["Use 50 Gems (Repeatable)", "1x Supply Box"],
        ]
      },
      {
        title: "Limited Time Top-Up",
        headers: ["Task", "Reward"],
        rows: [
          ["Collect 500 Top-Up Points (by purchasing bundles)", "500 Gems, 240m Speedup"],
          ["Collect 1,500 Top-Up Points (by purchasing bundles)", "1,500 Gems, 900m Speedup"],
          ["Collect 2,500 Top-Up Points (by purchasing bundles)", "2,000 Gems, 2x Legendary Spirit Shard, 300m Speedup"],
          ["Collect 5,000 Top-Up Points (by purchasing bundles)", "5x Legendary Spirit Shard, 50x Scared Fruit, 1,200m Speedup"],
          ["Collect 10,000 Top-Up Points (by purchasing bundles)", "10x Legendary Spirit Shard, 30x Purified Essence, 2000x Verdant Splinter, 1,200m Speedup"],
          ["Collect 20,000 Top-Up Points (by purchasing bundles)", "10x Legendary Spirit Badge, 6,000m Speedup"],
          ["Collect 40,000 Top-Up Points (by purchasing bundles)", "100x Companion Material Custom Chest, 100x Purified Essence, 10,000 Verdant Splinter, 6,000m Speedup"],
        ]
      },
      {
        title: "Fragments of Life (Board Layout)",
        headers: ["Board Position", "Task", "Reward"],
        rows: [
          ["1-1", "<Unknown, unlocks immediately>", "<Unknown, unlocks immediately>"],
          ["1-2", "Complete 80 Expditions", "1x Lucky Dice, 1x Epic Spirit Badge, 25,000 EXP"],
          ["1-3", "Recruit 30,000 Benders", "2x Lucky Dice, 1x Epic Spirit Shard, 50,000 EXP"],
          ["2-1", "Defeat 80 Shattered Skulls", "1x Lucky Dice, 1x Epic Spirit Shard, 25,000 EXP"],
          ["2-2", "Increase Power by 100,000*", "1x Lucky Dice, 2x Epic Spirit Shard, 50,000 EXP"],
          ["2-3", "Purchase 80 items at the Trading Post", "1x Lucky Dice, 1x Epic Spirit Shard, 25,000 EXP"],
          ["3-1", "Use 8,0000m of Speedup", "2x Lucky Dice, 1x Epic Spirit Shard, 50,000 EXP"],
          ["3-2", "Use 100 Scrolls", "1x Lucky Dice, 1x Epic Spirit Shard, 25,000 EXP"],
          ["3-3", "Gather 3,000,000 Resources from the Field", "1x Lucky Dice, 1x Epic Spirit Shard, 25,000 EXP"],
          ["4-1", "Destroy 10 Shattered Skull Fortresses", "2x Lucky Dice, 1x Epic Spirit Shard, 50,000 EXP"],
          ["4-2", "Use 5,000 Gems", "2x Lucky Dice, 1x Epic Spirit Shard, 50,000 EXP"],
          ["4-3", "Complete 30 Companion surveys", "1x Lucky Dice, 1x Epic Spirit Shard, 25,000 EXP"],
          ["5-1", "Donate 200 to allinace research", "1x Lucky Dice, 1x Epic Spirit Shard, 25,000 EXP"],
          ["5-2", "Win 25 arena fights", "1x Lucky Dice, 1x Epic Spirit Shard, 25,000 EXP"],
          ["5-3", "Collect 500 Top-Up Points (by purchasing bundles)", "2x Lucky Dice, 1x Epic Spirit Shard, 50,000 EXP"],
          ["1-4", "Complete 1-1, 1-2 and 1-3", "4x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["2-4", "Complete 2-1, 2-2 and 2-3", "4x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["3-4", "Complete 3-1, 3-2 and 3-3", "4x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["4-4", "Complete 4-1, 4-2 and 4-3", "4x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["5-4", "Complete 5-1, 5-2 and 5-3", "4x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["6-1", "Complete 1-1, 2-1, 3-1, 4-1, and 5-1", "5x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["6-2", "Complete 1-2, 2-2, 3-2, 4-2, and 5-2", "5x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["6-3", "Complete 1-3, 2-3, 3-3, 4-3, and 5-3", "5x Lucky Dice, 4x Epic Spirit Shard, Lv.5 Custom Resource Chest"],
          ["None", "Complete all missions", "20x Lucky Dice, 10x Legendary Spirit Shard, 10x Legendary Spirit Badge, 10x Sacred Fruit, 10x Sacred Dew"],
        ]
      },
      {
        title: "Secret Tunnel",
        headers: ["Laps", "Reward"],
        rows: [
          ["10", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 20x Gear Material Custom Chest, 10x Companion Material Custom Chest"],
          ["30", "3x Legendary Spirit Shard, 3x Legendary Spirit Badge, 30x Gear Material Custom Chest, 20x Companion Material Custom Chest"],
          ["60", "5x Legendary Spirit Shard, 5x Legendary Spirit Badge, 40x Gear Material Custom Chest, 30x Companion Material Custom Chest"],
          ["100", "8x Legendary Spirit Shard, 8x Legendary Spirit Badge, 50x Gear Material Custom Chest, 40x Companion Material Custom Chest"],
          ["200", "12x Legendary Spirit Shard, 12x Legendary Spirit Badge, 70x Gear Material Custom Chest, 60x Companion Material Custom Chest"],
          ["400", "20x Legendary Spirit Shard, 20x Legendary Spirit Badge, 90x Gear Material Custom Chest, 100x Companion Material Custom Chest"],
          ["700", "30x Legendary Spirit Shard, 30x Legendary Spirit Badge, 150x Gear Material Custom Chest, 200x Companion Material Custom Chest"],
          ["1000", '"1st Anniversary: Twilight" Town Hall Skin'],
        ]
      },
      {
        title: "Path fo Fate (Start: Day 2, Duration: 5 Days)",
        headers: ["Task"],
        rows: [
          ["Not yet available."]
        ]
      },
      {
        title: "Harvest of Bonds I (Start: Day 6, Duration: 2 Days)",
        headers: ["Task"],
        rows: [
          ["Not yet available."]
        ]
      },
      {
        title: "Harvest of Bonds II (Start: Day 8: Duration: 2 Days)",
        headers: ["Task"],
        rows: [
          ["Not yet available."]
        ]
      },
    ],
    rewards: [
      {
        title: "1st Anniversary Anitques (Lotus Shop)",
        headers: ["Lotus", "Item"],
        rows: [
          ["10", "1x Legendary Spirit Shard: Cai (Cap: 100)"],
          ["10", "1x Legendary Spirit Shard: Melon Lord (Cap: 20)"],
          ["12", "1,500,000 Food/Wood/Stone (Cap: 50)"],
          ["12", "750,000 Food/Wood/Stone (Cap: 50)"],
          ["20", "1x Legendary Spirit Badge (Cap: 20)"],
          ["20", "1x Legendary Spirit Shard (Cap: 20)"],
          ["20", "10x Purified Essence (Cap: 50)"],
          ["20", "1000x Verdant Splinter (Cap: 50)"],
          ["34", "1,440m Speedup (Cap: 50)"],
          ["150", "1x Epic Gear Custom Chest (Cap: 3)"],
          ["200", "1x Epic Deco (Cap: 1 - 4 decos)"],
          ["500", "1x Legendary Gear Custom Chest (Cap: 1)"],
          ["2,000", "1x Legendary Frame Skin (Cap: 1 - 8 skins)"],
        ]
      },
      {
        title: "Secret Tunnel (Overall Ranking)",
        headers: ["Rank", "Reward"],
        rows: [
          ["1", "Chibi Aang Portrait, Chibi Katara Portrait, 100x Legendary Spirit Shard, 100x Legendary Spirit Badge, 6,000m Speedup, 100x Gear Material Chest, 100x Companion Material Custom Chest"],
          ["2", "Chibi Aang Portrait, Chibi Katara Portrait, 80x Legendary Spirit Shard, 80x Legendary Spirit Badge, 4,800m Speedup, 80x Gear Material Chest, 80x Companion Material Custom Chest"],
          ["3", "Chibi Aang Portrait, Chibi Katara Portrait, 60x Legendary Spirit Shard, 60x Legendary Spirit Badge, 3,600m Speedup, 60x Gear Material Chest, 60x Companion Material Custom Chest"],
          ["4-5", "Chibi Aang Portrait, Chibi Katara Portrait, 50x Legendary Spirit Shard, 50x Legendary Spirit Badge, 3,000m Speedup, 50x Gear Material Chest, 50x Companion Material Custom Chest"],
          ["6-10", "Chibi Aang Portrait, Chibi Katara Portrait, 40x Legendary Spirit Shard, 40x Legendary Spirit Badge, 2,400m Speedup, 40x Gear Material Chest, 40x Companion Material Custom Chest"],
          ["11-20", "30x Legendary Spirit Shard, 30x Legendary Spirit Badge, 1,800m Speedup, 30x Gear Material Chest, 30x Companion Material Custom Chest"],
          ["21-30", "20x Legendary Spirit Shard, 20x Legendary Spirit Badge, 1,200m Speedup, 20x Gear Material Chest, 20x Companion Material Custom Chest"],
          ["31-50", "10x Legendary Spirit Shard, 10x Legendary Spirit Badge, 600m Speedup, 10x Gear Material Chest, 10x Companion Material Custom Chest"],
          ["51-100", "5x Legendary Spirit Shard, 5x Legendary Spirit Badge, 300m Speedup, 5x Gear Material Chest, 5x Companion Material Custom Chest"],
          ["101-200", "2x Legendary Spirit Shard, 2x Legendary Spirit Badge, 120m Speedup, 2x Gear Material Chest, 2x Companion Material Custom Chest"],
        ]
      },
    ],
    disclaimer: "* Hero Power is excluded.",
    informations: [
      'This is a “mega” event that unlocks over time and features multiple smaller events running simultaneously.',
      "The Secret Tunnel Ranking is cross-server, regardless of whether cross-server is enabled on your server (e.g., TGL)."
    ]
  },
  {
    id: "desert-troublemakers",
    name: "Desert Troublemakers",
    description: "Defeat Scorched Skulls!",
    duration: 2,
    repeat: "Unknown",
    serverStartDates: {
      "1001": "2026-04-03"
    },
    tasks: [
      {
        title: "Easy Difficulty",
        headers: ["Level Reward", "Item"],
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
    ],
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
]