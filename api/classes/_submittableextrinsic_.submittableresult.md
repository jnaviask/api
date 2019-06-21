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

*Defined in [SubmittableExtrinsic.ts:33](https://github.com/polkadot-js/api/blob/d027eb0/packages/api/src/SubmittableExtrinsic.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[SubmittableResult](_submittableextrinsic_.submittableresult.md)*

___

## Properties

###  events

● **events**: *`Array<EventRecord>`*

*Defined in [SubmittableExtrinsic.ts:32](https://github.com/polkadot-js/api/blob/d027eb0/packages/api/src/SubmittableExtrinsic.ts#L32)*

___

###  status

● **status**: *`ExtrinsicStatus`*

*Defined in [SubmittableExtrinsic.ts:33](https://github.com/polkadot-js/api/blob/d027eb0/packages/api/src/SubmittableExtrinsic.ts#L33)*

___

## Accessors

###  isCompleted

● **get isCompleted**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:40](https://github.com/polkadot-js/api/blob/d027eb0/packages/api/src/SubmittableExtrinsic.ts#L40)*

**Returns:** *boolean*

___

###  isError

● **get isError**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:44](https://github.com/polkadot-js/api/blob/d027eb0/packages/api/src/SubmittableExtrinsic.ts#L44)*

**Returns:** *boolean*

___

###  isFinalized

● **get isFinalized**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:48](https://github.com/polkadot-js/api/blob/d027eb0/packages/api/src/SubmittableExtrinsic.ts#L48)*

**Returns:** *boolean*

___

## Methods

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *`EventRecord` | undefined*

*Defined in [SubmittableExtrinsic.ts:55](https://github.com/polkadot-js/api/blob/d027eb0/packages/api/src/SubmittableExtrinsic.ts#L55)*

**`description`** Finds an EventRecord for the specified method & section

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *`EventRecord` | undefined*

___