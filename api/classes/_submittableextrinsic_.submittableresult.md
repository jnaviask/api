> # Class: SubmittableResult

## Hierarchy

* **SubmittableResult**

## Implements

* [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md)

### Index

#### Constructors

* [constructor](_submittableextrinsic_.submittableresult.md#constructor)

#### Properties

* [events](_submittableextrinsic_.submittableresult.md#events)
* [status](_submittableextrinsic_.submittableresult.md#status)

#### Accessors

* [isCompleted](_submittableextrinsic_.submittableresult.md#iscompleted)
* [isError](_submittableextrinsic_.submittableresult.md#iserror)
* [isFinalized](_submittableextrinsic_.submittableresult.md#isfinalized)

#### Methods

* [findRecord](_submittableextrinsic_.submittableresult.md#findrecord)

## Constructors

###  constructor

\+ **new SubmittableResult**(`__namedParameters`: object): *[SubmittableResult](_submittableextrinsic_.submittableresult.md)*

*Defined in [SubmittableExtrinsic.ts:56](https://github.com/polkadot-js/api/blob/6c9fe76/packages/api/src/SubmittableExtrinsic.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[SubmittableResult](_submittableextrinsic_.submittableresult.md)*

## Properties

###  events

• **events**: *`EventRecord`[]*

*Implementation of [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md).[events](../interfaces/_submittableextrinsic_.isubmittableresult.md#events)*

*Defined in [SubmittableExtrinsic.ts:54](https://github.com/polkadot-js/api/blob/6c9fe76/packages/api/src/SubmittableExtrinsic.ts#L54)*

___

###  status

• **status**: *`ExtrinsicStatus`*

*Implementation of [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md).[status](../interfaces/_submittableextrinsic_.isubmittableresult.md#status)*

*Defined in [SubmittableExtrinsic.ts:56](https://github.com/polkadot-js/api/blob/6c9fe76/packages/api/src/SubmittableExtrinsic.ts#L56)*

## Accessors

###  isCompleted

• **get isCompleted**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:63](https://github.com/polkadot-js/api/blob/6c9fe76/packages/api/src/SubmittableExtrinsic.ts#L63)*

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:67](https://github.com/polkadot-js/api/blob/6c9fe76/packages/api/src/SubmittableExtrinsic.ts#L67)*

**Returns:** *boolean*

___

###  isFinalized

• **get isFinalized**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:71](https://github.com/polkadot-js/api/blob/6c9fe76/packages/api/src/SubmittableExtrinsic.ts#L71)*

**Returns:** *boolean*

## Methods

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *`EventRecord` | undefined*

*Implementation of [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md)*

*Defined in [SubmittableExtrinsic.ts:78](https://github.com/polkadot-js/api/blob/6c9fe76/packages/api/src/SubmittableExtrinsic.ts#L78)*

**`description`** Finds an EventRecord for the specified method & section

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *`EventRecord` | undefined*