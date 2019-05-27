

# Type aliases

<a id="accountindexes"></a>

##  AccountIndexes

**Ƭ AccountIndexes**: *`object`*

*Defined in [accounts/indexes.ts:13](https://github.com/polkadot-js/api/blob/c916da6/packages/api-derive/src/accounts/indexes.ts#L13)*

#### Type declaration

[index: `string`]: `AccountIndex`

___

# Functions

<a id="indexes"></a>

##  indexes

▸ **indexes**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [accounts/indexes.ts:32](https://github.com/polkadot-js/api/blob/c916da6/packages/api-derive/src/accounts/indexes.ts#L32)*

*__name__*: indexes

*__description__*: This is an unwieldly query since it loops through all of the enumsets and returns all of the values found. This could be up to 32k depending on the number of active accounts in the system

*__example__*:   

```javascript
api.derive.accounts.indexes((indexes) => {
  console.log('All existing AccountIndexes', indexes);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
Returns all the indexes on the system.

___

