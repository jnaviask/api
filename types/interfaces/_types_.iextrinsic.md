> # Interface: IExtrinsic

## Hierarchy

  * [IMethod](_types_.imethod.md)

  * **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_type_extrinsic_.extrinsic.md)

### Index

#### Properties

* [args](_types_.iextrinsic.md#args)
* [argsDef](_types_.iextrinsic.md#argsdef)
* [callIndex](_types_.iextrinsic.md#callindex)
* [data](_types_.iextrinsic.md#data)
* [encodedLength](_types_.iextrinsic.md#encodedlength)
* [hasOrigin](_types_.iextrinsic.md#hasorigin)
* [hash](_types_.iextrinsic.md#hash)
* [isEmpty](_types_.iextrinsic.md#isempty)
* [isSigned](_types_.iextrinsic.md#issigned)
* [meta](_types_.iextrinsic.md#meta)
* [method](_types_.iextrinsic.md#method)
* [signature](_types_.iextrinsic.md#signature)

#### Methods

* [addSignature](_types_.iextrinsic.md#addsignature)
* [eq](_types_.iextrinsic.md#eq)
* [sign](_types_.iextrinsic.md#sign)
* [toHex](_types_.iextrinsic.md#tohex)
* [toJSON](_types_.iextrinsic.md#tojson)
* [toRawType](_types_.iextrinsic.md#torawtype)
* [toString](_types_.iextrinsic.md#tostring)
* [toU8a](_types_.iextrinsic.md#tou8a)

## Properties

###  args

• **args**: *`Array<Codec>`*

*Inherited from [IMethod](_types_.imethod.md).[args](_types_.imethod.md#args)*

*Defined in [types.ts:128](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L128)*

___

###  argsDef

• **argsDef**: *[ArgsDef](_types_.argsdef.md)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [types.ts:129](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L129)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [types.ts:130](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L130)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L131)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L50)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [types.ts:132](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L132)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:147](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L147)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L55)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Defined in [types.ts:148](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L148)*

___

###  meta

• **meta**: *[FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [types.ts:133](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L133)*

___

###  method

• **method**: *[Method](../classes/_primitive_method_.method.md)*

*Defined in [types.ts:149](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L149)*

___

###  signature

• **signature**: *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:150](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L150)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: [AnyNumber](../modules/_types_.md#anynumber), `era?`: [Uint8Array](../classes/_codec_u8a_.u8a.md#static-uint8array)): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:151](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`nonce` | [AnyNumber](../modules/_types_.md#anynumber) |
`era?` | [Uint8Array](../classes/_codec_u8a_.u8a.md#static-uint8array) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:60](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../modules/_types_.md#ikeyringpair), `options`: [SignatureOptions](../modules/_types_.md#signatureoptions)): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:152](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../modules/_types_.md#ikeyringpair) |
`options` | [SignatureOptions](../modules/_types_.md#signatureoptions) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:65](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L65)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:70](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L70)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:75](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L75)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:80](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L80)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/01eaef2/packages/types/src/types.ts#L86)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*