

# Hierarchy

**Signer**

# Properties

<a id="update"></a>

## `<Optional>` update

**● update**: *`undefined` \| `function`*

*Defined in [types.ts:179](https://github.com/polkadot-js/api/blob/a037cab/packages/api/src/types.ts#L179)*

*__description__*: Receives an update for the extrinsic signed by a `signer.sign`

___

# Methods

<a id="sign"></a>

##  sign

▸ **sign**(extrinsic: *`IExtrinsic`*, address: *`string`*, options: *`SignatureOptions`*): `Promise`<`number`>

*Defined in [types.ts:174](https://github.com/polkadot-js/api/blob/a037cab/packages/api/src/types.ts#L174)*

*__description__*: Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsic | `IExtrinsic` |
| address | `string` |
| options | `SignatureOptions` |

**Returns:** `Promise`<`number`>

___

