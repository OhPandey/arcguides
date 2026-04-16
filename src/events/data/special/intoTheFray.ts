import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const intoTheFray: Omit<Event, "type"> = {
  id: "into-the-fray",
  name: "Into the Fray",
  description: "Get ready!",
  duration: 1,
  repeat: "Unregularly",
  informations: [
    "This time-limited reminder event notifies you that an important milestone will soon unlock in your Chronicle of Harmony.",
  ],
  tips: [
    "Known Trigger of this event:\n- Level 1 Base\n- Level 2 Base\n- Level  3 Base\n- Level 1 Gate\n- Level 2 Gate\n- Level 3 Gate\n- Level 4 Gate\n- Altar\n- Sanctum\n- Shrine\n- Legacy\n- Sanctuary\n- Temple"
  ]
}