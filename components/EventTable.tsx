import { EventTableData } from "@/src/events/type/event"
import { formatText } from "@/src/events/utils/text"

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
                    {formatText(table.description)}
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
                                        }`}
                                    >
                                        {cell}
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