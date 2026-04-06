import { dailyDealBundles } from "./dailyDealsBundles";
import { growthFundBundles } from "./growthFundBundles";
import { lotusBundles } from "./lotusBundles";
import { monthlyBundles } from "./monthlyBundles";
import { specialBundles } from "./specialBundles";
import { starterBundles } from "./starterBundles";
import { supplyDepotBundles } from "./supplyDepotBundles";
import { tglBundles } from "./tglBundles";
import { tierBundles } from "./tierBundles";
import { townHallBundles } from "./townHallBundles";
import { vipBundles } from "./vipBundles";
import { wheelBundles } from "./wheelBundles";

export const bundles = [
  ...starterBundles,
  ...vipBundles,
  ...wheelBundles,
  ...monthlyBundles,
  ...tglBundles,
  ...lotusBundles,
  ...dailyDealBundles,
  ...growthFundBundles,
  ...townHallBundles,
  ...supplyDepotBundles,
  ...specialBundles,
  ...tierBundles
];