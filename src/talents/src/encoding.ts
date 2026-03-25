export function encodeTree(selected: Record<number, number>): string {
  return Object.entries(selected)
    .filter(([_, points]) => points > 0)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([id, points]) => (points > 1 ? `${id}:${points}` : `${id}`))
    .join("-")
}

export function decodeTree(code: string | null): Record<number, number> {
  if (!code) return {}
  const result: Record<number, number> = {}
  code.split("-").forEach(part => {
    const [id, points] = part.split(":").map(Number)
    if (!isNaN(id)) result[id] = points || 1
  })
  return result
}