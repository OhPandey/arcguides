/*
    EVENT SCHEDULER - Still work in progress
*/

import { SeedType } from "../data/servers"
import { Event } from "../type/event"
import { Server } from "../type/server"
import { chronicleOfHarmony } from "./chronicle"

export type EventStatus = {
    isActive: boolean
    isAllTime: boolean
    isDisabled: boolean
    isTomorrow: boolean
    remainingTime: number | null
    nextStart: number | null
}

const DAY_MS = 86400000

function getServerAgeDays(server: Server): number {
    return Math.floor((Date.now() - new Date(server.releaseDate).getTime()) / DAY_MS)
}

function dayToMs(days: number): number {
    return days * DAY_MS
}

function getDuration(event: Event) {
    return typeof event.duration === "number" ? event.duration : 0
}

function getRepeat(event: Event) {
    return typeof event.repeat === "number" ? event.repeat : 0
}

function getTimestamp(date?: string | null): number | null {
    return date ? new Date(date).getTime() : null
}

function isTomorrow(timestamp: number): boolean {
    const tomorrowStart = new Date()
    tomorrowStart.setUTCDate(tomorrowStart.getUTCDate() + 1)
    tomorrowStart.setUTCHours(0, 0, 0, 0)

    const tomorrowEnd = new Date(tomorrowStart)
    tomorrowEnd.setUTCDate(tomorrowEnd.getUTCDate() + 1)

    return timestamp >= tomorrowStart.getTime() && timestamp < tomorrowEnd.getTime()

}

function defaultStatus(overrides?: Partial<EventStatus>): EventStatus {
    return {
        isActive: false,
        isAllTime: false,
        isDisabled: false,
        isTomorrow: false,
        remainingTime: null,
        nextStart: null,
        ...overrides
    }
}

function computeEventStatus(
    start: number | null,
    durationDays: number,
    repeatDays: number,
    transitionStart?: number,
): EventStatus {

    if (start === null)
        return defaultStatus()

    const now = Date.now()
    const duration = dayToMs(durationDays)
    const repeat = dayToMs(repeatDays)

    const end = start + duration
    const cycles = repeat > 0 ? Math.floor((now - start) / repeat) : 0
    const currentStart = start + cycles * repeat

    let nextStart: number | null = null

    if (transitionStart) {
        if (now < transitionStart)
            nextStart = transitionStart + repeat
        else if (repeat > 0)
            nextStart = currentStart + repeat
    } else {
        if (repeat > 0 || now < start)
            nextStart = now < start ? start : currentStart + repeat
    }

    return {
        isActive: now >= start && now <= end,
        isAllTime: false,
        isDisabled: false,
        isTomorrow: isTomorrow(start),
        remainingTime: end - now,
        nextStart
    }
}

/* ---------------- Minor ---------------- */

function getMinorEventStatus(event: Event): EventStatus {
    return computeEventStatus(
        getTimestamp(event.startDate),
        getDuration(event),
        getRepeat(event)
    )
}

/* ---------------- Minor ---------------- */

function getUniqueEventStatus(event: Event): EventStatus {
    const duration = getDuration(event)
    
    const now = Date.now()
    if(now >= (getTimestamp(event.startDate) ?? 0) + dayToMs(duration))
        return defaultStatus({isDisabled: true})

    return computeEventStatus(
        getTimestamp(event.startDate),
        getDuration(event),
        getRepeat(event)
    )
}


/* ---------------- Seeds ---------------- */

function getSeedStart(event: Event, seed: SeedType): number | null {
    return getTimestamp(event.seedStartDate?.[seed])
}

function getTransitionSeedStart(event: Event, serverAge: number): number | undefined {
    if (serverAge >= 50 && serverAge < 55 && event.seedStartDate?.SEED_A)
        return new Date(event.seedStartDate.SEED_A).getTime()

    return undefined
}

/* ---------------- TGL ---------------- */

function getTGLSingleEventStatus(event: Event, server: Server, crossserver?: boolean): EventStatus {

    const serverAge = getServerAgeDays(server)

    let start: number | null = null

    if(serverAge > 52)
        return defaultStatus({isDisabled: true})

    if(server.id % 2 === 0 )
        start = getSeedStart(event, "SEED_B")
    else
        start = getSeedStart(event, "SEED_C")

    return computeEventStatus(
        start,
        getDuration(event),
        getRepeat(event),
        getTransitionSeedStart(event, serverAge)
    )
}

function getTGLCrossEventStatus(event: Event, server: Server, crossserver?: boolean): EventStatus {

    const serverAge = getServerAgeDays(server)

    let start: number | null = null

    if (serverAge <= 52)
        return defaultStatus({isDisabled: true})
    
    start = getSeedStart(event, "SEED_A")

    return computeEventStatus(
        start,
        getDuration(event),
        getRepeat(event),
        getTransitionSeedStart(event, serverAge)
    )
}

/* ---------------- Wheel ---------------- */

function getWheelEventStatus(event: Event, server: Server): EventStatus {

    const serverAge = getServerAgeDays(server)

    let seed: SeedType

    if (serverAge >= 52) seed = "SEED_A"
    else if (server.id % 2 === 0) seed = "SEED_B"
    else seed = "SEED_C"

    return computeEventStatus(
        getSeedStart(event, seed),
        getDuration(event),
        getRepeat(event),
        getTransitionSeedStart(event, serverAge)
    )
}

/* ---------------- New World ---------------- */

function getNewWorldEventStatus(event: Event, server: Server): EventStatus {

    const duration = getDuration(event)
    const repeat = getRepeat(event)
    const serverAge = getServerAgeDays(server)

    if(serverAge > duration)
        return defaultStatus({ isDisabled: true })
    
    return computeEventStatus(new Date(server.releaseDate).getTime(), duration, repeat)
}

/* ---------------- Chronicle ---------------- */

function getChronicleEventStatus(event: Event, server: Server): EventStatus {

    const duration = getDuration(event)
    const repeat = getRepeat(event)

    const confirmedUnlocks = [
        "gate",
        "sanctuary",
        "shrine",
        "legacy",
        "temple",
        "altar",
        "base"
    ]

    const filteredChronicle = chronicleOfHarmony.filter(e =>
        confirmedUnlocks.includes(e.unlock)
    )

    const serverReleaseDate = new Date(server.releaseDate)
    const serverAge = getServerAgeDays(server)

    let start: number | null = null

    if (serverAge >= 61) {
        return defaultStatus({ isDisabled: true })
    }
    let id: number | undefined
    let i = 0

    while (i < filteredChronicle.length && id === undefined) {
        const chronicleEvent = filteredChronicle[i]

        if (serverAge <= chronicleEvent.day + 1)
            id = i

        i++
    }

    if (id !== undefined) {
        const targetIndex = id === 11 ? id : id + 1
        start =
            serverReleaseDate.getTime() +
            dayToMs(filteredChronicle[targetIndex].day - duration)
    }

    return computeEventStatus(start, duration, repeat)
}

/* ---------------- Temple War ---------------- */

function getTempleEventStatus(event: Event, server: Server): EventStatus {

    const duration = getDuration(event)
    const repeat = getRepeat(event)

    const FULL_CHRONICE = 67
    const FIRST_APPEARANCE = FULL_CHRONICE + repeat

    const serverAge = getServerAgeDays(server)
    const serverReleaseDate = new Date(server.releaseDate)

    let start: number | null

    if (serverAge <= FULL_CHRONICE)
        start = null
    else if (serverAge <= FIRST_APPEARANCE)
        start = serverReleaseDate.getTime() + dayToMs(FIRST_APPEARANCE)
    else
        start = getTimestamp(event.startDate)

    return computeEventStatus(start, duration, repeat)
}

/* ---------------- Unalaq Pass ---------------- */

function getUnalaqPass(event: Event, server: Server): EventStatus {

    const duration = getDuration(event)
    const repeat = getRepeat(event)

    const START = 25
    const END = START + duration

    const serverAge = getServerAgeDays(server)
    const serverReleaseDate = new Date(server.releaseDate)

    let start: number | null

    if (serverAge > END)
        return defaultStatus({ isDisabled: true })
    
    return computeEventStatus(serverReleaseDate.getTime() + dayToMs(START), duration, repeat)

}


/* ---------------- Public API ---------------- */

export function getEventStatus(event: Event, server: Server): EventStatus {

    switch (event.type) {
        case "ALL_TIME":
            return {
                isActive: false,
                isAllTime: true,
                isDisabled: false,
                isTomorrow: false,
                remainingTime: null,
                nextStart: null,
            }

        case "MINOR":
            return getMinorEventStatus(event)

        case "UNIQUE":
            return getUniqueEventStatus(event)

        case "TGL":
            return getTGLSingleEventStatus(event, server, false)

        case "TGL_CROSSSERVER":
            return getTGLCrossEventStatus(event, server, true)

        case "WHEEL":
            return getWheelEventStatus(event, server)

        case "NEW_WORLD":
            return getNewWorldEventStatus(event, server)

        case "CHRONICLE":
            return getChronicleEventStatus(event, server)

        case "TEMPLE_WAR":
            return getTempleEventStatus(event, server)

        case "UNALAQ_PASS":
            return getUnalaqPass(event, server)
    }

    return {
        isActive: false,
        isDisabled: false,
        isAllTime: false,
        isTomorrow: false,
        remainingTime: 500000000,
        nextStart: 500000000000000000000,
    }
}

export function sortEvents(events: Event[], server?: Server): Event[] {

    if (!server) return [...events]

    return [...events].sort((a, b) => {

        const aStatus = getEventStatus(a, server)
        const bStatus = getEventStatus(b, server)

        if (aStatus.isDisabled !== bStatus.isDisabled)
            return aStatus.isDisabled ? 1 : -1

        if (aStatus.isAllTime !== bStatus.isAllTime)
            return aStatus.isAllTime ? 1 : -1

        if (aStatus.isActive !== bStatus.isActive)
            return aStatus.isActive ? -1 : 1

        if (aStatus.isActive && bStatus.isActive)
            return (aStatus.remainingTime ?? Infinity) - (bStatus.remainingTime ?? Infinity)

        if (aStatus.isTomorrow !== bStatus.isTomorrow)
            return aStatus.isTomorrow ? -1 : 1

        if (aStatus.nextStart && bStatus.nextStart)
            return aStatus.nextStart - bStatus.nextStart

        if (aStatus.nextStart)
            return -1
        if (bStatus.nextStart)
            return 1

        return 0
    })
}