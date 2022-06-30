"use strict";(self.webpackChunkelectronbb_documentation=self.webpackChunkelectronbb_documentation||[]).push([[920],{2027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(7294),r=n(2263),l=n(7649),s=n(5742),c=n(9960),o=n(5999),u=n(373);const m=["zero","one","two","few","many","other"];function i(e){return m.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function p(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),h}}),[e])}function d(){const e=p();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}var g=n(143),f=n(6775),E=n(412);const y=function(){const e=(0,f.k6)(),t=(0,f.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:E.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}};var S=n(22),b=n(8202),w=n(2539),I=n(726),v=n(1073),F=n(311);const P="searchQueryInput_CFBF",R="searchResultItem_U687",_="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";var C=n(3926);function q(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,g.gA)();let n=e;const{preferredVersion:l}=(0,u.J)(null==t?void 0:t.pluginId);l&&!l.isLast&&(n=l.path+"/");const{selectMessage:c}=d(),{searchValue:m,updateSearchPath:i}=y(),[h,p]=(0,a.useState)(m),[f,E]=(0,a.useState)(),[w,I]=(0,a.useState)(),v=(0,a.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{i(h),f&&(h?f(h,(e=>{I(e)})):I(void 0))}),[h,f]);const R=(0,a.useCallback)((e=>{p(e.target.value)}),[]);return(0,a.useEffect)((()=>{m&&m!==h&&p(m)}),[m]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,S.w)(n);E((()=>(0,b.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,v)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,v),a.createElement("input",{type:"search",name:"q",className:P,"aria-label":"Search",onChange:R,value:h,autoComplete:"off",autoFocus:!0}),!f&&h&&a.createElement("div",null,a.createElement(F.Z,null)),w&&(w.length>0?a.createElement("p",null,c(w.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,w&&w.map((e=>a.createElement(T,{key:e.document.i,searchResult:e}))))))}function T(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:R},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,w.C)(i,l):(0,I.o)(i,(0,v.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:_},(0,C.e)(m)),u&&a.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,I.o)(t.t,(0,v.m)(s,"t"),l,100)}}))}const Z=function(){return a.createElement(l.Z,null,a.createElement(q,null))}}}]);