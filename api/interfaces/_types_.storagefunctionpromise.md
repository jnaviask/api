

# Hierarchy

 [StorageFunctionPromiseOverloads](_types_.storagefunctionpromiseoverloads.md)

**↳ StorageFunctionPromise**

# Callable
▸ **__call**(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Promise`<`Codec`>

▸ **__call**<`T`>(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Promise`<`T`>

▸ **__call**<`T`>(callback: *`Callback`<`T`>*): [UnsubscribePromise](../modules/_types_.md#unsubscribepromise)

▸ **__call**<`T`>(arg: *`CodecArg`*, callback: *`Callback`<`T`>*): [UnsubscribePromise](../modules/_types_.md#unsubscribepromise)

▸ **__call**<`T`>(arg1: *`CodecArg`*, arg2: *`CodecArg`*, callback: *`Callback`<`T`>*): [UnsubscribePromise](../modules/_types_.md#unsubscribepromise)

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Promise`<`Codec`>

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L103)*

**Type parameters:**

#### T :  `Codec`
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Promise`<`T`>

*Defined in [types.ts:104](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L104)*

**Type parameters:**

#### T :  `Codec`
**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `Callback`<`T`> |

**Returns:** [UnsubscribePromise](../modules/_types_.md#unsubscribepromise)

*Defined in [types.ts:105](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L105)*

**Type parameters:**

#### T :  `Codec`
**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | `CodecArg` |
| callback | `Callback`<`T`> |

**Returns:** [UnsubscribePromise](../modules/_types_.md#unsubscribepromise)

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L106)*

**Type parameters:**

#### T :  `Codec`
**Parameters:**

| Name | Type |
| ------ | ------ |
| arg1 | `CodecArg` |
| arg2 | `CodecArg` |
| callback | `Callback`<`T`> |

**Returns:** [UnsubscribePromise](../modules/_types_.md#unsubscribepromise)

# Properties

<a id="at"></a>

##  at

**● at**: *`function`*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L111)*

#### Type declaration
▸(hash: *`Hash` \| `Uint8Array` \| `string`*, arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Promise`<`Codec`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `Hash` \| `Uint8Array` \| `string` |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Promise`<`Codec`>

___
<a id="creator"></a>

##  creator

**● creator**: *`StorageFunction`*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L112)*

___
<a id="hash"></a>

##  hash

**● hash**: *`function`*

*Defined in [types.ts:113](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L113)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Promise`<`Hash`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Promise`<`Hash`>

___
<a id="key"></a>

##  key

**● key**: *`function`*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L114)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `string`

___
<a id="multi"></a>

##  multi

**● multi**: *`function`*

*Defined in [types.ts:115](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L115)*

#### Type declaration
▸<`T`>(args: *`Array`<`CodecArg`[] \| `CodecArg`>*, callback?: *`Callback`<`Array`<`T`>>*): `Promise`<`Array`<`T`>>

**Type parameters:**

#### T :  `Codec`
**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `Array`<`CodecArg`[] \| `CodecArg`> |
| `Optional` callback | `Callback`<`Array`<`T`>> |

**Returns:** `Promise`<`Array`<`T`>>

___
<a id="size"></a>

##  size

**● size**: *`function`*

*Defined in [types.ts:116](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/types.ts#L116)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Promise`<`U64`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Promise`<`U64`>

___

