> # External module: "SubmittableExtrinsic"

### Index

#### Classes

* [SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)

#### Interfaces

* [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md)
* [SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)

#### Type aliases

* [SumbitableResultResult](_submittableextrinsic_.md#sumbitableresultresult)
* [SumbitableResultSubscription](_submittableextrinsic_.md#sumbitableresultsubscription)

#### Functions

* [createSubmittableExtrinsic](_submittableextrinsic_.md#createsubmittableextrinsic)

## Type aliases

###  SumbitableResultResult

Ƭ **SumbitableResultResult**: *`SumbitableResultResult<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:27](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/SubmittableExtrinsic.ts#L27)*

___

###  SumbitableResultSubscription

Ƭ **SumbitableResultSubscription**: *`SumbitableResultSubscription<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:32](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/SubmittableExtrinsic.ts#L32)*

## Functions

###  createSubmittableExtrinsic

▸ **createSubmittableExtrinsic**<**ApiType**>(`type`: [ApiTypes](_types_.md#apitypes), `api`: [ApiInterface$Rx](../interfaces/_types_.apiinterface_rx.md), `decorateMethod`: `decorateMethod`, `extrinsic`: `Method` | `Uint8Array` | string, `trackingCb?`: `Callback<ISubmittableResult>`): *[SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:97](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/SubmittableExtrinsic.ts#L97)*

**Type parameters:**

▪ **ApiType**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ApiTypes](_types_.md#apitypes) |
`api` | [ApiInterface$Rx](../interfaces/_types_.apiinterface_rx.md) |
`decorateMethod` | `decorateMethod` |
`extrinsic` | `Method` \| `Uint8Array` \| string |
`trackingCb?` | `Callback<ISubmittableResult>` |

**Returns:** *[SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)‹*`ApiType`*›*