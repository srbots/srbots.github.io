(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8610],{2852:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2852,e.exports=t},5366:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=5366,e.exports=t},2012:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2012,e.exports=t},2253:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2253,e.exports=t},1271:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1271,e.exports=t},4756:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4756,e.exports=t},8459:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8459,e.exports=t},90:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=90,e.exports=t},1410:function(e,t,o){var n=o(7590),a=n.Agile,r=n.generateId,s=n.createState,i=n.createCollection,l=n.createComputed,c=o(8419),u=c.AgileHOC,d=c.useAgile,m=c.useWatcher,f=c.useProxy,g=c.useSelector,p=c.useValue,h=o(4698),b=h.Event,v="https://srbots.github.io",w={copyright:"Made with  \ud83d\udc9c by SRbots",meta:{title:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft",image:"/img/favicon.ico",description:"\u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft, \u0443\u043c\u043d\u044b\u0435 \u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0438\u0433\u0440\u0430\u044e\u0442 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u0435\u0433\u0430\u044e\u0442, \u043f\u0438\u0448\u0443\u0442 \u0432 \u0447\u0430\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434 \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0431\u043e\u0442\u043e\u0432 minecraft srbots, \u0432\u0435\u0440\u0441\u0438\u0438 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 \u0431\u043e\u0442\u043e\u0432: 1.12.2, 1.16.4, 1.18.2 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 1.20",color:"#6c69a0",keywords:["minecraft \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 Minecraft","\u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u043e\u0442\u043e\u0432 \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","bots \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f 1.12.2 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442 \u0434\u043b\u044f 1.18.2 minecraft","\u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442 1.20 \u0431\u043e\u0442\u044b","\u0431\u043e\u0442\u044b","\u0431\u043e\u0442 \u043c\u0430\u0439\u043d","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u0430","bot \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442","\u0431\u043e\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 minecraft"]},domain:"https://srbots.github.io",githubOrgUrl:v,githubUrl:""+v,githubDocsUrl:v+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"",stackoverflowUrl:"",twitterUrl:"",redditUrl:"",version:"0.0.1",liveCodeScope:{Agile:a,createState:s,createCollection:i,createComputed:l,useAgile:d,useProxy:f,useEvent:h.useEvent,useWatcher:m,useSelector:g,useValue:p,AgileHOC:u,generateId:r,Event:b,toast:o(2132).toast}},y={title:"SRbots",tagline:"SRbots \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0411\u043e\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 Minecraft.",url:w.domain,baseUrlIssueBanner:!1,baseUrl:"/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"SRbots",projectName:"https://srbots.github.io/",themes:["@docusaurus/theme-live-codeblock"],scripts:[{src:"https://snack.expo.io/embed.js",async:!0}],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},w),themeConfig:{hideableSidebar:!1,algolia:{appId:"-",apiKey:"-",indexName:"-"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},prism:{theme:o(7694),darkTheme:o(3618),defaultLanguage:"javascript"},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"Logo",src:"img/favicon.ico"},items:[{label:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",position:"left",items:[{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"},{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"}]},{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",position:"left",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",position:"left",to:"docs/introduction"}]},footer:{copyright:w.copyright,style:"dark",links:[{title:"\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c",items:[{label:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",to:"/docs/installation/"},{label:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",to:"/docs/how-it-works/"},{label:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",to:"/docs/download/"}]},{title:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430",items:[{label:"Telegram",href:"https://t.me/+J0zHXs9fCKI3OGUy"}]},{title:"\u0415\u0449\u0435",items:[{label:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",to:"docs/introduction"},{label:"Cookie Policy",to:"/legal/cookie-notice"}]}]}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:6679,editUrl:w.githubDocsUrl+"/tree/develop",showLastUpdateAuthor:!1,showLastUpdateTime:!0,remarkPlugins:[[o(8564),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:w.githubDocsUrl+"/tree/develop"},theme:{customCss:[3878]}}]]};e.exports=Object.assign({},y)},9404:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var n=o(7294),a=o(9960),r=o(8665),s=o(8561),i=o(5999),l=o(6681);function c(e){var t,o=e.metadata,c=e.items,u=e.sidebar,d=o.allTagsPath,m=o.name,f=o.count,g=(t=(0,l.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(f),tagName:m});return n.createElement(r.Z,{title:p,wrapperClassName:l.kM.wrapper.blogPages,pageClassName:l.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:u},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,p),n.createElement(a.Z,{href:d},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return n.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})))}},6679:function(e){e.exports={docs:[{type:"category",label:"\u041e\u0431\u0449\u0435\u0435",collapsed:!1,items:["main/introduction","main/how-it-works","main/accessibility","main/download","main/installation"]},{type:"category",label:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f",collapsed:!1,items:["activation/activate"]},{type:"category",label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",collapsed:!1,items:["functions/connect","functions/reg-auth","functions/smart-bots","functions/one-command","functions/replay-command","functions/count-bots","functions/teleportation","functions/dictionary","functions/dictionary-interval","functions/nicks"]},{type:"category",label:"\u0421\u0435\u0440\u0432\u0435\u0440",collapsed:!1,items:["server/pack-server-minecraft","server/server-settings"]},{type:"category",label:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",collapsed:!1,items:["rules/rules"]},"interfaces"]}},8326:function(e,t,o){"use strict";var n=o(7294);t.Z=function(e){var t,o=null!=(t=e.height)?t:100;return n.createElement("div",{style:{height:o}})}},6674:function(e,t,o){"use strict";o.d(t,{Z:function(){return g}});var n=o(3117),a=o(7294),r=o(776),s=o(6010),i="Header_2vLO",l="EditorHeader_QaUu",c="Editor_bTrj",u="PreviewHeader_3Nbv",d="PreviewContainer_k3-s",m=o(8326),f=o(3229),g=function(e){var t=e.children,o=e.transformCode,g=e.theme||(0,f.Z)();return a.createElement(r.nu,(0,n.Z)({code:t.replace(/\n$/,""),transformCode:o||function(e){return e+";"},theme:g,noInline:!0},e),a.createElement("div",{className:(0,s.Z)(i,l)},"Live Editor"),a.createElement(r.uz,{className:c}),a.createElement(m.Z,{height:30}),a.createElement("div",{className:(0,s.Z)(i,u)},"Result"),a.createElement("div",{className:d},a.createElement(r.i5,null),a.createElement(r.IF,null)))}},5557:function(e,t,o){"use strict";var n=o(1410),a=o.n(n),r=o(7294),s=Object.assign({},Object.assign({React:r},r),a().customFields.liveCodeScope);t.Z=s}}]);