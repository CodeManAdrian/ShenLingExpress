(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b780ad46"],{"4a15":function(t,e,n){"use strict";n("7eef")},"7eef":function(t,e,n){},"95e9":function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"h",(function(){return s})),n.d(e,"j",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"e",(function(){return g}));var r=n("b775"),i=function(t){return Object(r["a"])("/goodsType/page","get",t)},o=function(t){return Object(r["a"])("/goodsType","post",t)},a=function(t){return Object(r["a"])("/goodsType/".concat(t),"delete",t)},s=function(t){return Object(r["a"])("/goodsType/".concat(t),"get",t)},c=function(t,e){return Object(r["a"])("/goodsType/".concat(t),"put",e)},l=function(t){return Object(r["a"])("/business-hall/courier/page","get",t)},u=function(t){return Object(r["a"])("/business-hall/courier/".concat(t),"get",t)},h=function(t,e){return Object(r["a"])("/business-hall/scope/".concat(t,"/").concat(e),"get",t)},p=function(t){return Object(r["a"])("/business-hall/scope","post",t)},f=function(t){return Object(r["a"])("/pickup-dispatch-task-manager/page","post",t)},d=function(t,e,n){return Object(r["a"])("/pickup-dispatch-task-manager/".concat(t,"/").concat(e),"put",n)},g=function(t,e){return Object(r["a"])("/business-hall/scope/".concat(t,"/").concat(e),"delete")}},a7a2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"map-content"},[r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"card-box",attrs:{shadow:"never"}},[r("div",{staticClass:"header-box"},[r("span",[t._v("作业范围分配")]),t._v(" "),null!==t.newOptionAreas?r("div",{staticStyle:{float:"right"}},[r("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showEdit,expression:"showEdit"}],staticClass:"save-map-btn",staticStyle:{"background-color":"#e15536",color:"#ffffff",width:"90px",border:"1px solid #e15536"},on:{click:t.editData}},[t._v("编辑")]),t._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showEdit,expression:"showEdit"}],staticClass:"cancel-map-btn",staticStyle:{width:"90px"},on:{click:function(e){return t.goBack()}}},[t._v("返回")]),t._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticClass:"save-map-btn",staticStyle:{"background-color":"#e15536",color:"#ffffff",width:"90px",border:"1px solid #e15536"},on:{click:t.createData}},[t._v("保存")]),t._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticClass:"cancel-map-btn",staticStyle:{width:"90px"},on:{click:t.cancelData}},[t._v("取消")])],1):r("div",{staticStyle:{float:"right"}},[r("el-button",{staticClass:"cancel-map-btn",staticStyle:{width:"90px"},on:{click:function(e){return t.goBack()}}},[t._v("返回")])],1)]),t._v(" "),r("baidu-map",{ref:"myMap",staticClass:"map",attrs:{center:t.center,zoom:t.zoom,"scroll-wheel-zoom":!0,"map-click":!1},on:{mousemove:t.syncPolyline,click:t.paintPolyline,rightclick:t.newPolyline,ready:t.ready}},[r("bm-control",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticStyle:{background:"#fff",width:"100%"}},[r("el-button",{staticStyle:{background:"rgba(225, 85, 54, 1)",border:"1px solid rgba(225, 85, 54, 1)"},attrs:{type:"primary"},on:{click:function(e){return t.toggle("polyline")}}},[t._v(t._s(t.polyline.editing?"完成绘制":"开始绘制"))]),t._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:!1!==t.polyline.editing,expression:"polyline.editing !== false"}],staticClass:"dele",staticStyle:{color:"#818693"},on:{click:function(e){return t.clear()}}},[t._v("删除围栏")]),t._v(" "),r("P",{staticStyle:{"font-size":"12px",color:"rgba(198, 126, 18, 1)",width:"100%",background:"rgba(255, 245, 231, 1)",height:"30px","line-height":"30px","text-align":"center"}},[r("img",{staticStyle:{width:"14px","vertical-align":"middle","margin-bottom":"2px","margin-right":"6px"},attrs:{src:n("57bd"),alt:""}}),t._v("\n            点击或拖动鼠标绘制电子围栏，右击鼠标结束图形绘制。完成绘制后，点击提交按钮保存。仅支持绘制单个电子围栏区域\n          ")])],1),t._v(" "),r("bm-control",{directives:[{name:"show",rawName:"v-show",value:!t.showSave,expression:"!showSave"}],staticStyle:{background:"#fff",width:"100%"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:null===t.newOptionAreas,expression:"newOptionAreas === null"}],staticStyle:{"font-size":"12px",color:"rgba(198, 126, 18, 1)",width:"100%",background:"rgba(255, 245, 231, 1)",height:"30px","line-height":"30px","text-align":"center"}},[r("img",{staticStyle:{width:"14px","vertical-align":"middle","margin-bottom":"2px","margin-right":"6px"},attrs:{src:n("57bd"),alt:""}}),t._v("\n            当前"+t._s(t.$route.query.agencyName)+"下暂无作业范围\n          ")])]),t._v(" "),r("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),t._v(" "),t._l(t.polyline.paths,(function(e,n){return r("bm-polygon",{key:n,attrs:{path:e,"stroke-color":"#e85552","fill-color":"rgba(232,85,82,0.30)","fill-opacity":.9,"stroke-opacity":.5,"stroke-weight":2,editing:t.polyline.editing,"stroke-style":"dashed"},on:{lineupdate:t.updatePolygonPath}})}))],2)],1)],1)])},i=[],o=(n("a450"),n("0871")),a=(n("e186"),n("c3ae")),s=n("95e9"),c={data:function(){return{showEdit:!0,showSave:!1,center:{lng:"",lat:""},path:"",zoom:13,markList:"",agencyType:"",agencyTypeName:"",agencyId:"",agencyName:"",parentAgencyId:"",parentAgencyName:"",polygonPath:[],polyline:{editing:!1,paths:[]},submitPath:[],countrys:[],disDeltePaths:[],newOptionAreas:null,isFirstEdit:!0}},mounted:function(){this.handleNodeClick(this.$route.query.id),this.paintPolyline()},methods:{ready:function(t){var e=t.BMap,n=t.map;this.map=n,console.log(n,e)},goBack:function(){history.go(-1)},handleNodeClick:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.polyline.paths=[],t.next=3,Object(s["d"])(e,2);case 3:n=t.sent,r=n.data,i=r?r.polygon.map((function(t){return{lat:t.latitude,lng:t.longitude}})):[{lat:"39.915",lng:"116.4045"}],a=this.map.getViewport(i),this.$set(this.center,"lng",a.center.lng),this.$set(this.center,"lat",a.center.lat),this.zoom=a.zoom,this.$set(this.polyline,"paths",i?[i]:[]),console.log(r,this,"res"),this.isFirstEdit=Boolean(r),this.newOptionAreas=[],this.disDeltePaths=Object(o["a"])(this.polygonPath);case 15:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),createData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.polyline.paths.length){t.next=2;break}return t.abrupt("return",this.$message.error("请先绘制快递员作业范围"));case 2:return e=(this.isFirstEdit?this.submitPath:this.polyline.paths[0]).map((function(t){return{latitude:t.lat,longitude:t.lng}})),e.push(e[0]),n={polygon:e,type:2,bid:this.$route.query.id},t.next=7,Object(s["a"])(n).then((function(t){200===t.code&&(r.showSave=!1,r.showEdit=!0,r.$message.success("电子围栏保存成功"),r.polyline.paths=[],r.$set(r.polyline,"editing",!1),r.handleNodeClick(r.$route.query.id))})).catch((function(){r.$message.error("电子围栏保存失败")}));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.showSave=!0,this.showEdit=!1;case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancelData:function(){this.showSave=!1,this.showEdit=!0,this.polyline.editing=!1,this.polyline.paths=[],this.handleNodeClick(this.$route.query.id)},toggle:function(t){console.log(this,this.polyline.paths,this.polyline.paths[0],this.polyline.paths[1],"thisss"),this[t].editing=!this[t].editing},clear:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isFirstEdit){t.next=4;break}this.$set(this.polyline,"paths",[]),t.next=8;break;case 4:return t.next=6,Object(s["e"])(this.$route.query.id,2);case 6:e=t.sent,200===e.code&&(this.$message.success("删除快递员作业范围成功"),this.polyline.paths=[],this.showSave=!0,this.showEdit=!1,this.handleNodeClick(this.$route.query.id));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updatePolygonPath:function(t){this.submitPath=t.target.getPath(),console.log(this,t.target.getPath(),"updatePolygonPath")},syncPolyline:function(t){if(this.polyline.editing){var e=this.polyline.paths;if(e.length){var n=e[e.length-1];n.length&&(1===n.length&&n.push(t.point),console.log(n,"path"),this.$set(n,n.length-1,t.point))}}},newPolyline:function(t){if(console.log("rightclick"),this.polyline.editing){var e=this.polyline.paths;e.length||e.push([]);var n=e[e.length-1];n.pop(),n.length&&e.push([])}},paintPolyline:function(t){if(this.polyline.editing){var e=this.polyline.paths;console.log(this,t,e,!e.length,"click"),!e.length&&e.push([]),e[e.length-1].push(t.point)}},alertpath:function(t){},rayCasting:function(t,e){for(var n=t.x,r=t.y,i=!1,o=0,a=e.length,s=a-1;o<a;s=o,o++){var c=e[o].x,l=e[o].y,u=e[s].x,h=e[s].y,p=e[s].type;if("org"===p){if(c===n&&l===r||u===n&&h===r)return"on";if(l<r&&h>=r||l>=r&&h<r){var f=c+(r-l)*(u-c)/(h-l);if(f===n)return"on";f>n&&(i=!i)}}}return i?"in":"out"}}},l=c,u=(n("4a15"),n("cba8")),h=Object(u["a"])(l,r,i,!1,null,"fb0a7136",null);e["default"]=h.exports},c3ae:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return i}))},e186:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch($){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=E(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch($){return{type:"throw",arg:$}}}t.wrap=l;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",g={};function y(){}function v(){}function m(){}var w={};c(w,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==n&&r.call(x,o)&&(w=x);var k=m.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,a,s){var c=u(t[i],t,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(t,e,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return C()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return v.prototype=m,c(k,"constructor",m),c(m,"constructor",v),v.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new O(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);