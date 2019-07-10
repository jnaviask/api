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

*Defined in [Base.ts:82](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L82)*

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

*Defined in [Base.ts:217](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L217)*

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

*Defined in [Base.ts:199](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L199)*

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

*Defined in [Base.ts:135](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L135)*

**`description`** Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** *`Hash`*

___

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Defined in [Base.ts:144](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L144)*

**`description`** `true` when subscriptions are supported

**Returns:** *boolean*

___

###  libraryInfo

• **get libraryInfo**(): *string*

*Defined in [Base.ts:151](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L151)*

**`description`** The library information name & version (from package.json)

**Returns:** *string*

___

###  query

• **get query**(): *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹*`ApiType`*›*

*Defined in [Base.ts:237](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L237)*

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

*Defined in [Base.ts:265](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L265)*

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

*Defined in [Base.ts:283](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L283)*

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

*Defined in [Base.ts:158](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L158)*

**`description`** Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** *`Metadata`*

___

###  runtimeVersion

• **get runtimeVersion**(): *`RuntimeVersion`*

*Defined in [Base.ts:167](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L167)*

**`description`** Contains the version information for the current runtime.

**Returns:** *`RuntimeVersion`*

___

###  tx

• **get tx**(): *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹*`ApiType`*›*

*Defined in [Base.ts:301](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L301)*

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

*Defined in [Base.ts:176](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L176)*

**`description`** The type of this API instance, either 'rxjs' or 'promise'

**Returns:** *[ApiTypes](../modules/_types_.md#apitypes)*

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Defined in [Base.ts:310](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L310)*

**`description`** Disconnect from the underlying provider, halting all comms

**Returns:** *void*

___

###  off

▸ **off**(`type`: [ApiInterface$Events](../modules/_types_.md#apiinterface$events), `handler`: function): *this*

*Defined in [Base.ts:360](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L360)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = () => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

**Parameters:**

▪ **type**: *[ApiInterface$Events](../modules/_types_.md#apiinterface$events)*

The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to unregister.

▸ (...`args`: `Array<any>`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Array<any>` |

**Returns:** *this*

___

###  on

▸ **on**(`type`: [ApiInterface$Events](../modules/_types_.md#apiinterface$events), `handler`: function): *this*

*Defined in [Base.ts:333](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L333)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *[ApiInterface$Events](../modules/_types_.md#apiinterface$events)*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: `Array<any>`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Array<any>` |

**Returns:** *this*

___

###  once

▸ **once**(`type`: [ApiInterface$Events](../modules/_types_.md#apiinterface$events), `handler`: function): *this*

*Defined in [Base.ts:385](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L385)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *[ApiInterface$Events](../modules/_types_.md#apiinterface$events)*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: `Array<any>`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Array<any>` |

**Returns:** *this*

___

###  registerTypes

▸ **registerTypes**(`types?`: `RegistryTypes`): *void*

*Defined in [Base.ts:394](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L394)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | `RegistryTypes` |

**Returns:** *void*

___

###  setSigner

▸ **setSigner**(`signer`: [Signer](../interfaces/_types_.signer.md)): *void*

*Defined in [Base.ts:183](https://github.com/polkadot-js/api/blob/71011cf/packages/api/src/Base.ts#L183)*

**`description`** Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Signer](../interfaces/_types_.signer.md) |

**Returns:** *void*