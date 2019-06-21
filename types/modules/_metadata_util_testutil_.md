> # External module: "Metadata/util/testUtil"

### Index

#### Functions

* [decodeLatestSubstrate](_metadata_util_testutil_.md#decodelatestsubstrate)
* [defaultValues](_metadata_util_testutil_.md#defaultvalues)
* [toV5](_metadata_util_testutil_.md#tov5)

## Functions

###  decodeLatestSubstrate

▸ **decodeLatestSubstrate**<**Modules**>(`version`: number, `rpcData`: string, `latestSubstrate`: object): *void*

*Defined in [Metadata/util/testUtil.ts:17](https://github.com/polkadot-js/api/blob/3b8db2e/packages/types/src/Metadata/util/testUtil.ts#L17)*

Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata
should decode `rpcData` and output `latestSubstrate`.

**Type parameters:**

■` Modules`: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |
`latestSubstrate` | object |

**Returns:** *void*

___

###  defaultValues

▸ **defaultValues**(`rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:51](https://github.com/polkadot-js/api/blob/3b8db2e/packages/types/src/Metadata/util/testUtil.ts#L51)*

Given a Metadata, no type should throw when given its fallback value.

**Parameters:**

Name | Type |
------ | ------ |
`rpcData` | string |

**Returns:** *void*

___

###  toV5

▸ **toV5**<**Modules**>(`version`: number, `rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:37](https://github.com/polkadot-js/api/blob/3b8db2e/packages/types/src/Metadata/util/testUtil.ts#L37)*

Given a `version`, MetadataV5 and MetadataV{version} should output the same
unique types.

**Type parameters:**

■` Modules`: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |

**Returns:** *void*

___