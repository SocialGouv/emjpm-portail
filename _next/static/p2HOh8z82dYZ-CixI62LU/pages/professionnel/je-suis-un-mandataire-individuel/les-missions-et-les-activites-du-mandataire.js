(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4xjx":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),o=n("VdAu"),c=n("b4a8"),a=n("wx14"),u=n("rePB"),l={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",mx:"auto",outline:"none",position:"relative",px:3,py:2,transition:"150ms ease-in-out opacity"},s=r.a.createElement;function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(t){var e=t.children,n=t.sx;return s(o.Button,Object(a.a)({sx:f(f({},l),n)},t),s(o.Box,null,e))},x=p;p.defaultProps={variant:null};var b=x,m=r.a.createElement,v=function(t){var e=t.article,n=t.articlesLength,i=t.activeArticle,r=t.setActiveArticle,a=function(t){return t<0?0:t>=n-1?n-1:t<n?t:void 0};return m(c.a,{title:e.title},m(o.Box,null,e.content),m(o.Flex,{sx:{justifyContent:"space-between"}},m(o.Box,{sx:0===i&&{visibility:"hidden"}},m(b,{onClick:function(){return r(a(e._id-1))}},"Article pr\xe9c\xe9dent")),m(o.Box,{sx:i===n-1&&{visibility:"hidden"}},m(b,{onClick:function(){return r(a(e._id+1))}},"Article suivant"))))},h=r.a.createElement,g=function(t){var e=t.data,n=Object(i.useState)(0),r=n[0],a=n[1],u=Object(i.useState)(0),l=u[0],s=u[1],d=function(t,e){return e.find((function(e){return e._id===t}))}(r,e.sections),f=d.subSection&&d.subSection.articleContent;return h(o.Flex,{bg:"whiteGray"},h(o.Box,{width:"100%",maxWidth:1200,mx:"auto"},h(o.Heading,{fontWeight:"normal",mb:"50px",mt:"28px",fontSize:4},e.heading),e&&e.sections&&h(i.Fragment,null,h(o.Box,{sx:{mb:"50px"}},h(o.Flex,null,e.sections.map((function(t){return h(b,{key:t._id,onClick:function(){return a(t._id)}},t.title)})))),h(o.Box,{sx:{my:"auto"}},h(o.Box,null,h(c.a,{title:d.title},d.content),f&&f.map((function(t){return h(i.Fragment,{key:t._id},l===t._id&&h(v,{article:t,articlesLength:f.length,activeArticle:l,setActiveArticle:s}))})))))))},y=n("udHH"),w=r.a.createElement;e.default=function(){return w(g,{data:y.b})}},b4a8:function(t,e,n){"use strict";var i=n("ZcoB"),r=n("q1tI"),o=n.n(r),c=n("VdAu"),a=o.a.createElement;e.a=function(t){var e=t.children,n=t.title;return a(i.Card,{bg:"white",py:4,px:6,mb:6,borderRadius:3,fontSize:1},a(i.Heading4,{fontWeight:"normal",mb:4,textAlign:"center"},n),a(c.Box,{maxWidth:1e3,mx:"auto"},a(c.Box,{fontWeight:"normal",color:"textSecondary"},e)))}},poM3:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/professionnel/je-suis-un-mandataire-individuel/les-missions-et-les-activites-du-mandataire",function(){return n("4xjx")}])}},[["poM3",0,1,2,4,5]]]);