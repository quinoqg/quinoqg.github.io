(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return w});var a=n(5),i=n.n(a),M=n(0),s=n.n(M),L=n(56),r=n(171),c=n.n(r),u=n(172),o=n(180),j=n(170),l=n.n(j),w=function(t){function e(){return t.apply(this,arguments)||this}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){(0,this.context.setNotFound)()},n.componentWillUnmount=function(){(0,this.context.setFound)()},n.render=function(){return s.a.createElement(u.a,null,s.a.createElement(c.a,{title:"Page not found – "+l.a.siteTitle}),s.a.createElement(o.a,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",null,"404")),s.a.createElement("p",null,"A fatal exception 0E has occurred at ",s.a.createElement("span",{className:"tania"},"0x74616e6961")," in 404: page not found."),s.a.createElement("div",{className:"list"},s.a.createElement("p",null,s.a.createElement("span",{className:"bullet"},"*")," Click any link to terminate the current application."),s.a.createElement("p",null,s.a.createElement("span",{className:"bullet"},"*")," Press ALT + F4 again to restart your browser. You will lose any unsaved information in all tabs.")),s.a.createElement("p",{className:"text-right"},"Click any link to continue",s.a.createElement("span",{className:"blink"},"█"))))},e}(M.Component);w.contextType=L.b},170:function(t,e,n){n(36);var a={siteTitle:"Gustavo Quino",siteTitleShort:"Gustavo Quino",siteTitleAlt:"Gustavo Quino",siteLogo:"/logos/logo-48-n.png",siteUrl:"https://www.gquino.com",repo:"https://github.com/gquino/gquino.github.io.git",pathPrefix:"https://www.gquino.com",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"Personal website of Dr Gustavo Quino, researcher at the University of Oxford and musician.",siteRss:"/rss.xml",googleAnalyticsID:"UA-140451144-1",userEmail:"me@gquino.com",userTwitter:"quinoqg",userLocation:"Oxford, UK",userDescription:"I am a researcher working on the field of solid mechanics.",menuLinks:[{name:"Me",link:"/me/"},{name:"Research",link:"/research/"},{name:"Blog",link:"/blog/"},{name:"Contact",link:"/contact/"}],themeColor:"#3F80FF",backgroundColor:"#ffffff"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),t.exports=a},172:function(t,e,n){"use strict";var a=n(5),i=n.n(a),M=n(0),s=n.n(M),L=n(56),r=n(171),c=n.n(r),u=(n(181),n(179),n(57)),o=n(173),j=n.n(o),l=n(174),w=n.n(l),m=n(175),N=n.n(m),A=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={scrolled:!1},e.navOnScroll=function(){window.scrollY>20?e.setState({scrolled:!0}):e.setState({scrolled:!1})},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.navOnScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.navOnScroll)},n.render=function(){var t=this.state.scrolled,e=this.props.menuLinks,n=this.context;return s.a.createElement("nav",{className:t?"nav scroll":"nav"},s.a.createElement("div",{className:"nav-container"},s.a.createElement("div",{className:"brand"},s.a.createElement(u.Link,{to:"/"},s.a.createElement("img",{src:j.a,className:"favicon"})," ",s.a.createElement("span",{className:"text"},"Gustavo Quino"))),s.a.createElement("div",{className:"links"},e.map(function(t){return s.a.createElement(u.Link,{key:t.name,to:t.link,activeClassName:"active"},t.name)}),s.a.createElement("div",{className:"cta"},s.a.createElement("button",{className:"dark-switcher",onClick:n.toggleDark},n.dark?s.a.createElement("span",null,s.a.createElement("img",{src:w.a,className:"theme-icon"})):s.a.createElement("span",null,s.a.createElement("img",{src:N.a,className:"theme-icon"})))))))},e}(M.Component);A.contextType=L.b;var D=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return s.a.createElement("footer",{className:"footer container"},s.a.createElement("div",null,s.a.createElement("strong",null,"Gustavo Quino")," ","/"," ",s.a.createElement("a",{href:"https://twitter.com/quinoqg",target:"_blank"},"Twitter")," "))},e}(M.Component),g=n(170),E=n.n(g),T=n(176),y=n.n(T);n(182);n.d(e,"a",function(){return I});var I=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.context,e=t.dark,n=t.notFound,a=this.props.children;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{bodyAttributes:{class:"theme "+(e&&!n?"dark":n?"not-found":"")}},s.a.createElement("meta",{name:"description",content:E.a.siteDescription}),s.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:y.a})),s.a.createElement(A,{menuLinks:E.a.menuLinks}),s.a.createElement("main",{id:"main-content"},a),s.a.createElement(D,null))},e}(M.Component);I.contextType=L.b},173:function(t,e,n){t.exports=n.p+"static/escher-160-a7849171a41ab899c40b8647b47f28db.png"},174:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg=="},175:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+"},176:function(t,e){t.exports="data:image/png;base64,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"},177:function(t,e,n){"use strict";n(187)("fixed",function(t){return function(){return t(this,"tt","","")}})},178:function(t,e,n){var a,i,M;M=function(){return function(){return function(t){var e=[];if(t[0].match(/^[^\/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^\/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^\/:]+):\/*/,"$1://");for(var a=0;a<t.length;a++){var i=t[a];if("string"!=typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(a>0&&(i=i.replace(/^[\/]+/,"")),i=a<t.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),e.push(i))}var M=e.join("/"),s=(M=M.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return M=s.shift()+(s.length>0?"?":"")+s.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=M():void 0===(i="function"==typeof(a=M)?a.call(e,n,e,t):a)||(t.exports=i)},180:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n(177);var a=n(5),i=n.n(a),M=n(0),s=n.n(M),L=n(171),r=n.n(L),c=n(178),u=n.n(c),o=n(170),j=n.n(o),l=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t,e,n,a=this.props,i=a.postNode,M=a.postPath,L=a.postSEO,c="";if(L){var o=i.frontmatter;t=o.title,e=o.description?o.description:i.excerpt,o.thumbnail&&(c=o.thumbnail.childImageSharp.fixed.src),n=u()(j.a.siteUrl,j.a.pathPrefix,M)}else t=j.a.siteTitle,e=j.a.siteDescription,c=j.a.siteLogo;c=u()(j.a.siteUrl,c);var l=u()(j.a.siteUrl,j.a.pathPrefix),w=[{"@context":"http://schema.org","@type":"WebSite",url:l,name:t,alternateName:j.a.siteTitleAlt?j.a.siteTitleAlt:""}];return L&&w.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:t,image:c}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:l,name:t,alternateName:j.a.siteTitleAlt?j.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:c},description:e}),s.a.createElement(r.a,null,s.a.createElement("meta",{name:"description",content:e}),s.a.createElement("meta",{name:"image",content:c}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(w)),s.a.createElement("meta",{property:"og:url",content:L?n:l}),L?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:t}),s.a.createElement("meta",{property:"og:description",content:e}),s.a.createElement("meta",{property:"og:image",content:c}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:j.a.userTwitter}),s.a.createElement("meta",{name:"twitter:title",content:t}),s.a.createElement("meta",{name:"twitter:description",content:e}),s.a.createElement("meta",{name:"twitter:image",content:c}))},e}(M.Component)}}]);
//# sourceMappingURL=component---src-pages-404-js-d2e9dac16d5269ac25e5.js.map