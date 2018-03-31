if (self.CavalryLogger) { CavalryLogger.start_js(["eqNxI"]); }

__d("ChatTypeaheadConstants",[],(function a(b,c,d,e,f,g){var h=Object.freeze({USER_TYPE:"user",THREAD_TYPE:"thread",FRIEND_TYPE:"friend",NON_FRIEND_TYPE:"non_friend",FB4C_TYPE:"fb4c",PAGE_TYPE:"page",MEETING_ROOM_PAGE_TYPE:"meeting_room_page",COMMERCE_PAGE_TYPE:"commerce_page",HEADER_TYPE:"header",INTERNAL_BOT_PAGE_TYPE:"internal_bot_page",GAME_TYPE:"game"});f.exports=h}),null);
__d("MessengerGroupCreateDialog.react",["BootloadOnRender.react","JSResource","LazyComponent.react","React"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;j.prototype.render=function(){return c("React").createElement(c("BootloadOnRender.react"),{component:c("React").createElement(c("LazyComponent.react"),{entryPoint:this.props.entryPoint,isShown:this.props.isShown,onClose:this.props.onClose}),loader:c("JSResource")("MessengerGroupCreateDialogImpl.react").__setRef("MessengerGroupCreateDialog.react"),placeholder:c("React").createElement("div",null)})};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d("MessengerGroupCreateDialogReact.bs",["bs_js_boolean","ReasonReact.bs","MessengerGroupCreateDialog.react"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l){return c("ReasonReact.bs").wrapJsForReason(c("MessengerGroupCreateDialog.react"),{entryPoint:i,isShown:c("bs_js_boolean").to_js_boolean(j),onClose:k},l)}g.make=h}),null);
__d("MessengerGroupCreationEntryPoint",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CHAT_TAB:"chat_tab_add_people",JEWEL:"jewel_new_message",CHAT_SIDEBAR:"chat_sidebar_new_message",GCF_JEWEL:"jewel_new_group",GCF_CHAT_SIDEBAR:"chat_sidebar_new_group",GCF_SHARE_FLOW:"chat_share_message_to_messenger"})}),null);
__d("ChatSidebarGroupCreateButtonReact.bs",["cx","fbt","bs_block","bs_curry","React","LinkReact.bs","ReasonReact.bs","joinClasses","bs_js_primitive","MessengerGroupCreateDialogReact.bs","MessengerGroupCreationEntryPoint"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("ReasonReact.bs").reducerComponent("ChatSidebarGroupCreateButtonReact"),k=c("MessengerGroupCreationEntryPoint").GCF_CHAT_SIDEBAR;function l(o){var p=o[1];if(p!==0)return c("ReasonReact.bs").element(0,0,c("MessengerGroupCreateDialogReact.bs").make(k,1,function(){return c("bs_curry")._1(o[3],1)},[]));else return null}function m(o,p){__p&&__p();var q=j.slice();q[9]=function(r){var s=i._("Create New Group"),t="_1-4-",u=o?c("joinClasses")(t,o[0]):t;return c("React").createElement("div",{className:"_46fv"},l(r),c("ReasonReact.bs").element(0,0,c("LinkReact.bs").make([s],[u],["tooltip"],[s],0,["below"],0,0,[function(){return c("bs_curry")._1(r[3],0)}],0,0,0,0,0,0,0,[])))};q[10]=function(){return 0};q[12]=function(r,p){if(r!==0)return c("bs_block").__(0,[0]);else return c("bs_block").__(0,[1])};return q}var n=c("ReasonReact.bs").wrapReasonForJs(j,function(o){return m(c("bs_js_primitive").null_undefined_to_opt(o.className),[])});g.component=j;g.entryPoint=k;g.renderDialog=l;g.make=m;g.jsComponent=n}),null);
__d("ChatSidebarGroupCreateButtonReactComponent",["ChatSidebarGroupCreateButtonReact.bs"],(function a(b,c,d,e,f,g){"use strict";var h=c("ChatSidebarGroupCreateButtonReact.bs").jsComponent;f.exports=h}),null);