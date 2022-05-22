(()=>{"use strict";var n={747:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,":root {\n\n    font-size: 16px;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n#header {\n    background-color: blue;\n}\n\n#content {\n    /* background-color: rgb(202, 137, 137); */\n    background-color: #C84630;\n}\n\n#footer {\n    background-color: antiquewhite;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.description {\n    display: none;\n    align-self: flex-start;\n}\n\n.visible {\n    display: block;\n}\n\n.hidden {\n    display: none;\n}\n\n@media screen and (max-width: 600px) {\n\n    #header {\n        /* background: linear-gradient(rgb(172, 70, 70) 95%, rgb(71, 70, 70)) 95%; */\n        background-color: #231C07;\n        height: 15vh;\n        color: white;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 2.25rem;\n    }\n\n    #content {\n        padding: 2.5vh 0;\n        font-size: 1.5rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 2.5vh;\n    }\n\n    #intro {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 1vh;\n    }\n\n    .contentSection {\n        /* background-color: rgb(240, 255, 255, .9); */\n        background-color: rgb(255, 255, 255, .8);\n        width: 90vw;\n        padding: 2vh 2.5vw;\n        display: flex;\n        flex-direction: column;\n        gap: 1vh;\n        border-radius: 8px;\n    }\n\n    .title {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .services {\n        font-size: 1.25rem;\n        display: flex;\n        gap: 1vh;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    \n    .price {\n        border-bottom: 2px solid black;\n    }\n\n    img {\n        width: 85vw; \n        height: 45vh; \n    }\n\n    #frontAudi {\n        object-fit: cover; \n        object-position: 0 50%;\n    }\n\n    #backAudi {\n        object-fit: cover; \n        object-position: 0 35%;\n    }\n\n    #soapyWheel {\n        object-fit: cover; \n        object-position: 0 50%;\n    }\n\n    #soapyCar {\n        object-fit: cover; \n        object-position: 0 50%;\n    }\n\n    .slides {\n        display: flex;\n        justify-content: center;\n    }\n\n    ul {\n        margin: 0;\n        padding: 0 7vw;\n        position: relative;\n    }\n\n    #languageList {\n        font-size: 1rem;\n    }\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(747),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=document.getElementById("english"),m=document.getElementById("spanish");h.addEventListener("click",(()=>{document.querySelectorAll(".spanish").forEach((n=>{n.classList.remove("visible")})),document.querySelectorAll(".english").forEach((n=>{n.classList.add("visible")})),m.classList.remove("hidden"),h.classList.add("hidden")})),m.addEventListener("click",(()=>{document.querySelectorAll(".english").forEach((n=>{n.classList.remove("visible")})),document.querySelectorAll(".spanish").forEach((n=>{n.classList.add("visible")})),h.classList.remove("hidden"),m.classList.add("hidden")}))})()})();