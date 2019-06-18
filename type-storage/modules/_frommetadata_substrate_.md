> # External module: "fromMetadata/substrate"

### Index

#### Variables

* [authorityCount](_frommetadata_substrate_.md#const-authoritycount)
* [authorityPrefix](_frommetadata_substrate_.md#const-authorityprefix)
* [changesTrieConfig](_frommetadata_substrate_.md#const-changestrieconfig)
* [code](_frommetadata_substrate_.md#const-code)
* [extrinsicIndex](_frommetadata_substrate_.md#const-extrinsicindex)
* [heapPages](_frommetadata_substrate_.md#const-heappages)

## Variables

### `Const` authorityCount

● **authorityCount**: *`StorageFunction`* =  createRuntimeFunction('authorityCount', ':auth:len', {
documentation: 'Number of authorities.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:43](url)*

___

### `Const` authorityPrefix

● **authorityPrefix**: *`StorageFunction`* =  createRuntimeFunction('authorityPrefix', ':auth:', {
documentation: 'Prefix under which authorities are stored.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:48](url)*

___

### `Const` changesTrieConfig

● **changesTrieConfig**: *`StorageFunction`* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
documentation: 'Changes trie configuration is stored under this key.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:58](url)*

___

### `Const` code

● **code**: *`StorageFunction`* =  createRuntimeFunction('code', ':code', {
documentation: 'Wasm code of the runtime.',
type: 'Bytes'
})

*Defined in [fromMetadata/substrate.ts:33](url)*

___

### `Const` extrinsicIndex

● **extrinsicIndex**: *`StorageFunction`* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
documentation: 'Current extrinsic index (u32) is stored under this key.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:53](url)*

___

### `Const` heapPages

● **heapPages**: *`StorageFunction`* =  createRuntimeFunction('heapPages', ':heappages', {
documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
type: 'u64'
})

*Defined in [fromMetadata/substrate.ts:38](url)*

___