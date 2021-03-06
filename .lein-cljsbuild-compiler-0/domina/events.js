goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
void 0;domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3941__auto____11647 = evt;
if(and__3941__auto____11647)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto____11647;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{return (function (){var or__3943__auto____11648 = (domina.events.prevent_default[goog.typeOf(evt)]);
if(or__3943__auto____11648)
{return or__3943__auto____11648;
} else
{var or__3943__auto____11649 = (domina.events.prevent_default["_"]);
if(or__3943__auto____11649)
{return or__3943__auto____11649;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3941__auto____11653 = evt;
if(and__3941__auto____11653)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto____11653;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{return (function (){var or__3943__auto____11654 = (domina.events.stop_propagation[goog.typeOf(evt)]);
if(or__3943__auto____11654)
{return or__3943__auto____11654;
} else
{var or__3943__auto____11655 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____11655)
{return or__3943__auto____11655;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3941__auto____11659 = evt;
if(and__3941__auto____11659)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto____11659;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{return (function (){var or__3943__auto____11660 = (domina.events.target[goog.typeOf(evt)]);
if(or__3943__auto____11660)
{return or__3943__auto____11660;
} else
{var or__3943__auto____11661 = (domina.events.target["_"]);
if(or__3943__auto____11661)
{return or__3943__auto____11661;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3941__auto____11665 = evt;
if(and__3941__auto____11665)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto____11665;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{return (function (){var or__3943__auto____11666 = (domina.events.current_target[goog.typeOf(evt)]);
if(or__3943__auto____11666)
{return or__3943__auto____11666;
} else
{var or__3943__auto____11667 = (domina.events.current_target["_"]);
if(or__3943__auto____11667)
{return or__3943__auto____11667;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3941__auto____11671 = evt;
if(and__3941__auto____11671)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto____11671;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{return (function (){var or__3943__auto____11672 = (domina.events.event_type[goog.typeOf(evt)]);
if(or__3943__auto____11672)
{return or__3943__auto____11672;
} else
{var or__3943__auto____11673 = (domina.events.event_type["_"]);
if(or__3943__auto____11673)
{return or__3943__auto____11673;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3941__auto____11677 = evt;
if(and__3941__auto____11677)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto____11677;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{return (function (){var or__3943__auto____11678 = (domina.events.raw_event[goog.typeOf(evt)]);
if(or__3943__auto____11678)
{return or__3943__auto____11678;
} else
{var or__3943__auto____11679 = (domina.events.raw_event["_"]);
if(or__3943__auto____11679)
{return or__3943__auto____11679;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
void 0;domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t11696))
{
/**
* @constructor
*/
domina.events.t11696 = (function (evt,f,create_listener_function,meta11697){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta11697 = meta11697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t11696.cljs$lang$type = true;
domina.events.t11696.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"domina.events/t11696");
});
domina.events.t11696.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__11699 = this;
var temp__4090__auto____11700 = (this__11699.evt[k]);
if(cljs.core.truth_(temp__4090__auto____11700))
{var val__11701 = temp__4090__auto____11700;
return val__11701;
} else
{return (this__11699.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t11696.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__11702 = this;
var or__3943__auto____11703 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto____11703))
{return or__3943__auto____11703;
} else
{return not_found;
}
});
domina.events.t11696.prototype.domina$events$Event$ = true;
domina.events.t11696.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__11704 = this;
return this__11704.evt.preventDefault();
});
domina.events.t11696.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__11705 = this;
return this__11705.evt.stopPropagation();
});
domina.events.t11696.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__11706 = this;
return this__11706.evt.target;
});
domina.events.t11696.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__11707 = this;
return this__11707.evt.currentTarget;
});
domina.events.t11696.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__11708 = this;
return this__11708.evt.type;
});
domina.events.t11696.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__11709 = this;
return this__11709.evt;
});
domina.events.t11696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11698){
var this__11710 = this;
return this__11710.meta11697;
});
domina.events.t11696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11698,meta11697){
var this__11711 = this;
return (new domina.events.t11696(this__11711.evt,this__11711.f,this__11711.create_listener_function,meta11697));
});
domina.events.t11696;
} else
{}
return (new domina.events.t11696(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__11725 = domina.events.create_listener_function.call(null,listener);
var t__11726 = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__2487__auto____11737 = (function iter__11727(s__11728){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11728__11733 = s__11728;
while(true){
var temp__4092__auto____11734 = cljs.core.seq.call(null,s__11728__11733);
if(temp__4092__auto____11734)
{var xs__4579__auto____11735 = temp__4092__auto____11734;
var node__11736 = cljs.core.first.call(null,xs__4579__auto____11735);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node__11736,t__11726,f__11725,capture):goog.events.listen(node__11736,t__11726,f__11725,capture)),iter__11727.call(null,cljs.core.rest.call(null,s__11728__11733)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2487__auto____11737.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_BANG_.cljs$lang$arity$2 = listen_BANG___2;
listen_BANG_.cljs$lang$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_BANG_.cljs$lang$arity$2 = capture_BANG___2;
capture_BANG_.cljs$lang$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_once_BANG_.cljs$lang$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$lang$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_once_BANG_.cljs$lang$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$lang$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var G__11745__11746 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11745__11746)
{var node__11747 = cljs.core.first.call(null,G__11745__11746);
var G__11745__11748 = G__11745__11746;
while(true){
goog.events.removeAll(node__11747);
var temp__4092__auto____11749 = cljs.core.next.call(null,G__11745__11748);
if(temp__4092__auto____11749)
{var G__11745__11750 = temp__4092__auto____11749;
{
var G__11752 = cljs.core.first.call(null,G__11745__11750);
var G__11753 = G__11745__11750;
node__11747 = G__11752;
G__11745__11748 = G__11753;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__11751 = domina.events.find_builtin_type.call(null,type);
return goog.events.removeAll(domina.events.node,type__11751);
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw('Invalid arity: ' + arguments.length);
};
unlisten_BANG_.cljs$lang$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$lang$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$lang$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4090__auto____11756 = n.parentNode;
if(cljs.core.truth_(temp__4090__auto____11756))
{var parent__11757 = temp__4090__auto____11756;
{
var G__11758 = parent__11757;
var G__11759 = cljs.core.cons.call(null,parent__11757,so_far);
n = G__11758;
so_far = G__11759;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw('Invalid arity: ' + arguments.length);
};
ancestor_nodes.cljs$lang$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$lang$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors__11773 = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var G__11774__11775 = cljs.core.seq.call(null,ancestors__11773);
if(G__11774__11775)
{var n__11776 = cljs.core.first.call(null,G__11774__11775);
var G__11774__11777 = G__11774__11775;
while(true){
if(cljs.core.truth_(n__11776.propagationStopped))
{} else
{evt.currentTarget = n__11776;
goog.events.fireListeners(n__11776,evt.type,true,evt);
}
var temp__4092__auto____11778 = cljs.core.next.call(null,G__11774__11777);
if(temp__4092__auto____11778)
{var G__11774__11779 = temp__4092__auto____11778;
{
var G__11786 = cljs.core.first.call(null,G__11774__11779);
var G__11787 = G__11774__11779;
n__11776 = G__11786;
G__11774__11777 = G__11787;
continue;
}
} else
{}
break;
}
} else
{}
var G__11780__11781 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors__11773));
if(G__11780__11781)
{var n__11782 = cljs.core.first.call(null,G__11780__11781);
var G__11780__11783 = G__11780__11781;
while(true){
if(cljs.core.truth_(n__11782.propagationStopped))
{} else
{evt.currentTarget = n__11782;
goog.events.fireListeners(n__11782,evt.type,false,evt);
}
var temp__4092__auto____11784 = cljs.core.next.call(null,G__11780__11783);
if(temp__4092__auto____11784)
{var G__11780__11785 = temp__4092__auto____11784;
{
var G__11788 = cljs.core.first.call(null,G__11780__11785);
var G__11789 = G__11780__11785;
n__11782 = G__11788;
G__11780__11783 = G__11789;
continue;
}
} else
{}
break;
}
} else
{}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3941__auto____11791 = o.getParentEventTarget;
if(cljs.core.truth_(and__3941__auto____11791))
{return o.dispatchEvent;
} else
{return and__3941__auto____11791;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt__11812 = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var G__11813__11814 = cljs.core.seq.call(null,evt_map);
if(G__11813__11814)
{var G__11816__11818 = cljs.core.first.call(null,G__11813__11814);
var vec__11817__11819 = G__11816__11818;
var k__11820 = cljs.core.nth.call(null,vec__11817__11819,0,null);
var v__11821 = cljs.core.nth.call(null,vec__11817__11819,1,null);
var G__11813__11822 = G__11813__11814;
var G__11816__11823 = G__11816__11818;
var G__11813__11824 = G__11813__11822;
while(true){
var vec__11825__11826 = G__11816__11823;
var k__11827 = cljs.core.nth.call(null,vec__11825__11826,0,null);
var v__11828 = cljs.core.nth.call(null,vec__11825__11826,1,null);
var G__11813__11829 = G__11813__11824;
(evt__11812[k__11827] = v__11828);
var temp__4092__auto____11830 = cljs.core.next.call(null,G__11813__11829);
if(temp__4092__auto____11830)
{var G__11813__11831 = temp__4092__auto____11830;
{
var G__11832 = cljs.core.first.call(null,G__11813__11831);
var G__11833 = G__11813__11831;
G__11816__11823 = G__11832;
G__11813__11824 = G__11833;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt__11812);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt__11812);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw('Invalid arity: ' + arguments.length);
};
dispatch_BANG_.cljs$lang$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$lang$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__11836 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__11834_SHARP_){
return goog.events.getListeners(p1__11834_SHARP_,type__11836,false);
}),domina.nodes.call(null,content));
});
