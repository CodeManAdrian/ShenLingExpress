(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-284a093c"],{"227a":function(t,e,r){"use strict";r("8e2a")},"22b7":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard-container courier-detail"},[r("div",{staticClass:"app-container"},[r("el-container",[r("div",{staticClass:"aside-box"},[r("el-aside",t._l(t.menu,(function(e,n){return r("div",{key:n,staticClass:"aside-item",class:{active:t.isActive==e.value},on:{click:function(r){t.isActive=e.value,t.currentComp=e.comp}}},[t._v(t._s(e.name))])})),0)],1),t._v(" "),r("el-container",[r(t.currentComp,{tag:"test1"})],1)],1)],1)])},i=[],o=r("e931"),a={components:{basicInformation:o["default"]},data:function(){return{currentComp:"basicInformation",isActive:"1",id:"",menu:[{name:"基本信息",value:"1",comp:"basicInformation"}]}},created:function(){},methods:{goBack:function(){}}},c=a,s=(r("d715"),r("cba8")),u=Object(s["a"])(c,n,i,!1,null,"02e9ff73",null);e["default"]=u.exports},"8e2a":function(t,e,r){},"95e9":function(t,e,r){"use strict";r.d(e,"i",(function(){return i})),r.d(e,"f",(function(){return o})),r.d(e,"g",(function(){return a})),r.d(e,"h",(function(){return c})),r.d(e,"j",(function(){return s})),r.d(e,"c",(function(){return u})),r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return f})),r.d(e,"a",(function(){return h})),r.d(e,"k",(function(){return d})),r.d(e,"l",(function(){return p})),r.d(e,"e",(function(){return v}));var n=r("b775"),i=function(t){return Object(n["a"])("/goodsType/page","get",t)},o=function(t){return Object(n["a"])("/goodsType","post",t)},a=function(t){return Object(n["a"])("/goodsType/".concat(t),"delete",t)},c=function(t){return Object(n["a"])("/goodsType/".concat(t),"get",t)},s=function(t,e){return Object(n["a"])("/goodsType/".concat(t),"put",e)},u=function(t){return Object(n["a"])("/business-hall/courier/page","get",t)},l=function(t){return Object(n["a"])("/business-hall/courier/".concat(t),"get",t)},f=function(t,e){return Object(n["a"])("/business-hall/scope/".concat(t,"/").concat(e),"get",t)},h=function(t){return Object(n["a"])("/business-hall/scope","post",t)},d=function(t){return Object(n["a"])("/pickup-dispatch-task-manager/page","post",t)},p=function(t,e,r){return Object(n["a"])("/pickup-dispatch-task-manager/".concat(t,"/").concat(e),"put",r)},v=function(t,e){return Object(n["a"])("/business-hall/scope/".concat(t,"/").concat(e),"delete")}},c3ae:function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return i}))},cb0e:function(t,e,r){},d715:function(t,e,r){"use strict";r("cb0e")},e186:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new I(n||[]);return o._invoke=O(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function b(){}var g={};s(g,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&n.call(x,o)&&(g=x);var _=b.prototype=m.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function O(t,e,r){var n=f;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return S()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=b,s(_,"constructor",b),s(b,"constructor",y),y.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},j(L.prototype),s(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(_),s(_,c,"Generator"),s(_,o,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},e931:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{staticClass:"customer-details-box"},[r("el-card",{staticStyle:{width:"100%"},attrs:{shadow:"never"}},[r("div",{staticClass:"block"},[r("div",{staticClass:"car-base driver-info",attrs:{div:""}},[t._v("基本设置")]),t._v(" "),r("el-card",{staticClass:"form-box",attrs:{shadow:"never"}},[r("div",{staticClass:"form-item-box"},[r("div",{staticClass:"form-item"},[r("span",{staticClass:"span-title"},[t._v("员工编号：")]),t._v(" "),r("el-input",{attrs:{disabled:t.disabled},model:{value:t.couriers.userId,callback:function(e){t.$set(t.couriers,"userId",e)},expression:"couriers.userId"}})],1),t._v(" "),r("div",{staticClass:"form-item"},[r("span",{staticClass:"span-title"},[t._v("快递员姓名：")]),t._v(" "),r("el-input",{attrs:{disabled:t.disabled},model:{value:t.couriers.name,callback:function(e){t.$set(t.couriers,"name",e)},expression:"couriers.name"}})],1),t._v(" "),r("div",{staticClass:"form-item"},[r("span",{staticClass:"span-title"},[t._v("所属机构：")]),t._v(" "),r("el-input",{attrs:{disabled:t.disabled},model:{value:t.couriers.agencyName,callback:function(e){t.$set(t.couriers,"agencyName",e)},expression:"couriers.agencyName"}})],1),t._v(" "),r("div",{staticClass:"form-item"},[r("span",{staticClass:"span-title"},[t._v("电话：")]),t._v(" "),r("el-input",{attrs:{disabled:t.disabled},model:{value:t.couriers.mobile,callback:function(e){t.$set(t.couriers,"mobile",e)},expression:"couriers.mobile"}})],1)])]),t._v(" "),r("div",{staticClass:"footer-box"},[r("el-button",{staticClass:"cancel-btn",on:{click:function(e){return t.handleEditCouriersList()}}},[t._v("返回")])],1)],1)])],1)},i=[],o=(r("a450"),r("e186"),r("c3ae")),a=r("95e9"),c={data:function(){return{disabled:!0,isShow:!0,disabledName:!0,disabledMobile:!0,couriers:{userId:"",name:"",agencyName:"",agencyId:"",mobile:""}}},created:function(){this.id=this.$route.query.id,this.getList(this.id)},methods:{goBack:function(){},getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["b"])(e);case 2:r=t.sent,n=r.data,this.couriers.userId=n.userId,this.couriers.name=n.name,null!=n.agency&&(this.couriers.agencyName=n.agency.name,this.couriers.agencyId=n.agency.id),this.couriers.mobile=n.mobile;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleEditCouriersInfo:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.isShow=!1,this.disabledName=!1,this.disabledMobile=!1;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSubCouriersInfo:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={courier:{agency:{id:this.couriers.agencyId,name:this.couriers.agencyName},userId:this.couriers.userId,name:this.couriers.name,mobile:this.couriers.mobile}},t.next=3,Object(a["a"])(e).then((function(){r.isShow=!0,r.disabledName=!0,r.disabledMobile=!0}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleEditCouriersList:function(){this.$router.push({path:"/branches/operational-range"})},handleCanCouriersInfo:function(){this.isShow=!0,this.disabledName=!0,this.disabledMobile=!0}}},s=c,u=(r("227a"),r("cba8")),l=Object(u["a"])(s,n,i,!1,null,"62e002ec",null);e["default"]=l.exports}}]);