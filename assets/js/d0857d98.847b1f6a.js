"use strict";(self.webpackChunkelectronbb_documentation=self.webpackChunkelectronbb_documentation||[]).push([[253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"MainBridge",slug:"./"},l=void 0,o={unversionedId:"Actual Docs/MainBridge/MainBridge",id:"Actual Docs/MainBridge/MainBridge",title:"MainBridge",description:"MainBridge class allows you to export objects to renderer.",source:"@site/docs/Actual Docs/MainBridge/MainBridge.md",sourceDirName:"Actual Docs/MainBridge",slug:"/Actual Docs/MainBridge/",permalink:"/ElectronBB/docs/Actual Docs/MainBridge/",draft:!1,tags:[],version:"current",frontMatter:{title:"MainBridge",slug:"./"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/ElectronBB/docs/Intro"},next:{title:"RendererBridge",permalink:"/ElectronBB/docs/Actual Docs/RendererBridge/"}},d={},s=[{value:"MainBridge.constructor()",id:"mainbridgeconstructor",level:2},{value:"MainBridge.Export(name, object)",id:"mainbridgeexportname-object",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Example",id:"example",level:3},{value:"MainBridge.Delete(name)",id:"mainbridgedeletename",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"Example",id:"example-1",level:3},{value:"async MainBridge.Get(window, name)",id:"async-mainbridgegetwindow-name",level:2},{value:"Arguments",id:"arguments-2",level:3},{value:"Returns",id:"returns",level:3},{value:"Remarks",id:"remarks",level:3},{value:"Example",id:"example-2",level:3},{value:"static MainBridge.GetInstance()",id:"static-mainbridgegetinstance",level:2},{value:"Returns",id:"returns-1",level:3},{value:"Remarks",id:"remarks-1",level:3},{value:"Example",id:"example-3",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MainBridge class allows you to export objects to renderer."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"There should be only one MainBridge class instance in whole application!")),(0,a.kt)("h2",{id:"mainbridgeconstructor"},"MainBridge.constructor()"),(0,a.kt)("p",null,"Creates MainBridge instance."),(0,a.kt)("h2",{id:"mainbridgeexportname-object"},"MainBridge.Export(name, object)"),(0,a.kt)("p",null,"Exports specified object to renderer."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the exported object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"../SupportedTypes"},"Supported Types")),(0,a.kt)("td",{parentName:"tr",align:null},"Object to export")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const { MainBridge } = require("electronbb");\nlet mainBridge = new MainBridge();\n\nmainBridge.Export("testObject", {\n    exportedNumber: 1234,\n    exportedString: "abcd",\n    exportedFunction: () => {\n        console.log("Omg I can export functions!");\n    },\n});\n')),(0,a.kt)("p",null,"You can access the object later from renderer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const { RendererBridge } = require("electronbb");\nlet rendererBridge = new RendererBridge();\n\nconst object = rendererBridge.GetSync("testObject");\nconsole.log(object.exportedString); // abcd\n')),(0,a.kt)("h2",{id:"mainbridgedeletename"},"MainBridge.Delete(name)"),(0,a.kt)("p",null,"Deletes speficied exported object ",(0,a.kt)("strong",{parentName:"p"},"only from main process"),"."),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"In main process:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const { MainBridge } = require("electronbb");\nlet mainBridge = new MainBridge();\n\n// let\'s export an object\nmainBridge.Export("truth", {\n    rustSuperiorToCpp: true,\n});\n\n// oh, wait actually no\nmainBridge.Delete("truth");\n\n//there you go\nmainBridge.Export("truth", {\n    rustSuperiorToCpp: false, // I still probably will have to learn it, like I tried learning Rust like 3 fcking times and it\'s just so hard, someone plz help me\n});\n')),(0,a.kt)("p",null,"In renderer process:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const { RendererBridge } = require("electronbb");\nlet rendererBridge = new RendererBridge();\n\nconst truth = rendererBridge.GetSync("truth"); // name same as in export\nconsole.log(truth.rustSuperiorToCpp); // false\n')),(0,a.kt)("h2",{id:"async-mainbridgegetwindow-name"},"async MainBridge.Get(window, name)"),(0,a.kt)("p",null,"Gets object exported from renderer."),(0,a.kt)("h3",{id:"arguments-2"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"window"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.electronjs.org/docs/latest/api/browser-window"},"BrowserWindow")),(0,a.kt)("td",{parentName:"tr",align:null},"Window to get object from")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the object to get")))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Your object."),(0,a.kt)("h3",{id:"remarks"},"Remarks"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Functions imported from renderer are converted to async functions due to Electron's limitations.")),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../Intro#importing-an-object-from-renderer-in-main"},"Intro#importing-an-object-from-renderer-in-main")),(0,a.kt)("h2",{id:"static-mainbridgegetinstance"},"static MainBridge.GetInstance()"),(0,a.kt)("h3",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"Instance of MainBridge.",(0,a.kt)("br",{parentName:"p"}),"\n","If none initialized, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),";"),(0,a.kt)("h3",{id:"remarks-1"},"Remarks"),(0,a.kt)("p",null,"This will only return the latest initialized instance of MainBridge."),(0,a.kt)("h3",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { MainBridge } = require("electronbb");\nlet mainBridge = new MainBridge();\n\nconsole.log(mainBridge === MainBridge.GetInstance()); // true\n')))}m.isMDXComponent=!0}}]);