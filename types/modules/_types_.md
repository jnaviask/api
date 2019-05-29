

# Index

### Interfaces

* [ArgsDef](../interfaces/_types_.argsdef.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)
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

*Defined in [types.ts:24](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L24)*

___
<a id="anystring"></a>

##  AnyString

**Ƭ AnyString**: *`string` \| `String`*

*Defined in [types.ts:26](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L26)*

___
<a id="anyu8a"></a>

##  AnyU8a

**Ƭ AnyU8a**: *`Uint8Array` \| `Array`<`number`> \| `string`*

*Defined in [types.ts:28](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L28)*

___
<a id="codecarg"></a>

##  CodecArg

**Ƭ CodecArg**: *[Codec](../interfaces/_types_.codec.md) \| `BN` \| `Boolean` \| `String` \| `Uint8Array` \| `boolean` \| `number` \| `string` \| `undefined` \| `CodecArgArray` \| `CodecArgObject`*

*Defined in [types.ts:14](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L14)*

___
<a id="codeccallback"></a>

##  CodecCallback

**Ƭ CodecCallback**: *`function`*

*Defined in [types.ts:16](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L16)*

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

*Defined in [types.ts:80](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L80)*

___
<a id="constructordef"></a>

##  ConstructorDef

**Ƭ ConstructorDef**: *`object`*

*Defined in [types.ts:88](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L88)*

#### Type declaration

[index: `string`]: [Constructor](../interfaces/_types_.constructor.md)<`T`>

___
<a id="registrytypes"></a>

##  RegistryTypes

**Ƭ RegistryTypes**: *`object`*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L92)*

#### Type declaration

[name: `string`]: [Constructor](../interfaces/_types_.constructor.md) \| `string` \| `object`

___
<a id="signatureoptions"></a>

##  SignatureOptions

**Ƭ SignatureOptions**: *`object`*

*Defined in [types.ts:105](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L105)*

#### Type declaration

___
<a id="typedef"></a>

##  TypeDef

**Ƭ TypeDef**: *`object`*

*Defined in [types.ts:90](https://github.com/polkadot-js/api/blob/55cb55a/packages/types/src/types.ts#L90)*

#### Type declaration

[index: `string`]: [Codec](../interfaces/_types_.codec.md)

___

