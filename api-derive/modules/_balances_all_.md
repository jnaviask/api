> # External module: "balances/all"

### Index

#### Functions

* [all](_balances_all_.md#all)

## Functions

###  all

▸ **all**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [balances/all.ts:75](https://github.com/polkadot-js/api/blob/8f89b9d/packages/api-derive/src/balances/all.ts#L75)*

**`name`** all

**`example`** 
<BR>

```javascript
const ALICE = 'F7Hs';

api.derive.balances.all(ALICE, ([accountId, lockedBalance]) => {
console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

An object containing the combined results of the storage queries for
all relevant fees as declared in the substrate chain spec.

___