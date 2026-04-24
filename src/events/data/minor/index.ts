
import { Event } from "../../type/event";
import { balanceAndOrder } from "../minor/balanceAndOrder";
import { beyondLimits } from "../minor/beyondLimits";
import { bortesScheme } from "../minor/bortesScheme";
import { buildStrength } from "../minor/buildStrength";
import { dominator } from "../minor/dominator";
import { gloriousVictory } from "../minor/gloriousVictory";
import { harvestSeason } from "../minor/harvestSeason";
import { login } from "../minor/login";
import { meltTheCandle } from "../minor/meltTheCandle";
import { readiness } from "../minor/readiness";
import { roarOfBattle } from "../minor/roarOfBattle";
import { searchAndUpgrade } from "../minor/searchAndUpgrade";
import { stayFocused } from "../minor/stayFocused";
import { supplyQuest } from "../minor/supplyQuest";
import { timeless } from "../minor/timeless";
import { unbreakableWill } from "../minor/unbreakableWill";
import { gemRush } from "./gemRush";
import { unitedMind } from "./unitedMind";

export const minorEvents: Event[] = [
   { ...unbreakableWill, type: "MINOR" },
   { ...harvestSeason, type: "MINOR" },
   { ...dominator, type: "MINOR" },
   { ...login, type: "MINOR" },
   { ...meltTheCandle, type: "MINOR" },
   { ...buildStrength, type: "MINOR" },
   { ...stayFocused, type: "MINOR" },
   { ...bortesScheme, type: "MINOR" },
   { ...roarOfBattle, type: "MINOR" },
   { ...gloriousVictory, type: "MINOR" },
   { ...balanceAndOrder, type: "MINOR" },
   { ...readiness, type: "MINOR" },
   { ...supplyQuest, type: "MINOR" },
   { ...searchAndUpgrade, type: "MINOR" },
   { ...timeless, type: "MINOR" },
   { ...beyondLimits, type: "MINOR" },
   { ...unitedMind, type: "MINOR" },
   { ...gemRush, type: "MINOR" }
]