// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('reagent_forms.core')) {
goog.provide('reagent_forms.core');
}
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.set_doc_value = (function set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__10287_SHARP_,p2__10286_SHARP_){
var or__3721__auto__ = p2__10286_SHARP_.call(null,path,value,p1__10287_SHARP_);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return p1__10287_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.format_type = (function (){var method_table__4618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4622__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4622__auto__,method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3709__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__3709__auto__){
return fmt;
} else {
return and__3709__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n)){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
reagent_forms.core.bind = (function (){var method_table__4618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4622__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__){
return (function (p__10288,_){
var map__10289 = p__10288;
var map__10289__$1 = ((cljs.core.seq_QMARK_.call(null,map__10289))?cljs.core.apply.call(null,cljs.core.hash_map,map__10289):map__10289);
var field = cljs.core.get.call(null,map__10289__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4622__auto__,method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__10291,p__10292){
var map__10293 = p__10291;
var map__10293__$1 = ((cljs.core.seq_QMARK_.call(null,map__10293))?cljs.core.apply.call(null,cljs.core.hash_map,map__10293):map__10293);
var fmt = cljs.core.get.call(null,map__10293__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__10293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__10293__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__10294 = p__10292;
var map__10294__$1 = ((cljs.core.seq_QMARK_.call(null,map__10294))?cljs.core.apply.call(null,cljs.core.hash_map,map__10294):map__10294);
var save_BANG_ = cljs.core.get.call(null,map__10294__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10294__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3721__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10293,map__10293__$1,fmt,id,field,map__10294,map__10294__$1,save_BANG_,get){
return (function (p1__10290_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__10290_SHARP_)));
});})(map__10293,map__10293__$1,fmt,id,field,map__10294,map__10294__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__10295,p__10296){
var map__10297 = p__10295;
var map__10297__$1 = ((cljs.core.seq_QMARK_.call(null,map__10297))?cljs.core.apply.call(null,cljs.core.hash_map,map__10297):map__10297);
var id = cljs.core.get.call(null,map__10297__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__10298 = p__10296;
var map__10298__$1 = ((cljs.core.seq_QMARK_.call(null,map__10298))?cljs.core.apply.call(null,cljs.core.hash_map,map__10298):map__10298);
var checked = cljs.core.get.call(null,map__10298__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var save_BANG_ = cljs.core.get.call(null,map__10298__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10298__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10297,map__10297__$1,id,map__10298,map__10298__$1,checked,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.swap_BANG_.call(null,checked,cljs.core.not));
});})(map__10297,map__10297__$1,id,map__10298,map__10298__$1,checked,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__10299,opts,p__10300){
var vec__10303 = p__10299;
var type = cljs.core.nth.call(null,vec__10303,(0),null);
var attrs = cljs.core.nth.call(null,vec__10303,(1),null);
var body = cljs.core.nthnext.call(null,vec__10303,(2));
var vec__10304 = p__10300;
var default_attrs = cljs.core.nth.call(null,vec__10304,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var set_attrs = function (p__10299,opts,var_args){
var p__10300 = null;
if (arguments.length > 2) {
  p__10300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attrs__delegate.call(this,p__10299,opts,p__10300);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__10305){
var p__10299 = cljs.core.first(arglist__10305);
arglist__10305 = cljs.core.next(arglist__10305);
var opts = cljs.core.first(arglist__10305);
var p__10300 = cljs.core.rest(arglist__10305);
return set_attrs__delegate(p__10299,opts,p__10300);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4622__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__){
return (function (p__10306,_){
var vec__10307 = p__10306;
var ___$1 = cljs.core.nth.call(null,vec__10307,(0),null);
var map__10308 = cljs.core.nth.call(null,vec__10307,(1),null);
var map__10308__$1 = ((cljs.core.seq_QMARK_.call(null,map__10308))?cljs.core.apply.call(null,cljs.core.hash_map,map__10308):map__10308);
var field = cljs.core.get.call(null,map__10308__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__,hierarchy__4622__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4622__auto__,method_table__4618__auto__,prefer_table__4619__auto__,method_cache__4620__auto__,cached_hierarchy__4621__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__10309,opts){
var vec__10310 = p__10309;
var _ = cljs.core.nth.call(null,vec__10310,(0),null);
var map__10311 = cljs.core.nth.call(null,vec__10310,(1),null);
var map__10311__$1 = ((cljs.core.seq_QMARK_.call(null,map__10311))?cljs.core.apply.call(null,cljs.core.hash_map,map__10311):map__10311);
var field = cljs.core.get.call(null,map__10311__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__10310;
return ((function (vec__10310,_,map__10311,map__10311__$1,field,component){
return (function (){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(vec__10310,_,map__10311,map__10311__$1,field,component))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__10313,p__10314){
var vec__10315 = p__10313;
var type = cljs.core.nth.call(null,vec__10315,(0),null);
var map__10316 = cljs.core.nth.call(null,vec__10315,(1),null);
var map__10316__$1 = ((cljs.core.seq_QMARK_.call(null,map__10316))?cljs.core.apply.call(null,cljs.core.hash_map,map__10316):map__10316);
var attrs = map__10316__$1;
var fmt = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__10317 = p__10314;
var map__10317__$1 = ((cljs.core.seq_QMARK_.call(null,map__10317))?cljs.core.apply.call(null,cljs.core.hash_map,map__10317):map__10317);
var save_BANG_ = cljs.core.get.call(null,map__10317__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10317__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__10315,type,map__10316,map__10316__$1,attrs,fmt,id,map__10317,map__10317__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__3721__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return "";
}
})();
var map__10318 = cljs.core.deref.call(null,display_value);
var map__10318__$1 = ((cljs.core.seq_QMARK_.call(null,map__10318))?cljs.core.apply.call(null,cljs.core.hash_map,map__10318):map__10318);
var value = cljs.core.get.call(null,map__10318__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__10318__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_value,vec__10315,type,map__10316,map__10316__$1,attrs,fmt,id,map__10317,map__10317__$1,save_BANG_,get){
return (function (p1__10312_SHARP_){
var temp__4124__auto__ = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__10312_SHARP_));
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(display_value,vec__10315,type,map__10316,map__10316__$1,attrs,fmt,id,map__10317,map__10317__$1,save_BANG_,get))
], null),attrs)], null);
});
;})(display_value,vec__10315,type,map__10316,map__10316__$1,attrs,fmt,id,map__10317,map__10317__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__10320,p__10321){
var vec__10322 = p__10320;
var _ = cljs.core.nth.call(null,vec__10322,(0),null);
var map__10323 = cljs.core.nth.call(null,vec__10322,(1),null);
var map__10323__$1 = ((cljs.core.seq_QMARK_.call(null,map__10323))?cljs.core.apply.call(null,cljs.core.hash_map,map__10323):map__10323);
var inline = cljs.core.get.call(null,map__10323__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var date_format = cljs.core.get.call(null,map__10323__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var id = cljs.core.get.call(null,map__10323__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__10324 = p__10321;
var map__10324__$1 = ((cljs.core.seq_QMARK_.call(null,map__10324))?cljs.core.apply.call(null,cljs.core.hash_map,map__10324):map__10324);
var save_BANG_ = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),expanded_QMARK_,((function (fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get){
return (function (){
return get.call(null,id);
});})(fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get))
,((function (fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get){
return (function (p1__10319_SHARP_){
return save_BANG_.call(null,id,p1__10319_SHARP_);
});})(fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get))
], null)], null);
});
;})(fmt,today,expanded_QMARK_,vec__10322,_,map__10323,map__10323__$1,inline,date_format,id,map__10324,map__10324__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__10325,p__10326){
var vec__10327 = p__10325;
var _ = cljs.core.nth.call(null,vec__10327,(0),null);
var map__10328 = cljs.core.nth.call(null,vec__10327,(1),null);
var map__10328__$1 = ((cljs.core.seq_QMARK_.call(null,map__10328))?cljs.core.apply.call(null,cljs.core.hash_map,map__10328):map__10328);
var field = cljs.core.get.call(null,map__10328__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__10328__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__10327;
var map__10329 = p__10326;
var map__10329__$1 = ((cljs.core.seq_QMARK_.call(null,map__10329))?cljs.core.apply.call(null,cljs.core.hash_map,map__10329):map__10329);
var opts = map__10329__$1;
var get = cljs.core.get.call(null,map__10329__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var state = reagent.core.atom.call(null,get.call(null,id));
return ((function (state,vec__10327,_,map__10328,map__10328__$1,field,id,component,map__10329,map__10329__$1,opts,get){
return (function (){
return reagent_forms.core.set_attrs.call(null,component,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"checked","checked",-50955819),state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(state,vec__10327,_,map__10328,map__10328__$1,field,id,component,map__10329,map__10329__$1,opts,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__10330,p__10331){
var vec__10332 = p__10330;
var type = cljs.core.nth.call(null,vec__10332,(0),null);
var map__10333 = cljs.core.nth.call(null,vec__10332,(1),null);
var map__10333__$1 = ((cljs.core.seq_QMARK_.call(null,map__10333))?cljs.core.apply.call(null,cljs.core.hash_map,map__10333):map__10333);
var attrs = map__10333__$1;
var placeholder = cljs.core.get.call(null,map__10333__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__10333__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__10333__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__10333__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__10334 = p__10331;
var map__10334__$1 = ((cljs.core.seq_QMARK_.call(null,map__10334))?cljs.core.apply.call(null,cljs.core.hash_map,map__10334):map__10334);
var get = cljs.core.get.call(null,map__10334__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__10332,type,map__10333,map__10333__$1,attrs,placeholder,postamble,preamble,id,map__10334,map__10334__$1,get){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
});
;})(vec__10332,type,map__10333,map__10333__$1,attrs,placeholder,postamble,preamble,id,map__10334,map__10334__$1,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__10335,p__10336){
var vec__10337 = p__10335;
var type = cljs.core.nth.call(null,vec__10337,(0),null);
var map__10338 = cljs.core.nth.call(null,vec__10337,(1),null);
var map__10338__$1 = ((cljs.core.seq_QMARK_.call(null,map__10338))?cljs.core.apply.call(null,cljs.core.hash_map,map__10338):map__10338);
var attrs = map__10338__$1;
var touch_event = cljs.core.get.call(null,map__10338__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__10338__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__10338__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__10337,(2));
var map__10339 = p__10336;
var map__10339__$1 = ((cljs.core.seq_QMARK_.call(null,map__10339))?cljs.core.apply.call(null,cljs.core.hash_map,map__10339):map__10339);
var opts = map__10339__$1;
var save_BANG_ = cljs.core.get.call(null,map__10339__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10339__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__10337,type,map__10338,map__10338__$1,attrs,touch_event,event,id,body,map__10339,map__10339__$1,opts,save_BANG_,get){
return (function (){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto__ = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto__)){
var message = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3721__auto__ = touch_event;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto__,vec__10337,type,map__10338,map__10338__$1,attrs,touch_event,event,id,body,map__10339,map__10339__$1,opts,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto__,vec__10337,type,map__10338,map__10338__$1,attrs,touch_event,event,id,body,map__10339,map__10339__$1,opts,save_BANG_,get))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
});
;})(vec__10337,type,map__10338,map__10338__$1,attrs,touch_event,event,id,body,map__10339,map__10339__$1,opts,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__10340,p__10341){
var vec__10342 = p__10340;
var type = cljs.core.nth.call(null,vec__10342,(0),null);
var map__10343 = cljs.core.nth.call(null,vec__10342,(1),null);
var map__10343__$1 = ((cljs.core.seq_QMARK_.call(null,map__10343))?cljs.core.apply.call(null,cljs.core.hash_map,map__10343):map__10343);
var attrs = map__10343__$1;
var value = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__10342,(2));
var map__10344 = p__10341;
var map__10344__$1 = ((cljs.core.seq_QMARK_.call(null,map__10344))?cljs.core.apply.call(null,cljs.core.hash_map,map__10344):map__10344);
var save_BANG_ = cljs.core.get.call(null,map__10344__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10344__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var state = reagent.core.atom.call(null,cljs.core._EQ_.call(null,value,get.call(null,id)));
return ((function (state,vec__10342,type,map__10343,map__10343__$1,attrs,value,id,field,body,map__10344,map__10344__$1,save_BANG_,get){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,vec__10342,type,map__10343,map__10343__$1,attrs,value,id,field,body,map__10344,map__10344__$1,save_BANG_,get){
return (function (){
save_BANG_.call(null,id,value);

return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(state,vec__10342,type,map__10343,map__10343__$1,attrs,value,id,field,body,map__10344,map__10344__$1,save_BANG_,get))
], null),attrs)], null),body);
});
;})(state,vec__10342,type,map__10343,map__10343__$1,attrs,value,id,field,body,map__10344,map__10344__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__10346,p__10347){
var vec__10348 = p__10346;
var type = cljs.core.nth.call(null,vec__10348,(0),null);
var map__10349 = cljs.core.nth.call(null,vec__10348,(1),null);
var map__10349__$1 = ((cljs.core.seq_QMARK_.call(null,map__10349))?cljs.core.apply.call(null,cljs.core.hash_map,map__10349):map__10349);
var data_source = cljs.core.get.call(null,map__10349__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var id = cljs.core.get.call(null,map__10349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__10350 = p__10347;
var map__10350__$1 = ((cljs.core.seq_QMARK_.call(null,map__10350))?cljs.core.apply.call(null,cljs.core.hash_map,map__10350):map__10350);
var save_BANG_ = cljs.core.get.call(null,map__10350__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10350__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (p1__10345_SHARP_){
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__10345_SHARP_));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
], null)], null),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = data_source.call(null,value.toLowerCase());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.typeahead","ul.typeahead",-1230632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__3721__auto__ = cljs.core.empty_QMARK_.call(null,results);
if(or__3721__auto__){
return or__3721__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
], null),(function (){var iter__4477__auto__ = ((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function iter__10351(s__10352){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (){
var s__10352__$1 = s__10352;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10352__$1);
if(temp__4126__auto____$1){
var s__10352__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10352__$2)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,s__10352__$2);
var size__4476__auto__ = cljs.core.count.call(null,c__4475__auto__);
var b__10354 = cljs.core.chunk_buffer.call(null,size__4476__auto__);
if((function (){var i__10353 = (0);
while(true){
if((i__10353 < size__4476__auto__)){
var result = cljs.core._nth.call(null,c__4475__auto__,i__10353);
cljs.core.chunk_append.call(null,b__10354,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10353,result,c__4475__auto__,size__4476__auto__,b__10354,s__10352__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(i__10353,result,c__4475__auto__,size__4476__auto__,b__10354,s__10352__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
], null),result], null));

var G__10355 = (i__10353 + (1));
i__10353 = G__10355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10354),iter__10351.call(null,cljs.core.chunk_rest.call(null,s__10352__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10354),null);
}
} else {
var result = cljs.core.first.call(null,s__10352__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (result,s__10352__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(result,s__10352__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
], null),result], null),iter__10351.call(null,cljs.core.rest.call(null,s__10352__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
,null,null));
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
;
return iter__4477__auto__.call(null,results);
})()], null);
} else {
return null;
}
})()], null);
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__10348,type,map__10349,map__10349__$1,data_source,id,map__10350,map__10350__$1,save_BANG_,get))
}));
reagent_forms.core.group_item = (function group_item(p__10356,p__10357,selections,field,id){
var vec__10361 = p__10356;
var type = cljs.core.nth.call(null,vec__10361,(0),null);
var map__10362 = cljs.core.nth.call(null,vec__10361,(1),null);
var map__10362__$1 = ((cljs.core.seq_QMARK_.call(null,map__10362))?cljs.core.apply.call(null,cljs.core.hash_map,map__10362):map__10362);
var attrs = map__10362__$1;
var touch_event = cljs.core.get.call(null,map__10362__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__10362__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__10361,(2));
var map__10363 = p__10357;
var map__10363__$1 = ((cljs.core.seq_QMARK_.call(null,map__10363))?cljs.core.apply.call(null,cljs.core.hash_map,map__10363):map__10363);
var multi_select = cljs.core.get.call(null,map__10363__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__10363__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10363__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var handle_click_BANG_ = ((function (vec__10361,type,map__10362,map__10362__$1,attrs,touch_event,key,body,map__10363,map__10363__$1,multi_select,save_BANG_,get){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = key.call(null,cljs.core.deref.call(null,selections));
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?key:null));
}
});})(vec__10361,type,map__10362,map__10362__$1,attrs,touch_event,key,body,map__10363,map__10363__$1,multi_select,save_BANG_,get))
;
return ((function (vec__10361,type,map__10362,map__10362__$1,attrs,touch_event,key,body,map__10363,map__10363__$1,multi_select,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?"active":null),(function (){var or__3721__auto__ = touch_event;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__10361,type,map__10362,map__10362__$1,attrs,touch_event,key,body,map__10363,map__10363__$1,multi_select,save_BANG_,get))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__10364){
var map__10369 = p__10364;
var map__10369__$1 = ((cljs.core.seq_QMARK_.call(null,map__10369))?cljs.core.apply.call(null,cljs.core.hash_map,map__10369):map__10369);
var multi_select = cljs.core.get.call(null,map__10369__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__10369__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__10369,map__10369__$1,multi_select,get){
return (function (m,p__10370){
var vec__10371 = p__10370;
var _ = cljs.core.nth.call(null,vec__10371,(0),null);
var map__10372 = cljs.core.nth.call(null,vec__10371,(1),null);
var map__10372__$1 = ((cljs.core.seq_QMARK_.call(null,map__10372))?cljs.core.apply.call(null,cljs.core.hash_map,map__10372):map__10372);
var key = cljs.core.get.call(null,map__10372__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__10369,map__10369__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
* selectors might be passed in inline or as a collection
*/
reagent_forms.core.extract_selectors = (function extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function selection_group(p__10375,p__10376){
var vec__10382 = p__10375;
var type = cljs.core.nth.call(null,vec__10382,(0),null);
var map__10383 = cljs.core.nth.call(null,vec__10382,(1),null);
var map__10383__$1 = ((cljs.core.seq_QMARK_.call(null,map__10383))?cljs.core.apply.call(null,cljs.core.hash_map,map__10383):map__10383);
var attrs = map__10383__$1;
var id = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__10382,(2));
var map__10384 = p__10376;
var map__10384__$1 = ((cljs.core.seq_QMARK_.call(null,map__10384))?cljs.core.apply.call(null,cljs.core.hash_map,map__10384):map__10384);
var opts = map__10384__$1;
var get = cljs.core.get.call(null,map__10384__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get){
return (function (p1__10373_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get){
return (function (p__10385){
var vec__10386 = p__10385;
var k = cljs.core.nth.call(null,vec__10386,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get))
,p1__10373_SHARP_));
});})(selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get){
return (function (p1__10374_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__10374_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__10382,type,map__10383,map__10383__$1,attrs,id,field,selection_items,map__10384,map__10384__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (field,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
});
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (field,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
});
}));
reagent_forms.core.map_options = (function map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4477__auto__ = (function iter__10399(s__10400){
return (new cljs.core.LazySeq(null,(function (){
var s__10400__$1 = s__10400;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10400__$1);
if(temp__4126__auto__){
var s__10400__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10400__$2)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,s__10400__$2);
var size__4476__auto__ = cljs.core.count.call(null,c__4475__auto__);
var b__10402 = cljs.core.chunk_buffer.call(null,size__4476__auto__);
if((function (){var i__10401 = (0);
while(true){
if((i__10401 < size__4476__auto__)){
var vec__10407 = cljs.core._nth.call(null,c__4475__auto__,i__10401);
var _ = cljs.core.nth.call(null,vec__10407,(0),null);
var map__10408 = cljs.core.nth.call(null,vec__10407,(1),null);
var map__10408__$1 = ((cljs.core.seq_QMARK_.call(null,map__10408))?cljs.core.apply.call(null,cljs.core.hash_map,map__10408):map__10408);
var key = cljs.core.get.call(null,map__10408__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__10407,(2),null);
cljs.core.chunk_append.call(null,b__10402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__10411 = (i__10401 + (1));
i__10401 = G__10411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10402),iter__10399.call(null,cljs.core.chunk_rest.call(null,s__10400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10402),null);
}
} else {
var vec__10409 = cljs.core.first.call(null,s__10400__$2);
var _ = cljs.core.nth.call(null,vec__10409,(0),null);
var map__10410 = cljs.core.nth.call(null,vec__10409,(1),null);
var map__10410__$1 = ((cljs.core.seq_QMARK_.call(null,map__10410))?cljs.core.apply.call(null,cljs.core.hash_map,map__10410):map__10410);
var key = cljs.core.get.call(null,map__10410__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__10409,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),iter__10399.call(null,cljs.core.rest.call(null,s__10400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4477__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10412_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__10412_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__10415,p__10416){
var vec__10417 = p__10415;
var type = cljs.core.nth.call(null,vec__10417,(0),null);
var map__10418 = cljs.core.nth.call(null,vec__10417,(1),null);
var map__10418__$1 = ((cljs.core.seq_QMARK_.call(null,map__10418))?cljs.core.apply.call(null,cljs.core.hash_map,map__10418):map__10418);
var attrs = map__10418__$1;
var id = cljs.core.get.call(null,map__10418__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__10418__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__10417,(2));
var map__10419 = p__10416;
var map__10419__$1 = ((cljs.core.seq_QMARK_.call(null,map__10419))?cljs.core.apply.call(null,cljs.core.hash_map,map__10419):map__10419);
var save_BANG_ = cljs.core.get.call(null,map__10419__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__10419__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__10419__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__3721__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__10417,type,map__10418,map__10418__$1,attrs,id,field,options,map__10419,map__10419__$1,save_BANG_,get,doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (options__$1,options_lookup,selection,vec__10417,type,map__10418,map__10418__$1,attrs,id,field,options,map__10419,map__10419__$1,save_BANG_,get,doc){
return (function (p1__10413_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__10413_SHARP_)));
});})(options__$1,options_lookup,selection,vec__10417,type,map__10418,map__10418__$1,attrs,id,field,options,map__10419,map__10419__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (options__$1,options_lookup,selection,vec__10417,type,map__10418,map__10418__$1,attrs,id,field,options,map__10419,map__10419__$1,save_BANG_,get,doc){
return (function (p1__10414_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__10414_SHARP_));
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(options__$1,options_lookup,selection,vec__10417,type,map__10418,map__10418__$1,attrs,id,field,options,map__10419,map__10419__$1,save_BANG_,get,doc))
,options__$1))], null);
});
;})(options__$1,options_lookup,selection,vec__10417,type,map__10418,map__10418__$1,attrs,id,field,options,map__10419,map__10419__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__10420_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__10420_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_.call(null,node)){
var field = reagent_forms.core.init_field.call(null,node,opts);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__10421){
var form = cljs.core.first(arglist__10421);
arglist__10421 = cljs.core.next(arglist__10421);
var doc = cljs.core.first(arglist__10421);
var events = cljs.core.rest(arglist__10421);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;

//# sourceMappingURL=core.js.map