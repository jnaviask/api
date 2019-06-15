

# Hierarchy

**StorageFunctionObservable**

# Callable
▸ **__call**(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Observable`<`Codec`>

▸ **__call**<`T`>(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Observable`<`T`>

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L91)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Observable`<`Codec`>

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L92)*

**Type parameters:**

#### T :  `Codec`
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Observable`<`T`>

# Properties

<a id="at"></a>

##  at

**● at**: *`function`*

*Defined in [types.ts:94](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L94)*

#### Type declaration
▸(hash: *`Hash` \| `Uint8Array` \| `string`*, arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Observable`<`Codec`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `Hash` \| `Uint8Array` \| `string` |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Observable`<`Codec`>

___
<a id="creator"></a>

##  creator

**● creator**: *`StorageFunction`*

*Defined in [types.ts:95](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L95)*

___
<a id="hash"></a>

##  hash

**● hash**: *`function`*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L96)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Observable`<`Hash`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Observable`<`Hash`>

___
<a id="key"></a>

##  key

**● key**: *`function`*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L97)*

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

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L98)*

#### Type declaration
▸(args: *`Array`<`CodecArg`[] \| `CodecArg`>*): `Observable`<`Codec`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `Array`<`CodecArg`[] \| `CodecArg`> |

**Returns:** `Observable`<`Codec`>

___
<a id="size"></a>

##  size

**● size**: *`function`*

*Defined in [types.ts:99](https://github.com/polkadot-js/api/blob/f9605cd/packages/api/src/types.ts#L99)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `Observable`<`U64`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `Observable`<`U64`>

___

