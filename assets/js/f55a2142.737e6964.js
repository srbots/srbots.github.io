"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[5158],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6995:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],o={id:"server-settings",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",sidebar_label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",slug:"/server/server-settings"},p=void 0,u={unversionedId:"server/server-settings",id:"server/server-settings",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",description:"\ud83d\udcd1 \u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435: \u0411\u043e\u0442\u044b SRbots \u043e\u0442\u043b\u0438\u0447\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043a\u0430\u0445,",source:"@site/docs/server/server-settings.md",sourceDirName:"server",slug:"/server/server-settings",permalink:"/docs/server/server-settings",editUrl:"https://srbots.github.io/documentation/tree/develop/docs/server/server-settings.md",tags:[],version:"current",frontMatter:{id:"server-settings",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",sidebar_label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",slug:"/server/server-settings"},sidebar:"docs",previous:{title:"\u0413\u043e\u0442\u043e\u0432\u0430\u044f \u0441\u0431\u043e\u0440\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",permalink:"/docs/server/pack-server-minecraft"},next:{title:"Velocity \u0438 BungeeCord",permalink:"/docs/server/velocity-bungeecord"}},s=[{value:"\u2699\ufe0f \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"base-settings",children:[{value:"\u2692\ufe0f \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 AuthMe",id:"authme",children:[],level:4}],level:3},{value:"\ud83c\udf10 \u0423 \u043c\u0435\u043d\u044f Bungeecord + Botfilter",id:"bungeecord",children:[],level:3},{value:"\ud83e\udd16 \u0423 \u043c\u0435\u043d\u044f \u043f\u043b\u0430\u0433\u0438\u043d \u043a\u0430\u043f\u0447\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",id:"captcha",children:[],level:3},{value:"\ud83c\udfd4\ufe0f \u0410\u043d\u0442\u0438\u0447\u0438\u0442",id:"anti-cheat",children:[],level:3},{value:"\ud83d\udfe1 \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"additionally",children:[],level:3}],c={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83d\udcd1 \u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435: \u0411\u043e\u0442\u044b SRbots \u043e\u0442\u043b\u0438\u0447\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043a\u0430\u0445,",(0,l.kt)("br",{parentName:"p"}),"\n","\u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0431\u043e\u0440\u043a\u0430 \u043d\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0442\u0438\u043f\u0430, \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u044d\u0442\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439.  "),(0,l.kt)("h3",{id:"base-settings"},"\u2699\ufe0f \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,l.kt)("p",null,"\u0411\u043e\u0442\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ",(0,l.kt)("em",{parentName:"p"},"\u0441 \u0432\u0430\u0448\u0435\u0433\u043e")," ",(0,l.kt)("strong",{parentName:"p"},"IP")," \u0430\u0434\u0440\u0435\u0441\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e",(0,l.kt)("br",{parentName:"p"}),"\n","\u043d\u0430 ",(0,l.kt)("strong",{parentName:"p"},"\u0432\u0430\u0448\u0435\u043c")," \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,l.kt)("em",{parentName:"p"},"\u0438\u0437\u043c\u0435\u043d\u0435\u043d")," \u043b\u0438\u043c\u0438\u0442 ",(0,l.kt)("em",{parentName:"p"},"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0439")," \u0441 \u043e\u0434\u043d\u043e\u0433\u043e IP \u0430\u0434\u0440\u0435\u0441\u0430.  "),(0,l.kt)("p",null,"\ud83e\udd47 \u041e\u0434\u043d\u0438\u043c \u0438\u0437 ",(0,l.kt)("em",{parentName:"p"},"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445")," \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f - ",(0,l.kt)("strong",{parentName:"p"},"AuthMe"),"."),(0,l.kt)("h4",{id:"authme"},"\u2692\ufe0f \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 AuthMe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432 \u0441 \u043e\u0434\u043d\u043e\u0433\u043e IP, \u0442\u0430\u043a \u0436\u0435 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u0441 \u043e\u0434\u043d\u043e\u0433\u043e IP."),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043f\u043e \u043f\u0443\u0442\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"/plugins/AuthMe/config.yml")," \u043e\u0442 AuthMe."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u044b \u043d\u0438\u0436\u0435, \u043b\u0438\u0431\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0441\u0432\u043e\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"maxRegPerIp: 0"),(0,l.kt)("li",{parentName:"ul"},"maxLoginPerIp: 200"),(0,l.kt)("li",{parentName:"ul"},"maxJoinPerIp: 200"))),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u0413\u043e\u0442\u043e\u0432\u043e.")),(0,l.kt)("h3",{id:"bungeecord"},"\ud83c\udf10 \u0423 \u043c\u0435\u043d\u044f Bungeecord + Botfilter"),(0,l.kt)("p",null,"\u0411\u043e\u0442\u044b \u043d\u0435 \u0443\u043c\u0435\u044e\u0442 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0431\u0445\u043e\u0434\u0438\u0442\u044c \u043a\u0430\u043f\u0447\u0438, \u043d\u043e",(0,l.kt)("br",{parentName:"p"}),"\n","\u0447\u0442\u043e\u0431\u044b \u0431\u043e\u0442\u044b \u043c\u043e\u0433\u043b\u0438 \u0437\u0430\u0439\u0442\u0438 \u043d\u0430 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043d\u0430\u0439\u0434\u0438\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"spigot.yml"),"."),(0,l.kt)("li",{parentName:"ul"},"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"bungeecord")),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"bungeecord: false"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0430\u043b\u0435\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0431\u043e\u0442\u043e\u0432 \u043a \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443."),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u0413\u043e\u0442\u043e\u0432\u043e")),(0,l.kt)("h3",{id:"captcha"},"\ud83e\udd16 \u0423 \u043c\u0435\u043d\u044f \u043f\u043b\u0430\u0433\u0438\u043d \u043a\u0430\u043f\u0447\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,l.kt)("p",null,"\u0411\u043e\u0442\u044b \u043d\u0435 \u0443\u043c\u0435\u044e\u0442 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0431\u0445\u043e\u0434\u0438\u0442\u044c \u043a\u0430\u043f\u0447\u0438, \u043d\u043e",(0,l.kt)("br",{parentName:"p"}),"\n","\u0447\u0442\u043e\u0431\u044b \u0431\u043e\u0442\u044b \u043c\u043e\u0433\u043b\u0438 \u0437\u0430\u0439\u0442\u0438 \u043d\u0430 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u043f\u043b\u0430\u0433\u0438\u043d ",(0,l.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/plugmanx.88135/"},"PlugManX")," (\u043b\u0438\u0431\u043e \u0430\u043d\u0430\u043b\u043e\u0433)."),(0,l.kt)("li",{parentName:"ul"},"\u0417\u0430\u0445\u043e\u0434\u0438\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u0434 \u0441\u0432\u043e\u0438\u043c \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c ",(0,l.kt)("em",{parentName:"li"},"\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0432\u043e\u0434\u0438\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"li"},"/plugins"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"/plugman list")," (\u043b\u0438\u0431\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0439)."),(0,l.kt)("li",{parentName:"ul"},"\u041d\u0430\u0445\u043e\u0434\u0438\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u043e\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043a\u0430\u043f\u0447\u0438 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430."),(0,l.kt)("li",{parentName:"ul"},"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/plugmanx.88135/"},"PlugManX")," (\u043b\u0438\u0431\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0430) \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043f\u043b\u0430\u0433\u0438\u043d \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"li"},"/plugman disable \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/functions/connect"},"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c")," \u0431\u043e\u0442\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440."),(0,l.kt)("li",{parentName:"ul"},"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/plugmanx.88135/"},"PlugManX")," (\u043b\u0438\u0431\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0430) \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043f\u043b\u0430\u0433\u0438\u043d \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"li"},"/plugman enable \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),"."),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u0413\u043e\u0442\u043e\u0432\u043e")),(0,l.kt)("h3",{id:"anti-cheat"},"\ud83c\udfd4\ufe0f \u0410\u043d\u0442\u0438\u0447\u0438\u0442"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0430\u043d\u0442\u0438\u0447\u0438\u0442 \u0438 \u0431\u043e\u0442\u043e\u0432 \u043a\u0438\u043a\u0430\u0435\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u043d\u0442\u0438\u0447\u0438\u0442\u0430.",(0,l.kt)("br",{parentName:"p"}),"\n","\u0427\u0442\u043e\u0431\u044b \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u0438\u043d\u043e\u0432\u0435\u043d ",(0,l.kt)("strong",{parentName:"p"},"\u0430\u043d\u0442\u0438\u0447\u0438\u0442")," - \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0435\u0433\u043e \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u043e\u0442\u043e\u0432. \u0415\u0441\u043b\u0438 \u0432\u0438\u043d\u043e\u0432\u0435\u043d \u0430\u043d\u0442\u0438\u0447\u0438\u0442, \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443.  "),(0,l.kt)("h3",{id:"additionally"},"\ud83d\udfe1 \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,l.kt)("p",null,"\ud83d\udcd1 \u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435: \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u044e\u0442 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b ",(0,l.kt)("strong",{parentName:"p"},"SRbots"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0411\u043e\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u0432\u043e\u0437\u0434\u0443\u0445\u0435."),(0,l.kt)("li",{parentName:"ul"},"\u0412 \u0444\u0430\u0439\u043b\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"bukkit.yml")," \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0437\u0430\u0434\u0430\u0442\u044c - ",(0,l.kt)("inlineCode",{parentName:"li"},"connection-throttle: 0"),".")))}m.isMDXComponent=!0}}]);