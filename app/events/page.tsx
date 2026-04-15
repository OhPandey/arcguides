"use client"

import { useState, useEffect, useMemo } from "react"
import EventCard from "@/components/EventCard"
import { events } from "@/src/events/data/events"
import { sortEvents } from "@/src/events/utils/eventSchedule"
import { servers } from "@/src/events/data/servers"
import EventTimeLine from "@/components/EventTimeLine"
import { getChronicleInfo } from "@/src/events/utils/chronicle"

export default function EventsPage() {
  const [search, setSearch] = useState("")
  const [serverId, setServer] = useState("1074")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedSearch = localStorage.getItem("eventSearch") || ""
    const savedServer = localStorage.getItem("eventServer") || "1074"
    setSearch(savedSearch)
    setServer(savedServer)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("eventSearch", search)
    }
  }, [search, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("eventServer", serverId)
    }
  }, [serverId, mounted])

  const server = servers.find(s => s.id.toString() === serverId) ?? servers[0]

  const filteredEvents = useMemo(() => {
    const filtered = events.filter(e =>
      e.name.toLowerCase().includes(search.toLowerCase())
    )
    return sortEvents(filtered, server)
  }, [search, server])

  const chronicleInfo = useMemo(() => {
    if (!server)
      return null
    const release = new Date(server.releaseDate).getTime()
    return getChronicleInfo(release)
  }, [server])

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold text-white mb-6">List of all events</h1>

      {chronicleInfo && (() => {
        const isFinalChronicle = chronicleInfo?.index === chronicleInfo?.total
        const isNextChronicleFinal = chronicleInfo ? chronicleInfo.index + 1 === chronicleInfo.total : false
        const isSecondNextChronicleFinal = chronicleInfo ? chronicleInfo.index + 2 === chronicleInfo.total : false
        return (
          <div className="mb-6 flex justify-end">
            <div className="rounded-lg bg-gray-900 border border-gray-700 p-4 text-white text-right">
              <p>
                Current Chronicle:{" "}
                <span className="font-semibold">
                  {chronicleInfo.current.name} ({chronicleInfo.index}/{chronicleInfo.total})
                </span>
              </p>

              {chronicleInfo.next && !isFinalChronicle && (
                <p>
                  Next Chronicle{" "}: <span className="font-bold">{chronicleInfo.next.name}</span> in {chronicleInfo.daysUntilNext}{" "} {chronicleInfo.daysUntilNext === 1 ? "day" : "days"}
                  {isSecondNextChronicleFinal && (
                    <span className="text-green-600">
                      <br />Temple is about to be released — get ready!
                    </span>
                  )}
                  {isNextChronicleFinal && (
                    <span className="text-orange-500">
                      <br />This is the last step of the Chronicle - capture your Temple!
                    </span>
                  )}
                </p>
              )}

              {isFinalChronicle && (
                <p className="text-red-500">
                  Chronicle concluded
                </p>
              )}
            </div>
          </div>
        )
      })()}
      <EventTimeLine events={events} server={server} />

      <div className="mb-6 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
        />
        <select
          value={serverId}
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} server={server} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="text-gray-400 mt-6">No events found.</p>
      )}
    </main>
  )
}