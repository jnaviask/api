

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

* [AnyFunction](_types_.md#anyfunction)
* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [Callback](_types_.md#callback)
* [CodecArg](_types_.md#codecarg)
* [CodecTo](_types_.md#codecto)
* [ConstructorDef](_types_.md#constructordef)
* [IKeyringPair](_types_.md#ikeyringpair)
* [RegistryTypes](_types_.md#registrytypes)
* [SignatureOptions](_types_.md#signatureoptions)
* [TypeDef](_types_.md#typedef)

---

# Type aliases

<a id="anyfunction"></a>

##  AnyFunction

**Ƭ AnyFunction**: *`function`*

*Defined in [types.ts:28](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L28)*

#### Type declaration
▸(...args: *`any`[]*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `any`

___
<a id="anynumber"></a>

##  AnyNumber

**Ƭ AnyNumber**: *`BN` \| `Uint8Array` \| `number` \| `string`*

*Defined in [types.ts:30](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L30)*

___
<a id="anystring"></a>

##  AnyString

**Ƭ AnyString**: *`string` \| `String`*

*Defined in [types.ts:32](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L32)*

___
<a id="anyu8a"></a>

##  AnyU8a

**Ƭ AnyU8a**: *`Uint8Array` \| `Array`<`number`> \| `string`*

*Defined in [types.ts:34](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L34)*

___
<a id="callback"></a>

##  Callback

**Ƭ Callback**: *`function`*

*Defined in [types.ts:20](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L20)*

#### Type declaration
▸(result: *`T`*): `void` \| `Promise`<`void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| result | `T` |

**Returns:** `void` \| `Promise`<`void`>

___
<a id="codecarg"></a>

##  CodecArg

**Ƭ CodecArg**: *[Codec](../interfaces/_types_.codec.md) \| `BN` \| `Boolean` \| `String` \| `Uint8Array` \| `boolean` \| `number` \| `string` \| `undefined` \| `CodecArgArray` \| `CodecArgObject`*

*Defined in [types.ts:18](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L18)*

___
<a id="codecto"></a>

##  CodecTo

**Ƭ CodecTo**: *"toHex" \| "toJSON" \| "toString" \| "toU8a"*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L86)*

___
<a id="constructordef"></a>

##  ConstructorDef

**Ƭ ConstructorDef**: *`object`*

*Defined in [types.ts:94](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L94)*

#### Type declaration

[index: `string`]: [Constructor](../interfaces/_types_.constructor.md)<`T`>

___
<a id="ikeyringpair"></a>

##  IKeyringPair

**Ƭ IKeyringPair**: *`object`*

*Defined in [types.ts:12](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L12)*

#### Type declaration

___
<a id="registrytypes"></a>

##  RegistryTypes

**Ƭ RegistryTypes**: *`object`*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L98)*

#### Type declaration

[name: `string`]: [Constructor](../interfaces/_types_.constructor.md) \| `string` \| `object`

___
<a id="signatureoptions"></a>

##  SignatureOptions

**Ƭ SignatureOptions**: *`object`*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L111)*

#### Type declaration

___
<a id="typedef"></a>

##  TypeDef

**Ƭ TypeDef**: *`object`*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/63846ac/packages/types/src/types.ts#L96)*

#### Type declaration

[index: `string`]: [Codec](../interfaces/_types_.codec.md)

___

