import { EventTableCell, EventTableData } from "@/src/events/type/event"
import { formatTextComplex } from "@/src/events/utils/text"
import { SPEEDUP } from "@/src/shared/resources"

const formatNumber = (n: number) => n.toLocaleString()
const formatGems = (n: number) => Math.round(n).toLocaleString()

function renderCell(cell: EventTableCell) {
  if (typeof cell === "string") return cell

  const gemValue = cell.reduce(
    (sum, { amount, resource }) => sum + amount * resource.gemValue,
    0
  )

  const text = cell
    .map(({ amount, resource, disclaimer }) => {
      const formattedAmount =
        resource === SPEEDUP
          ? `${formatNumber(amount)}min`
          : `${formatNumber(amount)}x`

      return `${formattedAmount} ${resource.name}${disclaimer ?? ""}`
    })
    .join(", ")

  return `${text}\n→ ${formatGems(gemValue)} Gems`;
}

export function EventTable({ table }: { table: EventTableData }) {
    const dividers = table.dividerAfterColumns ?? []

    return (
        <div className="mb-6">
            {table.title && (
                <h3 className="text-lg font-semibold text-white mb-2">
                    {table.title}
                </h3>
            )}
            {table.description && (
                <div className="text-gray-400 mb-2">
                    {formatTextComplex(table.description)}
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-800 text-sm">
                    <thead className="bg-gray-800 text-gray-300">
                        <tr>
                            {table.headers.map((h, i) => (
                                <th
                                    key={h}
                                    className={`px-3 py-2 text-left border-b border-gray-700 ${
                                        dividers.includes(i+1) ? "border-r border-gray-600" : ""
                                    }`}
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="text-gray-300">
                        {table.rows.map((row, i) => (
                            <tr key={i} className="border-t border-gray-800">
                                {row.map((cell, j) => (
                                    <td
                                        key={j}
                                        className={`px-3 py-2 ${
                                            dividers.includes(j+1) ? "border-r border-gray-600" : ""
                                        }
                                        whitespace-pre-line`}
                                    >
                                        {renderCell(cell)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}