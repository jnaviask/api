

# Functions

<a id="bestnumberlag"></a>

##  bestNumberLag

▸ **bestNumberLag**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/bestNumberLag.ts:27](https://github.com/polkadot-js/api/blob/73f2a2a/packages/api-derive/src/chain/bestNumberLag.ts#L27)*

*__name__*: bestNumberLag

*__description__*: Calculates the lag between finalized head and best head

*__example__*:   

```javascript
api.derive.chain.bestNumberLag((lag) => {
  console.log(`finalized is ${lag} blocks behind head`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
A number of blocks

___

