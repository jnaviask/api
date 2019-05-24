

# Hierarchy

**Signer**

# Properties

<a id="update"></a>

## `<Optional>` update

**● update**: *`undefined` \| `function`*

*Defined in [types.ts:205](https://github.com/polkadot-js/api/blob/054cf1f/packages/api/src/types.ts#L205)*

*__description__*: Receives an update for the extrinsic signed by a `signer.sign`

___

# Methods

<a id="sign"></a>

##  sign

▸ **sign**(extrinsic: *`IExtrinsic`*, address: *`string`*, options: *[SignerOptions](../modules/_types_.md#signeroptions)*): `Promise`<`number`>

*Defined in [types.ts:200](https://github.com/polkadot-js/api/blob/054cf1f/packages/api/src/types.ts#L200)*

*__description__*: Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsic | `IExtrinsic` |
| address | `string` |
| options | [SignerOptions](../modules/_types_.md#signeroptions) |

**Returns:** `Promise`<`number`>

___

