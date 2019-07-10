> # External module: "chain/getHeader"

### Index

#### Functions

* [getHeader](_chain_getheader_.md#getheader)

## Functions

###  getHeader

▸ **getHeader**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [chain/getHeader.ts:28](https://github.com/polkadot-js/api/blob/71011cf/packages/api-derive/src/chain/getHeader.ts#L28)*

**`name`** bestNumberFinalized

**`description`** Get a specific block header and extend it with the author

**`example`** 
<BR>

```javascript
const { author, blockNumber } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${blockNumber} was authored by ${author}`);
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

An array containing the block header and the block author