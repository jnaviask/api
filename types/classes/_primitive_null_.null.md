

*__name__*: Null

*__description__*: Implements a type that does not contain anything (apart from `null`)

# Hierarchy

**Null**

↳  [Finalization](_primitive_eventrecord_.finalization.md)

↳  [Origin](_primitive_origin_.origin.md)

↳  [Dropped](_rpc_extrinsicstatus_.dropped.md)

↳  [Future](_rpc_extrinsicstatus_.future.md)

↳  [Ready](_rpc_extrinsicstatus_.ready.md)

↳  [Invalid](_rpc_extrinsicstatus_.invalid.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Defined in [primitive/Null.ts:17](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L17)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Defined in [primitive/Null.ts:24](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L24)*

*__description__*: Checks if the value is an empty value (always true)

**Returns:** `boolean`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [primitive/Null.ts:31](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L31)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [primitive/Null.ts:38](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L38)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [primitive/Null.ts:45](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L45)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Defined in [primitive/Null.ts:52](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L52)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [primitive/Null.ts:59](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L59)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [primitive/Null.ts:67](https://github.com/polkadot-js/api/blob/73f2a2a/packages/types/src/primitive/Null.ts#L67)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

