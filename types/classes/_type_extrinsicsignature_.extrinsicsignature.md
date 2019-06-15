

*__name__*: ExtrinsicSignature

*__description__*: A container for the [Signature](_type_signature_.signature.md) associated with a specific [Extrinsic](_type_extrinsic_.extrinsic.md)

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ ExtrinsicSignature**

# Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicSignature**(value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/ExtrinsicSignature.ts:28](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L163)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [type/ExtrinsicSignature.ts:65](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L65)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="era"></a>

##  era

**get era**(): [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

**set era**(era: *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*): `void`

*Defined in [type/ExtrinsicSignature.ts:81](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L81)*

*__description__*: The [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

*Defined in [type/ExtrinsicSignature.ts:120](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L120)*

*__description__*: The [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Parameters:**

| Name | Type |
| ------ | ------ |
| era | [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) |

**Returns:** `void`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L148)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="issigned"></a>

##  isSigned

**get isSigned**(): `boolean`

*Defined in [type/ExtrinsicSignature.ts:74](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L74)*

*__description__*: `true` if the signature is valid

**Returns:** `boolean`

___
<a id="nonce"></a>

##  nonce

**get nonce**(): [Nonce](_type_nonce_.nonce.md)

*Defined in [type/ExtrinsicSignature.ts:88](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L88)*

*__description__*: The [Nonce](_type_nonce_.nonce.md) for the signature

**Returns:** [Nonce](_type_nonce_.nonce.md)

___
<a id="signature"></a>

##  signature

**get signature**(): [Signature](_type_signature_.signature.md)

*Defined in [type/ExtrinsicSignature.ts:95](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L95)*

*__description__*: The actuall [Signature](_type_signature_.signature.md) hash

**Returns:** [Signature](_type_signature_.signature.md)

___
<a id="signer"></a>

##  signer

**get signer**(): [Address](_primitive_address_.address.md)

*Defined in [type/ExtrinsicSignature.ts:102](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L102)*

*__description__*: The [Address](_primitive_address_.address.md) that signed

**Returns:** [Address](_primitive_address_.address.md)

___
<a id="version"></a>

##  version

**get version**(): `number`

*Defined in [type/ExtrinsicSignature.ts:109](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L109)*

*__description__*: The encoded version for the signature

**Returns:** `number`

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(_signer: *[Address](_primitive_address_.address.md) \| `Uint8Array` \| `string`*, _signature: *`Uint8Array` \| `string`*, _nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, _era?: *`Uint8Array` \| [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*): [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

*Defined in [type/ExtrinsicSignature.ts:137](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L137)*

*__description__*: Adds a raw signature

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _signer | [Address](_primitive_address_.address.md) \| `Uint8Array` \| `string` | - |
| _signature | `Uint8Array` \| `string` | - |
| _nonce | [AnyNumber](../modules/_types_.md#anynumber) | - |
| `Default value` _era | `Uint8Array` \| [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) |  IMMORTAL_ERA |

**Returns:** [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md).[eq](../interfaces/_types_.iextrinsicsignature.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="sign"></a>

##  sign

▸ **sign**(method: *[Method](_primitive_method_.method.md)*, account: *[IKeyringPair](../modules/_types_.md#ikeyringpair)*, __namedParameters: *`object`*): [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

*Defined in [type/ExtrinsicSignature.ts:149](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L149)*

*__description__*: Generate a payload and pplies the signature from a keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [Method](_primitive_method_.method.md) |
| account | [IKeyringPair](../modules/_types_.md#ikeyringpair) |
| __namedParameters | `object` |

**Returns:** [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L207)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L214)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md).[toJSON](../interfaces/_types_.iextrinsicsignature.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L221)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md).[toRawType](../interfaces/_types_.iextrinsicsignature.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L235)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md).[toString](../interfaces/_types_.iextrinsicsignature.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L248)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md).[toU8a](../interfaces/_types_.iextrinsicsignature.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [type/ExtrinsicSignature.ts:166](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L166)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeextrinsicsignature"></a>

## `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): `object` \| `Uint8Array`

*Defined in [type/ExtrinsicSignature.ts:45](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/type/ExtrinsicSignature.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** `object` \| `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/d38ccd1/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

