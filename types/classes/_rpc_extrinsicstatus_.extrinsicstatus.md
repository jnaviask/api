

*__name__*: ExtrinsicStatus

*__description__*: An [Enum](_codec_enumtype_.enum.md) that indicates the status of the [Extrinsic](_type_extrinsic_.extrinsic.md) as been submitted

# Hierarchy

↳  [Enum](_codec_enumtype_.enum.md)

**↳ ExtrinsicStatus**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicStatus**(value: *`any`*, index?: *`undefined` \| `number`*): [ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [rpc/ExtrinsicStatus.ts:74](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` index | `undefined` \| `number` |

**Returns:** [ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)

___

# Accessors

<a id="asbroadcast"></a>

##  asBroadcast

**get asBroadcast**(): [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

*Defined in [rpc/ExtrinsicStatus.ts:90](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L90)*

*__description__*: Returns the item as a [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

**Returns:** [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

___
<a id="asdropped"></a>

##  asDropped

**get asDropped**(): [Dropped](_rpc_extrinsicstatus_.dropped.md)

*Defined in [rpc/ExtrinsicStatus.ts:99](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L99)*

*__description__*: Returns the item as a [Dropped](_rpc_extrinsicstatus_.dropped.md)

**Returns:** [Dropped](_rpc_extrinsicstatus_.dropped.md)

___
<a id="asfinalized"></a>

##  asFinalized

**get asFinalized**(): [Finalized](_rpc_extrinsicstatus_.finalized.md)

*Defined in [rpc/ExtrinsicStatus.ts:108](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L108)*

*__description__*: Returns the item as a [Finalized](_rpc_extrinsicstatus_.finalized.md)

**Returns:** [Finalized](_rpc_extrinsicstatus_.finalized.md)

___
<a id="asfuture"></a>

##  asFuture

**get asFuture**(): [Future](_rpc_extrinsicstatus_.future.md)

*Defined in [rpc/ExtrinsicStatus.ts:117](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L117)*

*__description__*: Returns the item as a [Future](_rpc_extrinsicstatus_.future.md)

**Returns:** [Future](_rpc_extrinsicstatus_.future.md)

___
<a id="asinvalid"></a>

##  asInvalid

**get asInvalid**(): [Invalid](_rpc_extrinsicstatus_.invalid.md)

*Defined in [rpc/ExtrinsicStatus.ts:126](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L126)*

*__description__*: Returns the item as a [Invalid](_rpc_extrinsicstatus_.invalid.md)

**Returns:** [Invalid](_rpc_extrinsicstatus_.invalid.md)

___
<a id="asready"></a>

##  asReady

**get asReady**(): [Ready](_rpc_extrinsicstatus_.ready.md)

*Defined in [rpc/ExtrinsicStatus.ts:135](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L135)*

*__description__*: Returns the item as a [Ready](_rpc_extrinsicstatus_.ready.md)

**Returns:** [Ready](_rpc_extrinsicstatus_.ready.md)

___
<a id="asusurped"></a>

##  asUsurped

**get asUsurped**(): [Usurped](_rpc_extrinsicstatus_.usurped.md)

*Defined in [rpc/ExtrinsicStatus.ts:144](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L144)*

*__description__*: Returns the item as a [Usurped](_rpc_extrinsicstatus_.usurped.md)

**Returns:** [Usurped](_rpc_extrinsicstatus_.usurped.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isbroadcast"></a>

##  isBroadcast

**get isBroadcast**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:153](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L153)*

*__description__*: Returns true if the status is boadcast

**Returns:** `boolean`

___
<a id="isdropped"></a>

##  isDropped

**get isDropped**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:160](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L160)*

*__description__*: Returns true if the status is dropped

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isfinalized"></a>

##  isFinalized

**get isFinalized**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:167](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L167)*

*__description__*: Returns true if the status is finalized

**Returns:** `boolean`

___
<a id="isfuture"></a>

##  isFuture

**get isFuture**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:174](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L174)*

*__description__*: Returns true if the status is future

**Returns:** `boolean`

___
<a id="isinvalid"></a>

##  isInvalid

**get isInvalid**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:181](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L181)*

*__description__*: Returns true if the status is invalid

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="isready"></a>

##  isReady

**get isReady**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:188](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L188)*

*__description__*: Returns true if the status is eady

**Returns:** `boolean`

___
<a id="isusurped"></a>

##  isUsurped

**get isUsurped**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:195](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/rpc/ExtrinsicStatus.ts#L195)*

*__description__*: Returns true if the status is usurped

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L186)*

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

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L201)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L217)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L224)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:242](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L242)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:252](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L252)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TypesDef` \| `Array`<`string`>*): `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#with)*

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/2d94ac7/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TypesDef` \| `Array`<`string`> |

**Returns:** `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

___

