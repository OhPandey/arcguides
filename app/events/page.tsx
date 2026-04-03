"use client"

import { useState } from "react"
import EventCard from "@/components/EventCard"
import { events } from "@/src/events/data/events"
import { sortEvents } from "@/src/events/utils/eventSchedule"
import { servers } from "@/src/events/data/servers"

export default function EventsPage() {
  const [search, setSearch] = useState("")
  const [server, setServer] = useState("1081")

  const filteredEvents = sortEvents(
    events.filter(e => e.name.toLowerCase().includes(search.toLowerCase())),
    server
  )

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold text-white mb-6">List of all events</h1>

      {/* Search */}
      <div className="mb-6 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
        />

        {/* Server select */}
        <select
          value={server}
          onChange={(e) => setServer(e.target.value)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
        >
          {servers.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} {s.wip ? "🛠️" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Event Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} serverId={server} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="text-gray-400 mt-6">No events found.</p>
      )}
    </main>
  )
}