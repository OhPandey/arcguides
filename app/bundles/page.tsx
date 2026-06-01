"use client";

import { useMemo, useState } from "react";

import Modal from "@/components/Modal";
import { bundles } from "@/src/bundles/data/bundles";
import { computeBundles, ComputedBundle } from "@/src/bundles/utils/computeBundles";
import { Resource } from "@/src/bundles/type/bundle";
import { SPEEDUP } from "@/src/shared/resources";

const formatNumber = (n: number) => n.toLocaleString()

export function formatResource(resource: Resource, amount: number) {
  const formattedAmount = formatNumber(amount)

  if (resource === SPEEDUP) {
    if(amount >= 1440)
        return `${formattedAmount}min (~${formatNumber(Math.round(amount/1440))}d) ${resource.name}`

    return `${formattedAmount}min ${resource.name}`
  }

  return `${formattedAmount}x ${resource.name}`
}

export default function BundlesPage() {
    const [query, setQuery] = useState("");
    const [selectedBundle, setSelectedBundle] = useState<ComputedBundle | null>(null);

    const computedBundles = useMemo(() => computeBundles(bundles), []);

    const filteredBundles = computedBundles.filter((bundle) =>
        bundle.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main className="mx-auto max-w-6xl p-6">
            <h1 className="text-2xl font-bold text-white mb-6">List of all bundles</h1>

            <div className="mb-6">
                <input type="text"
                    placeholder="Search bundles..."
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBundles.map((bundle) => (
                    <div
                        key={bundle.name}
                        onClick={() => setSelectedBundle(bundle)}
                        className="relative p-5 border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer"
                    >
                        {/* Background Image */}
                        {bundle.image && (
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-30"
                                style={{ backgroundImage: `url('/arcguides/images/${bundle.image}')` }}
                            />
                        )}

                        {/* Content */}
                        <div className="relative z-10">
                            <h2 className="text-lg font-semibold mb-2">
                                #{bundle.rank} {bundle.name}
                            </h2>

                            <p className="text-gray-300 text-lg font-bold mb-2">
                                {bundle.valuePercent.toFixed(0)}%
                            </p>

                            <p className="text-gray-300 text-lg">
                                ${bundle.priceUSD}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedBundle}
                onClose={() => setSelectedBundle(null)}
            >
                {selectedBundle && (
                    <>
                        <h2 className="text-2xl font-bold mb-2">
                            #{selectedBundle.rank} {selectedBundle.name}
                        </h2>

                        <p className="text-lg mb-4">
                            <strong>${selectedBundle.priceUSD}</strong> (
                            {selectedBundle.gemPriceEquivalent} Gems)
                        </p>

                        <p className="text-sm">
                            This bundle contains{" "}
                            <strong>{selectedBundle.resources.length}</strong> items with a gem
                            value of{" "}
                            <strong>
                                {new Intl.NumberFormat("en").format(
                                    selectedBundle.totalGemValue
                                )}
                            </strong>
                            :
                        </p>

                        <ul className="list-none pl-5 text-sm">
                            {selectedBundle.resources.map((item, i) => (
                                <li
                                    key={i}
                                    className="relative before:content-['-'] before:absolute before:-left-4"
                                >
                                    {formatResource(item.resource, item.amount)}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </Modal>
        </main>
    );
}