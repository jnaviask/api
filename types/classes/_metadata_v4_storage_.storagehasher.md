

# Hierarchy

↳  [Enum](_codec_enum_.enum.md)

**↳ StorageHasher**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageHasher**(value?: *`any`*): [StorageHasher](_metadata_v4_storage_.storagehasher.md)

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [Metadata/v4/Storage.ts:28](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/Metadata/v4/Storage.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [StorageHasher](_metadata_v4_storage_.storagehasher.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Defined in [codec/Enum.ts:64](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L64)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:71](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L71)*

*__description__*: Returns the index for this value (equivalent to toNumber)

**Returns:** `number`

___
<a id="isblake2128"></a>

##  isBlake2128

**get isBlake2128**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:36](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/Metadata/v4/Storage.ts#L36)*

*__description__*: Is the enum Blake2\_128

**Returns:** `boolean`

___
<a id="isblake2256"></a>

##  isBlake2256

**get isBlake2256**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:43](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/Metadata/v4/Storage.ts#L43)*

*__description__*: Is the enum Blake2\_256

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Enum](_codec_enum_.enum.md).[isEmpty](_codec_enum_.enum.md#isempty)*

*Defined in [codec/Enum.ts:78](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L78)*

*__description__*: Checks if the value is an empty value (always false)

**Returns:** `boolean`

___
<a id="istwox128"></a>

##  isTwox128

**get isTwox128**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:50](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/Metadata/v4/Storage.ts#L50)*

*__description__*: Is the enum Twox128

**Returns:** `boolean`

___
<a id="istwox128concat"></a>

##  isTwox128Concat

**get isTwox128Concat**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:64](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/Metadata/v4/Storage.ts#L64)*

*__description__*: Is the enum isTwox128Concat

**Returns:** `boolean`

___
<a id="istwox256"></a>

##  isTwox256

**get isTwox256**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:57](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/Metadata/v4/Storage.ts#L57)*

*__description__*: Is the enum Twox256

**Returns:** `boolean`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Defined in [codec/Enum.ts:85](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L85)*

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

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Defined in [codec/Enum.ts:98](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L98)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Overrides [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Defined in [Metadata/v4/Storage.ts:68](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/Metadata/v4/Storage.ts#L68)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:112](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L112)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Defined in [codec/Enum.ts:119](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L119)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Defined in [codec/Enum.ts:127](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L127)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeenum"></a>

## `<Static>` decodeEnum

▸ **decodeEnum**(def: *`EnumDef`*, value: *[Enum](_codec_enum_.enum.md) \| `Uint8Array` \| `string` \| `number`*): `number` \| `undefined`

*Inherited from [Enum](_codec_enum_.enum.md).[decodeEnum](_codec_enum_.enum.md#decodeenum)*

*Defined in [codec/Enum.ts:47](https://github.com/polkadot-js/api/blob/adec070/packages/types/src/codec/Enum.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `EnumDef` |
| value | [Enum](_codec_enum_.enum.md) \| `Uint8Array` \| `string` \| `number` |

**Returns:** `number` \| `undefined`

___

