

# Type parameters
#### Modules :  [Codec](_types_.codec.md)
# Hierarchy

 [Codec](_types_.codec.md)

**↳ MetadataInterface**

# Implemented by

* [MetadataV0](../classes/_metadata_v0_metadata_.metadatav0.md)
* [MetadataV1](../classes/_metadata_v1_metadata_.metadatav1.md)
* [MetadataV2](../classes/_metadata_v2_metadata_.metadatav2.md)
* [MetadataV3](../classes/_metadata_v3_metadata_.metadatav3.md)
* [MetadataV4](../classes/_metadata_v4_metadata_.metadatav4.md)

# Properties

<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:41](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L41)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:46](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L46)*

*__description__*: Checks if the value is an empty value

___
<a id="modules"></a>

##  modules

**● modules**: *[Vector](../classes/_codec_vector_.vector.md)<`Modules`>*

*Defined in [Metadata/types.ts:9](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/Metadata/types.ts#L9)*

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L51)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="getuniqtypes"></a>

##  getUniqTypes

▸ **getUniqTypes**(throwError: *`boolean`*): `Array`<`string`>

*Defined in [Metadata/types.ts:10](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/Metadata/types.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| throwError | `boolean` |

**Returns:** `Array`<`string`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`undefined` \| `false` \| `true`*): `string`

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L56)*

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

*Defined in [types.ts:61](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L61)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:66](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L66)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:71](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L71)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/c01ade8/packages/types/src/types.ts#L77)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

