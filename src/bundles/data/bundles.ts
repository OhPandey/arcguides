import { dailyDealBundles } from "./dailyDealsBundles";
import { lotusBundles } from "./lotusBundles";
import { monthlyBundles } from "./monthlyBundles";
import { starterBundles } from "./starterBundles";
import { tglBundles } from "./tglBundles";
import { vipBundles } from "./vipBundles";
import { wheelBundles } from "./wheelBundles";

export const bundles = [
  ...starterBundles,
  ...vipBundles,
  ...wheelBundles,
  ...monthlyBundles,
  ...tglBundles,
  ...lotusBundles,
  ...dailyDealBundles
];