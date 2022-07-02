"use strict";(self.webpackChunkelectronbb_documentation=self.webpackChunkelectronbb_documentation||[]).push([[37],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>u});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return r?t.createElement(g,a(a({ref:n},s),{},{components:r})):t.createElement(g,a({ref:n},s))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3766:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1,title:"Intro"},a=void 0,c={unversionedId:"Intro",id:"Intro",title:"Intro",description:"JSDoc sucks ngl.",source:"@site/docs/Intro.md",sourceDirName:".",slug:"/Intro",permalink:"/ElectronBB/docs/Intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intro"},sidebar:"tutorialSidebar",next:{title:"MainBridge",permalink:"/ElectronBB/docs/Actual Docs/MainBridge/"}},l={},d=[{value:"Exporting an object from main to renderer",id:"exporting-an-object-from-main-to-renderer",level:2},{value:"Importing an object from main in renderer",id:"importing-an-object-from-main-in-renderer",level:2},{value:"Exporting an object from renderer to main",id:"exporting-an-object-from-renderer-to-main",level:2},{value:"Importing an object from renderer in main",id:"importing-an-object-from-renderer-in-main",level:2}],s={toc:d};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JSDoc sucks ngl."),(0,o.kt)("h2",{id:"exporting-an-object-from-main-to-renderer"},"Exporting an object from main to renderer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const { app, BrowserWindow } = require("electron");\nconst path = require("path");\nconst { MainBridge } = require("electronbb");\nlet mainBridge = new MainBridge();\n\nfunction createWindow() {\n    const win = new BrowserWindow({\n        width: 800,\n        height: 600,\n        webPreferences: {\n            preload: path.join(__dirname, "preload.js"),\n        },\n    });\n\n    mainBridge.export("exported", {\n        a: "b",\n        c: 0xd,\n    });\n\n    win.loadFile(path.join(__dirname, "index.html"));\n}\n\napp.whenReady().then(() => {\n    createWindow();\n});\n')),(0,o.kt)("h2",{id:"importing-an-object-from-main-in-renderer"},"Importing an object from main in renderer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const { RendererBridge } = require("electronbb");\nlet rendererBridge = new RendererBridge();\n\nasync function getThings() {\n    const exported = await rendererBridge.Get("exported"); // name same as in export\n\n    console.log(exported.a); // b\n}\n\ngetThings();\n')),(0,o.kt)("p",null,"You can also do it synchronously:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const { RendererBridge } = require("electronbb");\nlet rendererBridge = new RendererBridge();\n\nfunction getThings() {\n    const exported = rendererBridge.GetSync("exported"); // name same as in export\n\n    console.log(exported.a); // b\n}\n\ngetThings();\n')),(0,o.kt)("h2",{id:"exporting-an-object-from-renderer-to-main"},"Exporting an object from renderer to main"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { RendererBridge } = require("electronbb");\nlet rendererBridge = new RendererBridge();\n\nrendererBridge.Export("yourObject", {\n    message: "Hello Main",\n});\n')),(0,o.kt)("h2",{id:"importing-an-object-from-renderer-in-main"},"Importing an object from renderer in main"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { app, BrowserWindow } = require("electron");\nconst path = require("path");\nconst { MainBridge } = require("electronbb");\n\nasync function createWindow() {\n    const win = new BrowserWindow({\n        width: 800,\n        height: 600,\n        webPreferences: {\n            preload: path.join(__dirname, "preload.js"),\n            sandbox: false,\n        },\n    });\n\n    const mainBridge = new MainBridge();\n    await win.loadFile(path.join(__dirname, "index.html"));\n    const object = await mainBridge.Get("yourObject");\n\n    console.log(object.message); // Hello Main\n}\n\napp.whenReady().then(() => {\n    createWindow();\n});\n')))}p.isMDXComponent=!0}}]);