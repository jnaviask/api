> # Class: SignaturePayloadRaw <**S, T, V, E**>

**`name`** SignaturePayloadRaw

**`description`** 
A version of [SignaturePayload](_type_signaturepayload_.signaturepayload.md) where it does not rely on [Method](_primitive_method_.method.md) being initalized with metadata. When constructing, it treats the [Method](_primitive_method_.method.md) as a raw stream of bytes, so will always apply the signature over this without any additional checking. Unlike the [SignaturePayload](_type_signaturepayload_.signaturepayload.md), it assumed that you will only construct and sign, thereby providing no insigt into constructed values

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **SignaturePayloadRaw**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_signaturepayload_.signaturepayloadraw.md#constructor)

#### Accessors

* [Type](_type_signaturepayload_.signaturepayloadraw.md#type)
* [encodedLength](_type_signaturepayload_.signaturepayloadraw.md#encodedlength)
* [era](_type_signaturepayload_.signaturepayloadraw.md#era)
* [isEmpty](_type_signaturepayload_.signaturepayloadraw.md#isempty)

#### Methods

* [eq](_type_signaturepayload_.signaturepayloadraw.md#eq)
* [get](_type_signaturepayload_.signaturepayloadraw.md#get)
* [getAtIndex](_type_signaturepayload_.signaturepayloadraw.md#getatindex)
* [sign](_type_signaturepayload_.signaturepayloadraw.md#sign)
* [toArray](_type_signaturepayload_.signaturepayloadraw.md#toarray)
* [toHex](_type_signaturepayload_.signaturepayloadraw.md#tohex)
* [toJSON](_type_signaturepayload_.signaturepayloadraw.md#tojson)
* [toRawType](_type_signaturepayload_.signaturepayloadraw.md#torawtype)
* [toString](_type_signaturepayload_.signaturepayloadraw.md#tostring)
* [toU8a](_type_signaturepayload_.signaturepayloadraw.md#tou8a)
* [with](_type_signaturepayload_.signaturepayloadraw.md#static-with)

## Constructors

###  constructor

\+ **new SignaturePayloadRaw**(`value?`: any): *[SignaturePayloadRaw](_type_signaturepayload_.signaturepayloadraw.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/SignaturePayload.ts:117](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/type/SignaturePayload.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[SignaturePayloadRaw](_type_signaturepayload_.signaturepayloadraw.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

*Defined in [type/SignaturePayload.ts:130](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/type/SignaturePayload.ts#L130)*

**`description`** The [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L200)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../modules/_types_.md#ikeyringpair)): *`Uint8Array`*

*Defined in [type/SignaturePayload.ts:137](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/type/SignaturePayload.ts#L137)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../modules/_types_.md#ikeyringpair) |

**Returns:** *`Uint8Array`*

___

###  toArray

▸ **toArray**(): *`Array<Codec>`*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L207)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L237)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L250)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L258)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/cc4e0c8/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*