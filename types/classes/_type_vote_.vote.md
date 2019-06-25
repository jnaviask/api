> # Class: Vote

**`name`** Vote

**`description`** 
A number of lock periods, plus a vote, one way or the other.

## Hierarchy

  * [I8](_primitive_i8_.i8.md)

  * **Vote**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_vote_.vote.md#constructor)

#### Accessors

* [isAye](_type_vote_.vote.md#isaye)
* [isNay](_type_vote_.vote.md#isnay)

#### Methods

* [toHex](_type_vote_.vote.md#tohex)
* [toRawType](_type_vote_.vote.md#torawtype)
* [toU8a](_type_vote_.vote.md#tou8a)

## Constructors

###  constructor

\+ **new Vote**(`value?`: any): *[Vote](_type_vote_.vote.md)*

*Overrides [I8](_primitive_i8_.i8.md).[constructor](_primitive_i8_.i8.md#constructor)*

*Defined in [type/Vote.ts:14](https://github.com/polkadot-js/api/blob/66d96d3/packages/types/src/type/Vote.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Vote](_type_vote_.vote.md)*

___

## Accessors

###  isAye

● **get isAye**(): *boolean*

*Defined in [type/Vote.ts:32](https://github.com/polkadot-js/api/blob/66d96d3/packages/types/src/type/Vote.ts#L32)*

**`description`** true is the wrapped value is a positive vote

**Returns:** *boolean*

___

###  isNay

● **get isNay**(): *boolean*

*Defined in [type/Vote.ts:39](https://github.com/polkadot-js/api/blob/66d96d3/packages/types/src/type/Vote.ts#L39)*

**`description`** true is the wrapped value is a negative vote

**Returns:** *boolean*

___

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/66d96d3/packages/types/src/codec/Int.ts#L36)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Int](_codec_int_.int.md).[toRawType](_codec_int_.int.md#torawtype)*

*Overrides void*

*Defined in [codec/Int.ts:47](https://github.com/polkadot-js/api/blob/66d96d3/packages/types/src/codec/Int.ts#L47)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [codec/Int.ts:55](https://github.com/polkadot-js/api/blob/66d96d3/packages/types/src/codec/Int.ts#L55)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___