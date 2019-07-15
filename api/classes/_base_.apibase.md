> # Class: ApiBase <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

* **ApiBase**

  * [ApiPromise](_promise_api_.apipromise.md)

  * [ApiRx](_rx_api_.apirx.md)

### Index

#### Constructors

* [constructor](_base_.apibase.md#constructor)

#### Accessors

* [consts](_base_.apibase.md#consts)
* [derive](_base_.apibase.md#derive)
* [genesisHash](_base_.apibase.md#genesishash)
* [hasSubscriptions](_base_.apibase.md#hassubscriptions)
* [libraryInfo](_base_.apibase.md#libraryinfo)
* [query](_base_.apibase.md#query)
* [queryMulti](_base_.apibase.md#querymulti)
* [rpc](_base_.apibase.md#rpc)
* [runtimeMetadata](_base_.apibase.md#runtimemetadata)
* [runtimeVersion](_base_.apibase.md#runtimeversion)
* [tx](_base_.apibase.md#tx)
* [type](_base_.apibase.md#type)

#### Methods

* [disconnect](_base_.apibase.md#disconnect)
* [off](_base_.apibase.md#off)
* [on](_base_.apibase.md#on)
* [once](_base_.apibase.md#once)
* [registerTypes](_base_.apibase.md#registertypes)
* [setSigner](_base_.apibase.md#setsigner)

## Constructors

###  constructor

\+ **new ApiBase**(`provider`: [ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface`, `type`: [ApiTypes](../modules/_types_.md#apitypes)): *[ApiBase](_base_.apibase.md)*

*Defined in [Base.ts:98](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L98)*

**`description`** Create an instance of the class

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

const api = new Api().isReady();

api.rpc.subscribeNewHead((header) => {
  console.log(`new block #${header.blockNumber.toNumber()}`);
});
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`provider` | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` |  {} |
`type` | [ApiTypes](../modules/_types_.md#apitypes) | - |

**Returns:** *[ApiBase](_base_.apibase.md)*

## Accessors

###  consts

• **get consts**(): *`Constants`*

*Defined in [Base.ts:239](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L239)*

**`description`** Contains the parameter types (constants) of all modules.

The values are instances of the appropriate type and are accessible using `section`.`constantName`,

**`example`** 
<BR>

```javascript
console.log(api.consts.democracy.enactmentPeriod.toString())
```

**Returns:** *`Constants`*

___

###  derive

• **get derive**(): *`ReturnType<decorateDerive>`*

*Defined in [Base.ts:221](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L221)*

**`description`** Derived results that are injected into the API, allowing for combinations of various query results.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** *`ReturnType<decorateDerive>`*

___

###  genesisHash

• **get genesisHash**(): *`Hash`*

*Defined in [Base.ts:157](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L157)*

**`description`** Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** *`Hash`*

___

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Defined in [Base.ts:166](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L166)*

**`description`** `true` when subscriptions are supported

**Returns:** *boolean*

___

###  libraryInfo

• **get libraryInfo**(): *string*

*Defined in [Base.ts:173](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L173)*

**`description`** The library information name & version (from package.json)

**Returns:** *string*

___

###  query

• **get query**(): *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹*`ApiType`*›*

*Defined in [Base.ts:259](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L259)*

**`description`** Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

**`example`** 
<BR>

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹*`ApiType`*›*

___

###  queryMulti

• **get queryMulti**(): *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹*`ApiType`*›*

*Defined in [Base.ts:287](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L287)*

**`description`** Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.

**`example`** 
<BR>

```javascript
const unsub = await api.queryMulti(
  [
    // you can include the storage without any parameters
    api.query.balances.totalIssuance,
    // or you can pass parameters to the storage query
    [api.query.balances.freeBalance, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
  ],
  ([existential, balance]) => {
    console.log(`You have ${balance.sub(existential)} more than the existential deposit`);

    unsub();
  }
);
```

**Returns:** *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹*`ApiType`*›*

___

###  rpc

• **get rpc**(): *[DecoratedRpc](../interfaces/_types_.decoratedrpc.md)‹*`ApiType`*›*

*Defined in [Base.ts:305](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L305)*

**`description`** Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

**`example`** 
<BR>

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** *[DecoratedRpc](../interfaces/_types_.decoratedrpc.md)‹*`ApiType`*›*

___

###  runtimeMetadata

• **get runtimeMetadata**(): *`Metadata`*

*Defined in [Base.ts:180](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L180)*

**`description`** Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** *`Metadata`*

___

###  runtimeVersion

• **get runtimeVersion**(): *`RuntimeVersion`*

*Defined in [Base.ts:189](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L189)*

**`description`** Contains the version information for the current runtime.

**Returns:** *`RuntimeVersion`*

___

###  tx

• **get tx**(): *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹*`ApiType`*›*

*Defined in [Base.ts:323](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L323)*

**`description`** Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

**`example`** 
<BR>

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalized.toHex());
  });
```

**Returns:** *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹*`ApiType`*›*

___

###  type

• **get type**(): *[ApiTypes](../modules/_types_.md#apitypes)*

*Defined in [Base.ts:198](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L198)*

**`description`** The type of this API instance, either 'rxjs' or 'promise'

**Returns:** *[ApiTypes](../modules/_types_.md#apitypes)*

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Defined in [Base.ts:332](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L332)*

**`description`** Disconnect from the underlying provider, halting all comms

**Returns:** *void*

___

###  off

▸ **off**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Defined in [Base.ts:382](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L382)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = (): void => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

**Parameters:**

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to unregister.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Defined in [Base.ts:355](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L355)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Defined in [Base.ts:407](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L407)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  registerTypes

▸ **registerTypes**(`types?`: `RegistryTypes`): *void*

*Defined in [Base.ts:416](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L416)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | `RegistryTypes` |

**Returns:** *void*

___

###  setSigner

▸ **setSigner**(`signer`: [Signer](../interfaces/_types_.signer.md)): *void*

*Defined in [Base.ts:205](https://github.com/polkadot-js/api/blob/3b339a2/packages/api/src/Base.ts#L205)*

**`description`** Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Signer](../interfaces/_types_.signer.md) |

**Returns:** *void*