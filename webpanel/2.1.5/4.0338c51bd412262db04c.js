(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{659:function(e,t,n){"use strict";var r=n(70),o=n(7),a=n(3),i=n(10),c=n(658);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){l(a,r,o,i,c,"next",e)}function c(e){l(a,r,o,i,c,"throw",e)}i(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.a=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(R,e);var t,n,r,u,l,w,b=d(R);function R(){return f(this,R),b.apply(this,arguments)}return t=R,(n=[{key:"getActiveVersion",value:(w=s((function*(e){var t;yield i.a.wait4Init();try{t=yield i.a.apiClient.ByondController_Read({Instance:e})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(t.status){case 200:return new a.b({code:a.a.OK,payload:t.data});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:t},t)})}})),function(e){return w.apply(this,arguments)})},{key:"listAllVersions",value:(l=s((function*(e){var t;yield i.a.wait4Init();try{t=yield i.a.apiClient.ByondController_List({Instance:e,page:1,pageSize:100})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(t.status){case 200:return new a.b({code:a.a.OK,payload:t.data});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:t},t)})}})),function(e){return l.apply(this,arguments)})},{key:"switchActive",value:(u=s((function*(e,t,n){var r;yield i.a.wait4Init();try{r=yield i.a.apiClient.ByondController_Update({Instance:e},{version:t,uploadCustomZip:!!n})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(r.status){case 200:case 202:var u=r.data;if(u.fileTicket){if(n){var l=yield c.a.Upload(u.fileTicket,n);return l.code===a.a.OK?new a.b({code:a.a.OK,payload:u}):new a.b({code:a.a.ERROR,error:l.error})}return new a.b({code:a.a.ERROR,error:new o.c(o.b.APP_FAIL,{jsError:Error("switchActive is uploading a custom zip without actually having a zip file to upload")})})}return new a.b({code:a.a.OK,payload:r.data});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:r},r)})}})),function(e,t,n){return u.apply(this,arguments)})}])&&p(t.prototype,n),r&&p(t,r),R}(r.a))}}]);
//# sourceMappingURL=4.0338c51bd412262db04c.js.map