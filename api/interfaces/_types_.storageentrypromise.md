> # Interface: StorageEntryPromise

## Hierarchy

* [StorageEntryPromiseOverloads](_types_.storageentrypromiseoverloads.md)

  * **StorageEntryPromise**

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<T>`*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L103)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<T>`*

▸ <**T**>(`callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:104](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L104)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:105](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L105)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: `CodecArg`, `arg2`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L106)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | `CodecArg` |
`arg2` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

### Index

#### Properties

* [at](_types_.storageentrypromise.md#at)
* [creator](_types_.storageentrypromise.md#creator)
* [hash](_types_.storageentrypromise.md#hash)
* [key](_types_.storageentrypromise.md#key)
* [multi](_types_.storageentrypromise.md#multi)
* [size](_types_.storageentrypromise.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [types.ts:116](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L116)*

#### Type declaration:

▸ (`hash`: `Hash` | `Uint8Array` | string, `arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | `Hash` \| `Uint8Array` \| string |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  creator

• **creator**: *`StorageEntry`*

*Defined in [types.ts:117](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L117)*

___

###  hash

• **hash**: *function*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L118)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Hash>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  key

• **key**: *function*

*Defined in [types.ts:119](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L119)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *string*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  multi

• **multi**: *[StorageEntryPromiseMulti](_types_.storageentrypromisemulti.md)*

*Defined in [types.ts:120](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L120)*

___

###  size

• **size**: *function*

*Defined in [types.ts:121](https://github.com/polkadot-js/api/blob/7772caa/packages/api/src/types.ts#L121)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<U64>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |