

# Functions

<a id="all"></a>

##  all

▸ **all**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [balances/all.ts:75](https://github.com/polkadot-js/api/blob/9d00dce/packages/api-derive/src/balances/all.ts#L75)*

*__name__*: all

*__example__*:   

```javascript
const ALICE = 'F7Hs';

api.derive.balances.all(ALICE, ([accountId, lockedBalance]) => {
  console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
An object containing the combined results of the storage queries for all relevant fees as declared in the substrate chain spec.

___

