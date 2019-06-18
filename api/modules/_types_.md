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

Ƭ **ApiInterface$Events**: *`RpcRxInterface$Events` | "ready"*

*Defined in [types.ts:209](url)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:211](url)*

___

###  DecorateMethodOptions

Ƭ **DecorateMethodOptions**: *object*

*Defined in [types.ts:39](url)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:57](url)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:33](url)*

___

###  PromiseResult

Ƭ **PromiseResult**: *function*

*Defined in [types.ts:52](url)*

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

*Defined in [types.ts:119](url)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:142](url)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageFunction](_types_.md#queryablestoragefunction)‹*`ApiType`*› | [[QueryableStorageFunction](_types_.md#queryablestoragefunction)‹*`ApiType`*›, `Array`]*

*Defined in [types.ts:128](url)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *`Array<QueryableStorageMultiArg<ApiType>>`*

*Defined in [types.ts:132](url)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:51](url)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Observable<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

___

###  SignerOptions

Ƭ **SignerOptions**: *`SignatureOptions` & object*

*Defined in [types.ts:213](url)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *`Promise<function>`*

*Defined in [types.ts:35](url)*

___