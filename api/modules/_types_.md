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
* [SignerOptions](_types_.md#signeroptions)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterface$Events

Ƭ **ApiInterface$Events**: *`ProviderInterface$Emitted` | "ready"*

*Defined in [types.ts:215](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L215)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:217](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L217)*

___

###  DecorateMethodOptions

Ƭ **DecorateMethodOptions**: *object*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L39)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L57)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:33](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L33)*

___

###  PromiseResult

Ƭ **PromiseResult**: *function*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L52)*

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

*Defined in [types.ts:124](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L124)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:147](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L147)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*›, `Array`]*

*Defined in [types.ts:133](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L133)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *`Array<QueryableStorageMultiArg<ApiType>>`*

*Defined in [types.ts:137](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L137)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L51)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Observable<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

___

###  SignerOptions

Ƭ **SignerOptions**: *`SignatureOptions` & object*

*Defined in [types.ts:219](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L219)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *`Promise<function>`*

*Defined in [types.ts:35](https://github.com/polkadot-js/api/blob/edea20d/packages/api/src/types.ts#L35)*