interface ChronicleEntry {
    day: number;
    name: string;
    unlock: string;
}

export const chronicleOfHarmony: ChronicleEntry[] = [
    { day: 2, name: "Rising Dawn", unlock: "base" },
    { day: 3, name: "Order of Power", unlock: "fortress" },
    { day: 7, name: "A good start", unlock: "altar" },
    { day: 10, name: "Beehive Removal", unlock: "gate" },
    { day: 13, name: "Settlement", unlock: "sanctum" },
    { day: 17, name: "Settlement", unlock: "fortress" },
    { day: 20, name: "Illuminate the Darkness", unlock: "none" },
    { day: 22, name: "Who's Next?", unlock: "gate" },
    { day: 26, name: "Open the Door!", unlock: "base" },
    { day: 28, name: "Preparedness", unlock: "fortress" },
    { day: 32, name: "Broad Mind", unlock: "shrine" },
    { day: 35, name: "Shock and Fear", unlock: "legacy" },
    { day: 39, name: "Searching for Traces", unlock: "gate" },
    { day: 41, name: "Evidence", unlock: "fortress" },
    { day: 43, name: "Spread Out", unlock: "nothing" },
    { day: 46, name: "Judgment", unlock: "gate" },
    { day: 50, name: "Final Stage", unlock: "base" },
    { day: 52, name: "Achievement", unlock: "sanctuary" },
    { day: 56, name: "Realization", unlock: "fortress" },
    { day: 61, name: "Triumph of Harmony", unlock: "temple" },
    { day: 67, name: "Father Glowworm", unlock: "nothing" },
];

export function getChronicleInfo(serverRelease: number) {
    const DAY_MS = 86400000
    const now = Date.now()

    const serverAge = Math.floor((now - serverRelease) / DAY_MS)

    const entries = chronicleOfHarmony

    const currentIndex = entries.findLastIndex(e => serverAge >= e.day)

    if (currentIndex === -1)
        return null

    const current = entries[currentIndex]
    const next = entries[currentIndex + 1]

    if (!next) {
        if (serverAge <= current.day + 7) {
            return {
                current,
                next: null,
                daysUntilNext: null,
                index: currentIndex + 1,
                total: entries.length
            }
        }

        return null
    }

    const daysUntilNext = next.day - serverAge

    return {
        current,
        next,
        daysUntilNext,
        index: currentIndex + 1,
        total: entries.length
    }
}