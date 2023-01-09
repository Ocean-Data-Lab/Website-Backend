(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[100],{1390:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return b}));var n=i(142),r=i(143),s=i(144),a=i(145),o=i(148),u=(i(156),i(150),i(152),i(147),i(234),i(149)),c=i(575),h=i(675),l=i(1060),d=function(){function e(){Object(n.a)(this,e),this.gradient=null,this.height=512,this.width=512}return Object(r.a)(e,[{key:"render",value:function(e){Object(c.d)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}]),e}(),f=function(e){Object(s.a)(i,e);var t=Object(a.a)(i);function i(e){var r;return Object(n.a)(this,i),(r=t.call(this,e))._intensityInfo={minDensity:0,maxDensity:0},r.type="heatmap",r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},r._container=new h.a(e.tileInfoView),r}return Object(r.a)(i,[{key:"createTile",value:function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}},{key:"onConfigUpdate",value:function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minDensity,n=t.maxDensity,r=t.colorStops;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=n,this._gradient=Object(c.g)(r),this.tiles.forEach((function(t){var r=t.bitmap.source;r&&(r.minDensity=i,r.maxDensity=n,r.gradient=e._gradient,t.bitmap.invalidateTexture())}))}}},{key:"hitTest",value:function(){return Promise.resolve([])}},{key:"install",value:function(e){e.addChild(this._container)}},{key:"uninstall",value:function(e){this._container.removeAllChildren(),e.removeChild(this._container)}},{key:"disposeTile",value:function(e){this._container.removeChild(e),e.destroy()}},{key:"supportsRenderer",value:function(e){return e&&"heatmap"===e.type}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,r=n.minDensity,s=n.maxDensity,a=t.bitmap.source||new d;a.intensities=i&&i.matrix||null,a.minDensity=r,a.maxDensity=s,a.gradient=this._gradient,t.bitmap.source=a,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}}},{key:"onTileError",value:function(e){console.error(e)}},{key:"lockGPUUploads",value:function(){}},{key:"unlockGPUUploads",value:function(){}},{key:"fetchResource",value:function(e,t){return console.error(e),Promise.reject()}}]),i}(l.a),b=f=Object(o.a)([Object(u.a)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],f)},382:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(142),r=i(143),s=i(146),a=function(){function e(t,i,r){Object(n.a)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=r}return Object(r.a)(e,[{key:"width",get:function(){return Object(s.k)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return Object(s.k)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!Object(s.j)(t)){var i=this.filter({pixelBlock:t});if(!Object(s.j)(i.pixelBlock)){var n=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(n),e.putImageData(r,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return Object(s.j)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},397:function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var n=i(14),r=i(142),s=i(143),a=i(209),o=i(164),u=i(163),c=i(144),h=i(145),l=i(146),d=i(204),f=i(178),b=i(184),p=i(208),v=i(382),y=i(153),m=i(179);function g(e,t,i){var n={target:y.A.TEXTURE_2D,pixelFormat:y.p.RGBA,internalFormat:y.p.RGBA,dataType:y.q.UNSIGNED_BYTE,wrapMode:y.B.CLAMP_TO_EDGE};return t&&i&&(n.width=t,n.height=i),new m.a(e,n)}var x=function(e){Object(c.a)(i,e);var t=Object(h.a)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1?arguments[1]:void 0,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(r.a)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=o,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=s,e.source=n,e.requestRender=e.requestRender.bind(Object(a.a)(e)),e}return Object(s.a)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){Object(o.a)(Object(u.a)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:Object(f.b)()}}},{key:"setTransform",value:function(e){var t=Object(d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),r=Object(n.a)(i,2),s=r[0],a=r[1],o=this.resolution/this.pixelRatio/e.resolution,u=o*this.width,c=o*this.height,h=Math.PI*this.rotation/180;Object(d.c)(t,t,Object(b.b)(s,a)),Object(d.c)(t,t,Object(b.b)(u/2,c/2)),Object(d.k)(t,t,-h),Object(d.c)(t,t,Object(b.b)(-u/2,-c/2)),Object(d.h)(t,t,Object(b.b)(u,c)),Object(d.i)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null!==(t=this._texture)&&void 0!==t&&t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=g(e,this.sourceWidth,this.sourceHeight):this._texture=g(e));var i,n=this.source;if(n){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=n)&&"render"in i)if(n instanceof v.a){var r=n.getRenderedRasterPixels();this._texture.setData(Object(l.k)(r)?r.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(n));else(function(e){return e&&!("render"in e)})(n)&&this._texture.setData(n);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(p.a)},675:function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var n=i(16),r=i(14),s=i(142),a=i(143),o=i(164),u=i(163),c=i(144),h=i(145),l=i(180),d=i(178),f=i(397),b=function(e){Object(c.a)(i,e);var t=Object(h.a)(i);function i(e,n,r,a,o){var u,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return Object(s.a)(this,i),(u=t.call(this,e,n,r,a,o)).bitmap=new f.a(c,"standard",!1),u.bitmap.coordScale=[a,o],u.bitmap.once("isReady",(function(){return u.ready()})),u}return Object(a.a)(i,[{key:"destroy",value:function(){Object(o.a)(Object(u.a)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(e){Object(o.a)(Object(u.a)(i.prototype),"beforeRender",this).call(this,e),this.bitmap.beforeRender(e)}},{key:"afterRender",value:function(e){Object(o.a)(Object(u.a)(i.prototype),"afterRender",this).call(this,e),this.bitmap.afterRender(e)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(e){this.bitmap.stencilRef=e}},{key:"_createTransforms",value:function(){return{dvs:Object(d.b)(),tileMat3:Object(d.b)()}}},{key:"setTransform",value:function(e,t){Object(o.a)(Object(u.a)(i.prototype),"setTransform",this).call(this,e,t),this.bitmap.transforms.dvs=this.transforms.dvs}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(i(302).a),p=i(244),v=i(157),y=function(e){Object(c.a)(i,e);var t=Object(h.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.bitmap.blendFunction}))}},{key:"createTile",value:function(e){var t=this._tileInfoView.getTileBounds(Object(l.g)(),e),i=Object(r.a)(this._tileInfoView.tileInfo.size,2),n=i[0],s=i[1];return new b(e,t[0],t[3],n,s)}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"bitmap (tile)",brushes:[p.a.bitmap],target:function(){return t.children.map((function(e){return e.bitmap}))},drawPhase:v.c.MAP});return[].concat(Object(n.a)(Object(o.a)(Object(u.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[r])}},{key:"doRender",value:function(e){this.visible&&e.drawPhase===v.c.MAP&&Object(o.a)(Object(u.a)(i.prototype),"doRender",this).call(this,e)}}]),i}(i(317).a)}}]);