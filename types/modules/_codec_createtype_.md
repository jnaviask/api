

# Index

### Enumerations

* [TypeDefInfo](../enums/_codec_createtype_.typedefinfo.md)

### Type aliases

* [TypeDef](_codec_createtype_.md#typedef)

### Functions

* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

---

# Type aliases

<a id="typedef"></a>

##  TypeDef

**Ƭ TypeDef**: *`object`*

*Defined in [codec/createType.ts:30](https://github.com/polkadot-js/api/blob/8e6c5f6/packages/types/src/codec/createType.ts#L30)*

#### Type declaration

___

# Functions

<a id="createclass"></a>

##  createClass

▸ **createClass**(type: *[Text](../classes/_primitive_text_.text.md) \| `string`*): [Constructor](../interfaces/_types_.constructor.md)

*Defined in [codec/createType.ts:206](https://github.com/polkadot-js/api/blob/8e6c5f6/packages/types/src/codec/createType.ts#L206)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Text](../classes/_primitive_text_.text.md) \| `string` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)

___
<a id="createtype"></a>

##  createType

▸ **createType**(type: *[Text](../classes/_primitive_text_.text.md) \| `string`*, value?: *`any`*): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/createType.ts:212](https://github.com/polkadot-js/api/blob/8e6c5f6/packages/types/src/codec/createType.ts#L212)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Text](../classes/_primitive_text_.text.md) \| `string` |
| `Optional` value | `any` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="gettypeclass"></a>

##  getTypeClass

▸ **getTypeClass**(value: *[TypeDef](_codec_createtype_.md#typedef)*): [Constructor](../interfaces/_types_.constructor.md)

*Defined in [codec/createType.ts:144](https://github.com/polkadot-js/api/blob/8e6c5f6/packages/types/src/codec/createType.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [TypeDef](_codec_createtype_.md#typedef) |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)

___
<a id="gettypedef"></a>

##  getTypeDef

▸ **getTypeDef**(_type: *[Text](../classes/_primitive_text_.text.md) \| `string`*, name?: *`undefined` \| `string`*): [TypeDef](_codec_createtype_.md#typedef)

*Defined in [codec/createType.ts:86](https://github.com/polkadot-js/api/blob/8e6c5f6/packages/types/src/codec/createType.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _type | [Text](../classes/_primitive_text_.text.md) \| `string` |
| `Optional` name | `undefined` \| `string` |

**Returns:** [TypeDef](_codec_createtype_.md#typedef)

___
<a id="typesplit"></a>

##  typeSplit

▸ **typeSplit**(type: *`string`*): `Array`<`string`>

*Defined in [codec/createType.ts:38](https://github.com/polkadot-js/api/blob/8e6c5f6/packages/types/src/codec/createType.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `Array`<`string`>

___

