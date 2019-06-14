

*__name__*: Enum

*__description__*: This implements an enum, that based on the value wraps a different type. It is effectively an extension to enum where the value type is determined by the actual index.

# Hierarchy

 [Base](_codec_base_.base.md)<[Codec](../interfaces/_types_.codec.md)>

**↳ Enum**

↳  [StorageFunctionModifier](_metadata_v0_storage_.storagefunctionmodifier.md)

↳  [StorageFunctionType](_metadata_v0_storage_.storagefunctiontype.md)

↳  [StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)

↳  [StorageFunctionType](_metadata_v3_storage_.storagefunctiontype.md)

↳  [StorageHasher](_primitive_storagehasher_.storagehasher.md)

↳  [StorageFunctionType](_metadata_v4_storage_.storagefunctiontype.md)

↳  [StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)

↳  [Phase](_primitive_eventrecord_.phase.md)

↳  [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

↳  [DigestItem](_rpc_digest_.digestitem.md)

↳  [ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)

↳  [ValidityAttestation](_type_attestedcandidate_.validityattestation.md)

↳  [Conviction](_type_conviction_.conviction.md)

↳  [ContractInfo](_type_contractinfo_.contractinfo.md)

↳  [MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)

↳  [NewAccountOutcome](_type_newaccountoutcome_.newaccountoutcome.md)

↳  [VoteThreshold](_type_votethreshold_.votethreshold.md)

↳  [RewardDestination](_type_rewarddestination_.rewarddestination.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Enum**(def: *`TypesDef` \| `Array`<`string`>*, value?: *`any`*, index?: *`number` \| [Enum](_codec_enumtype_.enum.md)*): [Enum](_codec_enumtype_.enum.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:36](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `TypesDef` \| `Array`<`string`> |
| `Optional` value | `any` |
| `Optional` index | `number` \| [Enum](_codec_enumtype_.enum.md) |

**Returns:** [Enum](_codec_enumtype_.enum.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L186)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L201)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L217)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L224)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/EnumType.ts:239](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L239)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/EnumType.ts:249](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L249)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TypesDef` \| `Array`<`string`>*): `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/6d5f297/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TypesDef` \| `Array`<`string`> |

**Returns:** `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

___

