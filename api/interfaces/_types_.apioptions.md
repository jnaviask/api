

# Hierarchy

**ApiOptions**

# Properties

<a id="derives"></a>

## `<Optional>` derives

**● derives**: *`DeriveCustom`*

*Defined in [types.ts:168](https://github.com/polkadot-js/api/blob/6f3c8f7/packages/api/src/types.ts#L168)*

*__description__*: Add custom derives to be injected

___
<a id="metadata"></a>

## `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types.ts:173](https://github.com/polkadot-js/api/blob/6f3c8f7/packages/api/src/types.ts#L173)*

*__description__*: prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain

___
<a id="provider"></a>

## `<Optional>` provider

**● provider**: *`ProviderInterface`*

*Defined in [types.ts:180](https://github.com/polkadot-js/api/blob/6f3c8f7/packages/api/src/types.ts#L180)*

*__description__*: Transport Provider from rpc-provider. If not specified, it will default to connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___
<a id="signer"></a>

## `<Optional>` signer

**● signer**: *[Signer](_types_.signer.md)*

*Defined in [types.ts:184](https://github.com/polkadot-js/api/blob/6f3c8f7/packages/api/src/types.ts#L184)*

*__description__*: An external signer which will be used to sign extrinsic when account passed in is not KeyringPair

___
<a id="source"></a>

## `<Optional>` source

**● source**: *[ApiBase](../classes/_base_.apibase.md)<`any`>*

*Defined in [types.ts:188](https://github.com/polkadot-js/api/blob/6f3c8f7/packages/api/src/types.ts#L188)*

*__description__*: The source object to use for runtime information (only used when cloning)

___
<a id="types"></a>

## `<Optional>` types

**● types**: *`RegistryTypes`*

*Defined in [types.ts:193](https://github.com/polkadot-js/api/blob/6f3c8f7/packages/api/src/types.ts#L193)*

*__description__*: Additional types used by runtime modules. This is nessusary if the runtime modules uses types not available in the base Substrate runtime.

___

