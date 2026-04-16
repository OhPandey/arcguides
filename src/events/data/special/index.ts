
import { Event } from "../../type/event";
import { firstAnniversary } from "./firstAnniversary";
import { intoTheFray } from "./intoTheFray";
import { newWorld } from "./newWorld";

export const specialEvents: Event[] = [
   { ...intoTheFray, type: "CHRONICLE" },
   { ...firstAnniversary, type: "UNIQUE" },
   { ...newWorld, type: "NEW_WORLD" }
]