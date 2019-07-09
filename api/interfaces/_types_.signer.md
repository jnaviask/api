> # Interface: Signer

## Hierarchy

* **Signer**

### Index

#### Properties

* [update](_types_.signer.md#optional-update)

#### Methods

* [sign](_types_.signer.md#sign)

## Properties

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:232](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L232)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`

## Methods

###  sign

▸ **sign**(`extrinsic`: `IExtrinsic`, `address`: string, `options`: [SignerOptions](../modules/_types_.md#signeroptions)): *`Promise<number>`*

*Defined in [types.ts:227](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api/src/types.ts#L227)*

**`description`** Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

**Parameters:**

Name | Type |
------ | ------ |
`extrinsic` | `IExtrinsic` |
`address` | string |
`options` | [SignerOptions](../modules/_types_.md#signeroptions) |

**Returns:** *`Promise<number>`*