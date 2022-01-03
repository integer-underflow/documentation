"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[643],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8234:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={sidebar_position:1},s="Configuration",c={unversionedId:"Routers/Reference/configuration",id:"Routers/Reference/configuration",isDocsHomePage:!1,title:"Configuration",description:"The router is accepts configuration using the config file config.json in the root directory of the docker-compose repo.",source:"@site/docs/Routers/Reference/configuration.md",sourceDirName:"Routers/Reference",slug:"/Routers/Reference/configuration",permalink:"/documentation/Routers/Reference/configuration",editUrl:"https://github.com/integer-underflow/documentation/docs/Routers/Reference/configuration.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"routers",previous:{title:"Testing a Router",permalink:"/documentation/Routers/Guides/testing-router"},next:{title:"REST API",permalink:"/documentation/Routers/Reference/rest-api"}},d=[{value:"Example Configuration File",id:"example-configuration-file",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The router is accepts configuration using the config file ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," in the root directory of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/connext/nxtp-router-docker-compose"},"docker-compose repo"),"."),(0,r.kt)("p",null,"The JSON schema accepts the following keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"adminToken"),": ",(0,r.kt)("em",{parentName:"li"},"Required"),". Secret token used to authenticate admin requests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routerContractAddress"),": ",(0,r.kt)("em",{parentName:"li"},"Recommended"),". Address of the router contract. If not provided, the router sends transactions itself without a relay. This is deprecated behavior and the router contract should always be used. See the section on ",(0,r.kt)("a",{parentName:"li",href:"../Guides/Spinning-Up"},"Spinning-Up")," for more info."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web3SignerUrl"),": ",(0,r.kt)("em",{parentName:"li"},"Recommended"),". The URL for a running ",(0,r.kt)("a",{parentName:"li",href:"https://docs.web3signer.consensys.net/en/latest/"},"Web3Signer")," instance. This is the recommended approach to private key storage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mnemonic"),": ",(0,r.kt)("em",{parentName:"li"},"Optional, Discouraged"),". The mnemonic used to generate the private key. Using the mnemonic directly in the config file is unsafe and not recommended."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainConfig"),": ",(0,r.kt)("em",{parentName:"li"},"Required"),". The chain configuration. A JSON object with the following keyed by ",(0,r.kt)("inlineCode",{parentName:"li"},"chainId")," with the following object schema as value:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providers"),": ",(0,r.kt)("em",{parentName:"li"},"Required"),". An array of providers URLs for a chain. Use a minimum of 1 URL, but additional URLs provide more fallback protection against provider issues."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subgraph"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". An array of subgraph URLs for a chain. Additional URLs provide more fallback protection against subgraph issues. If not provided, will default to Connext's hosted subgraphs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"analyticsSubgraph"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". An array of subgraph URLs for a chain. Additional URLs provide more fallback protection against subgraph issues. If not provided, will default to Connext's hosted subgraphs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactionManagerAddress"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The address of the transaction manager contract. If not provided, will default to the latest deployed contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"priceOracleAddress"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The address of the price oracle contract. If not provided, will default to the latest deployed contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multicallAddress"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The address of the multicall contract. If not provided, will default to the latest deployed contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"confirmations"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The number of confirmations required for a transaction to be considered valid on a chain. Defaults to defined values ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/connext/chaindata/blob/29cc0250aff398cdf9326dcb7698d291f3e3015a/crossChain.json"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minGas"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The minimum gas amount required to be held by the router's signer address in order to participate in auctions, specified in Wei. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"100000000000000000")," (0.1 Ether)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gasStations"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". Array of gas station URLs, defaults to using the RPC's gas estimation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowRelay"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". Boolean to control whether this router will participate in relaying transactions on this chain. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relayerFeeThreshold"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". Minimum threshold percentage that the relayer fee can be below the router's estimated amount. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subgraphSyncBuffer"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The number of blocks to allow the subgraph's latest block number to be behind the provider's latest block number."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swapPools"),": ",(0,r.kt)("em",{parentName:"li"},"Required"),". An array of swap pools. Each pool is a JSON object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The name of the swap pool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets"),": ",(0,r.kt)("em",{parentName:"li"},"Required"),". An array of assets. Each asset is a JSON object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assetId"),": ",(0,r.kt)("em",{parentName:"li"},"Required"),". The asset ID (ERC20 token address). For native assets, use ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000000000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId"),": ",(0,r.kt)("em",{parentName:"li"},"Required"),". The chain ID."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logLevel"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The log level. One of ",(0,r.kt)("inlineCode",{parentName:"li"},"fatal"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"debug"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"trace"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"silent"),". Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The port the router will listen on. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"8080"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The host the router will listen on. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The messaging network to connect to (separate from blockchain network). One of ",(0,r.kt)("inlineCode",{parentName:"li"},"testnet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"local"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestLimit"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". The minimal period in milliseconds users can request an auction for a particular swap to each router to avoid spam. Defaults to 500 (ms)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cleanUpMode"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". Boolean to set mode to use to not accept new auctions and continue to handle in-progress auctions. Defaults to false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diagnosticMode"),": ",(0,r.kt)("em",{parentName:"li"},"Optional"),". Boolean to set mode to use to not accept new auctions not run any subgraph loops/handlers for in-depth debugging. Defaults to false.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You must add a provider for chain 1 (Ethereum mainnet) even if you don't plan to support Ethereum assets. This is because of the price calculation for gas reimbursement."))),(0,r.kt)("h2",{id:"example-configuration-file"},"Example Configuration File"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"These are example RPC URLs. Please get your own RPC URLs!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "adminToken": "supersecret",\n  "chainConfig": {\n    "10": {\n      "providers": ["https://mainnet.optimism.io"],\n      "defaultInitialGasPrice": "1000000",\n      "routerContractRelayerAsset": "0x0000000000000000000000000000000000000000"\n    },\n    "56": {\n      "providers": ["https://bscrpc.com/"]\n    },\n    "100": {\n      "providers": [\n        "https://foo.xdai.quiknode.pro/JFKJDKFJDKJ",\n        "https://rpc.xdaichain.com/",\n        "https://xdai.poanetwork.dev/",\n        "https://dai.poa.network/"\n      ]\n    },\n    "122": {\n      "providers": ["https://rpc.fuse.io/"],\n      "minGas": "100000000000000"\n    },\n    "137": {\n      "providers": ["https://polygon-rpc.com/"],\n      "minGas": "100000000000000"\n    },\n    "250": {\n      "providers": [\n        "https://rpcapi.fantom.network",\n        "https://rpc.ftm.tools",\n        "https://foo.fantom.quiknode.pro/JFKJDKFJDKJ/"\n      ],\n      "minGas": "100000000000000"\n    },\n    "42161": {\n      "providers": ["https://arb-mainnet.g.alchemy.com/v2/FJDKJFDKJD"],\n      "minGas": "100000000000000"\n    },\n    "43114": {\n      "providers": ["https://api.avax.network/ext/bc/C/rpc"],\n      "minGas": "100000000000000"\n    },\n    "1": {\n      "providers": [\n        "https://eth-mainnet.alchemyapi.io/v2/JFKJDKFJDKJ",\n        "https://mainnet.infura.io/v3/JFKJDKFJDKJ",\n        "https://cloudflare-eth.com"\n      ]\n    }\n  },\n  "cleanUpMode": false,\n  "logLevel": "info",\n  "network": "mainnet",\n  "mnemonic": "test test test test test test test test test test test test",\n  "swapPools": [\n    {\n      "name": "DAI",\n      "assets": [\n        {\n          "chainId": 1,\n          "assetId": "0x6B175474E89094C44Da98b954EedeAC495271d0F"\n        },\n        {\n          "chainId": 10,\n          "assetId": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"\n        },\n        {\n          "chainId": 56,\n          "assetId": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"\n        },\n        {\n          "chainId": 100,\n          "assetId": "0x0000000000000000000000000000000000000000"\n        },\n        {\n          "chainId": 122,\n          "assetId": "0x94Ba7A27c7A95863d1bdC7645AC2951E0cca06bA"\n        },\n        {\n          "chainId": 137,\n          "assetId": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"\n        },\n        {\n          "chainId": 250,\n          "assetId": "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e"\n        },\n        {\n          "chainId": 42161,\n          "assetId": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"\n        },\n        {\n          "chainId": 43114,\n          "assetId": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70"\n        }\n      ]\n    },\n    {\n      "name": "USDC",\n      "assets": [\n        {\n          "chainId": 1,\n          "assetId": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"\n        },\n        {\n          "chainId": 10,\n          "assetId": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"\n        },\n        {\n          "chainId": 56,\n          "assetId": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"\n        },\n        {\n          "chainId": 100,\n          "assetId": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83"\n        },\n        {\n          "chainId": 122,\n          "assetId": "0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5"\n        },\n        {\n          "chainId": 137,\n          "assetId": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"\n        },\n        {\n          "chainId": 250,\n          "assetId": "0x04068da6c83afcfa0e13ba15a6696662335d5b75"\n        },\n        {\n          "chainId": 1285,\n          "assetId": "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D"\n        },\n        {\n          "chainId": 42161,\n          "assetId": "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"\n        },\n        {\n          "chainId": 43114,\n          "assetId": "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664"\n        }\n      ]\n    },\n    {\n      "name": "USDT",\n      "assets": [\n        {\n          "chainId": 1,\n          "assetId": "0xdAC17F958D2ee523a2206206994597C13D831ec7"\n        },\n        {\n          "chainId": 10,\n          "assetId": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"\n        },\n        {\n          "chainId": 56,\n          "assetId": "0x55d398326f99059fF775485246999027B3197955"\n        },\n        {\n          "chainId": 100,\n          "assetId": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6"\n        },\n        {\n          "chainId": 122,\n          "assetId": "0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10"\n        },\n        {\n          "chainId": 137,\n          "assetId": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"\n        },\n        {\n          "chainId": 250,\n          "assetId": "0x049d68029688eabf473097a2fc38ef61633a3c7a"\n        },\n        {\n          "chainId": 1285,\n          "assetId": "0xB44a9B6905aF7c801311e8F4E76932ee959c663C"\n        },\n        {\n          "chainId": 42161,\n          "assetId": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"\n        },\n        {\n          "chainId": 43114,\n          "assetId": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118"\n        }\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);