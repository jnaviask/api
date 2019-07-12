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
* [SignerOptions](../interfaces/_types_.signeroptions.md)
* [StorageEntryObservable](../interfaces/_types_.storageentryobservable.md)
* [StorageEntryPromise](../interfaces/_types_.storageentrypromise.md)
* [StorageEntryPromiseMulti](../interfaces/_types_.storageentrypromisemulti.md)
* [StorageEntryPromiseOverloads](../interfaces/_types_.storageentrypromiseoverloads.md)
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
* [QueryableStorageEntry](_types_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [QueryableStorageMultiArgs](_types_.md#queryablestoragemultiargs)
* [RxResult](_types_.md#rxresult)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterface$Events

Ƭ **ApiInterface$Events**: *`ProviderInterface$Emitted` | "ready"*

*Defined in [types.ts:216](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L216)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:218](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L218)*

___

###  DecorateMethodOptions

Ƭ **DecorateMethodOptions**: *object*

*Defined in [types.ts:40](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L40)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:58](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L58)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:34](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L34)*

___

###  PromiseResult

Ƭ **PromiseResult**: *function*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L53)*

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

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *`QueryableStorageEntry<ApiType>`*

*Defined in [types.ts:125](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L125)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:148](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L148)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*›, `Array`]*

*Defined in [types.ts:134](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L134)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *`Array<QueryableStorageMultiArg<ApiType>>`*

*Defined in [types.ts:138](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L138)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L52)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Observable<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *`Promise<function>`*

*Defined in [types.ts:36](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/api/src/types.ts#L36)*