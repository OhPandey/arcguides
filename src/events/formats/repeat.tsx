export function formatRepeat(repeat: number | "Seasonal" | "Unregularly" | "Unknown"): string {

    if (repeat === "Unknown")
        return "Unknown (Need more data)"
    
    if (repeat == "Unregularly")
        return "Unregularly"

    if (repeat === "Seasonal")
        return "Seasonal"

    if (repeat === 0)
        return "Never"

    const known: Record<number, string> = {
        7: "Weekly",
        30: "Monthly",
        90: "Quarterly",
        365: "Yearly"
    }

    if (known[repeat])
        return `${known[repeat]} (${repeat} Days)`

    if (repeat % 7 === 0 && repeat < 30) {
        const weeks = repeat / 7
        return `Every ${weeks} Week${weeks > 1 ? "s" : ""} (${repeat} Days)`
    }

    if (repeat % 30 === 0 && repeat < 365) {
        const months = repeat / 30
        return `Every ${months} Month${months > 1 ? "s" : ""} (${repeat} Days)`
    }

    return `Every ${repeat} Days`
}