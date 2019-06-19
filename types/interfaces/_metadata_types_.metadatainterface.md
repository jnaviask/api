> # Interface: MetadataInterface <**Modules**>

## Type parameters

■` Modules`: *[Codec](_types_.codec.md)*

## Hierarchy

* [Codec](_types_.codec.md)

  * **MetadataInterface**

## Implemented by

* [MetadataV0](../classes/_metadata_v0_metadata_.metadatav0.md)
* [MetadataV1](../classes/_metadata_v1_metadata_.metadatav1.md)
* [MetadataV2](../classes/_metadata_v2_metadata_.metadatav2.md)
* [MetadataV3](../classes/_metadata_v3_metadata_.metadatav3.md)
* [MetadataV4](../classes/_metadata_v4_metadata_.metadatav4.md)
* [MetadataV5](../classes/_metadata_v5_metadata_.metadatav5.md)

### Index

#### Properties

* [encodedLength](_metadata_types_.metadatainterface.md#encodedlength)
* [isEmpty](_metadata_types_.metadatainterface.md#isempty)
* [modules](_metadata_types_.metadatainterface.md#modules)

#### Methods

* [eq](_metadata_types_.metadatainterface.md#eq)
* [getUniqTypes](_metadata_types_.metadatainterface.md#getuniqtypes)
* [toHex](_metadata_types_.metadatainterface.md#tohex)
* [toJSON](_metadata_types_.metadatainterface.md#tojson)
* [toRawType](_metadata_types_.metadatainterface.md#torawtype)
* [toString](_metadata_types_.metadatainterface.md#tostring)
* [toU8a](_metadata_types_.metadatainterface.md#tou8a)

## Properties

###  encodedLength

● **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:50](url)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  isEmpty

● **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:55](url)*

**`description`** Checks if the value is an empty value

___

###  modules

● **modules**: *[Vector](../classes/_codec_vector_.vector.md)‹*`Modules`*›*

*Defined in [Metadata/types.ts:9](url)*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:60](url)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  getUniqTypes

▸ **getUniqTypes**(`throwError`: boolean): *`Array<string>`*

*Defined in [Metadata/types.ts:10](url)*

**Parameters:**

Name | Type |
------ | ------ |
`throwError` | boolean |

**Returns:** *`Array<string>`*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:65](url)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) repersentation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:70](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:75](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:80](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:86](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___