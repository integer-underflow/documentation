"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[153],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},392:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={sidebar_position:4},s="Router Operation and Procedures",c={unversionedId:"Routers/Guides/router-operation",id:"Routers/Guides/router-operation",isDocsHomePage:!1,title:"Router Operation and Procedures",description:"Common procedures and operations for routers are described in this document.",source:"@site/docs/Routers/Guides/router-operation.md",sourceDirName:"Routers/Guides",slug:"/Routers/Guides/router-operation",permalink:"/documentation/documentation/Routers/Guides/router-operation",editUrl:"https://github.com/integer-underflow/documentation/docs/Routers/Guides/router-operation.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"routers",previous:{title:"Providing Liquidity Using Router Contract",permalink:"/documentation/documentation/Routers/Guides/providing-liquidity"},next:{title:"Testing a Router",permalink:"/documentation/documentation/Routers/Guides/testing-router"}},l=[{value:"Shutting a Router Down",id:"shutting-a-router-down",children:[]},{value:"Updating Router Version",id:"updating-router-version",children:[]}],d={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"router-operation-and-procedures"},"Router Operation and Procedures"),(0,i.kt)("p",null,"Common procedures and operations for routers are described in this document."),(0,i.kt)("h2",{id:"shutting-a-router-down"},"Shutting a Router Down"),(0,i.kt)("p",null,"Routers ",(0,i.kt)("em",{parentName:"p"},"cannot")," be shut down anytime they desire. They must be shut down through a procedure. This is similar to ETH2 and other validator based systems where unexpected downtime can result in loss of funds. The procedure is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change the router ",(0,i.kt)("a",{parentName:"li",href:"../Reference/configuration"},"configuration")," to set ",(0,i.kt)("inlineCode",{parentName:"li"},"cleanupMode")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},"Restart the router with ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose restart")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose down")," and then ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up -d"),"."),(0,i.kt)("li",{parentName:"ul"},"Monitor logs with ",(0,i.kt)("inlineCode",{parentName:"li"},"docker logs --tail 100 --follow router")," until you see a log containing 0 active transactions: ",(0,i.kt)("inlineCode",{parentName:"li"},'"transactions":0,"msg":"Got active transactions"}'),"."),(0,i.kt)("li",{parentName:"ul"},"Now it is safe to turn off the router with ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose down")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose stop"),".")),(0,i.kt)("h2",{id:"updating-router-version"},"Updating Router Version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file in the root directory of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/connext/nxtp-router-docker-compose"},"docker-compose repo")," with the desired version. Unless you really know what you are doing, choose releases from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/connext/nxtp/releases"},"releases page"),". The version number is the semantic version beginning with ",(0,i.kt)("inlineCode",{parentName:"li"},"v"),"."),(0,i.kt)("li",{parentName:"ul"},"Update the key in the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," ",(0,i.kt)("inlineCode",{parentName:"li"},"ROUTER_VERSION")," with the desired version."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to update the router version without any downtime.")))}p.isMDXComponent=!0}}]);