> # Class: NewAccountOutcome

**`name`** NewAccountOutcome

**`description`** 
Enum to track the outcome for creation of an [AccountId](_primitive_accountid_.accountid.md)

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **NewAccountOutcome**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_newaccountoutcome_.newaccountoutcome.md#constructor)

#### Accessors

* [encodedLength](_type_newaccountoutcome_.newaccountoutcome.md#encodedlength)
* [index](_type_newaccountoutcome_.newaccountoutcome.md#index)
* [isEmpty](_type_newaccountoutcome_.newaccountoutcome.md#isempty)
* [isNone](_type_newaccountoutcome_.newaccountoutcome.md#isnone)
* [isNull](_type_newaccountoutcome_.newaccountoutcome.md#isnull)
* [type](_type_newaccountoutcome_.newaccountoutcome.md#type)
* [value](_type_newaccountoutcome_.newaccountoutcome.md#value)

#### Methods

* [eq](_type_newaccountoutcome_.newaccountoutcome.md#eq)
* [toHex](_type_newaccountoutcome_.newaccountoutcome.md#tohex)
* [toJSON](_type_newaccountoutcome_.newaccountoutcome.md#tojson)
* [toNumber](_type_newaccountoutcome_.newaccountoutcome.md#tonumber)
* [toRawType](_type_newaccountoutcome_.newaccountoutcome.md#torawtype)
* [toString](_type_newaccountoutcome_.newaccountoutcome.md#tostring)
* [toU8a](_type_newaccountoutcome_.newaccountoutcome.md#tou8a)
* [with](_type_newaccountoutcome_.newaccountoutcome.md#static-with)

## Constructors

###  constructor

\+ **new NewAccountOutcome**(`index?`: *[U8a](_codec_u8a_.u8a.md) | `Uint8Array` | number*): *[NewAccountOutcome](_type_newaccountoutcome_.newaccountoutcome.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [type/NewAccountOutcome.ts:13](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/type/NewAccountOutcome.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`index?` | [U8a](_codec_u8a_.u8a.md) \| `Uint8Array` \| number |

**Returns:** *[NewAccountOutcome](_type_newaccountoutcome_.newaccountoutcome.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L137)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L144)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L158)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L165)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L172)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L179)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: *any*): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L201)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L208)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L217)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L224)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:239](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L239)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: *undefined | false | true*): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:249](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L249)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: *`TypesDef` | `Array<string>`*): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| `Array<string>` |

**Returns:** *`EnumConstructor<Enum>`*