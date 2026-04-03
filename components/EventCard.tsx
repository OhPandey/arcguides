import Link from "next/link"
import { Event } from "@/src/events/type/event"
import { formatDuration } from "@/src/events/utils/duration"
import { formatRepeat } from "@/src/events/utils/repeat"
import { getEventStatus } from "@/src/events/utils/eventSchedule"

type EventCardProps = {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {

  const status = getEventStatus(event)
  console.log(event)

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-indigo-500 transition flex flex-col">

      <div className="flex items-center justify-center gap-2">
        <h3 className="text-lg font-semibold text-white">
          {event.name}
        </h3>

        {status.isActive && (
          <span className="text-green-400 text-sm font-semibold">
            Active
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
        <p>⏳ {formatDuration(event.duration)} - 🔁 {formatRepeat(event.repeat)}</p>
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