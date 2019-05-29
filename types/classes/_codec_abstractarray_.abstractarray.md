

*__name__*: AbstractArray

*__description__*: This manages codec arrays. It is an extension to Array, providing specific encoding/decoding on top of the base type.

# Type parameters
#### T :  [Codec](../interfaces/_types_.codec.md)
# Hierarchy

 `Array`<`T`>

**↳ AbstractArray**

↳  [Vector](_codec_vector_.vector.md)

↳  [Tuple](_codec_tuple_.tuple.md)

↳  [VectorAny](_codec_vectorany_.vectorany.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;`T`
# Properties

<a id="array"></a>

## `<Static>` Array

**● Array**: *`ArrayConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1368*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Defined in [codec/AbstractArray.ts:29](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L29)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L22)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

**get length**(): `number`

*Overrides Array.length*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L38)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L46)*

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

*Overrides Array.filter*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L116)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<`T`>

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Overrides Array.map*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L125)*

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

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L53)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`T`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L60)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L67)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

## `<Abstract>` toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Defined in [codec/AbstractArray.ts:76](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L76)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/AbstractArray.ts:81](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L81)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/a7f1606/packages/types/src/codec/AbstractArray.ts#L94)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

