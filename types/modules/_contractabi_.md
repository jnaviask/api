

# Index

### Classes

* [ContractAbi](../classes/_contractabi_.contractabi.md)

### Interfaces

* [Contract](../interfaces/_contractabi_.contract.md)
* [ContractABIFn](../interfaces/_contractabi_.contractabifn.md)
* [ContractABIFn$Arg](../interfaces/_contractabi_.contractabifn_arg.md)

### Type aliases

* [ContractABI](_contractabi_.md#contractabi-1)
* [ContractABIArg](_contractabi_.md#contractabiarg)
* [ContractABIMethod](_contractabi_.md#contractabimethod)
* [ContractABIMethodBase](_contractabi_.md#contractabimethodbase)
* [ContractABITypes](_contractabi_.md#contractabitypes)
* [ContractABITypes$Struct](_contractabi_.md#contractabitypes_struct)

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

*Defined in [ContractAbi.ts:47](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L47)*

#### Type declaration

___
<a id="contractabiarg"></a>

##  ContractABIArg

**Ƭ ContractABIArg**: *`object`*

*Defined in [ContractAbi.ts:31](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L31)*

#### Type declaration

___
<a id="contractabimethod"></a>

##  ContractABIMethod

**Ƭ ContractABIMethod**: *[ContractABIMethodBase](_contractabi_.md#contractabimethodbase) & `object`*

*Defined in [ContractAbi.ts:40](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L40)*

___
<a id="contractabimethodbase"></a>

##  ContractABIMethodBase

**Ƭ ContractABIMethodBase**: *`object`*

*Defined in [ContractAbi.ts:36](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L36)*

#### Type declaration

___
<a id="contractabitypes"></a>

##  ContractABITypes

**Ƭ ContractABITypes**: *`string` \| [ContractABITypes$Struct](_contractabi_.md#contractabitypes_struct) \| `Array`<`string` \| [ContractABITypes$Struct](_contractabi_.md#contractabitypes_struct)>*

*Defined in [ContractAbi.ts:29](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L29)*

___
<a id="contractabitypes_struct"></a>

##  ContractABITypes$Struct

**Ƭ ContractABITypes$Struct**: *`object`*

*Defined in [ContractAbi.ts:12](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L12)*

#### Type declaration

___

# Functions

<a id="validateabi"></a>

##  validateAbi

▸ **validateAbi**(abi: *[ContractABI](_contractabi_.md#contractabi-1)*): `void`

*Defined in [ContractAbi.ts:106](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L106)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| abi | [ContractABI](_contractabi_.md#contractabi-1) |

**Returns:** `void`

___
<a id="validateargs"></a>

##  validateArgs

▸ **validateArgs**(name: *`string`*, args: *`Array`<[ContractABIArg](_contractabi_.md#contractabiarg)>*): `void`

*Defined in [ContractAbi.ts:73](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L73)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| args | `Array`<[ContractABIArg](_contractabi_.md#contractabiarg)> |

**Returns:** `void`

___
<a id="validatedeploy"></a>

##  validateDeploy

▸ **validateDeploy**(__namedParameters: *`object`*): `void`

*Defined in [ContractAbi.ts:85](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `void`

___
<a id="validatemethods"></a>

##  validateMethods

▸ **validateMethods**(__namedParameters: *`object`*): `void`

*Defined in [ContractAbi.ts:93](https://github.com/polkadot-js/api/blob/5533b1b/packages/types/src/ContractAbi.ts#L93)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `void`

___

