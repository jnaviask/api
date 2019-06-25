> # External module: "chain/bestNumberLag"

### Index

#### Functions

* [bestNumberLag](_chain_bestnumberlag_.md#bestnumberlag)

## Functions

###  bestNumberLag

▸ **bestNumberLag**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [chain/bestNumberLag.ts:27](https://github.com/polkadot-js/api/blob/68b07eb/packages/api-derive/src/chain/bestNumberLag.ts#L27)*

**`name`** bestNumberLag

**`description`** Calculates the lag between finalized head and best head

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberLag((lag) => {
console.log(`finalized is ${lag} blocks behind head`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

A number of blocks

___