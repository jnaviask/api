

# Functions

<a id="getheader"></a>

##  getHeader

▸ **getHeader**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/getHeader.ts:28](https://github.com/polkadot-js/api/blob/4a22a43/packages/api-derive/src/chain/getHeader.ts#L28)*

*__name__*: bestNumberFinalized

*__description__*: Get a specific block header and extend it with the author

*__example__*:   

```javascript
const { author, blockNumber } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${blockNumber} was authored by ${author}`);
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
An array containing the block header and the block author

___

