

*__name__*: ConsensusEngineId

*__description__*: A 4-byte identifier (actually a \[u8; 4\]) identifying the engine, e.g. for Aura it would be \[b'a', b'u', b'r', b'a'\]

# Hierarchy

↳  [U32](_primitive_u32_.u32.md)

**↳ ConsensusEngineId**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ConsensusEngineId**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [ConsensusEngineId](_rpc_digest_.consensusengineid.md)

*Inherited from [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** [ConsensusEngineId](_rpc_digest_.consensusengineid.md)

___

# Accessors

<a id="isaura"></a>

##  isAura

**get isAura**(): `boolean`

*Defined in [rpc/Digest.ts:64](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/rpc/Digest.ts#L64)*

*__description__*: `true` if the engine matches aura

**Returns:** `boolean`

___
<a id="isbabe"></a>

##  isBabe

**get isBabe**(): `boolean`

*Defined in [rpc/Digest.ts:71](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/rpc/Digest.ts#L71)*

*__description__*: `true` is the engine matches babe

**Returns:** `boolean`

___
<a id="isgrandpa"></a>

##  isGrandpa

**get isGrandpa**(): `boolean`

*Defined in [rpc/Digest.ts:78](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/rpc/Digest.ts#L78)*

*__description__*: `true` is the engine matches grandpa

**Returns:** `boolean`

___

# Methods

<a id="extractslot"></a>

##  extractSlot

▸ **extractSlot**(bytes: *[Bytes](_primitive_bytes_.bytes.md)*): [U64](_primitive_u64_.u64.md)

*Defined in [rpc/Digest.ts:85](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/rpc/Digest.ts#L85)*

*__description__*: From the input bytes, decode into an aura-tuple

**Parameters:**

| Name | Type |
| ------ | ------ |
| bytes | [Bytes](_primitive_bytes_.bytes.md) |

**Returns:** [U64](_primitive_u64_.u64.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`boolean`*): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/codec/UInt.ts#L36)*

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

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/codec/UInt.ts#L48)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides AbstractInt.toString*

*Defined in [rpc/Digest.ts:97](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/rpc/Digest.ts#L97)*

*__description__*: Override the default toString to return a 4-byte string

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/UInt.ts:56](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/codec/UInt.ts#L56)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="idtostring"></a>

## `<Static>` idToString

▸ **idToString**(input: *`number` \| `BN`*): `string`

*Defined in [rpc/Digest.ts:47](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/rpc/Digest.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `number` \| `BN` |

**Returns:** `string`

___
<a id="stringtoid"></a>

## `<Static>` stringToId

▸ **stringToId**(input: *`string`*): `number`

*Defined in [rpc/Digest.ts:54](https://github.com/polkadot-js/api/blob/6771f99/packages/types/src/rpc/Digest.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `string` |

**Returns:** `number`

___

