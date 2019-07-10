> # Class: RxCode

## Hierarchy

* [RxBase](_rxbase_.rxbase.md)

  * **RxCode**

## Implements

* [IContractBase](../interfaces/_types_.icontractbase.md)‹*"rxjs"*›

### Index

#### Constructors

* [constructor](_rxcode_.rxcode.md#constructor)

#### Properties

* [abi](_rxcode_.rxcode.md#abi)
* [api](_rxcode_.rxcode.md#api)
* [apiContracts](_rxcode_.rxcode.md#apicontracts)
* [code](_rxcode_.rxcode.md#code)

#### Methods

* [createBlueprint](_rxcode_.rxcode.md#createblueprint)

## Constructors

###  constructor

\+ **new RxCode**(`api`: `ApiRx`, `abi`: [ContractABI](../modules/_types_.md#contractabi) | `Abi`, `wasm`: string | `Uint8Array`): *[RxCode](_rxcode_.rxcode.md)*

*Overrides [RxBase](_rxbase_.rxbase.md).[constructor](_rxbase_.rxbase.md#constructor)*

*Defined in [RxCode.ts:50](https://github.com/polkadot-js/api/blob/71011cf/packages/api-contract/src/RxCode.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiRx` |
`abi` | [ContractABI](../modules/_types_.md#contractabi) \| `Abi` |
`wasm` | string \| `Uint8Array` |

**Returns:** *[RxCode](_rxcode_.rxcode.md)*

## Properties

###  abi

• **abi**: *`Abi`*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[abi](../interfaces/_types_.icontractbase.md#abi)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[abi](_rxbase_.rxbase.md#abi)*

*Defined in [RxBase.ts:14](https://github.com/polkadot-js/api/blob/71011cf/packages/api-contract/src/RxBase.ts#L14)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹*"rxjs"*›*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[api](../interfaces/_types_.icontractbase.md#api)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[api](_rxbase_.rxbase.md#api)*

*Defined in [RxBase.ts:15](https://github.com/polkadot-js/api/blob/71011cf/packages/api-contract/src/RxBase.ts#L15)*

___

###  apiContracts

• **apiContracts**: *`SubmittableModuleExtrinsics<"rxjs">`*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[apiContracts](../interfaces/_types_.icontractbase.md#apicontracts)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[apiContracts](_rxbase_.rxbase.md#apicontracts)*

*Defined in [RxBase.ts:16](https://github.com/polkadot-js/api/blob/71011cf/packages/api-contract/src/RxBase.ts#L16)*

___

###  code

• **code**: *`Uint8Array`*

*Defined in [RxCode.ts:50](https://github.com/polkadot-js/api/blob/71011cf/packages/api-contract/src/RxCode.ts#L50)*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | `BN`): *[ICodePutCode](../interfaces/_rxcode_.icodeputcode.md)*

*Defined in [RxCode.ts:58](https://github.com/polkadot-js/api/blob/71011cf/packages/api-contract/src/RxCode.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number \| `BN` |

**Returns:** *[ICodePutCode](../interfaces/_rxcode_.icodeputcode.md)*