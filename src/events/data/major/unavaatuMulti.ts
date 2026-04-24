import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const unavaatuMulti: Omit<Event, "type"> = {
    id: "unavaatu-mutli",
    name: "Furious UnaVaatu",
    description: "Fight the Worldboss! More information needed.",
    duration: 2,
    repeat: 7, // Apparently it repeats every week, on Monday
    startDate: "2026-04-27", // On Monday? I think article is wrong
    informations: [
        "This event is cross-server."
    ],
    wip: true
}