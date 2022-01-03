"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[411],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=i(),h=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,r.useState)(a),g=k[0],b=k[1],y=r.Children.toArray(e.children),N=[];if(null!=d){var w=h[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&b(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;b(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case c:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4253:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),s=["components"],c={sidebar_position:1},u="Installation & Setup",p={unversionedId:"Integration/QuickStart/setup",id:"Integration/QuickStart/setup",isDocsHomePage:!1,title:"Installation & Setup",description:"Connext consists of two integration touchpoints:",source:"@site/docs/Integration/QuickStart/setup.mdx",sourceDirName:"Integration/QuickStart",slug:"/Integration/QuickStart/setup",permalink:"/Integration/QuickStart/setup",editUrl:"https://github.com/integer-underflow/documentation/docs/Integration/QuickStart/setup.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"integration",previous:{title:"FAQ",permalink:"/Integration/SystemOverview/faq"},next:{title:"Crosschain Txs",permalink:"/Integration/QuickStart/transfer"}},d=[{value:"Installing the SDK",id:"installing-the-sdk",children:[]},{value:"Initializing the SDK",id:"initializing-the-sdk",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation--setup"},"Installation & Setup"),(0,i.kt)("p",null,"Connext consists of two integration touchpoints: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The onchain connext contracts"),(0,i.kt)("li",{parentName:"ol"},"The offchain connext SDK")),(0,i.kt)("p",null,"A contract integration is only needed if you want to initiate a transaction directly from another contract (guide coming soon!). For anything else, the Connext sdk neatly wraps all functionality for the developer."),(0,i.kt)("h2",{id:"installing-the-sdk"},"Installing the SDK"),(0,i.kt)("p",null,"The SDK is distributed as a typescript package on npm. It is fully isomorphic (can be used the same way in client-side, server-side, and React Native environments)."),(0,i.kt)(o.Z,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install @connext/nxtp-sdk\n"))),(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @connext/nxtp-sdk\n")))),(0,i.kt)("h2",{id:"initializing-the-sdk"},"Initializing the SDK"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor")," accepts the following arguments, in order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config"),": ",(0,i.kt)("em",{parentName:"li"},"Required"),". Object with chainConfig, signer and other optional parameters.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainConfig"),": ",(0,i.kt)("em",{parentName:"li"},"Required"),". Object with ",(0,i.kt)("inlineCode",{parentName:"li"},"chainId")," as a key, and the following object keys/values. Provide all the chains you intend to support in this argument:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provider"),": ",(0,i.kt)("em",{parentName:"li"},"Required"),". Ethers ",(0,i.kt)("a",{parentName:"li",href:"https://docs.ethers.io/v5/api/providers/other/#FallbackProvider"},"FallbackProvider"),". Providers are instantiated using ",(0,i.kt)("a",{parentName:"li",href:"https://www.alchemy.com"},"Alchemy"),", ",(0,i.kt)("a",{parentName:"li",href:"https://infura.io"},"Infura"),", or local nodes. ",(0,i.kt)("inlineCode",{parentName:"li"},"FallbackProvider")," is used to provide redunancy from faulty providers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subgraph"),": ",(0,i.kt)("em",{parentName:"li"},"Optional"),". Override the subgraph for the specified chain. Most chains will have default subgraph endpoints, you will get an error on instantiation if not."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signer"),": ",(0,i.kt)("em",{parentName:"li"},"Required"),". An Ethers-compatible ",(0,i.kt)("a",{parentName:"li",href:"https://docs.ethers.io/v5/api/signer/"},"Signer")," which is instantiated with a private key or injected provider (Metamask)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logger"),": ",(0,i.kt)("em",{parentName:"li"},"Optional"),". An instance of a ",(0,i.kt)("a",{parentName:"li",href:"https://getpino.io"},"Pino")," logger. If not provided, one will be created.")),(0,i.kt)("p",null,"A basic example:"),(0,i.kt)(o.Z,{defaultValue:"ts",values:[{label:"Typescript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { providers, Wallet, utils } from "ethers";\nimport { NxtpSdkEvents, NxtpSdk } from "@connext/nxtp-sdk";\n\n// Set up provider to chain mappings\nconst chainConfig = {\n  4: {\n    providers: new providers.FallbackProvider(["https://rinkeby.infura.io/..."]),\n  },\n  5: {\n    providers: new providers.FallbackProvider(["https://goerli.infura.io/..."]),\n  },\n};\n\n// Get signer from metamask\nawait ethereum.request({ method: "eth_requestAccounts" });\nconst provider = new providers.Web3Provider(ethereum);\nconst _signer = provider.getSigner();\n\n// Instantiate SDK\nconst sdk = await NxtpSdk.create({chainConfig: chainProviders, signer: _signer});\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);