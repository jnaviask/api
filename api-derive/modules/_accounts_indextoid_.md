> # External module: "accounts/indexToId"

### Index

#### Functions

* [indexToId](_accounts_indextoid_.md#indextoid)

## Functions

###  indexToId

▸ **indexToId**(`api`: `ApiInterfaceRx`): *function*

*Defined in [accounts/indexToId.ts:26](https://github.com/polkadot-js/api/blob/b77b3db/packages/api-derive/src/accounts/indexToId.ts#L26)*

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
`api` | `ApiInterfaceRx` |

**Returns:** *function*

Returns the corresponding AccountId.

▸ (`accountIndex`: `AccountIndex` | string): *`Observable<AccountId | undefined>`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`accountIndex` | `AccountIndex` \| string | An accounts index in different formats. |