

# Hierarchy

↳  [Enum](_codec_enumtype_.enum.md)

**↳ StorageFunctionType**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionType**(value?: *`any`*, index?: *`undefined` \| `number`*): [StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [Metadata/v5/Storage.ts:72](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |
| `Optional` index | `undefined` \| `number` |

**Returns:** [StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)

___

# Accessors

<a id="asdoublemap"></a>

##  asDoubleMap

**get asDoubleMap**(): [DoubleMapType](_metadata_v5_storage_.doublemaptype.md)

*Defined in [Metadata/v5/Storage.ts:84](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L84)*

*__description__*: The value as a mapped value

**Returns:** [DoubleMapType](_metadata_v5_storage_.doublemaptype.md)

___
<a id="asmap"></a>

##  asMap

**get asMap**(): [MapType](_metadata_v4_storage_.maptype.md)

*Defined in [Metadata/v5/Storage.ts:93](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L93)*

*__description__*: The value as a mapped value

**Returns:** [MapType](_metadata_v4_storage_.maptype.md)

___
<a id="astype"></a>

##  asType

**get asType**(): [PlainType](_metadata_v0_storage_.plaintype.md)

*Defined in [Metadata/v5/Storage.ts:102](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L102)*

*__description__*: The value as a [Type](_codec_struct_.struct.md#type) value

**Returns:** [PlainType](_metadata_v0_storage_.plaintype.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isdoublemap"></a>

##  isDoubleMap

**get isDoubleMap**(): `boolean`

*Defined in [Metadata/v5/Storage.ts:111](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L111)*

*__description__*: `true` if the storage entry is a doublemap

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="ismap"></a>

##  isMap

**get isMap**(): `boolean`

*Defined in [Metadata/v5/Storage.ts:118](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L118)*

*__description__*: `true` if the storage entry is a map

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="isplaintype"></a>

##  isPlainType

**get isPlainType**(): `boolean`

*Defined in [Metadata/v5/Storage.ts:125](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L125)*

*__description__*: `true` if the storage entry is a plain type

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L186)*

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

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L201)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L217)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L224)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [Metadata/v5/Storage.ts:132](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/Metadata/v5/Storage.ts#L132)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:249](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L249)*

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

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TypesDef` \| `Array`<`string`> |

**Returns:** `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

___

