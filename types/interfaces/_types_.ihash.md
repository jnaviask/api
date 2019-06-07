

# Hierarchy

↳  [U8a](../classes/_codec_u8a_.u8a.md)

**↳ IHash**

# Implements

* [Codec](_types_.codec.md)

# Implemented by

* [ChangesTrieRoot](../classes/_rpc_digest_.changestrieroot.md)
* [CodeHash](../classes/_type_codehash_.codehash.md)
* [Finalized](../classes/_rpc_extrinsicstatus_.finalized.md)
* [Hash](../classes/_primitive_hash_.hash.md)
* [SeedOf](../classes/_type_seedof_.seedof.md)
* [Tombstone](../classes/_type_contractinfo_.tombstone.md)
* [TombstoneContractInfo](../classes/_type_contractinfo_.tombstonecontractinfo.md)
* [Usurped](../classes/_rpc_extrinsicstatus_.usurped.md)

# Indexable

\[index: `number`\]:&nbsp;`number`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new IHash**(value?: *[AnyU8a](../modules/_types_.md#anyu8a)*): [IHash](_types_.ihash.md)

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[constructor](../classes/_codec_u8a_.u8a.md#constructor)*

*Defined in [codec/U8a.ts:18](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** [IHash](_types_.ihash.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L36)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L43)*

*__description__*: Returns true if the type wraps an empty/default all-0 value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

**get length**(): `number`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides Uint8Array.length*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L50)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L58)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="subarray"></a>

##  subarray

▸ **subarray**(begin: *`number`*, end?: *`undefined` \| `number`*): `Uint8Array`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[subarray](../classes/_codec_u8a_.u8a.md#subarray)*

*Overrides Uint8Array.subarray*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L73)*

*__description__*: Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| begin | `number` |  The position to start at |
| `Optional` end | `undefined` \| `number` |  The position to end at |

**Returns:** `Uint8Array`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toHex](../classes/_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L80)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L87)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toRawType](../classes/_codec_u8a_.u8a.md#torawtype)*

*Defined in [codec/U8a.ts:94](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L94)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Overrides Uint8Array.toString*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L101)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:109](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/U8a.ts#L109)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

