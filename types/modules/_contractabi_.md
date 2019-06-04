

# Index

### Classes

* [ContractAbi](../classes/_contractabi_.contractabi.md)

### Interfaces

* [Contract](../interfaces/_contractabi_.contract.md)
* [ContractABIFn](../interfaces/_contractabi_.contractabifn.md)

### Type aliases

* [ContractABI](_contractabi_.md#contractabi-1)
* [ContractABIArgs](_contractabi_.md#contractabiargs)
* [ContractABIMethod](_contractabi_.md#contractabimethod)
* [ContractABIMethodBase](_contractabi_.md#contractabimethodbase)

### Functions

* [validateAbi](_contractabi_.md#validateabi)
* [validateArgs](_contractabi_.md#validateargs)
* [validateDeploy](_contractabi_.md#validatedeploy)
* [validateMethods](_contractabi_.md#validatemethods)

---

# Type aliases

<a id="contractabi-1"></a>

##  ContractABI

**Ƭ ContractABI**: *`object`*

*Defined in [ContractAbi.ts:28](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L28)*

#### Type declaration

___
<a id="contractabiargs"></a>

##  ContractABIArgs

**Ƭ ContractABIArgs**: *`Array`<`object`>*

*Defined in [ContractAbi.ts:12](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L12)*

___
<a id="contractabimethod"></a>

##  ContractABIMethod

**Ƭ ContractABIMethod**: *[ContractABIMethodBase](_contractabi_.md#contractabimethodbase) & `object`*

*Defined in [ContractAbi.ts:21](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L21)*

___
<a id="contractabimethodbase"></a>

##  ContractABIMethodBase

**Ƭ ContractABIMethodBase**: *`object`*

*Defined in [ContractAbi.ts:17](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L17)*

#### Type declaration

___

# Functions

<a id="validateabi"></a>

##  validateAbi

▸ **validateAbi**(abi: *[ContractABI](_contractabi_.md#contractabi-1)*): `void`

*Defined in [ContractAbi.ts:79](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| abi | [ContractABI](_contractabi_.md#contractabi-1) |

**Returns:** `void`

___
<a id="validateargs"></a>

##  validateArgs

▸ **validateArgs**(name: *`string`*, args: *[ContractABIArgs](_contractabi_.md#contractabiargs)*): `void`

*Defined in [ContractAbi.ts:49](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| args | [ContractABIArgs](_contractabi_.md#contractabiargs) |

**Returns:** `void`

___
<a id="validatedeploy"></a>

##  validateDeploy

▸ **validateDeploy**(__namedParameters: *`object`*): `void`

*Defined in [ContractAbi.ts:60](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `void`

___
<a id="validatemethods"></a>

##  validateMethods

▸ **validateMethods**(__namedParameters: *`object`*): `void`

*Defined in [ContractAbi.ts:68](https://github.com/polkadot-js/api/blob/ca8da1f/packages/types/src/ContractAbi.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `void`

___

