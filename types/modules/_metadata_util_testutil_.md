

# Functions

<a id="decodelatestsubstrate"></a>

##  decodeLatestSubstrate

▸ **decodeLatestSubstrate**<`Modules`>(version: *`number`*, rpcData: *`string`*, latestSubstrate: *`object`*): `void`

*Defined in [Metadata/util/testUtil.ts:17](https://github.com/polkadot-js/api/blob/4a22a43/packages/types/src/Metadata/util/testUtil.ts#L17)*

Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata should decode `rpcData` and output `latestSubstrate`.

**Type parameters:**

#### Modules :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| version | `number` |
| rpcData | `string` |
| latestSubstrate | `object` |

**Returns:** `void`

___
<a id="defaultvalues"></a>

##  defaultValues

▸ **defaultValues**(rpcData: *`string`*): `void`

*Defined in [Metadata/util/testUtil.ts:51](https://github.com/polkadot-js/api/blob/4a22a43/packages/types/src/Metadata/util/testUtil.ts#L51)*

Given a Metadata, no type should throw when given its fallback value.

**Parameters:**

| Name | Type |
| ------ | ------ |
| rpcData | `string` |

**Returns:** `void`

___
<a id="tov5"></a>

##  toV5

▸ **toV5**<`Modules`>(version: *`number`*, rpcData: *`string`*): `void`

*Defined in [Metadata/util/testUtil.ts:37](https://github.com/polkadot-js/api/blob/4a22a43/packages/types/src/Metadata/util/testUtil.ts#L37)*

Given a `version`, MetadataV5 and MetadataV{version} should output the same unique types.

**Type parameters:**

#### Modules :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| version | `number` |
| rpcData | `string` |

**Returns:** `void`

___

