"use client"

import { getEventStatus } from "@/src/events/utils/eventSchedule";
import { Server } from "@/src/events/type/server";

const DAY_MS = 86400000;

type TimelineEvent = {
    id: string;
    name: string;
    startDay: number;
    endDay: number;
    lane: number;
    status: any;
};

function getDayKey(input: unknown): number | null {
    const date = new Date(input as any);

    if (isNaN(date.getTime())) 
        return null;

    return Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
    );
}

function buildTimelineDays() {
    const now = new Date();
    const days: Date[] = [];

    for (let i = 0; i < 14; i++)
        days.push(new Date(now.getTime() + i * DAY_MS));

    return days;
}

function buildDayIndex(days: Date[]) {
    const map: Record<number, number> = {};

    days.forEach((d, i) => 
        {
            const key = getDayKey(d);
            if (key !== null) 
                map[key] = i;
        }
    );

    return map;
}

function computeEventSegments(events: any[], server: Server, days: Date[]) {
    const segments: Omit<TimelineEvent, "lane">[] = [];

    const firstKey = getDayKey(days[0]);
    const lastKey = getDayKey(days[days.length - 1]);

    if (firstKey === null || lastKey === null)
        return [];

    const dayIndex = buildDayIndex(days);

    for (const event of events) {
        const status = getEventStatus(event, server);

        if (status.isDisabled)
            continue;

        let start = status.isActive ? Date.now() : status.nextStart;

        if (!start)
            continue;

        let end = start;

        if (event.duration !== "Always")
            end = start + (status.remainingTime ? status.remainingTime - (DAY_MS) : (event.duration - 1) * DAY_MS);
        else
            end = days[days.length - 1].getTime();

        const startKey = getDayKey(start);
        const endKey = getDayKey(end);

        if (startKey === null || endKey === null)
            continue;

        if (endKey < firstKey || startKey > lastKey)
            continue;


        const clampedStart = Math.max(startKey, firstKey);
        const clampedEnd = Math.min(endKey, lastKey);

        const startDay = dayIndex[clampedStart];
        const endDay = dayIndex[clampedEnd];

        if (startDay === undefined || endDay === undefined)
            continue;

        segments.push(
            {
                id: event.id,
                name: event.name,
                startDay,
                endDay,
                status
            }
        );
    }

    return segments;
}

function assignLanes(events: Omit<TimelineEvent, "lane">[]): TimelineEvent[] {
    const lanes: number[] = [];

    const result: TimelineEvent[] = [];

    const sorted = [...events].sort((a, b) => 
        {
            if (a.startDay !== b.startDay)
                return a.startDay - b.startDay;

            const aDuration = a.endDay - a.startDay;
            const bDuration = b.endDay - b.startDay;

            return bDuration - aDuration;
        }
    );

    for (const event of sorted) {
        let lane = 0;

        while (true) {
            if (lanes[lane] === undefined || lanes[lane] < event.startDay) {
                lanes[lane] = event.endDay;

                result.push(
                    {
                        ...event,
                        lane
                    }
                );

                break;
            }

            lane++;
        }
    }

    return result;
}

function buildTimeline(events: any[], server: Server, days: Date[]) {
    const segments = computeEventSegments(events, server, days);

    return assignLanes(segments);
}

function TimelineEventBox({ event }: { event: TimelineEvent }) {

    const isLastDay = event.endDay === 0;
    const isMultiDay = event.startDay !== event.endDay;

    const compact = !isMultiDay && isLastDay;

    const displayName = compact && event.name.length > 13 ? event.name.slice(0, 13) + "..." : event.name;

    return (
        <div
            className="h-10 rounded-lg border px-3 flex items-center justify-center text-sm shadow-sm bg-gray-900 border-gray-500 hover:brightness-125"
            title={event.name}
        >
            {displayName}
        </div>
    );
}

export default function EventTimeline({ events, server }: { events: any[], server: Server }) {
    const days = buildTimelineDays();

    const timelineEvents = buildTimeline(events, server, days);

    const nowKey = getDayKey(new Date());

    const laneCount =
        Math.max(...timelineEvents.map((e) => e.lane), 0) + 1;

    return (
        <div className="w-full bg-[#12121e] p-2 overflow-y-auto mb-5">

            {/* DAY HEADER */}

            <div
                className="grid mb-6"
                style={{
                    gridTemplateColumns: `repeat(${days.length}, minmax(140px,1fr))`
                }}
            >
                {days.map((day) => {
                    const key = getDayKey(day);
                    const isToday = key === nowKey;

                    return (
                        <div key={key} className="flex flex-col items-center">

                            <div
                                className={`text-xs mb-2 ${isToday
                                    ? "text-indigo-400 font-semibold"
                                    : "text-gray-500"
                                    }`}
                            >
                                {isToday ? "TODAY" : day.toUTCString().slice(0, 11)}
                            </div>

                            <div
                                className={`w-2 h-2 rounded-full ${isToday ? "bg-indigo-500" : "bg-gray-700"}`}
                            />

                        </div>
                    );
                })}
            </div>

            {/* TIMELINE GRID */}

            <div
                className="grid gap-2"
                style={{
                    gridTemplateColumns: `repeat(${days.length}, minmax(140px,1fr))`,
                    gridTemplateRows: `repeat(${laneCount}, 40px)`
                }}
            >
                {timelineEvents.map((event) => {
                    const span = event.endDay - event.startDay + 1;

                    return (
                        <div
                            key={event.id}
                            style={{
                                gridColumn: `${event.startDay + 1} / span ${span}`,
                                gridRow: `${event.lane + 1}`
                            }}
                        >
                            <TimelineEventBox event={event} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}