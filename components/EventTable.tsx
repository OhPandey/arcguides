export function EventTable({ table }: { table: { title?: string; headers: string[]; rows: string[][] } }) {
    return (
        <div className="mb-6">
            {table.title && (
                <h3 className="text-lg font-semibold text-white mb-2">
                    {table.title}
                </h3>
            )}

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-800 text-sm">
                    <thead className="bg-gray-800 text-gray-300">
                        <tr>
                            {table.headers.map((h) => (
                                <th key={h} className="px-3 py-2 text-left border-b border-gray-700">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        {table.rows.map((row, i) => (
                            <tr key={i} className="border-t border-gray-800">
                                {row.map((cell, j) => (
                                    <td key={j} className="px-3 py-2">
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