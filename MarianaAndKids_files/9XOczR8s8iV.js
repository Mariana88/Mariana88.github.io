if (self.CavalryLogger) { CavalryLogger.start_js(["a31Lq"]); }

__d("StarsRatableComposerCloseResetBehaviorEnum",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NONE:"none",RESET_TO_EMPTY:"reset_to_empty",RESET_TO_PREVIOUS:"reset_to_previous"})}),null);
__d("StarsRatableBase",["Event","Arbiter","CSS","DOM","Parent","Run","StarsRatableComposerCloseResetBehaviorEnum"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j,k,l){__p&&__p();this.root=i;this.freezeOnClick=j;this.stars=c("DOM").scry(i,"a");this.listeners=[c("Event").listen(this.root,"click",this._onClick.bind(this)),c("Event").listen(this.root,"mousemove",this._onMouseMove.bind(this)),c("Event").listen(this.root,"mouseout",this._onMouseOut.bind(this))];this.holdMouseMove=false;this.setRating(k);this.defaultRating=k;this.composerHideResetBehavior=l;this.composerArbiters=[];c("Run").onLeave(this.destroyListeners.bind(this))}h.init=function(i,j,k,l){return new h(i,j,k,l)};Object.assign(h.prototype,{_onClick:function i(event){__p&&__p();this.layerHides=0;var j=this._getStarIndexFromEvent(event);if(!j)return;this.setRating(j);if(this.freezeOnClick)this.freeze();else this.holdMouseMove=true;if(this.composerHideResetBehavior!==c("StarsRatableComposerCloseResetBehaviorEnum").NONE)this.composerArbiters=[c("Arbiter").subscribe("saving_rating_from_composer",function(k,l){this.defaultRating=l;this.setRating(this.composerHideResetBehavior===c("StarsRatableComposerCloseResetBehaviorEnum").RESET_TO_EMPTY?0:l);this._unsubscribeComposerArbiters()}.bind(this)),c("Arbiter").subscribe("canceling_from_composer",function(){this.setRating(this.composerHideResetBehavior===c("StarsRatableComposerCloseResetBehaviorEnum").RESET_TO_EMPTY?0:this.defaultRating);this._unsubscribeComposerArbiters()}.bind(this))];event.prevent()},_unsubscribeComposerArbiters:function i(){for(var j=0;j<this.composerArbiters.length;++j)c("Arbiter").unsubscribe(this.composerArbiters[j]);this.composerArbiters=[]},_onMouseMove:function i(event){if(this.holdMouseMove)return;var j=this._getStarIndexFromEvent(event);if(!j)return;this.setStars(j,true)},_onMouseOut:function i(event){this.holdMouseMove=false;this.updateStars()},_getStarIndexFromEvent:function i(event){var j=c("Parent").byTag(event.getTarget(),"a");if(j)return this.stars.indexOf(j)+1;return 0},setRating:function i(j){this._rating=j;this.updateStars()},updateStars:function i(){this.setStars(this._rating)},setStars:function i(j,k){var l=k?"hoverStar":"fullStar",m=k?"fullStar":"hoverStar";for(var n=0;n<this.stars.length;++n){c("CSS").removeClass(this.stars[n],m);var o=n>=j;c("CSS").conditionClass(this.stars[n],l,!o);c("CSS").conditionClass(this.stars[n],"emptyStar",o)}},freeze:function i(){c("CSS").addClass(this.root,"uiStarsRated");this.destroyListeners()},destroyListeners:function i(){this.listeners.forEach(function(j){j&&j.remove()});this.listeners=[]}});b.StarsRatableBase=f.exports=h}),null);
__d("XGroupsMemberConnectionsIntentLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/groups/member_connections/log_intent/",{member_id:{type:"Int"},group_id:{type:"Int"},intent_type:{type:"Enum",enumType:1}})}),null);
__d("GroupsMemberConnectionsLogger",["AsyncRequest","Event","XGroupsMemberConnectionsIntentLoggingController"],(function a(b,c,d,e,f,g){"use strict";var h={logIntentOnJavaScriptEvent:function i(j,k,l,m,n){c("Event").listen(j,k,function(){h.logIntent(l,m,n)})},logIntent:function i(j,k,l){var m=c("XGroupsMemberConnectionsIntentLoggingController").getURIBuilder().setInt("member_id",k).setInt("group_id",j).setEnum("intent_type",l).getURI();new(c("AsyncRequest"))(m).send()}};f.exports=h}),null);
__d("StaticMapCallout",["csx","CSS","DOM","Parent","Style","Vector","clamp"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=3,j=13,k=10,l=j/2;function m(n,o,p,q,r,s){__p&&__p();this._root=n;this._arrows=c("DOM").find(n,".fbMapCalloutArrowWrap");this._topArrow=c("DOM").find(n,".fbMapCalloutArrowTop");this._bottomArrow=c("DOM").find(n,".fbMapCalloutArrowBottom");this._leftArrow=c("DOM").find(n,".fbMapCalloutArrowLeft");this._rightArrow=c("DOM").find(n,".fbMapCalloutArrowRight");this._main=c("DOM").find(n,".fbMapCalloutMain");this._content=c("DOM").find(n,".fbMapCalloutContent");this._mapWidth=p;this._mapHeight=q;var t=this._orientation=o;c("CSS").hide(this._root);c("Style").set(this._root,"position","absolute");this._left=r.left;this._top=r.top;this._right=r.right;this._bottom=r.bottom;Object.assign(this,r);if(t==="left"){c("CSS").setClass(this._arrows,"fbMapCalloutUseArrowLeft");var u=this._right+i;c("Style").set(this._root,"right",u+"px")}else if(t==="right"){c("CSS").setClass(this._arrows,"fbMapCalloutUseArrowRight");var v=this._left+i;c("Style").set(this._root,"left",v+"px")}else if(t==="top"){c("CSS").setClass(this._arrows,"fbMapCalloutUseArrowTop");var w=this._bottom+i;c("Style").set(this._root,"bottom",w+"px")}else if(t==="bottom"){c("CSS").setClass(this._arrows,"fbMapCalloutUseArrowBottom");var x=this._top+i;c("Style").set(this._root,"top",x+"px")}if(s){var y=c("Parent").bySelector(this._root,"._5cw9");y.appendChild(this._root)}}Object.assign(m.prototype,{setContent:function n(o){c("DOM").setContent(this._content,o);this.calloutDimensionsChanged()},calloutDimensionsChanged:function n(){__p&&__p();if(this._orientation==="left"||this._orientation==="right"){var o=c("Vector").getElementDimensions(this._main),p=o.y/2;if(this._top+o.y/2>this._mapHeight-k)p=o.y-(this._mapHeight-this._top-k);if(p>this._top-k)p=this._top-k;p=c("clamp")(p,l,o.y-l);this._setArrowYOffset(p);c("Style").set(this._root,"top",this._top-p+"px")}else{var q=c("Vector").getElementDimensions(this._main).x;q+=1;var r=q/2;if(this._left+q/2>this._mapWidth-k)r=q-(this._mapWidth-this._left-k);if(r>this._left-k)r=this._left-k;r=c("clamp")(r,l,q-l);this._setArrowXOffset(r);c("Style").set(this._root,"left",this._left-r+"px")}},show:function n(){c("CSS").show(this._root)},hide:function n(){c("CSS").hide(this._root)},setZIndex:function n(o){c("Style").set(this._root,"z-index",o)},_setArrowYOffset:function n(o){o-=l;c("Style").set(this._leftArrow,"top",o+"px");c("Style").set(this._rightArrow,"top",o+"px")},_setArrowXOffset:function n(o){o-=l;c("Style").set(this._topArrow,"left",o+"px");c("Style").set(this._bottomArrow,"left",o+"px")}});f.exports=m}),null);
__d("StaticMapPin",["Event"],(function a(b,c,d,e,f,g){__p&&__p();var h=0,i=1,j=2,k=10,l=20;function m(n,o,p,q,r){__p&&__p();this._pin=n;this._tooltip=o;this._callout=p;this._calloutContainer=q;this._mapID=r;this._state=h;m.instancesByMapID[r]=m.instancesByMapID[r]||[];m.instancesByMapID[r].push(this);c("Event").listen(this._pin,"mouseover",this._onMouseIn.bind(this));c("Event").listen(this._pin,"mouseout",this._onMouseOut.bind(this));c("Event").listen(this._pin,"click",this._onClick.bind(this))}Object.assign(m.prototype,{_onMouseIn:function n(){if(this._state!==h||!this._tooltip)return;this._calloutContainer.show();this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(k);this._state=i},_onMouseOut:function n(){if(this._state!==i)return;this._calloutContainer.hide();this._state=h},_onClick:function n(){__p&&__p();if(!this._callout)return;if(this._state===j){this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(k);this._state=i;return}m.hideAll(this._mapID);this._calloutContainer.show();this._calloutContainer.setContent(this._callout);this._calloutContainer.setZIndex(l);this._state=j}});Object.assign(m,{instancesByMapID:[],hideAll:function n(o){var p=m.instancesByMapID[o];for(var q=0;q<p.length;q++){p[q]._calloutContainer.hide();p[q]._state=h}},construct:function n(o,p,q,r,s){return new m(o,p,q,r,s)}});f.exports=m}),null);
__d("XReviewsTabUpdateHistogramController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/ajax/pages/review/update_histogram/",{page_id:{type:"Int"}})}),null);
__d("ReviewsController",["csx","fbt","ix","Arbiter","AsyncRequest","DOM","Dialog","Event","Image.react","React","ReactDOM","Run","XReviewsTabUpdateHistogramController","ge"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k={},l={},m={},n={},o={},p={registerRevealProfanity:function q(r,s,t){c("Event").listen(s,"click",function(){r.style.display="none";t.style.display="inline"})},registerButton:function q(r,s){k[s]=k[s]||[];k[s].push(r)},registerViewerReview:function q(r,s){l[s]=l[s]||[];l[s].push(r)},registerComposer:function q(r,s){m[s]=m[s]||[];m[s].push(r)},registerToggle:function q(r,s,t,u){n[r]=n[r]||[];n[r].push([s,t,u])},registerStoryDeleteListener:function q(r){c("Arbiter").subscribe("Story/delete",function(s,t){this._updateToggles(r,false);new(c("AsyncRequest"))(c("XReviewsTabUpdateHistogramController").getURIBuilder().setInt("page_id",r).getURI()).setMethod("GET").setReadOnly(true).send()}.bind(this))},addUserReview:function q(r,s,t,u,v,w,x,y,z,A,B){this._updateState(true,r,s,t,u,v,w,x,y,z,A,B)},deleteUserReview:function q(r,s,t,u,v,w){this._updateState(false,r,null,null,null,s,t,u,w,null,null);if(v){var x=document.getElementById(v),y=x.parentNode.parentNode;y.parentNode.removeChild(y)}},_updateState:function q(r,s,t,u,v,w,x,y,z,A,B,C){__p&&__p();var D;if(A){var E=c("ge")("own_review_container");if(E)c("DOM").setContent(E,A)}else if(z){var F=c("ge")("viewer_own_review_tab");if(F)c("DOM").replace(F,z)}else if(r){var G=c("ge")("page_reviews_tab_list");if(G)c("DOM").prependContent(G,u);var H="div._yj3",I=c("DOM").scry(document,H)[0];if(I)I.parentNode.removeChild(I)}var J=l[s]||[];for(D=0;D<J.length;D++)c("DOM").remove(J[D]);this._updateToggles(s,r);var K=m[s]||[];for(D=0;D<K.length;D++){var L=K[D];if(r)L.hide();else{L.clear();L.show()}}var M=k[s]||[];for(D=0;D<M.length;D++){var N=M[D],O=c("DOM").find(N,".uiButtonText"),P=c("DOM").find(N,"i"),Q,R;if(r){Q=j("76766");R=i._("Reviewed")}else{Q=j("76771");R=i._("Review")}var S=c("DOM").create("span");c("ReactDOM").render(c("React").createElement("div",null,R),O);c("ReactDOM").render(c("React").createElement(c("Image.react"),{src:Q,style:{paddingRight:"5px"}}),S);c("DOM").replace(P,S)}if(r){var T=c("DOM").scry(document,"#page_recommendations_browse_list")[0];if(T)c("DOM").prependContent(T,t)}if(w){var U=c("ge")("page_reviews_pill_and_histogram");if(U)c("DOM").replace(U,w)}if(x){var V=c("ge")("pages_inline_rating_summary");if(V)c("DOM").replace(V,x)}if(y){var W=c("ge")("pages_review_needy_place_card");if(W)c("DOM").replace(W,y)}if(B){var X=c("ge")("spotlight_reviews_card_list");if(X)c("DOM").prependContent(X,B)}if(C){var Y=c("ge")("review_composer_container");c("DOM").insertAfter(Y,C)}},registerPhotoUpload:function q(r,s){__p&&__p();c("Arbiter").subscribe("multi-upload/images-upload-completed/"+s,function(){o[s]=false});c("Arbiter").subscribe("multi-upload/images-upload-start/"+s,function(){o[s]=true});c("Event").listen(r,"submit",function(){if(o[s]){new(c("Dialog"))().setTitle(i._("Photos Are Uploading")).setSemiModal(true).setButtons(c("Dialog").OK).setBody(i._("Please wait until photo is uploaded before posting.")).show();return false}return true}.bind(this))},_updateToggles:function q(r,s){var t=n[r]||[];for(var u=0;u<t.length;u++){var v=t[u],w=v[s?1:2];c("DOM").setContent(v[0],w)}}};c("Run").onLeave(function(){k={};l={};m={};n={};o={}});f.exports=p}),null);
__d("CovercardArrow",["csx","cx","ContextualDialogArrow","CSS","DOMQuery","Locale","Style"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=-45,k=45,l=9;if(c("Locale").isRTL()){j=-j;k=-k}function m(o){"use strict";this._layer=o}m.prototype.enable=function(){"use strict";__p&&__p();this._layer.enableBehavior(c("ContextualDialogArrow"));var o=this._layer.getContentRoot();this._arrowWrapper=c("DOMQuery").scry(o,"._ttk")[0];if(!this._arrowWrapper)return;this._arrowShadow=c("DOMQuery").scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var p=null;if(n(this._arrowWrapper))p=this._renderArrowWithRotate.bind(this);if(!p)return;if(c("Locale").isRTL())c("CSS").addClass(o,"_7lf");this._subscription=this._layer.subscribe("reposition",function(q,r){var s=r.getPosition()=="below";c("CSS").conditionClass(o,"_53ih",s);s&&p(r)})};m.prototype.disable=function(){"use strict";this._subscription&&this._subscription.unsubscribe();this._subscription=null};m.prototype._calculateArrowOffset=function(o){"use strict";var p=c("ContextualDialogArrow").getOffsetPercent(o),q=c("ContextualDialogArrow").getOffset(o,p,this._layer),r=c("Style").get(this._layer.getContentRoot(),"width");return parseInt(r,10)*(p/100)+q};m.prototype._renderArrowWithRotate=function(o){"use strict";__p&&__p();var p=c("DOMQuery").scry(this._arrowWrapper,"._7lj")[0];if(!p){var q=this._layer.getContentRoot();c("CSS").addClass(q,"_2uy0")}var r=c("DOMQuery").scry(this._arrowWrapper,"._1ubp")[0];if(!r)return;var s=n(this._arrowWrapper);if(!s)return;var t=this._calculateArrowOffset(o),u=l+t,v=-l;if(c("Locale").isRTL()){u=-u;v=-v}this._arrowWrapper.style[s]="translate("+u+"px, -"+l+"px) rotate("+k+"deg)";if(p)p.style[s]="rotate("+j+"deg) translate("+-u+"px, "+(l-12)+"px)";r.style[s]="rotate("+j+"deg) translate("+v+"px, 0)"};function n(o){if(!o)o=document.body;var p=["transform","WebkitTransform","msTransform","MozTransform","OTransform"],q;while(q=p.shift())if(o.style[q]!==undefined)return q;return null}f.exports=m}),null);
__d("GroupsIntentHovercardLogger",["Arbiter","GroupsMemberConnectionsLogger","URI","UserHovercardLocation"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={_currentEndpoint:null,register:function i(){c("Arbiter").subscribe("Hovercard/show",h._onHovercardShow,c("Arbiter").SUBSCRIBE_NEW);c("Arbiter").subscribe("Hovercard/hide",h._onHovercardHide,c("Arbiter").SUBSCRIBE_NEW)},_onHovercardShow:function i(j,k){__p&&__p();if(!k||!k.endpoint)return;var l=k.endpoint;if(l===h._currentEndpoint)return;var m=new(c("URI"))(l).getQueryData();if(!m.extragetparams)return;var n=JSON.parse(m.extragetparams),o=n.directed_target_id||n.group_id,p=n.hc_location;if(m.id&&o&&p&&h._getIsGroupsLocation(p)){h._currentEndpoint=l;c("GroupsMemberConnectionsLogger").logIntent(o,m.id,"HOVERCARD_VIEW")}},_onHovercardHide:function i(){h._currentEndpoint=null},_getIsGroupsLocation:function i(j){return j===c("UserHovercardLocation").GROUP||j===c("UserHovercardLocation").GROUP_DIALOG}};f.exports=h}),null);
__d("HovercardLogger",["Banzai"],(function a(b,c,d,e,f,g){"use strict";var h="hovercard_logger",i={logTimespent:function j(k,l,m){var n={id:k,time_spent:l,extra_get_params:m};c("Banzai").post(h,n)}};f.exports=i}),null);
__d("Hovercard",["csx","cx","fbt","AccessibleLayer","Arbiter","AsyncRequest","Banzai","ContextualDialog","ContextualDialogXUITheme","ContextualThing","DOM","Event","GroupsIntentHovercardLogger","HovercardLogger","IntersectionObserver","JSXDOM","LayerAutoFocus","LayerRefocusOnHide","Parent","Style","URI","Vector","clickRefAction","getInlineBoundingRect","gkx"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k={};function l(m,n){__p&&__p();this.$Hovercard1=m;this.$Hovercard2=l.$Hovercard17();this.$Hovercard3=n;this.$Hovercard4=null;this.$Hovercard5=null;this.$Hovercard6=null;this.$Hovercard7=null;this.$Hovercard8=[];this.$Hovercard9=false;this.$Hovercard10=null;this.$Hovercard12=false;this.$Hovercard13=false;this.$Hovercard14=null;this.$Hovercard15=false;this.$Hovercard18=null;if(c("gkx")("AT5faHuTXKr90iQwQKl1SHVCLgelfdAiBTCM36IPmo0GpzqIzCnjZnLR1Z3bKshckAh3Qyf5nBK8Tx24wdaBxId759A18-wpvcHmqYjRWjymzA"))this.$Hovercard19=new(c("IntersectionObserver"))(function(o){this.scroll()}.bind(this),{threshold:[0,1]})}l.getActiveHovercard=function(){var m=l.$Hovercard20.length;if(m)return l.$Hovercard20[m-1];return null};l.hide=function(){var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0],n=l.getActiveHovercard();if(!n)return;l.$Hovercard20.pop().$Hovercard21(m)};l.setDialog=function(m,n){var o=l.$Hovercard22[m];if(!o){o=new l(null,m);l.$Hovercard22[m]=o}n.disableBehavior(c("AccessibleLayer")).disableBehavior(c("LayerAutoFocus")).disableBehavior(c("LayerRefocusOnHide"));o.$Hovercard23(n)};l.getDialog=function(m){var n=l.$Hovercard22[m];if(n&&n.$Hovercard12)return n.$Hovercard2;return null};l.$Hovercard24=function(m){var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1],o=l.$Hovercard20.length;while(o&&l.$Hovercard20[o-1].$Hovercard3!=m){l.$Hovercard20.pop().$Hovercard21(n);o=l.$Hovercard20.length}};l.$Hovercard25=function(m){var n=l.getActiveHovercard();return n?n.$Hovercard1===m:false};l.$Hovercard26=function(m){return m.getAttribute("data-hovercard")};l.$Hovercard27=function(m){return c("DOM").scry(m,"^._5jmm ._2orz").length>0};l.$Hovercard17=function(){if(!l.$Hovercard28){l.$Hovercard28=new(c("ContextualDialog"))({width:275,theme:c("ContextualDialogXUITheme")},c("JSXDOM").div({className:"_7lk"},j._("Loading...")));l.$Hovercard28.disableBehavior(c("AccessibleLayer")).disableBehavior(c("LayerAutoFocus")).disableBehavior(c("LayerRefocusOnHide"))}return l.$Hovercard28};l.dirty=function(m){var n=l.$Hovercard22[m];if(n){n.$Hovercard21(true);delete l.$Hovercard22[m]}};l.dirtyAll=function(){for(var m in l.$Hovercard22)l.dirty(m);c("Arbiter").inform("Hovercard/dirty")};l.contains=function(m){var n=l.getActiveHovercard();if(n)return n.$Hovercard29(m);return false};l.processNode=function(m){__p&&__p();if(!m)return false;var n=l.$Hovercard26(m);if(!n)return false;if(l.$Hovercard27(m)||l.$Hovercard30(m))return false;var o=l.$Hovercard22[n];if(!o)o=l.$Hovercard22[n]=new l(m,n);if(o.$Hovercard9)return false;var p=l.getActiveHovercard(),q=false;while(p&&!l.contains(m)){l.$Hovercard20.pop().$Hovercard21();q=true;p=l.getActiveHovercard()}var r=null;if(p)r=p.$Hovercard3;if(o.$Hovercard13&&o.$Hovercard1!=m)o.$Hovercard31(m);o.$Hovercard32(m,q);o.$Hovercard4=r;l.$Hovercard20.push(o);return true};l.setDirtyAllOnPageTransition=function(m){l.dirtyAllOnPageTransition=m};l.getLoadingDelay=function(){return l.$Hovercard33};l.getHideDelay=function(){return l.$Hovercard34};l.scroll=function(){__p&&__p();var m=null;for(var n=l.$Hovercard20,o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var q;if(o){if(p>=n.length)break;q=n[p++]}else{p=n.next();if(p.done)break;q=p.value}var r=q;if(r.$Hovercard35()){m=r;break}}if(!m)return;l.$Hovercard24(m.$Hovercard3,true);l.$Hovercard20.pop().$Hovercard21(true)};l.abort=function(){l.hide(true)};l.$Hovercard30=function(m){return c("Parent").bySelector(m,"._7lu")!==null};l.prototype.getEndpoint=function(){return this.$Hovercard3};l.prototype.$Hovercard40=function(){clearTimeout(this.$Hovercard7);this.$Hovercard7=null};l.prototype.$Hovercard41=function(){var m=this,n=this.$Hovercard1;m.$Hovercard11=c("Event").listen(n,"mouseleave",function(){if(!m.$Hovercard9)return;l.$Hovercard24(m.$Hovercard3);if(l.$Hovercard20.length)l.$Hovercard20.pop().$Hovercard21()})};l.prototype.$Hovercard42=function(){var m=this,n=this.$Hovercard1;this.$Hovercard10=c("Event").listen(n,"mousemove",function(event){if(m.$Hovercard13)return;m.$Hovercard14=c("Vector").getEventPosition(event)})};l.prototype.$Hovercard43=function(){clearTimeout(this.$Hovercard5);clearTimeout(this.$Hovercard6);this.$Hovercard5=null;this.$Hovercard6=null};l.prototype.$Hovercard32=function(m){__p&&__p();var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1];if(this.$Hovercard9)return;this.$Hovercard1=m;this.$Hovercard9=true;this.$Hovercard40();this.$Hovercard41();if(this.$Hovercard13)return;this.$Hovercard42();var o=l.$Hovercard36,p=n?l.$Hovercard34:l.$Hovercard37;if(m.getAttribute("data-hovercard-instant"))o=p=l.$Hovercard38;var q=function q(){this.$Hovercard44()},r=function r(s){this.$Hovercard45(s)};if(!this.$Hovercard15)this.$Hovercard5=setTimeout(q.bind(this),o);this.$Hovercard6=setTimeout(r.bind(this,p),p)};l.prototype.$Hovercard46=function(){if(this.$Hovercard10){this.$Hovercard10.remove();this.$Hovercard10=null}if(this.$Hovercard11){this.$Hovercard11.remove();this.$Hovercard11=null}};l.prototype.$Hovercard21=function(){__p&&__p();var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0];if(!this.$Hovercard9)return;this.$Hovercard9=false;this.$Hovercard43();this.$Hovercard46();if(!this.$Hovercard13)return;if(m){this.$Hovercard47(true);return}var n=this.$Hovercard1.getAttribute("data-hovercard-instant")?l.$Hovercard38:l.$Hovercard34,o=function o(){this.$Hovercard47()};this.$Hovercard7=setTimeout(o.bind(this),n)};l.prototype.$Hovercard47=function(){__p&&__p();var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0];if(!this.$Hovercard13||this.$Hovercard7==null&&!m)return;var n=new(c("URI"))(this.$Hovercard3),o=n.getQueryData();if(this.$Hovercard16!==null&&o.id!==null){var p={};if(this.$Hovercard1.getAttribute("data-hovercard-referer")!==null)p.preview_referer=this.$Hovercard1.getAttribute("data-hovercard-referer");c("HovercardLogger").logTimespent(Number(o.id),String(Date.now()-this.$Hovercard16),p)}this.$Hovercard16=null;this.$Hovercard7=null;this.$Hovercard48();this.$Hovercard2.hide();this.$Hovercard13=false;c("Arbiter").inform("Hovercard/hide");this.$Hovercard4=null};l.prototype.$Hovercard45=function(m,n){__p&&__p();if(!this.$Hovercard9||this.$Hovercard13)return;if(n!==true){var o=new(c("URI"))(this.$Hovercard3),p=o.getQueryData();if(p.id!==null){var q="pages_growth_general_analytical_logger",r={id:Number(p.id),event:"HOVERCARD_IMPRESSION",event_target:"Hovercard",feature_name:"Preview_Insights"};c("Banzai").post(q,r)}}if(this.$Hovercard12||n){this.$Hovercard49();this.$Hovercard50();this.$Hovercard13=true}else{m=l.$Hovercard33-l.$Hovercard37;var s=function s(t,u){this.$Hovercard45(t,u)};this.$Hovercard6=setTimeout(s.bind(this,m,true),m)}};l.prototype.$Hovercard50=function(){__p&&__p();var m=this.$Hovercard1,n=this.$Hovercard2,o=m.getAttribute("data-hovercard-position");o&&n.setPosition(o);this.$Hovercard51();this.$Hovercard16=Date.now();var p=m.getAttribute("data-hovercard-prefer-more-content-show");p&&n.getOrientation().setPreferMoreContentShownRect(true);if(!c("DOM").contains(document.body,m)){if(this.$Hovercard9){l.$Hovercard24(this.$Hovercard3,true);l.$Hovercard20.pop().$Hovercard21(true)}else this.$Hovercard47();return}n.setContextWithBounds(m,c("getInlineBoundingRect")(m,this.$Hovercard14)).show();c("Arbiter").inform("Hovercard/show",{endpoint:this.$Hovercard3});if(this.$Hovercard12&&m!=l.$Hovercard39){l.$Hovercard39=m;setTimeout(function(){c("clickRefAction")("himp",m,null,"FORCE",{ft:{evt:39}})},0)}};l.prototype.$Hovercard44=function(){__p&&__p();if(this.$Hovercard12||this.$Hovercard15)return;this.$Hovercard15=true;if(this.$Hovercard1.id&&k[this.$Hovercard1.id]){l.setDialog(this.$Hovercard3,k[this.$Hovercard1.id]);return}var m=this,n=function n(){l.dirty(m.$Hovercard3);l.hide(true)};new(c("AsyncRequest"))(this.$Hovercard3).setData({endpoint:this.$Hovercard3}).setMethod("GET").setReadOnly(true).setErrorHandler(n).setTransportErrorHandler(n).send()};l.prototype.$Hovercard51=function(){var m=this.$Hovercard1.getAttribute("data-hovercard-offset-x")||0;this.$Hovercard2.setOffsetX(parseInt(m,10));var n=this.$Hovercard1.getAttribute("data-hovercard-offset-y")||0;this.$Hovercard2.setOffsetY(parseInt(n,10))};l.prototype.$Hovercard49=function(){__p&&__p();var m=this;m.$Hovercard2.mouseTest=false;m.$Hovercard8=[m.$Hovercard2.subscribe("mouseenter",function(){__p&&__p();if(m.$Hovercard9)return;var n=m,o=null,p=[];while(!n.$Hovercard9){if(!n.$Hovercard13)return;p.push(n);o=n.$Hovercard4;if(!o)break;n=l.$Hovercard22[o]}l.$Hovercard24(o);while(p.length){n=p.pop();n.$Hovercard32(n.$Hovercard1,false);l.$Hovercard20.push(n)}}),m.$Hovercard2.subscribe("mouseleave",function(n,o){if(!m.$Hovercard9)return;l.$Hovercard24(m.$Hovercard3);l.$Hovercard20.pop().$Hovercard21();var p=l.getActiveHovercard();while(p&&!l.contains(o)){l.$Hovercard20.pop().$Hovercard21();p=l.getActiveHovercard()}}),m.$Hovercard2.subscribe("destroy",function(){if(m.$Hovercard12){m.$Hovercard48();m.$Hovercard2=l.$Hovercard17();m.$Hovercard12=false}if(!m.$Hovercard9)return;l.$Hovercard24(m.$Hovercard3,true);l.$Hovercard20.pop().$Hovercard21(true)})]};l.prototype.$Hovercard48=function(){while(this.$Hovercard8.length)this.$Hovercard8.pop().unsubscribe()};l.prototype.$Hovercard29=function(m){return c("ContextualThing").containsIncludingLayers(this.$Hovercard2.getContentRoot(),m)};l.prototype.$Hovercard31=function(){__p&&__p();this.$Hovercard47(true);var m=[this];while(m.length){var n=m.pop();for(var o in l.$Hovercard22){if(!Object.prototype.hasOwnProperty.call(l.$Hovercard22,o))continue;var p=l.$Hovercard22[o];if(p.$Hovercard4==n.$Hovercard3){p.$Hovercard47(true);m.push(p)}}}};l.prototype.$Hovercard35=function(){return c("Style").isFixed(this.$Hovercard1)};l.prototype.$Hovercard23=function(m){this.$Hovercard48();if(this.$Hovercard13)this.$Hovercard2.hide();this.$Hovercard12=true;this.$Hovercard2=m;if(this.$Hovercard13){this.$Hovercard49();this.$Hovercard50()}};l.initiateIntersectionObserver=function(){if(this.$Hovercard19){this.$Hovercard19.disconnect();this.$Hovercard19.observe(window)}};l.$Hovercard36=150;l.$Hovercard37=700;l.$Hovercard33=1e3;l.$Hovercard34=250;l.$Hovercard38=50;l.$Hovercard22={};l.$Hovercard28=null;l.$Hovercard20=[];l.$Hovercard39=null;l.dirtyAllOnPageTransition=true;(function(){if(c("gkx")("AT5faHuTXKr90iQwQKl1SHVCLgelfdAiBTCM36IPmo0GpzqIzCnjZnLR1Z3bKshckAh3Qyf5nBK8Tx24wdaBxId759A18-wpvcHmqYjRWjymzA"))l.initiateIntersectionObserver();else c("Event").listen(window,"scroll",l.scroll);c("Arbiter").subscribe("page_transition",function(){l.hide(true);l.dirtyAllOnPageTransition&&l.dirtyAll()},c("Arbiter").SUBSCRIBE_NEW);c("GroupsIntentHovercardLogger").register()})();f.exports=l}),null);
__d("LocalContentClickLogger",["BanzaiLogger","EventListener"],(function a(b,c,d,e,f,g){__p&&__p();h.prototype.initClickThroughLogging=function(i,j,k){"use strict";c("EventListener").listen(i,"click",function(){return this.sendLoggingRequest(j,k)}.bind(this))};h.prototype.initMenuClickLogging=function(i,j,k,l){"use strict";i.subscribe("itemclick",function(m,n){if(n.item.getValue()==j)this.sendLoggingRequest(k,l)}.bind(this))};h.prototype.initPrivacyMenuClickLogging=function(i,j,k){"use strict";c("EventListener").listen(i,"click",function(event){j.button_text=event.target.textContent;this.sendLoggingRequest(j,k)}.bind(this))};h.prototype.sendLoggingRequest=function(i,j){"use strict";if(j=="reviews")c("BanzaiLogger").log("ReviewConsumptionLoggerConfig",i);else if(j=="review_production")c("BanzaiLogger").log("ReviewProductionLoggerConfig",i);else if(j=="menus")c("BanzaiLogger").log("MenuConsumptionLoggerConfig",i)};function h(){"use strict"}f.exports=new h()}),null);