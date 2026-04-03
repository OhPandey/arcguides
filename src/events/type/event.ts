export type Event = {
  id: string
  name: string
  description: string
  duration: number | "Always"
  repeat: number | "Seasonal" | "Unregularly" | "Unknown"
  startDate?: string //default
  serverStartDates?: Record<string, string>
  tasks?: EventTable[]
  rewards?: EventTable[]
  disclaimer?: string
  details?: Details[]
  tips?: string[]
  informations?: string[]
  wip?: boolean
}

export type EventTable = {
  title?: string
  headers: string[]
  rows: string[][]
}

export type Details =
  | { type: "p"; content: string; space?: boolean }
  | { type: "ul"; items: string[]; space?: boolean }
  | { type: "ol"; items: string[]; space?: boolean }
  | { type: "h2"; content: string; space?: boolean }
  | { type: "h3"; content: string; space?: boolean }
  | { type: "quotedate"; author: string; date: string; space?: boolean } // I'm lazy