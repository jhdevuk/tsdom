"use strict";function delegate(e,t,n){return function(r){var a=null,i=!1;new index_1.Instance(t,e).each(function(t){var n=r.target;if(n==t)return i=!0,void(a=n);for(;n&&n!==e;)(n=n.parentNode)==t&&(i=!0,a=n)}),i&&n(r,a)}}Object.defineProperty(exports,"__esModule",{value:!0});var index_1=require("../index");exports.delegate=delegate;