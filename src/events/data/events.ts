import { Event } from "../type/event"
import { minorEvents } from "./minor"
import { tglEvents } from "./tgl"
import { allTimeEvents } from "./all-time"
import { specialEvents } from "./special"
import { majorEvents } from "./major"
import { pvpEvents } from "./pvp"

export const events: Event[] = [
  ...minorEvents,
  ...majorEvents,
  ...tglEvents,
  ...allTimeEvents,
  ...specialEvents,
  ...pvpEvents
] 