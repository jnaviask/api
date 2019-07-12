> # External module: "balances/fees"

### Index

#### Functions

* [fees](_balances_fees_.md#fees)

## Functions

###  fees

▸ **fees**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [balances/fees.ts:27](https://github.com/polkadot-js/api/blob/7772caa/packages/api-derive/src/balances/fees.ts#L27)*

**`name`** fees

**`example`** 
<BR>

```javascript
api.derive.balances.fees(([creationFee, transferFee]) => {
  console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

An object containing the combined results of the storage queries for
all relevant fees as declared in the substrate chain spec.