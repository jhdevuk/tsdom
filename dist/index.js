"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var utility=require("./utility"),event=require("./event"),Instance=function(){function t(t,e,n){var r;if(this.meta=n||{},this.events=event.registry(),!(r="string"==typeof t?utility.query(t,e||document):t))return this;if(1===r.nodeType||r===window)this[0]=r,this.length=1;else for(var i=this.length=r.length;i--;this[i]=r[i]);}return t.prototype.find=function(e){return new t(e,this[0],{owner:this})},t.prototype.closest=function(e){var n,r=document.querySelectorAll(e),i=this[0];do{for(n=r.length;--n>=0&&r.item(n)!==i;);}while(n<0&&(i=i.parentElement));return new t(i)},t.prototype.each=function(t){for(var e=0,n=this.length;e<n;){this[e];if(0==t.call(this,this[e],e++))break}return this},t.prototype.css=function(t){return this.each(function(e){for(var n in t){var r=t[n];e.style.setProperty(n,r)}}),this},t.prototype.attr=function(t){return this.each(function(e){for(var n in t){var r=t[n];e.setAttribute(n,r)}}),this},t.prototype.hasClass=function(t){var e=!1;return this.each(function(n){var r=" "+t+" ";(" "+n.className+" ").replace(/[\n\t]/g," ").indexOf(r)>-1&&(e=!0)}),e},t.prototype.addClass=function(t){var e=this;return this.each(function(n){e.hasClass(t)||(n.className+=" "+t)}),this},t.prototype.removeClass=function(t){var e=this;return this.each(function(n){if(e.hasClass(t)){var r=new RegExp("(\\s|^)"+t+"(\\s|$)");n.className=n.className.replace(r,"")}}),this},t.prototype.toggleClass=function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t),this},t.prototype.on=function(t,e,n){var r=this.events,i="function"==typeof e&&void 0===n,o="string"==typeof e&&"function"==typeof n;return this.each(function(s){var a=null;if(i&&(a=event.direct(e)),o&&(a=event.delegate(s,e,n)),!a)throw new Error("TSDom.on: Invalid Arguments");s.addEventListener(t,a,!0),r.add({type:t,handler:a})}),this},t.prototype.off=function(t){var e=this.events;return this.each(function(n){var r=e.find(t);void 0!==r&&n.removeEventListener(t,r.handler,!0)}),e.remove(t),this},t.prototype.text=function(t){return void 0==t?this[0].innerText:(this.each(function(e){e.innerHTML=t}),t)},t.prototype.data=function(t,e){return void 0==e?this[0].getAttribute("data-"+t):(this.each(function(n){n.setAttribute("data-"+t,e)}),e)},t.prototype.html=function(t){return void 0==t?this[0].innerHTML:(this.each(function(e){e.innerHTML=t}),t)},t.prototype.append=function(t){return this.each(function(e){if("string"==typeof t)return e.insertAdjacentHTML("beforeend",t);e.appendChild(t)}),this},t.prototype.prepend=function(t){return this.each(function(e){if("string"==typeof t)return e.insertAdjacentHTML("afterbegin",t);e.insertBefore(t,e.firstChild)}),this},t.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}),this},t.prototype.remove=function(){this.each(function(t){t.parentNode.removeChild(t)})},t.prototype.toArray=function(){var t=[];return this.each(function(e){t.push(e)}),t},t}();exports.Instance=Instance,exports.default=function(t,e){return new Instance(t,e)};