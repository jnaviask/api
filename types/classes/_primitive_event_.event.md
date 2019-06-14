

*__name__*: Event

*__description__*: A representation of a system event. These are generated via the [Metadata](_metadata_metadata_.metadata.md) interfaces and specific to a specific Substrate runtime

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Event**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Event**(_value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [Event](_primitive_event_.event.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Event.ts:95](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L95)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` _value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [Event](_primitive_event_.event.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L163)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="data"></a>

##  data

**get data**(): [EventData](_primitive_event_.eventdata.md)

*Defined in [primitive/Event.ts:154](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L154)*

*__description__*: The wrapped [EventData](_primitive_event_.eventdata.md)

**Returns:** [EventData](_primitive_event_.eventdata.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L176)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): [EventId](_primitive_event_.eventid.md)

*Defined in [primitive/Event.ts:161](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L161)*

*__description__*: The [EventId](_primitive_event_.eventid.md), identifying the raw event

**Returns:** [EventId](_primitive_event_.eventid.md)

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L148)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="meta"></a>

##  meta

**get meta**(): `EventMetadataV5`

*Defined in [primitive/Event.ts:168](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L168)*

*__description__*: The [EventMetadata](_metadata_v0_events_.eventmetadata.md) with the documentation

**Returns:** `EventMetadataV5`

___
<a id="method"></a>

##  method

**get method**(): `string`

*Defined in [primitive/Event.ts:175](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L175)*

*__description__*: The method string identifying the event

**Returns:** `string`

___
<a id="section"></a>

##  section

**get section**(): `string`

*Defined in [primitive/Event.ts:182](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L182)*

*__description__*: The section string identifying the event

**Returns:** `string`

___
<a id="typedef"></a>

##  typeDef

**get typeDef**(): `Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)>

*Defined in [primitive/Event.ts:189](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L189)*

*__description__*: The [TypeDef](../modules/_codec_createtype_.md#typedef) for the event

**Returns:** `Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)>

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L207)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L214)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L221)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L235)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L248)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:256](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L256)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeevent"></a>

## `<Static>` decodeEvent

▸ **decodeEvent**(value?: *`Uint8Array`*): `object` \| `object`

*Defined in [primitive/Event.ts:107](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L107)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `Uint8Array` |  new Uint8Array() |

**Returns:** `object` \| `object`

___
<a id="injectmetadata"></a>

## `<Static>` injectMetadata

▸ **injectMetadata**(metadata: *[Metadata](_metadata_metadata_.metadata.md)*): `void`

*Defined in [primitive/Event.ts:130](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/primitive/Event.ts#L130)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| metadata | [Metadata](_metadata_metadata_.metadata.md) |

**Returns:** `void`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

