> # Class: ApiRx

# @polkadot/api/rx

 ## Overview

**`name`** ApiRx

**`description`** 
ApiRx is a powerfull RxJS Observable wrapper around the RPC and interfaces on the Polkadot network. As a full Observable API, all interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion and subscription-based methods return long-running Observables that update with the latest values.

The API is well suited to real-time applications where the latest state is needed, unlocking the subscription-based features of Polkadot (and Substrate) clients. Some familiarity with RxJS is a requirement to use the API, however just understanding `.subscribe` and `.pipe` on Observables will unlock full-scale use thereof.

**`see`** [ApiPromise](_promise_api_.apipromise.md)

## Usage

Making rpc calls -
<BR>

```javascript
import ApiRx from '@polkadot/api/rx';

// initialise via Promise & static create
const api = await ApiRx.create().toPromise();

// make a call to retrieve the current network head
api.rpc.chain.subscribeNewHead().subscribe((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```
<BR>

Subscribing to chain state -
<BR>

```javascript
import { combineLatest } from 'rxjs';
import { pairwise, switchMap } from 'rxjs/operators';
import { ApiRx, WsProvider } from '@polkadot/api';

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
new ApiRx(provider)
  .isReady
  .pipe(
    switchMap((api) =>
      combineLatest([
        api.query.timestamp.blockPeriod(),
        api.query.timestamp.now().pipe(pairwise())
      ])
    )
  )
  .subscribe(([blockPeriod, timestamp]) => {
     const elapsed = timestamp[1].toNumber() - timestamp[0].toNumber();
     console.log(`timestamp ${timestamp[1]} \nelapsed ${elapsed} \n(${blockPeriod}s target)`);
  });
```
<BR>

Submitting a transaction -
<BR>

```javascript
import { first, switchMap } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';

// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
import testingPairs from '@polkadot/keyring/testingPairs';
const keyring = testingPairs();

// get api via Promise
const api = await ApiRx.create().toPromise();

// retrieve nonce for the account
api.query.system
  .accountNonce(keyring.alice.address)
  .pipe(
     first(),
     // pipe nonce into transfer
     switchMap((nonce) =>
       api.tx.balances
         // create transfer
         .transfer(keyring.bob.address, 12345)
         // sign the transcation
         .sign(keyring.alice, { nonce })
         // send the transaction
         .send()
     )
  )
  // subscribe to overall result
  .subscribe(({ status }) => {
    if (status.isFinalized) {
      console.log('Completed at block hash', status.asFinalized.toHex());
    }
  });
```

## Hierarchy

* [ApiBase](_base_.apibase.md)‹*"rxjs"*›

  * **ApiRx**

### Index

#### Constructors

* [constructor](_rx_api_.apirx.md#constructor)

#### Accessors

* [consts](_rx_api_.apirx.md#consts)
* [derive](_rx_api_.apirx.md#derive)
* [genesisHash](_rx_api_.apirx.md#genesishash)
* [hasSubscriptions](_rx_api_.apirx.md#hassubscriptions)
* [isConnected](_rx_api_.apirx.md#isconnected)
* [isReady](_rx_api_.apirx.md#isready)
* [libraryInfo](_rx_api_.apirx.md#libraryinfo)
* [query](_rx_api_.apirx.md#query)
* [queryMulti](_rx_api_.apirx.md#querymulti)
* [rpc](_rx_api_.apirx.md#rpc)
* [runtimeMetadata](_rx_api_.apirx.md#runtimemetadata)
* [runtimeVersion](_rx_api_.apirx.md#runtimeversion)
* [tx](_rx_api_.apirx.md#tx)
* [type](_rx_api_.apirx.md#type)

#### Methods

* [clone](_rx_api_.apirx.md#clone)
* [disconnect](_rx_api_.apirx.md#disconnect)
* [off](_rx_api_.apirx.md#off)
* [on](_rx_api_.apirx.md#on)
* [once](_rx_api_.apirx.md#once)
* [registerTypes](_rx_api_.apirx.md#registertypes)
* [setSigner](_rx_api_.apirx.md#setsigner)
* [create](_rx_api_.apirx.md#static-create)

## Constructors

###  constructor

\+ **new ApiRx**(`provider?`: [ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface`): *[ApiRx](_rx_api_.apirx.md)*

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [rx/Api.ts:140](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/rx/Api.ts#L140)*

**`description`** Create an instance of the ApiRx class

**`example`** 
<BR>

```javascript
import { switchMap } from 'rxjs/operators';
import Api from '@polkadot/api/rx';

new Api().isReady
  .pipe(
    switchMap((api) =>
      api.rpc.chain.subscribeNewHead()
  ))
  .subscribe((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
```

**Parameters:**

Name | Type |
------ | ------ |
`provider?` | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` |

**Returns:** *[ApiRx](_rx_api_.apirx.md)*

## Accessors

###  consts

• **get consts**(): *`Constants`*

*Inherited from [ApiBase](_base_.apibase.md).[consts](_base_.apibase.md#consts)*

*Defined in [Base.ts:224](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L224)*

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

*Inherited from [ApiBase](_base_.apibase.md).[derive](_base_.apibase.md#derive)*

*Defined in [Base.ts:206](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L206)*

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

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:142](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L142)*

**`description`** Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** *`Hash`*

___

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Inherited from [ApiBase](_base_.apibase.md).[hasSubscriptions](_base_.apibase.md#hassubscriptions)*

*Defined in [Base.ts:151](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L151)*

**`description`** `true` when subscriptions are supported

**Returns:** *boolean*

___

###  isConnected

• **get isConnected**(): *`Observable<boolean>`*

*Defined in [rx/Api.ts:180](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/rx/Api.ts#L180)*

**`description`** Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.

**Returns:** *`Observable<boolean>`*

___

###  isReady

• **get isReady**(): *`Observable<ApiRx>`*

*Defined in [rx/Api.ts:187](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/rx/Api.ts#L187)*

**`description`** Observable that returns the first time we are connected and loaded

**Returns:** *`Observable<ApiRx>`*

___

###  libraryInfo

• **get libraryInfo**(): *string*

*Inherited from [ApiBase](_base_.apibase.md).[libraryInfo](_base_.apibase.md#libraryinfo)*

*Defined in [Base.ts:158](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L158)*

**`description`** The library information name & version (from package.json)

**Returns:** *string*

___

###  query

• **get query**(): *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹*"rxjs"*›*

*Inherited from [ApiBase](_base_.apibase.md).[query](_base_.apibase.md#query)*

*Defined in [Base.ts:244](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L244)*

**`description`** Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

**`example`** 
<BR>

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹*"rxjs"*›*

___

###  queryMulti

• **get queryMulti**(): *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹*"rxjs"*›*

*Inherited from [ApiBase](_base_.apibase.md).[queryMulti](_base_.apibase.md#querymulti)*

*Defined in [Base.ts:272](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L272)*

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

**Returns:** *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹*"rxjs"*›*

___

###  rpc

• **get rpc**(): *[DecoratedRpc](../interfaces/_types_.decoratedrpc.md)‹*"rxjs"*›*

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:290](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L290)*

**`description`** Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

**`example`** 
<BR>

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** *[DecoratedRpc](../interfaces/_types_.decoratedrpc.md)‹*"rxjs"*›*

___

###  runtimeMetadata

• **get runtimeMetadata**(): *`Metadata`*

*Inherited from [ApiBase](_base_.apibase.md).[runtimeMetadata](_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:165](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L165)*

**`description`** Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** *`Metadata`*

___

###  runtimeVersion

• **get runtimeVersion**(): *`RuntimeVersion`*

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:174](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L174)*

**`description`** Contains the version information for the current runtime.

**Returns:** *`RuntimeVersion`*

___

###  tx

• **get tx**(): *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹*"rxjs"*›*

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:308](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L308)*

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

**Returns:** *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹*"rxjs"*›*

___

###  type

• **get type**(): *[ApiTypes](../modules/_types_.md#apitypes)*

*Inherited from [ApiBase](_base_.apibase.md).[type](_base_.apibase.md#type)*

*Defined in [Base.ts:183](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L183)*

**`description`** The type of this API instance, either 'rxjs' or 'promise'

**Returns:** *[ApiTypes](../modules/_types_.md#apitypes)*

## Methods

###  clone

▸ **clone**(): *[ApiRx](_rx_api_.apirx.md)*

*Defined in [rx/Api.ts:194](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/rx/Api.ts#L194)*

**`description`** Returns a clone of this ApiRx instance (new underlying provider connection)

**Returns:** *[ApiRx](_rx_api_.apirx.md)*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [ApiBase](_base_.apibase.md).[disconnect](_base_.apibase.md#disconnect)*

*Defined in [Base.ts:317](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L317)*

**`description`** Disconnect from the underlying provider, halting all comms

**Returns:** *void*

___

###  off

▸ **off**(`type`: [ApiInterface$Events](../modules/_types_.md#apiinterface$events), `handler`: function): *this*

*Inherited from [ApiBase](_base_.apibase.md).[off](_base_.apibase.md#off)*

*Defined in [Base.ts:367](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L367)*

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

*Inherited from [ApiBase](_base_.apibase.md).[on](_base_.apibase.md#on)*

*Defined in [Base.ts:340](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L340)*

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

*Inherited from [ApiBase](_base_.apibase.md).[once](_base_.apibase.md#once)*

*Defined in [Base.ts:392](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L392)*

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

*Inherited from [ApiBase](_base_.apibase.md).[registerTypes](_base_.apibase.md#registertypes)*

*Defined in [Base.ts:401](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L401)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | `RegistryTypes` |

**Returns:** *void*

___

###  setSigner

▸ **setSigner**(`signer`: [Signer](../interfaces/_types_.signer.md)): *void*

*Inherited from [ApiBase](_base_.apibase.md).[setSigner](_base_.apibase.md#setsigner)*

*Defined in [Base.ts:190](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/Base.ts#L190)*

**`description`** Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Signer](../interfaces/_types_.signer.md) |

**Returns:** *void*

___

### `Static` create

▸ **create**(`options?`: [ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface`): *`Observable<ApiRx>`*

*Defined in [rx/Api.ts:138](https://github.com/polkadot-js/api/blob/1393c8c/packages/api/src/rx/Api.ts#L138)*

**`description`** Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.

**`example`** 
<BR>

```javascript
import { switchMap } from 'rxjs/operators';
import Api from '@polkadot/api/rx';

Api.create()
  .pipe(
    switchMap((api) =>
      api.rpc.chain.subscribeNewHead()
  ))
  .subscribe((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` | options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_types_.apioptions.md) or [[WsProvider]]  |

**Returns:** *`Observable<ApiRx>`*