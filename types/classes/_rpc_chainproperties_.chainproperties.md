

*__name__*: ChainProperties

*__description__*: Wraps the properties retrieved from the chain via the `system.properties` RPC call.

# Hierarchy

↳  [Json](_rpc_json_.json.md)

**↳ ChainProperties**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ChainProperties**(value?: *`object` \| `null`*): [ChainProperties](_rpc_chainproperties_.chainproperties.md)

*Inherited from [Json](_rpc_json_.json.md).[constructor](_rpc_json_.json.md#constructor)*

*Defined in [rpc/Json.ts:16](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `object` \| `null` |

**Returns:** [ChainProperties](_rpc_chainproperties_.chainproperties.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Json](_rpc_json_.json.md).[encodedLength](_rpc_json_.json.md#encodedlength)*

*Defined in [rpc/Json.ts:28](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L28)*

*__description__*: Always 0, never encodes as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Json](_rpc_json_.json.md).[isEmpty](_rpc_json_.json.md#isempty)*

*Defined in [rpc/Json.ts:35](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L35)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="tokendecimals"></a>

##  tokenDecimals

**get tokenDecimals**(): `number` \| `undefined`

*Defined in [rpc/ChainProperties.ts:16](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/ChainProperties.ts#L16)*

*__description__*: The token decimals, if defined (de-facto standard only)

**Returns:** `number` \| `undefined`

___
<a id="tokensymbol"></a>

##  tokenSymbol

**get tokenSymbol**(): `string` \| `undefined`

*Defined in [rpc/ChainProperties.ts:23](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/ChainProperties.ts#L23)*

*__description__*: The token system, if defined (de-facto standard only)

**Returns:** `string` \| `undefined`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Json](_rpc_json_.json.md).[eq](_rpc_json_.json.md#eq)*

*Defined in [rpc/Json.ts:42](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L42)*

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

*Inherited from [Json](_rpc_json_.json.md).[toHex](_rpc_json_.json.md#tohex)*

*Defined in [rpc/Json.ts:49](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L49)*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Json](_rpc_json_.json.md).[toJSON](_rpc_json_.json.md#tojson)*

*Defined in [rpc/Json.ts:56](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L56)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Json](_rpc_json_.json.md).[toRawType](_rpc_json_.json.md#torawtype)*

*Defined in [rpc/Json.ts:67](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L67)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Json](_rpc_json_.json.md).[toString](_rpc_json_.json.md#tostring)*

*Defined in [rpc/Json.ts:74](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L74)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Json](_rpc_json_.json.md).[toU8a](_rpc_json_.json.md#tou8a)*

*Defined in [rpc/Json.ts:81](https://github.com/polkadot-js/api/blob/c431815/packages/types/src/rpc/Json.ts#L81)*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |

**Returns:** `Uint8Array`

___

