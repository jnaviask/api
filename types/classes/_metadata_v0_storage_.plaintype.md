

# Hierarchy

↳  [Type](_primitive_type_.type.md)

**↳ PlainType**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`string`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new PlainType**(value?: *[Text](_primitive_text_.text.md) \| `Uint8Array` \| `string`*): [PlainType](_metadata_v0_storage_.plaintype.md)

*Inherited from [Type](_primitive_type_.type.md).[constructor](_primitive_type_.type.md#constructor)*

*Overrides [Text](_primitive_text_.text.md).[constructor](_primitive_text_.text.md#constructor)*

*Defined in [primitive/Type.ts:19](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Type.ts#L19)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [Text](_primitive_text_.text.md) \| `Uint8Array` \| `string` | &quot;&quot; |

**Returns:** [PlainType](_metadata_v0_storage_.plaintype.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Type](_primitive_type_.type.md).[encodedLength](_primitive_type_.type.md#encodedlength)*

*Overrides [Text](_primitive_text_.text.md).[encodedLength](_primitive_text_.text.md#encodedlength)*

*Defined in [primitive/Type.ts:80](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Type.ts#L80)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Text](_primitive_text_.text.md).[isEmpty](_primitive_text_.text.md#isempty)*

*Defined in [primitive/Text.ts:59](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Text.ts#L59)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

**get length**(): `number`

*Inherited from [Text](_primitive_text_.text.md).[length](_primitive_text_.text.md#length)*

*Overrides String.length*

*Defined in [primitive/Text.ts:66](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Text.ts#L66)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Text](_primitive_text_.text.md).[eq](_primitive_text_.text.md#eq)*

*Defined in [primitive/Text.ts:74](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Text.ts#L74)*

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

*Inherited from [Text](_primitive_text_.text.md).[toHex](_primitive_text_.text.md#tohex)*

*Defined in [primitive/Text.ts:83](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Text.ts#L83)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Text](_primitive_text_.text.md).[toJSON](_primitive_text_.text.md#tojson)*

*Defined in [primitive/Text.ts:90](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Text.ts#L90)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Type](_primitive_type_.type.md).[toRawType](_primitive_type_.type.md#torawtype)*

*Overrides [Text](_primitive_text_.text.md).[toRawType](_primitive_text_.text.md#torawtype)*

*Defined in [primitive/Type.ts:242](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Type.ts#L242)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Text](_primitive_text_.text.md).[toString](_primitive_text_.text.md#tostring)*

*Overrides String.toString*

*Defined in [primitive/Text.ts:104](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Text.ts#L104)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Type](_primitive_type_.type.md).[toU8a](_primitive_type_.type.md#tou8a)*

*Overrides [Text](_primitive_text_.text.md).[toU8a](_primitive_text_.text.md#tou8a)*

*Defined in [primitive/Type.ts:91](https://github.com/polkadot-js/api/blob/25af4b4/packages/types/src/primitive/Type.ts#L91)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

