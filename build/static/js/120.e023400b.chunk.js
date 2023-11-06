(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[120],{1088:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return B}));var n,a=r(60),i=r(155),l=r(16),o=r(5),s=r(142),u=r(143),c=r(164),b=r(163),y=r(144),f=r(145),p=r(154),v=r.n(p),d=r(148),O=(r(177),r(194)),j=r(461),h=r(146),m=r(272),g=r(162),k=r(175),S=r(183),w=r(151),x=(r(152),r(147),r(150)),E=r(190),_=r(149),I=r(192),P=r(185),L=r(286),F=r(338),G=r(304),M=r(307),C=r(401),J=r(308),N=r(260),T=r(252),R=r(160),K=r(347),z=r(267),A=r(248),H=r(743),W=r(176),D=n=function(e){Object(y.a)(r,e);var t=Object(f.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.apply(this,arguments))._sublayersHandles=null,e.description=null,e.id=null,e.networkLink=null,e.title=null,e.sourceJSON=null,e.fullExtent=null,e}return Object(u.a)(r,[{key:"initialize",value:function(){var e=this;Object(k.g)((function(){return e.networkLink})).then((function(){return Object(k.g)((function(){return!0===e.visible}))})).then((function(){return e.load()}))}},{key:"load",value:function(e){var t=this;if(this.networkLink&&!this.networkLink.viewFormat){var r=Object(h.k)(e)?e.signal:null,a=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=Object(H.a)(e.sublayers);t.fullExtent=W.a.fromJSON(r),t.sourceJSON=e;var a=Object(x.m)(O.a.ofType(n),Object(H.e)(n,e));t.sublayers?t.sublayers.addMany(a):t.sublayers=a,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(a),Promise.resolve(this)}}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return Object(x.m)(O.a.ofType(n),e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,t){return!!t.visibility}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"_fetchService",value:function(e,t){return Object(H.b)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return Object(H.d)(e.data)}))}}]),r}(T.a.EventedMixin(Object(R.b)(K.a)));Object(d.a)([Object(w.b)()],D.prototype,"description",void 0),Object(d.a)([Object(w.b)()],D.prototype,"id",void 0),Object(d.a)([Object(w.b)({readOnly:!0,value:null})],D.prototype,"networkLink",void 0),Object(d.a)([Object(w.b)({json:{write:{allowNull:!0}}})],D.prototype,"parent",void 0),Object(d.a)([Object(w.b)({value:null,json:{write:{allowNull:!0}}})],D.prototype,"sublayers",null),Object(d.a)([Object(A.a)("sublayers")],D.prototype,"castSublayers",null),Object(d.a)([Object(w.b)({value:null,json:{read:{source:"name",reader:function(e){return Object(z.d)(e)}}}})],D.prototype,"title",void 0),Object(d.a)([Object(w.b)({value:!0})],D.prototype,"visible",null),Object(d.a)([Object(E.a)("visible",["visibility"])],D.prototype,"readVisible",null),Object(d.a)([Object(w.b)()],D.prototype,"sourceJSON",void 0),Object(d.a)([Object(w.b)({value:null})],D.prototype,"layer",null),Object(d.a)([Object(w.b)({type:W.a})],D.prototype,"fullExtent",void 0);var V=D=n=Object(d.a)([Object(_.a)("esri.layers.support.KMLSublayer")],D),q=["kml","xml"],U=function(e){Object(y.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a)))._visibleFolders=[],e.allSublayers=new j.a({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=P.a.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return Object(u.a)(r,[{key:"initialize",value:function(){var e=this;this.own([Object(k.e)((function(){return e.sublayers}),(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),k.c),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))])}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(o.a)({url:e},t):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,t){this._visibleFolders=t.visibleFolders}},{key:"readSublayers",value:function(e,t,r){return Object(H.e)(V,t,r,this._visibleFolders)}},{key:"writeSublayers",value:function(e,t){for(var r=[],n=e.toArray();n.length;){var a=n[0];a.networkLink||(a.visible&&r.push(a.id),a.sublayers&&n.push.apply(n,Object(l.a)(a.sublayers.toArray()))),n.shift()}t.visibleFolders=r}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(S.m)(this.url,q)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var t=this,r=Object(h.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(g.o).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"destroy",value:function(){Object(c.a)(Object(b.a)(r.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:function(){var e=Object(i.a)(v.a.mark((function e(t){var r,n,a=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){return a.resourceInfo?{ssl:!1,data:a.resourceInfo}:Object(H.b)(a.url,a.outSpatialReference,a.refreshInterval,t)}));case 2:r=e.sent,(n=Object(H.d)(r.data))&&this.read(n,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_recomputeFullExtent",value:function(){var e=null;Object(h.k)(this.extent)&&(e=this.extent.clone());return function t(r){if(r.sublayers){var n,i=Object(a.a)(r.sublayers.items);try{for(i.s();!(n=i.n()).done;){var l=n.value;t(l),l.visible&&l.fullExtent&&(Object(h.k)(e)?e.union(l.fullExtent):e=l.fullExtent.clone())}}catch(o){i.e(o)}finally{i.f()}}}(this),e}}]),r}(Object(F.a)(Object(C.a)(Object(J.a)(Object(G.a)(Object(M.a)(Object(m.a)(L.a)))))));Object(d.a)([Object(w.b)({readOnly:!0})],U.prototype,"allSublayers",void 0),Object(d.a)([Object(w.b)({type:P.a})],U.prototype,"outSpatialReference",void 0),Object(d.a)([Object(w.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),Object(d.a)([Object(w.b)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"legendEnabled",void 0),Object(d.a)([Object(w.b)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),Object(d.a)([Object(w.b)({type:["KML"]})],U.prototype,"operationalLayerType",void 0),Object(d.a)([Object(w.b)({})],U.prototype,"resourceInfo",void 0),Object(d.a)([Object(w.b)({type:O.a.ofType(V),json:{write:{ignoreOrigin:!0}}})],U.prototype,"sublayers",void 0),Object(d.a)([Object(E.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],U.prototype,"readSublayersFromItemOrWebMap",null),Object(d.a)([Object(E.a)("service","sublayers",["sublayers"])],U.prototype,"readSublayers",null),Object(d.a)([Object(I.a)("sublayers")],U.prototype,"writeSublayers",null),Object(d.a)([Object(w.b)({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),Object(d.a)([Object(w.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],U.prototype,"title",null),Object(d.a)([Object(w.b)(N.o)],U.prototype,"url",void 0),Object(d.a)([Object(w.b)({readOnly:!0})],U.prototype,"visibleSublayers",null),Object(d.a)([Object(w.b)({type:W.a})],U.prototype,"extent",void 0),Object(d.a)([Object(w.b)()],U.prototype,"fullExtent",null);var B=U=Object(d.a)([Object(_.a)("esri.layers.KMLLayer")],U)},743:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return g}));var n=r(155),a=r(60),i=r(154),l=r.n(i),o=r(356),s=r(344),u=r(282),c=r(186),b=r(161),y=r(183),f=r(185),p=r(420),v=r(206),d=r(421),O=r(288),j={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function h(e){var t=e.folders||[],r=t.slice(),n=new Map,i=new Map,l=new Map,o=new Map,s=new Map,u={esriGeometryPoint:i,esriGeometryPolyline:l,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=Object(b.a)(e);t.featureSet.features=[];var r=e.featureSet.geometryType;n.set(r,t);var a=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?k(i,a,e.featureSet.features):"esriGeometryPolyline"===r?k(l,a,e.featureSet.features):"esriGeometryPolygon"===r&&k(o,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){s.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(n){var a=function(e,t,r){var n=function(e,t){var r;return t.some((function(t){return t.id===e&&(r=t,!0)})),r}(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);a&&r.push(a)}))})),r.forEach((function(e){if(e.featureInfos){e.points=Object(b.a)(n.get("esriGeometryPoint")),e.polylines=Object(b.a)(n.get("esriGeometryPolyline")),e.polygons=Object(b.a)(n.get("esriGeometryPolygon")),e.mapImages=[];var t,r=Object(a.a)(e.featureInfos);try{for(r.s();!(t=r.n()).done;){var i=t.value;switch(i.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var l=u[i.type].get(i.id);l&&e[j[i.type]].featureSet.features.push(l);break;case"GroundOverlay":var o=s.get(i.id);o&&e.mapImages.push(o)}}}catch(c){r.e(c)}finally{r.f()}e.fullExtent=x([e])}}));var c=x(r);return{folders:t,sublayers:r,extent:c}}function m(e,t,r,n){var a=s.b&&s.b.findCredential(e);e=Object(y.e)(e,{token:a&&a.token});var i=o.a.kmlServiceUrl;return Object(c.default)(i,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=[],i={},l=t.sublayers,o=t.folders.map((function(e){return e.id}));return l.forEach((function(t){var l=new e;if(r?l.read(t,r):l.read(t),n.length&&o.includes(l.id)&&(l.visible=n.includes(l.id)),i[t.id]=l,null!=t.parentFolderId&&-1!==t.parentFolderId){var s=i[t.parentFolderId];s.sublayers||(s.sublayers=[]),s.sublayers.unshift(l)}else a.unshift(l)})),a}function k(e,t,r){r.forEach((function(r){e.set(r.attributes[t],r)}))}function S(e){return w.apply(this,arguments)}function w(){return(w=Object(n.a)(l.a.mark((function e(t){var r,n,i,o,s,c,b,y,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=O.default.fromJSON(t.featureSet).features,n=t.layerDefinition,i=Object(d.a)(n.drawingInfo.renderer),o=u.a.fromJSON(t.popupInfo),s=[],c=Object(a.a)(r),e.prev=2,c.s();case 4:if((b=c.n()).done){e.next=12;break}return y=b.value,e.next=8,i.getSymbolAsync(y);case 8:f=e.sent,y.symbol=f,y.popupTemplate=o,y.visible=!0,s.push(y);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:return e.abrupt("return",s);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function x(e){var t,r=Object(p.b)(p.a),n=Object(p.b)(p.a),i=Object(a.a)(e);try{for(i.s();!(t=i.n()).done;){var l=t.value;if(l.polygons&&l.polygons.featureSet&&l.polygons.featureSet.features){var o,s=Object(a.a)(l.polygons.featureSet.features);try{for(s.s();!(o=s.n()).done;){var u=o.value;Object(v.b)(r,u.geometry),Object(p.e)(n,r)}}catch(k){s.e(k)}finally{s.f()}}if(l.polylines&&l.polylines.featureSet&&l.polylines.featureSet.features){var c,b=Object(a.a)(l.polylines.featureSet.features);try{for(b.s();!(c=b.n()).done;){var y=c.value;Object(v.b)(r,y.geometry),Object(p.e)(n,r)}}catch(k){b.e(k)}finally{b.f()}}if(l.points&&l.points.featureSet&&l.points.featureSet.features){var d,O=Object(a.a)(l.points.featureSet.features);try{for(O.s();!(d=O.n()).done;){var j=d.value;Object(v.b)(r,j.geometry),Object(p.e)(n,r)}}catch(k){O.e(k)}finally{O.f()}}if(l.mapImages){var h,m=Object(a.a)(l.mapImages);try{for(m.s();!(h=m.n()).done;){var g=h.value;Object(v.b)(r,g.extent),Object(p.e)(n,r)}}catch(k){m.e(k)}finally{m.f()}}}}catch(k){i.e(k)}finally{i.f()}return Object(p.d)(n,p.a)?null:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:f.a.WGS84}}}}]);
//# sourceMappingURL=120.e023400b.chunk.js.map