

# Type aliases

<a id="headerandvalidators"></a>

##  HeaderAndValidators

**Ƭ HeaderAndValidators**: *[`Header`, `Array`<`AccountId`>]*

*Defined in [chain/subscribeNewHead.ts:12](https://github.com/polkadot-js/api/blob/5a857a3/packages/api-derive/src/chain/subscribeNewHead.ts#L12)*

___

# Functions

<a id="subscribenewhead"></a>

##  subscribeNewHead

▸ **subscribeNewHead**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/subscribeNewHead.ts:27](https://github.com/polkadot-js/api/blob/5a857a3/packages/api-derive/src/chain/subscribeNewHead.ts#L27)*

*__name__*: subscribeNewHead

*__description__*: An observable of the current block header and it's author

*__example__*:   

```javascript
api.derive.chain.subscribeNewHead(({ author, blockNumber }) => {
  console.log(`block #${blockNumber} was authored by ${author}`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
An array containing the block header and the block author

___

