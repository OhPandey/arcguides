import { Bundle } from "@/src/bundles/type/bundle"


type BundleCardProps = {
  bundle: Bundle
  onClick: (bundle: Bundle) => void
}

export default function BundleCard({ bundle, onClick }: BundleCardProps) {
  return (
    <div
      onClick={() => onClick(bundle)}
      className="rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-indigo-500 transition flex flex-col cursor-pointer"
    >
      {bundle.image && (
        <img
          src={bundle.image}
          alt={bundle.name}
          className="w-full h-32 object-cover rounded-md mb-3"
        />
      )}

      <h3 className="text-lg font-semibold text-white text-center">
        {bundle.name}
      </h3>

      <p className="text-gray-400 text-center mt-2">
        Price: ${bundle.priceUSD}
      </p>
    </div>
  )
}