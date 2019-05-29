

*__name__*: AccountIndex

*__description__*: A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account. We extends from [U32](_primitive_u32_.u32.md) to provide the number-like properties.

# Hierarchy

↳  [U32](_primitive_u32_.u32.md)

**↳ AccountIndex**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AccountIndex**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [AccountIndex](_primitive_accountindex_.accountindex.md)

*Overrides [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Defined in [primitive/AccountIndex.ts:29](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L29)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyNumber](../modules/_types_.md#anynumber) |  new BN(0) |

**Returns:** [AccountIndex](_primitive_accountindex_.accountindex.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Overrides AbstractInt.eq*

*Defined in [primitive/AccountIndex.ts:88](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L88)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`boolean`*): `string`

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/UInt.ts:36](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/codec/UInt.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` isLe | `boolean` | false |

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Overrides AbstractInt.toJSON*

*Defined in [primitive/AccountIndex.ts:101](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L101)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Overrides [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Defined in [primitive/AccountIndex.ts:117](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L117)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides AbstractInt.toString*

*Defined in [primitive/AccountIndex.ts:108](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L108)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/UInt.ts:56](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/codec/UInt.ts#L56)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="calclength"></a>

## `<Static>` calcLength

▸ **calcLength**(_value: *`BN` \| `number`*): `number`

*Defined in [primitive/AccountIndex.ts:48](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _value | `BN` \| `number` |

**Returns:** `number`

___
<a id="decodeaccountindex"></a>

## `<Static>` decodeAccountIndex

▸ **decodeAccountIndex**(value: *[AnyNumber](../modules/_types_.md#anynumber)*): `BN` \| `Uint8Array` \| `number` \| `string`

*Defined in [primitive/AccountIndex.ts:36](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** `BN` \| `Uint8Array` \| `number` \| `string`

___
<a id="readlength"></a>

## `<Static>` readLength

▸ **readLength**(input: *`Uint8Array`*): [`number`, `number`]

*Defined in [primitive/AccountIndex.ts:62](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [`number`, `number`]

___
<a id="writelength"></a>

## `<Static>` writeLength

▸ **writeLength**(input: *`Uint8Array`*): `Uint8Array`

*Defined in [primitive/AccountIndex.ts:76](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/primitive/AccountIndex.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___

