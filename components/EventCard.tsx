import Link from "next/link"
import { Event } from "@/src/events/type/event"
import { formatDuration } from "@/src/events/utils/duration"
import { formatRepeat } from "@/src/events/utils/repeat"
import { getEventStatus } from "@/src/events/utils/eventSchedule"
import { Server } from "@/src/events/type/server"
import { formatUniversalTime } from "@/src/events/utils/time"

type EventCardProps = {
  event: Event
  server: Server
}

const now = new Date()
const DAY_MS = 86400000
const tomorrowStart = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)

function isTomorrow(nextStart: number) {
  const tomorrowEnd = tomorrowStart + DAY_MS

  return nextStart >= tomorrowStart && nextStart < tomorrowEnd
}

export default function EventCard({ event, server }: EventCardProps) {

  const status = getEventStatus(event, server)
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-indigo-500 transition flex flex-col">

      <div className="flex items-center justify-center gap-2">
        {event.image && (
          <div className="text-s text-center">
            <img
              src={`/arcguides/images/events/icons/${event.image}`}
              alt={event.name}
              className="w-8 h-7 rounded-lg object-cover"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold text-white">
          {event.name}
        </h3>

        {status.isActive && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-green-500/20 text-green-400 rounded">
            Active
          </span>
        )}

        {status.isAllTime && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded">
            All-Time
          </span>
        )}
        {isTomorrow(status.nextStart!) && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-orange-500/20 text-orange-400 rounded">
            Tomorrow
          </span>
        )}

        {status.isDisabled && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-red-700/20 rounded">
            Not available
          </span>
        )}

      </div>

      {event.wip && (
        <div className="text-s text-center">
          🛠️ Not completed
        </div>
      )}

      <div className="mt-3 text-sm text-gray-400 text-center">
        <p>{event.description}</p>
      </div>

      <div className="my-3 text-sm text-gray-400 text-center">
        {(true && status.nextStart) ? (
          <p>📅 Starts {formatUniversalTime(status.nextStart)}</p>
        ) : (
          <p>⏳ {formatDuration(event.duration)} - 🔁 {formatRepeat(event.repeat)}</p>
        )}
      </div>

      <Link
        href={`/events/${event.id}`}
        className="block mt-auto rounded-lg bg-indigo-600 py-2 text-center text-sm hover:bg-indigo-500"
      >
        View Event
      </Link>

    </div>
  )
}