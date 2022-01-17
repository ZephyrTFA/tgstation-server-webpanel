"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[247],{9049:function(e,t,n){n.d(t,{fS:function(){return u},Pg:function(){return b},ZP:function(){return v}});var a=n(7814),r=n(7294),i=n(5005),l=n(2258),o=n(2318),s=n(5293),c=n(3489),m=n(4012);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}let u;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(u||(u={}));const p=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),f=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),g=r.forwardRef((function(e,t){const n=Math.random().toString();return r.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},r.createElement(l.Z.Check,{id:n,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),E=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),h=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,n])=>r.createElement(m.Z,{id:`${e.name}.${t}`,key:t},(e=>r.createElement("option",{key:n,value:n},e))))))})),b={[u.Enum]:0,[u.Number]:0,[u.Boolean]:!1,[u.String]:"",[u.Password]:""};function v(e){const[t,n]=(0,r.useState)(e.defaultValue??b[e.type]),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(e.defaultValue??b[e.type])}),[e.defaultValue]),(0,r.useEffect)((()=>{switch(l.current&&(l.current.checkValidity()?l.current.classList.remove("is-invalid"):l.current.classList.add("is-invalid")),e.type){case u.Boolean:case u.Enum:case u.Number:case u.String:case u.Password:return void e.onChange(t,l.current?.checkValidity()??!0)}}),[t]);const v={string:p,password:f,boolean:g,[u.Number]:void 0,[u.Enum]:void 0},y=t!=(e.defaultValue??b[e.type]);return r.createElement(o.Z,null,r.createElement(s.Z,{overlay:(w=e.tooltip,w?r.createElement(c.Z,{id:w},r.createElement(m.Z,{id:w})):r.createElement(r.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...n})=>r.createElement(o.Z.Prepend,{className:"w-40"},r.createElement(o.Z.Text,d({className:"flex-grow-1"},n),r.createElement("span",{className:y?"font-weight-bold":""},r.createElement(m.Z,{id:e.name})),r.createElement("div",{className:"ml-auto"},e.disabled?r.createElement(m.Z,{id:"generic.readonly"}):null,r.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},r.createElement(a.G,{icon:"info"}))))))),e.type===u.Number?r.createElement(E,{value:t,onChange:e=>n(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:l}):e.type===u.Enum?r.createElement(h,{value:t,onChange:e=>n(e),name:e.name,enum:e.enum,disabled:e.disabled}):r.createElement(v[e.type],{value:t,onChange:e=>n(e),disabled:e.disabled,name:e.type,ref:l}),r.createElement(o.Z.Append,null,r.createElement(i.Z,{style:{visibility:!y||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>n(e.defaultValue??b[e.type])},r.createElement(a.G,{icon:"undo"}))));var w}},5619:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(5005),i=n(5293),l=n(3489),o=n(4012),s=n(9049);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){const t=new Map,n=new Map,[m,d]=(0,a.useState)({});(0,a.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{d((t=>({...t,[e]:{}})))}))}),[]);for(const[r,i]of Object.entries(e.fields))n.set(r,i),t.set(i,(0,a.useState)(i.defaultValue??s.Pg[i.type]));let u=!1,p=!1;for(const[e,a]of n){const[n]=t.get(a),r=m[e];if((a.defaultValue??s.Pg[a.type])!=n&&(u=!0),r?.invalid&&(p=!0),u&&p)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?a.createElement(a.Fragment,null):a.createElement("div",null,Object.entries(e.fields).map((([n,r])=>{const{disabled:i,...l}=r;return e.hideDisabled&&i?null:a.createElement(s.ZP,c({key:n},l,{disabled:e.readOnly||i,onChange:(e,a)=>{t.get(r)[1](e),d((e=>({...e,[n]:{...e[n],invalid:!a}})))}}))})),a.createElement("div",{className:"text-center mt-2"},a.createElement(i.Z,{overlay:a.createElement(l.Z,{id:"form-invalid"},a.createElement(o.Z,{id:"generic.invalid_form"})),show:!!p&&void 0},a.createElement(r.Z,{variant:e.readOnly||p?"danger":"success",disabled:e.readOnly||!u||p,onClick:()=>{const a={};for(const[r,i]of n){const[n]=t.get(i);(i.alwaysInclude||n!=(i.defaultValue??s.Pg[i.type])||e.includeAll)&&(a[r]=n)}e.onSave(a)}},a.createElement(o.Z,{id:"generic.save"})))))}},8425:function(e,t,n){n.d(t,{t:function(){return s}});var a=n(7294),r=n(5171),i=n.n(r),l=n(7961);function o(e){return a.createElement(i(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function s(e){return l.ZP.showjson.value?a.createElement("div",{className:"text-left"},a.createElement(o,{obj:e.obj})):a.createElement(a.Fragment,null)}},247:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(7294),r=n(7959),i=n(5005),l=n(5881),o=n(5147),s=n(4012),c=n(8509),m=n(3204),d=n(6846),u=n(3803),p=n(7611),f=n(7961),g=n(9521),E=n(6190),h=n(7428),b=n(6964),v=n(3e3),y=n(9635),w=n(9049),Z=n(5619),S=n(8425),C=n(5855),k=n(5293),N=n(3489);function P(e){return a.createElement(k.Z,{show:e.show,overlay:a.createElement(N.Z,{id:e.tooltipid},a.createElement(s.Z,{id:e.tooltipid}))},e.children)}var R,T=n(7814),x=n(9966),G=n(7977),O=n(96),K=n(7764);function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}function V({pr:e,testmergeinfo:t,repoInfo:n,finalState:l,onRemove:o,onSelectCommit:m,onError:d}){const[p,f]=(0,a.useState)(!1),g=e=>{f((t=>{let n;return n="boolean"==typeof e?e:e(t),n&&B(),n}))},[v,y]=(0,a.useState)(!1),[Z,S]=(0,a.useState)(e.head),[k,N]=(0,a.useState)(l?l[1]:""),[R,V]=(0,a.useState)(null),[j,U]=(0,a.useState)(null),_=(0,a.useContext)(E.g),B=(0,a.useCallback)((async a=>{if(R&&!a)return;const r=await h.Z.getPRCommits({owner:n.remoteRepositoryOwner,repo:n.remoteRepositoryName,pr:e,wantedCommit:t?.targetCommitSha});if(r.code===u.G.ERROR)d(r.error);else{const e=new Map;r.payload[0].forEach((t=>e.set(t.sha,t))),V(e),U(r.payload[1]??null)}}),[n.remoteRepositoryOwner,n.remoteRepositoryName,e.head,t?.targetCommitSha]);(0,a.useEffect)((()=>p?void B():void 0),[p,B]),(0,a.useEffect)((()=>v?void B():void 0),[v,B]),(0,a.useEffect)((()=>g(!1)),[l]),(0,a.useEffect)((()=>N(l?l[1]:"")),[l]);let I;t&&(R?.has(t.targetCommitSha)?I=R?.get(t.targetCommitSha):j?.sha===t.targetCommitSha&&(I=j));const X=[...(R??[]).values()].map((n=>({name:n.name,value:n.sha,current:n.sha===t?.targetCommitSha,latest:n.sha===e.head,disabled:!1})));j&&(X.push({name:"...",value:"",current:!1,latest:!1,disabled:!0}),X.push({name:j.name,value:j.sha,current:j.sha===t?.targetCommitSha,latest:j.sha===e.head,disabled:!1}));const A=(0,b.Kp)(_.instancePermissionSet,c.nX.MergePullRequest),F=(0,b.Kp)(_.instancePermissionSet,c.nX.Read)&&(0,b.Kp)(_.instancePermissionSet,c.nX.UpdateBranch)||!t;return a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"text-right"+(l?" font-weight-bold":"")},"#",e.number),a.createElement("td",null,a.createElement(G.Z,{pill:!0,className:"text-white text-capitalize mr-2",style:{backgroundColor:{closed:"#c93c37",merged:"#8256d0",open:"#347d39"}[e.state]}},e.state),e.testmergelabel?a.createElement(G.Z,{pill:!0,className:"text-white text-capitalize mr-2",variant:"primary"},a.createElement(s.Z,{id:"view.instance.repo.testmergelabel"})):null),a.createElement("td",null,a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer"},e.title)),a.createElement("td",{className:"font-italic"},e.author),a.createElement("td",null,a.createElement("div",{className:"d-flex justify-content-center"},a.createElement("div",{className:"d-inline-block text-nowrap"},l?a.createElement(a.Fragment,null,a.createElement(P,{tooltipid:"generic.no_perm",show:!F&&void 0},a.createElement(i.Z,{variant:"danger",className:"mx-1",onClick:o,disabled:!F},a.createElement(T.G,{icon:"minus",fixedWidth:!0}))),a.createElement(P,{tooltipid:"generic.no_perm",show:(!A||!F)&&void 0},a.createElement(i.Z,{className:"mx-1",onClick:t=>t.shiftKey?m(e.head,"No comment set - Fast Update"):y(!0),variant:l[0]===e.head?"primary":"info",disabled:!A||!F},a.createElement(T.G,{icon:"sync",fixedWidth:!0}))),t?a.createElement(i.Z,{className:"mx-1",onClick:()=>g((e=>!e)),active:p},a.createElement(T.G,{icon:"info",fixedWidth:!0})):null):a.createElement(P,{tooltipid:"generic.no_perm",show:!A&&void 0},a.createElement(i.Z,{variant:"success",className:"mx-1",disabled:!A,onClick:t=>t.shiftKey?m(e.head,"No comment set - Fast Add"):y(!0)},a.createElement(T.G,{icon:"plus",fixedWidth:!0}))))))),a.createElement("tr",null,a.createElement("td",{className:"py-0 border-top-0"}),a.createElement("td",{colSpan:4,className:"py-0 border-top-0"},t?a.createElement(x.Z,{in:p},a.createElement("div",null,a.createElement("div",{className:"py-3"},a.createElement("table",{className:"reset-table"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{className:"text-nowrap"},a.createElement("span",{className:"p-2"},a.createElement(s.Z,{id:"view.instance.repo.tm.by"}))),a.createElement("td",null,t.mergedBy.name)),a.createElement("tr",null,a.createElement("td",{className:"text-nowrap"},a.createElement("span",{className:"p-2"},a.createElement(s.Z,{id:"view.instance.repo.tm.comment"}))),a.createElement("td",null,t.comment)),a.createElement("tr",null,a.createElement("td",{className:"text-nowrap"},a.createElement("span",{className:"p-2"},a.createElement(s.Z,{id:"view.instance.repo.tm.commit"}))),a.createElement("td",null,I?a.createElement(a.Fragment,null,I.name,a.createElement("a",{className:"ml-1",href:I.url,target:"_blank",rel:"noreferrer"},"(",t.targetCommitSha.substring(0,7),")")):t.targetCommitSha.substring(0,7)))))))):null)),a.createElement(r.Z,{show:v,onHide:()=>y(!1),centered:!0,size:"lg"},a.createElement(r.Z.Header,{closeButton:!0},a.createElement(r.Z.Title,null,a.createElement(s.Z,{id:"view.instance.repo.tm.modal.title"}))),a.createElement(r.Z.Body,null,a.createElement("h5",null,a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"text-decoration-none"},e.title)),a.createElement(s.Z,{id:"view.instance.repo.tm.modal.label"}),R?a.createElement(O.Z,{filterOptions:K.Z,search:!0,options:X,value:Z??I?.sha,autoComplete:"on",renderOption:(e,t,n,r)=>a.createElement("button",M({type:"button",className:r+(t.disabled?" font-weight-bold":"")},e),a.createElement(G.Z,null,t.value.substring(0,7)),t.current?a.createElement(G.Z,{variant:"primary",pill:!0,className:"mr-1"},a.createElement(s.Z,{id:"generic.testmerged"})):null,t.latest?a.createElement(G.Z,{variant:"success",pill:!0,className:"mr-1"},a.createElement(s.Z,{id:"generic.latest"})):null,t.name),onChange:e=>S(e)}):a.createElement(C.Z,{text:"loading.repo.commits",width:5,widthUnit:"rem"}),a.createElement(w.ZP,{name:"view.instance.repo.tm.modal.comment",type:w.fS.String,onChange:e=>N(e),defaultValue:t?.comment??""}),a.createElement("span",{className:"text-muted font-italic mt-4 d-inline-block"},a.createElement(s.Z,{id:"view.instance.repo.tm.modal.tip"}))),a.createElement(r.Z.Footer,null,a.createElement(i.Z,{variant:"danger",onClick:()=>y(!1)},a.createElement(s.Z,{id:"generic.close"})),a.createElement(i.Z,{onClick:()=>{Z&&m(Z,k),y(!1)}},a.createElement(s.Z,{id:"generic.save"})))))}function j(){const e=(0,a.useContext)(E.g),t=(0,a.useState)([]),[n,k]=(0,a.useState)(null),[N,T]=(0,a.useState)(!1),[x,G]=(0,a.useState)(!1),[O,K]=(0,a.useState)(!0),[M,j]=(0,a.useState)(null),[U,_]=(0,a.useState)(new Map),[B,I]=(0,a.useState)(!1),[X,A]=(0,a.useState)(!1),[F,H]=(0,a.useState)(new Set),[L,J]=(0,a.useState)(0),[z,D]=(0,a.useState)(0),[$,q]=(0,a.useState)(!1);function Q(e,t){t&&(I(!1),A(!1),H(new Set)),e&&_((n=>{const a=new Map(t?[]:n);return e.revisionInformation?.activeTestMerges.forEach((e=>{const n=a.get(e.number);if(!t){if(!1===n)return;if(n&&!n[0])return}a.set(e.number,[!0,e.targetCommitSha,e.comment??""])})),a}))}async function W(n,a){if(!(0,b.Kp)(e.instancePermissionSet,c.nX.Read))return K(!1),T(!1),Q(!1,a),k(!1);const r=await p.Z.getRepository(e.instance.id);if(T(!1),r.code===u.G.ERROR)if(r.error.code===d.jK.HTTP_DATA_INEGRITY&&r.error.originalErrorMessage?.errorCode===c.jK.RepoCloning)if(G(!1),T(!0),n)g.Z.registerCallback(n.id,W);else{const t=await m.Z.listActiveJobs(e.instance.id,{page:1,pageSize:100});if(t.code===u.G.OK){const e=t.payload.content.sort(((e,t)=>t.id-e.id)).find((e=>e.description.includes("Clone")&&e.description.includes("repository")));e?g.Z.registerCallback(e.id,W):G(!0)}else G(!0)}else(0,v.iT)(t,r.error);else!function(e,n){e.remoteGitProvider===c.Qs.GitHub&&e.remoteRepositoryName&&e.remoteRepositoryOwner&&h.Z.getPRs({repo:e.remoteRepositoryName,owner:e.remoteRepositoryOwner,wantedPRs:e.revisionInformation?.activeTestMerges.map((e=>e.number))}).then((a=>{a.code===u.G.ERROR?(0,v.iT)(t,a.error):(j(a.payload),n&&Q(e,!0))})).catch((e=>{(0,v.iT)(t,new d.ZP(d.jK.APP_FAIL,{jsError:e}))}))}(r.payload),k(r.payload),Q(r.payload,a);K(!1)}if((0,a.useEffect)((()=>{W(void 0,!0)}),[e.instance.id]),(0,a.useEffect)((()=>{}),[n]),N)return a.createElement(a.Fragment,null,x?a.createElement(y.Z,{title:"view.instance.repo.canthookclone"}):null,a.createElement(C.Z,{text:"loading.repo.cloning"}));if(O)return a.createElement(C.Z,null);const Y={origin:{type:w.fS.String,name:"fields.instance.repository.url"},reference:{type:w.fS.String,name:"fields.instance.repository.ref",defaultValue:"main"},accessUser:{type:w.fS.String,name:"fields.instance.repository.gituser",defaultValue:""},accessToken:{type:w.fS.String,name:"fields.instance.repository.gitpassword",defaultValue:""},updateSubmodules:{type:w.fS.Boolean,name:"fields.instance.repository.enablesubmodules",defaultValue:!0}},ee={originCheckoutSha:{type:w.fS.String,name:"fields.instance.repository.origincheckoutsha",disabled:!0,defaultValue:n?n.revisionInformation?.originCommitSha:"",tooltip:"fields.instance.repository.origincheckoutsha.desc"},checkoutSha:{type:w.fS.String,name:"fields.instance.repository.checkoutsha",defaultValue:n?n.revisionInformation?.commitSha:"",tooltip:"fields.instance.repository.checkoutsha.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.SetSha)},reference:{type:w.fS.String,name:"fields.instance.repository.reference",defaultValue:n?n.reference:"",tooltip:"fields.instance.repository.reference.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.SetReference)},committerName:{type:w.fS.String,name:"fields.instance.repository.committerName",defaultValue:n?n.committerName:"",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeCommitter)},committerEmail:{type:w.fS.String,name:"fields.instance.repository.committerEmail",defaultValue:n?n.committerEmail:"",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeCommitter)},accessUser:{type:w.fS.String,name:"fields.instance.repository.accessUser",defaultValue:n?n.accessUser:"",tooltip:"fields.instance.repository.accessUser.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeCredentials)},accessToken:{type:w.fS.Password,name:"fields.instance.repository.accessToken",tooltip:"fields.instance.repository.accessToken.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeCredentials)},clearAccessToken:{type:w.fS.Boolean,name:"fields.instance.repository.clearAccessToken",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeCredentials)},pushTestMergeCommits:{type:w.fS.Boolean,name:"fields.instance.repository.pushTestMergeCommits",defaultValue:!!n&&n.pushTestMergeCommits,tooltip:"fields.instance.repository.pushTestMergeCommits.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeTestMergeCommits)},createGitHubDeployments:{type:w.fS.Boolean,name:"fields.instance.repository.createGitHubDeployments",defaultValue:!!n&&n.createGitHubDeployments,tooltip:"fields.instance.repository.createGitHubDeployments.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeTestMergeCommits)},showTestMergeCommitters:{type:w.fS.Boolean,name:"fields.instance.repository.showTestMergeCommitters",defaultValue:!!n&&n.showTestMergeCommitters,tooltip:"fields.instance.repository.showTestMergeCommitters.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeTestMergeCommits)},autoUpdatesKeepTestMerges:{type:w.fS.Boolean,name:"fields.instance.repository.autoUpdatesKeepTestMerges",defaultValue:!!n&&n.autoUpdatesKeepTestMerges,tooltip:"fields.instance.repository.autoUpdatesKeepTestMerges.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeAutoUpdateSettings)},autoUpdatesSynchronize:{type:w.fS.Boolean,name:"fields.instance.repository.autoUpdatesSynchronize",defaultValue:!!n&&n.autoUpdatesSynchronize,tooltip:"fields.instance.repository.autoUpdatesSynchronize.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeAutoUpdateSettings)},postTestMergeComment:{type:w.fS.Boolean,name:"fields.instance.repository.postTestMergeComment",defaultValue:!!n&&n.postTestMergeComment,tooltip:"fields.instance.repository.postTestMergeComment.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeTestMergeCommits)},updateSubmodules:{type:w.fS.Boolean,name:"fields.instance.repository.updateSubmodules",defaultValue:!!n&&n.updateSubmodules,tooltip:"fields.instance.repository.updateSubmodules.desc",disabled:!(0,b.Kp)(e.instancePermissionSet,c.nX.ChangeSubmoduleUpdate)}},te=new Map;n&&n.revisionInformation?.activeTestMerges.forEach((e=>te.set(e.number,e)));const ne=M?.sort(((e,t)=>te.has(e.number)^te.has(t.number)?te.has(e.number)?-1:1:e.testmergelabel^t.testmergelabel?e.testmergelabel?-1:1:e.number-t.number))??[],ae=ne.map((e=>{const t=U.get(e.number),a=n?n?.revisionInformation?.activeTestMerges.find((t=>t.number===e.number)):void 0;return t?a?a.targetCommitSha!==t[1]?[R.updated,e]:(a.comment??"")!==t[2]?[R.rename,e]:[R.reapply,e]:[R.added,e]:!1===U.get(e.number)&&a?[R.removed,e]:null})).filter((e=>null!==e)),re=ae.sort(((e,t)=>{const n=[R.reapply,R.removed,R.added,R.updated];for(const a of n)if(e[0]===a^t[0]===a)return e[0]===a?-1:1;return 0})),ie=!!n&&"(no branch)"===n.reference,le=ae.some((e=>e[0]!=R.added&&e[0]!=R.reapply)),oe=0===ae.filter((([e])=>e!==R.reapply)).length&&!le&&!B&&!F.size;const se=(0,b.Kp)(e.instancePermissionSet,c.nX.MergePullRequest),ce=(0,b.Kp)(e.instancePermissionSet,c.nX.UpdateBranch),me=(0,b.Kp)(e.instancePermissionSet,c.nX.Read)&&(0,b.Kp)(e.instancePermissionSet,c.nX.UpdateBranch);return a.createElement("div",{className:"text-center"},a.createElement(S.t,{obj:{repositoryInfo:n,PRs:M}}),(0,v.hP)(t),n&&!n.origin?a.createElement(a.Fragment,null,a.createElement("h3",null,a.createElement(s.Z,{id:"view.instance.repo.clone"})),a.createElement(Z.Z,{fields:Y,onSave:async n=>{const a=await p.Z.cloneRepository(e.instance.id,n);a.code===u.G.OK?(await W(a.payload.activeJob??void 0),g.Z.restartLoop()):(0,v.iT)(t,a.error)},includeAll:!0})):a.createElement(a.Fragment,null,a.createElement("h3",null,a.createElement(s.Z,{id:"view.instance.repo.repoinfo"})),function(e){return e?a.createElement("table",{className:"mx-auto text-left"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("span",{className:"mr-3"},a.createElement(s.Z,{id:"view.instance.repo.info.origin"}))),a.createElement("td",null,e.origin)),a.createElement("tr",null,a.createElement("td",null,a.createElement("span",{className:"mr-3"},a.createElement(s.Z,{id:"view.instance.repo.info.owner"}))),a.createElement("td",null,e.remoteRepositoryOwner)),a.createElement("tr",null,a.createElement("td",null,a.createElement("span",{className:"mr-3"},a.createElement(s.Z,{id:"view.instance.repo.info.name"}))),a.createElement("td",null,e.remoteRepositoryName)))):a.createElement(y.Z,{title:"view.instance.repo.norepoinfo"})}(n),a.createElement("hr",null),a.createElement("h3",null,a.createElement(s.Z,{id:"view.instance.repo.reposettings"})),a.createElement(Z.Z,{fields:ee,onSave:async n=>{const{clearAccessToken:a,...r}=n;a&&(r.accessUser="",r.accessToken=""),K(!0);const i=await p.Z.editRepository(e.instance.id,r);K(!1),i.code===u.G.OK?i.payload.activeJob?(K(!0),g.Z.fastmode=5,g.Z.registerCallback(i.payload.activeJob.id,W),g.Z.registerJob(i.payload.activeJob,e.instance.id),g.Z.restartLoop()):await W():(0,v.iT)(t,i.error)}}),a.createElement("hr",null),a.createElement("h3",null,a.createElement(s.Z,{id:"view.instance.repo.testmerges"})),n&&n.remoteGitProvider==c.Qs.Unknown?a.createElement(y.Z,{title:"view.instance.repo.testmerges.badprovider"}):n&&n.remoteGitProvider==c.Qs.GitHub&&!M?a.createElement(C.Z,{text:"loading.repo.prs"}):a.createElement("div",{className:"mx-5"},a.createElement(l.Z,{className:"mb-5"},a.createElement(l.Z.Header,null,a.createElement(s.Z,{id:"view.instance.repo.pending.title"})),a.createElement(l.Z.Body,{className:"text-left"},a.createElement("ul",null,oe?a.createElement("li",{className:"font-weight-lighter font-italic"},a.createElement(s.Z,{id:"view.instance.repo.pending.none"})):a.createElement(a.Fragment,null,n&&ie?a.createElement("li",null,a.createElement(s.Z,{id:"view.instance.repo.pending.reset.nobranch",values:{commit:n.revisionInformation?.originCommitSha.substring(0,7)}})):n&&(le||X)?a.createElement("li",null,a.createElement(s.Z,{id:"view.instance.repo.pending.reset"})):B?a.createElement("li",null,a.createElement(s.Z,{id:"view.instance.repo.pending.update"})):null,n&&n.remoteGitProvider===c.Qs.GitHub?re.map((([e,t])=>{const n=U.get(t.number);if(e===R.reapply&&!le&&!ie)return null;const r=n?n[1]:null;return a.createElement("li",{key:t.number},a.createElement(s.Z,{id:`view.instance.repo.pending.${e}`,values:{number:t.number,commit:r?.substring(0,7),title:t.title}}))})):null,[...F.values()].map((e=>a.createElement("li",{key:e},a.createElement(s.Z,{id:"view.instance.repo.pending.added.manual",values:{number:e}})))))),a.createElement(w.ZP,{name:"view.instance.repo.update",tooltip:"view.instance.repo.update.desc",type:w.fS.Boolean,defaultValue:!!X||!ie&&(!!le||B),disabled:le||ie||X||!ce,onChange:e=>I(e)}),n&&n.remoteGitProvider===c.Qs.GitLab?a.createElement(w.ZP,{name:"view.instance.repo.reset",tooltip:"view.instance.repo.reset.desc",type:w.fS.Boolean,defaultValue:!ie&&X,disabled:ie||!me,onChange:e=>A(e)}):null,f.ZP.manualpr.value||!n||n.remoteGitProvider===c.Qs.GitLab?a.createElement("div",{className:"d-flex mt-5"},a.createElement(w.ZP,{name:"view.instance.repo.manual",tooltip:"view.instance.repo.manual.desc",type:w.fS.Number,min:0,defaultValue:z,onChange:e=>J(e),disabled:!se}),a.createElement(P,{tooltipid:"generic.no_perm",show:!se&&void 0},a.createElement(i.Z,{className:"nowrap ml-3",disabled:L===z||!se,onClick:()=>{H((e=>new Set([...e.values(),L]))),D(L)}},a.createElement(s.Z,{id:"view.instance.repo.addmanual"})))):null),a.createElement(l.Z.Footer,null,a.createElement(i.Z,{variant:"danger",className:"mx-2",disabled:oe,onClick:()=>Q(n,!0)},a.createElement(s.Z,{id:"generic.reset"})),a.createElement(i.Z,{className:"mx-2",disabled:oe,onClick:async function(){const a={};if(n&&ie?a.checkoutSha=n.revisionInformation?.originCommitSha:n&&(le||X)?(a.updateFromOrigin=!0,a.reference=n?.reference):B&&(a.updateFromOrigin=!0),n&&n?.remoteGitProvider===c.Qs.GitHub){const e=[];[...U.entries()].forEach((([t,n])=>{if(!n)return;const[a,r,i]=n;console.log(a,le,ie,a&&!(le||ie)),(!a||le||ie)&&e.push({number:t,targetCommitSha:r,comment:i})})),e.length&&(a.newTestMerges=e)}const r=a.newTestMerges??[];F.forEach((e=>r.push({number:e}))),r.length&&(a.newTestMerges=r),K(!0);const i=await p.Z.editRepository(e.instance.id,a);K(!1),i.code===u.G.OK?i.payload.activeJob?(K(!0),g.Z.fastmode=5,g.Z.registerCallback(i.payload.activeJob.id,(e=>W(e,void 0===e.errorCode&&void 0===e.exceptionDetails))),g.Z.registerJob(i.payload.activeJob,e.instance.id),g.Z.restartLoop()):await W():(0,v.iT)(t,i.error)}},a.createElement(s.Z,{id:"generic.commit"})))),!1===n?a.createElement(y.Z,{title:"view.instance.repo.noautomerge"}):n&&n.remoteGitProvider===c.Qs.GitHub?a.createElement(o.Z,{variant:"dark",striped:!0,hover:!0,className:"text-left"},a.createElement("tbody",null,ne.map((e=>a.createElement(V,{key:e.number,testmergeinfo:te.get(e.number),pr:e,repoInfo:n,finalState:!!U.get(e.number)&&U.get(e.number).slice(1),onRemove:()=>_((t=>new Map(t).set(e.number,!1))),onSelectCommit:(t,n)=>_((a=>new Map(a).set(e.number,[!1,t,n]))),onError:e=>(0,v.iT)(t,e)}))))):null),a.createElement("hr",null),a.createElement("h4",null,a.createElement(s.Z,{id:"view.instance.repo.delete.title"})),a.createElement("span",null,a.createElement(s.Z,{id:"view.instance.repo.delete.desc"})),a.createElement("br",null),a.createElement(i.Z,{variant:"danger",className:"mt-2",onClick:()=>q(!0)},a.createElement(s.Z,{id:"view.instance.repo.delete"})),a.createElement(r.Z,{show:$,onHide:()=>q(!1),centered:!0},a.createElement(r.Z.Header,{closeButton:!0},a.createElement(r.Z.Title,null,a.createElement(s.Z,{id:"view.instance.repo.delete.title"}))),a.createElement(r.Z.Body,null,a.createElement("span",null,a.createElement(s.Z,{id:"generic.areyousure"}))),a.createElement(r.Z.Footer,null,a.createElement(i.Z,{onClick:()=>q(!1)},a.createElement(s.Z,{id:"generic.cancel"})),a.createElement(i.Z,{variant:"danger",onClick:async()=>{q(!1),K(!0);const n=await p.Z.deleteRepository(e.instance.id);K(!1),n.code===u.G.OK?n.payload.activeJob?(K(!0),g.Z.fastmode=5,g.Z.registerCallback(n.payload.activeJob.id,(e=>W(e,void 0===e.errorCode&&void 0===e.exceptionDetails))),g.Z.registerJob(n.payload.activeJob,e.instance.id),g.Z.restartLoop()):await W():(0,v.iT)(t,n.error)}},a.createElement(s.Z,{id:"view.instance.repo.delete"}))))))}!function(e){e.reapply="reapply",e.added="added",e.removed="removed",e.updated="updated",e.rename="renamed"}(R||(R={}))},6190:function(e,t,n){n.d(t,{g:function(){return a}});const a=n(7294).createContext(void 0)},7428:function(e,t,n){var a=n(7162),r=n(7347),i=n(2638),l=n(2527),o=n(6846),s=n(3803),c=n(7961),m=n(6755);async function d(e,t,n){const a=e.endpoint.merge(t,n);return c.ZP.githubtoken.value&&(a.headers.authorization=`token ${c.ZP.githubtoken.value}`),e(a)}async function u(){return c.ZP.githubtoken.value?{type:"token",tokenType:"pat",token:c.ZP.githubtoken.value}:{type:"unauthenticated"}}const p=()=>Object.assign(u.bind(null),{hook:d.bind(null)}),f=new class extends l.TypedEmitter{constructor(){super(),this.apiClient=void 0;const e=i.v.plugin(a.X,r.O);this.apiClient=new e({authStrategy:p,userAgent:"tgstation-server-control-panel/"+m.q4,baseUrl:"https://api.github.com",throttle:{onRateLimit:(e,t)=>(console.warn(`Request quota exhausted for request ${t.method} ${t.url}`),0===t.request.retryCount&&(console.log(`Retrying after ${e} seconds!`),!0)),onAbuseLimit:(e,t)=>{console.warn(`Abuse detected for request ${t.method} ${t.url}`)}}})}async getVersions({owner:e,repo:t,current:n,all:a}){let r,i=0;try{r=await this.apiClient.paginate(this.apiClient.repos.listReleases,{owner:e,repo:t},((e,t)=>e.data.reduce(((e,r)=>{const l=/tgstation-server-v([\d.]+)/.exec(r.name??"");if(!l)return e;if("4"!==l[1][0])return e;const o=l[1];let s=!1;if(o<=n){if(i>=3&&!a)return t(),e;i++,s=!0}return e.push({version:o,body:r.body??"",current:o===n,old:s}),e}),[])))}catch(e){return new s.Z({code:s.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new s.Z({code:s.G.OK,payload:r})}transformPR(e){return{number:e.number,title:e.title,author:e.user?.login??"ghost",state:e.merged_at?"merged":e.state,link:e.html_url,head:e.head.sha,tail:e.base.sha,testmergelabel:e.labels.some((e=>e.name?.toLowerCase().includes("testmerge")||e.name?.toLowerCase().includes("test merge")))}}async getPRs({owner:e,repo:t,wantedPRs:n}){let a=[];try{a=(await this.apiClient.paginate(this.apiClient.pulls.list,{owner:e,repo:t,state:"open"})).map(this.transformPR);for(const r of n??[])if(!a.find((e=>e.number==r))){const n=(await this.apiClient.pulls.get({owner:e,repo:t,pull_number:r})).data;a.push(this.transformPR(n))}}catch(e){return console.error(e),new s.Z({code:s.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new s.Z({code:s.G.OK,payload:a})}async getPRCommits({owner:e,repo:t,pr:n,wantedCommit:a}){let r,i=[];try{if(i=await this.apiClient.paginate(this.apiClient.pulls.listCommits,{owner:e,repo:t,pull_number:n.number,per_page:100},(({data:e})=>e.map((e=>({name:e.commit.message.split("\n")[0],sha:e.sha,url:e.html_url}))))),i.reverse(),a&&!i.find((e=>e.sha===a))){const n=(await this.apiClient.repos.getCommit({owner:e,repo:t,ref:a})).data;r={name:n.commit.message.split("\n")[0],sha:n.sha,url:n.html_url}}}catch(e){return console.error(e),new s.Z({code:s.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new s.Z({code:s.G.OK,payload:[i,r]})}};t.Z=f}}]);
//# sourceMappingURL=247.12130dcdb79fc84575a1.bundle.js.map