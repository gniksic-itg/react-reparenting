(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(101),c=a(119),o=a.n(c),l=a(85),i=a.n(l);const m="Showcase",p=r.a.createElement(r.a.Fragment,null,"See the examples"),d=[{type:"Example",name:"Reparentable",id:"rvfi4",description:"Example showing how to implement reparenting."},{type:"Example",name:"React-DnD",id:"5u458",description:"Drag and drop implementation with React-DnD."}].map((e=>({type:e.type,title:`${e.type} - ${e.name}`,description:e.description,preview:`https://screenshots.codesandbox.io/${e.id.toLowerCase()}.png`,website:`https://${e.id}.csb.app/`,source:`https://codesandbox.io/s/react-reparenting-${e.name.toLowerCase()}-${e.id}`})));t.default=function(){return r.a.createElement(s.a,{title:m,description:p},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"text--center margin-bottom--xl"},r.a.createElement("h1",{style:{fontSize:"46px"}},m),r.a.createElement("p",{style:{fontSize:"25px"}},p)),r.a.createElement("div",{className:"row"},d.map((e=>r.a.createElement("div",{key:e.title,className:"col col--4 margin-bottom--lg"},r.a.createElement("div",{className:o()("card",i.a.showcaseCard)},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:e.preview,alt:e.title})),r.a.createElement("div",{className:"card__body"},r.a.createElement("div",{className:"avatar"},r.a.createElement("div",{className:"avatar__intro margin-left--none"},r.a.createElement("h4",{className:"avatar__name"},e.title),r.a.createElement("small",{className:"avatar__subtitle"},e.description)))),(e.website||e.source)&&r.a.createElement("div",{className:"card__footer"},r.a.createElement("div",{className:"button-group button-group--block"},e.website&&r.a.createElement("a",{className:"button button--small button--secondary button--block",href:e.website,target:"_blank",rel:"noreferrer noopener"},"Website"),e.source&&r.a.createElement("a",{className:"button button--small button--secondary button--block",href:e.source,target:"_blank",rel:"noreferrer noopener"},"Source"))))))))))}}}]);