

*__name__*: WithdrawReasons

*__description__*: The Substrate WithdrawReasons for staking

# Hierarchy

↳  [Set](_codec_set_.set.md)

**↳ WithdrawReasons**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new WithdrawReasons**(value?: *`any`*): [WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)

*Overrides [Set](_codec_set_.set.md).[constructor](_codec_set_.set.md#constructor)*

*Defined in [type/WithdrawReasons.ts:12](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/type/WithdrawReasons.ts#L12)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `any` |  [] |

**Returns:** [WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Set](_codec_set_.set.md).[encodedLength](_codec_set_.set.md#encodedlength)*

*Defined in [codec/Set.ts:73](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L73)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Set](_codec_set_.set.md).[isEmpty](_codec_set_.set.md#isempty)*

*Defined in [codec/Set.ts:80](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L80)*

*__description__*: true is the Set contains no values

**Returns:** `boolean`

___
<a id="isfee"></a>

##  isFee

**get isFee**(): `boolean`

*Defined in [type/WithdrawReasons.ts:46](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/type/WithdrawReasons.ts#L46)*

*__description__*: /// In order to pay some other (higher-level) fees.

**Returns:** `boolean`

___
<a id="isreserve"></a>

##  isReserve

**get isReserve**(): `boolean`

*Defined in [type/WithdrawReasons.ts:25](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/type/WithdrawReasons.ts#L25)*

*__description__*: In order to reserve some funds for a later return or repatriation

**Returns:** `boolean`

___
<a id="istransactionpayment"></a>

##  isTransactionPayment

**get isTransactionPayment**(): `boolean`

*Defined in [type/WithdrawReasons.ts:32](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/type/WithdrawReasons.ts#L32)*

*__description__*: In order to pay for (system) transaction costs

**Returns:** `boolean`

___
<a id="istransfer"></a>

##  isTransfer

**get isTransfer**(): `boolean`

*Defined in [type/WithdrawReasons.ts:39](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/type/WithdrawReasons.ts#L39)*

*__description__*: In order to transfer ownership

**Returns:** `boolean`

___
<a id="valueencoded"></a>

##  valueEncoded

**get valueEncoded**(): `number`

*Inherited from [Set](_codec_set_.set.md).[valueEncoded](_codec_set_.set.md#valueencoded)*

*Defined in [codec/Set.ts:94](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L94)*

*__description__*: The encoded value for the set members

**Returns:** `number`

___
<a id="values"></a>

##  values

**get values**(): `Array`<`string`>

*Inherited from [Set](_codec_set_.set.md).[values](_codec_set_.set.md#values)*

*Defined in [codec/Set.ts:87](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L87)*

*__description__*: The actual set values as a Array

**Returns:** `Array`<`string`>

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Set](_codec_set_.set.md).[eq](_codec_set_.set.md#eq)*

*Defined in [codec/Set.ts:101](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L101)*

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

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Set](_codec_set_.set.md).[toHex](_codec_set_.set.md#tohex)*

*Defined in [codec/Set.ts:117](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L117)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Set](_codec_set_.set.md).[toJSON](_codec_set_.set.md#tojson)*

*Defined in [codec/Set.ts:124](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L124)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Set](_codec_set_.set.md).[toString](_codec_set_.set.md#tostring)*

*Defined in [codec/Set.ts:131](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L131)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Set](_codec_set_.set.md).[toU8a](_codec_set_.set.md#tou8a)*

*Defined in [codec/Set.ts:139](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L139)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeset"></a>

## `<Static>` decodeSet

▸ **decodeSet**(setValues: *`SetValues`*, value?: *`Array`<`string`> \| `Uint8Array` \| `number`*): `Array`<`string`>

*Inherited from [Set](_codec_set_.set.md).[decodeSet](_codec_set_.set.md#decodeset)*

*Defined in [codec/Set.ts:33](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L33)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| setValues | `SetValues` | - |
| `Default value` value | `Array`<`string`> \| `Uint8Array` \| `number` | 0 |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

## `<Static>` encodeSet

▸ **encodeSet**(setValues: *`SetValues`*, value: *`Array`<`string`>*): `number`

*Inherited from [Set](_codec_set_.set.md).[encodeSet](_codec_set_.set.md#encodeset)*

*Defined in [codec/Set.ts:64](https://github.com/polkadot-js/api/blob/168b12d/packages/types/src/codec/Set.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | `SetValues` |
| value | `Array`<`string`> |

**Returns:** `number`

___

