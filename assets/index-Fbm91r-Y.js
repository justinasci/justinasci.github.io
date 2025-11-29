(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))c(v);new MutationObserver(v=>{for(const h of v)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function f(v){const h={};return v.integrity&&(h.integrity=v.integrity),v.referrerPolicy&&(h.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?h.credentials="include":v.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(v){if(v.ep)return;v.ep=!0;const h=f(v);fetch(v.href,h)}})();var x2={exports:{}},w1={};var P5;function W8(){if(P5)return w1;P5=1;var u=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function f(c,v,h){var m=null;if(h!==void 0&&(m=""+h),v.key!==void 0&&(m=""+v.key),"key"in v){h={};for(var d in v)d!=="key"&&(h[d]=v[d])}else h=v;return v=h.ref,{$$typeof:u,type:c,key:m,ref:v!==void 0?v:null,props:h}}return w1.Fragment=a,w1.jsx=f,w1.jsxs=f,w1}var t7;function $8(){return t7||(t7=1,x2.exports=W8()),x2.exports}var Ye=$8(),U2={exports:{}},P={};var n7;function k8(){if(n7)return P;n7=1;var u=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),G=Symbol.iterator;function j(S){return S===null||typeof S!="object"?null:(S=G&&S[G]||S["@@iterator"],typeof S=="function"?S:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,O={};function K(S,U,H){this.props=S,this.context=U,this.refs=O,this.updater=H||q}K.prototype.isReactComponent={},K.prototype.setState=function(S,U){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,U,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Z(){}Z.prototype=K.prototype;function w(S,U,H){this.props=S,this.context=U,this.refs=O,this.updater=H||q}var Q=w.prototype=new Z;Q.constructor=w,B(Q,K.prototype),Q.isPureReactComponent=!0;var F=Array.isArray;function k(){}var I={H:null,A:null,T:null,S:null},_t=Object.prototype.hasOwnProperty;function xt(S,U,H){var V=H.ref;return{$$typeof:u,type:S,key:U,ref:V!==void 0?V:null,props:H}}function p0(S,U){return xt(S.type,U,S.props)}function Ft(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function Ut(S){var U={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(H){return U[H]})}var a0=/\/+/g;function ht(S,U){return typeof S=="object"&&S!==null&&S.key!=null?Ut(""+S.key):U.toString(36)}function D0(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(k,k):(S.status="pending",S.then(function(U){S.status==="pending"&&(S.status="fulfilled",S.value=U)},function(U){S.status==="pending"&&(S.status="rejected",S.reason=U)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function C(S,U,H,V,tt){var lt=typeof S;(lt==="undefined"||lt==="boolean")&&(S=null);var ot=!1;if(S===null)ot=!0;else switch(lt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(S.$$typeof){case u:case a:ot=!0;break;case x:return ot=S._init,C(ot(S._payload),U,H,V,tt)}}if(ot)return tt=tt(S),ot=V===""?"."+ht(S,0):V,F(tt)?(H="",ot!=null&&(H=ot.replace(a0,"$&/")+"/"),C(tt,U,H,"",function(Ke){return Ke})):tt!=null&&(Ft(tt)&&(tt=p0(tt,H+(tt.key==null||S&&S.key===tt.key?"":(""+tt.key).replace(a0,"$&/")+"/")+ot)),U.push(tt)),1;ot=0;var $t=V===""?".":V+":";if(F(S))for(var Rt=0;Rt<S.length;Rt++)V=S[Rt],lt=$t+ht(V,Rt),ot+=C(V,U,H,lt,tt);else if(Rt=j(S),typeof Rt=="function")for(S=Rt.call(S),Rt=0;!(V=S.next()).done;)V=V.value,lt=$t+ht(V,Rt++),ot+=C(V,U,H,lt,tt);else if(lt==="object"){if(typeof S.then=="function")return C(D0(S),U,H,V,tt);throw U=String(S),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ot}function L(S,U,H){if(S==null)return S;var V=[],tt=0;return C(S,V,"","",function(lt){return U.call(H,lt,tt++)}),V}function $(S){if(S._status===-1){var U=S._result;U=U(),U.then(function(H){(S._status===0||S._status===-1)&&(S._status=1,S._result=H)},function(H){(S._status===0||S._status===-1)&&(S._status=2,S._result=H)}),S._status===-1&&(S._status=0,S._result=U)}if(S._status===1)return S._result.default;throw S._result}var gt=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},bt={map:L,forEach:function(S,U,H){L(S,function(){U.apply(this,arguments)},H)},count:function(S){var U=0;return L(S,function(){U++}),U},toArray:function(S){return L(S,function(U){return U})||[]},only:function(S){if(!Ft(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return P.Activity=D,P.Children=bt,P.Component=K,P.Fragment=f,P.Profiler=v,P.PureComponent=w,P.StrictMode=c,P.Suspense=y,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(S){return I.H.useMemoCache(S)}},P.cache=function(S){return function(){return S.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(S,U,H){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var V=B({},S.props),tt=S.key;if(U!=null)for(lt in U.key!==void 0&&(tt=""+U.key),U)!_t.call(U,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&U.ref===void 0||(V[lt]=U[lt]);var lt=arguments.length-2;if(lt===1)V.children=H;else if(1<lt){for(var ot=Array(lt),$t=0;$t<lt;$t++)ot[$t]=arguments[$t+2];V.children=ot}return xt(S.type,tt,V)},P.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},P.createElement=function(S,U,H){var V,tt={},lt=null;if(U!=null)for(V in U.key!==void 0&&(lt=""+U.key),U)_t.call(U,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(tt[V]=U[V]);var ot=arguments.length-2;if(ot===1)tt.children=H;else if(1<ot){for(var $t=Array(ot),Rt=0;Rt<ot;Rt++)$t[Rt]=arguments[Rt+2];tt.children=$t}if(S&&S.defaultProps)for(V in ot=S.defaultProps,ot)tt[V]===void 0&&(tt[V]=ot[V]);return xt(S,lt,tt)},P.createRef=function(){return{current:null}},P.forwardRef=function(S){return{$$typeof:d,render:S}},P.isValidElement=Ft,P.lazy=function(S){return{$$typeof:x,_payload:{_status:-1,_result:S},_init:$}},P.memo=function(S,U){return{$$typeof:b,type:S,compare:U===void 0?null:U}},P.startTransition=function(S){var U=I.T,H={};I.T=H;try{var V=S(),tt=I.S;tt!==null&&tt(H,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(k,gt)}catch(lt){gt(lt)}finally{U!==null&&H.types!==null&&(U.types=H.types),I.T=U}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(S){return I.H.use(S)},P.useActionState=function(S,U,H){return I.H.useActionState(S,U,H)},P.useCallback=function(S,U){return I.H.useCallback(S,U)},P.useContext=function(S){return I.H.useContext(S)},P.useDebugValue=function(){},P.useDeferredValue=function(S,U){return I.H.useDeferredValue(S,U)},P.useEffect=function(S,U){return I.H.useEffect(S,U)},P.useEffectEvent=function(S){return I.H.useEffectEvent(S)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(S,U,H){return I.H.useImperativeHandle(S,U,H)},P.useInsertionEffect=function(S,U){return I.H.useInsertionEffect(S,U)},P.useLayoutEffect=function(S,U){return I.H.useLayoutEffect(S,U)},P.useMemo=function(S,U){return I.H.useMemo(S,U)},P.useOptimistic=function(S,U){return I.H.useOptimistic(S,U)},P.useReducer=function(S,U,H){return I.H.useReducer(S,U,H)},P.useRef=function(S){return I.H.useRef(S)},P.useState=function(S){return I.H.useState(S)},P.useSyncExternalStore=function(S,U,H){return I.H.useSyncExternalStore(S,U,H)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.0",P}var e7;function vr(){return e7||(e7=1,U2.exports=k8()),U2.exports}var Ve=vr(),B2={exports:{}},Y1={},L2={exports:{}},H2={};var l7;function I8(){return l7||(l7=1,(function(u){function a(C,L){var $=C.length;C.push(L);t:for(;0<$;){var gt=$-1>>>1,bt=C[gt];if(0<v(bt,L))C[gt]=L,C[$]=bt,$=gt;else break t}}function f(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var L=C[0],$=C.pop();if($!==L){C[0]=$;t:for(var gt=0,bt=C.length,S=bt>>>1;gt<S;){var U=2*(gt+1)-1,H=C[U],V=U+1,tt=C[V];if(0>v(H,$))V<bt&&0>v(tt,H)?(C[gt]=tt,C[V]=$,gt=V):(C[gt]=H,C[U]=$,gt=U);else if(V<bt&&0>v(tt,$))C[gt]=tt,C[V]=$,gt=V;else break t}}return L}function v(C,L){var $=C.sortIndex-L.sortIndex;return $!==0?$:C.id-L.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var m=Date,d=m.now();u.unstable_now=function(){return m.now()-d}}var y=[],b=[],x=1,D=null,G=3,j=!1,q=!1,B=!1,O=!1,K=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function Q(C){for(var L=f(b);L!==null;){if(L.callback===null)c(b);else if(L.startTime<=C)c(b),L.sortIndex=L.expirationTime,a(y,L);else break;L=f(b)}}function F(C){if(B=!1,Q(C),!q)if(f(y)!==null)q=!0,k||(k=!0,Ut());else{var L=f(b);L!==null&&D0(F,L.startTime-C)}}var k=!1,I=-1,_t=5,xt=-1;function p0(){return O?!0:!(u.unstable_now()-xt<_t)}function Ft(){if(O=!1,k){var C=u.unstable_now();xt=C;var L=!0;try{t:{q=!1,B&&(B=!1,Z(I),I=-1),j=!0;var $=G;try{n:{for(Q(C),D=f(y);D!==null&&!(D.expirationTime>C&&p0());){var gt=D.callback;if(typeof gt=="function"){D.callback=null,G=D.priorityLevel;var bt=gt(D.expirationTime<=C);if(C=u.unstable_now(),typeof bt=="function"){D.callback=bt,Q(C),L=!0;break n}D===f(y)&&c(y),Q(C)}else c(y);D=f(y)}if(D!==null)L=!0;else{var S=f(b);S!==null&&D0(F,S.startTime-C),L=!1}}break t}finally{D=null,G=$,j=!1}L=void 0}}finally{L?Ut():k=!1}}}var Ut;if(typeof w=="function")Ut=function(){w(Ft)};else if(typeof MessageChannel<"u"){var a0=new MessageChannel,ht=a0.port2;a0.port1.onmessage=Ft,Ut=function(){ht.postMessage(null)}}else Ut=function(){K(Ft,0)};function D0(C,L){I=K(function(){C(u.unstable_now())},L)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(C){C.callback=null},u.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_t=0<C?Math.floor(1e3/C):5},u.unstable_getCurrentPriorityLevel=function(){return G},u.unstable_next=function(C){switch(G){case 1:case 2:case 3:var L=3;break;default:L=G}var $=G;G=L;try{return C()}finally{G=$}},u.unstable_requestPaint=function(){O=!0},u.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=G;G=C;try{return L()}finally{G=$}},u.unstable_scheduleCallback=function(C,L,$){var gt=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?gt+$:gt):$=gt,C){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=$+bt,C={id:x++,callback:L,priorityLevel:C,startTime:$,expirationTime:bt,sortIndex:-1},$>gt?(C.sortIndex=$,a(b,C),f(y)===null&&C===f(b)&&(B?(Z(I),I=-1):B=!0,D0(F,$-gt))):(C.sortIndex=bt,a(y,C),q||j||(q=!0,k||(k=!0,Ut()))),C},u.unstable_shouldYield=p0,u.unstable_wrapCallback=function(C){var L=G;return function(){var $=G;G=L;try{return C.apply(this,arguments)}finally{G=$}}}})(H2)),H2}var r7;function P8(){return r7||(r7=1,L2.exports=I8()),L2.exports}var G2={exports:{}},Wt={};var a7;function t4(){if(a7)return Wt;a7=1;var u=vr();function a(y){var b="https://react.dev/errors/"+y;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(a(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},v=Symbol.for("react.portal");function h(y,b,x){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:D==null?null:""+D,children:y,containerInfo:b,implementation:x}}var m=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(y,b){if(y==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Wt.createPortal=function(y,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(a(299));return h(y,b,null,x)},Wt.flushSync=function(y){var b=m.T,x=c.p;try{if(m.T=null,c.p=2,y)return y()}finally{m.T=b,c.p=x,c.d.f()}},Wt.preconnect=function(y,b){typeof y=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(y,b))},Wt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},Wt.preinit=function(y,b){if(typeof y=="string"&&b&&typeof b.as=="string"){var x=b.as,D=d(x,b.crossOrigin),G=typeof b.integrity=="string"?b.integrity:void 0,j=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?c.d.S(y,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:D,integrity:G,fetchPriority:j}):x==="script"&&c.d.X(y,{crossOrigin:D,integrity:G,fetchPriority:j,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Wt.preinitModule=function(y,b){if(typeof y=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=d(b.as,b.crossOrigin);c.d.M(y,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(y)},Wt.preload=function(y,b){if(typeof y=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,D=d(x,b.crossOrigin);c.d.L(y,x,{crossOrigin:D,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Wt.preloadModule=function(y,b){if(typeof y=="string")if(b){var x=d(b.as,b.crossOrigin);c.d.m(y,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(y)},Wt.requestFormReset=function(y){c.d.r(y)},Wt.unstable_batchedUpdates=function(y,b){return y(b)},Wt.useFormState=function(y,b,x){return m.H.useFormState(y,b,x)},Wt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Wt.version="19.2.0",Wt}var i7;function n4(){if(i7)return G2.exports;i7=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(a){console.error(a)}}return u(),G2.exports=t4(),G2.exports}var u7;function e4(){if(u7)return Y1;u7=1;var u=P8(),a=vr(),f=n4();function c(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function m(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function y(t){if(h(t)!==t)throw Error(c(188))}function b(t){var n=t.alternate;if(!n){if(n=h(t),n===null)throw Error(c(188));return n!==t?null:t}for(var e=t,l=n;;){var r=e.return;if(r===null)break;var i=r.alternate;if(i===null){if(l=r.return,l!==null){e=l;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===e)return y(r),t;if(i===l)return y(r),n;i=i.sibling}throw Error(c(188))}if(e.return!==l.return)e=r,l=i;else{for(var s=!1,o=r.child;o;){if(o===e){s=!0,e=r,l=i;break}if(o===l){s=!0,l=r,e=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===e){s=!0,e=i,l=r;break}if(o===l){s=!0,l=i,e=r;break}o=o.sibling}if(!s)throw Error(c(189))}}if(e.alternate!==l)throw Error(c(190))}if(e.tag!==3)throw Error(c(188));return e.stateNode.current===e?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var D=Object.assign,G=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),w=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),p0=Symbol.for("react.memo_cache_sentinel"),Ft=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=Ft&&t[Ft]||t["@@iterator"],typeof t=="function"?t:null)}var a0=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===a0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case K:return"Profiler";case O:return"StrictMode";case F:return"Suspense";case k:return"SuspenseList";case xt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case w:return t.displayName||"Context";case Z:return(t._context.displayName||"Context")+".Consumer";case Q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case _t:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var D0=Array.isArray,C=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},gt=[],bt=-1;function S(t){return{current:t}}function U(t){0>bt||(t.current=gt[bt],gt[bt]=null,bt--)}function H(t,n){bt++,gt[bt]=t.current,t.current=n}var V=S(null),tt=S(null),lt=S(null),ot=S(null);function $t(t,n){switch(H(lt,n),H(tt,t),H(V,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?E5(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=E5(n),t=T5(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}U(V),H(V,t)}function Rt(){U(V),U(tt),U(lt)}function Ke(t){t.memoizedState!==null&&H(ot,t);var n=V.current,e=T5(n,t.type);n!==e&&(H(tt,t),H(V,e))}function Q1(t){tt.current===t&&(U(V),U(tt)),ot.current===t&&(U(ot),L1._currentValue=$)}var dr,I2;function xn(t){if(dr===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);dr=n&&n[1]||"",I2=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dr+t+I2}var mr=!1;function gr(t,n){if(!t||mr)return"";mr=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(_){var A=_}Reflect.construct(t,[],N)}else{try{N.call()}catch(_){A=_}t.call(N.prototype)}}else{try{throw Error()}catch(_){A=_}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(_){if(_&&A&&typeof _.stack=="string")return[_.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var g=s.split(`
`),T=o.split(`
`);for(r=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;if(l===g.length||r===T.length)for(l=g.length-1,r=T.length-1;1<=l&&0<=r&&g[l]!==T[r];)r--;for(;1<=l&&0<=r;l--,r--)if(g[l]!==T[r]){if(l!==1||r!==1)do if(l--,r--,0>r||g[l]!==T[r]){var z=`
`+g[l].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=l&&0<=r);break}}}finally{mr=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?xn(e):""}function z7(t,n){switch(t.tag){case 26:case 27:case 5:return xn(t.type);case 16:return xn("Lazy");case 13:return t.child!==n&&n!==null?xn("Suspense Fallback"):xn("Suspense");case 19:return xn("SuspenseList");case 0:case 15:return gr(t.type,!1);case 11:return gr(t.type.render,!1);case 1:return gr(t.type,!0);case 31:return xn("Activity");default:return""}}function P2(t){try{var n="",e=null;do n+=z7(t,e),e=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var yr=Object.prototype.hasOwnProperty,pr=u.unstable_scheduleCallback,Sr=u.unstable_cancelCallback,C7=u.unstable_shouldYield,O7=u.unstable_requestPaint,i0=u.unstable_now,R7=u.unstable_getCurrentPriorityLevel,ti=u.unstable_ImmediatePriority,ni=u.unstable_UserBlockingPriority,Z1=u.unstable_NormalPriority,D7=u.unstable_LowPriority,ei=u.unstable_IdlePriority,N7=u.log,x7=u.unstable_setDisableYieldValue,Je=null,u0=null;function un(t){if(typeof N7=="function"&&x7(t),u0&&typeof u0.setStrictMode=="function")try{u0.setStrictMode(Je,t)}catch{}}var f0=Math.clz32?Math.clz32:L7,U7=Math.log,B7=Math.LN2;function L7(t){return t>>>=0,t===0?32:31-(U7(t)/B7|0)|0}var K1=256,J1=262144,F1=4194304;function Un(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function W1(t,n,e){var l=t.pendingLanes;if(l===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?r=Un(l):(s&=o,s!==0?r=Un(s):e||(e=o&~t,e!==0&&(r=Un(e))))):(o=l&~i,o!==0?r=Un(o):s!==0?r=Un(s):e||(e=l&~t,e!==0&&(r=Un(e)))),r===0?0:n!==0&&n!==r&&(n&i)===0&&(i=r&-r,e=n&-n,i>=e||i===32&&(e&4194048)!==0)?n:r}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function H7(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function li(){var t=F1;return F1<<=1,(F1&62914560)===0&&(F1=4194304),t}function br(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function G7(t,n,e,l,r,i){var s=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var o=t.entanglements,g=t.expirationTimes,T=t.hiddenUpdates;for(e=s&~e;0<e;){var z=31-f0(e),N=1<<z;o[z]=0,g[z]=-1;var A=T[z];if(A!==null)for(T[z]=null,z=0;z<A.length;z++){var _=A[z];_!==null&&(_.lane&=-536870913)}e&=~N}l!==0&&ri(t,l,0),i!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~n))}function ri(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-f0(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|e&261930}function ai(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var l=31-f0(e),r=1<<l;r&n|t[l]&n&&(t[l]|=n),e&=~r}}function ii(t,n){var e=n&-n;return e=(e&42)!==0?1:Mr(e),(e&(t.suspendedLanes|n))!==0?0:e}function Mr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Er(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ui(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:K5(t.type))}function fi(t,n){var e=L.p;try{return L.p=t,n()}finally{L.p=e}}var fn=Math.random().toString(36).slice(2),jt="__reactFiber$"+fn,It="__reactProps$"+fn,Pn="__reactContainer$"+fn,Tr="__reactEvents$"+fn,q7="__reactListeners$"+fn,w7="__reactHandles$"+fn,ci="__reactResources$"+fn,$e="__reactMarker$"+fn;function Ar(t){delete t[jt],delete t[It],delete t[Tr],delete t[q7],delete t[w7]}function te(t){var n=t[jt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[Pn]||e[jt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=D5(t);t!==null;){if(e=t[jt])return e;t=D5(t)}return n}t=e,e=t.parentNode}return null}function ne(t){if(t=t[jt]||t[Pn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ke(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(c(33))}function ee(t){var n=t[ci];return n||(n=t[ci]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Vt(t){t[$e]=!0}var si=new Set,vi={};function Bn(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(vi[t]=n,t=0;t<n.length;t++)si.add(n[t])}var Y7=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oi={},hi={};function V7(t){return yr.call(hi,t)?!0:yr.call(oi,t)?!1:Y7.test(t)?hi[t]=!0:(oi[t]=!0,!1)}function $1(t,n,e){if(V7(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function k1(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function V0(t,n,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+l)}}function S0(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function di(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function X7(t,n,e){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,i=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return r.call(this)},set:function(s){e=""+s,i.call(this,s)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _r(t){if(!t._valueTracker){var n=di(t)?"checked":"value";t._valueTracker=X7(t,n,""+t[n])}}function mi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),l="";return t&&(l=di(t)?t.checked?"true":"false":t.value),t=l,t!==e?(n.setValue(t),!0):!1}function I1(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var j7=/[\n"\\]/g;function b0(t){return t.replace(j7,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zr(t,n,e,l,r,i,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),n!=null?s==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+S0(n)):t.value!==""+S0(n)&&(t.value=""+S0(n)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),n!=null?Cr(t,s,S0(n)):e!=null?Cr(t,s,S0(e)):l!=null&&t.removeAttribute("value"),r==null&&i!=null&&(t.defaultChecked=!!i),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+S0(o):t.removeAttribute("name")}function gi(t,n,e,l,r,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),n!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){_r(t);return}e=e!=null?""+S0(e):"",n=n!=null?""+S0(n):e,o||n===t.value||(t.value=n),t.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=o?t.checked:!!l,t.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),_r(t)}function Cr(t,n,e){n==="number"&&I1(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function re(t,n,e,l){if(t=t.options,n){n={};for(var r=0;r<e.length;r++)n["$"+e[r]]=!0;for(e=0;e<t.length;e++)r=n.hasOwnProperty("$"+t[e].value),t[e].selected!==r&&(t[e].selected=r),r&&l&&(t[e].defaultSelected=!0)}else{for(e=""+S0(e),n=null,r=0;r<t.length;r++){if(t[r].value===e){t[r].selected=!0,l&&(t[r].defaultSelected=!0);return}n!==null||t[r].disabled||(n=t[r])}n!==null&&(n.selected=!0)}}function yi(t,n,e){if(n!=null&&(n=""+S0(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+S0(e):""}function pi(t,n,e,l){if(n==null){if(l!=null){if(e!=null)throw Error(c(92));if(D0(l)){if(1<l.length)throw Error(c(93));l=l[0]}e=l}e==null&&(e=""),n=e}e=S0(n),t.defaultValue=e,l=t.textContent,l===e&&l!==""&&l!==null&&(t.value=l),_r(t)}function ae(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var Q7=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Si(t,n,e){var l=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,e):typeof e!="number"||e===0||Q7.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function bi(t,n,e){if(n!=null&&typeof n!="object")throw Error(c(62));if(t=t.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&e[r]!==l&&Si(t,r,l)}else for(var i in n)n.hasOwnProperty(i)&&Si(t,i,n[i])}function Or(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z7=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K7=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function P1(t){return K7.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function X0(){}var Rr=null;function Dr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ie=null,ue=null;function Mi(t){var n=ne(t);if(n&&(t=n.stateNode)){var e=t[It]||null;t:switch(t=n.stateNode,n.type){case"input":if(zr(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+b0(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var l=e[n];if(l!==t&&l.form===t.form){var r=l[It]||null;if(!r)throw Error(c(90));zr(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<e.length;n++)l=e[n],l.form===t.form&&mi(l)}break t;case"textarea":yi(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&re(t,!!e.multiple,n,!1)}}}var Nr=!1;function Ei(t,n,e){if(Nr)return t(n,e);Nr=!0;try{var l=t(n);return l}finally{if(Nr=!1,(ie!==null||ue!==null)&&(Yl(),ie&&(n=ie,t=ue,ue=ie=null,Mi(n),t)))for(n=0;n<t.length;n++)Mi(t[n])}}function Ie(t,n){var e=t.stateNode;if(e===null)return null;var l=e[It]||null;if(l===null)return null;e=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(c(231,n,typeof e));return e}var j0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xr=!1;if(j0)try{var Pe={};Object.defineProperty(Pe,"passive",{get:function(){xr=!0}}),window.addEventListener("test",Pe,Pe),window.removeEventListener("test",Pe,Pe)}catch{xr=!1}var cn=null,Ur=null,tl=null;function Ti(){if(tl)return tl;var t,n=Ur,e=n.length,l,r="value"in cn?cn.value:cn.textContent,i=r.length;for(t=0;t<e&&n[t]===r[t];t++);var s=e-t;for(l=1;l<=s&&n[e-l]===r[i-l];l++);return tl=r.slice(t,1<l?1-l:void 0)}function nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Ai(){return!1}function Pt(t){function n(e,l,r,i,s){this._reactName=e,this._targetInst=r,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(e=t[o],this[o]=e?e(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?el:Ai,this.isPropagationStopped=Ai,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Pt(Ln),t1=D({},Ln,{view:0,detail:0}),J7=Pt(t1),Br,Lr,n1,rl=D({},t1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==n1&&(n1&&t.type==="mousemove"?(Br=t.screenX-n1.screenX,Lr=t.screenY-n1.screenY):Lr=Br=0,n1=t),Br)},movementY:function(t){return"movementY"in t?t.movementY:Lr}}),_i=Pt(rl),F7=D({},rl,{dataTransfer:0}),W7=Pt(F7),$7=D({},t1,{relatedTarget:0}),Hr=Pt($7),k7=D({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),I7=Pt(k7),P7=D({},Ln,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t6=Pt(P7),n6=D({},Ln,{data:0}),zi=Pt(n6),e6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a6(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=r6[t])?!!n[t]:!1}function Gr(){return a6}var i6=D({},t1,{key:function(t){if(t.key){var n=e6[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gr,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u6=Pt(i6),f6=D({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ci=Pt(f6),c6=D({},t1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gr}),s6=Pt(c6),v6=D({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),o6=Pt(v6),h6=D({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d6=Pt(h6),m6=D({},Ln,{newState:0,oldState:0}),g6=Pt(m6),y6=[9,13,27,32],qr=j0&&"CompositionEvent"in window,e1=null;j0&&"documentMode"in document&&(e1=document.documentMode);var p6=j0&&"TextEvent"in window&&!e1,Oi=j0&&(!qr||e1&&8<e1&&11>=e1),Ri=" ",Di=!1;function Ni(t,n){switch(t){case"keyup":return y6.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xi(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fe=!1;function S6(t,n){switch(t){case"compositionend":return xi(n);case"keypress":return n.which!==32?null:(Di=!0,Ri);case"textInput":return t=n.data,t===Ri&&Di?null:t;default:return null}}function b6(t,n){if(fe)return t==="compositionend"||!qr&&Ni(t,n)?(t=Ti(),tl=Ur=cn=null,fe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Oi&&n.locale!=="ko"?null:n.data;default:return null}}var M6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ui(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!M6[t.type]:n==="textarea"}function Bi(t,n,e,l){ie?ue?ue.push(l):ue=[l]:ie=l,n=Jl(n,"onChange"),0<n.length&&(e=new ll("onChange","change",null,e,l),t.push({event:e,listeners:n}))}var l1=null,r1=null;function E6(t){g5(t,0)}function al(t){var n=ke(t);if(mi(n))return t}function Li(t,n){if(t==="change")return n}var Hi=!1;if(j0){var wr;if(j0){var Yr="oninput"in document;if(!Yr){var Gi=document.createElement("div");Gi.setAttribute("oninput","return;"),Yr=typeof Gi.oninput=="function"}wr=Yr}else wr=!1;Hi=wr&&(!document.documentMode||9<document.documentMode)}function qi(){l1&&(l1.detachEvent("onpropertychange",wi),r1=l1=null)}function wi(t){if(t.propertyName==="value"&&al(r1)){var n=[];Bi(n,r1,t,Dr(t)),Ei(E6,n)}}function T6(t,n,e){t==="focusin"?(qi(),l1=n,r1=e,l1.attachEvent("onpropertychange",wi)):t==="focusout"&&qi()}function A6(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(r1)}function _6(t,n){if(t==="click")return al(n)}function z6(t,n){if(t==="input"||t==="change")return al(n)}function C6(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var c0=typeof Object.is=="function"?Object.is:C6;function a1(t,n){if(c0(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),l=Object.keys(n);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var r=e[l];if(!yr.call(n,r)||!c0(t[r],n[r]))return!1}return!0}function Yi(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vi(t,n){var e=Yi(t);t=0;for(var l;e;){if(e.nodeType===3){if(l=t+e.textContent.length,t<=n&&l>=n)return{node:e,offset:n-t};t=l}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Yi(e)}}function Xi(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xi(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ji(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=I1(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=I1(t.document)}return n}function Vr(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var O6=j0&&"documentMode"in document&&11>=document.documentMode,ce=null,Xr=null,i1=null,jr=!1;function Qi(t,n,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;jr||ce==null||ce!==I1(l)||(l=ce,"selectionStart"in l&&Vr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),i1&&a1(i1,l)||(i1=l,l=Jl(Xr,"onSelect"),0<l.length&&(n=new ll("onSelect","select",null,n,e),t.push({event:n,listeners:l}),n.target=ce)))}function Hn(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var se={animationend:Hn("Animation","AnimationEnd"),animationiteration:Hn("Animation","AnimationIteration"),animationstart:Hn("Animation","AnimationStart"),transitionrun:Hn("Transition","TransitionRun"),transitionstart:Hn("Transition","TransitionStart"),transitioncancel:Hn("Transition","TransitionCancel"),transitionend:Hn("Transition","TransitionEnd")},Qr={},Zi={};j0&&(Zi=document.createElement("div").style,"AnimationEvent"in window||(delete se.animationend.animation,delete se.animationiteration.animation,delete se.animationstart.animation),"TransitionEvent"in window||delete se.transitionend.transition);function Gn(t){if(Qr[t])return Qr[t];if(!se[t])return t;var n=se[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in Zi)return Qr[t]=n[e];return t}var Ki=Gn("animationend"),Ji=Gn("animationiteration"),Fi=Gn("animationstart"),R6=Gn("transitionrun"),D6=Gn("transitionstart"),N6=Gn("transitioncancel"),Wi=Gn("transitionend"),$i=new Map,Zr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zr.push("scrollEnd");function N0(t,n){$i.set(t,n),Bn(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},M0=[],ve=0,Kr=0;function ul(){for(var t=ve,n=Kr=ve=0;n<t;){var e=M0[n];M0[n++]=null;var l=M0[n];M0[n++]=null;var r=M0[n];M0[n++]=null;var i=M0[n];if(M0[n++]=null,l!==null&&r!==null){var s=l.pending;s===null?r.next=r:(r.next=s.next,s.next=r),l.pending=r}i!==0&&ki(e,r,i)}}function fl(t,n,e,l){M0[ve++]=t,M0[ve++]=n,M0[ve++]=e,M0[ve++]=l,Kr|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Jr(t,n,e,l){return fl(t,n,e,l),cl(t)}function qn(t,n){return fl(t,null,null,n),cl(t)}function ki(t,n,e){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e);for(var r=!1,i=t.return;i!==null;)i.childLanes|=e,l=i.alternate,l!==null&&(l.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(r=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,r&&n!==null&&(r=31-f0(e),t=i.hiddenUpdates,l=t[r],l===null?t[r]=[n]:l.push(n),n.lane=e|536870912),i):null}function cl(t){if(50<O1)throw O1=0,e2=null,Error(c(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var oe={};function x6(t,n,e,l){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s0(t,n,e,l){return new x6(t,n,e,l)}function Fr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Q0(t,n){var e=t.alternate;return e===null?(e=s0(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Ii(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function sl(t,n,e,l,r,i){var s=0;if(l=t,typeof t=="function")Fr(t)&&(s=1);else if(typeof t=="string")s=G8(t,e,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case xt:return t=s0(31,e,n,r),t.elementType=xt,t.lanes=i,t;case B:return wn(e.children,r,i,n);case O:s=8,r|=24;break;case K:return t=s0(12,e,n,r|2),t.elementType=K,t.lanes=i,t;case F:return t=s0(13,e,n,r),t.elementType=F,t.lanes=i,t;case k:return t=s0(19,e,n,r),t.elementType=k,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:s=10;break t;case Z:s=9;break t;case Q:s=11;break t;case I:s=14;break t;case _t:s=16,l=null;break t}s=29,e=Error(c(130,t===null?"null":typeof t,"")),l=null}return n=s0(s,e,n,r),n.elementType=t,n.type=l,n.lanes=i,n}function wn(t,n,e,l){return t=s0(7,t,l,n),t.lanes=e,t}function Wr(t,n,e){return t=s0(6,t,null,n),t.lanes=e,t}function Pi(t){var n=s0(18,null,null,0);return n.stateNode=t,n}function $r(t,n,e){return n=s0(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var tu=new WeakMap;function E0(t,n){if(typeof t=="object"&&t!==null){var e=tu.get(t);return e!==void 0?e:(n={value:t,source:n,stack:P2(n)},tu.set(t,n),n)}return{value:t,source:n,stack:P2(n)}}var he=[],de=0,vl=null,u1=0,T0=[],A0=0,sn=null,H0=1,G0="";function Z0(t,n){he[de++]=u1,he[de++]=vl,vl=t,u1=n}function nu(t,n,e){T0[A0++]=H0,T0[A0++]=G0,T0[A0++]=sn,sn=t;var l=H0;t=G0;var r=32-f0(l)-1;l&=~(1<<r),e+=1;var i=32-f0(n)+r;if(30<i){var s=r-r%5;i=(l&(1<<s)-1).toString(32),l>>=s,r-=s,H0=1<<32-f0(n)+r|e<<r|l,G0=i+t}else H0=1<<i|e<<r|l,G0=t}function kr(t){t.return!==null&&(Z0(t,1),nu(t,1,0))}function Ir(t){for(;t===vl;)vl=he[--de],he[de]=null,u1=he[--de],he[de]=null;for(;t===sn;)sn=T0[--A0],T0[A0]=null,G0=T0[--A0],T0[A0]=null,H0=T0[--A0],T0[A0]=null}function eu(t,n){T0[A0++]=H0,T0[A0++]=G0,T0[A0++]=sn,H0=n.id,G0=n.overflow,sn=t}var Qt=null,Et=null,ft=!1,vn=null,_0=!1,Pr=Error(c(519));function on(t){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw f1(E0(n,t)),Pr}function lu(t){var n=t.stateNode,e=t.type,l=t.memoizedProps;switch(n[jt]=t,n[It]=l,e){case"dialog":at("cancel",n),at("close",n);break;case"iframe":case"object":case"embed":at("load",n);break;case"video":case"audio":for(e=0;e<D1.length;e++)at(D1[e],n);break;case"source":at("error",n);break;case"img":case"image":case"link":at("error",n),at("load",n);break;case"details":at("toggle",n);break;case"input":at("invalid",n),gi(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":at("invalid",n);break;case"textarea":at("invalid",n),pi(n,l.value,l.defaultValue,l.children)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||l.suppressHydrationWarning===!0||b5(n.textContent,e)?(l.popover!=null&&(at("beforetoggle",n),at("toggle",n)),l.onScroll!=null&&at("scroll",n),l.onScrollEnd!=null&&at("scrollend",n),l.onClick!=null&&(n.onclick=X0),n=!0):n=!1,n||on(t,!0)}function ru(t){for(Qt=t.return;Qt;)switch(Qt.tag){case 5:case 31:case 13:_0=!1;return;case 27:case 3:_0=!0;return;default:Qt=Qt.return}}function me(t){if(t!==Qt)return!1;if(!ft)return ru(t),ft=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||y2(t.type,t.memoizedProps)),e=!e),e&&Et&&on(t),ru(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Et=R5(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Et=R5(t)}else n===27?(n=Et,zn(t.type)?(t=E2,E2=null,Et=t):Et=n):Et=Qt?C0(t.stateNode.nextSibling):null;return!0}function Yn(){Et=Qt=null,ft=!1}function ta(){var t=vn;return t!==null&&(l0===null?l0=t:l0.push.apply(l0,t),vn=null),t}function f1(t){vn===null?vn=[t]:vn.push(t)}var na=S(null),Vn=null,K0=null;function hn(t,n,e){H(na,n._currentValue),n._currentValue=e}function J0(t){t._currentValue=na.current,U(na)}function ea(t,n,e){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===e)break;t=t.return}}function la(t,n,e,l){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var i=r.dependencies;if(i!==null){var s=r.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=r;for(var g=0;g<n.length;g++)if(o.context===n[g]){i.lanes|=e,o=i.alternate,o!==null&&(o.lanes|=e),ea(i.return,e,t),l||(s=null);break t}i=o.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(c(341));s.lanes|=e,i=s.alternate,i!==null&&(i.lanes|=e),ea(s,e,t),s=null}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===t){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function ge(t,n,e,l){t=null;for(var r=n,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var o=r.type;c0(r.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(r===ot.current){if(s=r.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(L1):t=[L1])}r=r.return}t!==null&&la(n,t,e,l),n.flags|=262144}function ol(t){for(t=t.firstContext;t!==null;){if(!c0(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xn(t){Vn=t,K0=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zt(t){return au(Vn,t)}function hl(t,n){return Vn===null&&Xn(t),au(t,n)}function au(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},K0===null){if(t===null)throw Error(c(308));K0=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else K0=K0.next=n;return e}var U6=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},B6=u.unstable_scheduleCallback,L6=u.unstable_NormalPriority,Bt={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ra(){return{controller:new U6,data:new Map,refCount:0}}function c1(t){t.refCount--,t.refCount===0&&B6(L6,function(){t.controller.abort()})}var s1=null,aa=0,ye=0,pe=null;function H6(t,n){if(s1===null){var e=s1=[];aa=0,ye=f2(),pe={status:"pending",value:void 0,then:function(l){e.push(l)}}}return aa++,n.then(iu,iu),n}function iu(){if(--aa===0&&s1!==null){pe!==null&&(pe.status="fulfilled");var t=s1;s1=null,ye=0,pe=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function G6(t,n){var e=[],l={status:"pending",value:null,reason:null,then:function(r){e.push(r)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<e.length;r++)(0,e[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<e.length;r++)(0,e[r])(void 0)}),l}var uu=C.S;C.S=function(t,n){Q3=i0(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&H6(t,n),uu!==null&&uu(t,n)};var jn=S(null);function ia(){var t=jn.current;return t!==null?t:Mt.pooledCache}function dl(t,n){n===null?H(jn,jn.current):H(jn,n.pool)}function fu(){var t=ia();return t===null?null:{parent:Bt._currentValue,pool:t}}var Se=Error(c(460)),ua=Error(c(474)),ml=Error(c(542)),gl={then:function(){}};function cu(t){return t=t.status,t==="fulfilled"||t==="rejected"}function su(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(X0,X0),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ou(t),t;default:if(typeof n.status=="string")n.then(X0,X0);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ou(t),t}throw Zn=n,Se}}function Qn(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Zn=e,Se):e}}var Zn=null;function vu(){if(Zn===null)throw Error(c(459));var t=Zn;return Zn=null,t}function ou(t){if(t===Se||t===ml)throw Error(c(483))}var be=null,v1=0;function yl(t){var n=v1;return v1+=1,be===null&&(be=[]),su(be,t,n)}function o1(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pl(t,n){throw n.$$typeof===G?Error(c(525)):(t=Object.prototype.toString.call(n),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hu(t){function n(M,p){if(t){var E=M.deletions;E===null?(M.deletions=[p],M.flags|=16):E.push(p)}}function e(M,p){if(!t)return null;for(;p!==null;)n(M,p),p=p.sibling;return null}function l(M){for(var p=new Map;M!==null;)M.key!==null?p.set(M.key,M):p.set(M.index,M),M=M.sibling;return p}function r(M,p){return M=Q0(M,p),M.index=0,M.sibling=null,M}function i(M,p,E){return M.index=E,t?(E=M.alternate,E!==null?(E=E.index,E<p?(M.flags|=67108866,p):E):(M.flags|=67108866,p)):(M.flags|=1048576,p)}function s(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function o(M,p,E,R){return p===null||p.tag!==6?(p=Wr(E,M.mode,R),p.return=M,p):(p=r(p,E),p.return=M,p)}function g(M,p,E,R){var J=E.type;return J===B?z(M,p,E.props.children,R,E.key):p!==null&&(p.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===_t&&Qn(J)===p.type)?(p=r(p,E.props),o1(p,E),p.return=M,p):(p=sl(E.type,E.key,E.props,null,M.mode,R),o1(p,E),p.return=M,p)}function T(M,p,E,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==E.containerInfo||p.stateNode.implementation!==E.implementation?(p=$r(E,M.mode,R),p.return=M,p):(p=r(p,E.children||[]),p.return=M,p)}function z(M,p,E,R,J){return p===null||p.tag!==7?(p=wn(E,M.mode,R,J),p.return=M,p):(p=r(p,E),p.return=M,p)}function N(M,p,E){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Wr(""+p,M.mode,E),p.return=M,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case j:return E=sl(p.type,p.key,p.props,null,M.mode,E),o1(E,p),E.return=M,E;case q:return p=$r(p,M.mode,E),p.return=M,p;case _t:return p=Qn(p),N(M,p,E)}if(D0(p)||Ut(p))return p=wn(p,M.mode,E,null),p.return=M,p;if(typeof p.then=="function")return N(M,yl(p),E);if(p.$$typeof===w)return N(M,hl(M,p),E);pl(M,p)}return null}function A(M,p,E,R){var J=p!==null?p.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:o(M,p,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case j:return E.key===J?g(M,p,E,R):null;case q:return E.key===J?T(M,p,E,R):null;case _t:return E=Qn(E),A(M,p,E,R)}if(D0(E)||Ut(E))return J!==null?null:z(M,p,E,R,null);if(typeof E.then=="function")return A(M,p,yl(E),R);if(E.$$typeof===w)return A(M,p,hl(M,E),R);pl(M,E)}return null}function _(M,p,E,R,J){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return M=M.get(E)||null,o(p,M,""+R,J);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case j:return M=M.get(R.key===null?E:R.key)||null,g(p,M,R,J);case q:return M=M.get(R.key===null?E:R.key)||null,T(p,M,R,J);case _t:return R=Qn(R),_(M,p,E,R,J)}if(D0(R)||Ut(R))return M=M.get(E)||null,z(p,M,R,J,null);if(typeof R.then=="function")return _(M,p,E,yl(R),J);if(R.$$typeof===w)return _(M,p,E,hl(p,R),J);pl(p,R)}return null}function Y(M,p,E,R){for(var J=null,ct=null,X=p,et=p=0,ut=null;X!==null&&et<E.length;et++){X.index>et?(ut=X,X=null):ut=X.sibling;var st=A(M,X,E[et],R);if(st===null){X===null&&(X=ut);break}t&&X&&st.alternate===null&&n(M,X),p=i(st,p,et),ct===null?J=st:ct.sibling=st,ct=st,X=ut}if(et===E.length)return e(M,X),ft&&Z0(M,et),J;if(X===null){for(;et<E.length;et++)X=N(M,E[et],R),X!==null&&(p=i(X,p,et),ct===null?J=X:ct.sibling=X,ct=X);return ft&&Z0(M,et),J}for(X=l(X);et<E.length;et++)ut=_(X,M,et,E[et],R),ut!==null&&(t&&ut.alternate!==null&&X.delete(ut.key===null?et:ut.key),p=i(ut,p,et),ct===null?J=ut:ct.sibling=ut,ct=ut);return t&&X.forEach(function(Nn){return n(M,Nn)}),ft&&Z0(M,et),J}function W(M,p,E,R){if(E==null)throw Error(c(151));for(var J=null,ct=null,X=p,et=p=0,ut=null,st=E.next();X!==null&&!st.done;et++,st=E.next()){X.index>et?(ut=X,X=null):ut=X.sibling;var Nn=A(M,X,st.value,R);if(Nn===null){X===null&&(X=ut);break}t&&X&&Nn.alternate===null&&n(M,X),p=i(Nn,p,et),ct===null?J=Nn:ct.sibling=Nn,ct=Nn,X=ut}if(st.done)return e(M,X),ft&&Z0(M,et),J;if(X===null){for(;!st.done;et++,st=E.next())st=N(M,st.value,R),st!==null&&(p=i(st,p,et),ct===null?J=st:ct.sibling=st,ct=st);return ft&&Z0(M,et),J}for(X=l(X);!st.done;et++,st=E.next())st=_(X,M,et,st.value,R),st!==null&&(t&&st.alternate!==null&&X.delete(st.key===null?et:st.key),p=i(st,p,et),ct===null?J=st:ct.sibling=st,ct=st);return t&&X.forEach(function(F8){return n(M,F8)}),ft&&Z0(M,et),J}function St(M,p,E,R){if(typeof E=="object"&&E!==null&&E.type===B&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case j:t:{for(var J=E.key;p!==null;){if(p.key===J){if(J=E.type,J===B){if(p.tag===7){e(M,p.sibling),R=r(p,E.props.children),R.return=M,M=R;break t}}else if(p.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===_t&&Qn(J)===p.type){e(M,p.sibling),R=r(p,E.props),o1(R,E),R.return=M,M=R;break t}e(M,p);break}else n(M,p);p=p.sibling}E.type===B?(R=wn(E.props.children,M.mode,R,E.key),R.return=M,M=R):(R=sl(E.type,E.key,E.props,null,M.mode,R),o1(R,E),R.return=M,M=R)}return s(M);case q:t:{for(J=E.key;p!==null;){if(p.key===J)if(p.tag===4&&p.stateNode.containerInfo===E.containerInfo&&p.stateNode.implementation===E.implementation){e(M,p.sibling),R=r(p,E.children||[]),R.return=M,M=R;break t}else{e(M,p);break}else n(M,p);p=p.sibling}R=$r(E,M.mode,R),R.return=M,M=R}return s(M);case _t:return E=Qn(E),St(M,p,E,R)}if(D0(E))return Y(M,p,E,R);if(Ut(E)){if(J=Ut(E),typeof J!="function")throw Error(c(150));return E=J.call(E),W(M,p,E,R)}if(typeof E.then=="function")return St(M,p,yl(E),R);if(E.$$typeof===w)return St(M,p,hl(M,E),R);pl(M,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,p!==null&&p.tag===6?(e(M,p.sibling),R=r(p,E),R.return=M,M=R):(e(M,p),R=Wr(E,M.mode,R),R.return=M,M=R),s(M)):e(M,p)}return function(M,p,E,R){try{v1=0;var J=St(M,p,E,R);return be=null,J}catch(X){if(X===Se||X===ml)throw X;var ct=s0(29,X,null,M.mode);return ct.lanes=R,ct.return=M,ct}finally{}}}var Kn=hu(!0),du=hu(!1),dn=!1;function fa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ca(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function mn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function gn(t,n,e){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=cl(t),ki(t,null,e),n}return fl(t,l,n,e),cl(t)}function h1(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,ai(t,e)}}function sa(t,n){var e=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var r=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?r=i=s:i=i.next=s,e=e.next}while(e!==null);i===null?r=i=n:i=i.next=n}else r=i=n;e={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var va=!1;function d1(){if(va){var t=pe;if(t!==null)throw t}}function m1(t,n,e,l){va=!1;var r=t.updateQueue;dn=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var g=o,T=g.next;g.next=null,s===null?i=T:s.next=T,s=g;var z=t.alternate;z!==null&&(z=z.updateQueue,o=z.lastBaseUpdate,o!==s&&(o===null?z.firstBaseUpdate=T:o.next=T,z.lastBaseUpdate=g))}if(i!==null){var N=r.baseState;s=0,z=T=g=null,o=i;do{var A=o.lane&-536870913,_=A!==o.lane;if(_?(it&A)===A:(l&A)===A){A!==0&&A===ye&&(va=!0),z!==null&&(z=z.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var Y=t,W=o;A=n;var St=e;switch(W.tag){case 1:if(Y=W.payload,typeof Y=="function"){N=Y.call(St,N,A);break t}N=Y;break t;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=W.payload,A=typeof Y=="function"?Y.call(St,N,A):Y,A==null)break t;N=D({},N,A);break t;case 2:dn=!0}}A=o.callback,A!==null&&(t.flags|=64,_&&(t.flags|=8192),_=r.callbacks,_===null?r.callbacks=[A]:_.push(A))}else _={lane:A,tag:o.tag,payload:o.payload,callback:o.callback,next:null},z===null?(T=z=_,g=N):z=z.next=_,s|=A;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;_=o,o=_.next,_.next=null,r.lastBaseUpdate=_,r.shared.pending=null}}while(!0);z===null&&(g=N),r.baseState=g,r.firstBaseUpdate=T,r.lastBaseUpdate=z,i===null&&(r.shared.lanes=0),Mn|=s,t.lanes=s,t.memoizedState=N}}function mu(t,n){if(typeof t!="function")throw Error(c(191,t));t.call(n)}function gu(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)mu(e[t],n)}var Me=S(null),Sl=S(0);function yu(t,n){t=en,H(Sl,t),H(Me,n),en=t|n.baseLanes}function oa(){H(Sl,en),H(Me,Me.current)}function ha(){en=Sl.current,U(Me),U(Sl)}var v0=S(null),z0=null;function yn(t){var n=t.alternate;H(Dt,Dt.current&1),H(v0,t),z0===null&&(n===null||Me.current!==null||n.memoizedState!==null)&&(z0=t)}function da(t){H(Dt,Dt.current),H(v0,t),z0===null&&(z0=t)}function pu(t){t.tag===22?(H(Dt,Dt.current),H(v0,t),z0===null&&(z0=t)):pn()}function pn(){H(Dt,Dt.current),H(v0,v0.current)}function o0(t){U(v0),z0===t&&(z0=null),U(Dt)}var Dt=S(0);function bl(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||b2(e)||M2(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var F0=0,nt=null,yt=null,Lt=null,Ml=!1,Ee=!1,Jn=!1,El=0,g1=0,Te=null,q6=0;function Ct(){throw Error(c(321))}function ma(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!c0(t[e],n[e]))return!1;return!0}function ga(t,n,e,l,r,i){return F0=i,nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?n3:Na,Jn=!1,i=e(l,r),Jn=!1,Ee&&(i=bu(n,e,l,r)),Su(t),i}function Su(t){C.H=S1;var n=yt!==null&&yt.next!==null;if(F0=0,Lt=yt=nt=null,Ml=!1,g1=0,Te=null,n)throw Error(c(300));t===null||Ht||(t=t.dependencies,t!==null&&ol(t)&&(Ht=!0))}function bu(t,n,e,l){nt=t;var r=0;do{if(Ee&&(Te=null),g1=0,Ee=!1,25<=r)throw Error(c(301));if(r+=1,Lt=yt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=e3,i=n(e,l)}while(Ee);return i}function w6(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?y1(n):n,t=t.useState()[0],(yt!==null?yt.memoizedState:null)!==t&&(nt.flags|=1024),n}function ya(){var t=El!==0;return El=0,t}function pa(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function Sa(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}F0=0,Lt=yt=nt=null,Ee=!1,g1=El=0,Te=null}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?nt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Nt(){if(yt===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var n=Lt===null?nt.memoizedState:Lt.next;if(n!==null)Lt=n,yt=t;else{if(t===null)throw nt.alternate===null?Error(c(467)):Error(c(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Lt===null?nt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function y1(t){var n=g1;return g1+=1,Te===null&&(Te=[]),t=su(Te,t,n),n=nt,(Lt===null?n.memoizedState:Lt.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?n3:Na),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return y1(t);if(t.$$typeof===w)return Zt(t)}throw Error(c(438,String(t)))}function ba(t){var n=null,e=nt.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var l=nt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=Tl(),nt.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),l=0;l<t;l++)e[l]=p0;return n.index++,e}function W0(t,n){return typeof n=="function"?n(t):n}function _l(t){var n=Nt();return Ma(n,yt,t)}function Ma(t,n,e){var l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var r=t.baseQueue,i=l.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}n.baseQueue=r=i,l.pending=null}if(i=t.baseState,r===null)t.memoizedState=i;else{n=r.next;var o=s=null,g=null,T=n,z=!1;do{var N=T.lane&-536870913;if(N!==T.lane?(it&N)===N:(F0&N)===N){var A=T.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),N===ye&&(z=!0);else if((F0&A)===A){T=T.next,A===ye&&(z=!0);continue}else N={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(o=g=N,s=i):g=g.next=N,nt.lanes|=A,Mn|=A;N=T.action,Jn&&e(i,N),i=T.hasEagerState?T.eagerState:e(i,N)}else A={lane:N,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(o=g=A,s=i):g=g.next=A,nt.lanes|=N,Mn|=N;T=T.next}while(T!==null&&T!==n);if(g===null?s=i:g.next=o,!c0(i,t.memoizedState)&&(Ht=!0,z&&(e=pe,e!==null)))throw e;t.memoizedState=i,t.baseState=s,t.baseQueue=g,l.lastRenderedState=i}return r===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ea(t){var n=Nt(),e=n.queue;if(e===null)throw Error(c(311));e.lastRenderedReducer=t;var l=e.dispatch,r=e.pending,i=n.memoizedState;if(r!==null){e.pending=null;var s=r=r.next;do i=t(i,s.action),s=s.next;while(s!==r);c0(i,n.memoizedState)||(Ht=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,l]}function Mu(t,n,e){var l=nt,r=Nt(),i=ft;if(i){if(e===void 0)throw Error(c(407));e=e()}else e=n();var s=!c0((yt||r).memoizedState,e);if(s&&(r.memoizedState=e,Ht=!0),r=r.queue,_a(Au.bind(null,l,r,t),[t]),r.getSnapshot!==n||s||Lt!==null&&Lt.memoizedState.tag&1){if(l.flags|=2048,Ae(9,{destroy:void 0},Tu.bind(null,l,r,e,n),null),Mt===null)throw Error(c(349));i||(F0&127)!==0||Eu(l,n,e)}return e}function Eu(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=nt.updateQueue,n===null?(n=Tl(),nt.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function Tu(t,n,e,l){n.value=e,n.getSnapshot=l,_u(n)&&zu(t)}function Au(t,n,e){return e(function(){_u(n)&&zu(t)})}function _u(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!c0(t,e)}catch{return!0}}function zu(t){var n=qn(t,2);n!==null&&r0(n,t,2)}function Ta(t){var n=kt();if(typeof t=="function"){var e=t;if(t=e(),Jn){un(!0);try{e()}finally{un(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:t},n}function Cu(t,n,e,l){return t.baseState=e,Ma(t,yt,typeof l=="function"?l:W0)}function Y6(t,n,e,l,r){if(Ol(t))throw Error(c(485));if(t=n.action,t!==null){var i={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};C.T!==null?e(!0):i.isTransition=!1,l(i),e=n.pending,e===null?(i.next=n.pending=i,Ou(n,i)):(i.next=e.next,n.pending=e.next=i)}}function Ou(t,n){var e=n.action,l=n.payload,r=t.state;if(n.isTransition){var i=C.T,s={};C.T=s;try{var o=e(r,l),g=C.S;g!==null&&g(s,o),Ru(t,n,o)}catch(T){Aa(t,n,T)}finally{i!==null&&s.types!==null&&(i.types=s.types),C.T=i}}else try{i=e(r,l),Ru(t,n,i)}catch(T){Aa(t,n,T)}}function Ru(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){Du(t,n,l)},function(l){return Aa(t,n,l)}):Du(t,n,e)}function Du(t,n,e){n.status="fulfilled",n.value=e,Nu(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,Ou(t,e)))}function Aa(t,n,e){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=e,Nu(n),n=n.next;while(n!==l)}t.action=null}function Nu(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xu(t,n){return n}function Uu(t,n){if(ft){var e=Mt.formState;if(e!==null){t:{var l=nt;if(ft){if(Et){n:{for(var r=Et,i=_0;r.nodeType!==8;){if(!i){r=null;break n}if(r=C0(r.nextSibling),r===null){r=null;break n}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Et=C0(r.nextSibling),l=r.data==="F!";break t}}on(l)}l=!1}l&&(n=e[0])}}return e=kt(),e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:n},e.queue=l,e=Iu.bind(null,nt,l),l.dispatch=e,l=Ta(!1),i=Da.bind(null,nt,!1,l.queue),l=kt(),r={state:n,dispatch:null,action:t,pending:null},l.queue=r,e=Y6.bind(null,nt,r,i,e),r.dispatch=e,l.memoizedState=t,[n,e,!1]}function Bu(t){var n=Nt();return Lu(n,yt,t)}function Lu(t,n,e){if(n=Ma(t,n,xu)[0],t=_l(W0)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=y1(n)}catch(s){throw s===Se?ml:s}else l=n;n=Nt();var r=n.queue,i=r.dispatch;return e!==n.memoizedState&&(nt.flags|=2048,Ae(9,{destroy:void 0},V6.bind(null,r,e),null)),[l,i,t]}function V6(t,n){t.action=n}function Hu(t){var n=Nt(),e=yt;if(e!==null)return Lu(n,e,t);Nt(),n=n.memoizedState,e=Nt();var l=e.queue.dispatch;return e.memoizedState=t,[n,l,!1]}function Ae(t,n,e,l){return t={tag:t,create:e,deps:l,inst:n,next:null},n=nt.updateQueue,n===null&&(n=Tl(),nt.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(l=e.next,e.next=t,t.next=l,n.lastEffect=t),t}function Gu(){return Nt().memoizedState}function zl(t,n,e,l){var r=kt();nt.flags|=t,r.memoizedState=Ae(1|n,{destroy:void 0},e,l===void 0?null:l)}function Cl(t,n,e,l){var r=Nt();l=l===void 0?null:l;var i=r.memoizedState.inst;yt!==null&&l!==null&&ma(l,yt.memoizedState.deps)?r.memoizedState=Ae(n,i,e,l):(nt.flags|=t,r.memoizedState=Ae(1|n,i,e,l))}function qu(t,n){zl(8390656,8,t,n)}function _a(t,n){Cl(2048,8,t,n)}function X6(t){nt.flags|=4;var n=nt.updateQueue;if(n===null)n=Tl(),nt.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function wu(t){var n=Nt().memoizedState;return X6({ref:n,nextImpl:t}),function(){if((vt&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function Yu(t,n){return Cl(4,2,t,n)}function Vu(t,n){return Cl(4,4,t,n)}function Xu(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ju(t,n,e){e=e!=null?e.concat([t]):null,Cl(4,4,Xu.bind(null,n,t),e)}function za(){}function Qu(t,n){var e=Nt();n=n===void 0?null:n;var l=e.memoizedState;return n!==null&&ma(n,l[1])?l[0]:(e.memoizedState=[t,n],t)}function Zu(t,n){var e=Nt();n=n===void 0?null:n;var l=e.memoizedState;if(n!==null&&ma(n,l[1]))return l[0];if(l=t(),Jn){un(!0);try{t()}finally{un(!1)}}return e.memoizedState=[l,n],l}function Ca(t,n,e){return e===void 0||(F0&1073741824)!==0&&(it&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=K3(),nt.lanes|=t,Mn|=t,e)}function Ku(t,n,e,l){return c0(e,n)?e:Me.current!==null?(t=Ca(t,e,l),c0(t,n)||(Ht=!0),t):(F0&42)===0||(F0&1073741824)!==0&&(it&261930)===0?(Ht=!0,t.memoizedState=e):(t=K3(),nt.lanes|=t,Mn|=t,n)}function Ju(t,n,e,l,r){var i=L.p;L.p=i!==0&&8>i?i:8;var s=C.T,o={};C.T=o,Da(t,!1,n,e);try{var g=r(),T=C.S;if(T!==null&&T(o,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var z=G6(g,l);p1(t,n,z,m0(t))}else p1(t,n,l,m0(t))}catch(N){p1(t,n,{then:function(){},status:"rejected",reason:N},m0())}finally{L.p=i,s!==null&&o.types!==null&&(s.types=o.types),C.T=s}}function j6(){}function Oa(t,n,e,l){if(t.tag!==5)throw Error(c(476));var r=Fu(t).queue;Ju(t,r,n,$,e===null?j6:function(){return Wu(t),e(l)})}function Fu(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:$},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Wu(t){var n=Fu(t);n.next===null&&(n=t.alternate.memoizedState),p1(t,n.next.queue,{},m0())}function Ra(){return Zt(L1)}function $u(){return Nt().memoizedState}function ku(){return Nt().memoizedState}function Q6(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=m0();t=mn(e);var l=gn(n,t,e);l!==null&&(r0(l,n,e),h1(l,n,e)),n={cache:ra()},t.payload=n;return}n=n.return}}function Z6(t,n,e){var l=m0();e={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Ol(t)?Pu(n,e):(e=Jr(t,n,e,l),e!==null&&(r0(e,t,l),t3(e,n,l)))}function Iu(t,n,e){var l=m0();p1(t,n,e,l)}function p1(t,n,e,l){var r={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))Pu(n,r);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,o=i(s,e);if(r.hasEagerState=!0,r.eagerState=o,c0(o,s))return fl(t,n,r,0),Mt===null&&ul(),!1}catch{}finally{}if(e=Jr(t,n,r,l),e!==null)return r0(e,t,l),t3(e,n,l),!0}return!1}function Da(t,n,e,l){if(l={lane:2,revertLane:f2(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(c(479))}else n=Jr(t,e,l,2),n!==null&&r0(n,t,2)}function Ol(t){var n=t.alternate;return t===nt||n!==null&&n===nt}function Pu(t,n){Ee=Ml=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function t3(t,n,e){if((e&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,ai(t,e)}}var S1={readContext:Zt,use:Al,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct};S1.useEffectEvent=Ct;var n3={readContext:Zt,use:Al,useCallback:function(t,n){return kt().memoizedState=[t,n===void 0?null:n],t},useContext:Zt,useEffect:qu,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,zl(4194308,4,Xu.bind(null,n,t),e)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var e=kt();n=n===void 0?null:n;var l=t();if(Jn){un(!0);try{t()}finally{un(!1)}}return e.memoizedState=[l,n],l},useReducer:function(t,n,e){var l=kt();if(e!==void 0){var r=e(n);if(Jn){un(!0);try{e(n)}finally{un(!1)}}}else r=n;return l.memoizedState=l.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=Z6.bind(null,nt,t),[l.memoizedState,t]},useRef:function(t){var n=kt();return t={current:t},n.memoizedState=t},useState:function(t){t=Ta(t);var n=t.queue,e=Iu.bind(null,nt,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:za,useDeferredValue:function(t,n){var e=kt();return Ca(e,t,n)},useTransition:function(){var t=Ta(!1);return t=Ju.bind(null,nt,t.queue,!0,!1),kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var l=nt,r=kt();if(ft){if(e===void 0)throw Error(c(407));e=e()}else{if(e=n(),Mt===null)throw Error(c(349));(it&127)!==0||Eu(l,n,e)}r.memoizedState=e;var i={value:e,getSnapshot:n};return r.queue=i,qu(Au.bind(null,l,i,t),[t]),l.flags|=2048,Ae(9,{destroy:void 0},Tu.bind(null,l,i,e,n),null),e},useId:function(){var t=kt(),n=Mt.identifierPrefix;if(ft){var e=G0,l=H0;e=(l&~(1<<32-f0(l)-1)).toString(32)+e,n="_"+n+"R_"+e,e=El++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=q6++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ra,useFormState:Uu,useActionState:Uu,useOptimistic:function(t){var n=kt();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=Da.bind(null,nt,!0,e),e.dispatch=n,[t,n]},useMemoCache:ba,useCacheRefresh:function(){return kt().memoizedState=Q6.bind(null,nt)},useEffectEvent:function(t){var n=kt(),e={impl:t};return n.memoizedState=e,function(){if((vt&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}},Na={readContext:Zt,use:Al,useCallback:Qu,useContext:Zt,useEffect:_a,useImperativeHandle:ju,useInsertionEffect:Yu,useLayoutEffect:Vu,useMemo:Zu,useReducer:_l,useRef:Gu,useState:function(){return _l(W0)},useDebugValue:za,useDeferredValue:function(t,n){var e=Nt();return Ku(e,yt.memoizedState,t,n)},useTransition:function(){var t=_l(W0)[0],n=Nt().memoizedState;return[typeof t=="boolean"?t:y1(t),n]},useSyncExternalStore:Mu,useId:$u,useHostTransitionStatus:Ra,useFormState:Bu,useActionState:Bu,useOptimistic:function(t,n){var e=Nt();return Cu(e,yt,t,n)},useMemoCache:ba,useCacheRefresh:ku};Na.useEffectEvent=wu;var e3={readContext:Zt,use:Al,useCallback:Qu,useContext:Zt,useEffect:_a,useImperativeHandle:ju,useInsertionEffect:Yu,useLayoutEffect:Vu,useMemo:Zu,useReducer:Ea,useRef:Gu,useState:function(){return Ea(W0)},useDebugValue:za,useDeferredValue:function(t,n){var e=Nt();return yt===null?Ca(e,t,n):Ku(e,yt.memoizedState,t,n)},useTransition:function(){var t=Ea(W0)[0],n=Nt().memoizedState;return[typeof t=="boolean"?t:y1(t),n]},useSyncExternalStore:Mu,useId:$u,useHostTransitionStatus:Ra,useFormState:Hu,useActionState:Hu,useOptimistic:function(t,n){var e=Nt();return yt!==null?Cu(e,yt,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:ba,useCacheRefresh:ku};e3.useEffectEvent=wu;function xa(t,n,e,l){n=t.memoizedState,e=e(l,n),e=e==null?n:D({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Ua={enqueueSetState:function(t,n,e){t=t._reactInternals;var l=m0(),r=mn(l);r.payload=n,e!=null&&(r.callback=e),n=gn(t,r,l),n!==null&&(r0(n,t,l),h1(n,t,l))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var l=m0(),r=mn(l);r.tag=1,r.payload=n,e!=null&&(r.callback=e),n=gn(t,r,l),n!==null&&(r0(n,t,l),h1(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=m0(),l=mn(e);l.tag=2,n!=null&&(l.callback=n),n=gn(t,l,e),n!==null&&(r0(n,t,e),h1(n,t,e))}};function l3(t,n,e,l,r,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,s):n.prototype&&n.prototype.isPureReactComponent?!a1(e,l)||!a1(r,i):!0}function r3(t,n,e,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,l),n.state!==t&&Ua.enqueueReplaceState(n,n.state,null)}function Fn(t,n){var e=n;if("ref"in n){e={};for(var l in n)l!=="ref"&&(e[l]=n[l])}if(t=t.defaultProps){e===n&&(e=D({},e));for(var r in t)e[r]===void 0&&(e[r]=t[r])}return e}function a3(t){il(t)}function i3(t){console.error(t)}function u3(t){il(t)}function Rl(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function f3(t,n,e){try{var l=t.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ba(t,n,e){return e=mn(e),e.tag=3,e.payload={element:null},e.callback=function(){Rl(t,n)},e}function c3(t){return t=mn(t),t.tag=3,t}function s3(t,n,e,l){var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=l.value;t.payload=function(){return r(i)},t.callback=function(){f3(n,e,l)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){f3(n,e,l),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function K6(t,n,e,l,r){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=e.alternate,n!==null&&ge(n,e,r,!0),e=v0.current,e!==null){switch(e.tag){case 31:case 13:return z0===null?Vl():e.alternate===null&&Ot===0&&(Ot=3),e.flags&=-257,e.flags|=65536,e.lanes=r,l===gl?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([l]):n.add(l),a2(t,l,r)),!1;case 22:return e.flags|=65536,l===gl?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([l]):e.add(l)),a2(t,l,r)),!1}throw Error(c(435,e.tag))}return a2(t,l,r),Vl(),!1}if(ft)return n=v0.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==Pr&&(t=Error(c(422),{cause:l}),f1(E0(t,e)))):(l!==Pr&&(n=Error(c(423),{cause:l}),f1(E0(n,e))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,l=E0(l,e),r=Ba(t.stateNode,l,r),sa(t,r),Ot!==4&&(Ot=2)),!1;var i=Error(c(520),{cause:l});if(i=E0(i,e),C1===null?C1=[i]:C1.push(i),Ot!==4&&(Ot=2),n===null)return!0;l=E0(l,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=r&-r,e.lanes|=t,t=Ba(e.stateNode,l,t),sa(e,t),!1;case 1:if(n=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(En===null||!En.has(i))))return e.flags|=65536,r&=-r,e.lanes|=r,r=c3(r),s3(r,t,e,l),sa(e,r),!1}e=e.return}while(e!==null);return!1}var La=Error(c(461)),Ht=!1;function Kt(t,n,e,l){n.child=t===null?du(n,null,e,l):Kn(n,t.child,e,l)}function v3(t,n,e,l,r){e=e.render;var i=n.ref;if("ref"in l){var s={};for(var o in l)o!=="ref"&&(s[o]=l[o])}else s=l;return Xn(n),l=ga(t,n,e,s,i,r),o=ya(),t!==null&&!Ht?(pa(t,n,r),$0(t,n,r)):(ft&&o&&kr(n),n.flags|=1,Kt(t,n,l,r),n.child)}function o3(t,n,e,l,r){if(t===null){var i=e.type;return typeof i=="function"&&!Fr(i)&&i.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=i,h3(t,n,i,l,r)):(t=sl(e.type,null,l,n,n.mode,r),t.ref=n.ref,t.return=n,n.child=t)}if(i=t.child,!ja(t,r)){var s=i.memoizedProps;if(e=e.compare,e=e!==null?e:a1,e(s,l)&&t.ref===n.ref)return $0(t,n,r)}return n.flags|=1,t=Q0(i,l),t.ref=n.ref,t.return=n,n.child=t}function h3(t,n,e,l,r){if(t!==null){var i=t.memoizedProps;if(a1(i,l)&&t.ref===n.ref)if(Ht=!1,n.pendingProps=l=i,ja(t,r))(t.flags&131072)!==0&&(Ht=!0);else return n.lanes=t.lanes,$0(t,n,r)}return Ha(t,n,e,l,r)}function d3(t,n,e,l){var r=l.children,i=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(l=n.child=t.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~i}else l=0,n.child=null;return m3(t,n,i,e,l)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,i!==null?i.cachePool:null),i!==null?yu(n,i):oa(),pu(n);else return l=n.lanes=536870912,m3(t,n,i!==null?i.baseLanes|e:e,e,l)}else i!==null?(dl(n,i.cachePool),yu(n,i),pn(),n.memoizedState=null):(t!==null&&dl(n,null),oa(),pn());return Kt(t,n,r,e),n.child}function b1(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function m3(t,n,e,l,r){var i=ia();return i=i===null?null:{parent:Bt._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},t!==null&&dl(n,null),oa(),pu(n),t!==null&&ge(t,n,l,!0),n.childLanes=r,null}function Dl(t,n){return n=xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function g3(t,n,e){return Kn(n,t.child,null,e),t=Dl(n,n.pendingProps),t.flags|=2,o0(n),n.memoizedState=null,t}function J6(t,n,e){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ft){if(l.mode==="hidden")return t=Dl(n,l),n.lanes=536870912,b1(null,t);if(da(n),(t=Et)?(t=O5(t,_0),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:sn!==null?{id:H0,overflow:G0}:null,retryLane:536870912,hydrationErrors:null},e=Pi(t),e.return=n,n.child=e,Qt=n,Et=null)):t=null,t===null)throw on(n);return n.lanes=536870912,null}return Dl(n,l)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(da(n),r)if(n.flags&256)n.flags&=-257,n=g3(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(c(558));else if(Ht||ge(t,n,e,!1),r=(e&t.childLanes)!==0,Ht||r){if(l=Mt,l!==null&&(s=ii(l,e),s!==0&&s!==i.retryLane))throw i.retryLane=s,qn(t,s),r0(l,t,s),La;Vl(),n=g3(t,n,e)}else t=i.treeContext,Et=C0(s.nextSibling),Qt=n,ft=!0,vn=null,_0=!1,t!==null&&eu(n,t),n=Dl(n,l),n.flags|=4096;return n}return t=Q0(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(c(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function Ha(t,n,e,l,r){return Xn(n),e=ga(t,n,e,l,void 0,r),l=ya(),t!==null&&!Ht?(pa(t,n,r),$0(t,n,r)):(ft&&l&&kr(n),n.flags|=1,Kt(t,n,e,r),n.child)}function y3(t,n,e,l,r,i){return Xn(n),n.updateQueue=null,e=bu(n,l,e,r),Su(t),l=ya(),t!==null&&!Ht?(pa(t,n,i),$0(t,n,i)):(ft&&l&&kr(n),n.flags|=1,Kt(t,n,e,i),n.child)}function p3(t,n,e,l,r){if(Xn(n),n.stateNode===null){var i=oe,s=e.contextType;typeof s=="object"&&s!==null&&(i=Zt(s)),i=new e(l,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ua,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=l,i.state=n.memoizedState,i.refs={},fa(n),s=e.contextType,i.context=typeof s=="object"&&s!==null?Zt(s):oe,i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xa(n,e,s,l),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Ua.enqueueReplaceState(i,i.state,null),m1(n,l,i,r),d1(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){i=n.stateNode;var o=n.memoizedProps,g=Fn(e,o);i.props=g;var T=i.context,z=e.contextType;s=oe,typeof z=="object"&&z!==null&&(s=Zt(z));var N=e.getDerivedStateFromProps;z=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=n.pendingProps!==o,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||T!==s)&&r3(n,i,l,s),dn=!1;var A=n.memoizedState;i.state=A,m1(n,l,i,r),d1(),T=n.memoizedState,o||A!==T||dn?(typeof N=="function"&&(xa(n,e,N,l),T=n.memoizedState),(g=dn||l3(n,e,g,l,A,T,s))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=T),i.props=l,i.state=T,i.context=s,l=g):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{i=n.stateNode,ca(t,n),s=n.memoizedProps,z=Fn(e,s),i.props=z,N=n.pendingProps,A=i.context,T=e.contextType,g=oe,typeof T=="object"&&T!==null&&(g=Zt(T)),o=e.getDerivedStateFromProps,(T=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==N||A!==g)&&r3(n,i,l,g),dn=!1,A=n.memoizedState,i.state=A,m1(n,l,i,r),d1();var _=n.memoizedState;s!==N||A!==_||dn||t!==null&&t.dependencies!==null&&ol(t.dependencies)?(typeof o=="function"&&(xa(n,e,o,l),_=n.memoizedState),(z=dn||l3(n,e,z,l,A,_,g)||t!==null&&t.dependencies!==null&&ol(t.dependencies))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,_,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,_,g)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=_),i.props=l,i.state=_,i.context=g,l=z):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),l=!1)}return i=l,Nl(t,n),l=(n.flags&128)!==0,i||l?(i=n.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,t!==null&&l?(n.child=Kn(n,t.child,null,r),n.child=Kn(n,null,e,r)):Kt(t,n,e,r),n.memoizedState=i.state,t=n.child):t=$0(t,n,r),t}function S3(t,n,e,l){return Yn(),n.flags|=256,Kt(t,n,e,l),n.child}var Ga={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qa(t){return{baseLanes:t,cachePool:fu()}}function wa(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=d0),t}function b3(t,n,e){var l=n.pendingProps,r=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(Dt.current&2)!==0),s&&(r=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,t===null){if(ft){if(r?yn(n):pn(),(t=Et)?(t=O5(t,_0),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:sn!==null?{id:H0,overflow:G0}:null,retryLane:536870912,hydrationErrors:null},e=Pi(t),e.return=n,n.child=e,Qt=n,Et=null)):t=null,t===null)throw on(n);return M2(t)?n.lanes=32:n.lanes=536870912,null}var o=l.children;return l=l.fallback,r?(pn(),r=n.mode,o=xl({mode:"hidden",children:o},r),l=wn(l,r,e,null),o.return=n,l.return=n,o.sibling=l,n.child=o,l=n.child,l.memoizedState=qa(e),l.childLanes=wa(t,s,e),n.memoizedState=Ga,b1(null,l)):(yn(n),Ya(n,o))}var g=t.memoizedState;if(g!==null&&(o=g.dehydrated,o!==null)){if(i)n.flags&256?(yn(n),n.flags&=-257,n=Va(t,n,e)):n.memoizedState!==null?(pn(),n.child=t.child,n.flags|=128,n=null):(pn(),o=l.fallback,r=n.mode,l=xl({mode:"visible",children:l.children},r),o=wn(o,r,e,null),o.flags|=2,l.return=n,o.return=n,l.sibling=o,n.child=l,Kn(n,t.child,null,e),l=n.child,l.memoizedState=qa(e),l.childLanes=wa(t,s,e),n.memoizedState=Ga,n=b1(null,l));else if(yn(n),M2(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var T=s.dgst;s=T,l=Error(c(419)),l.stack="",l.digest=s,f1({value:l,source:null,stack:null}),n=Va(t,n,e)}else if(Ht||ge(t,n,e,!1),s=(e&t.childLanes)!==0,Ht||s){if(s=Mt,s!==null&&(l=ii(s,e),l!==0&&l!==g.retryLane))throw g.retryLane=l,qn(t,l),r0(s,t,l),La;b2(o)||Vl(),n=Va(t,n,e)}else b2(o)?(n.flags|=192,n.child=t.child,n=null):(t=g.treeContext,Et=C0(o.nextSibling),Qt=n,ft=!0,vn=null,_0=!1,t!==null&&eu(n,t),n=Ya(n,l.children),n.flags|=4096);return n}return r?(pn(),o=l.fallback,r=n.mode,g=t.child,T=g.sibling,l=Q0(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,T!==null?o=Q0(T,o):(o=wn(o,r,e,null),o.flags|=2),o.return=n,l.return=n,l.sibling=o,n.child=l,b1(null,l),l=n.child,o=t.child.memoizedState,o===null?o=qa(e):(r=o.cachePool,r!==null?(g=Bt._currentValue,r=r.parent!==g?{parent:g,pool:g}:r):r=fu(),o={baseLanes:o.baseLanes|e,cachePool:r}),l.memoizedState=o,l.childLanes=wa(t,s,e),n.memoizedState=Ga,b1(t.child,l)):(yn(n),e=t.child,t=e.sibling,e=Q0(e,{mode:"visible",children:l.children}),e.return=n,e.sibling=null,t!==null&&(s=n.deletions,s===null?(n.deletions=[t],n.flags|=16):s.push(t)),n.child=e,n.memoizedState=null,e)}function Ya(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=s0(22,t,null,n),t.lanes=0,t}function Va(t,n,e){return Kn(n,t.child,null,e),t=Ya(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function M3(t,n,e){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),ea(t.return,n,e)}function Xa(t,n,e,l,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:r,treeForkCount:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=e,s.tailMode=r,s.treeForkCount=i)}function E3(t,n,e){var l=n.pendingProps,r=l.revealOrder,i=l.tail;l=l.children;var s=Dt.current,o=(s&2)!==0;if(o?(s=s&1|2,n.flags|=128):s&=1,H(Dt,s),Kt(t,n,l,e),l=ft?u1:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M3(t,e,n);else if(t.tag===19)M3(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(e=n.child,r=null;e!==null;)t=e.alternate,t!==null&&bl(t)===null&&(r=e),e=e.sibling;e=r,e===null?(r=n.child,n.child=null):(r=e.sibling,e.sibling=null),Xa(n,!1,r,e,i,l);break;case"backwards":case"unstable_legacy-backwards":for(e=null,r=n.child,n.child=null;r!==null;){if(t=r.alternate,t!==null&&bl(t)===null){n.child=r;break}t=r.sibling,r.sibling=e,e=r,r=t}Xa(n,!0,e,null,i,l);break;case"together":Xa(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function $0(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),Mn|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(ge(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(c(153));if(n.child!==null){for(t=n.child,e=Q0(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=Q0(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function ja(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ol(t)))}function F6(t,n,e){switch(n.tag){case 3:$t(n,n.stateNode.containerInfo),hn(n,Bt,t.memoizedState.cache),Yn();break;case 27:case 5:Ke(n);break;case 4:$t(n,n.stateNode.containerInfo);break;case 10:hn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,da(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(yn(n),n.flags|=128,null):(e&n.child.childLanes)!==0?b3(t,n,e):(yn(n),t=$0(t,n,e),t!==null?t.sibling:null);yn(n);break;case 19:var r=(t.flags&128)!==0;if(l=(e&n.childLanes)!==0,l||(ge(t,n,e,!1),l=(e&n.childLanes)!==0),r){if(l)return E3(t,n,e);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),H(Dt,Dt.current),l)break;return null;case 22:return n.lanes=0,d3(t,n,e,n.pendingProps);case 24:hn(n,Bt,t.memoizedState.cache)}return $0(t,n,e)}function T3(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ht=!0;else{if(!ja(t,e)&&(n.flags&128)===0)return Ht=!1,F6(t,n,e);Ht=(t.flags&131072)!==0}else Ht=!1,ft&&(n.flags&1048576)!==0&&nu(n,u1,n.index);switch(n.lanes=0,n.tag){case 16:t:{var l=n.pendingProps;if(t=Qn(n.elementType),n.type=t,typeof t=="function")Fr(t)?(l=Fn(t,l),n.tag=1,n=p3(null,n,t,l,e)):(n.tag=0,n=Ha(null,n,t,l,e));else{if(t!=null){var r=t.$$typeof;if(r===Q){n.tag=11,n=v3(null,n,t,l,e);break t}else if(r===I){n.tag=14,n=o3(null,n,t,l,e);break t}}throw n=ht(t)||t,Error(c(306,n,""))}}return n;case 0:return Ha(t,n,n.type,n.pendingProps,e);case 1:return l=n.type,r=Fn(l,n.pendingProps),p3(t,n,l,r,e);case 3:t:{if($t(n,n.stateNode.containerInfo),t===null)throw Error(c(387));l=n.pendingProps;var i=n.memoizedState;r=i.element,ca(t,n),m1(n,l,null,e);var s=n.memoizedState;if(l=s.cache,hn(n,Bt,l),l!==i.cache&&la(n,[Bt],e,!0),d1(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=S3(t,n,l,e);break t}else if(l!==r){r=E0(Error(c(424)),n),f1(r),n=S3(t,n,l,e);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=C0(t.firstChild),Qt=n,ft=!0,vn=null,_0=!0,e=du(n,null,l,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Yn(),l===r){n=$0(t,n,e);break t}Kt(t,n,l,e)}n=n.child}return n;case 26:return Nl(t,n),t===null?(e=B5(n.type,null,n.pendingProps,null))?n.memoizedState=e:ft||(e=n.type,t=n.pendingProps,l=Fl(lt.current).createElement(e),l[jt]=n,l[It]=t,Jt(l,e,t),Vt(l),n.stateNode=l):n.memoizedState=B5(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&ft&&(l=n.stateNode=N5(n.type,n.pendingProps,lt.current),Qt=n,_0=!0,r=Et,zn(n.type)?(E2=r,Et=C0(l.firstChild)):Et=r),Kt(t,n,n.pendingProps.children,e),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ft&&((r=l=Et)&&(l=A8(l,n.type,n.pendingProps,_0),l!==null?(n.stateNode=l,Qt=n,Et=C0(l.firstChild),_0=!1,r=!0):r=!1),r||on(n)),Ke(n),r=n.type,i=n.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,y2(r,i)?l=null:s!==null&&y2(r,s)&&(n.flags|=32),n.memoizedState!==null&&(r=ga(t,n,w6,null,null,e),L1._currentValue=r),Nl(t,n),Kt(t,n,l,e),n.child;case 6:return t===null&&ft&&((t=e=Et)&&(e=_8(e,n.pendingProps,_0),e!==null?(n.stateNode=e,Qt=n,Et=null,t=!0):t=!1),t||on(n)),null;case 13:return b3(t,n,e);case 4:return $t(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Kn(n,null,l,e):Kt(t,n,l,e),n.child;case 11:return v3(t,n,n.type,n.pendingProps,e);case 7:return Kt(t,n,n.pendingProps,e),n.child;case 8:return Kt(t,n,n.pendingProps.children,e),n.child;case 12:return Kt(t,n,n.pendingProps.children,e),n.child;case 10:return l=n.pendingProps,hn(n,n.type,l.value),Kt(t,n,l.children,e),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Xn(n),r=Zt(r),l=l(r),n.flags|=1,Kt(t,n,l,e),n.child;case 14:return o3(t,n,n.type,n.pendingProps,e);case 15:return h3(t,n,n.type,n.pendingProps,e);case 19:return E3(t,n,e);case 31:return J6(t,n,e);case 22:return d3(t,n,e,n.pendingProps);case 24:return Xn(n),l=Zt(Bt),t===null?(r=ia(),r===null&&(r=Mt,i=ra(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=e),r=i),n.memoizedState={parent:l,cache:r},fa(n),hn(n,Bt,r)):((t.lanes&e)!==0&&(ca(t,n),m1(n,null,null,e),d1()),r=t.memoizedState,i=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),hn(n,Bt,l)):(l=i.cache,hn(n,Bt,l),l!==r.cache&&la(n,[Bt],e,!0))),Kt(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function k0(t){t.flags|=4}function Qa(t,n,e,l,r){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if($3())t.flags|=8192;else throw Zn=gl,ua}else t.flags&=-16777217}function A3(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w5(n))if($3())t.flags|=8192;else throw Zn=gl,ua}function Ul(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?li():536870912,t.lanes|=n,Oe|=n)}function M1(t,n){if(!ft)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Tt(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,l=0;if(n)for(var r=t.child;r!==null;)e|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)e|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=l,t.childLanes=e,n}function W6(t,n,e){var l=n.pendingProps;switch(Ir(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(n),null;case 1:return Tt(n),null;case 3:return e=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),J0(Bt),Rt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(me(n)?k0(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ta())),Tt(n),null;case 26:var r=n.type,i=n.memoizedState;return t===null?(k0(n),i!==null?(Tt(n),A3(n,i)):(Tt(n),Qa(n,r,null,l,e))):i?i!==t.memoizedState?(k0(n),Tt(n),A3(n,i)):(Tt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&k0(n),Tt(n),Qa(n,r,t,l,e)),null;case 27:if(Q1(n),e=lt.current,r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&k0(n);else{if(!l){if(n.stateNode===null)throw Error(c(166));return Tt(n),null}t=V.current,me(n)?lu(n):(t=N5(r,l,e),n.stateNode=t,k0(n))}return Tt(n),null;case 5:if(Q1(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&k0(n);else{if(!l){if(n.stateNode===null)throw Error(c(166));return Tt(n),null}if(i=V.current,me(n))lu(n);else{var s=Fl(lt.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(r,{is:l.is}):s.createElement(r)}}i[jt]=n,i[It]=l;t:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break t;for(;s.sibling===null;){if(s.return===null||s.return===n)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=i;t:switch(Jt(i,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&k0(n)}}return Tt(n),Qa(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&k0(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(c(166));if(t=lt.current,me(n)){if(t=n.stateNode,e=n.memoizedProps,l=null,r=Qt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}t[jt]=n,t=!!(t.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||b5(t.nodeValue,e)),t||on(n,!0)}else t=Fl(t).createTextNode(l),t[jt]=n,n.stateNode=t}return Tt(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(l=me(n),e!==null){if(t===null){if(!l)throw Error(c(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(557));t[jt]=n}else Yn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Tt(n),t=!1}else e=ta(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(o0(n),n):(o0(n),null);if((n.flags&128)!==0)throw Error(c(558))}return Tt(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=me(n),l!==null&&l.dehydrated!==null){if(t===null){if(!r)throw Error(c(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[jt]=n}else Yn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Tt(n),r=!1}else r=ta(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(o0(n),n):(o0(n),null)}return o0(n),(n.flags&128)!==0?(n.lanes=e,n):(e=l!==null,t=t!==null&&t.memoizedState!==null,e&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==r&&(l.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),Ul(n,n.updateQueue),Tt(n),null);case 4:return Rt(),t===null&&o2(n.stateNode.containerInfo),Tt(n),null;case 10:return J0(n.type),Tt(n),null;case 19:if(U(Dt),l=n.memoizedState,l===null)return Tt(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)M1(l,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(i=bl(t),i!==null){for(n.flags|=128,M1(l,!1),t=i.updateQueue,n.updateQueue=t,Ul(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)Ii(e,t),e=e.sibling;return H(Dt,Dt.current&1|2),ft&&Z0(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&i0()>ql&&(n.flags|=128,r=!0,M1(l,!1),n.lanes=4194304)}else{if(!r)if(t=bl(i),t!==null){if(n.flags|=128,r=!0,t=t.updateQueue,n.updateQueue=t,Ul(n,t),M1(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ft)return Tt(n),null}else 2*i0()-l.renderingStartTime>ql&&e!==536870912&&(n.flags|=128,r=!0,M1(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=i0(),t.sibling=null,e=Dt.current,H(Dt,r?e&1|2:e&1),ft&&Z0(n,l.treeForkCount),t):(Tt(n),null);case 22:case 23:return o0(n),ha(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(e&536870912)!==0&&(n.flags&128)===0&&(Tt(n),n.subtreeFlags&6&&(n.flags|=8192)):Tt(n),e=n.updateQueue,e!==null&&Ul(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==e&&(n.flags|=2048),t!==null&&U(jn),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),J0(Bt),Tt(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function $6(t,n){switch(Ir(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return J0(Bt),Rt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Q1(n),null;case 31:if(n.memoizedState!==null){if(o0(n),n.alternate===null)throw Error(c(340));Yn()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(o0(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Yn()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return U(Dt),null;case 4:return Rt(),null;case 10:return J0(n.type),null;case 22:case 23:return o0(n),ha(),t!==null&&U(jn),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return J0(Bt),null;case 25:return null;default:return null}}function _3(t,n){switch(Ir(n),n.tag){case 3:J0(Bt),Rt();break;case 26:case 27:case 5:Q1(n);break;case 4:Rt();break;case 31:n.memoizedState!==null&&o0(n);break;case 13:o0(n);break;case 19:U(Dt);break;case 10:J0(n.type);break;case 22:case 23:o0(n),ha(),t!==null&&U(jn);break;case 24:J0(Bt)}}function E1(t,n){try{var e=n.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var r=l.next;e=r;do{if((e.tag&t)===t){l=void 0;var i=e.create,s=e.inst;l=i(),s.destroy=l}e=e.next}while(e!==r)}}catch(o){mt(n,n.return,o)}}function Sn(t,n,e){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var i=r.next;l=i;do{if((l.tag&t)===t){var s=l.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,r=n;var g=e,T=o;try{T()}catch(z){mt(r,g,z)}}}l=l.next}while(l!==i)}}catch(z){mt(n,n.return,z)}}function z3(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{gu(n,e)}catch(l){mt(t,t.return,l)}}}function C3(t,n,e){e.props=Fn(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(l){mt(t,n,l)}}function T1(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(r){mt(t,n,r)}}function q0(t,n){var e=t.ref,l=t.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(r){mt(t,n,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(r){mt(t,n,r)}else e.current=null}function O3(t){var n=t.type,e=t.memoizedProps,l=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break t;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(r){mt(t,t.return,r)}}function Za(t,n,e){try{var l=t.stateNode;p8(l,t.type,e,n),l[It]=n}catch(r){mt(t,t.return,r)}}function R3(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&zn(t.type)||t.tag===4}function Ka(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||R3(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&zn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ja(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=X0));else if(l!==4&&(l===27&&zn(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(Ja(t,n,e),t=t.sibling;t!==null;)Ja(t,n,e),t=t.sibling}function Bl(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(l!==4&&(l===27&&zn(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(Bl(t,n,e),t=t.sibling;t!==null;)Bl(t,n,e),t=t.sibling}function D3(t){var n=t.stateNode,e=t.memoizedProps;try{for(var l=t.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Jt(n,l,e),n[jt]=t,n[It]=e}catch(i){mt(t,t.return,i)}}var I0=!1,Gt=!1,Fa=!1,N3=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function k6(t,n){if(t=t.containerInfo,m2=nr,t=ji(t),Vr(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var r=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var s=0,o=-1,g=-1,T=0,z=0,N=t,A=null;n:for(;;){for(var _;N!==e||r!==0&&N.nodeType!==3||(o=s+r),N!==i||l!==0&&N.nodeType!==3||(g=s+l),N.nodeType===3&&(s+=N.nodeValue.length),(_=N.firstChild)!==null;)A=N,N=_;for(;;){if(N===t)break n;if(A===e&&++T===r&&(o=s),A===i&&++z===l&&(g=s),(_=N.nextSibling)!==null)break;N=A,A=N.parentNode}N=_}e=o===-1||g===-1?null:{start:o,end:g}}else e=null}e=e||{start:0,end:0}}else e=null;for(g2={focusedElem:t,selectionRange:e},nr=!1,Xt=n;Xt!==null;)if(n=Xt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Xt=t;else for(;Xt!==null;){switch(n=Xt,i=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)r=t[e],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=n,r=i.memoizedProps,i=i.memoizedState,l=e.stateNode;try{var Y=Fn(e.type,r);t=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(W){mt(e,e.return,W)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)S2(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":S2(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=n.sibling,t!==null){t.return=n.return,Xt=t;break}Xt=n.return}}function x3(t,n,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:tn(t,e),l&4&&E1(5,e);break;case 1:if(tn(t,e),l&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(s){mt(e,e.return,s)}else{var r=Fn(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(r,n,t.__reactInternalSnapshotBeforeUpdate)}catch(s){mt(e,e.return,s)}}l&64&&z3(e),l&512&&T1(e,e.return);break;case 3:if(tn(t,e),l&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{gu(t,n)}catch(s){mt(e,e.return,s)}}break;case 27:n===null&&l&4&&D3(e);case 26:case 5:tn(t,e),n===null&&l&4&&O3(e),l&512&&T1(e,e.return);break;case 12:tn(t,e);break;case 31:tn(t,e),l&4&&L3(t,e);break;case 13:tn(t,e),l&4&&H3(t,e),l&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=i8.bind(null,e),z8(t,e))));break;case 22:if(l=e.memoizedState!==null||I0,!l){n=n!==null&&n.memoizedState!==null||Gt,r=I0;var i=Gt;I0=l,(Gt=n)&&!i?nn(t,e,(e.subtreeFlags&8772)!==0):tn(t,e),I0=r,Gt=i}break;case 30:break;default:tn(t,e)}}function U3(t){var n=t.alternate;n!==null&&(t.alternate=null,U3(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ar(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var zt=null,t0=!1;function P0(t,n,e){for(e=e.child;e!==null;)B3(t,n,e),e=e.sibling}function B3(t,n,e){if(u0&&typeof u0.onCommitFiberUnmount=="function")try{u0.onCommitFiberUnmount(Je,e)}catch{}switch(e.tag){case 26:Gt||q0(e,n),P0(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Gt||q0(e,n);var l=zt,r=t0;zn(e.type)&&(zt=e.stateNode,t0=!1),P0(t,n,e),x1(e.stateNode),zt=l,t0=r;break;case 5:Gt||q0(e,n);case 6:if(l=zt,r=t0,zt=null,P0(t,n,e),zt=l,t0=r,zt!==null)if(t0)try{(zt.nodeType===9?zt.body:zt.nodeName==="HTML"?zt.ownerDocument.body:zt).removeChild(e.stateNode)}catch(i){mt(e,n,i)}else try{zt.removeChild(e.stateNode)}catch(i){mt(e,n,i)}break;case 18:zt!==null&&(t0?(t=zt,z5(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),He(t)):z5(zt,e.stateNode));break;case 4:l=zt,r=t0,zt=e.stateNode.containerInfo,t0=!0,P0(t,n,e),zt=l,t0=r;break;case 0:case 11:case 14:case 15:Sn(2,e,n),Gt||Sn(4,e,n),P0(t,n,e);break;case 1:Gt||(q0(e,n),l=e.stateNode,typeof l.componentWillUnmount=="function"&&C3(e,n,l)),P0(t,n,e);break;case 21:P0(t,n,e);break;case 22:Gt=(l=Gt)||e.memoizedState!==null,P0(t,n,e),Gt=l;break;default:P0(t,n,e)}}function L3(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{He(t)}catch(e){mt(n,n.return,e)}}}function H3(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{He(t)}catch(e){mt(n,n.return,e)}}function I6(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new N3),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new N3),n;default:throw Error(c(435,t.tag))}}function Ll(t,n){var e=I6(t);n.forEach(function(l){if(!e.has(l)){e.add(l);var r=u8.bind(null,t,l);l.then(r,r)}})}function n0(t,n){var e=n.deletions;if(e!==null)for(var l=0;l<e.length;l++){var r=e[l],i=t,s=n,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(zn(o.type)){zt=o.stateNode,t0=!1;break t}break;case 5:zt=o.stateNode,t0=!1;break t;case 3:case 4:zt=o.stateNode.containerInfo,t0=!0;break t}o=o.return}if(zt===null)throw Error(c(160));B3(i,s,r),zt=null,t0=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)G3(n,t),n=n.sibling}var x0=null;function G3(t,n){var e=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:n0(n,t),e0(t),l&4&&(Sn(3,t,t.return),E1(3,t),Sn(5,t,t.return));break;case 1:n0(n,t),e0(t),l&512&&(Gt||e===null||q0(e,e.return)),l&64&&I0&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var r=x0;if(n0(n,t),e0(t),l&512&&(Gt||e===null||q0(e,e.return)),l&4){var i=e!==null?e.memoizedState:null;if(l=t.memoizedState,e===null)if(l===null)if(t.stateNode===null){t:{l=t.type,e=t.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":i=r.getElementsByTagName("title")[0],(!i||i[$e]||i[jt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(l),r.head.insertBefore(i,r.querySelector("head > title"))),Jt(i,l,e),i[jt]=t,Vt(i),l=i;break t;case"link":var s=G5("link","href",r).get(l+(e.href||""));if(s){for(var o=0;o<s.length;o++)if(i=s[o],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(o,1);break n}}i=r.createElement(l),Jt(i,l,e),r.head.appendChild(i);break;case"meta":if(s=G5("meta","content",r).get(l+(e.content||""))){for(o=0;o<s.length;o++)if(i=s[o],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(o,1);break n}}i=r.createElement(l),Jt(i,l,e),r.head.appendChild(i);break;default:throw Error(c(468,l))}i[jt]=t,Vt(i),l=i}t.stateNode=l}else q5(r,t.type,t.stateNode);else t.stateNode=H5(r,l,t.memoizedProps);else i!==l?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,l===null?q5(r,t.type,t.stateNode):H5(r,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Za(t,t.memoizedProps,e.memoizedProps)}break;case 27:n0(n,t),e0(t),l&512&&(Gt||e===null||q0(e,e.return)),e!==null&&l&4&&Za(t,t.memoizedProps,e.memoizedProps);break;case 5:if(n0(n,t),e0(t),l&512&&(Gt||e===null||q0(e,e.return)),t.flags&32){r=t.stateNode;try{ae(r,"")}catch(Y){mt(t,t.return,Y)}}l&4&&t.stateNode!=null&&(r=t.memoizedProps,Za(t,r,e!==null?e.memoizedProps:r)),l&1024&&(Fa=!0);break;case 6:if(n0(n,t),e0(t),l&4){if(t.stateNode===null)throw Error(c(162));l=t.memoizedProps,e=t.stateNode;try{e.nodeValue=l}catch(Y){mt(t,t.return,Y)}}break;case 3:if(kl=null,r=x0,x0=Wl(n.containerInfo),n0(n,t),x0=r,e0(t),l&4&&e!==null&&e.memoizedState.isDehydrated)try{He(n.containerInfo)}catch(Y){mt(t,t.return,Y)}Fa&&(Fa=!1,q3(t));break;case 4:l=x0,x0=Wl(t.stateNode.containerInfo),n0(n,t),e0(t),x0=l;break;case 12:n0(n,t),e0(t);break;case 31:n0(n,t),e0(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ll(t,l)));break;case 13:n0(n,t),e0(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Gl=i0()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ll(t,l)));break;case 22:r=t.memoizedState!==null;var g=e!==null&&e.memoizedState!==null,T=I0,z=Gt;if(I0=T||r,Gt=z||g,n0(n,t),Gt=z,I0=T,e0(t),l&8192)t:for(n=t.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(e===null||g||I0||Gt||Wn(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){g=e=n;try{if(i=g.stateNode,r)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=g.stateNode;var N=g.memoizedProps.style,A=N!=null&&N.hasOwnProperty("display")?N.display:null;o.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Y){mt(g,g.return,Y)}}}else if(n.tag===6){if(e===null){g=n;try{g.stateNode.nodeValue=r?"":g.memoizedProps}catch(Y){mt(g,g.return,Y)}}}else if(n.tag===18){if(e===null){g=n;try{var _=g.stateNode;r?C5(_,!0):C5(g.stateNode,!1)}catch(Y){mt(g,g.return,Y)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,Ll(t,e))));break;case 19:n0(n,t),e0(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ll(t,l)));break;case 30:break;case 21:break;default:n0(n,t),e0(t)}}function e0(t){var n=t.flags;if(n&2){try{for(var e,l=t.return;l!==null;){if(R3(l)){e=l;break}l=l.return}if(e==null)throw Error(c(160));switch(e.tag){case 27:var r=e.stateNode,i=Ka(t);Bl(t,i,r);break;case 5:var s=e.stateNode;e.flags&32&&(ae(s,""),e.flags&=-33);var o=Ka(t);Bl(t,o,s);break;case 3:case 4:var g=e.stateNode.containerInfo,T=Ka(t);Ja(t,T,g);break;default:throw Error(c(161))}}catch(z){mt(t,t.return,z)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function q3(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;q3(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function tn(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)x3(t,n.alternate,n),n=n.sibling}function Wn(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sn(4,n,n.return),Wn(n);break;case 1:q0(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&C3(n,n.return,e),Wn(n);break;case 27:x1(n.stateNode);case 26:case 5:q0(n,n.return),Wn(n);break;case 22:n.memoizedState===null&&Wn(n);break;case 30:Wn(n);break;default:Wn(n)}t=t.sibling}}function nn(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=t,i=n,s=i.flags;switch(i.tag){case 0:case 11:case 15:nn(r,i,e),E1(4,i);break;case 1:if(nn(r,i,e),l=i,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(T){mt(l,l.return,T)}if(l=i,r=l.updateQueue,r!==null){var o=l.stateNode;try{var g=r.shared.hiddenCallbacks;if(g!==null)for(r.shared.hiddenCallbacks=null,r=0;r<g.length;r++)mu(g[r],o)}catch(T){mt(l,l.return,T)}}e&&s&64&&z3(i),T1(i,i.return);break;case 27:D3(i);case 26:case 5:nn(r,i,e),e&&l===null&&s&4&&O3(i),T1(i,i.return);break;case 12:nn(r,i,e);break;case 31:nn(r,i,e),e&&s&4&&L3(r,i);break;case 13:nn(r,i,e),e&&s&4&&H3(r,i);break;case 22:i.memoizedState===null&&nn(r,i,e),T1(i,i.return);break;case 30:break;default:nn(r,i,e)}n=n.sibling}}function Wa(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&c1(e))}function $a(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&c1(t))}function U0(t,n,e,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w3(t,n,e,l),n=n.sibling}function w3(t,n,e,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:U0(t,n,e,l),r&2048&&E1(9,n);break;case 1:U0(t,n,e,l);break;case 3:U0(t,n,e,l),r&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&c1(t)));break;case 12:if(r&2048){U0(t,n,e,l),t=n.stateNode;try{var i=n.memoizedProps,s=i.id,o=i.onPostCommit;typeof o=="function"&&o(s,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){mt(n,n.return,g)}}else U0(t,n,e,l);break;case 31:U0(t,n,e,l);break;case 13:U0(t,n,e,l);break;case 23:break;case 22:i=n.stateNode,s=n.alternate,n.memoizedState!==null?i._visibility&2?U0(t,n,e,l):A1(t,n):i._visibility&2?U0(t,n,e,l):(i._visibility|=2,_e(t,n,e,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Wa(s,n);break;case 24:U0(t,n,e,l),r&2048&&$a(n.alternate,n);break;default:U0(t,n,e,l)}}function _e(t,n,e,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=t,s=n,o=e,g=l,T=s.flags;switch(s.tag){case 0:case 11:case 15:_e(i,s,o,g,r),E1(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?_e(i,s,o,g,r):A1(i,s):(z._visibility|=2,_e(i,s,o,g,r)),r&&T&2048&&Wa(s.alternate,s);break;case 24:_e(i,s,o,g,r),r&&T&2048&&$a(s.alternate,s);break;default:_e(i,s,o,g,r)}n=n.sibling}}function A1(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,l=n,r=l.flags;switch(l.tag){case 22:A1(e,l),r&2048&&Wa(l.alternate,l);break;case 24:A1(e,l),r&2048&&$a(l.alternate,l);break;default:A1(e,l)}n=n.sibling}}var _1=8192;function ze(t,n,e){if(t.subtreeFlags&_1)for(t=t.child;t!==null;)Y3(t,n,e),t=t.sibling}function Y3(t,n,e){switch(t.tag){case 26:ze(t,n,e),t.flags&_1&&t.memoizedState!==null&&q8(e,x0,t.memoizedState,t.memoizedProps);break;case 5:ze(t,n,e);break;case 3:case 4:var l=x0;x0=Wl(t.stateNode.containerInfo),ze(t,n,e),x0=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=_1,_1=16777216,ze(t,n,e),_1=l):ze(t,n,e));break;default:ze(t,n,e)}}function V3(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function z1(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];Xt=l,j3(l,t)}V3(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X3(t),t=t.sibling}function X3(t){switch(t.tag){case 0:case 11:case 15:z1(t),t.flags&2048&&Sn(9,t,t.return);break;case 3:z1(t);break;case 12:z1(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):z1(t);break;default:z1(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];Xt=l,j3(l,t)}V3(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sn(8,n,n.return),Hl(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function j3(t,n){for(;Xt!==null;){var e=Xt;switch(e.tag){case 0:case 11:case 15:Sn(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:c1(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,Xt=l;else t:for(e=t;Xt!==null;){l=Xt;var r=l.sibling,i=l.return;if(U3(l),l===e){Xt=null;break t}if(r!==null){r.return=i,Xt=r;break t}Xt=i}}}var P6={getCacheForType:function(t){var n=Zt(Bt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return Zt(Bt).controller.signal}},t8=typeof WeakMap=="function"?WeakMap:Map,vt=0,Mt=null,rt=null,it=0,dt=0,h0=null,bn=!1,Ce=!1,ka=!1,en=0,Ot=0,Mn=0,$n=0,Ia=0,d0=0,Oe=0,C1=null,l0=null,Pa=!1,Gl=0,Q3=0,ql=1/0,wl=null,En=null,wt=0,Tn=null,Re=null,ln=0,t2=0,n2=null,Z3=null,O1=0,e2=null;function m0(){return(vt&2)!==0&&it!==0?it&-it:C.T!==null?f2():ui()}function K3(){if(d0===0)if((it&536870912)===0||ft){var t=J1;J1<<=1,(J1&3932160)===0&&(J1=262144),d0=t}else d0=536870912;return t=v0.current,t!==null&&(t.flags|=32),d0}function r0(t,n,e){(t===Mt&&(dt===2||dt===9)||t.cancelPendingCommit!==null)&&(De(t,0),An(t,it,d0,!1)),We(t,e),((vt&2)===0||t!==Mt)&&(t===Mt&&((vt&2)===0&&($n|=e),Ot===4&&An(t,it,d0,!1)),w0(t))}function J3(t,n,e){if((vt&6)!==0)throw Error(c(327));var l=!e&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),r=l?l8(t,n):r2(t,n,!0),i=l;do{if(r===0){Ce&&!l&&An(t,n,0,!1);break}else{if(e=t.current.alternate,i&&!n8(e)){r=r2(t,n,!1),i=!1;continue}if(r===2){if(i=n,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;t:{var o=t;r=C1;var g=o.current.memoizedState.isDehydrated;if(g&&(De(o,s).flags|=256),s=r2(o,s,!1),s!==2){if(ka&&!g){o.errorRecoveryDisabledLanes|=i,$n|=i,r=4;break t}i=l0,l0=r,i!==null&&(l0===null?l0=i:l0.push.apply(l0,i))}r=s}if(i=!1,r!==2)continue}}if(r===1){De(t,0),An(t,n,0,!0);break}t:{switch(l=t,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:An(l,n,d0,!bn);break t;case 2:l0=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(r=Gl+300-i0(),10<r)){if(An(l,n,d0,!bn),W1(l,0,!0)!==0)break t;ln=n,l.timeoutHandle=A5(F3.bind(null,l,e,l0,wl,Pa,n,d0,$n,Oe,bn,i,"Throttled",-0,0),r);break t}F3(l,e,l0,wl,Pa,n,d0,$n,Oe,bn,i,null,-0,0)}}break}while(!0);w0(t)}function F3(t,n,e,l,r,i,s,o,g,T,z,N,A,_){if(t.timeoutHandle=-1,N=n.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:X0},Y3(n,i,N);var Y=(i&62914560)===i?Gl-i0():(i&4194048)===i?Q3-i0():0;if(Y=w8(N,Y),Y!==null){ln=i,t.cancelPendingCommit=Y(e5.bind(null,t,n,i,e,l,r,s,o,g,z,N,null,A,_)),An(t,i,s,!T);return}}e5(t,n,i,e,l,r,s,o,g)}function n8(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var r=e[l],i=r.getSnapshot;r=r.value;try{if(!c0(i(),r))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(t,n,e,l){n&=~Ia,n&=~$n,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var r=n;0<r;){var i=31-f0(r),s=1<<i;l[i]=-1,r&=~s}e!==0&&ri(t,e,n)}function Yl(){return(vt&6)===0?(R1(0),!1):!0}function l2(){if(rt!==null){if(dt===0)var t=rt.return;else t=rt,K0=Vn=null,Sa(t),be=null,v1=0,t=rt;for(;t!==null;)_3(t.alternate,t),t=t.return;rt=null}}function De(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,M8(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),ln=0,l2(),Mt=t,rt=e=Q0(t.current,null),it=n,dt=0,h0=null,bn=!1,Ce=Fe(t,n),ka=!1,Oe=d0=Ia=$n=Mn=Ot=0,l0=C1=null,Pa=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var r=31-f0(l),i=1<<r;n|=t[r],l&=~i}return en=n,ul(),e}function W3(t,n){nt=null,C.H=S1,n===Se||n===ml?(n=vu(),dt=3):n===ua?(n=vu(),dt=4):dt=n===La?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,h0=n,rt===null&&(Ot=1,Rl(t,E0(n,t.current)))}function $3(){var t=v0.current;return t===null?!0:(it&4194048)===it?z0===null:(it&62914560)===it||(it&536870912)!==0?t===z0:!1}function k3(){var t=C.H;return C.H=S1,t===null?S1:t}function I3(){var t=C.A;return C.A=P6,t}function Vl(){Ot=4,bn||(it&4194048)!==it&&v0.current!==null||(Ce=!0),(Mn&134217727)===0&&($n&134217727)===0||Mt===null||An(Mt,it,d0,!1)}function r2(t,n,e){var l=vt;vt|=2;var r=k3(),i=I3();(Mt!==t||it!==n)&&(wl=null,De(t,n)),n=!1;var s=Ot;t:do try{if(dt!==0&&rt!==null){var o=rt,g=h0;switch(dt){case 8:l2(),s=6;break t;case 3:case 2:case 9:case 6:v0.current===null&&(n=!0);var T=dt;if(dt=0,h0=null,Ne(t,o,g,T),e&&Ce){s=0;break t}break;default:T=dt,dt=0,h0=null,Ne(t,o,g,T)}}e8(),s=Ot;break}catch(z){W3(t,z)}while(!0);return n&&t.shellSuspendCounter++,K0=Vn=null,vt=l,C.H=r,C.A=i,rt===null&&(Mt=null,it=0,ul()),s}function e8(){for(;rt!==null;)P3(rt)}function l8(t,n){var e=vt;vt|=2;var l=k3(),r=I3();Mt!==t||it!==n?(wl=null,ql=i0()+500,De(t,n)):Ce=Fe(t,n);t:do try{if(dt!==0&&rt!==null){n=rt;var i=h0;n:switch(dt){case 1:dt=0,h0=null,Ne(t,n,i,1);break;case 2:case 9:if(cu(i)){dt=0,h0=null,t5(n);break}n=function(){dt!==2&&dt!==9||Mt!==t||(dt=7),w0(t)},i.then(n,n);break t;case 3:dt=7;break t;case 4:dt=5;break t;case 7:cu(i)?(dt=0,h0=null,t5(n)):(dt=0,h0=null,Ne(t,n,i,7));break;case 5:var s=null;switch(rt.tag){case 26:s=rt.memoizedState;case 5:case 27:var o=rt;if(s?w5(s):o.stateNode.complete){dt=0,h0=null;var g=o.sibling;if(g!==null)rt=g;else{var T=o.return;T!==null?(rt=T,Xl(T)):rt=null}break n}}dt=0,h0=null,Ne(t,n,i,5);break;case 6:dt=0,h0=null,Ne(t,n,i,6);break;case 8:l2(),Ot=6;break t;default:throw Error(c(462))}}r8();break}catch(z){W3(t,z)}while(!0);return K0=Vn=null,C.H=l,C.A=r,vt=e,rt!==null?0:(Mt=null,it=0,ul(),Ot)}function r8(){for(;rt!==null&&!C7();)P3(rt)}function P3(t){var n=T3(t.alternate,t,en);t.memoizedProps=t.pendingProps,n===null?Xl(t):rt=n}function t5(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=y3(e,n,n.pendingProps,n.type,void 0,it);break;case 11:n=y3(e,n,n.pendingProps,n.type.render,n.ref,it);break;case 5:Sa(n);default:_3(e,n),n=rt=Ii(n,en),n=T3(e,n,en)}t.memoizedProps=t.pendingProps,n===null?Xl(t):rt=n}function Ne(t,n,e,l){K0=Vn=null,Sa(n),be=null,v1=0;var r=n.return;try{if(K6(t,r,n,e,it)){Ot=1,Rl(t,E0(e,t.current)),rt=null;return}}catch(i){if(r!==null)throw rt=r,i;Ot=1,Rl(t,E0(e,t.current)),rt=null;return}n.flags&32768?(ft||l===1?t=!0:Ce||(it&536870912)!==0?t=!1:(bn=t=!0,(l===2||l===9||l===3||l===6)&&(l=v0.current,l!==null&&l.tag===13&&(l.flags|=16384))),n5(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){n5(n,bn);return}t=n.return;var e=W6(n.alternate,n,en);if(e!==null){rt=e;return}if(n=n.sibling,n!==null){rt=n;return}rt=n=t}while(n!==null);Ot===0&&(Ot=5)}function n5(t,n){do{var e=$6(t.alternate,t);if(e!==null){e.flags&=32767,rt=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){rt=t;return}rt=t=e}while(t!==null);Ot=6,rt=null}function e5(t,n,e,l,r,i,s,o,g){t.cancelPendingCommit=null;do jl();while(wt!==0);if((vt&6)!==0)throw Error(c(327));if(n!==null){if(n===t.current)throw Error(c(177));if(i=n.lanes|n.childLanes,i|=Kr,G7(t,e,i,s,o,g),t===Mt&&(rt=Mt=null,it=0),Re=n,Tn=t,ln=e,t2=i,n2=r,Z3=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,f8(Z1,function(){return u5(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,r=L.p,L.p=2,s=vt,vt|=4;try{k6(t,n,e)}finally{vt=s,L.p=r,C.T=l}}wt=1,l5(),r5(),a5()}}function l5(){if(wt===1){wt=0;var t=Tn,n=Re,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=C.T,C.T=null;var l=L.p;L.p=2;var r=vt;vt|=4;try{G3(n,t);var i=g2,s=ji(t.containerInfo),o=i.focusedElem,g=i.selectionRange;if(s!==o&&o&&o.ownerDocument&&Xi(o.ownerDocument.documentElement,o)){if(g!==null&&Vr(o)){var T=g.start,z=g.end;if(z===void 0&&(z=T),"selectionStart"in o)o.selectionStart=T,o.selectionEnd=Math.min(z,o.value.length);else{var N=o.ownerDocument||document,A=N&&N.defaultView||window;if(A.getSelection){var _=A.getSelection(),Y=o.textContent.length,W=Math.min(g.start,Y),St=g.end===void 0?W:Math.min(g.end,Y);!_.extend&&W>St&&(s=St,St=W,W=s);var M=Vi(o,W),p=Vi(o,St);if(M&&p&&(_.rangeCount!==1||_.anchorNode!==M.node||_.anchorOffset!==M.offset||_.focusNode!==p.node||_.focusOffset!==p.offset)){var E=N.createRange();E.setStart(M.node,M.offset),_.removeAllRanges(),W>St?(_.addRange(E),_.extend(p.node,p.offset)):(E.setEnd(p.node,p.offset),_.addRange(E))}}}}for(N=[],_=o;_=_.parentNode;)_.nodeType===1&&N.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<N.length;o++){var R=N[o];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}nr=!!m2,g2=m2=null}finally{vt=r,L.p=l,C.T=e}}t.current=n,wt=2}}function r5(){if(wt===2){wt=0;var t=Tn,n=Re,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=C.T,C.T=null;var l=L.p;L.p=2;var r=vt;vt|=4;try{x3(t,n.alternate,n)}finally{vt=r,L.p=l,C.T=e}}wt=3}}function a5(){if(wt===4||wt===3){wt=0,O7();var t=Tn,n=Re,e=ln,l=Z3;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wt=5:(wt=0,Re=Tn=null,i5(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(En=null),Er(e),n=n.stateNode,u0&&typeof u0.onCommitFiberRoot=="function")try{u0.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=C.T,r=L.p,L.p=2,C.T=null;try{for(var i=t.onRecoverableError,s=0;s<l.length;s++){var o=l[s];i(o.value,{componentStack:o.stack})}}finally{C.T=n,L.p=r}}(ln&3)!==0&&jl(),w0(t),r=t.pendingLanes,(e&261930)!==0&&(r&42)!==0?t===e2?O1++:(O1=0,e2=t):O1=0,R1(0)}}function i5(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,c1(n)))}function jl(){return l5(),r5(),a5(),u5()}function u5(){if(wt!==5)return!1;var t=Tn,n=t2;t2=0;var e=Er(ln),l=C.T,r=L.p;try{L.p=32>e?32:e,C.T=null,e=n2,n2=null;var i=Tn,s=ln;if(wt=0,Re=Tn=null,ln=0,(vt&6)!==0)throw Error(c(331));var o=vt;if(vt|=4,X3(i.current),w3(i,i.current,s,e),vt=o,R1(0,!1),u0&&typeof u0.onPostCommitFiberRoot=="function")try{u0.onPostCommitFiberRoot(Je,i)}catch{}return!0}finally{L.p=r,C.T=l,i5(t,n)}}function f5(t,n,e){n=E0(e,n),n=Ba(t.stateNode,n,2),t=gn(t,n,2),t!==null&&(We(t,2),w0(t))}function mt(t,n,e){if(t.tag===3)f5(t,t,e);else for(;n!==null;){if(n.tag===3){f5(n,t,e);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(En===null||!En.has(l))){t=E0(e,t),e=c3(2),l=gn(n,e,2),l!==null&&(s3(e,l,n,t),We(l,2),w0(l));break}}n=n.return}}function a2(t,n,e){var l=t.pingCache;if(l===null){l=t.pingCache=new t8;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(e)||(ka=!0,r.add(e),t=a8.bind(null,t,n,e),n.then(t,t))}function a8(t,n,e){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,Mt===t&&(it&e)===e&&(Ot===4||Ot===3&&(it&62914560)===it&&300>i0()-Gl?(vt&2)===0&&De(t,0):Ia|=e,Oe===it&&(Oe=0)),w0(t)}function c5(t,n){n===0&&(n=li()),t=qn(t,n),t!==null&&(We(t,n),w0(t))}function i8(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),c5(t,e)}function u8(t,n){var e=0;switch(t.tag){case 31:case 13:var l=t.stateNode,r=t.memoizedState;r!==null&&(e=r.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(n),c5(t,e)}function f8(t,n){return pr(t,n)}var Ql=null,xe=null,i2=!1,Zl=!1,u2=!1,_n=0;function w0(t){t!==xe&&t.next===null&&(xe===null?Ql=xe=t:xe=xe.next=t),Zl=!0,i2||(i2=!0,s8())}function R1(t,n){if(!u2&&Zl){u2=!0;do for(var e=!1,l=Ql;l!==null;){if(t!==0){var r=l.pendingLanes;if(r===0)var i=0;else{var s=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-f0(42|t)+1)-1,i&=r&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,h5(l,i))}else i=it,i=W1(l,l===Mt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Fe(l,i)||(e=!0,h5(l,i));l=l.next}while(e);u2=!1}}function c8(){s5()}function s5(){Zl=i2=!1;var t=0;_n!==0&&b8()&&(t=_n);for(var n=i0(),e=null,l=Ql;l!==null;){var r=l.next,i=v5(l,n);i===0?(l.next=null,e===null?Ql=r:e.next=r,r===null&&(xe=e)):(e=l,(t!==0||(i&3)!==0)&&(Zl=!0)),l=r}wt!==0&&wt!==5||R1(t),_n!==0&&(_n=0)}function v5(t,n){for(var e=t.suspendedLanes,l=t.pingedLanes,r=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-f0(i),o=1<<s,g=r[s];g===-1?((o&e)===0||(o&l)!==0)&&(r[s]=H7(o,n)):g<=n&&(t.expiredLanes|=o),i&=~o}if(n=Mt,e=it,e=W1(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,e===0||t===n&&(dt===2||dt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Sr(l),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Fe(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(l!==null&&Sr(l),Er(e)){case 2:case 8:e=ni;break;case 32:e=Z1;break;case 268435456:e=ei;break;default:e=Z1}return l=o5.bind(null,t),e=pr(e,l),t.callbackPriority=n,t.callbackNode=e,n}return l!==null&&l!==null&&Sr(l),t.callbackPriority=2,t.callbackNode=null,2}function o5(t,n){if(wt!==0&&wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(jl()&&t.callbackNode!==e)return null;var l=it;return l=W1(t,t===Mt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(J3(t,l,n),v5(t,i0()),t.callbackNode!=null&&t.callbackNode===e?o5.bind(null,t):null)}function h5(t,n){if(jl())return null;J3(t,n,!0)}function s8(){E8(function(){(vt&6)!==0?pr(ti,c8):s5()})}function f2(){if(_n===0){var t=ye;t===0&&(t=K1,K1<<=1,(K1&261888)===0&&(K1=256)),_n=t}return _n}function d5(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:P1(""+t)}function m5(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function v8(t,n,e,l,r){if(n==="submit"&&e&&e.stateNode===r){var i=d5((r[It]||null).action),s=l.submitter;s&&(n=(n=s[It]||null)?d5(n.formAction):s.getAttribute("formAction"),n!==null&&(i=n,s=null));var o=new ll("action","action",null,l,r);t.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(_n!==0){var g=s?m5(r,s):new FormData(r);Oa(e,{pending:!0,data:g,method:r.method,action:i},null,g)}}else typeof i=="function"&&(o.preventDefault(),g=s?m5(r,s):new FormData(r),Oa(e,{pending:!0,data:g,method:r.method,action:i},i,g))},currentTarget:r}]})}}for(var c2=0;c2<Zr.length;c2++){var s2=Zr[c2],o8=s2.toLowerCase(),h8=s2[0].toUpperCase()+s2.slice(1);N0(o8,"on"+h8)}N0(Ki,"onAnimationEnd"),N0(Ji,"onAnimationIteration"),N0(Fi,"onAnimationStart"),N0("dblclick","onDoubleClick"),N0("focusin","onFocus"),N0("focusout","onBlur"),N0(R6,"onTransitionRun"),N0(D6,"onTransitionStart"),N0(N6,"onTransitionCancel"),N0(Wi,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var D1="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(D1));function g5(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var l=t[e],r=l.event;l=l.listeners;t:{var i=void 0;if(n)for(var s=l.length-1;0<=s;s--){var o=l[s],g=o.instance,T=o.currentTarget;if(o=o.listener,g!==i&&r.isPropagationStopped())break t;i=o,r.currentTarget=T;try{i(r)}catch(z){il(z)}r.currentTarget=null,i=g}else for(s=0;s<l.length;s++){if(o=l[s],g=o.instance,T=o.currentTarget,o=o.listener,g!==i&&r.isPropagationStopped())break t;i=o,r.currentTarget=T;try{i(r)}catch(z){il(z)}r.currentTarget=null,i=g}}}}function at(t,n){var e=n[Tr];e===void 0&&(e=n[Tr]=new Set);var l=t+"__bubble";e.has(l)||(y5(n,t,2,!1),e.add(l))}function v2(t,n,e){var l=0;n&&(l|=4),y5(e,t,l,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function o2(t){if(!t[Kl]){t[Kl]=!0,si.forEach(function(e){e!=="selectionchange"&&(d8.has(e)||v2(e,!1,t),v2(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,v2("selectionchange",!1,n))}}function y5(t,n,e,l){switch(K5(n)){case 2:var r=X8;break;case 8:r=j8;break;default:r=C2}e=r.bind(null,n,e,t),r=void 0,!xr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?t.addEventListener(n,e,{capture:!0,passive:r}):t.addEventListener(n,e,!0):r!==void 0?t.addEventListener(n,e,{passive:r}):t.addEventListener(n,e,!1)}function h2(t,n,e,l,r){var i=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var o=l.stateNode.containerInfo;if(o===r)break;if(s===4)for(s=l.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;o!==null;){if(s=te(o),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){l=i=s;continue t}o=o.parentNode}}l=l.return}Ei(function(){var T=i,z=Dr(e),N=[];t:{var A=$i.get(t);if(A!==void 0){var _=ll,Y=t;switch(t){case"keypress":if(nl(e)===0)break t;case"keydown":case"keyup":_=u6;break;case"focusin":Y="focus",_=Hr;break;case"focusout":Y="blur",_=Hr;break;case"beforeblur":case"afterblur":_=Hr;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=_i;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=W7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=s6;break;case Ki:case Ji:case Fi:_=I7;break;case Wi:_=o6;break;case"scroll":case"scrollend":_=J7;break;case"wheel":_=d6;break;case"copy":case"cut":case"paste":_=t6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ci;break;case"toggle":case"beforetoggle":_=g6}var W=(n&4)!==0,St=!W&&(t==="scroll"||t==="scrollend"),M=W?A!==null?A+"Capture":null:A;W=[];for(var p=T,E;p!==null;){var R=p;if(E=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||E===null||M===null||(R=Ie(p,M),R!=null&&W.push(N1(p,R,E))),St)break;p=p.return}0<W.length&&(A=new _(A,Y,null,e,z),N.push({event:A,listeners:W}))}}if((n&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",A&&e!==Rr&&(Y=e.relatedTarget||e.fromElement)&&(te(Y)||Y[Pn]))break t;if((_||A)&&(A=z.window===z?z:(A=z.ownerDocument)?A.defaultView||A.parentWindow:window,_?(Y=e.relatedTarget||e.toElement,_=T,Y=Y?te(Y):null,Y!==null&&(St=h(Y),W=Y.tag,Y!==St||W!==5&&W!==27&&W!==6)&&(Y=null)):(_=null,Y=T),_!==Y)){if(W=_i,R="onMouseLeave",M="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(W=Ci,R="onPointerLeave",M="onPointerEnter",p="pointer"),St=_==null?A:ke(_),E=Y==null?A:ke(Y),A=new W(R,p+"leave",_,e,z),A.target=St,A.relatedTarget=E,R=null,te(z)===T&&(W=new W(M,p+"enter",Y,e,z),W.target=E,W.relatedTarget=St,R=W),St=R,_&&Y)n:{for(W=m8,M=_,p=Y,E=0,R=M;R;R=W(R))E++;R=0;for(var J=p;J;J=W(J))R++;for(;0<E-R;)M=W(M),E--;for(;0<R-E;)p=W(p),R--;for(;E--;){if(M===p||p!==null&&M===p.alternate){W=M;break n}M=W(M),p=W(p)}W=null}else W=null;_!==null&&p5(N,A,_,W,!1),Y!==null&&St!==null&&p5(N,St,Y,W,!0)}}t:{if(A=T?ke(T):window,_=A.nodeName&&A.nodeName.toLowerCase(),_==="select"||_==="input"&&A.type==="file")var ct=Li;else if(Ui(A))if(Hi)ct=z6;else{ct=A6;var X=T6}else _=A.nodeName,!_||_.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Or(T.elementType)&&(ct=Li):ct=_6;if(ct&&(ct=ct(t,T))){Bi(N,ct,e,z);break t}X&&X(t,A,T),t==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&Cr(A,"number",A.value)}switch(X=T?ke(T):window,t){case"focusin":(Ui(X)||X.contentEditable==="true")&&(ce=X,Xr=T,i1=null);break;case"focusout":i1=Xr=ce=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,Qi(N,e,z);break;case"selectionchange":if(O6)break;case"keydown":case"keyup":Qi(N,e,z)}var et;if(qr)t:{switch(t){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else fe?Ni(t,e)&&(ut="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(ut="onCompositionStart");ut&&(Oi&&e.locale!=="ko"&&(fe||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&fe&&(et=Ti()):(cn=z,Ur="value"in cn?cn.value:cn.textContent,fe=!0)),X=Jl(T,ut),0<X.length&&(ut=new zi(ut,t,null,e,z),N.push({event:ut,listeners:X}),et?ut.data=et:(et=xi(e),et!==null&&(ut.data=et)))),(et=p6?S6(t,e):b6(t,e))&&(ut=Jl(T,"onBeforeInput"),0<ut.length&&(X=new zi("onBeforeInput","beforeinput",null,e,z),N.push({event:X,listeners:ut}),X.data=et)),v8(N,t,T,e,z)}g5(N,n)})}function N1(t,n,e){return{instance:t,listener:n,currentTarget:e}}function Jl(t,n){for(var e=n+"Capture",l=[];t!==null;){var r=t,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Ie(t,e),r!=null&&l.unshift(N1(t,r,i)),r=Ie(t,n),r!=null&&l.push(N1(t,r,i))),t.tag===3)return l;t=t.return}return[]}function m8(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function p5(t,n,e,l,r){for(var i=n._reactName,s=[];e!==null&&e!==l;){var o=e,g=o.alternate,T=o.stateNode;if(o=o.tag,g!==null&&g===l)break;o!==5&&o!==26&&o!==27||T===null||(g=T,r?(T=Ie(e,i),T!=null&&s.unshift(N1(e,T,g))):r||(T=Ie(e,i),T!=null&&s.push(N1(e,T,g)))),e=e.return}s.length!==0&&t.push({event:n,listeners:s})}var g8=/\r\n?/g,y8=/\u0000|\uFFFD/g;function S5(t){return(typeof t=="string"?t:""+t).replace(g8,`
`).replace(y8,"")}function b5(t,n){return n=S5(n),S5(t)===n}function pt(t,n,e,l,r,i){switch(e){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ae(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ae(t,""+l);break;case"className":k1(t,"class",l);break;case"tabIndex":k1(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":k1(t,e,l);break;case"style":bi(t,l,i);break;case"data":if(n!=="object"){k1(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=P1(""+l),t.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(n!=="input"&&pt(t,n,"name",r.name,r,null),pt(t,n,"formEncType",r.formEncType,r,null),pt(t,n,"formMethod",r.formMethod,r,null),pt(t,n,"formTarget",r.formTarget,r,null)):(pt(t,n,"encType",r.encType,r,null),pt(t,n,"method",r.method,r,null),pt(t,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=P1(""+l),t.setAttribute(e,l);break;case"onClick":l!=null&&(t.onclick=X0);break;case"onScroll":l!=null&&at("scroll",t);break;case"onScrollEnd":l!=null&&at("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(e=l.__html,e!=null){if(r.children!=null)throw Error(c(60));t.innerHTML=e}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}e=P1(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""+l):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":l===!0?t.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,l):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(e,l):t.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(e):t.setAttribute(e,l);break;case"popover":at("beforetoggle",t),at("toggle",t),$1(t,"popover",l);break;case"xlinkActuate":V0(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":V0(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":V0(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":V0(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":V0(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":V0(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":V0(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":V0(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":V0(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$1(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Z7.get(e)||e,$1(t,e,l))}}function d2(t,n,e,l,r,i){switch(e){case"style":bi(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(e=l.__html,e!=null){if(r.children!=null)throw Error(c(60));t.innerHTML=e}}break;case"children":typeof l=="string"?ae(t,l):(typeof l=="number"||typeof l=="bigint")&&ae(t,""+l);break;case"onScroll":l!=null&&at("scroll",t);break;case"onScrollEnd":l!=null&&at("scrollend",t);break;case"onClick":l!=null&&(t.onclick=X0);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vi.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(r=e.endsWith("Capture"),n=e.slice(2,r?e.length-7:void 0),i=t[It]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(n,i,r),typeof l=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,l,r);break t}e in t?t[e]=l:l===!0?t.setAttribute(e,""):$1(t,e,l)}}}function Jt(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":at("error",t),at("load",t);var l=!1,r=!1,i;for(i in e)if(e.hasOwnProperty(i)){var s=e[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:pt(t,n,i,s,e,null)}}r&&pt(t,n,"srcSet",e.srcSet,e,null),l&&pt(t,n,"src",e.src,e,null);return;case"input":at("invalid",t);var o=i=s=r=null,g=null,T=null;for(l in e)if(e.hasOwnProperty(l)){var z=e[l];if(z!=null)switch(l){case"name":r=z;break;case"type":s=z;break;case"checked":g=z;break;case"defaultChecked":T=z;break;case"value":i=z;break;case"defaultValue":o=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,n));break;default:pt(t,n,l,z,e,null)}}gi(t,i,o,g,T,s,r,!1);return;case"select":at("invalid",t),l=s=i=null;for(r in e)if(e.hasOwnProperty(r)&&(o=e[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:pt(t,n,r,o,e,null)}n=i,e=s,t.multiple=!!l,n!=null?re(t,!!l,n,!1):e!=null&&re(t,!!l,e,!0);return;case"textarea":at("invalid",t),i=r=l=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":l=o;break;case"defaultValue":r=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:pt(t,n,s,o,e,null)}pi(t,l,r,i);return;case"option":for(g in e)if(e.hasOwnProperty(g)&&(l=e[g],l!=null))switch(g){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:pt(t,n,g,l,e,null)}return;case"dialog":at("beforetoggle",t),at("toggle",t),at("cancel",t),at("close",t);break;case"iframe":case"object":at("load",t);break;case"video":case"audio":for(l=0;l<D1.length;l++)at(D1[l],t);break;case"image":at("error",t),at("load",t);break;case"details":at("toggle",t);break;case"embed":case"source":case"link":at("error",t),at("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in e)if(e.hasOwnProperty(T)&&(l=e[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:pt(t,n,T,l,e,null)}return;default:if(Or(n)){for(z in e)e.hasOwnProperty(z)&&(l=e[z],l!==void 0&&d2(t,n,z,l,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(l=e[o],l!=null&&pt(t,n,o,l,e,null))}function p8(t,n,e,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,s=null,o=null,g=null,T=null,z=null;for(_ in e){var N=e[_];if(e.hasOwnProperty(_)&&N!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":g=N;default:l.hasOwnProperty(_)||pt(t,n,_,null,l,N)}}for(var A in l){var _=l[A];if(N=e[A],l.hasOwnProperty(A)&&(_!=null||N!=null))switch(A){case"type":i=_;break;case"name":r=_;break;case"checked":T=_;break;case"defaultChecked":z=_;break;case"value":s=_;break;case"defaultValue":o=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,n));break;default:_!==N&&pt(t,n,A,_,l,N)}}zr(t,s,o,g,T,z,i,r);return;case"select":_=s=o=A=null;for(i in e)if(g=e[i],e.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":_=g;default:l.hasOwnProperty(i)||pt(t,n,i,null,l,g)}for(r in l)if(i=l[r],g=e[r],l.hasOwnProperty(r)&&(i!=null||g!=null))switch(r){case"value":A=i;break;case"defaultValue":o=i;break;case"multiple":s=i;default:i!==g&&pt(t,n,r,i,l,g)}n=o,e=s,l=_,A!=null?re(t,!!e,A,!1):!!l!=!!e&&(n!=null?re(t,!!e,n,!0):re(t,!!e,e?[]:"",!1));return;case"textarea":_=A=null;for(o in e)if(r=e[o],e.hasOwnProperty(o)&&r!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pt(t,n,o,null,l,r)}for(s in l)if(r=l[s],i=e[s],l.hasOwnProperty(s)&&(r!=null||i!=null))switch(s){case"value":A=r;break;case"defaultValue":_=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&pt(t,n,s,r,l,i)}yi(t,A,_);return;case"option":for(var Y in e)if(A=e[Y],e.hasOwnProperty(Y)&&A!=null&&!l.hasOwnProperty(Y))switch(Y){case"selected":t.selected=!1;break;default:pt(t,n,Y,null,l,A)}for(g in l)if(A=l[g],_=e[g],l.hasOwnProperty(g)&&A!==_&&(A!=null||_!=null))switch(g){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:pt(t,n,g,A,l,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in e)A=e[W],e.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W)&&pt(t,n,W,null,l,A);for(T in l)if(A=l[T],_=e[T],l.hasOwnProperty(T)&&A!==_&&(A!=null||_!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,n));break;default:pt(t,n,T,A,l,_)}return;default:if(Or(n)){for(var St in e)A=e[St],e.hasOwnProperty(St)&&A!==void 0&&!l.hasOwnProperty(St)&&d2(t,n,St,void 0,l,A);for(z in l)A=l[z],_=e[z],!l.hasOwnProperty(z)||A===_||A===void 0&&_===void 0||d2(t,n,z,A,l,_);return}}for(var M in e)A=e[M],e.hasOwnProperty(M)&&A!=null&&!l.hasOwnProperty(M)&&pt(t,n,M,null,l,A);for(N in l)A=l[N],_=e[N],!l.hasOwnProperty(N)||A===_||A==null&&_==null||pt(t,n,N,A,l,_)}function M5(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function S8(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var r=e[l],i=r.transferSize,s=r.initiatorType,o=r.duration;if(i&&o&&M5(s)){for(s=0,o=r.responseEnd,l+=1;l<e.length;l++){var g=e[l],T=g.startTime;if(T>o)break;var z=g.transferSize,N=g.initiatorType;z&&M5(N)&&(g=g.responseEnd,s+=z*(g<o?1:(o-T)/(g-T)))}if(--l,n+=8*(i+s)/(r.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var m2=null,g2=null;function Fl(t){return t.nodeType===9?t:t.ownerDocument}function E5(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T5(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function y2(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var p2=null;function b8(){var t=window.event;return t&&t.type==="popstate"?t===p2?!1:(p2=t,!0):(p2=null,!1)}var A5=typeof setTimeout=="function"?setTimeout:void 0,M8=typeof clearTimeout=="function"?clearTimeout:void 0,_5=typeof Promise=="function"?Promise:void 0,E8=typeof queueMicrotask=="function"?queueMicrotask:typeof _5<"u"?function(t){return _5.resolve(null).then(t).catch(T8)}:A5;function T8(t){setTimeout(function(){throw t})}function zn(t){return t==="head"}function z5(t,n){var e=n,l=0;do{var r=e.nextSibling;if(t.removeChild(e),r&&r.nodeType===8)if(e=r.data,e==="/$"||e==="/&"){if(l===0){t.removeChild(r),He(n);return}l--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")l++;else if(e==="html")x1(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,x1(e);for(var i=e.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[$e]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=s}}else e==="body"&&x1(t.ownerDocument.body);e=r}while(e);He(n)}function C5(t,n){var e=t;t=0;do{var l=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=l}while(e)}function S2(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":S2(e),Ar(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function A8(t,n,e,l){for(;t.nodeType===1;){var r=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[$e])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=C0(t.nextSibling),t===null)break}return null}function _8(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=C0(t.nextSibling),t===null))return null;return t}function O5(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=C0(t.nextSibling),t===null))return null;return t}function b2(t){return t.data==="$?"||t.data==="$~"}function M2(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function z8(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var l=function(){n(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function C0(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var E2=null;function R5(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return C0(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function D5(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function N5(t,n,e){switch(n=Fl(e),t){case"html":if(t=n.documentElement,!t)throw Error(c(452));return t;case"head":if(t=n.head,!t)throw Error(c(453));return t;case"body":if(t=n.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function x1(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ar(t)}var O0=new Map,x5=new Set;function Wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var rn=L.d;L.d={f:C8,r:O8,D:R8,C:D8,L:N8,m:x8,X:B8,S:U8,M:L8};function C8(){var t=rn.f(),n=Yl();return t||n}function O8(t){var n=ne(t);n!==null&&n.tag===5&&n.type==="form"?Wu(n):rn.r(t)}var Ue=typeof document>"u"?null:document;function U5(t,n,e){var l=Ue;if(l&&typeof n=="string"&&n){var r=b0(n);r='link[rel="'+t+'"][href="'+r+'"]',typeof e=="string"&&(r+='[crossorigin="'+e+'"]'),x5.has(r)||(x5.add(r),t={rel:t,crossOrigin:e,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Jt(n,"link",t),Vt(n),l.head.appendChild(n)))}}function R8(t){rn.D(t),U5("dns-prefetch",t,null)}function D8(t,n){rn.C(t,n),U5("preconnect",t,n)}function N8(t,n,e){rn.L(t,n,e);var l=Ue;if(l&&t&&n){var r='link[rel="preload"][as="'+b0(n)+'"]';n==="image"&&e&&e.imageSrcSet?(r+='[imagesrcset="'+b0(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(r+='[imagesizes="'+b0(e.imageSizes)+'"]')):r+='[href="'+b0(t)+'"]';var i=r;switch(n){case"style":i=Be(t);break;case"script":i=Le(t)}O0.has(i)||(t=D({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),O0.set(i,t),l.querySelector(r)!==null||n==="style"&&l.querySelector(U1(i))||n==="script"&&l.querySelector(B1(i))||(n=l.createElement("link"),Jt(n,"link",t),Vt(n),l.head.appendChild(n)))}}function x8(t,n){rn.m(t,n);var e=Ue;if(e&&t){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+b0(l)+'"][href="'+b0(t)+'"]',i=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Le(t)}if(!O0.has(i)&&(t=D({rel:"modulepreload",href:t},n),O0.set(i,t),e.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(B1(i)))return}l=e.createElement("link"),Jt(l,"link",t),Vt(l),e.head.appendChild(l)}}}function U8(t,n,e){rn.S(t,n,e);var l=Ue;if(l&&t){var r=ee(l).hoistableStyles,i=Be(t);n=n||"default";var s=r.get(i);if(!s){var o={loading:0,preload:null};if(s=l.querySelector(U1(i)))o.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":n},e),(e=O0.get(i))&&T2(t,e);var g=s=l.createElement("link");Vt(g),Jt(g,"link",t),g._p=new Promise(function(T,z){g.onload=T,g.onerror=z}),g.addEventListener("load",function(){o.loading|=1}),g.addEventListener("error",function(){o.loading|=2}),o.loading|=4,$l(s,n,l)}s={type:"stylesheet",instance:s,count:1,state:o},r.set(i,s)}}}function B8(t,n){rn.X(t,n);var e=Ue;if(e&&t){var l=ee(e).hoistableScripts,r=Le(t),i=l.get(r);i||(i=e.querySelector(B1(r)),i||(t=D({src:t,async:!0},n),(n=O0.get(r))&&A2(t,n),i=e.createElement("script"),Vt(i),Jt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function L8(t,n){rn.M(t,n);var e=Ue;if(e&&t){var l=ee(e).hoistableScripts,r=Le(t),i=l.get(r);i||(i=e.querySelector(B1(r)),i||(t=D({src:t,async:!0,type:"module"},n),(n=O0.get(r))&&A2(t,n),i=e.createElement("script"),Vt(i),Jt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function B5(t,n,e,l){var r=(r=lt.current)?Wl(r):null;if(!r)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Be(e.href),e=ee(r).hoistableStyles,l=e.get(n),l||(l={type:"style",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Be(e.href);var i=ee(r).hoistableStyles,s=i.get(t);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=r.querySelector(U1(t)))&&!i._p&&(s.instance=i,s.state.loading=5),O0.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},O0.set(t,e),i||H8(r,t,e,s.state))),n&&l===null)throw Error(c(528,""));return s}if(n&&l!==null)throw Error(c(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Le(e),e=ee(r).hoistableScripts,l=e.get(n),l||(l={type:"script",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Be(t){return'href="'+b0(t)+'"'}function U1(t){return'link[rel="stylesheet"]['+t+"]"}function L5(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function H8(t,n,e,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Jt(n,"link",e),Vt(n),t.head.appendChild(n))}function Le(t){return'[src="'+b0(t)+'"]'}function B1(t){return"script[async]"+t}function H5(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+b0(e.href)+'"]');if(l)return n.instance=l,Vt(l),l;var r=D({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Vt(l),Jt(l,"style",r),$l(l,e.precedence,t),n.instance=l;case"stylesheet":r=Be(e.href);var i=t.querySelector(U1(r));if(i)return n.state.loading|=4,n.instance=i,Vt(i),i;l=L5(e),(r=O0.get(r))&&T2(l,r),i=(t.ownerDocument||t).createElement("link"),Vt(i);var s=i;return s._p=new Promise(function(o,g){s.onload=o,s.onerror=g}),Jt(i,"link",l),n.state.loading|=4,$l(i,e.precedence,t),n.instance=i;case"script":return i=Le(e.src),(r=t.querySelector(B1(i)))?(n.instance=r,Vt(r),r):(l=e,(r=O0.get(i))&&(l=D({},e),A2(l,r)),t=t.ownerDocument||t,r=t.createElement("script"),Vt(r),Jt(r,"link",l),t.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,$l(l,e.precedence,t));return n.instance}function $l(t,n,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,i=r,s=0;s<l.length;s++){var o=l[s];if(o.dataset.precedence===n)i=o;else if(i!==r)break}i?i.parentNode.insertBefore(t,i.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function T2(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function A2(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var kl=null;function G5(t,n,e){if(kl===null){var l=new Map,r=kl=new Map;r.set(e,l)}else r=kl,l=r.get(e),l||(l=new Map,r.set(e,l));if(l.has(t))return l;for(l.set(t,null),e=e.getElementsByTagName(t),r=0;r<e.length;r++){var i=e[r];if(!(i[$e]||i[jt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(n)||"";s=t+s;var o=l.get(s);o?o.push(i):l.set(s,[i])}}return l}function q5(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function G8(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function w5(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function q8(t,n,e,l){if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=Be(l.href),i=n.querySelector(U1(r));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Il.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=i,Vt(i);return}i=n.ownerDocument||n,l=L5(l),(r=O0.get(r))&&T2(l,r),i=i.createElement("link"),Vt(i);var s=i;s._p=new Promise(function(o,g){s.onload=o,s.onerror=g}),Jt(i,"link",l),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Il.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var _2=0;function w8(t,n){return t.stylesheets&&t.count===0&&tr(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var l=setTimeout(function(){if(t.stylesheets&&tr(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+n);0<t.imgBytes&&_2===0&&(_2=62500*S8());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tr(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>_2?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function Il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function tr(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(Y8,t),Pl=null,Il.call(t))}function Y8(t,n){if(!(n.state.loading&4)){var e=Pl.get(t);if(e)var l=e.get(null);else{e=new Map,Pl.set(t,e);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var s=r[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),l=s)}l&&e.set(null,l)}r=n.instance,s=r.getAttribute("data-precedence"),i=e.get(s)||l,i===l&&e.set(null,r),e.set(s,r),this.count++,l=Il.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),i?i.parentNode.insertBefore(r,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),n.state.loading|=4}}var L1={$$typeof:w,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function V8(t,n,e,l,r,i,s,o,g){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.hiddenUpdates=br(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Y5(t,n,e,l,r,i,s,o,g,T,z,N){return t=new V8(t,n,e,s,g,T,z,N,o),n=1,i===!0&&(n|=24),i=s0(3,null,null,n),t.current=i,i.stateNode=t,n=ra(),n.refCount++,t.pooledCache=n,n.refCount++,i.memoizedState={element:l,isDehydrated:e,cache:n},fa(i),t}function V5(t){return t?(t=oe,t):oe}function X5(t,n,e,l,r,i){r=V5(r),l.context===null?l.context=r:l.pendingContext=r,l=mn(n),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=gn(t,l,n),e!==null&&(r0(e,t,n),h1(e,t,n))}function j5(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function z2(t,n){j5(t,n),(t=t.alternate)&&j5(t,n)}function Q5(t){if(t.tag===13||t.tag===31){var n=qn(t,67108864);n!==null&&r0(n,t,67108864),z2(t,67108864)}}function Z5(t){if(t.tag===13||t.tag===31){var n=m0();n=Mr(n);var e=qn(t,n);e!==null&&r0(e,t,n),z2(t,n)}}var nr=!0;function X8(t,n,e,l){var r=C.T;C.T=null;var i=L.p;try{L.p=2,C2(t,n,e,l)}finally{L.p=i,C.T=r}}function j8(t,n,e,l){var r=C.T;C.T=null;var i=L.p;try{L.p=8,C2(t,n,e,l)}finally{L.p=i,C.T=r}}function C2(t,n,e,l){if(nr){var r=O2(l);if(r===null)h2(t,n,l,er,e),J5(t,l);else if(Z8(r,t,n,e,l))l.stopPropagation();else if(J5(t,l),n&4&&-1<Q8.indexOf(t)){for(;r!==null;){var i=ne(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Un(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var g=1<<31-f0(s);o.entanglements[1]|=g,s&=~g}w0(i),(vt&6)===0&&(ql=i0()+500,R1(0))}}break;case 31:case 13:o=qn(i,2),o!==null&&r0(o,i,2),Yl(),z2(i,2)}if(i=O2(l),i===null&&h2(t,n,l,er,e),i===r)break;r=i}r!==null&&l.stopPropagation()}else h2(t,n,l,null,e)}}function O2(t){return t=Dr(t),R2(t)}var er=null;function R2(t){if(er=null,t=te(t),t!==null){var n=h(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=m(n),t!==null)return t;t=null}else if(e===31){if(t=d(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return er=t,null}function K5(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(R7()){case ti:return 2;case ni:return 8;case Z1:case D7:return 32;case ei:return 268435456;default:return 32}default:return 32}}var D2=!1,Cn=null,On=null,Rn=null,H1=new Map,G1=new Map,Dn=[],Q8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J5(t,n){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":H1.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":G1.delete(n.pointerId)}}function q1(t,n,e,l,r,i){return t===null||t.nativeEvent!==i?(t={blockedOn:n,domEventName:e,eventSystemFlags:l,nativeEvent:i,targetContainers:[r]},n!==null&&(n=ne(n),n!==null&&Q5(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),t)}function Z8(t,n,e,l,r){switch(n){case"focusin":return Cn=q1(Cn,t,n,e,l,r),!0;case"dragenter":return On=q1(On,t,n,e,l,r),!0;case"mouseover":return Rn=q1(Rn,t,n,e,l,r),!0;case"pointerover":var i=r.pointerId;return H1.set(i,q1(H1.get(i)||null,t,n,e,l,r)),!0;case"gotpointercapture":return i=r.pointerId,G1.set(i,q1(G1.get(i)||null,t,n,e,l,r)),!0}return!1}function F5(t){var n=te(t.target);if(n!==null){var e=h(n);if(e!==null){if(n=e.tag,n===13){if(n=m(e),n!==null){t.blockedOn=n,fi(t.priority,function(){Z5(e)});return}}else if(n===31){if(n=d(e),n!==null){t.blockedOn=n,fi(t.priority,function(){Z5(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lr(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=O2(t.nativeEvent);if(e===null){e=t.nativeEvent;var l=new e.constructor(e.type,e);Rr=l,e.target.dispatchEvent(l),Rr=null}else return n=ne(e),n!==null&&Q5(n),t.blockedOn=e,!1;n.shift()}return!0}function W5(t,n,e){lr(t)&&e.delete(n)}function K8(){D2=!1,Cn!==null&&lr(Cn)&&(Cn=null),On!==null&&lr(On)&&(On=null),Rn!==null&&lr(Rn)&&(Rn=null),H1.forEach(W5),G1.forEach(W5)}function rr(t,n){t.blockedOn===n&&(t.blockedOn=null,D2||(D2=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,K8)))}var ar=null;function $5(t){ar!==t&&(ar=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ar===t&&(ar=null);for(var n=0;n<t.length;n+=3){var e=t[n],l=t[n+1],r=t[n+2];if(typeof l!="function"){if(R2(l||e)===null)continue;break}var i=ne(e);i!==null&&(t.splice(n,3),n-=3,Oa(i,{pending:!0,data:r,method:e.method,action:l},l,r))}}))}function He(t){function n(g){return rr(g,t)}Cn!==null&&rr(Cn,t),On!==null&&rr(On,t),Rn!==null&&rr(Rn,t),H1.forEach(n),G1.forEach(n);for(var e=0;e<Dn.length;e++){var l=Dn[e];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Dn.length&&(e=Dn[0],e.blockedOn===null);)F5(e),e.blockedOn===null&&Dn.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var r=e[l],i=e[l+1],s=r[It]||null;if(typeof i=="function")s||$5(e);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(r=i,s=i[It]||null)o=s.formAction;else if(R2(r)!==null)continue}else o=s.action;typeof o=="function"?e[l+1]=o:(e.splice(l,3),l-=3),$5(e)}}}function k5(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function N2(t){this._internalRoot=t}ir.prototype.render=N2.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(c(409));var e=n.current,l=m0();X5(e,l,t,n,null,null)},ir.prototype.unmount=N2.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;X5(t.current,2,null,t,null,null),Yl(),n[Pn]=null}};function ir(t){this._internalRoot=t}ir.prototype.unstable_scheduleHydration=function(t){if(t){var n=ui();t={blockedOn:null,target:t,priority:n};for(var e=0;e<Dn.length&&n!==0&&n<Dn[e].priority;e++);Dn.splice(e,0,t),e===0&&F5(t)}};var I5=a.version;if(I5!=="19.2.0")throw Error(c(527,I5,"19.2.0"));L.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=b(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var J8={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ur.isDisabled&&ur.supportsFiber)try{Je=ur.inject(J8),u0=ur}catch{}}return Y1.createRoot=function(t,n){if(!v(t))throw Error(c(299));var e=!1,l="",r=a3,i=i3,s=u3;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Y5(t,1,!1,null,null,e,l,null,r,i,s,k5),t[Pn]=n.current,o2(t),new N2(n)},Y1.hydrateRoot=function(t,n,e){if(!v(t))throw Error(c(299));var l=!1,r="",i=a3,s=i3,o=u3,g=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(g=e.formState)),n=Y5(t,1,!0,n,e??null,l,r,g,i,s,o,k5),n.context=V5(null),e=n.current,l=m0(),l=Mr(l),r=mn(l),r.callback=null,gn(e,r,l),e=l,n.current.lanes=e,We(n,e),w0(n),t[Pn]=n.current,o2(t),new ir(n)},Y1.version="19.2.0",Y1}var f7;function l4(){if(f7)return B2.exports;f7=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(a){console.error(a)}}return u(),B2.exports=e4(),B2.exports}var r4=l4(),q2={exports:{}},w2={};var c7;function a4(){if(c7)return w2;c7=1;var u=vr().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return w2.c=function(a){return u.H.useMemoCache(a)},w2}var s7;function i4(){return s7||(s7=1,q2.exports=a4()),q2.exports}var $2=i4();class u4{engine;lastTime;onUpdate;animationFrameId=null;boundLoop;constructor(a,f){this.engine=a,this.lastTime=0,this.onUpdate=f,this.boundLoop=this.loop.bind(this)}start(){this.lastTime=0,this.animationFrameId=requestAnimationFrame(this.boundLoop)}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}get isRunning(){return this.animationFrameId!==null}loop(a){this.lastTime===0&&(this.lastTime=a);const f=(a-this.lastTime)/1e3;this.lastTime=a,this.onUpdate(f),this.engine.isRunning&&(this.animationFrameId=requestAnimationFrame(this.boundLoop))}}class f4{currentInputFrame={keyboardState:new Map,mouseState:new Map,mousePosition:[0,0]};nextInputFrame={keyboardState:new Map,mouseState:new Map,mousePosition:[0,0]};constructor(a){window.addEventListener("keydown",f=>{this.nextInputFrame.keyboardState.set(f.key,!0),f.preventDefault()}),window.addEventListener("keyup",f=>{this.nextInputFrame.keyboardState.set(f.key,!1),f.preventDefault()}),window.addEventListener("mousedown",f=>{this.nextInputFrame.mouseState.set(f.button,!0)}),window.addEventListener("mouseup",f=>{this.nextInputFrame.mouseState.set(f.button,!1)}),window.addEventListener("mousemove",f=>{this.nextInputFrame.mousePosition[0]=f.clientX,this.nextInputFrame.mousePosition[1]=f.clientY}),window.addEventListener("blur",()=>{this.nextInputFrame.keyboardState.clear(),this.nextInputFrame.mouseState.clear(),this.currentInputFrame.keyboardState.clear(),this.currentInputFrame.mouseState.clear()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.nextInputFrame.keyboardState.clear(),this.nextInputFrame.mouseState.clear(),this.currentInputFrame.keyboardState.clear(),this.currentInputFrame.mouseState.clear())})}update(){this.currentInputFrame.keyboardState.clear(),this.nextInputFrame.keyboardState.forEach((a,f)=>{a&&this.currentInputFrame.keyboardState.set(f,a)}),this.currentInputFrame.mouseState.clear(),this.nextInputFrame.mouseState.forEach((a,f)=>{a&&this.currentInputFrame.mouseState.set(f,a)}),this.currentInputFrame.mousePosition[0]=this.nextInputFrame.mousePosition[0],this.currentInputFrame.mousePosition[1]=this.nextInputFrame.mousePosition[1],this.nextInputFrame.keyboardState.forEach((a,f)=>{a||this.nextInputFrame.keyboardState.delete(f)}),this.nextInputFrame.mouseState.forEach((a,f)=>{a||this.nextInputFrame.mouseState.delete(f)})}isKeyPressed(a){return this.currentInputFrame.keyboardState.get(a)||!1}isMouseButtonPressed(a){return this.currentInputFrame.mouseState.get(a)||!1}getMousePosition(){return this.currentInputFrame.mousePosition}}var c4=1e-6,y0=typeof Float32Array<"u"?Float32Array:Array,s4="zyx";function v4(){var u=new y0(9);return y0!=Float32Array&&(u[1]=0,u[2]=0,u[3]=0,u[5]=0,u[6]=0,u[7]=0),u[0]=1,u[4]=1,u[8]=1,u}function In(){var u=new y0(16);return y0!=Float32Array&&(u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=0,u[12]=0,u[13]=0,u[14]=0),u[0]=1,u[5]=1,u[10]=1,u[15]=1,u}function b7(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u[3]=a[3],u[4]=a[4],u[5]=a[5],u[6]=a[6],u[7]=a[7],u[8]=a[8],u[9]=a[9],u[10]=a[10],u[11]=a[11],u[12]=a[12],u[13]=a[13],u[14]=a[14],u[15]=a[15],u}function o4(u,a){var f=a[0],c=a[1],v=a[2],h=a[3],m=a[4],d=a[5],y=a[6],b=a[7],x=a[8],D=a[9],G=a[10],j=a[11],q=a[12],B=a[13],O=a[14],K=a[15],Z=f*d-c*m,w=f*y-v*m,Q=f*b-h*m,F=c*y-v*d,k=c*b-h*d,I=v*b-h*y,_t=x*B-D*q,xt=x*O-G*q,p0=x*K-j*q,Ft=D*O-G*B,Ut=D*K-j*B,a0=G*K-j*O,ht=Z*a0-w*Ut+Q*Ft+F*p0-k*xt+I*_t;return ht?(ht=1/ht,u[0]=(d*a0-y*Ut+b*Ft)*ht,u[1]=(v*Ut-c*a0-h*Ft)*ht,u[2]=(B*I-O*k+K*F)*ht,u[3]=(G*k-D*I-j*F)*ht,u[4]=(y*p0-m*a0-b*xt)*ht,u[5]=(f*a0-v*p0+h*xt)*ht,u[6]=(O*Q-q*I-K*w)*ht,u[7]=(x*I-G*Q+j*w)*ht,u[8]=(m*Ut-d*p0+b*_t)*ht,u[9]=(c*p0-f*Ut-h*_t)*ht,u[10]=(q*k-B*Q+K*Z)*ht,u[11]=(D*Q-x*k-j*Z)*ht,u[12]=(d*xt-m*Ft-y*_t)*ht,u[13]=(f*Ft-c*xt+v*_t)*ht,u[14]=(B*w-q*F-O*Z)*ht,u[15]=(x*F-D*w+G*Z)*ht,u):null}function h4(u,a,f){var c=a[0],v=a[1],h=a[2],m=a[3],d=a[4],y=a[5],b=a[6],x=a[7],D=a[8],G=a[9],j=a[10],q=a[11],B=a[12],O=a[13],K=a[14],Z=a[15],w=f[0],Q=f[1],F=f[2],k=f[3];return u[0]=w*c+Q*d+F*D+k*B,u[1]=w*v+Q*y+F*G+k*O,u[2]=w*h+Q*b+F*j+k*K,u[3]=w*m+Q*x+F*q+k*Z,w=f[4],Q=f[5],F=f[6],k=f[7],u[4]=w*c+Q*d+F*D+k*B,u[5]=w*v+Q*y+F*G+k*O,u[6]=w*h+Q*b+F*j+k*K,u[7]=w*m+Q*x+F*q+k*Z,w=f[8],Q=f[9],F=f[10],k=f[11],u[8]=w*c+Q*d+F*D+k*B,u[9]=w*v+Q*y+F*G+k*O,u[10]=w*h+Q*b+F*j+k*K,u[11]=w*m+Q*x+F*q+k*Z,w=f[12],Q=f[13],F=f[14],k=f[15],u[12]=w*c+Q*d+F*D+k*B,u[13]=w*v+Q*y+F*G+k*O,u[14]=w*h+Q*b+F*j+k*K,u[15]=w*m+Q*x+F*q+k*Z,u}function d4(u,a,f){var c=a[0],v=a[1],h=a[2],m=a[3],d=c+c,y=v+v,b=h+h,x=c*d,D=c*y,G=c*b,j=v*y,q=v*b,B=h*b,O=m*d,K=m*y,Z=m*b;return u[0]=1-(j+B),u[1]=D+Z,u[2]=G-K,u[3]=0,u[4]=D-Z,u[5]=1-(x+B),u[6]=q+O,u[7]=0,u[8]=G+K,u[9]=q-O,u[10]=1-(x+j),u[11]=0,u[12]=f[0],u[13]=f[1],u[14]=f[2],u[15]=1,u}function m4(u,a){return u[0]=a[12],u[1]=a[13],u[2]=a[14],u}function g4(u,a){var f=a[0],c=a[1],v=a[2],h=a[4],m=a[5],d=a[6],y=a[8],b=a[9],x=a[10];return u[0]=Math.sqrt(f*f+c*c+v*v),u[1]=Math.sqrt(h*h+m*m+d*d),u[2]=Math.sqrt(y*y+b*b+x*x),u}function y4(u,a){var f=new y0(3);g4(f,a);var c=1/f[0],v=1/f[1],h=1/f[2],m=a[0]*c,d=a[1]*v,y=a[2]*h,b=a[4]*c,x=a[5]*v,D=a[6]*h,G=a[8]*c,j=a[9]*v,q=a[10]*h,B=m+x+q,O=0;return B>0?(O=Math.sqrt(B+1)*2,u[3]=.25*O,u[0]=(D-j)/O,u[1]=(G-y)/O,u[2]=(d-b)/O):m>x&&m>q?(O=Math.sqrt(1+m-x-q)*2,u[3]=(D-j)/O,u[0]=.25*O,u[1]=(d+b)/O,u[2]=(G+y)/O):x>q?(O=Math.sqrt(1+x-m-q)*2,u[3]=(G-y)/O,u[0]=(d+b)/O,u[1]=.25*O,u[2]=(D+j)/O):(O=Math.sqrt(1+q-m-x)*2,u[3]=(d-b)/O,u[0]=(G+y)/O,u[1]=(D+j)/O,u[2]=.25*O),u}function M7(u,a,f,c){var v=a[0],h=a[1],m=a[2],d=a[3],y=v+v,b=h+h,x=m+m,D=v*y,G=v*b,j=v*x,q=h*b,B=h*x,O=m*x,K=d*y,Z=d*b,w=d*x,Q=c[0],F=c[1],k=c[2];return u[0]=(1-(q+O))*Q,u[1]=(G+w)*Q,u[2]=(j-Z)*Q,u[3]=0,u[4]=(G-w)*F,u[5]=(1-(D+O))*F,u[6]=(B+K)*F,u[7]=0,u[8]=(j+Z)*k,u[9]=(B-K)*k,u[10]=(1-(D+q))*k,u[11]=0,u[12]=f[0],u[13]=f[1],u[14]=f[2],u[15]=1,u}function p4(u,a,f,c,v){var h=1/Math.tan(a/2);if(u[0]=h/f,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=h,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=-1,u[12]=0,u[13]=0,u[15]=0,v!=null&&v!==1/0){var m=1/(c-v);u[10]=(v+c)*m,u[14]=2*v*c*m}else u[10]=-1,u[14]=-2*c;return u}var S4=p4;function At(){var u=new y0(3);return y0!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function b4(u){var a=u[0],f=u[1],c=u[2];return Math.sqrt(a*a+f*f+c*c)}function B0(u,a,f){var c=new y0(3);return c[0]=u,c[1]=a,c[2]=f,c}function kn(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u}function Y2(u,a,f,c){return u[0]=a,u[1]=f,u[2]=c,u}function M4(u,a,f){return u[0]=a[0]+f[0],u[1]=a[1]+f[1],u[2]=a[2]+f[2],u}function E4(u,a){var f=a[0],c=a[1],v=a[2],h=f*f+c*c+v*v;return h>0&&(h=1/Math.sqrt(h)),u[0]=a[0]*h,u[1]=a[1]*h,u[2]=a[2]*h,u}function T4(u,a){return u[0]*a[0]+u[1]*a[1]+u[2]*a[2]}function V2(u,a,f){var c=a[0],v=a[1],h=a[2],m=f[0],d=f[1],y=f[2];return u[0]=v*y-h*d,u[1]=h*m-c*y,u[2]=c*d-v*m,u}function R0(u,a,f){var c=f[0],v=f[1],h=f[2],m=f[3],d=a[0],y=a[1],b=a[2],x=v*b-h*y,D=h*d-c*b,G=c*y-v*d;return x=x+x,D=D+D,G=G+G,u[0]=d+m*x+v*G-h*D,u[1]=y+m*D+h*x-c*G,u[2]=b+m*G+c*D-v*x,u}var A4=b4;(function(){var u=At();return function(a,f,c,v,h,m){var d,y;for(f||(f=3),c||(c=0),v?y=Math.min(v*f+c,a.length):y=a.length,d=c;d<y;d+=f)u[0]=a[d],u[1]=a[d+1],u[2]=a[d+2],h(u,u,m),a[d]=u[0],a[d+1]=u[1],a[d+2]=u[2];return a}})();function _4(){var u=new y0(4);return y0!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0,u[3]=0),u}function X1(u,a,f,c){var v=new y0(4);return v[0]=u,v[1]=a,v[2]=f,v[3]=c,v}function z4(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u[3]=a[3],u}function C4(u,a,f,c,v){return u[0]=a,u[1]=f,u[2]=c,u[3]=v,u}function O4(u,a){var f=a[0],c=a[1],v=a[2],h=a[3],m=f*f+c*c+v*v+h*h;return m>0&&(m=1/Math.sqrt(m)),u[0]=f*m,u[1]=c*m,u[2]=v*m,u[3]=h*m,u}(function(){var u=_4();return function(a,f,c,v,h,m){var d,y;for(f||(f=4),c||(c=0),v?y=Math.min(v*f+c,a.length):y=a.length,d=c;d<y;d+=f)u[0]=a[d],u[1]=a[d+1],u[2]=a[d+2],u[3]=a[d+3],h(u,u,m),a[d]=u[0],a[d+1]=u[1],a[d+2]=u[2],a[d+3]=u[3];return a}})();function Qe(){var u=new y0(4);return y0!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u[3]=1,u}function R4(u,a,f){f=f*.5;var c=Math.sin(f);return u[0]=c*a[0],u[1]=c*a[1],u[2]=c*a[2],u[3]=Math.cos(f),u}function D4(u,a,f){f*=.5;var c=a[0],v=a[1],h=a[2],m=a[3],d=Math.sin(f),y=Math.cos(f);return u[0]=c*y+m*d,u[1]=v*y+h*d,u[2]=h*y-v*d,u[3]=m*y-c*d,u}function N4(u,a,f){f*=.5;var c=a[0],v=a[1],h=a[2],m=a[3],d=Math.sin(f),y=Math.cos(f);return u[0]=c*y-h*d,u[1]=v*y+m*d,u[2]=h*y+c*d,u[3]=m*y-v*d,u}function x4(u,a,f){f*=.5;var c=a[0],v=a[1],h=a[2],m=a[3],d=Math.sin(f),y=Math.cos(f);return u[0]=c*y+v*d,u[1]=v*y-c*d,u[2]=h*y+m*d,u[3]=m*y-h*d,u}function X2(u,a,f,c){var v=a[0],h=a[1],m=a[2],d=a[3],y=f[0],b=f[1],x=f[2],D=f[3],G,j,q,B,O;return j=v*y+h*b+m*x+d*D,j<0&&(j=-j,y=-y,b=-b,x=-x,D=-D),1-j>c4?(G=Math.acos(j),q=Math.sin(G),B=Math.sin((1-c)*G)/q,O=Math.sin(c*G)/q):(B=1-c,O=c),u[0]=B*v+O*y,u[1]=B*h+O*b,u[2]=B*m+O*x,u[3]=B*d+O*D,u}function U4(u,a){var f=a[0]+a[4]+a[8],c;if(f>0)c=Math.sqrt(f+1),u[3]=.5*c,c=.5/c,u[0]=(a[5]-a[7])*c,u[1]=(a[6]-a[2])*c,u[2]=(a[1]-a[3])*c;else{var v=0;a[4]>a[0]&&(v=1),a[8]>a[v*3+v]&&(v=2);var h=(v+1)%3,m=(v+2)%3;c=Math.sqrt(a[v*3+v]-a[h*3+h]-a[m*3+m]+1),u[v]=.5*c,c=.5/c,u[3]=(a[h*3+m]-a[m*3+h])*c,u[h]=(a[h*3+v]+a[v*3+h])*c,u[m]=(a[m*3+v]+a[v*3+m])*c}return u}function v7(u,a,f,c){var v=arguments.length>4&&arguments[4]!==void 0?arguments[4]:s4,h=Math.PI/360;a*=h,c*=h,f*=h;var m=Math.sin(a),d=Math.cos(a),y=Math.sin(f),b=Math.cos(f),x=Math.sin(c),D=Math.cos(c);switch(v){case"xyz":u[0]=m*b*D+d*y*x,u[1]=d*y*D-m*b*x,u[2]=d*b*x+m*y*D,u[3]=d*b*D-m*y*x;break;case"xzy":u[0]=m*b*D-d*y*x,u[1]=d*y*D-m*b*x,u[2]=d*b*x+m*y*D,u[3]=d*b*D+m*y*x;break;case"yxz":u[0]=m*b*D+d*y*x,u[1]=d*y*D-m*b*x,u[2]=d*b*x-m*y*D,u[3]=d*b*D+m*y*x;break;case"yzx":u[0]=m*b*D+d*y*x,u[1]=d*y*D+m*b*x,u[2]=d*b*x-m*y*D,u[3]=d*b*D-m*y*x;break;case"zxy":u[0]=m*b*D-d*y*x,u[1]=d*y*D+m*b*x,u[2]=d*b*x+m*y*D,u[3]=d*b*D-m*y*x;break;case"zyx":u[0]=m*b*D-d*y*x,u[1]=d*y*D+m*b*x,u[2]=d*b*x-m*y*D,u[3]=d*b*D+m*y*x;break;default:throw new Error("Unknown angle order "+v)}return u}var Z2=z4,B4=C4,E7=O4;(function(){var u=At(),a=B0(1,0,0),f=B0(0,1,0);return function(c,v,h){var m=T4(v,h);return m<-.999999?(V2(u,a,v),A4(u)<1e-6&&V2(u,f,v),E4(u,u),R4(c,u,Math.PI),c):m>.999999?(c[0]=0,c[1]=0,c[2]=0,c[3]=1,c):(V2(u,v,h),c[0]=u[0],c[1]=u[1],c[2]=u[2],c[3]=1+m,E7(c,c))}})();(function(){var u=Qe(),a=Qe();return function(f,c,v,h,m,d){return X2(u,c,m,d),X2(a,v,h,d),X2(f,u,a,2*d*(1-d)),f}})();(function(){var u=v4();return function(a,f,c,v){return u[0]=c[0],u[3]=c[1],u[6]=c[2],u[1]=v[0],u[4]=v[1],u[7]=v[2],u[2]=-f[0],u[5]=-f[1],u[8]=-f[2],E7(a,U4(a,u))}})();const L4=`#version 300 es\r
precision highp float;\r
precision highp int;`,H4=`struct Material {\r
    vec4 ambient;\r
    vec4 diffuse;\r
    vec4 specular;\r
    float shininess;\r
};`,G4=`layout(std140) uniform CameraData {\r
    mat4 uViewMatrix;\r
    mat4 uProjectionMatrix;\r
    vec3 uCameraPosition;\r
};\r
`,q4=`struct DirectionalLight {\r
    vec3 direction;   float _pad0;\r
    vec3 color;       float intensity;\r
};\r
\r
layout(std140) uniform DirectionalLightUBO {\r
    DirectionalLight dirLight;\r
};\r
\r
\r
vec3 ApplyDirectionalLight(DirectionalLight l, vec3 N, vec3 worldPos)\r
{\r
    vec3 L = normalize(-l.direction);\r
    float ndotl = max(dot(N, L), 0.0);\r
    \r
    // Specular reflection (Blinn-Phong)\r
    vec3 V = normalize(uCameraPosition - worldPos);\r
    vec3 H = normalize(L + V);\r
    float spec = pow(max(dot(N, H), 0.0), 32.0); // 32.0 is shininess\r
    \r
    vec3 diffuse = l.color * (l.intensity * ndotl);\r
    vec3 specular = l.color * (l.intensity * spec);\r
    \r
    return diffuse + specular;\r
}`,w4=`struct PointLight {\r
    vec3 position;    float radius;\r
    vec3 color;       float intensity;\r
};\r
\r
layout(std140) uniform PointLightsUBO {\r
    PointLight pointLights[32];\r
    int pointCount;\r
};\r
\r
vec3 ApplyPointLight(PointLight l, vec3 N, vec3 worldPos)\r
{\r
    vec3 L = l.position - worldPos;\r
    float dist = length(L);\r
    \r
    if (dist < 0.001) {\r
        return vec3(0.0);\r
    }\r
    \r
    L /= dist;\r
\r
    // Physically-based inverse square attenuation with smooth windowing\r
    float distRatio = dist / l.radius;\r
    float atten = 1.0 / (1.0 + dist * dist);\r
    // Smooth window function to fade out at radius boundary\r
    float window = pow(clamp(1.0 - pow(distRatio, 4.0), 0.0, 1.0), 2.0);\r
    atten *= window;\r
    \r
    float ndotl = max(dot(N, L), 0.0);\r
    \r
    // Specular reflection (Blinn-Phong)\r
    vec3 V = normalize(uCameraPosition - worldPos);\r
    vec3 H = normalize(L + V);\r
    float spec = pow(max(dot(N, H), 0.0), 32.0); // 32.0 is shininess\r
    \r
    vec3 diffuse = l.color * (l.intensity * ndotl * atten);\r
    vec3 specular = l.color * (l.intensity * spec * atten);\r
\r
    return diffuse + specular;\r
}`,Y4=`struct SpotLight {\r
    vec3 position;   float radius;\r
    vec3 direction;  float outerCutoff;\r
    vec3 color;      float innerCutoff;\r
    float intensity; float pad0; float pad1; float pad2;\r
};\r
\r
layout(std140) uniform SpotLightsUBO {\r
    SpotLight spotLights[32];\r
    int spotCount;\r
};\r
\r
\r
vec3 ApplySpotLight(SpotLight l, vec3 N, vec3 worldPos)\r
{\r
    vec3 L = l.position - worldPos;\r
    float dist = length(L);\r
    L /= dist;\r
\r
    float spotFactor = dot(L, normalize(-l.direction));\r
    float falloff = smoothstep(l.outerCutoff, l.innerCutoff, spotFactor);\r
\r
    // Physically-based inverse square attenuation with smooth windowing\r
    float distRatio = dist / l.radius;\r
    float atten = 1.0 / (1.0 + dist * dist);\r
    // Smooth window function to fade out at radius boundary\r
    float window = pow(clamp(1.0 - pow(distRatio, 4.0), 0.0, 1.0), 2.0);\r
    atten *= window;\r
    \r
    float ndotl = max(dot(N, L), 0.0);\r
    \r
    // Specular reflection (Blinn-Phong)\r
    vec3 V = normalize(uCameraPosition - worldPos);\r
    vec3 H = normalize(L + V);\r
    float spec = pow(max(dot(N, H), 0.0), 32.0); // 32.0 is shininess\r
    \r
    vec3 diffuse = l.color * (l.intensity * ndotl * atten * falloff);\r
    vec3 specular = l.color * (l.intensity * spec * atten * falloff);\r
\r
    return diffuse + specular;\r
}`,V4={defaults:L4,Material:H4,CameraUbo:G4,DirectionalLightUbo:q4,PointLightUbo:w4,SpotLightUbo:Y4};class X4{injections=[];constructor(){this.inject(Object.values(V4).join(`
`))}inject(a){this.injections.push(a)}getProcessed(){return this.injections.join(`
`)}}class j4{shaderPreprocessor;renderingDevice;engine;projectionMatrix=In();cameraPositionMatrix=In();cameraPosition=At();constructor(a,f){this.engine=a,this.shaderPreprocessor=new X4,this.renderingDevice=f}clear(a){this.renderingDevice.clear(a)}updateViewportSize(){const a=this.engine.canvas.width,f=this.engine.canvas.height;this.renderingDevice.setViewPortSize(a,f)}setupProjectionMatrix(a,f,c){const v=this.renderingDevice.getViewPortSize(),h=v.width/v.height;S4(this.projectionMatrix,a*Math.PI/180,h,f,c)}setupCameraPositionMatrix(a){b7(this.cameraPositionMatrix,a)}setupCameraPosition(a){kn(this.cameraPosition,a)}getProjectionMatrix(){return this.projectionMatrix}getCameraPositionMatrix(){return this.cameraPositionMatrix}getCameraPosition(){return this.cameraPosition}}class Q4{engine;currentScene=null;constructor(a){this.engine=a}setCurrentScene(a){typeof a=="function"?this.currentScene=a(this.engine):this.currentScene=a,this.currentScene.onSetup()}getCurrentScene(){return this.currentScene}update(a){this.currentScene&&this.currentScene.update(a)}}class Z4{meshes=new Map;constructor(){}get(a){return this.meshes.get(a)}add(a,f){this.meshes.set(a,f)}remove(a){this.meshes.delete(a)}runGarbageCollection(){for(const a of this.meshes.values())a.refCount===0&&a.dispose()}}class K4{shaders=new Map;constructor(){}add(a,f){this.shaders.set(a,f)}remove(a){this.shaders.delete(a)}get(a){return this.shaders.get(a)}clear(){for(const a of this.shaders.values())a.dispose();this.shaders.clear()}runGarbageCollection(){for(const a of this.shaders.values())a.refCount===0&&a.dispose()}}class J4{textures=new Map;constructor(){}get(a){return this.textures.get(a)}add(a,f){this.textures.set(a,f)}remove(a){this.textures.delete(a)}runGarbageCollection(){for(const a of this.textures.values())a.refCount===0&&a.dispose()}}class F4{textureRepository;meshRepository;shaderRepository;constructor(){this.meshRepository=new Z4,this.textureRepository=new J4,this.shaderRepository=new K4}runGarbageCollection(){this.meshRepository.runGarbageCollection(),this.textureRepository.runGarbageCollection(),this.shaderRepository.runGarbageCollection()}}var K2=typeof Float32Array<"u"?Float32Array:Array;function W4(){var u=new K2(3);return K2!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function j2(u,a,f){var c=new K2(3);return c[0]=u,c[1]=a,c[2]=f,c}(function(){var u=W4();return function(a,f,c,v,h,m){var d,y;for(f||(f=3),c||(c=0),v?y=Math.min(v*f+c,a.length):y=a.length,d=c;d<y;d+=f)u[0]=a[d],u[1]=a[d+1],u[2]=a[d+2],h(u,u,m),a[d]=u[0],a[d+1]=u[1],a[d+2]=u[2];return a}})();let $4=class{fileContents;defaultModelName;result;currentMaterial;currentGroup;smoothingGroup;currentNode;currentObjectNode;currentMesh;constructor(a,f){this._reset(),this.fileContents=a,this.defaultModelName=f||"untitled"}_reset(){const a={name:"RootNode",parent:null,children:[],meshIndices:[]};this.result={rootNode:a,meshes:[],materialLibraries:[]},this.currentMesh=this._createNewMesh(this.defaultModelName),this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(this.defaultModelName,a),this.currentNode.meshIndices.push(0),this.currentObjectNode=this.currentNode,this.currentMaterial="",this.currentGroup="",this.smoothingGroup=0}parse(){this._reset();const a=c=>{const v=c.indexOf("#");return v>-1?c.substring(0,v):c},f=this.fileContents.split(`
`);for(let c=0;c<f.length;c+=1){const h=a(f[c]).replace(/\s+/g," ").trim().split(" ");switch(h[0].toLowerCase()){case"o":this._parseObject(h);break;case"g":this._parseGroup(h);break;case"v":this._parseVertexCoords(h);break;case"vt":this._parseTextureCoords(h);break;case"vn":this._parseVertexNormal(h);break;case"l":this._parseLine(h);break;case"s":this._parseSmoothShadingStatement(h);break;case"f":this._parsePolygon(h);break;case"mtllib":this._parseMtlLib(h);break;case"usemtl":this._parseUseMtl(h);break}}return this.result}_createNewMesh(a){return{name:a,vertices:[],textureCoords:[],vertexNormals:[],faces:[],lines:[]}}_createNewNode(a,f){const c={name:a,parent:f,children:[],meshIndices:[]};return f.children.push(c),c}_parseObject(a){const f=a.length>=2?a[1]:this.defaultModelName;if(this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0){this.currentMesh=this._createNewMesh(f);const c=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentObjectNode=this._createNewNode(f,this.result.rootNode),this.currentObjectNode.meshIndices.push(c),this.currentNode=this.currentObjectNode}else this.currentMesh.name=f,this.currentNode.name=f,this.currentObjectNode.name=f;this.currentGroup="",this.smoothingGroup=0}_parseGroup(a){if(a.length!=2)throw new Error("Group statements must have exactly 1 argument (eg. g group_1)");const f=a[1];if(this.currentGroup!==f){const c=this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0,v=this.currentNode===this.currentObjectNode;if(c||v)if(c){this.currentMesh=this._createNewMesh(f);const h=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(h)}else this.currentMesh.name=f,v?(this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(0),this.currentObjectNode.meshIndices=[]):this.currentNode.name=f;else this.currentMesh.name=f,this.currentNode.name=f;this.currentGroup=f}}_parseVertexCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,v=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertices.push(j2(f,c,v))}_parseTextureCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,v=a.length>=4?parseFloat(a[3]):0;this.currentMesh.textureCoords.push(j2(f,c,v))}_parseVertexNormal(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,v=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertexNormals.push(j2(f,c,v))}_parseLine(a){const f=a.length-1;if(f<2)throw new Error("Line statement has less than 2 vertices");const c=[];for(let v=0;v<f;v+=1){const m=a[v+1].split("/");if(m.length<1||m.length>2)throw new Error("Too many values (separated by /) for a single vertex");let d=0,y=0;d=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),c.push({vertexIndex:d,textureCoordsIndex:y})}this.currentMesh.lines.push(c)}_parsePolygon(a){const f=a.length-1;if(f<3)throw new Error("Face statement has less than 3 vertices");const c={material:this.currentMaterial,group:this.currentGroup,smoothingGroup:this.smoothingGroup,vertices:[]};for(let v=0;v<f;v+=1){const m=a[v+1].split("/");if(m.length<1||m.length>3)throw new Error("Too many values (separated by /) for a single vertex");let d=0,y=0,b=0;if(d=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),m.length>2&&(b=parseInt(m[2])),d==0)throw"Faces uses invalid vertex index of 0";d<0&&(d=this.currentMesh.vertices.length+1+d),c.vertices.push({vertexIndex:d,textureCoordsIndex:y,vertexNormalIndex:b})}this.currentMesh.faces.push(c)}_parseMtlLib(a){a.length>=2&&this.result.materialLibraries.push(a[1])}_parseUseMtl(a){a.length>=2&&(this.currentMaterial=a[1])}_parseSmoothShadingStatement(a){if(a.length!=2)throw"Smoothing group statements must have exactly 1 argument (eg. s <number|off>)";const f=a[1].toLowerCase()=="off"?0:parseInt(a[1]);this.smoothingGroup=f}};const k4=`# Sample OBJ file with multiple groups\r
# Demonstrates hierarchical node structure\r
\r
# First group - a simple triangle\r
g triangle_group\r
v 0.0 0.0 0.0\r
v 1.0 0.0 0.0\r
v 0.5 1.0 0.0\r
vn 0.0 0.0 1.0\r
vn 0.0 0.0 1.0\r
vn 0.0 0.0 1.0\r
f 1//1 2//2 3//3\r
\r
# Second group - a quad\r
g quad_group\r
v 2.0 0.0 0.0\r
v 3.0 0.0 0.0\r
v 3.0 1.0 0.0\r
v 2.0 1.0 0.0\r
vn 0.0 0.0 1.0\r
vn 0.0 0.0 1.0\r
vn 0.0 0.0 1.0\r
vn 0.0 0.0 1.0\r
f 4//4 5//5 6//6 7//7\r
\r
# Third group - another triangle\r
g triangle_group_2\r
v 4.0 0.0 0.0\r
v 5.0 0.0 0.0\r
v 4.5 1.0 0.0\r
vn 0.0 0.0 1.0\r
vn 0.0 0.0 1.0\r
vn 0.0 0.0 1.0\r
f 8//8 9//9 10//10\r
\r
# Fourth group - a line\r
g line_group\r
v 6.0 0.0 0.0\r
v 7.0 1.0 0.0\r
l 11 12\r
`;class I4{renderer;sceneManager;inputSystem;canvas;repositories;gameLoop;constructor(a,f){this.renderer=new j4(this,f),this.sceneManager=new Q4(this),this.gameLoop=new u4(this,this.update.bind(this)),this.inputSystem=new f4(this),this.canvas=a.options.canvas,this.repositories=new F4;const c=new $4(k4).parse();console.log("Parsed OBJ:",c)}start(){this.gameLoop.start()}stop(){this.gameLoop.stop()}get isRunning(){return this.gameLoop.isRunning}update(a){this.inputSystem.update(),this.renderer.clear([0,0,0,1]),this.sceneManager.update(a)}}class P4{engine;constructor(){this.engine=null}setEngine(a){this.engine=a}get Renderer(){return this.engine.renderer}get SceneManager(){return this.engine.sceneManager}get InputSystem(){return this.engine.inputSystem}get ActiveEngine(){return this.engine}get Repositories(){return this.engine.repositories}}const L0=new P4,Yt=new Proxy({},{get(u,a){const f=L0.Renderer[a];return typeof f=="function"?f.bind(L0.Renderer):f}}),tf=new Proxy({},{get(u,a){const f=L0.SceneManager[a];return typeof f=="function"?f.bind(L0.SceneManager):f}});new Proxy({},{get(u,a){const f=L0.ActiveEngine[a];return typeof f=="function"?f.bind(L0.ActiveEngine):f}});const Y0=new Proxy({},{get(u,a){const f=L0.InputSystem[a];return typeof f=="function"?f.bind(L0.InputSystem):f}}),Xe=new Proxy({},{get(u,a){const f=L0.Repositories[a];return typeof f=="function"?f.bind(L0.Repositories):f}}),nf=u=>L0.setEngine(u);var an=(u=>(u[u.FLOAT32=0]="FLOAT32",u[u.FLOAT32_VEC2=1]="FLOAT32_VEC2",u[u.FLOAT32_VEC3=2]="FLOAT32_VEC3",u[u.FLOAT32_VEC4=3]="FLOAT32_VEC4",u[u.UINT8=4]="UINT8",u))(an||{}),je=(u=>(u[u.STATIC=0]="STATIC",u[u.DYNAMIC=1]="DYNAMIC",u[u.STREAM=2]="STREAM",u))(je||{}),sr=(u=>(u[u.VERTEX=0]="VERTEX",u[u.INDEX=1]="INDEX",u))(sr||{}),g0=(u=>(u[u.FLOAT=0]="FLOAT",u[u.FLOAT_VEC2=1]="FLOAT_VEC2",u[u.FLOAT_VEC3=2]="FLOAT_VEC3",u[u.FLOAT_VEC4=3]="FLOAT_VEC4",u[u.FLOAT_MAT4=4]="FLOAT_MAT4",u))(g0||{});class o7{nextId=1;locationCache=new Map;nameCache=new Map;getLocation(a){const f=this.nameCache.get(a);return f&&this.locationCache.get(f)||null}getLocationId(a){const f=this.nameCache.get(a);return f||null}getLocationById(a){return this.locationCache.get(a)||null}setLocation(a,f){const c=this.nextId++;return this.nameCache.set(a,c),this.locationCache.set(c,f),c}}class ef{gl;programs=new Map;handle=1;uniformMapper;uniformsCache=new Map;constructor(a){this.gl=a,this.uniformMapper={[g0.FLOAT]:this.gl.uniform1f.bind(this.gl),[g0.FLOAT_VEC2]:this.gl.uniform2fv.bind(this.gl),[g0.FLOAT_VEC3]:this.gl.uniform3fv.bind(this.gl),[g0.FLOAT_VEC4]:this.gl.uniform4fv.bind(this.gl),[g0.FLOAT_MAT4]:this.gl.uniformMatrix4fv.bind(this.gl)}}create(a,f){const c=this.gl.createShader(this.gl.VERTEX_SHADER);if(this.gl.shaderSource(c,a),this.gl.compileShader(c),!this.gl.getShaderParameter(c,this.gl.COMPILE_STATUS)){const d=this.gl.getShaderInfoLog(c);throw this.gl.deleteShader(c),new Error(`Could not compile vertex shader:
`+d)}const v=this.gl.createShader(this.gl.FRAGMENT_SHADER);if(this.gl.shaderSource(v,f),this.gl.compileShader(v),!this.gl.getShaderParameter(v,this.gl.COMPILE_STATUS)){const d=this.gl.getShaderInfoLog(v);throw this.gl.deleteShader(v),new Error(`Could not compile fragment shader:
`+d)}const h=this.gl.createProgram();if(this.gl.attachShader(h,c),this.gl.attachShader(h,v),this.gl.linkProgram(h),!this.gl.getProgramParameter(h,this.gl.LINK_STATUS)){const d=this.gl.getProgramInfoLog(h);throw this.gl.deleteProgram(h),new Error(`Could not link shader program:
`+d)}this.gl.deleteShader(c),this.gl.deleteShader(v);const m=this.handle++;return this.programs.set(m,h),m}destroy(a){const f=this.programs.get(a);f&&(this.gl.deleteProgram(f),this.programs.delete(a))}use(a){const f=this.programs.get(a);f&&this.gl.useProgram(f)}setUniform(a,f,c,v){const h=this.programs.get(a);if(!h)return;let m=this.uniformsCache.get(a);m||(m=new o7,this.uniformsCache.set(a,m));let d=m.getLocation(f);d===null&&(d=this.gl.getUniformLocation(h,f),m.setLocation(f,d));const y=this.uniformMapper[c];if(!y)throw new Error(`Unsupported uniform type: ${c}`);c===g0.FLOAT_MAT4?y(d,!1,v):y(d,v)}setUniformAtLocation(a,f,c,v){if(!this.programs.get(a))return;const m=this.uniformsCache.get(a);if(!m)return;const d=m.getLocationById(f);if(d===null)return;const y=this.uniformMapper[c];if(!y)throw new Error(`Unsupported uniform type: ${c}`);c===g0.FLOAT_MAT4?y(d,!1,v):y(d,v)}getUniformLocation(a,f){const c=this.programs.get(a);if(!c)return console.warn(`[WebGl2Shader] Program not found for shader ${a}`),null;let v=this.uniformsCache.get(a);v||(v=new o7,this.uniformsCache.set(a,v));let h=v.getLocationId(f);if(h===null){this.gl.useProgram(c);const m=this.gl.getUniformLocation(c,f);return m===null?null:v.setLocation(f,m)}return h}bindUBO(a,f,c){const v=this.programs.get(a);if(!v)return;const h=this.gl.getUniformBlockIndex(v,f);if(h===this.gl.INVALID_INDEX){console.warn(`[WebGl2Shader] Uniform block "${f}" not found in shader ${a}`);return}this.gl.uniformBlockBinding(v,h,c)}}class T7{refCount=0;addRef(){this.refCount++}removeRef(){this.refCount--,this.refCount<0&&(this.refCount=0)}}var J2=(u=>(u[u.LINEAR=0]="LINEAR",u[u.NEAREST=1]="NEAREST",u))(J2||{}),cr=(u=>(u[u.REPEAT=0]="REPEAT",u[u.CLAMP_TO_EDGE=1]="CLAMP_TO_EDGE",u[u.MIRRORED_REPEAT=2]="MIRRORED_REPEAT",u))(cr||{}),F2=(u=>(u[u.RGB=0]="RGB",u[u.RGBA=1]="RGBA",u))(F2||{}),A7=(u=>(u[u.TEXTURE_2D=0]="TEXTURE_2D",u))(A7||{});const lf={[F2.RGB]:WebGL2RenderingContext.RGB,[F2.RGBA]:WebGL2RenderingContext.RGBA},rf={[A7.TEXTURE_2D]:WebGL2RenderingContext.TEXTURE_2D},h7={[J2.LINEAR]:WebGL2RenderingContext.LINEAR,[J2.NEAREST]:WebGL2RenderingContext.NEAREST},d7={[cr.REPEAT]:WebGL2RenderingContext.REPEAT,[cr.CLAMP_TO_EDGE]:WebGL2RenderingContext.CLAMP_TO_EDGE,[cr.MIRRORED_REPEAT]:WebGL2RenderingContext.MIRRORED_REPEAT};class af{constructor(a){this.gl=a}nextHandle=1;textures=new Map;destroy(a){const f=this.textures.get(a);f?(this.gl.deleteTexture(f),this.textures.delete(a)):console.warn(`Attempted to destroy non-existent texture with handle ${a}`)}use(a){const f=this.textures.get(a);f?this.gl.bindTexture(this.gl.TEXTURE_2D,f):console.warn(`Attempted to use non-existent texture with handle ${a}`)}create(a,f){const c=this.nextHandle++,v=this.gl.createTexture();return this.textures.set(c,v),this.gl.bindTexture(this.gl.TEXTURE_2D,v),this.gl.texImage2D(this.gl.TEXTURE_2D,0,lf[f.format],rf[f.type],this.gl.UNSIGNED_BYTE,a),this.bindOptionsToTexture(c,f),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.nextHandle}bindOptionsToTexture(a,f){this.gl.bindTexture(this.gl.TEXTURE_2D,a),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,h7[f.filter]),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,h7[f.filter]),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,d7[f.wrap]),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,d7[f.wrap])}}const m7={[je.STATIC]:WebGL2RenderingContext.STATIC_DRAW,[je.DYNAMIC]:WebGL2RenderingContext.DYNAMIC_DRAW,[je.STREAM]:WebGL2RenderingContext.STREAM_DRAW},uf={[an.FLOAT32]:1,[an.FLOAT32_VEC2]:2,[an.FLOAT32_VEC3]:3,[an.FLOAT32_VEC4]:4,[an.UINT8]:1};class ff{nextHandle=1;buffers=new Map;vertexArrays=new Map;uniformBuffers=new Map;gl;constructor(a){this.gl=a}getVertexArray(a){return this.vertexArrays.get(a)}vertexArrayCreate(a,f,c){const v=this.gl.createVertexArray(),h=this.nextHandle++;if(this.gl.bindVertexArray(v),a.forEach(m=>{const d=this.buffers.get(m);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,d),f.forEach(y=>{this.gl.enableVertexAttribArray(y.location);let b=uf[y.format];this.gl.vertexAttribPointer(y.location,b,this.gl.FLOAT,!1,y.stride||0,y.offset)})}),c!==void 0){const m=this.buffers.get(c);this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,m),console.log("WebGl2Buffer.vertexArrayCreate - Bound IBO to VAO:",{vaoHandle:h,iboHandle:c,iboExists:!!m})}return this.gl.bindVertexArray(null),this.vertexArrays.set(h,v),h}vertexArrayDestroy(a){const f=this.vertexArrays.get(a);if(!f){console.warn(`Attempted to destroy non-existent vertex array with handle ${a}`);return}this.gl.deleteVertexArray(f),this.vertexArrays.delete(a)}create(a,f,c=sr.VERTEX,v=je.STATIC){const h=this.gl.createBuffer(),m=this.nextHandle++,d=c===sr.INDEX?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER;return this.gl.bindBuffer(d,h),this.gl.bufferData(d,f,m7[v]),this.buffers.set(m,h),m}getBuffer(a){return this.buffers.get(a)}destroy(a){const f=this.buffers.get(a);if(f===void 0){console.warn(`Attempted to destroy non-existent buffer with handle ${a}`);return}this.gl.deleteBuffer(f),this.buffers.delete(a)}update(a,f,c){const v=this.buffers.get(a);if(!v){console.warn(`Attempted to update non-existent buffer with handle ${a}`);return}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,v),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,f,c)}uniformBufferCreate(a,f=je.DYNAMIC){const c=this.gl.createBuffer();if(!c)throw new Error("Failed to create uniform buffer");const v=this.nextHandle++;return this.uniformBuffers.set(v,c),this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,c),this.gl.bufferData(this.gl.UNIFORM_BUFFER,a,m7[f]),this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,null),v}uniformBufferUpdate(a,f,c){const v=this.uniformBuffers.get(a);if(!v){console.warn(`Attempted to update non-existent UBO with handle ${a}`);return}this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,v),this.gl.bufferSubData(this.gl.UNIFORM_BUFFER,f,c),this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,null)}uniformBufferDestroy(a){const f=this.uniformBuffers.get(a);if(!f){console.warn(`Attempted to destroy non-existent UBO with handle ${a}`);return}this.gl.deleteBuffer(f),this.uniformBuffers.delete(a)}uniformBufferBindToPoint(a,f){const c=this.uniformBuffers.get(a);if(!c){console.warn(`Attempted to bind non-existent UBO with handle ${a}`);return}this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER,f,c)}}class or{UBO_SIZE=-1;BLOCK_NAME="";ubo=null;uboHandle=null;uboBindingPoint=0;dataBuffer=new Float32Array(0);isDirty=!1;initialize(a){const f=a.createBuffer();if(!f){console.error("Failed to create camera UBO");return}this.ubo=f,a.bindBuffer(a.UNIFORM_BUFFER,f),a.bufferData(a.UNIFORM_BUFFER,this.UBO_SIZE,a.DYNAMIC_DRAW),a.bindBufferBase(a.UNIFORM_BUFFER,this.uboBindingPoint,f),a.bindBuffer(a.UNIFORM_BUFFER,null)}updateUBO(a){this.ubo&&this.isDirty&&(a.bindBuffer(a.UNIFORM_BUFFER,this.ubo),a.bufferSubData(a.UNIFORM_BUFFER,0,this.dataBuffer),a.bindBuffer(a.UNIFORM_BUFFER,null),this.isDirty=!1)}}class cf extends or{UBO_SIZE=144;BLOCK_NAME="CameraData";constructor(){super(),this.dataBuffer=new Float32Array(36)}setCameraDataBuffer(a){this.dataBuffer=a,this.isDirty=!0}setViewMatrix(a){this.dataBuffer.set(a,0),this.isDirty=!0}setProjectionMatrix(a){this.dataBuffer.set(a,16),this.isDirty=!0}setCameraPosition(a){this.dataBuffer[32]=a[0],this.dataBuffer[33]=a[1],this.dataBuffer[34]=a[2],this.isDirty=!0}reset(){}}class sf extends or{UBO_SIZE=32;BLOCK_NAME="DirectionalLightUBO";constructor(){super(),this.dataBuffer=new Float32Array(this.UBO_SIZE/4)}setDirection(a){this.dataBuffer[0]=a[0],this.dataBuffer[1]=a[1],this.dataBuffer[2]=a[2],this.isDirty=!0}setColor(a){this.dataBuffer[4]=a[0],this.dataBuffer[5]=a[1],this.dataBuffer[6]=a[2],this.isDirty=!0}setIntensity(a){this.dataBuffer[7]=a,this.isDirty=!0}reset(){}}class vf extends or{UBO_SIZE=1040;LIGHT_COUNT=32;BLOCK_NAME="PointLightsUBO";currentLightIndex=0;intView;constructor(){super(),this.dataBuffer=new Float32Array(this.UBO_SIZE/4),this.intView=new Int32Array(this.dataBuffer.buffer)}addPointLight(a,f,c,v){if(this.currentLightIndex>=this.LIGHT_COUNT){console.warn("Maximum number of point lights reached in UBO");return}const h=this.currentLightIndex*8;this.dataBuffer[h+0]=a[0],this.dataBuffer[h+1]=a[1],this.dataBuffer[h+2]=a[2],this.dataBuffer[h+3]=v,this.dataBuffer[h+4]=f[0],this.dataBuffer[h+5]=f[1],this.dataBuffer[h+6]=f[2],this.dataBuffer[h+7]=c,this.currentLightIndex++,this.intView[256]=this.currentLightIndex,this.isDirty=!0}reset(){this.currentLightIndex>0&&(this.currentLightIndex=0,this.intView[256]=0,this.isDirty=!0)}}class of extends or{UBO_SIZE=2064;LIGHT_COUNT=32;BLOCK_NAME="SpotLightsUBO";currentLightIndex=0;intView;constructor(){super(),this.dataBuffer=new Float32Array(this.UBO_SIZE/4),this.intView=new Int32Array(this.dataBuffer.buffer)}addSpotLight(a,f,c,v,h,m){if(this.currentLightIndex>=this.LIGHT_COUNT){console.warn("Maximum number of spot lights reached in UBO");return}const d=this.currentLightIndex*16,y=Math.cos(m),b=Math.cos(m*.8);this.dataBuffer[d+0]=a[0],this.dataBuffer[d+1]=a[1],this.dataBuffer[d+2]=a[2],this.dataBuffer[d+3]=h,this.dataBuffer[d+4]=f[0],this.dataBuffer[d+5]=f[1],this.dataBuffer[d+6]=f[2],this.dataBuffer[d+7]=y,this.dataBuffer[d+8]=c[0],this.dataBuffer[d+9]=c[1],this.dataBuffer[d+10]=c[2],this.dataBuffer[d+11]=b,this.dataBuffer[d+12]=v,this.currentLightIndex++,this.intView[512]=this.currentLightIndex,this.isDirty=!0}reset(){this.currentLightIndex>0&&(this.currentLightIndex=0,this.intView[512]=0,this.isDirty=!0)}}class hf{gl;camera=new cf;directionalLight=new sf;pointLight=new vf;spotLight=new of;ubos;constructor(a){this.gl=a,this.ubos=[this.camera,this.directionalLight,this.pointLight,this.spotLight];let f=0;this.camera.uboBindingPoint=f++,this.directionalLight.uboBindingPoint=f++,this.pointLight.uboBindingPoint=f++,this.spotLight.uboBindingPoint=f++}initializeUbos(){const a=this.ubos,f=a.length;for(let c=0;c<f;c++)a[c].initialize(this.gl)}updateUbos(){const a=this.ubos,f=a.length;for(let c=0;c<f;c++)a[c].updateUBO(this.gl)}getAllUbos(){return this.ubos}}class df{renderer=Yt;uboManager;shader;drawing;commands=[];sceneCommands=[];lightCommands=[];commandCount=0;sceneCommandCount=0;lightCommandCount=0;lastShaderHandle=null;constructor(a,f,c,v){this.uboManager=f,this.shader=c,this.drawing=v}queueCommands(a){const f=a.length;for(let c=0;c<f;c++)this.commands[this.commandCount++]=a[c]}queueSceneCommands(a){const f=a.length;for(let c=0;c<f;c++)this.sceneCommands[this.sceneCommandCount++]=a[c]}queueLightCommands(a){const f=a.length;for(let c=0;c<f;c++)this.lightCommands[this.lightCommandCount++]=a[c]}flushCommands(){this.flushSceneCommands(),this.flushLightCommands(),this.uboManager.updateUbos();for(let a=0;a<this.commandCount;a++)this.executeCommand(this.commands[a]);this.commandCount=0,this.sceneCommandCount=0,this.lightCommandCount=0}flushSceneCommands(){for(let a=0;a<this.sceneCommandCount;a++){const f=this.sceneCommands[a];switch(f.type){case"setViewMatrix":this.renderer.setupCameraPositionMatrix(f.matrix),this.uboManager.camera.setViewMatrix(f.matrix);break;case"setProjectionMatrix":this.renderer.setupProjectionMatrix(f.fov,f.near,f.far),this.uboManager.camera.setProjectionMatrix(Yt.getProjectionMatrix());break;case"setCameraPosition":Yt.setupCameraPosition(f.position),this.uboManager.camera.setCameraPosition(f.position);break}}}flushLightCommands(){this.uboManager.pointLight.reset(),this.uboManager.spotLight.reset();for(let a=0;a<this.lightCommandCount;a++){const f=this.lightCommands[a];switch(f.type){case"DirectionalLight":this.uboManager.directionalLight.setColor(f.color),this.uboManager.directionalLight.setDirection(f.direction),this.uboManager.directionalLight.setIntensity(f.intensity);break;case"PointLight":this.uboManager.pointLight.addPointLight(f.position,f.color,f.intensity,f.range);break;case"SpotLight":this.uboManager.spotLight.addSpotLight(f.position,f.direction,f.color,f.intensity,f.range,f.angle);break}}}setupShaderForCommand(a){if(this.lastShaderHandle!==a.shader.program){this.lastShaderHandle=a.shader.program,this.shader.use(a.shader.program);const f=this.uboManager.getAllUbos(),c=f.length;for(let v=0;v<c;v++){const h=f[v];this.shader.bindUBO(a.shader.program,h.BLOCK_NAME,h.uboBindingPoint)}}}executeCommand(a){this.setupShaderForCommand(a);const f=a.uniforms,c=f.length;for(let v=0;v<c;v++){const h=f[v];this.shader.setUniform(a.shader.program,h.name,h.type,h.value)}this.drawing.drawIndexed(a.mesh.vaoHandle,a.mesh.indices.length)}}class mf{gl;buffer;constructor(a,f){this.gl=a,this.buffer=f}drawIndexed(a,f){const c=this.buffer.getVertexArray(a);if(!c){console.warn(`Attempted to draw non-existent vertex array with handle ${a}`);return}this.gl.bindVertexArray(c),this.gl.drawElements(this.gl.TRIANGLES,f,this.gl.UNSIGNED_SHORT,0)}draw(a,f){const c=this.buffer.getVertexArray(a);if(!c){console.warn(`Attempted to draw non-existent vertex array with handle ${a}`);return}this.gl.bindVertexArray(c),this.gl.drawArrays(this.gl.TRIANGLES,0,f)}clear(a){this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.gl.clearColor(a[0],a[1],a[2],a[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)}}class gf{shader;texture;buffer;uboManager;commands;drawing;gl;constructor(a){this.gl=a,this.shader=new ef(this.gl),this.texture=new af(this.gl),this.buffer=new ff(this.gl),this.uboManager=new hf(this.gl),this.drawing=new mf(this.gl,this.buffer),this.commands=new df(this.gl,this.uboManager,this.shader,this.drawing),this.uboManager.initializeUbos()}queueCommands(a){this.commands.queueCommands(a)}queueSceneCommands(a){this.commands.queueSceneCommands(a)}queueLightCommands(a){this.commands.queueLightCommands(a)}flushCommands(){this.commands.flushCommands()}drawIndexed(a,f){this.drawing.drawIndexed(a,f)}draw(a,f){this.drawing.draw(a,f)}clear(a){this.drawing.clear(a)}setViewPortSize(a,f){this.gl.viewport(0,0,a,f)}getViewPortSize(){const a=this.gl.drawingBufferWidth,f=this.gl.drawingBufferHeight;return{width:a,height:f}}}class yf{options;gl;engine;constructor(a){if(this.options=a,this.gl=this.options.canvas.getContext("webgl2"),new ResizeObserver(v=>{for(let h of v){const m=h.contentRect.width,d=h.contentRect.height;this.options.canvas.width=m,this.options.canvas.height=d,this.engine.renderer.updateViewportSize()}}).observe(this.options.canvas),!this.gl)throw new Error("WebGL2 is not supported in this browser.");const c=new gf(this.gl);this.engine=new I4(this,c),nf(this.engine),this.engine.repositories.shaderRepository.clear(),this.engine.start()}destroy(){this.engine.stop()}}const pf=u=>{const{vertices:a,normals:f,uvs:c}=u,v=a.length/3,h=32,m=new Float32Array(v*8);for(let d=0;d<v;d++){const y=d*8;m[y+0]=a[d*3+0],m[y+1]=a[d*3+1],m[y+2]=a[d*3+2],m[y+3]=f[d*3+0],m[y+4]=f[d*3+1],m[y+5]=f[d*3+2],m[y+6]=c[d*2+0],m[y+7]=c[d*2+1]}return{buffer:m,stride:h,positionOffset:0,normalOffset:12,uvOffset:24}};class hr extends T7{vertices;normals;uvs;indices;id;vboHandle=null;iboHandle=null;vaoHandle=null;static create(a,f,c,v,h){const m=Xe.meshRepository.get(a);if(m)return m.addRef(),m;const d=new hr(a,f,c,v,h);return Xe.meshRepository.add(a,d),d}constructor(a,f,c,v,h){super(),this.id=a,this.vertices=f,this.normals=c,this.uvs=v,this.indices=h,this.bind(Yt.renderingDevice)}getId(){return this.id}bind(a){if(this.vaoHandle!==null)return;const f=this.getVBOData();console.log("Mesh.bind - VBO buffer:",{bufferLength:f.buffer.length,bufferByteLength:f.buffer.byteLength,stride:f.stride,vertexCount:f.buffer.length/8}),console.log("Mesh.bind - IBO:",{indicesLength:this.indices.length,indicesByteLength:this.indices.byteLength,maxIndex:Math.max(...Array.from(this.indices))}),this.vboHandle=a.buffer.create(f.buffer.length,f.buffer),this.iboHandle=a.buffer.create(this.indices.length,this.indices,sr.INDEX);const c=32;this.vaoHandle=a.buffer.vertexArrayCreate([this.vboHandle],[{location:0,format:an.FLOAT32_VEC3,offset:0,stride:c},{location:1,format:an.FLOAT32_VEC3,offset:12,stride:c},{location:2,format:an.FLOAT32_VEC2,offset:24,stride:c}],this.iboHandle)}draw(a){a.drawIndexed(this.vaoHandle,this.indices.length)}unbind(a){}getVBOData(){return pf(this)}dispose(){if(this.removeRef(),this.refCount===0){Xe.meshRepository.remove(this.id);const a=Yt.renderingDevice;a.buffer.destroy(this.vboHandle),a.buffer.destroy(this.iboHandle),a.buffer.vertexArrayDestroy(this.vaoHandle)}}}const Sf=new Float32Array([-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5]),bf=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]),Mf=new Float32Array([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),Ef=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);class Tf{_position=At();_rotation=Qe();_scale=B0(1,1,1);_color=X1(1,1,1,1);mesh;transform=In();constructor(){this.mesh=hr.create("cube",Sf,bf,Mf,Ef),this.updateTransform(),this._color=X1(Math.random(),Math.random(),Math.random(),1)}get position(){return this._position}set position(a){kn(this._position,a),this.updateTransform()}get rotation(){return this._rotation}set rotation(a){Z2(this._rotation,a),this.updateTransform()}get scale(){return this._scale}set scale(a){kn(this._scale,a),this.updateTransform()}get color(){return this._color}updateTransform(){M7(this.transform,this._rotation,this._position,this._scale)}}class k2{name="";children=[];parent=null;isActive=!0;update(a){}onDestroy(){}onSetup(){}onDraw(){}setParent(a){this.parent&&this.parent.removeChild(this),this.parent=a}addChild(a){this.children.push(a),a.parent=this}removeChild(a){if(typeof a=="number"){const c=a;if(c>=0&&c<this.children.length){const v=this.children.splice(c,1)[0];v.parent=null}return}const f=this.children.indexOf(a);f!==-1&&(this.children.splice(f,1),a.parent=null)}getChildByName(a){for(const f of this.children)if(f.name===a)return f;return null}}const Af=(u,a=[])=>{const f=[],c=[];for(c.push(u);c.length>0;){const v=c.shift();f.push(v);for(const h of v.children)c.push(h)}for(;f.length>0;){const v=f.pop();a.push(v)}return a},g7=(u,a)=>{const f=[],c=[];for(c.push(u);c.length>0;){const v=c.shift();f.push(v);for(const h of v.children)c.push(h)}for(;f.length>0;){const v=f.pop();a(v)}};class _f{engine;rootNode;id;flatNodes=new Array(512);constructor(a){this.engine=a,this.rootNode=new k2,this.rootNode.name="root",this.id=Math.random().toString(36).substr(2,9)}setupNodes(a){g7(a,f=>{f.onSetup()})}update(a){this.flatNodes.length=0,Af(this.rootNode,this.flatNodes);for(let f=0;f<this.flatNodes.length;f++)this.flatNodes[f].update(a);for(let f=0;f<this.flatNodes.length;f++)this.flatNodes[f].onDraw();this.engine.renderer.renderingDevice.flushCommands()}onSetup(){this.setupNodes(this.rootNode)}onDestroy(){g7(this.rootNode,a=>{a.onDestroy()})}printSceneGraph(){const a=[],f=v=>"  ".repeat(v),c=(v,h)=>{a.push(`${f(h)}- ${v.name}`);for(const m of v.children)c(m,h+1)};c(this.rootNode,0),console.log(a.join(`
`))}}function y7(u){let a=0;for(let f=0;f<u.length;f++){const c=u.charCodeAt(f);a=(a<<5)-a+c,a|=0}return a}class j1 extends T7{program;uniformLocationCache=new Map;id;static create(a,f){const c=y7(a)+"_"+y7(f);let v=Xe.shaderRepository.get(c);return v||(v=new j1(c,a,f),Xe.shaderRepository.add(c,v)),v.addRef(),v}getId(){return this.id}dispose(){this.removeRef(),this.refCount===0&&(Yt.renderingDevice.shader.destroy(this.program),Xe.shaderRepository.remove(this.id))}constructor(a,f,c){super(),this.id=a;const v=Yt.shaderPreprocessor.getProcessed();this.program=Yt.renderingDevice.shader.create(v+f,v+c)}use(a){a.shader.use(this.program)}getUniformLocation(a){if(this.uniformLocationCache.has(a))return this.uniformLocationCache.get(a);const c=Yt.renderingDevice.shader.getUniformLocation(this.program,a);return c!==null&&this.uniformLocationCache.set(a,c),c}setUniformMatrix4fv(a,f){const c=this.getUniformLocation(a);c!==null&&Yt.renderingDevice.shader.setUniformAtLocation(this.program,c,g0.FLOAT_MAT4,f)}setUniform4fv(a,f){const c=this.getUniformLocation(a);c!==null&&Yt.renderingDevice.shader.setUniformAtLocation(this.program,c,g0.FLOAT_VEC4,f)}setUniform3fv(a,f){const c=this.getUniformLocation(a);c!==null&&Yt.renderingDevice.shader.setUniformAtLocation(this.program,c,g0.FLOAT_VEC3,f)}}const zf=`in vec3 aPosition;\r
in vec3 aNormal;\r
in vec2 aTexCoord;\r
\r
uniform mat4 uModelMatrix;\r
\r
out vec3 vNormal;\r
out vec2 vTexCoord;\r
out vec3 vPosition;\r
\r
void main() {\r
   gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\r
   vNormal = mat3(transpose(inverse(uModelMatrix))) * aNormal;\r
   vPosition = (uModelMatrix * vec4(aPosition, 1.0)).xyz;\r
   vTexCoord = aTexCoord;\r
}\r
`,Cf=`\r
\r
uniform vec4 uColor;\r
\r
in vec3 vNormal;\r
in vec2 vTexCoord;\r
in vec3 vPosition;\r
\r
out vec4 fragColor;\r
\r
void main() {\r
  vec3 normal = normalize(vNormal);\r
\r
  vec3 lightColor = vec3(0.0);\r
  \r
  // Apply directional light\r
  lightColor += ApplyDirectionalLight(dirLight, normal, vPosition);\r
\r
  // Apply point lights\r
  int lightCount = min(pointCount, 32);\r
  for (int i = 0; i < lightCount; i++) {\r
    lightColor += ApplyPointLight(pointLights[i], normal, vPosition);\r
  }\r
\r
  // Apply Spot lights\r
  int spots = min(spotCount, 32);\r
  for (int i = 0; i < spots; i++) {\r
    lightColor += ApplySpotLight(spotLights[i], normal, vPosition);\r
  }\r
\r
  vec3 ambient = vec3(0.1, 0.1, 0.1);\r
  vec3 finalColor = (lightColor + ambient) * uColor.rgb;\r
\r
  fragColor = vec4(finalColor, uColor.a);\r
}\r
`,Of=`\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main() {\r
    fragColor = uColor;\r
}\r
`,we={vertexSource:zf,fragmentSource:Cf,unliFragmentSource:Of};class qt extends k2{_localTransform=In();_worldTransform=In();_position=At();_rotation=Qe();_scale=B0(1,1,1);_localTransformDirty=!0;_worldTransformDirty=!0;static FORWARD=B0(0,0,-1);static BACKWARD=B0(0,0,1);static RIGHT=B0(1,0,0);static LEFT=B0(-1,0,0);static UP=B0(0,1,0);static DOWN=B0(0,-1,0);get localTransform(){return this._localTransformDirty&&this._updateLocalTransform(),this._localTransform}get worldTransform(){return this._worldTransformDirty&&this._updateWorldTransform(),this._worldTransform}get position(){return this._position}set position(a){kn(this._position,a),this._markTransformDirty()}setPosition(a,f,c){typeof a=="number"&&f!==void 0&&c!==void 0?Y2(this._position,a,f,c):kn(this._position,a),this._markTransformDirty()}get rotation(){return this._rotation}set rotation(a){Z2(this._rotation,a),this._markTransformDirty()}setRotation(a,f,c,v){typeof a=="number"&&f!==void 0&&c!==void 0&&v!==void 0?B4(this._rotation,a,f,c,v):Z2(this._rotation,a),this._markTransformDirty()}setRotationFromEuler(a,f,c){if(typeof a=="number"&&f!==void 0&&c!==void 0)v7(this._rotation,a,f,c);else{const v=a;v7(this._rotation,v[0],v[1],v[2])}this._markTransformDirty()}rotateX(a){D4(this._rotation,this._rotation,a),this._markTransformDirty()}rotateY(a){N4(this._rotation,this._rotation,a),this._markTransformDirty()}rotateZ(a){x4(this._rotation,this._rotation,a),this._markTransformDirty()}get scale(){return this._scale}set scale(a){kn(this._scale,a),this._markTransformDirty()}setScale(a,f,c){typeof a=="number"&&f!==void 0&&c!==void 0?Y2(this._scale,a,f,c):kn(this._scale,a),this._markTransformDirty()}setUniformScale(a){Y2(this._scale,a,a,a),this._markTransformDirty()}translate(a){M4(this._position,this._position,a),this._markTransformDirty()}_updateLocalTransform(){M7(this._localTransform,this._rotation,this._position,this._scale),this._localTransformDirty=!1}_updateWorldTransform(){this._localTransformDirty&&this._updateLocalTransform(),this.parent&&this.parent instanceof qt?h4(this._worldTransform,this.parent.worldTransform,this._localTransform):b7(this._worldTransform,this._localTransform),this._worldTransformDirty=!1}_markTransformDirty(){this._localTransformDirty=!0,this._worldTransformDirty=!0,this._markChildrenWorldTransformDirty()}_markChildrenWorldTransformDirty(){for(const a of this.children)a instanceof qt&&(a._worldTransformDirty=!0,a._markChildrenWorldTransformDirty())}setParent(a){super.setParent(a),this._worldTransformDirty=!0}getWorldPosition(a){const f=a||At();return m4(f,this.worldTransform),f}getWorldRotation(a){const f=a||Qe();return y4(f,this.worldTransform),f}getForward(a){const f=a||At();return R0(f,qt.FORWARD,this._rotation),f}getBackward(a){const f=a||At();return R0(f,qt.BACKWARD,this._rotation),f}getRight(a){const f=a||At();return R0(f,qt.RIGHT,this._rotation),f}getLeft(a){const f=a||At();return R0(f,qt.LEFT,this._rotation),f}getUp(a){const f=a||At();return R0(f,qt.UP,this._rotation),f}getDown(a){const f=a||At();return R0(f,qt.DOWN,this._rotation),f}getWorldForward(a){const f=a||At(),c=this.getWorldRotation();return R0(f,qt.FORWARD,c),f}getWorldBackward(a){const f=a||At(),c=this.getWorldRotation();return R0(f,qt.BACKWARD,c),f}getWorldRight(a){const f=a||At(),c=this.getWorldRotation();return R0(f,qt.RIGHT,c),f}getWorldLeft(a){const f=a||At(),c=this.getWorldRotation();return R0(f,qt.LEFT,c),f}getWorldUp(a){const f=a||At(),c=this.getWorldRotation();return R0(f,qt.UP,c),f}getWorldDown(a){const f=a||At(),c=this.getWorldRotation();return R0(f,qt.DOWN,c),f}update(a){}onDestroy(){}onSetup(){}onDraw(){}}class Rf extends qt{viewMatrix=In();cameraTransform=In();cachedWorldPosition=At();cachedWorldRotation=Qe();sceneCommandArray=[{type:"setViewMatrix",matrix:this.viewMatrix},{type:"setCameraPosition",position:this.cachedWorldPosition},{type:"setProjectionMatrix",far:1e3,near:.1,fov:45}];onSetup(){this.updateViewMatrix(),Yt.setupCameraPositionMatrix(this.viewMatrix),this.getWorldPosition(this.cachedWorldPosition),Yt.setupCameraPosition(this.cachedWorldPosition)}update(a){this.updateViewMatrix(),super.update(a)}onDraw(){this.getWorldPosition(this.cachedWorldPosition),Yt.renderingDevice.queueSceneCommands(this.sceneCommandArray)}updateViewMatrix(){this.getWorldPosition(this.cachedWorldPosition),this.getWorldRotation(this.cachedWorldRotation),d4(this.cameraTransform,this.cachedWorldRotation,this.cachedWorldPosition),o4(this.viewMatrix,this.cameraTransform)}}class V1 extends qt{mesh=null;shader=null;color=X1(1,1,1,1);renderDevice=Yt.renderingDevice;uniformLocations=new Map;uniforms=[];commandArray=[null];onSetup(){if(this.shader||(this.shader=j1.create(we.vertexSource,we.fragmentSource)),!this.mesh){const a=new Tf;this.mesh=a.mesh}this.shader&&["uModelMatrix","uLightDirection","uColor"].forEach(f=>{const c=this.renderDevice.shader.getUniformLocation(this.shader.program,f);c!==null&&this.uniformLocations.set(f,c)}),this.uniforms=[{name:"uModelMatrix",value:this.worldTransform,type:g0.FLOAT_MAT4},{name:"uColor",value:this.color,type:g0.FLOAT_VEC4}],this.commandArray[0]={mesh:this.mesh,shader:this.shader,uniforms:this.uniforms}}onDraw(){!this.mesh||!this.shader||(this.uniforms[0].value=this.worldTransform,this.commandArray[0].mesh=this.mesh,this.commandArray[0].shader=this.shader,this.renderDevice.queueCommands(this.commandArray))}}class Df extends qt{color=B0(1,1,1);intensity=1;renderDevice=Yt.renderingDevice;cachedDirection=At();lightCommandArray=[{type:"DirectionalLight",direction:this.cachedDirection,color:this.color,intensity:this.intensity}];onDraw(){this.getForward(this.cachedDirection);const a=this.lightCommandArray[0];a.type==="DirectionalLight"&&(a.color=this.color,a.intensity=this.intensity),this.renderDevice.queueLightCommands(this.lightCommandArray)}}class Nf extends qt{radius=1;intensity=1;color=X1(1,1,1,1);colorVec3=At();cachedWorldPosition=At();lightCommandArray=[{type:"PointLight",position:this.cachedWorldPosition,color:this.colorVec3,range:this.radius,intensity:this.intensity}];constructor(){super(),this.name="PointLightNode"}onDraw(){this.colorVec3[0]=this.color[0],this.colorVec3[1]=this.color[1],this.colorVec3[2]=this.color[2],this.getWorldPosition(this.cachedWorldPosition),this.lightCommandArray[0].range=this.radius,this.lightCommandArray[0].intensity=this.intensity,Yt.renderingDevice.queueLightCommands(this.lightCommandArray)}}class p7 extends qt{range=10;intensity=1;angle=Math.PI/4;color=X1(1,1,1,1);colorVec3=At();cachedWorldPosition=At();cachedDirection=At();lightCommandArray=[{type:"SpotLight",position:this.cachedWorldPosition,direction:this.cachedDirection,color:this.colorVec3,range:this.range,angle:this.angle,intensity:this.intensity}];constructor(){super(),this.name="SpotLightNode"}onDraw(){this.colorVec3[0]=this.color[0],this.colorVec3[1]=this.color[1],this.colorVec3[2]=this.color[2],this.getWorldPosition(this.cachedWorldPosition),this.getWorldForward(this.cachedDirection),this.lightCommandArray[0].range=this.range,this.lightCommandArray[0].angle=this.angle,this.lightCommandArray[0].intensity=this.intensity,Yt.renderingDevice.queueLightCommands(this.lightCommandArray)}}var Ze=typeof Float32Array<"u"?Float32Array:Array;function _7(){var u=new Ze(3);return Ze!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function xf(u,a,f){var c=new Ze(3);return c[0]=u,c[1]=a,c[2]=f,c}function Uf(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u}function Ge(u,a,f){return u[0]=a[0]*f,u[1]=a[1]*f,u[2]=a[2]*f,u}(function(){var u=_7();return function(a,f,c,v,h,m){var d,y;for(f||(f=3),c||(c=0),v?y=Math.min(v*f+c,a.length):y=a.length,d=c;d<y;d+=f)u[0]=a[d],u[1]=a[d+1],u[2]=a[d+2],h(u,u,m),a[d]=u[0],a[d+1]=u[1],a[d+2]=u[2];return a}})();function Bf(){var u=new Ze(4);return Ze!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0,u[3]=0),u}function qe(u,a,f,c){var v=new Ze(4);return v[0]=u,v[1]=a,v[2]=f,v[3]=c,v}(function(){var u=Bf();return function(a,f,c,v,h,m){var d,y;for(f||(f=4),c||(c=0),v?y=Math.min(v*f+c,a.length):y=a.length,d=c;d<y;d+=f)u[0]=a[d],u[1]=a[d+1],u[2]=a[d+2],u[3]=a[d+3],h(u,u,m),a[d]=u[0],a[d+1]=u[1],a[d+2]=u[2],a[d+3]=u[3];return a}})();const Lf=`# WaveFront *.obj file (generated by CINEMA 4D)\r
\r
g grp1\r
v -416.89434 322.467073 -113.06408\r
v -221.707414 336.104397 54.413005\r
v 394.379829 160.6608 -67.182277\r
v -413.583538 330.030621 -76.136042\r
v -354.30325 407.600733 -141.133126\r
v -366.776673 394.615129 -86.418556\r
v 92.888161 480.366159 -206.555528\r
v 337.968018 389.476258 -119.853005\r
v -346.475971 10.066328 132.042142\r
v 837.692553 674.278595 -53.143548\r
v 252.116446 544.569572 -181.288996\r
v -171.349783 351.544079 -38.682113\r
v -356.555479 5.903915 57.388647\r
v -285.420264 15.571926 93.741838\r
v -407.260316 704.803783 113.879397\r
v -405.343607 761.586707 106.354375\r
v 896.032147 766.645098 -16.521053\r
v 427.974036 401.46343 -64.801691\r
v -334.072096 435.250669 52.559886\r
v 855.185693 808.524661 -55.766975\r
v -359.476336 73.157443 71.960574\r
v 969.748158 637.396065 -11.231933\r
v 823.652945 823.775802 86.765612\r
v 749.909866 858.366001 96.800303\r
v -272.700835 393.748379 98.998644\r
v -243.3328 307.615601 -36.068258\r
v 948.594647 634.806431 54.80984\r
v -109.104169 709.297363 -193.349576\r
v 709.067617 746.100844 -72.683193\r
v -410.399075 627.160593 119.233862\r
v -400.613291 99.775148 88.317275\r
v -413.810059 610.422294 -62.520071\r
v -446.475044 586.620492 17.346889\r
v -211.011693 391.749392 88.4056\r
v 165.400033 360.030461 -66.770657\r
v 344.183333 401.452425 -81.507669\r
v 742.12012 823.207931 -160.592319\r
v -391.33742 471.564045 36.264156\r
v 478.132261 8.420955 109.75935\r
v -342.649814 10.059385 -141.660101\r
v -48.883079 865.496052 -44.175993\r
v 970.652806 685.19475 46.784119\r
v -36.194803 348.775962 23.447017\r
v -385.723062 40.188375 79.704456\r
v 359.798732 206.147392 -56.270625\r
v 923.327934 651.449956 -9.882474\r
v -170.887577 338.687903 5.482549\r
v 867.184382 725.729067 63.937548\r
v 670.645818 819.481955 -59.210472\r
v -357.325729 73.156822 -81.964034\r
v 410.988185 11.014309 145.289324\r
v 336.027251 753.244582 -144.016557\r
v 895.209843 766.661214 41.540315\r
v 778.483856 788.465807 -77.504587\r
v 843.529131 851.769731 41.035024\r
v -332.474304 435.250669 -61.865995\r
v 846.482112 794.144781 87.410008\r
v -402.834637 814.148077 83.561251\r
v 761.331797 863.02964 173.235382\r
v -353.11688 798.071666 -167.686474\r
v 938.783319 640.885225 61.977629\r
v -39.120283 487.196326 -209.409393\r
v -13.374821 838.200426 -101.485119\r
v 403.109345 564.331168 -190.919383\r
v -443.642554 721.665004 -52.773536\r
v -279.866653 327.063897 50.300976\r
v -390.081047 510.539105 46.872035\r
v 937.920318 611.983632 13.098526\r
v 475.754478 8.700959 -91.655077\r
v 402.419598 54.726961 -68.340063\r
v 529.812328 721.866896 -93.365308\r
v -376.725861 483.946679 -99.098402\r
v -316.627953 326.699635 7.259392\r
v -172.526515 409.77251 -100.943905\r
v 837.57406 642.017787 50.891414\r
v 822.791568 702.36598 -61.680429\r
v -212.210713 539.059297 -209.371444\r
v -30.46607 599.002823 -218.927279\r
v -269.954868 447.728416 101.020637\r
v 132.42303 397.844714 -137.060492\r
v 836.901901 675.278121 77.542593\r
v -359.242721 849.577343 120.442904\r
v -331.236832 304.329647 -123.754443\r
v 711.223896 689.185178 76.179032\r
v 685.312087 630.807252 35.936139\r
v 170.43269 469.908669 -166.636789\r
v 742.039914 892.05485 -30.547736\r
v -379.606516 537.300041 -5.300033\r
v -382.170463 863.267112 -5.33509\r
v 311.4406 441.226987 -132.800772\r
v 52.265744 344.840782 -65.175937\r
v 530.574349 579.044179 66.723517\r
v 528.810742 502.925515 38.462706\r
v 444.920495 10.058263 -129.469839\r
v 765.879925 863.041748 -151.911042\r
v 538.94291 549.915756 109.840924\r
v 463.232858 565.772951 -169.506893\r
v 402.251777 6.077543 -60.479\r
v 493.172165 416.261402 59.344116\r
v 452.401037 380.696662 12.952109\r
v 569.075654 655.564951 -70.961786\r
v -373.288303 381.269183 -1.357204\r
v 345.640243 526.429139 -187.096498\r
v 400.379413 6.140622 71.700712\r
v 378.135166 395.760259 63.769832\r
v 478.89714 449.760022 108.370989\r
v 596.183374 535.872065 5.96894\r
v 421.871102 402.83251 75.087168\r
v 891.497601 784.670977 12.448708\r
v 712.41436 618.954052 7.075325\r
v 524.517848 530.979344 -90.672308\r
v -293.412655 862.989716 123.148296\r
v 427.562461 360.245486 93.68365\r
v -390.38712 308.12027 -57.412387\r
v -318.325211 489.463313 -170.210548\r
v -319.971361 867.567223 52.344251\r
v 507.090352 628.32821 -109.955212\r
v 409.441579 224.438052 78.55463\r
v -438.653805 296.45662 3.38626\r
v 134.733366 819.013148 -114.558946\r
v 392.347351 160.666003 78.170674\r
v 69.181016 396.896411 -158.559168\r
v 780.265664 882.132413 -45.456508\r
v -184.530753 782.580771 -163.178533\r
v -278.488073 736.767806 -194.463711\r
v 381.997225 646.165879 -179.796088\r
v -361.901083 279.056284 -51.933211\r
v -402.215997 761.586707 -117.629541\r
v 396.97656 190.586222 115.929477\r
v -379.380409 39.826483 -119.174229\r
v 472.949607 424.875813 -86.409746\r
v 375.40791 247.697543 133.419001\r
v 422.963182 391.989926 154.539342\r
v -115.85579 800.284605 -164.707823\r
v 343.467263 206.294626 -74.628854\r
v 740.101854 822.955025 -74.245983\r
v 352.017923 197.308004 113.555862\r
v 393.431976 466.298182 189.621551\r
v 355.022066 370.030523 155.738605\r
v -175.926294 439.237847 -87.994888\r
v 306.533745 487.954468 -170.568597\r
v -457.432649 771.684003 -6.661564\r
v -356.009353 709.120355 -172.428365\r
v 941.148283 636.541803 -35.836609\r
v -357.661306 798.071666 157.762732\r
v -403.921943 704.803783 -125.198296\r
v -199.345406 622.913696 -204.904113\r
v 523.181075 493.028767 -25.345132\r
v 740.897547 892.05485 51.262885\r
v -390.508906 311.3033 -129.709456\r
v -116.98279 431.471725 -124.054838\r
v -401.29974 813.688194 -89.763539\r
v 778.688533 882.132366 67.226364\r
v -419.888579 322.465473 101.384599\r
v -393.976901 311.311976 118.764155\r
v -456.04246 308.4887 -6.373709\r
v -279.84413 811.553117 -171.011291\r
v -397.990691 99.76316 -99.461349\r
v -416.144611 618.140355 47.46768\r
v 777.102502 859.240894 88.418749\r
v 532.550688 416.617931 6.414015\r
v -318.339141 867.575533 -61.292652\r
v -242.085478 414.404058 -67.246378\r
v -40.844134 405.251573 -158.01473\r
v 406.382418 59.690656 83.146357\r
v 762.461351 804.614577 193.428752\r
v 259.33106 372.517538 3.621804\r
v -132.163336 408.511681 -1.845712\r
v -353.309041 544.320655 -168.064265\r
v 768.62177 843.327318 -82.221467\r
v 405.07744 71.851089 120.238283\r
v -383.760853 213.17999 -119.468735\r
v -322.049412 361.298857 45.042314\r
v 769.699398 908.70301 24.475427\r
v -360.682318 709.126539 162.428342\r
v -353.596953 205.590047 -96.758067\r
v -369.046734 394.615129 76.151933\r
v 521.765069 558.331395 -45.067104\r
v 416.898833 70.617632 -91.156344\r
v 377.084074 39.467001 -85.755985\r
v -244.245434 307.616891 29.268815\r
v 411.475077 224.466665 -67.083941\r
v -363.210667 279.058242 41.812481\r
v -352.92186 468.314129 77.278807\r
v -388.374673 424.77353 -34.441027\r
v -25.419796 702.041533 -191.090957\r
v 430.01145 360.245486 -81.700801\r
v -383.345665 40.18622 -90.434186\r
v -306.264444 562.475572 -201.012445\r
v -386.945733 213.180673 108.715196\r
v -147.113079 417.519246 54.183805\r
v -306.372358 305.620172 -39.335165\r
v 797.094266 900.297564 -10.219204\r
v 368.168824 45.378687 108.017302\r
v -354.812686 5.905441 -67.313508\r
v -282.690325 15.57195 -101.669461\r
v 358.131585 205.982121 66.324489\r
v 786.22692 903.712385 141.051267\r
v -240.045738 319.298391 -50.797616\r
v -208.844892 851.933509 111.293704\r
v -445.810222 586.528735 -29.794862\r
v -145.544289 417.508495 -58.260555\r
v 400.057645 190.580736 -104.790544\r
v -421.437454 490.599342 -5.884075\r
v 785.893926 632.41931 -10.380544\r
v 341.24313 206.26792 84.411063\r
v -56.100004 364.777361 -54.772509\r
v 334.490122 389.470658 129.245332\r
v 341.744716 401.46152 91.092479\r
v 723.86626 842.989154 -74.714099\r
v 304.786196 395.48077 52.738051\r
v -131.498877 495.661484 -180.057163\r
v 307.608852 441.263213 141.458419\r
v 162.214499 359.950301 72.107734\r
v 191.809337 605.846029 -188.69282\r
v 300.808006 486.165034 177.483758\r
v 234.778884 464.279651 157.800862\r
v 737.738968 822.955586 94.88212\r
v 165.672643 469.908669 174.254138\r
v 340.493171 529.485101 197.390269\r
v 246.956243 544.542263 188.259067\r
v 397.621281 564.331168 202.108498\r
v 306.428592 615.081151 197.805344\r
v 445.786073 481.740764 174.099086\r
v 359.660952 370.615944 -146.424397\r
v 452.642733 566.529628 185.425331\r
v 713.03398 689.104835 -56.25895\r
v -289.859866 862.989716 -131.284778\r
v 448.664078 643.362002 169.791297\r
v 501.07897 620.852165 126.707831\r
v 376.828059 646.165879 190.393832\r
v 422.888762 741.454114 138.461074\r
v 243.663267 711.289694 172.614192\r
v 331.874945 753.244582 153.350915\r
v 186.4732 605.805018 193.454795\r
v 333.532895 809.924545 116.208652\r
v 136.864136 720.675823 172.768609\r
v 226.031827 785.112976 129.859641\r
v 379.804632 395.763658 -53.185747\r
v 131.558345 818.800721 118.477496\r
v 478.844915 780.571105 105.346763\r
v 233.994378 843.074829 68.698288\r
v -245.169021 452.249969 -61.081948\r
v 341.07122 867.924867 72.328631\r
v 406.482856 74.688333 -109.080032\r
v 526.998974 721.865123 108.123547\r
v 560.058505 656.605513 88.837129\r
v -440.373252 319.119924 -22.03702\r
v -382.55916 39.820696 108.542627\r
v -444.943634 721.664201 40.373393\r
v 52.307525 332.802968 0.73102\r
v 571.483007 759.546564 94.049337\r
v 753.186486 759.729538 94.213141\r
v -470.286175 660.472249 -6.52553\r
v -284.510054 811.553117 163.138987\r
v -389.09539 695.020313 -5.432408\r
v 453.229987 643.362002 -157.196409\r
v 306.139794 395.48077 -44.199896\r
v 767.565951 804.613058 -172.060821\r
v -354.370315 77.874168 -114.973613\r
v -133.997411 859.952811 117.401148\r
v -379.34595 483.946809 88.541957\r
v -357.863501 544.32038 158.135036\r
v -243.86874 414.404058 60.461977\r
v 229.569484 785.112976 -123.489756\r
v -411.591425 326.71693 56.899575\r
v 12.476197 789.394557 -148.659422\r
v 645.940871 831.350283 61.555548\r
v 561.975395 812.334586 64.133382\r
v -357.446133 77.878803 105.040824\r
v -105.097608 612.662589 -198.363779\r
v 564.998407 830.364227 7.889874\r
v 53.5822 703.45715 -193.057988\r
v -287.109799 634.594785 -204.898428\r
v 345.886815 886.878195 5.369028\r
v -408.063468 635.510149 -6.038392\r
v 355.052066 197.305615 -103.674562\r
v -208.441239 391.777986 -94.264018\r
v 563.546342 812.334743 -48.415889\r
v 789.859167 903.710691 -119.031241\r
v 481.596322 780.569842 -91.929123\r
v 235.957814 875.098507 3.295308\r
v 342.818158 868.503798 -62.312419\r
v 336.641415 809.930528 -106.844354\r
v 235.811191 843.072988 -62.137734\r
v 752.316883 858.363843 -75.815483\r
v -130.667158 859.952811 -121.094944\r
v 721.496207 842.990186 94.900288\r
v 377.840376 30.12078 -111.88435\r
v 622.028906 838.690241 -9.795094\r
v 766.028737 843.324887 103.656502\r
v 49.815351 870.297923 0.696282\r
v 90.132866 852.842754 91.557116\r
v 92.684726 852.844205 -88.993933\r
v -309.243779 326.300766 -83.898458\r
v -282.205753 882.979163 -3.935452\r
v 985.755702 683.304138 -8.641292\r
v 239.193368 464.345067 -151.314504\r
v -16.174883 838.199167 101.073252\r
v -285.237841 325.508629 -8.575293\r
v -50.07706 865.496871 42.792209\r
v 8.630081 789.419802 148.877656\r
v 177.890149 344.139778 2.484599\r
v 311.832156 615.081151 -189.170984\r
v 48.17901 703.45715 193.891626\r
v -350.625392 468.30894 -87.102459\r
v 75.543305 595.305901 218.735112\r
v -30.734555 702.041533 189.525625\r
v -36.525183 598.961148 214.99625\r
v 86.993781 480.366159 215.570647\r
v -45.038298 487.196326 214.409402\r
v 128.531724 397.844714 141.615462\r
v -110.574375 612.717255 193.855065\r
v -311.180378 286.639505 25.239808\r
v 64.699061 396.896411 162.416144\r
v 50.425529 344.840782 66.61111\r
v 167.912796 717.179087 -166.078275\r
v -45.269405 405.251573 158.901131\r
v 573.89428 759.551342 -78.044503\r
v -97.596979 380.985023 39.687979\r
v 403.935429 472.305212 -179.617913\r
v 779.270271 859.242464 -66.681837\r
v -178.310868 439.239638 83.061199\r
v -425.34003 696.037587 -5.938809\r
v 737.344961 823.209394 181.248165\r
v -406.909972 627.160593 -130.638325\r
v -120.405031 431.540092 121.029051\r
v -136.508732 495.785181 178.723737\r
v -175.277787 409.799866 96.088567\r
v 841.119363 785.656541 -65.386017\r
v -283.809261 736.767806 186.613288\r
v -335.032141 366.014682 62.491108\r
v -229.855849 393.816151 138.796697\r
v 894.546159 627.749823 -11.304928\r
v -311.487606 326.275894 75.233136\r
v 81.663206 595.36123 -219.541779\r
v -334.55757 304.334188 114.462091\r
v -388.620255 510.53771 -57.737608\r
v -356.160896 205.589577 86.855864\r
v -267.029066 447.728416 -108.510754\r
v -355.739709 849.577343 -130.425352\r
v -261.798086 439.090599 -179.564642\r
v 450.473289 481.740764 -161.576051\r
v -320.668035 361.295652 -54.008776\r
v -337.168208 382.088488 -79.27533\r
v -246.77896 452.249969 54.213852\r
v 378.985672 247.695574 -122.881912\r
v -267.796161 438.267408 171.761327\r
v 429.906848 383.93391 -141.023807\r
v -221.770909 397.252185 -146.568885\r
v -358.100723 407.603455 131.194282\r
v -217.973989 539.059297 203.365772\r
v -322.953038 489.46393 161.257272\r
v -205.659542 851.934248 -117.079488\r
v -269.826218 393.7613 -106.574839\r
v -311.757654 562.476188 192.383895\r
v 426.589928 741.454114 -126.598092\r
v -204.988963 622.913696 199.259402\r
v -114.458145 709.297363 190.075587\r
v -292.719076 634.594785 196.810044\r
v -120.409647 800.284605 161.416803\r
v -189.102267 782.589741 157.975257\r
\r
vt 0.735352 0.796875 0\r
vt 0.738281 0.822998 0\r
vt 0.746582 0.941101 0\r
vt 0.767578 0.809692 0\r
vt 0.769531 0.208008 0\r
vt 0.875 0.407227 0\r
vt 0.840332 0.546631 0\r
vt 0.056183 0.605225 0\r
vt 0.746582 0.941101 0\r
vt 0.65918 0.521729 0\r
vt 0.866699 0.439941 0\r
vt 0.841309 0.611084 0\r
vt 0.754395 0.823853 0\r
vt 0.752441 0.795532 0\r
vt 0.703125 0.747314 0\r
vt 0.724121 0.752563 0\r
vt 0.75293 0.759399 0\r
vt 0.087708 0.592773 0\r
vt 0.05191 0.611328 0\r
vt 0.054047 0.609619 0\r
vt 0.922363 0.38623 0\r
vt 0.72168 0.982132 0\r
vt 0.715332 0.97966 0\r
vt 0.130249 0.566895 0\r
vt 0.922363 0.38623 0\r
vt 0.758301 0.953247 0\r
vt 0.76416 0.859741 0\r
vt 0.847656 0.5 0\r
vt 0.874512 0.44043 0\r
vt 0.73877 0.957397 0\r
vt 0.746582 0.941101 0\r
vt 0.701172 0.855225 0\r
vt 0.774414 0.730469 0\r
vt 0.733398 0.374023 0\r
vt 0.073425 0.602539 0\r
vt 0.659668 0.810913 0\r
vt 0.723145 0.5 0\r
vt 0.822266 0.515869 0\r
vt 0.855957 0.421875 0\r
vt 0.833496 0.555664 0\r
vt 0.108459 0.559082 0\r
vt 0.054047 0.609619 0\r
vt 0.752441 0.20459 0\r
vt 0.717773 0.293457 0\r
vt 0.923828 0.555664 0\r
vt 0.067444 0.629395 0\r
vt 0.916016 0.369629 0\r
vt 0.915039 0.397461 0\r
vt 0.754395 0.952057 0\r
vt 0.848633 0.486328 0\r
vt 0.840332 0.453613 0\r
vt 0.131348 0.556641 0\r
vt 0.739746 0.962952 0\r
vt 0.70459 0.373047 0\r
vt 0.915039 0.602783 0\r
vt 0.702637 0.815796 0\r
vt 0.693848 0.411621 0\r
vt 0.772949 0.296387 0\r
vt 0.919922 0.601318 0\r
vt 0.726074 0.412109 0\r
vt 0.716797 0.441406 0\r
vt 0.108459 0.559082 0\r
vt 0.104065 0.580322 0\r
vt 0.067688 0.59375 0\r
vt 0.060486 0.601563 0\r
vt 0.747559 0.911011 0\r
vt 0.62793 0.570313 0\r
vt 0.788574 0.5 0\r
vt 0.866699 0.439941 0\r
vt 0.774414 0.269531 0\r
vt 0.135864 0.539551 0\r
vt 0.13208 0.548584 0\r
vt 0.120789 0.560547 0\r
vt 0.117676 0.54248 0\r
vt 0.123962 0.556641 0\r
vt 0.76123 0.951813 0\r
vt 0.707031 0.868286 0\r
vt 0.769531 0.330566 0\r
vt 0.922363 0.614014 0\r
vt 0.814453 0.583496 0\r
vt 0.061676 0.616455 0\r
vt 0.670898 0.864014 0\r
vt 0.94043 0.512695 0\r
vt 0.154175 0.537109 0\r
vt 0.052734 0.61792 0\r
vt 0.659668 0.810913 0\r
vt 0.878906 0.424316 0\r
vt 0.875 0.407227 0\r
vt 0.867188 0.421875 0\r
vt 0.077698 0.58252 0\r
vt 0.716797 0.949341 0\r
vt 0.874023 0.476563 0\r
vt 0.822754 0.437012 0\r
vt 0.828613 0.406738 0\r
vt 0.868652 0.603516 0\r
vt 0.058838 0.610352 0\r
vt 0.717773 0.958801 0\r
vt 0.717773 0.516602 0\r
vt 0.888184 0.54834 0\r
vt 0.856445 0.549805 0\r
vt 0.841797 0.604736 0\r
vt 0.143677 0.561035 0\r
vt 0.921387 0.367188 0\r
vt 0.753418 0.951385 0\r
vt 0.833496 0.444824 0\r
vt 0.077698 0.58252 0\r
vt 0.667969 0.830566 0\r
vt 0.659668 0.810913 0\r
vt 0.943848 0.521729 0\r
vt 0.911133 0.549805 0\r
vt 0.922363 0.614014 0\r
vt 0.592285 0.609131 0\r
vt 0.173096 0.575928 0\r
vt 0.052734 0.61792 0\r
vt 0.72168 0.98716 0\r
vt 0.765625 0.923279 0\r
vt 0.855957 0.578369 0\r
vt 0.733398 0.374023 0\r
vt 0.065369 0.607422 0\r
vt 0.728516 0.963013 0\r
vt 0.814453 0.416504 0\r
vt 0.916016 0.630371 0\r
vt 0.82666 0.547607 0\r
vt 0.093018 0.569336 0\r
vt 0.763672 0.948914 0\r
vt 0.874023 0.523682 0\r
vt 0.850586 0.473145 0\r
vt 0.873047 0.487793 0\r
vt 0.822266 0.484375 0\r
vt 0.735352 0.928955 0\r
vt 0.767578 0.809692 0\r
vt 0.752441 0.795532 0\r
vt 0.730469 0.52417 0\r
vt 0.874512 0.55957 0\r
vt 0.05191 0.611328 0\r
vt 0.683105 0.879272 0\r
vt 0.773438 0.860962 0\r
vt 0.867188 0.421875 0\r
vt 0.875 0.407227 0\r
vt 0.92334 0.550049 0\r
vt 0.888184 0.54834 0\r
vt 0.867188 0.578369 0\r
vt 0.044708 0.604736 0\r
vt 0.939941 0.390137 0\r
vt 0.716309 0.941895 0\r
vt 0.765137 0.832642 0\r
vt 0.897461 0.522217 0\r
vt 0.855957 0.578369 0\r
vt 0.848145 0.580078 0\r
vt 0.852539 0.604492 0\r
vt 0.759277 0.944916 0\r
vt 0.739746 0.962952 0\r
vt 0.753418 0.859253 0\r
vt 0.801758 0.703125 0\r
vt 0.753906 0.5 0\r
vt 0.788574 0.550293 0\r
vt 0.801758 0.297363 0\r
vt 0.15625 0.567871 0\r
vt 0.910645 0.386719 0\r
vt 0.791504 0.96167 0\r
vt 0.865234 0.548828 0\r
vt 0.748047 0.963379 0\r
vt 0.73877 0.957397 0\r
vt 0.750977 0.973083 0\r
vt 0.739746 0.962952 0\r
vt 0.915527 0.539063 0\r
vt 0.705078 0.960846 0\r
vt 0.76416 0.859741 0\r
vt 0.700195 0.53833 0\r
vt 0.775391 0.237305 0\r
vt 0.862305 0.580078 0\r
vt 0.817871 0.557617 0\r
vt 0.104065 0.580322 0\r
vt 0.922852 0.380371 0\r
vt 0.678223 0.799805 0\r
vt 0.767578 0.809692 0\r
vt 0.700195 0.461914 0\r
vt 0.828613 0.593506 0\r
vt 0.065369 0.607422 0\r
vt 0.933594 0.370605 0\r
vt 0.73877 0.957397 0\r
vt 0.749023 0.948486 0\r
vt 0.654297 0.761353 0\r
vt 0.765137 0.90918 0\r
vt 0.90625 0.625488 0\r
vt 0.13208 0.548584 0\r
vt 0.077698 0.58252 0\r
vt 0.728516 0.963013 0\r
vt 0.727051 0.97348 0\r
vt 0.797852 0.763062 0\r
vt 0.921387 0.633057 0\r
vt 0.824707 0.596436 0\r
vt 0.059326 0.585205 0\r
vt 0.765625 0.95755 0\r
vt 0.753418 0.951385 0\r
vt 0.740234 0.913879 0\r
vt 0.679688 0.542969 0\r
vt 0.677246 0.5 0\r
vt 0.822266 0.515869 0\r
vt 0.822266 0.484375 0\r
vt 0.872559 0.451172 0\r
vt 0.92334 0.550049 0\r
vt 0.915039 0.602783 0\r
vt 0.922852 0.619629 0\r
vt 0.911133 0.380859 0\r
vt 0.755859 0.946228 0\r
vt 0.822266 0.484375 0\r
vt 0.767578 0.19043 0\r
vt 0.868652 0.396973 0\r
vt 0.735352 0.796875 0\r
vt 0.70459 0.979355 0\r
vt 0.700195 0.481934 0\r
vt 0.848145 0.419922 0\r
vt 0.862305 0.600098 0\r
vt 0.824707 0.596436 0\r
vt 0.706055 0.956177 0\r
vt 0.856445 0.450684 0\r
vt 0.828613 0.406738 0\r
vt 0.911133 0.619141 0\r
vt 0.865234 0.548828 0\r
vt 0.782715 0.947998 0\r
vt 0.705078 0.960846 0\r
vt 0.718262 0.962006 0\r
vt 0.712402 0.922852 0\r
vt 0.700684 0.9245 0\r
vt 0.773926 0.910217 0\r
vt 0.915039 0.397461 0\r
vt 0.708984 0.971436 0\r
vt 0.943848 0.478516 0\r
vt 0.866699 0.560059 0\r
vt 0.059052 0.604248 0\r
vt 0.060486 0.601563 0\r
vt 0.632324 0.735352 0\r
vt 0.70459 0.373047 0\r
vt 0.748047 0.963379 0\r
vt 0.714844 0.934326 0\r
vt 0.765137 0.832642 0\r
vt 0.862305 0.400391 0\r
vt 0.819336 0.575928 0\r
vt 0.15625 0.567871 0\r
vt 0.143677 0.561035 0\r
vt 0.145752 0.514648 0\r
vt 0.115723 0.587646 0\r
vt 0.750977 0.973083 0\r
vt 0.716309 0.941895 0\r
vt 0.89502 0.424316 0\r
vt 0.862305 0.419922 0\r
vt 0.862305 0.580078 0\r
vt 0.774414 0.730469 0\r
vt 0.157959 0.532471 0\r
vt 0.059875 0.605225 0\r
vt 0.726563 0.940735 0\r
vt 0.88916 0.438965 0\r
vt 0.852539 0.395508 0\r
vt 0.848145 0.580078 0\r
vt 0.700195 0.481934 0\r
vt 0.700195 0.461914 0\r
vt 0.89502 0.401367 0\r
vt 0.837891 0.414063 0\r
vt 0.841309 0.38916 0\r
vt 0.841797 0.395508 0\r
vt 0.683594 0.563232 0\r
vt 0.093018 0.569336 0\r
vt 0.715332 0.97966 0\r
vt 0.730469 0.476074 0\r
vt 0.848633 0.513672 0\r
vt 0.710938 0.333008 0\r
vt 0.923828 0.555664 0\r
vt 0.940918 0.618896 0\r
vt 0.837891 0.586182 0\r
vt 0.061676 0.616455 0\r
vt 0.054077 0.608154 0\r
vt 0.05191 0.611328 0\r
vt 0.723633 0.982315 0\r
vt 0.76709 0.934875 0\r
vt 0.627441 0.522461 0\r
vt 0.787109 0.185547 0\r
vt 0.763672 0.948914 0\r
vt 0.749023 0.948486 0\r
vt 0.718262 0.962006 0\r
vt 0.700195 0.518311 0\r
vt 0.92334 0.550049 0\r
vt 0.130249 0.566895 0\r
vt 0.077881 0.612305 0\r
vt 0.054077 0.608154 0\r
vt 0.76709 0.934875 0\r
vt 0.717773 0.293457 0\r
vt 0.86377 0.590576 0\r
vt 0.757813 0.533691 0\r
vt 0.787598 0.522705 0\r
vt 0.145752 0.514648 0\r
vt 0.769531 0.948151 0\r
vt 0.728516 0.963013 0\r
vt 0.736328 0.940002 0\r
vt 0.687012 0.820313 0\r
vt 0.867676 0.40918 0\r
vt 0.872559 0.549072 0\r
vt 0.845215 0.55542 0\r
vt 0.712402 0.848755 0\r
vt 0.741699 0.5 0\r
vt 0.769531 0.330566 0\r
vt 0.772949 0.296387 0\r
vt 0.873047 0.512451 0\r
vt 0.717773 0.293457 0\r
vt 0.862305 0.419922 0\r
vt 0.837891 0.414063 0\r
vt 0.054382 0.603516 0\r
vt 0.707031 0.868286 0\r
vt 0.900879 0.614502 0\r
vt 0.867188 0.578369 0\r
vt 0.054077 0.608154 0\r
vt 0.694336 0.873779 0\r
vt 0.679688 0.519775 0\r
vt 0.65918 0.478516 0\r
vt 0.852539 0.604492 0\r
vt 0.150635 0.523193 0\r
vt 0.056458 0.624756 0\r
vt 0.72168 0.982132 0\r
vt 0.70459 0.979355 0\r
vt 0.80127 0.675537 0\r
vt 0.723633 0.982315 0\r
vt 0.708984 0.971436 0\r
vt 0.731934 0.916687 0\r
vt 0.746582 0.710205 0\r
vt 0.73877 0.668457 0\r
vt 0.128662 0.526855 0\r
vt 0.081177 0.622559 0\r
vt 0.05191 0.611328 0\r
vt 0.740723 0.860474 0\r
vt 0.868652 0.396973 0\r
vt 0.901855 0.555908 0\r
vt 0.623535 0.760376 0\r
vt 0.819336 0.424316 0\r
vt 0.817871 0.557617 0\r
vt 0.763184 0.947968 0\r
vt 0.723633 0.98719 0\r
vt 0.712402 0.848755 0\r
vt 0.874023 0.523682 0\r
vt 0.875 0.407227 0\r
vt 0.841797 0.604736 0\r
vt 0.146851 0.5896 0\r
vt 0.115723 0.587646 0\r
vt 0.087708 0.592773 0\r
vt 0.629883 0.80481 0\r
vt 0.848633 0.513672 0\r
vt 0.641113 0.681641 0\r
vt 0.758301 0.953247 0\r
vt 0.716797 0.949341 0\r
vt 0.758301 0.938629 0\r
vt 0.787109 0.814819 0\r
vt 0.628418 0.544922 0\r
vt 0.061676 0.616455 0\r
vt 0.048004 0.626709 0\r
vt 0.735352 0.796875 0\r
vt 0.91748 0.56665 0\r
vt 0.858887 0.560059 0\r
vt 0.057251 0.608643 0\r
vt 0.915039 0.397461 0\r
vt 0.778809 0.840698 0\r
vt 0.866699 0.439941 0\r
vt 0.058838 0.610352 0\r
vt 0.054077 0.608154 0\r
vt 0.767578 0.942078 0\r
vt 0.712891 0.984741 0\r
vt 0.754395 0.823853 0\r
vt 0.852539 0.604492 0\r
vt 0.828613 0.593506 0\r
vt 0.743652 0.929321 0\r
vt 0.758301 0.938629 0\r
vt 0.679688 0.45752 0\r
vt 0.702637 0.815796 0\r
vt 0.687012 0.820313 0\r
vt 0.678223 0.799805 0\r
vt 0.696289 0.797729 0\r
vt 0.120789 0.560547 0\r
vt 0.056183 0.605225 0\r
vt 0.75293 0.804199 0\r
vt 0.866699 0.439941 0\r
vt 0.132568 0.562744 0\r
vt 0.054382 0.603516 0\r
vt 0.939941 0.390137 0\r
vt 0.762695 0.948456 0\r
vt 0.707031 0.868286 0\r
vt 0.719238 0.796387 0\r
vt 0.738281 0.804932 0\r
vt 0.910645 0.613525 0\r
vt 0.094849 0.603271 0\r
vt 0.058838 0.610352 0\r
vt 0.049438 0.606689 0\r
vt 0.765137 0.832642 0\r
vt 0.73877 0.331543 0\r
vt 0.92041 0.537354 0\r
vt 0.162842 0.517334 0\r
vt 0.865234 0.451172 0\r
vt 0.80127 0.675537 0\r
vt 0.80127 0.324707 0\r
vt 0.677246 0.5 0\r
vt 0.699219 0.5 0\r
vt 0.873047 0.487793 0\r
vt 0.875 0.593018 0\r
vt 0.047821 0.597412 0\r
vt 0.073975 0.621826 0\r
vt 0.754395 0.823853 0\r
vt 0.87207 0.5 0\r
vt 0.814941 0.430664 0\r
vt 0.094849 0.603271 0\r
vt 0.069092 0.574219 0\r
vt 0.077881 0.612305 0\r
vt 0.670898 0.864014 0\r
vt 0.881836 0.395508 0\r
vt 0.911133 0.619141 0\r
vt 0.135864 0.539551 0\r
vt 0.931641 0.399414 0\r
vt 0.696289 0.797729 0\r
vt 0.89502 0.401367 0\r
vt 0.856445 0.388672 0\r
vt 0.875 0.593018 0\r
vt 0.911133 0.380859 0\r
vt 0.875 0.407227 0\r
vt 0.86377 0.409668 0\r
vt 0.868652 0.603516 0\r
vt 0.147949 0.546631 0\r
vt 0.847656 0.5 0\r
vt 0.915039 0.602783 0\r
vt 0.919922 0.601318 0\r
vt 0.878906 0.575928 0\r
vt 0.89502 0.598877 0\r
vt 0.837891 0.586182 0\r
vt 0.841309 0.611084 0\r
vt 0.841797 0.604736 0\r
vt 0.735352 0.796875 0\r
vt 0.700195 0.481934 0\r
vt 0.881836 0.395508 0\r
vt 0.868652 0.396973 0\r
vt 0.875 0.593018 0\r
vt 0.862305 0.600098 0\r
vt 0.706055 0.943695 0\r
vt 0.86377 0.409668 0\r
vt 0.866699 0.560059 0\r
vt 0.867676 0.591309 0\r
vt 0.712402 0.922852 0\r
vt 0.772949 0.296387 0\r
vt 0.910645 0.613525 0\r
vt 0.939941 0.609863 0\r
vt 0.837891 0.586182 0\r
vt 0.056458 0.624756 0\r
vt 0.723145 0.812988 0\r
vt 0.822266 0.515869 0\r
vt 0.875 0.407227 0\r
vt 0.862305 0.400391 0\r
vt 0.856445 0.611328 0\r
vt 0.154175 0.537109 0\r
vt 0.059326 0.585205 0\r
vt 0.045807 0.618896 0\r
vt 0.758301 0.938629 0\r
vt 0.726563 0.940735 0\r
vt 0.714844 0.934326 0\r
vt 0.878906 0.424316 0\r
vt 0.865234 0.451172 0\r
vt 0.128662 0.526855 0\r
vt 0.723633 0.98719 0\r
vt 0.735352 0.928955 0\r
vt 0.774414 0.922363 0\r
vt 0.700195 0.53833 0\r
vt 0.840332 0.453613 0\r
vt 0.73877 0.957397 0\r
vt 0.753418 0.859253 0\r
vt 0.79834 0.541016 0\r
vt 0.820801 0.5 0\r
vt 0.907227 0.562256 0\r
vt 0.866699 0.560059 0\r
vt 0.059052 0.604248 0\r
vt 0.076233 0.625488 0\r
vt 0.753418 0.951385 0\r
vt 0.765625 0.923279 0\r
vt 0.873047 0.487793 0\r
vt 0.897461 0.478027 0\r
vt 0.888184 0.45166 0\r
vt 0.922363 0.38623 0\r
vt 0.775879 0.952911 0\r
vt 0.94043 0.487305 0\r
vt 0.757813 0.466309 0\r
vt 0.172241 0.555664 0\r
vt 0.123169 0.566162 0\r
vt 0.049438 0.606689 0\r
vt 0.754395 0.940033 0\r
vt 0.724609 0.932617 0\r
vt 0.878906 0.424316 0\r
vt 0.73877 0.668457 0\r
vt 0.145752 0.514648 0\r
vt 0.121033 0.517822 0\r
vt 0.719238 0.796387 0\r
vt 0.717773 0.483398 0\r
vt 0.825684 0.531006 0\r
vt 0.819336 0.424316 0\r
vt 0.817871 0.442383 0\r
vt 0.900879 0.382324 0\r
vt 0.743652 0.978409 0\r
vt 0.715332 0.97966 0\r
vt 0.743652 0.929321 0\r
vt 0.723145 0.812988 0\r
vt 0.88916 0.438965 0\r
vt 0.845215 0.444824 0\r
vt 0.911133 0.619141 0\r
vt 0.881836 0.604492 0\r
vt 0.166504 0.552002 0\r
vt 0.052734 0.61792 0\r
vt 0.736328 0.940002 0\r
vt 0.741699 0.5 0\r
vt 0.848633 0.513672 0\r
vt 0.824707 0.403809 0\r
vt 0.738281 0.804932 0\r
vt 0.105164 0.532227 0\r
vt 0.093262 0.547363 0\r
vt 0.059326 0.585205 0\r
vt 0.910645 0.386719 0\r
vt 0.739746 0.962952 0\r
vt 0.754395 0.823853 0\r
vt 0.875 0.593018 0\r
vt 0.060486 0.601563 0\r
vt 0.72168 0.982132 0\r
vt 0.725098 0.832275 0\r
vt 0.700195 0.518311 0\r
vt 0.922852 0.619629 0\r
vt 0.108459 0.559082 0\r
vt 0.716797 0.949341 0\r
vt 0.701172 0.855225 0\r
vt 0.73877 0.331543 0\r
vt 0.862305 0.419922 0\r
vt 0.921387 0.633057 0\r
vt 0.922363 0.38623 0\r
vt 0.740234 0.913879 0\r
vt 0.76709 0.934875 0\r
vt 0.767578 0.369629 0\r
vt 0.848145 0.580078 0\r
vt 0.730469 0.476074 0\r
vt 0.828613 0.406738 0\r
vt 0.822754 0.437012 0\r
vt 0.75293 0.804199 0\r
vt 0.76416 0.859741 0\r
vt 0.769531 0.792236 0\r
vt 0.695313 0.702881 0\r
vt 0.731934 0.916687 0\r
vt 0.679688 0.480469 0\r
vt 0.868652 0.396973 0\r
vt 0.89502 0.598877 0\r
vt 0.833496 0.555664 0\r
vt 0.146118 0.526855 0\r
vt 0.705078 0.960846 0\r
vt 0.706543 0.94989 0\r
vt 0.6875 0.862183 0\r
vt 0.779297 0.943756 0\r
vt 0.679688 0.519775 0\r
vt 0.865234 0.548828 0\r
vt 0.782715 0.947998 0\r
vt 0.700195 0.518311 0\r
vt 0.723145 0.5 0\r
vt 0.741699 0.5 0\r
vt 0.845215 0.55542 0\r
vt 0.735352 0.796875 0\r
vt 0.067444 0.629395 0\r
vt 0.762695 0.948456 0\r
vt 0.943848 0.521729 0\r
vt 0.896973 0.488281 0\r
vt 0.045319 0.610352 0\r
vt 0.753906 0.952515 0\r
vt 0.741699 0.5 0\r
vt 0.825684 0.531006 0\r
vt 0.855957 0.421875 0\r
vt 0.915527 0.539063 0\r
vt 0.939453 0.545654 0\r
vt 0.775879 0.952911 0\r
vt 0.716797 0.949341 0\r
vt 0.862305 0.580078 0\r
vt 0.855957 0.578369 0\r
vt 0.087708 0.592773 0\r
vt 0.057251 0.608643 0\r
vt 0.90625 0.374512 0\r
vt 0.919922 0.398926 0\r
vt 0.769531 0.208008 0\r
vt 0.858887 0.44043 0\r
vt 0.868652 0.396973 0\r
vt 0.158081 0.524902 0\r
vt 0.146118 0.526855 0\r
vt 0.755859 0.946228 0\r
vt 0.895996 0.5 0\r
vt 0.627441 0.601563 0\r
vt 0.62793 0.570313 0\r
vt 0.661621 0.592773 0\r
vt 0.166504 0.552002 0\r
vt 0.130615 0.576416 0\r
vt 0.052216 0.592041 0\r
vt 0.670898 0.864014 0\r
vt 0.654297 0.761353 0\r
vt 0.710938 0.333008 0\r
vt 0.683105 0.879272 0\r
vt 0.670898 0.864014 0\r
vt 0.646973 0.827026 0\r
vt 0.773438 0.860962 0\r
vt 0.792969 0.794434 0\r
vt 0.716797 0.558838 0\r
vt 0.069092 0.574219 0\r
vt 0.067444 0.629395 0\r
vt 0.048004 0.626709 0\r
vt 0.660156 0.715332 0\r
vt 0.750977 0.928833 0\r
vt 0.717773 0.516602 0\r
vt 0.867188 0.578369 0\r
vt 0.848145 0.580078 0\r
vt 0.749512 0.955933 0\r
vt 0.746582 0.941101 0\r
vt 0.740234 0.913879 0\r
vt 0.082092 0.560303 0\r
vt 0.726563 0.940735 0\r
vt 0.746582 0.941101 0\r
vt 0.73877 0.668457 0\r
vt 0.62793 0.570313 0\r
vt 0.661621 0.592773 0\r
vt 0.858887 0.44043 0\r
vt 0.933594 0.629639 0\r
vt 0.933594 0.370605 0\r
vt 0.632324 0.735352 0\r
vt 0.757813 0.927124 0\r
vt 0.776855 0.937958 0\r
vt 0.141846 0.504883 0\r
vt 0.06604 0.623291 0\r
vt 0.730469 0.52417 0\r
vt 0.717773 0.483398 0\r
vt 0.82666 0.452637 0\r
vt 0.923828 0.555664 0\r
vt 0.595215 0.574219 0\r
vt 0.919922 0.398926 0\r
vt 0.76123 0.951813 0\r
vt 0.754395 0.952057 0\r
vt 0.757813 0.960541 0\r
vt 0.706055 0.943695 0\r
vt 0.166504 0.552002 0\r
vt 0.822754 0.437012 0\r
vt 0.878906 0.575928 0\r
vt 0.858887 0.560059 0\r
vt 0.86377 0.590576 0\r
vt 0.123169 0.566162 0\r
vt 0.056458 0.624756 0\r
vt 0.940918 0.381348 0\r
vt 0.730957 0.985596 0\r
vt 0.714844 0.934326 0\r
vt 0.679688 0.752319 0\r
vt 0.740723 0.860474 0\r
vt 0.787109 0.814819 0\r
vt 0.056458 0.624756 0\r
vt 0.060272 0.630371 0\r
vt 0.749023 0.948486 0\r
vt 0.654297 0.844971 0\r
vt 0.758301 0.938629 0\r
vt 0.775879 0.931396 0\r
vt 0.933594 0.56543 0\r
vt 0.048004 0.626709 0\r
vt 0.922852 0.380371 0\r
vt 0.718262 0.865112 0\r
vt 0.76709 0.934875 0\r
vt 0.767578 0.809692 0\r
vt 0.123962 0.556641 0\r
vt 0.900879 0.382324 0\r
vt 0.915039 0.397461 0\r
vt 0.621582 0.769531 0\r
vt 0.765625 0.923279 0\r
vt 0.828613 0.406738 0\r
vt 0.919922 0.601318 0\r
vt 0.111328 0.571045 0\r
vt 0.074402 0.626465 0\r
vt 0.749023 0.948486 0\r
vt 0.873047 0.512451 0\r
vt 0.75293 0.240723 0\r
vt 0.741699 0.5 0\r
vt 0.723145 0.5 0\r
vt 0.753906 0.5 0\r
vt 0.730469 0.476074 0\r
vt 0.70459 0.627441 0\r
vt 0.693848 0.588623 0\r
vt 0.077881 0.612305 0\r
vt 0.069397 0.614258 0\r
vt 0.654297 0.844971 0\r
vt 0.820801 0.5 0\r
vt 0.682129 0.333496 0\r
vt 0.862305 0.400391 0\r
vt 0.852539 0.395508 0\r
vt 0.910645 0.613525 0\r
vt 0.922363 0.614014 0\r
vt 0.683594 0.437012 0\r
vt 0.762695 0.948456 0\r
vt 0.726074 0.588135 0\r
vt 0.848633 0.513672 0\r
vt 0.632813 0.644043 0\r
vt 0.093262 0.547363 0\r
vt 0.739746 0.962952 0\r
vt 0.595215 0.574219 0\r
vt 0.746582 0.290039 0\r
vt 0.878906 0.424316 0\r
vt 0.069092 0.574219 0\r
vt 0.061676 0.616455 0\r
vt 0.717773 0.958801 0\r
vt 0.896973 0.488281 0\r
vt 0.866699 0.439941 0\r
vt 0.88916 0.561279 0\r
vt 0.719238 0.796387 0\r
vt 0.723145 0.812988 0\r
vt 0.725098 0.832275 0\r
vt 0.900879 0.385742 0\r
vt 0.679688 0.45752 0\r
vt 0.822754 0.437012 0\r
vt 0.817871 0.442383 0\r
vt 0.819336 0.575928 0\r
vt 0.822754 0.563477 0\r
vt 0.700195 0.53833 0\r
vt 0.700195 0.518311 0\r
vt 0.730469 0.52417 0\r
vt 0.087708 0.592773 0\r
vt 0.052734 0.61792 0\r
vt 0.754395 0.951202 0\r
vt 0.737305 0.948181 0\r
vt 0.895996 0.5 0\r
vt 0.862305 0.419922 0\r
vt 0.858887 0.44043 0\r
vt 0.707031 0.868286 0\r
vt 0.746582 0.710205 0\r
vt 0.841797 0.395508 0\r
vt 0.824707 0.403809 0\r
vt 0.822754 0.563477 0\r
vt 0.724609 0.932617 0\r
vt 0.701172 0.855225 0\r
vt 0.772949 0.703857 0\r
vt 0.788574 0.449707 0\r
vt 0.862305 0.600098 0\r
vt 0.132568 0.562744 0\r
vt 0.060272 0.630371 0\r
vt 0.759277 0.944916 0\r
vt 0.658203 0.563965 0\r
vt 0.754395 0.940033 0\r
vt 0.740723 0.860474 0\r
vt 0.756348 0.909241 0\r
vt 0.753418 0.859253 0\r
vt 0.767578 0.369629 0\r
vt 0.769043 0.394043 0\r
vt 0.05191 0.611328 0\r
vt 0.753418 0.951385 0\r
vt 0.706543 0.94989 0\r
vt 0.736328 0.940002 0\r
vt 0.646973 0.827026 0\r
vt 0.897461 0.478027 0\r
vt 0.867188 0.421875 0\r
vt 0.90625 0.374512 0\r
vt 0.750977 0.973083 0\r
vt 0.724609 0.932617 0\r
vt 0.627441 0.601563 0\r
vt 0.881836 0.408691 0\r
vt 0.855957 0.421875 0\r
vt 0.65918 0.521729 0\r
vt 0.679688 0.519775 0\r
vt 0.847656 0.5 0\r
vt 0.92334 0.550049 0\r
vt 0.631836 0.779785 0\r
vt 0.827148 0.726563 0\r
vt 0.054047 0.609619 0\r
vt 0.916016 0.369629 0\r
vt 0.792969 0.205566 0\r
vt 0.822754 0.437012 0\r
vt 0.822754 0.563477 0\r
vt 0.156006 0.547607 0\r
vt 0.093018 0.569336 0\r
vt 0.780762 0.962646 0\r
vt 0.717773 0.958801 0\r
vt 0.787598 0.477539 0\r
vt 0.858887 0.560059 0\r
vt 0.881836 0.408691 0\r
vt 0.862305 0.419922 0\r
vt 0.856445 0.388672 0\r
vt 0.147339 0.534668 0\r
vt 0.049438 0.606689 0\r
vt 0.759277 0.944916 0\r
vt 0.723633 0.982315 0\r
vt 0.88916 0.561279 0\r
vt 0.89502 0.575928 0\r
vt 0.814941 0.569824 0\r
vt 0.717773 0.706787 0\r
vt 0.900879 0.385742 0\r
vt 0.825684 0.469238 0\r
vt 0.867188 0.578369 0\r
vt 0.814941 0.569824 0\r
vt 0.75293 0.804199 0\r
vt 0.717773 0.706787 0\r
vt 0.710938 0.666992 0\r
vt 0.156006 0.547607 0\r
vt 0.147949 0.546631 0\r
vt 0.89502 0.575928 0\r
vt 0.824707 0.596436 0\r
vt 0.143677 0.561035 0\r
vt 0.077698 0.58252 0\r
vt 0.045807 0.618896 0\r
vt 0.719238 0.972748 0\r
vt 0.738281 0.822998 0\r
vt 0.858887 0.560059 0\r
vt 0.718262 0.865112 0\r
vt 0.712402 0.848755 0\r
vt 0.730469 0.862793 0\r
vt 0.703125 0.747314 0\r
vt 0.775391 0.237305 0\r
vt 0.797852 0.237305 0\r
vt 0.855957 0.421875 0\r
vt 0.162354 0.5 0\r
vt 0.150635 0.523193 0\r
vt 0.104065 0.580322 0\r
vt 0.94043 0.487305 0\r
vt 0.856445 0.450684 0\r
vt 0.874512 0.55957 0\r
vt 0.093262 0.547363 0\r
vt 0.735352 0.972809 0\r
vt 0.693848 0.411621 0\r
vt 0.70459 0.373047 0\r
vt 0.707031 0.868286 0\r
vt 0.694336 0.873779 0\r
vt 0.701172 0.855225 0\r
vt 0.6875 0.862183 0\r
vt 0.75293 0.240723 0\r
vt 0.731934 0.916687 0\r
vt 0.707031 0.868286 0\r
vt 0.700195 0.518311 0\r
vt 0.769531 0.330566 0\r
vt 0.874512 0.44043 0\r
vt 0.049438 0.606689 0\r
vt 0.754395 0.940033 0\r
vt 0.873047 0.512451 0\r
vt 0.775391 0.237305 0\r
vt 0.866699 0.560059 0\r
vt 0.841797 0.604736 0\r
vt 0.077698 0.58252 0\r
vt 0.679688 0.480469 0\r
vt 0.746582 0.290039 0\r
vt 0.848145 0.580078 0\r
vt 0.775879 0.952911 0\r
vt 0.752441 0.20459 0\r
vt 0.787109 0.185547 0\r
vt 0.856445 0.549805 0\r
vt 0.059052 0.604248 0\r
vt 0.723145 0.812988 0\r
vt 0.750977 0.928833 0\r
vt 0.820801 0.5 0\r
vt 0.848633 0.486328 0\r
vt 0.865234 0.451172 0\r
vt 0.104065 0.580322 0\r
vt 0.769531 0.948151 0\r
vt 0.679688 0.752319 0\r
vt 0.820801 0.5 0\r
vt 0.792969 0.205566 0\r
vt 0.819336 0.575928 0\r
vt 0.065369 0.607422 0\r
vt 0.730469 0.862793 0\r
vt 0.738281 0.804932 0\r
vt 0.756348 0.909241 0\r
vt 0.757813 0.466309 0\r
vt 0.824707 0.596436 0\r
vt 0.767578 0.942078 0\r
vt 0.763184 0.949097 0\r
vt 0.748047 0.963379 0\r
vt 0.75293 0.804199 0\r
vt 0.874512 0.55957 0\r
vt 0.755859 0.946228 0\r
vt 0.729004 0.95929 0\r
vt 0.557129 0.612793 0\r
vt 0.792969 0.794434 0\r
vt 0.702637 0.815796 0\r
vt 0.756348 0.909241 0\r
vt 0.746582 0.710205 0\r
vt 0.627441 0.601563 0\r
vt 0.769531 0.948151 0\r
vt 0.758301 0.953247 0\r
vt 0.757813 0.960541 0\r
vt 0.755859 0.946228 0\r
vt 0.765137 0.90918 0\r
vt 0.682129 0.666504 0\r
vt 0.059875 0.605225 0\r
vt 0.057251 0.608643 0\r
vt 0.714844 0.934326 0\r
vt 0.712402 0.922852 0\r
vt 0.712402 0.848755 0\r
vt 0.819336 0.424316 0\r
vt 0.855957 0.578369 0\r
vt 0.123962 0.556641 0\r
vt 0.76123 0.951813 0\r
vt 0.787109 0.814819 0\r
vt 0.769531 0.792236 0\r
vt 0.867676 0.40918 0\r
vt 0.817871 0.557617 0\r
vt 0.752441 0.795532 0\r
vt 0.130615 0.576416 0\r
vt 0.044708 0.604736 0\r
vt 0.730469 0.52417 0\r
vt 0.848633 0.486328 0\r
vt 0.874512 0.44043 0\r
vt 0.912109 0.556885 0\r
vt 0.145752 0.514648 0\r
vt 0.128662 0.526855 0\r
vt 0.867188 0.578369 0\r
vt 0.723633 0.98719 0\r
vt 0.705078 0.960846 0\r
vt 0.753418 0.859253 0\r
vt 0.896973 0.488281 0\r
vt 0.753906 0.5 0\r
vt 0.79834 0.458984 0\r
vt 0.775879 0.952911 0\r
vt 0.760742 0.967773 0\r
vt 0.70459 0.979355 0\r
vt 0.911133 0.549805 0\r
vt 0.727051 0.97348 0\r
vt 0.708984 0.971436 0\r
vt 0.719238 0.972748 0\r
vt 0.901855 0.552246 0\r
vt 0.173096 0.575928 0\r
vt 0.130249 0.566895 0\r
vt 0.054382 0.603516 0\r
vt 0.791504 0.96167 0\r
vt 0.729492 0.980682 0\r
vt 0.729004 0.95929 0\r
vt 0.717773 0.516602 0\r
vt 0.788574 0.449707 0\r
vt 0.755859 0.946228 0\r
vt 0.726563 0.940735 0\r
vt 0.147949 0.546631 0\r
vt 0.111328 0.571045 0\r
vt 0.074402 0.626465 0\r
vt 0.757813 0.533691 0\r
vt 0.82666 0.452637 0\r
vt 0.922852 0.380371 0\r
vt 0.759277 0.944916 0\r
vt 0.76123 0.951813 0\r
vt 0.791992 0.580322 0\r
vt 0.862305 0.400391 0\r
vt 0.939453 0.545654 0\r
vt 0.845215 0.55542 0\r
vt 0.822266 0.515869 0\r
vt 0.873047 0.512451 0\r
vt 0.910645 0.386719 0\r
vt 0.904785 0.393066 0\r
vt 0.758301 0.953247 0\r
vt 0.712402 0.848755 0\r
vt 0.679688 0.480469 0\r
vt 0.875 0.593018 0\r
vt 0.054077 0.608154 0\r
vt 0.719238 0.972748 0\r
vt 0.743652 0.929321 0\r
vt 0.757813 0.533691 0\r
vt 0.822266 0.484375 0\r
vt 0.791992 0.419922 0\r
vt 0.792969 0.205566 0\r
vt 0.862305 0.600098 0\r
vt 0.825684 0.531006 0\r
vt 0.897461 0.522217 0\r
vt 0.897461 0.478027 0\r
vt 0.825684 0.469238 0\r
vt 0.067688 0.59375 0\r
vt 0.729492 0.980682 0\r
vt 0.718262 0.865112 0\r
vt 0.738281 0.822998 0\r
vt 0.840332 0.546631 0\r
vt 0.111328 0.571045 0\r
vt 0.047821 0.597412 0\r
vt 0.716309 0.941895 0\r
vt 0.714844 0.934326 0\r
vt 0.875 0.407227 0\r
vt 0.115723 0.587646 0\r
vt 0.911133 0.380859 0\r
vt 0.922852 0.380371 0\r
vt 0.718262 0.865112 0\r
vt 0.65918 0.478516 0\r
vt 0.819336 0.424316 0\r
vt 0.916016 0.630371 0\r
vt 0.054077 0.608154 0\r
vt 0.706055 0.943695 0\r
vt 0.724609 0.932617 0\r
vt 0.730469 0.862793 0\r
vt 0.765137 0.832642 0\r
vt 0.866699 0.560059 0\r
vt 0.135864 0.539551 0\r
vt 0.108459 0.559082 0\r
vt 0.722168 0.920288 0\r
vt 0.867188 0.421875 0\r
vt 0.874512 0.55957 0\r
vt 0.17334 0.536621 0\r
vt 0.845215 0.444824 0\r
vt 0.856445 0.549805 0\r
vt 0.845215 0.55542 0\r
vt 0.833496 0.555664 0\r
vt 0.147949 0.546631 0\r
vt 0.111328 0.571045 0\r
vt 0.076233 0.625488 0\r
vt 0.72168 0.982132 0\r
vt 0.875 0.593018 0\r
vt 0.710938 0.666992 0\r
vt 0.058838 0.610352 0\r
vt 0.049438 0.606689 0\r
vt 0.60498 0.706787 0\r
vt 0.828613 0.593506 0\r
vt 0.819336 0.575928 0\r
vt 0.13208 0.548584 0\r
vt 0.059875 0.605225 0\r
vt 0.779297 0.943756 0\r
vt 0.682129 0.666504 0\r
vt 0.878906 0.575928 0\r
vt 0.862305 0.580078 0\r
vt 0.056183 0.605225 0\r
vt 0.073975 0.621826 0\r
vt 0.723633 0.98719 0\r
vt 0.715332 0.97966 0\r
vt 0.728027 0.948822 0\r
vt 0.741699 0.5 0\r
vt 0.875 0.407227 0\r
vt 0.88916 0.561279 0\r
vt 0.077881 0.612305 0\r
vt 0.735352 0.972809 0\r
vt 0.70459 0.979355 0\r
vt 0.601074 0.546875 0\r
vt 0.746582 0.290039 0\r
vt 0.94043 0.554688 0\r
vt 0.769531 0.948151 0\r
vt 0.712891 0.984741 0\r
vt 0.735352 0.796875 0\r
vt 0.710938 0.666992 0\r
vt 0.060486 0.601563 0\r
vt 0.081177 0.622559 0\r
vt 0.782715 0.947998 0\r
vt 0.703125 0.747314 0\r
vt 0.881836 0.591309 0\r
vt 0.867676 0.591309 0\r
vt 0.104065 0.580322 0\r
vt 0.654297 0.761353 0\r
vt 0.878906 0.424316 0\r
vt 0.858887 0.44043 0\r
vt 0.817871 0.442383 0\r
vt 0.915039 0.602783 0\r
vt 0.054382 0.603516 0\r
vt 0.716309 0.941895 0\r
vt 0.731934 0.916687 0\r
vt 0.757813 0.927124 0\r
vt 0.765625 0.923279 0\r
vt 0.875 0.593018 0\r
vt 0.057251 0.608643 0\r
vt 0.056458 0.624756 0\r
vt 0.780762 0.962646 0\r
vt 0.749512 0.955933 0\r
vt 0.72168 0.98716 0\r
vt 0.731934 0.916687 0\r
vt 0.717773 0.706787 0\r
vt 0.852539 0.395508 0\r
vt 0.765625 0.95755 0\r
vt 0.715332 0.97966 0\r
vt 0.717773 0.958801 0\r
vt 0.756348 0.909241 0\r
vt 0.724121 0.752563 0\r
vt 0.878906 0.575928 0\r
vt 0.717773 0.706787 0\r
vt 0.061676 0.616455 0\r
vt 0.737305 0.948181 0\r
vt 0.646973 0.827026 0\r
vt 0.726074 0.412109 0\r
vt 0.862305 0.400391 0\r
vt 0.933594 0.56543 0\r
vt 0.911133 0.619141 0\r
vt 0.775879 0.952911 0\r
vt 0.856445 0.388672 0\r
vt 0.841309 0.38916 0\r
vt 0.923828 0.555664 0\r
vt 0.746582 0.710205 0\r
vt 0.162354 0.5 0\r
vt 0.141846 0.504883 0\r
vt 0.073975 0.621826 0\r
vt 0.667969 0.830566 0\r
vt 0.922852 0.569092 0\r
vt 0.130615 0.576416 0\r
vt 0.073425 0.602539 0\r
vt 0.943848 0.478516 0\r
vt 0.88916 0.438965 0\r
vt 0.922852 0.619629 0\r
vt 0.145752 0.514648 0\r
vt 0.069397 0.614258 0\r
vt 0.747559 0.911011 0\r
vt 0.723145 0.5 0\r
vt 0.769043 0.394043 0\r
vt 0.89502 0.598877 0\r
vt 0.166626 0.606689 0\r
vt 0.72168 0.98716 0\r
vt 0.64209 0.775391 0\r
vt 0.775879 0.931396 0\r
vt 0.717773 0.516602 0\r
vt 0.856445 0.450684 0\r
vt 0.65918 0.542725 0\r
vt 0.743652 0.929321 0\r
vt 0.750977 0.928833 0\r
vt 0.703125 0.747314 0\r
vt 0.767578 0.369629 0\r
vt 0.921387 0.633057 0\r
vt 0.117676 0.54248 0\r
vt 0.740234 0.913879 0\r
vt 0.724121 0.752563 0\r
vt 0.874023 0.476563 0\r
vt 0.862305 0.400391 0\r
vt 0.833496 0.444824 0\r
vt 0.881836 0.604492 0\r
vt 0.128662 0.526855 0\r
vt 0.765625 0.95755 0\r
vt 0.754395 0.940033 0\r
vt 0.824707 0.403809 0\r
vt 0.94043 0.554688 0\r
vt 0.922852 0.619629 0\r
vt 0.758301 0.953247 0\r
vt 0.73877 0.957397 0\r
vt 0.743652 0.929321 0\r
vt 0.695313 0.702881 0\r
vt 0.873047 0.487793 0\r
vt 0.822754 0.437012 0\r
vt 0.841797 0.395508 0\r
vt 0.105164 0.532227 0\r
vt 0.07666 0.627686 0\r
vt 0.763672 0.948914 0\r
vt 0.728516 0.963013 0\r
vt 0.723145 0.812988 0\r
vt 0.841797 0.395508 0\r
vt 0.840332 0.546631 0\r
vt 0.73877 0.668457 0\r
vt 0.121033 0.517822 0\r
vt 0.757813 0.960541 0\r
vt 0.833496 0.444824 0\r
vt 0.82666 0.547607 0\r
vt 0.076233 0.625488 0\r
vt 0.729004 0.95929 0\r
vt 0.750977 0.928833 0\r
vt 0.756348 0.909241 0\r
vt 0.757813 0.927124 0\r
vt 0.700195 0.481934 0\r
vt 0.749512 0.955933 0\r
vt 0.712402 0.848755 0\r
vt 0.725098 0.832275 0\r
vt 0.76709 0.934875 0\r
vt 0.852539 0.395508 0\r
vt 0.82666 0.452637 0\r
vt 0.833496 0.555664 0\r
vt 0.081177 0.622559 0\r
vt 0.06604 0.623291 0\r
vt 0.76123 0.951813 0\r
vt 0.747559 0.911011 0\r
vt 0.677246 0.5 0\r
vt 0.814453 0.583496 0\r
vt 0.763184 0.949097 0\r
vt 0.725098 0.832275 0\r
vt 0.723145 0.812988 0\r
vt 0.700195 0.481934 0\r
vt 0.819336 0.575928 0\r
vt 0.147949 0.546631 0\r
vt 0.052216 0.592041 0\r
vt 0.775879 0.952911 0\r
vt 0.716797 0.949341 0\r
vt 0.873047 0.512451 0\r
vt 0.820801 0.5 0\r
vt 0.814453 0.583496 0\r
vt 0.073975 0.621826 0\r
vt 0.06604 0.623291 0\r
vt 0.922363 0.38623 0\r
vt 0.759277 0.944916 0\r
vt 0.679688 0.480469 0\r
vt 0.901855 0.555908 0\r
vt 0.814941 0.569824 0\r
vt 0.129395 0.601318 0\r
vt 0.748047 0.963379 0\r
vt 0.717773 0.958801 0\r
vt 0.841797 0.395508 0\r
vt 0.837891 0.414063 0\r
vt 0.905762 0.543945 0\r
vt 0.767578 0.942078 0\r
vt 0.729492 0.980682 0\r
vt 0.724609 0.932617 0\r
vt 0.738281 0.804932 0\r
vt 0.776855 0.937958 0\r
vt 0.700195 0.461914 0\r
vt 0.727051 0.97348 0\r
vt 0.624512 0.777832 0\r
vt 0.756348 0.909241 0\r
vt 0.824707 0.710449 0\r
vt 0.765625 0.95755 0\r
vt 0.730957 0.985596 0\r
vt 0.706055 0.956177 0\r
vt 0.64209 0.775391 0\r
vt 0.767578 0.942078 0\r
vt 0.767578 0.369629 0\r
vt 0.837891 0.414063 0\r
vt 0.154175 0.537109 0\r
vt 0.848633 0.513672 0\r
vt 0.797852 0.237305 0\r
vt 0.922852 0.569092 0\r
vt 0.868652 0.603516 0\r
vt 0.157959 0.532471 0\r
vt 0.699219 0.5 0\r
vt 0.848633 0.486328 0\r
vt 0.848145 0.419922 0\r
vt 0.828613 0.406738 0\r
vt 0.901855 0.552246 0\r
vt 0.1604 0.540771 0\r
vt 0.128662 0.526855 0\r
vt 0.130249 0.566895 0\r
vt 0.919922 0.398926 0\r
vt 0.874512 0.44043 0\r
vt 0.845215 0.444824 0\r
vt 0.143677 0.561035 0\r
vt 0.763184 0.949097 0\r
vt 0.896973 0.511719 0\r
vt 0.059052 0.604248 0\r
vt 0.054047 0.609619 0\r
vt 0.749023 0.948486 0\r
vt 0.775391 0.762939 0\r
vt 0.911133 0.619141 0\r
vt 0.787598 0.477539 0\r
vt 0.757813 0.466309 0\r
vt 0.082092 0.560303 0\r
vt 0.073425 0.602539 0\r
vt 0.73877 0.957397 0\r
vt 0.765625 0.923279 0\r
vt 0.146851 0.5896 0\r
vt 0.111328 0.571045 0\r
vt 0.728027 0.948822 0\r
vt 0.700195 0.518311 0\r
vt 0.814941 0.430664 0\r
vt 0.915527 0.539063 0\r
vt 0.165405 0.536377 0\r
vt 0.1604 0.540771 0\r
vt 0.093018 0.569336 0\r
vt 0.057251 0.608643 0\r
vt 0.045807 0.618896 0\r
vt 0.678223 0.799805 0\r
vt 0.767578 0.809692 0\r
vt 0.677246 0.5 0\r
vt 0.872559 0.451172 0\r
vt 0.130249 0.566895 0\r
vt 0.056458 0.624756 0\r
vt 0.788574 0.5 0\r
vt 0.87207 0.5 0\r
vt 0.743652 0.978409 0\r
vt 0.728027 0.948822 0\r
vt 0.767578 0.942078 0\r
vt 0.658203 0.436523 0\r
vt 0.769043 0.394043 0\r
vt 0.791992 0.580322 0\r
vt 0.788574 0.569336 0\r
vt 0.788574 0.431152 0\r
vt 0.791992 0.419922 0\r
vt 0.6875 0.862183 0\r
vt 0.776855 0.937958 0\r
vt 0.73877 0.331543 0\r
vt 0.872559 0.549072 0\r
vt 0.868652 0.603516 0\r
vt 0.049438 0.606689 0\r
vt 0.874023 0.523682 0\r
vt 0.814453 0.416504 0\r
vt 0.874512 0.55957 0\r
vt 0.858887 0.560059 0\r
vt 0.80127 0.578369 0\r
vt 0.881836 0.591309 0\r
vt 0.862305 0.580078 0\r
vt 0.856445 0.611328 0\r
vt 0.737305 0.948181 0\r
vt 0.728516 0.963013 0\r
vt 0.722168 0.920288 0\r
vt 0.731934 0.916687 0\r
vt 0.769531 0.948151 0\r
vt 0.754395 0.940033 0\r
vt 0.779297 0.943756 0\r
vt 0.714844 0.934326 0\r
vt 0.92334 0.550049 0\r
vt 0.060272 0.630371 0\r
vt 0.725098 0.832275 0\r
vt 0.723145 0.812988 0\r
vt 0.73877 0.331543 0\r
vt 0.746582 0.290039 0\r
vt 0.710938 0.333008 0\r
vt 0.717773 0.293457 0\r
vt 0.768555 0.964996 0\r
vt 0.739746 0.980804 0\r
vt 0.827148 0.273438 0\r
vt 0.848145 0.419922 0\r
vt 0.05191 0.611328 0\r
vt 0.735352 0.972809 0\r
vt 0.723633 0.982315 0\r
vt 0.850586 0.526855 0\r
vt 0.087708 0.592773 0\r
vt 0.719238 0.972748 0\r
vt 0.752441 0.20459 0\r
vt 0.769531 0.208008 0\r
vt 0.841309 0.38916 0\r
vt 0.833496 0.555664 0\r
vt 0.769531 0.948151 0\r
vt 0.737305 0.948181 0\r
vt 0.560547 0.575684 0\r
vt 0.730469 0.476074 0\r
vt 0.911133 0.549805 0\r
vt 0.059326 0.585205 0\r
vt 0.726563 0.940735 0\r
vt 0.878906 0.424316 0\r
vt 0.867188 0.421875 0\r
vt 0.819336 0.424316 0\r
vt 0.900879 0.614502 0\r
vt 0.875 0.593018 0\r
vt 0.841797 0.604736 0\r
vt 0.130615 0.576416 0\r
vt 0.706543 0.94989 0\r
vt 0.716309 0.941895 0\r
vt 0.659668 0.810913 0\r
vt 0.874512 0.44043 0\r
vt 0.05191 0.611328 0\r
vt 0.736328 0.940002 0\r
vt 0.722168 0.920288 0\r
vt 0.694336 0.873779 0\r
vt 0.687012 0.820313 0\r
vt 0.80127 0.324707 0\r
vt 0.05191 0.611328 0\r
vt 0.76123 0.951813 0\r
vt 0.591797 0.652832 0\r
vt 0.757813 0.927124 0\r
vt 0.678223 0.799805 0\r
vt 0.825684 0.469238 0\r
vt 0.796875 0.398926 0\r
vt 0.866699 0.439941 0\r
vt 0.940918 0.618896 0\r
vt 0.837891 0.586182 0\r
vt 0.123169 0.566162 0\r
vt 0.728027 0.948822 0\r
vt 0.729004 0.95929 0\r
vt 0.769531 0.792236 0\r
vt 0.757813 0.466309 0\r
vt 0.92041 0.537354 0\r
vt 0.669922 0.635254 0\r
vt 0.768555 0.964996 0\r
vt 0.712402 0.922852 0\r
vt 0.850586 0.473145 0\r
vt 0.80127 0.366211 0\r
vt 0.763184 0.947968 0\r
vt 0.80127 0.634277 0\r
vt 0.796875 0.601074 0\r
vt 0.874023 0.476563 0\r
vt 0.796875 0.398926 0\r
vt 0.80127 0.366211 0\r
vt 0.143677 0.561035 0\r
vt 0.065369 0.607422 0\r
vt 0.754395 0.951202 0\r
vt 0.748047 0.963379 0\r
vt 0.747559 0.911011 0\r
vt 0.788574 0.550293 0\r
vt 0.91748 0.56665 0\r
vt 0.86377 0.590576 0\r
vt 0.06604 0.623291 0\r
vt 0.911133 0.380859 0\r
vt 0.749512 0.955933 0\r
vt 0.700195 0.53833 0\r
vt 0.911133 0.549805 0\r
vt 0.922363 0.614014 0\r
vt 0.717773 0.958801 0\r
vt 0.687012 0.820313 0\r
vt 0.696289 0.797729 0\r
vt 0.900879 0.617676 0\r
vt 0.939941 0.609863 0\r
vt 0.75293 0.804199 0\r
vt 0.746582 0.941101 0\r
vt 0.87207 0.5 0\r
vt 0.145752 0.514648 0\r
vt 0.750977 0.973083 0\r
vt 0.659668 0.810913 0\r
vt 0.765625 0.923279 0\r
vt 0.769531 0.669678 0\r
vt 0.738281 0.822998 0\r
vt 0.067688 0.59375 0\r
vt 0.780762 0.962646 0\r
vt 0.735352 0.972809 0\r
vt 0.735352 0.928955 0\r
vt 0.700684 0.9245 0\r
vt 0.792969 0.794434 0\r
vt 0.733398 0.626221 0\r
vt 0.828613 0.593506 0\r
vt 0.763184 0.949097 0\r
vt 0.694336 0.873779 0\r
vt 0.667969 0.830566 0\r
vt 0.775879 0.931396 0\r
vt 0.693848 0.588623 0\r
vt 0.848633 0.486328 0\r
vt 0.922363 0.614014 0\r
vt 0.056183 0.605225 0\r
vt 0.763672 0.948914 0\r
vt 0.748047 0.963379 0\r
vt 0.729492 0.980682 0\r
vt 0.76709 0.934875 0\r
vt 0.669922 0.365234 0\r
vt 0.052734 0.61792 0\r
vt 0.762695 0.948456 0\r
vt 0.727051 0.97348 0\r
vt 0.797852 0.763062 0\r
vt 0.70459 0.627441 0\r
vt 0.86377 0.409668 0\r
vt 0.165405 0.536377 0\r
vt 0.1604 0.540771 0\r
vt 0.822754 0.563477 0\r
vt 0.828613 0.593506 0\r
vt 0.763184 0.947968 0\r
vt 0.717773 0.958801 0\r
vt 0.601074 0.546875 0\r
vt 0.822754 0.563477 0\r
vt 0.845215 0.444824 0\r
vt 0.833496 0.444824 0\r
vt 0.904785 0.607422 0\r
vt 0.867676 0.591309 0\r
vt 0.156006 0.547607 0\r
vt 0.067688 0.59375 0\r
vt 0.740723 0.860474 0\r
vt 0.769531 0.330566 0\r
vt 0.912109 0.556885 0\r
vt 0.931641 0.60083 0\r
vt 0.180664 0.520508 0\r
vt 0.702637 0.815796 0\r
vt 0.878906 0.424316 0\r
vt 0.858887 0.44043 0\r
vt 0.90625 0.625488 0\r
vt 0.878906 0.575928 0\r
vt 0.852539 0.604492 0\r
vt 0.045319 0.610352 0\r
vt 0.667969 0.830566 0\r
vt 0.696289 0.797729 0\r
vt 0.873047 0.487793 0\r
vt 0.89502 0.424316 0\r
vt 0.824707 0.403809 0\r
vt 0.077698 0.58252 0\r
vt 0.773438 0.860962 0\r
vt 0.895996 0.5 0\r
vt 0.840332 0.453613 0\r
vt 0.86377 0.590576 0\r
vt 0.837891 0.586182 0\r
vt 0.939941 0.390137 0\r
vt 0.758301 0.938629 0\r
vt 0.722168 0.920288 0\r
vt 0.94043 0.512695 0\r
vt 0.814941 0.430664 0\r
vt 0.822754 0.563477 0\r
vt 0.087708 0.592773 0\r
vt 0.749512 0.955933 0\r
vt 0.765137 0.832642 0\r
vt 0.775391 0.762939 0\r
vt 0.730469 0.52417 0\r
vt 0.862305 0.419922 0\r
vt 0.667969 0.830566 0\r
vt 0.659668 0.810913 0\r
vt 0.64209 0.775391 0\r
vt 0.755859 0.946228 0\r
vt 0.848633 0.486328 0\r
vt 0.797852 0.237305 0\r
vt 0.86377 0.409668 0\r
vt 0.845215 0.444824 0\r
vt 0.94043 0.554688 0\r
vt 0.881836 0.591309 0\r
vt 0.855957 0.578369 0\r
vt 0.073425 0.602539 0\r
vt 0.060486 0.601563 0\r
vt 0.065369 0.607422 0\r
vt 0.911133 0.380859 0\r
vt 0.687012 0.820313 0\r
vt 0.896973 0.511719 0\r
vt 0.054077 0.608154 0\r
vt 0.847656 0.5 0\r
vt 0.769531 0.208008 0\r
vt 0.80127 0.421875 0\r
vt 0.915527 0.539063 0\r
vt 0.866699 0.560059 0\r
vt 0.940918 0.381348 0\r
vt 0.767578 0.942078 0\r
vt 0.769531 0.948151 0\r
vt 0.814453 0.416504 0\r
vt 0.911133 0.549805 0\r
vt 0.156006 0.547607 0\r
vt 0.115723 0.587646 0\r
vt 0.045319 0.610352 0\r
vt 0.76123 0.951813 0\r
vt 0.749023 0.948486 0\r
vt 0.769531 0.208008 0\r
vt 0.86377 0.409668 0\r
vt 0.763184 0.947968 0\r
vt 0.755859 0.946228 0\r
vt 0.759277 0.944916 0\r
vt 0.896973 0.511719 0\r
vt 0.833496 0.444824 0\r
vt 0.819336 0.424316 0\r
vt 0.143677 0.561035 0\r
vt 0.061676 0.616455 0\r
vt 0.767578 0.942078 0\r
vt 0.749512 0.955933 0\r
vt 0.706055 0.943695 0\r
vt 0.901855 0.552246 0\r
vt 0.093018 0.569336 0\r
vt 0.044708 0.604736 0\r
vt 0.708984 0.971436 0\r
vt 0.737305 0.948181 0\r
vt 0.694336 0.873779 0\r
vt 0.878906 0.575928 0\r
vt 0.165649 0.547119 0\r
vt 0.111328 0.571045 0\r
vt 0.093018 0.569336 0\r
vt 0.753906 0.952515 0\r
vt 0.757813 0.927124 0\r
vt 0.627441 0.522461 0\r
vt 0.92334 0.550049 0\r
vt 0.061676 0.616455 0\r
vt 0.052734 0.61792 0\r
vt 0.758301 0.953247 0\r
vt 0.753906 0.952515 0\r
vt 0.699219 0.5 0\r
vt 0.717773 0.483398 0\r
vt 0.910645 0.386719 0\r
vt 0.922852 0.380371 0\r
vt 0.759277 0.944916 0\r
vt 0.719238 0.972748 0\r
vt 0.718262 0.865112 0\r
vt 0.752441 0.795532 0\r
vt 0.069397 0.614258 0\r
vt 0.754395 0.952057 0\r
vt 0.743652 0.929321 0\r
vt 0.700195 0.481934 0\r
vt 0.717773 0.483398 0\r
vt 0.900879 0.617676 0\r
vt 0.15625 0.567871 0\r
vt 0.143677 0.561035 0\r
vt 0.120789 0.560547 0\r
vt 0.081177 0.622559 0\r
vt 0.754395 0.952057 0\r
vt 0.723145 0.5 0\r
vt 0.132568 0.562744 0\r
vt 0.754395 0.951202 0\r
vt 0.741699 0.5 0\r
vt 0.923828 0.555664 0\r
vt 0.911133 0.619141 0\r
vt 0.077881 0.612305 0\r
vt 0.052216 0.592041 0\r
vt 0.722168 0.920288 0\r
vt 0.701172 0.855225 0\r
vt 0.750977 0.928833 0\r
vt 0.730469 0.476074 0\r
vt 0.081177 0.622559 0\r
vt 0.755859 0.946228 0\r
vt 0.687012 0.820313 0\r
vt 0.669922 0.635254 0\r
vt 0.922852 0.569092 0\r
vt 0.910645 0.613525 0\r
vt 0.922852 0.619629 0\r
vt 0.054382 0.603516 0\r
vt 0.716797 0.949341 0\r
vt 0.735352 0.928955 0\r
vt 0.881836 0.408691 0\r
vt 0.131348 0.556641 0\r
vt 0.058838 0.610352 0\r
vt 0.768555 0.964996 0\r
vt 0.912109 0.556885 0\r
vt 0.900879 0.614502 0\r
vt 0.933594 0.629639 0\r
vt 0.121033 0.517822 0\r
vt 0.069397 0.614258 0\r
vt 0.678223 0.799805 0\r
vt 0.047821 0.597412 0\r
vt 0.728516 0.963013 0\r
vt 0.736328 0.940002 0\r
vt 0.6875 0.862183 0\r
vt 0.693848 0.588623 0\r
vt 0.757813 0.533691 0\r
vt 0.89502 0.401367 0\r
vt 0.72168 0.982132 0\r
vt 0.729004 0.95929 0\r
vt 0.774414 0.922363 0\r
vt 0.753906 0.5 0\r
vt 0.156006 0.547607 0\r
vt 0.130249 0.566895 0\r
vt 0.060486 0.601563 0\r
vt 0.054382 0.603516 0\r
vt 0.727051 0.97348 0\r
vt 0.628418 0.544922 0\r
vt 0.848633 0.513672 0\r
vt 0.930664 0.536865 0\r
vt 0.120789 0.560547 0\r
vt 0.758301 0.953247 0\r
vt 0.737305 0.948181 0\r
vt 0.679688 0.752319 0\r
vt 0.758301 0.938629 0\r
vt 0.70459 0.627441 0\r
vt 0.06604 0.623291 0\r
vt 0.705078 0.960846 0\r
vt 0.772949 0.703857 0\r
vt 0.837891 0.414063 0\r
vt 0.862305 0.600098 0\r
vt 0.738281 0.804932 0\r
vt 0.120789 0.560547 0\r
vt 0.108459 0.559082 0\r
vt 0.921387 0.367188 0\r
vt 0.632324 0.735352 0\r
vt 0.730469 0.862793 0\r
vt 0.878906 0.575928 0\r
vt 0.819336 0.575928 0\r
vt 0.069397 0.614258 0\r
vt 0.059875 0.605225 0\r
vt 0.705078 0.960846 0\r
vt 0.765137 0.832642 0\r
vt 0.896973 0.488281 0\r
vt 0.716797 0.441406 0\r
vt 0.922363 0.614014 0\r
vt 0.154175 0.537109 0\r
vt 0.157959 0.532471 0\r
vt 0.147339 0.534668 0\r
vt 0.749023 0.948486 0\r
vt 0.896973 0.488281 0\r
vt 0.921387 0.367188 0\r
vt 0.765625 0.95755 0\r
vt 0.753418 0.859253 0\r
vt 0.769531 0.792236 0\r
vt 0.741699 0.5 0\r
vt 0.912109 0.556885 0\r
vt 0.845215 0.55542 0\r
vt 0.788574 0.550293 0\r
vt 0.79834 0.541016 0\r
vt 0.79834 0.458984 0\r
vt 0.788574 0.449707 0\r
vt 0.855957 0.421875 0\r
vt 0.848145 0.419922 0\r
vt 0.852539 0.395508 0\r
vt 0.108459 0.559082 0\r
vt 0.733398 0.626221 0\r
vt 0.850586 0.526855 0\r
vt 0.131348 0.556641 0\r
vt 0.123962 0.556641 0\r
vt 0.911133 0.380859 0\r
vt 0.758301 0.953247 0\r
vt 0.754395 0.940033 0\r
vt 0.754395 0.823853 0\r
vt 0.108459 0.559082 0\r
vt 0.754395 0.951202 0\r
vt 0.753418 0.951385 0\r
vt 0.760742 0.967773 0\r
vt 0.750977 0.928833 0\r
vt 0.774414 0.922363 0\r
vt 0.940918 0.618896 0\r
vt 0.75293 0.804199 0\r
vt 0.922852 0.380371 0\r
vt 0.754395 0.952057 0\r
vt 0.765625 0.95755 0\r
vt 0.735352 0.972809 0\r
vt 0.730957 0.985596 0\r
vt 0.756348 0.909241 0\r
vt 0.738281 0.822998 0\r
vt 0.130615 0.576416 0\r
vt 0.131348 0.556641 0\r
vt 0.123169 0.566162 0\r
vt 0.111328 0.571045 0\r
vt 0.105164 0.532227 0\r
vt 0.739746 0.980804 0\r
vt 0.737305 0.948181 0\r
vt 0.852539 0.604492 0\r
vt 0.073975 0.621826 0\r
vt 0.718262 0.962006 0\r
vt 0.702637 0.815796 0\r
vt 0.747559 0.911011 0\r
vt 0.787598 0.522705 0\r
vt 0.841309 0.611084 0\r
vt 0.117676 0.54248 0\r
vt 0.753906 0.952515 0\r
vt 0.743652 0.978409 0\r
vt 0.679688 0.519775 0\r
vt 0.753906 0.5 0\r
vt 0.723633 0.982315 0\r
vt 0.867676 0.40918 0\r
vt 0.848145 0.419922 0\r
vt 0.845215 0.55542 0\r
vt 0.757813 0.960541 0\r
vt 0.739746 0.962952 0\r
vt 0.660156 0.715332 0\r
vt 0.65918 0.521729 0\r
vt 0.895996 0.5 0\r
vt 0.848633 0.513672 0\r
vt 0.845215 0.444824 0\r
vt 0.120789 0.560547 0\r
vt 0.739746 0.962952 0\r
vt 0.719238 0.972748 0\r
vt 0.708984 0.971436 0\r
vt 0.728027 0.948822 0\r
vt 0.65918 0.542725 0\r
vt 0.714844 0.934326 0\r
vt 0.677246 0.5 0\r
vt 0.787598 0.522705 0\r
vt 0.87207 0.5 0\r
vt 0.757813 0.466309 0\r
vt 0.848145 0.580078 0\r
vt 0.082092 0.560303 0\r
vt 0.76123 0.951813 0\r
vt 0.722168 0.920288 0\r
vt 0.767578 0.809692 0\r
vt 0.769531 0.669678 0\r
vt 0.772949 0.703857 0\r
vt 0.848633 0.486328 0\r
vt 0.763672 0.948914 0\r
vt 0.712402 0.922852 0\r
vt 0.700684 0.9245 0\r
vt 0.6875 0.862183 0\r
vt 0.896973 0.511719 0\r
vt 0.847656 0.5 0\r
vt 0.117676 0.54248 0\r
vt 0.910645 0.386719 0\r
vt 0.719238 0.972748 0\r
vt 0.72168 0.982132 0\r
vt 0.765137 0.90918 0\r
vt 0.679688 0.542969 0\r
vt 0.660156 0.715332 0\r
vt 0.679688 0.752319 0\r
vt 0.065369 0.607422 0\r
vt 0.735352 0.928955 0\r
vt 0.778809 0.840698 0\r
vt 0.867676 0.40918 0\r
vt 0.922852 0.619629 0\r
vt 0.862305 0.580078 0\r
vt 0.629883 0.80481 0\r
vt 0.775391 0.762939 0\r
vt 0.797852 0.763062 0\r
vt 0.900879 0.385742 0\r
vt 0.762695 0.948456 0\r
vt 0.847656 0.5 0\r
vt 0.872559 0.451172 0\r
vt 0.872559 0.549072 0\r
vt 0.05072 0.633057 0\r
vt 0.735352 0.972809 0\r
vt 0.76416 0.859741 0\r
vt 0.824707 0.289551 0\r
vt 0.907227 0.562256 0\r
vt 0.060486 0.601563 0\r
vt 0.718262 0.962006 0\r
vt 0.787598 0.522705 0\r
vt 0.910645 0.613525 0\r
vt 0.123962 0.556641 0\r
vt 0.074402 0.626465 0\r
vt 0.736328 0.940002 0\r
vt 0.704102 0.935364 0\r
vt 0.765137 0.90918 0\r
vt 0.757813 0.533691 0\r
vt 0.787598 0.477539 0\r
vt 0.743652 0.929321 0\r
vt 0.696289 0.797729 0\r
vt 0.787109 0.814819 0\r
vt 0.769531 0.669678 0\r
vt 0.820801 0.5 0\r
vt 0.788574 0.431152 0\r
vt 0.654297 0.761353 0\r
vt 0.632324 0.735352 0\r
vt 0.06604 0.623291 0\r
vt 0.735352 0.928955 0\r
vt 0.769531 0.669678 0\r
vt 0.724121 0.247559 0\r
vt 0.852539 0.395508 0\r
vt 0.059875 0.605225 0\r
vt 0.757813 0.960541 0\r
vt 0.714844 0.934326 0\r
vt 0.773926 0.910217 0\r
vt 0.641113 0.318848 0\r
vt 0.073975 0.621826 0\r
vt 0.700684 0.9245 0\r
vt 0.695313 0.297363 0\r
vt 0.628418 0.544922 0\r
vt 0.627441 0.522461 0\r
vt 0.774414 0.269531 0\r
vt 0.939453 0.545654 0\r
vt 0.82666 0.547607 0\r
vt 0.13208 0.548584 0\r
vt 0.900879 0.382324 0\r
vt 0.922363 0.38623 0\r
vt 0.888184 0.45166 0\r
vt 0.923828 0.555664 0\r
vt 0.939941 0.609863 0\r
vt 0.682129 0.333496 0\r
vt 0.158081 0.524902 0\r
vt 0.757813 0.960541 0\r
vt 0.699707 0.975937 0\r
vt 0.694336 0.873779 0\r
vt 0.623535 0.760376 0\r
vt 0.767578 0.942078 0\r
vt 0.693848 0.411621 0\r
vt 0.135864 0.539551 0\r
vt 0.060486 0.601563 0\r
vt 0.065369 0.607422 0\r
vt 0.632813 0.356445 0\r
vt 0.910645 0.613525 0\r
vt 0.117676 0.54248 0\r
vt 0.132568 0.562744 0\r
vt 0.077881 0.612305 0\r
vt 0.912109 0.556885 0\r
vt 0.900879 0.617676 0\r
vt 0.117676 0.54248 0\r
vt 0.065369 0.607422 0\r
vt 0.669922 0.365234 0\r
vt 0.856445 0.611328 0\r
vt 0.130615 0.576416 0\r
vt 0.094849 0.603271 0\r
vt 0.704102 0.935364 0\r
vt 0.716797 0.558838 0\r
vt 0.911133 0.549805 0\r
vt 0.92041 0.537354 0\r
vt 0.13208 0.548584 0\r
vt 0.059052 0.604248 0\r
vt 0.940918 0.381348 0\r
vt 0.726563 0.940735 0\r
vt 0.788574 0.569336 0\r
vt 0.796875 0.398926 0\r
vt 0.901855 0.555908 0\r
vt 0.862305 0.600098 0\r
\r
f 211/997 167/784 105/489 \r
f 223/1071 233/1127 221/1059 \r
f 72/324 169/790 6/17 \r
f 5/16 6/17 169/790 \r
f 6/17 5/16 4/14 \r
f 1/1 4/14 5/16 \r
f 191/893 47/210 168/789 \r
f 108/512 113/539 118/560 \r
f 319/1596 281/1374 279/1366 \r
f 327/1638 328/1646 329/1653 \r
f 258/1262 239/1162 167/783 \r
f 238/1155 240/1169 237/1150 \r
f 168/788 320/1603 191/892 \r
f 21/80 44/192 183/854 \r
f 151/713 74/334 212/1002 \r
f 41/172 287/1409 354/1772 \r
f 42/178 53/239 48/215 \r
f 151/712 212/1001 164/767 \r
f 286/1405 170/795 95/430 \r
f 332/1667 25/101 184/860 \r
f 292/1438 293/1444 282/1382 \r
f 81/367 75/340 61/270 \r
f 266/1295 31/123 154/728 \r
f 286/1404 95/428 210/991 \r
f 234/1131 236/1144 233/1126 \r
f 179/834 3/12 70/315 \r
f 290/1426 272/1329 268/1308 \r
f 259/1265 37/150 95/429 \r
f 37/149 210/991 95/428 \r
f 98/445 70/315 180/838 \r
f 334/1676 205/963 10/40 \r
f 116/547 112/535 200/938 \r
f 2/7 66/298 181/842 \r
f 331/1661 360/1800 362/1814 \r
f 48/214 57/255 81/366 \r
f 93/421 96/436 99/451 \r
f 121/575 118/559 129/609 \r
f 337/1695 155/733 190/886 \r
f 79/356 25/100 323/1622 \r
f 210/990 37/148 136/640 \r
f 210/989 136/640 49/220 \r
f 136/641 29/117 319/1595 \r
f 203/954 245/1197 277/1354 \r
f 296/1461 292/1437 41/171 \r
f 259/1264 136/640 37/148 \r
f 97/440 64/288 257/1256 \r
f 97/440 343/1722 64/288 \r
f 288/1413 24/95 268/1307 \r
f 217/1032 211/996 213/1008 \r
f 107/505 92/417 93/421 \r
f 230/1106 226/1087 96/435 \r
f 121/574 129/608 165/773 \r
f 193/902 55/248 109/519 \r
f 51/230 39/161 171/801 \r
f 298/1473 258/1261 35/142 \r
f 117/554 97/439 257/1255 \r
f 168/787 202/946 320/1602 \r
f 69/310 94/426 179/833 \r
f 296/1460 89/400 116/546 \r
f 217/1031 221/1058 219/1044 \r
f 259/1263 95/427 136/639 \r
f 170/794 136/639 95/427 \r
f 167/782 214/1016 303/1503 \r
f 185/865 345/1730 102/471 \r
f 209/986 208/981 213/1007 \r
f 174/814 290/1425 149/704 \r
f 66/297 34/134 25/99 \r
f 167/781 35/141 258/1260 \r
f 289/1419 94/425 98/444 \r
f 278/1360 355/1778 140/668 \r
f 279/1365 283/1389 272/1328 \r
f 14/59 13/55 21/79 \r
f 46/204 61/269 144/688 \r
f 328/1645 311/1552 313/1562 \r
f 111/530 131/620 343/1721 \r
f 144/687 27/111 46/203 \r
f 321/1610 347/1739 225/1081 \r
f 288/1412 268/1306 218/1038 \r
f 98/443 94/424 69/309 \r
f 313/1561 359/1796 358/1791 \r
f 231/1112 222/1066 229/1099 \r
f 107/504 110/524 85/386 \r
f 309/1539 311/1551 307/1528 \r
f 31/122 44/191 249/1217 \r
f 279/1364 290/1424 49/219 \r
f 207/975 91/411 43/185 \r
f 317/1584 273/1335 120/571 \r
f 261/1274 200/937 361/1806 \r
f 354/1771 162/760 296/1459 \r
f 86/392 298/1472 35/140 \r
f 11/45 215/1022 304/1510 \r
f 231/1111 223/1070 222/1065 \r
f 224/1076 138/656 133/630 \r
f 267/1300 63/282 120/570 \r
f 46/202 27/110 61/268 \r
f 241/1175 246/1203 252/1229 \r
f 195/912 40/166 196/916 \r
f 302/1497 240/1168 299/1478 \r
f 309/1538 313/1560 311/1550 \r
f 192/899 355/1777 278/1359 \r
f 359/1795 361/1805 362/1813 \r
f 277/1353 245/1196 289/1418 \r
f 73/331 102/470 192/899 \r
f 79/355 323/1621 346/1735 \r
f 298/1471 90/405 258/1259 \r
f 301/1491 299/1477 293/1443 \r
f 252/1228 218/1037 268/1305 \r
f 31/121 190/885 154/727 \r
f 164/766 207/974 151/711 \r
f 106/496 133/629 113/538 \r
f 113/537 108/511 106/495 \r
f 74/333 151/710 140/667 \r
f 24/94 59/261 291/1432 \r
f 223/1069 231/1110 233/1125 \r
f 319/1594 49/218 136/638 \r
f 246/1202 241/1174 232/1119 \r
f 234/1130 232/1118 236/1143 \r
f 24/93 288/1411 59/259 \r
f 199/931 12/51 26/105 \r
f 154/726 351/1759 266/1294 \r
f 236/1142 241/1173 244/1192 \r
f 166/776 59/260 325/1629 \r
f 325/1628 59/259 288/1411 \r
f 68/306 334/1675 144/686 \r
f 296/1458 301/1490 292/1436 \r
f 230/1105 247/1209 246/1201 \r
f 101/465 227/1093 107/503 \r
f 220/1052 222/1064 223/1068 \r
f 53/238 57/254 48/213 \r
f 96/434 92/416 230/1104 \r
f 173/808 264/1285 335/1683 \r
f 334/1675 10/39 144/685 \r
f 290/1423 210/988 49/217 \r
f 288/1410 218/1036 325/1627 \r
f 174/813 87/394 290/1423 \r
f 93/420 99/450 161/756 \r
f 200/936 296/1457 116/545 \r
f 166/775 325/1627 218/1036 \r
f 120/569 294/1450 285/1401 \r
f 66/296 73/330 300/1485 \r
f 343/1720 97/438 111/529 \r
f 191/891 2/6 47/209 \r
f 334/1674 68/305 75/339 \r
f 91/410 122/582 35/139 \r
f 96/433 93/419 92/415 \r
f 55/247 153/723 23/89 \r
f 160/750 23/88 153/722 \r
f 18/69 131/619 100/459 \r
f 80/360 35/138 122/581 \r
f 182/848 45/201 3/11 \r
f 312/1556 315/1572 214/1015 \r
f 247/1208 84/378 253/1238 \r
f 345/1729 355/1776 192/898 \r
f 225/1080 8/29 103/478 \r
f 161/755 99/449 100/458 \r
f 166/774 218/1035 59/258 \r
f 209/985 105/488 206/968 \r
f 268/1304 149/703 290/1422 \r
f 269/1313 268/1303 272/1327 \r
f 178/828 107/502 148/698 \r
f 291/1431 59/258 218/1035 \r
f 55/246 23/87 57/253 \r
f 38/157 67/302 88/396 \r
f 21/78 270/1319 14/58 \r
f 88/396 67/301 276/1346 \r
f 98/442 180/837 289/1417 \r
f 159/742 276/1346 67/301 \r
f 275/1340 244/1191 272/1326 \r
f 346/1734 264/1284 262/1279 \r
f 255/1247 362/1812 112/534 \r
f 19/70 262/1279 264/1284 \r
f 264/1284 173/807 19/70 \r
f 159/743 15/60 276/1345 \r
f 226/1086 229/1098 222/1063 \r
f 256/1251 276/1345 15/60 \r
f 41/170 354/1770 296/1456 \r
f 245/1195 203/953 179/832 \r
f 173/806 177/823 19/70 \r
f 262/1279 19/70 177/823 \r
f 266/1293 173/806 183/853 \r
f 173/806 266/1293 177/823 \r
f 164/765 62/277 122/580 \r
f 262/1279 177/823 263/1281 \r
f 47/208 2/5 181/841 \r
f 215/1021 11/44 86/391 \r
f 111/528 178/827 148/697 \r
f 11/43 141/673 298/1470 \r
f 300/1484 47/208 181/840 \r
f 262/1278 30/118 67/301 \r
f 159/742 67/301 30/118 \r
f 30/118 15/60 159/742 \r
f 262/1278 263/1280 30/118 \r
f 126/595 257/1254 64/287 \r
f 175/818 30/118 263/1280 \r
f 351/1758 263/1281 177/823 \r
f 177/823 266/1292 351/1758 \r
f 61/267 68/304 144/684 \r
f 263/1281 351/1758 353/1767 \r
f 353/1767 356/1779 263/1281 \r
f 175/818 263/1280 360/1799 \r
f 356/1779 360/1799 263/1280 \r
f 13/54 14/57 9/34 \r
f 52/234 284/1395 357/1786 \r
f 15/60 30/118 175/817 \r
f 360/1799 356/1779 358/1790 \r
f 175/817 145/689 15/60 \r
f 352/1764 358/1790 356/1779 \r
f 356/1779 353/1767 352/1764 \r
f 16/61 15/60 145/689 \r
f 15/60 16/61 256/1251 \r
f 349/1752 203/952 321/1609 \r
f 145/689 175/817 255/1246 \r
f 16/61 250/1219 256/1250 \r
f 324/1626 256/1250 250/1219 \r
f 145/689 82/370 16/61 \r
f 145/689 255/1246 82/370 \r
f 16/61 58/257 250/1219 \r
f 58/257 16/61 82/370 \r
f 337/1694 348/1746 155/732 \r
f 194/908 197/924 165/772 \r
f 142/677 250/1219 58/257 \r
f 250/1218 33/129 324/1625 \r
f 204/958 324/1625 33/129 \r
f 104/482 194/907 165/772 \r
f 47/207 12/50 168/786 \r
f 275/1339 272/1325 283/1388 \r
f 32/127 338/1702 276/1344 \r
f 250/1218 254/1241 33/129 \r
f 254/1241 250/1218 142/676 \r
f 203/951 349/1751 182/847 \r
f 239/1161 45/200 18/68 \r
f 232/1117 230/1103 246/1200 \r
f 24/92 291/1430 160/749 \r
f 345/1728 192/897 102/469 \r
f 296/1455 162/759 89/399 \r
f 119/564 204/957 33/128 \r
f 103/477 321/1608 225/1079 \r
f 90/404 103/476 8/28 \r
f 33/128 254/1242 119/564 \r
f 339/1708 183/852 335/1682 \r
f 104/481 51/229 194/906 \r
f 245/1194 179/831 94/423 \r
f 90/404 298/1469 141/672 \r
f 123/586 322/1615 280/1368 \r
f 149/702 153/721 174/812 \r
f 201/940 248/1212 254/1242 \r
f 335/1681 337/1693 339/1707 \r
f 248/1212 201/940 204/956 \r
f 258/1258 36/147 239/1160 \r
f 68/303 61/266 75/338 \r
f 204/956 119/563 248/1212 \r
f 326/1632 32/126 146/692 \r
f 265/1289 317/1583 120/568 \r
f 22/83 297/1467 27/109 \r
f 301/1489 293/1442 292/1435 \r
f 99/448 106/494 108/510 \r
f 10/38 76/345 144/683 \r
f 204/955 201/939 324/1624 \r
f 182/846 18/68 45/199 \r
f 65/290 324/1624 201/939 \r
f 65/290 201/939 254/1241 \r
f 102/468 332/1666 38/156 \r
f 254/1241 142/676 65/290 \r
f 203/950 277/1352 347/1738 \r
f 348/1745 337/1692 333/1672 \r
f 324/1623 65/289 256/1249 \r
f 316/1576 214/1014 315/1571 \r
f 38/155 184/859 67/300 \r
f 267/1299 120/567 273/1334 \r
f 128/601 256/1249 65/289 \r
f 362/1811 361/1804 200/935 \r
f 113/536 133/628 118/558 \r
f 146/691 256/1248 128/601 \r
f 256/1248 146/691 276/1343 \r
f 307/1527 310/1545 235/1137 \r
f 42/177 48/212 61/265 \r
f 308/1534 309/1537 305/1516 \r
f 106/493 96/432 226/1085 \r
f 238/1154 242/1181 240/1167 \r
f 82/370 116/544 58/257 \r
f 89/398 142/675 58/256 \r
f 202/945 151/709 207/973 \r
f 116/544 89/397 58/256 \r
f 305/1515 307/1526 237/1149 \r
f 180/836 70/314 45/198 \r
f 89/398 152/715 142/675 \r
f 246/1199 253/1237 252/1227 \r
f 118/557 197/923 108/509 \r
f 227/1092 10/37 110/523 \r
f 34/133 323/1620 25/98 \r
f 129/607 118/556 133/627 \r
f 152/716 65/289 142/674 \r
f 192/896 278/1358 199/930 \r
f 41/169 294/1449 63/281 \r
f 128/601 65/289 152/714 \r
f 178/826 117/553 101/464 \r
f 162/758 152/715 89/397 \r
f 152/714 341/1714 128/601 \r
f 341/1714 152/714 162/758 \r
f 60/262 128/601 341/1714 \r
f 128/601 60/262 146/691 \r
f 70/313 3/10 45/197 \r
f 333/1671 337/1691 335/1680 \r
f 60/262 341/1714 157/737 \r
f 228/1094 341/1714 162/757 \r
f 228/1094 157/737 341/1714 \r
f 60/262 157/737 143/679 \r
f 143/679 146/691 60/262 \r
f 157/737 228/1094 124/588 \r
f 125/589 143/679 157/737 \r
f 157/737 124/588 125/589 \r
f 354/1768 124/588 228/1094 \r
f 187/873 131/618 18/67 \r
f 78/351 336/1689 62/276 \r
f 162/757 354/1769 228/1094 \r
f 124/588 354/1768 134/631 \r
f 131/617 148/696 161/754 \r
f 317/1582 304/1509 215/1020 \r
f 287/1408 134/631 354/1768 \r
f 125/589 124/587 274/1336 \r
f 125/589 274/1336 143/679 \r
f 28/112 124/587 134/631 \r
f 318/1590 315/1570 311/1549 \r
f 124/587 28/112 147/693 \r
f 147/693 274/1336 124/587 \r
f 285/1400 282/1381 283/1387 \r
f 146/691 143/679 326/1631 \r
f 143/678 274/1336 169/791 \r
f 143/678 169/791 326/1631 \r
f 189/879 169/791 274/1336 \r
f 274/1336 147/693 189/879 \r
f 72/325 326/1631 169/791 \r
f 216/1026 213/1006 220/1051 \r
f 72/325 338/1700 326/1631 \r
f 115/542 169/790 189/879 \r
f 131/616 187/872 349/1750 \r
f 169/790 115/542 5/16 \r
f 243/1185 72/324 163/762 \r
f 229/1097 230/1102 232/1116 \r
f 221/1057 217/1030 216/1025 \r
f 56/249 163/762 72/324 \r
f 163/762 56/249 344/1725 \r
f 72/324 6/17 56/249 \r
f 249/1216 44/190 9/33 \r
f 344/1724 56/249 6/17 \r
f 285/1399 294/1448 282/1380 \r
f 155/731 351/1757 154/725 \r
f 114/541 127/600 344/1724 \r
f 344/1724 6/17 114/541 \r
f 186/869 273/1333 78/350 \r
f 4/14 114/541 6/17 \r
f 38/154 88/395 338/1701 \r
f 281/1373 319/1593 71/320 \r
f 88/395 276/1342 338/1700 \r
f 191/890 34/132 2/4 \r
f 34/131 191/889 323/1619 \r
f 185/864 338/1699 306/1522 \r
f 84/377 81/365 253/1236 \r
f 139/661 208/980 137/649 \r
f 53/237 42/176 109/518 \r
f 343/1719 349/1749 321/1607 \r
f 80/359 86/390 35/137 \r
f 36/146 90/403 8/27 \r
f 41/168 292/1434 294/1447 \r
f 158/741 114/540 4/13 \r
f 4/13 1/2 158/741 \r
f 114/540 188/878 127/599 \r
f 50/226 127/599 188/878 \r
f 352/1763 348/1744 328/1644 \r
f 188/878 114/540 158/740 \r
f 323/1618 329/1652 346/1733 \r
f 251/1223 316/1575 43/184 \r
f 340/1713 243/1184 140/666 \r
f 101/463 29/116 227/1091 \r
f 284/1394 283/1386 281/1372 \r
f 138/655 139/660 132/624 \r
f 235/1136 219/1043 221/1056 \r
f 103/475 304/1508 64/286 \r
f 244/1190 242/1180 236/1141 \r
f 257/1253 357/1785 117/552 \r
f 78/349 62/275 271/1323 \r
f 112/533 82/369 255/1245 \r
f 219/1042 235/1135 310/1544 \r
f 132/623 129/606 138/654 \r
f 18/66 182/845 187/871 \r
f 184/858 38/153 332/1665 \r
f 327/1637 318/1589 328/1643 \r
f 73/329 332/1665 102/467 \r
f 137/648 194/905 171/800 \r
f 235/1134 237/1148 307/1525 \r
f 229/1096 232/1115 231/1109 \r
f 277/1351 289/1416 45/196 \r
f 230/1101 229/1095 226/1084 \r
f 158/739 1/2 172/804 \r
f 172/804 130/612 158/739 \r
f 150/707 172/804 1/2 \r
f 205/962 85/385 110/522 \r
f 130/612 172/804 260/1269 \r
f 112/532 116/543 82/368 \r
f 238/1153 236/1140 242/1179 \r
f 184/857 79/354 262/1277 \r
f 262/1276 67/299 184/856 \r
f 238/1152 233/1124 236/1139 \r
f 139/659 220/1050 208/979 \r
f 207/972 320/1601 202/944 \r
f 106/492 99/447 96/431 \r
f 150/705 1/1 5/15 \r
f 83/371 172/803 150/706 \r
f 85/384 92/414 107/501 \r
f 187/870 182/844 349/1748 \r
f 5/15 342/1716 150/705 \r
f 83/374 150/705 342/1716 \r
f 183/851 173/805 335/1679 \r
f 115/542 342/1715 5/15 \r
f 342/1716 350/1753 83/374 \r
f 342/1715 115/542 77/346 \r
f 189/879 77/346 115/542 \r
f 77/346 189/879 147/693 \r
f 129/605 132/622 137/647 \r
f 43/183 318/1588 320/1600 \r
f 77/346 212/1000 342/1715 \r
f 350/1754 342/1715 212/1000 \r
f 147/693 271/1322 77/346 \r
f 212/1000 77/346 271/1322 \r
f 271/1322 147/693 28/112 \r
f 350/1754 212/1000 74/332 \r
f 52/233 357/1784 126/594 \r
f 28/112 186/868 271/1322 \r
f 28/112 134/631 186/868 \r
f 253/1235 291/1429 218/1034 \r
f 279/1363 272/1324 290/1421 \r
f 267/1298 186/868 134/631 \r
f 134/631 287/1408 267/1298 \r
f 350/1753 295/1453 83/373 \r
f 295/1453 350/1753 74/332 \r
f 66/295 332/1664 314/1565 \r
f 74/332 163/761 295/1453 \r
f 163/761 74/332 243/1183 \r
f 344/1723 295/1453 163/761 \r
f 140/665 243/1183 74/332 \r
f 227/1090 76/344 10/36 \r
f 269/1312 272/1324 244/1189 \r
f 42/175 27/108 297/1466 \r
f 127/598 295/1452 344/1723 \r
f 23/86 160/748 291/1428 \r
f 283/1385 279/1362 281/1371 \r
f 138/653 224/1075 222/1062 \r
f 144/682 22/82 27/107 \r
f 295/1451 176/822 83/372 \r
f 176/822 295/1451 127/597 \r
f 270/1318 9/32 14/56 \r
f 310/1543 311/1548 315/1569 \r
f 172/803 83/371 176/821 \r
f 257/1252 126/593 357/1783 \r
f 35/136 303/1502 91/409 \r
f 111/527 117/551 178/825 \r
f 155/730 154/724 190/884 \r
f 270/1317 21/77 339/1706 \r
f 205/961 75/337 85/383 \r
f 127/596 50/225 176/820 \r
f 176/819 260/1268 172/802 \r
f 70/312 98/441 69/308 \r
f 275/1338 283/1384 282/1379 \r
f 260/1268 176/819 50/224 \r
f 72/323 306/1521 338/1698 \r
f 190/883 339/1705 337/1690 \r
f 339/1704 190/882 270/1316 \r
f 348/1743 352/1762 353/1766 \r
f 361/1803 302/1496 261/1273 \r
f 219/1041 310/1542 312/1555 \r
f 101/462 107/500 178/824 \r
f 208/978 209/984 206/967 \r
f 242/1178 282/1378 293/1441 \r
f 349/1747 343/1718 131/615 \r
f 3/9 179/830 203/949 \r
f 351/1756 155/729 348/1742 \r
f 66/294 2/3 34/130 \r
f 161/753 100/457 131/614 \r
f 100/456 108/508 105/487 \r
f 206/966 137/646 208/977 \r
f 55/245 57/252 53/236 \r
f 36/145 135/636 239/1159 \r
f 117/550 111/526 97/437 \r
f 268/1302 269/1311 252/1226 \r
f 312/1554 214/1013 219/1040 \r
f 160/747 198/926 153/720 \r
f 255/1244 331/1660 362/1810 \r
f 336/1688 78/348 273/1332 \r
f 273/1331 186/867 267/1297 \r
f 24/91 160/746 149/701 \r
f 165/771 197/922 121/573 \r
f 244/1188 241/1172 269/1310 \r
f 49/216 319/1592 279/1361 \r
f 318/1587 43/182 315/1568 \r
f 9/31 270/1315 249/1215 \r
f 63/280 287/1407 41/167 \r
f 322/1614 123/585 280/1367 \r
f 158/738 130/611 188/877 \r
f 332/1663 66/293 25/97 \r
f 235/1133 221/1055 233/1123 \r
f 347/1737 321/1606 203/948 \r
f 50/223 196/915 260/1267 \r
f 357/1782 71/319 117/549 \r
f 316/1574 315/1567 43/181 \r
f 251/1222 303/1501 316/1574 \r
f 196/914 50/222 195/911 \r
f 51/228 171/799 194/904 \r
f 336/1687 215/1019 7/23 \r
f 81/364 61/264 48/211 \r
f 216/1024 220/1049 221/1054 \r
f 214/1012 316/1573 303/1500 \r
f 110/521 107/499 227/1089 \r
f 306/1520 72/322 340/1712 \r
f 29/115 101/461 71/318 \r
f 7/22 62/274 336/1686 \r
f 167/780 211/995 214/1011 \r
f 243/1182 340/1711 72/321 \r
f 44/189 31/120 266/1291 \r
f 334/1673 75/336 205/960 \r
f 265/1288 284/1393 317/1581 \r
f 137/645 197/921 194/903 \r
f 260/1267 196/913 40/165 \r
f 13/53 9/30 44/188 \r
f 265/1287 285/1398 284/1393 \r
f 242/1177 244/1187 282/1377 \r
f 215/1018 336/1685 317/1581 \r
f 264/1283 346/1732 329/1651 \r
f 331/1659 255/1243 175/816 \r
f 335/1678 329/1650 333/1670 \r
f 107/498 161/752 148/695 \r
f 53/235 109/517 55/244 \r
f 38/152 185/863 102/466 \r
f 284/1392 281/1370 357/1781 \r
f 195/910 188/876 40/164 \r
f 328/1642 313/1559 352/1761 \r
f 236/1138 232/1114 241/1171 \r
f 40/163 130/610 260/1266 \r
f 138/652 222/1061 220/1048 \r
f 135/635 8/26 277/1350 \r
f 130/610 40/162 188/875 \r
f 329/1649 335/1677 264/1282 \r
f 234/1129 231/1108 232/1113 \r
f 275/1337 282/1376 244/1186 \r
f 294/1446 120/566 63/279 \r
f 223/1067 221/1053 220/1047 \r
f 165/770 39/160 104/480 \r
f 118/555 121/572 197/920 \r
f 103/474 141/671 304/1507 \r
f 300/1483 26/104 47/206 \r
f 305/1514 302/1495 308/1533 \r
f 333/1669 329/1648 328/1641 \r
f 202/943 12/49 278/1357 \r
f 277/1349 45/195 135/634 \r
f 307/1524 305/1513 309/1536 \r
f 153/719 198/925 160/745 \r
f 311/1547 328/1640 318/1586 \r
f 191/888 327/1636 323/1617 \r
f 78/347 271/1321 186/866 \r
f 45/194 239/1158 135/633 \r
f 195/909 50/221 188/874 \r
f 66/292 300/1482 181/839 \r
f 213/1005 216/1023 217/1029 \r
f 299/1476 261/1272 302/1494 \r
f 301/1488 296/1454 200/934 \r
f 301/1487 200/933 261/1271 \r
f 100/455 105/486 167/779 \r
f 240/1166 242/1176 293/1440 \r
f 338/1697 185/862 38/151 \r
f 306/1519 345/1727 185/861 \r
f 119/562 156/736 248/1211 \r
f 238/1151 237/1147 233/1122 \r
f 283/1383 284/1391 285/1397 \r
f 183/850 339/1703 21/76 \r
f 75/335 81/363 85/382 \r
f 299/1475 301/1486 261/1270 \r
f 276/1341 146/690 32/125 \r
f 63/278 267/1296 287/1406 \r
f 92/413 85/381 247/1207 \r
f 8/25 135/632 36/144 \r
f 293/1439 299/1474 240/1165 \r
f 122/579 7/21 80/358 \r
f 200/932 112/531 362/1809 \r
f 137/644 132/621 139/658 \r
f 320/1599 207/971 43/180 \r
f 39/159 51/227 104/479 \r
f 355/1775 306/1518 340/1710 \r
f 202/942 140/664 151/708 \r
f 202/941 168/785 12/48 \r
f 345/1726 306/1517 355/1774 \r
f 329/1647 323/1616 327/1635 \r
f 297/1465 109/516 42/174 \r
f 278/1356 140/663 202/941 \r
f 12/47 47/205 26/103 \r
f 107/497 93/418 161/751 \r
f 164/764 122/578 207/970 \r
f 346/1731 262/1275 79/353 \r
f 220/1046 139/657 138/651 \r
f 156/735 119/561 254/1240 \r
f 129/604 137/643 171/798 \r
f 133/626 138/650 129/603 \r
f 12/46 199/929 278/1355 \r
f 108/507 100/454 99/446 \r
f 71/317 319/1591 29/114 \r
f 253/1234 23/85 291/1427 \r
f 353/1765 351/1755 348/1741 \r
f 141/670 103/473 90/402 \r
f 302/1493 305/1512 240/1164 \r
f 237/1146 240/1163 305/1511 \r
f 265/1286 120/565 285/1396 \r
f 153/718 149/700 160/744 \r
f 300/1481 73/328 192/895 \r
f 226/1083 222/1060 224/1074 \r
f 167/778 303/1499 35/135 \r
f 36/143 258/1257 90/401 \r
f 217/1028 214/1010 211/994 \r
f 332/1662 73/327 314/1564 \r
f 235/1132 233/1121 237/1145 \r
f 197/919 206/965 105/485 \r
f 315/1566 312/1553 310/1541 \r
f 62/273 164/763 212/999 \r
f 52/232 126/592 317/1580 \r
f 239/1157 18/65 100/453 \r
f 179/829 70/311 69/307 \r
f 298/1468 86/389 11/42 \r
f 219/1039 214/1009 217/1027 \r
f 84/376 85/380 81/362 \r
f 249/1214 270/1314 190/881 \r
f 7/20 122/577 62/272 \r
f 86/388 80/357 7/19 \r
f 212/998 271/1320 62/271 \r
f 213/1004 208/976 220/1045 \r
f 253/1233 81/361 57/251 \r
f 3/8 203/947 182/843 \r
f 321/1605 103/472 64/285 \r
f 52/231 317/1579 284/1390 \r
f 358/1789 352/1760 313/1558 \r
f 190/880 31/119 249/1213 \r
f 25/96 79/352 184/855 \r
f 358/1788 362/1808 360/1798 \r
f 144/681 297/1464 22/81 \r
f 277/1348 225/1078 347/1736 \r
f 321/1604 64/284 343/1717 \r
f 251/1221 43/179 91/408 \r
f 310/1540 307/1523 311/1546 \r
f 205/959 110/520 10/35 \r
f 17/64 109/515 297/1463 \r
f 297/1462 144/680 76/343 \r
f 297/1462 76/343 17/64 \r
f 289/1415 180/835 45/193 \r
f 292/1433 282/1375 294/1445 \r
f 149/699 268/1301 24/90 \r
f 86/387 7/18 215/1017 \r
f 359/1794 308/1532 361/1802 \r
f 171/797 165/769 129/602 \r
f 251/1220 91/407 303/1498 \r
f 266/1290 183/849 44/187 \r
f 61/263 27/106 42/173 \r
f 174/811 153/717 55/243 \r
f 91/406 207/969 122/576 \r
f 218/1033 252/1225 253/1232 \r
f 17/63 76/342 330/1657 \r
f 32/124 326/1630 338/1696 \r
f 11/41 304/1506 141/669 \r
f 148/694 131/613 111/525 \r
f 192/894 199/928 300/1480 \r
f 17/62 20/74 109/514 \r
f 331/1658 175/815 360/1797 \r
f 211/993 105/484 209/983 \r
f 20/74 193/901 109/513 \r
f 234/1128 233/1120 231/1107 \r
f 137/642 206/964 197/918 \r
f 126/591 64/283 304/1505 \r
f 20/73 17/62 330/1656 \r
f 273/1330 317/1578 336/1684 \r
f 318/1585 327/1634 320/1598 \r
f 333/1668 328/1639 348/1740 \r
f 85/379 84/375 247/1206 \r
f 191/887 320/1597 327/1633 \r
f 359/1793 313/1557 308/1531 \r
f 340/1709 140/662 355/1773 \r
f 13/52 44/186 21/75 \r
f 156/734 254/1239 248/1210 \r
f 309/1535 308/1530 313/1557 \r
f 20/72 330/1655 54/241 \r
f 225/1077 277/1347 8/24 \r
f 362/1807 358/1787 359/1792 \r
f 247/1205 230/1100 92/412 \r
f 54/241 170/793 20/72 \r
f 209/982 213/1003 211/992 \r
f 193/901 20/71 123/584 \r
f 322/1613 123/584 20/71 \r
f 20/71 170/793 322/1613 \r
f 117/548 71/316 101/460 \r
f 100/452 167/777 239/1156 \r
f 55/242 193/901 174/810 \r
f 73/326 66/291 314/1563 \r
f 224/1073 106/491 226/1082 \r
f 71/316 357/1780 281/1369 \r
f 133/625 106/490 224/1072 \r
f 87/393 193/900 123/583 \r
f 87/393 174/809 193/900 \r
f 123/583 322/1612 87/393 \r
f 23/84 253/1231 57/250 \r
f 253/1230 246/1198 247/1204 \r
f 286/1402 87/393 322/1612 \r
f 286/1403 322/1611 170/792 \r
f 94/422 289/1414 245/1193 \r
f 199/927 26/102 300/1479 \r
f 87/393 286/1402 290/1420 \r
f 210/987 290/1420 286/1402 \r
f 39/158 165/768 171/796 \r
f 302/1492 361/1801 308/1529 \r
f 304/1504 317/1577 126/590 \r
f 54/240 136/637 170/792 \r
f 54/240 29/113 136/637 \r
f 105/483 108/506 197/917 \r
f 76/341 54/240 330/1654 \r
f 29/113 54/240 227/1088 \r
f 76/341 227/1088 54/240 \r
f 252/1224 269/1309 241/1170 `;var W2=typeof Float32Array<"u"?Float32Array:Array;function Hf(){var u=new W2(3);return W2!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function Q2(u,a,f){var c=new W2(3);return c[0]=u,c[1]=a,c[2]=f,c}(function(){var u=Hf();return function(a,f,c,v,h,m){var d,y;for(f||(f=3),c||(c=0),v?y=Math.min(v*f+c,a.length):y=a.length,d=c;d<y;d+=f)u[0]=a[d],u[1]=a[d+1],u[2]=a[d+2],h(u,u,m),a[d]=u[0],a[d+1]=u[1],a[d+2]=u[2];return a}})();class Gf{fileContents;defaultModelName;result;currentMaterial;currentGroup;smoothingGroup;currentNode;currentObjectNode;currentMesh;constructor(a,f){this._reset(),this.fileContents=a,this.defaultModelName=f||"untitled"}_reset(){const a={name:"RootNode",parent:null,children:[],meshIndices:[]};this.result={rootNode:a,meshes:[],materialLibraries:[]},this.currentMesh=this._createNewMesh(this.defaultModelName),this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(this.defaultModelName,a),this.currentNode.meshIndices.push(0),this.currentObjectNode=this.currentNode,this.currentMaterial="",this.currentGroup="",this.smoothingGroup=0}parse(){this._reset();const a=c=>{const v=c.indexOf("#");return v>-1?c.substring(0,v):c},f=this.fileContents.split(`
`);for(let c=0;c<f.length;c+=1){const h=a(f[c]).replace(/\s+/g," ").trim().split(" ");switch(h[0].toLowerCase()){case"o":this._parseObject(h);break;case"g":this._parseGroup(h);break;case"v":this._parseVertexCoords(h);break;case"vt":this._parseTextureCoords(h);break;case"vn":this._parseVertexNormal(h);break;case"l":this._parseLine(h);break;case"s":this._parseSmoothShadingStatement(h);break;case"f":this._parsePolygon(h);break;case"mtllib":this._parseMtlLib(h);break;case"usemtl":this._parseUseMtl(h);break}}return this.result}_createNewMesh(a){return{name:a,vertices:[],textureCoords:[],vertexNormals:[],faces:[],lines:[]}}_createNewNode(a,f){const c={name:a,parent:f,children:[],meshIndices:[]};return f.children.push(c),c}_parseObject(a){const f=a.length>=2?a[1]:this.defaultModelName;if(this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0){this.currentMesh=this._createNewMesh(f);const c=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentObjectNode=this._createNewNode(f,this.result.rootNode),this.currentObjectNode.meshIndices.push(c),this.currentNode=this.currentObjectNode}else this.currentMesh.name=f,this.currentNode.name=f,this.currentObjectNode.name=f;this.currentGroup="",this.smoothingGroup=0}_parseGroup(a){if(a.length!=2)throw new Error("Group statements must have exactly 1 argument (eg. g group_1)");const f=a[1];if(this.currentGroup!==f){const c=this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0,v=this.currentNode===this.currentObjectNode;if(c||v)if(c){this.currentMesh=this._createNewMesh(f);const h=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(h)}else this.currentMesh.name=f,v?(this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(0),this.currentObjectNode.meshIndices=[]):this.currentNode.name=f;else this.currentMesh.name=f,this.currentNode.name=f;this.currentGroup=f}}_parseVertexCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,v=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertices.push(Q2(f,c,v))}_parseTextureCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,v=a.length>=4?parseFloat(a[3]):0;this.currentMesh.textureCoords.push(Q2(f,c,v))}_parseVertexNormal(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,v=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertexNormals.push(Q2(f,c,v))}_parseLine(a){const f=a.length-1;if(f<2)throw new Error("Line statement has less than 2 vertices");const c=[];for(let v=0;v<f;v+=1){const m=a[v+1].split("/");if(m.length<1||m.length>2)throw new Error("Too many values (separated by /) for a single vertex");let d=0,y=0;d=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),c.push({vertexIndex:d,textureCoordsIndex:y})}this.currentMesh.lines.push(c)}_parsePolygon(a){const f=a.length-1;if(f<3)throw new Error("Face statement has less than 3 vertices");const c={material:this.currentMaterial,group:this.currentGroup,smoothingGroup:this.smoothingGroup,vertices:[]};for(let v=0;v<f;v+=1){const m=a[v+1].split("/");if(m.length<1||m.length>3)throw new Error("Too many values (separated by /) for a single vertex");let d=0,y=0,b=0;if(d=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),m.length>2&&(b=parseInt(m[2])),d==0)throw"Faces uses invalid vertex index of 0";d<0&&(d=this.currentMesh.vertices.length+1+d),c.vertices.push({vertexIndex:d,textureCoordsIndex:y,vertexNormalIndex:b})}this.currentMesh.faces.push(c)}_parseMtlLib(a){a.length>=2&&this.result.materialLibraries.push(a[1])}_parseUseMtl(a){a.length>=2&&(this.currentMaterial=a[1])}_parseSmoothShadingStatement(a){if(a.length!=2)throw"Smoothing group statements must have exactly 1 argument (eg. s <number|off>)";const f=a[1].toLowerCase()=="off"?0:parseInt(a[1]);this.smoothingGroup=f}}function qf(u,a){const f=u.length/3,c=new Float32Array(u.length);for(let v=0;v<a.length;v+=3){const h=a[v]*3,m=a[v+1]*3,d=a[v+2]*3,y=u[h],b=u[h+1],x=u[h+2],D=u[m],G=u[m+1],j=u[m+2],q=u[d],B=u[d+1],O=u[d+2],K=D-y,Z=G-b,w=j-x,Q=q-y,F=B-b,k=O-x,I=Z*k-w*F,_t=w*Q-K*k,xt=K*F-Z*Q;c[h]+=I,c[h+1]+=_t,c[h+2]+=xt,c[m]+=I,c[m+1]+=_t,c[m+2]+=xt,c[d]+=I,c[d+1]+=_t,c[d+2]+=xt}for(let v=0;v<f;v++){const h=v*3,m=c[h],d=c[h+1],y=c[h+2],b=Math.sqrt(m*m+d*d+y*y);b>0?(c[h]=m/b,c[h+1]=d/b,c[h+2]=y/b):(c[h]=0,c[h+1]=1,c[h+2]=0)}return c}function wf(u,a=!0){const f=new Map,c=[],v=[],h=[],m=[];let d=0;for(const G of u.faces){const j=[];for(const q of G.vertices){const B=`${q.vertexIndex}/${q.textureCoordsIndex}/${q.vertexNormalIndex}`;let O=f.get(B);if(O===void 0){O=d++,f.set(B,O);const K=q.vertexIndex-1;if(K>=0&&K<u.vertices.length){const Z=u.vertices[K];c.push(Z[0],Z[1],Z[2])}else c.push(0,0,0);if(q.vertexNormalIndex>0){const Z=q.vertexNormalIndex-1;if(Z>=0&&Z<u.vertexNormals.length){const w=u.vertexNormals[Z];v.push(w[0],w[1],w[2])}else v.push(0,1,0)}else v.push(0,1,0);if(q.textureCoordsIndex>0){const Z=q.textureCoordsIndex-1;if(Z>=0&&Z<u.textureCoords.length){const w=u.textureCoords[Z];h.push(w[0],w[1])}else h.push(0,0)}else h.push(0,0)}j.push(O)}for(let q=1;q<j.length-1;q++)m.push(j[0],j[q],j[q+1])}const y=new Float32Array(c),b=new Uint16Array(m);let x=new Float32Array(v);const D=u.vertexNormals.length===0;return a&&D&&(x=qf(y,b)),{vertices:y,normals:x,uvs:new Float32Array(h),indices:b}}function Yf(u,a=!0){const c=new Gf(u).parse();return wf(c.meshes[0],a)}class Vf extends Rf{onSetup(){super.onSetup()}update(a){if(Y0.isKeyPressed("w")){const v=this.getForward();Ge(v,v,5*a),this.translate(v)}if(Y0.isKeyPressed("s")){const v=this.getBackward();Ge(v,v,5*a),this.translate(v)}if(Y0.isKeyPressed("a")){const v=this.getLeft();Ge(v,v,5*a),this.translate(v)}if(Y0.isKeyPressed("d")){const v=this.getRight();Ge(v,v,5*a),this.translate(v)}if(Y0.isKeyPressed(" ")){const v=this.getUp();Ge(v,v,5*a),this.translate(v)}if(Y0.isKeyPressed("Control")){const v=this.getDown();Ge(v,v,5*a),this.translate(v)}Y0.isKeyPressed("q")&&this.rotateY(-2*a),Y0.isKeyPressed("e")&&this.rotateY(2*a),Y0.isKeyPressed("r")&&this.rotateX(-2*a),Y0.isKeyPressed("f")&&this.rotateX(2*a),super.update(a)}}class S7 extends V1{rotationSpeed=Math.PI/8;update(a){super.update(a),this.rotateY(this.rotationSpeed*a),this.rotateX(this.rotationSpeed*a*2),this.rotateZ(this.rotationSpeed*a*3)}}class Xf extends V1{amplitude=1;frequency=1;phase=0;initialPosition=_7();totalTime=0;onSetup(){super.onSetup(),Uf(this.initialPosition,this.position)}update(a){const f=Math.sin(this.frequency*this.totalTime+this.phase)*this.amplitude;this.setPosition(this.initialPosition[0],this.initialPosition[1]+f,this.initialPosition[2]),this.totalTime+=a,this.rotateX(.5*a),this.rotateY(.3*a),this.rotateZ(.2*a),super.update(a)}}class jf extends Df{rotationSpeed=Math.PI/4;update(a){this.rotateY(this.rotationSpeed*a),super.update(a)}}class Qf extends Nf{orbitRadius=15;speed=1;heightOffset=0;phaseOffset=0;totalTime=0;setOrbitParameters(a,f,c,v){this.orbitRadius=a,this.speed=f,this.heightOffset=c,this.phaseOffset=v}update(a){this.totalTime+=a;const f=this.totalTime*this.speed+this.phaseOffset,c=Math.cos(f)*this.orbitRadius,v=Math.sin(f)*this.orbitRadius,h=Math.sin(this.totalTime*this.speed*.5+this.phaseOffset)*.2+this.heightOffset;this.setPosition(c,h,v),super.update(a)}}class Zf extends _f{constructor(a){super(a);const f=Yf(Lf),c=hr.create("cow",f.vertices,f.normals,f.uvs,f.indices);console.log("Cow Mesh Loaded:",c);const v=32,h=v,m=5e3,d=32;this.rootNode=new k2,this.rootNode.name="rootNode";const y=new jf;y.name="directionalLight",y.color=xf(1,0,0),y.intensity=.3,y.setParent(this.rootNode),this.rootNode.addChild(y);for(let B=0;B<d;B++){const O=new Qf;O.name=`pointLight${B}`,O.intensity=50,O.radius=30,O.color=qe(Math.random(),Math.random(),Math.random(),1),O.setParent(this.rootNode),this.rootNode.addChild(O);const K=5+B*2,Z=.2+B*.1,w=1+B*1,Q=B*Math.PI*2/d;O.setOrbitParameters(K,Z,w,Q);const F=new V1;F.shader=j1.create(we.vertexSource,we.unliFragmentSource),F.name=`pointLightBody${B}`,F.setScale(.5,.5,.5),F.color=O.color,F.setParent(O),O.addChild(F)}const b=4;for(let B=0;B<b;B++){const O=new p7;O.name=`spotLight${B}`,O.intensity=500,O.range=60,O.angle=Math.PI/6;const K=B/b*Math.PI*2,Z=40;O.setPosition(Math.cos(K)*Z,20,Math.sin(K)*Z),O.rotateY(K+Math.PI),O.rotateX(Math.PI/4);const w=[qe(1,0,0,1),qe(0,1,0,1),qe(0,0,1,1),qe(1,1,0,1)];O.color=w[B],O.setParent(this.rootNode),this.rootNode.addChild(O);const Q=new V1;Q.shader=j1.create(we.vertexSource,we.unliFragmentSource),Q.name=`spotLightBody${B}`,Q.setScale(.7,.7,.7),Q.color=O.color,Q.setParent(O),O.addChild(Q)}const x=new V1;x.name="floor",x.setPosition(0,-10,0),x.setScale(100,.5,100),x.rotateX(.2),x.color=[1,1,1,1],x.setParent(this.rootNode),this.rootNode.addChild(x);let D=this.rootNode;for(let B=0;B<v;B++){const O=new S7;O.name=`cube${B}`,O.setParent(D),D.addChild(O),O.setPosition(.6,.1,0);const K=.9-B/v*.4;O.setScale(K,K,K),B===0&&O.setScale(8,8,8);const Z=B/v*360,w=Math.abs(Math.sin(Z*Math.PI/180)),Q=Math.abs(Math.sin((Z+120)*Math.PI/180)),F=Math.abs(Math.sin((Z+240)*Math.PI/180));O.color=[w,Q,F,1],D=O}let G=this.rootNode;for(let B=0;B<h;B++){const O=new S7;O.name=`oppositeCube${B}`,O.setParent(G),G.addChild(O),O.setPosition(-.6,-.1,0);const K=.9-B/h*.4;O.setScale(K,K,K),B===0&&O.setScale(8,8,8);const Z=B/h*360,w=Math.abs(Math.sin(Z*Math.PI/180)),Q=Math.abs(Math.sin((Z+120)*Math.PI/180)),F=Math.abs(Math.sin((Z+240)*Math.PI/180));O.color=[w,Q,F,1],G=O}const j=new Vf;j.setPosition(0,100,-5),j.rotateY(Math.PI),j.rotateX(-Math.PI/2),j.name="camera",j.setParent(this.rootNode),this.rootNode.addChild(j);const q=new p7;q.name="cameraSpotlight",q.intensity=100,q.range=800,q.angle=Math.PI/8,q.color=qe(1,1,1,1),q.setParent(j),j.addChild(q);for(let B=0;B<m;B++){const O=new Xf;O.mesh=c;let K,Z,w;do K=Math.random()*100-50,Z=Math.random()*200-100,w=Math.random()*100-50;while(w<0&&Math.abs(K)<20&&Math.abs(Z)<20);O.setPosition(K,Z,w),O.setScale(.002,.002,.002),O.color=[Math.random(),Math.random(),Math.random(),1],O.amplitude=1,O.frequency=1,O.phase=B*Math.PI/10,O.name=`sineWaveMesh${B}`,O.rotateX(B*Math.PI/100),O.rotateY(B*Math.PI/100/2),O.rotateZ(B*Math.PI/100/3),O.setParent(this.rootNode),this.rootNode.addChild(O)}this.setupNodes(this.rootNode)}}let fr=null;const Kf=()=>{const u=$2.c(3),a=Ve.useRef(null),f=Ve.useRef(!1);let c,v;u[0]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{if(!(!a.current||f.current))return f.current=!0,fr=new yf({canvas:a.current}),tf.setCurrentScene(Jf),()=>{fr&&(fr.destroy?.(),fr=null,f.current=!1)}},v=[],u[0]=c,u[1]=v):(c=u[0],v=u[1]),Ve.useEffect(c,v);let h;return u[2]===Symbol.for("react.memo_cache_sentinel")?(h=Ye.jsx("canvas",{ref:a,id:"game-canvas",style:{width:"100%",height:"100%"}}),u[2]=h):h=u[2],h};function Jf(u){return new Zf(u)}function Ff(){const u=$2.c(1);let a;return u[0]===Symbol.for("react.memo_cache_sentinel")?(a=Ye.jsx(Kf,{}),u[0]=a):a=u[0],a}const Wf=Ve.createContext(null),$f=u=>{const a=$2.c(5),{children:f}=u,[c,v]=Ve.useState();let h;a[0]!==c?(h={enginok:c,setEnginokInstance:v},a[0]=c,a[1]=h):h=a[1];let m;return a[2]!==f||a[3]!==h?(m=Ye.jsx(Wf.Provider,{value:h,children:f}),a[2]=f,a[3]=h,a[4]=m):m=a[4],m};r4.createRoot(document.getElementById("root")).render(Ye.jsx(Ve.StrictMode,{children:Ye.jsx($f,{children:Ye.jsx(Ff,{})})}));
