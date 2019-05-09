

# Index

### Interfaces

* [ProviderInterface](../interfaces/_types_.providerinterface.md)

### Type aliases

* [JsonRpcObject](_types_.md#jsonrpcobject)
* [JsonRpcRequest](_types_.md#jsonrpcrequest)
* [JsonRpcResponse](_types_.md#jsonrpcresponse)
* [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)
* [JsonRpcResponseBase$Error](_types_.md#jsonrpcresponsebase_error)
* [ProviderInterface$Callback](_types_.md#providerinterface_callback)
* [ProviderInterface$EmitCb](_types_.md#providerinterface_emitcb)
* [ProviderInterface$Emitted](_types_.md#providerinterface_emitted)

---

# Type aliases

<a id="jsonrpcobject"></a>

##  JsonRpcObject

**Ƭ JsonRpcObject**: *`object`*

*Defined in [types.ts:5](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L5)*

#### Type declaration

___
<a id="jsonrpcrequest"></a>

##  JsonRpcRequest

**Ƭ JsonRpcRequest**: *[JsonRpcObject](_types_.md#jsonrpcobject) & `object`*

*Defined in [types.ts:10](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L10)*

___
<a id="jsonrpcresponse"></a>

##  JsonRpcResponse

**Ƭ JsonRpcResponse**: *[JsonRpcObject](_types_.md#jsonrpcobject) & [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)*

*Defined in [types.ts:37](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L37)*

___
<a id="jsonrpcresponsebase"></a>

##  JsonRpcResponseBase

**Ƭ JsonRpcResponseBase**: *`JsonRpcResponse$Single` & `JsonRpcResponse$Subscription`*

*Defined in [types.ts:35](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L35)*

___
<a id="jsonrpcresponsebase_error"></a>

##  JsonRpcResponseBase$Error

**Ƭ JsonRpcResponseBase$Error**: *`object`*

*Defined in [types.ts:15](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L15)*

#### Type declaration

___
<a id="providerinterface_callback"></a>

##  ProviderInterface$Callback

**Ƭ ProviderInterface$Callback**: *`function`*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L39)*

#### Type declaration
▸(result: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| result | `any` |

**Returns:** `void`

___
<a id="providerinterface_emitcb"></a>

##  ProviderInterface$EmitCb

**Ƭ ProviderInterface$EmitCb**: *`function`*

*Defined in [types.ts:43](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L43)*

#### Type declaration
▸(value?: *`any`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `any`

___
<a id="providerinterface_emitted"></a>

##  ProviderInterface$Emitted

**Ƭ ProviderInterface$Emitted**: *"connected" \| "disconnected" \| "error"*

*Defined in [types.ts:41](https://github.com/polkadot-js/api/blob/b8fabfe/packages/rpc-provider/src/types.ts#L41)*

___

