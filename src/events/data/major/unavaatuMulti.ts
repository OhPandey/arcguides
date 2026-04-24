import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const unavaatuMulti: Omit<Event, "type"> = {
    id: "unavaatu-mutli",
    name: "Furious UnaVaatu",
    description: "Fight the Worldboss! More information needed.",
    duration: 2,
    repeat: 7, // Apparently it repeats every week, on Monday
    startDate: "2026-05-04", // First start that should happen after maintenance
    informations: [
        "This event is cross-server."
    ],
    wip: true
}