> # Class: Header <**S, T, V, E**>

**`name`** Header

**`description`** 
A [Block](_rpc_block_.block.md) header

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Header**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_rpc_header_.header.md#constructor)

#### Accessors

* [Type](_rpc_header_.header.md#type)
* [blockNumber](_rpc_header_.header.md#blocknumber)
* [digest](_rpc_header_.header.md#digest)
* [encodedLength](_rpc_header_.header.md#encodedlength)
* [extrinsicsRoot](_rpc_header_.header.md#extrinsicsroot)
* [hash](_rpc_header_.header.md#hash)
* [isEmpty](_rpc_header_.header.md#isempty)
* [number](_rpc_header_.header.md#number)
* [parentHash](_rpc_header_.header.md#parenthash)
* [stateRoot](_rpc_header_.header.md#stateroot)

#### Methods

* [eq](_rpc_header_.header.md#eq)
* [get](_rpc_header_.header.md#get)
* [getAtIndex](_rpc_header_.header.md#getatindex)
* [toArray](_rpc_header_.header.md#toarray)
* [toHex](_rpc_header_.header.md#tohex)
* [toJSON](_rpc_header_.header.md#tojson)
* [toRawType](_rpc_header_.header.md#torawtype)
* [toString](_rpc_header_.header.md#tostring)
* [toU8a](_rpc_header_.header.md#tou8a)
* [with](_rpc_header_.header.md#static-with)

## Constructors

###  constructor

\+ **new Header**(`value?`: [HeaderValue](../modules/_rpc_header_.md#headervalue) | `Uint8Array` | null): *[Header](_rpc_header_.header.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [rpc/Header.ts:28](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [HeaderValue](../modules/_rpc_header_.md#headervalue) \| `Uint8Array` \| null |

**Returns:** *[Header](_rpc_header_.header.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  blockNumber

• **get blockNumber**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Defined in [rpc/Header.ts:42](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L42)*

**`description`** The wrapped [BlockNumber](_type_blocknumber_.blocknumber.md)

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

___

###  digest

• **get digest**(): *[Digest](_rpc_digest_.digest.md)*

*Defined in [rpc/Header.ts:49](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L49)*

**`description`** The wrapped [Digest](_rpc_digest_.digest.md)

**Returns:** *[Digest](_rpc_digest_.digest.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  extrinsicsRoot

• **get extrinsicsRoot**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [rpc/Header.ts:56](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L56)*

**`description`** The wrapped extrisics root as a [Hash](_primitive_hash_.hash.md)

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  hash

• **get hash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [rpc/Header.ts:63](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L63)*

**`description`** Convenience method, encodes the header and calculates the [Hash](_primitive_hash_.hash.md)

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  number

• **get number**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Defined in [rpc/Header.ts:72](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L72)*

**`description`** Alias for `blockNumber` (this is displayed in JSON)

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

___

###  parentHash

• **get parentHash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [rpc/Header.ts:79](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L79)*

**`description`** The wrapped parent as a [Hash](_primitive_hash_.hash.md)

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  stateRoot

• **get stateRoot**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [rpc/Header.ts:86](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/rpc/Header.ts#L86)*

**`description`** The wrapped state root as a [Hash](_primitive_hash_.hash.md)

**Returns:** *[Hash](_primitive_hash_.hash.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L200)*

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

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L207)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L237)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L250)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L258)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/9c48e40/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*