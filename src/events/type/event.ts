export type Event = {
  id: string
  name: string
  description: string
  duration: number | "Always"
  repeat: number | "Seasonal" | "Unregularly" | "Unknown"
  startDate?: string //default
  serverStartDates?: Record<string, string>
  tasks?: EventTableData []
  rewards?: EventTableData []
  disclaimer?: string
  details?: Details[]
  tips?: string[]
  informations?: string[]
  wip?: boolean
}

export type EventTableData  = {
  title?: string
  description?: string
  headers: string[]
  rows: string[][]
  dividerAfterColumns?: number[]
}

export type ListItem =
  | string
  | {
      content: string
      children?: Details[]
    }

export type Details =
  | { type: "p"; content: string; space?: boolean }
  | { type: "ul"; items: ListItem[]; space?: boolean }
  | { type: "ol"; items: ListItem[]; space?: boolean }
  | { type: "h2"; content: string; space?: boolean }
  | { type: "h3"; content: string; space?: boolean }
  | { type: "quotedate"; author: string; date: string; space?: boolean }