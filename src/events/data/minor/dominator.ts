import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const dominator: Omit<Event, "type"> = {
    id: "the-dominator",
    name: "The Dominator",
    description: "Build a frontline in the Rift to bring peace to the raging spirits. Alliance members, assemble!",
    duration: 30,
    repeat: 0,
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
  }