

# Functions

<a id="fees"></a>

##  fees

▸ **fees**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [balances/fees.ts:27](https://github.com/polkadot-js/api/blob/6f3c8f7/packages/api-derive/src/balances/fees.ts#L27)*

*__name__*: fees

*__example__*:   

```javascript
api.derive.balances.fees(([creationFee, transferFee]) => {
  console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
An object containing the combined results of the storage queries for all relevant fees as declared in the substrate chain spec.

___

