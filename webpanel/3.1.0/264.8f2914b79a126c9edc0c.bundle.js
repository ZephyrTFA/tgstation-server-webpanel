"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[264],{9049:function(e,t,n){n.d(t,{fS:function(){return u},Pg:function(){return b},ZP:function(){return v}});var a=n(7814),r=n(7294),i=n(5005),l=n(2258),o=n(2318),s=n(5293),c=n(3489),m=n(4012);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}let u;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(u||(u={}));const p=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),f=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),g=r.forwardRef((function(e,t){const n=Math.random().toString();return r.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},r.createElement(l.Z.Check,{id:n,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),E=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),h=r.forwardRef((function(e,t){return r.createElement(l.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,n])=>r.createElement(m.Z,{id:`${e.name}.${t}`,key:t},(e=>r.createElement("option",{key:n,value:n},e))))))})),b={[u.Enum]:0,[u.Number]:0,[u.Boolean]:!1,[u.String]:"",[u.Password]:""};function v(e){const[t,n]=(0,r.useState)(e.defaultValue??b[e.type]),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(e.defaultValue??b[e.type])}),[e.defaultValue]),(0,r.useEffect)((()=>{switch(l.current&&(l.current.checkValidity()?l.current.classList.remove("is-invalid"):l.current.classList.add("is-invalid")),e.type){case u.Boolean:case u.Enum:case u.Number:case u.String:case u.Password:return void e.onChange(t,l.current?.checkValidity()??!0)}}),[t]);const v={string:p,password:f,boolean:g,[u.Number]:void 0,[u.Enum]:void 0},y=t!=(e.defaultValue??b[e.type]);return r.createElement(o.Z,null,r.createElement(s.Z,{overlay:(w=e.tooltip,w?r.createElement(c.Z,{id:w},r.createElement(m.Z,{id:w})):r.createElement(r.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...n})=>r.createElement(o.Z.Prepend,{className:"w-50 w-xl-40"},r.createElement(o.Z.Text,d({className:"flex-grow-1"},n),r.createElement("span",{className:y?"font-weight-bold":""},r.createElement(m.Z,{id:e.name})),r.createElement("div",{className:"ml-auto"},e.disabled?r.createElement(m.Z,{id:"generic.readonly"}):null,r.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},r.createElement(a.G,{icon:"info"}))))))),e.type===u.Number?r.createElement(E,{value:t,onChange:e=>n(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:l}):e.type===u.Enum?r.createElement(h,{value:t,onChange:e=>n(e),name:e.name,enum:e.enum,disabled:e.disabled}):r.createElement(v[e.type],{value:t,onChange:e=>n(e),disabled:e.disabled,name:e.type,ref:l}),r.createElement(o.Z.Append,null,r.createElement(i.Z,{style:{visibility:!y||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>n(e.defaultValue??b[e.type])},r.createElement(a.G,{icon:"undo"}))));var w}},5619:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(5005),i=n(5293),l=n(3489),o=n(4012),s=n(9049);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){const t=new Map,n=new Map,[m,d]=(0,a.useState)({});(0,a.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{d((t=>({...t,[e]:{}})))}))}),[]);for(const[r,i]of Object.entries(e.fields))n.set(r,i),t.set(i,(0,a.useState)(i.defaultValue??s.Pg[i.type]));let u=!1,p=!1;for(const[e,a]of n){const[n]=t.get(a),r=m[e];if((a.defaultValue??s.Pg[a.type])!=n&&(u=!0),r?.invalid&&(p=!0),u&&p)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?a.createElement(a.Fragment,null):a.createElement("div",null,Object.entries(e.fields).map((([n,r])=>{const{disabled:i,...l}=r;return e.hideDisabled&&i?null:a.createElement(s.ZP,c({key:n},l,{disabled:e.readOnly||i,onChange:(e,a)=>{t.get(r)[1](e),d((e=>({...e,[n]:{...e[n],invalid:!a}})))}}))})),a.createElement("div",{className:"text-center mt-2"},a.createElement(i.Z,{overlay:a.createElement(l.Z,{id:"form-invalid"},a.createElement(o.Z,{id:"generic.invalid_form"})),show:!!p&&void 0},a.createElement(r.Z,{variant:e.readOnly||p?"danger":"success",disabled:e.readOnly||!u||p,onClick:()=>{const a={};for(const[r,i]of n){const[n]=t.get(i);(i.alwaysInclude||n!=(i.defaultValue??s.Pg[i.type])||e.includeAll)&&(a[r]=n)}e.onSave(a)}},a.createElement(o.Z,{id:"generic.save"})))))}},8425:function(e,t,n){n.d(t,{t:function(){return s}});var a=n(7294),r=n(5171),i=n.n(r),l=n(7961);function o(e){return a.createElement(i(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function s(e){return l.ZP.showjson.value?a.createElement("div",{className:"text-left"},a.createElement(o,{obj:e.obj})):a.createElement(a.Fragment,null)}},2741:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(5293),i=n(3489),l=n(4012);function o(e){return a.createElement(r.Z,{show:e.show,overlay:a.createElement(i.Z,{id:e.tooltipid},a.createElement(l.Z,{id:e.tooltipid}))},e.children)}},8264:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var a,r=n(7294),i=n(7959),l=n(5005),o=n(5881),s=n(5147),c=n(4012),m=n(5856),d=n(8509),u=n(3204),p=n(6846),f=n(3803),g=n(7611),E=n(7961),h=n(9521),b=n(6190),v=n(7428),y=n(6964),w=n(3e3),Z=n(9635),S=n(9049),C=n(5619),P=n(8425),k=n(5855),N=n(2741),R=n(7814),T=n(9966),x=n(7977),G=n(96),O=n(7764);function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},K.apply(this,arguments)}function M({pr:e,testmergeinfo:t,repoInfo:n,finalState:a,onRemove:o,onSelectCommit:s,onError:m}){const[u,p]=(0,r.useState)(!1),g=e=>{p((t=>{let n;return n="boolean"==typeof e?e:e(t),n&&_(),n}))},[E,h]=(0,r.useState)(!1),[w,Z]=(0,r.useState)(e.head),[C,P]=(0,r.useState)(a?a[1]:""),[M,V]=(0,r.useState)(null),[j,B]=(0,r.useState)(null),U=(0,r.useContext)(b.g),_=(0,r.useCallback)((async a=>{if(M&&!a)return;const r=await v.Z.getPRCommits({owner:n.remoteRepositoryOwner,repo:n.remoteRepositoryName,pr:e,wantedCommit:t?.targetCommitSha});if(r.code===f.G.ERROR)m(r.error);else{const e=new Map;r.payload[0].forEach((t=>e.set(t.sha,t))),V(e),B(r.payload[1]??null)}}),[n.remoteRepositoryOwner,n.remoteRepositoryName,e.head,t?.targetCommitSha]);(0,r.useEffect)((()=>u?void _():void 0),[u,_]),(0,r.useEffect)((()=>E?void _():void 0),[E,_]),(0,r.useEffect)((()=>g(!1)),[a]),(0,r.useEffect)((()=>P(a?a[1]:"")),[a]);let A;t&&(M?.has(t.targetCommitSha)?A=M?.get(t.targetCommitSha):j?.sha===t.targetCommitSha&&(A=j));const I=[...(M??[]).values()].map((n=>({name:n.name,value:n.sha,current:n.sha===t?.targetCommitSha,latest:n.sha===e.head,disabled:!1})));j&&(I.push({name:"...",value:"",current:!1,latest:!1,disabled:!0}),I.push({name:j.name,value:j.sha,current:j.sha===t?.targetCommitSha,latest:j.sha===e.head,disabled:!1}));const X=(0,y.Kp)(U.instancePermissionSet,d.nX.MergePullRequest),F=(0,y.Kp)(U.instancePermissionSet,d.nX.Read)&&(0,y.Kp)(U.instancePermissionSet,d.nX.UpdateBranch)||!t;return r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{className:"text-right"+(a?" font-weight-bold":"")},"#",e.number),r.createElement("td",null,r.createElement(x.Z,{pill:!0,className:"text-white text-capitalize mr-2",style:{backgroundColor:{closed:"#c93c37",merged:"#8256d0",open:"#347d39"}[e.state]}},e.state),e.testmergelabel?r.createElement(x.Z,{pill:!0,className:"text-white text-capitalize mr-2",variant:"primary"},r.createElement(c.Z,{id:"view.instance.repo.testmergelabel"})):null),r.createElement("td",null,r.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer"},e.title)),r.createElement("td",{className:"font-italic"},e.author),r.createElement("td",null,r.createElement("div",{className:"d-flex justify-content-center"},r.createElement("div",{className:"d-inline-block text-nowrap"},a?r.createElement(r.Fragment,null,r.createElement(N.Z,{tooltipid:"generic.no_perm",show:!F&&void 0},r.createElement(l.Z,{variant:"danger",className:"mx-1",onClick:o,disabled:!F},r.createElement(R.G,{icon:"minus",fixedWidth:!0}))),r.createElement(N.Z,{tooltipid:"generic.no_perm",show:(!X||!F)&&void 0},r.createElement(l.Z,{className:"mx-1",onClick:t=>t.shiftKey?s(e.head,"No comment set - Fast Update"):h(!0),variant:a[0]===e.head?"primary":"info",disabled:!X||!F},r.createElement(R.G,{icon:"sync",fixedWidth:!0}))),t?r.createElement(l.Z,{className:"mx-1",onClick:()=>g((e=>!e)),active:u},r.createElement(R.G,{icon:"info",fixedWidth:!0})):null):r.createElement(N.Z,{tooltipid:"generic.no_perm",show:!X&&void 0},r.createElement(l.Z,{variant:"success",className:"mx-1",disabled:!X,onClick:t=>t.shiftKey?s(e.head,"No comment set - Fast Add"):h(!0)},r.createElement(R.G,{icon:"plus",fixedWidth:!0}))))))),r.createElement("tr",null,r.createElement("td",{className:"py-0 border-top-0"}),r.createElement("td",{colSpan:4,className:"py-0 border-top-0"},t?r.createElement(T.Z,{in:u},r.createElement("div",null,r.createElement("div",{className:"py-3"},r.createElement("table",{className:"reset-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{className:"text-nowrap"},r.createElement("span",{className:"p-2"},r.createElement(c.Z,{id:"view.instance.repo.tm.by"}))),r.createElement("td",null,t.mergedBy.name)),r.createElement("tr",null,r.createElement("td",{className:"text-nowrap"},r.createElement("span",{className:"p-2"},r.createElement(c.Z,{id:"view.instance.repo.tm.comment"}))),r.createElement("td",null,t.comment)),r.createElement("tr",null,r.createElement("td",{className:"text-nowrap"},r.createElement("span",{className:"p-2"},r.createElement(c.Z,{id:"view.instance.repo.tm.commit"}))),r.createElement("td",null,A?r.createElement(r.Fragment,null,A.name,r.createElement("a",{className:"ml-1",href:A.url,target:"_blank",rel:"noreferrer"},"(",t.targetCommitSha.substring(0,7),")")):t.targetCommitSha.substring(0,7)))))))):null)),r.createElement(i.Z,{show:E,onHide:()=>h(!1),centered:!0,size:"lg"},r.createElement(i.Z.Header,{closeButton:!0},r.createElement(i.Z.Title,null,r.createElement(c.Z,{id:"view.instance.repo.tm.modal.title"}))),r.createElement(i.Z.Body,null,r.createElement("h5",null,r.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"text-decoration-none"},e.title)),r.createElement(c.Z,{id:"view.instance.repo.tm.modal.label"}),M?r.createElement(G.Z,{filterOptions:O.Z,search:!0,options:I,value:w??A?.sha,autoComplete:"on",renderOption:(e,t,n,a)=>r.createElement("button",K({type:"button",className:a+(t.disabled?" font-weight-bold":"")},e),r.createElement(x.Z,null,t.value.substring(0,7)),t.current?r.createElement(x.Z,{variant:"primary",pill:!0,className:"mr-1"},r.createElement(c.Z,{id:"generic.testmerged"})):null,t.latest?r.createElement(x.Z,{variant:"success",pill:!0,className:"mr-1"},r.createElement(c.Z,{id:"generic.latest"})):null,t.name),onChange:e=>Z(e)}):r.createElement(k.Z,{text:"loading.repo.commits",width:5,widthUnit:"rem"}),r.createElement(S.ZP,{name:"view.instance.repo.tm.modal.comment",type:S.fS.String,onChange:e=>P(e),defaultValue:t?.comment??""}),r.createElement("span",{className:"text-muted font-italic mt-4 d-inline-block"},r.createElement(c.Z,{id:"view.instance.repo.tm.modal.tip"}))),r.createElement(i.Z.Footer,null,r.createElement(l.Z,{variant:"danger",onClick:()=>h(!1)},r.createElement(c.Z,{id:"generic.close"})),r.createElement(l.Z,{onClick:()=>{w&&s(w,C),h(!1)}},r.createElement(c.Z,{id:"generic.save"})))))}function V(){const e=(0,r.useContext)(b.g),t=(0,r.useState)([]),[n,R]=(0,r.useState)(null),[T,x]=(0,r.useState)(!1),[G,O]=(0,r.useState)(!1),[K,V]=(0,r.useState)(!0),[j,B]=(0,r.useState)(null),[U,_]=(0,r.useState)(new Map),[A,I]=(0,r.useState)(!1),[X,F]=(0,r.useState)(!1),[H,J]=(0,r.useState)(new Set),[L,D]=(0,r.useState)(0),[$,z]=(0,r.useState)(0),[q,Q]=(0,r.useState)(!1),[W,Y]=(0,r.useState)((0,y.$A)(e.instancePermissionSet,d.xb.Compile));function ee(e,t){t&&(I(!1),F(!1),J(new Set)),e&&_((n=>{const a=new Map(t?[]:n);return e.revisionInformation?.activeTestMerges.forEach((e=>{const n=a.get(e.number);if(!t){if(!1===n)return;if(n&&!n[0])return}a.set(e.number,[!0,e.targetCommitSha,e.comment??""])})),a}))}async function te(n,a){if(!(0,y.Kp)(e.instancePermissionSet,d.nX.Read))return V(!1),x(!1),ee(!1,a),R(!1);const r=await g.Z.getRepository(e.instance.id);if(x(!1),r.code===f.G.ERROR)if(r.error.code===p.jK.HTTP_DATA_INEGRITY&&r.error.originalErrorMessage?.errorCode===d.jK.RepoCloning)if(O(!1),x(!0),n)h.Z.registerCallback(n.id,te);else{const t=await u.Z.listActiveJobs(e.instance.id,{page:1,pageSize:100});if(t.code===f.G.OK){const e=t.payload.content.sort(((e,t)=>t.id-e.id)).find((e=>e.description.includes("Clone")&&e.description.includes("repository")));e?h.Z.registerCallback(e.id,te):O(!0)}else O(!0)}else(0,w.iT)(t,r.error);else!function(e,n){e.remoteGitProvider===d.Qs.GitHub&&e.remoteRepositoryName&&e.remoteRepositoryOwner&&v.Z.getPRs({repo:e.remoteRepositoryName,owner:e.remoteRepositoryOwner,wantedPRs:e.revisionInformation?.activeTestMerges.map((e=>e.number))}).then((a=>{a.code===f.G.ERROR?(0,w.iT)(t,a.error):(B(a.payload),n&&ee(e,!0))})).catch((e=>{(0,w.iT)(t,new p.ZP(p.jK.APP_FAIL,{jsError:e}))}))}(r.payload),R(r.payload),ee(r.payload,a);V(!1)}if((0,r.useEffect)((()=>{te(void 0,!0)}),[e.instance.id]),(0,r.useEffect)((()=>{}),[n]),T)return r.createElement(r.Fragment,null,G?r.createElement(Z.Z,{title:"view.instance.repo.canthookclone"}):null,r.createElement(k.Z,{text:"loading.repo.cloning"}));if(K)return r.createElement(k.Z,null);const ne={origin:{type:S.fS.String,name:"fields.instance.repository.url"},reference:{type:S.fS.String,name:"fields.instance.repository.ref",defaultValue:"main"},accessUser:{type:S.fS.String,name:"fields.instance.repository.gituser",defaultValue:""},accessToken:{type:S.fS.String,name:"fields.instance.repository.gitpassword",defaultValue:""},updateSubmodules:{type:S.fS.Boolean,name:"fields.instance.repository.enablesubmodules",defaultValue:!0}},ae=(0,y.$A)(e.instancePermissionSet,d.xb.Compile),re={originCheckoutSha:{type:S.fS.String,name:"fields.instance.repository.origincheckoutsha",disabled:!0,defaultValue:n?n.revisionInformation?.originCommitSha:"",tooltip:"fields.instance.repository.origincheckoutsha.desc"},checkoutSha:{type:S.fS.String,name:"fields.instance.repository.checkoutsha",defaultValue:n?n.revisionInformation?.commitSha:"",tooltip:"fields.instance.repository.checkoutsha.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.SetSha)},reference:{type:S.fS.String,name:"fields.instance.repository.reference",defaultValue:n?n.reference:"",tooltip:"fields.instance.repository.reference.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.SetReference)},committerName:{type:S.fS.String,name:"fields.instance.repository.committerName",defaultValue:n?n.committerName:"",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeCommitter)},committerEmail:{type:S.fS.String,name:"fields.instance.repository.committerEmail",defaultValue:n?n.committerEmail:"",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeCommitter)},accessUser:{type:S.fS.String,name:"fields.instance.repository.accessUser",defaultValue:n?n.accessUser:"",tooltip:"fields.instance.repository.accessUser.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeCredentials)},accessToken:{type:S.fS.Password,name:"fields.instance.repository.accessToken",tooltip:"fields.instance.repository.accessToken.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeCredentials)},clearAccessToken:{type:S.fS.Boolean,name:"fields.instance.repository.clearAccessToken",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeCredentials)},pushTestMergeCommits:{type:S.fS.Boolean,name:"fields.instance.repository.pushTestMergeCommits",defaultValue:!!n&&n.pushTestMergeCommits,tooltip:"fields.instance.repository.pushTestMergeCommits.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeTestMergeCommits)},createGitHubDeployments:{type:S.fS.Boolean,name:"fields.instance.repository.createGitHubDeployments",defaultValue:!!n&&n.createGitHubDeployments,tooltip:"fields.instance.repository.createGitHubDeployments.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeTestMergeCommits)},showTestMergeCommitters:{type:S.fS.Boolean,name:"fields.instance.repository.showTestMergeCommitters",defaultValue:!!n&&n.showTestMergeCommitters,tooltip:"fields.instance.repository.showTestMergeCommitters.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeTestMergeCommits)},autoUpdatesKeepTestMerges:{type:S.fS.Boolean,name:"fields.instance.repository.autoUpdatesKeepTestMerges",defaultValue:!!n&&n.autoUpdatesKeepTestMerges,tooltip:"fields.instance.repository.autoUpdatesKeepTestMerges.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeAutoUpdateSettings)},autoUpdatesSynchronize:{type:S.fS.Boolean,name:"fields.instance.repository.autoUpdatesSynchronize",defaultValue:!!n&&n.autoUpdatesSynchronize,tooltip:"fields.instance.repository.autoUpdatesSynchronize.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeAutoUpdateSettings)},postTestMergeComment:{type:S.fS.Boolean,name:"fields.instance.repository.postTestMergeComment",defaultValue:!!n&&n.postTestMergeComment,tooltip:"fields.instance.repository.postTestMergeComment.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeTestMergeCommits)},updateSubmodules:{type:S.fS.Boolean,name:"fields.instance.repository.updateSubmodules",defaultValue:!!n&&n.updateSubmodules,tooltip:"fields.instance.repository.updateSubmodules.desc",disabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.ChangeSubmoduleUpdate)}},ie=new Map;n&&n.revisionInformation?.activeTestMerges.forEach((e=>ie.set(e.number,e)));const le=j?.sort(((e,t)=>ie.has(e.number)^ie.has(t.number)?ie.has(e.number)?-1:1:e.testmergelabel^t.testmergelabel?e.testmergelabel?-1:1:e.number-t.number))??[],oe=le.map((e=>{const t=U.get(e.number),r=n?n?.revisionInformation?.activeTestMerges.find((t=>t.number===e.number)):void 0;return t?r?r.targetCommitSha!==t[1]?[a.updated,e]:(r.comment??"")!==t[2]?[a.rename,e]:[a.reapply,e]:[a.added,e]:!1===U.get(e.number)&&r?[a.removed,e]:null})).filter((e=>null!==e)),se=oe.sort(((e,t)=>{const n=[a.reapply,a.removed,a.added,a.updated];for(const a of n)if(e[0]===a^t[0]===a)return e[0]===a?-1:1;return 0})),ce=!!n&&"(no branch)"===n.reference,me=oe.some((e=>e[0]!=a.added&&e[0]!=a.reapply)),de=0===oe.filter((([e])=>e!==a.reapply)).length&&!me&&!A&&!H.size;const ue=(0,y.Kp)(e.instancePermissionSet,d.nX.MergePullRequest),pe=(0,y.Kp)(e.instancePermissionSet,d.nX.UpdateBranch),fe=(0,y.Kp)(e.instancePermissionSet,d.nX.Read)&&(0,y.Kp)(e.instancePermissionSet,d.nX.UpdateBranch);return r.createElement("div",{className:"text-center"},r.createElement(P.t,{obj:{repositoryInfo:n,PRs:j}}),(0,w.hP)(t),n&&!n.origin?r.createElement(r.Fragment,null,r.createElement("h3",null,r.createElement(c.Z,{id:"view.instance.repo.clone"})),r.createElement(C.Z,{fields:ne,hideDisabled:!(0,y.Kp)(e.instancePermissionSet,d.nX.Read),onSave:async n=>{const a=await g.Z.cloneRepository(e.instance.id,n);a.code===f.G.OK?(await te(a.payload.activeJob??void 0),h.Z.restartLoop()):(0,w.iT)(t,a.error)},includeAll:!0})):r.createElement(r.Fragment,null,r.createElement("h3",null,r.createElement(c.Z,{id:"view.instance.repo.repoinfo"})),function(e){return e?r.createElement("table",{className:"mx-auto text-left"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("span",{className:"mr-3"},r.createElement(c.Z,{id:"view.instance.repo.info.origin"}))),r.createElement("td",null,e.origin)),r.createElement("tr",null,r.createElement("td",null,r.createElement("span",{className:"mr-3"},r.createElement(c.Z,{id:"view.instance.repo.info.owner"}))),r.createElement("td",null,e.remoteRepositoryOwner)),r.createElement("tr",null,r.createElement("td",null,r.createElement("span",{className:"mr-3"},r.createElement(c.Z,{id:"view.instance.repo.info.name"}))),r.createElement("td",null,e.remoteRepositoryName)))):r.createElement(Z.Z,{title:"view.instance.repo.norepoinfo"})}(n),r.createElement("hr",null),r.createElement("h3",null,r.createElement(c.Z,{id:"view.instance.repo.reposettings"})),r.createElement(C.Z,{fields:re,onSave:async n=>{const{clearAccessToken:a,...r}=n;a&&(r.accessUser="",r.accessToken=""),V(!0);const i=await g.Z.editRepository(e.instance.id,r);V(!1),i.code===f.G.OK?i.payload.activeJob?(V(!0),h.Z.fastmode=5,h.Z.registerCallback(i.payload.activeJob.id,te),h.Z.registerJob(i.payload.activeJob,e.instance.id),h.Z.restartLoop()):await te():(0,w.iT)(t,i.error)}}),r.createElement("hr",null),r.createElement("h3",null,r.createElement(c.Z,{id:"view.instance.repo.testmerges"})),n&&n.remoteGitProvider==d.Qs.Unknown?r.createElement(Z.Z,{title:"view.instance.repo.testmerges.badprovider"}):n&&n.remoteGitProvider==d.Qs.GitHub&&!j?r.createElement(k.Z,{text:"loading.repo.prs"}):r.createElement("div",{className:"mx-5"},r.createElement(o.Z,{className:"mb-5"},r.createElement(o.Z.Header,null,r.createElement(c.Z,{id:"view.instance.repo.pending.title"})),r.createElement(o.Z.Body,{className:"text-left"},r.createElement("ul",null,de?r.createElement("li",{className:"font-weight-lighter font-italic"},r.createElement(c.Z,{id:"view.instance.repo.pending.none"})):r.createElement(r.Fragment,null,n&&ce?r.createElement("li",null,r.createElement(c.Z,{id:"view.instance.repo.pending.reset.nobranch",values:{commit:n.revisionInformation?.originCommitSha.substring(0,7)}})):n&&(me||X)?r.createElement("li",null,r.createElement(c.Z,{id:"view.instance.repo.pending.reset"})):A?r.createElement("li",null,r.createElement(c.Z,{id:"view.instance.repo.pending.update"})):null,n&&n.remoteGitProvider===d.Qs.GitHub?se.map((([e,t])=>{const n=U.get(t.number);if(e===a.reapply&&!me&&!ce)return null;const i=n?n[1]:null;return r.createElement("li",{key:t.number},r.createElement(c.Z,{id:`view.instance.repo.pending.${e}`,values:{number:t.number,commit:i?.substring(0,7),title:t.title}}))})):null,[...H.values()].map((e=>r.createElement("li",{key:e},r.createElement(c.Z,{id:"view.instance.repo.pending.added.manual",values:{number:e}})))))),r.createElement(S.ZP,{name:"view.instance.repo.update",tooltip:"view.instance.repo.update.desc",type:S.fS.Boolean,defaultValue:!!X||!ce&&(!!me||A),disabled:me||ce||X||!pe,onChange:e=>I(e)}),E.ZP.manualreset.value||n&&n.remoteGitProvider===d.Qs.GitLab?r.createElement(S.ZP,{name:"view.instance.repo.reset",tooltip:"view.instance.repo.reset.desc",type:S.fS.Boolean,defaultValue:!ce&&(!!me||X),disabled:ce||!fe||me,onChange:e=>F(e)}):null,E.ZP.manualpr.value||!n||n.remoteGitProvider===d.Qs.GitLab?r.createElement("div",{className:"d-flex mt-5"},r.createElement(S.ZP,{name:"view.instance.repo.manual",tooltip:"view.instance.repo.manual.desc",type:S.fS.Number,min:0,defaultValue:$,onChange:e=>D(e),disabled:!ue}),r.createElement(N.Z,{tooltipid:"generic.no_perm",show:!ue&&void 0},r.createElement(l.Z,{className:"nowrap ml-3",disabled:L===$||!ue,onClick:()=>{J((e=>new Set([...e.values(),L]))),z(L)}},r.createElement(c.Z,{id:"view.instance.repo.addmanual"})))):null,r.createElement(S.ZP,{name:"view.instance.repo.deployAfter",tooltip:"view.instance.repo.deployAfter.desc",type:S.fS.Boolean,defaultValue:!!ae&&W,disabled:!ae,onChange:e=>Y(e)})),r.createElement(o.Z.Footer,null,r.createElement(l.Z,{variant:"danger",className:"mx-2",disabled:de,onClick:()=>ee(n,!0)},r.createElement(c.Z,{id:"generic.cancel"})),r.createElement(l.Z,{className:"mx-2",disabled:de,onClick:async function(){const a={};if(n&&ce?a.checkoutSha=n.revisionInformation?.originCommitSha:n&&(me||X)?(a.updateFromOrigin=!0,a.reference=n?.reference):A&&(a.updateFromOrigin=!0),n&&n?.remoteGitProvider===d.Qs.GitHub){const e=[];[...U.entries()].forEach((([t,n])=>{if(!n)return;const[a,r,i]=n;console.log(a,me,ce,a&&!(me||ce)),(!a||me||ce)&&e.push({number:t,targetCommitSha:r,comment:i})})),e.length&&(a.newTestMerges=e)}const r=a.newTestMerges??[];H.forEach((e=>r.push({number:e}))),r.length&&(a.newTestMerges=r),V(!0);const i=await g.Z.editRepository(e.instance.id,a);if(V(!1),i.code===f.G.OK)if(i.payload.activeJob){if(V(!0),h.Z.fastmode=5,h.Z.registerCallback(i.payload.activeJob.id,(e=>te(e,void 0===e.errorCode&&void 0===e.exceptionDetails))),h.Z.registerJob(i.payload.activeJob,e.instance.id),h.Z.restartLoop(),W){const n=i.payload.activeJob.id,a=setInterval((()=>{"number"==typeof h.Z.jobs.get(n)?.progress&&(m.Z.startCompile(e.instance.id).then((e=>{e.code===f.G.ERROR&&(0,w.iT)(t,e.error)})),clearInterval(a))}),500)}}else await te();else(0,w.iT)(t,i.error)}},r.createElement(c.Z,{id:"generic.commit"})))),!1===n?r.createElement(Z.Z,{title:"view.instance.repo.noautomerge"}):n&&n.remoteGitProvider===d.Qs.GitHub?r.createElement(s.Z,{variant:"dark",striped:!0,hover:!0,className:"text-left"},r.createElement("tbody",null,le.map((e=>r.createElement(M,{key:e.number,testmergeinfo:ie.get(e.number),pr:e,repoInfo:n,finalState:!!U.get(e.number)&&U.get(e.number).slice(1),onRemove:()=>_((t=>new Map(t).set(e.number,!1))),onSelectCommit:(t,n)=>_((a=>new Map(a).set(e.number,[!1,t,n]))),onError:e=>(0,w.iT)(t,e)}))))):null),r.createElement("hr",null),r.createElement("h4",null,r.createElement(c.Z,{id:"view.instance.repo.delete.title"})),r.createElement("span",null,r.createElement(c.Z,{id:"view.instance.repo.delete.desc"})),r.createElement("br",null),r.createElement(l.Z,{variant:"danger",className:"mt-2",onClick:()=>Q(!0)},r.createElement(c.Z,{id:"view.instance.repo.delete"})),r.createElement(i.Z,{show:q,onHide:()=>Q(!1),centered:!0},r.createElement(i.Z.Header,{closeButton:!0},r.createElement(i.Z.Title,null,r.createElement(c.Z,{id:"view.instance.repo.delete.title"}))),r.createElement(i.Z.Body,null,r.createElement("span",null,r.createElement(c.Z,{id:"generic.areyousure"}))),r.createElement(i.Z.Footer,null,r.createElement(l.Z,{onClick:()=>Q(!1)},r.createElement(c.Z,{id:"generic.cancel"})),r.createElement(l.Z,{variant:"danger",onClick:async()=>{Q(!1),V(!0);const n=await g.Z.deleteRepository(e.instance.id);V(!1),n.code===f.G.OK?n.payload.activeJob?(V(!0),h.Z.fastmode=5,h.Z.registerCallback(n.payload.activeJob.id,(e=>te(e,void 0===e.errorCode&&void 0===e.exceptionDetails))),h.Z.registerJob(n.payload.activeJob,e.instance.id),h.Z.restartLoop()):await te():(0,w.iT)(t,n.error)}},r.createElement(c.Z,{id:"view.instance.repo.delete"}))))))}!function(e){e.reapply="reapply",e.added="added",e.removed="removed",e.updated="updated",e.rename="renamed"}(a||(a={}))},6190:function(e,t,n){n.d(t,{g:function(){return a}});const a=n(7294).createContext(void 0)},7428:function(e,t,n){var a=n(7162),r=n(7347),i=n(2638),l=n(2527),o=n(6846),s=n(3803),c=n(7961),m=n(6755);async function d(e,t,n){const a=e.endpoint.merge(t,n);return c.ZP.githubtoken.value&&(a.headers.authorization=`token ${c.ZP.githubtoken.value}`),e(a)}async function u(){return c.ZP.githubtoken.value?{type:"token",tokenType:"pat",token:c.ZP.githubtoken.value}:{type:"unauthenticated"}}const p=()=>Object.assign(u.bind(null),{hook:d.bind(null)}),f=new class extends l.TypedEmitter{constructor(){super(),this.apiClient=void 0;const e=i.v.plugin(a.X,r.O);this.apiClient=new e({authStrategy:p,userAgent:"tgstation-server-control-panel/"+m.q4,baseUrl:"https://api.github.com",throttle:{onRateLimit:(e,t)=>(console.warn(`Request quota exhausted for request ${t.method} ${t.url}`),0===t.request.retryCount&&(console.log(`Retrying after ${e} seconds!`),!0)),onAbuseLimit:(e,t)=>{console.warn(`Abuse detected for request ${t.method} ${t.url}`)}}})}async getVersions({owner:e,repo:t,current:n,all:a}){let r,i=0;try{r=await this.apiClient.paginate(this.apiClient.repos.listReleases,{owner:e,repo:t},((e,t)=>e.data.reduce(((e,r)=>{const l=/tgstation-server-v([\d.]+)/.exec(r.name??"");if(!l)return e;if("4"!==l[1][0]&&"5"!==l[1][0])return e;const o=l[1];let s=!1;if(o<=n){if(i>=3&&!a)return t(),e;i++,s=!0}return e.push({version:o,body:r.body??"",current:o===n,old:s}),e}),[])))}catch(e){return new s.Z({code:s.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new s.Z({code:s.G.OK,payload:r})}transformPR(e){return{number:e.number,title:e.title,author:e.user?.login??"ghost",state:e.merged_at?"merged":e.state,link:e.html_url,head:e.head.sha,tail:e.base.sha,testmergelabel:e.labels.some((e=>e.name?.toLowerCase().includes("testmerge")||e.name?.toLowerCase().includes("test merge")))}}async getPRs({owner:e,repo:t,wantedPRs:n}){let a=[];try{a=(await this.apiClient.paginate(this.apiClient.pulls.list,{owner:e,repo:t,state:"open"})).map(this.transformPR);for(const r of n??[])if(!a.find((e=>e.number==r))){const n=(await this.apiClient.pulls.get({owner:e,repo:t,pull_number:r})).data;a.push(this.transformPR(n))}}catch(e){return console.error(e),new s.Z({code:s.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new s.Z({code:s.G.OK,payload:a})}async getPRCommits({owner:e,repo:t,pr:n,wantedCommit:a}){let r,i=[];try{if(i=await this.apiClient.paginate(this.apiClient.pulls.listCommits,{owner:e,repo:t,pull_number:n.number,per_page:100},(({data:e})=>e.map((e=>({name:e.commit.message.split("\n")[0],sha:e.sha,url:e.html_url}))))),i.reverse(),a&&!i.find((e=>e.sha===a))){const n=(await this.apiClient.repos.getCommit({owner:e,repo:t,ref:a})).data;r={name:n.commit.message.split("\n")[0],sha:n.sha,url:n.html_url}}}catch(e){return console.error(e),new s.Z({code:s.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new s.Z({code:s.G.OK,payload:[i,r]})}};t.Z=f}}]);
//# sourceMappingURL=264.8f2914b79a126c9edc0c.bundle.js.map