> # Class: Schedule <**S, T, V, E**>

**`name`** Schedule

**`description`** 
Definition of the cost schedule and other parameterizations for wasm vm

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Schedule**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_schedule_.schedule.md#constructor)

#### Accessors

* [Type](_type_schedule_.schedule.md#type)
* [enablePrintln](_type_schedule_.schedule.md#enableprintln)
* [encodedLength](_type_schedule_.schedule.md#encodedlength)
* [eventBaseCost](_type_schedule_.schedule.md#eventbasecost)
* [eventDataPerByteCost](_type_schedule_.schedule.md#eventdataperbytecost)
* [eventPerTopicCost](_type_schedule_.schedule.md#eventpertopiccost)
* [growMemCost](_type_schedule_.schedule.md#growmemcost)
* [isEmpty](_type_schedule_.schedule.md#isempty)
* [maxEventTopics](_type_schedule_.schedule.md#maxeventtopics)
* [maxMemoryPages](_type_schedule_.schedule.md#maxmemorypages)
* [maxStackHeight](_type_schedule_.schedule.md#maxstackheight)
* [maxSubjectLen](_type_schedule_.schedule.md#maxsubjectlen)
* [putCodePerByteCost](_type_schedule_.schedule.md#putcodeperbytecost)
* [regularOpCost](_type_schedule_.schedule.md#regularopcost)
* [returnDataPerByteCost](_type_schedule_.schedule.md#returndataperbytecost)
* [sandboxDataReadCost](_type_schedule_.schedule.md#sandboxdatareadcost)
* [sandboxDataWriteCost](_type_schedule_.schedule.md#sandboxdatawritecost)
* [version](_type_schedule_.schedule.md#version)

#### Methods

* [eq](_type_schedule_.schedule.md#eq)
* [get](_type_schedule_.schedule.md#get)
* [getAtIndex](_type_schedule_.schedule.md#getatindex)
* [toArray](_type_schedule_.schedule.md#toarray)
* [toHex](_type_schedule_.schedule.md#tohex)
* [toJSON](_type_schedule_.schedule.md#tojson)
* [toRawType](_type_schedule_.schedule.md#torawtype)
* [toString](_type_schedule_.schedule.md#tostring)
* [toU8a](_type_schedule_.schedule.md#tou8a)
* [with](_type_schedule_.schedule.md#static-with)

## Constructors

###  constructor

\+ **new Schedule**(`value?`: any): *[Schedule](_type_schedule_.schedule.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/Schedule.ts:15](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Schedule](_type_schedule_.schedule.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  enablePrintln

• **get enablePrintln**(): *[Bool](_primitive_bool_.bool.md)*

*Defined in [type/Schedule.ts:39](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L39)*

**`description`** Whether the `ext_println` function is allowed to be used contracts. MUST only be enabled for `dev` chains, NOT for production chains

**Returns:** *[Bool](_primitive_bool_.bool.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  eventBaseCost

• **get eventBaseCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:46](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L46)*

**`description`** Gas cost to deposit an event; the base.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  eventDataPerByteCost

• **get eventDataPerByteCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:53](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L53)*

**`description`** Gas cost to deposit an event; the per-byte portion.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  eventPerTopicCost

• **get eventPerTopicCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:60](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L60)*

**`description`** Gas cost to deposit an event; the cost per topic.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  growMemCost

• **get growMemCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:67](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L67)*

**`description`** Gas cost of a growing memory by single page.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  maxEventTopics

• **get maxEventTopics**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [type/Schedule.ts:74](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L74)*

**`description`** The maximum number of topics supported by an event.

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  maxMemoryPages

• **get maxMemoryPages**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [type/Schedule.ts:81](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L81)*

**`description`** What is the maximal memory pages amount is allowed to have for a contract.

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  maxStackHeight

• **get maxStackHeight**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [type/Schedule.ts:88](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L88)*

**`description`** How tall the stack is allowed to grow?

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  maxSubjectLen

• **get maxSubjectLen**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [type/Schedule.ts:95](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L95)*

**`description`** The maximum length of a subject used for PRNG generation.

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  putCodePerByteCost

• **get putCodePerByteCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:102](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L102)*

**`description`** Cost of putting a byte of code into the storage.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  regularOpCost

• **get regularOpCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:109](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L109)*

**`description`** Gas cost of a regular operation.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  returnDataPerByteCost

• **get returnDataPerByteCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:116](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L116)*

**`description`** Gas cost per one byte returned.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  sandboxDataReadCost

• **get sandboxDataReadCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:123](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L123)*

**`description`** Gas cost per one byte read from the sandbox memory.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  sandboxDataWriteCost

• **get sandboxDataWriteCost**(): *[Gas](_type_gas_.gas.md)*

*Defined in [type/Schedule.ts:130](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L130)*

**`description`** Gas cost per one byte written to the sandbox memory.

**Returns:** *[Gas](_type_gas_.gas.md)*

___

###  version

• **get version**(): *[U32](_primitive_u32_.u32.md)*

*Defined in [type/Schedule.ts:137](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/type/Schedule.ts#L137)*

**`description`** Version of the schedule.

**Returns:** *[U32](_primitive_u32_.u32.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L200)*

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

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L207)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L237)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L250)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L258)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*