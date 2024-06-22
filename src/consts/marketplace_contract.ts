import type { Chain } from "thirdweb";
import { ethereum } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0xaAcc47b56ed40F28f1d46b0166D7D136f2574278",
    chain: ethereum,
  },
];
