(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[44],{879:function(e,i,t){"use strict";t.r(i),t.d(i,"default",(function(){return C}));var r=t(142),s=t(143),a=t(209),n=t(144),l=t(145),o=t(148),c=t(461),b=t(543),u=t(146),y=t(272),v=t(175),h=t(151),d=(t(152),t(147),t(384)),p=(t(150),t(149)),O=t(192),f=t(286),j=t(338),_=t(304),k=t(307),g=t(308),m=t(969),w=t(970),L=t(971),M=t(802),V=function(e){Object(n.a)(t,e);var i=Object(l.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=i.call(this,e))._visibilityHandles={},s.allLayers=new c.a({getCollections:function(){return[s.layers]},getChildrenFunction:function(e){return"layers"in e?e.layers:null}}),s.allTables=Object(m.a)(Object(a.a)(s)),s.fullExtent=void 0,s.operationalLayerType="GroupLayer",s.spatialReference=void 0,s.type="group",s}return Object(s.a)(t,[{key:"initialize",value:function(){var e=this;this._enforceVisibility(this.visibilityMode,this.visible),this.own(Object(v.e)((function(){return e.visible}),this._onVisibilityChange.bind(this),v.c))}},{key:"_writeLayers",value:function(e,i,t,r){var s=[];if(!e)return s;e.forEach((function(e){var i=Object(M.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);Object(u.k)(i)&&i.layerType&&s.push(i)})),i.layers=s}},{key:"portalItem",set:function(e){this._set("portalItem",e)}},{key:"visibilityMode",set:function(e){var i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=this;return Object(b.a)(this,(function(i){i(e.layers,e.tables)}))}},{key:"layerAdded",value:function(e){var i=this;e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=Object(v.e)((function(){return e.visible}),(function(t){return i._onChildVisibilityChange(e,t)}),v.c)}},{key:"layerRemoved",value:function(e){var i=this._visibilityHandles[e.uid];i&&(i.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}},{key:"_turnOffOtherLayers",value:function(e){this.layers.forEach((function(i){i!==e&&(i.visible=!1)}))}},{key:"_enforceVisibility",value:function(e,i){if(Object(d.a)(this).initialized){var t=this.layers,r=t.find((function(e){return e.visible}));switch(e){case"exclusive":t.length&&!r&&((r=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((function(e){e.visible=i}))}}}},{key:"_onVisibilityChange",value:function(e){"inherited"===this.visibilityMode&&this.layers.forEach((function(i){i.visible=e}))}},{key:"_onChildVisibilityChange",value:function(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}},{key:"_isAnyLayerVisible",value:function(){return this.layers.some((function(e){return e.visible}))}}]),t}(Object(j.a)(Object(g.a)(Object(_.a)(Object(k.a)(Object(L.a)(Object(w.a)(Object(y.a)(f.a))))))));Object(o.a)([Object(h.b)({readOnly:!0,dependsOn:[]})],V.prototype,"allLayers",void 0),Object(o.a)([Object(h.b)({readOnly:!0})],V.prototype,"allTables",void 0),Object(o.a)([Object(h.b)()],V.prototype,"fullExtent",void 0),Object(o.a)([Object(h.b)({json:{read:!1,write:{ignoreOrigin:!0}}})],V.prototype,"layers",void 0),Object(o.a)([Object(O.a)("layers")],V.prototype,"_writeLayers",null),Object(o.a)([Object(h.b)({type:["GroupLayer"]})],V.prototype,"operationalLayerType",void 0),Object(o.a)([Object(h.b)({json:{origins:{"web-document":{read:!1,write:!1}}}})],V.prototype,"portalItem",null),Object(o.a)([Object(h.b)()],V.prototype,"spatialReference",void 0),Object(o.a)([Object(h.b)({json:{read:!1},readOnly:!0,value:"group"})],V.prototype,"type",void 0),Object(o.a)([Object(h.b)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],V.prototype,"visibilityMode",null);var C=V=Object(o.a)([Object(p.a)("esri.layers.GroupLayer")],V)}}]);
//# sourceMappingURL=44.ec3fddb8.chunk.js.map