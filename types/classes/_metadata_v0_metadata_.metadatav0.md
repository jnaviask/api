

*__name__*: MetadataV0

*__description__*: The runtime metadata as a decoded structure

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ MetadataV0**

# Implements

* [Codec](../interfaces/_types_.codec.md)
* [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)<[RuntimeModuleMetadata](_metadata_v0_modules_.runtimemodulemetadata.md)>

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MetadataV0**(value?: *`any`*): [MetadataV0](_metadata_v0_metadata_.metadatav0.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v0/Metadata.ts:24](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/Metadata/v0/Metadata.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [MetadataV0](_metadata_v0_metadata_.metadatav0.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L172)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="calls"></a>

##  calls

**get calls**(): [Vector](_codec_vector_.vector.md)<[OuterDispatchCall](_metadata_v0_calls_.outerdispatchcall.md)>

*Defined in [Metadata/v0/Metadata.ts:58](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/Metadata/v0/Metadata.ts#L58)*

*__description__*: Wrapped [OuterDispatchCall](_metadata_v0_calls_.outerdispatchcall.md)

**Returns:** [Vector](_codec_vector_.vector.md)<[OuterDispatchCall](_metadata_v0_calls_.outerdispatchcall.md)>

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L179)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="events"></a>

##  events

**get events**(): [Vector](_codec_vector_.vector.md)<[OuterEventEventMetadata](_metadata_v0_events_.outereventeventmetadata.md)>

*Defined in [Metadata/v0/Metadata.ts:65](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/Metadata/v0/Metadata.ts#L65)*

*__description__*: Wrapped [OuterEventEventMetadata](_metadata_v0_events_.outereventeventmetadata.md)

**Returns:** [Vector](_codec_vector_.vector.md)<[OuterEventEventMetadata](_metadata_v0_events_.outereventeventmetadata.md)>

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L157)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="modules"></a>

##  modules

**get modules**(): [Vector](_codec_vector_.vector.md)<[RuntimeModuleMetadata](_metadata_v0_modules_.runtimemodulemetadata.md)>

*Defined in [Metadata/v0/Metadata.ts:72](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/Metadata/v0/Metadata.ts#L72)*

*__description__*: Wrapped [RuntimeModuleMetadata](_metadata_v0_modules_.runtimemodulemetadata.md)

**Returns:** [Vector](_codec_vector_.vector.md)<[RuntimeModuleMetadata](_metadata_v0_modules_.runtimemodulemetadata.md)>

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md).[eq](../interfaces/_metadata_types_.metadatainterface.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L203)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="getuniqtypes"></a>

##  getUniqTypes

▸ **getUniqTypes**(throwError: *`boolean`*): `Array`<`string`>

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md).[getUniqTypes](../interfaces/_metadata_types_.metadatainterface.md#getuniqtypes)*

*Defined in [Metadata/v0/Metadata.ts:107](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/Metadata/v0/Metadata.ts#L107)*

*__description__*: Helper to retrieve a list of all type that are found, sorted and de-deuplicated

**Parameters:**

| Name | Type |
| ------ | ------ |
| throwError | `boolean` |

**Returns:** `Array`<`string`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L210)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L217)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md).[toJSON](../interfaces/_metadata_types_.metadatainterface.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L224)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md).[toRawType](../interfaces/_metadata_types_.metadatainterface.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L238)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md).[toString](../interfaces/_metadata_types_.metadatainterface.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L249)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md).[toU8a](../interfaces/_metadata_types_.metadatainterface.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L257)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodemetadata"></a>

## `<Static>` decodeMetadata

▸ **decodeMetadata**(value: *`string` \| `Uint8Array` \| `object`*): `object` \| `Uint8Array`

*Defined in [Metadata/v0/Metadata.ts:33](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/Metadata/v0/Metadata.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` \| `Uint8Array` \| `object` |

**Returns:** `object` \| `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/543fdc0/packages/types/src/codec/Struct.ts#L132)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

