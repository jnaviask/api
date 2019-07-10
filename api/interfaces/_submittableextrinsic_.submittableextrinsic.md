> # Interface: SubmittableExtrinsic <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

* `IExtrinsic`

  * **SubmittableExtrinsic**

### Index

#### Properties

* [args](_submittableextrinsic_.submittableextrinsic.md#args)
* [argsDef](_submittableextrinsic_.submittableextrinsic.md#argsdef)
* [callIndex](_submittableextrinsic_.submittableextrinsic.md#callindex)
* [data](_submittableextrinsic_.submittableextrinsic.md#data)
* [encodedLength](_submittableextrinsic_.submittableextrinsic.md#encodedlength)
* [hasOrigin](_submittableextrinsic_.submittableextrinsic.md#hasorigin)
* [hash](_submittableextrinsic_.submittableextrinsic.md#hash)
* [isEmpty](_submittableextrinsic_.submittableextrinsic.md#isempty)
* [isSigned](_submittableextrinsic_.submittableextrinsic.md#issigned)
* [meta](_submittableextrinsic_.submittableextrinsic.md#meta)
* [method](_submittableextrinsic_.submittableextrinsic.md#method)
* [signature](_submittableextrinsic_.submittableextrinsic.md#signature)

#### Methods

* [addSignature](_submittableextrinsic_.submittableextrinsic.md#addsignature)
* [eq](_submittableextrinsic_.submittableextrinsic.md#eq)
* [send](_submittableextrinsic_.submittableextrinsic.md#send)
* [sign](_submittableextrinsic_.submittableextrinsic.md#sign)
* [signAndSend](_submittableextrinsic_.submittableextrinsic.md#signandsend)
* [toHex](_submittableextrinsic_.submittableextrinsic.md#tohex)
* [toJSON](_submittableextrinsic_.submittableextrinsic.md#tojson)
* [toRawType](_submittableextrinsic_.submittableextrinsic.md#torawtype)
* [toString](_submittableextrinsic_.submittableextrinsic.md#tostring)
* [toU8a](_submittableextrinsic_.submittableextrinsic.md#tou8a)

## Properties

###  args

• **args**: *`Array<Codec>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:128](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L128)*

___

###  argsDef

• **argsDef**: *`ArgsDef`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:129](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L129)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:130](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L130)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:131](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L131)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:50](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L50)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:132](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L132)*

___

###  hash

• **hash**: *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:147](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L147)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:55](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L55)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:148](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L148)*

___

###  meta

• **meta**: *`FunctionMetadata`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:133](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L133)*

___

###  method

• **method**: *`Method`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:149](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L149)*

___

###  signature

• **signature**: *`IExtrinsicSignature`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:150](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L150)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: `Address` | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: `AnyNumber`, `era?`: `Uint8Array`): *`IExtrinsic`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:151](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | `Address` \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`nonce` | `AnyNumber` |
`era?` | `Uint8Array` |

**Returns:** *`IExtrinsic`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:60](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:82](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/SubmittableExtrinsic.ts#L82)*

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **send**(`statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:84](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/SubmittableExtrinsic.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  sign

▸ **sign**(`account`: `IKeyringPair`, `_options`: `Partial<SignatureOptions>`): *this*

*Overrides void*

*Defined in [SubmittableExtrinsic.ts:86](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/SubmittableExtrinsic.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` |
`_options` | `Partial<SignatureOptions>` |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options?`: `Partial<SignerOptions>`): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:88](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/SubmittableExtrinsic.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options?` | `Partial<SignerOptions>` |

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:90](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/SubmittableExtrinsic.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options`: `Partial<SignerOptions>`, `statusCb?`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:92](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/SubmittableExtrinsic.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options` | `Partial<SignerOptions>` |
`statusCb?` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:65](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L65)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJson`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:70](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L70)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:75](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L75)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:80](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L80)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/1393c8c/packages/types/src/types.ts#L86)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*