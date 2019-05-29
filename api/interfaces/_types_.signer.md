

# Hierarchy

**Signer**

# Properties

<a id="update"></a>

## `<Optional>` update

**● update**: *`undefined` \| `function`*

*Defined in [types.ts:206](https://github.com/polkadot-js/api/blob/55cb55a/packages/api/src/types.ts#L206)*

*__description__*: Receives an update for the extrinsic signed by a `signer.sign`

___

# Methods

<a id="sign"></a>

##  sign

▸ **sign**(extrinsic: *`IExtrinsic`*, address: *`string`*, options: *[SignerOptions](../modules/_types_.md#signeroptions)*): `Promise`<`number`>

*Defined in [types.ts:201](https://github.com/polkadot-js/api/blob/55cb55a/packages/api/src/types.ts#L201)*

*__description__*: Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsic | `IExtrinsic` |
| address | `string` |
| options | [SignerOptions](../modules/_types_.md#signeroptions) |

**Returns:** `Promise`<`number`>

___

