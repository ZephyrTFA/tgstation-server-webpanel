(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{326:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(140),o=r(637),i=r(40),l=r(115),u=r(634),s=r(114),m=r(68),f=r(652),d=r(18),p=r(129),y=r(11),E=r(3),v=r(47),h=r(37),b=r(14),g=r(69),w=r(54);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function k(e,t,r,a,n,c,o){try{var i=e[c](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(a,n)}function j(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=N(e);if(t){var n=N(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return P(this,r)}}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(d.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(N,e);var t,r,a,d,O,P=R(N);function N(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,N),(t=P.call(this,e)).state={errors:[],users:[],loading:!0,canList:!1},t}return t=N,(r=[{key:"addError",value:function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))}},{key:"componentDidMount",value:(d=function*(){var e=yield v.a.getCurrentUser();if(e.code==E.a.OK){var t=!!(Object(h.d)(e.payload).administrationRights&y.a.ReadUsers);if(this.setState({canList:t}),t){var r=yield v.a.listUsers();switch(r.code){case E.a.OK:this.setState({users:r.payload});break;case E.a.ERROR:this.addError(r.error)}}else this.setState({users:[e.payload]})}else this.addError(e.error);this.setState({loading:!1})},O=function(){var e=this,t=arguments;return new Promise((function(r,a){var n=d.apply(e,t);function c(e){k(n,r,a,c,o,"next",e)}function o(e){k(n,r,a,c,o,"throw",e)}c(void 0)}))},function(){return O.apply(this,arguments)})},{key:"render",value:function(){var e=this;return this.state.loading?n.a.createElement(w.a,{text:"loading.userlist"}):n.a.createElement("div",{className:"text-center"},this.state.canList?"":n.a.createElement(c.a,{className:"clearfix",variant:"error"},n.a.createElement(m.a,{id:"view.user.list.cantlist"})),this.state.errors.map((function(t,r){if(t)return n.a.createElement(g.a,{key:r,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[r]=void 0,{errors:t}}))}})})),n.a.createElement(u.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,n.a.createElement(m.a,{id:"generic.name"})),n.a.createElement("th",null,n.a.createElement(m.a,{id:"generic.details"})),n.a.createElement("th",null,n.a.createElement(m.a,{id:"generic.group"})),n.a.createElement("th",null,n.a.createElement(m.a,{id:"generic.created"})),n.a.createElement("th",null,n.a.createElement(m.a,{id:"generic.createdby"})),n.a.createElement("th",null,n.a.createElement(m.a,{id:"generic.action"})))),n.a.createElement("tbody",null,this.state.users.map((function(t){var r=new Date(t.createdAt),a=(r.getTime()-Date.now())/1e3;return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.id),n.a.createElement("td",null,t.name),n.a.createElement("td",null,t.systemIdentifier?n.a.createElement(o.a,{variant:"primary",className:"mx-1"},n.a.createElement(m.a,{id:"generic.system.short"})):n.a.createElement(o.a,{variant:"primary",className:"mx-1"},n.a.createElement(m.a,{id:"generic.tgs"})),t.enabled?n.a.createElement(o.a,{variant:"success",className:"mx-1"},n.a.createElement(m.a,{id:"generic.enabled"})):n.a.createElement(o.a,{variant:"danger",className:"mx-1"},n.a.createElement(m.a,{id:"generic.disabled"})),t.group?n.a.createElement(o.a,{variant:"warning",className:"mx-1"},n.a.createElement(m.a,{id:"generic.grouped"})):null),t.group?n.a.createElement(l.a,{overlay:n.a.createElement(s.a,{id:"".concat(t.name,"-tooltip-group")},n.a.createElement(m.a,{id:"generic.groupid",values:{id:t.group.id}}))},(function(e){var r=e.ref,a=S(e,["ref"]);return n.a.createElement("td",a,n.a.createElement("span",{ref:r},t.group.name))})):n.a.createElement("td",null),n.a.createElement(l.a,{overlay:n.a.createElement(s.a,{id:"".concat(t.name,"-tooltip")},r.toLocaleString())},(function(e){var t=e.ref,r=S(e,["ref"]);return n.a.createElement("td",r,n.a.createElement("span",{ref:t},n.a.createElement(f.a,{value:a,numeric:"auto",updateIntervalInSeconds:1})))})),n.a.createElement(l.a,{overlay:n.a.createElement(s.a,{id:"".concat(t.name,"-tooltip-createdby")},n.a.createElement(m.a,{id:"generic.userid"}),t.createdBy.id)},(function(e){var r=e.ref,a=S(e,["ref"]);return n.a.createElement("td",a,n.a.createElement("span",{ref:r},t.createdBy.name))})),n.a.createElement("td",{className:"align-middle p-0"},n.a.createElement(i.a,{onClick:function(){b.c.selecteduserid=t.id,e.props.history.push(b.b.useredit.link||b.b.useredit.route)}},n.a.createElement(m.a,{id:"generic.edit"}))))})))),n.a.createElement(i.a,{as:p.b,to:b.b.usercreate.link||b.b.usercreate.route},n.a.createElement(m.a,{id:"routes.usercreate"})))}}])&&j(t.prototype,r),a&&j(t,a),N}(n.a.Component))}}]);
//# sourceMappingURL=24.ef0f99c52231a9ebd228.js.map