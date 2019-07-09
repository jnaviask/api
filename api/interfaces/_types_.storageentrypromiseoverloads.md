> # Interface: StorageEntryPromiseOverloads

## Hierarchy

* **StorageEntryPromiseOverloads**

  * [StorageEntryPromise](_types_.storageentrypromise.md)

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/01eaef2/packages/api/src/types.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<T>`*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/01eaef2/packages/api/src/types.ts#L103)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<T>`*

▸ <**T**>(`callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:104](https://github.com/polkadot-js/api/blob/01eaef2/packages/api/src/types.ts#L104)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:105](https://github.com/polkadot-js/api/blob/01eaef2/packages/api/src/types.ts#L105)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: `CodecArg`, `arg2`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/01eaef2/packages/api/src/types.ts#L106)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | `CodecArg` |
`arg2` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*