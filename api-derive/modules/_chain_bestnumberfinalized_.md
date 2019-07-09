> # External module: "chain/bestNumberFinalized"

### Index

#### Functions

* [bestNumberFinalized](_chain_bestnumberfinalized_.md#bestnumberfinalized)

## Functions

###  bestNumberFinalized

▸ **bestNumberFinalized**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [chain/bestNumberFinalized.ts:25](https://github.com/polkadot-js/api/blob/2eee6cf/packages/api-derive/src/chain/bestNumberFinalized.ts#L25)*

**`name`** bestNumberFinalized

**`description`** Get the latest finalized block number.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberFinalized((blockNumber) => {
  console.log(`the current finalized block is #${blockNumber}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

A BlockNumber