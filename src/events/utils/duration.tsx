export function formatDuration(days: number | "Always"): string {
    if (days === "Always")
        return "All-time"

    if (days === 1)
        return "1 Day"

    if (days < 7)
        return `${days} Days`

    if (days === 7)
        return "1 Week"

    if (days < 30) {
        const weeks = Math.round(days / 7)
        return weeks === 1 ? "1 Week" : `${weeks} Weeks`
    }

    if (days === 30)
        return "1 Month"

    const months = Math.round(days / 30)
    return months === 1 ? "1 Month" : `${months} Months`
}