> # External module: "chain/bestNumber"

### Index

#### Functions

* [bestNumber](_chain_bestnumber_.md#bestnumber)

## Functions

###  bestNumber

▸ **bestNumber**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [chain/bestNumber.ts:24](https://github.com/polkadot-js/api/blob/3b8db2e/packages/api-derive/src/chain/bestNumber.ts#L24)*

**`name`** bestNumber

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((blockNumber) => {
console.log(`the current best block is #${blockNumber}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

The latest block number.

___