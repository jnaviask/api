> # Interface: StorageFunctionObservable

## Hierarchy

* **StorageFunctionObservable**

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Codec>`*

*Defined in [types.ts:90](url)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Observable<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<T>`*

*Defined in [types.ts:91](url)*

**Type parameters:**

■` T`: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Observable<T>`*

### Index

#### Properties

* [at](_types_.storagefunctionobservable.md#at)
* [creator](_types_.storagefunctionobservable.md#creator)
* [hash](_types_.storagefunctionobservable.md#hash)
* [key](_types_.storagefunctionobservable.md#key)
* [multi](_types_.storagefunctionobservable.md#multi)
* [size](_types_.storagefunctionobservable.md#size)

## Properties

###  at

● **at**: *function*

*Defined in [types.ts:93](url)*

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

● **creator**: *`StorageFunction`*

*Defined in [types.ts:94](url)*

___

###  hash

● **hash**: *function*

*Defined in [types.ts:95](url)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Hash>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  key

● **key**: *function*

*Defined in [types.ts:96](url)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *string*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  multi

● **multi**: *function*

*Defined in [types.ts:97](url)*

#### Type declaration:

▸ (`args`: `Array<CodecArg[] | CodecArg>`): *`Observable<Codec>`*

**Parameters:**

Name | Type |
------ | ------ |
`args` | `Array<CodecArg[] \| CodecArg>` |

___

###  size

● **size**: *function*

*Defined in [types.ts:98](url)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<U64>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___