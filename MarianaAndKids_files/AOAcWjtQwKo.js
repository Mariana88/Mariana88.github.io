if (self.CavalryLogger) { CavalryLogger.start_js(["JW3uk"]); }

__d("VideoClickForMoreOverlay",["cx","CSS","EventListener","VideoPlayerLoggerSource","VideoPlayerUIComponentDrawer","DOM"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j,k,l){"use strict";__p&&__p();this.$VideoClickForMoreOverlay1=j;this.$VideoClickForMoreOverlay2=k;this.$VideoClickForMoreOverlay3=false;this.$VideoClickForMoreOverlay4=this.$VideoClickForMoreOverlay1.registerDrawer(c("VideoPlayerUIComponentDrawer").priorities.ClickForMore,l?i.REDESIGN_HEIGHT:i.DEFAULT_HEIGHT);this.$VideoClickForMoreOverlay4.addListener("reposition",this.$VideoClickForMoreOverlay5.bind(this));this.$VideoClickForMoreOverlay1.addListener("VideoControls/visibilityUpdate",function(n){var m=n.areControlsVisible;return this.$VideoClickForMoreOverlay6(m)}.bind(this));var m=this.$VideoClickForMoreOverlay1.getOption("VideoControls","areControlsVisible");if(m)this.$VideoClickForMoreOverlay6(m);this.$VideoClickForMoreOverlay1.addListener("stateChange",this.$VideoClickForMoreOverlay7.bind(this));c("EventListener").listen(this.$VideoClickForMoreOverlay2,"click",function(){return this.$VideoClickForMoreOverlay8()}.bind(this))}i.prototype.$VideoClickForMoreOverlay5=function(j){"use strict";c("DOM").setAttributes(this.$VideoClickForMoreOverlay2,{style:"bottom:"+j+"px;"})};i.prototype.$VideoClickForMoreOverlay6=function(j){"use strict";this.$VideoClickForMoreOverlay3=j;this.$VideoClickForMoreOverlay7()};i.prototype.$VideoClickForMoreOverlay7=function(){"use strict";var j=!this.$VideoClickForMoreOverlay1.isPlayerVersion("silvercity")&&!this.$VideoClickForMoreOverlay1.getIsInChannel()&&this.$VideoClickForMoreOverlay1.getSource()!==c("VideoPlayerLoggerSource").TAHOE&&this.$VideoClickForMoreOverlay1.isState("playing");if(j&&this.$VideoClickForMoreOverlay3)this.$VideoClickForMoreOverlay9();else this.$VideoClickForMoreOverlay10()};i.prototype.$VideoClickForMoreOverlay8=function(){"use strict";this.$VideoClickForMoreOverlay1.clickVideo()};i.prototype.$VideoClickForMoreOverlay9=function(){"use strict";c("CSS").removeClass(this.$VideoClickForMoreOverlay2,"_2is8");this.$VideoClickForMoreOverlay4.reserve()};i.prototype.$VideoClickForMoreOverlay10=function(){"use strict";c("CSS").addClass(this.$VideoClickForMoreOverlay2,"_2is8");this.$VideoClickForMoreOverlay4.release()};i.DEFAULT_HEIGHT=18;i.REDESIGN_HEIGHT=38;f.exports=i}),null);
__d("VideoReshareLink.react",["ix","cx","fbt","CenteredContainer.react","Image.react","Link.react","React","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){"use strict";var k,l;k=babelHelpers.inherits(m,c("React").PureComponent);l=k&&k.prototype;m.prototype.render=function(){return c("React").createElement(c("Link.react"),{className:"_2pi9",href:this.props.shareURI,rel:"dialog",role:"link"},c("React").createElement("div",{className:"_2a_3"},c("React").createElement("div",{className:"_2a_5"}),c("React").createElement("div",{className:"_2a_c _2a_f"},c("React").createElement(c("Image.react"),{src:h("115553"),size:"24"}))),c("React").createElement("div",{className:"_63kv"},c("React").createElement(c("CenteredContainer.react"),{horizontal:false,fullHeight:true,vertical:true},j._("Share"))))};function m(){k.apply(this,arguments)}f.exports=m}),null);
__d("VideoWatchAgainLink.react",["ix","cx","fbt","CenteredContainer.react","Image.react","Link.react","React","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l;k=babelHelpers.inherits(m,c("React").PureComponent);l=k&&k.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=l.constructor).call.apply(n,[this].concat(q)),this.$VideoWatchAgainLink1=function(){this.props.vpc.clickVideo()}.bind(this),o}m.prototype.render=function(){return c("React").createElement(c("Link.react"),{className:"_2pi9",onClick:this.$VideoWatchAgainLink1,role:"link"},c("React").createElement("div",{className:"_2a_3"},c("React").createElement("div",{className:"_2a_5"}),c("React").createElement("div",{className:"_2a_c _2a_d"},c("React").createElement(c("Image.react"),{src:h("115481"),size:"24"}))),c("React").createElement("div",{className:"_63kv"},c("React").createElement(c("CenteredContainer.react"),{horizontal:false,fullHeight:true,vertical:true},j._("Watch Again"))))};f.exports=m}),null);
__d("VideoEndScreenWithActions.react",["cx","BootloadedComponent.react","CenteredContainer.react","CSS","JSResource","List.react","React","SubscriptionsHandler","VideoReshareLink.react","VideoWatchAgainLink.react","QE2Logger"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("BootloadedComponent.react").create(c("JSResource")("VideoEndScreenPeopleSuggestions.react").__setRef("VideoEndScreenWithActions.react")),l="video_end_screen_actions";i=babelHelpers.inherits(m,c("React").Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.state={playerState:"",isInTahoe:this.props.vpc.getSource()==="tahoe"},o}m.prototype.componentDidMount=function(){this.$VideoEndScreenWithActions1=new(c("SubscriptionsHandler"))();this.$VideoEndScreenWithActions1.addSubscriptions(this.props.vpc.addListener("stateChange",function(){return this.setState({playerState:this.props.vpc.getState()})}.bind(this)));this.$VideoEndScreenWithActions1.addSubscriptions(this.props.vpc.addListener("TahoeController/exitTahoe",function(){this.setState({isInTahoe:false})}.bind(this)));this.$VideoEndScreenWithActions1.addSubscriptions(this.props.vpc.addListener("TahoeController/enterTahoe",function(){this.setState({isInTahoe:true})}.bind(this)))};m.prototype.render=function(){__p&&__p();var n=this.props.vpc;if(!n||n.getSource()!=="inline"||this.state.isInTahoe||this.state.playerState==="destroyed")return null;var o=n.getRootNode();if(this.state.playerState!=="finished"){c("CSS").addClass(o,"_2a_0");return null}c("CSS").removeClass(o,"_2a_0");c("QE2Logger").logExposureForUser(l);return c("React").createElement(c("CenteredContainer.react"),{className:"_2a_1",fullHeight:true,vertical:true},c("React").createElement(c("List.react"),{border:"none",className:this.state.playerState!=="finished"?"hidden_elem":""},c("React").createElement("li",{className:"_2a_2"},c("React").createElement(c("VideoWatchAgainLink.react"),{vpc:this.props.vpc})),this.props.shareURI?c("React").createElement("li",{className:"_2a_2"},c("React").createElement(c("VideoReshareLink.react"),{vpc:this.props.vpc,shareURI:this.props.shareURI})):null,this.props.socialContextPayload?c("React").createElement("li",null,c("React").createElement("div",{className:"_67dg"}),c("React").createElement(k,{bootloadPlaceholder:c("React").createElement("span",null),payload:this.props.socialContextPayload,entFtIdentifier:this.props.entFtIdentifier})):null))};m.prototype.componentWillUnmount=function(){this.$VideoEndScreenWithActions1.release()};f.exports=m}),null);
__d("VideoWithClickToTahoe",["cx","AsyncRequest","Bootloader","CSS","Event","LiveVideoExperiments","URI","VideoPlayerReason","logVideosClickTracking"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=false;function j(k,l,m,n,o,p,q,r){__p&&__p();this.$VideoWithClickToTahoe5=k;this.$VideoWithClickToTahoe6=new(c("URI"))(l);this.$VideoWithClickToTahoe4=m;this.$VideoWithClickToTahoe1=n;this.$VideoWithClickToTahoe2=o;this.$VideoWithClickToTahoe7=p;this.$VideoWithClickToTahoe8=q;this.$VideoWithClickToTahoe9=r;this.$VideoWithClickToTahoe5.addListener("stateChange",this.$VideoWithClickToTahoe10.bind(this));this.$VideoWithClickToTahoe5.addListener("toggleFullscreen",this.$VideoWithClickToTahoe10.bind(this));this.$VideoWithClickToTahoe5.setLogEntryPropertyGetters({channel_eligibility:"eligible"});this.$VideoWithClickToTahoe5.addListener("enterTahoe",this.$VideoWithClickToTahoe11.bind(this,"control_click"));if(this.canOpenTahoe())this.$VideoWithClickToTahoe12();this.$VideoWithClickToTahoe5.addListener("clickVideo",this.$VideoWithClickToTahoe13.bind(this));if(this.$VideoWithClickToTahoe5.hasSeenClick())this.$VideoWithClickToTahoe13()}j.prototype.$VideoWithClickToTahoe14=function(){return this.$VideoWithClickToTahoe5.hasOption("VideoControls","available")};j.prototype.$VideoWithClickToTahoe12=function(){__p&&__p();if(this.$VideoWithClickToTahoe15())return;var k=this.$VideoWithClickToTahoe5.getVideoNode();c("CSS").addClass(k,"_62vr");c("CSS").addClass(k,"_1yhw");c("CSS").addClass(k,"_400z");c("CSS").addClass(k,"_1vek");var l=this.$VideoWithClickToTahoe5.isBroadcast();if(l){var m=c("LiveVideoExperiments").getParamsValueAndLogExposure(c("LiveVideoExperiments").UNIVERSE.VERTICAL_REACTIONS);if(m.isReactionBarRightAligned)c("CSS").addClass(k,"_3yn5")}};j.prototype.$VideoWithClickToTahoe16=function(){if(this.$VideoWithClickToTahoe15())return;var k=this.$VideoWithClickToTahoe5.getVideoNode();c("CSS").removeClass(k,"_62vr");c("CSS").removeClass(k,"_1yhw");c("CSS").removeClass(k,"_400z");c("CSS").removeClass(k,"_1vek");c("CSS").removeClass(k,"_3yn5")};j.prototype.$VideoWithClickToTahoe10=function(){if(!this.$VideoWithClickToTahoe15())if(this.canOpenTahoe())this.$VideoWithClickToTahoe12();else this.$VideoWithClickToTahoe16()};j.prototype.$VideoWithClickToTahoe15=function(){return this.$VideoWithClickToTahoe5.isState("destroyed")};j.prototype.$VideoWithClickToTahoe13=function(){__p&&__p();if(!this.canOpenTahoe())if(this.$VideoWithClickToTahoe5.isState("playing")){if(this.$VideoWithClickToTahoe5.getOption("VideoWithLiveBroadcast","isLive")||this.$VideoWithClickToTahoe5.getOption("VideoWithInstreamVideo","disableClickToPause"))return;this.$VideoWithClickToTahoe5.pause(c("VideoPlayerReason").USER)}else{c("logVideosClickTracking")(this.$VideoWithClickToTahoe5.getVideoNode());this.$VideoWithClickToTahoe5.play(c("VideoPlayerReason").USER)}else this.$VideoWithClickToTahoe11("player_click")};j.prototype.$VideoWithClickToTahoe17=function(){i=true;c("Bootloader").loadModules(["TahoeController","TahoeVideoView"],function(){},"VideoWithClickToTahoe");this.$VideoWithClickToTahoe3&&this.$VideoWithClickToTahoe3.remove();this.$VideoWithClickToTahoe3=null};j.prototype.canOpenTahoe=function(){var k=this.$VideoWithClickToTahoe5.getSource();if(k=="tahoe"||k=="channel")return false;var l=this.$VideoWithClickToTahoe5.getOption("VideoWithInstreamVideo","disableClickToPause");if(this.$VideoWithClickToTahoe5.isFullscreen()||l||!this.$VideoWithClickToTahoe5.isState("playing"))return false;return true};j.prototype.$VideoWithClickToTahoe11=function(k){__p&&__p();var l,m=this;if(this.$VideoWithClickToTahoe2){new(c("AsyncRequest"))(this.$VideoWithClickToTahoe6.toString()).send();this.$VideoWithClickToTahoe5.pause()}else(function(){i=true;m.$VideoWithClickToTahoe3&&m.$VideoWithClickToTahoe3.remove();m.$VideoWithClickToTahoe3=null;var n=babelHelpers["extends"]({},c("URI").getRequestURI().getQueryData(),{ref:"tahoe"});c("Bootloader").loadModules(["TahoeController"],function(o){o.openFromVideoPlayer(this.$VideoWithClickToTahoe5,this.$VideoWithClickToTahoe6.setQueryData(n),this.$VideoWithClickToTahoe4,this.$VideoWithClickToTahoe1,k,this.$VideoWithClickToTahoe7,this.$VideoWithClickToTahoe8,this.$VideoWithClickToTahoe9)}.bind(m),"VideoWithClickToTahoe")})()};j.setUpBootloadOnHover=function(k){if(i||k.$VideoWithClickToTahoe3)return;k.$VideoWithClickToTahoe3=c("Event").listen(k.$VideoWithClickToTahoe5.getRootNode(),"mouseover",k.$VideoWithClickToTahoe17.bind(k))};f.exports=j}),null);
__d("VideoWithExternalLogger",["VideoPlayerLoggerEventField"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){this.$VideoWithExternalLogger1=i.external_log_id;this.$VideoWithExternalLogger2=i.external_log_type}h.prototype.enable=function(i){var j;this.$VideoWithExternalLogger3=i;this.$VideoWithExternalLogger3.setLogEntryPropertyGetters((j={},j[c("VideoPlayerLoggerEventField").EXTERNAL_LOG_ID]=this.$VideoWithExternalLogger1,j[c("VideoPlayerLoggerEventField").EXTERNAL_LOG_TYPE]=this.$VideoWithExternalLogger2,j))};h.prototype.disable=function(){this.$VideoWithExternalLogger3=null};f.exports=h}),null);