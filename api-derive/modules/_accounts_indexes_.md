> # External module: "accounts/indexes"

### Index

#### Type aliases

* [AccountIndexes](_accounts_indexes_.md#accountindexes)

#### Functions

* [indexes](_accounts_indexes_.md#indexes)

## Type aliases

###  AccountIndexes

Ƭ **AccountIndexes**: *`Record<string, AccountIndex>`*

*Defined in [accounts/indexes.ts:13](https://github.com/polkadot-js/api/blob/f95fb6d/packages/api-derive/src/accounts/indexes.ts#L13)*

## Functions

###  indexes

▸ **indexes**(`api`: `ApiInterfaceRx`): *function*

*Defined in [accounts/indexes.ts:32](https://github.com/polkadot-js/api/blob/f95fb6d/packages/api-derive/src/accounts/indexes.ts#L32)*

**`name`** indexes

**`description`** This is an unwieldly query since it loops through
all of the enumsets and returns all of the values found. This could be up to 32k depending
on the number of active accounts in the system

**`example`** 
<BR>

```javascript
api.derive.accounts.indexes((indexes) => {
  console.log('All existing AccountIndexes', indexes);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

Returns all the indexes on the system.

▸ (): *`Observable<AccountIndexes>`*