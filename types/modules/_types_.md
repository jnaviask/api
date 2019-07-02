> # External module: "types"

### Index

#### Interfaces

* [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)
* [ArgsDef](../interfaces/_types_.argsdef.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)
* [IHash](../interfaces/_types_.ihash.md)
* [IMethod](../interfaces/_types_.imethod.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)

#### Type aliases

* [AnyFunction](_types_.md#anyfunction)
* [AnyJson](_types_.md#anyjson)
* [AnyJsonObject](_types_.md#anyjsonobject)
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

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [types.ts:27](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L27)*

#### Type declaration:

▸ (...`args`: *any[]*): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](_types_.md#anyjsonobject) | [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Defined in [types.ts:37](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L37)*

___

###  AnyJsonObject

Ƭ **AnyJsonObject**: *object*

*Defined in [types.ts:35](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L35)*

#### Type declaration:

● \[▪ **key**: *string*\]: [AnyJson](_types_.md#anyjson)

___

###  AnyNumber

Ƭ **AnyNumber**: *`BN` | `Uint8Array` | number | string*

*Defined in [types.ts:29](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L29)*

___

###  AnyString

Ƭ **AnyString**: *string | `String`*

*Defined in [types.ts:31](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L31)*

___

###  AnyU8a

Ƭ **AnyU8a**: *`Uint8Array` | `Array<number>` | string*

*Defined in [types.ts:33](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L33)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [types.ts:21](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L21)*

#### Type declaration:

▸ (`result`: *`T`*): *void | `Promise<void>`*

**Parameters:**

Name | Type |
------ | ------ |
`result` | `T` |

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | `BN` | `Boolean` | `String` | `Uint8Array` | boolean | number | string | undefined | `CodecArgArray` | `CodecArgObject`*

*Defined in [types.ts:19](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L19)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [types.ts:89](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L89)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *object*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L97)*

#### Type declaration:

● \[▪ **index**: *string*\]: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›

___

###  IKeyringPair

Ƭ **IKeyringPair**: *object*

*Defined in [types.ts:12](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L12)*

#### Type declaration:

___

###  RegistryTypes

Ƭ **RegistryTypes**: *object*

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L101)*

#### Type declaration:

● \[▪ **name**: *string*\]: [Constructor](../interfaces/_types_.constructor.md) | string | object

___

###  SignatureOptions

Ƭ **SignatureOptions**: *object*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L114)*

#### Type declaration:

___

###  TypeDef

Ƭ **TypeDef**: *object*

*Defined in [types.ts:99](https://github.com/polkadot-js/api/blob/917168a/packages/types/src/types.ts#L99)*

#### Type declaration:

● \[▪ **index**: *string*\]: [Codec](../interfaces/_types_.codec.md)