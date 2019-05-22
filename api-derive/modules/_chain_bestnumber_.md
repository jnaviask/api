

# Functions

<a id="bestnumber"></a>

##  bestNumber

▸ **bestNumber**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/bestNumber.ts:24](https://github.com/polkadot-js/api/blob/bdd1ca4/packages/api-derive/src/chain/bestNumber.ts#L24)*

*__name__*: bestNumber

*__example__*:   

```javascript
api.derive.chain.bestNumber((blockNumber) => {
  console.log(`the current best block is #${blockNumber}`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
The latest block number.

___

