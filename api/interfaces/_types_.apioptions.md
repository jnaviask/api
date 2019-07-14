> # Interface: ApiOptions

## Hierarchy

* **ApiOptions**

### Index

#### Properties

* [derives](_types_.apioptions.md#optional-derives)
* [metadata](_types_.apioptions.md#optional-metadata)
* [provider](_types_.apioptions.md#optional-provider)
* [signer](_types_.apioptions.md#optional-signer)
* [source](_types_.apioptions.md#optional-source)
* [types](_types_.apioptions.md#optional-types)

## Properties

### `Optional` derives

• **derives**? : *`DeriveCustom`*

*Defined in [types.ts:182](https://github.com/polkadot-js/api/blob/729db49/packages/api/src/types.ts#L182)*

**`description`** Add custom derives to be injected

___

### `Optional` metadata

• **metadata**? : *`Record<string, string>`*

*Defined in [types.ts:187](https://github.com/polkadot-js/api/blob/729db49/packages/api/src/types.ts#L187)*

**`description`** prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string
if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain

___

### `Optional` provider

• **provider**? : *`ProviderInterface`*

*Defined in [types.ts:192](https://github.com/polkadot-js/api/blob/729db49/packages/api/src/types.ts#L192)*

**`description`** Transport Provider from rpc-provider. If not specified, it will default to
connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___

### `Optional` signer

• **signer**? : *[Signer](_types_.signer.md)*

*Defined in [types.ts:196](https://github.com/polkadot-js/api/blob/729db49/packages/api/src/types.ts#L196)*

**`description`** An external signer which will be used to sign extrinsic when account passed in is not KeyringPair

___

### `Optional` source

• **source**? : *[ApiBase](../classes/_base_.apibase.md)‹*any*›*

*Defined in [types.ts:200](https://github.com/polkadot-js/api/blob/729db49/packages/api/src/types.ts#L200)*

**`description`** The source object to use for runtime information (only used when cloning)

___

### `Optional` types

• **types**? : *`RegistryTypes`*

*Defined in [types.ts:205](https://github.com/polkadot-js/api/blob/729db49/packages/api/src/types.ts#L205)*

**`description`** Additional types used by runtime modules. This is nessusary if the runtime modules
uses types not available in the base Substrate runtime.