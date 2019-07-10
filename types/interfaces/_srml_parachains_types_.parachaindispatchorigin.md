> # Interface: ParachainDispatchOrigin

## Hierarchy

  * [Enum](../classes/_codec_enumtype_.enum.md)

  * **ParachainDispatchOrigin**

## Implements

* [Codec](_types_.codec.md)

### Index

#### Constructors

* [constructor](_srml_parachains_types_.parachaindispatchorigin.md#constructor)

#### Properties

* [isParachain](_srml_parachains_types_.parachaindispatchorigin.md#isparachain)
* [isSigned](_srml_parachains_types_.parachaindispatchorigin.md#issigned)

#### Accessors

* [encodedLength](_srml_parachains_types_.parachaindispatchorigin.md#encodedlength)
* [index](_srml_parachains_types_.parachaindispatchorigin.md#index)
* [isEmpty](_srml_parachains_types_.parachaindispatchorigin.md#isempty)
* [isNone](_srml_parachains_types_.parachaindispatchorigin.md#isnone)
* [isNull](_srml_parachains_types_.parachaindispatchorigin.md#isnull)
* [type](_srml_parachains_types_.parachaindispatchorigin.md#type)
* [value](_srml_parachains_types_.parachaindispatchorigin.md#value)

#### Methods

* [eq](_srml_parachains_types_.parachaindispatchorigin.md#eq)
* [toHex](_srml_parachains_types_.parachaindispatchorigin.md#tohex)
* [toJSON](_srml_parachains_types_.parachaindispatchorigin.md#tojson)
* [toNumber](_srml_parachains_types_.parachaindispatchorigin.md#tonumber)
* [toRawType](_srml_parachains_types_.parachaindispatchorigin.md#torawtype)
* [toString](_srml_parachains_types_.parachaindispatchorigin.md#tostring)
* [toU8a](_srml_parachains_types_.parachaindispatchorigin.md#tou8a)
* [with](_srml_parachains_types_.parachaindispatchorigin.md#static-with)

## Constructors

###  constructor

\+ **new ParachainDispatchOrigin**(`def`: `TypesDef` | `Array<string>`, `value?`: any, `index?`: number | [Enum](../classes/_codec_enumtype_.enum.md)): *[ParachainDispatchOrigin](_srml_parachains_types_.parachaindispatchorigin.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[constructor](../classes/_codec_enumtype_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:36](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `TypesDef` \| `Array<string>` |
`value?` | any |
`index?` | number \| [Enum](../classes/_codec_enumtype_.enum.md) |

**Returns:** *[ParachainDispatchOrigin](_srml_parachains_types_.parachaindispatchorigin.md)*

## Properties

###  isParachain

• **isParachain**: *boolean*

*Defined in [srml/parachains/types.ts:93](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/srml/parachains/types.ts#L93)*

**`description`** 1:: Parachain

___

###  isSigned

• **isSigned**: *boolean*

*Defined in [srml/parachains/types.ts:89](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/srml/parachains/types.ts#L89)*

**`description`** 0:: Signed

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[encodedLength](../classes/_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:161](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L161)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[index](../classes/_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:168](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L168)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isEmpty](../classes/_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:175](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L175)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNone](../classes/_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:182](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L182)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[isNull](../classes/_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:189](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L189)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[type](../classes/_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:196](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L196)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[value](../classes/_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:203](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L203)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[eq](../classes/_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:210](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L210)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toHex](../classes/_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:225](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L225)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toJSON](../classes/_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:232](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L232)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toNumber](../classes/_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:241](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L241)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toRawType](../classes/_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:248](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L248)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toString](../classes/_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:263](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L263)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[toU8a](../classes/_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:273](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L273)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | `Array<string>`): *`EnumConstructor<Enum>`*

*Inherited from [Enum](../classes/_codec_enumtype_.enum.md).[with](../classes/_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| `Array<string>` |

**Returns:** *`EnumConstructor<Enum>`*