(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{311:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(40),c=r(86),l=r(115),i=r(634),s=r(114),u=r(68),m=r(652),d=r(18),f=r(129),p=r(657),y=r(7),h=r(3),E=r(37),v=r(14),b=r(69),g=r(54);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function k(e,t,r,n,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,a)}function R(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){k(o,n,a,c,l,"next",e)}function l(e){k(o,n,a,c,l,"throw",e)}c(void 0)}))}}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var a=P(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return N(this,r)}}function N(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(d.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(N,e);var t,r,n,d,w,k=_(N);function N(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,N),(t=k.call(this,e)).state={errors:[],loading:!0,logs:[]},t}return t=N,(r=[{key:"componentDidMount",value:(w=R((function*(){var e=this.props.match.params.name;if(e){var t=yield p.a.getLog(e);switch(t.code){case h.a.OK:for(var r,n=RegExp(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2})\s+(.*?)(?=(?:\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2}|$))/,"gs"),a=[];null!==(r=n.exec(t.payload.content));)a.push({time:r[1],content:r[2]});this.setState({viewedLog:{logFile:t.payload,entries:a}});break;case h.a.ERROR:this.addError(t.error)}}var o=yield p.a.getLogs();switch(o.code){case h.a.OK:this.setState({logs:o.payload});break;case h.a.ERROR:this.addError(o.error)}this.setState({loading:!1})})),function(){return w.apply(this,arguments)})},{key:"addError",value:function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))}},{key:"downloadLog",value:(d=R((function*(e){var t=yield p.a.getLog(e);switch(t.code){case h.a.OK:Object(E.a)(e,t.payload.content);break;case h.a.ERROR:this.addError(t.error)}})),function(e){return d.apply(this,arguments)})},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,r){if(t)return a.a.createElement(b.a,{key:r,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[r]=void 0,{errors:t}}))}})})),this.state.loading?a.a.createElement(g.a,{text:"loading.logs"}):this.props.match.params.name&&this.state.viewedLog?a.a.createElement("div",{className:"mx-5 mt-5"},a.a.createElement("h3",null,this.props.match.params.name),a.a.createElement(o.a,{className:"mr-1",as:f.b,to:v.b.admin_logs.link||v.b.admin_logs.route},a.a.createElement(u.a,{id:"generic.goback"})),a.a.createElement(o.a,{onClick:function(){Object(E.a)(e.props.match.params.name,e.state.viewedLog.logFile.content)}},a.a.createElement(u.a,{id:"generic.download"})),a.a.createElement("hr",null),a.a.createElement("div",{style:{height:"60vh",display:"block"},className:"table-responsive"},a.a.createElement(i.a,{striped:!0,hover:!0,variant:"dark",className:"text-left"},a.a.createElement("thead",{className:"bg-dark",style:{position:"sticky",top:0}},a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.datetime"})),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.entry"}))),a.a.createElement("tbody",null,this.state.viewedLog.entries.map((function(e){return a.a.createElement("tr",{key:e.time},a.a.createElement("td",{className:"py-1"},e.time),a.a.createElement("td",{className:"py-1"},a.a.createElement("pre",{className:"mb-0"},e.content)))})))))):a.a.createElement(c.a,{className:"mt-5 mb-5"},a.a.createElement(i.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"#"),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.name"})),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.datetime"})),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.action"})))),a.a.createElement("tbody",null,this.state.logs.map((function(t,r){var n=new Date(t.lastModified),c=(n.getTime()-Date.now())/1e3;return a.a.createElement("tr",{key:t.name},a.a.createElement("td",null,r),a.a.createElement("td",null,t.name),a.a.createElement(l.a,{overlay:a.a.createElement(s.a,{id:"".concat(t.name,"-tooltip")},n.toLocaleString())},(function(e){var t=e.ref,r=O(e,["ref"]);return a.a.createElement("td",r,a.a.createElement("span",{ref:t},a.a.createElement(m.a,{value:c,numeric:"auto",updateIntervalInSeconds:1})))})),a.a.createElement("td",{className:"align-middle p-0"},a.a.createElement(o.a,{className:"mr-1",onClick:function(){e.props.history.push((v.b.admin_logs.link||v.b.admin_logs.route)+t.name+"/",{reload:!0})}},a.a.createElement(u.a,{id:"generic.view"})),a.a.createElement(o.a,{onClick:function(){e.downloadLog(t.name).catch((function(t){e.addError(new y.c(y.b.APP_FAIL,{jsError:t}))}))}},a.a.createElement(u.a,{id:"generic.download"}))))}))))))}}])&&S(t.prototype,r),n&&S(t,n),N}(n.Component))}}]);
//# sourceMappingURL=12.250409a1bbead685fc78.js.map