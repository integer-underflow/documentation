"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[909],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Connext vs XYZ",c={unversionedId:"Integration/SystemOverview/connextvsxyz",id:"Integration/SystemOverview/connextvsxyz",isDocsHomePage:!1,title:"Connext vs XYZ",description:"In general, Connext is the only EVM-focused interoperability system that is both trust-minimized (no new security assumptions) and highly capital efficient (low fees for users).",source:"@site/docs/Integration/SystemOverview/connextvsxyz.md",sourceDirName:"Integration/SystemOverview",slug:"/Integration/SystemOverview/connextvsxyz",permalink:"/documentation/Integration/SystemOverview/connextvsxyz",editUrl:"https://github.com/integer-underflow/documentation/docs/Integration/SystemOverview/connextvsxyz.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"integration",previous:{title:"How it works",permalink:"/documentation/Integration/SystemOverview/howitworks"},next:{title:"Security Model",permalink:"/documentation/Integration/SystemOverview/securitymodel"}},p=[{value:"Interoperability Approaches",id:"interoperability-approaches",children:[]},{value:"Connext vs Pos/MPC Systems",id:"connext-vs-posmpc-systems",children:[]},{value:"Connext vs Hop",id:"connext-vs-hop",children:[]},{value:"Connext vs Optics",id:"connext-vs-optics",children:[]},{value:"Connext vs simple atomic swaps",id:"connext-vs-simple-atomic-swaps",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connext-vs-xyz"},"Connext vs XYZ"),(0,i.kt)("p",null,"In general, Connext is the ",(0,i.kt)("em",{parentName:"p"},"only")," EVM-focused interoperability system that is both trust-minimized (no new security assumptions) and highly capital efficient (low fees for users)."),(0,i.kt)("h2",{id:"interoperability-approaches"},"Interoperability Approaches"),(0,i.kt)("p",null,"The key question behind any interoperability system is to determine ",(0,i.kt)("em",{parentName:"p"},"who")," is responsible for mirroring information across chains. You can learn more about this in our ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/connext/the-interoperability-trilemma-657c2cf69f17"},"Interoperability Trilemma blog post"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Approach"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Mechanism"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Examples"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Trust Minimized (No new security assumptions)"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Generalized (Event data passing)"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Cheap/fast, easy to build, & easy to extend to more systems"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Natively verified"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Chain's own validator set verifies xchain data.  Typically done by running a light client of origin chain inside of the destination chain's VM."),(0,i.kt)("td",{parentName:"tr",align:"center"},"IBC, Near Rainbowbridge, BTC Relay, rollup entry/exit"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Externally verified"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3rd party validator set verifies data across chains. AKA PoS/MPC systems."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Thorchain, Anyswap, Synapse, Hyphen, many many others."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Locally verified"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N-party system is reduced to 1:1 interaction, which is very easy to keep trust-minimized."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Connext, Hop, simple atomic swaps."),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,i.kt)("h2",{id:"connext-vs-posmpc-systems"},"Connext vs Pos/MPC Systems"),(0,i.kt)("p",null,"PoS/MPC systems are interoperability frameworks where some external set of validators or oracles is responsible for moving data/value between chains. They are ",(0,i.kt)("strong",{parentName:"p"},"externally verified")," systems as per the above taxonomy."),(0,i.kt)("p",null,"Externally verified systems are generalized and easy to build, but their security model is necessarily weaker than that of the underlying chains. Connext does not possess the same level of generality as MPC systems, but it does inherit its security from the base chains."),(0,i.kt)("p",null,"For this reason, we think that in cases where generality is not needed, or when a significant amount of value needs to be transferred/secured, Connext is the better option."),(0,i.kt)("h2",{id:"connext-vs-hop"},"Connext vs Hop"),(0,i.kt)("p",null,"Hop is a locally verified mechanism for sending tokens across rollups. Hop leverages existing arbitrary messaging bridges (AMBs) to send funds between chains, with a ",(0,i.kt)("em",{parentName:"p"},"bonder"),' (liquidity provider) fronting the capital on L1 to make the process fast. To incentivize rebalancing, the protocol also utilizes AMMs on both sides to swap between the "canonical" asset for a chain, and hTokens, a representative asset used by the bonder.'),(0,i.kt)("p",null,'Because the "proof" of a transfer is passed between chains using an AMB, Hop bypasses the need for users to run offchain code (unlike Connext). However, this pattern presents some tradeoffs:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security:")," Hop is less economically secure than Connext. The dependency on an AMB for Hop means that one needs to be created if none exists which has the same trust model as an externally verified system. In the case of optimistic rollups, Hop passes their messages through the rollup exit after one day instead of waiting for the full seven day exit, which also reduces security."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Capital Efficiency:")," Hop requires not only the exit liquidity for user provided by a Bonder (similar to Connext), but also liquidity for AMMs on both the sending and receiving chains. Additionally, the Hop Bonder's liquidity is fully locked up while the tx is passed through the AMB (1 day for rollups). In contrast, Connext routers ",(0,i.kt)("em",{parentName:"li"},"only")," need exit liquidity and incur no liquidity lockup, achieving 10x+ better capital usage. The effect of this is that Hop will be either more expensive for the user or less profitable for the LP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Speed and Cost:")," All txs through Hop need to be bonded on the Ethereum L1. This means incurring L1 gas costs as a Bonder. Bonders can batch transactions, but that necessarily means adding latency as Bonders need to wait for more txs. In Connext, transactions go ",(0,i.kt)("em",{parentName:"li"},"directly")," from L2 -> L2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MEV:")," Hop Bonders are highly susceptible to MEV and gas price griefing. Hop Bonders race each other to submit txs to chain, implying that margins for Bonder fees will be squeezed away as Bonders (and/or frontrunning bots) bid up the gas price for a given transaction. In Connext, users negotiate offchain on route and pricing, making it impossible for 3rd parties to frontrun the crosschain transaction.")),(0,i.kt)("p",null,"Functionally, Hop and Connext both support the same level of contract-contract interactions across chains. While it is true that Connext users would need to run some (very lightweight) offchain code to negotiate routes, we are working on building this directly into the wallet layer - this way it is completely invisible to both the developer and user."),(0,i.kt)("h2",{id:"connext-vs-optics"},"Connext vs Optics"),(0,i.kt)("p",null,"Optics is a protocol for passing generalized data between arbitrary chains. Optics explores a very interesting tradeoff between being a locally vs externally verified system. Optics targets slow/infrequent arbitrary message passing between chains, and does this with a bonded relayer that can be slashed for posting incorrect data."),(0,i.kt)("p",null,"We do not consider Optics to be competitive to Connext but instead to be a complementary part of the growing interoperability stack. In fact, we are investigating the use of Optics as a part of our own mechanism for penalizing routers that attempt to grief users."),(0,i.kt)("h2",{id:"connext-vs-simple-atomic-swaps"},"Connext vs simple atomic swaps"),(0,i.kt)("p",null,"Atomic swaps, typically done using htlcs, are a model for crosschain swapping where funds are locked and unlocked atomically between two parties on different chains."),(0,i.kt)("p",null,"Connext aims to be a protocol for more generalized crosschain interactions, rather than for exchanging assets. As such it makes tradeoffs for high reliability/uptime and better generality, at the cost of absolute best price:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connext borrows its core locking mechanism from atomic swaps, but extends the principle to arbitrary contract interactions and transfers."),(0,i.kt)("li",{parentName:"ul"},"Connext uses a route auction and AMM-based pricing mechanism to source liquidity from a network of routers. In contrast atomic swap systems typically use an orderbook mechanism with the goal of trading two assets with a counterparty."),(0,i.kt)("li",{parentName:"ul"},"Connext explicitly only enables interactions of 1:1 assets across chains (e.g. USDC on Polygon to USDC on Arbitrum). This mitigates free options in the system."),(0,i.kt)("li",{parentName:"ul"},"Connext builds external mechanisms to penalize LPs for griefing users.")))}m.isMDXComponent=!0}}]);