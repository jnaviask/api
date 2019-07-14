> # Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

### Index

#### Properties

* [defaultRegistry](_codec_typeregistry_.typeregistry.md#static-defaultregistry)

#### Methods

* [get](_codec_typeregistry_.typeregistry.md#get)
* [getOrThrow](_codec_typeregistry_.typeregistry.md#getorthrow)
* [register](_codec_typeregistry_.typeregistry.md#register)

## Properties

### `Static` defaultRegistry

▪ **defaultRegistry**: *[TypeRegistry](_codec_typeregistry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/typeRegistry.ts:11](https://github.com/polkadot-js/api/blob/71c5920/packages/types/src/codec/typeRegistry.ts#L11)*

## Methods

###  get

▸ **get**(`name`: string): *[Constructor](../interfaces/_types_.constructor.md) | undefined*

*Defined in [codec/typeRegistry.ts:52](https://github.com/polkadot-js/api/blob/71c5920/packages/types/src/codec/typeRegistry.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md) | undefined*

___

###  getOrThrow

▸ **getOrThrow**(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/typeRegistry.ts:56](https://github.com/polkadot-js/api/blob/71c5920/packages/types/src/codec/typeRegistry.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined \| string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Defined in [codec/typeRegistry.ts:15](https://github.com/polkadot-js/api/blob/71c5920/packages/types/src/codec/typeRegistry.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) \| [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Defined in [codec/typeRegistry.ts:18](https://github.com/polkadot-js/api/blob/71c5920/packages/types/src/codec/typeRegistry.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *void*