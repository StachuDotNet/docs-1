/*! For license information please see 2.68e35d1a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{251:function(e,t,a){"use strict";var n=a(45);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e})),a.d(t,"c",(function(){return n.f}))},257:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(270),o=a(242),i=a(249),l="",s="dark",u=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):l),r=a[0],c=a[1],i=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),u=Object(n.useCallback)((function(){c(l),i(l)}),[]),d=Object(n.useCallback)((function(){c(s),i(s)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?s:l)}))}),[]),{isDarkTheme:r===s,setLightTheme:u,setDarkTheme:d}},d=a(271);var f=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},h=(a(56),a(258),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),m=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=(t=void 0===t?{}:t).id,r=Object(n.useState)(!0),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(a){var e=localStorage.getItem("docusaurus.announcement.id"),t=a!==e;localStorage.setItem("docusaurus.announcement.id",a),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&i(!1)}}),[]),{isAnnouncementBarClosed:c,closeAnnouncementBar:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),i(!0)}}},v=a(272);var b=function(e){var t=h(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=m(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(v.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},p=a(273),g=a(145),k=a.n(g);var E=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,n=a.content,c=a.backgroundColor,i=a.textColor,l=Object(p.a)(),s=l.isAnnouncementBarClosed,u=l.closeAnnouncementBar;return!n||s?null:r.a.createElement("div",{className:k.a.announcementBar,style:{backgroundColor:c,color:i},role:"banner"},r.a.createElement("div",{className:k.a.announcementBarContent,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("button",{type:"button",className:k.a.announcementBarClose,onClick:u,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},O=(a(87),a(82),a(2)),_=(a(274),a(11)),j=a(243),y=a(245),C=(a(68),a(35),a(24),a(23),a(97),a(251)),w=a(277),N=a(146),S=a.n(N),T=function(e){var t,c,i=e.handleSearchBarToggle,l=e.isSearchBarExpanded,s=Object(n.useState)(!1),u=s[0],d=s[1],f=Object(n.useRef)(null),h=Object(o.a)().siteConfig,m=(void 0===h?{}:h).themeConfig.algolia,v=Object(C.b)(),b=Object(w.a)().navigateToSearchPage;var p=function(e){void 0===e&&(e=!0),u||Promise.all([Promise.all([a.e(3),a.e(88),a.e(91)]).then(a.t.bind(null,389,7)),a.e(61).then(a.t.bind(null,390,7))]).then((function(t){var a=t[0].default;d(!0),window.docsearch=a,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1,tabAutocomplete:!1},handleSelected:function(e,t,a){t.stopPropagation();var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;v.push(r)}}),e&&f.current.focus()}(e)}))},g=Object(n.useCallback)((function(){p(),u&&f.current.focus(),i(!l)}),[l]),k=Object(n.useCallback)((function(){i(!l)}),[l]),E=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;p(t)})),O=Object(n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||b(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("div",{className:S.a.searchWrapper},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:Object(j.a)(S.a.searchIconButton,(t={},t[S.a.searchIconButtonHidden]=l,t)),onClick:g,onKeyDown:g,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:Object(j.a)("navbar__search-input",S.a.searchInput,(c={},c[S.a.searchInputExpanded]=l,c)),onMouseOver:E,onFocus:E,onBlur:k,onKeyDown:O,ref:f})))},x=a(320),B=a.n(x),L=a(147),I=a.n(L),P=function(){return r.a.createElement("span",{className:Object(j.a)(I.a.toggle,I.a.moon)})},D=function(){return r.a.createElement("span",{className:Object(j.a)(I.a.toggle,I.a.sun)})},M=function(e){var t=Object(o.a)().isClient;return r.a.createElement(B.a,Object(O.a)({disabled:!t,icons:{checked:r.a.createElement(P,null),unchecked:r.a.createElement(D,null)}},e))},A=a(262);var R=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},F=a(279),U=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],i=c[1],l=Object(n.useState)(0),s=l[0],u=l[1],d=Object(n.useState)(0),f=d[0],h=d[1],m=Object(n.useCallback)((function(e){null!==e&&h(e.getBoundingClientRect().height)}),[]),v=Object(C.c)(),b=R(v.hash),p=b[0],g=b[1];return Object(F.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<f))){if(o)return i(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,f]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:m,isNavbarVisible:a}},X=a(280),H=a(281),G=a(282),K=a(148),W=a.n(K);function Y(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,u=e.prependBaseUrlToHref,d=Object(_.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),f=Object(i.a)(n),h=Object(i.a)(t),m=Object(i.a)(c,{forcePrependBaseUrl:!0});return r.a.createElement(y.a,Object(O.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?m:c}:Object.assign({isNavLink:!0,activeClassName:s,to:f},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(h)}}:null),d),o)}function q(e){var t=e.items,a=e.position,n=void 0===a?"right":a,c=e.className,o=Object(_.a)(e,["items","position","className"]),i=function(e,t){return void 0===t&&(t=!1),Object(j.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:Object(j.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n})},r.a.createElement(Y,Object(O.a)({className:i(c)},o,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),o.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(_.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(Y,Object(O.a)({activeClassName:"dropdown__link--active",className:i(a,!0)},n)))})))):r.a.createElement(Y,Object(O.a)({className:i(c)},o))}function V(e){var t=e.items,a=(e.position,e.className),n=Object(_.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(j.a)("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(O.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(_.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(Y,Object(O.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(O.a)({className:c(a)},n)))}var z=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,i=c.navbar,l=(i=void 0===i?{}:i).title,s=i.links,u=void 0===s?[]:s,d=i.hideOnScroll,f=void 0!==d&&d,h=c.disableDarkMode,m=void 0!==h&&h,v=a.isClient,b=Object(n.useState)(!1),p=b[0],g=b[1],k=Object(n.useState)(!1),E=k[0],_=k[1],C=Object(A.a)(),w=C.isDarkTheme,N=C.setLightTheme,S=C.setDarkTheme,x=U(f),B=x.navbarRef,L=x.isNavbarVisible,I=Object(G.a)(),P=I.logoLink,D=I.logoLinkProps,R=I.logoImageUrl,F=I.logoAlt;Object(X.a)(p);var K=Object(n.useCallback)((function(){g(!0)}),[g]),Y=Object(n.useCallback)((function(){g(!1)}),[g]),z=Object(n.useCallback)((function(e){return e.target.checked?S():N()}),[N,S]),J=Object(H.a)();Object(n.useEffect)((function(){J===H.b.desktop&&g(!1)}),[J]);var Q=function(e){return{leftLinks:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightLinks:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(u),Z=Q.leftLinks,$=Q.rightLinks;return r.a.createElement("nav",{ref:B,className:Object(j.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":p},e[W.a.navbarHideable]=f,e[W.a.navbarHidden]=!L,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:K,onKeyDown:K},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(y.a,Object(O.a)({className:"navbar__brand",to:P},D),null!=R&&r.a.createElement("img",{key:v,className:"navbar__logo",src:R,alt:F}),null!=l&&r.a.createElement("strong",{className:Object(j.a)("navbar__title",(t={},t[W.a.hideLogoText]=E,t))},l)),Z.map((function(e,t){return r.a.createElement(q,Object(O.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},$.map((function(e,t){return r.a.createElement(q,Object(O.a)({},e,{key:t}))})),!m&&r.a.createElement(M,{className:W.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:w,onChange:z}),r.a.createElement(T,{handleSearchBarToggle:_,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(y.a,Object(O.a)({className:"navbar__brand",onClick:Y,to:P},D),null!=R&&r.a.createElement("img",{key:v,className:"navbar__logo",src:R,alt:F}),null!=l&&r.a.createElement("strong",{className:"navbar__title"},l)),!m&&p&&r.a.createElement(M,{"aria-label":"Dark mode toggle in sidebar",checked:w,onChange:z})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(V,Object(O.a)({},e,{onClick:Y,key:t}))})))))))},J=(a(325),a(149)),Q=a.n(J);function Z(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(_.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(i.a)(t),s=Object(i.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(y.a,Object(O.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?s:a}:{to:l},o),n)}var $=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var ee=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,l=n.links,s=void 0===l?[]:l,u=n.logo,d=void 0===u?{}:u,f=Object(i.a)(d.src);return a?r.a.createElement("footer",{className:Object(j.a)("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Z,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:Q.a.footerLogoLink},r.a.createElement($,{alt:d.alt,url:f})):r.a.createElement($,{alt:d.alt,url:f})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(150);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.title,s=a.themeConfig.image,u=a.url,d=e.children,h=e.title,m=e.noFooter,v=e.description,p=e.image,g=e.keywords,k=e.permalink,O=e.version,_=h?h+" | "+l:l,j=p||s,y=Object(i.a)(j,{absolute:!0}),C=Object(i.a)(n);return r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:C}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:y}),j&&r.a.createElement("meta",{property:"twitter:image",content:y}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),k&&r.a.createElement("meta",{property:"og:url",content:u+k}),k&&r.a.createElement("link",{rel:"canonical",href:u+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(E,null),r.a.createElement(z,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(ee,null)))}},262:function(e,t,a){"use strict";var n=a(0),r=a(271);t.a=function(){return Object(n.useContext)(r.a)}},271:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},272:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},273:function(e,t,a){"use strict";var n=a(0),r=a(272);t.a=function(){return Object(n.useContext)(r.a)}},274:function(e,t,a){var n=a(7),r=a(309),c=a(32).f,o=a(261).f,i=a(89),l=a(84),s=n.RegExp,u=s,d=s.prototype,f=/a/g,h=/a/g,m=new s(f)!==f;if(a(12)&&(!m||a(10)((function(){return h[a(3)("match")]=!1,s(f)!=f||s(h)==h||"/a/i"!=s(f,"i")})))){s=function(e,t){var a=this instanceof s,n=i(e),c=void 0===t;return!a&&n&&e.constructor===s&&c?e:r(m?new u(n&&!c?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&c?l.call(e):t),a?this:d,s)};for(var v=function(e){e in s||c(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},b=o(u),p=0;b.length>p;)v(b[p++]);d.constructor=s,s.prototype=d,a(15)(n,"RegExp",s)}a(96)("RegExp")},277:function(e,t,a){"use strict";a(316),a(318),a(23),a(83),a(278);var n=a(251),r=a(19),c=a(242);t.a=function(){var e=Object(n.b)(),t=Object(n.c)(),a=Object(c.a)().siteConfig,o=(a=void 0===a?{}:a).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},navigateToSearchPage:function(t){e.push(o+"search?q="+t)}}}},278:function(e,t,a){"use strict";var n=a(9),r=a(319),c=a(59);a(60)("search",1,(function(e,t,a,o){return[function(a){var n=e(this),r=null==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=o(a,e,this);if(t.done)return t.value;var i=n(e),l=String(this),s=i.lastIndex;r(s,0)||(i.lastIndex=0);var u=c(i,l);return r(i.lastIndex,s)||(i.lastIndex=s),null===u?-1:u.index}]}))},279:function(e,t,a){"use strict";var n=a(0),r=a(19),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],i=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},280:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},281:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(!e)return!1;function a(){o(t())}return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),c}},282:function(e,t,a){"use strict";var n=a(242),r=a(262),c=a(249),o=a(250);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.navbar,a=(t=void 0===t?{}:t).logo,i=void 0===a?{}:a,l=Object(r.a)().isDarkTheme,s=Object(c.a)(i.href||"/"),u={};i.target?u={target:i.target}:Object(o.a)(s)||(u={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&l?i.srcDark:i.src;return{logoLink:s,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},309:function(e,t,a){var n=a(13),r=a(310).set;e.exports=function(e,t,a){var c,o=t.constructor;return o!==a&&"function"==typeof o&&(c=o.prototype)!==a.prototype&&n(c)&&r&&r(e,c),e}},310:function(e,t,a){var n=a(13),r=a(9),c=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(26)(Function.call,a(275).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return c(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:c}},316:function(e,t,a){"use strict";a(317);var n=a(9),r=a(84),c=a(12),o=/./.toString,i=function(e){a(15)(RegExp.prototype,"toString",e,!0)};a(10)((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?i((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!c&&e instanceof RegExp?r.call(e):void 0)})):"toString"!=o.name&&i((function(){return o.call(this)}))},317:function(e,t,a){a(12)&&"g"!=/./g.flags&&a(32).f(RegExp.prototype,"flags",{configurable:!0,get:a(84)})},318:function(e,t,a){var n=Date.prototype,r=n.toString,c=n.getTime;new Date(NaN)+""!="Invalid Date"&&a(15)(n,"toString",(function(){var e=c.call(this);return e==e?r.call(this):"Invalid Date"}))},319:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},320:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),i=f(a(321)),l=f(a(21)),s=f(a(322)),u=f(a(323)),d=a(324);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},321:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},322:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},323:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},324:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},325:function(e,t,a){var n=a(6);n(n.S,"Array",{isArray:a(88)})}}]);