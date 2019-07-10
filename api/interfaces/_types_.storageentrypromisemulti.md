> # Interface: StorageEntryPromiseMulti

## Hierarchy

* **StorageEntryPromiseMulti**

## Callable

▸ <**T**>(`args`: `Array<CodecArg[] | CodecArg>`): *`Promise<Array<T>>`*

*Defined in [types.ts:110](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/types.ts#L110)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`args` | `Array<CodecArg[] \| CodecArg>` |

**Returns:** *`Promise<Array<T>>`*

▸ <**T**>(`args`: `Array<CodecArg[] | CodecArg>`, `callback`: `Callback<Array<T>>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/types.ts#L111)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`args` | `Array<CodecArg[] \| CodecArg>` |
`callback` | `Callback<Array<T>>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*