!function t(e,r,n){function i(s,u){if(!r[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[s]={exports:{}};e[s][0].call(c.exports,function(t){var r=e[s][1][t];return i(r||t)},c,c.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function t(t,e,r){var n;if(this.document=document,this.meta=r||{},this.regex=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,!(n="string"==typeof t?this.query(t,e||document):t))return this;if(1===n.nodeType||n===window)this[0]=n,this.length=1;else for(var i=this.length=n.length;i--;this[i]=n[i]);}return t.prototype.find=function(e){return new t(e,this[0],{owner:this})},t.prototype.css=function(t){return this.each(function(e){for(var r in t){var n=t[r];e.style.setProperty(r,n)}}),this},t.prototype.each=function(t){for(var e=0,r=this.length;e<r;){this[e];if(0==t.call(this,this[e],e++))break}return this},t.prototype.hasClass=function(t){var e=!1;return this.each(function(r){var n=" "+t+" ";(" "+r.className+" ").replace(/[\n\t]/g," ").indexOf(n)>-1&&(e=!0)}),e},t.prototype.addClass=function(t){var e=this;return this.each(function(r){e.hasClass(t)||(r.className+=" "+t)}),this},t.prototype.removeClass=function(t){var e=this;return this.each(function(r){if(e.hasClass(t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");r.className=r.className.replace(n," ")}}),this},t.prototype.on=function(t,e){return this.each(function(r){r.addEventListener(t,e)}),this},t.prototype.off=function(t,e){return this.each(function(r){r.removeEventListener(t,e)}),this},t.prototype.query=function(t,e){var r,n,i=this.document;if(r=this.regex.exec(t)){if(n=r[3])return e.getElementsByClassName(n);if(n=r[2])return e.getElementsByTagName(n);if(n=r[1])return i.getElementById(n)}return e.querySelectorAll(t)},t}();r.DOM=n,r.preventDefault=function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1},r.default=function(t,e){return new n(t,e)}},{}]},{},[1]);
//# sourceMappingURL=tsdom.js.map
