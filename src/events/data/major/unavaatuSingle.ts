import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const unavaatuSingle: Omit<Event, "type"> = {
    id: "unavaatu-single",
    name: "UnaVaatu",
    description: "Fight the Worldboss! More information needed.",
     duration: 2,
    repeat: 7, // Apparently it repeats every week, on Monday
    startDate: "2026-05-04",  // First start that should happen after maintenance
    wip: true,
    image: "unavaatu.png"
}