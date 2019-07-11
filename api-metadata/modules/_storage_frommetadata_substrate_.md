> # External module: "storage/fromMetadata/substrate"

### Index

#### Variables

* [authorityCount](_storage_frommetadata_substrate_.md#const-authoritycount)
* [authorityPrefix](_storage_frommetadata_substrate_.md#const-authorityprefix)
* [changesTrieConfig](_storage_frommetadata_substrate_.md#const-changestrieconfig)
* [childStorageKeyPrefix](_storage_frommetadata_substrate_.md#const-childstoragekeyprefix)
* [code](_storage_frommetadata_substrate_.md#const-code)
* [extrinsicIndex](_storage_frommetadata_substrate_.md#const-extrinsicindex)
* [heapPages](_storage_frommetadata_substrate_.md#const-heappages)

## Variables

### `Const` authorityCount

• **authorityCount**: *`StorageEntry`* =  createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
})

*Defined in [storage/fromMetadata/substrate.ts:35](https://github.com/polkadot-js/api/blob/eec4ca7/packages/api-metadata/src/storage/fromMetadata/substrate.ts#L35)*

___

### `Const` authorityPrefix

• **authorityPrefix**: *`StorageEntry`* =  createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are stored.',
  type: 'u32'
})

*Defined in [storage/fromMetadata/substrate.ts:40](https://github.com/polkadot-js/api/blob/eec4ca7/packages/api-metadata/src/storage/fromMetadata/substrate.ts#L40)*

___

### `Const` changesTrieConfig

• **changesTrieConfig**: *`StorageEntry`* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [storage/fromMetadata/substrate.ts:60](https://github.com/polkadot-js/api/blob/eec4ca7/packages/api-metadata/src/storage/fromMetadata/substrate.ts#L60)*

___

### `Const` childStorageKeyPrefix

• **childStorageKeyPrefix**: *`StorageEntry`* =  createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
  documentation: 'Prefix of child storage keys.',
  type: 'u32'
})

*Defined in [storage/fromMetadata/substrate.ts:65](https://github.com/polkadot-js/api/blob/eec4ca7/packages/api-metadata/src/storage/fromMetadata/substrate.ts#L65)*

___

### `Const` code

• **code**: *`StorageEntry`* =  createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [storage/fromMetadata/substrate.ts:45](https://github.com/polkadot-js/api/blob/eec4ca7/packages/api-metadata/src/storage/fromMetadata/substrate.ts#L45)*

___

### `Const` extrinsicIndex

• **extrinsicIndex**: *`StorageEntry`* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [storage/fromMetadata/substrate.ts:55](https://github.com/polkadot-js/api/blob/eec4ca7/packages/api-metadata/src/storage/fromMetadata/substrate.ts#L55)*

___

### `Const` heapPages

• **heapPages**: *`StorageEntry`* =  createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [storage/fromMetadata/substrate.ts:50](https://github.com/polkadot-js/api/blob/eec4ca7/packages/api-metadata/src/storage/fromMetadata/substrate.ts#L50)*