(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[9514,4608],{2852:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2852,e.exports=t},5366:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=5366,e.exports=t},2012:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2012,e.exports=t},2253:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2253,e.exports=t},1271:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1271,e.exports=t},4756:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4756,e.exports=t},8459:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8459,e.exports=t},90:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=90,e.exports=t},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1410:function(e,t,n){var r=n(7590),a=r.Agile,o=r.generateId,i=r.createState,l=r.createCollection,c=r.createComputed,s=n(8419),u=s.AgileHOC,d=s.useAgile,m=s.useWatcher,p=s.useProxy,f=s.useSelector,b=s.useValue,h=n(4698),v=h.Event,g="https://srbots.github.io",E={copyright:"Made with  \ud83d\udc9c by SRbots",meta:{title:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft",image:"/img/favicon.ico",description:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft, \u0443\u043c\u043d\u044b\u0435 \u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0438\u0433\u0440\u0430\u044e\u0442 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u0435\u0433\u0430\u044e\u0442, \u043f\u0438\u0448\u0443\u0442 \u0432 \u0447\u0430\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434 \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0431\u043e\u0442\u043e\u0432 minecraft srbots, \u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0431\u043e\u0442\u043e\u0432: 1.12.2, 1.16.4, 1.18.2 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 1.20",color:"#6c69a0",keywords:["minecraft \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 Minecraft","\u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u043e\u0442\u043e\u0432 \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","bots \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f 1.12.2 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 \u0434\u043b\u044f 1.18.2 minecraft","\u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 1.20 \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b","\u0431\u043e\u0442 \u043c\u0430\u0439\u043d","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u0430","bot \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 minecraft"]},domain:"https://srbots.github.io",githubOrgUrl:g,githubUrl:""+g,githubDocsUrl:g+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"",stackoverflowUrl:"",twitterUrl:"",redditUrl:"",version:"0.0.1",liveCodeScope:{Agile:a,createState:i,createCollection:l,createComputed:c,useAgile:d,useProxy:p,useEvent:h.useEvent,useWatcher:m,useSelector:f,useValue:b,AgileHOC:u,generateId:o,Event:v,toast:n(2132).toast}},y={title:"SRbots",tagline:"SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 Minecraft.",url:E.domain,baseUrlIssueBanner:!1,baseUrl:"/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"SRbots",projectName:"https://srbots.github.io/",themes:["@docusaurus/theme-live-codeblock"],scripts:[{src:"https://snack.expo.io/embed.js",async:!0}],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},E),themeConfig:{hideableSidebar:!1,algolia:{appId:"-",apiKey:"-",indexName:"-"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},prism:{theme:n(7694),darkTheme:n(3618),defaultLanguage:"javascript"},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"Logo",src:"img/favicon.ico"},items:[{label:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",position:"left",items:[{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"},{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"}]},{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",position:"left",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",position:"left",to:"docs/introduction"}]},footer:{copyright:E.copyright,style:"dark",links:[{title:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",items:[{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"},{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"}]},{title:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{title:"\u0415\u0449\u0435",items:[{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",to:"docs/introduction"},{label:"Cookie Policy",to:"/legal/cookie-notice"}]}]}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:6679,editUrl:E.githubDocsUrl+"/tree/develop",showLastUpdateAuthor:!1,showLastUpdateTime:!1,remarkPlugins:[[n(8564),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:E.githubDocsUrl+"/tree/develop"},theme:{customCss:[3878]}}]]};e.exports=Object.assign({},y)},9649:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(102),a=n(3117),o=n(7294),i=n(6010),l=n(5999),c=n(6681),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,r.Z)(e,d),f=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,a.Z)({},p,{className:(0,i.Z)("anchor",(n={},n[u]=f,n[s]=!f,n)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},7440:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(3117),a=n(102),o=n(7294),i=n(2859),l=n(9960),c=n(6865),s=n(9649),u=n(6010),d=n(6681),m="details_1VDD";function p(e){var t=Object.assign({},e);return o.createElement(d.PO,(0,r.Z)({},t,{className:(0,u.Z)("alert alert--info",m,t.className)}))}var f=["mdxType","originalType"];var b={head:function(e){var t=o.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,i=(r.mdxType,r.originalType,(0,a.Z)(r,f));return o.createElement(e.props.originalType,i)}return e}(e)}));return o.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(c.Z,e):o.createElement("code",e)},a:function(e){return o.createElement(l.Z,e)},pre:function(e){var t,n=e.children;return(0,o.isValidElement)(n)&&(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:o.createElement(c.Z,(0,o.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=o.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((function(e){return e!==n})));return o.createElement(p,(0,r.Z)({},e,{summary:n}),a)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(162),o=n(5999);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6679:function(e){e.exports={docs:[{type:"category",label:"\u041e\u0431\u0449\u0435\u0435",collapsed:!1,items:["main/introduction","main/how-it-works","main/accessibility","main/download","main/installation"]},{type:"category",label:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f",collapsed:!1,items:["activation/activate"]},{type:"category",label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",collapsed:!1,items:["functions/connect","functions/connect-settings","functions/proxy-server","functions/reg-auth","functions/smart-bots","functions/one-command","functions/replay-command","functions/count-bots","functions/teleportation","functions/pvp-pve","functions/dictionary","functions/dictionary-interval","functions/nicks","functions/import-config","functions/reset-settings"]},{type:"category",label:"\u0421\u0435\u0440\u0432\u0435\u0440",collapsed:!1,items:["server/pack-server-minecraft","server/server-settings","server/velocity-bungeecord"]},{type:"category",label:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",collapsed:!1,items:["problems/how-to-fix"]},{type:"category",label:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",collapsed:!1,items:["rules/rules"]},"interfaces"]}},8326:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t,n=null!=(t=e.height)?t:100;return r.createElement("div",{style:{height:n}})}},3641:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(7294),a=n(3905),o=n(2263),i=n(6291),l=n(162),c=n(6010),s=n(6681),u=n(3783),d=n(8487),m=n(3117);var p=function(e){return r.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(5999),b=n(102),h=n(9960),v=n(3919),g=n(541),E="menuLinkText_1J2g",y="hasHref_2fq0",k=n(2389),C=["items"],_=["item"],N=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],w=(0,r.memo)((function(e){var t=e.items,n=(0,b.Z)(e,C);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(O,(0,m.Z)({key:t,item:e},n))})))}));function O(e){var t=e.item,n=(0,b.Z)(e,_);return"category"===t.type?0===t.items.length?null:r.createElement(T,(0,m.Z)({item:t},n)):r.createElement(S,(0,m.Z)({item:t},n))}function T(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,i=e.level,l=(0,b.Z)(e,N),u=n.items,d=n.label,p=n.collapsible,v=n.className,g=n.href,C=function(e){var t=(0,k.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,s.Wl)(e):void 0}),[e,t])}(n),_=(0,s._F)(n,o),Z=(0,s.uR)({initialState:function(){return!!p&&(!_&&n.collapsed)}}),O=Z.collapsed,T=Z.setCollapsed,S=Z.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,s.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:_,collapsed:O,setCollapsed:T}),r.createElement("li",{className:(0,c.Z)(s.kM.docs.docSidebarItemCategory,s.kM.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":O},v)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(h.Z,(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":p&&!g,"menu__link--active":_},t[E]=!p,t[y]=!!C,t)),onClick:p?function(e){null==a||a(n),g?T(!1):(e.preventDefault(),S())}:function(){null==a||a(n)},href:p?null!=C?C:"#":C},l),d),g&&p&&r.createElement("button",{"aria-label":(0,f.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:d}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),S()}})),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:O},r.createElement(w,{items:u,tabIndex:O?-1:0,onItemClick:a,activePath:o,level:i+1})))}function S(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,i=(0,b.Z)(e,Z),l=t.href,u=t.label,d=t.className,p=(0,s._F)(t,a);return r.createElement("li",{className:(0,c.Z)(s.kM.docs.docSidebarItemLink,s.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",d),key:u},r.createElement(h.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:l},(0,v.Z)(l)&&{onClick:n?function(){return n(t)}:void 0},i),(0,v.Z)(l)?u:r.createElement("span",null,u,r.createElement(g.Z,null))))}var I="sidebar_15mo",x="sidebarWithHideableNavbar_267A",U="sidebarHidden_2kNb",M="sidebarLogo_3h0W",D="menu_Bmed",L="menuWithAnnouncementBar_2WvA",P="collapseSidebarButton_1CGd",A="collapseSidebarButtonIcon_3E-R";function j(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",P),onClick:t},r.createElement(p,{className:A}))}function F(e){var t,n,a=e.path,o=e.sidebar,i=e.onCollapse,l=e.isHidden,u=function(){var e=(0,s.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,s.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,s.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return r.createElement("div",{className:(0,c.Z)(I,(t={},t[x]=p,t[U]=l,t))},p&&r.createElement(d.Z,{tabIndex:-1,className:M}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",D,(n={},n[L]=u,n))},r.createElement("ul",{className:(0,c.Z)(s.kM.docs.docSidebarMenu,"menu__list")},r.createElement(w,{items:o,activePath:a,level:1}))),f&&r.createElement(j,{onClick:i}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,c.Z)(s.kM.docs.docSidebarMenu,"menu__list")},r.createElement(w,{items:n,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function H(e){return r.createElement(s.Cv,{component:R,props:e})}var W=r.memo(F),B=r.memo(H);function z(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(W,e),a&&r.createElement(B,e))}var V=n(7440),X=n(4608),q="backToTopButton_35hR",J="backToTopButtonShow_18ls";function K(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),i=K(),l=i.smoothScrollTop,u=i.cancelScrollToTop;return(0,s.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var i=n<r;if(i||u(),n<300)a(!1);else if(i){var l=document.documentElement.scrollHeight;n+window.innerHeight<l&&a(!0)}else a(!1)}})),(0,s.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,f.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",s.kM.common.backToTopButton,q,(e={},e[J]=n,e)),type:"button",onClick:function(){return l()}})},Y=n(6775),Q={docPage:"docPage_3AUJ",docSidebarContainer:"docSidebarContainer_2LAn",docSidebarContainerHidden:"docSidebarContainerHidden_2lve",collapsedDocSidebar:"collapsedDocSidebar_23gX",docMainContainer:"docMainContainer_2AUC",docItemWrapperEnhanced:"docItemWrapperEnhanced_2WAn",docItemWrapper:"docItemWrapper_1WZa"},$=n(2859),ee=function(e){var t,n,i,u,d,m=e.currentDocRoute,b=e.versionMetadata,h=e.children,v=e.sidebarName,g=(0,o.Z)().siteConfig,E=b.pluginId,y=b.version,k=(0,s.Vq)(),C=(0,r.useState)(!1),_=C[0],N=C[1],Z=(0,r.useState)(!1),w=Z[0],O=Z[1],T=(0,r.useCallback)((function(){w&&O(!1),N(!_)}),[w]),S=(0,r.useCallback)((function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&_&&O(!0)}),[_,O]);return r.createElement(l.Z,{wrapperClassName:"main-docs-wrapper",searchMetadata:{version:y,tag:(0,s.os)(E,y)}},r.createElement("div",{className:Q.docPage},r.createElement(G,null),k&&r.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=_,t)),onTransitionEnd:S,role:"complementary"},r.createElement(z,{key:v,sidebar:k,path:m.path,sidebarCollapsible:null==(n=null==(i=g.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:T,isHidden:w}),w&&r.createElement("div",{className:Q.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},r.createElement(p,{className:Q.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(u={},u[Q.docMainContainerEnhanced]=_,u))},r.createElement("div",{className:(0,c.Z)("padding-vert--lg","container",Q.docItemWrapper,(d={},d[Q.docItemWrapperEnhanced]=_,d))},r.createElement(a.Zo,{components:V.Z},h)))))},te=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,Y.LX)(a.pathname,e)}));if(!o)return r.createElement(X.default,e);var l=o.sidebar,c=l?n.docsSidebars[l]:null;return r.createElement(r.Fragment,null,r.createElement($.Z,null,r.createElement("html",{className:n.className})),r.createElement(s.qu,{version:n},r.createElement(s.bT,{sidebar:c},r.createElement(ee,{currentDocRoute:o,versionMetadata:n,sidebarName:l},(0,i.Z)(t,{versionMetadata:n})))))}},6674:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(3117),a=n(7294),o=n(776),i=n(6010),l="Header_2vLO",c="EditorHeader_QaUu",s="Editor_bTrj",u="PreviewHeader_3Nbv",d="PreviewContainer_k3-s",m=n(8326),p=n(3229),f=function(e){var t=e.children,n=e.transformCode,f=e.theme||(0,p.Z)();return a.createElement(o.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e+";"},theme:f,noInline:!0},e),a.createElement("div",{className:(0,i.Z)(l,c)},"Live Editor"),a.createElement(o.uz,{className:s}),a.createElement(m.Z,{height:30}),a.createElement("div",{className:(0,i.Z)(l,u)},"Result"),a.createElement("div",{className:d},a.createElement(o.i5,null),a.createElement(o.IF,null)))}},5557:function(e,t,n){"use strict";var r=n(1410),a=n.n(r),o=n(7294),i=Object.assign({},Object.assign({React:o},o),a().customFields.liveCodeScope);t.Z=i}}]);