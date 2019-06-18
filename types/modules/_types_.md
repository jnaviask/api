> # External module: "types"

### Index

#### Interfaces

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

*Defined in [types.ts:28](url)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyNumber

Ƭ **AnyNumber**: *`BN` | `Uint8Array` | number | string*

*Defined in [types.ts:30](url)*

___

###  AnyString

Ƭ **AnyString**: *string | `String`*

*Defined in [types.ts:32](url)*

___

###  AnyU8a

Ƭ **AnyU8a**: *`Uint8Array` | `Array<number>` | string*

*Defined in [types.ts:34](url)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [types.ts:20](url)*

#### Type declaration:

▸ (`result`: `T`): *void | `Promise<void>`*

**Parameters:**

Name | Type |
------ | ------ |
`result` | `T` |

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | `BN` | `Boolean` | `String` | `Uint8Array` | boolean | number | string | undefined | `CodecArgArray` | `CodecArgObject`*

*Defined in [types.ts:18](url)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [types.ts:86](url)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *object*

*Defined in [types.ts:94](url)*

#### Type declaration:

● \[■&#x60; index&#x60;: *string*\]: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›

___

###  IKeyringPair

Ƭ **IKeyringPair**: *object*

*Defined in [types.ts:12](url)*

#### Type declaration:

___

###  RegistryTypes

Ƭ **RegistryTypes**: *object*

*Defined in [types.ts:98](url)*

#### Type declaration:

● \[■&#x60; name&#x60;: *string*\]: [Constructor](../interfaces/_types_.constructor.md) | string | object

___

###  SignatureOptions

Ƭ **SignatureOptions**: *object*

*Defined in [types.ts:111](url)*

#### Type declaration:

___

###  TypeDef

Ƭ **TypeDef**: *object*

*Defined in [types.ts:96](url)*

#### Type declaration:

● \[■&#x60; index&#x60;: *string*\]: [Codec](../interfaces/_types_.codec.md)

___