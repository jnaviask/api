

# Hierarchy

 [Codec](_types_.codec.md)

**↳ IMethod**

↳  [IExtrinsic](_types_.iextrinsic.md)

# Implemented by

* [Method](../classes/_primitive_method_.method.md)
* [Proposal](../classes/_type_proposal_.proposal.md)

# Properties

<a id="args"></a>

##  args

**● args**: *`Array`<[Codec](_types_.codec.md)>*

*Defined in [types.ts:123](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L123)*

___
<a id="argsdef"></a>

##  argsDef

**● argsDef**: *[ArgsDef](_types_.argsdef.md)*

*Defined in [types.ts:124](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L124)*

___
<a id="callindex"></a>

##  callIndex

**● callIndex**: *`Uint8Array`*

*Defined in [types.ts:125](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L125)*

___
<a id="data"></a>

##  data

**● data**: *`Uint8Array`*

*Defined in [types.ts:126](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L126)*

___
<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:45](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L45)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="hasorigin"></a>

##  hasOrigin

**● hasOrigin**: *`boolean`*

*Defined in [types.ts:127](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L127)*

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L50)*

*__description__*: Checks if the value is an empty value

___
<a id="meta"></a>

##  meta

**● meta**: *[FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)*

*Defined in [types.ts:128](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L128)*

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L55)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`undefined` \| `false` \| `true`*): `string`

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:60](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L60)*

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

*Defined in [types.ts:65](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L65)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:70](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L70)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:75](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L75)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:81](https://github.com/polkadot-js/api/blob/29805f7/packages/types/src/types.ts#L81)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

