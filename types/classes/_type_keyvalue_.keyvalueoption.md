> # Class: KeyValueOption

**`name`** KeyValueOption

**`description`** 
A key/value change. This is similar to the [KeyValue](_type_keyvalue_.keyvalue.md) structure,
however in this case the value could be optional. Here it extends
from a [Tuple](_codec_tuple_.tuple.md), indicating the use inside areas such as [StorageChangeSet](_rpc_storagechangeset_.storagechangeset.md)

## Hierarchy

  * [Tuple](_codec_tuple_.tuple.md)

  * **KeyValueOption**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_keyvalue_.keyvalueoption.md#constructor)

#### Accessors

* [Types](_type_keyvalue_.keyvalueoption.md#types)
* [encodedLength](_type_keyvalue_.keyvalueoption.md#encodedlength)
* [isEmpty](_type_keyvalue_.keyvalueoption.md#isempty)
* [key](_type_keyvalue_.keyvalueoption.md#key)
* [length](_type_keyvalue_.keyvalueoption.md#length)
* [value](_type_keyvalue_.keyvalueoption.md#value)

#### Methods

* [eq](_type_keyvalue_.keyvalueoption.md#eq)
* [filter](_type_keyvalue_.keyvalueoption.md#filter)
* [map](_type_keyvalue_.keyvalueoption.md#map)
* [toArray](_type_keyvalue_.keyvalueoption.md#toarray)
* [toHex](_type_keyvalue_.keyvalueoption.md#tohex)
* [toJSON](_type_keyvalue_.keyvalueoption.md#tojson)
* [toRawType](_type_keyvalue_.keyvalueoption.md#torawtype)
* [toString](_type_keyvalue_.keyvalueoption.md#tostring)
* [toU8a](_type_keyvalue_.keyvalueoption.md#tou8a)
* [with](_type_keyvalue_.keyvalueoption.md#static-with)

## Constructors

###  constructor

\+ **new KeyValueOption**(`value?`: [KeyValueOptionValue](../modules/_type_keyvalue_.md#keyvalueoptionvalue) | `Uint8Array`): *[KeyValueOption](_type_keyvalue_.keyvalueoption.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [type/KeyValue.ts:54](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/KeyValue.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [KeyValueOptionValue](../modules/_type_keyvalue_.md#keyvalueoptionvalue) \| `Uint8Array` |

**Returns:** *[KeyValueOption](_type_keyvalue_.keyvalueoption.md)*

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

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/Tuple.ts:63](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/Tuple.ts#L63)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  key

• **get key**(): *[StorageKey](_primitive_storagekey_.storagekey.md)*

*Defined in [type/KeyValue.ts:65](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/KeyValue.ts#L65)*

**`description`** The [StorageKey](_primitive_storagekey_.storagekey.md)

**Returns:** *[StorageKey](_primitive_storagekey_.storagekey.md)*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

___

###  value

• **get value**(): *[Option](_codec_option_.option.md)‹*[StorageData](_primitive_storagedata_.storagedata.md)*›*

*Defined in [type/KeyValue.ts:72](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/type/KeyValue.ts#L72)*

**`description`** The [Option](_codec_option_.option.md) [StorageData](_primitive_storagedata_.storagedata.md)

**Returns:** *[Option](_codec_option_.option.md)‹*[StorageData](_primitive_storagedata_.storagedata.md)*›*

## Methods

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

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

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

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/Tuple.ts:105](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/Tuple.ts#L105)*

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

*Defined in [codec/Tuple.ts:52](https://github.com/polkadot-js/api/blob/d57dca5/packages/types/src/codec/Tuple.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TupleConstructors` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*