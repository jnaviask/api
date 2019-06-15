

*__name__*: SeedOf

*__description__*: The Substrate SeedOf representation as a [Hash](_primitive_hash_.hash.md).

# Hierarchy

↳  [Hash](_primitive_hash_.hash.md)

**↳ SeedOf**

# Implements

* [Codec](../interfaces/_types_.codec.md)
* [IHash](../interfaces/_types_.ihash.md)

# Indexable

\[index: `number`\]:&nbsp;`number`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SeedOf**(value?: *[AnyU8a](../modules/_types_.md#anyu8a)*): [SeedOf](_type_seedof_.seedof.md)

*Inherited from [H256](_primitive_h256_.h256.md).[constructor](_primitive_h256_.h256.md#constructor)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [primitive/H256.ts:15](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/primitive/H256.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** [SeedOf](_type_seedof_.seedof.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L36)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L43)*

*__description__*: Returns true if the type wraps an empty/default all-0 value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

**get length**(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides Uint8Array.length*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L50)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): `number`

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[bitLength](_codec_u8afixed_.u8afixed.md#bitlength)*

*Defined in [codec/U8aFixed.ts:60](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8aFixed.ts#L60)*

*__description__*: Returns the number of bits in the value

**Returns:** `number`

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [IHash](../interfaces/_types_.ihash.md).[eq](../interfaces/_types_.ihash.md#eq)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L58)*

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

*Implementation of [IHash](../interfaces/_types_.ihash.md).[subarray](../interfaces/_types_.ihash.md#subarray)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides Uint8Array.subarray*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L73)*

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

*Implementation of [IHash](../interfaces/_types_.ihash.md).[toHex](../interfaces/_types_.ihash.md#tohex)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L80)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [IHash](../interfaces/_types_.ihash.md).[toJSON](../interfaces/_types_.ihash.md#tojson)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L87)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [IHash](../interfaces/_types_.ihash.md).[toRawType](../interfaces/_types_.ihash.md#torawtype)*

*Inherited from [H256](_primitive_h256_.h256.md).[toRawType](_primitive_h256_.h256.md#torawtype)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [primitive/H256.ts:23](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/primitive/H256.ts#L23)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [IHash](../interfaces/_types_.ihash.md).[toString](../interfaces/_types_.ihash.md#tostring)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides Uint8Array.toString*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L101)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [IHash](../interfaces/_types_.ihash.md).[toU8a](../interfaces/_types_.ihash.md#tou8a)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:109](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8a.ts#L109)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(bitLength: *[BitLength](../modules/_codec_u8afixed_.md#bitlength)*): [Constructor](../interfaces/_types_.constructor.md)<[U8aFixed](_codec_u8afixed_.u8afixed.md)>

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#with)*

*Defined in [codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/ea991e4/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| bitLength | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[U8aFixed](_codec_u8afixed_.u8afixed.md)>

___

