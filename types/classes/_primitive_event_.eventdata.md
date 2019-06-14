

*__name__*: EventData

*__description__*: Wrapper for the actual data that forms part of an [Event](_primitive_event_.event.md)

# Hierarchy

↳  [Tuple](_codec_tuple_.tuple.md)

**↳ EventData**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;[Codec](../interfaces/_types_.codec.md)
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EventData**(Types: *`Array`<[Constructor](../interfaces/_types_.constructor.md)>*, value: *`Uint8Array`*, typeDef: *`Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)>*, meta: *`EventMetadataV5`*, section: *`string`*, method: *`string`*): [EventData](_primitive_event_.eventdata.md)

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [primitive/Event.ts:37](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/primitive/Event.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `Array`<[Constructor](../interfaces/_types_.constructor.md)> |
| value | `Uint8Array` |
| typeDef | `Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)> |
| meta | `EventMetadataV5` |
| section | `string` |
| method | `string` |

**Returns:** [EventData](_primitive_event_.eventdata.md)

___

# Accessors

<a id="types"></a>

##  Types

**get Types**(): `Array`<`string`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:72](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Tuple.ts#L72)*

*__description__*: The types definition of the tuple

**Returns:** `Array`<`string`>

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/Tuple.ts:63](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Tuple.ts#L63)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L22)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

**get length**(): `number`

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides Array.length*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L38)*

*__description__*: The length of the value

**Returns:** `number`

___
<a id="meta"></a>

##  meta

**get meta**(): `EventMetadataV5`

*Defined in [primitive/Event.ts:51](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/primitive/Event.ts#L51)*

*__description__*: The wrapped [EventMetadata](_metadata_v0_events_.eventmetadata.md)

**Returns:** `EventMetadataV5`

___
<a id="method"></a>

##  method

**get method**(): `string`

*Defined in [primitive/Event.ts:58](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/primitive/Event.ts#L58)*

*__description__*: The method as a string

**Returns:** `string`

___
<a id="section"></a>

##  section

**get section**(): `string`

*Defined in [primitive/Event.ts:65](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/primitive/Event.ts#L65)*

*__description__*: The section as a string

**Returns:** `string`

___
<a id="typedef"></a>

##  typeDef

**get typeDef**(): `Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)>

*Defined in [primitive/Event.ts:72](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/primitive/Event.ts#L72)*

*__description__*: The [TypeDef](../modules/_codec_createtype_.md#typedef) for this event

**Returns:** `Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)>

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L46)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides Array.filter*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L116)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides Array.map*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L125)*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L53)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L60)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/AbstractArray.ts#L67)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#torawtype)*

*Defined in [codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Tuple.ts#L81)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [codec/Tuple.ts:94](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Tuple.ts#L94)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Tuple.ts#L103)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TupleConstructors`*): [Constructor](../interfaces/_types_.constructor.md)<[Tuple](_codec_tuple_.tuple.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#with)*

*Defined in [codec/Tuple.ts:52](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Tuple.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TupleConstructors` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Tuple](_codec_tuple_.tuple.md)>

___

