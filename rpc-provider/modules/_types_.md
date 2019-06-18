> # External module: "types"

### Index

#### Interfaces

* [ProviderInterface](../interfaces/_types_.providerinterface.md)

#### Type aliases

* [JsonRpcObject](_types_.md#jsonrpcobject)
* [JsonRpcRequest](_types_.md#jsonrpcrequest)
* [JsonRpcResponse](_types_.md#jsonrpcresponse)
* [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)
* [JsonRpcResponseBase$Error](_types_.md#jsonrpcresponsebase$error)
* [ProviderInterface$Callback](_types_.md#providerinterface$callback)
* [ProviderInterface$EmitCb](_types_.md#providerinterface$emitcb)
* [ProviderInterface$Emitted](_types_.md#providerinterface$emitted)

## Type aliases

###  JsonRpcObject

Ƭ **JsonRpcObject**: *object*

*Defined in [types.ts:5](url)*

#### Type declaration:

___

###  JsonRpcRequest

Ƭ **JsonRpcRequest**: *[JsonRpcObject](_types_.md#jsonrpcobject) & object*

*Defined in [types.ts:10](url)*

___

###  JsonRpcResponse

Ƭ **JsonRpcResponse**: *[JsonRpcObject](_types_.md#jsonrpcobject) & [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)*

*Defined in [types.ts:37](url)*

___

###  JsonRpcResponseBase

Ƭ **JsonRpcResponseBase**: *`JsonRpcResponse$Single` & `JsonRpcResponse$Subscription`*

*Defined in [types.ts:35](url)*

___

###  JsonRpcResponseBase$Error

Ƭ **JsonRpcResponseBase$Error**: *object*

*Defined in [types.ts:15](url)*

#### Type declaration:

___

###  ProviderInterface$Callback

Ƭ **ProviderInterface$Callback**: *function*

*Defined in [types.ts:39](url)*

#### Type declaration:

▸ (`result`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

___

###  ProviderInterface$EmitCb

Ƭ **ProviderInterface$EmitCb**: *function*

*Defined in [types.ts:43](url)*

#### Type declaration:

▸ (`value?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

___

###  ProviderInterface$Emitted

Ƭ **ProviderInterface$Emitted**: *"connected" | "disconnected" | "error"*

*Defined in [types.ts:41](url)*

___