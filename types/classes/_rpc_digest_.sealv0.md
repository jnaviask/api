> # Class: SealV0

**`name`** SealV0

**`description`** 
Log item indicating a sealing event. This has been replaced in later versions with a renamed [Seal](_rpc_digest_.seal.md), we however have kept compatibility with the old version

## Hierarchy

  * [Tuple](_codec_tuple_.tuple.md)

  * **SealV0**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[■&#x60; n&#x60;: *number*\]: [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_rpc_digest_.sealv0.md#constructor)

#### Accessors

* [Types](_rpc_digest_.sealv0.md#types)
* [encodedLength](_rpc_digest_.sealv0.md#encodedlength)
* [isEmpty](_rpc_digest_.sealv0.md#isempty)
* [length](_rpc_digest_.sealv0.md#length)
* [signature](_rpc_digest_.sealv0.md#signature)
* [slot](_rpc_digest_.sealv0.md#slot)

#### Methods

* [eq](_rpc_digest_.sealv0.md#eq)
* [filter](_rpc_digest_.sealv0.md#filter)
* [map](_rpc_digest_.sealv0.md#map)
* [toArray](_rpc_digest_.sealv0.md#toarray)
* [toHex](_rpc_digest_.sealv0.md#tohex)
* [toJSON](_rpc_digest_.sealv0.md#tojson)
* [toRawType](_rpc_digest_.sealv0.md#torawtype)
* [toString](_rpc_digest_.sealv0.md#tostring)
* [toU8a](_rpc_digest_.sealv0.md#tou8a)
* [with](_rpc_digest_.sealv0.md#static-with)

## Constructors

###  constructor

\+ **new SealV0**(`value`: any): *[SealV0](_rpc_digest_.sealv0.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [rpc/Digest.ts:142](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/rpc/Digest.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[SealV0](_rpc_digest_.sealv0.md)*

___

## Accessors

###  Types

● **get Types**(): *`Array<string>`*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:72](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/Tuple.ts#L72)*

**`description`** The types definition of the tuple

**Returns:** *`Array<string>`*

___

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/Tuple.ts:63](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/Tuple.ts#L63)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

● **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

___

###  signature

● **get signature**(): *[Signature](_type_signature_.signature.md)*

*Defined in [rpc/Digest.ts:153](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/rpc/Digest.ts#L153)*

**`description`** The wrapped [Signature](_type_signature_.signature.md)

**Returns:** *[Signature](_type_signature_.signature.md)*

___

###  slot

● **get slot**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [rpc/Digest.ts:160](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/rpc/Digest.ts#L160)*

**`description`** The wrapped [U64](_primitive_u64_.u64.md) slot

**Returns:** *[U64](_primitive_u64_.u64.md)*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`Array<Codec>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L116)*

**`description`** Filters the array with the callback

**Parameters:**

■` callbackfn`: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: `Array<Codec>`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | `Array<Codec>` |

■`Optional` ` thisArg`: *any*

The `this` object to apply the result to

**Returns:** *`Array<Codec>`*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`Array<U>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L125)*

**`description`** Maps the array with the callback

**Type parameters:**

■` U`

**Parameters:**

■` callbackfn`: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: `Array<Codec>`): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | `Array<Codec>` |

■`Optional` ` thisArg`: *any*

The `this` onject to apply the result to

**Returns:** *`Array<U>`*

___

###  toArray

▸ **toArray**(): *`Array<Codec>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/Tuple.ts#L81)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [codec/Tuple.ts:94](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/Tuple.ts#L94)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/Tuple.ts#L103)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TupleConstructors`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [codec/Tuple.ts:52](https://github.com/polkadot-js/api/blob/8f89b9d/packages/types/src/codec/Tuple.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TupleConstructors` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*

___