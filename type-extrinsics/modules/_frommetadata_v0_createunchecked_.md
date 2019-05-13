

# Functions

<a id="createdescriptor"></a>

##  createDescriptor

▸ **createDescriptor**(section: *`string`*, method: *`string`*, index: *`number`*, meta: *`FunctionMetadata`*): `MethodFunction`

*Defined in [fromMetadata/v0/createUnchecked.ts:16](https://github.com/polkadot-js/api/blob/97032e7/packages/type-extrinsics/src/fromMetadata/v0/createUnchecked.ts#L16)*

From the metadata of a function in the module's storage, generate the function that will return the an UncheckExtrinsic.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| section | `string` |
| method | `string` |
| index | `number` |  Index of the module section in the modules array. |
| meta | `FunctionMetadata` |

**Returns:** `MethodFunction`

___

