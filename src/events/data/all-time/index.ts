import { Event } from "../../type/event"
import { community } from "./community"
import { pathToDevelopment } from "./pathToDevelopment"
import { purrification } from "./purrification"
import { website } from "./website"

export const allTimeEvents: Event[] = [
    { ...community, type: "ALL_TIME" },
    { ...website, type: "ALL_TIME" },
    { ...purrification, type: "ALL_TIME" },
    { ...pathToDevelopment, type: "ALL_TIME" }
]
