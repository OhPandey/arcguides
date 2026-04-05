import { Bundle } from "../type/bundle";

const GEMS_PER_DOLLAR = 100;

export type ComputedBundle = Bundle & {
  totalGemValue: number;
  gemPriceEquivalent: number;
  valuePercent: number;
  rank: number;
};

export function computeBundles(bundles: Bundle[]): ComputedBundle[] {
  const computed = bundles.map((bundle) => {
    const totalGemValue = bundle.resources.reduce(
      (sum, item) => sum + item.amount * item.resource.gemValue,
      0
    );

    const gemPriceEquivalent = bundle.priceUSD * GEMS_PER_DOLLAR + 1;
    const valuePercent = (totalGemValue / gemPriceEquivalent) * 100;

    return {
      ...bundle,
      totalGemValue: Math.round(totalGemValue),
      gemPriceEquivalent: Math.round(gemPriceEquivalent),
      valuePercent,
      rank: 0,
    };
  });

  return computed
    .sort((a, b) => b.valuePercent - a.valuePercent)
    .map((bundle, index) => ({
      ...bundle,
      rank: index + 1,
    }));
}