> # Class: StorageFunctionMetadata <**S, T, V, E**>

**`name`** StorageFunctionMetadata

**`description`** 
The definition of a storage function

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **StorageFunctionMetadata**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_metadata_v5_storage_.storagefunctionmetadata.md#constructor)

#### Accessors

* [Type](_metadata_v5_storage_.storagefunctionmetadata.md#type)
* [default](_metadata_v5_storage_.storagefunctionmetadata.md#default)
* [docs](_metadata_v5_storage_.storagefunctionmetadata.md#docs)
* [documentation](_metadata_v5_storage_.storagefunctionmetadata.md#documentation)
* [encodedLength](_metadata_v5_storage_.storagefunctionmetadata.md#encodedlength)
* [fallback](_metadata_v5_storage_.storagefunctionmetadata.md#fallback)
* [isEmpty](_metadata_v5_storage_.storagefunctionmetadata.md#isempty)
* [modifier](_metadata_v5_storage_.storagefunctionmetadata.md#modifier)
* [name](_metadata_v5_storage_.storagefunctionmetadata.md#name)
* [type](_metadata_v5_storage_.storagefunctionmetadata.md#type)

#### Methods

* [eq](_metadata_v5_storage_.storagefunctionmetadata.md#eq)
* [get](_metadata_v5_storage_.storagefunctionmetadata.md#get)
* [getAtIndex](_metadata_v5_storage_.storagefunctionmetadata.md#getatindex)
* [toArray](_metadata_v5_storage_.storagefunctionmetadata.md#toarray)
* [toHex](_metadata_v5_storage_.storagefunctionmetadata.md#tohex)
* [toJSON](_metadata_v5_storage_.storagefunctionmetadata.md#tojson)
* [toRawType](_metadata_v5_storage_.storagefunctionmetadata.md#torawtype)
* [toString](_metadata_v5_storage_.storagefunctionmetadata.md#tostring)
* [toU8a](_metadata_v5_storage_.storagefunctionmetadata.md#tou8a)
* [with](_metadata_v5_storage_.storagefunctionmetadata.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionMetadata**(`value?`: [StorageFunctionMetadataValue](../modules/_metadata_v5_storage_.md#storagefunctionmetadatavalue) | `Uint8Array`): *[StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v5/Storage.ts:162](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [StorageFunctionMetadataValue](../modules/_metadata_v5_storage_.md#storagefunctionmetadatavalue) \| `Uint8Array` |

**Returns:** *[StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  default

• **get default**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [Metadata/v5/Storage.ts:177](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L177)*

**`description`** The default value of the storage function

**`deprecated`** Use `.fallback` instead.

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  docs

• **get docs**(): *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

*Defined in [Metadata/v5/Storage.ts:199](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L199)*

**`description`** The [Text](_primitive_text_.text.md) documentation

**`deprecated`** Use `.documentation` instead.

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

___

###  documentation

• **get documentation**(): *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

*Defined in [Metadata/v5/Storage.ts:191](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L191)*

**`description`** The [Text](_primitive_text_.text.md) documentation

**Returns:** *[Vector](_codec_vector_.vector.md)‹*[Text](_primitive_text_.text.md)*›*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  fallback

• **get fallback**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [Metadata/v5/Storage.ts:184](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L184)*

**`description`** The default value of the storage function

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  modifier

• **get modifier**(): *[StorageFunctionModifier](_metadata_v0_storage_.storagefunctionmodifier.md)*

*Defined in [Metadata/v5/Storage.ts:213](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L213)*

**`description`** The modifier

**Returns:** *[StorageFunctionModifier](_metadata_v0_storage_.storagefunctionmodifier.md)*

___

###  name

• **get name**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v5/Storage.ts:206](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L206)*

**`description`** The key name

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  type

• **get type**(): *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

*Defined in [Metadata/v5/Storage.ts:220](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/Metadata/v5/Storage.ts#L220)*

**`description`** The [StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)

**Returns:** *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L185)*

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

*Defined in [codec/Struct.ts:193](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L193)*

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

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L200)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *`Array<Codec>`*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L207)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L237)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L250)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L258)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/ca00dbd/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*