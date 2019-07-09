> # Class: EventRecord_0_76 <**S, T, V, E**>

**`name`** EventRecord_0_76

**`description`** 
A record for an [Event](_primitive_event_.event.md) (as specified by [Metadata](_metadata_metadata_.metadata.md)) with the specific [Phase](_primitive_eventrecord_.phase.md) of
application.

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **EventRecord_0_76**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_primitive_eventrecord_.eventrecord_0_76.md#constructor)

#### Accessors

* [Type](_primitive_eventrecord_.eventrecord_0_76.md#type)
* [encodedLength](_primitive_eventrecord_.eventrecord_0_76.md#encodedlength)
* [event](_primitive_eventrecord_.eventrecord_0_76.md#event)
* [isEmpty](_primitive_eventrecord_.eventrecord_0_76.md#isempty)
* [phase](_primitive_eventrecord_.eventrecord_0_76.md#phase)
* [topics](_primitive_eventrecord_.eventrecord_0_76.md#topics)

#### Methods

* [eq](_primitive_eventrecord_.eventrecord_0_76.md#eq)
* [get](_primitive_eventrecord_.eventrecord_0_76.md#get)
* [getAtIndex](_primitive_eventrecord_.eventrecord_0_76.md#getatindex)
* [toArray](_primitive_eventrecord_.eventrecord_0_76.md#toarray)
* [toHex](_primitive_eventrecord_.eventrecord_0_76.md#tohex)
* [toJSON](_primitive_eventrecord_.eventrecord_0_76.md#tojson)
* [toRawType](_primitive_eventrecord_.eventrecord_0_76.md#torawtype)
* [toString](_primitive_eventrecord_.eventrecord_0_76.md#tostring)
* [toU8a](_primitive_eventrecord_.eventrecord_0_76.md#tou8a)
* [with](_primitive_eventrecord_.eventrecord_0_76.md#static-with)

## Constructors

###  constructor

\+ **new EventRecord_0_76**(`value`: any): *[EventRecord_0_76](_primitive_eventrecord_.eventrecord_0_76.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/EventRecord.ts:84](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/primitive/EventRecord.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[EventRecord_0_76](_primitive_eventrecord_.eventrecord_0_76.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  event

• **get event**(): *[Event](_primitive_event_.event.md)*

*Defined in [primitive/EventRecord.ts:95](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/primitive/EventRecord.ts#L95)*

**`description`** The [Event](_primitive_event_.event.md) this record refers to

**Returns:** *[Event](_primitive_event_.event.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  phase

• **get phase**(): *[Phase](_primitive_eventrecord_.phase.md)*

*Defined in [primitive/EventRecord.ts:102](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/primitive/EventRecord.ts#L102)*

**`description`** The [Phase](_primitive_eventrecord_.phase.md) where the event was generated

**Returns:** *[Phase](_primitive_eventrecord_.phase.md)*

___

###  topics

• **get topics**(): *[Vector](_codec_vector_.vector.md)‹*[Hash](_primitive_hash_.hash.md)*›*

*Defined in [primitive/EventRecord.ts:109](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/primitive/EventRecord.ts#L109)*

**`description`** The [Hash](_primitive_hash_.hash.md) topics for this event (empty, compat)

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[Hash](_primitive_hash_.hash.md)*›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L185)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L193)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L200)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *`Array<Codec>`*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L207)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L237)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L250)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L258)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/9abbaab/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*