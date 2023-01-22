"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[799],{1304:function(t,e,r){r.r(e);var s=r(7294),a=r(5005),o=r(1555),n=r(2258),i=r(4012),l=r(5977),d=r(1895),h=r(6846),c=r(3803),u=r(5631),m=r(6942),p=r(4615),E=r(3e3),w=r(5855);class g extends s.Component{constructor(t,e){if(super(t),!e?.user)throw Error("ChangePassword: this.context?.user is null!");let r;r=t.match.params.id?parseInt(t.match.params.id):e.user.id,this.state={errors:[],password1:"",password2:"",userId:r,currentUser:e.user.id===r,loading:!0},this.submit=this.submit.bind(this)}async componentDidMount(){const t=await m.Z.getUser(this.state.userId);t.code==c.G.OK?this.setState({user:t.payload}):this.addError(t.error),this.setState({loading:!1})}addError(t){this.setState((e=>{const r=Array.from(e.errors);return r.push(t),{errors:r}}))}async submit(t){if(!this.state.user)return void this.addError(new h.ZP(h.jK.APP_FAIL,{jsError:Error("changepassword submit: this.user is falsy")}));t.preventDefault();let e=!1;if(this.state.password1.length<this.context.serverInfo.minimumPasswordLength?(e=!0,this.setState({lengthError:!0})):this.setState({lengthError:!1}),this.state.password2!==this.state.password1?(e=!0,this.setState({matchError:!0})):this.setState({matchError:!1}),e)return;this.setState({pwdload:!0});const r=await m.Z.editUser({password:this.state.password1,id:this.state.user.id});switch(r.code){case c.G.OK:this.state.currentUser&&u.Z.login({type:d.P.Password,userName:this.state.user.name,password:this.state.password1}),this.props.history.goBack();break;case c.G.ERROR:this.addError(r.error),this.setState({pwdload:!1})}}render(){if(this.state.loading)return s.createElement(w.Z,{text:"loading.info"});if(this.state.pwdload)return s.createElement(w.Z,{text:"loading.passwd"});return s.createElement(n.Z,{onSubmit:this.submit},s.createElement(o.Z,{className:"mx-auto",lg:5,md:8},this.state.errors.map(((t,e)=>{if(t)return s.createElement(E.ZP,{key:e,error:t,onClose:()=>this.setState((t=>{const r=Array.from(t.errors);return r[e]=void 0,{errors:r}}))})})),this.state.user?s.createElement(s.Fragment,null,s.createElement("h3",null,s.createElement(i.Z,{id:"view.user.passwd.title"}),this.state.user.name,"(",this.state.user.id,")"),s.createElement("hr",null),s.createElement(n.Z.Group,{controlId:"password1"},s.createElement(n.Z.Label,null,s.createElement(i.Z,{id:"login.password"})),s.createElement(n.Z.Control,{type:"password",onChange:t=>this.setState({password1:t.target.value}),value:this.state.password1,isInvalid:this.state.matchError||this.state.lengthError}),s.createElement(n.Z.Control.Feedback,{type:"invalid"},this.state.lengthError?s.createElement(s.Fragment,null,s.createElement(i.Z,{id:"login.password.repeat.short"}),this.context.serverInfo.minimumPasswordLength):"")),s.createElement(n.Z.Group,{controlId:"password2"},s.createElement(n.Z.Label,null,s.createElement(i.Z,{id:"login.password.repeat"})),s.createElement(n.Z.Control,{type:"password",onChange:t=>this.setState({password2:t.target.value}),value:this.state.password2,isInvalid:this.state.matchError||this.state.lengthError}),s.createElement(n.Z.Control.Feedback,{type:"invalid"},this.state.matchError?s.createElement(i.Z,{id:"login.password.repeat.match"}):"")),s.createElement(a.Z,{type:"submit"},s.createElement(i.Z,{id:"routes.passwd"}))):""))}}g.contextType=p.f,e.default=(0,l.EN)(g)}}]);
//# sourceMappingURL=799.ff6ff360d6f17d723d20.bundle.js.map