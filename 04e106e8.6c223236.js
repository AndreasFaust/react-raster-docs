(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return O})),t.d(n,"metadata",(function(){return y})),t.d(n,"toc",(function(){return j})),t.d(n,"default",(function(){return v}));var r=t(3),a=t(7),o=t(0),c=t.n(o),l=t(116),i=t(133),s=t(117),u=t(69),p=t.n(u);const b=37,d=39;var m=function(e){const{lazy:n,block:t,defaultValue:r,values:a,groupId:l,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[g,O]=Object(o.useState)(r),y=o.Children.toArray(e.children);if(null!=l){const e=m[l];null!=e&&e!==g&&a.some((n=>n.value===e))&&O(e)}const j=e=>{O(e),null!=l&&f(l,e)},h=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},u)},a.map((({value:e,label:n})=>c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case d:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case b:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},n)))),n?Object(o.cloneElement)(y.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},y.map(((e,n)=>Object(o.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))};var f=function({children:e,hidden:n,className:t}){return c.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)},g=["components"],O={id:"getting-started",title:"Getting Started"},y={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"PeerDependencies",source:"@site/docs/guides-getting-started.mdx",slug:"/getting-started",permalink:"/react-raster-docs/docs/getting-started",version:"current",sidebar:"docs",previous:{title:"Concept",permalink:"/react-raster-docs/docs/concept"},next:{title:"Breakpoints",permalink:"/react-raster-docs/docs/breakpoints"}},j=[{value:"PeerDependencies",id:"peerdependencies",children:[]},{value:"Install",id:"install",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]}],h={toc:j};function v(e){var n=e.components,t=Object(a.a)(e,g);return Object(l.b)("wrapper",Object(r.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"peerdependencies"},"PeerDependencies"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"react: >= 16.8.0,"),Object(l.b)("li",{parentName:"ul"},"react-dom: >= 16.8.0,"),Object(l.b)("li",{parentName:"ul"},"styled-components: >= 5.2.0")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"install"},"Install"),Object(l.b)("p",null,"Install all dependencies with your favourite ",Object(l.b)("strong",{parentName:"p"},"package-manager:")),Object(l.b)(m,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(f,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"yarn add react-raster styled-components react react-dom\n"))),Object(l.b)(f,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"  npm install --save react-raster styled-components react react-dom\n")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"basic-usage"},"Basic Usage"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"react-raster")," has only one component called ",Object(l.b)("inlineCode",{parentName:"li"},"Box"),"."),Object(l.b)("li",{parentName:"ul"},"Define ",Object(l.b)("inlineCode",{parentName:"li"},"brekpoints"),", ",Object(l.b)("inlineCode",{parentName:"li"},"gap")," (row/column) and a ",Object(l.b)("inlineCode",{parentName:"li"},"colspan")," to start a new Grid and nest ",Object(l.b)("inlineCode",{parentName:"li"},"Box"),"-Elements inside each other, preserving the Grid."),Object(l.b)("li",{parentName:"ul"},"Further style your ",Object(l.b)("inlineCode",{parentName:"li"},"Box"),"-Elements directly via ",Object(l.b)("strong",{parentName:"li"},"props"),"."),Object(l.b)("li",{parentName:"ul"},"Boxes and Grids can be freely nested inside each other."),Object(l.b)("li",{parentName:"ul"},"If you set ",Object(l.b)("inlineCode",{parentName:"li"},"control"),", you can press ",Object(l.b)("inlineCode",{parentName:"li"},"Esc")," to see the grid.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'import Box from "react-raster";\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExample() {\n  return (\n    <Box\n      breakpoints={[0, 400, 800, 1200]}\n      colspan={12}\n      padding={"1rem"}\n      gap="0.5rem 1rem"\n      control\n    >\n      <Box as="h3" marginBottom="1.5rem">\n        Press ESC to see the Grid\n      </Box>\n\n      <Box\n        as="h1"\n        margin="0px"\n        cols={[6]}\n        padding="2rem"\n        height={"500px"}\n        background="lightblue"\n        display="flex"\n        alignItems="stretch"\n        justifyContent="stretch"\n        padding="1"\n      >\n        <Box\n          background="#111"\n          margin="0px"\n          color="coral"\n          display="flex"\n          width="100%"\n          alignItems="center"\n          justifyContent="center"\n        >\n          Hello World!\n        </Box>\n      </Box>\n      <Box cols={[6]} height="500px">\n        <Box\n          as="p"\n          margin="0px 0px 1 1"\n          display="flex"\n          color="white"\n          alignItems="center"\n          justifyContent="center"\n          background="darkblue"\n          fontSize="1.5rem"\n          fontWeight="bold"\n        >\n          Stop\n        </Box>\n        <Box\n          as="p"\n          margin="0px"\n          display="flex"\n          color="white"\n          alignItems="center"\n          justifyContent="center"\n          background="coral"\n          fontSize="1.5rem"\n          fontWeight="bold"\n        >\n          Wars\n        </Box>\n      </Box>\n    </Box>\n  );\n}\n')))}v.isMDXComponent=!0},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},117:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},133:function(e,n,t){"use strict";var r=t(0),a=t(134);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},134:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a}}]);