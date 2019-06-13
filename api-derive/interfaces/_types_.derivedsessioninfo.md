

# Hierarchy

 `StructAny`

**↳ DerivedSessionInfo**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new DerivedSessionInfo**(value?: *`object` \| `null`*): [DerivedSessionInfo](_types_.derivedsessioninfo.md)

*Inherited from StructAny.__constructor*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:19](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `object` \| `null` |

**Returns:** [DerivedSessionInfo](_types_.derivedsessioninfo.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="currentindex"></a>

##  currentIndex

**● currentIndex**: *`BlockNumber`*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L51)*

___
<a id="eralength"></a>

##  eraLength

**● eraLength**: *`BN`*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L52)*

___
<a id="eraprogress"></a>

##  eraProgress

**● eraProgress**: *`BN`*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L53)*

___
<a id="lasteralengthchange"></a>

##  lastEraLengthChange

**● lastEraLengthChange**: *`BlockNumber`*

*Defined in [types.ts:54](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L54)*

___
<a id="lastlengthchange"></a>

##  lastLengthChange

**● lastLengthChange**: *`BN`*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L55)*

___
<a id="sessionlength"></a>

##  sessionLength

**● sessionLength**: *`BlockNumber`*

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L56)*

___
<a id="sessionprogress"></a>

##  sessionProgress

**● sessionProgress**: *`BN`*

*Defined in [types.ts:58](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L58)*

___
<a id="sessionsperera"></a>

##  sessionsPerEra

**● sessionsPerEra**: *`BlockNumber`*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/e4a97d4/packages/api-derive/src/types.ts#L57)*

___
<a id="size"></a>

##  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from StructAny.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:46](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L46)*

*__description__*: Always 0, never encodes as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from StructAny.isEmpty*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:53](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L53)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`string`, `any`]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`string`, `any`]>

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

▸ **delete**(key: *`string`*): `boolean`

*Inherited from Map.delete*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`string`, `any`]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`string`, `any`]>

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Inherited from StructAny.eq*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:60](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L60)*

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

▸ **get**(key: *`string`*): `any` \| `undefined`

*Inherited from Map.get*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `any` \| `undefined`

___
<a id="has"></a>

##  has

▸ **has**(key: *`string`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`string`>

*Inherited from Map.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`string`>

___
<a id="set"></a>

##  set

▸ **set**(key: *`string`*, value: *`any`*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |

**Returns:** `this`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from StructAny.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:67](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L67)*

*__description__*: Unimplemented, will throw

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from StructAny.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:74](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L74)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Inherited from StructAny.toRawType*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:85](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L85)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from StructAny.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:92](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L92)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Inherited from StructAny.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/StructAny.ts:99](https://github.com/polkadot-js/api/blob/e4a97d4/packages/types/src/codec/StructAny.ts#L99)*

*__description__*: Unimplemented, will throw

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<`any`>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<`any`>

___

