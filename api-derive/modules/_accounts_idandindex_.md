

# Type aliases

<a id="accountidandindex"></a>

##  AccountIdAndIndex

**Ƭ AccountIdAndIndex**: *[`undefined` \| `AccountId`, `undefined` \| `AccountIndex`]*

*Defined in [accounts/idAndIndex.ts:16](https://github.com/polkadot-js/api/blob/f8f05ba/packages/api-derive/src/accounts/idAndIndex.ts#L16)*

___

# Functions

<a id="idandindex"></a>

##  idAndIndex

▸ **idAndIndex**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [accounts/idAndIndex.ts:31](https://github.com/polkadot-js/api/blob/f8f05ba/packages/api-derive/src/accounts/idAndIndex.ts#L31)*

*__name__*: idAndIndex

*__description__*: An array containing the \[\[AccountId\]\] and \[\[AccountIndex\]\] as optional values.

*__example__*:   

```javascript
api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
  console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`

___

