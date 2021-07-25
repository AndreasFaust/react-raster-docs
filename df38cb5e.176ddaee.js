(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(116));const i={id:"migrate",title:"Migrate from 7 to 8"},o={unversionedId:"migrate",id:"migrate",isDocsHomePage:!1,title:"Migrate from 7 to 8",description:"Version 8 is a vast rewrite.",source:"@site/docs/guides-migrate.md",slug:"/migrate",permalink:"/react-raster-docs/docs/migrate",version:"current",sidebar:"docs",previous:{title:"Next JS",permalink:"/react-raster-docs/docs/nextjs"},next:{title:"Box",permalink:"/react-raster-docs/docs/box"}},l=[{value:"1. Fallback for CSS Grid Layout was removed",id:"1-fallback-for-css-grid-layout-was-removed",children:[]},{value:"2. Exports have changed",id:"2-exports-have-changed",children:[]},{value:"3. Grid is now Box",id:"3-grid-is-now-box",children:[]},{value:"4. Box-Alignment was removed",id:"4-box-alignment-was-removed",children:[]},{value:"5. Props changed names",id:"5-props-changed-names",children:[]},{value:"6. Check out the Docs for new features and possibilities",id:"6-check-out-the-docs-for-new-features-and-possibilities",children:[]}],c={toc:l};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Version ",Object(a.b)("inlineCode",{parentName:"p"},"8")," is a vast rewrite."),Object(a.b)("h3",{id:"1-fallback-for-css-grid-layout-was-removed"},"1. Fallback for CSS Grid Layout was removed"),Object(a.b)("p",null,"Until version ",Object(a.b)("inlineCode",{parentName:"p"},"7")," react-raster provided a fallback for browsers, that do not support ",Object(a.b)("strong",{parentName:"p"},"CSS Grid Layout"),". In version ",Object(a.b)("inlineCode",{parentName:"p"},"8")," this feature was removed. ",Object(a.b)("strong",{parentName:"p"},"If you rely on it, you need to stick to version 7.")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"2-exports-have-changed"},"2. Exports have changed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Box")," is now ",Object(a.b)("strong",{parentName:"li"},"default export"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Types")," is now ",Object(a.b)("inlineCode",{parentName:"li"},"Props"),".")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import Box, { Props } from "react-raster";\n')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"3-grid-is-now-box"},"3. Grid is now Box"),Object(a.b)("p",null,"Change all ",Object(a.b)("inlineCode",{parentName:"p"},"Grid"),"-components to ",Object(a.b)("inlineCode",{parentName:"p"},"Box")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Box\n  breakpoints={[0, 400, 800, 1200]}\n  colspan={12}\n  gridRowGap={"2vw"}\n  gridColumnGap={"2vw"}\n  control\n>\n  <Box cols={3}>Hello</Box>\n</Box>\n')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"4-box-alignment-was-removed"},"4. Box-Alignment was removed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"react-raster used to provide alignment ",Object(a.b)("inlineCode",{parentName:"li"},"center")," and ",Object(a.b)("inlineCode",{parentName:"li"},"right")," for ",Object(a.b)("strong",{parentName:"li"},"CSS Grid Layout"),". The props were named ",Object(a.b)("inlineCode",{parentName:"li"},"alignX")," and ",Object(a.b)("inlineCode",{parentName:"li"},"alignY"),". ",Object(a.b)("strong",{parentName:"li"},"This feature was removed.")),Object(a.b)("li",{parentName:"ul"},"In ",Object(a.b)("strong",{parentName:"li"},"Grid Layout")," Boxes are aligned with ",Object(a.b)("inlineCode",{parentName:"li"},"margin")," now manually."),Object(a.b)("li",{parentName:"ul"},"With ",Object(a.b)("strong",{parentName:"li"},"Flexbox")," Boxes are aligned with ",Object(a.b)("inlineCode",{parentName:"li"},"justifyContent")," and ",Object(a.b)("inlineCode",{parentName:"li"},"alignItems"),"/",Object(a.b)("inlineCode",{parentName:"li"},"alignContent"),".")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"5-props-changed-names"},"5. Props changed names"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"alignX \u2192 justifyContent"),Object(a.b)("li",{parentName:"ul"},"alignY \u2192 alignItems/alignContent"),Object(a.b)("li",{parentName:"ul"},"attrs \u2192 ",Object(a.b)("del",{parentName:"li"},"removed")),Object(a.b)("li",{parentName:"ul"},"bottom \u2192 marginBottom"),Object(a.b)("li",{parentName:"ul"},"cssMode \u2192 ",Object(a.b)("del",{parentName:"li"},"removed")),Object(a.b)("li",{parentName:"ul"},"gutterX \u2192 gridRowGap"),Object(a.b)("li",{parentName:"ul"},"gutterY \u2192 gridColumnGap"),Object(a.b)("li",{parentName:"ul"},"hasChildBoxes \u2192 ",Object(a.b)("del",{parentName:"li"},"removed")),Object(a.b)("li",{parentName:"ul"},"left \u2192 marginLeft"),Object(a.b)("li",{parentName:"ul"},"right \u2192 marginRight"),Object(a.b)("li",{parentName:"ul"},"css \u2192 styles"),Object(a.b)("li",{parentName:"ul"},"tag \u2192 as"),Object(a.b)("li",{parentName:"ul"},"top \u2192 marginTop")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"6-check-out-the-docs-for-new-features-and-possibilities"},"6. Check out the Docs for new features and possibilities"))}b.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);