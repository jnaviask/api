> # External module: "codec/createType"

### Index

#### Enumerations

* [TypeDefInfo](../enums/_codec_createtype_.typedefinfo.md)

#### Type aliases

* [TypeDef](_codec_createtype_.md#typedef)
* [TypeDefExtVecFixed](_codec_createtype_.md#typedefextvecfixed)

#### Functions

* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

## Type aliases

###  TypeDef

Ƭ **TypeDef**: *object*

*Defined in [codec/createType.ts:42](https://github.com/polkadot-js/api/blob/ed19ba9/packages/types/src/codec/createType.ts#L42)*

#### Type declaration:

___

###  TypeDefExtVecFixed

Ƭ **TypeDefExtVecFixed**: *object*

*Defined in [codec/createType.ts:37](https://github.com/polkadot-js/api/blob/ed19ba9/packages/types/src/codec/createType.ts#L37)*

#### Type declaration:

___

## Functions

###  createClass

▸ **createClass**(`type`: [Text](../classes/_primitive_text_.text.md) | string): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [codec/createType.ts:258](https://github.com/polkadot-js/api/blob/ed19ba9/packages/types/src/codec/createType.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Text](../classes/_primitive_text_.text.md) \| string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  createType

▸ **createType**(`type`: [Text](../classes/_primitive_text_.text.md) | string, `value?`: any, `isPedantic?`: undefined | false | true): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/createType.ts:287](https://github.com/polkadot-js/api/blob/ed19ba9/packages/types/src/codec/createType.ts#L287)*

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

*Defined in [codec/createType.ts:177](https://github.com/polkadot-js/api/blob/ed19ba9/packages/types/src/codec/createType.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [TypeDef](_codec_createtype_.md#typedef) |
`Fallback?` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*

___

###  getTypeDef

▸ **getTypeDef**(`_type`: [Text](../classes/_primitive_text_.text.md) | string, `name?`: undefined | string): *[TypeDef](_codec_createtype_.md#typedef)*

*Defined in [codec/createType.ts:98](https://github.com/polkadot-js/api/blob/ed19ba9/packages/types/src/codec/createType.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`_type` | [Text](../classes/_primitive_text_.text.md) \| string |
`name?` | undefined \| string |

**Returns:** *[TypeDef](_codec_createtype_.md#typedef)*

___

###  typeSplit

▸ **typeSplit**(`type`: string): *`Array<string>`*

*Defined in [codec/createType.ts:51](https://github.com/polkadot-js/api/blob/ed19ba9/packages/types/src/codec/createType.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *`Array<string>`*

___