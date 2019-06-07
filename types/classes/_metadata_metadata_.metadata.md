

*__name__*: Metadata

*__description__*: The versioned runtime metadata as a decoded structure

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

**↳ Metadata**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Metadata**(value?: *`Uint8Array` \| `string`*): [Metadata](_metadata_metadata_.metadata.md)

*Overrides [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[constructor](_metadata_metadataversioned_.metadataversioned.md#constructor)*

*Defined in [Metadata/Metadata.ts:15](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/Metadata.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `Uint8Array` \| `string` |

**Returns:** [Metadata](_metadata_metadata_.metadata.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:165](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L165)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="asv0"></a>

##  asV0

**get asV0**(): [MetadataV0](_metadata_v0_metadata_.metadatav0.md)

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV0](_metadata_metadataversioned_.metadataversioned.md#asv0)*

*Defined in [Metadata/MetadataVersioned.ts:168](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L168)*

*__description__*: Returns the wrapped metadata as a V0 object

**Returns:** [MetadataV0](_metadata_v0_metadata_.metadatav0.md)

___
<a id="asv1"></a>

##  asV1

**get asV1**(): [MetadataV1](_metadata_v1_metadata_.metadatav1.md)

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV1](_metadata_metadataversioned_.metadataversioned.md#asv1)*

*Defined in [Metadata/MetadataVersioned.ts:177](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L177)*

*__description__*: Returns the wrapped values as a V1 object

**Returns:** [MetadataV1](_metadata_v1_metadata_.metadatav1.md)

___
<a id="asv2"></a>

##  asV2

**get asV2**(): [MetadataV2](_metadata_v2_metadata_.metadatav2.md)

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV2](_metadata_metadataversioned_.metadataversioned.md#asv2)*

*Defined in [Metadata/MetadataVersioned.ts:194](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L194)*

*__description__*: Returns the wrapped values as a V2 object

**Returns:** [MetadataV2](_metadata_v2_metadata_.metadatav2.md)

___
<a id="asv3"></a>

##  asV3

**get asV3**(): [MetadataV3](_metadata_v3_metadata_.metadatav3.md)

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV3](_metadata_metadataversioned_.metadataversioned.md#asv3)*

*Defined in [Metadata/MetadataVersioned.ts:211](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L211)*

*__description__*: Returns the wrapped values as a V3 object

**Returns:** [MetadataV3](_metadata_v3_metadata_.metadatav3.md)

___
<a id="asv4"></a>

##  asV4

**get asV4**(): [MetadataV4](_metadata_v4_metadata_.metadatav4.md)

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV4](_metadata_metadataversioned_.metadataversioned.md#asv4)*

*Defined in [Metadata/MetadataVersioned.ts:232](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L232)*

*__description__*: Returns the wrapped values as a V4 object

**Returns:** [MetadataV4](_metadata_v4_metadata_.metadatav4.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:178](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L178)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L150)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="magicnumber"></a>

##  magicNumber

**get magicNumber**(): [MagicNumber](_metadata_magicnumber_.magicnumber.md)

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[magicNumber](_metadata_metadataversioned_.metadataversioned.md#magicnumber)*

*Defined in [Metadata/MetadataVersioned.ts:147](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L147)*

*__description__*: 

**Returns:** [MagicNumber](_metadata_magicnumber_.magicnumber.md)

___
<a id="version"></a>

##  version

**get version**(): `number`

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[version](_metadata_metadataversioned_.metadataversioned.md#version)*

*Defined in [Metadata/MetadataVersioned.ts:161](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L161)*

*__description__*: the metadata version this structure represents

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L195)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L202)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="getuniqtypes"></a>

##  getUniqTypes

▸ **getUniqTypes**(throwError: *`boolean`*): `Array`<`string`>

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[getUniqTypes](_metadata_metadataversioned_.metadataversioned.md#getuniqtypes)*

*Defined in [Metadata/MetadataVersioned.ts:225](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/Metadata/MetadataVersioned.ts#L225)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| throwError | `boolean` |

**Returns:** `Array`<`string`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L209)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L216)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L223)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L237)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L250)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L258)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/c366ede/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

