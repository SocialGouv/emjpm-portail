(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"315v":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/devenir-professionnel/appel-a-candidatures-et-a-projets",function(){return n("8r2W")}])},"8r2W":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=n("Q/Mu"),o=n("mudf"),c=n("pnw1"),l=r.a.createElement;t.default=function(){return l(r.a.Fragment,null,l(a.a,{navItems:c.b.sections}),l(o.a,{data:c.a}))}},mudf:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),a=n("VdAu"),o=n("7ljp"),c=r.a.createElement,l=function(e){var t=e.children;return c("div",{style:{color:"blue",fontSize:"30px"}},t)},s=function(e){var t=e.children;return c(a.Box,{sx:{my:"50px",lineHeight:"0.8",fontFamily:"Quicksand"}},t)},d=function(e){var t=e.children;return c("div",{style:{color:"green"}},t)},u=function(e){var t=e.children;return c(a.Box,{sx:{lineHeight:"normal",margin:"50px 0",fontFamily:"Quicksand"}},t)},p={h1:function(e){return c(l,null,e.children)},ul:function(e){return c(s,null,e.children)},li:function(e){return c(d,null,e.children)},p:function(e){return c(u,null,e.children)}},m=n("wx14"),f=n("rePB"),v={"&:active":{opacity:"0.8"},fontSize:1,fontWeight:500,lineHeight:"1.2",outline:"none",position:"relative",p:"10px",mx:"10px",transition:"150ms ease-in-out opacity",cursor:"pointer","@media screen and (min-width: 1200px)":{":first-of-type":{ml:0},":last-of-type":{mr:0}},"@media screen and (max-width: 1199px)":{my:"5px"}},g=r.a.createElement;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.children,n=e.sx;return g(a.Button,Object(m.a)({sx:x(x({},v),n)},e),g(a.Box,null,t))},y=h;h.defaultProps={variant:null};var L=y,w=r.a.createElement,j={flexFlow:"row wrap",mb:"50px","@media screen and (max-width: 1200px)":{justifyContent:"space-around"}},A=function(e){var t=e.data,n=e.setSectionId;return w(i.Fragment,null,t.sections&&t.sections.length>1&&w(a.Flex,{sx:j},t.sections.map((function(e){return w(L,{key:e._id,onClick:function(){return n(e._id)}},e.title)}))))},_=r.a.createElement,S=function(e){var t=e.children;return _(a.Box,{sx:{fontSize:"14px",fontFamily:"Quicksand"}},t)},O=n("ZcoB"),E=r.a.createElement,B=function(e){var t=e.children,n=e.title;return E(O.Card,{bg:"white",py:4,px:6,mb:6,borderRadius:3,fontSize:1},E(O.Heading4,{fontWeight:"normal",mb:4,textAlign:"center"},n),E(a.Box,{maxWidth:1e3,mx:"auto"},E(a.Box,{fontWeight:"normal",color:"textSecondary"},t)))},P=r.a.createElement,k=function(e){var t=e.mainContent;return P(B,{title:t.title},P(S,null,t.content))},F=r.a.createElement,C=function(e){var t=e.article,n=e.articlesLength,i=e.activeArticle,r=e.setActiveArticle,o=function(e){return e<0?0:e>=n-1?n-1:e<n?e:void 0};return F(B,{title:t.title},F(S,null,t.content),F(a.Flex,{sx:{justifyContent:"space-between"}},F(a.Box,{sx:0===i&&{visibility:"hidden"}},F(L,{onClick:function(){return r(o(t._id-1))}},"Article pr\xe9c\xe9dent")),F(a.Box,{sx:i===n-1&&{visibility:"hidden"}},F(L,{onClick:function(){return r(o(t._id+1))}},"Article suivant"))))},I=r.a.createElement,W=function(e){var t=e.currentSection,n=e.articles,r=e.activeArticle,o=e.setActiveArticle;return I(a.Box,{sx:{my:"auto"}},I(B,{title:t.title},I(S,null,t.content)),n&&n.map((function(e){return I(i.Fragment,{key:e._id},r===e._id&&I(C,{article:e,articlesLength:n.length,activeArticle:r,setActiveArticle:o}))})))},H=r.a.createElement,T=function(e){var t=e.data,n=e.activeArticle,r=e.currentSection,c=e.articles,l=e.setActiveArticle,s=e.setSectionId;return H(o.a,{components:p},H(a.Heading,{mb:"50px",mt:"28px",fontSize:"18px",fontFamily:"Comfortaa"},t.heading),t&&t.mainSection&&H(k,{mainContent:t.mainSection}),t&&t.sections&&H(i.Fragment,null,H(A,{data:t,setSectionId:s}),H(W,{currentSection:r,articles:c,activeArticle:n,setActiveArticle:l})))},q=r.a.createElement;t.a=function(e){var t=e.data,n=Object(i.useState)(0),r=n[0],o=n[1],c=Object(i.useState)(0),l=c[0],s=c[1],d=function(e,t){return t&&t.find((function(t){return t._id===e}))}(r,t.sections),u=d&&d.subSection&&d.subSection.articleContent;return q(a.Flex,{bg:"whiteGray"},q(a.Box,{width:"100%",maxWidth:1200,mx:"auto",minHeight:"68.5vh"},q(T,{data:t,activeArticle:l,currentSection:d,articles:u,setActiveArticle:s,setSectionId:o})))}},pnw1:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return v}));var i=n("yLiY"),r=n.n(i),a=n("q1tI"),o=n.n(a),c=n("5s55"),l=o.a.createElement,s=r()().publicRuntimeConfig,d={heading:"Bienvenue sur le portail de la Protection Juridique des Majeurs",sections:[{image:"".concat(s.appUrl,"/bg-devenir-pro-a.png"),title:"Appel \xe0 candidatures \n et \xe0 projets",url:"/devenir-professionnel/appel-a-candidatures-et-a-projets"},{image:"".concat(s.appUrl,"/bg-devenir-pro-b.png"),splitTitle:{firstLine:"La proc\xe9dure d'agr\xe9ment",secondLine:"des mandataires individuels"},title:"La proc\xe9dure d'agr\xe9ment \n des mandataires individuels",url:"/devenir-professionnel/la-procedure-d-agrement-des-mandataires-individuels"},{image:"".concat(s.appUrl,"/bg-devenir-pro-c.png"),splitTitle:{firstLine:"La proc\xe9dure d\u2019autorisation",secondLine:"des services mandataires"},title:"La proc\xe9dure d\u2019autorisation \n des services mandataires",url:"/devenir-professionnel/la-procedure-d-autorisation-des-services-mandataires"},{image:"".concat(s.appUrl,"/bg-devenir-pro-a.png"),splitTitle:{firstLine:"La proc\xe9dure de d\xe9claration",secondLine:"des pr\xe9pos\xe9s d\u2019\xe9tablissement"},title:"La proc\xe9dure de d\xe9claration \n des pr\xe9pos\xe9s d\u2019\xe9tablissement",url:"/devenir-professionnel/la-procedure-de-declaration-des-preposes-d-etablissement"},{image:"".concat(s.appUrl,"/bg-devenir-pro-b.png"),splitTitle:{firstLine:"La formation au certificat",secondLine:"national de comp\xe9tences"},title:"La formation au certificat \n national de comp\xe9tences",url:"/devenir-professionnel/la-formation-au-certificat-national-de-competences"}]},u={heading:"Appel \xe0 candidatures et \xe0 projets",sections:[{_id:0,content:l(c.f,null),title:"Appel \xe0 candidatures"},{_id:1,content:l(c.g,null),title:"Appel \xe0 projets"}]},p={heading:"La proc\xe9dure d\u2019agr\xe9ment des mandataires individuels",sections:[{_id:0,content:l(c.l,null),title:"Les conditions \xe0 satisfaire"},{_id:1,content:l(c.m,null),title:"Les \xe9tapes de la proc\xe9dure"},{_id:2,content:l(c.n,null),title:"La proc\xe9dure de recours suite \xe0 un refus d\u2019agr\xe9ment"}]},m={heading:"La proc\xe9dure d\u2019autorisation des services mandataires",sections:[{_id:0,content:l(c.o,null),title:"Les conditions d\u2019autorisation"},{_id:1,content:l(c.p,null),title:"La proc\xe9dure d\u2019autorisation d\u2019un service mandataire"}]},f={heading:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement",mainSection:{content:l(c.q,null),title:"La proc\xe9dure de d\xe9claration des pr\xe9pos\xe9s d\u2019\xe9tablissement"}},v={heading:"La formation au certificat \n national de comp\xe9tences",sections:[{_id:0,content:l(c.k,null),title:"L\u2019objet de la formation"},{_id:1,content:l(c.h,null),title:"Les conditions d\u2019acc\xe8s \xe0 la formation"},{_id:2,content:l(c.i,null),title:"Le d\xe9roulement de la formation"},{_id:3,content:l(c.j,null),title:"Les dispenses et les all\xe8gements \xe0 la formation"}]}}},[["315v",0,2,1,3,4]]]);