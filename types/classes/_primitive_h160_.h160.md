> # Class: H160

**`name`** H160

**`description`** 
Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and
as a sane default for fixed-length hash representations.

## Hierarchy

  * [U8aFixed](_codec_u8afixed_.u8afixed.md)

  * **H160**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

### Index

#### Constructors

* [constructor](_primitive_h160_.h160.md#constructor)

#### Accessors

* [encodedLength](_primitive_h160_.h160.md#encodedlength)
* [isEmpty](_primitive_h160_.h160.md#isempty)
* [length](_primitive_h160_.h160.md#length)

#### Methods

* [bitLength](_primitive_h160_.h160.md#bitlength)
* [eq](_primitive_h160_.h160.md#eq)
* [subarray](_primitive_h160_.h160.md#subarray)
* [toHex](_primitive_h160_.h160.md#tohex)
* [toJSON](_primitive_h160_.h160.md#tojson)
* [toRawType](_primitive_h160_.h160.md#torawtype)
* [toString](_primitive_h160_.h160.md#tostring)
* [toU8a](_primitive_h160_.h160.md#tou8a)
* [with](_primitive_h160_.h160.md#static-with)

## Constructors

###  constructor

\+ **new H160**(`value?`: *[AnyU8a](../modules/_types_.md#anyu8a)*): *[H160](_primitive_h160_.h160.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [primitive/H160.ts:15](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/primitive/H160.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[H160](_primitive_h160_.h160.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L36)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L43)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L50)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[bitLength](_codec_u8afixed_.u8afixed.md#bitlength)*

*Defined in [codec/U8aFixed.ts:60](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8aFixed.ts#L60)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: *any*): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L58)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: *number*, `end?`: *undefined | number*): *`Uint8Array`*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L73)*

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

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L80)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L87)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [primitive/H160.ts:23](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/primitive/H160.ts#L23)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L101)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: *undefined | false | true*): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:109](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8a.ts#L109)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`bitLength`: *[BitLength](../modules/_codec_u8afixed_.md#bitlength)*): *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/c47ed58/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*