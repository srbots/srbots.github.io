(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[6103],{2852:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2852,e.exports=t},5366:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=5366,e.exports=t},2012:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2012,e.exports=t},2253:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2253,e.exports=t},1271:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1271,e.exports=t},4756:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4756,e.exports=t},8459:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8459,e.exports=t},90:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=90,e.exports=t},1410:function(e,t,n){var a=n(7590),o=a.Agile,i=a.generateId,r=a.createState,l=a.createCollection,s=a.createComputed,c=n(8419),m=c.AgileHOC,u=c.useAgile,d=c.useWatcher,p=c.useProxy,g=c.useSelector,v=c.useValue,f=n(4698),b=f.Event,h="https://srbots.github.io",_={copyright:"Made with  \ud83d\udc9c by SRbots",meta:{title:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft",image:"/img/favicon.ico",description:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft, \u0443\u043c\u043d\u044b\u0435 \u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0438\u0433\u0440\u0430\u044e\u0442 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u0435\u0433\u0430\u044e\u0442, \u043f\u0438\u0448\u0443\u0442 \u0432 \u0447\u0430\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434 \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0431\u043e\u0442\u043e\u0432 minecraft srbots, \u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0431\u043e\u0442\u043e\u0432: 1.12.2, 1.16.4, 1.18.2 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 1.20",color:"#6c69a0",keywords:["minecraft \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 Minecraft","\u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u043e\u0442\u043e\u0432 \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","bots \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f 1.12.2 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 \u0434\u043b\u044f 1.18.2 minecraft","\u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 1.20 \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b","\u0431\u043e\u0442 \u043c\u0430\u0439\u043d","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u0430","bot \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 minecraft"]},domain:"https://srbots.github.io",githubOrgUrl:h,githubUrl:""+h,githubDocsUrl:h+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"",stackoverflowUrl:"",twitterUrl:"",redditUrl:"",version:"0.0.1",liveCodeScope:{Agile:o,createState:r,createCollection:l,createComputed:s,useAgile:u,useProxy:p,useEvent:f.useEvent,useWatcher:d,useSelector:g,useValue:v,AgileHOC:m,generateId:i,Event:b,toast:n(2132).toast}},E={title:"SRbots",tagline:"SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 Minecraft.",url:_.domain,baseUrlIssueBanner:!1,baseUrl:"/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"SRbots",projectName:"https://srbots.github.io/",themes:["@docusaurus/theme-live-codeblock"],scripts:[{src:"https://snack.expo.io/embed.js",async:!0}],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},_),themeConfig:{hideableSidebar:!1,algolia:{appId:"-",apiKey:"-",indexName:"-"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},prism:{theme:n(7694),darkTheme:n(3618),defaultLanguage:"javascript"},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"Logo",src:"img/favicon.ico"},items:[{label:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",position:"left",items:[{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"},{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"}]},{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",position:"left",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",position:"left",to:"docs/introduction"}]},footer:{copyright:_.copyright,style:"dark",links:[{title:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",items:[{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"},{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"}]},{title:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{title:"\u0415\u0449\u0435",items:[{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",to:"docs/introduction"},{label:"Cookie Policy",to:"/legal/cookie-notice"}]}]}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:6679,editUrl:_.githubDocsUrl+"/tree/develop",showLastUpdateAuthor:!1,showLastUpdateTime:!1,remarkPlugins:[[n(8564),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:_.githubDocsUrl+"/tree/develop"},theme:{customCss:[3878]}}]]};e.exports=Object.assign({},E)},9360:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),o=n(1217),i=n(8665),r=n(8561),l=n(5999),s=n(9960);var c=function(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(s.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(l.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&a.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(l.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=n(6681),u=n(1575);var d=function(e){var t,n=e.content,l=e.sidebar,s=n.frontMatter,d=n.assets,p=n.metadata,g=p.title,v=p.description,f=p.nextItem,b=p.prevItem,h=p.date,_=p.tags,E=p.authors,N=s.hide_table_of_contents,k=s.keywords,y=s.toc_min_heading_level,w=s.toc_max_heading_level,C=null!=(t=d.image)?t:s.image;return a.createElement(i.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:l,toc:!N&&n.toc&&n.toc.length>0?a.createElement(u.Z,{toc:n.toc,minHeadingLevel:y,maxHeadingLevel:w}):void 0},a.createElement(o.Z,{title:g,description:v,keywords:k,image:C},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:h}),E.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:E.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&a.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),a.createElement(r.Z,{frontMatter:s,assets:d,metadata:p,isBlogPostPage:!0},a.createElement(n,null)),(f||b)&&a.createElement(c,{nextItem:f,prevItem:b}))}},5002:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(3117),o=n(102),i=n(7294),r=n(6681),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,n=e.className,a=e.linkClassName,o=e.isChild;return t.length?i.createElement("ul",{className:o?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function c(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,p=void 0===d?void 0:d,g=e.minHeadingLevel,v=e.maxHeadingLevel,f=(0,o.Z)(e,l),b=(0,r.LU)(),h=null!=g?g:b.tableOfContents.minHeadingLevel,_=null!=v?v:b.tableOfContents.maxHeadingLevel,E=(0,r.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:_}),N=(0,i.useMemo)((function(){if(u&&p)return{linkClassName:u,linkActiveClassName:p,minHeadingLevel:h,maxHeadingLevel:_}}),[u,p,h,_]);return(0,r.Si)(N),i.createElement(s,(0,a.Z)({toc:E,className:c,linkClassName:u},f))}},1575:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(3117),o=n(102),i=n(7294),r=n(6010),l=n(5002),s="tableOfContents_35-E",c=["className"];var m=function(e){var t=e.className,n=(0,o.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},i.createElement(l.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6679:function(e){e.exports={docs:[{type:"category",label:"\u041e\u0431\u0449\u0435\u0435",collapsed:!1,items:["main/introduction","main/how-it-works","main/accessibility","main/download","main/installation"]},{type:"category",label:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f",collapsed:!1,items:["activation/activate"]},{type:"category",label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",collapsed:!1,items:["functions/connect","functions/connect-settings","functions/proxy-server","functions/reg-auth","functions/smart-bots","functions/one-command","functions/replay-command","functions/count-bots","functions/teleportation","functions/pvp-pve","functions/dictionary","functions/dictionary-interval","functions/nicks","functions/import-config","functions/reset-settings","functions/reconnecting"]},{type:"category",label:"\u0421\u0435\u0440\u0432\u0435\u0440",collapsed:!1,items:["server/pack-server-minecraft","server/server-settings","server/velocity-bungeecord"]},{type:"category",label:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",collapsed:!1,items:["problems/how-to-fix"]},{type:"category",label:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",collapsed:!1,items:["rules/rules"]},"interfaces"]}},8326:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t,n=null!=(t=e.height)?t:100;return a.createElement("div",{style:{height:n}})}},6674:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(3117),o=n(7294),i=n(776),r=n(6010),l="Header_2vLO",s="EditorHeader_QaUu",c="Editor_bTrj",m="PreviewHeader_3Nbv",u="PreviewContainer_k3-s",d=n(8326),p=n(3229),g=function(e){var t=e.children,n=e.transformCode,g=e.theme||(0,p.Z)();return o.createElement(i.nu,(0,a.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e+";"},theme:g,noInline:!0},e),o.createElement("div",{className:(0,r.Z)(l,s)},"Live Editor"),o.createElement(i.uz,{className:c}),o.createElement(d.Z,{height:30}),o.createElement("div",{className:(0,r.Z)(l,m)},"Result"),o.createElement("div",{className:u},o.createElement(i.i5,null),o.createElement(i.IF,null)))}},5557:function(e,t,n){"use strict";var a=n(1410),o=n.n(a),i=n(7294),r=Object.assign({},Object.assign({React:i},i),o().customFields.liveCodeScope);t.Z=r}}]);