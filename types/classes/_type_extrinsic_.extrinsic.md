

*__name__*: Extrinsic

*__description__*: Representation of an Extrinsic in the system. It contains the actual call, (optional) signature and encodes with an actual length prefix

[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

Can be:

*   signed, to create a transaction
*   left as is, to create an inherent

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Extrinsic**

# Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Extrinsic**(value?: *`ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md)*): [Extrinsic](_type_extrinsic_.extrinsic.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md) |

**Returns:** [Extrinsic](_type_extrinsic_.extrinsic.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L163)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="args"></a>

##  args

**get args**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Defined in [type/Extrinsic.ts:82](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L82)*

*__description__*: The arguments passed to for the call, exposes args so it is compatible with [Method](_primitive_method_.method.md)

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="argsdef"></a>

##  argsDef

**get argsDef**(): [ArgsDef](../interfaces/_types_.argsdef.md)

*Defined in [type/Extrinsic.ts:89](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L89)*

*__description__*: Thge argument defintions, compatible with [Method](_primitive_method_.method.md)

**Returns:** [ArgsDef](../interfaces/_types_.argsdef.md)

___
<a id="callindex"></a>

##  callIndex

**get callIndex**(): `Uint8Array`

*Defined in [type/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L96)*

*__description__*: The actual `[sectionIndex, methodIndex]` as used in the Method

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

**get data**(): `Uint8Array`

*Defined in [type/Extrinsic.ts:103](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L103)*

*__description__*: The actual data for the Method

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [type/Extrinsic.ts:110](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L110)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="hasorigin"></a>

##  hasOrigin

**get hasOrigin**(): `boolean`

*Defined in [type/Extrinsic.ts:128](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L128)*

*__description__*: `true` is method has `Origin` argument (compatibility with [Method](_primitive_method_.method.md))

**Returns:** `boolean`

___
<a id="hash"></a>

##  hash

**get hash**(): [Hash](_primitive_hash_.hash.md)

*Defined in [type/Extrinsic.ts:119](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L119)*

*__description__*: Convernience function, encodes the extrinsic and returns the actual hash

**Returns:** [Hash](_primitive_hash_.hash.md)

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L148)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="issigned"></a>

##  isSigned

**get isSigned**(): `boolean`

*Defined in [type/Extrinsic.ts:135](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L135)*

*__description__*: `true` id the extrinsic is signed

**Returns:** `boolean`

___
<a id="length"></a>

##  length

**get length**(): `number`

*Defined in [type/Extrinsic.ts:142](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L142)*

*__description__*: The length of the encoded value

**Returns:** `number`

___
<a id="meta"></a>

##  meta

**get meta**(): [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)

*Defined in [type/Extrinsic.ts:149](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L149)*

*__description__*: The [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md) that describes the extrinsic

**Returns:** [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)

___
<a id="method"></a>

##  method

**get method**(): [Method](_primitive_method_.method.md)

*Defined in [type/Extrinsic.ts:156](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L156)*

*__description__*: The [Method](_primitive_method_.method.md) this extrinsic wraps

**Returns:** [Method](_primitive_method_.method.md)

___
<a id="signature"></a>

##  signature

**get signature**(): [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

*Defined in [type/Extrinsic.ts:163](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L163)*

*__description__*: The [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

**Returns:** [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: *[Address](_primitive_address_.address.md) \| `Uint8Array` \| `string`*, signature: *`Uint8Array` \| `string`*, nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, era?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [Extrinsic](_type_extrinsic_.extrinsic.md)

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md).[addSignature](../interfaces/_types_.iextrinsic.md#addsignature)*

*Defined in [type/Extrinsic.ts:170](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L170)*

*__description__*: Add an [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md) to the extrinsic (already generated)

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Address](_primitive_address_.address.md) \| `Uint8Array` \| `string` |
| signature | `Uint8Array` \| `string` |
| nonce | [AnyNumber](../modules/_types_.md#anynumber) |
| `Optional` era | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [Extrinsic](_type_extrinsic_.extrinsic.md)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md).[eq](../interfaces/_types_.iextrinsic.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="sign"></a>

##  sign

▸ **sign**(account: *[IKeyringPair](../modules/_types_.md#ikeyringpair)*, options: *[SignatureOptions](../modules/_types_.md#signatureoptions)*): [Extrinsic](_type_extrinsic_.extrinsic.md)

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md).[sign](../interfaces/_types_.iextrinsic.md#sign)*

*Defined in [type/Extrinsic.ts:179](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L179)*

*__description__*: Sign the extrinsic with a specific keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| account | [IKeyringPair](../modules/_types_.md#ikeyringpair) |
| options | [SignatureOptions](../modules/_types_.md#signatureoptions) |

**Returns:** [Extrinsic](_type_extrinsic_.extrinsic.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L207)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Overrides [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [type/Extrinsic.ts:188](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L188)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md).[toJSON](../interfaces/_types_.iextrinsic.md#tojson)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [type/Extrinsic.ts:195](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L195)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md).[toRawType](../interfaces/_types_.iextrinsic.md#torawtype)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [type/Extrinsic.ts:202](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L202)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md).[toString](../interfaces/_types_.iextrinsic.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L248)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md).[toU8a](../interfaces/_types_.iextrinsic.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [type/Extrinsic.ts:211](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L211)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeextrinsic"></a>

## `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value?: *`ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md)*): `ExtrinsicValue` \| `Array`<`number`> \| `Uint8Array`

*Defined in [type/Extrinsic.ts:43](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/type/Extrinsic.ts#L43)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md) |  new Uint8Array() |

**Returns:** `ExtrinsicValue` \| `Array`<`number`> \| `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/3ab5811/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

