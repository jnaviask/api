> # External module: "storage/fromMetadata/createFunction"

### Index

#### Interfaces

* [CreateItemFn](../interfaces/_storage_frommetadata_createfunction_.createitemfn.md)
* [CreateItemOptions](../interfaces/_storage_frommetadata_createfunction_.createitemoptions.md)

#### Functions

* [createFunction](_storage_frommetadata_createfunction_.md#createfunction)

## Functions

###  createFunction

▸ **createFunction**(`__namedParameters`: object, `options`: [CreateItemOptions](../interfaces/_storage_frommetadata_createfunction_.createitemoptions.md)): *`StorageEntry`*

*Defined in [storage/fromMetadata/createFunction.ts:34](https://github.com/polkadot-js/api/blob/71c5920/packages/api-metadata/src/storage/fromMetadata/createFunction.ts#L34)*

From the schema of a function in the module's storage, generate the function
that will return the correct storage key.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`__namedParameters` | object | - | - |
`options` | [CreateItemOptions](../interfaces/_storage_frommetadata_createfunction_.createitemoptions.md) |  {} | Additional options when creating the function. These options are not known at runtime (from state_getMetadata), they need to be supplied by us manually at compile time.  |

**Returns:** *`StorageEntry`*