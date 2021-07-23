(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(116)),i=["components"],l={id:"migrate",title:"Migrate from 7 to 8"},c={unversionedId:"migrate",id:"migrate",isDocsHomePage:!1,title:"Migrate from 7 to 8",description:"Version 8 is a vast rewrite.",source:"@site/docs/guides-migrate.md",slug:"/migrate",permalink:"/react-raster-docs/docs/migrate",version:"current",sidebar:"docs",previous:{title:"Next JS",permalink:"/react-raster-docs/docs/nextjs"},next:{title:"Box",permalink:"/react-raster-docs/docs/box"}},b=[{value:"1. Fallback for CSS Grid Layout was removed",id:"1-fallback-for-css-grid-layout-was-removed",children:[]},{value:"2. Exports have changed",id:"2-exports-have-changed",children:[]},{value:"3. Grid is now Box",id:"3-grid-is-now-box",children:[]},{value:"4. Box-Alignment was removed",id:"4-box-alignment-was-removed",children:[]},{value:"5. Props changed names",id:"5-props-changed-names",children:[]},{value:"6. Check out the Docs for new features and possibilities",id:"6-check-out-the-docs-for-new-features-and-possibilities",children:[]}],s={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Version ",Object(o.b)("inlineCode",{parentName:"p"},"8")," is a vast rewrite."),Object(o.b)("h3",{id:"1-fallback-for-css-grid-layout-was-removed"},"1. Fallback for CSS Grid Layout was removed"),Object(o.b)("p",null,"Until version ",Object(o.b)("inlineCode",{parentName:"p"},"7")," react-raster provided a fallback for browsers, that do not support ",Object(o.b)("strong",{parentName:"p"},"CSS Grid Layout"),". In version ",Object(o.b)("inlineCode",{parentName:"p"},"8")," this feature was removed. ",Object(o.b)("strong",{parentName:"p"},"If you rely on it, you need to stick to version 7.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"2-exports-have-changed"},"2. Exports have changed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Box")," is now ",Object(o.b)("strong",{parentName:"li"},"default export"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Types")," is now ",Object(o.b)("inlineCode",{parentName:"li"},"Props"),".")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import Box, { Props } from "react-raster";\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"3-grid-is-now-box"},"3. Grid is now Box"),Object(o.b)("p",null,"Change all ",Object(o.b)("inlineCode",{parentName:"p"},"Grid"),"-components to ",Object(o.b)("inlineCode",{parentName:"p"},"Box")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Box\n  breakpoints={[0, 400, 800, 1200]}\n  colspan={12}\n  gridRowGap={"2vw"}\n  gridColumnGap={"2vw"}\n  control\n>\n  <Box cols={3}>Hello</Box>\n</Box>\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"4-box-alignment-was-removed"},"4. Box-Alignment was removed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"react-raster used to provide alignment ",Object(o.b)("inlineCode",{parentName:"li"},"center")," and ",Object(o.b)("inlineCode",{parentName:"li"},"right")," for ",Object(o.b)("strong",{parentName:"li"},"CSS Grid Layout"),". The props were named ",Object(o.b)("inlineCode",{parentName:"li"},"alignX")," and ",Object(o.b)("inlineCode",{parentName:"li"},"alignY"),". ",Object(o.b)("strong",{parentName:"li"},"This feature was removed.")),Object(o.b)("li",{parentName:"ul"},"In ",Object(o.b)("strong",{parentName:"li"},"Grid Layout")," Boxes are aligned with ",Object(o.b)("inlineCode",{parentName:"li"},"margin")," now manually."),Object(o.b)("li",{parentName:"ul"},"With ",Object(o.b)("strong",{parentName:"li"},"Flexbox")," Boxes are aligned with ",Object(o.b)("inlineCode",{parentName:"li"},"justifyContent")," and ",Object(o.b)("inlineCode",{parentName:"li"},"alignItems"),"/",Object(o.b)("inlineCode",{parentName:"li"},"alignContent"),".")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"5-props-changed-names"},"5. Props changed names"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"alignX \u2192 justifyContent"),Object(o.b)("li",{parentName:"ul"},"alignY \u2192 alignItems/alignContent"),Object(o.b)("li",{parentName:"ul"},"attrs \u2192 ",Object(o.b)("del",{parentName:"li"},"removed")),Object(o.b)("li",{parentName:"ul"},"bottom \u2192 marginBottom"),Object(o.b)("li",{parentName:"ul"},"cssMode \u2192 ",Object(o.b)("del",{parentName:"li"},"removed")),Object(o.b)("li",{parentName:"ul"},"gutterX \u2192 gridRowGap"),Object(o.b)("li",{parentName:"ul"},"gutterY \u2192 gridColumnGap"),Object(o.b)("li",{parentName:"ul"},"hasChildBoxes \u2192 ",Object(o.b)("del",{parentName:"li"},"removed")),Object(o.b)("li",{parentName:"ul"},"left \u2192 marginLeft"),Object(o.b)("li",{parentName:"ul"},"right \u2192 marginRight"),Object(o.b)("li",{parentName:"ul"},"css \u2192 styles"),Object(o.b)("li",{parentName:"ul"},"tag \u2192 as"),Object(o.b)("li",{parentName:"ul"},"top \u2192 marginTop")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"6-check-out-the-docs-for-new-features-and-possibilities"},"6. Check out the Docs for new features and possibilities"))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);