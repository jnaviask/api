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

■ **defaultRegistry**: *[TypeRegistry](_codec_typeregistry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/typeRegistry.ts:11](url)*

___

## Methods

###  get

▸ **get**(`name`: string): *[Constructor](../interfaces/_types_.constructor.md) | undefined*

*Defined in [codec/typeRegistry.ts:48](url)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md) | undefined*

___

###  getOrThrow

▸ **getOrThrow**(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/typeRegistry.ts:52](url)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined \| string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Defined in [codec/typeRegistry.ts:15](url)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) \| [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Defined in [codec/typeRegistry.ts:16](url)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *void*

___