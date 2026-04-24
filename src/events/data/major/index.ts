import { Event } from "../../type/event"
import { avatarDay } from "./avatarDay"
import { desertTroublemakers } from "./desertTroublemakers"
import { unalaqPass } from "./unalaqPass"
import { unavaatuMulti } from "./unavaatuMulti"
import { unavaatuSingle } from "./unavaatuSingle copy"
import { wayToHarmony } from "./wayToHarmony"

export const majorEvents: Event[] = [
    { ...desertTroublemakers, type: "DESERT_TROUBLEMAKERS" },
    { ...unalaqPass, type: "UNALAQ_PASS" },
    { ...avatarDay, type: "BIWEEKLY" },
    { ...wayToHarmony, type: "BIWEEKLY" },
    { ...unavaatuSingle, type: "WORLDBOSS_SINGLE" },
    { ...unavaatuMulti, type: "WORLDBOSS_MULTI" },
]
