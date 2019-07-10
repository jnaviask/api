> # Class: Data

**`name`** Data

**`description`** 
A raw data structure. It is just an encoding of a U8a, without any length encoding

## Hierarchy

  * [U8a](_codec_u8a_.u8a.md)

  * **Data**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

### Index

#### Constructors

* [constructor](_primitive_data_.data.md#constructor)

#### Accessors

* [encodedLength](_primitive_data_.data.md#encodedlength)
* [isEmpty](_primitive_data_.data.md#isempty)
* [length](_primitive_data_.data.md#length)

#### Methods

* [eq](_primitive_data_.data.md#eq)
* [subarray](_primitive_data_.data.md#subarray)
* [toHex](_primitive_data_.data.md#tohex)
* [toJSON](_primitive_data_.data.md#tojson)
* [toRawType](_primitive_data_.data.md#torawtype)
* [toString](_primitive_data_.data.md#tostring)
* [toU8a](_primitive_data_.data.md#tou8a)

## Constructors

###  constructor

\+ **new Data**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[Data](_primitive_data_.data.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [codec/U8a.ts:18](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[Data](_primitive_data_.data.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L36)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L43)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L50)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L58)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L73)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined \| number | The position to end at  |

**Returns:** *`Uint8Array`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L87)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [primitive/Data.ts:16](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/primitive/Data.ts#L16)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L101)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:109](https://github.com/polkadot-js/api/blob/2f157cf/packages/types/src/codec/U8a.ts#L109)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*