import { Event } from "../type/event"

export type EventStatus = {
    isActive: boolean
    isAllTime: boolean
    isTomorrow: boolean
    remainingTime: number | null
    nextStart: number | null
}

export function getEventStatus(event: Event, serverId?: string): EventStatus {
    if (event.duration === "Always") {
        return {
            isActive: false,
            isAllTime: true,
            isTomorrow: false,
            remainingTime: Infinity,
            nextStart: null
        }
    }

    const now = Date.now()

    const nowDate = new Date()

    const tomorrowStart = Date.UTC(
        nowDate.getUTCFullYear(),
        nowDate.getUTCMonth(),
        nowDate.getUTCDate() + 1
    )

    const tomorrowEnd = Date.UTC(
        nowDate.getUTCFullYear(),
        nowDate.getUTCMonth(),
        nowDate.getUTCDate() + 2
    )

    let start: number | null = null

    if (serverId && event.serverStartDates?.[serverId]) {
        start = new Date(event.serverStartDates[serverId]).getTime()
    } else if (event.startDate) {
        start = new Date(event.startDate).getTime()
    }

    if (start === null)
        return { isActive: false, isAllTime: false, isTomorrow: false, remainingTime: null, nextStart: null }

    if (typeof event.duration !== "number")
        return { isActive: false, isAllTime: false, isTomorrow: false, remainingTime: null, nextStart: null }

    const durationMs = event.duration * 24 * 60 * 60 * 1000

    if (typeof event.repeat !== "number") {
        const end = start + durationMs

        if (now >= start && now <= end)
            return {
                isActive: true,
                isAllTime: false,
                isTomorrow: false,
                remainingTime: end - now,
                nextStart: null
            }

        const isTomorrow = start >= tomorrowStart && start < tomorrowEnd

        return {
            isActive: false,
            isAllTime: false,
            isTomorrow,
            remainingTime: null,
            nextStart: null
        }
    }

    const repeatMs = event.repeat * 24 * 60 * 60 * 1000
    const cycles = Math.floor((now - start) / repeatMs)
    const currentStart = start + cycles * repeatMs
    const currentEnd = currentStart + durationMs

    if (now >= currentStart && now <= currentEnd) {
        const nextStart = currentStart + repeatMs
        const isTomorrow = nextStart >= tomorrowStart && nextStart < tomorrowEnd

        return {
            isActive: true,
            isAllTime: false,
            isTomorrow,
            remainingTime: currentEnd - now,
            nextStart
        }
    }

    const nextStart = now < start ? start : currentStart + repeatMs
    const isTomorrow = nextStart >= tomorrowStart && nextStart < tomorrowEnd

    return {
        isActive: false,
        isAllTime: false,
        isTomorrow,
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