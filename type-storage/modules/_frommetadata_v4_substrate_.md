

# Variables

<a id="authoritycount"></a>

## `<Const>` authorityCount

**● authorityCount**: *`StorageFunction`* =  createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
})

*Defined in [fromMetadata/v4/substrate.ts:43](https://github.com/polkadot-js/api/blob/57715c5/packages/type-storage/src/fromMetadata/v4/substrate.ts#L43)*

___
<a id="authorityprefix"></a>

## `<Const>` authorityPrefix

**● authorityPrefix**: *`StorageFunction`* =  createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are stored.',
  type: 'u32'
})

*Defined in [fromMetadata/v4/substrate.ts:48](https://github.com/polkadot-js/api/blob/57715c5/packages/type-storage/src/fromMetadata/v4/substrate.ts#L48)*

___
<a id="changestrieconfig"></a>

## `<Const>` changesTrieConfig

**● changesTrieConfig**: *`StorageFunction`* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [fromMetadata/v4/substrate.ts:58](https://github.com/polkadot-js/api/blob/57715c5/packages/type-storage/src/fromMetadata/v4/substrate.ts#L58)*

___
<a id="code"></a>

## `<Const>` code

**● code**: *`StorageFunction`* =  createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [fromMetadata/v4/substrate.ts:33](https://github.com/polkadot-js/api/blob/57715c5/packages/type-storage/src/fromMetadata/v4/substrate.ts#L33)*

___
<a id="extrinsicindex"></a>

## `<Const>` extrinsicIndex

**● extrinsicIndex**: *`StorageFunction`* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [fromMetadata/v4/substrate.ts:53](https://github.com/polkadot-js/api/blob/57715c5/packages/type-storage/src/fromMetadata/v4/substrate.ts#L53)*

___
<a id="heappages"></a>

## `<Const>` heapPages

**● heapPages**: *`StorageFunction`* =  createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [fromMetadata/v4/substrate.ts:38](https://github.com/polkadot-js/api/blob/57715c5/packages/type-storage/src/fromMetadata/v4/substrate.ts#L38)*

___

