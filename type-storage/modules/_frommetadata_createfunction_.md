> # External module: "fromMetadata/createFunction"

### Index

#### Interfaces

* [CreateItemOptions](../interfaces/_frommetadata_createfunction_.createitemoptions.md)

#### Functions

* [createFunction](_frommetadata_createfunction_.md#createfunction)

## Functions

###  createFunction

▸ **createFunction**(`section`: *`Text` | string*, `method`: *`Text` | string*, `meta`: *`StorageEntryMetadata`*, `options`: *[CreateItemOptions](../interfaces/_frommetadata_createfunction_.createitemoptions.md)*): *`StorageEntry`*

*Defined in [fromMetadata/createFunction.ts:27](https://github.com/polkadot-js/api/blob/917168a/packages/type-storage/src/fromMetadata/createFunction.ts#L27)*

From the schema of a function in the module's storage, generate the function
that will return the correct storage key.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`section` | `Text` \| string | - | - |
`method` | `Text` \| string | - | - |
`meta` | `StorageEntryMetadata` | - | - |
`options` | [CreateItemOptions](../interfaces/_frommetadata_createfunction_.createitemoptions.md) |  {} | Additional options when creating the function. These options are not known at runtime (from state_getMetadata), they need to be supplied by us manually at compile time.  |

**Returns:** *`StorageEntry`*