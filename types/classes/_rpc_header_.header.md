

*__name__*: Header

*__description__*: A [Block](_rpc_block_.block.md) header

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Header**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Header**(value?: *[HeaderValue](../modules/_rpc_header_.md#headervalue) \| `Uint8Array` \| `null`*): [Header](_rpc_header_.header.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [rpc/Header.ts:28](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [HeaderValue](../modules/_rpc_header_.md#headervalue) \| `Uint8Array` \| `null` |

**Returns:** [Header](_rpc_header_.header.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:165](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L165)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="blocknumber"></a>

##  blockNumber

**get blockNumber**(): [BlockNumber](_type_blocknumber_.blocknumber.md)

*Defined in [rpc/Header.ts:42](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L42)*

*__description__*: The wrapped [BlockNumber](_type_blocknumber_.blocknumber.md)

**Returns:** [BlockNumber](_type_blocknumber_.blocknumber.md)

___
<a id="digest"></a>

##  digest

**get digest**(): [Digest](_rpc_digest_.digest.md)

*Defined in [rpc/Header.ts:49](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L49)*

*__description__*: The wrapped [Digest](_rpc_digest_.digest.md)

**Returns:** [Digest](_rpc_digest_.digest.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:178](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L178)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="extrinsicsroot"></a>

##  extrinsicsRoot

**get extrinsicsRoot**(): [Hash](_primitive_hash_.hash.md)

*Defined in [rpc/Header.ts:56](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L56)*

*__description__*: The wrapped extrisics root as a [Hash](_primitive_hash_.hash.md)

**Returns:** [Hash](_primitive_hash_.hash.md)

___
<a id="hash"></a>

##  hash

**get hash**(): [Hash](_primitive_hash_.hash.md)

*Defined in [rpc/Header.ts:63](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L63)*

*__description__*: Convenience method, encodes the header and calculates the [Hash](_primitive_hash_.hash.md)

**Returns:** [Hash](_primitive_hash_.hash.md)

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L150)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="number"></a>

##  number

**get number**(): [BlockNumber](_type_blocknumber_.blocknumber.md)

*Defined in [rpc/Header.ts:72](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L72)*

*__description__*: Alias for `blockNumber` (this is displayed in JSON)

**Returns:** [BlockNumber](_type_blocknumber_.blocknumber.md)

___
<a id="parenthash"></a>

##  parentHash

**get parentHash**(): [Hash](_primitive_hash_.hash.md)

*Defined in [rpc/Header.ts:79](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L79)*

*__description__*: The wrapped parent as a [Hash](_primitive_hash_.hash.md)

**Returns:** [Hash](_primitive_hash_.hash.md)

___
<a id="stateroot"></a>

##  stateRoot

**get stateRoot**(): [Hash](_primitive_hash_.hash.md)

*Defined in [rpc/Header.ts:86](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/rpc/Header.ts#L86)*

*__description__*: The wrapped state root as a [Hash](_primitive_hash_.hash.md)

**Returns:** [Hash](_primitive_hash_.hash.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L209)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L216)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L223)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L237)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L250)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L258)*

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

*Defined in [codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/07ef3be/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

