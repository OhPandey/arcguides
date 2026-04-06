/*
    EVENT SCHEDULER
*/

import { SeedType } from "../data/servers"
import { Event, ScheduleType } from "../type/event"
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

/* ---------------- Context ---------------- */

type EventContext = {
    now: number
    serverAge: number
    serverRelease: number
    server: Server
}

function createContext(server: Server): EventContext {
    const now = Date.now()
    const serverRelease = new Date(server.releaseDate).getTime()

    return {
        now,
        serverRelease,
        server,
        serverAge: Math.floor((now - serverRelease) / DAY_MS)
    }
}

/* ---------------- Helpers ---------------- */

const BASE_STATUS: EventStatus = {
    isActive: false,
    isAllTime: false,
    isDisabled: false,
    isTomorrow: false,
    remainingTime: null,
    nextStart: null
}

function defaultStatus(overrides?: Partial<EventStatus>): EventStatus {
    return { ...BASE_STATUS, ...overrides }
}

function dayToMs(days: number): number {
    return days * DAY_MS
}

function getTimestamp(date?: string | null): number | null {
    return date ? new Date(date).getTime() : null
}

function getDuration(event: Event) {
    return typeof event.duration === "number" ? event.duration : 0
}

function getRepeat(event: Event) {
    return typeof event.repeat === "number" ? event.repeat : 0
}

function getTiming(event: Event) {
    return {
        duration: getDuration(event),
        repeat: getRepeat(event)
    }
}

function isTomorrow(timestamp: number): boolean {
    const tomorrowStart = new Date()
    tomorrowStart.setUTCDate(tomorrowStart.getUTCDate() + 1)
    tomorrowStart.setUTCHours(0, 0, 0, 0)

    const tomorrowEnd = new Date(tomorrowStart)
    tomorrowEnd.setUTCDate(tomorrowEnd.getUTCDate() + 1)

    return timestamp >= tomorrowStart.getTime() && timestamp < tomorrowEnd.getTime()
}

/* ---------------- Core Engine ---------------- */

function computeEventStatus(ctx: EventContext, start: number | null, durationDays: number, repeatDays: number,transitionStart?: number): EventStatus {

    if (start === null)
        return defaultStatus()

    const duration = dayToMs(durationDays)
    const repeat = dayToMs(repeatDays)

    const end = start + duration
    const cycles = repeat ? Math.floor((ctx.now - start) / repeat) : 0
    const currentStart = start + cycles * repeat

    let nextStart: number | null = null

    if (transitionStart) {
        if (ctx.now < transitionStart)
            nextStart = transitionStart + repeat
        else if (repeat)
            nextStart = currentStart + repeat
    } else {
        if (repeat || ctx.now < start)
            nextStart = ctx.now < start ? start : currentStart + repeat
    }

    return {
        isActive: ctx.now >= start && ctx.now <= end,
        isAllTime: false,
        isDisabled: false,
        isTomorrow: isTomorrow(start),
        remainingTime: end - ctx.now,
        nextStart
    }
}

function computeFromEvent(ctx: EventContext, event: Event, start: number | null, transition?: number) {
    const { duration, repeat } = getTiming(event)
    return computeEventStatus(ctx, start, duration, repeat, transition)
}

/* ---------------- Seeds ---------------- */

function getSeedStart(event: Event, seed: SeedType) {
    return getTimestamp(event.seedStartDate?.[seed])
}

function getServerSeed(server: Server): SeedType {
    return server.id % 2 === 0 ? "SEED_B" : "SEED_C"
}

function getTransitionSeedStart(event: Event, serverAge: number) {
    if (serverAge >= 50 && serverAge < 55 && event.seedStartDate?.SEED_A)
        return new Date(event.seedStartDate.SEED_A).getTime()

    return undefined
}

/* ---------------- Minor ---------------- */

function getMinorEventStatus(event: Event, ctx: EventContext) {
    return computeFromEvent(ctx, event, getTimestamp(event.startDate))
}

/* ---------------- Unique ---------------- */

function getUniqueEventStatus(event: Event, ctx: EventContext) {

    const { duration } = getTiming(event)
    const start = getTimestamp(event.startDate)

    if (ctx.now >= (start ?? 0) + dayToMs(duration))
        return defaultStatus({ isDisabled: true })

    return computeFromEvent(ctx, event, start)
}

/* ---------------- TGL ---------------- */

const TGL_END_DAY = 52

function getTGLSingleEventStatus(event: Event, ctx: EventContext) {

    if (ctx.serverAge > TGL_END_DAY)
        return defaultStatus({ isDisabled: true })

    const seed = getServerSeed(ctx.server)

    return computeFromEvent(
        ctx,
        event,
        getSeedStart(event, seed),
        getTransitionSeedStart(event, ctx.serverAge)
    )
}

function getTGLCrossEventStatus(event: Event, ctx: EventContext) {

    if (ctx.serverAge <= TGL_END_DAY)
        return defaultStatus({ isDisabled: true })

    return computeFromEvent(
        ctx,
        event,
        getSeedStart(event, "SEED_A"),
        getTransitionSeedStart(event, ctx.serverAge)
    )
}

/* ---------------- Wheel ---------------- */

function getWheelEventStatus(event: Event, ctx: EventContext) {

    let seed: SeedType

    if (ctx.serverAge >= 52)
        seed = "SEED_A"
    else
        seed = getServerSeed(ctx.server)

    return computeFromEvent(
        ctx,
        event,
        getSeedStart(event, seed),
        getTransitionSeedStart(event, ctx.serverAge)
    )
}

/* ---------------- New World ---------------- */

function getNewWorldEventStatus(event: Event, ctx: EventContext) {

    const { duration, repeat } = getTiming(event)

    if (ctx.serverAge > duration)
        return defaultStatus({ isDisabled: true })

    return computeEventStatus(ctx, ctx.serverRelease, duration, repeat)
}

/* ---------------- Chronicle ---------------- */
function getChronicleEventStatus(event: Event,ctx: EventContext): EventStatus {

    const duration = getDuration(event)

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

    const serverReleaseDate = new Date(ctx.serverRelease)
    const releaseMs = serverReleaseDate.getTime()

    const serverAge = ctx.serverAge

    if (serverAge >= 61)
        return defaultStatus({ isDisabled: true })

    let id = filteredChronicle.findIndex(e => serverAge <= e.day)

    if (id === -1)
        return defaultStatus()

    if (filteredChronicle[id].day === serverAge && id + 1 < filteredChronicle.length)
        id++
    
    const currentEvent = filteredChronicle[id]
    const nextEvent = filteredChronicle[id + 1]

    const start = releaseMs + dayToMs(currentEvent.day - duration)

    const transitionStart = nextEvent ? releaseMs + dayToMs(nextEvent.day - duration): undefined

    return computeEventStatus(ctx, start, duration, 0, transitionStart)
}

/* ---------------- Temple War ---------------- */

function getTempleEventStatus(event: Event, ctx: EventContext) {

    const { duration, repeat } = getTiming(event)

    const FULL_CHRONICLE = 67
    const FIRST_APPEARANCE = FULL_CHRONICLE + repeat

    let start: number | null

    if (ctx.serverAge <= FULL_CHRONICLE)
        start = null
    else if (ctx.serverAge <= FIRST_APPEARANCE)
        start = ctx.serverRelease + dayToMs(FIRST_APPEARANCE)
    else
        start = getTimestamp(event.startDate)

    return computeEventStatus(ctx, start, duration, repeat)
}

/* ---------------- Unalaq Pass ---------------- */

function getUnalaqPass(event: Event, ctx: EventContext) {

    const { duration, repeat } = getTiming(event)

    const START = 25
    const END = START + duration

    if (ctx.serverAge > END)
        return defaultStatus({ isDisabled: true })

    return computeEventStatus(
        ctx,
        ctx.serverRelease + dayToMs(START),
        duration,
        repeat
    )
}

/* ---------------- Handler Map ---------------- */

type EventHandler = (event: Event, ctx: EventContext) => EventStatus

const EVENT_HANDLERS: Record<string, EventHandler> = {
    MINOR: getMinorEventStatus,
    UNIQUE: getUniqueEventStatus,
    TGL: getTGLSingleEventStatus,
    TGL_CROSSSERVER: getTGLCrossEventStatus,
    WHEEL: getWheelEventStatus,
    NEW_WORLD: getNewWorldEventStatus,
    CHRONICLE: getChronicleEventStatus,
    TEMPLE_WAR: getTempleEventStatus,
    UNALAQ_PASS: getUnalaqPass
}

/* ---------------- Public API ---------------- */

export function getEventStatus(event: Event, server: Server): EventStatus {

    const ctx = createContext(server)

    if (event.type === "ALL_TIME")
        return defaultStatus({ isAllTime: true })

    const handler = EVENT_HANDLERS[event.type as ScheduleType]

    if (!handler)
        return defaultStatus()

    return handler(event, ctx)
}

/* ---------------- Sorting ---------------- */

export function sortEvents(events: Event[], server?: Server): Event[] {

    if (!server)
        return [...events]

    const srv = server
    const cache = new Map<Event, EventStatus>()

    function getStatus(event: Event) {
        if (!cache.has(event))
            cache.set(event, getEventStatus(event, srv))

        return cache.get(event)!
    }

    return [...events].sort((a, b) => {

        const aStatus = getStatus(a)
        const bStatus = getStatus(b)

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