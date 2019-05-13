

# Index

### Interfaces

* [ArgsDef](../interfaces/_types_.argsdef.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)
* [IHash](../interfaces/_types_.ihash.md)
* [IMethod](../interfaces/_types_.imethod.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)

### Type aliases

* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [CodecArg](_types_.md#codecarg)
* [CodecCallback](_types_.md#codeccallback)
* [CodecTo](_types_.md#codecto)
* [ConstructorDef](_types_.md#constructordef)
* [RegistryTypes](_types_.md#registrytypes)
* [SignatureOptions](_types_.md#signatureoptions)
* [TypeDef](_types_.md#typedef)

---

# Type aliases

<a id="anynumber"></a>

##  AnyNumber

**Ƭ AnyNumber**: *`BN` \| `Uint8Array` \| `number` \| `string`*

*Defined in [types.ts:23](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L23)*

___
<a id="anystring"></a>

##  AnyString

**Ƭ AnyString**: *`string` \| `String`*

*Defined in [types.ts:25](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L25)*

___
<a id="anyu8a"></a>

##  AnyU8a

**Ƭ AnyU8a**: *`Uint8Array` \| `Array`<`number`> \| `string`*

*Defined in [types.ts:27](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L27)*

___
<a id="codecarg"></a>

##  CodecArg

**Ƭ CodecArg**: *[Codec](../interfaces/_types_.codec.md) \| `BN` \| `Boolean` \| `String` \| `Uint8Array` \| `boolean` \| `number` \| `string` \| `undefined` \| `CodecArgArray` \| `CodecArgObject`*

*Defined in [types.ts:13](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L13)*

___
<a id="codeccallback"></a>

##  CodecCallback

**Ƭ CodecCallback**: *`function`*

*Defined in [types.ts:15](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L15)*

#### Type declaration
▸(result: *`T`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| result | `T` |

**Returns:** `any`

___
<a id="codecto"></a>

##  CodecTo

**Ƭ CodecTo**: *"toHex" \| "toJSON" \| "toString" \| "toU8a"*

*Defined in [types.ts:74](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L74)*

___
<a id="constructordef"></a>

##  ConstructorDef

**Ƭ ConstructorDef**: *`object`*

*Defined in [types.ts:80](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L80)*

#### Type declaration

[index: `string`]: [Constructor](../interfaces/_types_.constructor.md)<`T`>

___
<a id="registrytypes"></a>

##  RegistryTypes

**Ƭ RegistryTypes**: *`object`*

*Defined in [types.ts:84](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L84)*

#### Type declaration

[name: `string`]: [Constructor](../interfaces/_types_.constructor.md) \| `string` \| `object`

___
<a id="signatureoptions"></a>

##  SignatureOptions

**Ƭ SignatureOptions**: *`object`*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L97)*

#### Type declaration

___
<a id="typedef"></a>

##  TypeDef

**Ƭ TypeDef**: *`object`*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/types.ts#L82)*

#### Type declaration

[index: `string`]: [Codec](../interfaces/_types_.codec.md)

___

