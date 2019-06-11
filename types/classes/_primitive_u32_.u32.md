

*__name__*: U32

*__description__*: A 32-bit unsigned integer

# Hierarchy

↳  [UInt](_codec_uint_.uint.md)

**↳ U32**

↳  [AccountIndex](_primitive_accountindex_.accountindex.md)

↳  [MagicNumber](_metadata_magicnumber_.magicnumber.md)

↳  [EventIndex](_primitive_event_.eventindex.md)

↳  [ApplyExtrinsic](_primitive_eventrecord_.applyextrinsic.md)

↳  [USize](_primitive_usize_.usize.md)

↳  [ConsensusEngineId](_rpc_digest_.consensusengineid.md)

↳  [ParaId](_type_paraid_.paraid.md)

↳  [MemberCount](_type_membercount_.membercount.md)

↳  [Permill](_type_permill_.permill.md)

↳  [Perbill](_type_perbill_.perbill.md)

↳  [PropIndex](_type_propindex_.propindex.md)

↳  [ProposalIndex](_type_proposalindex_.proposalindex.md)

↳  [ReferendumIndex](_type_referendumindex_.referendumindex.md)

↳  [VoteIndex](_type_voteindex_.voteindex.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new U32**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [U32](_primitive_u32_.u32.md)

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/8f088c3/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** [U32](_primitive_u32_.u32.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`boolean`*): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/8f088c3/packages/types/src/codec/UInt.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` isLe | `boolean` | false |

**Returns:** `string`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides AbstractInt.toRawType*

*Defined in [codec/UInt.ts:48](https://github.com/polkadot-js/api/blob/8f088c3/packages/types/src/codec/UInt.ts#L48)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/UInt.ts:56](https://github.com/polkadot-js/api/blob/8f088c3/packages/types/src/codec/UInt.ts#L56)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

