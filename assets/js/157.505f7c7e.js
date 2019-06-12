(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{189:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"polkadot-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-types","aria-hidden":"true"}},[t._v("#")]),t._v(" @polkadot/types")]),t._v(" "),s("p",[t._v("Implementation of the types and their (de-)serialisation via SCALE codec."),s("br"),t._v("\nOn the Rust side, the codec types and primitive types are implemented via the "),s("a",{attrs:{href:"https://github.com/paritytech/parity-codec",target:"_blank",rel:"noopener noreferrer"}},[t._v("parity-codec"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"codec-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codec-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Codec types")]),t._v(" "),s("p",[t._v("These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types:")]),t._v(" "),s("p",[s("strong",[t._v("Types")])]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_abstractarray_.abstractarray.html"}},[t._v("AbstractArray")])],1),t._v(" "),s("p",[t._v("Manages codec arrays. It is an extension to Array")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_base_.base.html"}},[t._v("Base")])],1),t._v(" "),s("p",[t._v("A type extends the Base class, when it holds a value")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_compact_.compact.html"}},[t._v("Compact")])],1),t._v(" "),s("p",[t._v("A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_enumtype_.enum.html"}},[t._v("Enum")])],1),t._v(" "),s("p",[t._v("A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_int_.int.html"}},[t._v("Int")])],1),t._v(" "),s("p",[t._v("A generic signed integer codec")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_option_.option.html"}},[t._v("Option")])],1),t._v(" "),s("p",[t._v("An Option is an optional field. The first byte indicates that there is is value to follow")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_set_.codecset.html#set"}},[t._v("Set")])],1),t._v(" "),s("p",[t._v("An Set is an array of string values, represented an an encoded type by a bitwise representation of the values")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_struct_.struct.html"}},[t._v("Struct")])],1),t._v(" "),s("p",[t._v("A Struct defines an Object with key-value pairs - where the values are Codec values.")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_structany_.structany.html"}},[t._v("StructAny")])],1),t._v(" "),s("p",[t._v("Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_tuple_.tuple.html"}},[t._v("Tuple")])],1),t._v(" "),s("p",[t._v("A Tuple defines an anonymous fixed-length array, where each element has its own type")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_u8a_.u8a.html"}},[t._v("U8a")])],1),t._v(" "),s("p",[t._v("A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_u8afixed_.u8afixed.html"}},[t._v("U8aFixed")])],1),t._v(" "),s("p",[t._v("A U8a that manages a a sequence of bytes up to the specified bitLength")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_uint_.uint.html"}},[t._v("UInt")])],1),t._v(" "),s("p",[t._v("A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_vector_.vector.html"}},[t._v("Vector")])],1),t._v(" "),s("p",[t._v("This manages codec arrays. Internally it keeps track of the length (as decoded)")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_vectorany_.vectorany.html"}},[t._v("VectorAny")])],1),t._v(" "),s("p",[t._v("This manages codec arrays, assuming that the inputs are already of type Codec")]),t._v(" "),s("h2",{attrs:{id:"primitive-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#primitive-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Primitive types")]),t._v(" "),s("p",[t._v("These primitive types are available:")]),t._v(" "),s("p",[s("strong",[t._v("Types")])]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[t._v("AccountId")])],1),t._v(" "),s("p",[t._v("A wrapper around an AccountId/PublicKey representation")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_accountindex_.accountindex.html"}},[t._v("AccountIndex")])],1),t._v(" "),s("p",[t._v("A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_accountinfo_.accountinfo.html"}},[t._v("AccountInfo")])],1),t._v(" "),s("p",[t._v("An Account information structure for contracts")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html"}},[t._v("Address")])],1),t._v(" "),s("p",[t._v("A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_bool_.bool.html"}},[t._v("Bool")])],1),t._v(" "),s("p",[t._v("Representation for a boolean value in the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_bytes_.bytes.html"}},[t._v("Bytes")])],1),t._v(" "),s("p",[t._v("A Bytes wrapper for "),s("code",[t._v("Vec<u8>")])]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_data_.data.html"}},[t._v("Data")])],1),t._v(" "),s("p",[t._v("A raw data structure. It is an encoding of a U8a without any length encoding")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_event_.event.html"}},[t._v("Event")])],1),t._v(" "),s("p",[t._v("Wrapper for the actual data that forms part of an "),s("router-link",{attrs:{to:"/types/classes/_primitive_event_.event.html"}},[t._v("Event")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_eventrecord_.eventrecord.html"}},[t._v("EventRecord")])],1),t._v(" "),s("p",[t._v("A record for an "),s("router-link",{attrs:{to:"/types/classes/_primitive_event_.event.html"}},[t._v("Event")]),t._v(" (as specified by "),s("router-link",{attrs:{to:"/types/classes/_metadata_metadata_.metadata.html"}},[t._v("Metadata")]),t._v(") with the specific "),s("router-link",{attrs:{to:"/types/classes/_primitive_eventrecord_.phase.html"}},[t._v("Phase")]),t._v(" of application")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_h160_.h160.html"}},[t._v("H160")])],1),t._v(" "),s("p",[t._v("Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_h256_.h256.html"}},[t._v("H256")])],1),t._v(" "),s("p",[t._v("Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_h512_.h512.html"}},[t._v("H512")])],1),t._v(" "),s("p",[t._v("Hash containing 512 bits (64 bytes), typically used for signatures")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_hash_.hash.html"}},[t._v("Hash")])],1),t._v(" "),s("p",[t._v("The default hash that is used accross the system. It is just a thin wrapper around "),s("router-link",{attrs:{to:"/types/classes/_primitive_h256_.h256.html"}},[t._v("H256")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_i8_.i8.html"}},[t._v("I8")])],1),t._v(" "),s("p",[t._v("An 8-bit signed integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_i16_.i16.html"}},[t._v("I16")])],1),t._v(" "),s("p",[t._v("A 16-bit signed integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_i32_.i32.html"}},[t._v("I32")])],1),t._v(" "),s("p",[t._v("A 32-bit signed integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_i64_.i64.html"}},[t._v("I64")])],1),t._v(" "),s("p",[t._v("A 64-bit signed integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_i128_.i128.html"}},[t._v("I128")])],1),t._v(" "),s("p",[t._v("A 128-bit signed integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_i256_.i256.html"}},[t._v("I256")])],1),t._v(" "),s("p",[t._v("A 256-bit signed integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_method_.method.html"}},[t._v("Method")])],1),t._v(" "),s("p",[t._v("Extrinsic function descriptor, as defined in "),s("a",{attrs:{href:"https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("the extrinsic format for a node"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_moment_.moment.html"}},[t._v("Moment")])],1),t._v(" "),s("p",[t._v("A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust)")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_null_.null.html"}},[t._v("Null")])],1),t._v(" "),s("p",[t._v("Implements a type that does not contain anything (apart from "),s("code",[t._v("null")]),t._v(")")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_origin_.origin.html"}},[t._v("Origin")])],1),t._v(" "),s("p",[t._v("Where Origin occurs, it should be ignored as an internal-only value")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_storagedata_.storagedata.html"}},[t._v("StorageData")])],1),t._v(" "),s("p",[t._v("Data retrieved via Storage queries and data for key-value pairs")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_storagekey_.storagekey.html"}},[t._v("StorageKey")])],1),t._v(" "),s("p",[t._v("A representation of a storage key (typically hashed) in the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_text_.text.html"}},[t._v("Text")])],1),t._v(" "),s("p",[t._v("This is a string wrapper, along with the length.")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_codec_struct_.struct.html#type"}},[t._v("Type")])],1),t._v(" "),s("p",[t._v("This is a extended version of String, specifically to handle types")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_u8_.u8.html"}},[t._v("U8")])],1),t._v(" "),s("p",[t._v("An 8-bit unsigned integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_u16_.u16.html"}},[t._v("U16")])],1),t._v(" "),s("p",[t._v("A 16-bit unsigned integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_u32_.u32.html"}},[t._v("U32")])],1),t._v(" "),s("p",[t._v("A 32-bit unsigned integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_u64_.u64.html"}},[t._v("U64")])],1),t._v(" "),s("p",[t._v("A 64-bit unsigned integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_u128_.u128.html"}},[t._v("U128")])],1),t._v(" "),s("p",[t._v("A 128-bit unsigned integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_u256_.u256.html"}},[t._v("U256")])],1),t._v(" "),s("p",[t._v("A 256-bit unsigned integer")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_primitive_usize_.usize.html"}},[t._v("USize")])],1),t._v(" "),s("p",[t._v("A System default unsigned number, typically used in RPC to report non-consensus data")]),t._v(" "),s("h2",{attrs:{id:"substrate-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#substrate-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Substrate types")]),t._v(" "),s("p",[t._v("These custom types implement specific types that are found as part of the Substrate core. They're all extensions of one of the codec types:")]),t._v(" "),s("p",[s("strong",[t._v("Types")])]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_amount_.amount.html"}},[t._v("Amount")])],1),t._v(" "),s("p",[t._v("The Substrate Amount representation as a "),s("router-link",{attrs:{to:"/types/classes/_type_balance_.balance.html"}},[t._v("Balance")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_approvalflag_.approvalflag.html"}},[t._v("ApprovalFlag")])],1),t._v(" "),s("p",[t._v("Approval flag, implemented as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_u32_.u32.html"}},[t._v("U32")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_assetof_.assetof.html"}},[t._v("AssetOf")])],1),t._v(" "),s("p",[t._v("The Substrate AssetOf representation as a "),s("router-link",{attrs:{to:"/types/classes/_type_balance_.balance.html"}},[t._v("Balance")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_attestedcandidate_.attestedcandidate.html"}},[t._v("AttestedCandidate")])],1),t._v(" "),s("p",[t._v("An attested candidate")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_authorityid_.authorityid.html"}},[t._v("AuthorityId")])],1),t._v(" "),s("p",[t._v("Wrapper for a AuthorityId. Same as an normal AccountId")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_digest_.authoritieschange.html"}},[t._v("AuthoritiesChange")])],1),t._v(" "),s("p",[t._v("Log for Authories changed")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_balance_.balance.html"}},[t._v("Balance")])],1),t._v(" "),s("p",[t._v("The Substrate Balance representation as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_u128_.u128.html"}},[t._v("U128")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_balancelock_.balancelock.html"}},[t._v("BalanceLock")])],1),t._v(" "),s("p",[t._v("The Substrate BalanceLock for staking")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_balance_.balanceof.html"}},[t._v("BalanceOf")])],1),t._v(" "),s("p",[t._v("The Substrate BalanceOf representation as a "),s("router-link",{attrs:{to:"/types/classes/_type_balance_.balance.html"}},[t._v("Balance")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_misbehaviorreport_.bftatreport.html"}},[t._v("BftAtReport")])],1),t._v(" "),s("p",[t._v("A report of a/b hash-signature pairs for a specific index")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_bft_.bftauthoritysignature.html"}},[t._v("BftAuthoritySignature")])],1),t._v(" "),s("p",[t._v("Represents a Bft Hash and Signature pairing, typically used in reporting network behaviour")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_bft_.bfthashsignature.html"}},[t._v("BftHashSignature")])],1),t._v(" "),s("p",[t._v("Represents a Bft Hash and Signature pairing, typically used in reporting network behaviour")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_misbehaviorreport_.bftproposeoutofturn.html"}},[t._v("BftProposeOutOfTurn")])],1),t._v(" "),s("p",[t._v("A report for out-of-turn proposals")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_blocknumber_.blocknumber.html"}},[t._v("BlockNumber")])],1),t._v(" "),s("p",[t._v("A representation of a Substrate BlockNumber, implemented as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_u64_.u64.html"}},[t._v("U64")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_codehash_.codehash.html"}},[t._v("CodeHash")])],1),t._v(" "),s("p",[t._v("The default contract code hash that is used accross the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_conviction_.conviction.html"}},[t._v("Conviction")])],1),t._v(" "),s("p",[t._v("A value denoting the strength of conviction of a vote.")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_digest_.consensus.html"}},[t._v("Consensus")])],1),t._v(" "),s("p",[t._v("Log item indicating consensus")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_contractinfo_.contractinfo.html"}},[t._v("ContractInfo")])],1),t._v(" "),s("p",[t._v("The contract information for a given contract")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_contractstoragekey_.contractstoragekey.html"}},[t._v("ContractStorageKey")])],1),t._v(" "),s("p",[t._v("A representation of a storage key for contracts")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_exposure_.exposure.html"}},[t._v("Exposure")])],1),t._v(" "),s("p",[t._v("A snapshot of the stake backing a single validator in the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_extrinsic_.extrinsic.html"}},[t._v("Extrinsic")])],1),t._v(" "),s("p",[t._v("Representation of an Extrinsic in the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_extrinsicera_.extrinsicera.html"}},[t._v("ExtrinsicEra")])],1),t._v(" "),s("p",[t._v("The era for an extrinsic, indicating either a mortal or immortal extrinsic")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_extrinsics_.extrinsics.html"}},[t._v("Extrinsics")])],1),t._v(" "),s("p",[t._v("A "),s("router-link",{attrs:{to:"/types/classes/_codec_vector_.vector.html"}},[t._v("Vector")]),t._v(" of "),s("router-link",{attrs:{to:"/types/classes/_type_extrinsic_.extrinsic.html"}},[t._v("Extrinsic")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_extrinsicsignature_.extrinsicsignature.html"}},[t._v("ExtrinsicSignature")])],1),t._v(" "),s("p",[t._v("A container for the "),s("router-link",{attrs:{to:"/types/classes/_type_signature_.signature.html"}},[t._v("Signature")]),t._v(" associated with a specific "),s("router-link",{attrs:{to:"/types/classes/_type_extrinsic_.extrinsic.html"}},[t._v("Extrinsic")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_gas_.gas.html"}},[t._v("Gas")])],1),t._v(" "),s("p",[t._v("A gas number type for Substrate, extending "),s("router-link",{attrs:{to:"/types/classes/_primitive_u64_.u64.html"}},[t._v("U64")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_individualexposure_.individualexposure.html"}},[t._v("IndividualExposure")])],1),t._v(" "),s("p",[t._v("The Substrate IndividualExposure for staking")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_inherentofflinereport_.inherentofflinereport.html"}},[t._v("InherentOfflineReport")])],1),t._v(" "),s("p",[t._v("Describes the offline-reporting extrinsic")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_justification_.justification.html"}},[t._v("Justification")])],1),t._v(" "),s("p",[t._v("A generic justification as a stream of "),s("router-link",{attrs:{to:"/types/classes/_primitive_bytes_.bytes.html"}},[t._v("Bytes")]),t._v(", this is specific per consensus implementation")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_key_.key.html"}},[t._v("Key")])],1),t._v(" "),s("p",[t._v("The Substrate Key representation as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_bytes_.bytes.html"}},[t._v("Bytes")]),t._v(" ("),s("code",[t._v("vec<u8>")]),t._v(")")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_keyvalue_.keyvalue.html"}},[t._v("KeyValue")])],1),t._v(" "),s("p",[t._v("KeyValue structure. Since most of the keys and resultant values in Subtrate are hashed and/or encoded, keys and values are reprsented as "),s("router-link",{attrs:{to:"/types/classes/_primitive_bytes_.bytes.html"}},[t._v("Bytes")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_keyvalue_.keyvalueoption.html"}},[t._v("KeyValueOption")])],1),t._v(" "),s("p",[t._v("A key/value change. Similar to the "),s("router-link",{attrs:{to:"/types/classes/_type_keyvalue_.keyvalue.html"}},[t._v("KeyValue")]),t._v(" structure, but the value can be optional")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_lockidentifier_.lockidentifier.html"}},[t._v("LockIdentifier")])],1),t._v(" "),s("p",[t._v("The Substrate LockIdentifier for staking")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_lockperiods_.lockperiods.html"}},[t._v("LockPeriods")])],1),t._v(" "),s("p",[t._v("A number of lock periods")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_membercount_.membercount.html"}},[t._v("MemberCount")])],1),t._v(" "),s("p",[t._v("A number of council members")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_misbehaviorreport_.misbehaviorkind.html"}},[t._v("MisbehaviorKind")])],1),t._v(" "),s("p",[t._v("An [[EnumType]] containing a Bft misbehaviour")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_misbehaviorreport_.misbehaviorreport.html"}},[t._v("MisbehaviorReport")])],1),t._v(" "),s("p",[t._v("A Misbehaviour report of [[MisbehavioirKind]] against a specific "),s("router-link",{attrs:{to:"/types/classes/_type_authorityid_.authorityid.html"}},[t._v("AuthorityId")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_newaccountoutcome_.newaccountoutcome.html"}},[t._v("NewAccountOutcome")])],1),t._v(" "),s("p",[t._v("Enum to track the outcome for creation of an "),s("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[t._v("AccountId")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_storedpendingchange_.nextauthority.html"}},[t._v("NextAuthority")])],1),t._v(" "),s("p",[t._v("The next authority available as "),s("router-link",{attrs:{to:"/types/classes/_type_sessionkey_.sessionkey.html"}},[t._v("SessionKey")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_nonce_.nonce.html"}},[t._v("Nonce")])],1),t._v(" "),s("p",[t._v("The Nonce or number of transactions sent by a specific account")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_noncecompact_.noncecompact.html"}},[t._v("NonceCompact")])],1),t._v(" "),s("p",[t._v("The Compact or number of transactions sent by a specific account")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_paraid_.paraid.html"}},[t._v("ParaId")])],1),t._v(" "),s("p",[t._v("Identifier for a deployed parachain implemented as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_u32_.u32.html"}},[t._v("U32")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_perbill_.perbill.html"}},[t._v("Perbill")])],1),t._v(" "),s("p",[t._v("Parts per billion (see also "),s("router-link",{attrs:{to:"/types/classes/_type_permill_.permill.html"}},[t._v("Permill")]),t._v(")")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_permill_.permill.html"}},[t._v("Permill")])],1),t._v(" "),s("p",[t._v("Parts per million (See also "),s("router-link",{attrs:{to:"/types/classes/_type_perbill_.perbill.html"}},[t._v("Perbill")]),t._v(")")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_prefabwasmmodule_.prefabwasmmodule.html"}},[t._v("PrefabWasmModule")])],1),t._v(" "),s("p",[t._v("Struct to encode the vesting schedule of an individual account")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_propindex_.propindex.html"}},[t._v("PropIndex")])],1),t._v(" "),s("p",[t._v("An increasing number that represents a specific council proposal index in the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_proposal_.proposal.html"}},[t._v("Proposal")])],1),t._v(" "),s("p",[t._v("A proposal in the system. It just extends "),s("router-link",{attrs:{to:"/types/classes/_primitive_method_.method.html"}},[t._v("Method")]),t._v(" (Proposal = Call in Rust)")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_proposalindex_.proposalindex.html"}},[t._v("ProposalIndex")])],1),t._v(" "),s("p",[t._v("An increasing number that represents a specific council proposal index in the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_referendumindex_.referendumindex.html"}},[t._v("ReferendumIndex")])],1),t._v(" "),s("p",[t._v("An increasing number that represents a specific referendum in the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_referenduminfo_.referenduminfo.html"}},[t._v("ReferendumInfo")])],1),t._v(" "),s("p",[t._v("Info regarding an ongoing referendum")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_rewarddestination_.rewarddestination.html"}},[t._v("RewardDestination")])],1),t._v(" "),s("p",[t._v("A destination account for payment")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_schedule_.schedule.html"}},[t._v("Schedule")])],1),t._v(" "),s("p",[t._v("Definition of the cost schedule and other parameterizations for wasm vm")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_digest_.seal.html"}},[t._v("Seal")])],1),t._v(" "),s("p",[t._v("Log item indicating a sealing event")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_seedof_.seedof.html"}},[t._v("SeedOf")])],1),t._v(" "),s("p",[t._v("The Substrate SeedOf representation as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_hash_.hash.html"}},[t._v("Hash")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_sessionkey_.sessionkey.html"}},[t._v("SessionKey")])],1),t._v(" "),s("p",[t._v("Wrapper for a SessionKey. Same as an normal "),s("router-link",{attrs:{to:"/types/classes/_type_authorityid_.authorityid.html"}},[t._v("AuthorityId")]),t._v(", i.e. a wrapper around publicKey")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_setindex_.setindex.html"}},[t._v("SetIndex")])],1),t._v(" "),s("p",[t._v("Set index, implemented as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_u32_.u32.html"}},[t._v("U32")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_signature_.signature.html"}},[t._v("Signature")])],1),t._v(" "),s("p",[t._v("The default signature that is used accross the system")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_signaturepayload_.signaturepayload.html"}},[t._v("SignaturePayload")])],1),t._v(" "),s("p",[t._v("A signing payload for an "),s("router-link",{attrs:{to:"/types/classes/_type_extrinsic_.extrinsic.html"}},[t._v("Extrinsic")]),t._v(". For the final encoding, it is variable length based on the contents included")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_signaturepayload_.signaturepayloadraw.html"}},[t._v("SignaturePayloadRaw")])],1),t._v(" "),s("p",[t._v("A version of the "),s("router-link",{attrs:{to:"/types/classes/_type_signaturepayload_.signaturepayload.html"}},[t._v("SignaturePayload")]),t._v(" where it doesn't rely on "),s("router-link",{attrs:{to:"/types/classes/_primitive_method_.method.html"}},[t._v("Method")]),t._v(" with metadata, rather it treats the values as a raw byte stream")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_stakingledger_.stakingledger.html"}},[t._v("StakingLedger")])],1),t._v(" "),s("p",[t._v("The ledger of a (bonded) stash")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_storedpendingchange_.storedpendingchange.html"}},[t._v("StoredPendingChange")])],1),t._v(" "),s("p",[t._v("Stored pending change for a Grandpa events")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_treasuryproposal_.treasuryproposal.html"}},[t._v("TreasuryProposal")])],1),t._v(" "),s("p",[t._v("A Proposal made for Treasury")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_unlockchunk_.unlockchunk.html"}},[t._v("UnlockChunk")])],1),t._v(" "),s("p",[t._v("Just a Balance/BlockNumber tuple to encode when a chunk of funds will be unlocked")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_validatorprefs_.validatorprefs.html"}},[t._v("ValidatorPrefs")])],1),t._v(" "),s("p",[t._v("Validator preferences")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_vestingschedule_.vestingschedule.html"}},[t._v("VestingSchedule")])],1),t._v(" "),s("p",[t._v("Struct to encode the vesting schedule of an individual account")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_vote_.vote.html"}},[t._v("Vote")])],1),t._v(" "),s("p",[t._v("A number of lock periods, plus a vote, one way or the other")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_votes_.votes.html"}},[t._v("Votes")])],1),t._v(" "),s("p",[t._v("Info for keeping track of a council motion being voted on.")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_voteindex_.voteindex.html"}},[t._v("VoteIndex")])],1),t._v(" "),s("p",[t._v("Voting index, implemented as a "),s("router-link",{attrs:{to:"/types/classes/_primitive_u32_.u32.html"}},[t._v("U32")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_voterinfo_.voterinfo.html"}},[t._v("VoterInfo")])],1),t._v(" "),s("p",[t._v("The activity status of a voter.")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_votethreshold_.votethreshold.html"}},[t._v("VoteThreshold")])],1),t._v(" "),s("p",[t._v("Voting threshold, used inside proposals to set change the voting tally")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_type_withdrawreasons_.withdrawreasons.html"}},[t._v("WithdrawReasons")])],1),t._v(" "),s("p",[t._v("The Substrate WithdrawReasons for staking")]),t._v(" "),s("h2",{attrs:{id:"rpc-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-types","aria-hidden":"true"}},[t._v("#")]),t._v(" RPC types")]),t._v(" "),s("p",[t._v("These types are not used in the runtime, but are rather used in RPC results:")]),t._v(" "),s("p",[s("strong",[t._v("Types")])]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_block_.block.html"}},[t._v("Block")])],1),t._v(" "),s("p",[t._v("A block encoded with header and extrinsics")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_chainproperties_.chainproperties.html"}},[t._v("ChainProperties")])],1),t._v(" "),s("p",[t._v("Wraps the properties retrieved from the chain via the "),s("code",[t._v("system.properties")]),t._v(" RPC call")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_digest_.digest.html"}},[t._v("Digest")])],1),t._v(" "),s("p",[t._v("A "),s("router-link",{attrs:{to:"/types/classes/_rpc_header_.header.html"}},[t._v("Header")]),t._v(" Digest")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_digest_.digestitem.html"}},[t._v("DigestItem")])],1),t._v(" "),s("p",[t._v("A [[EnumType]] the specifies the specific item in the logs of a "),s("router-link",{attrs:{to:"/types/classes/_rpc_digest_.digest.html"}},[t._v("Digest")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_extrinsicstatus_.extrinsicstatus.html"}},[t._v("ExtrinsicStatus")])],1),t._v(" "),s("p",[t._v("An EnumType that indicates the status of the Extrinsic as been submitted")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_header_.header.html"}},[t._v("Header")])],1),t._v(" "),s("p",[t._v("A "),s("router-link",{attrs:{to:"/types/classes/_rpc_block_.block.html"}},[t._v("Block")]),t._v(" header")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_health_.health.html"}},[t._v("Health")])],1),t._v(" "),s("p",[t._v("A system health indicator, reported back over RPC")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_networkstate_.networkstate.html"}},[t._v("NetworkState")])],1),t._v(" "),s("p",[t._v("Wraps the properties retrieved from the chain via the "),s("code",[t._v("system.network_state")]),t._v(" RPC call")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_metadata_metadata_.metadata.html"}},[t._v("Metadata")])],1),t._v(" "),s("p",[t._v("The versioned runtime metadata as a decoded structure")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_peerinfo_.peerinfo.html"}},[t._v("PeerInfo")])],1),t._v(" "),s("p",[t._v("A system peer info indicator, reported back over RPC")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_pendingextrinsics_.pendingextrinsics.html"}},[t._v("PendingExtrinsics")])],1),t._v(" "),s("p",[t._v("A list of pending "),s("router-link",{attrs:{to:"/types/classes/_type_extrinsics_.extrinsics.html"}},[t._v("Extrinsics")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_runtimeversion_.runtimeversion.html"}},[t._v("RuntimeVersion")])],1),t._v(" "),s("p",[t._v("A "),s("router-link",{attrs:{to:"/types/classes/_codec_tuple_.tuple.html"}},[t._v("Tuple")]),t._v(" that conatins the "),s("router-link",{attrs:{to:"/types/classes/_rpc_runtimeversion_.apiid.html"}},[t._v("ApiId")]),t._v(" and "),s("router-link",{attrs:{to:"/types/classes/_primitive_u32_.u32.html"}},[t._v("U32")]),t._v(" version")],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_signedblock_.signedblock.html"}},[t._v("SignedBlock")])],1),t._v(" "),s("p",[t._v("A "),s("router-link",{attrs:{to:"/types/classes/_rpc_block_.block.html"}},[t._v("Block")]),t._v(" that has been signed and contains a "),s("router-link",{attrs:{to:"/types/classes/_type_justification_.justification.html"}},[t._v("Justification")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/types/classes/_rpc_storagechangeset_.storagechangeset.html"}},[t._v("StorageChangeSet")])],1),t._v(" "),s("p",[t._v("A set of storage changes. It contains the "),s("router-link",{attrs:{to:"/types/classes/_rpc_block_.block.html"}},[t._v("Block")]),t._v(" hash and a list of the actual changes")],1),t._v(" "),s("h2",{attrs:{id:"derive-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#derive-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Derive types")]),t._v(" "),s("p",[t._v("These types are are specific for the Polkadot-JS derive API, so you won't find a representation of them in the SCALE codec or the Substrate core. They are used in the "),s("a",{attrs:{href:"https://www.npmjs.com/package/@polkadot/api-derive",target:"_blank",rel:"noopener noreferrer"}},[t._v("api-derive"),s("OutboundLink")],1),t._v(" methods.")]),t._v(" "),s("p",[s("strong",[t._v("Types")])]),t._v(" "),s("p",[t._v("[[HeaderExtended]]")]),t._v(" "),s("p",[t._v("A "),s("router-link",{attrs:{to:"/types/classes/_rpc_header_.header.html"}},[t._v("Header")]),t._v(" header with an additional "),s("code",[t._v("author")]),t._v(" field that indicates the block author]")],1)])},[],!1,null,null,null);e.default=a.exports}}]);