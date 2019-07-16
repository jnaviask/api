> # Class: MortalEra

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Hierarchy

  * [Tuple](_codec_tuple_.tuple.md)

  * **MortalEra**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_extrinsicera_.mortalera.md#constructor)

#### Accessors

* [Types](_type_extrinsicera_.mortalera.md#types)
* [encodedLength](_type_extrinsicera_.mortalera.md#encodedlength)
* [isEmpty](_type_extrinsicera_.mortalera.md#isempty)
* [length](_type_extrinsicera_.mortalera.md#length)
* [period](_type_extrinsicera_.mortalera.md#period)
* [phase](_type_extrinsicera_.mortalera.md#phase)

#### Methods

* [birth](_type_extrinsicera_.mortalera.md#birth)
* [death](_type_extrinsicera_.mortalera.md#death)
* [eq](_type_extrinsicera_.mortalera.md#eq)
* [filter](_type_extrinsicera_.mortalera.md#filter)
* [map](_type_extrinsicera_.mortalera.md#map)
* [toArray](_type_extrinsicera_.mortalera.md#toarray)
* [toHex](_type_extrinsicera_.mortalera.md#tohex)
* [toJSON](_type_extrinsicera_.mortalera.md#tojson)
* [toRawType](_type_extrinsicera_.mortalera.md#torawtype)
* [toString](_type_extrinsicera_.mortalera.md#tostring)
* [toU8a](_type_extrinsicera_.mortalera.md#tou8a)
* [with](_type_extrinsicera_.mortalera.md#static-with)

## Constructors

###  constructor

\+ **new MortalEra**(`value?`: `MortalMethod` | `Uint8Array` | number[] | string): *[MortalEra](_type_extrinsicera_.mortalera.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [type/ExtrinsicEra.ts:51](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `MortalMethod` \| `Uint8Array` \| number[] \| string |

**Returns:** *[MortalEra](_type_extrinsicera_.mortalera.md)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:74](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/Tuple.ts#L74)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [type/ExtrinsicEra.ts:98](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L98)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

___

###  period

• **get period**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [type/ExtrinsicEra.ts:105](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L105)*

**`description`** The period of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

___

###  phase

• **get phase**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [type/ExtrinsicEra.ts:112](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L112)*

**`description`** The phase of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

## Methods

###  birth

▸ **birth**(`current`: `BN` | number): *number*

*Defined in [type/ExtrinsicEra.ts:149](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L149)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

**Parameters:**

Name | Type |
------ | ------ |
`current` | `BN` \| number |

**Returns:** *number*

___

###  death

▸ **death**(`current`: `BN` | number): *number*

*Defined in [type/ExtrinsicEra.ts:161](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L161)*

**`description`** Get the block number of the first block at which the era has ended.

**Parameters:**

Name | Type |
------ | ------ |
`current` | `BN` \| number |

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L116)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L125)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [type/ExtrinsicEra.ts:119](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L119)*

**`description`** Returns a JSON representation of the actual value

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Tuple.ts:83](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/Tuple.ts#L83)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [codec/Tuple.ts:96](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/Tuple.ts#L96)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [type/ExtrinsicEra.ts:134](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/ExtrinsicEra.ts#L134)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TupleConstructors`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [codec/Tuple.ts:52](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/Tuple.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TupleConstructors` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*