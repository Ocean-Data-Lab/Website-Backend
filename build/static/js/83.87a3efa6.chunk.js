(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[83],{1392:function(e,t,n){"use strict";n.r(t),n.d(t,"previewCIMSymbol",(function(){return A}));var r,i,a=n(155),o=n(154),c=n.n(o),u=n(167),l=n(60),s=n(142),f=n(143),d=n(202),m=n(186),h=n(162),g=n(267),p=n(168),y=n(292),v=n(352),b=n(859),C=n(358),P=n(289),O=n(833),M=n(986);(i=r||(r={})).Legend="legend",i.Preview="preview";var S=function(e,t,n){if(e&&e.targetSize){var r;if(n){var i=Math.max(n.frame.xmax-n.frame.xmin,n.frame.ymax-n.frame.ymin);r=e.targetSize/Object(u.c)(i)}else r=e.targetSize/t.referenceSize;return r}return e&&e.scaleFactor?e.scaleFactor:1},x={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}},w=function(){function e(t,n){Object(s.a)(this,e),this._spatialReference=t,this._avoidSDF=n,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new C.a,this._cimResourceManager=new v.a,this._rasterizer=new b.a(this._cimResourceManager)}return Object(f.a)(e,[{key:"rasterizeCIMSymbolAsync",value:function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,i,a,o,u,l){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||(n?null!=n.centroid?"esriGeometryPolygon":Object(p.c)(n.geometry):null)||T(t),e.next=3,this.analyzeCIMSymbol(t,n?R(n.attributes):null,r,i,l);case 3:return s=e.sent,e.abrupt("return",this.rasterizeCIMSymbol(s,n,i,a,o,u));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a,o,c,u){return e.apply(this,arguments)}}()},{key:"analyzeCIMSymbol",value:function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,i,a){var o,u,l,s,f,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],u=n?{geometryType:i,spatialReference:this._spatialReference,fields:n}:null,e.next=3,Object(y.b)(t.data,u,this._cimResourceManager,o,this._avoidSDF);case 3:for(Object(h.p)(a),s=0,f=o;s<f.length;s++)"CIMPictureMarker"!==(d=f[s]).cim.type&&"CIMPictureFill"!==d.cim.type&&"CIMPictureStroke"!==d.cim.type||(l||(l=[]),l.push(this._fetchPictureMarkerResource(d,a))),r&&"text"===d.type&&"string"==typeof d.text&&d.text.includes("[")&&(d.text=Object(P.c)(r,d.text,d.cim.textCase));if(e.t0=l,!e.t0){e.next=9;break}return e.next=9,Promise.all(l);case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a){return e.apply(this,arguments)}}()},{key:"_fetchPictureMarkerResource",value:function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.materialHash,this._pictureMarkerCache.get(r)){e.next=6;break}return e.next=4,Object(m.default)(t.cim.url,{responseType:"image",signal:n&&n.signal});case 4:i=e.sent.data,this._pictureMarkerCache.set(r,i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"rasterizeCIMSymbol",value:function(e,t,n,r,i,a){var o,c=[],u=Object(l.a)(e);try{for(u.s();!(o=u.n()).done;){var s=o.value;r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,i,a));var f=this._getRasterizedResource(s,t,n,r,i,a);if(f){var d=0,m=f.anchorX||0,h=f.anchorY||0,g=!1,p=0,y=0;if("esriGeometryPoint"===n){var v=S(r,s,null);if(p=Object(P.d)(s.offsetX,t,i,a)*v||0,y=Object(P.d)(s.offsetY,t,i,a)*v||0,"marker"===s.type)d=Object(P.d)(s.rotation,t,i,a)||0,g=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(d=Object(P.d)(s.angle,t,i,a)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":m=-.5;break;case"right":m=.5;break;default:m=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":h=.5;break;case"bottom":h=-.5;break;case"baseline":h=-.25;break;default:h=0}}}null!=f&&c.push({angle:d,rotateClockWise:g,anchorX:m,anchorY:h,offsetX:p,offsetY:y,rasterizedResource:f})}}}catch(b){u.e(b)}finally{u.f()}return this.getSymbolImage(c)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),n=t.getContext("2d"),r=0,i=0,a=0,o=0,c=[],l=0;l<e.length;l++){var s=e[l],f=s.rasterizedResource;if(f){var d=f.size,m=s.offsetX,h=s.offsetY,g=s.anchorX,p=s.anchorY,y=s.rotateClockWise||!1,v=s.angle,b=Object(u.c)(m)-d[0]*(.5+g),C=Object(u.c)(h)-d[1]*(.5+p),P=b+d[0],O=C+d[1];if(v){y&&(v=-v);var S=Math.sin(v*Math.PI/180),x=Math.cos(v*Math.PI/180),w=b*x-C*S,R=b*S+C*x,T=b*x-O*S,j=b*S+O*x,k=P*x-O*S,I=P*S+O*x,z=P*x-C*S,L=P*S+C*x;b=Math.min(w,T,k,z),C=Math.min(R,j,I,L),P=Math.max(w,T,k,z),O=Math.max(R,j,I,L)}r=b<r?b:r,i=C<i?C:i,a=P>a?P:a,o=O>o?O:o;var A=n.createImageData(f.size[0],f.size[1]);A.data.set(new Uint8ClampedArray(f.image.buffer));var B={offsetX:m,offsetY:h,rotateClockwise:y,angle:v,rasterizedImage:A,anchorX:g,anchorY:p};c.push(B)}}t.width=a-r,t.height=o-i;for(var D=-r,F=o,_=0;_<c.length;_++){var N=c[_],E=this._imageDataToCanvas(N.rasterizedImage),U=N.rasterizedImage.width,W=N.rasterizedImage.height,H=D-U*(.5+N.anchorX),X=F-W*(.5-N.anchorY);if(N.angle){var Y=(360-N.angle)*Math.PI/180;n.save(),n.translate(Object(u.c)(N.offsetX),-Object(u.c)(N.offsetY)),n.translate(D,F),n.rotate(Y),n.translate(-D,-F),n.drawImage(E,H,X),n.restore()}else n.drawImage(E,H+Object(u.c)(N.offsetX),X-Object(u.c)(N.offsetY))}var G=new M.a({x:D/t.width-.5,y:F/t.height-.5});return{imageData:0!==t.width&&0!==t.height?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:G}}},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,n,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var i=this._imageDataCanvas,a=i.getContext("2d");if(i.width=t,i.height=n,a.drawImage(e,0,0,t,n),r){a.save();var o=new d.a(r);a.fillStyle=o.toHex(),a.globalCompositeOperation="multiply",a.fillRect(0,0,t,n),a.globalCompositeOperation="destination-atop",a.drawImage(e,0,0,t,n),a.restore()}return new Uint32Array(a.getImageData(0,0,t,n).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,n,i,a,o){var c,u,l,s,f=null,d=null;if("esriGeometryPolyline"===n||"esriGeometryPolygon"===n){var m=i&&i.style?i.style:r.Legend,h="esriGeometryPolyline"===n?x.stroke[m]:x.fill[m];if("line"===e.type){var p;if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){var y=Object(P.d)(e.width,t,a,o),v=Object(P.d)(e.color,t,a,o),b=this._getPictureResource(e,y,v),C=b.image,M=b.width,w=b.height;return this._rasterizePictureResource(e,C,M,w,h,y)}return null}c=(p=j(e,t,a,o)).analyzedCIM,l=p.hash,u=this._embedCIMLayerInVectorMarker(c,h)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type){var R=Object(P.d)(e.size,t,a,o),T=Object(P.d)(e.color,t,a,o),k=this._getPictureResource(e,R,T),I=k.image,z=k.width,L=k.height;return this._rasterizePictureResource(e,I,z,L,h,R)}if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=Object(P.d)(e.offsetX,t,a,o),e.cim.offsetY=Object(P.d)(e.offsetY,t,a,o),e.cim.rotation=Object(P.d)(e.rotation,t,a,o),e.cim.markerPlacement=e.markerPlacement,c=j(e,t,a,o).analyzedCIM,l=Object(g.b)(JSON.stringify(c)).toString(),u=this._embedCIMLayerInVectorMarker(c,h),f=Object(P.d)(e.size,t,a,o),d=e.path}else{if("text"===e.type)return null;if("fill"===e.type){var A;if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var B,D,F,_=e.cim.size||e.cim.height;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var N=this._getPictureResource(e,_,Object(P.d)(e.color,t,a,o));B=N.image,D=N.width,F=N.height}else{var E=j(e,t,a,o);c=E.analyzedCIM,l=E.hash;var U=this._rasterizer.rasterizeJSONResource({cim:c,type:e.type,url:e.url,mosaicHash:l,size:_,path:d},1,this._avoidSDF);B=U.image,D=U.size[0],F=U.size[1]}return this._rasterizePictureResource(e,B,D,F,h,null)}if("CIMSolidFill"!==e.cim.type)return null;c=(A=j(e,t,a,o)).analyzedCIM,l=A.hash,u=this._embedCIMLayerInVectorMarker(c,h)}}}else{if("text"===e.type)return s=this._rasterizeTextResource(e,t,i,a,o);var W=j(e,t,a,o);c=W.analyzedCIM,l=W.hash;var H=S(i,e,null);if("CIMPictureMarker"===e.cim.type){var X=Object(P.d)(e.size,t,a,o)*H,Y=this._getPictureResource(e,X,Object(P.d)(e.color,t,a,o));return s={image:Y.image,size:[Y.width,Y.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}Object(O.c)(c,H,{preserveOutlineWidth:!1}),u=c}l+=n,i&&(l+=JSON.stringify(i));var G=this._resourceCache;return G.has(l)?G.get(l):(s=this._rasterizer.rasterizeJSONResource({cim:u,type:e.type,url:e.url,mosaicHash:l,size:f,path:d},window.devicePixelRatio||1,this._avoidSDF),G.set(l,s),s)}},{key:"_rasterizeTextResource",value:function(e,t,n,r,i){var a=S(n,e,null),o=Object(P.d)(e.text,t,r,i);if(!o||0===o.length)return null;var c=Object(P.d)(e.fontName,t,r,i),u=Object(P.d)(e.style,t,r,i),l=Object(P.d)(e.weight,t,r,i),s=Object(P.d)(e.decoration,t,r,i),f=Object(P.d)(e.size,t,r,i)*a,d=Object(P.d)(e.horizontalAlignment,t,r,i),m=Object(P.d)(e.verticalAlignment,t,r,i),h=Object(P.b)(Object(P.d)(e.color,t,r,i)),g=Object(P.b)(Object(P.d)(e.outlineColor,t,r,i)),p={color:h,size:f,horizontalAlignment:d,verticalAlignment:m,font:{family:c,style:u,weight:l,decoration:s},halo:{size:Object(P.d)(e.outlineSize,t,r,i)||0,color:g,style:u},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,p)}},{key:"_rasterizePictureResource",value:function(e,t,n,r,i,a){var o=document.createElement("canvas"),c=o.getContext("2d");o.height=Object(u.c)(Math.max(i.frame.ymax-i.frame.ymin,a)),o.width=Object(u.c)(i.frame.xmax-i.frame.xmin);var s=c.createImageData(n,r);s.data.set(new Uint8ClampedArray(t.buffer));var f=this._imageDataToCanvas(s),d=c.createPattern(f,"repeat"),m=Math.cos((-e.cim.rotation||0)*Math.PI/180),h=Math.sin((-e.cim.rotation||0)*Math.PI/180);d.setTransform({m11:m,m12:h,m21:-h,m22:m,m41:Object(u.c)(e.cim.offsetX)||0,m42:Object(u.c)(e.cim.offsetY)||0});var g,y,v,b=i.canvasPaths;Object(p.g)(b)?(g=b.rings,c.fillStyle=d,y=c.fill,v=["evenodd"]):Object(p.h)(b)&&(g=b.paths,c.strokeStyle=d,c.lineWidth=a,y=c.stroke,g[0][0][1]=o.height/2,g[0][1][1]=o.height/2),c.beginPath();var C,P=Object(l.a)(g);try{for(P.s();!(C=P.n()).done;){var O=C.value,M=O?O.length:0;if(M>1){var S=O[0];c.moveTo(Object(u.c)(S[0]),Object(u.c)(S[1]));for(var x=1;x<M;++x)S=O[x],c.lineTo(Object(u.c)(S[0]),Object(u.c)(S[1]));c.closePath()}}}catch(T){P.e(T)}finally{P.f()}y.apply(c,v);var w=c.getImageData(0,0,o.width,o.height),R=new Uint8Array(w.data);return{size:[o.width,o.height],image:new Uint32Array(R.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}},{key:"_getPictureResource",value:function(e,t,n){var r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;var i=r.height/r.width,a=t?i>1?Object(u.c)(t):Object(u.c)(t)/i:r.width,o=t?i>1?Object(u.c)(t)*i:Object(u.c)(t):r.height;return{image:this._imageTo32Array(r,a,o,n),width:a,height:o}}},{key:"_embedCIMLayerInVectorMarker",value:function(e,t){var n=Object(p.g)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",r=t.frame;return{type:"CIMVectorMarker",frame:r,size:r.ymax-r.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:n,symbolLayers:[e]}}]}}}]),e}();function R(e){return(e?Object.keys(e):[]).map((function(t){return{name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}}))}function T(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function j(e,t,n,r){var i,a;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,n,r),a=Object(y.a)(e.cim,e.materialOverrides)):(i=e.materialHash,a=e.cim),{analyzedCIM:a,hash:i}}var k=n(630),I=n(776),z=new w(null,!0),L=k.a.maxSize;function A(e){return B.apply(this,arguments)}function B(){return B=Object(a.a)(c.a.mark((function e(t){var n,r,i,a,o,l,s,f,d,m,h,g,p,y,v,b,C,P,M,S,x,w,R=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R.length>1&&void 0!==R[1]?R[1]:{},r=n.size,i=n.maxSize,a=n.node,o=n.opacity,l=n.cimOptions||n,s=l.feature,f=l.fieldMap,d=l.geometryType,m=l.style,h=Object(O.b)(t),g="number"==typeof r?r:null,(p=Math.min(null!=g?g:h,null!=i?i:Object(u.d)(L)))!==h&&(t=t.clone(),Object(O.d)(t,p,{preserveOutlineWidth:!0})),y=3,t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(y=1),e.next=7,z.rasterizeCIMSymbolAsync(t,s,f,d,{scaleFactor:y,style:m});case 7:return v=e.sent,(b=document.createElement("canvas")).width=v.imageData.width,b.height=v.imageData.height,b.getContext("2d").putImageData(v.imageData,0,0),C=b.width/y,P=b.height/y,null!=r&&(null==(null===n||void 0===n?void 0:n.scale)||null!==n&&void 0!==n&&n.scale)&&(C=(M=C/P)<=1?Math.ceil(p*M):p,P=M<=1?p:Math.ceil(p/M)),(S=new Image(C,P)).src=b.toDataURL(),null!=o&&(S.style.opacity="".concat(o)),x=S,null!=n.effectView&&(w={shape:{type:"image",x:0,y:0,width:C,height:P,src:S.src},fill:null,stroke:null,offset:[0,0]},x=Object(I.a)([[w]],[C,P],{effectView:n.effectView})),e.abrupt("return",(a&&a.appendChild(x),x));case 18:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return $})),n.d(t,"h",(function(){return Z})),n.d(t,"i",(function(){return Y})),n.d(t,"j",(function(){return K})),n.d(t,"k",(function(){return J})),n.d(t,"l",(function(){return G})),n.d(t,"m",(function(){return V})),n.d(t,"n",(function(){return q})),n.d(t,"o",(function(){return Q})),n.d(t,"p",(function(){return c})),n.d(t,"q",(function(){return U})),n.d(t,"r",(function(){return o})),n.d(t,"s",(function(){return A})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return l})),n.d(t,"v",(function(){return z})),n.d(t,"w",(function(){return D})),n.d(t,"x",(function(){return u})),n.d(t,"y",(function(){return I})),n.d(t,"z",(function(){return H})),n.d(t,"A",(function(){return r})),n.d(t,"B",(function(){return W})),n.d(t,"C",(function(){return i})),n.d(t,"D",(function(){return X})),n.d(t,"E",(function(){return E})),n.d(t,"F",(function(){return g})),n.d(t,"G",(function(){return p})),n.d(t,"H",(function(){return y})),n.d(t,"I",(function(){return v})),n.d(t,"J",(function(){return b})),n.d(t,"K",(function(){return C})),n.d(t,"L",(function(){return h})),n.d(t,"M",(function(){return m})),n.d(t,"N",(function(){return P})),n.d(t,"O",(function(){return O})),n.d(t,"P",(function(){return M})),n.d(t,"Q",(function(){return S})),n.d(t,"R",(function(){return x})),n.d(t,"S",(function(){return d})),n.d(t,"T",(function(){return s})),n.d(t,"U",(function(){return B})),n.d(t,"V",(function(){return a})),n.d(t,"W",(function(){return N})),n.d(t,"X",(function(){return _})),n.d(t,"Y",(function(){return F}));var r=1e-30,i=4294967295,a=512,o=8,c=10,u=29,l=24,s=8,f={metrics:{width:15,height:17,left:0,top:-7,advance:14}},d=0,m=0,h=0,g=1,p=2,y=3,v=4,b=5,C=6,P=12,O=5,M=6,S=5,x=6,w=0,R=1,T=2,j=3,k=4,I=2,z=1,L=2,A=4,B=1.05,D=3,F=5,_=6,N=1.15,E=2,U=8,W=500,H=10,X=1024,Y=2,G=0,J=1,V=4,q=8,Z=16,K=4,Q=1,$=4},170:function(e,t,n){"use strict";var r,i,a,o,c,u,l,s,f,d,m,h,g,p,y,v,b,C,P,O,M,S,x,w,R,T,j,k,I,z,L,A,B,D,F,_,N,E,U,W,H,X,Y,G,J,V,q,Z,K,Q,$,ee,te,ne,re,ie,ae,oe,ce,ue,le;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return M})),n.d(t,"l",(function(){return S})),n.d(t,"m",(function(){return R})),n.d(t,"n",(function(){return k})),n.d(t,"o",(function(){return I})),n.d(t,"p",(function(){return i})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return N})),n.d(t,"s",(function(){return W})),n.d(t,"t",(function(){return J})),n.d(t,"u",(function(){return V})),n.d(t,"v",(function(){return q})),n.d(t,"w",(function(){return Z})),n.d(t,"x",(function(){return ie})),n.d(t,"y",(function(){return ae})),n.d(t,"z",(function(){return ce})),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(a||(a={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(c||(c={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(u||(u={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(l||(l={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(s||(s={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(d||(d={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(m||(m={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(h||(h={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(g||(g={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(p||(p={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(y||(y={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(v||(v={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(b||(b={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(C||(C={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(P||(P={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(O||(O={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(M||(M={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(S||(S={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(x||(x={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(w||(w={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(R||(R={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(T||(T={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(j||(j={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(k||(k={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(I||(I={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(z||(z={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(L||(L={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(A||(A={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(B||(B={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(D||(D={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(F||(F={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(_||(_={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(N||(N={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(E||(E={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(U||(U={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(W||(W={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(H||(H={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(X||(X={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(Y||(Y={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(G||(G={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(J||(J={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(V||(V={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(q||(q={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(Z||(Z={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(K||(K={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(Q||(Q={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}($||($={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(re||(re={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ie||(ie={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ae||(ae={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(ce||(ce={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ue||(ue={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(le||(le={}))},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));var r=new Float32Array(1);new Uint32Array(r.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function o(e,t,n,r){return 255&e|(255&t)<<8|(255&n)<<16|r<<24}},218:function(e,t,n){"use strict";var r,i;function a(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function o(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function c(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[r.Center,i.Center]}}function u(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function l(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function s(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function f(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return f})),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return x}));var r=n(14),i=n(146),a=n(168);var o=function(e,t,n){return[t,n]},c=function(e,t,n){return[t,n,e[2]]},u=function(e,t,n){return[t,n,e[2],e[3]]};function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(i.k)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function s(e,t){var n=e.scale,r=e.translate;return Math.round((t-r[0])/n[0])}function f(e,t){var n=e.scale,r=e.translate;return Math.round((r[1]-t)/n[1])}function d(e,t,n){for(var r,i,a,o,c=[],u=0;u<n.length;u++){var l=n[u];u>0?(a=s(e,l[0]),o=f(e,l[1]),a===r&&o===i||(c.push(t(l,a-r,o-i)),r=a,i=o)):(r=s(e,l[0]),i=f(e,l[1]),c.push(t(l,r,i)))}return c.length>0?c:null}function m(e,t){var n=e.scale,r=e.translate;return t*n[0]+r[0]}function h(e,t){var n=e.scale;return e.translate[1]-t*n[1]}function g(e,t,n){var i=new Array(n.length);if(!n.length)return i;var a=Object(r.a)(e.scale,2),o=a[0],c=a[1],u=m(e,n[0][0]),l=h(e,n[0][1]);i[0]=t(n[0],u,l);for(var s=1;s<n.length;s++){var f=n[s];u+=f[0]*o,l-=f[1]*c,i[s]=t(f,u,l)}return i}function p(e,t,n){for(var r=new Array(n.length),i=0;i<n.length;i++)r[i]=g(e,t,n[i]);return r}function y(e,t,n,r,i){return t.points=function(e,t,n,r){return d(e,n?r?u:c:r?c:o,t)}(e,n.points,r,i),t}function v(e,t,n,r,i){return t.x=s(e,n.x),t.y=f(e,n.y),t!==n&&(r&&(t.z=n.z),i&&(t.m=n.m)),t}function b(e,t,n,r,i){var a=function(e,t,n,r){for(var i=[],a=n?r?u:c:r?c:o,l=0;l<t.length;l++){var s=d(e,a,t[l]);s&&s.length>=3&&i.push(s)}return i.length?i:null}(e,n.rings,r,i);return a?(t.rings=a,t):null}function C(e,t,n,r,i){var a=function(e,t,n,r){for(var i=[],a=n?r?u:c:r?c:o,l=0;l<t.length;l++){var s=d(e,a,t[l]);s&&s.length>=2&&i.push(s)}return i.length?i:null}(e,n.paths,r,i);return a?(t.paths=a,t):null}function P(e,t){return e&&t?Object(a.f)(t)?v(e,{},t,!1,!1):Object(a.h)(t)?C(e,{},t,!1,!1):Object(a.g)(t)?b(e,{},t,!1,!1):Object(a.e)(t)?y(e,{},t,!1,!1):Object(a.d)(t)?function(e,t,n,r,i){return t.xmin=s(e,n.xmin),t.ymin=f(e,n.ymin),t.xmax=s(e,n.xmax),t.ymax=f(e,n.ymax),t!==n&&(r&&(t.zmin=n.zmin,t.zmax=n.zmax),i&&(t.mmin=n.mmin,t.mmax=n.mmax)),t}(e,{},t,!1,!1):null:null}function O(e,t,n,r,a){return Object(i.k)(n)&&(t.points=function(e,t,n,r){return g(e,n?r?u:c:r?c:o,t)}(e,n.points,r,a)),t}function M(e,t,n,r,a){return Object(i.j)(n)||(t.x=m(e,n.x),t.y=h(e,n.y),t!==n&&(r&&(t.z=n.z),a&&(t.m=n.m))),t}function S(e,t,n,r,a){return Object(i.k)(n)&&(t.rings=function(e,t,n,r){return p(e,n?r?u:c:r?c:o,t)}(e,n.rings,r,a)),t}function x(e,t,n,r,a){return Object(i.k)(n)&&(t.paths=function(e,t,n,r){return p(e,n?r?u:c:r?c:o,t)}(e,n.paths,r,a)),t}},859:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(60),i=n(14),a=n(142),o=n(143),c=n(235),u=n(251),l=n(367),s=n(289),f=function(){function e(t){Object(a.a)(this,e),this._resourceManager=t}return Object(o.a)(e,[{key:"dispose",value:function(){this._rasterizationCanvas=null}},{key:"rasterizeJSONResource",value:function(e,t,n){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var r=c.d.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t),a=Object(i.a)(r,3),o=a[0];return{size:[a[1],a[2]],image:new Uint32Array(o.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){var s,f;if("simple-line"===e.type||"esriSLS"===e.type)switch(s=Object(c.e)(e.style,e.cap),e.cap){case"butt":f="Butt";break;case"square":f="Square";break;default:f="Round"}else s=e.dashTemplate,f=e.cim.capStyle;var d=c.d.rasterizeSimpleLine(s,f),m=Object(i.a)(d,3),h=m[0];return{size:[m[1],m[2]],image:new Uint32Array(h.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var g,p,y;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(g=c.b.fromSimpleMarker(e),y=Object(l.c)(g)):e.cim&&"CIMHatchFill"===e.cim.type?(g=c.b.fromCIMHatchFill(e.cim),p=new u.a(g.frame.xmin,-g.frame.ymax,g.frame.xmax-g.frame.xmin,g.frame.ymax-g.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(g=c.b.fromCIMInsidePolygon(e.cim),p=new u.a(g.frame.xmin,-g.frame.ymax,g.frame.xmax-g.frame.xmin,g.frame.ymax-g.frame.ymin)):(g=e.cim,y=Object(l.c)(g)),y&&!n){var v=Object(l.a)(y),b=Object(i.a)(v,3),C=b[0],P=b[1],O=b[2];return C?{size:[P,O],image:new Uint32Array(C.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var M=c.b.rasterize(this._rasterizationCanvas,g,p,this._resourceManager,!n),S=Object(i.a)(M,5),x=S[0],w=S[1],R=S[2],T=S[3],j=S[4];return x?{size:[w,R],image:new Uint32Array(x.buffer),sdf:!1,simplePattern:!1,anchorX:T,anchorY:j}:null}},{key:"rasterizeImageResource",value:function(e,t,n,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;var o=this._rasterizationCanvas.getContext("2d");n instanceof ImageData?o.putImageData(n,0,0):(n.setAttribute("width","".concat(e,"px")),n.setAttribute("height","".concat(t,"px")),o.drawImage(n,0,0,e,t));var c,u=o.getImageData(0,0,e,t),l=new Uint8Array(u.data);if(a){var f,d=Object(r.a)(a);try{for(d.s();!(f=d.n()).done;){var m=f.value;if(m&&m.oldColor&&4===m.oldColor.length&&m.newColor&&4===m.newColor.length){var h=Object(i.a)(m.oldColor,4),g=h[0],p=h[1],y=h[2],v=h[3],b=Object(i.a)(m.newColor,4),C=b[0],P=b[1],O=b[2],M=b[3];if(g===C&&p===P&&y===O&&v===M)continue;for(var S=0;S<l.length;S+=4)g===l[S]&&p===l[S+1]&&y===l[S+2]&&v===l[S+3]&&(l[S]=C,l[S+1]=P,l[S+2]=O,l[S+3]=M)}}}catch(z){d.e(z)}finally{d.f()}}for(var x=0;x<l.length;x+=4)c=l[x+3]/255,l[x]=l[x]*c,l[x+1]=l[x+1]*c,l[x+2]=l[x+2]*c;var w=l,R=e,T=t,j=512;if(R>=j||T>=j){var k=R/T;k>1?(R=j,T=Math.round(j/k)):(T=j,R=Math.round(j*k)),w=new Uint8Array(4*R*T);var I=new Uint8ClampedArray(w.buffer);Object(s.m)(l,e,t,I,R,T,!1)}return{size:[R,T],image:new Uint32Array(w.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}]),e}()}}]);
//# sourceMappingURL=83.87a3efa6.chunk.js.map