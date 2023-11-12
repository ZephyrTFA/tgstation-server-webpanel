"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[740],{90740:function(e,t,a){a.r(t);var n,i,s=a(51417),c=a(51436),l=a(67814),r=a(67294),o=a(15293),d=a(43489),h=a(35005),m=a(44012),p=a(74806),f=a(61767),u=a(48509),E=a(96846),C=a(53803),g=a(96190),S=a(16964),v=a(3e3),y=a(79049),B=a(35619),w=a(8425),x=a(35855);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}!function(e){e[e.Always=0]="Always",e[e.OnError=1]="OnError",e[e.Never=2]="Never"}(n||(n={})),function(e){e[e.Server=0]="Server",e[e.SASL=1]="SASL",e[e.NickServ=2]="NickServ"}(i||(i={}));class Z extends r.Component{constructor(e){super(e),this.state={loading:!0,errors:[],chatBots:[],selectedAddNode:!1,selectedChatBot:null,selectedChannel:null,addBotProvider:u.aM.Discord,flashExport:!1},this.renderChatBotBrowser=this.renderChatBotBrowser.bind(this)}async componentDidMount(){(0,S.$V)(this.context.instancePermissionSet,u.xr.Read)?await this.refresh():this.setState({loading:!1})}addError(e){this.setState((t=>{const a=Array.from(t.errors);return a.push(e),{errors:a}}))}async refresh(){if((0,S.$V)(this.context.instancePermissionSet,u.xr.Read)){this.setState({loading:!0});let e=1,t=[];for(let a=1;a<=e;++a){const n=await f.Z.listChatBots(this.context.instance.id,{page:a});if(n.code!==C.G.OK){this.addError(n.error);break}e=n.payload.totalPages,t=t.concat(n.payload.content)}t.forEach((e=>e.loadedWithConnectionString=!1)),this.setState({chatBots:t,loading:!1})}}async addChatBot(e){let t,a,n;if(!e.name)return void alert(this.props.intl.formatMessage({id:"view.instance.chat.create.missing.name"}));switch(e.provider){case u.aM.Discord:if(a=e,!a.botToken)return void alert(this.props.intl.formatMessage({id:"view.instance.chat.create.missing.token"}));t=`${a.botToken};${a.dmOutputDisplay};${a.basedMeme?"1":"0"};${a.deploymentBranding?"1":"0"}`;break;case u.aM.Irc:if(n=e,!n.address)return void alert(this.props.intl.formatMessage({id:"view.instance.chat.create.missing.address"}));if(!n.nickname)return void alert(this.props.intl.formatMessage({id:"view.instance.chat.create.missing.nick"}));t=`${n.address};${n.port};${n.nickname};${n.useSsl?"1":"0"}`,n.password&&(t+=`;${n.passwordType};${n.password}`);break;default:throw new Error("Bad provider!")}this.setState({loading:!0});const i=await f.Z.createChatBot(this.context.instance.id,{provider:e.provider,name:e.name,enabled:e.enabled,connectionString:t,channelLimit:e.channelLimit,reconnectionInterval:e.reconnectionInterval});if(i.code===C.G.OK){const e=i.payload;e.loadedWithConnectionString=!0;const t=[...this.state.chatBots];t.push(e),this.setState({chatBots:t,selectedChatBot:e,selectedAddNode:!1})}else this.addError(i.error);this.setState({loading:!1})}async reloadChatBot(e){this.setState({loading:!0});const t=await f.Z.getChatBot(this.context.instance.id,e.id);if(t.code===C.G.OK){(e=t.payload).loadedWithConnectionString=!0;const a=[...this.state.chatBots],n=a.indexOf(e);a[n]=e,this.setState({chatBots:a,selectedChatBot:e})}else this.addError(t.error);this.setState({loading:!1})}async editChatBot(e){this.setState({loading:!0});let t=this.state.selectedChatBot;const a=await f.Z.updateChatBot(this.context.instance.id,{...e,id:t.id});if(a.code===C.G.OK){if(a.payload){const e=[...this.state.chatBots],n=e.indexOf(t);t=a.payload,t.loadedWithConnectionString=!0,e[n]=t,this.setState({chatBots:e,selectedChatBot:t})}}else this.addError(a.error);this.setState({loading:!1})}async addChatChannel(e,t){if(!t.channelData)return void alert(this.props.intl.formatMessage({id:"view.instance.chat.create.missing.channel"}));if(e.provider===u.aM.Discord){if(!new RegExp("^[0-9]+$").test(t.channelData))return void alert(this.props.intl.formatMessage({id:"view.instance.chat.create.invalid.discord"}))}this.setState({loading:!0});const a=[...e.channels??[]];a.push(t);const n=await f.Z.updateChatBot(this.context.instance.id,{channels:a,id:e.id});if(n.code===C.G.OK){if(n.payload){const t=[...this.state.chatBots],a=t.indexOf(e);(e=n.payload).loadedWithConnectionString=!0,t[a]=e,this.setState({chatBots:t,selectedChatBot:e,selectedChannel:e.channels[e.channels.length-1]})}}else this.addError(n.error);this.setState({loading:!1})}async editChatChannel(e,t){this.setState({loading:!0});const a=[...e.channels??[]],n=a[a.indexOf(this.state.selectedChannel)];Object.assign(n,t);const i=await f.Z.updateChatBot(this.context.instance.id,{channels:a,id:e.id});if(i.code===C.G.OK){if(i.payload){const t=[...this.state.chatBots],a=t.indexOf(e);(e=i.payload).loadedWithConnectionString=!0,t[a]=e,this.setState({chatBots:t,selectedChatBot:e})}}else this.addError(i.error);this.setState({loading:!1})}async deleteChatChannel(e,t){if(!confirm(this.props.intl.formatMessage({id:"view.instance.chat.delete.channel.confirm"},{channelName:t.tag??t.channelData})))return;this.setState({loading:!0});const a=[...e.channels??[]],n=a.indexOf(t);a.splice(n,1);const i=await f.Z.updateChatBot(this.context.instance.id,{channels:a,id:e.id});if(i.code===C.G.OK){if(i.payload){const t=[...this.state.chatBots],a=t.indexOf(e);(e=i.payload).loadedWithConnectionString=!0,t[a]=e,this.setState({chatBots:t,selectedChatBot:e,selectedChannel:null})}}else this.addError(i.error);this.setState({loading:!1})}async deleteChatBot(e){if(!confirm(this.props.intl.formatMessage({id:"view.instance.chat.delete.confirm"},{botName:e.name})))return;this.setState({loading:!0});const t=await f.Z.deleteChatBot(this.context.instance.id,e.id);if(t.code===C.G.OK){const t=[...this.state.chatBots],a=t.indexOf(e);t.splice(a,1),this.setState({chatBots:t,selectedChatBot:null})}else this.addError(t.error);this.setState({loading:!1})}render(){if(this.state.loading)return r.createElement(x.Z,{text:"loading.chat"});const e=(0,S.$V)(this.context.instancePermissionSet,u.xr.Read),t=(0,S.$V)(this.context.instancePermissionSet,u.xr.Create);return r.createElement("div",{className:"text-center"},r.createElement(w.t,{obj:this.state}),r.createElement("h1",null,r.createElement(m.Z,{id:"view.instance.chat"})),this.state.errors.map(((e,t)=>{if(e)return r.createElement(v.ZP,{key:t,error:e,onClose:()=>this.setState((e=>{const a=Array.from(e.errors);return a[t]=void 0,{errors:a}}))})})),r.createElement("div",{className:"d-flex flex-row"},r.createElement("div",{className:"text-left",style:{paddingRight:"16px",maxHeight:"800px",minWidth:"300px",overflowY:"scroll"}},r.createElement("ul",{className:"browser-ul"},e?this.state.chatBots.map(this.renderChatBotBrowser):r.createElement(r.Fragment,null),t?r.createElement("li",{className:"browser-li"},r.createElement(o.Z,{placement:"top",show:!(this.state.chatBots.length<this.context.instance.chatBotLimit)&&void 0,overlay:e=>r.createElement(d.Z,b({id:"too-many-chat-bots"},e),r.createElement(m.Z,{id:"view.instance.chat.limit",values:{max:this.context.instance.chatBotLimit}}))},r.createElement(h.Z,{className:"nowrap",disabled:this.state.chatBots.length>=this.context.instance.chatBotLimit,onClick:()=>this.setState({selectedChatBot:null,selectedChannel:null,selectedAddNode:!(this.state.selectedAddNode&&!this.state.selectedChatBot)})},r.createElement(l.G,{icon:c.r8p}),"\xa0",r.createElement(m.Z,{id:"view.instance.chat.create"})))):r.createElement(r.Fragment,null))),r.createElement("div",{className:"flex-fill flex-column text-center align-self-center",style:{padding:"16px"}},this.state.selectedChannel?this.renderAddEditChannel(!1):this.state.selectedChatBot&&!this.state.selectedAddNode?this.renderAddEditChatBot(!1):this.state.selectedAddNode?this.state.selectedChatBot?this.renderAddEditChannel(!0):this.renderAddEditChatBot(!0):r.createElement("h4",null,r.createElement(m.Z,{id:"view.instance.chat.select_item"})))))}renderChatBotBrowser(e){const t=this.state.selectedChatBot===e,a=(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteChannels);return r.createElement("li",{key:e.id,className:"browser-li"},r.createElement(h.Z,{variant:t?"secondary":"primary",onClick:()=>this.setState((a=>({selectedChatBot:!t||this.state.selectedChannel||this.state.selectedAddNode?e:null,selectedChannel:null,selectedAddNode:!1,addBotProvider:t?a.addBotProvider:e.provider}))),className:"nowrap"},r.createElement(l.G,{icon:e.provider===u.aM.Discord?s.omb:c.Mzg}),"\xa0",e.name),a&&t?r.createElement("ul",{className:"browser-ul"},e.channels.map((e=>{const t=this.state.selectedChannel===e;return r.createElement("li",{key:e.channelData,className:"browser-li"},r.createElement(h.Z,{variant:t?"secondary":"primary",onClick:()=>this.setState({selectedChannel:t?null:e}),className:"nowrap"},r.createElement(l.G,{icon:c.olY}),"\xa0",e.tag?`(${e.tag})`:e.channelData))})),r.createElement("li",{className:"browser-li"},r.createElement(o.Z,{placement:"top",show:!(e.channels.length<e.channelLimit)&&void 0,overlay:t=>r.createElement(d.Z,b({id:"too-many-chat-channels"},t),r.createElement(m.Z,{id:"view.instance.chat.limit.channels",values:{max:e.channelLimit}}))},r.createElement(h.Z,{className:"nowrap",disabled:e.channels.length>=e.channelLimit,onClick:()=>this.setState({selectedChannel:null,selectedAddNode:!(this.state.selectedAddNode&&!this.state.selectedChannel)})},r.createElement(l.G,{icon:c.r8p}),"\xa0",r.createElement(m.Z,{id:"view.instance.chat.create.channel"}))))):r.createElement(r.Fragment,null))}async exportChannelsToClipboard(){const e=this.state.selectedChatBot.channels,t=JSON.stringify(e);await navigator.clipboard.writeText(t),this.setState({flashExport:!0}),await new Promise((e=>setTimeout(e,2e3))),this.setState({flashExport:!1})}async importChannelsFromClipboard(){let e,t;if(this.setState({loading:!0}),navigator.clipboard.readText)e=await navigator.clipboard.readText();else if(e=prompt("Your browser doesn't allow clipboard reading. Please paste your entry here."),!e)return void this.setState({loading:!1});try{t=JSON.parse(e)}catch(e){const t=e instanceof Error?{jsError:e}:{void:!0};return this.addError(new E.ZP(E.jK.BAD_CHANNELS_JSON,t)),void this.setState({loading:!1})}let a=this.state.selectedChatBot;const n=await f.Z.updateChatBot(this.context.instance.id,{channels:t,id:a.id});if(n.code===C.G.OK){if(n.payload){const e=[...this.state.chatBots],t=e.indexOf(a);a=n.payload,a.loadedWithConnectionString=!0,e[t]=a,this.setState({chatBots:e,selectedChatBot:a})}}else this.addError(n.error);this.setState({loading:!1})}renderAddEditChatBot(e){const t={type:y.fS.Enum,name:"fields.instance.chat.provider",defaultValue:this.state.addBotProvider,enum:u.aM,noLocalize:!0},a={...t,onChange:e=>{this.setState({addBotProvider:e})}},p={provider:{...t},name:{type:y.fS.String,name:"fields.instance.chat.name",tooltip:"fields.instance.chat.name.tip"},enabled:{type:y.fS.Boolean,name:"fields.instance.chat.enabled",tooltip:"fields.instance.chat.enabled.tip",defaultValue:!0},channelLimit:{type:y.fS.Number,name:"fields.instance.chat.limit",tooltip:"fields.instance.chat.limit.tip",min:0,max:65535,defaultValue:10},reconnectionInterval:{type:y.fS.Number,name:"fields.instance.chat.reconnect",tooltip:"fields.instance.chat.reconnect.tip",min:0,defaultValue:5}};if(e){const e={...p,botToken:{type:y.fS.Password,name:"fields.instance.chat.create.discord.token",tooltip:"fields.instance.chat.create.discord.token.tip"},dmOutputDisplayType:{type:y.fS.Enum,name:"fields.instance.chat.create.discord.output",tooltip:"fields.instance.chat.create.discord.output.tip",defaultValue:n.Always,enum:n,noLocalize:!0},basedMeme:{type:y.fS.Boolean,name:"fields.instance.chat.create.discord.based",tooltip:"fields.instance.chat.create.discord.based.tip",defaultValue:!0},deploymentBranding:{type:y.fS.Boolean,name:"fields.instance.chat.create.discord.branding",tooltip:"fields.instance.chat.create.discord.branding.tip",defaultValue:!0}},t={...p,address:{type:y.fS.String,name:"fields.instance.chat.create.irc.address",tooltip:"fields.instance.chat.create.irc.address.tip"},port:{type:y.fS.Number,name:"fields.instance.chat.create.irc.port",min:1,max:65535,defaultValue:6697},nickname:{type:y.fS.String,name:"fields.instance.chat.create.irc.nick"},password:{type:y.fS.Password,name:"fields.instance.chat.create.irc.pass",tooltip:"fields.instance.chat.create.irc.pass.tip"},passwordType:{type:y.fS.Enum,name:"fields.instance.chat.create.irc.passtype",defaultValue:i.SASL,enum:i,noLocalize:!0},useSsl:{type:y.fS.Boolean,name:"fields.instance.chat.create.irc.ssl",tooltip:"fields.instance.chat.create.irc.ssl.tip"}};return p.provider.disabled=!0,r.createElement(r.Fragment,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.chat.create"})),r.createElement("hr",null),r.createElement(y.ZP,a),r.createElement("hr",null),r.createElement(B.Z,{key:`bot-create-form-${this.state.addBotProvider}`,hideDisabled:!0,includeAll:!0,saveMessageId:"fields.instance.chat.create.save",fields:this.state.addBotProvider===u.aM.Discord?e:t,onSave:e=>{this.addChatBot(e)}}))}const f=this.state.selectedChatBot,E=(0,S.$V)(this.context.instancePermissionSet,u.xr.ReadConnectionString),C=(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteConnectionString),g={...p,connectionString:{type:y.fS.String,name:"fields.instance.chat.edit.connection",tooltip:"fields.instance.chat.edit.connection.tip",defaultValue:E?f.loadedWithConnectionString?f.connectionString:this.props.intl.formatMessage({id:"fields.instance.chat.edit.connection.unloaded"}):this.props.intl.formatMessage({id:"fields.instance.chat.edit.connection.deny"}),disabled:!C}};g.name.defaultValue=f.name,g.enabled.defaultValue=f.enabled,g.channelLimit.defaultValue=f.channelLimit,g.reconnectionInterval.defaultValue=f.reconnectionInterval,g.name.disabled=!(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteName),g.enabled.disabled=!(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteEnabled),g.channelLimit.disabled=!(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteChannelLimit),g.reconnectionInterval.disabled=!(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteReconnectionInterval);const v=(0,S.$V)(this.context.instancePermissionSet,u.xr.Delete),w=(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteChannels);return r.createElement(r.Fragment,null,r.createElement("h5",null,r.createElement(l.G,{icon:f.provider===u.aM.Discord?s.omb:c.Mzg}),"\xa0",f.name),r.createElement("hr",null),f.loadedWithConnectionString?r.createElement(r.Fragment,null):r.createElement(r.Fragment,null,r.createElement(o.Z,{placement:"top",show:!E&&void 0,overlay:e=>r.createElement(d.Z,b({id:"chat-bot-read-conn-perm"},e),r.createElement(m.Z,{id:"view.instance.chat.reload.deny"}))},r.createElement(h.Z,{className:"nowrap",disabled:!E,onClick:()=>{this.reloadChatBot(f)}},r.createElement(m.Z,{id:"view.instance.chat.reload"}))),r.createElement("br",null),r.createElement("br",null)),r.createElement(B.Z,{fields:g,onSave:e=>{this.editChatBot(e)}}),r.createElement("hr",null),r.createElement("div",{className:"text-center mb-3"},r.createElement(o.Z,{placement:"top",show:!v&&void 0,overlay:e=>r.createElement(d.Z,b({id:"chat-bot-delete-perm"},e),r.createElement(m.Z,{id:"view.instance.chat.delete.deny"}))},r.createElement(h.Z,{className:"nowrap mx-2",disabled:!v,variant:"danger",onClick:()=>{this.deleteChatBot(f)}},r.createElement(l.G,{icon:c.$aW}),"\xa0",r.createElement(m.Z,{id:"view.instance.chat.delete"}))),navigator.clipboard?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:"nowrap mx-2",variant:this.state.flashExport?"success":"secondary",onClick:()=>{this.exportChannelsToClipboard()}},this.state.flashExport?r.createElement(l.G,{icon:c.LEp}):r.createElement(r.Fragment,null,r.createElement(l.G,{icon:c.Yjj}),r.createElement(l.G,{icon:c.acZ})),"\xa0",r.createElement(m.Z,{id:"view.instance.chat.channels.export"})),r.createElement(o.Z,{placement:"top",show:!w&&void 0,overlay:e=>r.createElement(d.Z,b({id:"chat-bot-edit-channels-perm"},e),r.createElement(m.Z,{id:"view.instance.chat.channels.deny"}))},r.createElement(h.Z,{className:"nowrap mx-2",disabled:!w,variant:"primary",onClick:()=>{this.importChannelsFromClipboard()}},r.createElement(l.G,{icon:c.Yjj}),r.createElement(l.G,{icon:c.eFW}),"\xa0",r.createElement(m.Z,{id:"view.instance.chat.channels.import"})))):null))}renderAddEditChannel(e){const t=this.state.selectedChatBot,a={tag:{type:y.fS.String,name:"fields.instance.chat.channel.tag",tooltip:"fields.instance.chat.channel.tag.tip"},isAdminChannel:{type:y.fS.Boolean,name:"fields.instance.chat.channel.admin",tooltip:"fields.instance.chat.channel.admin.tip"},isWatchdogChannel:{type:y.fS.Boolean,name:"fields.instance.chat.channel.watchdog",tooltip:"fields.instance.chat.channel.watchdog.tip"},isUpdatesChannel:{type:y.fS.Boolean,name:"fields.instance.chat.channel.updates",tooltip:"fields.instance.chat.channel.updates.tip"},isSystemChannel:{type:y.fS.Boolean,name:"fields.instance.chat.channel.system",tooltip:"fields.instance.chat.channel.system.tip"}},n=(0,S.$V)(this.context.instancePermissionSet,u.xr.WriteChannels);if(e){const e={channelData:{type:y.fS.String,name:"fields.instance.chat.channel.discord",tooltip:"fields.instance.chat.channel.discord.tip"},...a},n={channelData:{type:y.fS.String,name:"fields.instance.chat.channel.irc",tooltip:"fields.instance.chat.channel.irc.tip",defaultValue:"#"},...a};return r.createElement(r.Fragment,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.chat.create.channel"})),r.createElement("hr",null),r.createElement(B.Z,{key:`bot-channel-create-form-${t.provider}`,includeAll:!0,saveMessageId:"fields.instance.chat.create.channel",fields:t.provider===u.aM.Discord?e:n,onSave:e=>{this.addChatChannel(t,e)}}))}const i=this.state.selectedChannel;return a.isAdminChannel.defaultValue=i.isAdminChannel,a.isUpdatesChannel.defaultValue=i.isUpdatesChannel,a.isWatchdogChannel.defaultValue=i.isWatchdogChannel,a.isSystemChannel.defaultValue=i.isSystemChannel,a.tag.defaultValue=i.tag,r.createElement(r.Fragment,{key:t.channels.indexOf(i)},r.createElement("h5",null,i.channelData,i.tag?` (${i.tag})`:""),r.createElement("hr",null),r.createElement(B.Z,{fields:a,onSave:e=>{const a={channelData:this.state.selectedChannel.channelData,...e};this.editChatChannel(t,a)}}),r.createElement("hr",null),r.createElement(o.Z,{placement:"top",show:!n&&void 0,overlay:e=>r.createElement(d.Z,b({id:"chat-bot-delete-perm"},e),r.createElement(m.Z,{id:"view.instance.chat.delete.channel.deny"}))},r.createElement(h.Z,{className:"nowrap",disabled:!n,variant:"danger",onClick:()=>{this.deleteChatChannel(t,i)}},r.createElement(m.Z,{id:"view.instance.chat.delete.channel"}))))}}Z.contextType=g.g,t.default=(0,p.ZP)(Z)}}]);
//# sourceMappingURL=740.c559d8d792a698970b20.bundle.js.map