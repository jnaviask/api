

# Hierarchy

**SubmittableResult**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SubmittableResult**(__namedParameters: *`object`*): [SubmittableResult](_submittableextrinsic_.submittableresult.md)

*Defined in [SubmittableExtrinsic.ts:33](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/SubmittableExtrinsic.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [SubmittableResult](_submittableextrinsic_.submittableresult.md)

___

# Properties

<a id="events"></a>

##  events

**● events**: *`Array`<`EventRecord`>*

*Defined in [SubmittableExtrinsic.ts:32](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/SubmittableExtrinsic.ts#L32)*

___
<a id="status"></a>

##  status

**● status**: *`ExtrinsicStatus`*

*Defined in [SubmittableExtrinsic.ts:33](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/SubmittableExtrinsic.ts#L33)*

___

# Accessors

<a id="iscompleted"></a>

##  isCompleted

**get isCompleted**(): `boolean`

*Defined in [SubmittableExtrinsic.ts:40](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/SubmittableExtrinsic.ts#L40)*

**Returns:** `boolean`

___
<a id="iserror"></a>

##  isError

**get isError**(): `boolean`

*Defined in [SubmittableExtrinsic.ts:44](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/SubmittableExtrinsic.ts#L44)*

**Returns:** `boolean`

___
<a id="isfinalized"></a>

##  isFinalized

**get isFinalized**(): `boolean`

*Defined in [SubmittableExtrinsic.ts:48](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/SubmittableExtrinsic.ts#L48)*

**Returns:** `boolean`

___

# Methods

<a id="findrecord"></a>

##  findRecord

▸ **findRecord**(section: *`string`*, method: *`string`*): `EventRecord` \| `undefined`

*Defined in [SubmittableExtrinsic.ts:55](https://github.com/polkadot-js/api/blob/9d00dce/packages/api/src/SubmittableExtrinsic.ts#L55)*

*__description__*: Finds an EventRecord for the specified method & section

**Parameters:**

| Name | Type |
| ------ | ------ |
| section | `string` |
| method | `string` |

**Returns:** `EventRecord` \| `undefined`

___

