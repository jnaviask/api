> # Class: ParaIdOf

**`name`** ParaIdOf

**`description`** 
Identifier for a deployed parachain implemented as a [U32](_primitive_u32_.u32.md)

## Hierarchy

  * [ParaId](_type_paraid_.paraid.md)

  * **ParaIdOf**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_paraid_.paraidof.md#constructor)

#### Methods

* [toHex](_type_paraid_.paraidof.md#tohex)
* [toRawType](_type_paraid_.paraidof.md#torawtype)
* [toU8a](_type_paraid_.paraidof.md#tou8a)

## Constructors

###  constructor

\+ **new ParaIdOf**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[ParaIdOf](_type_paraid_.paraidof.md)*

*Inherited from [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[ParaIdOf](_type_paraid_.paraidof.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/UInt.ts#L36)*

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

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/UInt.ts#L48)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:56](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/UInt.ts#L56)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*