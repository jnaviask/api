> # Class: ExtrinsicEra

**`name`** ExtrinsicEra

**`description`** 
The era for an extrinsic, indicating either a mortal or immortal extrinsic

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **ExtrinsicEra**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)

### Index

#### Constructors

* [constructor](_type_extrinsicera_.extrinsicera.md#constructor)

#### Accessors

* [asImmortalEra](_type_extrinsicera_.extrinsicera.md#asimmortalera)
* [asMortalEra](_type_extrinsicera_.extrinsicera.md#asmortalera)
* [encodedLength](_type_extrinsicera_.extrinsicera.md#encodedlength)
* [index](_type_extrinsicera_.extrinsicera.md#index)
* [isEmpty](_type_extrinsicera_.extrinsicera.md#isempty)
* [isImmortalEra](_type_extrinsicera_.extrinsicera.md#isimmortalera)
* [isMortalEra](_type_extrinsicera_.extrinsicera.md#ismortalera)
* [isNone](_type_extrinsicera_.extrinsicera.md#isnone)
* [isNull](_type_extrinsicera_.extrinsicera.md#isnull)
* [type](_type_extrinsicera_.extrinsicera.md#type)
* [value](_type_extrinsicera_.extrinsicera.md#value)

#### Methods

* [eq](_type_extrinsicera_.extrinsicera.md#eq)
* [toHex](_type_extrinsicera_.extrinsicera.md#tohex)
* [toJSON](_type_extrinsicera_.extrinsicera.md#tojson)
* [toNumber](_type_extrinsicera_.extrinsicera.md#tonumber)
* [toRawType](_type_extrinsicera_.extrinsicera.md#torawtype)
* [toString](_type_extrinsicera_.extrinsicera.md#tostring)
* [toU8a](_type_extrinsicera_.extrinsicera.md#tou8a)
* [with](_type_extrinsicera_.extrinsicera.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicEra**(`value?`: any): *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [type/ExtrinsicEra.ts:29](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/type/ExtrinsicEra.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

## Accessors

###  asImmortalEra

• **get asImmortalEra**(): *[ImmortalEra](_type_extrinsicera_.immortalera.md)*

*Defined in [type/ExtrinsicEra.ts:67](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/type/ExtrinsicEra.ts#L67)*

**`description`** Returns the item as a [ImmortalEra](_type_extrinsicera_.immortalera.md)

**Returns:** *[ImmortalEra](_type_extrinsicera_.immortalera.md)*

___

###  asMortalEra

• **get asMortalEra**(): *[MortalEra](_type_extrinsicera_.mortalera.md)*

*Defined in [type/ExtrinsicEra.ts:76](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/type/ExtrinsicEra.ts#L76)*

**`description`** Returns the item as a [MortalEra](_type_extrinsicera_.mortalera.md)

**Returns:** *[MortalEra](_type_extrinsicera_.mortalera.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [type/ExtrinsicEra.ts:56](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/type/ExtrinsicEra.ts#L56)*

**`description`** Overide the encoded length method

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L144)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isImmortalEra

• **get isImmortalEra**(): *boolean*

*Defined in [type/ExtrinsicEra.ts:85](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/type/ExtrinsicEra.ts#L85)*

**`description`** `true` if Immortal

**Returns:** *boolean*

___

###  isMortalEra

• **get isMortalEra**(): *boolean*

*Defined in [type/ExtrinsicEra.ts:92](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/type/ExtrinsicEra.ts#L92)*

**`description`** `true` if Mortal

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L158)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L165)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L172)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L179)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L186)*

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

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L201)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L208)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L217)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L224)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:239](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L239)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [type/ExtrinsicEra.ts:100](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/type/ExtrinsicEra.ts#L100)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | `Array<string>`): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/f5f5830/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| `Array<string>` |

**Returns:** *`EnumConstructor<Enum>`*