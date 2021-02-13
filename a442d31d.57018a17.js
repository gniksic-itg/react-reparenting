(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return i}));var r=t(3),a=(t(0),t(93));const p={title:"Reparentable"},c={unversionedId:"reparentable",id:"reparentable",isDocsHomePage:!1,title:"Reparentable",description:"Import the createReparentableSpace method from the package.",source:"@site/docs\\reparentable.mdx",slug:"/reparentable",permalink:"/react-reparenting/docs/reparentable",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/reparentable.mdx",version:"current",sidebar:"docs",previous:{title:"Usage",permalink:"/react-reparenting/docs/usage"},next:{title:"Parent",permalink:"/react-reparenting/docs/parent"}},o=[{value:"Setup \u2699\ufe0f",id:"setup-\ufe0f",children:[]},{value:"Usage \ud83d\udcd6",id:"usage-",children:[]},{value:"Example \ud83d\udca1",id:"example-",children:[]}],l={toc:o};function i({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Import the ",Object(a.b)("a",{parentName:"p",href:"./tools#reparentable-"},"createReparentableSpace")," method from the package."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import {createReparentableSpace} from 'react-reparenting';\n")),Object(a.b)("h2",{id:"setup-\ufe0f"},"Setup \u2699\ufe0f"),Object(a.b)("p",null,"First you need to define a Space that will virtually contain the components. Only ",Object(a.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s belonging to the same space can send children to each other."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const {Reparentable, sendReparentableChild} = createReparentableSpace();\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<Reparentable>")," must be the ",Object(a.b)("strong",{parentName:"p"},"direct parent")," of the children which can be transferred, and it must have an ",Object(a.b)("strong",{parentName:"p"},"unique id")," that differentiates it from other ",Object(a.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s in its Space."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Reparentable id="id">{children}</Reparentable>\n')),Object(a.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(a.b)("p",null,"Let's define a very simple child component for the example."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const Child = () => <div />;\n")),Object(a.b)("p",null,"We define in our app two simple parent components, and insert within them the ",Object(a.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'const App = () => {\n  // The Parents.\n  const [parents, setParents] = useState({\n    A: [\'c1\', \'c2\'],\n    B: [\'c3\'],\n  });\n\n  // The Child components.\n  const children = {\n    parentA: parents.A.map((key) => <Child key={key} />),\n    parentB: parents.B.map((key) => <Child key={key} />),\n  };\n\n  return (\n    <>\n      {/* Parent A */}\n      <div className="parent">\n        <Reparentable id="parentA">{children.parentA}</Reparentable>\n      </div>\n      {/* Parent B */}\n      <div className="parent">\n        <Reparentable id="parentB">{children.parentB}</Reparentable>\n      </div>\n    </>\n  );\n};\n')),Object(a.b)("p",null,"Now we can reparent anywhere in our app using the ",Object(a.b)("inlineCode",{parentName:"p"},"sendReparentableChild")," method."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"// Send the first Child ('c3') of 'parentB'\n// before the Child ('c2') of 'parentA'.\nsendReparentableChild('parentB', 'parentA', 0, 'c2');\n// Send the Child ('c1') of 'parentA'\n// in the first position of 'parentB'.\nsendReparentableChild('parentA', 'parentB', 'c1', 0);\n\n// Re-render the components with the changes.\n// The transferred children won't be re-mounted.\nsetParents({\n  A: ['c3', 'c2'],\n  B: ['c1'],\n});\n")),Object(a.b)("h2",{id:"example-"},"Example \ud83d\udca1"),Object(a.b)("p",null,"Check out the full example on ",Object(a.b)("a",{parentName:"p",href:"https://codesandbox.io/s/react-reparenting-rvfi4"},"codesandbox"),"."))}i.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),s=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||p;return t?a.a.createElement(m,o(o({ref:n},i),{},{components:t})):a.a.createElement(m,o({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<p;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);