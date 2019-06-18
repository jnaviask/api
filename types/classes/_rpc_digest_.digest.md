> # Class: Digest <**S, T, V, E**>

**`name`** Digest

**`description`** 
A [Header](_rpc_header_.header.md) Digest

## Type parameters

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

■` T`: *object*

■` V`: *object*

■` E`: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Digest**

  * [DigestOf](_rpc_digest_.digestof.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_rpc_digest_.digest.md#constructor)

#### Accessors

* [Type](_rpc_digest_.digest.md#type)
* [encodedLength](_rpc_digest_.digest.md#encodedlength)
* [isEmpty](_rpc_digest_.digest.md#isempty)
* [logs](_rpc_digest_.digest.md#logs)

#### Methods

* [eq](_rpc_digest_.digest.md#eq)
* [get](_rpc_digest_.digest.md#get)
* [getAtIndex](_rpc_digest_.digest.md#getatindex)
* [logsWith](_rpc_digest_.digest.md#logswith)
* [logsWithout](_rpc_digest_.digest.md#logswithout)
* [toArray](_rpc_digest_.digest.md#toarray)
* [toHex](_rpc_digest_.digest.md#tohex)
* [toJSON](_rpc_digest_.digest.md#tojson)
* [toRawType](_rpc_digest_.digest.md#torawtype)
* [toString](_rpc_digest_.digest.md#tostring)
* [toU8a](_rpc_digest_.digest.md#tou8a)
* [with](_rpc_digest_.digest.md#static-with)

## Constructors

###  constructor

\+ **new Digest**(`value`: any): *[Digest](_rpc_digest_.digest.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [rpc/Digest.ts:392](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[Digest](_rpc_digest_.digest.md)*

___

## Accessors

###  Type

● **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](url)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](url)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](url)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  logs

● **get logs**(): *[Vector](_codec_vector_.vector.md)‹*[DigestItem](_rpc_digest_.digestitem.md)*›*

*Defined in [rpc/Digest.ts:402](url)*

**`description`** The [DigestItem](_rpc_digest_.digestitem.md) logs

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[DigestItem](_rpc_digest_.digestitem.md)*›*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](url)*

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

*Defined in [codec/Struct.ts:193](url)*

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

*Defined in [codec/Struct.ts:200](url)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  logsWith

▸ **logsWith**(...`include`: `Array<DigestItemTypes>`): *[Vector](_codec_vector_.vector.md)‹*[DigestItem](_rpc_digest_.digestitem.md)*›*

*Defined in [rpc/Digest.ts:409](url)*

**`description`** The [DigestItem](_rpc_digest_.digestitem.md) logs, filtered, filter items included. This is useful for derive functionality where only a certain type of log is to be returned.

**Parameters:**

Name | Type |
------ | ------ |
`...include` | `Array<DigestItemTypes>` |

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[DigestItem](_rpc_digest_.digestitem.md)*›*

___

###  logsWithout

▸ **logsWithout**(...`exclude`: `Array<DigestItemTypes>`): *[Vector](_codec_vector_.vector.md)‹*[DigestItem](_rpc_digest_.digestitem.md)*›*

*Defined in [rpc/Digest.ts:416](url)*

**`description`** The [DigestItem](_rpc_digest_.digestitem.md) logs, filtered, filter items exluded. This is useful for stripping headers for eg. WASM runtime execution.

**Parameters:**

Name | Type |
------ | ------ |
`...exclude` | `Array<DigestItemTypes>` |

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[DigestItem](_rpc_digest_.digestitem.md)*›*

___

###  toArray

▸ **toArray**(): *`Array<Codec>`*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](url)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](url)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:235](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:248](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:256](url)*

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

*Defined in [codec/Struct.ts:123](url)*

**Type parameters:**

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

___