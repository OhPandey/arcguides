"use client"

import { useMemo } from "react"
import { chronicleOfHarmony, getChronicleInfo } from "@/src/events/utils/chronicle"
import { servers } from "@/src/events/data/servers"

interface Server {
    id: number
    name: string
    releaseDate: string
}

interface Props {
    server: Server
}

const DAY_MS = 86400000

export default function ChroniclePanel({ server }: Props) {
    const release = useMemo(() => new Date(server.releaseDate).getTime(), [server.releaseDate])

    const now = Date.now()

    const serverAge = useMemo(() => Math.floor((now - release) / DAY_MS), [now, release])

    const lastEntryDay = chronicleOfHarmony[chronicleOfHarmony.length - 1].day

    const chronicleInfo = useMemo(() => getChronicleInfo(release), [release])

    const isChronicleOver = serverAge > lastEntryDay

    // SERVER POOL
    // ------------------------
    const pool = useMemo(() => getServerPool(server.id), [server.id])
    const missing = useMemo(() => getMissingServers(pool), [pool])

    if (isChronicleOver) {
        return (
            <div className="mb-6 flex justify-end">
                <div className="rounded-lg bg-gray-900 border border-gray-700 p-4 text-white text-right">
                    <p>
                        Cross-World Pool #{pool.poolNumber}:{" "}
                        <span className="font-semibold">
                            World {pool.start}–{pool.end}
                        </span>
                    </p>

                    {missing.length > 0 && (
                        <p className="text-red-400">
                            (World{missing.length > 1 ? "s" : ""}{" "}
                            {missing.join(", ")}{" "}
                            {missing.length > 1 ? "haven't" : "hasn't"} joined yet)
                        </p>
                    )}
                </div>
            </div>
        )
    }

    if (!chronicleInfo)
        return null

    const isNextChronicleFinal = chronicleInfo.index + 1 === chronicleInfo.total
    const isSecondNextChronicleFinal = chronicleInfo.index + 2 === chronicleInfo.total

    return (
        <div className="mb-6 flex justify-end">
            <div className="rounded-lg bg-gray-900 border border-gray-700 p-4 text-white text-right">
                <p>
                    Current Chronicle:{" "}
                    <span className="font-semibold">
                        {chronicleInfo.current.name} (
                        {chronicleInfo.index}/{chronicleInfo.total})
                    </span>
                </p>

                {chronicleInfo.next && (
                    <p>
                        Next Chronicle:{" "}
                        <span className="font-bold">
                            {chronicleInfo.next.name}
                        </span>{" "}
                        in {chronicleInfo.daysUntilNext}{" "}
                        {chronicleInfo.daysUntilNext === 1 ? "day" : "days"}

                        {isSecondNextChronicleFinal && (
                            <span className="text-green-600">
                                <br />
                                Temple is about to be released — get ready!
                            </span>
                        )}

                        {isNextChronicleFinal && (
                            <span className="text-orange-500">
                                <br />
                                This is the last step of the Chronicle - capture your Temple!
                            </span>
                        )}
                    </p>
                )}

                <div className="mt-3 text-sm">
                    <p>
                        (Expected) Cross-World Pool #{pool.poolNumber}:{" "}
                        <span className="font-semibold text-white">
                            Server {pool.start}–{pool.end}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

function getServerPool(serverId: number) {
    if (serverId <= 1008) {
        return {
            start: 1001,
            end: 1008,
            poolNumber: 1
        }
    }

    const groupIndex = Math.floor((serverId - 1009) / 4)

    return {
        start: 1009 + groupIndex * 4,
        end: 1009 + groupIndex * 4 + 3,
        poolNumber: groupIndex + 2
    }
}

function isServerReady(server: Server) {
    const release = new Date(server.releaseDate).getTime()
    const serverAge = Math.floor((Date.now() - release) / DAY_MS)
    const lastEntryDay = chronicleOfHarmony[chronicleOfHarmony.length - 1].day

    return serverAge > lastEntryDay - 2
}

function getMissingServers(pool: { start: number; end: number }) {
    const expectedIds = Array.from(
        { length: pool.end - pool.start + 1 },
        (_, i) => pool.start + i
    )

    const readyServers = servers
        .filter(s => s.id >= pool.start && s.id <= pool.end)
        .filter(isServerReady)
        .map(s => s.id)

    return expectedIds.filter(id => !readyServers.includes(id))
}