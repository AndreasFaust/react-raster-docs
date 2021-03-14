(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,f=s["".concat(a,".").concat(u)]||s[u]||b[u]||o;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),o=(n(0),n(109)),a={id:"concept",title:"Concept"},c={unversionedId:"concept",id:"concept",isDocsHomePage:!1,title:"Concept",description:"Layouting user-interfaces is tough. Every viewport-size needs its own composition.",source:"@site/docs/guides-concept.md",slug:"/concept",permalink:"/react-raster-docs/docs/concept",version:"current",sidebar:"docs",next:{title:"Getting Started",permalink:"/react-raster-docs/docs/getting-started"}},l=[{value:"1. Define your Grid and style it in one place",id:"1-define-your-grid-and-style-it-in-one-place",children:[]},{value:"2. Nest components within each other while keeping the original grid",id:"2-nest-components-within-each-other-while-keeping-the-original-grid",children:[]},{value:"3. Add Flexbox-like <code>flow</code> to Grid Layout",id:"3-add-flexbox-like-flow-to-grid-layout",children:[]},{value:"4. Combine <code>react-raster</code> components with other frameworks",id:"4-combine-react-raster-components-with-other-frameworks",children:[]},{value:"5. Grid-Layout-Polyfill",id:"5-grid-layout-polyfill",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Layouting user-interfaces is tough.")," Every viewport-size needs its own composition.\n",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," provides a simplified, but flexible interface for ",Object(o.b)("inlineCode",{parentName:"p"},"CSS Grid Layout"),". With ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," defining a grid and placing and stacking boxes is as easy as never before."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"1-define-your-grid-and-style-it-in-one-place"},"1. Define your Grid and style it in one place"),Object(o.b)("p",null,"Setup the layout for every breakpoint directly in your ",Object(o.b)("inlineCode",{parentName:"p"},"react"),"-component. No need for switching files or scrolling around. ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," provides a concise API directly on top of its ",Object(o.b)("inlineCode",{parentName:"p"},"React components"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"2-nest-components-within-each-other-while-keeping-the-original-grid"},"2. Nest components within each other while keeping the original grid"),Object(o.b)("p",null,"When components are wrapped inside each other, ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," keeps track of your original ",Object(o.b)("inlineCode",{parentName:"p"},"Grid-settings"),". "),Object(o.b)("hr",null),Object(o.b)("h3",{id:"3-add-flexbox-like-flow-to-grid-layout"},"3. Add Flexbox-like ",Object(o.b)("inlineCode",{parentName:"h3"},"flow")," to Grid Layout"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Grid Layout")," has limited ",Object(o.b)("inlineCode",{parentName:"p"},"document flow"),". ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," provides you with these additional features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"margin")," to boxes"),Object(o.b)("li",{parentName:"ul"},"Automatic ",Object(o.b)("inlineCode",{parentName:"li"},"aligning")," of sibling boxes to ",Object(o.b)("inlineCode",{parentName:"li"},"center")," or ",Object(o.b)("inlineCode",{parentName:"li"},"right"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"4-combine-react-raster-components-with-other-frameworks"},"4. Combine ",Object(o.b)("inlineCode",{parentName:"h3"},"react-raster")," components with other frameworks"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," is highly composable. You can use it alongside all your favourite tools."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"5-grid-layout-polyfill"},"5. Grid-Layout-Polyfill"),Object(o.b)("p",null,"Additionally it polyfills ",Object(o.b)("inlineCode",{parentName:"p"},"Grid Layout")," using ",Object(o.b)("inlineCode",{parentName:"p"},"Flexbox"),", if you need to support legacy browsers. "))}d.isMDXComponent=!0}}]);