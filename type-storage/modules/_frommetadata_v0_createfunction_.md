

# Index

### Interfaces

* [CreateItemOptions](../interfaces/_frommetadata_v0_createfunction_.createitemoptions.md)

### Functions

* [createFunction](_frommetadata_v0_createfunction_.md#createfunction)

---

# Functions

<a id="createfunction"></a>

##  createFunction

▸ **createFunction**(section: *`Text` \| `string`*, method: *`Text` \| `string`*, meta: *`StorageFunctionMetadata`*, options?: *[CreateItemOptions](../interfaces/_frommetadata_v0_createfunction_.createitemoptions.md)*): `StorageFunction`

*Defined in [fromMetadata/v0/createFunction.ts:26](https://github.com/polkadot-js/api/blob/4378ed4/packages/type-storage/src/fromMetadata/v0/createFunction.ts#L26)*

From the schema of a function in the module's storage, generate the function that will return the correct storage key.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| section | `Text` \| `string` | - |
| method | `Text` \| `string` | - |
| meta | `StorageFunctionMetadata` | - |
| `Default value` options | [CreateItemOptions](../interfaces/_frommetadata_v0_createfunction_.createitemoptions.md) |  {} |  Additional options when creating the function. These options are not known at runtime (from state\_getMetadata), they need to be supplied by us manually at compile time. |

**Returns:** `StorageFunction`

___

