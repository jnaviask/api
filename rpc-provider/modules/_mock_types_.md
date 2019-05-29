

# Index

### Interfaces

* [Global](../interfaces/_mock_types_.global.md)

### Type aliases

* [Mock](_mock_types_.md#mock)
* [MockState$Db](_mock_types_.md#mockstate_db)
* [MockState$Requests](_mock_types_.md#mockstate_requests)
* [MockState$Subscription$Callback](_mock_types_.md#mockstate_subscription_callback)
* [MockState$Subscriptions](_mock_types_.md#mockstate_subscriptions)

---

# Type aliases

<a id="mock"></a>

##  Mock

**Ƭ Mock**: *`object`*

*Defined in [mock/types.ts:13](https://github.com/polkadot-js/api/blob/f9e8aed/packages/rpc-provider/src/mock/types.ts#L13)*

#### Type declaration

___
<a id="mockstate_db"></a>

##  MockState$Db

**Ƭ MockState$Db**: *`object`*

*Defined in [mock/types.ts:31](https://github.com/polkadot-js/api/blob/f9e8aed/packages/rpc-provider/src/mock/types.ts#L31)*

#### Type declaration

[index: `string`]: `Uint8Array`

___
<a id="mockstate_requests"></a>

##  MockState$Requests

**Ƭ MockState$Requests**: *`object`*

*Defined in [mock/types.ts:35](https://github.com/polkadot-js/api/blob/f9e8aed/packages/rpc-provider/src/mock/types.ts#L35)*

#### Type declaration

[index: `string`]: `function`

▸(db: *[MockState$Db](_mock_types_.md#mockstate_db)*, params: *`Array`<`any`>*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| db | [MockState$Db](_mock_types_.md#mockstate_db) |
| params | `Array`<`any`> |

**Returns:** `string`

___
<a id="mockstate_subscription_callback"></a>

##  MockState$Subscription$Callback

**Ƭ MockState$Subscription$Callback**: *`function`*

*Defined in [mock/types.ts:20](https://github.com/polkadot-js/api/blob/f9e8aed/packages/rpc-provider/src/mock/types.ts#L20)*

#### Type declaration
▸(error: *`Error` \| `null`*, value: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` \| `null` |
| value | `any` |

**Returns:** `void`

___
<a id="mockstate_subscriptions"></a>

##  MockState$Subscriptions

**Ƭ MockState$Subscriptions**: *`object`*

*Defined in [mock/types.ts:22](https://github.com/polkadot-js/api/blob/f9e8aed/packages/rpc-provider/src/mock/types.ts#L22)*

#### Type declaration

[index: `string`]: `object`

___

