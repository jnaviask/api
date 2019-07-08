> # Interface: ProviderInterface

## Hierarchy

* **ProviderInterface**

### Index

#### Properties

* [hasSubscriptions](_types_.providerinterface.md#hassubscriptions)

#### Methods

* [clone](_types_.providerinterface.md#clone)
* [disconnect](_types_.providerinterface.md#disconnect)
* [isConnected](_types_.providerinterface.md#isconnected)
* [on](_types_.providerinterface.md#on)
* [send](_types_.providerinterface.md#send)
* [subscribe](_types_.providerinterface.md#subscribe)
* [unsubscribe](_types_.providerinterface.md#unsubscribe)

## Properties

###  hasSubscriptions

• **hasSubscriptions**: *boolean*

*Defined in [types.ts:46](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L46)*

## Methods

###  clone

▸ **clone**(): *[ProviderInterface](_types_.providerinterface.md)*

*Defined in [types.ts:47](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L47)*

**Returns:** *[ProviderInterface](_types_.providerinterface.md)*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [types.ts:48](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L48)*

**Returns:** *void*

___

###  isConnected

▸ **isConnected**(): *boolean*

*Defined in [types.ts:49](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L49)*

**Returns:** *boolean*

___

###  on

▸ **on**(`type`: [ProviderInterface$Emitted](../modules/_types_.md#providerinterface$emitted), `sub`: [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface$emitcb)): *void*

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface$emitted) |
`sub` | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface$emitcb) |

**Returns:** *void*

___

###  send

▸ **send**(`method`: string, `params`: `Array<any>`): *`Promise<any>`*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | `Array<any>` |

**Returns:** *`Promise<any>`*

___

###  subscribe

▸ **subscribe**(`type`: string, `method`: string, `params`: `Array<any>`, `cb`: [ProviderInterface$Callback](../modules/_types_.md#providerinterface$callback)): *`Promise<number>`*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`params` | `Array<any>` |
`cb` | [ProviderInterface$Callback](../modules/_types_.md#providerinterface$callback) |

**Returns:** *`Promise<number>`*

___

###  unsubscribe

▸ **unsubscribe**(`type`: string, `method`: string, `id`: number): *`Promise<boolean>`*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/2cacae1/packages/rpc-provider/src/types.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`id` | number |

**Returns:** *`Promise<boolean>`*