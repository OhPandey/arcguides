import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const website: Omit<Event, "type"> = {
  id: "website",
  name: "Official Website",
  description: "Visit our website.",
  duration: "Always",
  repeat: 0,
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
}