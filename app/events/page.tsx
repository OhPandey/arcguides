"use client"

import { useState } from "react"
import EventCard from "@/components/EventCard"
import { Event } from "@/src/events/type/event"
import { events } from "@/src/events/data/events"
import { sortEvents } from "@/src/events/utils/eventSchedule"

export default function EventsPage() {
  const [search, setSearch] = useState("")

  const filteredEvents: Event[] = sortEvents(
    events.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <main className="mx-auto max-w-6xl p-6">

      <h1 className="text-2xl font-bold text-white mb-6">
        List of all events
      </h1>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
        />
      </div>

      {/* Event Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}

      </div>

      {filteredEvents.length === 0 && (
        <p className="text-gray-400 mt-6">
          No events found.
        </p>
      )}

    </main>
  )
}