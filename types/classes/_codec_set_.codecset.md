> # Class: CodecSet

**`name`** Set

**`description`** 
An Set is an array of string values, represented an an encoded type by
a bitwise representation of the values.

## Hierarchy

* `Set<string>`

  * **CodecSet**

  * [WithdrawReasons](_type_withdrawreasons_.withdrawreasons.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_codec_set_.codecset.md#constructor)

#### Properties

* [__@toStringTag](_codec_set_.codecset.md#__@tostringtag)
* [size](_codec_set_.codecset.md#size)
* [Set](_codec_set_.codecset.md#static-set)

#### Accessors

* [encodedLength](_codec_set_.codecset.md#encodedlength)
* [isEmpty](_codec_set_.codecset.md#isempty)
* [strings](_codec_set_.codecset.md#strings)
* [valueEncoded](_codec_set_.codecset.md#valueencoded)

#### Methods

* [__@iterator](_codec_set_.codecset.md#__@iterator)
* [add](_codec_set_.codecset.md#add)
* [clear](_codec_set_.codecset.md#clear)
* [delete](_codec_set_.codecset.md#delete)
* [entries](_codec_set_.codecset.md#entries)
* [eq](_codec_set_.codecset.md#eq)
* [forEach](_codec_set_.codecset.md#foreach)
* [has](_codec_set_.codecset.md#has)
* [keys](_codec_set_.codecset.md#keys)
* [toHex](_codec_set_.codecset.md#tohex)
* [toJSON](_codec_set_.codecset.md#tojson)
* [toNumber](_codec_set_.codecset.md#tonumber)
* [toRawType](_codec_set_.codecset.md#torawtype)
* [toString](_codec_set_.codecset.md#tostring)
* [toU8a](_codec_set_.codecset.md#tou8a)
* [values](_codec_set_.codecset.md#values)
* [decodeSet](_codec_set_.codecset.md#static-decodeset)
* [encodeSet](_codec_set_.codecset.md#static-encodeset)

## Constructors

###  constructor

\+ **new CodecSet**(`setValues`: `SetValues`, `value?`: `Array<string>` | `Set<string>` | `Uint8Array` | number): *[CodecSet](_codec_set_.codecset.md)*

*Defined in [codec/Set.ts:22](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | `SetValues` |
`value?` | `Array<string>` \| `Set<string>` \| `Uint8Array` \| number |

**Returns:** *[CodecSet](_codec_set_.codecset.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:64

___

### `Static` Set

▪ **Set**: *`SetConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:71

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/Set.ts:73](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/Set.ts:80](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L80)*

**`description`** true is the Set contains no values

**Returns:** *boolean*

___

###  strings

• **get strings**(): *`Array<string>`*

*Defined in [codec/Set.ts:87](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L87)*

**`description`** The actual set values as a Array<string>

**Returns:** *`Array<string>`*

___

###  valueEncoded

• **get valueEncoded**(): *number*

*Defined in [codec/Set.ts:94](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L94)*

**`description`** The encoded value for the set members

**Returns:** *number*

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<string>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:163

Iterates over values in the set.

**Returns:** *`IterableIterator<string>`*

___

###  add

▸ **add**(`key`: string): *this*

*Overrides void*

*Defined in [codec/Set.ts:101](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L101)*

**`description`** adds a value to the Set (extended to allow for validity checking)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: string): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *`IterableIterator<[string, string]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:167

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *`IterableIterator<[string, string]>`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Set.ts:114](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L114)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: string, `value2`: string, `set`: `Set<string>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`value2` | string |
`set` | `Set<string>` |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: string): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *`IterableIterator<string>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Despite its name, returns an iterable of the values in the set,

**Returns:** *`IterableIterator<string>`*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/Set.ts:130](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L130)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string[]*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Set.ts:137](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L137)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string[]*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [codec/Set.ts:144](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L144)*

**`description`** The encoded value for the set members

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Set.ts:151](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L151)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Set.ts:159](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L159)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Set.ts:167](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L167)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  values

▸ **values**(): *`IterableIterator<string>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:176

Returns an iterable of values in the set.

**Returns:** *`IterableIterator<string>`*

___

### `Static` decodeSet

▸ **decodeSet**(`setValues`: `SetValues`, `value`: `Array<string>` | `Set<string>` | `Uint8Array` | number): *`Array<string>`*

*Defined in [codec/Set.ts:32](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`setValues` | `SetValues` | - |
`value` | `Array<string>` \| `Set<string>` \| `Uint8Array` \| number | 0 |

**Returns:** *`Array<string>`*

___

### `Static` encodeSet

▸ **encodeSet**(`setValues`: `SetValues`, `value`: `Array<string>`): *number*

*Defined in [codec/Set.ts:64](https://github.com/polkadot-js/api/blob/557699e/packages/types/src/codec/Set.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | `SetValues` |
`value` | `Array<string>` |

**Returns:** *number*