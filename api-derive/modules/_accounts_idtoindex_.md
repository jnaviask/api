> # External module: "accounts/idToIndex"

### Index

#### Functions

* [idToIndex](_accounts_idtoindex_.md#idtoindex)

## Functions

###  idToIndex

▸ **idToIndex**(`api`: `ApiInterface$Rx`): *`(Anonymous function)`*

*Defined in [accounts/idToIndex.ts:27](https://github.com/polkadot-js/api/blob/51a7263/packages/api-derive/src/accounts/idToIndex.ts#L27)*

**`name`** idToIndex

**`example`** 
<BR>

```javascript
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
  console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

Returns the corresponding AccountIndex.