

*__name__*: ExtrinsicStatus

*__description__*: An [EnumType](_codec_enumtype_.enumtype.md) that indicates the status of the [Extrinsic](_type_extrinsic_.extrinsic.md) as been submitted

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[Future](_rpc_extrinsicstatus_.future.md) \| [Ready](_rpc_extrinsicstatus_.ready.md) \| [Finalized](_rpc_extrinsicstatus_.finalized.md) \| [Usurped](_rpc_extrinsicstatus_.usurped.md) \| [Broadcast](_rpc_extrinsicstatus_.broadcast.md) \| [Dropped](_rpc_extrinsicstatus_.dropped.md) \| [Invalid](_rpc_extrinsicstatus_.invalid.md)>

**↳ ExtrinsicStatus**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicStatus**(value: *`any`*, index?: *`undefined` \| `number`*): [ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [rpc/ExtrinsicStatus.ts:74](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L74)*

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

*Defined in [rpc/ExtrinsicStatus.ts:92](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L92)*

*__description__*: Returns the item as a [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

**Returns:** [Broadcast](_rpc_extrinsicstatus_.broadcast.md)

___
<a id="asdropped"></a>

##  asDropped

**get asDropped**(): [Dropped](_rpc_extrinsicstatus_.dropped.md)

*Defined in [rpc/ExtrinsicStatus.ts:101](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L101)*

*__description__*: Returns the item as a [Dropped](_rpc_extrinsicstatus_.dropped.md)

**Returns:** [Dropped](_rpc_extrinsicstatus_.dropped.md)

___
<a id="asfinalized"></a>

##  asFinalized

**get asFinalized**(): [Finalized](_rpc_extrinsicstatus_.finalized.md)

*Defined in [rpc/ExtrinsicStatus.ts:110](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L110)*

*__description__*: Returns the item as a [Finalized](_rpc_extrinsicstatus_.finalized.md)

**Returns:** [Finalized](_rpc_extrinsicstatus_.finalized.md)

___
<a id="asfuture"></a>

##  asFuture

**get asFuture**(): [Future](_rpc_extrinsicstatus_.future.md)

*Defined in [rpc/ExtrinsicStatus.ts:119](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L119)*

*__description__*: Returns the item as a [Future](_rpc_extrinsicstatus_.future.md)

**Returns:** [Future](_rpc_extrinsicstatus_.future.md)

___
<a id="asinvalid"></a>

##  asInvalid

**get asInvalid**(): [Invalid](_rpc_extrinsicstatus_.invalid.md)

*Defined in [rpc/ExtrinsicStatus.ts:128](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L128)*

*__description__*: Returns the item as a [Invalid](_rpc_extrinsicstatus_.invalid.md)

**Returns:** [Invalid](_rpc_extrinsicstatus_.invalid.md)

___
<a id="asready"></a>

##  asReady

**get asReady**(): [Ready](_rpc_extrinsicstatus_.ready.md)

*Defined in [rpc/ExtrinsicStatus.ts:137](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L137)*

*__description__*: Returns the item as a [Ready](_rpc_extrinsicstatus_.ready.md)

**Returns:** [Ready](_rpc_extrinsicstatus_.ready.md)

___
<a id="asusurped"></a>

##  asUsurped

**get asUsurped**(): [Usurped](_rpc_extrinsicstatus_.usurped.md)

*Defined in [rpc/ExtrinsicStatus.ts:146](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L146)*

*__description__*: Returns the item as a [Usurped](_rpc_extrinsicstatus_.usurped.md)

**Returns:** [Usurped](_rpc_extrinsicstatus_.usurped.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:130](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L130)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[index](_codec_enumtype_.enumtype.md#index)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isbroadcast"></a>

##  isBroadcast

**get isBroadcast**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:155](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L155)*

*__description__*: Returns true if the status is boadcast

**Returns:** `boolean`

___
<a id="isdropped"></a>

##  isDropped

**get isDropped**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:162](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L162)*

*__description__*: Returns true if the status is dropped

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isEmpty](_codec_enumtype_.enumtype.md#isempty)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isfinalized"></a>

##  isFinalized

**get isFinalized**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:169](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L169)*

*__description__*: Returns true if the status is finalized

**Returns:** `boolean`

___
<a id="isfuture"></a>

##  isFuture

**get isFuture**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:176](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L176)*

*__description__*: Returns true if the status is future

**Returns:** `boolean`

___
<a id="isinvalid"></a>

##  isInvalid

**get isInvalid**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:183](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L183)*

*__description__*: Returns true if the status is invalid

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="isready"></a>

##  isReady

**get isReady**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:190](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L190)*

*__description__*: Returns true if the status is eady

**Returns:** `boolean`

___
<a id="isusurped"></a>

##  isUsurped

**get isUsurped**(): `boolean`

*Defined in [rpc/ExtrinsicStatus.ts:197](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/rpc/ExtrinsicStatus.ts#L197)*

*__description__*: Returns true if the status is usurped

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L179)*

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

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L192)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L199)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:215](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L215)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:225](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L225)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[with](_codec_enumtype_.enumtype.md#with)*

*Defined in [codec/EnumType.ts:117](https://github.com/polkadot-js/api/blob/5a857a3/packages/types/src/codec/EnumType.ts#L117)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

___

