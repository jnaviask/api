

# Type parameters
#### ApiType 
# Hierarchy

 `IExtrinsic`

**↳ SubmittableExtrinsic**

# Properties

<a id="args"></a>

##  args

**● args**: *`Array`<`Codec`>*

*Inherited from IMethod.args*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:125](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L125)*

___
<a id="argsdef"></a>

##  argsDef

**● argsDef**: *`ArgsDef`*

*Inherited from IMethod.argsDef*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:126](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L126)*

___
<a id="callindex"></a>

##  callIndex

**● callIndex**: *`Uint8Array`*

*Inherited from IMethod.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:127](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L127)*

___
<a id="data"></a>

##  data

**● data**: *`Uint8Array`*

*Inherited from IMethod.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:128](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L128)*

___
<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from Codec.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:47](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L47)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

##  hasOrigin

**● hasOrigin**: *`boolean`*

*Inherited from IMethod.hasOrigin*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:129](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L129)*

___
<a id="hash"></a>

##  hash

**● hash**: *`IHash`*

*Inherited from IExtrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:144](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L144)*

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from Codec.isEmpty*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:52](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L52)*

*__description__*: Checks if the value is an empty value

___
<a id="issigned"></a>

##  isSigned

**● isSigned**: *`boolean`*

*Inherited from IExtrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:145](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L145)*

___
<a id="meta"></a>

##  meta

**● meta**: *`FunctionMetadata`*

*Inherited from IMethod.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:130](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L130)*

___
<a id="method"></a>

##  method

**● method**: *`Method`*

*Inherited from IExtrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:146](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L146)*

___
<a id="signature"></a>

##  signature

**● signature**: *`IExtrinsicSignature`*

*Inherited from IExtrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:147](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L147)*

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: *`Address` \| `Uint8Array` \| `string`*, signature: *`Uint8Array` \| `string`*, nonce: *`AnyNumber`*, era?: *`Uint8Array`*): `IExtrinsic`

*Inherited from IExtrinsic.addSignature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:148](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L148)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | `Address` \| `Uint8Array` \| `string` |
| signature | `Uint8Array` \| `string` |
| nonce | `AnyNumber` |
| `Optional` era | `Uint8Array` |

**Returns:** `IExtrinsic`

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from Codec.eq*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:57](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L57)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="send"></a>

##  send

▸ **send**(): `SumbitableResultResult`<`ApiType`>

▸ **send**(statusCb: *`Callback`<[SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)>*): `SumbitableResultSubscription`<`ApiType`>

*Defined in [SubmittableExtrinsic.ts:59](https://github.com/polkadot-js/api/blob/4cba24c/packages/api/src/SubmittableExtrinsic.ts#L59)*

**Returns:** `SumbitableResultResult`<`ApiType`>

*Defined in [SubmittableExtrinsic.ts:61](https://github.com/polkadot-js/api/blob/4cba24c/packages/api/src/SubmittableExtrinsic.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| statusCb | `Callback`<[SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)> |

**Returns:** `SumbitableResultSubscription`<`ApiType`>

___
<a id="sign"></a>

##  sign

▸ **sign**(account: *`IKeyringPair`*, _options: *`Partial`<`SignatureOptions`>*): `this`

*Overrides IExtrinsic.sign*

*Defined in [SubmittableExtrinsic.ts:63](https://github.com/polkadot-js/api/blob/4cba24c/packages/api/src/SubmittableExtrinsic.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `IKeyringPair` |
| _options | `Partial`<`SignatureOptions`> |

**Returns:** `this`

___
<a id="signandsend"></a>

##  signAndSend

▸ **signAndSend**(account: *`IKeyringPair` \| `string` \| `AccountId` \| `Address`*, options?: *`Partial`<`Partial`<`SignatureOptions`>>*): `SumbitableResultResult`<`ApiType`>

▸ **signAndSend**(account: *`IKeyringPair` \| `string` \| `AccountId` \| `Address`*, statusCb: *`Callback`<[SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)>*): `SumbitableResultSubscription`<`ApiType`>

*Defined in [SubmittableExtrinsic.ts:65](https://github.com/polkadot-js/api/blob/4cba24c/packages/api/src/SubmittableExtrinsic.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `IKeyringPair` \| `string` \| `AccountId` \| `Address` |
| `Optional` options | `Partial`<`Partial`<`SignatureOptions`>> |

**Returns:** `SumbitableResultResult`<`ApiType`>

*Defined in [SubmittableExtrinsic.ts:67](https://github.com/polkadot-js/api/blob/4cba24c/packages/api/src/SubmittableExtrinsic.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | `IKeyringPair` \| `string` \| `AccountId` \| `Address` |
| statusCb | `Callback`<[SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)> |

**Returns:** `SumbitableResultSubscription`<`ApiType`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`undefined` \| `false` \| `true`*): `string`

*Inherited from Codec.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:62](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L62)*

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

*Inherited from Codec.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:67](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L67)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Inherited from Codec.toRawType*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:72](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L72)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Codec.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:77](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L77)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from Codec.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:83](https://github.com/polkadot-js/api/blob/4cba24c/packages/types/src/types.ts#L83)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

