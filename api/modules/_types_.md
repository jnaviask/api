

# Index

### Interfaces

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

### Type aliases

* [ApiInterface$Events](_types_.md#apiinterface_events)
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

---

# Type aliases

<a id="apiinterface_events"></a>

##  ApiInterface$Events

**Ƭ ApiInterface$Events**: *`RpcRxInterface$Events` \| "ready"*

*Defined in [types.ts:209](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L209)*

___
<a id="apitypes"></a>

##  ApiTypes

**Ƭ ApiTypes**: *"promise" \| "rxjs"*

*Defined in [types.ts:211](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L211)*

___
<a id="decoratemethodoptions"></a>

##  DecorateMethodOptions

**Ƭ DecorateMethodOptions**: *`object`*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L39)*

#### Type declaration

___
<a id="methodresult"></a>

##  MethodResult

**Ƭ MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L57)*

___
<a id="obsinnertype"></a>

##  ObsInnerType

**Ƭ ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:33](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L33)*

___
<a id="promiseresult"></a>

##  PromiseResult

**Ƭ PromiseResult**: *`function`*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L52)*

#### Type declaration
▸(...args: *`Parameters`<`F`>*): `Promise`<[ObsInnerType](_types_.md#obsinnertype)<`ReturnType`<`F`>>>▸(...args: *`Push`<`Parameters`<`F`>, `Callback`<[ObsInnerType](_types_.md#obsinnertype)<`ReturnType`<`F`>>>>*): [UnsubscribePromise](_types_.md#unsubscribepromise)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `Parameters`<`F`> |

**Returns:** `Promise`<[ObsInnerType](_types_.md#obsinnertype)<`ReturnType`<`F`>>>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `Push`<`Parameters`<`F`>, `Callback`<[ObsInnerType](_types_.md#obsinnertype)<`ReturnType`<`F`>>>> |

**Returns:** [UnsubscribePromise](_types_.md#unsubscribepromise)

___
<a id="queryablestoragefunction"></a>

##  QueryableStorageFunction

**Ƭ QueryableStorageFunction**: *`QueryableStorageFunction<ApiType>`*

*Defined in [types.ts:119](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L119)*

___
<a id="queryablestoragemulti"></a>

##  QueryableStorageMulti

**Ƭ QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:142](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L142)*

___
<a id="queryablestoragemultiarg"></a>

##  QueryableStorageMultiArg

**Ƭ QueryableStorageMultiArg**: *[QueryableStorageFunction](_types_.md#queryablestoragefunction)<`ApiType`> \| [[QueryableStorageFunction](_types_.md#queryablestoragefunction)<`ApiType`>, `Array`]*

*Defined in [types.ts:128](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L128)*

___
<a id="queryablestoragemultiargs"></a>

##  QueryableStorageMultiArgs

**Ƭ QueryableStorageMultiArgs**: *`Array`<[QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)<`ApiType`>>*

*Defined in [types.ts:132](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L132)*

___
<a id="rxresult"></a>

##  RxResult

**Ƭ RxResult**: *`function`*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L51)*

#### Type declaration
▸(...args: *`Parameters`<`F`>*): `Observable`<[ObsInnerType](_types_.md#obsinnertype)<`ReturnType`<`F`>>>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `Parameters`<`F`> |

**Returns:** `Observable`<[ObsInnerType](_types_.md#obsinnertype)<`ReturnType`<`F`>>>

___
<a id="signeroptions"></a>

##  SignerOptions

**Ƭ SignerOptions**: *`SignatureOptions` & `object`*

*Defined in [types.ts:213](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L213)*

___
<a id="unsubscribepromise"></a>

##  UnsubscribePromise

**Ƭ UnsubscribePromise**: *`Promise`<`function`>*

*Defined in [types.ts:35](https://github.com/polkadot-js/api/blob/7e5b09a/packages/api/src/types.ts#L35)*

___

