> # External module: "mock/types"

### Index

#### Interfaces

* [Global](../interfaces/_mock_types_.global.md)
* [Mock](../interfaces/_mock_types_.mock.md)

#### Type aliases

* [MockStateDb](_mock_types_.md#mockstatedb)
* [MockStateRequests](_mock_types_.md#mockstaterequests)
* [MockStateSubscriptionCallback](_mock_types_.md#mockstatesubscriptioncallback)
* [MockStateSubscriptions](_mock_types_.md#mockstatesubscriptions)

## Type aliases

###  MockStateDb

Ƭ **MockStateDb**: *`Record<string, Uint8Array>`*

*Defined in [mock/types.ts:27](https://github.com/polkadot-js/api/blob/3b339a2/packages/rpc-provider/src/mock/types.ts#L27)*

___

###  MockStateRequests

Ƭ **MockStateRequests**: *`Record<string, function>`*

*Defined in [mock/types.ts:29](https://github.com/polkadot-js/api/blob/3b339a2/packages/rpc-provider/src/mock/types.ts#L29)*

___

###  MockStateSubscriptionCallback

Ƭ **MockStateSubscriptionCallback**: *function*

*Defined in [mock/types.ts:20](https://github.com/polkadot-js/api/blob/3b339a2/packages/rpc-provider/src/mock/types.ts#L20)*

#### Type declaration:

▸ (`error`: `Error` | null, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | `Error` \| null |
`value` | any |

___

###  MockStateSubscriptions

Ƭ **MockStateSubscriptions**: *`Record<string, object>`*

*Defined in [mock/types.ts:22](https://github.com/polkadot-js/api/blob/3b339a2/packages/rpc-provider/src/mock/types.ts#L22)*