

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[PlainType](_metadata_v0_storage_.plaintype.md) \| [MapType](_metadata_v4_storage_.maptype.md) \| [DoubleMapType](_metadata_v4_storage_.doublemaptype.md)>

**↳ StorageFunctionType**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageFunctionType**(value?: *`any`*, index?: *`undefined` \| `number`*): [StorageFunctionType](_metadata_v4_storage_.storagefunctiontype.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Metadata/v4/Storage.ts:111](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |
| `Optional` index | `undefined` \| `number` |

**Returns:** [StorageFunctionType](_metadata_v4_storage_.storagefunctiontype.md)

___

# Accessors

<a id="asdoublemap"></a>

##  asDoubleMap

**get asDoubleMap**(): [DoubleMapType](_metadata_v4_storage_.doublemaptype.md)

*Defined in [Metadata/v4/Storage.ts:123](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L123)*

*__description__*: The value as a mapped value

**Returns:** [DoubleMapType](_metadata_v4_storage_.doublemaptype.md)

___
<a id="asmap"></a>

##  asMap

**get asMap**(): [MapType](_metadata_v4_storage_.maptype.md)

*Defined in [Metadata/v4/Storage.ts:132](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L132)*

*__description__*: The value as a mapped value

**Returns:** [MapType](_metadata_v4_storage_.maptype.md)

___
<a id="astype"></a>

##  asType

**get asType**(): [PlainType](_metadata_v0_storage_.plaintype.md)

*Defined in [Metadata/v4/Storage.ts:141](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L141)*

*__description__*: The value as a \[\[Type\]\] value

**Returns:** [PlainType](_metadata_v0_storage_.plaintype.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:130](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L130)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[index](_codec_enumtype_.enumtype.md#index)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isdoublemap"></a>

##  isDoubleMap

**get isDoubleMap**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:150](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L150)*

*__description__*: `true` if the storage entry is a doublemap

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isEmpty](_codec_enumtype_.enumtype.md#isempty)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="ismap"></a>

##  isMap

**get isMap**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:157](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L157)*

*__description__*: `true` if the storage entry is a map

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="isplaintype"></a>

##  isPlainType

**get isPlainType**(): `boolean`

*Defined in [Metadata/v4/Storage.ts:164](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L164)*

*__description__*: `true` if the storage entry is a plain type

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L179)*

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

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L192)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L199)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [Metadata/v4/Storage.ts:171](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/Metadata/v4/Storage.ts#L171)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:225](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L225)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[with](_codec_enumtype_.enumtype.md#with)*

*Defined in [codec/EnumType.ts:117](https://github.com/polkadot-js/api/blob/c30d3a8/packages/types/src/codec/EnumType.ts#L117)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

___

