export function formatUniversalTime(timestamp: number) {
    const d = new Date(timestamp)

    const year = d.getUTCFullYear()
    const month = String(d.getUTCMonth() + 1).padStart(2, "0")
    const day = String(d.getUTCDate()).padStart(2, "0")

    const hours = String(d.getUTCHours()).padStart(2, "0")
    const minutes = String(d.getUTCMinutes()).padStart(2, "0")

    const utcTime = `${year}-${month}-${day} ${hours}:${minutes} UTC`

    const diffMs = timestamp - Date.now()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

    let relative = ""

    if (diffHours < 24) {
        const unit = diffHours === 1 ? "Hour" : "Hours"
        relative = `In ${diffHours} ${unit}`
    } else {
        const diffDays = Math.floor(diffHours / 24)
        const unit = diffDays === 1 ? "Day" : "Days"
        relative = `In ${diffDays} ${unit}`
    }

    return `${utcTime} (${relative})`
}