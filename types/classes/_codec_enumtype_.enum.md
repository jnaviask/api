> # Class: Enum

**`name`** Enum

**`description`** 
This implements an enum, that based on the value wraps a different type. It is effectively
an extension to enum where the value type is determined by the actual index.

## Hierarchy

* [Base](_codec_base_.base.md)‹*[Codec](../interfaces/_types_.codec.md)*›

  * **Enum**

  * [StorageFunctionModifier](_metadata_v0_storage_.storagefunctionmodifier.md)

  * [StorageFunctionType](_metadata_v0_storage_.storagefunctiontype.md)

  * [StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)

  * [StorageFunctionType](_metadata_v3_storage_.storagefunctiontype.md)

  * [StorageHasher](_primitive_storagehasher_.storagehasher.md)

  * [StorageFunctionType](_metadata_v4_storage_.storagefunctiontype.md)

  * [StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)

  * [Phase](_primitive_eventrecord_.phase.md)

  * [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

  * [DigestItem](_rpc_digest_.digestitem.md)

  * [ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)

  * [ValidityAttestation](_type_attestedcandidate_.validityattestation.md)

  * [Bidder](_type_bidder_.bidder.md)

  * [Conviction](_type_conviction_.conviction.md)

  * [ContractInfo](_type_contractinfo_.contractinfo.md)

  * [Bidder](_type_incomingparachain_.bidder.md)

  * [MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)

  * [NewAccountOutcome](_type_newaccountoutcome_.newaccountoutcome.md)

  * [VoteThreshold](_type_votethreshold_.votethreshold.md)

  * [RewardDestination](_type_rewarddestination_.rewarddestination.md)

  * [SlotRange](_type_slotrange_.slotrange.md)

  * [ParachainDispatchOrigin](_type_upwardmessage_.parachaindispatchorigin.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_codec_enumtype_.enum.md#constructor)

#### Accessors

* [encodedLength](_codec_enumtype_.enum.md#encodedlength)
* [index](_codec_enumtype_.enum.md#index)
* [isEmpty](_codec_enumtype_.enum.md#isempty)
* [isNone](_codec_enumtype_.enum.md#isnone)
* [isNull](_codec_enumtype_.enum.md#isnull)
* [type](_codec_enumtype_.enum.md#type)
* [value](_codec_enumtype_.enum.md#value)

#### Methods

* [eq](_codec_enumtype_.enum.md#eq)
* [toHex](_codec_enumtype_.enum.md#tohex)
* [toJSON](_codec_enumtype_.enum.md#tojson)
* [toNumber](_codec_enumtype_.enum.md#tonumber)
* [toRawType](_codec_enumtype_.enum.md#torawtype)
* [toString](_codec_enumtype_.enum.md#tostring)
* [toU8a](_codec_enumtype_.enum.md#tou8a)
* [with](_codec_enumtype_.enum.md#static-with)

## Constructors

###  constructor

\+ **new Enum**(`def`: `TypesDef` | `Array<string>`, `value?`: any, `index?`: number | [Enum](_codec_enumtype_.enum.md)): *[Enum](_codec_enumtype_.enum.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:36](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `TypesDef` \| `Array<string>` |
`value?` | any |
`index?` | number \| [Enum](_codec_enumtype_.enum.md) |

**Returns:** *[Enum](_codec_enumtype_.enum.md)*

___

## Accessors

###  encodedLength

● **get encodedLength**(): *number*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L137)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

● **get index**(): *number*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L144)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

● **get isNone**(): *boolean*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L158)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

● **get isNull**(): *boolean*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L165)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

● **get type**(): *string*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L172)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

● **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L179)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L201)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L208)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L217)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L224)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/EnumType.ts:239](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L239)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/EnumType.ts:249](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L249)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | `Array<string>`): *`EnumConstructor<Enum>`*

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/b517613/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| `Array<string>` |

**Returns:** *`EnumConstructor<Enum>`*

___