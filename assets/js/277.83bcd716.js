(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{522:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("h1",{attrs:{id:"class-address"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-address","aria-hidden":"true"}},[t._v("#")]),t._v(" Class: Address")])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("name")])]),t._v(" Address")]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v("\nA wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.\nSince we are dealing with underlying publicKeys (or shorter encoded addresses),\nwe extend from Base with an AccountId/AccountIndex wrapper. Basically the Address\nis encoded as "),r("code",[t._v("[ <prefix-byte>, ...publicKey/...bytes ]")]),t._v(" as per spec")]),t._v(" "),r("h2",{attrs:{id:"hierarchy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),r("ul",[r("li",[r("p",[r("router-link",{attrs:{to:"/types/classes/_codec_base_.base.html"}},[t._v("Base")]),t._v("‹"),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[t._v("AccountId")]),t._v(" | "),r("router-link",{attrs:{to:"/types/classes/_primitive_accountindex_.accountindex.html"}},[t._v("AccountIndex")])],1),t._v("›")],1),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Address")])])])])]),t._v(" "),r("h2",{attrs:{id:"implements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implements","aria-hidden":"true"}},[t._v("#")]),t._v(" Implements")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[t._v("Codec")])],1)]),t._v(" "),r("h3",{attrs:{id:"index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[t._v("#")]),t._v(" Index")]),t._v(" "),r("h4",{attrs:{id:"constructors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructors","aria-hidden":"true"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#constructor"}},[t._v("constructor")])],1)]),t._v(" "),r("h4",{attrs:{id:"accessors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessors","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessors")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#encodedlength"}},[t._v("encodedLength")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#isempty"}},[t._v("isEmpty")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#rawlength"}},[t._v("rawLength")])],1)]),t._v(" "),r("h4",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#eq"}},[t._v("eq")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tohex"}},[t._v("toHex")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tojson"}},[t._v("toJSON")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#torawtype"}},[t._v("toRawType")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tostring"}},[t._v("toString")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tou8a"}},[t._v("toU8a")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#static-decodeaddress"}},[t._v("decodeAddress")])],1)]),t._v(" "),r("h2",{attrs:{id:"constructors-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructors-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),r("h3",{attrs:{id:"constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),r("p",[t._v("+ "),r("strong",[t._v("new Address")]),t._v("("),r("code",[t._v("value")]),t._v(": "),r("code",[t._v("AnyAddress")]),t._v("): "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html"}},[t._v("Address")])],1)]),t._v(" "),r("p",[r("em",[t._v("Overrides "),r("router-link",{attrs:{to:"/types/classes/_codec_base_.base.html"}},[t._v("Base")]),t._v("."),r("router-link",{attrs:{to:"/types/classes/_codec_base_.base.html#constructor"}},[t._v("constructor")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L27",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:27"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Default")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("value")])]),t._v(" "),r("td",[r("code",[t._v("AnyAddress")])]),t._v(" "),r("td",[t._v("new Uint8Array()")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html"}},[t._v("Address")])],1)]),t._v(" "),r("h2",{attrs:{id:"accessors-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessors-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessors")]),t._v(" "),r("h3",{attrs:{id:"encodedlength"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encodedlength","aria-hidden":"true"}},[t._v("#")]),t._v(" encodedLength")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("get encodedLength")]),t._v("(): "),r("em",[t._v("number")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L69",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:69"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" The length of the value when encoded as a Uint8Array")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("number")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"isempty"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#isempty","aria-hidden":"true"}},[t._v("#")]),t._v(" isEmpty")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("get isEmpty")]),t._v("(): "),r("em",[t._v("boolean")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L83",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:83"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Checks if the value is an empty value")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("boolean")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"rawlength"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rawlength","aria-hidden":"true"}},[t._v("#")]),t._v(" rawLength")]),t._v(" "),r("p",[t._v("• "),r("strong",[t._v("get rawLength")]),t._v("(): "),r("em",[t._v("number")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L90",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:90"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" The length of the raw value, either AccountIndex or AccountId")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("number")])]),t._v(" "),r("h2",{attrs:{id:"methods-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),r("h3",{attrs:{id:"eq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eq","aria-hidden":"true"}},[t._v("#")]),t._v(" eq")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("eq")]),t._v("("),r("code",[t._v("other?")]),t._v(": any): "),r("em",[t._v("boolean")])]),t._v(" "),r("p",[r("em",[t._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[t._v("Codec")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L99",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:99"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Compares the value of the input to see if there is a match")]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("other?")])]),t._v(" "),r("td",[t._v("any")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("boolean")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"tohex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tohex","aria-hidden":"true"}},[t._v("#")]),t._v(" toHex")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("toHex")]),t._v("(): "),r("em",[t._v("string")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L106",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:106"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Returns a hex string representation of the value")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("string")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"tojson"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tojson","aria-hidden":"true"}},[t._v("#")]),t._v(" toJSON")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("toJSON")]),t._v("(): "),r("em",[t._v("string")])]),t._v(" "),r("p",[r("em",[t._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[t._v("Codec")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L113",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:113"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Converts the Object to JSON, typically used for RPC transfers")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("string")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"torawtype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#torawtype","aria-hidden":"true"}},[t._v("#")]),t._v(" toRawType")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("toRawType")]),t._v("(): "),r("em",[t._v("string")])]),t._v(" "),r("p",[r("em",[t._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[t._v("Codec")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L127",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:127"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Returns the base runtime type name for this instance")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("string")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"tostring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tostring","aria-hidden":"true"}},[t._v("#")]),t._v(" toString")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("toString")]),t._v("(): "),r("em",[t._v("string")])]),t._v(" "),r("p",[r("em",[t._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[t._v("Codec")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L120",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:120"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Returns the string representation of the value")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("string")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"tou8a"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tou8a","aria-hidden":"true"}},[t._v("#")]),t._v(" toU8a")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("toU8a")]),t._v("("),r("code",[t._v("isBare?")]),t._v(": undefined | false | true): "),r("em",[r("code",[t._v("Uint8Array")])])]),t._v(" "),r("p",[r("em",[t._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[t._v("Codec")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L135",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:135"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[r("code",[t._v("description")])]),t._v(" Encodes the value as a Uint8Array as per the SCALE specifications")]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("isBare?")])]),t._v(" "),r("td",[t._v("undefined | false | true")]),t._v(" "),r("td",[t._v("true when the value has none of the type-specific prefixes (internal)")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[r("code",[t._v("Uint8Array")])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"static-decodeaddress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-decodeaddress","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("Static")]),t._v(" decodeAddress")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("decodeAddress")]),t._v("("),r("code",[t._v("value")]),t._v(": "),r("code",[t._v("AnyAddress")]),t._v("): "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[t._v("AccountId")]),t._v(" | "),r("router-link",{attrs:{to:"/types/classes/_primitive_accountindex_.accountindex.html"}},[t._v("AccountIndex")])],1)]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/3b339a2/packages/types/src/primitive/Address.ts#L34",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/Address.ts:34"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("value")])]),t._v(" "),r("td",[r("code",[t._v("AnyAddress")])])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[t._v("AccountId")]),t._v(" | "),r("router-link",{attrs:{to:"/types/classes/_primitive_accountindex_.accountindex.html"}},[t._v("AccountIndex")])],1)])])},[],!1,null,null,null);e.default=a.exports}}]);