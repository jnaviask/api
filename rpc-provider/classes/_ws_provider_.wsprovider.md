

@polkadot/rpc-provider/ws
=========================

*__name__*: WsProvider

*__description__*: The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the \[\[HttpProvider\]\], it does support subscriptions and allows listening to events such as new blocks or balance changes.

*__example__*:   

```javascript
import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

*__see__*: \[\[HttpProvider\]\]

# Hierarchy

**WsProvider**

# Implements

* `WSProviderInterface`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new WsProvider**(endpoint?: *`string`*, autoConnect?: *`boolean`*): [WsProvider](_ws_provider_.wsprovider.md)

*Defined in [ws/Provider.ts:84](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L84)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` endpoint | `string` |  defaults.WS_URL |  The endpoint url. Usually \`ws://ip:9944\` or \`wss://ip:9944\` |
| `Default value` autoConnect | `boolean` | true |  Whether to connect automatically or not. |

**Returns:** [WsProvider](_ws_provider_.wsprovider.md)

___

# Accessors

<a id="hassubscriptions"></a>

##  hasSubscriptions

**get hasSubscriptions**(): `boolean`

*Defined in [ws/Provider.ts:111](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L111)*

*__summary__*: `true` when this provider supports subscriptions

**Returns:** `boolean`

___

# Methods

<a id="clone"></a>

##  clone

▸ **clone**(): [WsProvider](_ws_provider_.wsprovider.md)

*Defined in [ws/Provider.ts:118](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L118)*

*__description__*: Returns a clone of the object

**Returns:** [WsProvider](_ws_provider_.wsprovider.md)

___
<a id="connect"></a>

##  connect

▸ **connect**(): `void`

*Defined in [ws/Provider.ts:127](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L127)*

*__summary__*: Manually connect

*__description__*: The [WsProvider](_ws_provider_.wsprovider.md) connects automatically by default, however if you decided otherwise, you may connect manually using this method.

**Returns:** `void`

___
<a id="disconnect"></a>

##  disconnect

▸ **disconnect**(): `void`

*Defined in [ws/Provider.ts:143](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L143)*

*__description__*: Manually disconnect from the connection, clearing autoconnect logic

**Returns:** `void`

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [ws/Provider.ts:160](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L160)*

*__summary__*: Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb)*): `void`

*Defined in [ws/Provider.ts:169](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L169)*

*__summary__*: Listens on events after having subscribed using the [subscribe](_ws_provider_.wsprovider.md#subscribe) function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted) |  Event |
| sub | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb) |  Callback |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*, subscription?: *`SubscriptionHandler`*): `Promise`<`any`>

*Defined in [ws/Provider.ts:179](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L179)*

*__summary__*: Send JSON data using WebSockets to configured HTTP Endpoint or queue.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | `string` |  The RPC methods to execute |
| params | `Array`<`any`> |  Encoded paramaters as appliucable for the method |
| `Optional` subscription | `SubscriptionHandler` |  Subscription details (internally used) |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, params: *`Array`<`any`>*, callback: *[ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback)*): `Promise`<`number`>

*Defined in [ws/Provider.ts:233](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L233)*

*__name__*: subscribe

*__summary__*: Allows subscribing to a specific event.

*__example__*:   

```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const rpc = new Rpc(provider);

rpc.state.subscribeStorage([[storage.balances.freeBalance, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  Subscription type |
| method | `string` |  Subscription method |
| params | `Array`<`any`> |  Parameters |
| callback | [ProviderInterface$Callback](../modules/_types_.md#providerinterface_callback) |  Callback |

**Returns:** `Promise`<`number`>
Promise resolving to the dd of the subscription you can use with [unsubscribe](_ws_provider_.wsprovider.md#unsubscribe).

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [ws/Provider.ts:242](https://github.com/polkadot-js/api/blob/c916da6/packages/rpc-provider/src/ws/Provider.ts#L242)*

*__summary__*: Allows unsubscribing to subscriptions made with [subscribe](_ws_provider_.wsprovider.md#subscribe).

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

