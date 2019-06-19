> # Interface: SubmittableExtrinsic <**ApiType**>

## Type parameters

■` ApiType`

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

● **args**: *`Array<Codec>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:128](url)*

___

###  argsDef

● **argsDef**: *`ArgsDef`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:129](url)*

___

###  callIndex

● **callIndex**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:130](url)*

___

###  data

● **data**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:131](url)*

___

###  encodedLength

● **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:50](url)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

● **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:132](url)*

___

###  hash

● **hash**: *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:147](url)*

___

###  isEmpty

● **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:55](url)*

**`description`** Checks if the value is an empty value

___

###  isSigned

● **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:148](url)*

___

###  meta

● **meta**: *`FunctionMetadata`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:133](url)*

___

###  method

● **method**: *`Method`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:149](url)*

___

###  signature

● **signature**: *`IExtrinsicSignature`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:150](url)*

___

## Methods

###  addSignature

▸ **addSignature**(`signer`: `Address` | `Uint8Array` | string, `signature`: `Uint8Array` | string, `nonce`: `AnyNumber`, `era?`: `Uint8Array`): *`IExtrinsic`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:151](url)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:60](url)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *`SumbitableResultResult<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:63](url)*

**Returns:** *`SumbitableResultResult<ApiType>`*

▸ **send**(`statusCb`: `Callback<SubmittableResult>`): *`SumbitableResultSubscription<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:65](url)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | `Callback<SubmittableResult>` |

**Returns:** *`SumbitableResultSubscription<ApiType>`*

___

###  sign

▸ **sign**(`account`: `IKeyringPair`, `_options`: `Partial<SignatureOptions>`): *this*

*Overrides void*

*Defined in [SubmittableExtrinsic.ts:67](url)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` |
`_options` | `Partial<SignatureOptions>` |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options?`: `Partial<Partial<SignatureOptions>>`): *`SumbitableResultResult<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:69](url)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options?` | `Partial<Partial<SignatureOptions>>` |

**Returns:** *`SumbitableResultResult<ApiType>`*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `statusCb`: `Callback<SubmittableResult>`): *`SumbitableResultSubscription<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:71](url)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`statusCb` | `Callback<SubmittableResult>` |

**Returns:** *`SumbitableResultSubscription<ApiType>`*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:65](url)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) repersentation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJson`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:70](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:75](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:80](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:86](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___