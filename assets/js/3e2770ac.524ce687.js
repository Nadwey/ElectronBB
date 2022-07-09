"use strict";(self.webpackChunkelectronbb_documentation=self.webpackChunkelectronbb_documentation||[]).push([[127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),s=a,g=c["".concat(d,".").concat(s)]||c[s]||u[s]||l;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"RendererBridge",slug:"./"},o=void 0,i={unversionedId:"Actual Docs/RendererBridge/RendererBridge",id:"Actual Docs/RendererBridge/RendererBridge",title:"RendererBridge",description:"RendererBridge class allows you to import objects from main.",source:"@site/docs/Actual Docs/RendererBridge/RendererBridge.md",sourceDirName:"Actual Docs/RendererBridge",slug:"/Actual Docs/RendererBridge/",permalink:"/ElectronBB/docs/Actual Docs/RendererBridge/",draft:!1,tags:[],version:"current",frontMatter:{title:"RendererBridge",slug:"./"},sidebar:"tutorialSidebar",previous:{title:"MainBridge",permalink:"/ElectronBB/docs/Actual Docs/MainBridge/"},next:{title:"Supported types",permalink:"/ElectronBB/docs/Actual Docs/SupportedTypes"}},d={},p=[{value:"RendererBridge.constructor()",id:"rendererbridgeconstructor",level:2},{value:"async RendererBridge.Get(name)",id:"async-rendererbridgegetname",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Remarks",id:"remarks",level:3},{value:"Example",id:"example",level:3},{value:"RendererBridge.GetSync(name)",id:"rendererbridgegetsyncname",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Remarks",id:"remarks-1",level:3},{value:"Example",id:"example-1",level:3},{value:"RendererBridge.Export(name, object)",id:"rendererbridgeexportname-object",level:2},{value:"Arguments",id:"arguments-2",level:3},{value:"Remarks",id:"remarks-2",level:3},{value:"Example",id:"example-2",level:3}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RendererBridge class allows you to import objects from main."),(0,a.kt)("h2",{id:"rendererbridgeconstructor"},"RendererBridge.constructor()"),(0,a.kt)("p",null,"Creates new RendererBridge instance."),(0,a.kt)("h2",{id:"async-rendererbridgegetname"},"async RendererBridge.Get(name)"),(0,a.kt)("p",null,"Gets an exported object from main."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the object to get.")))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Your object."),(0,a.kt)("h3",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Sync functions will have ",(0,a.kt)("inlineCode",{parentName:"p"},"callIgnore")," property which will call them without freezing renderer process and ignore return value."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../Intro#importing-an-object-from-main-in-renderer"},"Intro#importing an object from main in renderer")),(0,a.kt)("h2",{id:"rendererbridgegetsyncname"},"RendererBridge.GetSync(name)"),(0,a.kt)("p",null,"Same as Get, but it's sync."),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the object to get.")))),(0,a.kt)("h3",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"Your object."),(0,a.kt)("h3",{id:"remarks-1"},"Remarks"),(0,a.kt)("p",null,"Sync functions will have ",(0,a.kt)("inlineCode",{parentName:"p"},"callIgnore")," property which will call them without freezing renderer process and ignore return value."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../Intro#importing-an-object-from-main-in-renderer"},"Intro#importing an object from main in renderer")),(0,a.kt)("h2",{id:"rendererbridgeexportname-object"},"RendererBridge.Export(name, object)"),(0,a.kt)("p",null,"Exports specified object to main."),(0,a.kt)("h3",{id:"arguments-2"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the object to export")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"../SupportedTypes"},"Supported Types")),(0,a.kt)("td",{parentName:"tr",align:null},"Object to export")))),(0,a.kt)("h3",{id:"remarks-2"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All functions exported will be converted to async functions due to Electron's limitations.")),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../Intro#exporting-an-object-from-renderer-to-main"},"Intro#Exporting an object from renderer to main")))}u.isMDXComponent=!0}}]);