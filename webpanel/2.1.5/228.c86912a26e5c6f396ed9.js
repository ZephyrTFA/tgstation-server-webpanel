(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[228],{9657:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(67814),a=n(67294),o=n(35005),i=n(32258),s=n(86828),c=n(22122),l=n(19756),u=n(94184),f=n.n(u),p=n(76792),m=n(48358),d=a.forwardRef((function(e,t){var n=e.active,r=e.disabled,o=e.className,i=e.style,s=e.activeLabel,u=e.children,p=(0,l.Z)(e,["active","disabled","className","style","activeLabel","children"]),d=n||r?"span":m.Z;return a.createElement("li",{ref:t,style:i,className:f()(o,"page-item",{active:n,disabled:r})},a.createElement(d,(0,c.Z)({className:"page-link",disabled:r},p),u,n&&s&&a.createElement("span",{className:"sr-only"},s)))}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var h=d;function v(e,t,n){function r(e){var r=e.children,o=(0,l.Z)(e,["children"]);return a.createElement(d,o,a.createElement("span",{"aria-hidden":"true"},r||t),a.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),r.displayName=e,r}var y=v("First","«"),g=v("Prev","‹","Previous"),b=v("Ellipsis","…","More"),E=v("Next","›"),P=v("Last","»"),w=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,i=e.size,s=(0,l.Z)(e,["bsPrefix","className","children","size"]),u=(0,p.vE)(n,"pagination");return a.createElement("ul",(0,c.Z)({ref:t},s,{className:f()(r,u,i&&u+"-"+i)}),o)}));w.First=y,w.Prev=g,w.Ellipsis=b,w.Item=h,w.Next=E,w.Last=P;var Z=w,N=(n(55638),a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.bsPrefix,i=e.className,s=e.children,u=(0,l.Z)(e,["as","bsPrefix","className","children"]);return o=(0,p.vE)(o,"popover-header"),a.createElement(r,(0,c.Z)({ref:t},u,{className:f()(o,i)}),s)}))),x=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.bsPrefix,i=e.className,s=e.children,u=(0,l.Z)(e,["as","bsPrefix","className","children"]);return o=(0,p.vE)(o,"popover-body"),a.createElement(r,(0,c.Z)({ref:t},u,{className:f()(i,o)}),s)})),O=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,o=e.className,i=e.style,s=e.children,u=e.content,m=e.arrowProps,d=(e.popper,e.show,(0,l.Z)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),h=(0,p.vE)(n,"popover"),v=((null==r?void 0:r.split("-"))||[])[0];return a.createElement("div",(0,c.Z)({ref:t,role:"tooltip",style:i,"x-placement":v,className:f()(o,h,v&&"bs-popover-"+v)},d),a.createElement("div",(0,c.Z)({className:"arrow"},m)),u?a.createElement(x,null,s):s)}));O.defaultProps={placement:"right"},O.Title=N,O.Content=x;var S=O,k=n(44012);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(f,e);var t,n,c,l,u=(c=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(c);if(l){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=u.call(this,e)).state={showGoto:!1,gotoValue:e.currentPage},t}return t=f,(n=[{key:"render",value:function(){for(var e=this,t=[],n=Math.max(this.props.totalPages-this.props.currentPage-1,0),c=Math.max(this.props.currentPage-2,0),l=Math.max(this.props.currentPage-Math.max(5-Number(this.props.currentPage!==this.props.totalPages)-n,2),2),u=Math.min(this.props.currentPage+Math.max(5-Number(1!==this.props.currentPage)-c,2),this.props.totalPages-1),f=function(n){t.push(a.createElement(Z.Item,{active:n===e.props.currentPage,onClick:function(){return e.props.selectPage(n)}},n))},p=l;p<=u;p++)f(p);var m=this.props.totalPages>7?a.createElement(Z.Ellipsis,{disabled:!0}):null,d=a.createElement(S,{id:"popover-gotopage"},a.createElement(S.Title,null,a.createElement(k.Z,{id:"generic.goto.title"})),a.createElement(S.Content,null,a.createElement("form",{className:"d-flex",onSubmit:function(t){t.preventDefault(),e.props.selectPage(e.state.gotoValue),e.setState({showGoto:!1})}},a.createElement(i.Z.Control,{className:"mr-2",type:"number",min:1,max:this.props.totalPages,value:this.state.gotoValue,onChange:function(t){return e.setState({gotoValue:parseInt(t.target.value)})},custom:!0}),a.createElement(o.Z,{type:"submit"},a.createElement(k.Z,{id:"generic.goto"})))));return a.createElement("div",{className:"text-center"},a.createElement(Z,{className:"justify-content-center"},a.createElement(Z.Prev,{disabled:1===this.props.currentPage,onClick:function(){return e.props.selectPage(Math.max(e.props.currentPage-1,1))}}),a.createElement(Z.Item,{active:1===this.props.currentPage,onClick:function(){return e.props.selectPage(1)}},"1"),m,t,m,this.props.totalPages>=2?a.createElement(Z.Item,{active:this.props.currentPage===this.props.totalPages,onClick:function(){return e.props.selectPage(e.props.totalPages)}},this.props.totalPages):null,this.props.totalPages>7?a.createElement(s.Z,{show:this.state.showGoto,placement:"top",overlay:d},a.createElement(Z.Item,{onClick:function(){return e.setState((function(e){return{showGoto:!e.showGoto}}))}},a.createElement(r.G,{icon:"search"}))):null,a.createElement(Z.Next,{disabled:this.props.currentPage===this.props.totalPages,onClick:function(){return e.props.selectPage(Math.min(e.props.currentPage+1,e.props.totalPages))}})))}}])&&C(t.prototype,n),f}(a.PureComponent)},36228:function(e,t,n){"use strict";n.r(t);var r=n(40098),a=n(67814),o=n(67294),i=n(27977),s=n(35005),c=n(86828),l=n(75147),u=n(43489),f=n(44012),p=n(41153),m=n(48155),d=n(15402),h=n(60083),v=n(36800),y=n(38592),g=n(32826),b=n(42540),E=n(3429),P=n(43307),w=n(71739),Z=n(9657);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){S(o,r,a,i,s,"next",e)}function s(e){S(o,r,a,i,s,"throw",e)}i(void 0)}))}}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(G,e);var t,n,p,g,N,S,A,M,T=(A=G,M=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(A);if(M){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function G(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,G),(t=T.call(this,e)).setOnline=t.setOnline.bind(I(t)),t.state={loading:!0,instances:[],errors:[],page:E.Mq.instancelistpage||1},t}return t=G,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"componentDidUpdate",value:(S=k((function*(e,t){t.page!==this.state.page&&(E.Mq.instancelistpage=this.state.page,yield this.loadInstances())})),function(e,t){return S.apply(this,arguments)})},{key:"loadInstances",value:(N=k((function*(){var e=this;this.setState({loading:!0});var t=yield d.Z.listInstances({page:this.state.page}),n=[];if(t.code==y.G.OK){if(this.state.page>t.payload.totalPages)return void this.setState({page:t.payload.totalPages});var r,a=[],o=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}(t.payload.content);try{var i=function(){var t=r.value,o=t;t.online?a.push(h.Z.getCurrentInstancePermissionSet(t.id).then((function(t){t.code==y.G.OK?o.canAccess=!0:(o.canAccess=!1,t.error.code!==v.jK.HTTP_ACCESS_DENIED&&e.addError(t.error)),n.push(o)}))):(o.canAccess=!1,n.push(o))};for(o.s();!(r=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}yield Promise.all(a),this.setState({instances:n.sort((function(e,t){return e.id-t.id})),maxPage:t.payload.totalPages})}else this.addError(t.error);this.setState({loading:!1})})),function(){return N.apply(this,arguments)})},{key:"componentDidMount",value:(g=k((function*(){yield this.loadInstances()})),function(){return g.apply(this,arguments)})},{key:"setOnline",value:(p=k((function*(e){var t=!e.online,n=yield d.Z.editInstance({id:e.id,online:t});n.code===y.G.OK?yield this.loadInstances():this.addError(n.error)})),function(e){return p.apply(this,arguments)})},{key:"render",value:function(){var e=this;if(this.state.loading)return o.createElement(w.Z,{text:"loading.instance.list"});var t=!!((0,b.Zg)(this.context.user).instanceManagerRights&m.c2.SetOnline),n={verticalAlign:"middle"};return o.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return o.createElement(P.Z,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),o.createElement("h3",null,o.createElement(f.Z,{id:"view.instance.list.title"})),o.createElement(l.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0,className:"mb-4"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,o.createElement(f.Z,{id:"generic.name"})),o.createElement("th",null,o.createElement(f.Z,{id:"generic.online"})),o.createElement("th",null,o.createElement(f.Z,{id:"generic.path"})),o.createElement("th",null,o.createElement(f.Z,{id:"generic.configmode"})),o.createElement("th",null,o.createElement(f.Z,{id:"generic.action"})))),o.createElement("tbody",null,this.state.instances.map((function(r){return o.createElement("tr",{key:r.id},o.createElement("td",{style:n},r.id),o.createElement("td",{style:n},r.name),o.createElement("td",{style:n},r.online?o.createElement(i.Z,{variant:"success"},o.createElement(f.Z,{id:"generic.online"})):o.createElement(i.Z,{variant:"danger"},o.createElement(f.Z,{id:"generic.offline"}))),o.createElement("td",{style:n},r.moveJob?o.createElement(f.Z,{id:"view.instance.moving"}):r.path),o.createElement("td",{style:n},o.createElement(f.Z,{id:"view.instance.configmode.".concat(r.configurationType.toString())})),o.createElement("td",{className:"align-middle p-1",style:n},o.createElement(s.Z,{className:"mx-1",onClick:function(){E.Mq.selectedinstanceid=r.id,e.props.history.push(E.$w.instanceedit.link||E.$w.instanceedit.route)},disabled:!r.canAccess},o.createElement(f.Z,{id:"generic.edit"})),o.createElement(s.Z,{className:"mx-1",variant:r.online?"danger":"success",onClick:function(){return e.setOnline(r)},disabled:!t},o.createElement(f.Z,{id:"view.instance.list.set.".concat(r.online?"offline":"online")}))))})))),o.createElement(Z.Z,{selectPage:function(t){return e.setState({page:t})},totalPages:this.state.maxPage||1,currentPage:this.state.page}),o.createElement("div",{className:"align-middle"},o.createElement("div",{className:"mb-4"},this.renderAddInstance()),o.createElement(s.Z,{className:"mx-1",onClick:function(){e.props.history.push(E.$w.instancejobs.link||E.$w.instancejobs.route)}},o.createElement(f.Z,{id:"routes.instancejobs"}))))}},{key:"renderAddInstance",value:function(){var e=this,t=!!((0,b.Zg)(this.context.user).instanceManagerRights&m.c2.Create);return o.createElement(c.Z,{overlay:o.createElement(u.Z,{id:"create-instance-tooltip"},o.createElement(f.Z,{id:"perms.instance.create.warning"})),show:!t&&void 0},(function(n){var i=n.ref,c=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(n,["ref"]);return o.createElement(s.Z,x({ref:i,className:"mx-1",variant:"success",onClick:function(){e.props.history.push(E.$w.instancecreate.link||E.$w.instancecreate.route)},disabled:!t},c),o.createElement("div",null,o.createElement(a.G,{className:"mr-2",icon:r.r8}),o.createElement(f.Z,{id:"routes.instancecreate"})))}))}}])&&j(t.prototype,n),G}(o.Component);A.contextType=g.f,t.default=(0,p.EN)(A)},27977:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(94184),i=n.n(o),s=n(67294),c=n(76792),l=s.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,l=e.pill,u=e.className,f=e.as,p=void 0===f?"span":f,m=(0,a.Z)(e,["bsPrefix","variant","pill","className","as"]),d=(0,c.vE)(n,"badge");return s.createElement(p,(0,r.Z)({ref:t},m,{className:i()(u,d,l&&d+"-pill",o&&d+"-"+o)}))}));l.displayName="Badge",l.defaultProps={pill:!1},t.Z=l},75147:function(e,t,n){"use strict";var r=n(22122),a=n(19756),o=n(94184),i=n.n(o),s=n(67294),c=n(76792),l=s.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.striped,u=e.bordered,f=e.borderless,p=e.hover,m=e.size,d=e.variant,h=e.responsive,v=(0,a.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=(0,c.vE)(n,"table"),g=i()(o,y,d&&y+"-"+d,m&&y+"-"+m,l&&y+"-striped",u&&y+"-bordered",f&&y+"-borderless",p&&y+"-hover"),b=s.createElement("table",(0,r.Z)({},v,{className:g,ref:t}));if(h){var E=y+"-responsive";return"string"==typeof h&&(E=E+"-"+h),s.createElement("div",{className:E},b)}return b}));t.Z=l}}]);
//# sourceMappingURL=228.c86912a26e5c6f396ed9.js.map