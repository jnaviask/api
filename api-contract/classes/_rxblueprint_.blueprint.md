> # Class: Blueprint

## Hierarchy

* [RxBase](_rxbase_.rxbase.md)

  * **Blueprint**

## Implements

* [IContractBase](../interfaces/_types_.icontractbase.md)‹*"rxjs"*›

### Index

#### Constructors

* [constructor](_rxblueprint_.blueprint.md#constructor)

#### Properties

* [abi](_rxblueprint_.blueprint.md#abi)
* [api](_rxblueprint_.blueprint.md#api)
* [apiContracts](_rxblueprint_.blueprint.md#apicontracts)
* [codeHash](_rxblueprint_.blueprint.md#codehash)

#### Methods

* [deployContract](_rxblueprint_.blueprint.md#deploycontract)

## Constructors

###  constructor

\+ **new Blueprint**(`api`: *`ApiRx`*, `abi`: *[ContractABI](../modules/_types_.md#contractabi) | `Abi`*, `codeHash`: *string | `Hash`*): *[Blueprint](_rxblueprint_.blueprint.md)*

*Overrides [RxBase](_rxbase_.rxbase.md).[constructor](_rxbase_.rxbase.md#constructor)*

*Defined in [RxBlueprint.ts:37](https://github.com/polkadot-js/api/blob/5a1c79a/packages/api-contract/src/RxBlueprint.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiRx` |
`abi` | [ContractABI](../modules/_types_.md#contractabi) \| `Abi` |
`codeHash` | string \| `Hash` |

**Returns:** *[Blueprint](_rxblueprint_.blueprint.md)*

## Properties

###  abi

• **abi**: *`Abi`*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[abi](../interfaces/_types_.icontractbase.md#abi)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[abi](_rxbase_.rxbase.md#abi)*

*Defined in [RxBase.ts:14](https://github.com/polkadot-js/api/blob/5a1c79a/packages/api-contract/src/RxBase.ts#L14)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹*"rxjs"*›*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[api](../interfaces/_types_.icontractbase.md#api)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[api](_rxbase_.rxbase.md#api)*

*Defined in [RxBase.ts:15](https://github.com/polkadot-js/api/blob/5a1c79a/packages/api-contract/src/RxBase.ts#L15)*

___

###  apiContracts

• **apiContracts**: *`SubmittableModuleExtrinsics<"rxjs">`*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[apiContracts](../interfaces/_types_.icontractbase.md#apicontracts)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[apiContracts](_rxbase_.rxbase.md#apicontracts)*

*Defined in [RxBase.ts:16](https://github.com/polkadot-js/api/blob/5a1c79a/packages/api-contract/src/RxBase.ts#L16)*

___

###  codeHash

• **codeHash**: *`Hash`*

*Defined in [RxBlueprint.ts:37](https://github.com/polkadot-js/api/blob/5a1c79a/packages/api-contract/src/RxBlueprint.ts#L37)*

## Methods

###  deployContract

▸ **deployContract**(`endowment`: *number | `BN`*, `maxGas`: *number | `BN`*, ...`params`: *`Array<any>`*): *[IBlueprintCreate](../interfaces/_rxblueprint_.iblueprintcreate.md)*

*Defined in [RxBlueprint.ts:45](https://github.com/polkadot-js/api/blob/5a1c79a/packages/api-contract/src/RxBlueprint.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`endowment` | number \| `BN` |
`maxGas` | number \| `BN` |
`...params` | `Array<any>` |

**Returns:** *[IBlueprintCreate](../interfaces/_rxblueprint_.iblueprintcreate.md)*