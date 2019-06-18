> # Class: WsProvider

# @polkadot/rpc-provider/ws

**`name`** WsProvider

**`description`** The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

**`see`** [[HttpProvider]]

## Hierarchy

* **WsProvider**

## Implements

* `WSProviderInterface`

### Index

#### Constructors

* [constructor](_ws_provider_.wsprovider.md#constructor)

#### Accessors

* [hasSubscriptions](_ws_provider_.wsprovider.md#hassubscriptions)

#### Methods

* [clone](_ws_provider_.wsprovider.md#clone)
* [connect](_ws_provider_.wsprovider.md#connect)
* [disconnect](_ws_provider_.wsprovider.md#disconnect)
* [isConnected](_ws_provider_.wsprovider.md#isconnected)
* [on](_ws_provider_.wsprovider.md#on)
* [send](_ws_provider_.wsprovider.md#send)
* [subscribe](_ws_provider_.wsprovider.md#subscribe)
* [unsubscribe](_ws_provider_.wsprovider.md#unsubscribe)

## Constructors

###  constructor

\+ **new WsProvider**(`endpoint`: string, `autoConnect`: boolean): *[WsProvider](_ws_provider_.wsprovider.md)*

*Defined in [ws/Provider.ts:84](url)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`endpoint` | string |  defaults.WS_URL | The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944` |
`autoConnect` | boolean | true | Whether to connect automatically or not.  |

**Returns:** *[WsProvider](_ws_provider_.wsprovider.md)*

___

## Accessors

###  hasSubscriptions

● **get hasSubscriptions**(): *boolean*

*Defined in [ws/Provider.ts:111](url)*

**`summary`** `true` when this provider supports subscriptions

**Returns:** *boolean*

___

## Methods

###  clone

▸ **clone**(): *[WsProvider](_ws_provider_.wsprovider.md)*

*Defined in [ws/Provider.ts:118](url)*

**`description`** Returns a clone of the object

**Returns:** *[WsProvider](_ws_provider_.wsprovider.md)*

___

###  connect

▸ **connect**(): *void*

*Defined in [ws/Provider.ts:127](url)*

**`summary`** Manually connect

**`description`** The [WsProvider](_ws_provider_.wsprovider.md) connects automatically by default, however if you decided otherwise, you may
connect manually using this method.

**Returns:** *void*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [ws/Provider.ts:143](url)*

**`description`** Manually disconnect from the connection, clearing autoconnect logic

**Returns:** *void*

___

###  isConnected

▸ **isConnected**(): *boolean*

*Defined in [ws/Provider.ts:160](url)*

**`summary`** Whether the node is connected or not.

**Returns:** *boolean*

true if connected

___

###  on

▸ **on**(`type`: [ProviderInterface$Emitted](../modules/_types_.md#providerinterface$emitted), `sub`: [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface$emitcb)): *void*

*Defined in [ws/Provider.ts:169](url)*

**`summary`** Listens on events after having subscribed using the [subscribe](_ws_provider_.wsprovider.md#subscribe) function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface$emitted) | Event |
`sub` | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface$emitcb) | Callback  |

**Returns:** *void*

___

###  send

▸ **send**(`method`: string, `params`: `Array<any>`, `subscription?`: `SubscriptionHandler`): *`Promise<any>`*

*Defined in [ws/Provider.ts:179](url)*

**`summary`** Send JSON data using WebSockets to configured HTTP Endpoint or queue.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`method` | string | The RPC methods to execute |
`params` | `Array<any>` | Encoded paramaters as appliucable for the method |
`subscription?` | `SubscriptionHandler` | Subscription details (internally used)  |

**Returns:** *`Promise<any>`*

___

###  subscribe

▸ **subscribe**(`type`: string, `method`: string, `params`: `Array<any>`, `callback`: [ProviderInterface$Callback](../modules/_types_.md#providerinterface$callback)): *`Promise<number>`*

*Defined in [ws/Provider.ts:233](url)*

**`name`** subscribe

**`summary`** Allows subscribing to a specific event.

**`example`** 
<BR>

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

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Subscription type |
`method` | string | Subscription method |
`params` | `Array<any>` | Parameters |
`callback` | [ProviderInterface$Callback](../modules/_types_.md#providerinterface$callback) | Callback |

**Returns:** *`Promise<number>`*

Promise resolving to the dd of the subscription you can use with [[unsubscribe]].

___

###  unsubscribe

▸ **unsubscribe**(`type`: string, `method`: string, `id`: number): *`Promise<boolean>`*

*Defined in [ws/Provider.ts:242](url)*

**`summary`** Allows unsubscribing to subscriptions made with [subscribe](_ws_provider_.wsprovider.md#subscribe).

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`id` | number |

**Returns:** *`Promise<boolean>`*

___