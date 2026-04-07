import { SeedType } from "../data/servers"

export type Event = {
  id: string
  name: string
  description: string
  duration: number | "Always"
  repeat: number | "Seasonal" | "Unregularly" | "Unknown"
  startDate?: string
  seedStartDate?: Record<SeedType, string>
  type?: ScheduleType
  tasks?: EventTableData []
  rewards?: EventTableData []
  disclaimer?: string
  details?: Details[]
  tips?: string[]
  informations?: string[]
  wip?: boolean
}

// Still WIP - Need more data!
export type ScheduleType =
  | "ALL_TIME"
  | "MINOR"
  | "TGL"
  | "TGL_CROSSSERVER"
  | "WHEEL"
  | "NEW_WORLD"
  | "CHRONICLE"
  | "UNIQUE"
  | "TEMPLE_WAR"
  | "UNALAQ_PASS"
  | "DESERT_TROUBLEMAKERS"

export type EventTableData  = {
  title?: string
  description?: string
  headers: string[]
  rows: string[][]
  dividerAfterColumns?: number[]
}

export type ListItem = string
  | {
      content: string
      children?: Details[]
    }

export type Details = { type: "p"; content: string; space?: boolean }
  | { type: "ul"; items: ListItem[]; space?: boolean }
  | { type: "ol"; items: ListItem[]; space?: boolean }
  | { type: "h2"; content: string; space?: boolean }
  | { type: "h3"; content: string; space?: boolean }
  | { type: "quotedate"; author: string; date: string; space?: boolean }