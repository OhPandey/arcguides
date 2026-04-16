import { Event } from "../../type/event"
import { tglMulti } from "./tglMulti"
import { tglSingle } from "./tglSingle"
import { wheelOfFate } from "./wheelOfFate"

export const tglEvents: Event[] = [
    { ...tglSingle, type: "TGL" },
    { ...tglMulti, type: "TGL_CROSSSERVER" },
    { ...wheelOfFate, type: "WHEEL" },
]
