> # External module: "types"

### Index

#### Interfaces

* [ApiInterface$Rx](../interfaces/_types_.apiinterface_rx.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)
* [DecoratedRpc$Section](../interfaces/_types_.decoratedrpc_section.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageMultiBase](../interfaces/_types_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_.queryablestoragemultipromise.md)
* [Signer](../interfaces/_types_.signer.md)
* [StorageFunctionObservable](../interfaces/_types_.storagefunctionobservable.md)
* [StorageFunctionPromise](../interfaces/_types_.storagefunctionpromise.md)
* [StorageFunctionPromiseOverloads](../interfaces/_types_.storagefunctionpromiseoverloads.md)
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

#### Type aliases

* [ApiInterface$Events](_types_.md#apiinterface$events)
* [ApiTypes](_types_.md#apitypes)
* [DecorateMethodOptions](_types_.md#decoratemethodoptions)
* [MethodResult](_types_.md#methodresult)
* [ObsInnerType](_types_.md#obsinnertype)
* [PromiseResult](_types_.md#promiseresult)
* [QueryableStorageFunction](_types_.md#queryablestoragefunction)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [QueryableStorageMultiArgs](_types_.md#queryablestoragemultiargs)
* [RxResult](_types_.md#rxresult)
* [SignerOptions](_types_.md#signeroptions)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterface$Events

Ƭ **ApiInterface$Events**: *`ProviderInterface$Emitted` | "ready"*

*Defined in [types.ts:208](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L208)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:210](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L210)*

___

###  DecorateMethodOptions

Ƭ **DecorateMethodOptions**: *object*

*Defined in [types.ts:38](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L38)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L56)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:32](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L32)*

___

###  PromiseResult

Ƭ **PromiseResult**: *function*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L51)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Promise<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

▸ (...`args`: `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>`): *[UnsubscribePromise](_types_.md#unsubscribepromise)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>` |

___

###  QueryableStorageFunction

Ƭ **QueryableStorageFunction**: *`QueryableStorageFunction<ApiType>`*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L118)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:141](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L141)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageFunction](_types_.md#queryablestoragefunction)‹*`ApiType`*› | [[QueryableStorageFunction](_types_.md#queryablestoragefunction)‹*`ApiType`*›, `Array`]*

*Defined in [types.ts:127](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L127)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *`Array<QueryableStorageMultiArg<ApiType>>`*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L131)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L50)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Observable<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

___

###  SignerOptions

Ƭ **SignerOptions**: *`SignatureOptions` & object*

*Defined in [types.ts:212](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L212)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *`Promise<function>`*

*Defined in [types.ts:34](https://github.com/polkadot-js/api/blob/ed19ba9/packages/api/src/types.ts#L34)*

___