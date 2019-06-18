> # Class: SubmittableResult

## Hierarchy

* **SubmittableResult**

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

*Defined in [SubmittableExtrinsic.ts:33](url)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[SubmittableResult](_submittableextrinsic_.submittableresult.md)*

___

## Properties

###  events

● **events**: *`Array<EventRecord>`*

*Defined in [SubmittableExtrinsic.ts:32](url)*

___

###  status

● **status**: *`ExtrinsicStatus`*

*Defined in [SubmittableExtrinsic.ts:33](url)*

___

## Accessors

###  isCompleted

● **get isCompleted**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:40](url)*

**Returns:** *boolean*

___

###  isError

● **get isError**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:44](url)*

**Returns:** *boolean*

___

###  isFinalized

● **get isFinalized**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:48](url)*

**Returns:** *boolean*

___

## Methods

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *`EventRecord` | undefined*

*Defined in [SubmittableExtrinsic.ts:55](url)*

**`description`** Finds an EventRecord for the specified method & section

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *`EventRecord` | undefined*

___