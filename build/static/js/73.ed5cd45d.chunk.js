(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[73],{1206:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var n=r(60),a=r(155),i=r(142),o=r(143),c=r(154),u=r.n(c),l=r(147),f=r(146),s=r(851),h=r(586),d=function(){function t(){Object(i.a)(this,t)}return Object(o.a)(t,[{key:"createIndex",value:function(){var t=Object(a.a)(u.a.mark((function t(e,r){var n,a,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new Array,e.vertexAttributes&&e.vertexAttributes.position){t.next=3;break}return t.abrupt("return",new s.a);case 3:if(a=this._createMeshData(e),!Object(f.k)(r)){t.next=10;break}return t.next=7,r.invoke("createIndexThread",a,{transferList:n});case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=this.createIndexThread(a).result;case 11:return i=t.t0,t.abrupt("return",this._createPooledRBush().fromJSON(i));case 13:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"createIndexThread",value:function(t){var e=new Float64Array(t.position),r=this._createPooledRBush();return t.components?this._createIndexComponentsThread(r,e,t.components.map((function(t){return new Uint32Array(t)}))):this._createIndexAllThread(r,e)}},{key:"_createIndexAllThread",value:function(t,e){for(var r=new Array(e.length/9),n=0,a=0;a<e.length;a+=9)r[n++]=b(e,a+0,a+3,a+6);return t.load(r),{result:t.toJSON()}}},{key:"_createIndexComponentsThread",value:function(t,e,r){var a,i=0,o=Object(n.a)(r);try{for(o.s();!(a=o.n()).done;){i+=a.value.length/3}}catch(d){o.e(d)}finally{o.f()}var c,u=new Array(i),l=0,f=Object(n.a)(r);try{for(f.s();!(c=f.n()).done;)for(var s=c.value,h=0;h<s.length;h+=3)u[l++]=b(e,3*s[h+0],3*s[h+1],3*s[h+2])}catch(d){f.e(d)}finally{f.f()}return t.load(u),{result:t.toJSON()}}},{key:"_createMeshData",value:function(t){var e=(t.transform?Object(h.b)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((function(t){return!t.faces}))?{position:e}:{position:e,components:t.components.map((function(t){return t.faces}))}}},{key:"_createPooledRBush",value:function(){return new s.a(9,Object(l.a)("esri-csp-restrictions")?function(t){return t}:[".minX",".minY",".maxX",".maxY"])}}]),t}();function b(t,e,r,n){return{minX:Math.min(t[e+0],t[r+0],t[n+0]),maxX:Math.max(t[e+0],t[r+0],t[n+0]),minY:Math.min(t[e+1],t[r+1],t[n+1]),maxY:Math.max(t[e+1],t[r+1],t[n+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[r+0],t[r+1],t[r+2]],p2:[t[n+0],t[n+1],t[n+2]]}}},319:function(t,e,r){"use strict";function n(){return[1,0,0,0,1,0,0,0,1]}function a(t,e){return new Float64Array(t,e,9)}r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,r,n,a,i,o,c,u){return[t,e,r,n,a,i,o,c,u]},createView:a},Symbol.toStringTag,{value:"Module"}))},332:function(t,e,r){"use strict";function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function a(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function i(t,e){return new Float64Array(t,e,16)}r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return n}));var o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:a,fromValues:function(t,e,r,n,a,i,o,c,u,l,f,s,h,d,b,v){return[t,e,r,n,a,i,o,c,u,l,f,s,h,d,b,v]},createView:i,IDENTITY:o},Symbol.toStringTag,{value:"Module"}))},377:function(t,e,r){"use strict";function n(){return[0,0,0,1]}function a(t){return[t[0],t[1],t[2],t[3]]}function i(t,e){return new Float64Array(t,e,4)}r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return i}));var o=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:a,fromValues:function(t,e,r,n){return[t,e,r,n]},createView:i,IDENTITY:o},Symbol.toStringTag,{value:"Module"}))},486:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return P})),r.d(e,"d",(function(){return v})),r.d(e,"e",(function(){return s})),r.d(e,"f",(function(){return l}));var n=r(319),a=r(377),i=r(210),o=r(429),c=r(222),u=r(385);function l(t,e,r){r*=.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function f(t,e){var r=2*Math.acos(e[3]),n=Math.sin(r/2);return n>o.a?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function s(t,e,r){var n=e[0],a=e[1],i=e[2],o=e[3],c=r[0],u=r[1],l=r[2],f=r[3];return t[0]=n*f+o*c+a*l-i*u,t[1]=a*f+o*u+i*c-n*l,t[2]=i*f+o*l+n*u-a*c,t[3]=o*f-n*c-a*u-i*l,t}function h(t,e,r,n){var a,i,c,u,l,f=e[0],s=e[1],h=e[2],d=e[3],b=r[0],v=r[1],p=r[2],m=r[3];return(i=f*b+s*v+h*p+d*m)<0&&(i=-i,b=-b,v=-v,p=-p,m=-m),1-i>o.a?(a=Math.acos(i),c=Math.sin(a),u=Math.sin((1-n)*a)/c,l=Math.sin(n*a)/c):(u=1-n,l=n),t[0]=u*f+l*b,t[1]=u*s+l*v,t[2]=u*h+l*p,t[3]=u*d+l*m,t}function d(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function b(t,e){var r,n=e[0]+e[4]+e[8];if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var a=0;e[4]>e[0]&&(a=1),e[8]>e[3*a+a]&&(a=2);var i=(a+1)%3,o=(a+2)%3;r=Math.sqrt(e[3*a+a]-e[3*i+i]-e[3*o+o]+1),t[a]=.5*r,r=.5/r,t[3]=(e[3*i+o]-e[3*o+i])*r,t[i]=(e[3*i+a]+e[3*a+i])*r,t[o]=(e[3*o+a]+e[3*a+o])*r}return t}function v(t,e,r,n){var a=.5*Math.PI/180;e*=a,r*=a,n*=a;var i=Math.sin(e),o=Math.cos(e),c=Math.sin(r),u=Math.cos(r),l=Math.sin(n),f=Math.cos(n);return t[0]=i*u*f-o*c*l,t[1]=o*c*f+i*u*l,t[2]=o*u*l-i*c*f,t[3]=o*u*f+i*c*l,t}var p=u.c,m=u.k,j=u.a,O=s,y=u.b,g=u.d,x=u.i,M=u.e,_=M,A=u.f,B=A,T=u.j,P=u.g,w=u.h;var Y=Object(i.e)(),F=Object(i.g)(1,0,0),k=Object(i.g)(0,1,0);var E=Object(a.b)(),S=Object(a.b)();var X=Object(n.b)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:l,getAxisAngle:f,multiply:s,rotateX:function(t,e,r){r*=.5;var n=e[0],a=e[1],i=e[2],o=e[3],c=Math.sin(r),u=Math.cos(r);return t[0]=n*u+o*c,t[1]=a*u+i*c,t[2]=i*u-a*c,t[3]=o*u-n*c,t},rotateY:function(t,e,r){r*=.5;var n=e[0],a=e[1],i=e[2],o=e[3],c=Math.sin(r),u=Math.cos(r);return t[0]=n*u-i*c,t[1]=a*u+o*c,t[2]=i*u+n*c,t[3]=o*u-a*c,t},rotateZ:function(t,e,r){r*=.5;var n=e[0],a=e[1],i=e[2],o=e[3],c=Math.sin(r),u=Math.cos(r);return t[0]=n*u+a*c,t[1]=a*u-n*c,t[2]=i*u+o*c,t[3]=o*u-i*c,t},calculateW:function(t,e){var r=e[0],n=e[1],a=e[2];return t[0]=r,t[1]=n,t[2]=a,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-a*a)),t},slerp:h,random:function(t){var e=Object(o.b)(),r=Object(o.b)(),n=Object(o.b)(),a=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=a*Math.sin(2*Math.PI*r),t[1]=a*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*n),t[3]=i*Math.cos(2*Math.PI*n),t},invert:function(t,e){var r=e[0],n=e[1],a=e[2],i=e[3],o=r*r+n*n+a*a+i*i,c=o?1/o:0;return t[0]=-r*c,t[1]=-n*c,t[2]=-a*c,t[3]=i*c,t},conjugate:d,fromMat3:b,fromEuler:v,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:p,set:m,add:j,mul:O,scale:y,dot:g,lerp:x,length:M,len:_,squaredLength:A,sqrLen:B,normalize:T,exactEquals:P,equals:w,rotationTo:function(t,e,r){var n=Object(c.g)(e,r);return n<-.999999?(Object(c.h)(Y,F,e),Object(c.w)(Y)<1e-6&&Object(c.h)(Y,k,e),Object(c.p)(Y,Y),l(t,Y,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(c.h)(Y,e,r),t[0]=Y[0],t[1]=Y[1],t[2]=Y[2],t[3]=1+n,T(t,t))},sqlerp:function(t,e,r,n,a,i){return h(E,e,a,i),h(S,r,n,i),h(t,E,S,2*i*(1-i)),t},setAxes:function(t,e,r,n){var a=X;return a[0]=r[0],a[3]=r[1],a[6]=r[2],a[1]=n[0],a[4]=n[1],a[7]=n[2],a[2]=-e[0],a[5]=-e[1],a[8]=-e[2],T(t,b(t,a))}},Symbol.toStringTag,{value:"Module"}))},487:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return a}));var n=r(588);function a(t,e,r){if(t.count===e.count)for(var a=t.count,i=r[0],o=r[1],c=r[2],u=r[4],l=r[5],f=r[6],s=r[8],h=r[9],d=r[10],b=r[12],v=r[13],p=r[14],m=t.typedBuffer,j=t.typedBufferStride,O=e.typedBuffer,y=e.typedBufferStride,g=0;g<a;g++){var x=g*j,M=g*y,_=O[M],A=O[M+1],B=O[M+2];m[x]=i*_+u*A+s*B+b,m[x+1]=o*_+l*A+h*B+v,m[x+2]=c*_+f*A+d*B+p}else n.a.error("source and destination buffers need to have the same number of elements")}function i(t,e,r){if(t.count===e.count)for(var a=t.count,i=r[0],o=r[1],c=r[2],u=r[3],l=r[4],f=r[5],s=r[6],h=r[7],d=r[8],b=t.typedBuffer,v=t.typedBufferStride,p=e.typedBuffer,m=e.typedBufferStride,j=0;j<a;j++){var O=j*v,y=j*m,g=p[y],x=p[y+1],M=p[y+2];b[O]=i*g+u*x+s*M,b[O+1]=o*g+l*x+h*M,b[O+2]=c*g+f*x+d*M}else n.a.error("source and destination buffers need to have the same number of elements")}function o(t,e,r){for(var n=Math.min(t.count,e.count),a=t.typedBuffer,i=t.typedBufferStride,o=e.typedBuffer,c=e.typedBufferStride,u=0;u<n;u++){var l=u*i,f=u*c;a[l]=r*o[f],a[l+1]=r*o[f+1],a[l+2]=r*o[f+2]}}function c(t,e){for(var r=Math.min(t.count,e.count),n=t.typedBuffer,a=t.typedBufferStride,i=e.typedBuffer,o=e.typedBufferStride,c=0;c<r;c++){var u=c*a,l=c*o,f=i[l],s=i[l+1],h=i[l+2],d=f*f+s*s+h*h;if(d>0){var b=1/Math.sqrt(d);n[u]=b*f,n[u+1]=b*s,n[u+2]=b*h}}}function u(t,e,r){for(var n=Math.min(t.count,e.count),a=t.typedBuffer,i=t.typedBufferStride,o=e.typedBuffer,c=e.typedBufferStride,u=0;u<n;u++){var l=u*i,f=u*c;a[l]=o[f]>>r,a[l+1]=o[f+1]>>r,a[l+2]=o[f+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:a,transformMat3:i,scale:o,normalize:c,shiftRight:u},Symbol.toStringTag,{value:"Module"}))},525:function(t,e,r){"use strict";function n(t,e,r){for(var n=t.typedBuffer,a=t.typedBufferStride,i=e.typedBuffer,o=e.typedBufferStride,c=r?r.count:e.count,u=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*o,f=0;f<c;++f)n[u]=i[l],n[u+1]=i[l+1],n[u+2]=i[l+2],u+=a,l+=o}function a(t,e,r,n,a){for(var i,o,c=t.typedBuffer,u=t.typedBufferStride,l=null!==(i=null===a||void 0===a?void 0:a.count)&&void 0!==i?i:t.count,f=(null!==(o=null===a||void 0===a?void 0:a.dstIndex)&&void 0!==o?o:0)*u,s=0;s<l;++s)c[f]=e,c[f+1]=r,c[f+2]=n,f+=u}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:a},Symbol.toStringTag,{value:"Module"}))},553:function(t,e,r){"use strict";function n(t,e){var r;return t.isGeographic||t.isWebMercator&&(null===(r=null===e||void 0===e?void 0:e.geographic)||void 0===r||r)}r.d(e,"a",(function(){return n}))},586:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return j})),r.d(e,"d",(function(){return O})),r.d(e,"e",(function(){return y}));var n=r(146),a=r(250),i=r(319),o=r(375),c=r(332),u=r(204),l=r(256),f=r(443),s=r(641),h=r(414),d=r(487),b=r(553),v=r(589);function p(t,e,r){return Object(b.a)(e.spatialReference,r)?function(t,e,r){var n=e.spatialReference,a=A(e,r,w),i=new Float64Array(t.position.length),o=function(t,e,r,n){Object(d.e)(h.v.fromTypedArray(n),h.v.fromTypedArray(t),e);var a=new Float64Array(t.length);return Object(v.a)(n,a,r)}(t.position,a,n,i),c=Object(u.a)(F,a);return{position:o,normal:g(o,i,t.normal,c,n),tangent:x(o,i,t.tangent,c,n)}}(t,e,r):function(t,e,r){for(var n=new Float64Array(t.position.length),a=t.position,i=e.x,o=e.y,c=e.z||0,u=P(r?r.unit:null,e.spatialReference),l=u.horizontal,f=u.vertical,s=0;s<a.length;s+=3)n[s+0]=a[s+0]*l+i,n[s+1]=a[s+1]*l+o,n[s+2]=a[s+2]*f+c;return{position:n,normal:t.normal,tangent:t.tangent}}(t,e,r)}function m(t,e,r){var a=t.position,i=t.normal,o=t.tangent;if(Object(n.j)(e))return{position:a,normal:i,tangent:o};var c=e.localMatrix;return p({position:Object(v.h)(a,new Float64Array(a.length),c),normal:Object(n.k)(i)?Object(v.g)(i,new Float32Array(i.length),c):null,tangent:Object(n.k)(o)?Object(v.i)(o,new Float32Array(o.length),c):null},e.getOriginPoint(r),{geographic:e.geographic})}function j(t,e,r){var n;return null!==r&&void 0!==r&&r.useTransform?{vertexAttributes:{position:t.position,normal:t.normal,tangent:t.tangent},transform:new s.a({origin:[e.x,e.y,null!==(n=e.z)&&void 0!==n?n:0],geographic:Object(b.a)(e.spatialReference,r)})}:{vertexAttributes:p(t,e,r),transform:null}}function O(t,e,r){return Object(b.a)(e.spatialReference,r)?_(t,e,r):M(t,e,r)}function y(t,e,r,a){if(Object(n.j)(e))return O(t,r,a);var i=m(t,e,r.spatialReference);return r.equals(e.getOriginPoint(r.spatialReference))?M(i,r,a):Object(b.a)(r.spatialReference,a)?_(i,r,a):M(i,r,a)}function g(t,e,r,a,i){if(Object(n.j)(r))return null;var o=new Float32Array(r.length);return Object(d.a)(h.u.fromTypedArray(o),h.u.fromTypedArray(r),a),Object(v.b)(o,t,e,i,o),o}function x(t,e,r,a,i){if(Object(n.j)(r))return null;var o=new Float32Array(r.length);Object(d.a)(h.u.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),h.u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),a);for(var c=3;c<o.length;c+=4)o[c]=r[c];return Object(v.d)(o,t,e,i,o),o}function M(t,e,r){for(var n=new Float64Array(t.position.length),a=t.position,i=e.x,o=e.y,c=e.z||0,u=P(r?r.unit:null,e.spatialReference),l=u.horizontal,f=u.vertical,s=0;s<a.length;s+=3)n[s+0]=(a[s+0]-i)/l,n[s+1]=(a[s+1]-o)/l,n[s+2]=(a[s+2]-c)/f;return{position:n,normal:t.normal,tangent:t.tangent}}function _(t,e,r){var n=e.spatialReference;A(e,r,w);var a=Object(o.a)(Y,w),i=new Float64Array(t.position.length),c=function(t,e,r,n){var a=Object(v.f)(t,e,n),i=h.v.fromTypedArray(a),o=new Float64Array(a.length),c=h.v.fromTypedArray(o);return Object(d.e)(c,i,r),o}(t.position,n,a,i),l=Object(u.a)(F,a);return{position:c,normal:B(t.normal,t.position,i,n,l),tangent:T(t.tangent,t.position,i,n,l)}}function A(t,e,r){Object(l.b)(t.spatialReference,[t.x,t.y,t.z||0],r,Object(f.g)(t.spatialReference));var n=P(e?e.unit:null,t.spatialReference),a=n.horizontal,i=n.vertical;return Object(o.f)(r,r,[a,a,i]),r}function B(t,e,r,a,i){if(Object(n.j)(t))return null;var o=Object(v.c)(t,e,r,a,new Float32Array(t.length)),c=h.u.fromTypedArray(o);return Object(d.a)(c,c,i),o}function T(t,e,r,a,i){if(Object(n.j)(t))return null;var o=Object(v.e)(t,e,r,a,new Float32Array(t.length)),c=h.u.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return Object(d.a)(c,c,i),o}function P(t,e){if(Object(n.j)(t))return k;var r=e.isGeographic?1:Object(a.c)(e),i=e.isGeographic?1:Object(a.d)(e),o=Object(a.b)(1,t,"meters");return{horizontal:o*r,vertical:o*i}}var w=Object(c.d)(),Y=Object(c.d)(),F=Object(i.b)(),k={horizontal:1,vertical:1}},587:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return u}));var n=r(188),a=r(486),i=r(377),o=r(222);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return[t[0],t[1],t[2],t[3]]}function u(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(o.e)(r,t),r[3]=e,r}function l(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(a.f)(b,t,s(t)),Object(a.f)(v,e,s(e)),Object(a.e)(b,v,b),h(r,Object(n.l)(Object(a.b)(r,b)))}function f(t){return t}function s(t){return Object(n.f)(t[3])}function h(t,e){return t[3]=e,t}var d=[0,0,1,0],b=Object(i.b)(),v=Object(i.b)();c()},588:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=r(156).a.getLogger("esri.views.3d.support.buffer.math")},589:function(t,e,r){"use strict";r.d(e,"a",(function(){return x})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return O})),r.d(e,"d",(function(){return T})),r.d(e,"e",(function(){return B})),r.d(e,"f",(function(){return g})),r.d(e,"g",(function(){return _})),r.d(e,"h",(function(){return M})),r.d(e,"i",(function(){return A}));var n,a,i=r(156),o=r(146),c=r(204),u=r(319),l=r(332),f=r(222),s=r(210),h=r(256),d=r(443),b=r(182),v=r(306),p=r(414),m=r(487),j=i.a.getLogger("esri.geometry.support.meshUtils.normalProjection");function O(t,e,r,a,i){return w(a)?(P(n.TO_PCPF,p.u.fromTypedArray(t),p.v.fromTypedArray(e),p.v.fromTypedArray(r),a,p.u.fromTypedArray(i)),i):(j.error("Cannot convert spatial reference to PCPF"),i)}function y(t,e,r,a,i){return w(a)?(P(n.FROM_PCPF,p.u.fromTypedArray(t),p.v.fromTypedArray(e),p.v.fromTypedArray(r),a,p.u.fromTypedArray(i)),i):(j.error("Cannot convert to spatial reference from PCPF"),i)}function g(t,e,r){return Object(h.h)(t,e,0,r,Object(d.g)(e),0,t.length/3),r}function x(t,e,r){return Object(h.h)(t,Object(d.g)(r),0,e,r,0,t.length/3),e}function M(t,e,r){if(Object(o.j)(t))return e;var n=p.v.fromTypedArray(t),a=p.v.fromTypedArray(e);return Object(m.e)(a,n,r),e}function _(t,e,r){if(Object(o.j)(t))return e;Object(c.a)(S,r);var n=p.u.fromTypedArray(t),a=p.u.fromTypedArray(e);return Object(m.a)(a,n,S),Object(c.g)(S)||Object(m.c)(a,a),e}function A(t,e,r){if(Object(o.j)(t))return e;Object(c.a)(S,r);var n=p.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),a=p.u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(Object(m.a)(a,n,S),Object(c.g)(S)||Object(m.c)(a,a),t!==e)for(var i=3;i<t.length;i+=4)e[i]=t[i];return e}function B(t,e,r,a,i){if(!w(a))return j.error("Cannot convert spatial reference to PCPF"),i;P(n.TO_PCPF,p.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),p.v.fromTypedArray(e),p.v.fromTypedArray(r),a,p.u.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT));for(var o=3;o<t.length;o+=4)i[o]=t[o];return i}function T(t,e,r,a,i){if(!w(a))return j.error("Cannot convert to spatial reference from PCPF"),i;P(n.FROM_PCPF,p.u.fromTypedArray(t,16),p.v.fromTypedArray(e),p.v.fromTypedArray(r),a,p.u.fromTypedArray(i,16));for(var o=3;o<t.length;o+=4)i[o]=t[o];return i}function P(t,e,r,a,i,o){if(e){var u=r.count,l=Object(d.g)(i);if(Y(i))for(var s=0;s<u;s++)a.getVec(s,F),e.getVec(s,k),Object(h.b)(l,F,E,l),Object(c.e)(S,E),t===n.FROM_PCPF&&Object(c.m)(S,S),Object(f.v)(k,k,S),o.setVec(s,k);else for(var b=0;b<u;b++){a.getVec(b,F),e.getVec(b,k),Object(h.b)(l,F,E,l),Object(c.e)(S,E);var p=Object(v.g)(r.get(b,1)),m=Math.cos(p);t===n.TO_PCPF&&(m=1/m),S[0]*=m,S[1]*=m,S[2]*=m,S[3]*=m,S[4]*=m,S[5]*=m,t===n.FROM_PCPF&&Object(c.m)(S,S),Object(f.v)(k,k,S),Object(f.p)(k,k),o.setVec(b,k)}return o}}function w(t){return Y(t)||function(t){return t.isWebMercator}(t)}function Y(t){return t.isWGS84||Object(b.f)(t)||Object(b.i)(t)||Object(b.j)(t)}(a=n||(n={}))[a.TO_PCPF=0]="TO_PCPF",a[a.FROM_PCPF=1]="FROM_PCPF";var F=Object(s.e)(),k=Object(s.e)(),E=Object(l.d)(),S=Object(u.b)()},641:function(t,e,r){"use strict";r.d(e,"a",(function(){return B}));var n,a=r(14),i=r(142),o=r(143),c=r(144),u=r(145),l=r(148),f=r(160),s=r(146),h=r(151),d=(r(152),r(147),r(150),r(149)),b=r(375),v=r(332),p=r(222),m=r(210),j=r(197),O=r(256),y=r(443),g=r(587),x=r(414),M=r(487),_=r(525),A=n=function(t){Object(c.a)(r,t);var e=Object(u.a)(r);function r(t){var n;return Object(i.a)(this,r),(n=e.call(this,t)).origin=Object(m.e)(),n.translation=Object(m.e)(),n.rotation=Object(g.d)(),n.scale=Object(m.g)(1,1,1),n.geographic=!0,n}return Object(o.a)(r,[{key:"localMatrix",get:function(){var t=Object(v.d)();return Object(b.m)(t,this.scale),Object(b.d)(t,t,Object(g.a)(this.rotation),Object(g.b)(this.rotation)),Object(b.h)(t,t,this.translation),t}},{key:"localMatrixInverse",get:function(){return Object(b.a)(Object(v.d)(),this.localMatrix)}},{key:"applyLocal",value:function(t,e){return Object(p.o)(e,t,this.localMatrix)}},{key:"applyLocalInverse",value:function(t,e){return Object(p.o)(e,t,this.localMatrixInverse)}},{key:"project",value:function(t,e){var r=new Float64Array(t.length),n=x.v.fromTypedArray(r),a=x.v.fromTypedArray(t);if(this.geographic){var i=Object(y.g)(e),o=Object(v.d)();return Object(O.b)(e,this.origin,o,i),Object(b.i)(o,o,this.localMatrix),Object(M.e)(n,a,o),Object(O.h)(r,i,0,r,e,0,r.length/3),r}var c=this.localMatrix,u=this.origin;Object(b.n)(c,v.a)?Object(_.a)(n,a):Object(M.e)(n,a,c);for(var l=0;l<r.length;l+=3)r[l+0]+=u[0],r[l+1]+=u[1],r[l+2]+=u[2];return r}},{key:"getOriginPoint",value:function(t){var e=Object(a.a)(this.origin,3),r=e[0],n=e[1],i=e[2];return new j.a({x:r,y:n,z:i,spatialReference:t})}},{key:"equals",value:function(t){return Object(s.k)(t)&&this.geographic===t.geographic&&Object(p.m)(this.origin,t.origin)&&Object(b.o)(this.localMatrix,t.localMatrix)}},{key:"clone",value:function(){var t={origin:Object(m.c)(this.origin),translation:Object(m.c)(this.translation),rotation:Object(g.d)(this.rotation),scale:Object(m.c)(this.scale),geographic:this.geographic};return new n(t)}}]),r}(f.a);Object(l.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"origin",void 0),Object(l.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"translation",void 0),Object(l.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"rotation",void 0),Object(l.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"scale",void 0),Object(l.a)([Object(h.b)({type:Boolean,nonNullable:!0,json:{write:!0}})],A.prototype,"geographic",void 0),Object(l.a)([Object(h.b)()],A.prototype,"localMatrix",null),Object(l.a)([Object(h.b)()],A.prototype,"localMatrixInverse",null);var B=A=n=Object(l.a)([Object(d.a)("esri.geometry.support.MeshTransform")],A)},851:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(144),a=r(145),i=r(60),o=r(142),c=r(143),u=r(152),l=r(146),f=r(457),s=r(838),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,r=arguments.length>1?arguments[1]:void 0;Object(o.a)(this,t),this.compareMinX=p,this.compareMinY=m,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),r&&("function"==typeof r?this._toBBox=r:this._initFormat(r)),this.clear()}return Object(c.a)(t,[{key:"destroy",value:function(){this.clear(),A.prune(),B.prune(),T.prune(),P.prune()}},{key:"all",value:function(t){this._all(this.data,t)}},{key:"search",value:function(t,e){var r=this.data,n=this._toBBox;if(M(t,r))for(A.clear();r;){for(var a=0,i=r.children.length;a<i;a++){var o=r.children[a],c=r.leaf?n(o):o;M(t,c)&&(r.leaf?e(o):x(t,c)?this._all(o,e):A.push(o))}r=A.pop()}}},{key:"collides",value:function(t){var e=this.data,r=this._toBBox;if(!M(t,e))return!1;for(A.clear();e;){for(var n=0,a=e.children.length;n<a;n++){var i=e.children[n],o=e.leaf?r(i):i;if(M(t,o)){if(e.leaf||x(t,o))return!0;A.push(i)}}e=A.pop()}return!1}},{key:"load",value:function(t){if(!t.length)return this;if(t.length<this._minEntries){for(var e=0,r=t.length;e<r;e++)this.insert(t[e]);return this}var n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var a=this.data;this.data=n,n=a}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}},{key:"insert",value:function(t){return t&&this._insert(t,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new Y([]),this}},{key:"remove",value:function(t){if(!t)return this;var e,r=this.data,n=null,a=0,i=!1,o=this._toBBox(t);for(T.clear(),P.clear();r||T.length>0;){var c;if(r||(r=Object(l.c)(T.pop()),n=T.data[T.length-1],a=null!==(c=P.pop())&&void 0!==c?c:0,i=!0),r.leaf&&-1!==(e=Object(u.f)(r.children,t,r.children.length,r.indexHint)))return r.children.splice(e,1),T.push(r),this._condense(T),this;i||r.leaf||!x(r,o)?n?(a++,r=n.children[a],i=!1):r=null:(T.push(r),P.push(a),a=0,n=r,r=r.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(t){return this.data=t,this}},{key:"_all",value:function(t,e){var r=t;for(B.clear();r;){var n;if(!0===r.leaf){var a,o=Object(i.a)(r.children);try{for(o.s();!(a=o.n()).done;){e(a.value)}}catch(c){o.e(c)}finally{o.f()}}else B.pushArray(r.children);r=null!==(n=B.pop())&&void 0!==n?n:null}}},{key:"_build",value:function(t,e,r,n){var a=r-e+1,i=this._maxEntries;if(a<=i){var o=new Y(t.slice(e,r+1));return d(o,this._toBBox),o}n||(n=Math.ceil(Math.log(a)/Math.log(i)),i=Math.ceil(a/Math.pow(i,n-1)));var c=new F([]);c.height=n;var u=Math.ceil(a/i),l=u*Math.ceil(Math.sqrt(i));_(t,e,r,l,this.compareMinX);for(var f=e;f<=r;f+=l){var s=Math.min(f+l-1,r);_(t,f,s,u,this.compareMinY);for(var h=f;h<=s;h+=u){var b=Math.min(h+u-1,s);c.children.push(this._build(t,h,b,n-1))}}return d(c,this._toBBox),c}},{key:"_chooseSubtree",value:function(t,e,r,n){for(;n.push(e),!0!==e.leaf&&n.length-1!==r;){for(var a=void 0,i=1/0,o=1/0,c=0,u=e.children.length;c<u;c++){var l=e.children[c],f=j(l),s=y(t,l)-f;s<o?(o=s,i=f<i?f:i,a=l):s===o&&f<i&&(i=f,a=l)}e=a||e.children[0]}return e}},{key:"_insert",value:function(t,e,r){var n=this._toBBox,a=r?t:n(t);T.clear();var i=this._chooseSubtree(a,this.data,e,T);for(i.children.push(t),v(i,a);e>=0&&T.data[e].children.length>this._maxEntries;)this._split(T,e),e--;this._adjustParentBBoxes(a,T,e)}},{key:"_split",value:function(t,e){var r=t.data[e],n=r.children.length,a=this._minEntries;this._chooseSplitAxis(r,a,n);var i=this._chooseSplitIndex(r,a,n);if(i){var o=r.children.splice(i,r.children.length-i),c=r.leaf?new Y(o):new F(o);c.height=r.height,d(r,this._toBBox),d(c,this._toBBox),e?t.data[e-1].children.push(c):this._splitRoot(r,c)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(t,e){this.data=new F([t,e]),this.data.height=t.height+1,d(this.data,this._toBBox)}},{key:"_chooseSplitIndex",value:function(t,e,r){var n,a,i;n=a=1/0;for(var o=e;o<=r-e;o++){var c=b(t,0,o,this._toBBox),u=b(t,o,r,this._toBBox),l=g(c,u),f=j(c)+j(u);l<n?(n=l,i=o,a=f<a?f:a):l===n&&f<a&&(a=f,i=o)}return i}},{key:"_chooseSplitAxis",value:function(t,e,r){var n=t.leaf?this.compareMinX:p,a=t.leaf?this.compareMinY:m;this._allDistMargin(t,e,r,n)<this._allDistMargin(t,e,r,a)&&t.children.sort(n)}},{key:"_allDistMargin",value:function(t,e,r,n){t.children.sort(n);for(var a=this._toBBox,i=b(t,0,e,a),o=b(t,r-e,r,a),c=O(i)+O(o),u=e;u<r-e;u++){var l=t.children[u];v(i,t.leaf?a(l):l),c+=O(i)}for(var f=r-e-1;f>=e;f--){var s=t.children[f];v(o,t.leaf?a(s):s),c+=O(o)}return c}},{key:"_adjustParentBBoxes",value:function(t,e,r){for(var n=r;n>=0;n--)v(e.data[n],t)}},{key:"_condense",value:function(t){for(var e=t.length-1;e>=0;e--){var r=t.data[e];if(0===r.children.length)if(e>0){var n=t.data[e-1],a=n.children;a.splice(Object(u.f)(a,r,a.length,n.indexHint),1)}else this.clear();else d(r,this._toBBox)}}},{key:"_initFormat",value:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}]),t}();function d(t,e){b(t,0,t.children.length,e,t)}function b(t,e,r,n,a){a||(a=new Y([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var i,o=e;o<r;o++)i=t.children[o],v(a,t.leaf?n(i):i);return a}function v(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function p(t,e){return t.minX-e.minX}function m(t,e){return t.minY-e.minY}function j(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function O(t){return t.maxX-t.minX+(t.maxY-t.minY)}function y(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){var r=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),a=Math.min(t.maxX,e.maxX),i=Math.min(t.maxY,e.maxY);return Math.max(0,a-r)*Math.max(0,i-n)}function x(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function M(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function _(t,e,r,n,a){for(var i=[e,r];i.length;){var o=Object(l.c)(i.pop()),c=Object(l.c)(i.pop());if(!(o-c<=n)){var u=c+Math.ceil((o-c)/n/2)*n;Object(s.a)(t,u,c,o,a),i.push(c,u,u,o)}}}var A=new f.a,B=new f.a,T=new f.a,P=new f.a({deallocator:void 0}),w=function(t){Object(n.a)(r,t);var e=Object(a.a)(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).height=1,t.indexHint=new u.a,t}return Object(c.a)(r)}(Object(c.a)((function t(){Object(o.a)(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}))),Y=function(t){Object(n.a)(r,t);var e=Object(a.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this)).children=t,n.leaf=!0,n}return Object(c.a)(r)}(w),F=function(t){Object(n.a)(r,t);var e=Object(a.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this)).children=t,n.leaf=!1,n}return Object(c.a)(r)}(w)}}]);
//# sourceMappingURL=73.ed5cd45d.chunk.js.map