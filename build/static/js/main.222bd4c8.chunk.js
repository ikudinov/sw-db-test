(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(13),n(3)),s=n(7),l=n.n(s),u=(n(14),n(1)),f=n.n(u),d=n(4),p=n(2),v=n.n(p),g="key1",h=function(e){localStorage.setItem(g,e)},m=function(){return localStorage.getItem(g)},w={save:function(){var e=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.a.setDriver([v.a.INDEXEDDB]),n=v.a.createInstance({name:"table1",storeName:"store1"}),e.next=4,n.setItem(g,t);case 4:n._dbInfo.db.close();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),load:function(){var e=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.a.createInstance({name:"table1",storeName:"store1"}),e.next=3,t.getItem(g);case 3:return n=e.sent,t._dbInfo.db.close(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};var b=function(){var e=Object(a.useState)((new Date).toISOString()),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],f=s[1],d=Object(a.useState)(""),p=Object(i.a)(d,2),v=p[0],g=p[1];return Object(a.useEffect)((function(){w.load().then(f),g(m())}),[f,g]),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"\u0412 indexedDB: ",u),o.a.createElement("p",null,"\u0412 localStorage: ",v),o.a.createElement("p",null,o.a.createElement("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)}})),o.a.createElement("p",null,o.a.createElement("button",{onClick:function(){w.save(n),h(n)}},"\u0421\u041e\u0425\u0420\u0410\u041d\u0418\u0422\u042c"))))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()},7:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.222bd4c8.chunk.js.map