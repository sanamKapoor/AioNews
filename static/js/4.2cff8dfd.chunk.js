(this.webpackJsonpaio_news=this.webpackJsonpaio_news||[]).push([[4],{37:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(38);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(39);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},39:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},44:function(e,t,a){e.exports=a.p+"static/media/earth.6ccbbc9a.png"},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a(18),o=a(37),s=a(19),m=a(8),i=function(){return{type:m.d}},u=function(e){return{type:m.f,payload:e}},d=function(e){return{type:m.a,payload:e}},f=function(e){return{type:m.e,payload:e}},p=function(e,t){return function(a){a(i);var n=t?"&":"?",r="".concat("https://gnews.io/api/v3","/").concat(e).concat(n,"token=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/AioNews",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_NEWS_API_KEY);a(d({url:e,operator:n})),fetch(r).then((function(e){return e.json()})).then((function(e){a(function(e){return{type:m.c,payload:e}}(e.articles))})).catch((function(e){var t;a((t=e.message,{type:m.b,payload:t}))}))}},b=["business","technology","sports","science","health","entertainment"];var v=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e}));return r.a.createElement("div",{className:"d-none d-sm-flex justify-content-around mt-2 mt-sm-3 text-light w-100 mx-auto mx-sm-4"},b.map((function(a,n){return r.a.createElement("div",{key:n,onClick:function(){e(f(a)),e(p("topics/".concat(a),!1))},className:"mx-1 p text-capitalize switch-btn card-text ".concat(t.topic===a?"text-muted":"")},a)})))};var E=function(){var e=Object(l.b)();return r.a.createElement("div",{className:"d-flex d-sm-none row mt-2 mx-auto"},r.a.createElement("button",{onClick:function(){return e((t="topics",{type:m.h,payload:t}));var t},className:"btn btn-sm btn-light col-11 mx-auto text-center","data-toggle":"modal","data-target":"#exampleModal"},"Topics"))};var g=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})),a=Object(n.useState)(""),c=Object(o.a)(a,2),i=c[0],b=c[1];Object(n.useEffect)((function(){e(u(!1))}),[e]);var g=function(t){"Enter"===t.key&&(e(f("")),e({type:m.g}),e(p("search?q=".concat(i),!0)),b(""))};return r.a.createElement("nav",{className:"navbar bg-primary px-2 px-md-5"},r.a.createElement("div",{className:"row mx-auto"},r.a.createElement("a",{href:"/home",className:"col-md-3 col-4 text-light navbar-brand font-weight-bold"},"AIONEWS"),t.saved?r.a.createElement("div",{className:"col-md-5 col-12 mx-auto order-md-2 order-3"}):r.a.createElement("input",{value:i,onChange:function(e){return b(e.target.value)},onKeyPress:function(e){return g(e)},className:"col-md-5 col-11 mx-auto mt-2 mt-md-0 order-md-2 order-3 form-control",type:"search",placeholder:"Search"}),r.a.createElement("div",{className:"col-md-3 col-7 order-md-3 order-2 align-self-center text-right text-md-center"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-outline-light btn-sm dropdown-toggle px-2 py-1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"far fa-user pr-1 pr-md-2"})),r.a.createElement("div",{className:"dropdown-menu text-sm-center"},r.a.createElement("span",{className:"dropdown-item save",onClick:function(){return e(u(!0))}},"Saved"),r.a.createElement(s.b,{to:"/",onClick:function(){localStorage.removeItem("user"),e(f("")),e(d({}))},className:"btn btn-secondary btn-sm m-2"},"Logout"))))),t.saved?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(E,null)))},N=a(44),h=a.n(N);var y=function(e){var t=e.values,a=e.saved,c=e.deleteNews,l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=s[0],i=s[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),f=d[0],p=d[1],b=Object(n.useState)(!1),v=Object(o.a)(b,2),E=v[0],g=v[1];Object(n.useEffect)((function(){g(!1);var e=JSON.parse(localStorage.getItem("users")),a=N(e);a||E?(p(""),a.savedNews&&a.savedNews.map((function(e){return e.title===t.title&&i(!0),null}))):(p("Please reload the page."),g(!0))}),[t.title,E]);var N=function(e){var t,a=JSON.parse(localStorage.getItem("user"));return e.length>0&&a&&e.map((function(e){return e.email===a.email&&e.password===a.password&&(t=e),null})),t||null},y=function(e){a?function(e){var t=JSON.parse(localStorage.getItem("users")),a=N(t).savedNews;a?a.map((function(t){if(t.title===e.title){c(e.title);var n=a.indexOf(t);a.splice(n,1)}return null})):alert("Can not remove saved News."),localStorage.setItem("users",JSON.stringify(t)),i(!1)}(e):function(e){if(!m){var t=JSON.parse(localStorage.getItem("users")),a=N(t).savedNews;a?a.push(e):alert("Can not save News."),localStorage.setItem("users",JSON.stringify(t)),i(!0)}}(e)};if(t&&!f){var O=null===t.image||""===t.image||void 0===t.image?h.a:t.image;return r.a.createElement("div",{className:"row no-gutters border mx-0 my-2 mx-sm-2 p-1 p-md-2 rounded"},r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("img",{src:O,className:"card-img",alt:"img"})),r.a.createElement("div",{className:"col-12 col-sm-8"},r.a.createElement("div",{className:"card-body p-2 p-sm-4 align-self-center"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text"},t.description),r.a.createElement("div",{className:"row text-muted"},r.a.createElement("em",{className:"col-12 col-sm-6"},"Published At : ",new Date(t.publishedAt).toLocaleDateString()),r.a.createElement("em",{className:"col-12 col-sm-6 text-capitalize"},"Source : ",t.source.name)),r.a.createElement("div",{className:"row text-muted my-2 my-sm-3"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("a",{href:t.url,target:"_blank",className:"btn btn-primary btn-block btn-sm my-1 my-sm-0",rel:"noopener noreferrer"},"View")),r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("button",{onClick:function(){return y(t)},className:"btn btn-secondary btn-block btn-sm my-1 my-sm-0"},a?"Remove":m?"Saved":"Save"))))))}return""};var O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(l.b)(),m=Object(n.useState)(""),i=Object(o.a)(m,2),d=i[0],f=i[1],p=Object(n.useCallback)((function(){var e=JSON.parse(localStorage.getItem("users")),t=JSON.parse(localStorage.getItem("user")),a=b(e,t);if(a){f("");var n=a.savedNews;n&&c(n)}else f("Please reload the page.")}),[]);Object(n.useEffect)((function(){p()}),[p]);var b=function(e,t){var a;return e.length>0&&t&&e.filter((function(e){return e.email===t.email&&e.password===t.password&&(a=e),null})),a||null},v=function(e){c(a.filter((function(t){return t.title!==e})))};return d?r.a.createElement("h2",{className:"text-center mt-2"},d):r.a.createElement("section",{className:"mx-auto mt-2 mt-sm-3 mt-md-4 mb-4 mb-sm-5"},r.a.createElement("span",{onClick:function(){return s(u(!1))},className:"text-primary back-btn m-2"},r.a.createElement("i",{className:"fas fa-arrow-left"})),r.a.createElement("div",{className:"row no-gutters"},a.length>0?a.map((function(e,t){return r.a.createElement("div",{className:"col-12 col-xl-6",key:t},r.a.createElement(y,{values:e,saved:!0,deleteNews:v}))})):r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",{className:"text-muted mt-2"},"You don't have any saved news."))),r.a.createElement("div",{className:"water-mark position-fixed text-center text-sm-right p-1 p-sm-2 shadow"},"Made with ",r.a.createElement("span",{role:"img","aria-label":"img"},"\u2764\ufe0f")," by Sanam Kapoor"))};var x=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})),a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],m=c[1],i=Object(n.useCallback)((function(t,a){e(p(t,a))}),[e]);Object(n.useEffect)((function(){void 0===t.endPoint.url&&i("top-news",!1)}),[i,t.endPoint]);var u=Object(n.useCallback)((function(){var e,a=t.endPoint.url,n=/^search/.test(a),r=/^topics/.test(a),c=/^top-news/.test(a);(t.topic||r)&&(e=t.topic),(t.searchResult||n)&&(e="Search Results"),t.topNews&&c&&(e=t.topNews),m(e)}),[t]);return Object(n.useEffect)((function(){u()}),[t,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"mx-auto mt-2 mb-4 mb-sm-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-9 mx-auto"},t.loading?r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border text-light",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):t.error?r.a.createElement("h2",{className:"text-center"},t.error):t.news?r.a.createElement(r.a.Fragment,null,s?r.a.createElement("h2",{className:"text-capitalize m-sm-3 text-center text-sm-left"},s):"",t.news.map((function(e,t){return r.a.createElement(y,{key:t,values:e})}))):r.a.createElement("h2",{className:"text-center"},"Server not responding.")))),r.a.createElement("div",{className:"water-mark text-center text-sm-right p-1 p-sm-2 shadow"},"Made with ",r.a.createElement("span",{role:"img","aria-label":"img"},"\u2764\ufe0f")," by Sanam Kapoor"))};var w=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e})),a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],m=c[1],i=Object(n.useCallback)((function(){"topics"===t.setModalData?m(b.map((function(a,n){return r.a.createElement("button",{key:n,onClick:function(){e(f(a)),e(p("topics/".concat(a),!1))},className:"col m-1 text-capitalize btn ".concat(t.topic===a?"btn-primary":"btn-outline-primary")},a)}))):m([])}),[t,e]);return Object(n.useEffect)((function(){m([]),i()}),[t.setModalData,t.topic,i]),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title text-capitalize",id:"exampleModalLabel"},t.setModalData),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row mx-0 mx-sm-2"},s)))))};t.default=function(){var e=Object(c.g)().state,t=Object(c.f)(),a=Object(l.c)((function(e){return e.saved}));return Object(n.useEffect)((function(){if(e){var t={email:e.user.email,password:e.user.password};localStorage.setItem("user",JSON.stringify(t))}}),[e]),e||JSON.parse(localStorage.getItem("user"))?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),a&&JSON.parse(localStorage.getItem("user"))?r.a.createElement(O,null):r.a.createElement(x,null),r.a.createElement(w,null)):(t.push("/"),"")}}}]);
//# sourceMappingURL=4.2cff8dfd.chunk.js.map