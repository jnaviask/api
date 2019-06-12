

*__name__*: NetworkState

*__description__*: Wraps the properties retrieved from the chain via the `system.network_state` RPC call.

# Hierarchy

↳  [StructAny](_codec_structany_.structany.md)

**↳ NetworkState**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new NetworkState**(value?: *`object` \| `null`*): [NetworkState](_rpc_networkstate_.networkstate.md)

*Inherited from [StructAny](_codec_structany_.structany.md).[constructor](_codec_structany_.structany.md#constructor)*

*Defined in [codec/StructAny.ts:19](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `object` \| `null` |

**Returns:** [NetworkState](_rpc_networkstate_.networkstate.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [StructAny](_codec_structany_.structany.md).[encodedLength](_codec_structany_.structany.md#encodedlength)*

*Defined in [codec/StructAny.ts:46](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L46)*

*__description__*: Always 0, never encodes as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [StructAny](_codec_structany_.structany.md).[isEmpty](_codec_structany_.structany.md#isempty)*

*Defined in [codec/StructAny.ts:53](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L53)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [StructAny](_codec_structany_.structany.md).[eq](_codec_structany_.structany.md#eq)*

*Defined in [codec/StructAny.ts:60](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L60)*

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

*Inherited from [StructAny](_codec_structany_.structany.md).[toHex](_codec_structany_.structany.md#tohex)*

*Defined in [codec/StructAny.ts:67](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L67)*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toJSON](_codec_structany_.structany.md#tojson)*

*Defined in [codec/StructAny.ts:74](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L74)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toRawType](_codec_structany_.structany.md#torawtype)*

*Defined in [codec/StructAny.ts:85](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L85)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toString](_codec_structany_.structany.md#tostring)*

*Defined in [codec/StructAny.ts:92](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L92)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [StructAny](_codec_structany_.structany.md).[toU8a](_codec_structany_.structany.md#tou8a)*

*Defined in [codec/StructAny.ts:99](https://github.com/polkadot-js/api/blob/6ee5799/packages/types/src/codec/StructAny.ts#L99)*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |

**Returns:** `Uint8Array`

___

