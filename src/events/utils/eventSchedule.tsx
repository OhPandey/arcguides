import { Event } from "../type/event"

export type EventStatus = {
    isActive: boolean
    isAllTime: boolean
    remainingTime: number | null
    nextStart: number | null
}

export function getEventStatus(event: Event, serverId?: string): EventStatus {
    if (event.duration === "Always") {
        return {
            isActive: false,
            isAllTime: true,
            remainingTime: Infinity,
            nextStart: null
        }
    }

    const now = Date.now()

    let start: number | null = null

    if (serverId && event.serverStartDates?.[serverId]) {
        start = new Date(event.serverStartDates[serverId]).getTime()
    } else if (event.startDate) {
        start = new Date(event.startDate).getTime()
    }

    if (start === null)
        return { isActive: false, isAllTime: false, remainingTime: null, nextStart: null }

    if (typeof event.duration !== "number")
        return { isActive: false, isAllTime: false, remainingTime: null, nextStart: null }

    const durationMs = event.duration * 24 * 60 * 60 * 1000

    if (typeof event.repeat !== "number") {
        const end = start + durationMs

        if (now >= start && now <= end)
            return { isActive: true, isAllTime: false, remainingTime: end - now, nextStart: null }

        return { isActive: false, isAllTime: false, remainingTime: null, nextStart: null }
    }

    const repeatMs = event.repeat * 24 * 60 * 60 * 1000
    const cycles = Math.floor((now - start) / repeatMs)
    const currentStart = start + cycles * repeatMs
    const currentEnd = currentStart + durationMs

    if (now >= currentStart && now <= currentEnd) {
        return {
            isActive: true,
            isAllTime: false,
            remainingTime: currentEnd - now,
            nextStart: currentStart + repeatMs
        }
    }

    const nextStart = now < start ? start : currentStart + repeatMs

    return {
        isActive: false,
        isAllTime: false,
        remainingTime: null,
        nextStart
    }
}

export function sortEvents(events: Event[], serverId?: string) {
    return [...events].sort((a, b) => {
        const aStatus = getEventStatus(a, serverId)
        const bStatus = getEventStatus(b, serverId)

        if (aStatus.isActive && !bStatus.isActive)
            return -1
        if (!aStatus.isActive && bStatus.isActive)
            return 1

        if (aStatus.isAllTime && !bStatus.isAllTime)
            return -1
        if (!aStatus.isAllTime && bStatus.isAllTime)
            return 1

        if (aStatus.isActive && bStatus.isActive)
            return (aStatus.remainingTime ?? Infinity) - (bStatus.remainingTime ?? Infinity)

        if (aStatus.nextStart && bStatus.nextStart)
            return aStatus.nextStart - bStatus.nextStart

        if (aStatus.nextStart)
            return -1
        if (bStatus.nextStart)
            return 1

        return 0
    })
}