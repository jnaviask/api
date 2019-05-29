

*__name__*: Method

*__description__*: Extrinsic function descriptor, as defined in [https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Method**

↳  [Proposal](_type_proposal_.proposal.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)
* [IMethod](../interfaces/_types_.imethod.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Method**(value: *`any`*, meta?: *`FunctionMetadataV4`*): [Method](_primitive_method_.method.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Method.ts:66](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` meta | `FunctionMetadataV4` |

**Returns:** [Method](_primitive_method_.method.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L172)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="args"></a>

##  args

**get args**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Defined in [primitive/Method.ts:181](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L181)*

*__description__*: The arguments for the function call

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="argsdef"></a>

##  argsDef

**get argsDef**(): [ArgsDef](../interfaces/_types_.argsdef.md)

*Defined in [primitive/Method.ts:189](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L189)*

*__description__*: Thge argument defintions

**Returns:** [ArgsDef](../interfaces/_types_.argsdef.md)

___
<a id="callindex"></a>

##  callIndex

**get callIndex**(): `Uint8Array`

*Defined in [primitive/Method.ts:196](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L196)*

*__description__*: The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

**get data**(): `Uint8Array`

*Defined in [primitive/Method.ts:203](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L203)*

*__description__*: The encoded data

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L179)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="hasorigin"></a>

##  hasOrigin

**get hasOrigin**(): `boolean`

*Defined in [primitive/Method.ts:210](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L210)*

*__description__*: `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L157)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="meta"></a>

##  meta

**get meta**(): `FunctionMetadataV4`

*Defined in [primitive/Method.ts:219](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L219)*

*__description__*: The [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)

**Returns:** `FunctionMetadataV4`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [IMethod](../interfaces/_types_.imethod.md).[eq](../interfaces/_types_.imethod.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L203)*

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

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L210)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L217)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [IMethod](../interfaces/_types_.imethod.md).[toJSON](../interfaces/_types_.imethod.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L224)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [IMethod](../interfaces/_types_.imethod.md).[toRawType](../interfaces/_types_.imethod.md#torawtype)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [primitive/Method.ts:226](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L226)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [IMethod](../interfaces/_types_.imethod.md).[toString](../interfaces/_types_.imethod.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L249)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [IMethod](../interfaces/_types_.imethod.md).[toU8a](../interfaces/_types_.imethod.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L257)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="filterorigin"></a>

## `<Static>` filterOrigin

▸ **filterOrigin**(meta?: *`FunctionMetadataV4`*): `Array`<[FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)>

*Defined in [primitive/Method.ts:129](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L129)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` meta | `FunctionMetadataV4` |

**Returns:** `Array`<[FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)>

___
<a id="findfunction"></a>

## `<Static>` findFunction

▸ **findFunction**(callIndex: *`Uint8Array`*): [MethodFunction](../interfaces/_primitive_method_.methodfunction.md)

*Defined in [primitive/Method.ts:145](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L145)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callIndex | `Uint8Array` |

**Returns:** [MethodFunction](../interfaces/_primitive_method_.methodfunction.md)

___
<a id="injectmethods"></a>

## `<Static>` injectMethods

▸ **injectMethods**(moduleMethods: *[ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md)*): `void`

*Defined in [primitive/Method.ts:170](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/primitive/Method.ts#L170)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| moduleMethods | [ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md) |

**Returns:** `void`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/7155848/packages/types/src/codec/Struct.ts#L132)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

