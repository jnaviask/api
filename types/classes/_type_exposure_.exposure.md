> # Class: Exposure <**S, T, V, E**>

**`name`** Exposure

**`description`** 
A snapshot of the stake backing a single validator in the system

## Type parameters

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

■` T`: *object*

■` V`: *object*

■` E`: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Exposure**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_exposure_.exposure.md#constructor)

#### Accessors

* [Type](_type_exposure_.exposure.md#type)
* [encodedLength](_type_exposure_.exposure.md#encodedlength)
* [isEmpty](_type_exposure_.exposure.md#isempty)
* [others](_type_exposure_.exposure.md#others)
* [own](_type_exposure_.exposure.md#own)
* [total](_type_exposure_.exposure.md#total)

#### Methods

* [eq](_type_exposure_.exposure.md#eq)
* [get](_type_exposure_.exposure.md#get)
* [getAtIndex](_type_exposure_.exposure.md#getatindex)
* [toArray](_type_exposure_.exposure.md#toarray)
* [toHex](_type_exposure_.exposure.md#tohex)
* [toJSON](_type_exposure_.exposure.md#tojson)
* [toRawType](_type_exposure_.exposure.md#torawtype)
* [toString](_type_exposure_.exposure.md#tostring)
* [toU8a](_type_exposure_.exposure.md#tou8a)
* [with](_type_exposure_.exposure.md#static-with)

## Constructors

###  constructor

\+ **new Exposure**(`value?`: any): *[Exposure](_type_exposure_.exposure.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/Exposure.ts:16](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Exposure](_type_exposure_.exposure.md)*

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

###  others

● **get others**(): *[Vector](_codec_vector_.vector.md)‹*[IndividualExposure](_type_individualexposure_.individualexposure.md)*›*

*Defined in [type/Exposure.ts:42](url)*

**`description`** The portions of nominators stashes that are exposed

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[IndividualExposure](_type_individualexposure_.individualexposure.md)*›*

___

###  own

● **get own**(): *[Balance](_type_balance_.balance.md)*

*Defined in [type/Exposure.ts:28](url)*

**`description`** The validator's own stash that is exposed

**Returns:** *[Balance](_type_balance_.balance.md)*

___

###  total

● **get total**(): *[Balance](_type_balance_.balance.md)*

*Defined in [type/Exposure.ts:35](url)*

**`description`** The total balance backing this validator

**Returns:** *[Balance](_type_balance_.balance.md)*

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

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](url)*

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