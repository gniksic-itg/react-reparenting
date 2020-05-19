(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(1),a=t(9),c=(t(0),t(161)),o={title:"createParent"},p={id:"createparent",title:"createParent",description:"Get the [createParent](./tools#createparent-instance-findfiber--parent-%EF%B8%8F) method from the package.",source:"@site/docs\\createparent.mdx",permalink:"/react-reparenting/docs/createparent",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/createparent.mdx",sidebar:"docs",previous:{title:"Parent",permalink:"/react-reparenting/docs/parent"},next:{title:"useParent",permalink:"/react-reparenting/docs/useparent"}},i=[{value:"Setup \u2699\ufe0f",id:"setup-\ufe0f",children:[]},{value:"Usage \ud83d\udcd6",id:"usage-",children:[]},{value:"Example \ud83d\udca1",id:"example-",children:[]}],s={rightToc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Get the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./tools#createparent-instance-findfiber--parent-%EF%B8%8F"}),"createParent")," method from the package."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {createParent} from 'react-reparenting';\n")),Object(c.b)("h2",{id:"setup-\ufe0f"},"Setup \u2699\ufe0f"),Object(c.b)("p",null,"You can generate a parent instance to use the ",Object(c.b)("inlineCode",{parentName:"p"},"send")," method within a class component. That component must be the ",Object(c.b)("strong",{parentName:"p"},"direct parent")," of the children which can be transferred. ",Object(c.b)("inlineCode",{parentName:"p"},"createParent")," must be called in the constructor."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class Parent extends React.Component {\n  constructor(props) {\n    super(props);\n    // set the parent in the constructor.\n    this.parent = createParent(this);\n  }\n\n  render() {\n    // Render the children directly.\n    return this.props.children;\n  }\n}\n")),Object(c.b)("p",null,"If you want to use another component as parent, you can provide a function that defines that component ",Object(c.b)("em",{parentName:"p"},"(You need to know a bit the structure of React fibers)"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'class Parent extends React.Component {\n  constructor(props) {\n    super(props);\n    // Select the first child as parent (the div element).\n    this.parent = createParent(this, (fiber) => fiber.child);\n  }\n\n  render() {\n    const {children} = this.props;\n    // Use a different parent.\n    return <div className="parent">{children}</div>;\n  }\n}\n')),Object(c.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(c.b)("p",null,"Let's define a very simple child component for the example."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Child = () => <div />;\n")),Object(c.b)("p",null,"We use two ",Object(c.b)("inlineCode",{parentName:"p"},"<Parent>")," components in the app as defined above."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  // The Parents.\n  const [parents, setParents] = useState({\n    A: ['c1', 'c2'],\n    B: ['c3'],\n  });\n\n  // The Child components.\n  const children = {\n    parentA: parents.A.map((key) => <Child key={key} />),\n    parentB: parents.B.map((key) => <Child key={key} />),\n  };\n\n  return (\n    <>\n      {/* Parent A */}\n      <Parent>{children.parentA}</Parent>\n      {/* Parent B */}\n      <Parent>{children.parentB}</Parent>\n    </>\n  );\n};\n")),Object(c.b)("p",null,"Now we can reparent anywhere in our app using the send method."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// Send the first Child ('c3') of 'parentB'\n// before the Child ('c2') of 'parentA'.\nparentB.sendChild(parentA, 0, 'c2');\n// Send the Child ('c1') of 'parentA'\n// in the first position of 'parentB'.\nparentA.sendChild(parentB, 'c1', 0);\n\n// Re-render the components with the changes.\n// The transferred children won't be re-mounted.\nsetParents({\n  A: ['c3', 'c2'],\n  B: ['c1'],\n});\n")),Object(c.b)("h2",{id:"example-"},"Example \ud83d\udca1"),Object(c.b)("p",null,"Coming soon."))}l.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return t?a.a.createElement(m,p({ref:n},s,{components:t})):a.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<c;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);