(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{168:function(e,t,a){"use strict";a.r(t);a(177);var n=a(5),r=a.n(n),o=a(0),l=a.n(o),c=a(171),s=a.n(c),i=a(188),u=a.n(i),m=a(172),p=a(201),d=a.n(p),f=a(202),h=a.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("aside",{className:"note"},l.a.createElement("div",{className:"container note-container"},l.a.createElement("div",{className:"flex-author"},l.a.createElement("p",null,"I'm Gustavo, researcher, engineer and musician. I really hope my articles are helpful. No ads, no sponsored posts, no bullshit."),l.a.createElement("a",{href:"https://ko-fi.com/gquino",className:"donate-button",target:"_blank"},"Buy me a coffee"," ",l.a.createElement("img",{src:d.a,className:"coffee-icon"})),l.a.createElement("a",{className:"patreon-button",href:"https://www.patreon.com/gquino",target:"_blank"},"Patreon")),l.a.createElement("div",{className:"flex-avatar"},l.a.createElement("img",{className:"avatar",src:h.a}))))},t}(o.Component),E=a(189),b=a.n(E),v=a(57),N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,a=e.size;return l.a.createElement("div",{className:"tag-container"},t&&t.map(function(e){return l.a.createElement(v.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+b()(e)+"/"},l.a.createElement("span",{className:a||null},e))}))},t}(o.Component),y=a(185),w=a(180),k=a(170),x=a.n(k),_=a(183);a.d(t,"default",function(){return S}),a.d(t,"pageQuery",function(){return C});var S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props.pageContext.slug,a=this.props.data.markdownRemark,n=a.frontmatter;n.id||(n.id=t),n.category_id||(n.category_id=x.a.postDefaultCategoryID),n.thumbnail&&(e=n.thumbnail.childImageSharp.fixed);var r=Object(_.b)(n.date),o=Object(_.a)(n),c="https://twitter.com/search?q="+x.a.siteUrl+"/"+n.slug+"/",i="http://twitter.com/share?text="+encodeURIComponent(n.title)+"&url="+x.a.siteUrl+"/"+n.slug+"/&via=gustavo_quino";return l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("title",null,n.title+" – "+x.a.siteTitle)),l.a.createElement(w.a,{postPath:t,postNode:a,postSEO:!0}),l.a.createElement("article",{className:"single container"},l.a.createElement("header",{className:"single-header "+(e?"":"no-thumbnail")},e?l.a.createElement(u.a,{fixed:n.thumbnail.childImageSharp.fixed}):null,l.a.createElement("div",{className:"flex"},l.a.createElement("h1",null,n.title),l.a.createElement("div",{className:"post-meta"},l.a.createElement("time",{className:"date"},r),"/",l.a.createElement("a",{className:"twitter-link",href:i},"Share"),"/",l.a.createElement("a",{className:"github-link",href:o,target:"_blank"},"Edit on Github ✏️")),l.a.createElement(N,{tags:n.tags}))),l.a.createElement("div",{className:"post",dangerouslySetInnerHTML:{__html:a.html}}),l.a.createElement("div",null," ",l.a.createElement("a",{className:"button twitter-button",href:i,target:"_blank"},"Share on Twitter")," ",l.a.createElement("a",{className:"button twitter-button",href:c,target:"_blank"},"Discuss on Twitter")),l.a.createElement("h3",null,"Stay in touch"),l.a.createElement("p",null,"Like the posts you see here? Sign up to get notified about new ones."),l.a.createElement(y.a,null)),l.a.createElement(g,{config:x.a}))},t}(o.Component),C="1356658459"},183:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return u});var n=a(178),r=a.n(n),o=a(170),l=a.n(o),c=a(184),s=a.n(c),i=function(e){return s.a.utc(e).format(l.a.dateFormat)},u=function(e){var t=s.a.utc(e.date).format(l.a.dateFromFormat);return r()(l.a.repo,"/blob/master/content/posts",t+"-"+e.slug+".md")}},185:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(5),r=a.n(n),o=a(0),l=a.n(o),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("a",{href:"http://eepurl.com/gsYMAH"},"Join my mailing list!")},t}(o.Component)},201:function(e,t,a){e.exports=a.p+"static/coffee-ab3d234dc206fcf5d5a3bb1a98da478a.svg"},202:function(e,t,a){e.exports=a.p+"static/GustavoFooter-e895a9896cc718b35e50dc8ca67c71da.jpg"}}]);
//# sourceMappingURL=component---src-templates-post-js-c45185db473abc58e86a.js.map