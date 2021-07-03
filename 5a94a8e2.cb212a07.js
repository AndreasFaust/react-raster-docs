(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||c;return t?o.a.createElement(f,l(l({ref:n},p),{},{components:t})):o.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),c=(t(0),t(113)),a={id:"control",title:"Visual Control"},l={unversionedId:"control",id:"control",isDocsHomePage:!1,title:"Visual Control",description:"react-raster provides visual control of your Grid. Just add the prop control to the Grid-component.",source:"@site/docs/guides-control.md",slug:"/control",permalink:"/react-raster-docs/docs/control",version:"current",sidebar:"docs",previous:{title:"Typescript",permalink:"/react-raster-docs/docs/typescript"},next:{title:"Next JS",permalink:"/react-raster-docs/docs/nextjs"}},i=[{value:"Production-handling",id:"production-handling",children:[]},{value:"Control Color",id:"control-color",children:[]}],p={toc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"react-raster")," provides ",Object(c.b)("strong",{parentName:"p"},"visual control")," of your Grid. Just add the prop ",Object(c.b)("inlineCode",{parentName:"p"},"control")," to the ",Object(c.b)("inlineCode",{parentName:"p"},"Grid"),"-component."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Press ",Object(c.b)("inlineCode",{parentName:"p"},"ESC")," to switch it on and off.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Example() {\n  return (\n    <Box\n      colspan={12}\n      gutterX={"10px"}\n      gutterY={"10px"}\n      control // false by default\n    >\n      <Box\n        css={`\n          text-align: center;\n        `}\n      >\n        Press <strong>ESC</strong> to see the Grid\n      </Box>\n      <Box\n        cols={4}\n        css={`\n          height: 200px;\n          background: blue;\n        `}\n      />\n      <Box\n        cols={4}\n        css={`\n          height: 200px;\n          background: blue;\n        `}\n      />\n      <Box\n        cols={4}\n        css={`\n          height: 200px;\n          background: blue;\n        `}\n      />\n    </Box>\n  );\n}\n')),Object(c.b)("h3",{id:"production-handling"},"Production-handling"),Object(c.b)("p",null,"To use ",Object(c.b)("inlineCode",{parentName:"p"},"visual control")," just in development, connect it to ",Object(c.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Box control={process.env.NODE_ENV !== "production"} />\n')),Object(c.b)("h3",{id:"control-color"},"Control Color"),Object(c.b)("p",null,"You can setup a custom color for ",Object(c.b)("inlineCode",{parentName:"p"},"visual control"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Box controlColor="rgba(0, 255, 0, 0.1)" />\n')))}u.isMDXComponent=!0}}]);