(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(116)),o={slug:"version-8",title:"Version 8 is a complete rewrite",author:"Andreas Faust",author_title:"Developer",author_url:"https://github.com/andreasfaust",author_image_url:"https://andreasfaust.github.io/react-raster-docs/avatar.png",tags:["docs","rewrite","version-8"]},c={permalink:"/react-raster-docs/blog/version-8",source:"@site/blog/2021-07-04-version-8.md",description:"Seeing the rise of Tailwind and Chakra JS, I adapted some new concepts and filled in the missing pieces, to make working with react-raster finally truely satisfying.",date:"2021-07-04T00:00:00.000Z",tags:[{label:"docs",permalink:"/react-raster-docs/blog/tags/docs"},{label:"rewrite",permalink:"/react-raster-docs/blog/tags/rewrite"},{label:"version-8",permalink:"/react-raster-docs/blog/tags/version-8"}],title:"Version 8 is a complete rewrite",readingTime:.47,truncated:!1,nextItem:{title:"Welcome, to react-raster\u2019s documentation",permalink:"/react-raster-docs/blog/welcome-new-docs"}},l=[{value:"What\u2019s new:",id:"whats-new",children:[]},{value:"Migration",id:"migration",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Seeing the rise of ",Object(i.b)("inlineCode",{parentName:"p"},"Tailwind")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Chakra JS"),", I adapted some new concepts and filled in the missing pieces, to make working with ",Object(i.b)("inlineCode",{parentName:"p"},"react-raster")," finally truely satisfying."),Object(i.b)("h3",{id:"whats-new"},"What\u2019s new:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only one component remaining: ",Object(i.b)("inlineCode",{parentName:"li"},"Box")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"API-naming")," much closer to regular CSS"),Object(i.b)("li",{parentName:"ul"},"Nearly all ",Object(i.b)("inlineCode",{parentName:"li"},"CSS"),"-properties as ",Object(i.b)("inlineCode",{parentName:"li"},"React"),"-props like in Chakra"),Object(i.b)("li",{parentName:"ul"},"Built in ",Object(i.b)("inlineCode",{parentName:"li"},"Intersection Observer")," on demand"),Object(i.b)("li",{parentName:"ul"},"Performance optimization"),Object(i.b)("li",{parentName:"ul"},"Does not provide fallback for browsers, that do not support ",Object(i.b)("inlineCode",{parentName:"li"},"CSS Grid"),", anymore.")),Object(i.b)("h3",{id:"migration"},"Migration"),Object(i.b)("p",null,"Migrating is a bit of an effort, because many props changed names.\n",Object(i.b)("a",{parentName:"p",href:"/docs/migrate"},"Here is the guide.")))}p.isMDXComponent=!0}}]);