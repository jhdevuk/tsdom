!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tsdom=t()}}(function(){return function t(e,n,r){function i(s,u){if(!n[s]){if(!e[s]){var f="function"==typeof require&&require;if(!u&&f)return f(s,!0);if(o)return o(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return i(n||t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("../index");n.delegate=function(t,e,n){return function(i){var o=null,s=!1;new r.Instance(e,t).each(function(e){var n=i.target;if(n==e)return s=!0,void(o=n);for(;n&&n!==t;)(n=n.parentNode)==e&&(s=!0,o=n)}),s&&n(i,o)}}},{"../index":6}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.direct=function(t){return function(e){var n=e.currentTarget;t(e,n)}}},{}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./registry");n.registry=r.registry;var i=t("./direct");n.direct=i.direct;var o=t("./delegate");n.delegate=o.delegate},{"./delegate":1,"./direct":2,"./registry":4}],4:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(){this.list=[]}return t.prototype.find=function(t){return this.list.filter(function(e){return e.type===t})[0]},t.prototype.add=function(t){this.list.push(t)},t.prototype.remove=function(t){var e=this.list;this.list=e.filter(function(e){return e.type!==t})},t}();n.Registry=r,n.registry=function(){return new r}},{}],5:[function(t,e,n){e.exports=t("./index").default},{"./index":6}],6:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./utility"),i=t("./event"),o=function(){function t(t,e,n){var o;if(this.meta=n||{},this.events=i.registry(),!(o="string"==typeof t?r.query(t,e||document):t))return this;if(1===o.nodeType||o===window)this[0]=o,this.length=1;else for(var s=this.length=o.length;s--;this[s]=o[s]);}return t.prototype.find=function(e){return new t(e,this[0],{owner:this})},t.prototype.closest=function(e){var n,r=document.querySelectorAll(e),i=this[0];do{for(n=r.length;--n>=0&&r.item(n)!==i;);}while(n<0&&(i=i.parentElement));return new t(i)},t.prototype.each=function(t){for(var e=0,n=this.length;e<n;){this[e];if(0==t.call(this,this[e],e++))break}return this},t.prototype.css=function(t){return this.each(function(e){for(var n in t){var r=t[n];e.style.setProperty(n,r)}}),this},t.prototype.attr=function(t){return this.each(function(e){for(var n in t){var r=t[n];e.setAttribute(n,r)}}),this},t.prototype.hasClass=function(t){var e=!1;return this.each(function(n){var r=" "+t+" ";(" "+n.className+" ").replace(/[\n\t]/g," ").indexOf(r)>-1&&(e=!0)}),e},t.prototype.addClass=function(t){var e=this;return this.each(function(n){e.hasClass(t)||(n.className+=" "+t)}),this},t.prototype.removeClass=function(t){var e=this;return this.each(function(n){if(e.hasClass(t)){var r=new RegExp("(\\s|^)"+t+"(\\s|$)");n.className=n.className.replace(r,"")}}),this},t.prototype.toggleClass=function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t),this},t.prototype.on=function(t,e,n){var r=this.events,o="function"==typeof e&&void 0===n,s="string"==typeof e&&"function"==typeof n;return this.each(function(u){var f=null;if(o&&(f=i.direct(e)),s&&(f=i.delegate(u,e,n)),!f)throw new Error("TSDom.on: Invalid Arguments");u.addEventListener(t,f,!0),r.add({type:t,handler:f})}),this},t.prototype.off=function(t){var e=this.events;return this.each(function(n){var r=e.find(t);void 0!==r&&n.removeEventListener(t,r.handler,!0)}),e.remove(t),this},t.prototype.text=function(t){return void 0==t?this[0].innerText:(this.each(function(e){e.innerHTML=t}),t)},t.prototype.data=function(t,e){return void 0==e?this[0].getAttribute("data-"+t):(this.each(function(n){n.setAttribute("data-"+t,e)}),e)},t.prototype.html=function(t){return void 0==t?this[0].innerHTML:(this.each(function(e){e.innerHTML=t}),t)},t.prototype.append=function(t){return this.each(function(e){if("string"==typeof t)return e.insertAdjacentHTML("beforeend",t);e.appendChild(t)}),this},t.prototype.prepend=function(t){return this.each(function(e){if("string"==typeof t)return e.insertAdjacentHTML("afterbegin",t);e.insertBefore(t,e.firstChild)}),this},t.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}),this},t.prototype.remove=function(){this.each(function(t){t.parentNode.removeChild(t)})},t.prototype.toArray=function(){var t=[];return this.each(function(e){t.push(e)}),t},t}();n.Instance=o,n.default=function(t,e){return new o(t,e)}},{"./event":3,"./utility":7}],7:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./query");n.query=r.query},{"./query":8}],8:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;n.query=function(t,e){var n,i;if(n=r.exec(t)){if(i=n[3])return e.getElementsByClassName(i);if(i=n[2])return e.getElementsByTagName(i);if(i=n[1])return document.getElementById(i)}return e.querySelectorAll(t)}},{}]},{},[5])(5)});