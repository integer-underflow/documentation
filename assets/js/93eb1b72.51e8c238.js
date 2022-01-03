"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},c="How it works",l={unversionedId:"Integration/SystemOverview/howitworks",id:"Integration/SystemOverview/howitworks",isDocsHomePage:!1,title:"How it works",description:"This iteration of Connext's network utilizes nxtp, a lightweight protocol for generalized crosschain transfers.",source:"@site/docs/Integration/SystemOverview/howitworks.md",sourceDirName:"Integration/SystemOverview",slug:"/Integration/SystemOverview/howitworks",permalink:"/Integration/SystemOverview/howitworks",editUrl:"https://github.com/integer-underflow/documentation/docs/Integration/SystemOverview/howitworks.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"integration",previous:{title:"\ud83d\udc4b Welcome!",permalink:"/"},next:{title:"Connext vs XYZ",permalink:"/Integration/SystemOverview/connextvsxyz"}},u=[{value:"Transaction Lifecycle",id:"transaction-lifecycle",children:[]},{value:"Architecture",id:"architecture",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"This iteration of Connext's network utilizes ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/connext/nxtp"},"nxtp"),", a lightweight protocol for generalized crosschain transfers."),(0,a.kt)("p",null,"Nxtp is made up of a simple contract that uses a locking pattern to prepare and fulfill transactions, a network of offchain routers that participate in pricing auctions and pass calldata between chains, and a user-side sdk that finds routes and prompts onchain transactions."),(0,a.kt)("h2",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HighLevelFlow",src:n(6529).Z})),(0,a.kt)("p",null,"Transactions go through three phases:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Route Auction:")," User broadcasts to our network signalling their desired route. Routers respond with sealed bids containing commitments to fulfilling the transaction within a certain time and price range."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Prepare:")," Once the auction is completed, the transaction can be prepared. The user submits a transaction to ",(0,a.kt)("inlineCode",{parentName:"li"},"TransactionManager")," contract on sender-side chain containing router's signed bid. This transaction locks up the users funds on the sending chiain. Upon detecting an event containing their signed bid from the chain, router submits the same transaction to ",(0,a.kt)("inlineCode",{parentName:"li"},"TransactionManager")," on the receiver-side chain, and locks up a corresponding amount of liquidity. The amount locked on the receiving chain is ",(0,a.kt)("inlineCode",{parentName:"li"},"sending amount - auction fee")," so the router is incentivized to complete the transaction."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Fulfill:")," Upon detecting the ",(0,a.kt)("inlineCode",{parentName:"li"},"TransactionPrepared")," event on the receiver-side chain, the user signs a message and sends it to a relayer, who will earn a fee for submission. The relayer (which is typically another router) then submits the message to the ",(0,a.kt)("inlineCode",{parentName:"li"},"TransactionManager")," to complete the user's transaction on receiver-side chain and claim the funds locked by the router. A relayer is used here to allow users to submit transactions with arbitrary calldata on the receiving chain without needing gas to do so. The router then submits the same signed message and completes transaction on sender-side, unlocking the original ",(0,a.kt)("inlineCode",{parentName:"li"},"amount"),".")),(0,a.kt)("p",null,"If a transaction is not fulfilled within a fixed ",(0,a.kt)("inlineCode",{parentName:"p"},"expiry"),", it reverts and can be reclaimed by the party that called prepare on each chain (initiator). Additionally, transactions can be cancelled unilaterally by the person owed funds on that chain (router for sending chain, user for receiving chain) prior to ",(0,a.kt)("inlineCode",{parentName:"p"},"expiry"),"."),(0,a.kt)("p",null,"It is important to note that neither participant should require a store to complete these transactions. All information to ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fulfill"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," transactions should be retrievable through contract events."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:n(2725).Z})),(0,a.kt)("p",null,"The system contains the following pieces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contracts - hold funds for all network participants, and lock/unlock based on data submitted by users and routers"),(0,a.kt)("li",{parentName:"ul"},"Subgraph - enables scalable querying/responding by caching onchain data and events."),(0,a.kt)("li",{parentName:"ul"},"TxService - resiliently attempts to send transactions to chain (with retries, etc.)"),(0,a.kt)("li",{parentName:"ul"},"Messaging - prepares, sends, and listens for message data over nats"),(0,a.kt)("li",{parentName:"ul"},"Router - listens for events from messaging service and subgraph, and then dispatches transactions to txService"),(0,a.kt)("li",{parentName:"ul"},"SDK - creates auctions, listens for events and creates transactions on the user side.")))}d.isMDXComponent=!0},2725:function(e,t,n){t.Z=n.p+"assets/images/Architecture-6db700297f1357f8b5459ce1df5d2ef7.png"},6529:function(e,t,n){t.Z=n.p+"assets/images/HighLevelFlow-8fa010ecd5303fc6b12c9ecb54e5a83b.png"}}]);