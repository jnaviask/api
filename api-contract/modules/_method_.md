> # External module: "method"

### Index

#### Functions

* [createArgClass](_method_.md#createargclass)
* [createMethod](_method_.md#createmethod)
* [typeToString](_method_.md#typetostring)

## Functions

###  createArgClass

▸ **createArgClass**(`args`: `Array<ContractABIFn$Arg>`, `baseDef`: object): *`Constructor`*

*Defined in [method.ts:29](https://github.com/polkadot-js/api/blob/6b0ad95/packages/api-contract/src/method.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | `Array<ContractABIFn$Arg>` |
`baseDef` | object |

**Returns:** *`Constructor`*

___

###  createMethod

▸ **createMethod**(`name`: string, `method`: `Partial<ContractABIMethod>` & [ContractABIMethodBase](_types_.md#contractabimethodbase)): *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

*Defined in [method.ts:41](https://github.com/polkadot-js/api/blob/6b0ad95/packages/api-contract/src/method.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`method` | `Partial<ContractABIMethod>` & [ContractABIMethodBase](_types_.md#contractabimethodbase) |

**Returns:** *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

___

###  typeToString

▸ **typeToString**(`type`: [ContractABITypes](_types_.md#contractabitypes)): *string*

*Defined in [method.ts:11](https://github.com/polkadot-js/api/blob/6b0ad95/packages/api-contract/src/method.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ContractABITypes](_types_.md#contractabitypes) |

**Returns:** *string*