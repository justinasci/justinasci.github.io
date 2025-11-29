(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function f(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(o){if(o.ep)return;o.ep=!0;const d=f(o);fetch(o.href,d)}})();var L3={exports:{}},Y1={};var n5;function $8(){if(n5)return Y1;n5=1;var u=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function f(c,o,d){var m=null;if(d!==void 0&&(m=""+d),o.key!==void 0&&(m=""+o.key),"key"in o){d={};for(var h in o)h!=="key"&&(d[h]=o[h])}else d=o;return o=d.ref,{$$typeof:u,type:c,key:m,ref:o!==void 0?o:null,props:d}}return Y1.Fragment=a,Y1.jsx=f,Y1.jsxs=f,Y1}var e5;function k8(){return e5||(e5=1,L3.exports=$8()),L3.exports}var Ve=k8(),B3={exports:{}},I={};var r5;function I8(){if(r5)return I;r5=1;var u=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.iterator;function j(S){return S===null||typeof S!="object"?null:(S=w&&S[w]||S["@@iterator"],typeof S=="function"?S:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,B={};function Z(S,D,G){this.props=S,this.context=D,this.refs=B,this.updater=G||L}Z.prototype.isReactComponent={},Z.prototype.setState=function(S,D){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,D,"setState")},Z.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function J(){}J.prototype=Z.prototype;function q(S,D,G){this.props=S,this.context=D,this.refs=B,this.updater=G||L}var Q=q.prototype=new J;Q.constructor=q,U(Q,Z.prototype),Q.isPureReactComponent=!0;var P=Array.isArray;function $(){}var k={H:null,A:null,T:null,S:null},_0=Object.prototype.hasOwnProperty;function U0(S,D,G){var V=G.ref;return{$$typeof:u,type:S,key:D,ref:V!==void 0?V:null,props:G}}function pt(S,D){return U0(S.type,D,S.props)}function F0(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function L0(S){var D={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(G){return D[G]})}var it=/\/+/g;function h0(S,D){return typeof S=="object"&&S!==null&&S.key!=null?L0(""+S.key):D.toString(36)}function Ot(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then($,$):(S.status="pending",S.then(function(D){S.status==="pending"&&(S.status="fulfilled",S.value=D)},function(D){S.status==="pending"&&(S.status="rejected",S.reason=D)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function x(S,D,G,V,t0){var r0=typeof S;(r0==="undefined"||r0==="boolean")&&(S=null);var v0=!1;if(S===null)v0=!0;else switch(r0){case"bigint":case"string":case"number":v0=!0;break;case"object":switch(S.$$typeof){case u:case a:v0=!0;break;case N:return v0=S._init,x(v0(S._payload),D,G,V,t0)}}if(v0)return t0=t0(S),v0=V===""?"."+h0(S,0):V,P(t0)?(G="",v0!=null&&(G=v0.replace(it,"$&/")+"/"),x(t0,D,G,"",function(Je){return Je})):t0!=null&&(F0(t0)&&(t0=pt(t0,G+(t0.key==null||S&&S.key===t0.key?"":(""+t0.key).replace(it,"$&/")+"/")+v0)),D.push(t0)),1;v0=0;var k0=V===""?".":V+":";if(P(S))for(var O0=0;O0<S.length;O0++)V=S[O0],r0=k0+h0(V,O0),v0+=x(V,D,G,r0,t0);else if(O0=j(S),typeof O0=="function")for(S=O0.call(S),O0=0;!(V=S.next()).done;)V=V.value,r0=k0+h0(V,O0++),v0+=x(V,D,G,r0,t0);else if(r0==="object"){if(typeof S.then=="function")return x(Ot(S),D,G,V,t0);throw D=String(S),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return v0}function H(S,D,G){if(S==null)return S;var V=[],t0=0;return x(S,V,"","",function(r0){return D.call(G,r0,t0++)}),V}function W(S){if(S._status===-1){var D=S._result;D=D(),D.then(function(G){(S._status===0||S._status===-1)&&(S._status=1,S._result=G)},function(G){(S._status===0||S._status===-1)&&(S._status=2,S._result=G)}),S._status===-1&&(S._status=0,S._result=D)}if(S._status===1)return S._result.default;throw S._result}var g0=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},b0={map:H,forEach:function(S,D,G){H(S,function(){D.apply(this,arguments)},G)},count:function(S){var D=0;return H(S,function(){D++}),D},toArray:function(S){return H(S,function(D){return D})||[]},only:function(S){if(!F0(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return I.Activity=R,I.Children=b0,I.Component=Z,I.Fragment=f,I.Profiler=o,I.PureComponent=q,I.StrictMode=c,I.Suspense=y,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,I.__COMPILER_RUNTIME={__proto__:null,c:function(S){return k.H.useMemoCache(S)}},I.cache=function(S){return function(){return S.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(S,D,G){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var V=U({},S.props),t0=S.key;if(D!=null)for(r0 in D.key!==void 0&&(t0=""+D.key),D)!_0.call(D,r0)||r0==="key"||r0==="__self"||r0==="__source"||r0==="ref"&&D.ref===void 0||(V[r0]=D[r0]);var r0=arguments.length-2;if(r0===1)V.children=G;else if(1<r0){for(var v0=Array(r0),k0=0;k0<r0;k0++)v0[k0]=arguments[k0+2];V.children=v0}return U0(S.type,t0,V)},I.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},I.createElement=function(S,D,G){var V,t0={},r0=null;if(D!=null)for(V in D.key!==void 0&&(r0=""+D.key),D)_0.call(D,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(t0[V]=D[V]);var v0=arguments.length-2;if(v0===1)t0.children=G;else if(1<v0){for(var k0=Array(v0),O0=0;O0<v0;O0++)k0[O0]=arguments[O0+2];t0.children=k0}if(S&&S.defaultProps)for(V in v0=S.defaultProps,v0)t0[V]===void 0&&(t0[V]=v0[V]);return U0(S,r0,t0)},I.createRef=function(){return{current:null}},I.forwardRef=function(S){return{$$typeof:h,render:S}},I.isValidElement=F0,I.lazy=function(S){return{$$typeof:N,_payload:{_status:-1,_result:S},_init:W}},I.memo=function(S,D){return{$$typeof:b,type:S,compare:D===void 0?null:D}},I.startTransition=function(S){var D=k.T,G={};k.T=G;try{var V=S(),t0=k.S;t0!==null&&t0(G,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then($,g0)}catch(r0){g0(r0)}finally{D!==null&&G.types!==null&&(D.types=G.types),k.T=D}},I.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},I.use=function(S){return k.H.use(S)},I.useActionState=function(S,D,G){return k.H.useActionState(S,D,G)},I.useCallback=function(S,D){return k.H.useCallback(S,D)},I.useContext=function(S){return k.H.useContext(S)},I.useDebugValue=function(){},I.useDeferredValue=function(S,D){return k.H.useDeferredValue(S,D)},I.useEffect=function(S,D){return k.H.useEffect(S,D)},I.useEffectEvent=function(S){return k.H.useEffectEvent(S)},I.useId=function(){return k.H.useId()},I.useImperativeHandle=function(S,D,G){return k.H.useImperativeHandle(S,D,G)},I.useInsertionEffect=function(S,D){return k.H.useInsertionEffect(S,D)},I.useLayoutEffect=function(S,D){return k.H.useLayoutEffect(S,D)},I.useMemo=function(S,D){return k.H.useMemo(S,D)},I.useOptimistic=function(S,D){return k.H.useOptimistic(S,D)},I.useReducer=function(S,D,G){return k.H.useReducer(S,D,G)},I.useRef=function(S){return k.H.useRef(S)},I.useState=function(S){return k.H.useState(S)},I.useSyncExternalStore=function(S,D,G){return k.H.useSyncExternalStore(S,D,G)},I.useTransition=function(){return k.H.useTransition()},I.version="19.2.0",I}var l5;function hr(){return l5||(l5=1,B3.exports=I8()),B3.exports}var Xe=hr(),H3={exports:{}},V1={},G3={exports:{}},w3={};var a5;function P8(){return a5||(a5=1,(function(u){function a(x,H){var W=x.length;x.push(H);t:for(;0<W;){var g0=W-1>>>1,b0=x[g0];if(0<o(b0,H))x[g0]=H,x[W]=b0,W=g0;else break t}}function f(x){return x.length===0?null:x[0]}function c(x){if(x.length===0)return null;var H=x[0],W=x.pop();if(W!==H){x[0]=W;t:for(var g0=0,b0=x.length,S=b0>>>1;g0<S;){var D=2*(g0+1)-1,G=x[D],V=D+1,t0=x[V];if(0>o(G,W))V<b0&&0>o(t0,G)?(x[g0]=t0,x[V]=W,g0=V):(x[g0]=G,x[D]=W,g0=D);else if(V<b0&&0>o(t0,W))x[g0]=t0,x[V]=W,g0=V;else break t}}return H}function o(x,H){var W=x.sortIndex-H.sortIndex;return W!==0?W:x.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;u.unstable_now=function(){return d.now()}}else{var m=Date,h=m.now();u.unstable_now=function(){return m.now()-h}}var y=[],b=[],N=1,R=null,w=3,j=!1,L=!1,U=!1,B=!1,Z=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function Q(x){for(var H=f(b);H!==null;){if(H.callback===null)c(b);else if(H.startTime<=x)c(b),H.sortIndex=H.expirationTime,a(y,H);else break;H=f(b)}}function P(x){if(U=!1,Q(x),!L)if(f(y)!==null)L=!0,$||($=!0,L0());else{var H=f(b);H!==null&&Ot(P,H.startTime-x)}}var $=!1,k=-1,_0=5,U0=-1;function pt(){return B?!0:!(u.unstable_now()-U0<_0)}function F0(){if(B=!1,$){var x=u.unstable_now();U0=x;var H=!0;try{t:{L=!1,U&&(U=!1,J(k),k=-1),j=!0;var W=w;try{n:{for(Q(x),R=f(y);R!==null&&!(R.expirationTime>x&&pt());){var g0=R.callback;if(typeof g0=="function"){R.callback=null,w=R.priorityLevel;var b0=g0(R.expirationTime<=x);if(x=u.unstable_now(),typeof b0=="function"){R.callback=b0,Q(x),H=!0;break n}R===f(y)&&c(y),Q(x)}else c(y);R=f(y)}if(R!==null)H=!0;else{var S=f(b);S!==null&&Ot(P,S.startTime-x),H=!1}}break t}finally{R=null,w=W,j=!1}H=void 0}}finally{H?L0():$=!1}}}var L0;if(typeof q=="function")L0=function(){q(F0)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,h0=it.port2;it.port1.onmessage=F0,L0=function(){h0.postMessage(null)}}else L0=function(){Z(F0,0)};function Ot(x,H){k=Z(function(){x(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(x){x.callback=null},u.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_0=0<x?Math.floor(1e3/x):5},u.unstable_getCurrentPriorityLevel=function(){return w},u.unstable_next=function(x){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var W=w;w=H;try{return x()}finally{w=W}},u.unstable_requestPaint=function(){B=!0},u.unstable_runWithPriority=function(x,H){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var W=w;w=x;try{return H()}finally{w=W}},u.unstable_scheduleCallback=function(x,H,W){var g0=u.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?g0+W:g0):W=g0,x){case 1:var b0=-1;break;case 2:b0=250;break;case 5:b0=1073741823;break;case 4:b0=1e4;break;default:b0=5e3}return b0=W+b0,x={id:N++,callback:H,priorityLevel:x,startTime:W,expirationTime:b0,sortIndex:-1},W>g0?(x.sortIndex=W,a(b,x),f(y)===null&&x===f(b)&&(U?(J(k),k=-1):U=!0,Ot(P,W-g0))):(x.sortIndex=b0,a(y,x),L||j||(L=!0,$||($=!0,L0()))),x},u.unstable_shouldYield=pt,u.unstable_wrapCallback=function(x){var H=w;return function(){var W=w;w=H;try{return x.apply(this,arguments)}finally{w=W}}}})(w3)),w3}var i5;function t9(){return i5||(i5=1,G3.exports=P8()),G3.exports}var q3={exports:{}},W0={};var u5;function n9(){if(u5)return W0;u5=1;var u=hr();function a(y){var b="https://react.dev/errors/"+y;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)b+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+y+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(a(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},o=Symbol.for("react.portal");function d(y,b,N){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:y,containerInfo:b,implementation:N}}var m=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(y,b){if(y==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return W0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,W0.createPortal=function(y,b){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(a(299));return d(y,b,null,N)},W0.flushSync=function(y){var b=m.T,N=c.p;try{if(m.T=null,c.p=2,y)return y()}finally{m.T=b,c.p=N,c.d.f()}},W0.preconnect=function(y,b){typeof y=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(y,b))},W0.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},W0.preinit=function(y,b){if(typeof y=="string"&&b&&typeof b.as=="string"){var N=b.as,R=h(N,b.crossOrigin),w=typeof b.integrity=="string"?b.integrity:void 0,j=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;N==="style"?c.d.S(y,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:R,integrity:w,fetchPriority:j}):N==="script"&&c.d.X(y,{crossOrigin:R,integrity:w,fetchPriority:j,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},W0.preinitModule=function(y,b){if(typeof y=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var N=h(b.as,b.crossOrigin);c.d.M(y,{crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(y)},W0.preload=function(y,b){if(typeof y=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var N=b.as,R=h(N,b.crossOrigin);c.d.L(y,N,{crossOrigin:R,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},W0.preloadModule=function(y,b){if(typeof y=="string")if(b){var N=h(b.as,b.crossOrigin);c.d.m(y,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(y)},W0.requestFormReset=function(y){c.d.r(y)},W0.unstable_batchedUpdates=function(y,b){return y(b)},W0.useFormState=function(y,b,N){return m.H.useFormState(y,b,N)},W0.useFormStatus=function(){return m.H.useHostTransitionStatus()},W0.version="19.2.0",W0}var f5;function e9(){if(f5)return q3.exports;f5=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(a){console.error(a)}}return u(),q3.exports=n9(),q3.exports}var c5;function r9(){if(c5)return V1;c5=1;var u=t9(),a=hr(),f=e9();function c(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function m(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(c(188))}function b(t){var n=t.alternate;if(!n){if(n=d(t),n===null)throw Error(c(188));return n!==t?null:t}for(var e=t,r=n;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){e=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return y(l),t;if(i===r)return y(l),n;i=i.sibling}throw Error(c(188))}if(e.return!==r.return)e=l,r=i;else{for(var s=!1,v=l.child;v;){if(v===e){s=!0,e=l,r=i;break}if(v===r){s=!0,r=l,e=i;break}v=v.sibling}if(!s){for(v=i.child;v;){if(v===e){s=!0,e=i,r=l;break}if(v===r){s=!0,r=i,e=l;break}v=v.sibling}if(!s)throw Error(c(189))}}if(e.alternate!==r)throw Error(c(190))}if(e.tag!==3)throw Error(c(188));return e.stateNode.current===e?t:n}function N(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=N(t),n!==null)return n;t=t.sibling}return null}var R=Object.assign,w=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),q=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),U0=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),F0=Symbol.iterator;function L0(t){return t===null||typeof t!="object"?null:(t=F0&&t[F0]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function h0(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case Z:return"Profiler";case B:return"StrictMode";case P:return"Suspense";case $:return"SuspenseList";case U0:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case q:return t.displayName||"Context";case J:return(t._context.displayName||"Context")+".Consumer";case Q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:h0(t.type)||"Memo";case _0:n=t._payload,t=t._init;try{return h0(t(n))}catch{}}return null}var Ot=Array.isArray,x=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},g0=[],b0=-1;function S(t){return{current:t}}function D(t){0>b0||(t.current=g0[b0],g0[b0]=null,b0--)}function G(t,n){b0++,g0[b0]=t.current,t.current=n}var V=S(null),t0=S(null),r0=S(null),v0=S(null);function k0(t,n){switch(G(r0,n),G(t0,t),G(V,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Au(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Au(n),t=_u(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}D(V),G(V,t)}function O0(){D(V),D(t0),D(r0)}function Je(t){t.memoizedState!==null&&G(v0,t);var n=V.current,e=_u(n,t.type);n!==e&&(G(t0,t),G(V,e))}function K1(t){t0.current===t&&(D(V),D(t0)),v0.current===t&&(D(v0),H1._currentValue=W)}var gr,ta;function Un(t){if(gr===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);gr=n&&n[1]||"",ta=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gr+t+ta}var yr=!1;function pr(t,n){if(!t||yr)return"";yr=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(_){var A=_}Reflect.construct(t,[],O)}else{try{O.call()}catch(_){A=_}t.call(O.prototype)}}else{try{throw Error()}catch(_){A=_}(O=t())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(_){if(_&&A&&typeof _.stack=="string")return[_.stack,A.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),s=i[0],v=i[1];if(s&&v){var g=s.split(`
`),M=v.split(`
`);for(l=r=0;r<g.length&&!g[r].includes("DetermineComponentFrameRoot");)r++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(r===g.length||l===M.length)for(r=g.length-1,l=M.length-1;1<=r&&0<=l&&g[r]!==M[l];)l--;for(;1<=r&&0<=l;r--,l--)if(g[r]!==M[l]){if(r!==1||l!==1)do if(r--,l--,0>l||g[r]!==M[l]){var z=`
`+g[r].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=r&&0<=l);break}}}finally{yr=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Un(e):""}function x5(t,n){switch(t.tag){case 26:case 27:case 5:return Un(t.type);case 16:return Un("Lazy");case 13:return t.child!==n&&n!==null?Un("Suspense Fallback"):Un("Suspense");case 19:return Un("SuspenseList");case 0:case 15:return pr(t.type,!1);case 11:return pr(t.type.render,!1);case 1:return pr(t.type,!0);case 31:return Un("Activity");default:return""}}function na(t){try{var n="",e=null;do n+=x5(t,e),e=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Sr=Object.prototype.hasOwnProperty,br=u.unstable_scheduleCallback,Er=u.unstable_cancelCallback,C5=u.unstable_shouldYield,R5=u.unstable_requestPaint,ut=u.unstable_now,O5=u.unstable_getCurrentPriorityLevel,ea=u.unstable_ImmediatePriority,ra=u.unstable_UserBlockingPriority,J1=u.unstable_NormalPriority,D5=u.unstable_LowPriority,la=u.unstable_IdlePriority,N5=u.log,U5=u.unstable_setDisableYieldValue,Fe=null,ft=null;function fn(t){if(typeof N5=="function"&&U5(t),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Fe,t)}catch{}}var ct=Math.clz32?Math.clz32:H5,L5=Math.log,B5=Math.LN2;function H5(t){return t>>>=0,t===0?32:31-(L5(t)/B5|0)|0}var F1=256,W1=262144,$1=4194304;function Ln(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function k1(t,n,e){var r=t.pendingLanes;if(r===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var v=r&134217727;return v!==0?(r=v&~i,r!==0?l=Ln(r):(s&=v,s!==0?l=Ln(s):e||(e=v&~t,e!==0&&(l=Ln(e))))):(v=r&~i,v!==0?l=Ln(v):s!==0?l=Ln(s):e||(e=r&~t,e!==0&&(l=Ln(e)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,e=n&-n,i>=e||i===32&&(e&4194048)!==0)?n:l}function We(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function G5(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aa(){var t=$1;return $1<<=1,($1&62914560)===0&&($1=4194304),t}function Tr(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function $e(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function w5(t,n,e,r,l,i){var s=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var v=t.entanglements,g=t.expirationTimes,M=t.hiddenUpdates;for(e=s&~e;0<e;){var z=31-ct(e),O=1<<z;v[z]=0,g[z]=-1;var A=M[z];if(A!==null)for(M[z]=null,z=0;z<A.length;z++){var _=A[z];_!==null&&(_.lane&=-536870913)}e&=~O}r!==0&&ia(t,r,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~n))}function ia(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ct(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|e&261930}function ua(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var r=31-ct(e),l=1<<r;l&n|t[r]&n&&(t[r]|=n),e&=~l}}function fa(t,n){var e=n&-n;return e=(e&42)!==0?1:Mr(e),(e&(t.suspendedLanes|n))!==0?0:e}function Mr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ar(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ca(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Fu(t.type))}function sa(t,n){var e=H.p;try{return H.p=t,n()}finally{H.p=e}}var cn=Math.random().toString(36).slice(2),j0="__reactFiber$"+cn,P0="__reactProps$"+cn,te="__reactContainer$"+cn,_r="__reactEvents$"+cn,q5="__reactListeners$"+cn,Y5="__reactHandles$"+cn,oa="__reactResources$"+cn,ke="__reactMarker$"+cn;function zr(t){delete t[j0],delete t[P0],delete t[_r],delete t[q5],delete t[Y5]}function ne(t){var n=t[j0];if(n)return n;for(var e=t.parentNode;e;){if(n=e[te]||e[j0]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=Nu(t);t!==null;){if(e=t[j0])return e;t=Nu(t)}return n}t=e,e=t.parentNode}return null}function ee(t){if(t=t[j0]||t[te]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ie(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(c(33))}function re(t){var n=t[oa];return n||(n=t[oa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V0(t){t[ke]=!0}var va=new Set,ha={};function Bn(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(ha[t]=n,t=0;t<n.length;t++)va.add(n[t])}var V5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),da={},ma={};function X5(t){return Sr.call(ma,t)?!0:Sr.call(da,t)?!1:V5.test(t)?ma[t]=!0:(da[t]=!0,!1)}function I1(t,n,e){if(X5(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function P1(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function Vt(t,n,e,r){if(r===null)t.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+r)}}function St(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ga(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function j5(t,n,e){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(s){e=""+s,i.call(this,s)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function xr(t){if(!t._valueTracker){var n=ga(t)?"checked":"value";t._valueTracker=j5(t,n,""+t[n])}}function ya(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),r="";return t&&(r=ga(t)?t.checked?"true":"false":t.value),t=r,t!==e?(n.setValue(t),!0):!1}function t2(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Q5=/[\n"\\]/g;function bt(t){return t.replace(Q5,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cr(t,n,e,r,l,i,s,v){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),n!=null?s==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+St(n)):t.value!==""+St(n)&&(t.value=""+St(n)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),n!=null?Rr(t,s,St(n)):e!=null?Rr(t,s,St(e)):r!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+St(v):t.removeAttribute("name")}function pa(t,n,e,r,l,i,s,v){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),n!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){xr(t);return}e=e!=null?""+St(e):"",n=n!=null?""+St(n):e,v||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=v?t.checked:!!r,t.defaultChecked=!!r,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),xr(t)}function Rr(t,n,e){n==="number"&&t2(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function ae(t,n,e,r){if(t=t.options,n){n={};for(var l=0;l<e.length;l++)n["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=n.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&r&&(t[e].defaultSelected=!0)}else{for(e=""+St(e),n=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Sa(t,n,e){if(n!=null&&(n=""+St(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+St(e):""}function ba(t,n,e,r){if(n==null){if(r!=null){if(e!=null)throw Error(c(92));if(Ot(r)){if(1<r.length)throw Error(c(93));r=r[0]}e=r}e==null&&(e=""),n=e}e=St(n),t.defaultValue=e,r=t.textContent,r===e&&r!==""&&r!==null&&(t.value=r),xr(t)}function ie(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var Z5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ea(t,n,e){var r=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,e):typeof e!="number"||e===0||Z5.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function Ta(t,n,e){if(n!=null&&typeof n!="object")throw Error(c(62));if(t=t.style,e!=null){for(var r in e)!e.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&e[l]!==r&&Ea(t,l,r)}else for(var i in n)n.hasOwnProperty(i)&&Ea(t,i,n[i])}function Or(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var K5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function n2(t){return J5.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xt(){}var Dr=null;function Nr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ue=null,fe=null;function Ma(t){var n=ee(t);if(n&&(t=n.stateNode)){var e=t[P0]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cr(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+bt(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var r=e[n];if(r!==t&&r.form===t.form){var l=r[P0]||null;if(!l)throw Error(c(90));Cr(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<e.length;n++)r=e[n],r.form===t.form&&ya(r)}break t;case"textarea":Sa(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&ae(t,!!e.multiple,n,!1)}}}var Ur=!1;function Aa(t,n,e){if(Ur)return t(n,e);Ur=!0;try{var r=t(n);return r}finally{if(Ur=!1,(ue!==null||fe!==null)&&(X2(),ue&&(n=ue,t=fe,fe=ue=null,Ma(n),t)))for(n=0;n<t.length;n++)Ma(t[n])}}function Pe(t,n){var e=t.stateNode;if(e===null)return null;var r=e[P0]||null;if(r===null)return null;e=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(c(231,n,typeof e));return e}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lr=!1;if(jt)try{var t1={};Object.defineProperty(t1,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",t1,t1),window.removeEventListener("test",t1,t1)}catch{Lr=!1}var sn=null,Br=null,e2=null;function _a(){if(e2)return e2;var t,n=Br,e=n.length,r,l="value"in sn?sn.value:sn.textContent,i=l.length;for(t=0;t<e&&n[t]===l[t];t++);var s=e-t;for(r=1;r<=s&&n[e-r]===l[i-r];r++);return e2=l.slice(t,1<r?1-r:void 0)}function r2(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function l2(){return!0}function za(){return!1}function tt(t){function n(e,r,l,i,s){this._reactName=e,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(e=t[v],this[v]=e?e(i):i[v]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?l2:za,this.isPropagationStopped=za,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=l2)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=l2)},persist:function(){},isPersistent:l2}),n}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},a2=tt(Hn),n1=R({},Hn,{view:0,detail:0}),F5=tt(n1),Hr,Gr,e1,i2=R({},n1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==e1&&(e1&&t.type==="mousemove"?(Hr=t.screenX-e1.screenX,Gr=t.screenY-e1.screenY):Gr=Hr=0,e1=t),Hr)},movementY:function(t){return"movementY"in t?t.movementY:Gr}}),xa=tt(i2),W5=R({},i2,{dataTransfer:0}),$5=tt(W5),k5=R({},n1,{relatedTarget:0}),wr=tt(k5),I5=R({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),P5=tt(I5),t6=R({},Hn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n6=tt(t6),e6=R({},Hn,{data:0}),Ca=tt(e6),r6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i6(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=a6[t])?!!n[t]:!1}function qr(){return i6}var u6=R({},n1,{key:function(t){if(t.key){var n=r6[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=r2(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qr,charCode:function(t){return t.type==="keypress"?r2(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?r2(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f6=tt(u6),c6=R({},i2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=tt(c6),s6=R({},n1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qr}),o6=tt(s6),v6=R({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),h6=tt(v6),d6=R({},i2,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m6=tt(d6),g6=R({},Hn,{newState:0,oldState:0}),y6=tt(g6),p6=[9,13,27,32],Yr=jt&&"CompositionEvent"in window,r1=null;jt&&"documentMode"in document&&(r1=document.documentMode);var S6=jt&&"TextEvent"in window&&!r1,Oa=jt&&(!Yr||r1&&8<r1&&11>=r1),Da=" ",Na=!1;function Ua(t,n){switch(t){case"keyup":return p6.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function La(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ce=!1;function b6(t,n){switch(t){case"compositionend":return La(n);case"keypress":return n.which!==32?null:(Na=!0,Da);case"textInput":return t=n.data,t===Da&&Na?null:t;default:return null}}function E6(t,n){if(ce)return t==="compositionend"||!Yr&&Ua(t,n)?(t=_a(),e2=Br=sn=null,ce=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Oa&&n.locale!=="ko"?null:n.data;default:return null}}var T6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ba(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!T6[t.type]:n==="textarea"}function Ha(t,n,e,r){ue?fe?fe.push(r):fe=[r]:ue=r,n=W2(n,"onChange"),0<n.length&&(e=new a2("onChange","change",null,e,r),t.push({event:e,listeners:n}))}var l1=null,a1=null;function M6(t){pu(t,0)}function u2(t){var n=Ie(t);if(ya(n))return t}function Ga(t,n){if(t==="change")return n}var wa=!1;if(jt){var Vr;if(jt){var Xr="oninput"in document;if(!Xr){var qa=document.createElement("div");qa.setAttribute("oninput","return;"),Xr=typeof qa.oninput=="function"}Vr=Xr}else Vr=!1;wa=Vr&&(!document.documentMode||9<document.documentMode)}function Ya(){l1&&(l1.detachEvent("onpropertychange",Va),a1=l1=null)}function Va(t){if(t.propertyName==="value"&&u2(a1)){var n=[];Ha(n,a1,t,Nr(t)),Aa(M6,n)}}function A6(t,n,e){t==="focusin"?(Ya(),l1=n,a1=e,l1.attachEvent("onpropertychange",Va)):t==="focusout"&&Ya()}function _6(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return u2(a1)}function z6(t,n){if(t==="click")return u2(n)}function x6(t,n){if(t==="input"||t==="change")return u2(n)}function C6(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var st=typeof Object.is=="function"?Object.is:C6;function i1(t,n){if(st(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;for(r=0;r<e.length;r++){var l=e[r];if(!Sr.call(n,l)||!st(t[l],n[l]))return!1}return!0}function Xa(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ja(t,n){var e=Xa(t);t=0;for(var r;e;){if(e.nodeType===3){if(r=t+e.textContent.length,t<=n&&r>=n)return{node:e,offset:n-t};t=r}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Xa(e)}}function Qa(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qa(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Za(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=t2(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=t2(t.document)}return n}function jr(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var R6=jt&&"documentMode"in document&&11>=document.documentMode,se=null,Qr=null,u1=null,Zr=!1;function Ka(t,n,e){var r=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Zr||se==null||se!==t2(r)||(r=se,"selectionStart"in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),u1&&i1(u1,r)||(u1=r,r=W2(Qr,"onSelect"),0<r.length&&(n=new a2("onSelect","select",null,n,e),t.push({event:n,listeners:r}),n.target=se)))}function Gn(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var oe={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionrun:Gn("Transition","TransitionRun"),transitionstart:Gn("Transition","TransitionStart"),transitioncancel:Gn("Transition","TransitionCancel"),transitionend:Gn("Transition","TransitionEnd")},Kr={},Ja={};jt&&(Ja=document.createElement("div").style,"AnimationEvent"in window||(delete oe.animationend.animation,delete oe.animationiteration.animation,delete oe.animationstart.animation),"TransitionEvent"in window||delete oe.transitionend.transition);function wn(t){if(Kr[t])return Kr[t];if(!oe[t])return t;var n=oe[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in Ja)return Kr[t]=n[e];return t}var Fa=wn("animationend"),Wa=wn("animationiteration"),$a=wn("animationstart"),O6=wn("transitionrun"),D6=wn("transitionstart"),N6=wn("transitioncancel"),ka=wn("transitionend"),Ia=new Map,Jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jr.push("scrollEnd");function Dt(t,n){Ia.set(t,n),Bn(n,[t])}var f2=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Et=[],ve=0,Fr=0;function c2(){for(var t=ve,n=Fr=ve=0;n<t;){var e=Et[n];Et[n++]=null;var r=Et[n];Et[n++]=null;var l=Et[n];Et[n++]=null;var i=Et[n];if(Et[n++]=null,r!==null&&l!==null){var s=r.pending;s===null?l.next=l:(l.next=s.next,s.next=l),r.pending=l}i!==0&&Pa(e,l,i)}}function s2(t,n,e,r){Et[ve++]=t,Et[ve++]=n,Et[ve++]=e,Et[ve++]=r,Fr|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Wr(t,n,e,r){return s2(t,n,e,r),o2(t)}function qn(t,n){return s2(t,null,null,n),o2(t)}function Pa(t,n,e){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e);for(var l=!1,i=t.return;i!==null;)i.childLanes|=e,r=i.alternate,r!==null&&(r.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&n!==null&&(l=31-ct(e),t=i.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=e|536870912),i):null}function o2(t){if(50<R1)throw R1=0,l3=null,Error(c(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var he={};function U6(t,n,e,r){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,n,e,r){return new U6(t,n,e,r)}function $r(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qt(t,n){var e=t.alternate;return e===null?(e=ot(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function t4(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function v2(t,n,e,r,l,i){var s=0;if(r=t,typeof t=="function")$r(t)&&(s=1);else if(typeof t=="string")s=w8(t,e,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U0:return t=ot(31,e,n,l),t.elementType=U0,t.lanes=i,t;case U:return Yn(e.children,l,i,n);case B:s=8,l|=24;break;case Z:return t=ot(12,e,n,l|2),t.elementType=Z,t.lanes=i,t;case P:return t=ot(13,e,n,l),t.elementType=P,t.lanes=i,t;case $:return t=ot(19,e,n,l),t.elementType=$,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:s=10;break t;case J:s=9;break t;case Q:s=11;break t;case k:s=14;break t;case _0:s=16,r=null;break t}s=29,e=Error(c(130,t===null?"null":typeof t,"")),r=null}return n=ot(s,e,n,l),n.elementType=t,n.type=r,n.lanes=i,n}function Yn(t,n,e,r){return t=ot(7,t,r,n),t.lanes=e,t}function kr(t,n,e){return t=ot(6,t,null,n),t.lanes=e,t}function n4(t){var n=ot(18,null,null,0);return n.stateNode=t,n}function Ir(t,n,e){return n=ot(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var e4=new WeakMap;function Tt(t,n){if(typeof t=="object"&&t!==null){var e=e4.get(t);return e!==void 0?e:(n={value:t,source:n,stack:na(n)},e4.set(t,n),n)}return{value:t,source:n,stack:na(n)}}var de=[],me=0,h2=null,f1=0,Mt=[],At=0,on=null,Ht=1,Gt="";function Zt(t,n){de[me++]=f1,de[me++]=h2,h2=t,f1=n}function r4(t,n,e){Mt[At++]=Ht,Mt[At++]=Gt,Mt[At++]=on,on=t;var r=Ht;t=Gt;var l=32-ct(r)-1;r&=~(1<<l),e+=1;var i=32-ct(n)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Ht=1<<32-ct(n)+l|e<<l|r,Gt=i+t}else Ht=1<<i|e<<l|r,Gt=t}function Pr(t){t.return!==null&&(Zt(t,1),r4(t,1,0))}function tl(t){for(;t===h2;)h2=de[--me],de[me]=null,f1=de[--me],de[me]=null;for(;t===on;)on=Mt[--At],Mt[At]=null,Gt=Mt[--At],Mt[At]=null,Ht=Mt[--At],Mt[At]=null}function l4(t,n){Mt[At++]=Ht,Mt[At++]=Gt,Mt[At++]=on,Ht=n.id,Gt=n.overflow,on=t}var Q0=null,T0=null,f0=!1,vn=null,_t=!1,nl=Error(c(519));function hn(t){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw c1(Tt(n,t)),nl}function a4(t){var n=t.stateNode,e=t.type,r=t.memoizedProps;switch(n[j0]=t,n[P0]=r,e){case"dialog":a0("cancel",n),a0("close",n);break;case"iframe":case"object":case"embed":a0("load",n);break;case"video":case"audio":for(e=0;e<D1.length;e++)a0(D1[e],n);break;case"source":a0("error",n);break;case"img":case"image":case"link":a0("error",n),a0("load",n);break;case"details":a0("toggle",n);break;case"input":a0("invalid",n),pa(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":a0("invalid",n);break;case"textarea":a0("invalid",n),ba(n,r.value,r.defaultValue,r.children)}e=r.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||r.suppressHydrationWarning===!0||Tu(n.textContent,e)?(r.popover!=null&&(a0("beforetoggle",n),a0("toggle",n)),r.onScroll!=null&&a0("scroll",n),r.onScrollEnd!=null&&a0("scrollend",n),r.onClick!=null&&(n.onclick=Xt),n=!0):n=!1,n||hn(t,!0)}function i4(t){for(Q0=t.return;Q0;)switch(Q0.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:Q0=Q0.return}}function ge(t){if(t!==Q0)return!1;if(!f0)return i4(t),f0=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||S3(t.type,t.memoizedProps)),e=!e),e&&T0&&hn(t),i4(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));T0=Du(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));T0=Du(t)}else n===27?(n=T0,xn(t.type)?(t=A3,A3=null,T0=t):T0=n):T0=Q0?xt(t.stateNode.nextSibling):null;return!0}function Vn(){T0=Q0=null,f0=!1}function el(){var t=vn;return t!==null&&(lt===null?lt=t:lt.push.apply(lt,t),vn=null),t}function c1(t){vn===null?vn=[t]:vn.push(t)}var rl=S(null),Xn=null,Kt=null;function dn(t,n,e){G(rl,n._currentValue),n._currentValue=e}function Jt(t){t._currentValue=rl.current,D(rl)}function ll(t,n,e){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===e)break;t=t.return}}function al(t,n,e,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;t:for(;i!==null;){var v=i;i=l;for(var g=0;g<n.length;g++)if(v.context===n[g]){i.lanes|=e,v=i.alternate,v!==null&&(v.lanes|=e),ll(i.return,e,t),r||(s=null);break t}i=v.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=e,i=s.alternate,i!==null&&(i.lanes|=e),ll(s,e,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ye(t,n,e,r){t=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var v=l.type;st(l.pendingProps.value,s.value)||(t!==null?t.push(v):t=[v])}}else if(l===v0.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(H1):t=[H1])}l=l.return}t!==null&&al(n,t,e,r),n.flags|=262144}function d2(t){for(t=t.firstContext;t!==null;){if(!st(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jn(t){Xn=t,Kt=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Z0(t){return u4(Xn,t)}function m2(t,n){return Xn===null&&jn(t),u4(t,n)}function u4(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},Kt===null){if(t===null)throw Error(c(308));Kt=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Kt=Kt.next=n;return e}var L6=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},B6=u.unstable_scheduleCallback,H6=u.unstable_NormalPriority,B0={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function il(){return{controller:new L6,data:new Map,refCount:0}}function s1(t){t.refCount--,t.refCount===0&&B6(H6,function(){t.controller.abort()})}var o1=null,ul=0,pe=0,Se=null;function G6(t,n){if(o1===null){var e=o1=[];ul=0,pe=s3(),Se={status:"pending",value:void 0,then:function(r){e.push(r)}}}return ul++,n.then(f4,f4),n}function f4(){if(--ul===0&&o1!==null){Se!==null&&(Se.status="fulfilled");var t=o1;o1=null,pe=0,Se=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function w6(t,n){var e=[],r={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<e.length;l++)(0,e[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),r}var c4=x.S;x.S=function(t,n){Ki=ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&G6(t,n),c4!==null&&c4(t,n)};var Qn=S(null);function fl(){var t=Qn.current;return t!==null?t:E0.pooledCache}function g2(t,n){n===null?G(Qn,Qn.current):G(Qn,n.pool)}function s4(){var t=fl();return t===null?null:{parent:B0._currentValue,pool:t}}var be=Error(c(460)),cl=Error(c(474)),y2=Error(c(542)),p2={then:function(){}};function o4(t){return t=t.status,t==="fulfilled"||t==="rejected"}function v4(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(Xt,Xt),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,d4(t),t;default:if(typeof n.status=="string")n.then(Xt,Xt);else{if(t=E0,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,d4(t),t}throw Kn=n,be}}function Zn(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Kn=e,be):e}}var Kn=null;function h4(){if(Kn===null)throw Error(c(459));var t=Kn;return Kn=null,t}function d4(t){if(t===be||t===y2)throw Error(c(483))}var Ee=null,v1=0;function S2(t){var n=v1;return v1+=1,Ee===null&&(Ee=[]),v4(Ee,t,n)}function h1(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function b2(t,n){throw n.$$typeof===w?Error(c(525)):(t=Object.prototype.toString.call(n),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function m4(t){function n(E,p){if(t){var T=E.deletions;T===null?(E.deletions=[p],E.flags|=16):T.push(p)}}function e(E,p){if(!t)return null;for(;p!==null;)n(E,p),p=p.sibling;return null}function r(E){for(var p=new Map;E!==null;)E.key!==null?p.set(E.key,E):p.set(E.index,E),E=E.sibling;return p}function l(E,p){return E=Qt(E,p),E.index=0,E.sibling=null,E}function i(E,p,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<p?(E.flags|=67108866,p):T):(E.flags|=67108866,p)):(E.flags|=1048576,p)}function s(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function v(E,p,T,C){return p===null||p.tag!==6?(p=kr(T,E.mode,C),p.return=E,p):(p=l(p,T),p.return=E,p)}function g(E,p,T,C){var K=T.type;return K===U?z(E,p,T.props.children,C,T.key):p!==null&&(p.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===_0&&Zn(K)===p.type)?(p=l(p,T.props),h1(p,T),p.return=E,p):(p=v2(T.type,T.key,T.props,null,E.mode,C),h1(p,T),p.return=E,p)}function M(E,p,T,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==T.containerInfo||p.stateNode.implementation!==T.implementation?(p=Ir(T,E.mode,C),p.return=E,p):(p=l(p,T.children||[]),p.return=E,p)}function z(E,p,T,C,K){return p===null||p.tag!==7?(p=Yn(T,E.mode,C,K),p.return=E,p):(p=l(p,T),p.return=E,p)}function O(E,p,T){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=kr(""+p,E.mode,T),p.return=E,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case j:return T=v2(p.type,p.key,p.props,null,E.mode,T),h1(T,p),T.return=E,T;case L:return p=Ir(p,E.mode,T),p.return=E,p;case _0:return p=Zn(p),O(E,p,T)}if(Ot(p)||L0(p))return p=Yn(p,E.mode,T,null),p.return=E,p;if(typeof p.then=="function")return O(E,S2(p),T);if(p.$$typeof===q)return O(E,m2(E,p),T);b2(E,p)}return null}function A(E,p,T,C){var K=p!==null?p.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return K!==null?null:v(E,p,""+T,C);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case j:return T.key===K?g(E,p,T,C):null;case L:return T.key===K?M(E,p,T,C):null;case _0:return T=Zn(T),A(E,p,T,C)}if(Ot(T)||L0(T))return K!==null?null:z(E,p,T,C,null);if(typeof T.then=="function")return A(E,p,S2(T),C);if(T.$$typeof===q)return A(E,p,m2(E,T),C);b2(E,T)}return null}function _(E,p,T,C,K){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return E=E.get(T)||null,v(p,E,""+C,K);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case j:return E=E.get(C.key===null?T:C.key)||null,g(p,E,C,K);case L:return E=E.get(C.key===null?T:C.key)||null,M(p,E,C,K);case _0:return C=Zn(C),_(E,p,T,C,K)}if(Ot(C)||L0(C))return E=E.get(T)||null,z(p,E,C,K,null);if(typeof C.then=="function")return _(E,p,T,S2(C),K);if(C.$$typeof===q)return _(E,p,T,m2(p,C),K);b2(p,C)}return null}function Y(E,p,T,C){for(var K=null,c0=null,X=p,e0=p=0,u0=null;X!==null&&e0<T.length;e0++){X.index>e0?(u0=X,X=null):u0=X.sibling;var s0=A(E,X,T[e0],C);if(s0===null){X===null&&(X=u0);break}t&&X&&s0.alternate===null&&n(E,X),p=i(s0,p,e0),c0===null?K=s0:c0.sibling=s0,c0=s0,X=u0}if(e0===T.length)return e(E,X),f0&&Zt(E,e0),K;if(X===null){for(;e0<T.length;e0++)X=O(E,T[e0],C),X!==null&&(p=i(X,p,e0),c0===null?K=X:c0.sibling=X,c0=X);return f0&&Zt(E,e0),K}for(X=r(X);e0<T.length;e0++)u0=_(X,E,e0,T[e0],C),u0!==null&&(t&&u0.alternate!==null&&X.delete(u0.key===null?e0:u0.key),p=i(u0,p,e0),c0===null?K=u0:c0.sibling=u0,c0=u0);return t&&X.forEach(function(Nn){return n(E,Nn)}),f0&&Zt(E,e0),K}function F(E,p,T,C){if(T==null)throw Error(c(151));for(var K=null,c0=null,X=p,e0=p=0,u0=null,s0=T.next();X!==null&&!s0.done;e0++,s0=T.next()){X.index>e0?(u0=X,X=null):u0=X.sibling;var Nn=A(E,X,s0.value,C);if(Nn===null){X===null&&(X=u0);break}t&&X&&Nn.alternate===null&&n(E,X),p=i(Nn,p,e0),c0===null?K=Nn:c0.sibling=Nn,c0=Nn,X=u0}if(s0.done)return e(E,X),f0&&Zt(E,e0),K;if(X===null){for(;!s0.done;e0++,s0=T.next())s0=O(E,s0.value,C),s0!==null&&(p=i(s0,p,e0),c0===null?K=s0:c0.sibling=s0,c0=s0);return f0&&Zt(E,e0),K}for(X=r(X);!s0.done;e0++,s0=T.next())s0=_(X,E,e0,s0.value,C),s0!==null&&(t&&s0.alternate!==null&&X.delete(s0.key===null?e0:s0.key),p=i(s0,p,e0),c0===null?K=s0:c0.sibling=s0,c0=s0);return t&&X.forEach(function(W8){return n(E,W8)}),f0&&Zt(E,e0),K}function S0(E,p,T,C){if(typeof T=="object"&&T!==null&&T.type===U&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case j:t:{for(var K=T.key;p!==null;){if(p.key===K){if(K=T.type,K===U){if(p.tag===7){e(E,p.sibling),C=l(p,T.props.children),C.return=E,E=C;break t}}else if(p.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===_0&&Zn(K)===p.type){e(E,p.sibling),C=l(p,T.props),h1(C,T),C.return=E,E=C;break t}e(E,p);break}else n(E,p);p=p.sibling}T.type===U?(C=Yn(T.props.children,E.mode,C,T.key),C.return=E,E=C):(C=v2(T.type,T.key,T.props,null,E.mode,C),h1(C,T),C.return=E,E=C)}return s(E);case L:t:{for(K=T.key;p!==null;){if(p.key===K)if(p.tag===4&&p.stateNode.containerInfo===T.containerInfo&&p.stateNode.implementation===T.implementation){e(E,p.sibling),C=l(p,T.children||[]),C.return=E,E=C;break t}else{e(E,p);break}else n(E,p);p=p.sibling}C=Ir(T,E.mode,C),C.return=E,E=C}return s(E);case _0:return T=Zn(T),S0(E,p,T,C)}if(Ot(T))return Y(E,p,T,C);if(L0(T)){if(K=L0(T),typeof K!="function")throw Error(c(150));return T=K.call(T),F(E,p,T,C)}if(typeof T.then=="function")return S0(E,p,S2(T),C);if(T.$$typeof===q)return S0(E,p,m2(E,T),C);b2(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,p!==null&&p.tag===6?(e(E,p.sibling),C=l(p,T),C.return=E,E=C):(e(E,p),C=kr(T,E.mode,C),C.return=E,E=C),s(E)):e(E,p)}return function(E,p,T,C){try{v1=0;var K=S0(E,p,T,C);return Ee=null,K}catch(X){if(X===be||X===y2)throw X;var c0=ot(29,X,null,E.mode);return c0.lanes=C,c0.return=E,c0}finally{}}}var Jn=m4(!0),g4=m4(!1),mn=!1;function sl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ol(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function gn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function yn(t,n,e){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(o0&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=o2(t),Pa(t,null,e),n}return s2(t,r,n,e),o2(t)}function d1(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,e|=r,n.lanes=e,ua(t,e)}}function vl(t,n){var e=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,e===r)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,e=e.next}while(e!==null);i===null?l=i=n:i=i.next=n}else l=i=n;e={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var hl=!1;function m1(){if(hl){var t=Se;if(t!==null)throw t}}function g1(t,n,e,r){hl=!1;var l=t.updateQueue;mn=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var g=v,M=g.next;g.next=null,s===null?i=M:s.next=M,s=g;var z=t.alternate;z!==null&&(z=z.updateQueue,v=z.lastBaseUpdate,v!==s&&(v===null?z.firstBaseUpdate=M:v.next=M,z.lastBaseUpdate=g))}if(i!==null){var O=l.baseState;s=0,z=M=g=null,v=i;do{var A=v.lane&-536870913,_=A!==v.lane;if(_?(i0&A)===A:(r&A)===A){A!==0&&A===pe&&(hl=!0),z!==null&&(z=z.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var Y=t,F=v;A=n;var S0=e;switch(F.tag){case 1:if(Y=F.payload,typeof Y=="function"){O=Y.call(S0,O,A);break t}O=Y;break t;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=F.payload,A=typeof Y=="function"?Y.call(S0,O,A):Y,A==null)break t;O=R({},O,A);break t;case 2:mn=!0}}A=v.callback,A!==null&&(t.flags|=64,_&&(t.flags|=8192),_=l.callbacks,_===null?l.callbacks=[A]:_.push(A))}else _={lane:A,tag:v.tag,payload:v.payload,callback:v.callback,next:null},z===null?(M=z=_,g=O):z=z.next=_,s|=A;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;_=v,v=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);z===null&&(g=O),l.baseState=g,l.firstBaseUpdate=M,l.lastBaseUpdate=z,i===null&&(l.shared.lanes=0),Tn|=s,t.lanes=s,t.memoizedState=O}}function y4(t,n){if(typeof t!="function")throw Error(c(191,t));t.call(n)}function p4(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)y4(e[t],n)}var Te=S(null),E2=S(0);function S4(t,n){t=en,G(E2,t),G(Te,n),en=t|n.baseLanes}function dl(){G(E2,en),G(Te,Te.current)}function ml(){en=E2.current,D(Te),D(E2)}var vt=S(null),zt=null;function pn(t){var n=t.alternate;G(D0,D0.current&1),G(vt,t),zt===null&&(n===null||Te.current!==null||n.memoizedState!==null)&&(zt=t)}function gl(t){G(D0,D0.current),G(vt,t),zt===null&&(zt=t)}function b4(t){t.tag===22?(G(D0,D0.current),G(vt,t),zt===null&&(zt=t)):Sn()}function Sn(){G(D0,D0.current),G(vt,vt.current)}function ht(t){D(vt),zt===t&&(zt=null),D(D0)}var D0=S(0);function T2(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||T3(e)||M3(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ft=0,n0=null,y0=null,H0=null,M2=!1,Me=!1,Fn=!1,A2=0,y1=0,Ae=null,q6=0;function C0(){throw Error(c(321))}function yl(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!st(t[e],n[e]))return!1;return!0}function pl(t,n,e,r,l,i){return Ft=i,n0=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,x.H=t===null||t.memoizedState===null?ri:Ul,Fn=!1,i=e(r,l),Fn=!1,Me&&(i=T4(n,e,r,l)),E4(t),i}function E4(t){x.H=b1;var n=y0!==null&&y0.next!==null;if(Ft=0,H0=y0=n0=null,M2=!1,y1=0,Ae=null,n)throw Error(c(300));t===null||G0||(t=t.dependencies,t!==null&&d2(t)&&(G0=!0))}function T4(t,n,e,r){n0=t;var l=0;do{if(Me&&(Ae=null),y1=0,Me=!1,25<=l)throw Error(c(301));if(l+=1,H0=y0=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=li,i=n(e,r)}while(Me);return i}function Y6(){var t=x.H,n=t.useState()[0];return n=typeof n.then=="function"?p1(n):n,t=t.useState()[0],(y0!==null?y0.memoizedState:null)!==t&&(n0.flags|=1024),n}function Sl(){var t=A2!==0;return A2=0,t}function bl(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function El(t){if(M2){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}M2=!1}Ft=0,H0=y0=n0=null,Me=!1,y1=A2=0,Ae=null}function I0(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return H0===null?n0.memoizedState=H0=t:H0=H0.next=t,H0}function N0(){if(y0===null){var t=n0.alternate;t=t!==null?t.memoizedState:null}else t=y0.next;var n=H0===null?n0.memoizedState:H0.next;if(n!==null)H0=n,y0=t;else{if(t===null)throw n0.alternate===null?Error(c(467)):Error(c(310));y0=t,t={memoizedState:y0.memoizedState,baseState:y0.baseState,baseQueue:y0.baseQueue,queue:y0.queue,next:null},H0===null?n0.memoizedState=H0=t:H0=H0.next=t}return H0}function _2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function p1(t){var n=y1;return y1+=1,Ae===null&&(Ae=[]),t=v4(Ae,t,n),n=n0,(H0===null?n.memoizedState:H0.next)===null&&(n=n.alternate,x.H=n===null||n.memoizedState===null?ri:Ul),t}function z2(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return p1(t);if(t.$$typeof===q)return Z0(t)}throw Error(c(438,String(t)))}function Tl(t){var n=null,e=n0.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var r=n0.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=_2(),n0.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),r=0;r<t;r++)e[r]=pt;return n.index++,e}function Wt(t,n){return typeof n=="function"?n(t):n}function x2(t){var n=N0();return Ml(n,y0,t)}function Ml(t,n,e){var r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var l=t.baseQueue,i=r.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}n.baseQueue=l=i,r.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{n=l.next;var v=s=null,g=null,M=n,z=!1;do{var O=M.lane&-536870913;if(O!==M.lane?(i0&O)===O:(Ft&O)===O){var A=M.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),O===pe&&(z=!0);else if((Ft&A)===A){M=M.next,A===pe&&(z=!0);continue}else O={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},g===null?(v=g=O,s=i):g=g.next=O,n0.lanes|=A,Tn|=A;O=M.action,Fn&&e(i,O),i=M.hasEagerState?M.eagerState:e(i,O)}else A={lane:O,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},g===null?(v=g=A,s=i):g=g.next=A,n0.lanes|=O,Tn|=O;M=M.next}while(M!==null&&M!==n);if(g===null?s=i:g.next=v,!st(i,t.memoizedState)&&(G0=!0,z&&(e=Se,e!==null)))throw e;t.memoizedState=i,t.baseState=s,t.baseQueue=g,r.lastRenderedState=i}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Al(t){var n=N0(),e=n.queue;if(e===null)throw Error(c(311));e.lastRenderedReducer=t;var r=e.dispatch,l=e.pending,i=n.memoizedState;if(l!==null){e.pending=null;var s=l=l.next;do i=t(i,s.action),s=s.next;while(s!==l);st(i,n.memoizedState)||(G0=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,r]}function M4(t,n,e){var r=n0,l=N0(),i=f0;if(i){if(e===void 0)throw Error(c(407));e=e()}else e=n();var s=!st((y0||l).memoizedState,e);if(s&&(l.memoizedState=e,G0=!0),l=l.queue,xl(z4.bind(null,r,l,t),[t]),l.getSnapshot!==n||s||H0!==null&&H0.memoizedState.tag&1){if(r.flags|=2048,_e(9,{destroy:void 0},_4.bind(null,r,l,e,n),null),E0===null)throw Error(c(349));i||(Ft&127)!==0||A4(r,n,e)}return e}function A4(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=n0.updateQueue,n===null?(n=_2(),n0.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function _4(t,n,e,r){n.value=e,n.getSnapshot=r,x4(n)&&C4(t)}function z4(t,n,e){return e(function(){x4(n)&&C4(t)})}function x4(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!st(t,e)}catch{return!0}}function C4(t){var n=qn(t,2);n!==null&&at(n,t,2)}function _l(t){var n=I0();if(typeof t=="function"){var e=t;if(t=e(),Fn){fn(!0);try{e()}finally{fn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:t},n}function R4(t,n,e,r){return t.baseState=e,Ml(t,y0,typeof r=="function"?r:Wt)}function V6(t,n,e,r,l){if(O2(t))throw Error(c(485));if(t=n.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};x.T!==null?e(!0):i.isTransition=!1,r(i),e=n.pending,e===null?(i.next=n.pending=i,O4(n,i)):(i.next=e.next,n.pending=e.next=i)}}function O4(t,n){var e=n.action,r=n.payload,l=t.state;if(n.isTransition){var i=x.T,s={};x.T=s;try{var v=e(l,r),g=x.S;g!==null&&g(s,v),D4(t,n,v)}catch(M){zl(t,n,M)}finally{i!==null&&s.types!==null&&(i.types=s.types),x.T=i}}else try{i=e(l,r),D4(t,n,i)}catch(M){zl(t,n,M)}}function D4(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(r){N4(t,n,r)},function(r){return zl(t,n,r)}):N4(t,n,e)}function N4(t,n,e){n.status="fulfilled",n.value=e,U4(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,O4(t,e)))}function zl(t,n,e){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=e,U4(n),n=n.next;while(n!==r)}t.action=null}function U4(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function L4(t,n){return n}function B4(t,n){if(f0){var e=E0.formState;if(e!==null){t:{var r=n0;if(f0){if(T0){n:{for(var l=T0,i=_t;l.nodeType!==8;){if(!i){l=null;break n}if(l=xt(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){T0=xt(l.nextSibling),r=l.data==="F!";break t}}hn(r)}r=!1}r&&(n=e[0])}}return e=I0(),e.memoizedState=e.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L4,lastRenderedState:n},e.queue=r,e=ti.bind(null,n0,r),r.dispatch=e,r=_l(!1),i=Nl.bind(null,n0,!1,r.queue),r=I0(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,e=V6.bind(null,n0,l,i,e),l.dispatch=e,r.memoizedState=t,[n,e,!1]}function H4(t){var n=N0();return G4(n,y0,t)}function G4(t,n,e){if(n=Ml(t,n,L4)[0],t=x2(Wt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=p1(n)}catch(s){throw s===be?y2:s}else r=n;n=N0();var l=n.queue,i=l.dispatch;return e!==n.memoizedState&&(n0.flags|=2048,_e(9,{destroy:void 0},X6.bind(null,l,e),null)),[r,i,t]}function X6(t,n){t.action=n}function w4(t){var n=N0(),e=y0;if(e!==null)return G4(n,e,t);N0(),n=n.memoizedState,e=N0();var r=e.queue.dispatch;return e.memoizedState=t,[n,r,!1]}function _e(t,n,e,r){return t={tag:t,create:e,deps:r,inst:n,next:null},n=n0.updateQueue,n===null&&(n=_2(),n0.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(r=e.next,e.next=t,t.next=r,n.lastEffect=t),t}function q4(){return N0().memoizedState}function C2(t,n,e,r){var l=I0();n0.flags|=t,l.memoizedState=_e(1|n,{destroy:void 0},e,r===void 0?null:r)}function R2(t,n,e,r){var l=N0();r=r===void 0?null:r;var i=l.memoizedState.inst;y0!==null&&r!==null&&yl(r,y0.memoizedState.deps)?l.memoizedState=_e(n,i,e,r):(n0.flags|=t,l.memoizedState=_e(1|n,i,e,r))}function Y4(t,n){C2(8390656,8,t,n)}function xl(t,n){R2(2048,8,t,n)}function j6(t){n0.flags|=4;var n=n0.updateQueue;if(n===null)n=_2(),n0.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function V4(t){var n=N0().memoizedState;return j6({ref:n,nextImpl:t}),function(){if((o0&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function X4(t,n){return R2(4,2,t,n)}function j4(t,n){return R2(4,4,t,n)}function Q4(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Z4(t,n,e){e=e!=null?e.concat([t]):null,R2(4,4,Q4.bind(null,n,t),e)}function Cl(){}function K4(t,n){var e=N0();n=n===void 0?null:n;var r=e.memoizedState;return n!==null&&yl(n,r[1])?r[0]:(e.memoizedState=[t,n],t)}function J4(t,n){var e=N0();n=n===void 0?null:n;var r=e.memoizedState;if(n!==null&&yl(n,r[1]))return r[0];if(r=t(),Fn){fn(!0);try{t()}finally{fn(!1)}}return e.memoizedState=[r,n],r}function Rl(t,n,e){return e===void 0||(Ft&1073741824)!==0&&(i0&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=Fi(),n0.lanes|=t,Tn|=t,e)}function F4(t,n,e,r){return st(e,n)?e:Te.current!==null?(t=Rl(t,e,r),st(t,n)||(G0=!0),t):(Ft&42)===0||(Ft&1073741824)!==0&&(i0&261930)===0?(G0=!0,t.memoizedState=e):(t=Fi(),n0.lanes|=t,Tn|=t,n)}function W4(t,n,e,r,l){var i=H.p;H.p=i!==0&&8>i?i:8;var s=x.T,v={};x.T=v,Nl(t,!1,n,e);try{var g=l(),M=x.S;if(M!==null&&M(v,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var z=w6(g,r);S1(t,n,z,gt(t))}else S1(t,n,r,gt(t))}catch(O){S1(t,n,{then:function(){},status:"rejected",reason:O},gt())}finally{H.p=i,s!==null&&v.types!==null&&(s.types=v.types),x.T=s}}function Q6(){}function Ol(t,n,e,r){if(t.tag!==5)throw Error(c(476));var l=$4(t).queue;W4(t,l,n,W,e===null?Q6:function(){return k4(t),e(r)})}function $4(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:W},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function k4(t){var n=$4(t);n.next===null&&(n=t.alternate.memoizedState),S1(t,n.next.queue,{},gt())}function Dl(){return Z0(H1)}function I4(){return N0().memoizedState}function P4(){return N0().memoizedState}function Z6(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=gt();t=gn(e);var r=yn(n,t,e);r!==null&&(at(r,n,e),d1(r,n,e)),n={cache:il()},t.payload=n;return}n=n.return}}function K6(t,n,e){var r=gt();e={lane:r,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},O2(t)?ni(n,e):(e=Wr(t,n,e,r),e!==null&&(at(e,t,r),ei(e,n,r)))}function ti(t,n,e){var r=gt();S1(t,n,e,r)}function S1(t,n,e,r){var l={lane:r,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(O2(t))ni(n,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,v=i(s,e);if(l.hasEagerState=!0,l.eagerState=v,st(v,s))return s2(t,n,l,0),E0===null&&c2(),!1}catch{}finally{}if(e=Wr(t,n,l,r),e!==null)return at(e,t,r),ei(e,n,r),!0}return!1}function Nl(t,n,e,r){if(r={lane:2,revertLane:s3(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},O2(t)){if(n)throw Error(c(479))}else n=Wr(t,e,r,2),n!==null&&at(n,t,2)}function O2(t){var n=t.alternate;return t===n0||n!==null&&n===n0}function ni(t,n){Me=M2=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function ei(t,n,e){if((e&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,e|=r,n.lanes=e,ua(t,e)}}var b1={readContext:Z0,use:z2,useCallback:C0,useContext:C0,useEffect:C0,useImperativeHandle:C0,useLayoutEffect:C0,useInsertionEffect:C0,useMemo:C0,useReducer:C0,useRef:C0,useState:C0,useDebugValue:C0,useDeferredValue:C0,useTransition:C0,useSyncExternalStore:C0,useId:C0,useHostTransitionStatus:C0,useFormState:C0,useActionState:C0,useOptimistic:C0,useMemoCache:C0,useCacheRefresh:C0};b1.useEffectEvent=C0;var ri={readContext:Z0,use:z2,useCallback:function(t,n){return I0().memoizedState=[t,n===void 0?null:n],t},useContext:Z0,useEffect:Y4,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,C2(4194308,4,Q4.bind(null,n,t),e)},useLayoutEffect:function(t,n){return C2(4194308,4,t,n)},useInsertionEffect:function(t,n){C2(4,2,t,n)},useMemo:function(t,n){var e=I0();n=n===void 0?null:n;var r=t();if(Fn){fn(!0);try{t()}finally{fn(!1)}}return e.memoizedState=[r,n],r},useReducer:function(t,n,e){var r=I0();if(e!==void 0){var l=e(n);if(Fn){fn(!0);try{e(n)}finally{fn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=K6.bind(null,n0,t),[r.memoizedState,t]},useRef:function(t){var n=I0();return t={current:t},n.memoizedState=t},useState:function(t){t=_l(t);var n=t.queue,e=ti.bind(null,n0,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:Cl,useDeferredValue:function(t,n){var e=I0();return Rl(e,t,n)},useTransition:function(){var t=_l(!1);return t=W4.bind(null,n0,t.queue,!0,!1),I0().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var r=n0,l=I0();if(f0){if(e===void 0)throw Error(c(407));e=e()}else{if(e=n(),E0===null)throw Error(c(349));(i0&127)!==0||A4(r,n,e)}l.memoizedState=e;var i={value:e,getSnapshot:n};return l.queue=i,Y4(z4.bind(null,r,i,t),[t]),r.flags|=2048,_e(9,{destroy:void 0},_4.bind(null,r,i,e,n),null),e},useId:function(){var t=I0(),n=E0.identifierPrefix;if(f0){var e=Gt,r=Ht;e=(r&~(1<<32-ct(r)-1)).toString(32)+e,n="_"+n+"R_"+e,e=A2++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=q6++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Dl,useFormState:B4,useActionState:B4,useOptimistic:function(t){var n=I0();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=Nl.bind(null,n0,!0,e),e.dispatch=n,[t,n]},useMemoCache:Tl,useCacheRefresh:function(){return I0().memoizedState=Z6.bind(null,n0)},useEffectEvent:function(t){var n=I0(),e={impl:t};return n.memoizedState=e,function(){if((o0&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}},Ul={readContext:Z0,use:z2,useCallback:K4,useContext:Z0,useEffect:xl,useImperativeHandle:Z4,useInsertionEffect:X4,useLayoutEffect:j4,useMemo:J4,useReducer:x2,useRef:q4,useState:function(){return x2(Wt)},useDebugValue:Cl,useDeferredValue:function(t,n){var e=N0();return F4(e,y0.memoizedState,t,n)},useTransition:function(){var t=x2(Wt)[0],n=N0().memoizedState;return[typeof t=="boolean"?t:p1(t),n]},useSyncExternalStore:M4,useId:I4,useHostTransitionStatus:Dl,useFormState:H4,useActionState:H4,useOptimistic:function(t,n){var e=N0();return R4(e,y0,t,n)},useMemoCache:Tl,useCacheRefresh:P4};Ul.useEffectEvent=V4;var li={readContext:Z0,use:z2,useCallback:K4,useContext:Z0,useEffect:xl,useImperativeHandle:Z4,useInsertionEffect:X4,useLayoutEffect:j4,useMemo:J4,useReducer:Al,useRef:q4,useState:function(){return Al(Wt)},useDebugValue:Cl,useDeferredValue:function(t,n){var e=N0();return y0===null?Rl(e,t,n):F4(e,y0.memoizedState,t,n)},useTransition:function(){var t=Al(Wt)[0],n=N0().memoizedState;return[typeof t=="boolean"?t:p1(t),n]},useSyncExternalStore:M4,useId:I4,useHostTransitionStatus:Dl,useFormState:w4,useActionState:w4,useOptimistic:function(t,n){var e=N0();return y0!==null?R4(e,y0,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Tl,useCacheRefresh:P4};li.useEffectEvent=V4;function Ll(t,n,e,r){n=t.memoizedState,e=e(r,n),e=e==null?n:R({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Bl={enqueueSetState:function(t,n,e){t=t._reactInternals;var r=gt(),l=gn(r);l.payload=n,e!=null&&(l.callback=e),n=yn(t,l,r),n!==null&&(at(n,t,r),d1(n,t,r))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var r=gt(),l=gn(r);l.tag=1,l.payload=n,e!=null&&(l.callback=e),n=yn(t,l,r),n!==null&&(at(n,t,r),d1(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=gt(),r=gn(e);r.tag=2,n!=null&&(r.callback=n),n=yn(t,r,e),n!==null&&(at(n,t,e),d1(n,t,e))}};function ai(t,n,e,r,l,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,s):n.prototype&&n.prototype.isPureReactComponent?!i1(e,r)||!i1(l,i):!0}function ii(t,n,e,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,r),n.state!==t&&Bl.enqueueReplaceState(n,n.state,null)}function Wn(t,n){var e=n;if("ref"in n){e={};for(var r in n)r!=="ref"&&(e[r]=n[r])}if(t=t.defaultProps){e===n&&(e=R({},e));for(var l in t)e[l]===void 0&&(e[l]=t[l])}return e}function ui(t){f2(t)}function fi(t){console.error(t)}function ci(t){f2(t)}function D2(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function si(t,n,e){try{var r=t.onCaughtError;r(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hl(t,n,e){return e=gn(e),e.tag=3,e.payload={element:null},e.callback=function(){D2(t,n)},e}function oi(t){return t=gn(t),t.tag=3,t}function vi(t,n,e,r){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=r.value;t.payload=function(){return l(i)},t.callback=function(){si(n,e,r)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){si(n,e,r),typeof l!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function J6(t,n,e,r,l){if(e.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=e.alternate,n!==null&&ye(n,e,l,!0),e=vt.current,e!==null){switch(e.tag){case 31:case 13:return zt===null?j2():e.alternate===null&&R0===0&&(R0=3),e.flags&=-257,e.flags|=65536,e.lanes=l,r===p2?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([r]):n.add(r),u3(t,r,l)),!1;case 22:return e.flags|=65536,r===p2?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([r]):e.add(r)),u3(t,r,l)),!1}throw Error(c(435,e.tag))}return u3(t,r,l),j2(),!1}if(f0)return n=vt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==nl&&(t=Error(c(422),{cause:r}),c1(Tt(t,e)))):(r!==nl&&(n=Error(c(423),{cause:r}),c1(Tt(n,e))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=Tt(r,e),l=Hl(t.stateNode,r,l),vl(t,l),R0!==4&&(R0=2)),!1;var i=Error(c(520),{cause:r});if(i=Tt(i,e),C1===null?C1=[i]:C1.push(i),R0!==4&&(R0=2),n===null)return!0;r=Tt(r,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=l&-l,e.lanes|=t,t=Hl(e.stateNode,r,t),vl(e,t),!1;case 1:if(n=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Mn===null||!Mn.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=oi(l),vi(l,t,e,r),vl(e,l),!1}e=e.return}while(e!==null);return!1}var Gl=Error(c(461)),G0=!1;function K0(t,n,e,r){n.child=t===null?g4(n,null,e,r):Jn(n,t.child,e,r)}function hi(t,n,e,r,l){e=e.render;var i=n.ref;if("ref"in r){var s={};for(var v in r)v!=="ref"&&(s[v]=r[v])}else s=r;return jn(n),r=pl(t,n,e,s,i,l),v=Sl(),t!==null&&!G0?(bl(t,n,l),$t(t,n,l)):(f0&&v&&Pr(n),n.flags|=1,K0(t,n,r,l),n.child)}function di(t,n,e,r,l){if(t===null){var i=e.type;return typeof i=="function"&&!$r(i)&&i.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=i,mi(t,n,i,r,l)):(t=v2(e.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(i=t.child,!Zl(t,l)){var s=i.memoizedProps;if(e=e.compare,e=e!==null?e:i1,e(s,r)&&t.ref===n.ref)return $t(t,n,l)}return n.flags|=1,t=Qt(i,r),t.ref=n.ref,t.return=n,n.child=t}function mi(t,n,e,r,l){if(t!==null){var i=t.memoizedProps;if(i1(i,r)&&t.ref===n.ref)if(G0=!1,n.pendingProps=r=i,Zl(t,l))(t.flags&131072)!==0&&(G0=!0);else return n.lanes=t.lanes,$t(t,n,l)}return wl(t,n,e,r,l)}function gi(t,n,e,r){var l=r.children,i=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~i}else r=0,n.child=null;return yi(t,n,i,e,r)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&g2(n,i!==null?i.cachePool:null),i!==null?S4(n,i):dl(),b4(n);else return r=n.lanes=536870912,yi(t,n,i!==null?i.baseLanes|e:e,e,r)}else i!==null?(g2(n,i.cachePool),S4(n,i),Sn(),n.memoizedState=null):(t!==null&&g2(n,null),dl(),Sn());return K0(t,n,l,e),n.child}function E1(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function yi(t,n,e,r,l){var i=fl();return i=i===null?null:{parent:B0._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},t!==null&&g2(n,null),dl(),b4(n),t!==null&&ye(t,n,r,!0),n.childLanes=l,null}function N2(t,n){return n=L2({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function pi(t,n,e){return Jn(n,t.child,null,e),t=N2(n,n.pendingProps),t.flags|=2,ht(n),n.memoizedState=null,t}function F6(t,n,e){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(f0){if(r.mode==="hidden")return t=N2(n,r),n.lanes=536870912,E1(null,t);if(gl(n),(t=T0)?(t=Ou(t,_t),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:on!==null?{id:Ht,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},e=n4(t),e.return=n,n.child=e,Q0=n,T0=null)):t=null,t===null)throw hn(n);return n.lanes=536870912,null}return N2(n,r)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(gl(n),l)if(n.flags&256)n.flags&=-257,n=pi(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(c(558));else if(G0||ye(t,n,e,!1),l=(e&t.childLanes)!==0,G0||l){if(r=E0,r!==null&&(s=fa(r,e),s!==0&&s!==i.retryLane))throw i.retryLane=s,qn(t,s),at(r,t,s),Gl;j2(),n=pi(t,n,e)}else t=i.treeContext,T0=xt(s.nextSibling),Q0=n,f0=!0,vn=null,_t=!1,t!==null&&l4(n,t),n=N2(n,r),n.flags|=4096;return n}return t=Qt(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function U2(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(c(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function wl(t,n,e,r,l){return jn(n),e=pl(t,n,e,r,void 0,l),r=Sl(),t!==null&&!G0?(bl(t,n,l),$t(t,n,l)):(f0&&r&&Pr(n),n.flags|=1,K0(t,n,e,l),n.child)}function Si(t,n,e,r,l,i){return jn(n),n.updateQueue=null,e=T4(n,r,e,l),E4(t),r=Sl(),t!==null&&!G0?(bl(t,n,i),$t(t,n,i)):(f0&&r&&Pr(n),n.flags|=1,K0(t,n,e,i),n.child)}function bi(t,n,e,r,l){if(jn(n),n.stateNode===null){var i=he,s=e.contextType;typeof s=="object"&&s!==null&&(i=Z0(s)),i=new e(r,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bl,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=r,i.state=n.memoizedState,i.refs={},sl(n),s=e.contextType,i.context=typeof s=="object"&&s!==null?Z0(s):he,i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ll(n,e,s,r),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Bl.enqueueReplaceState(i,i.state,null),g1(n,r,i,l),m1(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){i=n.stateNode;var v=n.memoizedProps,g=Wn(e,v);i.props=g;var M=i.context,z=e.contextType;s=he,typeof z=="object"&&z!==null&&(s=Z0(z));var O=e.getDerivedStateFromProps;z=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(v||M!==s)&&ii(n,i,r,s),mn=!1;var A=n.memoizedState;i.state=A,g1(n,r,i,l),m1(),M=n.memoizedState,v||A!==M||mn?(typeof O=="function"&&(Ll(n,e,O,r),M=n.memoizedState),(g=mn||ai(n,e,g,r,A,M,s))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=M),i.props=r,i.state=M,i.context=s,r=g):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,ol(t,n),s=n.memoizedProps,z=Wn(e,s),i.props=z,O=n.pendingProps,A=i.context,M=e.contextType,g=he,typeof M=="object"&&M!==null&&(g=Z0(M)),v=e.getDerivedStateFromProps,(M=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==O||A!==g)&&ii(n,i,r,g),mn=!1,A=n.memoizedState,i.state=A,g1(n,r,i,l),m1();var _=n.memoizedState;s!==O||A!==_||mn||t!==null&&t.dependencies!==null&&d2(t.dependencies)?(typeof v=="function"&&(Ll(n,e,v,r),_=n.memoizedState),(z=mn||ai(n,e,z,r,A,_,g)||t!==null&&t.dependencies!==null&&d2(t.dependencies))?(M||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,_,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,_,g)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=_),i.props=r,i.state=_,i.context=g,r=z):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(n.flags|=1024),r=!1)}return i=r,U2(t,n),r=(n.flags&128)!==0,i||r?(i=n.stateNode,e=r&&typeof e.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,t!==null&&r?(n.child=Jn(n,t.child,null,l),n.child=Jn(n,null,e,l)):K0(t,n,e,l),n.memoizedState=i.state,t=n.child):t=$t(t,n,l),t}function Ei(t,n,e,r){return Vn(),n.flags|=256,K0(t,n,e,r),n.child}var ql={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yl(t){return{baseLanes:t,cachePool:s4()}}function Vl(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=mt),t}function Ti(t,n,e){var r=n.pendingProps,l=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(D0.current&2)!==0),s&&(l=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,t===null){if(f0){if(l?pn(n):Sn(),(t=T0)?(t=Ou(t,_t),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:on!==null?{id:Ht,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},e=n4(t),e.return=n,n.child=e,Q0=n,T0=null)):t=null,t===null)throw hn(n);return M3(t)?n.lanes=32:n.lanes=536870912,null}var v=r.children;return r=r.fallback,l?(Sn(),l=n.mode,v=L2({mode:"hidden",children:v},l),r=Yn(r,l,e,null),v.return=n,r.return=n,v.sibling=r,n.child=v,r=n.child,r.memoizedState=Yl(e),r.childLanes=Vl(t,s,e),n.memoizedState=ql,E1(null,r)):(pn(n),Xl(n,v))}var g=t.memoizedState;if(g!==null&&(v=g.dehydrated,v!==null)){if(i)n.flags&256?(pn(n),n.flags&=-257,n=jl(t,n,e)):n.memoizedState!==null?(Sn(),n.child=t.child,n.flags|=128,n=null):(Sn(),v=r.fallback,l=n.mode,r=L2({mode:"visible",children:r.children},l),v=Yn(v,l,e,null),v.flags|=2,r.return=n,v.return=n,r.sibling=v,n.child=r,Jn(n,t.child,null,e),r=n.child,r.memoizedState=Yl(e),r.childLanes=Vl(t,s,e),n.memoizedState=ql,n=E1(null,r));else if(pn(n),M3(v)){if(s=v.nextSibling&&v.nextSibling.dataset,s)var M=s.dgst;s=M,r=Error(c(419)),r.stack="",r.digest=s,c1({value:r,source:null,stack:null}),n=jl(t,n,e)}else if(G0||ye(t,n,e,!1),s=(e&t.childLanes)!==0,G0||s){if(s=E0,s!==null&&(r=fa(s,e),r!==0&&r!==g.retryLane))throw g.retryLane=r,qn(t,r),at(s,t,r),Gl;T3(v)||j2(),n=jl(t,n,e)}else T3(v)?(n.flags|=192,n.child=t.child,n=null):(t=g.treeContext,T0=xt(v.nextSibling),Q0=n,f0=!0,vn=null,_t=!1,t!==null&&l4(n,t),n=Xl(n,r.children),n.flags|=4096);return n}return l?(Sn(),v=r.fallback,l=n.mode,g=t.child,M=g.sibling,r=Qt(g,{mode:"hidden",children:r.children}),r.subtreeFlags=g.subtreeFlags&65011712,M!==null?v=Qt(M,v):(v=Yn(v,l,e,null),v.flags|=2),v.return=n,r.return=n,r.sibling=v,n.child=r,E1(null,r),r=n.child,v=t.child.memoizedState,v===null?v=Yl(e):(l=v.cachePool,l!==null?(g=B0._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=s4(),v={baseLanes:v.baseLanes|e,cachePool:l}),r.memoizedState=v,r.childLanes=Vl(t,s,e),n.memoizedState=ql,E1(t.child,r)):(pn(n),e=t.child,t=e.sibling,e=Qt(e,{mode:"visible",children:r.children}),e.return=n,e.sibling=null,t!==null&&(s=n.deletions,s===null?(n.deletions=[t],n.flags|=16):s.push(t)),n.child=e,n.memoizedState=null,e)}function Xl(t,n){return n=L2({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function L2(t,n){return t=ot(22,t,null,n),t.lanes=0,t}function jl(t,n,e){return Jn(n,t.child,null,e),t=Xl(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mi(t,n,e){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ll(t.return,n,e)}function Ql(t,n,e,r,l,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:e,tailMode:l,treeForkCount:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=e,s.tailMode=l,s.treeForkCount=i)}function Ai(t,n,e){var r=n.pendingProps,l=r.revealOrder,i=r.tail;r=r.children;var s=D0.current,v=(s&2)!==0;if(v?(s=s&1|2,n.flags|=128):s&=1,G(D0,s),K0(t,n,r,e),r=f0?f1:0,!v&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mi(t,e,n);else if(t.tag===19)Mi(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(e=n.child,l=null;e!==null;)t=e.alternate,t!==null&&T2(t)===null&&(l=e),e=e.sibling;e=l,e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null),Ql(n,!1,l,e,i,r);break;case"backwards":case"unstable_legacy-backwards":for(e=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&T2(t)===null){n.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}Ql(n,!0,e,null,i,r);break;case"together":Ql(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function $t(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),Tn|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(ye(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(c(153));if(n.child!==null){for(t=n.child,e=Qt(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=Qt(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function Zl(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&d2(t)))}function W6(t,n,e){switch(n.tag){case 3:k0(n,n.stateNode.containerInfo),dn(n,B0,t.memoizedState.cache),Vn();break;case 27:case 5:Je(n);break;case 4:k0(n,n.stateNode.containerInfo);break;case 10:dn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gl(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(pn(n),n.flags|=128,null):(e&n.child.childLanes)!==0?Ti(t,n,e):(pn(n),t=$t(t,n,e),t!==null?t.sibling:null);pn(n);break;case 19:var l=(t.flags&128)!==0;if(r=(e&n.childLanes)!==0,r||(ye(t,n,e,!1),r=(e&n.childLanes)!==0),l){if(r)return Ai(t,n,e);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(D0,D0.current),r)break;return null;case 22:return n.lanes=0,gi(t,n,e,n.pendingProps);case 24:dn(n,B0,t.memoizedState.cache)}return $t(t,n,e)}function _i(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)G0=!0;else{if(!Zl(t,e)&&(n.flags&128)===0)return G0=!1,W6(t,n,e);G0=(t.flags&131072)!==0}else G0=!1,f0&&(n.flags&1048576)!==0&&r4(n,f1,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Zn(n.elementType),n.type=t,typeof t=="function")$r(t)?(r=Wn(t,r),n.tag=1,n=bi(null,n,t,r,e)):(n.tag=0,n=wl(null,n,t,r,e));else{if(t!=null){var l=t.$$typeof;if(l===Q){n.tag=11,n=hi(null,n,t,r,e);break t}else if(l===k){n.tag=14,n=di(null,n,t,r,e);break t}}throw n=h0(t)||t,Error(c(306,n,""))}}return n;case 0:return wl(t,n,n.type,n.pendingProps,e);case 1:return r=n.type,l=Wn(r,n.pendingProps),bi(t,n,r,l,e);case 3:t:{if(k0(n,n.stateNode.containerInfo),t===null)throw Error(c(387));r=n.pendingProps;var i=n.memoizedState;l=i.element,ol(t,n),g1(n,r,null,e);var s=n.memoizedState;if(r=s.cache,dn(n,B0,r),r!==i.cache&&al(n,[B0],e,!0),m1(),r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=Ei(t,n,r,e);break t}else if(r!==l){l=Tt(Error(c(424)),n),c1(l),n=Ei(t,n,r,e);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(T0=xt(t.firstChild),Q0=n,f0=!0,vn=null,_t=!0,e=g4(n,null,r,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Vn(),r===l){n=$t(t,n,e);break t}K0(t,n,r,e)}n=n.child}return n;case 26:return U2(t,n),t===null?(e=Hu(n.type,null,n.pendingProps,null))?n.memoizedState=e:f0||(e=n.type,t=n.pendingProps,r=$2(r0.current).createElement(e),r[j0]=n,r[P0]=t,J0(r,e,t),V0(r),n.stateNode=r):n.memoizedState=Hu(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&f0&&(r=n.stateNode=Uu(n.type,n.pendingProps,r0.current),Q0=n,_t=!0,l=T0,xn(n.type)?(A3=l,T0=xt(r.firstChild)):T0=l),K0(t,n,n.pendingProps.children,e),U2(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&f0&&((l=r=T0)&&(r=_8(r,n.type,n.pendingProps,_t),r!==null?(n.stateNode=r,Q0=n,T0=xt(r.firstChild),_t=!1,l=!0):l=!1),l||hn(n)),Je(n),l=n.type,i=n.pendingProps,s=t!==null?t.memoizedProps:null,r=i.children,S3(l,i)?r=null:s!==null&&S3(l,s)&&(n.flags|=32),n.memoizedState!==null&&(l=pl(t,n,Y6,null,null,e),H1._currentValue=l),U2(t,n),K0(t,n,r,e),n.child;case 6:return t===null&&f0&&((t=e=T0)&&(e=z8(e,n.pendingProps,_t),e!==null?(n.stateNode=e,Q0=n,T0=null,t=!0):t=!1),t||hn(n)),null;case 13:return Ti(t,n,e);case 4:return k0(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Jn(n,null,r,e):K0(t,n,r,e),n.child;case 11:return hi(t,n,n.type,n.pendingProps,e);case 7:return K0(t,n,n.pendingProps,e),n.child;case 8:return K0(t,n,n.pendingProps.children,e),n.child;case 12:return K0(t,n,n.pendingProps.children,e),n.child;case 10:return r=n.pendingProps,dn(n,n.type,r.value),K0(t,n,r.children,e),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,jn(n),l=Z0(l),r=r(l),n.flags|=1,K0(t,n,r,e),n.child;case 14:return di(t,n,n.type,n.pendingProps,e);case 15:return mi(t,n,n.type,n.pendingProps,e);case 19:return Ai(t,n,e);case 31:return F6(t,n,e);case 22:return gi(t,n,e,n.pendingProps);case 24:return jn(n),r=Z0(B0),t===null?(l=fl(),l===null&&(l=E0,i=il(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),n.memoizedState={parent:r,cache:l},sl(n),dn(n,B0,l)):((t.lanes&e)!==0&&(ol(t,n),g1(n,null,null,e),m1()),l=t.memoizedState,i=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),dn(n,B0,r)):(r=i.cache,dn(n,B0,r),r!==l.cache&&al(n,[B0],e,!0))),K0(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function kt(t){t.flags|=4}function Kl(t,n,e,r,l){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Ii())t.flags|=8192;else throw Kn=p2,cl}else t.flags&=-16777217}function zi(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vu(n))if(Ii())t.flags|=8192;else throw Kn=p2,cl}function B2(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?aa():536870912,t.lanes|=n,Re|=n)}function T1(t,n){if(!f0)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function M0(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,r=0;if(n)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=e,n}function $6(t,n,e){var r=n.pendingProps;switch(tl(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return M0(n),null;case 1:return M0(n),null;case 3:return e=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Jt(B0),O0(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(ge(n)?kt(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,el())),M0(n),null;case 26:var l=n.type,i=n.memoizedState;return t===null?(kt(n),i!==null?(M0(n),zi(n,i)):(M0(n),Kl(n,l,null,r,e))):i?i!==t.memoizedState?(kt(n),M0(n),zi(n,i)):(M0(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&kt(n),M0(n),Kl(n,l,t,r,e)),null;case 27:if(K1(n),e=r0.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&kt(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return M0(n),null}t=V.current,ge(n)?a4(n):(t=Uu(l,r,e),n.stateNode=t,kt(n))}return M0(n),null;case 5:if(K1(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&kt(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return M0(n),null}if(i=V.current,ge(n))a4(n);else{var s=$2(r0.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i=typeof r.is=="string"?s.createElement(l,{is:r.is}):s.createElement(l)}}i[j0]=n,i[P0]=r;t:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break t;for(;s.sibling===null;){if(s.return===null||s.return===n)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=i;t:switch(J0(i,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&kt(n)}}return M0(n),Kl(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&kt(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(t=r0.current,ge(n)){if(t=n.stateNode,e=n.memoizedProps,r=null,l=Q0,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[j0]=n,t=!!(t.nodeValue===e||r!==null&&r.suppressHydrationWarning===!0||Tu(t.nodeValue,e)),t||hn(n,!0)}else t=$2(t).createTextNode(r),t[j0]=n,n.stateNode=t}return M0(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(r=ge(n),e!==null){if(t===null){if(!r)throw Error(c(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(557));t[j0]=n}else Vn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;M0(n),t=!1}else e=el(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(ht(n),n):(ht(n),null);if((n.flags&128)!==0)throw Error(c(558))}return M0(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ge(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(c(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[j0]=n}else Vn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;M0(n),l=!1}else l=el(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ht(n),n):(ht(n),null)}return ht(n),(n.flags&128)!==0?(n.lanes=e,n):(e=r!==null,t=t!==null&&t.memoizedState!==null,e&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==l&&(r.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),B2(n,n.updateQueue),M0(n),null);case 4:return O0(),t===null&&d3(n.stateNode.containerInfo),M0(n),null;case 10:return Jt(n.type),M0(n),null;case 19:if(D(D0),r=n.memoizedState,r===null)return M0(n),null;if(l=(n.flags&128)!==0,i=r.rendering,i===null)if(l)T1(r,!1);else{if(R0!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(i=T2(t),i!==null){for(n.flags|=128,T1(r,!1),t=i.updateQueue,n.updateQueue=t,B2(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)t4(e,t),e=e.sibling;return G(D0,D0.current&1|2),f0&&Zt(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ut()>Y2&&(n.flags|=128,l=!0,T1(r,!1),n.lanes=4194304)}else{if(!l)if(t=T2(i),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,B2(n,t),T1(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!f0)return M0(n),null}else 2*ut()-r.renderingStartTime>Y2&&e!==536870912&&(n.flags|=128,l=!0,T1(r,!1),n.lanes=4194304);r.isBackwards?(i.sibling=n.child,n.child=i):(t=r.last,t!==null?t.sibling=i:n.child=i,r.last=i)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ut(),t.sibling=null,e=D0.current,G(D0,l?e&1|2:e&1),f0&&Zt(n,r.treeForkCount),t):(M0(n),null);case 22:case 23:return ht(n),ml(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(e&536870912)!==0&&(n.flags&128)===0&&(M0(n),n.subtreeFlags&6&&(n.flags|=8192)):M0(n),e=n.updateQueue,e!==null&&B2(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==e&&(n.flags|=2048),t!==null&&D(Qn),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),Jt(B0),M0(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function k6(t,n){switch(tl(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Jt(B0),O0(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return K1(n),null;case 31:if(n.memoizedState!==null){if(ht(n),n.alternate===null)throw Error(c(340));Vn()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ht(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Vn()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return D(D0),null;case 4:return O0(),null;case 10:return Jt(n.type),null;case 22:case 23:return ht(n),ml(),t!==null&&D(Qn),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Jt(B0),null;case 25:return null;default:return null}}function xi(t,n){switch(tl(n),n.tag){case 3:Jt(B0),O0();break;case 26:case 27:case 5:K1(n);break;case 4:O0();break;case 31:n.memoizedState!==null&&ht(n);break;case 13:ht(n);break;case 19:D(D0);break;case 10:Jt(n.type);break;case 22:case 23:ht(n),ml(),t!==null&&D(Qn);break;case 24:Jt(B0)}}function M1(t,n){try{var e=n.updateQueue,r=e!==null?e.lastEffect:null;if(r!==null){var l=r.next;e=l;do{if((e.tag&t)===t){r=void 0;var i=e.create,s=e.inst;r=i(),s.destroy=r}e=e.next}while(e!==l)}}catch(v){m0(n,n.return,v)}}function bn(t,n,e){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var i=l.next;r=i;do{if((r.tag&t)===t){var s=r.inst,v=s.destroy;if(v!==void 0){s.destroy=void 0,l=n;var g=e,M=v;try{M()}catch(z){m0(l,g,z)}}}r=r.next}while(r!==i)}}catch(z){m0(n,n.return,z)}}function Ci(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{p4(n,e)}catch(r){m0(t,t.return,r)}}}function Ri(t,n,e){e.props=Wn(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(r){m0(t,n,r)}}function A1(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof e=="function"?t.refCleanup=e(r):e.current=r}}catch(l){m0(t,n,l)}}function wt(t,n){var e=t.ref,r=t.refCleanup;if(e!==null)if(typeof r=="function")try{r()}catch(l){m0(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){m0(t,n,l)}else e.current=null}function Oi(t){var n=t.type,e=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&r.focus();break t;case"img":e.src?r.src=e.src:e.srcSet&&(r.srcset=e.srcSet)}}catch(l){m0(t,t.return,l)}}function Jl(t,n,e){try{var r=t.stateNode;S8(r,t.type,e,n),r[P0]=n}catch(l){m0(t,t.return,l)}}function Di(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xn(t.type)||t.tag===4}function Fl(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Di(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wl(t,n,e){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Xt));else if(r!==4&&(r===27&&xn(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(Wl(t,n,e),t=t.sibling;t!==null;)Wl(t,n,e),t=t.sibling}function H2(t,n,e){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(r!==4&&(r===27&&xn(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(H2(t,n,e),t=t.sibling;t!==null;)H2(t,n,e),t=t.sibling}function Ni(t){var n=t.stateNode,e=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);J0(n,r,e),n[j0]=t,n[P0]=e}catch(i){m0(t,t.return,i)}}var It=!1,w0=!1,$l=!1,Ui=typeof WeakSet=="function"?WeakSet:Set,X0=null;function I6(t,n){if(t=t.containerInfo,y3=rr,t=Za(t),jr(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var r=e.getSelection&&e.getSelection();if(r&&r.rangeCount!==0){e=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var s=0,v=-1,g=-1,M=0,z=0,O=t,A=null;n:for(;;){for(var _;O!==e||l!==0&&O.nodeType!==3||(v=s+l),O!==i||r!==0&&O.nodeType!==3||(g=s+r),O.nodeType===3&&(s+=O.nodeValue.length),(_=O.firstChild)!==null;)A=O,O=_;for(;;){if(O===t)break n;if(A===e&&++M===l&&(v=s),A===i&&++z===r&&(g=s),(_=O.nextSibling)!==null)break;O=A,A=O.parentNode}O=_}e=v===-1||g===-1?null:{start:v,end:g}}else e=null}e=e||{start:0,end:0}}else e=null;for(p3={focusedElem:t,selectionRange:e},rr=!1,X0=n;X0!==null;)if(n=X0,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,X0=t;else for(;X0!==null;){switch(n=X0,i=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)l=t[e],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=n,l=i.memoizedProps,i=i.memoizedState,r=e.stateNode;try{var Y=Wn(e.type,l);t=r.getSnapshotBeforeUpdate(Y,i),r.__reactInternalSnapshotBeforeUpdate=t}catch(F){m0(e,e.return,F)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)E3(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":E3(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=n.sibling,t!==null){t.return=n.return,X0=t;break}X0=n.return}}function Li(t,n,e){var r=e.flags;switch(e.tag){case 0:case 11:case 15:tn(t,e),r&4&&M1(5,e);break;case 1:if(tn(t,e),r&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(s){m0(e,e.return,s)}else{var l=Wn(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(s){m0(e,e.return,s)}}r&64&&Ci(e),r&512&&A1(e,e.return);break;case 3:if(tn(t,e),r&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{p4(t,n)}catch(s){m0(e,e.return,s)}}break;case 27:n===null&&r&4&&Ni(e);case 26:case 5:tn(t,e),n===null&&r&4&&Oi(e),r&512&&A1(e,e.return);break;case 12:tn(t,e);break;case 31:tn(t,e),r&4&&Gi(t,e);break;case 13:tn(t,e),r&4&&wi(t,e),r&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=u8.bind(null,e),x8(t,e))));break;case 22:if(r=e.memoizedState!==null||It,!r){n=n!==null&&n.memoizedState!==null||w0,l=It;var i=w0;It=r,(w0=n)&&!i?nn(t,e,(e.subtreeFlags&8772)!==0):tn(t,e),It=l,w0=i}break;case 30:break;default:tn(t,e)}}function Bi(t){var n=t.alternate;n!==null&&(t.alternate=null,Bi(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var z0=null,nt=!1;function Pt(t,n,e){for(e=e.child;e!==null;)Hi(t,n,e),e=e.sibling}function Hi(t,n,e){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Fe,e)}catch{}switch(e.tag){case 26:w0||wt(e,n),Pt(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:w0||wt(e,n);var r=z0,l=nt;xn(e.type)&&(z0=e.stateNode,nt=!1),Pt(t,n,e),U1(e.stateNode),z0=r,nt=l;break;case 5:w0||wt(e,n);case 6:if(r=z0,l=nt,z0=null,Pt(t,n,e),z0=r,nt=l,z0!==null)if(nt)try{(z0.nodeType===9?z0.body:z0.nodeName==="HTML"?z0.ownerDocument.body:z0).removeChild(e.stateNode)}catch(i){m0(e,n,i)}else try{z0.removeChild(e.stateNode)}catch(i){m0(e,n,i)}break;case 18:z0!==null&&(nt?(t=z0,Cu(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Ge(t)):Cu(z0,e.stateNode));break;case 4:r=z0,l=nt,z0=e.stateNode.containerInfo,nt=!0,Pt(t,n,e),z0=r,nt=l;break;case 0:case 11:case 14:case 15:bn(2,e,n),w0||bn(4,e,n),Pt(t,n,e);break;case 1:w0||(wt(e,n),r=e.stateNode,typeof r.componentWillUnmount=="function"&&Ri(e,n,r)),Pt(t,n,e);break;case 21:Pt(t,n,e);break;case 22:w0=(r=w0)||e.memoizedState!==null,Pt(t,n,e),w0=r;break;default:Pt(t,n,e)}}function Gi(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ge(t)}catch(e){m0(n,n.return,e)}}}function wi(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ge(t)}catch(e){m0(n,n.return,e)}}function P6(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ui),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ui),n;default:throw Error(c(435,t.tag))}}function G2(t,n){var e=P6(t);n.forEach(function(r){if(!e.has(r)){e.add(r);var l=f8.bind(null,t,r);r.then(l,l)}})}function et(t,n){var e=n.deletions;if(e!==null)for(var r=0;r<e.length;r++){var l=e[r],i=t,s=n,v=s;t:for(;v!==null;){switch(v.tag){case 27:if(xn(v.type)){z0=v.stateNode,nt=!1;break t}break;case 5:z0=v.stateNode,nt=!1;break t;case 3:case 4:z0=v.stateNode.containerInfo,nt=!0;break t}v=v.return}if(z0===null)throw Error(c(160));Hi(i,s,l),z0=null,nt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qi(n,t),n=n.sibling}var Nt=null;function qi(t,n){var e=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:et(n,t),rt(t),r&4&&(bn(3,t,t.return),M1(3,t),bn(5,t,t.return));break;case 1:et(n,t),rt(t),r&512&&(w0||e===null||wt(e,e.return)),r&64&&It&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?r:e.concat(r))));break;case 26:var l=Nt;if(et(n,t),rt(t),r&512&&(w0||e===null||wt(e,e.return)),r&4){var i=e!==null?e.memoizedState:null;if(r=t.memoizedState,e===null)if(r===null)if(t.stateNode===null){t:{r=t.type,e=t.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ke]||i[j0]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(r),l.head.insertBefore(i,l.querySelector("head > title"))),J0(i,r,e),i[j0]=t,V0(i),r=i;break t;case"link":var s=qu("link","href",l).get(r+(e.href||""));if(s){for(var v=0;v<s.length;v++)if(i=s[v],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(v,1);break n}}i=l.createElement(r),J0(i,r,e),l.head.appendChild(i);break;case"meta":if(s=qu("meta","content",l).get(r+(e.content||""))){for(v=0;v<s.length;v++)if(i=s[v],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(v,1);break n}}i=l.createElement(r),J0(i,r,e),l.head.appendChild(i);break;default:throw Error(c(468,r))}i[j0]=t,V0(i),r=i}t.stateNode=r}else Yu(l,t.type,t.stateNode);else t.stateNode=wu(l,r,t.memoizedProps);else i!==r?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,r===null?Yu(l,t.type,t.stateNode):wu(l,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Jl(t,t.memoizedProps,e.memoizedProps)}break;case 27:et(n,t),rt(t),r&512&&(w0||e===null||wt(e,e.return)),e!==null&&r&4&&Jl(t,t.memoizedProps,e.memoizedProps);break;case 5:if(et(n,t),rt(t),r&512&&(w0||e===null||wt(e,e.return)),t.flags&32){l=t.stateNode;try{ie(l,"")}catch(Y){m0(t,t.return,Y)}}r&4&&t.stateNode!=null&&(l=t.memoizedProps,Jl(t,l,e!==null?e.memoizedProps:l)),r&1024&&($l=!0);break;case 6:if(et(n,t),rt(t),r&4){if(t.stateNode===null)throw Error(c(162));r=t.memoizedProps,e=t.stateNode;try{e.nodeValue=r}catch(Y){m0(t,t.return,Y)}}break;case 3:if(P2=null,l=Nt,Nt=k2(n.containerInfo),et(n,t),Nt=l,rt(t),r&4&&e!==null&&e.memoizedState.isDehydrated)try{Ge(n.containerInfo)}catch(Y){m0(t,t.return,Y)}$l&&($l=!1,Yi(t));break;case 4:r=Nt,Nt=k2(t.stateNode.containerInfo),et(n,t),rt(t),Nt=r;break;case 12:et(n,t),rt(t);break;case 31:et(n,t),rt(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,G2(t,r)));break;case 13:et(n,t),rt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(q2=ut()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,G2(t,r)));break;case 22:l=t.memoizedState!==null;var g=e!==null&&e.memoizedState!==null,M=It,z=w0;if(It=M||l,w0=z||g,et(n,t),w0=z,It=M,rt(t),r&8192)t:for(n=t.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(e===null||g||It||w0||$n(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){g=e=n;try{if(i=g.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{v=g.stateNode;var O=g.memoizedProps.style,A=O!=null&&O.hasOwnProperty("display")?O.display:null;v.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Y){m0(g,g.return,Y)}}}else if(n.tag===6){if(e===null){g=n;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(Y){m0(g,g.return,Y)}}}else if(n.tag===18){if(e===null){g=n;try{var _=g.stateNode;l?Ru(_,!0):Ru(g.stateNode,!1)}catch(Y){m0(g,g.return,Y)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(e=r.retryQueue,e!==null&&(r.retryQueue=null,G2(t,e))));break;case 19:et(n,t),rt(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,G2(t,r)));break;case 30:break;case 21:break;default:et(n,t),rt(t)}}function rt(t){var n=t.flags;if(n&2){try{for(var e,r=t.return;r!==null;){if(Di(r)){e=r;break}r=r.return}if(e==null)throw Error(c(160));switch(e.tag){case 27:var l=e.stateNode,i=Fl(t);H2(t,i,l);break;case 5:var s=e.stateNode;e.flags&32&&(ie(s,""),e.flags&=-33);var v=Fl(t);H2(t,v,s);break;case 3:case 4:var g=e.stateNode.containerInfo,M=Fl(t);Wl(t,M,g);break;default:throw Error(c(161))}}catch(z){m0(t,t.return,z)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Yi(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Yi(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function tn(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Li(t,n.alternate,n),n=n.sibling}function $n(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:bn(4,n,n.return),$n(n);break;case 1:wt(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&Ri(n,n.return,e),$n(n);break;case 27:U1(n.stateNode);case 26:case 5:wt(n,n.return),$n(n);break;case 22:n.memoizedState===null&&$n(n);break;case 30:$n(n);break;default:$n(n)}t=t.sibling}}function nn(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=t,i=n,s=i.flags;switch(i.tag){case 0:case 11:case 15:nn(l,i,e),M1(4,i);break;case 1:if(nn(l,i,e),r=i,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){m0(r,r.return,M)}if(r=i,l=r.updateQueue,l!==null){var v=r.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)y4(g[l],v)}catch(M){m0(r,r.return,M)}}e&&s&64&&Ci(i),A1(i,i.return);break;case 27:Ni(i);case 26:case 5:nn(l,i,e),e&&r===null&&s&4&&Oi(i),A1(i,i.return);break;case 12:nn(l,i,e);break;case 31:nn(l,i,e),e&&s&4&&Gi(l,i);break;case 13:nn(l,i,e),e&&s&4&&wi(l,i);break;case 22:i.memoizedState===null&&nn(l,i,e),A1(i,i.return);break;case 30:break;default:nn(l,i,e)}n=n.sibling}}function kl(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&s1(e))}function Il(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&s1(t))}function Ut(t,n,e,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vi(t,n,e,r),n=n.sibling}function Vi(t,n,e,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ut(t,n,e,r),l&2048&&M1(9,n);break;case 1:Ut(t,n,e,r);break;case 3:Ut(t,n,e,r),l&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&s1(t)));break;case 12:if(l&2048){Ut(t,n,e,r),t=n.stateNode;try{var i=n.memoizedProps,s=i.id,v=i.onPostCommit;typeof v=="function"&&v(s,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){m0(n,n.return,g)}}else Ut(t,n,e,r);break;case 31:Ut(t,n,e,r);break;case 13:Ut(t,n,e,r);break;case 23:break;case 22:i=n.stateNode,s=n.alternate,n.memoizedState!==null?i._visibility&2?Ut(t,n,e,r):_1(t,n):i._visibility&2?Ut(t,n,e,r):(i._visibility|=2,ze(t,n,e,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&kl(s,n);break;case 24:Ut(t,n,e,r),l&2048&&Il(n.alternate,n);break;default:Ut(t,n,e,r)}}function ze(t,n,e,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=t,s=n,v=e,g=r,M=s.flags;switch(s.tag){case 0:case 11:case 15:ze(i,s,v,g,l),M1(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?ze(i,s,v,g,l):_1(i,s):(z._visibility|=2,ze(i,s,v,g,l)),l&&M&2048&&kl(s.alternate,s);break;case 24:ze(i,s,v,g,l),l&&M&2048&&Il(s.alternate,s);break;default:ze(i,s,v,g,l)}n=n.sibling}}function _1(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,r=n,l=r.flags;switch(r.tag){case 22:_1(e,r),l&2048&&kl(r.alternate,r);break;case 24:_1(e,r),l&2048&&Il(r.alternate,r);break;default:_1(e,r)}n=n.sibling}}var z1=8192;function xe(t,n,e){if(t.subtreeFlags&z1)for(t=t.child;t!==null;)Xi(t,n,e),t=t.sibling}function Xi(t,n,e){switch(t.tag){case 26:xe(t,n,e),t.flags&z1&&t.memoizedState!==null&&q8(e,Nt,t.memoizedState,t.memoizedProps);break;case 5:xe(t,n,e);break;case 3:case 4:var r=Nt;Nt=k2(t.stateNode.containerInfo),xe(t,n,e),Nt=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=z1,z1=16777216,xe(t,n,e),z1=r):xe(t,n,e));break;default:xe(t,n,e)}}function ji(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function x1(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var r=n[e];X0=r,Zi(r,t)}ji(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qi(t),t=t.sibling}function Qi(t){switch(t.tag){case 0:case 11:case 15:x1(t),t.flags&2048&&bn(9,t,t.return);break;case 3:x1(t);break;case 12:x1(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,w2(t)):x1(t);break;default:x1(t)}}function w2(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var r=n[e];X0=r,Zi(r,t)}ji(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:bn(8,n,n.return),w2(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,w2(n));break;default:w2(n)}t=t.sibling}}function Zi(t,n){for(;X0!==null;){var e=X0;switch(e.tag){case 0:case 11:case 15:bn(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var r=e.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:s1(e.memoizedState.cache)}if(r=e.child,r!==null)r.return=e,X0=r;else t:for(e=t;X0!==null;){r=X0;var l=r.sibling,i=r.return;if(Bi(r),r===e){X0=null;break t}if(l!==null){l.return=i,X0=l;break t}X0=i}}}var t8={getCacheForType:function(t){var n=Z0(B0),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return Z0(B0).controller.signal}},n8=typeof WeakMap=="function"?WeakMap:Map,o0=0,E0=null,l0=null,i0=0,d0=0,dt=null,En=!1,Ce=!1,Pl=!1,en=0,R0=0,Tn=0,kn=0,t3=0,mt=0,Re=0,C1=null,lt=null,n3=!1,q2=0,Ki=0,Y2=1/0,V2=null,Mn=null,Y0=0,An=null,Oe=null,rn=0,e3=0,r3=null,Ji=null,R1=0,l3=null;function gt(){return(o0&2)!==0&&i0!==0?i0&-i0:x.T!==null?s3():ca()}function Fi(){if(mt===0)if((i0&536870912)===0||f0){var t=W1;W1<<=1,(W1&3932160)===0&&(W1=262144),mt=t}else mt=536870912;return t=vt.current,t!==null&&(t.flags|=32),mt}function at(t,n,e){(t===E0&&(d0===2||d0===9)||t.cancelPendingCommit!==null)&&(De(t,0),_n(t,i0,mt,!1)),$e(t,e),((o0&2)===0||t!==E0)&&(t===E0&&((o0&2)===0&&(kn|=e),R0===4&&_n(t,i0,mt,!1)),qt(t))}function Wi(t,n,e){if((o0&6)!==0)throw Error(c(327));var r=!e&&(n&127)===0&&(n&t.expiredLanes)===0||We(t,n),l=r?l8(t,n):i3(t,n,!0),i=r;do{if(l===0){Ce&&!r&&_n(t,n,0,!1);break}else{if(e=t.current.alternate,i&&!e8(e)){l=i3(t,n,!1),i=!1;continue}if(l===2){if(i=n,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;t:{var v=t;l=C1;var g=v.current.memoizedState.isDehydrated;if(g&&(De(v,s).flags|=256),s=i3(v,s,!1),s!==2){if(Pl&&!g){v.errorRecoveryDisabledLanes|=i,kn|=i,l=4;break t}i=lt,lt=l,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){De(t,0),_n(t,n,0,!0);break}t:{switch(r=t,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:_n(r,n,mt,!En);break t;case 2:lt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(l=q2+300-ut(),10<l)){if(_n(r,n,mt,!En),k1(r,0,!0)!==0)break t;rn=n,r.timeoutHandle=zu($i.bind(null,r,e,lt,V2,n3,n,mt,kn,Re,En,i,"Throttled",-0,0),l);break t}$i(r,e,lt,V2,n3,n,mt,kn,Re,En,i,null,-0,0)}}break}while(!0);qt(t)}function $i(t,n,e,r,l,i,s,v,g,M,z,O,A,_){if(t.timeoutHandle=-1,O=n.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Xi(n,i,O);var Y=(i&62914560)===i?q2-ut():(i&4194048)===i?Ki-ut():0;if(Y=Y8(O,Y),Y!==null){rn=i,t.cancelPendingCommit=Y(lu.bind(null,t,n,i,e,r,l,s,v,g,z,O,null,A,_)),_n(t,i,s,!M);return}}lu(t,n,i,e,r,l,s,v,g)}function e8(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var r=0;r<e.length;r++){var l=e[r],i=l.getSnapshot;l=l.value;try{if(!st(i(),l))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _n(t,n,e,r){n&=~t3,n&=~kn,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var i=31-ct(l),s=1<<i;r[i]=-1,l&=~s}e!==0&&ia(t,e,n)}function X2(){return(o0&6)===0?(O1(0),!1):!0}function a3(){if(l0!==null){if(d0===0)var t=l0.return;else t=l0,Kt=Xn=null,El(t),Ee=null,v1=0,t=l0;for(;t!==null;)xi(t.alternate,t),t=t.return;l0=null}}function De(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,T8(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),rn=0,a3(),E0=t,l0=e=Qt(t.current,null),i0=n,d0=0,dt=null,En=!1,Ce=We(t,n),Pl=!1,Re=mt=t3=kn=Tn=R0=0,lt=C1=null,n3=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var l=31-ct(r),i=1<<l;n|=t[l],r&=~i}return en=n,c2(),e}function ki(t,n){n0=null,x.H=b1,n===be||n===y2?(n=h4(),d0=3):n===cl?(n=h4(),d0=4):d0=n===Gl?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,dt=n,l0===null&&(R0=1,D2(t,Tt(n,t.current)))}function Ii(){var t=vt.current;return t===null?!0:(i0&4194048)===i0?zt===null:(i0&62914560)===i0||(i0&536870912)!==0?t===zt:!1}function Pi(){var t=x.H;return x.H=b1,t===null?b1:t}function tu(){var t=x.A;return x.A=t8,t}function j2(){R0=4,En||(i0&4194048)!==i0&&vt.current!==null||(Ce=!0),(Tn&134217727)===0&&(kn&134217727)===0||E0===null||_n(E0,i0,mt,!1)}function i3(t,n,e){var r=o0;o0|=2;var l=Pi(),i=tu();(E0!==t||i0!==n)&&(V2=null,De(t,n)),n=!1;var s=R0;t:do try{if(d0!==0&&l0!==null){var v=l0,g=dt;switch(d0){case 8:a3(),s=6;break t;case 3:case 2:case 9:case 6:vt.current===null&&(n=!0);var M=d0;if(d0=0,dt=null,Ne(t,v,g,M),e&&Ce){s=0;break t}break;default:M=d0,d0=0,dt=null,Ne(t,v,g,M)}}r8(),s=R0;break}catch(z){ki(t,z)}while(!0);return n&&t.shellSuspendCounter++,Kt=Xn=null,o0=r,x.H=l,x.A=i,l0===null&&(E0=null,i0=0,c2()),s}function r8(){for(;l0!==null;)nu(l0)}function l8(t,n){var e=o0;o0|=2;var r=Pi(),l=tu();E0!==t||i0!==n?(V2=null,Y2=ut()+500,De(t,n)):Ce=We(t,n);t:do try{if(d0!==0&&l0!==null){n=l0;var i=dt;n:switch(d0){case 1:d0=0,dt=null,Ne(t,n,i,1);break;case 2:case 9:if(o4(i)){d0=0,dt=null,eu(n);break}n=function(){d0!==2&&d0!==9||E0!==t||(d0=7),qt(t)},i.then(n,n);break t;case 3:d0=7;break t;case 4:d0=5;break t;case 7:o4(i)?(d0=0,dt=null,eu(n)):(d0=0,dt=null,Ne(t,n,i,7));break;case 5:var s=null;switch(l0.tag){case 26:s=l0.memoizedState;case 5:case 27:var v=l0;if(s?Vu(s):v.stateNode.complete){d0=0,dt=null;var g=v.sibling;if(g!==null)l0=g;else{var M=v.return;M!==null?(l0=M,Q2(M)):l0=null}break n}}d0=0,dt=null,Ne(t,n,i,5);break;case 6:d0=0,dt=null,Ne(t,n,i,6);break;case 8:a3(),R0=6;break t;default:throw Error(c(462))}}a8();break}catch(z){ki(t,z)}while(!0);return Kt=Xn=null,x.H=r,x.A=l,o0=e,l0!==null?0:(E0=null,i0=0,c2(),R0)}function a8(){for(;l0!==null&&!C5();)nu(l0)}function nu(t){var n=_i(t.alternate,t,en);t.memoizedProps=t.pendingProps,n===null?Q2(t):l0=n}function eu(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=Si(e,n,n.pendingProps,n.type,void 0,i0);break;case 11:n=Si(e,n,n.pendingProps,n.type.render,n.ref,i0);break;case 5:El(n);default:xi(e,n),n=l0=t4(n,en),n=_i(e,n,en)}t.memoizedProps=t.pendingProps,n===null?Q2(t):l0=n}function Ne(t,n,e,r){Kt=Xn=null,El(n),Ee=null,v1=0;var l=n.return;try{if(J6(t,l,n,e,i0)){R0=1,D2(t,Tt(e,t.current)),l0=null;return}}catch(i){if(l!==null)throw l0=l,i;R0=1,D2(t,Tt(e,t.current)),l0=null;return}n.flags&32768?(f0||r===1?t=!0:Ce||(i0&536870912)!==0?t=!1:(En=t=!0,(r===2||r===9||r===3||r===6)&&(r=vt.current,r!==null&&r.tag===13&&(r.flags|=16384))),ru(n,t)):Q2(n)}function Q2(t){var n=t;do{if((n.flags&32768)!==0){ru(n,En);return}t=n.return;var e=$6(n.alternate,n,en);if(e!==null){l0=e;return}if(n=n.sibling,n!==null){l0=n;return}l0=n=t}while(n!==null);R0===0&&(R0=5)}function ru(t,n){do{var e=k6(t.alternate,t);if(e!==null){e.flags&=32767,l0=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){l0=t;return}l0=t=e}while(t!==null);R0=6,l0=null}function lu(t,n,e,r,l,i,s,v,g){t.cancelPendingCommit=null;do Z2();while(Y0!==0);if((o0&6)!==0)throw Error(c(327));if(n!==null){if(n===t.current)throw Error(c(177));if(i=n.lanes|n.childLanes,i|=Fr,w5(t,e,i,s,v,g),t===E0&&(l0=E0=null,i0=0),Oe=n,An=t,rn=e,e3=i,r3=l,Ji=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,c8(J1,function(){return cu(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=x.T,x.T=null,l=H.p,H.p=2,s=o0,o0|=4;try{I6(t,n,e)}finally{o0=s,H.p=l,x.T=r}}Y0=1,au(),iu(),uu()}}function au(){if(Y0===1){Y0=0;var t=An,n=Oe,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=x.T,x.T=null;var r=H.p;H.p=2;var l=o0;o0|=4;try{qi(n,t);var i=p3,s=Za(t.containerInfo),v=i.focusedElem,g=i.selectionRange;if(s!==v&&v&&v.ownerDocument&&Qa(v.ownerDocument.documentElement,v)){if(g!==null&&jr(v)){var M=g.start,z=g.end;if(z===void 0&&(z=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(z,v.value.length);else{var O=v.ownerDocument||document,A=O&&O.defaultView||window;if(A.getSelection){var _=A.getSelection(),Y=v.textContent.length,F=Math.min(g.start,Y),S0=g.end===void 0?F:Math.min(g.end,Y);!_.extend&&F>S0&&(s=S0,S0=F,F=s);var E=ja(v,F),p=ja(v,S0);if(E&&p&&(_.rangeCount!==1||_.anchorNode!==E.node||_.anchorOffset!==E.offset||_.focusNode!==p.node||_.focusOffset!==p.offset)){var T=O.createRange();T.setStart(E.node,E.offset),_.removeAllRanges(),F>S0?(_.addRange(T),_.extend(p.node,p.offset)):(T.setEnd(p.node,p.offset),_.addRange(T))}}}}for(O=[],_=v;_=_.parentNode;)_.nodeType===1&&O.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<O.length;v++){var C=O[v];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}rr=!!y3,p3=y3=null}finally{o0=l,H.p=r,x.T=e}}t.current=n,Y0=2}}function iu(){if(Y0===2){Y0=0;var t=An,n=Oe,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=x.T,x.T=null;var r=H.p;H.p=2;var l=o0;o0|=4;try{Li(t,n.alternate,n)}finally{o0=l,H.p=r,x.T=e}}Y0=3}}function uu(){if(Y0===4||Y0===3){Y0=0,R5();var t=An,n=Oe,e=rn,r=Ji;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Y0=5:(Y0=0,Oe=An=null,fu(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Mn=null),Ar(e),n=n.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Fe,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=x.T,l=H.p,H.p=2,x.T=null;try{for(var i=t.onRecoverableError,s=0;s<r.length;s++){var v=r[s];i(v.value,{componentStack:v.stack})}}finally{x.T=n,H.p=l}}(rn&3)!==0&&Z2(),qt(t),l=t.pendingLanes,(e&261930)!==0&&(l&42)!==0?t===l3?R1++:(R1=0,l3=t):R1=0,O1(0)}}function fu(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,s1(n)))}function Z2(){return au(),iu(),uu(),cu()}function cu(){if(Y0!==5)return!1;var t=An,n=e3;e3=0;var e=Ar(rn),r=x.T,l=H.p;try{H.p=32>e?32:e,x.T=null,e=r3,r3=null;var i=An,s=rn;if(Y0=0,Oe=An=null,rn=0,(o0&6)!==0)throw Error(c(331));var v=o0;if(o0|=4,Qi(i.current),Vi(i,i.current,s,e),o0=v,O1(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Fe,i)}catch{}return!0}finally{H.p=l,x.T=r,fu(t,n)}}function su(t,n,e){n=Tt(e,n),n=Hl(t.stateNode,n,2),t=yn(t,n,2),t!==null&&($e(t,2),qt(t))}function m0(t,n,e){if(t.tag===3)su(t,t,e);else for(;n!==null;){if(n.tag===3){su(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){t=Tt(e,t),e=oi(2),r=yn(n,e,2),r!==null&&(vi(e,r,n,t),$e(r,2),qt(r));break}}n=n.return}}function u3(t,n,e){var r=t.pingCache;if(r===null){r=t.pingCache=new n8;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(e)||(Pl=!0,l.add(e),t=i8.bind(null,t,n,e),n.then(t,t))}function i8(t,n,e){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,E0===t&&(i0&e)===e&&(R0===4||R0===3&&(i0&62914560)===i0&&300>ut()-q2?(o0&2)===0&&De(t,0):t3|=e,Re===i0&&(Re=0)),qt(t)}function ou(t,n){n===0&&(n=aa()),t=qn(t,n),t!==null&&($e(t,n),qt(t))}function u8(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),ou(t,e)}function f8(t,n){var e=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(c(314))}r!==null&&r.delete(n),ou(t,e)}function c8(t,n){return br(t,n)}var K2=null,Ue=null,f3=!1,J2=!1,c3=!1,zn=0;function qt(t){t!==Ue&&t.next===null&&(Ue===null?K2=Ue=t:Ue=Ue.next=t),J2=!0,f3||(f3=!0,o8())}function O1(t,n){if(!c3&&J2){c3=!0;do for(var e=!1,r=K2;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var i=0;else{var s=r.suspendedLanes,v=r.pingedLanes;i=(1<<31-ct(42|t)+1)-1,i&=l&~(s&~v),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,mu(r,i))}else i=i0,i=k1(r,r===E0?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||We(r,i)||(e=!0,mu(r,i));r=r.next}while(e);c3=!1}}function s8(){vu()}function vu(){J2=f3=!1;var t=0;zn!==0&&E8()&&(t=zn);for(var n=ut(),e=null,r=K2;r!==null;){var l=r.next,i=hu(r,n);i===0?(r.next=null,e===null?K2=l:e.next=l,l===null&&(Ue=e)):(e=r,(t!==0||(i&3)!==0)&&(J2=!0)),r=l}Y0!==0&&Y0!==5||O1(t),zn!==0&&(zn=0)}function hu(t,n){for(var e=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-ct(i),v=1<<s,g=l[s];g===-1?((v&e)===0||(v&r)!==0)&&(l[s]=G5(v,n)):g<=n&&(t.expiredLanes|=v),i&=~v}if(n=E0,e=i0,e=k1(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,e===0||t===n&&(d0===2||d0===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Er(r),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||We(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(r!==null&&Er(r),Ar(e)){case 2:case 8:e=ra;break;case 32:e=J1;break;case 268435456:e=la;break;default:e=J1}return r=du.bind(null,t),e=br(e,r),t.callbackPriority=n,t.callbackNode=e,n}return r!==null&&r!==null&&Er(r),t.callbackPriority=2,t.callbackNode=null,2}function du(t,n){if(Y0!==0&&Y0!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Z2()&&t.callbackNode!==e)return null;var r=i0;return r=k1(t,t===E0?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Wi(t,r,n),hu(t,ut()),t.callbackNode!=null&&t.callbackNode===e?du.bind(null,t):null)}function mu(t,n){if(Z2())return null;Wi(t,n,!0)}function o8(){M8(function(){(o0&6)!==0?br(ea,s8):vu()})}function s3(){if(zn===0){var t=pe;t===0&&(t=F1,F1<<=1,(F1&261888)===0&&(F1=256)),zn=t}return zn}function gu(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:n2(""+t)}function yu(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function v8(t,n,e,r,l){if(n==="submit"&&e&&e.stateNode===l){var i=gu((l[P0]||null).action),s=r.submitter;s&&(n=(n=s[P0]||null)?gu(n.formAction):s.getAttribute("formAction"),n!==null&&(i=n,s=null));var v=new a2("action","action",null,r,l);t.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(zn!==0){var g=s?yu(l,s):new FormData(l);Ol(e,{pending:!0,data:g,method:l.method,action:i},null,g)}}else typeof i=="function"&&(v.preventDefault(),g=s?yu(l,s):new FormData(l),Ol(e,{pending:!0,data:g,method:l.method,action:i},i,g))},currentTarget:l}]})}}for(var o3=0;o3<Jr.length;o3++){var v3=Jr[o3],h8=v3.toLowerCase(),d8=v3[0].toUpperCase()+v3.slice(1);Dt(h8,"on"+d8)}Dt(Fa,"onAnimationEnd"),Dt(Wa,"onAnimationIteration"),Dt($a,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(O6,"onTransitionRun"),Dt(D6,"onTransitionStart"),Dt(N6,"onTransitionCancel"),Dt(ka,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var D1="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(D1));function pu(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var r=t[e],l=r.event;r=r.listeners;t:{var i=void 0;if(n)for(var s=r.length-1;0<=s;s--){var v=r[s],g=v.instance,M=v.currentTarget;if(v=v.listener,g!==i&&l.isPropagationStopped())break t;i=v,l.currentTarget=M;try{i(l)}catch(z){f2(z)}l.currentTarget=null,i=g}else for(s=0;s<r.length;s++){if(v=r[s],g=v.instance,M=v.currentTarget,v=v.listener,g!==i&&l.isPropagationStopped())break t;i=v,l.currentTarget=M;try{i(l)}catch(z){f2(z)}l.currentTarget=null,i=g}}}}function a0(t,n){var e=n[_r];e===void 0&&(e=n[_r]=new Set);var r=t+"__bubble";e.has(r)||(Su(n,t,2,!1),e.add(r))}function h3(t,n,e){var r=0;n&&(r|=4),Su(e,t,r,n)}var F2="_reactListening"+Math.random().toString(36).slice(2);function d3(t){if(!t[F2]){t[F2]=!0,va.forEach(function(e){e!=="selectionchange"&&(m8.has(e)||h3(e,!1,t),h3(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[F2]||(n[F2]=!0,h3("selectionchange",!1,n))}}function Su(t,n,e,r){switch(Fu(n)){case 2:var l=j8;break;case 8:l=Q8;break;default:l=R3}e=l.bind(null,n,e,t),l=void 0,!Lr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,e,{capture:!0,passive:l}):t.addEventListener(n,e,!0):l!==void 0?t.addEventListener(n,e,{passive:l}):t.addEventListener(n,e,!1)}function m3(t,n,e,r,l){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var v=r.stateNode.containerInfo;if(v===l)break;if(s===4)for(s=r.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;v!==null;){if(s=ne(v),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){r=i=s;continue t}v=v.parentNode}}r=r.return}Aa(function(){var M=i,z=Nr(e),O=[];t:{var A=Ia.get(t);if(A!==void 0){var _=a2,Y=t;switch(t){case"keypress":if(r2(e)===0)break t;case"keydown":case"keyup":_=f6;break;case"focusin":Y="focus",_=wr;break;case"focusout":Y="blur",_=wr;break;case"beforeblur":case"afterblur":_=wr;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=$5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=o6;break;case Fa:case Wa:case $a:_=P5;break;case ka:_=h6;break;case"scroll":case"scrollend":_=F5;break;case"wheel":_=m6;break;case"copy":case"cut":case"paste":_=n6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ra;break;case"toggle":case"beforetoggle":_=y6}var F=(n&4)!==0,S0=!F&&(t==="scroll"||t==="scrollend"),E=F?A!==null?A+"Capture":null:A;F=[];for(var p=M,T;p!==null;){var C=p;if(T=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||T===null||E===null||(C=Pe(p,E),C!=null&&F.push(N1(p,C,T))),S0)break;p=p.return}0<F.length&&(A=new _(A,Y,null,e,z),O.push({event:A,listeners:F}))}}if((n&7)===0){t:{if(A=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",A&&e!==Dr&&(Y=e.relatedTarget||e.fromElement)&&(ne(Y)||Y[te]))break t;if((_||A)&&(A=z.window===z?z:(A=z.ownerDocument)?A.defaultView||A.parentWindow:window,_?(Y=e.relatedTarget||e.toElement,_=M,Y=Y?ne(Y):null,Y!==null&&(S0=d(Y),F=Y.tag,Y!==S0||F!==5&&F!==27&&F!==6)&&(Y=null)):(_=null,Y=M),_!==Y)){if(F=xa,C="onMouseLeave",E="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(F=Ra,C="onPointerLeave",E="onPointerEnter",p="pointer"),S0=_==null?A:Ie(_),T=Y==null?A:Ie(Y),A=new F(C,p+"leave",_,e,z),A.target=S0,A.relatedTarget=T,C=null,ne(z)===M&&(F=new F(E,p+"enter",Y,e,z),F.target=T,F.relatedTarget=S0,C=F),S0=C,_&&Y)n:{for(F=g8,E=_,p=Y,T=0,C=E;C;C=F(C))T++;C=0;for(var K=p;K;K=F(K))C++;for(;0<T-C;)E=F(E),T--;for(;0<C-T;)p=F(p),C--;for(;T--;){if(E===p||p!==null&&E===p.alternate){F=E;break n}E=F(E),p=F(p)}F=null}else F=null;_!==null&&bu(O,A,_,F,!1),Y!==null&&S0!==null&&bu(O,S0,Y,F,!0)}}t:{if(A=M?Ie(M):window,_=A.nodeName&&A.nodeName.toLowerCase(),_==="select"||_==="input"&&A.type==="file")var c0=Ga;else if(Ba(A))if(wa)c0=x6;else{c0=_6;var X=A6}else _=A.nodeName,!_||_.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?M&&Or(M.elementType)&&(c0=Ga):c0=z6;if(c0&&(c0=c0(t,M))){Ha(O,c0,e,z);break t}X&&X(t,A,M),t==="focusout"&&M&&A.type==="number"&&M.memoizedProps.value!=null&&Rr(A,"number",A.value)}switch(X=M?Ie(M):window,t){case"focusin":(Ba(X)||X.contentEditable==="true")&&(se=X,Qr=M,u1=null);break;case"focusout":u1=Qr=se=null;break;case"mousedown":Zr=!0;break;case"contextmenu":case"mouseup":case"dragend":Zr=!1,Ka(O,e,z);break;case"selectionchange":if(R6)break;case"keydown":case"keyup":Ka(O,e,z)}var e0;if(Yr)t:{switch(t){case"compositionstart":var u0="onCompositionStart";break t;case"compositionend":u0="onCompositionEnd";break t;case"compositionupdate":u0="onCompositionUpdate";break t}u0=void 0}else ce?Ua(t,e)&&(u0="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(u0="onCompositionStart");u0&&(Oa&&e.locale!=="ko"&&(ce||u0!=="onCompositionStart"?u0==="onCompositionEnd"&&ce&&(e0=_a()):(sn=z,Br="value"in sn?sn.value:sn.textContent,ce=!0)),X=W2(M,u0),0<X.length&&(u0=new Ca(u0,t,null,e,z),O.push({event:u0,listeners:X}),e0?u0.data=e0:(e0=La(e),e0!==null&&(u0.data=e0)))),(e0=S6?b6(t,e):E6(t,e))&&(u0=W2(M,"onBeforeInput"),0<u0.length&&(X=new Ca("onBeforeInput","beforeinput",null,e,z),O.push({event:X,listeners:u0}),X.data=e0)),v8(O,t,M,e,z)}pu(O,n)})}function N1(t,n,e){return{instance:t,listener:n,currentTarget:e}}function W2(t,n){for(var e=n+"Capture",r=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Pe(t,e),l!=null&&r.unshift(N1(t,l,i)),l=Pe(t,n),l!=null&&r.push(N1(t,l,i))),t.tag===3)return r;t=t.return}return[]}function g8(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bu(t,n,e,r,l){for(var i=n._reactName,s=[];e!==null&&e!==r;){var v=e,g=v.alternate,M=v.stateNode;if(v=v.tag,g!==null&&g===r)break;v!==5&&v!==26&&v!==27||M===null||(g=M,l?(M=Pe(e,i),M!=null&&s.unshift(N1(e,M,g))):l||(M=Pe(e,i),M!=null&&s.push(N1(e,M,g)))),e=e.return}s.length!==0&&t.push({event:n,listeners:s})}var y8=/\r\n?/g,p8=/\u0000|\uFFFD/g;function Eu(t){return(typeof t=="string"?t:""+t).replace(y8,`
`).replace(p8,"")}function Tu(t,n){return n=Eu(n),Eu(t)===n}function p0(t,n,e,r,l,i){switch(e){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ie(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ie(t,""+r);break;case"className":P1(t,"class",r);break;case"tabIndex":P1(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":P1(t,e,r);break;case"style":Ta(t,r,i);break;case"data":if(n!=="object"){P1(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(e);break}r=n2(""+r),t.setAttribute(e,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(n!=="input"&&p0(t,n,"name",l.name,l,null),p0(t,n,"formEncType",l.formEncType,l,null),p0(t,n,"formMethod",l.formMethod,l,null),p0(t,n,"formTarget",l.formTarget,l,null)):(p0(t,n,"encType",l.encType,l,null),p0(t,n,"method",l.method,l,null),p0(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(e);break}r=n2(""+r),t.setAttribute(e,r);break;case"onClick":r!=null&&(t.onclick=Xt);break;case"onScroll":r!=null&&a0("scroll",t);break;case"onScrollEnd":r!=null&&a0("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(e=r.__html,e!=null){if(l.children!=null)throw Error(c(60));t.innerHTML=e}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}e=n2(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(e,""+r):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":r===!0?t.setAttribute(e,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(e,r):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(e,r):t.removeAttribute(e);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(e):t.setAttribute(e,r);break;case"popover":a0("beforetoggle",t),a0("toggle",t),I1(t,"popover",r);break;case"xlinkActuate":Vt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Vt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Vt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Vt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Vt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Vt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Vt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":I1(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=K5.get(e)||e,I1(t,e,r))}}function g3(t,n,e,r,l,i){switch(e){case"style":Ta(t,r,i);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(e=r.__html,e!=null){if(l.children!=null)throw Error(c(60));t.innerHTML=e}}break;case"children":typeof r=="string"?ie(t,r):(typeof r=="number"||typeof r=="bigint")&&ie(t,""+r);break;case"onScroll":r!=null&&a0("scroll",t);break;case"onScrollEnd":r!=null&&a0("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),n=e.slice(2,l?e.length-7:void 0),i=t[P0]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(n,i,l),typeof r=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,r,l);break t}e in t?t[e]=r:r===!0?t.setAttribute(e,""):I1(t,e,r)}}}function J0(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":a0("error",t),a0("load",t);var r=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var s=e[i];if(s!=null)switch(i){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:p0(t,n,i,s,e,null)}}l&&p0(t,n,"srcSet",e.srcSet,e,null),r&&p0(t,n,"src",e.src,e,null);return;case"input":a0("invalid",t);var v=i=s=l=null,g=null,M=null;for(r in e)if(e.hasOwnProperty(r)){var z=e[r];if(z!=null)switch(r){case"name":l=z;break;case"type":s=z;break;case"checked":g=z;break;case"defaultChecked":M=z;break;case"value":i=z;break;case"defaultValue":v=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,n));break;default:p0(t,n,r,z,e,null)}}pa(t,i,v,g,M,s,l,!1);return;case"select":a0("invalid",t),r=s=i=null;for(l in e)if(e.hasOwnProperty(l)&&(v=e[l],v!=null))switch(l){case"value":i=v;break;case"defaultValue":s=v;break;case"multiple":r=v;default:p0(t,n,l,v,e,null)}n=i,e=s,t.multiple=!!r,n!=null?ae(t,!!r,n,!1):e!=null&&ae(t,!!r,e,!0);return;case"textarea":a0("invalid",t),i=l=r=null;for(s in e)if(e.hasOwnProperty(s)&&(v=e[s],v!=null))switch(s){case"value":r=v;break;case"defaultValue":l=v;break;case"children":i=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(c(91));break;default:p0(t,n,s,v,e,null)}ba(t,r,l,i);return;case"option":for(g in e)if(e.hasOwnProperty(g)&&(r=e[g],r!=null))switch(g){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:p0(t,n,g,r,e,null)}return;case"dialog":a0("beforetoggle",t),a0("toggle",t),a0("cancel",t),a0("close",t);break;case"iframe":case"object":a0("load",t);break;case"video":case"audio":for(r=0;r<D1.length;r++)a0(D1[r],t);break;case"image":a0("error",t),a0("load",t);break;case"details":a0("toggle",t);break;case"embed":case"source":case"link":a0("error",t),a0("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in e)if(e.hasOwnProperty(M)&&(r=e[M],r!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:p0(t,n,M,r,e,null)}return;default:if(Or(n)){for(z in e)e.hasOwnProperty(z)&&(r=e[z],r!==void 0&&g3(t,n,z,r,e,void 0));return}}for(v in e)e.hasOwnProperty(v)&&(r=e[v],r!=null&&p0(t,n,v,r,e,null))}function S8(t,n,e,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,v=null,g=null,M=null,z=null;for(_ in e){var O=e[_];if(e.hasOwnProperty(_)&&O!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":g=O;default:r.hasOwnProperty(_)||p0(t,n,_,null,r,O)}}for(var A in r){var _=r[A];if(O=e[A],r.hasOwnProperty(A)&&(_!=null||O!=null))switch(A){case"type":i=_;break;case"name":l=_;break;case"checked":M=_;break;case"defaultChecked":z=_;break;case"value":s=_;break;case"defaultValue":v=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,n));break;default:_!==O&&p0(t,n,A,_,r,O)}}Cr(t,s,v,g,M,z,i,l);return;case"select":_=s=v=A=null;for(i in e)if(g=e[i],e.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":_=g;default:r.hasOwnProperty(i)||p0(t,n,i,null,r,g)}for(l in r)if(i=r[l],g=e[l],r.hasOwnProperty(l)&&(i!=null||g!=null))switch(l){case"value":A=i;break;case"defaultValue":v=i;break;case"multiple":s=i;default:i!==g&&p0(t,n,l,i,r,g)}n=v,e=s,r=_,A!=null?ae(t,!!e,A,!1):!!r!=!!e&&(n!=null?ae(t,!!e,n,!0):ae(t,!!e,e?[]:"",!1));return;case"textarea":_=A=null;for(v in e)if(l=e[v],e.hasOwnProperty(v)&&l!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:p0(t,n,v,null,r,l)}for(s in r)if(l=r[s],i=e[s],r.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":A=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&p0(t,n,s,l,r,i)}Sa(t,A,_);return;case"option":for(var Y in e)if(A=e[Y],e.hasOwnProperty(Y)&&A!=null&&!r.hasOwnProperty(Y))switch(Y){case"selected":t.selected=!1;break;default:p0(t,n,Y,null,r,A)}for(g in r)if(A=r[g],_=e[g],r.hasOwnProperty(g)&&A!==_&&(A!=null||_!=null))switch(g){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:p0(t,n,g,A,r,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in e)A=e[F],e.hasOwnProperty(F)&&A!=null&&!r.hasOwnProperty(F)&&p0(t,n,F,null,r,A);for(M in r)if(A=r[M],_=e[M],r.hasOwnProperty(M)&&A!==_&&(A!=null||_!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,n));break;default:p0(t,n,M,A,r,_)}return;default:if(Or(n)){for(var S0 in e)A=e[S0],e.hasOwnProperty(S0)&&A!==void 0&&!r.hasOwnProperty(S0)&&g3(t,n,S0,void 0,r,A);for(z in r)A=r[z],_=e[z],!r.hasOwnProperty(z)||A===_||A===void 0&&_===void 0||g3(t,n,z,A,r,_);return}}for(var E in e)A=e[E],e.hasOwnProperty(E)&&A!=null&&!r.hasOwnProperty(E)&&p0(t,n,E,null,r,A);for(O in r)A=r[O],_=e[O],!r.hasOwnProperty(O)||A===_||A==null&&_==null||p0(t,n,O,A,r,_)}function Mu(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function b8(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),r=0;r<e.length;r++){var l=e[r],i=l.transferSize,s=l.initiatorType,v=l.duration;if(i&&v&&Mu(s)){for(s=0,v=l.responseEnd,r+=1;r<e.length;r++){var g=e[r],M=g.startTime;if(M>v)break;var z=g.transferSize,O=g.initiatorType;z&&Mu(O)&&(g=g.responseEnd,s+=z*(g<v?1:(v-M)/(g-M)))}if(--r,n+=8*(i+s)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var y3=null,p3=null;function $2(t){return t.nodeType===9?t:t.ownerDocument}function Au(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _u(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function S3(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var b3=null;function E8(){var t=window.event;return t&&t.type==="popstate"?t===b3?!1:(b3=t,!0):(b3=null,!1)}var zu=typeof setTimeout=="function"?setTimeout:void 0,T8=typeof clearTimeout=="function"?clearTimeout:void 0,xu=typeof Promise=="function"?Promise:void 0,M8=typeof queueMicrotask=="function"?queueMicrotask:typeof xu<"u"?function(t){return xu.resolve(null).then(t).catch(A8)}:zu;function A8(t){setTimeout(function(){throw t})}function xn(t){return t==="head"}function Cu(t,n){var e=n,r=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"||e==="/&"){if(r===0){t.removeChild(l),Ge(n);return}r--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")r++;else if(e==="html")U1(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,U1(e);for(var i=e.firstChild;i;){var s=i.nextSibling,v=i.nodeName;i[ke]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=s}}else e==="body"&&U1(t.ownerDocument.body);e=l}while(e);Ge(n)}function Ru(t,n){var e=t;t=0;do{var r=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),r&&r.nodeType===8)if(e=r.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=r}while(e)}function E3(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":E3(e),zr(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function _8(t,n,e,r){for(;t.nodeType===1;){var l=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ke])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=xt(t.nextSibling),t===null)break}return null}function z8(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=xt(t.nextSibling),t===null))return null;return t}function Ou(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xt(t.nextSibling),t===null))return null;return t}function T3(t){return t.data==="$?"||t.data==="$~"}function M3(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function x8(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var r=function(){n(),e.removeEventListener("DOMContentLoaded",r)};e.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function xt(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var A3=null;function Du(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return xt(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function Nu(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function Uu(t,n,e){switch(n=$2(e),t){case"html":if(t=n.documentElement,!t)throw Error(c(452));return t;case"head":if(t=n.head,!t)throw Error(c(453));return t;case"body":if(t=n.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function U1(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zr(t)}var Ct=new Map,Lu=new Set;function k2(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ln=H.d;H.d={f:C8,r:R8,D:O8,C:D8,L:N8,m:U8,X:B8,S:L8,M:H8};function C8(){var t=ln.f(),n=X2();return t||n}function R8(t){var n=ee(t);n!==null&&n.tag===5&&n.type==="form"?k4(n):ln.r(t)}var Le=typeof document>"u"?null:document;function Bu(t,n,e){var r=Le;if(r&&typeof n=="string"&&n){var l=bt(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),Lu.has(l)||(Lu.add(l),t={rel:t,crossOrigin:e,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),J0(n,"link",t),V0(n),r.head.appendChild(n)))}}function O8(t){ln.D(t),Bu("dns-prefetch",t,null)}function D8(t,n){ln.C(t,n),Bu("preconnect",t,n)}function N8(t,n,e){ln.L(t,n,e);var r=Le;if(r&&t&&n){var l='link[rel="preload"][as="'+bt(n)+'"]';n==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+bt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+bt(e.imageSizes)+'"]')):l+='[href="'+bt(t)+'"]';var i=l;switch(n){case"style":i=Be(t);break;case"script":i=He(t)}Ct.has(i)||(t=R({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),Ct.set(i,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(L1(i))||n==="script"&&r.querySelector(B1(i))||(n=r.createElement("link"),J0(n,"link",t),V0(n),r.head.appendChild(n)))}}function U8(t,n){ln.m(t,n);var e=Le;if(e&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+bt(r)+'"][href="'+bt(t)+'"]',i=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=He(t)}if(!Ct.has(i)&&(t=R({rel:"modulepreload",href:t},n),Ct.set(i,t),e.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(B1(i)))return}r=e.createElement("link"),J0(r,"link",t),V0(r),e.head.appendChild(r)}}}function L8(t,n,e){ln.S(t,n,e);var r=Le;if(r&&t){var l=re(r).hoistableStyles,i=Be(t);n=n||"default";var s=l.get(i);if(!s){var v={loading:0,preload:null};if(s=r.querySelector(L1(i)))v.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":n},e),(e=Ct.get(i))&&_3(t,e);var g=s=r.createElement("link");V0(g),J0(g,"link",t),g._p=new Promise(function(M,z){g.onload=M,g.onerror=z}),g.addEventListener("load",function(){v.loading|=1}),g.addEventListener("error",function(){v.loading|=2}),v.loading|=4,I2(s,n,r)}s={type:"stylesheet",instance:s,count:1,state:v},l.set(i,s)}}}function B8(t,n){ln.X(t,n);var e=Le;if(e&&t){var r=re(e).hoistableScripts,l=He(t),i=r.get(l);i||(i=e.querySelector(B1(l)),i||(t=R({src:t,async:!0},n),(n=Ct.get(l))&&z3(t,n),i=e.createElement("script"),V0(i),J0(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function H8(t,n){ln.M(t,n);var e=Le;if(e&&t){var r=re(e).hoistableScripts,l=He(t),i=r.get(l);i||(i=e.querySelector(B1(l)),i||(t=R({src:t,async:!0,type:"module"},n),(n=Ct.get(l))&&z3(t,n),i=e.createElement("script"),V0(i),J0(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function Hu(t,n,e,r){var l=(l=r0.current)?k2(l):null;if(!l)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Be(e.href),e=re(l).hoistableStyles,r=e.get(n),r||(r={type:"style",instance:null,count:0,state:null},e.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Be(e.href);var i=re(l).hoistableStyles,s=i.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=l.querySelector(L1(t)))&&!i._p&&(s.instance=i,s.state.loading=5),Ct.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Ct.set(t,e),i||G8(l,t,e,s.state))),n&&r===null)throw Error(c(528,""));return s}if(n&&r!==null)throw Error(c(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=He(e),e=re(l).hoistableScripts,r=e.get(n),r||(r={type:"script",instance:null,count:0,state:null},e.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Be(t){return'href="'+bt(t)+'"'}function L1(t){return'link[rel="stylesheet"]['+t+"]"}function Gu(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function G8(t,n,e,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),J0(n,"link",e),V0(n),t.head.appendChild(n))}function He(t){return'[src="'+bt(t)+'"]'}function B1(t){return"script[async]"+t}function wu(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+bt(e.href)+'"]');if(r)return n.instance=r,V0(r),r;var l=R({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),V0(r),J0(r,"style",l),I2(r,e.precedence,t),n.instance=r;case"stylesheet":l=Be(e.href);var i=t.querySelector(L1(l));if(i)return n.state.loading|=4,n.instance=i,V0(i),i;r=Gu(e),(l=Ct.get(l))&&_3(r,l),i=(t.ownerDocument||t).createElement("link"),V0(i);var s=i;return s._p=new Promise(function(v,g){s.onload=v,s.onerror=g}),J0(i,"link",r),n.state.loading|=4,I2(i,e.precedence,t),n.instance=i;case"script":return i=He(e.src),(l=t.querySelector(B1(i)))?(n.instance=l,V0(l),l):(r=e,(l=Ct.get(i))&&(r=R({},e),z3(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),V0(l),J0(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,I2(r,e.precedence,t));return n.instance}function I2(t,n,e){for(var r=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,i=l,s=0;s<r.length;s++){var v=r[s];if(v.dataset.precedence===n)i=v;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function _3(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function z3(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var P2=null;function qu(t,n,e){if(P2===null){var r=new Map,l=P2=new Map;l.set(e,r)}else l=P2,r=l.get(e),r||(r=new Map,l.set(e,r));if(r.has(t))return r;for(r.set(t,null),e=e.getElementsByTagName(t),l=0;l<e.length;l++){var i=e[l];if(!(i[ke]||i[j0]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(n)||"";s=t+s;var v=r.get(s);v?v.push(i):r.set(s,[i])}}return r}function Yu(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function w8(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vu(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function q8(t,n,e,r){if(e.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Be(r.href),i=n.querySelector(L1(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tr.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=i,V0(i);return}i=n.ownerDocument||n,r=Gu(r),(l=Ct.get(l))&&_3(r,l),i=i.createElement("link"),V0(i);var s=i;s._p=new Promise(function(v,g){s.onload=v,s.onerror=g}),J0(i,"link",r),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=tr.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var x3=0;function Y8(t,n){return t.stylesheets&&t.count===0&&er(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var r=setTimeout(function(){if(t.stylesheets&&er(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+n);0<t.imgBytes&&x3===0&&(x3=62500*b8());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&er(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>x3?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)er(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nr=null;function er(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nr=new Map,n.forEach(V8,t),nr=null,tr.call(t))}function V8(t,n){if(!(n.state.loading&4)){var e=nr.get(t);if(e)var r=e.get(null);else{e=new Map,nr.set(t,e);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),r=s)}r&&e.set(null,r)}l=n.instance,s=l.getAttribute("data-precedence"),i=e.get(s)||r,i===r&&e.set(null,l),e.set(s,l),this.count++,r=tr.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var H1={$$typeof:q,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function X8(t,n,e,r,l,i,s,v,g){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.hiddenUpdates=Tr(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Xu(t,n,e,r,l,i,s,v,g,M,z,O){return t=new X8(t,n,e,s,g,M,z,O,v),n=1,i===!0&&(n|=24),i=ot(3,null,null,n),t.current=i,i.stateNode=t,n=il(),n.refCount++,t.pooledCache=n,n.refCount++,i.memoizedState={element:r,isDehydrated:e,cache:n},sl(i),t}function ju(t){return t?(t=he,t):he}function Qu(t,n,e,r,l,i){l=ju(l),r.context===null?r.context=l:r.pendingContext=l,r=gn(n),r.payload={element:e},i=i===void 0?null:i,i!==null&&(r.callback=i),e=yn(t,r,n),e!==null&&(at(e,t,n),d1(e,t,n))}function Zu(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function C3(t,n){Zu(t,n),(t=t.alternate)&&Zu(t,n)}function Ku(t){if(t.tag===13||t.tag===31){var n=qn(t,67108864);n!==null&&at(n,t,67108864),C3(t,67108864)}}function Ju(t){if(t.tag===13||t.tag===31){var n=gt();n=Mr(n);var e=qn(t,n);e!==null&&at(e,t,n),C3(t,n)}}var rr=!0;function j8(t,n,e,r){var l=x.T;x.T=null;var i=H.p;try{H.p=2,R3(t,n,e,r)}finally{H.p=i,x.T=l}}function Q8(t,n,e,r){var l=x.T;x.T=null;var i=H.p;try{H.p=8,R3(t,n,e,r)}finally{H.p=i,x.T=l}}function R3(t,n,e,r){if(rr){var l=O3(r);if(l===null)m3(t,n,r,lr,e),Wu(t,r);else if(K8(l,t,n,e,r))r.stopPropagation();else if(Wu(t,r),n&4&&-1<Z8.indexOf(t)){for(;l!==null;){var i=ee(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ln(i.pendingLanes);if(s!==0){var v=i;for(v.pendingLanes|=2,v.entangledLanes|=2;s;){var g=1<<31-ct(s);v.entanglements[1]|=g,s&=~g}qt(i),(o0&6)===0&&(Y2=ut()+500,O1(0))}}break;case 31:case 13:v=qn(i,2),v!==null&&at(v,i,2),X2(),C3(i,2)}if(i=O3(r),i===null&&m3(t,n,r,lr,e),i===l)break;l=i}l!==null&&r.stopPropagation()}else m3(t,n,r,null,e)}}function O3(t){return t=Nr(t),D3(t)}var lr=null;function D3(t){if(lr=null,t=ne(t),t!==null){var n=d(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=m(n),t!==null)return t;t=null}else if(e===31){if(t=h(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lr=t,null}function Fu(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O5()){case ea:return 2;case ra:return 8;case J1:case D5:return 32;case la:return 268435456;default:return 32}default:return 32}}var N3=!1,Cn=null,Rn=null,On=null,G1=new Map,w1=new Map,Dn=[],Z8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wu(t,n){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":G1.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":w1.delete(n.pointerId)}}function q1(t,n,e,r,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:n,domEventName:e,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=ee(n),n!==null&&Ku(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function K8(t,n,e,r,l){switch(n){case"focusin":return Cn=q1(Cn,t,n,e,r,l),!0;case"dragenter":return Rn=q1(Rn,t,n,e,r,l),!0;case"mouseover":return On=q1(On,t,n,e,r,l),!0;case"pointerover":var i=l.pointerId;return G1.set(i,q1(G1.get(i)||null,t,n,e,r,l)),!0;case"gotpointercapture":return i=l.pointerId,w1.set(i,q1(w1.get(i)||null,t,n,e,r,l)),!0}return!1}function $u(t){var n=ne(t.target);if(n!==null){var e=d(n);if(e!==null){if(n=e.tag,n===13){if(n=m(e),n!==null){t.blockedOn=n,sa(t.priority,function(){Ju(e)});return}}else if(n===31){if(n=h(e),n!==null){t.blockedOn=n,sa(t.priority,function(){Ju(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ar(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=O3(t.nativeEvent);if(e===null){e=t.nativeEvent;var r=new e.constructor(e.type,e);Dr=r,e.target.dispatchEvent(r),Dr=null}else return n=ee(e),n!==null&&Ku(n),t.blockedOn=e,!1;n.shift()}return!0}function ku(t,n,e){ar(t)&&e.delete(n)}function J8(){N3=!1,Cn!==null&&ar(Cn)&&(Cn=null),Rn!==null&&ar(Rn)&&(Rn=null),On!==null&&ar(On)&&(On=null),G1.forEach(ku),w1.forEach(ku)}function ir(t,n){t.blockedOn===n&&(t.blockedOn=null,N3||(N3=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,J8)))}var ur=null;function Iu(t){ur!==t&&(ur=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ur===t&&(ur=null);for(var n=0;n<t.length;n+=3){var e=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(D3(r||e)===null)continue;break}var i=ee(e);i!==null&&(t.splice(n,3),n-=3,Ol(i,{pending:!0,data:l,method:e.method,action:r},r,l))}}))}function Ge(t){function n(g){return ir(g,t)}Cn!==null&&ir(Cn,t),Rn!==null&&ir(Rn,t),On!==null&&ir(On,t),G1.forEach(n),w1.forEach(n);for(var e=0;e<Dn.length;e++){var r=Dn[e];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Dn.length&&(e=Dn[0],e.blockedOn===null);)$u(e),e.blockedOn===null&&Dn.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(r=0;r<e.length;r+=3){var l=e[r],i=e[r+1],s=l[P0]||null;if(typeof i=="function")s||Iu(e);else if(s){var v=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[P0]||null)v=s.formAction;else if(D3(l)!==null)continue}else v=s.action;typeof v=="function"?e[r+1]=v:(e.splice(r,3),r-=3),Iu(e)}}}function Pu(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(e,20)}function e(){if(!r&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function U3(t){this._internalRoot=t}fr.prototype.render=U3.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(c(409));var e=n.current,r=gt();Qu(e,r,t,n,null,null)},fr.prototype.unmount=U3.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Qu(t.current,2,null,t,null,null),X2(),n[te]=null}};function fr(t){this._internalRoot=t}fr.prototype.unstable_scheduleHydration=function(t){if(t){var n=ca();t={blockedOn:null,target:t,priority:n};for(var e=0;e<Dn.length&&n!==0&&n<Dn[e].priority;e++);Dn.splice(e,0,t),e===0&&$u(t)}};var t5=a.version;if(t5!=="19.2.0")throw Error(c(527,t5,"19.2.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=b(n),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var F8={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cr.isDisabled&&cr.supportsFiber)try{Fe=cr.inject(F8),ft=cr}catch{}}return V1.createRoot=function(t,n){if(!o(t))throw Error(c(299));var e=!1,r="",l=ui,i=fi,s=ci;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Xu(t,1,!1,null,null,e,r,null,l,i,s,Pu),t[te]=n.current,d3(t),new U3(n)},V1.hydrateRoot=function(t,n,e){if(!o(t))throw Error(c(299));var r=!1,l="",i=ui,s=fi,v=ci,g=null;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(v=e.onRecoverableError),e.formState!==void 0&&(g=e.formState)),n=Xu(t,1,!0,n,e??null,r,l,g,i,s,v,Pu),n.context=ju(null),e=n.current,r=gt(),r=Mr(r),l=gn(r),l.callback=null,yn(e,l,r),e=r,n.current.lanes=e,$e(n,e),qt(n),t[te]=n.current,d3(t),new fr(n)},V1.version="19.2.0",V1}var s5;function l9(){if(s5)return H3.exports;s5=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(a){console.error(a)}}return u(),H3.exports=r9(),H3.exports}var a9=l9(),Y3={exports:{}},V3={};var o5;function i9(){if(o5)return V3;o5=1;var u=hr().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return V3.c=function(a){return u.H.useMemoCache(a)},V3}var v5;function u9(){return v5||(v5=1,Y3.exports=i9()),Y3.exports}var $3=u9();class f9{engine;lastTime;onUpdate;animationFrameId=null;boundLoop;constructor(a,f){this.engine=a,this.lastTime=0,this.onUpdate=f,this.boundLoop=this.loop.bind(this)}start(){this.lastTime=0,this.animationFrameId=requestAnimationFrame(this.boundLoop)}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}get isRunning(){return this.animationFrameId!==null}loop(a){this.lastTime===0&&(this.lastTime=a);const f=(a-this.lastTime)/1e3;this.lastTime=a,this.onUpdate(f),this.engine.isRunning&&(this.animationFrameId=requestAnimationFrame(this.boundLoop))}}class c9{currentInputFrame={keyboardState:new Map,mouseState:new Map,mousePosition:[0,0]};nextInputFrame={keyboardState:new Map,mouseState:new Map,mousePosition:[0,0]};constructor(a){window.addEventListener("keydown",f=>{this.nextInputFrame.keyboardState.set(f.key,!0),f.preventDefault()}),window.addEventListener("keyup",f=>{this.nextInputFrame.keyboardState.set(f.key,!1),f.preventDefault()}),window.addEventListener("mousedown",f=>{this.nextInputFrame.mouseState.set(f.button,!0)}),window.addEventListener("mouseup",f=>{this.nextInputFrame.mouseState.set(f.button,!1)}),window.addEventListener("mousemove",f=>{this.nextInputFrame.mousePosition[0]=f.clientX,this.nextInputFrame.mousePosition[1]=f.clientY}),window.addEventListener("blur",()=>{this.nextInputFrame.keyboardState.clear(),this.nextInputFrame.mouseState.clear(),this.currentInputFrame.keyboardState.clear(),this.currentInputFrame.mouseState.clear()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.nextInputFrame.keyboardState.clear(),this.nextInputFrame.mouseState.clear(),this.currentInputFrame.keyboardState.clear(),this.currentInputFrame.mouseState.clear())})}update(){this.currentInputFrame.keyboardState.clear(),this.nextInputFrame.keyboardState.forEach((a,f)=>{a&&this.currentInputFrame.keyboardState.set(f,a)}),this.currentInputFrame.mouseState.clear(),this.nextInputFrame.mouseState.forEach((a,f)=>{a&&this.currentInputFrame.mouseState.set(f,a)}),this.currentInputFrame.mousePosition[0]=this.nextInputFrame.mousePosition[0],this.currentInputFrame.mousePosition[1]=this.nextInputFrame.mousePosition[1],this.nextInputFrame.keyboardState.forEach((a,f)=>{a||this.nextInputFrame.keyboardState.delete(f)}),this.nextInputFrame.mouseState.forEach((a,f)=>{a||this.nextInputFrame.mouseState.delete(f)})}isKeyPressed(a){return this.currentInputFrame.keyboardState.get(a)||!1}isMouseButtonPressed(a){return this.currentInputFrame.mouseState.get(a)||!1}getMousePosition(){return this.currentInputFrame.mousePosition}}var s9=1e-6,yt=typeof Float32Array<"u"?Float32Array:Array,o9="zyx";function v9(){var u=new yt(9);return yt!=Float32Array&&(u[1]=0,u[2]=0,u[3]=0,u[5]=0,u[6]=0,u[7]=0),u[0]=1,u[4]=1,u[8]=1,u}function Pn(){var u=new yt(16);return yt!=Float32Array&&(u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=0,u[12]=0,u[13]=0,u[14]=0),u[0]=1,u[5]=1,u[10]=1,u[15]=1,u}function T5(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u[3]=a[3],u[4]=a[4],u[5]=a[5],u[6]=a[6],u[7]=a[7],u[8]=a[8],u[9]=a[9],u[10]=a[10],u[11]=a[11],u[12]=a[12],u[13]=a[13],u[14]=a[14],u[15]=a[15],u}function h9(u,a){var f=a[0],c=a[1],o=a[2],d=a[3],m=a[4],h=a[5],y=a[6],b=a[7],N=a[8],R=a[9],w=a[10],j=a[11],L=a[12],U=a[13],B=a[14],Z=a[15],J=f*h-c*m,q=f*y-o*m,Q=f*b-d*m,P=c*y-o*h,$=c*b-d*h,k=o*b-d*y,_0=N*U-R*L,U0=N*B-w*L,pt=N*Z-j*L,F0=R*B-w*U,L0=R*Z-j*U,it=w*Z-j*B,h0=J*it-q*L0+Q*F0+P*pt-$*U0+k*_0;return h0?(h0=1/h0,u[0]=(h*it-y*L0+b*F0)*h0,u[1]=(o*L0-c*it-d*F0)*h0,u[2]=(U*k-B*$+Z*P)*h0,u[3]=(w*$-R*k-j*P)*h0,u[4]=(y*pt-m*it-b*U0)*h0,u[5]=(f*it-o*pt+d*U0)*h0,u[6]=(B*Q-L*k-Z*q)*h0,u[7]=(N*k-w*Q+j*q)*h0,u[8]=(m*L0-h*pt+b*_0)*h0,u[9]=(c*pt-f*L0-d*_0)*h0,u[10]=(L*$-U*Q+Z*J)*h0,u[11]=(R*Q-N*$-j*J)*h0,u[12]=(h*U0-m*F0-y*_0)*h0,u[13]=(f*F0-c*U0+o*_0)*h0,u[14]=(U*q-L*P-B*J)*h0,u[15]=(N*P-R*q+w*J)*h0,u):null}function d9(u,a,f){var c=a[0],o=a[1],d=a[2],m=a[3],h=a[4],y=a[5],b=a[6],N=a[7],R=a[8],w=a[9],j=a[10],L=a[11],U=a[12],B=a[13],Z=a[14],J=a[15],q=f[0],Q=f[1],P=f[2],$=f[3];return u[0]=q*c+Q*h+P*R+$*U,u[1]=q*o+Q*y+P*w+$*B,u[2]=q*d+Q*b+P*j+$*Z,u[3]=q*m+Q*N+P*L+$*J,q=f[4],Q=f[5],P=f[6],$=f[7],u[4]=q*c+Q*h+P*R+$*U,u[5]=q*o+Q*y+P*w+$*B,u[6]=q*d+Q*b+P*j+$*Z,u[7]=q*m+Q*N+P*L+$*J,q=f[8],Q=f[9],P=f[10],$=f[11],u[8]=q*c+Q*h+P*R+$*U,u[9]=q*o+Q*y+P*w+$*B,u[10]=q*d+Q*b+P*j+$*Z,u[11]=q*m+Q*N+P*L+$*J,q=f[12],Q=f[13],P=f[14],$=f[15],u[12]=q*c+Q*h+P*R+$*U,u[13]=q*o+Q*y+P*w+$*B,u[14]=q*d+Q*b+P*j+$*Z,u[15]=q*m+Q*N+P*L+$*J,u}function m9(u,a,f){var c=a[0],o=a[1],d=a[2],m=a[3],h=c+c,y=o+o,b=d+d,N=c*h,R=c*y,w=c*b,j=o*y,L=o*b,U=d*b,B=m*h,Z=m*y,J=m*b;return u[0]=1-(j+U),u[1]=R+J,u[2]=w-Z,u[3]=0,u[4]=R-J,u[5]=1-(N+U),u[6]=L+B,u[7]=0,u[8]=w+Z,u[9]=L-B,u[10]=1-(N+j),u[11]=0,u[12]=f[0],u[13]=f[1],u[14]=f[2],u[15]=1,u}function g9(u,a){return u[0]=a[12],u[1]=a[13],u[2]=a[14],u}function y9(u,a){var f=a[0],c=a[1],o=a[2],d=a[4],m=a[5],h=a[6],y=a[8],b=a[9],N=a[10];return u[0]=Math.sqrt(f*f+c*c+o*o),u[1]=Math.sqrt(d*d+m*m+h*h),u[2]=Math.sqrt(y*y+b*b+N*N),u}function p9(u,a){var f=new yt(3);y9(f,a);var c=1/f[0],o=1/f[1],d=1/f[2],m=a[0]*c,h=a[1]*o,y=a[2]*d,b=a[4]*c,N=a[5]*o,R=a[6]*d,w=a[8]*c,j=a[9]*o,L=a[10]*d,U=m+N+L,B=0;return U>0?(B=Math.sqrt(U+1)*2,u[3]=.25*B,u[0]=(R-j)/B,u[1]=(w-y)/B,u[2]=(h-b)/B):m>N&&m>L?(B=Math.sqrt(1+m-N-L)*2,u[3]=(R-j)/B,u[0]=.25*B,u[1]=(h+b)/B,u[2]=(w+y)/B):N>L?(B=Math.sqrt(1+N-m-L)*2,u[3]=(w-y)/B,u[0]=(h+b)/B,u[1]=.25*B,u[2]=(R+j)/B):(B=Math.sqrt(1+L-m-N)*2,u[3]=(h-b)/B,u[0]=(w+y)/B,u[1]=(R+j)/B,u[2]=.25*B),u}function M5(u,a,f,c){var o=a[0],d=a[1],m=a[2],h=a[3],y=o+o,b=d+d,N=m+m,R=o*y,w=o*b,j=o*N,L=d*b,U=d*N,B=m*N,Z=h*y,J=h*b,q=h*N,Q=c[0],P=c[1],$=c[2];return u[0]=(1-(L+B))*Q,u[1]=(w+q)*Q,u[2]=(j-J)*Q,u[3]=0,u[4]=(w-q)*P,u[5]=(1-(R+B))*P,u[6]=(U+Z)*P,u[7]=0,u[8]=(j+J)*$,u[9]=(U-Z)*$,u[10]=(1-(R+L))*$,u[11]=0,u[12]=f[0],u[13]=f[1],u[14]=f[2],u[15]=1,u}function S9(u,a,f,c,o){var d=1/Math.tan(a/2);if(u[0]=d/f,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=d,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=-1,u[12]=0,u[13]=0,u[15]=0,o!=null&&o!==1/0){var m=1/(c-o);u[10]=(o+c)*m,u[14]=2*o*c*m}else u[10]=-1,u[14]=-2*c;return u}var b9=S9;function A0(){var u=new yt(3);return yt!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function E9(u){var a=u[0],f=u[1],c=u[2];return Math.sqrt(a*a+f*f+c*c)}function Lt(u,a,f){var c=new yt(3);return c[0]=u,c[1]=a,c[2]=f,c}function In(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u}function X3(u,a,f,c){return u[0]=a,u[1]=f,u[2]=c,u}function T9(u,a,f){return u[0]=a[0]+f[0],u[1]=a[1]+f[1],u[2]=a[2]+f[2],u}function M9(u,a){var f=a[0],c=a[1],o=a[2],d=f*f+c*c+o*o;return d>0&&(d=1/Math.sqrt(d)),u[0]=a[0]*d,u[1]=a[1]*d,u[2]=a[2]*d,u}function A9(u,a){return u[0]*a[0]+u[1]*a[1]+u[2]*a[2]}function j3(u,a,f){var c=a[0],o=a[1],d=a[2],m=f[0],h=f[1],y=f[2];return u[0]=o*y-d*h,u[1]=d*m-c*y,u[2]=c*h-o*m,u}function Rt(u,a,f){var c=f[0],o=f[1],d=f[2],m=f[3],h=a[0],y=a[1],b=a[2],N=o*b-d*y,R=d*h-c*b,w=c*y-o*h;return N=N+N,R=R+R,w=w+w,u[0]=h+m*N+o*w-d*R,u[1]=y+m*R+d*N-c*w,u[2]=b+m*w+c*R-o*N,u}var _9=E9;(function(){var u=A0();return function(a,f,c,o,d,m){var h,y;for(f||(f=3),c||(c=0),o?y=Math.min(o*f+c,a.length):y=a.length,h=c;h<y;h+=f)u[0]=a[h],u[1]=a[h+1],u[2]=a[h+2],d(u,u,m),a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2];return a}})();function z9(){var u=new yt(4);return yt!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0,u[3]=0),u}function Q1(u,a,f,c){var o=new yt(4);return o[0]=u,o[1]=a,o[2]=f,o[3]=c,o}function x9(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u[3]=a[3],u}function C9(u,a,f,c,o){return u[0]=a,u[1]=f,u[2]=c,u[3]=o,u}function R9(u,a){var f=a[0],c=a[1],o=a[2],d=a[3],m=f*f+c*c+o*o+d*d;return m>0&&(m=1/Math.sqrt(m)),u[0]=f*m,u[1]=c*m,u[2]=o*m,u[3]=d*m,u}(function(){var u=z9();return function(a,f,c,o,d,m){var h,y;for(f||(f=4),c||(c=0),o?y=Math.min(o*f+c,a.length):y=a.length,h=c;h<y;h+=f)u[0]=a[h],u[1]=a[h+1],u[2]=a[h+2],u[3]=a[h+3],d(u,u,m),a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2],a[h+3]=u[3];return a}})();function Qe(){var u=new yt(4);return yt!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u[3]=1,u}function O9(u,a,f){f=f*.5;var c=Math.sin(f);return u[0]=c*a[0],u[1]=c*a[1],u[2]=c*a[2],u[3]=Math.cos(f),u}function D9(u,a,f){f*=.5;var c=a[0],o=a[1],d=a[2],m=a[3],h=Math.sin(f),y=Math.cos(f);return u[0]=c*y+m*h,u[1]=o*y+d*h,u[2]=d*y-o*h,u[3]=m*y-c*h,u}function N9(u,a,f){f*=.5;var c=a[0],o=a[1],d=a[2],m=a[3],h=Math.sin(f),y=Math.cos(f);return u[0]=c*y-d*h,u[1]=o*y+m*h,u[2]=d*y+c*h,u[3]=m*y-o*h,u}function U9(u,a,f){f*=.5;var c=a[0],o=a[1],d=a[2],m=a[3],h=Math.sin(f),y=Math.cos(f);return u[0]=c*y+o*h,u[1]=o*y-c*h,u[2]=d*y+m*h,u[3]=m*y-d*h,u}function Q3(u,a,f,c){var o=a[0],d=a[1],m=a[2],h=a[3],y=f[0],b=f[1],N=f[2],R=f[3],w,j,L,U,B;return j=o*y+d*b+m*N+h*R,j<0&&(j=-j,y=-y,b=-b,N=-N,R=-R),1-j>s9?(w=Math.acos(j),L=Math.sin(w),U=Math.sin((1-c)*w)/L,B=Math.sin(c*w)/L):(U=1-c,B=c),u[0]=U*o+B*y,u[1]=U*d+B*b,u[2]=U*m+B*N,u[3]=U*h+B*R,u}function L9(u,a){var f=a[0]+a[4]+a[8],c;if(f>0)c=Math.sqrt(f+1),u[3]=.5*c,c=.5/c,u[0]=(a[5]-a[7])*c,u[1]=(a[6]-a[2])*c,u[2]=(a[1]-a[3])*c;else{var o=0;a[4]>a[0]&&(o=1),a[8]>a[o*3+o]&&(o=2);var d=(o+1)%3,m=(o+2)%3;c=Math.sqrt(a[o*3+o]-a[d*3+d]-a[m*3+m]+1),u[o]=.5*c,c=.5/c,u[3]=(a[d*3+m]-a[m*3+d])*c,u[d]=(a[d*3+o]+a[o*3+d])*c,u[m]=(a[m*3+o]+a[o*3+m])*c}return u}function h5(u,a,f,c){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:o9,d=Math.PI/360;a*=d,c*=d,f*=d;var m=Math.sin(a),h=Math.cos(a),y=Math.sin(f),b=Math.cos(f),N=Math.sin(c),R=Math.cos(c);switch(o){case"xyz":u[0]=m*b*R+h*y*N,u[1]=h*y*R-m*b*N,u[2]=h*b*N+m*y*R,u[3]=h*b*R-m*y*N;break;case"xzy":u[0]=m*b*R-h*y*N,u[1]=h*y*R-m*b*N,u[2]=h*b*N+m*y*R,u[3]=h*b*R+m*y*N;break;case"yxz":u[0]=m*b*R+h*y*N,u[1]=h*y*R-m*b*N,u[2]=h*b*N-m*y*R,u[3]=h*b*R+m*y*N;break;case"yzx":u[0]=m*b*R+h*y*N,u[1]=h*y*R+m*b*N,u[2]=h*b*N-m*y*R,u[3]=h*b*R-m*y*N;break;case"zxy":u[0]=m*b*R-h*y*N,u[1]=h*y*R+m*b*N,u[2]=h*b*N+m*y*R,u[3]=h*b*R-m*y*N;break;case"zyx":u[0]=m*b*R-h*y*N,u[1]=h*y*R+m*b*N,u[2]=h*b*N-m*y*R,u[3]=h*b*R+m*y*N;break;default:throw new Error("Unknown angle order "+o)}return u}var J3=x9,B9=C9,A5=R9;(function(){var u=A0(),a=Lt(1,0,0),f=Lt(0,1,0);return function(c,o,d){var m=A9(o,d);return m<-.999999?(j3(u,a,o),_9(u)<1e-6&&j3(u,f,o),M9(u,u),O9(c,u,Math.PI),c):m>.999999?(c[0]=0,c[1]=0,c[2]=0,c[3]=1,c):(j3(u,o,d),c[0]=u[0],c[1]=u[1],c[2]=u[2],c[3]=1+m,A5(c,c))}})();(function(){var u=Qe(),a=Qe();return function(f,c,o,d,m,h){return Q3(u,c,m,h),Q3(a,o,d,h),Q3(f,u,a,2*h*(1-h)),f}})();(function(){var u=v9();return function(a,f,c,o){return u[0]=c[0],u[3]=c[1],u[6]=c[2],u[1]=o[0],u[4]=o[1],u[7]=o[2],u[2]=-f[0],u[5]=-f[1],u[8]=-f[2],A5(a,L9(a,u))}})();const H9=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
const vec3 DEFAULT_COLOR = vec3(1.0, 1.0, 1.0);\r
const vec2 DEFAULT_UV = vec2(0.0, 0.0);\r
\r
uniform sampler2D texture0;\r
uniform sampler2D texture1;\r
uniform sampler2D texture2;\r
uniform sampler2D texture3;\r
uniform sampler2D texture4;\r
uniform sampler2D texture5;\r
uniform sampler2D texture6;\r
uniform sampler2D texture7;`,G9=`struct Material {\r
    vec4 ambient;\r
    vec4 diffuse;\r
    vec4 specular;\r
    float shininess;\r
};`,w9=`layout(std140) uniform CameraData {\r
    mat4 uViewMatrix;\r
    mat4 uProjectionMatrix;\r
    vec3 uCameraPosition;\r
};\r
`,q9=`struct DirectionalLight {\r
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
}`,Y9=`struct PointLight {\r
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
}`,V9=`struct SpotLight {\r
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
}`,X9={defaults:H9,Material:G9,CameraUbo:w9,DirectionalLightUbo:q9,PointLightUbo:Y9,SpotLightUbo:V9};class j9{injections=[];constructor(){this.inject(Object.values(X9).join(`
`))}inject(a){this.injections.push(a)}getProcessed(){return this.injections.join(`
`)}}class Q9{shaderPreprocessor;renderingDevice;engine;projectionMatrix=Pn();cameraPositionMatrix=Pn();cameraPosition=A0();constructor(a,f){this.engine=a,this.shaderPreprocessor=new j9,this.renderingDevice=f}clear(a){this.renderingDevice.clear(a)}updateViewportSize(){const a=this.engine.canvas.width,f=this.engine.canvas.height;this.renderingDevice.setViewPortSize(a,f)}setupProjectionMatrix(a,f,c){const o=this.renderingDevice.getViewPortSize(),d=o.width/o.height;b9(this.projectionMatrix,a*Math.PI/180,d,f,c)}setupCameraPositionMatrix(a){T5(this.cameraPositionMatrix,a)}setupCameraPosition(a){In(this.cameraPosition,a)}getProjectionMatrix(){return this.projectionMatrix}getCameraPositionMatrix(){return this.cameraPositionMatrix}getCameraPosition(){return this.cameraPosition}}class Z9{engine;currentScene=null;constructor(a){this.engine=a}setCurrentScene(a){typeof a=="function"?this.currentScene=a(this.engine):this.currentScene=a,this.currentScene.loadResources().then(()=>{this.currentScene?.onSetup()})}getCurrentScene(){return this.currentScene}update(a){this.currentScene&&this.currentScene.update(a)}}class K9{meshes=new Map;constructor(){}get(a){return this.meshes.get(a)}add(a,f){this.meshes.set(a,f)}remove(a){this.meshes.delete(a)}runGarbageCollection(){for(const a of this.meshes.values())a.refCount===0&&a.dispose()}}class J9{shaders=new Map;constructor(){}add(a,f){this.shaders.set(a,f)}remove(a){this.shaders.delete(a)}get(a){return this.shaders.get(a)}clear(){for(const a of this.shaders.values())a.dispose();this.shaders.clear()}runGarbageCollection(){for(const a of this.shaders.values())a.refCount===0&&a.dispose()}}class F9{textures=new Map;constructor(){}get(a){return this.textures.get(a)}add(a,f){this.textures.set(a,f)}remove(a){this.textures.delete(a)}runGarbageCollection(){for(const a of this.textures.values())a.refCount===0&&a.dispose()}}class W9{textureRepository;meshRepository;shaderRepository;constructor(){this.meshRepository=new K9,this.textureRepository=new F9,this.shaderRepository=new J9}runGarbageCollection(){this.meshRepository.runGarbageCollection(),this.textureRepository.runGarbageCollection(),this.shaderRepository.runGarbageCollection()}}var F3=typeof Float32Array<"u"?Float32Array:Array;function $9(){var u=new F3(3);return F3!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function Z3(u,a,f){var c=new F3(3);return c[0]=u,c[1]=a,c[2]=f,c}(function(){var u=$9();return function(a,f,c,o,d,m){var h,y;for(f||(f=3),c||(c=0),o?y=Math.min(o*f+c,a.length):y=a.length,h=c;h<y;h+=f)u[0]=a[h],u[1]=a[h+1],u[2]=a[h+2],d(u,u,m),a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2];return a}})();let k9=class{fileContents;defaultModelName;result;currentMaterial;currentGroup;smoothingGroup;currentNode;currentObjectNode;currentMesh;constructor(a,f){this._reset(),this.fileContents=a,this.defaultModelName=f||"untitled"}_reset(){const a={name:"RootNode",parent:null,children:[],meshIndices:[]};this.result={rootNode:a,meshes:[],materialLibraries:[]},this.currentMesh=this._createNewMesh(this.defaultModelName),this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(this.defaultModelName,a),this.currentNode.meshIndices.push(0),this.currentObjectNode=this.currentNode,this.currentMaterial="",this.currentGroup="",this.smoothingGroup=0}parse(){this._reset();const a=c=>{const o=c.indexOf("#");return o>-1?c.substring(0,o):c},f=this.fileContents.split(`
`);for(let c=0;c<f.length;c+=1){const d=a(f[c]).replace(/\s+/g," ").trim().split(" ");switch(d[0].toLowerCase()){case"o":this._parseObject(d);break;case"g":this._parseGroup(d);break;case"v":this._parseVertexCoords(d);break;case"vt":this._parseTextureCoords(d);break;case"vn":this._parseVertexNormal(d);break;case"l":this._parseLine(d);break;case"s":this._parseSmoothShadingStatement(d);break;case"f":this._parsePolygon(d);break;case"mtllib":this._parseMtlLib(d);break;case"usemtl":this._parseUseMtl(d);break}}return this.result}_createNewMesh(a){return{name:a,vertices:[],textureCoords:[],vertexNormals:[],faces:[],lines:[]}}_createNewNode(a,f){const c={name:a,parent:f,children:[],meshIndices:[]};return f.children.push(c),c}_parseObject(a){const f=a.length>=2?a[1]:this.defaultModelName;if(this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0){this.currentMesh=this._createNewMesh(f);const c=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentObjectNode=this._createNewNode(f,this.result.rootNode),this.currentObjectNode.meshIndices.push(c),this.currentNode=this.currentObjectNode}else this.currentMesh.name=f,this.currentNode.name=f,this.currentObjectNode.name=f;this.currentGroup="",this.smoothingGroup=0}_parseGroup(a){if(a.length!=2)throw new Error("Group statements must have exactly 1 argument (eg. g group_1)");const f=a[1];if(this.currentGroup!==f){const c=this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0,o=this.currentNode===this.currentObjectNode;if(c||o)if(c){this.currentMesh=this._createNewMesh(f);const d=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(d)}else this.currentMesh.name=f,o?(this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(0),this.currentObjectNode.meshIndices=[]):this.currentNode.name=f;else this.currentMesh.name=f,this.currentNode.name=f;this.currentGroup=f}}_parseVertexCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,o=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertices.push(Z3(f,c,o))}_parseTextureCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,o=a.length>=4?parseFloat(a[3]):0;this.currentMesh.textureCoords.push(Z3(f,1-c,o))}_parseVertexNormal(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,o=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertexNormals.push(Z3(f,c,o))}_parseLine(a){const f=a.length-1;if(f<2)throw new Error("Line statement has less than 2 vertices");const c=[];for(let o=0;o<f;o+=1){const m=a[o+1].split("/");if(m.length<1||m.length>2)throw new Error("Too many values (separated by /) for a single vertex");let h=0,y=0;h=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),c.push({vertexIndex:h,textureCoordsIndex:y})}this.currentMesh.lines.push(c)}_parsePolygon(a){const f=a.length-1;if(f<3)throw new Error("Face statement has less than 3 vertices");const c={material:this.currentMaterial,group:this.currentGroup,smoothingGroup:this.smoothingGroup,vertices:[]};for(let o=0;o<f;o+=1){const m=a[o+1].split("/");if(m.length<1||m.length>3)throw new Error("Too many values (separated by /) for a single vertex");let h=0,y=0,b=0;if(h=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),m.length>2&&(b=parseInt(m[2])),h==0)throw"Faces uses invalid vertex index of 0";h<0&&(h=this.currentMesh.vertices.length+1+h),c.vertices.push({vertexIndex:h,textureCoordsIndex:y,vertexNormalIndex:b})}this.currentMesh.faces.push(c)}_parseMtlLib(a){a.length>=2&&this.result.materialLibraries.push(a[1])}_parseUseMtl(a){a.length>=2&&(this.currentMaterial=a[1])}_parseSmoothShadingStatement(a){if(a.length!=2)throw"Smoothing group statements must have exactly 1 argument (eg. s <number|off>)";const f=a[1].toLowerCase()=="off"?0:parseInt(a[1]);this.smoothingGroup=f}};const I9=`# Sample OBJ file with multiple groups\r
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
`;class P9{renderer;sceneManager;inputSystem;canvas;repositories;gameLoop;constructor(a,f){this.renderer=new Q9(this,f),this.sceneManager=new Z9(this),this.gameLoop=new f9(this,this.update.bind(this)),this.inputSystem=new c9(this),this.canvas=a.options.canvas,this.repositories=new W9;const c=new k9(I9).parse();console.log("Parsed OBJ:",c)}start(){this.gameLoop.start()}stop(){this.gameLoop.stop()}get isRunning(){return this.gameLoop.isRunning}update(a){this.inputSystem.update(),this.renderer.clear([0,0,0,1]),this.sceneManager.update(a)}}class t7{engine;constructor(){this.engine=null}setEngine(a){this.engine=a}get Renderer(){return this.engine.renderer}get SceneManager(){return this.engine.sceneManager}get InputSystem(){return this.engine.inputSystem}get ActiveEngine(){return this.engine}get Repositories(){return this.engine.repositories}}const Bt=new t7,x0=new Proxy({},{get(u,a){const f=Bt.Renderer[a];return typeof f=="function"?f.bind(Bt.Renderer):f}}),n7=new Proxy({},{get(u,a){const f=Bt.SceneManager[a];return typeof f=="function"?f.bind(Bt.SceneManager):f}});new Proxy({},{get(u,a){const f=Bt.ActiveEngine[a];return typeof f=="function"?f.bind(Bt.ActiveEngine):f}});const Yt=new Proxy({},{get(u,a){const f=Bt.InputSystem[a];return typeof f=="function"?f.bind(Bt.InputSystem):f}}),un=new Proxy({},{get(u,a){const f=Bt.Repositories[a];return typeof f=="function"?f.bind(Bt.Repositories):f}}),e7=u=>Bt.setEngine(u);var an=(u=>(u[u.FLOAT32=0]="FLOAT32",u[u.FLOAT32_VEC2=1]="FLOAT32_VEC2",u[u.FLOAT32_VEC3=2]="FLOAT32_VEC3",u[u.FLOAT32_VEC4=3]="FLOAT32_VEC4",u[u.UINT8=4]="UINT8",u))(an||{}),je=(u=>(u[u.STATIC=0]="STATIC",u[u.DYNAMIC=1]="DYNAMIC",u[u.STREAM=2]="STREAM",u))(je||{}),or=(u=>(u[u.VERTEX=0]="VERTEX",u[u.INDEX=1]="INDEX",u))(or||{}),$0=(u=>(u[u.FLOAT=0]="FLOAT",u[u.FLOAT_VEC2=1]="FLOAT_VEC2",u[u.FLOAT_VEC3=2]="FLOAT_VEC3",u[u.FLOAT_VEC4=3]="FLOAT_VEC4",u[u.FLOAT_MAT4=4]="FLOAT_MAT4",u[u.SAMPLER_2D=5]="SAMPLER_2D",u[u.BOOL=6]="BOOL",u))($0||{});class d5{nextId=1;locationCache=new Map;nameCache=new Map;getLocation(a){const f=this.nameCache.get(a);return f&&this.locationCache.get(f)||null}getLocationId(a){const f=this.nameCache.get(a);return f||null}getLocationById(a){return this.locationCache.get(a)||null}setLocation(a,f){const c=this.nextId++;return this.nameCache.set(a,c),this.locationCache.set(c,f),c}}class r7{gl;programs=new Map;handle=1;uniformMapper;uniformsCache=new Map;constructor(a){this.gl=a,this.uniformMapper={[$0.FLOAT]:this.gl.uniform1f.bind(this.gl),[$0.FLOAT_VEC2]:this.gl.uniform2fv.bind(this.gl),[$0.FLOAT_VEC3]:this.gl.uniform3fv.bind(this.gl),[$0.FLOAT_VEC4]:this.gl.uniform4fv.bind(this.gl),[$0.FLOAT_MAT4]:this.gl.uniformMatrix4fv.bind(this.gl),[$0.SAMPLER_2D]:this.gl.uniform1i.bind(this.gl),[$0.BOOL]:this.gl.uniform1i.bind(this.gl)}}create(a,f){const c=this.gl.createShader(this.gl.VERTEX_SHADER);if(this.gl.shaderSource(c,a),this.gl.compileShader(c),!this.gl.getShaderParameter(c,this.gl.COMPILE_STATUS)){const h=this.gl.getShaderInfoLog(c);throw this.gl.deleteShader(c),new Error(`Could not compile vertex shader:
`+h)}const o=this.gl.createShader(this.gl.FRAGMENT_SHADER);if(this.gl.shaderSource(o,f),this.gl.compileShader(o),!this.gl.getShaderParameter(o,this.gl.COMPILE_STATUS)){const h=this.gl.getShaderInfoLog(o);throw this.gl.deleteShader(o),new Error(`Could not compile fragment shader:
`+h)}const d=this.gl.createProgram();if(this.gl.attachShader(d,c),this.gl.attachShader(d,o),this.gl.linkProgram(d),!this.gl.getProgramParameter(d,this.gl.LINK_STATUS)){const h=this.gl.getProgramInfoLog(d);throw this.gl.deleteProgram(d),new Error(`Could not link shader program:
`+h)}this.gl.deleteShader(c),this.gl.deleteShader(o);const m=this.handle++;return this.programs.set(m,d),m}destroy(a){const f=this.programs.get(a);f&&(this.gl.deleteProgram(f),this.programs.delete(a))}use(a){const f=this.programs.get(a);f&&this.gl.useProgram(f)}setUniform(a,f,c,o){const d=this.programs.get(a);if(!d)return;let m=this.uniformsCache.get(a);m||(m=new d5,this.uniformsCache.set(a,m));let h=m.getLocation(f);h===null&&(h=this.gl.getUniformLocation(d,f),m.setLocation(f,h));const y=this.uniformMapper[c];if(!y)throw new Error(`Unsupported uniform type: ${c}`);c===$0.FLOAT_MAT4?y(h,!1,o):y(h,o)}setUniformAtLocation(a,f,c,o){if(!this.programs.get(a))return;const m=this.uniformsCache.get(a);if(!m)return;const h=m.getLocationById(f);if(h===null)return;const y=this.uniformMapper[c];if(!y)throw new Error(`Unsupported uniform type: ${c}`);c===$0.FLOAT_MAT4?y(h,!1,o):y(h,o)}getUniformLocation(a,f){const c=this.programs.get(a);if(!c)return console.warn(`[WebGl2Shader] Program not found for shader ${a}`),null;let o=this.uniformsCache.get(a);o||(o=new d5,this.uniformsCache.set(a,o));let d=o.getLocationId(f);if(d===null){this.gl.useProgram(c);const m=this.gl.getUniformLocation(c,f);return m===null?null:o.setLocation(f,m)}return d}bindUBO(a,f,c){const o=this.programs.get(a);if(!o)return;const d=this.gl.getUniformBlockIndex(o,f);if(d===this.gl.INVALID_INDEX){console.warn(`[WebGl2Shader] Uniform block "${f}" not found in shader ${a}`);return}this.gl.uniformBlockBinding(o,d,c)}}const l7=0;class k3{refCount=0;addRef(){this.refCount++}removeRef(){this.refCount--,this.refCount<0&&(this.refCount=0)}}var Ze=(u=>(u[u.LINEAR=0]="LINEAR",u[u.NEAREST=1]="NEAREST",u))(Ze||{}),X1=(u=>(u[u.REPEAT=0]="REPEAT",u[u.CLAMP_TO_EDGE=1]="CLAMP_TO_EDGE",u[u.MIRRORED_REPEAT=2]="MIRRORED_REPEAT",u))(X1||{}),vr=(u=>(u[u.RGB=0]="RGB",u[u.RGBA=1]="RGBA",u))(vr||{}),_5=(u=>(u[u.TEXTURE_2D=0]="TEXTURE_2D",u))(_5||{});class I3 extends k3{img;textureHandle=l7;options;id;constructor(a,f,c){super(),this.id=a,this.img=f,this.options=c,this.textureHandle=x0.renderingDevice.texture.create(this.img,this.options)}getId(){return this.id}setId(a){this.id=a}static create(a,f,c){let o=un.textureRepository.get(a);return o||(o=new I3(a,f,c),un.textureRepository.add(a,o)),o}getHandle(){return this.textureHandle}dispose(){this.removeRef(),this.refCount===0&&(x0.renderingDevice.texture.destroy(this.textureHandle),un.textureRepository.remove(this.id))}}const m5={[vr.RGB]:WebGL2RenderingContext.RGB,[vr.RGBA]:WebGL2RenderingContext.RGBA},a7={[Ze.LINEAR]:WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR,[Ze.NEAREST]:WebGL2RenderingContext.NEAREST_MIPMAP_NEAREST},i7={[Ze.LINEAR]:WebGL2RenderingContext.LINEAR,[Ze.NEAREST]:WebGL2RenderingContext.NEAREST},g5={[X1.REPEAT]:WebGL2RenderingContext.REPEAT,[X1.CLAMP_TO_EDGE]:WebGL2RenderingContext.CLAMP_TO_EDGE,[X1.MIRRORED_REPEAT]:WebGL2RenderingContext.MIRRORED_REPEAT};class u7{constructor(a){this.gl=a,this.whitePixelTexture=this.gl.createTexture(),this.gl.bindTexture(this.gl.TEXTURE_2D,this.whitePixelTexture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([255,255,255,255])),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}nextHandle=1;textures=new Map;whitePixelTexture;destroy(a){const f=this.textures.get(a);f?(this.gl.deleteTexture(f),this.textures.delete(a)):console.warn(`Attempted to destroy non-existent texture with handle ${a}`)}use(a,f){const c=this.textures.get(a);c?(this.gl.activeTexture(this.gl.TEXTURE0+f),this.gl.bindTexture(this.gl.TEXTURE_2D,c)):console.warn(`Attempted to use non-existent texture with handle ${a}`)}unbind(){this.gl.bindTexture(this.gl.TEXTURE_2D,this.whitePixelTexture)}create(a,f){const c=this.nextHandle++,o=this.gl.createTexture();return this.textures.set(c,o),this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.texImage2D(this.gl.TEXTURE_2D,0,m5[f.format],f.width,f.height,0,m5[f.format],this.gl.UNSIGNED_BYTE,a),this.bindOptionsToTexture(c,f),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.bindTexture(this.gl.TEXTURE_2D,null),c}bindOptionsToTexture(a,f){const c=this.textures.get(a);if(!c){console.warn(`Attempted to bind options to non-existent texture with handle ${a}`);return}this.gl.bindTexture(this.gl.TEXTURE_2D,c),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,a7[f.filter]),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,i7[f.filter]),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,g5[f.wrap]),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,g5[f.wrap])}}const y5={[je.STATIC]:WebGL2RenderingContext.STATIC_DRAW,[je.DYNAMIC]:WebGL2RenderingContext.DYNAMIC_DRAW,[je.STREAM]:WebGL2RenderingContext.STREAM_DRAW},f7={[an.FLOAT32]:1,[an.FLOAT32_VEC2]:2,[an.FLOAT32_VEC3]:3,[an.FLOAT32_VEC4]:4,[an.UINT8]:1};class c7{nextHandle=1;buffers=new Map;vertexArrays=new Map;uniformBuffers=new Map;gl;constructor(a){this.gl=a}getVertexArray(a){return this.vertexArrays.get(a)}vertexArrayCreate(a,f,c){const o=this.gl.createVertexArray(),d=this.nextHandle++;if(this.gl.bindVertexArray(o),a.forEach(m=>{const h=this.buffers.get(m);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,h),f.forEach(y=>{this.gl.enableVertexAttribArray(y.location);let b=f7[y.format];this.gl.vertexAttribPointer(y.location,b,this.gl.FLOAT,!1,y.stride||0,y.offset)})}),c!==void 0){const m=this.buffers.get(c);this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,m),console.log("WebGl2Buffer.vertexArrayCreate - Bound IBO to VAO:",{vaoHandle:d,iboHandle:c,iboExists:!!m})}return this.gl.bindVertexArray(null),this.vertexArrays.set(d,o),d}vertexArrayDestroy(a){const f=this.vertexArrays.get(a);if(!f){console.warn(`Attempted to destroy non-existent vertex array with handle ${a}`);return}this.gl.deleteVertexArray(f),this.vertexArrays.delete(a)}create(a,f,c=or.VERTEX,o=je.STATIC){const d=this.gl.createBuffer(),m=this.nextHandle++,h=c===or.INDEX?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER;return this.gl.bindBuffer(h,d),this.gl.bufferData(h,f,y5[o]),this.buffers.set(m,d),m}getBuffer(a){return this.buffers.get(a)}destroy(a){const f=this.buffers.get(a);if(f===void 0){console.warn(`Attempted to destroy non-existent buffer with handle ${a}`);return}this.gl.deleteBuffer(f),this.buffers.delete(a)}update(a,f,c){const o=this.buffers.get(a);if(!o){console.warn(`Attempted to update non-existent buffer with handle ${a}`);return}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,o),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,f,c)}uniformBufferCreate(a,f=je.DYNAMIC){const c=this.gl.createBuffer();if(!c)throw new Error("Failed to create uniform buffer");const o=this.nextHandle++;return this.uniformBuffers.set(o,c),this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,c),this.gl.bufferData(this.gl.UNIFORM_BUFFER,a,y5[f]),this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,null),o}uniformBufferUpdate(a,f,c){const o=this.uniformBuffers.get(a);if(!o){console.warn(`Attempted to update non-existent UBO with handle ${a}`);return}this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,o),this.gl.bufferSubData(this.gl.UNIFORM_BUFFER,f,c),this.gl.bindBuffer(this.gl.UNIFORM_BUFFER,null)}uniformBufferDestroy(a){const f=this.uniformBuffers.get(a);if(!f){console.warn(`Attempted to destroy non-existent UBO with handle ${a}`);return}this.gl.deleteBuffer(f),this.uniformBuffers.delete(a)}uniformBufferBindToPoint(a,f){const c=this.uniformBuffers.get(a);if(!c){console.warn(`Attempted to bind non-existent UBO with handle ${a}`);return}this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER,f,c)}}class dr{UBO_SIZE=-1;BLOCK_NAME="";ubo=null;uboHandle=null;uboBindingPoint=0;dataBuffer=new Float32Array(0);isDirty=!1;initialize(a){const f=a.createBuffer();if(!f){console.error("Failed to create camera UBO");return}this.ubo=f,a.bindBuffer(a.UNIFORM_BUFFER,f),a.bufferData(a.UNIFORM_BUFFER,this.UBO_SIZE,a.DYNAMIC_DRAW),a.bindBufferBase(a.UNIFORM_BUFFER,this.uboBindingPoint,f),a.bindBuffer(a.UNIFORM_BUFFER,null)}updateUBO(a){this.ubo&&this.isDirty&&(a.bindBuffer(a.UNIFORM_BUFFER,this.ubo),a.bufferSubData(a.UNIFORM_BUFFER,0,this.dataBuffer),a.bindBuffer(a.UNIFORM_BUFFER,null),this.isDirty=!1)}}class s7 extends dr{UBO_SIZE=144;BLOCK_NAME="CameraData";constructor(){super(),this.dataBuffer=new Float32Array(36)}setCameraDataBuffer(a){this.dataBuffer=a,this.isDirty=!0}setViewMatrix(a){this.dataBuffer.set(a,0),this.isDirty=!0}setProjectionMatrix(a){this.dataBuffer.set(a,16),this.isDirty=!0}setCameraPosition(a){this.dataBuffer[32]=a[0],this.dataBuffer[33]=a[1],this.dataBuffer[34]=a[2],this.isDirty=!0}reset(){}}class o7 extends dr{UBO_SIZE=32;BLOCK_NAME="DirectionalLightUBO";constructor(){super(),this.dataBuffer=new Float32Array(this.UBO_SIZE/4)}setDirection(a){this.dataBuffer[0]=a[0],this.dataBuffer[1]=a[1],this.dataBuffer[2]=a[2],this.isDirty=!0}setColor(a){this.dataBuffer[4]=a[0],this.dataBuffer[5]=a[1],this.dataBuffer[6]=a[2],this.isDirty=!0}setIntensity(a){this.dataBuffer[7]=a,this.isDirty=!0}reset(){}}class v7 extends dr{UBO_SIZE=1040;LIGHT_COUNT=32;BLOCK_NAME="PointLightsUBO";currentLightIndex=0;intView;constructor(){super(),this.dataBuffer=new Float32Array(this.UBO_SIZE/4),this.intView=new Int32Array(this.dataBuffer.buffer)}addPointLight(a,f,c,o){if(this.currentLightIndex>=this.LIGHT_COUNT){console.warn("Maximum number of point lights reached in UBO");return}const d=this.currentLightIndex*8;this.dataBuffer[d+0]=a[0],this.dataBuffer[d+1]=a[1],this.dataBuffer[d+2]=a[2],this.dataBuffer[d+3]=o,this.dataBuffer[d+4]=f[0],this.dataBuffer[d+5]=f[1],this.dataBuffer[d+6]=f[2],this.dataBuffer[d+7]=c,this.currentLightIndex++,this.intView[256]=this.currentLightIndex,this.isDirty=!0}reset(){this.currentLightIndex>0&&(this.currentLightIndex=0,this.intView[256]=0,this.isDirty=!0)}}class h7 extends dr{UBO_SIZE=2064;LIGHT_COUNT=32;BLOCK_NAME="SpotLightsUBO";currentLightIndex=0;intView;constructor(){super(),this.dataBuffer=new Float32Array(this.UBO_SIZE/4),this.intView=new Int32Array(this.dataBuffer.buffer)}addSpotLight(a,f,c,o,d,m){if(this.currentLightIndex>=this.LIGHT_COUNT){console.warn("Maximum number of spot lights reached in UBO");return}const h=this.currentLightIndex*16,y=Math.cos(m),b=Math.cos(m*.8);this.dataBuffer[h+0]=a[0],this.dataBuffer[h+1]=a[1],this.dataBuffer[h+2]=a[2],this.dataBuffer[h+3]=d,this.dataBuffer[h+4]=f[0],this.dataBuffer[h+5]=f[1],this.dataBuffer[h+6]=f[2],this.dataBuffer[h+7]=y,this.dataBuffer[h+8]=c[0],this.dataBuffer[h+9]=c[1],this.dataBuffer[h+10]=c[2],this.dataBuffer[h+11]=b,this.dataBuffer[h+12]=o,this.currentLightIndex++,this.intView[512]=this.currentLightIndex,this.isDirty=!0}reset(){this.currentLightIndex>0&&(this.currentLightIndex=0,this.intView[512]=0,this.isDirty=!0)}}class d7{gl;camera=new s7;directionalLight=new o7;pointLight=new v7;spotLight=new h7;ubos;constructor(a){this.gl=a,this.ubos=[this.camera,this.directionalLight,this.pointLight,this.spotLight];let f=0;this.camera.uboBindingPoint=f++,this.directionalLight.uboBindingPoint=f++,this.pointLight.uboBindingPoint=f++,this.spotLight.uboBindingPoint=f++}initializeUbos(){const a=this.ubos,f=a.length;for(let c=0;c<f;c++)a[c].initialize(this.gl)}updateUbos(){const a=this.ubos,f=a.length;for(let c=0;c<f;c++)a[c].updateUBO(this.gl)}getAllUbos(){return this.ubos}}class m7{renderer=x0;uboManager;shader;drawing;commands=[];sceneCommands=[];lightCommands=[];commandCount=0;sceneCommandCount=0;lightCommandCount=0;lastShaderHandle=null;constructor(a,f,c,o){this.uboManager=f,this.shader=c,this.drawing=o}queueCommands(a){const f=a.length;for(let c=0;c<f;c++)this.commands[this.commandCount++]=a[c]}queueSceneCommands(a){const f=a.length;for(let c=0;c<f;c++)this.sceneCommands[this.sceneCommandCount++]=a[c]}queueLightCommands(a){const f=a.length;for(let c=0;c<f;c++)this.lightCommands[this.lightCommandCount++]=a[c]}flushCommands(){this.flushSceneCommands(),this.flushLightCommands(),this.uboManager.updateUbos();for(let a=0;a<this.commandCount;a++)this.executeCommand(this.commands[a]);this.commandCount=0,this.sceneCommandCount=0,this.lightCommandCount=0}flushSceneCommands(){for(let a=0;a<this.sceneCommandCount;a++){const f=this.sceneCommands[a];switch(f.type){case"setViewMatrix":this.renderer.setupCameraPositionMatrix(f.matrix),this.uboManager.camera.setViewMatrix(f.matrix);break;case"setProjectionMatrix":this.renderer.setupProjectionMatrix(f.fov,f.near,f.far),this.uboManager.camera.setProjectionMatrix(x0.getProjectionMatrix());break;case"setCameraPosition":x0.setupCameraPosition(f.position),this.uboManager.camera.setCameraPosition(f.position);break}}}flushLightCommands(){this.uboManager.pointLight.reset(),this.uboManager.spotLight.reset();for(let a=0;a<this.lightCommandCount;a++){const f=this.lightCommands[a];switch(f.type){case"DirectionalLight":this.uboManager.directionalLight.setColor(f.color),this.uboManager.directionalLight.setDirection(f.direction),this.uboManager.directionalLight.setIntensity(f.intensity);break;case"PointLight":this.uboManager.pointLight.addPointLight(f.position,f.color,f.intensity,f.range);break;case"SpotLight":this.uboManager.spotLight.addSpotLight(f.position,f.direction,f.color,f.intensity,f.range,f.angle);break}}}setupShaderForCommand(a){if(this.lastShaderHandle!==a.shader.program){this.lastShaderHandle=a.shader.program,this.shader.use(a.shader.program);const f=this.uboManager.getAllUbos(),c=f.length;for(let o=0;o<c;o++){const d=f[o];this.shader.bindUBO(a.shader.program,d.BLOCK_NAME,d.uboBindingPoint)}}}executeCommand(a){this.setupShaderForCommand(a);const f=a.uniforms,c=f.length;for(let m=0;m<c;m++){const h=f[m];this.shader.setUniform(a.shader.program,h.name,h.type,h.value)}const o=a.textures,d=o.length;if(d>0)for(let m=0;m<d;m++){const h=o[m];x0.renderingDevice.texture.use(h.textureHandle,h.textureUnit),this.shader.setUniform(a.shader.program,"texture"+h.textureUnit,$0.SAMPLER_2D,h.textureUnit)}else x0.renderingDevice.texture.unbind();this.drawing.drawIndexed(a.mesh.vaoHandle,a.mesh.indices.length)}}class g7{gl;buffer;constructor(a,f){this.gl=a,this.buffer=f}drawIndexed(a,f){const c=this.buffer.getVertexArray(a);if(!c){console.warn(`Attempted to draw non-existent vertex array with handle ${a}`);return}this.gl.bindVertexArray(c),this.gl.drawElements(this.gl.TRIANGLES,f,this.gl.UNSIGNED_SHORT,0)}draw(a,f){const c=this.buffer.getVertexArray(a);if(!c){console.warn(`Attempted to draw non-existent vertex array with handle ${a}`);return}this.gl.bindVertexArray(c),this.gl.drawArrays(this.gl.TRIANGLES,0,f)}clear(a){this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.gl.clearColor(a[0],a[1],a[2],a[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)}}class y7{shader;texture;buffer;uboManager;commands;drawing;gl;constructor(a){this.gl=a,this.shader=new r7(this.gl),this.texture=new u7(this.gl),this.buffer=new c7(this.gl),this.uboManager=new d7(this.gl),this.drawing=new g7(this.gl,this.buffer),this.commands=new m7(this.gl,this.uboManager,this.shader,this.drawing),this.uboManager.initializeUbos()}queueCommands(a){this.commands.queueCommands(a)}queueSceneCommands(a){this.commands.queueSceneCommands(a)}queueLightCommands(a){this.commands.queueLightCommands(a)}flushCommands(){this.commands.flushCommands()}drawIndexed(a,f){this.drawing.drawIndexed(a,f)}draw(a,f){this.drawing.draw(a,f)}clear(a){this.drawing.clear(a)}setViewPortSize(a,f){this.gl.viewport(0,0,a,f)}getViewPortSize(){const a=this.gl.drawingBufferWidth,f=this.gl.drawingBufferHeight;return{width:a,height:f}}}class p7{options;gl;engine;constructor(a){if(this.options=a,this.gl=this.options.canvas.getContext("webgl2"),new ResizeObserver(o=>{for(let d of o){const m=d.contentRect.width,h=d.contentRect.height;this.options.canvas.width=m,this.options.canvas.height=h,this.engine.renderer.updateViewportSize()}}).observe(this.options.canvas),!this.gl)throw new Error("WebGL2 is not supported in this browser.");const c=new y7(this.gl);this.engine=new P9(this,c),e7(this.engine),this.engine.repositories.shaderRepository.clear(),this.engine.start()}destroy(){this.engine.stop()}}const S7=u=>{const{vertices:a,normals:f,uvs:c}=u,o=a.length/3,d=32,m=new Float32Array(o*8);for(let h=0;h<o;h++){const y=h*8;m[y+0]=a[h*3+0],m[y+1]=a[h*3+1],m[y+2]=a[h*3+2],m[y+3]=f[h*3+0],m[y+4]=f[h*3+1],m[y+5]=f[h*3+2],m[y+6]=c[h*2+0],m[y+7]=c[h*2+1]}return{buffer:m,stride:d,positionOffset:0,normalOffset:12,uvOffset:24}};class mr extends k3{vertices;normals;uvs;indices;id;vboHandle=null;iboHandle=null;vaoHandle=null;static create(a,f,c,o,d){const m=un.meshRepository.get(a);if(m)return m.addRef(),m;const h=new mr(a,f,c,o,d);return un.meshRepository.add(a,h),h}constructor(a,f,c,o,d){super(),this.id=a,this.vertices=f,this.normals=c,this.uvs=o,this.indices=d,this.bind(x0.renderingDevice)}getId(){return this.id}bind(a){if(this.vaoHandle!==null)return;const f=this.getVBOData();this.vboHandle=a.buffer.create(f.buffer.length,f.buffer),this.iboHandle=a.buffer.create(this.indices.length,this.indices,or.INDEX);const c=32;this.vaoHandle=a.buffer.vertexArrayCreate([this.vboHandle],[{location:0,format:an.FLOAT32_VEC3,offset:0,stride:c},{location:1,format:an.FLOAT32_VEC3,offset:12,stride:c},{location:2,format:an.FLOAT32_VEC2,offset:24,stride:c}],this.iboHandle)}draw(a){a.drawIndexed(this.vaoHandle,this.indices.length)}unbind(a){}getVBOData(){return S7(this)}dispose(){if(this.removeRef(),this.refCount===0){un.meshRepository.remove(this.id);const a=x0.renderingDevice;a.buffer.destroy(this.vboHandle),a.buffer.destroy(this.iboHandle),a.buffer.vertexArrayDestroy(this.vaoHandle)}}}const b7=new Float32Array([-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5]),E7=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]),T7=new Float32Array([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),M7=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);class A7{_position=A0();_rotation=Qe();_scale=Lt(1,1,1);_color=Q1(1,1,1,1);mesh;transform=Pn();constructor(){this.mesh=mr.create("cube",b7,E7,T7,M7),this.updateTransform(),this._color=Q1(Math.random(),Math.random(),Math.random(),1)}get position(){return this._position}set position(a){In(this._position,a),this.updateTransform()}get rotation(){return this._rotation}set rotation(a){J3(this._rotation,a),this.updateTransform()}get scale(){return this._scale}set scale(a){In(this._scale,a),this.updateTransform()}get color(){return this._color}updateTransform(){M5(this.transform,this._rotation,this._position,this._scale)}}class P3{name="";children=[];parent=null;isActive=!0;update(a){}onDestroy(){}onSetup(){}onDraw(){}setParent(a){this.parent&&this.parent.removeChild(this),this.parent=a}addChild(a){this.children.push(a),a.parent=this}removeChild(a){if(typeof a=="number"){const c=a;if(c>=0&&c<this.children.length){const o=this.children.splice(c,1)[0];o.parent=null}return}const f=this.children.indexOf(a);f!==-1&&(this.children.splice(f,1),a.parent=null)}getChildByName(a){for(const f of this.children)if(f.name===a)return f;return null}}const _7=(u,a=[])=>{const f=[],c=[];for(c.push(u);c.length>0;){const o=c.shift();f.push(o);for(const d of o.children)c.push(d)}for(;f.length>0;){const o=f.pop();a.push(o)}return a},p5=(u,a)=>{const f=[],c=[];for(c.push(u);c.length>0;){const o=c.shift();f.push(o);for(const d of o.children)c.push(d)}for(;f.length>0;){const o=f.pop();a(o)}};class z7{engine;rootNode;id;flatNodes=new Array(512);constructor(a){this.engine=a,this.rootNode=new P3,this.rootNode.name="root",this.id=Math.random().toString(36).substr(2,9)}setupScene(){this.setupNodes(this.rootNode)}setupNodes(a){p5(a,f=>{f.onSetup()})}update(a){this.flatNodes.length=0,_7(this.rootNode,this.flatNodes);for(let f=0;f<this.flatNodes.length;f++)this.flatNodes[f].update(a);for(let f=0;f<this.flatNodes.length;f++)this.flatNodes[f].onDraw();this.engine.renderer.renderingDevice.flushCommands()}onSetup(){this.setupNodes(this.rootNode)}onDestroy(){p5(this.rootNode,a=>{a.onDestroy()})}printSceneGraph(){const a=[],f=o=>"  ".repeat(o),c=(o,d)=>{a.push(`${f(d)}- ${o.name}`);for(const m of o.children)c(m,d+1)};c(this.rootNode,0),console.log(a.join(`
`))}async loadResources(){}}function S5(u){let a=0;for(let f=0;f<u.length;f++){const c=u.charCodeAt(f);a=(a<<5)-a+c,a|=0}return a}class Z1 extends k3{program;uniformLocationCache=new Map;id;static create(a,f){const c=S5(a)+"_"+S5(f);let o=un.shaderRepository.get(c);return o||(o=new Z1(c,a,f),un.shaderRepository.add(c,o)),o.addRef(),o}getId(){return this.id}dispose(){this.removeRef(),this.refCount===0&&(x0.renderingDevice.shader.destroy(this.program),un.shaderRepository.remove(this.id))}constructor(a,f,c){super(),this.id=a;const o=x0.shaderPreprocessor.getProcessed();this.program=x0.renderingDevice.shader.create(o+f,o+c)}use(a){a.shader.use(this.program)}getUniformLocation(a){if(this.uniformLocationCache.has(a))return this.uniformLocationCache.get(a);const c=x0.renderingDevice.shader.getUniformLocation(this.program,a);return c!==null&&this.uniformLocationCache.set(a,c),c}setUniformMatrix4fv(a,f){const c=this.getUniformLocation(a);c!==null&&x0.renderingDevice.shader.setUniformAtLocation(this.program,c,$0.FLOAT_MAT4,f)}setUniform4fv(a,f){const c=this.getUniformLocation(a);c!==null&&x0.renderingDevice.shader.setUniformAtLocation(this.program,c,$0.FLOAT_VEC4,f)}setUniform3fv(a,f){const c=this.getUniformLocation(a);c!==null&&x0.renderingDevice.shader.setUniformAtLocation(this.program,c,$0.FLOAT_VEC3,f)}}const x7=`in vec3 aPosition;\r
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
`,C7=`\r
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
  vec3 texColor = texture(texture0, vTexCoord).rgb;\r
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
  vec3 finalColor = (lightColor + ambient) * texColor * uColor.rgb;\r
\r
  fragColor = vec4(finalColor, uColor.a);\r
}\r
`,R7=`\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main() {\r
    fragColor = uColor;\r
}\r
`,Ye={vertexSource:x7,fragmentSource:C7,unliFragmentSource:R7};class q0 extends P3{_localTransform=Pn();_worldTransform=Pn();_position=A0();_rotation=Qe();_scale=Lt(1,1,1);_localTransformDirty=!0;_worldTransformDirty=!0;static FORWARD=Lt(0,0,-1);static BACKWARD=Lt(0,0,1);static RIGHT=Lt(1,0,0);static LEFT=Lt(-1,0,0);static UP=Lt(0,1,0);static DOWN=Lt(0,-1,0);get localTransform(){return this._localTransformDirty&&this._updateLocalTransform(),this._localTransform}get worldTransform(){return this._worldTransformDirty&&this._updateWorldTransform(),this._worldTransform}get position(){return this._position}set position(a){In(this._position,a),this._markTransformDirty()}setPosition(a,f,c){typeof a=="number"&&f!==void 0&&c!==void 0?X3(this._position,a,f,c):In(this._position,a),this._markTransformDirty()}get rotation(){return this._rotation}set rotation(a){J3(this._rotation,a),this._markTransformDirty()}setRotation(a,f,c,o){typeof a=="number"&&f!==void 0&&c!==void 0&&o!==void 0?B9(this._rotation,a,f,c,o):J3(this._rotation,a),this._markTransformDirty()}setRotationFromEuler(a,f,c){if(typeof a=="number"&&f!==void 0&&c!==void 0)h5(this._rotation,a,f,c);else{const o=a;h5(this._rotation,o[0],o[1],o[2])}this._markTransformDirty()}rotateX(a){D9(this._rotation,this._rotation,a),this._markTransformDirty()}rotateY(a){N9(this._rotation,this._rotation,a),this._markTransformDirty()}rotateZ(a){U9(this._rotation,this._rotation,a),this._markTransformDirty()}get scale(){return this._scale}set scale(a){In(this._scale,a),this._markTransformDirty()}setScale(a,f,c){typeof a=="number"&&f!==void 0&&c!==void 0?X3(this._scale,a,f,c):In(this._scale,a),this._markTransformDirty()}setUniformScale(a){X3(this._scale,a,a,a),this._markTransformDirty()}translate(a){T9(this._position,this._position,a),this._markTransformDirty()}_updateLocalTransform(){M5(this._localTransform,this._rotation,this._position,this._scale),this._localTransformDirty=!1}_updateWorldTransform(){this._localTransformDirty&&this._updateLocalTransform(),this.parent&&this.parent instanceof q0?d9(this._worldTransform,this.parent.worldTransform,this._localTransform):T5(this._worldTransform,this._localTransform),this._worldTransformDirty=!1}_markTransformDirty(){this._localTransformDirty=!0,this._worldTransformDirty=!0,this._markChildrenWorldTransformDirty()}_markChildrenWorldTransformDirty(){for(const a of this.children)a instanceof q0&&(a._worldTransformDirty=!0,a._markChildrenWorldTransformDirty())}setParent(a){super.setParent(a),this._worldTransformDirty=!0}getWorldPosition(a){const f=a||A0();return g9(f,this.worldTransform),f}getWorldRotation(a){const f=a||Qe();return p9(f,this.worldTransform),f}getForward(a){const f=a||A0();return Rt(f,q0.FORWARD,this._rotation),f}getBackward(a){const f=a||A0();return Rt(f,q0.BACKWARD,this._rotation),f}getRight(a){const f=a||A0();return Rt(f,q0.RIGHT,this._rotation),f}getLeft(a){const f=a||A0();return Rt(f,q0.LEFT,this._rotation),f}getUp(a){const f=a||A0();return Rt(f,q0.UP,this._rotation),f}getDown(a){const f=a||A0();return Rt(f,q0.DOWN,this._rotation),f}getWorldForward(a){const f=a||A0(),c=this.getWorldRotation();return Rt(f,q0.FORWARD,c),f}getWorldBackward(a){const f=a||A0(),c=this.getWorldRotation();return Rt(f,q0.BACKWARD,c),f}getWorldRight(a){const f=a||A0(),c=this.getWorldRotation();return Rt(f,q0.RIGHT,c),f}getWorldLeft(a){const f=a||A0(),c=this.getWorldRotation();return Rt(f,q0.LEFT,c),f}getWorldUp(a){const f=a||A0(),c=this.getWorldRotation();return Rt(f,q0.UP,c),f}getWorldDown(a){const f=a||A0(),c=this.getWorldRotation();return Rt(f,q0.DOWN,c),f}update(a){}onDestroy(){}onSetup(){}onDraw(){}}class O7 extends q0{viewMatrix=Pn();cameraTransform=Pn();cachedWorldPosition=A0();cachedWorldRotation=Qe();sceneCommandArray=[{type:"setViewMatrix",matrix:this.viewMatrix},{type:"setCameraPosition",position:this.cachedWorldPosition},{type:"setProjectionMatrix",far:1e3,near:.1,fov:45}];onSetup(){this.updateViewMatrix(),x0.setupCameraPositionMatrix(this.viewMatrix),this.getWorldPosition(this.cachedWorldPosition),x0.setupCameraPosition(this.cachedWorldPosition)}update(a){this.updateViewMatrix(),super.update(a)}onDraw(){this.getWorldPosition(this.cachedWorldPosition),x0.renderingDevice.queueSceneCommands(this.sceneCommandArray)}updateViewMatrix(){this.getWorldPosition(this.cachedWorldPosition),this.getWorldRotation(this.cachedWorldRotation),m9(this.cameraTransform,this.cachedWorldRotation,this.cachedWorldPosition),h9(this.viewMatrix,this.cameraTransform)}}class j1 extends q0{mesh=null;shader=null;color=Q1(1,1,1,1);texture=null;renderDevice=x0.renderingDevice;uniformLocations=new Map;uniforms=[];commandArray=[null];onSetup(){if(this.shader||(this.shader=Z1.create(Ye.vertexSource,Ye.fragmentSource)),!this.mesh){const a=new A7;this.mesh=a.mesh}this.shader&&["uModelMatrix","uLightDirection","uColor"].forEach(f=>{const c=this.renderDevice.shader.getUniformLocation(this.shader.program,f);c!==null&&this.uniformLocations.set(f,c)}),this.uniforms=[{name:"uModelMatrix",value:this.worldTransform,type:$0.FLOAT_MAT4},{name:"uColor",value:this.color,type:$0.FLOAT_VEC4}],this.commandArray[0]={mesh:this.mesh,shader:this.shader,uniforms:this.uniforms,textures:this.texture?[{name:this.texture,textureUnit:0,textureHandle:this.texture.getHandle()}]:[]}}onDraw(){!this.mesh||!this.shader||(this.uniforms[0].value=this.worldTransform,this.commandArray[0].mesh=this.mesh,this.commandArray[0].shader=this.shader,this.commandArray[0].textures=this.texture?[{name:this.texture,textureUnit:0,textureHandle:this.texture.getHandle()}]:[],this.renderDevice.queueCommands(this.commandArray))}}class D7 extends q0{color=Lt(1,1,1);intensity=1;renderDevice=x0.renderingDevice;cachedDirection=A0();lightCommandArray=[{type:"DirectionalLight",direction:this.cachedDirection,color:this.color,intensity:this.intensity}];onDraw(){this.getForward(this.cachedDirection);const a=this.lightCommandArray[0];a.type==="DirectionalLight"&&(a.color=this.color,a.intensity=this.intensity),this.renderDevice.queueLightCommands(this.lightCommandArray)}}class N7 extends q0{radius=1;intensity=1;color=Q1(1,1,1,1);colorVec3=A0();cachedWorldPosition=A0();lightCommandArray=[{type:"PointLight",position:this.cachedWorldPosition,color:this.colorVec3,range:this.radius,intensity:this.intensity}];constructor(){super(),this.name="PointLightNode"}onDraw(){this.colorVec3[0]=this.color[0],this.colorVec3[1]=this.color[1],this.colorVec3[2]=this.color[2],this.getWorldPosition(this.cachedWorldPosition),this.lightCommandArray[0].range=this.radius,this.lightCommandArray[0].intensity=this.intensity,x0.renderingDevice.queueLightCommands(this.lightCommandArray)}}class b5 extends q0{range=10;intensity=1;angle=Math.PI/4;color=Q1(1,1,1,1);colorVec3=A0();cachedWorldPosition=A0();cachedDirection=A0();lightCommandArray=[{type:"SpotLight",position:this.cachedWorldPosition,direction:this.cachedDirection,color:this.colorVec3,range:this.range,angle:this.angle,intensity:this.intensity}];constructor(){super(),this.name="SpotLightNode"}onDraw(){this.colorVec3[0]=this.color[0],this.colorVec3[1]=this.color[1],this.colorVec3[2]=this.color[2],this.getWorldPosition(this.cachedWorldPosition),this.getWorldForward(this.cachedDirection),this.lightCommandArray[0].range=this.range,this.lightCommandArray[0].angle=this.angle,this.lightCommandArray[0].intensity=this.intensity,x0.renderingDevice.queueLightCommands(this.lightCommandArray)}}const U7=()=>{let u,a;return{promise:new Promise((c,o)=>{u=c,a=o}),resolve:u,reject:a}};async function L7(u){const{promise:a,resolve:f,reject:c}=U7(),o=new Image;return o.src=u,o.onload=()=>f(o),o.onerror=d=>c(d),a}var Ke=typeof Float32Array<"u"?Float32Array:Array;function z5(){var u=new Ke(3);return Ke!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function B7(u,a,f){var c=new Ke(3);return c[0]=u,c[1]=a,c[2]=f,c}function H7(u,a){return u[0]=a[0],u[1]=a[1],u[2]=a[2],u}function we(u,a,f){return u[0]=a[0]*f,u[1]=a[1]*f,u[2]=a[2]*f,u}(function(){var u=z5();return function(a,f,c,o,d,m){var h,y;for(f||(f=3),c||(c=0),o?y=Math.min(o*f+c,a.length):y=a.length,h=c;h<y;h+=f)u[0]=a[h],u[1]=a[h+1],u[2]=a[h+2],d(u,u,m),a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2];return a}})();function G7(){var u=new Ke(4);return Ke!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0,u[3]=0),u}function qe(u,a,f,c){var o=new Ke(4);return o[0]=u,o[1]=a,o[2]=f,o[3]=c,o}(function(){var u=G7();return function(a,f,c,o,d,m){var h,y;for(f||(f=4),c||(c=0),o?y=Math.min(o*f+c,a.length):y=a.length,h=c;h<y;h+=f)u[0]=a[h],u[1]=a[h+1],u[2]=a[h+2],u[3]=a[h+3],d(u,u,m),a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2],a[h+3]=u[3];return a}})();const w7="/assets/Cow_Tris_Diffuse-DAXV3QYR.png",q7=`o Cow_Low_Poly\r
v -0.417348 1.079338 -0.709110\r
v -0.416031 0.956608 -0.710772\r
v -0.416134 0.998093 -0.818069\r
v -0.384755 1.224204 -0.796935\r
v -0.417534 0.873589 0.414623\r
v -0.404122 0.881820 0.292282\r
v -0.439478 1.545905 1.023098\r
v -0.390159 0.805892 -0.772251\r
v -0.402577 0.886792 -0.814172\r
v -0.393384 0.997169 0.374665\r
v -0.390674 1.133560 -0.390101\r
v -0.390569 0.990701 -0.608176\r
v -0.438948 1.526939 1.007791\r
v -0.365737 0.833404 0.546548\r
v -0.377003 0.868611 -0.666214\r
v -0.393042 0.981254 -0.433743\r
v -0.384357 1.117764 -0.223076\r
v -0.392753 0.723867 0.422311\r
v -0.397874 1.093384 -0.557665\r
v -0.358639 0.889190 -0.894136\r
v -0.373688 0.990648 0.493691\r
v -0.375282 1.207639 -0.594226\r
v -0.388860 0.971938 -0.176504\r
v -0.355643 0.988055 0.171701\r
v -0.360041 1.132112 -0.932234\r
v -0.370986 1.587006 0.988711\r
v -0.382069 1.094966 -0.127856\r
v -0.358950 1.222704 -0.279414\r
v -0.347757 0.680251 -0.858094\r
v -0.347619 1.450197 0.992368\r
v -0.347081 1.059573 0.273887\r
v -0.333066 0.694869 0.332207\r
v -0.318464 0.817117 -0.342618\r
v -0.329810 0.827571 -0.154514\r
v -0.336374 0.881232 -0.560711\r
v -0.377746 1.551145 1.012104\r
v -0.316378 0.654362 0.517474\r
v -0.354877 1.092524 0.004004\r
v -0.313261 0.690189 -0.754733\r
v -0.354943 1.193607 -0.128629\r
v -0.325846 1.309497 -0.402112\r
v -0.291875 0.832604 0.167359\r
v -0.331713 0.948206 0.060537\r
v -0.350798 0.009224 -0.778311\r
v -0.321617 1.145468 0.406734\r
v -0.289220 0.475381 0.442838\r
v -0.335558 0.009083 -0.842594\r
v -0.328726 1.153642 0.162521\r
v -0.320131 1.115197 -0.970365\r
v -0.339151 0.566540 -0.926739\r
v -0.310811 1.087145 0.541575\r
v -0.250920 1.294824 -0.963414\r
v -0.329102 0.576017 -0.834856\r
v -0.319202 1.584217 1.020152\r
v -0.337366 0.008043 0.479049\r
v -0.307473 0.668584 -0.917087\r
v -0.315570 0.021372 -0.701569\r
v -0.322876 0.009304 0.567517\r
v -0.256037 0.715032 0.281340\r
v -0.313069 1.325846 -0.599234\r
v -0.282534 0.824761 -0.009193\r
v -0.258995 0.800669 -0.644745\r
v -0.220699 1.423991 -0.851680\r
v -0.298950 0.173478 -0.777023\r
v -0.296100 0.257700 -0.819779\r
v -0.313434 0.084803 0.518388\r
v -0.301404 0.973764 0.600727\r
v -0.273342 1.483173 0.948668\r
v -0.295775 0.077819 0.447956\r
v -0.294464 0.041268 -0.885738\r
v -0.294952 0.218039 -0.860011\r
v -0.289108 0.491454 -0.876217\r
v -0.313596 1.295121 0.011752\r
v -0.190046 0.825124 -0.921942\r
v -0.310772 1.313810 -0.199242\r
v -0.303300 1.164904 0.273648\r
v -0.270620 0.016431 0.414146\r
v -0.266908 1.313083 0.260272\r
v -0.265143 0.808566 -0.545538\r
v -0.275945 1.457980 0.998223\r
v -0.281838 0.250440 0.467552\r
v -0.269206 0.596383 0.368079\r
v -0.283140 0.438857 0.478498\r
v -0.272724 1.200907 0.554379\r
v -0.250768 0.137193 0.413004\r
v -0.272429 0.572662 -0.960415\r
v -0.233866 0.707440 -0.909414\r
v -0.224271 1.534032 1.009026\r
v -0.240230 0.658470 0.330923\r
v -0.254399 0.021068 0.609685\r
v -0.195072 0.975016 -0.988400\r
v -0.238582 0.016964 -0.896204\r
v -0.220781 0.716404 -0.450098\r
v -0.250003 1.565217 0.950620\r
v -0.277230 0.473542 -0.828314\r
v -0.235780 0.732806 -0.127834\r
v -0.266286 0.268120 0.519713\r
v -0.250603 0.571431 -0.798210\r
v -0.209085 0.733075 -0.699928\r
v -0.260340 0.239614 -0.787199\r
v -0.249108 0.019788 -0.680096\r
v -0.249697 0.116061 0.571599\r
v -0.239021 0.441619 -0.824754\r
v -0.198418 1.389563 0.403730\r
v -0.186857 0.665012 0.300190\r
v -0.246773 1.411473 -0.459499\r
v -0.256748 0.441190 0.502912\r
v -0.235901 0.214025 -0.869267\r
v -0.226363 0.809698 0.618195\r
v -0.211415 0.724984 0.173665\r
v -0.228248 1.094313 0.609188\r
v -0.257112 1.290528 0.454326\r
v -0.229718 1.430959 -0.664922\r
v -0.227404 0.712687 0.555726\r
v -0.192786 0.691815 -0.301469\r
v -0.228414 1.578008 0.998360\r
v -0.239597 0.617332 0.525114\r
v -0.216462 0.766143 -0.647562\r
v -0.243946 0.460905 0.423166\r
v -0.161866 0.009855 0.582785\r
v -0.185124 1.155344 -1.027369\r
v -0.242431 0.214305 0.437845\r
v -0.239927 0.478076 -0.890406\r
v -0.207855 1.444186 0.093426\r
v -0.230323 0.748502 0.049185\r
v -0.211917 1.431388 -0.209806\r
v -0.207994 1.200141 0.673712\r
v -0.169043 1.457169 0.247420\r
v -0.224309 1.335010 0.610304\r
v -0.224884 0.294898 0.517102\r
v -0.226606 0.447629 0.481963\r
v -0.195143 1.424092 0.322120\r
v -0.224725 0.237277 -0.802304\r
v -0.210606 0.616850 0.384194\r
v -0.225007 0.199864 -0.862506\r
v -0.173095 0.665676 -0.745326\r
v -0.219496 1.440268 0.988819\r
v -0.180777 0.072438 0.459625\r
v -0.208460 1.517158 0.922762\r
v -0.203560 0.583672 0.492073\r
v -0.229355 1.478983 0.938730\r
v -0.129785 0.695615 -0.589674\r
v -0.165791 0.016699 -0.836644\r
v -0.210107 0.258407 0.471106\r
v -0.136663 0.658831 -0.422135\r
v -0.191694 0.550225 -0.873407\r
v -0.196034 1.358478 0.496236\r
v -0.200775 1.446006 1.057259\r
v -0.168295 0.017981 -0.730662\r
v -0.206805 1.495673 0.859248\r
v -0.212844 1.391399 0.871691\r
v -0.116645 0.618292 -0.490005\r
v -0.178704 0.595022 0.450860\r
v -0.175925 0.164799 0.514009\r
v -0.162650 0.628651 0.017506\r
v -0.186560 0.011316 0.424906\r
v -0.204616 1.430538 0.783639\r
v -0.196649 1.276051 0.798742\r
v -0.172742 0.740743 -0.883525\r
v -0.146806 0.644711 -0.854840\r
v -0.149139 0.626819 -0.811191\r
v -0.196801 1.370819 0.751832\r
v -0.191879 1.383628 1.022763\r
v -0.195893 0.131595 0.435343\r
v -0.181552 1.284285 1.006884\r
v -0.181733 0.143093 -0.797039\r
v -0.182311 0.643808 -0.153692\r
v -0.163002 1.561266 0.914319\r
v -0.164135 0.058227 0.551190\r
v -0.139908 1.423595 -0.968999\r
v -0.178857 0.974433 0.633807\r
v -0.140860 0.650838 0.202531\r
v -0.144517 1.610450 0.929338\r
v -0.152116 1.097005 0.794203\r
v -0.055048 0.639250 -0.350851\r
v -0.138123 0.640625 0.416335\r
v -0.139476 1.295788 -1.025890\r
v -0.106578 1.510985 0.185172\r
v -0.157245 1.602504 0.999090\r
v -0.139782 1.121395 0.977250\r
v -0.142476 1.509500 1.032065\r
v -0.140988 1.475526 0.513499\r
v -0.165676 1.339970 1.100573\r
v -0.143394 1.029494 0.674637\r
v -0.079931 0.549891 -0.504621\r
v -0.139444 1.196224 1.095790\r
v -0.070570 0.589916 -0.455944\r
v -0.149535 0.666819 0.509560\r
v -0.148650 1.470425 0.701029\r
v -0.013327 1.526536 -0.800555\r
v -0.142987 0.014571 0.499283\r
v -0.065924 1.528248 -0.092178\r
v -0.111210 1.484385 -0.388290\r
v -0.143895 1.533621 0.824999\r
v -0.086906 0.678688 -0.684496\r
v -0.091937 1.415509 -1.011317\r
v -0.077430 1.535723 0.393265\r
v -0.132104 0.847028 0.679786\r
v -0.059584 1.639842 0.861274\r
v -0.001397 1.026199 -1.040805\r
v 0.002814 0.836594 -0.987865\r
v -0.094260 1.560410 1.056201\r
v -0.117262 0.917278 0.748933\r
v -0.000360 1.127678 -1.060692\r
v -0.068081 0.736318 -0.895508\r
v -0.084403 0.598336 -0.188554\r
v -0.107289 1.003824 0.840802\r
v -0.134742 1.405946 1.130046\r
v -0.123002 1.120183 1.159594\r
v -0.079447 1.467350 1.125951\r
v -0.073333 0.709348 0.606428\r
v -0.113910 1.064750 1.267666\r
v -0.111984 1.244637 1.204090\r
v -0.097165 1.125500 1.405549\r
v -0.091987 1.545308 0.734119\r
v -0.080998 1.179997 1.398829\r
v -0.053563 1.016952 0.954533\r
v -0.066041 1.050354 1.408229\r
v -0.064310 1.014841 1.154898\r
v -0.068431 1.625658 1.014034\r
v -0.048686 0.929768 0.827534\r
v -0.086008 1.429260 -1.026694\r
v -0.078167 0.613788 0.330677\r
v -0.006416 0.609762 0.171162\r
v -0.063784 1.375439 -1.073676\r
v -0.027944 0.579471 -0.030745\r
v 0.045097 0.667948 -0.823130\r
v -0.048442 0.590419 -0.519193\r
v -0.017333 0.970173 1.317140\r
v -0.037061 1.340409 1.248416\r
v 0.005695 0.662779 -0.630684\r
v 0.012968 0.653497 -0.759360\r
v -0.051435 0.630324 -1.075214\r
v -0.048289 0.658082 -1.098016\r
v -0.044386 0.607635 0.488690\r
v 0.001473 1.351653 -1.008615\r
v -0.039964 0.800038 -1.088534\r
v -0.039344 0.977903 -1.121362\r
v -0.011313 1.368175 -1.037893\r
v 0.021874 1.169735 1.419862\r
v -0.034970 0.631471 -1.058982\r
v -0.000531 0.608078 -0.550018\r
v -0.025877 0.794008 -1.123376\r
v 0.000540 1.570731 0.356651\r
v -0.014772 1.074015 -1.144321\r
v 0.015615 1.541056 -0.098485\r
v 0.010549 0.917611 -1.024267\r
v -0.030361 1.258882 -1.117727\r
v 0.016583 0.593610 0.384792\r
v 0.042868 0.595475 -0.468776\r
v -0.008547 1.509526 -0.417981\r
v 0.013844 1.502471 -0.951351\r
v -0.002147 1.573514 0.710657\r
v 0.016878 1.539635 1.116818\r
v 0.022375 0.991210 1.217353\r
v -0.008209 1.008185 -1.104150\r
v 0.042654 1.636611 0.987191\r
v 0.044553 1.646416 0.896152\r
v -0.000871 1.372833 -1.118806\r
v 0.031132 0.636254 -0.334106\r
v 0.035526 0.963382 0.871888\r
v -0.002773 1.242297 -1.099807\r
v 0.042423 0.627889 0.545451\r
v 0.039772 1.019338 1.029390\r
v 0.013429 0.831271 -1.084979\r
v 0.038194 1.287451 1.289773\r
v 0.066151 1.621527 0.826045\r
v 0.147667 1.254735 -1.036793\r
v 0.065443 0.591273 -0.153933\r
v 0.054546 0.758026 0.664943\r
v 0.022221 0.824311 -1.118147\r
v 0.078477 0.732601 -0.895251\r
v 0.035917 0.643322 -1.066765\r
v 0.057508 0.699798 -1.105074\r
v 0.028458 0.999658 -1.123250\r
v 0.034426 1.272723 -1.112098\r
v 0.042163 1.347820 -1.114510\r
v 0.027537 0.994704 1.148148\r
v 0.064598 1.041693 1.401037\r
v 0.078495 1.496742 -0.457005\r
v 0.028393 1.109320 -1.139823\r
v 0.086471 1.028397 0.923861\r
v 0.067772 1.379956 -1.059086\r
v 0.065743 0.609096 -0.524783\r
v 0.065516 0.639360 -1.073775\r
v 0.092435 1.402974 -0.993099\r
v 0.094770 1.526872 0.493177\r
v 0.088506 1.548949 0.741571\r
v 0.086974 1.526276 0.352268\r
v 0.080829 1.442471 -1.013334\r
v 0.110772 1.362893 1.172231\r
v 0.059314 0.983233 1.312845\r
v 0.124051 0.681742 -0.703907\r
v 0.089512 1.440221 1.144838\r
v 0.125993 0.647406 -0.787111\r
v 0.106040 1.276039 1.196186\r
v 0.157089 0.905513 -1.004775\r
v 0.132169 0.661721 -0.325477\r
v 0.180142 1.466947 -0.002018\r
v 0.096744 1.151508 1.407587\r
v 0.079695 0.596853 -0.453796\r
v 0.141225 0.639866 0.449336\r
v 0.079321 0.599754 0.016270\r
v 0.130653 1.579466 1.014527\r
v 0.098215 1.048362 1.156956\r
v 0.123994 0.633362 0.122879\r
v 0.170676 1.097974 -1.022417\r
v 0.201137 0.774323 0.598396\r
v 0.203244 1.450571 -0.752371\r
v 0.119171 0.862352 0.702346\r
v 0.198323 1.355958 -0.987229\r
v 0.065970 0.557720 -0.508743\r
v 0.122412 0.713351 0.577805\r
v 0.117551 1.071098 1.277951\r
v 0.125917 0.960527 0.753899\r
v 0.149908 1.147351 0.965876\r
v 0.130477 1.048051 0.844319\r
v 0.159167 0.671612 0.516734\r
v 0.165801 0.649201 -0.865163\r
v 0.143640 1.612286 0.946071\r
v 0.129549 0.690081 -0.586818\r
v 0.155182 0.793215 -0.935238\r
v 0.140872 1.567694 0.869452\r
v 0.124100 1.179408 1.169417\r
v 0.151518 1.351320 1.124978\r
v 0.217133 1.427008 0.155649\r
v 0.212867 1.463180 1.007630\r
v 0.158393 0.652437 0.293705\r
v 0.154415 1.468721 0.679102\r
v 0.143489 1.018830 0.675064\r
v 0.160905 1.405774 1.099190\r
v 0.166785 1.422141 0.486697\r
v 0.188925 0.921639 0.640819\r
v 0.159129 1.092217 0.756086\r
v 0.220470 1.432446 -0.317804\r
v 0.149914 0.019943 0.465020\r
v 0.144265 0.015088 -0.764423\r
v 0.145766 0.023305 -0.817601\r
v 0.168527 1.436996 -0.927243\r
v 0.172167 0.012817 0.593098\r
v 0.167135 1.553804 0.925842\r
v 0.185415 0.624545 -0.787842\r
v 0.214613 1.422416 0.298460\r
v 0.169563 1.110240 0.667952\r
v 0.158459 0.064830 0.511059\r
v 0.227523 0.764779 -0.649303\r
v 0.188950 0.016112 -0.704991\r
v 0.163329 0.622821 -0.050767\r
v 0.197611 1.022207 0.625455\r
v 0.202424 1.452080 -0.594004\r
v 0.194800 0.619782 0.406881\r
v 0.197360 1.249322 0.792853\r
v 0.100917 0.571908 -0.490047\r
v 0.115209 0.615657 -0.477577\r
v 0.211452 0.015429 -0.888739\r
v 0.190398 0.169246 -0.789256\r
v 0.180081 0.173675 0.510395\r
v 0.204634 1.584674 0.970449\r
v 0.208123 1.527398 0.894730\r
v 0.206368 1.401621 0.401571\r
v 0.186244 0.070161 0.454796\r
v 0.205028 0.170075 -0.863307\r
v 0.205392 0.011388 0.416847\r
v 0.213050 0.699727 -0.902704\r
v 0.198414 1.172673 0.739861\r
v 0.185093 0.066492 0.571645\r
v 0.228878 0.706083 -0.718587\r
v 0.228375 1.343459 0.608963\r
v 0.216586 1.555478 1.014831\r
v 0.214444 0.230274 0.461518\r
v 0.203366 1.387231 0.762157\r
v 0.208596 0.132423 0.420886\r
v 0.181515 1.328824 1.042745\r
v 0.200269 0.713399 0.116039\r
v 0.204009 0.587616 0.486210\r
v 0.220552 1.565396 0.934832\r
v 0.168652 0.672933 -0.449758\r
v 0.222391 0.711951 -0.340081\r
v 0.232537 0.741986 -0.112651\r
v 0.215000 1.463678 0.834553\r
v 0.207713 1.359750 0.904535\r
v 0.220065 1.221840 0.690833\r
v 0.232791 0.464714 -0.879631\r
v 0.250790 1.203383 0.620523\r
v 0.251731 0.639311 0.536716\r
v 0.228208 0.525361 -0.823213\r
v 0.233991 0.213080 -0.868275\r
v 0.243673 0.762955 -0.559901\r
v 0.228485 1.431135 0.900944\r
v 0.240997 0.457183 0.427079\r
v 0.249147 0.570672 -0.948390\r
v 0.307175 1.335471 -0.118695\r
v 0.243781 0.028950 -0.684480\r
v 0.228914 0.239801 0.533178\r
v 0.223587 0.237801 -0.808633\r
v 0.227148 0.434938 0.472874\r
v 0.250121 0.078709 0.435705\r
v 0.222813 1.482368 0.930984\r
v 0.242008 0.623547 0.362897\r
v 0.301867 0.978821 0.598688\r
v 0.238490 0.771953 0.103589\r
v 0.260016 0.816058 -0.923598\r
v 0.263872 0.104919 0.569739\r
v 0.295617 1.096550 0.573296\r
v 0.277382 1.303112 0.317950\r
v 0.237460 0.730485 -0.456914\r
v 0.267066 1.470830 0.989759\r
v 0.245304 0.409044 -0.818024\r
v 0.286905 1.342550 -0.851252\r
v 0.248025 0.430790 0.498847\r
v 0.261609 0.244162 -0.787303\r
v 0.308615 0.011966 -0.700104\r
v 0.289902 0.672431 -0.920255\r
v 0.264424 0.011420 0.607669\r
v 0.285123 0.844406 0.009081\r
v 0.274210 0.541379 0.392783\r
v 0.340103 1.304777 -0.366135\r
v 0.287527 0.727590 0.555417\r
v 0.290309 0.010817 0.425075\r
v 0.260207 0.132313 0.417329\r
v 0.346977 0.847456 -0.883463\r
v 0.247506 0.719070 0.273674\r
v 0.292313 0.015592 -0.888143\r
v 0.263339 0.197256 -0.871470\r
v 0.269907 0.248157 0.445852\r
v 0.339290 0.827748 0.568527\r
v 0.269841 0.480071 -0.893663\r
v 0.334053 1.180357 -0.949194\r
v 0.332602 1.596315 1.017215\r
v 0.342924 1.309097 -0.559664\r
v 0.261590 1.289899 0.454943\r
v 0.307682 1.280101 0.118788\r
v 0.277436 0.817215 0.185770\r
v 0.319425 0.769679 -0.692635\r
v 0.292784 0.061409 -0.875041\r
v 0.310238 1.356078 -0.703918\r
v 0.278777 0.455470 0.434051\r
v 0.327798 1.038721 -0.950559\r
v 0.283716 1.214088 0.547115\r
v 0.302041 0.081968 0.460490\r
v 0.283701 0.434078 0.484467\r
v 0.282921 0.508372 -0.819492\r
v 0.283776 0.267398 0.478342\r
v 0.295318 0.242321 -0.859521\r
v 0.321465 0.567162 -0.945739\r
v 0.331088 1.449385 0.987897\r
v 0.317258 0.859497 -0.579293\r
v 0.306863 1.527285 0.992308\r
v 0.339425 0.007120 0.498132\r
v 0.314018 0.021152 0.577153\r
v 0.313538 0.922169 0.105753\r
v 0.306754 0.787244 -0.322516\r
v 0.299965 0.236337 -0.808657\r
v 0.323673 0.626710 0.501021\r
v 0.310833 0.103818 0.513600\r
v 0.320364 1.269962 -0.901451\r
v 0.322601 1.165630 0.235218\r
v 0.296671 0.502166 -0.838595\r
v 0.311485 1.201474 0.358860\r
v 0.360614 1.578856 0.973482\r
v 0.329095 0.682975 -0.773771\r
v 0.301540 1.491015 0.935631\r
v 0.294138 0.801715 -0.477503\r
v 0.393494 1.212796 -0.765186\r
v 0.349337 1.109140 0.334825\r
v 0.326612 0.581102 0.414426\r
v 0.360992 1.131278 0.022078\r
v 0.360854 0.696773 0.359636\r
v 0.341999 0.841065 -0.161842\r
v 0.339025 0.641808 -0.875239\r
v 0.357584 0.866390 -0.426440\r
v 0.346255 0.012906 -0.807859\r
v 0.393073 1.197979 -0.298212\r
v 0.348870 1.163859 0.123568\r
v 0.345377 0.014545 -0.746456\r
v 0.335279 1.126208 0.465334\r
v 0.340953 0.567408 -0.866369\r
v 0.362356 1.047910 0.259247\r
v 0.367990 0.988181 0.524500\r
v 0.360492 0.749061 -0.830063\r
v 0.363975 1.051617 0.126500\r
v 0.385395 0.917424 0.256237\r
v 0.423133 1.567482 1.014053\r
v 0.376706 1.193092 -0.108290\r
v 0.381717 0.702887 0.438446\r
v 0.375239 0.982693 -0.074400\r
v 0.383140 0.904487 -0.282125\r
v 0.410138 0.966839 -0.434114\r
v 0.397158 0.988167 0.383119\r
v 0.400619 0.997665 -0.593293\r
v 0.404873 1.149326 -0.598363\r
v 0.397519 0.870535 0.473073\r
v 0.403580 0.865425 -0.740674\r
v 0.386409 1.086444 -0.096059\r
v 0.394804 1.213943 -0.469169\r
v 0.414182 1.059398 -0.258657\r
v 0.408241 0.832347 0.375196\r
v 0.444029 1.532888 1.006696\r
v 0.410071 1.032826 -0.831134\r
v 0.427662 1.052809 -0.719692\r
v 0.422646 1.099725 -0.446731\r
vn -0.5357 0.4832 0.6925\r
vn -0.7291 -0.0060 0.6844\r
vn 0.0850 0.3598 0.9292\r
vn -0.4570 -0.4939 0.7398\r
vn 0.3696 0.6534 0.6607\r
vn -0.9235 0.1571 0.3500\r
vn -0.3212 0.5917 0.7394\r
vn 0.4850 0.4841 0.7283\r
vn 0.0786 0.6360 0.7677\r
vn -0.4662 0.5390 0.7015\r
vn -0.6903 0.3340 0.6418\r
vn -0.4564 0.4712 0.7548\r
vn -0.1879 0.8769 0.4425\r
vn 0.0494 0.6649 0.7453\r
vn -0.1156 0.1996 0.9730\r
vn -0.0966 0.8215 0.5620\r
vn -0.4311 0.4058 0.8059\r
vn -0.3587 0.7860 0.5035\r
vn -0.2671 0.9312 -0.2481\r
vn -0.3636 0.8240 -0.4344\r
vn -0.9006 -0.3750 -0.2197\r
vn -0.8118 0.2636 0.5210\r
vn 0.1612 0.9220 0.3520\r
vn 0.1511 0.9845 -0.0890\r
vn -0.6391 0.4952 -0.5885\r
vn -0.8559 0.4311 -0.2857\r
vn -0.7188 0.3587 -0.5956\r
vn 0.3793 0.8395 -0.3891\r
vn -0.1321 0.9549 0.2658\r
vn -0.5816 0.7682 -0.2677\r
vn -0.7071 0.6112 -0.3555\r
vn -0.0128 0.9637 -0.2668\r
vn -0.9401 0.3268 0.0966\r
vn -0.9894 0.1291 -0.0667\r
vn -0.8288 0.5401 -0.1464\r
vn -0.5732 0.8192 -0.0156\r
vn -0.8087 0.5868 -0.0418\r
vn 0.0178 0.9990 -0.0408\r
vn -0.8421 0.5384 0.0311\r
vn -0.2071 -0.0146 0.9782\r
vn -0.9866 -0.0006 0.1631\r
vn -0.6416 0.2746 0.7162\r
vn -0.8022 0.2466 -0.5437\r
vn -0.8271 0.5464 0.1318\r
vn 0.6577 -0.2962 -0.6926\r
vn 0.8458 -0.1561 0.5102\r
vn 0.4760 0.0212 -0.8792\r
vn -0.7956 0.5958 0.1096\r
vn -0.7203 0.6914 0.0558\r
vn -0.8982 0.4286 0.0979\r
vn -0.5445 0.8388 0.0015\r
vn -0.7115 0.7015 0.0399\r
vn -0.9070 0.4138 0.0780\r
vn -0.3471 0.9354 -0.0679\r
vn -0.6488 0.7610 0.0003\r
vn 0.1397 0.9878 -0.0690\r
vn -0.8447 0.5328 0.0516\r
vn -0.0619 0.9975 -0.0326\r
vn -0.3759 0.9264 -0.0214\r
vn -0.9345 0.3516 0.0564\r
vn -0.9852 0.1632 0.0531\r
vn -0.9518 0.2881 0.1054\r
vn -0.8629 0.5048 0.0246\r
vn -0.6555 0.7548 0.0251\r
vn -0.9370 0.3458 0.0484\r
vn -0.9849 0.1705 0.0296\r
vn 0.2811 0.9597 0.0041\r
vn -0.0614 0.9936 -0.0943\r
vn -0.6168 0.7866 -0.0286\r
vn -0.9945 0.0928 0.0478\r
vn -0.8996 0.4026 -0.1692\r
vn 0.4284 -0.5185 0.7400\r
vn 0.7791 -0.5842 -0.2276\r
vn 0.8008 -0.5022 0.3264\r
vn 0.7556 -0.1251 -0.6430\r
vn 0.3024 0.1507 -0.9412\r
vn 0.3040 -0.1941 -0.9327\r
vn -0.4956 0.6343 -0.5933\r
vn -0.6331 0.3877 -0.6700\r
vn -0.6260 0.7443 -0.2328\r
vn 0.6085 -0.1903 -0.7704\r
vn -0.3405 -0.1529 -0.9277\r
vn -0.2438 0.2621 -0.9337\r
vn 0.2568 -0.2936 -0.9208\r
vn -0.0704 -0.5219 -0.8501\r
vn -0.0621 -0.2916 -0.9545\r
vn -0.1625 -0.9330 0.3210\r
vn -0.7044 -0.5436 -0.4565\r
vn -0.9295 -0.2032 -0.3079\r
vn -0.6240 0.5175 -0.5855\r
vn 0.0849 -0.4836 -0.8712\r
vn 0.0151 0.9436 -0.3306\r
vn -0.0596 0.4390 -0.8965\r
vn -0.9646 -0.1230 -0.2334\r
vn -0.0996 -0.1723 0.9800\r
vn -0.3209 -0.0107 -0.9471\r
vn 0.7118 0.2825 0.6430\r
vn 0.8813 0.1549 0.4465\r
vn 0.8737 0.0013 0.4865\r
vn 0.3855 -0.9220 0.0370\r
vn 0.2148 -0.9703 -0.1111\r
vn -0.5706 -0.8163 -0.0898\r
vn 0.9839 -0.0626 0.1676\r
vn 0.9550 -0.1501 0.2558\r
vn 0.9207 -0.3662 0.1351\r
vn 0.3697 0.6586 0.6554\r
vn 0.2126 -0.4027 -0.8903\r
vn 0.1242 -0.8915 0.4357\r
vn 0.7635 -0.1859 0.6184\r
vn -0.4702 -0.8371 0.2797\r
vn 0.3398 -0.7814 0.5234\r
vn -0.2466 -0.4048 -0.8805\r
vn 0.7878 0.5080 -0.3483\r
vn 0.4790 0.7447 -0.4648\r
vn 0.1701 0.6820 -0.7113\r
vn -0.6137 -0.3478 0.7088\r
vn -0.3401 -0.6978 0.6304\r
vn -0.8341 -0.3278 0.4436\r
vn -0.2535 -0.6935 0.6744\r
vn 0.8544 -0.2760 0.4402\r
vn 0.6308 -0.4165 0.6547\r
vn 0.6114 -0.0706 0.7882\r
vn 0.1998 -0.6691 0.7158\r
vn -0.9848 -0.1422 0.0994\r
vn -0.8885 -0.1899 0.4177\r
vn -0.9451 -0.2890 0.1527\r
vn -0.9326 -0.1506 0.3281\r
vn -0.9128 0.2004 0.3558\r
vn -0.6375 -0.0011 0.7704\r
vn -0.1443 -0.2701 0.9519\r
vn 0.8169 0.3401 0.4659\r
vn -0.1697 0.2960 0.9400\r
vn 0.5957 0.2188 0.7728\r
vn -0.6169 -0.4190 0.6663\r
vn 0.4075 -0.5345 -0.7404\r
vn 0.1767 -0.5022 0.8465\r
vn -0.8906 0.2649 0.3696\r
vn -0.7606 -0.1217 0.6377\r
vn -0.5568 0.1096 0.8234\r
vn 0.3850 -0.6514 0.6538\r
vn -0.0367 -0.7212 0.6917\r
vn 0.3254 -0.4205 0.8469\r
vn -0.9260 0.3708 0.0706\r
vn -0.8102 0.3034 0.5015\r
vn -0.6273 0.1995 0.7528\r
vn -0.9333 0.1035 -0.3440\r
vn -0.9216 0.2943 0.2531\r
vn 0.0147 -0.3514 0.9361\r
vn 0.7229 -0.3110 0.6171\r
vn -0.5963 -0.3046 0.7427\r
vn -0.9055 -0.0575 0.4204\r
vn -0.0762 -0.0313 0.9966\r
vn 0.9639 0.2298 0.1346\r
vn 0.6854 0.0268 -0.7277\r
vn 0.9205 0.1831 -0.3453\r
vn 0.7591 0.1812 -0.6253\r
vn -0.1325 -0.0305 -0.9907\r
vn -0.6552 0.1573 -0.7389\r
vn 0.0566 0.2345 -0.9705\r
vn 0.3315 -0.2973 -0.8954\r
vn 0.9418 -0.0607 0.3308\r
vn 0.7996 0.5990 0.0426\r
vn 0.5762 0.8173 0.0063\r
vn 0.6445 0.7633 -0.0450\r
vn -0.1861 -0.3633 -0.9129\r
vn -0.8119 -0.5350 -0.2337\r
vn -0.9939 0.0105 0.1099\r
vn -0.9471 0.3197 -0.0273\r
vn 0.9425 -0.2991 0.1493\r
vn 0.7608 -0.4330 -0.4835\r
vn 0.9868 -0.1166 -0.1121\r
vn -0.9506 0.3076 0.0406\r
vn -0.0282 -0.6844 -0.7285\r
vn 0.5044 -0.6953 -0.5120\r
vn 0.8301 -0.4100 -0.3780\r
vn -0.2981 -0.9540 -0.0330\r
vn -0.0231 -0.9984 0.0506\r
vn 0.0949 -0.9955 0.0073\r
vn 0.4749 -0.8739 0.1037\r
vn 0.3356 -0.9179 -0.2116\r
vn -0.9886 -0.0362 -0.1463\r
vn -0.8213 -0.4900 -0.2921\r
vn -0.9375 -0.1056 -0.3317\r
vn 0.8345 -0.5475 -0.0625\r
vn 0.8099 -0.4859 -0.3285\r
vn 0.9998 0.0013 0.0180\r
vn 0.9830 0.1396 0.1197\r
vn 0.9627 0.2417 0.1216\r
vn -0.9877 0.0783 0.1354\r
vn -0.9760 -0.1972 0.0922\r
vn -0.9528 -0.3027 0.0227\r
vn 0.9544 -0.2379 0.1806\r
vn -0.8465 -0.5197 0.1152\r
vn -0.8601 -0.4994 0.1043\r
vn 0.9538 0.2735 0.1248\r
vn 0.9822 0.0119 0.1873\r
vn 0.5822 0.8130 -0.0094\r
vn 0.6004 0.7997 -0.0016\r
vn 0.7768 -0.6283 0.0428\r
vn 0.6359 -0.7717 0.0122\r
vn 0.4673 -0.8839 0.0195\r
vn -0.8229 -0.5666 -0.0424\r
vn -0.7034 -0.7013 -0.1158\r
vn -0.6030 -0.7941 -0.0758\r
vn -0.5323 -0.8199 0.2107\r
vn -0.7061 -0.6929 -0.1460\r
vn -0.2080 -0.8968 0.3905\r
vn -0.2477 -0.6756 -0.6944\r
vn -0.1678 -0.9670 0.1915\r
vn 0.0890 -0.8874 -0.4524\r
vn 0.5315 0.8469 0.0160\r
vn 0.5377 0.8386 -0.0871\r
vn -0.9799 -0.1296 0.1516\r
vn -0.9314 -0.3415 0.1257\r
vn -0.7966 -0.4513 0.4023\r
vn 0.7362 -0.4012 0.5449\r
vn 0.5563 -0.5910 0.5842\r
vn 0.2282 -0.6469 0.7276\r
vn 0.3890 -0.2260 0.8931\r
vn 0.9690 -0.2035 -0.1401\r
vn 0.9515 -0.2979 0.0764\r
vn -0.9211 0.1500 0.3593\r
vn -0.0861 0.3260 0.9414\r
vn -0.6735 -0.1441 0.7250\r
vn -0.7068 0.0997 0.7004\r
vn -0.8398 -0.2261 -0.4937\r
vn -0.8938 0.2797 0.3505\r
vn 0.8831 0.2283 0.4100\r
vn 0.8162 0.0305 -0.5770\r
vn -0.5909 0.1085 -0.7994\r
vn -0.8281 0.4427 0.3440\r
vn -0.6397 -0.3451 0.6868\r
vn -0.4546 -0.7557 0.4715\r
vn -0.6146 -0.5470 -0.5684\r
vn -0.6460 -0.1675 -0.7447\r
vn -0.9654 -0.0280 -0.2591\r
vn -0.8141 0.1637 -0.5572\r
vn -0.0910 -0.6245 -0.7757\r
vn 0.4103 -0.4135 -0.8128\r
vn 0.9198 -0.2983 0.2549\r
vn -0.8040 -0.4366 -0.4036\r
vn 0.4631 -0.4076 -0.7870\r
vn -0.7059 0.0919 -0.7024\r
vn 0.1990 -0.0020 -0.9800\r
vn -0.2985 -0.2737 -0.9143\r
vn -0.1616 -0.3430 -0.9253\r
vn 0.2328 0.1684 -0.9579\r
vn 0.4771 0.4683 -0.7437\r
vn 0.7252 0.1558 -0.6707\r
vn 0.2982 -0.0715 -0.9518\r
vn 0.6193 -0.0985 -0.7789\r
vn 0.0281 -0.1546 -0.9876\r
vn -0.0334 0.0207 0.9992\r
vn 0.9801 -0.1774 -0.0887\r
vn 0.9364 -0.0032 0.3509\r
vn 0.4931 0.1556 0.8559\r
vn -0.9983 0.0141 0.0562\r
vn -0.8394 0.1005 0.5342\r
vn -0.6207 -0.3121 -0.7192\r
vn -0.4782 -0.0506 -0.8768\r
vn 0.9104 -0.0888 -0.4041\r
vn 0.6700 0.1699 0.7227\r
vn -0.9093 -0.3987 0.1192\r
vn 0.0414 -0.2063 0.9776\r
vn 0.0177 0.3274 0.9447\r
vn 0.8251 -0.5617 -0.0601\r
vn 0.3122 0.6644 -0.6790\r
vn 0.9712 -0.1644 0.1725\r
vn 0.9759 -0.2049 0.0745\r
vn 0.8807 -0.2624 -0.3944\r
vn 0.6547 0.6792 -0.3317\r
vn 0.8546 -0.4448 0.2678\r
vn 0.9436 -0.3037 0.1321\r
vn 0.9783 -0.1399 0.1527\r
vn -0.9945 -0.1009 -0.0284\r
vn 0.9034 -0.0648 0.4239\r
vn -0.8783 0.4653 0.1097\r
vn 0.8833 -0.4438 -0.1510\r
vn 0.5817 -0.4551 0.6742\r
vn 0.9769 0.2133 0.0087\r
vn 0.8726 0.1872 0.4511\r
vn 0.9525 -0.0268 0.3035\r
vn -0.5452 -0.2237 -0.8079\r
vn -0.6330 -0.4865 -0.6022\r
vn -0.8519 -0.2859 -0.4387\r
vn -0.9443 -0.3277 0.0303\r
vn -0.5897 -0.7450 -0.3117\r
vn -0.4067 -0.7091 -0.5759\r
vn 0.0126 -0.4916 -0.8707\r
vn 0.9632 0.2632 -0.0554\r
vn 0.9384 -0.1461 -0.3131\r
vn 0.9047 -0.4141 -0.1003\r
vn 0.2448 -0.9640 0.1039\r
vn -0.6033 -0.7932 0.0822\r
vn -0.4997 -0.8661 -0.0098\r
vn -0.7586 -0.6443 -0.0970\r
vn -0.9814 0.1275 0.1435\r
vn -0.0501 -0.8917 -0.4498\r
vn 0.8142 0.5794 0.0377\r
vn 0.8315 0.5554 0.0046\r
vn 0.0031 -0.9708 -0.2399\r
vn -0.5177 -0.8103 -0.2747\r
vn -0.2574 -0.9374 0.2344\r
vn 0.9814 0.1919 0.0079\r
vn 0.9250 0.3481 -0.1522\r
vn -0.2275 -0.9702 0.0839\r
vn 0.2317 -0.9201 0.3159\r
vn 0.2562 -0.4382 0.8616\r
vn -0.0481 -0.7297 0.6821\r
vn -0.2798 -0.6890 0.6685\r
vn 0.0906 -0.4232 0.9015\r
vn 0.8362 0.2891 0.4660\r
vn 0.7239 -0.4849 0.4907\r
vn 0.9410 0.3268 0.0880\r
vn -0.0027 0.2949 0.9555\r
vn 0.7049 -0.0007 0.7093\r
vn -0.6665 0.3370 0.6650\r
vn 0.9342 -0.0132 -0.3566\r
vn 0.7485 -0.5764 -0.3279\r
vn -0.8020 -0.5832 0.1291\r
vn 0.1879 -0.5693 -0.8004\r
vn 0.1846 -0.3102 -0.9326\r
vn -0.0330 -0.5627 -0.8260\r
vn 0.5190 -0.4943 -0.6974\r
vn 0.7889 0.4610 -0.4062\r
vn 0.0636 -0.1640 -0.9844\r
vn -0.5407 0.0058 -0.8412\r
vn -0.8062 -0.2900 -0.5157\r
vn -0.4619 0.2189 -0.8595\r
vn 0.2599 0.0468 -0.9645\r
vn -0.3164 0.0003 -0.9486\r
vn -0.0113 -0.0461 -0.9989\r
vn -0.0284 -0.1680 -0.9854\r
vn -0.7145 -0.6995 -0.0146\r
vn 0.8686 -0.4713 0.1529\r
vn 0.4755 -0.4667 0.7457\r
vn -0.2518 -0.9447 0.2102\r
vn -0.9238 -0.3752 0.0766\r
vn -0.9733 -0.2189 0.0688\r
vn 0.2168 -0.9448 0.2456\r
vn 0.5365 0.8430 -0.0400\r
vn -0.9416 -0.2079 0.2649\r
vn -0.7541 -0.6564 0.0201\r
vn 0.8530 -0.3011 0.4264\r
vn 0.5376 0.0940 0.8379\r
vn 0.5362 0.0039 0.8441\r
vn 0.0385 -0.7547 0.6549\r
vn -0.3768 -0.3051 0.8746\r
vn 0.0865 -0.4726 0.8770\r
vn -0.7057 -0.4556 0.5425\r
vn 0.1403 -0.8427 0.5198\r
vn 0.0438 -0.9982 -0.0411\r
vn -0.1922 -0.9329 0.3045\r
vn 0.6352 -0.1631 0.7549\r
vn 0.4275 -0.4482 -0.7851\r
vn -0.1135 -0.9863 0.1197\r
vn 0.2890 -0.3265 -0.8999\r
vn -0.9418 0.3278 -0.0742\r
vn 0.9069 0.4069 0.1093\r
vn 0.9124 0.3945 0.1090\r
vn 0.7635 0.6375 0.1038\r
vn -0.3517 -0.8829 -0.3110\r
vn -0.9660 0.2323 0.1131\r
vn -0.8395 -0.5424 0.0308\r
vn -0.2585 -0.9497 -0.1766\r
vn -0.0871 -0.9951 0.0474\r
vn 0.8204 0.5683 0.0631\r
vn -0.1259 -0.9516 -0.2802\r
vn 0.6538 -0.7520 -0.0840\r
vn 0.6706 -0.7279 -0.1430\r
vn 0.5943 -0.8032 0.0404\r
vn 0.9244 -0.3774 0.0555\r
vn 0.9515 -0.3022 -0.0577\r
vn 0.9951 -0.0185 0.0970\r
vn 0.5331 -0.8167 -0.2211\r
vn -0.9971 0.0631 0.0431\r
vn -0.9737 -0.2277 -0.0005\r
vn 0.7617 -0.6317 -0.1442\r
vn 0.7986 -0.5944 0.0943\r
vn 0.8316 -0.5426 -0.1181\r
vn -0.9667 -0.2001 0.1594\r
vn -0.5359 -0.7505 0.3868\r
vn -0.8057 -0.5858 0.0877\r
vn -0.6029 -0.7854 0.1406\r
vn 0.7685 0.6372 -0.0572\r
vn -0.5842 -0.4828 0.6525\r
vn 0.4381 -0.8765 0.1996\r
vn 0.0531 -0.9981 0.0300\r
vn -0.0936 -0.1014 0.9904\r
vn 0.9997 0.0250 0.0014\r
vn 0.5482 0.7418 -0.3862\r
vn -0.0738 -0.8822 -0.4651\r
vn -0.6675 -0.6457 -0.3707\r
vn -0.8866 -0.3083 0.3448\r
vn 0.5051 0.1079 -0.8563\r
vn 0.3650 -0.5233 -0.7700\r
vn 0.8113 0.1681 -0.5599\r
vn 0.5710 -0.0243 -0.8206\r
vn 0.9265 -0.2983 -0.2295\r
vn 0.5541 0.5482 -0.6265\r
vn 0.1953 -0.9643 -0.1788\r
vn -0.2960 -0.8477 0.4402\r
vn 0.1255 -0.3305 0.9354\r
vn 0.1430 0.9890 -0.0382\r
vn 0.0898 0.7366 0.6703\r
vn -0.9420 0.1698 -0.2895\r
vn 0.9433 0.2253 -0.2437\r
vn 0.8082 0.5687 -0.1528\r
vn 0.9539 -0.1251 0.2730\r
vn 0.9130 -0.3311 0.2385\r
vn -0.5363 -0.0128 0.8439\r
vn 0.3470 -0.3120 0.8844\r
vn -0.6330 0.3197 0.7050\r
vn 0.3358 0.3581 0.8712\r
vn -0.8063 -0.4049 0.4312\r
vn 0.8834 0.4566 0.1051\r
vn 0.9292 0.3657 0.0540\r
vn 0.0536 -0.6987 -0.7134\r
vn 0.4544 -0.6515 -0.6075\r
vn 0.7571 0.6518 0.0448\r
vn 0.9546 0.2889 0.0728\r
vn 0.8603 -0.4941 0.1255\r
vn 0.8281 -0.5371 0.1603\r
vn -0.7996 -0.5987 0.0472\r
vn -0.6722 -0.7353 -0.0869\r
vn 0.0871 -0.9958 0.0271\r
vn -0.2312 -0.9706 0.0664\r
vn 0.7476 -0.6641 -0.0109\r
vn -0.5172 -0.4986 0.6957\r
vn -0.8112 -0.5278 0.2517\r
vn -0.9533 -0.1544 -0.2596\r
vn 0.9478 -0.3111 0.0700\r
vn -0.9796 -0.1398 -0.1441\r
vn -0.4442 -0.1240 -0.8873\r
vn 0.7472 0.6133 -0.2560\r
vn -0.2580 -0.1297 -0.9574\r
vn 0.9607 0.0344 -0.2754\r
vn 0.8010 0.0337 -0.5977\r
vn -0.2145 -0.5894 0.7789\r
vn 0.5082 -0.8424 0.1790\r
vn 0.9584 -0.2722 0.0858\r
vn 0.7974 0.2156 0.5636\r
vn -0.9656 -0.1964 0.1703\r
vn -0.9178 0.0151 0.3968\r
vn -0.9686 -0.1398 0.2058\r
vn -0.3973 -0.9132 0.0908\r
vn -0.3125 0.6209 -0.7189\r
vn -0.7958 -0.4810 0.3680\r
vn 0.9190 0.2850 0.2725\r
vn 0.7409 0.1502 0.6547\r
vn 0.9153 0.3463 0.2058\r
vn 0.9327 0.3603 -0.0165\r
vn 0.2249 -0.9631 -0.1480\r
vn 0.9693 -0.2375 0.0634\r
vn 0.9973 0.0694 -0.0226\r
vn 0.5086 -0.8049 0.3055\r
vn -0.5853 -0.3506 0.7311\r
vn 0.5975 0.1704 -0.7835\r
vn 0.6795 0.0137 -0.7335\r
vn -0.8025 -0.1946 -0.5640\r
vn 0.9956 0.0920 0.0201\r
vn 0.9385 0.2793 0.2029\r
vn -0.9358 0.3351 0.1094\r
vn -0.9905 0.0849 0.1085\r
vn -0.6868 0.1973 -0.6995\r
vn -0.5068 0.0782 -0.8585\r
vn 0.0987 -0.0215 -0.9949\r
vn -0.8297 0.5581 -0.0038\r
vn -0.6865 0.3347 -0.6456\r
vn -0.2829 -0.5793 -0.7644\r
vn -0.8643 -0.4057 -0.2974\r
vn 0.0837 0.0316 -0.9960\r
vn 0.6753 0.5684 0.4700\r
vn 0.9912 0.1060 -0.0797\r
vn 0.9863 -0.0886 0.1392\r
vn 0.8592 0.0059 0.5116\r
vn 0.1234 -0.2574 0.9584\r
vn 0.9207 0.3802 0.0883\r
vn 0.7807 0.5982 0.1808\r
vn 0.8339 -0.5440 -0.0938\r
vn 0.7956 0.1700 -0.5815\r
vn 0.7762 -0.6297 -0.0309\r
vn 0.7668 -0.6410 -0.0320\r
vn 0.2138 -0.8720 0.4404\r
vn 0.7157 -0.6713 -0.1927\r
vn -0.2477 -0.9057 -0.3439\r
vn -0.7522 -0.6511 -0.1012\r
vn 0.6777 -0.7169 -0.1636\r
vn 0.8886 -0.4212 -0.1815\r
vn -0.6732 0.0390 0.7384\r
vn 0.7591 -0.2597 0.5969\r
vn 0.6893 -0.3194 0.6503\r
vn 0.9440 0.3231 0.0667\r
vn 0.9297 0.3682 -0.0098\r
vn 0.7324 -0.6255 0.2688\r
vn 0.8453 -0.5331 -0.0356\r
vn 0.3359 0.0238 -0.9416\r
vn 0.2328 -0.0353 0.9719\r
vn -0.8588 -0.4097 -0.3076\r
vn -0.2869 -0.4942 -0.8206\r
vn 0.5344 0.7865 -0.3095\r
vt 0.672195 0.331569\r
vt 0.690887 0.327396\r
vt 0.673340 0.366481\r
vt 0.715450 0.339567\r
vt 0.633286 0.368699\r
vt 0.691180 0.871403\r
vt 0.749382 0.922895\r
vt 0.734005 0.926577\r
vt 0.475673 0.230874\r
vt 0.434041 0.230874\r
vt 0.455844 0.170752\r
vt 0.580646 0.381820\r
vt 0.617147 0.342011\r
vt 0.548840 0.355029\r
vt 0.575324 0.324323\r
vt 0.597220 0.307140\r
vt 0.650999 0.318778\r
vt 0.544314 0.316915\r
vt 0.521760 0.323927\r
vt 0.541359 0.240592\r
vt 0.556078 0.273584\r
vt 0.541378 0.271149\r
vt 0.562498 0.301742\r
vt 0.531537 0.294523\r
vt 0.925630 0.302032\r
vt 0.887677 0.257948\r
vt 0.916782 0.251351\r
vt 0.841180 0.070692\r
vt 0.837331 0.040182\r
vt 0.843584 0.041490\r
vt 0.855135 0.081084\r
vt 0.951141 0.258943\r
vt 0.955689 0.289136\r
vt 0.880865 0.287745\r
vt 0.858133 0.308725\r
vt 0.859869 0.286758\r
vt 0.959217 0.313233\r
vt 0.894461 0.280959\r
vt 0.902845 0.347999\r
vt 0.883674 0.318396\r
vt 0.934094 0.354108\r
vt 0.830967 0.397501\r
vt 0.841622 0.348640\r
vt 0.874248 0.362029\r
vt 0.913824 0.462452\r
vt 0.882021 0.424670\r
vt 0.943210 0.472866\r
vt 0.846043 0.434727\r
vt 0.892704 0.101547\r
vt 0.883696 0.105802\r
vt 0.896834 0.041835\r
vt 0.872208 0.042292\r
vt 0.853162 0.464771\r
vt 0.678930 0.873657\r
vt 0.670802 0.890279\r
vt 0.615368 0.874930\r
vt 0.862235 0.490999\r
vt 0.877403 0.514738\r
vt 0.823657 0.515970\r
vt 0.906319 0.533293\r
vt 0.867860 0.567156\r
vt 0.813344 0.600316\r
vt 0.927914 0.625347\r
vt 0.872010 0.669275\r
vt 0.953642 0.626275\r
vt 0.822721 0.670436\r
vt 0.949144 0.734638\r
vt 0.914616 0.726465\r
vt 0.296254 0.015886\r
vt 0.280517 0.047515\r
vt 0.246305 0.027678\r
vt 0.822715 0.738737\r
vt 0.864764 0.753964\r
vt 0.795390 0.806881\r
vt 0.772809 0.740956\r
vt 0.972742 0.747303\r
vt 0.960335 0.862413\r
vt 0.878210 0.822054\r
vt 0.445151 0.049646\r
vt 0.402524 0.014659\r
vt 0.470310 0.005583\r
vt 0.029426 0.001567\r
vt 0.001507 0.027733\r
vt 0.011827 0.009802\r
vt 0.719671 0.001509\r
vt 0.775412 0.017975\r
vt 0.727267 0.028004\r
vt 0.910174 0.923389\r
vt 0.855557 0.926693\r
vt 0.884220 0.884810\r
vt 0.809241 0.005810\r
vt 0.807394 0.029674\r
vt 0.559253 0.155742\r
vt 0.562168 0.196335\r
vt 0.519882 0.159427\r
vt 0.692328 0.057688\r
vt 0.715020 0.109735\r
vt 0.686155 0.105241\r
vt 0.508532 0.017414\r
vt 0.484662 0.011596\r
vt 0.508532 0.001754\r
vt 0.483791 0.005523\r
vt 0.733447 0.062090\r
vt 0.967616 0.913485\r
vt 0.944694 0.973919\r
vt 0.928023 0.942040\r
vt 0.965641 0.567388\r
vt 0.989157 0.567661\r
vt 0.998405 0.583727\r
vt 0.205636 0.003234\r
vt 0.242955 0.001581\r
vt 0.242957 0.019597\r
vt 0.990445 0.001754\r
vt 0.994558 0.011512\r
vt 0.947941 0.011512\r
vt 0.977501 0.530315\r
vt 0.974026 0.469890\r
vt 0.736205 0.504363\r
vt 0.743056 0.531202\r
vt 0.719672 0.512346\r
vt 0.715220 0.284964\r
vt 0.676323 0.274134\r
vt 0.674560 0.250650\r
vt 0.732439 0.563102\r
vt 0.691336 0.521727\r
vt 0.663199 0.572761\r
vt 0.515546 0.360896\r
vt 0.532794 0.391895\r
vt 0.117097 0.052029\r
vt 0.108280 0.072881\r
vt 0.093206 0.083144\r
vt 0.741539 0.259404\r
vt 0.769825 0.278455\r
vt 0.824285 0.372666\r
vt 0.798468 0.390213\r
vt 0.767728 0.353231\r
vt 0.525284 0.043516\r
vt 0.518049 0.032226\r
vt 0.535326 0.029254\r
vt 0.755375 0.661267\r
vt 0.754617 0.717178\r
vt 0.742861 0.690872\r
vt 0.795849 0.622922\r
vt 0.808363 0.307354\r
vt 0.828795 0.290219\r
vt 0.846716 0.322097\r
vt 0.936083 0.056801\r
vt 0.937550 0.131386\r
vt 0.896160 0.110566\r
vt 0.630975 0.745509\r
vt 0.597546 0.740719\r
vt 0.590873 0.691729\r
vt 0.698526 0.679264\r
vt 0.689427 0.724720\r
vt 0.639861 0.697444\r
vt 0.620354 0.659548\r
vt 0.662999 0.665501\r
vt 0.470184 0.260964\r
vt 0.459162 0.291712\r
vt 0.438247 0.264019\r
vt 0.378422 0.275219\r
vt 0.403249 0.362631\r
vt 0.463439 0.392172\r
vt 0.401364 0.389435\r
vt 0.043047 0.099102\r
vt 0.028792 0.150929\r
vt 0.005619 0.113609\r
vt 0.068859 0.764731\r
vt 0.089885 0.771091\r
vt 0.057410 0.796789\r
vt 0.616648 0.606537\r
vt 0.649234 0.643303\r
vt 0.048281 0.341762\r
vt 0.066591 0.345054\r
vt 0.054282 0.395355\r
vt 0.262298 0.963426\r
vt 0.260196 0.975247\r
vt 0.192202 0.959080\r
vt 0.194414 0.983417\r
vt 0.041374 0.212977\r
vt 0.058561 0.284841\r
vt 0.049611 0.287220\r
vt 0.052523 0.823980\r
vt 0.044818 0.797614\r
vt 0.086109 0.809590\r
vt 0.024430 0.805787\r
vt 0.749289 0.964965\r
vt 0.783791 0.950329\r
vt 0.805556 0.966573\r
vt 0.786818 0.933297\r
vt 0.759557 0.949812\r
vt 0.746725 0.941433\r
vt 0.153566 0.793376\r
vt 0.147151 0.813114\r
vt 0.505783 0.480912\r
vt 0.462982 0.435891\r
vt 0.510309 0.439213\r
vt 0.824006 0.955642\r
vt 0.830554 0.981350\r
vt 0.073459 0.130799\r
vt 0.083307 0.093304\r
vt 0.476638 0.731365\r
vt 0.450274 0.729190\r
vt 0.456936 0.693366\r
vt 0.110830 0.004128\r
vt 0.110794 0.047828\r
vt 0.067155 0.053929\r
vt 0.316532 0.658507\r
vt 0.353652 0.661134\r
vt 0.301906 0.685521\r
vt 0.344438 0.695107\r
vt 0.160717 0.700840\r
vt 0.212109 0.727913\r
vt 0.140888 0.722561\r
vt 0.223707 0.771723\r
vt 0.165042 0.777408\r
vt 0.150498 0.097424\r
vt 0.153852 0.153794\r
vt 0.113893 0.127909\r
vt 0.166630 0.815190\r
vt 0.221483 0.828810\r
vt 0.191210 0.844041\r
vt 0.376957 0.615052\r
vt 0.343017 0.588029\r
vt 0.377775 0.578145\r
vt 0.204225 0.061813\r
vt 0.268439 0.094290\r
vt 0.188024 0.111167\r
vt 0.308236 0.634362\r
vt 0.262840 0.146979\r
vt 0.212934 0.154868\r
vt 0.299874 0.568493\r
vt 0.302329 0.603133\r
vt 0.312362 0.414122\r
vt 0.341858 0.459988\r
vt 0.234651 0.470272\r
vt 0.294950 0.831533\r
vt 0.280957 0.788940\r
vt 0.371862 0.798383\r
vt 0.794859 0.700690\r
vt 0.787100 0.651026\r
vt 0.325799 0.148941\r
vt 0.361511 0.189986\r
vt 0.311529 0.202844\r
vt 0.351205 0.217666\r
vt 0.374348 0.231809\r
vt 0.362349 0.246218\r
vt 0.033853 0.585472\r
vt 0.039748 0.600636\r
vt 0.019022 0.592335\r
vt 0.076278 0.402434\r
vt 0.142218 0.456934\r
vt 0.088906 0.454691\r
vt 0.448536 0.088992\r
vt 0.471951 0.139058\r
vt 0.434603 0.121856\r
vt 0.515124 0.878528\r
vt 0.484875 0.886626\r
vt 0.498538 0.850940\r
vt 0.372800 0.962217\r
vt 0.313577 0.976230\r
vt 0.306857 0.942506\r
vt 0.530402 0.901084\r
vt 0.494776 0.929043\r
vt 0.156921 0.368854\r
vt 0.149931 0.357125\r
vt 0.229019 0.357340\r
vt 0.373973 0.304821\r
vt 0.387780 0.329217\r
vt 0.323020 0.291805\r
vt 0.746217 0.410674\r
vt 0.739532 0.426634\r
vt 0.661063 0.392806\r
vt 0.086333 0.057917\r
vt 0.090105 0.078260\r
vt 0.063896 0.057917\r
vt 0.800669 0.874408\r
vt 0.411677 0.315027\r
vt 0.449615 0.312310\r
vt 0.453124 0.340200\r
vt 0.509989 0.114094\r
vt 0.483520 0.074249\r
vt 0.517121 0.035776\r
vt 0.755215 0.089731\r
vt 0.785230 0.062298\r
vt 0.661718 0.418674\r
vt 0.663016 0.400016\r
vt 0.833691 0.212357\r
vt 0.837725 0.195185\r
vt 0.925415 0.214661\r
vt 0.926680 0.194515\r
vt 0.414085 0.357630\r
vt 0.667515 0.175689\r
vt 0.721013 0.177534\r
vt 0.699991 0.235238\r
vt 0.574428 0.059701\r
vt 0.543870 0.045948\r
vt 0.605325 0.002710\r
vt 0.627491 0.052563\r
vt 0.652282 0.004413\r
vt 0.542673 0.110060\r
vt 0.343582 0.398578\r
vt 0.264695 0.400027\r
vt 0.353912 0.386154\r
vt 0.261907 0.387747\r
vt 0.205101 0.392344\r
vt 0.254457 0.410544\r
vt 0.194489 0.410295\r
vt 0.995356 0.330380\r
vt 0.983972 0.376182\r
vt 0.959169 0.341700\r
vt 0.677767 0.392002\r
vt 0.775485 0.520618\r
vt 0.812477 0.572513\r
vt 0.740759 0.767116\r
vt 0.760727 0.830893\r
vt 0.702141 0.785770\r
vt 0.719539 0.645404\r
vt 0.686308 0.626390\r
vt 0.715762 0.614516\r
vt 0.701211 0.644272\r
vt 0.731166 0.340205\r
vt 0.670827 0.303481\r
vt 0.855406 0.956370\r
vt 0.873445 0.930208\r
vt 0.898781 0.948688\r
vt 0.644985 0.513005\r
vt 0.655493 0.477267\r
vt 0.681115 0.483324\r
vt 0.636968 0.439121\r
vt 0.655438 0.447813\r
vt 0.644118 0.460729\r
vt 0.621081 0.598998\r
vt 0.591710 0.587362\r
vt 0.605925 0.544044\r
vt 0.601848 0.781238\r
vt 0.563564 0.606745\r
vt 0.589441 0.624032\r
vt 0.584761 0.637204\r
vt 0.001513 0.819026\r
vt 0.017786 0.836570\r
vt 0.002402 0.847258\r
vt 0.447588 0.241788\r
vt 0.461993 0.643612\r
vt 0.509893 0.642384\r
vt 0.490544 0.681854\r
vt 0.257821 0.673628\r
vt 0.188411 0.678226\r
vt 0.257686 0.661422\r
vt 0.102953 0.195725\r
vt 0.069821 0.272034\r
vt 0.073706 0.181382\r
vt 0.387829 0.244740\r
vt 0.394596 0.218256\r
vt 0.421869 0.244740\r
vt 0.311209 0.640794\r
vt 0.584425 0.951130\r
vt 0.628744 0.959045\r
vt 0.594112 0.979336\r
vt 0.539010 0.957951\r
vt 0.421584 0.618360\r
vt 0.418411 0.661853\r
vt 0.160766 0.888924\r
vt 0.212720 0.875469\r
vt 0.261818 0.757840\r
vt 0.205315 0.230593\r
vt 0.142215 0.228342\r
vt 0.152069 0.196787\r
vt 0.249084 0.056350\r
vt 0.452502 0.760814\r
vt 0.424729 0.767740\r
vt 0.444236 0.742651\r
vt 0.215167 0.524467\r
vt 0.150086 0.520041\r
vt 0.477049 0.775248\r
vt 0.465765 0.739686\r
vt 0.496888 0.753425\r
vt 0.134036 0.576998\r
vt 0.078962 0.552825\r
vt 0.462447 0.316831\r
vt 0.479944 0.292050\r
vt 0.261230 0.345892\r
vt 0.290955 0.317330\r
vt 0.314408 0.327591\r
vt 0.075622 0.358172\r
vt 0.148309 0.345282\r
vt 0.023102 0.309697\r
vt 0.037000 0.387835\r
vt 0.020145 0.344477\r
vt 0.462032 0.957838\r
vt 0.539852 0.976402\r
vt 0.464260 0.970734\r
vt 0.824213 0.392727\r
vt 0.824046 0.408999\r
vt 0.334684 0.928363\r
vt 0.367624 0.943603\r
vt 0.217363 0.345254\r
vt 0.128621 0.371651\r
vt 0.034393 0.658411\r
vt 0.053970 0.609765\r
vt 0.082046 0.662619\r
vt 0.001512 0.383739\r
vt 0.059560 0.881591\r
vt 0.009035 0.897560\r
vt 0.021305 0.840167\r
vt 0.001633 0.869953\r
vt 0.751291 0.173824\r
vt 0.752881 0.138379\r
vt 0.784973 0.166665\r
vt 0.017263 0.552021\r
vt 0.034785 0.523240\r
vt 0.715463 0.916934\r
vt 0.705890 0.948062\r
vt 0.672113 0.948062\r
vt 0.802213 0.202143\r
vt 0.620981 0.218537\r
vt 0.805597 0.226220\r
vt 0.772442 0.216471\r
vt 0.760491 0.192557\r
vt 0.605516 0.170519\r
vt 0.614256 0.107204\r
vt 0.649068 0.108481\r
vt 0.998278 0.320085\r
vt 0.959499 0.319818\r
vt 0.589614 0.286161\r
vt 0.588537 0.249457\r
vt 0.620981 0.252512\r
vt 0.751786 0.872367\r
vt 0.722999 0.843834\r
vt 0.680299 0.653201\r
vt 0.840612 0.965349\r
vt 0.861785 0.973485\r
vt 0.976739 0.272547\r
vt 0.829179 0.930208\r
vt 0.621942 0.828602\r
vt 0.598353 0.823908\r
vt 0.562201 0.581524\r
vt 0.550110 0.642196\r
vt 0.076851 0.966814\r
vt 0.065189 0.930733\r
vt 0.099213 0.930671\r
vt 0.121100 0.909180\r
vt 0.148312 0.938648\r
vt 0.254565 0.306985\r
vt 0.205307 0.284108\r
vt 0.237846 0.281790\r
vt 0.472898 0.237527\r
vt 0.039873 0.748711\r
vt 0.085241 0.728742\r
vt 0.813976 0.162245\r
vt 0.787428 0.162238\r
vt 0.803230 0.136557\r
vt 0.024045 0.150035\r
vt 0.001509 0.161039\r
vt 0.001506 0.136721\r
vt 0.003009 0.683076\r
vt 0.011605 0.659137\r
vt 0.026499 0.680811\r
vt 0.522703 0.689397\r
vt 0.099334 0.825118\r
vt 0.848088 0.264105\r
vt 0.848088 0.217188\r
vt 0.880548 0.219608\r
vt 0.942677 0.121506\r
vt 0.939754 0.093719\r
vt 0.956250 0.070002\r
vt 0.881277 0.180869\r
vt 0.830109 0.187267\r
vt 0.867586 0.169909\r
vt 0.288552 0.670855\r
vt 0.866807 0.079492\r
vt 0.850528 0.055215\r
vt 0.866807 0.042060\r
vt 0.817629 0.451534\r
vt 0.774756 0.472746\r
vt 0.327788 0.633253\r
vt 0.114360 0.076870\r
vt 0.446014 0.529118\r
vt 0.378327 0.536617\r
vt 0.441909 0.483609\r
vt 0.110412 0.220287\r
vt 0.195780 0.001526\r
vt 0.148979 0.047216\r
vt 0.193740 0.185564\r
vt 0.334647 0.719122\r
vt 0.281234 0.725446\r
vt 0.266862 0.692514\r
vt 0.299238 0.515100\r
vt 0.379846 0.257354\r
vt 0.411861 0.816242\r
vt 0.410073 0.846069\r
vt 0.372264 0.833518\r
vt 0.237122 0.656008\r
vt 0.186584 0.637367\r
vt 0.246914 0.612213\r
vt 0.039748 0.556369\r
vt 0.010089 0.571999\r
vt 0.393554 0.049292\r
vt 0.354521 0.087343\r
vt 0.336280 0.039509\r
vt 0.412549 0.875247\r
vt 0.443556 0.896009\r
vt 0.391208 0.902166\r
vt 0.190378 0.429589\r
vt 0.412676 0.082193\r
vt 0.425796 0.156343\r
vt 0.397859 0.123564\r
vt 0.426392 0.171837\r
vt 0.444509 0.182469\r
vt 0.437294 0.212982\r
vt 0.102610 0.498667\r
vt 0.466697 0.184412\r
vt 0.542905 0.732291\r
vt 0.520130 0.781425\r
vt 0.534799 0.954471\r
vt 0.091553 0.607787\r
vt 0.487976 0.934598\r
vt 0.961146 0.140160\r
vt 0.924180 0.169511\r
vt 0.955873 0.135113\r
vt 0.030272 0.451350\r
vt 0.024883 0.410720\r
vt 0.539941 0.795922\r
vt 0.551408 0.829595\r
vt 0.526539 0.814359\r
vt 0.780405 0.104829\r
vt 0.044105 0.897560\r
vt 0.527915 0.218839\r
vt 0.511383 0.248823\r
vt 0.496636 0.218132\r
vt 0.792528 0.445417\r
vt 0.819453 0.429181\r
vt 0.805194 0.453171\r
vt 0.994574 0.172706\r
vt 0.990687 0.193444\r
vt 0.931837 0.191258\r
vt 0.311686 0.004308\r
vt 0.331285 0.015218\r
vt 0.308224 0.019309\r
vt 0.877290 0.003528\r
vt 0.874392 0.014970\r
vt 0.817131 0.008345\r
vt 0.918732 0.008096\r
vt 0.653293 0.270223\r
vt 0.582803 0.257878\r
vt 0.553793 0.221620\r
vt 0.521605 0.023974\r
vt 0.511569 0.001626\r
vt 0.533959 0.016755\r
vt 0.531868 0.002562\r
vt 0.572299 0.001517\r
vt 0.581918 0.757312\r
vt 0.622867 0.480363\r
vt 0.571334 0.468260\r
vt 0.741207 0.445504\r
vt 0.758744 0.458087\r
vt 0.736307 0.480073\r
vt 0.766264 0.482464\r
vt 0.109489 0.288367\r
vt 0.148775 0.261624\r
vt 0.150719 0.303020\r
vt 0.161581 0.968745\r
vt 0.126524 0.983417\r
vt 0.194816 0.237297\r
vt 0.255878 0.250668\r
vt 0.280959 0.919244\r
vt 0.299536 0.918233\r
vt 0.263553 0.943093\r
vt 0.294548 0.948985\r
vt 0.023045 0.075562\r
vt 0.183902 0.927011\r
vt 0.039209 0.226526\r
vt 0.044732 0.256274\r
vt 0.003695 0.222317\r
vt 0.210843 0.944248\r
vt 0.497249 0.748735\r
vt 0.905361 0.187233\r
vt 0.893146 0.156528\r
vt 0.869511 0.112651\r
vt 0.024169 0.638551\r
vt 0.492093 0.533642\r
vt 0.457911 0.565837\r
vt 0.605980 0.948031\r
vt 0.378086 0.694498\r
vt 0.359202 0.719705\r
vt 0.354708 0.680558\r
vt 0.393899 0.479962\r
vt 0.117436 0.196727\r
vt 0.415665 0.576213\r
vt 0.268695 0.911283\r
vt 0.248835 0.858508\r
vt 0.304411 0.881885\r
vt 0.253563 0.187577\r
vt 0.262854 0.221323\r
vt 0.378515 0.765254\r
vt 0.386334 0.741522\r
vt 0.361099 0.869727\r
vt 0.406293 0.204338\r
vt 0.457950 0.813754\r
vt 0.497477 0.815884\r
vt 0.040656 0.300318\r
vt 0.040656 0.273731\r
vt 0.045637 0.286133\r
vt 0.081134 0.004381\r
vt 0.102835 0.006248\r
vt 0.063458 0.045625\r
vt 0.484445 0.111312\r
vt 0.961060 0.165653\r
vt 0.556683 0.737852\r
vt 0.502495 0.182524\r
vt 0.498120 0.323574\r
vt 0.512494 0.335822\r
vt 0.001512 0.318484\r
vt 0.003666 0.229400\r
vt 0.024104 0.243754\r
vt 0.982768 0.212649\r
vt 0.995523 0.228709\r
vt 0.053111 0.497262\r
vt 0.008572 0.479313\r
vt 0.766730 0.044556\r
vt 0.788418 0.004194\r
vt 0.985613 0.635312\r
vt 0.983227 0.689104\r
vt 0.974175 0.637669\r
vt 0.984742 0.591774\r
vt 0.991578 0.122496\r
vt 0.996965 0.153147\r
vt 0.991578 0.158042\r
vt 0.621072 0.277103\r
vt 0.629313 0.309744\r
vt 0.728355 0.477093\r
vt 0.711680 0.496150\r
vt 0.651437 0.812830\r
vt 0.645944 0.848703\r
vt 0.691717 0.831669\r
vt 0.001663 0.171295\r
vt 0.025901 0.152864\r
vt 0.025898 0.177578\r
vt 0.796170 0.343759\r
vt 0.833003 0.018169\r
vt 0.863007 0.017626\r
vt 0.893040 0.018169\r
vt 0.757092 0.379137\r
vt 0.727221 0.729493\r
vt 0.220865 0.923349\r
vt 0.156370 0.918233\r
vt 0.998359 0.090952\r
vt 0.991245 0.120046\r
vt 0.521748 0.561703\r
vt 0.528713 0.600261\r
vt 0.492367 0.594198\r
vt 0.077564 0.398488\r
vt 0.114116 0.763549\r
vt 0.098445 0.248570\r
vt 0.601990 0.928658\r
vt 0.448050 0.598987\r
vt 0.199261 0.910731\r
vt 0.319291 0.759837\r
vt 0.272940 0.245730\r
vt 0.515536 0.194910\r
vt 0.546100 0.194906\r
vt 0.539507 0.230743\r
vt 0.340867 0.909614\r
vt 0.440436 0.943776\r
vt 0.388325 0.934452\r
vt 0.133586 0.623724\r
vt 0.184127 0.597406\r
vt 0.363960 0.380594\r
vt 0.302589 0.363884\r
vt 0.338247 0.342481\r
vt 0.473130 0.857299\r
vt 0.077790 0.380566\r
vt 0.520046 0.728949\r
vt 0.543557 0.693112\r
vt 0.406632 0.950551\r
vt 0.464534 0.944998\r
vt 0.513869 0.104967\r
vt 0.520898 0.078188\r
vt 0.536458 0.104967\r
vt 0.303257 0.001721\r
vt 0.303257 0.016308\r
vt 0.280890 0.004667\r
vt 0.840657 0.025765\r
vt 0.363274 0.003815\r
vt 0.349839 0.021757\r
vt 0.952107 0.557691\r
vt 0.956154 0.532853\r
vt 0.959384 0.480200\r
vt 0.986168 0.723627\r
vt 0.775741 0.915610\r
vt 0.795943 0.877805\r
vt 0.632417 0.865147\r
vt 0.556957 0.201038\r
vt 0.587033 0.233933\r
vt 0.519548 0.042077\r
vt 0.531374 0.054300\r
vt 0.519548 0.073094\r
vt 0.863025 0.259654\r
vt 0.837096 0.104442\r
vt 0.854992 0.107338\r
vt 0.842137 0.143072\r
vt 0.719358 0.390126\r
vt 0.726329 0.375465\r
vt 0.743471 0.362634\r
vt 0.846754 0.282824\r
vt 0.569751 0.788464\r
vt 0.580463 0.812095\r
vt 0.849142 0.336139\r
vt 0.567529 0.735111\r
vt 0.569510 0.914752\r
vt 0.619034 0.885969\r
vt 0.674115 0.895466\r
vt 0.564080 0.895330\r
vt 0.096175 0.881581\r
vt 0.086930 0.850274\r
vt 0.106966 0.843076\r
vt 0.126624 0.657084\r
vt 0.149904 0.663765\r
vt 0.132509 0.678850\r
vt 0.834178 0.804186\r
vt 0.944879 0.048383\r
vt 0.994938 0.044464\r
vt 0.995727 0.070383\r
vt 0.142495 0.232337\r
vt 0.160464 0.249125\r
vt 0.142495 0.253209\r
vt 0.935829 0.028611\r
vt 0.930527 0.038571\r
vt 0.012628 0.080845\r
vt 0.006642 0.079864\r
vt 0.001515 0.062200\r
vt 0.001515 0.111507\r
vt 0.866267 0.119134\r
vt 0.854231 0.119394\r
vt 0.866261 0.082278\r
vt 0.342389 0.032880\r
vt 0.385910 0.401384\r
vt 0.349142 0.407984\r
vt 0.985268 0.437485\r
vt 0.726639 0.600329\r
vt 0.563309 0.201572\r
vt 0.646076 0.616064\r
vt 0.675685 0.603939\r
vt 0.829505 0.957634\r
vt 0.597533 0.501365\r
vt 0.644577 0.493397\r
vt 0.036436 0.919080\r
vt 0.037471 0.961339\r
vt 0.002872 0.943554\r
vt 0.475522 0.291782\r
vt 0.072774 0.275000\r
vt 0.110377 0.260154\r
vt 0.269679 0.275895\r
vt 0.545070 0.515462\r
vt 0.476392 0.490856\r
vt 0.530585 0.888506\r
vt 0.539251 0.864513\r
vt 0.559295 0.877260\r
vt 0.076560 0.798595\r
vt 0.833684 0.084992\r
vt 0.785188 0.089177\r
vt 0.796622 0.050934\r
vt 0.003009 0.627327\r
vt 0.220712 0.807444\r
vt 0.466092 0.411057\r
vt 0.424882 0.792438\r
vt 0.418672 0.777982\r
vt 0.431176 0.781557\r
vt 0.438931 0.769888\r
vt 0.392540 0.154529\r
vt 0.442950 0.857771\r
vt 0.485838 0.350780\r
vt 0.491510 0.397783\r
vt 0.464559 0.398676\r
vt 0.567869 0.709925\r
vt 0.883722 0.249566\r
vt 0.883725 0.217129\r
vt 0.912941 0.218265\r
vt 0.495430 0.256461\r
vt 0.921741 0.018776\r
vt 0.617150 0.234017\r
vt 0.863879 0.158139\r
vt 0.861955 0.167400\r
vt 0.831804 0.142771\r
vt 0.767456 0.597889\r
vt 0.686066 0.436731\r
vt 0.605668 0.846342\r
vt 0.093206 0.056875\r
vt 0.663363 0.426967\r
vt 0.670465 0.443811\r
vt 0.648198 0.402757\r
vt 0.624002 0.412021\r
vt 0.776215 0.443046\r
vt 0.707102 0.660375\r
vt 0.288378 0.964714\r
vt 0.535474 0.638138\r
vt 0.386719 0.260836\r
vt 0.328623 0.266969\r
vt 0.281584 0.287286\r
vt 0.006167 0.794189\r
vt 0.963491 0.132874\r
vt 0.235861 0.565692\r
vt 0.269098 0.016510\r
vt 0.276243 0.003574\r
vt 0.281583 0.016516\r
vt 0.857162 0.122446\r
vt 0.864121 0.139078\r
vt 0.846939 0.139078\r
vt 0.548145 0.674993\r
vt 0.582143 0.692795\r
vt 0.558728 0.690840\r
vt 0.178556 0.557905\r
vt 0.539652 0.936039\r
vt 0.815031 0.180301\r
vt 0.977714 0.935549\r
vt 0.835782 0.167398\r
vt 0.585182 0.283696\r
vt 0.915810 0.246406\r
vt 0.915810 0.219628\r
vt 0.946170 0.229132\r
vt 0.775260 0.321036\r
vt 0.749745 0.302842\r
vt 0.194464 0.316752\r
vt 0.983252 0.070002\r
vt 0.546667 0.562118\r
vt 0.924793 0.164359\r
vt 0.896160 0.154523\r
vt 0.328917 0.257937\r
vt 0.326949 0.277127\r
vt 0.430560 0.215235\r
vt 0.676811 0.952237\r
vt 0.673182 0.968534\r
vt 0.807812 0.928980\r
vt 0.375670 0.672235\r
vt 0.107348 0.702703\r
vt 0.151620 0.681021\r
vt 0.179904 0.659784\r
vt 0.133622 0.694627\r
vt 0.803271 0.126229\r
vt 0.834335 0.130425\r
vt 0.818589 0.165463\r
vt 0.073140 0.331287\r
vt 0.050775 0.691704\r
vt 0.309595 0.309065\r
vt 0.014818 0.595257\r
vt 0.794846 0.922483\r
vt 0.034263 0.721514\r
vt 0.972900 0.575926\r
vt 0.140516 0.374413\r
vt 0.160902 0.377360\r
vt 0.141791 0.384360\r
vt 0.927609 0.014970\r
vt 0.752794 0.350251\r
vt 0.754200 0.334624\r
vt 0.772689 0.342681\r
vt 0.577505 0.016773\r
vt 0.593074 0.003754\r
vt 0.845385 0.254853\r
vt 0.241709 0.333805\r
vt 0.533118 0.119802\r
vt 0.515274 0.127828\r
vt 0.515274 0.108528\r
vt 0.085305 0.899192\r
vt 0.063640 0.872838\r
vt 0.069218 0.853357\r
vt 0.415485 0.689102\r
vt 0.622756 0.940717\r
vt 0.582143 0.644412\r
vt 0.551278 0.649470\r
vt 0.293159 0.287775\r
vt 0.050478 0.837603\r
vt 0.063023 0.853345\r
vt 0.058792 0.018873\r
vt 0.060432 0.042375\r
vt 0.022217 0.069401\r
vt 0.981006 0.018347\r
vt 0.995515 0.017654\r
vt 0.846256 0.038841\r
vt 0.138382 0.234075\r
vt 0.138382 0.256153\r
vt 0.121395 0.255837\r
vt 0.137270 0.413807\r
vt 0.137667 0.408186\r
vt 0.068031 0.840998\r
vt 0.109276 0.826207\r
vt 0.109553 0.894870\r
vt 0.536892 0.915565\r
vt 0.316161 0.979854\r
vt 0.386715 0.659761\r
vt 0.358119 0.648778\r
vt 0.445441 0.354160\r
vt 0.463439 0.367511\r
vt 0.366500 0.017629\r
vt 0.366498 0.003602\r
vt 0.405963 0.005687\r
vt 0.941934 0.014772\r
vt 0.908858 0.001512\r
vt 0.952032 0.001512\r
vt 0.135758 0.840555\r
vt 0.069113 0.709239\r
vt 0.049969 0.056833\r
vt 0.973044 0.772820\r
vt 0.967831 0.384660\r
vt 0.809046 0.602437\r
vt 0.594271 0.435962\r
vt 0.585265 0.416147\r
vt 0.775008 0.242681\r
vt 0.690977 0.242681\r
vt 0.765592 0.221394\r
vt 0.440553 0.407597\r
vt 0.834307 0.040279\r
vt 0.581044 0.863877\r
vt 0.203683 0.694444\r
vt 0.325565 0.233530\r
vt 0.034297 0.084107\r
vt 0.088390 0.084107\r
vt 0.072176 0.091860\r
vt 0.526072 0.827795\r
vt 0.063456 0.001752\r
vt 0.036144 0.745064\r
vt 0.512637 0.398558\r
vt 0.982610 0.135664\r
vt 0.987907 0.169347\r
vt 0.527137 0.080861\r
vt 0.743973 0.604137\r
vt 0.658020 0.451216\r
vt 0.786780 0.249485\r
vt 0.908855 0.042572\r
vt 0.570942 0.553689\r
vt 0.586971 0.567081\r
vt 0.157893 0.890190\r
vt 0.413159 0.404663\r
vt 0.939454 0.075514\r
vt 0.939454 0.050714\r
vt 0.962530 0.061356\r
vt 0.108346 0.646516\r
vt 0.110104 0.667661\r
vt 0.111942 0.695348\r
vt 0.406305 0.003526\r
vt 0.428749 0.003526\r
vt 0.415685 0.009356\r
vt 0.670022 0.899980\r
vt 0.002391 0.436871\r
vt 0.785601 0.102473\r
vt 0.799076 0.126272\r
vt 0.785074 0.126272\r
vt 0.640027 0.628236\r
vt 0.067859 0.912888\r
vt 0.132861 0.316093\r
vt 0.826173 0.928274\r
vt 0.423770 0.733397\r
vt 0.441854 0.726145\r
vt 0.532151 0.666817\r
vt 0.027769 0.248128\r
vt 0.038276 0.269439\r
vt 0.027769 0.297374\r
vt 0.001507 0.058196\r
vt 0.074358 0.081090\r
vt 0.245877 0.023729\r
vt 0.246508 0.001512\r
vt 0.273611 0.001510\r
vt 0.020125 0.704887\r
vt 0.009660 0.741229\r
vt 0.390041 0.374857\r
vt 0.715406 0.383644\r
vt 0.315192 0.001513\r
vt 0.342503 0.001513\r
vt 0.326536 0.009182\r
vt 0.716375 0.442786\r
vt 0.001561 0.174224\r
vt 0.415485 0.669550\r
vt 0.368673 0.648486\r
vt 0.029265 0.079005\r
vt 0.521440 0.189704\r
s 1\r
usemtl Cow_Tris_Material\r
f 216/1/1 214/2/2 240/3/3\r
f 214/2/2 218/4/4 240/3/3\r
f 266/5/5 216/1/1 240/3/3\r
f 213/6/6 214/7/2 216/8/1\r
f 230/9/7 213/10/6 216/11/1\r
f 266/5/5 294/12/8 230/13/7\r
f 294/12/8 254/14/9 230/13/7\r
f 230/13/7 254/14/9 210/15/10\r
f 210/15/10 208/16/11 230/13/7\r
f 208/16/11 213/17/6 230/13/7\r
f 202/18/12 210/15/10 254/14/9\r
f 202/18/12 254/14/9 220/19/13\r
f 54/20/14 88/21/15 116/22/16\r
f 88/21/15 181/23/17 179/24/18\r
f 199/25/19 179/26/18 220/27/13\r
f 26/28/20 13/29/21 7/30/22\r
f 26/28/20 7/30/22 54/31/14\r
f 199/25/19 257/32/23 258/33/24\r
f 220/27/13 257/32/23 199/25/19\r
f 168/34/25 150/35/26 139/36/27\r
f 199/25/19 258/33/24 267/37/28\r
f 173/38/29 215/39/30 194/40/31\r
f 199/25/19 215/39/30 173/38/29\r
f 199/25/19 253/41/32 215/39/30\r
f 199/25/19 267/37/28 253/41/32\r
f 129/42/33 162/43/34 189/44/35\r
f 253/41/32 197/45/36 215/39/30\r
f 129/42/33 189/44/35 182/46/37\r
f 197/45/36 253/41/32 244/47/38\r
f 147/48/39 129/42/33 182/46/37\r
f 410/49/40 396/50/41 394/51/42\r
f 370/52/43 394/51/42 396/50/41\r
f 182/46/37 104/53/44 147/48/39\r
f 437/54/45 441/55/46 425/56/47\r
f 132/57/48 128/58/49 78/59/50\r
f 244/47/38 178/60/51 197/45/36\r
f 128/58/49 178/60/51 124/61/52\r
f 78/59/50 128/58/49 124/61/52\r
f 124/61/52 73/62/53 78/59/50\r
f 178/60/51 244/47/38 192/63/54\r
f 126/64/55 73/62/53 124/61/52\r
f 244/47/38 246/65/56 192/63/54\r
f 126/64/55 124/61/52 192/63/54\r
f 126/64/55 75/66/57 73/62/53\r
f 251/67/58 193/68/59 246/65/56\r
f 28/69/60 17/70/61 40/71/62\r
f 193/68/59 126/64/55 192/63/54\r
f 41/72/63 126/64/55 106/73/64\r
f 41/72/63 22/74/65 11/75/66\r
f 280/76/67 190/77/68 251/67/58\r
f 193/68/59 190/77/68 113/78/69\r
f 1/79/70 22/80/65 4/81/71\r
f 412/82/72 472/83/73 475/84/74\r
f 421/85/75 413/86/76 402/87/77\r
f 170/88/78 52/89/79 63/90/80\r
f 445/91/81 391/92/82 413/86/76\r
f 177/93/83 52/94/79 170/95/78\r
f 297/96/84 201/97/85 247/98/86\r
f 239/99/87 196/100/88 225/101/89\r
f 225/101/89 196/100/88 222/102/90\r
f 322/103/91 297/96/84 402/87/77\r
f 252/104/92 259/105/93 222/106/90\r
f 259/107/93 225/108/89 222/109/90\r
f 248/110/94 239/111/87 225/112/89\r
f 248/113/94 262/114/95 239/115/87\r
f 259/107/93 248/116/94 225/108/89\r
f 248/116/94 259/107/93 245/117/96\r
f 291/118/97 296/119/98 325/120/99\r
f 264/121/100 278/122/101 219/123/102\r
f 324/124/103 373/125/104 296/119/98\r
f 373/125/104 324/124/103 316/126/105\r
f 181/23/17 210/15/10 202/18/12\r
f 257/127/23 254/14/9 304/128/106\r
f 179/24/18 202/18/12 220/19/13\r
f 202/18/12 179/24/18 181/23/17\r
f 462/129/107 407/130/108 327/131/109\r
f 217/132/110 261/133/111 264/121/100\r
f 13/134/21 26/135/20 68/136/112\r
f 359/137/113 341/138/114 376/139/115\r
f 198/140/116 221/141/117 203/142/118\r
f 198/140/116 211/143/119 221/141/117\r
f 315/144/120 310/145/121 333/146/122\r
f 221/147/117 211/148/119 270/149/123\r
f 158/150/124 162/151/34 129/152/33\r
f 184/153/125 174/154/126 127/155/127\r
f 129/152/33 84/156/128 127/155/127\r
f 84/156/128 111/157/129 127/155/127\r
f 90/158/130 169/159/131 102/160/132\r
f 169/159/131 130/161/133 102/160/132\r
f 340/162/134 419/163/135 414/164/136\r
f 21/165/137 14/166/138 67/167/139\r
f 313/168/140 318/169/141 308/170/142\r
f 84/156/128 45/171/143 51/172/144\r
f 97/173/145 81/174/146 66/175/147\r
f 410/176/40 441/177/46 385/178/148\r
f 441/177/46 454/179/149 385/178/148\r
f 37/180/150 83/181/151 107/182/152\r
f 154/183/153 164/184/154 144/185/155\r
f 154/183/153 138/186/156 164/184/154\r
f 81/187/146 85/188/157 69/189/158\r
f 164/190/154 122/191/159 144/192/155\r
f 144/185/155 119/193/160 131/194/161\r
f 332/195/162 289/196/163 287/197/164\r
f 77/198/165 55/199/166 69/189/158\r
f 5/200/167 21/165/137 10/201/168\r
f 485/202/169 468/203/170 497/204/171\r
f 78/205/50 76/206/172 45/207/143\r
f 399/208/173 422/209/174 466/210/175\r
f 422/209/174 468/211/170 466/210/175\r
f 223/212/176 224/213/177 249/214/178\r
f 224/213/177 306/215/179 328/216/180\r
f 24/217/181 42/218/182 6/219/183\r
f 422/220/174 401/221/184 433/222/185\r
f 481/223/186 467/224/187 474/225/188\r
f 38/226/189 23/227/190 43/228/191\r
f 467/224/187 481/223/186 486/229/192\r
f 34/230/193 61/231/194 23/227/190\r
f 484/232/195 467/224/187 494/233/196\r
f 246/234/56 299/235/197 335/236/198\r
f 379/237/199 348/238/200 298/239/201\r
f 75/66/57 28/240/60 40/241/62\r
f 33/242/202 93/243/203 115/244/204\r
f 145/245/205 152/246/206 187/247/207\r
f 284/248/208 250/249/209 242/250/210\r
f 190/251/68 350/252/211 309/253/212\r
f 2/254/213 8/255/214 15/256/215\r
f 461/257/216 434/258/217 367/259/218\r
f 442/260/219 461/261/216 367/262/218\r
f 461/257/216 480/263/220 493/264/221\r
f 65/265/222 100/266/223 95/267/224\r
f 408/268/225 383/269/226 395/270/227\r
f 453/271/228 444/272/229 442/273/219\r
f 395/274/227 387/275/230 356/276/231\r
f 63/90/80 52/89/79 4/277/71\r
f 386/278/232 342/279/233 319/280/234\r
f 20/281/235 3/282/236 25/283/237\r
f 272/284/238 322/103/91 319/285/234\r
f 444/272/229 427/286/239 458/287/240\r
f 72/288/241 123/289/242 71/290/243\r
f 108/291/244 71/290/243 123/289/242\r
f 319/280/234 391/292/82 383/269/226\r
f 91/293/245 74/294/246 20/295/235\r
f 268/296/247 311/297/248 428/298/249\r
f 297/96/84 307/299/250 438/300/251\r
f 268/296/247 177/93/83 236/301/252\r
f 262/302/95 256/303/253 276/304/254\r
f 256/303/253 275/305/255 276/304/254\r
f 265/306/256 256/303/253 238/307/257\r
f 275/305/255 256/303/253 265/306/256\r
f 265/306/256 238/307/257 237/308/258\r
f 234/309/259 243/310/260 274/311/261\r
f 300/312/262 266/5/5 240/3/3\r
f 296/119/98 266/313/5 300/314/262\r
f 296/119/98 300/314/262 324/124/103\r
f 217/315/110 219/316/102 180/317/263\r
f 327/318/109 448/319/264 369/320/265\r
f 327/318/109 407/321/108 448/319/264\r
f 264/121/100 316/322/105 305/323/266\r
f 462/324/107 460/325/267 498/326/268\r
f 381/327/269 398/328/270 327/329/109\r
f 323/330/271 341/331/114 359/332/113\r
f 317/333/272 334/334/273 352/335/274\r
f 162/151/34 158/150/124 151/336/275\r
f 310/145/121 315/144/120 261/133/111\r
f 330/337/276 334/334/273 315/338/120\r
f 184/153/125 127/155/127 111/157/129\r
f 129/152/33 112/339/277 84/156/128\r
f 191/340/278 169/341/131 120/342/279\r
f 66/343/147 90/158/130 102/160/132\r
f 191/340/278 138/186/156 169/341/131\r
f 112/339/277 45/171/143 84/156/128\r
f 154/183/153 169/341/131 138/186/156\r
f 489/344/280 479/345/281 492/346/282\r
f 437/347/45 425/348/47 390/349/283\r
f 32/350/284 46/351/285 18/352/286\r
f 468/353/170 485/354/169 466/355/175\r
f 399/208/173 390/349/283 351/356/287\r
f 59/357/288 82/358/289 32/359/284\r
f 42/360/182 59/357/288 32/359/284\r
f 481/223/186 478/361/290 482/362/291\r
f 482/363/291 433/222/185 451/364/292\r
f 224/213/177 303/365/293 306/215/179\r
f 155/366/294 172/367/295 110/368/296\r
f 27/369/297 23/227/190 38/226/189\r
f 242/370/210 250/371/209 228/372/298\r
f 417/373/299 430/374/300 335/236/198\r
f 231/375/301 142/376/302 195/377/303\r
f 491/378/304 464/379/305 430/374/300\r
f 295/380/306 342/279/233 293/381/307\r
f 98/382/308 136/383/309 99/384/310\r
f 100/266/223 101/385/311 133/386/312\r
f 133/387/312 149/388/313 166/389/314\r
f 411/390/315 412/391/72 453/392/228\r
f 453/271/228 412/393/72 475/394/74\r
f 342/395/233 386/396/232 442/260/219\r
f 100/266/223 133/386/312 103/397/316\r
f 65/265/222 64/398/317 100/266/223\r
f 421/399/75 499/400/318 493/401/221\r
f 149/388/313 143/402/319 166/389/314\r
f 44/403/320 92/404/321 149/405/313\r
f 143/406/319 149/405/313 92/404/321\r
f 386/278/232 383/269/226 408/268/225\r
f 159/407/322 205/408/323 160/409/324\r
f 428/410/249 456/411/325 464/379/305\r
f 499/412/318 438/413/251 428/414/249\r
f 86/415/326 123/289/242 72/288/241\r
f 91/293/245 20/295/235 49/416/327\r
f 86/415/326 50/417/328 56/418/329\r
f 87/419/330 86/415/326 56/418/329\r
f 121/420/331 204/421/332 200/422/333\r
f 233/423/334 234/309/259 285/424/335\r
f 279/425/336 218/426/4 229/427/337\r
f 219/316/102 212/428/338 209/429/339\r
f 407/321/108 446/430/340 448/319/264\r
f 407/431/108 462/324/107 446/432/340\r
f 258/33/24 257/32/23 320/433/341\r
f 376/434/115 460/325/267 462/324/107\r
f 151/336/275 163/435/342 137/436/343\r
f 330/337/276 344/437/344 334/334/273\r
f 127/155/127 158/150/124 129/152/33\r
f 330/337/276 315/338/120 333/438/122\r
f 400/439/345 349/440/346 333/441/122\r
f 310/442/121 308/443/142 333/441/122\r
f 188/444/347 109/445/348 114/446/349\r
f 66/343/147 58/447/350 90/158/130\r
f 313/168/140 270/448/123 263/449/351\r
f 66/450/147 55/451/166 58/452/350\r
f 55/453/166 66/454/147 69/455/158\r
f 188/456/347 176/457/352 235/458/353\r
f 485/202/169 492/346/282 426/459/354\r
f 130/460/133 144/185/155 131/194/161\r
f 441/461/46 466/462/175 454/463/149\r
f 156/464/355 191/465/278 120/466/279\r
f 302/467/356 328/468/180 351/469/287\r
f 437/347/45 416/470/357 466/210/175\r
f 328/471/180 399/472/173 351/473/287\r
f 112/474/277 78/59/50 45/475/143\r
f 422/209/174 399/208/173 328/476/180\r
f 328/216/180 249/214/178 224/213/177\r
f 6/219/183 10/201/168 31/477/358\r
f 405/478/359 432/479/360 343/480/361\r
f 172/367/295 105/481/362 110/368/296\r
f 73/482/53 48/483/363 78/205/50\r
f 42/218/182 61/231/194 125/484/364\r
f 206/485/365 226/486/366 155/487/294\r
f 335/236/198 392/488/367 417/373/299\r
f 187/247/207 152/246/206 185/489/368\r
f 377/490/369 406/491/370 378/492/371\r
f 487/493/372 488/494/373 496/495/374\r
f 321/496/375 284/248/208 231/497/301\r
f 19/498/376 16/499/377 11/500/66\r
f 463/501/378 447/502/379 471/503/380\r
f 350/252/211 190/251/68 280/504/67\r
f 15/256/215 12/505/381 2/254/213\r
f 15/256/215 62/506/382 35/507/383\r
f 118/508/384 99/509/310 195/510/303\r
f 434/258/217 493/264/221 447/502/379\r
f 309/253/212 350/252/211 436/511/385\r
f 39/512/386 15/256/215 8/255/214\r
f 161/513/387 232/514/388 195/377/303\r
f 493/264/221 434/258/217 461/257/216\r
f 412/391/72 411/390/315 393/515/389\r
f 464/379/305 500/516/390 499/400/318\r
f 411/390/315 356/517/231 393/515/389\r
f 458/518/240 461/519/216 442/520/219\r
f 339/521/391 252/522/92 309/253/212\r
f 227/523/392 319/524/234 295/525/306\r
f 342/279/233 295/380/306 319/280/234\r
f 319/285/234 227/526/392 272/284/238\r
f 47/527/393 92/404/321 44/403/320\r
f 50/528/328 72/529/241 53/530/394\r
f 435/531/395 472/532/73 423/533/396\r
f 143/534/319 92/535/321 135/536/397\r
f 286/537/398 283/538/399 290/539/400\r
f 243/540/260 237/541/258 238/542/257\r
f 234/543/259 237/541/258 243/540/260\r
f 291/118/97 266/313/5 296/119/98\r
f 219/123/102 255/544/401 229/427/337\r
f 80/545/402 88/21/15 36/546/403\r
f 320/547/341 304/548/106 358/549/404\r
f 358/549/404 369/550/265 429/551/405\r
f 162/151/34 151/336/275 157/552/406\r
f 380/553/407 329/554/408 359/332/113\r
f 382/555/409 365/556/410 344/557/344\r
f 334/558/273 344/557/344 365/556/410\r
f 111/559/129 67/560/139 171/561/411\r
f 67/560/139 109/445/348 171/561/411\r
f 418/562/412 426/563/354 308/443/142\r
f 109/445/348 14/564/138 37/565/150\r
f 366/566/413 340/567/134 403/568/414\r
f 403/568/414 340/567/134 414/569/136\r
f 308/443/142 385/178/148 418/562/412\r
f 21/165/137 67/167/139 51/570/144\r
f 318/571/141 385/178/148 308/443/142\r
f 188/572/347 235/573/353 211/574/119\r
f 375/575/415 385/178/148 318/571/141\r
f 426/459/354 454/576/149 485/202/169\r
f 318/577/141 302/467/356 375/578/415\r
f 302/467/356 351/469/287 375/578/415\r
f 351/469/287 390/579/283 375/578/415\r
f 176/457/352 223/580/176 235/458/353\r
f 405/478/359 431/581/416 459/582/417\r
f 59/357/288 89/583/418 82/358/289\r
f 134/584/419 105/585/362 176/586/352\r
f 289/196/163 343/480/361 326/587/420\r
f 110/368/296 105/481/362 59/588/288\r
f 76/206/172 78/205/50 48/483/363\r
f 474/225/188 432/479/360 457/589/421\r
f 42/218/182 125/484/364 110/368/296\r
f 48/483/363 38/226/189 24/217/181\r
f 24/217/181 38/226/189 43/228/191\r
f 392/488/367 326/587/420 432/479/360\r
f 486/590/192 415/591/422 469/592/423\r
f 75/66/57 40/241/62 73/62/53\r
f 96/593/424 115/244/204 167/594/425\r
f 260/595/426 206/485/365 175/596/427\r
f 115/244/204 96/593/424 33/242/202\r
f 175/596/427 250/371/209 260/595/426\r
f 379/237/199 452/597/428 469/592/423\r
f 142/598/302 152/246/206 93/243/203\r
f 321/599/375 406/491/370 377/490/369\r
f 335/236/198 350/252/211 280/504/67\r
f 350/252/211 335/236/198 430/374/300\r
f 232/514/388 293/600/307 321/599/375\r
f 35/507/383 12/505/381 15/256/215\r
f 464/379/305 491/378/304 500/516/390\r
f 347/601/429 412/602/72 393/603/389\r
f 337/604/430 347/605/429 356/606/231\r
f 442/260/219 367/262/218 342/395/233\r
f 4/81/71 3/282/236 1/79/70\r
f 8/255/214 2/254/213 9/607/431\r
f 458/518/240 477/608/432 461/519/216\r
f 160/609/324 227/523/392 232/514/388\r
f 8/255/214 9/607/431 29/610/433\r
f 65/611/222 72/529/241 71/612/243\r
f 135/613/397 123/614/242 103/615/316\r
f 159/407/322 74/294/246 205/408/323\r
f 71/290/243 70/616/434 47/617/393\r
f 339/521/391 409/618/435 311/619/248\r
f 402/87/77 364/620/436 322/103/91\r
f 402/87/77 413/86/76 364/620/436\r
f 421/85/75 470/621/437 413/86/76\r
f 205/408/323 74/294/246 201/97/85\r
f 121/420/331 91/293/245 49/416/327\r
f 91/293/245 121/420/331 200/422/333\r
f 297/96/84 421/85/75 402/87/77\r
f 271/622/438 275/623/255 265/624/256\r
f 274/625/261 271/622/438 265/624/256\r
f 285/626/335 241/627/439 233/628/334\r
f 274/311/261 285/424/335 234/309/259\r
f 292/629/440 305/323/266 314/630/441\r
f 305/323/266 292/629/440 255/544/401\r
f 327/329/109 294/631/8 331/632/442\r
f 165/633/443 213/6/6 183/634/444\r
f 165/633/443 186/635/445 213/6/6\r
f 257/636/23 304/637/106 320/638/341\r
f 68/136/112 30/639/446 13/134/21\r
f 199/640/19 173/641/29 116/642/16\r
f 94/643/447 68/136/112 26/135/20\r
f 158/150/124 180/317/263 165/633/443\r
f 174/154/126 180/317/263 158/150/124\r
f 174/154/126 203/142/118 207/644/448\r
f 270/448/123 313/168/140 308/170/142\r
f 394/645/42 403/568/414 410/646/40\r
f 375/575/415 410/176/40 385/178/148\r
f 58/647/350 55/648/166 156/464/355\r
f 439/649/449 404/650/450 476/651/451\r
f 81/174/146 69/652/158 66/175/147\r
f 249/214/178 302/653/356 263/449/351\r
f 390/349/283 416/470/357 437/347/45\r
f 104/53/44 78/59/50 112/474/277\r
f 105/481/362 172/367/295 223/654/176\r
f 105/655/362 89/583/418 59/357/288\r
f 457/589/421 465/656/452 478/361/290\r
f 6/219/183 42/218/182 32/350/284\r
f 31/477/358 48/483/363 24/217/181\r
f 306/215/179 303/365/293 348/238/200\r
f 224/213/177 226/486/366 303/365/293\r
f 451/364/292 486/590/192 481/657/186\r
f 303/365/293 269/658/453 348/238/200\r
f 115/244/204 206/659/365 167/594/425\r
f 27/369/297 17/70/61 23/227/190\r
f 145/660/205 175/661/427 115/662/204\r
f 452/597/428 378/492/371 406/491/370\r
f 452/597/428 471/503/380 487/663/372\r
f 16/499/377 35/507/383 33/242/202\r
f 19/498/376 11/500/66 22/80/65\r
f 490/664/454 488/665/373 447/502/379\r
f 490/666/454 501/667/455 488/494/373\r
f 447/502/379 488/665/373 471/503/380\r
f 232/514/388 321/599/375 231/375/301\r
f 15/668/215 39/669/386 62/670/382\r
f 434/258/217 346/671/456 367/259/218\r
f 101/385/311 64/398/317 57/672/457\r
f 161/513/387 136/673/309 98/674/308\r
f 442/260/219 408/675/225 411/390/315\r
f 408/675/225 395/676/227 411/390/315\r
f 103/397/316 98/382/308 95/267/224\r
f 95/267/224 100/266/223 103/397/316\r
f 56/677/329 50/678/328 29/679/433\r
f 286/680/398 290/681/400 339/682/391\r
f 445/91/81 427/683/239 391/92/82\r
f 283/538/399 276/684/254 277/685/458\r
f 259/107/93 277/686/458 276/687/254\r
f 281/688/459 245/117/96 259/107/93\r
f 275/623/255 271/622/438 281/689/459\r
f 230/13/7 216/1/1 266/5/5\r
f 218/690/4 214/7/2 212/428/338\r
f 212/428/338 229/691/337 218/690/4\r
f 212/428/338 214/7/2 213/6/6\r
f 229/691/337 212/428/338 219/316/102\r
f 213/6/6 209/429/339 212/428/338\r
f 186/635/445 209/429/339 213/6/6\r
f 183/634/444 213/6/6 208/692/11\r
f 7/693/22 30/694/446 36/546/403\r
f 80/545/402 36/546/403 30/694/446\r
f 68/695/112 80/696/402 30/697/446\r
f 88/21/15 179/24/18 116/22/16\r
f 36/546/403 88/21/15 54/20/14\r
f 7/693/22 36/546/403 54/20/14\r
f 116/698/16 179/26/18 199/25/19\r
f 94/699/447 26/28/20 54/31/14\r
f 116/700/16 94/699/447 54/31/14\r
f 94/699/447 116/700/16 173/701/29\r
f 94/643/447 173/702/29 168/703/25\r
f 168/703/25 139/704/27 94/643/447\r
f 194/40/31 168/34/25 173/38/29\r
f 150/35/26 141/705/460 139/36/27\r
f 194/40/31 150/35/26 168/34/25\r
f 150/706/26 151/336/275 141/707/460\r
f 151/336/275 150/706/26 157/552/406\r
f 189/44/35 157/708/406 150/35/26\r
f 194/40/31 189/44/35 150/35/26\r
f 162/151/34 157/552/406 189/709/35\r
f 215/39/30 189/44/35 194/40/31\r
f 215/39/30 182/46/37 189/44/35\r
f 215/39/30 197/45/36 182/46/37\r
f 147/48/39 112/474/277 129/42/33\r
f 403/710/414 443/711/461 410/712/40\r
f 403/710/414 455/713/462 443/711/461\r
f 357/714/463 345/715/464 366/716/413\r
f 197/45/36 104/53/44 182/46/37\r
f 147/48/39 104/53/44 112/474/277\r
f 361/717/465 372/718/466 397/719/467\r
f 132/57/48 104/53/44 197/45/36\r
f 197/45/36 128/58/49 132/57/48\r
f 128/58/49 197/45/36 178/60/51\r
f 178/60/51 192/63/54 124/61/52\r
f 126/64/55 41/72/63 75/66/57\r
f 452/597/428 463/501/378 471/503/380\r
f 463/501/378 452/597/428 406/491/370\r
f 126/64/55 193/68/59 106/73/64\r
f 28/240/60 41/72/63 11/75/66\r
f 41/72/63 106/73/64 60/720/468\r
f 193/68/59 251/67/58 190/77/68\r
f 106/73/64 193/68/59 113/78/69\r
f 60/720/468 106/73/64 113/78/69\r
f 190/77/68 63/90/80 113/78/69\r
f 4/277/71 60/720/468 113/78/69\r
f 63/90/80 4/277/71 113/78/69\r
f 190/77/68 170/88/78 63/90/80\r
f 362/721/469 355/722/470 338/723/471\r
f 445/724/81 470/725/437 477/726/432\r
f 190/77/68 252/104/92 170/88/78\r
f 424/727/472 387/728/230 427/683/239\r
f 252/104/92 222/106/90 170/88/78\r
f 222/729/90 196/730/88 170/731/78\r
f 236/301/252 177/93/83 170/95/78\r
f 239/732/87 170/731/78 196/730/88\r
f 239/733/87 236/734/252 170/735/78\r
f 268/296/247 204/421/332 177/93/83\r
f 259/736/93 283/538/399 277/685/458\r
f 262/302/95 276/304/254 239/737/87\r
f 238/307/257 256/303/253 262/302/95\r
f 248/738/94 238/307/257 262/302/95\r
f 248/116/94 245/117/96 238/739/257\r
f 278/122/101 255/544/401 219/123/102\r
f 324/124/103 305/740/266 316/126/105\r
f 7/693/22 13/741/21 30/694/446\r
f 483/742/473 429/743/405 448/319/264\r
f 462/324/107 398/744/270 376/434/115\r
f 371/745/474 380/553/407 389/746/475\r
f 315/338/120 334/334/273 317/333/272\r
f 174/154/126 184/153/125 203/142/118\r
f 344/747/344 404/748/450 384/749/476\r
f 404/748/450 344/747/344 349/440/346\r
f 120/750/279 169/159/131 90/158/130\r
f 84/751/128 51/752/144 111/559/129\r
f 114/446/349 37/565/150 117/753/477\r
f 368/754/478 439/649/449 431/581/416\r
f 385/178/148 454/179/149 418/562/412\r
f 454/179/149 426/563/354 418/562/412\r
f 431/581/416 360/755/479 332/195/162\r
f 449/756/480 419/757/135 440/758/481\r
f 14/166/138 5/200/167 18/352/286\r
f 144/185/155 122/759/159 119/193/160\r
f 45/760/143 10/761/168 21/762/137\r
f 223/580/176 176/457/352 105/763/362\r
f 374/764/482 422/220/174 328/216/180\r
f 374/764/482 328/216/180 306/215/179\r
f 246/234/56 244/765/38 289/196/163\r
f 486/590/192 451/364/292 415/591/422\r
f 354/766/483 298/239/201 301/767/484\r
f 353/768/485 301/767/484 312/769/486\r
f 145/245/205 115/244/204 93/243/203\r
f 152/246/206 145/245/205 93/243/203\r
f 231/497/301 284/248/208 242/250/210\r
f 118/508/384 79/770/487 62/506/382\r
f 388/771/488 447/502/379 463/501/378\r
f 12/505/381 1/79/70 2/254/213\r
f 436/511/385 409/618/435 309/253/212\r
f 64/772/317 44/773/320 57/774/457\r
f 98/674/308 146/775/489 161/513/387\r
f 103/776/316 146/777/489 98/778/308\r
f 72/529/241 95/779/224 53/530/394\r
f 135/613/397 103/615/316 133/387/312\r
f 205/408/323 227/526/392 160/409/324\r
f 427/683/239 444/780/229 424/727/472\r
f 25/781/237 52/94/79 49/416/327\r
f 247/98/86 201/97/85 91/293/245\r
f 236/782/252 239/783/87 286/784/398\r
f 247/98/86 200/422/333 297/96/84\r
f 268/296/247 307/299/250 204/421/332\r
f 292/629/440 314/630/441 279/425/336\r
f 314/785/441 324/124/103 300/314/262\r
f 266/313/5 291/118/97 294/631/8\r
f 209/429/339 180/317/263 219/316/102\r
f 304/786/106 294/631/8 327/329/109\r
f 137/436/343 163/435/342 148/787/490\r
f 462/129/107 327/131/109 398/788/270\r
f 429/551/405 376/139/115 358/549/404\r
f 341/331/114 320/789/341 358/790/404\r
f 258/791/24 320/789/341 267/792/28\r
f 180/317/263 174/154/126 207/644/448\r
f 352/335/274 316/126/105 317/333/272\r
f 365/556/410 352/793/274 334/558/273\r
f 158/150/124 127/155/127 174/154/126\r
f 171/794/411 198/140/116 184/153/125\r
f 450/795/491 403/568/414 414/569/136\r
f 37/565/150 114/446/349 109/445/348\r
f 404/650/450 400/796/345 479/345/281\r
f 400/796/345 426/459/354 479/345/281\r
f 154/183/153 130/460/133 169/341/131\r
f 66/343/147 102/160/132 97/797/145\r
f 188/444/347 114/446/349 117/753/477\r
f 37/565/150 107/798/152 117/753/477\r
f 140/799/492 117/753/477 107/798/152\r
f 263/449/351 302/653/356 318/169/141\r
f 191/340/278 156/800/355 138/186/156\r
f 55/648/166 77/801/165 156/464/355\r
f 249/214/178 328/216/180 302/653/356\r
f 399/208/173 416/470/357 390/349/283\r
f 465/656/452 459/582/417 476/651/451\r
f 457/589/421 459/582/417 465/656/452\r
f 24/217/181 6/219/183 31/477/358\r
f 433/222/185 415/591/422 451/364/292\r
f 226/486/366 224/213/177 155/487/294\r
f 469/592/423 452/597/428 487/663/372\r
f 473/802/493 484/232/195 496/495/374\r
f 250/803/209 312/804/486 301/805/484\r
f 354/766/483 301/767/484 353/768/485\r
f 250/806/209 284/807/208 312/808/486\r
f 377/490/369 354/766/483 321/599/375\r
f 79/770/487 93/243/203 33/242/202\r
f 228/809/298 231/810/301 242/811/210\r
f 495/812/494 491/378/304 430/374/300\r
f 195/377/303 232/514/388 231/375/301\r
f 1/79/70 19/498/376 22/80/65\r
f 1/79/70 12/505/381 19/498/376\r
f 295/525/306 293/600/307 232/514/388\r
f 356/517/231 347/813/429 393/515/389\r
f 409/618/435 339/521/391 309/253/212\r
f 436/511/385 464/379/305 409/618/435\r
f 395/676/227 356/517/231 411/390/315\r
f 123/289/242 135/536/397 108/291/244\r
f 70/616/434 92/535/321 47/617/393\r
f 205/408/323 201/97/85 272/284/238\r
f 456/411/325 311/619/248 409/618/435\r
f 146/814/489 86/415/326 160/409/324\r
f 121/420/331 52/94/79 177/93/83\r
f 290/815/400 259/105/93 252/104/92\r
f 239/783/87 283/816/399 286/784/398\r
f 181/23/17 148/817/490 208/16/11\r
f 208/818/11 210/819/10 181/820/17\r
f 304/128/106 254/14/9 294/12/8\r
f 358/549/404 304/548/106 369/550/265\r
f 429/743/405 369/320/265 448/319/264\r
f 165/633/443 180/317/263 186/635/445\r
f 381/327/269 327/329/109 373/125/104\r
f 317/821/272 282/822/495 261/133/111\r
f 109/445/348 198/823/116 171/561/411\r
f 120/466/279 90/824/130 58/647/350\r
f 439/649/449 384/825/476 404/650/450\r
f 403/568/414 394/645/42 366/566/413\r
f 211/148/119 235/826/353 263/827/351\r
f 107/798/152 83/828/151 97/797/145\r
f 97/797/145 130/161/133 107/798/152\r
f 131/829/161 107/798/152 130/161/133\r
f 5/200/167 14/166/138 21/165/137\r
f 485/354/169 454/830/149 466/355/175\r
f 431/581/416 439/649/449 476/651/451\r
f 476/651/451 404/650/450 479/345/281\r
f 396/50/41 390/579/283 370/52/43\r
f 119/831/160 81/187/146 46/832/285\r
f 122/191/159 81/187/146 119/831/160\r
f 164/190/154 85/188/157 122/191/159\r
f 138/833/156 85/188/157 164/190/154\r
f 85/188/157 138/833/156 69/189/158\r
f 134/584/419 176/586/352 153/834/496\r
f 223/212/176 249/214/178 235/835/353\r
f 420/836/497 372/718/466 370/837/43\r
f 372/718/466 420/836/497 397/719/467\r
f 397/719/467 420/836/497 440/838/481\r
f 360/755/479 289/196/163 332/195/162\r
f 10/201/168 6/219/183 5/200/167\r
f 6/219/183 32/350/284 18/352/286\r
f 132/57/48 78/59/50 104/53/44\r
f 31/839/358 76/840/172 48/841/363\r
f 125/484/364 96/593/424 155/366/294\r
f 432/479/360 484/232/195 392/488/367\r
f 27/369/297 38/226/189 40/71/62\r
f 469/592/423 487/663/372 486/590/192\r
f 206/485/365 269/658/453 226/486/366\r
f 298/239/201 378/492/371 379/237/199\r
f 11/500/66 16/499/377 23/227/190\r
f 23/227/190 16/499/377 33/242/202\r
f 378/492/371 298/239/201 377/490/369\r
f 11/500/66 17/70/61 28/69/60\r
f 488/665/373 487/663/372 471/503/380\r
f 79/770/487 33/242/202 35/507/383\r
f 430/374/300 417/373/299 495/812/494\r
f 12/505/381 35/507/383 16/499/377\r
f 501/667/455 491/378/304 495/812/494\r
f 491/378/304 501/667/455 490/666/454\r
f 60/720/468 22/74/65 41/72/63\r
f 149/842/313 133/386/312 101/385/311\r
f 480/843/220 421/399/75 493/401/221\r
f 444/272/229 458/287/240 442/273/219\r
f 383/269/226 387/844/230 395/270/227\r
f 472/532/73 444/272/229 453/271/228\r
f 438/845/251 499/400/318 421/399/75\r
f 52/89/79 25/846/237 4/277/71\r
f 25/283/237 3/282/236 4/81/71\r
f 480/843/220 470/847/437 421/399/75\r
f 108/291/244 70/616/434 71/290/243\r
f 87/419/330 74/294/246 159/407/322\r
f 421/85/75 297/96/84 438/300/251\r
f 201/97/85 322/103/91 272/284/238\r
f 201/97/85 297/96/84 322/103/91\r
f 274/625/261 265/624/256 273/848/498\r
f 285/849/335 274/850/261 273/851/498\r
f 234/543/259 233/852/334 237/541/258\r
f 292/629/440 279/425/336 229/427/337\r
f 255/544/401 292/629/440 229/427/337\r
f 141/853/460 137/854/343 68/136/112\r
f 68/136/112 137/854/343 80/855/402\r
f 376/139/115 429/551/405 460/856/267\r
f 483/857/473 460/856/267 429/551/405\r
f 323/330/271 320/789/341 341/331/114\r
f 359/332/113 398/328/270 389/746/475\r
f 389/746/475 380/553/407 359/332/113\r
f 261/133/111 270/858/123 310/145/121\r
f 352/335/274 368/754/478 371/745/474\r
f 109/445/348 211/859/119 198/823/116\r
f 375/578/415 396/50/41 410/49/40\r
f 361/860/465 336/861/499 345/862/464\r
f 370/863/43 372/864/466 345/715/464\r
f 345/715/464 372/864/466 361/865/465\r
f 119/866/160 134/584/419 153/834/496\r
f 89/583/418 105/655/362 134/867/419\r
f 474/225/188 457/589/421 481/223/186\r
f 38/226/189 73/482/53 40/71/62\r
f 226/486/366 269/658/453 303/365/293\r
f 469/592/423 415/591/422 379/237/199\r
f 33/242/202 96/593/424 34/230/193\r
f 486/229/192 496/495/374 494/233/196\r
f 484/232/195 473/802/493 392/488/367\r
f 473/802/493 417/373/299 392/488/367\r
f 23/227/190 33/242/202 34/230/193\r
f 495/812/494 473/802/493 501/667/455\r
f 142/868/302 228/809/298 152/869/206\r
f 495/812/494 417/373/299 473/802/493\r
f 35/507/383 62/506/382 79/770/487\r
f 99/509/310 118/508/384 62/506/382\r
f 136/383/309 195/870/303 99/384/310\r
f 101/871/311 57/872/457 44/403/320\r
f 149/405/313 101/871/311 44/403/320\r
f 227/523/392 295/525/306 232/514/388\r
f 1/79/70 3/282/236 2/254/213\r
f 347/873/429 337/874/430 355/875/470\r
f 309/253/212 252/522/92 190/251/68\r
f 29/610/433 50/528/328 53/530/394\r
f 387/728/230 424/727/472 362/721/469\r
f 424/727/472 355/722/470 362/721/469\r
f 355/722/470 435/876/395 423/877/396\r
f 86/415/326 87/419/330 160/409/324\r
f 391/92/82 427/683/239 383/878/226\r
f 311/879/248 286/880/398 339/881/391\r
f 307/299/250 428/298/249 438/300/251\r
f 200/422/333 204/421/332 307/299/250\r
f 237/308/258 233/882/334 241/883/439\r
f 241/883/439 273/851/498 237/308/258\r
f 264/121/100 219/123/102 217/132/110\r
f 141/853/460 94/643/447 139/704/27\r
f 141/853/460 68/136/112 94/643/447\r
f 376/139/115 341/138/114 358/549/404\r
f 316/126/105 352/335/274 381/327/269\r
f 109/445/348 67/560/139 14/564/138\r
f 400/439/345 404/748/450 349/440/346\r
f 318/169/141 313/168/140 263/449/351\r
f 345/715/464 336/884/499 366/716/413\r
f 340/885/134 366/716/413 336/884/499\r
f 394/886/42 357/714/463 366/716/413\r
f 455/713/462 450/887/491 449/756/480\r
f 443/888/461 441/177/46 410/176/40\r
f 140/889/492 153/834/496 188/890/347\r
f 443/711/461 455/713/462 440/758/481\r
f 340/162/134 336/891/499 363/892/500\r
f 153/893/496 140/894/492 131/895/161\r
f 357/714/463 370/863/43 345/715/464\r
f 437/896/45 466/897/175 441/898/46\r
f 485/202/169 497/204/171 492/346/282\r
f 425/348/47 420/836/497 370/837/43\r
f 399/208/173 466/210/175 416/470/357\r
f 459/582/417 457/589/421 405/478/359\r
f 482/362/291 478/361/290 489/344/280\r
f 422/220/174 433/222/185 468/899/170\r
f 379/237/199 374/764/482 348/238/200\r
f 306/215/179 348/238/200 374/764/482\r
f 61/231/194 42/218/182 43/228/191\r
f 48/483/363 73/482/53 38/226/189\r
f 96/593/424 125/484/364 61/231/194\r
f 40/71/62 17/70/61 27/369/297\r
f 206/485/365 260/595/426 269/658/453\r
f 301/767/484 298/239/201 260/595/426\r
f 452/597/428 379/237/199 378/492/371\r
f 346/671/456 388/771/488 321/599/375\r
f 321/599/375 293/600/307 346/671/456\r
f 346/671/456 447/502/379 388/771/488\r
f 367/259/218 346/671/456 293/600/307\r
f 3/282/236 9/607/431 2/254/213\r
f 95/267/224 98/382/308 39/669/386\r
f 480/843/220 461/900/216 470/847/437\r
f 442/260/219 386/396/232 408/675/225\r
f 9/607/431 3/282/236 20/281/235\r
f 338/901/471 355/875/470 337/874/430\r
f 50/417/328 86/415/326 72/288/241\r
f 201/97/85 74/294/246 91/293/245\r
f 200/422/333 247/98/86 91/293/245\r
f 276/902/254 275/623/255 281/689/459\r
f 238/739/257 245/117/96 243/310/260\r
f 245/117/96 281/688/459 271/903/438\r
f 271/903/438 243/310/260 245/117/96\r
f 279/904/336 314/785/441 300/314/262\r
f 305/323/266 278/122/101 264/121/100\r
f 186/635/445 180/317/263 209/429/339\r
f 316/322/105 264/121/100 282/822/495\r
f 261/133/111 282/822/495 264/121/100\r
f 288/905/501 323/330/271 359/332/113\r
f 288/905/501 253/906/32 267/792/28\r
f 371/745/474 329/554/408 380/553/407\r
f 263/827/351 270/149/123 211/148/119\r
f 288/907/501 287/908/164 253/909/32\r
f 368/754/478 431/581/416 332/195/162\r
f 18/352/286 37/180/150 14/166/138\r
f 419/163/135 449/910/480 414/164/136\r
f 21/762/137 51/911/144 45/760/143\r
f 420/912/497 425/56/47 443/711/461\r
f 420/912/497 443/711/461 440/758/481\r
f 479/345/281 489/344/280 476/651/451\r
f 18/352/286 5/200/167 6/219/183\r
f 224/213/177 223/212/176 172/913/295\r
f 432/479/360 405/478/359 457/589/421\r
f 478/361/290 481/223/186 457/589/421\r
f 175/914/427 206/659/365 115/244/204\r
f 269/658/453 260/595/426 298/239/201\r
f 250/371/209 301/767/484 260/595/426\r
f 496/495/374 501/667/455 473/802/493\r
f 321/915/375 312/916/486 284/917/208\r
f 118/508/384 142/598/302 93/243/203\r
f 388/771/488 406/491/370 321/599/375\r
f 19/498/376 12/505/381 16/499/377\r
f 346/671/456 434/258/217 447/502/379\r
f 436/511/385 430/374/300 464/379/305\r
f 342/918/233 367/259/218 293/600/307\r
f 500/516/390 493/401/221 499/400/318\r
f 101/385/311 100/266/223 64/398/317\r
f 338/919/471 337/604/430 356/606/231\r
f 453/392/228 442/260/219 411/390/315\r
f 64/772/317 65/611/222 44/773/320\r
f 475/394/74 472/532/73 453/271/228\r
f 477/920/432 470/847/437 461/900/216\r
f 53/530/394 39/512/386 29/610/433\r
f 166/389/314 135/613/397 133/387/312\r
f 143/402/319 135/613/397 166/389/314\r
f 71/612/243 47/921/393 44/773/320\r
f 9/607/431 20/281/235 29/610/433\r
f 472/532/73 435/531/395 444/272/229\r
f 427/922/239 445/923/81 477/608/432\r
f 92/535/321 70/616/434 108/291/244\r
f 135/536/397 92/535/321 108/291/244\r
f 20/295/235 25/781/237 49/416/327\r
f 311/297/248 236/301/252 286/924/398\r
f 283/538/399 259/736/93 290/539/400\r
f 278/122/101 305/323/266 255/544/401\r
f 291/118/97 325/120/99 331/632/442\r
f 304/925/106 327/318/109 369/320/265\r
f 165/633/443 163/435/342 151/336/275\r
f 359/332/113 376/926/115 398/328/270\r
f 381/327/269 373/125/104 316/126/105\r
f 207/644/448 217/315/110 180/317/263\r
f 217/132/110 221/927/117 261/133/111\r
f 267/792/28 320/789/341 323/330/271\r
f 158/150/124 165/633/443 151/336/275\r
f 207/644/448 221/141/117 217/315/110\r
f 371/745/474 389/746/475 381/327/269\r
f 352/335/274 371/745/474 381/327/269\r
f 221/147/117 270/149/123 261/928/111\r
f 368/754/478 352/335/274 382/929/409\r
f 365/930/410 382/929/409 352/335/274\r
f 270/931/123 308/443/142 310/442/121\r
f 426/563/354 333/441/122 308/443/142\r
f 329/554/408 287/197/164 288/905/501\r
f 368/754/478 287/197/164 329/554/408\r
f 51/752/144 67/560/139 111/559/129\r
f 449/910/480 450/932/491 414/164/136\r
f 120/466/279 58/647/350 156/464/355\r
f 394/933/42 370/934/43 357/935/463\r
f 449/756/480 440/758/481 455/713/462\r
f 497/204/171 489/344/280 492/346/282\r
f 336/936/499 361/717/465 363/937/500\r
f 363/937/500 361/717/465 397/719/467\r
f 419/938/135 397/719/467 440/838/481\r
f 405/478/359 360/755/479 431/581/416\r
f 419/938/135 363/937/500 397/719/467\r
f 89/583/418 134/867/419 82/358/289\r
f 465/656/452 476/651/451 489/344/280\r
f 497/204/171 468/203/170 482/362/291\r
f 374/764/482 401/221/184 422/220/174\r
f 433/222/185 482/363/291 468/899/170\r
f 34/230/193 96/593/424 61/231/194\r
f 11/500/66 23/227/190 17/70/61\r
f 312/939/486 354/940/483 353/941/485\r
f 312/769/486 321/599/375 354/766/483\r
f 231/810/301 228/809/298 142/868/302\r
f 493/264/221 490/664/454 447/502/379\r
f 430/374/300 436/511/385 350/252/211\r
f 500/516/390 490/666/454 493/401/221\r
f 39/669/386 98/382/308 99/384/310\r
f 53/530/394 95/779/224 39/512/386\r
f 499/412/318 428/414/249 464/942/305\r
f 71/612/243 44/773/320 65/611/222\r
f 427/922/239 477/608/432 458/518/240\r
f 444/780/229 435/876/395 424/727/472\r
f 435/876/395 355/722/470 424/727/472\r
f 290/943/400 252/522/92 339/521/391\r
f 86/415/326 146/814/489 123/289/242\r
f 49/416/327 52/94/79 121/420/331\r
f 428/298/249 307/299/250 268/296/247\r
f 237/308/258 273/851/498 265/306/256\r
f 281/688/459 259/107/93 276/687/254\r
f 285/849/335 273/851/498 241/883/439\r
f 243/310/260 271/903/438 274/311/261\r
f 314/785/441 305/740/266 324/124/103\r
f 331/632/442 294/631/8 291/118/97\r
f 373/125/104 325/120/99 296/119/98\r
f 208/692/11 148/787/490 163/435/342\r
f 208/692/11 163/435/342 183/634/444\r
f 148/944/490 80/945/402 137/946/343\r
f 446/430/340 498/947/268 483/742/473\r
f 448/319/264 446/430/340 483/742/473\r
f 462/324/107 498/326/268 446/432/340\r
f 141/707/460 151/336/275 137/436/343\r
f 315/144/120 317/821/272 261/133/111\r
f 203/142/118 221/141/117 207/644/448\r
f 184/153/125 198/140/116 203/142/118\r
f 368/754/478 329/554/408 371/745/474\r
f 344/747/344 330/948/276 349/440/346\r
f 330/948/276 333/441/122 349/440/346\r
f 111/559/129 171/561/411 184/949/125\r
f 426/563/354 400/439/345 333/441/122\r
f 439/649/449 368/754/478 384/825/476\r
f 97/797/145 102/160/132 130/161/133\r
f 450/887/491 455/713/462 403/710/414\r
f 131/829/161 140/799/492 107/798/152\r
f 154/183/153 144/185/155 130/460/133\r
f 340/162/134 363/892/500 419/163/135\r
f 46/351/285 37/180/150 18/352/286\r
f 46/351/285 83/181/151 37/180/150\r
f 153/834/496 176/586/352 188/890/347\r
f 375/578/415 390/579/283 396/50/41\r
f 85/188/157 81/187/146 122/191/159\r
f 77/198/165 69/189/158 138/833/156\r
f 156/950/355 77/198/165 138/833/156\r
f 405/478/359 343/480/361 360/755/479\r
f 45/760/143 31/839/358 10/761/168\r
f 45/760/143 76/840/172 31/839/358\r
f 489/344/280 478/361/290 465/656/452\r
f 497/204/171 482/362/291 489/344/280\r
f 326/587/420 343/480/361 432/479/360\r
f 110/368/296 59/588/288 42/218/182\r
f 24/217/181 43/228/191 42/218/182\r
f 289/196/163 326/587/420 299/235/197\r
f 326/587/420 392/488/367 299/235/197\r
f 374/764/482 379/237/199 401/221/184\r
f 401/221/184 415/591/422 433/222/185\r
f 415/591/422 401/221/184 379/237/199\r
f 486/229/192 494/233/196 467/224/187\r
f 392/488/367 335/236/198 299/235/197\r
f 487/493/372 496/495/374 486/229/192\r
f 496/495/374 484/232/195 494/233/196\r
f 187/951/207 250/371/209 175/596/427\r
f 175/914/427 145/245/205 187/247/207\r
f 377/490/369 298/239/201 354/766/483\r
f 228/372/298 187/951/207 185/952/368\r
f 228/372/298 250/371/209 187/951/207\r
f 228/809/298 185/953/368 152/869/206\r
f 496/495/374 488/494/373 501/667/455\r
f 490/666/454 500/516/390 491/378/304\r
f 423/954/396 472/955/73 412/956/72\r
f 347/873/429 423/957/396 412/82/72\r
f 160/609/324 161/513/387 146/775/489\r
f 72/529/241 65/611/222 95/779/224\r
f 387/275/230 362/958/469 356/276/231\r
f 383/269/226 386/278/232 319/280/234\r
f 103/959/316 123/960/242 146/961/489\r
f 272/284/238 227/526/392 205/408/323\r
f 427/683/239 387/728/230 383/878/226\r
f 87/419/330 56/418/329 20/295/235\r
f 20/295/235 74/294/246 87/419/330\r
f 364/620/436 391/92/82 319/285/234\r
f 413/86/76 391/92/82 364/620/436\r
f 413/962/76 470/847/437 445/963/81\r
f 428/410/249 311/619/248 456/411/325\r
f 311/297/248 268/296/247 236/301/252\r
f 239/737/87 276/304/254 283/964/399\r
f 240/3/3 218/4/4 300/312/262\r
f 218/4/4 279/965/336 300/312/262\r
f 325/120/99 373/125/104 331/632/442\r
f 183/634/444 163/435/342 165/633/443\r
f 148/817/490 88/21/15 80/545/402\r
f 148/817/490 181/23/17 88/21/15\r
f 257/127/23 220/19/13 254/14/9\r
f 373/125/104 327/329/109 331/632/442\r
f 498/966/268 460/967/267 483/968/473\r
f 389/746/475 398/328/270 381/327/269\r
f 317/821/272 316/322/105 282/822/495\r
f 288/905/501 267/792/28 323/330/271\r
f 329/554/408 288/905/501 359/332/113\r
f 384/825/476 368/754/478 382/929/409\r
f 344/557/344 384/969/476 382/555/409\r
f 188/572/347 211/574/119 109/970/348\r
f 287/197/164 244/765/38 253/906/32\r
f 287/197/164 368/754/478 332/195/162\r
f 492/346/282 479/345/281 426/459/354\r
f 117/753/477 140/799/492 188/444/347\r
f 81/174/146 97/173/145 83/181/151\r
f 443/711/461 425/56/47 441/55/46\r
f 46/351/285 81/174/146 83/181/151\r
f 249/214/178 263/449/351 235/835/353\r
f 119/866/160 153/834/496 131/971/161\r
f 244/765/38 287/197/164 289/196/163\r
f 425/348/47 370/837/43 390/349/283\r
f 431/581/416 476/651/451 459/582/417\r
f 82/358/289 46/832/285 32/359/284\r
f 119/831/160 46/832/285 82/358/289\r
f 82/358/289 134/867/419 119/831/160\r
f 360/755/479 343/480/361 289/196/163\r
f 482/362/291 451/972/292 481/223/186\r
f 155/366/294 110/368/296 125/484/364\r
f 172/913/295 155/487/294 224/213/177\r
f 474/225/188 467/224/187 432/479/360\r
f 467/224/187 484/232/195 432/479/360\r
f 289/196/163 299/235/197 246/234/56\r
f 23/227/190 61/231/194 43/228/191\r
f 206/659/365 155/366/294 167/594/425\r
f 96/593/424 167/594/425 155/366/294\r
f 269/658/453 298/239/201 348/238/200\r
f 246/65/56 193/68/59 192/63/54\r
f 335/236/198 280/504/67 246/234/56\r
f 251/67/58 246/65/56 280/76/67\r
f 75/66/57 41/72/63 28/240/60\r
f 463/501/378 406/491/370 388/771/488\r
f 79/770/487 118/508/384 93/243/203\r
f 118/508/384 195/510/303 142/598/302\r
f 62/670/382 39/669/386 99/384/310\r
f 161/513/387 195/377/303 136/673/309\r
f 4/277/71 22/74/65 60/720/468\r
f 29/610/433 39/512/386 8/255/214\r
f 161/513/387 160/609/324 232/514/388\r
f 362/958/469 338/973/471 356/276/231\r
f 355/875/470 423/957/396 347/873/429\r
f 456/411/325 409/618/435 464/379/305\r
f 322/103/91 364/620/436 319/285/234\r
f 20/281/235 56/974/329 29/610/433\r
f 159/407/322 160/409/324 87/419/330\r
f 307/299/250 297/96/84 200/422/333\r
f 204/421/332 121/420/331 177/93/83`;var W3=typeof Float32Array<"u"?Float32Array:Array;function Y7(){var u=new W3(3);return W3!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0),u}function K3(u,a,f){var c=new W3(3);return c[0]=u,c[1]=a,c[2]=f,c}(function(){var u=Y7();return function(a,f,c,o,d,m){var h,y;for(f||(f=3),c||(c=0),o?y=Math.min(o*f+c,a.length):y=a.length,h=c;h<y;h+=f)u[0]=a[h],u[1]=a[h+1],u[2]=a[h+2],d(u,u,m),a[h]=u[0],a[h+1]=u[1],a[h+2]=u[2];return a}})();class V7{fileContents;defaultModelName;result;currentMaterial;currentGroup;smoothingGroup;currentNode;currentObjectNode;currentMesh;constructor(a,f){this._reset(),this.fileContents=a,this.defaultModelName=f||"untitled"}_reset(){const a={name:"RootNode",parent:null,children:[],meshIndices:[]};this.result={rootNode:a,meshes:[],materialLibraries:[]},this.currentMesh=this._createNewMesh(this.defaultModelName),this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(this.defaultModelName,a),this.currentNode.meshIndices.push(0),this.currentObjectNode=this.currentNode,this.currentMaterial="",this.currentGroup="",this.smoothingGroup=0}parse(){this._reset();const a=c=>{const o=c.indexOf("#");return o>-1?c.substring(0,o):c},f=this.fileContents.split(`
`);for(let c=0;c<f.length;c+=1){const d=a(f[c]).replace(/\s+/g," ").trim().split(" ");switch(d[0].toLowerCase()){case"o":this._parseObject(d);break;case"g":this._parseGroup(d);break;case"v":this._parseVertexCoords(d);break;case"vt":this._parseTextureCoords(d);break;case"vn":this._parseVertexNormal(d);break;case"l":this._parseLine(d);break;case"s":this._parseSmoothShadingStatement(d);break;case"f":this._parsePolygon(d);break;case"mtllib":this._parseMtlLib(d);break;case"usemtl":this._parseUseMtl(d);break}}return this.result}_createNewMesh(a){return{name:a,vertices:[],textureCoords:[],vertexNormals:[],faces:[],lines:[]}}_createNewNode(a,f){const c={name:a,parent:f,children:[],meshIndices:[]};return f.children.push(c),c}_parseObject(a){const f=a.length>=2?a[1]:this.defaultModelName;if(this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0){this.currentMesh=this._createNewMesh(f);const c=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentObjectNode=this._createNewNode(f,this.result.rootNode),this.currentObjectNode.meshIndices.push(c),this.currentNode=this.currentObjectNode}else this.currentMesh.name=f,this.currentNode.name=f,this.currentObjectNode.name=f;this.currentGroup="",this.smoothingGroup=0}_parseGroup(a){if(a.length!=2)throw new Error("Group statements must have exactly 1 argument (eg. g group_1)");const f=a[1];if(this.currentGroup!==f){const c=this.currentMesh.vertices.length>0||this.currentMesh.faces.length>0||this.currentMesh.lines.length>0,o=this.currentNode===this.currentObjectNode;if(c||o)if(c){this.currentMesh=this._createNewMesh(f);const d=this.result.meshes.length;this.result.meshes.push(this.currentMesh),this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(d)}else this.currentMesh.name=f,o?(this.currentNode=this._createNewNode(f,this.currentObjectNode),this.currentNode.meshIndices.push(0),this.currentObjectNode.meshIndices=[]):this.currentNode.name=f;else this.currentMesh.name=f,this.currentNode.name=f;this.currentGroup=f}}_parseVertexCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,o=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertices.push(K3(f,c,o))}_parseTextureCoords(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,o=a.length>=4?parseFloat(a[3]):0;this.currentMesh.textureCoords.push(K3(f,1-c,o))}_parseVertexNormal(a){const f=a.length>=2?parseFloat(a[1]):0,c=a.length>=3?parseFloat(a[2]):0,o=a.length>=4?parseFloat(a[3]):0;this.currentMesh.vertexNormals.push(K3(f,c,o))}_parseLine(a){const f=a.length-1;if(f<2)throw new Error("Line statement has less than 2 vertices");const c=[];for(let o=0;o<f;o+=1){const m=a[o+1].split("/");if(m.length<1||m.length>2)throw new Error("Too many values (separated by /) for a single vertex");let h=0,y=0;h=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),c.push({vertexIndex:h,textureCoordsIndex:y})}this.currentMesh.lines.push(c)}_parsePolygon(a){const f=a.length-1;if(f<3)throw new Error("Face statement has less than 3 vertices");const c={material:this.currentMaterial,group:this.currentGroup,smoothingGroup:this.smoothingGroup,vertices:[]};for(let o=0;o<f;o+=1){const m=a[o+1].split("/");if(m.length<1||m.length>3)throw new Error("Too many values (separated by /) for a single vertex");let h=0,y=0,b=0;if(h=parseInt(m[0]),m.length>1&&m[1]!=""&&(y=parseInt(m[1])),m.length>2&&(b=parseInt(m[2])),h==0)throw"Faces uses invalid vertex index of 0";h<0&&(h=this.currentMesh.vertices.length+1+h),c.vertices.push({vertexIndex:h,textureCoordsIndex:y,vertexNormalIndex:b})}this.currentMesh.faces.push(c)}_parseMtlLib(a){a.length>=2&&this.result.materialLibraries.push(a[1])}_parseUseMtl(a){a.length>=2&&(this.currentMaterial=a[1])}_parseSmoothShadingStatement(a){if(a.length!=2)throw"Smoothing group statements must have exactly 1 argument (eg. s <number|off>)";const f=a[1].toLowerCase()=="off"?0:parseInt(a[1]);this.smoothingGroup=f}}function X7(u,a){const f=u.length/3,c=new Float32Array(u.length);for(let o=0;o<a.length;o+=3){const d=a[o]*3,m=a[o+1]*3,h=a[o+2]*3,y=u[d],b=u[d+1],N=u[d+2],R=u[m],w=u[m+1],j=u[m+2],L=u[h],U=u[h+1],B=u[h+2],Z=R-y,J=w-b,q=j-N,Q=L-y,P=U-b,$=B-N,k=J*$-q*P,_0=q*Q-Z*$,U0=Z*P-J*Q;c[d]+=k,c[d+1]+=_0,c[d+2]+=U0,c[m]+=k,c[m+1]+=_0,c[m+2]+=U0,c[h]+=k,c[h+1]+=_0,c[h+2]+=U0}for(let o=0;o<f;o++){const d=o*3,m=c[d],h=c[d+1],y=c[d+2],b=Math.sqrt(m*m+h*h+y*y);b>0?(c[d]=m/b,c[d+1]=h/b,c[d+2]=y/b):(c[d]=0,c[d+1]=1,c[d+2]=0)}return c}function j7(u,a=!0){const f=new Map,c=[],o=[],d=[],m=[];let h=0;for(const w of u.faces){const j=[];for(const L of w.vertices){const U=`${L.vertexIndex}/${L.textureCoordsIndex}/${L.vertexNormalIndex}`;let B=f.get(U);if(B===void 0){B=h++,f.set(U,B);const Z=L.vertexIndex-1;if(Z>=0&&Z<u.vertices.length){const J=u.vertices[Z];c.push(J[0],J[1],J[2])}else c.push(0,0,0);if(L.vertexNormalIndex>0){const J=L.vertexNormalIndex-1;if(J>=0&&J<u.vertexNormals.length){const q=u.vertexNormals[J];o.push(q[0],q[1],q[2])}else o.push(0,1,0)}else o.push(0,1,0);if(L.textureCoordsIndex>0){const J=L.textureCoordsIndex-1;if(J>=0&&J<u.textureCoords.length){const q=u.textureCoords[J];d.push(q[0],q[1])}else d.push(0,0)}else d.push(0,0)}j.push(B)}for(let L=1;L<j.length-1;L++)m.push(j[0],j[L],j[L+1])}const y=new Float32Array(c),b=new Uint16Array(m);let N=new Float32Array(o);const R=u.vertexNormals.length===0;return a&&R&&(N=X7(y,b)),{vertices:y,normals:N,uvs:new Float32Array(d),indices:b}}function Q7(u,a=!0){const c=new V7(u).parse();return j7(c.meshes[0],a)}class Z7 extends O7{onSetup(){super.onSetup()}update(a){if(Yt.isKeyPressed("w")){const o=this.getForward();we(o,o,5*a),this.translate(o)}if(Yt.isKeyPressed("s")){const o=this.getBackward();we(o,o,5*a),this.translate(o)}if(Yt.isKeyPressed("a")){const o=this.getLeft();we(o,o,5*a),this.translate(o)}if(Yt.isKeyPressed("d")){const o=this.getRight();we(o,o,5*a),this.translate(o)}if(Yt.isKeyPressed(" ")){const o=this.getUp();we(o,o,5*a),this.translate(o)}if(Yt.isKeyPressed("Control")){const o=this.getDown();we(o,o,5*a),this.translate(o)}Yt.isKeyPressed("q")&&this.rotateY(-2*a),Yt.isKeyPressed("e")&&this.rotateY(2*a),Yt.isKeyPressed("r")&&this.rotateX(-2*a),Yt.isKeyPressed("f")&&this.rotateX(2*a),super.update(a)}}class E5 extends j1{rotationSpeed=Math.PI/8;update(a){super.update(a),this.rotateY(this.rotationSpeed*a),this.rotateX(this.rotationSpeed*a*2),this.rotateZ(this.rotationSpeed*a*3)}}class K7 extends j1{amplitude=1;frequency=1;phase=0;initialPosition=z5();totalTime=0;onSetup(){super.onSetup(),H7(this.initialPosition,this.position)}update(a){const f=Math.sin(this.frequency*this.totalTime+this.phase)*this.amplitude;this.setPosition(this.initialPosition[0],this.initialPosition[1]+f,this.initialPosition[2]),this.totalTime+=a,this.rotateX(.5*a),this.rotateY(.3*a),this.rotateZ(.2*a),super.update(a)}}class J7 extends D7{rotationSpeed=Math.PI/4;update(a){this.rotateY(this.rotationSpeed*a),super.update(a)}}class F7 extends N7{orbitRadius=15;speed=1;heightOffset=0;phaseOffset=0;totalTime=0;setOrbitParameters(a,f,c,o){this.orbitRadius=a,this.speed=f,this.heightOffset=c,this.phaseOffset=o}update(a){this.totalTime+=a;const f=this.totalTime*this.speed+this.phaseOffset,c=Math.cos(f)*this.orbitRadius,o=Math.sin(f)*this.orbitRadius,d=Math.sin(this.totalTime*this.speed*.5+this.phaseOffset)*.2+this.heightOffset;this.setPosition(c,d,o),super.update(a)}}class W7 extends z7{cowTextureHandle=null;constructor(a){super(a)}async loadResources(){const a=await L7(w7),f=I3.create("cow_tex",a,{filter:Ze.LINEAR,wrap:X1.REPEAT,format:vr.RGBA,type:_5.TEXTURE_2D,width:a.width,height:a.height});this.cowTextureHandle=f}onSetup(){const a=Q7(q7),f=mr.create("cow",a.vertices,a.normals,a.uvs,a.indices);console.log("Loaded cow mesh:",f,a);const c=32,o=c,d=5e3,m=32;this.rootNode=new P3,this.rootNode.name="rootNode";const h=new J7;h.name="directionalLight",h.color=B7(1,0,0),h.intensity=.3,h.setParent(this.rootNode),this.rootNode.addChild(h);for(let L=0;L<m;L++){const U=new F7;U.name=`pointLight${L}`,U.intensity=50,U.radius=30,U.color=qe(Math.random(),Math.random(),Math.random(),1),U.setParent(this.rootNode),this.rootNode.addChild(U);const B=5+L*2,Z=.2+L*.1,J=1+L*1,q=L*Math.PI*2/m;U.setOrbitParameters(B,Z,J,q);const Q=new j1;Q.shader=Z1.create(Ye.vertexSource,Ye.unliFragmentSource),Q.name=`pointLightBody${L}`,Q.setScale(.5,.5,.5),Q.color=U.color,Q.setParent(U),U.addChild(Q)}const y=4;for(let L=0;L<y;L++){const U=new b5;U.name=`spotLight${L}`,U.intensity=500,U.range=60,U.angle=Math.PI/6;const B=L/y*Math.PI*2,Z=40;U.setPosition(Math.cos(B)*Z,20,Math.sin(B)*Z),U.rotateY(B+Math.PI),U.rotateX(Math.PI/4);const J=[qe(1,0,0,1),qe(0,1,0,1),qe(0,0,1,1),qe(1,1,0,1)];U.color=J[L],U.setParent(this.rootNode),this.rootNode.addChild(U);const q=new j1;q.shader=Z1.create(Ye.vertexSource,Ye.unliFragmentSource),q.name=`spotLightBody${L}`,q.setScale(.7,.7,.7),q.color=U.color,q.setParent(U),U.addChild(q)}const b=new j1;b.name="floor",b.setPosition(0,-10,0),b.setScale(100,.5,100),b.rotateX(.2),b.color=[1,1,1,1],b.setParent(this.rootNode),this.rootNode.addChild(b);let N=this.rootNode;for(let L=0;L<c;L++){const U=new E5;U.texture=this.cowTextureHandle,U.name=`cube${L}`,U.setParent(N),N.addChild(U),U.setPosition(.6,.1,0);const B=.9-L/c*.4;U.setScale(B,B,B),L===0&&U.setScale(8,8,8);const Z=L/c*360,J=Math.abs(Math.sin(Z*Math.PI/180)),q=Math.abs(Math.sin((Z+120)*Math.PI/180)),Q=Math.abs(Math.sin((Z+240)*Math.PI/180));U.color=[J,q,Q,1],N=U}let R=this.rootNode;for(let L=0;L<o;L++){const U=new E5;U.name=`oppositeCube${L}`,U.setParent(R),R.addChild(U),U.setPosition(-.6,-.1,0);const B=.9-L/o*.4;U.setScale(B,B,B),L===0&&U.setScale(8,8,8);const Z=L/o*360,J=Math.abs(Math.sin(Z*Math.PI/180)),q=Math.abs(Math.sin((Z+120)*Math.PI/180)),Q=Math.abs(Math.sin((Z+240)*Math.PI/180));U.color=[J,q,Q,1],R=U}const w=new Z7;w.setPosition(0,100,-5),w.rotateY(Math.PI),w.rotateX(-Math.PI/2),w.name="camera",w.setParent(this.rootNode),this.rootNode.addChild(w);const j=new b5;j.name="cameraSpotlight",j.intensity=100,j.range=800,j.angle=Math.PI/8,j.color=qe(1,1,1,1),j.setParent(w),w.addChild(j);for(let L=0;L<d;L++){const U=new K7;U.mesh=f,U.texture=this.cowTextureHandle;let B,Z,J;do B=Math.random()*100-50,Z=Math.random()*200-100,J=Math.random()*100-50;while(J<0&&Math.abs(B)<20&&Math.abs(Z)<20);U.setPosition(B,Z,J),U.setScale(1,1,1),U.color=[Math.random(),Math.random(),Math.random(),1],U.amplitude=1,U.frequency=1,U.phase=L*Math.PI/10,U.name=`sineWaveMesh${L}`,U.rotateX(L*Math.PI/100),U.rotateY(L*Math.PI/100/2),U.rotateZ(L*Math.PI/100/3),U.setParent(this.rootNode),this.rootNode.addChild(U)}super.setupNodes(this.rootNode)}}let sr=null;const $7=()=>{const u=$3.c(3),a=Xe.useRef(null),f=Xe.useRef(!1);let c,o;u[0]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{if(!(!a.current||f.current))return f.current=!0,sr=new p7({canvas:a.current}),n7.setCurrentScene(k7),()=>{sr&&(sr.destroy?.(),sr=null,f.current=!1)}},o=[],u[0]=c,u[1]=o):(c=u[0],o=u[1]),Xe.useEffect(c,o);let d;return u[2]===Symbol.for("react.memo_cache_sentinel")?(d=Ve.jsx("canvas",{ref:a,id:"game-canvas",style:{width:"100%",height:"100%"}}),u[2]=d):d=u[2],d};function k7(u){return new W7(u)}function I7(){const u=$3.c(1);let a;return u[0]===Symbol.for("react.memo_cache_sentinel")?(a=Ve.jsx($7,{}),u[0]=a):a=u[0],a}const P7=Xe.createContext(null),tf=u=>{const a=$3.c(5),{children:f}=u,[c,o]=Xe.useState();let d;a[0]!==c?(d={enginok:c,setEnginokInstance:o},a[0]=c,a[1]=d):d=a[1];let m;return a[2]!==f||a[3]!==d?(m=Ve.jsx(P7.Provider,{value:d,children:f}),a[2]=f,a[3]=d,a[4]=m):m=a[4],m};a9.createRoot(document.getElementById("root")).render(Ve.jsx(Xe.StrictMode,{children:Ve.jsx(tf,{children:Ve.jsx(I7,{})})}));
