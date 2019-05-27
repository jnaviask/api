

*__name__*: Set

*__description__*: An Set is an array of string values, represented an an encoded type by a bitwise representation of the values.

# Hierarchy

 `Set`<`string`>

**↳ CodecSet**

↳  [WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new CodecSet**(setValues: *`SetValues`*, value?: *`Array`<`string`> \| `Set`<`string`> \| `Uint8Array` \| `number`*): [CodecSet](_codec_set_.codecset.md)

*Defined in [codec/Set.ts:22](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | `SetValues` |
| `Optional` value | `Array`<`string`> \| `Set`<`string`> \| `Uint8Array` \| `number` |

**Returns:** [CodecSet](_codec_set_.codecset.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Set.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138*

___
<a id="size"></a>

##  size

**● size**: *`number`*

*Inherited from Set.size*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:64*

___
<a id="set"></a>

## `<Static>` Set

**● Set**: *`SetConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:71*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Defined in [codec/Set.ts:73](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L73)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Defined in [codec/Set.ts:80](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L80)*

*__description__*: true is the Set contains no values

**Returns:** `boolean`

___
<a id="strings"></a>

##  strings

**get strings**(): `Array`<`string`>

*Defined in [codec/Set.ts:87](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L87)*

*__description__*: The actual set values as a Array

**Returns:** `Array`<`string`>

___
<a id="valueencoded"></a>

##  valueEncoded

**get valueEncoded**(): `number`

*Defined in [codec/Set.ts:94](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L94)*

*__description__*: The encoded value for the set members

**Returns:** `number`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<`string`>

*Inherited from Set.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:163*

Iterates over values in the set.

**Returns:** `IterableIterator`<`string`>

___
<a id="add"></a>

##  add

▸ **add**(key: *`string`*): `this`

*Overrides Set.add*

*Defined in [codec/Set.ts:101](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L101)*

*__description__*: adds a value to the Set (extended to allow for validity checking)

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `this`

___
<a id="clear"></a>

##  clear

▸ **clear**(): `void`

*Inherited from Set.clear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:60*

**Returns:** `void`

___
<a id="delete"></a>

##  delete

▸ **delete**(value: *`string`*): `boolean`

*Inherited from Set.delete*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]>

*Inherited from Set.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:167*

Returns an iterable of \[v,v\] pairs for every value `v` in the set.

**Returns:** `IterableIterator`<[`string`, `string`]>

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/Set.ts:114](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L114)*

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

*Inherited from Set.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="has"></a>

##  has

▸ **has**(value: *`string`*): `boolean`

*Inherited from Set.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `boolean`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`string`>

*Inherited from Set.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:171*

Despite its name, returns an iterable of the values in the set,

**Returns:** `IterableIterator`<`string`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/Set.ts:130](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L130)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Set.ts:137](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L137)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Set.ts:144](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L144)*

*__description__*: The encoded value for the set members

**Returns:** `number`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Defined in [codec/Set.ts:151](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L151)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Set.ts:163](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L163)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Set.ts:171](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L171)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<`string`>

*Inherited from Set.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:176*

Returns an iterable of values in the set.

**Returns:** `IterableIterator`<`string`>

___
<a id="decodeset"></a>

## `<Static>` decodeSet

▸ **decodeSet**(setValues: *`SetValues`*, value?: *`Array`<`string`> \| `Set`<`string`> \| `Uint8Array` \| `number`*): `Array`<`string`>

*Defined in [codec/Set.ts:32](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L32)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| setValues | `SetValues` | - |
| `Default value` value | `Array`<`string`> \| `Set`<`string`> \| `Uint8Array` \| `number` | 0 |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

## `<Static>` encodeSet

▸ **encodeSet**(setValues: *`SetValues`*, value: *`Array`<`string`>*): `number`

*Defined in [codec/Set.ts:64](https://github.com/polkadot-js/api/blob/c916da6/packages/types/src/codec/Set.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | `SetValues` |
| value | `Array`<`string`> |

**Returns:** `number`

___

