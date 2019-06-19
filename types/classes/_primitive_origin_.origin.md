> # Class: Origin

**`name`** Origin

**`description`** 
Where Origin occurs, it should be ignored as an internal-only value, so it should
never actually be constructed

## Hierarchy

* [Null](_primitive_null_.null.md)

  * **Origin**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_primitive_origin_.origin.md#constructor)

#### Accessors

* [encodedLength](_primitive_origin_.origin.md#encodedlength)
* [isEmpty](_primitive_origin_.origin.md#isempty)

#### Methods

* [eq](_primitive_origin_.origin.md#eq)
* [toHex](_primitive_origin_.origin.md#tohex)
* [toJSON](_primitive_origin_.origin.md#tojson)
* [toRawType](_primitive_origin_.origin.md#torawtype)
* [toString](_primitive_origin_.origin.md#tostring)
* [toU8a](_primitive_origin_.origin.md#tou8a)

## Constructors

###  constructor

\+ **new Origin**(): *[Origin](_primitive_origin_.origin.md)*

*Defined in [primitive/Origin.ts:13](url)*

**Returns:** *[Origin](_primitive_origin_.origin.md)*

___

## Accessors

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [Null](_primitive_null_.null.md).[encodedLength](_primitive_null_.null.md#encodedlength)*

*Defined in [primitive/Null.ts:17](url)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [Null](_primitive_null_.null.md).[isEmpty](_primitive_null_.null.md#isempty)*

*Defined in [primitive/Null.ts:24](url)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[eq](_primitive_null_.null.md#eq)*

*Defined in [primitive/Null.ts:31](url)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Null](_primitive_null_.null.md).[toHex](_primitive_null_.null.md#tohex)*

*Defined in [primitive/Null.ts:38](url)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toJSON](_primitive_null_.null.md#tojson)*

*Defined in [primitive/Null.ts:45](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Null](_primitive_null_.null.md).[toRawType](_primitive_null_.null.md#torawtype)*

*Defined in [primitive/Origin.ts:23](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toString](_primitive_null_.null.md#tostring)*

*Defined in [primitive/Null.ts:59](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toU8a](_primitive_null_.null.md#tou8a)*

*Defined in [primitive/Null.ts:67](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___