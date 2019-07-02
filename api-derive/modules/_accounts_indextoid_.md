> # External module: "accounts/indexToId"

### Index

#### Functions

* [indexToId](_accounts_indextoid_.md#indextoid)

## Functions

###  indexToId

▸ **indexToId**(`api`: *`ApiInterface$Rx`*): *`(Anonymous function)`*

*Defined in [accounts/indexToId.ts:26](https://github.com/polkadot-js/api/blob/7229a5f/packages/api-derive/src/accounts/indexToId.ts#L26)*

**`name`** indexToId

**`example`** 
<BR>

```javascript
api.derive.accounts.indexToId('F7Hs', (accountId) => {
  console.log(`The AccountId of F7Hs is ${accountId}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterface$Rx` |

**Returns:** *`(Anonymous function)`*

Returns the corresponding AccountId.