(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[3089],{2852:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2852,e.exports=t},5366:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=5366,e.exports=t},2012:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2012,e.exports=t},2253:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2253,e.exports=t},1271:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1271,e.exports=t},4756:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4756,e.exports=t},8459:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8459,e.exports=t},90:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=90,e.exports=t},1410:function(e,t,n){var o=n(7590),a=o.Agile,i=o.generateId,r=o.createState,s=o.createCollection,l=o.createComputed,c=n(8419),d=c.AgileHOC,u=c.useAgile,m=c.useWatcher,p=c.useProxy,g=c.useSelector,f=c.useValue,v=n(4698),b=v.Event,h="https://srbots.github.io",E={copyright:"Made with  \ud83d\udc9c by SRbots",meta:{title:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft",image:"/img/favicon.ico",description:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft, \u0443\u043c\u043d\u044b\u0435 \u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0438\u0433\u0440\u0430\u044e\u0442 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u0435\u0433\u0430\u044e\u0442, \u043f\u0438\u0448\u0443\u0442 \u0432 \u0447\u0430\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434 \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0431\u043e\u0442\u043e\u0432 minecraft srbots, \u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0431\u043e\u0442\u043e\u0432: 1.12.2, 1.16.4, 1.18.2 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 1.20",color:"#6c69a0",keywords:["minecraft \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 Minecraft","\u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u043e\u0442\u043e\u0432 \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","bots \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f 1.12.2 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 \u0434\u043b\u044f 1.18.2 minecraft","\u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 1.20 \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b","\u0431\u043e\u0442 \u043c\u0430\u0439\u043d","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u0430","bot \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 minecraft"]},domain:"https://srbots.github.io",githubOrgUrl:h,githubUrl:""+h,githubDocsUrl:h+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"",stackoverflowUrl:"",twitterUrl:"",redditUrl:"",version:"0.0.1",liveCodeScope:{Agile:a,createState:r,createCollection:s,createComputed:l,useAgile:u,useProxy:p,useEvent:v.useEvent,useWatcher:m,useSelector:g,useValue:f,AgileHOC:d,generateId:i,Event:b,toast:n(2132).toast}},w={title:"SRbots",tagline:"SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 Minecraft.",url:E.domain,baseUrlIssueBanner:!1,baseUrl:"/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"SRbots",projectName:"https://srbots.github.io/",themes:["@docusaurus/theme-live-codeblock"],scripts:[{src:"https://snack.expo.io/embed.js",async:!0}],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},E),themeConfig:{hideableSidebar:!1,algolia:{appId:"-",apiKey:"-",indexName:"-"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},prism:{theme:n(7694),darkTheme:n(3618),defaultLanguage:"javascript"},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"Logo",src:"img/favicon.ico"},items:[{label:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",position:"left",items:[{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"},{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"}]},{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",position:"left",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",position:"left",to:"docs/introduction"}]},footer:{copyright:E.copyright,style:"dark",links:[{title:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",items:[{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"},{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"}]},{title:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{title:"\u0415\u0449\u0435",items:[{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",to:"docs/introduction"},{label:"Cookie Policy",to:"/legal/cookie-notice"}]}]}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:6679,editUrl:E.githubDocsUrl+"/tree/develop",showLastUpdateAuthor:!1,showLastUpdateTime:!1,remarkPlugins:[[n(8564),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:E.githubDocsUrl+"/tree/develop"},theme:{customCss:[3878]}}]]};e.exports=Object.assign({},w)},2754:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(7294),a=n(2263),i=n(8665),r=n(8561),s=n(9960),l=n(5999);var c=function(e){var t=e.metadata,n=t.previousPage,a=t.nextPage;return o.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},o.createElement("div",{className:"pagination-nav__item"},n&&o.createElement(s.Z,{className:"pagination-nav__link",to:n},o.createElement("div",{className:"pagination-nav__label"},"\xab"," ",o.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),o.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&o.createElement(s.Z,{className:"pagination-nav__link",to:a},o.createElement("div",{className:"pagination-nav__label"},o.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=n(6681);var u=function(e){var t=e.metadata,n=e.items,s=e.sidebar,l=(0,a.Z)().siteConfig.title,u=t.blogDescription,m=t.blogTitle,p="/"===t.permalink?l:m;return o.createElement(i.Z,{title:p,description:u,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},n.map((function(e){var t=e.content;return o.createElement(r.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},o.createElement(t,null))})),o.createElement(c,{metadata:t}))}},6679:function(e){e.exports={docs:[{type:"category",label:"\u041e\u0431\u0449\u0435\u0435",collapsed:!1,items:["main/introduction","main/how-it-works","main/accessibility","main/download","main/installation"]},{type:"category",label:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f",collapsed:!1,items:["activation/activate"]},{type:"category",label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",collapsed:!1,items:["functions/connect","functions/connect-settings","functions/proxy-server","functions/reg-auth","functions/smart-bots","functions/one-command","functions/replay-command","functions/count-bots","functions/teleportation","functions/pvp-pve","functions/dictionary","functions/dictionary-interval","functions/nicks","functions/import-config","functions/reset-settings","functions/reconnecting"]},{type:"category",label:"\u0421\u0435\u0440\u0432\u0435\u0440",collapsed:!1,items:["server/pack-server-minecraft","server/server-settings","server/velocity-bungeecord"]},{type:"category",label:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",collapsed:!1,items:["problems/how-to-fix"]},{type:"category",label:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",collapsed:!1,items:["rules/rules"]},"interfaces"]}},8326:function(e,t,n){"use strict";var o=n(7294);t.Z=function(e){var t,n=null!=(t=e.height)?t:100;return o.createElement("div",{style:{height:n}})}},6674:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(3117),a=n(7294),i=n(776),r=n(6010),s="Header_2vLO",l="EditorHeader_QaUu",c="Editor_bTrj",d="PreviewHeader_3Nbv",u="PreviewContainer_k3-s",m=n(8326),p=n(3229),g=function(e){var t=e.children,n=e.transformCode,g=e.theme||(0,p.Z)();return a.createElement(i.nu,(0,o.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e+";"},theme:g,noInline:!0},e),a.createElement("div",{className:(0,r.Z)(s,l)},"Live Editor"),a.createElement(i.uz,{className:c}),a.createElement(m.Z,{height:30}),a.createElement("div",{className:(0,r.Z)(s,d)},"Result"),a.createElement("div",{className:u},a.createElement(i.i5,null),a.createElement(i.IF,null)))}},5557:function(e,t,n){"use strict";var o=n(1410),a=n.n(o),i=n(7294),r=Object.assign({},Object.assign({React:i},i),a().customFields.liveCodeScope);t.Z=r}}]);