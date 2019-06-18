> # Class: BalanceOf

**`name`** BalanceOf

**`description`** 
The Substrate BalanceOf representation as a [Balance](_type_balance_.balance.md).

## Hierarchy

  * [Balance](_type_balance_.balance.md)

  * **BalanceOf**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_balance_.balanceof.md#constructor)

#### Methods

* [toHex](_type_balance_.balanceof.md#tohex)
* [toRawType](_type_balance_.balanceof.md#torawtype)
* [toU8a](_type_balance_.balanceof.md#tou8a)

## Constructors

###  constructor

\+ **new BalanceOf**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[BalanceOf](_type_balance_.balanceof.md)*

*Inherited from [U128](_primitive_u128_.u128.md).[constructor](_primitive_u128_.u128.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U128.ts:14](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[BalanceOf](_type_balance_.balanceof.md)*

___

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](url)*

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

*Inherited from [Balance](_type_balance_.balance.md).[toRawType](_type_balance_.balance.md#torawtype)*

*Overrides [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Defined in [type/Balance.ts:16](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:56](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___