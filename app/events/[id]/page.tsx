import { EventTable } from "@/components/EventTable"
import { events } from "@/src/events/data/events"
import { Event, ListItem } from "@/src/events/type/event"
import { formatDuration } from "@/src/events/utils/duration"
import { formatRepeat } from "@/src/events/utils/repeat"
import { formatTextComplex, formatTextSimple } from "@/src/events/utils/text"
import Link from "next/link"

export function generateStaticParams() {
    return events.map((e) => ({
        id: e.id
    }))
}


export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const event: Event | undefined = events.find((e) => e.id === id)

    const normalizeItem = (item: ListItem) =>
        typeof item === "string" ? { content: item } : item

    const renderDetails = (blocks: Event["details"]) =>
        blocks?.map((block, i) => {
            const mbClass = block.space ? "mb-5" : ""

            switch (block.type) {
                case "p":
                    return <p key={i} className={mbClass}>{block.content}</p>

                case "ul":
                    return (
                        <ul key={i} className={`list-disc pl-5 ${mbClass}`}>
                            {block.items.map((raw, j) => {
                                const li = normalizeItem(raw)
                                return (
                                    <li key={j}>
                                        {li.content}
                                        {li.children && renderDetails(li.children)}
                                    </li>
                                )
                            })}
                        </ul>
                    )

                case "ol":
                    return (
                        <ol key={i} className={`list-decimal pl-5 ${mbClass}`}>
                            {block.items.map((raw, j) => {
                                const li = normalizeItem(raw)
                                return (
                                    <li key={j}>
                                        {li.content}
                                        {li.children && renderDetails(li.children)}
                                    </li>
                                )
                            })}
                        </ol>
                    )

                case "h2":
                    return (
                        <h2 key={i} className={`text-xl font-semibold text-white mt-4 mb-2 ${mbClass}`}>
                            {block.content}
                        </h2>
                    )

                case "h3":
                    return (
                        <h3 key={i} className={`text-lg font-semibold text-white mt-3 mb-1 ${mbClass}`}>
                            {block.content}
                        </h3>
                    )

                case "quotedate":
                    return (
                        <p key={i} className={`text-sm text-gray-400 italic ${mbClass}`}>
                            - {block.author}, {block.date}
                        </p>
                    )

                default:
                    return null
            }
        })

    if (!event) return <div>Event not found</div>

    return (
        <main className="mx-auto max-w-6xl p-6">

            {/* Back Button */}
            <div className="mb-6">
                <Link href="/events" className="inline-block text-sm text-blue-400 hover:text-blue-600">
                    ← Back to Events
                </Link>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow">

                {/* Header */}
                <div className="mb-6 border-b border-gray-800 pb-6">
                    <h1 className="text-3xl font-bold text-white">{event.name}</h1>
                    
                    <div className="mt-3 flex flex-wrap gap-6 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                            <span>⏳</span>
                            <span>{formatDuration(event.duration)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🔁</span>
                            <span>{formatRepeat(event.repeat)}</span>
                        </div>
                    </div>

                    <div className="text-gray-300 leading-relaxed">
                        {formatTextSimple(event.description)}
                    </div>

                    {event.wip && (
                        <div className="space-y-4 mt-6">
                            <div className="rounded-lg border border-red-700 bg-red-900 p-4 text-gray-200">
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">🛠️</span>
                                    <p className="whitespace-pre-line">
                                        This event is incomplete. If you find a mistake or have access to missing data, do not hesitate to message me (Discord: ipandey).
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {event.informations && event.informations.length > 0 && (
                        <div className="space-y-4 mt-6">
                            {event.informations.map((info, i) => (
                                <div key={i} className="rounded-lg border border-gray-700 bg-gray-600 p-4 text-gray-200">
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">❕</span>
                                        <p className="whitespace-pre-line">{formatTextComplex(info)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="grid gap-8 mb-8 md:grid-cols-1 md:gap-4">
                    {(event.tasks && event.tasks.length > 0) || (event.rewards && event.rewards.length > 0) ? (
                        <div className={`grid gap-8 ${event.tasks && event.tasks.length > 0 && event.rewards && event.rewards.length > 0 ? 'md:grid-cols-2' : ''}`}>

                            {event.tasks && event.tasks.length > 0 && (
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">📋 Tasks</h2>
                                    {event.tasks.map((table, i) => (
                                        <EventTable key={i} table={table} />
                                    ))}
                                </div>
                            )}

                            {event.rewards && event.rewards.length > 0 && (
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">🏆 Rewards</h2>
                                    {event.rewards.map((table, i) => (
                                        <EventTable key={i} table={table} />
                                    ))}
                                </div>
                            )}

                        </div>
                    ) : null}

                    {event.disclaimer && (
                        <div className="text-sm text-gray-300 pl-4">
                            {formatTextSimple(event.disclaimer)}
                        </div>
                    )}
                </div>
                {event.tips && event.tips.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            💡 Pro Tips
                        </h2>

                        <ul className="space-y-2 text-gray-300">
                            {event.tips.map((t) => (
                                <li key={t} className="rounded-md bg-gray-800 px-3 py-2">
                                    {formatTextComplex(t)}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


                {/* Detail Section */}
                {event.details && event.details.length > 0 && (
                    <div className="border-t border-gray-800 pt-6">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            📜 Event Details (In-Game)
                        </h2>
                        <blockquote className="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 mx-4 text-gray-300 leading-relaxed">
                            {renderDetails(event.details)}
                        </blockquote>
                    </div>
                )}
            </div>

        </main >
    )
}