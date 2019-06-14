

# Type parameters
#### ApiType 
# Hierarchy

**ApiBase**

↳  [ApiPromise](_promise_api_.apipromise.md)

↳  [ApiRx](_rx_api_.apirx.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(provider?: *[ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface`*, type: *[ApiTypes](../modules/_types_.md#apitypes)*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:79](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L79)*

*__description__*: Create an instance of the class

*__example__*:   

```javascript
import Api from '@polkadot/api/promise';

const api = new Api().isReady();

api.rpc.subscribeNewHead((header) => {
  console.log(`new block #${header.blockNumber.toNumber()}`);
});
```

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` provider | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` |  {} |
| type | [ApiTypes](../modules/_types_.md#apitypes) | - |

**Returns:** [ApiBase](_base_.apibase.md)

___

# Accessors

<a id="derive"></a>

##  derive

**get derive**(): `ReturnType`<`decorateDerive`>

*Defined in [Base.ts:196](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L196)*

*__description__*: Derived results that are injected into the API, allowing for combinations of various query results.

*__example__*:   

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** `ReturnType`<`decorateDerive`>

___
<a id="genesishash"></a>

##  genesisHash

**get genesisHash**(): `Hash`

*Defined in [Base.ts:132](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L132)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

**get hasSubscriptions**(): `boolean`

*Defined in [Base.ts:141](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L141)*

*__description__*: `true` when subscriptions are supported

**Returns:** `boolean`

___
<a id="libraryinfo"></a>

##  libraryInfo

**get libraryInfo**(): `string`

*Defined in [Base.ts:148](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L148)*

*__description__*: The library information name & version (from package.json)

**Returns:** `string`

___
<a id="query"></a>

##  query

**get query**(): [QueryableStorage](../interfaces/_types_.queryablestorage.md)<`ApiType`>

*Defined in [Base.ts:216](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L216)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** [QueryableStorage](../interfaces/_types_.queryablestorage.md)<`ApiType`>

___
<a id="querymulti"></a>

##  queryMulti

**get queryMulti**(): [QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)<`ApiType`>

*Defined in [Base.ts:242](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L242)*

*__description__*: Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.

*__example__*:   

```javascript
api.queryMulti(
  [
    // you can include the storage without any parameters
    api.query.balances.existentialDeposit,
    // or you can pass parameters to the storage query
    [api.query.balances.freeBalance, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
  ],
  ([existential, balance]) => {
    console.log(`You have ${balance.sub(existential)} more than the existential deposit`);
  }
);
```

**Returns:** [QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)<`ApiType`>

___
<a id="rpc"></a>

##  rpc

**get rpc**(): [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)<`ApiType`>

*Defined in [Base.ts:260](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L260)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)<`ApiType`>

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

**get runtimeMetadata**(): `Metadata`

*Defined in [Base.ts:155](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L155)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `Metadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

**get runtimeVersion**(): `RuntimeVersion`

*Defined in [Base.ts:164](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L164)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

**get tx**(): [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)<`ApiType`>

*Defined in [Base.ts:278](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L278)*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalized.toHex());
  });
```

**Returns:** [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)<`ApiType`>

___
<a id="type"></a>

##  type

**get type**(): [ApiTypes](../modules/_types_.md#apitypes)

*Defined in [Base.ts:173](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L173)*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

**Returns:** [ApiTypes](../modules/_types_.md#apitypes)

___

# Methods

<a id="disconnect"></a>

##  disconnect

▸ **disconnect**(): `void`

*Defined in [Base.ts:287](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L287)*

*__description__*: Disconnect from the underlying provider, halting all comms

**Returns:** `void`

___
<a id="off"></a>

##  off

▸ **off**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Defined in [Base.ts:337](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L337)*

*__description__*: Remove the given eventemitter handler

*__example__*:   

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

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ApiInterface$Events](../modules/_types_.md#apiinterface_events) |  The type of event the callback was attached to. Available events are \`connected\`, \`disconnected\`, \`ready\` and \`error\` |
| handler | `function` |  The callback to unregister. |

**Returns:** `this`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Defined in [Base.ts:310](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L310)*

*__description__*: Attach an eventemitter handler to listen to a specific event

*__example__*:   

```javascript
api.on('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ApiInterface$Events](../modules/_types_.md#apiinterface_events) |  The type of event to listen to. Available events are \`connected\`, \`disconnected\`, \`ready\` and \`error\` |
| handler | `function` |  The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments. |

**Returns:** `this`

___
<a id="once"></a>

##  once

▸ **once**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Defined in [Base.ts:362](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L362)*

*__description__*: Attach an one-time eventemitter handler to listen to a specific event

*__example__*:   

```javascript
api.once('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ApiInterface$Events](../modules/_types_.md#apiinterface_events) |  The type of event to listen to. Available events are \`connected\`, \`disconnected\`, \`ready\` and \`error\` |
| handler | `function` |  The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments. |

**Returns:** `this`

___
<a id="registertypes"></a>

##  registerTypes

▸ **registerTypes**(types?: *`RegistryTypes`*): `void`

*Defined in [Base.ts:371](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L371)*

*__description__*: Register additional user-defined of chain-specific types in the type registry

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` types | `RegistryTypes` |

**Returns:** `void`

___
<a id="setsigner"></a>

##  setSigner

▸ **setSigner**(signer: *[Signer](../interfaces/_types_.signer.md)*): `void`

*Defined in [Base.ts:180](https://github.com/polkadot-js/api/blob/63846ac/packages/api/src/Base.ts#L180)*

*__description__*: Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Signer](../interfaces/_types_.signer.md) |

**Returns:** `void`

___

