

*__name__*: HeaderExtended

*__description__*: A \[\[Block\]\] header with an additional `author` field that indicates the block author

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `Header`

**↳ HeaderExtended**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HeaderExtended**(header?: *`Header` \| `null`*, sessionValidators?: *`Array`<`AccountId`>*): [HeaderExtended](_type_headerextended_.headerextended.md)

*Overrides Header.__constructor*

*Defined in [type/HeaderExtended.ts:13](https://github.com/polkadot-js/api/blob/5f43da0/packages/api-derive/src/type/HeaderExtended.ts#L13)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` header | `Header` \| `null` |  null |
| `Default value` sessionValidators | `Array`<`AccountId`> |  [] |

**Returns:** [HeaderExtended](_type_headerextended_.headerextended.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="size"></a>

##  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:165](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L165)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="author"></a>

##  author

**get author**(): `AccountId` \| `undefined`

*Defined in [type/HeaderExtended.ts:61](https://github.com/polkadot-js/api/blob/5f43da0/packages/api-derive/src/type/HeaderExtended.ts#L61)*

*__description__*: Convenience method, returns the author for the block

**Returns:** `AccountId` \| `undefined`

___
<a id="blocknumber"></a>

##  blockNumber

**get blockNumber**(): `BlockNumber`

*Inherited from Header.blockNumber*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:42](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/rpc/Header.ts#L42)*

*__description__*: The wrapped \[\[BlockNumber\]\]

**Returns:** `BlockNumber`

___
<a id="digest"></a>

##  digest

**get digest**(): `Digest`

*Inherited from Header.digest*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:49](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/rpc/Header.ts#L49)*

*__description__*: The wrapped \[\[Digest\]\]

**Returns:** `Digest`

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from Struct.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:178](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L178)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="extrinsicsroot"></a>

##  extrinsicsRoot

**get extrinsicsRoot**(): `Hash`

*Inherited from Header.extrinsicsRoot*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:56](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/rpc/Header.ts#L56)*

*__description__*: The wrapped extrisics root as a \[\[Hash\]\]

**Returns:** `Hash`

___
<a id="hash"></a>

##  hash

**get hash**(): `Hash`

*Inherited from Header.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:63](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/rpc/Header.ts#L63)*

*__description__*: Convenience method, encodes the header and calculates the \[\[Hash\]\]

**Returns:** `Hash`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from Struct.isEmpty*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L150)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="number"></a>

##  number

**get number**(): `BlockNumber`

*Inherited from Header.number*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:72](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/rpc/Header.ts#L72)*

*__description__*: Alias for `blockNumber` (this is displayed in JSON)

**Returns:** `BlockNumber`

___
<a id="parenthash"></a>

##  parentHash

**get parentHash**(): `Hash`

*Inherited from Header.parentHash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:79](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/rpc/Header.ts#L79)*

*__description__*: The wrapped parent as a \[\[Hash\]\]

**Returns:** `Hash`

___
<a id="stateroot"></a>

##  stateRoot

**get stateRoot**(): `Hash`

*Inherited from Header.stateRoot*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/rpc/Header.ts:86](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/rpc/Header.ts#L86)*

*__description__*: The wrapped state root as a \[\[Hash\]\]

**Returns:** `Hash`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, `Codec`]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Codec`]>

___
<a id="clear"></a>

##  clear

▸ **clear**(): `void`

*Inherited from Map.clear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** `void`

___
<a id="delete"></a>

##  delete

▸ **delete**(key: *`keyof S`*): `boolean`

*Inherited from Map.delete*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`keyof S`, `Codec`]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Codec`]>

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from Struct.eq*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): `Codec` \| `undefined`

*Inherited from Struct.get*

*Overrides Map.get*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L195)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** `Codec` \| `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): `Codec`

*Inherited from Struct.getAtIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L202)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `Codec`

___
<a id="has"></a>

##  has

▸ **has**(key: *`keyof S`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`keyof S`>

*Inherited from Map.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`keyof S`>

___
<a id="set"></a>

##  set

▸ **set**(key: *`keyof S`*, value: *`Codec`*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | `Codec` |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<`Codec`>

*Inherited from Struct.toArray*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L209)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`Codec`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Struct.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L216)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides Struct.toJSON*

*Defined in [type/HeaderExtended.ts:68](https://github.com/polkadot-js/api/blob/5f43da0/packages/api-derive/src/type/HeaderExtended.ts#L68)*

*__description__*: Creates the JSON representation

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Inherited from Struct.toRawType*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L237)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L250)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L258)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<`Codec`>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<`Codec`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/5f43da0/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

