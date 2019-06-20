> # Interface: StorageFunctionPromise

## Hierarchy

* [StorageFunctionPromiseOverloads](_types_.storagefunctionpromiseoverloads.md)

  * **StorageFunctionPromise**

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

*Defined in [types.ts:101](url)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<T>`*

*Defined in [types.ts:102](url)*

**Type parameters:**

■` T`: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<T>`*

▸ <**T**>(`callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:103](url)*

**Type parameters:**

■` T`: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:104](url)*

**Type parameters:**

■` T`: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: `CodecArg`, `arg2`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:105](url)*

**Type parameters:**

■` T`: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | `CodecArg` |
`arg2` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

### Index

#### Properties

* [at](_types_.storagefunctionpromise.md#at)
* [creator](_types_.storagefunctionpromise.md#creator)
* [hash](_types_.storagefunctionpromise.md#hash)
* [key](_types_.storagefunctionpromise.md#key)
* [multi](_types_.storagefunctionpromise.md#multi)
* [size](_types_.storagefunctionpromise.md#size)

## Properties

###  at

● **at**: *function*

*Defined in [types.ts:110](url)*

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

● **creator**: *`StorageFunction`*

*Defined in [types.ts:111](url)*

___

###  hash

● **hash**: *function*

*Defined in [types.ts:112](url)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Hash>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  key

● **key**: *function*

*Defined in [types.ts:113](url)*

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

*Defined in [types.ts:114](url)*

#### Type declaration:

▸ <**T**>(`args`: `Array<CodecArg[] | CodecArg>`, `callback?`: `Callback<Array<T>>`): *`Promise<Array<T>>`*

**Type parameters:**

■` T`: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`args` | `Array<CodecArg[] \| CodecArg>` |
`callback?` | `Callback<Array<T>>` |

___

###  size

● **size**: *function*

*Defined in [types.ts:115](url)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<U64>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___