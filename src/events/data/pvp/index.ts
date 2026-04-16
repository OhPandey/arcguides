import { Event } from "../../type/event"
import { templeWar } from "./templeWar"
import { vaultOfMurang } from "./vault"

export const pvpEvents: Event[] = [
    { ...vaultOfMurang, type: "VAULT" },
    { ...templeWar, type: "TEMPLE_WAR" }
]
