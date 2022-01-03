"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[437],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=s(a),c=r,u=k["".concat(o,".").concat(c)]||k[c]||m[c]||i;return a?n.createElement(u,l(l({ref:e},p),{},{components:a})):n.createElement(u,l({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6868:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return k}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],d={sidebar_position:2},o="Contract",s={unversionedId:"Integration/APIReference/contractAPI",id:"Integration/APIReference/contractAPI",isDocsHomePage:!1,title:"Contract",description:"Functions",source:"@site/docs/Integration/APIReference/contractAPI.mdx",sourceDirName:"Integration/APIReference",slug:"/Integration/APIReference/contractAPI",permalink:"/documentation/documentation/Integration/APIReference/contractAPI",editUrl:"https://github.com/integer-underflow/documentation/docs/Integration/APIReference/contractAPI.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"integration",previous:{title:"SDK",permalink:"/documentation/documentation/Integration/APIReference/sdkAPI"}},p=[{value:"Functions",id:"functions",children:[{value:"getChainId",id:"getchainid",children:[]},{value:"getStoredChainId",id:"getstoredchainid",children:[]},{value:"addRouter",id:"addrouter",children:[]},{value:"removeRouter",id:"removerouter",children:[]},{value:"addAssetId",id:"addassetid",children:[]},{value:"removeAssetId",id:"removeassetid",children:[]},{value:"addLiquidityFor",id:"addliquidityfor",children:[]},{value:"addLiquidity",id:"addliquidity",children:[]},{value:"removeLiquidity",id:"removeliquidity",children:[]},{value:"prepare",id:"prepare",children:[]},{value:"fulfill",id:"fulfill",children:[]},{value:"cancel",id:"cancel",children:[]},{value:"_addLiquidityForRouter",id:"_addliquidityforrouter",children:[]},{value:"transferAssetToContract",id:"transferassettocontract",children:[]},{value:"recoverCancelSignature",id:"recovercancelsignature",children:[]},{value:"recoverFulfillSignature",id:"recoverfulfillsignature",children:[]},{value:"recoverSignature",id:"recoversignature",children:[]},{value:"hashInvariantTransactionData",id:"hashinvarianttransactiondata",children:[]},{value:"hashVariantTransactionData",id:"hashvarianttransactiondata",children:[]},{value:"_receivingChainFulfill",id:"_receivingchainfulfill",children:[]}]}],m={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contract"},"Contract"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"getchainid"},"getChainId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getChainId(\n  ) public view override returns (uint256 _chainId)\n")),(0,i.kt)("p",null,"Gets the chain id of this contract. If not specified during init, will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"block.chainId"),"."),(0,i.kt)("h3",{id:"getstoredchainid"},"getStoredChainId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getStoredChainId(\n  ) external view override returns (uint256)\n")),(0,i.kt)("p",null,"Gets the chain id that this contract has stored."),(0,i.kt)("h3",{id:"addrouter"},"addRouter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addRouter(\n    address router\n  ) external override onlyOwner\n")),(0,i.kt)("p",null,"Adds a router to the router list that can transact crosschain."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The router address to add")))),(0,i.kt)("h3",{id:"removerouter"},"removeRouter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeRouter(\n    address router\n  ) external override onlyOwner\n")),(0,i.kt)("p",null,"Removes a router from the router list that can transact crosschain."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The router address to remove")))),(0,i.kt)("h3",{id:"addassetid"},"addAssetId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addAssetId(\n    address assetId\n  ) external override onlyOwner\n")),(0,i.kt)("p",null,"Adds an asset to the asset list that can be transferred"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The asset address should be on the same chain as the contract.")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The asset address to add to the list")))),(0,i.kt)("h3",{id:"removeassetid"},"removeAssetId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeAssetId(\n    address assetId\n  ) external override onlyOwner\n")),(0,i.kt)("p",null,"Removes an asset from the asset list that can be transferred"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The asset address should be on the same chain as the contract.")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The asset address to remove from the list")))),(0,i.kt)("h3",{id:"addliquidityfor"},"addLiquidityFor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addLiquidityFor(\n    uint256 amount,\n    address assetId,\n    address router\n  ) external payable override nonReentrant\n")),(0,i.kt)("p",null,"Adds liquidity to a router."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of assetId to add as liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address (or ",(0,i.kt)("inlineCode",{parentName:"td"},"address(0)")," for native asset) of the asset to add")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The router to add liquidity")))),(0,i.kt)("h3",{id:"addliquidity"},"addLiquidity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function addLiquidity(\n    uint256 amount,\n    address assetId\n  ) external payable override nonReentrant\n")),(0,i.kt)("p",null,"Adds liquidity to a router."),(0,i.kt)("p",null,"This function should be called from a router, since it passes ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," as a router to ",(0,i.kt)("inlineCode",{parentName:"p"},"_addLiquidityForRouter"),"."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of assetId to add as liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address (or ",(0,i.kt)("inlineCode",{parentName:"td"},"address(0)")," for native asset) of the asset to add")))),(0,i.kt)("h3",{id:"removeliquidity"},"removeLiquidity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function removeLiquidity(\n    uint256 amount,\n    address assetId,\n    address payable recipient\n  ) external override nonReentrant\n")),(0,i.kt)("p",null,"Removes liquidity from a router."),(0,i.kt)("p",null,"This function should be called from a router."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of assetId to remove as liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address (or ",(0,i.kt)("inlineCode",{parentName:"td"},"address(0)")," for native asset) of the asset to remove")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"recipient")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address to transfer removed liquidity to")))),(0,i.kt)("h3",{id:"prepare"},"prepare"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prepare(\n    PrepareArgs calldata args\n  ) external payable override nonReentrant returns (TransactionData memory)\n")),(0,i.kt)("p",null,"Creates a crosschain transaction."),(0,i.kt)("p",null,"When called on the sending chain, the user is expected to lock up funds.\nWhen called on the receiving chain, the router deducts the transfer amount from the available liquidity.\nThe majority of the information about a given transfer does not change between chains,\nwith three notable exceptions: ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"expiry"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"preparedBlock"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"expiry")," are decremented between sending and receiving chains to provide an incentive for\nthe router to complete the transaction and time for the router to fulfill the transaction on the sending chain\nafter the unlocking signature is revealed, respectively."),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.PrepareArgs"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The parameters for crosschain transaction, encoded as ",(0,i.kt)("inlineCode",{parentName:"td"},"PrepareArgs")," in calldata")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.TransactionData"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction data")))),(0,i.kt)("h3",{id:"fulfill"},"fulfill"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function fulfill(\n    FulfillArgs calldata args\n  ) external override nonReentrant returns (TransactionData memory)\n")),(0,i.kt)("p",null,"Completes a crosschain transaction."),(0,i.kt)("p",null,"When called on the receiving chain, the user reveals their signature on the transactionId and is sent the amount corresponding to\nthe number of shares the router locked when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare"),". The router then uses this signature to unlock the corresponding funds on\nthe receiving chain, which are then added back to their available liquidity. The user includes a relayer fee since it is not\nassumed they will have gas on the receiving chain. This function ",(0,i.kt)("em",{parentName:"p"},"must")," be called before the transaction expiry has elapsed."),(0,i.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.FulfillArgs"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The parameters for completing a crosschain transaction, encoded as ",(0,i.kt)("inlineCode",{parentName:"td"},"FulfillArgs")," in calldata")))),(0,i.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.TransactionData"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction data")))),(0,i.kt)("h3",{id:"cancel"},"cancel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function cancel(\n    CancelArgs calldata args\n  ) external override nonReentrant returns (TransactionData memory)\n")),(0,i.kt)("p",null,"Cancels a crosschain transaction."),(0,i.kt)("p",null,"Any crosschain transaction can be cancelled after it has been created to prevent indefinite lock up of funds.\nAfter the transaction has expired, anyone can cancel it. Before the expiry, only the recipient of the funds on the given chain is\nable to cancel. On the sending chain, this means only the router is able to cancel before the expiry, while only the user can\nprematurely cancel on the receiving chain."),(0,i.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.CancelArgs"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The parameters for canceling a crosschain transaction, encoded as ",(0,i.kt)("inlineCode",{parentName:"td"},"CancelArgs")," in calldata")))),(0,i.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.TransactionData"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction data")))),(0,i.kt)("h3",{id:"_addliquidityforrouter"},"_addLiquidityForRouter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _addLiquidityForRouter(\n    uint256 amount,\n    address assetId,\n    address router\n  ) internal\n")),(0,i.kt)("p",null,"Adds liquidity to a router. This is a helper function containing the logic to verify, and to add liquidity to a given router."),(0,i.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of assetId to add as liquidity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address (or ",(0,i.kt)("inlineCode",{parentName:"td"},"address(0)")," for native asset) of the asset to add")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The router to add liquidity")))),(0,i.kt)("h3",{id:"transferassettocontract"},"transferAssetToContract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transferAssetToContract(\n    address assetId,\n    uint256 specifiedAmount\n  ) internal returns (uint256)\n")),(0,i.kt)("p",null,"This is a helper function to handle transferring funds from msg.sender to the transaction manager contract. It is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_addLiquidityForRouter"),"."),(0,i.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address (or ",(0,i.kt)("inlineCode",{parentName:"td"},"address(0)")," for native asset) of the asset to transfer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"specifiedAmount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of assetId to transfer")))),(0,i.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of the asset that has been transferred")))),(0,i.kt)("h3",{id:"recovercancelsignature"},"recoverCancelSignature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function recoverCancelSignature(\n    bytes32 transactionId,\n    uint256 receivingChainId,\n    address receivingChainTxManagerAddress,\n    bytes calldata signature\n  ) internal pure returns (address)\n")),(0,i.kt)("p",null,"This is a helper function to recover the signer address from the signature."),(0,i.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"transactionId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction identifier of the recovering transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"receivingChainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The receiving chain id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"receivingChainTxManagerAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction manager address on the receiving chain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signature")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The signature to recover the signer address from")))),(0,i.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The signer address of the signature")))),(0,i.kt)("h3",{id:"recoverfulfillsignature"},"recoverFulfillSignature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function recoverFulfillSignature(\n    bytes32 transactionId,\n    uint256 relayerFee,\n    uint256 receivingChainId,\n    address receivingChainTxManagerAddress,\n    bytes calldata signature\n  ) internal pure returns (address)\n")),(0,i.kt)("p",null,"This is a helper function to recover the signer address from the signature."),(0,i.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"transactionId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction identifier of the recovering transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"relayerFee")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fee paid to the relayer for submitting the transaction for the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"receivingChainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The receiving chain id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"receivingChainTxManagerAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction manager address on the receiving chain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signature")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The signature to recover the signer address from")))),(0,i.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The signer address of the signature")))),(0,i.kt)("h3",{id:"recoversignature"},"recoverSignature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function recoverSignature(\n    bytes memory encodedPayload,\n    bytes calldata signature\n  ) internal pure returns (address)\n")),(0,i.kt)("p",null,"This is a helper function to recover the signer address from the signature and the encodedPayload."),(0,i.kt)("h4",{id:"parameters-14"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"encodedPayload")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The encoded payload that was signed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signature")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The signature to recover the signer address from")))),(0,i.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The signer address of the signature")))),(0,i.kt)("h3",{id:"hashinvarianttransactiondata"},"hashInvariantTransactionData"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hashInvariantTransactionData(\n    TransactionData calldata txData\n  ) internal pure returns (bytes32)\n")),(0,i.kt)("p",null,"This is a helper function to get the hash of only the invariant portions of a given crosschain transaction."),(0,i.kt)("h4",{id:"parameters-15"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"txData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.TransactionData"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction data, encoded as ",(0,i.kt)("inlineCode",{parentName:"td"},"TransactionData")," in calldata")))),(0,i.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The hash of the invariant transaction data")))),(0,i.kt)("h3",{id:"hashvarianttransactiondata"},"hashVariantTransactionData"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hashVariantTransactionData(\n    uint256 amount,\n    uint256 expiry,\n    uint256 preparedBlockNumber\n  ) internal pure returns (bytes32)\n")),(0,i.kt)("p",null,"This is a helper function to get the hash of only the variant portions of a given crosschain transaction."),(0,i.kt)("h4",{id:"parameters-16"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of the transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"expiry")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The expiry of the transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"preparedBlockNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The prepared block number")))),(0,i.kt)("h4",{id:"return-values-8"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The hash of the variant transaction data")))),(0,i.kt)("h3",{id:"_receivingchainfulfill"},"_receivingChainFulfill"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _receivingChainFulfill(\n    TransactionData calldata txData,\n    uint256 relayerFee,\n    bytes calldata callData\n  ) internal returns (bool, bool, bytes memory)\n")),(0,i.kt)("p",null,"This is a helper function to handle the receiving-chain fulfillment.\nThis function should pay the relayer and either send funds to the specified address or execute the calldata.\nReturns a tuple of boolean, bytes indicating the success and return data of the external call."),(0,i.kt)("h4",{id:"parameters-17"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"txData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ITransactionManager.TransactionData"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The transaction data, encoded as ",(0,i.kt)("inlineCode",{parentName:"td"},"TransactionData")," in calldata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"relayerFee")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fee paid to the relayer for submitting the transaction for the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"callData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The prepared block number")))),(0,i.kt)("h4",{id:"return-values-9"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The result of calling the external call (false if it is simply sending funds)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"True if it is external call and the ",(0,i.kt)("inlineCode",{parentName:"td"},"txData.callTo")," is a contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The return data of the external call")))))}k.isMDXComponent=!0}}]);