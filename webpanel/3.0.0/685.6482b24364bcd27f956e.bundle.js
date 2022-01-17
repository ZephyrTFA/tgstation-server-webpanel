"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[685,664],{9049:function(e,t,n){n.d(t,{fS:function(){return m},Pg:function(){return g},ZP:function(){return E}});var a=n(7814),r=n(7294),l=n(5005),i=n(2258),s=n(2318),o=n(5293),c=n(3489),u=n(4012);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}let m;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(m||(m={}));const f=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),p=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),h=r.forwardRef((function(e,t){const n=Math.random().toString();return r.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},r.createElement(i.Z.Check,{id:n,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),v=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),b=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,n])=>r.createElement(u.Z,{id:`${e.name}.${t}`,key:t},(e=>r.createElement("option",{key:n,value:n},e))))))})),g={[m.Enum]:0,[m.Number]:0,[m.Boolean]:!1,[m.String]:"",[m.Password]:""};function E(e){const[t,n]=(0,r.useState)(e.defaultValue??g[e.type]),i=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(e.defaultValue??g[e.type])}),[e.defaultValue]),(0,r.useEffect)((()=>{switch(i.current&&(i.current.checkValidity()?i.current.classList.remove("is-invalid"):i.current.classList.add("is-invalid")),e.type){case m.Boolean:case m.Enum:case m.Number:case m.String:case m.Password:return void e.onChange(t,i.current?.checkValidity()??!0)}}),[t]);const E={string:f,password:p,boolean:h,[m.Number]:void 0,[m.Enum]:void 0},y=t!=(e.defaultValue??g[e.type]);return r.createElement(s.Z,null,r.createElement(o.Z,{overlay:(Z=e.tooltip,Z?r.createElement(c.Z,{id:Z},r.createElement(u.Z,{id:Z})):r.createElement(r.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...n})=>r.createElement(s.Z.Prepend,{className:"w-40"},r.createElement(s.Z.Text,d({className:"flex-grow-1"},n),r.createElement("span",{className:y?"font-weight-bold":""},r.createElement(u.Z,{id:e.name})),r.createElement("div",{className:"ml-auto"},e.disabled?r.createElement(u.Z,{id:"generic.readonly"}):null,r.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},r.createElement(a.G,{icon:"info"}))))))),e.type===m.Number?r.createElement(v,{value:t,onChange:e=>n(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:i}):e.type===m.Enum?r.createElement(b,{value:t,onChange:e=>n(e),name:e.name,enum:e.enum,disabled:e.disabled}):r.createElement(E[e.type],{value:t,onChange:e=>n(e),disabled:e.disabled,name:e.type,ref:i}),r.createElement(s.Z.Append,null,r.createElement(l.Z,{style:{visibility:!y||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>n(e.defaultValue??g[e.type])},r.createElement(a.G,{icon:"undo"}))));var Z}},5619:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(5005),l=n(5293),i=n(3489),s=n(4012),o=n(9049);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e){const t=new Map,n=new Map,[u,d]=(0,a.useState)({});(0,a.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{d((t=>({...t,[e]:{}})))}))}),[]);for(const[r,l]of Object.entries(e.fields))n.set(r,l),t.set(l,(0,a.useState)(l.defaultValue??o.Pg[l.type]));let m=!1,f=!1;for(const[e,a]of n){const[n]=t.get(a),r=u[e];if((a.defaultValue??o.Pg[a.type])!=n&&(m=!0),r?.invalid&&(f=!0),m&&f)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?a.createElement(a.Fragment,null):a.createElement("div",null,Object.entries(e.fields).map((([n,r])=>{const{disabled:l,...i}=r;return e.hideDisabled&&l?null:a.createElement(o.ZP,c({key:n},i,{disabled:e.readOnly||l,onChange:(e,a)=>{t.get(r)[1](e),d((e=>({...e,[n]:{...e[n],invalid:!a}})))}}))})),a.createElement("div",{className:"text-center mt-2"},a.createElement(l.Z,{overlay:a.createElement(i.Z,{id:"form-invalid"},a.createElement(s.Z,{id:"generic.invalid_form"})),show:!!f&&void 0},a.createElement(r.Z,{variant:e.readOnly||f?"danger":"success",disabled:e.readOnly||!m||f,onClick:()=>{const a={};for(const[r,l]of n){const[n]=t.get(l);(l.alwaysInclude||n!=(l.defaultValue??o.Pg[l.type])||e.includeAll)&&(a[r]=n)}e.onSave(a)}},a.createElement(s.Z,{id:"generic.save"})))))}},8425:function(e,t,n){n.d(t,{t:function(){return o}});var a=n(7294),r=n(5171),l=n.n(r),i=n(7961);function s(e){return a.createElement(l(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function o(e){return i.ZP.showjson.value?a.createElement("div",{className:"text-left"},a.createElement(s,{obj:e.obj})):a.createElement(a.Fragment,null)}},2685:function(e,t,n){n.r(t);var a=n(7294),r=n(5977),l=n(8509),i=n(6352),s=n(3803),o=n(6190),c=n(6964),u=n(3e3),d=n(9049),m=n(5619),f=n(8425);class p extends a.Component{constructor(e){super(e),this.editInstance=this.editInstance.bind(this),this.state={errors:[]}}addError(e){this.setState((t=>{const n=Array.from(t.errors);return n.push(e),{errors:n}}))}async editInstance(e){const t=await i.Z.editInstance({...e,id:this.context.instance.id});t.code===s.G.OK?this.context.reloadInstance():this.addError(t.error)}render(){const e=e=>(0,c.D0)((0,c.Zg)(this.context.user),e),t={name:{name:"fields.instance.name",type:d.fS.String,defaultValue:this.context.instance.name,disabled:!e(l.c2.Rename)},path:{name:"fields.instance.path",type:d.fS.String,defaultValue:this.context.instance.path,disabled:!e(l.c2.Relocate)},chatBotLimit:{name:"fields.instance.chatbotlimit",type:d.fS.Number,min:0,defaultValue:this.context.instance.chatBotLimit,disabled:!e(l.c2.SetChatBotLimit)},autoUpdateInterval:{name:"fields.instance.autoupdate",type:d.fS.Number,min:0,defaultValue:this.context.instance.autoUpdateInterval,disabled:!e(l.c2.SetAutoUpdate)},configurationType:{name:"fields.instance.filemode",type:d.fS.Enum,enum:l.c7,defaultValue:this.context.instance.configurationType,disabled:!e(l.c2.SetConfiguration)}};return a.createElement("div",{className:"text-center"},a.createElement(f.t,{obj:this.context}),this.state.errors.map(((e,t)=>{if(e)return a.createElement(u.ZP,{key:t,error:e,onClose:()=>this.setState((e=>{const n=Array.from(e.errors);return n[t]=void 0,{errors:n}}))})})),a.createElement(m.Z,{fields:t,onSave:this.editInstance}))}}p.contextType=o.g,t.default=(0,r.EN)(p)},6190:function(e,t,n){n.d(t,{g:function(){return a}});const a=n(7294).createContext(void 0)},2318:function(e,t,n){var a=n(3366),r=n(7462),l=n(4184),i=n.n(l),s=n(7294),o=n(4680),c=n(6792),u=["bsPrefix","size","hasValidation","className","as"],d=(0,o.Z)("input-group-append"),m=(0,o.Z)("input-group-prepend"),f=(0,o.Z)("input-group-text",{Component:"span"}),p=s.forwardRef((function(e,t){var n=e.bsPrefix,l=e.size,o=e.hasValidation,d=e.className,m=e.as,f=void 0===m?"div":m,p=(0,a.Z)(e,u);return n=(0,c.vE)(n,"input-group"),s.createElement(f,(0,r.Z)({ref:t},p,{className:i()(d,n,l&&n+"-"+l,o&&"has-validation")}))}));p.displayName="InputGroup",p.Text=f,p.Radio=function(e){return s.createElement(f,null,s.createElement("input",(0,r.Z)({type:"radio"},e)))},p.Checkbox=function(e){return s.createElement(f,null,s.createElement("input",(0,r.Z)({type:"checkbox"},e)))},p.Append=d,p.Prepend=m,t.Z=p}}]);
//# sourceMappingURL=685.6482b24364bcd27f956e.bundle.js.map