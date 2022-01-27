(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>w});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),d=t.n(i),s=new URL(t(88),t.b),l=new URL(t(897),t.b),u=new URL(t(837),t.b),m=new URL(t(47),t.b),p=new URL(t(552),t.b),h=new URL(t(409),t.b),f=c()(r()),g=d()(s),b=d()(l),v=d()(u),I=d()(m),x=d()(p),y=d()(h);f.push([e.id,"* {\n    /* border: 1px solid black; */\n}\nhtml, body {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody {\n    font-family: 'Courier New', monospace;\n    background: url("+g+");\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#content {\n    background-color: white;\n    width: 100vh;\n    height: 100vh;\n}\n.nav {\n    height: 10vh;\n    width: 100%;\n}\n.menu {\n    margin: 0;\n    padding: 0;\n    height: 10vh;\n    list-style: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background: #FFB133;\n}\nbutton {\n    color: white;\n    text-shadow: 3px 3px #919191;\n    cursor: pointer;\n    background: none;\n    border: none;\n    font-size: 4vh;\n    font-weight: bold;\n}\n.menuOption1::before {\n    content: 'Home';\n}\n.menuOption2::before {\n    content: 'Menu';\n}\n.menuOption3::before {\n    content: 'Contact';\n}\n.topInfo {\n    height: 30%;\n}\n.topInfoHeading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    margin-top: 4vh;\n    color: black;\n    font-size: 5vh;\n    text-align: center;\n}\n.topInfoContent {\n    color: black;\n    text-align: center;\n    padding: 4vh;\n    background: #FFCA85;\n    font-weight: bold;\n    font-size: 3vh;\n}\n.bottomInfo {\n    height: 70%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.chefPhoto {\n    background: url("+b+");\n    background-size: 35vh;\n    height: 35vh;\n    width: 35vh;\n    border-radius: 100%;\n}\n.chefPhotoDesc {\n    font-size: 2vh;\n}\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 10vh;\n    width: 100vh;\n    position: absolute;\n    bottom: 0;\n    background: #FFB133;\n    color: white;\n    font-weight: bold;\n    text-shadow: 1px 1px #919191;\n    font-size: 3vh;\n}\n.frontContent {\n    height: 80vh;\n}\n.menuItems {\n    height: 20vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2vh;\n}\n.menuItemBox {\n    display: flex;\n    align-items: center;\n    width: 40%;\n    gap: 3vh;\n    padding: 1vh;\n}\n.menuItemAbout {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    width: 50%;\n}\n.menuItems .menuItemName,.menuItemPrice {\n    margin: 0;\n    padding: 0;\n}\n.menuImg {\n    height: 15vh;\n    width: 15vh;\n}\n.menuItemName {\n    height: 5vh;\n}\n.menuItemPrice {\n    height: 5vh;\n}\n.menuItem1 .menuImg {\n    background: url("+v+");\n    background-size: 15vh;\n    background-repeat: no-repeat;\n}\n.menuItem1 .menuItemName::before {\n    content: 'Hamburger'\n}\n.menuItem1 .menuItemPrice::before {\n    content: '10$'\n}\n\n.menuItem2 .menuImg {\n    background: url("+I+");\n    background-size: 15vh;\n    background-repeat: no-repeat;\n}\n.menuItem2 .menuItemName::before {\n    content: 'Cheeseburger'\n}\n.menuItem2 .menuItemPrice::before {\n    content: '15$'\n}\n\n.menuItem3 .menuImg {\n    background: url("+x+");\n    background-size: 15vh;\n    background-repeat: no-repeat;\n}\n.menuItem3 .menuItemName::before {\n    content: 'Spicyburger'\n}\n.menuItem3 .menuItemPrice::before {\n    content: '20$'\n}\n\n.menuItem4 .menuImg {\n    background: url("+y+");\n    background-size: 15vh;\n    background-repeat: no-repeat;\n}\n.menuItem4 .menuItemName::before {\n    content: 'Vegeburger'\n}\n.menuItem4 .menuItemPrice::before {\n    content: '25$'\n}\n.contactInfo {\n    height: 50%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 2vh;\n}\n.openingHours {\n    height: 50%;\n    width: 100%;;\n    border: 0;\n}\n.contactItem {\n    color: black;\n    padding: 0;\n    margin: 0;\n    font-size: 3vh;\n    font-weight: bold;\n}\n.contactItem1::after {\n    content: 'E-mail: aaa@aaa.aaa'\n}\n.contactItem2::before {\n    content: 'Phone nr: +00 000 00'\n}\n.contactItem3::after {\n    content: 'Vancourver St. 22'\n}\n@media only screen and (max-width: 600px) {\n    #content, footer {\n        width: 100%;\n    }\n    .menuItemBox {\n        width: 100%;\n    }\n    .topInfo {\n        height: 40%;\n    }\n    .bottomInfo {\n        height: 60%;\n    }\n    .topInfoContent {\n        font-size: 2.3vh;\n    }\n    .chefPhoto {\n        background-size: 28vh;\n        height: 28vh;\n        width: 28vh;\n    }\n  }",""]);const w=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=r(p,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},88:(e,n,t)=>{e.exports=t.p+"ed936ae9ba6d80832330.jpg"},47:(e,n,t)=>{e.exports=t.p+"78961d15cd6eb3f7edf9.jpg"},897:(e,n,t)=>{e.exports=t.p+"28e292dd1bf47a6cb369.jpg"},837:(e,n,t)=>{e.exports=t.p+"e43cfb819da1fe3f3514.jpg"},552:(e,n,t)=>{e.exports=t.p+"6910e08db5465ab4ab15.png"},409:(e,n,t)=>{e.exports=t.p+"d408998b9bf19e3b0944.jpeg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),d=t.n(i),s=t(216),l=t.n(s),u=t(589),m=t.n(u),p=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var f=t(88),g=t(897),b=t(837),v=t(47),I=t(552),x=t(409);(new Image).src=f,(new Image).src=g,(new Image).src=b,(new Image).src=v,(new Image).src=I,(new Image).src=x;let y=document.querySelector("#content");(()=>{let e=document.createElement("nav");e.classList.add("nav"),y.appendChild(e);let n=document.createElement("div");n.classList.add("logo");let t=document.createElement("div");t.classList.add("menu");for(let e=0;e<3;e++){let n=document.createElement("button");n.classList.add("menuOption"+(e+1)),t.appendChild(n)}e.appendChild(n),e.appendChild(t)})();let w=document.createElement("div");w.classList.add("frontContent"),y.appendChild(w);const C=()=>{w.innerHTML="";let e=document.createElement("section");e.classList.add("topInfo"),w.appendChild(e);let n=document.createElement("h1");n.classList.add("topInfoHeading"),n.textContent="Welcome to our Restaurant!",e.appendChild(n);let t=document.createElement("p");t.classList.add("topInfoContent"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dignissim enim. Nunc a rutrum lacus.",e.appendChild(t);let o=document.createElement("section");o.classList.add("bottomInfo"),w.appendChild(o);let r=document.createElement("div");r.classList.add("chefPhoto"),o.appendChild(r);let a=document.createElement("p");a.classList.add("chefPhotoDesc"),a.textContent="Our cheffe - Marco Polo.",o.appendChild(a)};C();const L=()=>{w.innerHTML="";for(let e=0;e<4;e++){let n=document.createElement("div");n.classList.add("menuItem"+(e+1),"menuItems"),w.appendChild(n);let t=document.createElement("div");t.classList.add("menuItemBox"),n.appendChild(t);let o=document.createElement("div");o.classList.add("menuImg"),t.appendChild(o);let r=document.createElement("div");r.classList.add("menuItemAbout"),t.appendChild(r);let a=document.createElement("h2");a.classList.add("menuItemName"),r.appendChild(a);let c=document.createElement("p");c.classList.add("menuItemPrice"),r.appendChild(c)}},E=()=>{w.innerHTML="";let e=document.createElement("div");e.classList.add("contactInfo"),w.appendChild(e);for(let n=0;n<3;n++){let t=document.createElement("p");t.classList.add("contactItem"+(n+1),"contactItem"),e.appendChild(t)}let n=document.createElement("iframe");n.classList.add("openingHours"),n.src="https://www.google.com/maps/embed?pb=!…",w.appendChild(n)};(()=>{let e=document.createElement("footer");e.classList.add("footer"),y.appendChild(e),e.textContent="by Durfy"})(),document.querySelectorAll("button").forEach((e=>{"menuOption1"==e.classList?e.addEventListener("click",C):"menuOption2"==e.classList?e.addEventListener("click",L):"menuOption3"==e.classList&&e.addEventListener("click",E)}))})()})();