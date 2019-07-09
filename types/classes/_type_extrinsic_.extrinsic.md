> # Class: Extrinsic <**S, T, V, E**>

**`name`** Extrinsic

**`description`** 
Representation of an Extrinsic in the system. It contains the actual call,
(optional) signature and encodes with an actual length prefix

https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node.

Can be:
- signed, to create a transaction
- left as is, to create an inherent

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Extrinsic**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)

### Index

#### Constructors

* [constructor](_type_extrinsic_.extrinsic.md#constructor)

#### Accessors

* [Type](_type_extrinsic_.extrinsic.md#type)
* [args](_type_extrinsic_.extrinsic.md#args)
* [argsDef](_type_extrinsic_.extrinsic.md#argsdef)
* [callIndex](_type_extrinsic_.extrinsic.md#callindex)
* [data](_type_extrinsic_.extrinsic.md#data)
* [encodedLength](_type_extrinsic_.extrinsic.md#encodedlength)
* [hasOrigin](_type_extrinsic_.extrinsic.md#hasorigin)
* [hash](_type_extrinsic_.extrinsic.md#hash)
* [isEmpty](_type_extrinsic_.extrinsic.md#isempty)
* [isSigned](_type_extrinsic_.extrinsic.md#issigned)
* [length](_type_extrinsic_.extrinsic.md#length)
* [meta](_type_extrinsic_.extrinsic.md#meta)
* [method](_type_extrinsic_.extrinsic.md#method)
* [signature](_type_extrinsic_.extrinsic.md#signature)

#### Methods

* [addSignature](_type_extrinsic_.extrinsic.md#addsignature)
* [eq](_type_extrinsic_.extrinsic.md#eq)
* [get](_type_extrinsic_.extrinsic.md#get)
* [getAtIndex](_type_extrinsic_.extrinsic.md#getatindex)
* [sign](_type_extrinsic_.extrinsic.md#sign)
* [toArray](_type_extrinsic_.extrinsic.md#toarray)
* [toHex](_type_extrinsic_.extrinsic.md#tohex)
* [toJSON](_type_extrinsic_.extrinsic.md#tojson)
* [toRawType](_type_extrinsic_.extrinsic.md#torawtype)
* [toString](_type_extrinsic_.extrinsic.md#tostring)
* [toU8a](_type_extrinsic_.extrinsic.md#tou8a)
* [decodeExtrinsic](_type_extrinsic_.extrinsic.md#static-decodeextrinsic)
* [with](_type_extrinsic_.extrinsic.md#static-with)

## Constructors

###  constructor

\+ **new Extrinsic**(`value?`: `ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_primitive_method_.method.md)): *[Extrinsic](_type_extrinsic_.extrinsic.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md) |

**Returns:** *[Extrinsic](_type_extrinsic_.extrinsic.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  args

• **get args**(): *`Array<Codec>`*

*Defined in [type/Extrinsic.ts:82](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L82)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Method](_primitive_method_.method.md)

**Returns:** *`Array<Codec>`*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../interfaces/_types_.argsdef.md)*

*Defined in [type/Extrinsic.ts:89](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L89)*

**`description`** Thge argument defintions, compatible with [Method](_primitive_method_.method.md)

**Returns:** *[ArgsDef](../interfaces/_types_.argsdef.md)*

___

###  callIndex

• **get callIndex**(): *`Uint8Array`*

*Defined in [type/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L96)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Method

**Returns:** *`Uint8Array`*

___

###  data

• **get data**(): *`Uint8Array`*

*Defined in [type/Extrinsic.ts:103](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L103)*

**`description`** The actual data for the Method

**Returns:** *`Uint8Array`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [type/Extrinsic.ts:110](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L110)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [type/Extrinsic.ts:128](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L128)*

**`description`** `true` is method has `Origin` argument (compatibility with [Method](_primitive_method_.method.md))

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[Hash](_primitive_hash_.hash.md)*

*Defined in [type/Extrinsic.ts:119](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L119)*

**`description`** Convernience function, encodes the extrinsic and returns the actual hash

**Returns:** *[Hash](_primitive_hash_.hash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [type/Extrinsic.ts:135](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L135)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Defined in [type/Extrinsic.ts:142](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L142)*

**`description`** The length of the encoded value

**Returns:** *number*

___

###  meta

• **get meta**(): *[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*

*Defined in [type/Extrinsic.ts:149](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L149)*

**`description`** The [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md) that describes the extrinsic

**Returns:** *[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*

___

###  method

• **get method**(): *[Method](_primitive_method_.method.md)*

*Defined in [type/Extrinsic.ts:156](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L156)*

**`description`** The [Method](_primitive_method_.method.md) this extrinsic wraps

**Returns:** *[Method](_primitive_method_.method.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

*Defined in [type/Extrinsic.ts:163](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L163)*

**`description`** The [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

**Returns:** *[ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: [AnyNumber](../modules/_types_.md#anynumber), `era?`: [Uint8Array](_codec_u8a_.u8a.md#static-uint8array)): *[Extrinsic](_type_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [type/Extrinsic.ts:170](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L170)*

**`description`** Add an [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`nonce` | [AnyNumber](../modules/_types_.md#anynumber) |
`era?` | [Uint8Array](_codec_u8a_.u8a.md#static-uint8array) |

**Returns:** *[Extrinsic](_type_extrinsic_.extrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L185)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L193)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L200)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../modules/_types_.md#ikeyringpair), `options`: [SignatureOptions](../modules/_types_.md#signatureoptions)): *[Extrinsic](_type_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Defined in [type/Extrinsic.ts:179](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L179)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../modules/_types_.md#ikeyringpair) |
`options` | [SignatureOptions](../modules/_types_.md#signatureoptions) |

**Returns:** *[Extrinsic](_type_extrinsic_.extrinsic.md)*

___

###  toArray

▸ **toArray**(): *`Array<Codec>`*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L207)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [type/Extrinsic.ts:188](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L188)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [type/Extrinsic.ts:195](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L195)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [type/Extrinsic.ts:202](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L202)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L250)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IExtrinsic](../interfaces/_types_.iextrinsic.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [type/Extrinsic.ts:211](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L211)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value`: `ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_primitive_method_.method.md)): *`ExtrinsicValue` | `Array<number>` | `Uint8Array`*

*Defined in [type/Extrinsic.ts:43](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/type/Extrinsic.ts#L43)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | `ExtrinsicValue` \| [AnyU8a](../modules/_types_.md#anyu8a) \| [Method](_primitive_method_.method.md) |  new Uint8Array() |

**Returns:** *`ExtrinsicValue` | `Array<number>` | `Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/2eee6cf/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*