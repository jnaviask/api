> # Class: RxContract

## Hierarchy

* [RxBase](_rxbase_.rxbase.md)

  * **RxContract**

## Implements

* [IContractBase](../interfaces/_types_.icontractbase.md)‹*"rxjs"*›
* [IContract](../interfaces/_types_.icontract.md)

### Index

#### Constructors

* [constructor](_rxcontract_.rxcontract.md#constructor)

#### Properties

* [abi](_rxcontract_.rxcontract.md#abi)
* [address](_rxcontract_.rxcontract.md#address)
* [api](_rxcontract_.rxcontract.md#api)
* [apiContracts](_rxcontract_.rxcontract.md#apicontracts)
* [calls](_rxcontract_.rxcontract.md#calls)

## Constructors

###  constructor

\+ **new RxContract**(`api`: `ApiRx`, `abi`: [ContractABI](../modules/_types_.md#contractabi) | `Abi`, `address`: string | `AccountId` | `Address`): *[RxContract](_rxcontract_.rxcontract.md)*

*Overrides [RxBase](_rxbase_.rxbase.md).[constructor](_rxbase_.rxbase.md#constructor)*

*Defined in [RxContract.ts:26](https://github.com/polkadot-js/api/blob/557699e/packages/api-contract/src/RxContract.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiRx` |
`abi` | [ContractABI](../modules/_types_.md#contractabi) \| `Abi` |
`address` | string \| `AccountId` \| `Address` |

**Returns:** *[RxContract](_rxcontract_.rxcontract.md)*

## Properties

###  abi

• **abi**: *`Abi`*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[abi](../interfaces/_types_.icontractbase.md#abi)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[abi](_rxbase_.rxbase.md#abi)*

*Defined in [RxBase.ts:14](https://github.com/polkadot-js/api/blob/557699e/packages/api-contract/src/RxBase.ts#L14)*

___

###  address

• **address**: *`Address`*

*Implementation of [IContract](../interfaces/_types_.icontract.md).[address](../interfaces/_types_.icontract.md#address)*

*Defined in [RxContract.ts:25](https://github.com/polkadot-js/api/blob/557699e/packages/api-contract/src/RxContract.ts#L25)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹*"rxjs"*›*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[api](../interfaces/_types_.icontractbase.md#api)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[api](_rxbase_.rxbase.md#api)*

*Defined in [RxBase.ts:15](https://github.com/polkadot-js/api/blob/557699e/packages/api-contract/src/RxBase.ts#L15)*

___

###  apiContracts

• **apiContracts**: *`SubmittableModuleExtrinsics<"rxjs">`*

*Implementation of [IContractBase](../interfaces/_types_.icontractbase.md).[apiContracts](../interfaces/_types_.icontractbase.md#apicontracts)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[apiContracts](_rxbase_.rxbase.md#apicontracts)*

*Defined in [RxBase.ts:16](https://github.com/polkadot-js/api/blob/557699e/packages/api-contract/src/RxBase.ts#L16)*

___

###  calls

• **calls**: *[IContract$Calls](../interfaces/_types_.icontract_calls.md)*

*Implementation of [IContract](../interfaces/_types_.icontract.md).[calls](../interfaces/_types_.icontract.md#calls)*

*Defined in [RxContract.ts:26](https://github.com/polkadot-js/api/blob/557699e/packages/api-contract/src/RxContract.ts#L26)*