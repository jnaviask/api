> # Class: WinningData <**T**>

**`name`** WinningData

**`description`** 
Winning data type. This encodes the top bidders of each range together with their bid.

## Type parameters

■` T`: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

  * [VectorFixed](_codec_vectorfixed_.vectorfixed.md)

  * **WinningData**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[■&#x60; n&#x60;: *number*\]: `T`

### Index

#### Constructors

* [constructor](_type_winningdata_.winningdata.md#constructor)

#### Accessors

* [Type](_type_winningdata_.winningdata.md#type)
* [encodedLength](_type_winningdata_.winningdata.md#encodedlength)
* [isEmpty](_type_winningdata_.winningdata.md#isempty)
* [length](_type_winningdata_.winningdata.md#length)

#### Methods

* [eq](_type_winningdata_.winningdata.md#eq)
* [filter](_type_winningdata_.winningdata.md#filter)
* [map](_type_winningdata_.winningdata.md#map)
* [toArray](_type_winningdata_.winningdata.md#toarray)
* [toHex](_type_winningdata_.winningdata.md#tohex)
* [toJSON](_type_winningdata_.winningdata.md#tojson)
* [toRawType](_type_winningdata_.winningdata.md#torawtype)
* [toString](_type_winningdata_.winningdata.md#tostring)
* [toU8a](_type_winningdata_.winningdata.md#tou8a)
* [decodeVectorFixed](_type_winningdata_.winningdata.md#static-decodevectorfixed)
* [with](_type_winningdata_.winningdata.md#static-with)

## Constructors

###  constructor

\+ **new WinningData**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `length`: number, `value`: [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› | `Uint8Array` | string | `Array<any>`): *[WinningData](_type_winningdata_.winningdata.md)*

*Inherited from [VectorFixed](_codec_vectorfixed_.vectorfixed.md).[constructor](_codec_vectorfixed_.vectorfixed.md#constructor)*

*Defined in [codec/VectorFixed.ts:18](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/VectorFixed.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | - |
`length` | number | - |
`value` | [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› \| `Uint8Array` \| string \| `Array<any>` |  [] as Array<any> |

**Returns:** *[WinningData](_type_winningdata_.winningdata.md)*

___

## Accessors

###  Type

● **get Type**(): *string*

*Inherited from [VectorFixed](_codec_vectorfixed_.vectorfixed.md).[Type](_codec_vectorfixed_.vectorfixed.md#type)*

*Defined in [codec/VectorFixed.ts:60](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/VectorFixed.ts#L60)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:29](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L29)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

● **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`Array<T>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L116)*

**`description`** Filters the array with the callback

**Parameters:**

■` callbackfn`: *function*

The filter function

▸ (`value`: `T`, `index`: number, `array`: `Array<T>`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `Array<T>` |

■`Optional` ` thisArg`: *any*

The `this` object to apply the result to

**Returns:** *`Array<T>`*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`Array<U>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L125)*

**`description`** Maps the array with the callback

**Type parameters:**

■` U`

**Parameters:**

■` callbackfn`: *function*

The mapping function

▸ (`value`: `T`, `index`: number, `array`: `Array<T>`): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `Array<T>` |

■`Optional` ` thisArg`: *any*

The `this` onject to apply the result to

**Returns:** *`Array<U>`*

___

###  toArray

▸ **toArray**(): *`Array<T>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<T>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [VectorFixed](_codec_vectorfixed_.vectorfixed.md).[toRawType](_codec_vectorfixed_.vectorfixed.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/VectorFixed.ts:71](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/VectorFixed.ts#L71)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:81](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/AbstractArray.ts#L81)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *`Uint8Array`*

*Inherited from [VectorFixed](_codec_vectorfixed_.vectorfixed.md).[toU8a](_codec_vectorfixed_.vectorfixed.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/VectorFixed.ts:64](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/VectorFixed.ts#L64)*

**Returns:** *`Uint8Array`*

___

### `Static` decodeVectorFixed

▸ **decodeVectorFixed**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `allocLength`: number, `value`: [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› | `Uint8Array` | string | `Array<any>`): *`Array<T>`*

*Inherited from [VectorFixed](_codec_vectorfixed_.vectorfixed.md).[decodeVectorFixed](_codec_vectorfixed_.vectorfixed.md#static-decodevectorfixed)*

*Defined in [codec/VectorFixed.ts:28](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/VectorFixed.ts#L28)*

**Type parameters:**

■` T`: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |
`allocLength` | number |
`value` | [VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*any*› \| `Uint8Array` \| string \| `Array<any>` |

**Returns:** *`Array<T>`*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`O`*›, `length`: number): *[Constructor](../interfaces/_types_.constructor.md)‹*[VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*`O`*›*›*

*Inherited from [VectorFixed](_codec_vectorfixed_.vectorfixed.md).[with](_codec_vectorfixed_.vectorfixed.md#static-with)*

*Defined in [codec/VectorFixed.ts:45](https://github.com/polkadot-js/api/blob/ffe1c71/packages/types/src/codec/VectorFixed.ts#L45)*

**Type parameters:**

■` O`: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`O`*› |
`length` | number |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[VectorFixed](_codec_vectorfixed_.vectorfixed.md)‹*`O`*›*›*

___