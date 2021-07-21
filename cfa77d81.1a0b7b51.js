(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(116)),a={id:"concept",title:"Concept"},c={unversionedId:"concept",id:"concept",isDocsHomePage:!1,title:"Concept",description:"Layouting user-interfaces is tough. Every viewport-size needs its own composition.",source:"@site/docs/guides-concept.md",slug:"/concept",permalink:"/react-raster-docs/docs/concept",version:"current",sidebar:"docs",next:{title:"Getting Started",permalink:"/react-raster-docs/docs/getting-started"}},p=[{value:"1. Define your Grid and style it in one place",id:"1-define-your-grid-and-style-it-in-one-place",children:[]},{value:"2. Nest components within each other while keeping the original grid",id:"2-nest-components-within-each-other-while-keeping-the-original-grid",children:[]},{value:"3. Combine <code>react-raster</code> components with other frameworks",id:"3-combine-react-raster-components-with-other-frameworks",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Layouting user-interfaces is tough.")," Every viewport-size needs its own composition.\n",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," provides a simplified, but flexible interface for ",Object(o.b)("inlineCode",{parentName:"p"},"CSS Grid Layout"),". With ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," defining a grid and placing and stacking boxes is as easy as never before."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"1-define-your-grid-and-style-it-in-one-place"},"1. Define your Grid and style it in one place"),Object(o.b)("p",null,"Setup the layout and styling for every ",Object(o.b)("inlineCode",{parentName:"p"},"Box")," at every breakpoint directly in your ",Object(o.b)("inlineCode",{parentName:"p"},"react"),"-component. No need for switching files or scrolling around. ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," provides a concise API directly via ",Object(o.b)("inlineCode",{parentName:"p"},"props"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"2-nest-components-within-each-other-while-keeping-the-original-grid"},"2. Nest components within each other while keeping the original grid"),Object(o.b)("p",null,"When components are wrapped inside each other, ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," keeps track of your original ",Object(o.b)("inlineCode",{parentName:"p"},"Grid-settings"),". ",Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," adds ",Object(o.b)("inlineCode",{parentName:"p"},"margin")," and ",Object(o.b)("inlineCode",{parentName:"p"},"padding")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Grid Layout"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"3-combine-react-raster-components-with-other-frameworks"},"3. Combine ",Object(o.b)("inlineCode",{parentName:"h3"},"react-raster")," components with other frameworks"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-raster")," is highly composable. You can use it alongside all your favourite tools."))}l.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);