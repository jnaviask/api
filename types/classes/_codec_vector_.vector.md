

*__name__*: Vector

*__description__*: This manages codec arrays. Internally it keeps track of the length (as decoded) and allows construction with the passed `Type` in the constructor. It is an extension to Array, providing specific encoding/decoding on top of the base type.

# Type parameters
#### T :  [Codec](../interfaces/_types_.codec.md)
# Hierarchy

↳  [AbstractArray](_codec_abstractarray_.abstractarray.md)<`T`>

**↳ Vector**

↳  [Extrinsics](_type_extrinsics_.extrinsics.md)

↳  [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

↳  [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;`T`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Vector**(Type: *[Constructor](../interfaces/_types_.constructor.md)<`T`>*, value?: *[Vector](_codec_vector_.vector.md)<`any`> \| `Uint8Array` \| `string` \| `Array`<`any`>*): [Vector](_codec_vector_.vector.md)

*Defined in [codec/Vector.ts:22](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Vector.ts#L22)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | [Constructor](../interfaces/_types_.constructor.md)<`T`> | - |
| `Default value` value | [Vector](_codec_vector_.vector.md)<`any`> \| `Uint8Array` \| `string` \| `Array`<`any`> |  [] as Array&lt;any&gt; |

**Returns:** [Vector](_codec_vector_.vector.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `string`

*Defined in [codec/Vector.ts:70](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Vector.ts#L70)*

*__description__*: The type for the items

**Returns:** `string`

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:29](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L29)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L22)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

**get length**(): `number`

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides Array.length*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L38)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L46)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`T`>

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides Array.filter*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L116)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<`T`>

___
<a id="indexof"></a>

##  indexOf

▸ **indexOf**(_other?: *`any`*): `number`

*Overrides Array.indexOf*

*Defined in [codec/Vector.ts:77](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Vector.ts#L77)*

*__description__*: Finds the index of the value in the array

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` _other | `any` |

**Returns:** `number`

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides Array.map*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L125)*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<`T`>

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L53)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`T`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L60)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L67)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#torawtype)*

*Defined in [codec/Vector.ts:95](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Vector.ts#L95)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/AbstractArray.ts:81](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L81)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/AbstractArray.ts#L94)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodevector"></a>

## `<Static>` decodeVector

▸ **decodeVector**<`T`>(Type: *[Constructor](../interfaces/_types_.constructor.md)<`T`>*, value: *[Vector](_codec_vector_.vector.md)<`any`> \| `Uint8Array` \| `string` \| `Array`<`any`>*): `Array`<`T`>

*Defined in [codec/Vector.ts:32](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Vector.ts#L32)*

**Type parameters:**

#### T :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_types_.constructor.md)<`T`> |
| value | [Vector](_codec_vector_.vector.md)<`any`> \| `Uint8Array` \| `string` \| `Array`<`any`> |

**Returns:** `Array`<`T`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *[Constructor](../interfaces/_types_.constructor.md)<`O`>*): [Constructor](../interfaces/_types_.constructor.md)<[Vector](_codec_vector_.vector.md)<`O`>>

*Defined in [codec/Vector.ts:55](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Vector.ts#L55)*

**Type parameters:**

#### O :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../interfaces/_types_.constructor.md)<`O`> |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Vector](_codec_vector_.vector.md)<`O`>>

___

