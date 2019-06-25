> # External module: "mock/types"

### Index

#### Interfaces

* [Global](../interfaces/_mock_types_.global.md)

#### Type aliases

* [Mock](_mock_types_.md#mock)
* [MockState$Db](_mock_types_.md#mockstate$db)
* [MockState$Requests](_mock_types_.md#mockstate$requests)
* [MockState$Subscription$Callback](_mock_types_.md#mockstate$subscription$callback)
* [MockState$Subscriptions](_mock_types_.md#mockstate$subscriptions)

## Type aliases

###  Mock

Ƭ **Mock**: *object*

*Defined in [mock/types.ts:13](https://github.com/polkadot-js/api/blob/68b07eb/packages/rpc-provider/src/mock/types.ts#L13)*

#### Type declaration:

___

###  MockState$Db

Ƭ **MockState$Db**: *object*

*Defined in [mock/types.ts:31](https://github.com/polkadot-js/api/blob/68b07eb/packages/rpc-provider/src/mock/types.ts#L31)*

#### Type declaration:

● \[■&#x60; index&#x60;: *string*\]: `Uint8Array`

___

###  MockState$Requests

Ƭ **MockState$Requests**: *object*

*Defined in [mock/types.ts:35](https://github.com/polkadot-js/api/blob/68b07eb/packages/rpc-provider/src/mock/types.ts#L35)*

#### Type declaration:

● \[■&#x60; index&#x60;: *string*\]: function

▸ (`db`: [MockState$Db](_mock_types_.md#mockstate$db), `params`: `Array<any>`): *string*

**Parameters:**

Name | Type |
------ | ------ |
`db` | [MockState$Db](_mock_types_.md#mockstate$db) |
`params` | `Array<any>` |

___

###  MockState$Subscription$Callback

Ƭ **MockState$Subscription$Callback**: *function*

*Defined in [mock/types.ts:20](https://github.com/polkadot-js/api/blob/68b07eb/packages/rpc-provider/src/mock/types.ts#L20)*

#### Type declaration:

▸ (`error`: `Error` | null, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | `Error` \| null |
`value` | any |

___

###  MockState$Subscriptions

Ƭ **MockState$Subscriptions**: *object*

*Defined in [mock/types.ts:22](https://github.com/polkadot-js/api/blob/68b07eb/packages/rpc-provider/src/mock/types.ts#L22)*

#### Type declaration:

● \[■&#x60; index&#x60;: *string*\]: object

___