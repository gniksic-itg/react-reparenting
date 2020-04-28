(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(6),c=(t(0),t(123)),o={title:"useParent"},p={id:"useparent",title:"useParent",description:"Get the [useParent](./tools#useparent-findfiber--parent-ref-%EF%B8%8F) hook from the package.",source:"@site/docs\\useparent.mdx",permalink:"/react-reparenting/docs/useparent",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/useparent.mdx",sidebar:"docs",previous:{title:"createParent",permalink:"/react-reparenting/docs/createparent"},next:{title:"Custom Renderer",permalink:"/react-reparenting/docs/renderer"}},i=[{value:"Setup \u2699\ufe0f",id:"setup-\ufe0f",children:[]},{value:"Usage \ud83d\udcd6",id:"usage-",children:[]},{value:"Example \ud83d\udca1",id:"example-",children:[]}],l={rightToc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Get the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./tools#useparent-findfiber--parent-ref-%EF%B8%8F"}),"useParent")," hook from the package."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {useParent} from 'react-reparenting';\n")),Object(c.b)("h2",{id:"setup-\ufe0f"},"Setup \u2699\ufe0f"),Object(c.b)("p",null,"You can generate an instance to use the ",Object(c.b)("inlineCode",{parentName:"p"},"send")," method within a function components. TYou must set the ref in the DOM element which is the direct parent of the children who can be transferred."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const MyParent = ({children}) => {\n  const [parent, ref] = useParent();\n\n  return (\n    <div className="parent" ref={ref}>\n      {children}\n    </div>\n  );\n};\n')),Object(c.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(c.b)("p",null,"Let's define a very simple child component for the example."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Child = () => <div />;\n")),Object(c.b)("p",null,"We define two parent components in the app as defined above and insert within them the children."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  // The children keys.\n  const [parent, setParent] = useState({\n    A: ['c1', 'c2'],\n    B: ['c3'],\n  });\n\n  // The children components.\n  const children = {\n    parentA: parent.A.map((key) => <Child key={key} />),\n    parentB: parent.B.map((key) => <Child key={key} />),\n  };\n\n  return (\n    <>\n      {/* Parent A */}\n      <MyParent>{children.parentA}</MyParent>\n      {/* Parent B */}\n      <MyParent>{children.parentB}</MyParent>\n    </>\n  );\n};\n")),Object(c.b)("p",null,"Now we can reparent anywhere in our app using the send method."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// Send the first Child ('c3') of 'parentB'\n// before the Child ('c2') of 'parentA'.\nparentB.send(parentA, 0, 'c2');\n// Send the Child ('c1') of 'parentA'\n// in the first position of 'parentB'.\nparentA.send(parentB, 'c1', 0);\n\n// Re-render the components with the changes.\n// The transferred children won't be re-mounted.\nsetParent({\n  A: ['c3', 'c2'],\n  B: ['c1'],\n});\n")),Object(c.b)("h2",{id:"example-"},"Example \ud83d\udca1"),Object(c.b)("p",null,"Coming soon."))}s.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return t?a.a.createElement(f,p({ref:n},l,{components:t})):a.a.createElement(f,p({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);