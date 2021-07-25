(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||c;return n?o.a.createElement(f,l(l({ref:t},p),{},{components:n})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(116));const c={id:"control",title:"Visual Control"},a={unversionedId:"control",id:"control",isDocsHomePage:!1,title:"Visual Control",description:"react-raster provides visual control of your Grid. Just add the prop control to the Box-component, that defines your grid.",source:"@site/docs/guides-control.md",slug:"/control",permalink:"/react-raster-docs/docs/control",version:"current",sidebar:"docs",previous:{title:"Typescript",permalink:"/react-raster-docs/docs/typescript"},next:{title:"Next JS",permalink:"/react-raster-docs/docs/nextjs"}},l=[{value:"Production-handling",id:"production-handling",children:[]},{value:"Control Color",id:"control-color",children:[]}],i={toc:l};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"react-raster provides ",Object(o.b)("strong",{parentName:"p"},"visual control")," of your Grid. Just add the prop ",Object(o.b)("inlineCode",{parentName:"p"},"control")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"Box"),"-component, that defines your grid."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Press ",Object(o.b)("inlineCode",{parentName:"p"},"ESC")," to switch it on and off.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Example() {\n  return (\n    <Box colspan={12} gridColumnGap={"10px"} gridRowGap={"10px"} control>\n      <Box textAlign="center">\n        Press <strong>ESC</strong> to see the Grid\n      </Box>\n      <Box cols={4} height="200px" background="blue" />\n      <Box cols={4} height="200px" background="blue" />\n      <Box cols={4} height="200px" background="blue" />\n    </Box>\n  );\n}\n')),Object(o.b)("h3",{id:"production-handling"},"Production-handling"),Object(o.b)("p",null,"To use visual control only in development, bind it to ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Box control={process.env.NODE_ENV !== "production"} />\n')),Object(o.b)("h3",{id:"control-color"},"Control Color"),Object(o.b)("p",null,"You can setup a ",Object(o.b)("strong",{parentName:"p"},"custom color")," for visual control."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Box controlColor="rgba(0, 255, 0, 0.1)" />\n')))}p.isMDXComponent=!0}}]);