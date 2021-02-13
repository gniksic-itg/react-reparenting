(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),i=(n(0),n(93)),o=n(96);const a={title:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What does it do? \ud83e\udd28",source:"@site/docs\\introduction.mdx",slug:"/introduction",permalink:"/react-reparenting/docs/introduction",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/introduction.mdx",version:"current",sidebar:"docs",next:{title:"Installation \ud83d\udce6",permalink:"/react-reparenting/docs/installation"}},s=[{value:"What does it do? \ud83e\udd28",id:"what-does-it-do-\ud83e\udd28",children:[]},{value:"Under the hood",id:"under-the-hood",children:[]}],l={toc:s};function d({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("div",{align:"center"},Object(i.b)("img",{src:Object(o.a)("gifs/reparenting.gif"),width:"60%"})),Object(i.b)("h2",{id:"what-does-it-do-\ud83e\udd28"},"What does it do? \ud83e\udd28"),Object(i.b)("p",null,"Imagine that you have two Parent components, both with some Child components. To ",Object(i.b)("inlineCode",{parentName:"p"},"transfer")," a Child from one Parent to another, the components must be ",Object(i.b)("inlineCode",{parentName:"p"},"re-rendered")," with that Child in its new Parent. This procedure has obvious usability and performance ",Object(i.b)("inlineCode",{parentName:"p"},"limits"),", the transferred component is unmounted, re-mounted and loses its internal state, as well as all the nodes it has generated (such as a ",Object(i.b)("inlineCode",{parentName:"p"},"<div>"),")."),Object(i.b)("p",null,"React does not yet offer specific APIs to solve this problem, in many cases we try to deal with it using ",Object(i.b)("inlineCode",{parentName:"p"},"Portals")," and ",Object(i.b)("inlineCode",{parentName:"p"},"refs"),". This approach presents other problems, it is difficult to implement for large-scale apps and above all it does not give the feeling of being very ",Object(i.b)("inlineCode",{parentName:"p"},'"Reactive"'),". In fact, portals have been designed for other purposes, citing the documentation:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.")),Object(i.b)("p",null,"This process is more related to the DOM, at ",Object(i.b)("inlineCode",{parentName:"p"},'"React level"')," the Child is still part of the same Parent. This is where ",Object(i.b)("inlineCode",{parentName:"p"},"ReactReparenting")," intervenes."),Object(i.b)("p",null,"This package offers ",Object(i.b)("inlineCode",{parentName:"p"},"easy")," and ",Object(i.b)("inlineCode",{parentName:"p"},"intuitive")," tools to solve this problem. With a few lines of code you will be able to transfer your components, without them being re-mounted or losing their internal state."),Object(i.b)("h2",{id:"under-the-hood"},"Under the hood"),Object(i.b)("p",null,"Besides the tree of elements, React has a tree of internal instances used to keep the state. Starting from version 16, React rolled out a new implementation of that internal instances tree and the algorithm that manages it code-named ",Object(i.b)("inlineCode",{parentName:"p"},"Fiber"),"."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is an experimental technology that interacts with React internals, you shouldn't rely on them in your production code. The React team could introduce breaking changes in future releases without following the semver rules, causing your code to not work as expected. Use this library at your own risk."))),Object(i.b)("p",null,"If you are interested, there are very valid sources in which to deepen the topic:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/acdlite/react-fiber-architecture"},"React fiber architecture")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://blog.logrocket.com/deep-dive-into-react-fiber-internals"},"Deep dive into react fiber internals")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e"},"Inside fiber in depth overview of the new reconciliation algorithm in react"))),Object(i.b)("p",null,"In any case, it is ",Object(i.b)("strong",{parentName:"p"},"not necessary")," to know how React internals work to use this package."))}d.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(a,".").concat(b)]||u[b]||p[b]||o;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(22),i=n(98);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},98:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);