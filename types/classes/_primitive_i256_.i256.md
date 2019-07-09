> # Class: I256

**`name`** I256

**`description`** 
A 256-bit signed integer

## Hierarchy

  * [Int](_codec_int_.int.md)

  * **I256**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_primitive_i256_.i256.md#constructor)

#### Methods

* [toHex](_primitive_i256_.i256.md#tohex)
* [toRawType](_primitive_i256_.i256.md#torawtype)
* [toU8a](_primitive_i256_.i256.md#tou8a)

## Constructors

###  constructor

\+ **new I256**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[I256](_primitive_i256_.i256.md)*

*Overrides [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [primitive/I256.ts:14](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/primitive/I256.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[I256](_primitive_i256_.i256.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Int.ts#L36)*

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

*Defined in [codec/Int.ts:47](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Int.ts#L47)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [codec/Int.ts:55](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Int.ts#L55)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*