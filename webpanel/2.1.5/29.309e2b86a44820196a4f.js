(window.webpackJsonp=window.webpackJsonp||[]).push([[29,19],{309:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(18),c=n(11),i=n(655),u=n(3),s=n(69),l=n(55),p=n(71),f=n(196),d=n(633),m=n(115),y=n(114),h=n(68);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,e);var t,n,r,a=k(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={currentValue:e.defaultValue},t}return t=c,(n=[{key:"render",value:function(){var e,t=this,n=Math.random().toString(),r=this.state.currentValue!==this.props.defaultValue;return o.a.createElement(d.a,null,o.a.createElement(d.a.Prepend,{className:"w-40 flex-grow-1 flex-xl-grow-0 overflow-auto mb-2 mb-xl-0"},o.a.createElement(m.a,{overlay:(e=this.props.tooltip,e?o.a.createElement(y.a,{id:e},o.a.createElement(h.a,{id:e})):o.a.createElement(o.a.Fragment,null)),show:!!this.props.tooltip&&void 0},(function(e){var n=e.ref,a=g(e,["ref"]);return o.a.createElement(d.a.Text,v({className:"flex-fill ".concat(r?"font-weight-bold":"")},a),o.a.createElement(h.a,{id:"fields.".concat(t.props.name)}),t.props.tooltip?o.a.createElement("div",{className:"ml-auto",ref:n},o.a.createElement(l.a,{fixedWidth:!0,icon:"info"})):null)}))),o.a.createElement("div",{className:"flex-grow-1 w-100 w-xl-auto d-flex mb-3 mb-xl-0"},"enum"===this.props.type?o.a.createElement("select",{className:"flex-fill mb-0 ".concat(r?"font-weight-bold":""),onChange:function(e){t.props.setEditLock&&(r&&e.target.selectedOptions[0].value===t.props.defaultValue?t.props.setEditLock(!1):r||e.target.selectedOptions[0].value===t.props.defaultValue||t.props.setEditLock(!0)),t.setState({currentValue:e.target.selectedOptions[0].value})},disabled:this.props.disabled||!r&&this.props.editLock,defaultValue:this.props.defaultValue},Object.values(this.props.enum).filter((function(e){return isNaN(parseInt(e))})).map((function(e){return o.a.createElement(h.a,{key:e,id:"fields.".concat(t.props.name,".").concat(e)},(function(t){return o.a.createElement("option",{value:e},t)}))}))):"bool"===this.props.type?o.a.createElement("label",{htmlFor:n,className:"d-flex justify-content-center align-content-center flex-grow-1 w-100 w-xl-auto mb-0"},o.a.createElement(p.a.Check,{inline:!0,type:"switch",custom:!0,id:n,className:"m-auto",label:"",onChange:function(e){t.props.setEditLock&&(r&&e.currentTarget.checked===t.props.defaultValue?t.props.setEditLock(!1):r||e.currentTarget.checked===t.props.defaultValue||t.props.setEditLock(!0)),t.setState({currentValue:e.currentTarget.checked})},checked:this.state.currentValue,disabled:this.props.disabled||!r&&this.props.editLock})):o.a.createElement(f.a,{custom:!0,type:"num"===this.props.type?"number":"text",className:"flex-fill mb-0 ".concat(r?"font-weight-bold":""),onChange:function(e){var n="num"==t.props.type?parseInt(e.currentTarget.value):e.currentTarget.value;t.props.setEditLock&&(r&&n===t.props.defaultValue?t.props.setEditLock(!1):r||n===t.props.defaultValue||t.props.setEditLock(!0)),t.setState({currentValue:n})},value:this.state.currentValue,disabled:this.props.disabled||!r&&this.props.editLock}),o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a.Append,{style:r?{}:{opacity:0,pointerEvents:"none"},onClick:function(){t.props.setEditLock&&t.props.setEditLock(!1),t.setState({currentValue:t.props.defaultValue})}},o.a.createElement(d.a.Text,null,o.a.createElement(l.a,{fixedWidth:!0,icon:"undo"}))),o.a.createElement(d.a.Append,{style:r?{}:{opacity:0,pointerEvents:"none"},onClick:function(){switch(t.props.type){case"str":case"num":case"bool":case"enum":t.props.onChange(t.state.currentValue)}}},o.a.createElement(d.a.Text,null,o.a.createElement(l.a,{fixedWidth:!0,icon:"check"}))))))}}])&&E(t.prototype,n),r&&E(t,r),c}(o.a.Component),S=n(54);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(a.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(f,e);var t,n,r,a,l,p=T(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e)).state={loading:!1,editLock:!1,errors:[]},t}return t=f,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"_editInstance",value:(a=function*(e){var t=yield i.a.editInstance(V(V({},e),{},{id:this.props.instance.id}));t.code===u.a.OK?(this.setState({loading:!0}),yield this.props.loadInstance(),this.setState({loading:!1})):this.addError(t.error)},l=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function c(e){_(o,n,r,c,i,"next",e)}function i(e){_(o,n,r,c,i,"throw",e)}c(void 0)}))},function(e){return l.apply(this,arguments)})},{key:"editInstance",value:function(e){this._editInstance(e)}},{key:"render",value:function(){var e=this;if(this.state.loading)return o.a.createElement(S.a,{text:"loading.instance"});var t=function(t){return e.props.selfPermissionSet.instanceManagerRights&t},n=function(t){e.setState({editLock:t})};return o.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return o.a.createElement(s.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),o.a.createElement(L,{name:"instance.name",defaultValue:this.props.instance.name,type:"str",onChange:function(t){e.editInstance({name:t})},disabled:!t(c.e.Rename),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(L,{name:"instance.path",defaultValue:this.props.instance.path,type:"str",onChange:function(t){e.editInstance({path:t})},disabled:!t(c.e.Relocate),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(L,{name:"instance.chatbotlimit",defaultValue:this.props.instance.chatBotLimit,type:"num",onChange:function(t){e.editInstance({chatBotLimit:t})},disabled:!t(c.e.SetChatBotLimit),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(L,{name:"instance.autoupdate",defaultValue:this.props.instance.autoUpdateInterval,type:"num",onChange:function(t){e.editInstance({autoUpdateInterval:t})},disabled:!t(c.e.SetAutoUpdate),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(L,{name:"instance.filemode",defaultValue:c.c[this.props.instance.configurationType],type:"enum",enum:c.c,onChange:function(t){e.editInstance({configurationType:c.c[t]})},disabled:!t(c.e.SetConfiguration),setEditLock:n,editLock:this.state.editLock}))}}])&&I(t.prototype,n),r&&I(t,r),f}(o.a.Component))}}]);
//# sourceMappingURL=29.309e2b86a44820196a4f.js.map