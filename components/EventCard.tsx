import Link from "next/link"
import { Event } from "@/src/events/type/event"
import { formatDuration } from "@/src/events/formats/duration"
import { formatRepeat } from "@/src/events/formats/repeat"

type EventCardProps = {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-indigo-500 transition flex flex-col">

      <h3 className="text-lg font-semibold text-white text-center">
        {event.name}
      </h3>

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