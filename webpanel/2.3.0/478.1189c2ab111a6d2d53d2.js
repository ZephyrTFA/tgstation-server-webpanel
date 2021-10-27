"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[478],{80478:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r,a,o=n(67294),i=n(5977),l=n(48155),u=n(15402),c=n(38592),f=n(49896),s=n(42540),d=n(43307),y=n(67814),m=n(35005),p=n(32258),b=n(62318),v=n(15293),h=n(43489),g=n(44012),O=["ref"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(a||(a={}));var P=o.forwardRef((function(e,t){return o.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(t.target.value)},disabled:e.disabled,ref:t})})),C=o.forwardRef((function(e,t){return o.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(t.target.value)},disabled:e.disabled,type:"password",ref:t})})),x=o.forwardRef((function(e,t){var n=Math.random().toString();return o.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},o.createElement(p.Z.Check,{id:n,checked:e.value,onChange:function(t){return e.onChange(t.target.checked)},type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),k=o.forwardRef((function(e,t){return o.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber)},disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),Z=o.forwardRef((function(e,t){return o.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(parseInt(t.target.value))},disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((function(e){var t=j(e,1)[0];return isNaN(parseInt(t))})).map((function(t){var n=j(t,2),r=n[0],a=n[1];return o.createElement(g.Z,{id:"".concat(e.name,".").concat(r),key:r},(function(e){return o.createElement("option",{key:a,value:a},e)}))})))})),N=(E(r={},a.Enum,0),E(r,a.Number,0),E(r,a.Boolean,!1),E(r,a.String,""),E(r,a.Password,""),r);function I(e){var t,n,r,i=j((0,o.useState)(null!==(t=e.defaultValue)&&void 0!==t?t:N[e.type]),2),l=i[0],u=i[1],c=(0,o.useRef)(null);(0,o.useEffect)((function(){var t;u(null!==(t=e.defaultValue)&&void 0!==t?t:N[e.type])}),[e.defaultValue]),(0,o.useEffect)((function(){c.current&&(c.current.checkValidity()?c.current.classList.remove("is-invalid"):c.current.classList.add("is-invalid")),s(l)}),[l]);var f,s=function(t){var n,r,o,i,l,u;switch(e.type){case a.Boolean:return void e.onChange(t,null===(n=null===(r=c.current)||void 0===r?void 0:r.checkValidity())||void 0===n||n);case a.Enum:case a.Number:return void e.onChange(t,null===(o=null===(i=c.current)||void 0===i?void 0:i.checkValidity())||void 0===o||o);case a.String:case a.Password:return void e.onChange(t,null===(l=null===(u=c.current)||void 0===u?void 0:u.checkValidity())||void 0===l||l)}},d=(E(n={string:P,password:C,boolean:x},a.Number,void 0),E(n,a.Enum,void 0),n),p=l!=(null!==(r=e.defaultValue)&&void 0!==r?r:N[e.type]);return o.createElement(b.Z,null,o.createElement(v.Z,{overlay:(f=e.tooltip,f?o.createElement(h.Z,{id:f},o.createElement(g.Z,{id:f})):o.createElement(o.Fragment,null)),show:!!e.tooltip&&void 0},(function(t){var n=t.ref,r=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,O);return o.createElement(b.Z.Prepend,{className:"w-40"},o.createElement(b.Z.Text,w({className:"flex-grow-1"},r),o.createElement("span",{className:p?"font-weight-bold":""},o.createElement(g.Z,{id:e.name})),e.tooltip?o.createElement("div",{className:"ml-auto",ref:n},o.createElement(y.G,{icon:"info"})):null))})),e.type===a.Number?o.createElement(k,{value:l,onChange:function(e){return u(e)},name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:c}):e.type===a.Enum?o.createElement(Z,{value:l,onChange:function(e){return u(e)},name:e.name,enum:e.enum,disabled:e.disabled}):o.createElement(d[e.type],{value:l,onChange:function(e){return u(e)},disabled:e.disabled,name:e.type,ref:c}),o.createElement(b.Z.Append,null,o.createElement(m.Z,{style:{visibility:!p||e.disabled?"hidden":void 0},variant:"danger",onClick:function(){var t;return u(null!==(t=e.defaultValue)&&void 0!==t?t:N[e.type])}},o.createElement(y.G,{icon:"undo"}))))}var A=["disabled"];function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function _(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=L(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e){var t=new Map,n=new Map,r=B((0,o.useState)({}),2),a=r[0],i=r[1];(0,o.useEffect)((function(){Object.keys(e.fields).forEach((function(e){i((function(t){return D(D({},t),{},T({},e,{}))}))}))}),[]),Object.entries(e.fields).forEach((function(e){var r,a=B(e,2),i=a[0],l=a[1];n.set(i,l),t.set(l,(0,o.useState)(null!==(r=l.defaultValue)&&void 0!==r?r:N[l.type]))}));var l,u=!1,c=!1,f=_(n);try{for(f.s();!(l=f.n()).done;){var s,d=B(l.value,2),y=d[0],p=d[1],b=B(t.get(p),1)[0],O=a[y];if((null!==(s=p.defaultValue)&&void 0!==s?s:N[p.type])!=b&&(u=!0),null!=O&&O.invalid&&(c=!0),u&&c)break}}catch(e){f.e(e)}finally{f.f()}return e.hideDisabled&&!Object.values(e.fields).some((function(e){return!e.disabled}))?o.createElement(o.Fragment,null):o.createElement("div",null,Object.entries(e.fields).map((function(n){var r=B(n,2),a=r[0],l=r[1],u=l.disabled,c=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(l,A);return e.hideDisabled&&u?null:o.createElement(I,V({key:a},c,{disabled:e.readOnly||u,onChange:function(e,n){t.get(l)[1](e),i((function(e){return D(D({},e),{},T({},a,D(D({},e[a]),{},{invalid:!n})))}))}}))})),o.createElement("div",{className:"text-center mt-2"},o.createElement(v.Z,{overlay:o.createElement(h.Z,{id:"form-invalid"},o.createElement(g.Z,{id:"generic.invalid_form"})),show:!!c&&void 0},o.createElement(m.Z,{variant:e.readOnly||c?"danger":"success",disabled:e.readOnly||!u||c,onClick:function(){var r,a={},o=_(n);try{for(o.s();!(r=o.n()).done;){var i,l=B(r.value,2),u=l[0],c=l[1],f=B(t.get(c),1)[0];(c.alwaysInclude||f!=(null!==(i=c.defaultValue)&&void 0!==i?i:N[c.type]))&&(a[u]=f)}}catch(e){o.e(e)}finally{o.f()}e.onSave(a)}},o.createElement(g.Z,{id:"generic.save"})))))}function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function J(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(p,e);var t,n,r,i,f,y,m=(f=p,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(f);if(y){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=m.call(this,e)).editInstance=t.editInstance.bind(Q(t)),t.state={errors:[]},t}return t=p,n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"editInstance",value:(r=function*(e){var t=yield u.Z.editInstance($($({},e),{},{id:this.context.instance.id}));t.code===c.G.OK?this.context.reloadInstance():this.addError(t.error)},i=function(){var e=this,t=arguments;return new Promise((function(n,a){var o=r.apply(e,t);function i(e){q(o,n,a,i,l,"next",e)}function l(e){q(o,n,a,i,l,"throw",e)}i(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=function(t){return(0,s.D0)((0,s.Zg)(e.context.user),t)},n={name:{name:"fields.instance.name",type:a.String,defaultValue:this.context.instance.name,disabled:!t(l.c2.Rename)},path:{name:"fields.instance.path",type:a.String,defaultValue:this.context.instance.path,disabled:!t(l.c2.Relocate)},chatBotLimit:{name:"fields.instance.chatbotlimit",type:a.Number,min:0,defaultValue:this.context.instance.chatBotLimit,disabled:!t(l.c2.SetChatBotLimit)},autoUpdateInterval:{name:"fields.instance.autoupdate",type:a.Number,min:0,defaultValue:this.context.instance.autoUpdateInterval,disabled:!t(l.c2.SetAutoUpdate)},configurationType:{name:"fields.instance.filemode",type:a.Enum,enum:l.c7,defaultValue:this.context.instance.configurationType,disabled:!t(l.c2.SetConfiguration)}};return o.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return o.createElement(d.ZP,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),o.createElement(U,{fields:n,onSave:this.editInstance}))}}],n&&z(t.prototype,n),p}(o.Component);X.contextType=f.g;var Y=(0,i.EN)(X)}}]);
//# sourceMappingURL=478.1189c2ab111a6d2d53d2.js.map