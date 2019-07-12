> # External module: "codec/createType"

### Index

#### Enumerations

* [TypeDefInfo](../enums/_codec_createtype_.typedefinfo.md)

#### Type aliases

* [TypeDef](_codec_createtype_.md#typedef)
* [TypeDefExtVecFixed](_codec_createtype_.md#typedefextvecfixed)

#### Functions

* [ClassOf](_codec_createtype_.md#classof)
* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeClassMap](_codec_createtype_.md#gettypeclassmap)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

## Type aliases

###  TypeDef

Ƭ **TypeDef**: *object*

*Defined in [codec/createType.ts:43](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L43)*

#### Type declaration:

___

###  TypeDefExtVecFixed

Ƭ **TypeDefExtVecFixed**: *object*

*Defined in [codec/createType.ts:38](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L38)*

#### Type declaration:

## Functions

###  ClassOf

▸ **ClassOf**(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/createType.ts:267](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  createClass

▸ **createClass**(`type`: [Text](../classes/_primitive_text_.text.md) | string): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/createType.ts:260](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Text](../classes/_primitive_text_.text.md) \| string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  createType

▸ **createType**(`type`: [Text](../classes/_primitive_text_.text.md) | string, `value?`: any, `isPedantic?`: undefined | false | true): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/createType.ts:302](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L302)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Text](../classes/_primitive_text_.text.md) \| string |
`value?` | any |
`isPedantic?` | undefined \| false \| true |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  getTypeClass

▸ **getTypeClass**(`value`: [TypeDef](_codec_createtype_.md#typedef), `Fallback?`: [Constructor](../interfaces/_types_.constructor.md)): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/createType.ts:187](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [TypeDef](_codec_createtype_.md#typedef) |
`Fallback?` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  getTypeClassMap

▸ **getTypeClassMap**(`defs`: `Array<TypeDef>`): *object*

*Defined in [codec/createType.ts:178](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`defs` | `Array<TypeDef>` |

**Returns:** *object*

● \[▪ **index**: *string*\]: [Constructor](../interfaces/_types_.constructor.md)

___

###  getTypeDef

▸ **getTypeDef**(`_type`: [Text](../classes/_primitive_text_.text.md) | string, `name?`: undefined | string): *[TypeDef](_codec_createtype_.md#typedef)*

*Defined in [codec/createType.ts:99](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`_type` | [Text](../classes/_primitive_text_.text.md) \| string |
`name?` | undefined \| string |

**Returns:** *[TypeDef](_codec_createtype_.md#typedef)*

___

###  typeSplit

▸ **typeSplit**(`type`: string): *`Array<string>`*

*Defined in [codec/createType.ts:52](https://github.com/polkadot-js/api/blob/edea20d/packages/types/src/codec/createType.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *`Array<string>`*