> # Interface: StorageEntryObservable

## Hierarchy

* **StorageEntryObservable**

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Codec>`*

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Observable<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<T>`*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L92)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Observable<T>`*

### Index

#### Properties

* [at](_types_.storageentryobservable.md#at)
* [creator](_types_.storageentryobservable.md#creator)
* [hash](_types_.storageentryobservable.md#hash)
* [key](_types_.storageentryobservable.md#key)
* [multi](_types_.storageentryobservable.md#multi)
* [size](_types_.storageentryobservable.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [types.ts:94](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L94)*

#### Type declaration:

▸ (`hash`: `Hash` | `Uint8Array` | string, `arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Codec>`*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | `Hash` \| `Uint8Array` \| string |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  creator

• **creator**: *`StorageEntry`*

*Defined in [types.ts:95](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L95)*

___

###  hash

• **hash**: *function*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L96)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Hash>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  key

• **key**: *function*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L97)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *string*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  multi

• **multi**: *function*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L98)*

#### Type declaration:

▸ (`args`: `Array<CodecArg[] | CodecArg>`): *`Observable<Codec>`*

**Parameters:**

Name | Type |
------ | ------ |
`args` | `Array<CodecArg[] \| CodecArg>` |

___

###  size

• **size**: *function*

*Defined in [types.ts:99](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L99)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<U64>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |