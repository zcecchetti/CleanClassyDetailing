(()=>{"use strict";var n={747:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,":root {\n\n    font-size: 16px;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n#header {\n    background-color: blue;\n}\n\n#content {\n    /* background-color: #C84630; */\n    background: linear-gradient(#C84630 90%, #231C07);\n}\n\n#footer {\n    background-color: #231C07;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: white;\n}\n\n.langToggle {\n    display: none;\n}\n\n.description {\n    align-self: flex-start;\n}\n\n.popup {\n    display: none;\n    z-index: 1;\n    position: sticky;\n    top: 62.5vh;\n    left: 5vw;\n    width: 90vw;\n    height: 25vh;\n    color: white;\n    margin-bottom: -27.5vh;\n}\n\n.visible {\n    display: flex;\n    flex-direction: column;\n}\n\n.hidden {\n    display: none;\n}\n\n@media screen and (max-width: 600px) {\n\n    #header {\n        background-color: #231C07;\n        height: 15vh;\n        color: white;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 2.25rem;\n        padding: 0 1vw 1vw 0;\n    }\n\n    #content {\n        padding: 2.5vh 0;\n        font-size: 1.5rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 2.5vh;\n    }\n\n    #intro {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 1vh;\n    }\n\n    #socialSection {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 1vh;\n    }\n\n    .contentSection {\n        background-color: rgb(255, 255, 255, .8);\n        width: 90vw;\n        padding: 2vh 3vw;\n        display: flex;\n        flex-direction: column;\n        gap: 1vh;\n        border-radius: 2px;\n    }\n\n    .title {\n        display: flex;\n        font-size: 2.5rem;\n        justify-content: center;\n        align-items: center;\n        font-family: cursive;\n    }\n\n    .package {\n        font-size: 1.5rem;\n        justify-content: center;\n        align-items: center;\n        margin: -1vh 0 0 0;\n        padding: 0 0 1vh 0;\n    }\n\n    .services {\n        font-size: 1.25rem;\n        display: flex;\n        gap: 1vh;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    \n    .price {\n        border-bottom: 2px solid black;\n    }\n\n    img {\n        width: 85vw; \n        height: 60vh; \n    }\n\n    #frontAudi {\n        object-fit: cover; \n        object-position: 0 50%;\n    }\n\n    #backAudi {\n        object-fit: cover; \n        object-position: 0 40%;\n    }\n\n    #soapyWheel {\n        object-fit: cover; \n        object-position: 0 50%;\n    }\n\n    #soapyCar {\n        object-fit: cover; \n        object-position: 0 50%;\n    }\n\n    .slides {\n        display: flex;\n        justify-content: center;\n    }\n\n    ul {\n        margin: 0;\n        padding:2.5vw;\n        position: relative;\n    }\n\n    #languageList {\n        font-size: 1rem;\n        align-self: flex-end;\n        text-decoration: underline;\n    }\n\n    li {\n        list-style-type: none;\n    }\n\n    #socials {\n        display: flex;\n        gap: 8px;\n    }\n\n    .contactIcon {\n        height: 2.5rem;\n        width: auto;\n    }\n\n    #promotion {\n        font-weight: 900;\n        font-size: 2rem;\n        background-color:rgb(35, 28, 7, .9);\n        justify-content: center;\n        align-items: center;\n        gap: 1vh;\n    }\n\n    .popupText {\n        padding: 0vh 3vw;\n    }\n\n    #popupButton {\n        padding: 1vh;\n        width: 60%;\n        height: 3rem;\n        font-size: 1.5rem;\n        color: black;\n    }\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=i(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var s=o(n,i),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(569),a=t.n(r),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(747),v={};function m(n){localStorage.setItem("language",JSON.stringify(n))}v.styleTagTransform=p(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const g=document.getElementById("english"),h=document.getElementById("spanish");function y(){document.querySelectorAll(".spanish").forEach((n=>{n.classList.remove("visible")})),document.querySelectorAll(".english").forEach((n=>{n.classList.add("visible")})),h.classList.remove("hidden"),g.classList.add("hidden")}function b(){document.querySelectorAll(".english").forEach((n=>{n.classList.remove("visible")})),document.querySelectorAll(".spanish").forEach((n=>{n.classList.add("visible")})),g.classList.remove("hidden"),h.classList.add("hidden")}g.addEventListener("click",(()=>{y(),m("english")})),h.addEventListener("click",(()=>{b(),m("spanish")})),localStorage.getItem("language")&&("spanish"===JSON.parse(localStorage.getItem("language"))?b():y());const x=document.getElementById("popupButton"),w=document.getElementById("promotion");x.addEventListener("click",(()=>{w.classList.remove("visible")}))})()})();