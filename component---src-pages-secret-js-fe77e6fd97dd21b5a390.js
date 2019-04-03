(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return m});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(168),l=n(169),s=n(163),u=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement(s.a,{pageTitle:t.secretJson.title}),r.a.createElement(l.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.secretJson.content.childMarkdownRemark.html}})))};u.propTypes={data:o.a.object.isRequired},t.default=u;var m="1305669505"},160:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(157),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(162),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,n){"use strict";var a=n(158),r=n.n(a),i=(n(80),n(56),n(171),n(159)),o={DESKTOP:992,TABLET:768,PHONE:376};function c(){var e=r()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return c=function(){return e},e}function l(){var e=r()(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return l=function(){return e},e}var s=Object.keys(o).reduce(function(e,t){return e[t]=function(){return Object(i.css)(l(),o[t]/16,i.css.apply(void 0,arguments))},e["MIN_"+t]=function(){return Object(i.css)(c(),o[t]/16,i.css.apply(void 0,arguments))},e},{});t.a=s},162:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},163:function(e,t,n){"use strict";n(33);var a=n(167),r=n(0),i=n.n(r),o=n(2),c=n.n(o),l=n(170),s=n(160),u=n(16),m=function(e){var t=e.siteTitle,n=e.siteDescription,a=e.siteUrl,r=e.pageTitle,o=e.pageTitleFull,c=void 0===o?r?t+": "+r:t:o,s=e.themeColor,u=e.social,m=e.imageUrl,p=e.location,d=e.canonical,g=void 0===d?a+(p.pathname||""):d;return i.a.createElement(l.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:t,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:c,property:"og:title"}),i.a.createElement("meta",{content:c,name:"twitter:title"}),i.a.createElement("title",null,c),i.a.createElement("meta",{content:n,name:"description"}),i.a.createElement("meta",{content:n,property:"og:description"}),i.a.createElement("meta",{content:n,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:s,name:"theme-color"}),i.a.createElement("meta",{content:t,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:t,property:"og:site_name"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+u.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+u.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:c,name:"twitter:text:title"}),i.a.createElement("meta",{content:g,property:"og:url"}),i.a.createElement("meta",{content:g,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:g}),i.a.createElement("meta",{content:m||a+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:m||a+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:m||a+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:s,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"text/javascript"},"\n      var _paq = window._paq || [];\n      _paq.push(['trackPageView']);\n      _paq.push(['enableLinkTracking']);\n      (function() {\n        var u=\"https://leslie.matomo.cloud/\";\n        _paq.push(['setTrackerUrl', u+'matomo.php']);\n        _paq.push(['setSiteId', '1']);\n        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n      })();\n      "),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.location,n=e.canonical,a=e.siteUrl,r=e.pageTitle,i=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:n,name:r||i,alternateName:e.pageTitleFull}];return r&&"/"!==t.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:i}},{"@type":"ListItem",position:2,item:{"@id":n,name:r}}]}),o}({location:p,canonical:g,siteUrl:a,pageTitle:r,siteTitle:t,pageTitleFull:c}))))};m.propTypes={siteTitle:c.a.string,siteTitleShort:c.a.string,siteDescription:c.a.string,siteUrl:c.a.string,themeColor:c.a.string,social:c.a.objectOf(c.a.string),imageUrl:c.a.string,canonical:c.a.string,pageTitle:c.a.string,pageTitleFull:c.a.string,location:c.a.object.isRequired};t.a=function(e){return i.a.createElement(s.StaticQuery,{query:"979662568",render:function(t){return i.a.createElement(u.Location,null,function(n){var a=n.location;return i.a.createElement(m,Object.assign({},t.site.siteMetadata,e,{location:a}))})},data:a})}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(158),l=n.n(c),s=n(159),u=n.n(s),m=n(161);function p(){var e=l()(["\n    font-size: ",";\n  "]);return p=function(){return e},e}function d(){var e=l()(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return d=function(){return e},e}var g=u.a.span(d(),function(e){var t=e.size;return function(){switch(t){case"large":return"400";default:return"500"}}},function(e){var t=e.size;return function(){switch(t){case"large":return"3.2rem";default:return"2rem"}}},m.a.TABLET(p(),function(e){var t=e.size;return function(){switch(t){case"large":return"2.6rem";default:return"2rem"}}})),f=function(e){var t=e.children,n=e.as,a=void 0===n?"span":n,i=e.size;return r.a.createElement(g,{as:a,size:i},t)};f.propTypes={children:o.a.string.isRequired,as:o.a.string,size:o.a.oneOf(["large"])};t.a=f},165:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Leslie Owusu-Appiah"}}}}},166:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(57),l=n(3),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},167:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Leslie Owusu-Appiah",siteTitleShort:"LeslieOA",siteDescription:"Some zeros. Mostly one's.",siteUrl:"https://leslieoa.com/",themeColor:"rgb(0,0,0)",social:{twitter:"LeslieOA"}}}}}},168:function(e,t,n){"use strict";n(33);var a=n(165),r=n(0),i=n.n(r),o=n(2),c=n.n(o),l=n(160),s=n(163),u=n(35),m=n.n(u),p=n(158),d=n.n(p),g=n(159),f=n.n(g),h=n(161);function E(){var e=d()(["\n    .media-query {\n      &.media-phone {\n        display: none;\n      }\n    }\n  "]);return E=function(){return e},e}function y(){var e=d()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem;\n\n  a {\n    color: #757575;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n\n  ","\n"]);return y=function(){return e},e}var b=f.a.header(y(),h.a.PHONE(E())),v=n(164);function x(){var e=d()(["\n  ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    li {\n      font-size: 1.3rem;\n      & + li {\n        margin-left: 2rem;\n      }\n    }\n  }\n"]);return x=function(){return e},e}var w=f.a.nav(x()),k=function(){return i.a.createElement(w,null,i.a.createElement("ul",null,i.a.createElement("li",{className:"media-query media-phone"},i.a.createElement(l.Link,{to:"/"},"Home")),i.a.createElement("li",{className:"media-query media-phone"},i.a.createElement(l.Link,{to:"/projects"},"Projects")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/about"},"About"))))},q=m.a.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),T=function(e){var t=e.title;return i.a.createElement(q,null,i.a.createElement(b,null,i.a.createElement(l.Link,{to:"/"},i.a.createElement(v.a,{as:"h1"},t)),i.a.createElement(k,null)))};T.propTypes={title:c.a.string.isRequired};var z=T;function j(){var e=d()(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo,Courier, monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n\n  figure.disabled {\n    a {\n      text-decoration: none;\n      color: #757575;\n      cursor: not-allowed;\n    }\n  }\n\n']);return j=function(){return e},e}var L=Object(g.createGlobalStyle)(j(),"rgb(65,105,225)","rgb(65,105,225)"),S=function(e){var t=e.data,n=e.children;return i.a.createElement("div",null,i.a.createElement(L,null),i.a.createElement(s.a,null),i.a.createElement(z,{title:t.site.siteMetadata.siteTitle}),n)};S.propTypes={children:c.a.node.isRequired,data:c.a.object.isRequired};var O=function(e){return i.a.createElement(l.StaticQuery,{query:"2302781957",render:function(t){return i.a.createElement(S,Object.assign({data:t},e))},data:a})};O.propTypes={children:c.a.node.isRequired};t.a=O},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(158),l=n.n(c),s=n(159);function u(){var e=l()(["\n  padding: 2rem 4rem;\n  max-width: 700px;\n"]);return u=function(){return e},e}var m=n.n(s).a.div(u()),p=function(e){var t=e.children;return r.a.createElement(m,null,t)};p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-secret-js-fe77e6fd97dd21b5a390.js.map