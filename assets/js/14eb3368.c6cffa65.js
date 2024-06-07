"use strict";(self.webpackChunkhomelab_blog=self.webpackChunkhomelab_blog||[]).push([[6969],{1243:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var s=n(4164),i=n(7559),r=n(1754),a=n(9169),o=n(8774),l=n(1312),c=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function g(e){let{children:t,active:n,index:i,addMicrodata:r}=e;return(0,d.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function x(){const e=(0,r.OF)(),t=(0,a.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(i.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(g,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(b,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},4136:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});n(6540);var s=n(1213),i=n(1754),r=n(6025),a=n(4164),o=n(8774),l=n(5846),c=n(6654),d=n(1312),u=n(1107);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(4848);function p(e){let{href:t,children:n}=e;return(0,h.jsx)(o.A,{href:t,className:(0,a.A)("card padding--lg",m.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:s,description:i}=e;return(0,h.jsxs)(p,{href:t,children:[(0,h.jsxs)(u.A,{as:"h2",className:(0,a.A)("text--truncate",m.cardTitle),title:s,children:[n," ",s]}),i&&(0,h.jsx)("p",{className:(0,a.A)("text--truncate",m.cardDescription),title:i,children:i})]})}function g(e){let{item:t}=e;const n=(0,i.Nr)(t),s=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,d.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function x(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(t.docId??void 0);return(0,h.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(x,{item:t});case"category":return(0,h.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.$S)();return(0,h.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(f,{...e});const s=(0,i.d1)(t);return(0,h.jsx)("section",{className:(0,a.A)("row",n),children:s.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(v,{item:e})},t)))})}var A=n(9219),N=n(1878),T=n(4267),_=n(1243);const y={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function L(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(s.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.A)(t.image)})}function k(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.$S)();return(0,h.jsxs)("div",{className:y.generatedIndexPage,children:[(0,h.jsx)(N.A,{}),(0,h.jsx)(_.A,{}),(0,h.jsx)(T.A,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.A,{as:"h1",className:y.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(j,{items:n.items,className:y.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(A.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function I(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(L,{...e}),(0,h.jsx)(k,{...e})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164),i=n(1312),r=n(7559),a=n(2252),o=n(4848);function l(e){let{className:t}=e;const n=(0,a.r)();return n.badge?(0,o.jsx)("span",{className:(0,s.A)(t,r.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var s=n(4164),i=n(4586),r=n(8774),a=n(1312),o=n(4070),l=n(7559),c=n(5597),d=n(2252),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(r.A,{to:n,onClick:s,children:(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.A)(),{pluginId:a}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(a),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,o.HW)(a),g=m??(x=b).docs.find((e=>e.id===x.mainDocId));var x;return(0,u.jsxs)("div",{className:(0,s.A)(t,l.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:b.label,to:g.path,onClick:()=>d(b.name)})})]})}function g(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},9022:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(4164),i=n(8774),r=n(4848);function a(e){const{permalink:t,title:n,subLabel:a,isNext:o}=e;return(0,r.jsxs)(i.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},5846:(e,t,n)=>{n.d(t,{W:()=>c});var s=n(6540),i=n(4586);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}},5403:(e,t,n)=>{n.d(t,{b:()=>o});var s=n(6540),i=n(5293),r=n(4848);function a({id:e,host:t,repo:i,repoId:a,category:o,categoryId:l,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:h,inputPosition:p,theme:b,lang:g,loading:x}){const[v,f]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{v||(n.e(1135).then(n.bind(n,1135)),f(!0))}),[]),v?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:i,repoid:a,category:o,categoryid:l,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:h,inputposition:p,theme:b,lang:g,loading:x}):null}const o=()=>{const{colorMode:e}=(0,i.G)();return(0,r.jsx)("div",{style:{marginTop:"20px"},children:(0,r.jsx)(a,{id:"comments",repo:"mattefara/mattefara.github.io",repoId:"MDEwOlJlcG9zaXRvcnkxMTUxMjE4MDY",category:"Ideas",categoryId:"DIC_kwDOBtyejs4Cf7pz",mapping:"specific",term:"posts",reactionsEnabled:"0",emitMetadata:"0",inputPosition:"top",theme:e,lang:"en",loading:"lazy"})})}},9219:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(1312),i=n(9022),r=n(4848);function a(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(i.A,{...t,subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(i.A,{...n,subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}var o=n(5403);function l(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{...e}),(0,r.jsx)(o.b,{})]})}}}]);