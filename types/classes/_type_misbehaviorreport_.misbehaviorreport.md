> # Class: MisbehaviorReport <**S, T, V, E**>

**`name`** MisbehaviorReport

**`description`** 
A Misbehaviour report of [[MisbehavioirKind]] against a specific [AuthorityId](_type_authorityid_.authorityid.md)

## Type parameters

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

■` T`: *object*

■` V`: *object*

■` E`: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **MisbehaviorReport**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_misbehaviorreport_.misbehaviorreport.md#constructor)

#### Accessors

* [Type](_type_misbehaviorreport_.misbehaviorreport.md#type)
* [encodedLength](_type_misbehaviorreport_.misbehaviorreport.md#encodedlength)
* [isEmpty](_type_misbehaviorreport_.misbehaviorreport.md#isempty)
* [misbehavior](_type_misbehaviorreport_.misbehaviorreport.md#misbehavior)
* [parentHash](_type_misbehaviorreport_.misbehaviorreport.md#parenthash)
* [parentNumber](_type_misbehaviorreport_.misbehaviorreport.md#parentnumber)
* [target](_type_misbehaviorreport_.misbehaviorreport.md#target)

#### Methods

* [eq](_type_misbehaviorreport_.misbehaviorreport.md#eq)
* [get](_type_misbehaviorreport_.misbehaviorreport.md#get)
* [getAtIndex](_type_misbehaviorreport_.misbehaviorreport.md#getatindex)
* [toArray](_type_misbehaviorreport_.misbehaviorreport.md#toarray)
* [toHex](_type_misbehaviorreport_.misbehaviorreport.md#tohex)
* [toJSON](_type_misbehaviorreport_.misbehaviorreport.md#tojson)
* [toRawType](_type_misbehaviorreport_.misbehaviorreport.md#torawtype)
* [toString](_type_misbehaviorreport_.misbehaviorreport.md#tostring)
* [toU8a](_type_misbehaviorreport_.misbehaviorreport.md#tou8a)
* [with](_type_misbehaviorreport_.misbehaviorreport.md#static-with)

## Constructors

###  constructor

\+ **new MisbehaviorReport**(`value?`: `MisbehaviorReportValue` | `Uint8Array`): *[MisbehaviorReport](_type_misbehaviorreport_.misbehaviorreport.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/MisbehaviorReport.ts:210](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `MisbehaviorReportValue` \| `Uint8Array` |

**Returns:** *[MisbehaviorReport](_type_misbehaviorreport_.misbehaviorreport.md)*

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

###  misbehavior

● **get misbehavior**(): *[MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)*

*Defined in [type/MisbehaviorReport.ts:223](url)*

**`description`** The [MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)

**Returns:** *[MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)*

___

###  parentHash

● **get parentHash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [type/MisbehaviorReport.ts:230](url)*

**`description`** The [Hash](_primitive_hash_.hash.md) of the parent block

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  parentNumber

● **get parentNumber**(): *[BlockNumber](_type_blocknumber_.blocknumber.md)*

*Defined in [type/MisbehaviorReport.ts:237](url)*

**`description`** The [BlockNumber](_type_blocknumber_.blocknumber.md) of the parent

**Returns:** *[BlockNumber](_type_blocknumber_.blocknumber.md)*

___

###  target

● **get target**(): *[AuthorityId](_type_authorityid_.authorityid.md)*

*Defined in [type/MisbehaviorReport.ts:244](url)*

**`description`** The [authorityId](_type_bft_.bftauthoritysignature.md#authorityid) the report applies to

**Returns:** *[AuthorityId](_type_authorityid_.authorityid.md)*

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