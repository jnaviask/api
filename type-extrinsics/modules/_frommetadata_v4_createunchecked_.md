

# Functions

<a id="createdescriptor"></a>

##  createDescriptor

▸ **createDescriptor**(section: *`string`*, method: *`string`*, indexCount: *`number`*, meta: *`MetadataCall`*, index: *`number`*): `MethodFunction`

*Defined in [fromMetadata/v4/createUnchecked.ts:16](https://github.com/polkadot-js/api/blob/8502396/packages/type-extrinsics/src/fromMetadata/v4/createUnchecked.ts#L16)*

From the metadata of a function in the module's storage, generate the function that will return the an UncheckExtrinsic.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| section | `string` |
| method | `string` |
| indexCount | `number` |
| meta | `MetadataCall` |
| index | `number` |  Index of the module section in the modules array. |

**Returns:** `MethodFunction`

___

