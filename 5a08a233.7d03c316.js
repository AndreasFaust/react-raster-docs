(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?o.a.createElement(b,i(i({ref:n},s),{},{components:t})):o.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(113)),c={id:"example-basic",title:"Basic Usage"},i={unversionedId:"example-basic",id:"example-basic",isDocsHomePage:!1,title:"Basic Usage",description:"Code Sandbox:",source:"@site/docs/example-basic.mdx",slug:"/example-basic",permalink:"/react-raster-docs/docs/example-basic",version:"current",sidebar:"docs",previous:{title:"useRaster",permalink:"/react-raster-docs/docs/use-raster"},next:{title:"Modify Box",permalink:"/react-raster-docs/docs/modify-box"}},l=[],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Code Sandbox:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import Box from "react-raster";\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExample() {\n  return (\n    <Box\n      breakpoints={[0, 400, 800, 1200]}\n      colspan={12}\n      paddingLeft={"2vw"}\n      paddingRight={"2vw"}\n      paddingTop={"2vw"}\n      paddingBottom={"2vw"}\n      gridRowGap={"2vw"}\n      gridColumnGap={"2vw"}\n      control\n    >\n      <Box\n        as="h1"\n        cols={[6, 6, 6]}\n        height={["25vh", "200px"]}\n        display="flex"\n        alignItems="center"\n        justifyContent="center"\n        background="yellow"\n      >\n        Hello World!\n      </Box>\n      <Box cols={[6, 6, 6]} background="blue" height="200px">\n        <Box\n          as="h2"\n          cols={[4, 4, 2]}\n          marginLeft={[2, 2, 1]}\n          display="flex"\n          color="white"\n          alignContent="center"\n          justifyContent="center"\n        >\n          Stop\n        </Box>\n        <Box\n          as="h2"\n          background="red"\n          cols={[4, 4, 2]}\n          display="flex"\n          color="white"\n          alignItems="center"\n          justifyContent="center"\n        >\n          Wars!\n        </Box>\n      </Box>\n    </Box>\n  );\n}\n')))}p.isMDXComponent=!0}}]);