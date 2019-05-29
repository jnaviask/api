

# Hierarchy

↳  [IMethod](_types_.imethod.md)

**↳ IExtrinsic**

# Implemented by

* [Extrinsic](../classes/_type_extrinsic_.extrinsic.md)

# Properties

<a id="args"></a>

##  args

**● args**: *`Array`<[Codec](_types_.codec.md)>*

*Inherited from [IMethod](_types_.imethod.md).[args](_types_.imethod.md#args)*

*Defined in [types.ts:119](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L119)*

___
<a id="argsdef"></a>

##  argsDef

**● argsDef**: *[ArgsDef](_types_.argsdef.md)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [types.ts:120](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L120)*

___
<a id="callindex"></a>

##  callIndex

**● callIndex**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [types.ts:121](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L121)*

___
<a id="data"></a>

##  data

**● data**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [types.ts:122](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L122)*

___
<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:41](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L41)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

##  hasOrigin

**● hasOrigin**: *`boolean`*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [types.ts:123](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L123)*

___
<a id="hash"></a>

##  hash

**● hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:138](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L138)*

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:46](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L46)*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

##  isSigned

**● isSigned**: *`boolean`*

*Defined in [types.ts:139](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L139)*

___
<a id="meta"></a>

##  meta

**● meta**: *[FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [types.ts:124](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L124)*

___
<a id="method"></a>

##  method

**● method**: *[Method](../classes/_primitive_method_.method.md)*

*Defined in [types.ts:140](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L140)*

___
<a id="signature"></a>

##  signature

**● signature**: *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:141](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L141)*

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: *[Address](../classes/_primitive_address_.address.md) \| `Uint8Array` \| `string`*, signature: *`Uint8Array` \| `string`*, nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, era?: *[Uint8Array](../classes/_codec_u8a_.u8a.md#uint8array)*): [IExtrinsic](_types_.iextrinsic.md)

*Defined in [types.ts:142](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L142)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Address](../classes/_primitive_address_.address.md) \| `Uint8Array` \| `string` |
| signature | `Uint8Array` \| `string` |
| nonce | [AnyNumber](../modules/_types_.md#anynumber) |
| `Optional` era | [Uint8Array](../classes/_codec_u8a_.u8a.md#uint8array) |

**Returns:** [IExtrinsic](_types_.iextrinsic.md)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L51)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="sign"></a>

##  sign

▸ **sign**(account: *`KeyringPair`*, options: *[SignatureOptions](../modules/_types_.md#signatureoptions)*): [IExtrinsic](_types_.iextrinsic.md)

*Defined in [types.ts:143](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L143)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `KeyringPair` |
| options | [SignatureOptions](../modules/_types_.md#signatureoptions) |

**Returns:** [IExtrinsic](_types_.iextrinsic.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`undefined` \| `false` \| `true`*): `string`

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L56)*

*__description__*: Returns a hex string representation of the value. isLe returns a LE (number-only) repersentation

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isLe | `undefined` \| `false` \| `true` |

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:61](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L61)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:66](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L66)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:71](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L71)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/7e1d4cd/packages/types/src/types.ts#L77)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

