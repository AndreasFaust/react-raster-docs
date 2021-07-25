(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=(r(0),r(116));const a={id:"use-raster",title:"useRaster"},c={unversionedId:"use-raster",id:"use-raster",isDocsHomePage:!1,title:"useRaster",description:"In child-components of Grid and Box you have access to some grid-settings via the hook useRaster:",source:"@site/docs/api-use-raster.md",slug:"/use-raster",permalink:"/react-raster-docs/docs/use-raster",version:"current",sidebar:"docs",previous:{title:"Box",permalink:"/react-raster-docs/docs/box"},next:{title:"Basic Usage",permalink:"/react-raster-docs/docs/example-basic"}},s=[],i={toc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In child-components of ",Object(o.b)("inlineCode",{parentName:"p"},"Grid")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Box")," you have access to some grid-settings via the hook ",Object(o.b)("inlineCode",{parentName:"p"},"useRaster"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useRaster } from "react-raster";\n\nconst ChildComponent = () => {\n  const { currentBreakpoint } = useRaster();\n  return <h1>The current breakpoint is {breakpoint.value}</h1>;\n};\n\nexport default ChildComponent;\n')),Object(o.b)("p",null,"Here is the complete list of props:\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/AndreasFaust/react-raster/blob/master/src/context.ts"},"https://github.com/AndreasFaust/react-raster/blob/master/src/context.ts")))}u.isMDXComponent=!0},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return r?o.a.createElement(f,s(s({ref:t},u),{},{components:r})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);