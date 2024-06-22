import type { Chain } from "thirdweb";
import { ethereum } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x3EAcf2D8ce91b35c048C6Ac6Ec36341aaE002FB9",
    chain: ethereum,
    title: "2021 Cycle Index",
    thumbnailUrl:
      "https://raw.seadn.io/files/92c41d1d5cfad37217b45b3071cf2ac2.png",
    slug: "2021i",
    type: "ERC721",
  },
];
