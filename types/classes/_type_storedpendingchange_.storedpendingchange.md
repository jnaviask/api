> # Class: StoredPendingChange <**S, T, V, E**>

**`name`** StoredPendingChange

**`description`** 
Stored pending change for a Grandpa events

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **StoredPendingChange**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_storedpendingchange_.storedpendingchange.md#constructor)

#### Accessors

* [Type](_type_storedpendingchange_.storedpendingchange.md#type)
* [delay](_type_storedpendingchange_.storedpendingchange.md#delay)
* [encodedLength](_type_storedpendingchange_.storedpendingchange.md#encodedlength)
* [isEmpty](_type_storedpendingchange_.storedpendingchange.md#isempty)
* [nextAuthorities](_type_storedpendingchange_.storedpendingchange.md#nextauthorities)
* [scheduledAt](_type_storedpendingchange_.storedpendingchange.md#scheduledat)

#### Methods

* [eq](_type_storedpendingchange_.storedpendingchange.md#eq)
* [get](_type_storedpendingchange_.storedpendingchange.md#get)
* [getAtIndex](_type_storedpendingchange_.storedpendingchange.md#getatindex)
* [toArray](_type_storedpendingchange_.storedpendingchange.md#toarray)
* [toHex](_type_storedpendingchange_.storedpendingchange.md#tohex)
* [toJSON](_type_storedpendingchange_.storedpendingchange.md#tojson)
* [toRawType](_type_storedpendingchange_.storedpendingchange.md#torawtype)
* [toString](_type_storedpendingchange_.storedpendingchange.md#tostring)
* [toU8a](_type_storedpendingchange_.storedpendingchange.md#tou8a)
* [with](_type_storedpendingchange_.storedpendingchange.md#static-with)

## Constructors

###  constructor

\+ **new StoredPendingChange**(`value?`: *`Uint8Array` | [StoredPendingChangeValue](../modules/_type_storedpendingchange_.md#storedpendingchangevalue)*): *[StoredPendingChange](_type_storedpendingchange_.storedpendingchange.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/StoredPendingChange.ts:52](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/type/StoredPendingChange.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `Uint8Array` \| [StoredPendingChangeValue](../modules/_type_storedpendingchange_.md#storedpendingchangevalue) |

**Returns:** *[StoredPendingChange](_type_storedpendingchange_.storedpendingchange.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  delay

• **get delay**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Defined in [type/StoredPendingChange.ts:61](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/type/StoredPendingChange.ts#L61)*

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  nextAuthorities

• **get nextAuthorities**(): *[Vector](_codec_vector_.vector.md)‹*[NextAuthority](_type_storedpendingchange_.nextauthority.md)*›*

*Defined in [type/StoredPendingChange.ts:65](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/type/StoredPendingChange.ts#L65)*

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[NextAuthority](_type_storedpendingchange_.nextauthority.md)*›*

___

###  scheduledAt

• **get scheduledAt**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Defined in [type/StoredPendingChange.ts:69](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/type/StoredPendingChange.ts#L69)*

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

## Methods

###  eq

▸ **eq**(`other?`: *any*): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L185)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: *keyof S*): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L193)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: *number*): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L200)*

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

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L207)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L237)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L250)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: *undefined | false | true*): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L258)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: *`S`*): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*