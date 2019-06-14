

*__name__*: Schedule

*__description__*: Definition of the cost schedule and other parameterizations for wasm vm

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Schedule**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Schedule**(value?: *`any`*): [Schedule](_type_schedule_.schedule.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/Schedule.ts:15](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [Schedule](_type_schedule_.schedule.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L163)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="enableprintln"></a>

##  enablePrintln

**get enablePrintln**(): [Bool](_primitive_bool_.bool.md)

*Defined in [type/Schedule.ts:39](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L39)*

*__description__*: Whether the `ext_println` function is allowed to be used contracts. MUST only be enabled for `dev` chains, NOT for production chains

**Returns:** [Bool](_primitive_bool_.bool.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L176)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="eventbasecost"></a>

##  eventBaseCost

**get eventBaseCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:46](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L46)*

*__description__*: Gas cost to deposit an event; the base.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="eventdataperbytecost"></a>

##  eventDataPerByteCost

**get eventDataPerByteCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:53](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L53)*

*__description__*: Gas cost to deposit an event; the per-byte portion.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="eventpertopiccost"></a>

##  eventPerTopicCost

**get eventPerTopicCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:60](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L60)*

*__description__*: Gas cost to deposit an event; the cost per topic.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="growmemcost"></a>

##  growMemCost

**get growMemCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:67](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L67)*

*__description__*: Gas cost of a growing memory by single page.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L148)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="maxeventtopics"></a>

##  maxEventTopics

**get maxEventTopics**(): [U32](_primitive_u32_.u32.md)

*Defined in [type/Schedule.ts:74](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L74)*

*__description__*: The maximum number of topics supported by an event.

**Returns:** [U32](_primitive_u32_.u32.md)

___
<a id="maxmemorypages"></a>

##  maxMemoryPages

**get maxMemoryPages**(): [U32](_primitive_u32_.u32.md)

*Defined in [type/Schedule.ts:81](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L81)*

*__description__*: What is the maximal memory pages amount is allowed to have for a contract.

**Returns:** [U32](_primitive_u32_.u32.md)

___
<a id="maxstackheight"></a>

##  maxStackHeight

**get maxStackHeight**(): [U32](_primitive_u32_.u32.md)

*Defined in [type/Schedule.ts:88](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L88)*

*__description__*: How tall the stack is allowed to grow

**Returns:** [U32](_primitive_u32_.u32.md)

___
<a id="maxsubjectlen"></a>

##  maxSubjectLen

**get maxSubjectLen**(): [U32](_primitive_u32_.u32.md)

*Defined in [type/Schedule.ts:95](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L95)*

*__description__*: The maximum length of a subject used for PRNG generation.

**Returns:** [U32](_primitive_u32_.u32.md)

___
<a id="putcodeperbytecost"></a>

##  putCodePerByteCost

**get putCodePerByteCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:102](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L102)*

*__description__*: Cost of putting a byte of code into the storage.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="regularopcost"></a>

##  regularOpCost

**get regularOpCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:109](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L109)*

*__description__*: Gas cost of a regular operation.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="returndataperbytecost"></a>

##  returnDataPerByteCost

**get returnDataPerByteCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:116](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L116)*

*__description__*: Gas cost per one byte returned.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="sandboxdatareadcost"></a>

##  sandboxDataReadCost

**get sandboxDataReadCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:123](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L123)*

*__description__*: Gas cost per one byte read from the sandbox memory.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="sandboxdatawritecost"></a>

##  sandboxDataWriteCost

**get sandboxDataWriteCost**(): [Gas](_type_gas_.gas.md)

*Defined in [type/Schedule.ts:130](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L130)*

*__description__*: Gas cost per one byte written to the sandbox memory.

**Returns:** [Gas](_type_gas_.gas.md)

___
<a id="version"></a>

##  version

**get version**(): [U32](_primitive_u32_.u32.md)

*Defined in [type/Schedule.ts:137](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/type/Schedule.ts#L137)*

*__description__*: Version of the schedule.

**Returns:** [U32](_primitive_u32_.u32.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L200)*

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

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L207)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L214)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L221)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L235)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L248)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:256](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L256)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/6d9699a/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

