

# Type aliases

<a id="accountindexes"></a>

##  AccountIndexes

**Ƭ AccountIndexes**: *`object`*

*Defined in [accounts/indexes.ts:13](https://github.com/polkadot-js/api/blob/97032e7/packages/api-derive/src/accounts/indexes.ts#L13)*

#### Type declaration

[index: `string`]: `AccountIndex`

___

# Functions

<a id="indexes"></a>

##  indexes

▸ **indexes**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [accounts/indexes.ts:22](https://github.com/polkadot-js/api/blob/97032e7/packages/api-derive/src/accounts/indexes.ts#L22)*

Returns all the indexes on the system - this is an unwieldly query since it loops through all of the enumsets and returns all of the values found. This could be up to 32k depending on the number of active accounts in the system

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`

___

