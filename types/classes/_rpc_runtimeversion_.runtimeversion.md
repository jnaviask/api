

*__name__*: RuntimeVersion

*__description__*: A defintion of the runtime and the associated versions thereof

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ RuntimeVersion**

# Implements

* [Codec](../interfaces/_types_.codec.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RuntimeVersion**(value?: *`RuntimeVersionValue` \| `Uint8Array`*): [RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [rpc/RuntimeVersion.ts:72](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/rpc/RuntimeVersion.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `RuntimeVersionValue` \| `Uint8Array` |

**Returns:** [RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L172)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="apis"></a>

##  apis

**get apis**(): [Vector](_codec_vector_.vector.md)<[RuntimeVersionApi](_rpc_runtimeversion_.runtimeversionapi.md)>

*Defined in [rpc/RuntimeVersion.ts:87](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/rpc/RuntimeVersion.ts#L87)*

*__description__*: The available APIs as [RuntimeVersionApi](_rpc_runtimeversion_.runtimeversionapi.md)

**Returns:** [Vector](_codec_vector_.vector.md)<[RuntimeVersionApi](_rpc_runtimeversion_.runtimeversionapi.md)>

___
<a id="authoringversion"></a>

##  authoringVersion

**get authoringVersion**(): [U32](_primitive_u32_.u32.md)

*Defined in [rpc/RuntimeVersion.ts:94](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/rpc/RuntimeVersion.ts#L94)*

*__description__*: The authoring version as [U32](_primitive_u32_.u32.md)

**Returns:** [U32](_primitive_u32_.u32.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L179)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="implname"></a>

##  implName

**get implName**(): [Text](_primitive_text_.text.md)

*Defined in [rpc/RuntimeVersion.ts:101](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/rpc/RuntimeVersion.ts#L101)*

*__description__*: The implementation name

**Returns:** [Text](_primitive_text_.text.md)

___
<a id="implversion"></a>

##  implVersion

**get implVersion**(): [U32](_primitive_u32_.u32.md)

*Defined in [rpc/RuntimeVersion.ts:108](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/rpc/RuntimeVersion.ts#L108)*

*__description__*: The implementation version

**Returns:** [U32](_primitive_u32_.u32.md)

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L157)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="specname"></a>

##  specName

**get specName**(): [Text](_primitive_text_.text.md)

*Defined in [rpc/RuntimeVersion.ts:115](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/rpc/RuntimeVersion.ts#L115)*

*__description__*: The specification name

**Returns:** [Text](_primitive_text_.text.md)

___
<a id="specversion"></a>

##  specVersion

**get specVersion**(): [U32](_primitive_u32_.u32.md)

*Defined in [rpc/RuntimeVersion.ts:122](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/rpc/RuntimeVersion.ts#L122)*

*__description__*: The specification version

**Returns:** [U32](_primitive_u32_.u32.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L203)*

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

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L210)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L217)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L224)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L238)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L249)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L257)*

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

*Defined in [codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/054cf1f/packages/types/src/codec/Struct.ts#L132)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

