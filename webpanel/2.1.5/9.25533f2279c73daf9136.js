(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{352:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(37),c=n(60),l=n(121),i=n(698),s=n(120),u=n(75),m=n(716),d=n(13),f=n(138),p=n(719),y=n(5),h=n(2),E=n(34),v=n(19),b=n(54),g=n(48);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function k(e,t,n,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function R(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){k(o,r,a,c,l,"next",e)}function l(e){k(o,r,a,c,l,"throw",e)}c(void 0)}))}}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var a=P(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(d.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(N,e);var t,n,r,d,w,k=_(N);function N(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,N),(t=k.call(this,e)).state={errors:[],loading:!0,logs:[]},t}return t=N,(n=[{key:"componentDidMount",value:(w=R((function*(){var e=this.props.match.params.name;if(e){var t=yield p.a.getLog(e);switch(t.code){case h.a.OK:for(var n,r=RegExp(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2})\s+(.*?)(?=(?:\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2}|$))/,"gs"),a=[];null!==(n=r.exec(t.payload.content));)a.push({time:n[1],content:n[2]});this.setState({viewedLog:{logFile:t.payload,entries:a}});break;case h.a.ERROR:this.addError(t.error)}}var o=yield p.a.getLogs();switch(o.code){case h.a.OK:this.setState({logs:o.payload});break;case h.a.ERROR:this.addError(o.error)}this.setState({loading:!1})})),function(){return w.apply(this,arguments)})},{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"downloadLog",value:(d=R((function*(e){var t=yield p.a.getLog(e);switch(t.code){case h.a.OK:Object(E.a)(e,t.payload.content);break;case h.a.ERROR:this.addError(t.error)}})),function(e){return d.apply(this,arguments)})},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return a.a.createElement(b.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),this.state.loading?a.a.createElement(g.a,{text:"loading.logs"}):this.props.match.params.name&&this.state.viewedLog?a.a.createElement("div",{className:"mx-5 mt-5"},a.a.createElement("h3",null,this.props.match.params.name),a.a.createElement(o.a,{className:"mr-1",as:f.b,to:v.b.admin_logs.link||v.b.admin_logs.route},a.a.createElement(u.a,{id:"generic.goback"})),a.a.createElement(o.a,{onClick:function(){Object(E.a)(e.props.match.params.name,e.state.viewedLog.logFile.content)}},a.a.createElement(u.a,{id:"generic.download"})),a.a.createElement("hr",null),a.a.createElement("div",{style:{height:"60vh",display:"block"},className:"table-responsive"},a.a.createElement(i.a,{striped:!0,hover:!0,variant:"dark",className:"text-left"},a.a.createElement("thead",{className:"bg-dark",style:{position:"sticky",top:0}},a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.datetime"})),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.entry"}))),a.a.createElement("tbody",null,this.state.viewedLog.entries.map((function(e){return a.a.createElement("tr",{key:e.time},a.a.createElement("td",{className:"py-1"},e.time),a.a.createElement("td",{className:"py-1"},a.a.createElement("pre",{className:"mb-0"},e.content)))})))))):a.a.createElement(c.a,{className:"mt-5 mb-5"},a.a.createElement(i.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"#"),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.name"})),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.datetime"})),a.a.createElement("th",null,a.a.createElement(u.a,{id:"generic.action"})))),a.a.createElement("tbody",null,this.state.logs.map((function(t,n){var r=new Date(t.lastModified),c=(r.getTime()-Date.now())/1e3;return a.a.createElement("tr",{key:t.name},a.a.createElement("td",null,n),a.a.createElement("td",null,t.name),a.a.createElement(l.a,{overlay:a.a.createElement(s.a,{id:"".concat(t.name,"-tooltip")},r.toLocaleString())},(function(e){var t=e.ref,n=O(e,["ref"]);return a.a.createElement("td",n,a.a.createElement("span",{ref:t},a.a.createElement(m.a,{value:c,numeric:"auto",updateIntervalInSeconds:1})))})),a.a.createElement("td",{className:"align-middle p-0"},a.a.createElement(o.a,{className:"mr-1",onClick:function(){e.props.history.push((v.b.admin_logs.link||v.b.admin_logs.route)+t.name+"/",{reload:!0})}},a.a.createElement(u.a,{id:"generic.view"})),a.a.createElement(o.a,{onClick:function(){e.downloadLog(t.name).catch((function(t){e.addError(new y.c(y.b.APP_FAIL,{jsError:t}))}))}},a.a.createElement(u.a,{id:"generic.download"}))))}))))))}}])&&j(t.prototype,n),r&&j(t,r),N}(r.Component))}}]);
//# sourceMappingURL=9.25533f2279c73daf9136.js.map