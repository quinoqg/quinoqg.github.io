(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{164:function(t,e,M){"use strict";M.r(e),M.d(e,"default",function(){return w});var n=M(5),L=M.n(n),i=M(0),s=M.n(i),u=M(171),a=M.n(u),j=M(172),r=M(190),c=M(170),o=M.n(c),w=function(t){function e(){return t.apply(this,arguments)||this}return L()(e,t),e.prototype.render=function(){return s.a.createElement(j.a,null,s.a.createElement(a.a,{title:"Newsletter – "+o.a.siteTitle}),s.a.createElement("div",{className:"container"},s.a.createElement(r.a,null)))},e}(i.Component)},170:function(t,e,M){M(36);var n={siteTitle:"Gustavo Quino",siteTitleShort:"Gustavo Quino",siteTitleAlt:"Gustavo Quino",siteLogo:"/logos/logo-48-n.png",siteUrl:"https://www.gquino.com",repo:"https://github.com/gquino/gquino.github.io.git",pathPrefix:"https://www.gquino.com",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"Dr Gustavo Quino is a researcher at the University of Oxford.",siteRss:"/rss.xml",googleAnalyticsID:"UA-140451144-1",userEmail:"me@gquino.com",userTwitter:"gustavo_quino",userLocation:"Oxford, UK",userDescription:"I am a researcher working on the field of solid mechanics.",menuLinks:[{name:"Me",link:"/me/"},{name:"Research",link:"/research/"},{name:"Blog",link:"/blog/"},{name:"Contact",link:"/contact/"}],themeColor:"#3F80FF",backgroundColor:"#ffffff"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),t.exports=n},172:function(t,e,M){"use strict";var n=M(5),L=M.n(n),i=M(0),s=M.n(i),u=M(56),a=M(171),j=M.n(a),r=(M(181),M(179),M(57)),c=M(173),o=M.n(c),w=M(174),l=M.n(w),A=M(175),N=M.n(A),D=function(t){function e(){for(var e,M=arguments.length,n=new Array(M),L=0;L<M;L++)n[L]=arguments[L];return(e=t.call.apply(t,[this].concat(n))||this).state={scrolled:!1},e.navOnScroll=function(){window.scrollY>20?e.setState({scrolled:!0}):e.setState({scrolled:!1})},e}L()(e,t);var M=e.prototype;return M.componentDidMount=function(){window.addEventListener("scroll",this.navOnScroll)},M.componentWillUnmount=function(){window.removeEventListener("scroll",this.navOnScroll)},M.render=function(){var t=this.state.scrolled,e=this.props.menuLinks,M=this.context;return s.a.createElement("nav",{className:t?"nav scroll":"nav"},s.a.createElement("div",{className:"nav-container"},s.a.createElement("div",{className:"brand"},s.a.createElement(r.Link,{to:"/"},s.a.createElement("img",{src:o.a,className:"favicon"})," ",s.a.createElement("span",{className:"text"},"Gustavo Quino"))),s.a.createElement("div",{className:"links"},e.map(function(t){return s.a.createElement(r.Link,{key:t.name,to:t.link,activeClassName:"active"},t.name)}),s.a.createElement("div",{className:"cta"},s.a.createElement("button",{className:"dark-switcher",onClick:M.toggleDark},M.dark?s.a.createElement("span",null,s.a.createElement("img",{src:l.a,className:"theme-icon"})):s.a.createElement("span",null,s.a.createElement("img",{src:N.a,className:"theme-icon"})))))))},e}(i.Component);D.contextType=u.b;var T=function(t){function e(){return t.apply(this,arguments)||this}return L()(e,t),e.prototype.render=function(){return s.a.createElement("footer",{className:"footer container"},s.a.createElement("div",null,s.a.createElement("strong",null,"Gustavo Quino")," ","/"," ",s.a.createElement("a",{href:"https://twitter.com/gustavo_quino",target:"_blank"},"Twitter")," "))},e}(i.Component),m=M(170),E=M.n(m),g=M(176),I=M.n(g);M(182);M.d(e,"a",function(){return C});var C=function(t){function e(){return t.apply(this,arguments)||this}return L()(e,t),e.prototype.render=function(){var t=this.context,e=t.dark,M=t.notFound,n=this.props.children;return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{bodyAttributes:{class:"theme "+(e&&!M?"dark":M?"not-found":"")}},s.a.createElement("meta",{name:"description",content:E.a.siteDescription}),s.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:I.a})),s.a.createElement(D,{menuLinks:E.a.menuLinks}),s.a.createElement("main",{id:"main-content"},n),s.a.createElement(T,null))},e}(i.Component);C.contextType=u.b},173:function(t,e,M){t.exports=M.p+"static/escher-160-a7849171a41ab899c40b8647b47f28db.png"},174:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg=="},175:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+"},176:function(t,e){t.exports="data:image/png;base64,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"},185:function(t,e,M){"use strict";M.d(e,"a",function(){return u});var n=M(5),L=M.n(n),i=M(0),s=M.n(i),u=function(t){function e(){return t.apply(this,arguments)||this}return L()(e,t),e.prototype.render=function(){return s.a.createElement("a",{href:"http://eepurl.com/gsYMAH"},"Join my mailing list!")},e}(i.Component)},190:function(t,e,M){"use strict";M.d(e,"a",function(){return a});var n=M(5),L=M.n(n),i=M(0),s=M.n(i),u=M(185),a=function(t){function e(){return t.apply(this,arguments)||this}return L()(e,t),e.prototype.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Stay in touch"),s.a.createElement("p",null,"Like the posts you see here? Sign up to get notified about new content."),s.a.createElement(u.a,null),s.a.createElement("p",null),s.a.createElement("p",null,"You can find me around the web:"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("strong",null,"Email"),": ",s.a.createElement("a",{href:"mailto:me@gquino.com"},"me@gquino.com")),s.a.createElement("li",null,s.a.createElement("strong",null,"Twitter"),":"," ",s.a.createElement("a",{target:"_blank",href:"https://twitter.com/gustavo_quino"},"gustavo_quino")),s.a.createElement("li",null,s.a.createElement("strong",null,"LinkedIn"),":"," ",s.a.createElement("a",{target:"_blank",href:"https://linkedin.com/in/gustavoquino"},"gustavoquino"))))},e}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-newsletter-js-d8cd5eb9649ac3fcd895.js.map