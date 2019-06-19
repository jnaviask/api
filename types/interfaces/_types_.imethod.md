> # Interface: IMethod

## Hierarchy

* [Codec](_types_.codec.md)

  * **IMethod**

  * [IExtrinsic](_types_.iextrinsic.md)

## Implemented by

* [Method](../classes/_primitive_method_.method.md)
* [Proposal](../classes/_type_proposal_.proposal.md)

### Index

#### Properties

* [args](_types_.imethod.md#args)
* [argsDef](_types_.imethod.md#argsdef)
* [callIndex](_types_.imethod.md#callindex)
* [data](_types_.imethod.md#data)
* [encodedLength](_types_.imethod.md#encodedlength)
* [hasOrigin](_types_.imethod.md#hasorigin)
* [isEmpty](_types_.imethod.md#isempty)
* [meta](_types_.imethod.md#meta)

#### Methods

* [eq](_types_.imethod.md#eq)
* [toHex](_types_.imethod.md#tohex)
* [toJSON](_types_.imethod.md#tojson)
* [toRawType](_types_.imethod.md#torawtype)
* [toString](_types_.imethod.md#tostring)
* [toU8a](_types_.imethod.md#tou8a)

## Properties

###  args

● **args**: *`Array<Codec>`*

*Defined in [types.ts:128](url)*

___

###  argsDef

● **argsDef**: *[ArgsDef](_types_.argsdef.md)*

*Defined in [types.ts:129](url)*

___

###  callIndex

● **callIndex**: *`Uint8Array`*

*Defined in [types.ts:130](url)*

___

###  data

● **data**: *`Uint8Array`*

*Defined in [types.ts:131](url)*

___

###  encodedLength

● **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:50](url)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

● **hasOrigin**: *boolean*

*Defined in [types.ts:132](url)*

___

###  isEmpty

● **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:55](url)*

**`description`** Checks if the value is an empty value

___

###  meta

● **meta**: *[FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)*

*Defined in [types.ts:133](url)*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:60](url)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:65](url)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) repersentation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:70](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:75](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:80](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:86](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___