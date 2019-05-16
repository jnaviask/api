

# Functions

<a id="idtoindex"></a>

##  idToIndex

▸ **idToIndex**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [accounts/idToIndex.ts:27](https://github.com/polkadot-js/api/blob/b701bdf/packages/api-derive/src/accounts/idToIndex.ts#L27)*

*__name__*: idToIndex

*__example__*:   

```javascript
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
  console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
Returns the corresponding AccountIndex.

___

