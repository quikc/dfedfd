/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Delt, DeltInterface } from "../../contracts/Delt";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getFees",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "feeType",
            type: "string",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct Delt.Fee[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "feeType",
            type: "string",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct Delt.Fee",
        name: "_fee",
        type: "tuple",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600460808190526311195b1d60e21b60a09081526200002791600591906200080a565b50604080518082019091526004808252631111531560e21b602090920191825262000055916006916200080a565b503480156200006357600080fd5b50600160009081556200007790336200018d565b620000926000805160206200265b833981519152336200018d565b620000ba33620000a56012600a62000b30565b620000b490620493e062000bef565b620001fc565b6040805160a08101825260046060820190815263313ab93760e11b6080830152815260006020820152606491810191909152620000f79062000274565b6040805160a081018252600360608201908152623232bb60e91b60808301528152730eb4b7662270706122998dcbcaeb0157f5b69501602082015260c891810191909152620001469062000274565b6040805160a081018252600960608201908152686c697175696469747960b81b6080830152815230602082015260c891810191909152620001879062000274565b62000d2b565b62000199828262000582565b620001f85760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45b5050565b6000805160206200265b8339815191526200021781620005af565b6001600160a01b03831660008181526003602090815260408083208054870190556002805487019055518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b60006200028181620005af565b600060088190556001905b600754811015620004d857836040015160086000828254620002af919062000acc565b90915550506007805482908110620002cb57620002cb62000cff565b9060005260206000209060030201600001604051602001620002ee919062000a1c565b60408051601f1981840301815290829052805160209182012086519092620003179201620009e7565b604051602081830303815290604052805190602001201415620004c357604084015115620003bb57836007828154811062000356576200035662000cff565b90600052602060002090600302016000820151816000019080519060200190620003829291906200080a565b5060208201516001820180546001600160a01b0319166001600160a01b03909216919091179055604090910151600290910155620004b9565b60078054620003cd9060019062000c11565b81548110620003e057620003e062000cff565b90600052602060002090600302016007828154811062000404576200040462000cff565b90600052602060002090600302016000820181600001908054620004289062000c78565b6200043592919062000899565b5060018281015490820180546001600160a01b0319166001600160a01b03909216919091179055600291820154910155600780548062000479576200047962000ce9565b600082815260208120600019909201916003830201906200049b82826200091d565b506001810180546001600160a01b0319169055600060029091015590555b60009150620004d8565b80620004cf8162000cb5565b9150506200028c565b5080156200057d57600780546001810182556000919091528351805185926003027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801916200052d918391602001906200080a565b5060208201516001820180546001600160a01b0319166001600160a01b03909216919091179055604091820151600290910155830151600880546000906200057790849062000acc565b90915550505b505050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff165b92915050565b620005bb8133620005be565b50565b620005ca828262000582565b620001f857620005f0816001600160a01b031660146200064a60201b62000d1c1760201c565b6200060683602062000d1c6200064a821b17811c565b604051602001620006199291906200096e565b60408051601f198184030181529082905262461bcd60e51b82526200064191600401620009e7565b60405180910390fd5b606060006200065b83600262000bef565b6200066890600262000acc565b6001600160401b0381111562000682576200068262000d15565b6040519080825280601f01601f191660200182016040528015620006ad576020820181803683370190505b509050600360fc1b81600081518110620006cb57620006cb62000cff565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110620006fd57620006fd62000cff565b60200101906001600160f81b031916908160001a90535060006200072384600262000bef565b6200073090600162000acc565b90505b6001811115620007b2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811062000768576200076862000cff565b1a60f81b82828151811062000781576200078162000cff565b60200101906001600160f81b031916908160001a90535060049490941c93620007aa8162000c5e565b905062000733565b508315620008035760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640162000641565b9392505050565b828054620008189062000c78565b90600052602060002090601f0160209004810192826200083c576000855562000887565b82601f106200085757805160ff191683800117855562000887565b8280016001018555821562000887579182015b82811115620008875782518255916020019190600101906200086a565b506200089592915062000957565b5090565b828054620008a79062000c78565b90600052602060002090601f016020900481019282620008cb576000855562000887565b82601f10620008de578054855562000887565b828001600101855582156200088757600052602060002091601f016020900482015b828111156200088757825482559160010191906001019062000900565b5080546200092b9062000c78565b6000825580601f106200093c575050565b601f016020900490600052602060002090810190620005bb91905b5b8082111562000895576000815560010162000958565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351620009a881601785016020880162000c2b565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351620009db81602884016020880162000c2b565b01602801949350505050565b602081526000825180602084015262000a0881604085016020870162000c2b565b601f01601f19169190910160400192915050565b600060208083526000845481600182811c91508083168062000a3f57607f831692505b85831081141562000a5e57634e487b7160e01b85526022600452602485fd5b87860183815260200181801562000a7e576001811462000a905762000abd565b60ff1986168252878201965062000abd565b60008b81526020902060005b8681101562000ab75781548482015290850190890162000a9c565b83019750505b50949998505050505050505050565b6000821982111562000ae25762000ae262000cd3565b500190565b600181815b8085111562000b2857816000190482111562000b0c5762000b0c62000cd3565b8085161562000b1a57918102915b93841c939080029062000aec565b509250929050565b60006200080360ff84168360008262000b4c57506001620005a9565b8162000b5b57506000620005a9565b816001811462000b74576002811462000b7f5762000b9f565b6001915050620005a9565b60ff84111562000b935762000b9362000cd3565b50506001821b620005a9565b5060208310610133831016604e8410600b841016171562000bc4575081810a620005a9565b62000bd0838362000ae7565b806000190482111562000be75762000be762000cd3565b029392505050565b600081600019048311821515161562000c0c5762000c0c62000cd3565b500290565b60008282101562000c265762000c2662000cd3565b500390565b60005b8381101562000c4857818101518382015260200162000c2e565b8381111562000c58576000848401525b50505050565b60008162000c705762000c7062000cd3565b506000190190565b600181811c9082168062000c8d57607f821691505b6020821081141562000caf57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562000ccc5762000ccc62000cd3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6119208062000d3b6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b8578063a217fddf1161007c578063a217fddf14610289578063a9059cbb14610291578063d5391393146102a4578063d547741f146102cb578063db8d55f1146102de578063dd62ed3e146102f357600080fd5b806370a082311461021f5780637175bce21461024857806391d148541461025b57806395d89b411461026e5780639dc29fac1461027657600080fd5b8063248a9ca3116100ff578063248a9ca3146101b15780632f2ff15d146101d5578063313ce567146101ea57806336568abe146101f957806340c10f191461020c57600080fd5b806301ffc9a71461013c57806306fdde0314610164578063095ea7b31461017957806318160ddd1461018c57806323b872dd1461019e575b600080fd5b61014f61014a36600461142e565b61032c565b60405190151581526020015b60405180910390f35b61016c610363565b60405161015b919061165c565b61014f6101873660046113c8565b6103f5565b6002545b60405190815260200161015b565b61014f6101ac36600461138c565b610478565b6101906101bf3660046113f2565b6000908152600160208190526040909120015490565b6101e86101e336600461140b565b6105e5565b005b6040516012815260200161015b565b6101e861020736600461140b565b610610565b6101e861021a3660046113c8565b61068e565b61019061022d36600461133e565b6001600160a01b031660009081526003602052604090205490565b6101e8610256366004611458565b610704565b61014f61026936600461140b565b6109e3565b61016c610a0e565b6101e86102843660046113c8565b610a1d565b610190600081565b61014f61029f3660046113c8565b610ab4565b6101907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101e86102d936600461140b565b610be2565b6102e6610c08565b60405161015b91906115d2565b610190610301366004611359565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b60006001600160e01b03198216637965db0b60e01b148061035d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606005805461037290611806565b80601f016020809104026020016040519081016040528092919081815260200182805461039e90611806565b80156103eb5780601f106103c0576101008083540402835291602001916103eb565b820191906000526020600020905b8154815290600101906020018083116103ce57829003601f168201915b5050505050905090565b3360009081526004602090815260408083206001600160a01b038616845290915281208054839190839061042a908490611771565b90915550506040518281526001600160a01b0384169033907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259060200160405180910390a350600192915050565b6000600260005414156104d25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556001600160a01b038516815260046020908152604080832033845290915281205483111561053f5760405162461bcd60e51b8152602060048201526013602482015272185b5bdd5b9d081b9bdd08185c1c1c9bdd9959606a1b60448201526064016104c9565b6001600160a01b038516600081815260046020908152604080832033845282528083208054889003905592825260039052208054849003905561058183610ebf565b6001600160a01b0380861660008181526003602052604090819020805494880394850190555192935091908716906000805160206118cb833981519152906105cc9085815260200190565b60405180910390a3600191505060016000559392505050565b6000828152600160208190526040909120015461060181611095565b61060b83836110a2565b505050565b6001600160a01b03811633146106805760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104c9565b61068a828261110d565b5050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66106b881611095565b6001600160a01b03831660008181526003602090815260408083208054870190556002805487019055518581526000805160206118cb83398151915291015b60405180910390a3505050565b600061070f81611095565b600060088190556001905b60075481101561093f5783604001516008600082825461073a9190611771565b909155505060078054829081106107535761075361189e565b9060005260206000209060030201600001604051602001610774919061166f565b60408051601f198184030181529082905280516020918201208651909261079b920161165c565b60405160208183030381529060405280519060200120141561092d576040840151156108375783600782815481106107d5576107d561189e565b906000526020600020906003020160008201518160000190805190602001906107ff9291906111d8565b5060208201516001820180546001600160a01b0319166001600160a01b03909216919091179055604090910151600290910155610924565b60078054610847906001906117a8565b815481106108575761085761189e565b9060005260206000209060030201600782815481106108785761087861189e565b9060005260206000209060030201600082018160000190805461089a90611806565b6108a592919061125c565b5060018281015490820180546001600160a01b0319166001600160a01b0390921691909117905560029182015491015560078054806108e6576108e6611888565b6000828152602081206000199092019160038302019061090682826112d7565b506001810180546001600160a01b0319169055600060029091015590555b6000915061093f565b8061093781611841565b91505061071a565b50801561060b57600780546001810182556000919091528351805185926003027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880191610991918391602001906111d8565b5060208201516001820180546001600160a01b0319166001600160a01b03909216919091179055604091820151600290910155830151600880546000906109d9908490611771565b9091555050505050565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606006805461037290611806565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610a4781611095565b6001600160a01b038316600090815260036020526040902054821115610a6c57600080fd5b6001600160a01b038316600081815260036020908152604080832080548790039055600280548790039055518581529192916000805160206118cb83398151915291016106f7565b600060026000541415610b095760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104c9565b6002600090815533815260036020526040812054831115610b635760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b60448201526064016104c9565b33600090815260036020526040902080548490039055610b8283610ebf565b6001600160a01b0385166000818152600360205260409081902080549387039384019055519192509033906000805160206118cb83398151915290610bca9085815260200190565b60405180910390a36001915050600160005592915050565b60008281526001602081905260409091200154610bfe81611095565b61060b838361110d565b60606007805480602002602001604051908101604052809291908181526020016000905b82821015610d135783829060005260206000209060030201604051806060016040529081600082018054610c5f90611806565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8b90611806565b8015610cd85780601f10610cad57610100808354040283529160200191610cd8565b820191906000526020600020905b815481529060010190602001808311610cbb57829003601f168201915b50505091835250506001828101546001600160a01b031660208084019190915260029093015460409092019190915291835292019101610c2c565b50505050905090565b60606000610d2b836002611789565b610d36906002611771565b67ffffffffffffffff811115610d4e57610d4e6118b4565b6040519080825280601f01601f191660200182016040528015610d78576020820181803683370190505b509050600360fc1b81600081518110610d9357610d9361189e565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610dc257610dc261189e565b60200101906001600160f81b031916908160001a9053506000610de6846002611789565b610df1906001611771565b90505b6001811115610e69576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610e2557610e2561189e565b1a60f81b828281518110610e3b57610e3b61189e565b60200101906001600160f81b031916908160001a90535060049490941c93610e62816117ef565b9050610df4565b508315610eb85760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104c9565b9392505050565b60008080805b6007548110156110335760078181548110610ee257610ee261189e565b9060005260206000209060030201600201548581610f0257610f02611872565b04925060008311610f475760405162461bcd60e51b815260206004820152600f60248201526e185b5bdd5b9d081d1bc81cdb585b1b608a1b60448201526064016104c9565b826003600060078481548110610f5f57610f5f61189e565b60009182526020808320600160039093020191909101546001600160a01b031683528201929092526040018120919091556007805483908110610fa457610fa461189e565b60009182526020909120600160039092020101546001600160a01b03161415610fd1576002805484900390555b828201915060078181548110610fe957610fe961189e565b6000918252602091829020600390910201600101546040518581526001600160a01b039091169133916000805160206118cb833981519152910160405180910390a3600101610ec5565b50806008541461107d5760405162461bcd60e51b81526020600482015260156024820152743332b2903ab731b2b93a30b4b73a3c9032b93937b960591b60448201526064016104c9565b80848161108c5761108c611872565b04949350505050565b61109f8133611174565b50565b6110ac82826109e3565b61068a5760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b61111782826109e3565b1561068a5760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b61117e82826109e3565b61068a57611196816001600160a01b03166014610d1c565b6111a1836020610d1c565b6040516020016111b292919061155d565b60408051601f198184030181529082905262461bcd60e51b82526104c99160040161165c565b8280546111e490611806565b90600052602060002090601f016020900481019282611206576000855561124c565b82601f1061121f57805160ff191683800117855561124c565b8280016001018555821561124c579182015b8281111561124c578251825591602001919060010190611231565b5061125892915061130d565b5090565b82805461126890611806565b90600052602060002090601f01602090048101928261128a576000855561124c565b82601f1061129b578054855561124c565b8280016001018555821561124c57600052602060002091601f016020900482015b8281111561124c5782548255916001019190600101906112bc565b5080546112e390611806565b6000825580601f106112f3575050565b601f01602090049060005260206000209081019061109f91905b5b80821115611258576000815560010161130e565b80356001600160a01b038116811461133957600080fd5b919050565b60006020828403121561135057600080fd5b610eb882611322565b6000806040838503121561136c57600080fd5b61137583611322565b915061138360208401611322565b90509250929050565b6000806000606084860312156113a157600080fd5b6113aa84611322565b92506113b860208501611322565b9150604084013590509250925092565b600080604083850312156113db57600080fd5b6113e483611322565b946020939093013593505050565b60006020828403121561140457600080fd5b5035919050565b6000806040838503121561141e57600080fd5b8235915061138360208401611322565b60006020828403121561144057600080fd5b81356001600160e01b031981168114610eb857600080fd5b6000602080838503121561146b57600080fd5b823567ffffffffffffffff8082111561148357600080fd5b908401906060828703121561149757600080fd5b61149f611717565b8235828111156114ae57600080fd5b8301601f810188136114bf57600080fd5b8035838111156114d1576114d16118b4565b6114e3601f8201601f19168701611740565b935080845288868284010111156114f957600080fd5b8086830187860137600090840186015250818152611518838501611322565b9381019390935250604090810135908201529392505050565b600081518084526115498160208601602086016117bf565b601f01601f19169290920160200192915050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516115958160178501602088016117bf565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516115c68160288401602088016117bf565b01602801949350505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561164e57603f1989840301855281516060815181865261161f82870182611531565b838b01516001600160a01b0316878c0152928901519589019590955250948701949250908601906001016115f9565b509098975050505050505050565b602081526000610eb86020830184611531565b600060208083526000845481600182811c91508083168061169157607f831692505b8583108114156116af57634e487b7160e01b85526022600452602485fd5b8786018381526020018180156116cc57600181146116dd57611708565b60ff19861682528782019650611708565b60008b81526020902060005b86811015611702578154848201529085019089016116e9565b83019750505b50949998505050505050505050565b6040516060810167ffffffffffffffff8111828210171561173a5761173a6118b4565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611769576117696118b4565b604052919050565b600082198211156117845761178461185c565b500190565b60008160001904831182151516156117a3576117a361185c565b500290565b6000828210156117ba576117ba61185c565b500390565b60005b838110156117da5781810151838201526020016117c2565b838111156117e9576000848401525b50505050565b6000816117fe576117fe61185c565b506000190190565b600181811c9082168061181a57607f821691505b6020821081141561183b57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156118555761185561185c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220989800ada2f983b6a92e21d83faaf1de38395b16a62a627e08c12b21135b489364736f6c634300080700339f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

type DeltConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeltConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Delt__factory extends ContractFactory {
  constructor(...args: DeltConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Delt> {
    return super.deploy(overrides || {}) as Promise<Delt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Delt {
    return super.attach(address) as Delt;
  }
  override connect(signer: Signer): Delt__factory {
    return super.connect(signer) as Delt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeltInterface {
    return new utils.Interface(_abi) as DeltInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Delt {
    return new Contract(address, _abi, signerOrProvider) as Delt;
  }
}
