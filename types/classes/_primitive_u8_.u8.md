

*__name__*: U8

*__description__*: An 8-bit unsigned integer

# Hierarchy

↳  [UInt](_codec_uint_.uint.md)

**↳ U8**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new U8**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [U8](_primitive_u8_.u8.md)

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U8.ts:14](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/U8.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** [U8](_primitive_u8_.u8.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`boolean`*): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/UInt.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` isLe | `boolean` | false |

**Returns:** `string`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides AbstractInt.toRawType*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/UInt.ts#L48)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/UInt.ts:56](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/UInt.ts#L56)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

