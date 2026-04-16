import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const community: Omit<Event, "type"> = {
  id: "community",
  name: "Community",
  description: "Join our community.",
  duration: "Always",
  repeat: 0,
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
}