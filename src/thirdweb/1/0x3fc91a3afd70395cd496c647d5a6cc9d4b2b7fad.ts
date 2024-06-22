import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/



/**
 * Creates an event object for the RewardsSent event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { rewardsSentEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  rewardsSentEvent()
 * ],
 * });
 * ```
 */ 
export function rewardsSentEvent() {
  return prepareEvent({
    signature: "event RewardsSent(uint256 amount)",
  });
};
  

/**
* Contract read functions
*/

/**
 * Represents the parameters for the "onERC1155BatchReceived" function.
 */
export type OnERC1155BatchReceivedParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_2: AbiParameterToPrimitiveType<{"internalType":"uint256[]","name":"","type":"uint256[]"}>
arg_3: AbiParameterToPrimitiveType<{"internalType":"uint256[]","name":"","type":"uint256[]"}>
arg_4: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"","type":"bytes"}>
};

/**
 * Calls the "onERC1155BatchReceived" function on the contract.
 * @param options - The options for the onERC1155BatchReceived function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { onERC1155BatchReceived } from "TODO";
 * 
 * const result = await onERC1155BatchReceived({
 *  arg_0: ...,
 *  arg_1: ...,
 *  arg_2: ...,
 *  arg_3: ...,
 *  arg_4: ...,
 * });
 * 
 * ```
 */
export async function onERC1155BatchReceived(
  options: BaseTransactionOptions<OnERC1155BatchReceivedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xbc197c81",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256[]",
      "name": "",
      "type": "uint256[]"
    },
    {
      "internalType": "uint256[]",
      "name": "",
      "type": "uint256[]"
    },
    {
      "internalType": "bytes",
      "name": "",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "bytes4",
      "name": "",
      "type": "bytes4"
    }
  ]
],
    params: [options.arg_0, options.arg_1, options.arg_2, options.arg_3, options.arg_4]
  });
};


/**
 * Represents the parameters for the "onERC1155Received" function.
 */
export type OnERC1155ReceivedParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_2: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
arg_3: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
arg_4: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"","type":"bytes"}>
};

/**
 * Calls the "onERC1155Received" function on the contract.
 * @param options - The options for the onERC1155Received function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { onERC1155Received } from "TODO";
 * 
 * const result = await onERC1155Received({
 *  arg_0: ...,
 *  arg_1: ...,
 *  arg_2: ...,
 *  arg_3: ...,
 *  arg_4: ...,
 * });
 * 
 * ```
 */
export async function onERC1155Received(
  options: BaseTransactionOptions<OnERC1155ReceivedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf23a6e61",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "bytes4",
      "name": "",
      "type": "bytes4"
    }
  ]
],
    params: [options.arg_0, options.arg_1, options.arg_2, options.arg_3, options.arg_4]
  });
};


/**
 * Represents the parameters for the "onERC721Received" function.
 */
export type OnERC721ReceivedParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_2: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
arg_3: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"","type":"bytes"}>
};

/**
 * Calls the "onERC721Received" function on the contract.
 * @param options - The options for the onERC721Received function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { onERC721Received } from "TODO";
 * 
 * const result = await onERC721Received({
 *  arg_0: ...,
 *  arg_1: ...,
 *  arg_2: ...,
 *  arg_3: ...,
 * });
 * 
 * ```
 */
export async function onERC721Received(
  options: BaseTransactionOptions<OnERC721ReceivedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x150b7a02",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "bytes4",
      "name": "",
      "type": "bytes4"
    }
  ]
],
    params: [options.arg_0, options.arg_1, options.arg_2, options.arg_3]
  });
};


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}>
};

/**
 * Calls the "supportsInterface" function on the contract.
 * @param options - The options for the supportsInterface function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { supportsInterface } from "TODO";
 * 
 * const result = await supportsInterface({
 *  interfaceId: ...,
 * });
 * 
 * ```
 */
export async function supportsInterface(
  options: BaseTransactionOptions<SupportsInterfaceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x01ffc9a7",
  [
    {
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.interfaceId]
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "collectRewards" function.
 */
export type CollectRewardsParams = {
  looksRareClaim: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"looksRareClaim","type":"bytes"}>
};

/**
 * Calls the "collectRewards" function on the contract.
 * @param options - The options for the "collectRewards" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { collectRewards } from "TODO";
 * 
 * const transaction = collectRewards({
 *  looksRareClaim: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function collectRewards(
  options: BaseTransactionOptions<CollectRewardsParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x709a1cc2",
  [
    {
      "internalType": "bytes",
      "name": "looksRareClaim",
      "type": "bytes"
    }
  ],
  []
],
    params: [options.looksRareClaim]
  });
};


/**
 * Represents the parameters for the "execute" function.
 */
export type ExecuteParams = {
  commands: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"commands","type":"bytes"}>
inputs: AbiParameterToPrimitiveType<{"internalType":"bytes[]","name":"inputs","type":"bytes[]"}>
};

/**
 * Calls the "execute" function on the contract.
 * @param options - The options for the "execute" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { execute } from "TODO";
 * 
 * const transaction = execute({
 *  commands: ...,
 *  inputs: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function execute(
  options: BaseTransactionOptions<ExecuteParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x24856bc3",
  [
    {
      "internalType": "bytes",
      "name": "commands",
      "type": "bytes"
    },
    {
      "internalType": "bytes[]",
      "name": "inputs",
      "type": "bytes[]"
    }
  ],
  []
],
    params: [options.commands, options.inputs]
  });
};


/**
 * Represents the parameters for the "uniswapV3SwapCallback" function.
 */
export type UniswapV3SwapCallbackParams = {
  amount0Delta: AbiParameterToPrimitiveType<{"internalType":"int256","name":"amount0Delta","type":"int256"}>
amount1Delta: AbiParameterToPrimitiveType<{"internalType":"int256","name":"amount1Delta","type":"int256"}>
data: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"data","type":"bytes"}>
};

/**
 * Calls the "uniswapV3SwapCallback" function on the contract.
 * @param options - The options for the "uniswapV3SwapCallback" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { uniswapV3SwapCallback } from "TODO";
 * 
 * const transaction = uniswapV3SwapCallback({
 *  amount0Delta: ...,
 *  amount1Delta: ...,
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function uniswapV3SwapCallback(
  options: BaseTransactionOptions<UniswapV3SwapCallbackParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xfa461e33",
  [
    {
      "internalType": "int256",
      "name": "amount0Delta",
      "type": "int256"
    },
    {
      "internalType": "int256",
      "name": "amount1Delta",
      "type": "int256"
    },
    {
      "internalType": "bytes",
      "name": "data",
      "type": "bytes"
    }
  ],
  []
],
    params: [options.amount0Delta, options.amount1Delta, options.data]
  });
};


