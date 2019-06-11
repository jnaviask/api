

# Type parameters
#### CodecResult 
#### SubscriptionResult 
# Hierarchy

 `StorageFunction`

**↳ QueryableStorageFunctionBase**

# Callable
▸ **__call**(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `CodecResult`

▸ **__call**(arg?: *`any`*): `Uint8Array`

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/98fd991/packages/api/src/types.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `CodecResult`

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:11](https://github.com/polkadot-js/api/blob/98fd991/packages/types/src/primitive/StorageKey.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Uint8Array`

# Properties

<a id="at"></a>

##  at

**● at**: *`function`*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/98fd991/packages/api/src/types.ts#L52)*

#### Type declaration
▸(hash: *`Hash` \| `Uint8Array` \| `string`*, arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `CodecResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `Hash` \| `Uint8Array` \| `string` |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `CodecResult`

___
<a id="creator"></a>

##  creator

**● creator**: *`StorageFunction`*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/98fd991/packages/api/src/types.ts#L53)*

___
<a id="hash"></a>

##  hash

**● hash**: *`function`*

*Defined in [types.ts:54](https://github.com/polkadot-js/api/blob/98fd991/packages/api/src/types.ts#L54)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): [HashResult](../modules/_types_.md#hashresult)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** [HashResult](../modules/_types_.md#hashresult)<`CodecResult`, `SubscriptionResult`>

___
<a id="headkey"></a>

## `<Optional>` headKey

**● headKey**: *`Uint8Array`*

*Inherited from StorageFunction.headKey*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:13](https://github.com/polkadot-js/api/blob/98fd991/packages/types/src/primitive/StorageKey.ts#L13)*

___
<a id="key"></a>

##  key

**● key**: *`function`*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/98fd991/packages/api/src/types.ts#L55)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** `string`

___
<a id="meta"></a>

##  meta

**● meta**: *`MetaV4`*

*Inherited from StorageFunction.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:14](https://github.com/polkadot-js/api/blob/98fd991/packages/types/src/primitive/StorageKey.ts#L14)*

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Inherited from StorageFunction.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:15](https://github.com/polkadot-js/api/blob/98fd991/packages/types/src/primitive/StorageKey.ts#L15)*

___
<a id="multi"></a>

##  multi

**● multi**: *`function`*

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/98fd991/packages/api/src/types.ts#L56)*

#### Type declaration
▸(args: *`Array`<`CodecArg`[] \| `CodecArg`>*, callback?: *`CodecCallback`*): `SubscriptionResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `Array`<`CodecArg`[] \| `CodecArg`> |
| `Optional` callback | `CodecCallback` |

**Returns:** `SubscriptionResult`

___
<a id="section"></a>

##  section

**● section**: *`string`*

*Inherited from StorageFunction.section*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:16](https://github.com/polkadot-js/api/blob/98fd991/packages/types/src/primitive/StorageKey.ts#L16)*

___
<a id="size"></a>

##  size

**● size**: *`function`*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/98fd991/packages/api/src/types.ts#L57)*

#### Type declaration
▸(arg1?: *`CodecArg`*, arg2?: *`CodecArg`*): [U64Result](../modules/_types_.md#u64result)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg1 | `CodecArg` |
| `Optional` arg2 | `CodecArg` |

**Returns:** [U64Result](../modules/_types_.md#u64result)<`CodecResult`, `SubscriptionResult`>

___
<a id="tojson"></a>

##  toJSON

**● toJSON**: *`function`*

*Inherited from StorageFunction.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:17](https://github.com/polkadot-js/api/blob/98fd991/packages/types/src/primitive/StorageKey.ts#L17)*

#### Type declaration
▸(): `any`

**Returns:** `any`

___

