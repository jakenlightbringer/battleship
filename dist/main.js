(()=>{var t={28:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"#grid-container{\n    display: flex;\n}\n\n#player-container{\n    display: grid;\n    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    padding-right: 60px;\n}\n#player-container > button{\n    background-color: aquamarine;\n}\n#enemy-container{\n    display: grid;\n    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n}\n#enemy-container > button{\n    background-color: aquamarine;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,wEAAwE;IACxE,qEAAqE;IACrE,mBAAmB;AACvB;AACA;IACI,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,wEAAwE;IACxE,qEAAqE;AACzE;AACA;IACI,4BAA4B;AAChC",sourcesContent:["#grid-container{\n    display: flex;\n}\n\n#player-container{\n    display: grid;\n    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    padding-right: 60px;\n}\n#player-container > button{\n    background-color: aquamarine;\n}\n#enemy-container{\n    display: grid;\n    grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;\n}\n#enemy-container > button{\n    background-color: aquamarine;\n}\n"],sourceRoot:""}]);const s=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var p=t[s],c=r.base?p[0]+r.base:p[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var u=n(l),x={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(x);else{var h=o(x,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var p=r(t,o),c=0;c<i.length;c++){var d=n(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=p}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},498:(t,e,n)=>{const r=n(643);t.exports=class{constructor(t,e){this.xCord=t,this.yCord=e;const n=new r("battleship",4),o=new r("carrier",5),i=new r("destroyer",3),a=new r("submarine",3),s=new r("patrol boat",2);this.shipsArray=[o,n,i,a,s],this.grid=[],this.initializeGrid(),this.missedAttacks=[]}initializeGrid(){for(let t=0;t<this.xCord;t++){this.grid[t]=[];for(let e=0;e<this.yCord;e++)this.grid[t][e]=null}}placeShip(t,e,n){if(t<0||t>=this.xCord||e<0||e>=this.yCord)throw new Error("Invalid coordinates for ship placement.");const r=this.shipsArray.find((t=>t.name===n));if(!r)throw new Error("Invalid Ship Type");for(let n=0;n<r.length;n++)if(t+n>=this.xCord||this.grid[t+n][e])throw new Error("Invalid coordinates for ship placement.");for(let n=0;n<r.length;n++)this.grid[t+n][e]=r}receiveAttack(t,e){if(t<0||t>this.xCord||e<0||e>this.yCord)throw new Error("Invalid coordinate location go again");const n=this.grid[t][e];return null==n?(this.missedAttacks.push({x:t,y:e}),"miss"):n instanceof r?(n.hit(),1==n.isSunk()?"sunk":"hit"):shipsArray.every((t=>t.isSunk()))?"all ships sunk":void 0}}},643:t=>{t.exports=class{constructor(t,e){this.name=t,this.length=e,this.hp=e,this.sunk=!1}hit(){this.hp--}isSunk(){return this.hp<=0?this.sunk=!0:this.sunk=!1}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),p=n.n(s),c=n(216),d=n.n(c),l=n(589),u=n.n(l),x=n(28),h={};h.styleTagTransform=u(),h.setAttributes=p(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals;var f=n(498);const m=new(n.n(f)())(10,10),y=document.getElementById("grid-container"),A=document.getElementById("player-container"),g=document.getElementById("enemy-container");function v(t,e){const n=m.receiveAttack(t,e),r=document.querySelector(`.grid-button[data-x="${t}"][data-y="${e}"]`);"hit"==n?(r.textContent="hit",r.disabled=!0,r.style.backgroundColor="red"):"miss"==n?(r.textContent="miss",r.disabled=!0):"sunk"==n&&(r.textContent="hit",r.style.backgroundColor="red",r.disabled=!0)}document.addEventListener("DOMContentLoaded",(()=>{m.initializeGrid(),function(){for(let t=0;t<m.xCord;t++)for(let e=0;e<m.yCord;e++){const n=document.createElement("button");n.classList.add("grid-button"),n.dataset.x=t,n.dataset.y=e,n.textContent="",n.style.height="50px",n.style.width="50px",n.addEventListener("click",(()=>v(t,e))),A.appendChild(n),y.appendChild(A)}}(),function(){for(let t=0;t<m.xCord;t++)for(let e=0;e<m.yCord;e++){const n=document.createElement("button");n.classList.add("grid-button"),n.dataset.x=t,n.dataset.y=e,n.textContent="",n.style.height="50px",n.style.width="50px",g.appendChild(n),y.appendChild(g)}}(),m.placeShip(3,2,"battleship"),m.placeShip(0,0,"carrier"),console.log("working")}))})()})();
//# sourceMappingURL=main.js.map