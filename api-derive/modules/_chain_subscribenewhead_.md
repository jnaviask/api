

# Type aliases

<a id="headerandvalidators"></a>

##  HeaderAndValidators

**Ƭ HeaderAndValidators**: *[`Header`, `Array`<`AccountId`>]*

*Defined in [chain/subscribeNewHead.ts:13](https://github.com/polkadot-js/api/blob/6771f99/packages/api-derive/src/chain/subscribeNewHead.ts#L13)*

___

# Functions

<a id="subscribenewhead"></a>

##  subscribeNewHead

▸ **subscribeNewHead**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/subscribeNewHead.ts:28](https://github.com/polkadot-js/api/blob/6771f99/packages/api-derive/src/chain/subscribeNewHead.ts#L28)*

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

