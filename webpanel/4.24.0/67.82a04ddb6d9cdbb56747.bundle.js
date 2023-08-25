"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[67,939],{3918:function(e,t,n){n.d(t,{a:function(){return b}});var a=n(1436),l=n(7814),r=n(7294),i=n(7977),o=n(5147),s=n(5293),c=n(3489),m=n(4012),u=n(1249),d=n(8509),p=n(6190),g=n(8425),E=n(5855),h=n(9929);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}let b;!function(e){e[e.CompileJobs=0]="CompileJobs",e[e.Watchdog=1]="Watchdog"}(b||(b={}));class f extends r.Component{constructor(e){super(e),this.state={openTestMergesId:null}}render(){return r.createElement("div",null,r.createElement(g.t,{obj:this.props.viewData}),r.createElement("h3",{className:"text-center"},r.createElement(m.Z,{id:"view.instance.server.deployment_info"})),this.props.viewData?this.renderViewData(this.props.viewData):r.createElement(E.Z,{text:"loading.compile_jobs"}))}renderViewData(e){let t,n=!1;const a=e,l=e;switch(e.viewDataType){case b.Watchdog:n=!a.activeCompileJob,t=()=>this.renderWatchdog(a);break;case b.CompileJobs:n=!!l.compileJobs&&0===l.compileJobs.length,t=()=>this.renderDeployments(l);break;default:throw new Error("Invalid enum value for ViewDataType!")}return n?r.createElement("h1",null,r.createElement(i.Z,{variant:"warning"},r.createElement(m.Z,{id:"view.utils.deployment_viewer.no_jobs"}))):t()}renderTable(e){return r.createElement(o.Z,{className:"table table-hover"},r.createElement("thead",null,r.createElement("th",null),r.createElement("th",null),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.id"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.byond"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.started_at"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.completed_at"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.started_by"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.project"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.revision"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.origin"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.security"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.dmapi"}))),r.createElement("tbody",null,e))}renderWatchdog(e){return this.renderTable(r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{colSpan:11},r.createElement("h3",null,r.createElement(i.Z,{pill:!0,variant:"success"},r.createElement(m.Z,{id:"view.instance.server.deployment_info.active"}))))),this.renderCompileJob(e.activeCompileJob),e.stagedCompileJob?r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{colSpan:11},r.createElement("h3",null,r.createElement(i.Z,{pill:!0,variant:"warning"},r.createElement(m.Z,{id:"view.instance.server.deployment_info.staged"}))))),this.renderCompileJob(e.stagedCompileJob)):r.createElement(r.Fragment,null)))}renderDeployments(e){return r.createElement(r.Fragment,null,this.renderTable(r.createElement(r.Fragment,null,e.compileJobs.map((e=>this.renderCompileJob(e))))),r.createElement(h.Z,{className:"mt-4",selectPage:t=>{e.paging.loadPage(t)},totalPages:e.paging.totalPages,currentPage:e.paging.currentPage}))}renderCompileJob(e){let t=e.byondVersion;t.endsWith(".0")&&(t=t.substring(0,t.length-2));const n={day:"2-digit",year:"numeric",month:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,timeZoneName:"short"},p=e.revisionInformation.activeTestMerges&&e.revisionInformation.activeTestMerges.length>0,g=this.state.openTestMergesId===e.id,E=!e.dmApiVersion||(0,u.lt)(e.dmApiVersion,this.context?.serverInfo?.dmApiVersion);return r.createElement(r.Fragment,null,r.createElement("tr",{className:"nowrap",onClick:()=>{g?this.setState({openTestMergesId:null}):p&&this.setState({openTestMergesId:e.id})}},r.createElement("td",null,p?r.createElement("h5",{style:{whiteSpace:"nowrap"}},r.createElement(s.Z,{overlay:r.createElement(c.Z,{id:`${e.id}-tooltip-test-merges`},r.createElement(m.Z,{id:"view.utils.deployment_viewer.test_merges_hint."+(g?"hide":"show")}))},(({ref:e,...t})=>r.createElement("span",v({ref:e},t),r.createElement(l.G,{icon:g?a.eW2:a.I4f}))))):null),r.createElement("td",null,E?r.createElement(s.Z,{overlay:r.createElement(c.Z,{id:`${e.id}-tooltip-dmapi`},r.createElement(m.Z,{id:"view.utils.deployment_viewer.dmapi_outdated",values:{codebase:e.dmApiVersion??"N/A",tgs:this.context.serverInfo.dmApiVersion}}))},(({ref:e,...t})=>r.createElement(i.Z,v({pill:!0,variant:"danger",style:{cursor:"pointer"},ref:e},t,{onClick:e=>{window.open("https://github.com/tgstation/tgstation-server/releases?q=%23tgs-dmapi-release&expanded=true","_blank")?.focus(),e.stopPropagation()}}),r.createElement(l.G,{icon:a.eHv})))):null),r.createElement("td",null,e.id),r.createElement("td",null,t),r.createElement("td",null,new Date(e.job.startedAt).toLocaleString("en-CA",n)),r.createElement("td",null,new Date(e.job.stoppedAt).toLocaleString("en-CA",n)),r.createElement("td",null,e.job.startedBy.name),r.createElement("td",null,e.dmeName),r.createElement("td",null,e.revisionInformation.commitSha.substring(0,7)),r.createElement("td",null,e.revisionInformation.originCommitSha.substring(0,7)),r.createElement("td",null,null!=e.minimumSecurityLevel?Object.keys(d.ns).filter((e=>isNaN(Number(e))))[e.minimumSecurityLevel]:r.createElement("i",null,r.createElement(m.Z,{id:"generic.not_applicable"}))),r.createElement("td",null,e.dmApiVersion)),g?r.createElement("tr",null,r.createElement("td",{colSpan:10},r.createElement(o.Z,null,r.createElement("thead",null,r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.number"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.title"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.revision"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.merged_by"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.merged_at"})),r.createElement("th",null,r.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.comment"}))),r.createElement("tbody",null,e.revisionInformation.activeTestMerges.map((t=>r.createElement("tr",{key:`test-merge-#${t.number}-cj-${e.id}`},r.createElement("td",null,r.createElement("a",{href:t.url},"#",t.number)),r.createElement("td",null,r.createElement("a",{href:t.url},t.titleAtMerge)),r.createElement("td",null,t.targetCommitSha.substring(0,7)),r.createElement("td",null,t.mergedBy.name),r.createElement("td",null,new Date(t.mergedAt).toLocaleString("en-CA",n)),r.createElement("td",null,t.comment?t.comment:r.createElement("i",null,r.createElement(m.Z,{id:"generic.not_applicable"})))))))))):r.createElement(r.Fragment,null))}}f.contextType=p.g,t.Z=f},9049:function(e,t,n){n.d(t,{Pg:function(){return f},ZP:function(){return y},fS:function(){return p}});var a=n(1436),l=n(7814),r=n(7294),i=n(5005),o=n(2258),s=n(2318),c=n(5293),m=n(3489),u=n(4012);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}let p;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(p||(p={}));const g=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),E=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),h=r.forwardRef((function(e,t){const n=Math.random().toString();return r.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},r.createElement(o.Z.Check,{id:n,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),v=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),b=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,n])=>e.noLocalize?r.createElement("option",{key:n,value:n},t):r.createElement(u.Z,{id:`${e.name}.${t}`,key:t},(e=>r.createElement("option",{key:n,value:n},e))))))})),f={[p.Enum]:0,[p.Number]:0,[p.Boolean]:!1,[p.String]:"",[p.Password]:""};function y(e){const[t,n]=(0,r.useState)(e.defaultValue??f[e.type]),o=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(e.defaultValue??f[e.type])}),[e.defaultValue]),(0,r.useEffect)((()=>{switch(o.current&&(o.current.checkValidity()?o.current.classList.remove("is-invalid"):o.current.classList.add("is-invalid")),e.type){case p.Boolean:case p.Enum:case p.Number:case p.String:case p.Password:return void e.onChange(t,o.current?.checkValidity()??!0)}}),[t]);const y={string:g,password:E,boolean:h,[p.Number]:void 0,[p.Enum]:void 0},w=t!=(e.defaultValue??f[e.type]);return r.createElement(s.Z,null,r.createElement(c.Z,{overlay:(Z=e.tooltip,Z?r.createElement(m.Z,{id:Z},r.createElement(u.Z,{id:Z})):r.createElement(r.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...n})=>r.createElement(s.Z.Prepend,{className:"w-50 w-xl-40"},r.createElement(s.Z.Text,d({className:"flex-grow-1"},n),r.createElement("span",{className:w?"font-weight-bold":""},r.createElement(u.Z,{id:e.name})),r.createElement("div",{className:"ml-auto"},e.disabled?r.createElement(u.Z,{id:"generic.readonly"}):null,r.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},r.createElement(l.G,{icon:a.YHc}))))))),e.type===p.Number?r.createElement(v,{value:t,onChange:e=>n(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:o}):e.type===p.Enum?r.createElement(b,{value:t,onChange:e=>n(e),name:e.name,enum:e.enum,noLocalize:e.noLocalize,disabled:e.disabled}):r.createElement(y[e.type],{value:t,onChange:e=>n(e),disabled:e.disabled,name:e.type,ref:o}),r.createElement(s.Z.Append,null,r.createElement(i.Z,{style:{visibility:!w||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>n(e.defaultValue??f[e.type])},r.createElement(l.G,{icon:"undo"}))));var Z}},5619:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(5005),r=n(5293),i=n(3489),o=n(4012),s=n(9049);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){const t=new Map,n=new Map,[m,u]=(0,a.useState)({});(0,a.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{u((t=>({...t,[e]:{}})))}))}),[]);for(const[l,r]of Object.entries(e.fields))n.set(l,r),t.set(r,(0,a.useState)(r.defaultValue??s.Pg[r.type]));let d=!1,p=!1;for(const[e,a]of n){const[n]=t.get(a),l=m[e];if((a.defaultValue??s.Pg[a.type])!=n&&(d=!0),l?.invalid&&(p=!0),d&&p)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?a.createElement(a.Fragment,null):a.createElement("div",null,Object.entries(e.fields).map((([n,l])=>{const{disabled:r,...i}=l;return e.hideDisabled&&r?null:a.createElement(s.ZP,c({key:n},i,{disabled:e.readOnly||r,onChange:(e,a)=>{t.get(l)[1](e),u((e=>({...e,[n]:{...e[n],invalid:!a}})))}}))})),a.createElement("div",{className:"text-center mt-2"},a.createElement(r.Z,{overlay:a.createElement(i.Z,{id:"form-invalid"},a.createElement(o.Z,{id:"generic.invalid_form"})),show:!!p&&void 0},a.createElement(l.Z,{variant:e.readOnly||p?"danger":"success",disabled:e.readOnly||!d||p,onClick:()=>{const a={};for(const[l,r]of n){const[n]=t.get(r);(r.alwaysInclude||n!=(r.defaultValue??s.Pg[r.type])||e.includeAll)&&(a[l]=n)}e.onSave(a)}},a.createElement(o.Z,{id:e.saveMessageId??"generic.save"})))))}},8425:function(e,t,n){n.d(t,{t:function(){return s}});var a=n(7294),l=n(5171),r=n.n(l),i=n(7961);function o(e){return a.createElement(r(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function s(e){return i.ZP.showjson.value?a.createElement("div",{className:"text-left"},a.createElement(o,{obj:e.obj})):a.createElement(a.Fragment,null)}},9929:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7814),l=n(7294),r=n(5005),i=n(2258),o=n(5293),s=n(8966),c=n(9611),m=n(4012);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}class d extends l.PureComponent{constructor(e){super(e),this.state={showGoto:!1,gotoValue:e.currentPage}}render(){const e=[],t=Math.max(this.props.totalPages-this.props.currentPage-1,0),n=Math.max(this.props.currentPage-2,0),d=Math.max(this.props.currentPage-Math.max(5-Number(this.props.currentPage!==this.props.totalPages)-t,2),2),p=Math.min(this.props.currentPage+Math.max(5-Number(1!==this.props.currentPage)-n,2),this.props.totalPages-1);for(let t=d;t<=p;t++)e.push(l.createElement(s.Z.Item,{key:t,active:t===this.props.currentPage,onClick:()=>this.props.selectPage(t)},t));const g=this.props.totalPages>7?l.createElement(s.Z.Ellipsis,{disabled:!0}):null,E=l.createElement(c.Z,{id:"popover-gotopage"},l.createElement(c.Z.Title,null,l.createElement(m.Z,{id:"generic.goto.title"})),l.createElement(c.Z.Content,null,l.createElement("form",{className:"d-flex",onSubmit:e=>{e.preventDefault(),this.props.selectPage(this.state.gotoValue),this.setState({showGoto:!1})}},l.createElement(i.Z.Control,{className:"mr-2",type:"number",min:1,max:this.props.totalPages,value:this.state.gotoValue,onChange:e=>this.setState({gotoValue:parseInt(e.target.value)}),custom:!0}),l.createElement(r.Z,{type:"submit"},l.createElement(m.Z,{id:"generic.goto"}))))),{selectPage:h,totalPages:v,currentPage:b,...f}=this.props;return l.createElement("div",u({className:"text-center",style:{position:"sticky",bottom:"1.5em"}},f),l.createElement(s.Z,{className:"justify-content-center"},l.createElement(s.Z.Prev,{disabled:this.props.currentPage<=1,onClick:()=>this.props.selectPage(Math.max(this.props.currentPage-1,1))}),l.createElement(s.Z.Item,{active:this.props.currentPage<=1,onClick:()=>this.props.selectPage(1)},"1"),g,e,g,this.props.totalPages>=2?l.createElement(s.Z.Item,{active:this.props.currentPage>=this.props.totalPages,onClick:()=>this.props.selectPage(this.props.totalPages)},this.props.totalPages):null,this.props.totalPages>7?l.createElement(o.Z,{show:this.state.showGoto,placement:"top",overlay:E},l.createElement(s.Z.Item,{onClick:()=>this.setState((e=>({showGoto:!e.showGoto})))},l.createElement(a.G,{icon:"search"}))):null,l.createElement(s.Z.Next,{disabled:this.props.currentPage>=this.props.totalPages,onClick:()=>this.props.selectPage(Math.min(this.props.currentPage+1,this.props.totalPages))})))}}},6190:function(e,t,n){n.d(t,{g:function(){return a}});const a=n(7294).createContext(void 0)}}]);
//# sourceMappingURL=67.82a04ddb6d9cdbb56747.bundle.js.map