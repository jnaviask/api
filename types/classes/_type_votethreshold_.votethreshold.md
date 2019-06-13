

*__name__*: VoteThreshold

*__description__*: Voting threshold, used inside proposals to set change the voting tally

# Hierarchy

↳  [Enum](_codec_enumtype_.enum.md)

**↳ VoteThreshold**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new VoteThreshold**(index?: *`number` \| `Uint8Array`*): [VoteThreshold](_type_votethreshold_.votethreshold.md)

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [type/VoteThreshold.ts:12](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/type/VoteThreshold.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` index | `number` \| `Uint8Array` |

**Returns:** [VoteThreshold](_type_votethreshold_.votethreshold.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L186)*

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

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L201)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L217)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L224)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:239](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L239)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:249](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L249)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TypesDef` \| `Array`<`string`>*): `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#with)*

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TypesDef` \| `Array`<`string`> |

**Returns:** `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

___

