
@polkadot/types
===============

Implementation of the types and their (de-)serialisation via SCALE codec.  
On the Rust side, the codec types and primitive types are implemented via the [parity-codec](https://github.com/paritytech/parity-codec).

Codec types
-----------

These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types:

**Types**

[AbstractArray](classes/_codec_abstractarray_.abstractarray.md)

Manages codec arrays. It is an extension to Array

[Base](classes/_codec_base_.base.md)

A type extends the Base class, when it holds a value

[Compact](classes/_codec_compact_.compact.md)

A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding

[Enum](classes/_codec_enumtype_.enum.md)

A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value

[Int](classes/_codec_int_.int.md)

A generic signed integer codec

[Option](classes/_codec_option_.option.md)

An Option is an optional field. The first byte indicates that there is is value to follow

[Set](classes/_codec_set_.codecset.md#set)

An Set is an array of string values, represented an an encoded type by a bitwise representation of the values

[Struct](classes/_codec_struct_.struct.md)

A Struct defines an Object with key-value pairs - where the values are Codec values.

[Tuple](classes/_codec_tuple_.tuple.md)

A Tuple defines an anonymous fixed-length array, where each element has its own type

[U8a](classes/_codec_u8a_.u8a.md)

A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it

[U8aFixed](classes/_codec_u8afixed_.u8afixed.md)

A U8a that manages a a sequence of bytes up to the specified bitLength

[UInt](classes/_codec_uint_.uint.md)

A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate

[Vector](classes/_codec_vector_.vector.md)

This manages codec arrays. Internally it keeps track of the length (as decoded)

[VectorAny](classes/_codec_vectorany_.vectorany.md)

This manages codec arrays, assuming that the inputs are already of type Codec

Primitive types
---------------

These primitive types are available:

**Types**

[AccountId](classes/_primitive_accountid_.accountid.md)

A wrapper around an AccountId/PublicKey representation

[AccountIndex](classes/_primitive_accountindex_.accountindex.md)

A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account

[AccountInfo](classes/_primitive_accountinfo_.accountinfo.md)

An Account information structure for contracts

[Address](classes/_primitive_address_.address.md)

A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix

[Bool](classes/_primitive_bool_.bool.md)

Representation for a boolean value in the system

[Bytes](classes/_primitive_bytes_.bytes.md)

A Bytes wrapper for `Vec<u8>`

[Data](classes/_primitive_data_.data.md)

A raw data structure. It is an encoding of a U8a without any length encoding

[Event](classes/_primitive_event_.event.md)

Wrapper for the actual data that forms part of an [Event](classes/_primitive_event_.event.md)

[EventRecord](classes/_primitive_eventrecord_.eventrecord.md)

A record for an [Event](classes/_primitive_event_.event.md) (as specified by [Metadata](classes/_metadata_metadata_.metadata.md)) with the specific [Phase](classes/_primitive_eventrecord_.phase.md) of application

[H160](classes/_primitive_h160_.h160.md)

Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default

[H256](classes/_primitive_h256_.h256.md)

Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default

[H512](classes/_primitive_h512_.h512.md)

Hash containing 512 bits (64 bytes), typically used for signatures

[Hash](classes/_primitive_hash_.hash.md)

The default hash that is used accross the system. It is just a thin wrapper around [H256](classes/_primitive_h256_.h256.md)

[I8](classes/_primitive_i8_.i8.md)

An 8-bit signed integer

[I16](classes/_primitive_i16_.i16.md)

A 16-bit signed integer

[I32](classes/_primitive_i32_.i32.md)

A 32-bit signed integer

[I64](classes/_primitive_i64_.i64.md)

A 64-bit signed integer

[I128](classes/_primitive_i128_.i128.md)

A 128-bit signed integer

[I256](classes/_primitive_i256_.i256.md)

A 256-bit signed integer

[Method](classes/_primitive_method_.method.md)

Extrinsic function descriptor, as defined in [the extrinsic format for a node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node)

[Moment](classes/_primitive_moment_.moment.md)

A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust)

[Null](classes/_primitive_null_.null.md)

Implements a type that does not contain anything (apart from `null`)

[Origin](classes/_primitive_origin_.origin.md)

Where Origin occurs, it should be ignored as an internal-only value

[StorageData](classes/_primitive_storagedata_.storagedata.md)

Data retrieved via Storage queries and data for key-value pairs

[StorageKey](classes/_primitive_storagekey_.storagekey.md)

A representation of a storage key (typically hashed) in the system

[Text](classes/_primitive_text_.text.md)

This is a string wrapper, along with the length.

[Type](classes/_codec_struct_.struct.md#type)

This is a extended version of String, specifically to handle types

[U8](classes/_primitive_u8_.u8.md)

An 8-bit unsigned integer

[U16](classes/_primitive_u16_.u16.md)

A 16-bit unsigned integer

[U32](classes/_primitive_u32_.u32.md)

A 32-bit unsigned integer

[U64](classes/_primitive_u64_.u64.md)

A 64-bit unsigned integer

[U128](classes/_primitive_u128_.u128.md)

A 128-bit unsigned integer

[U256](classes/_primitive_u256_.u256.md)

A 256-bit unsigned integer

[USize](classes/_primitive_usize_.usize.md)

A System default unsigned number, typically used in RPC to report non-consensus data

Substrate types
---------------

These custom types implement specific types that are found as part of the Substrate core. They're all extensions of one of the codec types:

**Types**

[Amount](classes/_type_amount_.amount.md)

The Substrate Amount representation as a [Balance](classes/_type_balance_.balance.md)

[AssetOf](classes/_type_assetof_.assetof.md)

The Substrate AssetOf representation as a [Balance](classes/_type_balance_.balance.md)

[AttestedCandidate](classes/_type_attestedcandidate_.attestedcandidate.md)

An attested candidate

[AuthorityId](classes/_type_authorityid_.authorityid.md)

Wrapper for a AuthorityId. Same as an normal AccountId

[AuthoritiesChange](classes/_rpc_digest_.authoritieschange.md)

Log for Authories changed

[Balance](classes/_type_balance_.balance.md)

The Substrate Balance representation as a [U128](classes/_primitive_u128_.u128.md)

[BalanceLock](classes/_type_balancelock_.balancelock.md)

The Substrate BalanceLock for staking

[BalanceOf](classes/_type_balance_.balanceof.md)

The Substrate BalanceOf representation as a [Balance](classes/_type_balance_.balance.md)

[BftAtReport](classes/_type_misbehaviorreport_.bftatreport.md)

A report of a/b hash-signature pairs for a specific index

[BftAuthoritySignature](classes/_type_bft_.bftauthoritysignature.md)

Represents a Bft Hash and Signature pairing, typically used in reporting network behaviour

[BftHashSignature](classes/_type_bft_.bfthashsignature.md)

Represents a Bft Hash and Signature pairing, typically used in reporting network behaviour

[BftProposeOutOfTurn](classes/_type_misbehaviorreport_.bftproposeoutofturn.md)

A report for out-of-turn proposals

[BlockNumber](classes/_type_blocknumber_.blocknumber.md)

A representation of a Substrate BlockNumber, implemented as a [U64](classes/_primitive_u64_.u64.md)

[CodeHash](classes/_type_codehash_.codehash.md)

The default contract code hash that is used accross the system

[Consensus](classes/_rpc_digest_.consensus.md)

Log item indicating consensus

[Exposure](classes/_type_exposure_.exposure.md)

A snapshot of the stake backing a single validator in the system

[Extrinsic](classes/_type_extrinsic_.extrinsic.md)

Representation of an Extrinsic in the system

[ExtrinsicEra](classes/_type_extrinsicera_.extrinsicera.md)

The era for an extrinsic, indicating either a mortal or immortal extrinsic

[Extrinsics](classes/_type_extrinsics_.extrinsics.md)

A [Vector](classes/_codec_vector_.vector.md) of [Extrinsic](classes/_type_extrinsic_.extrinsic.md)

[ExtrinsicSignature](classes/_type_extrinsicsignature_.extrinsicsignature.md)

A container for the [Signature](classes/_type_signature_.signature.md) associated with a specific [Extrinsic](classes/_type_extrinsic_.extrinsic.md)

[Gas](classes/_type_gas_.gas.md)

A gas number type for Substrate, extending [U64](classes/_primitive_u64_.u64.md)

[IndividualExposure](classes/_type_individualexposure_.individualexposure.md)

The Substrate IndividualExposure for staking

[InherentOfflineReport](classes/_type_inherentofflinereport_.inherentofflinereport.md)

Describes the offline-reporting extrinsic

[Justification](classes/_type_justification_.justification.md)

A generic justification as a stream of [Bytes](classes/_primitive_bytes_.bytes.md), this is specific per consensus implementation

[Key](classes/_type_key_.key.md)

The Substrate Key representation as a [Bytes](classes/_primitive_bytes_.bytes.md) (`vec<u8>`)

[KeyValue](classes/_type_keyvalue_.keyvalue.md)

KeyValue structure. Since most of the keys and resultant values in Subtrate are hashed and/or encoded, keys and values are reprsented as [Bytes](classes/_primitive_bytes_.bytes.md)

[KeyValueOption](classes/_type_keyvalue_.keyvalueoption.md)

A key/value change. Similar to the [KeyValue](classes/_type_keyvalue_.keyvalue.md) structure, but the value can be optional

[LockIdentifier](classes/_type_lockidentifier_.lockidentifier.md)

The Substrate LockIdentifier for staking

[LockPeriods](classes/_type_lockperiods_.lockperiods.md)

A number of lock periods

[MisbehaviorKind](classes/_type_misbehaviorreport_.misbehaviorkind.md)

An \[\[EnumType\]\] containing a Bft misbehaviour

[MisbehaviorReport](classes/_type_misbehaviorreport_.misbehaviorreport.md)

A Misbehaviour report of \[\[MisbehavioirKind\]\] against a specific [AuthorityId](classes/_type_authorityid_.authorityid.md)

[NewAccountOutcome](classes/_type_newaccountoutcome_.newaccountoutcome.md)

Enum to track the outcome for creation of an [AccountId](classes/_primitive_accountid_.accountid.md)

[NextAuthority](classes/_type_storedpendingchange_.nextauthority.md)

The next authority available as [SessionKey](classes/_type_sessionkey_.sessionkey.md)

[Nonce](classes/_type_nonce_.nonce.md)

The Nonce or number of transactions sent by a specific account

[NonceCompact](classes/_type_noncecompact_.noncecompact.md)

The Compact or number of transactions sent by a specific account

[ParaId](classes/_type_paraid_.paraid.md)

Identifier for a deployed parachain implemented as a [U32](classes/_primitive_u32_.u32.md)

[Perbill](classes/_type_perbill_.perbill.md)

Parts per billion (see also [Permill](classes/_type_permill_.permill.md))

[Permill](classes/_type_permill_.permill.md)

Parts per million (See also [Perbill](classes/_type_perbill_.perbill.md))

[PrefabWasmModule](classes/_type_prefabwasmmodule_.prefabwasmmodule.md)

Struct to encode the vesting schedule of an individual account

[PropIndex](classes/_type_propindex_.propindex.md)

An increasing number that represents a specific council proposal index in the system

[Proposal](classes/_type_proposal_.proposal.md)

A proposal in the system. It just extends [Method](classes/_primitive_method_.method.md) (Proposal = Call in Rust)

[ProposalIndex](classes/_type_proposalindex_.proposalindex.md)

An increasing number that represents a specific council proposal index in the system

[ReferendumIndex](classes/_type_referendumindex_.referendumindex.md)

An increasing number that represents a specific referendum in the system

[ReferendumInfo](classes/_type_referenduminfo_.referenduminfo.md)

Info regarding an ongoing referendum

[RewardDestination](classes/_type_rewarddestination_.rewarddestination.md)

A destination account for payment

[Schedule](classes/_type_schedule_.schedule.md)

Definition of the cost schedule and other parameterizations for wasm vm

[Seal](classes/_rpc_digest_.seal.md)

Log item indicating a sealing event

[SeedOf](classes/_type_seedof_.seedof.md)

The Substrate SeedOf representation as a [Hash](classes/_primitive_hash_.hash.md)

[SessionKey](classes/_type_sessionkey_.sessionkey.md)

Wrapper for a SessionKey. Same as an normal [AuthorityId](classes/_type_authorityid_.authorityid.md), i.e. a wrapper around publicKey

[Signature](classes/_type_signature_.signature.md)

The default signature that is used accross the system

[SignaturePayload](classes/_type_signaturepayload_.signaturepayload.md)

A signing payload for an [Extrinsic](classes/_type_extrinsic_.extrinsic.md). For the final encoding, it is variable length based on the contents included

[StakingLedger](classes/_type_stakingledger_.stakingledger.md)

The ledger of a (bonded) stash

[StoredPendingChange](classes/_type_storedpendingchange_.storedpendingchange.md)

Stored pending change for a Grandpa events

[TreasuryProposal](classes/_type_treasuryproposal_.treasuryproposal.md)

A Proposal made for Treasury

[UnlockChunk](classes/_type_unlockchunk_.unlockchunk.md)

Just a Balance/BlockNumber tuple to encode when a chunk of funds will be unlocked

[ValidatorPrefs](classes/_type_validatorprefs_.validatorprefs.md)

Validator preferences

[VestingSchedule](classes/_type_vestingschedule_.vestingschedule.md)

Struct to encode the vesting schedule of an individual account

[Vote](classes/_type_vote_.vote.md)

A number of lock periods, plus a vote, one way or the other

[VoteIndex](classes/_type_voteindex_.voteindex.md)

Voting index, implemented as a [U32](classes/_primitive_u32_.u32.md)

[VoteThreshold](classes/_type_votethreshold_.votethreshold.md)

Voting threshold, used inside proposals to set change the voting tally

[WithdrawReasons](classes/_type_withdrawreasons_.withdrawreasons.md)

The Substrate WithdrawReasons for staking

RPC types
---------

These types are not used in the runtime, but are rather used in RPC results:

**Types**

[Block](classes/_rpc_block_.block.md)

A block encoded with header and extrinsics

[ChainProperties](classes/_rpc_chainproperties_.chainproperties.md)

Wraps the properties retrieved from the chain via the `system.properties` RPC call

[Digest](classes/_rpc_digest_.digest.md)

A [Header](classes/_rpc_header_.header.md) Digest

[DigestItem](classes/_rpc_digest_.digestitem.md)

A \[\[EnumType\]\] the specifies the specific item in the logs of a [Digest](classes/_rpc_digest_.digest.md)

[ExtrinsicStatus](classes/_rpc_extrinsicstatus_.extrinsicstatus.md)

An EnumType that indicates the status of the Extrinsic as been submitted

[Header](classes/_rpc_header_.header.md)

A [Block](classes/_rpc_block_.block.md) header

[Health](classes/_rpc_health_.health.md)

A system health indicator, reported back over RPC

[Json](classes/_rpc_json_.json.md)

Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map

[NetworkState](classes/_rpc_networkstate_.networkstate.md)

Wraps the properties retrieved from the chain via the `system.network_state` RPC call

[Metadata](classes/_metadata_metadata_.metadata.md)

The versioned runtime metadata as a decoded structure

[PeerInfo](classes/_rpc_peerinfo_.peerinfo.md)

A system peer info indicator, reported back over RPC

[PendingExtrinsics](classes/_rpc_pendingextrinsics_.pendingextrinsics.md)

A list of pending [Extrinsics](classes/_type_extrinsics_.extrinsics.md)

[RuntimeVersion](classes/_rpc_runtimeversion_.runtimeversion.md)

A [Tuple](classes/_codec_tuple_.tuple.md) that conatins the [ApiId](classes/_rpc_runtimeversion_.apiid.md) and [U32](classes/_primitive_u32_.u32.md) version

[SignedBlock](classes/_rpc_signedblock_.signedblock.md)

A [Block](classes/_rpc_block_.block.md) that has been signed and contains a [Justification](classes/_type_justification_.justification.md)

[StorageChangeSet](classes/_rpc_storagechangeset_.storagechangeset.md)

A set of storage changes. It contains the [Block](classes/_rpc_block_.block.md) hash and a list of the actual changes

Derive types
------------

These types are are specific for the Polkadot-JS derive API, so you won't find a representation of them in the SCALE codec or the Substrate core. They are used in the [api-derive](https://www.npmjs.com/package/@polkadot/api-derive) methods.

**Types**

\[\[HeaderExtended\]\]

A [Header](classes/_rpc_header_.header.md) header with an additional `author` field that indicates the block author\]

