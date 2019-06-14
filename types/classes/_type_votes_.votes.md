

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Votes**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Votes**(value: *`any`*): [Votes](_type_votes_.votes.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/Votes.ts:11](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/type/Votes.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** [Votes](_type_votes_.votes.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L163)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="ayes"></a>

##  ayes

**get ayes**(): [Vector](_codec_vector_.vector.md)<[AccountId](_primitive_accountid_.accountid.md)>

*Defined in [type/Votes.ts:24](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/type/Votes.ts#L24)*

*__description__*: The current set of voters that approved it.

**Returns:** [Vector](_codec_vector_.vector.md)<[AccountId](_primitive_accountid_.accountid.md)>

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L176)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): [ProposalIndex](_type_proposalindex_.proposalindex.md)

*Defined in [type/Votes.ts:31](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/type/Votes.ts#L31)*

*__description__*: The proposal's unique index.

**Returns:** [ProposalIndex](_type_proposalindex_.proposalindex.md)

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L148)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="nays"></a>

##  nays

**get nays**(): [Vector](_codec_vector_.vector.md)<[AccountId](_primitive_accountid_.accountid.md)>

*Defined in [type/Votes.ts:38](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/type/Votes.ts#L38)*

*__description__*: The current set of voters that rejected it.

**Returns:** [Vector](_codec_vector_.vector.md)<[AccountId](_primitive_accountid_.accountid.md)>

___
<a id="threshold"></a>

##  threshold

**get threshold**(): [MemberCount](_type_membercount_.membercount.md)

*Defined in [type/Votes.ts:45](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/type/Votes.ts#L45)*

*__description__*: The number of approval votes that are needed to pass the motion.

**Returns:** [MemberCount](_type_membercount_.membercount.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L185)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L193)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L207)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L214)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L221)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L235)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L248)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:256](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L256)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/4f9aecc/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

