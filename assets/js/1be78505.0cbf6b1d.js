"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,55],{9009:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(9496),r=a(9613),o=a(6279),l=a(983),c=a(1626),i=a(419),s=a(114),d=a(9594),m=a(2304),u=a(98),p=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=a(6650),h=a(6862),f=a(3892),E=a(3017),v=a(516),g="menuLinkText_17dI",C=["items"],k=["item"],_=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],S=function e(t,a){return"link"===t.type?(0,i.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},N=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,C);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,u.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,h.Z)(e,k);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(T,(0,u.Z)({item:t},a));case"link":default:return n.createElement(M,(0,u.Z)({item:t},a))}}function T(e){var t,a=e.item,r=e.onItemClick,o=e.activePath,l=(0,h.Z)(e,_),s=a.items,d=a.label,m=a.collapsible,p=S(a,o),b=(0,i.uR)({initialState:function(){return!!m&&(!p&&a.collapsed)}}),f=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&r(!1)}),[t,o,a])}({isActive:p,collapsed:f,setCollapsed:E}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":f})},n.createElement("a",(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&p},t[g]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},l),d),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.createElement(N,{items:s,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function M(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=(0,h.Z)(e,Z),l=t.href,s=t.label,d=S(t,r);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},n.createElement(f.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:l},(0,E.Z)(l)&&{onClick:a},o),(0,E.Z)(l)?s:n.createElement("span",null,s,n.createElement(v.Z,null))))}var w="sidebar_1PGX",x="sidebarWithHideableNavbar_1wLO",y="sidebarHidden_33OS",P="sidebarLogo_UfS6",L="menu_1RO6",B="menuWithAnnouncementBar_2Vj8",D="collapseSidebarButton_33p6",F="collapseSidebarButtonIcon_1CBo";function A(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",D),onClick:t},n.createElement(p,{className:F}))}function H(e){var t,a,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,u=function(){var e=(0,i.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,d.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),p=(0,i.LU)(),b=p.navbar.hideOnScroll,h=p.hideableSidebar,f=(0,i.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(w,(t={},t[x]=b,t[y]=s,t))},b&&n.createElement(m.Z,{tabIndex:-1,className:P}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(a={},a[B]=!f&&u,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:o,activePath:r}))),h&&n.createElement(A,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:a,activePath:r,onItemClick:function(){return t()}}))};function W(e){return n.createElement(i.Cv,{component:R,props:e})}var z=n.memo(H),O=n.memo(W);function Y(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(z,e),r&&n.createElement(O,e))}var U=a(3037),j=a(6055),Q=a(1571),X="backToTopButton_1FdN",q="backToTopButtonShow_3DYr";function G(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var K=function(){var e,t=(0,Q.TH)(),a=G(),r=a.smoothScrollTop,o=a.cancelScrollToTop,l=(0,n.useState)(!1),i=l[0],s=l[1];return(0,d.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||o(),a<300)s(!1);else if(n){var r=document.documentElement.scrollHeight;a+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),n.createElement("button",{className:(0,c.Z)("clean-btn",X,(e={},e[q]=i,e)),type:"button",onClick:function(){return r()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},V={docPage:"docPage_bzDa",docMainContainer:"docMainContainer_2Zr6",docSidebarContainer:"docSidebarContainer_3Qrx",docMainContainerEnhanced:"docMainContainerEnhanced_jL2D",docSidebarContainerHidden:"docSidebarContainerHidden_86ZD",collapsedDocSidebar:"collapsedDocSidebar_3rwa",expandSidebarButtonIcon:"expandSidebarButtonIcon_3l7S",docItemWrapperEnhanced:"docItemWrapperEnhanced_39tQ"},J=a(1873);function $(e){var t,a,o,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,u=d.pluginId,h=d.version,f=s.sidebar,E=f?d.docsSidebars[f]:void 0,v=(0,n.useState)(!1),g=v[0],C=v[1],k=(0,n.useState)(!1),_=k[0],Z=k[1],S=(0,n.useCallback)((function(){_&&Z(!1),C(!g)}),[_]);return n.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(u,h)}},n.createElement("div",{className:V.docPage},n.createElement(K,null),E&&n.createElement("aside",{className:(0,c.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&g&&Z(!0)}},n.createElement(Y,{key:f,sidebar:E,path:s.path,onCollapse:S,isHidden:_}),_&&n.createElement("div",{className:V.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},n.createElement(p,{className:V.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(V.docMainContainer,(a={},a[V.docMainContainerEnhanced]=g||!E,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(o={},o[V.docItemWrapperEnhanced]=g,o))},n.createElement(r.Zo,{components:U.Z},m)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,Q.LX)(r.pathname,e)}));return l?n.createElement(n.Fragment,null,n.createElement(J.Z,null,n.createElement("html",{className:a.className})),n.createElement($,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a}))):n.createElement(j.default,e)}},6055:function(e,t,a){a.r(t);var n=a(9496),r=a(983),o=a(6650);t.default=function(){return n.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);