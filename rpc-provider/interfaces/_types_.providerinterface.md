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

● **hasSubscriptions**: *boolean*

*Defined in [types.ts:46](url)*

___

## Methods

###  clone

▸ **clone**(): *[ProviderInterface](_types_.providerinterface.md)*

*Defined in [types.ts:47](url)*

**Returns:** *[ProviderInterface](_types_.providerinterface.md)*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [types.ts:48](url)*

**Returns:** *void*

___

###  isConnected

▸ **isConnected**(): *boolean*

*Defined in [types.ts:49](url)*

**Returns:** *boolean*

___

###  on

▸ **on**(`type`: [ProviderInterface$Emitted](../modules/_types_.md#providerinterface$emitted), `sub`: [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface$emitcb)): *void*

*Defined in [types.ts:50](url)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface$emitted) |
`sub` | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface$emitcb) |

**Returns:** *void*

___

###  send

▸ **send**(`method`: string, `params`: `Array<any>`): *`Promise<any>`*

*Defined in [types.ts:51](url)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | `Array<any>` |

**Returns:** *`Promise<any>`*

___

###  subscribe

▸ **subscribe**(`type`: string, `method`: string, `params`: `Array<any>`, `cb`: [ProviderInterface$Callback](../modules/_types_.md#providerinterface$callback)): *`Promise<number>`*

*Defined in [types.ts:52](url)*

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

*Defined in [types.ts:53](url)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`id` | number |

**Returns:** *`Promise<boolean>`*

___