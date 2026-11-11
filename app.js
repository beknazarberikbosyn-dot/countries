(()=>{var Ra="188dev";var rc=0,m0=1,ac=2;var Qs=1,Ca=2,ji=3,si=0,Ne=1,sn=2,Mi=0,ts=1,g0=2,v0=3,_0=4,oc=5;var Si=100,lc=101,cc=102,hc=103,uc=104,dc=200,fc=201,pc=202,mc=203,x0=204,y0=205,gc=206,vc=207,_c=208,xc=209,yc=210,Mc=211,Sc=212,bc=213,wc=214,Wr=0,Xr=1,qr=2,Vi=3,Zr=4,Yr=5,Jr=6,$r=7,Ia=0,Ec=1,Tc=2,bn=0,M0=1,S0=2,b0=3,w0=4,E0=5,T0=6,A0=7;var R0=300,bi=301,es=302,Pa=303,La=304,Kr=1e3,gn=1001,Qr=1002,Ce=1003,Ac=1004;var js=1005;var Ve=1006,Da=1007;var On=1008;var qe=1009,C0=1010,I0=1011,ns=1012,Na=1013,dn=1014,rn=1015,fn=1016,Ua=1017,Fa=1018,wi=1020,P0=35902,L0=35899,D0=1021,N0=1022,pn=1023,Un=1026,zn=1027,Oa=1028,za=1029,ri=1030,Ba=1031;var ka=1033,tr=33776,er=33777,nr=33778,ir=33779,Va=35840,Ha=35841,Ga=35842,Wa=35843,Xa=36196,qa=37492,Za=37496,Ya=37488,Ja=37489,sr=37490,$a=37491,Ka=37808,Qa=37809,ja=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,uo=36492,fo=36494,po=36495,mo=36283,go=36284,rr=36285,vo=36286;var _s=2300,jr=2301,Hr=2302,i0=2303,s0=2400,r0=2401,a0=2402;var Rc=3200;var ar=0,Cc=1,Bn="",Le="srgb",xs="srgb-linear",ys="linear",ae="srgb";var Gr=7680;var Ic=519,Pc=512,Lc=513,Dc=514,U0=515,Nc=516,Uc=517,F0=518,O0=519,Fc=35044;var z0="300 es",en=2e3,Hi=2001;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){let i=Ms("canvas");return i.style.display="block",i}var Rl={},Gi=null;function B0(...i){let t="THREE."+i.shift();Gi?Gi("log",t,...i):console.log(t,...i)}function zc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=zc(i);let t="THREE."+i.shift();if(Gi)Gi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=zc(i);let t="THREE."+i.shift();if(Gi)Gi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function vi(...i){let t=i.join(" ");t in Rl||(Rl[t]=!0,Ot(...i))}function Bc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kc={[Wr]:Wr,[qr]:Jr,[Zr]:Zr,[Vi]:Yr,[Xr]:Xr,[Jr]:qr,[$r]:$r,[Yr]:Vi},vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lo=Math.PI/180,ta=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function tu(i,t){return(i%t+t)%t}function Do(i,t,e){return(1-e)*i+e*t}function Vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function k0(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function eu(i,t){if(t.constructor===Float32Array)return i;let e=k0(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function nu(i,t){if(t.constructor===Float32Array)return i;let e=k0(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var q0=class q0{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};q0.prototype.isVector2=!0;var rt=q0,_n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*M;m<0&&(u=-u,d=-d,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+M*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z0=class Z0{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Z0.prototype.isVector3=!0;var N=Z0,No=new N,Cl=new _n,Y0=class Y0{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],M=s[0],m=s[3],p=s[6],S=s[1],E=s[4],y=s[7],A=s[2],T=s[5],v=s[8];return r[0]=a*M+o*S+l*A,r[3]=a*m+o*E+l*T,r[6]=a*p+o*y+l*v,r[1]=c*M+h*S+f*A,r[4]=c*m+h*E+f*T,r[7]=c*p+h*y+f*v,r[2]=u*M+d*S+g*A,r[5]=u*m+d*E+g*T,r[8]=u*p+d*y+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=f*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Y0.prototype.isMatrix3=!0;var kt=Y0,Uo=new kt,Il=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iu(){let i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}var ee=iu();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ti===void 0&&(Ti=Ms("canvas")),Ti.width=t.width,Ti.height=t.height;let s=Ti.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ms("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},su=0,Wi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var ru=0,Oo=new N,He=class i extends vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Ve,a=On,o=pn,l=qe,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=is(),this.name="",this.source=new Wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==R0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kr:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kr:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=R0;He.DEFAULT_ANISOTROPY=1;var J0=class J0{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(d+1)/2,A=(p+1)/2,T=(h+u)/4,v=(f+M)/4,b=(g+m)/4;return E>y&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=v/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=v/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};J0.prototype.isVector4=!0;var ge=J0,na=class extends vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new He({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ss=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Aa=class Aa{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,M=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,M=c*f;e[0]=u+M*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,M=c*f;e[0]=u-M*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,M=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+M,e[1]=l*f,e[5]=M*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-M*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+M,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(au,t,ou)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Gn.crossVectors(n,Ze),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Gn.crossVectors(n,Ze)),Gn.normalize(),xr.crossVectors(Ze,Gn),s[0]=Gn.x,s[4]=xr.x,s[8]=Ze.x,s[1]=Gn.y,s[5]=xr.y,s[9]=Ze.y,s[2]=Gn.z,s[6]=xr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],S=n[3],E=n[7],y=n[11],A=n[15],T=s[0],v=s[4],b=s[8],U=s[12],I=s[1],D=s[5],O=s[9],G=s[13],C=s[2],k=s[6],X=s[10],V=s[14],et=s[3],W=s[7],Q=s[11],tt=s[15];return r[0]=a*T+o*I+l*C+c*et,r[4]=a*v+o*D+l*k+c*W,r[8]=a*b+o*O+l*X+c*Q,r[12]=a*U+o*G+l*V+c*tt,r[1]=h*T+f*I+u*C+d*et,r[5]=h*v+f*D+u*k+d*W,r[9]=h*b+f*O+u*X+d*Q,r[13]=h*U+f*G+u*V+d*tt,r[2]=g*T+M*I+m*C+p*et,r[6]=g*v+M*D+m*k+p*W,r[10]=g*b+M*O+m*X+p*Q,r[14]=g*U+M*G+m*V+p*tt,r[3]=S*T+E*I+y*C+A*et,r[7]=S*v+E*D+y*k+A*W,r[11]=S*b+E*O+y*X+A*Q,r[15]=S*U+E*G+y*V+A*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],M=t[7],m=t[11],p=t[15],S=l*d-c*u,E=o*d-c*f,y=o*u-l*f,A=a*d-c*h,T=a*u-l*h,v=a*f-o*h;return e*(M*S-m*E+p*y)-n*(g*S-m*A+p*T)+s*(g*E-M*A+p*v)-r*(g*y-M*T+m*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],M=t[13],m=t[14],p=t[15],S=e*o-n*a,E=e*l-s*a,y=e*c-r*a,A=n*l-s*o,T=n*c-r*o,v=s*c-r*l,b=h*M-f*g,U=h*m-u*g,I=h*p-d*g,D=f*m-u*M,O=f*p-d*M,G=u*p-d*m,C=S*G-E*O+y*D+A*I-T*U+v*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/C;return t[0]=(o*G-l*O+c*D)*k,t[1]=(s*O-n*G-r*D)*k,t[2]=(M*v-m*T+p*A)*k,t[3]=(u*T-f*v-d*A)*k,t[4]=(l*I-a*G-c*U)*k,t[5]=(e*G-s*I+r*U)*k,t[6]=(m*y-g*v-p*E)*k,t[7]=(h*v-u*y+d*E)*k,t[8]=(a*O-o*I+c*b)*k,t[9]=(n*I-e*O-r*b)*k,t[10]=(g*T-M*y+p*S)*k,t[11]=(f*y-h*T-d*S)*k,t[12]=(o*U-a*D-l*b)*k,t[13]=(e*D-n*U+s*b)*k,t[14]=(M*E-g*A-m*S)*k,t[15]=(h*A-f*E+u*S)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,M=a*h,m=a*f,p=o*f,S=l*c,E=l*h,y=l*f,A=n.x,T=n.y,v=n.z;return s[0]=(1-(M+p))*A,s[1]=(d+y)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+E)*v,s[9]=(m-S)*v,s[10]=(1-(u+M))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ai.set(s[0],s[1],s[2]).length(),o=Ai.set(s[4],s[5],s[6]).length(),l=Ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let c=1/a,h=1/o,f=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=en,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===en)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Hi)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=en,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===en)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Hi)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Aa.prototype.isMatrix4=!0;var ce=Aa,Ai=new N,on=new ce,au=new N(0,0,0),ou=new N(1,1,1),Gn=new N,xr=new N,Ze=new N,Ll=new ce,Dl=new _n,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lu=0,Nl=new N,Ri=new _n,Cn=new ce,yr=new N,cs=new N,cu=new N,hu=new _n,Ul=new N(1,0,0),Fl=new N(0,1,0),Ol=new N(0,0,1),zl={type:"added"},uu={type:"removed"},Ci={type:"childadded",child:null},zo={type:"childremoved",child:null},Ie=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new xn,n=new _n,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Ul,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ul,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(cs,yr,this.up):Cn.lookAt(yr,cs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new N(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},du={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(du)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=tu(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bo(a,r,t+1/3),this.g=Bo(a,r,t),this.b=Bo(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=Hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ee.workingToColorSpace(ze.copy(this),t),Math.round(Yt(ze.r*255,0,255))*65536+Math.round(Yt(ze.g*255,0,255))*256+Math.round(Yt(ze.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Le){ee.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Mr);let n=Do(Wn.h,Mr.h,e),s=Do(Wn.s,Mr.s,e),r=Do(Wn.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Gt;Gt.NAMES=Hc;var Jn=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new N,In=new N,ko=new N,Pn=new N,Ii=new N,Pi=new N,Bl=new N,Vo=new N,Ho=new N,Go=new N,Wo=new ge,Xo=new ge,qo=new ge,Yn=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),In.subVectors(n,e),ko.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(In),l=ln.dot(ko),c=In.dot(In),h=In.dot(ko),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Pi.subVectors(r,n),Vo.subVectors(t,n);let l=Ii.dot(Vo),c=Pi.dot(Vo);if(l<=0&&c<=0)return e.copy(n);Ho.subVectors(t,s);let h=Ii.dot(Ho),f=Pi.dot(Ho);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ii,a);Go.subVectors(t,r);let d=Ii.dot(Go),g=Pi.dot(Go);if(g>=0&&d<=g)return e.copy(r);let M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Bl.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Bl,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(Ii,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),br.subVectors(this.max,hs),Li.subVectors(t.a,hs),Di.subVectors(t.b,hs),Ni.subVectors(t.c,hs),Xn.subVectors(Di,Li),qn.subVectors(Ni,Di),di.subVectors(Li,Ni);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-di.z,di.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!Zo(e,Li,Di,Ni,br)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,Li,Di,Ni,br))?!1:(wr.crossVectors(Xn,qn),e=[wr.x,wr.y,wr.z],Zo(e,Li,Di,Ni,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ln=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,Sr=new yn,Li=new N,Di=new N,Ni=new N,Xn=new N,qn=new N,di=new N,hs=new N,br=new N,wr=new N,fi=new N;function Zo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);let o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var be=new N,Er=new rt,fu=0,un=class extends vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=rn,this.version=0,this._normalizationScale=t!==void 0?k0(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):eu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nu(t,this.array)}};var ws=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Es=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},pu=new yn,us=new N,Yo=new N,$n=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);let e=us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(Yo)),this.expandByPoint(us.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mu=0,tn=new ce,Jo=new Ie,Ui=new N,Ye=new yn,ds=new yn,Re=new N,$e=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?Es:ws)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ye.min,ds.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,ds.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(ds.min),Ye.expandByPoint(ds.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(t,c),Re.add(Ui)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new N,l[U]=new N;let h=new N,f=new N,u=new N,d=new rt,g=new rt,M=new rt,m=new N,p=new N;function S(U,I,D){c[U]=c[I]=c[D]=1,h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,I),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,U),g.fromBufferAttribute(r,I),M.fromBufferAttribute(r,D),f.sub(h),u.sub(h),g.sub(d),M.sub(d);let O=1/(g.x*M.y-M.x*g.y);isFinite(O)&&(m.copy(f).multiplyScalar(M.y).addScaledVector(u,-g.y).multiplyScalar(O),p.copy(u).multiplyScalar(g.x).addScaledVector(f,-M.x).multiplyScalar(O),o[U].add(m),o[I].add(m),o[D].add(m),l[U].add(p),l[I].add(p),l[D].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,I=E.length;U<I;++U){let D=E[U],O=D.start,G=D.count;for(let C=O,k=O+G;C<k;C+=3)S(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new N,A=new N,T=new N,v=new N;function b(U){T.fromBufferAttribute(s,U),v.copy(T);let I=o[U];y.copy(I),y.sub(T.multiplyScalar(T.dot(I))).normalize(),y.lengthSq()===0&&(Math.abs(v.x)<.9?y.set(1,0,0):y.set(0,1,0),y.crossVectors(v,y).normalize()),A.crossVectors(v,I);let O=A.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,O)}for(let U=0,I=n.count;U<I;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new un(u,h,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $o=new N,gu=new N,vu=new kt,hn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$o.subVectors(n,e).cross(gu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vu.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_u=0,Mn=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=is(),this.name="",this.type="Material",this.blending=ts,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=x0,this.blendDst=y0,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Dn=new N,Ko=new N,Tr=new N,Ar=new N,sa=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ko.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),Ar.copy(this.origin).sub(Ko);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Tr),o=Ar.dot(this.direction),l=-Ar.dot(Tr),c=Ar.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ko).addScaledVector(Tr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Dn.subVectors(t.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,E=n.z-a.z,y=Math.abs(l),A=Math.abs(c),T=Math.abs(h),v,b,U,I,D,O,G,C,k,X,V,et;if(y>=A&&y>=T?(U=l,O=f,k=g,et=p,l>=0?(v=c,b=h,I=u,D=d,G=M,C=m,X=S,V=E):(v=h,b=c,I=d,D=u,G=m,C=M,X=E,V=S)):A>=T?(U=c,O=u,k=M,et=S,c>=0?(v=h,b=l,I=d,D=f,G=m,C=g,X=E,V=p):(v=l,b=h,I=f,D=d,G=g,C=m,X=p,V=E)):(U=h,O=d,k=m,et=E,h>=0?(v=l,b=c,I=f,D=u,G=g,C=M,X=p,V=S):(v=c,b=l,I=u,D=f,G=M,C=g,X=S,V=p)),U===0)return null;let W=v/U,Q=b/U,tt=1/U,bt=I-W*O,Ut=D-Q*O,Z=G-W*k,vt=C-Q*k,wt=X-W*et,Lt=V-Q*et,_t=wt*vt-Lt*Z,Dt=bt*Lt-Ut*wt,pe=Z*Ut-vt*bt;if(s){if(_t<0||Dt<0||pe<0)return null}else if((_t<0||Dt<0||pe<0)&&(_t>0||Dt>0||pe>0))return null;let Ft=_t+Dt+pe;if(Ft===0)return null;let Zt=tt*(_t*O+Dt*k+pe*et);return(Ft>0?Zt<0:Zt>0)?null:this.at(Zt/Ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ra=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kl=new ce,pi=new sa,Rr=new $n,Vl=new N,Cr=new N,Ir=new N,Pr=new N,Qo=new N,Lr=new N,Hl=new N,Dr=new N,se=class extends Ie{constructor(t=new $e,e=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Qo.fromBufferAttribute(f,t),a?Lr.addScaledVector(Qo,h):Lr.addScaledVector(Qo.sub(e),h))}e.add(Lr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(Rr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Rr,Vl)===null||pi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),pi.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,A=E;y<A;y+=3){let T=o.getX(y),v=o.getX(y+1),b=o.getX(y+2);s=Nr(this,p,t,n,c,h,f,T,v,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let S=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Nr(this,a,t,n,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,A=E;y<A;y+=3){let T=y,v=y+1,b=y+2;s=Nr(this,p,t,n,c,h,f,T,v,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let S=m,E=m+1,y=m+2;s=Nr(this,a,t,n,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function xu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===si,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:i}}function Nr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Cr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Pr);let h=xu(i,t,e,n,Cr,Ir,Pr,Hl);if(h){let f=new N;Yn.getBarycoord(Hl,Cr,Ir,Pr,f),s&&(h.uv=Yn.getInterpolatedAttribute(s,o,l,c,f,new rt)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};Yn.getNormal(Cr,Ir,Pr,u.normal),h.face=u,h.barycoord=f}return h}var Ts=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ce,h=Ce,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=class extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fi=new ce,Gl=new ce,Ur=[],Wl=new yn,yu=new ce,fs=new se,ps=new $n,Rs=class extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),Wl.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Wl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),ps.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fi),Gl.multiplyMatrices(n,Fi),fs.matrixWorld=Gl,fs.raycast(t,Ur);for(let a=0,o=Ur.length;a<o;a++){let l=Ur[a];l.instanceId=r,l.object=this,e.push(l)}Ur.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(s*this.count),s,this.count,Oa,rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mi=new $n,Mu=new rt(.5,.5),Fr=new N,Kn=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],E=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,p-g,A-S).normalize(),s[1].setComponents(c+a,d+h,p+g,A+S).normalize(),s[2].setComponents(c+o,d+f,p+M,A+E).normalize(),s[3].setComponents(c-o,d-f,p-M,A-E).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,p-m,A-y).normalize();else if(s[4].setComponents(c-l,d-u,p-m,A-y).normalize(),e===en)s[5].setComponents(c+l,d+u,p+m,A+y).normalize();else if(e===Hi)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);let e=Mu.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xl=new ce,aa=class i{constructor(){this.coordinateSystem=en,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Kn),n[s].setFromProjectionMatrix(Xl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Kn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Cs=class extends He{constructor(t=[],e=bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Is=class extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fn=class extends He{constructor(t,e,n=dn,s,r,a,o=Ce,l=Ce,c,h=Un,f=1){if(h!==Un&&h!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ps=class extends Fn{constructor(t,e=dn,n=bi,s,r,a=Ce,o=Ce,l,c=Un){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ls=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qn=class i extends $e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(f,2));function g(M,m,p,S,E,y,A,T,v,b,U){let I=y/v,D=A/b,O=y/2,G=A/2,C=T/2,k=v+1,X=b+1,V=0,et=0,W=new N;for(let Q=0;Q<X;Q++){let tt=Q*D-G;for(let bt=0;bt<k;bt++){let Ut=bt*I-O;W[M]=Ut*S,W[m]=tt*E,W[p]=C,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),f.push(bt/v),f.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let tt=0;tt<v;tt++){let bt=u+tt+k*Q,Ut=u+tt+k*(Q+1),Z=u+(tt+1)+k*(Q+1),vt=u+(tt+1)+k*Q;l.push(bt,Ut,vt),l.push(Ut,Z,vt),et+=6}o.addGroup(d,et,U),d+=et,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var jn=class i extends $e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,M=[],m=n/2,p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(d,2));function S(){let y=new N,A=new N,T=0,v=(e-t)/n;for(let b=0;b<=r;b++){let U=[],I=b/r,D=I*(e-t)+t;for(let O=0;O<=s;O++){let G=O/s,C=G*l+o,k=Math.sin(C),X=Math.cos(C);A.x=D*k,A.y=-I*n+m,A.z=D*X,f.push(A.x,A.y,A.z),y.set(k,v,X).normalize(),u.push(y.x,y.y,y.z),d.push(G,1-I),U.push(g++)}M.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let I=M[U][b],D=M[U+1][b],O=M[U+1][b+1],G=M[U][b+1];(t>0||U!==0)&&(h.push(I,D,G),T+=3),(e>0||U!==r-1)&&(h.push(D,O,G),T+=3)}c.addGroup(p,T,0),p+=T}function E(y){let A=g,T=new rt,v=new N,b=0,U=y===!0?t:e,I=y===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*I,0),u.push(0,I,0),d.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let C=O/s*l+o,k=Math.cos(C),X=Math.sin(C);v.x=U*X,v.y=m*I,v.z=U*k,f.push(v.x,v.y,v.z),u.push(0,I,0),T.x=k*.5+.5,T.y=X*.5*I+.5,d.push(T.x,T.y),g++}for(let O=0;O<s;O++){let G=A+O,C=D+O;y===!0?h.push(C,C+1,G):h.push(C+1,C,G),b+=3}c.addGroup(p,b,y===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new ce;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Yt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Yt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},qi=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oa=class extends qi{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function V0(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ql=new N,Zl=new N,jo=new V0,t0=new V0,e0=new V0,la=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Zl.subVectors(s[0],s[1]).add(s[0]),c=Zl);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ql.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),jo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,M,m),t0.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,M,m),e0.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),t0.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),e0.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(jo.calc(l),t0.calc(l),e0.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Su(i,t){let e=1-i;return e*e*t}function bu(i,t){return 2*(1-i)*i*t}function wu(i,t){return i*i*t}function gs(i,t,e,n){return Su(i,t)+bu(i,e)+wu(i,n)}function Eu(i,t){let e=1-i;return e*e*e*t}function Tu(i,t){let e=1-i;return 3*e*e*i*t}function Au(i,t){return 3*(1-i)*i*i*t}function Ru(i,t){return i*i*i*t}function vs(i,t,e,n,s){return Eu(i,t)+Tu(i,e)+Au(i,n)+Ru(i,s)}var Ds=class extends Ke{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ca=class extends Ke{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y),vs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ns=class extends Ke{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends Ke{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Us=class extends Ke{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,s.x,r.x,a.x),gs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends Ke{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,s.x,r.x,a.x),gs(t,s.y,r.y,a.y),gs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fs=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Yl(o,l.x,c.x,h.x,f.x),Yl(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},o0=Object.freeze({__proto__:null,ArcCurve:oa,CatmullRomCurve3:la,CubicBezierCurve:Ds,CubicBezierCurve3:ca,EllipseCurve:qi,LineCurve:Ns,LineCurve3:ha,QuadraticBezierCurve:Us,QuadraticBezierCurve3:ua,SplineCurve:Fs}),da=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new o0[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new o0[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Os=class extends da{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ns(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Us(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ds(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new qi(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zi=class extends Os{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Os().fromJSON(s))}return this}};function Cu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gc(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Nu(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return zs(r,a,e,o,l,c,0),a}function Gc(i,t,e,n,s){let r;if(s===Xu(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Jl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Jl(a/n|0,i[a],i[a+1],r);return r&&Yi(r,r.next)&&(ks(r),r=r.next),r}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yi(e,e.next)||_e(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Bu(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Pu(i,n,s,r):Iu(i)){t.push(l.i,i.i,c.i),ks(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Lu(_i(i),t),zs(i,t,e,n,s,r,2)):a===2&&Du(i,t,e,n,s,r):zs(_i(i),t,e,n,s,r,1);break}}}function Iu(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&ms(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pu(i,t,e,n){let s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),M=Math.max(o,l,c),m=Math.max(h,f,u),p=l0(d,g,t,e,n),S=l0(M,m,t,e,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=p&&y&&y.z<=S;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&ms(o,h,l,f,c,u,E.x,E.y)&&_e(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ms(o,h,l,f,c,u,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&ms(o,h,l,f,c,u,E.x,E.y)&&_e(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ms(o,h,l,f,c,u,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Lu(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Yi(n,s)&&Xc(n,e,e.next,s)&&Bs(n,s)&&Bs(s,n)&&(t.push(n.i,e.i,s.i),ks(e),ks(e.next),e=i=s),e=e.next}while(e!==i);return _i(e)}function Du(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hu(a,o)){let l=qc(a,o);a=_i(a,a.next),l=_i(l,l.next),zs(a,t,e,n,s,r,0),zs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Nu(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Gc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vu(c))}s.sort(Uu);for(let r=0;r<s.length;r++)e=Fu(s[r],e);return e}function Uu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Fu(i,t){let e=Ou(i,t);if(!e)return t;let n=qc(e,i);return _i(n,n.next),_i(e,e.next)}function Ou(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Yi(i,e))return e;do{if(Yi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Bs(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&zu(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function zu(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Bu(i,t,e,n){let s=i;do s.z===0&&(s.z=l0(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ku(s)}function ku(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function l0(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vu(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ms(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Wc(i,t,e,n,s,r,a,o)}function Hu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gu(i,t)&&(Bs(i,t)&&Bs(t,i)&&Wu(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Yi(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yi(i,t){return i.x===t.x&&i.y===t.y}function Xc(i,t,e,n){let s=zr(_e(i,t,e)),r=zr(_e(i,t,n)),a=zr(_e(e,n,i)),o=zr(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&Or(i,e,t)||r===0&&Or(i,n,t)||a===0&&Or(e,i,n)||o===0&&Or(e,t,n))}function Or(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zr(i){return i>0?1:i<0?-1:0}function Gu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Wu(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qc(i,t){let e=c0(i.i,i.x,i.y),n=c0(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jl(i,t,e,n){let s=c0(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function c0(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xu(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var h0=class{static triangulate(t,e,n=2){return Cu(t,e,n)}},gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$l(t),Kl(n,t);let a=t.length;e.forEach($l);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Kl(n,e[l]);let o=h0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $l(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vs=class i extends $e{constructor(t=new Zi([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:qu,E,y=!1,A,T,v,b;if(p){E=p.getSpacedPoints(h),y=!0,u=!1;let j=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,j),T=new N,v=new N,b=new N}u||(m=0,d=0,g=0,M=0);let U=o.extractPoints(c),I=U.shape,D=U.holes;if(!gi.isClockWise(I)){I=I.reverse();for(let j=0,ct=D.length;j<ct;j++){let at=D[j];gi.isClockWise(at)&&(D[j]=at.reverse())}}function G(j){let at=10000000000000001e-36,St=j[0];for(let gt=1;gt<=j.length;gt++){let Ht=gt%j.length,Ct=j[Ht],Kt=Ct.x-St.x,Qt=Ct.y-St.y,ie=Kt*Kt+Qt*Qt,L=Math.max(Math.abs(Ct.x),Math.abs(Ct.y),Math.abs(St.x),Math.abs(St.y)),Me=at*L*L;if(ie<=Me){j.splice(Ht,1),gt--;continue}St=Ct}}G(I),D.forEach(G);let C=D.length,k=I;for(let j=0;j<C;j++){let ct=D[j];I=I.concat(ct)}function X(j,ct,at){return ct||zt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ct,at)}let V=I.length;function et(j,ct,at){let St,gt,Ht,Ct=j.x-ct.x,Kt=j.y-ct.y,Qt=at.x-j.x,ie=at.y-j.y,L=Ct*Ct+Kt*Kt,Me=Ct*ie-Kt*Qt;if(Math.abs(Me)>Number.EPSILON){let Jt=Math.sqrt(L),he=Math.sqrt(Qt*Qt+ie*ie),dt=ct.x-Kt/Jt,xe=ct.y+Ct/Jt,Nt=at.x-ie/he,Bt=at.y+Qt/he,w=((Nt-dt)*ie-(Bt-xe)*Qt)/(Ct*ie-Kt*Qt);St=dt+Ct*w-j.x,gt=xe+Kt*w-j.y;let _=St*St+gt*gt;if(_<=2)return new rt(St,gt);Ht=Math.sqrt(_/2)}else{let Jt=!1;Ct>Number.EPSILON?Qt>Number.EPSILON&&(Jt=!0):Ct<-Number.EPSILON?Qt<-Number.EPSILON&&(Jt=!0):Math.sign(Kt)===Math.sign(ie)&&(Jt=!0),Jt?(St=-Kt,gt=Ct,Ht=Math.sqrt(L)):(St=Ct,gt=Kt,Ht=Math.sqrt(L/2))}return new rt(St/Ht,gt/Ht)}let W=[];for(let j=0,ct=k.length,at=ct-1,St=j+1;j<ct;j++,at++,St++)at===ct&&(at=0),St===ct&&(St=0),W[j]=et(k[j],k[at],k[St]);let Q=[],tt,bt=W.concat();for(let j=0,ct=C;j<ct;j++){let at=D[j];tt=[];for(let St=0,gt=at.length,Ht=gt-1,Ct=St+1;St<gt;St++,Ht++,Ct++)Ht===gt&&(Ht=0),Ct===gt&&(Ct=0),tt[St]=et(at[St],at[Ht],at[Ct]);Q.push(tt),bt=bt.concat(tt)}let Ut;if(m===0)Ut=gi.triangulateShape(k,D);else{let j=[],ct=[];for(let at=0;at<m;at++){let St=at/m,gt=d*Math.cos(St*Math.PI/2),Ht=g*Math.sin(St*Math.PI/2)+M;for(let Ct=0,Kt=k.length;Ct<Kt;Ct++){let Qt=X(k[Ct],W[Ct],Ht);Dt(Qt.x,Qt.y,-gt),St===0&&j.push(Qt)}for(let Ct=0,Kt=C;Ct<Kt;Ct++){let Qt=D[Ct];tt=Q[Ct];let ie=[];for(let L=0,Me=Qt.length;L<Me;L++){let Jt=X(Qt[L],tt[L],Ht);Dt(Jt.x,Jt.y,-gt),St===0&&ie.push(Jt)}St===0&&ct.push(ie)}}Ut=gi.triangulateShape(j,ct)}let Z=Ut.length,vt=g+M;for(let j=0;j<V;j++){let ct=u?X(I[j],bt[j],vt):I[j];y?(v.copy(A.normals[0]).multiplyScalar(ct.x),T.copy(A.binormals[0]).multiplyScalar(ct.y),b.copy(E[0]).add(v).add(T),Dt(b.x,b.y,b.z)):Dt(ct.x,ct.y,0)}for(let j=1;j<=h;j++)for(let ct=0;ct<V;ct++){let at=u?X(I[ct],bt[ct],vt):I[ct];y?(v.copy(A.normals[j]).multiplyScalar(at.x),T.copy(A.binormals[j]).multiplyScalar(at.y),b.copy(E[j]).add(v).add(T),Dt(b.x,b.y,b.z)):Dt(at.x,at.y,f/h*j)}for(let j=m-1;j>=0;j--){let ct=j/m,at=d*Math.cos(ct*Math.PI/2),St=g*Math.sin(ct*Math.PI/2)+M;for(let gt=0,Ht=k.length;gt<Ht;gt++){let Ct=X(k[gt],W[gt],St);Dt(Ct.x,Ct.y,f+at)}for(let gt=0,Ht=D.length;gt<Ht;gt++){let Ct=D[gt];tt=Q[gt];for(let Kt=0,Qt=Ct.length;Kt<Qt;Kt++){let ie=X(Ct[Kt],tt[Kt],St);y?Dt(ie.x,ie.y+E[h-1].y,E[h-1].x+at):Dt(ie.x,ie.y,f+at)}}}wt(),Lt();function wt(){let j=s.length/3;if(u){let ct=0,at=V*ct;for(let St=0;St<Z;St++){let gt=Ut[St];pe(gt[2]+at,gt[1]+at,gt[0]+at)}ct=h+m*2,at=V*ct;for(let St=0;St<Z;St++){let gt=Ut[St];pe(gt[0]+at,gt[1]+at,gt[2]+at)}}else{for(let ct=0;ct<Z;ct++){let at=Ut[ct];pe(at[2],at[1],at[0])}for(let ct=0;ct<Z;ct++){let at=Ut[ct];pe(at[0]+V*h,at[1]+V*h,at[2]+V*h)}}n.addGroup(j,s.length/3-j,0)}function Lt(){let j=s.length/3,ct=0;_t(k,ct),ct+=k.length;for(let at=0,St=D.length;at<St;at++){let gt=D[at];_t(gt,ct),ct+=gt.length}n.addGroup(j,s.length/3-j,1)}function _t(j,ct){let at=j.length;for(;--at>=0;){let St=at,gt=at-1;gt<0&&(gt=j.length-1);for(let Ht=0,Ct=h+m*2;Ht<Ct;Ht++){let Kt=V*Ht,Qt=V*(Ht+1),ie=ct+St+Kt,L=ct+gt+Kt,Me=ct+gt+Qt,Jt=ct+St+Qt;Ft(ie,L,Me,Jt)}}}function Dt(j,ct,at){l.push(j),l.push(ct),l.push(at)}function pe(j,ct,at){Zt(j),Zt(ct),Zt(at);let St=s.length/3,gt=S.generateTopUV(n,s,St-3,St-2,St-1);$t(gt[0]),$t(gt[1]),$t(gt[2])}function Ft(j,ct,at,St){Zt(j),Zt(ct),Zt(St),Zt(ct),Zt(at),Zt(St);let gt=s.length/3,Ht=S.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);$t(Ht[0]),$t(Ht[1]),$t(Ht[3]),$t(Ht[1]),$t(Ht[2]),$t(Ht[3])}function Zt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function $t(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zu(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new o0[s.type]().fromJSON(s)),new i(n,t.options)}},qu={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-f),new rt(u,1-g),new rt(M,1-p)]:[new rt(o,1-l),new rt(h,1-f),new rt(d,1-g),new rt(m,1-p)]}};function Zu(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Hs=class i extends $e{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Yt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new N,u=new rt,d=new N,g=new N,M=new N,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(g)}for(let S=0;S<=e;S++){let E=n+S*h*s,y=Math.sin(E),A=Math.cos(E);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*y,f.y=t[T].y,f.z=t[T].x*A,a.push(f.x,f.y,f.z),u.x=S/e,u.y=T/(t.length-1),o.push(u.x,u.y);let v=l[3*T+0]*y,b=l[3*T+1],U=l[3*T+0]*A;c.push(v,b,U)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){let y=E+S*t.length,A=y,T=y+t.length,v=y+t.length+1,b=y+1;r.push(A,T,b),r.push(v,b,T)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ti=class i extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let E=0;E<c;E++){let y=E*f-r;g.push(y,-S,0),M.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let E=S+c*p,y=S+c*(p+1),A=S+1+c*(p+1),T=S+1+c*p;d.push(E,y,T),d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ji=class i extends $e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new N,u=new N,d=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let S=[],E=p/n,y=a+E*o,A=t*Math.cos(y),T=Math.sqrt(t*t-A*A),v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let U=b/e,I=s+U*r;f.x=-T*Math.cos(I),f.y=A,f.z=T*Math.sin(I),g.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),m.push(U+v,1-E),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let E=h[p][S+1],y=h[p][S],A=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&d.push(E,y,T),(p!==n-1||l<Math.PI)&&d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gs=class i extends $e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new N,d=new N,g=new N;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let p=0;p<=s;p++){let S=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,E=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(p,S,y),l.push(S,E,y)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ws=class extends Mn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ei(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ql(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ql(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=Ei(i[e]);for(let s in n)t[s]=n[s]}return t}function Ql(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function H0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Zc={clone:Ei,merge:Be},Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fa=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qe=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xs=class extends Qe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return vi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){vi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var qs=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pa=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ma=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Oi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Br(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ga=class extends ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:s0,endingEnd:s0}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case r0:r=t,o=2*e-n;break;case a0:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case r0:a=t,l=2*n-e;break;case a0:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,S=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,E=(-1-d)*m+(1.5+d)*M+.5*g,y=d*m-d*M;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+S*a[c+A]+E*a[l+A]+y*a[f+A];return r}},va=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},_a=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends ei{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=d*u+g*2,S=f[p],E=f[p+1],y=t*u+g*2,A=h[y],T=h[y+1],v=Qu(n,e,S,A,s);r[g]=Yc(v,M,E,T,m)}return r}};function Yc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ku(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Qu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Yc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ku(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oi(e,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oi(t.times,Array),values:Oi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Br(t.settings)&&(n.settings={inTangents:Oi(t.settings.inTangents,Array),outTangents:Oi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case jr:e=this.InterpolantFactoryMethodLinear;break;case Hr:e=this.InterpolantFactoryMethodSmooth;break;case i0:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return Hr;case this.InterpolantFactoryMethodBezier:return i0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Br(this.settings)&&(jl(this.settings.inTangents,t),jl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Br(this.settings)&&(tc(this.settings.inTangents,t),tc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let M=e[f+g];if(M!==e[u+g]||M!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Br(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function tc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=jr;var ni=class extends je{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=_s;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="color";var Ma=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};Ma.prototype.ValueTypeName="number";var Sa=class extends ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zs=class extends je{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends je{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=_s;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jc=new wa,Ea=class{constructor(t){this.manager=t!==void 0?t:Jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i=class extends Ie{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ki=class extends $i{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},n0=new ce,ec=new N,nc=new N,Ys=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kn,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){n0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(n0,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(n0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kr=new N,Vr=new _n,mn=new N,Js=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kr,Vr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Vr,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kr,Vr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Vr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zn=new N,ic=new rt,sc=new rt,De=class extends Js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,ic,sc),e.subVectors(sc,ic)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var u0=class extends Ys{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0}},xi=class extends $i{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new u0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$s=class extends Js{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},d0=class extends Ys{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yi=class extends $i{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new d0}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zi=-90,Bi=1,Qi=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(zi,Bi,t,e);s.layers=this.layers,this.add(s);let r=new De(zi,Bi,t,e);r.layers=this.layers,this.add(r);let a=new De(zi,Bi,t,e);a.layers=this.layers,this.add(a);let o=new De(zi,Bi,t,e);o.layers=this.layers,this.add(o);let l=new De(zi,Bi,t,e);l.layers=this.layers,this.add(l);let c=new De(zi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ta=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var G0="\\[\\]\\.:\\/",ju=new RegExp("["+G0+"]","g"),W0="[^"+G0+"]",td="[^"+G0.replace("\\.","")+"]",ed=/((?:WC+[\/:])*)/.source.replace("WC",W0),nd=/(WCOD+)?/.source.replace("WCOD",td),id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",W0),sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",W0),rd=new RegExp("^"+ed+nd+id+sd+"$"),ad=["material","materials","bones","map"],f0=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ju,"")}static parseTrackName(t){let e=rd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ad.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=f0;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a3=new Float32Array(1);var Ks=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var $0=class $0{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};$0.prototype.isMatrix2=!0;var p0=$0;function X0(i,t,e,n){let s=od(n);switch(e){case D0:return i*t;case Oa:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case ri:return i*t*2/s.components*s.byteLength;case Ba:return i*t*2/s.components*s.byteLength;case N0:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case qa:case Ya:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case sr:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uo:case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rr:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function od(i){switch(i){case qe:case C0:return{byteLength:1,components:1};case ns:case I0:case fn:return{byteLength:2,components:1};case Ua:case Fa:return{byteLength:2,components:4};case dn:case Na:case rn:return{byteLength:4,components:1};case P0:case L0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);function vh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ld(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let M=f[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,of=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$f=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:cd,alphahash_pars_fragment:hd,alphamap_fragment:ud,alphamap_pars_fragment:dd,alphatest_fragment:fd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:vd,batching_vertex:_d,begin_vertex:xd,beginnormal_vertex:yd,bsdfs:Md,iridescence_fragment:Sd,bumpmap_pars_fragment:bd,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:Rd,color_pars_fragment:Cd,color_pars_vertex:Id,color_vertex:Pd,common:Ld,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Nd,displacementmap_vertex:Ud,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:zd,colorspace_pars_fragment:Bd,envmap_fragment:kd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:tf,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Zd,fog_pars_fragment:Yd,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:$d,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Qd,lights_pars_begin:jd,lights_toon_fragment:ef,lights_toon_pars_fragment:nf,lights_phong_fragment:sf,lights_phong_pars_fragment:rf,lights_physical_fragment:af,lights_physical_pars_fragment:of,lights_fragment_begin:lf,lights_fragment_maps:cf,lights_fragment_end:hf,lightprobes_pars_fragment:uf,logdepthbuf_fragment:df,logdepthbuf_pars_fragment:ff,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:vf,map_particle_fragment:_f,map_particle_pars_fragment:xf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:Mf,morphinstance_vertex:Sf,morphcolor_vertex:bf,morphnormal_vertex:wf,morphtarget_pars_vertex:Ef,morphtarget_vertex:Tf,normal_fragment_begin:Af,normal_fragment_maps:Rf,normal_pars_fragment:Cf,normal_pars_vertex:If,normal_vertex:Pf,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:Ff,opaque_fragment:Of,packing:zf,premultiplied_alpha_fragment:Bf,project_vertex:kf,dithering_fragment:Vf,dithering_pars_fragment:Hf,roughnessmap_fragment:Gf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:qf,shadowmap_vertex:Zf,shadowmask_pars_fragment:Yf,skinbase_vertex:Jf,skinning_pars_vertex:$f,skinning_vertex:Kf,skinnormal_vertex:Qf,specularmap_fragment:jf,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:s1,uv_pars_fragment:r1,uv_pars_vertex:a1,uv_vertex:o1,worldpos_vertex:l1,background_vert:c1,background_frag:h1,backgroundCube_vert:u1,backgroundCube_frag:d1,cube_vert:f1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:v1,distance_frag:_1,equirect_vert:x1,equirect_frag:y1,linedashed_vert:M1,linedashed_frag:S1,meshbasic_vert:b1,meshbasic_frag:w1,meshlambert_vert:E1,meshlambert_frag:T1,meshmatcap_vert:A1,meshmatcap_frag:R1,meshnormal_vert:C1,meshnormal_frag:I1,meshphong_vert:P1,meshphong_frag:L1,meshphysical_vert:D1,meshphysical_frag:N1,meshtoon_vert:U1,meshtoon_frag:F1,points_vert:O1,points_frag:z1,shadow_vert:B1,shadow_frag:k1,sprite_vert:V1,sprite_frag:H1},yt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},En={basic:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Be([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Be([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Be([yt.points,yt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Be([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Be([yt.common,yt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Be([yt.sprite,yt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Be([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Be([yt.lights,yt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};En.physical={uniforms:Be([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var _o={r:0,b:0,g:0},G1=new ce,_h=new kt;_h.set(-1,0,0,0,1,0,0,0,1);function W1(i,t,e,n,s,r){let a=new Gt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let y=S.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(S){let E=!1,y=d(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,E){let y=d(E);y&&y.isCubeTexture?(c===void 0&&(c=new se(new Qn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ei(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_h),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==ae,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new se(new ti(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ei(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(_o,H0(i)),e.buffers.color.setClear(_o.r,_o.g,_o.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:M,dispose:p}}function X1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,O,G,C,k){let X=!1,V=f(D,C,G,O);r!==V&&(r=V,c(r.object)),X=d(D,C,G,k),X&&g(D,C,G,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(D,O,G,C),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,O,G,C){let k=C.wireframe===!0,X=n[O.id];X===void 0&&(X={},n[O.id]=X);let V=D.isInstancedMesh===!0?D.id:0,et=X[V];et===void 0&&(et={},X[V]=et);let W=et[G.id];W===void 0&&(W={},et[G.id]=W);let Q=W[k];return Q===void 0&&(Q=u(l()),W[k]=Q),Q}function u(D){let O=[],G=[],C=[];for(let k=0;k<e;k++)O[k]=0,G[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:C,object:D,attributes:{},index:null}}function d(D,O,G,C){let k=r.attributes,X=O.attributes,V=0,et=G.getAttributes();for(let W in et)if(et[W].location>=0){let tt=k[W],bt=X[W];if(bt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),tt===void 0||tt.attribute!==bt||bt&&tt.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function g(D,O,G,C){let k={},X=O.attributes,V=0,et=G.getAttributes();for(let W in et)if(et[W].location>=0){let tt=X[W];tt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let bt={};bt.attribute=tt,tt&&tt.data&&(bt.data=tt.data),k[W]=bt,V++}r.attributes=k,r.attributesNum=V,r.index=C}function M(){let D=r.newAttributes;for(let O=0,G=D.length;O<G;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){let G=r.newAttributes,C=r.enabledAttributes,k=r.attributeDivisors;G[D]=1,C[D]===0&&(i.enableVertexAttribArray(D),C[D]=1),k[D]!==O&&(i.vertexAttribDivisor(D,O),k[D]=O)}function S(){let D=r.newAttributes,O=r.enabledAttributes;for(let G=0,C=O.length;G<C;G++)O[G]!==D[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function E(D,O,G,C,k,X,V){V===!0?i.vertexAttribIPointer(D,O,G,k,X):i.vertexAttribPointer(D,O,G,C,k,X)}function y(D,O,G,C){M();let k=C.attributes,X=G.getAttributes(),V=O.defaultAttributeValues;for(let et in X){let W=X[et];if(W.location>=0){let Q=k[et];if(Q===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let tt=Q.normalized,bt=Q.itemSize,Ut=t.get(Q);if(Ut===void 0)continue;let Z=Ut.buffer,vt=Ut.type,wt=Ut.bytesPerElement,Lt=vt===i.INT||vt===i.UNSIGNED_INT||Q.gpuType===Na;if(Q.isInterleavedBufferAttribute){let _t=Q.data,Dt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,pe=Q.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Ft=0;Ft<W.locationSize;Ft++)p(W.location+Ft,_t.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)m(W.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ft=0;Ft<W.locationSize;Ft++)E(W.location+Ft,bt/W.locationSize,vt,tt,Dt*wt,(pe+bt/W.locationSize*Ft)*wt,Lt)}else{if(Q.isInstancedBufferAttribute){for(let _t=0;_t<W.locationSize;_t++)p(W.location+_t,Q.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<W.locationSize;_t++)m(W.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let _t=0;_t<W.locationSize;_t++)E(W.location+_t,bt/W.locationSize,vt,tt,bt*wt,bt/W.locationSize*_t*wt,Lt)}}else if(V!==void 0){let tt=V[et];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}S()}function A(){U();for(let D in n){let O=n[D];for(let G in O){let C=O[G];for(let k in C){let X=C[k];for(let V in X)h(X[V].object),delete X[V];delete C[k]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let G in O){let C=O[G];for(let k in C){let X=C[k];for(let V in X)h(X[V].object),delete X[V];delete C[k]}}delete n[D.id]}function v(D){for(let O in n){let G=n[O];for(let C in G){let k=G[C];if(k[D.id]===void 0)continue;let X=k[D.id];for(let V in X)h(X[V].object),delete X[V];delete k[D.id]}}}function b(D){for(let O in n){let G=n[O],C=D.isInstancedMesh===!0?D.id:0,k=G[C];if(k!==void 0){for(let X in k){let V=k[X];for(let et in V)h(V[et].object),delete V[et];delete k[X]}delete G[C],Object.keys(G).length===0&&delete n[O]}}}function U(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function q1(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Z1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==pn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let b=v===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==qe&&v!==rn&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:T}}function Y1(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,E=S*4,y=p.clippingState||null;l.value=y,y=h(g,u,E,d);for(let A=0;A!==E;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=d+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==M;++E,y+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var cr=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Mi});r.uniforms.tEquirect.value=e;let a=new se(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Ve),new Qi(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},$c=256,J1=3,$1=20,xh=256,yh=16,K1=3,Q1=new N,j1=new Gt,rs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qi(1,10,null),this._boxMesh=new se(new Qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Q1}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(j1));let m=new Qi(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max($c,Vc(t))}_fromTexture(t,e){t.mapping===bi||t.mapping===es?this._setSize(t.image.length===0?$c:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Kc(t,!1,!1),n=Math.log2(t)-J1;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===bi||t.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=tp(),this._integrationMaterial=ep());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/yh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-K1)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(xh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=np());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Kc(i,t,e){return new cr(i,{minFilter:On,generateMipmaps:t,type:fn,colorSpace:xs,depthBuffer:e})}function ur(i,t,e){return new Sn({name:i,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:Ne,blending:Mi,depthTest:!1,depthWrite:!1})}function tp(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ep(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function np(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qc(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function jc(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ip(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Pa||d===La)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new cr(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===Pa||d===La,M=d===bi||d===es;if(g||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new rs(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new rs(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Pa?u.mapping=bi:d===La&&(u.mapping=es),u}function l(u){let d=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function sp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vi("WebGLRenderer: "+n+" extension not supported."),s}}}function rp(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(g){let M=g.attributes;for(let m in M)t.update(M[m],i.ARRAY_BUFFER)}function f(g){let M=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let S=M!==null?M.array.length:m.array.length/3-1,E=m.count>=65535?Es:ws,y=new E(Math.ceil(S/3)*6,1),A=y.array;if(M!==null){let v=M.array;p=M.version;for(let b=0,U=0;b<S;b+=3){let I=v[b+0],D=v[b+1],O=v[b+2];A[U++]=I,A[U++]=D,A[U++]=D,A[U++]=O,A[U++]=O,A[U++]=I}}else{p=m.version;for(let v=0,b=0;v<S;v+=3){let U=v+0,I=v+1,D=v+2;A[b++]=U,A[b++]=I,A[b++]=I,A[b++]=D,A[b++]=D,A[b++]=U}}y.version=p;let T=r.get(g);T&&t.remove(T),r.set(g,y)}function u(g){let M=r.get(g);if(M){let m=g.index;m!==null&&M.version<m.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function ap(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let m=0;m<d;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function op(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lp(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let U=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let y=o.attributes.position.count*E,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*A*4*f),v=new Ss(T,y,A,f);v.type=rn,v.needsUpdate=!0;let b=E*4;for(let I=0;I<f;I++){let D=m[I],O=p[I],G=S[I],C=y*A*4*I;for(let k=0;k<D.count;k++){let X=k*b;d===!0&&(s.fromBufferAttribute(D,k),T[C+X+0]=s.x,T[C+X+1]=s.y,T[C+X+2]=s.z,T[C+X+3]=0),g===!0&&(s.fromBufferAttribute(O,k),T[C+X+4]=s.x,T[C+X+5]=s.y,T[C+X+6]=s.z,T[C+X+7]=0),M===!0&&(s.fromBufferAttribute(G,k),T[C+X+8]=s.x,T[C+X+9]=s.y,T[C+X+10]=s.z,T[C+X+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:v,size:new rt(y,A)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cp(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var hp={[M0]:"LINEAR_TONE_MAPPING",[S0]:"REINHARD_TONE_MAPPING",[b0]:"CINEON_TONE_MAPPING",[w0]:"ACES_FILMIC_TONE_MAPPING",[T0]:"AGX_TONE_MAPPING",[A0]:"NEUTRAL_TONE_MAPPING",[E0]:"CUSTOM_TONE_MAPPING"};function up(i,t,e,n,s,r){let a=new Je(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new $e;h.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fe([0,2,0,0,2,0],2));let f=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new se(h,f),d=new $s(-1,1,1,-1,0,1),g=null,M=null,m=!1,p,S=null,E=[],y=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let v=0;v<E.length;v++){let b=E[v];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){E=A,y=E.length>0&&E[0].isRenderPass===!0;let T=a.width,v=a.height;E.length>0&&o===null&&(o=new Je(T,v,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new Je(T,v,{type:fn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Fn(T,v),r===!0&&(c.format=zn,c.type=wi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<E.length;U++){let I=E[U];I.setSize&&I.setSize(T,v),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===bn&&E.length===0)return!1;if(S=T,T!==null){let v=T.width,b=T.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return y===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=bn,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=p,m=!0;let v=a,b=o;for(let U=0;U<E.length;U++){let I=E[U];I.enabled!==!1&&(I.render(A,b,v,T),I.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(g!==A.outputColorSpace||M!==A.toneMapping){g=A.outputColorSpace,M=A.toneMapping,f.defines={},ee.getTransfer(g)===ae&&(f.defines.SRGB_TRANSFER="");let U=hp[M];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(S),A.render(u,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Mh=new He,Sh=new Fn(1,1),bh=new Ps(1),wh=new Ss,Eh=new ia,Th=new Cs,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function as(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yo(i,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),Ee(e,n)}}function vp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),Ee(e,n)}}function _p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),Ee(e,n)}}function xp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Mo(i){return i.version===0&&(i.compareFunction=O0,i.needsUpdate=!0),i}function Ap(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Mo(Sh):r=Mh,e.setTexture2D(t||r,s)}function Rp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eh,s)}function Cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Mo(bh):r=Th,e.setTextureCube(t||r,s)}function Ip(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wh,s)}function Pp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return yp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return bp;case 36294:return wp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Lp(i,t){i.uniform1fv(this.addr,t)}function Dp(i,t){let e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function Np(i,t){let e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function Up(i,t){let e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){let e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){let e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zp(i,t){let e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bp(i,t){i.uniform1iv(this.addr,t)}function kp(i,t){i.uniform2iv(this.addr,t)}function Vp(i,t){i.uniform3iv(this.addr,t)}function Hp(i,t){i.uniform4iv(this.addr,t)}function Gp(i,t){i.uniform1uiv(this.addr,t)}function Wp(i,t){i.uniform2uiv(this.addr,t)}function Xp(i,t){i.uniform3uiv(this.addr,t)}function qp(i,t){i.uniform4uiv(this.addr,t)}function Zp(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mo(Sh):a=Mh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Yp(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eh,r[a])}function Jp(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Mo(bh):a=Th;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function $p(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wh,r[a])}function Kp(i){switch(i){case 5126:return Lp;case 35664:return Dp;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return zp;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return Vp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return $p}}var j0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pp(e.type)}},tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kp(e.type)}},el=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},K0=/(\w+)(\])?(\[|\.)?/g;function rh(i,t){i.seq.push(t),i.map[t.id]=t}function Qp(i,t,e){let n=i.name,s=n.length;for(K0.lastIndex=0;;){let r=K0.exec(n),a=K0.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rh(e,c===void 0?new j0(o,i,t):new tl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new el(o),rh(e,f)),e=f}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Qp(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ah(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var jp=37297,t2=0;function e2(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var oh=new kt;function n2(i){ee._getMatrix(oh,ee.workingColorSpace,i);let t=`mat3( ${oh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+e2(i.getShaderSource(t),o)}else return r}function i2(i,t){let e=n2(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var s2={[M0]:"Linear",[S0]:"Reinhard",[b0]:"Cineon",[w0]:"ACESFilmic",[T0]:"AgX",[A0]:"Neutral",[E0]:"Custom"};function r2(i,t){let e=s2[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xo=new N;function a2(){ee.getLuminanceCoefficients(xo);let i=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function l2(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c2(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function lr(i){return i!==""}function ch(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h2=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(h2,u2)}function u2(i,t){let e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return nl(e)}var d2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(d2,f2)}function f2(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var p2={[Qs]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function m2(i){return p2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var g2={[es]:"ENVMAP_MODE_REFRACTION"};function v2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":g2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _2={[Ia]:"ENVMAP_BLENDING_MULTIPLY",[Ec]:"ENVMAP_BLENDING_MIX",[Tc]:"ENVMAP_BLENDING_ADD"};function x2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_2[i.combine]||"ENVMAP_BLENDING_NONE"}function y2(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=m2(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=v2(e),f=x2(e),u=o2(e),d=l2(r),g=s.createProgram(),M,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(lr).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(M=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?qt.tonemapping_pars_fragment:"",e.toneMapping!==bn?r2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,i2("linearToOutputTexel",e.outputColorSpace),a2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=nl(a),a=ch(a,e),a=hh(a,e),o=nl(o),o=ch(o,e),o=hh(o,e),a=uh(a),o=uh(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=p+M+a,E=p+m+o,y=ah(s,s.VERTEX_SHADER,S),A=ah(s,s.FRAGMENT_SHADER,E);s.attachShader(g,y),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(y)||"",G=s.getShaderInfoLog(A)||"",C=D.trim(),k=O.trim(),X=G.trim(),V=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,A);else{let W=lh(s,y,"vertex"),Q=lh(s,A,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+W+`
`+Q)}else C!==""?Ot("WebGLProgram: Program Info Log:",C):(k===""||X==="")&&(et=!1);et&&(I.diagnostics={runnable:V,programLog:C,vertexShader:{log:k,prefix:M},fragmentShader:{log:X,prefix:m}})}s.deleteShader(y),s.deleteShader(A),v=new ss(s,g),b=c2(s,g)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,jp)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}var M2=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sl(t),e.set(t,n)),n}},sl=class{constructor(t){this.id=M2++,this.code=t,this.usedTimes=0}};function S2(i){return i===ri||i===sr||i===rr}function b2(i,t,e,n,s,r){let a=new bs,o=new il,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,b,U,I,D,O){let G=I.fog,C=D.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=t.get(v.envMap||k,X),et=u[v.type],W=n.precision;v.precision!==null&&(W=n.getMaxPrecision(v.precision),W!==v.precision&&Ot("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=Q!==void 0?Q.length:0,bt=0;C.morphAttributes.position!==void 0&&(bt=1),C.morphAttributes.normal!==void 0&&(bt=2),C.morphAttributes.color!==void 0&&(bt=3);let Ut,Z,vt,wt;if(et){let xt=En[et];Ut=xt.vertexShader,Z=xt.fragmentShader}else{Ut=v.vertexShader,Z=v.fragmentShader;let xt=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,xt,le),vt=xt.id,wt=le.id}let Lt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Dt=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,Ft=!!v.map,Zt=!!v.matcap,$t=!!V,j=$t&&V.isPMREMTexture===!0,ct=!!v.aoMap,at=!!v.lightMap,St=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,Ht=!!v.displacementMap,Ct=!!v.emissiveMap,Kt=!!v.metalnessMap,Qt=!!v.roughnessMap,ie=v.anisotropy>0,L=v.clearcoat>0,Me=v.diffuseRoughness>0,Jt=v.dispersion>0,he=v.retroreflectivity>0,dt=v.iridescence>0,xe=v.sheen>0,Nt=v.transmission>0,Bt=ie&&!!v.anisotropyMap,w=L&&!!v.clearcoatMap,_=L&&!!v.clearcoatNormalMap,z=L&&!!v.clearcoatRoughnessMap,nt=Me&&!!v.diffuseRoughnessMap,K=dt&&!!v.iridescenceMap,ot=dt&&!!v.iridescenceThicknessMap,ft=xe&&!!v.sheenColorMap,Y=xe&&!!v.sheenRoughnessMap,J=!!v.specularMap,ht=!!v.specularColorMap,R=!!v.specularIntensityMap,$=Nt&&!!v.transmissionMap,q=Nt&&!!v.thicknessMap,ut=!!v.gradientMap,st=!!v.alphaMap,lt=v.alphaTest>0,It=!!v.alphaHash,Xt=!!v.extensions,it=bn;v.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(it=i.toneMapping);let Pt=j?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Wt={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Ut,fragmentShader:Z,defines:v.defines,customVertexShaderID:vt,customFragmentShaderID:wt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ft,matcap:Zt,envMap:$t,envMapMode:$t&&V.mapping,envMapPMREM:j,envMapMaxLod:j?Pt.length-1:null,envMapSize:j?Pt[0].width:null,aoMap:ct,lightMap:at,bumpMap:St,normalMap:gt,displacementMap:Ht,emissiveMap:Ct,normalMapObjectSpace:gt&&v.normalMapType===Cc,normalMapTangentSpace:gt&&v.normalMapType===ar,packedNormalMap:gt&&v.normalMapType===ar&&S2(v.normalMap.format),metalnessMap:Kt,roughnessMap:Qt,anisotropy:ie,anisotropyMap:Bt,clearcoat:L,clearcoatMap:w,clearcoatNormalMap:_,clearcoatRoughnessMap:z,diffuseRoughness:Me,diffuseRoughnessMap:nt,dispersion:Jt,retroreflection:he,iridescence:dt,iridescenceMap:K,iridescenceThicknessMap:ot,sheen:xe,sheenColorMap:ft,sheenRoughnessMap:Y,specularMap:J,specularColorMap:ht,specularIntensityMap:R,transmission:Nt,transmissionMap:$,thicknessMap:q,gradientMap:ut,opaque:v.transparent===!1&&v.blending===ts&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:lt,alphaHash:It,combine:v.combine,mapUv:Ft&&d(v.map.channel),aoMapUv:ct&&d(v.aoMap.channel),lightMapUv:at&&d(v.lightMap.channel),bumpMapUv:St&&d(v.bumpMap.channel),normalMapUv:gt&&d(v.normalMap.channel),displacementMapUv:Ht&&d(v.displacementMap.channel),emissiveMapUv:Ct&&d(v.emissiveMap.channel),metalnessMapUv:Kt&&d(v.metalnessMap.channel),roughnessMapUv:Qt&&d(v.roughnessMap.channel),anisotropyMapUv:Bt&&d(v.anisotropyMap.channel),clearcoatMapUv:w&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:_&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:K&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(v.sheenRoughnessMap.channel),specularMapUv:J&&d(v.specularMap.channel),specularColorMapUv:ht&&d(v.specularColorMap.channel),specularIntensityMapUv:R&&d(v.specularIntensityMap.channel),transmissionMapUv:$&&d(v.transmissionMap.channel),thicknessMapUv:q&&d(v.thicknessMap.channel),alphaMapUv:st&&d(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(gt||ie),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(Ft||st),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:bt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Ft&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:Ct&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===Ne,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Xt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&v.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function M(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)b.push(U),b.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(m(b,v),p(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function p(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){let b=u[v.type],U;if(b){let I=En[b];U=Zc.clone(I.uniforms)}else U=v.uniforms;return U}function E(v,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new y2(i,b,v,s),c.push(U),h.set(b,U)),U}function y(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:S,acquireProgram:E,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:T}}function w2(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function E2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ph(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,M,m,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,d,g,M,m,p,S){S.reversedDepth===!0&&(m=-m);let E=o(u,d,g,M,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,M,m,p){let S=o(u,d,g,M,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||E2),n.length>1&&n.sort(d||fh),s.length>1&&s.sort(d||fh)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function T2(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ph,i.set(n,[a])):s>=r.length?(a=new ph,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Gt};break;case"SpotLight":e={position:new N,direction:new N,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function R2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C2=0;function I2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P2(i){let t=new A2,e=R2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ce,a=new ce;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,S=0,E=0,y=0,A=0,T=0,v=0,b=0,U=0,I=0;c.sort(I2);for(let O=0,G=c.length;O<G;O++){let C=c[O],k=C.color,X=C.intensity,V=C.distance,et=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ri?et=C.shadow.map.texture:et=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=k.r*X,f+=k.g*X,u+=k.b*X;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],X);I++}else if(C.isSunLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,tt=e.get(C);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=et;let bt=Q.getViewportCount();for(let Ut=0;Ut<bt;Ut++)n.sunShadowMatrix[M+Ut]=Q.getMatrix(Ut),n.sunShadowCascade[M+Ut]=Q._cascadeData[Ut];M+=bt,g++}n.sun[d]=W,d++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,tt=e.get(C);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=W,m++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(k).multiplyScalar(X),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[S]=W;let Q=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,Q.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[S]=Q.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[S]=tt,n.spotShadowMap[S]=et,v++}S++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=W,E++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let Q=C.shadow,tt=e.get(C);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=et,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=W,p++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(X),W.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[y]=W,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==E||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==v||D.numSpotMaps!==b||D.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=E,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=I,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=E,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=v,D.numSpotMaps=b,D.numLightProbes=I,n.version=C2++)}function l(c,h){let f=0,u=0,d=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let y=c[S];if(y.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(y.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function mh(i){let t=new P2(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function L2(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new mh(i),t.set(s,[o])):r>=a.length?(o=new mh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var D2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U2=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],F2=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],gh=new ce,or=new N,Q0=new N;function O2(i,t,e){let n=new Kn,s=new rt,r=new rt,a=new ge,o=new pa,l=new ma,c={},h=e.maxTextureSize,f={[si]:Ne,[Ne]:si,[sn]:sn},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:D2,fragmentShader:N2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new $e;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new se(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let p=this.type;this.render=function(T,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ca&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);let U=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Mi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=p!==this.type;G&&v.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(k=>k.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,k=T.length;C<k;C++){let X=T[C],V=X.shadow;if(V===void 0){Ot("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||G===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ji){if(X.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Je(s.x,s.y,{format:ri,type:fn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new Fn(s.x,s.y,rn),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=Un,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ce,V.map.depthTexture.magFilter=Ce}else X.isPointLight?(V.map=new cr(s.x),V.map.depthTexture=new Ps(s.x,dn)):(V.map=new Je(s.x,s.y),V.map.depthTexture=new Fn(s.x,s.y,dn)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=Un,this.type===Qs?(V.map.depthTexture.compareFunction=W?F0:U0,V.map.depthTexture.minFilter=Ve,V.map.depthTexture.magFilter=Ve):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ce,V.map.depthTexture.magFilter=Ce);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();X.isPointLight!==!0&&V.updateMatrices(X,b);let tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let bt=0;bt<Q;bt++){let Ut=V.getCamera(bt);if(X.isPointLight){let Z=V.camera,vt=V.matrix,wt=X.distance||Z.far;wt!==Z.far&&(Z.far=wt,Z.updateProjectionMatrix()),or.setFromMatrixPosition(X.matrixWorld),Z.position.copy(or),Q0.copy(Z.position),Q0.add(U2[bt]),Z.up.copy(F2[bt]),Z.lookAt(Q0),Z.updateMatrixWorld(),vt.makeTranslation(-or.x,-or.y,-or.z),gh.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(gh,Z.coordinateSystem,Z.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(V.map),i.clear());let Z=V.getViewport(bt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a)}n=V.getFrustum(bt),y(v,b,Ut,X,tt,this.type)}V.isPointLightShadow!==!0&&this.type===ji&&S(V,b),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(U,I,D)};function S(T,v){let b=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Je(s.x,s.y,{format:ri,type:fn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(v,null,b,u,M,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(v,null,b,d,M,null)}function E(T,v,b,U){let I=null,D=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)I=D;else if(I=b.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let O=I.uuid,G=v.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let k=C[G];k===void 0&&(k=I.clone(),C[G]=k,v.addEventListener("dispose",A)),I=k}if(I.visible=v.visible,I.wireframe=v.wireframe,U===ji?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:f[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=b}return I}function y(T,v,b,U,I,D){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===ji)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let C=t.update(T),k=T.material;if(Array.isArray(k)){let X=C.groups;for(let V=0,et=X.length;V<et;V++){let W=X[V],Q=k[W.materialIndex];if(Q&&Q.visible){let tt=E(T,Q,U,D);T.onBeforeShadow(i,T,v,b,C,tt,W),i.renderBufferDirect(b,null,C,tt,T,W),T.onAfterShadow(i,T,v,b,C,tt,W)}}}else if(k.visible){let X=E(T,k,U,D);T.onBeforeShadow(i,T,v,b,C,X,null),i.renderBufferDirect(b,null,C,X,T,null),T.onAfterShadow(i,T,v,b,C,X,null)}}let G=T.children;for(let C=0,k=G.length;C<k;C++)y(G[C],v,b,U,I,D)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let U=c[b],I=T.target.uuid;I in U&&(U[I].dispose(),delete U[I])}}}function z2(i,t){function e(){let R=!1,$=new ge,q=null,ut=new ge(0,0,0,0);return{setMask:function(st){q!==st&&!R&&(i.colorMask(st,st,st,st),q=st)},setLocked:function(st){R=st},setClear:function(st,lt,It,Xt,it){it===!0&&(st*=Xt,lt*=Xt,It*=Xt),$.set(st,lt,It,Xt),ut.equals($)===!1&&(i.clearColor(st,lt,It,Xt),ut.copy($))},reset:function(){R=!1,q=null,ut.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,q=null,ut=null,st=null;return{setReversed:function(lt){if($!==lt){let It=t.get("EXT_clip_control");lt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),$=lt;let Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return $},setTest:function(lt){lt?_t(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(lt){q!==lt&&!R&&(i.depthMask(lt),q=lt)},setFunc:function(lt){if($&&(lt=kc[lt]),ut!==lt){switch(lt){case Wr:i.depthFunc(i.NEVER);break;case Xr:i.depthFunc(i.ALWAYS);break;case qr:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Zr:i.depthFunc(i.EQUAL);break;case Yr:i.depthFunc(i.GEQUAL);break;case Jr:i.depthFunc(i.GREATER);break;case $r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=lt}},setLocked:function(lt){R=lt},setClear:function(lt){st!==lt&&(st=lt,$&&(lt=1-lt),i.clearDepth(lt))},reset:function(){R=!1,q=null,ut=null,st=null,$=!1}}}function s(){let R=!1,$=null,q=null,ut=null,st=null,lt=null,It=null,Xt=null,it=null;return{setTest:function(Pt){R||(Pt?_t(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Pt){$!==Pt&&!R&&(i.stencilMask(Pt),$=Pt)},setFunc:function(Pt,Wt,xt){(q!==Pt||ut!==Wt||st!==xt)&&(i.stencilFunc(Pt,Wt,xt),q=Pt,ut=Wt,st=xt)},setOp:function(Pt,Wt,xt){(lt!==Pt||It!==Wt||Xt!==xt)&&(i.stencilOp(Pt,Wt,xt),lt=Pt,It=Wt,Xt=xt)},setLocked:function(Pt){R=Pt},setClear:function(Pt){it!==Pt&&(i.clearStencil(Pt),it=Pt)},reset:function(){R=!1,$=null,q=null,ut=null,st=null,lt=null,It=null,Xt=null,it=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,E=null,y=null,A=null,T=null,v=null,b=new Gt(0,0,0),U=0,I=!1,D=null,O=null,G=null,C=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=et>=2);let Q=null,tt={},bt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Z=new ge().fromArray(bt),vt=new ge().fromArray(Ut);function wt(R,$,q,ut){let st=new Uint8Array(4),lt=i.createTexture();i.bindTexture(R,lt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<q;It++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D($+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return lt}let Lt={};Lt[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Vi),St(!1),gt(m0),_t(i.CULL_FACE),ct(Mi);function _t(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Dt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function pe(R,$){return u[R]!==$?(i.bindFramebuffer(R,$),u[R]=$,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ft(R,$){let q=g,ut=!1;if(R){q=d.get($),q===void 0&&(q=[],d.set($,q));let st=R.textures;if(q.length!==st.length||q[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,It=st.length;lt<It;lt++)q[lt]=i.COLOR_ATTACHMENT0+lt;q.length=st.length,ut=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ut=!0);ut&&i.drawBuffers(q)}function Zt(R){return M!==R?(i.useProgram(R),M=R,!0):!1}let $t={[Si]:i.FUNC_ADD,[lc]:i.FUNC_SUBTRACT,[cc]:i.FUNC_REVERSE_SUBTRACT};$t[hc]=i.MIN,$t[uc]=i.MAX;let j={[dc]:i.ZERO,[fc]:i.ONE,[pc]:i.SRC_COLOR,[x0]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[_c]:i.DST_COLOR,[gc]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[y0]:i.ONE_MINUS_SRC_ALPHA,[xc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Mc]:i.CONSTANT_COLOR,[Sc]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[wc]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(R,$,q,ut,st,lt,It,Xt,it,Pt){if(R===Mi){m===!0&&(Dt(i.BLEND),m=!1);return}if(m===!1&&(_t(i.BLEND),m=!0),R!==oc){if(R!==p||Pt!==I){if((S!==Si||A!==Si)&&(i.blendEquation(i.FUNC_ADD),S=Si,A=Si),Pt)switch(R){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case g0:i.blendFunc(i.ONE,i.ONE);break;case v0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",R);break}else switch(R){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case g0:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case v0:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _0:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",R);break}E=null,y=null,T=null,v=null,b.set(0,0,0),U=0,p=R,I=Pt}return}st=st||$,lt=lt||q,It=It||ut,($!==S||st!==A)&&(i.blendEquationSeparate($t[$],$t[st]),S=$,A=st),(q!==E||ut!==y||lt!==T||It!==v)&&(i.blendFuncSeparate(j[q],j[ut],j[lt],j[It]),E=q,y=ut,T=lt,v=It),(Xt.equals(b)===!1||it!==U)&&(i.blendColor(Xt.r,Xt.g,Xt.b,it),b.copy(Xt),U=it),p=R,I=!1}function at(R,$){R.side===sn?Dt(i.CULL_FACE):_t(i.CULL_FACE);let q=R.side===Ne;$&&(q=!q),St(q),R.blending===ts&&R.transparent===!1?ct(Mi):ct(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ut=R.stencilWrite;o.setTest(ut),ut&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ct(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function gt(R){R!==rc?(_t(i.CULL_FACE),R!==O&&(R===m0?i.cullFace(i.BACK):R===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),O=R}function Ht(R){R!==G&&(V&&i.lineWidth(R),G=R)}function Ct(R,$,q){R?(_t(i.POLYGON_OFFSET_FILL),(C!==$||k!==q)&&(C=$,k=q,a.getReversed()&&($=-$,q=-q),i.polygonOffset($,q))):Dt(i.POLYGON_OFFSET_FILL)}function Kt(R){R?_t(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function Qt(R){R===void 0&&(R=i.TEXTURE0+X-1),Q!==R&&(i.activeTexture(R),Q=R)}function ie(R,$,q){q===void 0&&(Q===null?q=i.TEXTURE0+X-1:q=Q);let ut=tt[q];ut===void 0&&(ut={type:void 0,texture:void 0},tt[q]=ut),(ut.type!==R||ut.texture!==$)&&(Q!==q&&(i.activeTexture(q),Q=q),i.bindTexture(R,$||Lt[R]),ut.type=R,ut.texture=$)}function L(){let R=tt[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function Jt(){try{i.compressedTexImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function he(){try{i.texSubImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function dt(){try{i.texSubImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function xe(){try{i.compressedTexSubImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function Bt(){try{i.texStorage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function z(){try{i.texImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function nt(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function K(R,$){f[R]!==$&&(i.pixelStorei(R,$),f[R]=$)}function ot(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ft(R){vt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),vt.copy(R))}function Y(R,$){let q=c.get($);q===void 0&&(q=new WeakMap,c.set($,q));let ut=q.get(R);ut===void 0&&(ut=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,ut,ut),q.set(R,ut))}function J(R,$,q){let st=c.get($).get(R);l[st]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,q),l[st]=q)}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,tt={},u={},l={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,E=null,y=null,A=null,T=null,v=null,b=new Gt(0,0,0),U=0,I=!1,D=null,O=null,G=null,C=null,k=null,Z.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Dt,bindFramebuffer:pe,drawBuffers:Ft,useProgram:Zt,setBlending:ct,setMaterial:at,setFlipSided:St,setCullFace:gt,setLineWidth:Ht,setPolygonOffset:Ct,setScissorTest:Kt,activeTexture:Qt,bindTexture:ie,unbindTexture:L,compressedTexImage2D:Me,compressedTexImage3D:Jt,texImage2D:_,texImage3D:z,pixelStorei:K,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Bt,texStorage3D:w,texSubImage2D:he,texSubImage3D:dt,compressedTexSubImage2D:xe,compressedTexSubImage3D:Nt,scissor:ot,viewport:ft,reset:ht}}function B2(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,M=new FinalizationRegistry(w=>g.delete(w)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,_){return m?new OffscreenCanvas(w,_):Ms("canvas")}function S(w,_,z){let nt=1,K=Bt(w);if((K.width>z||K.height>z)&&(nt=z/Math.max(K.width,K.height)),nt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ot=Math.floor(nt*K.width),ft=Math.floor(nt*K.height);u===void 0&&(u=p(ot,ft));let Y=_?p(ot,ft):u;return Y.width=ot,Y.height=ft,Y.getContext("2d").drawImage(w,0,0,ot,ft),Ot("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+ft+")."),Y}else return"data"in w&&Ot("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function E(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,_,z,nt,K,ot=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;nt&&(ft=t.get("EXT_texture_norm16"),ft||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&ft&&(Y=ft.R16_EXT),z===i.SHORT&&ft&&(Y=ft.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&ft&&(Y=ft.RG16_EXT),z===i.SHORT&&ft&&(Y=ft.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&ft&&(Y=ft.RGB16_EXT),z===i.SHORT&&ft&&(Y=ft.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let J=ot?ys:ee.getTransfer(K);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=J===ae?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ft&&(Y=ft.RGBA16_EXT),z===i.SHORT&&ft&&(Y=ft.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(w,_){let z;return w?_===null||_===dn||_===wi?z=i.DEPTH24_STENCIL8:_===rn?z=i.DEPTH32F_STENCIL8:_===ns&&(z=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===dn||_===wi?z=i.DEPTH_COMPONENT24:_===rn?z=i.DEPTH_COMPONENT32F:_===ns&&(z=i.DEPTH_COMPONENT16),z}function b(w,_){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ce&&w.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function U(w){let _=new WeakRef(w);n.get(w).__ref=_,g.add(_),M.register(w,_,_)}function I(w){let _=n.get(w).__ref;_!==void 0&&(g.delete(_),M.unregister(_))}function D(w){G(w.target)}function O(w){C(w.target)}function G(w){w.removeEventListener("dispose",D),I(w),X(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function C(w){w.removeEventListener("dispose",O),I(w),et(w)}function k(){for(let w of g){let _=w.deref();_!==void 0&&(_.isRenderTarget===!0?C(_):G(_))}g.clear(),f.clear()}function X(w){let _=n.get(w);if(_.__webglInit===void 0)return;let z=w.source,nt=d.get(z);if(nt){let K=nt[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(w),Object.keys(nt).length===0&&d.delete(z)}n.remove(w)}function V(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let z=w.source,nt=d.get(z);delete nt[_.__cacheKey],a.memory.textures--}function et(w){let _=n.get(w);_.__depthDisposeCallback&&_.__depthDisposeCallback();let z=w.depthTexture;if(z&&z.renderTarget===w&&G(z),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let ot=0;ot<_.__webglFramebuffer[K].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[K][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let nt=w.textures;for(let K=0,ot=nt.length;K<ot;K++){let ft=n.get(nt[K]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(nt[K])}n.remove(w)}let W=0;function Q(){W=0}function tt(){return W}function bt(w){W=w}function Ut(){let w=W;return w>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function Z(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.mipmapsAutoUpdate),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function vt(w,_){let z=n.get(w);if(w.isVideoTexture&&xe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let nt=w.image;if(nt===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{at(z,w,_);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function wt(w,_){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){at(z,w,_);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function Lt(w,_){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){at(z,w,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function _t(w,_){let z=n.get(w);if(w.version>0&&z.__version!==w.version){St(z,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Dt={[Kr]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Qr]:i.MIRRORED_REPEAT},pe={[Ce]:i.NEAREST,[Ac]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Ft={[Pc]:i.NEVER,[O0]:i.ALWAYS,[Lc]:i.LESS,[U0]:i.LEQUAL,[Dc]:i.EQUAL,[F0]:i.GEQUAL,[Nc]:i.GREATER,[Uc]:i.NOTEQUAL};function Zt(w,_){if(_.type===rn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===Da||_.magFilter===js||_.magFilter===On||_.minFilter===Ve||_.minFilter===Da||_.minFilter===js||_.minFilter===On)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Dt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Dt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Dt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,pe[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ce||_.minFilter!==js&&_.minFilter!==On||_.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $t(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",D),U(_));let nt=_.source,K=d.get(nt);K===void 0&&(K={},d.set(nt,K));let ot=Z(_);if(ot!==w.__cacheKey){K[ot]===void 0&&(K[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[ot].usedTimes++;let ft=K[w.__cacheKey];ft!==void 0&&(K[w.__cacheKey].usedTimes--,ft.usedTimes===0&&V(_)),w.__cacheKey=ot,w.__webglTexture=K[ot].texture}return z}function j(w,_,z){return Math.floor(Math.floor(w/z)/_)}function ct(w,_,z,nt){let ot=w.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,nt,_.data);else{ot.sort((R,$)=>R.start-$.start);let ft=0;for(let R=1;R<ot.length;R++){let $=ot[ft],q=ot[R],ut=$.start+$.count,st=j(q.start,_.width,4),lt=j($.start,_.width,4);q.start<=ut+1&&st===lt&&j(q.start+q.count-1,_.width,4)===st?$.count=Math.max($.count,q.start+q.count-$.start):(++ft,ot[ft]=q)}ot.length=ft+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let R=0,$=ot.length;R<$;R++){let q=ot[R],ut=Math.floor(q.start/4),st=Math.ceil(q.count/4),lt=ut%_.width,It=Math.floor(ut/_.width),Xt=st,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,lt,It,Xt,it,z,nt,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function at(w,_,z){let nt=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(nt=i.TEXTURE_3D);let K=$t(w,_),ot=_.source;e.bindTexture(nt,w.__webglTexture,i.TEXTURE0+z);let ft=n.get(ot);if(ot.version!==ft.__version||K===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let it=ee.getPrimaries(ee.workingColorSpace),Pt=_.colorSpace===Bn?null:ee.getPrimaries(_.colorSpace),Wt=_.colorSpace===Bn||it===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let J=S(_.image,!1,s.maxTextureSize);J=Nt(_,J);let ht=r.convert(_.format,_.colorSpace),R=r.convert(_.type),$=T(_.internalFormat,ht,R,_.normalized,_.colorSpace,_.isVideoTexture);Zt(nt,_);let q,ut=_.mipmaps,st=_.isVideoTexture!==!0,lt=ft.__version===void 0||K===!0,It=ot.dataReady,Xt=b(_,J);if(_.isDepthTexture)$=v(_.format===zn,_.type),lt&&(st?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ht,R,null));else if(_.isDataTexture)if(ut.length>0){st&&lt&&e.texStorage2D(i.TEXTURE_2D,Xt,$,ut[0].width,ut[0].height);for(let it=0,Pt=ut.length;it<Pt;it++)q=ut[it],st?It&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ht,R,q.data):e.texImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,ht,R,q.data);_.generateMipmaps=!1}else st?(lt&&e.texStorage2D(i.TEXTURE_2D,Xt,$,J.width,J.height),It&&ct(_,J,ht,R)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ht,R,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){st&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,$,ut[0].width,ut[0].height,J.depth);for(let it=0,Pt=ut.length;it<Pt;it++)if(q=ut[it],_.format!==pn)if(ht!==null)if(st){if(It)if(_.layerUpdates.size>0){let Wt=X0(q.width,q.height,_.format,_.type);for(let xt of _.layerUpdates){let le=q.data.subarray(xt*Wt/q.data.BYTES_PER_ELEMENT,(xt+1)*Wt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,xt,q.width,q.height,1,ht,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ht,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,$,q.width,q.height,J.depth,0,q.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ht,R,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,$,q.width,q.height,J.depth,0,ht,R,q.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{st&&lt&&e.texStorage2D(i.TEXTURE_2D,Xt,$,ut[0].width,ut[0].height);for(let it=0,Pt=ut.length;it<Pt;it++)q=ut[it],_.format!==pn?ht!==null?st?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ht,q.data):e.compressedTexImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,q.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?It&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ht,R,q.data):e.texImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,ht,R,q.data)}else if(_.isDataArrayTexture)if(st){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,$,J.width,J.height,J.depth),It)if(_.layerUpdates.size>0){let it=X0(J.width,J.height,_.format,_.type);for(let Pt of _.layerUpdates){let Wt=J.data.subarray(Pt*it/J.data.BYTES_PER_ELEMENT,(Pt+1)*it/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,J.width,J.height,1,ht,R,Wt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,R,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,ht,R,J.data);else if(_.isData3DTexture)st?(lt&&e.texStorage3D(i.TEXTURE_3D,Xt,$,J.width,J.height,J.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,R,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,ht,R,J.data);else if(_.isFramebufferTexture){if(lt)if(st)e.texStorage2D(i.TEXTURE_2D,Xt,$,J.width,J.height);else{let it=J.width,Pt=J.height;for(let Wt=0;Wt<Xt;Wt++)e.texImage2D(i.TEXTURE_2D,Wt,$,it,Pt,0,ht,R,null),it>>=1,Pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),f.add(_),it.onpaint=Pt=>{let Wt=Pt.changedElements;for(let xt of f)Wt.includes(xt.image)&&(xt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Wt=i.RGBA,xt=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Wt,xt,le,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ut.length>0){if(st&&lt){let it=Bt(ut[0]);e.texStorage2D(i.TEXTURE_2D,Xt,$,it.width,it.height)}for(let it=0,Pt=ut.length;it<Pt;it++)q=ut[it],st?It&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ht,R,q):e.texImage2D(i.TEXTURE_2D,it,$,ht,R,q);_.generateMipmaps=!1}else if(st){if(lt){let it=Bt(J);e.texStorage2D(i.TEXTURE_2D,Xt,$,it.width,it.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,R,J)}else e.texImage2D(i.TEXTURE_2D,0,$,ht,R,J);E(_)&&_.mipmapsAutoUpdate===!0&&y(nt),ft.__version=ot.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function St(w,_,z){if(_.image.length!==6)return;let nt=$t(w,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let ot=n.get(K);if(K.version!==ot.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);let ft=ee.getPrimaries(ee.workingColorSpace),Y=_.colorSpace===Bn?null:ee.getPrimaries(_.colorSpace),J=_.colorSpace===Bn||ft===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ht=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,$=[];for(let xt=0;xt<6;xt++)!ht&&!R?$[xt]=S(_.image[xt],!0,s.maxCubemapSize):$[xt]=R?_.image[xt].image:_.image[xt],$[xt]=Nt(_,$[xt]);let q=$[0],ut=r.convert(_.format,_.colorSpace),st=r.convert(_.type),lt=T(_.internalFormat,ut,st,_.normalized,_.colorSpace),It=_.isVideoTexture!==!0,Xt=ot.__version===void 0||nt===!0,it=K.dataReady,Pt=b(_,q);Zt(i.TEXTURE_CUBE_MAP,_);let Wt;if(_.isDepthTexture){if(lt=v(_.format===zn,_.type),Xt)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,lt,q.width,q.height);else for(let xt=0;xt<6;xt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,q.width,q.height,0,ut,st,null)}else if(ht){It&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,lt,q.width,q.height);for(let xt=0;xt<6;xt++){Wt=$[xt].mipmaps;for(let le=0;le<Wt.length;le++){let Te=Wt[le];_.format!==pn?ut!==null?It?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le,0,0,Te.width,Te.height,ut,Te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le,lt,Te.width,Te.height,0,Te.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le,0,0,Te.width,Te.height,ut,st,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le,lt,Te.width,Te.height,0,ut,st,Te.data)}}}else{if(Wt=_.mipmaps,It&&Xt){Wt.length>0&&Pt++;let xt=Bt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,lt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(R){It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,$[xt].width,$[xt].height,ut,st,$[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,$[xt].width,$[xt].height,0,ut,st,$[xt].data);for(let le=0;le<Wt.length;le++){let Vn=Wt[le].image[xt].image;It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le+1,0,0,Vn.width,Vn.height,ut,st,Vn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le+1,lt,Vn.width,Vn.height,0,ut,st,Vn.data)}}else{It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ut,st,$[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,ut,st,$[xt]);for(let le=0;le<Wt.length;le++){let Te=Wt[le];It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le+1,0,0,ut,st,Te.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,le+1,lt,ut,st,Te.image[xt])}}}E(_)&&_.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ot.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function gt(w,_,z,nt,K,ot){let ft=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),J=T(z.internalFormat,ft,Y,z.normalized,z.colorSpace),ht=n.get(_),R=n.get(z);if(R.__renderTarget=_,!ht.__hasExternalTextures){let $=Math.max(1,_.width>>ot),q=Math.max(1,_.height>>ot);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ot,J,$,q,_.depth,0,ft,Y,null):e.texImage2D(K,ot,J,$,q,0,ft,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,K,R.__webglTexture,0,he(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,K,R.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(w,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let nt=_.depthTexture,K=nt&&nt.isDepthTexture?nt.type:null,ot=v(_.stencilBuffer,K),ft=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(_),ot,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{let nt=_.textures;for(let K=0;K<nt.length;K++){let ot=nt[K],ft=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),J=T(ot.internalFormat,ft,Y,ot.normalized,ot.colorSpace);dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(_),J,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(w,_,z){let nt=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);K.__renderTarget=_;let ot=nt?_.depthTexture.image[0]:_.depthTexture.image;(!K.__webglTexture||ot.width!==_.width||ot.height!==_.height)&&(ot.width=_.width,ot.height=_.height,_.depthTexture.needsUpdate=!0),nt?_t(_.depthTexture,0):vt(_.depthTexture,0);let ft=K.__webglTexture,Y=he(_),J=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ht=_.depthTexture.format===zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Un)dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,ft,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,ft,0);else if(_.depthTexture.format===zn)dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,ft,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(w){let _=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let nt=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),nt){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,nt.removeEventListener("dispose",K)};nt.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=nt}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)Ct(_.__webglFramebuffer[nt],w,nt);else w.texture.mipmaps.length>0?Ct(_.__webglFramebuffer[0],w,0):Ct(_.__webglFramebuffer,w,0);else if(z){_.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[nt]),_.__webglDepthbuffer[nt]===void 0)_.__webglDepthbuffer[nt]=i.createRenderbuffer(),Ht(_.__webglDepthbuffer[nt],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ht(_.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(w,_,z){let nt=n.get(w);_!==void 0&&gt(nt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Kt(w)}function ie(w){let _=w.texture,z=n.get(w),nt=n.get(_);w.addEventListener("dispose",O),U(w);let K=w.textures,ot=w.isWebGLCubeRenderTarget===!0,ft=K.length>1;if(ft||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=_.version,a.memory.textures++),ot){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[Y][J]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Y=0,J=K.length;Y<J;Y++){let ht=n.get(K[Y]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&dt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<K.length;Y++){let J=K[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let ht=r.convert(J.format,J.colorSpace),R=r.convert(J.type),$=T(J.internalFormat,ht,R,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),q=he(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)gt(z.__webglFramebuffer[Y][J],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else gt(z.__webglFramebuffer[Y],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(_)?y(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let Y=0,J=K.length;Y<J;Y++){let ht=K[Y],R=n.get(ht),$=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),Zt($,ht),gt(z.__webglFramebuffer,w,ht,i.COLOR_ATTACHMENT0+Y,$,0),E(ht)&&y($)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,nt.__webglTexture),Zt(Y,_),_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)gt(z.__webglFramebuffer[J],w,_,i.COLOR_ATTACHMENT0,Y,J);else gt(z.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,Y,0);E(_)?y(Y):_.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&Kt(w)}function L(w){let _=w.textures;for(let z=0,nt=_.length;z<nt;z++){let K=_[z];if(E(K)&&K.mipmapsAutoUpdate===!0){let ot=A(w),ft=n.get(K).__webglTexture;e.bindTexture(ot,ft),y(ot),e.unbindTexture()}}}let Me=[];function Jt(w){if(w.samples>0){if(dt(w)===!1){let _=w.textures,z=w.width,nt=w.height,K=i.COLOR_BUFFER_BIT,ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),Y=_.length>1;if(Y)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ht]);let R=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,z,nt,0,0,z,nt,K,i.NEAREST),l===!0&&(Me.length=0,Me.push(i.COLOR_ATTACHMENT0+ht),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Me.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ht]);let R=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function he(w){return Math.min(s.maxSamples,w.samples)}function dt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xe(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Nt(w,_){let z=w.colorSpace,nt=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==xs&&z!==Bn&&(ee.getTransfer(z)===ae?(nt!==pn||K!==qe)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",z)),_}function Bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=bt,this.setTexture2D=vt,this.setTexture2DArray=wt,this.setTexture3D=Lt,this.setTextureCube=_t,this.rebindTextures=Qt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=dt,this.dispose=k}function k2(i,t){function e(n,s=Bn){let r,a=ee.getTransfer(s);if(n===qe)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===P0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===L0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===C0)return i.BYTE;if(n===I0)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===D0)return i.ALPHA;if(n===N0)return i.RGB;if(n===pn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===zn)return i.DEPTH_STENCIL;if(n===Oa)return i.RED;if(n===za)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ha||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Za||n===Ya||n===Ja||n===sr||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xa||n===qa)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sr)return r.COMPRESSED_RG11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===Qa||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===rr||n===vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var V2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ls(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:V2,fragmentShader:H2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends vn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,M=typeof XRWebGLBinding<"u",m=new rl,p={},S=e.getContextAttributes(),E=null,y=null,A=[],T=[],v=new rt,b=null,U=null,I=new De;I.viewport=new ge;let D=new De;D.viewport=new ge;let O=[I,D],G=new Ta,C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let vt=A[Z];return vt===void 0&&(vt=new Xi,A[Z]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Z){let vt=A[Z];return vt===void 0&&(vt=new Xi,A[Z]=vt),vt.getGripSpace()},this.getHand=function(Z){let vt=A[Z];return vt===void 0&&(vt=new Xi,A[Z]=vt),vt.getHandSpace()};function X(Z){let vt=T.indexOf(Z.inputSource);if(vt===-1)return;let wt=A[vt];wt!==void 0&&(wt.update(Z.inputSource,Z.frame,c||a),wt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let Z=0;Z<A.length;Z++){let vt=T[Z];vt!==null&&(T[Z]=null,A[Z].disconnect(vt))}C=null,k=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),U!==null){let Z=U.camera;Z.fov=U.fov,Z.zoom=U.zoom,Z.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Lt=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=S.stencil?zn:Un,Lt=S.stencil?wi:dn);let Dt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Je(u.textureWidth,u.textureHeight,{format:pn,type:qe,depthTexture:new Fn(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Je(d.framebufferWidth,d.framebufferHeight,{format:pn,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Z){for(let vt=0;vt<Z.removed.length;vt++){let wt=Z.removed[vt],Lt=T.indexOf(wt);Lt>=0&&(T[Lt]=null,A[Lt].disconnect(wt))}for(let vt=0;vt<Z.added.length;vt++){let wt=Z.added[vt],Lt=T.indexOf(wt);if(Lt===-1){for(let Dt=0;Dt<A.length;Dt++)if(Dt>=T.length){T.push(wt),Lt=Dt;break}else if(T[Dt]===null){T[Dt]=wt,Lt=Dt;break}if(Lt===-1)break}let _t=A[Lt];_t&&_t.connect(wt)}}function W(Z,vt){vt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(vt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let vt=Z.near,wt=Z.far;m.texture!==null&&(m.depthNear>0&&(vt=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),G.near=D.near=I.near=vt,G.far=D.far=I.far=wt,(C!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),C=G.near,k=G.far),G.layers.mask=Z.layers.mask|6,I.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Lt=Z.parent,_t=G.cameras;W(G,Lt);for(let Dt=0;Dt<_t.length;Dt++)W(_t[Dt],Lt);G.projectionMatrix.copy(I.projectionMatrix),G.projectionMatrixInverse.copy(I.projectionMatrixInverse),U===null&&Z.isPerspectiveCamera&&(U={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,G,Lt)};function Q(Z,vt,wt){wt===null?Z.matrix.copy(vt.matrixWorld):(Z.matrix.copy(wt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(vt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(vt.projectionMatrix),Z.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ta*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let tt=null;function bt(Z,vt){if(h=vt.getViewerPose(c||a),g=vt,h!==null){let wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Lt=!1;wt.length!==G.cameras.length&&(G.cameras.length=0,Lt=!0);for(let Ft=0;Ft<wt.length;Ft++){let Zt=wt[Ft],$t=null;if(d!==null)$t=d.getViewport(Zt);else{let ct=f.getViewSubImage(u,Zt);$t=ct.viewport,Ft===0&&(t.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(y))}let j=O[Ft];j===void 0&&(j=new De,j.layers.enable(Ft),j.viewport=new ge,O[Ft]=j),j.matrix.fromArray(Zt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Zt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set($t.x,$t.y,$t.width,$t.height),Ft===0&&(G.matrix.copy(j.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Lt===!0&&G.cameras.push(j)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let Ft=f.getDepthInformation(wt[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,s.renderState)}if(_t&&_t.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let Ft=0;Ft<wt.length;Ft++){let Zt=wt[Ft].camera;if(Zt){let $t=p[Zt];$t||($t=new Ls,p[Zt]=$t);let j=f.getCameraImage(Zt);$t.sourceTexture=j}}}}for(let wt=0;wt<A.length;wt++){let Lt=T[wt],_t=A[wt];Lt!==null&&_t!==void 0&&_t.update(Lt,vt,c||a)}tt&&tt(Z,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),g=null}let Ut=new vh;Ut.setAnimationLoop(bt),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}},G2=new ce,Ah=new kt;Ah.set(-1,0,0,0,1,0,0,0,1);function W2(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,H0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ne&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ne&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(G2.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ah),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X2(i,t,e,n){let s={},r={};function a(S,E){let y=E.program;n.uniformBlockBinding(S,y,s[S.id])}function o(S,E){let y=s[S.id];y===void 0&&(g(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(S,A);let T=t.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){let E=i.createBuffer(),y=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(S){let E=s[S.id],y=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,v=y.length;T<v;T++){let b=y[T];if(Array.isArray(b))for(let U=0,I=b.length;U<I;U++)h(b[U],T,U,A);else h(b,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,y,A){if(u(S,E,y,A)===!0){let T=S.__offset,v=S.value;if(Array.isArray(v)){let b=0;for(let U=0;U<v.length;U++){let I=v[U],D=M(I,!0);f(I,S.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function f(S,E,y){typeof S=="number"||typeof S=="boolean"?E[y]=S:S.isMatrix3?(E[y]=S.elements[0],E[y+1]=S.elements[1],E[y+2]=S.elements[2],E[y+3]=0,E[y+4]=S.elements[3],E[y+5]=S.elements[4],E[y+6]=S.elements[5],E[y+7]=0,E[y+8]=S.elements[6],E[y+9]=S.elements[7],E[y+10]=S.elements[8],E[y+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-y),y):S.toArray(E,y)}function u(S,E,y,A){let T=S.value,v=E+"_"+y;if(Array.isArray(T)){A[v]===void 0&&(A[v]=[]);let b=A[v],U=!1;for(let I=0;I<T.length;I++)d(T[I],b,I)===!0&&(U=!0);return U}return d(T,A,v)}function d(S,E,y){if(E[y]===void 0)return typeof S=="number"||typeof S=="boolean"?E[y]=S:ArrayBuffer.isView(S)?E[y]=S.slice():E[y]=S.clone(),!0;{let A=E[y];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return E[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){let E=S.uniforms,y=0,A=16;for(let v=0,b=E.length;v<b;v++){let U=Array.isArray(E[v])?E[v]:[E[v]];for(let I=0,D=U.length;I<D;I++){let O=U[I],G=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(E[v])||Array.isArray(O.value),k=y;for(let V=0,et=G.length;V<et;V++){let W=G[V],Q=M(W,C),tt=y%A,bt=tt%Q.boundary,Ut=tt+bt;y+=bt,Ut!==0&&A-Ut<Q.storage&&(y+=A-Ut),V===0&&(k=y),y+=Q.storage}let X=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new X((y-k)/Float32Array.BYTES_PER_ELEMENT),O.__offset=k}}let T=y%A;return T>0&&(y+=A-T),S.__size=y,S.__cache={},this}function M(S,E){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(S){let E=S.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:p}}var q2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null;function Z2(){return wn===null&&(wn=new Ts(q2,16,16,ri,fn),wn.name="DFG_LUT",wn.minFilter=Ve,wn.magFilter=Ve,wn.wrapS=gn,wn.wrapT=gn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}var hr=class{constructor(t={}){let{canvas:e=Oc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=d,m=new Set([ka,Ba,za]),p=new Set([qe,dn,ns,wi,Ua,Fa]),S=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,T=null,v=[],b=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,O=null,G=null,C=null,k=null;this._outputColorSpace=Le;let X=0,V=0,et=null,W=-1,Q=null,tt=new ge,bt=new ge,Ut=null,Z=new Gt(0),vt=0,wt=e.width,Lt=e.height,_t=1,Dt=null,pe=null,Ft=new ge(0,0,wt,Lt),Zt=new ge(0,0,wt,Lt),$t=!1,j=new Kn,ct=new aa,at=!1,St=!1,gt=new ce,Ht=new N,Ct=new ge,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function ie(){return et===null?_t:1}let L=n;function Me(x,P){return e.getContext(x,P)}let Jt,he,dt,xe,Nt,Bt,w,_,z,nt,K,ot,ft,Y,J,ht,R,$,q,ut,st,lt,It;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){let P="webgl2";if(L=Me(P,x),L===null)throw Me(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(x){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),zt("WebGLRenderer: "+x.message),x}function Xt(){Jt=new sp(L),Jt.init(),st=new k2(L,Jt),he=new Z1(L,Jt,t,st),dt=new z2(L,Jt),he.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),G=L.createFramebuffer(),C=L.createFramebuffer(),k=L.createFramebuffer(),xe=new op(L),Nt=new w2,Bt=new B2(L,Jt,dt,Nt,he,st,xe),w=new ip(I),_=new ld(L),lt=new X1(L,_),z=new rp(L,_,xe,lt),nt=new cp(L,z,_,lt,xe),$=new lp(L,he,Bt),J=new Y1(Nt),K=new b2(I,w,Jt,he,lt,J),ot=new W2(I,Nt),ft=new T2,Y=new L2(Jt),R=new W1(I,w,dt,nt,g,l),ht=new O2(I,nt,he),It=new X2(L,xe,he,dt),q=new q1(L,Jt,xe),ut=new ap(L,Jt,xe),xe.programs=K.programs,I.capabilities=he,I.extensions=Jt,I.properties=Nt,I.renderLists=ft,I.shadowMap=ht,I.state=dt,I.info=xe}M!==qe&&(U=new up(M,e.width,e.height,o,s,r));let it=new al(I,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=Jt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Jt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(x){x!==void 0&&(_t=x,this.setSize(wt,Lt,!1))},this.getSize=function(x){return x.set(wt,Lt)},this.setSize=function(x,P,H=!0){if(it.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=x,Lt=P,e.width=Math.floor(x*_t),e.height=Math.floor(P*_t),H===!0&&(e.style.width=x+"px",e.style.height=P+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(wt*_t,Lt*_t).floor()},this.setDrawingBufferSize=function(x,P,H){wt=x,Lt=P,_t=H,e.width=Math.floor(x*H),e.height=Math.floor(P*H),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(M===qe){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(tt)},this.getViewport=function(x){return x.copy(Ft)},this.setViewport=function(x,P,H,F){x.isVector4?Ft.set(x.x,x.y,x.z,x.w):Ft.set(x,P,H,F),dt.viewport(tt.copy(Ft).multiplyScalar(ie()).round())},this.getScissor=function(x){return x.copy(Zt)},this.setScissor=function(x,P,H,F){x.isVector4?Zt.set(x.x,x.y,x.z,x.w):Zt.set(x,P,H,F),dt.scissor(bt.copy(Zt).multiplyScalar(ie()).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(x){dt.setScissorTest($t=x)},this.setOpaqueSort=function(x){Dt=x},this.setTransparentSort=function(x){pe=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,H=!0){let F=0;if(x){let B=!1;if(et!==null){let pt=et.texture.format;B=m.has(pt)}if(B){let pt=et.texture.type,Et=p.has(pt),mt=R.getClearColor(),Mt=R.getClearAlpha(),Rt=mt.r,Vt=mt.g,jt=mt.b;Et?(S[0]=Rt,S[1]=Vt,S[2]=jt,S[3]=Mt,L.clearBufferuiv(L.COLOR,0,S)):(E[0]=Rt,E[1]=Vt,E[2]=jt,E[3]=Mt,L.clearBufferiv(L.COLOR,0,E))}else F|=L.COLOR_BUFFER_BIT}P&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),R.dispose(),ft.dispose(),Y.dispose(),Bt.dispose(),Nt.dispose(),w.dispose(),nt.dispose(),z.dispose(),lt.dispose(),It.dispose(),K.dispose(),it.dispose(),it.removeEventListener("sessionstart",_l),it.removeEventListener("sessionend",xl),ci.stop()};function Pt(x){x.preventDefault(),B0("WebGLRenderer: Context Lost."),D=!0}function Wt(){B0("WebGLRenderer: Context Restored."),D=!1;let x=xe.autoReset,P=ht.enabled,H=ht.autoUpdate,F=ht.needsUpdate,B=ht.type;Xt(),xe.autoReset=x,ht.enabled=P,ht.autoUpdate=H,ht.needsUpdate=F,ht.type=B}function xt(x){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function le(x){let P=x.target;P.removeEventListener("dispose",le),Te(P)}function Te(x){Vn(x),Nt.remove(x)}function Vn(x){let P=Nt.get(x).programs;P!==void 0&&(P.forEach(function(H){K.releaseProgram(H)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,H,F,B,pt){P===null&&(P=Kt);let Et=B.isMesh&&B.matrixWorld.determinantAffine()<0,mt=Jh(x,P,H,F,B);dt.setMaterial(F,Et);let Mt=H.index,Rt=1;if(F.wireframe===!0){if(Mt=z.getWireframeAttribute(H),Mt===void 0)return;Rt=2}let Vt=H.drawRange,jt=H.attributes.position,Tt=Vt.start*Rt,te=(Vt.start+Vt.count)*Rt;pt!==null&&(Tt=Math.max(Tt,pt.start*Rt),te=Math.min(te,(pt.start+pt.count)*Rt)),Mt!==null?(Tt=Math.max(Tt,0),te=Math.min(te,Mt.count)):jt!=null&&(Tt=Math.max(Tt,0),te=Math.min(te,jt.count));let Se=te-Tt;if(Se<0||Se===1/0)return;lt.setup(B,F,mt,H,Mt);let de,ue=q;if(Mt!==null&&(de=_.get(Mt),ue=ut,ue.setIndex(de)),B.isMesh)F.wireframe===!0?(dt.setLineWidth(F.wireframeLinewidth*ie()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(B.isLine){let Ue=F.linewidth;Ue===void 0&&(Ue=1),dt.setLineWidth(Ue*ie()),B.isLineSegments?ue.setMode(L.LINES):B.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else B.isPoints?ue.setMode(L.POINTS):B.isSprite&&ue.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))ue.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ue=B._multiDrawStarts,At=B._multiDrawCounts,ke=B._multiDrawCount,re=Mt?_.get(Mt).bytesPerElement:1,hi=Nt.get(F).currentProgram.getUniforms();for(let Fe=0;Fe<ke;Fe++)hi.setValue(L,"_gl_DrawID",Fe),ue.render(Ue[Fe]/re,At[Fe])}else if(B.isInstancedMesh)ue.renderInstances(Tt,Se,B.count);else if(H.isInstancedBufferGeometry){let Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,Ue);ue.renderInstances(Tt,Se,At)}else ue.render(Tt,Se)};function vl(x,P,H,F){O!==null&&x.isNodeMaterial&&O.setObject(F,x),at===!0&&J.setState(x,H,!1),x.transparent===!0&&x.side===sn&&x.forceSinglePass===!1?(x.side=Ne,x.needsUpdate=!0,ls(x,P,F),x.side=si,x.needsUpdate=!0,ls(x,P,F),x.side=sn):ls(x,P,F)}this.compile=function(x,P,H=null){H===null&&(H=x),O!==null&&O.renderStart(x,P,H),T=Y.get(H),T.init(P),b.push(T),H.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),x!==H&&x.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),St=this.localClippingEnabled,at=J.init(this.clippingPlanes,St),at===!0&&J.setGlobalState(this.clippingPlanes,P),O!==null&&ht.render(T.state.shadowsArray,H,P);let F=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let pt=B.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){let mt=pt[Et];vl(mt,H,P,B),F.add(mt)}else vl(pt,H,P,B),F.add(pt)}),T=b.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(x,P,H=null){let F=this.compile(x,P,H);return new Promise(B=>{function pt(){if(F.forEach(function(Et){let Mt=Nt.get(Et).currentProgram;(Mt===void 0||Mt.isReady())&&F.delete(Et)}),F.size===0){B(x);return}setTimeout(pt,10)}Jt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Io=null;function Zh(x){Io&&Io(x)}function _l(){ci.stop()}function xl(){ci.start()}let ci=new vh;ci.setAnimationLoop(Zh),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(x){Io=x,it.setAnimationLoop(x),x===null?ci.stop():ci.start()},it.addEventListener("sessionstart",_l),it.addEventListener("sessionend",xl),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(x,P);let H=it.enabled===!0&&it.isPresenting===!0,F=U!==null&&(et===null||H)&&U.begin(I,et);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(P),P=it.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,P,et),T=Y.get(x,b.length),T.init(P),T.state.textureUnits=Bt.getTextureUnits(),b.push(T),gt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?ct.setFromArrayCamera(P):j.setFromProjectionMatrix(gt,en,P.reversedDepth),St=this.localClippingEnabled,at=J.init(this.clippingPlanes,St),A=ft.get(x,v.length),A.init(),v.push(A),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Et=I.xr.getDepthSensingMesh();Et!==null&&Po(Et,P,-1/0,I.sortObjects)}Po(x,P,0,I.sortObjects),A.finish(),O!==null&&O.updateLights(T.state.lightsArray),I.sortObjects===!0&&A.sort(Dt,pe),Qt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Qt&&R.addToRenderList(A,x),this.info.autoReset===!0&&this.info.reset(),at===!0&&J.beginShadows();let B=T.state.shadowsArray;if(ht.render(B,x,P),at===!0&&J.endShadows(),(F&&U.hasRenderPass())===!1){let Et=A.opaque,mt=A.transmissive;if(T.setupLights(),P.isArrayCamera){let Mt=P.cameras;if(mt.length>0)for(let Rt=0,Vt=Mt.length;Rt<Vt;Rt++){let jt=Mt[Rt];Ml(Et,mt,x,jt)}Qt&&R.render(x);for(let Rt=0,Vt=Mt.length;Rt<Vt;Rt++){let jt=Mt[Rt];yl(A,x,jt,jt.viewport)}}else mt.length>0&&Ml(Et,mt,x,P),Qt&&R.render(x),yl(A,x,P)}et!==null&&V===0&&(Bt.updateMultisampleRenderTarget(et),Bt.updateRenderTargetMipmap(et)),F&&U.end(I),x.isScene===!0&&x.onAfterRender(I,x,P),lt.resetDefaultState(),W=-1,Q=null,b.pop(),b.length>0?(T=b[b.length-1],Bt.setTextureUnits(T.state.textureUnits),at===!0&&J.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,O!==null&&O.renderEnd()};function Po(x,P,H,F){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){let Et=P.isArrayCamera?ct:j;if(!x.frustumCulled||x.intersectsFrustum(Et)){F&&Ct.setFromMatrixPosition(x.matrixWorld).applyMatrix4(gt);let mt=nt.update(x),Mt=x.material;Mt.visible&&A.push(x,mt,Mt,H,Ct.z,null,P)}}else if(x.isMesh||x.isLine||x.isPoints){let Et=P.isArrayCamera?ct:j;if(!x.frustumCulled||x.intersectsFrustum(Et)){let mt=nt.update(x),Mt=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ct.copy(x.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ct.copy(mt.boundingSphere.center)),Ct.applyMatrix4(x.matrixWorld).applyMatrix4(gt)),Array.isArray(Mt)){let Rt=mt.groups;for(let Vt=0,jt=Rt.length;Vt<jt;Vt++){let Tt=Rt[Vt],te=Mt[Tt.materialIndex];te&&te.visible&&A.push(x,mt,te,H,Ct.z,Tt,P)}}else Mt.visible&&A.push(x,mt,Mt,H,Ct.z,null,P)}}}let pt=x.children;for(let Et=0,mt=pt.length;Et<mt;Et++)Po(pt[Et],P,H,F)}function yl(x,P,H,F){let{opaque:B,transmissive:pt,transparent:Et}=x;T.setupLightsView(H),at===!0&&J.setGlobalState(I.clippingPlanes,H),F&&dt.viewport(tt.copy(F)),B.length>0&&vr(B,P,H),pt.length>0&&vr(pt,P,H),Et.length>0&&vr(Et,P,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Ml(x,P,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){let Tt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new Je(1,1,{generateMipmaps:!0,type:Tt?fn:qe,minFilter:On,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let pt=T.state.transmissionRenderTarget[F.id],Et=F.viewport||tt;pt.setSize(Et.z*I.transmissionResolutionScale,Et.w*I.transmissionResolutionScale);let mt=I.getRenderTarget(),Mt=I.getActiveCubeFace(),Rt=I.getActiveMipmapLevel();I.setRenderTarget(pt),I.getClearColor(Z),vt=I.getClearAlpha(),vt<1&&I.setClearColor(16777215,.5),I.clear(),Qt&&R.render(H);let Vt=I.toneMapping;I.toneMapping=bn;let jt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),at===!0&&J.setGlobalState(I.clippingPlanes,F),vr(x,H,F),Bt.updateMultisampleRenderTarget(pt),Bt.updateRenderTargetMipmap(pt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let te=0,Se=P.length;te<Se;te++){let de=P[te],{object:ue,geometry:Ue,material:At,group:ke}=de;if(At.side===sn&&ue.layers.test(F.layers)){let re=At.side;At.side=Ne,At.needsUpdate=!0,Sl(ue,H,F,Ue,At,ke),At.side=re,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(Bt.updateMultisampleRenderTarget(pt),Bt.updateRenderTargetMipmap(pt))}I.setRenderTarget(mt,Mt,Rt),I.setClearColor(Z,vt),jt!==void 0&&(F.viewport=jt),I.toneMapping=Vt}function vr(x,P,H){let F=P.isScene===!0?P.overrideMaterial:null;for(let B=0,pt=x.length;B<pt;B++){let Et=x[B],{object:mt,geometry:Mt,group:Rt}=Et,Vt=Et.material;Vt.allowOverride===!0&&F!==null&&(Vt=F),mt.layers.test(H.layers)&&Sl(mt,P,H,Mt,Vt,Rt)}}function Sl(x,P,H,F,B,pt){O!==null&&B.isNodeMaterial&&O.setObject(x,B),x.onBeforeRender(I,P,H,F,B,pt),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(I,P,H,F,x,pt),B.transparent===!0&&B.side===sn&&B.forceSinglePass===!1?(B.side=Ne,B.needsUpdate=!0,I.renderBufferDirect(H,P,F,B,x,pt),B.side=si,B.needsUpdate=!0,I.renderBufferDirect(H,P,F,B,x,pt),B.side=sn):I.renderBufferDirect(H,P,F,B,x,pt),x.onAfterRender(I,P,H,F,B,pt)}function bl(x){let P=0;for(let H of x)H.texture!==null&&P++;return P}function ls(x,P,H){P.isScene!==!0&&(P=Kt);let F=Nt.get(x),B=T.state.lights,pt=T.state.shadowsArray,Et=B.state.version,mt=K.getParameters(x,B.state,pt,P,H,T.state.lightProbeGridArray),Mt=K.getProgramCacheKey(mt),Rt=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let Vt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=w.get(x.envMap||F.environment,Vt),F.envMapRotation=F.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",le),Rt=new Map,F.programs=Rt,F.programVariants=new Map);let jt=Rt.get(Mt);if(jt!==void 0){if(F.currentProgram===jt&&F.lightsStateVersion===Et)return El(x,mt),jt}else mt.uniforms=K.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,H,mt),x.onBeforeCompile(mt,I),jt=K.acquireProgram(mt,Mt),Rt.set(Mt,jt),F.uniforms=mt.uniforms;let Tt=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Tt.clippingPlanes=J.uniform),El(x,mt),F.needsLights=Kh(x),F.lightsStateVersion=Et,F.needsLights&&(Tt.ambientLightColor.value=B.state.ambient,Tt.lightProbe.value=B.state.probe,Tt.sunLights.value=B.state.sun,Tt.sunLightShadows.value=B.state.sunShadow,Tt.directionalLights.value=B.state.directional,Tt.directionalLightShadows.value=B.state.directionalShadow,Tt.spotLights.value=B.state.spot,Tt.spotLightShadows.value=B.state.spotShadow,Tt.rectAreaLights.value=B.state.rectArea,Tt.ltc_1.value=B.state.rectAreaLTC1,Tt.ltc_2.value=B.state.rectAreaLTC2,Tt.pointLights.value=B.state.point,Tt.pointLightShadows.value=B.state.pointShadow,Tt.hemisphereLights.value=B.state.hemi,Tt.sunShadowMatrix.value=B.state.sunShadowMatrix,Tt.sunShadowCascade.value=B.state.sunShadowCascade,Tt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Tt.spotLightMatrix.value=B.state.spotLightMatrix,Tt.spotLightMap.value=B.state.spotLightMap,Tt.pointShadowMatrix.value=B.state.pointShadowMatrix),F.numLightProbeGrids=bl(T.state.lightProbeGridArray),F.currentProgram=jt,F.uniformsList=null,jt}function Yh(x,P,H,F,B){let pt=Nt.get(x),Et=pt.currentProgram.id+","+F+","+B,mt=pt.programVariants.get(Et);return mt===void 0?(mt=ls(x,P,H),pt.programVariants.set(Et,mt)):(pt.currentProgram=mt,pt.uniformsList=null,pt.outputColorSpace=F,pt.toneMapping=B),mt}function wl(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=ss.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function El(x,P){let H=Nt.get(x);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Jh(x,P,H,F,B){P.isScene!==!0&&(P=Kt),Bt.resetTextureUnits();let pt=P.fog,Et=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,mt=et===null?I.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ee.workingColorSpace,Mt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Rt=w.get(F.envMap||Et,Mt),Vt=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,jt=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Tt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,Se=!!H.morphAttributes.color,de=bn;F.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(de=I.toneMapping);let ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ue=ue!==void 0?ue.length:0,At=Nt.get(F),ke=T.state.lights;if(at===!0&&(St===!0||x!==Q)){let ve=x===Q&&F.id===W;J.setState(F,x,ve)}let re=!1,hi=!1;F.version===At.__version?At.needsLights&&At.lightsStateVersion!==ke.state.version||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==Rt||F.fog===!0&&At.fog!==pt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==J.numPlanes||At.numIntersection!==J.numIntersection)||At.vertexAlphas!==Vt||At.vertexTangents!==jt||At.morphTargets!==Tt||At.morphNormals!==te||At.morphColors!==Se||At.morphTargetsCount!==Ue||At.numLightProbeGrids!==bl(T.state.lightProbeGridArray)?re=!0:(At.outputColorSpace!==mt||At.toneMapping!==de)&&(hi=!0):(re=!0,At.__version=F.version);let Fe=At.currentProgram;(re===!0||hi===!0)&&(Fe=hi===!0?Yh(F,P,B,mt,de):ls(F,P,B),O&&F.isNodeMaterial&&O.onUpdateProgram(F,Fe,At));let _r=!1,Hn=!1,ui=!1,ne=Fe.getUniforms(),Pe=At.uniforms;if(dt.useProgram(Fe.program)&&(_r=!0,Hn=!0,ui=!0),F.id!==W&&(W=F.id,Hn=!0),_r||Q!==x){dt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ne.setValue(L,"projectionMatrix",x.projectionMatrix),ne.setValue(L,"viewMatrix",x.matrixWorldInverse);let Ae=ne.map.cameraPosition;Ae!==void 0&&Ae.setValue(L,Ht.setFromMatrixPosition(x.matrixWorld)),he.logarithmicDepthBuffer&&ne.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ne.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,Hn=!0,ui=!0)}if(At.needsLights&&(ke.state.sunShadowMap.length>0&&ne.setValue(L,"sunShadowMap",ke.state.sunShadowMap,Bt),ke.state.directionalShadowMap.length>0&&ne.setValue(L,"directionalShadowMap",ke.state.directionalShadowMap,Bt),ke.state.spotShadowMap.length>0&&ne.setValue(L,"spotShadowMap",ke.state.spotShadowMap,Bt),ke.state.pointShadowMap.length>0&&ne.setValue(L,"pointShadowMap",ke.state.pointShadowMap,Bt)),B.isSkinnedMesh){ne.setOptional(L,B,"bindMatrix"),ne.setOptional(L,B,"bindMatrixInverse");let ve=B.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ne.setValue(L,"boneTexture",ve.boneTexture,Bt))}B.isBatchedMesh&&(ne.setOptional(L,B,"batchingTexture"),ne.setValue(L,"batchingTexture",B._matricesTexture,Bt),ne.setOptional(L,B,"batchingIdTexture"),ne.setValue(L,"batchingIdTexture",B._indirectTexture,Bt),ne.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ne.setValue(L,"batchingColorTexture",B._colorsTexture,Bt));let an=H.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&$.update(B,H,Fe),(Hn||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,ne.setValue(L,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(Pe.envMapIntensity.value=P.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=Z2()),Hn){if(ne.setValue(L,"toneMappingExposure",I.toneMappingExposure),At.needsLights&&$h(Pe,ui),pt&&F.fog===!0&&ot.refreshFogUniforms(Pe,pt),ot.refreshMaterialUniforms(Pe,F,_t,Lt,T.state.transmissionRenderTarget[x.id]),At.needsLights&&At.numLightProbeGrids>0){let ve=y,Ae=0;for(let Rn of T.state.lightProbeGridArray)Rn.texture!==null&&(ve.textures[Ae]=Rn.texture,ve.min[Ae]=Rn.boundingBox.min,ve.max[Ae]=Rn.boundingBox.max,ve.resolution[Ae]=Rn.resolution,Ae++);for(let Rn in ve)ve[Rn].length=Ae;Pe.probesSH.value=ve.textures,Pe.probesMin.value=ve.min,Pe.probesMax.value=ve.max,Pe.probesResolution.value=ve.resolution}ss.upload(L,wl(At),Pe,Bt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ss.upload(L,wl(At),Pe,Bt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ne.setValue(L,"center",B.center),ne.setValue(L,"modelViewMatrix",B.modelViewMatrix),ne.setValue(L,"normalMatrix",B.normalMatrix),ne.setValue(L,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let ve=F.uniformsGroups;for(let Ae=0,Rn=ve.length;Ae<Rn;Ae++){let Al=ve[Ae];It.update(Al,Fe),It.bind(Al,Fe)}}return Fe}function $h(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Kh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(x,P,H){let F=Nt.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Nt.get(x.texture).__webglTexture=P,Nt.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let H=Nt.get(x);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,H=0){et=x,X=P,V=H;let F=null,B=!1,pt=!1;if(x){let mt=Nt.get(x);if(mt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(L.FRAMEBUFFER,mt.__webglFramebuffer),tt.copy(x.viewport),bt.copy(x.scissor),Ut=x.scissorTest,dt.viewport(tt),dt.scissor(bt),dt.setScissorTest(Ut),W=-1;return}else if(mt.__webglFramebuffer===void 0)Bt.setupRenderTarget(x);else if(mt.__hasExternalTextures)Bt.rebindTextures(x,Nt.get(x.texture).__webglTexture,Nt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Vt=x.depthTexture;if(mt.__boundDepthTexture!==Vt){if(Vt!==null&&Nt.has(Vt)&&(x.width!==Vt.image.width||x.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(x)}}let Mt=x.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);let Rt=Nt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Rt[P])?F=Rt[P][H]:F=Rt[P],B=!0):x.samples>0&&Bt.useMultisampledRTT(x)===!1?F=Nt.get(x).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[H]:F=Rt,tt.copy(x.viewport),bt.copy(x.scissor),Ut=x.scissorTest}else tt.copy(Ft).multiplyScalar(_t).floor(),bt.copy(Zt).multiplyScalar(_t).floor(),Ut=$t;if(H!==0&&(F=G),dt.bindFramebuffer(L.FRAMEBUFFER,F)&&dt.drawBuffers(x,F),dt.viewport(tt),dt.scissor(bt),dt.setScissorTest(Ut),B){let mt=Nt.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,H)}else if(pt){let mt=P;for(let Mt=0;Mt<x.textures.length;Mt++){let Rt=Nt.get(x.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,Rt.__webglTexture,H,mt)}}else if(x!==null&&H!==0){let mt=Nt.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,H)}W=-1};function Tl(x){let P=Nt.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=he.textureFormatReadable(x.format),P.__typeReadable=he.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,H,F,B,pt,Et,mt=0){if(!(x&&x.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){dt.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let Rt=x.textures[mt],Vt=Rt.format,jt=Rt.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt);let Tt=Tl(Rt);if(Tt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-F&&H>=0&&H<=x.height-B&&L.readPixels(P,H,F,B,st.convert(Vt),st.convert(jt),pt)}finally{let Rt=et!==null?Nt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(x,P,H,F,B,pt,Et,mt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(P>=0&&P<=x.width-F&&H>=0&&H<=x.height-B){dt.bindFramebuffer(L.FRAMEBUFFER,Mt);let Rt=x.textures[mt],Vt=Rt.format,jt=Rt.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt);let Tt=Tl(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),L.readPixels(P,H,F,B,st.convert(Vt),st.convert(jt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Se=et!==null?Nt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,Se);let de=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bc(L,de,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(te),L.deleteSync(de),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,H=0){let F=Math.pow(2,-H),B=Math.floor(x.image.width*F),pt=Math.floor(x.image.height*F),Et=P!==null?P.x:0,mt=P!==null?P.y:0;Bt.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,Et,mt,B,pt),dt.unbindTexture()},this.copyTextureToTexture=function(x,P,H=null,F=null,B=0,pt=0){let Et,mt,Mt,Rt,Vt,jt,Tt,te,Se,de=x.isCompressedTexture?x.mipmaps[pt]:x.image;if(H!==null)Et=H.max.x-H.min.x,mt=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Vt=H.min.y,jt=H.isBox3?H.min.z:0;else{let ne=Math.pow(2,-B);Et=Math.floor(x.width*ne),mt=Math.floor(x.height*ne),x.isDataArrayTexture?Mt=de.depth:x.isData3DTexture?Mt=Math.floor(de.depth*ne):Mt=1,Rt=0,Vt=0,jt=0}F!==null?(Tt=F.x,te=F.y,Se=F.z):(Tt=0,te=0,Se=0);let ue=st.convert(P.format),Ue=st.convert(P.type),At;P.isData3DTexture?(Bt.setTexture3D(P,0),At=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Bt.setTexture2DArray(P,0),At=L.TEXTURE_2D_ARRAY):(Bt.setTexture2D(P,0),At=L.TEXTURE_2D),dt.activeTexture(L.TEXTURE0),dt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),dt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),dt.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let ke=dt.getParameter(L.UNPACK_ROW_LENGTH),re=dt.getParameter(L.UNPACK_IMAGE_HEIGHT),hi=dt.getParameter(L.UNPACK_SKIP_PIXELS),Fe=dt.getParameter(L.UNPACK_SKIP_ROWS),_r=dt.getParameter(L.UNPACK_SKIP_IMAGES);dt.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),dt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),dt.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),dt.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),dt.pixelStorei(L.UNPACK_SKIP_IMAGES,jt);let Hn=x.isDataArrayTexture||x.isData3DTexture,ui=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let ne=Nt.get(x),Pe=Nt.get(P),an=Nt.get(ne.__renderTarget),ve=Nt.get(Pe.__renderTarget);dt.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ae=0;Ae<Mt;Ae++)Hn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.get(x).__webglTexture,B,jt+Ae),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.get(P).__webglTexture,pt,Se+Ae)),L.blitFramebuffer(Rt,Vt,Rt+Et,Vt+mt,Tt,te,Tt+Et,te+mt,L.DEPTH_BUFFER_BIT,L.NEAREST);dt.bindFramebuffer(L.READ_FRAMEBUFFER,null),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Nt.has(x)){let ne=Nt.get(x),Pe=Nt.get(P);dt.bindFramebuffer(L.READ_FRAMEBUFFER,C),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let an=0;an<Mt;an++)Hn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ne.__webglTexture,B,jt+an):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ne.__webglTexture,B),ui?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,pt,Se+an):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,pt),B!==0?L.blitFramebuffer(Rt,Vt,Rt+Et,Vt+mt,Tt,te,Tt+Et,te+mt,L.COLOR_BUFFER_BIT,L.NEAREST):ui?L.copyTexSubImage3D(At,pt,Tt,te,Se+an,Rt,Vt,Et,mt):L.copyTexSubImage2D(At,pt,Tt,te,Rt,Vt,Et,mt);dt.bindFramebuffer(L.READ_FRAMEBUFFER,null),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ui?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(At,pt,Tt,te,Se,Et,mt,Mt,ue,Ue,de.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(At,pt,Tt,te,Se,de.width,de.height,Mt,ue,de.data):L.texSubImage3D(At,pt,Tt,te,Se,Et,mt,Mt,ue,Ue,de):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,Tt,te,Et,mt,ue,Ue,de.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,Tt,te,de.width,de.height,ue,de.data):L.texSubImage2D(L.TEXTURE_2D,pt,Tt,te,Et,mt,ue,Ue,de);dt.pixelStorei(L.UNPACK_ROW_LENGTH,ke),dt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),dt.pixelStorei(L.UNPACK_SKIP_PIXELS,hi),dt.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),dt.pixelStorei(L.UNPACK_SKIP_IMAGES,_r),pt===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&L.generateMipmap(At),dt.unbindTexture()},this.initRenderTarget=function(x){Nt.get(x).__webglFramebuffer===void 0&&Bt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Bt.setTextureCube(x,0):x.isData3DTexture?Bt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Bt.setTexture2DArray(x,0):Bt.setTexture2D(x,0),dt.unbindTexture()},this.resetState=function(){X=0,V=0,et=null,dt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var So=class extends Jn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Qn;t.deleteAttribute("uv");let e=new Qe({side:Ne}),n=new Qe,s=new xi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new se(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Rs(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new se(t,os(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new se(t,os(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new se(t,os(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new se(t,os(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new se(t,os(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new se(t,os(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function os(i){return new qs({color:0,emissive:16777215,emissiveIntensity:i})}var Tn=i=>`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Ge=[{code:"am",name:"Armenia",official:"Republic of Armenia",font:"'Marcellus', serif",weight:400,tracking:"0.01em",theme:{bg:"#EFA13A",ink:"#1A1A3A",accent:"#D90012",deep:"#0033A0",side:"#A8620F"},pose:{tilt:34,yaw:-24,roll:-4,light:40},status:"Full member",capital:"Yerevan",population:3e6,area:29743,gdp:319e8,currency:"Dram (AMD)",languages:"Armenian",independence:"21 September 1991",fact:"First state to adopt Christianity, in 301 AD",text:"A mountainous country in the South Caucasus with no coastline and an average elevation of about 1,800 metres. Its economy leans on services, a fast-growing technology sector, mining and brandy.",leader:{name:"Vahagn Khachaturyan",since:"since March 2022",note:"Head of state. The prime minister leads the government."},symbol:{label:"Pomegranate, a sign of life and abundance",svg:Tn('<circle cx="32" cy="37" r="18"/><path d="M25 20l-2-9 6 4 3-6 3 6 6-4-2 9"/><path d="M26 34a7 7 0 0 1 6-5"/>')}},{code:"az",name:"Azerbaijan",official:"Republic of Azerbaijan",font:"'Unbounded', sans-serif",weight:700,tracking:"-0.03em",theme:{bg:"#0D2B52",ink:"#EAF6FF",accent:"#19C2E8",deep:"#0D2B52",side:"#0A84A8"},pose:{tilt:48,yaw:28,roll:5,light:150},status:"Full member",capital:"Baku",population:102e5,area:86600,gdp:784e8,currency:"Manat (AZN)",languages:"Azerbaijani",independence:"18 October 1991",fact:"Baku lies 28 metres below sea level",text:"The largest country of the South Caucasus, on the western shore of the Caspian Sea. Oil and natural gas drive most of its exports, and natural gas fires have burned on its hillsides for centuries.",leader:{name:"Ilham Aliyev",since:"since October 2003"},symbol:{label:"Flame, for the \u201CLand of Fire\u201D",svg:Tn('<path d="M32 6c2 10 14 16 14 30a14 14 0 0 1-28 0c0-7 4-10 6-16 3 3 4 6 4 9 3-6 4-14 4-23z"/><path d="M32 54a7 7 0 0 1-7-7c0-5 5-7 7-12 2 5 7 7 7 12a7 7 0 0 1-7 7z"/>')}},{code:"by",name:"Belarus",official:"Republic of Belarus",font:"'Yeseva One', serif",weight:400,tracking:"0em",theme:{bg:"#2F9E4F",ink:"#FFFFFF",accent:"#D22730",deep:"#1E6B36",side:"#17602D"},pose:{tilt:26,yaw:18,roll:-6,light:60},status:"Full member",capital:"Minsk",population:91e5,area:207600,gdp:1e11,currency:"Ruble (BYN)",languages:"Belarusian, Russian",independence:"25 August 1991",fact:"Forests cover about 40% of the land",text:"A flat, forested country between Poland and Russia, dotted with around 11,000 lakes. Machinery, potash fertiliser, refined oil and food products make up the bulk of its industry. The CIS has its headquarters in Minsk.",leader:{name:"Alexander Lukashenko",since:"since July 1994"},symbol:{label:"Woven ornament from the national flag",svg:Tn('<path d="M32 6l26 26-26 26L6 32z"/><path d="M32 20l12 12-12 12-12-12z"/><path d="M32 28l4 4-4 4-4-4z"/><path d="M14 14l4 4M50 14l-4 4M14 50l4-4M50 50l-4-4"/>')}},{code:"kz",name:"Kazakhstan",official:"Republic of Kazakhstan",font:"'Syne', sans-serif",weight:800,tracking:"-0.04em",theme:{bg:"#00A9C4",ink:"#06343C",accent:"#FFD23F",deep:"#00707F",side:"#006B7D"},pose:{tilt:52,yaw:-30,roll:6,light:120},status:"Full member",capital:"Astana",population:206e5,area:2724900,gdp:36e10,currency:"Tenge (KZT)",languages:"Kazakh, Russian",independence:"16 December 1991",fact:"The largest landlocked country on Earth",text:"The ninth-largest country in the world, stretching from the Caspian Sea to the Altai mountains across steppe and desert. It is Central Asia\u2019s biggest economy, built on oil, uranium, metals and grain.",leader:{name:"Kassym-Jomart Tokayev",since:"since March 2019"},symbol:{label:"Shanyrak, the crown of the yurt",svg:Tn('<circle cx="32" cy="32" r="24"/><path d="M12 22c12 6 28 6 40 0M12 42c12-6 28-6 40 0M22 12c6 12 6 28 0 40M42 12c-6 12-6 28 0 40"/><path d="M8 32h48M32 8v48"/>')}},{code:"kg",name:"Kyrgyzstan",official:"Kyrgyz Republic",font:"'Bowlby One', sans-serif",weight:400,tracking:"0em",theme:{bg:"#D81E32",ink:"#FFE34D",accent:"#FFE34D",deep:"#A8101F",side:"#8F0F1E"},pose:{tilt:40,yaw:22,roll:-7,light:30},status:"Full member",capital:"Bishkek",population:73e5,area:199951,gdp:267e8,currency:"Som (KGS)",languages:"Kyrgyz, Russian",independence:"31 August 1991",fact:"Over 90% of the land is mountains",text:"A high country of the Tian Shan, home to Issyk-Kul, one of the world\u2019s largest alpine lakes. Gold mining, farming, hydropower and money sent home by workers abroad shape its economy.",leader:{name:"Sadyr Japarov",since:"since January 2021"},symbol:{label:"Tunduk and sun, as on the flag",svg:Tn('<circle cx="32" cy="32" r="13"/><path d="M22 26c6 3 14 3 20 0M22 38c6-3 14-3 20 0M26 22c3 6 3 14 0 20M38 22c-3 6-3 14 0 20"/><path d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M52 12l-6 6M18 46l-6 6"/>')}},{code:"md",name:"Moldova",official:"Republic of Moldova",font:"'DM Serif Display', serif",weight:400,italic:!0,tracking:"-0.01em",theme:{bg:"#FFD21F",ink:"#0A3A8C",accent:"#CC092F",deep:"#0A3A8C",side:"#C79A00"},pose:{tilt:22,yaw:-20,roll:7,light:140},status:"Leaving the CIS on 8 April 2027",capital:"Chi\u0219in\u0103u",population:24e5,area:33846,gdp:22e9,currency:"Leu (MDL)",languages:"Romanian",independence:"27 August 1991",fact:"Mile\u0219tii Mici holds the world\u2019s largest wine cellar",text:"A small, hilly country between Romania and Ukraine with some of Europe\u2019s most fertile black soil. Wine, fruit and sunflower oil are its signature exports. It is a candidate for European Union membership.",leader:{name:"Maia Sandu",since:"since December 2020"},symbol:{label:"Grapes, for a country of vineyards",svg:Tn('<circle cx="22" cy="28" r="6"/><circle cx="34" cy="28" r="6"/><circle cx="46" cy="28" r="6"/><circle cx="28" cy="39" r="6"/><circle cx="40" cy="39" r="6"/><circle cx="34" cy="50" r="6"/><path d="M34 22V8M34 12c4-6 10-6 14-4-2 6-8 8-14 4z"/>')}},{code:"ru",name:"Russia",official:"Russian Federation",font:"'Russo One', sans-serif",weight:400,tracking:"0.01em",theme:{bg:"#E6EBF2",ink:"#0B2E6F",accent:"#D52B1E",deep:"#0B2E6F",side:"#93A0B5"},pose:{tilt:56,yaw:14,roll:-3,light:75},status:"Full member",capital:"Moscow",population:146e6,area:17098246,gdp:266e10,currency:"Ruble (RUB)",languages:"Russian",independence:"12 June 1990 (sovereignty declared)",fact:"Spans 11 time zones",text:"The largest country in the world, covering more than a tenth of all land and reaching from the Baltic to the Pacific. It is a leading exporter of oil, natural gas, wheat and metals.",leader:{name:"Vladimir Putin",since:"since May 2012, also 2000\u20132008"},symbol:{label:"Matryoshka, the nesting doll",svg:Tn('<path d="M32 5c-8 0-13 6-13 13 0 5 2 8 2 8-5 5-8 12-8 19 0 8 7 14 19 14s19-6 19-14c0-7-3-14-8-19 0 0 2-3 2-8 0-7-5-13-13-13z"/><circle cx="32" cy="19" r="7"/><path d="M24 40c3-4 13-4 16 0-1 7-4 10-8 10s-7-3-8-10z"/>')}},{code:"tj",name:"Tajikistan",official:"Republic of Tajikistan",font:"'Gloock', serif",weight:400,tracking:"-0.01em",theme:{bg:"#F2EBDA",ink:"#0D5C2B",accent:"#C8102E",deep:"#0D5C2B",side:"#B3A683"},pose:{tilt:30,yaw:-16,roll:8,light:110},status:"Full member",capital:"Dushanbe",population:107e5,area:142600,gdp:211e8,currency:"Somoni (TJS)",languages:"Tajik",independence:"9 September 1991",fact:"Ismoil Somoni Peak rises to 7,495 m",text:"The smallest and highest country of Central Asia, where the Pamirs put more than half the land above 3,000 metres. Aluminium, cotton, hydropower and remittances carry the economy.",leader:{name:"Emomali Rahmon",since:"head of state since November 1992"},symbol:{label:"Crown and seven stars, as on the flag",svg:Tn('<path d="M14 54h36M16 54c0-14 6-20 16-22 10 2 16 8 16 22M26 54c0-9 2-15 6-22 4 7 6 13 6 22"/><path d="M32 6v4M19 10l1 4M45 10l-1 4M10 19l3 3M54 19l-3 3M6 31l4 1M58 31l-4 1" stroke-width="4"/>')}},{code:"tm",name:"Turkmenistan",official:"Turkmenistan",font:"'Cinzel', serif",weight:800,tracking:"0.02em",theme:{bg:"#0A4A32",ink:"#F3E7C4",accent:"#E0343C",deep:"#0A4A32",side:"#C9B77A"},pose:{tilt:44,yaw:32,roll:4,light:20},status:"Associate member since 2005",capital:"Ashgabat",population:71e5,populationNote:"official census figure",area:491210,gdp:83e9,currency:"Manat (TMT)",languages:"Turkmen",independence:"27 October 1991",fact:"The Karakum desert covers about 70% of the land",text:"A desert country on the eastern shore of the Caspian Sea, recognised by the UN as permanently neutral since 1995. It holds some of the largest natural gas reserves in the world and is known for carpets and Akhal-Teke horses.",leader:{name:"Serdar Berdimuhamedow",since:"since March 2022"},symbol:{label:"G\xF6l, the medallion of Turkmen carpets",svg:Tn('<path d="M22 6h20l16 16v20L42 58H22L6 42V22z"/><path d="M32 16l16 16-16 16-16-16z"/><path d="M32 16v32M16 32h32"/><path d="M32 26l6 6-6 6-6-6z"/>')}},{code:"uz",name:"Uzbekistan",official:"Republic of Uzbekistan",font:"'Rakkas', serif",weight:400,tracking:"0em",theme:{bg:"#1E50B5",ink:"#FFFFFF",accent:"#37D0C0",deep:"#1E3F94",side:"#12357E"},pose:{tilt:38,yaw:-16,roll:-5,light:95},status:"Full member",capital:"Tashkent",population:39e6,area:448978,gdp:1815e8,currency:"Soum (UZS)",languages:"Uzbek",independence:"1 September 1991",fact:"One of two doubly landlocked countries",text:"The most populous country in Central Asia, and home to the Silk Road cities of Samarkand, Bukhara and Khiva. Gold, cotton, natural gas and a growing car and textile industry lead its economy.",leader:{name:"Shavkat Mirziyoyev",since:"since December 2016"},symbol:{label:"Portal and dome of a Samarkand madrasa",svg:Tn('<path d="M10 58V22h44v36M6 58h52"/><path d="M22 58V42c0-8 5-10 10-14 5 4 10 6 10 14v16"/><path d="M24 22c0-8 3-10 8-15 5 5 8 7 8 15"/><path d="M32 7V3"/>')}}];var Rh={by:{w:2,h:1.6961,cap:[-.0659,.0658],polys:[[[-.9228,-.7321],[-.9319,-.7184],[-.929,-.7185],[-.9348,-.7052],[-.9357,-.6821],[-.9295,-.678],[-.9321,-.6717],[-.9292,-.6699],[-.9315,-.6634],[-.9277,-.6494],[-.9148,-.6391],[-.9119,-.6312],[-.9185,-.6191],[-.912,-.6077],[-.9091,-.5839],[-.898,-.568],[-.9044,-.5362],[-.916,-.5226],[-.9301,-.5208],[-.9353,-.5086],[-.9342,-.5006],[-.9379,-.5039],[-.942,-.4987],[-.9451,-.502],[-.9546,-.499],[-.9533,-.4932],[-.996,-.4762],[-.9943,-.4655],[-1,-.4589],[-.9889,-.4395],[-.9472,-.3858],[-.9084,-.3618],[-.8727,-.3538],[-.8437,-.3364],[-.8348,-.3265],[-.831,-.3119],[-.832,-.2491],[-.8279,-.2398],[-.8283,-.2209],[-.8378,-.1985],[-.8291,-.1698],[-.8379,-.1583],[-.8466,-.1374],[-.856,-.0941],[-.868,-.062],[-.8822,-.0071],[-.8847,.0386],[-.891,.0535],[-.8967,.1078],[-.8687,.0918],[-.8355,.1001],[-.8272,.0969],[-.8081,.1054],[-.7959,.0987],[-.7828,.0981],[-.757,.1065],[-.7453,.0966],[-.7403,.0831],[-.7158,.0793],[-.6838,.1026],[-.6551,.1135],[-.6477,.1029],[-.627,.1058],[-.6233,.1211],[-.63,.1468],[-.6225,.1524],[-.6215,.1609],[-.6049,.1654],[-.5798,.1568],[-.5707,.1579],[-.5529,.1723],[-.5418,.2],[-.5255,.1954],[-.5088,.1957],[-.49,.2127],[-.4717,.1886],[-.4824,.1857],[-.483,.1822],[-.4772,.1764],[-.4862,.1697],[-.4804,.1589],[-.4527,.1524],[-.4449,.1589],[-.4349,.1579],[-.4301,.1613],[-.4277,.1825],[-.424,.1888],[-.4336,.2052],[-.4377,.2049],[-.4419,.2188],[-.4688,.2134],[-.4758,.2199],[-.4752,.2286],[-.4576,.2542],[-.453,.2841],[-.4372,.2951],[-.4303,.3043],[-.43,.3178],[-.4357,.3372],[-.432,.3731],[-.429,.3807],[-.4201,.3861],[-.4186,.4084],[-.4054,.4206],[-.4004,.4318],[-.3928,.4348],[-.3783,.4325],[-.3467,.4408],[-.3289,.4701],[-.3267,.4898],[-.3203,.4995],[-.3113,.5009],[-.2878,.4946],[-.2788,.5005],[-.2537,.4914],[-.242,.5239],[-.2332,.5312],[-.2204,.5344],[-.2133,.5436],[-.2194,.553],[-.2521,.5593],[-.2674,.5566],[-.2821,.5635],[-.2717,.5983],[-.2628,.609],[-.2646,.6287],[-.2518,.6464],[-.2491,.6632],[-.2513,.6807],[-.2471,.6879],[-.2422,.6905],[-.2222,.6857],[-.2065,.6935],[-.191,.7184],[-.175,.7349],[-.1418,.7364],[-.1202,.7205],[-.1032,.7356],[-.0859,.7242],[-.0559,.7225],[-.0455,.767],[-.0262,.7797],[-.019,.7994],[3e-4,.8158],[.0093,.8316],[.0448,.848],[.0836,.8086],[.0988,.8246],[.1274,.828],[.1417,.8249],[.1553,.8039],[.1605,.7805],[.1656,.7761],[.1848,.7731],[.1851,.7812],[.1902,.7866],[.2232,.8036],[.2454,.7998],[.2609,.7883],[.2944,.7784],[.3042,.7645],[.2927,.7549],[.2854,.7225],[.2895,.7103],[.313,.6864],[.3183,.688],[.333,.7066],[.352,.7183],[.3707,.7164],[.3756,.7192],[.3875,.74],[.3948,.7446],[.4105,.7463],[.4337,.7384],[.4516,.7514],[.4656,.7424],[.5046,.7309],[.5075,.7173],[.5287,.7057],[.5312,.6874],[.5504,.6835],[.5607,.6639],[.5663,.6631],[.5811,.6705],[.5887,.6672],[.5944,.6574],[.5963,.6446],[.5928,.6322],[.5969,.63],[.59,.6155],[.5979,.6006],[.5982,.5937],[.578,.5705],[.5752,.5573],[.588,.5467],[.5976,.5258],[.6097,.5161],[.6098,.5098],[.615,.5053],[.6127,.495],[.6209,.4681],[.6025,.4679],[.6014,.4637],[.6078,.4503],[.6044,.4435],[.5843,.4336],[.5873,.4162],[.5764,.3993],[.5775,.3841],[.6207,.358],[.6249,.3462],[.6462,.3461],[.6513,.3367],[.6595,.3305],[.6408,.2848],[.6705,.2708],[.6797,.2465],[.6874,.2366],[.6974,.1961],[.7357,.1683],[.769,.1554],[.7833,.1535],[.7912,.1381],[.8015,.1404],[.8076,.1195],[.8064,.1089],[.8022,.0811],[.7905,.05],[.8171,.0453],[.8641,.0583],[.8767,.0503],[.9028,.0446],[.9204,.0296],[.939,.0281],[.9452,.0156],[.9277,.0026],[.9314,-.0156],[.9407,-.0275],[.9624,-.0385],[.9675,-.0468],[.9795,-.0437],[.9826,-.0452],[.9826,-.0556],[.9937,-.0534],[.998,-.061],[.9966,-.0864],[1,-.0972],[.9962,-.1006],[.9861,-.0985],[.9718,-.1027],[.9755,-.1081],[.9702,-.1117],[.9465,-.1126],[.9472,-.1205],[.9521,-.1212],[.9387,-.1506],[.928,-.1555],[.9116,-.1759],[.9007,-.1763],[.8982,-.1861],[.8881,-.1871],[.8812,-.1928],[.8585,-.1876],[.8422,-.1926],[.8262,-.1858],[.8138,-.1858],[.8042,-.1605],[.7742,-.1541],[.7583,-.16],[.7334,-.1595],[.7259,-.1661],[.7228,-.183],[.7243,-.1985],[.7153,-.2033],[.7013,-.2255],[.7176,-.2376],[.7327,-.2678],[.7464,-.2779],[.7579,-.2802],[.7625,-.2929],[.7706,-.301],[.7737,-.3223],[.7693,-.3293],[.7556,-.3381],[.7781,-.3733],[.7891,-.383],[.7855,-.3874],[.7746,-.3864],[.7784,-.3917],[.7733,-.3964],[.7816,-.4062],[.782,-.4339],[.7878,-.4441],[.7873,-.4551],[.7803,-.4657],[.7947,-.4811],[.8093,-.485],[.8066,-.5023],[.8246,-.5195],[.8259,-.5365],[.8016,-.5391],[.764,-.5337],[.7445,-.5348],[.7281,-.5425],[.7179,-.5614],[.713,-.5638],[.6923,-.5514],[.6841,-.5507],[.655,-.5537],[.6466,-.5594],[.6455,-.5721],[.6518,-.5727],[.6523,-.5818],[.6428,-.5807],[.6351,-.5951],[.6236,-.602],[.6255,-.6091],[.6209,-.6155],[.611,-.6168],[.6098,-.6252],[.595,-.6446],[.5972,-.6546],[.5864,-.6651],[.5925,-.6672],[.5885,-.6842],[.5769,-.6868],[.5749,-.7133],[.5662,-.7206],[.5725,-.7276],[.5683,-.7347],[.5818,-.7413],[.5775,-.7486],[.5825,-.7527],[.5836,-.7622],[.5901,-.767],[.5834,-.7726],[.5841,-.7811],[.5907,-.7838],[.5973,-.8014],[.5945,-.8026],[.5962,-.8124],[.5839,-.824],[.5784,-.8474],[.5689,-.8405],[.5595,-.8393],[.5512,-.8293],[.5352,-.8251],[.5266,-.8132],[.529,-.8028],[.5265,-.7919],[.5126,-.7843],[.501,-.7703],[.4886,-.7645],[.4584,-.7662],[.4406,-.7751],[.4321,-.773],[.42,-.7854],[.4003,-.7826],[.3917,-.7674],[.3783,-.7653],[.3636,-.7799],[.3501,-.7844],[.342,-.8028],[.3282,-.7992],[.3105,-.8102],[.3055,-.8075],[.2981,-.7871],[.29,-.7793],[.2893,-.7574],[.2746,-.7284],[.2666,-.721],[.2579,-.719],[.2493,-.7209],[.2361,-.7407],[.2108,-.7447],[.1972,-.754],[.1871,-.7711],[.1872,-.7902],[.1824,-.7997],[.1768,-.7855],[.1681,-.7885],[.1624,-.7832],[.1549,-.7472],[.1241,-.7412],[.1023,-.756],[.0967,-.7564],[.0917,-.7404],[.0802,-.731],[.0742,-.7139],[.0604,-.7202],[.0493,-.7402],[.0399,-.7464],[.0149,-.7454],[-.0021,-.729],[-.0117,-.7273],[-.0185,-.7369],[-.0201,-.7604],[-.0314,-.7763],[-.037,-.779],[-.0478,-.7688],[-.0389,-.7427],[-.0416,-.7354],[-.0879,-.7233],[-.1027,-.7342],[-.1199,-.7323],[-.1332,-.7354],[-.136,-.7327],[-.1308,-.7134],[-.1467,-.7118],[-.1498,-.7088],[-.1519,-.6799],[-.1576,-.6765],[-.1854,-.6735],[-.2071,-.6808],[-.2212,-.6782],[-.2615,-.6595],[-.3087,-.6572],[-.3142,-.6517],[-.3164,-.6414],[-.3662,-.6381],[-.3924,-.6208],[-.4073,-.6208],[-.4526,-.6108],[-.4708,-.6139],[-.5416,-.6103],[-.5773,-.5992],[-.5968,-.6019],[-.6164,-.6112],[-.6768,-.6184],[-.6942,-.6142],[-.7523,-.6173],[-.7655,-.6332],[-.7754,-.662],[-.7819,-.6703],[-.8071,-.6858],[-.8407,-.713],[-.8494,-.714],[-.8608,-.7001],[-.8894,-.6899],[-.9156,-.6937],[-.9235,-.7016],[-.9177,-.7276],[-.919,-.7328],[-.9228,-.7321]]]},uz:{w:2,h:1.3144,cap:[.5397,-.0106],polys:[[[.7512,-.1619],[.7119,-.1708],[.7069,-.1677],[.6988,-.1493],[.6806,-.1472],[.6793,-.1301],[.6917,-.1246],[.6968,-.1163],[.7197,-.0964],[.7231,-.0864],[.7076,-.0824],[.7061,-.0754],[.7151,-.079],[.7151,-.0761],[.6825,-.0444],[.6729,-.0441],[.6707,-.0606],[.6648,-.0686],[.6343,-.0892],[.6107,-.0988],[.5982,-.1113],[.5756,-.0901],[.5668,-.0863],[.5591,-.0888],[.5532,-.0984],[.5537,-.1191],[.5409,-.1243],[.5562,-.1582],[.5558,-.1658],[.5443,-.1658],[.5542,-.1812],[.544,-.1837],[.5225,-.1772],[.4713,-.1902],[.4842,-.1979],[.5127,-.1909],[.5184,-.1946],[.5197,-.2013],[.5075,-.2029],[.4996,-.2083],[.4948,-.2021],[.4972,-.2153],[.5089,-.2327],[.5039,-.2351],[.4937,-.2176],[.4978,-.2327],[.4928,-.2426],[.4857,-.2354],[.4789,-.2386],[.4772,-.2707],[.4666,-.2829],[.468,-.2858],[.4467,-.2899],[.3722,-.2781],[.357,-.288],[.3475,-.2899],[.3459,-.2996],[.3383,-.302],[.3344,-.3304],[.3296,-.3326],[.3304,-.342],[.3689,-.3544],[.3724,-.3763],[.3911,-.378],[.4052,-.3731],[.4218,-.376],[.4313,-.3964],[.4271,-.4029],[.4189,-.4058],[.4204,-.4152],[.4159,-.4208],[.419,-.4447],[.4248,-.4606],[.4358,-.4752],[.4575,-.4933],[.4567,-.5084],[.4461,-.5346],[.4309,-.5416],[.423,-.5648],[.3972,-.6018],[.3939,-.6179],[.3974,-.6366],[.3931,-.6545],[.3887,-.6483],[.3746,-.645],[.3659,-.6506],[.3584,-.6412],[.3449,-.6513],[.3288,-.6572],[.3197,-.6461],[.3116,-.6427],[.3082,-.6337],[.2967,-.6273],[.2635,-.6314],[.2585,-.6346],[.237,-.6319],[.2341,-.6267],[.24,-.6184],[.2332,-.6075],[.2355,-.5671],[.2505,-.5415],[.2477,-.5342],[.2087,-.5216],[.1992,-.5112],[.1558,-.4927],[.1393,-.5005],[.1227,-.4987],[.074,-.4663],[.0463,-.4413],[.0048,-.421],[-.0207,-.3995],[-.0311,-.3858],[-.0376,-.3845],[-.0536,-.3891],[-.1064,-.3513],[-.1338,-.3182],[-.2379,-.2409],[-.2542,-.2221],[-.2575,-.2056],[-.2555,-.1934],[-.2643,-.1566],[-.2831,-.1455],[-.2895,-.1331],[-.3003,-.1083],[-.3059,-.085],[-.3058,-.0674],[-.317,-.0475],[-.3424,-.0274],[-.3679,-.0187],[-.3864,-.0402],[-.3955,-.038],[-.4071,-.029],[-.4161,-.0297],[-.4174,-.0265],[-.4214,-.0317],[-.4267,-.0257],[-.4348,-.0234],[-.4795,-.0277],[-.5227,.0019],[-.5264,.0091],[-.5243,.0214],[-.513,.0318],[-.525,.0585],[-.5185,.0647],[-.5046,.0593],[-.5013,.0614],[-.5191,.0839],[-.5397,.0924],[-.5289,.0986],[-.5308,.1125],[-.5293,.1196],[-.523,.123],[-.5238,.1276],[-.5313,.1316],[-.5414,.1448],[-.5918,.145],[-.6105,.1556],[-.6133,.1733],[-.6215,.1841],[-.6372,.1838],[-.6499,.1892],[-.6822,.2291],[-.6897,.2084],[-.7003,.2082],[-.7207,.2161],[-.737,.2072],[-.7346,.2021],[-.717,.1909],[-.6986,.1536],[-.7094,.1529],[-.7097,.1684],[-.716,.1757],[-.7294,.1826],[-.7376,.1809],[-.7432,.1879],[-.7504,.1888],[-.7634,.1791],[-.7611,.167],[-.7678,.1532],[-.7752,.1484],[-.773,.1427],[-.7999,.1381],[-.8268,.1427],[-.848,.13],[-.8601,.1126],[-.8766,.1052],[-.8802,.101],[-.882,.0671],[-.8773,.0528],[-.8777,.0385],[-.8723,.027],[-.8626,.0219],[-.8793,.007],[-1,.0275],[-.9425,.5941],[-.655,.6568],[-.3942,.46],[-.3817,.4263],[-.2889,.3165],[-.1558,.3363],[-.0192,.3226],[.0287,.3483],[.0363,.3493],[.0757,.3028],[.1036,.2845],[.1359,.2199],[.1703,.238],[.1663,.1528],[.1619,.1469],[.1624,.0849],[.2194,.0846],[.2326,.0075],[.2436,-.0379],[.249,-.0441],[.2586,-.0464],[.3671,-.0364],[.3774,-.0403],[.389,-.0331],[.4013,-.057],[.4108,-.0529],[.4127,-.0586],[.4091,-.0612],[.4118,-.0686],[.4077,-.0831],[.3976,-.0931],[.4067,-.0963],[.426,-.1124],[.4543,-.1258],[.4603,-.1202],[.472,-.1212],[.4707,-.1047],[.4646,-.0995],[.4648,-.0743],[.4783,-.0657],[.4842,-.0501],[.495,-.0424],[.4991,-.0351],[.5162,-.026],[.5181,-.0094],[.5155,-4e-4],[.526,.0034],[.5358,.014],[.5571,.0175],[.5555,.0283],[.581,.0489],[.6138,.0578],[.6356,.0767],[.6615,.1151],[.6741,.1205],[.6821,.1107],[.6874,.1097],[.7032,.1389],[.7156,.1391],[.7341,.1553],[.7414,.1548],[.7625,.1434],[.7612,.1375],[.7327,.1173],[.7178,.1141],[.7154,.0967],[.6968,.0904],[.6815,.0735],[.6762,.0617],[.6448,.0388],[.6426,.0347],[.6451,.0298],[.6659,.0271],[.6794,.0143],[.7035,.0262],[.7166,.0086],[.718,-.0089],[.7246,-.0068],[.7352,-.0148],[.748,-.0143],[.7598,-.0183],[.767,-.0256],[.7691,-.0129],[.7781,-.0239],[.7833,-.0167],[.7918,-.0229],[.7942,-.0205],[.7918,.0136],[.8046,.0067],[.8114,.0114],[.8161,.0286],[.8105,.0378],[.8135,.0458],[.8185,.0468],[.8202,.028],[.8227,.0316],[.8259,.0284],[.8283,.0329],[.8415,.0168],[.8462,-.0058],[.8585,-.0046],[.8655,-.01],[.8737,-.0031],[.8796,-.0039],[.8845,-.0233],[.8829,-.033],[.8971,-.0279],[.9013,-.0199],[.9093,-.0271],[.9196,-.0282],[.9203,-.0341],[.9277,-.0356],[.9421,-.0482],[.9667,-.0463],[.9675,-.0534],[.9822,-.0439],[.9886,-.0485],[.9991,-.0479],[1,-.0509],[.9917,-.0597],[.9596,-.0773],[.9568,-.0923],[.947,-.0928],[.9434,-.1036],[.9219,-.0978],[.9134,-.0905],[.9101,-.0924],[.9127,-.1061],[.9208,-.1136],[.918,-.1248],[.8961,-.1211],[.9006,-.1156],[.8903,-.1171],[.8829,-.1221],[.8773,-.1346],[.8676,-.1407],[.8682,-.1451],[.8759,-.1517],[.8543,-.1521],[.8404,-.1696],[.8364,-.1694],[.8297,-.1526],[.8263,-.1623],[.8178,-.1622],[.8077,-.1541],[.7983,-.1497],[.7886,-.1498],[.7849,-.146],[.7794,-.1558],[.7619,-.1556],[.7512,-.1619]],[[.7791,-.1903],[.787,-.189],[.7794,-.1978],[.7856,-.207],[.7846,-.2137],[.7718,-.2168],[.767,-.2127],[.7611,-.216],[.7651,-.2037],[.7531,-.189],[.7544,-.1763],[.7607,-.1754],[.7671,-.1856],[.7791,-.1903]]]},kz:{w:2,h:1.1181,cap:[.2206,.2434],polys:[[[1,.2135],[.9893,.2141],[.9777,.209],[.9735,.196],[.9795,.1886],[.9802,.1791],[.9749,.1629],[.959,.1502],[.9396,.1444],[.9373,.14],[.9354,.1053],[.9551,.0598],[.9502,.0412],[.9369,.0371],[.9248,.0193],[.9166,.0146],[.9155,.0224],[.9099,.0262],[.8723,.0167],[.8309,.026],[.8245,.0242],[.8268,.0043],[.8127,-.1074],[.832,-.1125],[.8315,-.1352],[.8147,-.1303],[.8006,-.1398],[.7918,-.1376],[.7887,-.1295],[.783,-.1275],[.7438,-.1519],[.7354,-.1521],[.7228,-.1574],[.7206,-.1623],[.7058,-.1659],[.6945,-.1776],[.6957,-.1816],[.7029,-.1846],[.7159,-.1807],[.73,-.185],[.7238,-.1918],[.7295,-.2315],[.7579,-.2773],[.7558,-.2879],[.7621,-.2907],[.7662,-.2996],[.7634,-.3038],[.7569,-.3024],[.7447,-.3126],[.7457,-.3166],[.7563,-.3221],[.7408,-.3296],[.7375,-.3421],[.7483,-.3751],[.7437,-.3756],[.7275,-.3618],[.7,-.3629],[.6948,-.3555],[.6859,-.3509],[.6812,-.3413],[.6731,-.3452],[.6447,-.3405],[.6195,-.3457],[.6017,-.3442],[.5807,-.3478],[.5596,-.3437],[.5308,-.3551],[.4966,-.3553],[.4879,-.3662],[.4633,-.3655],[.4367,-.3569],[.4274,-.3491],[.4056,-.3401],[.4071,-.3449],[.3943,-.3445],[.3913,-.3513],[.3738,-.3603],[.3676,-.3914],[.374,-.4078],[.3639,-.4067],[.3608,-.4006],[.3383,-.4],[.3294,-.3925],[.3155,-.3912],[.3049,-.386],[.2946,-.3875],[.2801,-.3822],[.2658,-.3887],[.2558,-.3866],[.2519,-.3912],[.2472,-.3907],[.2421,-.3962],[.2421,-.4018],[.2345,-.4052],[.2382,-.412],[.2325,-.4125],[.227,-.425],[.2326,-.4291],[.2208,-.4335],[.2145,-.4466],[.2102,-.447],[.2056,-.442],[.2003,-.4446],[.1871,-.4629],[.1763,-.4719],[.1602,-.4758],[.1475,-.4855],[.1481,-.4908],[.1377,-.4922],[.1276,-.499],[.1277,-.5114],[.1192,-.5156],[.102,-.5342],[.1049,-.5571],[.0962,-.5591],[.069,-.5425],[.0741,-.5378],[.0768,-.526],[.0759,-.5232],[.0712,-.5251],[.0656,-.5133],[.0598,-.5166],[-.0028,-.5168],[-.0155,-.454],[-.0433,-.453],[-.0374,-.3788],[-.0544,-.3871],[-.0692,-.3552],[-.0825,-.346],[-.101,-.3228],[-.1284,-.335],[-.1947,-.3263],[-.2597,-.3338],[-.3032,-.279],[-.3088,-.2623],[-.4338,-.1619],[-.5731,-.1874],[-.6099,-.4619],[-.6297,-.4634],[-.6399,-.4608],[-.6623,-.4181],[-.6633,-.4076],[-.7019,-.3705],[-.7419,-.3698],[-.7673,-.3754],[-.8019,-.398],[-.797,-.3872],[-.7994,-.3721],[-.7786,-.3417],[-.782,-.3255],[-.7761,-.3386],[-.7732,-.3302],[-.786,-.3183],[-.7971,-.3183],[-.8015,-.3107],[-.816,-.3113],[-.8252,-.2827],[-.8459,-.2814],[-.8394,-.2589],[-.8553,-.2122],[-.8536,-.1999],[-.8604,-.1927],[-.8813,-.1826],[-.8805,-.1649],[-.8745,-.1589],[-.8521,-.1681],[-.8457,-.1677],[-.8336,-.1813],[-.8209,-.1781],[-.8114,-.1837],[-.8163,-.1751],[-.8228,-.1749],[-.8254,-.1649],[-.8375,-.1512],[-.8359,-.1427],[-.8223,-.1388],[-.8189,-.1426],[-.8184,-.1322],[-.8062,-.117],[-.8004,-.1225],[-.7875,-.1156],[-.7794,-.1241],[-.7488,-.1268],[-.7299,-.1377],[-.7197,-.1405],[-.7112,-.1388],[-.7359,-.1181],[-.7085,-.08],[-.7036,-.0635],[-.7082,-.0527],[-.705,-.0554],[-.7052,-.0501],[-.7096,-.0498],[-.6964,-.0376],[-.701,-.0336],[-.7012,-.0216],[-.7074,-.0155],[-.7229,-.0132],[-.7302,-.0079],[-.7367,-.0149],[-.7453,-.014],[-.7435,-.02],[-.7501,-.0185],[-.7547,-.0116],[-.7531,-.0084],[-.7578,-.0119],[-.762,-.0098],[-.7594,-.0076],[-.7671,-.0064],[-.7683,.0039],[-.7738,-4e-4],[-.7761,.0051],[-.7908,.0134],[-.8077,.0091],[-.8104,.011],[-.8177,.0025],[-.8161,.0074],[-.8235,.006],[-.8275,-.0014],[-.8263,.0022],[-.8334,.0051],[-.8461,-.0053],[-.8489,-.0029],[-.8699,-.0144],[-.8753,-.0116],[-.876,-.0147],[-.879,-.009],[-.8826,-.0147],[-.8865,-.0064],[-.8869,-.0137],[-.8948,-.005],[-.8922,-.0141],[-.8974,-.0097],[-.8947,-.0197],[-.9009,-.0127],[-.8987,-.019],[-.9047,-.0166],[-.9031,-.0233],[-.9256,-6e-4],[-.9336,.0027],[-.9328,.008],[-.9361,.0106],[-.9293,.0168],[-.9234,.015],[-.9203,.0084],[-.9123,.0081],[-.9067,.0119],[-.9164,.04],[-.9194,.0649],[-.9244,.0689],[-.9312,.0914],[-.9365,.0972],[-.9558,.1018],[-.9661,.11],[-.9715,.0994],[-.9806,.1116],[-.9777,.1158],[-.9811,.1257],[-.9723,.1301],[-.976,.1334],[-.973,.1455],[-1,.1642],[-.9769,.1974],[-.9606,.2074],[-.9582,.215],[-.9676,.2278],[-.9502,.2646],[-.9367,.2677],[-.9272,.2751],[-.9279,.2842],[-.9239,.2916],[-.9073,.2996],[-.8942,.275],[-.8887,.2489],[-.8807,.2426],[-.8619,.2476],[-.8552,.2566],[-.8587,.2607],[-.8553,.2964],[-.8592,.3018],[-.8478,.2958],[-.83,.306],[-.8166,.308],[-.8174,.3172],[-.8107,.3271],[-.7952,.3227],[-.7835,.3299],[-.7667,.3319],[-.7633,.3396],[-.7547,.3421],[-.7495,.3538],[-.7448,.3509],[-.7466,.3479],[-.7406,.3489],[-.7391,.3611],[-.7332,.3537],[-.719,.3511],[-.7136,.3457],[-.7153,.3407],[-.7213,.34],[-.7192,.3346],[-.7119,.3334],[-.7054,.3366],[-.7017,.3296],[-.697,.3317],[-.6963,.3393],[-.6903,.3442],[-.6803,.3411],[-.6687,.3478],[-.6625,.3223],[-.651,.3238],[-.6442,.3183],[-.6332,.321],[-.6225,.3167],[-.6144,.308],[-.6165,.3007],[-.6138,.2949],[-.6021,.2902],[-.5951,.2822],[-.5948,.2742],[-.5899,.2666],[-.581,.2612],[-.5886,.2446],[-.5842,.2365],[-.5749,.241],[-.5732,.2624],[-.579,.2666],[-.5766,.272],[-.5714,.273],[-.554,.2592],[-.5533,.2525],[-.5445,.241],[-.5369,.2392],[-.5293,.2284],[-.5074,.2401],[-.5017,.253],[-.4945,.2504],[-.4849,.2634],[-.4761,.2543],[-.4738,.2619],[-.467,.2594],[-.4529,.2612],[-.4465,.245],[-.4406,.2413],[-.4358,.2453],[-.4281,.2436],[-.424,.2591],[-.4058,.252],[-.3984,.2584],[-.3958,.2521],[-.386,.2474],[-.3892,.2379],[-.3852,.2352],[-.3847,.2296],[-.3807,.2295],[-.3732,.2199],[-.3604,.2174],[-.3572,.2135],[-.3493,.2139],[-.3437,.2094],[-.3493,.2068],[-.3464,.2017],[-.3318,.207],[-.32,.228],[-.3146,.2268],[-.3134,.2189],[-.3079,.2141],[-.2882,.21],[-.2564,.2174],[-.2464,.2486],[-.24,.2522],[-.2445,.2553],[-.248,.2654],[-.2685,.2712],[-.272,.2812],[-.2917,.2833],[-.2978,.2872],[-.2934,.2976],[-.3074,.3051],[-.3111,.3032],[-.314,.3105],[-.3129,.3135],[-.3036,.3127],[-.2924,.322],[-.281,.3222],[-.2629,.3351],[-.2667,.347],[-.2721,.35],[-.2719,.358],[-.2776,.3618],[-.2761,.3664],[-.2585,.3792],[-.262,.3831],[-.2403,.3853],[-.2336,.3793],[-.2237,.3809],[-.2176,.3772],[-.2112,.3811],[-.2125,.3912],[-.2252,.3954],[-.2303,.4013],[-.2363,.3991],[-.2516,.4071],[-.2523,.4127],[-.2471,.4222],[-.2396,.4165],[-.2328,.4213],[-.2347,.4277],[-.2448,.425],[-.2622,.4331],[-.2565,.4329],[-.247,.4443],[-.2563,.4515],[-.2551,.4559],[-.2485,.456],[-.2458,.4526],[-.2459,.461],[-.2393,.4638],[-.2292,.4544],[-.2272,.4577],[-.2196,.4577],[-.217,.4532],[-.2106,.452],[-.2102,.4584],[-.192,.4579],[-.1934,.4516],[-.1877,.446],[-.1844,.4595],[-.162,.4607],[-.1585,.4677],[-.1492,.4659],[-.1339,.4718],[-.1258,.4673],[-.1208,.4697],[-.1207,.4765],[-.0953,.4806],[-.0892,.4765],[-.0807,.4815],[-.0732,.4742],[-.0688,.4742],[-.0678,.4897],[-.0568,.4925],[-.0566,.4978],[-.0438,.4956],[-.0355,.5031],[-.0336,.4963],[.0203,.51],[.0246,.5147],[.0381,.5144],[.0492,.5233],[.0616,.5224],[.0675,.5313],[.0617,.5385],[.0802,.5407],[.0839,.5532],[.0957,.5474],[.0942,.5591],[.102,.5565],[.1049,.5512],[.1111,.5559],[.1258,.5525],[.1496,.5383],[.1589,.5501],[.1751,.5517],[.1742,.5471],[.1827,.5359],[.1853,.5131],[.1971,.5053],[.1921,.4976],[.1954,.4793],[.1858,.4778],[.1951,.463],[.2016,.4708],[.2076,.4697],[.209,.4644],[.2165,.4648],[.2208,.4756],[.2307,.475],[.2388,.4678],[.2399,.4717],[.2344,.4745],[.2325,.4862],[.2388,.485],[.2455,.4777],[.2448,.472],[.2532,.4693],[.2479,.4657],[.2505,.452],[.2574,.4577],[.2638,.4567],[.2613,.4629],[.2545,.4631],[.2594,.4698],[.2735,.4699],[.2797,.4596],[.2931,.4577],[.2943,.4605],[.3,.4596],[.3028,.4686],[.3091,.4681],[.3078,.4541],[.2968,.4525],[.2974,.4482],[.2892,.4365],[.2898,.4297],[.2973,.4264],[.2957,.4217],[.2988,.4197],[.3084,.4341],[.3145,.4336],[.3193,.4374],[.3263,.4369],[.3276,.4326],[.3339,.4354],[.3422,.4262],[.3428,.4423],[.3507,.4436],[.3563,.4556],[.3678,.4551],[.3842,.4704],[.3803,.4755],[.3831,.4781],[.3923,.4799],[.4146,.4941],[.4159,.5016],[.4267,.5011],[.4327,.5044],[.4341,.5107],[.4435,.514],[.4382,.5067],[.4427,.5012],[.4368,.488],[.424,.4879],[.4308,.4765],[.4991,.4311],[.63,.2596],[.627,.2657],[.6333,.2651],[.6343,.2697],[.6452,.278],[.6413,.2949],[.6492,.298],[.6518,.3056],[.6598,.3037],[.6623,.3062],[.6692,.2993],[.6751,.3011],[.6737,.2831],[.6899,.2865],[.696,.27],[.7059,.2724],[.7084,.2767],[.7285,.2743],[.7361,.2798],[.7436,.2784],[.7515,.2859],[.7523,.2946],[.7641,.2957],[.7684,.3052],[.7834,.3085],[.8108,.2982],[.8136,.2916],[.8268,.281],[.8337,.2631],[.8383,.2605],[.8429,.264],[.8643,.2564],[.8715,.2571],[.8745,.2529],[.8714,.2511],[.8729,.2449],[.8783,.2436],[.8911,.2251],[.9092,.2313],[.913,.2278],[.9256,.2309],[.9273,.2253],[.9323,.2301],[.9385,.2268],[.9407,.2367],[.9524,.2564],[.9591,.2573],[.9621,.2512],[.9569,.2465],[.9563,.24],[.9681,.2382],[.9756,.2268],[.9833,.2213],[.9951,.2216],[1,.2135]]]},tj:{w:2,h:1.423,cap:[-.6461,-.0897],polys:[[[-.0862,.4492],[-.0811,.4413],[-.0936,.4272],[-.1013,.4246],[-.1146,.4276],[-.1242,.4226],[-.1278,.4243],[-.1435,.4111],[-.1594,.4058],[-.1661,.3996],[-.1671,.3812],[-.1727,.364],[-.1821,.3564],[-.201,.3528],[-.2071,.3399],[-.2125,.3419],[-.2136,.3519],[-.2079,.3625],[-.1959,.3701],[-.1922,.3773],[-.1946,.3831],[-.2066,.3892],[-.2447,.3978],[-.2652,.4161],[-.2887,.4177],[-.3239,.4416],[-.3326,.4426],[-.4314,.409],[-.4395,.409],[-.4456,.4163],[-.46,.3841],[-.451,.3503],[-.4753,.3422],[-.4868,.3631],[-.4975,.3723],[-.5169,.3212],[-.5211,.2958],[-.5063,.2716],[-.5076,.2266],[-.5042,.2187],[-.4942,.2225],[-.4885,.2305],[-.476,.2212],[-.4502,.2248],[-.4329,.2362],[-.411,.2372],[-.3708,.2229],[-.3513,.2266],[-.3335,.2218],[-.3178,.2344],[-.2948,.2264],[-.2906,.2277],[-.2773,.2488],[-.2739,.2395],[-.2764,.2177],[-.272,.216],[-.2449,.2333],[-.2314,.2325],[-.227,.237],[-.2079,.2422],[-.1957,.2337],[-.1777,.2343],[-.1716,.2296],[-.1632,.2068],[-.1523,.1997],[-.1528,.1823],[-.149,.1756],[-.1347,.1702],[-.111,.1761],[-.1011,.1827],[-.0825,.1741],[-.0744,.1783],[-.0608,.2069],[-.0525,.2124],[-.0313,.2158],[-.0139,.213],[.0161,.2382],[.0389,.2449],[.0519,.2359],[.057,.2257],[.0472,.2063],[.0525,.195],[.0629,.1902],[.1007,.1952],[.1097,.1918],[.1118,.1694],[.103,.1569],[.1026,.1502],[.1128,.135],[.1269,.1347],[.1651,.1587],[.1879,.1664],[.1952,.156],[.1995,.1359],[.2157,.132],[.2271,.125],[.2337,.1083],[.2366,.1085],[.2553,.1541],[.2746,.1615],[.2957,.1602],[.3062,.17],[.3206,.1649],[.335,.1765],[.386,.1649],[.4007,.1677],[.4299,.1632],[.4454,.1707],[.4619,.1654],[.4699,.1662],[.5096,.1787],[.5135,.1917],[.5196,.1962],[.5558,.2047],[.579,.2028],[.5862,.1993],[.5899,.1677],[.5804,.1298],[.582,.1205],[.5993,.0999],[.6089,.075],[.6393,.0469],[.639,.0365],[.6355,.0324],[.6122,.0271],[.6034,.012],[.6043,.0062],[.618,-.0113],[.6188,-.0369],[.6404,-.0804],[.6706,-.0981],[.6951,-.0982],[.7025,-.0915],[.6966,-.0749],[.7084,-.0695],[.7108,-.059],[.7178,-.0511],[.7429,-.0567],[.7714,-.0501],[.8521,-.0818],[.8653,-.0935],[.8817,-.0942],[.9009,-.1118],[.9033,-.1392],[.8902,-.1573],[.8873,-.1685],[.8885,-.1996],[.8949,-.2368],[.9002,-.2458],[.9187,-.2554],[.9222,-.2643],[.9229,-.2957],[.929,-.301],[.9217,-.3133],[.9226,-.3176],[.9393,-.3285],[.9437,-.3374],[.9241,-.3816],[.9334,-.402],[.9654,-.4217],[1,-.4548],[.9816,-.4628],[.9764,-.4847],[.9465,-.496],[.9318,-.513],[.9239,-.5089],[.9036,-.4814],[.8697,-.4622],[.8624,-.4667],[.8339,-.4695],[.8165,-.4642],[.7966,-.4648],[.7874,-.4563],[.7816,-.4588],[.7801,-.4546],[.7773,-.4634],[.7566,-.463],[.7479,-.4845],[.6575,-.5139],[.6479,-.5233],[.6344,-.5231],[.6249,-.5277],[.6172,-.5196],[.601,-.5231],[.5968,-.5207],[.5955,-.5139],[.6039,-.5025],[.6193,-.4991],[.6316,-.488],[.6346,-.4585],[.6141,-.4582],[.5647,-.4431],[.5532,-.4438],[.5373,-.4531],[.5285,-.4494],[.5159,-.4495],[.5067,-.4546],[.4944,-.4685],[.4837,-.4687],[.474,-.4767],[.4577,-.4996],[.4391,-.5019],[.4152,-.5204],[.3966,-.5253],[.3864,-.5318],[.3528,-.5948],[.3141,-.6012],[.3053,-.6057],[.2873,-.6026],[.2494,-.6162],[.215,-.6474],[.1397,-.7046],[.1167,-.7114],[.0917,-.7088],[.0807,-.7031],[.0654,-.682],[.0589,-.6538],[.0418,-.6239],[.0409,-.6034],[.0334,-.5851],[.0382,-.5363],[.0478,-.5198],[.0495,-.5066],[.0477,-.4735],[.0539,-.4485],[.0501,-.4222],[.0617,-.3722],[.0583,-.3587],[.0604,-.3528],[.0739,-.3408],[.0757,-.3139],[.0601,-.2989],[.0509,-.2983],[.0097,-.3157],[-.0056,-.3053],[-.0116,-.3049],[-.0079,-.2815],[-3e-4,-.2671],[.0142,-.2208],[.014,-.1989],[.0079,-.1893],[-.022,-.1746],[-.0476,-.1509],[-.058,-.1464],[-.0649,-.1475],[-.078,-.1289],[-.0901,-.1265],[-.0939,-.1395],[-.1105,-.1329],[-.1177,-.1371],[-.1345,-.135],[-.1436,-.1437],[-.1633,-.1482],[-.1582,-.1543],[-.1694,-.1648],[-.18,-.1671],[-.1845,-.1905],[-.1937,-.1945],[-.2138,-.2407],[-.228,-.2491],[-.2621,-.2855],[-.2698,-.2882],[-.268,-.2993],[-.2801,-.3024],[-.291,-.2968],[-.293,-.3151],[-.2852,-.3315],[-.2721,-.3384],[-.2651,-.3532],[-.2632,-.3758],[-.2725,-.4023],[-.2808,-.4042],[-.2853,-.4165],[-.2962,-.4287],[-.3036,-.4316],[-.335,-.4258],[-.3396,-.4197],[-.3484,-.417],[-.3576,-.4032],[-.3637,-.4028],[-.3879,-.4144],[-.4003,-.4093],[-.4234,-.4156],[-.4586,-.4117],[-.4638,-.4139],[-.4685,-.4275],[-.4967,-.4543],[-.4991,-.4779],[-.4955,-.4812],[-.4969,-.4907],[-.4893,-.515],[-.4915,-.5221],[-.4824,-.5253],[-.4925,-.5443],[-.5146,-.5623],[-.5351,-.5674],[-.5664,-.5454],[-.5731,-.531],[-.5885,-.518],[-.5921,-.5061],[-.6011,-.4953],[-.6262,-.4889],[-.6257,-.4938],[-.6188,-.5007],[-.6195,-.5083],[-.626,-.5072],[-.6344,-.493],[-.6398,-.4914],[-.6455,-.4932],[-.6466,-.4968],[-.6444,-.5168],[-.66,-.5085],[-.6835,-.5068],[-.6866,-.5102],[-.6832,-.517],[-.6891,-.5177],[-.6951,-.53],[-.7148,-.5339],[-.7222,-.5428],[-.7535,-.5461],[-.7501,-.5538],[-.7571,-.5611],[-.779,-.5575],[-.784,-.5609],[-.7848,-.5866],[-.7877,-.5912],[-.8114,-.5877],[-.8493,-.6155],[-.858,-.6147],[-.8911,-.5699],[-.9091,-.5631],[-.9179,-.554],[-.915,-.5284],[-.9032,-.4915],[-.9078,-.4518],[-.9063,-.4381],[-.8866,-.3996],[-.8386,-.3446],[-.8184,-.297],[-.8137,-.2925],[-.7854,-.2849],[-.7592,-.2314],[-.7544,-.2124],[-.7551,-.1998],[-.761,-.1897],[-.798,-.1583],[-.8188,-.126],[-.8209,-.1058],[-.8285,-.0917],[-.8278,-.0592],[-.8312,-.0409],[-.8211,-.0298],[-.8227,-.0098],[-.805,-.005],[-.7952,.008],[-.797,.0218],[-.8119,.0523],[-.8198,.0581],[-.8366,.0541],[-.8465,.0609],[-.8767,.0528],[-.9157,.0595],[-.9202,.0643],[-.9211,.0724],[-.9172,.0975],[-.9197,.1061],[-.9273,.1063],[-.9315,.1129],[-.9413,.1173],[-.9618,.1189],[-.9919,.1311],[-.9987,.1381],[-.9988,.158],[-.9884,.1619],[-.9757,.2209],[-.9732,.2238],[-.9594,.2247],[-.9597,.2403],[-.9545,.245],[-.9343,.2473],[-.9102,.2632],[-.9008,.2658],[-.889,.2651],[-.8041,.2397],[-.7665,.2372],[-.7462,.2292],[-.7214,.2287],[-.7008,.2345],[-.7033,.2408],[-.679,.2646],[-.6706,.3318],[-.6644,.3301],[-.6557,.3374],[-.642,.3213],[-.6376,.3335],[-.63,.3412],[-.6373,.365],[-.6362,.3736],[-.6311,.3698],[-.6174,.3353],[-.6066,.3395],[-.6073,.3467],[-.6284,.3778],[-.6292,.3908],[-.6347,.4],[-.6313,.4059],[-.6221,.3923],[-.6047,.4022],[-.5866,.3989],[-.5809,.3997],[-.5788,.4036],[-.5805,.418],[-.5919,.4267],[-.6529,.4164],[-.6726,.4274],[-.6788,.4347],[-.6493,.4439],[-.6236,.442],[-.6098,.4486],[-.5691,.4539],[-.525,.4369],[-.5126,.4362],[-.5032,.4403],[-.503,.448],[-.5207,.4647],[-.5215,.4744],[-.4975,.4724],[-.4953,.4883],[-.5126,.538],[-.5222,.5552],[-.522,.5619],[-.513,.5678],[-.4943,.5709],[-.4921,.6143],[-.4817,.6308],[-.4661,.6382],[-.4515,.6291],[-.4437,.6282],[-.4072,.5831],[-.3996,.5802],[-.393,.5821],[-.3714,.6044],[-.3202,.6207],[-.2966,.6384],[-.2528,.6589],[-.239,.6748],[-.2318,.7091],[-.2225,.7115],[-.2116,.7068],[-.1503,.638],[-.1488,.6291],[-.1621,.6385],[-.1671,.638],[-.1689,.6282],[-.165,.6232],[-.133,.6122],[-.1358,.5984],[-.1418,.5919],[-.1704,.5715],[-.1824,.558],[-.1933,.5538],[-.2052,.537],[-.2321,.5275],[-.2361,.5212],[-.2354,.5128],[-.2286,.5028],[-.2321,.4915],[-.2145,.4842],[-.1997,.4866],[-.1942,.4842],[-.1877,.4733],[-.1801,.4443],[-.1701,.437],[-.1489,.4371],[-.1134,.4478],[-.0862,.4492]],[[-.2017,.3337],[-.1715,.3232],[-.1517,.3256],[-.1503,.3138],[-.1683,.3062],[-.1813,.2959],[-.204,.3233],[-.2055,.3338],[-.2017,.3337]]]},ru:{w:2,h:1.1262,cap:[-.74,.2219],polys:[[[-.1837,-.4289],[-.1917,-.4295],[-.1972,-.4228],[-.2024,-.4115],[-.1982,-.407],[-.2105,-.4127],[-.2262,-.4041],[-.2266,-.3902],[-.2377,-.381],[-.2385,-.3654],[-.2454,-.3568],[-.258,-.3551],[-.2638,-.3586],[-.2806,-.3519],[-.2795,-.3455],[-.2853,-.3434],[-.2815,-.3379],[-.2881,-.3319],[-.3037,-.3423],[-.3125,-.2619],[-.3252,-.2338],[-.3251,-.2288],[-.321,-.2314],[-.3139,-.2245],[-.3398,-.2237],[-.3491,-.228],[-.3526,-.2255],[-.3594,-.227],[-.3627,-.232],[-.3677,-.2239],[-.3776,-.2253],[-.3773,-.2181],[-.3718,-.2145],[-.3681,-.2162],[-.3649,-.212],[-.3719,-.2121],[-.3801,-.2015],[-.3829,-.2026],[-.3813,-.2065],[-.3863,-.2053],[-.3821,-.2003],[-.3852,-.1908],[-.3869,-.1979],[-.3909,-.1918],[-.3944,-.1943],[-.3978,-.1894],[-.4014,-.1905],[-.4014,-.184],[-.3981,-.1854],[-.3924,-.1775],[-.3945,-.1726],[-.39,-.1583],[-.3954,-.1555],[-.4006,-.1574],[-.4135,-.1394],[-.4154,-.1434],[-.4178,-.1392],[-.4215,-.1424],[-.4276,-.1393],[-.4309,-.1444],[-.4653,-.1331],[-.4645,-.1305],[-.472,-.1278],[-.477,-.1281],[-.4804,-.1328],[-.4872,-.1253],[-.4958,-.1213],[-.4992,-.1232],[-.5091,-.1162],[-.5186,-.1134],[-.5223,-.117],[-.5212,-.1123],[-.5267,-.1084],[-.5281,-.1104],[-.5344,-.1006],[-.5386,-.1028],[-.5408,-.0998],[-.5406,-.1052],[-.5475,-.1056],[-.5409,-.1155],[-.5451,-.1122],[-.5495,-.1161],[-.5409,-.1314],[-.5451,-.1327],[-.5574,-.1215],[-.5664,-.1251],[-.5673,-.1367],[-.5873,-.1334],[-.584,-.143],[-.5874,-.1446],[-.5807,-.152],[-.5767,-.168],[-.5878,-.1756],[-.5981,-.1722],[-.6049,-.1659],[-.6058,-.1589],[-.6135,-.1631],[-.619,-.1618],[-.6175,-.1573],[-.6251,-.1448],[-.622,-.1388],[-.6235,-.1326],[-.6271,-.1331],[-.6311,-.127],[-.6355,-.1311],[-.6397,-.1292],[-.6394,-.1202],[-.6456,-.1155],[-.6478,-.1174],[-.6486,-.1127],[-.6689,-.1144],[-.6726,-.0911],[-.6762,-.0915],[-.6801,-.1006],[-.6838,-.1001],[-.6779,-.0928],[-.6809,-.075],[-.6791,-.0661],[-.6899,-.0558],[-.6866,-.0463],[-.6937,-.0427],[-.7,-.0449],[-.7042,-.0396],[-.7003,-.0372],[-.7046,-.0268],[-.7076,-.0303],[-.7092,-.0269],[-.7188,-.0301],[-.729,-.0269],[-.7327,-.0221],[-.7383,-.0269],[-.75,-.024],[-.7521,-.0196],[-.7608,-.0359],[-.7639,-.0364],[-.7705,-.0339],[-.7715,-.0301],[-.7667,-.0098],[-.7732,-.0087],[-.7775,-.0133],[-.7864,-.0116],[-.7989,-.0196],[-.8011,-.0276],[-.8213,-.0329],[-.8172,-.0448],[-.8263,-.054],[-.826,-.0599],[-.8223,-.0577],[-.8158,-.0714],[-.8244,-.1023],[-.8291,-.1005],[-.8301,-.0958],[-.8334,-.0963],[-.8306,-.1169],[-.8311,-.1131],[-.8352,-.1163],[-.8426,-.1103],[-.8468,-.1171],[-.8458,-.1116],[-.8548,-.112],[-.8593,-.1059],[-.8622,-.1075],[-.8621,-.1004],[-.8652,-.106],[-.8647,-.0981],[-.866,-.1046],[-.8761,-.109],[-.8878,-.1123],[-.8863,-.1083],[-.8978,-.111],[-.897,-.1262],[-.9023,-.1388],[-.9088,-.1426],[-.9001,-.1378],[-.8979,-.1401],[-.9177,-.1532],[-.9255,-.1949],[-.9494,-.1944],[-.9537,-.1843],[-.9501,-.1647],[-.9536,-.1631],[-.9571,-.1477],[-.9576,-.1393],[-.9506,-.1345],[-.9549,-.1278],[-.9537,-.1218],[-.9561,-.1156],[-.9602,-.117],[-.9606,-.1099],[-.9717,-.104],[-.9728,-.0989],[-.9694,-.098],[-.9723,-.0735],[-.9858,-.0511],[-.9931,-.0213],[-1,-.0198],[-.9935,.0167],[-.9966,.0282],[-.9933,.0417],[-.9952,.0397],[-.9975,.0456],[-.9932,.0564],[-.995,.0698],[-.9889,.0653],[-.9907,.0711],[-.9865,.0702],[-.986,.063],[-.9887,.0625],[-.9816,.057],[-.981,.0522],[-.9749,.0601],[-.9699,.058],[-.9629,.0606],[-.9605,.0585],[-.9665,.0554],[-.9584,.0584],[-.9566,.0502],[-.9544,.0677],[-.9502,.075],[-.9425,.0604],[-.9432,.0647],[-.9395,.066],[-.9243,.0547],[-.9234,.0626],[-.9326,.0692],[-.926,.0672],[-.9358,.074],[-.9313,.078],[-.9239,.0804],[-.918,.075],[-.9132,.0763],[-.9047,.0609],[-.8926,.0647],[-.8935,.0681],[-.8874,.0723],[-.889,.0758],[-.8827,.0772],[-.8787,.0739],[-.8788,.0824],[-.8697,.0789],[-.862,.0848],[-.8659,.0893],[-.8644,.105],[-.868,.1073],[-.8678,.1215],[-.8741,.1236],[-.8668,.1414],[-.879,.1508],[-.878,.162],[-.8836,.1689],[-.879,.1767],[-.8696,.1833],[-.8674,.1904],[-.8732,.2052],[-.8702,.2045],[-.8638,.2129],[-.8588,.2094],[-.8492,.2273],[-.8533,.2372],[-.8582,.2397],[-.86,.2496],[-.8667,.2482],[-.8694,.2559],[-.8654,.2619],[-.8537,.2685],[-.85,.2765],[-.8444,.2763],[-.8419,.2628],[-.8301,.2595],[-.829,.2656],[-.8251,.2675],[-.8275,.2793],[-.8206,.2816],[-.8193,.2915],[-.8142,.2989],[-.8104,.2991],[-.8085,.3072],[-.8012,.3068],[-.7958,.3133],[-.7873,.316],[-.7846,.3294],[-.793,.3378],[-.7865,.3427],[-.7896,.3598],[-.7714,.3744],[-.7721,.3788],[-.7595,.3808],[-.7542,.3915],[-.7449,.3879],[-.7232,.4033],[-.7075,.4026],[-.7041,.3995],[-.6944,.4063],[-.6952,.4004],[-.6899,.4011],[-.6901,.3957],[-.683,.3938],[-.6819,.3791],[-.6788,.3793],[-.6754,.3891],[-.6787,.3973],[-.6754,.4052],[-.6715,.4095],[-.673,.405],[-.6658,.4083],[-.6728,.4123],[-.6748,.4176],[-.6388,.4042],[-.6086,.3971],[-.5967,.3981],[-.5816,.4263],[-.5719,.423],[-.5667,.4252],[-.5645,.4326],[-.554,.4363],[-.5522,.4432],[-.5457,.4432],[-.5437,.4474],[-.5328,.4503],[-.5291,.4468],[-.5009,.4707],[-.477,.4692],[-.4688,.48],[-.4678,.4873],[-.4596,.493],[-.4499,.4928],[-.4493,.4971],[-.4433,.4919],[-.4357,.4921],[-.432,.4874],[-.4245,.4887],[-.4251,.4809],[-.4177,.484],[-.4182,.4782],[-.4215,.4779],[-.4178,.4741],[-.4097,.475],[-.4123,.4628],[-.417,.4634],[-.4151,.4721],[-.4204,.4709],[-.42,.466],[-.4232,.4678],[-.4191,.4603],[-.4246,.4606],[-.4188,.4558],[-.424,.4565],[-.4244,.453],[-.433,.4548],[-.4211,.4537],[-.419,.4381],[-.416,.4379],[-.4206,.4096],[-.4267,.3981],[-.4263,.394],[-.4245,.3964],[-.4279,.3831],[-.4271,.3806],[-.4245,.3829],[-.4311,.3709],[-.4302,.3645],[-.4418,.3529],[-.4513,.3501],[-.4692,.3526],[-.483,.3641],[-.4892,.3985],[-.4867,.409],[-.4901,.4113],[-.4854,.4176],[-.4885,.4185],[-.4875,.4291],[-.4819,.4337],[-.4846,.4451],[-.4838,.4406],[-.4895,.4362],[-.492,.4245],[-.4957,.4277],[-.4941,.4208],[-.4967,.4267],[-.4961,.4174],[-.5007,.4204],[-.4992,.4114],[-.5048,.3993],[-.517,.3953],[-.5205,.3985],[-.5269,.3886],[-.534,.3857],[-.5336,.3826],[-.5397,.383],[-.5433,.373],[-.5392,.372],[-.5399,.3686],[-.5458,.3589],[-.5451,.3434],[-.538,.3396],[-.5294,.3443],[-.5273,.3493],[-.5318,.3553],[-.5266,.3657],[-.5222,.3698],[-.5193,.3665],[-.5145,.3689],[-.5139,.3484],[-.5206,.3491],[-.5142,.3474],[-.5147,.3318],[-.5099,.3308],[-.5093,.3219],[-.4894,.3448],[-.4735,.3418],[-.4634,.3359],[-.452,.3365],[-.4532,.3306],[-.4478,.3242],[-.45,.3176],[-.4566,.3176],[-.4573,.3149],[-.455,.3179],[-.4503,.3154],[-.4558,.3069],[-.447,.3142],[-.4347,.3166],[-.429,.3211],[-.4255,.3255],[-.4263,.3329],[-.4027,.3408],[-.4047,.3424],[-.3983,.3462],[-.3944,.3598],[-.3856,.3384],[-.3889,.324],[-.3952,.3172],[-.4052,.3273],[-.4161,.3251],[-.4219,.3063],[-.4176,.302],[-.4215,.3014],[-.4113,.2932],[-.3931,.3038],[-.3851,.2987],[-.3842,.294],[-.3809,.3036],[-.3791,.2978],[-.3571,.294],[-.3436,.2871],[-.3474,.2807],[-.3423,.2808],[-.339,.285],[-.3416,.2869],[-.322,.2808],[-.3196,.2773],[-.3274,.2827],[-.3258,.2783],[-.3318,.2769],[-.3359,.2701],[-.3409,.2739],[-.3432,.2718],[-.339,.2664],[-.3356,.2669],[-.3375,.2643],[-.3336,.2643],[-.3342,.2592],[-.3222,.2628],[-.316,.2604],[-.3084,.249],[-.2981,.2504],[-.2954,.2493],[-.2973,.2451],[-.2946,.2494],[-.2862,.2453],[-.2899,.2459],[-.2893,.2386],[-.2983,.2337],[-.2955,.228],[-.2908,.2288],[-.2878,.2346],[-.2822,.2309],[-.275,.2316],[-.2685,.2513],[-.2574,.2526],[-.2393,.2262],[-.2368,.2155],[-.2412,.2132],[-.2369,.2143],[-.2276,.1931],[-.2258,.1771],[-.2282,.1707],[-.2082,.1838],[-.2142,.1884],[-.2081,.2036],[-.2143,.2131],[-.2181,.2112],[-.2102,.221],[-.2053,.2208],[-.2052,.2247],[-.1945,.2358],[-.1946,.2388],[-.1992,.2395],[-.1926,.2455],[-.1954,.2459],[-.1888,.2504],[-.1722,.252],[-.1436,.2773],[-.1415,.2755],[-.1443,.2745],[-.13,.2668],[-.1239,.2565],[-.1298,.246],[-.1495,.2312],[-.1504,.2115],[-.1619,.1994],[-.1798,.1661],[-.1772,.1487],[-.1856,.1455],[-.1926,.1324],[-.1985,.1335],[-.2163,.1207],[-.2199,.1241],[-.2216,.1154],[-.2321,.117],[-.234,.1222],[-.2281,.1225],[-.2334,.1233],[-.2342,.1301],[-.2437,.1341],[-.2454,.1283],[-.2379,.1145],[-.2199,.1023],[-.2164,.1081],[-.1962,.111],[-.1907,.1187],[-.1777,.1242],[-.1715,.1359],[-.172,.1436],[-.1661,.1512],[-.1477,.15],[-.1439,.1477],[-.1459,.1423],[-.1428,.1333],[-.154,.115],[-.1512,.1068],[-.1377,.1015],[-.1507,.1129],[-.1457,.1223],[-.138,.1233],[-.1352,.1418],[-.1455,.157],[-.1499,.16],[-.1587,.1588],[-.1665,.1641],[-.1605,.1811],[-.1413,.2],[-.1409,.2246],[-.1315,.232],[-.1165,.2333],[-.1087,.2515],[-.1056,.2521],[-.1037,.2472],[-.108,.235],[-.1166,.2279],[-.1197,.2168],[-.1242,.2135],[-.1135,.2026],[-.1147,.1996],[-.1126,.202],[-.1068,.198],[-.1046,.1893],[-.0989,.188],[-.0976,.1901],[-.1041,.1896],[-.1013,.1939],[-.1023,.2031],[-.1072,.2031],[-.1135,.2147],[-.1113,.2241],[-.1027,.2243],[-.0999,.2162],[-.0952,.2155],[-.0932,.2212],[-.0979,.2226],[-.0963,.2263],[-.0889,.2282],[-.0791,.2239],[-.0712,.2113],[-.0706,.2014],[-.0552,.1937],[-.0601,.1869],[-.068,.1857],[-.072,.1721],[-.077,.1677],[-.0784,.1573],[-.0763,.1676],[-.0655,.1764],[-.0692,.1628],[-.076,.1558],[-.0723,.1514],[-.0719,.1585],[-.0666,.1568],[-.0631,.1599],[-.0626,.1787],[-.0532,.1908],[-.0533,.1971],[-.0585,.2002],[-.0603,.2073],[-.0582,.2121],[-.0653,.2171],[-.0671,.2237],[-.0615,.2344],[-.0636,.2414],[-.0606,.2415],[-.0617,.2453],[-.0571,.2506],[-.0193,.2409],[-.0135,.2436],[-.0055,.2413],[-.0187,.2339],[-.0151,.2187],[-.0178,.2341],[-.007,.2341],[-.001,.2405],[-.0041,.24],[-.0052,.2459],[-.0019,.2454],[-.0102,.2546],[-.005,.2583],[-.0021,.2554],[-.0046,.2536],[-1e-4,.2538],[-.0041,.2596],[-.0019,.2603],[-.0086,.2647],[-.005,.2687],[-2e-4,.2612],[.0045,.2708],[.0068,.2685],[.0091,.2707],[.0035,.2738],[.005,.2759],[.0109,.2723],[.0229,.2808],[.0256,.2783],[.0283,.2815],[.0398,.2805],[.0582,.2847],[.0502,.2857],[.0529,.2908],[.0545,.2881],[.0586,.2886],[.0569,.2911],[.0616,.2879],[.0629,.2908],[.0715,.2888],[.0734,.2869],[.0684,.2822],[.0753,.2848],[.0744,.2809],[.0804,.2849],[.0795,.2818],[.0841,.2829],[.0831,.2856],[.0917,.2898],[.0974,.2832],[.0954,.2758],[.0983,.2844],[.0927,.2967],[.1059,.2962],[.1148,.2913],[.1061,.2966],[.1072,.3083],[.1152,.3194],[.1274,.3284],[.1386,.3238],[.1413,.3183],[.1278,.3105],[.1391,.312],[.1361,.3075],[.1448,.3096],[.1492,.3061],[.1425,.2944],[.1519,.2954],[.1523,.301],[.1726,.3031],[.1807,.2958],[.1786,.2919],[.1811,.2953],[.1848,.2924],[.1846,.2843],[.1893,.2868],[.1863,.2905],[.1884,.2909],[.1915,.2798],[.1938,.2817],[.1939,.2728],[.1923,.271],[.1932,.2744],[.1837,.2786],[.1879,.271],[.1908,.274],[.1949,.2677],[.1833,.2455],[.1676,.2343],[.1707,.2343],[.1697,.2302],[.1571,.2148],[.1498,.214],[.1471,.2062],[.1413,.2042],[.1332,.19],[.1412,.1953],[.1501,.1928],[.1427,.196],[.1435,.2019],[.1597,.2033],[.1589,.2055],[.1682,.2092],[.1662,.2129],[.1705,.2104],[.1794,.2176],[.1773,.2203],[.1698,.2167],[.1718,.2262],[.1793,.2239],[.1834,.2283],[.182,.223],[.191,.2193],[.1952,.2222],[.1937,.2278],[.1995,.2184],[.2008,.1932],[.2089,.1905],[.2003,.1956],[.202,.208],[.2055,.2111],[.2003,.2148],[.205,.2181],[.2148,.2227],[.2391,.2238],[.244,.2221],[.2399,.2208],[.2408,.2141],[.2531,.2089],[.2602,.2081],[.2532,.2106],[.2695,.2135],[.2773,.2113],[.274,.2139],[.2794,.2137],[.2746,.2161],[.2811,.2151],[.2827,.2228],[.2764,.2319],[.2774,.2372],[.2812,.2358],[.2793,.2394],[.2814,.2375],[.2828,.2415],[.2889,.2382],[.2893,.2406],[.2952,.2338],[.2993,.2396],[.3045,.2318],[.3038,.2405],[.3129,.2419],[.3169,.2373],[.3232,.2374],[.3231,.2338],[.3251,.2361],[.3294,.2335],[.321,.2281],[.3211,.2244],[.3307,.2243],[.3205,.2207],[.3333,.2195],[.3382,.2144],[.3349,.2083],[.3226,.2143],[.3228,.2113],[.3384,.1996],[.3363,.2072],[.3436,.2012],[.3384,.1971],[.3497,.1894],[.3512,.1849],[.355,.1864],[.362,.1827],[.362,.1861],[.367,.181],[.3683,.196],[.371,.1974],[.3681,.1985],[.3664,.2179],[.372,.2187],[.3687,.2193],[.368,.2145],[.3743,.2102],[.3826,.2086],[.3882,.2115],[.3905,.2082],[.3888,.2142],[.3932,.221],[.4036,.2234],[.4173,.218],[.4189,.2199],[.4152,.2203],[.4188,.2253],[.4136,.2246],[.4129,.2305],[.417,.2349],[.4237,.2314],[.4292,.2366],[.4216,.2449],[.4168,.2449],[.4191,.255],[.4141,.2494],[.4107,.2507],[.4101,.2589],[.4198,.268],[.4122,.2736],[.4257,.2758],[.4408,.2842],[.4627,.2906],[.4485,.2827],[.4493,.2758],[.4456,.2749],[.4499,.2743],[.464,.29],[.4656,.2749],[.4634,.2829],[.4618,.2797],[.4564,.2817],[.4632,.2757],[.4609,.2719],[.4566,.2725],[.4606,.2707],[.4613,.2652],[.4675,.2751],[.4654,.2918],[.4844,.3009],[.4926,.2974],[.4919,.2932],[.4875,.2944],[.4885,.2903],[.4857,.2894],[.4882,.2864],[.4957,.2927],[.4991,.2878],[.5031,.2933],[.505,.2834],[.5056,.2908],[.5074,.2881],[.508,.2931],[.5133,.2947],[.5226,.292],[.5204,.2883],[.5297,.2898],[.5429,.314],[.545,.3127],[.5449,.3177],[.5583,.3303],[.5703,.3348],[.5867,.3314],[.5882,.3252],[.5968,.319],[.6064,.3254],[.6185,.316],[.624,.3173],[.6305,.3045],[.6264,.3175],[.6153,.3246],[.6132,.3371],[.621,.3514],[.6302,.3543],[.6428,.3696],[.6406,.3814],[.6485,.3815],[.6559,.3771],[.6653,.3837],[.6739,.3814],[.6795,.3897],[.6758,.3898],[.6781,.3916],[.675,.393],[.6746,.3986],[.6585,.4017],[.6559,.3983],[.6541,.4041],[.6442,.4086],[.6579,.425],[.6649,.4263],[.6647,.4294],[.6612,.4291],[.6663,.4334],[.6723,.4492],[.6762,.4503],[.6749,.4524],[.6724,.4498],[.6735,.4529],[.6814,.4556],[.7012,.4739],[.7108,.4773],[.8146,.4342],[.8212,.4128],[.8191,.4159],[.8136,.404],[.8014,.4012],[.7993,.3942],[.8024,.401],[.81,.4005],[.8061,.3924],[.8004,.3902],[.8032,.3844],[.7996,.3695],[.8037,.3842],[.8017,.39],[.8087,.391],[.8115,.3855],[.8093,.3911],[.8137,.3927],[.812,.4033],[.8208,.3985],[.8296,.404],[.8236,.407],[.8358,.4064],[.8365,.4034],[.8369,.4067],[.8472,.4034],[.8465,.3971],[.8484,.4022],[.8531,.3999],[.848,.4033],[.8561,.4026],[.8545,.4007],[.862,.4051],[.8654,.4016],[.8767,.4008],[.8782,.3944],[.8833,.3909],[.872,.382],[.8673,.3737],[.8621,.3784],[.8635,.3739],[.8585,.3737],[.8632,.3704],[.8673,.3727],[.8654,.3655],[.8699,.3435],[.8673,.3442],[.8709,.3349],[.8683,.334],[.8719,.3333],[.8689,.3258],[.8721,.3199],[.8682,.3183],[.8744,.3083],[.8711,.3039],[.8759,.3038],[.8731,.302],[.8765,.2996],[.8741,.2963],[.8788,.2956],[.8747,.2908],[.879,.2911],[.8808,.2876],[.878,.2879],[.8825,.2727],[.8806,.2631],[.8845,.263],[.8915,.2518],[.8675,.2507],[.8589,.2328],[.8593,.2229],[.8563,.2222],[.864,.2031],[.8498,.2161],[.8501,.1962],[.8474,.1943],[.8523,.1941],[.8539,.1863],[.8438,.1881],[.8471,.1802],[.8441,.1829],[.8383,.1774],[.8408,.1782],[.8452,.1635],[.8523,.16],[.8513,.1563],[.8563,.1557],[.8519,.1523],[.8571,.1514],[.8581,.1381],[.8665,.1227],[.8717,.1199],[.8772,.1224],[.8784,.1194],[.8754,.1286],[.8867,.1312],[.8898,.1182],[.9021,.1071],[.907,.1121],[.92,.1033],[.9208,.0962],[.9114,.0943],[.9091,.1058],[.9066,.0959],[.9108,.0955],[.9099,.0853],[.9179,.0719],[.9383,.0606],[.9393,.0513],[.9287,.0396],[.9287,.024],[.9367,.0108],[.9415,.0094],[.9392,.0076],[.9506,.0027],[.9443,.0034],[.9397,-.0184],[.935,-.0164],[.934,-.0191],[.9388,-.019],[.9428,-.0252],[.941,-.0267],[.9458,-.0318],[.9479,-.0303],[.9529,-.0426],[.9546,-.0859],[.9517,-.0802],[.9444,-.0783],[.9185,-.0557],[.9208,-.0541],[.9088,-.0492],[.8578,-.0063],[.837,.0249],[.8322,.053],[.8229,.0589],[.8291,.0668],[.8263,.0731],[.8347,.0792],[.8318,.0802],[.8329,.0992],[.822,.134],[.8204,.1613],[.8161,.1658],[.8168,.1826],[.8191,.1878],[.8208,.1862],[.8209,.1933],[.8161,.1931],[.8127,.2051],[.8084,.2039],[.8053,.2113],[.793,.2224],[.7918,.23],[.8003,.2357],[.7961,.2361],[.7997,.2418],[.7852,.2325],[.7809,.2178],[.7858,.2157],[.7859,.2111],[.7944,.2022],[.7994,.2043],[.801,.199],[.7953,.1991],[.7947,.1959],[.7973,.1963],[.7927,.1941],[.7999,.1593],[.7961,.1561],[.7976,.1503],[.7902,.1617],[.7868,.1531],[.7849,.1585],[.7801,.1589],[.7778,.17],[.77,.178],[.7697,.1648],[.7662,.1678],[.7595,.1643],[.7552,.1516],[.7488,.1466],[.747,.1339],[.7534,.127],[.7522,.1146],[.7563,.1098],[.7537,.0936],[.7573,.0803],[.7552,.0841],[.7543,.0819],[.7585,.0787],[.7562,.0761],[.7633,.0713],[.7601,.0717],[.7632,.0666],[.7707,.0755],[.7792,.0712],[.7709,.0645],[.77,.0572],[.7635,.0585],[.7594,.0545],[.7609,.0427],[.7524,.0409],[.7521,.0336],[.7458,.0263],[.738,.0301],[.7492,.0437],[.7412,.0403],[.7322,.0436],[.7279,.0381],[.7288,.0341],[.7248,.0328],[.7264,.0369],[.7077,.0289],[.7064,.023],[.7113,.0207],[.7058,.0193],[.7061,.0165],[.7078,.0142],[.7105,.0166],[.7123,.0129],[.7063,.0091],[.7014,.0105],[.6968,7e-4],[.6813,-.0031],[.6839,-.0111],[.6815,-.0144],[.6773,-.0139],[.6759,-.0087],[.6442,-.0323],[.6373,-.0455],[.6366,-.0629],[.6316,-.0739],[.6342,-.0901],[.6221,-.1261],[.6239,-.1308],[.6214,-.1304],[.6205,-.1391],[.6238,-.1424],[.6011,-.203],[.6038,-.2077],[.6127,-.2074],[.6272,-.1975],[.6372,-.22],[.6424,-.2149],[.6416,-.2094],[.6369,-.2084],[.6444,-.1988],[.6438,-.2067],[.6408,-.2072],[.6469,-.2091],[.6507,-.2067],[.646,-.2209],[.6486,-.2218],[.6587,-.2118],[.6606,-.2002],[.6619,-.2156],[.6649,-.2134],[.6632,-.1982],[.6577,-.1922],[.6684,-.1896],[.674,-.1829],[.694,-.1925],[.7104,-.1936],[.7117,-.2033],[.7031,-.2045],[.7147,-.206],[.7187,-.2176],[.7286,-.2202],[.7274,-.2489],[.7342,-.2704],[.7405,-.279],[.7441,-.2792],[.7426,-.2868],[.7488,-.2929],[.7509,-.3099],[.754,-.3088],[.7574,-.324],[.7492,-.3735],[.751,-.3991],[.7372,-.4606],[.7327,-.4669],[.7293,-.495],[.7132,-.5216],[.7005,-.5331],[.6959,-.5309],[.6933,-.5342],[.6908,-.5307],[.6879,-.534],[.6836,-.5327],[.6828,-.536],[.679,-.524],[.6733,-.5332],[.6733,-.5259],[.6687,-.5271],[.6642,-.5407],[.6645,-.5523],[.6615,-.5501],[.6526,-.5538],[.658,-.5557],[.6569,-.5631],[.6513,-.5555],[.6469,-.555],[.6589,-.5439],[.6579,-.5302],[.6542,-.5272],[.6512,-.5128],[.6376,-.4947],[.6457,-.4878],[.6498,-.4747],[.6724,-.4744],[.675,-.4704],[.6724,-.4603],[.6764,-.4544],[.6747,-.4395],[.6773,-.4347],[.6708,-.4049],[.6767,-.3903],[.6698,-.3843],[.6697,-.3765],[.6627,-.3761],[.6512,-.3903],[.6436,-.3933],[.6381,-.4005],[.638,-.4079],[.6107,-.4195],[.6022,-.4121],[.5995,-.4004],[.5943,-.3986],[.5944,-.3909],[.5861,-.3938],[.5687,-.3844],[.5631,-.3887],[.5531,-.3845],[.5393,-.3903],[.5321,-.3867],[.5294,-.3753],[.5239,-.3736],[.5196,-.3626],[.5109,-.3563],[.5094,-.3491],[.507,-.351],[.5078,-.3477],[.4949,-.334],[.4957,-.3299],[.4827,-.3207],[.4828,-.3151],[.4638,-.3084],[.4604,-.3124],[.4368,-.306],[.394,-.3256],[.3837,-.3427],[.3855,-.3472],[.3965,-.3461],[.4,-.3574],[.3991,-.3636],[.3913,-.3726],[.3818,-.4109],[.3859,-.4116],[.3867,-.418],[.3754,-.4248],[.3639,-.4396],[.3485,-.4379],[.3319,-.4311],[.3176,-.4368],[.3049,-.4289],[.2964,-.4289],[.2717,-.4538],[.2458,-.4603],[.2344,-.4677],[.1945,-.4648],[.183,-.4558],[.1831,-.4484],[.1693,-.4469],[.1594,-.4381],[.1516,-.4392],[.1356,-.4342],[.1138,-.4432],[.0985,-.4414],[.0814,-.4306],[.0784,-.4077],[.0414,-.3949],[.0251,-.3827],[.0201,-.391],[.0079,-.3999],[.0025,-.4121],[.0055,-.4231],[.0097,-.4264],[.0085,-.4329],[.004,-.4397],[-.0096,-.4463],[-.0319,-.436],[-.0423,-.4376],[-.0578,-.4315],[-.0617,-.4156],[-.0818,-.4109],[-.0834,-.4055],[-.0894,-.4074],[-.0935,-.401],[-.0979,-.4053],[-.1051,-.4039],[-.1122,-.4088],[-.146,-.4165],[-.1466,-.4223],[-.1533,-.4247],[-.1558,-.4226],[-.1612,-.4264],[-.1625,-.4237],[-.1632,-.4265],[-.1749,-.4229],[-.1771,-.4276],[-.1837,-.4289]],[[.8146,.4342],[.7108,.4773],[.7205,.4857],[.726,.4875],[.723,.4861],[.7266,.4849],[.7321,.4902],[.7361,.4881],[.7349,.4925],[.7272,.4882],[.737,.4941],[.7391,.4918],[.7387,.4951],[.7504,.4997],[.7511,.503],[.7475,.5007],[.7533,.5054],[.7581,.5007],[.7614,.5048],[.7564,.5034],[.7545,.5061],[.7602,.5103],[.7681,.5066],[.7686,.5102],[.7655,.5106],[.7712,.5124],[.787,.5081],[.7881,.5045],[.7931,.509],[.7999,.5065],[.7958,.513],[.8027,.511],[.7975,.5162],[.7926,.5111],[.7906,.5155],[.7824,.517],[.7782,.5118],[.779,.5223],[.7823,.5277],[.7879,.5235],[.7837,.5273],[.7869,.5343],[.7826,.5286],[.7877,.5413],[.8078,.5511],[.8097,.5479],[.8087,.5521],[.8117,.5533],[.8115,.5507],[.816,.5576],[.82,.5454],[.8272,.5438],[.8192,.5357],[.8301,.5377],[.8278,.5265],[.8278,.53],[.8254,.5246],[.822,.5252],[.8197,.5191],[.8241,.5234],[.8282,.5222],[.8274,.5259],[.8338,.523],[.8325,.5172],[.8345,.5226],[.8387,.5229],[.8446,.5079],[.8444,.5123],[.8507,.5085],[.852,.5143],[.8567,.5159],[.8568,.5113],[.8527,.5089],[.8576,.5081],[.8591,.5041],[.8572,.5014],[.848,.5038],[.8541,.5022],[.8552,.4987],[.8417,.4905],[.837,.4921],[.8382,.4823],[.8307,.4793],[.8179,.4817],[.8108,.473],[.8139,.4665],[.8095,.4554],[.8032,.4583],[.7923,.456],[.7943,.4587],[.7852,.4648],[.7899,.4593],[.782,.458],[.7853,.4566],[.7829,.4545],[.7888,.4541],[.7862,.4499],[.7956,.4451],[.8051,.4474],[.8146,.4342]],[[.7119,-.1596],[.7127,-.1548],[.7208,-.1593],[.7225,-.167],[.7443,-.1865],[.7486,-.2016],[.762,-.2203],[.7623,-.2159],[.7654,-.2184],[.7879,-.244],[.8149,-.2677],[.8269,-.2741],[.8073,-.2667],[.7931,-.2713],[.8004,-.2692],[.7931,-.2804],[.8048,-.318],[.812,-.3243],[.8194,-.3257],[.8269,-.3358],[.8326,-.3361],[.8279,-.3342],[.8322,-.331],[.8416,-.3406],[.8433,-.3512],[.8349,-.339],[.825,-.344],[.8204,-.3428],[.8227,-.3683],[.8096,-.3554],[.8067,-.3404],[.7976,-.3276],[.7964,-.3167],[.78,-.3002],[.7747,-.2808],[.7583,-.255],[.7538,-.2392],[.7363,-.2291],[.7383,-.228],[.7337,-.2262],[.7276,-.2156],[.7218,-.1959],[.7146,-.1888],[.719,-.1808],[.7215,-.1842],[.7241,-.1825],[.7252,-.1768],[.7207,-.1753],[.7244,-.1717],[.7214,-.1687],[.7216,-.1734],[.7194,-.1665],[.7085,-.1618],[.7119,-.1596]],[[-.1873,.3749],[-.1909,.383],[-.1836,.3816],[-.1849,.3894],[-.181,.3899],[-.1817,.3849],[-.1725,.3886],[-.1705,.3838],[-.1682,.3884],[-.1633,.3868],[-.162,.3895],[-.1443,.3854],[-.1424,.3879],[-.1393,.3857],[-.1421,.3837],[-.1351,.3879],[-.1288,.3821],[-.1299,.3796],[-.1154,.3751],[-.1074,.3762],[-.1055,.3733],[-.1025,.3783],[-.0898,.3784],[-.0851,.3705],[-.0894,.3631],[-.0976,.3589],[-.1231,.3608],[-.1336,.3628],[-.133,.3651],[-.1532,.3638],[-.1523,.367],[-.161,.3633],[-.1601,.3659],[-.1657,.3666],[-.1632,.3613],[-.1687,.3596],[-.1719,.3644],[-.1747,.3588],[-.1753,.3652],[-.1808,.3589],[-.1833,.3665],[-.1872,.3568],[-.1899,.3587],[-.1955,.3548],[-.1954,.3625],[-.1983,.3613],[-.1981,.3545],[-.2028,.3515],[-.206,.3613],[-.203,.3557],[-.2047,.3511],[-.2085,.3502],[-.2093,.3561],[-.2103,.3495],[-.2179,.3475],[-.2207,.3518],[-.2185,.3561],[-.2213,.3534],[-.224,.3619],[-.2301,.3634],[-.2265,.367],[-.216,.3646],[-.2241,.3684],[-.2241,.3751],[-.2136,.3725],[-.2082,.3752],[-.2052,.3693],[-.2059,.3767],[-.2022,.3734],[-.2006,.3785],[-.1952,.3745],[-.1976,.3785],[-.1955,.3818],[-.1873,.3749]],[[-.2783,.3526],[-.271,.3565],[-.2672,.3513],[-.2623,.3549],[-.2585,.3532],[-.2564,.357],[-.2518,.3565],[-.2547,.358],[-.2529,.3593],[-.2501,.3567],[-.2529,.3634],[-.2487,.3644],[-.2441,.3602],[-.2373,.3668],[-.2243,.3613],[-.2202,.3489],[-.2214,.346],[-.2271,.3492],[-.2251,.3448],[-.2303,.3483],[-.2265,.3448],[-.2297,.3421],[-.2343,.346],[-.2345,.3406],[-.2358,.3431],[-.239,.3401],[-.2401,.343],[-.2409,.3392],[-.2438,.3413],[-.2421,.3389],[-.2463,.3336],[-.254,.3304],[-.2625,.3117],[-.2634,.2913],[-.2671,.29],[-.2694,.2964],[-.2685,.29],[-.2718,.2956],[-.2699,.2987],[-.2738,.2992],[-.273,.2945],[-.2759,.3024],[-.277,.2986],[-.2773,.3061],[-.2829,.3038],[-.2813,.3135],[-.2834,.3083],[-.2877,.3196],[-.2817,.3254],[-.2767,.321],[-.2784,.3289],[-.2713,.3295],[-.2776,.3301],[-.2725,.3343],[-.279,.3352],[-.2757,.3419],[-.2799,.3398],[-.2783,.3428],[-.2806,.3407],[-.2836,.3432],[-.2783,.3526]],[[.3972,.3542],[.3984,.3369],[.3898,.335],[.3838,.3387],[.3812,.3483],[.3771,.3462],[.3769,.3425],[.3863,.3345],[.3981,.3336],[.3931,.326],[.3861,.3274],[.378,.3165],[.3731,.3185],[.3748,.3087],[.3659,.3081],[.3518,.3156],[.3533,.3202],[.3463,.3271],[.35,.33],[.3452,.3338],[.3503,.3462],[.3603,.3403],[.3656,.3408],[.3678,.3371],[.371,.3395],[.3644,.3482],[.3684,.3501],[.3639,.3529],[.376,.3501],[.3843,.355],[.3972,.3542]],[[.106,.3659],[.1028,.3601],[.092,.3611],[.0892,.3663],[.0791,.3701],[.0785,.3818],[.0753,.3818],[.077,.3856],[.0728,.3817],[.0715,.3853],[.0821,.3906],[.0803,.3933],[.0849,.3983],[.0858,.3958],[.0979,.3983],[.0998,.3948],[.0942,.3856],[.1021,.3946],[.1087,.3874],[.1057,.3738],[.1022,.3734],[.106,.3659]],[[-.8574,.4266],[-.8648,.4783],[-.8501,.4767],[-.8484,.4688],[-.8389,.4645],[-.8485,.4679],[-.8486,.4584],[-.8373,.4575],[-.842,.4445],[-.8395,.4364],[-.8446,.43],[-.8574,.4266]],[[.1358,.3519],[.1322,.3451],[.1198,.3406],[.1114,.3419],[.1001,.3363],[.108,.3577],[.1123,.3576],[.1113,.3639],[.1152,.3637],[.1124,.368],[.116,.3741],[.119,.3706],[.1195,.3759],[.1238,.3723],[.1191,.3589],[.1262,.3684],[.1358,.3519]],[[.1007,.4138],[.0976,.4121],[.0961,.4002],[.0785,.3964],[.0715,.4028],[.0754,.4019],[.0724,.4059],[.0778,.4053],[.0693,.4071],[.0755,.4081],[.0725,.4107],[.0769,.4114],[.0808,.4185],[.0772,.418],[.0786,.4213],[.093,.4283],[.0913,.43],[.0943,.43],[.1007,.4138]]]},az:{w:2,h:1.5625,cap:[.7418,.1264],polys:[[[-.9002,.5242],[-.8154,.5905],[-.7936,.5931],[-.7664,.5797],[-.7436,.5822],[-.7282,.566],[-.6806,.546],[-.6511,.5377],[-.6507,.5349],[-.6633,.5298],[-.671,.5207],[-.6633,.5078],[-.6266,.4807],[-.5771,.4616],[-.561,.4592],[-.5462,.4622],[-.5286,.473],[-.4958,.4743],[-.4898,.4721],[-.4555,.436],[-.4287,.4249],[-.414,.4071],[-.4006,.4035],[-.3918,.4222],[-.3846,.4266],[-.365,.425],[-.3584,.4341],[-.3501,.4757],[-.3415,.4854],[-.3396,.4996],[-.3328,.5031],[-.3349,.5096],[-.3538,.5372],[-.3617,.537],[-.3669,.5495],[-.4156,.5739],[-.431,.5887],[-.459,.6048],[-.4646,.6123],[-.4703,.6427],[-.4782,.6596],[-.4828,.6595],[-.4898,.6497],[-.4986,.6574],[-.5025,.6775],[-.4989,.7154],[-.4923,.7222],[-.4695,.719],[-.4572,.7221],[-.4377,.7437],[-.4173,.7812],[-.3859,.7772],[-.38,.7735],[-.3801,.7469],[-.3783,.7393],[-.3725,.7343],[-.3662,.7343],[-.3494,.7473],[-.3291,.7523],[-.3145,.7624],[-.3055,.7286],[-.2838,.7081],[-.2614,.7001],[-.257,.6859],[-.2361,.6654],[-.2279,.6519],[-.2204,.6302],[-.1935,.6358],[-.1822,.6279],[-.1763,.6061],[-.1671,.598],[-.1627,.5851],[-.1499,.5667],[-.1495,.5324],[-.1403,.5163],[-.1045,.4968],[-.0624,.4908],[-.0469,.4726],[-.04,.4725],[-.0216,.483],[.0191,.4668],[.0476,.4694],[.0698,.4787],[.0689,.5073],[.0813,.5208],[.0893,.5397],[.0979,.5382],[.1055,.5425],[.1227,.5869],[.1337,.5938],[.1722,.6015],[.2282,.6406],[.2358,.649],[.2561,.7007],[.2967,.7595],[.3224,.7398],[.3637,.6878],[.3705,.6701],[.3937,.6446],[.4068,.6171],[.4193,.6089],[.4376,.5805],[.4487,.5766],[.4538,.5691],[.4861,.5074],[.4931,.4591],[.5015,.4424],[.5077,.4106],[.5243,.3841],[.5655,.3388],[.5721,.3266],[.595,.3113],[.6025,.3134],[.6258,.2926],[.6167,.2527],[.6271,.2328],[.6445,.2203],[.6659,.2181],[.6904,.2015],[.7221,.1953],[.7363,.1962],[.763,.2062],[.8016,.2058],[.8217,.1808],[.8656,.1682],[.8794,.142],[.8937,.1355],[.9054,.1201],[.9203,.047],[.8972,.08],[.8727,.097],[.83,.1059],[.8054,.1019],[.7883,.0893],[.7814,.0891],[.7716,.1011],[.7502,.1083],[.7325,.094],[.7351,.0835],[.7258,.0734],[.7121,.0658],[.6896,.0602],[.6442,.0379],[.6159,.0093],[.6178,-.0172],[.5995,-.0248],[.5962,-.0317],[.6021,-.0497],[.6144,-.0645],[.5981,-.0787],[.5943,-.0887],[.6015,-.1163],[.5926,-.1297],[.5946,-.1446],[.5857,-.1572],[.5865,-.1689],[.5962,-.1895],[.5828,-.1984],[.5607,-.2295],[.5612,-.2372],[.5501,-.274],[.5542,-.2943],[.5868,-.3231],[.5939,-.3338],[.5903,-.3523],[.5938,-.3618],[.5797,-.3499],[.5842,-.3637],[.5941,-.3771],[.5863,-.3754],[.5768,-.3637],[.5589,-.3523],[.5475,-.3569],[.5388,-.3686],[.5355,-.3829],[.5365,-.4317],[.5278,-.467],[.5256,-.4923],[.5225,-.5003],[.4967,-.5191],[.4831,-.5246],[.4734,-.5169],[.4747,-.505],[.4987,-.4954],[.5058,-.4796],[.506,-.4706],[.5019,-.4623],[.495,-.4588],[.4784,-.4586],[.4746,-.4312],[.4684,-.4262],[.443,-.4268],[.4362,-.452],[.432,-.4535],[.433,-.4853],[.4387,-.4948],[.4286,-.5379],[.4208,-.5569],[.4103,-.5701],[.3977,-.567],[.399,-.5901],[.4093,-.6179],[.415,-.7618],[.3812,-.7575],[.3484,-.7787],[.322,-.7799],[.2605,-.7028],[.2539,-.6814],[.2457,-.6815],[.228,-.6899],[.2173,-.6897],[.1885,-.6622],[.1865,-.6357],[.1359,-.6094],[.1132,-.5914],[.1063,-.5787],[.1054,-.5603],[.1268,-.5439],[.1289,-.5347],[.1929,-.523],[.2103,-.5092],[.2148,-.491],[.2023,-.463],[.1772,-.4498],[.1574,-.4307],[.1442,-.4068],[.1448,-.3915],[.1511,-.3788],[.161,-.3691],[.1726,-.363],[.1942,-.3586],[.2123,-.3461],[.2249,-.342],[.2073,-.3126],[.1835,-.2909],[.1254,-.2215],[.0976,-.1973],[.0927,-.1961],[.081,-.2065],[.0467,-.2083],[.02,-.2335],[-.0276,-.2604],[-.0503,-.282],[-.0821,-.291],[-.0966,-.299],[-.1366,-.3422],[-.2021,-.3736],[-.2307,-.4263],[-.2539,-.4392],[-.2729,-.434],[-.2842,-.4368],[-.3053,-.4647],[-.3165,-.4722],[-.3268,-.4922],[-.3591,-.513],[-.3828,-.5507],[-.3939,-.5586],[-.4077,-.5618],[-.4208,-.5309],[-.4136,-.4977],[-.4142,-.4726],[-.4183,-.4578],[-.4468,-.4353],[-.4469,-.4215],[-.4388,-.4142],[-.4268,-.4159],[-.4059,-.4269],[-.3854,-.4151],[-.3751,-.4134],[-.379,-.4064],[-.4041,-.3848],[-.4116,-.3645],[-.4529,-.3395],[-.4574,-.3254],[-.4527,-.3139],[-.4417,-.3073],[-.4121,-.3009],[-.4095,-.2935],[-.4116,-.2814],[-.4024,-.2747],[-.4002,-.2617],[-.41,-.2521],[-.4441,-.2513],[-.4619,-.2323],[-.4737,-.2312],[-.4973,-.2429],[-.5093,-.2452],[-.5169,-.2427],[-.5345,-.2161],[-.5534,-.2086],[-.564,-.1998],[-.5767,-.1726],[-.5859,-.1632],[-.6258,-.1463],[-.641,-.1306],[-.6581,-.0932],[-.6653,-.0848],[-.6746,-.0799],[-.7102,-.0754],[-.7209,-.0703],[-.7217,-.0597],[-.6998,-.0461],[-.6438,-.0567],[-.6199,-.0548],[-.6128,-.0463],[-.607,-.0225],[-.5926,-.0074],[-.5883,.0034],[-.582,.0399],[-.6002,.0593],[-.6217,.0575],[-.6361,.0741],[-.7143,.1209],[-.734,.1403],[-.7471,.1693],[-.7571,.1778],[-.7602,.1969],[-.779,.2167],[-.7836,.2272],[-.783,.2462],[-.7741,.261],[-.7606,.2715],[-.7203,.2898],[-.7111,.2998],[-.7043,.318],[-.7047,.3279],[-.7252,.3343],[-.7444,.3589],[-.7652,.3734],[-.7619,.3878],[-.7637,.3984],[-.773,.3976],[-.7921,.3887],[-.7998,.3901],[-.8302,.3989],[-.8635,.429],[-.867,.4156],[-.8806,.4216],[-.8847,.4292],[-.8807,.4434],[-.8475,.4411],[-.8357,.4492],[-.8359,.4563],[-.8573,.4771],[-.8906,.4825],[-.8923,.4881],[-.8886,.4974],[-.9002,.5242]],[[-.5392,-.568],[-.5627,-.563],[-.5855,-.5521],[-.6584,-.5352],[-.6839,-.5245],[-.7148,-.5235],[-.7483,-.5165],[-.7799,-.5001],[-.7843,-.4905],[-.7808,-.4784],[-.7938,-.4689],[-.7993,-.4519],[-.8107,-.4394],[-.8076,-.4329],[-.8094,-.4281],[-.8221,-.4222],[-.8218,-.4114],[-.8316,-.4145],[-.8673,-.4015],[-.8764,-.4041],[-.8814,-.3749],[-.8944,-.3466],[-.9091,-.3257],[-.9243,-.3114],[-.9325,-.3101],[-.941,-.3035],[-.9392,-.2949],[-.9502,-.2792],[-.963,-.2262],[-.97,-.2208],[-.9676,-.2175],[-.9889,-.2115],[-1,-.1818],[-.9901,-.1778],[-.9473,-.1737],[-.9232,-.1584],[-.9102,-.1544],[-.8987,-.1606],[-.8711,-.2014],[-.8733,-.2426],[-.8667,-.2471],[-.854,-.2445],[-.844,-.2356],[-.8347,-.2328],[-.8172,-.2627],[-.796,-.2668],[-.7758,-.2838],[-.7604,-.2805],[-.723,-.2599],[-.6786,-.2502],[-.6707,-.2502],[-.6536,-.2599],[-.6506,-.2656],[-.6494,-.3049],[-.6654,-.3397],[-.6627,-.3465],[-.6432,-.352],[-.6217,-.3718],[-.5972,-.3845],[-.5881,-.3949],[-.5882,-.4015],[-.5991,-.4153],[-.6014,-.4267],[-.5985,-.4384],[-.5759,-.478],[-.5588,-.5289],[-.5392,-.568]]]},kg:{w:2,h:.9716,cap:[-.0092,.3914],polys:[[[.9897,.2587],[.9932,.2436],[.9995,.234],[.9958,.2216],[.9872,.218],[.9425,.2158],[.9272,.2097],[.9222,.2036],[.9179,.1859],[.9119,.1795],[.8877,.1752],[.8496,.1502],[.8301,.1518],[.8153,.138],[.7965,.1306],[.777,.115],[.7663,.1124],[.7475,.0984],[.7213,.0861],[.7148,.0727],[.6955,.0662],[.6692,.0466],[.6659,.0384],[.6701,.025],[.6684,.0208],[.6555,.0103],[.6412,-.017],[.6211,-.0366],[.5767,-.0326],[.5445,-.0495],[.5181,-.0543],[.4869,-.0457],[.4707,-.0498],[.4482,-.049],[.4279,-.0417],[.4015,-.0498],[.3848,-.0667],[.3845,-.0901],[.3642,-.1103],[.36,-.1473],[.3485,-.1585],[.3346,-.1899],[.3082,-.2116],[.3025,-.2098],[.2975,-.1911],[.2921,-.1895],[.2754,-.2073],[.2571,-.2023],[.2409,-.2104],[.23,-.2246],[.2062,-.2222],[.1897,-.2268],[.1815,-.2042],[.1866,-.1888],[.1775,-.1784],[.1751,-.1603],[.1666,-.1451],[.1524,-.1497],[.1001,-.1916],[.0899,-.1862],[.0765,-.1911],[.0651,-.1903],[.0426,-.1765],[.0346,-.1749],[.0259,-.1968],[.038,-.2116],[.0395,-.2195],[.0109,-.2182],[-.0148,-.2385],[-.0311,-.2563],[-.0574,-.2751],[-.088,-.2719],[-.106,-.281],[-.1181,-.2826],[-.1251,-.2892],[-.1293,-.3043],[-.1388,-.3167],[-.1412,-.3294],[-.152,-.3436],[-.1509,-.3577],[-.1392,-.3666],[-.1333,-.3948],[-.1438,-.4058],[-.1481,-.4195],[-.1532,-.4246],[-.1882,-.429],[-.217,-.4246],[-.2373,-.4294],[-.2419,-.4324],[-.2452,-.4419],[-.2748,-.45],[-.2927,-.4459],[-.3042,-.451],[-.3256,-.4469],[-.3365,-.4485],[-.3737,-.4385],[-.3847,-.4467],[-.3951,-.4425],[-.4031,-.4494],[-.4186,-.4478],[-.433,-.4527],[-.4502,-.4858],[-.4546,-.4733],[-.4745,-.4644],[-.4772,-.4496],[-.4822,-.4417],[-.4992,-.4467],[-.528,-.4633],[-.5384,-.4626],[-.5455,-.4511],[-.5381,-.4373],[-.539,-.4207],[-.5455,-.4179],[-.5735,-.4205],[-.5811,-.4167],[-.5846,-.4082],[-.5768,-.3942],[-.5803,-.3866],[-.5896,-.3796],[-.6066,-.3839],[-.6294,-.4015],[-.6421,-.3989],[-.6578,-.4008],[-.664,-.4046],[-.6748,-.4253],[-.6809,-.4281],[-.6943,-.4213],[-.7194,-.4295],[-.7298,-.4251],[-.7315,-.4073],[-.7394,-.4017],[-.7449,-.3847],[-.7492,-.381],[-.7625,-.3809],[-.7712,-.3744],[-.7887,-.3808],[-.7987,-.3798],[-.8191,-.3917],[-.8223,-.3903],[-.8198,-.3743],[-.8221,-.3674],[-.8324,-.3825],[-.8523,-.3768],[-.8642,-.3856],[-.8771,-.3815],[-.8916,-.3837],[-.9207,-.372],[-.9369,-.3721],[-.9569,-.3813],[-.969,-.3818],[-.9779,-.3746],[-.9898,-.3828],[-.9921,-.3769],[-.9898,-.3438],[-1,-.3255],[-.9962,-.307],[-.9804,-.2699],[-.9728,-.277],[-.9649,-.2928],[-.9469,-.2875],[-.9525,-.2624],[-.941,-.2391],[-.9367,-.2446],[-.9308,-.2449],[-.8571,-.2231],[-.8507,-.2241],[-.8255,-.2427],[-.8083,-.2446],[-.7938,-.2587],[-.7574,-.271],[-.7557,-.2754],[-.7587,-.2806],[-.7677,-.2858],[-.7722,-.2934],[-.7717,-.3008],[-.7678,-.3024],[-.763,-.2931],[-.7489,-.291],[-.7418,-.2857],[-.7359,-.2597],[-.7308,-.2553],[-.7189,-.2519],[-.707,-.2427],[-.6818,-.2416],[-.6755,-.2372],[-.6722,-.2315],[-.6757,-.2255],[-.6688,-.2191],[-.6311,-.2213],[-.6209,-.2071],[-.6157,-.2136],[-.6008,-.2152],[-.5871,-.2237],[-.5809,-.2336],[-.573,-.238],[-.5599,-.2397],[-.5529,-.2255],[-.5474,-.2339],[-.5457,-.2524],[-.542,-.2541],[-.5265,-.2453],[-.5149,-.2291],[-.4815,-.2324],[-.4812,-.2279],[-.4923,-.2209],[-.4924,-.2139],[-.4713,-.2016],[-.4655,-.1881],[-.4531,-.1817],[-.4403,-.1808],[-.4353,-.1827],[-.4361,-.1851],[-.4449,-.1889],[-.4344,-.1896],[-.4162,-.1993],[-.408,-.1935],[-.4055,-.1819],[-.4166,-.1688],[-.4151,-.158],[-.4182,-.1473],[-.4127,-.145],[-.4009,-.1577],[-.3887,-.1616],[-.3761,-.1708],[-.3688,-.1705],[-.3614,-.1545],[-.3514,-.1579],[-.3461,-.1555],[-.3436,-.1396],[-.3391,-.133],[-.2864,-.1118],[-.272,-.0997],[-.2729,-.0949],[-.2892,-.094],[-.2981,-.0857],[-.3226,-.0977],[-.3226,-.0866],[-.3608,-.085],[-.3678,-.0818],[-.3807,-.0631],[-.3919,-.0594],[-.3919,-.0502],[-.4076,-.0466],[-.4186,-.0341],[-.4266,-.0457],[-.4494,-.0509],[-.4452,-.0363],[-.4493,-.0056],[-.4582,-.0033],[-.472,-.0124],[-.482,-.0028],[-.4964,-.0048],[-.501,-.0024],[-.5043,.0331],[-.5217,.0604],[-.5262,.0538],[-.5306,.0594],[-.5351,.0543],[-.5314,.0706],[-.5342,.0836],[-.5421,.0828],[-.5483,.0712],[-.5413,.0559],[-.5515,.0304],[-.5629,.0243],[-.5814,.0372],[-.5839,-.0156],[-.5881,-.0189],[-.6,-.0077],[-.6093,-.018],[-.615,-.0029],[-.6212,7e-4],[-.625,-.0012],[-.6267,-.0185],[-.6365,-.006],[-.654,.0023],[-.6739,.0039],[-.6887,.0181],[-.6993,.016],[-.7015,.0236],[-.6983,.0433],[-.7152,.0727],[-.7545,.0588],[-.7636,.0735],[-.773,.081],[-.8046,.0889],[-.8075,.0969],[-.8034,.1029],[-.7508,.1324],[-.7405,.1495],[-.7138,.1727],[-.684,.1791],[-.6772,.2054],[-.6536,.2077],[-.6276,.2255],[-.606,.2336],[-.6029,.2424],[-.6333,.2638],[-.6445,.2659],[-.6567,.2569],[-.6654,.2605],[-.6729,.2715],[-.658,.2877],[-.6581,.2964],[-.6518,.3095],[-.649,.312],[-.638,.3057],[-.6337,.3093],[-.6422,.3231],[-.6435,.3321],[-.6214,.3377],[-.615,.3608],[-.6053,.3646],[-.5958,.3758],[-.5809,.3726],[-.5704,.3847],[-.5529,.3828],[-.5423,.3746],[-.5194,.3869],[-.4921,.3913],[-.4474,.3698],[-.4369,.373],[-.4143,.3714],[-.3823,.3516],[-.3385,.3434],[-.329,.3354],[-.3232,.3239],[-.3128,.3167],[-.3009,.3145],[-.2703,.3175],[-.2573,.31],[-.2375,.3064],[-.2334,.2875],[-.2018,.2808],[-.2167,.3178],[-.2173,.3349],[-.2007,.3747],[-.2022,.399],[-.188,.4317],[-.1466,.4511],[-.1297,.4548],[-.1237,.4712],[-.1184,.4753],[-.1054,.4668],[-.0778,.4699],[-.0744,.475],[-.081,.4858],[-.0423,.461],[-.0147,.4503],[-.0054,.4366],[.0126,.4226],[.0388,.4168],[.0944,.3867],[.1609,.3813],[.1723,.3767],[.187,.3829],[.1984,.4058],[.2031,.4084],[.2139,.4094],[.2386,.4045],[.2501,.4085],[.2835,.406],[.2988,.4016],[.3062,.4038],[.3118,.398],[.3233,.4058],[.3418,.4008],[.3633,.4058],[.385,.4203],[.4066,.4249],[.4362,.4185],[.4461,.4078],[.4725,.4048],[.4882,.4113],[.5028,.4099],[.5129,.4038],[.5286,.4095],[.5402,.4094],[.5521,.407],[.5574,.4013],[.5702,.407],[.5964,.3988],[.6313,.4026],[.6458,.3997],[.6663,.4078],[.6955,.4018],[.7124,.3916],[.7337,.3904],[.7668,.3828],[.7937,.3923],[.7996,.3888],[.7995,.374],[.8056,.3605],[.8325,.3429],[.8467,.3177],[.8728,.3144],[.8947,.3181],[.9344,.3119],[.9643,.2851],[.9816,.2629],[.9897,.2587]]]},am:{w:1.9988,h:2,cap:[-.3352,.0837],polys:[[[-.0243,1],[-.0013,.951],[-.0076,.9336],[-.0042,.9234],[.0065,.9188],[.0471,.9188],[.0577,.9153],[.0903,.8898],[.0984,.878],[.0993,.8649],[.0779,.8492],[.0164,.8517],[.0098,.8252],[.0178,.8114],[.0313,.8023],[.0433,.801],[.0489,.8259],[.0592,.8204],[.1123,.7722],[.1416,.7688],[.169,.7576],[.1832,.7553],[.2182,.773],[.2354,.775],[.2392,.7554],[.2339,.7287],[.2416,.7204],[.2566,.7165],[.2732,.7029],[.3101,.6585],[.3375,.6535],[.3484,.6479],[.3497,.6296],[.3382,.5955],[.3218,.5766],[.2482,.5405],[.2238,.5202],[.2081,.4923],[.2082,.4572],[.2172,.438],[.2531,.4026],[.26,.3673],[.2789,.3522],[.3048,.2993],[.3423,.2646],[.4896,.1823],[.5171,.1524],[.5568,.1569],[.5751,.1433],[.5916,.1221],[.5929,.1075],[.582,.0543],[.5745,.034],[.5488,.0052],[.5394,-.0392],[.5267,-.0553],[.4826,-.06],[.3785,-.0435],[.3386,-.0698],[.3407,-.0894],[.3609,-.0984],[.427,-.1047],[.4443,-.1132],[.4582,-.1283],[.492,-.1965],[.5208,-.2248],[.5554,-.2422],[.5956,-.2539],[.6132,-.2707],[.6382,-.3202],[.6584,-.3361],[.6936,-.3488],[.7182,-.3882],[.7276,-.397],[.7418,-.4013],[.7639,-.3963],[.807,-.3734],[.8288,-.3747],[.8629,-.4088],[.9259,-.4084],[.9366,-.4152],[.9446,-.4257],[.9467,-.4393],[.9412,-.4499],[.9246,-.4627],[.9247,-.4764],[.9292,-.485],[.9291,-.4928],[.9248,-.4989],[.8704,-.5124],[.8504,-.5252],[.8423,-.5466],[.8515,-.5724],[.8726,-.5884],[.9189,-.6082],[.9292,-.6165],[.9442,-.6535],[.9599,-.6696],[.9918,-.6922],[.9994,-.7049],[.9804,-.7086],[.9511,-.7303],[.9432,-.7316],[.904,-.7124],[.8815,-.7098],[.867,-.7239],[.868,-.7493],[.8846,-.7654],[.9218,-.7895],[.9304,-.8165],[.9343,-.8398],[.9328,-.863],[.9214,-.9044],[.9213,-.9247],[.9473,-.9812],[.8594,-.9475],[.8371,-.9538],[.8037,-.9572],[.7471,-.9938],[.7043,-1],[.666,-.9288],[.6315,-.8356],[.6182,-.8096],[.5875,-.7636],[.5815,-.742],[.5852,-.7209],[.6047,-.6947],[.6044,-.6825],[.5869,-.6637],[.5409,-.6417],[.5,-.6062],[.4637,-.5972],[.4583,-.5848],[.4622,-.5682],[.4834,-.5326],[.4861,-.5195],[.48,-.4818],[.4816,-.4467],[.4758,-.4364],[.4613,-.4261],[.4437,-.4194],[.4289,-.4198],[.3474,-.4403],[.3304,-.4475],[.2793,-.4805],[.2655,-.4871],[.2511,-.4875],[.2239,-.4629],[.2127,-.4571],[.1733,-.4507],[.1393,-.3963],[.1223,-.4022],[.1043,-.4191],[.0808,-.4247],[.0683,-.4167],[.0658,-.4046],[.073,-.3556],[.0702,-.3403],[.0637,-.3265],[.0168,-.2664],[-.0048,-.2556],[-.0286,-.2638],[-.0724,-.2933],[-.094,-.2984],[-.1218,-.298],[-.1513,-.3033],[-.1694,-.3112],[-.2215,-.2365],[-.2276,-.233],[-.2379,-.2336],[-.2496,-.2264],[-.2725,-.1997],[-.281,-.2049],[-.2854,-.1827],[-.3002,-.1701],[-.3055,-.1503],[-.3287,-.1199],[-.3651,-.0877],[-.4525,-.0356],[-.4756,-.0282],[-.497,-.028],[-.5729,-.0447],[-.5924,-.0332],[-.6059,-.0367],[-.6382,-.0553],[-.7141,-.0415],[-.7828,-.0022],[-.8404,.0151],[-.8691,.0316],[-.8769,.0555],[-.868,.0636],[-.8393,.0694],[-.833,.08],[-.8628,.1286],[-.8511,.1375],[-.8605,.1602],[-.8879,.1972],[-.9047,.2136],[-.9109,.2266],[-.9009,.2492],[-.8904,.288],[-.9286,.3255],[-.931,.3364],[-.9091,.3617],[-.8954,.3709],[-.8805,.3725],[-.885,.3844],[-.8719,.378],[-.8722,.3978],[-.8636,.4148],[-.8366,.4456],[-.8411,.4644],[-.8219,.4993],[-.8263,.5702],[-.8634,.6443],[-.87,.6956],[-.8769,.7119],[-.8961,.7369],[-.9203,.7577],[-.9469,.7717],[-.9735,.776],[-.9852,.7875],[-.9947,.8113],[-.9994,.8377],[-.9965,.8569],[-.9841,.855],[-.9441,.8694],[-.9177,.87],[-.8164,.8541],[-.8012,.8551],[-.789,.8601],[-.7596,.8853],[-.7328,.8961],[-.6752,.8966],[-.6469,.9032],[-.6218,.9142],[-.6094,.9154],[-.5831,.9077],[-.57,.91],[-.5479,.9261],[-.5425,.9473],[-.535,.9525],[-.5116,.9454],[-.4818,.9241],[-.4703,.9196],[-.4557,.922],[-.4403,.9355],[-.4329,.9378],[-.4252,.9369],[-.3922,.9164],[-.3647,.9103],[-.3496,.9146],[-.3329,.9317],[-.3262,.9318],[-.3174,.9108],[-.3047,.9071],[-.2955,.9152],[-.2797,.939],[-.2664,.945],[-.2278,.9327],[-.1204,.9327],[-.1142,.9414],[-.1208,.9508],[-.1441,.9621],[-.1492,.9738],[-.1371,.986],[-.0772,.9763],[-.0537,.9771],[-.0243,1]],[[.2962,.4322],[.2746,.4386],[.2708,.4465],[.2708,.4637],[.2744,.4719],[.2822,.4777],[.3091,.4793],[.3255,.4701],[.3171,.4485],[.2962,.4322]]]},md:{w:1.573,h:2,cap:[.205,.0236],polys:[[[-.7865,.8569],[-.783,.8726],[-.778,.8805],[-.7633,.8893],[-.7582,.9034],[-.7497,.8998],[-.7341,.8775],[-.726,.8736],[-.7173,.8741],[-.7122,.8785],[-.7102,.8995],[-.7148,.9262],[-.7101,.9326],[-.6975,.9295],[-.6906,.9424],[-.6858,.9439],[-.6714,.9371],[-.6423,.915],[-.6256,.9176],[-.6214,.9219],[-.6027,.9202],[-.6058,.9398],[-.6053,.9446],[-.6004,.9462],[-.5401,.9202],[-.5257,.9192],[-.5089,.9276],[-.4823,.9602],[-.4663,.9683],[-.4579,.966],[-.4397,.9516],[-.4054,.9776],[-.3952,.9913],[-.3771,.9911],[-.3604,1],[-.3509,.9986],[-.3502,.9813],[-.3414,.9768],[-.2867,.9768],[-.2721,.9698],[-.2374,.9414],[-.2106,.9019],[-.1928,.8949],[-.1537,.8898],[-.1448,.8854],[-.1376,.8769],[-.1352,.865],[-.1439,.8392],[-.1375,.8342],[-.1209,.8356],[-.1072,.8472],[-.1,.8482],[-.0953,.8246],[-.0906,.8171],[-.0831,.8147],[-.0728,.817],[-.049,.8334],[-.0211,.8348],[-.0165,.8295],[-.0187,.8033],[-.0368,.7849],[-.0389,.7665],[-.034,.761],[-.0248,.7628],[-.0075,.7885],[.0026,.7899],[.0095,.785],[.0137,.7761],[.0132,.7661],[.0059,.7579],[.0184,.7318],[.0326,.72],[.0373,.7204],[.0421,.7517],[.0501,.7757],[.0599,.7802],[.074,.7796],[.1146,.7628],[.1612,.7598],[.1736,.7515],[.1864,.7153],[.1887,.6941],[.211,.6625],[.2412,.635],[.2547,.6295],[.2708,.6327],[.29,.6584],[.3039,.6655],[.3178,.6628],[.3285,.6493],[.3399,.6069],[.3681,.5938],[.3668,.5847],[.3466,.5589],[.3429,.54],[.3626,.5303],[.3701,.518],[.3519,.4924],[.346,.4234],[.3233,.3877],[.3177,.3703],[.3237,.3438],[.3353,.3154],[.3472,.3022],[.356,.3134],[.3633,.3168],[.3697,.3133],[.3779,.2996],[.3918,.2906],[.4007,.2687],[.421,.2608],[.4269,.2522],[.4312,.2228],[.4372,.2128],[.4502,.2042],[.4646,.206],[.4723,.2136],[.4816,.2433],[.4996,.244],[.5157,.2344],[.5263,.2079],[.5269,.1926],[.5219,.1811],[.5109,.175],[.5095,.1607],[.5147,.1261],[.5123,.1098],[.5059,.1019],[.4837,.0975],[.4824,.0935],[.5019,.0597],[.5157,.0799],[.5241,.0808],[.5354,.0699],[.5388,.061],[.5361,.0418],[.526,.0282],[.5204,-.0155],[.5245,-.0228],[.5385,-.0221],[.5538,-.0357],[.5829,-.0416],[.6012,-.0661],[.6096,-.072],[.6501,-.0738],[.6632,-.0845],[.6714,-.1045],[.6839,-.0998],[.6888,-.1024],[.691,-.1271],[.7001,-.1463],[.6981,-.1996],[.6927,-.2283],[.7016,-.2548],[.6966,-.2691],[.6789,-.2722],[.6806,-.287],[.6871,-.2948],[.7074,-.3029],[.7123,-.3122],[.7207,-.3074],[.7269,-.3102],[.7358,-.3256],[.7325,-.3314],[.7617,-.3567],[.7729,-.3512],[.7865,-.3561],[.7759,-.3768],[.7642,-.3888],[.7443,-.3927],[.6829,-.3924],[.6583,-.4125],[.6493,-.4141],[.6401,-.4041],[.636,-.3753],[.5959,-.3279],[.596,-.3465],[.5912,-.3563],[.5692,-.3604],[.5664,-.3646],[.5689,-.3808],[.5657,-.3916],[.5596,-.398],[.5444,-.4002],[.5372,-.396],[.5179,-.3676],[.4901,-.36],[.4866,-.3504],[.4922,-.3264],[.4896,-.3224],[.479,-.3208],[.4613,-.3357],[.4419,-.3666],[.4361,-.3668],[.4169,-.3321],[.4105,-.3301],[.4026,-.3436],[.4034,-.371],[.4004,-.3795],[.3894,-.3816],[.3731,-.4002],[.363,-.4065],[.3552,-.3999],[.355,-.393],[.3649,-.3741],[.3648,-.3104],[.3616,-.2963],[.3543,-.287],[.3445,-.2871],[.3048,-.3102],[.28,-.3198],[.2463,-.343],[.2371,-.3576],[.2345,-.3762],[.2465,-.4316],[.2416,-.4724],[.2768,-.5082],[.2794,-.5226],[.2741,-.5383],[.2483,-.5741],[.2448,-.5845],[.2544,-.6296],[.2536,-.6426],[.1622,-.6697],[.1543,-.675],[.1492,-.6846],[.1489,-.6957],[.1574,-.7296],[.1537,-.7514],[.1391,-.7623],[.1222,-.7684],[.1223,-.7913],[.1103,-.7985],[.0794,-.8017],[.0721,-.814],[.0753,-.8263],[.0725,-.8316],[.0512,-.8413],[.0322,-.8704],[.0495,-.8855],[.0549,-.9132],[.0613,-.922],[.0491,-.9279],[.0435,-.936],[.0473,-.9612],[.0453,-.969],[.0355,-.9735],[.0058,-.9723],[-.0289,-.9632],[-.0619,-.9606],[-.0866,-.9792],[-.0949,-1],[-.1104,-.9783],[-.1106,-.956],[-.1218,-.9349],[-.1582,-.9127],[-.1371,-.8924],[-.1092,-.8872],[-.112,-.8786],[-.115,-.8017],[-.134,-.7596],[-.1353,-.7405],[-.1258,-.7293],[-.132,-.7135],[-.1285,-.6982],[-.1477,-.6345],[-.1411,-.6048],[-.1441,-.5957],[-.1392,-.5901],[-.1269,-.5549],[-.1189,-.5232],[-.1351,-.4895],[-.1245,-.4858],[-.1231,-.4663],[-.1036,-.4547],[-.0967,-.4387],[-.0978,-.4124],[-.0901,-.4077],[-.0874,-.3875],[-.0781,-.3789],[-.0814,-.3699],[-.0749,-.3667],[-.0717,-.3562],[-.0723,-.3302],[-.0776,-.3285],[-.0845,-.3115],[-.0835,-.2868],[-.0776,-.2789],[-.0815,-.268],[-.0716,-.2432],[-.0729,-.2246],[-.0774,-.2067],[-.1027,-.1555],[-.1026,-.1431],[-.1281,-.093],[-.1268,-.0749],[-.1318,-.0684],[-.1316,-.053],[-.1391,-.0478],[-.1352,-.0379],[-.1366,-.0263],[-.1453,-.0023],[-.1658,.0275],[-.1698,.0384],[-.1787,.0341],[-.199,.0455],[-.21,.0477],[-.2101,.0572],[-.2524,.0927],[-.2496,.102],[-.269,.1128],[-.2743,.1203],[-.2684,.1246],[-.2769,.1523],[-.2929,.1753],[-.2922,.1836],[-.3012,.1996],[-.3287,.2159],[-.3442,.2205],[-.3604,.2564],[-.3727,.2661],[-.3689,.2864],[-.3768,.2934],[-.3736,.308],[-.3674,.3159],[-.3706,.3224],[-.3828,.3317],[-.4011,.3343],[-.4162,.3436],[-.422,.3711],[-.4297,.3734],[-.4355,.4028],[-.4494,.4083],[-.4901,.46],[-.5001,.4776],[-.5039,.4922],[-.4936,.4942],[-.4967,.5168],[-.5067,.525],[-.5152,.5437],[-.5264,.5578],[-.5111,.5671],[-.5144,.5727],[-.5291,.5804],[-.5287,.6079],[-.5513,.6296],[-.5433,.6401],[-.5432,.6442],[-.5552,.6535],[-.5467,.6639],[-.5471,.67],[-.5521,.676],[-.5581,.6727],[-.5676,.6903],[-.5791,.6854],[-.5819,.6949],[-.5729,.6989],[-.5728,.7038],[-.5947,.7203],[-.6022,.7332],[-.6052,.7494],[-.5992,.7591],[-.6011,.7662],[-.6088,.7715],[-.6144,.767],[-.6345,.7774],[-.6344,.7815],[-.6258,.7819],[-.6207,.7868],[-.6206,.7925],[-.6357,.7986],[-.6409,.8133],[-.6463,.8183],[-.6598,.8051],[-.6641,.8213],[-.6823,.8408],[-.6871,.8379],[-.6969,.8508],[-.7043,.8547],[-.7225,.8514],[-.7311,.8535],[-.7357,.8636],[-.7405,.8564],[-.7552,.8667],[-.7652,.8665],[-.7865,.8569]]]},tm:{w:2,h:1.3996,cap:[-.1959,-.1889],polys:[[[.2305,-.6157],[.2246,-.606],[.228,-.5881],[.2253,-.5653],[.2173,-.5544],[.2085,-.5515],[.215,-.5448],[.2149,-.5371],[.2221,-.5231],[.2098,-.4804],[.2152,-.4422],[.2118,-.4291],[.0904,-.4306],[.0855,-.4279],[.0749,-.4064],[.0424,-.3595],[.0248,-.3551],[.0098,-.3438],[-.0113,-.337],[-.0183,-.3417],[-.0255,-.3281],[-.0335,-.3295],[-.0393,-.3263],[-.0382,-.3203],[-.0526,-.3058],[-.0546,-.2762],[-.061,-.267],[-.0757,-.2696],[-.1014,-.2496],[-.1353,-.2364],[-.1384,-.2429],[-.1527,-.2458],[-.1747,-.235],[-.1821,-.2453],[-.1998,-.247],[-.2217,-.2384],[-.2251,-.2207],[-.2287,-.2182],[-.2454,-.2147],[-.268,-.2034],[-.2802,-.2027],[-.2957,-.1927],[-.324,-.1918],[-.3446,-.183],[-.3482,-.178],[-.3453,-.1621],[-.3626,-.1279],[-.3673,-.1256],[-.373,-.1267],[-.389,-.1415],[-.4213,-.1329],[-.4331,-.1248],[-.4541,-.1308],[-.4622,-.1264],[-.4754,-.1263],[-.4951,-.1396],[-.4917,-.1499],[-.4939,-.1562],[-.5087,-.1594],[-.5219,-.1557],[-.545,-.1585],[-.577,-.1476],[-.6193,-.1522],[-.6531,-.1715],[-.6662,-.1742],[-.6851,-.1933],[-.7076,-.2073],[-.7186,-.2268],[-.7159,-.2359],[-.7197,-.2502],[-.74,-.2649],[-.7576,-.2636],[-.783,-.2766],[-.798,-.2772],[-.8064,-.2822],[-.8488,-.2764],[-.8572,-.2018],[-.8565,-.149],[-.8446,-.0989],[-.8481,-.0586],[-.8438,-.0366],[-.8338,-.0204],[-.832,-.0084],[-.8214,.0117],[-.833,.0231],[-.8376,.0346],[-.8508,.0347],[-.8563,.0498],[-.8555,.0397],[-.8596,.044],[-.8592,.0576],[-.8541,.061],[-.8583,.0617],[-.8543,.0737],[-.864,.0667],[-.862,.0451],[-.8681,.0556],[-.8693,.0655],[-.8724,.066],[-.8709,.0737],[-.8772,.0663],[-.873,.0863],[-.8771,.0827],[-.8736,.0913],[-.8776,.0903],[-.8761,.0957],[-.8804,.0918],[-.892,.0903],[-.8939,.094],[-.901,.0895],[-.8987,.0944],[-.9144,.0941],[-.9136,.0974],[-.9217,.1009],[-.9345,.098],[-.928,.0938],[-.9326,.0846],[-.932,.0693],[-.935,.0677],[-.9367,.094],[-.9429,.109],[-.9126,.1556],[-.9073,.1541],[-.9172,.1454],[-.9227,.1305],[-.8929,.1305],[-.8844,.1197],[-.8738,.1166],[-.8723,.1275],[-.8668,.1212],[-.8568,.1256],[-.8512,.1227],[-.8498,.1262],[-.8639,.1349],[-.8602,.1368],[-.861,.1416],[-.8715,.1439],[-.8761,.156],[-.8758,.147],[-.8884,.1606],[-.8869,.1553],[-.8906,.1581],[-.8908,.1546],[-.8883,.1479],[-.8929,.1515],[-.8897,.172],[-.8963,.1737],[-.8786,.1902],[-.8804,.194],[-.8729,.1955],[-.8743,.1986],[-.8668,.2083],[-.8905,.2171],[-.9081,.206],[-.9229,.2176],[-.9297,.2139],[-.9399,.2134],[-.9356,.2181],[-.9509,.2153],[-.9588,.2246],[-.9616,.2205],[-.9582,.2014],[-.9425,.1769],[-.9491,.1799],[-.9448,.1721],[-.949,.1768],[-.954,.1895],[-.962,.1977],[-.964,.2109],[-.9829,.2323],[-.9773,.2504],[-.9853,.2731],[-.9771,.3113],[-.9571,.3418],[-.9559,.3484],[-.9613,.352],[-.9602,.3582],[-.9551,.3597],[-.9555,.3661],[-.9449,.3931],[-.9438,.4196],[-.938,.4147],[-.939,.4065],[-.9295,.3818],[-.925,.3777],[-.9183,.3785],[-.9266,.3739],[-.9201,.3597],[-.9114,.3589],[-.8991,.367],[-.9026,.3594],[-.8907,.3588],[-.8845,.3693],[-.8814,.3557],[-.87,.3502],[-.8596,.3562],[-.8537,.3776],[-.8486,.3764],[-.8443,.3722],[-.8431,.362],[-.8464,.3572],[-.8433,.3464],[-.8371,.339],[-.8403,.3322],[-.8384,.3276],[-.8187,.3264],[-.8063,.3344],[-.7977,.331],[-.7867,.3348],[-.7855,.3376],[-.791,.3411],[-.7746,.3428],[-.7662,.3421],[-.7686,.3352],[-.7639,.3324],[-.7429,.3306],[-.7485,.3336],[-.7387,.3392],[-.7543,.3401],[-.7619,.3717],[-.7529,.3773],[-.7463,.3756],[-.7323,.3654],[-.7367,.3567],[-.7316,.3551],[-.7084,.3591],[-.6984,.3671],[-.6905,.3814],[-.7008,.4014],[-.6887,.3945],[-.6949,.4029],[-.6951,.4093],[-.7059,.4131],[-.7102,.4243],[-.7366,.4472],[-.7507,.4551],[-.7643,.4669],[-.7701,.4769],[-.7795,.4827],[-.7845,.498],[-.7852,.534],[-.7986,.5607],[-.7956,.5896],[-.8068,.6016],[-.8252,.6064],[-.8673,.6021],[-.8783,.598],[-.8961,.6038],[-.9254,.584],[-.9533,.5383],[-.9558,.5293],[-.9538,.5269],[-.947,.5334],[-.9357,.5276],[-.9396,.5079],[-.9539,.4746],[-.9517,.4487],[-.9443,.4265],[-.949,.4136],[-.9534,.4189],[-.9518,.4346],[-.9611,.4748],[-.9661,.4782],[-.9694,.4878],[-.9864,.5029],[-.9804,.5257],[-.9842,.5338],[-1,.5463],[-.9209,.6098],[-.8603,.6298],[-.7732,.6402],[-.7534,.6339],[-.6826,.5803],[-.6607,.5578],[-.6565,.5497],[-.6561,.5324],[-.6211,.4713],[-.6041,.4551],[-.595,.4366],[-.5885,.4319],[-.5668,.4305],[-.5285,.4403],[-.4069,.429],[-.3772,.4218],[-.3557,.4421],[-.3676,.4474],[-.3748,.4606],[-.3753,.4775],[-.3819,.4942],[-.3798,.5127],[-.3821,.5344],[-.3781,.5396],[-.3591,.5495],[-.3459,.5709],[-.3347,.5815],[-.3217,.5874],[-.2894,.5839],[-.2578,.5912],[-.2609,.5978],[-.2525,.6039],[-.2454,.6208],[-.2491,.6349],[-.2343,.6474],[-.2257,.6468],[-.2186,.6388],[-.209,.6414],[-.1926,.6343],[-.1846,.6261],[-.1831,.6077],[-.1705,.6093],[-.1949,.6521],[-.2165,.6641],[-.2197,.67],[-.201,.6817],[-.1763,.6737],[-.1637,.6748],[-.1562,.6998],[-.1152,.6547],[-.0997,.6492],[-.0844,.6528],[-.0812,.6507],[-.0707,.6385],[-.0661,.6177],[-.0521,.6137],[-.0433,.6065],[-.0075,.6107],[.0165,.6098],[.0294,.5949],[.0386,.5907],[.0398,.5852],[.0326,.5807],[.0314,.5722],[.0346,.5559],[.0239,.5521],[.0222,.5478],[.0472,.5393],[.0665,.5211],[.0698,.5138],[.0661,.5111],[.0492,.5165],[.0419,.5088],[.058,.4779],[.0453,.4649],[.0437,.4501],[.0485,.442],[.077,.4275],[.1018,.4098],[.1267,.4159],[.1545,.418],[.1642,.4158],[.1709,.409],[.1753,.4154],[.177,.4117],[.1876,.4132],[.2021,.4033],[.213,.4014],[.2215,.4083],[.2334,.4281],[.2642,.4194],[.2956,.3974],[.3103,.3746],[.3113,.3538],[.3196,.3266],[.334,.2979],[.3425,.2836],[.3654,.2717],[.3784,.2287],[.3768,.2141],[.3819,.1948],[.4023,.1736],[.5308,.089],[.5654,.0515],[.6304,.0102],[.6383,.0106],[.649,.0168],[.6568,.0156],[.67,1e-4],[.7015,-.0238],[.7519,-.0451],[.7864,-.073],[.8461,-.1082],[.8659,-.1093],[.876,-.1009],[.8849,-.099],[.9375,-.1182],[.9493,-.1299],[.969,-.1367],[.9857,-.137],[.9962,-.1423],[1,-.1508],[.9839,-.1822],[.9862,-.211],[.9838,-.2302],[.9925,-.2427],[.9861,-.253],[.9898,-.2589],[.983,-.2658],[.9804,-.2672],[.9746,-.2627],[.9575,-.2674],[.9459,-.2602],[.9378,-.2604],[.9248,-.2496],[.8914,-.2396],[.8833,-.2295],[.8769,-.2276],[.8743,-.2368],[.8628,-.2411],[.8583,-.2561],[.8597,-.2717],[.8481,-.2887],[.8431,-.2917],[.7793,-.2974],[.743,-.3175],[.7365,-.3258],[.7391,-.3602],[.7165,-.4137],[.7204,-.4356],[.7188,-.4498],[.7031,-.4787],[.6779,-.4911],[.6729,-.5022],[.6569,-.5016],[.6423,-.5124],[.6395,-.5179],[.6415,-.532],[.6181,-.5275],[.6002,-.5379],[.573,-.5425],[.5629,-.5535],[.5511,-.5596],[.5027,-.5643],[.5,-.5699],[.5045,-.5801],[.5202,-.5925],[.5002,-.6069],[.5008,-.619],[.5045,-.6251],[.502,-.6414],[.4781,-.6512],[.4453,-.6781],[.4321,-.6838],[.4217,-.6827],[.4099,-.6731],[.4059,-.6734],[.3848,-.6998],[.3761,-.6719],[.3415,-.6462],[.3283,-.6442],[.3015,-.6518],[.2813,-.6492],[.2713,-.6454],[.2492,-.6273],[.2427,-.6138],[.2305,-.6157]]]}},Ch={am:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-am" viewBox="0 0 640 480">
  <path fill="#d90012" d="M0 0h640v160H0z"/>
  <path fill="#0033a0" d="M0 160h640v160H0z"/>
  <path fill="#f2a800" d="M0 320h640v160H0z"/>
</svg>
`,az:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-az" viewBox="0 0 640 480">
  <path fill="#3f9c35" d="M.1 0h640v480H.1z"/>
  <path fill="#ed2939" d="M.1 0h640v320H.1z"/>
  <path fill="#00b9e4" d="M.1 0h640v160H.1z"/>
  <circle cx="304" cy="240" r="72" fill="#fff"/>
  <circle cx="320" cy="240" r="60" fill="#ed2939"/>
  <path fill="#fff" d="m384 200 7.7 21.5 20.6-9.8-9.8 20.7L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8z"/>
</svg>
`,by:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" id="flag-icons-by" viewBox="0 0 640 480">
  <defs>
    <clipPath id="by-a">
      <path d="M0 0h200v608h8v284l-8 8H0z"/>
    </clipPath>
  </defs>
  <path fill="#ce1720" d="M0 0h640v480H0Z"/>
  <g fill="#fff" clip-path="url(#by-a)" transform="matrix(.52885 0 0 .53333 5 0)">
    <g id="by-c">
      <path id="by-b" d="M36 0v14h-9v14H16v16H8v13H-8V24H8V6H-8V0Zm26 77v15h-8v12h-8V92h-8V77h-8V57h8V42h8V30h8v12h8v15h8v20Zm-17-1h10V58H45ZM19 183h8v-18h-8zm54 0h8v-18h-8ZM-8 305H6v13h6v16h9v15h12v-15h9v-16h8v-13H38v-15h21v10h13v17h11v19h-8v14h-7v13h-6v14h-9v12h-7v11h-9v14H24v-15h-9v-14H8v-9H-8v-23H8v-20H-8Z"/>
      <use xlink:href="#by-b" transform="matrix(-1 0 0 1 200 0)"/>
      <path d="M96 0v32h8V0h32v14h-8v14h-12v16h-8v13H92V44h-8V28H72V14h-8V0Zm-2 274v-11h-6v-13h-7v-14h-8v-14h-8v-10h-9v-14H44v14h-9v10h-7v14h-8v14h-6v13H8v17H-8v-44H8v-20H-8v-33H8v14h10v14h10v-14h10v-14h8v-18h-8v-14H28v-14H18v14H8v14H-8v-41H8v-19H-8V77H8v13h8v16h11v13h9v15h7v12h14v-12h7v-15h9v-13h11V90h8V77h16v13h8v16h11v13h9v15h7v12h14v-12h7v-15h9v-13h11V90h8V77h16v28h-16v19h16v41h-16v-14h-10v-14h-10v14h-10v14h-8v18h8v14h10v14h10v-14h10v-14h16v33h-16v20h16v44h-16v-17h-6v-13h-6v-14h-8v-14h-7v-10h-9v-14h-12v14h-9v10h-8v14h-8v14h-7v13h-6v11zm2-167v27h8v-27zm-4 58v-14H82v-14H72v14H62v14h-8v18h8v14h10v14h10v-14h10v-14h16v14h10v14h10v-14h10v-14h8v-18h-8v-14h-10v-14h-10v14h-10v14zm4 46v27h8v-27z"/>
    </g>
    <use xlink:href="#by-c" transform="matrix(1 0 0 -1 0 900)"/>
    <path d="M-8 408H8v14h7v8h8v14h7v12h-7v14h-8v8H8v14H-8Zm216 0v84h-16v-14h-7v-8h-8v-14h-7v-12h7v-14h8v-8h7v-14ZM62 459h8v-18h-8zm76 0v-18h-8v18zm-42-59h8v-18h-8zm0 100v18h8v-18Zm-50-75h14v-11h10v-10h5v-10h6v-14h8v-14h4v-13h14v13h4v14h8v14h6v10h5v10h10v11h14v50h-14v11h-10v10h-5v10h-6v14h-8v14h-4v13H93v-13h-4v-14h-8v-14h-6v-10h-5v-10H60v-11H46Zm50 9v-15h-8v-10h-8v25h8v9h5v14h-5v9h-8v25h8v-10h8v-15h8v15h8v10h8v-25h-8v-9h-5v-14h5v-9h8v-25h-8v10h-8v15z"/>
  </g>
  <path fill="#007c30" d="M110 320h530v160H110Z"/>
</svg>
`,kz:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icons-kz" viewBox="0 0 640 480">
  <path fill="#00abc2" d="M0 0h640v480H0z"/>
  <g fill="#ffec2d">
    <g transform="matrix(.48 0 0 .48 345.8 201.6)">
      <circle r="134.6"/>
      <g id="kz-c">
        <g id="kz-b">
          <path id="kz-a" d="M0-152.9c8-.1 11-5.1 11-11.1 0-8-11-46.1-11-46.1S-11-172-11-164c0 6 3 11.1 11 11.1"/>
          <use xlink:href="#kz-a" width="100%" height="100%" transform="rotate(90)"/>
          <use xlink:href="#kz-a" width="100%" height="100%" transform="scale(-1)"/>
          <use xlink:href="#kz-a" width="100%" height="100%" transform="rotate(-90)"/>
        </g>
        <use xlink:href="#kz-b" width="100%" height="100%" transform="rotate(22.5)"/>
        <use xlink:href="#kz-b" width="100%" height="100%" transform="rotate(45)"/>
        <use xlink:href="#kz-b" width="100%" height="100%" transform="rotate(67.5)"/>
      </g>
      <use xlink:href="#kz-c" width="100%" height="100%" transform="rotate(11.3)"/>
    </g>
    <g transform="translate(-172.8)scale(.48)">
      <path d="M1075.8 655c-3.5 6.3-5.6 13.6-10 19.3-13.6-12.3-33.2-12-50.4-12.7-14.2-.8-29.6-2.1-40.6-12.2-11.5-9.5-21-21.7-33.8-29.4a83 83 0 0 1-33.1-15.3c-20.2-16.5-31.8-41-51.6-58-3.7-3.6-8.2-6.5-12.4-9.6-4 1-2.2 9.6-7.1 5.2-2.7-2-9.4-2.1-10 .6 6 8 12.1 17 13 27.2-4.2.4-11.5-.9-13.5.6a84 84 0 0 0 20.4 21.3c-3.8.6-11.3.3-12.8 1.8a59 59 0 0 0 26.8 14.7c2 2.8-3.1 8.2 1.3 10.6 2.5 1 10.9 2.8 5.1 5.7-4 2.6-2.5 8.9 2.6 8.7 3.2 1.7 10.4 2 11 5-2.9 2.8-11.7 6.2-4.2 9a52 52 0 0 0 23.1 6.7c-4 3.4-9 5.3-13.1 8.5 18.5 10.9 39 18 59.4 25 8 2.6 16.3 5.1 24.7 6.7-24.4-1.4-48-8.6-70.2-18.5q-17.2-7.6-34.8-14.2c5.1-2.7 11.1-3.4 16.5-5.7-11.2-2.2-23.3-3-33-9 1.4-2.8 7-2.9 10.2-4.3 6-1.4 9.6-3 1.3-3.6-8.4-2.3-18-1.3-25.5-6.3.5-3 8.3-2 11.4-3.3 4-.7 8.4-1.3 11.6-4-13-5.3-30-1.5-40.2-13-2.3-4.4 7.3-.9 10-1.6 7 0 14.5 2.2 21.2-.6-19-8.3-39.3-16-53.7-31.4-1.6-2.5-6.4-9.3-2.5-10.1 11.2 1.5 19.3 13.7 31.4 11.8 1.6-2.1-7-5.6-9.2-8.7a229 229 0 0 1-46.8-51c-.8-6.7 9.5-7.7 12.2-2.6 13.4 13 25.5 28 42.2 36.8 6 2.9-3.4-3.4-4.6-5.7a299 299 0 0 1-40.9-57.9c-2-3.8-5.1-10.7.7-12.7 5.7-2.9 11.5 1 14.4 6 11.3 14.3 19.7 31.3 33.8 43.2-12-23.3-24.9-48-25.2-74.8.3-5.2.6-13 7.7-12.9 6-.9 5 6.7 7 10.3 5.8 19.8 8.3 41.2 20 58.6-2.5-14.6-6.4-29.7-3.8-44.6.6-5 6-6.4 9.7-3.4 2.9 7 3.5 15.9 6.1 23.5a237 237 0 0 0 93 127.2 245 245 0 0 0 123.3 42.3q6 .5 11.9.7m136.4 91.1c-7.2 4.4-12.8-3.4-18.8-5.7-4.4 2.4-4.8 10.2-8.8 14-4.8 5.5-10.8-1.6-10.3-7-5.8 4.9-8.7 16-18 14.4-4.5-3.6-7.8-11.2-11.2-2.5-2.7 4.2-10 10.2-13.9 3.8-1.2-5.6-4-12.2-7-3.3-2.2 6.4-9 11-15.4 8.2-3.6-2.9 2.8-13.7-1.7-13-6.8 4.6-10.8 15.7-20.3 14.8-3.7-4 2.3-11.1-1.8-15.7-4.7 6.1-10 15.1-18.3 15.7-4-3.2.2-12.5-2.4-13.8-8.4 5-17.4 14.1-28 11.3 4.1-16 21.5-21.5 36-22.7 25.1-3.1 51.5 2.6 75.7-6.5 3.9-2.4 13.3-5.7 10-11.2-3-4.4 7.7-2.7 8.7-7.8-.6-6.4 5-5.5 10.4-6 24.4-1.1 48.5 4 72.8 4.9 1.8 11.8-11.3 20.1-22 16.5-5 .8-12.5-11.6-11-2.6-1 4.8-.4 11-4.7 14.2m-207.4-24.2c5.6 5.1 9.6-1 14.9-3.3a197 197 0 0 0 48.3-27.3c9.2-7.6 17.2-17.5 29.6-20 24.2-7.3 49.9-6.4 74.1-13.2 18.5-25.2 49.8-34.3 76.1-48.8 5.9-1.8 8.2-6.7 10-12 10-15.9 23.7-29.9 39.9-39.5a37 37 0 0 1 25.4-4.6 42 42 0 0 1-13.7 26.5c5.9-.1 11-3.8 16.8-3.6 2 10.6-9.4 16.1-15.5 22.7 3.4.8 16.4 1.8 9.3 5.2-9 6.2-19.3 10.5-27.6 17.8 7.7 1.4 8.6 3 .8 5.8-4.3 2.8-12.4 3.8-13.2 9.4 5.8 3.6-2.6 7-5.9 8.2-6.2 1.5-12.8 4.2-4.5 9-3.1 4.7-9.9 5.7-15.4 5.2 1.7 5.4 4.1 11.4-2.8 13.8a108 108 0 0 1-53.6 22.4c24.5 1.8 49.8-2.7 70.7-16 2.8-3.3 17.3-6.9 9.2-9.6-3.8-1.6-12-3.4-12.6-6.3 11.4-7 25.7-4.5 37.9-8.6.3-4-9.3-2.9-12.9-3.8-8.5-.7-8-2.9.2-3.7 10.4-2.8 22.2-3.3 31-10-7.1-3.4-16.1-.5-23.7-3.2 12.9-5.6 28.1-6.2 39.7-14.7 5.3-5.9-6.8-4-10.3-3.9-7.1 1.3-10.4-2.2-2.3-5.1 13.9-10.3 31.4-16.9 41.2-31.7 2.3-3.3 5.4-13.3-2-9.8-9.6 3.3-18.1 14.1-29.2 10.8 21.8-16.9 42.4-36 57.3-59.3.8-6.8-9.8-7.5-12.5-2.2-14 13.4-26.6 29.3-44.5 37.8a281 281 0 0 0 43.6-56.4c2.7-6 9.8-13.3 6-20-6.3-5.2-14.1-.4-17.3 5.7-10.9 14.2-19.1 30.7-33 42.3 12.1-23.3 24.8-48.2 25-75 0-5.6-1-13.8-8.6-12.7-6 1-4.5 10-7 14.5-5.4 18.4-8 38.3-19 54.3 2.5-14.9 6.8-30.5 3.5-45.5-1.6-6.8-12.5-3.9-11 2.8-13 65.9-57.3 123.5-115 156.8-26.5 15-56 24.6-86.2 29-8 1.7-16.8.7-24.5 3.5-18.8 14.3-30.1 38.4-53.8 45.9-10.7 5.3-24.5 6.4-32.1 16.2a9 9 0 0 0-.8 4.2m51.7-10.3q-5.4.2-10.6 1.7c-4.7.7-9.2 2.3-13.8 3l-1.9.4-3.1.3a11 11 0 0 1 0 5.1 6 6 0 0 1-1.4 2q-.9 1.2-2.2 1.8a7 7 0 0 1-2.6.7q-1.3.1-2.7-.4-1.3-.4-2.5-1.5l-2.8.5h-2.6l-2.8-1-2.6-1.3c-3.4 2-7.2 3.9-9.3 7.4a11 11 0 0 0-1.6 5.3q-.2 3.6 1.4 7c.4.6.7-2.3 1.8-2.7q3-2.4 6.7-3.3c2-1 1.7 0 .9 1.6-.2.9-1.3 4 .2 2.4a65 65 0 0 1 21.6-4.1q15.9-1.5 31.8-1.5l30 .6c4.8.2 9.6 1.2 14.3.4 1.1-.3 2.9-.3 3.6-1-2.2-1.2-4.7-1.3-7-1.6h-19.1c-5.3-.5-10.8-.6-15.8-2.6-1.4-.5-2.6-1.8-3.9-.4a24 24 0 0 1-5.9 1.3q-5.3.2-10.2-1.8 3.6-4.7 7.7-9l-6.2-1.3z"/>
      <circle cx="1020" cy="720.9" r="2.4"/>
      <circle cx="1019.8" cy="720.5" r="1" stroke="#ffec2d" stroke-width=".4"/>
    </g>
    <g transform="scale(.48)">
      <g id="kz-f">
        <g id="kz-e">
          <path d="M120 73s-9.6-8.2-12.9-4.1c-5.2 6.5 16.2 39 16.2 50.4 0 18.8-12.6 23.9-28 26.5-10.4 1.8-27.3-.7-27.3-.7 3.2-4.3 5.3-5.6 10.6-5.9-6-3-12-9.8-12-20.3 0-16.1 6.6-22.8 6.6-41C73.2 68 65 55 65 55c14.6 1.5 21.8 15 17.7 25.8a7 7 0 0 0 6.3-1.9c1 3-.6 6.5-2.9 9.5 1.8 1 3.2.4 6-.2-.2 3-2 6.4-6.6 9.5 13.2-3.4 21.2 5.7 21.2 15.3 0 7.3-5 12.5-10 12.5-1.6 0-4-.7-5.3-1.7-1 2-.4 4.7.5 6.7-3.6-1-6-3.2-4.3-7.7q-4.2-.3-6.5-3 2.3-3 6.5-3c-2-4.2.3-6.5 3.6-8.4 0 0-2.1 8.4 3.2 8.4 2.4 0 4.6-.7 4.6-4.3 0-3.1-2.7-7.4-9-7.1s-11.3 4.3-11.3 14.3c0 9.2 7.5 13.8 17.3 14 8.8.4 15.5-4.4 15.5-13.5C111.5 108 94 80.4 94 69.6c0-8.1 7.2-12.7 14.4-12.7 9.2 0 17 9.2 17 9.2l-5.4 6.8z"/>
          <path id="kz-d" d="M122 292.1c0 20.3-18.2 30.7-32.5 30.7-19.2 0-29.5-11.5-29.5-26.6 0-8.5 1.6-13.9 5.5-22l44.2-91.7a27 27 0 0 0 2-12.2c0-8.2-8-14.9-16.3-15-7.6-.3-16 7-16 15.3 0 10.1 5.3 14.6 10.7 14.6 6.6 0 9.2-2.7 9.2-7.4q-.2-4.7-3.8-4.6c-5.7 0-4 7.6-4 7.6a5.2 5.2 0 0 1-3.9-7 10 10 0 0 1-5.5-3.3q2.2-2.3 5.5-3c-1.3-4.4.5-6.5 4.3-7.5a8 8 0 0 0-.5 4.8c6-1.8 15.3 1 15.3 11.4s-7.2 19.1-20.7 17c3.2 1.5 4.8 4.6 5.2 8.1-2.5-1-5.2-1-5.2-1 1.6 2.7 3.8 5 3.7 10.6-2.5-1.2-4.9-3.3-8-2 5 10-1.2 23.6-17 26.8q8.6-10.3 8.6-21.3c0-23.5-6.5-27.4-6.5-43.8a24 24 0 0 1 10.5-19.2v.3A14 14 0 0 1 68 145a62 62 0 0 1 34 .3 25 25 0 0 1 18 12 36 36 0 0 1 0 28.9c-6.3 13-35.7 75.6-44.9 95.2q-3 6.3-3.1 13.4c0 12 11 16.2 17.2 16.2 7.5 0 15.2-5.7 15.2-12.8 0-4.5-2.5-7.3-6-7.3-8.5 0-8 7.2-6.3 11.8-5.3-2.4-8.3-6.6-7.5-11a14 14 0 0 1-8.4-4.8c2-2.6 4.6-4.6 8.4-4.7-1.7-6.9 3-9.8 7.5-11.4-1.4 5-2.4 10.9 6.3 10.9 6.3 0 11.2 1 14.1 5.2l.7-27c.4-8.1-10.8-8-18-5.5 2.7-9.3 8.2-14.4 21-13.1a10 10 0 0 1-6.4-9.8c0-7.6 6.2-16 10.2-18.5l2 79z"/>
          <use xlink:href="#kz-d" width="100%" height="100%" transform="matrix(1 0 0 -1 0 645)"/>
        </g>
        <use xlink:href="#kz-e" width="100%" height="100%" transform="matrix(-1 0 0 1 240 0)"/>
      </g>
      <use xlink:href="#kz-f" width="100%" height="100%" transform="matrix(1 0 0 -1 0 1000)"/>
    </g>
  </g>
</svg>
`,kg:`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="flag-icons-kg" viewBox="0 0 640 480">
  <path fill="red" d="M0 0h640v480H0Z"/>
  <path fill="#ff0" fill-rule="evenodd" d="m340.7 146.6 2.7-52q0-.4-.4-.5-.3 0-.5.4l-13.3 50.1-.1.5a5.9 5.9 0 1 0 11.6 1.5m14.4 4.4 10.8-51q.2-.3-.3-.5-.3 0-.5.3L344 147.2l-.2.5a5.9 5.9 0 1 0 11.3 3.3m13.5 6.6 18.7-48.6a.5.5 0 0 0-.8-.4L358.2 152l-.2.4a5.9 5.9 0 1 0 10.6 5m12.3 8.7 26-45a.5.5 0 0 0-.7-.6l-34.7 38.6-.3.4a5.9 5.9 0 1 0 9.7 6.6m10.8 10.4 32.8-40.4v-.6h-.7l-40.3 32.6-.4.4a5.9 5.9 0 1 0 8.6 8m9 12 38.7-34.8q.3-.3 0-.7h-.6L394 179l-.4.2a5.9 5.9 0 1 0 7.2 9.3m7 13.3 43.7-28.4a.5.5 0 0 0-.4-.8l-48.4 18.6-.5.3a5.9 5.9 0 1 0 5.6 10.3m5 14.2 47.5-21.2a.5.5 0 0 0-.3-.8l-50.7 10.8-.5.1a5.9 5.9 0 1 0 4 11m2.5 14.9 50.4-13.4q.3-.1.3-.5-.1-.4-.5-.4l-51.8 2.7h-.5a5.9 5.9 0 1 0 2.1 11.6m.3 15 51.8-5.4q.4-.1.4-.5 0-.3-.4-.5l-51.6-5.4h-.5a5.9 5.9 0 1 0 .3 11.8m-2.1 14.8 52 2.7a.5.5 0 0 0 .1-.9l-50.1-13.3-.5-.1a5.9 5.9 0 1 0-1.5 11.6m-4.4 14.4 51 10.8q.3.2.5-.3 0-.3-.3-.5l-47.5-21-.5-.2a5.9 5.9 0 1 0-3.3 11.3m-6.6 13.5 48.6 18.7a.5.5 0 0 0 .4-.8L408 278.2l-.4-.2a5.9 5.9 0 1 0-5 10.6m-8.7 12.3 45 26a.5.5 0 0 0 .6-.7l-38.6-34.7-.4-.3a5.9 5.9 0 1 0-6.6 9.7m-10.4 10.8 40.4 32.8a.5.5 0 0 0 .7-.7l-32.7-40.3-.4-.4a5.9 5.9 0 1 0-8 8.6m-12 9 34.8 38.7a.5.5 0 0 0 .8-.6L381 314l-.3-.4a5.9 5.9 0 1 0-9.3 7.2m-13.3 7 28.4 43.7q.2.3.6.2.3-.2.2-.6l-18.6-48.4-.3-.5a5.9 5.9 0 1 0-10.3 5.6m-14.2 5 21.2 47.5q.1.5.5.3.4 0 .3-.6l-10.8-50.7-.1-.5a5.9 5.9 0 1 0-11 4m-14.9 2.5 13.4 50.4q.1.3.5.3.4-.1.4-.5l-2.7-51.8v-.5a5.9 5.9 0 1 0-11.6 2.1m-15 .3 5.4 51.8a.5.5 0 0 0 1 0l5.4-51.6a6 6 0 0 0-5.9-6.4 6 6 0 0 0-5.9 6.2m-14.8-2.1-2.7 52a.5.5 0 0 0 .9.1l13.3-50.1.1-.5a5.9 5.9 0 1 0-11.6-1.5m-14.4-4.4-10.8 51a.5.5 0 0 0 .8.2l21.1-47.4.2-.5a5.9 5.9 0 1 0-11.3-3.3m-13.5-6.6L252.7 371q-.1.4.2.6t.6-.2l28.3-43.5a6 6 0 0 0-2.3-8.3 6 6 0 0 0-8 2.8m-12.4-8.6-26 45a.5.5 0 0 0 .7.6l34.7-38.6.3-.4a5.9 5.9 0 1 0-9.7-6.6m-10.8-10.4-32.8 40.4v.6q.4.3.7 0l40.3-32.6.4-.4a5.9 5.9 0 1 0-8.6-8m-9-12-38.7 34.8a.5.5 0 0 0 .6.8l44.9-26 .4-.3a5.9 5.9 0 1 0-7.2-9.3m-7-13.3-43.7 28.4a.5.5 0 0 0 .4.8l48.4-18.6.5-.3a5.9 5.9 0 1 0-5.6-10.3m-5-14.2-47.5 21.2q-.5.1-.3.5 0 .4.6.3l50.7-10.8.5-.1a5.9 5.9 0 1 0-4-11m-2.5-14.9-50.4 13.4a.5.5 0 0 0 .2 1l51.8-2.8h.5a5.9 5.9 0 1 0-2.1-11.6m-.3-15-51.8 5.4a.5.5 0 0 0 0 1l51.6 5.4h.5a5.9 5.9 0 1 0-.3-11.8m2.1-14.8-52-2.7a.5.5 0 0 0-.1.9l50.1 13.3.5.1a5.9 5.9 0 1 0 1.5-11.6m4.4-14.4-51-10.8q-.3-.2-.5.3 0 .3.3.5l47.4 21.1.5.2a5.9 5.9 0 1 0 3.3-11.3m6.6-13.5L189 172.7a.5.5 0 0 0-.4.8l43.5 28.3.4.2a5.9 5.9 0 1 0 5-10.6m8.7-12.3-45-26h-.7q-.1.3.1.7l38.6 34.7.4.3a5.9 5.9 0 1 0 6.6-9.7m10.4-10.8-40.4-32.8h-.6q-.3.3 0 .7l32.6 40.3.4.4a5.9 5.9 0 1 0 8-8.6m12-9-34.8-38.7a.5.5 0 0 0-.7.6l26 44.9.2.4a5.9 5.9 0 1 0 9.3-7.2m13.3-7-28.4-43.7a.5.5 0 0 0-.8.4l18.6 48.4.3.5a5.9 5.9 0 1 0 10.3-5.6m14.2-5-21.2-47.5a.5.5 0 0 0-.8.3l10.8 50.7.1.5a5.9 5.9 0 1 0 11-4m14.9-2.5-13.4-50.4q-.1-.3-.5-.3-.4.1-.4.5l2.7 51.8v.5a5.9 5.9 0 1 0 11.6-2.1m15-.3-5.4-51.8a.5.5 0 0 0-1 0l-5.4 51.6v.5a5.9 5.9 0 1 0 11.8-.3m-5.9 6.3a89.2 89.2 0 1 1 0 178.4 89.2 89.2 0 0 1 0-178.4m0 10.7a78.5 78.5 0 1 1 0 157 78.5 78.5 0 0 1 0-157m-65.6 102a155 155 0 0 1 32-44l6 4a155 155 0 0 0-34.1 48.4 70 70 0 0 1-3.9-8.3m71.1-40.6q2.8 2.3 5.4 4.8l5.8-4.5-5.4-4.7zm-11.4-8.7 5.9 4.3 5.9-4.3-5.9-4.3zm.6 18.3 5.3 5 5.3-5-5.3-5zm-11.4-9.3q3 2.2 5.8 4.5l5.4-4.8-5.8-4.4q-2.7 2.2-5.4 4.7m35.2-16.9q-3-2.3-6-4.3l-6.7 4 6 4.3zm10.4 8.6-5.3-4.6-6.4 4 5.5 4.6zm-36-16.6q3.5-2.3 7.1-4.3l7 4.3-7 4zm-11.5 8q3-2.3 6-4.3l6.7 4-6 4.3zM291 215l5.3-4.6 6.4 4-5.5 4.6zm-32.7-10.2a157 157 0 0 1 21.5 10.6 153 153 0 0 0-28.6 37.4 71 71 0 0 1 7-48m6-9.2q13 4.2 25.6 11l-5.3 4.6q-11.6-6.4-23.6-10.8 1.6-2.6 3.3-4.8m7.5-8.3q14.6 4 29.2 11.3l-6 4.2q-13.5-6.7-27.3-11.2zm11-8.4.6.2.8.2q14.8 4 29.7 11.5l-7.4 4.3a187 187 0 0 0-30.2-11.6q3-2.5 6.4-4.6m68.6-3.4-.8.3q-15.4 4.5-30.5 11.8-14.8-7.2-30-11.7l-.5-.1q-.5 0-.8-.3a70 70 0 0 1 62.6 0m12.5 8-.7.2q-15 4.4-29.6 11.4-3.6-2.3-7.4-4.3a145 145 0 0 1 31.3-11.9q3.4 2.2 6.4 4.6m8.5 8q-13.8 4.5-27.2 11.3l-6-4.2q14.5-7.4 29-11.3zm6.7 8.8q-12 4.4-23.6 10.8l-5.3-4.5q12.6-7 25.6-11 1.8 2.1 3.3 4.7m9.7 52.4a153 153 0 0 0-28.6-37.4 157 157 0 0 1 21.5-10.6 70 70 0 0 1 7.1 48m-7 19.1a155 155 0 0 0-34-48.3q3-2.2 6-4.1a157 157 0 0 1 31.9 44 70 70 0 0 1-3.9 8.4m-10.9 15c-8.6-22-20.6-39.9-34.7-54.2l5.6-4.7c14.6 14.4 27 32 35 51.9a71 71 0 0 1-5.9 7m-13.3 10.9-.9-2.5c-7.7-21-18.6-38.2-31.4-52.3l5.3-5.3a151 151 0 0 1 34 55 71 71 0 0 1-7 5m-67.9 4 .9-2.8c6.5-19 16.8-36 29.5-50.3 12.7 14.4 23 31.3 29.5 50.3l1 2.8a70 70 0 0 1-60.9 0m-14.1-9a151 151 0 0 1 34-55l5.3 5.3a158 158 0 0 0-31.4 52.3l-1 2.5a70 70 0 0 1-7-5m-12-13c8-19.9 20.3-37.4 34.9-51.8l5.6 4.7a157 157 0 0 0-34.7 54.2q-3.1-3.4-5.9-7"/>
</svg>
`,md:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-md" viewBox="0 0 640 480">
  <g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#00319c" d="M0 0h213.3v480H0z"/>
    <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z"/>
    <path fill="#de2110" d="M426.7 0H640v480H426.7z"/>
  </g>
  <path fill="#ff1900" fill-rule="evenodd" stroke="#000" stroke-width=".7" d="m360.4 320.4 24.2 35c1.4 2 2.7 3.9.7 5.2s-1.4 6.4 0 8.4c2.7 3.9 6 4.5 8 3.2l18.4-11.6c2-1.2 2.7-4.5 0-8.4-1.5-2-6-4.5-8-3.2-2.1 1.3-3.5-.7-4.8-2.6l-24.3-35"/>
  <path fill="#a77b3b" fill-rule="evenodd" stroke="#000" stroke-width="2.5" d="M177.2 696.3c0 24.4-9.6 44.3-21.3 44.3s-21.3-19.9-21.3-44.3S144.3 652 156 652s21.3 19.8 21.3 44.3z" transform="matrix(.52728 -.42386 .44358 .50386 -32.4 20)"/>
  <path fill="#ff1900" fill-rule="evenodd" stroke="#000" stroke-width=".7" d="m262 306.1-21.5 36.7c-1.2 2-2.4 4-4.5 3-2.1-1.2-6.6 1.7-7.8 3.8-2.4 4-1.5 7.2.7 8.4l19.2 10.2c2 1.1 5.4.2 7.8-3.8 1.1-2.2 1.4-7.3-.7-8.4s-1-3.2.3-5.2l21.4-36.7"/>
  <path fill="#a77b3b" fill-rule="evenodd" stroke="#000" stroke-width="1.7" d="M331.2 280.6h-19.6c-.6.6-6.2 35.6-12.2 49-7.3 16.3-29.2 30.7-29.2 30.7s13.1 4 17 6.6c1-.3 22-4.7 24.4-30.3 2.4 25.6-14.6 37.3-14.6 37.3s24.4 7 24.4 23.3c0-16.3 24.4-23.3 24.4-23.3s-12.2-11.7-14.7-37.3c5 25.6 23.5 30 24.5 30.3 3.9-2.6 17-6.6 17-6.6s-21.9-14.4-29.2-30.7c-6-13.4-11.6-48.4-12.2-49zm-83-116.7 36.6 11.7c12.1 0 24.4-11.7 24.4-23.4.4-26-9.8-35-12.2-35l4.8-4.6-7.3-7s2.5-12.1 26.9-11.7 24.4 11.7 24.4 23.3-12.2 11.7-12.2 35c0 11.7 12.2 23.4 24.4 23.4l36.6-11.7v116.7H248.1z"/>
  <g fill="none" stroke="#000">
    <path stroke-width=".5" d="m302.2 292.2 14.6 15 14.7-15 14.6 15 29.3-15 14.3 15.8 15-15.8 21.6 15.8 22.3-15.8 14.6 15 14.7-15" transform="matrix(.16672 0 0 .46773 253.9 31.9)"/>
    <path stroke-width=".2" d="m432.3 435.8-7.1 39m10.6-39v39m7.1-39v39m7.1-39 3.5 39m3.6-39 3.5 39" transform="matrix(.68905 0 0 .65843 16.2 -144)"/>
  </g>
  <g stroke="#000" stroke-width="2.5">
    <path fill="#a77b3b" fill-rule="evenodd" d="M318.9 361.4c35.4 17.7 35.4 53.2 35.4 70.9-1.2 16.1 0 354.3 0 354.3s-2.3-20-17.7-35.4L319 733.5l-17.7-17.7c-13-11.8-17.7-35.5-17.7-53.2v-248s0-17.8 35.4-53.2z" transform="matrix(-.68905 0 0 .65843 443.4 -144)"/>
    <path fill="none" d="M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7" transform="matrix(-.68905 0 0 .65843 443.4 -237.3)"/>
    <path fill="none" d="M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7" transform="matrix(-.68905 0 0 -.65843 443.4 530.2)"/>
    <path fill="none" d="M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7" transform="matrix(-.68905 0 0 .65843 443.4 -190.7)"/>
    <path fill="none" d="m301.4 557-.2 158.8" transform="matrix(-.68905 0 0 1.24911 443.4 -566.8)"/>
    <path fill="none" d="m301.4 539.3-.2 176.5" transform="matrix(-.68905 0 0 1.12111 431.4 -464)"/>
    <path fill="none" d="m301.4 539.3-.2 176.5" transform="matrix(-.68905 0 0 1.2559 419.2 -548.3)"/>
  </g>
  <g stroke="#000" stroke-width="2.5">
    <path fill="#a77b3b" fill-rule="evenodd" d="M318.9 361.4c35.4 17.7 35.4 53.2 35.4 70.9-1.2 16.1 0 354.3 0 354.3s-2.3-20-17.7-35.4L319 733.5l-17.7-17.7c-13-11.8-17.7-35.5-17.7-53.2v-248s0-17.8 35.4-53.2z" transform="matrix(.68905 0 0 .65843 199.3 -144)"/>
    <path fill="none" d="M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7" transform="matrix(.68905 0 0 .65843 199.3 -237.3)"/>
    <path fill="none" d="M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7" transform="matrix(.68905 0 0 -.65843 199.3 530.2)"/>
    <path fill="none" d="M283.5 574c.4 0 17.7-17.7 17.7-17.7l17.7 17.7 17.7-17.7 17.7 17.7" transform="matrix(.68905 0 0 .65843 199.3 -190.7)"/>
    <path fill="none" d="m301.4 557-.2 158.8" transform="matrix(.68905 0 0 1.24911 199.3 -566.8)"/>
    <path fill="none" d="m301.4 539.3-.2 176.5" transform="matrix(.68905 0 0 1.12111 211.4 -464)"/>
    <path fill="none" d="m301.4 539.3-.2 176.5" transform="matrix(.68905 0 0 1.2559 223.6 -548.3)"/>
  </g>
  <path fill="#a77b3b" fill-rule="evenodd" stroke="#000" stroke-width="2.5" d="M177.2 696.3c0 24.4-9.6 44.3-21.3 44.3s-21.3-19.9-21.3-44.3S144.3 652 156 652s21.3 19.8 21.3 44.3z" transform="matrix(.63605 .25323 -.26502 .60778 361.1 -165.2)"/>
  <path fill="red" fill-rule="evenodd" d="M248.1 175.6h146.5v70H248.1z"/>
  <path fill="#564dff" fill-rule="evenodd" d="M248.1 245.6h146.5v35c0 23.3-36.6 23.3-73.2 46.6C284.7 304 248 304 248 280.6z"/>
  <path fill="none" stroke="#ff0" stroke-width="2" d="M336.6 485.4h212.6V645c0 35.4-53.1 35.4-106.3 70.9-53.1-35.5-106.3-35.5-106.3-71V485.5z" transform="matrix(.68905 0 0 .65843 16.2 -144)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="2.5" d="M385.6 129.9S335 185.4 335 238.5s53.1 70.9 53.1 70.9-17.7 0-17.7 70.8c0 35.5 53.1 17.8 53.1 35.5s-.7 60.5 0 88.6c0 17.7-35.4 0-35.4 17.7 0 8.8 26.6 53.1 53.2 53.1s53.1-44.3 53.1-53.1c0-17.7-35.4 0-35.4-17.7v-88.6c0-17.7 53.1 0 53.1-35.5 0-70.8-17.7-70.8-17.7-70.8s53.2-17.7 53.2-70.9-50.7-108.6-50.7-108.6 28.5 73.2 28.5 108.6c0 17.7-13.3 53.2-48.7 53.2 0 0-9-17.8-17.7 0 0 0-10.2-17.8-17.7 0-2.6 6-7.2-17.8-17.8 0-4.4 4.7-8-17.8-17.7 0-17.7 0-53.1-17.8-53.1-53.2s32.9-108.6 32.9-108.6z" transform="matrix(.48234 0 0 .30917 108.5 140.1)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="2.5" d="M382.7 248c-3.6 3.6 4.6 61.3 7 63.8 3.6 3.5 24.9 3.5 28.4 0 2.5-2.5 0-56.7-3.5-60.2-3.6-3.6-29.4-6-32-3.6z" transform="matrix(.48234 0 0 .30917 110.4 201.6)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="2.5" d="M382.7 248c-3.6 3.6 4.6 61.3 7 63.8 3.6 3.5 24.9 3.5 28.4 0 2.5-2.5 0-56.7-3.5-60.2-3.6-3.6-29.4-6-32-3.6z" transform="matrix(-.48234 0 0 .30917 532.4 201.6)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="2.5" d="M414.6 228.5a16 16 0 1 1-32 0 16 16 0 0 1 32 0z" transform="matrix(.5544 0 0 .38542 82.7 183.7)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="2.5" d="M414.6 228.5a16 16 0 1 1-32 0 16 16 0 0 1 32 0z" transform="matrix(.55441 0 0 .38543 118 183.7)"/>
  <path fill-rule="evenodd" d="M336.8 307.5c0 1.5-2 2.7-4.3 2.7-2.4 0-4.3-1.2-4.3-2.7s2-2.7 4.3-2.7 4.3 1.2 4.3 2.7m-22.3 0c0 1.5-1.9 2.7-4.2 2.7s-4.3-1.2-4.3-2.7 1.9-2.7 4.3-2.7c2.3 0 4.2 1.2 4.2 2.7"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="m439.4 550-7.8-10.3-12.8 1.7 1.8-12.8-10.3-7.7 10.3-7.8-1.8-12.8 12.8 1.8 7.8-10.3 7.8 10.3 12.7-1.8-1.7 12.8 10.2 7.8-10.2 7.8 1.7 12.7-12.8-1.7z" transform="matrix(.67225 0 0 .64237 26 -133.3)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="m496 591.7 21.3 10.7 21.3-10.7-21.3-10.6z" transform="matrix(.68905 0 0 .65843 16.2 -144)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="m496 591.7 21.3 10.7 21.3-10.7-21.3-10.6z" transform="matrix(.68905 0 0 .65843 -88.8 -144)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M535 659c-3.5-7-14.1-10.6-21.2-10.6s-14.2 0-21.3 10.7c0-14.2 10.5-21.3 21.3-21.3a23 23 0 0 1 21.2 21.3z" transform="matrix(.59753 -.3279 .34316 .57097 -165.2 86.5)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z" transform="matrix(.68905 0 0 .65843 13.7 -155.7)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z" transform="matrix(.68905 0 0 .65843 8.8 -139.4)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z" transform="matrix(.68905 0 0 .65843 6.4 -148.7)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z" transform="matrix(.68905 0 0 .65843 18.6 -139.4)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z" transform="matrix(.68905 0 0 .65843 21 -148.7)"/>
  <path fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M386.2 652a7 7 0 1 1-14.1 0 7 7 0 0 1 14.1 0z" transform="matrix(.68905 0 0 .65843 13.7 -146.4)"/>
  <g fill-rule="evenodd">
    <path fill="#da4500" d="M297.8 120.4c-12.4 0-14 2-19.6 3.9 0-5.4 13.8-11.7 26-11.7 0 3.9-3.2 7.8-6.4 7.8"/>
    <path fill="#cac9c7" d="M316.5 108c0 2.5-2.2 4.6-4.9 4.6s-4.9-2.1-4.9-4.7 2.2-4.6 4.9-4.6 4.9 2 4.9 4.6z"/>
    <path fill="#ff0" stroke="#000" stroke-width="1.1" d="M361.4 357.9v10.6h17.7v53.1h10.7v-53.1h17.7v-10.6h-17.7v-14.2H379v14.2z" transform="matrix(.68905 0 0 .65843 16.2 -144)"/>
    <path fill="#da4500" d="M304.3 112.6a79 79 0 0 0-29.3 3.9c0-7.2 8.4-15.6 22.8-15.6 3.2 0 6.5 7.8 6.5 11.7"/>
  </g>
  <g fill-rule="evenodd">
    <path fill="#008500" stroke="#000" stroke-width=".7" d="M67.3 613c-14.2-14.2-16.6-21.4 3.6-10.1l283.7 247.5-3.4 7L67.4 613z" transform="matrix(.38821 .29653 -.14073 .23692 237.4 71.3)"/>
    <path fill="#008f00" d="M228.4 330.4c.8-10.6-18.6-22-19.4-21.3-.7.8 1.2 7 4.9 10.1-7-3.6-14.4-5.8-14.6-4.3-.6 2.2 11 7.2 12 9.2 0 1.4-8.6 1.2-8.4 2.6s24.3 13.6 25.5 3.7M209 299.6c.8-10.6-18.6-22-19.3-21.3-.8.7 1.1 6.9 4.8 10.1-7-3.6-14.4-5.9-14.6-4.3-.5 2.1 11 7.2 12 9.2.1 1.4-8.5 1.2-8.4 2.6.2 1.4 24.3 13.5 25.5 3.7m-14.8-28c.8-10.6-18.6-22-19.4-21.3s1.2 6.9 4.9 10.1c-7-3.6-14.4-5.9-14.6-4.3-.5 2.1 11 7.2 12 9.2 0 1.4-8.5 1.2-8.4 2.6.2 1.4 24.3 13.6 25.5 3.7m-14.6-30.4c.7-10.5-18.6-22-19.4-21.3-.8.8 1.2 7 4.8 10.2-7-3.7-14.4-5.9-14.5-4.3-.6 2.1 11 7.2 11.9 9.1.1 1.4-8.5 1.3-8.3 2.7s24.2 13.5 25.5 3.6"/>
    <path fill="#008f00" d="M184.6 239.9c9.4-5.7 7.5-27.4 6.5-27.6-1.1-.1-5.2 5-5.7 9.8-1.1-7.6-3.6-14.6-5-13.8-2.1.8.4 12.7-.7 14.6-1 1-6-5.8-7-4.8-1.2 1 2.8 26.7 12 21.8zm13.6 26.6c10.8-2.4 16.7-23.4 15.7-23.9s-6.6 3-8.7 7.4c1.6-7.5 1.7-14.9 0-14.6-2.3.1-4 12.1-5.7 13.5-1.3.6-3.7-7.3-5-6.8-1.4.6-6.6 26.1 3.7 24.4m16.2 27.2c9.9-4.8 10-26.6 9-26.8-1-.3-5.5 4.5-6.5 9.2-.4-7.7-2.2-14.8-3.7-14.1-2.2.6-.8 12.6-2 14.4-1.2.9-5.5-6.3-6.7-5.4s.4 26.8 10 22.7zm17.6 35.6c10.3-3.9 12.8-25.5 11.8-25.9s-6 4-7.5 8.6c.4-7.7-.6-15-2.2-14.4-2.3.4-2.1 12.5-3.5 14.2-1.3.7-4.8-6.8-6-6-1.3.6-2.5 26.7 7.4 23.5"/>
  </g>
  <path fill="#ff1900" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M209 776c0 7.8-10.2 14.2-23 14.2s-23-6.4-23-14.2 10.3-14.2 23-14.2 23 6.4 23 14.2z" transform="matrix(.60164 .32097 -.3359 .5749 389.6 -146.8)"/>
  <g fill="#ff0" fill-rule="evenodd" stroke="#000" stroke-width=".5">
    <path d="M156 414.6v-7.1h7v-7.1h7v7h7.2v7.2H170v17.7h-7v-17.7zm7 60.2h7v205.5h-7z" transform="matrix(.49887 .1571 -.1826 .4713 451.4 -3.7)"/>
    <path d="M159.4 676.8h14.2v56.7h-14.2zM156 439.4h21.3c14.1 0-3.6 39-3.6 39h-14.1s-17.8-39-3.6-39zm17.6-5.4c0 3-3.1 5.4-7 5.4s-7.1-2.4-7.1-5.3 3.1-5.4 7-5.4 7.1 2.4 7.1 5.4z" transform="matrix(.49887 .1571 -.1826 .4713 451.4 -3.7)"/>
  </g>
  <path fill="#ff1900" fill-rule="evenodd" stroke="#000" stroke-width="1.1" d="M209 776c0 7.8-10.2 14.2-23 14.2s-23-6.4-23-14.2 10.3-14.2 23-14.2 23 6.4 23 14.2z" transform="matrix(.57449 -.36357 .38048 .54895 -2.3 4.2)"/>
</svg>
`,ru:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ru" viewBox="0 0 640 480">
  <path fill="#fff" d="M0 0h640v160H0z"/>
  <path fill="#0039a6" d="M0 160h640v160H0z"/>
  <path fill="#d52b1e" d="M0 320h640v160H0z"/>
</svg>
`,tj:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icons-tj" viewBox="0 0 640 480">
  <path fill="#060" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 0h640v342.9H0z"/>
  <path fill="#c00" d="M0 0h640v137.1H0z"/>
  <path fill="#f8c300" d="M300.8 233.6a8.6 8.6 0 0 1 16 4V272h6.4v-34.3a8.6 8.6 0 0 1 16-4 20.2 20.2 0 1 0-38.4 0"/>
  <path fill="#fff" d="M305.4 224.7a14 14 0 0 1 14.6 6.5 14 14 0 0 1 14.6-6.5 14.7 14.7 0 0 0-29.2 0"/>
  <path id="tj-a" fill="#f8c300" d="M316.8 258.3a26 26 0 0 1-43.8 16.6 27 27 0 0 1-41 12c2.5 25 40 19.9 42.8-4.4 11.7 20.7 37.6 14.7 45.2-10.6z"/>
  <use xlink:href="#tj-a" width="100%" height="100%" fill="#f8c300" transform="matrix(-1 0 0 1 640 0)"/>
  <path id="tj-b" fill="#f8c300" d="M291.8 302.6c-5.3 11.3-15.7 13.2-24.8 4.1 0 0 3.6-2.6 7.6-3.3-.8-3.1.7-7.5 2.9-9.8a15 15 0 0 1 6.1 8.1c5.5-.7 8.2 1 8.2 1z"/>
  <use xlink:href="#tj-b" width="100%" height="100%" fill="#f8c300" transform="rotate(9.4 320 551.3)"/>
  <use xlink:href="#tj-b" width="100%" height="100%" fill="#f8c300" transform="rotate(18.7 320 551.3)"/>
  <path fill="none" stroke="#f8c300" stroke-width="11" d="M253.5 327.8a233 233 0 0 1 133 0"/>
  <g fill="#f8c300" transform="translate(320 164.6)scale(.68571)">
    <path id="tj-c" d="m301930 415571-790463-574305h977066l-790463 574305L0-513674z" transform="scale(.00005)"/>
  </g>
  <g id="tj-d" fill="#f8c300" transform="translate(320 260.6)scale(.68571)">
    <use xlink:href="#tj-c" width="100%" height="100%" transform="translate(-70 -121.2)"/>
    <use xlink:href="#tj-c" width="100%" height="100%" transform="translate(-121.2 -70)"/>
    <use xlink:href="#tj-c" width="100%" height="100%" transform="translate(-140)"/>
  </g>
  <use xlink:href="#tj-d" width="100%" height="100%" fill="#f8c300" transform="matrix(-1 0 0 1 640 0)"/>
</svg>
`,tm:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-tm" viewBox="0 0 640 480">
  <path fill="#00843d" d="M0 0h640v480H0Z"/>
  <path fill="#fff" d="M357.6 53A59.7 59.7 0 1 1 295 153.7a59.7 59.7 0 0 0 62.3-100.1ZM301 97l6.4-20.8-17.7 12.9h21.9l-17.8-12.9Zm0-30.6 6.4-20.8-17.7 12.9h21.9l-17.8-13.2ZM331.2 82l6.4-20.8-17.8 12.9h22L324 61.2Zm-61 30.3 6.9-20.8-17.8 12.8h22l-17.8-12.8Zm30.3 15.4 6.8-20.7-17.7 12.8h21.9L293.7 107z"/>
  <path fill="#d22630" d="M86.6 0h129.6v480H86.6Z"/>
  <g fill="#383739">
    <path d="M118 0h-4.2l-8.3 7.6-3-3.4h3l-.8-3h-4.9l-10.2 9V14h5v-3l2.2 2.2-5.3 4.6L94 20l-7.5 6.8v5L99 20.3l-2.2-2.6 4.9-4.6L97.5 9l2.7-3 5.6 5.2ZM87 0v8.7L89.5 6V2.3h3L95.3 0Zm22.6 0h-3l.4 2.3z"/>
    <path fill="#ffc72c" d="M117.6 0h-3.8l-8 7.6-3.7-3.8h3.4l-.8-2.7h-4.5l-9.9 9.5v3h3.8V9.8l3.4 3.4-5.3 4.6 2.3 2.2-7.6 7.6v3.8L98.3 20 96 17.8l5.3-4.6-4.5-4.1 3.8-3.4 5.2 5.3 11.4-11Zm-31 0v8.3l2.2-2.6V1.9h3.4L94.5 0Zm22.6 0h-1.8v1.5z"/>
  </g>
  <g fill="#383739">
    <path d="M86.6 55.6v4.9l7.2 6.8-2.7 2.2 5.3 5-2.3 1.8v-3h-4.5v3.8l10.2 9.5h5l.7-3.8H102l3-2.7 8.3 7.6-8.3 6.8-3-2.7h3l-.8-3.7h-4.9l-9.8 10.2v3.7h5v-3.7l2.2 2.2-5.3 4.6 2.6 2.6-7.5 6.8v4.6L99 107.7l-2.2-2.6 4.9-4.6-4.2-4.1 2.7-2.7 5.6 4.6 12.5-11.4-12.5-11.3-5.6 5.3-2.7-2.7 4.2-4.1-5-5L99 67 87 55.6zm0 22.6v18.2l2.6-3v-3.8h3l2.7-2.3-2.7-2.3h-3v-3.7zm20.8 6.5v4.9l2.6-2.3z"/>
    <path fill="#ffc72c" d="M86.6 56.3v3.8l7.5 7.2-2.2 2.2 5.3 5-3.4 2.6v-3.4H90v3l9.8 9.5h4.5l.8-2.7h-3.8l4.2-3.8 8.7 7.6-8.7 7.6-3.8-3.8h3.4l-.8-2.3h-4.5l-9.8 9v3.1h3.8v-3.8l3.4 3.4-5.3 4.6 2.2 2.6-7.5 7.2v3.8l11.3-11.4-2.3-2.2 5.3-4.6-4.5-4.1 3.8-3.4 5.6 5.3 11.8-11-12.1-11-5.7 5.3-3.4-3 4.5-4.1-5.3-5 2.7-2.2zm0 22.7v16.6l2.2-2.2v-3.8h3.4l2.3-2.3-2.3-1.9h-3.4v-3.8zm21.1 6.4v3.4l2-1.5Z"/>
  </g>
  <g fill="#383739">
    <path d="M86.6 145.9v5.3l7.2 6.8-2.7 2.3 5.3 4.5-2.3 2.3v-3h-4.5v3.7l10.2 9h5l.7-3H102l3-3 8.3 7.2-8.3 7.6-3-3.4h3l-.8-3.4h-4.9l-10.2 9.4v3.8h5.3v-3l2.3 1.9-5.3 4.9L94 198l-7.5 6.9v4.9L99 198.4l-2.2-2.6 4.9-5-4.2-3.7 2.7-3 5.6 4.9 12.5-11.4-12.5-11.3-5.6 5.3-2.7-3 4.2-3.8-5-5 2.3-2.2-12-11.3zm0 22.7v17.7l2.6-2.6v-3.8h3l2.7-2.3-2.7-2.6h-3v-3.4zm20.8 6.4v5l2.6-2.7z"/>
    <path fill="#ffc72c" d="M86.6 146.3v3.7l7.5 7.6L92 160l5.3 4.5-3.4 3v-3.7H90v3.7l9.8 8.7h4.5l.8-2.6h-3.8l4.2-3.8 8.7 7.6-8.7 7.9-3.8-3.8h3.4l-.8-2.6h-4.5l-9.8 9.4v3h3.8v-3.7l3.4 3-5.3 4.9 2.2 2.3-7.5 7.5v3.8l11.3-11.3-2.3-2.3 5.3-5-4.5-3.7 3.8-3.8 5.6 6 11.8-11.3-12.1-10.5-5.7 5.2-3.4-3.4 4.5-3.7-5.3-5 2.7-2.2zm0 22.6v17l2.2-2.6v-3.8h3.4l2.3-1.9-2.3-2.2h-3.4v-3.8l-2.2-2.3zm21.1 6.8v3.4l2-1.8Z"/>
  </g>
  <g fill="#383739">
    <path d="M86.6 236.2v4.6l7.2 6.8-2.7 2.2 5.3 5-2.3 2.2v-3h-4.5v3.8l10.2 9h5l.7-3.4H102l3-2.6 8.3 7.2-8.3 7.1-3-3h3l-.8-3.4h-4.9l-10.2 9.5v3.8h5.3v-3l2.3 1.8-5.3 5L94 288l-7.5 6.8v5L99 288.3l-2.2-2.7 4.9-4.9-4.2-3.8 2.7-3 5.6 5.3 12.5-11.3-12.5-11.4-5.6 5-2.7-2.7 4.2-3.8-5-5.3 2.3-2.2-12-11.4zm0 22.7v17.8l2.6-3v-3.5h3L95 268l-2.7-2.7h-3V262zm20.8 6.4v5l2.6-2.7z"/>
    <path fill="#ffc72c" d="M86.6 236.6v3.8l7.5 7.5-2.2 2 5.3 4.8-3.4 3V254H90v3.4l9.8 9h4.5l.8-2.6h-3.8l4.2-3.8 8.7 7.6-8.7 8-3.8-3.9h3.4l-.8-2.6h-4.5l-9.8 9v3.5h3.8v-3.8l3.4 3-5.3 5L94 288l-7.5 7.6v3.7L97.9 288l-2.3-2.3 5.3-4.9-4.5-3.8 3.8-3.7 5.6 5.6 11.8-11.3-12.1-10.6-5.7 5.3-3.4-3.4 4.5-3.8-5.3-5.3 2.7-2.2zm0 22.7v17l2.2-2.7V270h3.4l2.3-2-2.3-2.2h-3.4V262l-2.2-2.2zm21.1 6.8v3.4l2-2Z"/>
  </g>
  <g fill="#383739">
    <path d="M86.6 326.6v4.5l7.2 6.8-2.7 2.3 5.3 4.9-2.3 1.9v-3h-4.5v3.7l10.2 9.5h5l.7-3.4H102l3-3 8.3 7.5-8.3 7.2-3-3h3l-.8-3.4h-4.9l-10.2 9.4v3.8h5.3v-3.4l2.3 2.2-5.3 5 2.6 2.2-7.5 6.8v4.6L99 378.3l-2.2-2.2 4.9-5-4.2-4.1 2.7-2.7 5.6 5.3 12.5-11.3-12.5-11.3-5.6 4.9-2.7-2.7 4.2-4.1-5-5L99 338zm0 22.6V367l2.6-3v-3.4h3l2.7-2.7-2.7-2.2h-3v-3.8zm20.8 6.5v4.5l2.6-2.3z"/>
    <path fill="#ffc72c" d="M86.6 327v3.7L94 338l-2.2 2.3 5.3 4.9-3.4 3v-3.8H90v3.4l9.8 9h4.5l.8-2.6h-3.8l4.2-3.7 8.7 7.5-8.7 8-3.8-3.8h3.4l-.8-2.7h-4.5l-9.8 9.1v3.4h3.8v-3.8l3.4 3-5.3 5 2.2 2.2-7.5 7.6v3.4L97.9 378l-2.3-2 5.3-4.9-4.5-4.1 3.8-3.4 5.6 5.3 11.8-11-12.1-11-5.7 5.4-3.4-3 4.5-4.2-5.3-5 2.7-2.2Zm0 22.6v17l2.2-2.3v-3.7h3.4l2.3-2.3-2.3-1.9h-3.4v-3.8l-2.2-2.6zm21.1 6.4v3.8l2-1.9Z"/>
  </g>
  <g fill="#383739">
    <path d="M184.5 0h4.5l7.6 7.6 3.8-3.8h-3l.7-3h4.9l10.2 9v3.8H208v-3l-2.3 2.3 5.3 4.5-2.6 2.3 7.6 6.8v4.9L203.4 20l2.2-2.6-4.9-4.5 4.2-4.2-2.7-3-5.6 5.6Zm31.7 0v8.7l-3-2.7V2.3h-3L207.5 0Zm-23.8 0h3l-.3 2.3z"/>
    <path fill="#ffc72c" d="M185.2 0h3l8.8 7.6 3.7-3.8h-3.4l.8-2.7h4.5l9.9 9.5v3h-3.8V9.8l-3 3.4 4.9 4.6-2.3 2.6 7.6 7.2v3.8L204.5 20l2.3-2.2-5.3-4.6 4.5-4.1-3.8-3.4-4.9 5.6L185 0Zm31 0v8.3l-2.6-2.6V1.9h-3.4l-2-1.9Zm-23.4 0h2.3v1.5z"/>
    <path d="M216.2 55.6v4.9l-7.5 6.8 2.6 2.2-5.3 5 2.3 1.8v-3h4.5v3.8l-10.2 9.5h-4.9l-.7-3.8h3l-3-2.7-8 7.6 7.6 6.8 3.4-2.7h-3l.7-3.7h5l10.1 9.8v3.8H208v-3.4l-2.3 2.2 5.3 4.6-2.6 2.6 7.6 6.8v4.6l-12.5-11.4 2.2-2.6-4.9-4.6 4.2-4.1-2.7-2.7-5.6 4.6L184 86.9l12.5-11.3 5.6 5.3 2.7-2.7-4.2-4.1 5-5-2.3-2.2 12.5-11.3zm0 22.6v18.2l-3-3v-3.8h-3l-2.7-2.3 2.7-2.3h3v-3.7zm-21.1 6.5.3 2.6-.3 2.3-2.7-2.3z"/>
    <path fill="#ffc72c" d="M216.2 56.3v3.8l-8.3 6.8 2.3 2.3-5 4.9 3 2.6v-3.4h3.9v3l-9.9 9.5h-4.5l-.7-2.7h3.7l-4.1-3.7-8.7 7.5 8.7 7.6 3.8-3.8H197l.7-2.3h4.5l9.9 9.1v3h-3.8v-3.7l-3 3.4 4.9 4.5-2.3 2.6 7.6 7.2v3.8L204 107l2.3-2.3-5.3-4.5 4.5-4.2-3.7-3.4-5.3 5.3-12.1-11 12-11 5.7 5.4 3.4-3-4.5-4.2 5.3-5-2.6-2.2zm0 22.7v16.6l-2.6-2.2v-3.8h-3.4l-2-2.3 2-1.9h3.4v-3.8zm-21.5 6.4.4 2v1.4l-2.3-1.5Z"/>
    <path d="M216.2 145.9v5.3l-7.5 6.8 2.6 2.3-5.3 4.5 2.3 2.3v-3h4.5v3.7l-10.2 9h-4.9l-1.1-3h3l-3-3-7.6 6.8 7.6 7.6 3.4-3.4h-3l.7-3.4h5l10.1 9.4v3.8H208v-3l-2.3 1.9 5.3 4.9-2.6 2.3 7.6 6.8v4.9L203.4 198l2.2-2.6-4.9-5 4.2-3.7-2.7-3-5.6 5.3-12.5-11.4 12.5-11.3 5.6 5.3 2.7-3-4.2-3.8 5-5-2.3-2.2 12.5-11.3zm0 22.7v17.7l-3-2.6v-3.8h-3l-2.7-2.3 2.7-2.6h3v-3.4zm-21.1 6.4.3 2.3-.3 2.6-2.7-2.6z"/>
    <path fill="#ffc72c" d="M216.2 146.3v3.7l-8 7.6 2.4 2.3-5 4.5 3 3v-3.7h3.9v3.7l-9.9 8.7h-4.5l-.8-2.6h3.8l-4.5-3.4-8.7 7.5 8.7 8 3.8-3.8H197l.7-2.7h4.5l9.9 9.5v3h-3.8v-3.8l-3 3 4.9 5-2.3 2.2 7.6 7.6v3.8L204 198l2.3-2.2-5.3-5 4.5-3.7-3.7-3.8-5.3 5.7-12.1-11.4 12-10.5 5.7 5.2 3.4-3.4-4.5-3.7 5.3-5-2.6-2.2zm0 22.6v17l-2.6-2.6v-3.8h-3.4l-2-1.9 2-2.2h3.4v-3.8l2.6-2.3zm-21.5 6.8.4 1.6v1.8l-2.3-1.8Z"/>
    <path d="M216.2 236.2v4.6l-7.5 6.8 2.6 2.2-5.3 5 2.3 2.2v-3h4.5v3.8l-10.2 9h-4.9l-.7-3.4h3l-3-2.6-8 7.2 7.6 7.1 3.4-3h-3l.7-3.4h5l10.1 9.5v3.8H208v-3l-2.3 1.8 5.3 5-2.6 2.2 7.6 6.8v5l-12.5-11.4 2.2-2.7-4.9-4.9 4.2-3.8-2.7-3-5.6 5.3L184 268l12.5-11.4 5.6 5 2.7-2.7-4.2-3.8 5-5.3-2.3-2.2 12.5-11.4zm0 22.7v17.8l-3-3v-3.5h-3l-2.7-2.2 2.7-2.7h3V262zm-21.1 6.4.3 2.3-.3 2.6-2.7-2.6z"/>
    <path fill="#ffc72c" d="M216.2 236.6v3.8l-8 7.5 2.4 2-5 4.8 3 3V254h3.9v3.4l-9.9 9h-4.5l-.8-2.6h3.8L197 260l-8.7 7.6 8.7 8 3.7-3.9h-3.4l.8-2.6h4.5l9.9 9v3.5h-3.8v-3.8l-3 3 4.9 5-2.3 2.2 7.6 7.6v3.7L204.5 288l2.3-2.3-5.3-4.9 4.5-3.8-3.8-3.7-5.2 5.6-12.1-11.3 12-10.6 5.7 5.3 3.4-3.4-4.5-3.8 5.3-5.3-2.7-2.2zm0 22.7v17l-2.6-2.7V270h-3.4l-2-2 2-2.2h3.4V262l2.6-2.2zm-21.5 6.8.4 1.5v1.9l-2.3-2Z"/>
    <path d="M216.2 326.6v4.5l-7.5 6.8 2.6 2.3-5.3 4.9 2.3 1.9v-3h4.5v3.7l-10.2 9.5h-4.9l-.7-3.4h3l-3-3-8 7.5 7.6 7.2 3.4-3h-3l.7-3.4h5l10.1 9.4v3.8H208v-3.4l-2.3 2.2 5.3 5-2.6 2.2 7.6 6.8v4.6l-12.5-11.4 2.2-2.2-4.9-5 4.2-4.1-2.7-2.7-5.6 5.3-12.5-11.3 12.5-11.3 5.6 4.9 2.7-2.7-4.2-4.1 5-5-2.3-2.2zm0 22.6V367l-3-3v-3.4h-3l-2.7-2.7 2.7-2.2h3v-3.8zm-21.1 6.5.3 2.2-.3 2.3-2.7-2.3z"/>
    <path fill="#ffc72c" d="M216.2 327v3.7L208 338l2.3 2.3-5 4.9 3 3v-3.8h3.9v3.4l-9.9 9h-4.5l-.7-2.6h3.7l-4.1-3.7-8.7 7.5 8.7 8 3.8-3.8H197l.7-2.7h4.5l9.9 9.1v3.4h-3.8v-3.8l-3 3 4.9 5-2.3 2.2 7.6 7.6v3.4L204 378l2.3-2-5.3-4.9 4.5-4.1-3.7-3.4-5.3 5.3-12.1-11 12-11 5.7 5.4 3.4-3-4.5-4.2 5.3-5-2.6-2.2zm0 22.6v17l-2.6-2.3v-3.7h-3.4l-2-2.3 2-1.9h3.4v-3.8l2.6-2.6zm-21.5 6.4.4 2v1.8l-2.3-1.9Z"/>
  </g>
  <path fill="#ffc72c" d="M96.8 424.8c.7 2.7 3 4.6 3.8 7.6.7-3 1.5-5.7 1-8.7-.7-2.3-2.6-3.8-2.6-6.4-2.2 1.8-2.6 4.5-2.2 7.5m-.4 11.4a18 18 0 0 0 7.2 5.6c-.8-2.2 0-3.8 1.5-5.6 1.1-2 1.9-3.8.7-6.5a14 14 0 0 1-1.8 3.4 10 10 0 0 0-2.3 5.3c-1.5-1.1-1.9-2.6-2.7-4.1a13 13 0 0 0-5.2-5.3c.7 2.6 1 4.9 2.6 7.2m10.2 7.5-.8 3.8-4.1-3c-1.9-2-4.2-2.7-5.7-5a9 9 0 0 0 3.8 7.2l8 5c-.4-2.7.7-5 1.4-7.6a7 7 0 0 0-1.5-6c0 1.8-.7 3.7-1.1 5.2zm5.3 8.7 3 5.3q-3.7-1.4-7.5-3.8c-2.7-1.5-5.7-2.2-8.4-4.5a13 13 0 0 0 9.1 9c3.4.8 6 .4 9.8 2a27 27 0 0 0-2.6-7.6l-2.3-5.3a6 6 0 0 0-1.1 5zm9.8 7.2a12 12 0 0 0 3.8 3.8c-3.8 0-6.8-2-10.6-2.3-2.2 0-4.5.8-6.8.4 3 1.9 5.7 3.8 9 3.8 4.2.7 8.4 0 13.3 0a17 17 0 0 1-4.9-5.7c-1.9-3-3.8-5-7.2-5.3l3.8 5.3zm13.3 6c-6.5 1.2-12.9 2.7-19.7 2.7a30 30 0 0 0 22.3.4c3.8-1.2 7.2-2.3 10.2-2 4.5 0 9.8 2.3 15.9 8.4l2.3-1.9a36 36 0 0 0-31-7.6"/>
  <path fill="#383739" d="M102.8 56.3 92.2 50V34.8l10.6-6.5V20l9.5-5.6h8l15-8.7h31.8l15.1 8.7h7.6l10.6 5.6v8.3l10.2 6.5v15l-10.2 6.5v8l-9.9 6h-8l-15 8.3h-31.8l-15.1-8.3H113l-10.6-6z"/>
  <path fill="#00843d" d="m135.3 6-15 8.7h-7.6l-9.9 5.7v8l-10.2 6.4v15l10.2 6.1v8.4l9.9 5.6h7.5l15.1 8.3h31.8l15.1-8.3h7.6l9.8-5.6v-8.4l10.2-6V34.8l-10.2-6.5v-7.9l-9.8-5.7h-7.6L167.1 6Zm.8 3.4h30.2l15.2 8.4h7.5l7.6 4.1v8.3l10.2 6.5V48l-10.6 6.4v8l-7.2 4.5h-7.5l-15.2 8.3h-30.2L121 67h-7.6l-7.6-4.5v-8L95.6 48V36.7l10.6-6.5V22l7.6-4.1h7.5z"/>
  <path fill="#ffc72c" d="M151.2 42.3V9.4h-15.1l-14.8 8.7h-7.5l-7.6 3.8v8.3L96 36.7V42h55.2v32.8h15.1l15.2-8.3h7.5l6.8-4.1V54l10.6-6.4v-5.3z"/>
  <path fill="#fff" d="M96 42.3v5.3l10.6 6.4v8.4l6.8 3.7h8l15 8.7h14.8V42h55.2v-5.3l-10.6-6.5v-7.5L189 18h-7.5l-15.2-8.7h-15v33Z"/>
  <g fill="#383739">
    <path d="m118.7 21.2-2.6-2.7-2.3 1.5 2.6 2.7-3.7 1.9h7.5l6 6 2-2.3-6.1-5.6v-3.8Z"/>
    <path d="m130.8 20-2.6-2.2-2.3 1.5 2.6 2.2-3.8 2h7.6l6 6 2-2.3-5.7-5.7v-3.7zm-12.9 7.6-2.6-2.3-2.6 2 2.6 2.2-3.4 1.9h7.6l6 6 1.9-2.3-6-5.6v-3.8z"/>
    <path d="M151.2 9.4h-6.4l-3.4 3h-6.8l-4.6 2.7 1.2 2.7 4.1-2.3h2l6.7 7.6 7.2-4.2Z"/>
    <path fill="#d22630" d="m116 18.9 2.3 2.3-1.9 1.1-2.2-1.9zm6.1.8v3l5.7 5.6-1.5 1.6-6-5.7h-6.1l7.5-5zm6-1.6 2.3 2-1.9 1.4-2.2-2.2Zm6.1 0V22l5.7 5.3-1.5 1.9-6-6.4h-6.1l7.5-4.6z"/>
    <path fill="#d22630" d="m115.3 26 2.3 2-2 1.1-2.2-1.9Zm5.7 0v4l6 5.2-1.5 1.6-6-5.7h-6Zm30.2-16.6h-6.4l-3.4 3.8H135l-4.6 2 .8 2.2L135 15h2.6l6 7.6 7.6-3.8Z"/>
    <path d="m118.7 63.5-2.6 2.3-2.3-1.5 2.6-2.3-3.7-2.3h7.5l6-5.7 2 2.3L122 62v3.8z"/>
    <path d="m130.8 64.3-2.6 2.6-2.3-1.5 2.6-2.3-3.8-2.2h7.6l6-5.7 2 1.9-5.7 5.6v3.8zm-12.9-7.6-2.6 2.3-2.6-1.6 2.6-2.2-3.4-2.3h7.6l6-5.7 1.9 2-6 5.6v3.8z"/>
    <path d="M151.2 75.2h-6.4l-3.4-3.4h-6.8l-4.6-2.3 1.2-3 4.1 2.3h2l6.7-7.6 7.6 4.6z"/>
    <path fill="#d22630" d="m116 65.4 2.3-2.3-1.9-1.1-2.2 2.3zm6.1-.4v-3.4l5.7-5.7-1.5-1.5-6 5.7h-6.1l7.5 5zm6 1.5 2.3-2.2-1.9-1.2-2.2 2.3zm6.1-.4v-3.7l5.7-5.3-1.5-1.5-6 5.6h-6.1l7.5 5z"/>
    <path fill="#d22630" d="m115.3 58.6 2.3-2.3-2-1.1-2.2 2.2Zm5.7-.4v-3.4l6-5.7-1.5-1.5-6 5.7h-6Zm30.2 16.6h-6.4l-3.4-3.4H135l-4.6-2.2.8-2 3.8 2h2.6l6.4-7.6 7.2 4.2z"/>
    <path d="m114.5 31.7-3-1-4.1 2.6v.7l-6.5 8.3 6.5 8v.7l3.7 3 3.4-1-1.8-1.6v-2.3l.7-.7h3.4V36.3H113l-.3-.8V33Z"/>
    <path fill="#d22630" d="m107.7 33.6 3.8-2.6 2.3.7-1.5 1.2v2.6l.7 1.2h3.4V48H113l-.7 1.1v2.7l1.5.7-2.3 1.2-3.8-2.7v-.7l-6.4-8 6.4-8.3Z"/>
  </g>
  <g fill="#383739">
    <path d="m183.7 21.2 2.7-2.7 2.2 1.5-2.2 2.7 3 1.9h-7.2l-6 6-2-2.3 6.1-5.6v-3.8Z"/>
    <path d="m171.6 20 2.7-2.2 2.2 1.5-2.2 2.2 3 2H170l-6 6-2-2.3 6.1-5.7v-3.7zm12.9 7.6 2.6-2.3 2.7 2-2.7 2.2 3.4 1.9H183l-5.7 6.4-1.9-2.3 6-5.6V26z"/>
    <path d="M151.2 9.4h6.4l3.8 3h6.4l5 2.7-1.2 2.7-4.5-2.3h-1.9l-6.8 7.6-7.2-4.2Z"/>
    <path fill="#d22630" d="m186.4 18.9-2.3 2.3 1.9 1.1 2.3-1.9zm-5.7.8v3l-6 5.6 1.5 1.6 6-5.7h6l-7.5-5zm-6.8-1.6-2.3 2 2 1.4 2.2-2.2Zm-5.7 0V22l-5.6 5.3 1.5 1.9 6-6.4h6l-7.5-4.6z"/>
    <path fill="#d22630" d="m187.1 26-2.2 2 1.8 1.1 2.3-1.9Zm-5.6 0v4l-6.1 5.2 1.5 1.6 6-5.7h6.1ZM151.2 9.5h6.4l3.4 3.8h6.5l4.5 2-.8 2.2-3.7-2.3h-2.3l-6.8 7.6-7.2-3.8Z"/>
    <path d="m183.7 63.5 2.7 2.3 2.2-1.5-2.2-2.3 3-2.3h-7.2l-6-5.7-2 2.3 6.1 5.7v3.8z"/>
    <path d="m171.6 64.3 2.7 2.6 2.2-1.5-2.2-2.3 3-2.2H170l-6-5.7-2 1.9 6.1 5.6v3.8zm12.9-7.6L187 59l2.7-1.6-2.7-2.2 3.4-2.3H183l-6-5.7-2 2 6 5.6v3.8z"/>
    <path d="M151.2 75.2h6.4l3.8-3.4h6.4l5-2.3-1.2-3-4.5 2.3h-1.9l-6.8-7.6-7.2 4.6z"/>
    <path fill="#d22630" d="M186.4 65.4 184 63l2-1 2.3 2.3zm-5.7-.4v-3.4l-6-5.7 1.5-1.5 6 5.7h6zm-6.4 1.5-2.3-2.2 1.9-1.2 2.3 2.3zm-5.7-.4v-3.7l-6-5L164 56l6 5.7h6l-7.5 5z"/>
    <path fill="#d22630" d="m187.1 58.6-2.2-2.3 1.8-1.1 2.3 2.2zm-5.6-.4v-3.4l-6.1-5.7 1.5-1.5 6 5.7h6.1Zm-30.3 16.6h6.4l3.4-3.4h6.5l4.5-2.2-.8-2-3.7 2h-2.3l-6.8-7.6-7.2 4.2z"/>
    <path d="m187.9 31.7 3-1 4.2 2.6v.7l6.4 8.3-6.4 8v.7l-3.8 3-3.4-1 1.9-1.6v-2.3l-.8-.7h-3.4V36.3h3.8l.4-.8V33Z"/>
    <path fill="#d22630" d="m194.7 33.6-3.8-2.6-2.3.7 1.5 1.2v2.6l-.7 1.2H186V48h3.4l.7 1.1v2.7l-1.5.7 2.3 1.2 3.8-2.7v-.7l6.4-8-6.4-8.3Z"/>
  </g>
  <path fill="#383739" d="m108.9 49.1-1.5-1.5V47l-3.8-4.6 3.8-4.5V37l1.5-1.5 3.4 2.7h-2l2.7 2.6h6l5-3.8v-9.8h11.7l14-8.7v-2.2l-2.3-1.2-2.6 2v1l-2-2.6 3.9-3 4.1-2.7h1.5l3.8 2.7h.8l3.8 3-2 2.6-.3-1-2.7-2h-.7l-2.3 1.5V19l14 8.7h12.1v9.8l4.5 3.8h6l2.7-2.6h-1.5l3-2.7 1.6 1.5v.8l3.7 4.5-3.7 4.5v.8l-1.6 1.5-3-2.6h1.5l-2.6-2.7h-6l-4.6 3.8v9.8h-12.5l-14 8.3v2.3l2.3 1.5h.4l2.6-1.5v-1.1l2 2.6-3.5 2.7h-.4l-4.1 3H150l-3.8-3h-.8l-3.7-3 2.2-2.3v1.1l2.7 1.5h.4l2.2-1.5v-2.3l-14-8.3h-11.7V48l-4.9-3.8h-6L110 47h1.9z"/>
  <path fill="#ffc72c" d="m151.2 70 1.9 1-1.9 1.2zm-4.5 1.8 3.8 3h.7v-2.2L149 71l2.3-1.6V65l-15.1-9h-11v-9.1l-5.6-4.6h-8.7l-2 2.7-2.2-2.7H104l3.7 4.2v.7l1.2 1.6 2.2-2h-1v-.3l2.6-3h6.4l5.3 3.7v9.9h11.3l14.4 8.7v2.6l-2.3 1.5h-1.1l-2.3-1.5v-.7l-1.5 1.5 3 2.6zm-37.8-31.7 1.5 1.9H107zm42.3-27.6-1.5 1.1 1.5 1.1zM192 42.7l1.5 1.5 2-1.9zm-36.3-30.2-3.7-3h-.8v2.2l2.3 2-2.3 1.4V19l15.1 9h11v9.9L183 42h8.7l1.8-2.3 2.3 2.3h2.7l-3.8-3.8V37l-1.2-1-2.2 1.8h1.1l-2.6 3.4h-6.5l-4.9-3.8V27.2h-12l-14-8.3v-2.6l2.2-1.6h1.1l2.3 1.6v.7l1.5-1.9-3-2.6z"/>
  <path fill="#fff" d="m151.2 72.2-1.5-1.1 1.5-1.2zm-40.8-29.9-1.5 2-2-2zm45.3 29.5-3.7 3h-.8v-2.2l2.3-1.5-2.3-1.6V65l15.1-9h11v-9.1l5.7-4.6h8.7l1.8 2.7 2.3-2.7h2.7l-3.8 4.2v.7l-1.2 1.6-2.2-2h1.1v-.3l-2.6-3h-6.5l-4.9 3.7v9.9h-12L152 65.8v2.6l2.2 1.5h1.2l2.2-1.5v-.7l1.5 1.5-3 2.6zm37.8-31.7L192 42h3.4zm-46.8-27.6 3.8-3h.7v2.2l-2.3 2 2.3 1.4V19l-15.1 9h-11v9.9l-5.6 3.8h-8.7l-2-2.3-2.2 2.3H104l3.7-3.8v-1.1l1.2-1.2 2.2 2h-1l2.6 3.3h6.4l5.3-3.8v-9.8h11.3l14.8-8.3v-2.6l-2.3-1.6H147l-2.3 1.6v.7l-1.5-1.9 3-2.6h.8zm4.5 2.6 1.9-1.1-1.9-1.1z"/>
  <path fill="#00843d" d="M151.2 42.3V19.7l-15.1 9h-10.6v9.1l-5.3 4.2h31v22.6l15.1-9H177v-8.7l5.3-4.6z"/>
  <path fill="#d22630" d="m120.2 42.3 5.3 4.6v8.7h10.6l15.1 9V42h31l-5.3-4.2v-9h-10.6l-15-9.1v22.6z"/>
  <path fill="#383739" d="m135.3 31.4-2.6-2.7-2.3 2 2.3 2.2-3 1.9h7.1l6 6 2-2.2-6-5.7V29zm31.8 21.9 2.6 2.3 2.7-1.6-2.7-2.2 3-2.3h-6.4l-6.4-5.7-1.9 2 6 5.6v3.8zm-31.8 0-2.6 2.3-2.3-1.6 2.3-2.2-3-2.3h7.1l6-5.7 2 2-6 5.6v3.8zm31.8-22 2.6-2.6 2.7 2-2.7 2.2 3 1.9h-6.4l-6.4 6-1.9-2.2 6-5.7V29z"/>
  <path fill="#d22630" d="m169.7 55.2-2.2-2.3 1.9-1.1 2.2 2.2zm-5.6-.4v-3.4l-6-5.7 1.4-1.5 6 5.7h6.1zm-31.8-25.3 2.3 1.9-2 1.1-2.2-1.9zm5.7 0v3.8l6 5.3-1.5 1.5-6-5.7h-6l7.5-4.5z"/>
  <path fill="#00843d" d="m169.7 29.5-2.2 1.9 1.9 1.1 2.2-1.9zm-5.6 0v3.8l-6 5.3 1.4 1.5 6-5.7h6.1zm-31.8 26 2.3-2.2-2-1.1-2.2 2.2zm5.7-.3v-3.4l6-5.7-1.5-1.5-6 5.7h-6z"/>
  <path fill="#383739" d="M167 42.3 151.3 53l-15.9-10.6 16-10.6Z"/>
  <path fill="#fff" d="M151.2 32.1 136.1 42h30.2zv20l15-9.8H136l15.1 9.9z"/>
  <path fill="#383739" d="M155.4 45.7v3h-8v-3h-5.6v-7.1h5.6v-3h7.6v3h5.7V46z"/>
  <path fill="#d22630" d="M147.4 36v3h-5.6v3h9.4v-6zm3.8 6h9.5v-3H155v-3h-3.8zm-9.4.3v3.4h5.6v2.7h3.8v-6zm9.4 6h3.8v-2.6h5.7v-3.4h-9.5z"/>
  <path fill="#383739" d="M178.4 162.9v-4.5h12.9v-5h12.5v-41.9h-12.5v-5h-12.9V102h-12.8v-4.5h-28.8v4.5H124v4.6h-13v4.9H98.7v42H111v5.2h13v3.8h12.8v4.6h28.8v-4.6z"/>
  <path fill="#ffc72c" d="M137.2 97.9v4.1h-12.5v4.6H112v4.9H99.4v41.6H112v4.5h12.8v5h12.9v4.5h28v-4.6h12.8V158h12.9v-5H204v-41.5h-12.8V107h-13.6v-4.6h-12.9V98zm3.8 3.4h20.8v4.5h12.8v4.6h12.9v4.9h12.9v34.4h-12.9v5.3h-12.9v3.7h-12.8v4.6h-21.2v-4.6h-12.8V155h-12.9v-5h-12.5v-34.3H115v-5h12.9v-4.9h12.8z"/>
  <path fill="#d22630" d="M128.5 158.7v-4.5h-13.2v-4.5h-12.9v-34h12.9v-5h13.2v-4.5h12.9v-4.5h20.4v4.1h12.8v4.6h12.9v4.9h12.9v34h-12.9v4.5h-13.6v5H161v4.9h-20.4v-5z"/>
  <path fill="#383739" d="m131.2 109.6-3.4-2.6v4.9l-3 1.9v-3l-3 3-3.1-3v3l-3.8-2v4.2l-2.6 2.3v-2.6l-3.8 2.2-3-2.2v2.6L102 116v13.3h-3.8v6.8h3.8v13.2l3.4-2.3v3l3.4-2.6 3.4 2.6v-3l2.6 2.3v4.5l3.8-2.2v3l3-3 3 3v-3.4l3 1.9v4.9l3.5-2.7v3.4l3.4-3 3 3V155l3 2.2v5.3l4.6-4.1v4.5l6-3.8 6 3.8v-4.2l4.6 3.8v-4.9l3-2.3v3.4l3-3 3.8 3V155l3 2.6v-5l3-1.8v3l3.1-3 3 3v-2.6l3.8 2.2V149l2.6-2.3v3l3.8-2.6 3 2.7v-3l3.5 2.2v-12.8h3.7v-6.5h-3.7v-13.2l-3.4 2.3V116l-3.5 2.3-3.4-2.3v2.7l-2.6-2.3v-4.1l-3.8 1.8v-3l-3 3-3-3v3l-3-1.8v-5l-3.5 2.7v-3.4l-3 3-3.8-3v3.4l-2.6-2.3v-4.9l-4.5 3.8V102l-6 3.8-6.1-3.8v3.8l-4.6-3.8v5l-3 2.2v-3.4l-3 3-3.4-3z"/>
  <path fill="#00843d" d="M105.8 119v-3l3 2.3 3.1-2.3v3l3-2.6v32.1l-3-2.2v2.6l-3-2.3-3 2.3v-2.6l-3.5 2.2v-13.2h-3.7v-5.7h3.7v-13.2zm25.8-12 3 2.6 2.6-2.6v3.4l3.4-2.7V157l-3.4-2.3v3.4l-2.6-2.7-3 2.7v-3.4l-3.4 2.6v-49.1l3.4 2.3zm39.3 0-2.7 2.6-3-2.6v3.4l-3.4-2.7V157l3.4-2.3v3.4l3-2.7 2.7 2.7v-3.4l3.4 2.6v-49.1l-3.4 2.3zm25.7 12v-3l-3 2.3-3-2.3v3l-3.1-2.6v32.1l3-2.2v2.6l3-2.3 3 2.3v-2.6l3.5 2.2v-13.2h3.8v-5.7H200v-13.2z"/>
  <path fill="#ffc72c" d="m119 111.9 2.7 2.2 2.7-2.2v2.6l3.8-2.2v40.4l-3.8-2.3v3l-2.7-2.6-2.6 2.6v-3l-3.8 2.3v-40.4l3.8 2.2zm26.5-5-4.5-3.7v59l4.5-4.2v4.5l5.7-3.8 5.7 3.8v-4.9l4.5 3.8v-57.8l-4.5 3.7V102l-5.7 3.8-5.7-3.8zm37.8 5-2.6 2.2-2.6-2.2v2.6l-3.8-2.2v40.4l3.8-2.3v3l2.6-2.6 3 2.6v-3l3.4 2.3v-40.4l-3.8 2.2z"/>
  <g fill="#383739">
    <path d="m107.4 126.6 1.5.8c.3 0 1.1 0 1.5-.8 1.1-1.1 1.1-3.4 1.1-4.9l-1.9 1.9-.7-1.9-1.2 1.9-1.5-1.9c0 1.5 0 3.8 1.2 5zm13.6-3.4-1.2-1.1v-2l-2.2 2.4 3.7 3.7 4.6-3.7-2.3-2.3v1.9l-1.1 1.1v-3.8l1.9-1.5-2.7-2.2-2.6 2.2 1.9 2zm12.4-3.8-.7-1.1V116l-2.7 2.3 4.6 4.2 3.8-3.8-2.3-2.7v2.3l-.8.8v-3.8l2-1.2-2.7-2.2-2.7 2.2 1.5 1.6z"/>
    <path fill="#fff" d="m108.9 122.5.7 1.5 1.5-1.5c0 1.8-.3 3.4-1 3.7a1.5 1.5 0 0 1-2.4 0c-.7-.3-1.1-1.9-1.1-3.7l1.5 1.5zm26-7.2v4.9l1.6-1.9v-1.1l1.5 1.5-3.8 3.8-3.8-3.8 2-1.5v1.5l1.4 1.9v-5l-1.5-1 2.3-2 1.9 2z"/>
    <path fill="#d22630" d="M122.1 119.4v4.6l1.9-1.5v-1.6l1.5 1.6-3.8 3.7-3.8-3.7 1.6-1.6v1.6l1.5 1.5v-4.6l-1.5-1.5 2.2-1.5 2 1.5z"/>
    <path d="m195 126.6-1.5.8q-.5.2-1-.8c-1.6-1.1-1.6-3.4-1.6-4.9l1.9 1.9.7-1.9 1.2 1.9 1.5-1.9c0 1.5 0 3.8-1.1 5zm-13.2-3.4.8-1.1v-2l2.3 2.4-3.8 3.7-4.6-3.7 2.3-2.3v1.9l1.1 1.1v-3.8l-1.8-1.5 2.6-2.2 2.6 2.2-1.5 2zm-12.8-3.8.7-1.1V116l2.7 2.3-4.2 4.2-4.5-3.8 2.6-2.7v2.3l.8.8v-3.8l-1.5-1.2 2.6-2.2 2.7 2.2-2 1.6z"/>
    <path fill="#fff" d="m193.5 122.5-.7 1.5-1.5-1.5c0 1.8.4 3.4 1.1 3.7a1.5 1.5 0 0 0 2.3 0c.7-.3 1.1-1.9 1.1-3.7l-1.1 1.5zm-26-7.2v4.9l-1.5-1.9v-1.1l-1.6 1.5 3.8 3.8 3.8-3.8-1.9-1.5v1.5l-1.5 1.9v-5l1.5-1-1.9-2-2.2 2z"/>
    <path fill="#d22630" d="M180.3 119.4v4.6l-1.5-1.5v-1.6l-1.5 1.6 3.8 3.7 3.8-3.7-2-1.6v1.6l-1.4 1.5v-4.6l1.5-1.5-2.3-1.5-1.9 1.5z"/>
    <path d="m156.1 121-1.1-2.3 3.4-3-3.4-2.7v1.9l-1.1 1.1v-3.7l3-2-5.7-4.5-5.7 3.8 3 2.7v3.4l-1-1.2v-1.9l-3.5 2.7 3.8 3-1.5 1.9z"/>
    <path fill="#d22630" d="m147 120.6 1.2-2-3.8-3 2.7-1.8v1.1l1.8 1.9v-4.5l-2.6-2 5-3.7 4.8 3.8-2.6 1.9v4.9l1.9-2v-1l2.6 1.8-3.8 3 1.5 2z"/>
    <path d="m148.6 110.4 2.6 1.9 2.7-2-2.7-1.8Z"/>
    <path fill="#00843d" d="m151.2 108.9 1.9 1.5-1.9 1.1-1.9-1.1z"/>
  </g>
  <g fill="#383739">
    <path d="M107.4 138.3a2 2 0 0 1 1.5-.7c.3 0 1.1 0 1.5.7 1.1 1.2 1.1 3.4 1.1 5l-1.9-1.6-.7 1.5-1.2-1.5-1.5 1.5c0-1.5 0-3.7 1.2-4.9m13.6 3.4-1.2 1.2v1.9l-2.2-2.3 3.7-3.8 4.6 3.8-2.3 2.3v-2l-1.1-1v3.7l1.9 1.5-2.7 2.3-2.6-2.3 1.9-1.9zm12.4 3.8-.7 1.1v2.3l-2.7-2.3 4.6-4.1 3.8 4.1-2.3 2.3v-2.3l-.8-.7v3.8l2 1.1-2.7 2.3-2.7-2.3 1.5-1.5z"/>
    <path fill="#fff" d="m108.9 142.5.7-1.5 1.5 1.5q0-3-1-3.8a1.5 1.5 0 0 0-2.4 0q-1 .8-1.1 3.8l1.5-1.5zm26 7.2v-5l1.6 2v1.5l1.5-1.6-3.8-3.7-3.8 3.7 2 1.6v-1.6l1.4-1.8v4.9l-1.5 1.1 2.3 1.9 1.9-1.9z"/>
    <path fill="#d22630" d="M122.1 145.5V141l1.9 1.5v1.5l1.5-1.5-3.8-3.8-3.8 3.8 1.6 1.5v-1.5l1.5-1.5v4.5l-1.5 1.5 2.2 1.5 2-1.5z"/>
    <path d="M195 138.3a2 2 0 0 0-1.5-.7q-.5-.2-1 .7c-1.6 1.2-1.6 3.4-1.6 5l1.9-1.6.7 1.5 1.2-1.5 1.5 1.5c0-1.5 0-3.7-1.1-4.9zm-13.2 3.4.8 1.2v1.9l2.3-2.3-3.8-3.8-4.6 3.8 2.3 2.3v-2l1.1-1v3.7l-1.8 1.5 2.6 2.3 2.6-2.3-1.5-1.9zm-12.8 3.8.7 1.1v2.3l2.7-2.3-4.2-4.1-4.5 4.1 2.6 2.3v-2.3l.8-.7v3.8l-1.5 1.1 2.6 2.3 2.7-2.3-2-1.5z"/>
    <path fill="#fff" d="m193.5 142.5-.7-1.5-1.5 1.5q0-3 1.1-3.8a1.5 1.5 0 0 1 2.3 0q1 .8 1.1 3.8l-1.1-1.5zm-26 7.2v-5l-1.5 2v1.5l-1.6-1.6 3.8-3.7 3.8 3.7-1.9 1.6v-1.6l-1.5-1.8v4.9l1.5 1.1-1.9 1.9-2.2-1.9z"/>
    <path fill="#d22630" d="M180.3 145.5V141l-1.5 1.5v1.5l-1.5-1.5 3.8-3.8 3.8 3.8-2 1.5v-1.5l-1.4-1.5v4.5l1.5 1.5-2.3 1.5-1.9-1.5z"/>
    <path d="m156.1 144.4-1.1 1.9 3.4 3-3.4 2.6V150l-1.1-1v3.7l3 1.9-5.7 4.1-5.7-3.7 3-2.7V149l-1 1.1v2l-3.5-2.7 3.8-3-1.5-2z"/>
    <path fill="#d22630" d="m147 144.8 1.2 1.5-3.8 3 2.7 1.9V150l1.8-1.8v4.5l-2.6 1.9 5 3.8 4.8-3.8-2.6-2v-4.4l1.9 1.8v1.2l2.6-2-3.8-3 1.5-1.4z"/>
    <path d="m148.6 155 2.6-2.3 2.7 1.9-2.7 1.9Z"/>
    <path fill="#00843d" d="m151.2 156 1.9-1.4-1.9-1.2-1.9 1.2Z"/>
  </g>
  <path fill="#383739" d="M196.6 130.4h-5.3v-1.9h-17.4l-12.1-7.6h-21.2l-12 7.6H111v2.3h-5.3v3.8h5.3v2.6h17.4l12.1 7.6h21.2l12-7.6h17.5v-2.3h5.3z"/>
  <path fill="#d22630" d="m140.6 121-12 7.5h-17v2.3h-5.4v3.4h5.3v2.2h17l12.1 7.6h21.2l12-7.6H191v-2.2h5.7v-3.4H191v-2.3h-17l-12.1-7.6zm0 1h20.8l11.4 7.3v1h12v4.6h-12.4v1.2l-11 6.8H141l-11.3-6.8v-1.2h-12.1v-4.5H130v-1.1z"/>
  <path fill="#d22630" d="m161.4 122 10.6 7.6v.8h12.5v3.8H172v1.5l-10.6 7.2H141l-10.6-7.2v-1.1H118v-3.8h12.5v-1.5L141 122z"/>
  <g fill="#383739">
    <path d="m135.7 136.4 4.5 3.8 3-2.6-1.4-1.2-1.6.8-1-.8 17.3-13.2h-3.4zm10.2 5.3h3.4l17.4-13.2-4.5-3.8-3 2.7 1.8 1.1 1.2-.8 1.1.8zm7.6 0h3l-17.4-13.2 1.1-.8 1.6.8 1.5-1.1-3-2.3-4.6 3.4Zm9.8-5.3-1.1.8-1.2-.8-1.9 1.2 3 2.2 4.6-3.4-17.4-13.2h-3.8zm-31-3.7 3 1.9 3-2-3-2.2zm15.9-.4 3 2.3 3-2-3-2.2Zm22 0-3.1 2.3-3-2 3-2.2z"/>
    <path fill="#ffc72c" d="m166.3 136.4-4.1 3-2.7-1.8 1.5-.8 1.2.8 1.5-1.2-17-12.8h2.6zm-10.6 5h-2.6l-17-12.9 4.1-3 2.7 1.9-1.1.7-1.6-.7-1.5 1.1zm-6.4 0h-2.6l17-12.9-1.5-1.1-1.2.7-1.5-.7 2.7-2 3.8 3.1zm3.8-17.8h2.6l-17 12.8 1.5 1.2 1.6-.8 1 .8-2.6 1.9-3.7-3z"/>
    <path fill="#00843d" d="m135.3 130.8 2.3 1.9-2.3 1.5-2.6-1.5zm16 0 2.6 1.9-2.7 1.5-2.6-1.5zm15.8 0-2.3 1.9 2.3 1.5 2.6-1.5z"/>
  </g>
  <path fill="#383739" d="m96.4 219.2-1.1 1.9 2.2 1.5-2.2 1.9 1.1 1.5 2.6.4 2.3-1.9 6.4 3.8v-3l-3.7-2.7 3.7-2.3V217l-6.4 3.8-2.3-1.5zm0-11.3-1.1 1.9 2.2 1.5-2.2 1.9 1.1 1.5 2.6.4 2.3-2 6.4 3.8v-3l-3.7-2.6 3.7-2.3v-3.4l-6.4 3.8-2.3-1.5zm0 29.5-1.1-1.6 2.2-1.8-2.2-1.6 1.1-1.8H99l2.3 1.5 6.4-3.8v3.4L104 234l3.7 2.6v3l-6.4-3.8-2.3 2zM206 219.2l1.2 1.9-2.3 1.5 2.3 1.9-1.2 1.5-2.6.4-2.3-1.9-6.4 3.8v-3l3.8-2.7-3.8-2.3V217l6.4 3.8 2.3-1.5zm0-11.3 1.2 1.9-2.3 1.5 2.3 1.9-1.2 1.5-2.6.4-2.3-2-6.4 3.8v-3l3.8-2.6-3.8-2.3v-3.4l6.4 3.8 2.3-1.5zm0 29.5 1.2-1.6-2.3-1.8 2.3-1.6-1.2-1.8h-2.6L201 232l-6.4-3.8v3.4l3.8 2.3-3.8 2.6v3l6.4-3.8 2.3 2zM181.5 189v4.5h3.4v2.3h3.4V192h-3v-3Zm9.8 7.5v3.8h3.8v1.9h3v-3.8h-3v-1.9ZM121 189v4.5h-3.4v2.3h-3.4V192h3v-3Zm60.5 68v-4.5h3.4v-2h3.4v3.9h-3v3zm-60.5 0v-4.5h-3.4v-2h-3.4v3.9h3v3zm70.3-7.6V245h3.8v-2.3h3v3.8h-3v3ZM111 196.5v3.8h-3.7v1.9h-3v-3.8h3v-1.9Zm0 53.3v-4.5h-3.7V243h-3v3.8h3v3zm53-60.8-2.7-2.7-2.6 2.3 2.2 2.3-3 2.6h4.2l1.5-1.5 1.5 1.5h5L167 191l2.3-2.3-2.7-2.3zm-12.9 0-2.6-2.7-2.7 2.3 2.3 2.3-2.7 2.6h4.2l1.5-1.5 1.5 1.5h4.2l-2.7-2.6 2.3-2.3-2.6-2.3zm-12.5 0 2.7-2.7 2.3 2.3-2.3 2.3 3 2.6h-4.2l-1.5-1.5-1.5 1.5h-4.9l3-2.6-2.2-2.3 2.6-2.3 2.7 2.7zm25 68-2.3 3-2.6-2.6 2.2-1.9-3-3h4.2l1.5 1.5 1.5-1.5h5l-3.1 3 2.3 1.9-2.7 2.6zm-12.5 0-2.6 3-2.7-2.6 2.3-1.9-2.7-3h4.2l1.5 1.5 1.5-1.5h4.2l-2.7 3 2.3 1.9-2.6 2.6zm-12.5 0 2.7 3 2.3-2.6-2.3-1.9 3-3h-4.2l-1.5 1.5-1.5-1.5h-4.9l3 3-2.2 1.9 2.6 2.6 2.7-2.6z"/>
  <path fill="#00843d" d="M107.4 225.3v2.6l-6-3.8-2.4 2h-2.2l-1.2-1.6 2.3-1.9-2.3-1.5 1.2-1.5H99l2.3 1.9 6-3.8v2.3l-4.1 2.6zm0-11.4v2.7l-6-3.8-2.4 1.9h-2.2l-1.2-1.5 2.3-2-2.3-1.4 1.2-1.5H99l2.3 1.8 6-3.7v2.2l-4.1 2.7zm0 17.4V229l-6 3.8-2.4-2.2h-2.2l-1.2 1.5L98 234l-2.3 1.8 1.2 1.2H99l2.3-1.5 6 3.7v-2.6l-4.1-2.6zm87.7-6v2.6l6-3.8 2.7 2h1.8l1.2-1.6-2.3-1.9 2.3-1.5-1.2-1.5h-1.5l-2.6 1.9-6-3.8v2.3l4.1 2.6zm0-11.4v2.7l6-3.8 2.7 1.9h1.8l1.2-1.5-2.3-2 2.3-1.4-1.2-1.5h-1.5l-2.6 1.8-6-3.7v2.2l4.1 2.7zm0 17.4V229l6 3.8 2.7-2.2h1.8l1.2 1.5-2.3 1.9 2.3 1.8-1.2 1.2h-1.5l-2.6-1.5-6 3.7v-2.6l4.1-2.6zm-9.9-42.3v3h3v3h-3v-2.2h-3.7V189zm10.2 7.5v2.7h2.7v3h-2.7v-1.9H192v-3.8zm-78.2-7.5v3h-3v3h2.6v-2.2h3.8V189zm68 67.6v-3.4h3v-3h-3v1.9h-3.7v3.8zm-67.3 0v-3.4h-3v-3h2.7v1.9h3.7v3.8zm77.5-7.5v-3h2.7v-3h-2.7v2.2H192v3.8zm-87.7-52.6v3h-3v3h2.7v-2.2h3.4v-3.8zm0 53v-3h-3v-3.1h2.7v2.3h3.4v3.7zm53.7-62.8 2.3 2.7 2.6-2.7 2.3 1.9-2.3 2.3 2.7 2.2h-3.8l-1.5-1.5-1.5 1.5h-3.4l2.6-2.2-2.3-2.3zm-12.8 0 2.6 2.7 2.7-2.7 1.8 1.9-2.2 2.3 2.6 2.2h-3.4l-1.5-1.5-1.5 1.5h-3.8l3-2.2-2.2-2.3zm-7.6 0-2.3 2.7-2.6-2.7-2.3 1.9 2.3 2.3-2.3 2.2h3l2-1.5 1.4 1.5h3.5L141 191l2.3-2.3zm20.4 72.6 2.3-2.3 2.6 2.3 2.3-2-2.3-1.8 2.7-2.6h-3.8l-1.5 1.5-1.5-1.5h-3.4l2.6 2.6-2.3 1.9zm-12.8 0 2.6-2.3 2.7 2.3 1.8-2-2.2-1.8 2.6-2.6h-3.4l-1.5 1.5-1.5-1.5h-3.8l3 2.6-2.2 1.9zm-7.6 0-2.3-2.3-2.6 2.3-2.3-2 2.3-1.8-2.3-2.6h3l2 1.5 1.4-1.5h3.5l-2.7 2.6 2.3 1.9z"/>
  <path fill="#383739" d="M117.2 245.3v7.6h68v-7.6h9.9v-45h-9.9v-7.5h-68v7.5h-9.8v45z"/>
  <path fill="#ffc72c" d="M117.6 193.1v7.6h-9.9v44.2h9.5v7.6h68v-7.6h9.9v-44.6h-9.9v-7.5h-68zm4.5 3h58.2v7.2l2.7 1.6h9v35.5h-9l-2.7 1.9v7.1h-58.2V242l-2.6-1.5h-9.1V205h9l2.7-1.6v-7.5z"/>
  <path fill="#d22630" d="M122.5 196.5v6.5l8.7-6.5zm49.1 0 8.3 6.5v-6.5zm-60.5 8.7v6.5l8-6zm72.2 0 8.4 6.5v-6.5zm8.4 28.8-8.4 6h8.4zm-81 0v6h8.4zm11.4 8.6v6.5h9zm57.8 0-8.7 6.5h8.7z"/>
  <path fill="#00843d" d="m170.9 196.5 20.8 15.2v21.9l-20.8 15h-39.3l-20.8-15v-22l20.8-15.4z"/>
  <path fill="#383739" d="m115.7 235.8-2.3-2.6 2.3-2.6-2.3-2.7 2.3-2.6-2.3-2.7 2.3-2.6-2.3-2.7 2.3-2.6-2.3-2.3 2.3-3h71l2.3 3-2.3 2.3 2.3 2.6-2.3 2.7 2.3 2.6-2.3 2.7 2.3 2.6-2.3 2.7 2.3 2.6-2.3 2.6zm49.1-35.9-3-2.6-2.7 2.3-2.6-2.3-2.6 2.3-2.7-2.3-2.6 2.3-2.7-2.3-2.6 2.3-2.7-2.3-2.6 2.6v45.4l2.6 2.6 2.7-2.2 2.6 2.2 2.7-2.2 2.6 2.2 2.7-2.2 2.6 2.2 2.6-2.2 2.7 2.2 2.6-2.2z"/>
  <g fill="#ffc72c">
    <path d="m158.8 200.3-2.3-2.3-2.6 2v45.3l2.6 2.3 2.3-2.3zm-10.2 0-2.7-2.3-2.2 2v45.3l2.2 2.3 2.7-2.3z"/>
    <path d="m116 235.8-2.2-2.6 2.3-2.3h70.3l2.2 2.3-2.2 2.6zm70.4-15.5 2.2 2.3-2.2 2.7H116l-2.3-2.7 2.3-2.3zm0-5.6 2.2-2.3-2.2-2.6H116l-2.3 2.6 2.3 2.3z"/>
  </g>
  <g fill="#d22630">
    <path d="m164 200.3-2.2-2.3-2.7 2v45.3l2.7 2.3 2.3-2.3zm-20.3 0L141 198l-2.3 2v45.3l2.3 2.3 2.7-2.3z"/>
    <path d="m116 230.6-2.2-2.7 2.3-2.3h70.3l2.2 2.3-2.2 2.7zm0-10.6-2.2-2.7 2.3-2.2h70.3l2.2 2.2-2.2 2.7z"/>
    <path d="m153.9 245.7-2.7 1.9-2.3-2.3v-45l2.3-1.9 2.7 2Z"/>
  </g>
  <path fill="#383739" d="M175 200.7h-47.6v3.8H121v36.3h6v3.7h47.6v-3.7h6.9v-36.3h-6.1v-3.8z"/>
  <path fill="#d22630" d="M127.8 201v3.9h-6v35.5h6v3.8h4.5l-9.8-8.4v-26.4l9.8-8.3h-4.9zm42 0 9.8 8.8v26.4l-9.5 7.6h5V240h6v-35.5h-6v-3.8h-5z"/>
  <g fill="#00843d">
    <path d="m133 201-9.8 8.8v26l9.9 8.4h36.3l9.8-8.4v-26.4l-9.8-8.3zm.8 1.6h34.8l9.5 7.5v25l-9.5 7.5h-34.8l-9.4-7.5v-24.6z"/>
    <path d="m142.9 235.5 1.5.7.4 2-2 1.4 3.1 2.7h-3l-1.9-2-1.9 2h-3l2.6-2.7-1.9-1.5v-1.9l2-.7 1.8 1.5zm10.2 0 1.5.7.4 2-1.9 1.4 3 2.7h-3l-1.9-2-1.9 2h-2.6l2.6-2.7-1.9-1.5v-1.9l2-.7 1.8 1.5zm6.4 0-1.5.7-.4 2 2 1.4-2.7 2.7h2.6l2-2 1.8 2h3l-3-2.7 1.9-1.5v-1.9l-1.9-.7-1.9 1.5zM143 210l1.5-.7.4-1.9-2-1.9 3.1-2.6h-3l-1.9 1.9-1.9-2h-3l2.6 2.7-1.9 1.9v1.9l2 .7 1.8-1.8zm10.2 0 1.5-.7.4-1.9-1.9-1.9 3-2.6h-3l-1.9 1.9-1.9-2h-2.6l2.6 2.7-1.9 1.9v1.9l2 .7 1.8-1.8zm6.4 0-1.5-.7-.4-1.9 2-1.9-2.7-2.6h2.6l2 1.9 1.8-2h3l-3 2.7 1.9 1.9v1.9l-1.9.7-1.9-1.8zm18.2 2.7-1.5 1.5 1.5 1.1v2.3l-2.7-1.9-1.5 1.5h-1.9l-.7-1.5 1.5-1.5-1.5-1.5.7-1.5h2l1.4 1.5 2.7-1.9zm0 8.7-1.5 1.1 1.5 1.5v2l-2.7-2-1.5 1.5h-1.9l-.7-1.5 1.5-1.5-1.5-1.5.7-1.1h2l1.4 1.1 2.7-1.9Zm0 11.3-1.5-1.5 1.5-1.5v-1.9l-2.7 1.9-1.5-1.5h-1.9l-.7 1.5 1.5 1.5-1.5 1.5.7 1.2h2l1.4-1.2 2.7 2zm-53-20 2 1.5-2 1.1v2.3l2.7-1.9 1.5 1.5h1.9l.8-1.5-1.6-1.5 1.6-1.5-.8-1.5H129l-1.5 1.5-2.7-1.9Zm0 8.7 2 1.1-2 1.5v2l2.7-2 1.5 1.5h1.9l.8-1.5-1.6-1.5 1.6-1.5-.8-1.1H129l-1.5 1.1-2.7-1.9Zm0 11.3 2-1.5-2-1.5v-1.9l2.7 1.9 1.5-1.5h1.9l.8 1.5-1.6 1.5 1.6 1.5-.8 1.2H129l-1.5-1.2-2.7 2Z"/>
  </g>
  <path fill="#d22630" d="m133.8 203-8.7 7.5 2.3 2 1.5-1.6h2.3l.7 1.9-1.5 1.5 1.5 1.5-.7 1.5h-2.7l-1.5-1.1-2.6 1.9v.7l2.6 2 1.5-1.6 2.3.4.8 1.5-1.6 1.5 1.6 1.5-.8 2h-2.3l-1.5-1.6-2.6 2.3v.3l2.6 2.3 1.5-1.5h2.3l.8 1.9-1.6 1.5 1.6 1.5-.8 1.5h-2.3l-1.5-1.1-2.3 1.9 8.7 7.5h2l3-3-2-1.5v-2.3l2.3-.7 2 1.5 1.8-1.5 2 .7.3 2.3-2 1.5 3.1 2.7 2.7-2.7-2-1.5v-2.3l2.3-.7 2 1.5 1.8-1.5 2 .7.3 2.3-1.9 1.5 2.6 2.7 3-2.7-1.8-1.5v-2.3l2.2-.7 2 1.5 1.8-1.5 2 .7.3 2.3-1.9 1.5 3 2.7h2l8.6-7.6-2.3-1.5-1.5 1.5-2.2-.4-.8-1.5 1.5-1.5-1.5-1.5.8-1.5 2.2-.4 1.5 1.5 2.7-2.3v-.3l-2.7-2.3-1.5 1.5H171l-.8-1.9 1.5-1.5-1.5-1.5.8-1.5h2.2l1.5 1.1 2.7-1.9v-.7l-2.7-2-1.5 1.6-2.2-.4-.8-1.5 1.5-1.5-1.5-1.5.8-1.5 2.2-.4 1.5 1.5 2.3-1.9-8.7-7.5h-1.9l-3 2.6 1.9 1.9v2.3l-2.3.7-1.9-1.5-1.9 1.5-1.8-.7-.4-2.3 1.9-1.9-2.7-2.6-3 2.6 1.9 1.9v2.3l-2.3.7-1.9-1.5-1.9 1.5-1.8-.7-.4-2.3 1.9-1.9-2.7-2.6-3 2.6 1.9 1.9v2.3l-2.3.7-1.9-1.5-1.9 1.5-1.9-.7-.3-2.3 1.9-1.9-3-2.6zm-9 18.9v1.8l1-1z"/>
  <path fill="#fff" d="m141 241.1-1.5 1.2h3zm10.2 0-1.5 1.2h3zm10.2 0-1.5 1.2h3zm-22-37.8 1.6 1.2 1.5-1.5zm10.3 0 1.5 1.2 1.5-1.5zm10.2 0 1.5 1.2 1.5-1.5zm17.8 10.2-1.2.8 1.2.8zm0 8.4-1.2.7 1.2 1.1zm0 8.7-1.2.7 1.2.8zm-53-17.4v1.9l1.2-.8zm0 8.7v1.8l1.2-1zm0 8.3v1.9l1.2-.8z"/>
  <g fill="#383739">
    <path d="M160 220v-3h-3.1v-3.5h-11.4v3.4h-3v3h-4.1v5.7h4.1v3h3v3.5H157v-3.8h3v-2.7h4.2V220z"/>
    <path fill="#ffc72c" d="M151.2 214v3.3l-4.9 2.7v2.6h-7.6v-2.3h3.8v-3h3.4v-3.8zm0 17.7v-3.8l5-2.6V223h7.5v2.3h-3.8v3h-3.4v3.4z"/>
    <path fill="#fff" d="M156.1 222.6V220l-4.9-2.7v-3.8h5.3v3.8h3v3h4.2v2.3zm-17.4 0h7.6v2.7l5 3v3.4h-5.4v-3.8h-3v-2.6h-4.2z"/>
    <path fill="#d22630" d="M146.7 223v2.3l4.5 2.6v-5Z"/>
    <path fill="#00843d" d="m151.2 217.7-4.5 2.6v2.3h4.5Z"/>
    <path fill="#d22630" d="M155.7 222.6v-2.3l-4.5-2.6v5z"/>
    <path fill="#00843d" d="m151.2 228 4.5-2.7V223h-4.5Z"/>
  </g>
  <path fill="#d22630" d="M110 283v9.5h-8.7v8.4h-9V325h9v8.7h8.3v9.1h32.5l5.7 3.8-2.6 1.5h-11.4l-1.1-1.1h11l-3-3h-15.2l6.8 7.1h14l5-3.4 4.8 3h14l6.8-7.1h-15.1l-3 3h10.6l-.8 1.1h-11.7l-2.7-1.9 5.7-3.4h32.5v-9h8.7V325h9v-24h-9v-8.4h-8.3v-9.4h-32.5l-5.7-3.8 2.7-1.5h11.3l1.1 1.1h-11l3.1 3h15.1l-6.8-7.1h-14l-4.9 3-4.9-3h-14l-6.8 7.5h15.1l3-3.4h-10.5l.7-1.1h11.7l2.7 1.9-5.7 3.4z"/>
  <path fill="#ffc72c" d="M160 342.4h32v-9h8.4v-8.7h9v-23.5h-9v-8.7h-8.7v-9h-32.2L146 275h-13.6l-6 6.5h14l2.2-2.3h-10.2l1.5-1.9h11.7l15.2 9.5H189v9h9v8.7h9.2v16.7H198v8.7h-9v9.4h-27.7l-15.1 9h-12.1l-1.5-1.8h10.2l-2.3-2.3h-14l6 6.4h14zm-18.6-3h-27.6V330H105v-8.7h-9v-16.7h9V296h8.3v-8.7H141l15.1-9.4h12.1l1.5 1.9h-10.2l2.3 2.3h14L170 275h-14l-13.2 8.4h-32.5v9H102v8.7h-9v23.5h9v8.7h8.8v9h32.5l13.2 8.3h13.6l6-6.4h-14l-2.2 2.3h10.2l-1.5 1.9h-11.7z"/>
  <path fill="none" d="m151.2 281.2-9.4 6h-27.6v9.5h-8.7v8.7h-9.1v15.9h9v8.7h8.8v9.4h27.6l9.4 5.7 9.5-5.7h27.6V330h9v-8.7h9.1v-16h-9v-8.6h-9.1v-9.5h-27.6zm0 2.3 9 5.6h26.2v9.5h8.7v8.3h9v12h-9v8.8h-8.7v8.7h-26.5l-8.7 6-9-6H116v-9h-8.7v-8.8h-9.1v-12h9v-8h8.8V289h26.4z"/>
  <path fill="#00843d" d="M186 327.3v9h-25.7l-9 5.7-9.2-5.6h-25.7v-9h-8.7v-8.8h-9.4v-11.3h9v-8.7h8.8v-9h25.7l9-5.4 9.1 5.3h25.7v9h8.7v8.8h9.8v11.3h-9v8.7z"/>
  <g fill="#383739">
    <path d="M119.8 324v8.6h14.4l-14.4-9.5zm0-22v-9h14.4l-14.4 9.4Zm62.8 22v8.6h-14.4l14.4-9.5zm0-22v-9h-14.4l14.4 9.4z"/>
    <path fill="#d22630" d="m120.2 324.3 12.9 8.3h-12.9zm0-22.7 12.9-8.3h-12.9zm62 22.7-12.8 8.3h12.8zm0-22.7-12.8-8.3h12.8z"/>
  </g>
  <g fill="#383739">
    <path d="M138 310.3v-4.2h-1.5l-7.6-4.5-7.6 4.5h-1.5v4.6h-3.7v5.3h3.7v4.5h1.5l7.6 4.5 7.6-4.5h1.5V316h5.3v-6Z"/>
    <path fill="#d22630" d="m128.5 301.6 7.6 4.2h-14.4zm7.6 18.5-7.6 4.2-6.8-4.2zm-1.9-9.4v4.5h-8.7v-4.5z"/>
    <path fill="#ffc72c" d="M137.6 315.6v4.1h-8.7v-4.1zm-9 0v4.1h-8.8v-4.1zm14.3-5v4.6h-8.3v-4.5zm-17.8 0v4.6h-8.7v-4.5Zm12.5-4.5v4.2h-8.7v-3.8zm-9 0v4.2h-8.8v-3.8z"/>
    <path d="M122.9 311.8v2.3H119v-2.3zm3.4-4.5v2.2h-3.8v-2.2zm9 0v2.2h-3.7v-2.2zm-3.7 4.5v2.3h-3.8v-2.3zm9 0v2.3h-3.8v-2.3zm-5.3 4.5v2.3h-3.7v-2.3zm-9 0v2.3h-3.8v-2.3z"/>
    <path fill="#fff" d="M122.5 312.2H119v1.5h3.4zm3.8-4.5h-3.8v1.5h3.8zm8.7 0h-3.4v1.5h3.4zm-3.8 4.5h-2.7v1.5h3zm9 0h-3v1.5h3zm-5.2 4.5h-3.4v1.5h3.4zm-9.1 0h-3v1.5h3z"/>
  </g>
  <g fill="#383739">
    <path d="M164.4 310.3v-4.2h1.6l7.5-4.5 7.6 4.5h1.9v4.6h3.4v5.3h-3.8v4.5h-1.1l-7.6 4.5-7.6-4.5h-1.5V316h-5.3v-6Z"/>
    <path fill="#d22630" d="m173.9 301.6-7.6 4.2h14zm-7.6 18.5 6.8 4.2 7.2-4.2zm1.5-9.4v4.5h8.7v-4.5z"/>
    <path fill="#ffc72c" d="M164.8 315.6v4.1h8.7v-4.1zm9 0v4.1h8.8v-4.1zm-14.3-5v4.6h8.7v-4.5zm17.8 0v4.6h8.7v-4.5Zm-12.5-4.5v4.2h8.7v-3.8zm9 0v4.2h8.8v-3.8z"/>
    <path d="M180 311.8v2.3h3.7v-2.3zm-3.8-4.5v2.2h3.7v-2.2zm-9.1 0v2.2h3.8v-2.2zm3.8 4.5v2.3h3.7v-2.3zm-9.1 0v2.3h3.8v-2.3zm5.3 4.5v2.3h3.8v-2.3zm9 0v2.3h3.8v-2.3z"/>
    <path fill="#fff" d="M180 312.2h3.3v1.5H180zm-3.5-4.5h3v1.5h-3zm-9 0h3.4v1.5h-3.4zm3.7 4.5h3v1.5h-3zm-9 0h3v1.5h-2.6Zm5.3 4.5h3.4v1.5h-3.4zm9 0h3v1.5h-3z"/>
  </g>
  <g fill="#383739">
    <path d="M160.3 302.7v4.6h-1.5l-7.6 4.9-7.5-5H142v-4.5h-4.5v-4.9h4.5v-4.5h1.6l7.5-5 7.6 5h1.5v4.5h4.5v4.6Z"/>
    <path fill="#ffc72c" d="m151.2 311.8 6.8-4.5h-13.6zM158 293l-6.8-3.8-6.8 3.8z"/>
    <path fill="#d22630" d="M160 297.8v-4.5h-8.4v4.5zm-8.8 0v-4.5h-8.7v4.5zm13.2 4.6v-3.8h-8.7v3.8zm-9 0v-3.8h-8v3.8zm-8.7 0v-3.8H138v3.8zm13.2 4.5v-4.2h-8.3v4.2zm-8.7 0v-4.2h-8.7v4.2z"/>
    <path d="M148.6 294.4v2.3h-3.8v-1.9Zm9 0v2.3H154v-1.9ZM144 299v2.6h-3.8v-3Zm9.1 0v2.6h-3.8v-3Zm9 0v2.6h-3.7v-3Zm-13.5 4.9v2.2h-3.8V304zm9 0v2.2H154V304z"/>
    <path fill="#fff" d="M148.2 294.8h-3v1.5h3zm9 0h-3v1.5h3zm-13.5 4.5h-3v2h3Zm9 0h-3v2h3zm9.1 0h-3v2h3zm-13.6 4.6h-3v1.9h3zm9 0h-3v1.9h3z"/>
  </g>
  <g fill="#383739">
    <path d="M160.3 328v5h-1.5l-7.6 4.5-7.5-4.5H142v-5h-4.5v-4.9h4.5v-4.5h1.6l7.5-4.9 7.6 5h1.5v4.4h4.5v5z"/>
    <path fill="#ffc72c" d="m151.2 337.1 6.8-4.1h-13.6zm6.8-18.9-6.8-3.7-6.8 3.7z"/>
    <path fill="#d22630" d="M160 323.1V319h-8.4v4.1zm-8.8 0V319h-8.7v4.1zm13.2 4.6v-4.2h-8.7v4.2zm-9 0v-4.2h-8v4.2zm-8.7 0v-4.2H138v4.2zm13.2 4.9v-4.5h-8.3v4.5Zm-8.7 0v-4.5h-8.7v4.5Z"/>
    <path d="M148.6 319.7v2.7h-3.8v-2.7zm9 0v2.7H154v-2.7ZM144 325v2.3h-3.8V325Zm9.1 0v2.3h-3.8V325Zm9 0v2.3h-3.7V325Zm-13.5 3.8v2.3h-3.8v-2.3Zm9 0v2.3H154v-2.3Z"/>
    <path fill="#fff" d="M148.2 320.1h-3v2h3zm9 0h-3v2h3zm-13.5 5h-3v1.5h3Zm9 0h-3v1.5h3zm9.1 0h-3v1.5h3zm-13.6 4.5h-3v1.5h3zm9 0h-3v1.5h3z"/>
  </g>
  <path fill="#383739" d="m102 383.6 34-18.1h30.3l34 18.1v29.9l-34 17.7h-30.2l-34-17.7z"/>
  <path fill="#00843d" d="m136 365.9-33.6 17.7v29.5l33.7 18.1h30.2l33.7-18.1v-29.5L166.7 366zm.5 2.2h29.8l31.8 17v26.5l-31.8 17h-29.5l-31.7-17V385z"/>
  <path fill="#ffc72c" d="M151.2 398.4v30.2h15.1l31.4-17v-12.9h-46.5v-30.2h-15.1l-31.4 16.6v13.3z"/>
  <path fill="#fff" d="M151.2 398.4v30.2h-15.1l-31.4-17v-12.9h46.5v-30.2h15.1l31.4 16.6v13.3z"/>
  <path fill="#383739" d="M153.9 426.7V418l-2.7 2-2.6-2v8.7h-9.1l6-4.5v-6l-9-5.7h-6v-24.2h5.6l9-5.7v-6L140 370h9v8.7l2.7-1.5 2.6 1.5v-8.3h9.1l-6 4.5v6l9 5.7h6.5v24.2h-6.5l-9 5.7v6l6 4.6z"/>
  <path fill="#ffc72c" d="M154.2 370.4v9l-3-1.8v2.6l14 8.7h4.5v9.5h2.3V387h-6l-9.5-6v-6.8l5.3-3.8zm-23.4 28.3v11.4h5.3l9.4 6v6.5l-5.3 3.7h7.6v-9l3 1.8v-2.6l-14-8.7h-4.5v-9z"/>
  <path fill="#fff" d="m140.6 370.4 5.3 3.8v6.8l-9.4 5.6h-5.7V398h1.9v-8.7h4.5l14-8.7V378l-3 1.8v-9.4zm29.1 28.3v9.1h-4.5l-14 8.7v2.6l3-1.8v9h7.6l-5.3-3.7v-6.9l9.5-6h6v-11.3Z"/>
  <path fill="#d22630" d="M133 407.4h4.2l14 9.1 14-9h4.2v-18.2h-4.2l-14-8.7-14 8.7h-3.8z"/>
  <path fill="#383739" d="M160.7 402.9h3v-1.5h-2.3v-2.7h5v6.5h-4.6v4.5h-9.5v-6.4h4.2v2.6H155v1.2h3.8v-2.3l-17.4-10.6h-3v1.1h2.2v2.7h-4.5v-6.4h4.5V387h9.5v6.4h-3.8v-2.6h1.1v-1.1h-3.7v2.2zm-1.6-11v-2.2H155v1.1h1.5v2.6h-4.2V387h9.5v4.6h4.5v6.4h-4.9v-2.7h2.3v-1.1h-3l-17 10.2v2.3h3.7v-1.2H146V403h4.2v6.4h-9.5v-4.5h-4.5v-6.4h4.9v2.6h-2.3v1.5h3z"/>
  <path fill="#fff" d="M159.5 404.4v3H155v-1.9h1.5v-1.8h-3.4v5.6h8.7v-4.5h4.5V399h-3.7v2h1.8v2.2H161l-17.7-11.4v-2.6h4.9v1.9h-1.5v1.9h3.8v-5.7h-9.1v4.5h-4.6v5.7h3.8v-1.9h-1.9v-1.9h3.4zm1.2-10.6h3.7v2h-2.6v1.8h4.5V392h-4.5v-4.5h-8.7v5.7h3.4v-2H155v-1.8h5v3l-17.9 11h-3.4V401h2.3v-1.9h-3.8v5.7h4.2v4.5h8.7v-5.6h-3.4v1.8h1.5v2h-5v-3z"/>
  <path fill="#383739" d="M190.5 399.9v9.4h-3.8V406h-4.1v3.4h-4.2V400h3.8v3.4h4.2V400zm-14.3 12.4v9.5h-3.8v-3.4h-4.2v3.4h-3.8v-9.5h3.8v3.4h3.8v-3.4zm14.3-15v-9.9h-3.8v3.4h-4.1v-3.4h-4.2v9.5h3.8v-3.5h4.2v3.8zm-78.6 2.6v9.4h3.8V406h4.1v3.4h4.2V400h-3.8v3.4h-4.1V400zm0-3v-9.5h3.8v3.4h4.1v-3.4h4.2v9.5h-3.8v-3.5h-4.1v3.8zm64.3-12.5v-9.5h-3.8v3.4h-4.2V375h-3.8v9.5h3.8V381h3.8v3.8zm-50 28v9.4h3.8v-3.4h4.2v3.4h4.2v-9.5h-3.8v3.4h-4.2v-3.4zm0-28v-9.5h3.8v3.4h4.2V375h4.2v9.5h-3.8V381h-4.2v3.8zm52.2-6.4v7.1h13.3zM124 419v-7.5h-13.2zm0-41.5v7.5h-13.2zm54.4 41.5v-7.5h13.3z"/>
  <path fill="#d22630" d="M186.7 405.5v3.8h3.4v-9h-3.4v3.4h-4.5v-3.4h-3.8v8.6h3.8v-3.4zM172.4 418v3.8h3.4v-9h-3.4v3.3h-4.6v-3.4h-3.4v8.7h3.4V418zm14.3-26.8v-3.4h3.4v8.7h-3.4V393h-4.5v3.8h-3.8v-9.1h3.8v3.4zm-71 14.3v3.8h-3.4v-9h3.4v3.4h4.5v-3.4h3.8v8.6h-3.8v-3.4zm0-14.3v-3.4h-3.4v8.7h3.4V393h4.5v3.8h3.8v-9.1h-3.8v3.4zm56.7-12.5v-3.4h3.4v8.7h-3.4v-3.4h-4.6v3.8h-3.4v-9h3.4v3.3zM130 418v3.8h-3.4v-9h3.4v3.3h4.6v-3.4h3.8v8.7h-3.8V418zm0-39.3v-3.4h-3.4v8.7h3.4v-3.4h4.6v3.8h3.8v-9h-3.8v3.3z"/>
  <path fill="#ffc72c" d="M178.8 378.3v6.5h11.3zm-66.9 34 11.3 6v-6z"/>
  <path fill="#fff" d="m123.6 378.3-11.3 6.5h11.3zm55.2 34v6l11.3-6z"/>
  <path fill="#ffc72c" d="M205.6 424.8c-.7 2.7-3 4.6-3.4 7.6-1-3-1.8-5.7-1-8.7 0-2.3 2.2-3.8 2.6-6.4q2.5 2.8 1.8 7.5m.4 11.4a18 18 0 0 1-6.8 5.6c.4-2.2-.7-3.8-1.9-5.6-1.1-2-1.9-3.8-.7-6.5a14 14 0 0 0 1.9 3.4c1.1 1.5 2.2 3 2.2 5.3 1.5-1.1 2-2.6 2.7-4.1a13 13 0 0 1 5.3-5.3c-.8 2.6-1.2 4.9-2.7 7.2m-9.8 7.5.4 3.8 4.1-3c2-2 4.2-2.7 5.7-5a10 10 0 0 1-3.8 7.2l-7.5 5q-.1-3.9-2-7.6a7 7 0 0 1 2-6q0 2.8 1.1 5.2zm-5.7 8.7-3 5.3q3.8-1.4 7.6-3.8c2.6-1.5 5.6-2.2 8.3-4.5-1.2 4.9-4.6 7.5-9 9-3.1.8-6.1.4-10 2a27 27 0 0 1 2.7-7.6l2.7-5.3q1.2 2.1.7 5zm-9.8 7.2a12 12 0 0 1-3.8 3.8c3.8 0 6.8-2 10.6-2.3 2.3 0 4.5.8 6.8.4-2.6 1.9-5.7 3.8-9 3.8-4.2.7-8.4 0-13 0 2.3-1.6 3.5-3.8 4.6-5.7 2-3 3.8-5 7.2-5.3-1.5 1.5-2.3 3.8-3.4 5.3m-13.2 6c6.4 1.2 12.8 2.7 19.6 2.7a30 30 0 0 1-22.3.4c-3.8-1.2-7.2-2.3-10.2-2-4.1 0-9.8 2.3-15.9 8.4l-2.2-1.9c8.7-7.6 20-9.5 31-7.6"/>
</svg>
`,uz:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icons-uz" viewBox="0 0 640 480">
  <path fill="#1eb53a" d="M0 320h640v160H0z"/>
  <path fill="#0099b5" d="M0 0h640v160H0z"/>
  <path fill="#ce1126" d="M0 153.6h640v172.8H0z"/>
  <path fill="#fff" d="M0 163.2h640v153.6H0z"/>
  <circle cx="134.4" cy="76.8" r="57.6" fill="#fff"/>
  <circle cx="153.6" cy="76.8" r="57.6" fill="#0099b5"/>
  <g fill="#fff" transform="translate(261.1 122.9)scale(1.92)">
    <g id="uz-e">
      <g id="uz-d">
        <g id="uz-c">
          <g id="uz-b">
            <path id="uz-a" d="M0-6-1.9-.3 1 .7"/>
            <use xlink:href="#uz-a" width="100%" height="100%" transform="scale(-1 1)"/>
          </g>
          <use xlink:href="#uz-b" width="100%" height="100%" transform="rotate(72)"/>
        </g>
        <use xlink:href="#uz-b" width="100%" height="100%" transform="rotate(-72)"/>
        <use xlink:href="#uz-c" width="100%" height="100%" transform="rotate(144)"/>
      </g>
      <use xlink:href="#uz-d" width="100%" height="100%" y="-24"/>
      <use xlink:href="#uz-d" width="100%" height="100%" y="-48"/>
    </g>
    <use xlink:href="#uz-e" width="100%" height="100%" x="24"/>
    <use xlink:href="#uz-e" width="100%" height="100%" x="48"/>
    <use xlink:href="#uz-d" width="100%" height="100%" x="-48"/>
    <use xlink:href="#uz-d" width="100%" height="100%" x="-24"/>
    <use xlink:href="#uz-d" width="100%" height="100%" x="-24" y="-24"/>
  </g>
</svg>
`};var oe=i=>document.getElementById(i),bo=matchMedia("(prefers-reduced-motion: reduce)").matches,dr=Math.PI/180,wo=(i,t)=>String(+i.toFixed(t)),J2=i=>i>=1e6?`${wo(i/1e6,1)} million`:i.toLocaleString("en-US"),$2=i=>i>=1e6?`${wo(i/1e6,2)} million`:i.toLocaleString("en-US"),K2=i=>i>=1e12?`$${wo(i/1e12,2)} trillion`:`$${wo(i/1e9,1)} billion`,Q2=i=>`$${(Math.round(i/100)*100).toLocaleString("en-US")}`,Ih=oe("stage"),oi=new hr({canvas:oe("scene"),antialias:!0,alpha:!0});oi.setPixelRatio(Math.min(devicePixelRatio,2));oi.shadowMap.enabled=!0;oi.shadowMap.type=Ca;oi.outputColorSpace=Le;var li=new Jn,j2=new rs(oi);li.environment=j2.fromScene(new So,.04).texture;li.environmentIntensity=.42;var An=new De(30,1,.1,60);An.position.set(0,2.3,6.4);var Uh=new N(0,1.05,0);An.lookAt(Uh);var t3=new Ki(16777215,9080729,.65);li.add(t3);var Xe=new yi(16777215,1.9);Xe.castShadow=!0;Xe.shadow.mapSize.set(2048,2048);Xe.shadow.camera.left=-3.4;Xe.shadow.camera.right=3.4;Xe.shadow.camera.top=3.4;Xe.shadow.camera.bottom=-3.4;Xe.shadow.camera.near=.5;Xe.shadow.camera.far=20;Xe.shadow.bias=-6e-4;Xe.shadow.normalBias=.02;Xe.shadow.radius=7;li.add(Xe,Xe.target);Xe.target.position.set(0,.6,0);var ul=new xi(16777215,14,12,1.6);ul.position.set(-2.6,1.2,-1.8);li.add(ul);var dl=new se(new ti(60,60),new Ws({opacity:.3,color:0}));dl.rotation.x=-Math.PI/2;dl.receiveShadow=!0;li.add(dl);function e3(i){let n=document.createElement("canvas");n.width=1536,n.height=1152;let s=n.getContext("2d");s.fillStyle="#888",s.fillRect(0,0,1536,1152);let r=new Is(n);r.colorSpace=Le,r.anisotropy=oi.capabilities.getMaxAnisotropy();let a=Ch[i].replace("<svg ",'<svg width="1536" height="1152" preserveAspectRatio="none" '),o=new Image;return o.onload=()=>{s.drawImage(o,0,0,1536,1152),r.needsUpdate=!0},o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(a),r}var ol=.16;function n3(i){let t=Rh[i.code],e=e3(i.code),n=t.polys.map(E=>{let y=new Zi;return E.forEach(([A,T],v)=>v?y.lineTo(A,T):y.moveTo(A,T)),y.closePath(),y}),s=new Vs(n,{depth:ol,bevelEnabled:!0,bevelThickness:.012,bevelSize:.008,bevelSegments:2,curveSegments:1}),r=s.attributes.position,a=s.attributes.uv;for(let E=0;E<r.count;E++)a.setXY(E,r.getX(E)/t.w+.5,r.getY(E)/t.h+.5);s.translate(0,0,-ol/2);let o=new Xs({map:e,roughness:.42,metalness:0,clearcoat:.55,clearcoatRoughness:.25}),l=new Qe({color:i.theme.side,roughness:.5,metalness:.15}),c=new se(s,[o,l]);c.castShadow=!0,c.receiveShadow=!0;let h=new nn;h.position.set(t.cap[0],t.cap[1],ol/2);let f=new Qe({color:15921906,roughness:.25,metalness:.9}),u=new se(new jn(.009,.011,.62,12),f);u.rotation.x=Math.PI/2,u.position.z=.31;let d=new se(new jn(.04,.05,.02,24),f);d.rotation.x=Math.PI/2,d.position.z=.01;let g=new se(new Ji(.02,16,12),f);g.position.z=.63;let M=new ti(.34,.2,18,6);M.translate(.17,0,0);let m=new se(M,new Qe({map:e,side:sn,roughness:.7}));m.rotation.x=Math.PI/2,m.position.z=.5,m.userData.rest=M.attributes.position.array.slice(),[u,d,g,m].forEach(E=>E.castShadow=!0),h.add(u,d,g,m);let p=new nn;p.add(c,h),p.scale.setScalar(Math.min(1,1.45/t.h));let S=new nn;return S.add(p),S.visible=!1,li.add(S),{root:S,tiltGroup:p,cloth:m,shown:0,target:0,dir:1}}var ai=Ge.map(n3);function i3(i,t){let e=i.geometry.attributes.position,n=i.userData.rest;for(let s=0;s<e.count;s++){let r=n[s*3],a=n[s*3+1];e.setZ(s,Math.sin(r*22-t*5+a*6)*.022*(r/.34))}e.needsUpdate=!0,i.geometry.computeVertexNormals()}var Eo=oe("bust"),To=new hr({canvas:Eo,antialias:!0,alpha:!0});To.setPixelRatio(Math.min(devicePixelRatio,2));To.outputColorSpace=Le;var Ao=new Jn,pr=new De(38,1,.1,20);pr.position.set(0,.3,4.3);pr.lookAt(0,.12,0);Ao.add(new Ki(16777215,4475477,.9));var Fh=new yi(16777215,2.4);Fh.position.set(2,3,3);var fl=new yi(16777215,3);fl.position.set(-3,1.5,-2.5);Ao.add(Fh,fl);var pl=new Qe({color:16052196,roughness:.62}),Ro=new nn,ml=new se(new Ji(.3,48,32),pl);ml.scale.set(.84,1.08,.94);ml.position.y=.92;var Oh=new se(new jn(.125,.16,.3,32),pl);Oh.position.y=.55;var s3=[[0,.5],[.15,.5],[.3,.44],[.5,.33],[.6,.18],[.6,0],[.52,-.2],[.36,-.3],[0,-.3]].map(([i,t])=>new rt(i,t)),zh=new se(new Hs(s3,48),pl);zh.scale.z=.56;var Bh=new Qe({color:2303275,roughness:.4,metalness:.3}),kh=new se(new jn(.2,.3,.22,40),Bh);kh.position.y=-.4;var Co=new se(new Gs(.17,.035,16,48),Bh);Co.rotation.x=Math.PI/2;Co.scale.y=.75;Co.position.y=.47;Ro.add(ml,Oh,zh,kh,Co);Ro.position.y=.2;Ao.add(Ro);var Vh=0,cl=document.querySelector(".hero"),Ph=oe("card"),kn=oe("name"),Hh=oe("rail");oe("total").textContent=Ge.length;Ge.forEach((i,t)=>{let e=document.createElement("button");e.textContent=i.code.toUpperCase(),e.setAttribute("aria-label",i.name),e.title=i.name,e.addEventListener("click",()=>mr(t,t>=We?1:-1)),Hh.appendChild(e)});function hl(){kn.style.fontSize="";let i=cl.clientWidth,t=kn.scrollWidth;if(t>i){let e=parseFloat(getComputedStyle(kn).fontSize);kn.style.fontSize=`${Math.floor(e*i/t)}px`}}function Gh(i,t){let e=document.documentElement.style;e.setProperty("--bg",i.theme.bg),e.setProperty("--ink",i.theme.ink),e.setProperty("--accent",i.theme.accent),e.setProperty("--deep",i.theme.deep),oe("idx").textContent=t+1,oe("status").textContent=i.status,kn.textContent=i.name,kn.style.fontFamily=i.font,kn.style.fontWeight=i.weight,kn.style.fontStyle=i.italic?"italic":"normal",kn.style.letterSpacing=i.tracking,oe("official").textContent=i.official===i.name?"":i.official,oe("sym").innerHTML=i.symbol.svg,oe("symlabel").textContent=i.symbol.label,oe("capital").textContent=i.capital,oe("text").textContent=i.text,oe("pop").textContent=J2(i.population),oe("popnote").textContent=i.populationNote||"people",oe("area").textContent=$2(i.area),oe("gdp").textContent=K2(i.gdp),oe("pc").textContent=Q2(i.gdp/i.population),oe("currency").textContent=i.currency,oe("languages").textContent=i.languages,oe("independence").textContent=i.independence,oe("fact").textContent=i.fact,oe("leader").textContent=i.leader.name,oe("since").textContent=i.leader.since,oe("leadernote").textContent=i.leader.note||"",oe("nextname").textContent=Ge[(t+1)%Ge.length].name,[...Hh.children].forEach((n,s)=>n.setAttribute("aria-current",s===t?"true":"false")),document.title=`${i.name} \xB7 CIS, country by country`,hl(),document.fonts?.ready.then(hl)}var We=0,Lh=0;function Wh(i){let t=i.pose.light*dr;Xe.position.set(Math.cos(t)*4.2,6.2,Math.sin(t)*2.6+3.2),ul.color.set(i.theme.accent),fl.color.set(i.theme.bg)}function mr(i,t=1){if(i=(i+Ge.length)%Ge.length,i!==We){ai[We].target=0,ai[We].dir=-t,We=i,ai[i].target=1,ai[i].dir=t,bo&&ai.forEach(e=>e.shown=e.target),ye.yaw=0,ye.pitch=0,Vh+=Math.PI*2*t,Wh(Ge[i]),cl.classList.add("swap"),Ph.classList.add("swap"),clearTimeout(Lh),Lh=setTimeout(()=>{Gh(Ge[i],i),cl.classList.remove("swap"),Ph.classList.remove("swap")},bo?0:230);try{history.replaceState(null,"",`#${Ge[i].code}`)}catch{}}}oe("next").addEventListener("click",()=>mr(We+1,1));oe("prev").addEventListener("click",()=>mr(We-1,-1));addEventListener("keydown",i=>{i.key==="ArrowRight"&&mr(We+1,1),i.key==="ArrowLeft"&&mr(We-1,-1)});var ye={on:!1,x:0,y:0,yaw:0,pitch:0},fr={x:0,y:0},gr=oe("scene");gr.addEventListener("pointerdown",i=>{ye.on=!0,ye.x=i.clientX,ye.y=i.clientY,gr.setPointerCapture(i.pointerId)});gr.addEventListener("pointermove",i=>{ye.on&&(ye.yaw+=(i.clientX-ye.x)*.008,ye.pitch=Math.max(-.7,Math.min(.7,ye.pitch+(i.clientY-ye.y)*.005)),ye.x=i.clientX,ye.y=i.clientY)});var Xh=()=>ye.on=!1;gr.addEventListener("pointerup",Xh);gr.addEventListener("pointercancel",Xh);addEventListener("pointermove",i=>{fr.x=i.clientX/innerWidth-.5,fr.y=i.clientY/innerHeight-.5});function gl(){let i=Ih.clientWidth,t=Ih.clientHeight;oi.setSize(i,t,!1),An.aspect=i/t;let e=innerWidth>900,n=e?Math.max(.35,1-Math.min(440,innerWidth*.38)/i-.06):.92,s=2.9/n,r=An.position.distanceTo(Uh),a=2*Math.atan(s/An.aspect/2/r)/dr;An.fov=Math.max(a,e?24:30),e?An.setViewOffset(i,t,i*(1-n)*.5,-t*.11,i,t):An.clearViewOffset(),An.updateProjectionMatrix();let o=Eo.clientWidth,l=Eo.clientHeight;To.setSize(o,l,!1),pr.aspect=o/l,pr.updateProjectionMatrix(),hl()}addEventListener("resize",gl);new ResizeObserver(gl).observe(Eo);var r3=i=>1+2.2*Math.pow(i-1,3)+1.2*Math.pow(i-1,2),Dh=new Ks,ll=0;function qh(){let i=Math.min(Dh.getDelta(),.05),t=Dh.elapsedTime;ye.on||(ye.yaw+=(0-ye.yaw)*Math.min(1,i*2.2),ye.pitch+=(0-ye.pitch)*Math.min(1,i*2.2)),ai.forEach((e,n)=>{let s=e.target>e.shown?1.5:2.6;if(e.shown+=Math.sign(e.target-e.shown)*Math.min(Math.abs(e.target-e.shown),i*s),e.root.visible=e.shown>.001,!e.root.visible)return;let r=Ge[n],a=e.target?r3(e.shown):e.shown*e.shown,o=bo?0:1;e.root.scale.setScalar(Math.max(a,1e-4)),e.root.position.y=1.18+Math.sin(t*.9)*.05*o-(1-e.shown)*.5,e.root.rotation.y=r.pose.yaw*dr+(1-e.shown)*e.dir*1.9+ye.yaw+fr.x*.3+Math.sin(t*.45)*.07*o,e.tiltGroup.rotation.x=-r.pose.tilt*dr+ye.pitch+fr.y*.12,e.tiltGroup.rotation.z=r.pose.roll*dr+Math.sin(t*.6)*.015*o,o&&i3(e.cloth,t)}),oi.render(li,An),ll+=(Vh-ll)*Math.min(1,i*3.2),Ro.rotation.y=ll+fr.x*.9+.35,To.render(Ao,pr),requestAnimationFrame(qh)}var Nh=Ge.findIndex(i=>i.code===location.hash.slice(1));We=Nh>=0?Nh:0;ai[We].target=1;bo&&(ai[We].shown=1);Gh(Ge[We],We);Wh(Ge[We]);gl();qh();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
