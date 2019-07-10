> # External module: "contracts/fees"

### Index

#### Functions

* [fees](_contracts_fees_.md#fees)

## Functions

###  fees

▸ **fees**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [contracts/fees.ts:29](https://github.com/polkadot-js/api/blob/557699e/packages/api-derive/src/contracts/fees.ts#L29)*

**`name`** fees

**`example`** 
<BR>

```javascript
api.derive.contracts.fees(([creationFee, transferFee]) => {
  console.log(`The fee for creating a new contract on this chain is ${creationFee} units. The fee required to call this contract is ${transferFee} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

An object containing the combined results of the queries for
all relevant contract fees as declared in the substrate chain spec.