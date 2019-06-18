> # Class: Alive <**S, T, V, E**>

## Type parameters

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

■` T`: *object*

■` V`: *object*

■` E`: *object*

## Hierarchy

  * [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md)

  * **Alive**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_contractinfo_.alive.md#constructor)

#### Accessors

* [Type](_type_contractinfo_.alive.md#type)
* [codeHash](_type_contractinfo_.alive.md#codehash)
* [deductBlock](_type_contractinfo_.alive.md#deductblock)
* [encodedLength](_type_contractinfo_.alive.md#encodedlength)
* [isEmpty](_type_contractinfo_.alive.md#isempty)
* [lastWrite](_type_contractinfo_.alive.md#lastwrite)
* [rentAllowance](_type_contractinfo_.alive.md#rentallowance)
* [storageSize](_type_contractinfo_.alive.md#storagesize)
* [trieId](_type_contractinfo_.alive.md#trieid)

#### Methods

* [eq](_type_contractinfo_.alive.md#eq)
* [get](_type_contractinfo_.alive.md#get)
* [getAtIndex](_type_contractinfo_.alive.md#getatindex)
* [toArray](_type_contractinfo_.alive.md#toarray)
* [toHex](_type_contractinfo_.alive.md#tohex)
* [toJSON](_type_contractinfo_.alive.md#tojson)
* [toRawType](_type_contractinfo_.alive.md#torawtype)
* [toString](_type_contractinfo_.alive.md#tostring)
* [toU8a](_type_contractinfo_.alive.md#tou8a)
* [with](_type_contractinfo_.alive.md#static-with)

## Constructors

###  constructor

\+ **new Alive**(`value?`: any): *[Alive](_type_contractinfo_.alive.md)*

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[constructor](_type_contractinfo_.alivecontractinfo.md#constructor)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/ContractInfo.ts:20](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Alive](_type_contractinfo_.alive.md)*

___

## Accessors

###  Type

● **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](url)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  codeHash

● **get codeHash**(): *[CodeHash](_type_codehash_.codehash.md)*

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[codeHash](_type_contractinfo_.alivecontractinfo.md#codehash)*

*Defined in [type/ContractInfo.ts:32](url)*

**Returns:** *[CodeHash](_type_codehash_.codehash.md)*

___

###  deductBlock

● **get deductBlock**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[deductBlock](_type_contractinfo_.alivecontractinfo.md#deductblock)*

*Defined in [type/ContractInfo.ts:36](url)*

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

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

###  lastWrite

● **get lastWrite**(): *[Option](_codec_option_.option.md)‹*[BlockNumber](_type_blocknumber_.blocknumber.md)*›*

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[lastWrite](_type_contractinfo_.alivecontractinfo.md#lastwrite)*

*Defined in [type/ContractInfo.ts:40](url)*

**Returns:** *[Option](_codec_option_.option.md)‹*[BlockNumber](_type_blocknumber_.blocknumber.md)*›*

___

###  rentAllowance

● **get rentAllowance**(): *[Balance](_type_balance_.balance.md)*

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[rentAllowance](_type_contractinfo_.alivecontractinfo.md#rentallowance)*

*Defined in [type/ContractInfo.ts:44](url)*

**Returns:** *[Balance](_type_balance_.balance.md)*

___

###  storageSize

● **get storageSize**(): *[U32](_primitive_u32_.u32.md)*

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[storageSize](_type_contractinfo_.alivecontractinfo.md#storagesize)*

*Defined in [type/ContractInfo.ts:48](url)*

**Returns:** *[U32](_primitive_u32_.u32.md)*

___

###  trieId

● **get trieId**(): *[TrieId](_type_contractinfo_.trieid.md)*

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[trieId](_type_contractinfo_.alivecontractinfo.md#trieid)*

*Defined in [type/ContractInfo.ts:52](url)*

**Returns:** *[TrieId](_type_contractinfo_.trieid.md)*

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