(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const A of p.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&s(A)}).observe(document,{childList:!0,subtree:!0});function m(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(c){if(c.ep)return;c.ep=!0;const p=m(c);fetch(c.href,p)}})();function yy(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var Dh={exports:{}},Mt={};var Fm;function e2(){if(Fm)return Mt;Fm=1;var h=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function m(s,c,p){var A=null;if(p!==void 0&&(A=""+p),c.key!==void 0&&(A=""+c.key),"key"in c){p={};for(var H in c)H!=="key"&&(p[H]=c[H])}else p=c;return c=p.ref,{$$typeof:h,type:s,key:A,ref:c!==void 0?c:null,props:p}}return Mt.Fragment=o,Mt.jsx=m,Mt.jsxs=m,Mt}var Pm;function i2(){return Pm||(Pm=1,Dh.exports=e2()),Dh.exports}var O=i2(),Mh={exports:{}},F={};var Im;function t2(){if(Im)return F;Im=1;var h=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),A=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),x=Symbol.iterator;function X(g){return g===null||typeof g!="object"?null:(g=x&&g[x]||g["@@iterator"],typeof g=="function"?g:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,q={};function K(g,_,B){this.props=g,this.context=_,this.refs=q,this.updater=B||Q}K.prototype.isReactComponent={},K.prototype.setState=function(g,_){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,_,"setState")},K.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Y(){}Y.prototype=K.prototype;function P(g,_,B){this.props=g,this.context=_,this.refs=q,this.updater=B||Q}var An=P.prototype=new Y;An.constructor=P,W(An,K.prototype),An.isPureReactComponent=!0;var En=Array.isArray;function xn(){}var an={H:null,A:null,T:null,S:null},Un=Object.prototype.hasOwnProperty;function Rn(g,_,B){var J=B.ref;return{$$typeof:h,type:g,key:_,ref:J!==void 0?J:null,props:B}}function la(g,_){return Rn(g.type,_,g.props)}function ra(g){return typeof g=="object"&&g!==null&&g.$$typeof===h}function Pn(g){var _={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(B){return _[B]})}var Te=/\/+/g;function Ua(g,_){return typeof g=="object"&&g!==null&&g.key!=null?Pn(""+g.key):_.toString(36)}function Ra(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(xn,xn):(g.status="pending",g.then(function(_){g.status==="pending"&&(g.status="fulfilled",g.value=_)},function(_){g.status==="pending"&&(g.status="rejected",g.reason=_)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function D(g,_,B,J,I){var tn=typeof g;(tn==="undefined"||tn==="boolean")&&(g=null);var yn=!1;if(g===null)yn=!0;else switch(tn){case"bigint":case"string":case"number":yn=!0;break;case"object":switch(g.$$typeof){case h:case o:yn=!0;break;case R:return yn=g._init,D(yn(g._payload),_,B,J,I)}}if(yn)return I=I(g),yn=J===""?"."+Ua(g,0):J,En(I)?(B="",yn!=null&&(B=yn.replace(Te,"$&/")+"/"),D(I,_,B,"",function(xi){return xi})):I!=null&&(ra(I)&&(I=la(I,B+(I.key==null||g&&g.key===I.key?"":(""+I.key).replace(Te,"$&/")+"/")+yn)),_.push(I)),1;yn=0;var $n=J===""?".":J+":";if(En(g))for(var Mn=0;Mn<g.length;Mn++)J=g[Mn],tn=$n+Ua(J,Mn),yn+=D(J,_,B,tn,I);else if(Mn=X(g),typeof Mn=="function")for(g=Mn.call(g),Mn=0;!(J=g.next()).done;)J=J.value,tn=$n+Ua(J,Mn++),yn+=D(J,_,B,tn,I);else if(tn==="object"){if(typeof g.then=="function")return D(Ra(g),_,B,J,I);throw _=String(g),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return yn}function N(g,_,B){if(g==null)return g;var J=[],I=0;return D(g,J,"","",function(tn){return _.call(B,tn,I++)}),J}function $(g){if(g._status===-1){var _=g._result;_=_(),_.then(function(B){(g._status===0||g._status===-1)&&(g._status=1,g._result=B)},function(B){(g._status===0||g._status===-1)&&(g._status=2,g._result=B)}),g._status===-1&&(g._status=0,g._result=_)}if(g._status===1)return g._result.default;throw g._result}var fn=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},Sn={map:N,forEach:function(g,_,B){N(g,function(){_.apply(this,arguments)},B)},count:function(g){var _=0;return N(g,function(){_++}),_},toArray:function(g){return N(g,function(_){return _})||[]},only:function(g){if(!ra(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return F.Activity=z,F.Children=Sn,F.Component=K,F.Fragment=m,F.Profiler=c,F.PureComponent=P,F.StrictMode=s,F.Suspense=S,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=an,F.__COMPILER_RUNTIME={__proto__:null,c:function(g){return an.H.useMemoCache(g)}},F.cache=function(g){return function(){return g.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(g,_,B){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var J=W({},g.props),I=g.key;if(_!=null)for(tn in _.key!==void 0&&(I=""+_.key),_)!Un.call(_,tn)||tn==="key"||tn==="__self"||tn==="__source"||tn==="ref"&&_.ref===void 0||(J[tn]=_[tn]);var tn=arguments.length-2;if(tn===1)J.children=B;else if(1<tn){for(var yn=Array(tn),$n=0;$n<tn;$n++)yn[$n]=arguments[$n+2];J.children=yn}return Rn(g.type,I,J)},F.createContext=function(g){return g={$$typeof:A,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},F.createElement=function(g,_,B){var J,I={},tn=null;if(_!=null)for(J in _.key!==void 0&&(tn=""+_.key),_)Un.call(_,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(I[J]=_[J]);var yn=arguments.length-2;if(yn===1)I.children=B;else if(1<yn){for(var $n=Array(yn),Mn=0;Mn<yn;Mn++)$n[Mn]=arguments[Mn+2];I.children=$n}if(g&&g.defaultProps)for(J in yn=g.defaultProps,yn)I[J]===void 0&&(I[J]=yn[J]);return Rn(g,tn,I)},F.createRef=function(){return{current:null}},F.forwardRef=function(g){return{$$typeof:H,render:g}},F.isValidElement=ra,F.lazy=function(g){return{$$typeof:R,_payload:{_status:-1,_result:g},_init:$}},F.memo=function(g,_){return{$$typeof:v,type:g,compare:_===void 0?null:_}},F.startTransition=function(g){var _=an.T,B={};an.T=B;try{var J=g(),I=an.S;I!==null&&I(B,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(xn,fn)}catch(tn){fn(tn)}finally{_!==null&&B.types!==null&&(_.types=B.types),an.T=_}},F.unstable_useCacheRefresh=function(){return an.H.useCacheRefresh()},F.use=function(g){return an.H.use(g)},F.useActionState=function(g,_,B){return an.H.useActionState(g,_,B)},F.useCallback=function(g,_){return an.H.useCallback(g,_)},F.useContext=function(g){return an.H.useContext(g)},F.useDebugValue=function(){},F.useDeferredValue=function(g,_){return an.H.useDeferredValue(g,_)},F.useEffect=function(g,_){return an.H.useEffect(g,_)},F.useEffectEvent=function(g){return an.H.useEffectEvent(g)},F.useId=function(){return an.H.useId()},F.useImperativeHandle=function(g,_,B){return an.H.useImperativeHandle(g,_,B)},F.useInsertionEffect=function(g,_){return an.H.useInsertionEffect(g,_)},F.useLayoutEffect=function(g,_){return an.H.useLayoutEffect(g,_)},F.useMemo=function(g,_){return an.H.useMemo(g,_)},F.useOptimistic=function(g,_){return an.H.useOptimistic(g,_)},F.useReducer=function(g,_,B){return an.H.useReducer(g,_,B)},F.useRef=function(g){return an.H.useRef(g)},F.useState=function(g){return an.H.useState(g)},F.useSyncExternalStore=function(g,_,B){return an.H.useSyncExternalStore(g,_,B)},F.useTransition=function(){return an.H.useTransition()},F.version="19.2.0",F}var ny;function Lh(){return ny||(ny=1,Mh.exports=t2()),Mh.exports}var C=Lh();const cy=yy(C);var Th={exports:{}},Tt={},zh={exports:{}},_h={};var ay;function u2(){return ay||(ay=1,(function(h){function o(D,N){var $=D.length;D.push(N);n:for(;0<$;){var fn=$-1>>>1,Sn=D[fn];if(0<c(Sn,N))D[fn]=N,D[$]=Sn,$=fn;else break n}}function m(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var N=D[0],$=D.pop();if($!==N){D[0]=$;n:for(var fn=0,Sn=D.length,g=Sn>>>1;fn<g;){var _=2*(fn+1)-1,B=D[_],J=_+1,I=D[J];if(0>c(B,$))J<Sn&&0>c(I,B)?(D[fn]=I,D[J]=$,fn=J):(D[fn]=B,D[_]=$,fn=_);else if(J<Sn&&0>c(I,$))D[fn]=I,D[J]=$,fn=J;else break n}}return N}function c(D,N){var $=D.sortIndex-N.sortIndex;return $!==0?$:D.id-N.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;h.unstable_now=function(){return p.now()}}else{var A=Date,H=A.now();h.unstable_now=function(){return A.now()-H}}var S=[],v=[],R=1,z=null,x=3,X=!1,Q=!1,W=!1,q=!1,K=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function An(D){for(var N=m(v);N!==null;){if(N.callback===null)s(v);else if(N.startTime<=D)s(v),N.sortIndex=N.expirationTime,o(S,N);else break;N=m(v)}}function En(D){if(W=!1,An(D),!Q)if(m(S)!==null)Q=!0,xn||(xn=!0,Pn());else{var N=m(v);N!==null&&Ra(En,N.startTime-D)}}var xn=!1,an=-1,Un=5,Rn=-1;function la(){return q?!0:!(h.unstable_now()-Rn<Un)}function ra(){if(q=!1,xn){var D=h.unstable_now();Rn=D;var N=!0;try{n:{Q=!1,W&&(W=!1,Y(an),an=-1),X=!0;var $=x;try{a:{for(An(D),z=m(S);z!==null&&!(z.expirationTime>D&&la());){var fn=z.callback;if(typeof fn=="function"){z.callback=null,x=z.priorityLevel;var Sn=fn(z.expirationTime<=D);if(D=h.unstable_now(),typeof Sn=="function"){z.callback=Sn,An(D),N=!0;break a}z===m(S)&&s(S),An(D)}else s(S);z=m(S)}if(z!==null)N=!0;else{var g=m(v);g!==null&&Ra(En,g.startTime-D),N=!1}}break n}finally{z=null,x=$,X=!1}N=void 0}}finally{N?Pn():xn=!1}}}var Pn;if(typeof P=="function")Pn=function(){P(ra)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Ua=Te.port2;Te.port1.onmessage=ra,Pn=function(){Ua.postMessage(null)}}else Pn=function(){K(ra,0)};function Ra(D,N){an=K(function(){D(h.unstable_now())},N)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(D){D.callback=null},h.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Un=0<D?Math.floor(1e3/D):5},h.unstable_getCurrentPriorityLevel=function(){return x},h.unstable_next=function(D){switch(x){case 1:case 2:case 3:var N=3;break;default:N=x}var $=x;x=N;try{return D()}finally{x=$}},h.unstable_requestPaint=function(){q=!0},h.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=x;x=D;try{return N()}finally{x=$}},h.unstable_scheduleCallback=function(D,N,$){var fn=h.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?fn+$:fn):$=fn,D){case 1:var Sn=-1;break;case 2:Sn=250;break;case 5:Sn=1073741823;break;case 4:Sn=1e4;break;default:Sn=5e3}return Sn=$+Sn,D={id:R++,callback:N,priorityLevel:D,startTime:$,expirationTime:Sn,sortIndex:-1},$>fn?(D.sortIndex=$,o(v,D),m(S)===null&&D===m(v)&&(W?(Y(an),an=-1):W=!0,Ra(En,$-fn))):(D.sortIndex=Sn,o(S,D),Q||X||(Q=!0,xn||(xn=!0,Pn()))),D},h.unstable_shouldYield=la,h.unstable_wrapCallback=function(D){var N=x;return function(){var $=x;x=N;try{return D.apply(this,arguments)}finally{x=$}}}})(_h)),_h}var ey;function l2(){return ey||(ey=1,zh.exports=u2()),zh.exports}var Oh={exports:{}},Wn={};var iy;function r2(){if(iy)return Wn;iy=1;var h=Lh();function o(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)v+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var s={d:{f:m,r:function(){throw Error(o(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},c=Symbol.for("react.portal");function p(S,v,R){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:z==null?null:""+z,children:S,containerInfo:v,implementation:R}}var A=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function H(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wn.createPortal=function(S,v){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(o(299));return p(S,v,null,R)},Wn.flushSync=function(S){var v=A.T,R=s.p;try{if(A.T=null,s.p=2,S)return S()}finally{A.T=v,s.p=R,s.d.f()}},Wn.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Wn.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Wn.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var R=v.as,z=H(R,v.crossOrigin),x=typeof v.integrity=="string"?v.integrity:void 0,X=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;R==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:z,integrity:x,fetchPriority:X}):R==="script"&&s.d.X(S,{crossOrigin:z,integrity:x,fetchPriority:X,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Wn.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var R=H(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(S)},Wn.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var R=v.as,z=H(R,v.crossOrigin);s.d.L(S,R,{crossOrigin:z,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Wn.preloadModule=function(S,v){if(typeof S=="string")if(v){var R=H(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(S)},Wn.requestFormReset=function(S){s.d.r(S)},Wn.unstable_batchedUpdates=function(S,v){return S(v)},Wn.useFormState=function(S,v,R){return A.H.useFormState(S,v,R)},Wn.useFormStatus=function(){return A.H.useHostTransitionStatus()},Wn.version="19.2.0",Wn}var ty;function h2(){if(ty)return Oh.exports;ty=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(o){console.error(o)}}return h(),Oh.exports=r2(),Oh.exports}var uy;function s2(){if(uy)return Tt;uy=1;var h=l2(),o=Lh(),m=h2();function s(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)a+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function p(n){var a=n,e=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(e=a.return),n=a.return;while(n)}return a.tag===3?e:null}function A(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function H(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function S(n){if(p(n)!==n)throw Error(s(188))}function v(n){var a=n.alternate;if(!a){if(a=p(n),a===null)throw Error(s(188));return a!==n?null:n}for(var e=n,i=a;;){var t=e.return;if(t===null)break;var u=t.alternate;if(u===null){if(i=t.return,i!==null){e=i;continue}break}if(t.child===u.child){for(u=t.child;u;){if(u===e)return S(t),n;if(u===i)return S(t),a;u=u.sibling}throw Error(s(188))}if(e.return!==i.return)e=t,i=u;else{for(var r=!1,d=t.child;d;){if(d===e){r=!0,e=t,i=u;break}if(d===i){r=!0,i=t,e=u;break}d=d.sibling}if(!r){for(d=u.child;d;){if(d===e){r=!0,e=u,i=t;break}if(d===i){r=!0,i=u,e=t;break}d=d.sibling}if(!r)throw Error(s(189))}}if(e.alternate!==i)throw Error(s(190))}if(e.tag!==3)throw Error(s(188));return e.stateNode.current===e?n:a}function R(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=R(n),a!==null)return a;n=n.sibling}return null}var z=Object.assign,x=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),P=Symbol.for("react.context"),An=Symbol.for("react.forward_ref"),En=Symbol.for("react.suspense"),xn=Symbol.for("react.suspense_list"),an=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Rn=Symbol.for("react.activity"),la=Symbol.for("react.memo_cache_sentinel"),ra=Symbol.iterator;function Pn(n){return n===null||typeof n!="object"?null:(n=ra&&n[ra]||n["@@iterator"],typeof n=="function"?n:null)}var Te=Symbol.for("react.client.reference");function Ua(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Te?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case W:return"Fragment";case K:return"Profiler";case q:return"StrictMode";case En:return"Suspense";case xn:return"SuspenseList";case Rn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Q:return"Portal";case P:return n.displayName||"Context";case Y:return(n._context.displayName||"Context")+".Consumer";case An:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case an:return a=n.displayName||null,a!==null?a:Ua(n.type)||"Memo";case Un:a=n._payload,n=n._init;try{return Ua(n(a))}catch{}}return null}var Ra=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},fn=[],Sn=-1;function g(n){return{current:n}}function _(n){0>Sn||(n.current=fn[Sn],fn[Sn]=null,Sn--)}function B(n,a){Sn++,fn[Sn]=n.current,n.current=a}var J=g(null),I=g(null),tn=g(null),yn=g(null);function $n(n,a){switch(B(tn,a),B(I,n),B(J,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Sm(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Sm(a),n=bm(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}_(J),B(J,n)}function Mn(){_(J),_(I),_(tn)}function xi(n){n.memoizedState!==null&&B(yn,n);var a=J.current,e=bm(a,n.type);a!==e&&(B(I,n),B(J,e))}function Lt(n){I.current===n&&(_(J),_(I)),yn.current===n&&(_(yn),Et._currentValue=$)}var ml,Wh;function ze(n){if(ml===void 0)try{throw Error()}catch(e){var a=e.stack.trim().match(/\n( *(at )?)/);ml=a&&a[1]||"",Wh=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ml+n+Wh}var yl=!1;function cl(n,a){if(!n||yl)return"";yl=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(G){var j=G}Reflect.construct(n,[],T)}else{try{T.call()}catch(G){j=G}n.call(T.prototype)}}else{try{throw Error()}catch(G){j=G}(T=n())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(G){if(G&&j&&typeof G.stack=="string")return[G.stack,j.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var t=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");t&&t.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),r=u[0],d=u[1];if(r&&d){var y=r.split(`
`),w=d.split(`
`);for(t=i=0;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;for(;t<w.length&&!w[t].includes("DetermineComponentFrameRoot");)t++;if(i===y.length||t===w.length)for(i=y.length-1,t=w.length-1;1<=i&&0<=t&&y[i]!==w[t];)t--;for(;1<=i&&0<=t;i--,t--)if(y[i]!==w[t]){if(i!==1||t!==1)do if(i--,t--,0>t||y[i]!==w[t]){var E=`
`+y[i].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=i&&0<=t);break}}}finally{yl=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ze(e):""}function zy(n,a){switch(n.tag){case 26:case 27:case 5:return ze(n.type);case 16:return ze("Lazy");case 13:return n.child!==a&&a!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return cl(n.type,!1);case 11:return cl(n.type.render,!1);case 1:return cl(n.type,!0);case 31:return ze("Activity");default:return""}}function $h(n){try{var a="",e=null;do a+=zy(n,e),e=n,n=n.return;while(n);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var vl=Object.prototype.hasOwnProperty,fl=h.unstable_scheduleCallback,gl=h.unstable_cancelCallback,_y=h.unstable_shouldYield,Oy=h.unstable_requestPaint,ha=h.unstable_now,Ny=h.unstable_getCurrentPriorityLevel,Fh=h.unstable_ImmediatePriority,Ph=h.unstable_UserBlockingPriority,Kt=h.unstable_NormalPriority,By=h.unstable_LowPriority,Ih=h.unstable_IdlePriority,xy=h.log,Uy=h.unstable_setDisableYieldValue,Ui=null,sa=null;function le(n){if(typeof xy=="function"&&Uy(n),sa&&typeof sa.setStrictMode=="function")try{sa.setStrictMode(Ui,n)}catch{}}var da=Math.clz32?Math.clz32:Ky,Jy=Math.log,Ly=Math.LN2;function Ky(n){return n>>>=0,n===0?32:31-(Jy(n)/Ly|0)|0}var Yt=256,qt=262144,Xt=4194304;function _e(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Vt(n,a,e){var i=n.pendingLanes;if(i===0)return 0;var t=0,u=n.suspendedLanes,r=n.pingedLanes;n=n.warmLanes;var d=i&134217727;return d!==0?(i=d&~u,i!==0?t=_e(i):(r&=d,r!==0?t=_e(r):e||(e=d&~n,e!==0&&(t=_e(e))))):(d=i&~u,d!==0?t=_e(d):r!==0?t=_e(r):e||(e=i&~n,e!==0&&(t=_e(e)))),t===0?0:a!==0&&a!==t&&(a&u)===0&&(u=t&-t,e=a&-a,u>=e||u===32&&(e&4194048)!==0)?a:t}function Ji(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Yy(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(){var n=Xt;return Xt<<=1,(Xt&62914560)===0&&(Xt=4194304),n}function pl(n){for(var a=[],e=0;31>e;e++)a.push(n);return a}function Li(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function qy(n,a,e,i,t,u){var r=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var d=n.entanglements,y=n.expirationTimes,w=n.hiddenUpdates;for(e=r&~e;0<e;){var E=31-da(e),T=1<<E;d[E]=0,y[E]=-1;var j=w[E];if(j!==null)for(w[E]=null,E=0;E<j.length;E++){var G=j[E];G!==null&&(G.lane&=-536870913)}e&=~T}i!==0&&as(n,i,0),u!==0&&t===0&&n.tag!==0&&(n.suspendedLanes|=u&~(r&~a))}function as(n,a,e){n.pendingLanes|=a,n.suspendedLanes&=~a;var i=31-da(a);n.entangledLanes|=a,n.entanglements[i]=n.entanglements[i]|1073741824|e&261930}function es(n,a){var e=n.entangledLanes|=a;for(n=n.entanglements;e;){var i=31-da(e),t=1<<i;t&a|n[i]&a&&(n[i]|=a),e&=~t}}function is(n,a){var e=a&-a;return e=(e&42)!==0?1:kl(e),(e&(n.suspendedLanes|a))!==0?0:e}function kl(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Sl(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ts(){var n=N.p;return n!==0?n:(n=window.event,n===void 0?32:qm(n.type))}function us(n,a){var e=N.p;try{return N.p=n,a()}finally{N.p=e}}var re=Math.random().toString(36).slice(2),Yn="__reactFiber$"+re,In="__reactProps$"+re,Pe="__reactContainer$"+re,bl="__reactEvents$"+re,Xy="__reactListeners$"+re,Vy="__reactHandles$"+re,ls="__reactResources$"+re,Ki="__reactMarker$"+re;function wl(n){delete n[Yn],delete n[In],delete n[bl],delete n[Xy],delete n[Vy]}function Ie(n){var a=n[Yn];if(a)return a;for(var e=n.parentNode;e;){if(a=e[Pe]||e[Yn]){if(e=a.alternate,a.child!==null||e!==null&&e.child!==null)for(n=Rm(n);n!==null;){if(e=n[Yn])return e;n=Rm(n)}return a}n=e,e=n.parentNode}return null}function ni(n){if(n=n[Yn]||n[Pe]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function Yi(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(s(33))}function ai(n){var a=n[ls];return a||(a=n[ls]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ln(n){n[Ki]=!0}var rs=new Set,hs={};function Oe(n,a){ei(n,a),ei(n+"Capture",a)}function ei(n,a){for(hs[n]=a,n=0;n<a.length;n++)rs.add(a[n])}var Qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ss={},ds={};function Zy(n){return vl.call(ds,n)?!0:vl.call(ss,n)?!1:Qy.test(n)?ds[n]=!0:(ss[n]=!0,!1)}function Qt(n,a,e){if(Zy(a))if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+e)}}function Zt(n,a,e){if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+e)}}function Ja(n,a,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(a,e,""+i)}}function pa(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function os(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Wy(n,a,e){var i=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var t=i.get,u=i.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return t.call(this)},set:function(r){e=""+r,u.call(this,r)}}),Object.defineProperty(n,a,{enumerable:i.enumerable}),{getValue:function(){return e},setValue:function(r){e=""+r},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function jl(n){if(!n._valueTracker){var a=os(n)?"checked":"value";n._valueTracker=Wy(n,a,""+n[a])}}function ms(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var e=a.getValue(),i="";return n&&(i=os(n)?n.checked?"true":"false":n.value),n=i,n!==e?(a.setValue(n),!0):!1}function Wt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var $y=/[\n"\\]/g;function ka(n){return n.replace($y,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Al(n,a,e,i,t,u,r,d){n.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.type=r:n.removeAttribute("type"),a!=null?r==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+pa(a)):n.value!==""+pa(a)&&(n.value=""+pa(a)):r!=="submit"&&r!=="reset"||n.removeAttribute("value"),a!=null?Gl(n,r,pa(a)):e!=null?Gl(n,r,pa(e)):i!=null&&n.removeAttribute("value"),t==null&&u!=null&&(n.defaultChecked=!!u),t!=null&&(n.checked=t&&typeof t!="function"&&typeof t!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?n.name=""+pa(d):n.removeAttribute("name")}function ys(n,a,e,i,t,u,r,d){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.type=u),a!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||a!=null)){jl(n);return}e=e!=null?""+pa(e):"",a=a!=null?""+pa(a):e,d||a===n.value||(n.value=a),n.defaultValue=a}i=i??t,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=d?n.checked:!!i,n.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.name=r),jl(n)}function Gl(n,a,e){a==="number"&&Wt(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function ii(n,a,e,i){if(n=n.options,a){a={};for(var t=0;t<e.length;t++)a["$"+e[t]]=!0;for(e=0;e<n.length;e++)t=a.hasOwnProperty("$"+n[e].value),n[e].selected!==t&&(n[e].selected=t),t&&i&&(n[e].defaultSelected=!0)}else{for(e=""+pa(e),a=null,t=0;t<n.length;t++){if(n[t].value===e){n[t].selected=!0,i&&(n[t].defaultSelected=!0);return}a!==null||n[t].disabled||(a=n[t])}a!==null&&(a.selected=!0)}}function cs(n,a,e){if(a!=null&&(a=""+pa(a),a!==n.value&&(n.value=a),e==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=e!=null?""+pa(e):""}function vs(n,a,e,i){if(a==null){if(i!=null){if(e!=null)throw Error(s(92));if(Ra(i)){if(1<i.length)throw Error(s(93));i=i[0]}e=i}e==null&&(e=""),a=e}e=pa(a),n.defaultValue=e,i=n.textContent,i===e&&i!==""&&i!==null&&(n.value=i),jl(n)}function ti(n,a){if(a){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=a;return}}n.textContent=a}var Fy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fs(n,a,e){var i=a.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":i?n.setProperty(a,e):typeof e!="number"||e===0||Fy.has(a)?a==="float"?n.cssFloat=e:n[a]=(""+e).trim():n[a]=e+"px"}function gs(n,a,e){if(a!=null&&typeof a!="object")throw Error(s(62));if(n=n.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var t in a)i=a[t],a.hasOwnProperty(t)&&e[t]!==i&&fs(n,t,i)}else for(var u in a)a.hasOwnProperty(u)&&fs(n,u,a[u])}function Cl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(n){return Iy.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function La(){}var El=null;function Rl(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ui=null,li=null;function ps(n){var a=ni(n);if(a&&(n=a.stateNode)){var e=n[In]||null;n:switch(n=a.stateNode,a.type){case"input":if(Al(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),a=e.name,e.type==="radio"&&a!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ka(""+a)+'"][type="radio"]'),a=0;a<e.length;a++){var i=e[a];if(i!==n&&i.form===n.form){var t=i[In]||null;if(!t)throw Error(s(90));Al(i,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name)}}for(a=0;a<e.length;a++)i=e[a],i.form===n.form&&ms(i)}break n;case"textarea":cs(n,e.value,e.defaultValue);break n;case"select":a=e.value,a!=null&&ii(n,!!e.multiple,a,!1)}}}var Hl=!1;function ks(n,a,e){if(Hl)return n(a,e);Hl=!0;try{var i=n(a);return i}finally{if(Hl=!1,(ui!==null||li!==null)&&(Bu(),ui&&(a=ui,n=li,li=ui=null,ps(a),n)))for(a=0;a<n.length;a++)ps(n[a])}}function qi(n,a){var e=n.stateNode;if(e===null)return null;var i=e[In]||null;if(i===null)return null;e=i[a];n:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(s(231,a,typeof e));return e}var Ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=!1;if(Ka)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{Dl=!1}var he=null,Ml=null,Ft=null;function Ss(){if(Ft)return Ft;var n,a=Ml,e=a.length,i,t="value"in he?he.value:he.textContent,u=t.length;for(n=0;n<e&&a[n]===t[n];n++);var r=e-n;for(i=1;i<=r&&a[e-i]===t[u-i];i++);return Ft=t.slice(n,1<i?1-i:void 0)}function Pt(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function It(){return!0}function bs(){return!1}function na(n){function a(e,i,t,u,r){this._reactName=e,this._targetInst=t,this.type=i,this.nativeEvent=u,this.target=r,this.currentTarget=null;for(var d in n)n.hasOwnProperty(d)&&(e=n[d],this[d]=e?e(u):u[d]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?It:bs,this.isPropagationStopped=bs,this}return z(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=It)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=It)},persist:function(){},isPersistent:It}),a}var Ne={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=na(Ne),Vi=z({},Ne,{view:0,detail:0}),nc=na(Vi),Tl,zl,Qi,au=z({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ol,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qi&&(Qi&&n.type==="mousemove"?(Tl=n.screenX-Qi.screenX,zl=n.screenY-Qi.screenY):zl=Tl=0,Qi=n),Tl)},movementY:function(n){return"movementY"in n?n.movementY:zl}}),ws=na(au),ac=z({},au,{dataTransfer:0}),ec=na(ac),ic=z({},Vi,{relatedTarget:0}),_l=na(ic),tc=z({},Ne,{animationName:0,elapsedTime:0,pseudoElement:0}),uc=na(tc),lc=z({},Ne,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rc=na(lc),hc=z({},Ne,{data:0}),js=na(hc),sc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mc(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=oc[n])?!!a[n]:!1}function Ol(){return mc}var yc=z({},Vi,{key:function(n){if(n.key){var a=sc[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Pt(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ol,charCode:function(n){return n.type==="keypress"?Pt(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pt(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),cc=na(yc),vc=z({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=na(vc),fc=z({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ol}),gc=na(fc),pc=z({},Ne,{propertyName:0,elapsedTime:0,pseudoElement:0}),kc=na(pc),Sc=z({},au,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bc=na(Sc),wc=z({},Ne,{newState:0,oldState:0}),jc=na(wc),Ac=[9,13,27,32],Nl=Ka&&"CompositionEvent"in window,Zi=null;Ka&&"documentMode"in document&&(Zi=document.documentMode);var Gc=Ka&&"TextEvent"in window&&!Zi,Gs=Ka&&(!Nl||Zi&&8<Zi&&11>=Zi),Cs=" ",Es=!1;function Rs(n,a){switch(n){case"keyup":return Ac.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ri=!1;function Cc(n,a){switch(n){case"compositionend":return Hs(a);case"keypress":return a.which!==32?null:(Es=!0,Cs);case"textInput":return n=a.data,n===Cs&&Es?null:n;default:return null}}function Ec(n,a){if(ri)return n==="compositionend"||!Nl&&Rs(n,a)?(n=Ss(),Ft=Ml=he=null,ri=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Gs&&a.locale!=="ko"?null:a.data;default:return null}}var Rc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ds(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Rc[n.type]:a==="textarea"}function Ms(n,a,e,i){ui?li?li.push(i):li=[i]:ui=i,a=qu(a,"onChange"),0<a.length&&(e=new nu("onChange","change",null,e,i),n.push({event:e,listeners:a}))}var Wi=null,$i=null;function Hc(n){cm(n,0)}function eu(n){var a=Yi(n);if(ms(a))return n}function Ts(n,a){if(n==="change")return a}var zs=!1;if(Ka){var Bl;if(Ka){var xl="oninput"in document;if(!xl){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),xl=typeof _s.oninput=="function"}Bl=xl}else Bl=!1;zs=Bl&&(!document.documentMode||9<document.documentMode)}function Os(){Wi&&(Wi.detachEvent("onpropertychange",Ns),$i=Wi=null)}function Ns(n){if(n.propertyName==="value"&&eu($i)){var a=[];Ms(a,$i,n,Rl(n)),ks(Hc,a)}}function Dc(n,a,e){n==="focusin"?(Os(),Wi=a,$i=e,Wi.attachEvent("onpropertychange",Ns)):n==="focusout"&&Os()}function Mc(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return eu($i)}function Tc(n,a){if(n==="click")return eu(a)}function zc(n,a){if(n==="input"||n==="change")return eu(a)}function _c(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var oa=typeof Object.is=="function"?Object.is:_c;function Fi(n,a){if(oa(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var e=Object.keys(n),i=Object.keys(a);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var t=e[i];if(!vl.call(a,t)||!oa(n[t],a[t]))return!1}return!0}function Bs(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xs(n,a){var e=Bs(n);n=0;for(var i;e;){if(e.nodeType===3){if(i=n+e.textContent.length,n<=a&&i>=a)return{node:e,offset:a-n};n=i}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=Bs(e)}}function Us(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Us(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Js(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Wt(n.document);a instanceof n.HTMLIFrameElement;){try{var e=typeof a.contentWindow.location.href=="string"}catch{e=!1}if(e)n=a.contentWindow;else break;a=Wt(n.document)}return a}function Ul(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var Oc=Ka&&"documentMode"in document&&11>=document.documentMode,hi=null,Jl=null,Pi=null,Ll=!1;function Ls(n,a,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Ll||hi==null||hi!==Wt(i)||(i=hi,"selectionStart"in i&&Ul(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pi&&Fi(Pi,i)||(Pi=i,i=qu(Jl,"onSelect"),0<i.length&&(a=new nu("onSelect","select",null,a,e),n.push({event:a,listeners:i}),a.target=hi)))}function Be(n,a){var e={};return e[n.toLowerCase()]=a.toLowerCase(),e["Webkit"+n]="webkit"+a,e["Moz"+n]="moz"+a,e}var si={animationend:Be("Animation","AnimationEnd"),animationiteration:Be("Animation","AnimationIteration"),animationstart:Be("Animation","AnimationStart"),transitionrun:Be("Transition","TransitionRun"),transitionstart:Be("Transition","TransitionStart"),transitioncancel:Be("Transition","TransitionCancel"),transitionend:Be("Transition","TransitionEnd")},Kl={},Ks={};Ka&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function xe(n){if(Kl[n])return Kl[n];if(!si[n])return n;var a=si[n],e;for(e in a)if(a.hasOwnProperty(e)&&e in Ks)return Kl[n]=a[e];return n}var Ys=xe("animationend"),qs=xe("animationiteration"),Xs=xe("animationstart"),Nc=xe("transitionrun"),Bc=xe("transitionstart"),xc=xe("transitioncancel"),Vs=xe("transitionend"),Qs=new Map,Yl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yl.push("scrollEnd");function Ha(n,a){Qs.set(n,a),Oe(a,[n])}var iu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Sa=[],di=0,ql=0;function tu(){for(var n=di,a=ql=di=0;a<n;){var e=Sa[a];Sa[a++]=null;var i=Sa[a];Sa[a++]=null;var t=Sa[a];Sa[a++]=null;var u=Sa[a];if(Sa[a++]=null,i!==null&&t!==null){var r=i.pending;r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t}u!==0&&Zs(e,t,u)}}function uu(n,a,e,i){Sa[di++]=n,Sa[di++]=a,Sa[di++]=e,Sa[di++]=i,ql|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function Xl(n,a,e,i){return uu(n,a,e,i),lu(n)}function Ue(n,a){return uu(n,null,null,a),lu(n)}function Zs(n,a,e){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e);for(var t=!1,u=n.return;u!==null;)u.childLanes|=e,i=u.alternate,i!==null&&(i.childLanes|=e),u.tag===22&&(n=u.stateNode,n===null||n._visibility&1||(t=!0)),n=u,u=u.return;return n.tag===3?(u=n.stateNode,t&&a!==null&&(t=31-da(e),n=u.hiddenUpdates,i=n[t],i===null?n[t]=[a]:i.push(a),a.lane=e|536870912),u):null}function lu(n){if(50<St)throw St=0,nh=null,Error(s(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var oi={};function Uc(n,a,e,i){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ma(n,a,e,i){return new Uc(n,a,e,i)}function Vl(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ya(n,a){var e=n.alternate;return e===null?(e=ma(n.tag,a,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=a,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function Ws(n,a){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function ru(n,a,e,i,t,u){var r=0;if(i=n,typeof n=="function")Vl(n)&&(r=1);else if(typeof n=="string")r=qv(n,e,J.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Rn:return n=ma(31,e,a,t),n.elementType=Rn,n.lanes=u,n;case W:return Je(e.children,t,u,a);case q:r=8,t|=24;break;case K:return n=ma(12,e,a,t|2),n.elementType=K,n.lanes=u,n;case En:return n=ma(13,e,a,t),n.elementType=En,n.lanes=u,n;case xn:return n=ma(19,e,a,t),n.elementType=xn,n.lanes=u,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:r=10;break n;case Y:r=9;break n;case An:r=11;break n;case an:r=14;break n;case Un:r=16,i=null;break n}r=29,e=Error(s(130,n===null?"null":typeof n,"")),i=null}return a=ma(r,e,a,t),a.elementType=n,a.type=i,a.lanes=u,a}function Je(n,a,e,i){return n=ma(7,n,i,a),n.lanes=e,n}function Ql(n,a,e){return n=ma(6,n,null,a),n.lanes=e,n}function $s(n){var a=ma(18,null,null,0);return a.stateNode=n,a}function Zl(n,a,e){return a=ma(4,n.children!==null?n.children:[],n.key,a),a.lanes=e,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Fs=new WeakMap;function ba(n,a){if(typeof n=="object"&&n!==null){var e=Fs.get(n);return e!==void 0?e:(a={value:n,source:a,stack:$h(a)},Fs.set(n,a),a)}return{value:n,source:a,stack:$h(a)}}var mi=[],yi=0,hu=null,Ii=0,wa=[],ja=0,se=null,Ta=1,za="";function qa(n,a){mi[yi++]=Ii,mi[yi++]=hu,hu=n,Ii=a}function Ps(n,a,e){wa[ja++]=Ta,wa[ja++]=za,wa[ja++]=se,se=n;var i=Ta;n=za;var t=32-da(i)-1;i&=~(1<<t),e+=1;var u=32-da(a)+t;if(30<u){var r=t-t%5;u=(i&(1<<r)-1).toString(32),i>>=r,t-=r,Ta=1<<32-da(a)+t|e<<t|i,za=u+n}else Ta=1<<u|e<<t|i,za=n}function Wl(n){n.return!==null&&(qa(n,1),Ps(n,1,0))}function $l(n){for(;n===hu;)hu=mi[--yi],mi[yi]=null,Ii=mi[--yi],mi[yi]=null;for(;n===se;)se=wa[--ja],wa[ja]=null,za=wa[--ja],wa[ja]=null,Ta=wa[--ja],wa[ja]=null}function Is(n,a){wa[ja++]=Ta,wa[ja++]=za,wa[ja++]=se,Ta=a.id,za=a.overflow,se=n}var qn=null,wn=null,sn=!1,de=null,Aa=!1,Fl=Error(s(519));function oe(n){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nt(ba(a,n)),Fl}function nd(n){var a=n.stateNode,e=n.type,i=n.memoizedProps;switch(a[Yn]=n,a[In]=i,e){case"dialog":ln("cancel",a),ln("close",a);break;case"iframe":case"object":case"embed":ln("load",a);break;case"video":case"audio":for(e=0;e<wt.length;e++)ln(wt[e],a);break;case"source":ln("error",a);break;case"img":case"image":case"link":ln("error",a),ln("load",a);break;case"details":ln("toggle",a);break;case"input":ln("invalid",a),ys(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ln("invalid",a);break;case"textarea":ln("invalid",a),vs(a,i.value,i.defaultValue,i.children)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||a.textContent===""+e||i.suppressHydrationWarning===!0||pm(a.textContent,e)?(i.popover!=null&&(ln("beforetoggle",a),ln("toggle",a)),i.onScroll!=null&&ln("scroll",a),i.onScrollEnd!=null&&ln("scrollend",a),i.onClick!=null&&(a.onclick=La),a=!0):a=!1,a||oe(n,!0)}function ad(n){for(qn=n.return;qn;)switch(qn.tag){case 5:case 31:case 13:Aa=!1;return;case 27:case 3:Aa=!0;return;default:qn=qn.return}}function ci(n){if(n!==qn)return!1;if(!sn)return ad(n),sn=!0,!1;var a=n.tag,e;if((e=a!==3&&a!==27)&&((e=a===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||vh(n.type,n.memoizedProps)),e=!e),e&&wn&&oe(n),ad(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));wn=Em(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));wn=Em(n)}else a===27?(a=wn,Ge(n.type)?(n=Sh,Sh=null,wn=n):wn=a):wn=qn?Ca(n.stateNode.nextSibling):null;return!0}function Le(){wn=qn=null,sn=!1}function Pl(){var n=de;return n!==null&&(ta===null?ta=n:ta.push.apply(ta,n),de=null),n}function nt(n){de===null?de=[n]:de.push(n)}var Il=g(null),Ke=null,Xa=null;function me(n,a,e){B(Il,a._currentValue),a._currentValue=e}function Va(n){n._currentValue=Il.current,_(Il)}function nr(n,a,e){for(;n!==null;){var i=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),n===e)break;n=n.return}}function ar(n,a,e,i){var t=n.child;for(t!==null&&(t.return=n);t!==null;){var u=t.dependencies;if(u!==null){var r=t.child;u=u.firstContext;n:for(;u!==null;){var d=u;u=t;for(var y=0;y<a.length;y++)if(d.context===a[y]){u.lanes|=e,d=u.alternate,d!==null&&(d.lanes|=e),nr(u.return,e,n),i||(r=null);break n}u=d.next}}else if(t.tag===18){if(r=t.return,r===null)throw Error(s(341));r.lanes|=e,u=r.alternate,u!==null&&(u.lanes|=e),nr(r,e,n),r=null}else r=t.child;if(r!==null)r.return=t;else for(r=t;r!==null;){if(r===n){r=null;break}if(t=r.sibling,t!==null){t.return=r.return,r=t;break}r=r.return}t=r}}function vi(n,a,e,i){n=null;for(var t=a,u=!1;t!==null;){if(!u){if((t.flags&524288)!==0)u=!0;else if((t.flags&262144)!==0)break}if(t.tag===10){var r=t.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var d=t.type;oa(t.pendingProps.value,r.value)||(n!==null?n.push(d):n=[d])}}else if(t===yn.current){if(r=t.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==t.memoizedState.memoizedState&&(n!==null?n.push(Et):n=[Et])}t=t.return}n!==null&&ar(a,n,e,i),a.flags|=262144}function su(n){for(n=n.firstContext;n!==null;){if(!oa(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ye(n){Ke=n,Xa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Xn(n){return ed(Ke,n)}function du(n,a){return Ke===null&&Ye(n),ed(n,a)}function ed(n,a){var e=a._currentValue;if(a={context:a,memoizedValue:e,next:null},Xa===null){if(n===null)throw Error(s(308));Xa=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Xa=Xa.next=a;return e}var Jc=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(e,i){n.push(i)}};this.abort=function(){a.aborted=!0,n.forEach(function(e){return e()})}},Lc=h.unstable_scheduleCallback,Kc=h.unstable_NormalPriority,_n={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function er(){return{controller:new Jc,data:new Map,refCount:0}}function at(n){n.refCount--,n.refCount===0&&Lc(Kc,function(){n.controller.abort()})}var et=null,ir=0,fi=0,gi=null;function Yc(n,a){if(et===null){var e=et=[];ir=0,fi=lh(),gi={status:"pending",value:void 0,then:function(i){e.push(i)}}}return ir++,a.then(id,id),a}function id(){if(--ir===0&&et!==null){gi!==null&&(gi.status="fulfilled");var n=et;et=null,fi=0,gi=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function qc(n,a){var e=[],i={status:"pending",value:null,reason:null,then:function(t){e.push(t)}};return n.then(function(){i.status="fulfilled",i.value=a;for(var t=0;t<e.length;t++)(0,e[t])(a)},function(t){for(i.status="rejected",i.reason=t,t=0;t<e.length;t++)(0,e[t])(void 0)}),i}var td=D.S;D.S=function(n,a){Ko=ha(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Yc(n,a),td!==null&&td(n,a)};var qe=g(null);function tr(){var n=qe.current;return n!==null?n:bn.pooledCache}function ou(n,a){a===null?B(qe,qe.current):B(qe,a.pool)}function ud(){var n=tr();return n===null?null:{parent:_n._currentValue,pool:n}}var pi=Error(s(460)),ur=Error(s(474)),mu=Error(s(542)),yu={then:function(){}};function ld(n){return n=n.status,n==="fulfilled"||n==="rejected"}function rd(n,a,e){switch(e=n[e],e===void 0?n.push(a):e!==a&&(a.then(La,La),a=e),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,sd(n),n;default:if(typeof a.status=="string")a.then(La,La);else{if(n=bn,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=a,n.status="pending",n.then(function(i){if(a.status==="pending"){var t=a;t.status="fulfilled",t.value=i}},function(i){if(a.status==="pending"){var t=a;t.status="rejected",t.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,sd(n),n}throw Ve=a,pi}}function Xe(n){try{var a=n._init;return a(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ve=e,pi):e}}var Ve=null;function hd(){if(Ve===null)throw Error(s(459));var n=Ve;return Ve=null,n}function sd(n){if(n===pi||n===mu)throw Error(s(483))}var ki=null,it=0;function cu(n){var a=it;return it+=1,ki===null&&(ki=[]),rd(ki,n,a)}function tt(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function vu(n,a){throw a.$$typeof===x?Error(s(525)):(n=Object.prototype.toString.call(a),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function dd(n){function a(k,f){if(n){var b=k.deletions;b===null?(k.deletions=[f],k.flags|=16):b.push(f)}}function e(k,f){if(!n)return null;for(;f!==null;)a(k,f),f=f.sibling;return null}function i(k){for(var f=new Map;k!==null;)k.key!==null?f.set(k.key,k):f.set(k.index,k),k=k.sibling;return f}function t(k,f){return k=Ya(k,f),k.index=0,k.sibling=null,k}function u(k,f,b){return k.index=b,n?(b=k.alternate,b!==null?(b=b.index,b<f?(k.flags|=67108866,f):b):(k.flags|=67108866,f)):(k.flags|=1048576,f)}function r(k){return n&&k.alternate===null&&(k.flags|=67108866),k}function d(k,f,b,M){return f===null||f.tag!==6?(f=Ql(b,k.mode,M),f.return=k,f):(f=t(f,b),f.return=k,f)}function y(k,f,b,M){var V=b.type;return V===W?E(k,f,b.props.children,M,b.key):f!==null&&(f.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Un&&Xe(V)===f.type)?(f=t(f,b.props),tt(f,b),f.return=k,f):(f=ru(b.type,b.key,b.props,null,k.mode,M),tt(f,b),f.return=k,f)}function w(k,f,b,M){return f===null||f.tag!==4||f.stateNode.containerInfo!==b.containerInfo||f.stateNode.implementation!==b.implementation?(f=Zl(b,k.mode,M),f.return=k,f):(f=t(f,b.children||[]),f.return=k,f)}function E(k,f,b,M,V){return f===null||f.tag!==7?(f=Je(b,k.mode,M,V),f.return=k,f):(f=t(f,b),f.return=k,f)}function T(k,f,b){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ql(""+f,k.mode,b),f.return=k,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case X:return b=ru(f.type,f.key,f.props,null,k.mode,b),tt(b,f),b.return=k,b;case Q:return f=Zl(f,k.mode,b),f.return=k,f;case Un:return f=Xe(f),T(k,f,b)}if(Ra(f)||Pn(f))return f=Je(f,k.mode,b,null),f.return=k,f;if(typeof f.then=="function")return T(k,cu(f),b);if(f.$$typeof===P)return T(k,du(k,f),b);vu(k,f)}return null}function j(k,f,b,M){var V=f!==null?f.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return V!==null?null:d(k,f,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case X:return b.key===V?y(k,f,b,M):null;case Q:return b.key===V?w(k,f,b,M):null;case Un:return b=Xe(b),j(k,f,b,M)}if(Ra(b)||Pn(b))return V!==null?null:E(k,f,b,M,null);if(typeof b.then=="function")return j(k,f,cu(b),M);if(b.$$typeof===P)return j(k,f,du(k,b),M);vu(k,b)}return null}function G(k,f,b,M,V){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return k=k.get(b)||null,d(f,k,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return k=k.get(M.key===null?b:M.key)||null,y(f,k,M,V);case Q:return k=k.get(M.key===null?b:M.key)||null,w(f,k,M,V);case Un:return M=Xe(M),G(k,f,b,M,V)}if(Ra(M)||Pn(M))return k=k.get(b)||null,E(f,k,M,V,null);if(typeof M.then=="function")return G(k,f,b,cu(M),V);if(M.$$typeof===P)return G(k,f,b,du(f,M),V);vu(f,M)}return null}function U(k,f,b,M){for(var V=null,dn=null,L=f,en=f=0,hn=null;L!==null&&en<b.length;en++){L.index>en?(hn=L,L=null):hn=L.sibling;var on=j(k,L,b[en],M);if(on===null){L===null&&(L=hn);break}n&&L&&on.alternate===null&&a(k,L),f=u(on,f,en),dn===null?V=on:dn.sibling=on,dn=on,L=hn}if(en===b.length)return e(k,L),sn&&qa(k,en),V;if(L===null){for(;en<b.length;en++)L=T(k,b[en],M),L!==null&&(f=u(L,f,en),dn===null?V=L:dn.sibling=L,dn=L);return sn&&qa(k,en),V}for(L=i(L);en<b.length;en++)hn=G(L,k,en,b[en],M),hn!==null&&(n&&hn.alternate!==null&&L.delete(hn.key===null?en:hn.key),f=u(hn,f,en),dn===null?V=hn:dn.sibling=hn,dn=hn);return n&&L.forEach(function(De){return a(k,De)}),sn&&qa(k,en),V}function Z(k,f,b,M){if(b==null)throw Error(s(151));for(var V=null,dn=null,L=f,en=f=0,hn=null,on=b.next();L!==null&&!on.done;en++,on=b.next()){L.index>en?(hn=L,L=null):hn=L.sibling;var De=j(k,L,on.value,M);if(De===null){L===null&&(L=hn);break}n&&L&&De.alternate===null&&a(k,L),f=u(De,f,en),dn===null?V=De:dn.sibling=De,dn=De,L=hn}if(on.done)return e(k,L),sn&&qa(k,en),V;if(L===null){for(;!on.done;en++,on=b.next())on=T(k,on.value,M),on!==null&&(f=u(on,f,en),dn===null?V=on:dn.sibling=on,dn=on);return sn&&qa(k,en),V}for(L=i(L);!on.done;en++,on=b.next())on=G(L,k,en,on.value,M),on!==null&&(n&&on.alternate!==null&&L.delete(on.key===null?en:on.key),f=u(on,f,en),dn===null?V=on:dn.sibling=on,dn=on);return n&&L.forEach(function(a2){return a(k,a2)}),sn&&qa(k,en),V}function kn(k,f,b,M){if(typeof b=="object"&&b!==null&&b.type===W&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case X:n:{for(var V=b.key;f!==null;){if(f.key===V){if(V=b.type,V===W){if(f.tag===7){e(k,f.sibling),M=t(f,b.props.children),M.return=k,k=M;break n}}else if(f.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Un&&Xe(V)===f.type){e(k,f.sibling),M=t(f,b.props),tt(M,b),M.return=k,k=M;break n}e(k,f);break}else a(k,f);f=f.sibling}b.type===W?(M=Je(b.props.children,k.mode,M,b.key),M.return=k,k=M):(M=ru(b.type,b.key,b.props,null,k.mode,M),tt(M,b),M.return=k,k=M)}return r(k);case Q:n:{for(V=b.key;f!==null;){if(f.key===V)if(f.tag===4&&f.stateNode.containerInfo===b.containerInfo&&f.stateNode.implementation===b.implementation){e(k,f.sibling),M=t(f,b.children||[]),M.return=k,k=M;break n}else{e(k,f);break}else a(k,f);f=f.sibling}M=Zl(b,k.mode,M),M.return=k,k=M}return r(k);case Un:return b=Xe(b),kn(k,f,b,M)}if(Ra(b))return U(k,f,b,M);if(Pn(b)){if(V=Pn(b),typeof V!="function")throw Error(s(150));return b=V.call(b),Z(k,f,b,M)}if(typeof b.then=="function")return kn(k,f,cu(b),M);if(b.$$typeof===P)return kn(k,f,du(k,b),M);vu(k,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,f!==null&&f.tag===6?(e(k,f.sibling),M=t(f,b),M.return=k,k=M):(e(k,f),M=Ql(b,k.mode,M),M.return=k,k=M),r(k)):e(k,f)}return function(k,f,b,M){try{it=0;var V=kn(k,f,b,M);return ki=null,V}catch(L){if(L===pi||L===mu)throw L;var dn=ma(29,L,null,k.mode);return dn.lanes=M,dn.return=k,dn}finally{}}}var Qe=dd(!0),od=dd(!1),ye=!1;function lr(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rr(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ce(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ve(n,a,e){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(mn&2)!==0){var t=i.pending;return t===null?a.next=a:(a.next=t.next,t.next=a),i.pending=a,a=lu(n),Zs(n,null,e),a}return uu(n,i,a,e),lu(n)}function ut(n,a,e){if(a=a.updateQueue,a!==null&&(a=a.shared,(e&4194048)!==0)){var i=a.lanes;i&=n.pendingLanes,e|=i,a.lanes=e,es(n,e)}}function hr(n,a){var e=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var t=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?t=u=r:u=u.next=r,e=e.next}while(e!==null);u===null?t=u=a:u=u.next=a}else t=u=a;e={baseState:i.baseState,firstBaseUpdate:t,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=a:n.next=a,e.lastBaseUpdate=a}var sr=!1;function lt(){if(sr){var n=gi;if(n!==null)throw n}}function rt(n,a,e,i){sr=!1;var t=n.updateQueue;ye=!1;var u=t.firstBaseUpdate,r=t.lastBaseUpdate,d=t.shared.pending;if(d!==null){t.shared.pending=null;var y=d,w=y.next;y.next=null,r===null?u=w:r.next=w,r=y;var E=n.alternate;E!==null&&(E=E.updateQueue,d=E.lastBaseUpdate,d!==r&&(d===null?E.firstBaseUpdate=w:d.next=w,E.lastBaseUpdate=y))}if(u!==null){var T=t.baseState;r=0,E=w=y=null,d=u;do{var j=d.lane&-536870913,G=j!==d.lane;if(G?(rn&j)===j:(i&j)===j){j!==0&&j===fi&&(sr=!0),E!==null&&(E=E.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});n:{var U=n,Z=d;j=a;var kn=e;switch(Z.tag){case 1:if(U=Z.payload,typeof U=="function"){T=U.call(kn,T,j);break n}T=U;break n;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Z.payload,j=typeof U=="function"?U.call(kn,T,j):U,j==null)break n;T=z({},T,j);break n;case 2:ye=!0}}j=d.callback,j!==null&&(n.flags|=64,G&&(n.flags|=8192),G=t.callbacks,G===null?t.callbacks=[j]:G.push(j))}else G={lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},E===null?(w=E=G,y=T):E=E.next=G,r|=j;if(d=d.next,d===null){if(d=t.shared.pending,d===null)break;G=d,d=G.next,G.next=null,t.lastBaseUpdate=G,t.shared.pending=null}}while(!0);E===null&&(y=T),t.baseState=y,t.firstBaseUpdate=w,t.lastBaseUpdate=E,u===null&&(t.shared.lanes=0),Se|=r,n.lanes=r,n.memoizedState=T}}function md(n,a){if(typeof n!="function")throw Error(s(191,n));n.call(a)}function yd(n,a){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)md(e[n],a)}var Si=g(null),fu=g(0);function cd(n,a){n=ae,B(fu,n),B(Si,a),ae=n|a.baseLanes}function dr(){B(fu,ae),B(Si,Si.current)}function or(){ae=fu.current,_(Si),_(fu)}var ya=g(null),Ga=null;function fe(n){var a=n.alternate;B(Tn,Tn.current&1),B(ya,n),Ga===null&&(a===null||Si.current!==null||a.memoizedState!==null)&&(Ga=n)}function mr(n){B(Tn,Tn.current),B(ya,n),Ga===null&&(Ga=n)}function vd(n){n.tag===22?(B(Tn,Tn.current),B(ya,n),Ga===null&&(Ga=n)):ge()}function ge(){B(Tn,Tn.current),B(ya,ya.current)}function ca(n){_(ya),Ga===n&&(Ga=null),_(Tn)}var Tn=g(0);function gu(n){for(var a=n;a!==null;){if(a.tag===13){var e=a.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||ph(e)||kh(e)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Qa=0,nn=null,gn=null,On=null,pu=!1,bi=!1,Ze=!1,ku=0,ht=0,wi=null,Xc=0;function Hn(){throw Error(s(321))}function yr(n,a){if(a===null)return!1;for(var e=0;e<a.length&&e<n.length;e++)if(!oa(n[e],a[e]))return!1;return!0}function cr(n,a,e,i,t,u){return Qa=u,nn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,D.H=n===null||n.memoizedState===null?Pd:Hr,Ze=!1,u=e(i,t),Ze=!1,bi&&(u=gd(a,e,i,t)),fd(n),u}function fd(n){D.H=ot;var a=gn!==null&&gn.next!==null;if(Qa=0,On=gn=nn=null,pu=!1,ht=0,wi=null,a)throw Error(s(300));n===null||Nn||(n=n.dependencies,n!==null&&su(n)&&(Nn=!0))}function gd(n,a,e,i){nn=n;var t=0;do{if(bi&&(wi=null),ht=0,bi=!1,25<=t)throw Error(s(301));if(t+=1,On=gn=null,n.updateQueue!=null){var u=n.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=Id,u=a(e,i)}while(bi);return u}function Vc(){var n=D.H,a=n.useState()[0];return a=typeof a.then=="function"?st(a):a,n=n.useState()[0],(gn!==null?gn.memoizedState:null)!==n&&(nn.flags|=1024),a}function vr(){var n=ku!==0;return ku=0,n}function fr(n,a,e){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~e}function gr(n){if(pu){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}pu=!1}Qa=0,On=gn=nn=null,bi=!1,ht=ku=0,wi=null}function Fn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return On===null?nn.memoizedState=On=n:On=On.next=n,On}function zn(){if(gn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var a=On===null?nn.memoizedState:On.next;if(a!==null)On=a,gn=n;else{if(n===null)throw nn.alternate===null?Error(s(467)):Error(s(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},On===null?nn.memoizedState=On=n:On=On.next=n}return On}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function st(n){var a=ht;return ht+=1,wi===null&&(wi=[]),n=rd(wi,n,a),a=nn,(On===null?a.memoizedState:On.next)===null&&(a=a.alternate,D.H=a===null||a.memoizedState===null?Pd:Hr),n}function bu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return st(n);if(n.$$typeof===P)return Xn(n)}throw Error(s(438,String(n)))}function pr(n){var a=null,e=nn.updateQueue;if(e!==null&&(a=e.memoCache),a==null){var i=nn.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(t){return t.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),e===null&&(e=Su(),nn.updateQueue=e),e.memoCache=a,e=a.data[a.index],e===void 0)for(e=a.data[a.index]=Array(n),i=0;i<n;i++)e[i]=la;return a.index++,e}function Za(n,a){return typeof a=="function"?a(n):a}function wu(n){var a=zn();return kr(a,gn,n)}function kr(n,a,e){var i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var t=n.baseQueue,u=i.pending;if(u!==null){if(t!==null){var r=t.next;t.next=u.next,u.next=r}a.baseQueue=t=u,i.pending=null}if(u=n.baseState,t===null)n.memoizedState=u;else{a=t.next;var d=r=null,y=null,w=a,E=!1;do{var T=w.lane&-536870913;if(T!==w.lane?(rn&T)===T:(Qa&T)===T){var j=w.revertLane;if(j===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),T===fi&&(E=!0);else if((Qa&j)===j){w=w.next,j===fi&&(E=!0);continue}else T={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(d=y=T,r=u):y=y.next=T,nn.lanes|=j,Se|=j;T=w.action,Ze&&e(u,T),u=w.hasEagerState?w.eagerState:e(u,T)}else j={lane:T,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(d=y=j,r=u):y=y.next=j,nn.lanes|=T,Se|=T;w=w.next}while(w!==null&&w!==a);if(y===null?r=u:y.next=d,!oa(u,n.memoizedState)&&(Nn=!0,E&&(e=gi,e!==null)))throw e;n.memoizedState=u,n.baseState=r,n.baseQueue=y,i.lastRenderedState=u}return t===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function Sr(n){var a=zn(),e=a.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=n;var i=e.dispatch,t=e.pending,u=a.memoizedState;if(t!==null){e.pending=null;var r=t=t.next;do u=n(u,r.action),r=r.next;while(r!==t);oa(u,a.memoizedState)||(Nn=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),e.lastRenderedState=u}return[u,i]}function pd(n,a,e){var i=nn,t=zn(),u=sn;if(u){if(e===void 0)throw Error(s(407));e=e()}else e=a();var r=!oa((gn||t).memoizedState,e);if(r&&(t.memoizedState=e,Nn=!0),t=t.queue,jr(bd.bind(null,i,t,n),[n]),t.getSnapshot!==a||r||On!==null&&On.memoizedState.tag&1){if(i.flags|=2048,ji(9,{destroy:void 0},Sd.bind(null,i,t,e,a),null),bn===null)throw Error(s(349));u||(Qa&127)!==0||kd(i,a,e)}return e}function kd(n,a,e){n.flags|=16384,n={getSnapshot:a,value:e},a=nn.updateQueue,a===null?(a=Su(),nn.updateQueue=a,a.stores=[n]):(e=a.stores,e===null?a.stores=[n]:e.push(n))}function Sd(n,a,e,i){a.value=e,a.getSnapshot=i,wd(a)&&jd(n)}function bd(n,a,e){return e(function(){wd(a)&&jd(n)})}function wd(n){var a=n.getSnapshot;n=n.value;try{var e=a();return!oa(n,e)}catch{return!0}}function jd(n){var a=Ue(n,2);a!==null&&ua(a,n,2)}function br(n){var a=Fn();if(typeof n=="function"){var e=n;if(n=e(),Ze){le(!0);try{e()}finally{le(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},a}function Ad(n,a,e,i){return n.baseState=e,kr(n,gn,typeof i=="function"?i:Za)}function Qc(n,a,e,i,t){if(Gu(n))throw Error(s(485));if(n=a.action,n!==null){var u={payload:t,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){u.listeners.push(r)}};D.T!==null?e(!0):u.isTransition=!1,i(u),e=a.pending,e===null?(u.next=a.pending=u,Gd(a,u)):(u.next=e.next,a.pending=e.next=u)}}function Gd(n,a){var e=a.action,i=a.payload,t=n.state;if(a.isTransition){var u=D.T,r={};D.T=r;try{var d=e(t,i),y=D.S;y!==null&&y(r,d),Cd(n,a,d)}catch(w){wr(n,a,w)}finally{u!==null&&r.types!==null&&(u.types=r.types),D.T=u}}else try{u=e(t,i),Cd(n,a,u)}catch(w){wr(n,a,w)}}function Cd(n,a,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){Ed(n,a,i)},function(i){return wr(n,a,i)}):Ed(n,a,e)}function Ed(n,a,e){a.status="fulfilled",a.value=e,Rd(a),n.state=e,a=n.pending,a!==null&&(e=a.next,e===a?n.pending=null:(e=e.next,a.next=e,Gd(n,e)))}function wr(n,a,e){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=e,Rd(a),a=a.next;while(a!==i)}n.action=null}function Rd(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Hd(n,a){return a}function Dd(n,a){if(sn){var e=bn.formState;if(e!==null){n:{var i=nn;if(sn){if(wn){a:{for(var t=wn,u=Aa;t.nodeType!==8;){if(!u){t=null;break a}if(t=Ca(t.nextSibling),t===null){t=null;break a}}u=t.data,t=u==="F!"||u==="F"?t:null}if(t){wn=Ca(t.nextSibling),i=t.data==="F!";break n}}oe(i)}i=!1}i&&(a=e[0])}}return e=Fn(),e.memoizedState=e.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:a},e.queue=i,e=Wd.bind(null,nn,i),i.dispatch=e,i=br(!1),u=Rr.bind(null,nn,!1,i.queue),i=Fn(),t={state:a,dispatch:null,action:n,pending:null},i.queue=t,e=Qc.bind(null,nn,t,u,e),t.dispatch=e,i.memoizedState=n,[a,e,!1]}function Md(n){var a=zn();return Td(a,gn,n)}function Td(n,a,e){if(a=kr(n,a,Hd)[0],n=wu(Za)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=st(a)}catch(r){throw r===pi?mu:r}else i=a;a=zn();var t=a.queue,u=t.dispatch;return e!==a.memoizedState&&(nn.flags|=2048,ji(9,{destroy:void 0},Zc.bind(null,t,e),null)),[i,u,n]}function Zc(n,a){n.action=a}function zd(n){var a=zn(),e=gn;if(e!==null)return Td(a,e,n);zn(),a=a.memoizedState,e=zn();var i=e.queue.dispatch;return e.memoizedState=n,[a,i,!1]}function ji(n,a,e,i){return n={tag:n,create:e,deps:i,inst:a,next:null},a=nn.updateQueue,a===null&&(a=Su(),nn.updateQueue=a),e=a.lastEffect,e===null?a.lastEffect=n.next=n:(i=e.next,e.next=n,n.next=i,a.lastEffect=n),n}function _d(){return zn().memoizedState}function ju(n,a,e,i){var t=Fn();nn.flags|=n,t.memoizedState=ji(1|a,{destroy:void 0},e,i===void 0?null:i)}function Au(n,a,e,i){var t=zn();i=i===void 0?null:i;var u=t.memoizedState.inst;gn!==null&&i!==null&&yr(i,gn.memoizedState.deps)?t.memoizedState=ji(a,u,e,i):(nn.flags|=n,t.memoizedState=ji(1|a,u,e,i))}function Od(n,a){ju(8390656,8,n,a)}function jr(n,a){Au(2048,8,n,a)}function Wc(n){nn.flags|=4;var a=nn.updateQueue;if(a===null)a=Su(),nn.updateQueue=a,a.events=[n];else{var e=a.events;e===null?a.events=[n]:e.push(n)}}function Nd(n){var a=zn().memoizedState;return Wc({ref:a,nextImpl:n}),function(){if((mn&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function Bd(n,a){return Au(4,2,n,a)}function xd(n,a){return Au(4,4,n,a)}function Ud(n,a){if(typeof a=="function"){n=n();var e=a(n);return function(){typeof e=="function"?e():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Jd(n,a,e){e=e!=null?e.concat([n]):null,Au(4,4,Ud.bind(null,a,n),e)}function Ar(){}function Ld(n,a){var e=zn();a=a===void 0?null:a;var i=e.memoizedState;return a!==null&&yr(a,i[1])?i[0]:(e.memoizedState=[n,a],n)}function Kd(n,a){var e=zn();a=a===void 0?null:a;var i=e.memoizedState;if(a!==null&&yr(a,i[1]))return i[0];if(i=n(),Ze){le(!0);try{n()}finally{le(!1)}}return e.memoizedState=[i,a],i}function Gr(n,a,e){return e===void 0||(Qa&1073741824)!==0&&(rn&261930)===0?n.memoizedState=a:(n.memoizedState=e,n=qo(),nn.lanes|=n,Se|=n,e)}function Yd(n,a,e,i){return oa(e,a)?e:Si.current!==null?(n=Gr(n,e,i),oa(n,a)||(Nn=!0),n):(Qa&42)===0||(Qa&1073741824)!==0&&(rn&261930)===0?(Nn=!0,n.memoizedState=e):(n=qo(),nn.lanes|=n,Se|=n,a)}function qd(n,a,e,i,t){var u=N.p;N.p=u!==0&&8>u?u:8;var r=D.T,d={};D.T=d,Rr(n,!1,a,e);try{var y=t(),w=D.S;if(w!==null&&w(d,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var E=qc(y,i);dt(n,a,E,ga(n))}else dt(n,a,i,ga(n))}catch(T){dt(n,a,{then:function(){},status:"rejected",reason:T},ga())}finally{N.p=u,r!==null&&d.types!==null&&(r.types=d.types),D.T=r}}function $c(){}function Cr(n,a,e,i){if(n.tag!==5)throw Error(s(476));var t=Xd(n).queue;qd(n,t,a,$,e===null?$c:function(){return Vd(n),e(i)})}function Xd(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:$},next:null};var e={};return a.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Vd(n){var a=Xd(n);a.next===null&&(a=n.alternate.memoizedState),dt(n,a.next.queue,{},ga())}function Er(){return Xn(Et)}function Qd(){return zn().memoizedState}function Zd(){return zn().memoizedState}function Fc(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var e=ga();n=ce(e);var i=ve(a,n,e);i!==null&&(ua(i,a,e),ut(i,a,e)),a={cache:er()},n.payload=a;return}a=a.return}}function Pc(n,a,e){var i=ga();e={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Gu(n)?$d(a,e):(e=Xl(n,a,e,i),e!==null&&(ua(e,n,i),Fd(e,a,i)))}function Wd(n,a,e){var i=ga();dt(n,a,e,i)}function dt(n,a,e,i){var t={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Gu(n))$d(a,t);else{var u=n.alternate;if(n.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var r=a.lastRenderedState,d=u(r,e);if(t.hasEagerState=!0,t.eagerState=d,oa(d,r))return uu(n,a,t,0),bn===null&&tu(),!1}catch{}finally{}if(e=Xl(n,a,t,i),e!==null)return ua(e,n,i),Fd(e,a,i),!0}return!1}function Rr(n,a,e,i){if(i={lane:2,revertLane:lh(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Gu(n)){if(a)throw Error(s(479))}else a=Xl(n,e,i,2),a!==null&&ua(a,n,2)}function Gu(n){var a=n.alternate;return n===nn||a!==null&&a===nn}function $d(n,a){bi=pu=!0;var e=n.pending;e===null?a.next=a:(a.next=e.next,e.next=a),n.pending=a}function Fd(n,a,e){if((e&4194048)!==0){var i=a.lanes;i&=n.pendingLanes,e|=i,a.lanes=e,es(n,e)}}var ot={readContext:Xn,use:bu,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useLayoutEffect:Hn,useInsertionEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useSyncExternalStore:Hn,useId:Hn,useHostTransitionStatus:Hn,useFormState:Hn,useActionState:Hn,useOptimistic:Hn,useMemoCache:Hn,useCacheRefresh:Hn};ot.useEffectEvent=Hn;var Pd={readContext:Xn,use:bu,useCallback:function(n,a){return Fn().memoizedState=[n,a===void 0?null:a],n},useContext:Xn,useEffect:Od,useImperativeHandle:function(n,a,e){e=e!=null?e.concat([n]):null,ju(4194308,4,Ud.bind(null,a,n),e)},useLayoutEffect:function(n,a){return ju(4194308,4,n,a)},useInsertionEffect:function(n,a){ju(4,2,n,a)},useMemo:function(n,a){var e=Fn();a=a===void 0?null:a;var i=n();if(Ze){le(!0);try{n()}finally{le(!1)}}return e.memoizedState=[i,a],i},useReducer:function(n,a,e){var i=Fn();if(e!==void 0){var t=e(a);if(Ze){le(!0);try{e(a)}finally{le(!1)}}}else t=a;return i.memoizedState=i.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:t},i.queue=n,n=n.dispatch=Pc.bind(null,nn,n),[i.memoizedState,n]},useRef:function(n){var a=Fn();return n={current:n},a.memoizedState=n},useState:function(n){n=br(n);var a=n.queue,e=Wd.bind(null,nn,a);return a.dispatch=e,[n.memoizedState,e]},useDebugValue:Ar,useDeferredValue:function(n,a){var e=Fn();return Gr(e,n,a)},useTransition:function(){var n=br(!1);return n=qd.bind(null,nn,n.queue,!0,!1),Fn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,e){var i=nn,t=Fn();if(sn){if(e===void 0)throw Error(s(407));e=e()}else{if(e=a(),bn===null)throw Error(s(349));(rn&127)!==0||kd(i,a,e)}t.memoizedState=e;var u={value:e,getSnapshot:a};return t.queue=u,Od(bd.bind(null,i,u,n),[n]),i.flags|=2048,ji(9,{destroy:void 0},Sd.bind(null,i,u,e,a),null),e},useId:function(){var n=Fn(),a=bn.identifierPrefix;if(sn){var e=za,i=Ta;e=(i&~(1<<32-da(i)-1)).toString(32)+e,a="_"+a+"R_"+e,e=ku++,0<e&&(a+="H"+e.toString(32)),a+="_"}else e=Xc++,a="_"+a+"r_"+e.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:Er,useFormState:Dd,useActionState:Dd,useOptimistic:function(n){var a=Fn();a.memoizedState=a.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=e,a=Rr.bind(null,nn,!0,e),e.dispatch=a,[n,a]},useMemoCache:pr,useCacheRefresh:function(){return Fn().memoizedState=Fc.bind(null,nn)},useEffectEvent:function(n){var a=Fn(),e={impl:n};return a.memoizedState=e,function(){if((mn&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}},Hr={readContext:Xn,use:bu,useCallback:Ld,useContext:Xn,useEffect:jr,useImperativeHandle:Jd,useInsertionEffect:Bd,useLayoutEffect:xd,useMemo:Kd,useReducer:wu,useRef:_d,useState:function(){return wu(Za)},useDebugValue:Ar,useDeferredValue:function(n,a){var e=zn();return Yd(e,gn.memoizedState,n,a)},useTransition:function(){var n=wu(Za)[0],a=zn().memoizedState;return[typeof n=="boolean"?n:st(n),a]},useSyncExternalStore:pd,useId:Qd,useHostTransitionStatus:Er,useFormState:Md,useActionState:Md,useOptimistic:function(n,a){var e=zn();return Ad(e,gn,n,a)},useMemoCache:pr,useCacheRefresh:Zd};Hr.useEffectEvent=Nd;var Id={readContext:Xn,use:bu,useCallback:Ld,useContext:Xn,useEffect:jr,useImperativeHandle:Jd,useInsertionEffect:Bd,useLayoutEffect:xd,useMemo:Kd,useReducer:Sr,useRef:_d,useState:function(){return Sr(Za)},useDebugValue:Ar,useDeferredValue:function(n,a){var e=zn();return gn===null?Gr(e,n,a):Yd(e,gn.memoizedState,n,a)},useTransition:function(){var n=Sr(Za)[0],a=zn().memoizedState;return[typeof n=="boolean"?n:st(n),a]},useSyncExternalStore:pd,useId:Qd,useHostTransitionStatus:Er,useFormState:zd,useActionState:zd,useOptimistic:function(n,a){var e=zn();return gn!==null?Ad(e,gn,n,a):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:pr,useCacheRefresh:Zd};Id.useEffectEvent=Nd;function Dr(n,a,e,i){a=n.memoizedState,e=e(i,a),e=e==null?a:z({},a,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var Mr={enqueueSetState:function(n,a,e){n=n._reactInternals;var i=ga(),t=ce(i);t.payload=a,e!=null&&(t.callback=e),a=ve(n,t,i),a!==null&&(ua(a,n,i),ut(a,n,i))},enqueueReplaceState:function(n,a,e){n=n._reactInternals;var i=ga(),t=ce(i);t.tag=1,t.payload=a,e!=null&&(t.callback=e),a=ve(n,t,i),a!==null&&(ua(a,n,i),ut(a,n,i))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var e=ga(),i=ce(e);i.tag=2,a!=null&&(i.callback=a),a=ve(n,i,e),a!==null&&(ua(a,n,e),ut(a,n,e))}};function no(n,a,e,i,t,u,r){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,u,r):a.prototype&&a.prototype.isPureReactComponent?!Fi(e,i)||!Fi(t,u):!0}function ao(n,a,e,i){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(e,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(e,i),a.state!==n&&Mr.enqueueReplaceState(a,a.state,null)}function We(n,a){var e=a;if("ref"in a){e={};for(var i in a)i!=="ref"&&(e[i]=a[i])}if(n=n.defaultProps){e===a&&(e=z({},e));for(var t in n)e[t]===void 0&&(e[t]=n[t])}return e}function eo(n){iu(n)}function io(n){console.error(n)}function to(n){iu(n)}function Cu(n,a){try{var e=n.onUncaughtError;e(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function uo(n,a,e){try{var i=n.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(t){setTimeout(function(){throw t})}}function Tr(n,a,e){return e=ce(e),e.tag=3,e.payload={element:null},e.callback=function(){Cu(n,a)},e}function lo(n){return n=ce(n),n.tag=3,n}function ro(n,a,e,i){var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var u=i.value;n.payload=function(){return t(u)},n.callback=function(){uo(a,e,i)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){uo(a,e,i),typeof t!="function"&&(be===null?be=new Set([this]):be.add(this));var d=i.stack;this.componentDidCatch(i.value,{componentStack:d!==null?d:""})})}function Ic(n,a,e,i,t){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=e.alternate,a!==null&&vi(a,e,t,!0),e=ya.current,e!==null){switch(e.tag){case 31:case 13:return Ga===null?xu():e.alternate===null&&Dn===0&&(Dn=3),e.flags&=-257,e.flags|=65536,e.lanes=t,i===yu?e.flags|=16384:(a=e.updateQueue,a===null?e.updateQueue=new Set([i]):a.add(i),ih(n,i,t)),!1;case 22:return e.flags|=65536,i===yu?e.flags|=16384:(a=e.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=a):(e=a.retryQueue,e===null?a.retryQueue=new Set([i]):e.add(i)),ih(n,i,t)),!1}throw Error(s(435,e.tag))}return ih(n,i,t),xu(),!1}if(sn)return a=ya.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=t,i!==Fl&&(n=Error(s(422),{cause:i}),nt(ba(n,e)))):(i!==Fl&&(a=Error(s(423),{cause:i}),nt(ba(a,e))),n=n.current.alternate,n.flags|=65536,t&=-t,n.lanes|=t,i=ba(i,e),t=Tr(n.stateNode,i,t),hr(n,t),Dn!==4&&(Dn=2)),!1;var u=Error(s(520),{cause:i});if(u=ba(u,e),kt===null?kt=[u]:kt.push(u),Dn!==4&&(Dn=2),a===null)return!0;i=ba(i,e),e=a;do{switch(e.tag){case 3:return e.flags|=65536,n=t&-t,e.lanes|=n,n=Tr(e.stateNode,i,n),hr(e,n),!1;case 1:if(a=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(be===null||!be.has(u))))return e.flags|=65536,t&=-t,e.lanes|=t,t=lo(t),ro(t,n,e,i),hr(e,t),!1}e=e.return}while(e!==null);return!1}var zr=Error(s(461)),Nn=!1;function Vn(n,a,e,i){a.child=n===null?od(a,null,e,i):Qe(a,n.child,e,i)}function ho(n,a,e,i,t){e=e.render;var u=a.ref;if("ref"in i){var r={};for(var d in i)d!=="ref"&&(r[d]=i[d])}else r=i;return Ye(a),i=cr(n,a,e,r,u,t),d=vr(),n!==null&&!Nn?(fr(n,a,t),Wa(n,a,t)):(sn&&d&&Wl(a),a.flags|=1,Vn(n,a,i,t),a.child)}function so(n,a,e,i,t){if(n===null){var u=e.type;return typeof u=="function"&&!Vl(u)&&u.defaultProps===void 0&&e.compare===null?(a.tag=15,a.type=u,oo(n,a,u,i,t)):(n=ru(e.type,null,i,a,a.mode,t),n.ref=a.ref,n.return=a,a.child=n)}if(u=n.child,!Lr(n,t)){var r=u.memoizedProps;if(e=e.compare,e=e!==null?e:Fi,e(r,i)&&n.ref===a.ref)return Wa(n,a,t)}return a.flags|=1,n=Ya(u,i),n.ref=a.ref,n.return=a,a.child=n}function oo(n,a,e,i,t){if(n!==null){var u=n.memoizedProps;if(Fi(u,i)&&n.ref===a.ref)if(Nn=!1,a.pendingProps=i=u,Lr(n,t))(n.flags&131072)!==0&&(Nn=!0);else return a.lanes=n.lanes,Wa(n,a,t)}return _r(n,a,e,i,t)}function mo(n,a,e,i){var t=i.children,u=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(u=u!==null?u.baseLanes|e:e,n!==null){for(i=a.child=n.child,t=0;i!==null;)t=t|i.lanes|i.childLanes,i=i.sibling;i=t&~u}else i=0,a.child=null;return yo(n,a,u,e,i)}if((e&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&ou(a,u!==null?u.cachePool:null),u!==null?cd(a,u):dr(),vd(a);else return i=a.lanes=536870912,yo(n,a,u!==null?u.baseLanes|e:e,e,i)}else u!==null?(ou(a,u.cachePool),cd(a,u),ge(),a.memoizedState=null):(n!==null&&ou(a,null),dr(),ge());return Vn(n,a,t,e),a.child}function mt(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function yo(n,a,e,i,t){var u=tr();return u=u===null?null:{parent:_n._currentValue,pool:u},a.memoizedState={baseLanes:e,cachePool:u},n!==null&&ou(a,null),dr(),vd(a),n!==null&&vi(n,a,i,!0),a.childLanes=t,null}function Eu(n,a){return a=Hu({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function co(n,a,e){return Qe(a,n.child,null,e),n=Eu(a,a.pendingProps),n.flags|=2,ca(a),a.memoizedState=null,n}function nv(n,a,e){var i=a.pendingProps,t=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(sn){if(i.mode==="hidden")return n=Eu(a,i),a.lanes=536870912,mt(null,n);if(mr(a),(n=wn)?(n=Cm(n,Aa),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:se!==null?{id:Ta,overflow:za}:null,retryLane:536870912,hydrationErrors:null},e=$s(n),e.return=a,a.child=e,qn=a,wn=null)):n=null,n===null)throw oe(a);return a.lanes=536870912,null}return Eu(a,i)}var u=n.memoizedState;if(u!==null){var r=u.dehydrated;if(mr(a),t)if(a.flags&256)a.flags&=-257,a=co(n,a,e);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(s(558));else if(Nn||vi(n,a,e,!1),t=(e&n.childLanes)!==0,Nn||t){if(i=bn,i!==null&&(r=is(i,e),r!==0&&r!==u.retryLane))throw u.retryLane=r,Ue(n,r),ua(i,n,r),zr;xu(),a=co(n,a,e)}else n=u.treeContext,wn=Ca(r.nextSibling),qn=a,sn=!0,de=null,Aa=!1,n!==null&&Is(a,n),a=Eu(a,i),a.flags|=4096;return a}return n=Ya(n.child,{mode:i.mode,children:i.children}),n.ref=a.ref,a.child=n,n.return=a,n}function Ru(n,a){var e=a.ref;if(e===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(s(284));(n===null||n.ref!==e)&&(a.flags|=4194816)}}function _r(n,a,e,i,t){return Ye(a),e=cr(n,a,e,i,void 0,t),i=vr(),n!==null&&!Nn?(fr(n,a,t),Wa(n,a,t)):(sn&&i&&Wl(a),a.flags|=1,Vn(n,a,e,t),a.child)}function vo(n,a,e,i,t,u){return Ye(a),a.updateQueue=null,e=gd(a,i,e,t),fd(n),i=vr(),n!==null&&!Nn?(fr(n,a,u),Wa(n,a,u)):(sn&&i&&Wl(a),a.flags|=1,Vn(n,a,e,u),a.child)}function fo(n,a,e,i,t){if(Ye(a),a.stateNode===null){var u=oi,r=e.contextType;typeof r=="object"&&r!==null&&(u=Xn(r)),u=new e(i,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Mr,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=i,u.state=a.memoizedState,u.refs={},lr(a),r=e.contextType,u.context=typeof r=="object"&&r!==null?Xn(r):oi,u.state=a.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Dr(a,e,r,i),u.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Mr.enqueueReplaceState(u,u.state,null),rt(a,i,u,t),lt(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(n===null){u=a.stateNode;var d=a.memoizedProps,y=We(e,d);u.props=y;var w=u.context,E=e.contextType;r=oi,typeof E=="object"&&E!==null&&(r=Xn(E));var T=e.getDerivedStateFromProps;E=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d||w!==r)&&ao(a,u,i,r),ye=!1;var j=a.memoizedState;u.state=j,rt(a,i,u,t),lt(),w=a.memoizedState,d||j!==w||ye?(typeof T=="function"&&(Dr(a,e,T,i),w=a.memoizedState),(y=ye||no(a,e,y,i,j,w,r))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=w),u.props=i,u.state=w,u.context=r,i=y):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{u=a.stateNode,rr(n,a),r=a.memoizedProps,E=We(e,r),u.props=E,T=a.pendingProps,j=u.context,w=e.contextType,y=oi,typeof w=="object"&&w!==null&&(y=Xn(w)),d=e.getDerivedStateFromProps,(w=typeof d=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(r!==T||j!==y)&&ao(a,u,i,y),ye=!1,j=a.memoizedState,u.state=j,rt(a,i,u,t),lt();var G=a.memoizedState;r!==T||j!==G||ye||n!==null&&n.dependencies!==null&&su(n.dependencies)?(typeof d=="function"&&(Dr(a,e,d,i),G=a.memoizedState),(E=ye||no(a,e,E,i,j,G,y)||n!==null&&n.dependencies!==null&&su(n.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,G,y),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,G,y)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||r===n.memoizedProps&&j===n.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&j===n.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=G),u.props=i,u.state=G,u.context=y,i=E):(typeof u.componentDidUpdate!="function"||r===n.memoizedProps&&j===n.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&j===n.memoizedState||(a.flags|=1024),i=!1)}return u=i,Ru(n,a),i=(a.flags&128)!==0,u||i?(u=a.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,n!==null&&i?(a.child=Qe(a,n.child,null,t),a.child=Qe(a,null,e,t)):Vn(n,a,e,t),a.memoizedState=u.state,n=a.child):n=Wa(n,a,t),n}function go(n,a,e,i){return Le(),a.flags|=256,Vn(n,a,e,i),a.child}var Or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nr(n){return{baseLanes:n,cachePool:ud()}}function Br(n,a,e){return n=n!==null?n.childLanes&~e:0,a&&(n|=fa),n}function po(n,a,e){var i=a.pendingProps,t=!1,u=(a.flags&128)!==0,r;if((r=u)||(r=n!==null&&n.memoizedState===null?!1:(Tn.current&2)!==0),r&&(t=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,n===null){if(sn){if(t?fe(a):ge(),(n=wn)?(n=Cm(n,Aa),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:se!==null?{id:Ta,overflow:za}:null,retryLane:536870912,hydrationErrors:null},e=$s(n),e.return=a,a.child=e,qn=a,wn=null)):n=null,n===null)throw oe(a);return kh(n)?a.lanes=32:a.lanes=536870912,null}var d=i.children;return i=i.fallback,t?(ge(),t=a.mode,d=Hu({mode:"hidden",children:d},t),i=Je(i,t,e,null),d.return=a,i.return=a,d.sibling=i,a.child=d,i=a.child,i.memoizedState=Nr(e),i.childLanes=Br(n,r,e),a.memoizedState=Or,mt(null,i)):(fe(a),xr(a,d))}var y=n.memoizedState;if(y!==null&&(d=y.dehydrated,d!==null)){if(u)a.flags&256?(fe(a),a.flags&=-257,a=Ur(n,a,e)):a.memoizedState!==null?(ge(),a.child=n.child,a.flags|=128,a=null):(ge(),d=i.fallback,t=a.mode,i=Hu({mode:"visible",children:i.children},t),d=Je(d,t,e,null),d.flags|=2,i.return=a,d.return=a,i.sibling=d,a.child=i,Qe(a,n.child,null,e),i=a.child,i.memoizedState=Nr(e),i.childLanes=Br(n,r,e),a.memoizedState=Or,a=mt(null,i));else if(fe(a),kh(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r)var w=r.dgst;r=w,i=Error(s(419)),i.stack="",i.digest=r,nt({value:i,source:null,stack:null}),a=Ur(n,a,e)}else if(Nn||vi(n,a,e,!1),r=(e&n.childLanes)!==0,Nn||r){if(r=bn,r!==null&&(i=is(r,e),i!==0&&i!==y.retryLane))throw y.retryLane=i,Ue(n,i),ua(r,n,i),zr;ph(d)||xu(),a=Ur(n,a,e)}else ph(d)?(a.flags|=192,a.child=n.child,a=null):(n=y.treeContext,wn=Ca(d.nextSibling),qn=a,sn=!0,de=null,Aa=!1,n!==null&&Is(a,n),a=xr(a,i.children),a.flags|=4096);return a}return t?(ge(),d=i.fallback,t=a.mode,y=n.child,w=y.sibling,i=Ya(y,{mode:"hidden",children:i.children}),i.subtreeFlags=y.subtreeFlags&65011712,w!==null?d=Ya(w,d):(d=Je(d,t,e,null),d.flags|=2),d.return=a,i.return=a,i.sibling=d,a.child=i,mt(null,i),i=a.child,d=n.child.memoizedState,d===null?d=Nr(e):(t=d.cachePool,t!==null?(y=_n._currentValue,t=t.parent!==y?{parent:y,pool:y}:t):t=ud(),d={baseLanes:d.baseLanes|e,cachePool:t}),i.memoizedState=d,i.childLanes=Br(n,r,e),a.memoizedState=Or,mt(n.child,i)):(fe(a),e=n.child,n=e.sibling,e=Ya(e,{mode:"visible",children:i.children}),e.return=a,e.sibling=null,n!==null&&(r=a.deletions,r===null?(a.deletions=[n],a.flags|=16):r.push(n)),a.child=e,a.memoizedState=null,e)}function xr(n,a){return a=Hu({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Hu(n,a){return n=ma(22,n,null,a),n.lanes=0,n}function Ur(n,a,e){return Qe(a,n.child,null,e),n=xr(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function ko(n,a,e){n.lanes|=a;var i=n.alternate;i!==null&&(i.lanes|=a),nr(n.return,a,e)}function Jr(n,a,e,i,t,u){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:t,treeForkCount:u}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=e,r.tailMode=t,r.treeForkCount=u)}function So(n,a,e){var i=a.pendingProps,t=i.revealOrder,u=i.tail;i=i.children;var r=Tn.current,d=(r&2)!==0;if(d?(r=r&1|2,a.flags|=128):r&=1,B(Tn,r),Vn(n,a,i,e),i=sn?Ii:0,!d&&n!==null&&(n.flags&128)!==0)n:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ko(n,e,a);else if(n.tag===19)ko(n,e,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break n;for(;n.sibling===null;){if(n.return===null||n.return===a)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(t){case"forwards":for(e=a.child,t=null;e!==null;)n=e.alternate,n!==null&&gu(n)===null&&(t=e),e=e.sibling;e=t,e===null?(t=a.child,a.child=null):(t=e.sibling,e.sibling=null),Jr(a,!1,t,e,u,i);break;case"backwards":case"unstable_legacy-backwards":for(e=null,t=a.child,a.child=null;t!==null;){if(n=t.alternate,n!==null&&gu(n)===null){a.child=t;break}n=t.sibling,t.sibling=e,e=t,t=n}Jr(a,!0,e,null,u,i);break;case"together":Jr(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function Wa(n,a,e){if(n!==null&&(a.dependencies=n.dependencies),Se|=a.lanes,(e&a.childLanes)===0)if(n!==null){if(vi(n,a,e,!1),(e&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(s(153));if(a.child!==null){for(n=a.child,e=Ya(n,n.pendingProps),a.child=e,e.return=a;n.sibling!==null;)n=n.sibling,e=e.sibling=Ya(n,n.pendingProps),e.return=a;e.sibling=null}return a.child}function Lr(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&su(n)))}function av(n,a,e){switch(a.tag){case 3:$n(a,a.stateNode.containerInfo),me(a,_n,n.memoizedState.cache),Le();break;case 27:case 5:xi(a);break;case 4:$n(a,a.stateNode.containerInfo);break;case 10:me(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,mr(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(fe(a),a.flags|=128,null):(e&a.child.childLanes)!==0?po(n,a,e):(fe(a),n=Wa(n,a,e),n!==null?n.sibling:null);fe(a);break;case 19:var t=(n.flags&128)!==0;if(i=(e&a.childLanes)!==0,i||(vi(n,a,e,!1),i=(e&a.childLanes)!==0),t){if(i)return So(n,a,e);a.flags|=128}if(t=a.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),B(Tn,Tn.current),i)break;return null;case 22:return a.lanes=0,mo(n,a,e,a.pendingProps);case 24:me(a,_n,n.memoizedState.cache)}return Wa(n,a,e)}function bo(n,a,e){if(n!==null)if(n.memoizedProps!==a.pendingProps)Nn=!0;else{if(!Lr(n,e)&&(a.flags&128)===0)return Nn=!1,av(n,a,e);Nn=(n.flags&131072)!==0}else Nn=!1,sn&&(a.flags&1048576)!==0&&Ps(a,Ii,a.index);switch(a.lanes=0,a.tag){case 16:n:{var i=a.pendingProps;if(n=Xe(a.elementType),a.type=n,typeof n=="function")Vl(n)?(i=We(n,i),a.tag=1,a=fo(null,a,n,i,e)):(a.tag=0,a=_r(null,a,n,i,e));else{if(n!=null){var t=n.$$typeof;if(t===An){a.tag=11,a=ho(null,a,n,i,e);break n}else if(t===an){a.tag=14,a=so(null,a,n,i,e);break n}}throw a=Ua(n)||n,Error(s(306,a,""))}}return a;case 0:return _r(n,a,a.type,a.pendingProps,e);case 1:return i=a.type,t=We(i,a.pendingProps),fo(n,a,i,t,e);case 3:n:{if($n(a,a.stateNode.containerInfo),n===null)throw Error(s(387));i=a.pendingProps;var u=a.memoizedState;t=u.element,rr(n,a),rt(a,i,null,e);var r=a.memoizedState;if(i=r.cache,me(a,_n,i),i!==u.cache&&ar(a,[_n],e,!0),lt(),i=r.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=go(n,a,i,e);break n}else if(i!==t){t=ba(Error(s(424)),a),nt(t),a=go(n,a,i,e);break n}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(wn=Ca(n.firstChild),qn=a,sn=!0,de=null,Aa=!0,e=od(a,null,i,e),a.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Le(),i===t){a=Wa(n,a,e);break n}Vn(n,a,i,e)}a=a.child}return a;case 26:return Ru(n,a),n===null?(e=Tm(a.type,null,a.pendingProps,null))?a.memoizedState=e:sn||(e=a.type,n=a.pendingProps,i=Xu(tn.current).createElement(e),i[Yn]=a,i[In]=n,Qn(i,e,n),Ln(i),a.stateNode=i):a.memoizedState=Tm(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return xi(a),n===null&&sn&&(i=a.stateNode=Hm(a.type,a.pendingProps,tn.current),qn=a,Aa=!0,t=wn,Ge(a.type)?(Sh=t,wn=Ca(i.firstChild)):wn=t),Vn(n,a,a.pendingProps.children,e),Ru(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&sn&&((t=i=wn)&&(i=Mv(i,a.type,a.pendingProps,Aa),i!==null?(a.stateNode=i,qn=a,wn=Ca(i.firstChild),Aa=!1,t=!0):t=!1),t||oe(a)),xi(a),t=a.type,u=a.pendingProps,r=n!==null?n.memoizedProps:null,i=u.children,vh(t,u)?i=null:r!==null&&vh(t,r)&&(a.flags|=32),a.memoizedState!==null&&(t=cr(n,a,Vc,null,null,e),Et._currentValue=t),Ru(n,a),Vn(n,a,i,e),a.child;case 6:return n===null&&sn&&((n=e=wn)&&(e=Tv(e,a.pendingProps,Aa),e!==null?(a.stateNode=e,qn=a,wn=null,n=!0):n=!1),n||oe(a)),null;case 13:return po(n,a,e);case 4:return $n(a,a.stateNode.containerInfo),i=a.pendingProps,n===null?a.child=Qe(a,null,i,e):Vn(n,a,i,e),a.child;case 11:return ho(n,a,a.type,a.pendingProps,e);case 7:return Vn(n,a,a.pendingProps,e),a.child;case 8:return Vn(n,a,a.pendingProps.children,e),a.child;case 12:return Vn(n,a,a.pendingProps.children,e),a.child;case 10:return i=a.pendingProps,me(a,a.type,i.value),Vn(n,a,i.children,e),a.child;case 9:return t=a.type._context,i=a.pendingProps.children,Ye(a),t=Xn(t),i=i(t),a.flags|=1,Vn(n,a,i,e),a.child;case 14:return so(n,a,a.type,a.pendingProps,e);case 15:return oo(n,a,a.type,a.pendingProps,e);case 19:return So(n,a,e);case 31:return nv(n,a,e);case 22:return mo(n,a,e,a.pendingProps);case 24:return Ye(a),i=Xn(_n),n===null?(t=tr(),t===null&&(t=bn,u=er(),t.pooledCache=u,u.refCount++,u!==null&&(t.pooledCacheLanes|=e),t=u),a.memoizedState={parent:i,cache:t},lr(a),me(a,_n,t)):((n.lanes&e)!==0&&(rr(n,a),rt(a,null,null,e),lt()),t=n.memoizedState,u=a.memoizedState,t.parent!==i?(t={parent:i,cache:i},a.memoizedState=t,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=t),me(a,_n,i)):(i=u.cache,me(a,_n,i),i!==t.cache&&ar(a,[_n],e,!0))),Vn(n,a,a.pendingProps.children,e),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function $a(n){n.flags|=4}function Kr(n,a,e,i,t){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(t&335544128)===t)if(n.stateNode.complete)n.flags|=8192;else if(Zo())n.flags|=8192;else throw Ve=yu,ur}else n.flags&=-16777217}function wo(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Bm(a))if(Zo())n.flags|=8192;else throw Ve=yu,ur}function Du(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?ns():536870912,n.lanes|=a,Ei|=a)}function yt(n,a){if(!sn)switch(n.tailMode){case"hidden":a=n.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function jn(n){var a=n.alternate!==null&&n.alternate.child===n.child,e=0,i=0;if(a)for(var t=n.child;t!==null;)e|=t.lanes|t.childLanes,i|=t.subtreeFlags&65011712,i|=t.flags&65011712,t.return=n,t=t.sibling;else for(t=n.child;t!==null;)e|=t.lanes|t.childLanes,i|=t.subtreeFlags,i|=t.flags,t.return=n,t=t.sibling;return n.subtreeFlags|=i,n.childLanes=e,a}function ev(n,a,e){var i=a.pendingProps;switch($l(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(a),null;case 1:return jn(a),null;case 3:return e=a.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Va(_n),Mn(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(ci(a)?$a(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Pl())),jn(a),null;case 26:var t=a.type,u=a.memoizedState;return n===null?($a(a),u!==null?(jn(a),wo(a,u)):(jn(a),Kr(a,t,null,i,e))):u?u!==n.memoizedState?($a(a),jn(a),wo(a,u)):(jn(a),a.flags&=-16777217):(n=n.memoizedProps,n!==i&&$a(a),jn(a),Kr(a,t,n,i,e)),null;case 27:if(Lt(a),e=tn.current,t=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==i&&$a(a);else{if(!i){if(a.stateNode===null)throw Error(s(166));return jn(a),null}n=J.current,ci(a)?nd(a):(n=Hm(t,i,e),a.stateNode=n,$a(a))}return jn(a),null;case 5:if(Lt(a),t=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==i&&$a(a);else{if(!i){if(a.stateNode===null)throw Error(s(166));return jn(a),null}if(u=J.current,ci(a))nd(a);else{var r=Xu(tn.current);switch(u){case 1:u=r.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:u=r.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":u=r.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":u=r.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":u=r.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?r.createElement(t,{is:i.is}):r.createElement(t)}}u[Yn]=a,u[In]=i;n:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)u.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break n;for(;r.sibling===null;){if(r.return===null||r.return===a)break n;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=u;n:switch(Qn(u,t,i),t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}i&&$a(a)}}return jn(a),Kr(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,e),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==i&&$a(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(s(166));if(n=tn.current,ci(a)){if(n=a.stateNode,e=a.memoizedProps,i=null,t=qn,t!==null)switch(t.tag){case 27:case 5:i=t.memoizedProps}n[Yn]=a,n=!!(n.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||pm(n.nodeValue,e)),n||oe(a,!0)}else n=Xu(n).createTextNode(i),n[Yn]=a,a.stateNode=n}return jn(a),null;case 31:if(e=a.memoizedState,n===null||n.memoizedState!==null){if(i=ci(a),e!==null){if(n===null){if(!i)throw Error(s(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(557));n[Yn]=a}else Le(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;jn(a),n=!1}else e=Pl(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return a.flags&256?(ca(a),a):(ca(a),null);if((a.flags&128)!==0)throw Error(s(558))}return jn(a),null;case 13:if(i=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(t=ci(a),i!==null&&i.dehydrated!==null){if(n===null){if(!t)throw Error(s(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t[Yn]=a}else Le(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;jn(a),t=!1}else t=Pl(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),t=!0;if(!t)return a.flags&256?(ca(a),a):(ca(a),null)}return ca(a),(a.flags&128)!==0?(a.lanes=e,a):(e=i!==null,n=n!==null&&n.memoizedState!==null,e&&(i=a.child,t=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(t=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==t&&(i.flags|=2048)),e!==n&&e&&(a.child.flags|=8192),Du(a,a.updateQueue),jn(a),null);case 4:return Mn(),n===null&&dh(a.stateNode.containerInfo),jn(a),null;case 10:return Va(a.type),jn(a),null;case 19:if(_(Tn),i=a.memoizedState,i===null)return jn(a),null;if(t=(a.flags&128)!==0,u=i.rendering,u===null)if(t)yt(i,!1);else{if(Dn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(u=gu(n),u!==null){for(a.flags|=128,yt(i,!1),n=u.updateQueue,a.updateQueue=n,Du(a,n),a.subtreeFlags=0,n=e,e=a.child;e!==null;)Ws(e,n),e=e.sibling;return B(Tn,Tn.current&1|2),sn&&qa(a,i.treeForkCount),a.child}n=n.sibling}i.tail!==null&&ha()>Ou&&(a.flags|=128,t=!0,yt(i,!1),a.lanes=4194304)}else{if(!t)if(n=gu(u),n!==null){if(a.flags|=128,t=!0,n=n.updateQueue,a.updateQueue=n,Du(a,n),yt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!sn)return jn(a),null}else 2*ha()-i.renderingStartTime>Ou&&e!==536870912&&(a.flags|=128,t=!0,yt(i,!1),a.lanes=4194304);i.isBackwards?(u.sibling=a.child,a.child=u):(n=i.last,n!==null?n.sibling=u:a.child=u,i.last=u)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ha(),n.sibling=null,e=Tn.current,B(Tn,t?e&1|2:e&1),sn&&qa(a,i.treeForkCount),n):(jn(a),null);case 22:case 23:return ca(a),or(),i=a.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(e&536870912)!==0&&(a.flags&128)===0&&(jn(a),a.subtreeFlags&6&&(a.flags|=8192)):jn(a),e=a.updateQueue,e!==null&&Du(a,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==e&&(a.flags|=2048),n!==null&&_(qe),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Va(_n),jn(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function iv(n,a){switch($l(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Va(_n),Mn(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Lt(a),null;case 31:if(a.memoizedState!==null){if(ca(a),a.alternate===null)throw Error(s(340));Le()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(ca(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Le()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return _(Tn),null;case 4:return Mn(),null;case 10:return Va(a.type),null;case 22:case 23:return ca(a),or(),n!==null&&_(qe),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Va(_n),null;case 25:return null;default:return null}}function jo(n,a){switch($l(a),a.tag){case 3:Va(_n),Mn();break;case 26:case 27:case 5:Lt(a);break;case 4:Mn();break;case 31:a.memoizedState!==null&&ca(a);break;case 13:ca(a);break;case 19:_(Tn);break;case 10:Va(a.type);break;case 22:case 23:ca(a),or(),n!==null&&_(qe);break;case 24:Va(_n)}}function ct(n,a){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var t=i.next;e=t;do{if((e.tag&n)===n){i=void 0;var u=e.create,r=e.inst;i=u(),r.destroy=i}e=e.next}while(e!==t)}}catch(d){vn(a,a.return,d)}}function pe(n,a,e){try{var i=a.updateQueue,t=i!==null?i.lastEffect:null;if(t!==null){var u=t.next;i=u;do{if((i.tag&n)===n){var r=i.inst,d=r.destroy;if(d!==void 0){r.destroy=void 0,t=a;var y=e,w=d;try{w()}catch(E){vn(t,y,E)}}}i=i.next}while(i!==u)}}catch(E){vn(a,a.return,E)}}function Ao(n){var a=n.updateQueue;if(a!==null){var e=n.stateNode;try{yd(a,e)}catch(i){vn(n,n.return,i)}}}function Go(n,a,e){e.props=We(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(i){vn(n,a,i)}}function vt(n,a){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var i=n.stateNode;break;case 30:i=n.stateNode;break;default:i=n.stateNode}typeof e=="function"?n.refCleanup=e(i):e.current=i}}catch(t){vn(n,a,t)}}function _a(n,a){var e=n.ref,i=n.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(t){vn(n,a,t)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(t){vn(n,a,t)}else e.current=null}function Co(n){var a=n.type,e=n.memoizedProps,i=n.stateNode;try{n:switch(a){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break n;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(t){vn(n,n.return,t)}}function Yr(n,a,e){try{var i=n.stateNode;Gv(i,n.type,e,a),i[In]=a}catch(t){vn(n,n.return,t)}}function Eo(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ge(n.type)||n.tag===4}function qr(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Eo(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ge(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xr(n,a,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,a?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,a):(a=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.appendChild(n),e=e._reactRootContainer,e!=null||a.onclick!==null||(a.onclick=La));else if(i!==4&&(i===27&&Ge(n.type)&&(e=n.stateNode,a=null),n=n.child,n!==null))for(Xr(n,a,e),n=n.sibling;n!==null;)Xr(n,a,e),n=n.sibling}function Mu(n,a,e){var i=n.tag;if(i===5||i===6)n=n.stateNode,a?e.insertBefore(n,a):e.appendChild(n);else if(i!==4&&(i===27&&Ge(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(Mu(n,a,e),n=n.sibling;n!==null;)Mu(n,a,e),n=n.sibling}function Ro(n){var a=n.stateNode,e=n.memoizedProps;try{for(var i=n.type,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);Qn(a,i,e),a[Yn]=n,a[In]=e}catch(u){vn(n,n.return,u)}}var Fa=!1,Bn=!1,Vr=!1,Ho=typeof WeakSet=="function"?WeakSet:Set,Kn=null;function tv(n,a){if(n=n.containerInfo,yh=Pu,n=Js(n),Ul(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var t=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break n}var r=0,d=-1,y=-1,w=0,E=0,T=n,j=null;a:for(;;){for(var G;T!==e||t!==0&&T.nodeType!==3||(d=r+t),T!==u||i!==0&&T.nodeType!==3||(y=r+i),T.nodeType===3&&(r+=T.nodeValue.length),(G=T.firstChild)!==null;)j=T,T=G;for(;;){if(T===n)break a;if(j===e&&++w===t&&(d=r),j===u&&++E===i&&(y=r),(G=T.nextSibling)!==null)break;T=j,j=T.parentNode}T=G}e=d===-1||y===-1?null:{start:d,end:y}}else e=null}e=e||{start:0,end:0}}else e=null;for(ch={focusedElem:n,selectionRange:e},Pu=!1,Kn=a;Kn!==null;)if(a=Kn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Kn=n;else for(;Kn!==null;){switch(a=Kn,u=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)t=n[e],t.ref.impl=t.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&u!==null){n=void 0,e=a,t=u.memoizedProps,u=u.memoizedState,i=e.stateNode;try{var U=We(e.type,t);n=i.getSnapshotBeforeUpdate(U,u),i.__reactInternalSnapshotBeforeUpdate=n}catch(Z){vn(e,e.return,Z)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,e=n.nodeType,e===9)gh(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":gh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=a.sibling,n!==null){n.return=a.return,Kn=n;break}Kn=a.return}}function Do(n,a,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ia(n,e),i&4&&ct(5,e);break;case 1:if(Ia(n,e),i&4)if(n=e.stateNode,a===null)try{n.componentDidMount()}catch(r){vn(e,e.return,r)}else{var t=We(e.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(t,a,n.__reactInternalSnapshotBeforeUpdate)}catch(r){vn(e,e.return,r)}}i&64&&Ao(e),i&512&&vt(e,e.return);break;case 3:if(Ia(n,e),i&64&&(n=e.updateQueue,n!==null)){if(a=null,e.child!==null)switch(e.child.tag){case 27:case 5:a=e.child.stateNode;break;case 1:a=e.child.stateNode}try{yd(n,a)}catch(r){vn(e,e.return,r)}}break;case 27:a===null&&i&4&&Ro(e);case 26:case 5:Ia(n,e),a===null&&i&4&&Co(e),i&512&&vt(e,e.return);break;case 12:Ia(n,e);break;case 31:Ia(n,e),i&4&&zo(n,e);break;case 13:Ia(n,e),i&4&&_o(n,e),i&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=yv.bind(null,e),zv(n,e))));break;case 22:if(i=e.memoizedState!==null||Fa,!i){a=a!==null&&a.memoizedState!==null||Bn,t=Fa;var u=Bn;Fa=i,(Bn=a)&&!u?ne(n,e,(e.subtreeFlags&8772)!==0):Ia(n,e),Fa=t,Bn=u}break;case 30:break;default:Ia(n,e)}}function Mo(n){var a=n.alternate;a!==null&&(n.alternate=null,Mo(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&wl(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Gn=null,aa=!1;function Pa(n,a,e){for(e=e.child;e!==null;)To(n,a,e),e=e.sibling}function To(n,a,e){if(sa&&typeof sa.onCommitFiberUnmount=="function")try{sa.onCommitFiberUnmount(Ui,e)}catch{}switch(e.tag){case 26:Bn||_a(e,a),Pa(n,a,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Bn||_a(e,a);var i=Gn,t=aa;Ge(e.type)&&(Gn=e.stateNode,aa=!1),Pa(n,a,e),At(e.stateNode),Gn=i,aa=t;break;case 5:Bn||_a(e,a);case 6:if(i=Gn,t=aa,Gn=null,Pa(n,a,e),Gn=i,aa=t,Gn!==null)if(aa)try{(Gn.nodeType===9?Gn.body:Gn.nodeName==="HTML"?Gn.ownerDocument.body:Gn).removeChild(e.stateNode)}catch(u){vn(e,a,u)}else try{Gn.removeChild(e.stateNode)}catch(u){vn(e,a,u)}break;case 18:Gn!==null&&(aa?(n=Gn,Am(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Oi(n)):Am(Gn,e.stateNode));break;case 4:i=Gn,t=aa,Gn=e.stateNode.containerInfo,aa=!0,Pa(n,a,e),Gn=i,aa=t;break;case 0:case 11:case 14:case 15:pe(2,e,a),Bn||pe(4,e,a),Pa(n,a,e);break;case 1:Bn||(_a(e,a),i=e.stateNode,typeof i.componentWillUnmount=="function"&&Go(e,a,i)),Pa(n,a,e);break;case 21:Pa(n,a,e);break;case 22:Bn=(i=Bn)||e.memoizedState!==null,Pa(n,a,e),Bn=i;break;default:Pa(n,a,e)}}function zo(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Oi(n)}catch(e){vn(a,a.return,e)}}}function _o(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Oi(n)}catch(e){vn(a,a.return,e)}}function uv(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Ho),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Ho),a;default:throw Error(s(435,n.tag))}}function Tu(n,a){var e=uv(n);a.forEach(function(i){if(!e.has(i)){e.add(i);var t=cv.bind(null,n,i);i.then(t,t)}})}function ea(n,a){var e=a.deletions;if(e!==null)for(var i=0;i<e.length;i++){var t=e[i],u=n,r=a,d=r;n:for(;d!==null;){switch(d.tag){case 27:if(Ge(d.type)){Gn=d.stateNode,aa=!1;break n}break;case 5:Gn=d.stateNode,aa=!1;break n;case 3:case 4:Gn=d.stateNode.containerInfo,aa=!0;break n}d=d.return}if(Gn===null)throw Error(s(160));To(u,r,t),Gn=null,aa=!1,u=t.alternate,u!==null&&(u.return=null),t.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Oo(a,n),a=a.sibling}var Da=null;function Oo(n,a){var e=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ea(a,n),ia(n),i&4&&(pe(3,n,n.return),ct(3,n),pe(5,n,n.return));break;case 1:ea(a,n),ia(n),i&512&&(Bn||e===null||_a(e,e.return)),i&64&&Fa&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var t=Da;if(ea(a,n),ia(n),i&512&&(Bn||e===null||_a(e,e.return)),i&4){var u=e!==null?e.memoizedState:null;if(i=n.memoizedState,e===null)if(i===null)if(n.stateNode===null){n:{i=n.type,e=n.memoizedProps,t=t.ownerDocument||t;a:switch(i){case"title":u=t.getElementsByTagName("title")[0],(!u||u[Ki]||u[Yn]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=t.createElement(i),t.head.insertBefore(u,t.querySelector("head > title"))),Qn(u,i,e),u[Yn]=n,Ln(u),i=u;break n;case"link":var r=Om("link","href",t).get(i+(e.href||""));if(r){for(var d=0;d<r.length;d++)if(u=r[d],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(d,1);break a}}u=t.createElement(i),Qn(u,i,e),t.head.appendChild(u);break;case"meta":if(r=Om("meta","content",t).get(i+(e.content||""))){for(d=0;d<r.length;d++)if(u=r[d],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(d,1);break a}}u=t.createElement(i),Qn(u,i,e),t.head.appendChild(u);break;default:throw Error(s(468,i))}u[Yn]=n,Ln(u),i=u}n.stateNode=i}else Nm(t,n.type,n.stateNode);else n.stateNode=_m(t,i,n.memoizedProps);else u!==i?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,i===null?Nm(t,n.type,n.stateNode):_m(t,i,n.memoizedProps)):i===null&&n.stateNode!==null&&Yr(n,n.memoizedProps,e.memoizedProps)}break;case 27:ea(a,n),ia(n),i&512&&(Bn||e===null||_a(e,e.return)),e!==null&&i&4&&Yr(n,n.memoizedProps,e.memoizedProps);break;case 5:if(ea(a,n),ia(n),i&512&&(Bn||e===null||_a(e,e.return)),n.flags&32){t=n.stateNode;try{ti(t,"")}catch(U){vn(n,n.return,U)}}i&4&&n.stateNode!=null&&(t=n.memoizedProps,Yr(n,t,e!==null?e.memoizedProps:t)),i&1024&&(Vr=!0);break;case 6:if(ea(a,n),ia(n),i&4){if(n.stateNode===null)throw Error(s(162));i=n.memoizedProps,e=n.stateNode;try{e.nodeValue=i}catch(U){vn(n,n.return,U)}}break;case 3:if(Zu=null,t=Da,Da=Vu(a.containerInfo),ea(a,n),Da=t,ia(n),i&4&&e!==null&&e.memoizedState.isDehydrated)try{Oi(a.containerInfo)}catch(U){vn(n,n.return,U)}Vr&&(Vr=!1,No(n));break;case 4:i=Da,Da=Vu(n.stateNode.containerInfo),ea(a,n),ia(n),Da=i;break;case 12:ea(a,n),ia(n);break;case 31:ea(a,n),ia(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Tu(n,i)));break;case 13:ea(a,n),ia(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(_u=ha()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Tu(n,i)));break;case 22:t=n.memoizedState!==null;var y=e!==null&&e.memoizedState!==null,w=Fa,E=Bn;if(Fa=w||t,Bn=E||y,ea(a,n),Bn=E,Fa=w,ia(n),i&8192)n:for(a=n.stateNode,a._visibility=t?a._visibility&-2:a._visibility|1,t&&(e===null||y||Fa||Bn||$e(n)),e=null,a=n;;){if(a.tag===5||a.tag===26){if(e===null){y=e=a;try{if(u=y.stateNode,t)r=u.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=y.stateNode;var T=y.memoizedProps.style,j=T!=null&&T.hasOwnProperty("display")?T.display:null;d.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(U){vn(y,y.return,U)}}}else if(a.tag===6){if(e===null){y=a;try{y.stateNode.nodeValue=t?"":y.memoizedProps}catch(U){vn(y,y.return,U)}}}else if(a.tag===18){if(e===null){y=a;try{var G=y.stateNode;t?Gm(G,!0):Gm(y.stateNode,!1)}catch(U){vn(y,y.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break n;for(;a.sibling===null;){if(a.return===null||a.return===n)break n;e===a&&(e=null),a=a.return}e===a&&(e=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=n.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,Tu(n,e))));break;case 19:ea(a,n),ia(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Tu(n,i)));break;case 30:break;case 21:break;default:ea(a,n),ia(n)}}function ia(n){var a=n.flags;if(a&2){try{for(var e,i=n.return;i!==null;){if(Eo(i)){e=i;break}i=i.return}if(e==null)throw Error(s(160));switch(e.tag){case 27:var t=e.stateNode,u=qr(n);Mu(n,u,t);break;case 5:var r=e.stateNode;e.flags&32&&(ti(r,""),e.flags&=-33);var d=qr(n);Mu(n,d,r);break;case 3:case 4:var y=e.stateNode.containerInfo,w=qr(n);Xr(n,w,y);break;default:throw Error(s(161))}}catch(E){vn(n,n.return,E)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function No(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;No(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ia(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Do(n,a.alternate,a),a=a.sibling}function $e(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:pe(4,a,a.return),$e(a);break;case 1:_a(a,a.return);var e=a.stateNode;typeof e.componentWillUnmount=="function"&&Go(a,a.return,e),$e(a);break;case 27:At(a.stateNode);case 26:case 5:_a(a,a.return),$e(a);break;case 22:a.memoizedState===null&&$e(a);break;case 30:$e(a);break;default:$e(a)}n=n.sibling}}function ne(n,a,e){for(e=e&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,t=n,u=a,r=u.flags;switch(u.tag){case 0:case 11:case 15:ne(t,u,e),ct(4,u);break;case 1:if(ne(t,u,e),i=u,t=i.stateNode,typeof t.componentDidMount=="function")try{t.componentDidMount()}catch(w){vn(i,i.return,w)}if(i=u,t=i.updateQueue,t!==null){var d=i.stateNode;try{var y=t.shared.hiddenCallbacks;if(y!==null)for(t.shared.hiddenCallbacks=null,t=0;t<y.length;t++)md(y[t],d)}catch(w){vn(i,i.return,w)}}e&&r&64&&Ao(u),vt(u,u.return);break;case 27:Ro(u);case 26:case 5:ne(t,u,e),e&&i===null&&r&4&&Co(u),vt(u,u.return);break;case 12:ne(t,u,e);break;case 31:ne(t,u,e),e&&r&4&&zo(t,u);break;case 13:ne(t,u,e),e&&r&4&&_o(t,u);break;case 22:u.memoizedState===null&&ne(t,u,e),vt(u,u.return);break;case 30:break;default:ne(t,u,e)}a=a.sibling}}function Qr(n,a){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&at(e))}function Zr(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&at(n))}function Ma(n,a,e,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Bo(n,a,e,i),a=a.sibling}function Bo(n,a,e,i){var t=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(n,a,e,i),t&2048&&ct(9,a);break;case 1:Ma(n,a,e,i);break;case 3:Ma(n,a,e,i),t&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&at(n)));break;case 12:if(t&2048){Ma(n,a,e,i),n=a.stateNode;try{var u=a.memoizedProps,r=u.id,d=u.onPostCommit;typeof d=="function"&&d(r,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(y){vn(a,a.return,y)}}else Ma(n,a,e,i);break;case 31:Ma(n,a,e,i);break;case 13:Ma(n,a,e,i);break;case 23:break;case 22:u=a.stateNode,r=a.alternate,a.memoizedState!==null?u._visibility&2?Ma(n,a,e,i):ft(n,a):u._visibility&2?Ma(n,a,e,i):(u._visibility|=2,Ai(n,a,e,i,(a.subtreeFlags&10256)!==0||!1)),t&2048&&Qr(r,a);break;case 24:Ma(n,a,e,i),t&2048&&Zr(a.alternate,a);break;default:Ma(n,a,e,i)}}function Ai(n,a,e,i,t){for(t=t&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var u=n,r=a,d=e,y=i,w=r.flags;switch(r.tag){case 0:case 11:case 15:Ai(u,r,d,y,t),ct(8,r);break;case 23:break;case 22:var E=r.stateNode;r.memoizedState!==null?E._visibility&2?Ai(u,r,d,y,t):ft(u,r):(E._visibility|=2,Ai(u,r,d,y,t)),t&&w&2048&&Qr(r.alternate,r);break;case 24:Ai(u,r,d,y,t),t&&w&2048&&Zr(r.alternate,r);break;default:Ai(u,r,d,y,t)}a=a.sibling}}function ft(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var e=n,i=a,t=i.flags;switch(i.tag){case 22:ft(e,i),t&2048&&Qr(i.alternate,i);break;case 24:ft(e,i),t&2048&&Zr(i.alternate,i);break;default:ft(e,i)}a=a.sibling}}var gt=8192;function Gi(n,a,e){if(n.subtreeFlags&gt)for(n=n.child;n!==null;)xo(n,a,e),n=n.sibling}function xo(n,a,e){switch(n.tag){case 26:Gi(n,a,e),n.flags&gt&&n.memoizedState!==null&&Xv(e,Da,n.memoizedState,n.memoizedProps);break;case 5:Gi(n,a,e);break;case 3:case 4:var i=Da;Da=Vu(n.stateNode.containerInfo),Gi(n,a,e),Da=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=gt,gt=16777216,Gi(n,a,e),gt=i):Gi(n,a,e));break;default:Gi(n,a,e)}}function Uo(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function pt(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var i=a[e];Kn=i,Lo(i,n)}Uo(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jo(n),n=n.sibling}function Jo(n){switch(n.tag){case 0:case 11:case 15:pt(n),n.flags&2048&&pe(9,n,n.return);break;case 3:pt(n);break;case 12:pt(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,zu(n)):pt(n);break;default:pt(n)}}function zu(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var e=0;e<a.length;e++){var i=a[e];Kn=i,Lo(i,n)}Uo(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:pe(8,a,a.return),zu(a);break;case 22:e=a.stateNode,e._visibility&2&&(e._visibility&=-3,zu(a));break;default:zu(a)}n=n.sibling}}function Lo(n,a){for(;Kn!==null;){var e=Kn;switch(e.tag){case 0:case 11:case 15:pe(8,e,a);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:at(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,Kn=i;else n:for(e=n;Kn!==null;){i=Kn;var t=i.sibling,u=i.return;if(Mo(i),i===e){Kn=null;break n}if(t!==null){t.return=u,Kn=t;break n}Kn=u}}}var lv={getCacheForType:function(n){var a=Xn(_n),e=a.data.get(n);return e===void 0&&(e=n(),a.data.set(n,e)),e},cacheSignal:function(){return Xn(_n).controller.signal}},rv=typeof WeakMap=="function"?WeakMap:Map,mn=0,bn=null,un=null,rn=0,cn=0,va=null,ke=!1,Ci=!1,Wr=!1,ae=0,Dn=0,Se=0,Fe=0,$r=0,fa=0,Ei=0,kt=null,ta=null,Fr=!1,_u=0,Ko=0,Ou=1/0,Nu=null,be=null,Jn=0,we=null,Ri=null,ee=0,Pr=0,Ir=null,Yo=null,St=0,nh=null;function ga(){return(mn&2)!==0&&rn!==0?rn&-rn:D.T!==null?lh():ts()}function qo(){if(fa===0)if((rn&536870912)===0||sn){var n=qt;qt<<=1,(qt&3932160)===0&&(qt=262144),fa=n}else fa=536870912;return n=ya.current,n!==null&&(n.flags|=32),fa}function ua(n,a,e){(n===bn&&(cn===2||cn===9)||n.cancelPendingCommit!==null)&&(Hi(n,0),je(n,rn,fa,!1)),Li(n,e),((mn&2)===0||n!==bn)&&(n===bn&&((mn&2)===0&&(Fe|=e),Dn===4&&je(n,rn,fa,!1)),Oa(n))}function Xo(n,a,e){if((mn&6)!==0)throw Error(s(327));var i=!e&&(a&127)===0&&(a&n.expiredLanes)===0||Ji(n,a),t=i?dv(n,a):eh(n,a,!0),u=i;do{if(t===0){Ci&&!i&&je(n,a,0,!1);break}else{if(e=n.current.alternate,u&&!hv(e)){t=eh(n,a,!1),u=!1;continue}if(t===2){if(u=a,n.errorRecoveryDisabledLanes&u)var r=0;else r=n.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;n:{var d=n;t=kt;var y=d.current.memoizedState.isDehydrated;if(y&&(Hi(d,r).flags|=256),r=eh(d,r,!1),r!==2){if(Wr&&!y){d.errorRecoveryDisabledLanes|=u,Fe|=u,t=4;break n}u=ta,ta=t,u!==null&&(ta===null?ta=u:ta.push.apply(ta,u))}t=r}if(u=!1,t!==2)continue}}if(t===1){Hi(n,0),je(n,a,0,!0);break}n:{switch(i=n,u=t,u){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:je(i,a,fa,!ke);break n;case 2:ta=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(t=_u+300-ha(),10<t)){if(je(i,a,fa,!ke),Vt(i,0,!0)!==0)break n;ee=a,i.timeoutHandle=wm(Vo.bind(null,i,e,ta,Nu,Fr,a,fa,Fe,Ei,ke,u,"Throttled",-0,0),t);break n}Vo(i,e,ta,Nu,Fr,a,fa,Fe,Ei,ke,u,null,-0,0)}}break}while(!0);Oa(n)}function Vo(n,a,e,i,t,u,r,d,y,w,E,T,j,G){if(n.timeoutHandle=-1,T=a.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:La},xo(a,u,T);var U=(u&62914560)===u?_u-ha():(u&4194048)===u?Ko-ha():0;if(U=Vv(T,U),U!==null){ee=u,n.cancelPendingCommit=U(nm.bind(null,n,a,u,e,i,t,r,d,y,E,T,null,j,G)),je(n,u,r,!w);return}}nm(n,a,u,e,i,t,r,d,y)}function hv(n){for(var a=n;;){var e=a.tag;if((e===0||e===11||e===15)&&a.flags&16384&&(e=a.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var t=e[i],u=t.getSnapshot;t=t.value;try{if(!oa(u(),t))return!1}catch{return!1}}if(e=a.child,a.subtreeFlags&16384&&e!==null)e.return=a,a=e;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function je(n,a,e,i){a&=~$r,a&=~Fe,n.suspendedLanes|=a,n.pingedLanes&=~a,i&&(n.warmLanes|=a),i=n.expirationTimes;for(var t=a;0<t;){var u=31-da(t),r=1<<u;i[u]=-1,t&=~r}e!==0&&as(n,e,a)}function Bu(){return(mn&6)===0?(bt(0),!1):!0}function ah(){if(un!==null){if(cn===0)var n=un.return;else n=un,Xa=Ke=null,gr(n),ki=null,it=0,n=un;for(;n!==null;)jo(n.alternate,n),n=n.return;un=null}}function Hi(n,a){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Rv(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),ee=0,ah(),bn=n,un=e=Ya(n.current,null),rn=a,cn=0,va=null,ke=!1,Ci=Ji(n,a),Wr=!1,Ei=fa=$r=Fe=Se=Dn=0,ta=kt=null,Fr=!1,(a&8)!==0&&(a|=a&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=a;0<i;){var t=31-da(i),u=1<<t;a|=n[t],i&=~u}return ae=a,tu(),e}function Qo(n,a){nn=null,D.H=ot,a===pi||a===mu?(a=hd(),cn=3):a===ur?(a=hd(),cn=4):cn=a===zr?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,va=a,un===null&&(Dn=1,Cu(n,ba(a,n.current)))}function Zo(){var n=ya.current;return n===null?!0:(rn&4194048)===rn?Ga===null:(rn&62914560)===rn||(rn&536870912)!==0?n===Ga:!1}function Wo(){var n=D.H;return D.H=ot,n===null?ot:n}function $o(){var n=D.A;return D.A=lv,n}function xu(){Dn=4,ke||(rn&4194048)!==rn&&ya.current!==null||(Ci=!0),(Se&134217727)===0&&(Fe&134217727)===0||bn===null||je(bn,rn,fa,!1)}function eh(n,a,e){var i=mn;mn|=2;var t=Wo(),u=$o();(bn!==n||rn!==a)&&(Nu=null,Hi(n,a)),a=!1;var r=Dn;n:do try{if(cn!==0&&un!==null){var d=un,y=va;switch(cn){case 8:ah(),r=6;break n;case 3:case 2:case 9:case 6:ya.current===null&&(a=!0);var w=cn;if(cn=0,va=null,Di(n,d,y,w),e&&Ci){r=0;break n}break;default:w=cn,cn=0,va=null,Di(n,d,y,w)}}sv(),r=Dn;break}catch(E){Qo(n,E)}while(!0);return a&&n.shellSuspendCounter++,Xa=Ke=null,mn=i,D.H=t,D.A=u,un===null&&(bn=null,rn=0,tu()),r}function sv(){for(;un!==null;)Fo(un)}function dv(n,a){var e=mn;mn|=2;var i=Wo(),t=$o();bn!==n||rn!==a?(Nu=null,Ou=ha()+500,Hi(n,a)):Ci=Ji(n,a);n:do try{if(cn!==0&&un!==null){a=un;var u=va;a:switch(cn){case 1:cn=0,va=null,Di(n,a,u,1);break;case 2:case 9:if(ld(u)){cn=0,va=null,Po(a);break}a=function(){cn!==2&&cn!==9||bn!==n||(cn=7),Oa(n)},u.then(a,a);break n;case 3:cn=7;break n;case 4:cn=5;break n;case 7:ld(u)?(cn=0,va=null,Po(a)):(cn=0,va=null,Di(n,a,u,7));break;case 5:var r=null;switch(un.tag){case 26:r=un.memoizedState;case 5:case 27:var d=un;if(r?Bm(r):d.stateNode.complete){cn=0,va=null;var y=d.sibling;if(y!==null)un=y;else{var w=d.return;w!==null?(un=w,Uu(w)):un=null}break a}}cn=0,va=null,Di(n,a,u,5);break;case 6:cn=0,va=null,Di(n,a,u,6);break;case 8:ah(),Dn=6;break n;default:throw Error(s(462))}}ov();break}catch(E){Qo(n,E)}while(!0);return Xa=Ke=null,D.H=i,D.A=t,mn=e,un!==null?0:(bn=null,rn=0,tu(),Dn)}function ov(){for(;un!==null&&!_y();)Fo(un)}function Fo(n){var a=bo(n.alternate,n,ae);n.memoizedProps=n.pendingProps,a===null?Uu(n):un=a}function Po(n){var a=n,e=a.alternate;switch(a.tag){case 15:case 0:a=vo(e,a,a.pendingProps,a.type,void 0,rn);break;case 11:a=vo(e,a,a.pendingProps,a.type.render,a.ref,rn);break;case 5:gr(a);default:jo(e,a),a=un=Ws(a,ae),a=bo(e,a,ae)}n.memoizedProps=n.pendingProps,a===null?Uu(n):un=a}function Di(n,a,e,i){Xa=Ke=null,gr(a),ki=null,it=0;var t=a.return;try{if(Ic(n,t,a,e,rn)){Dn=1,Cu(n,ba(e,n.current)),un=null;return}}catch(u){if(t!==null)throw un=t,u;Dn=1,Cu(n,ba(e,n.current)),un=null;return}a.flags&32768?(sn||i===1?n=!0:Ci||(rn&536870912)!==0?n=!1:(ke=n=!0,(i===2||i===9||i===3||i===6)&&(i=ya.current,i!==null&&i.tag===13&&(i.flags|=16384))),Io(a,n)):Uu(a)}function Uu(n){var a=n;do{if((a.flags&32768)!==0){Io(a,ke);return}n=a.return;var e=ev(a.alternate,a,ae);if(e!==null){un=e;return}if(a=a.sibling,a!==null){un=a;return}un=a=n}while(a!==null);Dn===0&&(Dn=5)}function Io(n,a){do{var e=iv(n.alternate,n);if(e!==null){e.flags&=32767,un=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!a&&(n=n.sibling,n!==null)){un=n;return}un=n=e}while(n!==null);Dn=6,un=null}function nm(n,a,e,i,t,u,r,d,y){n.cancelPendingCommit=null;do Ju();while(Jn!==0);if((mn&6)!==0)throw Error(s(327));if(a!==null){if(a===n.current)throw Error(s(177));if(u=a.lanes|a.childLanes,u|=ql,qy(n,e,u,r,d,y),n===bn&&(un=bn=null,rn=0),Ri=a,we=n,ee=e,Pr=u,Ir=t,Yo=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,vv(Kt,function(){return um(),null})):(n.callbackNode=null,n.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,t=N.p,N.p=2,r=mn,mn|=4;try{tv(n,a,e)}finally{mn=r,N.p=t,D.T=i}}Jn=1,am(),em(),im()}}function am(){if(Jn===1){Jn=0;var n=we,a=Ri,e=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||e){e=D.T,D.T=null;var i=N.p;N.p=2;var t=mn;mn|=4;try{Oo(a,n);var u=ch,r=Js(n.containerInfo),d=u.focusedElem,y=u.selectionRange;if(r!==d&&d&&d.ownerDocument&&Us(d.ownerDocument.documentElement,d)){if(y!==null&&Ul(d)){var w=y.start,E=y.end;if(E===void 0&&(E=w),"selectionStart"in d)d.selectionStart=w,d.selectionEnd=Math.min(E,d.value.length);else{var T=d.ownerDocument||document,j=T&&T.defaultView||window;if(j.getSelection){var G=j.getSelection(),U=d.textContent.length,Z=Math.min(y.start,U),kn=y.end===void 0?Z:Math.min(y.end,U);!G.extend&&Z>kn&&(r=kn,kn=Z,Z=r);var k=xs(d,Z),f=xs(d,kn);if(k&&f&&(G.rangeCount!==1||G.anchorNode!==k.node||G.anchorOffset!==k.offset||G.focusNode!==f.node||G.focusOffset!==f.offset)){var b=T.createRange();b.setStart(k.node,k.offset),G.removeAllRanges(),Z>kn?(G.addRange(b),G.extend(f.node,f.offset)):(b.setEnd(f.node,f.offset),G.addRange(b))}}}}for(T=[],G=d;G=G.parentNode;)G.nodeType===1&&T.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<T.length;d++){var M=T[d];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Pu=!!yh,ch=yh=null}finally{mn=t,N.p=i,D.T=e}}n.current=a,Jn=2}}function em(){if(Jn===2){Jn=0;var n=we,a=Ri,e=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||e){e=D.T,D.T=null;var i=N.p;N.p=2;var t=mn;mn|=4;try{Do(n,a.alternate,a)}finally{mn=t,N.p=i,D.T=e}}Jn=3}}function im(){if(Jn===4||Jn===3){Jn=0,Oy();var n=we,a=Ri,e=ee,i=Yo;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Jn=5:(Jn=0,Ri=we=null,tm(n,n.pendingLanes));var t=n.pendingLanes;if(t===0&&(be=null),Sl(e),a=a.stateNode,sa&&typeof sa.onCommitFiberRoot=="function")try{sa.onCommitFiberRoot(Ui,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=D.T,t=N.p,N.p=2,D.T=null;try{for(var u=n.onRecoverableError,r=0;r<i.length;r++){var d=i[r];u(d.value,{componentStack:d.stack})}}finally{D.T=a,N.p=t}}(ee&3)!==0&&Ju(),Oa(n),t=n.pendingLanes,(e&261930)!==0&&(t&42)!==0?n===nh?St++:(St=0,nh=n):St=0,bt(0)}}function tm(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,at(a)))}function Ju(){return am(),em(),im(),um()}function um(){if(Jn!==5)return!1;var n=we,a=Pr;Pr=0;var e=Sl(ee),i=D.T,t=N.p;try{N.p=32>e?32:e,D.T=null,e=Ir,Ir=null;var u=we,r=ee;if(Jn=0,Ri=we=null,ee=0,(mn&6)!==0)throw Error(s(331));var d=mn;if(mn|=4,Jo(u.current),Bo(u,u.current,r,e),mn=d,bt(0,!1),sa&&typeof sa.onPostCommitFiberRoot=="function")try{sa.onPostCommitFiberRoot(Ui,u)}catch{}return!0}finally{N.p=t,D.T=i,tm(n,a)}}function lm(n,a,e){a=ba(e,a),a=Tr(n.stateNode,a,2),n=ve(n,a,2),n!==null&&(Li(n,2),Oa(n))}function vn(n,a,e){if(n.tag===3)lm(n,n,e);else for(;a!==null;){if(a.tag===3){lm(a,n,e);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(be===null||!be.has(i))){n=ba(e,n),e=lo(2),i=ve(a,e,2),i!==null&&(ro(e,i,a,n),Li(i,2),Oa(i));break}}a=a.return}}function ih(n,a,e){var i=n.pingCache;if(i===null){i=n.pingCache=new rv;var t=new Set;i.set(a,t)}else t=i.get(a),t===void 0&&(t=new Set,i.set(a,t));t.has(e)||(Wr=!0,t.add(e),n=mv.bind(null,n,a,e),a.then(n,n))}function mv(n,a,e){var i=n.pingCache;i!==null&&i.delete(a),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,bn===n&&(rn&e)===e&&(Dn===4||Dn===3&&(rn&62914560)===rn&&300>ha()-_u?(mn&2)===0&&Hi(n,0):$r|=e,Ei===rn&&(Ei=0)),Oa(n)}function rm(n,a){a===0&&(a=ns()),n=Ue(n,a),n!==null&&(Li(n,a),Oa(n))}function yv(n){var a=n.memoizedState,e=0;a!==null&&(e=a.retryLane),rm(n,e)}function cv(n,a){var e=0;switch(n.tag){case 31:case 13:var i=n.stateNode,t=n.memoizedState;t!==null&&(e=t.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(a),rm(n,e)}function vv(n,a){return fl(n,a)}var Lu=null,Mi=null,th=!1,Ku=!1,uh=!1,Ae=0;function Oa(n){n!==Mi&&n.next===null&&(Mi===null?Lu=Mi=n:Mi=Mi.next=n),Ku=!0,th||(th=!0,gv())}function bt(n,a){if(!uh&&Ku){uh=!0;do for(var e=!1,i=Lu;i!==null;){if(n!==0){var t=i.pendingLanes;if(t===0)var u=0;else{var r=i.suspendedLanes,d=i.pingedLanes;u=(1<<31-da(42|n)+1)-1,u&=t&~(r&~d),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,om(i,u))}else u=rn,u=Vt(i,i===bn?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Ji(i,u)||(e=!0,om(i,u));i=i.next}while(e);uh=!1}}function fv(){hm()}function hm(){Ku=th=!1;var n=0;Ae!==0&&Ev()&&(n=Ae);for(var a=ha(),e=null,i=Lu;i!==null;){var t=i.next,u=sm(i,a);u===0?(i.next=null,e===null?Lu=t:e.next=t,t===null&&(Mi=e)):(e=i,(n!==0||(u&3)!==0)&&(Ku=!0)),i=t}Jn!==0&&Jn!==5||bt(n),Ae!==0&&(Ae=0)}function sm(n,a){for(var e=n.suspendedLanes,i=n.pingedLanes,t=n.expirationTimes,u=n.pendingLanes&-62914561;0<u;){var r=31-da(u),d=1<<r,y=t[r];y===-1?((d&e)===0||(d&i)!==0)&&(t[r]=Yy(d,a)):y<=a&&(n.expiredLanes|=d),u&=~d}if(a=bn,e=rn,e=Vt(n,n===a?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i=n.callbackNode,e===0||n===a&&(cn===2||cn===9)||n.cancelPendingCommit!==null)return i!==null&&i!==null&&gl(i),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||Ji(n,e)){if(a=e&-e,a===n.callbackPriority)return a;switch(i!==null&&gl(i),Sl(e)){case 2:case 8:e=Ph;break;case 32:e=Kt;break;case 268435456:e=Ih;break;default:e=Kt}return i=dm.bind(null,n),e=fl(e,i),n.callbackPriority=a,n.callbackNode=e,a}return i!==null&&i!==null&&gl(i),n.callbackPriority=2,n.callbackNode=null,2}function dm(n,a){if(Jn!==0&&Jn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Ju()&&n.callbackNode!==e)return null;var i=rn;return i=Vt(n,n===bn?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i===0?null:(Xo(n,i,a),sm(n,ha()),n.callbackNode!=null&&n.callbackNode===e?dm.bind(null,n):null)}function om(n,a){if(Ju())return null;Xo(n,a,!0)}function gv(){Hv(function(){(mn&6)!==0?fl(Fh,fv):hm()})}function lh(){if(Ae===0){var n=fi;n===0&&(n=Yt,Yt<<=1,(Yt&261888)===0&&(Yt=256)),Ae=n}return Ae}function mm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:$t(""+n)}function ym(n,a){var e=a.ownerDocument.createElement("input");return e.name=a.name,e.value=a.value,n.id&&e.setAttribute("form",n.id),a.parentNode.insertBefore(e,a),n=new FormData(n),e.parentNode.removeChild(e),n}function pv(n,a,e,i,t){if(a==="submit"&&e&&e.stateNode===t){var u=mm((t[In]||null).action),r=i.submitter;r&&(a=(a=r[In]||null)?mm(a.formAction):r.getAttribute("formAction"),a!==null&&(u=a,r=null));var d=new nu("action","action",null,i,t);n.push({event:d,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ae!==0){var y=r?ym(t,r):new FormData(t);Cr(e,{pending:!0,data:y,method:t.method,action:u},null,y)}}else typeof u=="function"&&(d.preventDefault(),y=r?ym(t,r):new FormData(t),Cr(e,{pending:!0,data:y,method:t.method,action:u},u,y))},currentTarget:t}]})}}for(var rh=0;rh<Yl.length;rh++){var hh=Yl[rh],kv=hh.toLowerCase(),Sv=hh[0].toUpperCase()+hh.slice(1);Ha(kv,"on"+Sv)}Ha(Ys,"onAnimationEnd"),Ha(qs,"onAnimationIteration"),Ha(Xs,"onAnimationStart"),Ha("dblclick","onDoubleClick"),Ha("focusin","onFocus"),Ha("focusout","onBlur"),Ha(Nc,"onTransitionRun"),Ha(Bc,"onTransitionStart"),Ha(xc,"onTransitionCancel"),Ha(Vs,"onTransitionEnd"),ei("onMouseEnter",["mouseout","mouseover"]),ei("onMouseLeave",["mouseout","mouseover"]),ei("onPointerEnter",["pointerout","pointerover"]),ei("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wt));function cm(n,a){a=(a&4)!==0;for(var e=0;e<n.length;e++){var i=n[e],t=i.event;i=i.listeners;n:{var u=void 0;if(a)for(var r=i.length-1;0<=r;r--){var d=i[r],y=d.instance,w=d.currentTarget;if(d=d.listener,y!==u&&t.isPropagationStopped())break n;u=d,t.currentTarget=w;try{u(t)}catch(E){iu(E)}t.currentTarget=null,u=y}else for(r=0;r<i.length;r++){if(d=i[r],y=d.instance,w=d.currentTarget,d=d.listener,y!==u&&t.isPropagationStopped())break n;u=d,t.currentTarget=w;try{u(t)}catch(E){iu(E)}t.currentTarget=null,u=y}}}}function ln(n,a){var e=a[bl];e===void 0&&(e=a[bl]=new Set);var i=n+"__bubble";e.has(i)||(vm(a,n,2,!1),e.add(i))}function sh(n,a,e){var i=0;a&&(i|=4),vm(e,n,i,a)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function dh(n){if(!n[Yu]){n[Yu]=!0,rs.forEach(function(e){e!=="selectionchange"&&(bv.has(e)||sh(e,!1,n),sh(e,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Yu]||(a[Yu]=!0,sh("selectionchange",!1,a))}}function vm(n,a,e,i){switch(qm(a)){case 2:var t=Wv;break;case 8:t=$v;break;default:t=Gh}e=t.bind(null,a,e,n),t=void 0,!Dl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(t=!0),i?t!==void 0?n.addEventListener(a,e,{capture:!0,passive:t}):n.addEventListener(a,e,!0):t!==void 0?n.addEventListener(a,e,{passive:t}):n.addEventListener(a,e,!1)}function oh(n,a,e,i,t){var u=i;if((a&1)===0&&(a&2)===0&&i!==null)n:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var d=i.stateNode.containerInfo;if(d===t)break;if(r===4)for(r=i.return;r!==null;){var y=r.tag;if((y===3||y===4)&&r.stateNode.containerInfo===t)return;r=r.return}for(;d!==null;){if(r=Ie(d),r===null)return;if(y=r.tag,y===5||y===6||y===26||y===27){i=u=r;continue n}d=d.parentNode}}i=i.return}ks(function(){var w=u,E=Rl(e),T=[];n:{var j=Qs.get(n);if(j!==void 0){var G=nu,U=n;switch(n){case"keypress":if(Pt(e)===0)break n;case"keydown":case"keyup":G=cc;break;case"focusin":U="focus",G=_l;break;case"focusout":U="blur",G=_l;break;case"beforeblur":case"afterblur":G=_l;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=ec;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=gc;break;case Ys:case qs:case Xs:G=uc;break;case Vs:G=kc;break;case"scroll":case"scrollend":G=nc;break;case"wheel":G=bc;break;case"copy":case"cut":case"paste":G=rc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=As;break;case"toggle":case"beforetoggle":G=jc}var Z=(a&4)!==0,kn=!Z&&(n==="scroll"||n==="scrollend"),k=Z?j!==null?j+"Capture":null:j;Z=[];for(var f=w,b;f!==null;){var M=f;if(b=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||b===null||k===null||(M=qi(f,k),M!=null&&Z.push(jt(f,M,b))),kn)break;f=f.return}0<Z.length&&(j=new G(j,U,null,e,E),T.push({event:j,listeners:Z}))}}if((a&7)===0){n:{if(j=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",j&&e!==El&&(U=e.relatedTarget||e.fromElement)&&(Ie(U)||U[Pe]))break n;if((G||j)&&(j=E.window===E?E:(j=E.ownerDocument)?j.defaultView||j.parentWindow:window,G?(U=e.relatedTarget||e.toElement,G=w,U=U?Ie(U):null,U!==null&&(kn=p(U),Z=U.tag,U!==kn||Z!==5&&Z!==27&&Z!==6)&&(U=null)):(G=null,U=w),G!==U)){if(Z=ws,M="onMouseLeave",k="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(Z=As,M="onPointerLeave",k="onPointerEnter",f="pointer"),kn=G==null?j:Yi(G),b=U==null?j:Yi(U),j=new Z(M,f+"leave",G,e,E),j.target=kn,j.relatedTarget=b,M=null,Ie(E)===w&&(Z=new Z(k,f+"enter",U,e,E),Z.target=b,Z.relatedTarget=kn,M=Z),kn=M,G&&U)a:{for(Z=wv,k=G,f=U,b=0,M=k;M;M=Z(M))b++;M=0;for(var V=f;V;V=Z(V))M++;for(;0<b-M;)k=Z(k),b--;for(;0<M-b;)f=Z(f),M--;for(;b--;){if(k===f||f!==null&&k===f.alternate){Z=k;break a}k=Z(k),f=Z(f)}Z=null}else Z=null;G!==null&&fm(T,j,G,Z,!1),U!==null&&kn!==null&&fm(T,kn,U,Z,!0)}}n:{if(j=w?Yi(w):window,G=j.nodeName&&j.nodeName.toLowerCase(),G==="select"||G==="input"&&j.type==="file")var dn=Ts;else if(Ds(j))if(zs)dn=zc;else{dn=Mc;var L=Dc}else G=j.nodeName,!G||G.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?w&&Cl(w.elementType)&&(dn=Ts):dn=Tc;if(dn&&(dn=dn(n,w))){Ms(T,dn,e,E);break n}L&&L(n,j,w),n==="focusout"&&w&&j.type==="number"&&w.memoizedProps.value!=null&&Gl(j,"number",j.value)}switch(L=w?Yi(w):window,n){case"focusin":(Ds(L)||L.contentEditable==="true")&&(hi=L,Jl=w,Pi=null);break;case"focusout":Pi=Jl=hi=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Ls(T,e,E);break;case"selectionchange":if(Oc)break;case"keydown":case"keyup":Ls(T,e,E)}var en;if(Nl)n:{switch(n){case"compositionstart":var hn="onCompositionStart";break n;case"compositionend":hn="onCompositionEnd";break n;case"compositionupdate":hn="onCompositionUpdate";break n}hn=void 0}else ri?Rs(n,e)&&(hn="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(hn="onCompositionStart");hn&&(Gs&&e.locale!=="ko"&&(ri||hn!=="onCompositionStart"?hn==="onCompositionEnd"&&ri&&(en=Ss()):(he=E,Ml="value"in he?he.value:he.textContent,ri=!0)),L=qu(w,hn),0<L.length&&(hn=new js(hn,n,null,e,E),T.push({event:hn,listeners:L}),en?hn.data=en:(en=Hs(e),en!==null&&(hn.data=en)))),(en=Gc?Cc(n,e):Ec(n,e))&&(hn=qu(w,"onBeforeInput"),0<hn.length&&(L=new js("onBeforeInput","beforeinput",null,e,E),T.push({event:L,listeners:hn}),L.data=en)),pv(T,n,w,e,E)}cm(T,a)})}function jt(n,a,e){return{instance:n,listener:a,currentTarget:e}}function qu(n,a){for(var e=a+"Capture",i=[];n!==null;){var t=n,u=t.stateNode;if(t=t.tag,t!==5&&t!==26&&t!==27||u===null||(t=qi(n,e),t!=null&&i.unshift(jt(n,t,u)),t=qi(n,a),t!=null&&i.push(jt(n,t,u))),n.tag===3)return i;n=n.return}return[]}function wv(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function fm(n,a,e,i,t){for(var u=a._reactName,r=[];e!==null&&e!==i;){var d=e,y=d.alternate,w=d.stateNode;if(d=d.tag,y!==null&&y===i)break;d!==5&&d!==26&&d!==27||w===null||(y=w,t?(w=qi(e,u),w!=null&&r.unshift(jt(e,w,y))):t||(w=qi(e,u),w!=null&&r.push(jt(e,w,y)))),e=e.return}r.length!==0&&n.push({event:a,listeners:r})}var jv=/\r\n?/g,Av=/\u0000|\uFFFD/g;function gm(n){return(typeof n=="string"?n:""+n).replace(jv,`
`).replace(Av,"")}function pm(n,a){return a=gm(a),gm(n)===a}function pn(n,a,e,i,t,u){switch(e){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||ti(n,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&ti(n,""+i);break;case"className":Zt(n,"class",i);break;case"tabIndex":Zt(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zt(n,e,i);break;case"style":gs(n,i,u);break;case"data":if(a!=="object"){Zt(n,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||e!=="href")){n.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=$t(""+i),n.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(a!=="input"&&pn(n,a,"name",t.name,t,null),pn(n,a,"formEncType",t.formEncType,t,null),pn(n,a,"formMethod",t.formMethod,t,null),pn(n,a,"formTarget",t.formTarget,t,null)):(pn(n,a,"encType",t.encType,t,null),pn(n,a,"method",t.method,t,null),pn(n,a,"target",t.target,t,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(e);break}i=$t(""+i),n.setAttribute(e,i);break;case"onClick":i!=null&&(n.onclick=La);break;case"onScroll":i!=null&&ln("scroll",n);break;case"onScrollEnd":i!=null&&ln("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(e=i.__html,e!=null){if(t.children!=null)throw Error(s(60));n.innerHTML=e}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}e=$t(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""+i):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":i===!0?n.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(e,i):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(e,i):n.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(e):n.setAttribute(e,i);break;case"popover":ln("beforetoggle",n),ln("toggle",n),Qt(n,"popover",i);break;case"xlinkActuate":Ja(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ja(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ja(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ja(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ja(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ja(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ja(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ja(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ja(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Qt(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Py.get(e)||e,Qt(n,e,i))}}function mh(n,a,e,i,t,u){switch(e){case"style":gs(n,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(e=i.__html,e!=null){if(t.children!=null)throw Error(s(60));n.innerHTML=e}}break;case"children":typeof i=="string"?ti(n,i):(typeof i=="number"||typeof i=="bigint")&&ti(n,""+i);break;case"onScroll":i!=null&&ln("scroll",n);break;case"onScrollEnd":i!=null&&ln("scrollend",n);break;case"onClick":i!=null&&(n.onclick=La);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hs.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(t=e.endsWith("Capture"),a=e.slice(2,t?e.length-7:void 0),u=n[In]||null,u=u!=null?u[e]:null,typeof u=="function"&&n.removeEventListener(a,u,t),typeof i=="function")){typeof u!="function"&&u!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(a,i,t);break n}e in n?n[e]=i:i===!0?n.setAttribute(e,""):Qt(n,e,i)}}}function Qn(n,a,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ln("error",n),ln("load",n);var i=!1,t=!1,u;for(u in e)if(e.hasOwnProperty(u)){var r=e[u];if(r!=null)switch(u){case"src":i=!0;break;case"srcSet":t=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:pn(n,a,u,r,e,null)}}t&&pn(n,a,"srcSet",e.srcSet,e,null),i&&pn(n,a,"src",e.src,e,null);return;case"input":ln("invalid",n);var d=u=r=t=null,y=null,w=null;for(i in e)if(e.hasOwnProperty(i)){var E=e[i];if(E!=null)switch(i){case"name":t=E;break;case"type":r=E;break;case"checked":y=E;break;case"defaultChecked":w=E;break;case"value":u=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,a));break;default:pn(n,a,i,E,e,null)}}ys(n,u,d,y,w,r,t,!1);return;case"select":ln("invalid",n),i=r=u=null;for(t in e)if(e.hasOwnProperty(t)&&(d=e[t],d!=null))switch(t){case"value":u=d;break;case"defaultValue":r=d;break;case"multiple":i=d;default:pn(n,a,t,d,e,null)}a=u,e=r,n.multiple=!!i,a!=null?ii(n,!!i,a,!1):e!=null&&ii(n,!!i,e,!0);return;case"textarea":ln("invalid",n),u=t=i=null;for(r in e)if(e.hasOwnProperty(r)&&(d=e[r],d!=null))switch(r){case"value":i=d;break;case"defaultValue":t=d;break;case"children":u=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:pn(n,a,r,d,e,null)}vs(n,i,t,u);return;case"option":for(y in e)if(e.hasOwnProperty(y)&&(i=e[y],i!=null))switch(y){case"selected":n.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pn(n,a,y,i,e,null)}return;case"dialog":ln("beforetoggle",n),ln("toggle",n),ln("cancel",n),ln("close",n);break;case"iframe":case"object":ln("load",n);break;case"video":case"audio":for(i=0;i<wt.length;i++)ln(wt[i],n);break;case"image":ln("error",n),ln("load",n);break;case"details":ln("toggle",n);break;case"embed":case"source":case"link":ln("error",n),ln("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in e)if(e.hasOwnProperty(w)&&(i=e[w],i!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:pn(n,a,w,i,e,null)}return;default:if(Cl(a)){for(E in e)e.hasOwnProperty(E)&&(i=e[E],i!==void 0&&mh(n,a,E,i,e,void 0));return}}for(d in e)e.hasOwnProperty(d)&&(i=e[d],i!=null&&pn(n,a,d,i,e,null))}function Gv(n,a,e,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var t=null,u=null,r=null,d=null,y=null,w=null,E=null;for(G in e){var T=e[G];if(e.hasOwnProperty(G)&&T!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":y=T;default:i.hasOwnProperty(G)||pn(n,a,G,null,i,T)}}for(var j in i){var G=i[j];if(T=e[j],i.hasOwnProperty(j)&&(G!=null||T!=null))switch(j){case"type":u=G;break;case"name":t=G;break;case"checked":w=G;break;case"defaultChecked":E=G;break;case"value":r=G;break;case"defaultValue":d=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,a));break;default:G!==T&&pn(n,a,j,G,i,T)}}Al(n,r,d,y,w,E,u,t);return;case"select":G=r=d=j=null;for(u in e)if(y=e[u],e.hasOwnProperty(u)&&y!=null)switch(u){case"value":break;case"multiple":G=y;default:i.hasOwnProperty(u)||pn(n,a,u,null,i,y)}for(t in i)if(u=i[t],y=e[t],i.hasOwnProperty(t)&&(u!=null||y!=null))switch(t){case"value":j=u;break;case"defaultValue":d=u;break;case"multiple":r=u;default:u!==y&&pn(n,a,t,u,i,y)}a=d,e=r,i=G,j!=null?ii(n,!!e,j,!1):!!i!=!!e&&(a!=null?ii(n,!!e,a,!0):ii(n,!!e,e?[]:"",!1));return;case"textarea":G=j=null;for(d in e)if(t=e[d],e.hasOwnProperty(d)&&t!=null&&!i.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:pn(n,a,d,null,i,t)}for(r in i)if(t=i[r],u=e[r],i.hasOwnProperty(r)&&(t!=null||u!=null))switch(r){case"value":j=t;break;case"defaultValue":G=t;break;case"children":break;case"dangerouslySetInnerHTML":if(t!=null)throw Error(s(91));break;default:t!==u&&pn(n,a,r,t,i,u)}cs(n,j,G);return;case"option":for(var U in e)if(j=e[U],e.hasOwnProperty(U)&&j!=null&&!i.hasOwnProperty(U))switch(U){case"selected":n.selected=!1;break;default:pn(n,a,U,null,i,j)}for(y in i)if(j=i[y],G=e[y],i.hasOwnProperty(y)&&j!==G&&(j!=null||G!=null))switch(y){case"selected":n.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:pn(n,a,y,j,i,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in e)j=e[Z],e.hasOwnProperty(Z)&&j!=null&&!i.hasOwnProperty(Z)&&pn(n,a,Z,null,i,j);for(w in i)if(j=i[w],G=e[w],i.hasOwnProperty(w)&&j!==G&&(j!=null||G!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,a));break;default:pn(n,a,w,j,i,G)}return;default:if(Cl(a)){for(var kn in e)j=e[kn],e.hasOwnProperty(kn)&&j!==void 0&&!i.hasOwnProperty(kn)&&mh(n,a,kn,void 0,i,j);for(E in i)j=i[E],G=e[E],!i.hasOwnProperty(E)||j===G||j===void 0&&G===void 0||mh(n,a,E,j,i,G);return}}for(var k in e)j=e[k],e.hasOwnProperty(k)&&j!=null&&!i.hasOwnProperty(k)&&pn(n,a,k,null,i,j);for(T in i)j=i[T],G=e[T],!i.hasOwnProperty(T)||j===G||j==null&&G==null||pn(n,a,T,j,i,G)}function km(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cv(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,e=performance.getEntriesByType("resource"),i=0;i<e.length;i++){var t=e[i],u=t.transferSize,r=t.initiatorType,d=t.duration;if(u&&d&&km(r)){for(r=0,d=t.responseEnd,i+=1;i<e.length;i++){var y=e[i],w=y.startTime;if(w>d)break;var E=y.transferSize,T=y.initiatorType;E&&km(T)&&(y=y.responseEnd,r+=E*(y<d?1:(d-w)/(y-w)))}if(--i,a+=8*(u+r)/(t.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var yh=null,ch=null;function Xu(n){return n.nodeType===9?n:n.ownerDocument}function Sm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bm(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function vh(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var fh=null;function Ev(){var n=window.event;return n&&n.type==="popstate"?n===fh?!1:(fh=n,!0):(fh=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(n){return jm.resolve(null).then(n).catch(Dv)}:wm;function Dv(n){setTimeout(function(){throw n})}function Ge(n){return n==="head"}function Am(n,a){var e=a,i=0;do{var t=e.nextSibling;if(n.removeChild(e),t&&t.nodeType===8)if(e=t.data,e==="/$"||e==="/&"){if(i===0){n.removeChild(t),Oi(a);return}i--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")i++;else if(e==="html")At(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,At(e);for(var u=e.firstChild;u;){var r=u.nextSibling,d=u.nodeName;u[Ki]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=r}}else e==="body"&&At(n.ownerDocument.body);e=t}while(e);Oi(a)}function Gm(n,a){var e=n;n=0;do{var i=e.nextSibling;if(e.nodeType===1?a?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(a?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=i}while(e)}function gh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var e=a;switch(a=a.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":gh(e),wl(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function Mv(n,a,e,i){for(;n.nodeType===1;){var t=e;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[Ki])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(u=n.getAttribute("rel"),u==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(u!==t.rel||n.getAttribute("href")!==(t.href==null||t.href===""?null:t.href)||n.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin)||n.getAttribute("title")!==(t.title==null?null:t.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(u=n.getAttribute("src"),(u!==(t.src==null?null:t.src)||n.getAttribute("type")!==(t.type==null?null:t.type)||n.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin))&&u&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var u=t.name==null?null:""+t.name;if(t.type==="hidden"&&n.getAttribute("name")===u)return n}else return n;if(n=Ca(n.nextSibling),n===null)break}return null}function Tv(n,a,e){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Ca(n.nextSibling),n===null))return null;return n}function Cm(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Ca(n.nextSibling),n===null))return null;return n}function ph(n){return n.data==="$?"||n.data==="$~"}function kh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function zv(n,a){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||e.readyState!=="loading")a();else{var i=function(){a(),e.removeEventListener("DOMContentLoaded",i)};e.addEventListener("DOMContentLoaded",i),n._reactRetry=i}}function Ca(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var Sh=null;function Em(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(a===0)return Ca(n.nextSibling);a--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||a++}n=n.nextSibling}return null}function Rm(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(a===0)return n;a--}else e!=="/$"&&e!=="/&"||a++}n=n.previousSibling}return null}function Hm(n,a,e){switch(a=Xu(e),n){case"html":if(n=a.documentElement,!n)throw Error(s(452));return n;case"head":if(n=a.head,!n)throw Error(s(453));return n;case"body":if(n=a.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function At(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);wl(n)}var Ea=new Map,Dm=new Set;function Vu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ie=N.d;N.d={f:_v,r:Ov,D:Nv,C:Bv,L:xv,m:Uv,X:Lv,S:Jv,M:Kv};function _v(){var n=ie.f(),a=Bu();return n||a}function Ov(n){var a=ni(n);a!==null&&a.tag===5&&a.type==="form"?Vd(a):ie.r(n)}var Ti=typeof document>"u"?null:document;function Mm(n,a,e){var i=Ti;if(i&&typeof a=="string"&&a){var t=ka(a);t='link[rel="'+n+'"][href="'+t+'"]',typeof e=="string"&&(t+='[crossorigin="'+e+'"]'),Dm.has(t)||(Dm.add(t),n={rel:n,crossOrigin:e,href:a},i.querySelector(t)===null&&(a=i.createElement("link"),Qn(a,"link",n),Ln(a),i.head.appendChild(a)))}}function Nv(n){ie.D(n),Mm("dns-prefetch",n,null)}function Bv(n,a){ie.C(n,a),Mm("preconnect",n,a)}function xv(n,a,e){ie.L(n,a,e);var i=Ti;if(i&&n&&a){var t='link[rel="preload"][as="'+ka(a)+'"]';a==="image"&&e&&e.imageSrcSet?(t+='[imagesrcset="'+ka(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(t+='[imagesizes="'+ka(e.imageSizes)+'"]')):t+='[href="'+ka(n)+'"]';var u=t;switch(a){case"style":u=zi(n);break;case"script":u=_i(n)}Ea.has(u)||(n=z({rel:"preload",href:a==="image"&&e&&e.imageSrcSet?void 0:n,as:a},e),Ea.set(u,n),i.querySelector(t)!==null||a==="style"&&i.querySelector(Gt(u))||a==="script"&&i.querySelector(Ct(u))||(a=i.createElement("link"),Qn(a,"link",n),Ln(a),i.head.appendChild(a)))}}function Uv(n,a){ie.m(n,a);var e=Ti;if(e&&n){var i=a&&typeof a.as=="string"?a.as:"script",t='link[rel="modulepreload"][as="'+ka(i)+'"][href="'+ka(n)+'"]',u=t;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=_i(n)}if(!Ea.has(u)&&(n=z({rel:"modulepreload",href:n},a),Ea.set(u,n),e.querySelector(t)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Ct(u)))return}i=e.createElement("link"),Qn(i,"link",n),Ln(i),e.head.appendChild(i)}}}function Jv(n,a,e){ie.S(n,a,e);var i=Ti;if(i&&n){var t=ai(i).hoistableStyles,u=zi(n);a=a||"default";var r=t.get(u);if(!r){var d={loading:0,preload:null};if(r=i.querySelector(Gt(u)))d.loading=5;else{n=z({rel:"stylesheet",href:n,"data-precedence":a},e),(e=Ea.get(u))&&bh(n,e);var y=r=i.createElement("link");Ln(y),Qn(y,"link",n),y._p=new Promise(function(w,E){y.onload=w,y.onerror=E}),y.addEventListener("load",function(){d.loading|=1}),y.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Qu(r,a,i)}r={type:"stylesheet",instance:r,count:1,state:d},t.set(u,r)}}}function Lv(n,a){ie.X(n,a);var e=Ti;if(e&&n){var i=ai(e).hoistableScripts,t=_i(n),u=i.get(t);u||(u=e.querySelector(Ct(t)),u||(n=z({src:n,async:!0},a),(a=Ea.get(t))&&wh(n,a),u=e.createElement("script"),Ln(u),Qn(u,"link",n),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(t,u))}}function Kv(n,a){ie.M(n,a);var e=Ti;if(e&&n){var i=ai(e).hoistableScripts,t=_i(n),u=i.get(t);u||(u=e.querySelector(Ct(t)),u||(n=z({src:n,async:!0,type:"module"},a),(a=Ea.get(t))&&wh(n,a),u=e.createElement("script"),Ln(u),Qn(u,"link",n),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(t,u))}}function Tm(n,a,e,i){var t=(t=tn.current)?Vu(t):null;if(!t)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(a=zi(e.href),e=ai(t).hoistableStyles,i=e.get(a),i||(i={type:"style",instance:null,count:0,state:null},e.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=zi(e.href);var u=ai(t).hoistableStyles,r=u.get(n);if(r||(t=t.ownerDocument||t,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(n,r),(u=t.querySelector(Gt(n)))&&!u._p&&(r.instance=u,r.state.loading=5),Ea.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Ea.set(n,e),u||Yv(t,n,e,r.state))),a&&i===null)throw Error(s(528,""));return r}if(a&&i!==null)throw Error(s(529,""));return null;case"script":return a=e.async,e=e.src,typeof e=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=_i(e),e=ai(t).hoistableScripts,i=e.get(a),i||(i={type:"script",instance:null,count:0,state:null},e.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function zi(n){return'href="'+ka(n)+'"'}function Gt(n){return'link[rel="stylesheet"]['+n+"]"}function zm(n){return z({},n,{"data-precedence":n.precedence,precedence:null})}function Yv(n,a,e,i){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=n.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Qn(a,"link",e),Ln(a),n.head.appendChild(a))}function _i(n){return'[src="'+ka(n)+'"]'}function Ct(n){return"script[async]"+n}function _m(n,a,e){if(a.count++,a.instance===null)switch(a.type){case"style":var i=n.querySelector('style[data-href~="'+ka(e.href)+'"]');if(i)return a.instance=i,Ln(i),i;var t=z({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),Ln(i),Qn(i,"style",t),Qu(i,e.precedence,n),a.instance=i;case"stylesheet":t=zi(e.href);var u=n.querySelector(Gt(t));if(u)return a.state.loading|=4,a.instance=u,Ln(u),u;i=zm(e),(t=Ea.get(t))&&bh(i,t),u=(n.ownerDocument||n).createElement("link"),Ln(u);var r=u;return r._p=new Promise(function(d,y){r.onload=d,r.onerror=y}),Qn(u,"link",i),a.state.loading|=4,Qu(u,e.precedence,n),a.instance=u;case"script":return u=_i(e.src),(t=n.querySelector(Ct(u)))?(a.instance=t,Ln(t),t):(i=e,(t=Ea.get(u))&&(i=z({},e),wh(i,t)),n=n.ownerDocument||n,t=n.createElement("script"),Ln(t),Qn(t,"link",i),n.head.appendChild(t),a.instance=t);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,Qu(i,e.precedence,n));return a.instance}function Qu(n,a,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),t=i.length?i[i.length-1]:null,u=t,r=0;r<i.length;r++){var d=i[r];if(d.dataset.precedence===a)u=d;else if(u!==t)break}u?u.parentNode.insertBefore(n,u.nextSibling):(a=e.nodeType===9?e.head:e,a.insertBefore(n,a.firstChild))}function bh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function wh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Zu=null;function Om(n,a,e){if(Zu===null){var i=new Map,t=Zu=new Map;t.set(e,i)}else t=Zu,i=t.get(e),i||(i=new Map,t.set(e,i));if(i.has(n))return i;for(i.set(n,null),e=e.getElementsByTagName(n),t=0;t<e.length;t++){var u=e[t];if(!(u[Ki]||u[Yn]||n==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var r=u.getAttribute(a)||"";r=n+r;var d=i.get(r);d?d.push(u):i.set(r,[u])}}return i}function Nm(n,a,e){n=n.ownerDocument||n,n.head.insertBefore(e,a==="title"?n.querySelector("head > title"):null)}function qv(n,a,e){if(e===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Bm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Xv(n,a,e,i){if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var t=zi(i.href),u=a.querySelector(Gt(t));if(u){a=u._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Wu.bind(n),a.then(n,n)),e.state.loading|=4,e.instance=u,Ln(u);return}u=a.ownerDocument||a,i=zm(i),(t=Ea.get(t))&&bh(i,t),u=u.createElement("link"),Ln(u);var r=u;r._p=new Promise(function(d,y){r.onload=d,r.onerror=y}),Qn(u,"link",i),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,a),(a=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Wu.bind(n),a.addEventListener("load",e),a.addEventListener("error",e))}}var jh=0;function Vv(n,a){return n.stylesheets&&n.count===0&&Fu(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var i=setTimeout(function(){if(n.stylesheets&&Fu(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4+a);0<n.imgBytes&&jh===0&&(jh=62500*Cv());var t=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Fu(n,n.stylesheets),n.unsuspend)){var u=n.unsuspend;n.unsuspend=null,u()}},(n.imgBytes>jh?50:800)+a);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(i),clearTimeout(t)}}:null}function Wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fu(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var $u=null;function Fu(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,$u=new Map,a.forEach(Qv,n),$u=null,Wu.call(n))}function Qv(n,a){if(!(a.state.loading&4)){var e=$u.get(n);if(e)var i=e.get(null);else{e=new Map,$u.set(n,e);for(var t=n.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<t.length;u++){var r=t[u];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),i=r)}i&&e.set(null,i)}t=a.instance,r=t.getAttribute("data-precedence"),u=e.get(r)||i,u===i&&e.set(null,t),e.set(r,t),this.count++,i=Wu.bind(this),t.addEventListener("load",i),t.addEventListener("error",i),u?u.parentNode.insertBefore(t,u.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(t,n.firstChild)),a.state.loading|=4}}var Et={$$typeof:P,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Zv(n,a,e,i,t,u,r,d,y){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.hiddenUpdates=pl(null),this.identifierPrefix=i,this.onUncaughtError=t,this.onCaughtError=u,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function xm(n,a,e,i,t,u,r,d,y,w,E,T){return n=new Zv(n,a,e,r,y,w,E,T,d),a=1,u===!0&&(a|=24),u=ma(3,null,null,a),n.current=u,u.stateNode=n,a=er(),a.refCount++,n.pooledCache=a,a.refCount++,u.memoizedState={element:i,isDehydrated:e,cache:a},lr(u),n}function Um(n){return n?(n=oi,n):oi}function Jm(n,a,e,i,t,u){t=Um(t),i.context===null?i.context=t:i.pendingContext=t,i=ce(a),i.payload={element:e},u=u===void 0?null:u,u!==null&&(i.callback=u),e=ve(n,i,a),e!==null&&(ua(e,n,a),ut(e,n,a))}function Lm(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<a?e:a}}function Ah(n,a){Lm(n,a),(n=n.alternate)&&Lm(n,a)}function Km(n){if(n.tag===13||n.tag===31){var a=Ue(n,67108864);a!==null&&ua(a,n,67108864),Ah(n,67108864)}}function Ym(n){if(n.tag===13||n.tag===31){var a=ga();a=kl(a);var e=Ue(n,a);e!==null&&ua(e,n,a),Ah(n,a)}}var Pu=!0;function Wv(n,a,e,i){var t=D.T;D.T=null;var u=N.p;try{N.p=2,Gh(n,a,e,i)}finally{N.p=u,D.T=t}}function $v(n,a,e,i){var t=D.T;D.T=null;var u=N.p;try{N.p=8,Gh(n,a,e,i)}finally{N.p=u,D.T=t}}function Gh(n,a,e,i){if(Pu){var t=Ch(i);if(t===null)oh(n,a,i,Iu,e),Xm(n,i);else if(Pv(t,n,a,e,i))i.stopPropagation();else if(Xm(n,i),a&4&&-1<Fv.indexOf(n)){for(;t!==null;){var u=ni(t);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var r=_e(u.pendingLanes);if(r!==0){var d=u;for(d.pendingLanes|=2,d.entangledLanes|=2;r;){var y=1<<31-da(r);d.entanglements[1]|=y,r&=~y}Oa(u),(mn&6)===0&&(Ou=ha()+500,bt(0))}}break;case 31:case 13:d=Ue(u,2),d!==null&&ua(d,u,2),Bu(),Ah(u,2)}if(u=Ch(i),u===null&&oh(n,a,i,Iu,e),u===t)break;t=u}t!==null&&i.stopPropagation()}else oh(n,a,i,null,e)}}function Ch(n){return n=Rl(n),Eh(n)}var Iu=null;function Eh(n){if(Iu=null,n=Ie(n),n!==null){var a=p(n);if(a===null)n=null;else{var e=a.tag;if(e===13){if(n=A(a),n!==null)return n;n=null}else if(e===31){if(n=H(a),n!==null)return n;n=null}else if(e===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Iu=n,null}function qm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ny()){case Fh:return 2;case Ph:return 8;case Kt:case By:return 32;case Ih:return 268435456;default:return 32}default:return 32}}var Rh=!1,Ce=null,Ee=null,Re=null,Rt=new Map,Ht=new Map,He=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xm(n,a){switch(n){case"focusin":case"focusout":Ce=null;break;case"dragenter":case"dragleave":Ee=null;break;case"mouseover":case"mouseout":Re=null;break;case"pointerover":case"pointerout":Rt.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(a.pointerId)}}function Dt(n,a,e,i,t,u){return n===null||n.nativeEvent!==u?(n={blockedOn:a,domEventName:e,eventSystemFlags:i,nativeEvent:u,targetContainers:[t]},a!==null&&(a=ni(a),a!==null&&Km(a)),n):(n.eventSystemFlags|=i,a=n.targetContainers,t!==null&&a.indexOf(t)===-1&&a.push(t),n)}function Pv(n,a,e,i,t){switch(a){case"focusin":return Ce=Dt(Ce,n,a,e,i,t),!0;case"dragenter":return Ee=Dt(Ee,n,a,e,i,t),!0;case"mouseover":return Re=Dt(Re,n,a,e,i,t),!0;case"pointerover":var u=t.pointerId;return Rt.set(u,Dt(Rt.get(u)||null,n,a,e,i,t)),!0;case"gotpointercapture":return u=t.pointerId,Ht.set(u,Dt(Ht.get(u)||null,n,a,e,i,t)),!0}return!1}function Vm(n){var a=Ie(n.target);if(a!==null){var e=p(a);if(e!==null){if(a=e.tag,a===13){if(a=A(e),a!==null){n.blockedOn=a,us(n.priority,function(){Ym(e)});return}}else if(a===31){if(a=H(e),a!==null){n.blockedOn=a,us(n.priority,function(){Ym(e)});return}}else if(a===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var e=Ch(n.nativeEvent);if(e===null){e=n.nativeEvent;var i=new e.constructor(e.type,e);El=i,e.target.dispatchEvent(i),El=null}else return a=ni(e),a!==null&&Km(a),n.blockedOn=e,!1;a.shift()}return!0}function Qm(n,a,e){nl(n)&&e.delete(a)}function Iv(){Rh=!1,Ce!==null&&nl(Ce)&&(Ce=null),Ee!==null&&nl(Ee)&&(Ee=null),Re!==null&&nl(Re)&&(Re=null),Rt.forEach(Qm),Ht.forEach(Qm)}function al(n,a){n.blockedOn===a&&(n.blockedOn=null,Rh||(Rh=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Iv)))}var el=null;function Zm(n){el!==n&&(el=n,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){el===n&&(el=null);for(var a=0;a<n.length;a+=3){var e=n[a],i=n[a+1],t=n[a+2];if(typeof i!="function"){if(Eh(i||e)===null)continue;break}var u=ni(e);u!==null&&(n.splice(a,3),a-=3,Cr(u,{pending:!0,data:t,method:e.method,action:i},i,t))}}))}function Oi(n){function a(y){return al(y,n)}Ce!==null&&al(Ce,n),Ee!==null&&al(Ee,n),Re!==null&&al(Re,n),Rt.forEach(a),Ht.forEach(a);for(var e=0;e<He.length;e++){var i=He[e];i.blockedOn===n&&(i.blockedOn=null)}for(;0<He.length&&(e=He[0],e.blockedOn===null);)Vm(e),e.blockedOn===null&&He.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var t=e[i],u=e[i+1],r=t[In]||null;if(typeof u=="function")r||Zm(e);else if(r){var d=null;if(u&&u.hasAttribute("formAction")){if(t=u,r=u[In]||null)d=r.formAction;else if(Eh(t)!==null)continue}else d=r.action;typeof d=="function"?e[i+1]=d:(e.splice(i,3),i-=3),Zm(e)}}}function Wm(){function n(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(r){return t=r})},focusReset:"manual",scroll:"manual"})}function a(){t!==null&&(t(),t=null),i||setTimeout(e,20)}function e(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,t=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(e,100),function(){i=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),t!==null&&(t(),t=null)}}}function Hh(n){this._internalRoot=n}il.prototype.render=Hh.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(s(409));var e=a.current,i=ga();Jm(e,i,n,a,null,null)},il.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Jm(n.current,2,null,n,null,null),Bu(),a[Pe]=null}};function il(n){this._internalRoot=n}il.prototype.unstable_scheduleHydration=function(n){if(n){var a=ts();n={blockedOn:null,target:n,priority:a};for(var e=0;e<He.length&&a!==0&&a<He[e].priority;e++);He.splice(e,0,n),e===0&&Vm(n)}};var $m=o.version;if($m!=="19.2.0")throw Error(s(527,$m,"19.2.0"));N.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=v(a),n=n!==null?R(n):null,n=n===null?null:n.stateNode,n};var n2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Ui=tl.inject(n2),sa=tl}catch{}}return Tt.createRoot=function(n,a){if(!c(n))throw Error(s(299));var e=!1,i="",t=eo,u=io,r=to;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(t=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=xm(n,1,!1,null,null,e,i,null,t,u,r,Wm),n[Pe]=a.current,dh(n),new Hh(a)},Tt.hydrateRoot=function(n,a,e){if(!c(n))throw Error(s(299));var i=!1,t="",u=eo,r=io,d=to,y=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.formState!==void 0&&(y=e.formState)),a=xm(n,1,!0,a,e??null,i,t,y,u,r,d,Wm),a.context=Um(null),e=a.current,i=ga(),i=kl(i),t=ce(i),t.callback=null,ve(e,t,i),e=i,a.current.lanes=e,Li(a,e),Oa(a),n[Pe]=a.current,dh(n),new il(a)},Tt.version="19.2.0",Tt}var ly;function d2(){if(ly)return Th.exports;ly=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(o){console.error(o)}}return h(),Th.exports=s2(),Th.exports}var o2=d2();const m2=yy(o2);var ry="popstate";function y2(h={}){function o(s,c){let{pathname:p,search:A,hash:H}=s.location;return Uh("",{pathname:p,search:A,hash:H},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function m(s,c){return typeof c=="string"?c:Nt(c)}return v2(o,m,null,h)}function Cn(h,o){if(h===!1||h===null||typeof h>"u")throw new Error(o)}function Na(h,o){if(!h){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function c2(){return Math.random().toString(36).substring(2,10)}function hy(h,o){return{usr:h.state,key:h.key,idx:o}}function Uh(h,o,m=null,s){return{pathname:typeof h=="string"?h:h.pathname,search:"",hash:"",...typeof o=="string"?Ni(o):o,state:m,key:o&&o.key||s||c2()}}function Nt({pathname:h="/",search:o="",hash:m=""}){return o&&o!=="?"&&(h+=o.charAt(0)==="?"?o:"?"+o),m&&m!=="#"&&(h+=m.charAt(0)==="#"?m:"#"+m),h}function Ni(h){let o={};if(h){let m=h.indexOf("#");m>=0&&(o.hash=h.substring(m),h=h.substring(0,m));let s=h.indexOf("?");s>=0&&(o.search=h.substring(s),h=h.substring(0,s)),h&&(o.pathname=h)}return o}function v2(h,o,m,s={}){let{window:c=document.defaultView,v5Compat:p=!1}=s,A=c.history,H="POP",S=null,v=R();v==null&&(v=0,A.replaceState({...A.state,idx:v},""));function R(){return(A.state||{idx:null}).idx}function z(){H="POP";let q=R(),K=q==null?null:q-v;v=q,S&&S({action:H,location:W.location,delta:K})}function x(q,K){H="PUSH";let Y=Uh(W.location,q,K);v=R()+1;let P=hy(Y,v),An=W.createHref(Y);try{A.pushState(P,"",An)}catch(En){if(En instanceof DOMException&&En.name==="DataCloneError")throw En;c.location.assign(An)}p&&S&&S({action:H,location:W.location,delta:1})}function X(q,K){H="REPLACE";let Y=Uh(W.location,q,K);v=R();let P=hy(Y,v),An=W.createHref(Y);A.replaceState(P,"",An),p&&S&&S({action:H,location:W.location,delta:0})}function Q(q){return f2(q)}let W={get action(){return H},get location(){return h(c,A)},listen(q){if(S)throw new Error("A history only accepts one active listener");return c.addEventListener(ry,z),S=q,()=>{c.removeEventListener(ry,z),S=null}},createHref(q){return o(c,q)},createURL:Q,encodeLocation(q){let K=Q(q);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:x,replace:X,go(q){return A.go(q)}};return W}function f2(h,o=!1){let m="http://localhost";typeof window<"u"&&(m=window.location.origin!=="null"?window.location.origin:window.location.href),Cn(m,"No window.location.(origin|href) available to create URL");let s=typeof h=="string"?h:Nt(h);return s=s.replace(/ $/,"%20"),!o&&s.startsWith("//")&&(s=m+s),new URL(s,m)}function vy(h,o,m="/"){return g2(h,o,m,!1)}function g2(h,o,m,s){let c=typeof o=="string"?Ni(o):o,p=ue(c.pathname||"/",m);if(p==null)return null;let A=fy(h);p2(A);let H=null;for(let S=0;H==null&&S<A.length;++S){let v=H2(p);H=E2(A[S],v,s)}return H}function fy(h,o=[],m=[],s="",c=!1){let p=(A,H,S=c,v)=>{let R={relativePath:v===void 0?A.path||"":v,caseSensitive:A.caseSensitive===!0,childrenIndex:H,route:A};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(s)&&S)return;Cn(R.relativePath.startsWith(s),`Absolute route path "${R.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(s.length)}let z=te([s,R.relativePath]),x=m.concat(R);A.children&&A.children.length>0&&(Cn(A.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),fy(A.children,o,x,z,S)),!(A.path==null&&!A.index)&&o.push({path:z,score:G2(z,A.index),routesMeta:x})};return h.forEach((A,H)=>{if(A.path===""||!A.path?.includes("?"))p(A,H);else for(let S of gy(A.path))p(A,H,!0,S)}),o}function gy(h){let o=h.split("/");if(o.length===0)return[];let[m,...s]=o,c=m.endsWith("?"),p=m.replace(/\?$/,"");if(s.length===0)return c?[p,""]:[p];let A=gy(s.join("/")),H=[];return H.push(...A.map(S=>S===""?p:[p,S].join("/"))),c&&H.push(...A),H.map(S=>h.startsWith("/")&&S===""?"/":S)}function p2(h){h.sort((o,m)=>o.score!==m.score?m.score-o.score:C2(o.routesMeta.map(s=>s.childrenIndex),m.routesMeta.map(s=>s.childrenIndex)))}var k2=/^:[\w-]+$/,S2=3,b2=2,w2=1,j2=10,A2=-2,sy=h=>h==="*";function G2(h,o){let m=h.split("/"),s=m.length;return m.some(sy)&&(s+=A2),o&&(s+=b2),m.filter(c=>!sy(c)).reduce((c,p)=>c+(k2.test(p)?S2:p===""?w2:j2),s)}function C2(h,o){return h.length===o.length&&h.slice(0,-1).every((s,c)=>s===o[c])?h[h.length-1]-o[o.length-1]:0}function E2(h,o,m=!1){let{routesMeta:s}=h,c={},p="/",A=[];for(let H=0;H<s.length;++H){let S=s[H],v=H===s.length-1,R=p==="/"?o:o.slice(p.length)||"/",z=hl({path:S.relativePath,caseSensitive:S.caseSensitive,end:v},R),x=S.route;if(!z&&v&&m&&!s[s.length-1].route.index&&(z=hl({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},R)),!z)return null;Object.assign(c,z.params),A.push({params:c,pathname:te([p,z.pathname]),pathnameBase:z2(te([p,z.pathnameBase])),route:x}),z.pathnameBase!=="/"&&(p=te([p,z.pathnameBase]))}return A}function hl(h,o){typeof h=="string"&&(h={path:h,caseSensitive:!1,end:!0});let[m,s]=R2(h.path,h.caseSensitive,h.end),c=o.match(m);if(!c)return null;let p=c[0],A=p.replace(/(.)\/+$/,"$1"),H=c.slice(1);return{params:s.reduce((v,{paramName:R,isOptional:z},x)=>{if(R==="*"){let Q=H[x]||"";A=p.slice(0,p.length-Q.length).replace(/(.)\/+$/,"$1")}const X=H[x];return z&&!X?v[R]=void 0:v[R]=(X||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:A,pattern:h}}function R2(h,o=!1,m=!0){Na(h==="*"||!h.endsWith("*")||h.endsWith("/*"),`Route path "${h}" will be treated as if it were "${h.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${h.replace(/\*$/,"/*")}".`);let s=[],c="^"+h.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(A,H,S)=>(s.push({paramName:H,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return h.endsWith("*")?(s.push({paramName:"*"}),c+=h==="*"||h==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):m?c+="\\/*$":h!==""&&h!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),s]}function H2(h){try{return h.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Na(!1,`The URL path "${h}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),h}}function ue(h,o){if(o==="/")return h;if(!h.toLowerCase().startsWith(o.toLowerCase()))return null;let m=o.endsWith("/")?o.length-1:o.length,s=h.charAt(m);return s&&s!=="/"?null:h.slice(m)||"/"}function D2(h,o="/"){let{pathname:m,search:s="",hash:c=""}=typeof h=="string"?Ni(h):h;return{pathname:m?m.startsWith("/")?m:M2(m,o):o,search:_2(s),hash:O2(c)}}function M2(h,o){let m=o.replace(/\/+$/,"").split("/");return h.split("/").forEach(c=>{c===".."?m.length>1&&m.pop():c!=="."&&m.push(c)}),m.length>1?m.join("/"):"/"}function Nh(h,o,m,s){return`Cannot include a '${h}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${m}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function T2(h){return h.filter((o,m)=>m===0||o.route.path&&o.route.path.length>0)}function py(h){let o=T2(h);return o.map((m,s)=>s===o.length-1?m.pathname:m.pathnameBase)}function ky(h,o,m,s=!1){let c;typeof h=="string"?c=Ni(h):(c={...h},Cn(!c.pathname||!c.pathname.includes("?"),Nh("?","pathname","search",c)),Cn(!c.pathname||!c.pathname.includes("#"),Nh("#","pathname","hash",c)),Cn(!c.search||!c.search.includes("#"),Nh("#","search","hash",c)));let p=h===""||c.pathname==="",A=p?"/":c.pathname,H;if(A==null)H=m;else{let z=o.length-1;if(!s&&A.startsWith("..")){let x=A.split("/");for(;x[0]==="..";)x.shift(),z-=1;c.pathname=x.join("/")}H=z>=0?o[z]:"/"}let S=D2(c,H),v=A&&A!=="/"&&A.endsWith("/"),R=(p||A===".")&&m.endsWith("/");return!S.pathname.endsWith("/")&&(v||R)&&(S.pathname+="/"),S}var te=h=>h.join("/").replace(/\/\/+/g,"/"),z2=h=>h.replace(/\/+$/,"").replace(/^\/*/,"/"),_2=h=>!h||h==="?"?"":h.startsWith("?")?h:"?"+h,O2=h=>!h||h==="#"?"":h.startsWith("#")?h:"#"+h;function N2(h){return h!=null&&typeof h.status=="number"&&typeof h.statusText=="string"&&typeof h.internal=="boolean"&&"data"in h}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sy=["POST","PUT","PATCH","DELETE"];new Set(Sy);var B2=["GET",...Sy];new Set(B2);var Bi=C.createContext(null);Bi.displayName="DataRouter";var sl=C.createContext(null);sl.displayName="DataRouterState";C.createContext(!1);var by=C.createContext({isTransitioning:!1});by.displayName="ViewTransition";var x2=C.createContext(new Map);x2.displayName="Fetchers";var U2=C.createContext(null);U2.displayName="Await";var Ba=C.createContext(null);Ba.displayName="Navigation";var xt=C.createContext(null);xt.displayName="Location";var xa=C.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var Kh=C.createContext(null);Kh.displayName="RouteError";function J2(h,{relative:o}={}){Cn(Ut(),"useHref() may be used only in the context of a <Router> component.");let{basename:m,navigator:s}=C.useContext(Ba),{hash:c,pathname:p,search:A}=Jt(h,{relative:o}),H=p;return m!=="/"&&(H=p==="/"?m:te([m,p])),s.createHref({pathname:H,search:A,hash:c})}function Ut(){return C.useContext(xt)!=null}function Me(){return Cn(Ut(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(xt).location}var wy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jy(h){C.useContext(Ba).static||C.useLayoutEffect(h)}function dl(){let{isDataRoute:h}=C.useContext(xa);return h?I2():L2()}function L2(){Cn(Ut(),"useNavigate() may be used only in the context of a <Router> component.");let h=C.useContext(Bi),{basename:o,navigator:m}=C.useContext(Ba),{matches:s}=C.useContext(xa),{pathname:c}=Me(),p=JSON.stringify(py(s)),A=C.useRef(!1);return jy(()=>{A.current=!0}),C.useCallback((S,v={})=>{if(Na(A.current,wy),!A.current)return;if(typeof S=="number"){m.go(S);return}let R=ky(S,JSON.parse(p),c,v.relative==="path");h==null&&o!=="/"&&(R.pathname=R.pathname==="/"?o:te([o,R.pathname])),(v.replace?m.replace:m.push)(R,v.state,v)},[o,m,p,c,h])}C.createContext(null);function Ay(){let{matches:h}=C.useContext(xa),o=h[h.length-1];return o?o.params:{}}function Jt(h,{relative:o}={}){let{matches:m}=C.useContext(xa),{pathname:s}=Me(),c=JSON.stringify(py(m));return C.useMemo(()=>ky(h,JSON.parse(c),s,o==="path"),[h,c,s,o])}function K2(h,o){return Gy(h,o)}function Gy(h,o,m,s,c){Cn(Ut(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=C.useContext(Ba),{matches:A}=C.useContext(xa),H=A[A.length-1],S=H?H.params:{},v=H?H.pathname:"/",R=H?H.pathnameBase:"/",z=H&&H.route;{let Y=z&&z.path||"";Cy(v,!z||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let x=Me(),X;if(o){let Y=typeof o=="string"?Ni(o):o;Cn(R==="/"||Y.pathname?.startsWith(R),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),X=Y}else X=x;let Q=X.pathname||"/",W=Q;if(R!=="/"){let Y=R.replace(/^\//,"").split("/");W="/"+Q.replace(/^\//,"").split("/").slice(Y.length).join("/")}let q=vy(h,{pathname:W});Na(z||q!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Na(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=Q2(q&&q.map(Y=>Object.assign({},Y,{params:Object.assign({},S,Y.params),pathname:te([R,p.encodeLocation?p.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?R:te([R,p.encodeLocation?p.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),A,m,s,c);return o&&K?C.createElement(xt.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},K):K}function Y2(){let h=P2(),o=N2(h)?`${h.status} ${h.statusText}`:h instanceof Error?h.message:JSON.stringify(h),m=h instanceof Error?h.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},p={padding:"2px 4px",backgroundColor:s},A=null;return console.error("Error handled by React Router default ErrorBoundary:",h),A=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},o),m?C.createElement("pre",{style:c},m):null,A)}var q2=C.createElement(Y2,null),X2=class extends C.Component{constructor(h){super(h),this.state={location:h.location,revalidation:h.revalidation,error:h.error}}static getDerivedStateFromError(h){return{error:h}}static getDerivedStateFromProps(h,o){return o.location!==h.location||o.revalidation!=="idle"&&h.revalidation==="idle"?{error:h.error,location:h.location,revalidation:h.revalidation}:{error:h.error!==void 0?h.error:o.error,location:o.location,revalidation:h.revalidation||o.revalidation}}componentDidCatch(h,o){this.props.unstable_onError?this.props.unstable_onError(h,o):console.error("React Router caught the following error during render",h)}render(){return this.state.error!==void 0?C.createElement(xa.Provider,{value:this.props.routeContext},C.createElement(Kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function V2({routeContext:h,match:o,children:m}){let s=C.useContext(Bi);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),C.createElement(xa.Provider,{value:h},m)}function Q2(h,o=[],m=null,s=null,c=null){if(h==null){if(!m)return null;if(m.errors)h=m.matches;else if(o.length===0&&!m.initialized&&m.matches.length>0)h=m.matches;else return null}let p=h,A=m?.errors;if(A!=null){let v=p.findIndex(R=>R.route.id&&A?.[R.route.id]!==void 0);Cn(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(A).join(",")}`),p=p.slice(0,Math.min(p.length,v+1))}let H=!1,S=-1;if(m)for(let v=0;v<p.length;v++){let R=p[v];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(S=v),R.route.id){let{loaderData:z,errors:x}=m,X=R.route.loader&&!z.hasOwnProperty(R.route.id)&&(!x||x[R.route.id]===void 0);if(R.route.lazy||X){H=!0,S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}return p.reduceRight((v,R,z)=>{let x,X=!1,Q=null,W=null;m&&(x=A&&R.route.id?A[R.route.id]:void 0,Q=R.route.errorElement||q2,H&&(S<0&&z===0?(Cy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,W=null):S===z&&(X=!0,W=R.route.hydrateFallbackElement||null)));let q=o.concat(p.slice(0,z+1)),K=()=>{let Y;return x?Y=Q:X?Y=W:R.route.Component?Y=C.createElement(R.route.Component,null):R.route.element?Y=R.route.element:Y=v,C.createElement(V2,{match:R,routeContext:{outlet:v,matches:q,isDataRoute:m!=null},children:Y})};return m&&(R.route.ErrorBoundary||R.route.errorElement||z===0)?C.createElement(X2,{location:m.location,revalidation:m.revalidation,component:Q,error:x,children:K(),routeContext:{outlet:null,matches:q,isDataRoute:!0},unstable_onError:s}):K()},null)}function Yh(h){return`${h} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z2(h){let o=C.useContext(Bi);return Cn(o,Yh(h)),o}function W2(h){let o=C.useContext(sl);return Cn(o,Yh(h)),o}function $2(h){let o=C.useContext(xa);return Cn(o,Yh(h)),o}function qh(h){let o=$2(h),m=o.matches[o.matches.length-1];return Cn(m.route.id,`${h} can only be used on routes that contain a unique "id"`),m.route.id}function F2(){return qh("useRouteId")}function P2(){let h=C.useContext(Kh),o=W2("useRouteError"),m=qh("useRouteError");return h!==void 0?h:o.errors?.[m]}function I2(){let{router:h}=Z2("useNavigate"),o=qh("useNavigate"),m=C.useRef(!1);return jy(()=>{m.current=!0}),C.useCallback(async(c,p={})=>{Na(m.current,wy),m.current&&(typeof c=="number"?h.navigate(c):await h.navigate(c,{fromRouteId:o,...p}))},[h,o])}var dy={};function Cy(h,o,m){!o&&!dy[h]&&(dy[h]=!0,Na(!1,m))}C.memo(nf);function nf({routes:h,future:o,state:m,unstable_onError:s}){return Gy(h,void 0,m,s,o)}function _t(h){Cn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function af({basename:h="/",children:o=null,location:m,navigationType:s="POP",navigator:c,static:p=!1}){Cn(!Ut(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=h.replace(/^\/*/,"/"),H=C.useMemo(()=>({basename:A,navigator:c,static:p,future:{}}),[A,c,p]);typeof m=="string"&&(m=Ni(m));let{pathname:S="/",search:v="",hash:R="",state:z=null,key:x="default"}=m,X=C.useMemo(()=>{let Q=ue(S,A);return Q==null?null:{location:{pathname:Q,search:v,hash:R,state:z,key:x},navigationType:s}},[A,S,v,R,z,x,s]);return Na(X!=null,`<Router basename="${A}"> is not able to match the URL "${S}${v}${R}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:C.createElement(Ba.Provider,{value:H},C.createElement(xt.Provider,{children:o,value:X}))}function ef({children:h,location:o}){return K2(Jh(h),o)}function Jh(h,o=[]){let m=[];return C.Children.forEach(h,(s,c)=>{if(!C.isValidElement(s))return;let p=[...o,c];if(s.type===C.Fragment){m.push.apply(m,Jh(s.props.children,p));return}Cn(s.type===_t,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Cn(!s.props.index||!s.props.children,"An index route cannot have child routes.");let A={id:s.props.id||p.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(A.children=Jh(s.props.children,p)),m.push(A)}),m}var ll="get",rl="application/x-www-form-urlencoded";function ol(h){return h!=null&&typeof h.tagName=="string"}function tf(h){return ol(h)&&h.tagName.toLowerCase()==="button"}function uf(h){return ol(h)&&h.tagName.toLowerCase()==="form"}function lf(h){return ol(h)&&h.tagName.toLowerCase()==="input"}function rf(h){return!!(h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)}function hf(h,o){return h.button===0&&(!o||o==="_self")&&!rf(h)}var ul=null;function sf(){if(ul===null)try{new FormData(document.createElement("form"),0),ul=!1}catch{ul=!0}return ul}var df=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bh(h){return h!=null&&!df.has(h)?(Na(!1,`"${h}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rl}"`),null):h}function of(h,o){let m,s,c,p,A;if(uf(h)){let H=h.getAttribute("action");s=H?ue(H,o):null,m=h.getAttribute("method")||ll,c=Bh(h.getAttribute("enctype"))||rl,p=new FormData(h)}else if(tf(h)||lf(h)&&(h.type==="submit"||h.type==="image")){let H=h.form;if(H==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=h.getAttribute("formaction")||H.getAttribute("action");if(s=S?ue(S,o):null,m=h.getAttribute("formmethod")||H.getAttribute("method")||ll,c=Bh(h.getAttribute("formenctype"))||Bh(H.getAttribute("enctype"))||rl,p=new FormData(H,h),!sf()){let{name:v,type:R,value:z}=h;if(R==="image"){let x=v?`${v}.`:"";p.append(`${x}x`,"0"),p.append(`${x}y`,"0")}else v&&p.append(v,z)}}else{if(ol(h))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');m=ll,s=null,c=rl,A=h}return p&&c==="text/plain"&&(A=p,p=void 0),{action:s,method:m.toLowerCase(),encType:c,formData:p,body:A}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xh(h,o){if(h===!1||h===null||typeof h>"u")throw new Error(o)}function mf(h,o,m){let s=typeof h=="string"?new URL(h,typeof window>"u"?"server://singlefetch/":window.location.origin):h;return s.pathname==="/"?s.pathname=`_root.${m}`:o&&ue(s.pathname,o)==="/"?s.pathname=`${o.replace(/\/$/,"")}/_root.${m}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${m}`,s}async function yf(h,o){if(h.id in o)return o[h.id];try{let m=await import(h.module);return o[h.id]=m,m}catch(m){return console.error(`Error loading route module \`${h.module}\`, reloading page...`),console.error(m),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cf(h){return h==null?!1:h.href==null?h.rel==="preload"&&typeof h.imageSrcSet=="string"&&typeof h.imageSizes=="string":typeof h.rel=="string"&&typeof h.href=="string"}async function vf(h,o,m){let s=await Promise.all(h.map(async c=>{let p=o.routes[c.route.id];if(p){let A=await yf(p,m);return A.links?A.links():[]}return[]}));return kf(s.flat(1).filter(cf).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function oy(h,o,m,s,c,p){let A=(S,v)=>m[v]?S.route.id!==m[v].route.id:!0,H=(S,v)=>m[v].pathname!==S.pathname||m[v].route.path?.endsWith("*")&&m[v].params["*"]!==S.params["*"];return p==="assets"?o.filter((S,v)=>A(S,v)||H(S,v)):p==="data"?o.filter((S,v)=>{let R=s.routes[S.route.id];if(!R||!R.hasLoader)return!1;if(A(S,v)||H(S,v))return!0;if(S.route.shouldRevalidate){let z=S.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:m[0]?.params||{},nextUrl:new URL(h,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function ff(h,o,{includeHydrateFallback:m}={}){return gf(h.map(s=>{let c=o.routes[s.route.id];if(!c)return[];let p=[c.module];return c.clientActionModule&&(p=p.concat(c.clientActionModule)),c.clientLoaderModule&&(p=p.concat(c.clientLoaderModule)),m&&c.hydrateFallbackModule&&(p=p.concat(c.hydrateFallbackModule)),c.imports&&(p=p.concat(c.imports)),p}).flat(1))}function gf(h){return[...new Set(h)]}function pf(h){let o={},m=Object.keys(h).sort();for(let s of m)o[s]=h[s];return o}function kf(h,o){let m=new Set;return new Set(o),h.reduce((s,c)=>{let p=JSON.stringify(pf(c));return m.has(p)||(m.add(p),s.push({key:p,link:c})),s},[])}function Ey(){let h=C.useContext(Bi);return Xh(h,"You must render this element inside a <DataRouterContext.Provider> element"),h}function Sf(){let h=C.useContext(sl);return Xh(h,"You must render this element inside a <DataRouterStateContext.Provider> element"),h}var Vh=C.createContext(void 0);Vh.displayName="FrameworkContext";function Ry(){let h=C.useContext(Vh);return Xh(h,"You must render this element inside a <HydratedRouter> element"),h}function bf(h,o){let m=C.useContext(Vh),[s,c]=C.useState(!1),[p,A]=C.useState(!1),{onFocus:H,onBlur:S,onMouseEnter:v,onMouseLeave:R,onTouchStart:z}=o,x=C.useRef(null);C.useEffect(()=>{if(h==="render"&&A(!0),h==="viewport"){let W=K=>{K.forEach(Y=>{A(Y.isIntersecting)})},q=new IntersectionObserver(W,{threshold:.5});return x.current&&q.observe(x.current),()=>{q.disconnect()}}},[h]),C.useEffect(()=>{if(s){let W=setTimeout(()=>{A(!0)},100);return()=>{clearTimeout(W)}}},[s]);let X=()=>{c(!0)},Q=()=>{c(!1),A(!1)};return m?h!=="intent"?[p,x,{}]:[p,x,{onFocus:zt(H,X),onBlur:zt(S,Q),onMouseEnter:zt(v,X),onMouseLeave:zt(R,Q),onTouchStart:zt(z,X)}]:[!1,x,{}]}function zt(h,o){return m=>{h&&h(m),m.defaultPrevented||o(m)}}function wf({page:h,...o}){let{router:m}=Ey(),s=C.useMemo(()=>vy(m.routes,h,m.basename),[m.routes,h,m.basename]);return s?C.createElement(Af,{page:h,matches:s,...o}):null}function jf(h){let{manifest:o,routeModules:m}=Ry(),[s,c]=C.useState([]);return C.useEffect(()=>{let p=!1;return vf(h,o,m).then(A=>{p||c(A)}),()=>{p=!0}},[h,o,m]),s}function Af({page:h,matches:o,...m}){let s=Me(),{manifest:c,routeModules:p}=Ry(),{basename:A}=Ey(),{loaderData:H,matches:S}=Sf(),v=C.useMemo(()=>oy(h,o,S,c,s,"data"),[h,o,S,c,s]),R=C.useMemo(()=>oy(h,o,S,c,s,"assets"),[h,o,S,c,s]),z=C.useMemo(()=>{if(h===s.pathname+s.search+s.hash)return[];let Q=new Set,W=!1;if(o.forEach(K=>{let Y=c.routes[K.route.id];!Y||!Y.hasLoader||(!v.some(P=>P.route.id===K.route.id)&&K.route.id in H&&p[K.route.id]?.shouldRevalidate||Y.hasClientLoader?W=!0:Q.add(K.route.id))}),Q.size===0)return[];let q=mf(h,A,"data");return W&&Q.size>0&&q.searchParams.set("_routes",o.filter(K=>Q.has(K.route.id)).map(K=>K.route.id).join(",")),[q.pathname+q.search]},[A,H,s,c,v,o,h,p]),x=C.useMemo(()=>ff(R,c),[R,c]),X=jf(R);return C.createElement(C.Fragment,null,z.map(Q=>C.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...m})),x.map(Q=>C.createElement("link",{key:Q,rel:"modulepreload",href:Q,...m})),X.map(({key:Q,link:W})=>C.createElement("link",{key:Q,nonce:m.nonce,...W})))}function Gf(...h){return o=>{h.forEach(m=>{typeof m=="function"?m(o):m!=null&&(m.current=o)})}}var Hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Hy&&(window.__reactRouterVersion="7.9.5")}catch{}function Cf({basename:h,children:o,window:m}){let s=C.useRef();s.current==null&&(s.current=y2({window:m,v5Compat:!0}));let c=s.current,[p,A]=C.useState({action:c.action,location:c.location}),H=C.useCallback(S=>{C.startTransition(()=>A(S))},[A]);return C.useLayoutEffect(()=>c.listen(H),[c,H]),C.createElement(af,{basename:h,children:o,location:p.location,navigationType:p.action,navigator:c})}var Dy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qh=C.forwardRef(function({onClick:o,discover:m="render",prefetch:s="none",relative:c,reloadDocument:p,replace:A,state:H,target:S,to:v,preventScrollReset:R,viewTransition:z,...x},X){let{basename:Q}=C.useContext(Ba),W=typeof v=="string"&&Dy.test(v),q,K=!1;if(typeof v=="string"&&W&&(q=v,Hy))try{let Rn=new URL(window.location.href),la=v.startsWith("//")?new URL(Rn.protocol+v):new URL(v),ra=ue(la.pathname,Q);la.origin===Rn.origin&&ra!=null?v=ra+la.search+la.hash:K=!0}catch{Na(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=J2(v,{relative:c}),[P,An,En]=bf(s,x),xn=Df(v,{replace:A,state:H,target:S,preventScrollReset:R,relative:c,viewTransition:z});function an(Rn){o&&o(Rn),Rn.defaultPrevented||xn(Rn)}let Un=C.createElement("a",{...x,...En,href:q||Y,onClick:K||p?o:an,ref:Gf(X,An),target:S,"data-discover":!W&&m==="render"?"true":void 0});return P&&!W?C.createElement(C.Fragment,null,Un,C.createElement(wf,{page:Y})):Un});Qh.displayName="Link";var Ef=C.forwardRef(function({"aria-current":o="page",caseSensitive:m=!1,className:s="",end:c=!1,style:p,to:A,viewTransition:H,children:S,...v},R){let z=Jt(A,{relative:v.relative}),x=Me(),X=C.useContext(sl),{navigator:Q,basename:W}=C.useContext(Ba),q=X!=null&&Of(z)&&H===!0,K=Q.encodeLocation?Q.encodeLocation(z).pathname:z.pathname,Y=x.pathname,P=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;m||(Y=Y.toLowerCase(),P=P?P.toLowerCase():null,K=K.toLowerCase()),P&&W&&(P=ue(P,W)||P);const An=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let En=Y===K||!c&&Y.startsWith(K)&&Y.charAt(An)==="/",xn=P!=null&&(P===K||!c&&P.startsWith(K)&&P.charAt(K.length)==="/"),an={isActive:En,isPending:xn,isTransitioning:q},Un=En?o:void 0,Rn;typeof s=="function"?Rn=s(an):Rn=[s,En?"active":null,xn?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let la=typeof p=="function"?p(an):p;return C.createElement(Qh,{...v,"aria-current":Un,className:Rn,ref:R,style:la,to:A,viewTransition:H},typeof S=="function"?S(an):S)});Ef.displayName="NavLink";var Rf=C.forwardRef(({discover:h="render",fetcherKey:o,navigate:m,reloadDocument:s,replace:c,state:p,method:A=ll,action:H,onSubmit:S,relative:v,preventScrollReset:R,viewTransition:z,...x},X)=>{let Q=zf(),W=_f(H,{relative:v}),q=A.toLowerCase()==="get"?"get":"post",K=typeof H=="string"&&Dy.test(H),Y=P=>{if(S&&S(P),P.defaultPrevented)return;P.preventDefault();let An=P.nativeEvent.submitter,En=An?.getAttribute("formmethod")||A;Q(An||P.currentTarget,{fetcherKey:o,method:En,navigate:m,replace:c,state:p,relative:v,preventScrollReset:R,viewTransition:z})};return C.createElement("form",{ref:X,method:q,action:W,onSubmit:s?S:Y,...x,"data-discover":!K&&h==="render"?"true":void 0})});Rf.displayName="Form";function Hf(h){return`${h} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function My(h){let o=C.useContext(Bi);return Cn(o,Hf(h)),o}function Df(h,{target:o,replace:m,state:s,preventScrollReset:c,relative:p,viewTransition:A}={}){let H=dl(),S=Me(),v=Jt(h,{relative:p});return C.useCallback(R=>{if(hf(R,o)){R.preventDefault();let z=m!==void 0?m:Nt(S)===Nt(v);H(h,{replace:z,state:s,preventScrollReset:c,relative:p,viewTransition:A})}},[S,H,v,m,s,o,h,c,p,A])}var Mf=0,Tf=()=>`__${String(++Mf)}__`;function zf(){let{router:h}=My("useSubmit"),{basename:o}=C.useContext(Ba),m=F2();return C.useCallback(async(s,c={})=>{let{action:p,method:A,encType:H,formData:S,body:v}=of(s,o);if(c.navigate===!1){let R=c.fetcherKey||Tf();await h.fetch(R,m,c.action||p,{preventScrollReset:c.preventScrollReset,formData:S,body:v,formMethod:c.method||A,formEncType:c.encType||H,flushSync:c.flushSync})}else await h.navigate(c.action||p,{preventScrollReset:c.preventScrollReset,formData:S,body:v,formMethod:c.method||A,formEncType:c.encType||H,replace:c.replace,state:c.state,fromRouteId:m,flushSync:c.flushSync,viewTransition:c.viewTransition})},[h,o,m])}function _f(h,{relative:o}={}){let{basename:m}=C.useContext(Ba),s=C.useContext(xa);Cn(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),p={...Jt(h||".",{relative:o})},A=Me();if(h==null){p.search=A.search;let H=new URLSearchParams(p.search),S=H.getAll("index");if(S.some(R=>R==="")){H.delete("index"),S.filter(z=>z).forEach(z=>H.append("index",z));let R=H.toString();p.search=R?`?${R}`:""}}return(!h||h===".")&&c.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),m!=="/"&&(p.pathname=p.pathname==="/"?m:te([m,p.pathname])),Nt(p)}function Of(h,{relative:o}={}){let m=C.useContext(by);Cn(m!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=My("useViewTransitionState"),c=Jt(h,{relative:o});if(!m.isTransitioning)return!1;let p=ue(m.currentLocation.pathname,s)||m.currentLocation.pathname,A=ue(m.nextLocation.pathname,s)||m.nextLocation.pathname;return hl(c.pathname,A)!=null||hl(c.pathname,p)!=null}const Zn=[];for(let h=0;h<256;++h)Zn.push((h+256).toString(16).slice(1));function Nf(h,o=0){return(Zn[h[o+0]]+Zn[h[o+1]]+Zn[h[o+2]]+Zn[h[o+3]]+"-"+Zn[h[o+4]]+Zn[h[o+5]]+"-"+Zn[h[o+6]]+Zn[h[o+7]]+"-"+Zn[h[o+8]]+Zn[h[o+9]]+"-"+Zn[h[o+10]]+Zn[h[o+11]]+Zn[h[o+12]]+Zn[h[o+13]]+Zn[h[o+14]]+Zn[h[o+15]]).toLowerCase()}let xh;const Bf=new Uint8Array(16);function xf(){if(!xh){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");xh=crypto.getRandomValues.bind(crypto)}return xh(Bf)}const Uf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),my={randomUUID:Uf};function Jf(h,o,m){h=h||{};const s=h.random??h.rng?.()??xf();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,Nf(s)}function l(h,o,m){return my.randomUUID&&!h?my.randomUUID():Jf(h)}const Ot={అ:[{id:l(),title:"అత్యున్నత సింహాసనముపై",lyrics:`అత్యున్నత సింహాసనముపై - ఆశీనుడవైన నా దేవా
అత్యంత ప్రేమా స్వరూపివి నీవే - ఆరాధింతును నిన్నే
ఆహహ హల్లెలూయ (3) ఆ...మేన్

1. ఆశ్చర్యకరుడా స్తోత్రం - ఆలోచన కర్తా స్తోత్రం
బలమైన దేవా - నిత్యుడవగు తండ్రి
సమాధాన అధిపతి స్తోత్రం || ఆహహ ||

2. కృపా సత్య సంపూర్ణుడా స్తోత్రం - కృపతో రక్షించితివే స్తోత్రం
నీ రక్తమిచ్చి విమోచించినావే - నా రక్షణ కర్తా స్తోత్రం
|| ఆహహ ||

౩.మృత్యుంజయుడా స్తోత్రం - మహా ఘనుడా స్తోత్రం
మమ్మును కొనిపోవ త్వరలో రానున్న - మేఘవాహనుడా స్తోత్రం
|| ఆహహ ||

4.ఆమేన్ అనువాడా స్తోత్రం - అల్ఫా ఓమేగా స్తోత్రం 
అగ్ని జ్వాలలవంటి కన్నులు గలవాడా - అత్యున్నతుడా స్తోత్రం
|| ఆహహ ||`,keywords:["athyunnatha simhaasanamupai","athunnatha simhasanamupai","athunatha simhasanamupai","athyunatha simhasanamupay","worship","3/4"],video:"https://youtu.be/QmK6L700NqQ",artist:"",genre:["Andhra Christian Hymn","Worship"],timeSignature:"3/4"},{id:l(),title:"అదిగో అంజూరము ఓ క్రైస్తవ",lyrics:`అదిగో అంజూరము ఓ క్రైస్తవ
చిగురించెను చూడుము (2)
ఇదిగో నేను త్వరగా వత్తును
సిద్ధ పడుడి అను స్వరమును వినవా
||అదిగో అంజూరము||

1. నూట ఇరువది సంవత్సరములు
చాటెను నోవాహు దేవుని వార్తను
పాటించక ప్రభు మాటలు వారలు (2)
నీటిలో మునిగిరి పాఠము నీకిది (2)
||అదిగో అంజూరము||

2. జ్ఞాపకముంచుము లోతు సతీమణి
శాప నగర ప్రియ స్నేహితురాలు
ఆపద నెరిగియు ఆశలు వీడక (2)
నాశనమొందెను పాఠము నీకిది (2)
||అదిగో అంజూరము||

3. లోకము మోసము రంగుల వలయము
నాశన కూపము నిరతము శోకము
యేసే మార్గము సత్యము జీవము (2)
యేసుని రాజ్యము నిత్యానందము (2)
||అదిగో అంజూరము||`,keywords:["adhigo anjuramu oo kraisthavuda","Adigo anjooramu","adhigo anjooramu","Adhigo anjuramo","adigo anjuramu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అద్భుతం చేయువాడా - అతిశయమిచ్చువాడా",lyrics:`అద్భుతం చేయువాడా - అతిశయమిచ్చువాడా
ఆలోచనకరుడా - నా యేసు రాజా నీవే (2) 

హల్లెలూయా హల్లెలూయా హల్లెలూయా యేసయ్యా (2) ||అద్భుతం||

1. పేతురు దోనెలో ఉన్నవాడా - నిత్యము నాలో నివసించువాడా  (2)
సహచరుడిగా నాతో ఉండువాడా నాకు 
సదా సహాయం చేయువాడా  (2)

హల్లెలూయా హల్లెలూయా హల్లెలూయా యేసయ్యా (2) ||అద్భుతం||

2. నీటిని గోడగా నిలుపువాడా  - ఆరిన నేలపై నడుపువాడా (2)
వస్త్రము జోళ్ళు అరుగక చేసి - నాలోన అద్భుతము చేయువాడా (2) 

హల్లెలూయా హల్లెలూయా హల్లెలూయా యేసయ్యా (2) ||అద్భుతం||`,keywords:["adbutham cheyuvada","adbhutham cheeyuvaada","adbutam cheyuvada","Adbhutham cheyuvada","joel n bob"],video:"",artist:"Joel N Bob",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అబ్రహాము దేవుడవు - ఇస్సాకు దేవుడవు",lyrics:`అబ్రహాము దేవుడవు - ఇస్సాకు దేవుడవు
యాకోబు దేవుడవు - నాకు చాలిన దేవుడవు
యేసయ్యా నా యేసయ్యా - యేసయ్యా నా యేసయ్యా (2)

1. అబ్రహాము విశ్వాసముతొ - స్వ దేశము విడచెను
పునాదులు గల పట్టణమునకై వేచి జీవించెను (2)
అబ్రహాముకు చాలిన దేవుడు నీవే నయ్యా (2)
యేసయ్యా నా యేసయ్యా - యేసయ్యా నా యేసయ్యా (2)
||అబ్రహాము||

2. ఇస్సాకు విధేయుడై బలియాగమాయెను
వాగ్ధానాన్ని బట్టి మృతుడై లేచెను (2)
ఇస్సాకుకు చాలిన దేవుడు నీవేనయ్యా (2)
యేసయ్యా నా యేసయ్యా - యేసయ్యా నా యేసయ్యా (2)
||అబ్రహాము||

3. యాకోబు మోసగాడై తండ్రి ఇంటిని విడచెను
యాకోబు ఇశ్రాయేలై తండ్రి ఇంటికి చేరెను (2)
యాకోబుకు చాలిన దేవుడు నీవేనయ్యా (2)
యేసయ్యా నా యేసయ్యా - యేసయ్యా నా యేసయ్యా (2)
||అబ్రహాము||`,keywords:["abrahaamu dhevudavu","abrahamu devudavu","abrahamu deevudavu","abrahaamu deevudavu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అన్ని నామముల కన్న",lyrics:`అన్ని నామముల కన్న పై నామము – యేసుని నామము
ఎన్ని తరములకైనా ఘనపరచదగినది – క్రైస్తవ నామము (2)
యేసు నామము జయం జయము
సాతాను శక్తుల్ లయం లయము (2)
హల్లెలూయ హొసన్న హల్లెలూయా – హల్లెలూయా ఆమెన్ (2)

1. పాపముల నుండి విడిపించును
యేసుని నామము (2)
నిత్య నరకాగ్నిలో నుండి రక్షించును
క్రీస్తేసు నామము (2) ||యేసు నామము ||

2. సాతాను పై అధికార మిచ్చును
శక్తి గల యేసు నామము (2)
శత్రు సమూహము పై జయమునిచ్చును
జయశీలుడైన యేసు నామము (2) ||యేసు నామము ||`,keywords:["anni naamamulakanna pai naamamu","ani namamulakanna pai namamu","anninaamamulakanna","anni naamamulakanna","anni naamamula kanna","2/4"],video:"https://youtu.be/w_LzUNOC8Vc",artist:"",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"అన్ని కాలంబుల",lyrics:`అన్ని కాలంబుల – నున్న యెహోవా ని
నెన్నదరంబయో – కన్న తండ్రి
వన్నె కెక్కిన మోక్ష – వాసాళి సన్నుతు
లున్నతమై యుండ – మున్నె నీకు     ||అన్ని||

1. నిన్ను బ్రకటన సేయ – నిఖిల లోకములను
బన్నుగ జేసిన – బలుడ వీవె
ఉన్న లోకంబుల – నుడుగక కరుణా సం
పన్నతతో నేలు – ప్రభుడ వీవె
అన్ని జీవుల నెరిగి – యాహార మిచ్చుచు
నున్న సర్వజ్ఞుo – డవు నీవే
ఎన్న శక్యముగాక – ఉన్న లక్షణముల
సన్నుతించుటకు నే – జాలుదునా   ||అన్ని||

2. పుట్టింప నీవంచు – బోషింప నీవంచు
గిట్టింప నీవంచు – గీర్తింతును
నట్టి పనికి మాలి – నట్టి మానవుల చే
పట్టి రక్షింప బా – ధ్యుండ వంచు
దట్టమైన కృపను దరి జేర్చ నాకిచ్చి
పట్టయు నిలచియుండు – ప్రభుడ వంచు
గట్టడచే గడ – ముట్టుదనుక నా
పట్టుకొలది నిన్ను – బ్రస్తుతింతు    ||అన్ని||

3. కారుణ్య నిధి వీవు – కఠినాత్ముడను నేను
భూరి శుద్ధుడ వీవు – పాపి నేను
సార భాగ్యుడ వీవు – జగతిలో నాకన్న
దారిద్రుడే లేడు – తరచి చూడ
సార సద్గుణముల – సంపన్నుడవు నీవు
ఘోర దుర్గుణ సం – చారి, నేను
ఏ రీతి స్తుతియింతు – నే రీతి సేవింతు
నేర మెన్నక ప్రోవ – నెర నమ్మితి     ||అన్ని||`,keywords:["anni kalambula","anni kaalambula","annikalambula","andhra christian hymns","7/8"],video:"",artist:"Beethala John",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"అన్నిటి కన్నా ప్రార్థనే మిన్న",lyrics:`అన్నిటి కన్నా ప్రార్థనే మిన్న
అన్న బైబిల్ మాట ఉన్నదా జ్ఞాపకం
ఉన్నదా జ్ఞాపకం ||అన్నిటి||

1. శోధనలోనికి మీరు జారిపడకుండాలంటే (2)
మెండుగా ప్రార్థన ఉండాలి గుండెలో (2) ||అన్నిటి||

2. శాంతి లోపల మీకు సుఖము లోకములోన (2)
కలిగి బ్రతకాలంటే కావాలి ప్రార్థన (2) ||అన్నిటి||

3.శుద్ధులందరి కోసం శ్రద్ధగా ప్రార్థించాలి 
పెద్దలందరి కోసం ప్రార్ధింప మరువకు (2) ||అన్నిటి||`,keywords:["annitikanna prardhanae minna","anniti kanna pradhana minna","anni ti kanna prardhana minna","anniti kanna prardhana mina"],video:"",artist:"",genre:["Prayer","General"],timeSignature:"4/4"},{id:l(),title:"అన్నీ ఉన్నా గాని ఏమీ లేనట్టే",lyrics:`అన్నీ ఉన్నా గాని ఏమీ లేనట్టే
యేసు ఉంటే చాలు నాకన్నీ ఉన్నట్టే
నిందలు -బాధలు- వ్యాధులు- ఖడ్గములు (2)
ఎన్నొచ్చీనా నే జడియను

యేసయ్య యేసయ్య నీవుంటే చాలయ్యా (2) ||అన్నీ||

1. అగ్నిగుండము ఎదురైనా -సింహాల బోను పొంచి వున్నా
విడువదు నీ కృప -మరువదు నన్నెపుడు (2) ||యేసయ్య||

2. సాగిపోయెను నా నీడ -అస్తమించగా నా ఉదయం
కలత చెందెను నా హృదయం-కృపనుపెంచెను నీ అభయం (2) ||యేసయ్య||

3. ఆప్తులు అందరూ విడిచిన- బంధువులే రాబందులైనా
ఒంటరి నా పయనం నిన్ను చేరుటే నా గమ్యం (2) ||యేసయ్య||`,keywords:["anni unna gaani emi leenatte","ani una gani emi lenatte","anni unna gani yemi lenatte","anni unna gaani yemi leenatte"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అన్నివేళలా ఆదరించెడి ఆత్మరూపీ నీకే వందనం",lyrics:`అన్నివేళలా ఆదరించెడి ఆత్మరూపీ నీకే వందనం 
ఎన్ని తీరుల నిన్ను కొలిచినా తీర్చలేను నేను నీ ఋణం

1. పడిపోయియుండగా నను తిరిగి లేపితివి 
స్థిరపరచి దీవించగా నీ కరము చాపితివి
పోగొట్టుకున్నదంత ఇచ్చితివి 
రెట్టింపు శోభ మరల తెచ్చితివి

2. నిను వెంబడించగా శ్రమలెన్నో కలిగినా 
సువార్త చాటించగా ఉన్నవన్నీ పోయినా 
నూరంతల దీవెనలు పంపెదవు 
సమృద్ధితో నను నింపెదవు`,keywords:["anni veelala aadharinchedi","anni velala adharainchedi","ani velala adharinchedi","stevenson"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అనుక్షణం నా తోడుగ ఉన్నావు",lyrics:`అనుక్షణం నా తోడుగ ఉన్నావు
ప్రతి దినం నా నీడగ ఉన్నావు (2)
అడుగులు జారక కాపాడుతు నాతోనే ఉన్నావు
తడబడు అడుగులు సరిచేస్తూ నడిపిస్తూ ఉన్నావు

ధైర్యము నిచ్చావు, నాకు గమ్యము తెలిపావు
నే చెయ్యలేని గొప్ప కార్యాలెన్నో సాధ్యము చేసావు
నూతన పరిచావు నీ రక్షణనిచ్చావు
నిత్య జీవపు మార్గం తెలిపే గొప్ప భాగ్యమునిచ్చావు  (2)

1. నా బాల్యమునందు నీ ఒడిలో చేర్చావు
నా యవ్వన దశలో నీ త్రోవలో నడిపావు
నా కష్ట సమయాన నా చేయి పట్టావు
నా తండ్రిగ నీవే నను ఆదరించావు

నా ఒంటరి పయనంలో నా వెంటే ఉన్నావు
నా కన్నీరంతా నాట్యముగా మార్చావు
నీ కృపనే చూపి నీ కౌగిట దాచావు
నా గానము నీవై నీ సాక్షిగా నిలిపావు      ||ధైర్యము నిచ్చావు||

In Interlude:
నీదు ప్రేమలో నడిచెదను
నీదు సేవలో నిలిచెదను
నీదు మహిమనే చాటెదను
నీదు సాక్షిగా బ్రతికేదను      (2)

2. ప్రతి ఉదయమునందు నీ కృపలను తలచెదను
ప్రతి రాత్రి నీ విశ్వాస్యతను కీర్తించెదను
ప్రతి కార్యములన్నీ నీ మహిమకై  చేసెధను
పరిపూర్ణ హృదయముతో నిన్నారాధించెను

ఏ యోగ్యత లేని నాకిచ్చిన స్థానముకై
ఏ బేధము లేని నీవు చూపిన ప్రేమకై
ఏమివ్వగలను నీవు చేసిన త్యాగముకై
ఈ జీవితమర్పిస్తా నీ సేవ చేయుటకై    ||ధైర్యము నిచ్చావు||`,keywords:["anukshanam naa thooduga unnavu","anukshanam","anushanam","naa dhairyam","nadairyam","anuksanam","na dhairyam","naa dairyam","4/4"],video:"",artist:"Surya Prakash Injarapu, Kiran Kumar, Priyanka, & Arif Dani",genre:["General","Love","Grace"],timeSignature:"4/4"},{id:l(),title:"అనుక్షణము నిన్నే కొలుతును పునరుద్దానుడా",lyrics:`అనుక్షణము నిన్నే కొలుతును పునరుద్దానుడా 
 పునరుద్దానుడా - పరిశుద్ధుడా

1. అధికారులైనా - దేవదూతలైన
వస్త్రహీనులైన - ఉపద్రవమైన
కరువైన - ఖడ్గమైన
|| అనుక్షణము ||

2. రోగినైనా నాకై - త్యాగమైనవే
దోషినైన నాకై - దాహము గొన్నావే
ఊహకందదయ్య - నీ ధర్మమూ
|| అనుక్షణము ||

3.శ్రమలైన - హింసలైనా
రాబోవునవైనా - ఉన్నవైనా
మరణమైన - జీవమైన
|| అనుక్షణము ||

4.ఒంటరినైనా నా  కంటనీరు తుడిచావే
కంటిపాపల నీ ఇంట చేర్చుకున్నవే
మంటినైనా నన్ను నీ బంటుగా చేసావే
|| అనుక్షణము ||`,keywords:["anukshanamu ninne koluthunu punarudhanuda","anu kshanamu ninne koluthunu","anu kshanam ninne koluthunu","anukshanam ninne koluthunu"],video:"",artist:"Pas Raja Babu",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అనుకరించెద నే ననుదినమును బాలుఁ డేసు",lyrics:`అనుకరించెద నే ననుదినమును బాలుఁ డేసు ననువుగాను జ్ఞానమునం
దును వయస్సునందును దే వుని ప్రేమను మానవుల ద యను బెరిగిన
బాలుఁడేసు ||ననుకరించెద||

1. పరదేశంబున వసించి పరమాత్తుని మదిఁ దలంచి దురితమును
జయించిన స చ్చరితుఁడైన యోసేపు ||ననుకరించెద||

2. తల్లి యానతి నెరవేర్చి తమ్ముని కష్టములఁ దీర్చి యెల్లకాలముండు కీర్తి
నిల గడించిన మిర్యాము ||ననుకరించెద||

3. పాలు మరచినది మొదలు ప్రభు సేవా సంపదలు ఆలయమునఁ
బూసిన సు బాలకుండు సమూయేలు ||ననుకరించెద||

4. శత్రువులను బరిమార్చి మిత్రులకు జయంబొనర్చి స్తోత్రగీతములు
రచించిన సుందరుండౌ దావీదు ||ననుకరించెద||

5. పరులకు న్యాయంబుఁ దీర్పఁ బ్రజలకు క్షేమంబుఁ గూర్పఁ పరమ
వివేకంబుఁ గోరి ప్రభు నడిగిన సొలొమోను ||ననుకరించెద||

6. యజమానుని కుష్ఠుఁ గాంచి స్వజనుల దేవుని గురించి నిజ సాక్ష్య
మిడి సన్మా నించిన హెబ్రీయ బాల ||ననుకరించెద||

7. అపవిత్ర రాజ భోజ నాదుల విడి దైవ పూజఁ గపట మింత లేక చేసి
ఘనత నొందిన దానియేలు ||ననుకరించెద||

8. ప్రార్థన కూటమునఁ జేరి ప్రత్యుత్తర మపుడె కోరి సార్ధకముగఁ బేతురుని
సమాచార మిడిన రొదే ||ననుకరించెద||

9. భక్తిభయములందుఁ బెరిగి బహు ప్రేదేశములను దిరిగి శక్తి కొలఁది
సంఘ పరి చర్య నొనర్చిన తిమోతి ||ననుకరించెద||`,keywords:["anukarinchedha","anukarincheda","anukarinchada","anukarenchedha","anukarinchedhaa","3/4"],video:"",artist:"Mallela Dhaveedhu",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"అపరాధిని యేసయ్య",lyrics:`1. అపరాధిని యేసయ్యా - కృపజూపి బ్రోవుమయ్యా (2)
నెపమెంచకయె నీ కృపలో - నపరాధములను క్షమించు (2)

2. సిలువకు నిను నే గొట్టి - తులువలతో జేరితిని (2)
కలుషంబులను మోపితిని - దోషుండ నేను ప్రభువా (2)

3. ప్రక్కలో బల్లెపుపోటు - గ్రక్కున పొడిచితి నేనే (2)
మిక్కిలి బాధించితిని - మక్కువ జూపితి వయ్యో (2)

4. ముళ్ళతో కిరీటంబు - నల్లి నీ శిరమున నిడితి (2)
నా వల్ల నేరమాయె - చల్లని దయగల తండ్రి (2)

5. దాహంబు గొనగా చేదు - చిరకను ద్రావ నిడితి (2)
ద్రోహుండనై జేసితినీ - దేహంబు గాయంబులను (2)

6. ఘోరంబుగా దూరితిని - నేరంబులను జేసితిని (2)
కండ్రుండనై గొట్టితిని - ఘోరంపు పాపిని దేవా (2)

7. చిందితి రక్తము నాకై - పొందిన దెబ్బల చేత (2)
అపనిందలు మోపితినయ్యో - సందేహమేలనయ్యా (2)

8.శిక్షకు పాత్రుడనయ్యా - రక్షణ దెచ్చితివయ్యా (2)
అక్షయ భాగ్యము నియ్య - మోక్షంబు జూపితివయ్యా (2)`,keywords:["aparaadhini yesayya","aparadhini yesayya","aparadhini yesayyaa","aparadini","aparadene","aparadhine","apparadhini","good friday","goodfriday","lent","holy communion","communion","4/4"],video:"https://youtu.be/eglqFuBC0eY",artist:"Siripurapu Krupanandam",genre:["Andhra Christian Hymn","Lent","Sin","Good Friday"],timeSignature:"4/4"},{id:l(),title:"అభిషేకమా ఆత్మాభిషేకమా",lyrics:`అభిషేకమా ఆత్మాభిషేకమా
నన్ను దీవింప నా పైకి దిగిరమ్మయ్యా

1. నీవు నలోనుండ నాకు భయమే లేదు 
నేను దావీదు వలెనుందును
గొల్యాతును పడగొట్టి జయమొందెదన్

2. నీవు నాలోనుండ నేను ఎలీషా వలె
యొర్ధానును విడగొట్టెదన్
ఎన్నో ఘనమైన కార్యములు చేయగలను

3. నీవు నలో నుండ నేను స్తెఫనువలె
ఆత్మ జ్ఞానముతో మాట్లాడెదన్
దేవ దూతల రూపములో మారిపోదును`,keywords:["abhishekama aathmabishekama","abishekama athmabishekama","jyothi raju","4/4"],video:"",artist:"Pastor M. Jyothi Raju",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అన్నీ తెలిసిన నీ చెంత",lyrics:`అన్నీ తెలిసిన నీ చెంత - లేదు నాకు ఏ చింత
ఆధారం నీవే యేసయ్యా...ఆనందం నీవే యేసయ్యా...
చింతపడను యేసయ్యా...దేని గూర్చియైనా
చెంత నీవుండగా - నా చెలిమిగా...                 

1. నీవే నా కాపరివై - కాపాడుచుండగా...
నీవే నాయకుడివై - నడిపించుచుండగా..
కొదువేమి లేదు - యేసయ్యా ...(ఎన్నడు...)
ఏం తక్కువ - కాలేదయ్యా...                     

2. నీవే నా జ్ఞానమై - బోధించుచుండగా...
నీవే నా వెలుగువై - త్రోవ చూపుచుండగా...
దారి తప్పిపోలేదయ్యా...(ఎన్నడు...)
క్షేమంగా - ఉన్నానయ్యా...                      

3. ఆశలను పుట్టించి - వాగ్దానాలను ఇచ్చి
నెరవేర్చు వరకు - విడువనన్న దేవా
నమ్మదగినవాడవు నీవయ్యా...(యేసయ్యా...)
కోటి స్తుతులు నీకేనయ్యా...`,keywords:["anni thelisina ni chentha","ani thelisina ni chenta","anni thelisina ni chentha"],video:"",artist:"K.Prathyusha Rani & Bro. JP Ramesh",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అయ్యా వందనాలు",lyrics:`అయ్యా వందనాలు అయ్యా వందనాలు 
అయ్యా వందనాలు నీకే  (2)

1. మృతతుల్యమైన శారా గర్భమును 
జీవింపచేసిన  నీకే
నీరీక్షణే లేని నా జీవితానికి ఆధారమైన నీకే (2)
ఆగిపోవచ్చయ్యా జీవితం ఎన్నో దినములు 
అయినా నీవిస్తవయ్య వాగ్దానా ఫలములు (2)   ||అయ్యా||

2. అవమానమేదురైనా అబ్రహాము బ్రతుకులో
ఆనందమిచ్చిన నీకే 
నమ్మదగిన దేవుడని  నీ వైపు చూచుటకు 
రీక్షణనిచ్చిన నీకే (2)
కోల్పో లేదయ్య జీవితం  నిన్నే చూడగా 
జరిగిస్తవయ్య కార్యములు ఆశ్చర్యరీతిగా (2)   ||అయ్యా||`,keywords:["ayya vandhanaalu","ayya vandhanalu","ayya vandalanu","aya vandanalu","ayya vandanaalu","ayya wandanaalu","worship","4/4"],video:"https://www.youtube.com/embed/DRSpEmfgPXY?start=1226",artist:"James Ezekiel",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"అర్హుడవు నీవే నీవే నా దేవా",lyrics:`అర్హుడవు నీవే నీవే నా దేవా
అర్హుడవు నీవే మా గొప్ప దేవా

నీ నామమందే మేము ఆనందింతుము
నీ దివ్య సన్నిధిలోనే ఆరాధింతుము  (2)

1. కృంగియున్న వేళల్లోన - భంగపడిన తావుల్లోన (2)
కంటిపాప రీతి నన్ను - కాచినట్టు యేసు నీవే (2)

2. దప్పిగొన్న జీవితాన - జీవజలము నిచ్చినావు (2)
దారితప్పినట్టి నాకు - ప్రేమ మార్గం చూపినావు (2)

3. రాజులకు రాజునీవే - ప్రభులకు ప్రభు నీవే (2)
రాజానాకు చాలిన వాడా - నిన్నె పోలిన వాడెలేడు (2)`,keywords:["arhudavu neeve","Arhudavu nive","Arhudav nive","Arhudavneeve","Arhudavuneeve","worship","4/4"],video:"",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"అలల పైనే నడచినా నాదు యేసయ్యా",lyrics:`అలల పైనే నడచినా నాదు యేసయ్యా- ఆదు కోవయ్యా ..(2)
గలిబిలిని నా కలవరములను - తొలగచేసిన కలుషహరుడా (2)
నాదు యేసయ్యా... ఆదు కోవయ్యా... నాదు యేసయ్యా

1. శుద్ధుడా నీ పిలుపు వింటిని - అద్దరికి నే పయన మైతిని (2)
ప్రొద్దుపోయెను భయము లాయెను - ఉద్ధరించగ స్వామి రావా
||ఆదు||

2. నట్టనడి సంద్రాన రేగెను- అట్టహాసపు పెనుతుఫాను (2)
గట్టుచూడగా చాల దూరము - ఇట్టి శ్రమలలో చిక్కు కొంటిని
||ఆదు||

3. అలలు నాపై విసరి కొట్టగా - నావ నిండుగా నీరు చేరెను (2)
బ్రతుకులెంతో భారమాయెను - రేవు చేరే దారి లేదా
||ఆదు||

4. మాట మాత్రపు సెలవు చేత - సూటిగా అద్భుతములెన్నో (2)
చాల చేసిన శక్తి మంతుడా - జాలి చూపి మమ్ము బ్రోవుమా
||ఆదు||

5. చిన్న జీవిత నావ నాది - నిన్నేగురిగా పయనమైతిని (2)
ఎన్నోశోధన లెన్నో భయములు - కన్నతండ్రి కానరావా 
||ఆదు||`,keywords:["alala paine nadachina naadhu yesayya","alala paine nadichina nadhu yesayya","ala la paine nadachina","alala payne nadachina","alala payne nadichina","alala painey nadachina"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అలలపైన నడచిన నా యేసు నాతో ఉన్నావు",lyrics:`అలలపైన నడచిన నా యేసు నాతో ఉన్నావు (2)
అంతులేని సాగరమునకు నాదు రేవు నీవేగా (2)

1. తుఫానులు చెలరేగిన పెను గాలుల్లెన్నొ వీచినా (2)
నావలో నీవుండగా (2)
జడియక సాగెదన్ నీ సేవల్కో ||అలలపైన||

2. నీదు వాగ్దాన పలుకులే నాదు జ్ఞానమై సదా (2)
నీవే నా నిరీక్షణై (2)
నిరంతరము నదుతుము నా రాజ ||అలలపైన||`,keywords:["alalapaina nadachina na yesu natho unnavu","alala paina nadachina naa yesu natho unnavu","alalapaina nadichina na yesu natho unnavu","alalapaina nadichina naa yesu natho unnavu","alala paina nadachena na yesu natho unnavu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అసాధ్యములు సాధ్యమే దేవ నీదు వాక్యముతో",lyrics:`Stanza: 1
అసాధ్యములు సాధ్యమే దేవ నీదు వాక్యముతో (2)
కధులును ప్రతి కొండైనను నీ వాకుతో
అలాలు నెమ్మది ఆయెను నీ మాటతో (2)

Chorus:
నీకే మహిమా నీకే ఘనత
నాలో అసధ్యము చేయు వానికే
నీకే మహిమా నీకే ఘనత
నాలో నివసించే నాధునకే (2)

నాకై నిలిచె యేసునకే
నాతో నడిచే యేసునాకే (2)

Stanza: 2
నే తలంచె తీర్మానముల్
నీ ప్రేమ తో సరిచేతివే (2)
నా భారమంతయు మోసితివే
నా స్థానములో నీవు బలయితివే (2)
||నీకే మహిమ||

Chorus:
నీకే మహిమ నీకే ఘనత
నాలో అసధ్యము చేయు వానికే
నీకే మహిమా నీకే ఘనత
నాలో నివసించే నాధునకే (2)

నాకై నిలిచె యేసునకే
నాతో నడిచే యేసునాకే (2)

Stanza: 3
నా సఖ్యము కాలేనిది
నీ హస్తముతో గెలిపించితివే(2)
నా త్రోవలో నేను తోట్రిల్లినన్
నే కరములతో నన్ను హత్తుకుంటివే(2)

Chorus:
నీకే మహిమా నీకే ఘనత
నాలో అసధ్యము చేయు వానికే
నీకే మహిమా, నీకే ఘనత
నాలో నివసించే నాధునకే (2)

నాకై నిలిచె యేసునకే
నాతో నడిచే యేసునాకే (2)`,keywords:["asadhyamulu saadhyame","Asadhyamulu sadhyame"],video:"",artist:"John Jebaraj, Allen Vamshi, Hepsiba Grace & Priyanjali",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అసాధ్యమైనది లేనే లేదు",lyrics:`అసాధ్యమైనది లేనే లేదు
నన్ను బలపరచువాడు నాతో ఉండగా (2)
ఊహించలేని ఆశ్చర్యక్రియలలో
నా దేవుడు నన్ను నడిపించును (2)

సాధ్యమే అన్ని సాధ్యమే
నా యేసు తోడైయుండగా (2)

1. శోధన శ్రమలు వచ్చినను
ఏ మాత్రము నేను వెనుతిరిగినను (2)
సత్య స్వరూపి సర్వోన్నతుడైన
గొప్ప దేవుడు నన్ను బలపరచును (2) ||సాధ్యమే||

2. సాతాను శక్తులు ఎదిరించిన
వాక్యమనే ఖడ్గముతో జయించెను (2)
సర్వశక్తుడు తన శక్తితో నింపి
సాతానుపై నాకు జయమిచ్చును (2) ||సాధ్యమే||`,keywords:["asadhya mainadhi leneleedhu","asadya mainadi leneledu","asaadhya mainadi leneledu","asadhyamainadhi leneledhu","asadhyamainadi leneledu","2/4"],video:"https://youtu.be/TtlkrIWJdVE",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"అసామానుడైన వాడు - అవమానపరచడునిన్ను",lyrics:`అసామానుడైన వాడు - అవమానపరచడు నిన్ను
ఓటమి ఎరుగనీ మన దేవుడు - ఒడిపోనివ్వడు నిన్ను 

ఘనకార్యాలెన్నో నీకై చేసినవాడు
కష్టకాలమందు నీ చేయి విడచునా 
అసాధ్యములెన్నో దాటించిన నాథుడు
శ్రమలో నిన్ను దాటిపోవునా

సియోను దేవుడే నిన్ను సిగ్గుపడనివ్వడు
కనికర పూర్ణుడే నీ కన్నీరు తుడచును

1. అగ్ని గుండాములో నెట్టివేసిన
సింహాల నోటికి నిన్ను అప్పగించిన 
శేత్రూవే నీ స్థితిచూసి అతిశేయ పడుచున్న 
సింహాలే నీ ఎదుటే మ్రింగివేయ నిలిచిన

నాకే ఎలా శ్రమలంటూ కృంగిపోకుమ
తేరిచూడు ఏసుని అగ్నిలో నిలిచెను నీకై  

శుత్రువు చేతికి నిను అప్పగించడు 
||సియోను దేవుడే||

2. పరిస్థితులన్నీ చేజారిపోయిన - 
ఎంతగానో శ్రేమపడిన ఫలితమే లేకున్నా 
అనుకున్నవన్నీ దూరమైపోయిన - 
మంచిరోజులొస్తాయనే నిరిక్షణే లేకున్నా

మారది తలరాతని దిగులుపడకుమా 
మారాను మధురముగా మార్చానునీకై

మేలులతో నిను తృప్తిపరచును 
||సియోను దేవుడే||

3. ఒంటరి పోరాటమే విసుగురేపిన 
పొందిన పిలుపే బారమైపోయిన 
ఆత్మీయులందరు అవమానిస్తున్న 
నమ్మదగినవారులేక నిరాశతో నిలిచిన

పిలుపునే విడచి మరలిపోకుమా
న్యాయాధిపతియే నాయకునిగా నిలుపును నిన్ను 

పిలిచిన దేవుడు నిను మరచిపోవునా
||సియోను దేవుడే||`,keywords:["asamaanudaina vaadu","asamanudaina vadu","Asamanudayna","asamaanudayna vaadu"],video:"",artist:"Pastor David Varma,  Sudhakar Rella, Bro. Chinny Savarapu ",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అంకితం ప్రభూ నా జీవితం",lyrics:`అంకితం ప్రభూ నా జీవితం - నీ చరణాల సేవకే అంకితమయ్యా  (2)
నీ సేవకై ఈ సమర్పణా - అంగీకరించుము నాదు రక్షకా  (2)

1. మోడుబారిన నా జీవితం - చిగురింపజేసావు దేవా
నిష్ఫలమైన నా జీవితం - ఫలియింపజేసావు ప్రభువా
నీ కృపలో బహుగా ఫలించుటకు - ఫలింపని వారికి ప్రకటించుటకు  (2)
అంగీకరించుము నా సమర్పణ ||అంకితం||

2. కారు చీకటి కాఠిన్య కడలిలో - నీ కాంతినిచ్చావు దేవా
చీకటిలోనున్న నా జీవితం - చిరుదివ్వెగా చేసావు ప్రభువా
నీ సన్నిధిలో ప్రకాశించుటకు - అంధకార ఛాయలను తొలగించుటకు  (2)
అంగీకరించుము నా సమర్పణ ||అంకితం ||`,keywords:["ankitam prabhu na jevitham","ankitham prabhu na jevitham","ankitam prabu na jevitam"],video:"",artist:"Sharon Philip",genre:["General","Surrender","Hope"],timeSignature:"6/8"},{id:l(),title:"అంచులనుండి జారేల – గిన్నెలు నిండి పోర్లేలా",lyrics:`అంచులనుండి జారేల – గిన్నెలు నిండి పోర్లేలా
ఆశీర్వదిస్తాడు యేసయ్యా (2)
విశ్వాసంతో ప్రార్ధన చేసిన – ఇచ్చేదాక ఓపిక పట్టిన (2)
మితిలేని తన సంపద నీదే – స్తుతియిస్తే పొందనిది లేదే (2) ||అంచుల||

1. లెక్కకు మించి కురియుచున్న – అద్భుతమైన దీవేనలకై (2)
స్తోత్ర గానము చేయు చున్నావా (2)
కృతజ్ఞత కలిగున్నావా (2) ||మితి||

2. శ్రమల నుండి అమరుచున్న – అబ్బురపరచే మేళ్ళ కొఱకై (2)
స్తోత్ర గానము చేయు చున్నావా (2)
కృతజ్ఞత కలిగున్నావా (2) ||మితి||

3. అపాయములను తప్పిస్తున్న – అదృశ్య దేవుని కాపుదాలకై (2)
స్తోత్ర గానము చేయు చున్నావా (2)
కృతజ్ఞత కలిగున్నావా (2) ||మితి||`,keywords:["anchulanundi jaarela","anchulanundi jarela","anchula nundi jaarela","stevenson","anchula nundi jarela"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అంత్య దినములయందు ఆత్మను",lyrics:`అంత్య దినములయందు ఆత్మను
మనుష్యులందరి మీద కుమ్మరించుమయా (2)
దేవా యవ్వనులకు దర్శనము
కలుగజేయుము (2) ||అంత్య||

కోతెంతో విస్తారము
కోసేడి వారు లేరు
యవ్వనులకు నీ పిలుపునిచ్చి
సేవకు తరలింపుము (2) ||దేవా||

సౌలు లాంటి యవ్వనులు
దమస్కు మార్గము వెళ్లుచుండగా (2)
నీ దర్శనము వారికిచ్చి
పౌలు వలె మార్చుము (2) ||దేవా||

సంసోను లాంటి యవ్వనులు
బలమును వ్యర్ధ పరచుచుండగా (2)
నీ ఆత్మ బలమును వారికిచ్చి
నీ దాసులుగా మార్చుము (2) ||దేవా||`,keywords:["anthya dhinamula yandhu","anthyadhinamulayandhu","antya dhinamula yandu"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"అంత్య దినమందు దూత బూర నూదు చుండగా",lyrics:`1. అంత్య దినమందు దూత
బూర నూదు చుండగా
నిత్యవాసరంబు తెల్లవారగా
రక్షణందుకొన్నవారి
పేళ్లు పిల్చుచుండగా
నేను కూడ చేరియుందునచ్చటన్

||నేను కూడ చేరియుందున్
నేను కూడ చేరియుందున్
నేను కూడ చేరియుందున్
నేను కూడ చేరి యుందు నచ్చ
టన్||

2. క్రీస్తునందు మృతులైన
వారు లేచి క్రీస్తుతో
పాలుపొందునట్టి యుదయంబునన్
భక్తులార కూడిరండి
యంచు బిల్చుచుండగా
నేను కూడ చేరియుందు నచ్చటన్

||నేను కూడ చేరియుందున్
నేను కూడ చేరియుందున్
నేను కూడ చేరియుందున్
నేను కూడ చేరి యుందు నచ్చ
టన్||

3. కాన యేసుసేవ ప్రత్య
హంబు చేయుచుండి నే
క్రీస్తునద్భుతంపు ప్రేమచాటున్
కృప నొందు వారి పేళ్లు
యేసు పిల్చుచుండగా
నేను కూడ చేరియుందునచ్చటన్

||నేను కూడ చేరియుందున్
నేను కూడ చేరియుందున్
నేను కూడ చేరియుందున్
నేను కూడ చేరి యుందు నచ్చటన్||`,keywords:["anthya dhinamandhu dhootha boora","antya dinamandu duta","anthya dhinamandu dhutha bora","anthya dinamandhu","funeral","Death"],video:"",artist:"",genre:["Funeral","General"],timeSignature:"4/4"},{id:l(),title:"అందరు నన్ను విడచినా - నీవు నన్ను విడువనంటివే",lyrics:`అందరు నన్ను విడచినా
నీవు నన్ను విడువనంటివే (2)
నా తల్లియు నీవే
నా తండ్రియు నీవే
నా తల్లి తండ్రి నీవే యేసయ్యా (2)

1. లోకము నన్ను విడచినా
నీవు నన్ను విడువనంటివే (2)
నా బంధువు నీవే
నా మిత్రుడ నీవే
నా బంధు మిత్రుడ నీవే యేసయ్యా (2)

2. వ్యాధులు నన్ను చుట్టినా
బాధలు నన్ను ముట్టినా (2)
నా కొండయు నీవే
నా కోటయు నీవే
నా కొండ కోట నీవే యేసయ్యా (2)

3. నేను నిన్ను నమ్ముకొంటిని
నీవు నన్ను విడువనంటివే (2)
నా తోడుయు నీవే
నా నీడయు నీవే
నా తోడు నీడ నీవే యేసయ్యా (2)`,keywords:["andharu nannu vidachina","andharu nanu vidachina","andharu nannu vidichina","andaru nannu vidachina"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"అందాలతార అరుదెంచె నాకై",lyrics:`అందాలతార అరుదెంచె నాకై అంబర వీధిలో
అవతారమూర్తి యేసయ్య కీర్తి అవని చాటుచున్
ఆనందసంద్ర ముప్పొంగె నాలో అమరకాంతిలో
ఆది దేవుని జూడ ఆశింప మనసు పయనమైతిని    ||అందాల తార||

1. విశ్వాసయాత్ర దూరమెంతైన విందుగా దోచెను
వింతైన శాంతి వర్షించె నాలో విజయపథమున
విశ్వాలనేలెడి దేవకుమారుని వీక్షించు దీక్షలో
విరజిమ్మె బలము ప్రవహించె ప్రేమ విశ్రాంతి నొసగుచున     ||అందాల తార||

2. యెరూషలేము రాజనగరిలో యేసును వెదకుచు
ఎరిగిన దారి తొలగిన వేళ ఎదలో కృంగితి
యేసయ్యతార ఎప్పటివోలె ఎదురాయె త్రోవలో
ఎంతో యబ్బురపడుచు విస్మయ మొందుచు ఏగితి స్వామి కడకు    ||అందాల తార||

3. ప్రభుజన్మస్ధలము పాకయేగాని పరలోక సౌధమే
బాలునిజూడ జీవితమెంత పావనమాయెను
ప్రభుపాదపూజ దీవెనకాగా ప్రసరించె పుణ్యము
బ్రతుకే మందిరమాయె అర్పణలే సిరులాయె ఫలియించె ప్రార్ధన   ||అందాల తార||`,keywords:["andhaala thaara","andhala thara","andhaalathaara","andhalathara","andala tara","andhala tara","andhala taara","andala thara","christmas","3/4"],video:"",artist:"Dr. A. B. Masilamani",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"3/4"},{id:l(),title:"అంబరానికి అంటేలా సంబరాలతో చాటాల",lyrics:`అంబరానికి అంటేలా సంబరాలతో చాటాల
యేసయ్య పుట్టాడని రక్షించవచ్చాడని

1. ప్రవచనాలు నెరవేరాయి శ్రమదినాలు ఇకపోయాయి (2)
విడుదల ప్రకటించే శిక్షను తప్పించే (2)

2. దివిజనాలు సమకురాయి ఘనస్వరాలు వినిపించాయి (2)
పరముకు నడిపించే మార్గము చూపించే (2)

3. సుమవనాలు పులకించాయి పరిమళాలు వెదజల్లాయి (2)
ఇలలో నశియించే జనులను ప్రేమించే (2)`,keywords:["ambaraniki antela","christmas","stevenson","ambaraaniki anteela sambaraalatho chaatala","ambaranike antela","ambaraanike antela"],video:"",artist:"Dr. A. R Stevenson",genre:["Christmas"],timeSignature:"6/8"}],ఆ:[{id:l(),title:"ఆకాశ వాసులారా యెహోవాను స్తుతియించుడీ",lyrics:`ఆకాశ వాసులారా యెహోవాను స్తుతియించుడీ
ఉన్నత స్థలముల నివాసులారా యెహోవాను స్తుతియించుడీ...హల్లెలూయ 

1. ఆయన దూతలారా మరియు ఆయన సైన్యములారా
సూర్య చంద్ర తారలారా యెహోవాను
స్తుతియించుడీ...హల్లెలూయ

2.సమస్త భుజనులారా మరియు జనముల అధిపతులారా
వృద్దులు బాలురు యవ్వనులారా యెహోవాను
స్తుతియించుడీ...హల్లెలూయ`,keywords:["aakasa vaasulaara","aakasavasulara","Aakaasavaasulaara","aakaasa vaasulaara","aakasa vasulara","akasa vasulara","4/4","worship"],video:"",artist:"",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"ఆగని పరుగులో ఎండిన ఎడారులు",lyrics:`ఆగని పరుగులో ఎండిన ఎడారులు 
కృంగిన బ్రతుకులో నిండిన కొరతలు 

ఉన్నపాటునా నలిగె నా వైపునా 
కదలిరాలేవా ఆదరించగ రావా 

కన్నీరే నా మజిలీ, దరి చేరే నీ జాలి 
లాలించే నీ ప్రేమ, నా ప్రాణమై 

కరుణించే నీ చూపు, మన్నించే నా మనవి
అందించే నీ చేయి, నా స్నేహమై 

1. లోకప్రేమే సదా - కలల కడలే కదా 
తరంగమై కావుమా - తిరిగి తీరమునకు  (2)

నీవే కదా ఆధారం
సదా నీకే దాసోహం 

యేసయా ... అర్పించెదా - నా జీవితం

2. ఎదుట నిలిచే నీవే - ప్రేమకు రూపం నీవే 
కృపామయా కావుమా - జార విడువకు నన్ను   (2)

నీవే కదా నా మూలం   
సదా నీపై నా భారం 

యేసయా ... ప్రేమించెదా - కలకాలము`,keywords:["aagani parugulo yendina yedaarulu","aagani parugulo endina edarulo","agani parugulo endina edaruloo"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Anwesshaa",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆగిపోదు నా పాట - గమ్యం చేరేదాక",lyrics:`ఆగిపోదు నా పాట - గమ్యం చేరేదాక
సాగుతుంది ప్రతిపూట - నా పరుగు ముగిసేదాక

1. లోకాశలు లాగినా వెనుదిరిగి చూడను
అలసటతో జోగినా శృతి తగ్గనీయను
ఎదురైన అవరోధం యేసే తొలగించును
స్థిరమైన విశ్వాసం నాలో కలిగించును

2. నా అడుగు జారినా కలవరము చెందను
నా బలము పోయినా లయ తగ్గనీయను
ఎదురైన అవరోధం యేసే తొలగించును
స్థిరమైన విశ్వాసం నాలో కలిగించును

3. శత్రువు ఎదురొచ్చిన ధైర్యమును వీడను
మిత్రులు నను గుచ్చినా శ్రావ్యత పొనీయను
ఎదురైన అవరోధం యేసే తొలగించును
స్థిరమైన విశ్వాసం నాలో కలిగించును`,keywords:["aagipoodhu na paata","agipodu na pata","agipodu napata","aagipodhu naa paata","stevenson"],video:"",artist:"Dr. A. R Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆ జాలి ప్రేమను",lyrics:`ఆ జాలి ప్రేమను గమనింపకుందువా?
ఆ దివ్య ప్రేమను గ్రహియింపకుందువా?
ఓ సోదరా... ఓ సోదరా... ఆ ప్రేమమూర్తి యేసు దరిచేరవా?

1. నీ పాప జీవితాన ఆ ప్రేమమూర్తియే
ఆ సిల్వపైన నీకై మరణ బాధ నొందెను
నీ శిక్ష బాపగా రక్షణను చూపగా
ని హృదయ ద్వారమందు వేచియుండగా
నీ రక్షకుండు యేసు నిన్ను పిలచుచుండెను
ఆ ప్రేమమూర్తి పలుకు ఆలకింపజాలవా?

2. ఎంత పాపినైనా గాని యేసు చేర రమ్మనె
యేసు చెంత చేరువాని త్రోసివేయజాలడు
నీ పాప జీవితం ప్రభుయేసు మార్చగా
నీ చెంత చేరి నిన్ను పిలచుచుండెను
విలువైన రక్త ధార ప్రేమతోడ గార్చెను
ఆ ప్రేమ మూర్తి పిలుపు ఆలకింపజాలవా?`,keywords:["aajaali premanu","aajaali preemanu","aa jaali premanu","aa jali premanu","a jali premanu","aa jaali preemanu","aajali premanu","aajale premanu","raj prakash paul","rajprakashpaul","4/4"],video:"https://www.youtube.com/embed/q9JTtJWpMmg?start=546",artist:"Raj Prakash Paul",genre:["Love","General","Sin","Redemption"],timeSignature:"4/4"},{id:l(),title:"ఆత్మా నడుపు సత్యము లోని కిపుడే",lyrics:`ఆత్మా నడుపు స-త్యము లోని కిపుడే యాత్మా నడుపు
ఆత్మా నీ సాయంబు నధికంబుగా నిచ్చి ఆత్మానందముతో
దై వారాధనమున ||కాత్మా||

1. ఘోర కలుషంబుల దూరంబుగాఁ దోలి పారమార్థిక బుద్ధి గోరు నట్టులను ||ఆత్మా||

2. అంధత్వంబు వలన మందమైయుండు మా డెందంబు లెల్ల నీ యందు వెలుగుటకు ||ఆత్మా||

3. నిర్మల హృదయంబు నిరతంబు మా కిచ్చి కూర్మిన్ నీ వరముల గూర్చి దీవించి ||ఆత్మా||

4. సకల మానవులతో అకలంక శుభవార్త బ్రకటించు బలజ్ఞాన నిక రంబు నిచ్చి ||ఆత్మా||

5. దీవించి పంపు మో దైవాత్మా మమ్మును భావజ్ఞాన మొసంగి ప్రభు సేవలోన ||ఆత్మా||`,keywords:["aathma nadupu sathyamu looni","aathma nadupu","athma nadupu sathyamu","atma nadupu","andhra christian hymn","7/8"],video:"",artist:"Thalluri Kornelius",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"ఆధారం నీవేనయ్యా నాకు ఆధారం నీవేనయ్యా",lyrics:`ఆధారం నీవేనయ్యా
నాకు ఆధారం నీవేనయ్యా(2)

కాలం మారినా కష్టాలు తీరినా కారణం నీవేనయ్యా (2)
||ఆధారం||

1. నీ దీప స్థంభమై నేను జీవించ చిరకాల ఆశ (2)
నీ దరికి చేరి నను నీకర్పించి సాక్షిగ జీవింతును (2) 
||ఆధారం||

2. నీ రాయబారినై నేను ధైర్యంగా జీవించ ఆశ (2)
నిస్వార్ధముగనూ త్యాగముతోనూనిను నేను ప్రకటింతును (2) 
||ఆధారం||`,keywords:["aadharam neevenayya","aadharam nevenayya","adharam nevenayya","adhaaram nevenayya","aadhaaram neevenayya","adharam nivenayya","aadharam niveneyya","aadharam nivenaya","adaram nevenaya","Adaram nivenaya"],video:"",artist:"",genre:["General","Hope"],timeSignature:"4/4"},{id:l(),title:"ఆధారమా నా యేసయ్య ఆలించుమా నా ప్రార్ధన",lyrics:`ఆధారమా నా యేసయ్య 
ఆలించుమా నా ప్రార్ధన 
మదిలోని ప్రతి భారం - మనసార పాడే  మౌన గీతం 
నీకే ఆలాపన - ప్రియమైన ఆరాధన 

1. ఏది గెలుపు - ఏది మలుపు 
తలచి చూడ - నిదుర రాదే 

ఓటమైన - ఒంటరైన 
కరుణ చూపి - నడిపినావు 

వ్యధలలోన - విసిగిపోయి - పాదములనే చేరగా 
స్థితిని చూచి - స్తుతిగ మార్చి - దీవెనలతో నింపవా 
దీవెనలతో నింపవా 

2. నీదు వదనం - కాంతి కిరణం 
కనులలోని - ప్రేమ మధురం 

ఎదురు చూసే - జీవ గమనం 
బదులు పంపే   - సిలువ రుధిరం 

కడలిలోన - కరముచాపి  -  ఆదరించే   దైవమా 
దీనురాలి - దరికిచేరి -  దీవెనలతో నింపవా 
దీవెనలతో నింపవా`,keywords:["aadhaarama naa yesayya","adharama na yesayya","aadharama na yesayya","aadaarama na yesayya","aadarama na yesayya","adarama na yesaya","aadharama nayesayya"],video:"",artist:"Bro. Joshua Shaik, Pranam Kamlakhar, & Deva Priya",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆనందగీతం నే పాడెద క్రిస్మస్ శుభవేళలో",lyrics:`ఆనందగీతం నే పాడెద క్రిస్మస్ శుభవేళలో 
సంతోషముగ నే కీర్తించెద  క్రీస్తేసుని సన్నిధిలో

దూతల స్త్రోత్రాలతో గొల్లల నాట్యాలతో 
పుడమే పులకించెను రక్షకుడే జన్మించెను
||ఆనందగీతం|| 

1. ప్రభువొచ్చెను నరుడైపుట్టేను రక్షకుడు జన్మించెను
మనపాపభారం తొలగింపను ఈ భువికే దిగి వచ్చెను

దూతల స్త్రోత్రాలతో గొల్లల నాట్యాలతో 
పుడమే పులకించెను రక్షకుడే జన్మించెను
||ఆనందగీతం|| 

2. దర్శించిరి పూజించిరి  జ్ఞానులు కీర్తించిరి
బంగారు సాంబ్రాణి బోళములు ప్రభుయేసున కర్పించిరి

దూతల స్త్రోత్రాలతో గొల్లల నాట్యాలతో 
పుడమే పులకించెను రక్షకుడే జన్మించెను
||ఆనందగీతం|| 

3. జన్మించెను మనల రక్షింపను రారాజు జన్మించెను
కన్యక గర్భాన ప్రభుపుట్టెను  ప్రవచనమే నెరవేరెను

దూతల స్త్రోత్రాలతో గొల్లల నాట్యాలతో 
పుడమే పులకించెను రక్షకుడే జన్మించెను
||ఆనందగీతం||`,keywords:["aanandha geethamu ney paadedha","anandha geetham nee padedha","christmas","aanandha githamu ney padedha"],video:"",artist:"Suresh Nittala, J.K.Christopher, Sharon Philip, Lillian Christopher, Hana Joyce ( Sharon Sisters)",genre:["Christmas"],timeSignature:"2/4"},{id:l(),title:"ఆనందధ్వని చేసెదం ఆర్భాటముతో సాగెదం",lyrics:`ఆనందధ్వని చేసెదం ఆర్భాటముతో సాగెదం
సైన్యములకు అధిపతియైన యోహావ మన పక్షము
మన బలముగా - కోటగా నిలుచును
ఏ అపాయం రాకుండా కాపాడును
'హోసన్నా జయం ఎల్లవేళల విజయమే
హోసన్నా జయం ఘనపరచెద రారాజునే'

1.శ్రమలన్నిటిలో విడిపించి గొప్పచేయును
తన రక్షణ మనకు చూపించి స్థిరపరచును
యెహోవా మహిమ మనపై ఉదయించెను
వెలిగెదం యేసుకై ప్రకాశించెదం

2.పరిశుద్ద పట్టణమున మనలను చేర్చుటకు
పరిశుద్దుడైన యేసు - తిరిగి రానైయుండెను
పవిత్ర జీవితం పరిశుద్ధాత్మను కలిగి
బ్రతికెదం నిరీక్షణతో సాగెదం`,keywords:["aanandha dhwani chesedham","anandha dwani chesedham","palm sunday","anandha dwani chesedham"],video:"",artist:"JK Christopher, Lillyan Christopher ",genre:["Palm Sunday","General"],timeSignature:"2/4"},{id:l(),title:"ఆనందమే సంతోషమే",lyrics:`ఆనందమే సంతోషమే - ఈ కలయిక ప్రభుచిత్తమే 
సప్త స్వరాలతో - నినుగూర్చి పాడెదను
సంగీత నాదముతో నీ మహిమను చాటెదను
దేవా రావయ్యా - నీ దీవెనలీవయ్యా

1. _______ వరుడుగా విచ్చేసిన శుభవేళ
_______ వధువుగా కనిపించె తన జతగా (2)
నీ ప్రేమలో నీ దయ లో నీ కృప లో వర్ధిల్లజేయుము (2)
దేవారావయ్య నీ దీవెనలీవయ్యా

2. పరిమళ సువాసనతో సతతము నీ సేవకై
సిలువ సాక్షులుగా నడిపించు ఇలలోన (2)
నీ ప్రేమలో నీ దయ లో నీ కృప లో వర్ధిల్లజేయుము (2)
దేవారావయ్య నీ దీవెనలీవయ్యా`,keywords:["ఆనందమే సంతోషమే","దేవా రావయ్యా నీ దీవెనలీవయ్యా","marriage","aanandhame santhoshame","anandame santoshame","deva ravayya ni devenalivayya"],video:"",artist:"",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"ఆనంద మగు ముక్తి",lyrics:`1.ఆనంద మగు ముక్తి యే నా మందిరము
జ్ఞాని మానుగ జూచు దాని సుందరము ||ఆనందమగు||

2.పరదేశివలె దేహ వరణమం దుందున్ ధరణి కాననముగా దర్శించు చుందున్ నెరి
దుఃఖసుఖములు సరిగా భావింతున్ పరిశుద్ధాత్ముని వే డి పరితృప్తి నుండు ||నానంద మగు||

3.బహు శోధనలు నాపై బడి వచ్చునపుడు నహితాంధతమము న న్నడ్డుకొన్నపుడు
నిహబాధ లన్నిన న్నెదిరించినపుడు నహహ యేసునివల్ల నమృతుడ నెపుడు ||నానంద మగు||

4.ముందు నా మనసు దేవుని కప్పగింతు నందరి నస్మత్తు లయముగా ప్రేమింతున్
సందేహ రాహిత్య సరణిలో నిల్తు పొంద బోయెడి ముక్తి భువి యందె గాంతు ||నానంద మగు||`,keywords:["aanandha magu mukthi","aanandhammagu mukthi","anandham magu mukthi","7/8"],video:"",artist:"Purushotham Chowdary",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"ఆనంద యాత్ర ఇది ఆత్మీయ యాత్ర",lyrics:`ఆనంద యాత్ర
ఇది ఆత్మీయ యాత్ర
యేసుతో నూతన
యెరుషలేము యాత్ర (2) ||ఆనంద యాత్ర||

1. యేసుని రక్తము
పాపములనుండి విడిపించును
వేయి నోళ్ళతో స్తుతించినను
తీర్చలేము ఆ ఋణమును ||ఆనంద యాత్ర||

2. రాత్రియు పగలును
పాదములకు రాయి తగలకుండా
మనకు పరిచర్య చేయుట కొరకు
దేవదూతలు మనకుండగా ||ఆనంద యాత్ర||

3. కృతజ్ఞత లేని వారు
వేలకొలదిగ కూలినను
కృపా వాక్యమునకు సాక్షులమై
కృప వెంబడి కృప పొందెదము ||ఆనంద యాత్ర||

4. ఆనందం ఆనందం
యేసుని చూచే క్షణం ఆసన్నం
ఆత్మానంద భరితులమై
ఆగమనాకాంక్షతో సాగెదన్ ||ఆనంద యాత్ర||`,keywords:["aanandha yathra","anandha yatra","aananda yathra","aananda yatra","aanandha yaathra","aananda yathra","anandha yatra","anandha yathra","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"ఆనందం ఆనందమాయెగా",lyrics:`ఆనందం ఆనందమాయెగా - నా యేసుని కార్యములు
సంతోషం సంతోషం కల్గెగ - నా ప్రియుని మేలులకై (2)

ఈ సమయం శుభ సమయం
ఈ దినము పర్వ దినం (2)

ఆహా హల్లెలూయ ఆహా హల్లెలూయ
ఓహో హోసన్న ఓహో హోసన్న (2)

1. కఠినమైన శిల మనస్సునుండి
అంతులేని దొంగ ఊబి నుండి
కురచకాని తన హస్తము చాపి చేయూతనిచ్చాడు
తిరిగి జీవము నొసగాడు (2) ||ఈ సమయం...||

2. మరుగు కాని పట్టణముకు నన్ను
చేయి పట్టి ఎక్కించాడు
పరిశుద్ధులుండు పురములో నన్ను స్థిరముగా నిలిపాడు
నన్ను ఆనందింప చేసాడు (2) ||ఈ సమయం...||`,keywords:["aanandham aanandhamaayega","aanandham aanandham aayega","anandham anandham aayega","anandhamanandhamaayega","aanandam aanandam aayega","aanandamaanandam"],video:"",artist:"",genre:["General","Strength Giver"],timeSignature:"2/4"},{id:l(),title:"ఆనందము ఆద్యంతము",lyrics:`ఆనందము ఆద్యంతము   
నీతో నామది సంబంధము

ఆశ్చర్యము అసమానము  
ఈ దీనునికై నీవిచ్చిన స్థానము

నా తోడుగా యేసు నీవుండగా 
నా హృదయమునకు భద్రత నిండుగా
నీ సన్నిధి నా ముందుండగా  
అతిశయించి నే పరవశము పొందగా

1. ఈ లోకము నా దేహము  
నన్నెంతగానో నిష్ఫలుని చేసెను
మతిమాలిన  క్రియలన్నియూ  
మృతమైన స్థితికి నను మార్చెను 

నా యేసు నాధా నీ స్నేహము  
తొలగించె నా శాపకర మార్గము 
జవ జీవమంతా జత చేయుచూ  
జయ కేతనముగా నను మార్చెను 

2. వెలిగింపు లేక జ్ఞానిని కాగలనా  
వివరంబు లేక గ్రహియింప తరమా
తరుణంబు లేక వరమొందగలనా 
నడిపింపు లేక గురి చేరగలనా 

నీ సన్నిధి నను నిల్పుచూ  
ఈవులన్నియూ దానమీయుచూ 
నెమ్మదంతయూ మనసున నిండ  
మరువనుగా అందిన సాయము నీవలన`,keywords:["aanandhamu adhyanthamu","aanandam adhyanthamu"],video:"",artist:"Kishore Kathula, Jeeva R. Pakerla, Febin Chacko",genre:["General"],timeSignature:"3/4"},{id:l(),title:"ఆనందం పొంగిందీ - అపరాధం పోయింది",lyrics:`ఆనందం పొంగిందీ - అపరాధం పోయింది
జీవితం మొదలైంది - ఈ అనుభవము నాలో
రక్షణ ఆనందం - శ్రీ యేసు నీ జననం
తీయని అనురాగం - నీతోనే నా పయనం
ఊహించిన వివరించిన - సరపోదయ్యా

1. చీకటి ఆవరించే నెమ్మదిలేక 
కలవరమాయె నీవు లేక
నా హృదయంలో జన్మించిన క్షణం 
పగలు రేయి పరవశిస్తున్న ప్రతీదినం
కనుల పండుగ గుండె నిండుగా

2. ఎదురు చూసాను గమ్యం లేక 
నీవొస్తావని చిన్ని కోరిక
దిగివచ్చావు శరీరదారియై 
తరియించింది మానవాళి ఏకమై
నీ జన్మము సమాధానము`,keywords:["aanandham pongindhi","anandam pongindi","aanandham pongindhe","anandham pongindhi","aanandam pongindhi","christmas"],video:"",artist:"Bro Chinbab (Paul Jaykumar Devarapalli), JK Christopher,  & Lillian Christopher",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"ఆనందం నీలోనే",lyrics:`ఆనందం నీలోనే – ఆధారం నీవేగా
ఆశ్రయం నీలోనే – నా యేసయ్యా – స్తోత్రార్హుడు
అర్హతేలేని నన్ను – ప్రేమించినావు
జీవింతు ఇలలో – నీ కోసమే – సాక్ష్యార్థమై    ||ఆనందం||

1. పదే పదే నిన్నే చేరగా
ప్రతిక్షణం నీవే ధ్యాసగా (2)
కలవరాల కోటలో – కన్నీటి బాటలో (2)
కాపాడే కవచంగా – నన్ను ఆవరించిన
దివ్యక్షేత్రమా – స్తోత్రగీతమా    ||ఆనందం||

2. నిరంతరం నీవే వెలుగని
నిత్యమైన స్వాస్థ్యం నీదని (2)
నీ సన్నిధి వీడక – సన్నుతించి పాడనా (2)
నీకొరకే ధ్వజమెత్తి నిన్న ప్రకటించనా
సత్యవాక్యమే – జీవవాక్యమే    ||ఆనందం||

3. సర్వసత్యమే నా మార్గమై
సంఘక్షేమమే నా ప్రాణమై (2)
లోక మహిమ చూడక – నీ జాడలు వీడక (2)
నీతోనే నిలవాలి నిత్య సీయోనులో
ఈ దర్శనం – నా ఆశయం    ||ఆనందం||`,keywords:["aanandham nilone","anandham nilone","aanandham nelone","aanandham neelone","aanandham neeloney","aanandam nilone","aanandam neelone","aanandam nelone","aanandamu nilone","aanandm nilone","hosanna ministries","john wesly"],video:"",artist:"Hosanna Ministries",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆపత్కాలమున తన పర్ణశాలలో దాచెను",lyrics:`ఆపత్కాలమున తన పర్ణశాలలో దాచెను
తన గుడారపు మాటున నన్ను దాచెను
ఆశ్రయ దుర్గముపై నన్ను ఎక్కించెను

యెహోవా నా ప్రాణ దుర్గము
నేను ఎవరికి వెరతును
నా చేయి విడువని దేవుడుండగా
నేను భయపడను

1. ఇహలోక దుఃఖ బాధలలో
నీవు నాతో ఉన్నావు
ముదిమి వచ్చువరకు నన్ను
ఎత్తుకొనే దేవుడవు
నీవుగాక వేరే ఆశ నాకు లేనేలేదు

నిత్యము నీ పై ఆనుకొని
నిశ్చింతగా సాగేదన్
ఆ...హల్లెలూయ....ఆ హల్లెలూయ....ఆ హల్లెలూయ....ఆ...ఆ...ఆ  హల్లెలూయ

2. లెక్కించలేని అధ్భుతములు
మక్కువతో చేసిన దేవా
నీవు చేసిన కార్యములకై నేను
ఏమి అర్పింతును స్వచ్ఛమైన
నిత్య ప్రేమను నా పై చూపినదేవుడవు
కొట్లా కొలది స్తోత్రములు నిరతము నీకే ప్రభువా
ఆ...హల్లెలూయ....ఆ హల్లెలూయ....ఆ హల్లెలూయ....ఆ...ఆ...ఆ  హల్లెలూయ`,keywords:["aapathkalamuna","aapath kalamuna","Aapatkalamuna","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"ఆయనే నా సంగీతము",lyrics:`ఆయనే నా సంగీతము బలమైన కోటయును
జీవాధిపతియు ఆయనే
జీవిత కాలమెల్ల స్తుతించెదము ||ఆయనే||

1. స్తుతుల మధ్యలో నివాసం చేసి
దూతలెల్ల పొగడే దేవుడాయనే (2)
వేడుచుండు భక్తుల స్వరము విని
దిక్కు లేని పిల్లలకు దేవుడాయనే (2) ||ఆయనే||

2. ఇద్దరు ముగ్గురు నా నామమున
ఏకీభవించిన వారి మధ్యలోన (2)
ఉండెదననిన మన దేవుని
కరములు తట్టి నిత్యం స్తుతించెదము (2) ||ఆయనే||

3. సృష్టికర్త క్రీస్తు యేసు నామమున
జీవిత కాలమెల్ల కీర్తించెదము (2)
రాకడలో ప్రభుతో నిత్యముందుము
మ్రొక్కెదము స్తుతించెదం పొగడెదము (2) ||ఆయనే||`,keywords:["aayane na sangeethamu","ayane na sangetam","ayanena sangethamu","aayanenasangethamu","aayaney naa","sangeethamu","sangeetamu"],video:"",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"ఆరాధనకు అర్హుడా (అర్హుడా)",lyrics:`ఆరాధనకు అర్హుడా  
నీకే నా  ఆరాధన 
స్తుతులపై  ఆసీనుడా  
నీకే  నా  స్తుతి  కీర్తన 

Pre-Chorus  1 
మహిమ  ఘనత  ప్రభావములకు  యోగ్యుడా 

Chorus 
ఆరాధన  ఆరాధన  నీకే 
హల్లెలూయా హల్లెలూయా నీకే 

Verse 2
విరిగిన  మనసును  నీ  బలిపీఠముపై 
పరిమిళముగా  అర్పింతును 
సిలువనెత్తుకొని  నన్ను  నే  ఉపేక్షించి 
వెనుతిరుగక  వెంబడింతును 

Pre-Chorus  2
నా  శరీరమును  సజీవ  యాగముగా అర్పింతును 

Chorus 
ఆరాధన  ఆరాధన  నీకే 
హల్లెలూయా హల్లెలూయా నీకే 

Verse  3
అలలెన్నో  నా పైకి  ఎగిసినను 
శత్రువులే  నన్ను  చుట్టినను  
బలమంతా  నాలో  క్షీణించినను 
విశ్వాసమే  నాలో  కొదువైనను  

Pre-Chorus 3     
ఆరాధనే  నా  ఆయుధమై  జయింతును 

Chorus  
ఆరాధన  ఆరాధన  నీకే 
హల్లెలూయా హల్లెలూయా నీకే 

Bridge  1
సిలువకై పునరుత్థానికై 
నా  విమోచనకై  ఆరాధన  
నీ  మేలులకై  విశ్వాస్యతకై 
శాశ్వత  ప్రేమకై  ఆరాధన 

Bridge 2
పరిశుద్ధుడా  గొఱ్ఱెపిల్ల 
యూదా  సింహమా  నీకే  ఆరాధన   

Chorus
ఆరాధన  ఆరాధన  నీకే 
హల్లెలూయా హల్లెలూయా నీకే`,keywords:["aaradhanaku arhuda","aradhanaku arhuda","aaradanaku arhuda","aradanaku arhuda","Worship"],video:"",artist:"Vijay Kondapuram, Allen Ganta, Anu Samuel, Jonathan Wesley",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"ఆరాధనకు యోగ్యుడా",lyrics:`ఆరాధనకు యోగ్యుడా నిత్యము స్తుతియించెదను
నీ మేలులను మరువకనే ఎల్లప్పుడు స్తుతి పాడెదను (2)
ఆరాధన ఆరాధన (2)
నీ మేలులకై ఆరాధన – నీ దీవెనకై ఆరాధన (2)
ఆరాధన ఆరాధన (2)

1. దినమెల్ల నీ చేతులు చాపి
నీ కౌగిలిలో కాపాడుచుంటివే (2)
నీ ప్రేమ నీ జాలి నీ కరుణకై
నా పూర్ణ హృదయముతో సన్నుతింతును (2)
ఆరాధన ఆరాధన (2)
నీ ప్రేమకై ఆరాధన – నీ జాలికై ఆరాధన (2)
ఆరాధన ఆరాధన (2) 

2. ధనవంతులుగా చేయుటకు
దారిద్య్రత ననుభవించినావు (2)
హెచ్చించి ఘనపరచిన నిర్మలాత్ముడా
పూర్ణాత్మ మనస్సుతో కొనియాడెదను (2)
ఆరాధన ఆరాధన (2)
నీ కృప కొరకై ఆరాధన – ఈ స్థితి కొరకై ఆరాధన (2)
ఆరాధన ఆరాధన (2) ||ఆరాధనకు||`,keywords:["aaradhanaku yogyuda","Aaradanaku yogyudaa","aradhanaku  yogyuda","aradanaku yogyuda","aaradhana ku yogyuda","aaradanaku yoogyuda","worship","3/4"],video:"",artist:"Pastor Jyothi Raju",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"ఆరాధనా ఆరాధనా – ఆత్మతో ఆరాధనా",lyrics:`ఆరాధనా ఆరాధనా – ఆత్మతో ఆరాధనా
ఆరాధనా ఆరాధనా – కృతజ్ఞత స్తుతి ప్రార్ధనా (2)
నీకే నా దేవా – తండ్రీ అందుకోవా (2)         ||ఆరాధనా||

1. అన్నిటికీ ఆధారమైనవాడా – నీకే ఆరాధనా (2)
ఎన్నటికీ మారని మంచివాడా
కృతజ్ఞత స్తుతి ప్రార్ధనా (2)      ||నీకే||

2. నోటను కపటము లేనివాడా – నీకే ఆరాధనా (2)
మాటతో మహిమలు చేయువాడా
కృతజ్ఞత స్తుతి ప్రార్ధనా (2)      ||నీకే||

3. అంతయు వ్యాపించియున్నవాడా – నీకే ఆరాధనా (2)
చింతలు తీర్చేటి గొప్పవాడా
కృతజ్ఞత స్తుతి ప్రార్ధనా (2)      ||నీకే||`,keywords:["aaradhana aaradhana","aradana aradana","aaradana aaradana","araadhana araadhana","worship","aaraadhana aaraadhana","stevenson"],video:"",artist:"Dr. A.R Stevenson",genre:["Worship","General"],timeSignature:"3/4"},{id:l(),title:"ఆరాధన యేసు నీకే",lyrics:`ఆరాధన యేసు నీకే – ఆరాధన యేసు నీకే
నీ చిత్తమునే చేసేద – నీ మార్గములో నడిచెద
నీ సన్నిధిలోనే నిలచెద – నిను వెంబడించెద (2)
ఆరాధన యేసు నీకే – ఆరాధన యేసు నీకే (2)

1. నీటిపైన నడచిన నీ అద్భుత పాదముల్
చూచు నే నడచెద – అన్ని వేళలా (2) ||ఆరాధన యేసు||

2. గాలి నీరు అగ్నియు – నీ అద్భుత మాటకు
లోబడుచునే ఉన్నవి – అన్నివేళలా (2) ||ఆరాధన యేసు||`,keywords:["aaradhana yesunike","aaradana yesuneke","aradhana yesunike","aradana yesu neeke","aaradana yesu nike","aaradhanayesu","aradhanayesu","aaradanayesu","aaraadhana yesu","aaraadhanayesu","aaradana eesu nike","aradana esu nike","nee chithamune chesedha","ni chithamu ney chesedha","ni chithamu ne chesedha","nee chithamu ney chesedha","nee chithamune cheseda","worship","4/4"],video:"https://www.youtube.com/embed/mmhJWYp_DlM?start=1079",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"ఆరాధన స్తుతి ఆరాధన",lyrics:`ఆరాధన స్తుతి ఆరాధన  (4)
నీవంటి వారు ఒక్కరును లేరు - నీవే అతి శ్రేష్టుడా
దూత గణములు నిత్యము కొలిచే - నీవే పరిశుద్దుడా
నిన్నా నేడు మారని

ఆరాధన స్తుతి ఆరాధన  (4)

అబ్రహాము ఇస్సాకును బలి ఇచ్చినారాధన
రాళ్ళతో చంపబడిన స్తెఫను వలె ఆరాధన  (2)

ఆరాధన స్తుతి ఆరాధన  (4)

1. పదివేలలోన అతి సుందరుడా - నీకే ఆరాధన
ఇహ పరములోన ఆకాంక్షనీయుడా - నీకు సాటెవ్వరు
నిన్నా నేడు మారని

ఆరాధన స్తుతి ఆరాధన  (4)

2. దానియేలు సింహపు బోనులో చేసిన ఆరాధన
వీధులలో నాట్యమాడిన దావీదు ఆరాధన  (2)

ఆరాధన స్తుతి ఆరాధన  (4)

3. నీవంటి వారు ఒక్కరును లేరు - నీవే అతి శ్రేష్టుడా
దూత గణములు నిత్యము కొలిచే - నీవే పరిశుద్దుడా
నిన్నా నేడు మారని

ఆరాధన స్తుతి ఆరాధన  (4)`,keywords:["aaradhana sthuthi aaradhana","aaradana sthuthi aaradhana","aradhana sthuthi aradhana","aradana stuti aradana"],video:"https://www.youtube.com/embed/mmhJWYp_DlM?start=1079",artist:"Ravinder Vottepu",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"ఆరాధించెదం ఆర్భాటించెదం",lyrics:`ఆరాధించెదం ఆర్భాటించెదం – యేసుని సన్నిధిలో
ఆనందించెదం మరల ఆనందించెదం – దేవుని సన్నిధిలో
సాయంకాల నైవేద్యము వలె చేతులెత్తి స్తుతియించెదం
జిహ్వా ఫలము ప్రభుకర్పించి స్తుతి గీతము పాడెదము
యేసయ్యా యేసయ్యా పరిశుద్ధుడవు నీవేనయ్యా
యేసయ్యా యేసయ్యా స్తుతులకు అర్హుడ నీవేనయ్యా

1. యెరికో కోట గోడలన్ని కూలిపోయే – కాలిపోయే
ఇశ్రాయేలు ప్రజలంతా కూడి ఆరాధించగా – ఆర్భాటించగా
స్తుతులపై ఆసీనుడా యేసయ్యా
మా ప్రార్ధనలు ఆలకించువాడా
స్తుతియాగము చేయు వాడే
నిన్ను మహిమ పరచు వాడు ||యేసయ్యా||

2. యూదా దేశము మీదికి శత్రు సైన్యము – దండెత్తగా
యెహోషాపాతు తన ప్రజలతో స్తుతియించగా – స్తోత్రము చేయగా
దేవుడే యుద్ధము జరిపెను
అద్భుత జయమును పొందిరి
బెరాకా లోయలో కూడిరి
కృతజ్ఞతా స్తుతిలు చెల్లించిరి ||యేసయ్యా||`,keywords:["aaradhinchedham","aradinchedam","aaradhinchedam arbatinchedham","aradinchadam"],video:"",artist:"Hana Joyce",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఆరాధించెదను మనసార నా హృదయముతో",lyrics:`ఆరాధించెదను... ఆరాధించెదను... ఆరాధించెదను..నిన్నే యేసయ్యా

ఆరాధించెదను మనసార నా హృదయముతో...
స్తుతి చెల్లించెదను నా యేసు...

ఆరాధించెదను ఆరాధించెదను
ఆరాధించెదను ఆరాధించెదను
||ఆరాధించెదను మనసార||

1. లేనే లేదయ్యా...నీ వంటి ప్రేమ 
నా కన్నీటిని నాట్యముగా మార్చావు (2)
నీవే మార్గము సత్యము
నీవే జీవము గమ్యము 
నీవే ఆశ్రయదుర్గము
నీవే నా కేడెము (2)
||నిన్నారాధించెదను మనసారా||

2. సాటే లేరయ్య...దేవా నీకెవరు
పాపిని నను పరిశుద్ధునిగా మార్చావు (2)
నీవే మార్గము సత్యము
నీవే జీవము గమ్యము 
నీవే ఆశ్రయదుర్గము 
నీవే నా కేడెము (2)
||ఆరాధించెదను మనసారా||`,keywords:["aaradhinchedhanu manasara","aradhinchedhanu","aaradinchedanu","aradinchedanu","aaradinchedhanu"],video:"",artist:"Prabhu Kumar, Sandeep Kumar Velicharla & Nissy John",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"ఆరాధించెద నిన్నే తండ్రి",lyrics:`ఆరాధించెద నిన్నే తండ్రి - ఆత్మతో సత్యముతో  (2)  

యేసు నా దేవా నా దేవా మహోన్నతుడా (2)

ఆరాధించెదన్ సర్వశక్తుడా (2)  ||యేసు నా దేవా||`,keywords:["Aaradhinchedha ninne thandri","aaradhinchedha ninne tandri","aradhinchedha ninne thandri","aradincheda ninne tandri"],video:"",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"ఆలయంలో ప్రవేశించండి అందరూ",lyrics:`ఆలయంలో ప్రవేశించండి అందరూ
స్వాగతం సుస్వాగతం యేసునామంలో
మీ బ్రతుకులో పాపమా కలతలా
మీ హృదయంలో బాధలా కన్నీరా
మీ కన్నీరంతా తిడిచి వేయు రాజు యేసు కోసం

1. దీక్ష స్వభావంతో ధ్యాన స్వభావమై
వెదకే వారికంతా కనబడు దీపము
యేసురాజు మాటలే వినుట ధన్యము
వినుట వలన విశ్వాసం అధికమధికము
ఆత్మలో దాహము తీరెను రారండి
ఆనందమనందం హల్లెలూయా ||ఆలయంలో||

2. ప్రభు యేసు మాటలే పెదవిలోమాటలై
జీవ వృక్షంబుగా ఫలియించాలని
పెదవితో పలికెదం మంచి మాటలే
హృదయమంతా యేసు ప్రభుని ప్రేమ మాటలై
నింపెదం నిండెదం కోరేదం పొందెదం
ఆనదంమానదం హల్లెలూయా ||ఆలయంలో||`,keywords:["aalayamlo praveesinchudi andharu","aalayam lo pravesinchudi","aalayamloo pravesinchudi andharu","alayamlo pravesinchudi andaru"],video:"",artist:"",genre:["General","Church"],timeSignature:"4/4"},{id:l(),title:"ఆలోచించావ – ఓ నేస్తం ఆలోచించావ",lyrics:`ఆలోచించావ – ఓ నేస్తం ఆలోచించావ
ఏ సమయంలో ఏమవుతుందో – అని ఆలోచించావ
ఆలోచించావ – ఓ నేస్తం ఆలోచించావ
ఏ సమయంలో ప్రభు పిలుపుందో – అని ఎవరికి తెలియదుగా
ఈ సమయమందే అంతా – కనుమరుగైపోతే
ఏ చోటికి నువ్వు వెళ్తావో – అని ఆలోచి౦చావ
ఈ సమయమందే అ౦తా – విడిచి వెళ్ళ వస్తే
ఏ చోటికి నువ్వు వెళ్తావో – అని ఆలోచించావ ॥ఆలోచించావ॥

1. ఏదేదో అనుకుంటాము – ఏవేవో కలగంటాము
వ్యర్థమైన లోకాశలకు – లోబడుతూ ఉంటాము (2)
ప్రభు నిన్ను చూచుచున్నాడని,
తన ప్రేమతో పిలచుచున్నాడని,
తెలిసి కూడా ఎంతో నిర్లక్ష్యం ..!
మేలుకో….. సోదరా ..!
రానైయు౦దిగా – ప్రభు రాకడ
మేలుకో ….. సోదరీ ..!
రానైయుందిగా – ప్రభు రాకడ ॥ఆలోచించావ॥

2. అన్నీ తెలుసనుకుంటాము – నాకేదీ కాదంటాము
తెలియకుండా సాతానుచే – మోసపోతూ ఉంటాము (2)
ప్రభు నిన్ను చూచుచున్నాడని,
తన ప్రేమతో పిలచుచున్నాడని,
తెలిసి కూడా ఎంతో నిర్లక్ష్యం ..!
మేలుకో ….. సోదరా ..!
రానైయుందిగా – ప్రభు రాకడ
మేలుకో ….. సోదరీ ..!
రానైయుందిగా – ప్రభు రాకడ ॥ఆలోచించావ॥`,keywords:["aaloochinchava oo nestham","aalochinchava oo nestham"],video:"",artist:"Enosh Kumar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆశ తీర నా యేసు స్వామిని కొలిచెదను",lyrics:`ఆశ తీర నా యేసు స్వామిని కొలిచెదను
ఆత్మతో సత్యముతో స్తుతించెదను
ఎంత ధన్యము యేసుని వెదకుట ఎంత ధన్యము
ఎంత భాగ్యము యేసుని నమ్ముట ఎంత భాగ్యము ||ఆశ||

1. దుప్పి నీటికై ఆశపడునట్లుగా
దేవుని కొరకై ఆశ పడుచున్నాను
దేవుని సన్నిధిని నిత్యముండునట్లుగా (2)
దిన దినమాశతో కనిపెట్టుచున్నాను ||ఎంత||

2. లోక ఆశలు లయమైపోవును
లోకులెవ్వరు కాపాడలేరు
లోపాలు సరిచేయు ప్రభువే ఆధారం (2)
లోబడు వారిని పారమున చేర్చును ||ఎంత||`,keywords:["aasa theera na yesu swami","aasa theera na yesu swamy","aasha theera na yesu swami","aasha thera na yesu swamy","aasa theera naa yesu swamy"],video:"",artist:"Philip",genre:["General","Hope"],timeSignature:"4/4"},{id:l(),title:"ఆశ్చర్యకరుడు - ఆలోచనకర్త",lyrics:`1. ఆశ్చర్యకరుడు - ఆలోచనకర్త
నిత్యుడగు తండ్రి - బలవంతుడు
లోకాన్ని ప్రేమించి - తన ప్రాణమునర్పించి
తిరిగి లేచిన - పునరుధ్ధానుడు

రండి మన హృదయాలను - ఆయనకు అర్పించి
ఆత్మతో సత్యముతోను - ఆరాధించెదము ఆరాధించెదము

ఆరాధన ఆరాధన - యేసయ్యకే ఈ ఆరాధన
పరిశుధ్ధుడు పరిశుద్ధుడు - మన దేవుడు అతిశ్రేష్ఠుడు
రాజులకే రారాజు - ఆ ప్రభువునే పూజించెదం
హల్లెలుయా హల్లెలుయా - హల్లెలుయా హల్లెలుయా 

2. సత్య స్వరూపి - సర్వాంతర్యామి
సర్వాధికారి - మంచి కాపరి
వేలాధి సూర్యుల - కాంతిని మించిన
మహిమగలవాడు - మహాదేవుడు

రండి మనమందరము - ఉత్సహ గానములతో
ఆ దేవా దేవుని - ఆరాధించెదము ఆరాధించెదము

ఆరాధన ఆరాధన - యేసయ్యకే ఈ ఆరాధన
పరిశుధ్ధుడు పరిశుద్ధుడు - మన దేవుడు అతిశ్రేష్ఠుడు
రాజులకే రారాజు - ఆ ప్రభువునే పూజించెదం
హల్లెలుయా హల్లెలుయా - హల్లెలుయా హల్లెలుయా`,keywords:["Ascharya karudu","ascharyaa karudu","ascharyakarudu","ascharyaakarudu","ascharia karudu","aschariya karudu","worship"],video:"https://www.youtube.com/embed/_yc-5wajD8k?start=985",artist:"Joel Kodali & Hadlee Xavier",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"ఆశ్చర్యకరుడు ఆలోచనకర్త",lyrics:`ఆశ్చర్యకరుడు ఆలోచనకర్త
నిత్యుడగు తండ్రి సమాధానకర్త (2)
తనవంటి గొప్ప దేవుడు ఎవరున్నారిలలో
తన సాటైనా దీటైనా దేవుడు లేడిలలో (2)     
||ఆశ్చర్యకరుడు||

1. తన చేతిలో రోగాలు లయమైపోయెను
తన చూపుతో దయ్యాలు విలవిలలాడెను (2)
తన మాటతో ప్రకృతినే శాసించినవాడు (2)
నీటిపై ఠీవిగా నడచినవాడతడు (2)      
||ఆశ్చర్యకరుడు||

2. మనకోసం తన ప్రాణాన్నే బలి ఇచ్చినవాడతడు
మనకోసం సజీవుడై లేచినవాడతడు (2)
తన శాంతినే పంచిపెట్టిన శాంతమూర్తి యేసు (2)
తన సర్వాన్నే ధారబోసిన త్యాగశీలి క్రీస్తు (2)    
||ఆశ్చర్యకరుడు||`,keywords:["ఆశ్చర్యకరుడు ఆలోచనకర్త","Ascharya karudu","ascharyaa karudu","ascharyakarudu","ascharyaakarudu","ascharia karudu","aschariya karudu","worship"],video:"",artist:"Bro Sirivella Hanok",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"ఆశ్చర్యకరుడు యేసు ఆలోచనకర్త యేసు",lyrics:`ఆశ్చర్యకరుడు యేసు ఆలోచనకర్త యేసు
విశ్వాసముంచి ప్రార్ధించిన – అసాధ్యమైనది లేదు (2)
ఆత్మలో ఆనందం అన్నిటా ఘన విజయం
శ్రేష్టమైన ప్రతియీవి అనుగ్రహించును మనయేసు (2) ||ఆశ్చ||

1. నిన్న నేడు నిరతము ఏకరీతిగా ఉన్నవాడు
శాశ్వత ప్రేమను చూపే నాధుడు (2)
ప్రాణం… సర్వం… నా ప్రాణం… నా సర్వం…
యేసయ్యె యేసయ్యె యేసయ్యె నా యేసయ్యె  ||ఆశ్చ||

2. మొదటిగా తన రాజ్యమున్ – నీతిని వెదకువారికి
అన్నియు సాధ్యమే – ఈ మాట సత్యం (2)
దేవా నీ ఆత్మను – నా దేవా నీ ఆత్మను
మాకిచ్చి బలపర్చి దీవించి నడిపించు ||ఆశ్చర్య||`,keywords:["Ascharya karudu yesu","ascharyaa karudu yesu","ascharyakarudu yesu","ascharyaakarudu yesu","ascharia karudu yesu","aschariya karudu yesu","jkchristopher","jk christopher","sharon sisters","sharonsisters"],video:"https://www.youtube.com/embed/_yc-5wajD8k?start=985",artist:"Sharon Philip",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆశ్చర్యమైన ప్రేమ",lyrics:`ఆశ్చర్యమైన ప్రేమ – కల్వరిలోని ప్రేమ మరణము కంటే బలమైన ప్రేమది నన్ను జయించే నీ ప్రేమ (2) ||ఆశ్చర్యమైన||

1. పరమును వీడిన ప్రేమ – ధరలో పాపిని వెదకిన ప్రేమ నన్ను కరుణించి ఆదరించి సేదదీర్చి నిత్య జీవమిచ్చే ||ఆశ్చర్యమైన||

2. పావన యేసుని ప్రేమ – సిలువలో పాపిని మోసిన ప్రేమ నాకై మరణించి జీవమిచ్చి జయమిచ్చి తన మహిమ నిచ్చే ||ఆశ్చర్యమైన||

3. శ్రమలు సహించిన ప్రేమ – నాకై శాపము నోర్చిన ప్రేమ విడనాడని ప్రేమది ఎన్నడూ యెడబాయదు ||ఆశ్చర్యమైన||

4. నా స్థితి జూచిన ప్రేమ – నాపై జాలిని జూపిన ప్రేమ నాకై పరుగెత్తి కౌగలించి ముద్దాడి కన్నీటిని తుడిచే ||ఆశ్చర్యమైన||`,keywords:["ascharyamaina prema","Ascharya maina prema","ascharyamyna prema","Aschariya mayna prema","love","4/4"],video:"",artist:"Jikki Devaraj",genre:["Love","General","Lent"],timeSignature:"4/4"},{id:l(),title:"ఆశ్రయం నా దుర్గమా",lyrics:`అశ్రయం నా దుర్గమా
నీవే నా శైలమ నీవే నా దైవమా
మహోన్నత నిన్ను కీర్తించగా
యేసయ్య నిన్నే సేవింతును (2)

నీవే...నీవే...నీవే...నీవే
యేసయ్య నీవే చాలు నిరతము
నీ ప్రేమ నీ తోడు చాలులే
నీ దయా నాకు చాలు నిరతముండు
నీ ప్రేమ నీ తోడు చాలులే

1. కృంగియున్న వేళ నన్ను నీవు హత్తుకొంటివే
నీదు చేయి చాపి నన్ను కౌగలించుకొంటివే  ||నీవే||

2. తృణీకరింపబడిన నన్ను త్రోసివేయకుంటివే
జాలి చూపి నాపై నన్ను నీవు చేర్చుకొంటివే  ||నీవే||`,keywords:["asrayam na durgama","aasrayam na durgama","asrayam na durgamaa","aasrym na durgama","aasrayam naa durgama","aasrayamu na durgamu","aashrayam na durgama","ashrayam na durgama","ashrayam naa durgama","asrayam naa durghama","asrayam na dhurgama","ashrayam na dhurgamaa","ashrayam na dhurgamaa","vijay roy","vijai roy","vijayroi","vijayroy","6/8"],video:"",artist:"Vijai Roy",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఆశీర్వాదపు జల్లులు కురిసే కాలమిదియేగా",lyrics:`ఆశీర్వాదపు జల్లులు కురిసే కాలమిదియేగా 
ఆత్మ దేవుడు గాలై వీచగా వర్షమై కురియునే  (2)
ఉన్నతస్థలి నుండి నీపై ఆత్మను కురిపించున్ 
ఎండియున్న నిన్ను యేసు మరల బ్రతికించున్  (2)

మీ దుఃఖం సంతోషముగా మారే సమయమిది
మీ కలత కష్టం సంపూర్ణముగా తీరే తరుణమిది  (2)

1. నీ ముందును నీ వెనుక దీవెన కురిపించున్ 
వాడియున్న నీ బ్రతుకు ఫలములతో నింపున్  (2)
బీడుగా ఉన్న నీ నేలను ఫలభరితము చేయున్ 
నీ చేతుల పనియంతటిలో ఆశీర్వాదమునిచ్చున్  (2)
||మీ దుఃఖం సంతోషముగా||

2. అరణ్యము పొలమువలె మారే సమయమిది
ఎడారిలో సెలయేరు ప్రవహించే తరుణమిది  (2)
స్వప్నములో దర్శనములలో యేసే కలుసుకొని 
దీర్ఘదర్శిగా నిన్ను మార్చి తానే వ్యక్తమగున్  (2) 
||మీ దుఃఖం సంతోషముగా||

మహావర్షము ఒకటి కురియున్
మన దేశము పైన కురియున్  (2)
ఆత్మదేవుడు వర్షమై కురియునే 
మహావర్షము ఒకటి కురియున్
మన దేశము పైన కురియున్
ఆత్మదేవుడు వర్షమై కురియునే (2)
ఆశీర్వాదపు వర్షమై కురియునే`,keywords:["aaseervadhapu jallulu kurise","aasheervaadhapu jallulu kurise","aaservadhapu jallulu","Aservadhapu jalulu"],video:"",artist:"Dr. Paul Dhinakaran, Evangeline Paul Dhinakaran, Stella Ramola, Daniel Davidson, Grace Joshua, Samuel Dhinakaran, Enosh Kumar, John Erry, Hanok Raj, Sreshta Karmoji, Jessica Rayudu",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆశీర్వాదంబుల్ మా మీద",lyrics:`1. ఆశీర్వాదంబుల్ మా మీద
వర్షింపజేయు మీశ
ఆశతో నమ్మి యున్నాము
నీ సత్య వాగ్దత్తము

ఇమ్మాహి మీద
క్రుమ్మరించుము దేవా
క్రమ్మర ప్రేమ వర్షంబున్
గ్రుమ్మరించుము దేవా

2. ఓ దేవా పంపింపవయ్యా
నీ దీవెన ధారలన్
మా దాహమెల్లను బాపు
మాధుర్యమౌ వర్షమున్      || ఇమ్మాహి ||

3. మా మీద కురియించు మీశ
ప్రేమ ప్రవాహంబులన్
సమస్త దేశంబు మీద
క్షామంబు పోనట్లుగన్        || ఇమ్మాహి ||

4. ఈనాడే వర్షింపు మీశ
నీ నిండు దీవెనలన్
నీ నామమందున వేడి
సన్నుతి బ్రౌర్ధింతుము     || ఇమ్మాహి ||`,keywords:["aaseervaadhambulmameedha","aseerva dhambulmamidha","aasirvadhambulmami","3/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"ఆశైతే ఉంది నాలో - అందుకోలేకున్నాను",lyrics:`ఆశైతే ఉంది నాలో - అందుకోలేకున్నాను
నా చేయి పట్టుకో నా రక్షకా 
నా చేయి పట్టుకో నా యేసయ్యా

1. నీలోనే నేను నిలవాలని నీ ఆత్మలో నేను నడవాలని (2)
నీ రూపునే పొందుకోవాలని (2)
నీ మనస్సు నాకిల రావాలని (2)

2. నీ ప్రేమనే కలిగి ఉండాలని - నీ ఫలము నాలో పండాలని (2)
నీ కృపతో నా మది నిండాలని (2) 
ఆత్మాగ్ని నాలో మండాలని  (2)

3. ఆనాటి పౌలులా బ్రతకాలని - ఆశ్చర్య కార్యాలు చేయాలని వెదకాలని (2)
ఆత్మీయ శిఖరాల నెక్కాలని (2) 
అపవాదిని చితక త్రొక్కాలని (2)`,keywords:["Aasa ayethe undhi nalo","aasha ayethe undhi naalo","aasha aithe undhi nalo","Aasa aithe undhi nalo","Aasa ayethe undi nalo"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఆహా ఆనందమే మహా సంతోషమే",lyrics:`ఆహా ఆనందమే మహా సంతోషమే
యేసు పుట్టె ఇలలో (2)
ఆనందమే మహా సంతోషమే
యేసు పుట్టె ఇలలో (2) ||ఆహా||

1. యెషయా ప్రవచనము నేడు రుజువాయే
జన్మించె కుమారుండు కన్య గర్భమందున (2) ||ఆనందమే||

2. మీకా ప్రవచనము నేడు రుజువాయే
ఇశ్రాయేల్ నేలెడివాడు జన్మించె బెత్లేహేమున (2) ||ఆనందమే||

3. తండ్రి వాగ్ధానం నేడు నెరవేరే
దేవుని బహుమానం శ్రీ యేసుని జన్మము (2) ||ఆనందమే||`,keywords:["aha aanandhame maha santhoshame","aha aanandhame","aa aanandhame","aha aanandame","aha anandhame","aha anandame","ahaaanandhame","ah anandhame","ah anandame","ahaanandame","ahanandhame","christmas","jk christopher","jkchristopher","sharon sisters","sharonsisters","2/4"],video:"",artist:"Lilian Christopher",genre:["Christmas"],timeSignature:"2/4"},{id:l(),title:"ఆహా మహాత్మ",lyrics:`ఆహా మహాత్మ హా శరణ్యా – హ విమోచకా, ద్రోహ రహిత చంపె నినునా దోషమేగదా! || ఆహా ||

1. వీరలను క్షమించు తండ్రి – నేర రేమియున్ 
కోరి తిటుల నిన్ను జంపు -క్రూర జనులకై || ఆహా ||

2. ”నీవు నాతో బరదైసున – నేడె యుందువు” 
పావనుండ యిట్లు బలికి – పాపి గాచితి || ఆహా ||

3. “అమ్మా! నీ సుతుడ” టంచు మరి -యమ్మాతో బలికి 
క్రమ్మర “నీ జనని” యంచు – గర్త నుడితివి || ఆహా ||

4. “నా దేవ దేవ యేమి విడ – నాడితి” వనుచు
శ్రీదేవ సుత పలికితివి శ్రమ – చెప్ప శక్యమా || ఆహా ||

5. “దప్పికొనుచున్నా న” టంచు – జెప్పితివి గద 
యిప్పగిదిని బాధ నొంద – నేమి నీకు హా! || ఆహా ||

6. శ్రమ ప్రమాదములను గొప్ప – శబ్ధ మెత్తి హా
“సమాప్తమైన” దంచు దెలిపి – సమసితివి గదా || ఆహా ||

7. “అప్పగింతు దండ్రి నీకు – నాత్మ” నంచును 
గొప్ప యార్భాటంబు చేసి – కూలిపోతివా || ఆహా ||`,keywords:["ahamahatma","ahamahathmaa","ahaamahaathma","aha","aha mahathma","good friday","aha mahatma","goodfriday","lent","aha mahaathma"],video:"",artist:"Panthagaani Paradhesi",genre:["Andhra Christian Hymn","Lent","Good Friday"],timeSignature:""}],ఇ:[{id:l(),title:"ఇది కోతకు సమయం",lyrics:`ఇది కోతకు సమయం
పనివారి తరుణం - ప్రార్ధన చేయుదమా (2)
పైరును చూచెదమా – పంటను కోయుదమా (2) ||ఇది కోతకు||

1. కోతెంతో విస్తారమాయెనే
కోతకు పనివారు కొదువాయెనే (2)
ప్రియయేసు నిధులన్ని నిలువాయెనే (2) ||ఇది కోతకు||

2. సంఘమా మౌనము దాల్చకుమా
కోసెడి పనిలోన పాల్గొందుమా (2)
యజమాని నిధులన్ని మీకే కదా (2) ||ఇది కోతకు||

3. శ్రమలేని ఫలితంబు మీకీయగా
వలదంచు వెనుదీసి విడిపోదువా (2)
జీవార్ధ ఫలములను భుజియింతమా
నిత్య జీవార్ధ ఫలములను భుజియింతమా||ఇది కోతకు||`,keywords:["idhi koothaku samayam","idhi kothaku samayam","idhi koothaku samayamu","edhi kothaku samayam","edhi koothaku samayam","3/4"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"ఇదిగో దేవా నా జీవితం",lyrics:`ఇదిగో దేవా నా జీవితం - ఆపాద మస్తకం నీకంకితం
శరణం నీ చరణం - శరణం నీ చరణం (2)

1. పలుమార్లు వైదొలగినాను - పరలోక దర్శనము నుండి
విలువైన నీ దివ్య పిలుపుకు - నే తగినట్లు జీవించనైతి
అయినా నీ ప్రేమతో నన్ను దరి చేర్చినావు
అందుకే గైకొనుమో దేవా - ఈ నా శేష జీవితం ||శరణం నీ చరణం||

2. నీ పాదముల చెంత చేరి - నీ చిత్తంబు నేనెరుగ నేర్పు
నీ హృదయ భారంబు నొసగి - ప్రార్ధించి పనిచేయనిమ్ము
ఆగిపోక సాగిపోవు - ప్రియసుతునిగ పని చేయనిమ్ము
ప్రతిచోట నీ సాక్షిగా - ప్రభువా నన్నుండనిమ్ము ||శరణం నీ చరణం||

3. విస్తార పంట పొలము నుండి - కష్టించి పనిచేయనిమ్ము
కన్నీటితో విత్తు మనస్సు - కలకాలం మరినాకు నొసగు
క్షేమక్షామ కాలమైనా - నిన్ను ఘనపరచు బ్రతుకు నిమ్మయా
నశియించు ఆత్మలన్ - నీదరి చేర్చు కృపనిమ్మయా ||శరణం నీ చరణం||`,keywords:["idhigo deva","idhigo dheva na jevitam","idigo deva naa jeevitham","idigoo deva","edhigo deva","edhigo dheva na jeevitham","3/4"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"ఇదిగో ప్రజలందరికి శుభవార్త",lyrics:`ఇదిగో ప్రజలందరికి శుభవార్త
రక్షకుడేసుని జనన వార్త

మది శాంతి సంతోషం
హృది అక్షయుని సునాదము (2) 

మది ఆనందమే - మహదానందమే (2)

1. దావీదు పట్టణమందు
దివిజుడు శ్రీయేసుడు (2)

కన్య మరియ గర్భమందు- దీనుడై ఇల వెలసెను (2)
దీనుడై ఇలా వెలసెను ||మది||

2. పరలోక మహిమ వీడి
నరుని రూపము ధాల్చి

ధరణి పాపములను బాప - ధన్యుడై ఇలా వెలసెను (2)
ధన్యుడై ఇలా వెలసెను  ||మది||`,keywords:["christmas","edhigo prajalandhariki","idhigo prajalandariki","idhigo prajala andhariki subhavartha","yedhigo prajalandhariki","edhigo prajalandariki","edigo prajalandariki","idigo prajalandariki"],video:"",artist:"Bishop Pammi Daniel, Sis Jessy Paul, Ps Divya David",genre:["Christmas"],timeSignature:"7/8"},{id:l(),title:"ఇది దేవుని నిర్ణయము",lyrics:`ఇది దేవుని నిర్ణయము
మనుష్యులకిది అసాధ్యము (2)
ఏదేను వనమందు
ప్రభు స్థిరపరచిన కార్యము (2)
ప్రభు స్థిరపరచిన కార్యము      ||ఇది||

1. ఈ జగతి కన్నా మునుపే
ప్రభు చేసెను ఈ కార్యము (2)
ఈ ఇరువురి హృదయాలలో
కలగాలి ఈ భావము (2)
నిండాలి సంతోషము     ||ఇది||

2. వరుడైన క్రీస్తు ప్రభువు
అతి త్వరలో రానుండెను (2)
పరలోక పరిణయమే
మనమెల్లరము భాగమే (2)
మనమెల్లరము భాగమే     ||ఇది|||`,keywords:["idhi devuni nirnayamu","idhi dheva nirnaim","idi devuni","idi devuni nernayam","edhi devuni","edhi dhevuni","4/4"],video:"",artist:"Jonah Samuel",genre:["General","Marriage"],timeSignature:"4/4"},{id:l(),title:"ఇది శుభోదయం – క్రీస్తు జన్మదినం",lyrics:`ఇది శుభోదయం – క్రీస్తు జన్మదినం
ఇది లోక కళ్యాణం
మేరి పుణ్యదినం  (2)

1. రాజులనేలే రారాజు వెలసె పశువుల పాకలో
పాపుల పాలిట రక్షకుడు నవ్వెను తల్లి కౌగిలిలో
భయము లేదు మనకిలలో
జయము జయము జయమహో ||ఇది||

2. గొల్లలు జ్ఞానులు ఆనాడు ప్రణమిల్లిరి భయ భక్తితో
పిల్లలు పెద్దలు ఈనాడు పూజించిరి ప్రేమ గీతితో
జయనాదమే ఈ భువిలో
ప్రతిధ్వనించెను ఆ దివిలో ||ఇది||`,keywords:["ఇది శుభోదయం క్రీస్తు జన్మదినం","christmas","idhi subodhayam","idi subodayam",,"edhi subodhayam","edi subodayam","edi subhoodhayam","idhi subhoodhayam"],video:"",artist:"",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"ఇదే ఆశ నాలో నా యేసయ్య",lyrics:`ఇదే ఆశ నాలో నా యేసయ్య
నీ ప్రేమలోనే జీవించనీ
ఇదే ధ్యాస నాలో నా యేసయ్య
నీ నీడలోనే నేనుండనీ
ఏపాటి నన్ను ప్రేమించినావు
నీలోన నిరతం నను దాచినావు
ఏముంది నాలో కోరావు నన్ను
దీవించి ఇలలో ఘనపరచినావు
ప్రాణమా నా బంధమా నీ ప్రేమ చాలయ్యా
దైవమా నా యేసయ్య నీ తోడు చాలయ్యా

1. గాయాలలోన కన్నీటిలోన 
ఓదార్పు నీవై చేరావుగా
నిస్సారమైన నా జీవితాన 
నా కోట నీవై నిలిచావుగా
ఆధార దీపం నీ వాక్యమేగా
నా క్షేమ సౌధం నీ సన్నిధేగా
ఏమివ్వగలను సేవింతు నిన్ను

2. గాఢాంధకార ఏలోయలైనా 
నావెంట నీవే ఉన్నావుగా
నీ నీతిమార్గం పరలోక భాగ్యం 
నాచెంత చేరీ చూపావుగా
లెక్కించలేను నీ మేలులన్నీ
ఊహించలేను నీ ప్రేమ నాకై
ఏమివ్వగలను సేవింతు నిన్ను`,keywords:["idhe aasha naalo na yesayya","ide asa nalo na yesaya","idhey aasha naalo na yesayya","idhee aasha naalo na yesayya","idhe asha nalo naa yesayya"],video:"",artist:"Pranam Kamlakhar, Joshua Shaik, Ankona Mukherjee",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఇదే నా కోరిక - నవ జీవన రాగమాలిక",lyrics:`ఇదే నా కోరిక
నవ జీవన రాగమాలిక (2)     ||ఇదే నా కోరిక||

1. యేసు లాగ ఉండాలని
యేసుతోనే నడవాలని (2)
నిలవాలని గెలవాలని
యేసునందే ఆనందించాలని (2)   ||ఇదే నా కోరిక||

2. ఈ లోకంలో పరలోకము
నాలోనే నివసించాలని (2)
ఇంటా బయట యేసునాథునికే
కంటిపాపనై వెలిగిపోవాలని (2)  ||ఇదే నా కోరిక||

3. యాత్రను ముగించిన వేళ
ఆరోహనమై పోవాలని (2)
క్రీస్తు యేసుతో సింహాసనము
పైకెగసి కూర్చోవాలని (2)    ||ఇదే నా కోరిక||`,keywords:["ఇదే నా కోరిక - నవ జీవన రాగమాలిక"],video:"",artist:"Diyya Prasadarao",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఇన్నాళ్లు తోడుగా మాతో నడిచావు",lyrics:`ఇన్నాళ్లు తోడుగా మాతో నడిచావు
ఇమ్మానుయేలుగా వెన్నంటి నిలిచావు (2)
ఇశ్రాయేలు కాపరి నీకు స్తోత్రము
నిన్నే అనుసరింతుము జీవితాంతము (2)

1. ఘనులైన వారే గతియించగా
ధనమున్నవారే మరణించగా (2)
ఎన్నతగని వారమైనా మమ్ము కనికరించావు
మా దినములు పొడిగించి సజీవులుగా ఉంచావు (2)   ||ఇశ్రాయేలు||

2. మా కంట కన్నీరు జారకుండగా
ఏ కీడు మా దరికి చేరకుండగా (2)
కంటి రెప్పలా కాచి భద్రపరచియున్నావు
దుష్టుల ఆలోచనలు భంగపరచియున్నావు (2)   ||ఇశ్రాయేలు||

3. ఈలోక యాత్రలో సాక్షులుగా    
నీ రాజ్య వ్యాప్తిలో పాత్రలుగా (2)
ఎట్టి యోగ్యతా లేని మమ్ము ఎన్నుకున్నావు 
నీదు ఆత్మ శక్తి తో నింపి నడుపుచున్నావు (2) ||ఇశ్రాయేలు||`,keywords:["innallu thoduga matho nadichavu","ennallu thoduga matho nadichavu","inalu thoduga matho nadichavu","enalu thoduga matho nadichavu","inalu toduga mato nadichavu","enalu toduga mato nadichavu","stevenson"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఇన్నాళ్లు మాకు సాయమై",lyrics:`ఇన్నాళ్లు మాకు సాయమై యీ ముందుకును మా
యున్నత గృహ మండవై యొప్పెడు దైవమా!

2. ఏలాటి యీతిబాధయు నీవచ్చు యేటిలో
కలుగకుండ బ్రోవవే ఘనంపు ప్రేమతో

3. నీ సింహాసన నీడలో నిలుచు భక్తులు
భయంబు చింతబాధలన్ జయించి మందురు

4. చరాచరంబు లెల్లను జనించుకంటె
ముందార తరాలనుండియున్ నీరాజ్య మండెడున్

5. ఇన్నాళ్లు మాకు సాయమై యేలుచు గాచిన
ఉన్నత ప్రభు ప్రేమతో మన్నించు మింకనున్`,keywords:["ennallu maaku sayamai","innallu maaku sayamai","enalu maku sayamai","inalu maku sayamai","inalu maaku saayamai","ennalu maaku sayamai","4/4"],video:"",artist:"Issaic Watson",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"ఇన్నేళ్లు ఇలలో ఉన్నాము మనము",lyrics:`ఇన్నేళ్లు ఇలలో ఉన్నాము మనము
చల్లని దేవుని నీడలో
గతించిపోయే కాలం – స్మరించు యేసు నామం
సంతోషించు ఈ దినం  ||ఇన్నేళ్లు||

1. లోకమే నటనాలయం
జీవితమే రంగుల వలయం (2)
పరలోకమే మనకు శాశ్వతం
పరలోక దేవుని నిత్య జీవం
ప్రేమామయుడే ఆ పరమాత్ముడే
పదిలపరచెనే రక్షణ భాగ్యం ||ఇన్నేళ్లు||

2. మారు మనస్సు మనిషికి మార్గం
పశ్చాత్తాపం మనసుకు మోక్షం (2)
నీ పూర్ణ హృదయముతో మోకరిల్లుమా
నీ పూర్ణ ఆత్మతో ప్రార్ధించుమా
పరిపూర్ణుడే పరిశుద్ధాత్ముడే
కరుణించునే కలకాలం ||ఇన్నేళ్లు||`,keywords:["ఇన్నేళ్లు ఇలలో ఉన్నాము మనము","innellu ilalo","inelu ilalo","ennellu elalo","innellu elalo","ennellu ilalo","new year"],video:"",artist:"",genre:["General","New Year"],timeSignature:"3/4"},{id:l(),title:"ఇమ్మానుయేలు రక్తము",lyrics:`1. ఇమ్మానుయేలు రక్తము - ఇంపైన యూటగు
ఓ పాపి! యందు మున్గుము - పాపంబు పోవును

యేసుండు నాకు మారుగా - ఆ సిల్వ జావగా
శ్రీ యేసు రక్త మెప్పుడు
స్రవించు నాకుగా

2. ఆ యూట మున్గి దొంగయు - హా! శుద్ధు-డాయెను
నేనట్టి పాపి నిప్పుడు - నేనందు మున్గుదు || యేసుండు నాకు ||

3. నీ యొక్క పాప మట్టిదే - నిర్మూల మౌటకు
రక్షించు గొర్రె పిల్ల? నీ - రక్తంబే చాలును || యేసుండు నాకు ||

4. నా నాదు రక్తమందున - నే నమ్మి యుండినన్
నా దేవుని నిండు ప్రేమ - నే నిందు జూచెదన్ || యేసుండు నాకు ||

5. నా ఆయుష్కాల మంతటా - నా సంతసం బిదే
నా క్రీస్తు యొక్క రొమ్మునన్ - నా గాన మిద్దియే || యేసుండు నాకు ||`,keywords:["immanuyelu raakthamu","emmanuyelu rakthamu","emmanuelu raktamu","imanuyelu raktamu","emmanuelu rakthamu","lent","goodfriday","good friday","holy communion","communion","4/4"],video:"",artist:"H. Haarms",genre:["Andhra Christian Hymn","Lent"],timeSignature:"4/4"},{id:l(),title:"ఇరువురొక్కటయ్యే చక్కని తరుణాన",lyrics:`ఇరువురొక్కటయ్యే చక్కని తరుణాన
ఇలను ముచ్చటైన మీపై విరివాన (2)

శోభవెల్లువాయేగా ప్రాభవంబు చల్లగా
విభుడు కృపను జల్లగా ప్రభు వల్ల మీరిలా
వేడుకైనది మీ వివాహము ||ఇరువు||

1. ఏ నరుడు ఒంటరిగా లేకుండవలెనంటూ 
ఈ వరుడు నీకంటూ మేలే చేసే
పరిశుద్ధ స్థితి యందు పరిణయము జరిగించి 
ఈ వరుడు నీకోసం ఏంచే యేసే (2) ||శోభ||

2. దేహన్నా చెరిసగమై మీ ఎముకలో ఎముకై 
ఈ వధువు సహచరిగా నీకై చేసే
లోబడుట నేర్పించి ప్రేమించమని చెప్పి 
మీ ఇరువురికి యేసు ప్రేమే నేర్పే (2) ||శోభ||`,keywords:["ఇరువురొక్కటయ్యే చక్కని తరుణాన","marriage","iruvurokkatayye chakkani","eruvurokkatayye chakkani"],video:"",artist:"Rajesh Tatapudi, Jeevan Tatapadi, Nissy John & Nitya Santhoshini",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"ఇంత కాలం నీదు కృపలో",lyrics:`ఇంత కాలం నీదు కృపలో కాచిన దేవా (2)
ఇకను కూడా మాకు తోడు నీడ నీవే కదా (2) ||ఇంత కాలం||

1. ఎన్ని ఏళ్ళు గడచినా – ఎన్ని తరాలు మారినా (2)
మారని వీడని ప్రేమే నీదయ్యా - మార్చిన నా జీవితం నీకే యేసయ్యా (2) ||ఇంత కాలం||

2. నీవు చేసిన మేలులు – తలచుకుందును అనుదినం (2)
నా స్తుతి స్తోత్రము నీకే యేసయ్యా - వేరుగా ఏమియు చెల్లించలేనయ్యా (2) ||ఇంత కాలం||

3. దూరమైతిరి ఆప్తులు – విడచిపోతిరి నా హితులు (2)
శోధన వేదన తీర్చిన యేసయ్యా - తల్లిలా తండ్రిలా కాచిన యేసయ్యా (2) ||ఇంత కాలం||`,keywords:["intha kaalam needhu krupalo","entha kalam nidhu krupa lo","inthakalamu","yentha kalam needhu krupalo","inta kalam needu krupa lo","entakalam nidu krupa lo","inta kalam nedu krupa lo","intha kalam","4/4"],video:"",artist:"T. Subhanand",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఇంతవరకు నీవు - నన్ను నడిపించుటకు",lyrics:`ఇంతవరకు నీవు - నన్ను నడిపించుటకు 
నేనేమాత్రము నా జీవితం ఏమాత్రము 
ఇంతవరకు నీవు నన్ను భరియించుటకు 
నేనేమాత్రము మేము ఏమాత్రము 

నే చూచిన గొప్ప క్రియలు నీ చేతి బహుమానమే 
నే చూచు ఘనకార్యములు నీ దయ వలెనే

1. ఎన్నుకొంటివే నన్ను ఎందుకని
హెచ్చించితివే నన్ను ఎందుకని 
మందను వెంటాడి తిరుగుచుంటినే 
సింహాసనం ఎక్కించి మైమరచితివే 

2. నా ఆలోచనలన్ని చిన్నవని 
నీ ఆలోచనల వలనే తెలుసుకొంటిని
తాత్కాలిక సహాయము నే అడిగితిని 
యుగయుగాల ప్రణాళికలతో నన్ను నింపితివె`,keywords:["intha varaku neevu","intha varaku nivu","entha varaku neevu","entha varaku nivu","inthavaraku neevu","enthavaraku neevu","entha varaku","intha varako","inta varaku","enta varaku","yentha varaku neevu",,"nenu emathramu","nenemathramu","yintha varaku","yntha varaku","nenu yemathramu","nenu emathramu","bennyjoshua","benny joshua","4/4"],video:"",artist:"Benny Joshua",genre:["General","Grace"],timeSignature:"4/4"}],ఈ:[{id:l(),title:"ఈ గాలివానలోన - ఏకాకినైయున్న",lyrics:`ఈ గాలివానలోన - ఏకాకినైయున్న 
నీ ప్రేమ నెరిగినవేళ - నిన్ను నే వీడజాల 

1. ఏ గమ్యమూ లేకనే నేనుంటిని
ఈ బ్రతుకు భారమేనని నేనంటిని
నీదు వాక్యం  నాలో నిలిపి
నిత్యజీవం చూపినావు    ||గాలివానలోన||

2. ఏ దారి లేనివాడనై నేనుంటిని
ఏ దిక్కు లేనివానిగా నేనుంటిని
దరికి జేర్చి కనికరించి 
ఆశ్రయముగా నిలిచినావు  ||గాలివానలోన||`,keywords:["ఈ గాలివానలోన ఏకాకినైయున్న","ee gaali vaanalona","e gali vana lona","ee gali vaana lona","ee gali vaanalona","ee gali vanalona"],video:"",artist:"Ezra Sastry",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఈ దినం సదా నా యేసుకే",lyrics:`ఈ దినం సదా నా యేసుకే సొంతం
నా నాధుని ప్రసన్నత నా తోడ నడచును (2)
రానున్న కాలము – కలత నివ్వదు (2)
నా మంచి కాపరీ సదా – నన్ను నడుపును ||ఈ దినం||

1. ఎడారులు లోయలు ఎదురు నిలచినా
ఎన్నడెవరు నడువని బాటయైనను (2)
వెరవదెన్నడైనను నాదు హృదయము (2)
గాయపడిన యేసుపాదం అందు నడచెను (2) ||ఈ దినం||

2. ప్రవాహం వోలె శోదకుండు ఎదురు వచ్చినా
యుద్ధకేక నా నోట యేసు నామమే
విరోదమైన ఆయుధాలు యేవి ఫలించవు
యెహోవా నిస్సియే నాదు విజయము ||ఈ దినం||`,keywords:["ee dhinam sadha","eedhinam sadha","ee dinam sada","eedinam sada","yedhinam sadha","eedinam sadha","ee dhinamsadha","ee dhinamsada","ee dinamsadha","6/8"],video:"",artist:"Bro. Joe Madhu & Sis. Jessie Veena",genre:["General","Hope","Comfort"],timeSignature:"6/8"},{id:l(),title:"ఈలాటిదా యేసు ప్రేమ",lyrics:`ఈలాటిదా యేసు ప్రేమ -నన్ను
తూలనాడక తనదు జాలి చూపినదా ||ఈలాటిదా||

1. ఎనలేని పాప కూపమున – నేను
తనికి మిణుకుచును నే దరి గానకుండన్
కనికరము పెంచి నాయందు – వేగ - 
గొని పోవ నా మేలు - కొరకిందు వచ్చె ||ఈలాటిదా||

2. పెనుగొన్న దుఃఖాబ్ధిలోన – నేను - 
మునిగి కుములుచు నేడు పునగుండు నపుడు
నను నీచుడని త్రోయలేక – తనదు - 
నెనరు నా కగుపరచి నీతి జూపించె ||ఈలాటిదా||

3. నెమ్మి రవ్వంతైనా లేక – చింత - 
క్రమ్మిపొగలుచు నుండ-గా నన్ను జూచి
సమ్మతిని నను బ్రోవ దలచి – కరము - 
జాచి నా చేయి బట్టి చక్కగా బిలిచె ||ఈలాటిదా||

4. పనికిమాలిన వాడనైన – నేను - 
కనపరచు నాదోష - కపటవర్తనము
మనసు నుంచక తాపపడక యింత
ఘనమైన రక్షణ - మును నాకు జూపె ||ఈలాటిదా||

5. నా కోర్కె లెల్ల సమయములన్ – క్రింది - 
లోక వాంఛల భ్రమసి - లొంగెడు వేళన్
చేకూర్చి ధృడము చిత్తమునన్ – శుభము - 
నా కొసంగె జీవింప నా రక్షకుండు ||ఈలాటిదా||

6. శోధనలు నను చుట్టినప్పుడు – నీతి -
బోధ నా మనసులో బుట్టించి పెంచి
బాధ లెల్లను బాపి మాపి
యిట్టియాదరణ జూపెనా యహహ యేమందు ||ఈలాటిదా||`,keywords:["ee laatidhaa yesu prema","eelaatidhaa yesu prema","eelaatidha","yeelaatidha","eelatidha","yelatidha","eelatida","yelatida yesu prema","7/8"],video:"",artist:"Raapuri Rangayya",genre:["Andhra Christian Hymn","Love","Lent"],timeSignature:"7/8"},{id:l(),title:"ఈ సంఘం పునాది",lyrics:`1. ఈ సంఘం పునాది
క్రీస్తే సాధీశుఁడే
దక్కించె యేసు దీని
వాక్కాపుల్ రెట్టించే
పై నుండి వచ్చి యేసు
పెండ్లాడె నీమెనే
కోరుచు రక్త మిచ్చి
కొనె నీ కన్యనే

2. ఒక్కఁడే దేవుఁడిందు
ఒక్క విశ్వాసము
ఒక్కటే జన్మ మిందు
ఒక్క కుటుంబము
ఒక్క ప్రసాద విందు
ఒకే సునామము
నిరీక్షణొక్క టిందు
నిరంత ప్రాప్తికే

3. అసత్య మార్గమంచు
అనేకుల్ నవ్వినన్
విభాగ మై శ్రమంబుల్
విశేష మొందినన్
సుభక్తుల్ వేడుచుంద్రు
అభయ కాంతికై
యీ నింద లెల్లఁ బోయె
ఆనంద నాటికై

4. కఠిన దుఃఖ బాధల్
కల్గిన నోర్చుచు
విభ వానంద ప్రాప్తి
లభింపఁ గోరుచు
ఆ స్వర్గ పంక్తిఁజేరి
యానంద మొందుచున్
యీ సంఘ మేసుఁ గూడి
విశ్రాంతి బొందును`,keywords:["Eesangam punadhi","Ee sangam punaadhi","Ee sangham punadhi"],video:"",artist:"Alfred Thyagaraju Pamar",genre:["Andhra Christian Hymn"],timeSignature:"7/8"}],ఉ:[{id:l(),title:"ఉత్సాహించెదన్ ఆనందించెదన్",lyrics:`ఉత్సహించెదం ఆనందించెదం
ఇది యెహోవా చేసిన దినం (2)
యెహోవా నిస్సి మాకు జయమిచ్చును
జయశాలి యేసు స్తుతించెదము
యెహోవా యీరే మాకు సమకూర్చును 
ఆకాశపు వాకిళ్ళి విప్పబడును
యెహోవా దయాళుడా నీ కృప నిత్యముండును (2)

1. ఎప్పుడు వెళ్ళని మార్గమున నీతోనే అడుగులు వేసెదను
ఎదురు ఎరగని యేసువలె ముందుకు సాగెదను
నీ వాక్యమె జీవమిచ్చును మాకు 
నీ నామమె జయమిచ్చును  ||యెహోవా దయాళుడా||

2. నా ఊహకందని మేలులతో ఆశ్చర్య క్రియలతో నడిపావు
నూతన వాత్సల్యం నాలో ఉంచి హృదయ వాంఛను తీర్చావు
నీ వాక్యమె జీవమిచ్చును మాకు   
నీ నామమె జయమిచ్చును  ||యెహోవా దయాళుడా|| `,keywords:["uthsahinchedhan","uthsahinchedham","utsahinchedan","utsahinchadhan","uthsahinchedan","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"ఉన్నట్టు నేను వచ్చెదన్",lyrics:`1. ఉన్నట్టు నేను వచ్చెదన్
పాపిష్ఠు న్నీవు పిల్వఁగన్
నీ నెత్రుచేతఁ గడ్గుమా
యో గొఱ్ఱె పిల్ల దేవుఁడా!

2. ఉన్నట్టు నేను వచ్చెదన్
నే నొప్పుకొందుఁ దప్పులన్
నీ మాటతో హరించుమా
యో గొఱ్ఱె పిల్ల దేవుఁడా!

3. ఉన్నట్టు నేను వచ్చెదన్
దుఃఖంబు బాధపర్చఁగన్
బాపంబుఁ జేయనీకుమా
యో గొఱ్ఱె పిల్ల దేవుఁడా!

4. ఉన్నట్టు నేను వచ్చెదన్
యేసూ, కబోది నుండగన్
ఆత్మీయదృష్టి నీయుమా
యో గొఱ్ఱె పిల్ల దేవుఁడా!

5. ఉన్నట్టు నేను వచ్చెదన్
నీ మాట నమ్మునట్టి నన్
మన్నించి చేర్చుకొమ్మయా
యో గొఱ్ఱె పిల్ల దేవుఁడా!

6. ఉన్నట్టు నేను వచ్చెదన్
నీ ప్రేమ నన్నుఁ బిల్వగన్
నీ వాఁడ నౌదు సర్వదా
యో గొఱ్ఱె పిల్ల దేవుఁడా!`,keywords:["unnattu nenu vachedhan","unatu nenu vachedhan","unnatu nenu nenu vachedan","unatu nenu vachedan","unnattunenu vachedhan","unnattu nenuvachedhan","andhra christian hymn","3/4"],video:"",artist:"H. Harms",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"ఉన్నపాటున వచ్చు",lyrics:`ఉన్నపాటున వచ్చు-చున్నాను నీ పాద సన్నిధి-కో రక్షకా
ఎన్న శక్యము గాని పాపము-లన్ని మోపుగ వీపు పైబడి
యున్న విదె నడలేక తొట్రిలు-చున్నవాడను నన్ను దయగను ||ఉన్న||

1. కారుణ్య నిధి యేసు – నా రక్షకా నీ శ-రీర రక్తము చిందుట
భూరి దయతో నన్ను నీ దరి – జేర రమ్మని పిలుచుటయు ని
ష్కారణపు నీ ప్రేమ యిది మరి – వేరే హేతువు లేదు నా యెడ ||ఉన్న||

2. మసి బొగ్గు వలె నా మా-నస మెల్ల గప్పె దో-ష సమూహములు మచ్చలై
అసిత మగు ప్రతి డాగు తుడువను – గసుటు గడిగి పవిత్ర పరపను
అసువు లిడు నీ రక్తమే యని – మాసల కిప్పుడు సిలువ నిదె గని ||ఉన్న||

3. వెలుపట బహు యుద్ధ-ములు లోపటను భయము – కలిగె నెమ్మది దొలాగెను
పలు విధములగు సందియంబుల – వలన పోరాటములచే నే
నలసి యిటునటు గొట్టబడి దు-ర్బలుడనై గాయములతో నిదె ||ఉన్న||

4. కడు బీద వాడ నం-ధుడను దౌర్భాగ్యుడను చెడిపోయి పడియున్నాను
సుడివడిన నా మదికి స్వస్థత – చెడిన కనులకు దృష్టి భాగ్యము
బడయ వలసిన వన్ని నీ చే – బడయుటకు నా యొడ యడా యిదె ||ఉన్న||

5. నీ వాగ్దత్తము నమ్మి – నీపై భారము పెట్టి – జీవ మార్గము గంటిని
కేవలంబగు ప్రేమ చేతను – నీవు నన్ను క్షమించి చేకొని
భావ శుద్ధి నొనర్చి సంతో-షావసరముల నిడుదువని యిదె ||ఉన్న||

6. దరిలేని యానంద-కరమైన నీ ప్రేమ – తరమే వర్ణన చేయను
తెరవు కడ్డం బైన యన్నిటి – విరుగ గొట్టెను గాన నే నిపు
డరుదుగా నీ వాడ నవుటకు – మరి నిజము నీ వాడ నవుటకే ||ఉన్న||`,keywords:["unna paatuna vachu","unna patuna vachu","unnapatuna vachu","unnaa paatuna vachu","una patunavachu","unapatuna vachu","unnapaatuna vachu","7/8"],video:"",artist:"Purushotham Chowdary",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"ఉన్నాడు దేవుడు నాకు తోడు",lyrics:`ఉన్నాడు దేవుడు నాకు తోడు 
విడనాడడెన్నడు ఎడబాయడు 
కష్టాలలోనా నష్టాలలోనా 
వేదనలోనా శోధనలోనా 

1. గాఢాంధకారములో సంచరించినా 
కన్నీటిలోయలో మునిగి తేలిన  (2)
కరుణలేని లోకము కాదన్నను   (2)
కన్నీరు తుడుచును నను కొన్నవాడు

2. యెహోవా సన్నిధిలో నివసింతును 
చిరకాలమాయనతో సంతసింతును  (2) 
కృపామధుర క్షేమములే నావెంటే ఉండును (2)
బ్రతుకు కాలమంతయు హర్షింతును`,keywords:["unnadu dhevudu","unnadu devudu","unadu devudu","unadu deevudu","unnadu dheevudu"],video:"",artist:"Balraj",genre:["General","Hope","Comfort"],timeSignature:"4/4"}],ఊ:[{id:l(),title:"ఊహకు అందని కార్యముల్",lyrics:`ఊహకు అందని కార్యముల్
ఊహించని రీతిలో నాకై చేసిన దేవా
ఊహకు అందని వేళలో
ఊహించని మేలులన్ నాకై చేసిన దేవా
ఉత్సహించి పాడెదన్ ఉల్లసించి చాటెదన్
నీదు నామ గీతము నాదు జీవితాంతము
కొనియాడెదన్ కీర్తించెదన్ స్తోత్రించెదన్      ||ఊహకు||

కనబడవు మా కళ్ళకు – మరి వినబడవు మా చెవులకు
ఊహలకే అస్సలందవు – ప్రభు నీ కార్యముల్ (2)

1. అడుగువాటి కంటెను – ఊహించు వాటి కంటెను
అద్భుతాలు చేయగా – వేరెవరికింత సాధ్యము
అసాధ్యమైనదేది నీకు లేనే లేదు
ఇల నీకు మించి నాకు దైవమెవరున్నారు (2)       ||ఉత్సహించి||

2. బండ నుండి నీళ్లను – ఉబికింపజేసినావుగా
ఎడారిలో జల ధారలు – ప్రవహింపజేసినావుగా
కనుపాప లాగ నన్ను కాచే దైవం నీవు
నడి సంద్రమైన నన్ను నడిపే తోడే నీవు (2)       ||ఉత్సహించి||`,keywords:["oohaku andhani kaaryamul","oohaku andani karyamul","voohaku andhani kaaryamul","voohaku andani karyamul","vohaku andani karyamulu","ohaku andhani karyamul","oohako andhani karyamul"],video:"",artist:"Samy Pachigalla",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఊహకు అందని ప్రేమ",lyrics:`ఊహకు అందని ప్రేమ నా యేసు ప్రేమ
వెలకు అందని ప్రేమ నా యేసు ప్రేమ  (2)
తరాలెన్ని మారిన యుగాలెన్ని గడిచిన (2)
జగాన మారనిది యేసు ప్రేమ

ప్రేమ ప్రేమ నా యేసు ప్రేమ ప్రేమ ప్రేమ నా యేసు ప్రేమ (2)

1.మనిషిని మనిషి ప్రేమించుటకు స్వార్థం మూలకారణం
దేవా నీవు ప్రేమించుటకు నీ కృపే కారణం (2)
మనుషులు మారిన మమతలు మారిన
బంధాలు వీడినా యేసు ప్రేమ మారదు (2) || ప్రేమ ప్రేమ ||

2. జీవితమంతా పోరాటం ఏదో తెలియని ఆరాటం
నిత్యం ప్రేమకై వెదకటం దొరకకపోతే సంకటం (2)
మనుషుల ప్రేమ కొంచెం ప్రేమకు కూడ లంచం
యేసు ప్రేమ శాశ్వతం జీవితానికే సార్ధకం (2) || ప్రేమ ప్రేమ ||`,keywords:["oohaku andhani prema","oohaku andani prema","voohaku andhani prema","voohaku andani prema","vohaku andani prema","ohaku andhani prema","oohako andhani prema"],video:"",artist:"Dr. Akumarthi Daniel",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ఊహకందని ఉపకారములు కృప వెంబడి కృపలు",lyrics:`ఊహకందని ఉపకారములు కృప వెంబడి కృపలు
మరువలేని నీదు మేలులు - వర్ణించలేని వాత్సల్యములు

యేసయ్యా నీవే ఆధారమయ్యా - నా మంచి కాపరి నీవేనయ్యా

1. నూనెతో నా తలనంటియున్నావు - నా గిన్నె నిండి పొర్లుచున్నదీ
నే బ్రతుకు దినములన్నియు కృపాక్షేమములే నా వెంట వచ్చును ||యేసయ్యా నీవే||

2. పచ్చిక చోట్లలో పరుండచేయును - శాంతికర జలములకు నడుపును
నా ప్రాణమునకు సేద దీర్చి - నీతి మార్గములో నను నడిపించును ||యేసయ్యా నీవే||

3. గాఢాంధకారములో నడిచిననూ - నాకు తోడుగా నీవుందువు
ఏ తెగులును నా దరి రానీయక ప్రతీ కీడు నుండి తప్పించును ||యేసయ్యా నీవే||`,keywords:["oohaku andhani upakaaramulu","oohaku andani upakaramulu","voohaku andhani upakaaramulu","voohaku andani upakaramulu","oohakandhani upakaramulu","oohakandani upakaramulu","vohaku andani prema","ohaku andhani prema","oohako andhani prema"],video:"",artist:"Sharon Philip",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"ఊహకందనంత ఉన్నతం నాపట్ల",lyrics:`ఊహకందనంత ఉన్నతం నాపట్ల 
నీవు చూపుచున్న ప్రేమ యేసయ్యా
స్థితిని పరిగణించక గతము చూడక 
నన్ను కోరుకున్న రీతి ఎంత అద్భుతం

ప్రాణమిచ్చునంతటి గాఢమైన ప్రేమది
నాకు అనుగ్రహించబడినది

1. జారిపడ్డ చోటునే వదిలివేయక 
వెదకి పలకరించి నిలువబెట్టుకున్నది
గాయము మాన్పిన స్వస్థత కూర్చిన 
దివ్య ప్రేమది యేసూ నాకు వరమది

2. దూరమైన వేళలో తడవు చేయక 
పిలిచి కనికరించి తిరిగి చేర్చుకున్నది
రూపము మార్చిన క్షేమమునిచ్చిన
గొప్ప ప్రేమది యేసూ నాకు వరమది

3. కృంగదీయు బాధలో ముఖము దాచక 
మనవి అనుగ్రహించి కృపను చూపుచున్నది
అక్కర తీర్చిన ధైర్యము నింపిన 
వింత ప్రేమది యేసూ నాకు వరమది`,keywords:["oohakandhanantha unnatham naapatla","oohakandhanantha unnatam","oohakandanantha unnatam","vohakandhanantha unnatam","vuhakandananta unatam","stevenson"],video:"",artist:"Dr.A.R.Stevenson, Akshaya Praveen",genre:["General","Love"],timeSignature:"6/8"},{id:l(),title:"ఊహించలేని మేలులతో నింపిన",lyrics:`ఊహించలేని మేలులతో నింపిన
నా యేసయ్యా నీకే నా వందనం (2)
వర్ణించగలనా నీ కార్యముల్
వివరించగలనా నీ మేలులన్ (2) ||ఊహించలేని||

1. మేలులతో నా హృదయం తృప్తిపరచినావు
రక్షణ పాత్రపుచ్చి నిన్ను స్తుతియింతును (2)
ఇశ్రాయేలు దేవుడా నా రక్షకా
స్తుతియింతును నీ నామమును (2) ||ఊహించలేని||

2. నా దీనస్థితిని నీవు మార్చినావు
నా జీవితానికి విలువనిచ్చినావు (2)
నీ కృపతో నన్ను ఆవరించినావు
నీ సన్నిధి నాకు తోడునిచ్చినావు (2) 
||ఊహించలేని|| 

3. నా ప్రాణమా నా అంతరంగమా
యెహోవ నామమును సన్నుతించుమా (2)
యేసయ్య చేసిన ఉపకారములలో
దేనిని నీవు మరువకుమా (2)  || ఊహించలేని ||`,keywords:["oohinchaleni melulatho nimpina","uhinchaleni melulato","ohinchaleni melulatho","oohinchaleney melulato","voohinchaleni malulatho","vohinchaleni"],video:"https://www.youtube.com/embed/HHCa-1HSg0o?start=0&end=20",artist:"",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"ఊహించలేను ప్రభూ నీ మమతను",lyrics:`ఊహించలేను ప్రభూ నీ మమతను  
వివరించలేను యేసు నీ ప్రేమను 
నువు లేక ఇలలో నేను బ్రతికేదెలా 
ఎనలేని నీ ప్రేమను కొలిచేదెలా 
 
1. ఈ లోక గాయాలతో నిను చూడగా 
లోతైన నీ ప్రేమతో కాపాడగా 

కొరతంటు లేదే ప్రభూ నీ కరుణకు 
అలుపంటు రాదే సదా నీ కనులకు 

ప్రతీ దినం ప్రతీ క్షణం 
నీ ప్రేమ లేకపోతే నిరుపేదనూ 

2. నాలోని ఆవేదనే నిను చేరగా 
నా దేవ నీ వాక్యమే ఓదార్చగా    

ఘనమైన నీ నామమే కొనియాడనా      
విలువైన నీ ప్రేమనే నే పాడనా  

ఇదే వరం నిరంతరం 
నీతోనే సాగిపోనా  - నా యేసయ్య`,keywords:["oohinchalenu prabhu ni mamathanu","ohinchalenu prabhu ni mamathanu","oohinchalenu prabu ni mamathanu"],video:"",artist:"Pranam Kamlakhar, Joshua Shaik, Karthik",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఊహించలేనివి - ఆహ్లాదమైనవి (యేసు, రక్షణకే ఆధారం)",lyrics:`ఊహించలేనివి - ఆహ్లాదమైనవి - ఎన్నెన్నో మేలులు -  పొందండి ఈ వేళా
యేసయ్య త్రోవలు - ఎనలేని ఈవులు - యేసయ్య వరములు - ఇవన్నీ కావాలా
యేసే మార్గము - యేసే  గమ్యము - యేసే జీవము మనకంతా ...
యేసు, రక్షణకే ఆధారం - యేసు ఉంటే చాలు - లేదు పాపభారం
నేడే రక్షణ కోరు - మారే రోజే నేడు - దక్కే గొప్ప భాగ్యం సత్యం ఈ మాటా...

1. పాపము లేని - పావనుడేసు - పాపము మోసాడే
సిలువలో మనకై - విలువగు ప్రాణం - నిలువున పెట్టాడే
తన రుధిరములో మన పాపం - కడవరకును కడిగాడే
తెలియక తిరుగాడు వారికి తెలియగ - చెబుదామిలా

2. క్షమయే లేని నిష్ఫలజీవికి - రక్షణనిచ్చాడే
సాక్షిగజేసి మోక్షము జేర్చా - ప్రక్షాళించాడే
తన తనయులుగా మననంతా - అనవరతమును నిలిపాడే
తెలియక తిరుగాడు వారికి తెలియగ చెబుదామిలా`,keywords:["oohinchalenivi ahladhamainavi","oohinchalenivi","yesu rakshanake aadharam","Easter"],video:"",artist:"Rajesh Tatapudi & Raymond Kingston Manepalli",genre:["Easter","General"],timeSignature:"4/4"}],ఎ:[{id:l(),title:"ఎంత పాపినైనను యేసు చేర్చుకొనును",lyrics:`1. ఎంత పాపినైనను
యేసు చేర్చుకొనును
అంచు నీ సువార్తను
అంత జాటించుడి

హల్లెలూయ హల్లెలూయ
ఎంత పాపినైనను
యేసు చేర్చుకొనున
టంచు బ్రకటించుడి

2. మెండుగా క్షమాపణన్
పూర్ణ సమాధానము
నెంత పాపి కైన దా
నిచ్చి చేర్చుకొనును     ||హల్లెలూయ||

3. తన దివ్య సిల్వచే
దీసి పాప శాపమున్
నను బవిత్రపర్చెను
నాకు హాయి నిచ్చెను     ||హల్లెలూయ||

4. ఘోర పాపినైనను
నన్ను జేర్చుకొనును
పూర్ణ శుద్ధి నిచ్చును
స్వర్గమందు జేర్చును     ||హల్లెలూయ||`,keywords:["yentha paapi nainanu","entha papi nainanu","enta papi nainanu"],video:"",artist:"Alluri Pedhaveeraswami",genre:["Andhra Christian Hymn"],timeSignature:""},{id:l(),title:"ఎక్కడెక్కడో పుట్టి ఎక్కడెక్కడో పెరిగి",lyrics:`ఎక్కడెక్కడో పుట్టి ఎక్కడెక్కడో పెరిగి
చక్కనైన జంటగా ఇద్దరొక్కటగుటేమిటో
ఇది దేవుని సంకల్పం సృష్టిలో విచిత్రం

1. ఒంటరి బ్రతుకులు విడిచెదరు
ఒకరికొరకు ఒకరు బ్రతికెదరు
పెళ్ళినాటినుండి తల్లితండ్రుల వదలి
భార్యభర్తలు హత్తుకొనుటేమిటో

2. గతకాలకీడంతా మరచెదరు
మేలులతో సంతసించెదరు
పెళ్ళినాటినుండి ఒకరి కష్టం ఒకరు
ఇష్టముతో పంచుకొనుటేమిటో

3. ఫలియించి భూమిని నింపెదరు
విస్తరించి వృద్ధిపొందెదరు
పెళ్ళినాటినుండి మా కుటుంబం అంటూ
ప్రత్యేకముగా ఎంచుకొనుటేమిటో`,keywords:["ekkadekkado putti","yekkadekkado putti","yekadekado putti","ekadekado putti","marriage song","ఎక్కడెక్కడో పుట్టి ఎక్కడెక్కడో పెరిగి","ekkadekado putti","akkadekkado putti","akadakado putti"],video:"",artist:"",genre:["Marriage"],timeSignature:"6/8"},{id:l(),title:"ఎడబాయని నీ కృప",lyrics:`ఎడబాయని నీ కృప
నను విడువదు ఎన్నటికీ (2)
యేసయ్యా నీ ప్రేమానురాగం
నను కాయును అనుక్షణం (2)  ||ఎడబాయని||

1. శోకపు లోయలలో – కష్టాల కడగండ్లలో
కడలేని కడలిలో – నిరాశ నిసృహలో (2)
అర్ధమేకాని ఈ జీవితం
ఇక వ్యర్థమని నేననుకొనగ (2)
కృపా కనికరముగల దేవా
నా కష్టాల కడలిని దాటించితివి (2) ||ఎడబాయని||

 2. విశ్వాస పోరాటంలో – ఎదురాయె శోధనలు
లోకాశల అలజడిలో – సడలితి విశ్వాసములో (2)
దుష్టుల క్షేమమునే చూచి
ఇక నీతి వ్యర్థమని అనుకొనగ (2)
దీర్ఘశాంతముగల దేవా
నా చేయి విడువక నడిపించితివి (2) ||ఎడబాయని||

 3. నీ సేవలో ఎదురైన – ఎన్నో సమస్యలలో
నా బలమును చూచుకొని – నిరాశ చెందితిని (2)
భారమైన ఈ సేవను
ఇక చేయలేనని అనుకొనగ (2)
ప్రధాన యాజకుడా యేసు
నీ అనుభవాలతో బలపరిచితివి (2) ||ఎడబాయని||`,keywords:["yedabaayani ni krupa","yadabayani nee krupa","yedabayani ni krupa","edabayani ni krupa","adabayani ni krupa","adabaayani ni krupa","adabayani ne krupa","adabaayani nee krupa","yedabaayane ni krupa","yedabaayani nee krupa","yedabayani ne krupa","yedabayani nee krupa","yedabaayane nee krupa","yedabayane nee krupa","yedabayane ni krupa","yadabayani nee krupa","yadabayani ni krupa","yedabayane"],video:"",artist:"Pastor Mathews",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఎత్తైన కొండపైన – ఏకాంతముగ చేరి",lyrics:`ఎత్తైన కొండపైన – ఏకాంతముగ చేరి
రూపాంతర యనుభవము పొ౦ద – ప్రార్ధించు ఓ ప్రియుడా (2)

1. క్రీస్తు యేసు వెంటను – కొండపైకి ఎక్కుము (2)
సూర్యునివలె ప్రకాశింపమోము – వస్త్రముకాంతివలెను(2)
వస్త్రముకాంతివలెను…

2. పరిషుద్ద సన్నిధిలో – ప్రభువుతో మాట్లాడుము (2)
ప్రభువు తిరిగి మాట్లాడు వరకు – ప్రార్ధించి ధ్యానించుము(2)
ప్రార్ధించి ధ్యానించుము...`,keywords:["yethaina kondapaina","ethaina konda paina","yetaina konda paina","yethaina konda payna","ethaina konda paina"],video:"",artist:"",genre:["General","Prayer"],timeSignature:"4/4"},{id:l(),title:"ఎబినేజరే/నేను నా ఇల్లు",lyrics:`*******Original Translation*******
నేను నా ఇల్లు నా ఇంటివారందరు 
మానక స్తుతించెదము (2) 
నన్ను పిండము వలె కాచావు స్తోత్రం
నే చెదరక మోసావు స్తోత్రం (2) 

ఎబినేజరు ఎబినేజరు ఇంతవరకు మోసితివే
ఎబినేజరు ఎబినేజరు నా తలంపుతోనే నున్నావే
 
స్తోత్రం  స్తోత్రం  స్తోత్రం
హృదయములో మోసితివే స్తోత్రం
స్తోత్రం  స్తోత్రం  స్తోత్రం 
పిండము వలె మోసితివే స్తోత్రం

1. ఏమియు లేకుండ సాగిన నా బ్రతుకును 
మేలులతో నింపితివే  (2) 
ఎట్టి కీడైన తలంచని నీవు
ఏ తండ్రైన నీలాగ లేరు  (2)  ||ఎబినేజరు||

2. అనుదినము నా అవసరతలన్నియు
పొందితి నీ కరము చే  (2) 
నీ నడిపింపు వివరించలేను 
ఒక పరిపూర్ణ మాటైన లేదు  (2) ||ఎబినేజరు||
 
3. జ్ఞానుల మధ్యలో వెఱ్ఱివాడనైన నన్ను
పిలిచినది అధ్బుతము  (2) 
నేను దేనికి పాత్రను కాదు
ఇది కృపయే వేరేమి లేదు  (2)

**********Other Translation*******

నేను నా ఇల్లు నా ఇంటి వారందరు
మానక స్తుతించేదము (2)
నీ కనుపాపలే నన్ను కాచి
నేను చెదరక మోసావు స్తోత్రం  (2)
 
ఎబినేజరే - ఎబినేజరే 
ఇంత కాలము కాచితివే 
ఎబినేజరే - ఎబినేజరే
నా తోడువై నడిచితివే
స్తోత్రం స్తోత్రం స్తోత్రం 
కనుపాపగా కాచితివి స్తోత్రం
స్తోత్రం స్తోత్రం స్తోత్రం 
కౌగిలిలో  దాచితివి స్తోత్రం

1. ఎడారిలో ఉన్న నా జీవితమును
మేళ్లతో నింపితివి (2)
ఒక కీడైన దరి చేరక నన్ను
తండ్రిగా కాచావు స్తోత్రం (2)  ||ఎబెనేజరే||
 
2. ఆశలే లేని నా బ్రతుకును
నీ కృపతో నింపితివి
ఏ ఆశలే లేని నా బ్రతుకును
నీ కృపతో నింపితివి
నీవు చూపిన ప్రేమను పాడగా 
పదములు సరిపోవు తండ్రి (2)  ||ఎబెనేజరే||`,keywords:["ebenesare","ebeynezare","ebenezare","abenejare","ebenejare","ebenijare","ebenejarey","nenu na illu","nenu naa illu","nanu na illu","nenu na ellu","neynu na illu","ebinezare","ebinesare","abinesare","abinezare","ebinejare","abinejare","john jebaraj","jebaraj","nenu na ilu","neynu naa ilu","abenesare","abenisare","abenejarey"],video:"https://www.youtube.com/embed/KG2bDwwDgUM?start=1040",artist:"John Jebaraj",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"ఎల్ రోయి వై నను చూడగా",lyrics:`ఎల్ రోయి వై నను చూడగా 
నీ దర్శనమే నా బలమాయెను 
ఎల్ రోయి వై నీవు నను చేరగా 
నీ స్వరమే నాకు ధైర్యమిచ్చెను 

నీ ముఖ కాంతియే నా ధైర్యము 
నీ ముఖ కాంతియే నా బలము 

1. మరణమే నన్నావరించగా 
నీ వాక్యమే నాతో నిలిచెను 
ఎల్ రోయి వై నను చూడగా 
శత్రువే సిగ్గు నొందెను     ||నీ ముఖ||

2. విశ్వాసమే శోధింపబడగా 
నీ కృపయే నాతో నిలిచెను 
ఎల్ రోయి వై నను చూడగా 
శత్రు ప్రణాళిక ఆగిపోయెను       ||నీ ముఖ|| 

3. ఒంటరినై నేను నిను చేరగా 
నా పక్షమై నీవు నిలచితివే 
ఎల్ రోయి వై నను చూడగా 
శత్రువే పారిపోయెను        ||నీ ముఖ||`,keywords:["el roy","el royi","el royi vai nanu chudaga","elroyivai nannu chudaga","elroy","elroi"],video:"",artist:"Ps Nehemiah David and Kathryn",genre:["Worship","General"],timeSignature:"3/4"},{id:l(),title:"ఎవరికి ఎవరు ఈ లోకంలో",lyrics:`ఎవరికి ఎవరు ఈ లోకంలో
చివరికి యేసే పరలోకంలో (2) ||ఎవరికి||

1. ఎవరెవరో ఎదురౌతుంటారు
ప్రాణానికి నా ప్రాణం అంటారు (2)
కష్టాలలో వారు కదిలి పోతారు
కరుణగల యేసు నాతో ఉంటాడు (2) ||ఎవరికి||

2. ధనము నీకుంటే అందరు వస్తారు
దరిద్రుడవైతే దరికెవ్వరు రారు (2)
ఎవరిని నమ్మిన ఫలితము లేదురా
యేసుని నమ్మితే మోక్షం ఉందిరా (2) ||ఎవరికి||

3. మనుషుల సాయం వ్యర్ధమురా
రాజుల నమ్మిన వ్యర్ధమురా (2)
యెహోవాను ఆశ్రయించుట
ఎంత మేలు.. ఎంతో మేలు (2) ||ఎవరికి||`,keywords:["yevariki yevaru","evariki evaru","evariki yevaru","yevariki evaru","yevariki evru","evriki evru","avariki avaru","avariki evaru","evariki avaru","evarike yevaru","yevareke yevaru","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఎవరికి ఎవరు ఈలోకంలో",lyrics:`ఎవరికీ ఎవరు ఈలోకములో
ఎంత వరకు మనకీబంధము (2)
ఎవరికి ఎవరు సొంతము
ఎవరికీ ఎవరు శాశ్వతము (2)

మన జీవితం ఒక యాత్ర మనగమ్యమే ఆ యేసు 
మన జీవితం ఒక పరీక్ష దాన్నీ గెలవడమే మన తపన (2)
 
1. తల్లితండ్రుల ప్రేమ ఈ లోకమున్నంత వరకే
అన్నదమ్ముల ప్రేమ అనురాగమున్నంత వరకే (2)
స్నేహితుల ప్రేమ ప్రియురాలి ప్రేమ 
స్నేహితుల ప్రేమ ప్రియుని ప్రేమ
నీ ధనమున్నంతవరకే (2)      ||మన జీవితం||

2. ఈ లోక శ్రమలు ఈ దేహమున్నంత వరకే
ఈ లోక శోధనలు క్రీస్తులో నిలిచేంత వరకే (2)
యేసులో విశ్వాసము యేసుకై నీరీక్షణ (2)
కాదెన్నడు నీకు వ్యర్థం (2)     ||మన జీవితం||`,keywords:["yevariki yevaru eelokamulo","evariki evaru eelokamlo","evariki yevaru","yevariki evaru","yevariki evru","evriki evru","avariki avaru","avariki evaru","evariki avaru","evarike yevaru","yevareke yevaru","4/4"],video:"",artist:"Evan Mark Ronald, Bharat Mandru, David Selvam",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఎవరు చూపించలేని",lyrics:`ఎవరు చూపించలేని – ఇలలో నను వీడిపోని
ఎంతటి ప్రేమ నీది – ఇంతగా కోరుకుంది – మరువను యేసయ్యా (2)

నీ కథే నన్నే తాకగా – నా మదే నిన్నే చేరగా
నా గురే నీవై యుండగా – నీ దరే నే చేరానుగా ||ఎవరు||

1. తీరాలే దూరమాయే – కాలాలే మారిపోయే
ఎదురైన ఎండమావే – కన్నీటి కానుకాయే
నా గుండె లోతులోన – నే నలిగిపోతువున్నా
ఏ దారి కానరాక – నీ కొరకు వేచివున్నా
ఎడబాటులేని గమనాన – నిను చేరుకున్న సమయాన
నను ఆదరించే ఘన ప్రేమ – అపురూపమైన తొలిప్రేమ
ఏకమై తోడుగా – ఊపిరే నీవుగా
ఎవ్వరూ లేరుగా – యేసయ్యా నీవెగా ||ఎవరు||

2. ఈ లోక జీవితాన – వేసారిపోతువున్నా
విలువైన నీదు వాక్యం – వెలిగించె నా ప్రాణం
నీ సన్నిధానమందు – సీయోను మార్గమందు
నీ దివ్య సేవలోనే – నడిపించే నా ప్రభూ
నీ తోటి సాగు పయనాన – నను వీడలేదు క్షణమైన
నీ స్వరము చాలు ఉదయాన – నిను వెంబడించు తరుణాన
శాశ్వత ప్రేమతో – సత్యవాక్యంబుతో
నిత్యము తోడుగా – నిలిచె నా యేసయ్యా ||ఎవరు||`,keywords:["yevaru chupinchaleni","evaru chuoinchaleni","yevaru chupinchaleyni","yevaruchupinchaleni","avaru chupinchaleni","evaru chupinchaleni","4/4"],video:"",artist:"Pranam Kamlakhar",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ఎవరు నన్ను చేయి విడచిన",lyrics:`ఎవరు నన్ను చేయి విడచిన
యేసు చేయి విడువడు (2)
చేయి విడువడు (3)
నిన్ను చేయి విడువడు ||ఎవరు ||

1. తల్లి ఆయనే తండ్రి ఆయనే (2)
లాలించును పాలించును (2) ||ఎవరు|| 

2. వేదన శ్రమలూ ఉన్నప్పుడల్లా (2)
వేడుకొందునే కాపాడునే (2) ||ఎవరు||

3. రక్తము తోడ కడిగి వేసాడే (2)
రక్షణ సంతోషం నాకు ఇచ్చాడే (2) ||ఎవరు||

4. ఆత్మ చేత అభిషేకించి (2)
వాక్యముచే నడుపుచున్నాడే (2) ||ఎవరు||`,keywords:["evaru nannu cheyi vidichina","yevaru nannu cheyi vidachina","yevaru nanu cheya vidachinaa","evaru nannu cheya vidachina","avaru nannu cheyi vidachina","avaru nannu cheyi vidichina","6/8"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఎవరైనా ఉన్నారా ఎచటైనా ఉన్నారా",lyrics:`ఎవరైనా ఉన్నారా ఎచటైనా ఉన్నారా
ఈలాటి స్నేహితుడు
నా యేసయ్యలాంటి మంచి స్నేహితుడు
ప్రేమించి ప్రాణంబెట్టిన గొప్ప స్నేహితుడు

1. హేతువేమి లేకుండా లాభమేమి పొందకుండా
ప్రేమ చూపువారు లేరు లోకమందునా
నేను కోరుకోకుండా నాకోసము
తనకు తాను చేసినాడు సిలువయాగము

2. అంతస్థులు లేకుండా అర్హతలు చూడకుండా
జతను కోరువారు దొరకరు ఎంత వెదకినా
నీచుడనని చూడకుండా నాకోసము
మహిమనంతా వీడినాడు ఏమి చిత్రము

3. స్వార్ధమేమి లేకుండా ఫలితం ఆశించకుండా
మేలు చేయువారు ఎవరు విశ్వమందునా
ఏమి దాచుకోకుండా నాకోసము
ఉన్నదంతా ఇచ్చినాడు ఏమి త్యాగము`,keywords:["evaraina unnara","yevaraina unnara","evaraina unara","yevarina unnara","yevaraina unara","evarina unara","evarina unnara","yevarina unara","stevenson","4/4"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఎవరో నన్నిలా మార్చినది",lyrics:`ఎవరో నన్నిలా మార్చినది - యెడబాయని కృప చూపినది 
ఎవరూ చూపని అనురాగమున  
ఏదో తెలియని ఆప్యాయతను చూపించినది - ఇంకెవరూ
ఇదే కదా ప్రేమ యేసయ్య ప్రేమ - మధురమైన ప్రేమ దివ్యమైన ప్రేమ

1. దేహమే దేవుని ఆలయమేనని - దేవుని ఆత్మకు నిలయము నేనని 
మలినము కడిగి ఆత్మతోనింపి - సమముద్రించి శుద్ధహృదయము 
కలిగించినది రాకడ కొరకే    ||ఇదే కదా||

2. మార్గము తెలియక మౌనము వీడక - వేదన కలిగిన నను విడనాడక 
ప్రేమతో చేరి గమ్యము చూపి - ఒంటరి చేయక జంటగ నిలచి 
వేదన బాధలు తొలగించినది   ||ఇదే కదా||

3. చీకటికమ్మిన చెలిమివాకిట - చెదరిన మనస్సుతో ఒంటరినై 
సత్యము నమ్మక మమతమ వీడి - ఎన్నడు ప్రభుని స్వరమును వినక 
శిలగా మారిన నను మార్చినది    ||ఇదే కదా||`,keywords:["yevaro nannila marchinadhi","yevaro nannu ila marchinadi","yevaro nanila marchinadhi","evaro nannila marchinadhi","yevaroo nannila marchinadhi","yevaro nanila marchinadi","evaroo nannila marchinadhi","evaro nannu ila marchinadi","evaroo nannu ila","evaru nannila marchinadhi","yevaru nannila marchinadhi","evaru nannila marchinadi","evaro nannu ela","yevaro nannu ela"],video:"",artist:"Pranam Kamlakhar and Swetha Mohan",genre:["General","Hope","Comfort"],timeSignature:"4/4"},{id:l(),title:"ఎత్తుకే ఎదిగినా – నామమే పొందినా (నా ప్రియ యేసు రా)",lyrics:`ఎత్తుకే ఎదిగినా – నామమే పొందినా (2)
నాకు మాత్రము నీవే చాలయ్యా
నీ జాడలో నే నడుస్తానయ్యా
నీ కౌగిలిలో నే ఉంటా
రా... నా ప్రియ యేసు రా... హో... ఓ...
రా... నా ప్రియ యేసు రా  (2)

1. ఆశీర్వాదములు కావయ్యా
అభిషేకము కొరకు కాదయ్యా (2)
నీవే నా ఆశీర్వదమయ్యా
నీవు లేని అభిషేకం నాకెందుకయ్యా (2)
నిన్ను తాకనా నా ప్రాణం నీవయ్యా
నీ జాడలో నే నడుస్తానయ్యా
నీ కౌగిలిలో నే ఉంటా ఓ...
రా... నా ప్రియ యేసు రా... హో... ఓ...
రా.. నా ప్రియ యేసు రా  (2)

నీకై నేను – నాకై నీవు
ఉంటే చాలయ్యా – అదియే నా ఆశ దేవా
నాలో ఉన్నవాడా – నాతో ఉన్నవాడా
నీవుంటే చాలయ్యా – రావా నాకై
నా ప్రాణం నీవయ్యా – నా ప్రేమ నీకేయ్యా
నీవే నా ఊపిరి యేసయ్యా
నీ పాదాలపై అత్తరునై నేనుంటా
నా ప్రాణ ప్రియుడా యేసయ్యా

2. పరలోకము కొరకు కాదయ్యా
వరముల కొరకు కాదయ్యా
ప్రవచనముల కొరకు కాదయ్యా
నీవుంటే నాకు చాలయ్యా
నీ శ్వాసే పరలోకం దేవా
నిను పోలిన వరములు ఏవి లేవయ్యా
ఎన్నెన్ని వరములు నాకున్నా
నీవు లేని జీవితమే వ్యర్ధముగా
నీ కోసమే బ్రతికెదను యేసయ్యా
నీ కోసమే చావైనా మేలేగా

నీ..కై ఎవరు రాకున్నా హో…
నీ సువార్తను ప్రకటిస్తా హో... ఓ...
నీ హతసాక్షిగ నే చస్తా
రా... నా ప్రియా యేసు రా

నీ చేయి తాకగానే కన్నీరు పొంగి పొర్లే
నా కన్నీటిని చూసి నీ కన్నీరే నను చేరే
కన్నీరు కలిసినట్టు కలవాలనుంది యేసు
నీకై నే వేచి ఉన్నా రావా నాకై
నా గుండె చప్పుడే పిలిచె నిను రమ్మని
నీవే నా ఊపిరి యేసయ్యా
నీ గుండె లోతున ఆలోచన నేనేగా
నా ప్రాణ ప్రియుడా యేసయ్యా... హో

నాకు మాత్రము నీవే చాలయ్యా  (4)
వీడని ప్రియుడవు రావా నాకై
నిన్ను పోలి ఉంటా నే రావా నాకై
వేచియున్నా నీ కోసం రావా నాకై
ప్రేమిస్తున్నా నిన్నే నే రావా నాకై
రావా దేవా రావా దేవా
నాకు మాత్రము నీవే చాలయ్యా
నా కోసము రావా యేసయ్యా త్వరగా`,keywords:["yethuke yedhiginaa","ethuke edhigina","yetuke yedigina","yethuke edhigina","ethuke edigina","etuku edigina"],video:"",artist:"Pranith Paul",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఎందకనీ నేనంటే ఇంత ప్రేమ",lyrics:`ఎందకనీ నేనంటే ఇంత ప్రేమ
దేనికనీ నాపైన - ఇంత కరుణ
జడివాన లోయలో  - ఎదురీత బాటలో  
ఎన్నడూ వీడనీ - దైవమా యేసయ్య 
ఎందకనీ నేనంటే ఇంత ప్రేమ
దేనికనీ నాపైన - ఇంత కరుణ 

1. ఆశ చూపే లోకం - గాయాలు రేపెనే 
గాలి వానై నాలో - నను కృంగదీసెనే 
మాతృమూర్తి నీవై - లాలించె నన్నిలా 
ఆదరించసాగే - నీ ప్రేమ వెన్నెల 
క్షణమైనా - యుగమైనా - నీ మమతే కనుపాపలా

2. మోయలేని భారం - నీపైన మోపగా
ఆరిపోదు దీపం - నీ చెంతనుండగా 
ఎండమావియైనా - నీ ప్రేమ చాలుగా
ఎంత దూరమైనా - నా తోడు నీవెగా
కలనైనా - ఇలనైనా - నీ కృపలో కాపాడవా`,keywords:["yendhukani nenante intha prema","endukani nenante intha prema","yendhukani neenante intha prema","endukani nenante entha prema","endhukani nenante intha prema","yendhukane nenante intha prema","endukane neenante intha preema"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Anwesshaa",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ఎనలేని ప్రేమ నాపైన చూపి",lyrics:`ఎనలేని ప్రేమ నాపైన చూపి
నీ వారసునిగ చేసినావు (2)
నీ ప్రేమ నేను చాటెదన్
నా సర్వం నీవే యేసయ్యా (2)

1. నా శిక్షకు ప్రతిగా – ప్రాణము పెట్టిన దేవా
నీ సత్య మార్గములో – నను నడిపిన ప్రభువా (2)
నీ కృప చేత రక్షించినావే
నీ ఋణము నే తీర్చగలనా (2)         ||ఎనలేని||

2. తండ్రి లేని నాకు – పరమ తండ్రివి నీవై
ఒంటరినైయున్న నాతో – నేనున్నానని అన్నావు (2)
కన్నీరు తుడచి నన్నాదరించిన
ఆ జాలి నే మరువగలనా (2)       ||ఎనలేని||`,keywords:["yenaleeni prema napai chupi","enaleni prema napai","enaleeni prema napai chupi","yenaleni prema naapai chupi"],video:"",artist:"Aaron Jeshurun & Jonah Samuel",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ఎన్నాళ్ళు ఎన్నాళ్ళు ఈ పరుగులు",lyrics:`ఎన్నాళ్ళు ఎన్నాళ్ళు ఈ పరుగులు
ఓ క్షణము తీరికైన లేని ఉరుకులు
ఈ లోక ధనమును అధికార బలమును 
ఈ లోక ఘనతలు శరీర సుఖములు
వెతుకుచుంటే దొరుకు నలసటే 

1. నీ కలలు కోరికలకు అంతమంటూ ఉండదు
నీవెన్ని పోందుకున్నను సంతృప్తి మిగలదు
ఊహించినట్లు సిరులు నీకు సుఖములివ్వవు
ఈలోక భోగ మంతము నిరాశ మాత్రమే

ఈ లోకమంతయు నీ సొంతమైనను
నీ హృదిలో మాత్రము ఓ లోటు ఉండును
ఆ లోటు యేసుతోనే తీరును ||ఎన్నాళ్ళు||

2. అనిత్యమైన వాటి వెనుక పరుగు వ్యర్ధము
నిత్యుడైన యేసు వైపు నేడే తిరుగుము
యేసు నిత్య జీవము నీకివ్వ వలెనని
సిలువ పైన మరణమొంది తిరిగి లేచెను 
 
యేసు ప్రభువని అంగీకరించితే
పరిశుద్ధాత్ముడు నీ హృదిలో చేరును
ఆ హృదిలో వెలితి ఏల ఉండును ||ఎన్నాళ్ళు||`,keywords:["ennallu ennallu","yennallu yennallu","enalu enalu","yenalu yenalu","ennalu ennalu","yennalu yennalu","hadlee xavier"],video:"",artist:"Joel Kodali, Hadlee Xavier, Roshan Sebastian",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఎన్ని తలచినా ఏది అడిగినా",lyrics:`ఎన్ని తలచినా ఏది అడిగినా
జరిగేది నీ చిత్తమే (2)
నీ వాక్కుకై వేచియుంటిని
నా ప్రార్థన ఆలకించుమా (2) ప్రభువా

1. నీ తోడు లేక నీ ప్రేమ లేక
ఇలలోన ఏ ప్రాణి నిలువలేదు (2)
అడవి పూవులే నీ ప్రేమ పొందగా (2)
నా ప్రార్థన ఆలకించుమా (2) ప్రభువా ||ఎన్ని||

2. నా ఇంటి దీపం నీవే అని తలచి
నా హృదయం నీ కొరకై పదిలపరచితి (2)
ఆరిపోయిన నా వెలుగు దీపము (2)
వెలిగించుము నీ ప్రేమతో (2) ప్రభువా ||ఎన్ని||

3. ఆపదలు నన్ను వెన్నంటియున్నా
నా కాపరి నీవై నన్నాదుకొంటివి (2)
లోకమంతయూ నన్ను విడచినా (2)
నీ నుండి వేరు చెయ్యవు (2) ప్రభువా ||ఎన్ని||

4. నా స్థితి గమనించి నన్ను ప్రేమించి
నా కొరకై కల్వరిలో యాగమైతివి (2)
నీదు యాగమే నా మోక్ష మార్గము (2)
నీయందే నిత్యజీవము (2) ప్రభువా ||ఎన్ని||`,keywords:["enni talachina","enni thalachina","enni talachinaa","yenni talachina","yenni thalachina","yeni talachina","yeni thalachinaa","enne thalachina","enne talachina","enni thalachena","yenni thalachena","yenni talachena","6/8"],video:"",artist:"Bro. Joe Madhu & Sis. Jessie Veena",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఎల్లవేళలందు – కష్టకాలమందు",lyrics:`ఎల్లవేళలందు – కష్టకాలమందు
వల్లభుండా యేసున్‌ స్తుతింతున్‌
ఎల్లను నీవే నా కెల్లెడల
వల్లపడదే వివరింపన్‌ (2)

1. విమోచకుడా – విమోచన నీవే
రక్షకుడవు – నా రక్షణ నీవే (2)  ||ఎల్లవేళలందు||

2. సృష్టికర్తవు – సహాయము నీవే
ఇష్టుడ నీవు – త్రిత్వము నీవే (2)  ||ఎల్లవేళలందు||

3. జ్ఞానము నీవే – నా పానము నీవే
దానము నీవే – నా గానము నీవే (2)  ||ఎల్లవేళలందు||

4. జ్యోతివి నీవే – నా నీతివి నీవే
ఆదియు నీవే – నా అంతము నీవే (2)  ||ఎల్లవేళలందు||

5. నిత్యుడ నీవే – నా సత్యుండ నీవే
స్తోత్రము నీవే – నా నేత్రము నీవే (2)  ||ఎల్లవేళలందు||

6. జీవము నీవే – నా దేవుడవు నీవే
పావన నీవే – నా కావలి నీవే (2)  ||ఎల్లవేళలందు||

7. కాంతియు నీవే – నా శాంతియు నీవే
సంతస నీవే – నాకంతయు నీవే (2)  ||ఎల్లవేళలందు||`,keywords:["yella veelayandhu kashtakalamandhu","ella veelayandhu","ellavelayandhu","yellavelayandhu","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"ఎల్ షమా/ప్రతి ఉదయం - నిన్ను నమ్మి",lyrics:`దేవా చెవియొగ్గుము - దృష్టించుము - నిన్నే వెదకుచున్నాను
దేవా సెలవియ్యము - బదులియుము - నిన్నే వేడుచున్నాను 

ప్రతి ఉదయం - నిన్ను నమ్మి
ప్రతి రాత్రి - నిన్ను వేడి
ప్రతి ఘడియ - నిన్ను కోరి
నాహాల్     

ఆశతో వేచి ఉన్న నీవే నా నమ్మకం
ఓర్పుతో కాచి ఉన్న నీవేగా నా ధైర్యం  (2) 

ఎల్ షమా (3)నా ప్రార్ధన వినువాడ

1. ఎండిన భూమి వలె క్షీణించుచున్నాను
నీ తట్టు నా కరములు నే చాపుచున్నాను 

ఎండిన భూమి వలె వేచి వేచి యున్నాను
నీ తట్టు నా కరములు నే చాపుచున్నాను 

ఆత్మవర్షం నాపైన కురిపించుము ప్రభు
పోగొట్టుకున్నవి మరలా దయ చేయుము

ఆత్మ వర్షం కురిపించి నన్ను బ్రతికించుము
నీ చిత్తము నెరవేర్చి సమకూర్చుము ప్రభు


ఎల్ షమా (3)నా ప్రార్థన వినువాడ

2. విడిచిపెట్టకు ప్రభు ప్రయత్నిస్తున్నాను 
అడుగడుగు నా తోడై ఒడ్డుకు నన్ను చేర్చవా (2)

యెహోవా నా దేవా నీవే నాకున్నది 
బాధలో ఔషధం నీ ప్రేమే కదా (2)

ఎల్ షమా (3)నా ప్రార్థన వినువాడ

నీ శక్తియే - విడిపించును
నీ హస్తమే - లేవనెత్తును 
నీ మాటయే - నా బలము
నీ మార్గము - పరిశుద్ధము (2)

ఎల్ షమా (3)నా ప్రార్థన వినువాడ`,keywords:["el shama","yel shama","elshama","yelshama","elshamaa","ell shama","prahi udhayam ninnu nammi","prathi udhayam ninu nammi","prathi udhayam nenu nammi","dheva cheviyoggumu","deva cheviyoggumu","deeva chevi yoggumu","prayer","Raj prakash paul"],video:"",artist:"Jessy Paul, Raj Prakash Paul",genre:["General","Prayer","Hope","Comfort"],timeSignature:""},{id:l(),title:"ఎంతగా ప్రేమించావు నన్ను అంతగా సేవించగలనా",lyrics:`ఎంతగా ప్రేమించావు నన్ను అంతగా సేవించగలనా||2||
నాకు బలము చాలదు నా శక్తి చాలదు నాకు సహాయమియ్యవా యేసు||2||

యేసునే ఆరాధింతును యేసునే ఆరాధింతును
యేసునే ఆరాధింతును యేసునే ఆరాధింతును

1. నన్ను నీ పోలికలో చేసావు యేసయ్య
నీ ఊపిరి ఊది నాకు జీవమిచ్చినావయ్యా
నీ ప్రేమ నీ కృప ఎంత గొప్పదయ్యా నా తండ్రిదేవా||2||
||యేసునే||
                                             
2. ఘోరపాపినైన నా విడుదల కోసం
సిలువ శ్రమనొందినావా ఓ యేసయ్య||2||
ఎంత దయా వాత్సల్యమో అంత కృపకు నే అర్హుడనా||2||
||యేసునే||

3. ఆదరణ కర్తను మాకిచ్చినావయ్యా
ఆత్మ సహాయమును అందించినావయ్యా||2||
ఆదుకున్న ఓ ప్రభువా నీకే స్తుతి నా యేసయ్యా||2||
||యేసునే||`,keywords:["yentha preminmchavu nannu anthaga","yenthaga preminchavu nannu","yenta ga preminchavu"],video:"",artist:"Late Dr. Koppolu Sudhakara Babu, Raj & Smitha Kapudasi, Br.Nissy John, Br.Arif Dani, Br.Prasad.k & Br.Arif Dani",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"ఎంత మంచి దేవుడవేసయ్య",lyrics:`ఎంత మంచి దేవుడవయ్యా
ఎంత మంచి దేవుడవేసయ్యా
చింతలన్ని తీరేనయ్యా నిను చేరగా
ఎంత మంచి దేవుడవయ్యా (2) ||ఎంత||

1. ఘోరపాపిన నేనూ – దూరంగా పారిపోగా (2)
నీ ప్రేమతో నను క్షమియించి
నను హత్తుకొన్నావయ్యా (2) ||ఎంత||

2. నాకున్న వారందరూ – నను విడచిపోయిననూ (2)
ఎన్నెన్నో ఇబ్బందులకు గురి చేసిననూ
నను నీవు విడువలేదయ్యా (2) ||ఎంత||

3. నీవు లేకుండ నేనూ – ఈ లోకంలో బ్రతుకలేనయ్యా (2)
నా దేవా ఎప్పుడైన నను విడచితివా
నను విడువలేదు యేసయ్యా (2) ||ఎంత||`,keywords:["yentha manchi dhevudavesayya","yenthamanchi dhevuda","enthamanchi dhevuda","entha manchi","enthamanchi","anthamandhi dhevuda","4/4"],video:"",artist:"",genre:["General","Love","Comfort"],timeSignature:"4/4"},{id:l(),title:"ఎంతో వింత ఎంతో చింత",lyrics:`ఎంతో వింత ఎంతో చింత
యేసునాధు మరణ మంత (2)
పంతము తో జేసి రంత
సొంత ప్రజలు స్వామి నంత (2) ||ఎంతో||

1. పట్టి కట్టి నెట్టి కొట్టి
తిట్టి రేసు నాధు నకటా (2)
అట్టి శ్రమల నొంది పలుక
డాయె యేసు స్వామి నాడు (2)  ||ఎంతో||

2. మొయ్యలేని మ్రాను నొకటి
మోపి రేసు వీపు పైని (2)
మొయ్యలేక మ్రాని తోడ
మూర్చబోయే నేసు తండ్రి (2)  ||ఎంతో||

3. కొయ్యపై నేసయ్యన్ బెట్టి
కాలు సేతులలో జీలల్ (2)
కఠిను లంత గూడి కొట్టిరి
ఘోరముగ క్రీస్తేసున్ బట్టి (2)  ||ఎంతో||

4. దాహము గొన చేదు చిరక
ద్రావ నిడిరి ద్రోహు లకటా (2)
ధాత్రి ప్రజల బాధ కోర్చి
ధన్యుడా దివి కేగె నహహా (2) ||ఎంతో||

5. బల్లెముతో బ్రక్కన్ బొడవన్
పారే నీరు రక్త మహహా (2)
ఏరై పారే యేసు రక్త
మెల్ల ప్రజల కెలమి నొసగు (2)  ||ఎంతో||`,keywords:["yentho vintha","yentho vinta","entho vintha","enthoo vinthaa","yenthoo vintha","yento vinta","yenthoo vinta","entho vintaa","enthoo venthaa","entho ventha","7/8"],video:"",artist:"",genre:["Andhra Christian Hymn","Lent"],timeSignature:"7/8"},{id:l(),title:"ఎందుకో ఈ ఘోరపాపిని",lyrics:`ఎందుకో ఈ ఘోరపాపిని
చేర దీశావు ప్రభువా
ఏముంది నాలో నీ పరిశుద్ధత లేదే
అయినను నన్ను కరుణించావు
ప్రేమించావు నన్ను విడిపించావు (2)
||ఎందుకో ఈ ఘోరపాపిని||

1. అన్యాయపు తీర్పు పొందావు నాకై
అపహాస్యం భరియించవా
ఆదరణ కరువై బాధింపబడియు
నీ నోరు తెరువ లేదే
నీ ప్రేమ మధురం నీ ప్రేమ అమరం
నీ త్యాగమే నన్ను బ్రతికించింది
||ఎందుకో ఈ ఘోరపాపిని||

2. ఉమ్మిరి నీదు మోముపైన
నా కోసం భరియించవా
గుచ్చిరి శిరమునే ముండ్లమకుటాని
నా కోసం ధరియించవా
నీ ప్రేమ మధురం నీ ప్రేమ అమరం
నీ త్యాగమే నన్ను బ్రతికించింది
||ఎందుకో ఈ ఘోరపాపిని||`,keywords:["enthukoo ee goorapaapini","yendhukoo ee goorapaapini","yendhuko ee gorapapini","endhuko ye goorapapini","yendhuko ye gorapapini"],video:"",artist:"",genre:["Lent"],timeSignature:"3/4"},{id:l(),title:"ఎందుకో నన్నింతగా",lyrics:`ఎందుకో నన్నింతగా నీవు ప్రేమించితివో దేవా
అందుకో నా దీన స్తుతిపాత్ర హల్లెలూయ యేసయ్యా (2)

1. నా పాపము బాప నరరూపివైనావు
నా శాపము మాప నలిగి వ్రేలాడితివి
నాకు చాలిన దేవుడవు నీవే
నా స్థానములో నీవే (2)    ||ఎందుకో||

2. నీ రూపము నాలో నిర్మించియున్నావు
నీ పోలికలోనే నివసించుమన్నావు
నీవు నన్ను ఎన్నుకొంటివి
నీ కొరకై నీ కృపలో (2)   ||ఎందుకో||

3. నా శ్రమలు సహించి నా ఆశ్రయమైనావు
నా వ్యధలు భరించి నన్నాదుకొన్నావు
నన్ను నీలో చూచుకున్నావు
నను దాచియున్నావు (2)  ||ఎందుకో|| 

4. నీ సన్నిధి నాలో నా సర్వము నీలో
నీ సంపద నాలో నా సర్వస్వము నీలో
నీవు నేను ఏకమగువరకు
నన్ను విడువనంటివే (2)  ||ఎందుకో||

5. నా మనవులు ముందే నీ మనసులో నెరవేరే
నా మనుగడ ముందే నీ గ్రంథములోనుండే
ఏమి అద్భుత ప్రేమ సంకల్పం
నేనేమి చెల్లింతున్ (2)   ||ఎందుకో||`,keywords:["yendhuko nannu inthaga","yendhuko nanninthaga","endhuko nannu inthaga","endhuko nanninthaga","endhukonanninthaga","endhukoo nanninthaga","yendhukoo","enduko nannintaga","yenduko nannintaga","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Love","Lent"],timeSignature:"4/4"},{id:l(),title:"ఎందుకో నన్నెందుకో - నీవు ప్రేమించితివే",lyrics:`ఎందుకో నన్నెందుకో - నీవు ప్రేమించితివే 
ఏ మంచిలేని నన్ను నీవు - ని నీతిగా చేసావే  (2)
ని త్యాగము మరువనయ్యా - ని ప్రేమను విడువనయ్యా 
నా ఘనత నీవే - నా ఖ్యాతి నీవే  ||ఎందుకో||

1. పాపములో అపరాధములో - చనిపోయి ఉండగా
ని ప్రేమతో నన్ను నీవు - బ్రతికించావే   (2)
జీవము లేని ని నాకు - జీవమునిచ్చావే    (2) 
||ని త్యాగము||

2. నేను ఆయనయందు - దేవుని నీతి అగునట్లు 
పాపము ఎరుగని నీవు నాకై - రక్తము చిందావే (2)
చాలయ్య యేసు ని ప్రేమ - నాకందించావే   (2)
||ని త్యాగము||

3. ని పాద సన్నిధి  - నివసించెదను జీవితాంతము 
అను నిత్యమూ ని ప్రియనామమును - నేను ఘణపరచెదను (2)
జీవించేదా ప్రతి నిమిషం - ప్రభు ని కొరకే  (2)
||ని త్యాగము||`,keywords:["enthuko nannendhuko neevu preminchithive","yendhuko nannendhuko neevu","yenduko nanendhuko","endhuko nanendhuko"],video:"",artist:" Pastor Korneli, Ganta Ramesh",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ఎరిగి ఎరిగి చెడిపోతివి మనసా",lyrics:`ఎరిగి ఎరిగి చెడిపోతివి మనసా యిఁక నీ దిక్కెవ్వరు చెపుమా
దురితం బిది స చ్ఛరితం బిది యని యెరుక సరకు గొన కేమియు నీ
||ఎరిగి||

1. ఇది దేవుని దయ యిది క్రీస్తుని ప్రియ మిది విమలాత్ముని గుణ మనుచు
ఎదలో ననుభవ మెరిగి మరల దు ర్మదమున దుష్కృత పదమున
బడితివి ||ఎరిగి||

2. సకలము జూచెడు దేవుని కంటికి జాటుగ జరిగెడి పని యేది ఇక
జెవి గుసగుస లెల్లను దిక్కుల బ్రకటము జేసెడు ప్రభు వున్నాడని
||ఎరిగి||

3. ఎన్నిమార్లు సిలువను వేయుచు ప్రభు యేసుని వెతబడ జేసెదవు
తిన్నని మార్గము తెలిసియుండి నీ కన్నుల గంతలు గట్టితి వయ్యో
||ఎరిగి||

4. గద్దించెడు మనస్సాక్షికి గడ లాడక పోతివి నీవు హద్దుమీరి 
దైవాజ్ఞలు ద్రోయుచు నెద్దు లాగు పరు గెత్తితి వయ్యో ||యెఱిఁగి||

5. పలువిధ శోధన బాధలలో ఘన ప్రభు క్రీస్తుడై నీ దిక్కునుకో తాళుచు
బశ్చాత్తాపముపడి యిక జాలించుము కలుషపు యత్నంబు ||ఎరిగి||

6. అపరిమిత దయా శాంతులు గల ప్రభు వనిశము కోపింపడు నీపై
కృపా వాగ్దద్తము లెపుడు దలచి నీ యపవిత్రత గని హా యని
యేడ్వుము ||ఎరిగి||`,keywords:["yerigi yerigi chedipothivi manasa","erigi erigi chedi pothivi manasa","arigi arigi chedipothivi manasa","Andhra Christian Hymn","4/4"],video:"",artist:"Purushotham Chowdary",genre:["Andhra Christian Hymn"],timeSignature:"4/4"}],ఏ:[{id:l(),title:"ఏపాటిదాననయా",lyrics:`ఏపాటిదాననయా – నన్నింతగ హెచ్చించుటకు
నేనెంతటిదాననయా – నాపై కృప చూపుటకు
నా దోషము భరియించి – నా పాపము క్షమియించి
నను నీలా మార్చుటకు – కలువరిలో మరణించి

ప్రేమించే ప్రేమామయుడా – నీ ప్రేమకు పరిమితులేవి
కృపచూపు కృపగల దేవా – నీ కృపకు సాటియేది || ఏపాటి || 

1. కష్టాల కడలిలో – కన్నీటి లోయలలో
నా తోడు నిలిచావు – నన్నాదరించావు
అందరు నను విడచిన – నను విడువని యేసయ్యా
విడువను ఎడబాయనని – నా తోడై నిలిచితివా || ప్రేమించే || 

2. నీ ప్రేమను మరువలేనయ్య – నీ సాక్షిగ బ్రతికెదనేసయ్యా
నేనొందిన నీ కృపను – ప్రకటింతును బ్రతుకంతా
నేనొందిన ఈ జయము –నీవిచ్చినదేనయ్య
నీవిచ్చిన జీవముకై – స్తోత్రము యేసయ్య || ప్రేమించే ||`,keywords:["ye paati dhaananaya","yepati dhananaya","yepaati dhananaya","ee pati dhananaya","ey pati dhananaya","a paati dhananaya","a pati dananaya","4/4"],video:"",artist:"Jonah Samuel",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఏ పాప మెరుగని యోపావన మూర్తి పాప విమోచకుండ",lyrics:`ఏ పాప మెరుగని యోపావన మూర్తి పాప విమోచకుండ
నా పాలి దైవమా నా పాపముల కొర కీ పాట్లు నొందినావా

1. ముళ్ళతో కిరీట – మల్లి నీ శిరముపై – జల్లాటమున మొత్తిరా
ముళ్ళ పోట్లకు శిరము – తల్లడిల్లగ సోమ్మ – సిల్లిపోతివ రక్షకా  ||ఏ పాప||

2. కలువరి గిరి దనుక – సిలువ మోయలేక – కలవరము నొందినావా
సిలువ నీతో మోయ – తులువలు వేరొకని – తోడుగా నిచ్చినారా  ||ఏ పాప||

3. చెడుగు యూదులు బెట్టు – పడరాని పాట్లకు – సుడివడి నడచినావా
కడకు కల్వరి గిరి – కడ కేగి సిల్వను – గ్రక్కున దించినావా  ||ఏ పాప||

4. ఆ కాల కర్ములు – భీకరంబుగ నిన్ను – ఆ కొయ్యపై నుంచిరా
నీ కాలు సేతులు – ఆ కొయ్యకే సూది – మేకులతో గ్రుచ్చినారా  ||ఏ పాప||

5. పలువిధంబుల శ్రమలు – చెలరేగ దండ్రికి – నెలుగెత్తి మొరలిడితివా
సిలువపై పలుమారు – కలుగుచుండెడి బాధ – వలన దాహము నాయెనా  ||ఏ పాప||

6. బల్లిదుండగు బంటు – బల్లెమున నీ ప్రక్క – జిల్లి బడ బొడచినాడా
ఉల్లోలములవలె నల్ల నీరుబుకంగ జల్లారె గద కోపము  ||ఏ పాప||

7. కట కటా పాప సం – కటము బాపుట కింత – పటు బాధ నొందినావా
ఎటువంటిదీ ప్రేమ – యెటువంటిదీ శాంత – మెటుల వర్ణింతు స్వామి  ||ఏ పాప||`,keywords:["ye paapa merugani","yepapamerugani","yee paapa merugani","ye papamerugani","ye papa merugani","Eepaapa merugani","epapamerugani","ee paapa merugani","eepapamerugani","apapamerugani","aapapamerugani","Andhra Christian Hymn","5/8"],video:"",artist:"Yarmani Setti Dhaveedhu",genre:["Andhra Christian Hymn"],timeSignature:"5/8"},{id:l(),title:"ఏదేన్ వనంబునందు ఆది వివాహమున్",lyrics:`1. ఏదేన్ వనంబునందు
ఆది వివాహమున్
విధించినట్టి వాక్కు
వర్థిల్లు నిప్పుడున్.

2. పవిత్ర కల్యాణంబున్
పదిలపర్చుచు
దైవ త్రిత్వంబు నేఁడున్
దీవింప వత్తురు.

3. సంతాన వరమును
సంతోష ప్రేమయు
వింతైన యైక్యత్వంబు
నెంతయు నిత్తురు.

4. ఆదామునకుఁ దండ్రీ,
హవ్వ నొ సంగితి
వాదరముగ నీమె
నీ ధన్యున కిమ్ము

5. నీ ఱెక్క క్రింద వీరిఁ
బరిగ్రహించుచు
వైరి తంత్రంబునుండి
దూరంబుఁ జేయుము.

6. ఈ రీతిన్ బ్రత్కి యంత
క్రీస్తేసు పెండ్లికి
వీరిద్దరును జేరి
బరంగఁ జేయుమి.`,keywords:["yedhen vanambu aadhi vivahamun","yeedhen vanambu","andhra christian hymns","4/4"],video:"",artist:"Alfred Thyagaraju Pamar",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"ఏదో ఆశ నాలో - నీతోనే జీవించనీ",lyrics:`ఏదో ఆశ నాలో - నీతోనే జీవించనీ (2)
యేరై పారే ప్రేమ నాలోనే ప్రవహించనీ
మితిలేని ప్రేమ  చూపించినావు
శృతి చేసి నన్ను పలికించినావు
ఈ స్తోత్రగానం నీ సొంతమే

1. పరవాసిననైన కడుపేదను నాకేల ఈ భాగ్యము
పరమందు నాకు నీ స్వాస్థ్యము నీవిచ్చు బహుమానము (2)
తీర్చావులే నా కోరిక తెచ్చానులే చిరుకానుక
అర్పింతును స్తుతిమాలిక
కరుణామయా నా యేసయ్య
                                                       
2. నీ పాదసేవ నే చేయనా నా ప్రాణమర్పించనా
నా సేద తీర్చిన నీ  కోసమే ఘనమైన ప్రతిపాదన (2)
ప్రకటింతును నీ శౌర్యము
కీర్తింతును నీ కార్యము
చూపింతును నీ శాంతము
తేజోమయా నా యేసయ్య`,keywords:["yedho aasha nalo","yeedho aasha","eedho aasha","edho aasha","yedho aasa","eedho aasa"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Anwesshaa",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఏదో తెలియని భాద - ఏదో తెలియని వేదన",lyrics:`ఏదో తెలియని భాద - ఏదో తెలియని వేదన
ఇంకేదో తెలియని దుఃఖం - నను వెంటాడగా... (2)
యేసయ్యా నీవే నా ఆశ్రయము - నా దుర్గము
యేసయ్యా నీవే నా ఆదరణ...
యేసయ్యా నీవే నా కేడేము - నా బలము
యేసయ్యా నీవే నా నిరీక్షణ...

1. కరుణించు వారి కొరకు కనిపెట్టుకుంటుని గానీ
ఎవరును కానరారేరి
ఓదార్చు వారికొరకు కనిపెట్టుకుంటుని గానీ
ఎవ్వరును కానరారేరి
నీ సత్య వాక్యం నన్ను బ్రతికించెను 
నీ శక్తి గల వాక్కును నాలో నింపెను  ||యేసయ్యా నీవే||

2. దయ చూపు వారి కొరకు కనిపెట్టుకుంటిని గాని
ఎవ్వరునూ కానరారేరి
ప్రేమించు వారి కొరకు కనిపెట్టుకుంటిని గాని
ఎవ్వరునూ కానరారేరి
నీ వాత్సల్యం నన్ను హత్తుకొన్నది
సంతోష సాబల్యాలే నాలో నిలిపెను  ||యేసయ్యా నీవే||`,keywords:["yedho theliyani baadha","yedho theliyani bada","yedo teliyani bada","eedho theliyani baadha","eedho theliyani bada","edo theliyani badha","edo teliyani bada","a dho theliyani badha","adho theliyani badha","ado theliyani badha","Ado teliyani bada","yedho theleyani badha","4/4"],video:"",artist:"Sis Emimah Edwina Moses",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఏ బాధ లేదు ఏ కష్టం లేదు",lyrics:`ఏ బాధ లేదు ఏ కష్టం లేదు యేసు తోడుండగా
ఏ చింత లేదు ఏ నష్టం లేదు ప్రభువే మనకుండగా
దిగులేల ఓ సోదరా ప్రభువే మనకండగా
భయమేల ఓ సోదరీ యేసే మనకుండగా

హల్లెలూయ హల్లెలూయ – హల్లెలూయ (2) ||ఏ బాధ|| 

1. ఎర్ర సంద్రం ఎదురొచ్చినా
యెరికో గోడలు అడ్డొచ్చినా
సాతాను శోధించినా
శత్రువులే శాసించినా
పడకు భయపడకు బలవంతుడే నీకుండగా
నీకు మరి నాకు ఇమ్మానుయేలుండగా ||దిగులేల|| 

2. పర్వతాలు తొలగినా
మెట్టలు తత్తరిల్లిన
తుఫానులు చెలరేగిన
వరదలు ఉప్పొంగిన
కడకు నీకు కడకు ప్రభు యేసే దిగి వచ్ఛగా
నమ్ము ఇది నమ్ము యెహోవా యీరే కదా ||దిగులేల||`,keywords:["yebaadha ledhu","yebaadha ledu","ye badha ledhu","eebadha ledhu","ee badha ledhu","ye badha ledhu","ye bada ledu","yebadaledu","ey badha ledhu","ey badha ledu","ey bada ledhu","2/4"],video:"",artist:"Satish Kumar",genre:["General"],timeSignature:"2/4"},{id:l(),title:"ఏ భయము నాకు లేనేలేదుగా నీవు తోడుండగా",lyrics:`ఏ భయము నాకు లేనేలేదుగా నీవు తోడుండగా 
ఏ దిగులు నాకు లేనేలేదుగా నీ కృప నా తోడుండగా(2)
ఎంత లోతున పడిపోయిన పైకెత్తగల సర్వశక్తుడా
పగిలి పోయిన ప్రతీ పాత్రను సరి చేయగల పరమకుమ్మరి (2)

ఆరాధన ఆరాధన ఆ...రా...ధన...(2)
ఆరాధన ఆరాధన ఆరాధన నీకేనయ్యా (2)

1. గొర్రెల కాపరి అయిన దావీదున్ - నీవు రాజుగా చేసినావుగా
గొలియాతును పడగొట్టుటకు - నీ బలమునే ఇచ్చినావైయ్యా (2)
ప్రతి బలహీన - సమయములో - నీ బలము నా తోనుండగా 
భయపడక ధైర్యముతో నే ముందుకే సాగెద (2)

ఆరాధన ఆరాధన ఆ...రా...ధన...(2)
ఆరాధన ఆరాధన ఆరాధన నీకేనయ్యా (2)

2. ఘోరపాపి అయిన రాహాబున్ - నీవు ప్రేమించినావుగా
వేశ్యగా జీవించినను - వారసత్వమునిచ్చినావుగా (2)
నా పాపమై - నా శాపమై - మరణించిన నా యేసయ్య 
నా నీతియై - నిత్య శాంతియై - నా తోడుండు నా దైవమా (2)

ఆరాధన ఆరాధన ఆ..రా..ధన..(2)
ఆరాధన ఆరాధన ఆరాధన నీకేనయ్యా (2)`,keywords:["yebhayamu naku leeneeledhu","eebhayamu naku leneledhu","ye bhayamu naku lene ledhu"],video:"",artist:"Pastor Vinod Kumar, Benjamin Johnson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఏ భాషకందని భావం నీవు",lyrics:`ఏ భాషకందని భావం నీవు
వెలకట్టలేని ముత్యం నీవు
దేవుడిచ్చిన వరమే నీవు తీర్చలేని ఓ ఋణం
ఎదలో దాగిన పలుకే నీవు నా ప్రేమకు తొలిరూపం
అమ్మా నిను మించిన బంధం ఏదియు లేదే
లోకంలో ఈ తీయని బంధం కానరాలేదే

1. నవ మాసాలు నీలో నన్ను దాచావు
నా ఊపిరికి ప్రాణం పణంగా పెట్టావు
రేయి పగలంతా నాకై శ్రమపడినా
తీరని అనురాగం నీలో దాచావే
నీ సుఖ సంతోషం వదిలిన నాకై
తరగని మమకారం నీలో చూసానే
యేసయ్య ప్రేమే నిన్ను నాకై సృష్టించిందే
అమ్మా నిను మించిన బంధం ఇలలో లేనే లేదే
లోకంలో ఈ తీయని బంధం కానరానే లేదే

2. భయ భక్తులే ఉగ్గి పాలుగా పోసావు
దేవుని మాటలే గోరు ముద్దగా చేసావు
తప్పటడుగులే నాలో సరి చేసి
ప్రభు సన్నిధిలో నన్ను సాక్షిగా నిలిపావు
ప్రతి వేకువలో నాకై నీవు
చేసే ప్రార్థనలే పెంచెను నా బలమే
నీలో కలిగిన విశ్వాసం నాతో సహవాసించెనే
అమ్మా నిను మించిన బంధం ఇలలో లేనే లేదే
లోకంలో ఈ తీయని బంధం కానరానే లేదే`,keywords:["ye baashakandhani baavam neevu","a bashakandhani bhaavam neevu","yee bashakandhani","a bashaku andhani","ye bashakandhani","ye bashaku","mothers day","4/4"],video:"",artist:"Swapna Edwards",genre:["Mother"],timeSignature:"4/4"},{id:l(),title:"ఏనాటిదో ఈ బంధము",lyrics:`ఏనాటిదో ఈ బంధము పరమ ప్రభుని సంకల్పము (2)
ఇదియే దేవాది దేవుడిచ్చిన  సాటి అయిన సహాయము (2)
వివాహం అమోఘం అందరికీ ఆమోదం అందరికీ ఆనందం
అత్యంత సంతోషం విడదీయని బంధం  విడదీయని సంబధం
Happy Married Life Happy Married Life
We wish you Happy
Happy married life

1. మంటిని తీసి నరునిగా చేసి 
ప్రక్కటేముకను నారిగా చేసి (2)
ఇద్దరిని ఒకటి చేసి చిత్తమునే జరుగనిచ్చి (2)
ఇదియే వివాహమన్నాడు ||వివాహం అమోఘం||

2. దేవాది దేవుడు కృప కుమ్మరించి  
తన దయ చొప్పున దీవెనలిచ్చి (2) 
వివాహం మహోత్సవ మని ఎన్నడూ విడిపో రాదని (2)
కలసి జీవించమన్నాడు ||వివాహం అమోఘం||`,keywords:["ఏనాటిదో ఈ బంధము","marriage","ye naatidho ee bandhamu","eenatidho ee bandham","ye natido ee bandam","ee naatidho ee bandham","yee natidho ee bandham"],video:"",artist:" Bro Swamy Moka, J.K Christopher, Tadi Subhanand, Philip, Sharon Philip",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"ఏ నామములో సృష్టి అంత సృజింపబడెనో/నామము",lyrics:`ఏ నామములో సృష్టి అంత సృజింపబడెనో 
ఆ నామమునే స్తుతింతును 
ఏ నామములో పాపమంతా క్షమించబడునో 
ఆ నామమునే పూజింతును 
ఏ నామములో దావీదు గొలియాతును ఎదురించెనో 
ఆ నామమునే నమ్మెదను 
ఏ నామములో ఈ లోకమంతటికి రక్షణ కలుగునో 
ఆ నామమునే స్మరింతును 

నీ నామమునే ధ్వజముగ పైకెత్తెదను 
నీ నామమే ఆధారము
నీ నామమునే ధ్వజముగ పైకెత్తెదను
నీ నామమే నా జయము 

1. రోగము తలవంచును నీ నామము యెదుట 
శాపము తలవంగును నీ నామము యెదుట 
సాటిలేని నామము - స్వస్థపరచే నామము  ||నీ నామమునే||

2. ప్రతి మోకాలు వంగును నీ నామము యెదుట 
ప్రతి నాలుక పలుకును ప్రభు యేసుకే ఘనత 
శ్రేష్టమైన నామము - శక్తిగలిగిన నామము ||నీ నామమునే||

Bridge:
హెచ్చింపబడును గాక నీ నామము యేసయ్య 
కీర్తింపబడును గాక నీ నామము యేసయ్య 
కొనియాడబడును గాక నీ నామము యేసయ్య 
అన్ని నామములకు పై నామముగ  ||నీ నామమునే||`,keywords:["ye naamamulo","ee naamamulo","naamamu","yee naamamulo","ye namamlo","ee namam lo","eenanamlo","yenanamlo","yeenamamulo","ye namamloo","a namamulo","ae namamulo","aee namamulo","aa naamamulo","aa namamulo","a naamamulo","4/4"],video:"https://www.youtube.com/embed/cnmrtwnylrE?start=1176",artist:"Anu Samuel",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"ఏ ముఖాంబుతోడ వత్తు",lyrics:`ఏ ముఖాంబుతోడ వత్తు యేసు నాధనీదు మ్రోల కావరించి నిన్నుమఱచి యేక మైతి బామరులతో నేది దారి నిన్ను జేర నేమో తెలియదాయెను ||ఏ ముఖంబు||

1. నీచ పాప వర్తనంబు పేచ మెల్ల బాపి ముందు కాచి పెంచి నియము నిష్ఠ లాచరణము నిలుపుకొరకు దోషభార మెల్ల బాప బూచినీ దె నిజముగా ||ఏ ముఖంబు||

2. తుట్టతుదకు నిన్ను జేర గట్టినాడం గంకణమును వట్టిమాటకాదు నిజము పట్టి నడుపు పరమ పురికి బట్టికొనుమునాదు చేయి మట్టి పాలు కాకమునుపే ||ఏ ముఖంబు||`,keywords:["yemukambu thoda vathu","ye mukambu thoda vathu","ee mukambu thoda vathu","emukambu thoda vathu","amukambu thoda vathu","aa mukambu thoda vathu","andhra christian hymn","3/4"],video:"",artist:"Jonnakuti Dheva Dhanam",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"ఏమున్నది నాలో ఓ యేసయ్య",lyrics:`ఏమున్నది నాలో ఓ యేసయ్య 
మచ్చుకైన మంచి కానరాదయ్యా  (2)
ఎంతవెదకి చూచినా పాపమే గదయ్యా  (2)
ఎందుకయ్య నాపై - నీకింత ప్రేమయ్యా

యేసయ్యా... నా దైవమా 
యేసయ్యా... నిత్యజీవ మార్గమా
యేసయ్యా... నా దైవమా 
యేసయ్యా... పరలోక ద్వారమా   ||ఏమున్నది||

1. నినుచూడ సాధ్యమేనా తేజోమయ 
కరుణించి ననుచేరే నీదయ 
వెలువడగా నీవాక్యం  కనబడె నాపాపం 
తడబడిన నా పాదం  స్థిరపడె నీకోసం 
క్షమియించి ఇచ్చావయ్యా నీకృపాక్షేమము 
నన్నావరించెనయ్యా నీదువాత్సల్యము 
తనివితీరా అనుక్షణం నిన్నారాధింతును 

యేసయ్యా... నా దైవమా 
యేసయ్యా... నిత్యజీవ మార్గమా
యేసయ్యా... నా దైవమా 
యేసయ్యా... పరలోక ద్వారమా  ||ఏమున్నది||

2. నీపైనే తిరుగుబాటు చేసానయ్యా 
తాలిమితో మన్నించే నీ దయ 
శ్రమపడగా నీదేహం సరియాయెను సర్వం 
కార్చితివి నీరుధిరం దొరికెను పరిహారం 
నే తీర్చజాలనయ్యా నీ ఋణమే మాత్రము 
సాక్షిగా నిలుతునయ్యా నా జీవితాంతము 
తనివితీరా అనుక్షణం నిన్నారాధింతును 

యేసయ్యా... నా దైవమా 
యేసయ్యా... నిత్యజీవ మార్గమా
యేసయ్యా... నా దైవమా 
యేసయ్యా... పరలోక ద్వారమా  ||ఏమున్నది||

3. నిను వీడి పారిపోతి ప్రేమామయ
విడువకయే నను వెదకే నీ దయ  
వినబడగా నీ స్వరం పులకించెను దేహం   
తెంచితివి బంధకం కలిగెను స్వాతంత్ర్యం 
క్షణమైన విడువనయ్యా నీ సన్నిధానము 
వివరింప జాలనయ్యా ఈ గొప్ప భాగ్యము 
తనివితీరా అనుక్షణం నిన్నారాధింతును 

యేసయ్యా... నా దైవమా 
యేసయ్యా... నిత్యజీవ మార్గమా
యేసయ్యా... నా దైవమా 
యేసయ్యా... పరలోక ద్వారమా  ||ఏమున్నది||`,keywords:["ఏమున్నది నాలో ఓ యేసయ్య","yemunnadhi naalo oo yesayya","em unnadhi nalo oo yesayya","em unadhi nalo oo yesayya","em undhi nalo o yesayya","yem unnadhi naalo oo yesayya","yemundi nalo oo yesayya"],video:"",artist:"Bro. Anil Kumar Vemula, Bro. Anil Ravada, Dr. A.R. Stevenson, Dr. Nissi John, ",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఏ రాగమో తెలియదే/అశతో వున్నా",lyrics:`ఏ రాగమో తెలియదే
అశతో వున్నా - తృష్ణకలిగున్నా - ఆరాధించాలని
ఆత్మతో సత్యముతో 
నా పూర్ణహృదయముతో
నిన్ను ఘనపరచాలాని
ఏ రాగమో తెలియదు 
ఏ తాళమో తెలియదు 
ఏమని పాడను  నిన్ను - ఎంతని పోగడను 
యేసయ్యా...యేసయ్యా...  (2)

1. ఓటములలో - ఓదార్పువై 
ఓర్పు నేర్పించావయ్యా
వేదనలలో - విశ్రాంతివై 
వెన్నంటి నిలచావయ్యా 
జీవితం నీదయ్యా నాకన్నదేముందయ్యా
నాకున్నదంతనీవే కదా
యేసయ్యా...యేసయ్యా...  (2)

2. నీచేతితో చేశావులే నీరూపమిచ్చావులే 
నాచెంతకే చెరావులే 
నా సొంతమైయ్యావులే
మాటలే లేవయ్యా అర్థమే కాదయ్యా
ఈ శిలకోసం బలియాగమా
యేసయ్యా...యేసయ్యా...  (2)

యేసయ్యా...యేసయ్యా...  (2)

యేసయ్యా...యేసయ్యా...  (2)`,keywords:["yee raagamo theleyadhe","a ragamo theleyadhe","ae ragamo theliyadhe","ye ragamo theledhe","a raagamo theliyadhe","yeragamo","aragamo theledhe","satish kumar"],video:"",artist:"Saahas Prince",genre:["General","Hope","Comfort"],timeSignature:"4/4"},{id:l(),title:"ఏ రీతిగా కొలిచెద - నీ ప్రేమలో నిలిచెద",lyrics:`ఏ రీతిగా కొలిచెద - నీ ప్రేమలో నిలిచెద
ఇదే ఆశ మదిలో అనుదినం
ఇదే నా ప్రపంచం అనుక్షణం
సదా యేసు నీలో బ్రతికెద

ఏ రీతిగా కొలిచెద -  ప్రభు నీ సేవలో నిలిచెద
ఇదే ఆశ మదిలో అనుదినం
ఇదే నా ప్రపంచం అనుక్షణం
సదా యేసు నీలో బ్రతికెద

ఏ రీతిగా కొలిచెద - ప్రభు నీ ప్రేమలో నిలిచెద

1. నీ మమతే - అమూల్యమైనదీ 
ఊహలకే - అతీతమైనదీ 
నా గతం - ఓడించగా    
నీ దరే - చేరానుగా 
పాపములో నన్ను -  విడనాడక 
విమోచించినా  - నిజ దైవమా   
ప్రార్ధనలే నాలో - ఫలియించగా
ప్రతీ శ్వాసలో - ప్రభవించవా

నీ ప్రేమ ఇలలో - పాడెద - నిరతం దేవా  

2. నీ వరమే - విశేషమైనదీ 
వాక్యముగా  - వసించుచున్నదీ  
నీ స్వరం  - నా దీపమై 
నీ బలం - ఆధారమై  
ఆశ్రయమైనావు   - కలకాలము 
కృపాసాగరా - స్తుతి పాత్రుడా
శాశ్వత నీ ప్రేమ - వివరించుట 
ఎలా సాధ్యమూ - ప్రియ యేసయా`,keywords:["ye reethiga kolichedha","ee reethiga kolichedha","a rethiga kolichedha","yee reethiga kolichedha","ye rethiga kolichedha","ye rithiga kolichedha"],video:"",artist:"Joshua Shaik, Pranam Kamlakhar",genre:["General"],timeSignature:"3/4"},{id:l(),title:"ఏ రీతి నీ ఋణం తీర్చుకొందు నేసువా",lyrics:`ఏ రీతి నీ ఋణం తీర్చుకొందు నేసువా
ఏ దిక్కు లేని నన్ను ప్రేమించి నావయా
ఎంతో కృపను చూపి దీవించి నావయా
ఏ రీతి నీ ఋణం తీర్చుకొందు నేసువా

1. పాపాల సంద్రమందున పయనించు వేళలో
పాషాణ మనసు మార్చి పరిశుద్ధుని చేసావయా ||ఏ రీతి||

2. నా పాప శిక్ష సిలువపై భరియించి నావయా
నా దోషముల సహించి క్షమియించి నావయా ||ఏ రీతి||`,keywords:["ye reethi ni runam","ee reethi ni runam","ye rethi ni runam","ee rethi ni runam","ye reethi nee runam","ee reethi ne runam","ye rithi ni runam","ee rithi ni runam"],video:"",artist:"Jacobson & Ejra Sastry",genre:["General"],timeSignature:"3/4"},{id:l(),title:"ఏ స్థితిలోనైనా నిన్ను ప్రేమించేవానిగా",lyrics:`ఏ స్థితిలోనైనా నిన్ను ప్రేమించేవానిగా
ఏ స్థితిలోనైనా నీకు మొరపెట్టెవానిగా
చేయుము నా దేవా, చేయుము నా దేవా ౹౹ 2 ౹౹

అది మరణమైనను జీవమైనను శ్రమయైనను...
అది బాధయైనను వేదనైనను కరువైనను...

1. నా తల్లే నన్ను మరిచిపోయినా, నా తండ్రే నన్ను విడచివెళ్లిన
నా స్నేహితులే నన్ను త్రొసేసిన, నే ప్రేమించేవారికి దూరమైనా ౹౹ 2 ౹౹

విడువవు ఎడబాయవని సెలవిచ్చిన యేసయ్య
తల్లి మరచినా మరచును,నన్ను మరువని యేసయ్య ౹౹ 2 ౹౹

2.నా సొంతవారినే నే కోల్పోయిన,నా ఆరోగ్యం నన్ను వదిలివెళ్లిన
నాకున్న ఆశే నెరవేరకపోయిన,నా హృదయంలో కలవరమే ఉన్నాను ౹౹ 2 ౹౹

దేనికి భయపడక నే ముందుకే సాగేదా...
నీ మాట తప్పక నెరవేరునని నమ్మెద... ౹౹ 2 ౹౹

విడువవు ఎడబాయవని సెలవిచ్చిన యేసయ్యా
తల్లి మరచినా మరచును,నన్ను మరువని యేసయ్యా ౹౹ 2 ౹౹

నన్ను మరువని యేసయ్యా
నన్ను మరువని ...................యేసయ్యా`,keywords:["ye sthithilonaina ninnu preminchevaaniga","ee sthithilonaina ninnu","yee sthithilonaina ninnu","ye stitilonaina","ee stitilonaina"],video:"",artist:"Pastor Vinod Kumar, Benjamin Johnson",genre:["General"],timeSignature:"4/4"}],ఒ:[{id:l(),title:"ఒక ఆశ ఉందయ్యా నా కోరిక తీర్చయ్యా",lyrics:`ఒక ఆశ ఉందయ్యా నా కోరిక తీర్చయ్యా
నా మనవిను యేసయ్యా ప్రత్యుత్తరమిమ్మయ్య (2) 
యవనకాలమందు నీ కాడి మోయాగా
బలమైన విల్లుగా నన్ను మర్చవా  (2)||ఒక ఆశ||

1. యూదుల రక్షణకై రాజు శాసనము మార్చి
ఎస్తేరు ఆశను తీర్చిన దేవా  (2)
ఈ తరములో మా మనవులను ఆలకించవా 
మా దేశములో మహా రక్షణ కలుగజేయవా (2)  ||ఒక ఆశ||

2. నత్తివాడైనను ఫరో ఎదుట నిలబెట్టి
మోషే ఆశను తీర్చిన దేవా (2)
ఈ తరములో నీ చిత్తముకై ఎదురు చూడగా
అగ్ని చేత నను దర్శించి నీ చిత్తము తెలుపవా (2)  ||ఒక ఆశ||

3. మేడ గదిలో అగ్నివంటి ఆత్మతో నింపి 
అపోస్తలుల ఆశను తీర్చిన దేవా  (2)
ఈ తరములో నీ సేవకై మేము నిలువగా
అగ్ని వంటి ఏడంతల ఆత్మతో ఆశ తీర్చవా (2) ||ఒక ఆశ||`,keywords:["ఒక ఆశ ఉందయ్యా నా కోరిక తీర్చయ్యా","oka aasa undhayya","oka aasha undhi ayya","oka asa undhayya","okaasa undhayya","oka aasa undhayya","oka aasha undhayya","oka asha undhi ayya","oka asha undhi ayya","okaaasha undhi ayya","okaasha undhayya","oka asha undhayya"],video:"",artist:"Pastor Anand, Dr Kennychaitanya, Surya Prakash,",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఒకసారి నీ స్వరము వినగానే",lyrics:`ఒకసారి నీ స్వరము వినగానే
ఓ దేవా నా మనసు నిండింది
ఒకసారి నీ ముఖము చూడగానే
యేసయ్య నా మనసు పొంగింది (2)
నా ప్రతి శ్వాసలో నువ్వే
ప్రతి ధ్యాసలో నువ్వే
ప్రతి మాటలో నువ్వే
నా ప్రతి బాటలో నువ్వే (2)         ||ఒకసారి||

1. నీ సిలువ నుండి కురిసింది ప్రేమ
ఏ ప్రేమ అయినా సరితూగునా (2)
నీ దివ్య రూపం మెరిసింది ఇలలో
తొలగించె నాలోని ఆవేదన        ||నా ప్రతి||

2. ఇలలోన ప్రతి మనిషి నీ రూపమే కదా
బ్రతికించు మమ్ములను నీ కోసమే (2)
తొలగాలి చీకట్లు వెలగాలి ప్రతి హృదయం
నడిపించు మమ్ములను నీ బాటలో        ||నా ప్రతి||`,keywords:["okasari ni swaramu vinagane","okasari ni svaramu","okasari ni saramau","okasare ne swaramu","okasare ne svaramu","john wesly"],video:"",artist:"John Wesly",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఒక్కసారి ఆగి చూడుమా",lyrics:`ఒక్కసారి ఆగి చూడుమా మార్గములో
నిలిచి నీవు ఆలోచించుమా
మరల మరల తిరిగి రాదురా జీవితం 
ఒక్కసారి మనకి సొంతము
అల్పకాల జీవితాన్ని ఆలోచించినంతగా
నిత్య జీవమును గూర్చి ఆలోచించవా

1. ప్రేమ మత్తులో నీకు ఎవ్వరు గుర్తురారు
Mummy, Daddy నీకు అందరూ శత్రువులే (2)
ప్రేమించిన వారు మోసం చేసాకా
ఎందుకీ బ్రతుకని తనువు చాలించాలని
ఎన్నడు కాదని యేసుని చేరు ||ఒక్కసారి||

2.రంగు రగుల పాలపొంగురా జీవితం
పొంగి పొంగి బయట చిమ్మకురా యవ్వనం (2)
O.T duty అని మరుల గొల్బోకురా
దాంపత్య జీవితం నిర్వీరం చేయకురా
వ్యసనాలకు నీవు బానిస కావద్దు
కుటుంబ ప్రార్ధనలు చేయుట ముద్దు ||ఒక్కసారి||`,keywords:["okkasari aagichudumaa","okkasari aagi chuduma","okasari agi chuduma","okkasaari aagi chuduma","okasari aagi chuduma","akumarthi daniel","okka sari aagi chuduma","okka saari aagi chuduma","6/8"],video:"",artist:"Dr. Akumarthi Daniel",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఒడ్డుచేరి నీ యెదుట",lyrics:`1. ఒడ్డుచేరి నీ యెదుట నిల్పునపుడు రక్షకా
ఒక్క యాత్మనైన తేక సిగ్గుపడిపోదునా

ఒక్క యాత్మనైన నేను రక్షింప యేసువా
వట్టి చేతులతో నిన్ను దర్శించుట తగునా

2. ఆత్మలందు వాంఛలేక సోమరులై కాలమున్
వ్యర్థపరచు వారానాడు చింతతోడ నిల్తురు ||ఒక్క యాత్మనై||

3. యేసువా! నా స్వరక్షణ నిశ్చయంబు యైనదే
ఐనఫలితంబుజూడ కష్టపడనైతినే  ||ఒక్క యాత్మనై||

4. కాలమెల్ల గడ్చిపోయెన్
 మోసపోతినేనయ్యో
గడ్చినట్టి కాలమైతే ఏడ్చినను రాదది ||ఒక్క యాత్మనై|| 

5. భక్తులారా! ధైర్యంతోడ లేచి ప్రకాశించుడీ
ఆత్మలెల్ల యేసుయొద్ద చేరునట్లు చేయుడి ||ఒక్క యాత్మనై||`,keywords:["oddu cheri","oddu cheeri nee yedhuta","odu cheri ni edhuta","oddu chere ne yedhuta","oddu cheri ni edhuta","odducheri nee yedhuta","uddu cheri ni yadhuta","oddu cheri ni yadhuta","oddu cherie ni adhuta","oddu chesi ni aduta","odu chesi ni aduta","andhra christain song","andhra christian songs","aandhra kraisthava keerthanalu","andhra kraisthava keerthanalu"],video:"https://www.youtube.com/embed/u1aook9mHtA?start=1624",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"}],ఓ:[{id:l(),title:"ఓ తల్లి కన్నను",lyrics:`ఓ తల్లి కన్నను ఓ తండ్రి కన్నను  - ప్రేమించు 
దేవుడు క్షమించు దేవుడు  (2)  
ప్రేయసి కన్నా ప్రేమించు దేవుడు 
ప్రాణాన్ని త్యాగమిచ్చిన నిజ స్నేహితుడు  || ఓ తల్లి || 

1. కాలాలు మారిన కరిగిపోని ప్రేమ 
కలువరిలో చూపిన క్రీస్తేసు ప్రేమ (2) 
ముదిమి వచ్చు వరకు నిన్నేత్తుకునే  ప్రేమ (2) 
తల్లియైన మరచిన నిను మరువని ప్రేమ 
ప్రేమా... ప్రేమా... ఏ లోపం లేనిది క్రీస్తు ప్రేమ 
ప్రేమా... ప్రేమా... ఏ బదులాశించనిది యేసు ప్రేమ || ఓ తల్లి || 

2. పర్వతాలు తొలగిన తొలగిపోని ప్రేమ 
పాపులను త్రోయక దరిచేర్చు ప్రేమ (2) 
ప్రాణ స్నేహితుడై ప్రాణ మిచ్చిన ప్రేమ (2) 
పరలోకమునకు నిన్ను చేర్చు ప్రేమ 
ప్రేమా... ప్రేమా... ఏ లోపం లేనిది క్రీస్తు ప్రేమ 
ప్రేమా... ప్రేమా... ఏ బదులాశించనిది యేసు ప్రేమ || ఓ తల్లి ||`,keywords:["oo thalli kannanu","o thalli kannanu","oo talli kannanu","o thalli kananu","oo talli kananu","oo thalli kananu"],video:"",artist:"Dr. Akumarthi Daniel",genre:["General"],timeSignature:"6/8"},{id:l(),title:"ఓ బెత్లెహేము గ్రామమా",lyrics:`1. ఓ బెత్లెహేము గ్రామమా! సద్దేమిలేకయు
నీవొంద గాఢనిద్రపై వెలుంగు తారలు
కానేమి, నిత్యజ్యోతి జ్వలించు నీతమిన్
పెక్కేండ్ల భీతివాంఛలీ రాత్రి తీరె నీలోన్మ

2. రియకేసుపుట్టెను నిద్రింప మర్త్యులు
పై గూడి దూతల్వింతయౌ ప్రేమన్వీక్షింతురు
చాటుడో వేగుచుక్కల్ ఈ శుద్ధజన్మము
దైవానకు నున్నతుల్ భువిన్ శాంతంచు పాడుడీ

3. సద్దేమి లేక వచ్చెగా! ఈ వింత దానము
ఆరీతి దేవుడిచ్చుపై వరాల్ నరాళికి
నరుండెరుంగకున్నన్ ఈ పాపధాత్రిలో
దీనులంగీకరించిన యేసుందుజొచ్చును.

4. ఓ బెల్లెహేము పావన వతా! మా పై దిగు
పోగొట్టి పాపముల్ మాలో నీ వేళ పుట్టుము
సువార్త క్రిస్మస్ దూతల్ చెప్పంగ విందుము 
మా యొద్ద నుండరమ్ము మా ప్రభూ! ఇమ్మానుయేల్, ఆమేన్.`,keywords:["oo bethlehemu gramamu","obethlehemu gramamu","oo bethlehem","o bethlehemu","christmas","andhra christian hymn","4/4"],video:"",artist:"Philip Brukse",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"},{id:l(),title:"ఓ నేస్తమా ఈ శుభవార్త తెలియునా",lyrics:`ఓ నేస్తమా ఈ శుభవార్త తెలియునా 
నిను ప్రేమించేవారొకరున్నారనే వాస్తవం తెలియునా 
నిను రక్షించువాడు యేసయ్యేననే సత్యం తెలియునా

1. నీవు నమ్మినవారే మోసంతో నీ గుండెనే చీల్చినా 
నీ స్వంతజనులే నీ ఆశల మేడలు అన్నియు కూల్చినా 
ఊహించనివి జరిగినా అవమానం మిగిలినా 
నిను ఓదార్చేవారొకరున్నారనే వాస్తవం తెలియునా 
నీ స్థితిమార్చువాడు యేసయ్యేననే సత్యం తెలియునా

2. నీ కష్టార్జితము అన్యాయము చేయువారికే దక్కినా 
నీకున్న స్వాస్థ్యము దోపిడిదారుల చేతికే చిక్కినా 
ఉద్యోగమే ఊడినా - వ్యాపారంలో ఓడినా 
నిను ఓదార్చేవారొకరున్నారనే వాస్తవం తెలియునా 
నీ స్థితిమార్చువాడు యేసయ్యేననే సత్యం తెలియునా`,keywords:["oo nesthama ee shubhavartha","oo nestama","voo nesthama","vo nesthama","oonesthama","onesthama","stevenson"],video:"",artist:"Dr. A.R.Stevenson",genre:["General","Hope"],timeSignature:"4/4"},{id:l(),title:"ఓ ప్రార్ధనా సుప్రార్ధనా",lyrics:`1. ఓ ప్రార్ధనా సుప్రార్ధనా
నీ ప్రాభావంబున్ మరతునా
నా ప్రభువున్ ముఖా ముఖిన్
నే బ్రణుతింతు నీ ప్రభన్
నా ప్రాణమా సు ప్రార్ధనా
నీ ప్రేరణంబుచే గదా
నీ ప్రేమధార గ్రోలుదు
నో ప్రార్ధనా సుప్రార్ధనా

2. పిశాచి నన్ను యుక్తితో
వశంబు చేయ జూచుచో
నీ శాంతమైన దీప్తియే
నా శంక లెల్ల మానుపున్
నీ శక్తి నేను మరతునా
నా శైలమున ప్రార్ధనా
నా శోక మెల్ల దీర్చెడు
విశేషమైన ప్రార్ధనా

3. నీ దివ్యమైన రెక్కలే
నా దుఃఖ భార మెల్లను
నా దేవుడేసు చెంతకు
మోదంబు గొంచు బోవును
సదా శుభంబు లొందను
విధంబు జూప నీవెగా
నా ధైర్యమిచ్చుఁ ప్రార్ధనా
సుధా సుధార ప్రార్ధనా

4. అరణ్యమైన భూమిలో
నా రమ్యమౌ పిస్గా నగం
బు రంగుగాను నెక్కి నా
చిర గృహంబు జూతును
శరీరమున్ విదల్చి నే
బరంబు బోవు వేళలో
కరంబు నిన్ను మెచ్చెదన్
పరేశు ధ్యాన ప్రార్ధనా`,keywords:["oo prardhana su prardhana","oo pradhana su pradhana","o prardhana su","oo pradana","o prardana","ooprardhana","oprardhana","oopradhana","opradhana","andhra christian song","andhra christian songs"],video:"https://www.youtube.com/embed/KBwT8k8uRxU?list=PLCvcJZhUpB-qJpsgpMgx6vpe_NAKT5qtY",artist:"William Wall Ford",genre:["Andhra Christian Hymn","Prayer"],timeSignature:"3/4"},{id:l(),title:"ఓ మానవా...నీ పాపం మానవా",lyrics:`ఓ మానవా...నీ పాపం మానవా
యేసయ్య చెంత చేరి
నీ బ్రతుకు మార్చవా (2)
పాపములో బ్రతుకుుచున్నచో చెడును నీ దేహము
పాపములోనే మరనించినచో తప్పడు నరకము (2) ||ఓ మానవా||

1. ఎంత కాలము పాపములోనే బ్రతుకుచుందువు
ఎంత కాలము శాపములోనే కొట్టబడుదువు
ఎంత కాలము వ్యాసపరుడవై తిరుగుచుండువు
ఎంత కాలము దుఃఖములో మునిగియుండువు
యేసుని నమ్మి పాపము నుండి విడుదల పొందుము
యేసయ్య తానా రక్తంతో నీ పాపం కడుగును (2) ||ఓ మానవా||

2. ఎంత కాలము దేవుని విడిచి తిరుగుచుందువు
ఎంత కాలము దేవుడు లేక బ్రతుకుచుండువు
ఎంత కాలము దేవుని మాటను ఎదిరించెదవు
ఎంత కాలము దేవుని నీవు దుఃఖపరతువు
యేసయ్యే నీ పాపం కోరకు ప్రాణం పెట్టెను
యేసయ్య నిను రక్షించి పరమునను చేర్చెను (2) ||ఓ మానవా||`,keywords:["oo maanava","o manava","oo manava","o maanava","oo manavaa","oo maanavaa"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ఓ యేసు భక్తులారా",lyrics:`1. ఓ యేసు భక్తులారా - మీ రాజు ధ్వజము
గ్రహించి సాహసించి పోరాడి గెల్వుడీ
విశ్వాసులారా, రండి - మీ రక్షణార్థమై 
ప్రయాసపడ్డ యేసు - విజయమిచ్చును

2. మీ యందసూయబట్టి - మీ ఆత్మ నాశనము
నెల్లప్పుడు గోరునట్టి యనేకులుందురు
మీ రెల్ల రేసు పేరు - వచించి యాయనే
సర్వాధికారి యంచు - సేవింపవలెను

3. ప్రచండమైన దండు - పోరాడ లేచినన్
విరోధి శక్తికొద్ది మరీ తెగించుడీ
స్వకీయ శక్తిగాక - శ్రీ యేసు నామమున్
స్మరించి వానియందు - విశ్వాస ముంచుడి`,keywords:["o yesu bakthulara","oo yesu bakthulara","oo yeesu bakthulara","oo yeesu bakthulaara","ooyesu balthulara","oyesu bakthulara"],video:"",artist:"John Hay",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"ఓ యేసు నీ ప్రేమ ఎంతో మహానీయము",lyrics:`ఓ యేసు నీ ప్రేమ ఎంతో మహానీయము
ఆకాశ తార పర్వత సముద్ర-ములకన్న గొప్పది (2)  ||ఓ యేసు||

1. అగమ్య ఆనందమే హృదయము నిండెను
ప్రభుని కార్యములు గంభీరమైనవి
ప్రతి ఉదయ సాయంత్రములు
స్తుతికి యోగ్యములు (2)  ||ఓ యేసు||

2. సంకట సమయములో సాగలేకున్నాను
దయచూపు నా మీదా అని నేను మొరపెట్టగా 
వింటినంటివి నా మొర్రకు ముందే
తోడునుందునంటివి (2)  ||ఓ యేసు||

3. కొదువలెన్ని యున్నా భయపడను నేనెప్పుడు
పచ్చిక బయలులో పరుండ జేయును
భోజన జలములతో తృప్తి పరచు
నాతో నుండునేసు (2)  ||ఓ యేసు||

4. దేవుని గృహములో సదా స్తుతించెదనూ
సంపూర్ణ హృదయముతో సదా భజించెదనూ
స్తుతి ప్రశంసలకు యోగ్యుడేసు
హల్లేలూయా ఆమేన్ (2)  ||ఓ యేసు||`,keywords:["ఓ యేసు నీ ప్రేమ ఎంతో మహానీయము","oo yesu ni prema","o yesu ni prema","o yeesu nee prema","o yesu nee prema"],video:"",artist:"",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ఓరన్న... ఓరన్న",lyrics:`ఓరన్న... ఓరన్న
యేసుకు సాటి వేరే లేరన్న... లేరన్న
యేసే ఆ దైవం చూడన్నా... చూడన్నా
యేసే ఆ దైవం చూడన్నా ||ఓరన్న||

1. చరిత్రలోనికి వచ్చాడన్నా – వచ్చాడన్నా
పవిత్ర జీవం తెచ్చాడన్నా – తెచ్చాడన్నా (2)
అద్వితీయుడు ఆదిదేవుడు
ఆదరించును (2) ||ఓరన్న||

2. పరమును విడచి వచ్చాడన్నా – వచ్చాడన్నా
నరులలో నరుడై పుట్టాడన్నా – పుట్టాడన్నా (2)
పరిశుద్దుడు పావనుడు
ప్రేమించెను ప్రాణమిచ్చెను (2) ||ఓరన్న||

3. సిలువలో ప్రాణం పెట్టాడన్నా – పెట్టాడన్నా
గెలిచి లేచాడన్న – లేచాడన్న (2)
మహిమ ప్రభూ మృత్యుంజయుడు
క్షమియించును జయమిచ్చును (2) ||ఓరన్న||`,keywords:["ooranna ooranna","oranna oranna","oorana oorana","orana orana","orranna orranna","orannaa oorannaa"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"ఓ సద్భాక్తులారా – లోక రక్షకుండు",lyrics:`1. ఓ సద్భాక్తులారా – లోక రక్షకుండు
బెత్లేహేమందు నేడు జన్మించెన్
రాజాధి రాజు – ప్రభువైన యేసు
నమస్కరింప రండి నమస్కరింప రండి
నమస్కరింప రండి ఉత్సాహముతో

2. సర్వేశ్వరుండు – నర రూపమెత్తి
కన్యకు బుట్టి నేడు వేంచేసెన్
మానవ జన్మ – మెత్తిన శ్రీ యేసూ
నీకు నమస్కరించి నీకు నమస్కరించి
నీకు నమస్కరించి పూజింతుము

3. ఓ దూతలారా – ఉత్సాహించి పాడి
రక్షకుండైన యేసున్ స్తుతించుడి
పరాత్పరుండా – నీకు స్తోత్రమంచు
నమస్కరింప రండి నమస్కరింప రండి
నమస్కరింప రండి ఉత్సాహముతో

4. యేసు ధ్యానించి – నీ పవిత్ర జన్మ
ఈ వేల స్తోత్రము నర్పింతుము
అనాది వాక్య – మాయే నర రూప
నమస్కరింప రండి నమస్కరింప రండి
నమస్కరింప రండి ఉత్సాహముతో`,keywords:["o sadhbakthulara","oo sadhbakthulaara","oo sadbaktulara","o sadbaktulara","andhra christian hymn","christmas","4/4"],video:"",artist:"Bernard Lucas",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"}],క:[{id:l(),title:"కంటి పాపను కాయు రెప్పలా",lyrics:`కంటి పాపను కాయు రెప్పలా- నను కాచెడి యేసయ్యా
చంటి పాపను సాకు అమ్మలా - దాచెడి మా అయ్యా
నీవేగా నీడగా తోడుగా - నీతోనే నేనునూ జీవింతు
నీకన్నా మిన్నగా ఎవరయ్యా - నాకు నీవే చాలయ్యా  ||కంటి పాపను కాయు||

1. మార్పులేని మత్సరపడని - ప్రేమ చూపించినావు
దీర్ఘ కాలం సహనము చూపే - ప్రేమ నేర్పించినావు
ఇది ఎవరూ చూపించని ప్రేమ - ఇది లాభం ఆశించని ప్రేమ
ఇది ఎవరూ ఎడబాపని ప్రేమ
ఇది మరణం వరకు - కరుణను చూపిన ప్రేమ  ||కంటి పాపను కాయు||

2. ఢంబము లేని హద్దులెరుగని - ప్రేమ కురిపించినావు
నిర్మలమైన నిస్స్వార్ధ ప్రేమను - మాపై కనుపరచినావు
ఇది ఎవరూ చూపించని ప్రేమ - ఇది లాభం ఆశించని ప్రేమ
ఇది ఎవరూ ఎడబాపని ప్రేమ
ఇది మరణం వరకు - కరుణను చూపిన ప్రేమ   ||కంటి పాపను కాయు||`,keywords:["kanti paapanu","kanti papanu","kante papanu","kante paapanu","kanti papano","kanti papa","kanti paapanu","kanthi paapanu","kanthi paapa","jk christopher","eye"],video:"https://www.youtube.com/embed/udne5IfgGl4?start=1662",artist:"Rev. Mani Prakash & J. K Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కంటిపాపలా కాచినావయ్యా",lyrics:`కంటిపాపలా కాచినావయ్యా
చంటిపాపను మోసినట్టు మోసినావయ్యా
చేతి నీడలో దాచినావయ్యా
తోడుగా మా ముందరే నడచినావయ్యా

పోషించినావయ్యా బలపరచినావయ్యా 
భయము వలదని ధైర్యమునిచ్చినావయ్యా
నడిపించినావయ్యా కాపాడినావయ్యా  
ఓటమంచులో విజయమునిచ్చినావయ్యా

మా తలంపులు కావు నీ తలంపులే 
మా జీవితాలలో జరిగించినావయ్యా
మా ఊహలే కాదు నీ ప్రణాళికే 
మానక సమయానికి నెరవేర్చినావయ్యా   ||కంటిపాపలా||

1. ఎన్నో ఏళ్లుగా ఎదురు చూసాముగా 
ఆశలే అడియాశలవ్వగా సోలిపోయాముగా
దారే కానక ఆగిపోయాముగా 
అంధకారమే అలుముకోగా అలసిపోయాముగా

అనుదినమున నీ మాటలే ఆదరించి నడిపించెగా
అణగారిన మా ఆశలన్ని చిగురింపజేసెగా
ప్రతి క్షణమున నీ సన్నిధే ధైర్యపరచి బలపరచెగా
చితికిన మా జీవితాలను వెలిగింపజేసెగా

కన్నీరు తుడిచినావు - నాట్యముగ మార్చినావు
ఎనలేని ప్రేమ మా పైన చూపి     ||కంటిపాపలా||

2. ఊహించువాటికంటే ఎంతో అధికముగా  
హెచ్చించినావు దేవా నీ ప్రేమ మధురము
ఏ మంచి లేని మాకు మా మంచి కాపరై  
దీవించినావు దేవా నీ ప్రేమ మరువము

హీనులం బలహీనులం నిలువలేక పడిపోయినా
లేవనెత్తి బండపైనే నిలబెట్టినావుగా
చీటికీ మాటి మాటికీ మా నమ్మకమే కోల్పోయినా
అడుగడుగున నీ నమ్మకత్వమును కనబరచినావుగా

పోగొట్టుకున్నదంతా - రెట్టింపు చేసినావు
నీ గొప్ప ప్రేమ మా పైన చూపి    ||కంటిపాపలా||`,keywords:["kantipaapala kaachinaavayya","kanti paapala kaachinaavayya","kanti papala kaachinavayya","hadlee xavier"],video:"",artist:"Kranthi Chepuri, Hadlee Xavier, Erusha",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కన్న తల్లి చేర్చునట్లు",lyrics:`కన్న తల్లి చేర్చునట్లు - నను చేర్చు నా ప్రియుడు (2)
హల్లేలుయా హల్లెలుయా (2)

1. కౌగిటిలో హత్తుకొనున్‌ - నా చింతలన్‌ బాపును (2) ||కన్న||

2. చేయి పట్టి నడుపును - శికరముపై నిలుపును (2) ||కన్న||

3. నా కొరకై మరణించే- నా పాపముల్ భరియించే (2) ||కన్న||

4. చేయి విడువడు ఎప్పుడు - విడనాడడు ఎన్నడు (2) ||కన్న||`,keywords:["kanna thalli cheerchunatlu","kanna thalli cheerchunattu","kanna talli","kanna thalli","kana talli","kana tali","kanna tali","kanna thalle","kana talle"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కన్నీరేలమ్మా",lyrics:`కన్నీరేలమ్మా కరుణించు యేసు నిన్ను విడువబోడమ్మా
కలవరపడకమ్మా కరుణించు యేసు నిన్ను విడువబోడమ్మా
కరుణ చూపి కలత మాన్పె (2)
యేసే తోడమ్మా   ||కన్నీరేలమ్మా||

1. నీకేమీ లేదని ఏమీ తేలేదని
అన్నారా నిన్ను అవమాన పరిచారా
తల రాత ఇంతేనని తర్వాత ఏమౌనోనని
రేపటిని గూర్చి చింతించుచున్నావా
చింతించకన్న యేసు మాటలు మరిచావా
మారాను మధురంగా మార్చెను చూసావా (2)         ||కన్నీరేలమ్మా||

2. నీకెవరూ లేరని ఏం చేయలేవని
అన్నారా నిన్ను నిరాశపరచారా
పొరుగంటివాడనని ఎప్పటికీ ఇంతేనని
నా బ్రతుకు మారదని అనుకుంటూ ఉన్నావా
నేనున్నానన్న యేసు మాటలు మరిచావా
కన్నీరు నాట్యంగా మార్చును చూస్తావా (2)             ||కన్నీరేలమ్మా||`,keywords:["kannirelamma","kanniru leamma","kannerelamma","kanirelama","kanerelama","4/4"],video:"",artist:"Samuel Karmoji",genre:["General","Hope"],timeSignature:"4/4"},{id:l(),title:"కనుచూపు మేరలోన ఏ ఆశ లేని వేళ",lyrics:`కనుచూపు మేరలోన ఏ ఆశ లేని వేళ
ఎటు తోచక లోలోన నే కృంగియున్న వేళ
నేనున్నా నీతో అంటూ నా చెంతకు చేరావు
నా కన్నీరంతా తుడిచి నీ కౌగిట దాచావు (2)

1. మొదలుపెట్టిన కార్యం మధ్యలో ఆగిపోగా
బెదిరిపోయి నా హృదయం బేలగా మారిపోగా (2)
పని పూర్తి చేయగ బలము లేని వేళ (2)
నేనున్నా నీతో అంటూ నా చెంతకు చేరావు
నా ఆటంకాలన్నిటిని యేసూ తొలగించావు (2)

2. శ్రమలు తెచ్చిన దుఃఖం శాంతినే దోచుకోగా
చెదిరిపోయి ఆశల సౌధం నా గొంతు మూగబోగా (2)
స్తుతి పాట పాడగ స్వరము రాని వేళ (2)
నేనున్నా నీతో అంటూ నా చెంతకు చేరావు
నా నోటను నూతన గీతం యేసూ పలికించావు (2)

3. కపట మిత్రుల మోసం అగ్నిలా కాల్చబోగా
సడలిపోయి నా విశ్వాసం ధైర్యమే లేకపోగా (2)
అడుగేసి సాగగ అనువుకాని వేళ (2)
నేనున్నా నీతో అంటూ నా చెంతకు చేరావు
నా ప్రార్థనకు ఫలమిచ్చి యేసూ నడిపించావు (2)   ||కనుచూపు||`,keywords:["kanuchupu mera lona","kanuchupu meera loona","kanuchoopu meera","stevenson","kanuchopu mera lona","kanuchoopu meera lona"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కనులున్నా కానలేని - చెవులున్నా వినలేని",lyrics:`కనులున్నా కానలేని - చెవులున్నా వినలేని (2) 
మనసున్నా మతి లేని - స్థితియున్న గతి లేని (2) 
వాడను యేసయ్యా - ఓడిపోయిన వాడను (2) 

1. అన్నీ ఉన్నా ఏమి లేని - అందరూ ఉన్న ఏకాకిని 
దారి ఉన్నా కాన రాని - చెంతనున్న చేరలేని ,(2)
యేసయ్యా .. నన్ను విడువకయ్యా (2) 
దిక్కు లేని వాడను 
వాడను యేసయ్యా .. చెదరి పోయిన గూడును (2) ||కనులున్నా|| 

2. భాషలున్నా భావము లేని - ఆత్మ ఉన్న అవివేకిని 
భక్తి ఉన్న శక్తి లేని - ప్రార్ధన వున్నా ప్రేమ లేని 
యేసయ్యా  .. నన్ను కరుణించుమా (2) 
ఫలము లేని వాడను 
వాసిని యేసయ్యా - పేరుకు మాత్రమే విశ్వాసిని (2) ||కనులున్నా||  

3. బోధ ఉన్నా బ్రతుకు లేని - పిలుపు ఉన్నా ప్రయాసపడని
సేవ ఉన్నా సాక్ష్యము లేని - సంఘమున్నా ఆత్మలు లేని 
యేసయ్యా నన్ను నింపుమయా (2)
ఆత్మ లేని వాడను 
పాదిరిని యేసయ్యా - మాదిరి లేని కాపరిని (2) ||కనులున్నా||`,keywords:["kanulunna kaanaleeni","kanuluna kanaleni","kanulunna kaanaleni","kanulunna kaanaleni","kanulunna kaanalene"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కనులే చూసే ఈ సృష్టే నీదనీ",lyrics:`కనులే చూసే ఈ సృష్టే నీదనీ
నీవు లేకుండా ఏ చోటే లేదనీ 
కనులే చూసే ఈ సృష్టే నీదనీ
కరములు చాపి నిన్ను స్తుతియించు జన్మేనాదని
నాలో ఉండగోరినావే
నను నీ గుడిగా మార్చినావే 
నన్నింతగ కరుణించావే
ఓ యేసయ్యా ఓ యేసయ్యా
ఇలా నన్ను మలిచావయ్యా
ఓ యేసయ్యా ఓ యేసయ్యా
ఎలా నిన్ను పొగడాలయ్యా

1. అద్బుత సృష్టిని నే చూడను
నా రెండు కనులు చాలవే 
జరిగించిన కార్యములు
నా ఆలోచనకందవే
నీ దృష్టిలో ఉన్నానయ్యా
నీ చేతిలో దాచావయ్యా
ఎంతటిదానను నేనయ్యా 
అంతా నీ దయే యేసయ్యా

2. సాయముకోరగ నిను చేరిన
ఏ బలహీనతను చూడవే 
గతకాలపు శాపాలను 
నా వెంటను రానీయవే 
సాధనే నేర్పావయా 
సాధ్యమే చేసావయా
గురిగా నిన్ను చూసానయా
ఘనముగ నన్ను మార్చావయా

3. నీ చేతిపని ఎన్నడైనా
నీ మాటను జవదాటవే
వివరించ నీ నైపుణ్యము
చాలిన పదములే దొరకవే 
స్తోత్రమే కోరావయ్యా
కీర్తనే పాడానయ్యా
ఇంతటి భాగ్యమిచ్చావయ్యా
సేవలో సాగిపోతానయ్యా`,keywords:["kanule chusi ee sruste needhani","kanuley chusi e srusti nedhani","Akshaya Praveen"],video:"",artist:"A R Steven Son, Linus Madiri & Akshaya Praveen",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కన్నులతో చూసే ఈ లోకం",lyrics:`కన్నులతో చూసే ఈ లోకం ఎంతో – అందముగా సృష్టించబడెను భూలోకం
దేవుని ఆలయముగా ఈ దేహం – పరిశుద్ధునిగా సృష్టించే శరీరం
నా దేవుని సృష్టియేగా ఈ లోకం – ఆ సృష్టికర్త పనియేగా
నా యేసుని సృష్టియేగా ఈ లోకం – ఆ సృష్టికర్త పనియేగా… ఈ దేహం

1. అల్ఫా ఒమెగయైన మహిమకు పాత్రుడైన దేవుడు
మహిమ పొందాలని ఘనత నొందాలని
వేవేల దూతలతో కొనియాడబడు దేవునికి
నువ్వు కావాలని తన రాజ్యం స్థాపించాలని (2)
తన పోలికలో నిర్మించుకొని – ఆ హృదిలో ఉండాలని (2)
నా దేవుడే కోరెనుగా – నీ హృదయాన్ని తనకీయవా ||కన్నులతో||

2. నీటిబుడగ వంటిదేగా ఈ జీవితం
ఆవిరైపోవును ఇది మన్నైపోవును
అల్ప కాలమేగా ఈ లోకము
పాడైపోవును ఇది లయమైపోవును (2)
ఈ సృష్టిని దేవునిగా నీవు సృష్టిని పూజించావు
సృష్టికర్త దేవుడినే మరచి అంధుడవై బ్రతికావు
ఆ యేసయ్య నీ కోసమై నీ శాపాన్ని భరియించెను
నిత్య జీవము నీకిచ్చుటకై సిలువలో చేతులే చాచి నిను పిలచెను ||కన్నులతో||`,keywords:["kannulatho chuse ee lookam","kannulatho choose ee lokam","kanulato chuse e lokam"],video:"",artist:"Nissy Paul",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కమ్మని బహుకమ్మనీ",lyrics:`కమ్మని బహుకమ్మనీ - చల్లని అతి చల్లనీ - తెల్లని తేట తెల్లనీ
యేసు నీ ప్రేమామృతం 
జుంటె తేనె కన్నా మధురం - సర్వ జనులకు సుకృతం
యేసు నీ ప్రేమామృతం

1. ఆశ చూపెను ఈ లోకం - మలినమాయెను నా జీవితం
యేసూ నీదు ప్రేమ - దయ చూపెను ఈ దీనురాలి పైన 
వెలిగెను నాలో నీ ఆత్మ దీపము - కడిగిన ముత్యముగా అయ్యాను నేను

2. నా కురులతో పరిమళమ్ములతో చేసెద నీదు పాద సేవ 
నా గుండె గుడిలో కొలువైయున్న నీకు చేసెద నేను మధుర సేవ 
ఆరాధింతును నిన్ను అనుదినము - జీవింతును నీకై అనుక్షణము`,keywords:["kammani bhahukammani","kammani bahu kammani","kammani bahu kamani","kammane bahu kammani"],video:"",artist:"Joshua Shaik and K.Y. Ratnam",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కరుణించవా దేవా",lyrics:`కరుణించవా దేవా - కరుణాత్ముడా రావా 
నీ ప్రేమలోనే - కావుమా 
శ్రమలోన తోడే లేక - శిలనైన కానే కాక 
వేసారిపోయా యేసయ్య 
పిలిచాను నిన్నే దేవా - కడదాక నాతో రావా 
నా జీవ దాత యేసయ్య
 
1. ఆశే నీవై నాలో - నా జీవ గమనములోన 
దారే చూపే నాకు - నీ వాక్య వెలుగులలోన 
నీలో నివాసమే - నాలోని కోరిక  
నీ స్నేహ బంధమే - సంతోష కానుక   
నీలో నిరీక్షణే - నా మౌన గీతిక 
కాలాలు మారినా - నీవుంటే చాలిక
 
2. ప్రేమే నాపై చూపి - నా చేయి విడువని దేవా 
ధైర్యం నాలో నింపి - నాతోటి నడచిన దేవా  
నీ సత్య మార్గమే - నా జీవ బాటగా 
నీ నామ ధ్యానమే - నాలోని శ్వాసగా
నీలోనే ఏకమై - నీ ప్రేమ సాక్షినై  
సాగాలి యేసయ్య - నా జీవితాంతము`,keywords:["karuninchava dheva","karuninchava deva","karuninchavaa deva","karuninchava dheeva","karuninchavadeva","karuninchavadheva","kamalakar","pranam kamalakar"],video:"",artist:"Pranam Kamlakhar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కరుణించే నావాడు కనుపాపలా కాపాడు",lyrics:`కరుణించే నావాడు కనుపాపలా కాపాడు 
కునుకేయడు ఏనాడు యేసు 
నా పక్షము తానున్నాడు - నేనే నీ తోడన్నాడు 
నాతో వస్తున్నాడు - క్షేమం ఇస్తున్నాడు

నేనెందుకు భయపడవలెను సామాన్యునివలెను

1. పోరాటము చేయకుండనే ఏ ఖడ్గము దూయకుండనే 
తరమువారు పారిపోలేదా 
ఊరక నిలిచిన చాలును 
జరుగును రక్షణకార్యము 
బలపరచే యేసుమాటలో ఆదరించబడుతున్నాను

2. బూరలను ఊదినంతనే ఆర్భాటం చేసినంతనే 
కోటగోడ కూలిపోలేదా 
నమ్మిక ఉంచిన చాలును
తొలగును ప్రతి ఆటంకము 
స్థిరపరచే యేసుచేతిలో భద్రపరచబడియున్నాను

3. కుండ పగలగొట్టినంతనే దివిటీ వెలిగించినంతనే 
శత్రుసేన రాలిపోలేదా 
లోబడియుండిన చాలును 
చేయును ప్రభువే యుద్దము 
ఘనపరచే యేసుప్రేమలో జయము పొందుకొనుచున్నాను`,keywords:["karuninche naa vaadu kanupapala kapadu","karuninche navadu","stevenson","karunincha na vadu","karuninche na vaadu"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కర్తా మమ్మును దీవించి",lyrics:`1. కర్తా మమ్మును దీవించి
క్షేమమిచ్చి పంపుము
జీవాహార వార్త నిచ్చి
మమ్మును పోషించుము

2. ఇహ నిన్ను వేడుకొని
బహుగా స్తుతింతుము
పరమందు చేరి యింక
స్తోత్రము చెల్లంతుము`,keywords:["kartha mammu dheevinchi","karta mammu dhevinchi","kartha mammu dhivinchi","andhra christian hymns","4/4"],video:"",artist:"John Faset",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"కలనైన అనుకోలేదే యేసయ్య ఇంతగా ప్రేమిస్తున్నావని",lyrics:`కలనైన అనుకోలేదే యేసయ్య ఇంతగా ప్రేమిస్తున్నావని
నామనసులో అనుకోలేదే ప్రభువా ఇంతగా మనసిచ్చినావని
నిను మరచినా నను మరువవు - నిను విడచినా నను విడువవు
||కలనైన||

1. ఎన్నో ఎన్నో చేసితిని నేరాలు
ఎన్నో ఎన్నో చేసితిని ఘోరాలు
నే తెలిసి తెలియక చేసిన పాపములు
ఒప్పుకుందును ప్రభువా నీ ముందు
ఇకనైనా నా బ్రతుకును మార్చుమాయా
నీ వాక్యపు వెలుగులో నడువుమాయా 
||కలనైన||

2. ఇహలోక ఆశలలో మునిగితిని
ఈ లోక మాయలో పడి చెడితిని
మారుమనను లేని నా బ్రతుకును
మరణదినము నుండి విడిపించితివి
ఇకనైనా నా బ్రతుకును మార్చెదను
నీ వాక్యపు వెలుగులో నడువుమయా
ఇకనైనా నా బ్రతుకును అర్పించెదను
నా బ్రతుకును నీకు నసమర్పించెదను ||కలనైన||`,keywords:["kalanaina anukoledhe","kala naina anukoledhe","kalanayna anukoledhe","good friday","lent"],video:"",artist:"Bablu Kumar, Smile Kumar, & Nissy John",genre:["Good Friday","Lent","Love"],timeSignature:"6/8"},{id:l(),title:"కల్వరి కొలిమిలో దినమేల్ల నీవు కాలిపోతివా",lyrics:`కల్వరి కొలిమిలో దినమేల్ల నీవు కాలిపోతివా
సిలువ శ్రమలలో నిలువెల్ల నీవు కరిగిపోతివా (2)
యేసయ్య...ఓ...ఓ... మేసయ్య... ఓ... ఓ... ఓ (2)
దినమెల్ల నీవు కాలిపోతీవా
నిలువెల్ల నీవు కరిగిపోతివా  ||కల్వరి||

1. గోరపాపికొరకు శాపముగా మారావు 
ఎర్రని ఎండలో కరిగి ఆహుతైనావు (2)
ఆ ఘోర సిలువలో చీల్చివేయబడ్డావు
రక్తపు ముద్దగ మారి వ్రేలాడుచున్నావు (2)                                                       ||యేసయ్య ఓ... ఓ ||
||దినమేల్ల నీవు|| 
||కల్వరి||

2. దారపోసారు రుదిరముగా ప్రాణమును
ఉమ్మి వేయమౌనముగా సహియించినావు (2)
బాధలు దిగమింగి నోరు తెరువకున్నావు
నీ త్యాగ ఫలితముగా నన్ను బ్రతికించావు (2)
||యేసయ్య ఓ... ఓ||
||దినమేల్ల నీవు||  
||కల్వరి||`,keywords:["kalvari kolimilo dhinamella neevu","kalvari siluvalo dhinamella neevu","calvari siluvalo dhinamella neevu","calvary siluvalo dhinamella neevu","kaluvari siluvalo dhinamella nevu","kaluvari kolimilo dinamella neevu"],video:"",artist:"Philip",genre:["Good Friday","Lent","Cross"],timeSignature:"6/8"},{id:l(),title:"కల్వరిగిరిపై నా యేసయ్య నాకొరకై నీప్రాణం పెట్టావయ్యా",lyrics:`కల్వరిగిరిపై నా యేసయ్య
నాకొరకై నీప్రాణం పెట్టావయ్యా!
నీకెన్నిశ్రమలు  కరుణామయా !   
నీప్రేమకు సాటేది ఓనజరేయా ! (2) ||కల్వరిగిరిపై||

1.  కాళ్ళకు మేకులు కొట్టిరా – తలపై ముళ్ళకిరీటమా
నేరమే ఏమిలేకనే – అయ్యో ఇంతటి ఘోరమా   (2)
మా పాపభారం మోసావయ్యా 
మాకొరకై సిలువ  మరణమొందావయ్యా
నీకెన్నిశ్రమలు  కరుణామయా !   
నీప్రేమకు సాటేది ఓనజరేయా ! (2)  ||కల్వరిగిరిపై||

2.  తనువునే చీల్చి వేసిరా – రుథిరమే ఏరులైపారెనా
లోకమే ఏక మాయెనా – అయ్యో అంతటి ద్వేషమా  (2)
మాపాపభారం మోసావయ్యా 
మాకొరకై సిలువ  మరణమొందావయ్యా
నీకెన్నిశ్రమలు  కరుణామయా !  
నీప్రేమకు సాటేది ఓనజరేయా ! (2)  ||కల్వరిగిరిపై||`,keywords:["kalvari giripai na yesayya","kaluvari giripai na yesayya","kalvarigiripai na yesayya","good friday","lent","goodfriday"],video:"",artist:"",genre:["Good Friday","Lent"],timeSignature:"6/8"},{id:l(),title:"కల్వరి ప్రేమను తలంచునప్పుడు కలుగుచున్నది దుఃఖం",lyrics:`కల్వరి ప్రేమను తలంచునప్పుడు
కలుగుచున్నది దుఃఖం
ప్రభువా నీ శ్రమలను ధ్యానించునప్పుడు
పగులుచున్నది హృదయం (2)

1. గెత్సేమనే అను తోటలో
విలపించుచు ప్రార్ధించు ధ్వని (2)
నలువైపులా వినబడుచున్నది
పగులుచున్నది నా హృదయం
కలుగుచున్నది దుఃఖం ||కల్వరి||

2. సిలువపై నలుగ గొట్టిననూ
అనేక నిందలు మోపిననూ (2)
ప్రేమతో వారిని మన్నించుటకై
ప్రార్ధించిన ప్రియ యేసు రాజా
మమ్మును నడిపించుము ||కల్వరి||

3. మమ్మును నీవలె మార్చుటకై
నీ జీవమును ఇచ్చితివి (2)
నేలమట్టుకు తగ్గించుకొని
సమర్పించితివి కరములను
మమ్మును నడిపిపంచుము ||కల్వరి||`,keywords:["kaluvari premanu thalanchunappudu","kaluvari preemanu thalanchunapudu","kaluvari premanu thaalanchunapudu","kalvari premanu thalanchinapudu"],video:"",artist:"",genre:["Good Friday","Lent"],timeSignature:"4/4"},{id:l(),title:"కలవర మెందుకు కలత చెందకు",lyrics:`కలవర మెందుకు కలత చెందకు
వేదనలెన్నైనా శోదనలెదురైనా 
సిగ్గుపడనీయ్యడూ నా యేసయ్యా ఒడిపోనీయ్యడూ 

1. శూన్యములో ఈ సృష్టిని 
తననోటి మాటతో సృజియించినా (2)
యేసయ్యా నీతో ఉన్నాడులే
యేసయ్యా నీతో ఉంటాడులే        (2)

2. అలలహోరులో పెనుగాలి వీచినా
వెనుదీయనీ ఆత్మీయ యాత్రలో (2)
యేసయ్యా నీతో ఉన్నాడులే
యేసయ్యా నీతో ఉంటాడులే    (2) 

3. అగ్నిజ్వాలలే నిను చుట్టివేసినా
సింహాల మద్యన నీవుండినా      (2)
యేసయ్యా నీతో ఉన్నాడులే
యేసయ్యా నీతో ఉంటాడులే      (2)

4. ఆకాశపు వాకిళ్ళుతెరచి 
పట్టజాలని దీవెనలొసగే       (2)
యేసయ్యా నీతో ఉన్నాడులే
యేసయ్యా నీతో ఉంటాడులే     (2)`,keywords:["kalavaramendhuku kalatha chendhaku","kalavaramenduku kalata chendaku","kalavaramendhuku kalata"],video:"",artist:"Pastor. Solomon Raju, JK Christopher & Daya Babu ",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కలిసేటి అందాల అనుబంధమే",lyrics:`కలిసేటి అందాల అనుబంధమే 
ఇది ఏనాటికైనా మహనీయమే    
ఎన్నెన్నో కాలాల అనురాగమే 
ఈనాడే ఇలలో శ్రీకారమే 
కమనీయమైన కళ్యాణమే

1. ఇరువురూ ఏకమై జీవించాలీ 
దేవునీ ప్రేమలో ఒదిగిపోవాలీ 

కలిమిలో లేమిలో ప్రేమించాలీ 
మమతలే మల్లెలై పరిమళించాలీ 

మురిసిపోయే వేదిక  
మరువలేని వేడుక 
ఒకరికొకరు తోడుగా 
ప్రభువు చేసే జంటగా  

ప్రేమానురాగాల ఈ బంధమే - మంగళమేగా శుభప్రదమే 
ఆనందమేగా - కళ్యాణమే   

2. గుణములే సిరులుగా స్వీకరించాలీ 
చెరగనీ స్నేహమై నిలిచిపోవాలీ 
 
క్రీస్తులో పయనమే సాగించాలీ 
వాక్యమే మనసులో పదిలమవ్వాలీ 

ప్రభువు ద్రాక్షావల్లిగా 
ఫలమునిచ్చే తీగలా 
వరములెన్నో పొందగా   
తరములెన్నో చూడగా 

పరిశుద్ధ దేవుని నిర్ణయమే - వైభోగమేగా శుభకరమే 
కమనీయమైన కళ్యాణమే`,keywords:["kaliseti andhaala anubandhame","kaliseeti andhala anubandame","marriage","కలిసేటి అందాల అనుబంధమే"],video:"",artist:"Pranam Kamlakhar, Joshua Shaik, Haricharan, Priya Himesh, Srikantha Hariharan",genre:["Marriage"],timeSignature:"7/8"},{id:l(),title:"కలుగును గాక – దేవునికి మహిమ",lyrics:`కలుగును గాక – దేవునికి మహిమ – కలుగును గాక
కలుగు నున్నతమైన – ఘన స్థలములందున
నిలకు సమాధానం – నరుల కాయన దయ     ||కలుగును||

1. ప్రభువైన దేవా – పరమరాజా – సర్వపరిపాలా
పరిపూర్ణ శక్తిగల– పరమ జనక నిన్ను
మహిమ స్తుతించుచు – మరి పొగడుచున్నాము     ||కలుగును||

2. మహిమపర్చుచు – ఆరాధించు – చున్నాము నిన్ను
మహిమాతిశయమును – మది దలంచియు నీకు
మహిని మా స్తుతి కృత – జ్ఞత నిచ్చు చున్నాము     ||కలుగును||

3. ఏక కుమారా – యేసు ప్రభువా – యెహోవా తనయా
లోక పాపము మోయు – ఏక దేవుని గొఱ్రె
పిల్ల మమ్మును కనిన – రించుము చల్లగ     ||కలుగును||

4. లోకపాపములు - మోయుచుఁ బోవు  యేసు రక్షకా 
వాసిగ జనకుని కుడివైపునఁ గూర్చుండి
యేసూ మా ప్రార్థన నాలించి కనికరించు  ||కలుగును||

5. పరిశుద్ధుడవు – ప్రభుడవు నీవో – ప్రభువైన క్రీస్తూ
పరిశుద్ధాత్మతో తండ్రి – యైన దేవునియందు
బరిపూర్ణ మహిమతో – బ్రబలుచున్నామామేన్     ||కలుగును||`,keywords:["kalgunu gaaka","kalugunu gaaka","kalgunu gaka","kalugunu gaka","kalgunugaka","kalgunugaaka","andhra christian hymn","7/8"],video:"",artist:"Yerpula Moshe",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"కలువరి ప్రేమను రుచి చూచినావా",lyrics:`కలువరి ప్రేమను రుచి చూచినావా
సిలువలో వ్రేలాడిన యేసును చూశావా

1. సుందర మోమును ఛిద్రము చేసిరే
కాళ్లు చేతులలో మేకులు కొట్టిరే 
తలను ముండ్ల కిరీటం ప్రక్కలో బల్లెపు పోటు 
దేహమంతయు గాయాల పర్వం 
నెత్తుటి మయం

2. నిన్ను రక్షింపను సిలువ శిక్షనొందెను
నీ ఘోర పాపాలకై రుథిరమంత కార్చెను 
నీకు బదులు మ్రానుపై అల్లాడిపోయెను
నీ కొరకు ప్రాణాన్నే  ప్రభు అర్పించెను 
మరి తిరిగి లేచెను

3. ప్రభు యేసునందు విశ్వసించు నేడే
ప్రాణమిచ్చిన ప్రియుని స్వీకరించు యిపుడే
ప్రభుని విశ్వసించిన నీకు నిత్యజీవము
ప్రభుని త్రోసివేసిన నీకు నిత్యనరకము 
ఏది నీ గమ్యము`,keywords:["kaluvari premanu ruchi chuchinaava","kaluvari preemanu ruchi chuchi nava","kalvari premanu ruchi chuchi naava","kaluvari premanu ruchichuchi nava"],video:"",artist:"",genre:["Good Friday","Lent"],timeSignature:"4/4"},{id:l(),title:"కలువరిలో చూచితిని నీ ప్రేమను",lyrics:`కలువరిలో చూచితిని నీ ప్రేమను
ఎంతో లోతైన నీ మహా త్యాగము (2)

బదులుగ ఏమి నేనివ్వగలనూ
హృదయం సంపూర్ణముగా సమర్పింతున్ (2)

1. సృష్టిలో చూచితిని నీ హస్తము
అద్బుతమైన నీ జ్ఞాన సంపూర్ణతను (2)

బదులుగ ఏమి నేనివ్వగలనూ
సృష్టికర్తకు స్తోత్రము చెల్లింతున్ (2)

2. నీ గాయములో చూచితిని నీ ప్రేమను
స్వస్తత్థ ఇచ్చే యేసుని శక్తియు (2)

బదులుగ ఏమి నేనివ్వగలనూ
నా జీవితం నీకు సమర్పింతున్ (2)

3. నీ శరీరం మా కోసం నలిగెను
నీదు రక్తము మాకోసం కారెను (2)

బదులుగ ఏమి నేనివ్వగలనూ
అంతము వరకు నీ సాక్షిగా జీవింతున్ (2)

4. వింటిని నీ రక్షన పిలుపును 
విడుదలనిచ్చు నీ పరిశుద్ధ వాక్యమున్ (2)

బదులుగ ఏమి నేనివ్వగలనూ
దేశమంతా నీ వాక్యం ప్రకటింతున్ (2)`,keywords:["kaluvarilo chuchithini ni premanu","kalvarilo chuchithini ni premanu","kaluvarelo chuchithini ne premanu","kalvarilo chuchitini ni premanu","kaluvari lo chuchithini ni premanu","kaluvari lo chuchithini nee premanu"],video:"",artist:"Bro. Samson Samuel",genre:["Good Friday","Lent","Love"],timeSignature:"4/4"},{id:l(),title:"కలువరి సిలువ సిలువలో విలువ",lyrics:`కలువరి సిలువ సిలువలో విలువ
నాకు తెలిసెనుగా
కలుషము బాపి కరుణను చూపి
నన్ను వెదికెనుగా (2)
అజేయుడా విజేయుడా
సజీవుడా సంపూర్ణుడా (2) ||కలువరి||

1. కష్టాలలోన నష్టాలలోన
నన్నాదుకొన్నావయ్యా
వ్యాధులలోన బాధలలోన
కన్నీరు తుడిచావయ్యా (2)
మధురమైన నీ ప్రేమ
మరువగలనా ఆ ప్రేమ (2)
అనుక్షణం నీ ఆలోచన
నిరంతరము నాకు నీవిచ్చిన ||కలువరి||

2. పాపానికైనా శాపానికైనా
రక్తాన్ని కార్చావయ్యా
దోషానికైనా ద్వేషానికైనా
మరణించి లేచావయ్యా (2)
మధురమైన నీ ప్రేమ
మరువగలనా ఆ ప్రేమ (2)
అనుక్షణం నీ ఆలోచన
నిరంతరము నాకు నీవిచ్చిన ||కలువరి||`,keywords:["kaluvari siluva siluvalo viluva","kalvari siluva siluvalio viluva","caluvary siluva siluvalo viluva"],video:"",artist:"",genre:["General","Lent","Good Friday","Cross"],timeSignature:"2/4"},{id:l(),title:"కళ్యాణమే వైభోగమే",lyrics:`కళ్యాణమే వైభోగమే
పరినయమే మరి పెళ్లి సంబరమే (2)
అందాల వరుడు పరిశుద్ధుడు
చక్కాని వధువు కన్యకు (2)

జరిగే పరిశుద్ధ వివాహమే
పెరిగే నిరంతర సంతోషమే  (2)

1. ప్రేమను పంచుకునే తోడుకై
ఆశగా చూసే హృదయాముకు (2)
దేవుని దీవెనలే కురియగా
ఆమని కుసుమాలు లే విరియగ
ముగిసే నీరీక్షణ సమయమే
మురిసే ప్రియమైన హృదయమే
యేసే ఏర్పరచిన ఆ దినమే
మన కన్నులకు ఆశ్చర్యమే 

2. మరణము తప్ప మరి ఏదియు
విడదీయనిది ఈ బంధము(2)
వ్యాధి బాధ సంతోషంతో
కలిమి లేమి ఆరోగ్యంతో
ప్రభువే ఒకటిగా దివించేను
మనులే అందుకు నియమించెను
పరలోకములో నిర్ణయించేను
నరలోకములో ఏర్పరచేను`,keywords:["కళ్యాణమే వైభోగమే","marriage","kalyaname vaibogame","kalyaname vaibhogame","kalyaaname vaibogame"],video:"",artist:"David Paluri, Enoch Jagan, Pranith Paul",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"కళ్యాణమే వైబోగం కమనీయ కాంతుల దీపం",lyrics:`కళ్యాణమే వైబోగం కమనీయ కాంతుల దీపం
శృతిలయల సుమధురగీతం దైవరచిత సుందరకావ్యం

1. పరమదైవమే ప్రారంభించిన పరిశుద్ధమైన కార్యం
నరుని మంచికై తన చేతులతో ప్రభు రాసిచ్చిన పత్రం

2. కీడు తొలగించి మేలుతో నింపు ఆశీర్వాదాల వర్షం
మోడుగానున్న జీవితాలు చిగురింపజేసే వసంతం

3. దేవదూతలే తొంగిచూసేటి రమణీయమైన దృశ్యం
భావమధురిమలు పొంగజేసేటి కమనీయమైన చత్రం`,keywords:["కళ్యాణమే వైబోగం కమనీయ కాంతుల దీపం","marriage","kalyaname vaiBogam kamaneeyA","kalyaaname vaibogam","stevenson"],video:"",artist:"Dr. A.R. Stevenson",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"కళ్యాణ వేడుక – రమణీయ గీతిక",lyrics:`కళ్యాణ వేడుక – రమణీయ గీతిక
శుభప్రద ఆశాదీపిక – సుమధుర స్వరమాలిక
క్రీస్తు సంఘ ప్రేమకు జ్ఞాపిక
నూతన జీవిత ప్రారంభ వేదిక

1. వివాహ వ్యవస్థను చేసిన దేవుడు
మొదటి వివాహము జరిగించినాడు
సంఘ వదువుకై ప్రాణమిచ్చిన ప్రియుడు
ఈనాటి పెళ్ళికి కారణభూతుడు
కడపటి పెళ్ళికి ఆయనే వరుడు

2. ఒకరికి ఒకరు సహకారులుగా
సంతోషముతో ఇల జీవించగా
సంతానముతో దీవించబడగా
సహవాసములో సంతృప్తి చెందగా
పరిశుద్ధుడే కలిపె ఇరువురిని ఒకటిగా

3. కిలకిల రవళుల వీణెలు మ్రోగెను
ఆనంద లహరుల సందడి సాగెను
పరలోక దూతల సంతోష గానాలు
బంధుమిత్రుల అభినందన మాలలు
ఆ జంట కనులలో వెలిగే కాంతులు`,keywords:["కళ్యాణ వేడుక రమణీయ గీతిక","marriage","kalyana veeduka","kalyana veduka","kalyana vaduka","kalyanaveduka","kalyaana veduka"],video:"",artist:"",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"కళ్యాణం కమనీయం – ఈ సమయం అతి మధురమ్",lyrics:`కళ్యాణం కమనీయం – ఈ సమయం అతి మధురమ్ 
దేవా రావయ్యా నీ దీవెనలీవయ్యా (2)

1. ఏదేను వనమున యెహోవ దేవా – మొదటి వివాహము చేసితివి 
ఈ శుభ దినమున నవ దంపతులను (2)
నీ దీవెనలతో నింపుమయా ||దేవా||

2. కానా విందులో అక్కరనెరిగి – నీళ్ళను రసముగ మార్చితివే 
కష్టములలో నీవే అండగ ఉండి (2) 
కొరతలు తీర్చి నడుపుమయా ||దేవా||

3. బుద్ధియు జ్ఞానము సంపదలన్నియు – గుప్తమై యున్నవి నీయందే 
ఇహపరముల సుఖములు మెండుగ నొసగి (2)
ఇల వర్ధిల్లగ చేయుమయా ||దేవా||`,keywords:["kalyanam kamaneeyam","kalyaanam kamaneyam","kalyaanam kamaneeyam","kalianam kamaneyam","kalyannam kamaneyam","marriage song"],video:"",artist:"Bablu Kumar, Smile Kumar, & Nissy John",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"కాలమే లేదు త్వరపడుము",lyrics:`కాలమే లేదు త్వరపడుము రారాజు ప్రభువు వచ్చుచున్నడు (2)
రెప్పపాటున వచ్చుదినం పరిశుద్ధులను కొనిపోవును (2)

ఆనందం ఆనందం ఆనందమే
ప్రభు వచ్చు దినము ఆనందమే (2)

1. లోకపు ఆశలు క్షణమాత్రమే 
పాప జీవితం మరణమేగా (2)
సిలువలో రక్తం నీ కొరకే
నిన్ను శుద్ధిపరచి జీవమిచ్చును (2)  ||ఆనందం||

2. బూర ధ్వని వినబడుచున్నది
భూమి ఆకాశం గతియించును (2)
మేఘలపై ప్రభు వచ్చుచున్నాడు
కొనిపోవబడుటకు సిద్ధపడుము (2) ||ఆనందం||`,keywords:["kaalame leedhu","kalame ledhu","kalamey ledhu","kalame ledu","kalameledhu","kalameledu","kaalameeledhu","kaalamee ledhu","kalamu ledhu","kalamu ledu","kalamu ledhu twarapadumu","kalamu ledhu tvarapadumu","kalamu ledu tvarapadumu"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"కాలాలు మారిన గాని",lyrics:`కాలాలు మారిన గాని – యేసు మారడు
తరతరాలు మారిన యేసుని
ప్రేమ మారదు  (2) ||కాలాలు||

1. గర్భమున పుట్టిన మొదలు
తల్లి ఒడిలోనున్నది మొదలు (2)
కడవరకు మోసే ప్రేమది
ముదమార పిలిచే ప్రేమది (2) ||కాలాలు||

2. నింగి నేల మారిన గాని
పర్వతాలు తొలగిన గాని (2)
కడవరకు నిలిచే ప్రేమది
కలుషములు తుడిచే ప్రేమది (2) ||కాలాలు||`,keywords:["kaalaalu maarina gaani","kalalu marina gani","kalaalu maarina gani","kalalumarinagani","kaalaalu maarena gaani","kaalalu marena gani","kaalaalumaarina gaani","kaalaalu maarina kaani","kalalu marina kani","kaalaalu maarena kaani"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కీర్తించి కొనియాడి",lyrics:`కీర్తించి కొనియాడి ఘన పరతును
స్తోత్రించి స్తుతియించి నిను పాడెదన్
యేసయ్య హల్లేలూయా నా యేసయ్య హల్లేలూయా (2)
ఆరాధన స్తుతి ఆరాధనా - ఆరాధన ఘన ఆరాధన (2)

1. దేవాది దేవుడవు పరలోకమును వీడి
మానవ రూపాన్ని ధరియించినావు
రాజులకు రాజువు ప్రభులకు ప్రభుడవు
నీవే మా రక్షణ విమోచకుడా (2) || యేసయ్య ||

2. మమ్మెంతగానో ప్రేమించినావు
నీ ప్రాణములనే అర్పించినావు (2)
మా ప్రాణ నాధుడవు ఆధారభూతుడవు
నీవే మా రక్షణ విమోచకుడా (2) || యేసయ్యా ||

3. ఆశ్చర్య కరుడవు ఆలోచనా కర్త
భలవంతుడైన మా దేవుడా (2)
నిత్యుడగు తండ్రీ సమాదాన కర్తా
నీవే మా రక్షణ విమోచకుడా (2) || యేసయ్యా ||`,keywords:["keerthinchi koniyaadi","keertinchi","kerthinchi","keertinche","koniyadi","keerthenche koniyaadi","keerthenchi koneyade","keerthinchi koneyadi","kirthinchi koniyadi","kirthinche","kerthinche","keerthinche"],video:"",artist:"M.A.P Vijaya Kumar",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"కీర్తి హల్లెలూయా - గానం యేసు నామం మధురమిదే",lyrics:`కీర్తి హల్లెలూయా
గానం యేసు నామం మధురమిదే
నిత్యం స్తోత్రము ఈ ఘనునికే (2)

స్తుతి స్తుతి శ్రీ యేసు నామం – స్తుతి స్తుతి సజీవ నామం
స్తుతి స్తుతి ఉజ్జీవ నామం – ఈ గానము శ్రీ యేసుకే
స్తుతి స్తుతి శ్రీ యేసు నామం – స్తుతి స్తుతి సజీవ నామం
స్తుతి స్తుతి ఉజ్జీవ నామం – ఈ స్తోత్రము మా క్రీస్తుకే

1. ప్రయాసే లేదుగా – యేసే తోడుగా
మాతో నడువగా – భయమే లేదుగా        ||స్తుతి||

2. క్రీస్తుని వేడగా – మార్గం తానేగా
సత్యం రూఢిగా – జీవం నీయగా        ||స్తుతి||`,keywords:["keerthi halleluya","kerthi halleluya","kirthi halleluya","keerthi haleluya","kerti haleluya","kirti haleluya"],video:"",artist:"",genre:["General","Worship"],timeSignature:"2/4"},{id:l(),title:"క్రీస్తే సర్వాధికారి",lyrics:`క్రీస్తే సర్వాధికారి – క్రీస్తే మోక్షాధికారి
క్రీస్తే మహోపకారి – క్రీస్తే ఆ సిల్వధారి  ||క్రీస్తే||

1. ముక్తి విధాత నేత – శక్తి నొసంగు దాత
భక్తి విలాప శ్రోత – పరమంబు వీడె గాన  ||క్రీస్తే||

2. దివ్య పథంబురోసి – దైవంబు తోడు బాసి
దాసుని రూపు దాల్చి – ధరణి కేతెంచె గాన  ||క్రీస్తే||

3. శాశ్వత లోకవాసి – సత్యామృతంపు రాశి
శాప భారంబు మోసి – శ్రమల సహించె గాన  ||క్రీస్తే||

4. సైతాను జనము గూల్పన్ – పాతాళమునకు బంపన్
నీతి పథంబు బెంప – రుధిరంబు గార్చె గాన  ||క్రీస్తే||

5. మృత్యువు ముళ్ళు తృపన్ – నిత్య జీవంబు బెంపన్
మర్త్యాళి భయము దీర్పన్ – మరణంబు గెలిచె గాన  ||క్రీస్తే||

6. పరమందు దివిజులైన – ధరయందు మనుజులైన
ప్రతి నాలుక మోకాలు – ప్రభునే భజించు గాన   ||క్రీస్తే||

7. ఈ నామమునకు మించు – నామంబు లేదటంచు
యెహోవా తండ్రి యేసున్ – హెచ్చించినాడు గాన  ||క్రీస్తే||`,keywords:["kreesthe sarvaadhi kaari","kresthe sarvadhikari","kresthe sarvadhi kari","kreesthesarvaadhi kaari","kristhe sarvadhikari","kristhe sarvadhi kari","cresthe sarvadhi kari","krasthe sarvadhi kaari","kreesthey sarvaadhi kari","kresthey sarvadi kari","kreesthey sarvaadhi kaari","andhra christian song","andhra christian songs","aandhra kraisthava keerthanalu","andhra kraisthava keerthanalu"],video:"https://www.youtube.com/embed/qWpGaLNgivw?si=jFLc1dAOOWKRov84",artist:"Raavuri Ratnam",genre:["Andhra Christian Hymn","Worship"],timeSignature:"3/4"},{id:l(),title:"కుతూహల మార్భాటమే నా యేసుని సన్నిధిలో",lyrics:`కుతూహల మార్భాటమే నా యేసుని సన్నిధిలో
ఆనందమానందమే నా యేసుని సన్నిధిలో (3)

1. పాపమంత పొయెను – రోగమంత తొలగెను యేసుని రక్తములో
క్రీస్తునందు జీవితం – కృపద్వారా రక్షణ పరిషుద్ద ఆత్మలో…. (2)

2. దేవాది దేవుడు – ప్రతిరోజు నివసించే దేవాలయం నేనే
ఆత్మలోన దేవుడు – గుర్తించె నన్ను అద్బుత మద్బుతమె …. (2)

3. శక్తినిచ్చు యేసు – జీవమిచ్చు యేసు జయంపై జయమిచ్చును
ఏకముగా కూడి – హోసన్న పాడి ఊరంతా చాటెదము…. (2)

4. బూరద్వనితొ – పరిషుద్దులతో యేసు రానై యు౦డే…
ఒక్క క్షణములోనే – రూపాంతరం పొంది మహిమలో ప్రవేశిద్దాం… (2)`,keywords:["kuthuhala marbatame","kothuhala marbatame","kuthuhalamarbatame","kuthoohalam arbatame","kuthoohalam marbatame"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"కుమ్మరి ఓ కుమ్మరి",lyrics:`కుమ్మరి ఓ కుమ్మరి జగతుత్పత్తిదారి 
జిగట మన్నైన నా వంక చల్లగ చూడుమయ్యా ||కుమ్మరి||

1. పనికిరాని పాత్రనని – త్రోసివేయకుమా 
పొంగి పొరలు పాత్రగా – మార్చివేయుమా (2) 
||కుమ్మరి||

2. యోగ్యమైన పాత్రగా పావన పరచుమ
ఘనతకైన పాత్రగా సిద్ధము చేయుమా (2) 
||కుమ్మరి||

3. లేఖనమందలి పాత్రలు యేసును స్తుతియించెను
నన్నును అట్టి పాత్రగా మార్చి వేయుమా (2) 
||కుమ్మరి||`,keywords:["kummari o kummari","kumari o kumari","kummari oo kummari","kummari kummari","kumari kumari","kummare kummare"],video:"",artist:"",genre:["Andhra Christian Hymn","General"],timeSignature:"3/4"},{id:l(),title:"కూడికొని యున్నాము",lyrics:`కూడికొని యున్నాము సంఘ ప్రభో కూడికొని యున్నాము తోడ
నుండెద ననుచు నమ్ముచు దొడ్డ దగు నీ పాద సన్నిధి ||కూడికొని||

1. ఎచట నా ప్రియ భక్తులెలమిఁ గూడియున్న నచటికి నేతెంతునని పల్కితి
విచట నుండు మమ్ము వీక్షించి కృపచేత నిపుడు దీవించు
మీ యేసు క్రీస్తునాధా ||కూడికొని||

2. గత కాలమందున గాని చేఁతలచే దుర్గతి నొంది యుండఁగాఁ
గనుఁగొంటివి శత సంఖ్య గల పాపచయ మీవు క్షమియించి యతి
శాంతి నిడితివి యాత్మస్వరూపా ||కూడికొని||

3. నిరతము నీ ప్రేమ నెనరున ధ్యానించి పరమ ధర్మములందుఁ బరతఁ
గల్గి యరులకు శుభములు నిరతంబుఁ జేయఁగఁ దిరత మా కొసఁగుము
దేవుని ప్రియ తనయా ||కూడికొని||

4. అన్ని శోధనముల నన్ని విపత్తుల నన్ని కాలములందు నాదరించి
నిన్ను నమ్మిన జనుల నీ సందిటను జేర్చి పన్నుగఁ గాపాడు
ప్రభు యేసు క్రీస్తు ||కూడికొని||

5. అమలుఁడ నగు నన్ననుకరించుండనుచు నాన తిచ్చినాఁడ వాత్మజులకు
నమల మార్గము నందు నరుగంగ మాకీవు విమలాత్మ దయసేయు
వేగంబు మా తండ్రీ ||కూడికొని||`,keywords:["kudikoniyunnamu","koodikoni yunnamu","koodikoniyunnamu","kudi koni yunnamu","kudikoni yunnamu","andhra christian hymn","7/8"],video:"",artist:"Pulipaka Jagannadham",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"కురిసెను ఆనందాలు",lyrics:`కురిసెను ఆనందాలు
జతకలిసెను అనుబంధాలై
ఇది దేవునికార్యం శుభతరుణం  ||కురిసెను||

1. సృష్టిలో మొదటిగా ఆదాము హవ్వలను 
దేవుడే చేసేను జతపరచి దీవించెను  
వివాహము అన్నిటిలో ఘనమైనబంధం 
నిలిచిపోవాలి ఎన్నటికి ఈ బంధం   ||కురిసెను||

2. యేసే మీ గృహమును కట్టెను స్థిరముగా    
క్రీస్తే యజమానిగా పాలించును ప్రభువుగా 
ఓకరికి ఓకరు తోడై ఐక్యమవ్వాలి క్రీస్తులో 
ప్రేమా భక్తి కలిగి జీవించాలి   ||కురిసెను||`,keywords:["కురిసెను ఆనందాలు","marriage","kurisenu aanandhalu","kurisenu aanandalu","kurisenu aanandhaalu"],video:"",artist:"",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"కృతజ్ఞతతో స్తుతి పాడెద",lyrics:`కృతజ్ఞతతో స్తుతి పాడెద
నా యేసు నాథా
నాకై నీవు చేసిన మేళ్లకై
కోటి కోటి కృతజ్ఞతలు (2)

1. అర్హతే లేని నాపై నీదు
ప్రేమ చూపిన కృపామయా (2)
నా ఊహలకంటెను అధికముగా
దయచేయు ప్రేమామయా (2)         ||కృతజ్ఞతతో||

2. నిజ రక్షకుడు యేసు క్రీస్తని
విశ్వసించెద అను నిత్యము (2)
నీ పాద సేవలో బ్రతుకుటకై
నీ వరము ప్రసాదించుము
నీ పాద సేవలో బ్రతుకుటకై
వరములతో అభిషేకించు  ||కృతజ్ఞతతో||`,keywords:["kruthagnathatho","krutagnathatho","kruthagyathatho","krutagyathatho","kruthagnathathu","kruthagnyatha","dhanyavaadh in telugu","dhanyavadh in telugu","4/4"],video:"https://www.youtube.com/embed/dXuxJJU20mg?start=1177",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"కృప వెంబడి కృపతో - నను ప్రేమించిన నా యేసయ్యా",lyrics:`కృప వెంబడి కృపతో
నను ప్రేమించిన నా యేసయ్యా
నను ప్రేమించిన నా యేసయ్యా (2)
నను కరుణించిన నా యేసయ్యా (2) ||కృప||

1. నా యెడల నీకున్న తలంపులు
బహు విస్తారముగా ఉన్నవి నీలో దేవా (2)
అవి వర్ణించలేను నా యేసయ్యా
అవి వివరింపలేను నా యేసయ్యా (2)
నా యెడల నీకున్న వాంఛలన్నియు ||కృప||

2. ఎన్నో దినములు నిన్ను నే విడచితిని
ఎన్నో దినములు నిన్ను నే మరచితిని (2)
విడువని ఎడబాయని నా యేసయ్యా
మరువక ప్రేమించిన నా యేసయ్యా (2)
ఏమిచ్చి నీ ఋణము తీర్చెదనయ్యా ||కృప||`,keywords:["కృప వెంబడి కృపతో నను ప్రేమించిన నా యేసయ్యా","krupa vembadi krupatho","kropa vembadi kropatho","krupa vembade krupatho"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"కృపామయుడా నీలోనా",lyrics:`కృపామయుడా నీలోనా - నివసింప జేసినందునా 
ఇదిగో నా స్తుతుల సింహాసనం
నీలో నివసింప జేసినందునా - ఇదిగో నా స్తుతుల సింహాసనం - కృపామయుడా... ఆ అ

1. ఏ అపాయము నా గుడారము - సమీపించనియ్యక (2)
నా మార్గములన్నిటిలో - నీవే నా ఆశ్రయమైనందున (2)

2. చీకటి నుండి వెలుగులోనికి - నన్ను పిలచిన తేజోమయా (2)
రాజ వంశములో - యాజకత్వము చేసెదను (2)

3. నీలో నిలచి ఆత్మ ఫలములు - ఫలియించుట కొరకు (2)
నాపైనా నిండుగా - ఆత్మ వర్షము కుమ్మరించు (2)

4. ఏ యోగ్యత లేని నాకు - జీవకిరీట మిచ్చుటకు (2)
నీ కృప నను వీడక - శాశ్వత కృపగా మారెను (2)`,keywords:["krupaamayuda","krupa mayuda","krupaa mayudaa","krupamayuda","yesanna","4/4"],video:"",artist:"Bro. Yesanna",genre:["Worship","General","Protector"],timeSignature:"4/4"},{id:l(),title:"కమనీయమైన నీ ప్రేమలోన నే నిలువనా నా యేసయ్య",lyrics:`కమనీయమైన నీ ప్రేమలోన నే నిలువనా నా యేసయ్య 
కమనీయమైన నీ ప్రేమలోన నే నిలువనా నా యేసయ్య 
తీయనీ నీ పలుకలలోన నే కరిగిపోనా నా యేసయ్య 
కమనీయమైన నీ ప్రేమలోన నే నిలువనా నా యేసయ్య 
తియ తీయనీ నీ పలుకలలోన నే కరిగిపోనా నా యేసయ్య 
నా హృదిలో కొలువైన నిన్నే సేవించనా నా యేసయ్య 
నా హృదిలో కొలువైన నిన్నే సేవించెదా నా యేసయ్య 

1. విస్తారమైన ఘన కీర్తి కన్నా కోరదగినది నీ నామం 
జుంటె తేనె ధారల కన్నా మధురమైనది నీ నామం 
విస్తారమైన ఘన కీర్తి కన్నా కోరదగినది నీ నామం 
జుంటె తేనె ధారల కన్నా మధురమైనది నీ నామం 
సమర్పణతో నీ సన్నిధిని చేరి నిత్యము నిన్నే ఆరాధించనా
సమర్పణతో నీ సన్నిధిని చేరి నిత్యము నిన్నే ఆరాధించనా   
|| కమనీయమైన ||

2. వేసారిపోయిన నా బ్రతుకులో వెలుగైన నిన్నే కొనియాడనా  
వేసారిపోయిన నా బ్రతుకులో వెలుగైన నిన్నే కొనియాడనా  
కన్నీటితో నీ పాదములు కడిగి మనసారా నిన్నే పూజించనా 
కన్నీటితో నీ పాదములు కడిగి మనసారా నిన్నే పూజించనా
నీ కృపలో గతమును వీడి  మరలా నీలో చిగురించనా  
నీ కృపలో గతమును వీడి  మరలా నీలో చిగురించనా   
|| కమనీయమైన ||`,keywords:["kamaneeyamaina ni premaloona","kamaneyamaina nee premalona","kamaneeyamaina ni premalona","kamaniyamaina ni premalona","kamaniyamaina ne premalona","kamaniyamaina nee preemalona"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Anwesshaa",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కాలం సంపూర్ణమైనపుడు యేసయ్య భువికొచ్చెను",lyrics:`కాలం సంపూర్ణమైనపుడు యేసయ్య భువికొచ్చెను 
తానే మనలను ప్రేమించి రక్షకుడై జన్మించెను 

రాజాధి రాజైనను ఇలలో దాసునిగా జీవించెను 
సత్యమును స్థాపించుటకు దైవసుతునిగా ఉదయించెను 

ఇది ఆశ్చర్యమే - ఇది అద్భుతమే
ఆహా ఆనందమే - హాపీ హ్యాపీ క్రిస్మస్ 
ఇది ఆశ్చర్యమే - ఇది అద్భుతమే
ఆహా ఆనందమే - మెర్రి మెర్రి క్రిస్మస్ 

1. జ్ఞానులు సాగిలపడిరి - మ్రొక్కిరి ప్రభువుల ప్రభువును 
అటువలె విశ్వసించుచు - పూజించెదం ప్రభు యేసును 
సర్వోన్నతమైన స్థలములలోన - దేవదేవునికే మహిమ 
తనకిష్టులైన ప్రజలందరికి - భూమి మీద సమాధానము 

2. గొల్లలు దేవుని మాటను - గ్రహియించిరి దూత చెప్పగా 
 విధేయతే మనకు ముఖ్యము - గ్రహియించుము దేవుని చిత్తము 
వాక్యమైన దేవుడు శరీరధారిగా -  మన మధ్యలో నివసించెను 
నమ్మి విశ్వసించుము కలుగు నిత్యజీవము - యేసు క్రీస్తే లోకరక్షకుడు`,keywords:["kaalam sampoornamainapudu yesayya","kalam sampoornam","kaalam sampoornam ayenappudu","christmas"],video:"",artist:"Ps. Philip Gariki, Dr. JK Christopher, Sharon Philip, Lillian Christopher, Hana Joyce",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"కొండ కోన లోయలోతుల్లో",lyrics:`కొండ కోన లోయలోతుల్లో
వినబడుతుంది నా యేసుని స్వరమే
తెలుసుకో నేస్తమా యేసే నిజ దైవం
ప్రభు యేసే మన రక్షణ ప్రాకారం ||కొండ కోన||

1. నీ హృదయమనే ద్వారమున నిలుచున్నాడు నా యేసు
హృదయమందు చేర్చుకో నేస్తమా (2)
ఏ స్థితికైనా చాలిన దేవుడు నా యేసేనయ్య
నీ స్థితిని ఎరిగిన దేవుడు నా యేసేనయ్య (2)
నీవు ఈ దినమందే యేసుని స్వరము వినుమన్నా (2) ||కొండ కోన||

2. ఆకాశానికి భూమికి మధ్య సిలువలో వేలాడెను నా యేసు
నిన్ను రక్షించాలని (2)
కలువరి సిలువలో తన రక్తమును కార్చెను యేసయ్య
తన రాజ్యములో నిను చేర్చుటకు పిలిచెను యేసయ్య (2)
నీవు ఈ దినమందే యేసుని స్వరము వినుమన్నా (2) ||కొండ కోన||`,keywords:["konda koona loyallothullo","konda kona loyalothullo","kondaa kona"],video:"",artist:"Bro. Prabhu Bhushan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కొండలతట్టు నా కన్నులెత్తి/వేచియున్నాను",lyrics:`కొండలతట్టు నా కన్నులెత్తి 
చూచున్నాను నీ వైపు 
కరములు చాపి నీ వాగ్దానముకై 
వేచియున్నాను నీ ముందు 

నా సహాయుడా నా సమర్ధుడా 
నా సజీవుడా జయమిచ్చు జయశీలుడా

కునుకవు నీవు నిదురించవు
నిరతము నా మొరలను ఆలకింతువు


1. నీ కార్యములు ఆశ్చర్యములు
నీ యోచనలు మహనీయము
రుచి చూచితిని నా బాల్యమునుండి
సాగిపోదును ఈ దృఢ విశ్వాసముతో

నా సహాయుడా నా సమర్ధుడా
నా సజీవుడా జయమిచ్చు జయశీలుడా

కునుకవు నీవు నిదురించవు
నిరతము నా మొరలను ఆలకింతువు
కునుకవు నీవు నిదురించవు
నిత్య నిబంధన స్థిరపరచెదవు

Bridge:
నీతిని చీల్చి మార్గము చేసి
ఆరిన నేలపై నడిపిన దేవా
అగ్నిలో చేరి తోడుగ నడిచి
సజీవ సాక్షిగ నిలిపిన దేవా

పర్వతములను తొలగించుము
నీ వాగ్ధానమును నెరవేర్చుము

నా సహాయుడా నా సమర్ధుడా
నా సజీవుడా జయమిచ్చు జయశీలుడా

కునుకవు నీవు నిదురించవు
నిరతము నా మొరలను ఆలకింతువు`,keywords:["kondala thattu","kondalatatu","kondala thattu na kannulethi"],video:"",artist:"Vijay Kondapuram & Allen Ganta",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"కొంతసేపు కనబడి - అంతలోనే మాయమయ్యే",lyrics:`కొంతసేపు కనబడి - అంతలోనే మాయమయ్యే - ఆవిరివంటిదిరా ఈ జీవితం - లోకాన కాదేదీ శాశ్వతం..
యేసే నిజదేవుడు - నిత్య జీవమిస్తాడు - మరణమైన జీవమైన నిన్ను విడువడు..

1. ఎదురౌతారెందరో నీ పయనంలో - నిలిచేది ఎందరు నీ అక్కరలో..
వచ్చేదెవరు నీతో మరణమువరకూ - ఇచ్చేదెవరు ఆపై నిత్యజీవము నీకు..
యేసే నిజదేవుడు - నిత్య జీవమిస్తాడు - మరణమైన జీవమైన నిన్ను విడువడు..

2. చెమటోడ్చి సుఖము విడిచి కష్టములోర్చి - ఆస్తులు సంపాదించినా శాంతి వున్నదా...?!
ఈరాత్రే దేవుడు నీ ప్రాణమడిగితే - సంపాదన ఎవరిదగును యోచించితివా...?!
యేసే నిజదేవుడు - నిత్య జీవమిస్తాడు - మరణమైన జీవమైన నిన్ను విడువడు..

3. నీ శాపం తాను మోసి పాపం తీసి - రక్షణభాగ్యం నీకై సిద్ధము చేసి..
విశ్రాంతినీయగా నిన్ను పిలువగా - నిర్లక్ష్యము చేసిన తప్పించుకొందువా...?!
యేసే నిజదేవుడు - నిత్య జీవమిస్తాడు - మరణమైన జీవమైన నిన్ను విడువడు..`,keywords:["kontha seepu kanabadi antha loone maayamayye","kontha sepu kanabadi","konta sepu kanabadi"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"క్రొత్త యేడు మొదలు బెట్టెను",lyrics:`క్రొత్త యేడు మొదలు బెట్టెను మన బ్రతుకు నందు
క్రొత్త యేడు మొదలు బెట్టెను
క్రొత్త మనసు తోడ మీరు క్రొత్త యేట ప్రభుని సేవ
తత్తర పడకుండ జేయు టుత్తమొత్తమంబు జూడ    ||క్రొత్త||

1. పొందియున్న మేలులన్నియు బొంకంబు మీర
డెందమందు స్మరణ జేయుడి
ఇందు మీరు మొదలుపెట్టు పందెమందు గెల్వ వలయు
అందముగను రవిని బోలి అలయకుండా మెలయకుండా  ||క్రొత్త||

2. మేలు చేయదడవొనర్చగా - మీరెఱగునట్లు కాలమంత నిరుడు
గడచెగా - ప్రాలుమాలి యుండకుండ - జాలమేల సేయవలయు
జాల జనము కిమ్మాను - యేలు నామ ఘనత కొరకు    ||క్రొత్త||

3. బలము లేని వారమయ్యీను బలమొందవచ్చు
కలిమి మీర గర్త వాక్కున
అలయకుండా అడుగుచుండ నలగకుండా మోదమొంది
బలమొసంగు సర్వ విధుల నెలమి మీర నొచ్చుచుండ    ||క్రొత్త||

4. ఇద్దరిత్రి నుండునప్పుడే - ఈశ్వరుని జనులు - వృద్ధి బొంద జూడ
వలయును - బుద్ధి నీతిశుద్ధులందు - వృద్ధినొంద శ్రద్ధజేయు - శుద్దులైన
వారిలొ - బ్ర - సిద్దులగుచు వెలుగవచ్చు   |క్రొత్త||

5. పాప పంకమంటినప్పుడు ప్రభు క్రీస్తు యేసు
ప్రాపు జేరి మీరు వేడగా
సేపు మీర తనదు కరుణ పాపమంతా కడిగివేసి
పాప రోగ చిహ్నలన్ని బాపి వేసి శుద్ది చేయు      ||క్రొత్త||`,keywords:["krotha yedu modhalu pettenu","kotha yedu modhalu pettenu","krotha eedu modhalu pettenu","kotha eedu modhalu pettenu","kotha adu modhalu pettenu","new year","andhra christian hymns","7/8","4/4"],video:"",artist:"Pulipaaka Jagannadham",genre:["Andhra Christian Hymn","New Year"],timeSignature:"7/8 or 4/4"},{id:l(),title:"క్రైస్తవులారా! లెండి యీనాడు",lyrics:`1. క్రైస్తవులారా! లెండి యీనాడు క్రీస్తు పుట్టెనంచు పాడుఁడి; 
ప్రసన్నుఁడైన ప్రేమను ఆసక్తిపరులై కీర్తించుఁడి
క్రీస్తేను మానవాళితోడను నశింపవచ్చెనంచు పాడుఁడి.

2. దేవుని దూత గొల్లవారికి ఈ రీతిగాను ప్రకటించెను:- 
'ఈ వేళ మహా సంతోషంబగు సువార్త నేను ఎరిగింతును.
దావీదు పట్నమం దీదినము దైవరక్షకుఁడు జన్మించెను.'

3. త్వరగానే ఆకాశ సైన్యము హర్షించుచు నీలాగు పాడెను
'సర్వోన్న తాకాశంబునందుండు సర్వేశ్వరునికి ప్రభావము 
నరులయందు సమాధానము ధరణిలో వ్యాపింపనియ్యుఁడు'.

4. పరమతండ్రి దయారసము నరులకెంతో నాశ్చర్యము
నరావతారుఁడగు దేవుఁడు నిరపరాధిగాను జీవించి
నిర్దోషమైన త్రోవ చూపించి విరోధులన్ ప్రేమించుచుండెను.

5. శ్రీ మాత సైన్యముతో మేమును వాద్యములు వాయించుచుందుము;
ఈ దినమందు నుద్భవించిన యా దివ్యకర్తను వీక్షింతుము; 
సదయుఁడైన యేసు ప్రేమను సదా స్తుతించి పాడుచుందుము.`,keywords:["kraisthavulara","kraisthavulaara","kraisthavu lara","kraystavulara","kraistavulara","kraisthaulara","andhra christian hymns","christmas","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"},{id:l(),title:"కొనియాడ దరమే నిన్ను",lyrics:`కొనియాడ దరమే నిన్ను
కోమల హృదయ – కొనియాడ తరమే నిన్ను
తనరారు దినకరు – బెను తారలను మించు (2)
ఘన తేజమున నొప్పు – కాంతిమంతుడ వీవు    ||కొనియాడ||

1. కెరుబులు సెరుపులు – మరి దూత గణములు (2)
నురుతరంబుగ గొలువ – నొప్పు శ్రేష్ఠుడ వీవు   ||కొనియాడ||

2. సర్వ లోకంబుల – బర్వు దేవుడ వయ్యు (2)
నుర్వి స్త్రీ గర్భాన – నుద్భవించితి వీవు  ||కొనియాడ||

3. విశ్వమంతయు నేలు – వీరాసనుడ వయ్యు (2)
పశ్వాళితో దొట్టి – పండియుంటివి వీవు   ||కొనియాడ||

4. దోసంబులను మడియు – దాసాళి కరుణించి (2)
యేసు పేరున జగతి – కేగుదెంచితి నీవు   ||కొనియాడ||

5. నరులయందున కరుణ – ధర సమాధానంబు (2)
చిరకాలమును మహిమ – పరగ జేయుదు వీవు   ||కొనియాడ||

6. ఓ యేసు పాన్పుగ – నా యాత్మ జేకొని (2)
శ్రేయముగ పవళించు – శ్రీకర వరసుత   ||కొనియాడ||`,keywords:["koniyada tharame ninnu","koniada tharame ninnu","koniyaada tharamee ninnu","koniyaada tharaame ninnu","andhra christian hymn","7/8"],video:"",artist:"Panthagaani Paradeshi",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"కోరుకున్న చెలిమి పొందెను",lyrics:`కోరుకున్న చెలిమి పొందెను
కలనైన ఎన్నడూ విడువదు
కోరుకున్న చెలిమి పొందెను
కలనైనా ఎన్నడూ విడువడు

ఈ సమయం నీదే చేరుమా  (2)
వేచియున్నది నీ బంధము

1. కలలు కంటివే నీ ప్రియుని కోసము
నీ కొరకే నిలిచుండెను
ఒకసారి ఇటు చూడుమా  (2) ||ఈ సమయం||

2. మరచిపోకుమా ఇది ప్రభుని కార్యము
ప్రేమించి దీవించెను
నీ ఆశనే తీర్చును   (2) ||ఈ సమయం||`,keywords:["కోరుకున్న చెలిమి పొందెను","marriage","koorukunna chelimi pondhenu","korukunna chelimi","koorukunna cheleme"],video:"",artist:"Anil Chetty, Prudhvi Raj, Siddu, Benny",genre:["Marriage"],timeSignature:"6/8"},{id:l(),title:"కోరుదును నేను నా యేసు పాదములు",lyrics:`కోరుదును నేను నా యేసు పాదములు
నా యేసు పాద విశేషము వర్ణనాతీతం

1. స్వర్గవార్తను చాటుటకు నా ప్రభుని పాదములు
పరుగులెత్తెను భువియందంతట – పరమ పురమును జేర్చుటకు

2. గ్రుడ్డి చెవిటి - మూగవారిని స్వస్థపరచుటకు
వారిలోపము దీర్చుటకును - పరుగులెత్తిన పాదములు

3. కుష్టులను శుద్దులుగా జేయున్‌ - సంచరించినవి
మృతులను సజీవులుగా -లేపవెళ్ళిన పాదములు

4. నెలపైన నడచిన రీతిగా - సంద్రముపై నడచెన్
శిష్య బృదము ఏర్పరచను దరికి వెళ్లిన పాదములు

5. పర్వతా అరణ్యములో ప్రార్థనలు సలుపన్
పరమ ఉపదేశములు చేయను వెళ్లిన రమ్యపాదములు

6. సిలువ మోయుచు కల్వరిగిరికి వెళ్లిన పాదములు
సాతానును తల చితక ద్రొక్కిన సిలువ వేసిన పాదములు`,keywords:["korudhunu nenu","koorudhunu neenu","korudunu nenu","koorudunu nenu na yesu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"కొంతసేపు కనబడి అంతలోనే మాయమయ్యే",lyrics:`కొంతసేపు కనబడి అంతలోనే మాయమయ్యే
ఆవిరి వంటిదిరా ఈ జీవితం
లోకాన కాదేది శాశ్వతం (2)
యేసే నిజ దేవుడు నిత్యజీవమిస్తాడు
మరణమైన జీవమైన నిన్ను విడువడు (2)       ||కొంతసేపు||

1. ఎదురౌతారెందరో నీ పయనంలో
నిలిచేది ఎందరు నీ అక్కరలో (2)
వచ్చేదెవరు నీతో మరణము వరకు (2)
ఇచ్చేదేవరు ఆపై నిత్య జీవము నీకు         ||యేసే||

2. చెమటోడ్చి సుఖము విడిచి కష్టమునోర్చి
ఆస్తులు సంపాదించిన శాంతి ఉన్నదా (2)
ఈ రాత్రే దేవుడు నీ ప్రాణమడిగితే (2)
సంపాదన ఎవరిదగును యోచించితివా         ||యేసే||

3. నీ శాపం తాను మోసి పాపం తీసి
రక్షణ భాగ్యము నీకై సిద్ధము చేసి (2)
విశ్రాంతినీయగ నిన్ను పిలువగా (2)
నిర్లక్ష్యము చేసిన తప్పించుకొందువా         ||యేసే||`,keywords:["konthasepu kanabadi","konta sepu kanabadi","kontha seepu kanabadi","kontasepu kanabadi","funeral"],video:"",artist:"Dr. A.R. Stevenson",genre:["General","Funeral"],timeSignature:"6/8"}],గ:[{id:l(),title:"గగనాన ధ్వనియించె శుభగానము",lyrics:`గగనాన ధ్వనియించె శుభగానము
పరలోక గీతాల సారాంశము
యేసే కదా శాంతీసుధా శాంతీసుధా 

1. నమో పాపపరిహారి తేజోమయా
నమో జీవనా కృపాసాగరా
నమో దేవ నీ నామ సంకీర్తనే
జగాలందు కడలేక సాగాలనీ

2. సర్వొన్నతమైన స్థలమందున
యెహోవాకే మహిమ కలగాలని
తపించేటి నరులు విమలాత్ములు
శుభానంద భాగ్యాలు పొందాలనీ`,keywords:["gaganaana dwaniyinche","gaganaana","gaganana","gagananaa","gaganana dvaniyinche","gaganana dhwaniyinche","christmas"],video:"",artist:"",genre:["Christmas"],timeSignature:"3/4"},{id:l(),title:"గడచిన కాలం కృపలో మమ్ము",lyrics:`గడచిన కాలం కృపలో మమ్ము 
కాచిన దేవా నీకే స్తోత్రము 
పగలు రేయి కనుపాప వలె 
కాచిన దేవా నీకే స్త్రోత్రము (2) 
మము కాచిన దేవా నీకే స్తోత్రము 
కాపాడిన దేవా నీకే స్తోత్రము (2) 

1. కలత చెందిన కష్టకాలమున  
కన్న తండ్రి వై నను ఆదరించిన 
కలుషము నాలో కాన వచ్చిన 
కాదనక నను కరుణించిన (2) 
కరుణించిన దేవా నీకే స్తోత్రము 
కాపాడిన దేవా నీకే స్తోత్రము (2)    

2. లోపములెన్నో దాగి ఉన్ననూ 
దాతృత్వములో నను నడిపించినా 
అవిధేయతలే ఆవరించినా 
దీవెనలెన్నో దయచేసిన (2) 
దీవించిన దేవా నీకే స్తోత్రము 
దయ చూపిన దేవా నీకే స్తోత్రము (2)`,keywords:["gadachina kaalam","gadichina kalam","gadachina kalam","gadachena kalam","gadachena kaalam"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"గతకాలమంతా కాచి నీమేలులెన్నో చేసితివి",lyrics:`గతకాలమంతా కాచి నీమేలులెన్నో చేసితివి  (2)
నీ చుట్టె కంచెను మా చుట్టూ ఉంచి నీ వాత్యల్యము చూపితివి  (2)
మా బలము నీవే - మా భాగ్యము నీవే  
మా దాగుచోటు నీవే యేసయ్యా (2)

1. సీయోను కొండలపై హెర్మోను మంచువలే 
నీదీవేనలు మాపై కురుపించితివి (2)
నీసన్నిధిలో స్తుతించు చుండగా
మా గిన్నె నిండి పొర్లుచున్నది (2)
నీ మహిమైశ్వర్యములో మా ప్రతి అవససము 
యెహోవా యీరే గా చూచుకొంటివి (2)   

మా బలము నీవే - మా భాగ్యము నీవే 
మా దాగుచోటు నీవే యేసయ్యా (2)
||గత||

2. మా సరిహద్దులలో సమాధానమునిచ్చి 
మంచి గోధుములతో మము తృప్తి పరచితివి (2) 
దినములు జరుగుచుండగా 
నీ కార్యములు నూతన పరచుచుంటివి (2)  
నీ నీతి మార్గమున మేము నడువగా 
యెహోవా షాలోమ్ మై మాతో నడచితివి (2) 

మా బలము నీవే - మా భాగ్యము నీవే  
మా దాగుచోటు నీవే యేసయ్యా (2)
||గత||`,keywords:["gatha kalamantha kaachi","gatakalamanta kachi","gatha kalam antha kachi","gatha kaalamantha kachi"],video:"",artist:"Prasad Nelapudi, Bro.KY Ratnam",genre:["General"],timeSignature:"6/8"},{id:l(),title:"గతకాలమంత నీ నీడలోన",lyrics:`గతకాలమంత నీ నీడలోన-దాచావు దేవా వందనం
కృప చూపినావు - కాపాడినావు
ఎలా తీర్చగలను నీ రుణం
పాడనా నీ కీర్తన - పొగడన వేనోళ్ళన (2)
వందనం యేసయ్య - ఘనుడవు నీవయ్యా (2) ||గతకాలమంత ||

1. ఎన్నెనో అవమానాలెదురైనను
నీ ప్రేమ నన్ను విడచి పోలేదయ్యా
ఇక్కట్లతో నేను కృంగినను
నీ చేయి నను తాకి లేపెనయ్యా
నిజమైన నీ ప్రేమ నిష్కళంకము
నీవిచ్చు హస్తము నిండు ధైర్యము (2)
వందనం యేసయ్య - ఘనుడవు నీవయ్యా (2) ||గతకాలమంత ||

2. మాటలే ముల్లుగా మారిన వేళ
నీ మాట నన్ను పలకరించేనాయ
నిందలతో నేను నిండిన వేళ
నీ దక్షిణ హస్తం నన్నుతాకేనాయ
నీ మాట చక్కటి జీవపు ఊట
మరువనెన్నడు నిన్ను స్తుతియించుట (2)
వందనం యేసయ్య - ఘనుడవు నీవయ్యా (2) ||గతకాలమంత ||
వందనం యేసయ్య - విభుడవు నీవయ్యా (2)`,keywords:["gatha kaalamantha","gatha kalam","gata kalam antha","gata kaalam antha","gata kaalamantha","gata kalamantaa","gatha kalamanthaa","gatha kalamanta","gata kalam anta","gathakalamantha","gathakalam antha"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"గమ్యం చేరాలని నీతో ఉండాలని",lyrics:`గమ్యం చేరాలని నీతో ఉండాలని
పగలు రేయి పరవశించాలని
ఈ నింగి నేల కనుమరుగైన 
శాశ్వత జీవం పొందాలని

సాగిపోతున్నాను నిన్ను చూడాలని
నిరీక్షిస్తున్నాను నిన్ను చేరాలని

1. భువి అంతా తిరిగి జగమంతా నడచి 
నీ జ్జానమునకు స్పందించాలని
నాకున్నవన్నీ సమస్తం వెచ్చించి
నీ ప్రేమ ఎంతో కొలవాలని
అది ఎంత ఎత్తున ఉందో అది ఎంత లోతున ఉందో
అది ఏ రూపంలో ఉందో అది ఏ మాటల్లో ఉందో  ||సాగిపోతున్నాను||

2. అలలెన్నో రేగినా శ్రమలెన్నో వచ్చిన 
శిరమును వంచి సహించాలని
వేదన బాధలు గుండెను పిండిన
నీదు సిలువను మోయాలని
నా గుండె కోవెలలోన నిన్నే నే ప్రతిష్టించి
నీ సేవలోనే ఇలలో నా తుది శ్వాసను విడవాలని  ||సాగిపోతున్నాను||`,keywords:["gamyam cheralani","gamyamu cheralani","gamyamcheralani","gamyam cheeralani","gamyam cheraalani","gamyam cheeraalani","gamyam cheralane","john wesly","4/4"],video:"",artist:"Dr. John Wesly",genre:["General"],timeSignature:"4/4"},{id:l(),title:"గాడాంధకారములొ – నేను తిరిగినను",lyrics:`గాడాంధకారములొ – నేను తిరిగినను
నేనేల భయపడుదు – నా తోడు నీవుండగా (2) ||గాడాంధ||

1. ఎన్నెన్నో ఆపదలు నన్ను చుట్టినను
నిన్ను తలచినచో నన్ను విడనాడు (2)
అన్ని కాలముల నిన్నే స్మరియింతు
ఎన్నరానివయా నీకున్న సుగుణములు ||గాడాంధ||

2. నాకున్న మనుజులెల్ల నన్ను విడచినను
నా దేవ ఎపుడయిన నన్ను విడచితివా (2)
నా హృదయ కమలమున నిను నేను నిలిపెదను
నీ పాద కమలమున నా దేవ కొలిచెదను ||గాడాంధ||
3. నా బ్రతుకు దినములలో - నిన్నేల మరచెదను
నీ ఘనకార్యముల - నేనెపుడు స్మరియింతు (2)
నీ ఉపకారముల - నేనెపుడు తలచెదను (2)
నా యేసు పాదముల - నేనిపుడు కొలిచెదను
||గాడాంధ||`,keywords:["gaadaandha karamulo","gaadandha karamulo","gadandhakaramulo","gadandha karamu lo","gadanda karamulo","gadanda kaaramulo"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"గాయ పడ్డావా - నా కొరకు సిలువలో",lyrics:`గాయ పడ్డావా - నా కొరకు సిలువలో
ధూషింప బడ్డావా - నా కొరకు యేసయ్య

నిను అప్పగించిన - నాకోసము
చెదరి పోయిన - నాకోసము

చేతులు చాపి - క్షమియించి

యేసు - నా రక్షణ 

1. శిలలాంటి నా కొరకు - సిలువ పై వ్రేలాడితివి
కఠిన శిక్షలొ - నన్ను జ్ఞాపకం చేసుకొని
క్షమియించినావు - నన్ను చేర్చుకున్నావు
క్షమియించినావు - నన్ను రక్షించి నావు ||యేసు - నా రక్షణ||

2. నలిగిన రెళ్లు వై - చిరిగిన దేహముతో
ముళ్ల మకుటము - రక్త ధారలు
భరియించినావు - ఆత్మనప్పగించినావు
భరియించినావు - నన్ను రక్షించి నావు ||యేసు - నా రక్షణ||`,keywords:["gaaya paddava naa koraku","gaya paddava na koraku","gaaya padava nakosaku","sam deeven","satyatej devunuri","blessy","good friday","lent","goodfriday"],video:"",artist:"Satyatej Devunuri, Sam Deeven, Blessy",genre:["Good Friday","Lent"],timeSignature:"3/4"},{id:l(),title:"గీతం గీతం జయ జయ గీతం",lyrics:`గీతం గీతం జయ జయ గీతం చేయి తట్టి  పాడెదము ఆ ఆ 
యేసు రాజు గెల్చెను హల్లెలూయ జయ మార్భటించెదము

1. చూడు సమాధిని మూసినరాయి దొరలింపబడెను 
అందు వేసిన ముద్ర కావలినిల్చెను నా - దైవ సుతుని ముందు  ||గీతం|| 

2. వలదు వలదు యేడువవలదు - వెళ్ళుడి గలిలయకు 
తాను చెప్పిన విధమున తిరిగి లేచెను - పరుగిడి ప్రకటించుడి  ||గీతం||

3. అన్న కయప వారల సభయు ఆదరుచు పరుగిడిరి
ఇంక భూతగణముల ధ్వనిని వినుచు - వణకుచు భయపడిరి  ||గీతం||

4. గుమ్మముల్ తెరచి చక్కగ నడువుడి - జయ వీరుడు రాగా 
మీ వేళతాళ వాద్యముల్ - బూరలెత్తి ధ్వనించుడి   ||గీతం||`,keywords:["geetam geetam jaya jaya geetam","geetham geetham jaya jaya geetham"],video:"",artist:"",genre:["Easter"],timeSignature:"4/4"},{id:l(),title:"గుణవతి అయిన భార్య",lyrics:`గుణవతి అయిన భార్య
దొరుకుట అరుదురా (2)
ఆమె మంచి ముత్యము కన్న విలువైందిరా
జీవితాంతము…
జీవితాంతము తోడురా
వెన్నెల బాటరా (2)
వెన్నెల బాటరా (4) ||గుణవతి||

1. అలసినపుడు తల్లిలా
కష్టాలలో చెల్లిలా (2)
సుఖ దుఃఖములలో భార్యగా (2)
భర్త కన్నుల మేడరా ||జీవితాంతము||

2. మరచిపోనిది మాసిపోనిది
పెండ్లనే బంధము (2)
మరచిపోకుమా జీవితమున (2)
పెండ్లి నాటి ప్రమాణము ||జీవితాంతము||`,keywords:["గుణవతి అయిన భార్య","marriage","gunavathi ayena barya","gunavathi aina baarya","gunavati ayena baarya"],video:"",artist:"V. Jesudas",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"గుండె నిండా యేసు ఉంటే",lyrics:`గుండె నిండా యేసు ఉంటే కన్నీళ్లే ముత్యాలు
గుండె గుడిలో యేసు ఉంటే దుఃఖమైనా సంతోషం (2)
గుండె నిండా నువ్వే
యేసు గుండె నిండా నువ్వే (4)

1. లోక స్నేహం వెలివేసినా
శోకంలో ముంచి వేసినా – నీవే నా నేస్తం
నా హృదయం చెప్పేదొక్కటే
గుండె నిండా నువ్వే (2)           ||గుండె నిండా నువ్వే||

2. ఊపిరంతా శాపమైనా
గాలి కూడా గేలిచేసినా – నీవే నా చెలిమి
జాలి లేని ఇలలోన
నీవే నా కలిమి (2)           ||గుండె నిండా నువ్వే||

3. చిరకాలం నీ ఒడిలో
ఉండాలని ఆశతో
చెమ్మగిల్లే కలలతోనే
పాడుతున్నా గీతం (2)           ||గుండె నిండా నువ్వే||`,keywords:["gunde  nindaa yesu unte","gunde ninda yesu untey","gundu ninda yesu unte","gundi ninda yessu unte","gunde ninda yeesu unte","gundey ninda yesu unte"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"గుండెల పైనా ఆనుకున్నవారే",lyrics:`గుండెల పైనా ఆనుకున్నవారే
గుండెల పై తన్ని వెళ్ళిపోయారా (2)

ఈ లోక ప్రేమ అంతా వ్యర్ధం
యేసు అంటేనే ప్రేమని అర్ధం (2)

1. గుండె చెదరిన వారిని బాగుచేయును 
నీ గుండె కోత బాపివేయును   (2)
నీ గాయాలు కట్టువాడు యేసు 
నీ గాయాలు మానుపువాడు క్రీస్తు (2)  ||ఈ లోక ప్రేమ||

2. నీ వారే నిన్ను విడిచిపెట్టినా 
యేసయ్య నిన్ను చేరదీయును    (2)
నిన్ను ఎన్నడు మరచిపూడు యేసు 
నిన్ను ఎన్నడు విడువడు క్రీస్తు  (2) ||ఈ లోక ప్రేమ||`,keywords:["gundelapaina","gundelapayna","gundala paina","gundela paina aanukunna vaare","gundelapaina aanukunnavaare","gunde la paina","gandela paina aanukunna","gundala pina aanukunna","gundela pina aanukunna","gundala pina","gundela pina","gundala pyna","gundela pyna","gundela pyna aanukunnavare","gundela payna","joseph"],video:"",artist:"Bro V.Joseph",genre:["General"],timeSignature:"4/4"},{id:l(),title:"గొప్ప కార్యములు చేయువాడా తరతరముకు నిలిచావు",lyrics:`గొప్ప కార్యములు చేయువాడా తరతరముకు నిలిచావు
పరలోకపు దీవెనలు కురిపించావు
మాలో ఉన్న ఆ బాదనంత సంతోషంగా మార్చావు
పరలోకపు దీవెనలు కురిపించావు

నా హృదయం నీకే నీకే - నా సమస్తము నీకే నీకే
నాకున్న వన్ని నీకే నీకే దేవా
నీవు లేక నేనుండలేను నీవు లేక నేను లేనే లేను
నీవు లేక నాకు ఏది సాధ్యం కాదయ్య`,keywords:["goppa kaaryamulu","goppa karyamulu","gopa karyamul","gopa kariyamulu","goppa kariamulu","gopa karyamulu","gopa kariamulu","goppa karyamulu cheeyuvaada","goppa karyamulu cheyuvaada"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"గొప్ప దేవ నాకు తండ్రివి",lyrics:`గొప్ప దేవ నాకు తండ్రివి యాకాశమందు గొప్ప దేవ నాకుఁ దండ్రివి
తప్పకుండ వత్తు నీదరికి యేసు నామమందు గొప్ప కరుణ చేత
నన్నిప్పుడు తగఁ జేర్చుకొనుము ||గొప్ప||

1.నీవు మిగుల గొప్ప వాఁడవు నా సృష్టి కర్త యీవు లెపుడు నిచ్చు వాఁడవు
భావమందు నినుఁ దలంచి పావనాత్మ నాకు నిచ్చి జీవమార్గమందు
నిలిపి కావు మనుచు వేఁడుకొందు ||గొప్ప||

2. చిన్నవాని నంగి ప్రార్థన నీ లోకమందు మున్ను దయను నిన్న వాఁడవు
సన్నుతుఁడగు యేసు నీదు సన్నిధి సున్నాఁడు గాన నన్నుఁ గనికరించు
మనుచు నిన్ను నమ్మి వత్తు నిపుడు ||గొప్ప||

3. విలువ గల్గు నీదు నాజ్ఞలు నా హృదయమందు బలు విధములఁ దలఁచు
చుందును బలుకులందుఁబనులయందు బలముఁ జూపి నిన్నుఁ
గొలిచి యిలను నిన్నుఁ బ్రీతిపరుతు నలయక నీ కరుణ మెయిని ||గొప్ప||

4. మీఁది రాజ్యమందుఁ జేర్చుము కరుణాసముద్ర బీద నైన నన్నుఁ గరుణచే
సోదరులను గూడికొనుచు మోద మొప్పఁగ నీదు సేవఁ
బాదుకొనుచు నుందును నీ పాదపద్మములనుబట్టి ||గొప్ప||`,keywords:["goppa dheva naku thandrivi","goppa deva naku thandri","gopa deva","goppa deva naaku thandri","gopa dheva naku thandri","gopha dheva","goppa deva","goppa dheva","goppadheva","goppadeva","goppadheva","4/4"],video:"",artist:"Pulipaaka Jagannadham",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"గొప్పదేవా యెహోవా సృష్టికర్త",lyrics:`గొప్పదేవా యెహోవా సృష్టికర్త    (2)
నీకసాధ్యమైనది ఇల లేనేలేదయ్యా          (2)  
నీ మాటకు ప్రభావం ఉన్నది     (2)

1. ఆకాశముల్  ఈ సృష్టియంత నీ మాట మహిమే      
మా ఆత్మయు మా జ్ఞానమంతా నీ దయయే    (2)
ఆశ్చర్యకరుడా అనంతజ్ఞాని అతిశయమే నిన్ను కలిగుండుట     (2)
ప్రభావముగల దేవా యెహోవా దేవా    ||గొప్పదేవా||     

2. పాపములో పొర్లాడినా మమ్మును పవిత్రపరచి
శుద్దులుగా నిబంధన ప్రజలుగా రూపించిన   (2)
కృపామయుడా విమోచకుడా సజీవుడా పరిశుద్దుడా          (2)
పాపుల రక్షక మా యేసు రాజా    ||గొప్పదేవా||

3. హృదయమనే ద్వారమునుండి లోనికి వచ్చి 
కఠినమనస్సును కరుణమనస్సుగా మార్చితివే      (2)
సత్యస్వరూపి అదృశ్యదేవుడా క్రియాశీలి సర్వశక్తిదాత     (2)
ఆదరించే దేవా పరిశుద్దాత్ముడా   ||గొప్పదేవా||`,keywords:["goppadeeva yehova","goppa dheeva yehova srusti kartha","goppa deeva yehova srustikartha","goppadheva yehova srustikartha"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"గొప్ప దేవుడవని శక్తి సంపన్నుడని",lyrics:`గొప్ప దేవుడవని శక్తి సంపన్నుడని
గళమెత్తి నిన్ను నేను గానమాడెదన్
రాజుల రాజువని రక్షణ దుర్గమని
నీ కీర్తిని నేను కొనియాడెదన్

హల్లెలూయా నా యేసునాథా
హల్లెలూయా నా ప్రాణనాథా (2) ||గొప్ప||

1. అద్భుత క్రియలు చేయువాడని
ఆశ్చర్య కార్యాలు చేయగలడని (2)
అద్వితీయుడవని ఆదిసంభూతుడని
ఆరాధించెద నిత్యం నిన్ను (2) ||హల్లెలూయా||

2. సాగరాన్ని రెండుగా చేసినాడని
సాతాను శక్తులను ముంచినాడని (2)
సర్వోన్నతుడవని సర్వ సంపన్నుడని
సాక్ష్య గీతం నే పాడెదన్ (2) ||హల్లెలూయా||`,keywords:["goppa dhevudavani","goppa devudavani","gopa devudavani","gopa dhevudavani","gopha dhevudavani","goppa devudavane","goppa dhevudavaney","goppadhevudavani","goppadevudavani","goppadhevudavane"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"గొప్ప దేవుడు మనకున్నడు",lyrics:`గొప్ప దేవుడు మనకున్నడు (4)

గొప్ప వాక్యం మనకున్నది (4)

యేసు నామము గొప్ప నామము (4)

యేసు రక్తము శుద్ధిచేయును (4)

చప్పట్లు కొట్టి స్తుతించెదము (4)

హల్లెలూయ హోసన్న (4)`,keywords:["goppa dhevudu manaku unnadu","goppa dhevudu manakunnadu","gopa dhevudu manakunnadu","goppa devudu manakunadu","gopa devudu manaku","goppa deevudu manakunnadunadu"],video:"",artist:"",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"గొప్పవాడు – క్రీస్తు యేసు",lyrics:`గొప్పవాడు – క్రీస్తు యేసు – పుట్టినాడు నీ కోసం
పాటలు పాడి – నాట్యము చేసి – ఆరాధింప రారండి (2)
ప్రేమామయుడు మహిమాన్వితుడు
ఉన్నవాడు అనువాడు (2)
మహిమ ఘనత నిత్యం యేసుకు
హ్యాపీ క్రిస్మస్ మెర్రి క్రిస్మస్ ||గొప్పవాడు||

1. ఆశ్చర్యకార్యాలు చేసేవాడు యేసు
నీ పాప జీవితం మార్చేవాడు యేసు (2)
నీ బాధలన్ని తీర్చేవాడు యేసు
సంతోష జీవితం ఇచ్ఛేవాడు యేసు (2) ||మహిమ||

2. నీ రోగాలను స్వస్థపరచునేసు
నీ శాపాలను తీసివేయునేసు (2)
నీ శోకాలను మాన్పివేయునేసు
పరలోక భాగ్యం నీకు ఇచ్చునేసు (2) ||మహిమ||`,keywords:["గొప్పవాడు క్రీస్తు యేసు","goppa vadu kreesthu yesu","goppa vadu kresthu yesu","gopa vadu krestu yesu","goppa vadu kristhu yesu","goppavadu kresthu yesu","goppavaadu kreesthu yesu","goppavadu kristhy yesu"],video:"",artist:"Bro Philip and Sis Sharon",genre:["Christmas","General"],timeSignature:"4/4"}],ఘ:[{id:l(),title:"ఘన పరచెదను",lyrics:`ఘన పరచెదన్ అత్యున్నతుని 
భూమి ఆకాశము సృజించిన దేవుని (2)

మహిమకు అర్హుడు ఘనతకు యోగ్యుడు
స్తుతియు ప్రభావము యేసుక్రీస్తుకే (2)

యేసు నాధా నీవే దైవం
యేసు నాధా నీవే ఆశ్రయము
యేసు నాధా నీవే శైలము
నా కోట నీవే బేవా (2)

1. స్తుతియింతును మహోన్నతుడా
స్తుతికి యోగ్యము కార్యములు (2) ||యేసు నాధా||

2. కీర్తింతును న యేసు నామం
పరిశుధమైన శ్రేష్ట నామం (2) ||యేసు నాధా||`,keywords:["ganaparachedhanu","ghanaparachedhanu","gana parachedhanu","ghana parachedhanu","gana parachedanu","ghana parachedanu","gana parchedhanu","gana parachidhanu","ghana parichedhanu","gana parachidanu"],video:"",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"ఘనమైనవి నీ కార్యములు నా యెడల",lyrics:`ఘనమైనవి నీ కార్యములు నా యెడల
స్థిరమైనవి నీ ఆలోచనలు నా యేసయ్యా (2)
కృపలను పొందుచు కృతజ్ఞత కలిగి
స్తుతులర్పించెదను అన్నివేళలా (2)
అనుదినము నీ అనుగ్రహమే
ఆయుష్కాలము నీ వరమే (2)  ||ఘనమైనవి||

1. యే తెగులు సమీపించనీయక – యే కీడైన దరిచేరనీయక
ఆపదలన్ని తొలగే వరకు – ఆత్మలో నెమ్మది కలిగే వరకు (2)
నా భారము మోసి – బాసటగా నిలిచి – ఆదరించితివి
ఈ స్తుతి మహిమలు నీకే – చెల్లించెదను – జీవితాంతము   ||ఘనమైనవి||

2. నాకు ఎత్తైన కోటవు నీవే – నన్ను కాపాడు కేడెము నీవే
ఆశ్రయమైన బండవు నీవే – శాశ్వత కృపకాధారము నీవే (2)
నా ప్రతిక్షణమును నీవు – దీవెనగా మార్చి – నడిపించుచున్నావు
ఈ స్తుతి మహిమలు నీకే – చెల్లించెదను – జీవితాంతము   ||ఘనమైనవి||

3. నీ కృప తప్ప వేరొకటి లేదయా – నీ మనసులో నేనుంటే చాలయా
బహు కాలముగా నేనున్న స్థితిలో – నీ కృప నా యెడ చాలునంటివే (2)
నీ అరచేతిలో నను – చెక్కుకుంటివి – నాకేమి కొదువ
ఈ స్తుతి మహిమలు నీకే చెల్లించెదను జీవితాంతము   ||ఘనమైనవి||`,keywords:["ghanamainavi nee karyamulu","ganamainavi ni karyamulu","ganamainave ni karyamulu","ganamainavi nee kaaryamulu","hosanna ministries"],video:"",artist:"Hosanna Ministries",genre:["General"],timeSignature:"4/4"}],చ:[{id:l(),title:"చలి రాతిరి ఎదురు చూసే",lyrics:`చలి రాతిరి ఎదురు చూసే
తూరుపేమో చుక్క చూపే
గొల్లలేమో పరుగునొచ్చే
దూతలేమో పొగడ వచ్చే

పుట్టాడు పుట్టాడురో రారాజు - మెస్సయ్య 
పుట్టాడురో మనకోసం

1.  పశులపాకలో పరమాత్ముడు - సల్లని సూపులోడు సక్కనోడు
ఆకాశమంత మనసున్నోడు - నీవెట్టివాడవైన నెట్టివేయడు
సంబరాలు సంబరాలురో - మన బ్రతుకుల్లో సంబరాలురో

2. చింతలెన్ని ఉన్న చెంతచేరి చేరదీయు వాడు ప్రేమ గల్ల వాడు
ఎవరు మరచిన నిన్ను మరువనన్న మన దేవుడు గొప్ప గొప్ప వాడు
సంబరాలు సంబరాలురో - మన బ్రతుకుల్లో సంబరాలు`,keywords:["chali raathiri yedhuru chuse","chali raathri edhuru chuse","chali rathri edhuru chuse","chali rathri yedhuru chuse","christmas"],video:"",artist:"Joshua Shaik and K.Y. Ratnam",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"చాటించుడి మనుష్యజాతి కేసు నామము",lyrics:`1. చాటించుడి మనుష్యజాతి కేసు నామము
చాటించుడి యవశ్యమేసు – ప్రేమసారము
జనాదులు విశేష రక్షణ సునాదము – విను పర్యంతము
చాటుదాము చాటుదాము – చాటుదాము చాటుదాము
చాటుదాము చాటుదాము శ్రీయేసు నామము

2. కన్నీళ్ళతో విత్తెడు వార లానందంబుతో
నెన్నడు గోయుడు రనెడి వాగ్ధత్తంబుతో
మన్నన గోరు భక్తులారా నిండు మైత్రితో మానవ ప్రేమతో
చాటుదాము చాటుదాము – చాటుదాము చాటుదాము
చాటుదాము చాటుదాము – చక్కని మార్గము

3. సమీపమందు నుండునేమో చావు కాలము
సదా నశించిపోవువారికీ సుభాగ్యము
విధంబు జూపగోరి యాశతోడ నిత్యము విన్పించు చుందము
చాటుదాము చాటుదాము – చాటుదాము చాటుదాము
చాటుదాము చాటుదాము – సత్య సువార్తను`,keywords:["chatinchudi manushya jaathi","chatinchudi manusha jathi","chatinchude manushya jaathi","chaatinchudi manushya jaathi","andhra christisn hymns","6/8"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"6/8"},{id:l(),title:"చాలయ్యా చాలయ్యా నీ కృప చాలయ్యా",lyrics:`చాలయ్యా చాలయ్యా నీ కృప చాలయ్యా 
మేలయ్యా మేలయ్యా నా కదియే మేలయ్యా 
నీ కృపయే చాలయ్యా నాకదియే మేలయ్యా
నీ దయనే చూపయ్య నాకదియే ఘనతయ్యా

1. ప్రార్థించు వారికి కృప చూపుటకు ఐశ్వర్యవంతుడవు నీవే యేసయ్యా 
దుఃఖించువారికి ఉల్లాస వస్త్రమును 
దయచేయు దేవుడవు నీవే యేసయ్యా 
ప్రేమించి మన్నించి రక్షించువాడవు
కరుణించి కృపచూపి కాపాడువాడవు
నీ కృపయే చాలయ్యా....

2. దీనాత్ములకు దయచూపుటకు 
కరునసంపన్నుడవు నీవే యేసయ్యా 
నిత్యమైన కృపతో వాత్సల్యము చూపి 
సమకూర్చు వాడవు నీవే యేసయ్యా 
ఓదార్చి బలపరచి నడిపించువాడవు
దీవించి ఘనపరచి హెచ్చించువాడవు
నీ కృపయే చాలయ్యా. ...`,keywords:["chalayya chalayya ni krupa chalayya","chalayya chalayya ne krupa chalayya"],video:"",artist:"Amara Kumari, Ratnam & Lillian Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"చింత లేదిక యేసు పుట్టెను",lyrics:`చింత లేదిక యేసు పుట్టెను - వింతగను బెత్లెహేమందున
చెంతజేరను రండి సర్వజనంగమా - సంతస మొందుమా ||చింత||

1. దూత తెల్పెను గొల్లలకు శుభవార్త నా దివసంబు వింతగా
ఖ్యాతి మీరగ వారు యేసుని గాంచిరి - స్తుతు లొనరించిరి  ||చింత||

2. చుక్కగనుగొని జ్ఞానులెంతో మక్కువతో నా ప్రభుని గనుగొని
చక్కగా బెత్లెహెము పురమున జొచ్చిరి - కానుక లిచ్చిరి  ||చింత||

3. కన్య గర్భమునందు బుట్టెను - కరుణ గల రక్షకుడు క్రీస్తుడు
ధన్యులగుటకు రండి వేగమే దీనులై - సర్వమాన్యులై  ||చింత||

4. పాప మెల్లను పరిహరింపను - పరమ రక్షకుడవతరించెను
దాపు జేరిన వారి కీడు గడు భాగ్యము - మోక్షభాగ్యము   ||చింత||`,keywords:["chintha ledhika yesu puttenu","chinta ledika","chintha ledheka","andhra christian hymn","Christmas","7/8"],video:"",artist:"N. D. Abel",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"7/8"},{id:l(),title:"చిరకాల స్నేహితుడా",lyrics:`చిరకాల స్నేహితుడా
నా హృదయాన సన్నిహితుడా (2)
నా తోడు నీవయ్యా – నీ స్నేహం చాలయ్యా
నా నీడ నీవయ్యా – ప్రియ ప్రభువా యేసయ్యా

చిరకాల స్నేహం – ఇది నా యేసు స్నేహం (2)

1. బంధువులు వెలివేసినా
వెలివేయని స్నేహం
లోకాన లేనట్టి ఓ దివ్య స్నేహం
నా యేసు నీ స్నేహం (2)||చిరకాల స్నేహం||

2. కష్టాలలో కన్నీళ్లలో
నను మోయు నీ స్నేహం
నను ధైర్యపరచి ఆదరణ కలిగించు
నా యేసు నీ స్నేహం (2) ||చిరకాల స్నేహం||

3. నిజమైనది విడువనిది
ప్రేమించు నీ స్నేహం
కలువరిలో చూపిన ఆ సిలువ స్నేహం
నా యేసు నీ స్నేహం (2) ||చిరకాల స్నేహం||`,keywords:["chirakaala snehithuda","chirakaala snehithudaa","chirakala snehithuda","chirakala","chirakaala","chirakalaa","chirakala snehituda"],video:"",artist:"Lilian Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"చిరకాల స్నేహం - నీప్రేమ చరితం",lyrics:`చిరకాల స్నేహం - నీప్రేమ చరితం - చిగురించే నాకొసమే  (2)

నీపై నా ధ్యానం - నాకై నీ త్యాగం - వింతైన సందేశమే
చిరకాల స్నేహం - నీప్రేమ చరితం - చిగురించే నాకొసమే (2)

1. కలలుకన్న ప్రేమలన్ని నిలిచిపోయే మౌనమై  (2)
నేను నీకు భారమైన దూరమైన వేళలో
నీవే నాకు చేరువై చేరదీసినావయా
ఎంత ప్రేమ యేసయ్యా             ||చిరకాల||

2. గాలిమేడ నీడ చెదరి కృంగిపోయే నామది  (2)
సంధ్యవేల వెలుగు మారుగై ఒంటరైన వేళలో
దరికిచేరి దారి చూపి ధైర్యపరచినావయా
తోడు నీవే యేసయ్యా              || చిరకాలం||

3. మధురమైన ప్రేమలోన విలువకలిగె‌ సిలువకు  (2)
శిలగనేను నిన్ను చేర నీదురూపుకలిగెను
శ్రేష్ఠమైన స్వాస్థ్యమoదు నన్ను నిలిపినావయా
నిలిపినావు యేసయ్యా               ||చిరకాలం||`,keywords:["chirakaala sneham ni prema charitham","cherakala sneham","chirakala sneham","chirakaala sneeham nee prema charitham"],video:"",artist:"Pranam Kamalkhar & Priya Hemesh",genre:["General"],timeSignature:"3/4"},{id:l(),title:"చీకటిలో కాంతివి వేదనలో శాంతివి",lyrics:`1. చీకటిలో కాంతివి వేదనలో శాంతివి  (2)
స్థితిగతులంటిని మార్చువాడా
జీవితాలన్నిటిని కట్టువాడా (2)

యేసు - నీ సన్నిధిలో సాధ్యం 
సమస్తము - నీ సన్నిధిలో సాధ్యం (2)

2. సమస్తము సాధ్యం నీ యందే నా విశ్వాసం (2)
  
స్తితిగతులంటిని మార్చువాడా
జీవితాలన్నిటిని కట్టువాడా  (2)

యేసు - నీ సన్నిధిలో సాధ్యం 
సమస్తము - నీ సన్నిధిలో సాధ్యం (2)

Bridge: 
అతిక్రమమంతా తుడచువాడా
ఎల్లప్పుడూ కరుణించువాడా 
మంచితనము కనపరుచువాడా 
ఎల్లప్పుడూ దీవించువాడా (2)

యేసు - నీ సన్నిధిలో సాధ్యం 
సమస్తము - నీ సన్నిధిలో సాధ్యం  (2)

సమస్తము సాధ్యం యేసయ్య
నీలో సమస్తము సాధ్యం యేసయ్య (2)`,keywords:["cheekati lo kaanthivi","chikatilo kaanthivi","cheekati lo kaanthivi","chikati lo kanthi vi","chikatilo kantivi","chikatilo kantive","chikatilo kaantivi","chikatelo kaantivi","chikatelo kantivi","saadhyam","sadyam","sadhyam","cheekatilo kanthivi","chikatilo kaanthevi","worship","john erry","johnerry"],video:"https://www.youtube.com/embed/DBNFNTNO33M?start=1407",artist:"John Erry",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"చీకటిలో నుండి వెలుగునకు",lyrics:`1. చీకటిలో నుండి వెలుగునకు
నన్ను నడిపిన దేవా (2)

నా జీవితానిని వెలిగించిన
నా బ్రతుకును తేటపరిచిన (2)

నన్ను నీవు రక్షించితివయ్య
నీ కృప చేత నే బ్రతికితినయ్య
నన్ను నీవు కాపాడితివయ్య
నీ దయాతో నన్ను దీవించితివయ్య

యేసయ్యా నా యేసయ్యా 
నీవే నా బలము యేసయ్యా 
యేసయ్యా నా యేసయ్యా 
నీవే నా సర్వము యేసయ్యా 

నిను పోలి నేను జీవింతునయ్య
నీ ఆత్మ దయాచేయుమా
నిను పోలి నేను నడతునయ్య
నీ కాపుదల నియ్యుమా

2. కనికరమే లేని ఈ లోకములో 
కన్నీటితో నేనుంటినయ్య (2)

నీ ప్రేమతో నను ఆదరించిన 
నా హృదయము తృప్తి పరిచిన (2)

నన్ను నీవు రక్షించింతివయ్య
నీ కృప చేత నే బ్రతికితినయ్య
నన్ను నీవు కాపాడితివయ్య
నీ దయాతో నన్ను దీవించితివయ్య
 
యేసయ్యా నా యేసయ్యా
నీవే నా బలము యేసయ్యా 
యేసయ్యా నా యేసయ్యా 
నీవే నా సర్వము యేసయ్యా 

నిను పోలి నేను జీవింతునయ్య 
నీ ఆత్మ దయాచేయుమా 
నిను పోలి నేను నడతునయ్య 
నీ కాపుదల నియ్యుమా`,keywords:["చీకటిలో నుండి వెలుగునకు","నిను పోలి నేను జీవింతునయ్య","enosh kumar","ninu pooli nenu","ninu poli nenu jeevinthunayya","ninu poli nenu jevinthunayya","chikati lokundi velugunaku","chikati loonundi velugunaku","cheekati lo nundi velugunaku"],video:"",artist:"Sis Annie Margaret, Sis Stella Gurrala , Ps Enosh kumar, Bro Enosh Jagan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"చూచుచున్నాము నీ వైపు",lyrics:`చూచుచున్నాము నీ వైపు
మా ప్రియ జనక – చూచుచున్నాము నీ వైపు
చూచుచు నీ ప్రేమ – సొంపు సువార్తను
జాచుచు గరములు – చక్కగా నీవైపు  ||చూచు||

1. మేమరులమై యుంటిమి
మార్గము వీడి – మేమందరము పోతిమి
ప్రేమచే నప్పుడు – ప్రియ తనయు నంపించి
క్షేమ మార్గము మాకు – బ్రేమను జూపితివి  ||చూచు||

2. నిను నమ్ము పాపులకు
వారెవరైనా – నీ శరము జొచ్చువారలకు
ఇనుడవు కేడెంబు – నీ జగతిలో నగుచు
గనుపరచుచుందువు – ఘనమైన నీ కృప  ||చూచు||

3. నీ భయము మాయెదలను
నిలుపుము నీదు – ప్రాభవ మొనరంగను
నీ భయముచే మేము – వైభవ మొందుచు
నే భయము లేకుండ – నీ భువిని గొన్నాళ్ళు   ||చూచు||

4. దయ జూచి మము నెప్పుడు
మంచివి యన్ని – దయచేయు మెల్లప్పుడు
దయచేయరానివి – దయచేయుమని కోర
దయ జూపి మన్నించు – దయగల మా తండ్రి   ||చూచు||`,keywords:["chuchu chunnamu ni vaipu","chuchuchunnamu ni vaipu","chu chu chunnamu nivaipu","chuchu chunamu vi vaipu","andhra christian hymns","7/8"],video:"",artist:"Pulipaaka Jagannaathamu",genre:["Andhra Christian Hymn"],timeSignature:"7/8 or 4/4"},{id:l(),title:"చూడుము ఈ క్షణమే",lyrics:`చూడుము ఈ క్షణమే కల్వరిని
ప్రేమా ప్రభువు నీకై నిలుచుండెను
గొప్ప రక్షణనివ్వ శ్రీ యేసుడు
సిలువలో వ్రేలాడు చున్నాడుగా

1. మానవు లెంతో చెడిపోయిరి
మరణించెదమని తలపోయక
ఎరుగరు మరణము నిక్కమని
నరకమున్నదని వారెరుగరు || చూడుము ||

2. ఇహమందు నీకు కలవన్నియు
చనిపోవు సమయాన వెంటరావు
చనిపోయినను నీవు లేచెదవు
తీర్పున్నదని ఎరుగు ఒక దినమున || చూడుము ||

3. మనలను ధనవంతులుగా చేయను
దరిద్రుడాయెను మన ప్రభువు
రక్తము కార్చెను పాపులకై
అంగీకరించుము శ్రీ యేసుని || చూడుము ||`,keywords:["chudumu ee kshanamu","chudumu ye kshanamane","chudumu ee kshaname","chudumu eee kshanamee","chudumu ee kshanamee"],video:"",artist:"",genre:["General","Lent"],timeSignature:"3/4"},{id:l(),title:"చెమ్మగిల్లు కళ్ళలోన కన్నీళ్లెంత కాలం",lyrics:`చెమ్మగిల్లు కళ్ళలోన కన్నీళ్లెంత కాలం
కష్టాల బాటలోనె సాగదు పయనం
విడుదల సమీపించెను నీకు వెలుగు ఉదయించును

1. నీవు మోసిన నిందకు ప్రతిగా - పూదండ ప్రభువు యిచ్చునులె
నీవు పొందిన వేదనలన్ని - త్వరలో తీరిపోవునులె
నీ స్థితి చూసి నవ్వినవారే - సిగ్గుపడే దినమొచ్చేనులే
విడుదల సమీపించెను నీకు వెలుగు ఉదయించును || చెమ్మగిల్లు||

2. అనుభవించిన లేమి బాధలు - ఇకపై నీకు వుండవులే
అక్కరలోన ఉన్నవారికి - నీవే మేలు చేసే వులే
మొదట నీ స్థితి కోంచమె ఉన్న - తుదకు వృద్ధిని పొందునులే
విడుదల సమీపించెను నీకు వెలుగు ఉదయించును || చెమ్మగిల్లు ||`,keywords:["chammagillu","chammagillu kallaloona kannillentha kaalam","chamagilu","chammagilu","chamagillu","chamma gillu","chama gilu","chama gelu","chamma gellu","chama geelu","chemma gillu kallalona","chemma gellu kallalona","chemma gilu","chema gilu kalalona","chemma gelu kalalona","chemmagillu kallalona","chemma gillu kalla loona","chammagillu kalla lona"],video:"",artist:"Bro. Shalem Raju",genre:["General"],timeSignature:"4/4"},{id:l(),title:"చేయి పట్టుకో నా చేయి పట్టుకో",lyrics:`చేయి పట్టుకో నా చేయి పట్టుకో
జారిపోకుండా నే పడిపోకుండా
యేసు నా చేయి పట్టుకో (2)    ||చేయి||

1. కృంగిన వేళ ఓదార్పు నీవేగా
నను ధైర్యపరచు నా తోడు నీవేగా (2)
మరువగలనా నీ మధుర ప్రేమను
యేసు నా జీవితాంతము (2)
యేసు నా జీవితాంతము      ||చేయి||

2. శోధన బాధలు ఎన్నెన్నో కలిగినా
విశ్వాస నావలో కలకలమే రేగిననూ (2)
విడువగలనా ఒక నిమిషమైననూ
యేసు నా జీవితాంతము (2)
యేసు నా జీవితాంతము      ||చేయి||`,keywords:["cheyi pattuko","cheyyi pattuko","chayi patuko","cheyi patuko","cheyyi pattuko"],video:"",artist:"John Wesly",genre:["General"],timeSignature:"4/4"}],జ:[{id:l(),title:"జగములనేలే శ్రీ యేసా మా రక్షణ ప్రాకారమా",lyrics:`జగములనేలే శ్రీ యేసా
మా రక్షణ ప్రాకారమా
మా అనుదిన జీవాహారమా (2) ||జగములనేలే||

1. వేల్పులలోన నీవంటి దేవుడు
ఎవరున్నారు ప్రభు (2)
పూజ్యులలోన పూజార్హుడవు (2)
నీవే మా ప్రభువా నీవే మా ప్రభువా (2)
అడిగిన ఇచ్ఛే దాతవు నీవే దేవా
శరణము వేడిన అభయము నొసగే దేవా (2)
అవధులు లేని నీ ప్రేమను (2)
వర్ణింప చాలనయ్యా వర్ణింప చాలనయ్యా  ||జగములనేలే||

2. జీవనమంతయు నీకర్పించి
పానార్పణముగా నే పోయబడుదును (2)
శ్రేష్టఫలములను ఫలియించెదను (2)
నీదు సన్నిధిలో నీదు సన్నిధిలో (2)
విరిగిన మనస్సే నీకతి ప్రియమో దేవా
నలిగిన హృదయం నీ ఆలయంలో దేవా (2)
అన్ని వేళలలో మాతో ఉండి (2)
మమ్ము నడిపించు ప్రభో మమ్ము నడిపించు ప్రభో  ||జగములనేలే||`,keywords:["jagamula neele","jagamula nele","jagamula nale","gagamula nele","gagamula neeele","jagamula neyle","jagamola neele"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"జగమంతా సంబరమే - మొదలాయే ఈ రోజే",lyrics:`జగమంతా సంబరమే - మొదలాయే ఈ రోజే
జనియించే మా రాజు - లోక రక్షకుడే (2)
ఆకాశమంతా పట్టానోడు - పసి బాలుడిగా పుట్టినాడు(2)
నిన్ను నన్ను చేరగ వచ్చే యేసు నాధుడు

రండి రండి రండి సందడి చేద్దాం రండి
రండి రండి రండి పండుగ చేద్దాం రండి
రండి రండి రండి సందడి చేద్దాం రండి
రండి రండి రండి యేసయ్య పుట్టాడండి

1. తారనే  చూసామే - వెంబడి వచ్చామే
రాజూనే చుడంగా - త్వరపడి వచ్చామే (2)
చూపులకు చక్కనోడే సుందరుడే ఆ సామీ
బంగారు సాంబ్రాణి బోళమునిచ్చి వచ్చామే (2)
వొయ్ వొయ్ వొయ్ వొయ్ వొయ్ తందానానే
తంతునానేనా(4)
రక్షకుని జననం లోకమునకానందం(2)

2. దూతనే చూసామే - భయపడిపోయామే
మెసయ్య జన్మ వార్తలు మేము విన్నామే(2)
నశియించిపోయే మనలను రక్షింప వచ్చాడని
సంతోషగానము చేస్తూ బేత్లహేము చేరామే(2)
ఏయ్ ఏయ్ వొయ్ వొయ్ వొయ్ తందానానే

తంతునానేనా(4)  జగమంతా సంబరమే`,keywords:["jagamantha sambarame modhalaaye eeroje","jagamanta sambarame","randi randi sandadi","Randi randi sandhadi","jagamanthaa sambaramey","jagamanta sambarame","christmas"],video:"",artist:"Davidson Gajulavarthi",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"జన గణ మన అధినాయక జయహే",lyrics:`జన గణ మన అధినాయక జయహే..
భారత భాగ్య విధాతా..
పంజాబ, సింధు, గుజరాత, మరాఠా,
ద్రావిడ, ఉత్కళ, వంగ..
వింధ్య, హిమాచల, యమునా, గంగ,
ఉచ్చల జలధితరంగ..

తవ శుభనామే జాగే..
తవ శుభ ఆశిష మాగే..
గాహే తవ జయ గాథా..
జనగణ మంగళదాయక జయహే భారత భాగ్యవిధాతా..
జయహే! జయహే! జయహే… జయ జయ జయ జయహే…`,keywords:["janaganamana","jana gana mana","jana ganamana","janagana mana"],video:"",artist:"Rabindranath Tagore",genre:["Andhra Christian Hymn","India"],timeSignature:"4/4"},{id:l(),title:"జన్మించినాడు శ్రీ యేసు రాజు",lyrics:`జన్మించినాడు శ్రీ యేసు రాజు బేత్లెహేమందున
సర్వోనతుడు వెలసినాడు రక్షణిచ్చుటకు

Pre Chorus: 
అక్షయ మార్గము నడిపించే మానవుడై 
నిజమే నిజమే దీన వరుడై ఉదయించే

Chorus:
రేడు నేడు జనియించినాడు
ఆనందం అద్భుతం
రేడు నేడు జనియించినాడు
సంతోషం సమాధానం

1. లేఖనం నెరవేర్పుకై 
ఏతెంచను ప్రభువు
దూత తెలిపెను ప్రభు రాకను 
బాసురంబగు క్రీస్తు 
రాజితంబగు తేజంబహుతో ఉద్భవించినాడు
అంబరమున ఆవీర్భవించే నీతి సూర్యుడై

2. రాజువైన మెస్సయ్యను 
పూజింపను రండి
అద్వితియుండగు కుమారుని 
చూద్దము రండి
మహిమ ఘనత ప్రభావముతో
మహిలో వెలసెను నేడు 
భువిపై దిగి వచ్చెను మనకొరకు పాపహారుడై`,keywords:["christmas","janminchinaadu sri yesu raaju","janminchinadu sri yesu raju","janminchinadu sre yesu raju"],video:"",artist:"Prabhu Pammi, Rev. Dr. Pammi Daniel",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"జయ జయ యేసు జయ యేసు",lyrics:`జయ జయ యేసు జయ యేసు 
జయ జయ క్రీస్తు జయ క్రీస్తు 
జయ జయ రాజా జయ రాజా 
జయ జయ స్తోత్రం జయ స్తోత్రం 

1) మరణము గెల్చిన జయ యేసు 
మరణము ఓడెను జయ యేసు 
పరమ బలమొసగు జయ యేసు 
శరణము నీవే జయ యేసు           ||జయ||

2) సమాధి గెల్చిన జయ యేసు 
సమాధి ఓడెను జయ యేసు 
సమరము గెలిచిన జయ యేసు 
అమర మూర్తివి జయ యేసు        ||జయ|| 

3) బండను గెలిచిన జయ యేసు 
బండయు ఓడెను జయ యేసు   
బండయు తీయుము జయ యేసు 
అండకు తీర్చుము జయ యేసు     ||జయ||

4) ముద్రను గెల్చిన జయ యేసు 
ముద్రయు ఓడెను జయ యేసు  
ముద్రను దీయుము జయ యేసు 
ముద్రించుము నను జయ యేసు  ||జయ||

5) కావలి గెల్చిన జయ యేసు 
సాతాను  ఓడెను జయ యేసు 
పాతవి గతించె జయ యేసు
దాతవి నీవే జయ యేసు             ||జయ||

6) సాతాను గెల్చిన జయ యేసు 
సాతాను ఓడెను జయ యేసు 
సేవలో బలము జయ యేసు 
జీవము నీవే జయ యేసు           ||జయ||`,keywords:["jaya jaya yesu jaya yesu","jaiya jaiya yesu","jaya jaya yeesu jaya yeesu","jayajaya yeesu"],video:"",artist:"",genre:["General","Easter"],timeSignature:"4/4"},{id:l(),title:"జయప్రభు యేసునె వెంబడించుచు",lyrics:`జయప్రభు యేసునె వెంబడించుచు జయముగ నడచెదము యేసుతో
జయముగ వెడలెదము ప్రియుడగు యేసుని ప్రేమను చవిగొని పయనము
జేసెద మా ప్రభు వెంబడి ||జయప్రభు||

1. ఆదరణయు అధికబలమును ఆత్మఖడ్గమును అవనిలో అందరి రక్షయును
ఆదర్శంబౌ ఆయన వాక్యమే అనిశము మనకిల మార్గము చూపగ
||జయప్రభు||

2. ధర విరోధులు మమ్ము జుట్టగ దరి జేరెద మేసున్ ప్రభుని దరిజేరెద
మేము ధాత్రి దురాశల డంబములన్నిటి మైత్రిని వీడి నడచెద మేసుతో
||జయప్రభు||

3. మా ప్రభు జూముము నీదు మార్గపు మాదిరి జాడలను నీ దగు
మాదిరి జాడలను మా పాదములను తొట్రిలకుండగ మా కిడు బలమును
యీ కృపాదినమున ||జయ ప్రభు||

4. మా కొరకై నీవు నడచిన మార్గము జూడగను మేము మార్గము జూడగను
మా రక్షక నీ అడుగుజాడలు మరువక విడువక నడువగ కృపనిడు
||జయప్రభు||

5. ఇహపరముల నినుగాక ప్రేమతో ఎవరిని గొలిచెదము? ఎవరిని ప్రేమింప
వశమె? విహరించెదము యేసుని వెంబడి మహిమ రాజ్యమున యేసుని
గొలువగ ||జయప్రభు||`,keywords:["jaya prabhu yesune venbadinchuchu","jaya prabhu yeesuni","jaya prabhu yeesune","jayaprabhu yeesuni","jayaprabhu yesuni venbadinchuchu","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"జయము నీకే ఇశ్రాయేలు కాపరి",lyrics:`జయము నీకే ఇశ్రాయేలు కాపరి
కునుకని నిద్రించని నీవే మా ఊపిరి (2)
జయము నీకే జయము నీకే
జయము జయము జయము నీకే...

1. గర్జించు సింగమై గొల్యాతు ఎదురవగా
చిన్న వడిసెల రాయితో దావీదును బలపరచి (2)
నీ శత్రువులను కూల్చితివే
నీ ప్రజలకు జయమిచ్చితివే (2)
విజేయుడా జయము నీకే
అజేయుడా జయము నీకే  ||జయము||

2.ఎత్తైన ఎరికో గోడలు ముందుండగా
ఆర్భాటముతో కేకలు వేయగా యెహోషువాను బలపరచి (2)
ఎరికో గోడలు కూల్చితివే
నీ ప్రజలకు జయమిచ్చితివే
విజేయుడా జయము నీకే 
అజేయుడా జయము నీకే  ||జయము||`,keywords:["jayamu neeke","jayamu nike","jayamunike","jayamuneeke","jayamuneke","jayamu neke istraayelu kaapari","jayamu nike israyelu kapari","jayamu nikey"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:`జయం జయం జయం జయం
యేసులో నాకు జయం జయం`,lyrics:`జయం జయం జయం జయం
యేసులో నాకు జయం జయం (2)

1. విశ్వాసముతో నేను సాగివెళ్ళెదా
ఆత్మ పరిపూర్ణుడై ముందుకెళ్ళెదా (2)
నీ వాక్యమే నా హృదయములో
నా నోటిలో నుండినా           ||జయం జయం||

2. గొప్ప కొండలు కదిలిపోవును
సరిహద్దులు తొలగిపోవును (2)
అసాధ్యమైనది సాధించెదా
విశ్వాసముతో నేను             ||జయం జయం||`,keywords:["jayam jayam","jayamjayam","jaim jaim","jaimjaim","jaym jaym"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"జీవదాత స్తుతిపాత్రుడా",lyrics:`జీవదాత స్తుతిపాత్రుడా 
నన్నేలు దేవా నజరేయుడా  
ప్రేమ చూపి పిలిచినావు ప్రాణ నాధా పరమాత్ముడా  
నీవు లేక ఇలలో నేను బ్రతుకలేను నిజ దేవుడా 

జీవదాత స్తుతిపాత్రుడా 
నన్నేలు దేవా నజరేయుడా  
ప్రేమ చూపి పిలిచినావు ప్రాణ నాధా పరమాత్ముడా
అంధకార ఈ జగాన నీవే చాలు నా యేసయ్య 

1. లోక ప్రేమలు - నను వీడినా 
విరిగి నలిగి వేసారినా  
ఎదురుగ - నిలచిన - ప్రేమే నీవు - ఎడబాయవు 

గాలి వానలు చెలరేగినా 
కృంగి నేను పడిపోయినా  
అలలలో - మరువని - ఆశే నీవు - విడనాడవు  

యేసయ్యా - నీ స్నేహమే 
యేసయ్యా - నా భాగ్యమే 
చల్లగా - చూసావుగా 
ధరలో - సుఖమై - వరమై నా తల్లిగా 
చెరలో - బలమై - నిలిచే నా తండ్రిగా 

2. నీదు మార్గము - పరిపూర్ణము 
ఇలలో నాకు - జయగీతము 
అనిశము - అభయము - నీవే దేవా - పరమాత్ముడా 

నీదు నామము - అతి శ్రేష్టము 
పలికె నాలో - స్తుతి గీతము 
మహిమయు - ఘనతయు - నీకే దేవా - పరిశుద్ధుడా 

యేసయ్యా - నీ వాక్యమే 
యేసయ్యా - ఆధారమే 
ప్రేమతో - కోరానుగా 
కృపతో - చెలిమై - మలిచే నా బంధమా
మదిలో - కొలువై - నిలిచే ఆనందమా`,keywords:["jeeva dhaata","jeeva dhaatha","jeva data","jeva dhaatha","jiva dhatha","jiva data","jiva datha"],video:"",artist:"Joshua Shaik, Pranam Kamlakhar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"జీవనదిని నా హృదయములో",lyrics:`జీవనదిని నా హృదయములో
ప్రవహింప చేయుమయ్యా (2)

1. శరీర క్రియలన్నియు
నాలో నశియింప చేయుమయ్యా (2) ||జీవ నదిని||

2. బలహీన సమయములో
నీ బలము ప్రసాదించుము (2) ||జీవ నదిని||

3. ఎండిన ఎముకలన్నియు
తిరిగి జీవింప చేయుమయ్యా (2) ||జీవ నదిని||

4. ఆత్మీయ వరములతో
నన్ను అభిషేకం చేయుమయ్యా (2) ||జీవ నదిని||`,keywords:["jeevanadhine","jevanadhini","jevanadini","jeevanadhini","jevanadhene","jevanadheni","jevanadhine","jivanadhini","jivanadhine"],video:"",artist:"",genre:["Andhra Christian Hymn","General"],timeSignature:"4/4"},{id:l(),title:"జీవన తొలి సంధ్య నీతోనే ఆరంభం",lyrics:`జీవన తొలి సంధ్య నీతోనే ఆరంభం
నా జీవన మలి సంధ్య నీతోనే అంతము (2)
నా జీవన యాత్రకు మలి సంధ్య ఆసన్నమౌతుంది (2)
నను సిద్ధపరచు యేసు నాథా నీతోనుండుటకు (2)         ||జీవన||

1. నా జీవన యాత్రలో ఎన్నో అవరోధాలు
నా జీవన గమనంలో ఎన్నో అవమానాలు (2)
నిరీక్షణ లేని ఇతరుల పోలి దుఃఖించను నేను
నా భారము నీపై మోపి ముందుకు సాగుచున్నాను (2)
దేవా నీవే నా ఆశ్రయ దుర్గము (2)         ||జీవన||

2. నా పూర్వికులందరు ఎప్పుడో గతించారు
ఏదో ఒక రోజున నా యాత్ర ముగించెదను (2)
నా శేష జీవితమంతయు నీకే అర్పించితినయ్యా
నా వేష భాషయులన్నియు నీకే సమర్పింతును దేవా (2)
దేవా నను నీ సాక్షిగ నిల్పుమా (2)         ||జీవన||`,keywords:["జీవన తొలి సంధ్య నీతోనే ఆరంభం","jeevana tholi sandhya","jivana tholi sandhya","jevana toli sandya","jeevana toli sandhya","jivana tholi sandya"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"జీవమై ఏతెంచిన యేసు దైవమా",lyrics:`జీవమై ఏతెంచిన యేసు దైవమా
దేహమే ధరించిన ఆత్మ రూపమా  
స్నేహమే కోరిన తండ్రి ప్రేమ సాక్షమా

1. దూతావళి స్తోత్రాలతో కీర్తించబడువాడవు  (2)
లోక కల్యాణమే నీ జన్మ పరమార్థము  (2)
నీవే మా ప్రాణము

2. ఆద్యంతునే సంకల్పమే నెరవేరే సంతోషము  (2)
శాంతి సందేశమే లోకమంతా వినిపించెను  (2)
నీవే మా భాగ్యము`,keywords:["jeevamai yethenchina","jeevamai yithenchina","jivamai eethenchena","jeevamay athenchina","jevamai a thenchina","jevamai aa thenchina","jeevamai ye thenchina","jivamai ye thenchina","jevamai ye thanchinaa","jeevami","jivamayi ethenchina","kamalakar","stevenson","christmas","pranam kamalakar"],video:"https://www.youtube.com/embed/Ro_VHJC0aSg",artist:"Dr. A R Stevenson, Pranam Kamlakhar",genre:["Christmas"],timeSignature:"3/4"},{id:l(),title:"జీవాహారము రమ్ము",lyrics:`జీవాహారము రమ్ము చిరజీవాన్నము నిచ్చి
జీవిత క్షుద దీర్చుము
జీవనపథములో చీకటి పడువేళ 
జీర్ణించు కొనిపోవు జీవితాశలఁ బెంచ  ||జీవా||

1. విందుగృహమునకేగి వీక్షింతు భ్రమతో నీ
వివిధసుభోజ్యంబులన్
విచ్ఛిన్నమైన నీ విమల దేహపు విందు
వికలంబౌ మనసుతో వినుతించి తినుచుందు ||జీవా||

2. రుధిర ధారలలోన ఋజువౌ నీ ప్రేమలు
రూపుమాయును పాపము
ఋతద్రాక్ష వల్లీ నీ రుధిరపానముచేత 
ఋణభారములు దీరి రుచి యించు నా బ్రతుకు ||జీవా||

3. భవదీయ స్మరణార్థం పతితుల శరణార్థం
ఫలియించు యీహోమము
ప్రభువా నాయాత్మలో ప్రతిబింబమై వెలసి
పానార్పణంబౌను ప్రతిరక్త బిందువు ||జీవా||

4. ఆత్మాంతఃపురములో ఆంతర్య గదిలోన 
ఆరాధించు నీ నామము
అలనాటి నీ రక్త నవనిబంధన నేడు 
అపురూపమై నాలో నవతరించును దేవా ||జీవా||`,keywords:["jeevaahaaram","andhra christian song","andhra christian songs","holy communion","communion","jevaharamu rammu","jivaharamu rammu","jivaharam rammu","jevaharam rammu","jeevaahaaramu rammu","jevaharamurammu","jeevaharamurammu","jevaahaaramu","jevaaharamu"],video:"https://www.youtube.com/embed/HMx9q28tcIA?si=yWrhWinTFZOxrZTh",artist:"Dr. A. B. Masilamani",genre:["Andhra Christian Hymn","Holy Communion"],timeSignature:"7/8"},{id:l(),title:"జీవితంలో నీలా ఉండాలని",lyrics:`జీవితంలో నీలా ఉండాలని యేసు నాలో ఎంతో ఆశున్నది 
తీరునా నాకోరిక చేరితి ప్రభు పాదాలచెంత (2)

1. పరిశుద్దతలో ప్రార్ధించుటలో ఉపవాసములో ఉపదేశములో (2)
నీలాగే చేయాలనీ నీతోనే నడవాలని (2)
నీలాగే చేసి నీతోనే నడచి నీ దరికి చేరాలని (2)

2. కూర్చుండుటలో నిలుచుండుటలో మాట్లాడుటలో ప్రేమించుటలో (2)
నీలాగే బ్రతకాలని నీ చిత్తం నెరవేర్చనీ (2)
నీలాగే బ్రతికి నీచిత్తం నెరచేర్చి నీ దరి చేరాలని (2)`,keywords:["jeevitham lo","jeevithamlo neela undalani","jevitham lo neela","jevitham lo nila","jeevitham lo nila","jeevitham lo neela undaalani","jivitham lo nila undalani","jiveetham lo nila","jeevitham lo neela","jeevetham lo nila","jivetham lo nila","aakumarthi daniel","akumarthi daniel"],video:"",artist:"Dr. Akumarthi Daniel",genre:["General"],timeSignature:"4/4"},{id:l(),title:"జీవితంలో నేర్చుకున్నాను ఒక పాఠం",lyrics:`జీవితంలో నేర్చుకున్నాను ఒక పాఠం
యేసుకు సాటి ఎవ్వరు లేరనే ఒక సత్యం (2)
సంతృప్తిని సమృద్ధిని అనుభవిస్తున్నా
ఆకాశమే సరిహద్దుగా సాగిపోతున్నా    ||జీవితంలో||

1. ఏర్పరచుకున్నాను ఒక లక్ష్యం
నిరతము యేసునే స్తుతియించాలని
కూడగట్టుకున్నాను శక్తన్తయు
నిరతము యేసునే చాటించాలని
ఆ యేసే నిత్య రాజ్యము
ఆ యేసే గొప్ప సత్యము (2)  ||జీవితంలో||

2. నిర్మించుకున్నాను నా జీవితం
సతతం యేసులో జీవించాలని
పయనిస్తు ఉన్నాను నా బ్రతుకులో
యేసయ్య చిత్తము జరిగించాలని
ఆ యేసే సత్య మార్గము
ఆ యేసే నిత్య జీవము (2)  ||జీవితంలో||`,keywords:["jeevitham lo","jeevitham lo neerchukunnanu","jeevithamlo neerchukunnanu","jeevitham lo nerchukunnanu","jivitham lo neerchukunnanu","jiveetham lo nerchukunnanu","jeevitham lo","jeevetham lo nerchukunanu","jivetham lo narchukunnanu","jeevitam lo nerchukunanu","jevitamlo nerchukunanu"],video:"",artist:"Sister Blessy Wesly",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"జీవితాంతము వరకు నీకే",lyrics:`జీవితాంతము వరకు నీకే – సేవ సల్పుదునంటిని
నీవు నాతో నుండి ధైర్యము – నిచ్చి నడుపుము రక్షకా   ||జీవితాంతము||

1. ఎన్ని యాటంకంబులున్నను – ఎన్ని భయములు కల్గిన
అన్ని పోవును నీవు నాకడ – నున్న నిజమిది రక్షకా   ||జీవితాంతము||

2. అన్ని వేళల నీవు చెంతనె – యున్న యను భవమీయవె
తిన్నగా నీ మార్గమందున – పూనినడచెద రక్షకా   ||జీవితాంతము||

3. నేత్రములు మిరుమిట్లు గొలిపెడి – చిత్రదృశ్యములున్నను
శత్రువగు సాతాను గెల్వను – చాలు నీ కృప రక్షకా   ||జీవితాంతము||

4. నాదు హృదయమునందు వెలుపట – నావరించిన శత్రులన్
చెదర గొట్టుము రూపుమాపుము – శ్రీఘ్రముగ నారక్షకా   ||జీవితాంతము||

5. మహిమలో నీవుండు చోటికి – మమ్ము జేర్చెదనంటివే
ఇహము దాటినదాక నిన్ను – వీడనంటిని రక్షకా   ||జీవితాంతము||

6. పాప మార్గము దరికి బోవక – పాత యాశల గోరక
ఎపుడు నిన్నే వెంబడింపగ – కృప నొసంగుము రక్షకా   ||జీవితాంతము||`,keywords:["jeevithaanthamu varaku neeke","jevithanthamu varaku neke","jevithanthamu varaku nike","jivithanthamu varaku neke","Andhra Christian Hymn","7/8"],video:"",artist:"P. D. Shubhaamani",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"జుంటె తేనె కన్నా",lyrics:`జుంటె తేనె కన్నా తీయనిది
వెండి పసిడి కన్నా మిన్న అది
పొంగి పొర్లుచున్న ప్రేమ నీది
యేసు నీ నామము

సూర్య కాంతి కన్నా ప్రకాశమైనది
పండు వెన్నెల కన్నా నిర్మలమైనది
మంచు కొండల కన్నా చల్లనిది
యేసు నీ నామము

యేసూ అసాధ్యుడవు నీవు
మరణాన్ని జయించిన వీరుడవు
సర్వాన్నీ శాసించే యోధుడవు
నీకు సాటి లేరెవరు

రక్షకా నీవేగా మా బలము
దేవా మా దాగు స్థలము నీవే
నీవే నిజమైన దేవుడవు
ప్రణమిల్లి మ్రొక్కెదము ||జుంటె||

2. ఆకాశము కన్నా విశాలమైనది
విశ్వమంతటిలో వ్యాపించియున్నది
ఊహలకందని ఉన్నతమైనది
యేసు నీ నామము

లోకమంతటికి రక్షణ మార్గము
జనులందరిని బ్రతికించు జీవము
సర్వ కాలములో నివసించు సత్యము
యేసు నీ నామము ||జుంటె||`,keywords:["junte thene kanna","junte tene kanna","juntethene kanna","juntethenekanna","juntetene kanna","zunte thene kanna","zuntethenekanna","juntey theney kanna","zuntey thene kanna"],video:"",artist:"Joel Kodali",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"జుంటె తేనె ధారలకన్న",lyrics:`జుంటె తేనె ధారలకన్న యేసు నామమే మధురం
యేసయ్యా సన్నిధినే మరువజాలను
జీవిత కాలమంతా ఆనదించెదా
యేసయ్యనే ఆరాధించెదా

1. యేసయ్య నామమే బహు పూజ్యనీయము
   నాపై దృష్టి నిలిపి సంతుష్టిగ నను ఉంచి
   నన్నెంతగానో దీవించి 
   జీవజలపు ఊటలతో ఉజ్జీవింపజేసెనే

2. యేసయ్య నామమే బలమైన ధుర్గము
   నాతోడై నిలచి క్షేమముగా నను దాచి
   నన్నెంతగానో కరుణించి 
   పవిత్ర లేఖనాలతో ఉత్తేజింపజేసెనే

3. యేసయ్య నామమే పరిమళ తైలము
   నాలో నివసించె సువాసనగా నను మార్చె
   నన్నెంతగానో ప్రేమించి 
   విజయోత్సవాలతో ఊరేగింపజేసెనే`,keywords:["junte thene dhaaralakanna","junte thene","junte tene daaralakanna","junte tene dharala","junte thene daralakanna","juntey thene darakalana","junte tene daralakana"],video:"",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"జ్యోతిగ మము జేయుమో దేవా",lyrics:`జ్యోతిగ మము జేయుమో దేవా యీ లోకమున నీ ఖ్యాతి నిలుపగ జేయుమో
దేవా జ్యోతిగ మము జేసి మాలో క్రీస్తు మార్గము బయలు పరచి నీతి
ప్రేమలతోడ హృదయము నింపి మమునడిపింపు మయ్యా ||జ్యోతిగ||

1. మా కుటుంబము లోన నీ వెలుగు ప్రసరించు నట్లుగ నాదు బ్రదుకును
శుద్ధి జేయుమయ్యా మా కుటుంబములోని వారలు మానకను నీ వెలుగు
జూపగ మమ్ము నీ మార్గంబునందున మనుప పరిశుద్ధాత్మ నిడుమా ||జ్యోతిగ||

2. సంఘమున నీ కీర్తి కనపడగ పరిశుద్ధ సహవాసంబులో నను వృద్ధి
జేయు మయా భంగపరచెడి కక్షలన్నిటి బాధపరచెడి శక్తులన్నిటి పార
దోలగ శక్తినిడి నీ భక్తి కాంతిని జూపి నాలో ||జ్యోతిగ||

3. నిన్ను దెలియని యాత్మ లెన్నెన్నో మా చుట్టునున్నవి నీ కొరకు
కనిపెట్టుచున్నవయా అన్నివేళల నీ సువార్తను అందరికి ప్రకటింప
మనసున నాశనిడి నీ వార్త వెలుగును అన్ని దిశలకు జాటునట్లుగ ||జ్యోతిగ||

4. సమయమును వరముల నొసంగితివి మా రక్షకా ధన సంపదను నీవే
యొసంగితివి విమల జీవితమందు వానిని విరివిగా నితరుల కొసంగి వీర
త్యాగార్పణములతో నీ వెలుగు ప్రసరింపంగజేయను ||జ్యోతిగ||`,keywords:["jyothiga mamu cheyimudheva","jothiga mamu cheyumudheva","jyothiga mamu jeyumu dheva","jothiga mamu jeyumu dheva","andhra christian hymn","7/8","4/4"],video:"",artist:"P. D. Shubhamani",genre:["Andhra Christian Hymn"],timeSignature:"7/8 or 4/4"},{id:l(),title:"జ్యోతిర్మయుడా - నా ప్రాణ ప్రియుడా",lyrics:`జ్యోతిర్మయుడా-  నా ప్రాణ ప్రియుడా - స్తుతి మహిమలు నీకే (2)
నా ఆత్మలో అనుక్షణం 
నా అతిశయమూ నీవే - నా ఆనందము నీవే - నా ఆరాధనా నీవే (2)

1. నా పరలోకపు తండ్రి - వ్యవసాయకుడా (2)
నీ తోటలోని ద్రాక్షావల్లితో - నను అంటుకట్టి స్థిరపరిచావా (2)

2. నా పరలోకపు తండ్రి - నా మంచి కుమ్మరీ (2)
నీకిష్టమైన పాత్రను చేయ - నను విసిరేయక సారెపై ఉంచావా (2)

3. నా పరలోకపు తండ్రి కుమార పరిశుద్ధాత్ముడా (2)
త్రియేక దేవా ఆదిసంభూతుడా - నిను నేనేమని ఆరాధించెద (2)`,keywords:["jyotheermayuda na prana priyuda","jyothirmayuda na prana priyuda","jyoothirmayuda na prana priyuda","jyoothirmayuda naa prana priyuda","jyotheermayuda na prana priyuda","jyoothermayuda na prana priyuda","jothermayuda","jooteermayuda","jotheermayuda","yesanna"],video:"",artist:"Pastor Yesanna",genre:["General","Worship"],timeSignature:"4/4"}],డ:[{id:l(),title:"డాగు నేది మాపును",lyrics:`1. డాగు నేది మాపును
వేగ యేసు రక్త ధారే
రోగి కేయౌషథము
బాగుగా నా రక్త ధారె

|| హా దివ్య రక్తము
ఆ బుగ్గ వినహా
యేదియు లేదుగా
యేసు యొక్క రక్త ధారె ||

2. పాప పరిహారము
ప్రాపు యేసు రక్త ధారె
శాపపు సంహారము
స్వామి యేసు రక్త ధారె

3. ఇదే నా సుతీర్థము
యేసు యొక్క రక్తధారె
నాదు క్షమాపణము
సాధు వేసు రక్త ధారె

4. నాకు సమాధానము
నాధుఁ డేసు రక్త ధారె
సాకు నేను గానను
జయ యేసు రక్త ధారె`,keywords:["daagu needhi maapunu","daagu nedhi maapunu","dagu nedhi mapunu","dagu needhi mapunu","daagu neti mapunu","andhra christian hymns","4/4"],video:"",artist:"Jacob Chambarles",genre:["Andhra Christian Hymn"],timeSignature:"4/4"}],త:[{id:l(),title:"తనిసితి నీ కృపలో",lyrics:`తనిసితి నీ కృపలో... తలపోసితి నీ మేలులు
అనిశము నా హృదిలో... సూచనగా నీ మాటలు
దాల్చితి బాసికములుగా నా కన్నుల నడుమ
నశియించక నే వసియించెద...యేసయ్యా
పూర్ణాత్మతో నిను సేవించెద... మెస్సియ్యా

1. నిలిపితి నాపై నీ కన్నులు 
తల్లిగర్భాన నేనుండగా 
అనుసరించ నీ ఆజ్ఞలు నాకిల 
గైకొనజేసి రక్షించగా 
నేనేరుగని నీ సూచక క్రియలు నాకు తెలిపితివి 
నీ బహుబలమున దీవెనలిచ్చి బ్రతికింపజేసితివి ||తనిసితి||

2. ఒంటరి ప్రార్ధన గని ఆలించి 
ప్రతిఫలమిచ్చితివి
అడుగుకముందే అన్నీ ఎరిగితివి 
అక్కరలన్నీ తీర్చితివి 
ఆవగింజ పాటి విశ్వాసపు శక్తిని తెలియజేసితివి 
ప్రేమతో బ్రతకాలని దానౌన్నత్యము నాకు బోధించితివి ||తనిసితి||`,keywords:["తనిసితి నీ కృపలో","thanisithi ni krupalo","thanesethi ne krupalo","thanesithi ni krupalo","thanesiti ni krupalo","tanisiti ni krupalo","thanisethi ni krupalo"],video:"",artist:"Bro JC Kuchipudi, John Pradeep,  Daniel M, Deva Priya",genre:["General"],timeSignature:"3/4"},{id:l(),title:"తనువు నా దిదిగో గై",lyrics:`తనువు నా దిదిగో గై – కొనుమీ యో ప్రభువా నీ – పనికి బ్రతిష్టించుమీ
దినములు క్షణములు – దీసికొని యవి నీదు
వినతిన్ ప్రవహింప జే – యను శక్తి నీయుమీ      ||తనువు||

1. ఘనమైన నీ ప్రేమ – కారణంబున నీకై – పని చేయ జేతు లివిగో
యనయంబు నీ విషయ – మై సొగసుగా జురుకు
దనముతో పరుగెత్త – వినయ పాదము లివిగో      ||తనువు||

2. స్వర మిదిగో కొనుమీ – వరరాజ నిను గూర్చి – నిరతమ్ము పాడనిమ్ము
మరియు పెదవు లివిగో – మహనీయమైన నీ
పరిశుద్ధ వార్తతో – పరి పూర్ణముగా నింపు      ||తనువు||

3. వెండి పసిడి యివిగో – వీస మైనను నాకై – యుండవలె నని కోరను
నిండైన నీ యిష్ట – నియమంబు చొప్పున
మెండుగా వాడ పరి – మితియవు జ్ఞానం బిదిగో      ||తనువు||

4. నా యిష్ట మిదిగో యిది – నీ యిషముగ జేయ – నా యిష్ట మిక గాదది
నా యిఛ్చ యున్నట్టి – నా హృదయ మిదిగో నీ
కే యియ్యది రాజ – కీయ సింహాసనామౌ      ||తనువు||

5. ఉన్న నా ప్రేమ నీ – సన్నిధానమున నే – నెన్నడు ధార వోయన్
నన్ను నీ వానిగ – నాథా గైకొను మెపుడు
చెన్నుగ నీ వశమై – స్థిర ముగ నుండెద      ||తనువు||`,keywords:["thanuvu na dhidhigo gai","thanuvu na dhidhigogai","tanuvu na dhidhigivai","tanuvu na didigogai","andhra christian hymn","7/8"],video:"",artist:"Mungamoori Devadaasu",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"తరతరాలలో యుగయుగాలలో",lyrics:`తరతరాలలో యుగయుగాలలో జగజగాలలో 
దేవుడు దేవుడు యేసే దేవుడు 
హల్లెలూయా హల్లెలూయా హల్లెలూయా హల్లెలూయా 

1. భూమిని పుట్టించకమునుపు 
లోకము పునాది లేనపుడు    ||దేవుడు|| 

2. సృష్టికి శిల్పకారుడు 
జగతికి ఆదిసంభూతుడు ||దేవుడు|| 

3. తండ్రి కుమార ఆత్మయు 
ఒకడైయున్న రూపము ||దేవుడు||`,keywords:["tharatharaalalo yugayugaalalo","tataralalo","tataralalo yugayugalalo","tharataralalo","taratharalalo"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"తరించిపోనీ నీ ప్రేమలోనే",lyrics:`తరించిపోనీ నీ ప్రేమలోనే
ఓ యేసుదేవా నీ దాసినై
నీ సేవలోనే నేనుండిపోనీ 
నీ ప్రేమగీతం నే పాడుకోనీ 
నీ కంటిపాపై నిలువగలేనా 
ఈ జీవితం నీదనీ ఏలుకోలేవా 

1. ఉదయం రవికిరణం వరమై తాకనీ 
మనసే మైమరచి నిను సేవించనీ 
వెన్నెలే సాక్షిగా స్తుతులనే పాడనీ 
కన్నులా రూపమే దీపమై వెలగనీ 
చక్కనీ చెలిమిని ప్రేమతో కోరెదా 

2. వదనం నవకమలం నీతో సాగనీ 
మధురం నీ చరితం నేనే పాడనీ 
మోక్షమే జీవమై హాయిగా తాకనీ 
యేసుతో ప్రాణమై సాగనీ పయనమే 
కమ్మనీ గానమై దైవమా చేరెదా`,keywords:["tharinchipooni","tharinchi poni","tharinche poni","tharenchi poone","tharinchi pooni"],video:"",artist:"Father. Johnson Chettur, Pranam Kamalkhar, & Anwesshaa",genre:["General"],timeSignature:"4/4"},{id:l(),title:"తల్లిలా లాలించును తండ్రిలా ప్రేమించును",lyrics:`తల్లిలా లాలించును తండ్రిలా ప్రేమించును (2)
ముదిమి వచ్చువరకు ఎత్తుకొని ముద్దాడును
చంక పెట్టుకొని కాపాడును యేసయ్యా    ||తల్లిలా||

1. తల్లి అయిన మరచునేమో నేను నిన్ను మరువను
చూడుము నా అరచేతులలో
నిన్ను చెక్కియున్నాను (2)
నీ పాదము తొట్రిల్లనీయను నేను
నిన్ను కాపాడువాడు కునుకడు నిదురపోడు
అని చెప్పి వాగ్దానం చేసిన యేసయ్య    ||తల్లిలా||

2. పర్వతాలు తొలగవచ్చు తత్తరిల్లు మెట్టలన్నీ
వీడిపోదు నా కృప నీకు
నా నిబంధనా తొలగదు (2)
దిగులుపడకు భయపడకు నిన్ను విమోచించెద
నీదు భారమంతా మోసి నాడు శాంతి నొసగెద
అని చెప్పి వాగ్దానం చేసిన యేసయ్య     ||తల్లిలా||`,keywords:["తల్లిలా లాలించును తండ్రిలా ప్రేమించును","thallila laalinchunu","tallila lalinchunu","thallila lalinchunu","thallila lalinchunu"],video:"",artist:"",genre:["General","Comfort"],timeSignature:"6/8"},{id:l(),title:"తల్లి ఒడిలో పవళించే బిడ్డవలెనే",lyrics:`తల్లి ఒడిలో పవళించే బిడ్డవలెనే - తండ్రి నీ వడిలో నే ఒదిగితినయ్యా  (2)

1. వేదన లేదు శోధనలేదు - నీ హస్తము విడువనయ్యా 
భయమన్నది లేనే లేదు - ప్రేమతో నడిపితివి నను ప్రేమతో నడిపితివి

2. నీ ఉపకారం స్మరియించి - స్తుతిస్తోత్రం తెలిపెదను నే స్తుతిస్తోత్రం తెలిపెదను
చేయివిడువని నా యేసయ్యా - కల్వరినాయకుడా నా కల్వరి నాయకుడా

3. మంచికాపరి జీవకాపరి - హృదయా పాలకుడా నా హృదయ పాలకుడా
ఆహారమై వచ్చితివా - ఆత్మతో కలసితివా నా ఆత్మతో కలిసితివా

4. నిన్ను నేను పట్టుకొంటిని - భుజముపైన సోలెదను నీ భుజముపైన సోలెదను
నీ రెక్కల నీడలోనుండి - లోకాన్ని మరచితిని ఈ లోకాన్ని మరచితిని

5. రేయింపవలు వెతికానయ్యా - నీకై వేచితిని నే నీకై వేచితిని
నా జీవితకాలమంతా - నీ నామం చాటెదను నే నీనామం చాటెదను`,keywords:["thalli odilo pavalinche","talli vadilo pavalinche","thalli vodilo pavalinche","talli vodilo pavalinche","thalli vadiloo pavalinche"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"తార వెలిసింది ఆ నింగిలో",lyrics:`తార వెలిసింది ఆ నింగిలో ధరణి మురిసింది
దూత వచ్చింది సువార్తను మాకు తెలిపింది (2)
రాజులకు రాజు పుట్టాడని
యూదుల రాజు ఉదయించాడని (2) ||తార||

1. మందను విడచి మమ్మును మరచి
మేమంతా కలిసి వెళ్ళాములే
ఆ ఊరిలో ఆ పాకలో
స్తుతి గానాలు పాడాములే (2)
సంతోషమే ఇక సంబరమే
లోక రక్షణ ఆనందమే
స్తోత్రార్పణే మా రారాజుకే
ఇది క్రిస్మస్ ఆర్భాటమే ||తార||

2. బంగారమును సాంబ్రాణియు
బోళంబును తెచ్చాములే
ఆ యింటిలో మా కంటితో
నిను కనులారా గాంచాములే (2)
మా ఇమ్మానుయేలువు నీవేనని
నిను మనసారా కొలిచాములే
మా యూదుల రాజువు నీవేనని
నిను ఘనపరచి పొగిడాములే ||తార||`,keywords:["thaara velasindhi","tara velasindhi","thaara velisindhi","thara velasinsdhi","thara velisindhi","tara velasindhi","thara velasindi","thara velasinde"],video:"",artist:"Dr. Satish Kumar",genre:["Christmas"],timeSignature:"2/4"},{id:l(),title:"త్రాహి మాం క్రీస్తు నాధ",lyrics:`త్రాహి మాం క్రీస్తు నాధ దయఁ జూడ రావే 
  నేను దేహి యనుచు నీ పాదములే దిక్కుగాఁ జేరితి నిపుడు ||త్రాహి||

1. గవ్వ చేయురాని చెడ్డ కర్మేంద్రియాధీనుఁడనై 
  రవ్వ పాలై నే నెంతో నెవ్వఁ బొందితిఁ   
  త్రవ్వుచున్న కొలఁదిఁ పెరుఁగుఁ దరగదు నా పాప రాశి 
  యివ్విధమునఁ జెడిపోతినినే నేమి సేతు నోహోహోహో ||త్రాహి||

2. నీ యందు భయభక్తులు లేని నిర్లజ్జాచిత్తముఁ బూని 
  చేయరాని దుష్కర్మములు చేసినాఁడను 
  దయ్యాలరాజు చేతిలోఁ జేయి వేసి వాని పనులఁ 
  జేయ సాగి నే నిబ్భంగిఁ జెడిపోయితి నే నయ్యయ్యయ్యొ ||త్రాహి||

3. నిబ్బర మొక్కించుకై నిజము రవ్వంతైన లేక 
  దబ్బర లాడుటకు ము త్తా నైతిని 
  అబ్బురమైన ఘోర పా పాంధకార కూపమందు 
  దబ్బున బడిపోతి నయ్యో దారి చెడి నేనబ్బబ్బబ్బా ||త్రాహి||

4. నిన్నుఁ జేరి సాటిలేని నిత్యానంద మందఁబోవు 
  చున్నప్పుడు నిందలు నా కెన్ని చేరినా 
  విన్నదనము లేకుండ నీ వే నా మదికి ధైర్యమిచ్చి 
  యన్నిట రక్షించి తివి నా యన్న నీకు స్తోత్ర మహాహా ||త్రాహి||`,keywords:["thrahimam kreesthu naadha","trahimam kresthu nadha","thraahimaam kreesthu naadha","andhra christian hymn","4/4"],video:"",artist:"Purushotham Chowdary",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"త్రిత్వైకమా సకలేశ్వరా",lyrics:`త్రిత్వైకమా సకలేశ్వరా
పూజ్యుడౌ శ్రేయస్కరా (2)
ధ్యానించెద హృది వాంఛతో
గళమెత్తెద మృదు భాషతో
నా సుతుడా సర్వే సుతుడా
నా జనకా సర్వే జనకా ||త్రిత్వైకమా||

1. దోష భావముకు బంధునవ్వగా
దేహ ఇఛ్చలలో స్థిరమవ్వగా (2)
వాక్యపు వెలుగై నాకిల వెలుగై
ముక్తినిచ్చిన నీకు వందనం (2) ||త్రిత్వైకమా||

2. క్షితియందు ఎరకు మోసిపోతిని
క్షమలేక ఇలలో మృతమైతిని (2)
వెల దాతవై జీవ దాతవై
స్థితి మార్చిన నీకు వందనం (2) ||త్రిత్వైకమా||`,keywords:["thrithvaikama sakaleesvara","thrith vaikama","trithvaikama","thritvaikama"],video:"https://www.youtube.com/embed/X5q7xykqRYU?start=1817",artist:"Pranam Kamlakhar",genre:["General"],timeSignature:"3/4"},{id:l(),title:"తీపి ఆశల మందారాలు",lyrics:`తీపి ఆశల మందారాలు - విరబూసిన ఈ వేళ
చిలిపి ఊసులు సింధూరాలు కలబోసిన శుభవేళ
అనురాగంతో ఒకటవ్వాలని
అనుకున్నవన్నీ నిజమవ్వాలని

ఆశిస్తూ పాడుతున్నా సుస్వాగతం
దీవిస్తూ శుభముగ మీ పరిణయం

1. ఇన్నినాళ్లుగా వేచిన సమయం ఎదురు నిలచింది
చిగురులు తొడిగిన కొత్త వసంతం రమ్మని పిలిచింది
కలకాలం మీరు కలసి ఉండాలని
చిరజీవం మీపై నిలిచి ఉండాలని

2. త్రియేక దేవుని ఘన సంకల్పం ఇల నెరవేరింది
ఇరు హృదయాల సుందర స్వప్నం నిజముగ మారింది
అరమరికలు లేక ఒకటి కావాలని
పరలోక తండ్రికి మహిమ తేవాలని`,keywords:["తీపి ఆశల మందారాలు","theepi aasala mandhaaralu","teepi aasala","teepi aashala","thepi ashala","thipi aashala mandharalu","theepi aashala mandaraalu","marriage","thepi aashala mandharalu","tepe aasala mandaralu","stevenson","tipi aasala mandaralu"],video:"",artist:"Dr. A.R.Stevenson",genre:["Marriage"],timeSignature:"4/4"},{id:l(),title:"తీయని స్వరాలతో",lyrics:`తీయని స్వరాలతో నా మనసే నిండెను
యేసుని వరాలతో నా బ్రతుకే మారెను

భావమధురిమ ఉప్పొంగెను
రాగసుధలతో భాసిల్లెను (2)
పరవశించి నిను స్తుతించి
ఘనపరచెద వైభవముగా ||తీయని||

1. ఏదేమైనా ఏనాడైనా నీ దారిలో నేను
నీవే నాకు ఆప్తుడైన నిన్నాశ్రయించాను
సజీవుడా నీవే లేని నేనే వ్యర్ధము
ఏదేమైనా ఏనాడైనా నీ దారిలోనేను
యేసుతో రాజ్యము చేసే భాగ్యము
నాకు దొరికె కనికరము – తనువు పరవశము    ||తీయని||

2. ఆరాధన యోగ్యుడైన నీ సొంతమే నేను
నిన్నేనమ్మి జీవించేను నీలో ఫలించేను
సహాయుడా నీలోనేగా నా సాఫల్యము
ఆరాధన యోగ్యుడైన నీ సొంతమే నేను
యేసుని సన్నిధి చేరే భాగ్యము
నాకు కలిగె అనుగ్రహము – తనువు పరవశము  ||తీయని||`,keywords:["theeyani swaralatho","thiyyani swaralatho","theeyani swaraalatho","theeyane swaralatho","thiyani swaralatho","thiyane swaralatho","theeyani swaralato","theyaniswaralato","kamalakar","pranam kamalakar","theyane swaralatho"],video:"https://www.youtube.com/embed/xsPNhroOvl8?si=XQeZIOylFPcd-wxs",artist:"Pranam Kamlakhar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"తండ్రి కుమార శుద్ధాత్ముడా-త్రియేక దేవుడా",lyrics:`తండ్రి కుమార శుద్ధాత్ముడా త్రియేక దేవుడా
ఆరాధింతును నిన్నే ఆత్మతో సత్యముతో

సృష్టికర్త నిన్నే సత్య స్వరూపుడా
నా కొరకే బలియైన దేవా నిన్నే నే ఆరాధింతున్

జీవాధిపతియైన తేజోమయుడా
సర్వోన్నతుడా... నిన్నే నే ఆరాధింతున్`,keywords:["thandri kumara shudhathmuda","Tandri kumara shudhatma","kripal mohan","thandre kumara shuddhathmuda"],video:"",artist:"Kripal Mohan",genre:["Worship","General"],timeSignature:"3/4"},{id:l(),title:"తండ్రి దేవా తండ్రి దేవా",lyrics:`తండ్రి దేవా తండ్రి దేవా - నా సర్వం నీవయ్యా 
 నీవుంటే నాకు చాలు (2) 
 నా ప్రియుడా నా ప్రాణమా - నిన్ ఆరాధించెదన్ 
 నా జీవమా నా స్నేహమా - నిన్ ఆరాధించెదన్ (2) 

 1. నీ ప్రేమ వర్ణించుట - నా వల్ల కాదయ్యా 
 నీ కార్యము వివరించుట - నా బ్రతుకు చాలదయ్యా (2) 
 తండ్రి దేవా నా ఆనందమా - నీ వడిలో నాకు సుఖము (2) 

 2. నా ప్రాణ స్నేహితుడా - నీ సన్నిధి పరిమళమే 
 జుంటె తేనె కన్నా - నీ ప్రేమ మధురమయ్యా (2) 
 తండ్రి దేవా నా ఆనందమా - నీ వడిలో నాకు సుఖము (2)`,keywords:["thandri dheva","tandri deva","thandri deva","thandri dheva","thandri dheeva","thandre deva","tandre deva","thandri deeva","tandri deeva","thandree dheva","thandree deeva","thandre deva"],video:"",artist:"Sounds of Zion",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"తెల్లవారిన వేళఁ దెలి వొంది మన క్రీస్తు",lyrics:`తెల్లవారిన వేళఁ దెలి వొంది మన క్రీస్తు దివ్య నామముఁ బాడెరె యో ప్రియులార దివస రక్షణ వేఁడరే తల్లి రొమ్మున దాఁచు పిల్ల రీతిని మనలఁ జల్లదనముగ రాతి రెల్లఁ గాచిన విభునిఁ ||దెల్లవారిన వేళ||

1. నిద్రపోయిన వేళ నిఖిలాపదులఁబాపి నిశలన్ని గడుపు విభునిన్ భద్రముగ వినతించి భయభక్తితో మనము ముద్రి తాక్షులఁ గేలు మోడ్చి మ్రొక్కుచును  ||దెల్లవారిన వేళ||

2. భానుఁడుదయం బయ్యెఁ బద్మములు వికసిల్లె గానమలు జేసెఁ బక్షుల్ మానసాబ్జము లలర మనము కల్వరి మెట్టపై నెక్కు నినుఁ డనెడి ప్రభుఁ జూచి వేడ్కన్  ||దెల్లవారిన వేళ||
3. దిట్టముగ మానసేంద్రియ కాయ శోధనలు పట్టుకొని, యుండు దినమున్ దట్టముగ మన నాల్గు తట్ల యేసుని కరుణఁ జుట్టుకొని రక్షించు శుభమడుగుకొనుచున్  ||దెల్లవారిన వేళ||

4. పాప భారము మనము ప్రభుని పై నిడి గురుని పాదములు చెంత నొరగి కాపు కర్త విశాల కరము మాటున డాఁగి యాపదలఁ దొలఁగించు మని వేఁడుకొనుచున్  ||దెల్లవారిన వేళ||`,keywords:["thellavaarina veela","tellavarina vela","thella varina vela","thela varina vela","andhra christian hymn","7/8"],video:"",artist:"Purushotham Chowdary",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"తేనెకన్న తీయనైనది నా యేసు ప్రేమ",lyrics:`తేనెకన్న తీయనైనది
నా యేసు ప్రేమ – మల్లెకన్న తెల్లనైనది (2)
నన్ను ప్రేమించెను నన్ను రక్షించెను
కష్టకాలమందు నాకు తోడైయుండెను (2)     ||తేనెకన్న||

1. ఆగకనే సాగిపోదును
నా ప్రభువు చూపించు బాటలో (2)
అడ్డంకులన్ని నన్ను చుట్టినా
నా దేవుని నే విడువకుందును (2)  ||తేనెకన్న||

2. నా వాళ్ళే నన్ను విడిచినా
నా బంధువులే దూరమైనా (2)
ఏ తోడు లేక ఒంటరినైననూ
నా తోడు క్రీస్తని ఆనందింతును (2)   ||తేనెకన్న||`,keywords:["thene kanna theeyanainadhi na yesu premA","thene kanna thiyyanainadhi","thene kana thiyanainadhi","thene kanna theeyyanainadhi"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"తొలకరి వాన దీవెనలు కురిపించు వాన",lyrics:`తొలకరి వాన దీవెనలు కురిపించు వాన
పరిశుద్ధాత్మ వాన ప్రభు వర్షించు నీ జీవితాన (2)
అది నూతన పరచును ఫలియింపచేయును
సమృద్ధినిచ్చును సంతోషపరచును (2)   ||తొలకరి||

1. ఎడారి వంటి బ్రతుకును - సారముగా చేయును
జీవజలముతో నింపి - జీవింపచేయును (2)
ఆకు వాడక ఫలమిచ్చునట్లు - సమృద్ధితో నింపును (2)   ||అది నూతన||

2. సత్యస్వరూపి శుద్ధాత్మా - నీలో వసియించును
పాప బ్రతుకు తొలగించి - నూతన జీవితమిచ్చును (2)
యేసుకొరకు నిజ సైనికునిగా - సజీవ సాక్షిగ నిలుపును (2)  ||అది నూతన||`,keywords:["tholakari vaana","tolakari vana","tolakari vaana","tholakare vana","tholakare vaana","tolakare vaana"],video:"",artist:"Philip and Sharon Philip",genre:["General"],timeSignature:"4/4"}],ద:[{id:l(),title:"దాటిపోవువాడు కాదు యేసుదైవము",lyrics:`దాటిపోవువాడు కాదు యేసుదైవము 
ఆలకించుతాడు నీదు ఆర్తనాదము 
ఏది నీకు అవసరమో తాను ఎరిగియుండెను 
మేలు కలుగజేయుటకు నీ ప్రక్కనే ఉండెను

1. దావీదు కుమారుడా దయచూపుమని 
వెంబడించి గుడ్డివారు కేకవేయగా 
మీ నమ్మికచొప్పున కలుగుగాకని 
ప్రేమతో తాకి వారి కనులు తెరచెను

2. సమాధులలోనుండి ఎదురుగ వచ్చి 
దయ్యాలు పట్టినవారు కేకవేయగా 
దురాత్మలను తక్షణమే వదిలిపొమ్మని 
ఆజ్ఞఇచ్చి వారిని బాగుచేసెను

3. బాధపడే కుమార్తెను కరుణించుమని 
వేదనతో కనానుస్త్రీ కేకవేయగా 
గొప్పదైన విశ్వాసం ఆమెకుందని 
మాటతోనే చిన్నదాని స్వస్థపరచెను`,keywords:["dhati poovu vaadu kadhu","dhati povu vadu kadhu","daati povu vadu kadu","datipovu vadu kadu","stevenson"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దాతృత్వమును గలిగి పెరుగుదమ",lyrics:`దాతృత్వమును గలిగి పెరుగుదమ ధనము ధాత్రి దేవుని దంచు నెరు గుదమ ||దాతృ||

1. శక్తికొలది కాన్కలర్పింతమ మన భుక్తినుండి కొంత దీయుదమ
||దాతృ||

2. సంతోషముగ నియ్య సాగుదమ మన స్సంతటితో జేయ నేగు దమ
||దాతృ||

3. గర్వఘనములు వీడి యర్పింతమ యుర్వి సర్వ మాయనందు
నేర్పింతమ ||దాతృ||

4. సంఘ సేవకు సొమ్ము సమకూర్తమ క్రీస్తు సంఘ యక్కర లన్ని తీర్చుదమ
||దాతృ||

5. ప్రతియాదివార మిది మది నుంతమ దీని ప్రతి సంఘస్థుఁడు చేయ బోధింతమ ||దాతృ||

6. విధి దలచి దుర్బలుల రక్షింతమ సంఘ విధవాళి దానముతో దర్శింతము ||దాతృ||

7. దిక్కులేని జనుల దీవింతమ వారి యక్కరలలో మేలు గావింతమ ||దాతృ||

8. పుచ్చుకొనుటకంటె నిచ్చుదమ మఱల నిచ్చు తండ్రికి స్తుతుల నిచ్చెదమ
||దాతృ||

9. వెదజల్లి యభివృద్ది పొందుదమ మోక్ష పదవు లను భవింప బరుగిడుదమ
||దాతృ||

10. వర్ధిల్లిన కొలది చెల్లింతము లోక వ్యర్థ ఖర్చులనెల్ల మళ్లింతమ ||దాతృ||`,keywords:["dhathruthvamunu kaligi","dhathruthvamunu galigi","dhathruthavamunu","dhathruthvamunu kaligi","dhathvuthvamu kaligi","andhra christian hymns","7/8"],video:"",artist:"Mortha Prakasam",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"దావీదు తనయా హోసన్నా",lyrics:`దావీదు తనయా హోసన్నా
యూదుల రాజా యేసన్నా (2)
హోసన్నా హోసన్నా – యేసన్నా యేసన్నా      ||దావీదు||

1. గిరులు తరులు సాగరులు
నీకై వీచెను వింధ్యామరలు
హోసన్నా హోసన్నా – యేసన్నా యేసన్నా
గిరులు తరులు సాగరులు
నీకై వీచెను వింధ్యామరలు
పిల్లలు పెద్దలు జగమంతా (2)
నీకై వేచెను బ్రతుకంతా      ||దావీదు||

2. కరుణా రసమయ నీ నయనాలు
సమతా మమతల సంకేతాలు
హోసన్నా హోసన్నా – యేసన్నా యేసన్నా
కరుణా రసమయ నీ నయనాలు
సమతా మమతల సంకేతాలు
కంచర వాహన నీ పయనాలు (2)
జనావాహినికే సుబోధకాలు      ||దావీదు||

3. పేదల పాలిటి పెన్నిధివై
పాపుల రక్షకుడైనావు
హోసన్నా హోసన్నా – యేసన్నా యేసన్నా
పేదల పాలిటి పెన్నిధివై
పాపుల రక్షకుడైనావు
మకుటము లేని ఓ మహరాజా (2)
పరిచితిమివిగో మా హృదయాలు      ||దావీదు||`,keywords:["dhavedhi thanaya hosanna","davedu tanaya hosana","davidu thanaya hosanna","dhavidhu thanaya hosanna","Easter","Palm Sunday"],video:"",artist:"",genre:["Palm Sunday"],timeSignature:"4/4"},{id:l(),title:"దావీదు వలె నాట్యమాడి",lyrics:`దావీదు వలె నాట్యమాడి
తండ్రీని స్తుతించెదము (2)
యేసయ్యా స్తోత్రముల్‌ (4)    ||దావీదు||

1. తంబురతోను సితారతోను
తండ్రీని స్తుతించెదను (2)    ||యేసయ్యా||

2. కష్టము కలిగినా – నష్టము కలిగినా
తండ్రీని స్తుతించెదను (2)   ||యేసయ్యా||

3. పరిశుద్ధ రక్తముతో పాపము కడిగిన
తండ్రీని స్తుతించెదను (2)  ||యేసయ్యా||

4. క్రీస్తుతో నన్ను ఫలింపజేసిన
తండ్రీని స్తుతించెదను (2)  ||యేసయ్యా||`,keywords:["dhaavedhu vale naatyamaadi","dhavedhu vale natyamadi","davedu vale natyamadi","daaveedu vale naatyamaadi","dhaveedhu vale naatyamaadi"],video:"",artist:"Ch Santhosh Reddy",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దిక్కులేని వాడనో ప్రభో",lyrics:`దిక్కులేని వాడనో ప్రభో నీ యండజేరి మ్రొక్కి సేవఁజేతు నో ప్రభో మ్రొక్కి విన్నవించు వారి యక్కరలను దీర్చు సత్యము గ్రక్కున నిడి యాదరించు మక్కువైన దేవ తనయ ||దిక్కులేని||

1.ఘోర పాప భరము నెల్లను మోయుచు నలయు వారలార రండటంచును భూరి దయను బిలిచి యున్న సార వాక్కు లెఱుగ కధిక భార మొంది తుదిని నీ దరి జేరితి నన్నాదరించుము ||దిక్కులేని||

2.బలము లేని వాడనో ప్రభో కేవలము పాప ములను జేసి యలసితిని ప్రభో ఇలను నే నొనర్చునట్టి కలుష జాలములను నీవు తొలగ జేసి యాత్మ కధిక బలము నొసగి మునుపు మయ్య ||దిక్కులేని||

3.పామరుండ నౌట వల్లను నే నెఱుగనైతి క్షేమ మిచ్చు పదవులెల్లను కామ క్రోధ లోభములను దీమసమున విడిచి యేసు నామ మందు విశ్వసించి ప్రేమను వర్తింపజేయు ||దిక్కులేని||

4.వందనం బొనర్తునో ప్రభో నా డెందమందలి సందియము లణంచు మో ప్రభో సందియ మెడబాపి శాస్త్ర మందు నుండు సార వాక్యానంద పదవు లనుభవింప డెందము వెలిగింప వయ్య ||దిక్కులేని||`,keywords:["dhikkuleni vadano prabho","dhikku leni vadano prabho","dhikku leeni vaadano prabho","Andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"దినదినంబు యేసుకు",lyrics:`దినదినంబు యేసుకు దగ్గరగా చేరుతా
అణుక్షణంబు యేసునే నా మదిలో కోరుతా (2)

1. ఎల్లప్పుడూ యేసు వైపు కన్నులెత్తి పాడుతా (2)
 పరమ తండ్రి నీదు మాట బలము తోడ చాటుతా (2) ||దినదినంబు||

2. మారిపోయే లోకమందు మనుజులెంతో మారినా (2)
 మారునా ప్రభు యేసు ప్రేమ ఆశ తోడ చేరనా (2) ||దినదినంబు||

3. ఎన్నడూ ఎడబాయడు నన్ను విడువడు ఏ మాత్రము (2)
 ప్రభువే నాకు అభయము భయపడను నేనే మాత్రము (2) ||దినదినంబు||

4. దైవ వాక్యం జీవ వాక్యం అనుదినంబు చదువుతా (2)
 ప్రభువు మాట నాదు బాట విభునితో మాట్లాడుతా (2) ||దినదినంబు||

5. పరిశుద్ధముగా అనుకూలముగా జీవయాగమై నిలచెదా (2)
 సిలువ మోసి సేవ చేయ యేసుతోనే కదులుతా (2) ||దినదినంబు||`,keywords:["dhinadhinambu","dhina dhinaambu","dhinadhinambu yesuku","dhinadhinambu yeesuku","dina dinambu","dinadinambu","dhenadhenaambu","dhena dhenambu","dhena dhenaambu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దినదినము విజయము మనదే",lyrics:`దినదినము విజయము మనదే
జయశీలుడైన యేసునిలో
భయమే లేదు మాకు దిగులే లేదు
సైన్యములకు అధిపతి యుండగా

సాతానును ఓడించెను
స్వేచ్చా జీవము మాకిచ్చెను
పాప శాపములు తొలగించెను
పరిపూర్ణ జీవము మాకిచ్చెను (2)

హోసన్నా జయం మనదే (3)
హోసన్నా జయం జయం మనదే   ||దినదినము||`,keywords:["dhinadhinamu vijayamu manadhe","dhinadhinamu vejayamu manadhe","dinadinamu vijayamu manade","dhina dhinamu vijayamu manadhe","dina dinamu vijayamu manadhe","kripal mohan"],video:"",artist:"Kripal Mohan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దినమెల్ల నే పాడినా కీర్తించినా",lyrics:`దినమెల్ల నే పాడినా కీర్తించినా
నీ ఋణము నే తీర్చగలనా
కొనియాడి పాడి నీ సాక్షిగానే
ఇలలో జీవించనా     ||దినమెల్ల||

1. గాయపడిన సమయాన మంచి సమరయునిలా
నా గాయాలు కడిగిన దేవా
ఆకలైన వేళలో ఆహారమిచ్చి
నన్ను పోషించినావు దేవా (2)
నిను విడువనూ ఎడబాయననినా (2)
నా యేసయ్య   ||దినమెల్ల||

2. నా బలహీనతయందు నా సిలువను మోస్తూ
నిన్ను పోలి నేను నడిచెదన్
వెనుకున్నవి మరచి ముందున్న వాటికై
సహనముతో పరుగెత్తెదన్ (2)
ఉన్నత పిలుపునకు కలుగు బహుమానము (2)
నేను పొందాలని   ||దినమెల్ల||`,keywords:["dhinamella nee paadina","dinamella ne padina","dhinamella ney padina","dinamella ne padina","dinam ella ne padina","dhinamela ne padina","dhinamella ne padina","dhinamella ney paadina"],video:"",artist:"Prabhu Bhushan Prathipati",genre:["General"],timeSignature:"6/8"},{id:l(),title:"దివి నుండి భువికి రారాజుగా",lyrics:`దివి నుండి భువికి రారాజుగా
బెత్లెహేము పురముకు ఏతెంచేను (2)
గ్రామమంతా చిరునవ్వులులోలికే
పట్టణమంతా పండుగ చేసే (2)
సర్వలోకము సంబరమాయే (2)

ఆశ్చర్యకరుడు - హల్లెలూయ
ఆలోచనకర్త - హల్లెలూయ
బలమైనదేవుడు - హల్లెలూయ
నిత్యుడగు తండ్రి - హల్లెలూయ
సమాధానకర్త - హల్లెలూయ

1. గొల్లలు జ్ఞానులు పరవశులై
బంగారం సాంబ్రాణి భోళమును (2)
సాష్టాంగ పడి తమ హృదయములన్ ప్రభువుకు కానుకలర్పించిరి.
మనము కూడా అర్పించెదమ్
ప్రభూ నాముము ఘనపరిచెదమ్
మనము కూడా సాష్టాంగ పడుచు
పర్వశించుచూ పాడెడము

ఆశ్చర్యకరుడు - హల్లెలూయ
ఆలోచనకర్త - హల్లెలూయ
బలమైనదేవుడు - హల్లెలూయ
నిత్యుడగు తండ్రి - హల్లెలూయ
సమాధానకర్త - హల్లెలూయ

2 .పాపము శాపము బాపగను
వేదన శోధన తీర్చగను (2)
పరిశుద్ధుడు జన్మించేనని
ఇహమున పరమున కొనియాడేదమ్
మనము కూడా కొనియాడేదం
ప్రభూ నామాము ఘనపరెచెదం
మనము కూడా హోసన్నయనుచూ కరములేత్తి పాడేదము.

ఆశ్చర్యకరుడు - హల్లెలూయ
ఆలోచనకర్త - హల్లెలూయ
బలమైనదేవుడు - హల్లెలూయ
నిత్యుడగు తండ్రి - హల్లెలూయ
సమాధానకర్త - హల్లెలూయ`,keywords:["dhivi nundi bhumiki","divi nundi bhumiki","christmas"],video:"",artist:"Rev.M.Yesu Paul, Ps.M.Jyothi Raju, JK Christopher, Sharon Philip, Lillian Christopher, Hana Joyce",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"దివిలో వేడుక - ఊరంతా పండుగ",lyrics:`దివిలో వేడుక - ఊరంతా పండుగ - నేడే రారాజు పుట్టెనే
ఇలలో జాడగా - ఆ నింగీ తారక - వెలిసే ఈ వింత చూపగా

మహా సంతోషమే - ఆహా ఆనందమే
ఆహా ఈ రేయిలో  - ఓహో ఉల్లాసమే  
 
ఇల మెస్సయ్య - జన్మించినాడుగా
మన యేసయ్య - ఉదయించినాడుగా

మహారాజు - మన యేసు
నిన్నే కోరీ - ఇలా వచ్చెనే
జగాలేలే  - మన యేసు
నిన్నే చేర - దిగి వచ్చెనే

1. దేవ దేవుడే - మరియ తనయుడై
ధరలో దీనుడై - పుట్టే పుణ్యుడై

పరిశుద్ధాత్ముడే - పాపరహితుడై
ప్రేమపూర్ణుడే - పరమ జీవమై 

లోకాన్ని వెలిగించ వచ్చాడుగా
నిను దీవించి తన ప్రేమ చూపాడుగా

దారే చూపంగ దేవుడే
దయతో దీపంగ నిలిచెనే

2. ఆడే గొల్లలు - పాడే దూతలు
వచ్చిరి జ్ఞానులు - వేడిరి యేసుని
         
ఆ పశుపాకలో - పొంగే సంబరం
మనకు రక్షణై  - యేసు ఈ దినం 

పాపాన్ని తొలగించ వచ్చాడుగా
నిను కరుణించి తన జాలి చూపాడుగా 

కృపతో కాపాడ వచ్చెనే
చెలిమై చల్లంగ చూసెనే`,keywords:["christmas","dhivilo veduka","dhiviloo veeduka","dhivilo veeduka","divilo veduka","Devulo veduka","divilo veyduka","dhivelo veeduka","develo veduka"],video:"",artist:"Joshua Shaik, Pranam Kamlakhar, Javed Ali",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"దీవించావే సమృద్ధిగా",lyrics:`దీవించావే సమృద్ధిగా
నీ సాక్షిగా కొనసాగమని
ప్రేమించావే నను ప్రాణంగా
నీ కోసమే నను బ్రతకమని

దారులలో ఏడారులలో
సెలయేరులై ప్రవహించుమయా
చీకటిలో కారు చీకటిలో
అగ్ని స్తంభమై నను నడుపుమయా  ||దీవించావే సమృద్ధిగా||

1. నువ్వే లేకుండా నేనుండలేను యేసయ్యా
నీ ప్రేమే లేకుండా జీవించలేను నేనయ్యా 
నా ఒంటరి పయనంలో నా జంటగ నిలిచావే
నే నడిచే దారుల్లో నా తోడై ఉన్నావే (2)
ఊహలలో నా ఊసులలో
నా ధ్యాస బాసవైనావే
శుద్ధతలో పరిశుద్ధతలో
నిను పోలి నన్నిల సాగమని  ||దీవించావే సమృద్ధిగా||

2. కొలతే లేదయ్యా నీ జాలి నాపై యేసయ్యా
కొరతే లేదయ్యా సమృద్ధి జీవం నీవయ్యా
నా కన్నీరంత తుడిచావే కన్నతల్లిలా
కొదువంతా తీర్చావే కన్నతండ్రిలా (2) 
ఆశలలో నిరాశలలో
నేనున్నా నీకని అన్నావే
పోరులలో పోరాటములో
నా పక్షముగానే నిలిచావే  ||దీవించావే సమృద్ధిగా||`,keywords:["dheevinchaave samrudhiga","dhevinchave","deevinchave","deevinchaave","deevinchave samrudhiga","deevinchave samrudiga","devinchave samrudiga","satish kumar","satishkumar","divinchave samrudhiga","divinchavey sammruddhiga","samruddiga","4/4"],video:"",artist:"Dr. Satish Kumar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దీవెనలే ఇలకురిసెనులే",lyrics:`దీవెనలే ఇలకురిసెనులే - దీనుడై ప్రభు ఇల వెలసెనులె
పశువులశాలలో ఈ రేయి - పసిబాలుడుగా జనియించె
నిజక్రిస్మస్ ఇదే ఈ ధరలోన - ప్రభుయేసు జన్మించెను మదిలోన
ఆ...ఆ...ఆ... (4)

1. దూతలు తెల్పెరి ఈ శుభవార్త - గొల్లలు చేరిరి ఆ ప్రభుచెంత
శుభములు కురిసెనులే - అభయము కలిగెనులే
We wish you a Happy Christmas
ఆ...ఆ...ఆ... (4)

2. తాతను గాంచి బాలుని చేరి - తూరుపు జ్ఞానులు కానుకలిడిరి
శుభములు కురిసెనులే - అభయము కలిగెనులే
We wish you a Happy Christmas
ఆ...ఆ...ఆ... (4)

3. మా మదిలో జనియింపుము నేడే - ఈ దరలో నిజదేవుని సుతుడై 
శుభములు కురిసెనులే - అభయము కలిగెనులే
We wish you a Happy Christmas
ఆ...ఆ...ఆ... (4)`,keywords:["dheevenale ila kurisenule","dheevenale ela kurisenule","dhevenale ila kurisenule","deevenale ila kurisenule","divenale ila kurisenule","devenale ila kurisenule","dhivenale ila kurisenule","christmas"],video:"",artist:"",genre:["Christmas"],timeSignature:"2/4"},{id:l(),title:"దుర్దినములు రాకముందే – సర్వం కోల్పోకముందే",lyrics:`దుర్దినములు రాకముందే – సర్వం కోల్పోకముందే
అంధత్వం కమ్మకముందే – ఉగ్రత దిగిరాకముందే (2)
స్మరియించు రక్షకుని అనుకూల సమయమున
చేర్చుకో యేసుని ఆలస్యం చేయక (2)       ||దుర్దినములు||

1. సాగిపోయిన నీడవంటి జీవితం
అల్పమైనది నీటి బుడగ వంటిది (2)
తెరచి ఉంది తీర్పు ద్వారం
మార్పులేని వారికోసం (2)
పాతాళ వేదనలు తప్పించుకొనలేవు
ఆ ఘోర బాధలు వర్ణింపజాలవు (2)       ||దుర్దినములు||

2. రత్నరాసులేవి నీతో కూడ రావు
మృతమైన నీ దేహం పనికిరాదు దేనికి (2)
యేసు క్రీస్తు ప్రభువు నందే
ఉంది నీకు రక్షణ (2)
తొలగించు భ్రమలన్ని కనుగొనుము సత్యాన్ని
విశ్వసించు యేసుని విడిచిపెట్టు పాపాన్ని (2)       ||దుర్దినములు||`,keywords:["dhurdhinamulu raakamundhe","durdinamulu rakamundhe","dhurdhinamulu raaka mundhe","dordhinamulu rakamundhe","john wesly"],video:"",artist:"John Wesly",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దూత పాట పాడుడి – రక్షకున్ స్తుతించుడి",lyrics:`1. దూత పాట పాడుడి – రక్షకున్ స్తుతించుడి
ఆ ప్రభుండు పుట్టెను – బెత్లెహేము నందున
భూజనంబు కెల్లను – సౌఖ్య సంభ్రమాయెను
ఆకసంబు నందున – మ్రోగు పాట చాటుడి
దూత పాట పాడుడి – రక్షకున్ స్తుతించుడి

2. ఊర్ధ్వ లోకమందున – గొల్వగాను శుద్దులు
అంత్య కాలమందున – కన్య గర్భమందున
బుట్టినట్టి రక్షకా – ఓ ఇమ్మానుయేల్ ప్రభో
ఓ నరావతారుడా – నిన్ను నెన్న శక్యమా
దూత పాట పాడుడి – రక్షకున్ స్తుతించుడి

3. రావే నీతి సూర్యుడా – రావే దేవా పుత్రుడా
నీదు రాక వల్లను – లోక సౌఖ్య మాయెను
భూ నివాసులందరూ – మృత్యు భీతి గెల్తురు
నిన్ను నమ్ము వారికి – ఆత్మ శుద్ది కల్గును
దూత పాట పాడుడి – రక్షకున్ స్తుతించుడి`,keywords:["dhutha paata padudi","dhuta pata padudi","dhutha pata padudi","duta pata padudi","andhra christian hymn","christmas","4/4"],video:"",artist:"J. E. Fard Field",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"},{id:l(),title:"దేవ కావవే నేడు మమ్ములన్",lyrics:`దేవ కావవే నేడు మమ్ములన్ నీవెరాత్రి కాచినావు నీకు స్తోత్రము ||దేవ||

1. ఆపదలు మమున్ అంటకుండను కావుమయ్య నేడు నీదు కఱుణ
తోడను ||దేవ||

2. నేటి కార్యముల్ నేడె చేయగా సూటియైన త్రోవ మాకు చూపుమోప్రభో
||దేవ||

3. చెడ్డ కార్యముల్ చేయకుండను దొడ్డబుద్ధి నిచ్చి మమ్ము నుద్ధరించుము
దేవ ||దేవ||`,keywords:["dheva kaavane needu mammulan","deva kavane neydu mammulan","dheva kavane neydu mammulan","dheva kaavane nedu mammulan","andhra christian hymns","6/8"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"6/8"},{id:l(),title:"దేవర నీ దీవెనలు",lyrics:`దేవర నీ దీవెనలు
ధారాళముగను వీరలపై
బాగుగ వేగమే దిగనిమ్ము
పావన యేసుని ద్వారగను (2)

1. దంపతులు దండిగ నీ
ధాత్రిలో వెలయుచు సంపదలన్
సొంపుగ నింపుగ పెంపగుచు
సహింపున వీరు సుఖించుటకై  ||దేవర నీ||

2. ఈ కవను నీ కరుణన్
ఆకరు వరకును లోకములో
శోకము లేకయే ఏకముగా
బ్రాకటముగను జేకొనుము ||దేవర నీ||

3. ఇప్పగిది నెప్పుడును
గొప్పగు ప్రేమతో నొప్పుచు దా
మొప్పిన చొప్పున దప్పకను
మెప్పుగ బ్రతుకగ బంపు కృపన్    ||దేవర నీ||

4. తాపములు పాపములు
మోపుగ వీరిపై రాకుండగా
గాపుగ బ్రాపుగ దాపునుండి
యాపదలన్నియు బాపుచును    దేవర నీ||

5. సాధులుగన్ జేయుటకై
శోధనలచే నీవు శోధింపగా
కదలక వదలక ముదమున నీ
పాదము దాపున బాదుకొనన్   ||దేవర నీ||

6. మెండుగ భూమండలపు
గండములలో వీరుండగను
తండ్రిగ దండిగ నండనుండి
వెండియు వానిని ఖండించావే  ||దేవర నీ||

7. యిద్దరు వీరిద్దరును
శుద్ధులై నిన్ను సేవించుటకై
శ్రద్ధతో బుద్ధిగ సిధ్ధపడన్
దిద్దుము నీ ప్రియ బిడ్డలుగాన్    ||దేవర నీ||

8. వాసిగ నీ దాసులము
చేసిన ఈ మొఱ్ఱల్ దీసికొని
మా సకలేశ్వర నీ సుతుడ
యేసుని పేరిట బ్రోవుమామేన్     ||దేవర నీ||`,keywords:["dhevara ni dhevenalu","dhevara nee dheevenalu","andhra christian hymns","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"దేవ సంస్తుతి చేయవే మనసా",lyrics:`దేవ సంస్తుతి చేయవే మనసా
శ్రీ-మంతుడగు యెహోవ సంస్తుతి చేయవే మనసా
దేవ సంస్తుతి చేయుమా నా – జీవమా యెహోవా దేవుని
పావన నామము నుతించుమా – నా యంతరంగము
లో వసించు నో సమస్తమా ||దేవ||

1. జీవమా, యెహోవా నీకు – జేసిన మేళ్ళన్ మరువకు (2)
నీవు చేసిన పాతకంబులను – మన్నించి జబ్బు
లేవియున్ లేకుండ జేయును – ఆ కారణముచే ||దేవ||

2. చావు గోతినుండి నిన్ను – లేవనెత్తి దయను గృపను (2)
జీవ కిరీటముగ వేయును – నీ శిరసు మీద
జీవ కిరీటముగ వేయును – ఆ కారణముచే ||దేవ||

3. యవ్వనంబు పక్షిరాజు – యవ్వనంబు వలెనే క్రొత్త (2)
యవ్వనంబై వెలయునట్లుగా – మే లిచ్చి నీదు
భావమును సంతుష్టిపరచునుగా – ఆ కారణముచే ||దేవ||

4. ప్రభువు నీతి పనులు చేయును – బాధితులకు న్యాయ మిచ్చున్ (2)
విభుండు మార్గము తెలిపె మోషేకు – దన కార్యములను
విప్పె నిశ్రాయేలు జనమునకు – ఆ కారణముచే ||దేవ||

5. అత్యధిక ప్రేమ స్వరూపి-యైన దీర్ఘ శాంతపరుండు (2)
నిత్యము వ్యాజ్యంబు చేయడు – ఆ కృపొన్నతుడు
నీ పయి నెపుడు కోప ముంచడు – ఆ కారణముచే ||దేవ||

6. పామరుల మని ప్రత్యుపకార – ప్రతి ఫలంబుల్ పంపలేదు (2)
భూమి కన్న నాకాసంబున్న – ఎత్తుండు దైవ
ప్రేమ భక్తి జనులయందున – ఆ కారణముచే ||దేవ||

7. పడమటికి తూర్పెంతా ఎడమో – పాపములను మనకు నంత (2)
ఎడముజేసియున్నాడు – మన పాపములను
ఎడమగానే చేసియున్నాడు – ఆ కారణముచే ||దేవ||

8. కొడుకులపై తండ్రి జాలి – పాడు విధముగా భక్తిపరుల (2)
యెడల జాలి పడును దేవుండు – తన భక్తిపరుల
యెడల జాలిపడును దేవుండు – ఆ కారణముచే ||దేవ||

9. మనము నిర్మితమయిన రీతి – తనకు దెలిసియున్న సంగతి (2)
మనము మంటి వారమంచును – జ్ఞాపకము చేసి
కొను కరుణ జూపుచుండును – ఆ కారణముచే ||దేవ||

10. పూసి గాలి వీవ నెగిరి – పోయి బసను దెలియని వన (2)
వాస పుష్పము వలెనె నరుడుండు – నరు నాయువు తృణ
ప్రాయము మన దేవ కృప మెండు – ఆ కారణముచే ||దేవ||

11. పరమ దేవ నిబంధ నాజ్ఞల్ – భక్తితో గైకొను జనులకు (2)
నిరతమును గృప నిలిచి యుండును – యెహోవ నీతి
తరములు పిల్లలకు నుండును – ఆ కారణముచే ||దేవ||`,keywords:["dheva samsthuthi cheyave manasaa","dheeva samsthuthi","deeva samstuti","dheva samstuti","dheva samsthuthi","deva samsthuthi","deva samstuti","dhevasamsthuthi","andhra christian hymn","4/4"],video:"",artist:"Mangamuri Devadasu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"దేవాది దేవుడవు సర్వశక్తిమంతుడవు",lyrics:`దేవాది దేవుడవు సర్వశక్తిమంతుడవు 
రాజాది రాజువు నీవే యేసుప్రభు (2)
మహిమా ఘనత నీకే చెల్లునుగా  (2) 

1. ఆది అంతము నీవే అల్ఫా ఓమెగయు నీవే (2)
మారని వాడవు నీవే స్తుతులకు యోగ్యుడనీవే  (2)
మహిమా ఘనత నీకే చెల్లునుగా  (2)  ||దేవాది||

2. నాదు కాపరి నీవే నాదు నీరీక్షణ నీవే (2)
నాదు రక్షణ నీవే నా గమ్యము నీవే  (2)
మహిమా ఘనత నీకే చెల్లునుగా (2)   ||దేవాది||`,keywords:["dheevadhi dhevudavu","deevaadi devudavu","deevadi devudavu","dhevadhi dhevudavu","devadhi dhevudavu","devadhi devudavu"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"దేవా దృష్ఠించు మా దేశం",lyrics:`దేవా దృష్ఠించు మా దేశం 
నశించు దానిని బాగుచేయుము (2)
పాపము క్షమించి స్వస్థపరచుము 
శాపము తొలగించి దీవించుము   (2)

1.దేశాధికారులను దీవించుము 
తగిన జ్ఞానము వారికీయుము 
స్వార్ధము నుండి దూరపరచుము 
మంచి ఆలోచనలు వారికీయుము 
మంచి సహకారులను దయచేయుము దేవా (2)
నీతి న్యాయములు వారిలో పెట్టుము తండ్రీ  ||దేవా దృష్ఠించు||
 
2.తుఫానులైనో మాపై కొట్టగా 
వరదలైనో ముంచి వేయగా 
పంటలని పాడైపోయే 
కట్టిక కరవు ఆసన్నమాయే 
దేశపు నిధులే కాలియయే (2) 
బీదరికం నాట్యం చేయుచున్నది ||దేవా||

3. మతము అంటు కలహలు రేగగా
నీది నాదని భేదం చూపగా 
నీ మార్గములో ప్రేమ నిండి వుందనిగా 
ఈ దేశమునకు క్షేమమునిచున్నని 
క్రైస్తవం ఒక మతమే కాదని 
రక్షణ మార్గమని జనులకు తెలుపుము తండ్రి ||దేవా||`,keywords:["deeva dhrustinchumu maa dhesam","deeva drustinchumu ma desam","deeva drustinchumu maa dhesam","dheva dhrustinchumu ma desam","dheva drustinchumu ma desam","deeva drustinchumu ma desam","dheva dhrustenchumu maa dhesam","dheeva dhrustinchumu ma deesam","dheeva drustinchumu maa dhesam","deva dhrustinchumu maa deesam","dheva dhrustinchumu maa dhesam","deeva dhrustinchumu ma dhesam","dheva dhrustinchumu maa deesam","dheeva dhrustinchumu maa deesam"],video:"https://www.youtube.com/embed/-NmyFqw_n6A?start=1314",artist:"Samy Pachigalla",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దేవా నా దేవా నీకే వందనం",lyrics:`దేవా, నా దేవా నీకే వందనం,
నీ కృపలో,నను కాచిన నీకే స్తోత్రము,
ధన్యులము మేము యేసయ్య,నీ లాంటి దేవుడెవరయ్య,
కరుణించు ఈ దీనులను, నిత్యము నిన్నే సేవింతుమ్,(2)
నీవే నా హృదయంలో,నివసించే దైవం, ఓ..(2)

1. ఎటు చూసినా,లోక ఆశలే,నన్ను వేదేకేనే, కృగదీసేనే,
కంటి పాపవై,కాచినావులే,
నీ మధుర ప్రేమతోనే చేర్చు కొంటివే,
నీవు నాలోన వున్నప్పుడునన్నేమి చేయవు,
విస్వాసం తోనే నిన్ను వెంబడిస్తాను..
నీవే నా హృదయంలో,నివసించే దైవం, ఓ..(2)

2. నీ ప్రేమయే,నన్ను తాకేనే,
ఆ సిలువపై నిన్ని చూసినప్పుడు,
ఎంత పాపినైనా గాని చేరదీసి నావులే,
క్షమీయించే మనస్సు నీదేలే,
నీవు మా కొరకై కలువరిలో,ప్రాణమిచ్చిన దేవా,
ఏమిచ్చి తీర్చగలము నీ ఋణమయ్యా,
నీవే నా హృదయంలో,నివసించే దైవం, ఓ..(2)
దేవా ...`,keywords:["dheva na dheva neke vandhanam","deva na deva nike vandanam","deeva na deeva neeke vandanam"],video:"",artist:"Sharon Philip, Sudharshini & Shivani, Sam K Kiran",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దేవా నీ గొప్పకార్యములన్ – మదిన్ తలచి స్తుతించెదం",lyrics:`దేవా నీ గొప్పకార్యములన్ – మదిన్ తలచి స్తుతించెదం
నీ ఆశ్చర్యక్రియలను – పాడి కీర్తించెదం
హల్లెలూయా నా యేసురాజ
హల్లెలూయా నా ప్రాణనాథ (2)
స్తుతులు మహిమ ఘనత నీకే (2)      ||దేవా నీ||

1. శాశ్వత ప్రేమతో నను ప్రేమించి
పరమును వీడి భువికరుదెంచి
కలువరి సిలువలో రక్తము కార్చి
నీదు కృపతో నను రక్షించిన
నీ దివ్య ప్రేమను అత్యధికముగా
స్మరింతున్ జీవిత కాలమంతా   ||దేవా నీ||

2. నీ కంటిపాపగా నన్ను కాచి
నీ చేతి నీడలో నన్ను దాచి
నీ అరచేతిలో నను చెక్కుకొని
నీదు సొత్తుగా నను చేసుకొని
అక్షయమైన నీ మధుర ప్రేమను
దీక్షతో ఇలలో చాటెదను    ||దేవా నీ||`,keywords:["dheva ni goppa kaaryamulan","deva ni goppa karyamulan","deeva ni goppa karyamulan","deva nee goppa karyamulan"],video:"",artist:"Ashirvad Luke",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దేవా నీ నామం - బలమైనది నీ నామం",lyrics:`1. దేవా నీ నామం
బలమైనది నీ నామం (2)
స్తుతియింతును నీ నామం
ఘనపరతును నీ నామం (2)
అన్నిటి కన్న పై నామం
యేసయ్యా నీ నామం (2)

2. ఆశ్రయ దుర్గము నీ నామం
నా కొండా నా కోట (2)
స్తుతియింతును నీ నామం
ఘనపరతును నీ నామం (2)
అన్నిటి కన్న పై నామం
యేసయ్యా నీ నామం (4)`,keywords:["deva ni namam","deeva ni naamam","deva ne namam","dheva ni naanam","dheva ne namam","dheeva ni naamam","dheva nee naamam","deeva nee naamam","kripal mohan","worship"],video:"",artist:"Kripal Mohan",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"దేవా నీ సాక్షిగా నేనుండుట",lyrics:`దేవా నీ సాక్షిగా నేనుండుట
ఈ మంటికి భాగ్యము (2)
జాలిగా మానుజాళికై
కలువరిలోని ఆ యాగము
చాటెద ప్రతి స్థలమందు
నా తుది శ్వాస ఆగే వరకు ||దేవా||

1. నాలాంటి నర మాత్రుని చేరుట
నీ వంటి పరిశుద్ధునికేలనో (2)
ఏ మేధావికి విధితమే కాదిది
కేవలం నీ కృపే దీనికాధారము
ఈ సంకల్పమే నా సౌభాగ్యమే
నా బ్రతుకంత కొనియాడుట ||దేవా||

2. నా ఊహకందని మేలుతో
నా గుండె నిండింది ప్రేమతో (2)
నా కన్నీటిని మార్చి పన్నీరుగా
నాట్యము చేయు అనుభవమిచ్చావుగా
ఈ శుభవార్తను చాటు సందేశము
నేను ఎలుగెత్తి ప్రకటించెద ||దేవా||`,keywords:["deeva ni sakshiga","deeva nee saakshiga","deva ni sakshiga","deeva ni saakshiga","deva nee sakshiga","dheva nisakshiga","dheva ni sakshiga","dheva ni saakshiga","dheeva nee saakshiga","deeva neesaakshiga","deva nisakshiga","dheva nee sakshiga","dheeva nee saakshigaa","dheeva ni saakshiga","dheeva ni sakshiga","3/4"],video:"https://www.youtube.com/embed/-NmyFqw_n6A?start=1314",artist:"JK Christopher",genre:["General"],timeSignature:"3/4"},{id:l(),title:"దేవా పాపిని - నిన్నాశ్రయించాను",lyrics:`దేవా పాపిని - నిన్నాశ్రయించాను
ప్రేమ చూపించి - నన్నాదుకోవయ్యా (2) ||దేవా||

1. అపరాధినై అంధుడనై
అపవాదితో అనుచరుడై (2)
సంచరించితి చీకటిలో
వంచన చేసితి ఎందరినో  (2)  ||దేవా||

2. కలువరిలో సిలువొంద
కలవరమొందె జగమంతా (2)
పాపినైన నా కొరకు
మరణమునే భరించితివి
మరణమునే జయించితివి  ||దేవా||`,keywords:["dheva papini","deva paapini","deeva paapini","deva papini","deeva papini","deva papine","dheeva papini","deeva papine","good friday","lent"],video:"",artist:"",genre:["Good Friday","Lent","Sin"],timeSignature:"4/4"},{id:l(),title:"దేవా మా కుటుంబము",lyrics:`దేవా మా కుటుంబము – నీ సేవకే అంకితము (2)
ఈ శాప లోకాన – నీ సాక్షులుగా నిలువ
నీ ఆత్మతో నింపుమా (2)   ||దేవా||

1. కాపరి మా యేసు ప్రభువే – కొదువేమి లేదు మాకు
మాకేమి భయము – మాకేమి దిగులు
నీకే వందనములయ్యా
లోబడి జీవింతుము – లోపంబులు సవరించుము
లోకాశలు వీడి – లోకంబులోన
నీ మందగా ఉందుము   ||దేవా||

2. సమృద్ధి జీవంబును – సమృద్ధిగా మాకిమ్ము
నెమ్మది గల ఇల్లు – నిమ్మళమగు మనస్సు
ఇమ్మహిలో మాకిమ్మయ్యా
ఇమ్ముగ దయచేయుము – గిన్నె నిండిన అనుభవము
ఎన్నో కుటుంబాల ధన్యులుగా జేయంగా
మమ్ములను బలపరచుము||దేవా||

3. ఏ కీడు రాకుండగా – కాపాడుము మా పిల్లలను
లోక దురు వ్యసనంలా – తాకుడు లేకుండా
దాచుము నీ చేతులలో
ఒలీవ మొక్కల వలెను ద్రాక్షా తీగెలను పోలి
ఫల సంపదలతోను – కలకాలము జీవించ
కురుపించుము నీ దీవెనలన్   ||దేవా||

4. పెంపారు జేయుము మాలో – సొంపుగ నీ ఘన ప్రేమన్
నింపుమా హృదయములు – శాంతి భాగ్యంబులతో
సంతసంబుగ సాగెదము
వింతైన నీ ప్రేమను – అంతట ప్రకటింతుము
కొంత కాలమే మేము – ఉందుము లోకాన
చెంత చేరగ కోరెదము
నీ చెంత చేరగ కోరెదము    ||దేవా||`,keywords:["dheva ma kutumbamu","deva ma kutumbamu","deva maa kutumbamu","dheeva maa kutumbamu","dheeva ma kutumbamu","3/4"],video:"",artist:"D. J. Augustine",genre:["General","Surrender"],timeSignature:"3/4"},{id:l(),title:"దేవా సహాయము నిమ్మా",lyrics:`దేవా సహాయము నిమ్మా జీవంపు టూటలు ద్రావుట కిమ్మా ||దేవా||

1. గడియ గడియకు నెగసెఁ నమ్ము లెంతో వడిగా నాపై వచ్చె నరక
బాణములు ఎగతెగని శోధనములు నీవు పడఁగొట్టి వేగమె దృఢభక్తి
నిమ్మా ||దేవా||

2. కోటాన కోటి కష్టములు నాకు మాటి మాటికి వచ్చె మరి నికృష్టములు
సాతాను సాధనములు నేను దాఁటి నీ రెక్కల చాటున నుండ ||దేవా||

3. దారా పుత్రుల పైన భ్రమలు నన్ను సారె సారెకు నీడ్చు లోక భాగ్యములు
ఘోరమగు నాత్మకములు న న్నీ రీతి భ్రమ పెట్టు ధారుణిలోన ||దేవా||

4. మా యావువుదినములు చెట్టు చాయవలెఁ దరుగుచు మంటి పాలౌను
చాలు నీ లోకంబు మేలు మేము పరలోకరాజ్యము చేరుట మేలు
||దేవా||

5. మంచి మరణం బిమ్ము దేవ మమ్ము వచించు సాతాను వల నుండి
కావ నెంచి దూతల నంపినావ మాకై పంచగాయములొంద ప్రభు
వచ్చినావా ||దేవా||`,keywords:["dheva sahayamu nimma","dheva sahaayamu nimma","deva sahayamu nimma","deeva sahayamu nimma","Andhra christian hymn","3/4"],video:"",artist:"Mikkili Dhevasahaayamu",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"దేవుడు లోకమును ఎంతో ప్రేమించెను",lyrics:`దేవుడు లోకమును ఎంతో ప్రేమించెను (2)
నిన్ను నన్ను ధరలో ప్రతి వారిని (2)
ఎంతో ప్రేమించెను ప్రేమించి ఏతెంచెను    ।।దేవుడు।।

1. పరలోక ప్రేమ ఈ ధరలో
ప్రత్యక్షమాయె ప్రతివానికై (2)
ఆదియందున్న ఆ దేవుడు
ఏతెంచె నరుడై ఈ భువికి (2)
ఈ ప్రేమ నీ కొరకే – జన్మించే ఇల యేసు నీ కొరకే (2)    ।।దేవుడు।।

2. పాపంధకారములో అంధులుగా
చీకటి త్రోవలో తిరుగాడగా (2)
జీవపు వెలుగైన ఆ ప్రభువు
వెలిగించగా వచ్చెను ప్రతి వారిని (2)
ఈ వెలుగు నీ కొరకే – యేసు నిన్నిల వెలిగించును (2)    ।।దేవుడు।।`,keywords:["dhevudu lookamunu yentho preminchenu","devudu lokamunu entho preminchenu","devudu lokamunu entho preminchenu","devudu lokamunu yentho preminchenu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దేవుడే నాకాశ్రయంబు",lyrics:`దేవుడే నాకాశ్రయంబు – దివ్యమైన దుర్గము
మహా వినోదు డాపదల – సహాయుడై నన్ బ్రోచును
అభయ మభయ మభయ మెప్పు
డానంద మానంద మానంద మౌగ   ||దేవుడే||

1. పర్వతములు కదిలిన నీ – యుర్వి మారు పడినను
సర్వమున్ ఘోషించుచు నీ – సంద్ర ముప్పొంగినన్ ||అభయ||

2. దేవుడెప్డు తోడుగాగ – దేశము వర్ధిల్లును
ఆ తావు నందు ప్రజలు మిగుల – ధన్యులై వసింతురు   ||అభయ||

3. రాజ్యముల్ కంపించిన భూ – రాష్ట్రముల్ ఘోషించిన
పూజ్యుండౌ యెహోవా వైరి – బూని సంహరించును  ||అభయ||

4. విల్లు విరచు నాయన తెగ – బల్లెము నరకు నాయన
చెల్ల చెదర జేసి రిపుల – నెల్లద్రుంచు నాయనే   ||అభయ||

5. పిశాచి పూర్ణ బలము నాతో – బెనుగులాడ జడియును
నశించి శత్రు గణము దేవు – నాజ్ఞ వలన మడియును   ||అభయ||

6. కోటయు నాశ్రయమునై యా – కోబు దేవు డుండగా
ఏటి కింక వెరవ వలయు – నెప్డు నాకు బండుగ   ||అభయ||`,keywords:["dhevude nakasryayambu","dhevude naku asrayambu","Devude nakasryayambu","andhra christian hymn","3/4"],video:"",artist:"Panthagaani Paradhesi",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"దేవుని ఆనందం నిను కమ్మును (నీవు పైకి లేచెదవు)",lyrics:`దేవుని ఆనందం నిను కమ్మును
ఉన్నతమైన స్థలములు నిను ఆహ్వానించున్ (2)

పరలోక స్వాస్థ్యముతో పోషించును నిన్ను
ఆకాశపు వాకిళ్లు తెరుచును నీకు (2)

నీవు పైకి లేచెదవు పై పైన ఎగిరెదవు
నీవు వేచియున్న దినముల యొక్క ఫలమును పొందెదవు (2)
కోల్పోయినవన్ని రెండింతలుగా మరలా పొందెదవు (2)

1. బాధించు బంధకములు ఈ దినమే విప్పబడున్
నీ ముందు అడ్డుగా నిలిచే సంకెళ్లు తెగిపడున్ (2)
నీకున్న దర్శనం నెరవేర త్వరపడున్
అనుకూల ద్వారములు నీ కొరకు తెరవబడున్  (2)

నీవు పైకి లేచెదవు పై పైన ఎగిరెదవు 
నీవు వేచియున్న దినముల యొక్క ఫలమును పొందెదవు (2)
కోల్పోయినవన్ని రెండింతలుగా మరలా పొందెదవు (2)

2. నీతి సూర్యుడు నీ పైన ఉదయించును
యేసుని రెక్కల క్రింద ఆరోగ్యమొందెదవు (2)
నీ కాలి క్రింద దుష్టుడు ధూళిగా మారును 
నింగిలో మెరుపు వలె శత్రువు కూలును (2)

నీవు పైకి లేచెదవు పై పైన ఎగిరెదవు
నీవు వేచియున్న దినముల యొక్క ఫలమును పొందెదవు (2)
కోల్పోయినవన్ని రెండింతలుగా మరలా పొందెదవు (2)`,keywords:["neevu paiki lechedhavu","nevu paiki lechedavu","nivu paiki lechedavu","nivu paiki leechedhavu","nevu paiki leechedhavu","dhevuni aanandham ninu kammunu","devuni aanandam ninnu kammunu","deevuni aanandham ninnu kammunu","dhevuni anandham ninu kammunu","devuni anandam ninu kammunu","devuni anandham ninnu kammunu","paul dhinakaran"],video:"",artist:"Ps. John Jebaraj, Dr. Paul Dhinakaran ",genre:["General"],timeSignature:"4/4"},{id:l(),title:"దేవునికి స్తోత్రము గానము చేయుటయే మంచిది",lyrics:`దేవునికి స్తోత్రము గానము చేయుటయే మంచిది
మనమందరము స్తుతిగానము చేయుటయే మంచిది

1. యెరుషలేము యెహోవాయే కట్టుచున్నవాడని
ఇశ్రయేలీయులను పోగుచేయువాడని    ||దేవునికి||

2. గుండె చెదరిన వారిని బాగుచేయువాడని
వారి గాయములన్నియు కట్టుచున్నవాడని        ||దేవునికి||

3. నక్షత్రముల సంఖ్యను ఆయనే నియమించును
వాటికన్నియు పేరులు పెట్టుచున్నవాడని           ||దేవునికి||

4. ప్రభువు గొప్పవాడును అధిక శక్తి సంపన్నుడు
జ్ఞానమునకు ఆయనే మితియు లేనివాడని         ||దేవునికి||

5. దీనులకు అండాయెనే భక్తిహీనుల కూల్చును
సితారాతో దేవుని స్తుతులతో కీర్తించుడి               ||దేవునికి||

6. ఆయన ఆకాశమున్ మేఘములతో కప్పును
భూమికొరకు వర్షము సిద్ధపరచువాడని              ||దేవునికి||

7. పర్వతములలో గడ్డిని పశువులకు మొలపించెను
అరచు పిల్లకాకులకును ఆహారము తానీయును  ||దేవునికి||

8. గుర్రముల నరులందలి బలము నానందించడు
కృప వేడు వారిలో సంతసించువాడని                ||దేవునికి||

9. యెరుషలేము యెహోవను సీయోను నీ దేవుని
కీర్తించుము కొనియాడుము ఆనందించువాడని    ||దేవునికి||

10. పిల్లల నాశీర్వదించియు బలపరచు నీ గుమ్మముల్
మంచి గోధుమపంటతో నిన్ను తృప్తిగనుంచును   ||దేవునికి||

11. భూమికి తనయాజ్ఞను ఇచ్చువాడు ఆయనే
వేగముగను దేవుని వాక్యము పరుగెత్తును   ||దేవునికి||

12. వాక్యమును యాకోబుకు తెలియచేసినవాడని
ఏ జనముకీలాగున చేసియుండలేదని    ||దేవునికి||`,keywords:["dhevuniki sthothramu gaanamu","deevuniki sthothramu","dheevuniki","devuniki stotramu ganamu","andhra christiuan hymn","worship","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Worship"],timeSignature:"4/4"},{id:l(),title:"దేవుని ప్రేమ ఇదిగో",lyrics:`దేవుని ప్రేమ ఇదిగో – జనులార – భావంబునం దెలియరే
కేవలము నమ్ముకొనిన – పరలోక – జీవంబు మనకబ్బును  ||దేవుని||

1. సర్వలోకము మనలను – తన వాక్య – సత్యంబుతో జేసెను
సర్వోపకారుడుండే – మన మీద – జాలిపరుడై యుండెను    ||దేవుని||

2. మానవుల రక్షింపను – దేవుండు – తన కుమారుని బంపెను
మన శరీరము దాల్చెను – ఆ ప్రభువు – మన పాపమునకు దూరుడే  ||దేవుని||

3. యేసు క్రీస్తను పేరున – రక్షకుడు – వెలసి నాడిలలోపల
దోసకారి జనులతో – నెంతో సు – భాషలను బల్కినాడు  ||దేవుని||

4. పాప భారంబు తోడ – నే ప్రొద్దు – ప్రయాసముల బొందెడి
పాపులందరు నమ్మిన – విశ్రాంతి – పరిపూర్ణమిత్తు ననెను  ||దేవుని||

5. సతులైన పురుషులైనన్ – యా కర్త – సర్వ జనుల యెడలను
సత్ప్రేమగా నడిచెను – పరలోక – సద్బోధలిక జేసెను  ||దేవుని||

6. చావు నొందిన కొందరిన్ – యేసుండు – చక్కగా బ్రతికించెను
సకల వ్యాధుల రోగులు – ప్రభు నంటి – స్వస్థంబు తా మొందిరి         ||దేవుని||

7. గాలి సంద్రపు పొంగులన్ – సద్దణిపి – నీళ్లపై నడచినాడే
మేలు గల యద్భుతములు – ఈలాగు – వేల కొలదిగ జేసెను   ||దేవుని||

8. చేతుల కాళ్లలోను – రా రాజు – చేర మేకులు బొందెను
పాతకులు గొట్టినారే – పరిశుద్ధ – నీతి తా మోర్వలేకన్  ||దేవుని||
9. ఒడలు రక్తము గారగ – దెబ్బలు – చెడుగు లందరు గొట్టిరి
వడిముళ్లు తల మీదను – బెట్టిరి – ఓర్చెనో రక్షకుండు ||దేవుని||
10. ఇన్ని బాధలు బెట్టుచు – దను జంపు – చున్న పాప నరులను
మన్నించు మని తండ్రిని – యేసుండు – సన్నుతితో వేడెను         ||దేవుని||

11. రక్షకుడు శ్రమ బొందగా – దేశంబు – తక్షణము చీకటయ్యెన్
రక్షకుడు మృతి నొందగ – తెర చినిగి – రాతి కొండలు పగిలెను  ||దేవుని||

12. రాతి సమాధిలోను – రక్షకుని – నీతిగల దేహంబును
పాతి పెట్టిరి భక్తులు – నమ్మిన – నాతు లందరు జూడగా  ||దేవుని||

13. మూడవ దినమందున – యేసుండు – మృతి గెల్చి లేచినాడు
నాడు నమ్మిన మనుజులు – చూచిరి – నలువది దినములందున్  ||దేవుని||

14. పదునొకండు మారులు – వారలకు – బ్రత్యక్షు డాయె నేసు
పరలోకమున కేగెను – తన వార్త – బ్రకటించు మని పల్కెను  ||దేవుని||

15. నమ్మి బాప్తిస్మమొందు – నరులకు – రక్షణ మరి కల్గును
నమ్మ నొల్లక పోయెడు – నరులకు – నరకంబు సిద్ధమనెను  ||దేవుని||`,keywords:["dhevuni prema idhigo","devuni prema idigo","dhevuni prema idigo","devuni prema idhigo","dheevuni prema","deevuni preema","5/8"],video:"",artist:"Gollapalli Nathaaniyelu",genre:["Andhra Christian Hymn","General","Love"],timeSignature:"5/8"},{id:l(),title:"దేవుని వారసులం – ప్రేమ నివాసులము",lyrics:`దేవుని వారసులం – ప్రేమ నివాసులము
జీవన యాత్రికులం – యేసుని దాసులము
నవ యుగ సైనికులం – పరలోక పౌరులము
హల్లెలూయ – నవ యుగ సైనికులం – పరలోక పౌరులము       ||దేవుని||

1. దారుణ హింస లలో – దేవుని దూతలుగా
ఆరని జ్వాలలలో – ఆగని జయములతో
మారని ప్రేమ సమర్పణతో
సర్వత్ర యేసుని కీర్తింతుము (2)      ||దేవుని||

2. పరిశుద్దాత్మునికై – ప్రార్థన సలుపుదము
పరమాత్ముని రాక – బలము ప్రసాదింప
ధరణిలో ప్రభువును జూపుటకై
సర్వాంగ హోమము జేయుదము (2)      ||దేవుని||

3. అనుదిన కూటములు – అందరి గృహములలో
ఆనందముతోను – ఆరాధనలాయే
వీనుల విందగు పాటలతో
ధ్యానము చేయుచు మురియుదము (2)      ||దేవుని||

4. సజీవ సిలువ ప్రభు – సమాధి గెలుచుటచే
విజేత ప్రేమికులం – విధేయ బోధకులం
నిజముగ రక్షణ ప్రబలుటకై
ధ్వజముగ సిలువను నిలుపుదుము (2)      ||దేవుని||

5. గోధుమ గింజలవలె - క్రీస్తుడు చావగను
నాధుని మరణములో - శాశ్వత జీవమును 
నిధులుగ పండించి లేవగను 
మాధుర్య రక్షణ లభియించెను (2)  ||దేవుని||

7. ప్రభువును చూచుటకై ప్రజలందరు రాగా
విభు మహిమను గాంచ – విశ్వమే మేము గోల
శుభములు గూర్చుచు మాలోన
శోభిల్లు యేసుని చూపుదుము (2)      ||దేవుని||

6. హత సాక్షుల కాలం – అవనిలో చెలరేగ
గతకాలపు సేవ – గొల్గొతా గిరి జేర
భీతులలో బహు రీతులలో
నూతన లోకము కాంక్షింతుము (2)       ||దేవుని||`,keywords:["dhevuni varasulam","dheevuni vaarasulam","dheevuni varasulam","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","General"],timeSignature:"4/4"},{id:l(),title:"దేవుని స్తుతియించుడి - ఆయన కృప నిత్యముండును",lyrics:`దేవుని స్తుతియించుడి - ఆయన కృప నిత్యముండును
దేవాది దేవుని స్తుతించుడి - ఆయన కృప నిత్యముండును

1. ఇంతవరకు నడిపించెను - ఆయన కృప నిత్యముండును   (2)
ఇకముందుకు నడిపించును - ఆయన కృప నిత్యముండును   (2)
ఆయన కృప నిత్యముండును || దేవుని స్తుతి ||

2. ఇంతవరకూ ఆదరించెను - ఆయన కృప నిత్యముండును   (2)
ఇకుముందుకు ఆదరించును - ఆయన కృప నిత్యముండును   (2)
ఆయన కృప నిత్యముండును || దేవుని స్తుతి ||

3. ఇంతవరకు కాపాడెను - ఆయన కృప నిత్యముండును   (2)
ఇకముందుకు కాపాడును - ఆయన కృప నిత్యముండును   (2)
ఆయన కృప నిత్యముండును || దేవుని స్తుతి ||

4. సర్వజ్ఞుని స్తుతియించుడి - ఆయన కృప నిత్యముండును   (2)
సర్వశక్తిమంతుని స్తుతియించుడి - ఆయన కృప నిత్యముండును   (2)
ఆయన కృప నిత్యముండును || దేవుని స్తుతి ||`,keywords:["dhevuni stuthinchudi aayana krupa nithya mundunu","dhevuni sthutinchudi","devuni stutinchudi","dheevuni sthutinchudi","Dheevuni sthuthiyinchudi","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"దేవుని స్తుతియించుడి",lyrics:`దేవుని స్తుతియించుడి 
ఎల్లప్పుడు దేవుని స్తుతియించుడి ||దేవుని|| 

1. ఆయన పరిశుద్ధ ఆలయమందు (2) 
ఆయన సన్నిధిలో ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

2. ఆయన బలమును ప్రసిద్ధి చేయు (2) 
ఆకాశవిశాలమందు ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

3. ఆయన పరాక్రమ కార్యములన్ బట్టి (2) 
ఆయన ప్రభావమును ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

4. బూరధ్వనితో ఆయనన్ స్తుతించుడి (2) 
స్వరమండలములతో ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

5. సన్న తంతుల సితారతోను (2) 
చక్కని స్వరములతో ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

6. తంబురతోను నాట్యముతోను (2) 
తంతి వాద్యములతో ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

7. పిల్లనగ్రోవుల చల్లగనూది (2) 
ఎల్లప్రజలు జేరి ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

8. మ్రోగుతాళములతో ఆయనన్ స్తుతించుడి (2) 
గంభీర తాళముతో ఆ... ఆ... (2) ||ఎల్లప్పుడు|| 

9. సకల ప్రాణులు యెహోవన్ స్తుతించుడి (2) 
హల్లెలూయా ఆమెన్ ఆ... ఆ... (2) ||ఎల్లప్పుడు||`,keywords:["devuni stutiyinchudi","dhevuni sthuthiyinchudi","dhevuni stuthiyinchudi","dheevuni sthuthiyinchudi","deevuni stutiyinchudi","deevuni sthuthiyinchudi","2/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Worship"],timeSignature:"2/4"},{id:l(),title:"దొరకును సమస్తము యేసు పాదాల చెంత",lyrics:`దొరకును సమస్తము యేసు పాదాల చెంత
వెదకినా దొరుకును యేసు పాదాల చెంత (2)
యేసయ్యా యేసయ్యా… నీకసాధ్యమైనది లేనే లేదయ్యా
యేసయ్యా యేసయ్యా… నీకు సమస్తము సాధ్యమేనయ్యా     ||దొరకును||

1. మగ్దలేనే మరియ యేసు పాదాలను చేరి
కన్నీళ్లతో కడిగి తల వెంట్రుకలతో తుడిచి (2)
పాదాలను ముద్దు పెట్టుకొని
పూసెను విలువైన అత్తరు (2)
చేసెను శ్రేష్టారాధన
దొరికెను పాప క్షమాపణ (2)     ||దొరకును||

2. యాయేరు అను అధికారి యేసు పాదాలను చేరి
బ్రతిమాలుకొనెను తన పన్నెండేళ్ల కుమార్తెకి (2)
చిన్నదాన లెమ్మని చెప్పి
బ్రతికించెను యేసు దేవుడు (2)
కలిగెను మహదానందం
దొరికెను రక్షణ భాగ్యము (2)     ||దొరకును||

3. పత్మాసు దీపమున యోహాను యేసుని చూచి
పాదాలపై పడెను పరవశుడై యుండెను (2)
పరలోక దర్శనం
చూచెను తానే స్వయముగా (2)
దొరికెను ప్రభు ముఖ దర్శనం
దొరికెను ఇల మహా భాగ్యం (2)    ||దొరకును||`,keywords:["dhorakunu samasthamu","dorakunu samastamu","dhorakunu samastamu","dhorakunu samasthamuu","dhorakono samastamu","dhorakunusamasthamu","dorakunusamastamu","sharonsisters","sharon sisters","jk christopher","jkchristopher","4/4"],video:"",artist:"Lilian Christopher",genre:["General"],timeSignature:"4/4"}],ధ:[{id:l(),title:"ధ్యానింప నే చిత్తమా",lyrics:`ధ్యానింప నే చిత్తమా వర్షాంతమున ధ్యానింపనే చిత్తమా ధ్యానించ
వాసక్తి జ్ఞానంబు గలిగించు జ్ఞాన స్వరూపుడు జ్ఞానాత్మచే నీకు ||ధ్యానింపవే||

1. అరయ నీ తలపుల నఘము లగుపడు నీకు పరిశుద్ధు డీక్షింప
బహుగా గనుపడుచుండు ||ధ్యానింపవే||

2. పరికింప బలుకుల పాప మగుపడు నీకు పరిశుద్ధు డరయు గ
న్పడకుండు నే యది ||ధ్యానింపవే||

3. క్రియలను జింతింప మయిల గనపడు గాన భయ మొంది నమ్మికను
బదవే క్రీస్తుని దరికి ||ధ్యానింపవే||

4. దేవుని ఘన ప్రేమ దినదినము దలపోయ నీవు పొందగ వచ్చు
నిక్కమైన శుద్ధి ||ధ్యానింపవే||

5. స్మరియింప నీలోన వర రక్షకుని పాట్లు భరియింప నోపుదువె పాప
మొక నిమిషంబు ||ధ్యానింపవే||

6. హృదయంబు విమలాత్మ సదనంబు గావింపఁ పదవే శ్రీఘ్రంబుగఁ
పరమ జనకుని కడకు ||ధ్యానింపవే||

7. దేవుని సేవింప దిరముగ నాశించి దేవాత్మ కొర కీవు దినము
దేవుని వేడ ||ధ్యానింపవే||`,keywords:["dhyanimpa ney chithama","dhyanimoa ne chithama","dyanimpa ney chithama","dhianimpa ney chithama","dhinanimpa ne chithama","andhra christian hymns","7/8"],video:"",artist:"",genre:["Andhra Christian Hymn","New Year"],timeSignature:"7/8"},{id:l(),title:"ధీనుడా అజేయుడా ఆధరణ కిరణమా",lyrics:`ధీనుడా అజేయుడా ఆధరణ కిరణమా
పూజ్యుడా పరిపూర్ణుడా ఆనంద నిలయమా

ధీనుడా అజేయుడా… ఆధరణ కిరణమా
పూజ్యుడా పరిపూర్ణుడా… ఆనంద నిలయమా
జీవధాతవు నీవని… శృతిమించి పాడనా
జీవధారవు నీవని… కానుకనై పూజించనా
అక్షయదీపము నీవే… నా రక్షణ శృంగము నీవే
స్వరార్చన చేసెద నీకే… నా స్తుతులర్పించెద నీకేే  ||ధీనుడా అజేయుడా…||

1. సమ్మతిలేని సుడిగుండాలే ఆవరించగా
గమనములేని పోరాటాలే తరుముచుండగా
నిరుపేదనైన నా యెడల… సందేహమేమి లేకుండ
హేతువే లేని ప్రేమ చూపించి… సిలువ చాటునే దాచావు
సంతోషము నీవే… అమృత సంగీతము నీవే
స్తుతిమాలిక నీకే… వజ్ర సంకల్పము నీవే  ||ధీనుడా అజేయుడా…||   

2. సత్య ప్రమాణము… నెరవేర్చుటకే మార్గదర్శివై
నిత్య నిబంధన… నాతో చేసిన సత్యవంతుడా
విరిగి నలిగిన మనస్సుతో… హృదయార్చనే చేసెద
కరుణ నీడలో కృపావాడలో… నీతో ఉంటే చాలయ్యా
కర్తవ్యము నీవే… కనుల పండుగ నీవేగా
విశ్వాసము నీవే… విజయ శిఖరము నీవేగా  ||ధీనుడా అజేయుడా…||

3. ఊహకందని ఉన్నతమైనది దివ్య నగరమే
స్పటికము పోలిన… సుందరమైనది నీ రాజ్యమే
ఆ నగరమే లక్ష్యమై మహిమాత్మతో నింపినావు
అమరలోకాన నీ సన్నిధిలో… క్రొత్త కీర్తనే పాడెదను
ఉత్సాహము నీవే… నయనోత్సవం నీవేగా
ఉల్లాసము నీలో… ఊహల పల్లకి నీవేగా   ||ధీనుడా అజేయుడా…||`,keywords:["dheenuda ajeeyuda","dhenuda ajeyuda","dhinuda ajeyuda","dheenudaa ajeyuda","deenuda ajeyuda","hosanna ministries","john wesly","johnwesly","dinuda ajeyuda","denuda ajeyuda"],video:"",artist:"Hosanna Ministries",genre:["General"],timeSignature:"4/4"}],న:[{id:l(),title:"నడిపించు నా నావా",lyrics:`నడిపించు నా నావా నడి సంద్రమున దేవా
నవ జీవన మార్గమున నా జన్మ తరియింప   ||నడిపించు||

1. నా జీవిత తీరమున నా అపజయ భారమున
నలిగిన నా హృదయమును నడిపించుము లోతునకు
నా యాత్మ విరబూయ నా దీక్ష ఫలియింప
నా నావలో కాలిడుము నా సేవ చేకొనుము  ||నడిపించు||

2. రాత్రంతయు శ్రమపడినా రాలేదు ప్రభు జయము
రహదారులు వెదకిననూ రాదాయెను ప్రతిఫలము
రక్షించు నీ సిలువ రమణీయ లోతులలో
రతణాలను వెదకుటలో రాజిల్లు నా పడవ   ||నడిపించు||

3. ఆత్మార్పణ చేయకయే ఆశించితి నీ చెలిమి
అహమును ప్రేమించుచునే అరసితి ప్రభు నీ కలిమి
ఆశ నిరాశాయే ఆవేదనెదురాయే
ఆధ్యాత్మిక లేమిగని అల్లాడే నావలలు   ||నడిపించు||

4. ప్రభు మార్గము విడచితిని ప్రార్థించుట మానితిని
ప్రభు వాక్యము వదలితిని పరమార్థము మరచితిని
ప్రపంచ నటనలలో ప్రావీణ్యమును బొంది
ఫలహీనుడనై యిపుడు పాటింతు నీ మాట   ||నడిపించు||

5. లోతైన జలములలో లోతున వినబడు స్వరమా
లోబడుటను నేర్పించి లోపంబులు సవరించి
లోనున్న ఈవులలో లోతైన నా బ్రతుకు
లోపించని అర్పనగా లోకేష చేయుమయా    ||నడిపించు||

6. ప్రభు యేసుని శిష్యుడనై ప్రభు ప్రేమలో పాదుకొని
ప్రకటింతును లోకములో పరిశుద్ధుని ప్రేమ కథ
పరమాత్మ ప్రోక్షణతో పరిపూర్ణ సమర్పణతో
ప్రాణంబును ప్రభు కొరకు పానార్పణము చేతు     ||నడిపించు||`,keywords:["nadipinchu naanava","nadipinchu","nadipinchu nanava","nadipinchu naanaava","nadipincho","andhra christian hymn","andhra christian songs","4/4"],video:"",artist:"Dr. A. B. Masilamani",genre:["Andhra Christian Hymn","General"],timeSignature:"4/4"},{id:l(),title:"నడిపిస్తాడు నా దేవుడు",lyrics:`నడిపిస్తాడు నా దేవుడు – శ్రమలోనైనా నను విడువడు (2)
అడుగులు తడబడినా – అలసట పైబడినా (2)
చేయి పట్టి వెన్నుతట్టి – చక్కని ఆలొచన చెప్పి (2) ||నడిపిస్తాడు||

1. అంధకారమే దారి మూసినా
నిందలే నను కృంగదీసినా (2)
తన చిత్తం నెరవేర్చుతాడు
గమ్యం వరకు నను చేర్చుతాడు (2) ||నడిపిస్తాడు||

2. కష్టాల కొలిమి కాల్చివేసినా
శోకాలు గుండెను చీల్చివేసినా (2)
తన చిత్తం నెరవేర్చుతాడు
గమ్యం వరకు నను చేర్చుతాడు (2) ||నడిపిస్తాడు||

3. నాకున్న కలిమి కరిగిపోయిన
నాకున్న బలిమి తరిగిపోయిన (2)
తన చిత్తం నెరవేర్చుతాడు
గమ్యం వరకు నను చేర్చుతాడు (2) ||నడిపిస్తాడు||`,keywords:["nadipisthadu na dhevudu","nadipisthadu","nadipisthaadu","nadipisthaadu naa dhevudu","nadipisthadu na devudu","nadipistadu na devudu","nadipisthado","4/4","stevenson"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నజరేయుడా నా యేసయ్య",lyrics:`నజరేయుడా నా యేసయ్య
ఎన్ని యుగాలకైనా
ఆరాధ్య దైవము నీవేనని
గళమెత్తి నీ కీర్తి నే చాటెద          ||నజరేయుడా||

1. ఆకాశ గగనాలను నీ జేనతో కొలిచితివి (2)
శూన్యములో ఈ భూమిని
వ్రేలాడదీసిన నా యేసయ్య (2)
నీకే వందనం నీకే వందనం (2)       ||నజరేయుడా||

2. అగాధ సముద్రాలకు నీవే ఎల్లలు వేసితివి (2)
జలములలోబడి నే వెళ్ళినా
నన్నేమి చేయవు నా యేసయ్యా (2)
నీకే వందనం నీకే వందనం (2)        ||నజరేయుడా||

3. సీయోను శిఖరాగ్రము నీ సింహాసనమాయెనా (2)
సీయోనులో నిను చూడాలని
ఆశతో ఉన్నాను నా యేసయ్యా (2)
నీకే వందనం నీకే వందనం (2)        ||నజరేయుడా||`,keywords:["najareyuda na yesayya","najareyuda nayesayya","najarayuda na yesayya","najareyuda naa yesayya","hosanna ministries","worship"],video:"",artist:"Hosanna Ministries",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"నడ్పుమీ, మహా యెహోవా లోక యాత్ర యందున",lyrics:`1. నడ్పుమీ, మహా యెహోవా
లోక యాత్ర యందున
నీదు శక్తి నాకు దిక్కు
నన్ రక్షింపఁ జేఁపట్టు
దివ్య మన్నా, దివ్య మన్నా
నా కాహారమై యుండు.

2. ఊటగా స్వచ్ఛజలంబు
బండనుండి పారనీ
అగ్ని మేఘ స్తంభాలచే
నడవిన్ నన్ దాఁటించుఁ
గొప్ప ప్రాపూ, గొప్ప ప్రాపూ
నాకు డాలవు సదా.

3. యొర్దాన్ నది దాఁటు వేళ
భీతు లెల్లఁ బాపుము
మృత్యు శ్రమ లన్ని నన్ను
క్షేమ కానాన్ జేర్చును
స్తుతి గీతి, స్తుతి గీతి
నీ కర్పింతు నిత్యము`,keywords:["nadpu mee maha yehoova","nadpumee maha yehova","nadpumi maha yehova","nadpu mi mahaa yehova","nadpumi maha yahova","andhra christian songs","andhra kraisthava keerthanalu","andhra christian song","aandhra kraisthava keerthanalu","4/4"],video:"",artist:"William Williams",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"నన్ను పిలచిన దేవా (నీ కృపయే కావలెను)",lyrics:`నన్ను పిలచిన దేవా – నన్ను ముట్టిన ప్రభువా
నీవు లేనిదే నేను లేనయ్యా (2)
నే జీవించునది నీ కృప – ఎదుగించునది నీ కృప
హెచ్చించునది నీ కృప మాత్రమే (2)
నీ కృపయే కావలెను – నీ కృపయే చాలును
నీ కృప లేకుంటేనే నేనేమి లేనయ్యా (2) యేసయ్యా …

1. ఒంటరిగా ఏడిచినప్పుడు ఓదార్చువారు లేరు
తొట్రిల్లి నడిచినప్పుడు ఆదుకొన్నవారు లేరు (2)
బిగ్గరగా ఏడిచినప్పుడు కన్నీరు తుడిచె కృప (2)
నీ కృప లేకుంటేనే నేను లేను
నీ కృప లేకుంటేనే నేనేమి లేను   ||నీ కృపయే|| 

2. నేనని చెప్పుటకు నాకేమి లేదు
సామర్థ్యం అనుటకు నాకని ఏమి లేదు (2)
అర్హత లేని నన్ను హెచ్చించినది నీ కృప (2)
నీ కృప లేకుంటేనే నేను లేను
నీ కృప లేకుంటేనే నేనేమి లేను  ||నీ కృపయే||`,keywords:["nannu pilichina deva","nannu pilichina dheva","4/4","nanu pilichina deva","nanu pilachina deva","nanu pilichina dheva","ni krupaye kavalenu","nee krupaye kavalenu","ne krupaye kavalenu","ne krupa ye kavalenu","nikrupa ye kavalenu","nanu pilachina dheva"],video:"",artist:"Benny Joshua",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"నన్ను కావగ వచ్చిన",lyrics:`నన్ను కావగ వచ్చిన నజరేయా యేసయ్యా
నేను పాపము చేసినా చూపావు నీ దయా
నన్ను ఎన్నడూ విడిచిపోకుమయ్యా
సిలువ నీడలో నన్ను దాచుమయ్యా
లోకమంతా నన్ను దోషిగ చూసినా
ప్రేమతోనే నన్ను చేరదీసిన   ||నన్ను|| 

1. నిన్ను విడచి దూరమైనా ధూళి నేనే యేసయ్యా
లోకాశలకు లోబడిన లోభిని నేనేనయ్యా
అందరు నన్ను అనాథ చేసి పోయినా
అంధకారమే నాకు బంధువై మిగిలినా
నా మదిలో మెదిలిన మోము నీదే నా యేసయ్యా  ||నన్ను|| 

2. నీ చరణములు చేరగానే నా గతి మారేనయ్యా
నీ శరణము వేడగానే నీది నాదిగా మారెనే
ఏ యోగ్యత నాకు లేకపోయినా
నీ వారసునిగా నన్ను ఎంచిన
ఇది ఊహకందని చిత్రమైన ప్రేమ నీదయ్యా    ||నన్ను||`,keywords:["nannu kaavaga vachina","nannu kaavaga","nanu kavaga","nannu kavaga","nannu kavaga vachina","nannu kaavaga vachina","7/4"],video:"",artist:"",genre:["General","Grace"],timeSignature:"7/8"},{id:l(),title:"నన్ను కన్నవారి కన్న మిన్నగ",lyrics:`నన్ను కన్నా వారి కన్నా మిన్నగా 
నన్ను ప్రేమించే నా యేసయ్య (2)

నీకే ఆరధన...నీకే ఆరధన
స్తుతి ఆరధన చేసెదన్ (2)

1. ఇంత కాలంగా క్షెమముగా ఉన్నామంటె
నీ కృపయేగా నా యేసయ్య (2)
నా శక్తి కాదయ్య నా బలము కాదయ్య
నీ చల్లని చూపే నా యేసయ్య ||నీకే ఆరధన||

2. ఎందుకు పనికిరాని ఈ ఎండిన ఎముకలలోని
నీ జీవం పోసి మరలా లేపితివి
నే బ్రతికున్నానయ్య నీవు చూస్తున్నావయ్య
ఒక మాట పలికిన చాలు యేసయ్య (2) ||నీకే ఆరధన||

3. నా పాప భారమును నీవు మోసినావయ్య
నా వెన్నుండి నను రక్షించావయ్య
నీ లాగ నన్నెవరు ప్రేమించలేదయ్య
నిన్ను విడచి నే ఉండలేనయ్య ||నీకే ఆరధన||`,keywords:["nannu kanna vaari kanna","nanu kana vari kanna","nannu kanna vari kanna","nannu kanna","nannu kanna vari","nannu kanna vari kanna","intha kaalamuga","intha kalamuga","intha kalamga","intha kalam ga","entha kalam ga","entha kalamuga","inta kalamuga","inthaa kalamuga","4/4"],video:"",artist:"K. Sudharsan",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"నన్ను గన్నయ్య రావె నా యేసు",lyrics:`నన్ను గన్నయ్య రావె నా యేసు
నన్ను గన్నయ్య రావె నా ప్రభువా        ||నన్ను||

1. ముందు నీ పాదారవిందము
లందు నిశ్చల భక్తి ప్రేమను (2)
పొందికగా జేయరావే నా
డెందమానంద మనంతమైయుప్పొంగ       ||నన్ను||

2. హద్దులేనట్టి దురాశల
నవివేకినై కూడి యాడితి (2)
మొద్దులతో నింక కూటమి
వద్దయ్య వద్దయ్య వద్దయ్య తండ్రి       ||నన్ను||

3. కాలము పెక్కు గతించెను
గర్వాదు లెడదెగవాయెను (2)
ఈ లోకమాయ సుఖేచ్ఛలు
చాలును జాలును జాలు నోతండ్రి       ||నన్ను||

4. దారుణ సంసార వారధి
దరి జూపి ప్రోవ నీ కన్నను (2)
కారణ గురువు లింకెవ్వరు
లేరయ్య – లేరయ్య లేరయ్య తండ్రి       ||నన్ను||

5. నా వంటి దుష్కర్మ జీవిని
కేవలమగు నీదు పేర్మిని (2)
దీవించి రక్షింపనిప్పుడే
రావయ్య రావయ్య రావయ్య తండ్రి       ||నన్ను||`,keywords:["nannu gannayya raave na yesu","nannu gannayya","nanu ganayarave","nanu ganaye","nannu ganaya","andhra christian hymn","4/4"],video:"",artist:"Purushotham CHowdary",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"నన్ను దిద్దుము చిన్న ప్రాయము",lyrics:`నన్ను దిద్దుము చిన్న ప్రాయము – సన్నుతుండగు నాయనా
నీవు కన్న తండ్రి వనుచు నేను – నిన్ను చేరితి నాయనా  ||నన్ను||

1. దూరమునకు బోయి నీ దరి – జేర నైతిని నాయనా
నేను కారు మూర్ఖపు పిల్లనై కా – రడవి దిరిగితి నాయనా   ||నన్ను||

2. మంచి మార్గము లేదు నాలో – మరణ పాత్రుండ నాయనా
నేను వంచితుండ నైతిని ప్ర-పంచమందున నాయనా    ||నన్ను||

3. చాల మారులు తప్పిపోతిని – మేలు గానక నాయనా
నా చాల మొరల నాలకించుము – జాలిగల నా నాయనా   ||నన్ను||

4. జ్ఞాన మంతయు బాడుచేసి- కాన నైతిని నాయనా
నీవు జ్ఞానము గల తండ్రి మంచు – జ్ఞప్తి వచ్చెను నాయనా   ||నన్ను||

5. కొద్ది నరుడను దిద్ది నను నీ – యొద్ద జేర్చుము నాయనా
నీ యొద్ద జేర్చి బుద్ధి చెప్పుము – మొద్దు నైతిని నాయనా   ||నన్ను||

6. ఎక్కడను నీవంటి మార్గము – నెరుగ నైతిని నాయనా
నీ రెక్క చాటున నన్ను జేర్చి – చక్కపరచుము నాయనా   ||నన్ను||

7. శత్రువగు సాతాను నన్ను – మిత్రు జేయను నాయనా
యెన్నో సూత్రములు గల్పించెను నా – నేత్రముల కో నాయనా   ||నన్ను||

8. వాసిగా నే బాప లోకపు – వాసుడ నో నాయనా
నీ దాసులలో నొకనిగా నను జెసి కావుము నాయనా   ||నన్ను||`,keywords:["nannu dhuddhumu chinna prayamu","nannu dhidhumu chinna prayamu","nannu dhidhumu chinna prayamu","andhra christian hymn","7/8"],video:"",artist:"Mangamuri Devadasu",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"నన్ను బలపరచు యేసునందే నేను",lyrics:`నన్ను బలపరచు యేసునందే నేను
సర్వము చేయగలను
నన్ను స్థిరపరచు క్రీస్తునందే నేను
సమస్తం చేయగలను
సాధ్యము కానిది ఏదియు లేదే
అన్ని సాధ్యమే యేసులో
సాధ్యము కానిది ఏదియు లేదే
అన్ని సాధ్యమే క్రీస్తులో        ||నన్ను బలపరచు||

1. నీటిని చీల్చి - బాటను వేసి - నరులను నడిపించెనే
బండను చీల్చి - దాహము తీర్చ - నీటిని పుట్టించెనే
నీటిని ద్రాక్షా రసముగ మార్చెనే
నీటిపై నడిచెనే - నీటినే అణచెనే
నా కన్నీటిని నాట్యముగ మార్చెనే
జీవ జలమైన నా యేసయ్యా...         ||సాధ్యము||

2. హోరేబు కొండపై - మండే పొద నుండి - మోషేతో మాట్లాడెనే
బలిపీఠముపై - అగ్నిని కురిపించి - మహిమను కనుపరచెనే
షద్రకు మేషాకు అబేద్నెగోలను
అగ్నిలో ఉండియే కాపాడెనే
నరకపు మంటనుండి నను రక్షించిన
అగ్ని నేత్రాల నా యేసయ్యా...         ||సాధ్యము||
`,keywords:["nannu balaparachu yesu nandhe","nanu balaparachu yeesu nandhe","nanu balaparachu yesu nandhe","nannu balaparachu yeesu nandhe"],video:"",artist:"Hadlee Xavier & Kranthi Chepuri",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నన్నింతకాలం కాపాడినావు",lyrics:`నన్నింతకాలం కాపాడినావు
నీ కృపతో నన్ను బ్రతికించినావు

నీ కృపలకై వందనం నీ ప్రేమకై వందనం

1. ఏ తెగులు నా గుడారం సమీపించనీయక 
నా క్షేమాధారమై భద్రపరచినావు 
ఏ దిగులు నా హృదిని కలవరింపజేసిన 
నాకు తోడైయుండి బలపరచినావు
నా కష్టసమయాలలో వెన్నంటి నిలిచావు
నా ఎబెనెజరువై నన్నాదుకున్నావు
నా కాపరీ వందనం నా రక్షకా వందనం 

2. ఈ ఘడియలో నేను నిలిచియున్నానంటే 
యెడతెగక నిలిచున్న నీ వాత్సల్యమే కారణం
నే జడియకుండా ముందుకు కొనసాగుటకు నీ 
ఆలోచన చొప్పున  నను నడిపించు ప్రతిక్షణం 
నీలో స్థిరముగా నే నిలిచియుండుటకు 
నీయందు నే నిలిచి బహుగా ఫలించుటకు 
నీ బాటలో నడుపుమా నీ శక్తితో నింపుమా 

3. ఎందరో గొప్పవారు గతియించిపోయిన 
ఎందుకో నన్ను నీవు బ్రతికించుచున్నావు 
ఏ మంచి లేని నన్ను నీవు కనికరించి 
నాదు ఆయుష్కాలం పొడిగించుచున్నావు 
నన్నింక బ్రతికించుటలో నీ చిత్తమేంటో 
నా ద్వారా జరగవలసిన నీ పనియేంటో
బోధించి నడిపించుమా నీ పాత్రగ నన్నుంచుమా`,keywords:["నన్నింతకాలం కాపాడినావు","ninnintha kalam kaapadinaavu","ninintha kalam kapadinavu","nannentha kalam kapadinaavu","ninnintha kaalam kaapadinaavu","nannu intha kalam kaapadinaavu"],video:"",artist:"Rajesh Jaladi, Jakie vardhan , Sreshta Karmoji",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నన్నెంతగా ప్రేమించితివో - నిన్నంతగా దూషించితినో",lyrics:`నన్నెంతగా ప్రేమించితివో
నిన్నంతగా దూషించితినో
నన్నెంతగా నీవెరిగితివో
నిన్నంతగా నే మరచితినో

గలనా... నే చెప్పగలనా
దాయనా ... నే దాయగలనా
అయ్యా... నా యేసయ్యా
నాదం... తాళం... రాగం
ఎదలో నీదే ఈ ప్రేమ స్వరము

1. ఏ రీతిగా నా ఉదయమును ... నీ ఆత్మతో దీవించితివో
ఏ రీతిగా నా భారమును ... నీ కరుణతో మోసితివో
ఏ రీతిగా నా పలుకులో ... నీ నామమును నిలిపితివో
ఏ రీతిగా నా కన్నీటిని .... నీ ప్రేమతో తుడిచితివో    ||గలనా|| 

2. ఏ రీతిగా నా రాతను ... నీ చేతితో రాసితివో
ఏ రీతిగా నా బాటను... నీ మాటతో మలిచితివో
ఏ రీతిగా నా గమ్యమును ... నీ సిలువతో మార్చితివో
ఏ రీతిగా నా దుర్గమును ... నీ కృపతో కట్టితివో   ||గలనా||`,keywords:["nannenthaga preminchithivo","nannenthaga preeminchithivo","nanentaga preminchitivo"],video:"",artist:"Joshua Shaik, Nissy John & K.Y.Ratnam",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నమ్మకమైన దేవుడవైన నీవే చాలు యేసయ్యా",lyrics:`నమ్మకమైన దేవుడవైన నీవే చాలు యేసయ్యా (2)
నేనేమైయున్నా ఏ స్థితిలో ఉన్నా (2)
ఇంకేమి కోరుకోనయ్యా (2)   ||నమ్మకమైన||

1. ఆప్తులైన వారే హాని చేయచూసినా
మిత్రులే నిలువకుండినా (2)
న్యాయము తీర్చే నీవు నాకుంటే (2)
చాలు యేసయ్యా (2)   ||నమ్మకమైన||

2. జ్ఞానమంత చూపి శక్తి ధారపోసినా
నష్టమే మిగులుచుండినా (2)
శాపము బాపే నీవు నాకుంటే (2)
చాలు యేసయ్యా (2)  ||నమ్మకమైన||

3. కష్ట కాలమందు గుండె జారిపోయినా
గమ్యమే తెలియకుండినా (2)
సాయము చేసే నీవు నాకుంటే (2)
చాలు యేసయ్యా (2)  ||నమ్మకమైన||`,keywords:["nammakamaina","nammakamina","namakamaina","namma ka maina","nammaka maina","namma kamaina","nammakamaena","nammakamayna","nammakamainaa","ar stevenson","stevenson","6/8"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నా ఆధారము ఆశ్రయం",lyrics:`నా ఆధారము ఆశ్రయము నీవేగా ఆదరణ (2)

హో హల్లెలూయా హో హల్లెలూయా 
హల్లెలూ  హల్లెలూయా 

1. నా కొండయు నా కోటయు నీవేగా నా కేడెము (2) ||హో హల్లెలూయా||

2. నా నీరిక్షణ రక్షణ నీవేగా నా పోషణ (2) ||హో హల్లెలూయా||`,keywords:["na aadhaaramu asrayamu","na aadhaaramu","naa aadharamu","naa aadhaaramu","na aadharamu","na adharamu","naa adharamu","na adhaaramu","naa aadhaaram","na aadaram","na aadaramu","na adaram","na adaramu","naa adaram","naa adaramu","naa aadaram","naa aadaramu","naa aadaaram","naa aadaaramu","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"నా కనుల వెంబడి కన్నీరు రానీయక",lyrics:`నా కనుల వెంబడి కన్నీరు రానీయక
నా ముఖములో దుఖమే ఉండనీయక
చిరునవ్వుతో నింపినా యేసయ్యా (2)
ఆరాధనా ఆరాధనా నీకే (4)             ||నా కనుల||

1. అవమానాలను ఆశీర్వాదముగా
నిందలన్నిటిని దీవెనలుగా మార్చి (2)
నేను వేసే ప్రతి అడుగులో నీవే నా దీపమై (2)      ||చిరునవ్వుతో||

2. సంతృప్తి లేని నా జీవితములో
సమృద్ధినిచ్చి ఘనపరచినావు (2)
నా మురికి జీవితాన్ని ముత్యముగా మార్చి (2)        ||చిరునవ్వుతో||`,keywords:["na kanula venbadi kanniru raaniyaka","na kanula venbade kanniru raniyyaka","nakanula venbadi kanneru ranikkaya","chirunavvu tho nimpinaa yesayya","chirunavu thi nimpina","chirunavuto nimpina","cherunavu tho nimpina"],video:"",artist:"K. Y. Ratnam & John Nisse",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా కింత ప్రోత్సాహా",lyrics:`నా కింత ప్రోత్సాహా - నందంబుల్ గల్గుట - కే కర్త ఘనమైన - హేతువై యుండు

నాకు గల యున్నత కతమ్మే - నాధుఁ డగును నేను మురియు - శ్రీకరంబగు నామ మేది - సిల్వఁబడ్డ యేసు క్రీస్తే ॥నా కింత॥

1.ఎవరు నా భక్తికి - హితమైనట్టి పునాది - యెవరు నా కంఠంబు - నెత్తెన్ పాటలతో
ఎవరు నా పాపముల - భారము నెత్తుకొని దేవునికి నాకును - చివరకున్ స్నేహంబు కలిపిరి - సిల్వఁబడ్డ యేసు క్రీస్తే ॥నా కింత॥

2.నేను నా విధు లెల్ల - నిశ్చయంబుగ నెఱుఁగ - జ్ఞాన మిచ్చుచునుండు జ్ఞాని యెవ్వారు
వాని యెడల నను యధార్థ - పరునిగాఁ గావించి యవినా - చే నెరవేర్పించు నెవరు - సిల్వఁబడ్డ యేసు క్రీస్తే ॥నా కింత॥

3.ఎవరు నా శత్రువు - నెదిరించి గెల్చిరి - యెవరు నా శోకంబు - నెగురం గొట్టిరి
ఎవరు నా హృదయంపు మూర్ఛను - నీడ్చి సేదను దీర్చి మనసు - చివుకు మను గాయంబు మాన్పిరి - సిల్వఁబడ్డ యేసుక్రీస్తే ॥నా కింత॥

4.మరణంబులో నాకుఁ - జిర జీవ మెవ్వారు - మరణంబునకె గొప్ప మరణ మెవ్వారు
విరివిలేని మహిమ సేలు - దరిని నుండఁగ నన్నుఁ జెంతను - స్థిరముగ స్థాపించు నెవరు - సిల్వఁబడ్డ యేసుక్రీస్తే ॥నా కింత॥

5.నన్ను రక్షింప మర ణం బొందియు సమాధి - నెన్నటికిని గెల్చి - యున్న ప్రభునందు
నున్న విశ్వాంసబె నాకు నుత్సవంబును గలుగ జేయును - చెన్నగు నా ప్రభు విఁ కెవ్వరు - సిల్వఁ బడ్డ యేసు క్రీస్తే ॥నా కింత॥`,keywords:["nakintha prothsaha","naku nintha prothsaha","nakentha prothsaha","andhra christian hymn","7/8"],video:"",artist:"Mangamuri Devadasu",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"నాకు ఆధారామైన యేసయ్య",lyrics:`నాకు ఆధారామైన యేసయ్య
ఆనుకొందును నీపై అనుక్షణము
ఆనుకొందును నీపై అనుక్షణము (2)
నాకు ఆధారామైన యేసయ్య

1. నా దుఃఖములో ఓదార్పు నీవై
విశ్వాసమునకు ఆధారమైన(2)
మితిలేని కనికరం నాపై చూపి(2)
నా రక్షణకు ఆధారమైతివి (2)

2. నా ధీన స్థితిపై జాలి చూపి
నీరీక్షణకు ఆధారమైన (2)
హద్దు లేని నీ ప్రేమ నా హృది తాకగా (2)
నే పరుగేడుదును నీ ఆగ్నేలందున (2)

3. నా హృదయ భారం నీవు మోసి
వాగ్దానములకు ఆధారమైన(2)
పరిశుద్దాత్మతో అభిషేకించి(2)
నాగ్నెనమునకు ఆధారమైతివి(2)`,keywords:["naaku aadharamaina yesayya","naku aadharamaina yesayya","naku adharamaina yesaya","naaku adharamaina yesayya"],video:"",artist:"JK Christopher, Ps. P. Simonu, G. Daya Babu, Sharon, Lillian & Hana Joyce",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నాకు నీవే కదా ఆధారం",lyrics:`నాకు నీవే కదా ఆధారం 
నేనడిచెదను నీతో నిత్యం 

జాలి చూపవా నాపై జాలి చూపవా ||నాకు నీవే||

1. గాలి వానలతో నేను కలత చెందితిని
మంచి రోజులు నాకు రావనుకుంటిని 
నాపై జాలిపడిన ప్రభువా 
గొప్ప ధనస్సు గా వచ్చితివా ||నాకు నీవే||

2. నిత్య మహిమకు నిలయుడవు నీవు    
నీదు ఆత్మతో నన్ను నింపెదవు 
గుండె బరువెక్కి పోయిన వేళ 
నీ మాటే కదా ఆధారం ||నాకు నీవే||

3. నీవు లేకుంటే బ్రతుకలేనయ్యా
నీవు రాకుంటే నడవలేనయ్యా
మనసు ఓదార్పు నొందనివేళ 
నీ ప్రేమే కదా ఆధారం ||నాకు నీవే||`,keywords:["నాకు నీవే కదా ఆధారం","naaku neeve kadha aadharam","naku neeve kadha adharam","naaku nive kadha aadharam","naku nive kada aadharam","naku neve kada adaram"],video:"",artist:"Pas.Shalemraj, Sireesha, Sandy",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా కోసమా ఈ సిలువ యాగము",lyrics:`నా కోసమా ఈ సిలువ యాగము
నా కోసమా ఈ ప్రాణ త్యాగము (2)
కల్వరిలో శ్రమలు నా కోసమా
కల్వరిలో సిలువ నా కోసమా (2) || నా కోసమా ||

1. నా చేతులు చేసిన పాపానికై
నా పాదాలు నడచిన వంకర త్రోవలకై (2)
నీ చేతులలో - నీ పాదాలలో
నీ చేతులలో - నీ పాదాలలో
మేకులు గుచ్చినారే (2)
యేసయ్యా నాకై సహించావు
యేసయ్యా నాకై భరించావు (2) || నా కోసమా ||

2. నా మనస్సులో చెడు తలంపులకై
నా హృదిలో చేసిన అవిధేయతకై (2)
నీ శిరస్సుపై - నీ శరీరముపై
నీ శిరస్సుపై - నీ శరీరముపై
ముళ్ళను గుచ్చినారే (2)
యేసయ్యా నాకై సహించావు
యేసయ్యా నాకై భరించావు (2) || నా కోసమా ||`,keywords:["nakosama ee siliva","naakosama ee siliuva yaagamu","nakosama ee siluva","na kosama","na kosama ee siluva","naa kosama","naa koosama","na koosama","naakosama ye siluva","lent","Cross","goodfriday","good friday","3/4"],video:"",artist:"Hadlee Xavier",genre:["Cross","Good Friday","Lent"],timeSignature:"3/4"},{id:l(),title:"నాకై చీల్చబడ్డ యో",lyrics:`1. నాకై చీల్చబడ్డ యో
నా యనంత నగమా
నిన్ను దాగి యందున్న
చేను మీర బారెడు
రక్త జలధారలా
శక్తి గ్రోలగా నిమ్ము

2. నేను నాదు శక్తిచే
నిన్ను గొల్వజాలను
కాల మెల్ల నేడ్చినన్
వేళా క్రతుల్ చేసినన్
నేను చేయు పాపము
నేనే బాప జాలను

3. వట్టి చేయి చాచుచున్
ముట్టి సిల్వ జేరెదన్
దిక్కు లేని పాపిని
ప్రక్క జేర్చి ప్రోవుము
నా కళంక మెల్లను
యేసునాథ, పాపుము

4. ఈ ధరిత్రియందున
నీరు దాటునప్పుడు
నాదరించి నీ కడన్
నాకై చీల్చబడ్డయో
నా యనంత శైలమా
నన్ను జేర దీయుమా`,keywords:["nakai cheelcha badda yo","andhra christian hymns","naakai cheelchabaddayo","nakai cheelchabadda","naakai chilchabadda","4/4"],video:"",artist:"H. Harms",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"నాకై ధీనునిగా భువికి వచ్చినావయా",lyrics:`1. నాకై ధీనునిగా భువికి వచ్చినావయా 
పశువుల పాకలో పుట్టిన యేసయ్య 
దివా రాత్రములు స్తుతికి అర్హుడ నీవయా 
స్థిరమైన ఇల్లు నీకు లేకుండెనా 

ఆకాశ పక్షులకు గూళ్ళు ఉండే 
నక్కలకు బొరియలుండే 
మనుష కుమారునికి స్థలమే లేకుండెనే
భూమి పునాదులు వేసిన వానికి
సృష్టినంతటిని చేసిన వానికి
పశువుల పాకే మిగిలెనే

ఐనా నీవు తిరిగి వెళ్ళలేదయ్యా
ఐనా నీవు విడచి వెళ్ళలేదయ్యా
మాతో నివసించినావయా

Chorus:
కన్నీటిని తుడిచే దైవమా
కిరీటము విడచినావుగా
కృంగి పడిన వేళలో
కదలి వచ్చినావయా
నలిగిన రెల్లును విరువవు
నీ ప్రేమతో చేర్చుకొందువు
అనాధగా ఎన్నడు విడువవు
ఆధారం నీవై యుందువు

2. రాజువైనను రథమును కోరలేదయా
సామాన్యునిగా మాతో నడచితివే 
రాజులందరు రాజ నగరిలో ఉండగా
నీవు వీధులలో మాతో నడచితివే

నీవు రాజువని నిన్ను పొగడక
నీకు పాపియని పేరిచ్చిరే
అది ఊరు వాడా ప్రకటించుచు వచ్చిరే
నీవు రోగులను స్వస్థపరచినా
దురాత్మలను వెళ్ళగొట్టినా 
నిన్ను దయ్యము పట్టిన వాడని పిలచిరే

ఐనా వీధులలో మాతోనే నడచితివే
ఐనా ఆపక ప్రేమను మాపై చూపితివే
మా మధ్యలో కదలిన దైవమా

గ్రుడ్డివారు చూపును పొందిరే
కుంటివారు నడువ సాగిరే
మూగవారు నిన్నే పాడుచు
నీ కార్యమునే వివరించిరే
తుఫాను నిలచిపోయెనే
సంద్రము నిర్మలమాయెనే
శాశ్వత ప్రేమకు సమస్తము
సాధ్యమని పాడిరే

కన్నీటిని తుడిచే దైవమా
కిరీటము విడచినావుగా
కృంగి పడిన వేళలో
కదలి వచ్చినావయా
నలిగిన రెల్లును విరువవు
నీ ప్రేమతో చేర్చుకొందువు
అనాధగా ఎన్నడు విడువవు
ఆధారం నీవై యుందువు`,keywords:["naakai dheenuniga bhuviki","nakai dhenuniga","naakay dhenuniga","dheenudu","deenudu","nakai dhinuniga","nakai denuniga","good friday","lent"],video:"",artist:"Pastor Vinod Kumar & Pastor Benjamin Johnson",genre:["Good Friday","Lent","Easter","Worship","Love"],timeSignature:"4/4"},{id:l(),title:"నా గానం నా ప్రాణం నీ కోసమే నా యేసయ్య",lyrics:`నా గానం నా ప్రాణం నీ కోసమే నా యేసయ్య 
నా ధ్యానం నా సర్వం నీతోనే నా యేసయ్య (2)

యేసయ్య... యేసయ్య ... నా మంచి కాపరివి
నీ వేనయ్య 
యేసయ్య... యేసయ్య... నా కున్న దైర్యము
నీ వేనయ్య  

నా గానం నా ప్రాణం నీ కోసమే నా యేసయ్య 
నా ధ్యానం నా సర్వం నీతోనే నా యేసయ్య

1. నా కంఠ స్వరమును మధురముగా చేసితివి 
నాకున్న పదములు గానముగా మార్చితివి (2)
ఏమిచ్చి నీ ఋణము నే తీర్చను 
ఏ రీతి నిన్ను స్తుతియింతును (2)
        
యేసయ్యా నా గానం నీ కోసమే 
యేసయ్య నా ప్రాణం నీ కోసమే (2) ||నా గానం||

2. నా పాప బ్రతుకును పరిశుద్ధ పరిచితివి 
నన్ను నీ పనివానిగా మార్చివేసితివి (2)

ఎలా మరువగలనయ్య నీ మేలులను 
ఎలా ఆపగలనయ్య నీ దీవెనలు (2)
     
యేసయ్యా నా గానం నీ కోసమే 
యేసయ్య నా ప్రాణం నీ కోసమే (2) ||నా గానం||`,keywords:["na gaanam na pranam nikosame","naganam napranam","naa gaanam naa praanam","na ganam na pranam ni kosame"],video:"",artist:"Ratna Babu, Sandeep, Sireesha Bhagavatula",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నా చిన్ని హృదయముతో",lyrics:`నా చిన్ని హృదయముతో
నా గొప్ప దేవుని నే ఆరాధించెదన్
పగిలిన నా కుండను
నా కుమ్మరి యొద్దకు తెచ్చి
బాగుచేయమని కోరెదన్ (2)

హోసన్న హోసన్నా యూదుల రాజుకే
హోసన్న హోసన్నా రానున్న రారాజుకే

1. మట్టి నుండి తీయబడితిని
మరలా మట్టికే చేరుదును (2)
మన్నైన నేను మహిమగ మారుటకు
నీ మహిమను విడచితివే (2)

హోసన్న హోసన్నా యూదుల రాజుకే
హోసన్న హోసన్నా రానున్న రారాజుకే (2)

2. అడుగులు తడబడిన వేళలో
నీ కృపతో సరి చేసితివే (2)
నా అడుగులు స్థిరపరచి నీ సేవకై
నడిచే కృప నాకిచ్చితివే (2)

హోసన్న హోసన్నా యూదుల రాజుకే
హోసన్న హోసన్నా రానున్న రారాజుకే (2)

3. ఈ లోక యాత్రలో
నాకున్న ఆశంతయూ (2)
నా తుది శ్వాస విడచే వరకు
నీ పేరే ప్రకటించాలని (2)

హోసన్న...హోసన్న...హోసన్న...హోసన్న...  (4)

హోసన్న హోసన్నా యూదుల రాజుకే
హోసన్న హోసన్నా రానున్న రారాజుకే (2)`,keywords:["na chinni hrudhayamu","na chinni hrudhayam","naa chinni hrudhayamutho","hosanna hosanna","nachinni hrudayamutho","naachinnihrudhayamutho","na chinni hrudayamuto","hosana","na chini hrudayamuto","na chini hrudayamto","nachini hrudayamto","nachinnihrudayamtho","3/4"],video:"https://www.youtube.com/embed/udne5IfgGl4?start=1078",artist:"Vinod Kumar & Benjamin Johnson",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"నా చెలిమి కోరి - నీ కలిమి వీడి/నిజ స్నేహితుడా",lyrics:`నా చెలిమి కోరి - నీ కలిమి వీడి
నా చెంత చేరావు శ్రీమంతుడా!
నా రక్షణ కొరకై -  ఆ శిక్షను పొంది
బలియాగమైన నిజ స్నేహితుడా! (2)

1. ద్రోహినై - దూరమైతిని
పాపినై - పరుగులెడితిని
గమ్యమే - ఎరుగనైతిని
మరణమే - శరణమాయెను

ఎంతో ప్రేమించితివి - నాస్థానమందు నిలిచితివి
కృపతో నను రక్షించితివి - నా దోషశిక్ష భరించితివి   ||నా చెలిమి||
 
2. నిందలు - అవమానములు
హేళనలు - చీత్కారములు
కఠిన దెబ్బలు - ముళ్లపోటులు
శిలువ భారం - కాయమంతా గాయం

హృదినే బాధించినా -  భరించావు వేదన మౌనముగా
తనువే తల్లడిల్లినా -  తృప్తినొందావు నను తలచుకొని    ||నా చెలిమి||

Closing:
ఏ రీతి నిన్ను -  కీర్తించగలను?
నా నీతి నీవే ఓ యేసుదేవా!
నీ సాక్షిగా నిలిచి - నీ ప్రేమను చాటి
ఘనపరతును నిన్నే ప్రియ స్నేహితుడా!`,keywords:["naa chelimi","na chelimi","naa chelime","na chilimi","na chelime","naa chilimi","na chelimie","hadlee xavier","good friday","lent","nija snehithuda","nija snehituda","niga snehituda","neja snehithuda"],video:"",artist:"Hadlee Xavier, Surya Prakash Injarapu, & Joshua Katta",genre:["Good Friday","Lent"],timeSignature:"3/4"},{id:l(),title:"నా చేరువై నా స్నేహమై",lyrics:`నా చేరువై నా స్నేహమై
నను ప్రేమించే నా యేసయ్య

నీ ప్రేమలోనే నేనుండిపోనీ
నీ సేవలోనే నను సాగనీ
నీ ధ్యాసలోనే మైమరచిపోనీ
నీ వాక్కు నాలో నెరవేరనీ

నా వరం నా బలం నీవే నా గానం 
నా ధనం నా ఘనం నీవే ఆనందం 
తోడుగా నీడగా నీవే నా దైవం
ఎన్నడూ మారనీ ప్రేమే నా సొంతం

1. నా వేదనందు - నా గాయమందు 
నిను చేరుకున్నా -  నా యేసయ్య

నీ చరణమందు - నీ ధ్యానమందు
నిను కోరుకున్నా - నీ ప్రేమకై

కరుణించినావు నను పిలచినావు
గమనించినావు ఘనపరచినావు
నీవేగా దేవా నా ఊపిరి

2. నా జీవితాన - ఏ భారమైన
నీ జాలి హృదయం - లాలించెనే 

ప్రతికూలమైన - ఏ ప్రళయమైన 
ప్రణుతింతు నిన్నే - నా యేసయ్య 

విలువైన ప్రేమ కనపరచినావు 
బలపరచి నన్ను గెలిపించినావు 
నీవేగా దేవా నా ఊపిరి`,keywords:["na cheruvai","naa cheeruvai","na cheeruvai","naa cheruvai","na cheruy","naa cheruy","na cheruvai na snehamai","kamalakar","pranam kalamakar","na cheruvi","na cheruvy","naa cheruvy","naa cheruvi","4/4"],video:"",artist:"Pranam Kamlakhar",genre:["General","Friendship","Comfort"],timeSignature:"4/4"},{id:l(),title:"నా జీవితములో వెలుగై నిలిచినా",lyrics:`నా జీవితములో వెలుగై నిలిచినా
జోతిర్మయుడైన నా యేసురాజును
ఆత్మతో సత్యముతో ఆరాధించెదా (2)

1. తండ్రి తనయునిపై జాలి పడినట్టుగా
తండ్రిగా నాపై జాలి చూపిస్తివే   (2)
కరుణమయుడైన నా యేసురాజుని
ఆత్మతో సత్యముతో ఆరాధించెదా (2) ||నా జీవితములో||

2. తల్లి మరచినా మరువనంటివే
శాశ్వత ప్రేమతో నను ప్రేమిస్తివే   (2)
ప్రేమామయుడైనా ఆ యేసునాధుని
ఆత్మతో సత్యముతో ఆరాధించెదా  (2)   ||నా జీవితములో||`,keywords:["naa jeevithamulo","na jeevithamulo","na jivithamulo","na jeevitham lo","naa jevithamulo","na jevitamulo","naa jeevitham lo","na jeevithamlo","na jivitham lo","naa jivitham lo","","najeevithamlo","najivithamulo","naa jivithamulo","6/8"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నా జీవితకాలమంత నిను కీర్తించిన చాలునా",lyrics:`నా జీవితకాలమంత నిను కీర్తించిన చాలునా
నా సమస్త సంపద నీకిచ్చిన చాలునా
యేసు నీదు మేలులకై నే బదులుగా ఏమిత్తును
నా దేహమే యాగముగా అర్పించిన చాలునా   ||నా జీవిత||

1. నా బాల్యమంతా నా తోడుగ నిలిచి
ప్రతి కీడు నుండి తప్పించినావు
యవ్వనకాలమున నే త్రోవ తొలగిన
మన్నించి నాతోనే కొనసాగినావు
ఎన్నో శ్రమలు ఆపదలన్నిటిలో
నను దైర్యపరిచి నను ఆదుకున్నావు
యేసు నీవే నీవే యేసు 
నీవే నా సర్వస్వమూ  ||నా జీవిత||

2. కన్నీటి రాత్రులు నే గడిపిన వెంటనే
సంతోష ఉదయాలు నాకిచ్చినావు
హృదయాశలన్ని నెరవేర్చినావు
యోగ్యుడను కాకున్న హెచ్చించినావు
ఎంతో ప్రేమ మితిలేని కృపను
నాపై చూపించి నను హత్తుకున్నావు
యేసు నీవే నీవే యేసు 
నీవే నా ఆనందమూ   ||నా జీవిత||`,keywords:["naa jeevitha kaalamantha, na jivitha kalamantha","naa jeevitha kaalamantha","naajeevithakalamantha","na jeevitha kalam antha","na jivitha kalam antha","naa jeevitha kalamantha","naa jivitha kalamantha","na jevitha kalamantha","na jeevitha kalamantha","na jeevitha kaalamantha","naa jevitha kaalamantha","3/4"],video:"",artist:"Joel Kodali, Hadlee Xavier, Naresh Iyer",genre:["Worship","Hope","Comfort"],timeSignature:"3/4"},{id:l(),title:"నా జీవిత నావను నాకై నేను నడుపలేను",lyrics:`నా జీవిత నావను నాకై నేను నడుపలేను (2)

అయినా తీరం చేరగలను 
యేసుతో కలిసి నేను (2) ||నా జీవిత నావను||

1. ఎగిరిపడుతున్న కెరటాలతో - సాగకున్నది పయనం 
సఫలమవదు నా ప్రయత్నం ||అయినా తీరం||

2. కమ్ముకొచ్చిన పొగమంచుతో - మూసుకున్నది మార్గం 
కానరాదు ఏ సహాయం ||అయినా తీరం||

3. కటిక చీకటి బెదిరింపుతో - ఆవిరైనది ధైర్యం 
జాడలేదు ఆశాకిరణం ||అయినా తీరం||`,keywords:["naa jeevitha naavanu nakai nenu","na jevitha navalo","na jivitha navalo","naa jivitha navalo","naa jeevitha naavalo","na jivitha navalo","naa jevetha navalo","stevenson"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:`నా జీవిత యాత్రలో
ప్రభువా నీ పాదమే శరణం`,lyrics:`నా జీవిత యాత్రలో
ప్రభువా నీ పాదమే శరణం
ఈ లోకమునందు నీవు తప్ప
వేరే ఆశ్రయం లేదు (2)       ||నా జీవిత||

1. పలు విధ శోధన కష్టములు
ఆవరించియుండగా (2)
కలత చెందుచున్న హృదయమును
కదలక కాపాడుము (2)       ||నా జీవిత||

2. నీ సన్నిధిలో సంపూర్ణమైన
సంతోషము కలదు (2)
నీదు కుడి హస్తములో నిత్యమున
నాకు సుఖ క్షేమముగా (2)       ||నా జీవిత||

3. ఈ లోక నటన ఆశలన్నియు
తరిగిపోవుచుండగా (2)
మారని వాగ్ధానములన్నియు
నే నమ్మి సాగెదను(2)       ||నా జీవిత||

ముందున్న సంతోషము తలంచి
నిందలను సహించి (2)
నీ సిలువను నే మోయుటకై
నీ కృప నాకీయుము (2)     ||నా జీవిత||

సీయోను యొక్క ఆలోచనతో
సదా నడిపించుము (2)
మహిమలో నీతోనే నిల్చుటకు
నా తండ్రి దయచూపుము (2)     ||నా జీవిత||`,keywords:["naa jeevitha yaathralo prabhuva ni paadhame saranam","na jeevitha yathralo prabhuva","na jivitha yathralo"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నా జీవిత వ్యధలందు యేసే జవాబు",lyrics:`నా జీవిత వ్యధలందు యేసే జవాబు
యేసే జవాబు – ప్రభు యేసే జవాబు (2)       ||నా జీవిత||

1. తీరని మమతలతో ఆరని మంటలలో
ఆశ నిరాశలతో తూలెను నా బ్రతుకే (2)
నను గని వచ్చెను – తన కృప నిచ్చెను
కరుణతో ప్రేమించి – కలుషము బాపెను        ||నా జీవిత||

2. చీకటి వీధులలో నీటుగా నడచితిని
లోకపు ఉచ్ఛులలో శోకము జూచితిని (2)
నను గని వచ్చెను – తన కృప నిచ్చెను
కరుణతో ప్రేమించి – కలుషము బాపెను        ||నా జీవిత||

3. హంగుల వేషముతో రంగుల వలయములో
నింగికి నేనెగిరి నేలను రాలితిని (2)
నను గని వచ్చెను – తన కృప నిచ్చెను
కరుణతో ప్రేమించి – కలుషము బాపెను        ||నా జీవిత||`,keywords:["naa jeevitha vyadhalandhu","na jevitha vyadhalandu","naa jevitha vyadhalandhu","naa jeevitha vyadhalandu","na jeevitha vyadhalandu","na jivitha vyadhalandu","naa jivitha vyadhalandu","na jeevita vyadhalandhu","na jevetha vyadhalandhu"],video:"",artist:"",genre:["General","Lent"],timeSignature:"4/4"},{id:l(),title:"నా జీవం నా సర్వం",lyrics:`నా జీవం నా సర్వం నీవే దేవా (2)
నా కొరకే బలి అయిన గొర్రెపిల్ల
నా కొరకే రానున్న ఓ మెస్సయ్యా ||నా జీవం||

1. తప్పిపోయిన నన్ను వెదకి రక్షించి
మంచి కాపరి నాకై ప్రాణమిచ్చితివే (2)
ఏమివ్వగలను నీ ఎనలేని ప్రేమకై
విరిగి నలిగిన హృదయమే నేనర్పింతును (2) ||నా జీవం||

నీవే నీవే నీవే దేవా (4)`,keywords:["naa jeevam naa sarvam","naa jeevam","na jevam","na gevam","naa geevam","na javam","naa jaavam","na zevam","naa zeevam","7/8"],video:"",artist:"Kripal Mohan",genre:["Worship"],timeSignature:"7/8"},{id:l(),title:"నా తలంపంతా నీవే యేసయ్యా",lyrics:`నా తలంపంతా నీవే యేసయ్యా నే కోరెదంతా నీతోడెకదయ్యా  (2)
ఉప్పొంగుతుంది నాలో నీ ప్రేమ - నీ సేవయే నాభాగ్యం యేసయ్యా

1. అణువణువు నా ప్రాణమంతా వేచియున్నది నీకై నిరతము  (2)
నీవే నాకు సర్వము ప్రభువా  (2)

2. నిన్ను ఎరుగక నశించిపోతున్న - ఆత్మలభారం నాలోరగిలే  (2)
నీకై నేను ముందుకు సాగెద  (2)

3. నలిగిపోతుంది నాప్రియ దేశం - శాంతిసమాధనం దయచేయుమయ్యా  (2)
రక్షణ ఆనందం నింపుము దేవా  (2)`,keywords:["నా తలంపంతా నీవే యేసయ్యా","naa thaalampantha neeve yesayya","na thalampantha neve yesayya","na thaalampantha neeve yesayya"],video:"",artist:"Bro Joe Madhu & Sis Veena Jessie",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నాతో మాట్లాడు ప్రభువా",lyrics:`నాతో మాట్లాడు ప్రభువా – నీవే మాట్లాడుమయ్యా (2)
నీవు పలికితే నాకు మేలయ్యా (2)
నీ దర్శనమే నాకు చాలయ్యా (2)   ||నాతో||

1. నీ వాక్యమే నన్ను బ్రతికించేది
నా బాధలలో నెమ్మదినిచ్చేది (2)   ||నీవు పలికితే||

2. నీ వాక్యమే స్వస్థత కలిగించేది
నా వేదనలో ఆదరణిచ్చేది (2)   ||నీవు పలికితే||

3. నీ వాక్యమే నన్ను నడిపించేది
నా మార్గములో వెలుతురునిచ్చేది (2)   ||నీవు పలికితే||`,keywords:["naatho matladu prabhuva","natho matladu prabhuva","natho matladu prabuva","nato matladu prabuva","nato matladu prabhuva","natho matlaadu","nato matlaadu","nato mataladu","stevenson","ar stevenson"],video:"",artist:"Dr. A. R. Stevenson",genre:["General","Prayer","Worship"],timeSignature:"3/4"},{id:l(),title:"నా తోడు నీవే దేవా, నా బలము నీవే ప్రభువా",lyrics:`నా తోడు - నీవే దేవా 
నా బలము - నీవే ప్రభువా 
నా ధైర్యం - నీవే దేవా 
నా సర్వం - నీవే ప్రభువా 
కాపాడే దైవం నీవేగా - కనుపాపగ నన్ను కాచేగా 
నీ దయలో - నీ కృపలో - నీ ఒడిలో నన్నిలలో 

1. నాలో కన్నీరే నీవైపే చూడగా 
నీవే యేసయ్య సంతోషం నింపగా  

నిట్టూర్పు లోయలలో - గాఢాంధకారములో 
నీవే నా అండగా నన్ను బలపరచగా 

నడిపించే వాక్యం నీవైతివే  
కరుణించే దైవం నీవైతివే  
నీ దయలో - నీ కృపలో 

2. ఎన్నో కలతలే  నామదిలో నిండగా  
నీవే యేసయ్య నావెంటే ఉండగా 
 
నా భయమును తొలగించి - విశ్వాసము కలిగించి 
నీవే నా అండగా నన్ను స్థిరపరచగా 

నీవుంటే చాలు నా యేసయ్య 
నీ ప్రేమే నాకు చూపావయ్యా  
నీ దయలో - నీ కృపలో`,keywords:["naathodu neeve prabhuva","nathodu nive prabhuva","na thodu neeve dheva","naathodu neeve dheeva","na thoodu neeve","nathodu nive dheva","na thodu neve dheva","naatodu nive prabhuva","kamalakar","pranam kmalakar","naa thodu neeve prabhuva"],video:"",artist:"Joshua Shaik, Pranam Kamlakhar, & Stephenson Undunty",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా తండ్రి నన్ను మన్నించు",lyrics:`నా తండ్రి నన్ను మన్నించు
నీకన్నా ప్రేమించే వారెవరు (2)

లోకం నాదే అని నిన్ను విడిచాను
ఘోర పాపిని నేను యోగ్యతే లేదు
ఓ మోసపోయి తిరిగి వచ్చాను
నీ ప్రేమనే కోరి తిరిగి వచ్చాను

1. నీదు బిడ్డగా పెరిగి – నీ ప్రేమనే చూడలేకపోయాను
నే చూచినా ఈ లోకం – నన్నెంతో మురిపించింది (2)
నీ బంధం తెంచుకొని – దూరానికే పరిగెత్తాను
నే నమ్మిన ఈ లోకం – శోకమునే చూపించింది ||లోకం||

2. నీ కన్నులు నా కొరకు – ఎంతగ ఎదురు చూచినవో
నిన్ను మించినా ప్రేమా – ఎక్కడ కనరాలేదు (2)
నే చనిపోయి బ్రతికానని – తిరిగి నీకు దొరికానని
గుండెలకు హత్తుకొంటివే – నీ ప్రేమా ఎంతో చూపితివె ||నా తండ్రి||`,keywords:["naa thandri nannu manninchu","naa thandri nannu manninchu","na thandri nanu maninchu","na tandri nannu maninchu","nathandri nannu manninchu","natandri nannu maninchu"],video:"",artist:"Starry Angelina Edwards",genre:["General","Repentance"],timeSignature:"4/4"},{id:l(),title:"నా తండ్రి నీవే నా దేవుడవు నీవే",lyrics:`నా తండ్రి నీవే - నా దేవుడవు నీవే
నా తండ్రి నీవే - నీవే ||నా తండ్రి||

యేసయ్యా... యేసయ్యా... యేసయ్యా.... యేసయ్యా
యేసయ్యా... యేసయ్యా... యేసయ్యా... యేసయ్యా ||నా తండ్రి||

1. నా అడుగులు తప్పటడుగులై - నడిచిన నా ప్రతి మార్గము
సరిచేయు నా తండ్రివి (2)
పగలు ఎండ దెబ్బయైనను - రాత్రి వెన్నెల దెబ్బయైనను
తగులకుండ కాచే నీ ప్రేమ

యేసయ్యా... యేసయ్యా... యేసయ్యా.... యేసయ్యా
యేసయ్యా... యేసయ్యా... యేసయ్యా... యేసయ్యా ||నా తండ్రి||

2. గాడాంధకార లోయలో - నే నడచిన ప్రతివేలలో
తోడున్న నా తండ్రివి (2)
వేయిమంది కుడి ఎడమకు - కూలినా కూలును కాని
చెదరకుండ నన్ను కాపడు ప్రేమ

యేసయ్యా... యేసయ్యా... యేసయ్యా... యేసయ్యా ||నా తండ్రి||
యేసయ్యా... యేసయ్యా... యేసయ్యా.... యేసయ్యా (4)`,keywords:["naa thandri neeve","na thandri neve","na thandri nive","na tandri nive","na tandri neeve","naa thandrineve","nathandri neeve","yesayya","yesaya","yeesayya","yeesaya","eesayya","esayya","4/4"],video:"",artist:"Ravinder Vottepu",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"నా దేవా నీవే సదా - నా తోడు నీవే కదా",lyrics:`నా దేవా నీవే సదా - నా తోడు నీవే కదా
ఇన్నాళ్ళ నీ ప్రేమ - నే మరతునా
వింతైన ఆ ప్రేమ - కొనియాడనా
 
1. నా దేవ నీ ప్రేమ - ఉదయించె నాలో
నీ పిలుపు నా కోసం - చిగురించె నాలో
ఎనలేని ఆనందం -  నీ నామ ధ్యానం 
విలువైన నీ వాక్యం - నా ఆత్మ దీపం
    
మనోహరా యేసయ్య - నా గురి నీవనీ 
మరీ మరీ కోరాను - నీ ముఖ కాంతినీ 
నిరతము పాడనా - నీ స్తోత్ర గానం

2. సరిలేని నా మార్గం - మలిచావు నీవు 
చిరకాల నీ స్నేహం - కురిపించినావు
ఇలలోన ఆధారం - కనిపించె నీలో
కరుణించు నా దైవం - తరియింతు నీలో

మనోహరా యేసయ్య - నా జత నీవనీ
మరీ మరీ కోరాను - నీ ముఖ కాంతినీ
నిరతము పాడనా - నీ స్తోత్ర గానం`,keywords:["naa dheva neeve sadha","nadheva neve sadha","na dheva nive sadha","naa dheva neve sadha"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Sireesha B",genre:["General","Love","Hope"],timeSignature:"4/4"},{id:l(),title:"నాదంటూ లోకాన ఏదీ లేదయ్యా",lyrics:`నాదంటూ లోకాన ఏదీ లేదయ్యా 
ఒకవేళ ఉందంటే నీవిచ్చినదే ప్రభువా (2) 
నీదే నీదే బ్రతుకంతా నీదే (2) || నాదంటూ || 

1. నాకు ఉన్న సామర్ధ్యం 
నాకు ఉన్న సౌకర్యం 
నాకు ఉన్న సౌభాగ్యం 
నాకు ఉన్న సంతానం (2) 
ఆరగించే ఆహారం అనుభవించే ఆరోగ్యం (2) 
కేవలం నీదేనయ్య (2) || నాదంటూ || 

2.నాకు ఉన్న ఈ బలం 
నాకు ఉన్న ఈ పొలం 
త్రాగుచున్న ఈ జలం 
నిలువ నీడ ఈ గృహం (2) 
నిలచియున్న ఈ స్థలం
బ్రతుకుచున్న ప్రతి క్షణం (2) 
కేవలం నీదేనయ్య (2) || నాదంటూ ||`,keywords:["naa dhantu lokaana","na dantu lokana","na dhantu lookana","na dhantu lokanaa","nadhantu lokana","nadantu lokana","naadhantu lookaana","naadhantu lokana","4/4"],video:"",artist:"Sirivella Hanok",genre:["General","Grace"],timeSignature:"4/4"},{id:l(),title:"నా దేపుడునాకు తోడైయుండి నన్ను నడుపును",lyrics:`నా దేపుడునాకు తోడైయుండి నన్ను నడుపును
తన దూతలను కావలియుంచి నన్ను కాయును
'దేవా నీ చిత్తము నేరవేర్చుట నాకిష్టము
ప్రభువా నీ వాక్యము నా పాదములకు దీపము'  ||నా దేపుడునాకు||

1. కష్టాలు నష్టాలు బాధలలో  విడువని దేవుడు
విరిగి నలిగిన హృదయాలకు ప్రభువే ఆసన్నుడు
'దేవా నీ చిత్తము నేరవేర్చుట నాకిష్టము
ప్రభువా నీ వాక్యము నా పాదములకు దీపము'  ||నా దేపుడునాకు||

2. నిరాశ నిస్పృహ వేధనలో మరువని దేవుడు
నిన్న నేడు నిరంతరం మారని దేవుడు
'దేవా నీ చిత్తము నేరవేర్చుట నాకిష్టము
ప్రభువా నీ వాక్యము నా పాదములకు దీపము'  ||నా దేపుడునాకు||

3. సాతాను శోధనలెదురైనను జయమిచ్చే దేవుడు
నను ధైర్యపరిచే నా దేవుడు పరాక్రమవంతుడు
'దేవా నీ చిత్తము నేరవేర్చుట నాకిష్టము
ప్రభువా నీ వాక్యము నా పాదములకు దీపము'  ||నా దేపుడునాకు||`,keywords:["na dhevudu naku thodai","naa dhevudu naku thodai","na devudu naku thodai","na deevudu naku thodai","dheva ni chithamu","deva nee chithamu","deva nee chitthamu","deva ni chithamu"],video:"",artist:"Bro. Suresh Nittala,  Dr. J.K. Christopher,  Sharon Philip, Lillian Christopher, & Hana Joyce",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా దేవుడే నాకు ప్రాణ స్నేహితుడు",lyrics:`నా దేవుడే నాకు ప్రాణ స్నేహితుడు
నా దేవుడే నాకు మార్గ దర్శకుడు
నా దేవుడే నాకు నిత్య పోషకుడు
నా దేవుడే నాకు జీవన దాయకుడు
గతి లేని నన్ను వెదకిన - అతి కాంక్షనీయుడాయనే
మితి లేని ప్రేమ చూపిన - రవి కోటి తేజుడాయనే ||నా దేవుడే||

1. శ్రమలలో.. నా తోడుగా.. నన్ను నడిపించెను
నా నీడగా వెన్నంటియున్న నా ప్రాణనాథుడు
మరణపు సంకెళ్ళ నుండి నన్ను విడిపించెను
నా బంధకాలన్ని తెంచి వేసిన నా నీతిసూర్యుడు
క్షణమైన మరువని వీడని నా క్షేమా శిఖరము
క్షమియించి నాకు అందించెను ఈ రక్షణానందము
క్షయమైన బ్రతుకు మార్చి అక్షయతనొసగెను            ||గతి లేని||

2. వాక్యమే నా జీవమై నన్ను బ్రతికించెను
నా పాదములకు చిరు దీపమైన నా దివ్య తేజము
ఆత్మయే పరిపూర్ణమై నన్ను బలపరచెను
నా అడుగు జాడలను స్థిరము చేసిన నా జీవ మార్గము
నా గమ్యమేమిటో తెలియక నా పరుగు ఆగిపోగా
నా చేయి పట్టి నను నడిపిన నా మార్గదర్శి యేసే
విలువైన ప్రేమ నాపై నిలువెల్ల కురిసెను                  ||గతి లేని||`,keywords:["naa dhevude naku praana snehithudu","na dhevude naaku praana","naa devude naku","na devude naku prana snehithudu","naa deevude naku prana"],video:"",artist:"Kranthi Chepuri, Nissy John, Hadlee Xavier",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా నీతి సూర్యుడా",lyrics:`నా నీతి సూర్యుడా – భువినేలు యేసయ్యా
సరిపోల్చలేను నీతో – ఘనులైన వారిని (2)
రాజులకే రారాజువు – కృపచూపే దేవుడవు
నడిపించే నజరేయుడా – కాపాడే కాపరివి ||నా నీతి||

1. శ్రమలలో బహు శ్రమలలో – ఆదరణ కలిగించెను
వాక్యమే కృపా వాక్యమే – నను వీడని అనుబంధమై (2)

నీ మాటలే జల ధారాలై – సంతృప్తి నిచ్చెను
నీ మాటలే ఔషధమై గాయములు కట్టెను
నీ మాటే మధురమ్!  ||రాజులకే||

2. మేలుకై సమస్తమును జరిగించుచున్నావు నీవు
యేదియు కొదువ చేయవు నిన్నాశ్రయించిన వారిని (2)

భీకరమైన కార్యములు చేయుచున్నవాడ
సజీవుడవై అధికస్తోత్రము పొందుచున్న వాడ
ఘనపరతును నిన్నే!

ప్రేమించే యేసయ్యా – నీవుంటే చాలునయ
నడిపించే నజరేయుడా – కాపాడే కాపరివి ||నా నీతి||

3. సంఘమై నీ స్వాస్థ్యమై నను నీయెదుట నిలపాలని
ఆత్మతో మహిమాత్మతో నను ముద్రించియున్నావు నీవు (2)

వరములతో ఫలములతో నీకై బ్రతకాలని
తుదిశ్వాశ నీసన్నిధిలో విజయం చూడాలని
ఆశతో వున్నానయ!

కరుణించే యేసయ్యా – నీకోసమే నాజీవితం
నినుచేరే ఆశయం తీరాలని – నిను చూసే ఆక్షణం రావాలయ్యా  ||నా నీతి||`,keywords:["na neethi suryuda","na nithi suryuda","naa neethi suryuda","nanethi suryuda","naa neethisuryuda","naneti suryuda","na neti suryuda","hosanna ministries","john wesly"],video:"",artist:"Hosanna Ministries",genre:["General"],timeSignature:"2/4"},{id:l(),title:"నా నీతి సూర్యుడ ఉదయించి నాలోన",lyrics:`నా నీతి సూర్యుడ ఉదయించి నాలోన 
వెలిగించి హృదయాన్ని వెలుగుగ మార్చుమ (2)

స్తుతిపాత్రుడ యేసయ్య యేసయ్య 
స్తోత్రార్పణ  నీకే  తగునయా  (2)

నా నీతి సూర్యుడ ఉదయించి నాలోన 
వెలిగించి హృదయాన్ని వెలుగుగ మార్చుమ

1. మనుష్యుని నీతి క్రియలు మురికి గుడ్డల వంటివి 
నరుని హృదయ ఆలోచనలు అపవిత్రమైనవి 
నీ మార్గము చూపించి నీ చెంతకు నడిపించి  (2)
నీ నీతితొ నను నింపి నీ దర్శనమియ్యుమయ (2) 
||స్తుతిపాత్రుడ||

2. పరిసయ్యుని స్వనీతి ప్రార్ధన దేవుని మెప్పించలేదు 
హృదయమున గర్వించి పాపముతొ మిగిలిపోయెను
సుంకరి ప్రార్ధన నేర్పి తగ్గింపు మనసును ఇచ్చి    (2) 
నీ నీతిని పొందుకొనే హృదయమును ఇయ్యుమయా (2)
||స్తుతిపాత్రుడ||

3. నీతిలేని ఈలోకాన నీతిలేని మనుష్యుల మధ్య 
నీ నీతిని చూపించే జీవితమును కలిగియుందును 
నీ రక్తముతొ కడిగి నా పాపము తొలగించి    (2)   
నీ కృపతో దీవించి నీ నీతిని ఇయ్యుమయా  (2)
||స్తుతిపాత్రుడ||`,keywords:["నా నీతి సూర్యుడ ఉదయించి నాలోన","naa neethi suryuda udhayinchi naalona","nanethi suryuda","naaneethi suryuda udhayinchi naalona"],video:"",artist:"Daniel Muchumarri, Bro KY Ratnam, Anwesshaa",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా ప్రతి అవసరము తీర్చువాడవు నీవే/వందనం యేసయ్యా",lyrics:`నా ప్రతి అవసరము
తీర్చువాడవు నీవే - యేసయ్యా
నా ప్రతి ఆశ
నెరవేర్చువాడవు నీవే - యేసయ్యా

1. ఆకలితో నే అలమటించినప్పుడు
అక్కరనెరిగి ఆదుకొన్నావు (2)
వందనం యేసయ్యా
నీకే వందనం యేసయ్యా
నా ప్రతి అవసరము
తీర్చువాడవు నీవే - యేసయ్యా
నా ప్రతి ఆశ
నెరవేర్చువాడవు నీవే - యేసయ్యా

2. ఊహించలేని ఆశ్చర్య కార్యములతో
ఏ కొదువ లేక నను కాచుచుంటివి (2)
కష్టాలెన్ని వచ్చినా – కరువులెన్ని కలిగినా
నీ చేతి నీడ ఎప్పుడూ నను దాటిపోదు    ||వందనం||

Bridge:
తప్పిపోయినా త్రోవ మరచినా
నీ కృప నన్ను విడచి వెళ్ళదు (2)
నీ కృప – విడచి వెళ్ళదు నన్నెప్పుడు (2)
యేసయ్యా

నా ప్రతి విన్నపం
నీ చెంత చేరునేసయ్యా – యేసయ్యా
నా ప్రతి ప్రార్థనకు
జవాబు నీవే యేసయ్యా – యేసయ్యా (2)

వందనం యేసయ్యా
నీకే వందనం యేసయ్యా
ఏమివ్వగలను ఎనలేని ప్రేమకై
యేసయ్యా - వందనం`,keywords:["vandhanam yesayya","vandanam yesayya","vandanam yesaya","vandhanam yesaya","sam alex","naa prathi avasaramu","na prathi avasaram","na prathi avasaramu","worship"],video:"",artist:"Sam Alex Pasula",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నా ప్రాణ నేస్తమా - నా యేసు దైవమా",lyrics:`నా ప్రాణ నేస్తమా - నా యేసు దైవమా (2)
నీ ధ్యాసలో - నీ ప్రేమలో బ్రతకాలి నీ సాక్షిగా ||నా ప్రాణ నేస్తమా||

ఆశతీర సేవించన - తీయనైన నీ ప్రేమను
అంతులేని ఆ ప్రేమలో - పరవశించి కీర్తించనా ||నా ప్రాణ నేస్తమా||

1. నీవే ఉదయం - నీవే అభయం - నీతోనె జీవితం
నీవే శరణం - నాలో అనిశం - నీ ప్రేమ శాశ్వతం
మరువలేని నీ స్నేహము - మధురమైన సంబంధము
కనులలోన నీ రూపము - వెలిగే నాలో నీ దీపము
పలికే నాలో గీతమై - నీదు ప్రేమ సంగీతమై ||నా ప్రాణ నేస్తమా||

2. నీవే శిఖరం - చూపే గమనం - నీలోనే అమృతం
నీతో సమయం - కోరే తరుణం - నీ ప్రేమ పావనం
శిధిలమైన  నా ప్రాణము - కరుణ చూపే నీ వాక్యము
సిలువ చాటు నీ త్యాగము - తెలిపే ప్రేమ  సందేశము
పదములైన చాలునా - నీదు ప్రేమ నే పాడనా ||నా ప్రాణ నేస్తమా||`,keywords:["na praana neesthama","naa prana neesthama","na prana nesthama","naa praana neesthama","na prana nestama"],video:"",artist:"Joshua Shaik & Pranam Kamalakhar",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నా ప్రాణమా నాలో నీవు ఎందుకు కృంగియున్నావు",lyrics:`నా ప్రాణమా నాలో నీవు
ఎందుకు కృంగియున్నావు
యెహోవాయందే ఇంకను
నిరీక్షణ ఉంచుము నీవు (2)  ||నా ప్రాణమా||

1. ఈతి బాధల్ కఠిన శ్రమలు
అవమానములే కలిగిన వేళ (2)
నీ కొరకే బలియైన యేసు
సిలువను గూర్చి తలపోయుమా (2)
అల్పకాల శ్రమల పిదప
మహిమతో నిను నింపును ప్రభు నా ప్రాణమా (2)   ||నా ప్రాణమా||

2. ఆప్తులంతా నిను వీడిననూ
శత్రువులే నీపై లేచిననూ (2)
తల్లి అయినా మరచినా మరచున్
నేను నిన్ను మరువాననినా (2)
యేసుని ప్రేమన్ తలపోయుమా
ఆశ్రయించు ప్రభుని నా ప్రాణమా (2)        ||నా ప్రాణమా||

3. ఐశ్వర్యమే లేకున్ననూ
సౌఖ్య జీవితమే కరువైననూ (2)
ప్రభు సేవలో ప్రాణములనే
అర్పించవలసి వచ్చిననూ (2)
క్రీస్తునికే అంకితమై ఆనందించు
ప్రభు రాకకై కనిపెట్టుమా నా ప్రాణమా (2)  ||నా ప్రాణమా||`,keywords:["naa pranama naalo neevu","na pranama nalo nevu","na pranama nalo nivu","naa praanama naalo neevu","na pranama naloo nivu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా ప్రాణమా సన్నుతించుమా",lyrics:`నా ప్రాణమా సన్నుతించుమా
యెహోవా నామమును పరిశుద్ధ నామమును (2)
అంతరంగ సమస్తమా సన్నుతించుమా (2)  ||నా ప్రాణమా||

1. ఆయన చేసిన మేలులను ఎన్నడు మరువకుమా
దోషములన్నియు క్షమియించెను ప్రాణ విమోచకుడు (2)
దీర్ఘ శాంత దేవుడు నిత్యము కోపించడు (2)   ||నా ప్రాణమా||

2. మేలుతో నీ హృదయమును తృప్తిపరచుచున్నాడు
నీతి క్రియలను జరిగించును న్యాయము తీర్చును (2)
దాక్షిణ్యపూర్ణుడు నిత్యము తోడుండును (2)   ||నా ప్రాణమా||`,keywords:["na pranama sannuthinchumaa","na praanama sannuthinchuma","naa praanama sannuthinchuma","naa praanama sannuthinchumaa","na pranama sannutinchuma","naa pranama sannuthinchuma","na pranama sanutinchuma","napranama sannuthinchuma","naapranama sannuthinchu maa","2/4"],video:"",artist:"",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"నా ప్రాణమైన యేసు",lyrics:`నా ప్రాణమైన యేసు
నా ప్రాణములోనే కలిసి
నా ప్రాణమా నే నిన్నే స్తుతింతున్
నా ప్రాణమా నే నిన్నే స్తుతింతున్ (2)
నా ప్రాణమైన ప్రాణమైన ప్రాణమైన యేసు (2) ||నా ప్రాణమైన||

1. లోకమంతా క్షణికమయ్య
నీ ప్రేమయే నాకు స్థిరమయ్య (2)
నీ నామం కీర్తించెదను నా యేసయ్య
నిన్నే నే హెచ్చించెదను రాజా (2) ||నా ప్రాణమైన||

2. పరిశుద్ధ ఆత్మ చేత 
అభిషేకం చేయుమయ్య (2)
నీ కొరకే జీవించెదను యేసయ్య
నీ కొరకే మరణించెదను రాజా (2) ||నా ప్రాణమైన||`,keywords:["napranamaina yesu","na pranamaina yesu","naa praanamaina yesu","na pranamainaa yesu","na pranamina yesu","na pranamyna yeesu","na pranamyna yesu","na pranamina yeesu","napranamaina yesu","naapranamaina yesu","4/4"],video:"",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"నా ప్రాణమైన యేసు - నా జీవమైన యేసు",lyrics:`నా ప్రాణమైన యేసు
నా జీవమైన యేసు
నా ఆశ ఐనా యేసు 
నా అతిశయమైన యేసు
నా గానమైన యేసు
నా నాట్యమైన యేసు
నా ధ్యానమైన యేసు 
నా సంతోషమైన యేసు

1. యెర్రని యెండలో యెండిన మొక్కవలె నేనుండగా 
చల్లని మంచువలె మెల్లగ నన్ను నీవెంటగా (2)
వాసననిచ్చే దేవదారు వృక్షము వలె 
ఇంపుగ యెదిగిన వలివ  వృక్షము వలె  (2)
నీ మహిమను నాకు తిరిగిచ్చినావు

2. మోసము చేత పాపము చేసి మరణించగా 
ప్రాణము పెట్టి విడుదల నిచ్చి కరుణించగా (2)
పాపము బాపి  విమోచించి
రక్తము కార్చి రక్షణ నిచ్చి (2)
నీ జీవము నాకు తిరిగిచ్చినావు`,keywords:["naa pranamaina yesu","na pranamaina yeesu","naa pranamaina yesu","na pranamayna yesu"],video:"",artist:"Chandra Mohan, Rajkumar Jeremy",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా ప్రియ యేసు రాజా ఆదుకో నన్నెపుడు",lyrics:`నా ప్రియ యేసు రాజా ఆదుకో నన్నెపుడు
శోధనలో వేదనలో నిను వీడి పోనియ్యకు

1. కలుషితగు ఈ లోక౦ కదిలెను నా కన్నులలో
మరణ శరీరపు మరులే మెదిలెను నా హ్రుదయములో
కల్వరిలో ఆదరి౦చు ఆదరి౦చు ఆదరి౦చు ||నా ప్రియ యేసు||

2. మరచితి నీ వాగ్దాన౦ సడలెను నా విశ్వాస౦
శ్రమల ప్రవాహపు సుడులే వడిగా నను పెనుగొనగా
కల్వరిలో ఆదరి౦చు ఆదరి౦చు ఆదరి౦చు ||నా ప్రియ యేసు||

3. నేరము లెన్నో నాపై మోపెను ఆ అపవాది
తీరని పోరాటములో దూరముగా పరుగిడితి
కల్వరిలో ఆదరి౦చు ఆదరి౦చు ఆదరి౦చు  ||నా ప్రియ యేసు||`,keywords:["na priya yesu raaja","na priya yeesu raaja","napriya yesu raja","naa priya yesuraja","napriya yesuraja","na priya yesuraaja","naapriya yesu raaja","naapriya yeesu raaja","napriya yeesuraja","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా దేవుడు శక్తిమంతుడు/సహయుడు",lyrics:`నా దేవుడు శక్తిమంతుడు - ఆయనే నా సహయుడు 
అన్నిటికన్నా పై నామము - నీకు సాటి లేరెవరు  (2) 
దేవా బలహీనులను బలపరచు దేవా 
శోధన నుండి జయమిచ్చు దేవా 
నన్ను నూతనముగా చేసిన నీ కృప 
నా యేసయ్య 

1. నా దేవుడు జయసీలుడు - మరణమూనే జయించెను 
అపవాదిని ఓడించ్చెను - ఇక మనదే జయగీతము  (2) 

దేవా బలహీనులను బలపరచు 
దేవా శోధన నుండి జయమిచ్చు 
దేవా నన్ను నూతనముగా చేసిన నీ కృప 
నా యేసయ్య 
	
మరణముకు భయపడను నీవే నా కేడెము 
ఇక నేవెను తిరుగను నీవే నా గమ్యము (2) 
	
దేవా బలహీనులను బలపరచు దేవా 
శోధన నుండి జయమిచ్చు దేవా 
నన్ను నూతనముగా చేసిన నీ కృప 
నా యేసయ్య (2)`,keywords:["naa dhevudu shakthi manthudu","na devudu shakti mantudu","sahaayuda","sahayuda","john vikas","bandili john vikas","johnvikas","na devudu shakthi manthudu","na dhevudu shakthi manthudu","naa devudu shakthi","naa devudu","4/4"],video:"https://www.youtube.com/watch?v=bYEL5SkLXE4",artist:"John Vikas Bandili",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"నా పేరే తెలియని ప్రజలు – ఎందరో ఉన్నారు",lyrics:`నా పేరే తెలియని ప్రజలు – ఎందరో ఉన్నారు
నా ప్రేమను వారికి ప్రకటింప – కొందరే ఉన్నారు
ఎవరైనా – మీలో ఎవరైనా (2)
వెళతారా – నా ప్రేమను చెబుతారా (2)

1. రక్షణ పొందని ప్రజలు – లక్షల కొలది ఉన్నారు
మారుమూల గ్రామాల్లో – ఊరి లోపలి వీధుల్లో (2) ||ఎవరైనా||

2. నేను నమ్మిన వారిలో – కొందరు మోసం చేసారు
వెళతామని చెప్పి – వెనుకకు తిరిగారు (2) ||ఎవరైనా||

3. వెళ్ళగలిగితే మీరు – తప్పక వెళ్ళండి
వెళ్ళలేకపోతే – వెళ్ళేవారిని పంపండి (2) ||ఎవరైనా||`,keywords:["na pere theliyani prajalu","naa peere theliyani prajalu","na pere theliyani prajalu","na pare theliyani prajalu","napere theliyani prajalu","naa peere teliyali prajalu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా బలమంతా నీవేనయా/బలమంతా",lyrics:`నా బలమంతా నీవేనయా
నా బలమంతా నీవేనయా

1. అలలు లేచినను
తుఫాను ఎగసినను
కాపాడే దేవుడవయ్యా
నీవు ఎన్నడు మారవయ్యా ||నా బలమంతా||

2. సోలిన వేలలలో
బలము లేనపుడు
ఆదరించి నడిపావయ్యా
యెహోవా షాబోత్ నీవే
నన్ను ఆదరించి నడిపావయ్యా
యెహోవా షాబోత్ నీవే ||నా బలమంతా||

జీవం నీవేనయ్యా
స్నేహం నీవేనయ్యా
ప్రియుడవు నీవేనయ్యా
సర్వస్వం నీవేనయ్యా  ||నా బలమంతా||`,keywords:["naa balamanthaa","na balamantha","na balamanta","naa balamanta","na bhalamanta","na bhalamantha","naa balamantaa","naa balamamthaa","na balamamthaa","3/4"],video:"https://www.youtube.com/embed/-Dux_qsqKnA?start=1348",artist:"Sounds of Zion",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"నా బ్రతుకు దినములు",lyrics:`నా బ్రతుకు దినములు లెక్కింప నేర్పుము
దేవా ఈ భువిని వీడు గడియ నాకు చూపుము
ఇంకొంత కాలము ఆయుష్షు పెంచుము
నా బ్రతుకు మార్చుకొందును సమయమునిమ్ము     ||నా బ్రతుకు|| 

1. ఎన్నో సంవత్సరాలు నన్ను దాటిపోవుచున్నవి
నా ఆశలు నా కలలనే వెంబడించుచుంటిని
ఫలాలు లేని వృక్షము వలె ఎదిగిపోతిని
ఏనాడు కూలిపోదునో ఎరుగకుంటిని
నా మరణ రోదన ఆలకించుమో ప్రభు
మరల నన్ను నూతనముగ చిగురు వేయని     ||నా బ్రతుకు|| 

2. నీ పిలుపు నేను మరచితి – నా పరుగులో నేనలసితి
నా స్వార్ధము నా పాపము – పతన స్థితికి చేర్చెను
నా అంతమెటుల నుండునో – భయము పుట్టుచున్నది
దేవా నన్ను మన్నించుము – నా బ్రతుకు మార్చుము
యేసూ నీ చేతికి ఇక లొంగిపోదును
విశేషముగా రూపించుము నా శేష జీవితం     ||నా బ్రతుకు||`,keywords:["na brathuku dhinamulu","naa brathuku dinamulu","na bratuku dhinamulu","na bratuku dhinamu","na brathuku dhenamulu","naa bratuku dinamulu","na brathuku dinamulu","3/4"],video:"",artist:"Joel Kodali",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నా భాగస్వామిని",lyrics:`నా భాగస్వామిని మీరు ఎంచుకున్నారు
దేవా నా జీవితమంతా ఏకమై నడిచెదను
నా ప్రియునితో నన్ను జతపరిచియున్నారు
దేవా నా జీవితమంంతా ఏకమైయుండెదను
నాయందు నీ వివాహకార్యమును
విశ్వాసముతో స్వీకరించెదన్ (2)

పరలోక సాక్షిగా నీ సన్నిధిలో నేను
పరమాత్మునికార్యముగా ఈ యాత్రను
కొనసాగింతును (2)

1. వివాహము అన్నిటికన్నా ఘనమైనది అని
నా తల్లితండ్రిని విడిచి
నిన్ను హత్తుకొందును
క్రీస్తు యేసు సంఘమునకు
శిరస్సై యుండులాగున
నేను నా భార్యకు శిరస్సుగ ఉందును
నా ప్రియసఖివే నాలో సగభాగమై
యేసును వెంబడించు సహవాసివై
అంతము వరకు నీకు తోడై యుండి
క్రీస్తుని నీడలో ఫలియించెదము
||పరలోక||

2. వివాహము అన్నిటికన్న ఘనమైనది అని
నేను నా స్వజనము మరచి
నిన్ను హత్తుకొందును
సంఘము క్రీస్తుకు లోబడినట్టుగా
నేను నా భర్తకు లోబడియుండెదను
నను ప్రేమించి నను ధైర్యపరచి
కలువరి ప్రేమే మూల స్థంభమై
క్రీస్తు ప్రణాళికలో నీకు సహకారినై
పరిశుద్ధ గృహమును
నేను నిర్మించెదను
||పరలోక||

3. నేను ఇది మొదలుకుని
చావు మనలను ఎడబాపు వరకు
దేవుని పరిశుద్ధ నీ దయను చూపున
మేలుకైనను కీడుకైనను
కలిమికైనను లేమికైనను
వ్యాధియందును ఆరోగ్యమందును
నిను ప్రేమించి సంరక్షించుటకై
నా భార్యగా చేసుకొనుచున్నాను
నీ చొప్పున జరిగింతునని
ప్రమాణము చేయుచున్నాను
నా భర్తగా చేసుకొనుచున్నాను
నీ చొప్పున జరిగింతునని
ప్రమాణము చేయుచున్నాను
||పరలోక||`,keywords:["naa baagaswamy","na bhaagaswamy","na bhagaswami","naa bagasaami","Wedding","marriage"],video:"",artist:"Joshi Ennam James & Prathima Ennam, Ps.Enosh Kumar & Feat. Ps.Heaven Joy, Jerusha Joseph, Joy Onesimus",genre:["Wedding","Marriage"],timeSignature:"4/4"},{id:l(),title:"నా నీతి నీవే నా ఖ్యాతి నీవే",lyrics:`నా నీతి నీవే నా ఖ్యాతి నీవే
నా దైవమా యేసయ్యా
నా క్రియలు కాదు నీ కృపయే దేవా
నా ప్రాణమా యేసయ్యా
నదులంత తైలం విస్తార బలులు
నీకిచ్చినా చాలవయ్యా
నీ జీవితాన్నే నాకిచ్చినావు
నీకే నా జీవమయ్యా
హల్లెలూయ ఆమెన్ హల్లెలూయ (4)       ||నా నీతి||

1. నా దీన స్థితిని గమనించి నీవు
దాసునిగ వచ్చావుగా
నా దోష శిక్ష భరియించి నీవు
నను నీలో దాచావుగా
ఏమంత ప్రేమ నా మీద నీకు
నీ ప్రాణమిచ్చావుగా
నీ రక్తమిచ్చి కొన్నావు నన్ను
యజమానుడవు నీవేగా ||హల్లెలూయ||

2. నా ప్రియులే నన్ను వెలివేసినప్పుడు
నీవు చేరదీసావుగా
నా ప్రక్క నిలిచి నను ధైర్యపరచి
కన్నీరు తుడిచావుగా
నేనున్న నీకు భయమేలనంటూ
ఓదార్పునిచ్చావుగా
చాలయ్య దేవ నీ కృపయే నాకు
బ్రతుకంతయు పండుగా         ||హల్లెలూయ||

3. ఆ ఊభిలోనా నే చిక్కినప్పుడు
నీవు నన్ను చూసావుగా
నీ చేయి చాపి నను పైకి లేపి
నీ వాక్కునిచ్చావుగా
నా సంకటములు నా ఋణపు గిరులు
అన్నిటిని తీర్చావుగా
నీలోన నాకు నవ జీవమిచ్చి
నీ సాక్షిగా నిలిపావుగా        ||హల్లెలూయ||`,keywords:["na nethi neve","na nithi neve","na nithi nuve","naa neethi neeve","naa nethi nive","nanethi neve"],video:"",artist:"Anil Kumar",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నా మదిలోని - రూపం నీవే",lyrics:`నా మదిలోని - రూపం నీవే 
నా దేవా నీవే
నా హృదిలోని - దీపం నీవే 
నా వరమై రావా
నీవే మార్గం - నీవే జీవం 
నీవే స్నేహం - నీవే ప్రాణం
నీవే నా సర్వం - చేసెద నీ గానం

1. నా మనసేగా నీకే సొంతం
నా దేవా ప్రభువా
నీ పదసేవ ఎంతో మధురం
కరుణించే నాథా
ధ్యానించెద నీ వాక్యమే
నిరతం ఆధారం
పూజించెద నీ నామమే 
ఇలలో నా భాగ్యం
జీవించెద నీ కోసమే
నీలోనే నా గమ్యం
అర్పించెద నా జీవితం
నీకై యేసయ్య`,keywords:[,"నా మదిలోని రూపం నీవే","na madhiloni rupam","na madhhilone rupam","naa madhiloone roopam","na madiloni rupam","na madiloni roopam"],video:"",artist:"Pranam Kamlakhar, Joshua Shaik, Ankona Mukherjee",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా మనస్సా ఆయన మరచునా/అలంకరించును",lyrics:`నా మనస్సా ఆయన మరచునా 
దేవుడు నిన్ను మరచి పోవునా (2) 

ఆయనే నీ బాధలన్నీ కనుమరుగు చేయునే
ఆనంద తైలము నీపై కుమ్మరించునే (2)

స్తుతింపజేయునే నిన్ను అలంకరించునే కోల్పోయినదంతా పునరుద్ధరించునే (2)

1. నిట్టూర్పు శబ్దము విన్న నీ  హద్దులన్నిటిలో
సమృద్ధి గానాలెన్నో ఇది మొదలు వినబడునే (2)
తరగిపోను నేను అణగార్చబడను నేను (2)

స్తుతింపజేయునే నిన్ను అలంకరించునే 
కోల్పోయినదంతా పునరుద్ధరించునే (2)

సరిచేయు వాడే ఓ...స్థిరపరచినాడే
బలపరచినాడే పూర్ణుణ్ణి చేయునే 
సరి చేసి నిన్ను హెచ్చించిన ప్రభువు
ఈ నూతనవత్సరములో అలంకరించునే.

2. విచారించే వారు లేక ఒంటరియై యున్న నీకు 
ఆరోగ్యము దయచేసి పరిపాలన నిచ్చునే (2) 
కూలిన కోటను రాజగృహముగా మార్చును (2) 

స్తుతింపజేయునే నిన్ను అలంకరించునే కోల్పోయినదంతా పునరుద్ధరించునే (2)

నా మనస్సా ఆయన మరచునా యేసు నిన్ను మరచి పోవునా (2) 
ఆయనే నీ బాధలన్నీ కనుమరుగు చేయునే
ఆనంద తైలము నీపై కుమ్మరించునే (2)

స్తుతింపజేయునే నిన్ను అలంకరించునే
కోల్పోయినదంతా పునరుద్ధరించునే (2)`,keywords:["alankarinchunu","alankarenchunu","alamkarinchunu","na manassa","na manasa","naa manassa","naa manasa","paul dhinakaran"],video:"",artist:"Dr. Paul Dhinakaran",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా యేసునాధ నీవే - నా ప్రాణ దాత  నీవే",lyrics:`నా యేసునాధ నీవే - నా ప్రాణ దాత  నీవే 
నీ ప్రేమ చాలు నాకు   
నా దాగుచోటు నీవే యేసయ్య 
నా జీవితాంతము నిన్నే స్తుతింతును 
నే బ్రతుకుదినములు నిన్నే స్మరింతును 
ఏ రీతి పాడనూ - నీ ప్రేమ గీతము 
ఏనాడు వీడనీ - నీ స్నేహ బంధము 
నా  యేసునాధ నీవే - నా ప్రాణ దాత నీవే 
నీ ప్రేమ చాలు నాకు    
నా దాగుచోటు నీవే యేసయ్య 
నా దాగుచోటు నీవే యేసయ్య 

1.  ప్రభు యేసు దైవమా  - చిరకాల స్నేహమా 
నీలో నిరీక్షణే - బలమైనదీ
ప్రియమార నీ స్వరం - వినిపించు ఈ క్షణం
నీ జీవవాక్యమే - వెలుగైనదీ
నీ సన్నిధానమే - సంతోష గానమై
నీ నామ ధ్యానమే -  సీయోను మార్గమై 
భయపడను నేనిక  -  నీ ప్రేమ సాక్షిగా  
గానమై  - రాగమై 
అనుదినము నిన్నే  -  ఆరాధింతును 
కలకాలం నీలో  -  ఆనందింతును

2. కొనియాడి పాడనా  - మనసార వేడనా 
నీ ప్రేమ మాటలే -  విలువైనవీ
ఎనలేని బాటలో  - వెనువెంట తోడుగా
నా యందు నీ కృప - ఘనమైనదీ 
నా నీతి సూర్యుడా - నీ ప్రేమ శాశ్వతం 
నా జీవ యాత్రలో - నీవేగ ఆశ్రయం 
నీ పాద సేవయే - నాలోని ఆశగా 
ప్రాణమా - జీవమా 
అనుదినము నిన్నే  -  ఆరాధింతును 
కలకాలం నీలో  -  ఆనందింతును`,keywords:["na yesu naadha","naa yeesu nadha","na yesu nadha","na yesunadha","na yeesunadha","kamalakar","pranam kamalakar"],video:"",artist:"Pranam Kamlakhar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా యేసయ్య నా రక్షకా",lyrics:`నా యేసయ్య నా రక్షకా
నా నమ్మదగిన దేవా కీర్తింతును (2)
ప్రేమింతును నీ సన్నిదనమును
కీర్తింతును యేసయ్య (2)

1. నా విమోచకుడా నా పోషకుడా 
నా నమ్మదగిన దేవా కీర్తింతును (2)
ప్రేమింతును నీ సన్నిదనమును
కీర్తింతును యేసయ్య (2)

2. నా స్నేహితుడా నా సహాయకుడా  
నా నమ్మదగిన దేవా కీర్తింతును (2)
ప్రేమింతును నీ సన్నిదనమును 
కీర్తింతును యేసయ్య (2)

ప్రేమింతును నీ సన్నిదనమును 
కీర్తింతును యేసయ్య`,keywords:["నా యేసయ్య నా రక్షకా","kripal mohan","na yesayya na rakshaka","naa yesayya","na yesayya","na esayya","naayesayya","nayesayya","na yesaya","naa yesaya"],video:"",artist:"Kripal Mohan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా యేసు రాజ్యము అందమైన రాజ్యము",lyrics:`నా యేసు రాజ్యము అందమైన రాజ్యము
అందులో నేను నివసింతును (2)
సూర్య చంద్రులు అక్కర లేని రాజ్యం
ప్రభు క్రీస్తే వెలుగై ఉన్న రాజ్యం (2)  ||నా యేసు||

1. అవినీతియే ఉండని రాజ్యము
ఆకలి దప్పికలు లేని నిత్య రాజ్యం (2)
ఇక కరువు కష్టం వ్యాధి బాధ లేని రాజ్యం
ఇక లంచం మోసం మొహం ద్వేషం లేని రాజ్యం (2)  ||నా యేసు||

2. హల్లెలూయా స్తుతులున్న రాజ్యం
యేసే సర్వాధిపతి అయినా సత్య రాజ్యం (2)
ప్రేమ శాంతి సమాధానం నిత్యం ఉన్న రాజ్యం
నీతి న్యాయం ధర్మం సంతోషం ఉన్న రాజ్యం (2)  ||నా యేసు||`,keywords:["నా యేసు రాజ్యము అందమైన రాజ్యము","na yesu rajyamu andhamaina rajyamu","na yeesu raajyamu","naa yeesu raajyamu","na yesu raajyamu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నా రక్షకుని వెంబడింతు నన్నిటన్",lyrics:`1. నా రక్షకుని వెంబడింతు నన్నిటన్
ఘోరమైన కొండలైన జంకొందను
సురక్షితంబుగాను నేను వెళ్లుదున్
బరమ కిరీట మొందువరకు
యేసున్ నేను ఎన్న డెన్నడును
ఆసతో నన్నిటన్ వెంబడింతును
భాసురంబౌ ప్రభు వెంట కన్నుల్
మూసికొని యొక్కడేని వెళ్లుదున్

2. నా యేసు తోడ వెళ్లుచుందు
నెల్లడన్
ప్రయాసమైన లోయలై భయ
పడన్
దయఁ జూపు యేసు నన్ను వెం
డించుచో
భయ మేల భువనంబులోదగన్

3. నా కాలమెల్ల యేసుసందునమ్ము
దున్
భీకరింపు వాధియైన నేదాటుదున్
నా కర్తతోడ నెందునైన నేగుదున్
నాక మెక్కితండ్రి చువరకున్.`,keywords:["na rakshakuni venbadinthu nannitan","naa rakshakuni venbadinthu nannitan","andhra christian hymn","4/4"],video:"",artist:"Alfred Thyaagaraju Pamar",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"నాలోని ఆశా జ్యోతి నీవే",lyrics:`నాలోని ఆశా జ్యోతి నీవే 
నా ప్రభువా నీధరికి నడిపించు నావా నాజీవ నావ

1. నిను నేను ఈ జగాన కొనియాడగా 
అనువైన పాటపాడి వినుతింపగ
నీ పదసేవ చేయగ దేవా 
ఎనలేని జీవమును వనగూర్చుమయ్యా 

2. నా హృదయ ఆలయాన నివశింపుమా 
నీ మహిమ మందిరాన నను నిల్పుమా 
పావన నామ జీవనధామ 
నాత్మ దీపమును వెలిగించుమయ్యా`,keywords:["నాలోని ఆశా జ్యోతి నీవే","naaloni aashaa jyothi neeve","naloni aasha jothi neeve"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నావన్ని యంగీకరించుమీ దేవా",lyrics:`నావన్ని యంగీకరించుమీ దేవా 
నన్నెప్పుడు నీవు కరుణించుమీ

నావన్ని కృపచేత నీవలన నొందిన (2)
భావంబునను నేను బహుదైర్యమొందెద  ||నావన్ని||

1. నీకు నా ప్రాణము నిజముగా నర్పించి (2)
నీకు మీదుగట్టి నీ కొరకు నిల్పెద  ||నావన్ని||

2. సత్యంబు నీ ప్రేమ చక్కగా మది బూని (2)
నిత్యంబు గరముల నీ సేవ జేసెద  ||నావన్ని||

3. నీ సేవ జరిగెడు నీ ఆలయమునకు (2)
ఆశచే నడిపించు మరల నా పదములు   ||నావన్ని||

4. పెదవులతో నేను బెంపుగ నీ వార్త (2)
గదలక ప్రకటింప గలిగించు దృఢ భక్తి   ||నావన్ని||

5. నా వెండి కనకంబు నా తండ్రి గైకొనిమీ (2)
యావంత యైనను నాశింప మదిలోన   ||నావన్ని||

6. నీవు నా కొసగిన నిర్మల బుద్దిచే (2)
సేవ జేయగ నిమ్ము స్థిర భక్తితో నీకు   ||నావన్ని||

7. చిత్తము నీ కృపా యత్తంబు గావించి (2)
మత్తిల్ల కుండగ మార్గంబు దెలుపుము  ||నావన్ని||

8. హృదయంబు నీకిత్తు సదనంబు గావించి (2)
పదిలంబుగా దాని బట్టి కాపాడుము   ||నావన్ని||`,keywords:["navanni angeeka rinchumi dheva","navanni angika rinchumidheva","navanni angikarichumi dheva","Andhra Christian Hymn","3/4"],video:"",artist:"Pulipaaka Jagannaathamu",genre:["Andhra Christian Hymn","Offering"],timeSignature:"3/4"},{id:l(),title:"నా స్తుతి పాత్రుడా – నా యేసయ్యా",lyrics:`నా స్తుతి పాత్రుడా – నా యేసయ్యా
నా ఆరాధనకు నీవె యోగ్యుడవయ్యా (2)

1. నీ వాక్యమే నా పరవశము
నీ వాక్యమే నా ఆత్మకు ఆహారము (2)
నీ వాక్యమే నా పాదములకు దీపము (3)    ||నా స్తుతి పాత్రుడా||

2. నీ కృపయే నా ఆశ్రయము
నీ కృపయే నా ఆత్మకు అభిషేకము (2)
నీ కృపయే నా జీవన ఆధారము (3)    ||నా స్తుతి పాత్రుడా||

3. నీ సౌందర్యము యెరూషలేము
నీ పరిపూర్ణత సీయోను శిఖరము (2)
నీ పరిపూర్ణత నా జీవిత గమ్యము (3)    ||నా స్తుతి పాత్రుడా||`,keywords:["naa sthuthi paathruda na yesayya","na stuthi pathruda","naa sthuthi pathruda","na sthuthi pathruda","na sthuthi paathruda","naa stuthi pathruda","naa sthuti patruda","naa stuti pathruda","4/4"],video:"",artist:"",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"నా హృదయలోగిలిలో కొలువైన నా స్వామి",lyrics:`నా హృదయలోగిలిలో కొలువైన నా స్వామి 
నీ ప్రేమ కౌగిలిలో నను ఒదిగిపోనీ

నీ ఆత్మతో నను నిండనీ - నీ సాక్షిగా ఇలలో నన్నుండనీ

1. నాలోపల సంచరించి - నాతోభుజియించి 
జీవపుమార్గము చూపించి - సరిగానడిపించి 
నా జీవితం వెలిగించినావా - నీ రూపమే నాలో ముద్రించినావా

2. బలహీనతలను హరియించి - శక్తితో దీవించి 
అజ్ఞానము నిర్మూలించి- సత్యము బోధించి 
నా భారమే భరియించినావా - నీ శాంతినే నాలో స్థాపించినావా

3. అనురాగముతో బంధించి - ఆప్యాయత పంచి 
ఆనందము ననుగ్రహించి - ఆత్మీయత పెంచి 
నా శోకమే తొలగించినావా - స్తుతిగానమే నాలో పలికించినావా`,keywords:["na hrudhaya logililo","naa hrudhaya logililo","na hrudhaya logili lo","na hrudaya logililo","na hudhaya logililo","naa hudhaya logililo","stevenson"],video:"",artist:"Dr. A.R.Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నిజమైన ద్రాక్షావల్లి నీవే",lyrics:`నిజమైన ద్రాక్షావల్లి నీవే
నిత్యమైన సంతోషము నీలోనే (2)
శాశ్వతమైనది ఎంతో మధురమైనది
నాపైన నీకున్న ప్రేమ
ఎనలేని నీ ప్రేమ  (2)

1. అతి కాంక్షనీయుడా దివ్యమైన నీ రూపులో
జీవించున్నాను నీ ప్రేమకు నే పత్రికగా (2)
శిధిలమై యుండగా నన్ను నీదు రక్తముతో కడిగి
నీ పోలికగా మార్చినావే నా యేసయ్యా (2)

2. నా ప్రాణ ప్రియుడా శ్రేష్టమైన ఫలములతో
అర్పించుచున్నాను సర్వము నీకే అర్పణగా (2)
వాడిపోనివ్వక నాకు ఆశ్రయమైతివి నీవు
జీవపు ఊటవై బలపరచితివి నా యేసయ్యా (2)

3. షాలేము రాజా రమ్యమైన సీయోనుకే
నను నడిపించుము నీ చిత్తమైన మార్గములో (2)
అలసి పోనివ్వక నన్ను నీదు ఆత్మతో నింపి
ఆదరణ కర్తవై నను చేర్చుము నీ రాజ్యములో (2)`,keywords:["nijamaina dhrakshaa valli","nijamaina draksha","nizamaina dhrakshavalli","nijamina draksha valli","nijamyna drakshavalli","nijamaina drakshavalli","hosanna ministries","john wesly"],video:"",artist:"Hosanna Ministries",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నిత్య ప్రేమతో – నన్ను ప్రేమించెన్",lyrics:`నిత్య ప్రేమతో – నన్ను ప్రేమించెన్ (2)
తల్లి ప్రేమను మించినదే
లోక ప్రేమను మించినదే
నిన్ను నేను – ఎన్నడు విడువను (2)
నిత్యము నీతోనే జీవింతున్
సత్య సాక్షిగ జీవింతున్

1. నిత్య రక్షణతో – నన్ను రక్షించెన్ (2)
ఏక రక్షకుడు యేసే
లోక రక్షకుడు యేసే
నీ చిత్తమును చేయుటకై – నీ పోలికగా ఉండుటకై (2)
నా సర్వము నీకే అర్పింతును
పూర్ణానందముతో నీకే అర్పింతున్   ||నిత్య ప్రేమతో||

2. నిత్య రాజ్యములో – నన్ను చేర్పించన్ (2)
మేఘ రథములపై రానైయున్నాడు
యేసు రాజుగ రానైయున్నాడు
ఆరాధింతును సాష్టాంగపడి (2)
స్వర్గ రాజ్యములో యేసున్
సత్య దైవం యేసున్    ||నిత్య ప్రేమత||`,keywords:["nithya prematho","nethya prematho","nitya premato","nith ya prematho","nithya prema tho","nithya preema tho","nithyaprema tho","nithya prema to","nitya preematho"],video:"",artist:"",genre:["Love","General"],timeSignature:"4/4"},{id:l(),title:"నిన్ను చూడగ వచ్చినాడురా దేవ దేవుడు",lyrics:`నిన్ను చూడగ వచ్చినాడురా దేవ దేవుడు
గొప్ప రక్షణ తెచ్చినాడురా యేసు నాథుడు (2)
లోకమే సంతోషించగా
ప్రేమనే పంచే క్రీస్తుగా

బెత్లెహేమను ఊరిలో కన్యకు పుట్టినాడురా
పొత్తి గుడ్డల మధ్యలో హాయిగా నిద్దరోయెరా      ||నిన్ను||

1. దేవుని కోపము నుండి
తప్పించే ప్రియ పుత్రుడాయనే (2)
ముట్టుకో ముద్దు పెట్టుకో (2)        ||బెత్లెహేమను||

2. గుండెలో కొలువైయుండి
దీవించే ధనవంతుడాయనే (2)
ఎత్తుకో బాగా హత్తుకో (2)        ||బెత్లెహేమను||

3. తోడుగ వెంటే ఉండి
రక్షించే బలవంతుడాయనే (2)
చేరుకో నేడే కోరుకో (2)        ||బెత్లెహేమను||`,keywords:["ninnu chudaga vachinaadu ra","ninnu chudaga vachinadu ra","ninu chudaga vachinaadu ra","ninnu choodaga vachinaadu","ninnu chodaga vachinadu","christmas","stevenson"],video:"",artist:"Dr. A. R. Stevenson",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"నిను చూడని క్షణము - నీతో నుండని బ్రతుకు",lyrics:`నిను చూడని క్షణము - నీతో నుండని బ్రతుకు
ఊహించలేను నా యేసయ్యా ఓ... హొ... హొ
నీదు స్వరము వినకనే నేను - నిను విడచి తిరిగితి నేను
నాదు బ్రతుకులో సమస్తము - కోల్పోయితి

1. నీ దివ్య ప్రేమను విడచి - నీ ఆత్మతోడు త్రోసివేసి
అంధకార త్రోవలో నడచి - నీ గాయమే రేపితిని
అయినా అదే ప్రేమ - నను చేర్చుకున్న ప్రేమ
నను వీడని కరుణ - మరువలేనయ్యా యేసయ్యా

2. నన్ను హత్తుకొన్న ప్రేమ - నన్ను చేర్చుకున్న ప్రేమ
నీ వెలుగులోనే నిత్యం - నే నడిచెదన్
నను విడువకు ప్రియుడా - నాకు తోడుగా నడువు
నీ తోనే నా బ్రతుకు - సాగింతును యేసయ్యా`,keywords:["ninu chudani kshanamu","ninnu chudani kshanamu","nenu chudani kshanamu","ninu chudani shanamu"],video:"",artist:"Raj Prakash Paul",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నిన్ను విడిచి నీ ప్రేమ మరచి",lyrics:`నిన్ను విడిచి నీ ప్రేమ మరచి -
నేనెటు పోగలను దేవా
ఎవ్వరు నీ ప్రేమ నాకిల చూపగలరు
నాదేవా నా దేవా నా దేవా (నిన్ను విడిచి)

1. దారి తొలగి తీరము చేరని ఘోర సుడిగాలిలో
నాయకుడా నా ఆర్త ధ్వని విని
నావను నడిపించినావే - తీరము చూపించినావే
యేసయ్యా యేసయ్యా నా యేసయ్యా

2. శ్రమల పాలైతి సొమ్మసిల్లితి - సిలువకు నే చేరితి
శ్రీకరుడా నా శిలువను మోసి - ఆదరణె చూపినావే
నూతన బలమిచ్చినావే .... యేసయ్యా

3. విరిగి నలిగిన నా హృదయాన నీకే సింహాసనం
శ్రీమంతడా నా షాఓము రాజా
బ్రతికెద నీ కోసమే చావైన లాభమే`,keywords:["ninnu vidachi ni prema marachi","ninnu vidichi ni prema marachi","ninnu vidachi nee prema marachi"],video:"",artist:"",genre:["Love","General"],timeSignature:"4/4"},{id:l(),title:"నిను విడచి ఉండలేనయ్యా",lyrics:`నిను విడచి ఉండలేనయ్యా
నీ ప్రేమను మరువలేనయ్యా (2)

నను ప్రేమించెను - నను విడిపించెను
నను దీవించెను - నను బ్రతికించెను
అనుక్షణము రక్షించెను
యేసు నన్ను
అనుక్షణము రక్షించెను

నా దేవుడు - గొప్ప దేవుడు
నా యేసయ్యా- ప్రేమామయుడు (2) ||నిను విడచి||

1. నా శత్రువులే నన్ను చుట్టుముట్టినా
కారు చీకటే నన్ను కమ్మి వేసినా (2)
శత్రువులను చెదరగొట్టి - చీకటిని వెలుగు చేసి (2)
ప్రతి క్షణము - కాపాడెను
యేసు నన్ను
ప్రతి క్షణము కాపాడెను
||నా దేవుడు||

2. నిందలతో నన్ను క్రుంగదీసినా
మాటలతో నన్ను గాయపరచినా (2) 
నా చెయ్యిని పట్టుకొని - తన అక్కున చేర్చుకొని (2)
నా గాయము స్వస్థ పరచెను
యేసు 
నా గాయము స్వస్థ పరచెను
||నా దేవుడు||

3. కన్న వారే నన్ను విడిచి వేసినా
కట్టుకున్న వారే నన్ను వదిలి వేసినా (2)
నా చెయ్యిని విడవ కుండా - నన్ను వదిలేయ కుండా(2)
అను నిత్యము నాతో ఉండెను
యేసు
అను నిత్యము నాతో ఉండెను`,keywords:["ninu vidachi undalenayya","ninnu vidachi undalenayya","ninu vidichi undaleyya","ninnu vidichi undalenayya","ninu vidachi undalenaya"],video:"",artist:"Lillian Christopher, Suresh & Bandela Naga Raju",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నిను విడచి నా హృదయం/నాన్న",lyrics:`నిను విడచి నా హృదయం 
పరితపించే నీ కోసం 
నేనంటే నీవే కదా 
నీవు లేక నే లేనయ్య 

నీ నిత్యప్రేమతో  నన్ను వెదకితివి 
నీ సత్యమార్గమందు నడిపితివి 

నాన్న నాన్న నీ కుమారుడును నేను 
నాన్న నాన్న నీ కుమార్తెను నేను 

1. నిను విడచి ఎటు పోదును 
నీవే నా ఆశ్రయపురము 
ఎప్పటికి ఎరుగనైతిని 
నీ కుమారుడును నేనని 

నీ కంటిపాపగా నన్ను కాచితివి 
నీ చేతినీడలో నాకు కాపుదల అయ్యా (2)

నాన్న నాన్న నీ కుమారుడును నేను 
నాన్న నాన్న నీ కుమార్తెను నేను 

నీ కనుపాపనై నేను నాన్న (4)

2. త్రోసివేయలేదు తృణీకరించలేదు 
అవమానమునుండి విడిపించినావు నన్ను (2)
త్రోసివేయలేదు తృణీకరించలేదు (2)
అవమానమునుండి 
కాపాడితివి  నన్ను 

హత్తుకొని ముద్దాడితివి.. నాన్న 
ఆటంకము తొలగించి ఆదరించినావు 

నాన్న నాన్న నీ కుమారుడును నేను 
నాన్న నాన్న నీ కుమార్తెను  

నీ ప్రతిరూపము  నేను నాన్న  (4)`,keywords:["nanna","naanna","nana","enosh kumar","enoshkumar","enoshkumar songs","enosh kumar songs","ninnu vidichi","ninnu vidachi naa hrudhayam","ninnu vidichi na hrudhayam","ninnu vidichi na hrudayam","paapa in telugu","papa","papa in telugu","father"],video:"",artist:"Enosh Kumar",genre:["Worship","Love","Grace"],timeSignature:"4/4"},{id:l(),title:"నిను పోలిన వారెవరు",lyrics:`నిను పోలిన వారెవరూ – మేలు చేయు దేవుడవు
నిన్నే నే నమ్మితిన్ నా దేవా (2)
నిన్నే నా జీవితమునకు ఆధారము చేసికొంటిని
నీవు లేని జీవితమంతా వ్యర్ధముగా పోవునయ్య (2)

ఎల్ షడ్డాయ్ ఆరాధన – ఎలోహిం ఆరాధన
అడోనాయ్ ఆరాధన – యేషువా ఆరాధన (2)

1. కృంగియున్న నన్ను చూచి
కన్నీటిని తుడిచితివయ్య
కంటి పాప వలే కాచి
కరుణతో నడిపితివయ్య (2) ||ఎల్ షడ్డాయ్||

2. మరణపు మార్గమందు
నడిచిన వేళయందు
వైద్యునిగా వచ్చి నాకు
మరో జన్మనిచ్చితివయ్య (2) ||ఎల్ షడ్డాయ్||`,keywords:["ninnu polina varevaru","adonai","ninu polina varu evaru","ninu polina vaarevaru","ninu polina varu","ninupolinavarevaru","ninupolina vaaru evaru","ninu polinavaru yevaru","ninu polina vaaru yevaru","benny joshua","worship"],video:"https://www.youtube.com/embed/kj-6CtiogqU?start=1184",artist:"Benny Joshua",genre:["Worship","General","Hope"],timeSignature:"4/4"},{id:l(),title:"నిన్నారాధించెదను - నా పూర్ణ హృదయముతో",lyrics:`నిన్నారాధించెదను - నా పూర్ణ హృదయముతో 
అన్నివేళలయందు - ఆనందించెదను
నీతో నడవాలి - కీర్తిని చాటాలి 
నీ సన్నిధిలో నిత్యం నిలవాలి, యేసయ్య...  (2)

1.ఏది నీకు సాటి - రానే రాదు యేసయ్యా 
మనుషులైన లోకమైన నీకు పోటీ కాదయా !
ఒకటే మాటగా - ఒకటే బాటగా 
నిరతం ఒకే రీతిగా వుండే దేవుడవు యేసయ్య ... నీవయా (2)

2.శాంతినిచ్చు దేవా - ముక్తినొసగే తండ్రి 
వ్యాధులైన బాధలైన రూపుమాపే నాథుడా
కన్నతండ్రిగా - ప్రేమ మూర్తిగా
చివరి శ్వాసవరకు కాచే దేవుడవు యేసయ్యా  (2)`,keywords:["ninnaradhinchedhanu","ninnu aaradhinchedhanu","ninnaradinchedanu"],video:"",artist:"JK Christopher, Philip, Sharon Philip",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నిన్ను విడచి తిరిగితిని/తండ్రి",lyrics:`1. నిన్ను విడచి తిరిగితిని
నివాసముకై వేతికేతిని
నన్ను నేను కోల్పోతిని
పోల్చలేని స్థితికి మారితి

నీ కృపలోనే నన్ను దాచావయ్యా
మార్గమును ఏర్పరచి నన్ను నడిపించావు

Chorus:
తండ్రి తండ్రి ...
నేనూ నీ... కుమారుని

2. నిన్ను విడచి ఏటువేల్లేదా
నీవేగా నా ఆశ్రయం
గ్రహించలేకపోతిని
నీ సొత్తై నే ఉన్నానని

నీ దృష్టిని నాపై నిలిపితివి
నీ నీడలో నన్ను దాచితివి

Tag:
నీ కను పాపనై ఉన్నా తండ్రి,
నీ... కను పాపనై ఉన్నా తండ్రి

Bridge:
పరాయుడను కాను
నీవు వెలివేయలేదు
అవమానము నుండి కాపాడినావు
నీ కౌగిటితో నన్ను ముద్దాడినావు
ప్రశస్త వస్త్రములు నా కిచ్చినావు`,keywords:["ninnu vidachi yetu thirigithi","thandri thandri","papa","paapa","paapa in telugu","ninnu vidachi yetu","ninu vedachi yetu therigithi","ninnu vedichi yetu","father","ninnu vidachi thirigithini","papa in telugu"],video:"https://www.youtube.com/embed/wqf7C2U3Rjs?start=3404",artist:"",genre:["Worship","Love","Grace"],timeSignature:"4/4"},{id:l(),title:"నిన్నే ప్రేమింతును - నిన్నే ప్రేమింతును యేసు",lyrics:`నిన్నే ప్రేమింతును - నిన్నే ప్రేమింతును యేసు
నిన్నే ప్రేమింతును - నే వెనుదిరుగా

నీ సన్నిధిలో మోకరించి నీ మార్గములో సాగెదా
నిరసించక సాగెదా నే వెనుదిరుగా

1. నిన్నే పూజింతును నిన్నే పూజింతును యేసు
నిన్నే పూజింతును నే వెనుదిరుగా ||నీ సన్నిధిలో||

2. నిన్నే కీర్తింతును నిన్నే కీర్తింతును యేసు
నిన్నే కీర్తింతును నే వెనుదిరుగా  ||నీ సన్నిధిలో||

3. నిన్నే ధ్యానింతును నిన్నే ధ్యానింతును యేసు
నిన్నే ధ్యానింతును నే వెనుదిరుగా ||నీ సన్నిధిలో||

4. నిన్నే ఆరాధింతున్ నిన్నే ఆరాధింతున్ యేసు
నిన్నే ఆరాధింతున్ నే వెనుదిరుగా ||నీ సన్నిధిలో||`,keywords:["ninne preminthunu","ninne preeminthunu","ninne premintunu","nine premintunu","nenne preminthunu","nenne prementhunu","ninne preemintunu"],video:"",artist:"Anil Alexander Peram",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నిన్నే నిన్నే నే కొలుతునయ్యా",lyrics:`నిన్నే నిన్నే నే కొలుతునయ్యా
నీవే నీవే నా రాజువయ్యా (2)
యేసయ్య యేసయ్య యేసయ్యా…

1. కొండలలో లోయలలో
అడవులలో ఎడారులలో (2)
నన్ను గమనించినావా
నన్ను నడిపించినావా (2)   ||యేసయ్యా||

2. ఆత్మీయులే నన్ను అవమానించగా
అన్యులు నన్ను అపహసించగా (2)
అండ నీవైతివయ్యా
నా.. కొండ నీవే యేసయ్యా (2)  ||యేసయ్యా||

3. మరణ ఛాయలలో మెరిసిన నీ ప్రేమ
నలిగిన బ్రతుకున కురిసిన నీ కృప (2)
నన్ను బలపరచెనయ్యా
నిన్నే ఘనపరతునయ్యా (2)  ||యేసయ్యా||

4. వంచెన వంతెన ఒదిగిన భారాన
ఒసగక విసిగిన విసిరె కెరటాన (2)
కలలా కడతేర్చినావా
నీ వలలో నను మోసినావా (2)  ||యేసయ్యా||`,keywords:["ninne ninne ne koluthunayya","ninne ninne","nenne nenne ne kolutunaya","ninne ninne ney kolutunayya","ninne ninne ney"],video:"",artist:"",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నిత్యము స్తుతించినా",lyrics:`నిత్యము స్తుతించినా
నీ ఋణము తీర్చలేను
సమస్తము నీకిచ్చినా
నీ త్యాగము మరువలేను (2)
రాజా రాజా రాజా...
రాజాధి రాజువు నీవు
దేవా దేవా దేవా...
దేవాది దేవుడవు (2) (నిత్యము)

1. అద్వితీయ దేవుడా
ఆది అంతములై యున్నవాడా (2)
అంగలార్పును నాట్యముగా
మార్చివేసిన మా ప్రభు (2)
రాజా రాజా రాజా...
రాజాధి రాజువు నీవు
దేవా దేవా దేవా...
దేవాది దేవుడవు (2) (నిత్యము)

2. జీవమైన దేవుడా
జీవమిచ్చిన నాథుడా (2)
జీవజలముల బుగ్గ యొద్దకు
నన్ను నడిపిన కాపరి (2)
రాజా రాజా రాజా...
రాజాధి రాజువు నీవు
దేవా దేవా దేవా...
దేవాది దేవుడవు (2) (నిత్యము)

3.మార్పులేని దేవుడా
మాకు సరిపోయినవాడా (2)
మాటతోనే సృష్టినంతా
కలుగజేసిన పూజ్యుడా (2)`,keywords:["nithyamy sthuthinchina, nithyamu stutinchina","nityam stutinchina","nithyam sthuthinchina","nithyamu sthuthinchina","nityamu stutinchina","raja raja raja"],video:"",artist:"",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నిత్యుడ నీ నామమును",lyrics:`నిత్యుడ నీ నామమును
నిత్యమగు నీ ప్రేమను
నిత్యూడ నీ సన్నిధిలో
నిత్యము స్తుతియించెదను (2)
స్తుతియింతును నిన్ను స్తోత్రింతును (4)
||నిత్యుడ||

1. నీ నామమెంతో  బలమైనది
ఉన్నతమైనదిగా హెచ్చించబడినది (2)
నీ నామమే నెమ్మదినిచ్చును
నీ నామమే దీవెనలనిచ్చును (2)
నీ నామమే నా గానమై నా యేసయ్య
నిత్యము నీ నామమునే స్తుతియించెద (2)
||స్తుతి|| (4)
||నిత్యుడ||

2. నీ ప్రేమయే శాశ్వతమైనది
ధన రాశులలో వెల కట్టలేనిది (2)
నీ ప్రేమయే పరిశుద్ధమైనది
నీ ప్రేమయే పరిపూర్ణమైనది (2)
నీ ప్రేమకు సాక్షిగా ఇల జీవించేద
ఇలలోన నీ ప్రేమలో తరియించేద (2)
||స్తుతి|| (4)
||నిత్యుడ||

3. నీ సన్నిధిలోనే సమాధానము
శత్రువును జయించే ఆశ్రయ దుర్గము (2)
నీ సన్నిధిలో కాపాడబడుదుము
నీ సన్నిధిలో వెలిగింపబడుదుము (2) 
నీ సన్నిధి వాక్యమని జీవించెద
నిత్యము నీ సన్నిధిని అనుభవించెద (2)
||స్తుతి|| (4)
||నిత్యము||`,keywords:["nithyuda ni naanamunu","nithuda ni namanunu","nithyudaa ni namamunu","nithyudaa nee naamamunu","6/8"],video:"",artist:"Daniel Muchumarri, Bro KY Ratnam, Sireesha Baghavathula",genre:["General","Worship"],timeSignature:"6/8"},{id:l(),title:"నిను నమ్మినచో సిగ్గుపడనీయవు",lyrics:`నిను నమ్మినచో సిగ్గుపడనీయవు
నను నెమ్మదితో నీవే ఉంచెదవు
ఆపత్కాలమున నమ్ముకొనదగిన

యేసూ నీవే ఆధారము
యేసూ నీవే నా ప్రాణము

1. తెలివిని నమ్ముకొని తూలి పడ్డాను
బుద్ధి జ్ఞానము నీ దానమని నీ చెంతకు చేరాను

2. బలమును నమ్ముకొని భంగపడ్డాను
శక్తిమంతుడా నా కోటవని నీ చెంతకు చేరాను

3. ధనమును నమ్ముకొని దగాపడ్డాను
సుఖసంపద నీ దీవెనని నీ చెంతకు చేరాను

4. మనుష్యుల నమ్ముకొని మభ్యపడ్డాను
సత్యవంతుడా ఆశ్రయుడవని
నీ చెంతకు చేరాను`,keywords:["ninu namminacho siggu","ninu namminacho","ninnu naminacho","ninnu namminacho","ninu naminacho","stevenson"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నిను స్తుతించినా చాలు నా బ్రతుకు దినములో",lyrics:`నిను స్తుతించినా చాలు నా బ్రతుకు దినములో
నిను పొగిడినా చాలు నా గుండె గుడిలో (2)
ఉన్నా లేకున్నా నా స్థితి గతులే మారినా
నీ సన్నిధిలో…
నీ సన్నిధిలో ఆనందించే భాగ్యమున్నా చాలు ||నిను||

1. స్తుతులకు పాత్రుడవు నీవేనయ్యా
స్తోత్రార్హుడవు నీవేనయ్యా (2)
నీవేనయ్యా నాకు నీవేనయ్యా (2) ||నిను||

2. ప్రేమా స్వరూపుడవు నీవేనయ్యా
స్తోత్రార్హుడవు నీవేనయ్యా (2)
నీవేనయ్యా నాకు నీవేనయ్యా (2) ||నిను||

3. ఆరాధ్య దైవము నీవేనయ్యా
ఆశ్చర్యకరుడవు నీవేనయ్యా (2)
నీవేనయ్యా నాకు నీవేనయ్యా (2) ||నిను||

4. ఆదిసంభూతుడవు నీవేనయ్యా
ఆదరించు దేవుడవు నీవేనయ్యా (2)
నీవేనయ్యా నాకు నీవేనయ్యా (2)  ||నిను||`,keywords:["ninu sthuthinchina chalu","ninnu sthuthinchina chaalu","ninu stutinchina chalu","ninu sthuthinchinaa"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నిను స్తుతియించెదం దేవా",lyrics:`నిను స్తుతియించెదం దేవా
నిను ఘనపరచెదం ప్రభువా 
నీ సన్నిధానములో నిలిచి
వినయముగా శిరమువంచి

1. నీ రూపమునందు నేలమంటితో నను చేసినది నీవే 
ఏ రూపము నాకు లేకముందే నను చూసినది నీవే

2. నీ అరచేతియందు నా రూపమును ముద్రించినది నీవే 
నా శత్రువు చేతిలో చిక్కకుండా కాపాడినది నీవే`,keywords:["నిను స్తుతియించెదం దేవా","ninnu sthuthiyinchedham deva","ninnu sthuthiyinchedha dheva","stevenson","worship"],video:"",artist:"Dr. A.R. Stevenson",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"నిన్ను కాపాడువాడు కునుకడు",lyrics:`నిన్ను కాపాడువాడు కునుకడు
నిన్ను ప్రేమించు యేసు నిదురపోడేన్నాడు (2)
నీ భారము వహియించు యేసు]
నీ కొరకే మరణించే చూడు (2) ||నిన్ను||

1. పలుకరించే వారు లేక పరితపిస్తున్న
కనికరించే వారు లేక కుమిలిపోతున్న (2)
కలతలెన్నో కీడులెన్నో
బ్రతుకు ఆశను అణచి వేసినా (2)
ఎడబయాడు యేసు నిన్ను
దరిచేర్చును యేసు నిన్ను (2) ||నిన్ను||

2. మనస్సులోన శాంతి కరువై
పరుల మాటలు క్రుంగదీసి బాధపెడుతున్న (2)
భీతులెన్నో భ్రామంతులెన్నో
సంతసంబును తృఒచివేసిన (2)
ఎడబయాడు యేసు నిన్ను
దరిచేర్చును యేసు నిన్ను (2) ||నిన్ను||`,keywords:["ninu kaapadu vaadu","ninnu kaapaadu vaadu kunukadu","ninnu kapaduvaadu","ninnu kapaduvadu","ninnukaapaduvaadu","ninu kapaduvadu","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"నిను కాపాడువాడు కునికడు నిదురపోడు",lyrics:`నిను కాపాడువాడు కునికడు నిదురపోడు
ఆయనే నా యేసయ్యా (8)

1. ఏ అపాయము రానేరాదు
నీ పాదములకు రాయి తగలదు
దేవదూతలు నిను కాయును కాపాడును ||నిను కాపాడువాడు||

2. బాకా లోయలో నే నడచినను
గాఢాంధకారపు లోయలో నేనున్న
దుడ్డు కర్రయు నను కాయును కాపాడును  ||నిను కాపాడువాడు||

3. కొదమ సింహమై నా ప్రభువు
మేఘాల మీద ఏతెంచువరకు
వాక్యమే నను కాయును కాపాడును  ||నిను కాపాడువాడు||`,keywords:["ninu kaapadu vaadu","ninnu kaapaadu vaadu kunukadu","ninnu kapaduvaadu kunukadu nidhurapodu","ninnu kapaduvadu","ninnukaapaduvaadu","ninu kapaduvadu"],video:"",artist:"",genre:["General","Protector"],timeSignature:"4/4"},{id:l(),title:"నిశిరాత్రి సుడిగాలిలో చిక్కితిని",lyrics:`నిశిరాత్రి సుడిగాలిలో చిక్కితిని
ఊపిరితో మిగిలెదనా ఉదయానికి
తడవు చేయక యేసు నను చేరుకో
నా ప్రక్కనే ఉండి నను పట్టుకో
భయముండగలదా నీవున్నచో
నీ కన్నులు నామీద నిలిచుండగా
నా చేయి నీ చేతిలో ఉండగా

1. ఈ చీకటి సమయం నిలిచెను నా ఈ పయనం
కనిపించక దారులు మొదలాయెను కలవరము
వీచే ఈ గాలులలో నే కొట్టుకుపోకుండా
తప్పించెదవని దేవా ఆశతో నే వేచితిని
నీవు గాక నాకిపుడు దిక్కెవ్వరు

2. నే చేసిన వాగ్ధానము లెన్నో ఉన్నాయి
నెరవేర్చు బాధ్యతలు ఇంకా మిగిలాయి
ఈ రేయి ఈ చోటే నేనాగి పోవలదు
రాతిరి గడిచేవరకు నీ చాటున నను దాచి
ఉదయమును చూపించుము నా కంటికి

3. అల్పము ఈ జీవితమని నేనెరిగితిని
కనురెప్పపాటున ఆవిరికాగలదు
అనుదినమిక నీ కృపనే నే కోరుచు
పయనింతును నా గురివైపు నిను ఆనుకుని
భయముండగలదా నీవున్నచో
నీ కన్నులు నామీద నిలిచుండగా
నా చేయి నీ చేతిలో ఉండగా`,keywords:["nisirathri sudigalilo","nisi raathri sudigalilo","nisi raathre","nese raathri","nesi rathri","nise rathri"],video:"",artist:"Joel Kodali, Hadlee Xavier, & John Nissy",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నీకన్నా లోకాన",lyrics:`నీకన్నా లోకాన నా కెవరున్నారయ్యా
నాకున్న తోడు నీడ నీవే యేసయ్యా

1. నీలా ప్రేమించేవారు ఎవరున్నారయ్యా
ప్రాణం బెట్టిన దేవుడవు నీవే యేసయ్యా

2. నీలా బోధించేవారు ఎవరున్నారయ్యా
జీవం ఉన్న దేవుడవు నీవే యేసయ్యా

3. నీలా రక్షించేవారు ఎవరున్నారయ్యా
రక్తం కార్చిన దేవుడవు నీవే యేసయ్యా

4. నీలా పోషించేవారు ఎవరున్నారయ్యా
అన్నీ తెలిసిన దేవుడవు నీవే యేసయ్యా`,keywords:["nikanna lokaana","ni kanna lokana","nee kanna lookaana","nee kana lokana","ne kana lokana","nee kanna lookana","stevenson"],video:"",artist:"Dr. A. R Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీకసాధ్యమైనది ఏదియు లేదు",lyrics:`నీకసాధ్యమైనది ఏదియు లేదు
సమస్తము సాధ్యము నీకు (2)
ప్రభువా ప్రభువా
సమస్తము సాధ్యం (2)       ||నీకసాధ్యమైనది||

1. వ్యాధులనుండి స్వస్థపరచుట సాధ్యం – సాధ్యం
బలహీనులకు బలమునిచ్చుట సాధ్యం – సాధ్యం (2)
నీకు సాటియైన దేవుడు లేనే లేడు యేసయ్యా
నీకు సాటియైన దేవుడు జగమున లేనే లేడయ్యా (2)
బలవంతుడా మహోన్నతుడా
స్తోత్రార్హుడా – నా యేసయ్యా (2)       ||నీకసాధ్యమైనది||

2. పాపమునుండి విడిపించుట సాధ్యం – సాధ్యం
శాపమునుండి విముక్తినిచ్చుట సాధ్యం – సాధ్యం (2)
నీలా ప్రేమించే దేవుడు లేనే లేడు యేసయ్యా
నీలా ప్రేమించే దేవుడు జగమున లేనే లేడయ్యా (2)
బలవంతుడా మహోన్నతుడా
స్తోత్రార్హుడా – నా యేసయ్యా (2)       ||నీకసాధ్యమైనది||

3. దుష్ట శక్తులను కాల్చివేయుట సాధ్యం – సాధ్యం
నీతి రాజ్యమును స్థాపించుట సాధ్యం – సాధ్యం (2)
నీలా గొప్ప కార్యములు చేసే దేవుడు లేడు యేసయ్యా
నీలా గొప్ప కార్యములు చేసే దేవుడు జగమున లేనే లేడయ్యా (2)
బలవంతుడా మహోన్నతుడా
స్తోత్రార్హుడా – నా యేసయ్యా (2)       ||నీకసాధ్యమైనది||

4. సర్వ సత్యములో నడిపించుట సాధ్యం – సాధ్యం
పరిశుద్ధాత్మను అనుగ్రహించుట సాధ్యం – సాధ్యం (2)
నీలా పరిశుద్ధ దేవుడు లేనే లేడు యేసయ్యా
నీలా పరిశుద్ధ దేవుడు జగమున లేనే లేడయ్యా (2)
బలవంతుడా మహోన్నతుడా
స్తోత్రార్హుడా – నా యేసయ్యా (2)       ||నీకసాధ్యమైనది||`,keywords:["నీకసాధ్యమైనది ఏదియు లేదు","neeku asadhyamainadhi yedhiyu ledhu","nikasadhyamainadhi yedhiyu ledhu","neekasadhyamainadhi eedhi leedhu","neeku asahyamainadhi eedhi ledhu"],video:"",artist:"",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"నీకసాధ్యమైనది ఏముంది - సర్వాధిపతి యేసయ్య",lyrics:`నీకసాధ్యమైనది ఏముంది - సర్వాధిపతి యేసయ్య
నా నిరీక్షణ నీలో వుంది - నిన్నే నమ్మినానయ్య

1. మరణపు ముల్లును విరచిన సర్వాధిపతి యేసయ్య
పాపిని రక్షింపగలిగినా - నిన్నే నమ్మినానయ్య

2. గాలిని నిమ్మళపరచినా-సర్వాధిపతియేసయ్య
సృష్టిని శాశించగల్గిన- నిన్నే నమ్మినానయ్య

3. దీనుల చెంతను నిలిచిన-సర్వాధిపతియేసయ్య
స్వస్థత చేకూర్చు గలిగిన-నిన్నే నమ్మినానయ్య

4. చచ్చిన వానిని లేపిన-సర్వాధిపతి యేసయ్య
నిత్య జీవమును చూపిన-నిన్నే నమ్మినానయ్య`,keywords:["neeku asadhyamainadhi em undhi","neekasadhyamainadhi yem undhi","neku asadhyamainadhi","niku asadhyamainadhi","niku asadyamainadi","neeku asadyamainadi","neku asadyamainadi","stevenson"],video:"",artist:"Dr. A. R Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ కనికరములు తరతరములు",lyrics:`నీ కనికరములు తరతరములు - నీ కార్యములు ఆశ్చర్యకరములు
నీ మహిమలు తరతరములు  - నీ తలంపులు అత్యున్నతములు

నీ నామం  నిలుచును యుగయుగములు
నీ నామం నిలుచును తరతరములు 

యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య 
యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య


1. మోషేకు ఎర్ర సముద్రము అడ్డుగా నిలబిడగా 
యెహోషువ యెరికో గోడలను కూల్చ చుట్టుముట్టగా
 
నీ కృపను క్రుమ్మరించినావు - నీ ప్రేమను ప్రకటించినావు

యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య 
యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య 

నీ నామం  నిలుచును యుగయుగములు
నీ నామం నిలుచును తరతరములు 

2. సింహాల బోనులో దానియేలు మోకరించి ప్రార్ధించగా 
చెరసాలలో పౌలు సీలలు సంకెళ్లతో  స్తుతియించగా 

నీ కృపను క్రుమ్మరించినావు - నీ ప్రేమను ప్రకటించినావు 

యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య 
యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య

నీ నామం  నిలుచును యుగయుగములు
నీ నామం నిలుచును తరతరములు 

3. అబ్రహాము ఇస్సాకును బలి ఇవ్వ సిద్దపడగా 
అన్నల పగకు యోసేపు బానిసగా అమ్మబడగా 

నీ కృపను క్రుమ్మరించినావు - నీ ప్రేమను ప్రకటించినావు

యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య 
యేసయ్య యేసయ్య ... యేసయ్య యేసయ్య 

నీ కనికరములు తరతరములు - నీ కార్యములు ఆశ్చర్యకరములు
నీ మహిమలు తరతరములు  - నీ తలంపులు అత్యున్నతములు`,keywords:["neekanikaramulu","nikanikaramulu","ni kanika ramulu","neekanika ramulu","nee kanikaramulu","ni kanikaramulu"],video:"",artist:"Joshua Shaik, Kavitha Shaik, Hadlee Xavier, Jerusha Joseph & Stephenson Undunty",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ కంటిపాపనూ - నా కంటనీరు చూడలేవు",lyrics:`నీ కంటిపాపనూ - నా కంటనీరు చూడలేవు
నీ చల్లనిచూపులో - నేనుందును నీ కృపలో

యేసయ్యా యేసయ్య ఏ అడ్డూ వద్దయ్యా
నీ ప్రేమకు నాలో సరిహద్దులు లేవయ్యా

1. కన్నవారు నీ దారి నీదన్నారు 
నమ్మినవారే నవ్విపోయారు
విరిగి నలిగీ నీవైపు చూశాను 
తల్లివై తండ్రివై నన్నాదుకున్నావు  ||యేసయ్యా|| 

2. ఎందరెందరిలో నన్నెన్నుకున్నావు 
ఎంతగానో ప్రేమించి లాలించావు
నా ఊపిరీ నా ప్రాణమూ - నీ దయలోనే నా జీవితం   ||యేసయ్యా|| 

3. నీ మాటలో నా బాటను    
నీ ప్రేమలో నా పాటను
సాగిపోనీ నా యాత్రనూ నీ దరి నేను చేరువరకు   ||యేసయ్యా||`,keywords:["ni kanti paapanu na kanta neeru chudaleevu","nee kanti paapanu na kanta neeru chudalevu","ni kanti papanu"],video:"",artist:"Joshua Shaik, JK Christopher,  Sis. Kavitha Shaik, Sis. Sharon Philip, Sis. Lilian Christopher, & Sis. Hanah Joel",genre:["General","Hope","Comfort"],timeSignature:"4/4"},{id:l(),title:"నీకంటే నమ్మదగిన దేవుడెవరయా",lyrics:`నీకంటే నమ్మదగిన దేవుడెవరయా 
నీవుంటే నాతో ఏ భయము లేదయా

మేలుకొరకే అన్నీ జరిగించు యేసయ్యా 
కీడువెనకే ఆశీర్వాదం పంపుతావయ్యా

1. కొట్టబడినవేళ నా గాయం కట్టినావే 
బాధించినా స్వస్థపరచేది నీవే

2. అణచబడినవేళ నా తలను ఎత్తినావే 
శిక్షించినా గొప్ప చేసేది నీవే

3. విడువబడినవేళ నను చేరదీసినావే 
కోపించినా కరుణచూపేది నీవే`,keywords:["nikante nammadhagina dhevudevarayya","nekante nammadagina dhevudevaraya","neekante nammadhagina dhevudevaraya","nikante namadagina","nekante namadagina","stevenson"],video:"",artist:"Dr. A.R.Stevenson",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నీ కంటి పాపవలె",lyrics:`నీ కంటి పాపవలె నన్ను కాచుటకు
నేను అర్హుడనా నేను అర్హుడనా
ఘోరపాపినైన నన్ను మన్నించుటకు
నేను అర్హుడనా నేను అర్హుడనా
వేదనను భరియించి
అవమానం సహియించి
నా కొరకు సిలువలో
ప్రాణమును అర్పించుటకు
నేను అర్హుడనా

1. నన్ను పరమున చేర్చుటకు - నీవే నా దరి చేరితివి
నాకు విడుదల నిచ్చుటకు - నా దోషములను మోసితివి
నా శాపము తొలగించుటకు - నీవే పాపముగా మారి
నన్ను శుద్ధుని చేయుటకు - నీ రక్తము చిందించితివి
నాలో ఊపిరి నిలుపుటకు - నీ తుది శ్వాస వీడితివి
ఇంత ప్రేమ చూపుటకు - నే అర్హుడనా 
నాలో ఊపిరి నిలుపుటకు - నీ తుది శ్వాస వీడితివి
ఇంత ప్రేమ చూపుటకు - నే అర్హుడనా 

నీ కంటి పాపవలె నన్ను కాచుటకు
నేను అర్హుడనా నేను అర్హుడనా
ఘోరపాపినైన నన్ను మన్నించుటకు
నేను అర్హుడనా నేను అర్హుడనా

2. అల్పుడను నను కరుణించి - రక్షణ కవచము నాకిచ్చి
యోగ్యుడవంటు నను పిలచి - నీ వారసునిగా చేసితివి
అర్పింతును యేసు నీకే - సర్వ ఘనత ప్రభావములు
నా జీవిత పరియంతము - నీ దాసుడనై బ్రతికెదను
నీ చరణములను హత్తుకుని - అద్దరి చేరుకుందునయా
నీ మహిమా కాంతులలో - నివసింతునయా
నీ చరణములను హత్తుకుని - అద్దరి చేరుకుందునయా
నీ మహిమా కాంతులలో - నివసింతునయా`,keywords:["nee kanti paapa vale","ni kanti paapa vale","nee kanti paapavale","nee kante paapavale","ni kante paapa vale","neekanti paapa vale","nikanti paapa vale","neekanti papa valey","kanti paapa vale","kantipaapavale","kante papavale","good friday","goodfriday","lent","cross"],video:"",artist:"Hadlee Xavier",genre:["Lent","Good Friday"],timeSignature:"4/4"},{id:l(),title:"నీ కార్యములు ఆశ్చర్యములు దేవా ",lyrics:`నీ కార్యములు ఆశ్చర్యములు దేవా (4)
నీవు సెలవియ్యగా – శూన్యము సృష్టిగా మారెనే
నీవు సెలవియ్యగా – మారా మధురం ఆయెనే
నీవు సెలవియ్యగా – దురాత్మలు పారిపోయెనే
నీవు సెలవియ్యగా – దరిద్రము తొలగిపోయెనే (2)

1. మోషే ప్రార్ధించగా – మన్నాను ఇచ్చితివే
ఆ మన్నా నీవే యేసయ్యా
ఏలియా ప్రార్ధించగా – ఆహారమిచ్చితివే
నా పోషకుడవు నీవే కదా (2)   ||నీవు సెలవియ్యగా||

2. లాజరు మరణించగా – మరణము నుండి లేపితివే
మోడైనను చిగురింపచేసెదవు
కానాన్ వివాహము ఆగిపోవుచుండగా
నీ కార్యముతో జరిగించితివే

నీ కార్యముతో (12)

సెలవిమ్మయ్యా సెలవిమ్మయ్యా
ఈ క్షణమే యేసయ్యా (8)    ||నీవు సెలవియ్యగా||`,keywords:["nee kaaryamulu","ni kaaryamulu","nekaryamulu","nee karyamu","nee kaaryamulu","ni karyamu","neekaaryamulu","nikaryamulu","worship","praise"],video:"",artist:"Vinod Kumar & Benjamin Johnson",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నీకిష్టమైనది కావాలి దేవునికి",lyrics:`నీకిష్టమైనది కావాలి దేవునికి
బలి అర్పణ కోరలేదు దేవుడు
ప్రభు మనసు తెలుసుకో
వాక్యాన్ని చదువుకో

1. కయీను అర్పణ తెచ్చాడు దేవునికి
హేబేలు అర్పణ నచ్చింది దేవునికి
అర్పించు వాటికంటే అర్పించు మనసు ముఖ్యం
నచ్చాలి మొదట నీవే కావాలి మొదట నీవే

2. దేహాన్ని దేవునికి ఇవ్వాలి కానుకగా
క్రీస్తేసు వలె దేహం కావాలి యాగముగా
నీ ధనము ధాన్యము కంటే ఒక పాపి మార్పు ముఖ్యం
ప్రకటించు క్రీస్తు కొరకే మరణించు పాపి కొరకే`,keywords:["నీకిష్టమైనది కావాలి దేవునికి","neekistamainadhi kaavali dhevunuki","neeku ishtamainadhi kavali dhevuniki","nekistamainadhi kavali dhevuniki","nikistamainadhi kavali dhevuniki","nikistamainadi kavali devuniki"],video:"",artist:"",genre:["General","Offering","Repentance"],timeSignature:"4/4"},{id:l(),title:"నీ కృపతో నింపిన నా జీవితం",lyrics:`నీ కృపతో నింపిన నా జీవితం
మహోన్నత సేవకే అంకితం
నా ఊహకు అందనీ నీ త్యాగమే
నను నీలో స్థిరపరచెను
సరిహద్దులు లేని శాశ్వత ప్రేమను
నా పై చూపావు 
అవధులు లేని ఆనందముతో
అనుదినము స్తుతి పాడెద  (2)
||నీ కృపతో||

1.ఉన్నత స్థలములలో నను నడిపించెయ్
నీదు సంకల్పము
ఊహకు మించిన కార్యము చేయుటయే
నీకే సాధ్యము (2)
నా మధుర గీతిక నీవేనయ్యా
నీ మహిమతో నన్ను నింపుమయ (2)
||నీ కృపతో||

2.పిలుపుకు తగినట్లు జీవించుటయే
నీదు చిత్తము
నీతిమంతులమై మొవ్వవేయుదము
నీదు సన్నిధిలో (2)
నా స్తుతిమాలిక నీవేనయ్యా
నీ సిలువ నీడలో దాచుమయా (2)
||నీ కృపతో||

3.అందని శిఖరముపై నన్ను నింపుటకు యాగమైతివి 
ఆకాంక్షతో నేను కనిపెట్టుకొందును 
నీదు రాకకై (2)
నా ప్రతి ఆశ సీయోనుకే 
నీ ఆలోచనతో నడుపుమయా (2)
||నీ కృపతో||`,keywords:["ni krupatho nimpina naa jeevitham","nee krupatho nimpina na jevitham","ne krupatho nimpina na jivitham"],video:"",artist:"Pr.William Carey, Esther, JK Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ కృప నాకు ఆధారమై",lyrics:`నీ కృప నాకు ఆధారమై 
నీ కృప నాకు ఆశ్రయమై 
ప్రతీ  క్షణమున ప్రతీ స్థలమునా 
నన్నెంతో బలపరచెను 
యేసయ్య నీ కృప చాలయ్యా  
నీ కృపాచాలును యేసయ్య 

1. నశియించిపోతున్న నాకోసమే 
నరునిగా మారినది నీ కృప 
బ్రతికున్న మృతుడను నను లేపగా 
మహిమను విడచినది నీ కృప 
యోగ్యతలేని ఈ దీనునిపై 
శాశ్వత ప్రేమను చూపినది 
బలమైన రక్షణ స్థిరమైన దీవెన 
ఇలానాకు ఇచ్చినది నీ కృప 

2. పాపాంధకారానా పడియుండగా 
ననుపిలచినది నీ కృప 
పరలోక జీవము నే పొందగా 
నను బ్రతికించినది నీ కృప 
విలువగు రుధిరం సిలువలో నాకై 
చిందించినది నీ కృప 
మితిలేని నీ ప్రేమ గతిలేని నాపైన 
విడువక చూపినది నీ కృప`,keywords:["ni krupa naku aadharamai","nee krupa naaku aadharamai","ne krupa naku adharamai"],video:"",artist:"Edurumondi John Chakravarthi, Eli moses, & Alina Moses",genre:["General","Grace","Redemption","Sin"],timeSignature:"4/4"},{id:l(),title:"నీ కృపను గూర్చి నే పాడెదా",lyrics:`నీ కృపను గూర్చి నే పాడెదా
నీ ప్రేమను గూర్చి ప్రకటించెదా (2)
నిత్యము నే పాడెదా
నా ప్రభుని కొనియాడెదా (2)
మహిమా ఘనతా
ప్రభావము చెల్లించెదా (2)         ||నీ కృపను||

1. ఇరుకులో ఇబ్బందిలో ఇమ్మానుయేలుగా
నిందలో అపనిందలో నాకు తోడు నీడగా (2)
నా యేసు నాకుండగా
నా క్రీస్తే నా అండగా
భయమా దిగులా
మనసా నీకేలా (2)         ||నీ కృపను||

2. వాక్యమై వాగ్ధానమై నా కొరకై ఉదయించినా
మరణమే బాలియాగమై నన్ను విడిపించినా (2)
నా యేసు నాకుండగా
నా క్రీస్తే నా అండగా
భయమా దిగులా
మనసా నీకేలా (2)         ||నీ కృపను||`,keywords:["ni krupanu gurchi nee paadedha","nee krupanu gurchi ne padedha","nee krupanu goorchi ne padedha","ni krupanu goorchi ne padedha"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"నీ కృప లేనిచో ఒక క్షణమైననూ",lyrics:`నీ కృప లేనిచో ఒక క్షణమైననూ
నే నిలువజాలనో ప్రభు (2)

నీ కృప లేనిచో ఒక క్షణమైననూ
నే నిలువజాలనో ప్రభు (2)
ప్రతి క్షణం కనుపాపలా
నను కాయుచున్న దేవుడా (2)  ||నీ కృప||

1. ఈ ఊపిరి నీదేనయ్యా
నీవిచ్చిన దానం నాకై
నా ఆశ నీవేనయ్యా
నా జీవితమంతా నీకై (2)
నిను నే మరతునా మరువనో ప్రభు
నిను నే విడతునా విడువనో ప్రభు (2)  ||నీ కృప||

2. నా ఐశ్వర్యమంతా నీవే
ఉంచినావు నీ దయ నాపై
నీ దయ లేనిచో నాపై
ఉందునా ఈ క్షణమునకై (2)
కాచి ఉంచినావయ్యా – ఇంత వరకును
నను వీడిపోదయ్యా – నాకున్న నీ కృప (2)  ||నీ కృప||`,keywords:["నీ కృప లేనిచో ఒక క్షణమైననూ","ni krupa lenicho oka kshanamainanu","nee krupa lenichoo","ne krupa leenicho","nikrupa lenicho","neekrupa lenicho"],video:"",artist:"",genre:["General","Grace","Worship"],timeSignature:"6/8"},{id:l(),title:"నీ కృప లేనిదే - నీ దయ లేనిదే",lyrics:`నీ కృప లేనిదే - నీ దయ లేనిదే 
క్షణమైనా బ్రతుకలేనయ్య (2)
నేనేమైయున్నానో నాకెమున్నాను 
కేవలం నీ కృప (2) 
యేసయ్యా యేసయ్యా  నీ కృప చాలయ్యా (2) ||నీ కృప లేనిదే||

1. నాశనకరమైన గోతి నుండి 
నను లేవనెత్తినది నీ కృప  (2)
నీ కృపలోనే నా జీవితం 
కడవరకు కొనసాగించెదన్  (2) 
యేసయ్యా యేసయ్యా  నీ కృప చాలయ్యా (2)  ||నీ కృప లేనిదే||

2. ఏ దిక్కులేని నాకు సర్వము నీవే 
ఆదరించినది నీ కృప (2) 
మాటరని నాకు రాగమునిచ్చి 
నీ కృపాను చాటె దన్యతనిచ్చావు (2) 
యేసయ్యా యేసయ్యా  నీ కృప చాలయ్యా (2) ||నీ కృప లేనిదే||`,keywords:["ni krupa lenidhe ni dhaya lenidhe","ne krupa lenidhe ne dhaya lenidhe",,"nee krupa lenidhe","nee krupa leenidhe ni dhaya leenidhe"],video:"",artist:"Jhilik Debbarma Joel & JK Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ కృప లేని క్షణము",lyrics:`యేసయ్యా నీ కృప నాకు చాలయ్యా 
నీ కృప లేనిదే నే బ్రతుకలేనయ్యా (2) 

నీ కృప లేని క్షణము – నీ దయ లేని క్షణము 
నేనూహించలేను యేసయ్యా (2) 
యేసయ్యా నీ కృప నాకు చాలయ్యా 
నీ కృప లేనిదే నేనుండలేనయ్యా (2) ||నీ కృప|| 

1. మహిమను విడిచి మహిలోకి దిగి వచ్చి 
మార్గముగా మారి మనిషిగా మార్చావు 
మహిని నీవు మాధుర్యముగా మార్చి 
మాదిరి చూపి మరో రూపమిచ్చావు (2) 
మహిమలో నేను మహిమను పొంద 
మహిమగా మార్చింది నీ కృప (2) || యేసయ్యా || 

2. ఆజ్ఞల మార్గమున ఆశ్రయమును ఇచ్చి 
ఆపత్కాలమున ఆదుకొన్నావు 
ఆత్మీయులతో ఆనందింప చేసి 
ఆనంద తైలముతో అభిషేకించావు (2) 
ఆశ తీర ఆరాధన చేసే 
అదృష్టమిచ్చింది నీ కృప (2) || యేసయ్యా ||`,keywords:["నీ కృప లేని క్షణము","yesayya ni krupa naku","ni krupa leni kshanamau","nee krupa leni","ne krupa leeni","nee krupa leeni","ni krupa leene","ne krupa leene","ni krupa leeni","ne krupa leni kshanamu","ni krupa leni kshanamu","ne krupaleni kshanamu","neekrupaleni kshanamu","nikrupaleni kshanamu","krupa","yeesayya nee kropa","yeesayya nee krupa","yeesayya ne krupa","yesayya ne krupa","yesayya nee krupa","yesayya ne kropa","eesayya ni krupa","eesayya nee krupa","kropa"],video:"",artist:"",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నీ కృపాతిశయమును అనునిత్యము",lyrics:`నీ కృపాతిశయమును అనునిత్యము
నే కీర్తించెదా తరతరములకు
నీ విశ్వాస్యతను నే ప్రచురింతును

నీ కృపా నీ కృపా ఆకాశముకంటే హెచ్చైనది 
మౌనిగా యెటులుండెదా సాక్షిగా ప్రచురించకా
నా తుది శ్వాస వరకు నీ చెంత చేరేవరకు 

1. ఇంకా బ్రతికి ఉన్నామంటే -  కేవలము నీ కృపా
ఇంకా సేవలో ఉన్నామంటే - కేవలము నీ కృపా
ఏ మంచితనము - లేకున్ననూ 
కొనసాగించినది నీ కృపా 
నిలబెట్టుకొన్నది నీ కృపా ||నీ కృపా||

2. పది తరములుగా వెంటాడిన - మోయాబు శాపము
నీ కృపను శరణు వేడగా - మార్చేనే వెయ్యి తరములు 
అన్యురాలైన ఆ రూతును - ధన్యురాలుగా మార్చినది
నీ కృపయే నన్ను దీవించగా
ఏ శాపము నాపై పనిచేయదు ||నీ కృపా||

3. ఆరోగ్యం ఉద్యోగం ఉన్నాయంటే - కేవలము నీ కృపా
మెతుకు బ్రతుకు ఉన్నాయంటే - కేవలము నీ కృపా
కృపతోనే రక్షణనిచ్చావు - నా క్రియల వలన కానే కాదు
జీవితమంతా ఋణస్థుడను
నీయందే నిత్యము అతిశయము  ||నీ కృపా||

4. ఇల్లు వాహనం ఉన్నాయంటే - నీదు కృపాదానమే
బలము ధనము ఉన్నాయంటే - నీదు కృపా దానమే 
ఏ అర్హత నాలో లేకున్ననూ - కృపా భిక్షయే నా యెడల
జీవితమంతా కృతజ్ఞుడను
జీవితమంతా పాడెదను  ||నీ కృపా||

5. ప్రియులే నన్ను విడనాడినా - శోకమే నా లోకమా
అనాధగానే మిగిలానే - నా కథ ముగిసినదే
నీ కుడిచేతిలో ఉంచగనే - బెన్యామీను వంతుగా మారే
ఐదంతలాయే నా భాగ్యము
విధిరాతనే మార్చెనే నీ కృపా ||నీ కృపా||`,keywords:["ni krupaathi","nee krupaathi sayamunu","nee krupathisayamu","ni krupathisayamunu","ni krupaathisayamu","ni krupa athisayam","nee krupaathisayamu","ne krupaathisayamu","ni krupa"],video:"",artist:"Dr. Asher Andrew, John Pradeep",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీకేమి చెల్లింతునయ్యా – సిలువలో నీవు చూపిన ప్రేమకై",lyrics:`నీకేమి చెల్లింతునయ్యా – సిలువలో నీవు చూపిన ప్రేమకై (2)
మాటలతో ప్రకటించనా – పాటలతో ఘనపరచనా (2)
ఆత్మతో ఆరాధించన – నా యేసయ్యా
ఆత్మతో ఆరాధించనా (2)
||నీకేమి||

2. నరులను ప్రేమించి – వారి పాపము క్షమియింప
పరమును విడిచి – ఇల భువికేతెంచావు (2)
రిక్తుడిగా వచ్చి – దాసుడవైన యేసయ్యా (2)
దాసుడవైనా – యేసయ్యా
||ఆత్మ||

2. సిలువను మోసి – దాని విలువను మార్చావు
కలువరి గిరిని – రక్షణ గిరిగా మార్చావు (2)
పాపినైన నన్ను మార్చి – నా గతిని చూపిన యేసయ్యా (2)
నా గతిని చూపిన – యేసయ్యా
||ఆత్మ||

3. పాపము భరియించి – మా శాపము తొలగించ
సిలువలో రక్తము కార్చి – మము రక్షించావు (2)
నిత్యమూ జీవించే – నిరీక్షణ ఇచ్చిన యేసయ్యా (2)
నిరీక్షణ ఇచ్చిన – యేసయ్యా
||ఆత్మ||`,keywords:["nikemi chellinthunayya","nekemi chellinthunayya","neekemi chellinthunayya","nikeemi chellinthunayya","nikemi chelintunayya","nekemi chelinthunaya"],video:"",artist:"Bro. Yohanu Katru, KY Ratnam",genre:["Love","General"],timeSignature:"4/4"},{id:l(),title:"నీ చరణములే నమ్మితి నమ్మితి",lyrics:`నీ చరణములే నమ్మితి నమ్మితి నీ పాదములే పట్టితి బట్టితి బట్టితి  ||నీ చరణములే||

1. దిక్కిక నీవే చక్కగ రావే మిక్కిలి మ్రొక్కుదు మ్రొక్కుదు మ్రొక్కుదు  ||నీ చరణములే||

2. ఐహిక సుఖము నరసితి నిత్యము ఆహాహా ద్రోహిని ద్రోహిని ద్రోహిని  ||నీ చరణములే||

3. న్యాయము గాని నా క్రియ లన్ని రోయుచు ద్రోయకు త్రోయకు
త్రోయకు ||నీ చరణములే||

4. భావము మార్చి నావెత దీర్చి దేవర ప్రోవవే ప్రోవవే ప్రోవవే  ||నీ చరణములే||

5. చంచల బుద్ధి వంచన యెద్ది ఉంచక త్రుంచవే త్రుంచవే త్రుంచవే  ||నీ చరణములే||

6. చుట్టుకొని యున్న శోధన లున్న పట్టు విడ గొట్టవే కొట్టవే కొట్టవే   ||నీ చరణములే||

7. నాచు పిశాచి నరుకుట గాచి కాచుకో దాచవే దాచవే దాచవే  ||నీ చరణములే||

8. యేసుని తోడ నెన్వరు సాటి దోసము బాపును బాపును బాపును  ||నీ చరణములే||`,keywords:["ni charanamule nammithi nammithi","ne charanamule nammithi nammithi","nee charanamule nammithi","Andhra Christian Hymn"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"నీ చల్లని చూపుతో కరుణించి నందున బ్రతికి ఉన్ననయ్యా",lyrics:`నీ చల్లని చూపుతో కరుణించి నందున బ్రతికి ఉన్ననయ్యా 
నీ చేయి చాపి లేవనెత్తి నందున జీవించుచున్నానయ్యా (2)
యేసయ్య నా మంచి యేసయ్యా 
నీ కృపతో నన్ను  కాపాడితివి
యేసయ్య నా గొప్ప యేసయ్యా
నీ దయ చూపించి స్వస్థత నిచ్చితివి (2)
||నీ చల్లని||

1. నా భుజములపై చేయి వేసితివి
దిగులు బెంగ వద్దని నాతో అంటివి
నీ సన్నిధి నాకు తోడుగ ఉంచితివి
నా కన్నీళ్లు ప్రతి రోజు తుడచితివి (2)
నీ కృపతో కనికరించి నా వ్యాధి భాధలలో
కంటి పాపగా నను కాపాడితివి (2)
||యేసయ్యా||
||నీ చల్లని||

2. నా బలహీనతలో బలమై నిలచితివి
చీకు చింతా వద్దని నాతో అంటివి
నీ స్వరమును నాకు తోడుగా ఉంచితివి
నా నిట్టూర్పులో నన్ను బలపరచితివి (2)
నీ కృపతో ఆదరించి నా క్షామకాలములో
మంచి  కాపరివై నను కాపాడితివి (2)
||యేసయ్య||
||నీ చల్లని||`,keywords:["ni challani chuputho karuninchi","nee challani chuputho",":ne challani chuputho","ni chalani chuputo"],video:"",artist:"Bro.Prasad Nelapudi, Bro.KY Ratnam ",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ చిత్తమునే నెరవేర్చుటకై నను ఎన్నుకొని",lyrics:`నీ చిత్తమునే నెరవేర్చుటకై నను ఎన్నుకొని
నీ కృపావరమునే దానముగా దయచేసి (2)
నీ ప్రేమలో పరవశించి
నీ సన్నిధిలో నే చేరి
నీ నామమును నీ ప్రేమను నేను ఘనపరచెదను
దేవా… నా దేవా…
నా యేసయ్యా నా రక్షకుడా (2)      ||నీ చిత్తమునే||

1. హృదయము బ్రద్దలై ఏడ్చిన వేళ
కన్నీటి ప్రార్దన చేసిన వేళ (2)
నీ చిత్తముకై నే ఎదురు చూసి
నీ బలము పొంద సహియింప చేసి
నా ప్రాణమును తృప్తి పరచితివే       ||దేవా||

2. నాలోని ప్రాణం తల్లడిల్లిపోగా
భూదిగంతములనుండి మొర్ర పెట్టుచున్నాను (2)
నా శత్రువుపై నే జయమునిచ్చి
నా ఆశ్రయమై ధైర్యమును నింపి
నా కోట నీవైతివే       ||దేవా||`,keywords:["ni chithamune neraveerchuta kai","nee chithamune neraverchutakai"],video:"",artist:"Hadlee Xavier",genre:["Worship","General","Hope"],timeSignature:"4/4"},{id:l(),title:"నీ చేతి కార్యములు సత్యమైనవి",lyrics:`నీ చేతి కార్యములు సత్యమైనవి
నీ నీతి న్యాయములు ఉన్నతమైనవి (2)
నీ ఆజ్ఞలు కృపతో నిండియున్నవి
నీ జాడలు సారమును వెదజల్లుచున్నవి (2)

బల సౌందర్యములు
పరిశుద్ధ స్థలములో ఉన్నవి
ఘనతా ప్రభావములు
ప్రభు యేసు సన్నిధిలో ఉన్నవి (2)
మాపై నీ ముఖ కాంతిని
ప్రకాశింపజేయుము యేసయ్యా

1. నీ ఆలోచనలు గంభీరములు
నీ శాసనములు హృదయానందకరములు (2)
నీ మహిమ ఆకాశమంత వ్యాపించియున్నవి
నీ ప్రభావం సర్వ భూమిని కమ్ముచున్నవి (2) ||బల సౌందర్యములు||

2. నీ రూపము ఎంతో మనోహరము
నీ అనురాగము మధురాతి మధురము (2)
నీ నామము నిత్యము పూజింపతగినది
నీ విశ్వాస్యత నిరతము నిలచునది (2) ||బల సౌందర్యములు||`,keywords:["nee chethi karyamulu sathyamainavi","ni chethi karyamulu satyamainavi","nee cheti karyamulu satyamainavi"],video:"",artist:"Hana Joyce & J. K. Christopher",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"నీ చేతితో నన్ను పట్టుకో",lyrics:`నీ చేతితో నన్ను పట్టుకో 
నీ ఆత్మతో నన్ను నడుపు 
శిల్పి చేతిలో శిలను నేను
అనుక్షణము నన్ను చెక్కము (2)

1. అందకార లోయలోన 
సంచరించినా భయము లేదు
నీ వాక్యం శక్తి గలది 
నా త్రోవకు నిత్య వెలుగు  (2) ||నీ చేతితో||

2. గొరపాపిని నేను తండ్రి 
పాప ఊబిలో  పడి యుంటిని
లేవనెతుము శుద్ది చేయుము
పొందని మ్ము నీదు ప్రేమను(2) ||నీ చేతితో||

3. ఈ భువిలో రాజునీవే 
నా హృదయంలో శాంతి నీవే 
క్రమ్మ రించుము నీదు ఆత్మమను
జీవితాంతము సేవ చేసేదన్ (2)  ||నీ చేతితో||`,keywords:["నీ చేతితో నన్ను పట్టుకో","nee chethitho nannu pattuko","nee chethitho","ni chethitho","ni chetito","ne chethitho","ne chetitho","ne chethito","ni chethito","ni chetitho","nee chethithoo","ni chethitho nannu pattuko","nee cheythitho","nannu pattuko"],video:"",artist:"",genre:["Andhra Christian Hymn","General"],timeSignature:"4/4"},{id:l(),title:`నీటిపైనా నడిచెను
గాలి సముద్రమును గద్దించెను`,lyrics:`నీటిపైనా నడిచెను
గాలి సముద్రమును గద్దించెను
మృత్యుంజయుడై లేచెను
నాతో నిత్యము జీవించును (2)

ఆయనే కాపాడు దేవుడు
ఆయనే నడిపించే దేవుడు
ఆయనే తోడైయుండు దేవుడు ఆయనే (2)

1.మనకొరకు మరణించి
సిలువలో ప్రాణమునిచ్చెను
జయశీలుడై లేచెను
పాపికి విడుదలనిచ్చెను (2)

ఆయనే కాపాడు దేవుడు
ఆయనే నడిపించే దేవుడు
ఆయనే తోడైయుండు దేవుడు ఆయనే (2)

2.మేఘాల మధ్యలో
బూర ధ్వని శబ్దముతో
రారాజుగా దిగివచ్చును
ఈ భూలోకమును ఏలుటకై (2)

ఆయనే అధికారముతో యేసయ్యా
ఆయనే రాజ్యమేలుటకు యేసయ్యా
ఆయనే న్యాయాధిపతి యేసయ్యా (4)

ఆయనే కాపాడు దేవుడు
ఆయనే నడిపించే దేవుడు
ఆయనే తోడైయుండు దేవుడు ఆయనే (2)`,keywords:["neeti paina nadichenu","neti paina nadichenu","niti paina nadichenu","niti paina nadechenu","neti paina nadichanu","neetipai nadichenu","neetipai nadachenu","neetipai nadechenu","benny joshua","aayane","ayane"],video:"",artist:"Benny Joshua",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీతిగల యెహోవా",lyrics:`నీతిగల యెహోవా స్తుతి మీ – ఆత్మతో నర్పించుడి
మీ ఆత్మతో నర్పించుడి – దాతయవు మన క్రీస్తు నీతిని
దాల్చుకొని సేవించుడి   ||నీతి||

1. చదల బుడమియు రవియు జలధియు – నదులు గిరులును జక్కగా
సదమలంబగు దైవ నామము – సర్వదా నుతి జేయును ||నీతి||

2. సర్వశక్తుని కార్యముల కీ – సర్వ రాష్ట్రము లన్నియు
గర్వములు విడి తలలు వంచుచు – నుర్విలో నుతిజేయను   ||నీతి||

3. గీత తాండవ వాద్యములచే – బ్రీతి పరచెడు సేవతో
పాతకంబులు పరిహరించెడు – దాతనే సేవించుడి  ||నీతి||

4. పరమ దూతలు నరులు పుడమిని – మొరలుబెట్టుచు దేవుని
పరము నందున్నట్టి యేసుని – పాదములు సేవింతురు  ||నీతి||

5. ఇలను భక్తులు గూడుకొనియా – బలము గల్గిన దేవుని
వెలయు స్తుతి వే నోళ్ళతోడను – విసుగు జెందక జేయుడి  ||నీతి||

6. ఆత్మ నీవిక మేలుకొని శు – ధ్ధాత్మ యేసుని దండ్రిని
త్రిత్వమగునా యేక దేవుని – హర్షమున సేవింపవే   ||నీతి||`,keywords:["neethi gala yehova","nitho gala yehova","neethigala yehova","nithogala yehova","neethi gala ehova","neetigala","nitigala yehova"],video:"",artist:"Pasupuleti Dhaveedhu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"నీతో ఉంటే జీవితం - వేదనైన రంగుల పయనం",lyrics:`నీతో ఉంటే జీవితం - వేదనైన రంగుల పయనం
నీతో ఉంటే జీవితం - బాటేదైనా పువ్వుల కుసుమం (2)
 
నువ్వే నా ప్రాణాధారము
నువ్వే నా జీవాధారము (2)

1. నువ్వే లేకపోతే నేను జీవించలేను
నువ్వే లేకపోతే నేను బ్రతుకలేను 
నువ్వే లేకపోతే నేను ఊహించలేను
నువ్వే లేకపోతే నేను లేనే లేను (2)

నిన్ను విడిచిన క్షణమే ఒక యుగమై గడిచే నా జీవితము 
చెదరిన నా బ్రతుకే నిన్ను వెతికే నీ తోడు కోసం (2)

నువ్వే నా ప్రాణాధారము
నువ్వే నా జీవాధారము (2)

2. నీతో నేను జీవిస్తానే కలకాలము
నిన్నే నేను ప్రేమిస్తానే చిరకాలము
లోకంలో నేనెన్నో వెతికా అంతా శూన్యము 
చివరికి నువ్వే నిలిచావు సదాకాలము (2)

నిను విడువను దేవా నా ప్రభువా నా ప్రాణనాధా 
నీ చేతితో మలచి నన్ను విరచి సరిచేయునాధా (2)

నువ్వే నా ప్రాణాధారము
నువ్వే నా జీవాధారము (2)`,keywords:["నీతో ఉంటే జీవితం","neetho unte jeevitham","nitho unte jeevitham","nitho unte jivitham","neetho unte jeevitham","neetho unte jeevetham","nitho untey jevitham","nito unte jevitham","nito unte jevitam","nito unte jivitam","raj prakash paul","neto unte jevetam","nuvve na pranadharamu","neve na pranadaramu","neeve na praanaadharamu","nuvve naa praanaadharamu","nuvve naa pranadharamu","worship"],video:"",artist:"Raj Prakash Paul, Robert Stoll, Jessy Paul",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నీతో గడిపే ప్రతి క్షణము",lyrics:`నీతో గడిపే ప్రతి క్షణము
ఆనంద బాష్పాలు ఆగవయ్యా (2)
కృప తలంచగా మేళ్లు యోచించగా (2)
నా గళమాగదు స్తుతించక – నిను కీర్తించక 

యేసయ్యా యేసయ్యా – నా యేసయ్యా (4)        
||నీతో||

1. మారా వంటి నా జీవితాన్ని
మధురముగా మార్చి ఘనపరచినావు (2)
నా ప్రేమ చేత కాదు
నీవే నను ప్రేమించి (2)
రక్తాన్ని చిందించి
నన్ను రక్షించావు (2)         
||యేసయ్యా||

2. గమ్యమే లేని ఓ బాటసారిని
నీతో ఉన్నాను భయము లేదన్నావు (2)
నా శక్తి చేత కాదు
నీ ఆత్మ ద్వారానే (2)
వాగ్ధానము నెరవేర్చి
వారసుని చేసావు (2)         
||యేసయ్యా||`,keywords:["nitho gadipe prathi kshanamu","nitho gadipey prathi kshanamu","neetho gadipe prathi kshanamu","worship","4/4"],video:"",artist:"Ps.Jyothi Raju",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"నీతో మాట్లాడుట నేర్పయా",lyrics:`నీతో మాట్లాడుట నేర్పయా
నిన్ను ఘనపరచుట నేర్పయా (2)
నీ ఉపకారములను మరువకుండా 
స్తుతియింప నేర్పయా (2)

1. కనులు౦డియు పలుమారులు 
నిన్ను చూడక నేనుంటిని (2)
ఆత్మీయ కన్నులను
నాకు దయచేయుమో యేసయ్యా (2)

2. తెలుసుండియు అవివేకినై
నిన్ను వేడకనేనుంటిని (2)
ఆత్మీయ జ్ఞానమును
నాకుదయచేయుమో యేసయ్యా (2)

3. నిన్ను నమ్మియు ఇహమందున 
నిన్ను విడిచి నేనుంటిని (2)
ఆత్మీయ జీవితము
నాకుదయచేయుము యేసయ్యా (2)`,keywords:["నీతో మాట్లాడుట నేర్పయా","neetho matladuta nerpaya","nitho matladuta neerpaya","nethomatladuta","nithomatladuta","nitoo matladutaa","nito matlaaduta","neeto matladuta","nitoo matladuta","nitho matlaaduta","nito matladuta","nitho matladutaa","nitho mataladuta","nitho mataladuta","neethoo matladuta","netho matladuta","nitho matlaadutaa","netho matlaaduta"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీతోనే ఉండుటయే నా జీవిత వాంచయ్యా",lyrics:`నీతోనే ఉండుటయే
నా జీవిత వాంచయ్యా
నీ చిత్తం నెరవేర్చుటయే
నా హృదయ తపనయ్యా (2)
యేసయ్యా నిన్నే కదా
నా ముందు నిలిపేను (2)   ||నీతోనే||

1. కరుణయు కృపయు నిరంతరం శాంతి
అన్నియు చేయువాడా (2)
నా జీవితం.. నశియింపగా.. (2)
కాపాడువాడా… నా కాపరి… (2)    ||యేసయ్యా||

2. నా కొరకు అన్నియు చేయువాడా
చేసి ముగించువాడా (2)
నా బరువు.. నా బాధ్యత.. (2)
నీ పాద చెంత… నుంచితివి… (2)  ||యేసయ్యా||`,keywords:["nithone undutaye","neethone undutaye","nithone unduta","nithoneundutaye","nitone undutaye","nitone ondutaye","nithone ondutaye"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నీతో సమమెవరు – నీలా ప్రేమించేదవరు",lyrics:`నీతో సమమెవరు – నీలా ప్రేమించేదవరు
నీలా క్షమియించేదెవరు – యేసయ్యా
నీలా పాపికై ప్రాణం పెట్టిన – వారెవరు (2)

1. లోక బంగారము – ధన ధాన్యాలు
ఒక పోగేసినా – నీతో సరితూగునా
జీవ నదులన్నియు – సర్వ సంద్రములు
ఒక్కటై ఎగసినా – నిన్ను తాకగలవా
లోక సౌఖ్యాలన్నీ ఒక చోట కుమ్మరించిన
నీవేగా చాలిన దేవుడవు        ||నీతో||

2. పలు వేదాలలో – మత గ్రంథాలలో
పాపమే సోకని – పరిశుద్దుడేడి
పాప పరిహారార్థం – సిలువ మరణమొంది
తిరిగి లేచినట్టి – దైవ నరుడెవ్వరు
నీలా పరిశుద్ధ దేవుడెవరున్నారయ్యా
నీవేగా మంచి దేవుడవు         ||నీతో||

3. నేను వెదకకున్నా – నాకు దొరికితివి
నేను ప్రేమించుకున్నా – నన్ను ప్రేమించితివి
పలు గాయాలు చేసి – తరచు రేపితిని
నన్నెంతో సహించి – క్షమియించితివి
నీలా జాలిగల ప్రేమగల దేవుడేడి
నీవేగా విమోచకుడవు        ||నీతో||`,keywords:["nitho samamevaru","neetho samamevaru","nithosamamevaru","nito samamevaru","nito samam evaru","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ దయలో నీ కృపలో కాచితివి గతకాలము",lyrics:`నీ దయలో నీ కృపలో కాచితివి గతకాలము
నీ దయలో నీ నీడలో దాచుమయా జీవితాంతము
నీ ఆత్మతో నను నింపుమా
నీ సేవలో ఫలియింపగా
దేవా… దేవా… ||నీ దయ||

1. కష్టకాలం దుఃఖ సమయం నన్ను వేదించగా
ప్రాణ హితులే నన్ను విడచి వెలిగ నను చూడగ (2)
ఓదార్పువై నా చెంత నీవే ఉండినావు
నా కన్నీరు నీ కవితలో రాసి ఉంచినావు (2)
ఏమి అద్బుత ప్రేమయా ఏ రీతి పాడనయా
నీవె నా మార్గము – నీవె నా జీవము
నీవె నా గమ్యము – నీవె నా సర్వము
నా మనసు తీర నిన్ను పాడి పొగడెద దేవా ||నీ దయ||

2. ఏ యొగ్యతయు లేని నా ఎడ నీ కృప చూపితివి
వట్టి పాత్రను మహిమతో నింపి మార్గము నీవైతివి (2)
నీ చిత్తమే నా యందు నెరవేర్పవ్వాలని
నీ సేవయే నా శ్వాసగా కడ వరకు నిలవాలని (2)
నా మది నిండెను ఆశతో నే పాడెద స్తుతి గీతం
నీవె నా తోడుగా – నీవె నా నీడగా
ఆత్మతో నింపుమా – శక్తి నా కొసగుమా
నా చేయి పట్టి నన్ను నీతో నడుపుము దేవా ||నీ దయ||`,keywords:["nee dhayalo nee krupalo","ni dhayalo ni krupalo","ne dhayalo ne krupalo","ni dhayalo nee krupalo","needhayalo","ni dhayaloo","nidhayalo"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ దయలో నేనున్న ఇంత కాలం",lyrics:`నీ దయలో నేనున్న ఇంత కాలం
నీ కృపలో దాచినావు గత కాలం (2)
నీ దయ లేనిదే నేనేమౌదునో (2)
తెలియదయ్యా…          ||నీ దయలో||

1. తల్లిదండ్రులు చూపిస్తారు ఎనలేని ప్రేమను ఇలలో
చేయాలని ఆశిస్తారు అందనంత గొప్పవారిగా (2)
నీ దయ ఉంటే వారు – కాగలరు అధిపతులుగా
నీ దయ లేకపోతే ఇలలో – బ్రతుకుట జరుగునా
నీ సిలువ నీడలోనే నను దాచియుంచావని
నా శేష జీవితాన్ని నీతోనే గడపాలని           ||నీ దయలో||

2. నేల రాలే నా ప్రాణాన్ని లేపి నన్ను నిలిపావు
అపవాది కోరలకు అంటకుండ దాచావు (2)
నీ రెక్కల నీడలో నాకాశ్రయ దుర్గము
ఏ కీడు నా దారికి రాకుండ నీ కృపను తోడుంచినావు
నీ పాదాల చెంతనే నే పరవశించాలని
నా ఆయువున్నంత వరకు నీ ప్రేమ పొందాలని           ||నీ దయలో||`,keywords:["nee dhayalo nenunna intha kalamu","ni dhayalo nenunna intha kalam","ne dhayalo nenu unna intha kalam","ni dhayalo nenu unna entha kalam","needhayalo","ni dhayaloo","nidhayalo"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ ధనము నీ ఘనము",lyrics:`నీ ధనము నీ ఘనము ప్రభు యేసుదే 
నీ దశమా భాగమునీయ వెనుదీతువా – వెనుదీతువా ||నీ ధనము|| 

1. ధరలోన ధన ధాన్యముల నీయగా 
కరుణించి కాపాడి రక్షింపగా (2) 
పరలోక నాధుండు నీకీయగా 
మరి యేసు కొరకీయ వెనుదీతువా ||నీ ధనము|| 

2. పాడిపంటలు ప్రభువు నీకీయగా 
కూడు గుడ్డలు నీకు దయచేయగా (2) 
వేడంగ ప్రభు యేసు నామంబును 
గడువేల ప్రభుకీయ నో క్రైస్తవా ||నీ ధనము|| 

3. వెలుగు నీడలు గాలి వర్షంబులు 
కలిగించె ప్రభు నీకు ఉచితంబుగా (2) 
వెలిగించ ధర పైని ప్రభు నామము 
కలిమి కొలది ప్రభున కర్పింపవా ||నీ ధనము|| 

4. కలిగించె సకలంబు సమృద్దిగా 
తొలగించె పలుభాధ భరితంబులు (2) 
బలియాయె నీ పాపముల కేసువే 
చెలువంగ ప్రభుకీయ చింతింతువా ||నీ ధనము||`,keywords:["nee dhanamu","ni dhanamu","ni danamu","needhanamu","nidhanamu","nidanamu","needanamu","nii dhanamu","dhanamu","danamu","ne dhanamu","nedhanamu","niidhanamu","offerings","kaanukalu","andhra christian songs","andhra christian song"],video:"",artist:"Bontha Samuyelu",genre:["Andhra Christian Hymn","Offering"],timeSignature:"3/4"},{id:l(),title:"నీ నామములోనే పొందెదను రక్షణ (నే గెలిచెదను)",lyrics:`1. నీ నామములోనే పొందెదను రక్షణ
పాపములనుండి విమోచన
నీ శక్తితోనే, నిలిచియున్నాను 
నీ ప్రేమలోనే జీవింతును
 
అంధులకు వెలుగునిచ్చావు
నీ మహిమతో  అభిషేకించావు
వ్యాధులనుండి స్వస్థపరిచావు
నా బలము ఆశ్రయము నీవైతివి

నే గెలిచెదను
జీవించెదను
నీ  నీడలో
నిలిచెదను
శోధనలు
సహించెదను
నా తోడు
నీవే ఉండగ

2. నీ రూపములోనే నన్ను సృజియించితివి
నీ ఆత్మతో  నన్ను నింపితివి 
నీ ప్రాణమునర్పించి నన్ను రక్షించితివి 
నీ సొత్తుగా నన్ను చేసితివి

అంధులకు వెలుగునిచ్చావు
నీ మహిమతో  అభిషేకించావు
వ్యాధులనుండి స్వస్థపరిచావు
నా బలము ఆశ్రయము నీవైతివి

నే గెలిచెదను
జీవించెదను
నీ  నీడలో
నిలిచెదను
శోధనలు
సహించెదను
నా తోడు
నీవే ఉండగ.

ఆకాశముకన ఏతైనది నీ నామము
సముద్రముకన లోతైనది నీ ప్రేమ (4)
తారలకన సమృద్ధి గలది నీ కృపా

నే గెలిచెదను
జీవించెదను
నీ  నీడలో
నిలిచెదను
శోధనలు
సహించెదను
నా తోడు
నీవే ఉండగ (2)`,keywords:["నీ నామములోనే పొందెదను రక్షణ","ni naamamulone pondhedhanu rakshana","ni namamulone pondhedhanu","nee namamulone pondhedanu rakshana"],video:"",artist:"Prabhu Pammi, Rachel Meghna, Esther Evelyne, Narsinga Bobbili, Anand Paul & Narsinga Bobbili",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ పాదం మ్రొక్కెదన్ నిత్యము స్తుతించి",lyrics:`నీ పాదం మ్రొక్కెదన్ నిత్యము స్తుతించి
నిన్ను పాడి కీర్తించెదను
యేసయ్యా - నీ ప్రేమ పొంగుచున్నది (2)

1. పరిశుద్ధమైన పరవశమే
పరమ యేసుని కృపా వరమే (2)
వెదకి నన్ను కనుగొంటివి (2)
పాడుటకు పాటనిచ్చితివి (2)      ||నీ పాదం||

2. నూతన నూనె ప్రభావముతో
నూతన కవిత్వపు కృపతోను (2)
నింపి నిత్యము నడిపితివి (2)
నూతన షాలేము చేర్చేడవు (2)      ||నీ పాదం||

3. ఇరుకు నందు పిలచితివి
నాకు సహాయము చేసితివి (2)
చెడి ఎక్కడ తిరుగకుండా (2)
చేరవచ్చి నన్ను ఆడుకొంటివి (2)      ||నీ పాదం||

4. నిత్యముగ నీ సన్నిధి
నాకు ఇచ్చును విశ్రాంతిని (2)
దుడ్డు కర్ర నీ దండమును (2)
నిజముగ నన్ను ఆదరించును (2)      ||నీ పాదం||

5. ఫలించు చెట్టు నీవు నిలచు
తీగగా నేను వ్యాపించుటకై (2)
కొమ్మ నరికి కలుపు తీసి (2)
కాపాడి శుద్దీకరించితివి (2)      ||నీ పాదం||

6. పరిశుద్ధమైన కీర్తితోను
ప్రకాశమైన శిఖరముపై (2)
శీఘ్రముగ చేర్చెదవు (2)
సీయోనులో నిన్ను కీర్తించెదన్ (2)      ||నీ పాదం||`,keywords:["neepaadham mrokkedhan","ni paadham mrokkedhan","nee paadham mrokkedhan","ni padham mrokkedhan","ne padham mrokkedhan","ne padam mokkedan","ni padam mrokkedan"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ పిలుపు వలన నేను",lyrics:`నీ పిలుపు వలన నేను నశించి పోలేదు
నీ ప్రేమ ఎన్నడు నన్ను విడువలేదు

నీ కృప కాచుట వలన జీవిస్తున్నాను
నీ ప్రేమకు సాటి లేదు (2)

1.నశించుటకు ఎందరో వేచియున్నను
నశింపని నీ పిలుపు నన్ను కాపాడెను
ద్రోహము నిందల మధ్యలో నే నడచినను
నీ నిర్మల హస్తము నన్ను భరియించెను

యజమానుడా నా యజమానుడా…
నన్ను పిలచిన యజమానుడా

యజమానుడా నా యజమానుడా…
నన్ను నడిపించే యజమానుడా

2.మనుషులు మూసిన తలుపులు కొన్నైనను
నాకై నీవు తెరచినవి అనేకములు
మనోవేదనతో నిన్ను విడిచి
పరుగెత్తినను
నన్ను వెంటాడి నీ సేవను చేసితివి

నా ఆధారమా నా దైవమా
పిలిచిన ఈ పిలుపునకు కారణమా(2)

3.పిలిచిన నీవు నిజమైన వాడవు
నన్ను హెచ్చించే ఆలోచన గలవాడవు
ఏదేమైనను కొనసాగించితివి
నీపై ఆధారపడుటకు అర్హుడవు

నిన్ను నమ్మెదను, వెంబడింతును
చిరకాలము నిన్నే సేవింతును(2)

నీ పిలుపు వలన నేను నశించి పోలేదు
నీ ప్రేమ ఎన్నడు నన్ను విడువలేదు

నీ కృప కాచుట వలన జీవిస్తున్నాను
నీ ప్రేమకు సాటి లేదు (2)`,keywords:["nee pilupu","nee pilupu","nee pilupu valanane","ni pilupuvalana","neepilupu valanane","nipulupu valanane","nee pilupo","ni pillupu vala","bennyjoshua","benny joshua"],video:"",artist:"Benny Joshua",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ ప్రేమయే నాకు చాలు",lyrics:`నీ ప్రేమయే నాకు చాలు
నీ తోడూ నాకుంటే చాలు
నా జీవితాన ఒంటరి పయనాన
నీ నీడలో నన్ను నడిపించు మా(2)
యేసయ్య యేసయ్య యేసయ్య యేసయ్య

1. నీ ప్రేమ తోను నీ వాకు తోను నిత్యను నన్ను నింపుమయ్య
నీ ఆత్మా తోను నీ సత్యము తోను నిత్యము నన్ను కాపాడుమయ్య
నీ సేవా లో నీ సన్నిధిలో నీ మాటలో నీ బాటలో
నిత్యము నను నడిపించుమయ్య

యేసయ్య యేసయ్య యేసయ్య యేసయ్య

2. నువ్వు లేక నేను జీవించలేను
నీ రాకకై వేచి ఉన్న
నువ్వు లేని నన్ను ఉహించలేను
నాలోన నివసించుమన్న
నా ఊహలో నీ రూపమే నా ద్యాసలో నీ ధ్యానమే
నీ రూపులో మర్చేనయ్య

యేసయ్య యేసయ్య యేసయ్య యేసయ్య`,keywords:["nee prema ye naku chaalu","ni prema ye naku chalu","ni preema ye naku chaalu","nee preemaye naku chalu","neeprema ye naku chalu","nee prema a naku chalu","neeprema a naku chalu","ne prema e naku chalu","ni prema e naku chalu","ni premaye naku chalu","ne premaye naku chalu","Satish kumar"],video:"",artist:"Dr. Satish Kumar",genre:["General","Love"],timeSignature:"3/4"},{id:l(),title:"నీపైనే ఆనుకొని రాస్తున్న స్తుతికావ్యం",lyrics:`నీపైనే ఆనుకొని రాస్తున్న స్తుతికావ్యం 
నీ కొరకే పూనుకొని చేస్తున్న ప్రతికార్యం 
నీ మహిమకై ఫలియించగా కృప చూపిన యేసయ్య

1. వేలగొంతుల్లో మారుమ్రోగేలా - వేదనను తొలగించేలా 
సంగీతమే సందేశంలా 
హృదయాలను కదిలించగా కృపచూపిన యేసయ్యా

2. గుండెలోతుల్లో ఉండిపోయేలా - సంతోషం కలిగించేలా 
స్వరవేదమే జయనాదంలా 
విజయాలను కలిగించగా కృపచూపిన యేసయ్యా

3. మారుమూలల్లో విస్తరించేలా - నీ ప్రేమ వివరించేలా 
సంకీర్తనే నైవేద్యంలా 
ఘనక్రియలను జరిగించగా కృపచూపిన యేసయ్యా`,keywords:["neepaine aanukuni rasthunna","nipaine aanukuni rasthunna","nepaine anukuni rasthunna","nipaine aanukuni rastunna","nepaine anukuni rastunna","neepainey aanukuni","neepaine aanukoni","nipaine aanukoni","nepaine anukoni","nepaine anukune","stevenson"],video:"",artist:"Dr. A.R.Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ ప్రేమా నీ కరుణా",lyrics:`నీ ప్రేమా నీ కరుణా చాలునయ్యా నా జీవితాన
మరి దేనిని ఆశించను నే కోరను ఈ జగాన
చాలయ్య చాలీ దీవెనలు చాలు
మేలయ్య మేలు నీ సన్నిధి మేలు (2)

1. గురిలేని నన్ను గుర్తించినావే
ఎనలేని ప్రేమను చూపించినావే
వెలలేని నాకు విలువిచ్చినావే
విలువైన పాత్రగా నను మార్చినావే     ||నీ ప్రేమా||

2. చేజారిన నాకై చేచాచినావే
చెదరిన నా బ్రతుకును చేరదీసినావే
చెరనుండి నన్ను విడిపించినావే
చెరగని నీ ప్రేమకు సాక్షిగ మార్చావే      ||నీ ప్రేమా||

3. నరకపు పొలిమేరలో నను కనుగొన్నావే
కల్వరిలో ప్రాణమిచ్చి నను కొన్నావే
నీ ప్రేమను ప్రకటింప నను ఎన్నుకొన్నావే
నీ కుమారునిగా నను మార్చినావే      ||నీ ప్రేమ||`,keywords:["నీ ప్రేమా నీ కరుణా","nee prema","ni prema","nee preema","ni preema","neeprema","nee prema nee karuna","ni prema ni karuna","ne preema","ni preema","nipremaa","niprema","nee premaa","nipremaa","satish kumar","satishkumar","love"],video:"",artist:"Dr. Satish Kumar",genre:["General","Love"],timeSignature:"3/4"},{id:l(),title:"నీ ప్రేమ ఎంతో ఎంతో మధురం యేసు",lyrics:`నీ ప్రేమ ఎంతో ఎంతో మధురం
నీ ప్రేమ ఎంతో ఎంతో మధురం
యేసయ్య నీ ప్రేమ మధురం
యేసయ్య నీ ప్రేమ అమరం (2)

1. తల్లికుండున నీ ప్రేమ
కన్న తండ్రికుండున నీ ప్రేమ (2)
అన్నకుండున నీ ప్రేమ
సొంత చెల్లికుండున నీ ప్రేమ

2. మార్పులేనిది నీ ప్రేమ
నను మార్చుకున్నది నీ ప్రేమ
మరణించెను నీ ప్రేమ
నాకై తిరిగిలేచెను నీ ప్రేమ

3. సిల్వకుఎక్కెను నీ ప్రేమ
నాకై విలువ తెచ్చెను నీ ప్రేమ(2)
బలమున్నది నీ ప్రమలో
గొప్పభాగ్యము వున్నది నీ ప్రేమలో`,keywords:["neepremayenthoo","nee prema yentho","ni prema entho","ni prema yentho","ni prema yentho madhuram","nee prema entho","ni prema yentho yentho madhuram","nii prema entho","ni prema enthoo entho madhuram","nee prema yentho yentho madhuram","ne preema entho","ni prema enthoo","neeprema enthoo","neeprema yenthoo","nee prema yentho","niprema yenthoo","neprema yentho","neprema entho","lent","love"],video:"",artist:"",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"నీ ప్రేమ ఎంతో గొప్పది నీ జాలి ఎంతో ఉన్నతం",lyrics:`నీ ప్రేమ ఎంతో గొప్పది  
నీ జాలి ఎంతో ఉన్నతం 
సృష్టంతా నీ మహిమే  
నీ కార్యములను వివరింతును     
   
నిన్న నేడు ఏకరీతిగా ఉన్న దేవుడవు నీవే 
యుగయుగములకు మారని వాడవు నిత్యుడగు తండ్రివి 
  
1. నా మంచి కాపరి యేసయ్య 
సమాధాన కర్త నీవయ్యా 
భయభక్తులతో సేవ చేతును 
దహించు అగ్నివి నీవయ్యా

నిన్న నేడు ఏకరీతిగా ఉన్న దేవుడవు నీవే 
యుగయుగములకు మారని వాడవు నిత్యుడగు తండ్రివి   
  
2. నన్ను విడువవు ఎడబాయవు
అని వాగ్ధానము చెసితివి
దేనికి భయపడను
దేవుడె నా సహయుడు
  
నిన్న నేడు ఏకరీతిగా ఉన్న దేవుడవు నీవే 
యుగయుగములకు మారని వాడవు నిత్యుడగు తండ్రివి`,keywords:["ni prema entho goppadhi","nee prema yentho goppadhi","nee prema yento goppadhi","ne prema yentho goppadhi","nee prema yentho goppadhi","niprema entho goppadhi","ni prema ento gopadhi","kripal mohan","kripalmohan"],video:"",artist:"Kripal Mohan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ ప్రేమలో ప్రయాణమే - నీ బాటలో ప్రభాతమే",lyrics:`నీ ప్రేమలో ప్రయాణమే - నీ బాటలో ప్రభాతమే 
నీవేగా ఆశ్రయం - నీలోనే జీవితం 
సజీవుడా పదే పదే నే పాడి కీర్తించనా 
సదా నిన్ను కొనియాడనా 
నీ ప్రేమలో ప్రయాణమే - నీ బాటలో ప్రభాతమే 
ప్రేమామయా నా యేసయ్య - నా ప్రాణమే నీవేనయా 

1. నీ మాటలే వెన్నంటే సాగెనే - విడువనీ నీ కృపా నన్నెంతో కాచెనే 
 ప్రతీ మలుపు నీ సాక్ష్యమే - ప్రతీ శ్వాస నీ స్వాస్థ్యమే 
సహించేటి నీ ప్రేమతో - మన్నించేటి నా దైవమా 
కన్నీటిలో, కష్టాలలో - నడిపించె నీ వాక్యమే 
దయామయా - కృపామయా - నీవే సదా తోడుగా 
నా త్రోవలో నీడగా 

2. నీ స్నేహమే వరించే సొంతమై - మదిలో నీ స్వరం వసించే దీపమై 
ఎన్నెన్నో తరంగాలలో - కృంగించేటి గాయాలలో 
నిన్నే కోరే నా వేదన - నిన్నే చేరే నా ప్రార్ధన 
చుక్కానివై , సహాయమై - దరి చేర్చే నీ ప్రేమతో 
దయామయా - కృపామయా - నీ ప్రేమయే చాలయా 
నా గమ్యమే నీవయా`,keywords:["nee premalo prayaname","ni premalo prayaname"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Yasaswi Kondepudi",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ మహిమను చూడాలి (ఇదిగో)",lyrics:`Verse 
నీ మహిమను చూడాలి 
నీ రాజ్యము రావాలి 
నీ చిత్తం జరగాలి యేసయ్య 

నీ మహిమను చూడాలి 
నీ రాజ్యము రావాలి 
నీ చిత్తం జరగాలి యేసయ్య 

Chorus
ఇదిగో ఇదిగో 
నా ప్రాణం ఇదిగో 
ఇదిగో ఇదిగో 
నా సర్వం ఇదిగో

Bridge
యేసయ్య నీ మహిమతో 
ఈ క్షణమే మమ్ము దర్శించు 

యేసయ్యా యేసయ్యా 
యేసయ్యా యేసయ్య 

ఈ క్షణమే మమ్ము దర్శించు 
ఈ క్షణమే మమ్ము దర్శించు`,keywords:["ni mahimanu chudali","nee mahimanu chudali","nee mahimanu choodali","ni mahimanu chodali","idhigo","idigo"],video:"",artist:"Apostle P.S. Rambabu, Annika Rambabu, Giftson Durai, Rakshith Ashirvad, Ruben Sandesh",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ మాట నా పాటగా ",lyrics:`నీ మాట నా పాటగా - అనుక్షణం పాడనీ
లోకాన నిను చాటగా - నా స్వరం వాడనీ
నా గీతం - ఆత్మలను - నీవైపే ఆకర్షించనీ
ఆదరణ - కలిగించి - నీలోనే ప్రహర్షించనీ ||నీ మాట||

1. ఏ చోట గళమెత్తినా - నీ ప్రేమ ధ్వనియించనీ
పాడేటి ప్రతి పాటలో - నీ రూపు కనిపించనీ  (2)
వినిపించుచున్నప్పుడే - ఉద్రేకమును రేపక
స్థిరమైన ఉజ్జీవము - లోలోన రగిలించనీ
నా గీతం - ఆత్మలను - నీవైపే ఆకర్షించనీ
ఆదరణ - కలిగించి - నీలోనే ప్రహర్షించనీ  ||నీ మాట||

2. నీ దివ్య గానామృతం - జలధారలుగా పొంగనీ
తాకేటి ప్రతి వారినీ - ఫలవంతముగా మార్చనీ  (2)
శృతిలయలు లోపించక - విసిగింపు కలిగించక
నిజమైన ఉల్లాసమై - నిలువెల్లా కదిలించనీ
నా గీతం - ఆత్మలను - నీవైపే ఆకర్షించనీ
ఆదరణ - కలిగించి - నీలోనే ప్రహర్షించనీ ||నీ మాట||

3. ఆత్మీయ గీతాలతో - తనువంతా పులకించనీ
సంగీతమే భోధయై - కనువిప్పు కలిగించనీ  (2)
కాలక్షేపం కోసమే - పరిమితము కాకుండగా
హృదయాల్లో నివసించుచూ - కార్యాలు జరిగించనీ
నా గీతం - ఆత్మలను - నీవైపే ఆకర్షించనీ
ఆదరణ - కలిగించి - నీలోనే ప్రహర్షించనీ ||నీ మాట||`,keywords:["stevenson","arstevenson","ar stevenson","ni maata na pataga","stevenson songs","ni maata naa paataga","nee maata na paataga","nee maata","ni maata","nii maata","ne mata na pata ga","ni mata","nee mata","ne mata na pataga"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ ముఖము మనోహరము",lyrics:`నీ ముఖము మనోహరము
నీ స్వరము మాధుర్యము
నీ పాదాలు అపరంజి మయము
యేసయ్య నాప్రాణ ప్రియుడా
మనగలనా నిను వీడి క్షణమైనా (2) ||నీ ముఖము||

1. నీవే నా తోడువై నీవే నా జీవమై
నాహృదిలోన నిలచిన జ్ఞాపికవై (2)
ఆణువణువూనా నీ కృప నిక్షిప్తామై
నను ఎన్నడూ వీడని అనుబంధమై(2) ||యేసయ్య||

2. నీవే నా శైలమై నీవే నా శృంగమై
నా విజయానికే నీవు భుజ బలమై (2)
అనుక్షణమున శత్రువుకు ప్రత్యక్ష్యమై
నను వెనుధియ్యాక వెనుటట్టినావు (2) ||యేసయ్య||`,keywords:["ni mukamu","nee mukamu","ni mukhamu","ni mohamu manoharamu","nee mohamu manoharamu","ni mokamu manooharam"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ ముఖము మనోహరం/యేసయ్య నా స్నేహితుడా",lyrics:`నీ ముఖము మనోహరం 
నీ స్వరము మధురము 
నా ప్రియుడా యేసయ్య (2)
దేవా...దేవా...దేవ...దేవ

1. యేసయ్య నా స్నేహితుడా 
నా ఆరాధన ధైవమ (2)

స్తుతి అర్పింతును 
నా జీవితాంతం 
దేవ కొలిచెదను 
హృది అర్పింతును 

నీ నీతి శాశ్వతమైనది - శాశ్వతమైనది 
దేవా...దేవా...దేవ...దేవ

2. లోకము మారిన - మారని ప్రేమ 
కాలము గడిచిన - వీడని ప్రేమ 
అన్నిటి మించిన అరుదైన ప్రేమ 
కన్నీరే తుడిచే కలువరి ప్రేమ 

ఏమివ్వగలను నీ ప్రేమకు 
నిన్ను వర్ణించగలన నా యేసయ్య (2)
దేవా...దేవా...దేవ...దేవ 

యేసయ్య నా స్నేహితుడా 
నా ఆరాధన ధైవమ (2)

స్తుతి అర్పింతును 
నా జీవితాంతం 
దేవ కొలిచెదను 
హృది అర్పింతును 

నీ నీతి శాశ్వతమైనది - శాశ్వతమైనది 
దేవా...దేవా...దేవ...దేవ`,keywords:["yesayya na snehithuda","yesaya na snehituda","yeesayya naa snehithuda","ni mukamu manoharam","Love","nee mukamu","ni mukhamu","ni mohamu manoharamu","nee mohamu manoharamu","ni mokamu manooharam"],video:"",artist:"Prabhu Pammi, Jessy Paul",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"నీ రాక కోసం నే వేచియున్న",lyrics:`నీ రాక కోసం నే వేచియున్న
నీ కొరకై ఎదురు చూస్తున్న
నీ ప్రేమ కోసం నే వేచియున్న
నీ కొరకై ఎదురుచూస్తున్న

లోకాన్ని ఏలే రాజుగా - నా కొరకై ఉదయించుము
పాపలను కడిగె ప్రభువుగ - నా కొరకై నీవు ఏతించుము

నిన్నే నే ఆరాధింతును - నిన్నే నే కీర్తింతును
నిన్నే నే కొనియాడెదన్ యేసయ్యా - నీ కొరకై జీవింతును (2)`,keywords:["nee raaka kosam","ni raaka kosam","nee raka kosam","ni raka kosam","ni raaka kosam","nee raka koosam","ni raka koosam","neeraka kosam","niraaka kosam","ni raakakosam","nee raakakosam"],video:"",artist:"",genre:["General","Worship","Second Coming"],timeSignature:"4/4"},{id:l(),title:"నీలాంటి దైవం ఎవరు విశ్వమున లేనేలేరు",lyrics:`నీలాంటి దైవం ఎవరు విశ్వమున లేనేలేరు (2)
పరమతండ్రి నీకే వందన
యేసునాథ నీకే వందన
పవిత్రాత్మ నీకే వందన
త్రియేక దేవా వందన 

1. నీతి గల దైవం నీవే కరుణ చూపు దాతవు నీవే (2)
మొరను ఆలకించు నా దేవా రక్షణాధారం నీవేగా (2) 

నీవుంటే చాలు నాకు దిగులే లేదు 
నీ ప్రేమే చూడగానే సక్కతియే (2)
||నీలాంటి దైవం||

2. సర్వోన్నతుడా నీకే స్తోత్రం మహాఘనుడా నీకే సర్వం (2) 
శక్తి దాత దైవం నీవేగా
నీదు ఆత్మవరములు కోరేదా (2)

వేరేమి కోరలేను జీవితాంతం
నీ దయలోకాయుమయ్య బ్రతుకు దినం (2)   
||నీలాంటి దైవం||

పరమతండ్రి నీకే వందన
నీదు బిడ్డగానే సాగేద
యేసునాథ నీకే వందన
జీవితాంతం నీకై బ్రతికెద
పవిత్రాత్మ నీకే వందన
నిత్యమునే నీతో నడిచెద
త్రియేక దేవా వందన 
ఘనపరతు నిన్నే నిరతము`,keywords:["నీలాంటి దైవం ఎవరు విశ్వమున లేనేలేరు","Neelanti Dhaivam","nilanti dhaivam yevaru visvamuna","nelanti dhaivam","nilanti daivam","nilanti daivamu","nilanti dhaivamu","neelanti daivamu","nelanti daivam","nelanti daivamu","nilaanti dhaivamu","neelaanti dhaivam","nilaanti dhaivam yevaru visvamuna"],video:"",artist:"Raj Prakash Paul",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నీ వాక్యమే నన్ను బ్రతికించెను",lyrics:`నీ వాక్యమే నన్ను బ్రతికించెను
బాధలలో నెమ్మదినిచ్చెను (2)
కృపా శక్తి దయా సత్య సంపూర్ణుడా
వాక్యమై ఉన్న యేసు వందనమయ్యా (2)      ||నీ వాక్యమే||

1. జిగటగల ఊభినుండి లేవనెత్తెను
సమతలమగు భూమిపై నన్ను నిలిపెను (2)
నా పాదములకు దీపమాయెను (2)
సత్యమైన మార్గములో నడుపుచుండెను (2)       ||నీ వాక్యమే||

2. శత్రువులను ఎదుర్కొనే సర్వాంగ కవచమై
యుద్ధమునకు సిద్ధ మనసు ఇచ్చుచున్నది (2)
అపవాది వేయుచున్న అగ్ని బాణములను (2)
ఖడ్గము వలె అడ్డుకొని ఆర్పి వేయుచున్నది (2)       ||నీ వాక్యమే||

3. పాలవంటిది జుంటి తేనె వంటిది
నా జిహ్వకు మహా మధురమైనది (2)
మేలిమి బంగారు కన్న మిన్న అయినది (2)
రత్న రాసులకన్నా కోరతగినది (2)           ||నీ వాక్యమే||`,keywords:["నీ వాక్యమే నన్ను బ్రతికించెను","nee vaakyame nannu brathikinchenu","ni vakyame nannu brathikinchenu","ne vakyame nannu brathikinchenu"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నీవిచ్చినవారమే నా జీవితం",lyrics:`నీవిచ్చినవారమే నా జీవితం
నీ సేవకే అంకితం
నీవేపొడిగించిన ఆయుష్కాలము
ప్రభు జీవింతును నీకోసము

నన్నింతగా నీవు ప్రేమించుటకు
నాకే యోగ్యత లేదు ప్రభూ

1. కల కాదు నీ శిలువ బలియాగము
అది నా పాప పరిహారము
వెలపోసి నను కొంటివి నీకోసము
చిందితివి నీ రక్తము

నా కోసమే చేసితివి త్యాగము
నీ కోసమే నిలుతు నీ సాక్షినై

2. పర్వతములు తొలగి పోయినగానీ
మెట్టలు తత్తరిల్లినా
నా కృప నిను విడిపోదని సెలవిచ్చితివి
నీ కరములతో కాపాడితివి`,keywords:["neevichina varame","nivichina varame","neevichena varame","nevichina varame","neevechina varame","nivichina varame","neevechena varame","neevechena varamey"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నీవిస్తేనే ఏదైనా మేమనుభవించేది",lyrics:`నీవిస్తేనే ఏదైనా మేమనుభవించేది 
నీ చేతినుండే అన్నీ పొందేది 
నీ ఆశీర్వాదమే ఐశ్వర్యమిచ్చేది 
మాకు జీవం ఘనత తెచ్చేది

1. నీవు క్షమియిస్తే గదా పాపం పరిహారం అయ్యేది 
నీవు బలమిస్తే గదా శత్రువులపైన విజయం పొందేది

2. నీవు సెలవిస్తే గదా క్షేమం సంతోషం వచ్చేది 
నీవు కరుణిస్తే గదా కష్టమునకు తగ్గ ఫలితం దక్కేది

3. నీవు వరమిస్తే గదా సంఘం ఉపయోగం పొందేది 
నీవు నడిపిస్తే గదా కాలు జారకుండా గమ్యం చేరేది`,keywords:["neevisthene edhaina memanubhavinchedhi","nevisthene","nivesthene","nivisthene","neevistene","nivisthene yedhaina memanubavinchedhi","nivisthene edhaina memanubavinchedhi","stevenson"],video:"",artist:"Dr. A.R.Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవు చేసిన ఉపకారములకు",lyrics:`నీవు చేసిన ఉపకారములకు
నేనేమి చెల్లింతును (2)
ఏడాది దూడెలనా - వేలాది పోట్టేల్లనా (2) ||నీవు చేసిన||

1. వేలాది నదులంత విస్తార తైలము
నీకిచ్చినా చాలునా (2)
గర్భ ఫలమైన నా జేష్ట్య పుత్రుని
నీకిచ్చినా చాలునా (2)    ||ఏడాది||

2. మరణపాత్రుడనైయున్న నాకై
మరణించితివ సిలువలో (2)
కరుణ చూపి నీ జీవ మార్గాన
నడిపించుమో యేసయ్యా (2)   |ఏడాది||

3. విరిగి నలిగిన బలి యాగముగను
నా హృదయ మర్పింతును (2)
రక్షణ పాత్రను చేబూని నిత్యము
నిను వెంబడించెదను (2)    ||ఏడాది||

4.ఈ గొప్ప రక్షణ నాకిచ్చినందుకు
నీకేమి చెల్లింతును (2)
కపట నటనాలు లేనట్టి హృదయాన్ని
అర్పించినా చాలునా (2)    ||ఏడాది||`,keywords:["నీవు చేసిన ఉపకారములకు","neevu chesina upakaaramulaku","neevu cheesina upakaaramulaku","neevuchesina upakaaramulaku","nivu chesina upakara","neevu chesina upa"],video:"",artist:"",genre:["Andhra Christian Hymn","General"],timeSignature:"4/4"},{id:l(),title:"నీవు చేసిన మేళ్లకు",lyrics:`నీవు చేసిన మేళ్లకు
నీవు చూపిన కృపలకు (2)

వందనం యేసయ్యా (4)

1. ఏపాటివాడనని నేను
నన్నెంతగానో ప్రేమించావు
అంచెలంచెలుగా హెచ్చించి
నన్నెంతగానో దీవించావు (2) ||వందనం||

2. బలహీనుడనైన నన్ను
నీవెంతగానో బలపరచావు
క్రీస్తేసు మహిమైశ్వర్యములో
ప్రతి అవసరమును తీర్చావు (2) ||వందనం||`,keywords:["neevu chesina meellaku","vandhanam yesayya","nivu chesina mellaku","nevu chesina melaku","neevu chesina melaku","nivu chesina melaku","neevu cheesina meellaku","vandhanam yesayyaa","vandanam yesaya","vandanam yesayya","vandhanam","vandanam","Wandanam","vandhanam eesayya","wandhanam yesayya"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"నీవు తప్ప నాకీ లోకంలో ఎవరున్నారయ్యా",lyrics:`నీవు తప్ప నాకీ లోకంలో ఎవరున్నారయ్యా
నీకు తప్ప నాలో ఎవరికీ చోటే లేదయ్యా (2)
దావీదు కుమారుడా నన్ను దాటిపోకయ్యా
నజరేతు వాడా నను విడిచిపోకయ్యా (2)           ||నీవు||

1. గ్రుడ్డివాడినయ్యా నా కనులు తెరువవా
మూగవాడినయ్యా నా స్వరమునీయవా (2)
కుంటివాడినయ్యా నా తోడు నడువవా (2)           ||దావీదు||

2. లోకమంత చూచి నను ఏడిపించినా
జాలితో నన్ను చేరదీసిన (2)
ఒంటరినయ్యా నా తోడు నిలువవా (2)           ||దావీదు||

3. నా తల్లి నన్ను మరచిపోయినా
నా తండ్రి నన్ను విడచిపోయినా (2)
తల్లిదండ్రి నీవై నన్ను లాలించవా (2)           ||దావీదు||`,keywords:["neevu thappa naaki lokamlo","nivu thappa naaki lokam lo","nevu thappa naki lokam lo","nevu thapa naki lokam lo","nevu thapa naki lokamlo"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నీవు తోడైయుండగా యేసు భయము లేదు ఇలలో",lyrics:`నీవు తోడైయుండగా యేసు భయము లేదు ఇలలో
మేలు చేయు దేవుడా నీకు
సాటి లేరు సృష్టిలో

ఎక్కలేని కొండలే ఎన్నో ఎదురొచ్చినా
లెక్కలేని నిందలే నన్ను బాధించినా

నీవు తోడైయుండగా యేసు భయము లేదు ఇలలో
మేలు చేయు దేవుడా నీకు
సాటి లేరు సృష్టిలో

1. గతం గాయాన్ని చేయగా
గాయం హృదయాన్ని చీల్చగా
శోకం సంద్రంలా ముంచగా
లోకం బంధాలే తెంచగా
పేరు పెట్టి తల్లిలా పిలిచి లాలించితివి
నీవే తోడు నీడగా నిలిచి కృప చూపితివి!  
||నీవు తోడైయుండగా||
  
2. ఆశ నిరాశగా మారినా
నిరాశ నిస్పృహ పెంచినా
యుక్తి తెలియక తిరిగినా
శక్తి క్షీణించి పోయినా.
వెన్ను తట్టి తండ్రిలా నిలిపి నడిపించితివి.
నీవే కొండ కోటగా నిలిచి బలపరచితివి!  
||నీవు తోడైయుండగా||

నీవు నాకు అండగా నిలిచి దారి చూపినావయ్యా!
నేను నీకు మెండుగా స్తుతులు అర్పించెదను.`,keywords:["నీవు తోడైయుండగా యేసు భయము లేదు ఇలలో","neevu thodaiyundaga yesu bhayamu ledhu","nevu thodai undaga yesu bhayamu ledhu"],video:"",artist:"Hadlee Xavier, Joshua Katta, Enosh Kumar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవు నా తోడు ఉన్నావయ్యా",lyrics:`నీవు నా తోడు ఉన్నావయ్యా
నాకు భయమేల నా యేసయ్యా
నీవు నాలోనే ఉన్నావయ్యా
నాకు దిగులేల నా మెస్సయ్యా
నాకు భయమేల నాకు దిగులేల
నాకు చింతేల నాకు భీతి ఏల ||నీవు||

1. కష్టములో నష్టములో నా తోడు ఉన్నావు
వేదనలో ఆవేదనలో నా చెంత ఉన్నావు (2)
అడిగిన వారికి ఇచ్చేవాడవు
వెదకిన వారికి దొరికేవాడవు (2)
తట్టిన వారికి తలుపులు తెరిచే దేవుడవు (2)
దేవా దేవా నీకే స్తోత్రం (4) ||నీవు||

2. వ్యాధులలో బాధలలో ఊరటనిచ్చావు
రక్షణలో సంరక్షకుడై ధైర్యము పంచావు (2)
నేనే సత్యం అన్న దేవా
నేనే మార్గం అన్న దేవా (2)
నేనే జీవము అని పలికిన దేవా (2)
దేవా దేవా నీకే స్తోత్రం (4) ||నీవు||`,keywords:["neevu nathodu unnavaya","neevu nathodu unnavayya","nivu nathodu unnavayya","nuvvu na thodu unnavayya","nevu nathodu unnayava","neevu na thodu unnavayya","neevu nathodu unavaya","nevu na thodu unnavaya"],video:"",artist:"Fr Deva, Linus madiri, Bishop Rayarala Vijaykumar, Revanth",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవు లేకుండా నేనుండలేను",lyrics:`నీవు లేకుండా నేనుండలేను
నాకున్నవన్నీ నీవే యేసయ్య
నా ప్రాణమా నా ధ్యానమా
నా ఊపిరి నీవే యేసయ్య

1. జాలిలేనిది ఈ మాయలోకము
కలతచెందెను నా దీన హృదయము
నను కాపాడుటకు నా దరి నిలచితివా
హస్తము చాపితివా నను బలపరచితివా

2. నను ప్రేమించేవారు ఎందరు ఉన్నను
అంతము వరుకు నాతో ఉండరు
నాలో ఉన్నవాడా నాతో ఉన్నవాడా
నా ప్రాణము నీవే యేసయ్య

3. కన్నులు మూసిన కన్నులు తెరచిన
నా చూపులలో నీ రూపమే
కనికరించితివా కరుణామయుడా
కృప చూపించితివా నాకు చాలిన దేవుడా`,keywords:["neevu lekunda nenu undalenu","neevu lekunda","neevu leekunda","nivu leekunda","nivu lekunda","nivu lakunda","neevu lakunda"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవు లేని జీవితము - నాకున్న శూన్యము",lyrics:`నీవు లేని జీవితము - నాకున్న శూన్యము 
నీవే ఆధారము - నా ధైర్యము
నీవేగా నా సమస్తము - నీవేగా నా సర్వము

1. ఈ దేహము ప్రాణము - ఈ శక్తియు బలముయు 
జ్ఞానము వివేచనయు - నీవు ఇచ్చినదే

ఏ పాటివాడను నేను - నీ కృపను పొందుటకు
నేను జీవింతును కృతజ్ఞుడనై 
ఏ పాటిదానను నేను - నీ కృపను పొందుటకు
నేను జీవింతును కృతజ్ఞతతో

ఆదియు అంతము నీలోనే యేసయ్యా
అల్ఫాయు ఒమేగయు - నీవేగా యేసయ్యా

2. భాగ్యము ఐశ్వర్యము - స్థానము అధికారము
ఘనతయు ప్రఖ్యాతలు - నీవు ఇచ్చినవే

అర్హతలేని నాకు - స్వాస్థ్యము నిచ్చావు
నేను జీవింతును కృతజ్ఞుడనై 
అర్హతలేని నాకు - స్వాస్థ్యము నిచ్చావు
నేను జీవింతును కృతజ్ఞతతో`,keywords:["neevu leeni jeevithamu","nevu leni jevithamu","worship","nevu leeni jeevithamu","nevu leni jeevithamu","neevu leeni jevithamu","kruthagnudanu","kruthagnyudanu"],video:"",artist:"Daniel J. Kiran , Anu Samuel",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"నీవు లేని రోజు అసలు రోజే కాదయా",lyrics:`నీవు లేని రోజు అసలు రోజే కాదయా
నీవు లేని బ్రతుకు అసలు బ్రతుకే కాదయా (2)
నీవే లేకపోతే నేనసలే లేనయా (2) ||నీవు లేని||

బాధ కలుగు వేళలో నెమ్మది నాకిచ్చావు
నా కన్నీరు తుడచి నా చేయి పట్టావు (2)
నన్ను విడువనన్నవు – నా దేవుడైనావు (2)|
నీవే లేకపోతే నేనసలే లేనయా (2) ||నీవు లేని||

ఈ నాటి నా స్థితి నీవు నాకు ఇచ్చినదే
నేను కలిగియున్నవన్ని నీదు కృపా భాగ్యమే  (2)
నీవు నా సొత్తన్నావు – కృపాక్షేమమిచ్చావు (2)
నీవే లేకపోతే నేనసలే లేనయా (2) ||నీవు లేని||`,keywords:["neevu leeni rooje","neevu leeni rooju","nevu leni rooje","nivu leni roju","nevu leni roje","nivu leni roje","neevu leeni roje","neevu leni rooje","nivu leeni roje","nivu leeni roju","nivu leeni rooje","nivu leeni rooju","neevu leni roje","neevu lene rooje","nevu leeni rooje","nivu leni rooje","neevu lene rooju"],video:"",artist:"Samuel Karmoji",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవే ఆశ - నీవే శ్వాస/స్తుతియించెద",lyrics:`నీవే ఆశ - నీవే శ్వాస - నీవేగా - అతిశ్రేష్ఠుడా 
నాలో ప్రాణం - నాలో జీవం - నీవేగా - బలవంతుడా

ప్రేమ పూర్ణుడ - నా దేవ
పావనాత్ముడ - యేసయ్య
స్తుతికి పాత్రుడ - నా దేవ
నా నిరీక్షణ - నీవేగ

స్తుతియించెద - సర్వోన్నతా - పూజించెద - ప్రభువా యేసయా 
బలమైన నీ నామం

1. నీదు ప్రేమ నిండే నాలో - నీవే చెరగని ప్రపంచం
నాలో నీవు నీలో నేను - నీవే తరగని వరం
వెలిగించవా - నడిపించవా
నీ మాటతో ఇల
వశియించవా - నిజదేవుడా
ఆధారమై ఇల

2.  యేసు నీవే నాలో స్వాస్థ్యం - నీతో నిరతము ప్రయాణం 
నీతో స్నేహం - నింపే ధైర్యం - నీవే పరముకు పథం
చిరకాలము - నను కాచిన
నా మంచి కాపరి
కనుపాపగా - కాపాడిన
నీవేగ నా గురి`,keywords:["నీవే ఆశ నీవే శ్వాస","స్తుతియించెద","neeve aasa neeve swasa","neeve aasa neeve svasa","neve aasa neve swasa","nive aasa nive swasa","neve asa neve swasa","sthuthiyinchedha sarvonnatha","sthutiuyincheda","stutiyincheda"],video:"",artist:"Joshua Shaik, Pranam Kamlakhar, Haricharan, & Sameera Bharadwaj",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవే ఆశ్రయదుర్గం",lyrics:`నీవే ఆశ్రయదుర్గం - నీవే నా సహాయం
నీవే కేడెము బలము - యేసు నీవే నా దాగు స్థలం

నీవే మార్గం సత్యం నిత్యజీవం యేసయ్యా (2)

1. నీవే ఆదియు అంతం - నీవే మారని దైవం
నీవే జీవాహారం - యేసు నీవే జీవనాధారం

నీవే మార్గం సత్యం నిత్యజీవం యేసయ్యా (2)

Bridge:
నీవే రక్షణశృంగం - నీవే పునరుత్థానం
నీవే రక్షణశృంగం - నీవే పునరుత్థానం

పునరుత్థానుడా యేసయ్యా నాకొరకు బలియైన రక్షకుడా (2) 
నీవే మార్గం సత్యం నిత్యజీవం యేసయ్యా (2)
నీవంటివారేలేరు యేసయ్యా నీవు లేని చొటే లేదు యేసయ్య (2)
నీవే హృదయధ్యానం యేసు నీవే నా స్తోత్రగానం`,keywords:["neeve asraya durgam","neve asraya durgam","neeve ashraya durgam","neevey asraya durgam","neeveasraya durgam","nive asraya durgam","nivey asraya durgam","nive asraya doorgam","nive asraya doorgam","alen ganta","allen ganta","worship"],video:"https://www.youtube.com/embed/BfgyN7DHv3w?start=1859",artist:"Vijay Kondapuram, Allen Ganta, Daniel Prem Kumar",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"నీవే చాలును యేసు",lyrics:`నీవే చాలును యేసు వెరై ఉండలేను
నీవే చాలును నిను వీడి బ్రతుకాలేను
మనసు చెదరిన నీ మాట నిలుచును
మనుషులంతా వీడిన నీ కృపాయే దాచును

1. ఈ లోక సంపద లేకున్నా
మదియందుసంతసముంచావూ
మనుషులు సాయం రాకునా
నిరీక్షించే ఓర్పే నేర్పావు (2)
ఆకాలి వేళలో అద్భుతాలు చేశావు
నాకున్న లేమిలో నన్ను దివించావు  (2)  || నీవే || 

2. గత కాల వ్యధలందు మాపై
కృపయే కదా ఉంచావు
మీతి మీరే ప్రతి కులా స్తితులపై
అధికారమే ఈచావు (2)
కాలాలు మారిన కోర్కెలు చెదరిన
బంధాలు వీడిన నీదు ప్రేమ మారదు (2) || నీవే ||`,keywords:["neeve chaalunu yeesu","nive chalunu yesu","neve chalunu yeesu","neve chalunu yesu","nive chaalunu yesu"],video:"",artist:"Percy Bhanu, Bhanu Pala, Anwesha & Dinnu",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవే చాలయ్య - యేసు నీవే చాలయ్య",lyrics:`నీవే చాలయ్య - యేసు నీవే చాలయ్య
నా జీవితానికి - నీవే మేలయ్య (2)
ప్రేమించువాడవు - పాలించువాడవు
క్షమియించువాడవు - నీవే యేసయ్య (2)

నా కన్నిటి లోయలో నను లేవదీసిన 
నీవే చాలయ్య - యేసు నీవే చాలయ్య (2)

1. ప్రేమించువారు లేక పక్షినైతిని
దరిచేర్చేవారు లేక దూరమైతిని (2)
క్షమియించేవారు లేక దోషినైతిని (2)
నా పాపన్ని నీ ఓర్చి నను మనిషి చేసిన ||నీవే చాలయ్య||

2. నేను పుట్టకుముందే నీవు - నన్ను  చూచితివి
రూపించ బడకముందే - నన్ను ఎరిగితివి
పిండముగా ఉన్నప్పుడే - నన్ను ఏర్పరచితివి 
ఏ అర్హత లేకున్న - నన్ను ప్రేమించితివి 
నీ కల్వరి ప్రేమతో - నన్ను గెలుచుకొన్నట్టి ||నీవే చాలయ్య||`,keywords:["neeve chalayya yesu neeve chalayya","nive chalayya yesu nive chayalla","neeve chalayya","nive chalayya","nivechalayya","neevechalayya","akumarthi daniel"],video:"",artist:"Dr. Akumarthi Daniel",genre:["General","Hope"],timeSignature:"4/4"},{id:l(),title:"నీవే దేవా (పాపిగ నను చూడలేక)",lyrics:`నీవే నీవే

పాపిగ నను చూడలేక పాపముగా మారినావా
దోషిగా నను చూడలేక నా శిక్ష నీవు పొందినావా (2)

నా తల ఎత్తుటకు నీవు తల వంచితివే
అర్హత నాకిచ్చుటకు అవమాన మొందితివే
తండ్రితో నను చేర్చుటకు విడనాడబడితివే
జీవము నాకిచ్చుటకు మరణమునొందితివే

నీవే నీవే నీవే దేవా
నీవే నీవే నా యేసయ్య (2)

1. పరమును వీడి ఈ భువికి - దిగివచ్చిన రక్షకుడా
మహిమను వీడి నా వెలని - చెల్లించిన  ప్రేమామయుడా
నే వెదకి రాలేనని సత్యమునెరిగి - నీవే నా దరికి పరిగెత్తితివి
దాసత్వము నుండి నను విడిపించి - తండ్రి అని పిలిచే భాగ్యమునిచ్చితివి
ఓ... నీవే నీవే నీవే దేవా
నీవే నీవే నా యేసయ్య (2)

2. నా స్థానంలో నీవే నిలచి - నీ స్థానమే నాకిచ్చితివి
సౌందర్య వంతునిగా నన్నే చేసి - సొగసంత కోల్పోయితివి 
నీ బలమంతా నాకే ఇచ్చి - బలియాగముగా నీవు మారితివి
ఐశ్వర్యవంతునిగా నన్నే చేసి - దీనతనే హత్తుకొంటివి
ఓ... నీవే నీవే నీవే దేవా
నీవే నీవే నా యేసయ్య (2)

Bridge:
నా బలమంతా నీవే నా సౌందర్యం నీవే
నా ఐశ్వర్యము నీవే నీవే నీవే
నా అతిశయము నీవే నా ఆనందం నీవే
నా ఆధారం నీవే నీవే నీవే (2)

యేసయ్య యేసయ్య యేసయ్య
యేసయ్య యేసయ్య నా యేసయ్య (2) ||పాపిగ||`,keywords:["neeve neeve paapiga nanu chudaleka paapamuga maarinaava","neeve neeve","nive nive","neve neve","neeve dheva","neve deva","neeve deva","nive deva","nive dheva","neve deeva","niive niive","nieve nieve","john vittney","john vitney","worship"],video:"",artist:"John Vittney",genre:["General","Worship"],timeSignature:"3/4"},{id:l(),title:"నీవే నా తోడునీడవై యుంటివి",lyrics:`నీవే నా తోడునీడవై యుంటివి (2)
భయపడను నేను ఏనాటికి
నిలిచెదను యేసు నీ సాక్షిగా (2)
||నీవే నా తోడునీడవై||

1. కాలమెదురు తిరిగినా
కారుచీకటి కమ్మినా (2)
పదివేలమంది పైబడినను
నీవే నా బలము ధైర్యము (2)
||నీవే నా తోడునీడవై||

2. జలములలోబడి నే వెళ్ళినా
అగ్నిలో నే నడచినా (2)
నీ బాహువే నన్ను రక్షించును
విడువవు నను ఎడబాయవు (2)
||నీవే నా తోడునీడవై||

3.నిందలెన్ని నిలిచినా
అవమానమే క్రుంగదీసినా (2)
నా తలను పైకెత్తువాడవు నీవే
ఆనందముతో నిన్ను 
స్తుతియింతును (2)
||నీవే నా తోడునీడవై||`,keywords:["neeve na thodu needavai yuntivi","nive na thodu needavai","nevu na thodu nedavai"],video:"",artist:"John Kennedy Bethapudi, KY Ratnam",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నీవే నా సహాయము - నేను ఎన్నడూ భయపడను",lyrics:`1. నీవే నా సహాయము - నేను ఎన్నడూ భయపడను
నా శత్రు సమూహము - ఎదురైనా నే భయపడను 
నీవే నా ధైర్యము - నీవే నా సర్వము 

నిన్ను నే విడువను ఎడబాయను - అని సెలవిచ్చిన దేవ 
నీ వాగ్ధానము ఎన్నటికీ - మారనిది ప్రభువా 


2 నా ముందు నడుచుచు - నన్ను నీవు నడిపించుచు 
నా తోడై వచ్చుచు - నన్ను నీవు కాపాడుచు 
భయపడకుము జడియకుము - అని ధైర్యముచ్చితివే 

నిన్ను నే విడువను ఎడబాయను - అని సెలవిచ్చిన దేవ 
నీ వాగ్ధానము ఎన్నటికీ - మారనిది ప్రభువా 

అందుకే నా ఆరాధన ఆరాధన 
వందనం - వందనం 

నిన్ను నే విడువను ఎడబాయను - అని సెలవిచ్చిన దేవ 
నీ వాగ్ధానము ఎన్నటికీ - మారనిది ప్రభువా`,keywords:["నీవే నా సహాయము నేను ఎన్నడూ భయపడను","neeve na sahayam nenu","neevey na sahaayam","neve na sahayam","neeve na sahaayam"],video:"",artist:"Finny David, Stanley Stephen, Bennu Joshua, Samy Pachigalla",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవే నాకు చాలును యేసు",lyrics:`నీవే నాకు చాలును యేసు (8)

1.ఒంటి నిండా బంగారమున్నాను
అది నీకు సాటి రాగలదా (2)
బంగారమా యేసయ్యా
నా బంగారమా యేసయ్యా  || నీవే ||

2. కోట్లు కోట్లుగా ధనము ఉన్నాను
అది నీకు సాటి రాగాలదా (2)
ధనమంతా నీవే యేసయ్య
నా ధనమంతా నీవే యేసయ్య || నీవే ||

3. కొండంతగా బలము ఉన్నాను
అది నీకు సాటి రాగలదా (2)
బాలమంతా నీవే యేసయ్యా
నా బాలమంతా నీవే యేసయ్యా || నీవే ||

4. ప్రేమించే వారు ఎందరున్నాను
వారు నీకు సాటి రాగలరా (2)
ప్రేమమాయా యేసయ్య
నా ప్రేమమయా యేసయ్యా || నీవే ||`,keywords:["neeve naku chalunu yesu","neeve naaku","nive naku","neeve naku","neve naku chalunu yesu","nive naaku","nive naku chalunu yesu","neeve naku chalunu"],video:"",artist:"Pastor Jyothi Raju",genre:["General"],timeSignature:"6/8"},{id:l(),title:"నీవే నా దేవుడవు ఆరాధింతును",lyrics:`నీవే నా దేవుడవు ఆరాధింతును
నీవే నా రాజువు కీర్తించెదను (2)

1. మరణమును జయించిన మృత్యుంజయుడవు నీవే
మరణమునుండి జీవముకు నను దాటించావు
పరలోకమునుండి వెలుగుగా వచ్చి మార్గము చూపితివి
చీకటినుండి వెలుగునకు నను నడిపించావు

హోసన్నా మహిమా నీకే
హోసన్నా ప్రభావము రాజునకే (2)
నీవే నీవే నీవే నీవే (2)`,keywords:["neeve na dhevudavu","nive na dhevudavu","neve na dhevudavu","neve na devudavu","neeve na devudavu","nive na devudavu","neevena dhevudavu","neevenadhevudavu","nivenadhevudavu","kripal mohan","kripalmohan"],video:"",artist:"Kripal Mohan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవే నా ప్రాణము నీవే నా సర్వము",lyrics:`నీవే నా ప్రాణము నీవే నా సర్వము
నీవే నా జీవము యేసయ్యా (2)
మరువలేను నీదు ప్రేమ
విడువలేనయ్యా నీ స్నేహం (2)  ||నీవే||

1. మార్గం నీవే సత్యం జీవం నీవే
జీవించుటకు ఆధారం నీవే (2)
అపాయము రాకుండా కాపాడువాడవు
నిను నేను ఆరాధింతున్ (2)   ||నీవే||

2. తోడు నీవే నా నీడ నీవే
నిత్యం నా తోడుగుండె చెలిమి నీవే (2)
బ్రతుకంతా నీ కొరకై జీవింతును
నిను నేను ఆరాధింతున్ (2)  ||నీవే||`,keywords:["neeve na praanamu","nive na pranamu","neve na praanamu","neve na pranamu","neeve na pranam","nive na pranam","neevena pranamu","neevenapranamu","nivenapranamu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీవే నీవే నీవే మా ప్రాణం",lyrics:`నీవే నీవే నీవే మా ప్రాణం
యేసు నీవే నీవే మా గానం
ఆశ్రయమైన ఆధారమైన నీ దివ్య ప్రేమ చాలయ్య
కొలుతుము నిన్నే యేసయ్య  

1. శాశ్వతమైన నీ తొలి ప్రేమ - మార్గము చూపీ కాచే ప్రేమ
ఆదియు నీవే అంతము నీవే - నీ చరణములే శరణమయ

నిను పోలి ఇలలోన - ఒకరైన కనరారే    
నివు లేని బ్రతుకంతా - యుగమైనా క్షయమేగా
విలువైన వరమేగా  - నివు చూపే అనురాగం

కలకాలం విరబూసే - ప్రియమార స్నేహమే

నీ ప్రియ స్నేహం - ఆనందం  
కొలుతుము నిన్నే ఆద్యంతం

2. ఊహకు మించిన నీ ఘన కార్యం  - ఉన్నతమైన నీ బహుమానం  
నీ కృపలోనే చూచిన దేవా - జీవనదాత యేసయ్య

కలనైనా అలలైనా  - వెనువెంటే నిలిచావు
కరువైనా కొరతైనా  - కడదాకా నడిచావు  
ఇహమందు పరమందు - కొలువైన ప్రభు యేసు

ఎనలేని దయ చూపే - బలమైన నామమే

నీ ఘన నామం - మా ధ్యానం
కొలుతుము నిన్నే ఆద్యంతం`,keywords:["neeve neeve maa pranam","neve neve ma pranam"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, Haricharan, & Sawai Bhatt",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీలోనే ఆనందం నా దేవా నీలోనే నాకు జీవం",lyrics:`నీలోనే ఆనందం నా దేవా నీలోనే నాకు జీవం
నిన్న నేడు నిరంతరం మారని దేవా
ఈ లోకమంత నేను వేదకినా లేదయ్యా ఎక్కడ ఆనందం
నీ సన్నిధిలో ఒక్క క్షణం గడిపినా నా హృదయం పొంగెను(2)

1. ఈ లోకం ఒక మాయని తెలుసుకున్నను
ఏది నా సొంతం కాదనుకున్నాను (2)
తప్పిపోయిన కుమారుని నేనయితే 
నా కొరకై నిరీక్షించే తండ్రి నా యేసూ (2)

2. ఏ ప్రేమా నీ ప్రేమకు సాటిరాదయ్యా
ఎన్ని ఉన్నా నీతో సరియేదికాదయా (2)
నన్ను మరువని ప్రేమ నీదయ్యా
నన్ను మార్చుకున్న ప్రేమ నీదే యేసయ్యా (2)`,keywords:["neelone aanandham","nilone aanandham","nilone anandam","nelone anandam","nelone aanandam"],video:"",artist:"Evan Mark Ronald & Bharat Mandru",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీలోనే రక్షణ – నీలోనే నిరీక్షణ",lyrics:`నీలోనే రక్షణ – నీలోనే నిరీక్షణ 
నీ వెలుగులో నే నడచెద – నీ మార్గములోనే నిలిచెద 

క్షణ కాలం ఈ లోకం 
చిరకాలం పరలోకం 
కలువరియే నా మార్గం 
పయనించేదనే ప్రభు కోసం 

హల్లెలూయా నే పాడేద 
ఆనందముతో ఆడేద
ప్రతి దినము స్తుతియించెద 
ప్రభు యేసునినే ఘన పరిచేద`,keywords:["నీలోనే రక్షణ నీలోనే నిరీక్షణ","kripal mohan","nilone rakshana","neelone rakshana","nilonee rakshana","nelone rakshana","neloney rakshana"],video:"",artist:"Kripal Mohan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ సత్యం మాకిచ్చెను ఓ గొప్ప విడుదల",lyrics:`నీ సత్యం మాకిచ్చెను ఓ గొప్ప విడుదల
నీ జీవం మాకిచ్చెను ఓ గొప్ప జీవితం (2)

నీ ఆత్మ మాకిచ్చెను నూతననుభవము
నీ శక్తి మాకిచ్చెను ఓ అద్భుత రక్షణ

నీవే మా దైవము నీవే మా శృంగము
నీవే మా ఆశ్రయం ఆధారం (2)`,keywords:["nee sathyam maakichenu","ne sathyam maku ichenu","neesatyam maakichenu","ni sathyam makichenu","ni satyam makichenu","nee satyam","ne satyam","nisathyam","nisatyam"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"నీ సమాధానము దాసుని కిప్పుడు",lyrics:`నీ సమాధానము దాసుని కిప్పుడు నాధా దేవా యిచ్చి నీ
మాటచొప్పున పోనిచ్చుచున్నావు నాధా దేవా ||నీ సమాధానము||

1. అన్యులకు నిన్ను బయలు పరచెడి వెలుగుఁగాను నీకు నణఁగు
ప్రజలైన యిశ్రాయేల్ వారికి మహిమ గాను ||నీ సమాధానము||

2. నరులకై నీవు ఏ ర్పరచిన రక్షణన్ నాధా దేవా యిదిగో నాకనులు
చూచి యా నందించుచున్నవి నాధా దేవా ||నీ సమాధానము||

3. తండ్రికి సుతునికిఁ బరిశుద్ధాత్మకును గలుగుగాక మహిమ తరుగక
సదాకాలము యుగయుగములకును గలుగు నామేన్ ||నీ సమాధానము||`,keywords:["nee samaadhanamu dhasunikippudu","nisamadhanamu","nisaaadhanamu","neesamaadhanamu","nee samaadhaanamu","ni samaadhanamu","ne samaadhanamu","ni samadhanamu","ne samadhanamu","andhra christian hymn"],video:"",artist:"Samuyelu Saakshyabaadham",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"నీ స్వరమే విన్నా - నీ మమతే కన్నా",lyrics:`నీ స్వరమే విన్నా - నీ మమతే కన్నా
ప్రియమైన నా యేసయ్య 
నా చెలిమే నీవై - నీ ప్రేమే నాదై
నిలిచావు నా నేస్తమా 
స్తుతి ఆలాపన - నీ కోసమే
ఆరాధనా - నైవేద్యమే
విశేషమైన బంధమే
వరాల సంబంధమే

1. నిన్ను చూడ - నిన్ను చేర
పరితపించే నా ప్రాణమే
ఎల్లవేళ - విన్నపాల
కరుణ చూపే నీ స్నేహమే
ఎంత ప్రేమ - నిమిషమైన
వీడిపోనీ సంబంధమే
సొంతమైన ఆనందమే

2. ఆశతీర - యేసు నీలో
పరవసించే - నా ప్రాణము
ప్రాణనాథా - ఎన్నడైనా 
మరువలేను - నీ త్యాగము
కానరాదే - ఈ జగాన
నిన్ను పోలి - ఏ బంధము
ఆరిపోని - అనుబంధము`,keywords:["నీ స్వరమే విన్నా నీ మమతే కన్నా","ni swarame vinna","nee swarame vinna","ni svarame vinnas","nee swaramey vinna","ni swaramey vinna","niswarame vina","ni swarame vina","pr"],video:"",artist:"Pranam Kamlakhar, Joshua Shaik, Ankona Mukherjee",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నీ సన్నిధిలో సంతోషము",lyrics:`నీ సన్నిధిలో సంతోషము
నీ సన్నిధిలో సమాధానము (2)
నలిగియున్న వారిని బలపరచును
చెరలో ఉన్న వారికి స్వాతంత్రము

యేసయ్యా యేసయ్యా...(3) (నీ సన్నిధిలో)

నీలోనే నేనుంటాను - నీలోనే జీవిస్తాను
విడువను ఎడబాయను మరువక ప్రేమిస్తాను (2) (యేసయ్యా)

నాలో నీవు - నీలో నేను
నా కొరకే నీవు - నీ కొరకే నేను (2)
ఇక భయమే లేదు - దిగులే లేదు
నీ సన్నిధిలో నేనుంటే చాలు (2) (యేసయ్యా)`,keywords:["ni sannidhilo santhoshamu","nee sannidhilo santhoshanu","nee sannidhiloo","ne sannidhilo","nee sannidilo","ni sanidilo","nesannidhilo","neesanidilo","nisanidilo","john erry"],video:"",artist:"Allen Ganta, John Erry and Sam Alex",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నీ సిలువే నన్ను మార్చింది",lyrics:`నీ సిలువే నన్ను మార్చింది
నీ త్యాగమే నన్ను బ్రతికించింది (2)

నీ ప్రేమలో చిరకాలము 
జీవింతును నీ సాక్షిగా
నీ సేవలో కలకాలము 
ప్రకటింతును నీ ప్రేమను ||నీ సిలువ||

1. నీ రక్త ధారలే నా పాప మరకలను
కడిగి పవిత్రపరచెను యేసయ్యా (2)
రుధిరమంత నాకై ధారపోశావయ్య
ఏమిచ్చి నీ ఋణం నే తీర్చెదనయ్య (2)
||నీ సిలువే||

2. నీవు పొందిన దెబ్బలే నా పాప రోగములను
విడిపించి రక్షించెను యేసయ్యా (2)
పాప పరిహారార్ధ బలగా బలియైనావయ్య
ఏమిచ్చి నీ ఋణం తీర్చెదనయ్య (2)
||నీ సిలువే||`,keywords:["good friday","lent","goodfriday","ni siluve nannu marchindhi","nee siluve nannu marchindhi","ne siluve nannu marchindhi","nee siluvey nannu marchindhi","nee siluve nanu marchindhi","ni siluve nanu marchindi","nee siluve nanu marchindi","nee siluve nannu marchindi"],video:"",artist:"Joshua Negala & Sandeep Kumar",genre:["Good Friday","Lent","Sin","Repentance","Cross"],timeSignature:"4/4"},{id:l(),title:"నీ సిలువే నాకు శరణం యేసుప్రభో",lyrics:`నీ సిలువే నాకు శరణం యేసుప్రభో!

1. దురితదూరుడా - నీదరి జేరగ  (2)
నాదు పాప - శాపము దీర్చి (2)
దరిజేర్చితివి - కృపతో (2)  ||నీ సిలువే||

2. ⁠శాశ్వతముగ నన్ను - ప్రేమించితివి (2)
నీదు ప్రేమకు - నేనే సాక్షిని  (2)
బలమగు నీదు - కృపతో (2)  ||నీ సిలువే||

3. ⁠నా హృదయములో - భారములెల్లను (2)
సిలువను జూడగ - సమసిపోయెను (2)
శక్తిగల నీ కృపతో (2)  ||నీ సిలువే||

4. ⁠రక్తముకార్చి - మరణము గెల్చి  (2)
శత్రు సైతానును ఓడించి (2)
విజయమిచ్చితివి కృపతో (2)  ||నీ సిలువే|| 

5. ⁠నీవు పొందిన - బాధలవలన (2)
నిత్యసుఖంబులు - సంపూర్ణముగ (2)
పొందితి నీదు కృపతో (2)  ||నీ సిలువే||

6. ⁠యేసు నా సిలు - వను నే మోసి  (2)
ఇలలో నిన్ను - వెంబడించుటకు (2)
ధైర్యమిచ్చితివి కృపతో  (2)  ||నీ సిలువే||

7. ⁠నీ రాకకై - నిరీక్షించు (2)
నిత్యకృపను నే - పొందితినంచు (2) 
పాడెదను హల్లెలూయ (2)  ||నీ సిలువే||`,keywords:["ni siluve naku saranam yesu prabho","nee siluve naku saranam yesu prabho","ne siluve naku saranam yesu prabho","ne siluve naaku saranam yeesu prabho","good friday","lent","goodfriday"],video:"",artist:"Bro Sundar Singh, Lilly Johnson",genre:["Good Friday","Lent"],timeSignature:"4/4"},{id:l(),title:"సిలువే నా శరణాయెను రా",lyrics:`సిలువే నా శరణాయెను రా 
నీ సిలువే నా శరణాయెను రా 
సిలువ యందే ముక్తి బలము జూచితి రా ||నీ సిలువే||

1. సిలువను వ్రాలి యేసు - పలికిన పలుకు లందు 
విలువలేని ప్రేమామృతము గ్రోలితి రా ||నీ సిలువే||

2. సిలువను జూచుకొలది - శిలసమానమైన మనసు 
నలిగి కరిగి నీరగు చున్నది రా ||నీ సిలువే||

3. సిలువను దరచి తరచితి - విలువ కందగ రాని నీ కృప 
కలుష మెల్లనూ బాపగ జాలును రా ||నీ సిలువే||

4. పలు విధ పథము లరసి - ఫలిత మేమి గానలేక 
సిలువయెదుటను నిలచినాడను రా ||నీ సిలువే||

5. శరణు యేసు శరణు శరణు - శరణు శరణు నా ప్రభువా 
దురిత దూరుడ నీ దరి జేరితి రా ||నీ సిలువే||`,keywords:["siluve na saranaayenu ra","siluve naa saranayenu ra","seluve na saranayanura","siluvey na saranayanura","siluve na saranu ayanu ra","good friday","lent","lent","good friday","goodfriday","cross","siluve naa saranam","siluve na saranaayenu","siluvee naa saranaayenu","siluve na seranaayenu","seluve na saranaayenu","seluva na saranaayenu","Goodfriday"],video:"",artist:"",genre:["Good Friday","Lent","Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"నూతన పరచుము దేవా",lyrics:`నూతన పరచుము దేవా నీ కార్యములూ నా ఎడలా (2)
నూతన పరచుము దేవా నీ కార్యములూ నా ఎడలా
సంవస్తరాలెన్నొ జరుగుచున్ననూ నూతన పరచుము నా సమస్తమూ (2)

పాతవి గతించిపొవును సమస్తము నూతనమగును
నీలొ ఊత్సహిచుచు నీకై ఎదురుచూతును. (2)

1.శాస్వతమైనది నీదు ప్రేమ ఎన్నడైన మారనిది నీదు ప్రేమ (2)
దినములు గదిచిన సంవత్సరాలెన్ని దొర్లినా నా ఎడ నీదు ప్రేమ నిత్యము నూతనమే.(2)

పాతవి గతించిపొవును సమస్తము నూతనమగును
నీలొ ఊత్సహిచుచు నీకై ఎదురుచూతును.(2)

2.ప్రతిఉదయము నీ వాత్చల్యముతొ నన్ను ఎదుర్కొందువు నీదు కరుణతొ (2)
ధరములలొ ఇల సంతొషకారణముగా నన్నిల చేసినావు నీకె సోత్త్రము.(2)

పాతవి గతించిపొవును సమస్తము నూతనమగును
నీలొ ఊత్సహిచుచు నీకై ఎదురుచూతును (2)`,keywords:["noothana parachumu dheva","nuthana parachumu dheva","noothana parachumu","niuthana parachumu","nutana parachumu deva","nootana parachumu deva","new year","newyear"],video:"",artist:"Jonah Samuel",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నూతనమైనది నీ వాత్సల్యము",lyrics:`నూతనమైనది నీ వాత్సల్యము - ప్రతి దినము నన్ను దర్శించెను
ఎడబాయనిది నీ కనికరము - నన్నేతో ప్రేమించెను
తరములు మారుచున్నాను - దినములు గడుచుచున్ననూ
నీ ప్రేమలో మార్పులేదు
సన్నుతించెదను నా యేసయ్య - సన్నుతించెదను నీ నామము

1. గడచినా కాలమంతా - నీ కృప చూపి ఆదరించినావు
జరగబోయే కాలమంతా - నీ కృపలోనా నన్ను దాచెదవు
విడవని దేవుడవు - ఎడబాయలేదునన్ను - క్షణమైనా త్రోసివేయవు
సన్నుతించెదను నా యేసయ్య - సన్నుతించెదను నీ నామము

2. నా ఇలా దశలో నీ ప్రేమ చూపి - పైకి లేపినావు
ఉన్నత స్థలములో నన్ను నిలువబెట్టి - ధైర్య పరచినావు
మరువని దేవుడవు - నను మరువలేదు నీవు - ఏ సమయమైనను చేయి విడువను
సన్నుతించెదను నా యేసయ్య - సన్నుతించెదను నీ నామము

3. నీ రెక్కల క్రింద నను దాచినావు - ఆశ్రయమైనావు
నా దాగు స్థలముగా నీవుండినావు - సంరక్షించావు
ప్రేమించే దేవుడవు - తృప్తిపరచినావు నన్ను - సమయోచితముగా ఆదరించినావు
సన్నుతించెదను నా యేసయ్య - సన్నుతించెదను నీ నామమును`,keywords:["noothanamainadhi","nuthanamainadhi","noothana mainadhi","niuthanamainadhi","nutana minadi","nootana mainadi","jk christopher","jkchristopher","sharon sisters","sharonsisters"],video:"",artist:"Lilian Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నే క్రీస్తు వాడను - నే వాడబారను",lyrics:`నే క్రీస్తు వాడను - నే వాడబారను 
నే క్రీస్తు వాడను- కదల్చబడను

కొండలే ఎదురుగ నిలచినను - బండలు నాపై దోర్లినను
ఖడ్గమే గుండెలో దూసినను - కడలిలో నేను మునిగినను 
నాయేసు నాకు తోడుండగా -ఏ స్థితి ఐన స్తుతి పాటేగా
నాకు స్తుతి పాటేగా  ||నే క్రీస్తు వాడను||
  
1. నావారేనను తరిమినను - అవమానమేనను నులిమినను
ఏకాకినై నేను తిరిగినను - లోకాన నే ఎగతాలైనను 
నా యేసే నాకు అతిశయము - ఏ స్థితి ఐన అతిశ్రేష్టము 
నాకు అతిశ్రేష్టము ||నే క్రీస్తు వాడను||

2. ఏది జయము ఏది అపజయము- అబ్రాహాము రొమ్మున లాజరే జయము
ఏది నష్టము ఏది లాభము - మన యోబు జీవితమే సాక్ష్యము
నాయేసు చిత్తములో బ్రతుకుట - మరణములోకూడా జయమొందుట
విజయమొందుట  ||నే క్రీస్తువాడను||`,keywords:["nee kreesthu vaadanu","ney kreesthu vaadanu","ne kresthu vadanu","nee kresthu vadanu","ney kristhu vadanu","nee kristhu vadanu"],video:"",artist:"Davidson Gajulavarthi, M. Nissy John, Rev. M. P. P. Franklin, & M. Paul Bhaskar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నే తెరిచే తలుపులు/ఆశలన్నీ",lyrics:`నే తెరిచే తలుపులు అన్నీ తరచుగా మూసితివి
కోపించి పగనుంచినా నవ్వుతూ చూసితివి
నే తలిచే మార్గములన్నీ తరచుగా మూసితివి
కన్నీళ్లతో దుఃఖించినా కౌగిలిలొ దాచితివి
మూయుటకు కారణం ఈ మూర్ఖునికి తెలిసినదే
అడిగిన దానికంటే అధికమే పొందితినే
మూయుటకు కారణం ఇప్పుడే తెలిసినదే
అడిగిన దానికంటే ఎక్కువే పొందితినే

నా చిన్న చిన్న ఆశలన్నీ ఎరిగితివి కోరికలన్నీ తీర్చితివి
మూర్ఖునని నీవెరిగినా కౌగిలిలొ బంధించితివి
ఆశలన్నీ ఎరిగితివి కోరికలన్నీ తీర్చితివి
మూఢుడై నేనుండగా ఎత్తుకుని నడిపించితివి

1. తండ్రులెవరైననూ చేపనడిగితే పామునిచ్చునా
తండ్రీ నిన్ను దయ మాత్రమే వేడితిని
నీకు వేరుగా నేను ఏదియు కోరలేను
ఆశలే నా ఊసై తాకనీ జనుల మనసును
తప్పుగా అడగను నీ చిత్తమే కోరెదను
జీవముకు అర్ధము నీ వాక్యమే తెలిపెను

2. మది లోతులన్నీ నీవు మాత్రమే ఎరిగితివి
కలవరములన్నీ నీవే గ్రహియించితివి
ఏది ఏమైనగాని నీ సన్నిధి నేను చేరెదను
ఎవరి ఎగతాళి మించినా నీ చిత్తమే చేయ సాగెదను
ఎవ్వరికి తెలియని సంగతులు ఎరిగితివి
లోతైన గాయము నీ ప్రేమతో మాన్పితివి
||నే తెరిచే తలుపులు||`,keywords:["ney theriche thalupulu","ne theriche thalupulu","ney teriche talupulu","ney theriche talupulu"],video:"",artist:"Giftson Durai, Revanth Reynold, Reshma Reigna",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నే పాడెద హల్లెలుయా/I raise a Hallelujah",lyrics:`1. నే పాడెద హల్లెలుయా... నా శత్రువు ఎదుట భయపదక
నే పాడెద హల్లెలుయా... అనుమానముకన్నా బిగ్గరగా
నే పాడెద హల్లెలుయా... స్తుతిగానమే ఆయుధముగా
నే పాడెద హల్లెలుయా... ప్రభు పోరాడును నా పక్షముగా
 
ప్రళయము ఎదురైన నా పాట ఆగిపోదు
అలలెంత పెద్దవైనా స్తుతిగర్జన ఆగిపోదు
బూదిదలో నుండి నిరీక్షణొచ్చెనిపుడు
సమాధి గెలచినాడు ప్రభు మృత్యుంజయుడు
 
2. నే పాడెద హల్లెలుయా... నా అంతరంగ సమస్తముతో
నే పాడెద హల్లెలుయా... అంధకారమా పారిపో
నే పాడెద హల్లెలుయా... అర్ధంకాని సమస్యలలో
నే పాడెద హల్లెలుయా... భయము వోడె ప్రభు ప్రేమలో
 
ప్రళయము ఎదురైన నా పాట ఆగిపోదు
అలలెంత పెద్దవైనా స్తుతిగర్జన ఆగిపోదు
బూదిదలో నుండి నిరీక్షణొచ్చెనిపుడు
సమాధి గెలచినాడు ప్రభు మృత్యుంజయుడు

Bridge: 
స్వరమెత్తి పాదెద

స్వరమెత్తి పాదెద - నా శత్రువు ఎదుట భయపదక
స్వరమెత్తి పాదెద - అనుమానముకన్నా బిగ్గరగా
స్వరమెత్తి పాదెద - స్తుతిగానమే ఆయుధముగా
స్వరమెత్తి పాదెద - ప్రభు పోరాడును నా పక్షముగా 
 
ప్రళయము ఎదురైన నా పాట ఆగిపోదు
అలలెంత పెద్దవైనా స్తుతిగర్జన ఆగిపోదు
బూదిదలో నుండి నిరీక్షణొచ్చెనిపుడు
సమాధి గెలచినాడు ప్రభు మృత్యుంజయుడు`,keywords:["ne paadedha halleluyaa","ney padedha halleluyaa","nee paadedha halleluyaa","ney paadedha halleluyaa","ne padedha halleluyaa","ne padeda haleluya","nee padeda halleluya","ne padedha hallelua","i raise a hallelujah","i raise a halleluya","ny padedha halleluya","ne padedha"],video:"https://www.youtube.com/embed/UAj0Y4Zeg6M?start=803",artist:"Noble Pilli",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నే నమ్మే నమ్మకము (నా నమ్మకము)",lyrics:`నే నమ్మే నమ్మకము - ఎప్పటికి నీవె
దీవెనలు కలిగిన నిను నమ్మేదన్
దీవెనలు లేకున్న నిను నమ్మేదన్ (2)

నీకే నా ఆరాధన - నిన్నే నే ఘనపరచెదన్
నీకే నా ఆరాదన - నీకే

1. సమస్తము తెలిసిన త్రియేకుడా - నా ముందు నడచుచు నడిపించుమా (2)
శత్రు సైన్యములు తుడుచి పోవును
నీ వాగ్ధాన శక్తి నిలిచిపోవును (2)  
||నీకె నా ఆరాధన||

2. ఆపద సమయంలో - నిను వెదకితిన్
ఆదరణ ఇచ్చుటకు వచ్చితివి (2)
నీ వాగ్ధనములన్నియు నెరవేరును
నీ వాఖ్యపు శక్తి నిలిచిపోవును (2)
||నీకె నా ఆరాధన||`,keywords:["ney namme nammakamu","ney namme namakamu","ne namme nammakamu","nenamme nammakamu","naa nammakam","na nammakam","na namakam","naa namakam","benny joshua","worship"],video:"",artist:"Benny Joshua",genre:["Worship","General"],timeSignature:"3/4"},{id:l(),title:"నే నీవాడనై యుండ గోరెదన్",lyrics:`1. నే నీవాడనై యుండ గోరెదన్
యేసు ప్రియ రక్షకా
నీవు చూపు ప్రేమను గాంచితిన్
నన్ను జేర్చు నీ దరిన్

నన్ను జేర్చు చేర్చు చేర్చు రక్షకా
నీవు పడ్డ సిల్వకున్
నన్ను జేర్చు చేర్చు చేర్చు రక్షకా
గాయపడ్డ ప్రక్కకున్ 

2. నన్ను బ్రతిష్ఠ పర్చుమీ నాధా
నీదు కృపవల్లనే
నాదు నాత్మ నిన్ను నిరీక్షించు
నీ చిత్తంబు నాదగున్

3. నీదు సన్నిధిలో నిక నుండ
నెంత తుష్టి నాకగున్
స్నేహితుని మాటలాడెదన్
సర్వశక్త ప్రభుతో

4. నీదు దివ్య ప్రేమాతిశయము
ఇహ బుద్ధి కందదు
పరమందున దాని శ్రేష్ఠత
నే ననుభవించెదన్`,keywords:["neni vadanu yunda goredhan","ney ni vadanu","nene vadanu unda goredhan","neney vaadanu yunda goredhan","nenivadanai","nenivaadanai","andhra christian hymns","6/8"],video:"",artist:"Jacob Chambarlen",genre:["Andhra Christian Hymn"],timeSignature:"6/8"},{id:l(),title:"నేను నడిచే దారులలో నా తోడు నీవుండగా (పరమ తండ్రి)",lyrics:`నేను నడిచే దారులలో నా తోడు నీవుండగా
నన్ను గెలిపించె యోధ్యుడవు నాకు విశ్వాసము నేర్పుము  (2)
 
పరమ తండ్రి నీ వాగ్ధానము నా పట్ల నేరవేర్చుము
రెండు ఇంతల అభిషేకము నా పైనా కుమ్మరించుము

1. స్నేహితుడు వాలె నాతో సహవాసం చేయుము
అక్కరలు అన్నీయు తీర్చు వాడవు  (2) ||పరమ తండ్రి||

పరలోకమంతటిలో నీ నామమున్ కీర్తించును
భూలోకమంతటిలో నీ మహిమను కనపరచుము`,keywords:["parama thandri","parama tandri","paramathandri","parama thandre","parama tandre","nenu nadiche dhaarulalo","neenu nadiche dhaarulalo","nenu nadiche darulalo"],video:"",artist:"Gyan Swaroop, Joel Johnson, & Angela ",genre:["General"],timeSignature:"3/4 "},{id:l(),title:"నేనున్న స్థితిలోనే సంతృప్తిని కలిగించు",lyrics:`నేనున్న స్థితిలోనే సంతృప్తిని కలిగించు
ఏమున్నా లేకున్నా నీకొరకే బ్రతికించు (2)

కష్టాలు ఎదురైనా నా యాత్రను సాగించు
నష్టాలలోనైనా స్తుతిచేయుట నేర్పించు (2)

1. లోకములో నీ కొరకు జ్యోతిగ నను వెలిగించు (2)
రెండవ రాకడవరకు విడువక నను నడిపించు (2) ||కష్టాలు|| 

2. నా దినముల పరిమాణం లెక్కించుట నేర్పించు (2)
నా లోపల స్థిర హృదయం నూతనముగ పుట్టించు (2) ||కష్టాలు|| 

3. సరియగు త్రోవను నడువ కట్టడలను బోధించు (2)
సమయోచిత జ్ఞానమును దయచేసి దీవించు (2) ||కష్టాలు||`,keywords:["nenunna sthithilonee","nenu unna sthithilone","nenunna stitilone","nenuna stithilone","nenuna stitilone","nenuna sthithilone","arstevenson","stevenson"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నేనును నా ఇంటి వారును నీతి సూర్యుని గొలుతుము",lyrics:`నేనును నా ఇంటి వారును నీతి సూర్యుని గొలుతుము – దీన మనసు కలిగి దేవుని దివ్య సేవను చేతుము 

1. అనుదినంబును ప్రభుని దలచుచు – అలయకను ప్రార్ధింతుము – అనవరతమా ప్రభుని చిత్తము – ననుకరింతుము పనులలో 

2. వేదవాక్య పఠనమందు – విసుగు – జెందక నుందుము = ఆదరంబున దైవ చిత్తము – ననుసరించుచు నడుతుము 

3. ఆశతోడను ప్రభుని దినమును – నాచరింతుము మరువక = విసుకు జెందక నాలయమునకు – పిన్న పెద్దల దెత్తుము 

4. సంఘ కార్యక్రమములందు – సహకరింతుము ప్రీతితో = భంగ పరచెడి పనులన్నిటి – కృంగదీసెదమనిశము

5. ప్రేమతోడను పొరుగువారిని – ప్రియులుగను భావింతుము = క్షమయు స్నేహము నేర్చి ప్రభుకడ – శాంతితో జీవింతము 

6. శక్తికొలది శరీరబలమును – శ్రమను క్రీస్తుకు నిత్తుము = భక్తితో హృదయమును పూర్తిగ – ప్రభునికే యర్పింతుము 

7. చిన్నవారలు దైవరాజ్యపు – చిరుత వారసులంచును = అన్నివేళల వారి వృద్ధికి – మిన్నగ దొడ్పడెదము

8. పెద్దవారలు దైవజనులని – పేర్మితో భావింతుము = శుద్దుడగు ప్రభు క్రీస్తు మనసును – శ్రద్ధతోడను జూపుచు 

9. జీవితంబున ప్రభును ప్రేమా – శీస్సులను ప్రసరింతుము = దివ్య జ్యోతుల రీతి వెలుగుచు – దివ్య సన్నిధి నుందుము`,keywords:["nenu nu na intivarunu needhi suryuni goluthumu","nenunu na inti varunu","andhra christian hymns","7/8"],video:"",artist:"A. Charles Kinsinger",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"నేనెల్లప్పుడు యెహోవను సన్నుతించెదన్",lyrics:`నేనెల్లప్పుడు యెహోవను సన్నుతించెదన్
నిత్యము ఆయన కీర్తి నా నోట నుండున్ (2)

అంతా నా మేలుకే – ఆరాధన యేసుకే
అంతా నా మంచికే – తన చిత్తమునకు తల వంచితే
తన చిత్తమునకు తల వంచితే
ఆరాధన ఆపను – స్తుతియించుట మానను (2)
స్తుతియించుట మానను

1. కన్నీళ్లే పానములైనా – కఠిన దుఃఖ బాధలైనా
స్థితి గతులే మారినా – అవకాశం చేజారినా (2)
మారదు యేసు ప్రేమ – నిత్యుడైన తండ్రి ప్రేమ (2)
మారదు యేసు ప్రేమ – నిత్యుడైన తండ్రి ప్రేమ (2)   ||అంతా||

2. ఆస్తులన్ని కోల్పోయినా – కన్నవారే కనుమరుగైనా
ఊపిరి భరువైనా – గుండెలే పగిలినా (2)
యెహోవా ఇచ్చెను – యెహోవా తీసుకొనెను (2)
ఆయన నామమునకే – స్తుతి కలుగు గాక (2)   ||అంతా||

3. అవమానం ఎంతైనా – నా వారే కాదన్నా
నీవు తప్ప ఎవరున్నారు ఆకాశమందున (2)
నీవు నాకుండగా – ఏది నాకక్కర లేదు (2)
నీవు నాకుండగా – ఏది నాకక్కర లేదు (2)
||అంతా||

4. ఆశలే సమాధియైనా – వ్యాధి బాధ వెల్లువైనా
అధికారం కొప్పుకొని – రక్షణకై ఆనందింతును (2)
నాదు మనస్సు నీ మీద – ఆనుకొనగా ఓ నాథా (2)
పూర్ణ శాంతి నే పొంది – నిన్నే నే కీర్తింతున్ (2)   ||అంతా||

5. చదువులే రాకున్నా – ఓటమి పాలైనా
ఉద్యోగం లేకున్నా – భూమికే భరువైనా (2)
నా యెడల నీ తలంపులు – ఎంతో ప్రియములు (2)
నీవుద్దేశించినది – నిశ్ఫలము కానేరదు (2)
||అంతా||

6. సంకల్పన పిలుపొంది – నిన్నే ప్రేమించు నాకు
సమస్తము సమకూడి – మేలుకై జరుగును (2)
యేసుని సారూప్యము – నేను పొందాలని (2)
అనుమతించిన ఈ – విలువైన సిలువకై (2)
||అంతా||

7. నీవు చేయునది – నాకిప్పుడు తెలియదు
ఇక మీదట నేను – తెలిసికొందును (2)
ప్రస్తుతము సమస్తము – దుఃఖ కరమే (2)
అభ్యసించిన నీతి – సమాధాన ఫలమే (2)
||అంతా||`,keywords:["anthaa naa meeluke","antha na meluke","anta na meluke","antha nameluke","anthaa nameeluke","anta na melukey","kalamakar","nenellapudu","ney ellapudu","ne yellapudu","ne yelapudu","ney ellappudu","nenu ellapudu","nenu yellapudu","neenellapudu","nenellappudu","neenelapudu","nenelapudu","nenellapudu","nenellapudu yehovanu","kamalakar","pranam kamalakar"],video:"",artist:"Dr. Asher Andrew",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"నేనేమైనా ప్రభువా నిన్నే స్తుతిస్తాను",lyrics:`నేనేమైనా ప్రభువా నిన్నే స్తుతిస్తాను
నాకేమున్నా ప్రభువా నీకే అర్పిస్తాను (2)
నేనేమైయున్నానో నీ దయ వలనేనయ్యా (2)
నాకున్నవన్నియు నీవిచ్చినవేనయ్యా (2)   ||నేనేమైనా||

1. లేక లేక వృద్ధాప్యమందు
ఏకైక కుమారుని ఇచ్చింది నీవే (2)
ఇచ్చిన నీవే బలి కోరగా (2)
తెచ్చి నీకు అర్పించిన అబ్రహాములా  ||నేనేమైనా||

2. సర్వము పోయి శరీరము కుళ్ళిన
నా అనువారే వెలివేసినా (2)
ఆప్తులంతా శత్రువులైనా (2)
అంతము వరకు సహియించిన ఆ యోబులా  ||నేనేమైనా||

3. నా మట్టుకైతే బ్రతుకుట క్రీస్తే
చావైనా అది నాకెంతో మేలే (2)
ఇదిగో నేను ఉన్నానయ్యా (2)
దయతో నన్ను గైకొనుమయ్యా నా యేసయ్యా   ||నేనేమైనా||`,keywords:["nenemaina prabhuva","nenemaina prabuva","nenu emaina prabuva","nenu emaina prabhuva","nenemayna prabhuva"],video:"",artist:"Shyam Vedala",genre:["General"],timeSignature:"4/4"},{id:l(),title:"నే పాపినో ప్రభువా",lyrics:`నే పాపినో ప్రభువా – నన్ను కావు మా దేవా 
నే పాపినో ప్రభువా – నన్ను కావు మా దేవా (2)

1. కరుణాలవాలా – నీ మ్రోల నేలా 
తల వాల్చి నిలిచేనులే (2)
దయ చూడు చాలా – దురితాల ద్రోలా 
నీ సాటి దైవంబు వేరెవ్వరూ వేరెవ్వరూ
||నే పాపినో||

2. వుదయించినావు – సదయుండ నీవు 
ముదమార మా కొరకై (2)
మోసావు సిలువ – నీ ప్రేమ విలువ 
నా తరమా చెల్లించ నా యేసువా నా యేసువా
||నే పాపినో||`,keywords:["నే పాపినో ప్రభువా","nee paapino prabhuva","ney paapino prabhuva","ne papino prabhuva","nee papino prabhuva"],video:"",artist:"Pulivarthi Dayasheela, M.D. Jacobson, Swarnalatha Jason Raj",genre:["General"],timeSignature:"3/4"},{id:l(),title:"నేర్చుకొనుటకు నీ యొద్ద యేసూ",lyrics:`నేర్చుకొనుటకు నీ యొద్ద యేసూ 
కూర్చుండి విందునయ్యా

నేర్పించు యేసయ్యా (2) 
నా మంచి బోధకుడా 
నేర్పించు యేసయ్యా - నేర్పించు

1. సూటిగా గుండెలలోకి చొచ్చుకొనిపోవునట్లు 
చేటు తెచ్చు పాపములు ఒప్పుకొనజేయునట్లు

2. ఓర్పుతో నా నడవడిని మార్చుకొనగలుగునట్లు 
నేర్పుతో శాశ్వతసిరిని కూర్చుకొని వెలుగునట్లు

3. దివ్య జ్ఞాన సంపదలు విడుదలై కురియునట్లు 
మర్మమైన సంగతులు వివరముగ తెలియునట్లు`,keywords:["nerchukonutaku ni yodha yesu","neerchukonutaku ne yodha yesu","nerchukonutaku nee yodha yesu","nerchukunutaku nee yodha yesu","neerchukonuta ku ni yodha yesu","nerchukonutaku ni yoda yesu","stevenson"],video:"",artist:"Dr. A.R. Stevenson",genre:["General","Prayer"],timeSignature:"4/4"},{id:l(),title:"నే సాగెద యేసునితో",lyrics:`నే సాగెద యేసునితో
నా జీవిత కాలమంతా (2)

యేసుతో గడిపెద యేసుతో నడిచెద (2)
పరమును చేరగ నే వెళ్లెద (2)
హనోకు వలె సాగెదా   ||నే సాగెద||

1. లోకపు శ్రమలు నన్నెదిరించినా (2)
కఠినులు రాళ్ళతో హింసించినా (2)
స్తెఫను వలె సాగెదా   ||నే సాగెద||

2. వెనుక శత్రువులు వెంటాడిననూ (2)
ముందు సముద్రము ఎదురొచ్చినా (2)
మోషె వలె సాగెదా   ||నే సాగెద||

3. తల్లి మరచిన తండ్రి విడచిన (2)
బంధువులే నన్ను వెలివేసినా (2)
బలవంతుని వలె సాగెదా    ||నే సాగెద||

4. బ్రతుకుట క్రీస్తే చావైనా మేలే (2)
క్రీస్తుకై హత సాక్షిగా మారిన (2)
పౌలు వలె సాగెదా   ||నే సాగెద||`,keywords:["ne sagedha yesunitho","ney sagedha yesunitho","nee sagedha yeesunitho","ne sageda yesunito"],video:"",artist:"",genre:["General"],timeSignature:"4/4"}],ప:[{id:l(),title:"పంపుము దేవా దీవెనలతో",lyrics:`పంపుము దేవా దీవెనలతో – పంపుము దేవా (2)
పంపుము దయ చేత పతిత పావన నామ
పెంపుగ నీ సేవ ప్రియమొప్ప నొనరింప    ||పంపుము||

1. మా సేవ నుండిన మా వెల్తు లన్నియు (2)
యేసుని కొరకు నీ వెసఁగఁ క్షమియించుచు    ||పంపుము||

2. వినిన సత్యంబును – విమలాత్మ మది నిల్పి (2)
దినదినము ఫలములు దివ్యముగ ఫలియింప     ||పంపుము||

3. ఆసక్తితో ని-న్ననిశము సేవింప (2)
భాసురంబగు నాత్మ వాసి-కెక్కగ నిచ్చి     ||పంపుము||`,keywords:["pampumu dheva","pampumu deva","pampumudeva","pampumudheva","Andhra Christian Hymn","4/4"],video:"",artist:"Pulipaaka Jagannaathamu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"పదములు చాలని ప్రేమ ఇది",lyrics:`పదములు చాలని ప్రేమ ఇది
స్వరములు చాలని వర్ణనిది (2)
కరములు చాపి నిను కౌగలించి పెంచిన
కన్నవారికంటే ఇది మిన్నయైన ప్రేమ
వారిని సహితము కన్న ప్రేమ

ప్రేమ ఇది యేసు ప్రేమ 
ప్రేమ ఇది తండ్రి ప్రేమ
ప్రేమ ఇది ప్రాణమిచ్చిన ప్రేమ
కలువరి ప్రేమ ||పదములు||

1. నవ మాసం మోసి ప్రయోజకులను చేసినా
కన్నబిడ్డలే నిను వెలివేసినా (2)
తన కరములు చాపి ముదిమి వచ్చు వరకు
నిన్నెత్తుకొని ఆదరించు ప్రేమ
ఆ వేదనంత తొలగించును ప్రేమ ||ప్రేమ||

2. మేలులెన్నో పొంది ఉన్నత స్థితికెదిగిన
స్నేహితులే హృదయమును గాయపరచగా (2)
మేలులతో నింపి అద్భుతములు చేసి
క్షమియించుట నేర్పించెడి ప్రేమా
శాంతితో నిను నడిపించెడి ప్రేమ ||ప్రేమ||`,keywords:["padhamulu chaalani prema","padamulu chalani prema","padhamulu chalani preema","padamulu chaalani","paddamulu","padhamulu chalane prema","padhamulu chaalane","love","6/8"],video:"",artist:"Philip",genre:["Love"],timeSignature:"6/8"},{id:l(),title:"పదే పాడనా నిన్నే కోరనా ",lyrics:`పదే పాడనా నిన్నే కోరనా - ఇదే రీతిగా నిన్నే చేరనా 
నీ వాక్యమే నాకుండగా - నా తోడుగా నీవుండగా 
ఇదే బాటలో నే సాగనా - ఇదే రీతిగా నా యేసయ్య  
 
1. ప్రేమను పంచే నీ గుణం - జీవమునింపే సాంత్వనం 
మెదిలెను నాలో నీ స్వరం - చూపెను నాకు ఆశ్రయం 
నీవే నాకు ప్రభాతము -  నాలో పొంగే ప్రవాహము  
నీవే నాకు అంబరం - నాలో నిండే సంబరం
నాలోన మిగిలే నీ ఋణం - నీతోటి సాగే ప్రయాణం
 
2. మహిమకు నీవే రూపము - మధురము నీదు నామము 
ఇదిగో నాదు జీవితం - ఇలలో నీకే అంకితం 
నీవే నాకు సహాయము - నిన్న నేడు నిరంతరం 
నీవే నాకు ఆశయం - నాలో నీకే ఆలయం 
ధరలోన లేరు నీ సమం  - నీ ప్రేమధారే నా వరం`,keywords:["padhe paadana","padhe padana","pade padana","padhepadana"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Anwesshaa",genre:["General"],timeSignature:"3/4"},{id:l(),title:"పాపినైన నన్ను వెదకి రక్షించావు",lyrics:`పాపినైన నన్ను వెదకి రక్షించావు 
నశించిన నన్ను వెదకి రూపుదిద్దావు

ఏమిచ్చి నీ బుణం నేతీర్చగలను 
ఏమిచ్చి నే నిన్ను  దర్శించగలను

అందుకో దేవా నా దీన స్తుతులు
అందుకో దేవా నా దీన ప్రార్థనా
||పాపినైన||

1. ప్రేమ ఆనే మాయలో పడిపోయాను
మత్తు అనే ముసుగులో చెడిపోయాను (2)

పడిపోయిన నన్ను లేవనేత్తావు 
చెడిపోయిన నన్ను చేరదీసావు

మలినమైన నా బ్రతుకు శుద్ధి చేసావు (2)
||అందుకో దేవా||

2. పాపమనే ఊబిలో మునిగిపోయాను
జూదమనే ఆటలో జారిపోయాను (2)

దిగజారిన నన్ను లేవనెత్తావు
మోక్షమేలేని నాకు మోక్షమిచ్చావు

హీనమైన నా బ్రతుకు మహిమ గా మార్చావు (2)
||అందుకో దేవా||

3. నీచుండ నైన నన్ను నిలువబెట్టావు
గౌరవం లేని నాకు అధికారమిచ్చావు (2)

చనిపోయిన నన్ను బ్రతికించావు
నీ ప్రేమతో నన్ను బందినిచేసావు

పాడైన నా బ్రతుకు పరిమళముగ చేసావు (2)
||అందుకో దేవా||`,keywords:["paapinaina nannu vedhaki rakshinchaavu","andhukoodeva na dhina sthuthulu","papinaina nannu vedhaki","papinaina nanu vedaki"],video:"",artist:"Pastor Marku Raju Matta, Moses Dany, Tarun J",genre:["General","Worship","Repentance "],timeSignature:""},{id:l(),title:"ప్రతి ఉదయం నీ కృపను (మేము పాడెదం)",lyrics:`ప్రతి ఉదయం నీ కృపను 
ప్రతి రాత్రి నీ వాత్సల్యతను 
పగలంతా కీర్తింతుము 
రేయంతా ఆరాదించెదము 

అన్నికాలములలో- స్తోత్రార్హుడని నిన్ను   (2)

మేము పాడెదం - మేము పాడెదం (2)

1. Eternal God
ఆరంభము నీవే - అంతముయు నీవే
ఉన్నవాడవు నీవే - అను వాడవు నీవే (2)
నిత్యమూ నివసించూ - దేవుడవని నిన్ను (2)
మేము పాడెదం - మేము పాడెదం (2)

2. Creator
ఆకాశము నీదే - అంతరిక్షము నీదే
జీవప్రాణులు నీవే - జలరాసులు నీవే (2)
సర్వమును సృజించిన - దేవుడవని నిన్ను (2)
మేము పాడెదం - మేము పాడెదం (2)

3. Redeemer
నీతిమంతుడు నీవే - నిత్యజీవము నీవే 
పరిశుద్ధుడు నీవే - పరిహారము నీవే (2)
మా కొరకు బలియైన - దేవుడవని నిన్ను (2)
మేము పాడెదం - మేము పాడెదం (2)

4. Ruler
సంకల్పము నీదే - ఆలోచన నీదే
రాజ్యములు నీవే - రారాజువు నీవే (2)
సర్వాధికారియైన - దేవుడవని నిన్ను (2)
మేము పాడెదం - మేము పాడెదం (2)`,keywords:["prathi udhayam ni krupanu","prati udayamu ni krupanu","prathi udhayamu nee krupanu","prathi udhayam nee krupanu","worship","memu paadedham","memu padedam"],video:"",artist:"Allen Ganta, Daniel Surya Avula, Rahul Roy, Hadlee Xavier",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"ప్రతి ఉదయమున ప్రతి సాయంత్రము",lyrics:`ప్రతి ఉదయమున ప్రతి సాయంత్రము
నిన్ను స్తుతియించెద నా యేసయ్య
ప్రతి వాక్యమును ప్రతి ఆజ్ఞలను
తలంచుచు నిత్యము ఆరాధించెదయ

నా పూర్ణ మనస్సుతో నా పూర్ణ హృదయముతో
నా పూర్ణ ఆత్మతో నిన్ను పొగెడదయ్యా

ఆరాధనా ఆరాధనా నీకే ప్రభూ తరతరములు
ఆరాధనా ఆరాధనా నీకే ప్రభూ యుగయుగములు

1. ఏమి ఉన్న లేకున్న ఉన్నవన్నీ కోల్పోయినా
యోబు వలె నమ్మకముగా నీలోనే నిలిచెదయ (2)
నా జీవితమంతా నిన్ను విడువకుండా
నా మనసారా నిన్ను పొగెడదయ్యా

ఆరాధనా ఆరాధనా నీకే ప్రభూ తరతరములు
ఆరాధనా ఆరాధనా నీకే ప్రభూ యుగయుగములు

2. నా నోటిమాటలు నా హృదయ ధ్యానములు
దావీదు వలె నిన్ను సంతోషపరచాలయ్య (2)
మహిమోన్నతుడా మా గొప్ప దేవా
నా మనసారా నిన్ను పొగెడదయ్యా

ప్రతి ఉదయమున ప్రతి సాయంత్రము
నిన్ను స్తుతియించెద నా యేసయ్య
ప్రతి వాక్యమును ప్రతి ఆజ్ఞలను
తలంచుచు నిత్యము ఆరాధించెదయ

నా పూర్ణ మనస్సుతో నా పూర్ణ హృదయముతో
నా పూర్ణ ఆత్మతో నిన్ను పొగెడదయ్యా

ఆరాధనా ఆరాధనా నీకే ప్రభూ తరతరములు
ఆరాధనా ఆరాధనా నీకే ప్రభూ యుగయుగములు`,keywords:["prathi udhayamuna","prathi udayamuna","prathiudhayamuna","worship"],video:"",artist:"Srimanth Katamala, David Selvam",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"ప్రబలముగనే ప్రస్తుతించెద",lyrics:`ప్రబలముగనే ప్రస్తుతించెద ప్రభుని కృపలన్ని
ప్రతి దినము నిను ప్రచురపరచెద ప్రభుడ నావిభుడా ||ప్రబలముగనే||

1. పొందుగోరి నా యందు నిలిచిన బంధుమిత్రుడవు
మందమతి కా నందమొసగిన మహిమతేజుడవు ||ప్రబలముగనే||

2. చింతదీర్చి నా భ్రాంతి మార్చితి వెంట వింతదియో
స్వాంతమున కడు శాంతిగూర్చితి వెంట కరుణదియో ||ప్రబలముగనే||

3. నీతి కరపిన జాతి మరపిన ఖ్యాతి యేసునిదే
నీరసుడ నను గారవించిన నీతిరాజితడే ||ప్రబలముగనే||

4. జీవమిచ్చిన జావచ్చిన దేవసుత నీవే
జీవదాయక బ్రోవరా యిక జాలమేలనురా ||ప్రబలముగనే||

5. నిమిషనిమిషము నిను భజించెద నెమ్మనంబునను
శమదమాది సుగుణశోభిత సమ్మదిని నిమ్మ ||ప్రబలముగనే||`,keywords:["prabalamugane","pragalamugane prasthuthinchedha","prabalamuganey prasthuthinchedha","prabhalamugane","Andhra christian hymn","4/4"],video:"",artist:"Chetti Bhanu Murthi",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"ప్రభు ప్రేమ తొలికేక",lyrics:`ప్రభు ప్రేమ తొలికేక - హృదయములో ప్రతిధ్వనియించే
పాప క్షమా యేసునిలో- శరణు నొసంగుచు కనిపించే

1. పాపవికారము పొడసూప - జీవిత విలువలు మరుగాయె
ఫలితముగా లోకములో - బ్రతుకుటయే నా గతియాయె
పలువురిలో కనబడలేకా - దాహము తోనే నొంటరిగా
బావికని పయనింపా - నాధుని దర్శన మెదురాయే
పావనుడు దాహముతో - జలమును ఇమ్మని ననుగోరె ||ప్రభు||

2. జాతినిచూడని నేత్రముతో - పాపము శోకని హృదయముతో
జాలిని చాటించుచునే - తాకెను నామది వేదనతో
జాప్యము చేయక తెమ్మనియే - దాచుకొనిన నా పాపమును
జడియుచునే తెలిపితిని - ప్రభు వెరిగిన నా నిజస్థితిని
జయమొందె నాతనువూ - సరిగ నుడితివని ప్రభు తెలుపా ||ప్రభు||

3.దేహమునే నా సర్వముగా - భావించుచు మది పూజింపా
దినదినమూ జీవితమూ - చావుగ మారిన కాలములో
దేవునిగా నా బంధువుగా - మరణ ప్రవాహము ఛేదించి
దరిజేర్చి దీవించి - నూతన జన్మ ప్రసాదించే
దయ్యాల కుహరమును - స్తుతి మందిరముగ రూపించే||ప్రభు||

4.పాపము దాగును నాబావి - లోతును ఎరిగినవారెవరు
పోరాట వాటికయౌ - నా బ్రతుకును చూచినదెవరు
పాపికిని పాపమునకునూ - భేదము చూపిన వారెవరూ
పాపిని కాపాడుటకు - సిలువను మోసినవారెవరూ
ప్రకటించె దైవకృప - తెరచెను జీవన జలనిధులు ||ప్రభు||

5. ఘటముతో వెడలితి నొంటరిగా - పితరుల త్రానజనములకై
కనబడెను బావికడ - రక్షణయూటల ప్రభుయేసు
కుండను వీడి పరుగిడితి - బావిని చేకొని హృదయములో
ఘనమైన శుభవార్త - ఆతృతతో ప్రజలకు తెలుసా
గ్రామ ప్రజా కనుగొనిరి - విశ్వ విమోచకుడగు యేసున్  ||ప్రభు||`,keywords:["prabhu prema tholi keka","prabhu prema tholikeka","prabhuprema tholi keka","prabuprema tholikeka","andhra christian hymn","prabu prema","prabu preema tholi keka","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","General"],timeSignature:"4/4"},{id:l(),title:"ప్రభు సన్నిధిలో ఆనందమే",lyrics:`ప్రభు సన్నిధిలో ఆనందమే ఉల్లాసమే అనుదినం
ప్రభు ప్రేమలొ నిస్స్వార్ధమే వాత్యల్యమే నిరంతరం (2)

హాల్లెలూయా హాల్లెలూయా
హాల్లెలూయా ఆమెన్ హాల్లెలూయా (2) ||ప్రభు||

1. ఆకాశము కంటే ఎత్తైనది
మన ప్రభు యేసుని కృపా సన్నిధి (2)
ఆ సన్నిధే మనకు జీవమిచ్చును
గమ్యమునకు చేర్చి జయమిచ్చును (2) ||ప్రభు||

2. దుఃఖించు వారికి ఉల్లాస వస్త్రములు
ధరింప చేయును ప్రభు సన్నిధి (2)
నూతనమైన ఆశీర్వాదముతో
అభిషేకించును ప్రేమానిధి (2) ||ప్రభు||`,keywords:["prabhu sannidhilo","prabu sannidhilo","prabhu sanidhilo","prabhu","prabu","prabhu saniddhilo","prabhu sanniddhilo","prabhu sannedhelo","prabhu sannedhilo","sharon sisters","sharonsisters","jk christopher","philip","4/4"],video:"",artist:"Philip",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ప్రభు యేసుని వదనములో – నా దేవుడు కనిపించె",lyrics:`ప్రభు యేసుని వదనములో – నా దేవుడు కనిపించె (2)
పాపాత్ముల బ్రోచుటకై – కృపలొలికిన కలువరిలో (2)
పరలోకముకై – చిర జీవముకై (2)
ప్రార్ధించెను నా హృదయం    ||ప్రభు యేసుని||

1. దిశలన్నియు తిరిగితిని – నా పాపపు దాహముతో (2)
దౌష్ట్యములో మసలుచును – దౌర్జన్యము చేయుచును (2)
ధన పీడనతో – మృగ వాంఛలతో (2)
దిగాజారితి చావునకు    ||ప్రభు యేసుని||

2. యేసు నీ రాజ్యములో – భువి కేతెంచెడి రోజు (2)
ఈ పాపిని క్షమియించి – జ్ఞాపకముతో బ్రోవుమని (2)
ఇల వేడితిని – విలపించుచును (2)
ఈడేరెను నా వినతి   ||ప్రభు యేసుని||

3. పరదైసున ఈ దినమే – నా ఆనందములోను (2)
పాల్గొందువు నీవనుచు – వాగ్ధానము చేయగనే (2)
పరలోకమే నా – తుది ఊపిరిగా (2)
పయనించితి ప్రభు కడకు  ||ప్రభు యేసుని||`,keywords:["prabhu yesuni vadhanamulo",,"prabu yesuni vadhanamulo","prabhu yesuni vadanamulo"],video:"",artist:"Dr. A. B. Maasilamani",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ప్రభు యేసు నా రక్షకా",lyrics:`ప్రభు యేసు నా రక్షకా
నొసగు కన్నులు నాకు
నిరతము నే నిన్ను జూడ (2)
అల్ఫయు నీవే – ఒమేగయు నీవే (2)   ||ప్రభు యేసు||

1. ప్రియుడైన యోహాను పత్మాసులో
ప్రియమైన యేసు నీ స్వరూపము (2)
ప్రియమార జూచి బహు ధన్యుడయ్యె
ప్రియ ప్రభు నిన్ను జూడనిమ్ము (2)    ||ప్రభు యేసు||

2. లెక్కలేని మార్లు పడిపోతిని
దిక్కులేనివాడ నేనైతిని (2)
చక్కజేసి నా నేత్రాలు దెరచి
గ్రక్కున నిన్ను జూడనిమ్ము (2)     ||ప్రభు యేసు||

3. ఎరిగి యెరిగి నే చెడిపోతిని
యేసు నీ గాయము రేపితిని (2)
మోసపోతి నేను దృష్టి దొలగితి
దాసుడ నన్ను జూడనిమ్ము (2)  ||ప్రభు యేసు||

4. ఎందరేసుని వైపు చూచెదరో
పొందెదరు వెల్గు ముఖమున (2)
సందియంబు లేక సంతోషించుచు
ముందుకు పరుగెత్తెదరు (2)  ||ప్రభు యేసు||

5. విశ్వాసకర్తా ఓ యేసు ప్రభూ
కొనసాగించువాడా యేసు ప్రభూ (2)
వినయముతో నేను నీ వైపు జూచుచు
విసుగక పరుగెత్త నేర్పు (2)     ||ప్రభు యేసు||

6. కంటికి కనబడని వెన్నియో
చెవికి వినబడని వెన్నియో (2)
హృదయ గోచరము కాని వెన్నియో
సిద్ధపరచితివ నాకై (2)   ||ప్రభు యేసు||

7. లోక భోగాలపై నా నేత్రాలు
సోకకుండునట్లు కృప జూపుము (2)
నీ మహిమ దివ్య స్వరూపమును
నిండార నను జూడనిమ్ము (2)  ||ప్రభు యేసు||`,keywords:["prabhu yesu na rakshaka","prabhu esu na rakshaka","prabhuyesu","prabu yesu naa rakshakaa","prabhu yeesu na rakshaka","prabhu yeesu naa rakshaka","prabhu yesu naa rakshaka","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ప్రభువా నీ కార్యములు",lyrics:`ప్రభువా నీ కార్యములు ఆశ్చర్యకరమైనవి
దేవా నీదు క్రియలు అద్బతములై యున్నవి (2)
నే పాడెదన్ నేచాటెదన్ నీదు నామం భువిలో
సన్నుతించెదనూ నా యేసయ్యా నా జీవితము నీకేనయ్యా (2)

1. భరియింపరాని దుఃఖములు యిహమందు నను చుట్టిన
నా పాపము నిమిత్తమై నీదు ప్రాణము పెట్టితివి (2)
నా వేదనంతటిని నాట్యముగా మార్చితివి
నీదు సాక్షిగా యిలలో జీవింతునూ..
||సన్నుతించెదనూ||(2)

2. లోకములో నేనుండగా నే నిర్మూలమైన సమయములో
నూతన వాత్సల్యముచే అనుదినము నడిపితివి (2)
నిర్దోషిగ చేయుటకై నీవు దోషివైనావు
నీదు సాక్షిగా యిలలో జీవింతునూ..
||సన్నుతించెదనూ|| (2)

3. ఏ యోగ్యతలేకున్నా - నను ఎన్నుకొంటివి
విలువైన నీ సేవలో - సాధనముగా మలచితివి (2)
నా ధైర్యము నీవేగా - నా రక్షణాధారమా
నీదు సాక్షిగా ఇలలో జీవింతును
||సన్నుతించెదనూ|| (2)`,keywords:["prabhuvaa nee kaaryamulu","prabhuva nee kaaryamulu","prabhuva ni karyamulu","prabhuva ni kaaryamulu","prabhuva nii kaaryamulu","prabhuva nee kariyamulu","sharon sisters","4/4"],video:"",artist:"Sharon Sisters",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ప్రభువా మమ్మును దీవించి",lyrics:`ప్రభువా మమ్మును దీవించి – పంపుము నీకృప నందించి 
అభినందనముల జేకొనుమా – విభవము మహిమొన్నతి కీర్తి యుగయుగములకు నీకగుతన్ 

1. పగతుర ప్రేమించేడు శక్తిన్ – తగబొరుగును జూచెమా రక్తిన్ మిగులందయ
  చేయుము దైవ – జగదీక కుమారా కీర్తి- యుగయుగములకు నీకగుతన్

2. గుడిలో వినిన నీవాక్యము మా -గుండెల బదిలము జేయగను 
గుదిబయటను నా చారములో – నడువగ దోడ్పడుమో కీర్తి యుగయుగములకు నీకగుతన్

3. క్రైస్తవ మైత్రిని సంఘములో – విస్తరణము జెయగనిమ్ము నేస్తవ భావము 
లోకములో – నెరపగ దయగనుమో కీర్తి యుగయుగములకు నీకగుతన్`,keywords:["prabhuva mammunu dheevinchi","prabuva mammunu dhevinchi","prabuva mamunu devinchi","prabhuva mammunu dhevinche","Andhra Christian Hymn","4/4"],video:"",artist:"Molathaati Vidhyanandhamu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"పరదేశులమో ప్రియులారా",lyrics:`పరదేశులమో ప్రియులారా మన
పురమిది గాదెపుడు (నిజముగ) (2)        ||పరదేశుల||

చిత్ర వస్తువులు చెల్లెడి యొకవి
చిత్రమైన సంత (లోకము) (2)        ||పరదేశుల||

సంత గొల్లు క్షమ సడలిన చందం
బంతయు సద్దణగన్ (నిజముగ) (2)        ||పరదేశుల||

స్థిరమని నమ్మకు ధర యెవ్వరికిని
బరలోకమే స్థిరము (నిజముగ) (2)        ||పరదేశుల||

మేడలు మిద్దెలు మేలగు సరకులు
పాడై కనబడవే (నిజముగ) (2)        ||పరదేశుల||

ధర ధాన్యంబులు దరగక మానవు
పని పాటలు పోయె (నిజముగ) (2)        ||పరదేశుల||

ఎన్ని నాళ్ళు మన మిలలో బ్రతికిన
మన్నై పోవునుగా (దేహము) (2)        ||పరదేశుల||

వచ్చితి మిచటికి వట్టి హస్తముల
దెచ్చిన దేదియు లే (దు గదా) (2)        ||పరదేశుల||

ఎట్లు వచ్చితిమి ఈ లోకమునకు
అట్లు వెళ్ళవలయున్ (మింటికి) (2)        ||పరదేశుల||

యేసు నందు విశ్వాసం బుంచిన
వాసిగ నిను జేర్చున్ (బరమున) (2)        ||పరదేశుల||

యేసే మార్గము యేసే సత్యము
యేసే జీవముగా (నిజముగ) (2)        ||పరదేశుల||`,keywords:["paradesulamo priyulara","paradheesulamo priyulaara","paradeesulamo preyulara","paradesulamo preyulara"],video:"",artist:"",genre:["Funeral","General"],timeSignature:"4/4"},{id:l(),title:"పరమ జీవము నాకు నివ్వ",lyrics:`పరమ జీవము నాకు నివ్వ
తిరిగి లేచెను నాతో నుండ
నిరంతరము నన్ను నడిపించును
మరల వచ్చి యేసు కొని పోవును

యేసు చాలును – యేసు చాలును
యే సమయమైన యే స్థితికైన
నా జీవితములో యేసు చాలును

1. సాతాను శోధనలధికమైన
సొమ్మసిల్లక సాగి వెళ్ళెదను
లోకము శరీరము లాగినను
లోబడక నేను వెళ్ళెదను   ||యేసు||

2. పచ్చిక బయలులో పరుండజేయున్
శాంతి జలము చెంత నడిపించును
అనిశము ప్రాణము తృప్తిపరచున్
మరణ లోయలో నన్ను కాపాడును   ||యేసు||

3. నరులెల్లరు నన్ను విడిచినను
శరీరము కుళ్ళి కృశించినను
హరించినన్ నా ఐశ్వర్యము
విరోధివలె నన్ను విడచినను   ||యేసు||`,keywords:["parama jeevamu naku nivva","parama jevamu naku nivva","pramajevamu naku nivva","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"పరమున నిర్ణయమే",lyrics:`పరమున నిర్ణయమే - పరిణయమాయేనిల
ప్రభువా నీ సంకల్పమే - పాడాలి ఒక పాటలా 
వీడని అనుబంధమే - వేసావు నీవు ఇల
ఆనందరాగాలలో - ఉండాలి ఎల్లవేళలా ||పరమున||

1. జతకలిపారు దైవజనులే 
దేవుని సన్నిధి నీడలో 
మొదలాయెను ఆహ జీవితపయనం 
మరువరాదిల చేసిన ప్రమాణం ||పరమున||

2. ఏనాడో రాసాడు ఆ దేవుడే 
ఇల జరిగింది ఈ రోజు కళ్యాణమే 
ప్రేమను కలిగి ఉండాలి నిత్యం 
ప్రభువు మీ తోడై నిలవాలి నిరంతరం ||పరమున||

3. అనుదినము మోకరించాలి 
ప్రభుని సన్నిధిలో జంటగా
గెలవాలి అపవాదిని సహితం
మురిసిపోవాలి మన తండ్రి నిరంతరం ||పరమున||`,keywords:["పరమున నిర్ణయమే","marriage","paramuna nirnayame","paramuna nernayame","paramuna nirnayame"],video:"",artist:"",genre:["Marriage"],timeSignature:"2/4"},{id:l(),title:"పర్వతాలు తొలగిపోయినా - మెట్టలన్ని తత్తరిల్లిన",lyrics:`పర్వతాలు తొలగిపోయినా 
మెట్టలన్ని తత్తరిల్లిన  (2)
ఆయన కృప ఆయన దయ 
నాయెడల మరదేన్నడు (2) ||పర్వతాలు||

1. నన్ను ఎన్నడూ విడువని దేవుడు
ఒక్క క్షణమైనా మరువని నా దేవుడు (2)
నాకోసం ప్రాణమిచ్చిన రక్షకుడు 
నా మనుగడకు చాలిన వాడు (2) ||పర్వతాలు||

2. యెహోవా నిస్సీ జయమునిచ్చు దేవుడు 
యెహోవా షమ్మా తోడై నడిపించును (2) 
నా బ్రతుకుకు నమ్మదగిన దేవుడు
నా ప్రాణమునకు చాలినా వాడు (2) ||పర్వతాలు||

3. యెహోవా రాఫా స్వస్థపరచు దేవుడు  
యెహోవా రూవ కాపరిగా ఉన్నాడు (2)
రాబోవు కాలమంతా కాపాడును
నా ప్రాణమునకు చాలిన దేవుడు (2) ||పర్వతాలు||`,keywords:["parvathaalu tholagipoyina","parvatalu tolagipoyina","parvataalu tolagipooyina","parvathalu tholagipooyina","6/8"],video:"",artist:"Pastor.Solomon Robert (Srilanka), Pastor.Y.Samuel Das & Pastor.Nanda Paul, Pastor.Y .Samuel Das, P.David Abraham Lincoln, ",genre:["General","Worship"],timeSignature:"6/8"},{id:l(),title:"పరలోకమందున తండ్రి నీ నామము",lyrics:`1. పరలోకమందున తండ్రి నీ నామము
పరిశుద్ధ పరచబడుగాక
పరలోకమందున తండ్రి నీ నామము
సన్నుతించబడునుగాక

నీ రాజ్యమే వచ్చునుగాక
నీ చిత్తమే జరిగునుగాక

పరమందు ఉన్నట్లు
భూమిపై నెరవేర్చు

2. మా అనుదిన ఆహారము
మాకు దయచేయుము
శోధనలో తేక దుష్టుని నుండి
మమ్మును తప్పించుము

Bridge:
నీదే రాజ్యము - నీదే శక్తి
నీదే మహిమ నిరంతరము`,keywords:["పరలోకమందున తండ్రి నీ నామము","prayer song","worship","paralokamandhunna thandri","paralookamandhunna thanndri","paralooka mandhunna thandri","paraloka mandhunna tandri"],video:"",artist:"Ps. John David Inja, John Sathwick, ",genre:["General","Worship","Prayer"],timeSignature:"4/4"},{id:l(),title:"పరిశుద్ధదేవా ప్రణుతింతును - స్తోత్రార్హుడా నిన్నేస్తుతియింతును",lyrics:`పరిశుద్ధదేవా ప్రణుతింతును - స్తోత్రార్హుడా నిన్నేస్తుతియింతును (2) 
ఆరాధనా ఆరాధనా ఆరాధనా ఆరాధనా (2)
 
1. నా యెడల నీకున్న తలంపులు - విస్తారమైనవి అతిశ్రేష్టమైనవి (2) 
శాశ్వతమైన కృపచూపినావు - నీ ప్రేమ ఎంతో అతిమధురము (2)     
||ఆరాధనా||

2. గాడాంధకారములో నేనున్నపుడు - నీ బాహువే నన్ను రక్షించెను (2) 
నా కొరకు మరణించి తిరిగిలేచినావు - నీ కొరకెనేను జీవింతును (2)     ||ఆరాధనా||`,keywords:["parishudha dheva","parisudha deva","parishuddha dheeva","parishudha deeva"],video:"",artist:"Philip Gariki, JK Chrsitopher, Lilian Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"పరిశుద్ద పరిశుద్ద పరిశుద్ద ప్రభువా",lyrics:`పరిశుద్ధ పరిశుద్ధ – పరిశుద్ధ ప్రభువా (2)
వరదూతలైనా నిన్ – వర్ణింప గలరా
వరదూతలైనా నిన్ (3) వర్ణింప గలరా

1. పరిశుద్ధ జనకుడ – పరమాత్మ రూపుడ (2)
నిరుపమ బలబుద్ధి – నీతి ప్రభావా
నిరుపమ బలబుద్ధి (3) నీతి ప్రభావా

2. పరిశుద్ధ తనయుడ – నర రూప ధారుడ (2)
నరులను రక్షించు – కరుణా నముద్రా
నరులను రక్షించు (3) కరుణా నముద్రా

3. పరిశుద్ధ మగు నాత్మ – వరము లిడు నాత్మ (2)
పరమానంద ప్రేమ – భక్తుల కిడుమా
పరమానంద ప్రేమ (3) భక్తుల కిడుమా

4. జనక కుమారాత్మ – లను నేక దేవ (2)
ఘన మహిమ చెల్లును – దనర నిత్యముగా
ఘన మహిమ చెల్లును (3) దనర నిత్యముగా`,keywords:["parishudha parishudha","parisudha parisudha","parisuda","parishuddha","parisuddha","parishudda","marriage","holy"],video:"",artist:"Yeshaya Veera Martyn",genre:["Andhra Christian Hymn","Worship","Marriage"],timeSignature:"7/8"},{id:l(),title:"పరిశుద్ధాత్ముడా నీకే వందనం",lyrics:`పరిశుద్ధాత్ముడా నీకే వందనం
పరిశుద్ధాత్ముడా నీకే వందనం
ఆదరణకర్తా సమాధానకర్తా
సర్వసత్యములోనికి నడిపే మా ప్రియ దైవమా

1.మాతో నీవుండిన వేళ - శక్తితో నింపబడుదుము
సర్వలోకానికి మేము సాక్ష్యమిచ్చెదం
శక్తి చేత కానేకాదు బలముతోను కానేకాదు
నీ ఆత్మ ద్వారా జరుగును కార్యములు
నీవల్లే జరుగును మహిమలు

2.దేవుని రాజ్యమనగా నీతియు సమాధానము
పరిశుద్ధ ఆత్మయందలి అనందము
అత్మగలవాడే దేవుని వాడు
ఆత్మ మూలముగ జీవించును
విజ్ఞాపనమును చేయును మన పక్షముగా
సమస్తమును బోధించును`,keywords:["parishudhathmuda neke vandhanam","parishudhatmuda neke vandhanam","parishudhatmuda nike vandhanam","parishuddhathmuda neke vandhanam"],video:"",artist:"Bro Philip Gariki, J K Christopher, Philip Gariki, JK christopher, Joel Sam, Sharon, Lilian & Hana Joyce",genre:["General"],timeSignature:"4/4"},{id:l(),title:"పాడేదం హల్లెలుయ",lyrics:`పాడేదం హల్లెలుయ - క్రొత్త పాట పాడేదం
ప్రభు మంచి వాడు మంచి చేయువాడు
సర్వ శక్తి మంతుడు - ఆయనాశ్చర్యా కరుడే    ||పాడేదం హల్లెలుయ||

1. సర్వ జనమా చప్పట్లు కొట్టి
దేవుని స్తుతియిన్చుడి
స్వర మండలం మేళ తాళములతో 
ప్రభువును స్తుతియిన్చుడి   (2)
ఆయన మనలను సృజియిన్చేనే
ఆయనను ధ్యానిన్తుము  ||పాడేదం హల్లెలుయ||

2. మంచి దేవుని కృప మన యెడల 
నిరంతరము నుండును
ఆయన కృప మహోన్నతం 
అది ఎన్నటికి నిలచును  (2)
దినములు గడియలు మారినాను 
మారని వాడు మన యేసు ||పాడేదం హల్లెలుయ||`,keywords:["paadedhan halleluya","padedham halleluya","padedam haleluya","padedam halleluya","paadedam halleluya","paadedham halleluya","padedhan halleluya","padedhen halleluya","padedhem halleluya","padedhamhaleluya","paadedhamhaleluya","4/4"],video:"",artist:"",genre:["General","Worship","Grace"],timeSignature:"4/4"},{id:l(),title:"ప్రార్ధన నేర్పుమయా పరమ తండ్రి నీ ప్రార్ధనను",lyrics:`ప్రార్ధన నేర్పుమయా - పరమ తండ్రి నీ ప్రార్ధనను 
ప్రార్ధన నేర్పుమయా

1. గెత్సేమనే తోటలో నీ ప్రార్ధన శిష్యులకు నేర్పినావు 
నేర్పిన ఆ పార్ధనే మాకు జీవాధారము (2) ||ప్రార్ధన||

2. సుంకరి ప్రార్ధన విన్న దేవా – నా ప్రార్ధనను వినుమో ప్రభువా 
నేర్పుము ఆ ప్రార్ధన ప్రభువా నేర్పుము ఆ ప్రార్ధన ||ప్రార్ధన||

3. హన్నా ప్రార్ధన విన్న దేవా – నా ప్రార్ధనను వినుమో ప్రభువా
నేర్పుము ఆ ప్రార్ధన దేవా నేర్పుము ఆ ప్రార్ధన ||ప్రార్ధన||`,keywords:["prardhana nerpumaya","pradhana nerpumaya","pradana nerpumaya","prardana nerpumaya"],video:"",artist:"",genre:["Prayer","General"],timeSignature:"4/4"},{id:l(),title:"ప్రార్థన వలనే పయనము – ప్రార్థనే ప్రాకారము",lyrics:`ప్రార్థన వలనే పయనము – ప్రార్థనే ప్రాకారము
ప్రార్థనే ప్రాధాన్యము – ప్రార్థన లేనిదే పరాజయం (2)
ప్రభువా ప్రార్థన నేర్పయ్యా
ప్రార్ధించకుండా నే ఉండలేనయ్యా (2)
నీ పాదాలు తడపకుండా
నా పయనం సాగదయ్యా (2) ||ప్రార్థన||

1. ప్రార్ధనలో నాటునది – పెల్లగించుట అసాధ్యము
ప్రార్ధనలో పోరాడునది – పొందకపోవుట అసాధ్యము (2)
ప్రార్ధనలో ప్రాకులాడినది – పతనమవ్వుట అసాధ్యము (2)
ప్రార్ధనలో పదునైనది – పనిచేయకపోవుట అసాధ్యము (2) ||ప్రభువా||

2. ప్రార్ధనలో కనీళ్లు – కరిగిపోవుట అసాధ్యము
ప్రార్ధనలో మూల్గునది – మరుగైపోవుట అసాధ్యము (2)
ప్రార్ధనలో నలిగితే – నష్టపోవుట అసాధ్యము (2)
ప్రార్ధనలో పెనుగులాడితే – పడిపోవుట అసాధ్యము (2) ||ప్రభువా||`,keywords:["prardhana valane payanamu","prardhana","pradhana","pradhana valane payanamu","pradana valane payanamu","prardana valane payanamu","prardhana valanepayanamu","prayer","prayer song","4/4"],video:"",artist:"Chinni Savarapu",genre:["Prayer","General"],timeSignature:"4/4"},{id:l(),title:"ప్రార్థన వినెడి పావనుడా",lyrics:`ప్రార్థన వినెడి పావనుడా
ప్రార్థన మాకు నేర్పుమయా   ||ప్రార్థన||

1. శ్రేష్టమైన భావము గూర్చి
శిష్య బృందముకు నేర్పితివి
పరముడ నిన్ను ప్రనుతించెదము
పరలోక ప్రార్థన నేర్పుమయా   ||ప్రార్థన||

2. పరమ దేవుడవని తెలిసి
కరము లెత్తి జంటగా మోడ్చి
శిరమునువంచి సరిగను వేడిన
సుంకరి ప్రార్థన నేర్పుమయా   ||ప్రార్థన||

3. దినదినంబు చేసిన సేవ
దైవ చిత్తముకు సరిపోవ
దీనుడవయ్యి దిటముగా కొండను
చేసిన ప్రార్థన నేర్పుమయా   ||ప్రార్థన||

4. శత్రుమూక నిను చుట్టుకొని
సిలువపైన నిను జంపగను
శాంతముతో నీ శత్రుల బ్రోవగ
సలిపిన ప్రార్థన నేర్పుమయా   ||ప్రార్థన||`,keywords:["prardhana vinedi paavanuda","prardhana vinedi pavanuda","pradhana vinedi pavanuda","prardhana vinede pavanuda","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Prayer"],timeSignature:"4/4"},{id:l(),title:"పితృ పుత్ర",lyrics:`పితృ పుత్ర శుద్ధాత్మలై
మేళ్లన్ని యిచ్చు దేవుని
స్తుతించు సర్వ లోకమా
స్తుతించు దివ్య సైన్యమా||`,keywords:["పితృ పుత్ర","pitru putra","pithru puthra","pethru puthra","petro putra","peetru putra","pethru poothra","pithro poothra","pithro pothra","pethru puthra","peethro putra","doxology","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Worship"],timeSignature:"4/4"},{id:l(),title:"ప్రియమైన యేసయ్యా ప్రేమకే రూపమా",lyrics:`ప్రియమైన యేసయ్యా ప్రేమకే రూపమా
ప్రియమార నిన్ను చూడనీ
ప్రియమైన యేసయ్యా ప్రేమకే రూపమా
ప్రియమైన నీతో ఉండనీ
నా ప్రియుడా యేసయ్యా ఆశతో ఉన్నానయ్యా (2)
ఆనందము సంతోషము నీవేనయ్యా
ఆశ్చర్యము నీ ప్రేమయే నా యెడ (2)        ||ప్రియమైన||

1. జుంటి తేనె ధారల కన్నా మధురమైన నీ ప్రేమ
అతి సుందరమైన నీ రూపును మరువలేను దేవా (2)       ||నా ప్రియుడా||

2. ఎంతగానో వేచియుంటిని ఎవరు చూపని ప్రేమకై
ఎదుట నీవే హృదిలో నీవే నా మనసులోన నీవే (2)       ||నా ప్రియుడా||

3. ఏదో తెలియని వేదన ఎదలో నిండెను నా ప్రియా
పదములు చాలని ప్రేమకై పరితపించె హృదయం (2)       ||నా ప్రియుడా||`,keywords:["priyamaina yesayya","preyamaina yesayya","priyamina yesayya","preyamina yesayya","priyamaina yesaya","4/4"],video:"",artist:"Jonah Samuel & David Vijayaraju",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ప్రియుడా నీ ప్రేమ – పాదముల్  చేరితి",lyrics:`ప్రియుడా నీ ప్రేమ – పాదముల్  చేరితి - నెమ్మది నెమ్మదియే

ఆసక్తితో నిన్ను పాడి స్తుతించెద ఆనందం - ఆనందమే 

ఆశ్చర్యమే  ఆశ్చర్యమే – ఆరాధనా ఆరాధనా (2)

1. నీ శక్తి కార్యముల్ తలంచి తలంచి - ఉల్లము పొంగెనయ్యా 
మంచివాడా మంచి చేయువాడా - స్తోత్రము స్తోత్రమయా 
మంచివాడా మహోన్నతుడా - ఆరాధనా ఆరాధనా (2)

2. బలియైన గొఱ్ఱెగా - పాపములన్నిటిని మోసి తీర్చితివే 
పరిశుద్ద రక్తము నా కొరకేనయ్యా – నాకెంతో భాగ్యమయ్యా
పరిశుద్దుడా - పరమాత్ముడా - ఆరాధనా ఆరాధనా (2)

3. ఎన్నెన్నో ఇక్కట్లు బ్రతుకులో వచ్చినా - నిన్ను నేవిడవనయ్యా
రక్తము చిందిన సాక్షిగా యుందున్ - నిశ్చయం  నిశ్చయమే
రక్షకుడా - యేసునాధా - ఆరాధనా ఆరాధనా (2)`,keywords:["priyuda ni prema","preyuda ni prema","priyuda nee prema","priyuda ne prema","preeyuda nee prema","preyuda nee prema","priyudani prema","priyuda niprema","Worship","3/4"],video:"",artist:"",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"ప్రీతిగల మన యేసు/What a Friend we have in Jesus",lyrics:`1. ప్రీతిగల మన యేసు – డెంతో గొప్ప మిత్రుడు
మితిలేని దయచేత – హత్తుచు ప్రేమించును
క్రీస్తునొద్ద మన భార – మంత నప్పగించినన్
శక్తిగల యేసు చేత – మోత లెల్ల వీడును

2. నీతిగల మన యేసు – ధృతిగల మిత్రుడు
మృతి బొంది కృపతో వి – శ్రాంతి కలిగించెను
భీతి నొందు బాపులైన – జింతా క్రాంతులైనను
క్రీస్తు యొక్క దీప్తి చేత – క్రొత్త గతి జూతురు

3. దయగల మన యేసు – ప్రియమైన మిత్రుడు
మాయలోకమందు నిజా – శ్రయుడై కాపాడును
భయ దుఃఖ శ్రమ లాది – మోయరాని బాధలన్
జయ మొప్ప నేర్పి యేసు – స్థాయి వృద్ది చేయును

4. ధారుణిలో యేసుగాక – వేరు గొప్ప మిత్రుడా?
పరలోకమందు యేసే – వీరుడౌ రక్షకుడు
నారకుల! గావ వేగా – గ్రూర హింస బొందెను
కరుణించి నిచ్చి ప్రతి – ప్రార్థన నాలించును`,keywords:["preethi gala mana yesu","prethi gala mana yesu","prethi gala mana yeesu","prithi gala mana yesu","prithe gala mana yesu","prethe gala","prithigala mana","prethigala mana","preethigala","what a friend we have in jesus","andhra christian songs","andhra christian song","4/4"],video:"https://www.youtube.com/embed/gkTavnjWIaY?si=pZk3-tZ8aTaqFKlB",artist:"Joseph M. Screeven",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"పుట్టె యేసుడు నేడు",lyrics:`పుట్టె యేసుడు నేడు – మనకు – పుణ్య మార్గము జూపను
పట్టి యయ్యె బరమ గురుఁడు – ప్రాయశ్చిత్తుడు శ్రీ యేసు  ||పుట్టె||

1. ధర బిశాచిని వేడిన – దు –ర్నరుల బ్రోచుటకై యా
పరమవాసి పాపహరుఁడు – వరభక్త జన పోషుడు (2) ||పుట్టె||

2. యూద దేశములోన – బెత్లె -హేమను గ్రామమున
నాదరింప నుద్భవించెను – అధములమైన మనలను (2)   ||పుట్టె||

3. తూర్పు దేశపు జ్ఞానులు – పూర్వ – దిక్కు చుక్కను గాంచి
సర్వోన్నతుని మరియ తనయుని – మ్రొక్కిరి అర్పణంబులిచ్చిరి (2)   ||పుట్టె||`,keywords:["puttenesudu nedu","puttenesudu needu","putenesudu nedu","putte yesudu nedu","putte yeesudu needu","putte yesudunedu","6/8","andhra christian hymn"],video:"",artist:"Feliks Andrew",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"6/8"},{id:l(),title:"పూర్ణ హృదయముతో పూర్ణ ఆత్మతో",lyrics:`పూర్ణ హృదయముతో పూర్ణ ఆత్మతో 
నా పూర్ణ మనస్సుతో నిన్ను ప్రేమింతును
మంచి దేవుడవు ఎంతో మంచి ప్రభుడవు
నా మంచి ప్రియుడవు యేసు నిను ప్రేమింతును

1. నేనంటు లేనపుడే యేసు
నను నీవు యెరిగితివని తెలుసు
నిను నేను కోరక మునుపే
నను కోరి భువిపై జన్మించి 
నా పాపము దూరము చేయుటకు
నా బలము చాలదు ఆని యెరిగి
నీ మదిలో నా పేరు తలచి
ఆనాడే నాకై మరణించి
రక్షణనిచ్చితివి - ఉచితముగా కృపమూలముగా
నీ మేలును ఏల మరతును యేసు నిన్ను ప్రేమింతును

2. నాపై నీకంత ప్రేమ
ఎందుకనో తెలిపెదవా దేవా
ఒక రోత హృదయుని కోసం 
అన్ని ఘోర శ్రమలను పొందితివా
లోకము ఎరుగని వింత ప్రేమ
సిలువలో నిను చూడగా కనిపించే
నీ దేహముపైన గాయములు 
ఆ ప్రేమ లోతును కనపరిచే
నా పాపమంతటిని - కడిగితివా నీ రక్తముతో
నన్నంతగా ప్రేమించితివి - నేను నిన్ను ప్రేమింతును`,keywords:["poorna hrudhayamutho","purna hrudhayamutho","porna hrudhayamutho","poorna hrudayamutho","purna hrudhayamuto","purnahrudayamuto"],video:"",artist:"Joel Kodali, Abhishek Jonathan, John Nissy & Saritha Imadabathuni ",genre:["Worship","General"],timeSignature:"3/4"},{id:l(),title:"ప్రేమ కలిగి సత్యము పలుకుచు - క్రీస్తువలె సాగుదమా",lyrics:`ప్రేమ కలిగి సత్యము పలుకుచు
క్రీస్తువలె సాగుదమా
అందరితోను ప్రతీ విషయములో
క్రీస్తువలె మెలగుదమా (2)  ||ప్రేమ కలిగి||

1. క్రీస్తే వెలుగు - క్రీస్తే ప్రేమ - క్రీస్తే జగతికి మూలం
క్రీస్తే మార్గం - సత్యం - జీవం - క్రీస్తే మనకాధారం (2)
క్రీస్తు యేసుతో నడచుచూ
క్రీస్తు ప్రేమను చాటెదమా (2)
క్రీస్తు ప్రేమను చాటెదమా

2. శిరస్సై క్రీస్తు - సంఘము నడుపా - సంఘ క్షేమం సాధ్యం
సంగమునందు అవయవములై - సహకరించుచు సాగెదం (2)
సార్వత్రికా సంగముగా
సత్య సువార్తను చాటెదమా (2)
సత్య సువార్తను చాటెదమా ||ప్రేమ కలిగి||`,keywords:["prema kaligi satyamu palukuchu"],video:"",artist:"Rev.N.J.Simon, JK Christopher & Ps.M.ParamJyothi, Philip Gariki, Sharon, Lillian & Hana",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ప్రేమతో నను తాకిన",lyrics:`ప్రేమతో నను తాకిన - మెల్లగా ఎద మీటినా - వరమే నీవు
యేసు
నీడలా వెంటాడినా - విడువక నను కాపాడినా - నీవే నాలో
స్వాంతనా (2)     ||ప్రేమతో||

1. ఓడిన తావున - తిరిగి లేపి నిలిపిన
ఓడిన తావున - తిరిగి లేపి నిలిపిన
వాక్కునే పంపినా- బలముతో నింపినా - నీవే నాకు ప్రేరణ
||ప్రేమతో||

2. విసిగిన ప్రాణము - శిధిలమగుట ఖాయమూ
విసిగిన ప్రాణము - శిధిలమగుట ఖాయమూ
క్షేమమే పంచినా - వెలుగుగా ఉంచినా - నీవే నాలో నిరీక్షణ           
||ప్రేమతో||`,keywords:["preematho nannu thakina","prematho nanu thakina","preematho nannu thaakina","preemato nannu taakina","preemato nannu thaakina","prematho nanu thaakina","prematho nannu thakina","prematho nannu thaakina","stevenson","pranam Kamalkhar"],video:"",artist:"Dr. A.R. Stevenson, Pranam Kamalkhar, & K.S. Chithra",genre:["General","Love"],timeSignature:"4/4"},{id:l(),title:"ప్రేమపంచే గుణమెనీదని",lyrics:`ప్రేమపంచే గుణమెనీదని ప్రాణ మిచ్చిన త్యాగమె నీదని
తిరిగి లేచిన గనతె నీదని చాటెదా (యేసు) (2)
త్వరలో వచ్చువాడవు నీవని తీర్పు తిర్చువాడవు నీవని
లోక మంతా నీ సువార్తను ప్రకటించెదా (2)

1. నీ ప్రేమ అమరం అధ్బుతం
నీ ప్రేమ నాకు చాలు నిత్యం (2)
జయము జయము హొసన్న అనుచు నిన్ను గూర్చి నే పాడెద
యేసు ప్రేమకు సాటి లేదని వివరించెదా (2)

2. నీ రక్తమిచ్చు మము రక్షించి
పరిశుద్ధ జనముగా ఏర్పరచితివి (2)
ఎత్తబడెదము రాకడలో జీవింతుము కలకాలం
సర్వ జనులు విని నమ్మాలని పార్ధించెదా (2)`,keywords:["prema panche ghuname","love","preema panche guname","prema panchi guname","preyma panche guname","4/4","prama pancha guname"],video:"",artist:"Philip",genre:["Love","General"],timeSignature:"4/4"},{id:l(),title:"ప్రేమ యేసుని ప్రేమ",lyrics:`ప్రేమ యేసుని ప్రేమ అది ఎవ్వరు కొలువలేనిది
నిజము దీనిని నమ్ము ఇది భువి అందించలేనిది

ఎన్నడెన్నడు మారనిది నా యేసుని దివ్య ప్రేమ
ఎన్నడెన్నడు వీడనిది నా యేసుని నిత్య ప్రేమ    ||ప్రేమ||

1. తల్లిదండ్రుల ప్రేమ నీడ వలె గతియించును
కన్నబిడ్డల ప్రేమ కలలా కరిగిపోవును       ||ఎన్నడెన్నడు||

2. భార్యా భర్తల మధ్య వికసించిన ప్రేమ పుష్పము
వాడిపోయి రాలును త్వరలో మోడులా మిగిలిపోవును   ||ఎన్నడెన్నడు||

3. బంధుమిత్రులయందు వెలుగుచున్న ప్రేమ దీపము
నూనె ఉన్నంత కాలమే వెలుగునిచ్చి ఆరిపోవును     ||ఎన్నడెన్నడు||

4. ధరలోన ప్రేమలన్నియు స్థిరము కావు తరిగిపోవును
క్రీస్తు యేసు కల్వరి ప్రేమా కడవరకు ఆదరించును  ||ఎన్నడెన్నడు||`,keywords:["prema yesuni prema","love","preema yesunu prema","preema yeesuni preema","prema yeesuni preema","premayesuni prema","prema yesuniprema","prama yesuni prema","good friday","goodfriday","lent","preyma yeesuni prema","6/8"],video:"",artist:"",genre:["Love","Lent"],timeSignature:"6/8"},{id:l(),title:"ప్రేమించు దేవుడు రక్షించు దేవుడు",lyrics:`ప్రేమించు దేవుడు రక్షించు దేవుడు
పాలించు దేవుడు – యేసు దేవుడు
పాటలు పాడి ఆనందించెదం
ఆహా ఎంతో ఆనందమే (2)  ||ప్రేమించు||

1. తల్లిదండ్రుల కన్నా తాత అయిన దేవుడు
ప్రతి అవసరమును తీర్చు దేవుడు (2)
హల్లెలూయా ఆనందమే
సంతోషమే సమాధానమే (2)  ||ప్రేమించు||

2. నన్ను స్వస్థపరచి శక్తినిచ్చు దేవుడు
తోడు నీడగా నన్ను కాపాడును (2)
హల్లెలూయా ఆనందమే
సంతోషమే సమాధానమే (2)  ||ప్రేమించు||

3. నిన్న నేడు ఏకరీతిగా ఉన్నాడు
సర్వ కాలమందు జయమిచ్చును (2)
హల్లెలూయా ఆనందమే
సంతోషమే సమాధానమే (2)  ||ప్రేమించు||

4. ఎల్లవేళలా నన్ను నడిపించే దేవుడు
అంతము వరకు చేయి విడువడు (2)
హల్లెలూయా ఆనందమే
సంతోషమే సమాధానమే (2)  ||ప్రేమించు||`,keywords:["preminchu dhevudu","preminchu devudu","premimchu dhevudu","preminchu devuduu","praminchu devudu","praminchu dhevudu","premincho dhevudu","preminchu dhevudu rakshinchu dhevudu","preeminchu dhevudu rakshinchu dheevudu","6/8"],video:"",artist:"",genre:["General","Love"],timeSignature:"6/8"},{id:l(),title:"ప్రేమించెదన్ అధికముగా",lyrics:`ప్రేమించెదన్ అధికముగా
ఆరాధింతున్ ఆసక్తితో (2)

నిన్ను పూర్ణ మనసుతో ఆరాధింతున్
పూర్ణ బలముతో ప్రేమించెదన్
ఆరాధన ఆరాధనా

ఆ... ఆ... ఆరాధన ఆరాధనా (2)

1. ఎబినేజరే ఎబినేజరే
ఇంత వరకు ఆదుకొన్నావే (2)
ఇంత వరకు ఆదుకొన్నావే || నిన్ను పూర్ణ ||

2. ఎల్రోహి ఎల్రోహి
నన్ను చూచావే వందనమయ్యా (2)
నన్ను చూచావే వందనమయ్యా || నిన్ను పూర్ణ ||

3. యెహోవా రాఫా యెహోవా రాఫా
స్వస్థపరిచావే వందనమయ్యా (2)
స్వస్థపరిచావే వందనమయ్యా || నిన్ను పూర్ణ ||`,keywords:["preminchedhan","adhikamuga","preminchedham","preyminchedhan","praminchedhan","preminchedan","premimchedhan","preminchedan","2/4"],video:"",artist:"Barchmans",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"పోదాము పోదాము పయనమోదాము",lyrics:`పోదాము పోదాము పయనమోదాము
సువార్త చెప్ప పోదాము (2)
అక్కడ పోదాం ఇక్కడ పోదాం ఎక్కడ పోదాము?
సువార్త చాటింప సాగిపోదాము (2)

1. ఆ జాతి ఈ జాతి ఏ జాతండి?
పరిశుద్దతే మన సొంత జాతండి (2)

2. ఆ ఊరు ఈ ఊరు ఏ ఊరండి?
కానాను దేశమే మన ఊరండి (2)

3. ఆ రక్తం ఈ రక్తం ఏ రక్తమండి?
క్రీస్తు రక్తమే పాపం బాపునండి (2)`,keywords:["podhamu podhamu","poodhamu poodhamu payanamavdhamu","podamu podamu","podham podhamu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"ప్రేమించెద యేసు రాజా",lyrics:`ప్రేమించెద యేసు రాజా నిన్నే ప్రేమించెద (2)
ప్రేమించెద ప్రేమించెద ప్రేమించెదా ఆ ఆ ఆ
ప్రేమించెద ప్రేమించెద ప్రాణమున్నంతవరకు
నే మట్టిలో చేరే వరకు
నా ప్రాణమున్నంతవరకు
నే మహిమలో చేరే వరకు

1. ఆరాధించెద యేసు రాజా
నిన్నే ఆరాధించెద (2)
ఆరాధించెద ఆరాధించెద ఆరాధించెదా ఆ ఆ ఆ
ఆరాధించెద ఆరాధించెద ప్రాణమున్నంతవరకు
నే మట్టిలో చేరే వరకు
నా ప్రాణమున్నంతవరకు
నే మహిమలో చేరే వరకు

2. ప్రార్ధించెద యేసు రాజా
నిన్నే ప్రార్ధించెద (2)
ప్రార్ధించెద ప్రార్ధించెద ప్రార్ధించెదా ఆ ఆ ఆ
ప్రార్ధించెద ప్రార్ధించెద ప్రాణమున్నంతవరకు
నే మట్టిలో చేరే వరకు
నా ప్రాణమున్నంతవరకు
నే మహిమలో చేరే వరకు

3. సేవించెద యేసు రాజా
నిన్నే సేవించెద (2)
సేవించెద సేవించెద సేవించెదా ఆ ఆ ఆ
సేవించెద సేవించెద ప్రాణమున్నంతవరకు
నే మట్టిలో చేరే వరకు
నా ప్రాణమున్నంతవరకు
నే మహిమలో చేరే వరకు

4. జీవించెద యేసు రాజా
నీకై జీవించెద (2)
జీవించెద జీవించెద జీవించెదా ఆ ఆ ఆ
జీవించెద జీవించెద ప్రాణమున్నంతవరకు
నే మట్టిలో చేరే వరకు
నా ప్రాణమున్నంతవరకు
నే మహిమలో చేరే వరకు`,keywords:["preminchedha yesu raja","preminchedha yeesu raja","preminchedha yeesu raaja","premenchedha yeesu raaja","preeminchedha yesu raaja","preeminchedha yeesu raaja","preminchedha","premincheda yesu","preemincheda","preeminchedha yesu","premimcheda yesu raja","premincheda yesu raja","prema","love","preminchedaa yeesu raja","ప్రేమించెద యేసు రాజా","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"}],ఫ:[{id:l(),title:"ఫలములనాశించిన పరలోక తండ్రి",lyrics:`ఫలములనాశించిన పరలోక తండ్రి
తేరి చూచుచున్నాడు నీ వైపు (2)
ప్రేమతో నిను పెంచిన ప్రియ తోటమాలి
పరీక్షించుచున్నాడు నీ కాపు (2)
ఫలియించకుండుట నీకు న్యాయమా
యజమాని సహనముతో చెలగాటమా (2)

1. ఐగుప్తు నుండి పెరికి తెచ్చినాడు
సంఘ ద్రాక్ష తోటలో నిన్ను నాటినాడు (2)
చుట్టు త్రవ్వి ఎరువు వేసి నీరు పోసినాడు (2)
తన స్వాస్థ్యముగా నిను ప్రత్యేకపరచినాడు (2) ||ఫలియించకుండుట||

2. వెదకినప్పుడు నీ యొద్ద ఫలము లేక యుంటే
ఆకులతో నిను చూసి తండ్రి సంతసించునా (2)
ఇవ్వబడిన సమయములో వర్ధిల్లకుంటే (2)
మోడులాంటి నిన్ను ఇంక నరికివేయకుండునా (2) ||ఫలియించకుండుట||`,keywords:["falamula nasinchina paraloka thandri","falamula naasinchina paralooka thandri","falamola nasinchina","stevenson","phalamulanaasinchina paraloka","phala mula nasinchina"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"6/8"}],బ:[{id:l(),title:"బ్రతికెద నీ కోసమే - నా ఊపిరి నీ ధ్యానమే",lyrics:`బ్రతికెద నీ కోసమే
నా ఊపిరి నీ ధ్యానమే
నా జీవితమే నీకంకితమై – (2)
నీదు సేవ జేతు పుణ్యమాని భావింతు
నేను చివర శ్వాస వరకు      ||బ్రతికెద||

1. శ్రమయును బాధయు నాకు కలిగినా
వైరులు ఎల్లరు నన్ను చుట్టినా
నీదు న్యాయ శాసనమునే పాటింతు (2)
నాలోని బలము నన్ను విడిచినా
నా కన్ను దృష్టి తప్పిపోయినా (2)
నిన్ను చేరి నీదు శక్తి పొంద
నీదు ఆత్మ తోడ లోక రక్షకా         ||బ్రతికెద||

2. వాక్యమే మ్రోగుట విశ్వాసము వెల్లడి చేయుట
ఇహమందున యోగ్యమైన కార్యముగా నే తలచి (2)
నీదు రుధిరంబు చేత నేను
కడగబడిన నీదు సొత్తు కాదా (2)
నిన్ను జూప లోకంబులోన
నీదు వెలుగు దీపముగా నాథా        ||బ్రతికెద||`,keywords:["brathikedha nikosame","brathikeda nikosame","brathikedha nikosame","bathikedha nikosame","brathikeda nekosame"],video:"",artist:"Raj Prakash Paul",genre:["General"],timeSignature:"4/4"},{id:l(),title:"బలవంతుడా ధనవంతుడా గుణవంతుడా నా యేసయ్యా",lyrics:`బలవంతుడా ధనవంతుడా 
గుణవంతుడా నా యేసయ్యా 
నీవంటివాడు లేనేలేడు నీ సాటి ఎవడు రానేరాడు 
నాకున్న ఆధారం - నాలోని ఆనందం నీవే

యేసయ్యా యేసయ్యా యేసయ్యా నా యేసయ్యా

1. ఏదియు నీవు లేకుండా కలుగలేదుకదా 
దీవెనలు దయచేయగల మహిమ నీదికదా 
నాకున్న ఉజ్జీవం - నాలోని ఉత్సాహం నీవే

2. లోపమన్నది నీయందు కానరాదుకదా 
పాపములు క్షమియించగల మనసు నీదికదా 
నాకున్న వైభోగం - నాలోని విశ్వాసం నీవే

3. శూరుడా నీముందెవడు నిలువలేడుకదా 
కార్యములు నెరవేర్చగల ఘనత నీదికదా 
నాకున్న సౌందర్యం - నాలోని సామర్ధ్యం నీవే`,keywords:["బలవంతుడా ధనవంతుడా గుణవంతుడా నా యేసయ్యా","balavanthuda dhanavanthuda","balavantuda danavantuda","balavanthudaa dhanavanthuda","stevenson"],video:"",artist:"Dr. A.R.Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"బాలుడు కాదమ్మో బలవంతుడు యేసు",lyrics:`బాలుడు కాదమ్మో బలవంతుడు యేసు
పసివాడు కాదమ్మో పరమాత్ముడు క్రీస్తు (2)
పరమును విడచి పాకలో పుట్టిన
పాపుల రక్షకుడు మన యేనయ్య (2)     ||బాలుడు||

1.కన్య మరియ గర్భమందు బెళ్లహేము పురమునందు
ఆ పశుశాలలోన పుట్టినాడమ్మా
ఆ వార్త తెలియగానే గొర్రెలను విడది
పరుగు పరుగున పాకను చేరామే (2)
మనసారా మైొక్కినాము మది నిండా కొలచినాము (2)
మా మంచి కాపరి సంతోషించామే
సందడి సందడి సందడి సందడి సందడి చేసామె (4)    ||బాలుడు||

2.చుక్కను చూసి వచ్చినాము పాకలో మేము చేరినాము
పరిశుద్ధుని చూసి పరవశించామే
రాజుల రాజని యూదుల రాజని
ఇతడే మా రాజన మొక్క నామమ్మా (2)
బంగారము సాంబ్రాణి బోళం కానుకగా ఇచ్చినాము (2)
ఇమ్మానుయేలను పూజించామమ్మో
సందడి సందడి సందడి సందడి సందడి చేసామే (4)    ||బాలుడు||`,keywords:["sandhadi2","baludu kadhamma","baaludu kaadhamma balavanthudu","baludu kadamma","baaludu kadamma","baludu kaadhamma","christmas","4/4"],video:"",artist:"Dr Shalem Raj",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"బెత్లెహేములో సందడి",lyrics:`బెత్లెహేములో సందడి
పశుల పాకలో సందడి
శ్రీ యేసు పుట్టాడని
మహారాజు పుట్టాడని (2) ||బెత్లెహేములో||

1. ఆకాశములో సందడి
చుక్కలలో సందడి (2)
వెలుగులతో సందడి
మిల మిల మెరిసే సందడి (2) ||బెత్లెహేములో||

2. దూతల పాటలతో సందడి
సమాధాన వార్తతో సందడి (2)
గొల్లల పరుగులతో సందడి
క్రిస్మస్ పాటలతో సందడి (2) ||బెత్లెహేములో||

3. దావీదు పురములో సందడి
రక్షకుని వార్తతో సందడి (2)
జ్ఞానుల రాకతో సందడి
లోకమంతా సందడి (2) ||బెత్లెహేములో||`,keywords:["bethlehemu lo sandhadi","bethlahemu lo sandhadi","bethlaheemu","betlahemulo","bethlehemu","betlehem","christmas","bethlehemulo sandhadi","bethlehemulo sandadi","betlehemu lo sandadi","6/8"],video:"",artist:"Bro  Joshua Gariki",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"బెత్లహేములోనంటా – సందడి",lyrics:`బెత్లహేములోనంటా – సందడి
పశువుల పాకలో – సందడి
దూతలు వచ్చెనంటా – సందడి
పాటలు పాడేనంటా – సందడి (2)

రారాజు పుట్టెనని – సందడి
మా రాజు పుట్టెనని – సందడి (2)

చేసారంట సందడే సందడి
చేయబోదాము సందడే సందడి (2)

Happy Happy...
Happy Happy Christmas Christmas
Wish you a Happy Christmas
Merry Merry Christmas Christmas
Wish you a Merry Christmas

1. అర్ధ రాత్రి వేళలో – సందడి
దూతలు వచ్చెనంటా – సందడి
రక్షకుడు పుట్టెనని – సందడి
వార్తను తెలిపేనటా – సందడి (2)

చేసారంట సందడే సందడి
చెయ్యబోదాము సందడే సందడి
చేసారంట సందడే సందడి
చేయబోదాము సందడే సందడే సందడే సందడే సందడే

Happy Happy...
Happy Happy Christmas Christmas
Wish you a Happy Christmas
Merry Merry Christmas Christmas
Wish you a Merry Christmas

2. గొల్లలు వచ్చిరంటా – సందడి
మనసారా మ్రొక్కిరంటా – సందడి
అందాల బాలుడంటా – సందడి
అందరి దేవుడని – సందడి (2)

రారాజు పుట్టెనని – సందడి
మా రాజు పుట్టెనని – సందడి (2)

చేసారంట సందడే సందడి
చేయబోదాము సందడే సందడి (2)

Happy Happy...
Happy Happy Christmas Christmas
Wish you a Happy Christmas
Merry Merry Christmas Christmas
Wish you a Merry Christmas

3. తారను చూచుకుంటూ – సందడి
జ్ఞానులు వచ్చారంటా – సందడి
పెట్టెలు తెచ్చారంటా – సందడి
కానుకలిచ్చారంటా – సందడి (2)

రారాజు పుట్టెనని – సందడి
మా రాజు పుట్టెనని – సందడి (2)

చేసారంట సందడే సందడి
చేయబోదాము సందడే సందడి (2)

Happy Happy...
Happy Happy Christmas Christmas
Wish you a Happy Christmas
Merry Merry Christmas Christmas
Wish you a Merry Christmas (2)`,keywords:["bethlehemu lonanta sandhadi","bethlahemu lonanta sandhadi","bethlaheemulo nanta sandhadi","betlahemulo nanta","bethlehemulonanta","betlehemlo nanta","christmas","bethlehemulonanta sandhadi","bethlehemulonanta sandadi","betlehemu lonanta sandadi","sandhadi1","sandhadi","6/8"],video:"",artist:"Dr Shalem Raj",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"బంగారం అడుగలేదు",lyrics:`బంగారం అడుగలేదు వజ్రాల్ని అడుగలేదు 
హృదయాన్ని అడిగాడయ్యా 
ఆస్తులను అడుగలేదు అంతస్తులు అడుగలేదు 
హృదయాన్ని అడిగాడయ్యా (2) 
మనుషులను చేసాడయ్యా 
ఈ లోకాన్ని ఇచ్చాడయ్యా (2) 
నా యేసయ్యా... నా యేసయ్యా... 
నా యేసయ్యా... నా యేసయ్యా ||బంగారం|| 

1. పాపాన్ని తొలగించి శాపాన్ని విరిచేయ 
భూలోకం వచ్చాడయ్యా 
మానవుని రక్షించి పరలోకమున చేర్చ 
సిలువను మోసాడయ్యా (2) 
కన్నీటిని తుడిచాడయ్యా 
సంతోషం పంచాడయ్యా (2) ||నా యేసయ్యా|| 

2. రక్షణను అందించి రక్తాన్ని చిందించి 
మోక్షాన్ని ఇచ్చాడయ్యా 
ధనవంతులనుగా మనలను చేయ 
దారిద్ర్యమొందాడయ్యా (2) 
కన్నీటిని తుడిచాడయ్యా 
సంతోషం పంచాడయ్యా (2) ||నా యేసయ్యా||`,keywords:["bangaram adagaledhu","bangaram","bangaaram","bangaaram adagaledu","bangaaram adagaledhu","bhangaaram adagaledhu","bhangaram adagaledu","vajralu adagaledhu","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"బంధీనైపోయా",lyrics:`యేసయ్యా నిన్నే - సేవింతును 
ఆరాధింతును - స్తుతింతును ||2|| 

బంధీనైపోయా - నీలో మునిగితేలాకా 
నా వల్ల కాదయా - నిన్ను వీడియుండుట (2) 

యేసయ్యా (4) 
యేసయ్యా (4) 

1. ననువీడనీ నీ ప్రేమను - యెడబాయని నీ కరుణను 
వెన్నంటియుండే కృపలను - వర్ణించగలనా (2) 

బంధీనైపోయా - నీలో మునిగితేలాకా 
నా వల్ల కాదయా - నిను వీడియుండుట (2) 

యేసయ్యా (4) 
యేసయ్యా (4) 

2. నింపావు నీ అగ్నితో - నింపావు నీ శక్తితో 
నింపావు జీవజలముతో - నిన్నే మహిమపరతును (2) 

బంధీనైపోయా - నీలో మునిగితేలాకా 
నా వల్ల కాదయా - నిను వీడియుండుట (2) 

యేసయ్యా (4) 
యేసయ్యా (4) 

నీలో మునిగి తేలక - నే విడుదల పొందా 
నీలో మునిగి తేలక - నే ఉప్పొంగిపోయా 
నీలో మునిగి తేలక - నే జీవమునే పొందా 
నీలో మునిగి తేలక - నే బంధీనైపోయా (2) 

యేసయ్యా (4) 
యేసయ్యా (4)`,keywords:["bandhinaipoya","bandhi nai poya","bandhi naipoya","yesayya ninne sevinthunu","bandhiinaipoya","bandinaopoya","bandinaipoyaa","yesayya nenne sevintunu","yesayya ninne sevintunu","yeesayya ninne","eesayya ninne sevinthunu","eesayya nenne seevinthunu","eesayya ninne seevinthunu","4/4"],video:"",artist:"John Vittney",genre:["Worship"],timeSignature:"4/4"}],భ:[{id:l(),title:"భజన చేయుచు భక్తపాలక",lyrics:`భజన చేయుచు భక్తపాలక
ప్రస్తుతింతు నీ నామమును (2)
వృజినములపై జయము నిచ్చిన (2)
విజయుడా నిను వేడుకొందు  ||భజన||

1. దివ్య పదవిని విడిచి నీవు
దీనుడవై పుట్టినావు (2)
భవ్యమైన బోధలెన్నో (2)
బాగుగా ధర నేర్పినావు   ||భజన||

2. నరుల గావను పరమునుండి
ధరకు నీవు వచ్చినావు (2)
పరుడ నైన నా కొరకు నీ (2)
ప్రాణము నర్పించినావు    ||భజన||

3. చెడినవాడ నైన నన్ను
జేరదీసి ప్రోచినావు (2)
పడిన నాడు గోతి నుండి (2)
పైకి లేవనెత్తి నావు   ||భజన||

4. ఎంత ప్రేమ ఎంత దయ
ఎంత కృప యేసయ్య నీకు (2)
ఇంతయని వర్ణింప నిలలో (2)
నెవనికిని సాధ్యంబు కాదు   ||భజన||`,keywords:["bhajana cheyuchu","bajana cheyuchu","bhajana cheyuchu baktha paalaka","bajana cheeyuchu","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"భజియింతుము నిను జగదీశా శ్రీ",lyrics:`భజియింతుము నిను జగదీశా శ్రీ
యేసా మా రక్షణ కర్తా (2)
శరణు శరణు మా దేవా యెహోవా
మహిమాన్విత చిర జీవనిధి (2)  ||భజియింతుము||

1. విమల సెరాపులు దూత గణంబులు
చూడగ లేని తేజోనిధివే (2)
మా యధములకై సిలువ మ్రానుపై
దీనుడవై మరణించితివే (2)    ||శరణు||

2. ప్రప్రధముడ మరి కడపటి వాడా
మృతుడై బ్రతికిన నిరత నివాసి (2)
నీ భజనలు మా జీవనాధారం
చేకొనవే మా స్తుతి గీతం (2)   ||శరణు||`,keywords:["bajiyinthumu ninu jagadeesaa","bajinthumu ninnu","bajiyinthumu ninnu","bhajiyinthumu ninu","bajiyenthumu ninu","bajiyenthumu ninnu"],video:"",artist:"Addanki Ranjith Ophir",genre:["General"],timeSignature:"4/4"},{id:l(),title:"భయము ఇకమీదట లేనే లేదు/యావే",lyrics:`భయము ఇకమీదట లేనే లేదు 
భవిష్యత్ నా తండ్రి నీ చేతులలో
నిరాశ నా దారి చేరదు నిరీక్షణ నాలో తేజరిల్లును(2)

యావే నీవే నా దైవం తరతరములకు దేవుడవు
యావే నీవే నా దుర్గం యుగయుగములు ఏలు వాడవు

నీవు కునకవయ్య నీవు నిదురించవు
ఇశ్రాయేలు కాపాడే దైవం నీవు

1. మరణ భయము నన్ను వెంటాడదు సాతానుని సంకెళ్లు తొలగిపోయెను(2)
మరణాన్ని జయించిన శత్రువుని ఓడించినా
సర్వశక్తిమంతుడైన నా యేసయ్యా (2) ||యావే నీవే||

2. కోల్పోయినవాన్ని సమకూర్చువాడ వ్యాధులన్ని స్వస్థపరుచువాడ (2)
నీవే నా పరిహార నీవే నా జయశాలి
సర్వశక్తిమంతుడైన నా యేసయ్యా (2) ||యావే నీవే||`,keywords:["bhayamu ika midhata lene ledhu","bhayamu eka midhata","bayamu ika midhata","bhayamu ika medhata lene ledhu","bayamu ika medhata lene ledhu","bhayamu ila meedhata lene ledhu","bayamu ika meedhata","bhayamu eka meedhata","yaave","yaavey","yave","yahweh","yaaveh","yaaweh","yaawe","worship","3/4"],video:"https://www.youtube.com/embed/OZ7Ypzfxujc?start=1055",artist:"Sounds of Zion",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"భారత దేశమా యేసుకే",lyrics:`భారత దేశమా యేసుకే
నా భారత దేశమా ప్రియ యేసుకే (2)
నువ్వు సొంతం కావాలన్నదే నా ప్రార్థన
నిను సొంతం చేయాలన్నదే నా ధ్యేయం (2)
యేసు నామమే జయము జయమని ఇహమంత మారుమ్రోగిపోవాలి
పని చేయుచున్న సాతాను శక్తులు పటా పంచలైపోవాలి (2)
భారత దేశమా నా భారత దేశమా
నా ప్రియ యేసునికే నీవు సొంతం కావాలి
భారత దేశమా నా భారత దేశమా
ఉగ్రతలోనుండి నీవు రక్షణ పొందాలి

1. సృష్టికర్తనే మరచి – భారత దేశమా
సృష్టిని పూజించుట తగునా – నా భారత దేశమా (2)
ఈ లోకమును సృష్టించిన యేసే – భారత దేశమా
నిను రక్షించుటకు ప్రాణం పెట్టెను – భారత దేశమా (2)
భారత దేశమా యేసుని చేరుమా
నూతన సృష్టిగ మార్చబడుదువు భారత దేశమా (2)
భారత దేశమా నా భారత దేశమా
నా ప్రియ యేసునికే నీవు సొంతం కావాలి
భారత దేశమా నా భారత దేశమా
ఉగ్రతలోనుండి నీవు రక్షణ పొందాలి

2. శాంతికి అధిపతి ఆ యేసే – భారత దేశమా
శాంతి రాజ్యమును స్థాపించును – నా భారత దేశమా (2)
లోకమంతయు లయమైపోవును – భారత దేశమా
లోకాశలన్నియు గతించిపోవును – భారత దేశమా (2)
భారత దేశమా యేసుని చేరుమా
శాంతి సమాధానములను పొందుము భారత దేశమా (2)
భారత దేశమా నా భారత దేశమా
నా ప్రియ యేసునికే నీవు సొంతం కావాలి
భారత దేశమా నా భారత దేశమా
ఉగ్రతలోనుండి నీవు రక్షణ పొందాలి

3. రాజుల రాజుగ మన యేసే – భారత దేశమా
పెండ్లి కుమారుడై రానుండె – నా భారత దేశమా (2)
యేసుని నమ్మిన దేశములన్ని – భారత దేశమా
యేసుతో కూడ కోనిపోబడును – భారత దేశమా (2)
భారత దేశమా యేసుని చేరుమా
సువర్ణ దేశముగ మార్చబడుదువు భారత దేశమా (2)
భారత దేశమా నా భారత దేశమా
నా ప్రియ యేసునికే నీవు సొంతం కావాలి
భారత దేశమా నా భారత దేశమా
ఉగ్రతలోనుండి నీవు రక్షణ పొందాలి

4. భారత దేశమా నా యేసుకే
భారత దేశమా ప్రియ యేసుకే (2)
నువ్వు సొంతం కావాలన్నదే నా ప్రార్థన
నిను సొంతం చేయాలన్నదే నా ధ్యేయం (2)
యేసు నామమే జయము జయమని ఇహమంత మారుమ్రోగిపోవాలి
పని చేయుచున్న సాతాను శక్తులు పటా పంచలైపోవాలి (2)
భారత దేశమా నా భారత దేశమా
నా ప్రియ యేసునికే నీవు సొంతం కావాలి
భారత దేశమా నా భారత దేశమా
ఉగ్రతలోనుండి నీవు రక్షణ పొందాలి`,keywords:["bharatha dhesama yesuke","baratha desama yesume","barata desama","bhaaratha desama","bharathadhesama yeesuke","india"],video:"",artist:"",genre:["India"],timeSignature:"4/4"},{id:l(),title:"భాసిల్లెను సిలువలో పాపక్షమా",lyrics:`భాసిల్లెను సిలువలో పాపక్షమా
యేసు ప్రభూ నీ దివ్య క్షమా      ||భాసిల్లెను||

1. కలువరిలో నా పాపము పొంచి
సిలువకు నిన్ను యాహుతి చేసి
కలుషహరా కరుణించితివి (2)      ||భాసిల్లెను||

2. దోషము చేసినది నేనెకదా
మోసముతో బ్రతికిన నేనెకదా
మోసితివా నా శాపభారం (2)     ||భాసిల్లెను||

3. పాపము చేసి గడించితి మరణం
శాపమెగా నేనార్జించినది
కాపరివై నను బ్రోచితివి (2)     ||భాసిల్లెను||

4. నీ మరణపు వేదన వృధా గాదు
నా మది నీ వేదనలో మునిగెను
క్షేమము కలిగెను హృదయములో (2)     ||భాసిల్లెను||

5. ఎందులకో నాపై ఈ ప్రేమ
అందదయ్యా స్వామీ నా మదికి
అందులకే భయమొందితిని (2)     ||భాసిల్లెను||

6. నమ్మిన వారిని కాదన వనియు
నెమ్మది నొసగెడి నా ప్రభుడవని
నమ్మితి నీ పాదంబులను (2)      ||భాసిల్లెను||`,keywords:["baasillenu siluvalo","bhaasillenu siluvanu","baasillenu","basilenu","baasilenu siluvalo","lent","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Lent","Cross","Sin"],timeSignature:"4/4"},{id:l(),title:"భీకరుండౌ మా యెహోవా",lyrics:`భీకరుండౌ మా యెహోవా – పీఠ మెదుటన్ గూడరే
ఏకమై సాష్టాంగపడి సర్వేశ్వరుని గొనియాడరే     ||భీకరుండౌ||

1. మట్టితోనే మమ్ము నెల్ల – మానవులుగ సృజించెను
ఇట్టి శక్తుండౌ ప్రభున్ మే-మెచ్చుగా మది నెంతుము   || భీకరుండౌ ||

2. ఏరితోడు లేక మము స-ర్వేశ్వరుడు సృష్టించెను
ధారుణిన్ దానొక్కడే మా – దైవమని పూజింతుము   || భీకరుండౌ ||

3. పుట్టగిట్టన్ జేయ దానై – నట్టి దేవుని శక్తిని
బట్టుగా లోకస్తులారా – ప్రస్తుతింపరే భక్తిని                 || భీకరుండౌ ||

4. మేటి సంగీతంబులపై – మింట నారవ మొందను
జాటరే వేవేల నోళ్ళన్ – సన్నుతుల్ ప్రభు వందను       || భీకరుండౌ ||

5. మిక్కిలి కష్టంబులతో – మిత్తికిని బాల్పొందను
దిక్కు లేని గొర్రెలట్లు – దిరుగ జేర్పన్ మందను      || భీకరుండౌ ||`,keywords:["bhikarundav ma yehova","bheekarundavu ma yehova","bhikarundavu ma yehova","bhikarundav ma yehova","bhekarundav ma yehova","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"భూపునాది మునుపే",lyrics:`భూపునాది మునుపే – ఈ లోక సృష్టి ముందే
ఆనంద ధ్వనులు చేసి – పాడిరి ఉదయ నక్షత్రాలు
కొలతలేసినప్పుడే – ద్వారాలు తెరచినప్పుడే
ఆనంద ధ్వనులు చేసి – పాడిరి దేవుని కుమారులు
నూతనాకాశము.. నూతన లోకము…
నూతనెరుషలేము వచ్చును
దేవుడే మనతో.. గుడారమై యుండును…
మనమంతా మరలా పాడెదము  |భూపునాది||

1. జీవమే జీవమే – ప్రాణమే ప్రాణమే
నిత్యము మనలో ఉందును (2)
తండ్రి క్రీస్తుయు – పరిశుద్ధాత్ముడు
మనతో ఏకమై యుండును     ||భూపునాది||

2. వేదన బాధయు – కన్నీరు దుఃఖము
ఇంకెక్కడా ఉండే ఉండవు (2)
సూర్య చంద్రులు – వెలుగును ఇవ్వవు
దేవుడే వెలుగై యుండును      ||భూపునాది||`,keywords:["bhupunaadhi munupe","bupunadhi munupe","bupunaadhi munupey","bhupunadhi munupe","bhopunadhi munupe","bhupunadhimunupe","bupunadi munupe","bopunadi munupe","bopunaadi munupe","boponadi munupe","enosh kumar","4/4"],video:"https://www.youtube.com/embed/kj-6CtiogqU?start=1540",artist:"Enosh Kumar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"భూమ్యాకాశములను సృజియించిన దేవా(యేసయ్యా...నీకే వందనం)",lyrics:`భూమ్యాకాశములను సృజియించిన దేవా
నీ సన్నిధిలోనే ప్రవేశించెదను
నీ పరిశుద్ధతను ప్రకాశించుటకు
నీ పరిపూర్ణతలో నన్ను నడిపించుము
మహిమా నీకే… ఘనతా నీకే…
ప్రతి దినం నా ఆరాధన నీకే
మహిమా నీకే… ఘనతా నీకే…
నిరంతరం ఈ స్తోత్రార్పణ నీకే
యేసయ్యా... నీకే వందనం – (4)

1. మట్టి ముద్దనైన నన్ను మనిషిగా రూపించావు
వట్టి వాడనైన గాని మహిమతో నను నింపావు (2)
నీ కౌగిలిలో నను హత్తుకొని
అర చేతులలో నను చెక్కుకొని
నీ సన్నిధి కాంతిని నాపైనే ఉదయింపజేసావు (2)
ఏమివ్వగలను నేను నీ ప్రేమకై
పగిలిన హృదయముతో ఆరాధింతును ||మహిమా||

2. ఘోర పాపినైన నన్ను ఎంతగా ప్రేమించావు
సిలువ పైన ప్రాణమిచ్చి వింతగా నను మార్చావు (2)
నా మనో నేత్రమును వెలిగించి
నా హృదయ కాఠిన్యమును మార్చి
అర్హతే లేని బలహీనుడనే ఎన్నుకున్నావు (2)
ఏమిచ్చి నీ ఋణమును నే తీర్తును
విరిగి నలిగిన మనస్సుతో ఆరాధింతును ||మహిమా||`,keywords:["yesayya neke vandhanam","yesaya nike vandanam","yesayya neke vandhanam","yesayya nike vandhanam","enosh kumar"],video:"",artist:"Enosh Kumar",genre:["General"],timeSignature:"4/4"}],మ:[{id:l(),title:"మంగళమే యేసునకు",lyrics:`మంగళమే యేసునకు – మానుజావతారునకు (3)
శృంగార ప్రభువునకు (2)
క్షేమాధిపతికి మంగళమే  ||మంగళమే||

1. పరమ పవిత్రునకు – వర దివ్య తేజునకు (3)
నిరుపమానందునకు (2)
నిపుణ వేద్యునకు మంగళమే  ||మంగళమే||

2. దురిత సంహారునకు – వర సుగుణోదారునకు (3)
కరుణా సంపన్నునకు (2)
జ్ఞాన దీప్తునకు మంగళమే   ||మంగళమే||

3. సత్య ప్రవర్తునకు – సద్ధర్మ శీలునకు (3)
నిత్య స్వయంజీవునకు (2)
నిర్మలాత్మునకు మంగళమే   ||మంగళమే||

4. యుక్త స్తోత్రార్హునకు – భక్త రక్షామణికి (3)
సత్య పరంజ్యోతి యగు (2)
సార్వభౌమునకు మంగళమే   ||మంగళమే||

5. నర ఘోర కలుషముల – నురుమారంగ నిల (3)
కరుదెంచిన మా పాలి (2)
వర రక్షకునకు మంగళమే  ||మంగళమే||

6. పరమపురి వాసునకు – నర దైవ రూపునకు (3)
పరమేశ్వర తనయునకు (2)
బ్రణుతింతుము నిన్ను మంగళమే   ||మంగళమే||`,keywords:["mangalame yesunaku","mangalamu yesunaku","mangalame yeesunaku","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"మధురం ఈ శుభ సమయం",lyrics:`మధురం ఈ శుభ సమయం
అతి మధురం వివాహ బంధం (2)
ఆనందమే ఇరువురి హృదయం (2)
జత కలిసె ఈ తరుణంలో (2)
నవ దంపతులకు స్వాగతం  ||మధురం||

1. ఆ దేవుని దీవెనలు ఎల్లవేళలా మీకుండగా
అబ్రహాము శారా వాలే ఏ క్షణమైనా వీడక (2)
మీ జీవిత సంద్రాన – ఎన్ని కష్టాలు ఎదురైనా (2)
ఒకరికొకరు తోడుగా కలకాలం నిలవాలి     ||మధురం||

2. ప్రేమకు ప్రతి రూపమే మీ పరిణయము
మనసులో విరియగ మమతలు విరబూయగా (2)
అనురాగ పూవులే మీ ఇంట పూయగా (2)
ఒకరికొకరు తోడుగా కలకాలం నిలవాలి    ||మధురం||`,keywords:["మధురం ఈ శుభ సమయం","marriage","madhuram ee subha samayam","maduram ee suba samayam","madhuram ee subha samayam","maduram ee suba samayam"],video:"",artist:"",genre:["Marriage"],timeSignature:"2/4"},{id:l(),title:"మధురం మధురం నీ ప్రేమ ఎంతో మధురం",lyrics:`మధురం మధురం నీ ప్రేమ ఎంతో మధురం (2)
జుంటె తేనె దారలకన్న ప్రేమ ఎంతో మధురం (2)

ప్రేమ ప్రేమ కల్వరి ప్రేమ
ప్రేమ ప్రేమ యేసుని ప్రేమ

1. నశియించిన వారిని వెదకింది నీ ప్రేమా
కృంగిన వారిని లేవనెత్తు నీ ప్రేమ (2)
సిలువలో దొంగను రక్షించిన నీ ప్రేమా (2)
తల్లి తండ్రి మరచిన మరువనిది నీ ప్రేమ (2) ||ప్రేమ ప్రేమ||

2. దిక్కు లేని వారిని ఆదరించు నీ ప్రేమ
విధవరాలి కుమారుని బ్రతికించె నీ ప్రేమ (2)
సమరయ స్త్రీ కి దాహము తీర్చిన ప్రేమ (2)
నీ జీవ వాక్కులతో సేద తీర్చిన నీ ప్రేమ (2) ||ప్రేమ ప్రేమ||`,keywords:["madhuram madhuram","maduram maduram","madhoram","love","madhuram madhuram ni prema yentho madhuram","maduram madhuram","madhuram madhuramm","madurm","2/4"],video:"",artist:"",genre:["General","Love","Hope","Comfort"],timeSignature:"2/4"},{id:l(),title:"మధురము యేసుని నామము",lyrics:`మధురము యేసుని నామము 
మార్గము సత్యము జీవము  
ఆయనే మధురము (2)

1. ఆనందము - అతి ఆశ్చర్యము (2)
చెప్పనశక్యము మహిమా యుక్తము - రక్షణ ఆనందము (2) ||మధురము||

2. మారుమనసును - పొందిన సుదినము (2)
పరమున ప్రభువును దూతలు కూడిరి - పరవసించిరి అమరము (2) ||మధురము||

3. ఆరాధింతును అతిశయింతును (2)
జత చేర్చెను నను జీవ గ్రంధమున ఆయనే మధురము (2) ||మధురము||

4. పంట పోయినా - పశువు రాలినా (2)
శత్రువు సైతము తీయగ జాలని - ఈ సంతోషము మధురము (2) ||మధురము||`,keywords:["మధురము యేసుని నామము","madhuramu yeesuni naamamu","madhuramu yesuni namamu","maduramu yesuni namamu","madhuram yesuni namam"],video:"",artist:"Jasper Kunapo, Shalom Raj, Surya Prakash, Sunaina Ruth, Nikhil Penki",genre:["General"],timeSignature:"3/4"},{id:l(),title:"మధురమైనది నా యేసు ప్రేమ",lyrics:`మధురమైనది నా యేసు ప్రేమ
మరపురానిది నా తండ్రి ప్రేమ (2)
మరువలేనిది నా యేసుని ప్రేమ (2)
మధురాతి మధురం నా ప్రియుని ప్రేమ

ప్రేమా... ప్రేమా...
ప్రేమా... నా యేసు ప్రేమా (2) ||మధురమైనది||

1. ఇహలోక ఆశలతో అంధుడ నేనైతిని
నీ సన్నిధి విడచి నీకు దూరమైతిని (2)
చల్లని స్వరముతో నన్ను నీవు పిలచి (2)
నీలో నను నిలిపిన నీ ప్రేమ మధురం       ||ప్రేమ||

2. పర్వతములు తొలగినా మెట్టలు గతి తప్పినా
ఎగసి పడే అలలతో కడలే గర్జించినా (2)
మరణపు ఛాయలే దరి చేరనీయక (2)
కౌగిట దాచిన నీ ప్రేమ మధురం         ||ప్రేమ||

3. నీ సిలువ ప్రేమతో నన్ను ప్రేమించి
మార్గమును చూపి మన్నించితివి (2)
మరణపు ముల్లును విరచిన దేవా (2)
జీవము నొసగిన నీ ప్రేమ మధురం       ||ప్రేమా||`,keywords:["madhuramainadhi na yesu prema","maduramainadi","madhoramainadhi","love","madhuraminadhi","maduraminadi","madhuram","madurmainadi","6/8"],video:"",artist:"",genre:["General","Love"],timeSignature:"6/8"},{id:l(),title:"మన మధ్యనే ఉన్నది పరలోక రాజ్యం",lyrics:`మన మధ్యనే ఉన్నది పరలోక రాజ్యం
మన మధ్యనే ఉన్నది దేవుని రాజ్యం (2)
పాపము లేదు పరలోకంలో
వ్యాధులు బాధలు లేనే లేదు
పాపము లేదు పరలోకంలో
వ్యాధులు బాధలు అసలే లేవు
నీ రాజ్యం మాకొచ్చును గాక
నీ చిత్తం భువిపై జరుగును గాక
పరలోక రాజ్యాన్ని ఈ భువిపై మేము
ఇప్పుడే అనుభవిస్తాము – (2)
ఇక్కడే అనుభవిస్తాము

1. సిలువలో మన శాపం తొలగిపోయెను
ఆశీర్వాదముకు మనము వారసులం
దారిద్య్రముతో లేదు మాకు సంబంధం
ఆత్మలో ఫలియించి వర్థిల్లెదం
అన్నిటిలో సౌఖ్యముగా మేముందుము
కృప క్షేమములే మాకిక సొంతము
అన్నిటిలో సౌఖ్యముగా మేముందుము
కృప క్షేమములే మా సొంతము           ||నీ రాజ్యం||

2. ఆలు మగలు ఒకరికి ఒకరు త్యాగ మూర్తులై
కలసి జీవించుటయే పరలోక రాజ్యం
కలతలు లేవు మాకు కన్నీరు తెలియదు
సంతోషముతో మేము సాగిపోతాము
ఈ తరానికి మాదిరిగా మేముంటాము
పరలోక ప్రేమతో కలిసి జీవిస్తాం (2)         ||నీ రాజ్యం||`,keywords:["mana madyane unnadi paraloka raajyam","mana madhyane unnadhi paraloka raajyam","mana madhyane unnadhi paralooka"],video:"",artist:"P. Isaac",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మనసున్న మంచిదేవా",lyrics:`మనసున్న మంచిదేవా నీ మనసును నాకిచ్చావా
మనసు మలినమైన నాకై మనిషిగా దిగి వాచ్చావా
నా మది నీ కోవెలగా మలచుకోవయా
నా హృదిని రారాజుగా నిలిచిపోవయా

1. హృదయము వ్యాధితో నిండిన కపట కేంద్రము
దానిని గ్రహియించుట ఎవరి సాధ్యము
మనసు మర్మమెరిగిన మహనీయుడా
మనసు మార్చగలిగిన నిజదేవుడా  ||నా మది నీ||

2. చంచల మనస్సాడించు బ్రతుకు ఆటను
వంచన చేసి నడుపును తప్పు బాటను
అంతరంగమును పరిశీలించు యేసయ్యా
స్ధిరమనస్సుతో నీ దారిలో సాగనీవయ్యా ||నా మది నీ||

3. నిండు మనస్సుతో నిన్ను ఆశ్రయించితి
దీనమనస్సుతో నీకడ శిరము వంచితి
పుర్ణశాంతి గలవానిగా నన్ను మార్చుమా
తరతరములకు క్షేమము చేకూర్చుమాపా ||నా మది నీ||`,keywords:["manasunna manchi dheva","manasu unna manchi dheva","manasuna manchi deva","manasunna manchi deva","Ar stevenson","stevenson","manasunna mandhi dheeva","masanunaa mandhi dheva","6/8"],video:"",artist:"Dr. A. R. Stevenson",genre:["General"],timeSignature:"6/8"},{id:l(),title:"మనసులొకటాయే భువిలో",lyrics:`మనసులొకటాయే భువిలో
ఇరువురొకటాయే హృదిలో (2)

మనసు పరవశమై మధుర లాహిరిలో (2)
మనసులోని భావాలు
ఉరకలు వేసే ఈ వేళా ||మనసులొకటాయే||

1. ఎవరికెవరొకనాడు ఈ క్షణాన ఇచ్చోట
దేవ దేవుని సంకల్పం ఈ శుభ ఘడియా (2)
ఈ మధురమైన శుభవేళ (2)
ఒకరికొకరు తోడు నీడగా
సాగే ఈ తరుణం ||మనసులొకటాయే||

2. అనురాగం నీ ప్రాణమై అభిమానం నీ స్నేహమై
జీవితాంతం ఒకరికొకరు ప్రేమ మూర్తులుగా (2)
ఘన యేసుని దివ్య ఆశీస్సు (2)
జీవితాంతం నిండుగ మెండుగ
నీతో నిలిచే ఈ తరుణం ||మనసులొకటాయే||`,keywords:["మనసులొకటాయే భువిలో","manasulokataaye buvilo","manasulu okataaye bhuvilo","manasulokataye buvilo","marriage"],video:"",artist:"",genre:["Marriage"],timeSignature:"7/8"},{id:l(),title:"మన్నించినా ఆ ప్రేమే నా సొంతమా",lyrics:`మన్నించినా ఆ ప్రేమే నా సొంతమా
నీ చెంతనా నే చేరి ప్రార్ధించనా
కలనైనా ఇలా మరతును
ఎనలేని నీ ప్రేమను
నీవేగా నీవేగా
నీవే నా ప్రాణ దైవమా

1. శిలనేనైన రూపం చేసి జీవం పోసితివి
నిరతము నాకు మాదిరి నీవై దారి చూపితివి
నా చేతులను సుఖముతో నింపి నడిపే నీ ప్రేమ
అపారము నీ దయాగుణం అనంతము నీ ప్రేమామృతం
నీవు నా ప్రాణం

2. ఊహకు అందని త్యాగం చేసి శ్వాసై నిలిచావు
నీ ముఖకాంతిలో వెలుగై నన్ను మార్చుకొన్నావు
గతమేదైనా ప్రేమించావు స్తుతికే పాత్రుడవు
ప్రతిక్షణం నా నిరాశలో ప్రభాతమైనా నా యేసయ్య
నీవు నా ధ్యానం`,keywords:["manninchina aa preme","maninchina aa preme","manninchena aa preme","good friday","lent","goodfriday"],video:"",artist:"Yalagapaati Sunil Kumar, Pranam Kamalkhar, & Anwesshaa",genre:["Good Friday","Lent","Love"],timeSignature:"4/4"},{id:l(),title:"మరిచిపోలేదే మమ్మును ఎపుడూ యేసయ్యా",lyrics:`మరిచిపోలేదే మమ్మును ఎపుడూ యేసయ్యా 
తొలగిపోనీక మాపైనుండి నీ దయ 
నీ ప్రేమకు కొలతే లేదయా 
ఏమిచ్చినా ఋణము తీరదయా 
నిన్నే స్తుతియించెదమయ్యా

మాకు కాదు ఏ మాత్రమును 
నీ నామమునకే మహిమ కలుగును

1. నెరవేర్చితివి పనులన్నిటిని ఫలమేమి పోనీయలేదే 
ఆశీర్వదించినావే - మమ్మాశీర్వదించినావే 
సహాయము కేడెము నీవే

2. బదులిచ్చితివి మొరలన్నిటికి తలదించుకోనీయలేదే
అభివృద్ధి చేసినావే - మమ్మభివృద్ధి చేసినావే 
సహాయము కేడెము నీవే

3. గెలిపించితివి ప్రతి సమరములో అపకీర్తి రానీయలేదే 
ఆనందపరచినావే - మమ్మానందపరిచినావే 
సహాయము కేడెము నీవే`,keywords:["marachipoledhe mammunu eppudu yesayya","marachi polede mammunu","marchipoledhe","marchi poledhe","marachi poledhey","marachipoledhey","marachipolede","marachi polede","stevenson"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మరువలేనయా నీ మధురప్రేమను మహోపకారి  ",lyrics:`మరువలేనయా నీ మధురప్రేమను మహోపకారి 
చింతలేదయా నీ చెంతనుండను పరోపకారి 
నా ప్రాణ ప్రియుడా నా యేసయ్యా (2)
నీ రక్తమిచ్చి నన్ను కొన్నావయ్యా

1. నీలాగా ప్రేమించేవారెవ్వరు
నీలాగా క్షమియించే హృదయమేది 
నీ కృపలో నన్ను దాచితివి
నీ ప్రేమలో నన్ను పెంచితివి
నీ వాక్యము నాలో ఉంచి (2)
నీ వెలుగులో నను నడిపితివి (2)
యేసయ్యా యేసయ్యా యేసయ్యా నా యేసయ్యా (4)

2. పచ్చికగల చోట పరుండజేసి
జీవజలపు ఊటలు నాలో ఉంచి 
సమ్రృద్ధి జీవము నాకిచ్చితివి
సంతోష గానాలు పాడించితివి
నీ జీవము నాలో ఉంచి(2) 
నిత్యజీవము నాకిచ్చితివి (2)
యేసయ్యా యేసయ్యా యేసయ్యా నా యేసయ్యా (4)`,keywords:["maruvaleenayya ni madhura preemanu","maruvalenaya ni madhura premanu","maruvalenaya nee madhura premanu"],video:"",artist:"Chandra Mohan, Rajkumar Jeremy",genre:["General"],timeSignature:"3/4"},{id:l(),title:"మహాత్ముడైన నా ప్రభు",lyrics:`1. మహాత్ముడైన నా ప్రభు
విచిత్ర సిల్వ జూడ నా
యాస్తిన్ నష్టంబుగా నెంచి
గర్వం బణంగ ద్రొక్కుదున్

2. నీ సిల్వ గాక యో దేవా
దేనిన్ బ్రేమింప నీయకు
నాన్నాహరించు సర్వమున్
నీ సిల్వకై త్యజింతును

3. శిరంబు పాద హస్తముల్
సూచించు దుఃఖ ప్రేమలు
మరెన్నడైన గూడెనా
విషాద ప్రేమ లీ గతిన్?

4. ముండ్లన్ దుర్మార్గులల్లిన
కిరీట మేసు కుండినన్
ఈ భూ కిరీటములన్ని
దానం దూగంగ జాలు నే?

5. లోకంబు నే నేర్పించిన
నయోగ్యమైన యీవి యౌ
వింతైన యేసు ప్రేమకై
నా యావజ్జీవ మిత్తును

6. రక్షింప బడ్డ లోకమా
రక్షింప జావు బొందిన
రక్షకు-డేసు నిన్ సదా
రావంబు తోడ గొల్వుమా`,keywords:["mahathmudaina na prabhu","mahaathmudaina na prabhu","mahaathmudaina na prabu","mahathmudaina na prabu","andhra christian hymn","3/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"మహిమకు పాత్రుడా",lyrics:`మహిమకు పాత్రుడా ఘనతకు అర్హుడా
మా చేతులెత్తి మేము నిన్నారాధింతుము (2)

మహోన్నతుడా అద్భుతాలు చేయువాడా
నీవంటి వారు ఎవరు – నీవంటి వారు లేరు (2)

1. స్తుతులకు పాత్రుడా స్తుతి చెల్లించెదం
నీ నామమెంతో గొప్పది మేమారాధింతుము (2) ||మహోన్నతుడా||

2. అద్వితీయ దేవుడా ఆది సంభూతుడా
మా కరములను జోడించి మేము మహిమ పరచెదం (2) ||మహోన్నతుడా||`,keywords:["mahimaku pathruda","mahimaku paathrudaa","mahemaku pathruda","mahemaku","mahimakupathruda","mahima ku pathruda","mahimaku patruda","4/4"],video:"",artist:"Immanuel Paul Perli",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"మహిమ గల దేవునికి ఆరధన",lyrics:`మహిమ గల దేవునికి ఆరధన
మహిమ గల రాజునకు ఆరధన (2)

పరిశుధమైనది నీ నామం
పూజింపదగినది నీ నామం (2)

ఆరాధన (4)

1. ఉదయమునే ఆ పక్షులు నిన్ను స్తుతియించును
రేయితే నక్షత్రములు నిన్ను ఘనపరచును
మహిమ నీకే ఘనతా నీకే
ఆరాధన (4)

2. ఏ లోపం లేనివాడా సృష్టికి కారకుడా
సర్వలోక జీవులకు ఆహారమిచ్చువాడా
మహిమ నీకే ఘనతా నీకే
ఆరాధన (4)||`,keywords:["mahima gala dhevuniki","mahimaa gala devunuki","mahimaa","mahima","mahimagala","mahima galaa","maahima gala","mahema gala","mahemagala","mahima gala dhevunike","joseph","worship","4/4"],video:"",artist:"Bro V.Joseph",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"మహిమ ఘనతకు అర్హుడవు",lyrics:`మహిమ ఘనతకు అర్హుడవు
నీవే నా దైవము
సృష్టికర్త ముక్తి దాత (2)
మా స్తుతులకు పాత్రుడా
ఆరాధనా నీకే ఆరాధనా నీకే
ఆరాధనా స్తుతి ఆరాధనా ఆరాధనా నీకే (2)
ఆరాధనా నీకే ఆరాధనా నీకే

1. మన్నాను కురిపించినావు
బండనుండి నీల్లిచ్చినావు (2)
యెహోవా ఈరే చూచుకొనును
సర్వము సమకూర్చును   ||ఆరాధనా||

2. వ్యాధులను తొలగించినావు
మృతులను మరి లేపినావు (2)
యెహోవా రాఫా స్వస్థపరచును
నను స్వస్థపరచును   ||ఆరాధనా||`,keywords:["mahima ganathaku","mahima ghanathaku","mahima ganataku","mahimaganataku","mahimaganathaku","mahima ganathako","worship","2/4"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"మా హృదయములలో దేవుని ప్రేమను",lyrics:`మా హృదయములలో దేవుని ప్రేమను కుమ్మరించితివి
మా హృదయములలో వసించుచున్న పరిశుద్ధుని ద్వారా

ఆనందించెదము ఎల్లప్పుడు ఆనందించెదము
ఆనందించెదము మేము ఆనందించెదము

నీవిచ్చిన రక్షణను బట్టి ఆనందించెదము
మాకిచ్చిన నిత్య జీవమును బట్టి ఆనందించెదము 

యేసు యేసు నీ ద్వారనే 
మేము దేవునితో సమాధానము కలిగియుంటిమి
యేసు యేసు నీ వలనే కదా 
మేము నీతోడి దేవునికి వారసులమైతిమి

1. ఘోర పాపులము నీ తట్టు తిరిగితిమి
కృపను చూపితివి పరిశుద్ధపరిచితివి 
మా అపరాధముల కొరకు అప్పగింపబడి
మము నీతిమంతులుగా తీర్చుటకు లేపబడినావు
మాకు నిత్య స్వాస్థ్యము నిశ్చయతను ఆనుగ్రహించుటకు 
పరిశుద్ధాత్మను సంచకరువుగా మాలో నింపితివి

2. శ్రమల కాలములో శోకముల గడియలలో
నీ ప్రేమ మది తలచి ఆదరణ పొందెదము
మేమికను పాపులముగా నుండగానే ప్రభూ
మా కొరకు సిలువలో ప్రాణమును పెట్టితివి
మేమిపుడు ఇంకేమి నిన్ను కోరెదము
ఏ స్థితిలోనైనా నీలో ఆనందించెదము`,keywords:["maa hrudhayamylalo dhevuni premanu","ma hrudhayamulalo","ma hrudhayamula lo","ma hrudhayamulaloo","maa hrudayamulalo","ma hrudayamulalo","7/8"],video:"https://www.youtube.com/embed/akw5oKlGTdA?start=8612",artist:"Joel Kodal, Hadlee Xavier, Roshan Sebastian and Jerusha Joseph",genre:["Lent","Love"],timeSignature:"7/8"},{id:l(),title:"మహోన్నతుడా నీ చాటున",lyrics:`మహోన్నతుడా నీ చాటున నే నివసించెదను
సర్వశక్తుడా నీ నీడలో నే విశ్రమించెదను

బలవంతుడా నీ సన్నిధినే
నే ఆశ్రయించెదా అనుదినము

యేసయ్యా యేసయ్యా

1. రాత్రివేళ కలుగు భయముకైనా
పగటిలో ఎగిరే బాణముకైనా
చీకటిలో సంచరించు తెగులుకైనా
దినమెల్లా వేధించు వ్యాధికైనా

నే భయపడను నే దిగులు చెందను
యెహోవా రాఫా నా తోడు నీవే

యేసయ్యా యేసయ్యా

2. వేయిమంది నా ప్రక్క పడిపోయినా
పదివేలు నా చుట్టు కులినను
అంధకారమే నన్ను చుట్టుముట్టినా
మరణ భయమే నన్ను వేధించినా

నే భయపడను నే దిగులు చెందను
యెహోవా నిస్సి నా తోడు నీవే

యేసయ్యా యేసయ్యా

Bridge: 
నిను ప్రేమించువారిని తప్పించువాడా
నిన్నెరిగిన వారిని ఘనపరచువాడా

నా యుద్ధము జయించి లేవనెత్తువాడా
కృప వెంబడి కృప చూపించువాడా

యేసయ్యా యేసయ్యా

నే భయపడను నే దిగులు చెందను
యెహోవా షాలోం నా తోడు నీవే`,keywords:["mahoonathuda","mahonathuda nee chatuna","mahonnathuda ni chatuna","mahoonnathuda ne chatuna","bhayapadanu","bayapadanu","allen ganta","worship","psalm 91","4/4"],video:"https://www.youtube.com/embed/uMf36_MwegU?start=1092",artist:"Vijay Kondapuram & Allen Ganta",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"మహోన్నతుని చాటున నివసించు వారు",lyrics:`మహోన్నతుని చాటునా నివసించువారు
సర్వశక్తుని నీడనా విశ్రమించువారు (2)
ఆయనే నా ఆశ్రయము నా కోటయు నా దేవుడు (2)
||మహోన్నతుని||

1. ఆయన తన రెక్కలతో నిన్ను కప్పును
ఆయన తన రెక్కల క్రింద ఆశ్రయమునిచ్చును (2)
ఆయనే సత్యము కేడెము డాలును (2)

కృతజ్ఞతలర్పించుడి మనసారా ఆ రాజుకు
హల్లెలూయా - కృతజ్ఞతలర్పించుడి మనసారా మహ రాజుకు ||మహోన్నతుని||

2. నీకు ప్రక్కను వేయిమంది పడినగాని
నీ కుడి ప్రక్కన పదివేలమంది కూలినగాని (2)
కీడు నీ యొద్దకు ఎన్నడు రానియ్యడు (2) ||కృతజ్ఞతలర్పించుడి||

3.నీకు అపాయమేమియు రానే రాదుగా
ఏ తెగులు నీ గుడారము సమీపించదుగా (2)
ఆయన నిన్ను గూర్చి దూతలకాగ్నపించును (2) ||కృతజ్ఞతలర్పించుడి|| `,keywords:["mahoonathuni chaatuna","mahonathuni chatuna","mahonnathuni chaatuna","mahoonnathune chaatuna","jk christopher","jkchristopher","sharonsisters","sharon sisters","2/4"],video:"",artist:"Lilian Christopher",genre:["General"],timeSignature:"2/4"},{id:l(),title:"మా గొప్ప దేవా",lyrics:`మమా గొప్ప దేవా – మము కరుణించి
అత్యున్నత స్థానములో నను నిలిపావు
యోగ్యుడనే కాను ఆ ప్రేమకు
వెల కట్టలేను ఆ ప్రేమకు

ఆరాధించెదను - నా పూర్ణ హృదయముతో
నిన్నే కీర్తింతును – నా జీవితమంతా (2)

1. నెమ్మదే లేని బ్రతుకులో – పాపపు బంధకాలలో
చిక్కి ఉన్న నన్ను నీవు విడిపించావు (2)
పాపంలో నుండి నను విమోచించుటకు
ఆ ఘోర సిలువలోన మరణించావు
దాస్యములోనుండి పడి ఉన్న నన్ను
నీ కుమారునిగా రక్షించావు ||మా గొప్ప||

2. మార్పులేని బ్రతుకులో మలినమైన మనస్సుతో
నే తూలనాడి దూషించింది నిన్నేనేగా (2)
ఆ స్థితిలో కూడా నను ప్రేమించే గొప్ప
హృదయం నీదే యేసయ్యా
నాలాంటి ఘోరమైన పాపిని కూడా
క్షమియించి ప్రేమించింది నీవేనయ్యా ||మా గొప్ప||`,keywords:["మా గొప్ప దేవా","maa goppa dheva","ma goppa dheva","ma gopa deva","ma gopa dheva","ma goppa deva","maa goppa deva","maa goppa deva","enosh kumar","4/4"],video:"",artist:"Enosh Kumar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మాటే చాలయ్యా యేసయ్య",lyrics:`మాటే చాలయ్యా యేసయ్య 
నీ మనసే చాలయ్యా యేసయ్యా 
మనసారా నిను పాడా - మదినిండా నిను వేడ 
నేను జీవిస్తా నీ కోసం నా యేసయ్యా 
   
హల్లెలూయా హల్లెలూయా స్తుతి ఆరాధనా 
మనసంతా నీ కోసం ఈ ఆలాపనా 

1. లోకమే విషమై విషమే వశమై 
కలతై నలతై నను వేధించగా 
మరణమే వరమై వరమే వశమై 
అలుసై నలుసై నను వేధించగా 

ధిక్కు లేని వాడను ధరికి నిలిచి 
దారి లేని వాడను మార్గమై నిలచి 

నను ప్రేమతో పిలచి నావయ్యా  
నా పాప శాపంబాపినావయ్యా

నేను జీవిస్తా నీ కోసం నా యేసయ్యా 
||హల్లెలూయా||

2. దయగల దేవ నా దీపమును 
వెలిగించితివా ఈ చీకటిలో 
పారవేయకుండా త్రోసి వేయకుండా 
విడిపించితివా బంధకాలలో 

నా కాల గతులలో నీ కృప నాపై 
విస్తరింప చేసావు విడుదల నిచ్చి 

నను ప్రేమతో పిలిచి నావయ్యా 
నా పాప శాపంబాపినావయ్యా

నేను జీవిస్తా నీ కోసం నా యేసయ్యా 
||హల్లెలూయా||`,keywords:["maate chalayya yeesayya","maate chalayya yesayya","mate chalayya yesayya","mate chalaya yesaya","worship"],video:"",artist:"Bro.Philip Kj, Sudhakar Rella",genre:["Worship","General"],timeSignature:"6/8"},{id:l(),title:"మానవుల మేలు కొరకు",lyrics:`మానవుల మేలు కొరకు జ్ఞానియైన దేవుఁడు మానుగఁ కల్యాణ పద్ధతి
మహిని నిర్ణయించెగా ||మానవుల||

1. కానాయను నూరిలో మన కర్త చూచెఁ బెండ్లిని పానముగను ద్రాక్షరసము
దాన మొసఁగెఁ బ్రీతిని ||మానవుల||

2. యేసూ వీరిద్దరిని ఏకముగాఁ జేయుమీ దాసులుగను జేసి వీరి దోసము
లెడబాపుమీ ||మానవుల||

3. కర్త వీరలకు భార్య భర్తల ప్రేమంబును బూర్తిగ నీ విచ్చి వీరిఁ బొందుగాను
నడుపుమీ ||మానవుల||

4. భక్తియు విశ్వాస ప్రేమలు భావమందు వ్రాయుమీ ముక్తి సరణి వెదక
వీరి భక్తి మిగులఁ జేయుఁమీ ||మానవుల||`,keywords:["maanavula meelu koraku","manavula melu koraku","manavula meelu koraku","marriage song","andhra christian hymns","6/8"],video:"",artist:"",genre:["Andhra Christian Hymn","Marriage"],timeSignature:"6/8"},{id:l(),title:"మా మధ్యలో సంచరించువాడా",lyrics:`1. మా మధ్యలో సంచరించువాడా 
ఆరాధన నీకేనయ్య
మా మధ్యలో అద్భుతాలు చేయువాడ
ఆరాధన నీకేనయ్య  (2)

మార్గము తెరిచే అద్భుతకరుడా
మాట తప్పని తేజోమయుడా 
నీవే నీవే యేసయ్య (2)

2. మాలో నీవు హృదయాలు మార్చుము 
యేసయ్య యేసయ్య
మా మనసులను స్వస్థపరచుము 
యేసయ్య యేసయ్య నీవే  (2)  ||మార్గము తెరిచే||

Bridge: 
చీకటి లోయలో సంచరించిన
నిరీక్షణ కోలిపోయిన
గొప్ప కార్యము జరిగించెదవు
నాలో నెరవేర్చదవు (2)  ||మార్గము తెరిచే||`,keywords:["way maker","way maker in telugu","waymaker","adbuthakaruda","maa madhyaloo","ma madhyalo","maa madhyalo","ma madyalo","maa madyalo","maa madialo","worship","4/4"],video:"https://www.youtube.com/embed/ydLEdBpZcgE?start=1229",artist:"Nations of Worship",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"మార్గము చూపుము ఇంటికి",lyrics:`మార్గము చూపుము ఇంటికి – నా తండ్రి ఇంటికి
మాధుర్య ప్రేమా ప్రపంచమో – చూపించు కంటికి (2)

1. పాప మమతల చేత – పారిపోయిన నాకు
ప్రాప్తించె క్షామము
పశ్చాత్తాప్పమునొంది – తండ్రి క్షమ కోరుచు
పంపుము క్షేమము (2)
ప్రభు నీదు సిలువ – ముఖము చెల్లని నాకు
పుట్టించె ధైర్యము (2)      ||మార్గము||

2. ధనమే సర్వంబనుచు- సుఖమే స్వర్గంబనుచు
తండ్రిని వీడితి
ధరణి భోగములెల్ల – బ్రతుకు ధ్వంసము జేయ
దేహీ నిను చేరితి (2)
దేహీ అని నీ వైపు – చేతులెత్తిన నాకు
దారిని జూపుము (2)    ||మార్గము||

3. దూర దేశములోన – బాగుందుననుకొనుచు
తప్పితి మార్గము
తరలిపోయిరి నేను – నమ్మిన హితులెల్ల
తరిమే దారిద్య్రము (2)
దాక్షిణ్య మూర్తి నీ – దయ నాపై కురిపించి
ధన్యుని చేయుము (2)    ||మార్గము||

4. అమ్ముకొంటిని నేను – అధముడొకనికి నాడు
ఆకలి బాధలో
అన్యాయమయిపోయే – పందులు సహ వెలివేయ
అలవడెను వేదన (2)
అడుగంటె అవినీతి – మేల్కొనియె మానవత
ఆశ్రయము గూర్చుము (2)    |మార్గము||

5. కొడుకునే కాదనుచు – గృహమే చెరసాలనుచు
కోపించి వెళ్ళితి
కూలివానిగనైన – నీ యింట పని చేసి
కనికరమే కోరుదు (2)
కాదనకు నా తండ్రి – దిక్కెవ్వరును లేరు
క్షమియించి బ్రోవుము (2)   ||మార్గము||

6. నా తండ్రి నను జూచి – పరుగిడిచూ ఏతెంచి
నాపైబడి ఏడ్చెను
నవ జీవమును గూర్చి – ఇంటికి తోడ్కొని వెళ్లి
నన్నూ దీవించెను (2)
నా జీవిత కథయంత – యేసు ప్రేమకు ధరలో
సాక్ష్యమై యుండును (2)    ||మార్గము||`,keywords:["andhra christian song","andhra christian songs","maargamu chupumu intiki","margamu","margamu chupumu","margamu chupumu","margam chupumu intiki",",margam","prodigal son","prodigalson","3/4"],video:"",artist:"Dr. A. B. Maasilamani",genre:["Andhra Christian Hymn","Repentence"],timeSignature:"3/4"},{id:l(),title:"మార్గము తెలిసిన తప్పిపోయాను/నన్ను నీవు మరువక",lyrics:`మార్గము తెలిసిన తప్పిపోయాను
ఏటో తెలియక నిలిచిపోయాను
వంద మంది కొరకు నీవు పోలేదు
తప్పిపోయిన నన్ను నీవు వెదకి వచ్చావు

నన్ను నీవు మరువక
నన్ను నీవు విడువక
జాలిగా నన్ను చూస్తూ నిలచిపోయావు
తృణీకరించక నన్ను త్రోసివేయక
సంద్రాలు దాటి నన్ను చేరుకున్నావు

1. శ్రేష్టమైన జనులు ఉన్ననూ 
విలువలేని నా కోసం వచ్చావు    (2)
నన్ను వెదుకుట నీవు ఆపక
నన్ను ప్రేమించుట నీవు మరువక    (2)
నూతన ప్రారంభం ఇచ్చావు
నీ బుజములపై నన్ను మోసావు

2. రాళ్లు విసిరె మనుషులు మధ్యలో 
నన్ను ఆదుకొనుటకు నీవు వచ్చావు   (2)
నా చెయ్యి పట్టీ నన్ను లేపావు
నా మరకలను తుడిచావు (2)
నీ బిడ్దగా నన్ను మార్చివేసావు
నన్ను త్రోసివేయని తండ్రీ`,keywords:["maargamu thelisina thappipoyaanu","margamu thelisena thappipoyanu","nannu neevu maruvaka","nanu nevu maruvaka","nannu nivu maruvaka","nannuneevu maruvaka","nannunivu maruvaka"],video:"",artist:"Benny Joshua and Stanley Stephen",genre:["General"],timeSignature:"6/8"},{id:l(),title:"మార్గములను సృజించువాడు (నేను సాధించలేనిది లేనే లేదు)",lyrics:`మార్గములను సృజించువాడు  
జీవితాలను వెలిగించువాడు
బ్రతుకు నావ నడిపించువాడు  
యెహోవాయే నాకుండగా (2)

నేను సాధించలేనిది లేనే లేదు  
జయించలేనిది లేనే లేదు
అసాధ్యమైనది లేనే లేదు  
విజయమెప్పుడూ నాదే (2)

1. ఎన్ని ఇక్కట్లు నాకెదురైననూ
జలములు నాపైకి లేచిననూ (2) ||నేను||

2. సంకెళ్లు నను బిగదీసిననూ
శత్రు గోడలు అడ్డుగా నిలచిననూ (2) ||నేను||`,keywords:["margamulanu srujinchuvaadu","maargamulanu srujinchu vaadu","nenu saadhinchaleenidhi leene ledhu","nenu sadhinchalenidhi lene ledhu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మార్గం సత్యం జీవం నీవే యేసు దైవం",lyrics:`మార్గం సత్యం జీవం నీవే యేసు దైవం 
నీవే గాక ఇలలో వేరే దైవం లేనేలేదయ్యా 
ప్రాణాన్ని వెలపోసి రక్తాన్ని చిందించి 
పరిహారం చెల్లించి పాప ముల్లు విరిచావేసయ్యా

ఎవరవునన్నా కాదన్న నీవే దేవుడవు 
మరణాన్నే మట్టుపెట్టిన మహా దేవుడవు (2)
యేసు రక్తమే జయం జయం-సిలువ రక్తమే జయం జయం 
యేసు నామమే జయం జయం సాతాను క్రియలకు లయం లయం

1. మరణించుటకే జన్మించావు 
చావును చంపి జీవము పంచావు 
సత్యం బోధించి మార్గము చూపావు 
చీకటి తొలగించి వెలుగును నింపావు (2)
నీవంటివారు ఎవరున్నారు-పాప్తికై ప్రాణం పెట్టినవారు (2)  ||ఎవరవునన్నా||

2. సృష్టికర్తను ఆరాధించక
సృష్టమునే ఇల ఆరాధించావు (2) 
తెలిసి తెలియక మతములు వెదికావు 
వ్రతములు చేసియు వ్యధలలో వున్నావు (2)
సిలువలో నీ వధ నాదే ఆ కథ
లయమయ్యే నాకై క్రయమయ్యావు (2)   ||ఎవరవునన్నా||`,keywords:["margam sathyam jeevam","margam satyam jevam","margam sathyam jevam","margam satyam jeevam","akumarthi daniel","4/4"],video:"",artist:"Dr. Akumarthi Daniel",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మిన్నయైన ప్రేమ చూపిన యేసయ్యా",lyrics:`మిన్నయైన ప్రేమ చూపిన యేసయ్యా
ఎన్నడైన భూమి చూడని మనసయ్యా
ఎంతగానో ఓర్చితివే వింతగా క్షమించితివే
మిన్నకుండలేము యేసయ్యా కనుగొని నీ ప్రేమను
ఎన్న తరమే కాదయ్యా లోతైన ఆ ప్రేమను

1. ద్రోహము చేసి దోషము మోపిరి
కేకలు వేసి సిలువకు నెట్టిరి
పండ్లు కొరికి చెంపలు పెరికిరి
ముండ్లను గుచ్చి మోమున ఉమ్మిరి
శ్రమ పెట్టిన కొలది క్షమ పుట్టుట సాధ్యమా ||మిన్నయైన||

2. నరుడని ఎంచి హేళన చేసిరి
శక్తిని ప్రశ్నించి నిను శంకించిరి
సవాలు విసిరి అవమానించిరి
ఛీత్కరించి వెకిలిగ నవ్విరి
సామర్థ్యము కలిగీ సహియించుట సాధ్యమా ||మిన్నయైన||

3. అలసిన నిన్ను బహు విసిగించినా
ఓటమి పాలై నిరాశ పరచినా
ఫలములు లేని తీగెగా మిగిలినా
మరలా మరలా నిను సిలువేసినా
వేధించిన కొలది ప్రేమించుట సాధ్యమా ||మిన్నయైన||`,keywords:["minnaina prema chupina yesayya","minna ayena prema chupina yesayya","minna aina prema chupina","minnaina preema chupina yesayya","good friday","lent","goodfriday"],video:"",artist:"Prabhod Kumar Adusumilli , Praveen Chokka, & Mohammed Irfan",genre:["Good Friday","Lent"],timeSignature:"6/8"},{id:l(),title:"ముద్ద బంతి పూసెనే",lyrics:`ముద్ద బంతి పూసెనే – కోయిలమ్మ కూసెనే 
ఆనందం వెల్లివిరిసెనే – ఈ బంధం నిత్యం నిలిచెనే (2) 

1. పెళ్లనే ఈ బంధం – అనురాగపు అనుబంధం
తీయనైన మకరందం –  ఇగిరిపోని సుమగంధం (2)
తోడుగా ఈడు జోడుగా – జంటగా కనుల పంటగా (2)
పండాలి బ్రతుకు నిండాలి – దాంపత్యమే వెలుగుతుండాలి (2) ||ముద్ద||

2. దేవుడే ఏర్పరచిన దివ్యమైనదీబంధం
క్రీస్తుయేసు సంఘమునకు పోల్చబడిన సంబంధం (2)
దేవుడే జత చేయగా సాధ్యమా వేరు చేయగా (2) 
కలతలే లేక సాగాలి కలలన్ని నిజము కావాలి (2) ||ముద్ద||`,keywords:["marriage","ముద్ద బంతి పూసెనే","mudda banthi pusene","mudha banthi pusene","muddha banthi poosene"],video:"",artist:"",genre:["Marriage"],timeSignature:"6/8"},{id:l(),title:"ముళ్ళ కిరీటము రక్త ధారలు",lyrics:`1. ముళ్ళ కిరీటము రక్త ధారలు
పొందిన గాయములు జాలి చూపులు
చల్లని చేతులు పరిశుద్ధ పాదములు
దిగిన మేకులు వేదన కేకలు
ఎంత గొప్పది యేసు నీ హృదయము
మా కోసమే ఇన్ని బాధలా
ఇంత ప్రేమ ఏలనో

సన్నుతింతుము సత్యవంతుడా
నిండు భక్తితో ఉప్పొంగు కృతజ్ఞతతో
యేసు నీ త్యాగము మరువలేనిది
మా జీవితాలకు విలువ నిచ్చినది

2. లోక పాపము సిలువ భారము
జనుల పక్షము ఘోర మరణము
తండ్రి కార్యము పునరుద్దానము
ఉచిత దానము నిత్య జీవము
యేసు నీ కృప మాకు చాలును
నీ నీతియే మాకు సంపద
నిన్ను కీర్తించుట దీవెన

మా విమోచకా మా రక్షణాధారమా
అందుకోవయా మా స్తుతి అర్పణములు
వందనం ప్రభు వందనం నీకు
నీ ప్రాణదానముకై సదా వందనం`,keywords:["mulla kereetamu raktha dharalu","mulla kireetamu","mulla keereetamu","good friday","lent"],video:"",artist:"Hadlee Xavier, Joel Kodali, & Allen Ganta",genre:["Good Friday","Lent"],timeSignature:"3/4"},{id:l(),title:"మెల్లని చల్లని స్వరము యేసయ్యదే",lyrics:`మెల్లని చల్లని స్వరము యేసయ్యదే
ఉల్లమంతటిని నింపు ఆనందము
అల్లకల్లోలము బాపి శాంతి నిచ్చుఁన్       ||మెల్లని||

1. శూన్యము నుండి సర్వం – సృష్టి చేసెనుగా
మంచిదంతటిని మాటతో చేసెను
పాపులను పిలిచిన ప్రేమ గల స్వరము
పావనపరచెడి పరిశుద్ధుని స్వరము       ||మెల్లని||

2. స్వస్థత శక్తి కలదు ప్రభుని స్వరమందున
దీనులను ఆదరించు దివ్య కరుణ స్వరం
కుళ్ళిన శవమునందు జీవమును పోసెను
పునరుత్తాన బలం కలదు ఆ స్వరములో       ||మెల్లని||

3. గాలి తుఫానులన్ అణచిన స్వరమది
భీతి భయములన్ని బాపెడి స్వరమది
అంత్య దినమందున మృతుల లేపునుగా
అందరికి తీర్పును తీర్చి పాలించును       ||మెల్లని||

4. మహిమ గల ఆ స్వరం పిలుచుచుండె నిన్ను
మహిమ నాథుండేసు కోరుచుండె నిన్ను
మహిమ గల ఆ స్వరం వినెడి చెవులున్నావా
మహిమ నాథుండేసున్ కోరు హృది ఉన్నదా       ||మెల్లని||`,keywords:["mellani challani swaramu yeesayyadhe","melani chalani svaramu yesayyadhe","mellanichallani"],video:"",artist:"M. S. Shanthavardhan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మేఘస్తంభమైన సన్నిధిని రూపు మార్చగల సన్నిధిని",lyrics:`మేఘస్తంభమైన సన్నిధిని రూపు మార్చగల సన్నిధిని (2)
నడిపించే సన్నిధిని నను వీడి పోనివ్వకు (2)

బలహీనుడు బలవంతుడవునే
నీ సన్నిధి వచ్చుటచే
ఏమి లేకపోయినా నిండుగా ఉండెదన్
నీ సన్నిధిలో నేను

నీ సన్నిధియే నాకు చాలయా నా హృదివాంఛ నీవెనయా (2)

1. మన్నాను పక్షులను నీటిని అందించావు అన్నియు అధికముగా ఉన్నవి(2)

అన్ని ఉండి నీవు లేకపోతే పయనం ఆగిపోవును (2)
నీవు రావా నా యొద్దకురా ఈ విశ్వాస యాత్రలో
నువ్వు నడువు నా ముందు నడువు ఈ విశ్వాస యాత్రలో (2)

నీ సన్నిధియే నాకు చాలయా నా హృదివాంఛ నీవెనయా (2)

2. ఈ లోక అధికారం రాజ కిరీటము తలపై మెరుస్తూ ఉంటున్నను (2)

అన్ని ఉండి నీవు లేకపోతే పయనం ఆగిపోవును (2)
నువ్వు రావా నా యొద్దకురా ఈ విశ్వాస యాత్రలో
నీవు నడువు నా ముందు నడువు ఈ విశ్వాస యాత్రలో (2)

నీ సన్నిధియే నాకు చాలయా నా హృదివాంఛ నీవెనయా (2)

అన్ని ఉండి నీవు లేకపోతే పయనం ఆగిపోవును (2)
నువ్వు రావా నా యొద్దకురా ఈ విశ్వాస యాత్రలో
నువ్వు నడువు నా ముందు నడువు ఈ విశ్వాస యాత్రలో (2)

నీ సన్నిధియే నాకు చాలయా నా హృదివాంఛ నీవెనయా (2)`,keywords:["ni sannidhi chalu","meghasthambamaina sannidhi","meghastambamaina sannidhi",""],video:"",artist:"Evangelist Sam Prasad, Abhi Joy, Vineela Roselin,Meronicka Shruthi, Immanuel Jacob",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"మేలుకో విశ్వాసి మేలుకో",lyrics:`మేలుకో విశ్వాసి మేలుకో
చూచుకో నీ స్థితిని కాచుకో (2)
మేలుకో విశ్వాసి మేలుకో
ఇది అంత్య కాలం.. భ్రష్టత్వ కాలం (2)
ఇహ లోక మాలిన్యం దూరపరచుకో
మదిలోని మురికినంత కడిగివేసికో    ||మేలుకో||

1. నిన్ను గూర్చి సేవ గూర్చి జాగ్రత్త
మంద యొక్క సాక్ష్యమెంతో జాగ్రత్త (2)
విశ్వాసం లేని దుష్ట హృదయము
చేదు వేరు నీవేనేమో చూడు జాగ్రత్త      ||మేలుకో||

2. ప్రేమ లేక పరిశుద్ధత కలుగునా
ధర్మశాస్త్ర సారమే ప్రేమ కదా (2)
ప్రేమ లేక ద్వేషింప బూనితే
క్రీస్తు ప్రేమ సిలువలో వ్యర్ధమే కదా      ||మేలుకో||`,keywords:["meeluko viswasi meluko","meluko visvasi meluko","meeluko viswasi meeluko"],video:"",artist:"Vidhyaarthi Geethaavali",genre:["General"],timeSignature:"6/8"},{id:l(),title:"మేలు చేయక నీవు ఉండలేవయ్య",lyrics:`మేలు చేయక నీవు ఉండలేవాయ్య
ఆరాధించక నేను ఉండలేనాయ్య (2)

యేసయ్యా...యేసయ్యా...
యేసయ్యా...యేసయ్యా (2)

1. నిన్ను నమ్మినట్లు నేను - వేరే ఎవరిని నమ్మలేదయ్యా
నీకు నాకు మధ్య దూరం - తొలగించావు వదిలుండ లే (2)
నా ఆనందం కోరేవాడా - నా ఆశలు తిర్చేవాడా (2)
క్రియలున్న ప్రేమా నీదీ - నిజమైన ధన్యతనాది || యేసయ్యా ||

2. ఆరాధించే వేళలందు - నీ హస్తములు తాకాయి నన్ను
పశ్చాతాపం కలిగే నాలో - నేను పాపిని అని గ్రహించాగానే (2)
నీ మేల్లకు అలవాటయ్యే - నీ పాదముల్ వదలకుంటేన్ (2)
నీ కిష్టమైన దారి - కనుగొంటిని నీతో చేరి || యేసయ్యా ||

3. పాపములు చేసాను నేను - నీ ముందర నా తల ఎత్తలేను
క్షమించగల్గే నీ మనసు - ఓదార్చింది నా ఆరాధనలో (2)
నా హృదయము నీతో అంది - నీకు వేరై మనలేనని (2)
అతిశయించే నిత్యమూ - నిన్నే కలిగి ఉన్నందుకు || యేసయ్యా ||`,keywords:["meelu cheyaka neevu undaleevayya","melu cheyaka neevu undalevayya","mellu cheyaka nivu","mellu cheyyaka nevu","melu cheyaka nevu","jk christopher","jkchristopher","melu cheyaka nivu undalevayya","worship"],video:"",artist:"Rev. T. Jobdas",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మేలులు చేసవయ్య - నా యేసయ్య దీవెనలిచ్చావయ్య",lyrics:`మేలులు చేసవయ్య - నా యేసయ్య దీవెనలిచ్చావయ్య (2)
కృపను చూపావయ్య - ప్రేమను పంచావయ్య (2)

చాలయ్య చాలు - ఇది చాలయ్య చాలు (2)

1. దినములన్నియు కాపాడి - దీనమనస్సుతో నేపాడి (2)
వరములిచ్చావు - స్వరమునిచ్చావు 
వరములిచ్చావు - నాకు స్వరమునిచ్చావు 

చాలయ్య చాలు - ఇది చాలయ్య చాలు 
||మేలులు చేసవయ్య||

2. మందిరములో నన్ను నాటావు
మహిమకరముగా మార్చావు (2) 
హృదిలో నిలిచావు - మదిని మార్చావు
హృదిలో నిలిచావు - నాలో మదిని మార్చావు

చాలయ్య చాలు - ఇది చాలయ్య చాలు 
||మేలులు చేసవయ్య||`,keywords:["meelulu chesavayya na yesayya","melulu chesavaya","melulu cheesavayya","melulu chesaavayya","meelulu chesavayya","meelulu cheesavaya"],video:"",artist:"Pas V.Joseph, Bro. Y.Sunil, & Sis.Mahima",genre:["General"],timeSignature:"2/4"},{id:l(),title:"మేలులు నీ మేలులు",lyrics:`మేలులు నీ మేలులు మరచిపోలేనయ్యా (2)
నా ప్రాణమున్నంత వరకు
విడచిపోలేనయ్యా  ||మేలులు||

1. కొండలలో ఉన్ననూ (నీవు) మరచిపోలేదయ్యా
శ్రమలలో ఉన్ననూ (నీవు) విడచిపోలేదయ్యా (2)
నీది గొర్రెపిల్ల మనస్సయ్యా
యేసయ్యా.. గొర్రెపిల్ల మనస్సయ్యా – (3)

2. అగ్నిలో ఉన్ననూ (నేను) కాలిపోలేదయ్యా
జలములలో వెళ్లినా (నేను) మునిగిపోలేదయ్యా (2)
నీది పావురము మనస్సయ్యా
యేసయ్యా.. పావురము మనస్సయ్యా – (3)

3. చీకటిలో ఉన్ననూ (నన్ను) మరచిపోలేదయ్యా
దుఃఖములో ఉన్ననూ (మంచి) స్నేహితుడయ్యావయ్యా (2)
నీది ప్రేమించే మనస్సయ్యా
యేసయ్యా.. ప్రేమించే మనస్సయ్యా – (3)`,keywords:["meelulu ni meelulu","melulu ni melulu","melulu nee melulu","melulu ne melulu","meelulu nee meelulu","meelulu ne meelulu"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"మేలులెన్నో చేసి",lyrics:`మేలులెన్నో చేసి కీడంత వేరు పరచి (2)
కరుణించినావు కృప చూపినావు
దయ చూపినావు దయామయుడా (2)

ఆరాధన ఆరాధన ఆరాధన యేసుకే
ఆలాపన ఆలాపన ఆలాపన యేసుకే (2)

1. భారముతో మోరపెట్టగా ఉత్తరమిచ్చావయ్యా
వేదనతో ప్రార్ధించగా జవాబును ఇచ్చావయ్య ||ఆరాధన ||

2. సూన్యములో సమస్తము కలుగజేసావయ్య
నేలమంటితో మనుష్యునిగా నిర్మించుకున్నావయా ||ఆరాధన ||`,keywords:["meelulu enno chesi","meelulenno chesi","meelulennochesi","meelulenno chese","melulenno chesi","melulu yenno chesi","meluleyenno chesi","worship","maylulenno chesi","maluleno chesi","maluleno chasi"],video:"",artist:"",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"మేళ్ళన్ని యిచ్చు దేవునిన్",lyrics:`మేళ్ళన్ని యిచ్చు దేవునిన్
స్తుతించు సర్వ సృష్టియన్
స్తుతించు మోక్ష సైన్యముల్
పితృ పుత్ర శుద్ధాత్మలన్`,keywords:["meellanichu dhevunin","meella nichu dhevuni","mellanichu dhevuni","meellanichu dhevuni","andhra christian hymns","4/4"],video:"",artist:"C. James",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"మందలో చేరని గొర్రెలెన్నో",lyrics:`మందలో చేరని గొర్రెలెన్నో- కోట్ల కొలదిగా కలవు యిల

ఆత్మల కొరకై వేదనతో వెదకెదము రమ్ము ఓ సంఘమా
రమ్మనే యేసు ప్రార్ధించుము - నడిపించును

1. అడవులలో పలు స్థలములలో 
నా ప్రజలెందుకు చావవలెన్
వారి నిమిత్తమై శ్రమ పడితి  
మరి వారిని వెదకెడు వారెవరు

2. అడవులలో పలు స్థలములలో  
నా ప్రజలెందుకు చావవలెన్
వారి నిమిత్తమై శ్రమ పడితి  
మరి వారిని వెదకెడు వారెవరు

3. నాకై పలికెడి నాలుకలు  
నావలె నడిచెడి పాదములు
నన్ను ప్రేమించెడి హృదయములు  
నాకు కావలె నీ విచ్చెదవా`,keywords:["మందలో చేరని గొర్రెలెన్నో"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మంచి కాపరి మనకుండగా",lyrics:`మంచి కాపరి మనకుండగా భయమేల ఓ సంఘమా
గొప్ప కాపరి మనకుండగా దిగులేల ప్రియ సంఘమ (2)

హల్లేలుయ (6)

1. అడిగిన ఇచెడి దేవుడు పిలిచిన పలికెడి దేవుడు
అద్వితీయుడు అతి సుందరుడు
ఆశ్చర్యకరుడు మన దేవుడు (2)

2. ప్రార్ధన వినెడి పావనుడు పరమున చేర్చే పరిశుద్ధుడు (2)
సత్య దేవుడు నీతిమంతుడు
శక్తిమంతుడు మన యేసుడు (2)`,keywords:["manchi kaapari manakundaga","manchi kapari manaku undaga","manchi kaapare","manchikapari manakundagaa","manchi kapari manaki undaga","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"మంచి వాడు నా యేసయ్య గొప్ప వాడు నా యేసయ్య",lyrics:`మంచి వాడు నా యేసయ్య
గొప్ప వాడు నా యేసయ్య
శక్తి మంతుడు నా యేసయ్య 
అని పాడి కొనియాడెదం
ఆరాధన...ఆరాధన...ఆరాధన...నీకే (2)

1. యేసు కునుకడు నిద్రించడు
నిను విడువడు ఎడబాయడు
నిన్న నేడు ఏక రీతిగా ఉన్నవాడు నా యేసయ్య... (2)

ఆరాధన...ఆరాధన...ఆరాధన...నీకే (2)

2. నా కోసమే దిగి వచ్చెను
నా పాపముల్ క్షమియించెను
ఆ సిలివలో బలి యాయేను
మృత్యుంజేయుడై తిరిగి లేచెను (2)

ఆరాధన...ఆరాధన...ఆరాధన...నీకే (2)`,keywords:["manchivaadu na yesayya","manchi vaadu","manchi vaadu na yesayya","manchivadu na yesayya","manchivadu nayesayya","manchevadu na yesayya","manchevaadu","manchevado na yesayya","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"మంచి వాడా నా యేసయ్య నే పాడే పాటకు కారనుడా",lyrics:`మంచివాడా నా యేసయ్య
నే పాడే పాటకు కారనుడా  (2)

మేలులను కోరని సహాయకుడా
దీనుడైన నన్నెన్నడు మరువని వాడ  (2)

స్తుతి నీకే ఘనత నీకే
మహిమ ఘనతకు అర్హుడవు (2)

1. ఎందరో మనుషులను చుసానయ్యా
ఎవ్వరు నీవలె లేరయ్య  (2)
నీవు లేని జీవితం వ్యర్ధం గ్రహించానయ్య
నీ మారని ప్రేమను నేను రుచించానయ్య  (2) ||స్తుతి నీకే||

2. నా హృదయ అంతరంగం ఎరిగితివి
నాకున్న ఆశలన్ని తీర్చేదవు  (2)
నీ సేవ మార్గమందు తోడు ఉంటివి
కృంగిన వేళ యందు బలపరచితివి (2) ||స్తుతి నీకే||

నీకే స్తుతి నీకే ఘనత నీకే మహిమ 
నీకే నా యేసయ్య  (4)`,keywords:["manchivaada na yesayya","sthuthi neeke","manchi vaada","manchi vaada na yesayya","manchivada na yesayya","manchivada nayesayya","manchevada na yesayya","manchevaada","john jebaraj","jebaraj","worship","4/4"],video:"https://www.youtube.com/embed/N_3krU1ZiLw?start=1591",artist:"John Jebaraj",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"మంచే లేని నా పైన ఎంతో ప్రేమ చూపావు",lyrics:`మంచే లేని నా పైన ఎంతో ప్రేమ చూపావు (2)
ఆదియంత మైనవాడవు – మానవుని రూపమెత్తావు (2)
పరలోకమును విడచి దిగి వచ్చినావు భువికి (2)
ఎంతగా .. ఎంతగా.. ఎంతగా స్తుతులు పాడినా
యేసు నీ ఋణము తీరునా (2)         || మంచే లేని||

1. లోకాలన్నీ ఏలే రారాజు వైన నీవు
సామాన్యుల ఇంట నీ కాలు పెట్టినావు (2)
నీదెంత దీన మనస్సు – నా కెంత ఘనత యేసు (2)
ఎంతగా .. ఎంతగా.. ఎంతగా స్తుతులు పాడినా
యేసు నీ ఋణము తీరునా (2)         || మంచే లేని||

2. చీకటిలో కూర్చున్న నా స్థితిని చూచి నీవు
వేకువ వెలుగు వంటి దర్శనము నిచ్చినావు (2)
నీ సాటిలేని త్యాగం – నా పాలి గొప్ప భాగ్యం (2)
ఎంతగా .. ఎంతగా.. ఎంతగా స్తుతులు పాడినా
యేసు నీ ఋణము తీరునా (2)         || మంచే లేని||`,keywords:["manche leeni naa paina","manche leeni na paina","manche leni naapaina","manche leni napaina yentho premachupavu","manche leeni napaina entho premachupavu","manche leene naapaina yentho","stevenson"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"6/8"},{id:l(),title:"మందిరములోనికి రారండి",lyrics:`మందిరములోనికి రారండి
వందనీయుడేసుని చేరండి (2)
కలవరమైనా కలతలు ఉన్నా (2)
తొలగిపోవును ఆలయాన చేరను
కలుగు సుఖములు ఆ ప్రభుని వేడను          ||మందిరము||

1. దేవుని తేజస్సు నిలిచే స్థలమిది
క్షేమము కలిగించు ఆశ్రయ పురమిది (2)
వెంటాడే భయములైనా
వీడని అపజయములైనా (2)       ||తొలగిపోవును||

2. సత్యము భోదించు దేవుని బడి ఇది
ప్రేమను చాటించు మమతల గుడి ఇది (2)
శ్రమల వలన చింతలైనా
శత్రువుతో చిక్కులైనా (2)       ||తొలగిపోవును||

3. శాంతి ప్రసాదించు దీవెన గృహమిది
స్వస్థత కలిగించు అమృత జలనిధి (2)
కుదుటపడని రోగమైనా
ఎదను తొలిచే వేదనైనా (2)       ||తొలగిపోవును||`,keywords:["mandhiramuloniki raarandi","mandhiramu lokiki rarandi","mandhiramu lookiki raaradi"],video:"",artist:"",genre:["General","Church"],timeSignature:"6/8"}],య:[{id:l(),title:"యుగయుగములకు రాజువైన యేసయ్య",lyrics:`యుగయుగములకు రాజువైన యేసయ్య
నీ ఆత్మతో నన్ను నింపుమా
యుగయుగములకు రాజువైన యేసయ్య
నీ అగ్నితో నన్ను నింపుమా

నీకై జీవించెదను నిన్నే స్తుతించెదను
నీ గొప్ప ప్రేమను ప్రకటించెద తుదివరకు (2)

1. దినదినమున అను దినమున నా ధ్యానము
నీ వాక్యం లో మాదుర్యమే వివరింపుమా
దినదినమున అను దినమున నా ధ్యానము
నీ వాక్యంలో స్థిరపచుమా (2) ||నీకై జీవించెదను||`,keywords:["yugayugamulaku","yugayugamulaku raajuvaina yesayya","yugayugamulako rajuvaina","ugaugamulaku rajuvaina","yuga yuga mulaku raju vaina","yugayuga mulaku raju vaina","yuga yuga mulaku rajuvaina","ugauga mulaku raju vaina"],video:"",artist:"",genre:["General","Prayer"],timeSignature:"4/4"},{id:l(),title:"యుగయుగాలు మారిపోనిది - తరతరాలు తరిగిపోనిది",lyrics:`యుగయుగాలు మారిపోనిది
తరతరాలు తరిగిపోనిది
ప్రియ యేసు రాజు నీ ప్రేమా
నిను ఎన్నడు వీడిపోనిది
నీకు ఎవ్వరు చూపలేనిది
ఆశ్చర్య అద్భుత కార్యమ్ము చేయు ప్రేమది
హద్దే లేని ఆ దివ్య ప్రేమతో
కపటమే లేని నిస్స్వార్ధ్య ప్రేమతో
నీ కోసమే బలి అయిన దైవము రా (2)

1. లోకంతో స్నేహమొద్దు రా
చివరికి చింతే మిగులు రా
పాపానికి లొంగిపోకు రా
అది మరణ త్రోవ రా (2)
నీ దేహం దేవాలయము రా
నీ హృదయం క్రీస్తుకి కొలవురా (2)      ||హద్దే||

2. తను చేసిన మేలు ఎట్టిదో
యోచించి కళ్ళు తెరువరా
జీవమునకు పోవు మార్గము
క్రీస్తేసుని ఆలకించారా (2)
నీ ముందర పందెము చూడరా
విశ్వాసపు పరుగులో సాగరా (2)      ||హద్దే||`,keywords:["yugayugaalu maaripoonidhi","yugayugalu mariponidhi","raj prakash paul"],video:"",artist:"Raj Prakash Paul",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యుద్ధము యెహోవాదే",lyrics:`యుద్ధము యెహోవాదే - యుద్ధము యెహోవాదే (2)

1. రాజులు మనకెవ్వరులేరు శూరులు మనకెవ్వరులేరు
సైన్యములకు అదిపతియైన యెహోవా మన అండ (2)
యుద్ధము యెహోవాదే - యుద్ధము యెహోవాదే (2)

2.వ్యాధులు మనలను పడద్రోసినా భాదలు మనలను కృంగదీసిన
విశ్వాసమునకు కర్తయైన యేసయ్య మన అండ (2)
యుద్ధము యెహోవాదే - యుద్ధము యెహోవాదే (2)

3. యెరికో గోడలు ముందున్న ఎర్ర సముద్రం ఎదురైన
అద్భుత దేవుడు మనకుండ భయమేల మనకింక (2)
యుద్ధము యెహోవాదే - యుద్ధము యెహోవాదే (2)

4. అపవాది యైన సాతాను గర్జించు సింహమువలె వచ్చినా
యూదా గోత్రపు సింహమైన యేసయ్య మన అండ
యుద్ధము యెహోవాదే - యుద్ధము యెహోవాదే (2)`,keywords:["yudhamu yehovadhe","yudhamu yeehovadhe","udhamu yehovadhe","yudhamu yehoovadhe","yudham yehovadhe"],video:"",artist:"Anil Kumar",genre:["General"],timeSignature:"2/4"},{id:l(),title:"యెహోవా గద్దె ముందట",lyrics:`1. యెహోవా గద్దె ముందట
జనంబులార మ్రొక్కుడి
యెహోవా దేవుడే సుమీ
సృజింప జంప గర్తయే   ||యెహోవా||

2. స్వశక్తిచేత నాయనే
మమున్ సృజించె మట్టిచే
భ్రమించు గొర్రే రీతిగా
దప్పంగ మళ్లీ చేర్చెను    ||యెహోవా||

3. సుకీర్తి పాడి గుంపులై
ప్రసిద్ధిచేత మాయనన్
జగత్తు వేయ్యి నోళ్ళతో
స్తుతించు దివ్యమౌ ధ్వనిన్    ||యెహోవా||

4. ప్రభుత్వ ముండు  నంతకున్
అగున్ నీ ప్రేమ నిత్యము
చిరంబు నీదు సత్యము
వసించు నెల్లకాలము     ||యెహోవా||`,keywords:["yehova gadhe mundata","yehova gadhe mundataa","yehova gadhemundata","yehova gadhe mundhata","yehova gadhe mundhataa","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"యెహోవా నా కాపరి",lyrics:`యెహోవా నా కాపరి 
నాకు లేమి కలుగదు 

1. శాంతి కరమైన జలముల యొద్ద 
నన్ను నడిపించావు 
చీరకాలము నీ మందిరములో 
నే నివాసము చేసెదను 

యేసయ్య నీకే నా వందనం 
యేసయ్య యేసయ్య

2. గాదంధా కారపు లోయలలో 
నే సంచరించినను 
యే ఆపాయము నాకు రాదు 
నీవు నాకు తోడు నీడ 
యేసయ్య నీకే నా వందనం 
యేసయ్య యేసయ్య 

పరలోకము విడచి శరీరం ధరించి 
నా కోరకే బలి అయిన కాపరి నీవే కదా`,keywords:["యెహోవా నా కాపరి","john erry","johnerry","yehiva na kapari","yeehiva naa kaapari","yehova na kaapari"],video:"",artist:"John Erry, Stanley Sajeev",genre:["General"],timeSignature:"3/4"},{id:l(),title:"యెహోవా నా దేవా నీ దయలో కాయుమా",lyrics:`యెహోవా నా దేవా నీ దయలో కాయుమా (2)
ఎన్నికే లేని నన్ను ప్రేమించితివే - ఏలికగా నను మలచితివే
(2) ||యెహోవా||

1. నా నీతికి ఆధారమగు దేవా - నేను మొరపెట్టగా (2)
ఇరుకులలో నేను కృంగినప్పుడు - నాకు విశాలత కలిగించుమా! (2)
నన్ను కరుణించుమా - నాపై కృప చూపుమా!   ||యెహోవా||

2. నరులెల్లరు ఎంత కాలం - నా కీర్తిననిచెదరు (2)
పనికిరాని వాటిని ప్రేమించెదరు
నేరాలుగా వాటిని మలిచెదరు (2) 
నన్ను కరుణించుమా - నాపై కృప చూపుమా!  ||యెహోవా||

3. యెహోవా శాంతి నాకు దయచేసి - సమాధానమిచ్చితివే (2)
ధాన్య ద్రాక్షముల కన్నా అధికముగా నీవు - ఆనందముతో నింపితివే! (2)
నన్ను నియమించితివే - నాలో ఫలించితివే! 

యెహోవా నా దేవా నీ దయలో కాచితివే (2)
పాపినైన నన్ను ప్రేమించితివే - నీ వారసునిగా నిలిపితివే (2)||యెహోవా||`,keywords:["yehova na deva","yehova naa deeva ni dhayalo","yehova na dheva ni dhayalo","yehova naadheva"],video:"",artist:"Bro. P. James & Moses Dany ",genre:["General","Prayer"],timeSignature:"4/4"},{id:l(),title:"యెహోవా నా బలమా",lyrics:`యెహోవా నా బలమా
యదార్థమైనది నీ మార్గం
పరిపూర్ణమైనది నీ మార్గం (2)   ||యెహోవా||

1. నా శత్రువులు నను చుట్టిననూ
నరకపు పాశములరికట్టిననూ (2)
వరదవలె భక్తిహీనులు పొర్లిన (2)
విడువక నను ఎడబాయని దేవా (2)  ||యెహోవా||

2. మరణపుటురులలో మరువక మొరలిడ
ఉన్నతదుర్గమై రక్షనశృంగమై (2)
తన ఆలయములో నా మొఱ్ఱ వినెను (2)
ఆదరెను ధరణి భయకంపముచే (2)  ||యెహోవా||

3. నా దీపమును వెలిగించువాడు
నా చీకటిని వెలుగుగా చేయును (2)
జలరాసులనుండి బలమైన చేతితో (2)
వెలుపల చేర్చిన బలమైన దేవుడు (2)   ||యెహోవా||

4. పౌరుషముగల ప్రభు కొపింపగా
పర్వతముల పునాదులు వణకెను (2)
తన నోటనుండి వచ్చిన అగ్ని (2)
దహించివేసెను వైరులనెల్లన్ (2)   ||యెహోవా||

5. మేఘములపై ఆయన వచ్చును
మేఘములను తన మాటుగ జేయును (2)
ఉరుముల మెరుపుల మెండుగ జేసి (2)
అపజయమిచ్చును అపవాదికిని (2)   ||యెహోవా||

6. దయగలవారిపై దయ చూపించును
కఠినులయెడల వికటము జూపును (2)
గర్విష్టుల యొక్క గర్వమునణుచును (2)
సర్వమునెరిగిన సర్వాధికారి (2)   ||యెహోవా||

7. నా కాళ్ళను లేడి కాళ్లుగా జేయును
ఎత్తైన స్థలములో శక్తితో నిలిపి (2)
రక్షణ కేడెము నాకందించి (2)
అక్షయముగ తన పక్షము జేర్చిన (2)  ||యెహోవా||

8. యెహోవా జీవముగల దేవా
బహుగా స్తుతులకు అర్హుడ నీవే (2)
అన్యజనులలో ధన్యత చూపుచు (2)
హల్లెలూయ స్తుతిగానము చేసెద (2)  ||యెహోవా||`,keywords:["yehova na balama","yehovaa na balama","yehoova naa balama","yehova na balamaa","yahova na balama","yahovaa naa balama","yahova naa balama","yehova na balamu","yehowa na balama","yahowa na balama"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"యెహోవ నా మొర లాలించెను",lyrics:`యెహోవ నా మొర లాలించెను
దన మహా దయను నను గనించెను
అహర్నిశల దీనహీనుడగు నా
దు హాయనెడు ధ్వని గ్రహించి మనిపెను     ||యెహోవ||

పిశాచి గడిమి బడగొట్టెను
దన వశాన నను నిలువ బెట్టెను
ప్రశాంత మధుర సు విశేష వాక్ఫల
నిశాంతమున జే ర్చి సేద దీర్చెను     ||యెహోవ||

మదావలము బోలు నా మదిన్
దన ప్రదీప్త వాక్యం కూశా హతిన్
యధేచ్చలన్నిటి గుదించి పాపపు
మొదల్ తుదల్ నరి కి దరికి జేర్చెను     ||యెహోవ||

అనీతి వస్త్ర మెడలించెను
యే సునాథు రక్తమున ముంచెను
వినూత్న యత్నమే ద నూని యెన్నడు
గనన్ వినన్ బ్రే మ నాకు జూపెను      ||యెహోవ||

విలాపములకు జెవి నిచ్చెను
శ్రమ కలాపములకు సెలవిచ్చెను
శిలానగము పై కిలాగి నను సుఖ
కళావళుల్ మన సులోన నిలిపెను   ||యెహోవ||

అగణ్య పాపియని త్రోయక
న న్ను గూర్చి తన సుతుని దా చక
తెగించి మృతి కొ ప్పగించి పాపపు
నెగుల్ దిగుల్ సొగ సుగా నణంచెను    ||యెహోవ||`,keywords:["yehova na mora laalinchenu","yehova namora lalinchenu","yeehova naamora laalinchenu","yehovanamora laalinchenu","yehova namora laalinchenu","andhra christian hymn","4/4"],video:"",artist:"Purushotham Chowdary",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"యెహోవా మా తండ్రి గాఁడ",lyrics:`యెహోవా మా తండ్రి గాఁడ యేసుఁడు మా యన్న గాఁడ మహిమ
గల శుద్ధాత్మ యిట్టి వరుసఁ దెలిపెం గద మాతోడ ||యెహోవా||

1. మోక్ష నగరు మా పుట్టిల్లు ముఖ్య దూతల్ మా స్నేహితులు సాక్షాత్కారమై
యున్నపుడు లక్ష్యపెట్ట మిహ బాధలకు ||యెహోవా||

2. అబ్రాహాము దావీదు మొదలై నట్టి వర భక్తాగ్రేసరులే శుభ్రముగ మా
చుట్టా లైనన్ హర్షమిఁక మా కేమి కొదువ ||యెహోవా||

3. పేతు రాది సకలాపోస్తుల్ పేర్మిగల మా నిజ వర కూటస్థుల్ ఖ్యాతి సభలో
మే మున్నప్పుడు ఘనతలిక మాకేమి వెలితి ||యెహోవా||


4. తనువు బలిపెట్టెను మా యన్న తప్పు ల్విడఁ గొట్టెను మా తండ్రి
మనసులో సాక్ష్యమిట్లున్న మనుజు లెట్లన్నను మా కేమి ||యెహోవా||

5. పరమ విభు జీవగ్రంథములోఁ బ్రభుని రక్తాక్షరముద్రితమె చిరముగా
నుండు మా పేరు చెఱుపు బెట్టెడువా రింకెవరు ||యెహోవా||

6. కరములతో నంట రాని కన్నులకు గోచరము గాని పరమ ఫలముల్
మా కున్నపుడు సరకు గొన మిక్కడి లేములకు ||యెహోవా||`,keywords:["yehova maa thandri gaada","yehova ma tandri gada","yahova ma thandri gada","yahova maa thandri gaada","yahova ma thandri gaada","andhra christian hymns","7/8"],video:"",artist:"Purushotham Chowdary",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"యెహోవా యీరే చాలిన దేవుడవు",lyrics:"",keywords:["yehova yire chaalina dhevudavu","worship","yahova yire chalina dhevudavu","yehova yeere chalina dhevudavu","yehoova yeere chalina devudavu","yevoha eere chalina","yehova ee rey","yehova eerey","ehova yere chalina devudavu"],video:"",artist:"",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"యెహోవా యీరే సమస్తము నీవే (నీవే చూచువాడవు)",lyrics:`యెహోవా యీరే సమస్తము నీవే
అక్కరలన్ని తీర్చువాడవు
ఊహించువాటికన్నా అధికమిచ్చి
నా ప్రార్థనలన్నిటికి బదులిచ్చితివి
యెహోవా యీరే సమస్తము నీవే
అక్కరలన్ని తీర్చువాడవు

1. అనుదినము నన్ను ఆశ్చర్యముగా పోషించితివి
అపనిందలు ఎదురైనను ఘనపరచితివి
యెహోవా యీరే సమస్తము నీవే
అక్కరలన్ని తీర్చువాడవు

ఆరాధన ఆరాధన ఆరాధన నీకే
ఆరాధన ఆరాధన ఆరాధన నీకే

యెహోవా యీరే సమస్తము నీవే
అక్కరలన్ని తీర్చువాడవు
యెహోవా యీరే సమస్తము నీవే
నీవే చూచువాడవు`,keywords:["yehova yire","yehoova eere","yehoova eerey","yehoova yeerey","yehova yeerey","yehova yerey","yeerey","yehova yeere","yahova yire","yahova yeere","neeve chuchuvaadavu","neevey chuchu vadavu","neve chuchu vadavu","ehova ere","yahova yere","yihova yire","yahoova","yihoova","yahova","yehova","yehoova","benny joshua","worship"],video:"https://www.youtube.com/embed/Kw_Srg4wuuw?start=1153",artist:"Benny Joshua",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"యెహోవాను - దర్శింతును",lyrics:`యెహోవాను - దర్శింతును
మహోన్నతుడైనా - దేవుని  (2)

నమస్కరించి - ఆరాధింతు
న్యాయము గానే - యేసు నీ ఎదుట (2)
||యెహోవాను||

1. వేలాది పొట్టేళ్లను - ప్రభు నన్ను కోరలేదే
విస్తార తైలమును - అర్పింపమనలేదే  (2)
||నమస్కరించి||

2. నా అతిక్రమములకై - జేష్టపుత్రుని నీకిత్తునా 
పాప పరిహారముకై - గర్భఫలం  అర్పింతునా (2)
||నమస్కరించి||

3. నీ ఆత్మ సత్యముతో - తండ్రి యేసు నన్ను నింపు 
జీవం మార్గం నీవే - నన్ను నీకు అర్పింతును    (2)
||నమస్కరించి||`,keywords:["yehovanu dharsinthunu","yehovanu darsinthunu","yehovanu darsintunu","yehovanu dharsintunu"],video:"",artist:" E.Jerusha swamy, JK Christopher, Lilian Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యెహోవాను స్తుతించుట ఎంతో మంచిది",lyrics:`యెహోవాను స్తుతియించుట ఎంతో మంచిది (2)
మహోన్నతుడా నీ నామము కీర్తించుట మంచిది (2)
మంచిది ఇది మంచిది నిన్ను స్తుతియించుట మంచిది (2)

1. యెహోషువ స్తుతియించగా ఎరికో గోడలు కూల్చావయ్య (2)
నీ స్తుతిలో ఉన్నది శక్తి - ఆ శక్తిలో మాకు విముక్తి (2) ||మంచిది||

2. పౌలు సిలా స్తుతియించగా చెరసాల నుండి విడిపించావయ్య (2)
నీ స్తుతిలో ఉన్నది శక్తి - ఆ శక్తిలో మాకు విముక్తి (2) ||మంచిది||`,keywords:["yehovanu sthuthiyinchuta","yehovanu stutiyinchuta","yehovanu sthutiyinchuta","yehovaanu sthuthiyinchuta","yehoovanu sthuthiyinchuta","worship","yahovanu sthuthiyinchuta","yehovanu","yahovanu","yehoovanu","yehoovaanu","yahoovaanu","yahoovano","yehovaanoo","yehovanu sthuthinchuta","yehoovanu sthuthinchuta"],video:"",artist:"",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"యెహోవా నీదు మేలులను",lyrics:`యెహోవా నీదు మేలులను – ఎలా వర్ణింపగలను
కీర్తింతును నీదు ప్రేమను – దేవా అది ఎంతో మధురం

దైవం నీవయ్యా పాపిని నేనయ్యా
నీదు రక్తముతో నన్ను కడుగు
జీవం నీవయ్యా జీవితం నీదయ్యా
నీదు సాక్షిగా నన్ను నిలుపు
కారణ భూతుడా పరిశుద్ధుడా
నీదు ఆత్మతో నన్ను నింపు
మరనాత యేసు నాథా
నీదు రాజ్యములో నన్ను చేర్చు

1. ఘనుడా సిల్వ ధరుడా
అమూల్యం నీదు రుధిరం (2) ఓ…
నిన్ను ఆరాధించే బ్రతుకు ధాన్యం
నీతో మాట్లాడుటయే నాకు భాగ్యం
ఓ మహోన్నతుడా నీకే స్తోత్రం
సర్వోన్నతుడా నీకే సర్వం   ||యెహోవా||

2. ప్రియుడా ప్రాణ ప్రియుడా
వరమే నీదు స్నేహం (2)
నా రక్షణకై పరమును వీడే
నా విమోచనకై క్రయ ధనమాయె
ఓ మృత్యుంజయుడా నీకే స్తోత్రం
పరమాత్ముడా నీకే సర్వం   ||యెహోవా||`,keywords:["yehova nedhu melulanu","yehoova needhu meelulanu","yehova needhu melulanu","yavoha nedhu melulanu","yehova nedu melulanu","yehova nidhu melulanu","yehova nidu melulanu","yehova nedhumelulanu","yehovanedhu melulanu","yehovanidhu melulanu","raj prakash paul","Worship","3/4"],video:"",artist:"Raj Prakash Paul",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"యెహోవా నీ నామము ఎంతో బలమైనది",lyrics:`యెహోవా నీ నామము ఎంతో బలమైనది
ఆ...ఆ...ఆ... ఎంతో బలమైనది
యేసయ్య నీ నామము ఎంతో ఘనమైనది
ఆ...ఆ...ఆ... ఎంతో ఘనమైనది  || యెహోవా ||

1. మోషే ప్రార్ధించగా మన్నాను కురిపించితివి (2)
యెహోషువా ప్రార్ధించగా సూర్యచంద్రుల నాపితివి (2)  || యెహోవా ||

2. నీ ప్రజల పక్షముగా యుద్దములు చేసిన దేవా (2)
అగ్నిలో పడవేసినా భయమేమి లేకుండిరి (2)   || యెహోవా ||

3. సింహాల బోనుకైనా సంతోషముగా వెళ్ళిరి (2)
ప్రార్ధించిన వెంటనే రక్షించె నీ హస్తము (2)    || యెహోవా ||

4. చెరసాలలో వేసినా సంకెళ్ళు బిగియించినా (2)
సంఘము ప్రార్ధించగా సంకెళ్ళు విడిపోయెను (2)  || యెహోవా ||

5. పౌలు సీలను బంధించి చెరసాలలో వేసినా (2)
పాటలతో ప్రార్ధించగా చెరసాల బ్రద్దలాయే (2)   ||యెహోవ||`,keywords:["yehova ni naanamu","yehova ni namamu","yeehoova ni naamamu","yehova nee naanam","yehoba ne namam","yehoova ni naamam","yehoova ni namam","yehovaa ne namam","andhra christian hymn","worship","3/4"],video:"",artist:"",genre:["Andhra Christian Hymn","General","Worship"],timeSignature:"3/4"},{id:l(),title:"యెహోవ సన్నిధిని నీ",lyrics:`యెహోవ సన్నిధిని నీ స్తోత్రగానముతో మహోపకారునకు మానుగ
నర్పణ సమర్పించుఁడి ||యెహోవ||

1. ప్రభు వడుగు నర్పణలు ప్రేమ కృతజ్ఞతలు అభయ ప్రధానములు
విభునకు నియ్యుఁడు విరివిగను ||యెహోవ||

2. రిక్తహస్తములతో రావలదు సన్నిధికి భక్తవత్సలునకు శక్తికొలఁది
మీ రర్పించుఁడి ||యెహోవ||

3. శృంగారాలయ మీలలోఁ పొంగారఁ గట్టుటకు బంగారు వెండి యును
బాగుగ నియ్యుఁడి ప్రభుపేర ||యెహోవ||

4. వరుమానములచేత వాంఛింప వలదండి గురు నాజ్ఞ చొప్పునను
విరివిగ హృదయము లర్పించుఁడి ||యెహోవ||

5. యెహోవ జనులారా యియ్యుండి మనసార యెహోవ యిచ్చి నది
యేసున కర్పణ చెల్లింతము ||యెహోవ||`,keywords:["yehova sannidhini","yehova sanidhini","ehova sannidhini","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"యేసయ్యా నాకంటూ ఎవరు లేరయ్యా",lyrics:`యేసయ్యా నాకంటూ ఎవరు లేరయ్యా (2)
నిన్ను నమ్మి నే బ్రతుకుచుంటిని
నిన్ను వెదకుచూ పరుగెత్తుచుంటిని
చూడు యేసయ్యా – నన్ను చూడు యేసయ్యా
చేయిపట్టి నన్ను నీవు నడుపు యేసయ్యా (2) ||యేసయ్యా||

1. కలతలెన్నో పెరుగుతుంటే కన్నీరైతిని
బయట చెప్పుకోలేక మనసునేడ్చితి (2)
లేరు ఎవరు వినుటకు
రారు ఎవరు కనుటకు (2) ||చూడు యేసయ్యా||

2. లోకమంత వెలివేయగ కుమిలిపోతిని
నమ్మినవారు నను వీడగ భారమాయెను (2)
లేరు ఎవరు వినుటకు
రారు ఎవరు కనుటకు (2) ||చూడు యేసయ్యా||`,keywords:["yesayya naakantu evaru leerayya","yesaya nakantu evaru leraya","yesayya nakantu yevaru lerayya","yesayya naakantu yevaru lerayya"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"యేసయ్య నీ ప్రేమ నా సొంతము",lyrics:`యేసయ్య నీ ప్రేమ నా సొంతము - నాలోన పలికిన స్తుతిగీతము
యేసయ్య నీవేగ తొలికిరణము - నాలోన వెలిగిన రవికిరణము 
ఏనాడు ఆరని నా దీపము - నా జీవితానికి ఆధారము 
ఇమ్మానుయేలుగా నీ స్నేహము - నాలోన నిత్యము ఒక సంబరం 

1. ఏపాటి నన్ను ప్రేమించినావు - నీ ప్రేమలోనే నను దాచినావు 
నా భారమంతా నువు మోసినావు - నన్నెంతగానో హెచ్చించినావు

నీ కృపలోనే నను కాచినావు - నీ కనికరమే చూపించినావు 
నా హృదిలోనే నీ వాక్యధ్యానం - నా మదిలోనే నీ నామస్మరణం 

నిన్నే ఆరాధించి - నీ దయలో నే జీవించి 
నిన్నే నే పూజించి - నీలో నే తరియించీ 

2. ఏనాడు నన్ను విడనాడలేదు - నీ నీడలోనే నడిపించినావు 
 లోకాలనేలే రారాజు నీవే - నా జీవనావకు రహదారి నీవే 

నా గురి నీవే నా యేసుదేవా - చేరితి నిన్నే నా ప్రాణనాథా 
పర్వత శిఖరం నీ మహిమ ద్వారం - ఉన్నతమైనది నీ దివ్య చరితం 

సాటే లేరు నీకు - సర్వాథికారివి నీవు 
మారని దైవం నీవు - మహిమోన్నతుడవు నీవు`,keywords:["yesayya ni prema na sonthamu","yesayya nee prema naa sonthamu"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Javed Ali",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసయ్యా యేసయ్యా… నీదెంత జాలి మానసయ్యా",lyrics:`యేసయ్యా యేసయ్యా… నీదెంత జాలి మానసయ్యా
యేసయ్యా యేసయ్యా… నీదెంత దొడ్డ గుణమయ్యా
నిన్ను సిలువకు వేసి మేకులేసినోల్ల చేతులే
కందిపోయెనేమో అని కళ్ళ నీళ్లు పెట్టుకున్నావోడివి ||యేసయ్యా||

1. ఒంటి నిండ రగతం – గొంతు నిండ దాహం
అయ్యో.. ఆరిపోవు దీపం
అయినా రాదు నీకు కోపం
గుండెలోన కరుణ – కళ్ళలోన పొంగి
జారే కన్నీళ్లు మాత్రం
పాపం చేసినోల్ల కోసం ||యేసయ్యా||

2. నమ్మినోల్ల పాపం – మోసినావు పాపం
నిను మోసి కట్టుకుంది పుణ్యం
ఆహా సిలువదెంత భాగ్యం
ఓడిపోయి మరణం – సాక్ష్యమిచ్చుఁ తరుణం
మళ్ళీ లేచి వచ్చుఁ నిన్నే
చూసిన వారి జన్మ ధన్యం ||యేసయ్యా||`,keywords:["yesayya yesayya","yeesayya yeesayya","yesayya yesayya nidhentha jaali manasayya","yesayya yesayya needhi entha jaali manasayya","yesayyaa yesayyaa","yasayya yasayyaa","6/8"],video:"",artist:"M. M. Keeravani",genre:["Lent"],timeSignature:"6/8"},{id:l(),title:"యేసయ్యా వందనాలయ్యా నీ ప్రేమకు వందనాలయ్యా",lyrics:`యేసయ్యా వందనాలయ్యా నీ ప్రేమకు వందనాలయ్యా
యేసయ్యా వందనాలయ్యా
నీ ప్రేమకు వందనాలయ్యా (2)
నన్ను రక్షించినందుకు పోషించినందుకు
కాపాడినందుకు వందనాలయ్యా (2)

వందనాలు వందనాలయ్యా 
శతకోటి స్తోత్రాలయ్యా (2)
||యేసయ్యా వందనాలయ్యా||

1. నీ కృపచేత నన్ను రక్షించినందుకు
వేలాది వందనాలయ్యా
నీ దయచేత శిక్షను తప్పించినందుకు
కోట్లాది స్తోత్రాలయ్యా (2)

నీ జాలి నాపై కనపరచినందుకు
వేలాది వందనాలయ్యా
నీ ప్రేమ నాపై కురిపించినందుకు
కోట్లాది స్తోత్రాలయ్యా (2)

వందనాలు వందనాలయ్యా 
శతకోటి స్తోత్రాలయ్యా (2)
||యేసయ్యా వందనాలయ్యా||

2. జీవ గ్రంధములో నా పేరుంచినందుకు
వేలాది వందనాలయ్యా
పరలోక రాజ్యంలో చోటిచ్చినందుకు
కోట్లాది స్తోత్రాలయ్యా (2)
నన్ను నరకమునుండి తప్పించినందుకు
వేలాది వందనాలయ్యా 
నీ సాక్షిగ ఇలలో నన్నుంచినందుకు
కోట్లాది స్తోత్రాలయ్యా

వందనాలు వందనాలయ్యా 
శతకోటి స్తోత్రాలయ్యా (2)
||యేసయ్యా వందనాలయ్యా||`,keywords:["yesayya vandhanaalayya","yeesayya vandhanalayya","yesayya vandhanalayyaa","worship"],video:"",artist:"KJ Philip",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"యేసు కోసమే జీవిద్దాం",lyrics:`యేసు కోసమే జీవిద్దాం యేసుతోనే పయనిద్దాం
యేసుని పోలి నడిచే సాక్షులం
యేసు విలువలు కలిగుందాం యేసు పిలుపునకు లోబడదాం
లోకములో యేసుని ప్రతినిధులం

శోధనలెదురైనా అవరోధములెన్నున్నా
విశ్వాసములో నిలకడగా నిలిచుందాం కడవరకు
ఈ జీవిత యాత్రలో లోతులు కనబడినా
లోబడకుందుము లోకముకు ఏ సమయములోనైనా        ||యేసు కోసమే||

1. నిందారహితులుగా జీవించుట మన పిలుపు
నీతియు పరిశుద్ధతయు ప్రభు కోరే అర్పణలు
యదార్ధవంతులుగా ఒక మంచి సాక్ష్యము
లోకమునకు కనపరచుటయు దేవుని పరిచర్యే
ప్రేమయు సహనము యేసుని హృదయము
కలిగుండుటకు పోరాడెదం ఆశతో అనుదినము       ||యేసు కోసమే||

2. యేసు స్వభామును ధరించిన వారలము
మరణం గెలిచిన క్రీస్తుని ప్రకటించే శిష్యులము
సంకటములు ఎదురైనా అవి అడ్డుగా నిలిచినను
రోశముగల విశ్వాసముతో ఆగకనే సాగెదము
రాజులు జనములు యేసుని చూచెదరు
విశ్వాసులు విశ్వాసములో స్థిరముగ ఉన్నప్పుడు       ||యేసు కోసమే||`,keywords:["yesu kosame jeevidham","yeesu kosame jeeviddham","yesu kosame jeevidham","yeesu kosame jividham","yesu kosame jevidham","yesu kosame jivedham","yesu kusame jevidam","enosh kumar","yesukosame jeevidham","4/4"],video:"",artist:"Enosh Kumar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసు గొరియ పిల్లను నేను",lyrics:`యేసు గొరియ పిల్లను నేను
వధకు తేబడిన గొరియ పిల్లను (2)
దినదినము చనిపోవుచున్నాను
యేసు క్రీస్తులో బ్రతుకుతున్నాను (2)       ||యేసు గొరియ||

1. నా తలపై ముళ్ళు గుచ్చబడినవి
నా తలంపులు ఏడుస్తున్నవి (2)
నా మోమున ఉమ్మి వేయబడినది
నా చూపులు తల దించుకున్నవి (2)       ||యేసు గొరియ||

2. నా చేతుల సంకెళ్ళు పడినవి
నా రాతలు చెరిగిపోతున్నవి (2)
నా కాళ్ళకు మేకులు దిగబడినవి
నా నడకలు రక్త సిక్తమైనవి (2)      ||యేసు గొరియ||`,keywords:["yeesu goriya pillanu","yesu goriya pillanu nenu","yesu gorre pillanu nenu","eesu goriya pillanu nenu","eesu gorre pillanu nenu"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"యేసుతో ఠీవిగాను పోదమా",lyrics:`యేసుతో ఠీవిగాను పోదమా
అడ్డుగా వచ్చు వైరి గెల్వను
యుద్ధనాదంబుతో బోదము  ||యేసుతో||

1. రారాజు సైన్యమందు చేరను
ఆ రాజు దివ్య సేవ చేయను (2)
యేసు రాజు ముందుగా ధ్వజము బట్టి నడువగా (2)
యేసుతో ఠీవిగాను వెడలను    ||యేసుతో||

2. విశ్వాస కవచమును ధరించుచు
ఆ రాజు నాజ్ఞ మదిని నిల్పుచు (2)
అనుదినంబు శక్తిని పొందుచున్నవారమై (2)
యేసుతో ఠీవిగాను వెడలను    ||యేసుతో||

3. శోధనలు మనల చుట్టి వచ్చినా
సాతాను అంబులెన్ని తగిలినా (2)
భయములేదు మనకిక ప్రభువు చెంత నుందుము (2)
యేసుతో ఠీవిగాను వెడలను   ||యేసుతో||

4. ఓ యువతి యువకులారా చేరుడి
శ్రీ యేసురాజు వార్త చాటుడి (2)
లోకమంత ఏకమై యేసునాథు గొల్వను (2)
సాధనంబెవరు నీవు నేనెగా    ||యేసుతో||`,keywords:["yesu tho teeviganu podhama","yeesu tho teevigaanu podhama","yesu tho teeviga podhama","andhra christian hymns","6/8"],video:"",artist:"A. C. Kinsingar, P. D. Shubhamani",genre:["Andhra Christian Hymn"],timeSignature:"6/8"},{id:l(),title:"యేసు దేవుని ఆశ్రయించుమా",lyrics:`యేసు దేవుని ఆశ్రయించుమా
సోదరా సోదరీ ఈ క్షణమే
విశ్వసించుమా తండ్రిని వేడుమా
గొప్పకార్యాలు జరుగును నీ యెదుటే
స్వస్థత లేక… సహాయము లేక… సోలిపోయావా?
యేసు నామములోనే స్వస్థత – యేసు కృపలోనే భద్రత
యేసు రక్తములోనే విమోచన – యేసే నడిపించును జీవమార్గాన

1. రోగియైన దాసుని కొరకు
శతాధిపతి యేసు ప్రభుని వేడుకొనెను
మాట మాత్రం సెలవిమ్మనగా
విశ్వసించిన ప్రకారమే స్వస్థతను పొందెను
విశ్వసించి అడుగుము అద్భుతాలు జరుగును (2)
యేసు నందు విశ్వాసముంచుము (2)    ||యేసు నామములోనే||

2. దుఃఖ స్థితిలో హన్నా తన ఆత్మను
దేవుని సన్నిధిని కుమ్మరించుకొనెను
మొక్కుబడి చేసి ప్రార్థించెను
దీవింపబడెను కుమారుని పొందెను
నీవు అడుగుము నీకివ్వబడును (2)
యేసుని ప్రార్థించుము (2)    ||యేసు నామములోనే||

3. శోధనలనైనా సమస్తమును కోల్పోయిన
యోబువంటి విశ్వాసం గమనించుమా
యధార్ధతతో నిరీక్షించెను
రెండంతల దీవెనలు పొందుకొనెను
సహనము చూపుము సమకూడి జరుగును (2)
యేసు నందు నిరీక్షించుము (2)    ||యేసు నామములోనే||`,keywords:["yesu dhevuni","yeesu dheevuni","yeesu dhevuni","yesu devuni","yesu namamulone swasthatha","yesu dheevuni","jk christopher","jkchristopher","sharon sisters","sharonsisters","4/4"],video:"",artist:"Lilian Christopher",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసు నామమే జయము ప్రభు యేసు నామమే అభయం",lyrics:`యేసు నామమే జయము ప్రభు యేసు నామమే అభయం
ఏ చోటనైన ఏ నోటనైన ఉచ్చరించు నామం (2) ||యేసు నామమే||

1. ఓటమి లేకుండా విజయము ఇస్తాడు
ఓడిపోకుండా అభయము ఇస్తాడు (2)
నీడల్లె ఉంటాడు నీకు తోడై ఉంటాడు (2) ||యేసు నామమే||

2. పాదాలు జారకుండ ఎత్తుకుంటాడు
కన్నిళ్ళు కారకుండా కనుపాపల్లె చూస్తాడు (2)
వెన్నెంటె ఉంటాడు నీకు తొడై ఉంటాడు (2)

3. కష్టం రాకముందే న చెంతకొస్తాడు
నష్టము రాకుండా తన హస్తాన్ని చాస్తాడు (2)
నాతోనే ఉంటాడు తన ధైర్యాన్నిస్తాడు (2)`,keywords:["yesu namame jayamu","yeesu naamame jayamu","yesu naamame jayamu","eesu namame jayamu","yesu naaname jayam","yesunamame jayamu","yeesunamame jayamu","yesunamamejayamu","yesu naamame jayamo","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసు నామం గొప్ప నామం",lyrics:`యేసు నామం గొప్ప నామం 
యేసు నామం పూజ్యనీయం 
సన్నుతింపబడును ఎల్లకాలము 
స్తుతినొందదగిన ఒకే నామము

చాటించెదము అతిశయిస్తూ
కార్యములను వివరిస్తూ

1. పాపమెంత ఘోరమైన పరిహరించును 
దీనులైనవారినెల్ల కనికరించును 
యేసు అని పిలిస్తే భయము తొలగును

2. ఏలాంటి రోగమైన స్వస్థపరచును 
కీడేమీ అంటకుండ భద్రపరచును 
యేసు పేరు తలిస్తే నెమ్మది దొరకును

3. శత్రువుల కూలద్రోసి జయము కూర్చును 
నిత్యమైన జీవమిచ్చి పరము చేర్చును 
యేసయ్యను కొలిస్తే రక్షణ కలుగును

4. ఆయుష్షును పొడిగించి తృప్తినీయును 
క్షేమముగా నడిపించి వృద్ధి చేయును 
యేసు కొరకు తపిస్తే కార్యం జరుగును`,keywords:["yesu namam goppa namam","yeesu naamam goppa naamam","yesu namam gopa namam","yeesu naanam goppa naanam","yesu namam goppa namam","stevenson"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"6/8"},{id:l(),title:"యేసు నిన్ను నే స్తుతియించుట/మానను మానను",lyrics:`యేసు నిన్ను నే స్తుతియించుట
మానను మానను మానను
కృతజ్ఞతలు నీకు చెల్లించుట
ఎన్నడూ మాననే మానను

ప్రతికూల పరిస్థితులు
వెంటాడు ఘడియలలో
నీ సిలువ తట్టు తిరిగి
నీ యాగమును తలచి

1. సిలువపై మరణించి మరాణాన్ని గెలిచి
వరముగా నిత్యజీవము నిచ్చితివి 
నాకింక నిన్ను స్తుతియించకుండా
ఉండు కారణమేది లేకపోయెను
||యేసు నిన్ను నే||

2. పరమందు ధనవంతుడు నే నగుటకు
దారిద్యములో నీవు జీవించితివి
ఈ లోక ధనము నను విడచి పోయి
దరిద్రునిగా నే మిగిలినను
||యేసు నిన్ను నే||

3. నీ పరిశుద్ధ రక్తము నా కొరకు కార్చి
నా పాప రోగము కడిగితివి
ఈనాడు నీవు నా దేహరోగము
స్వస్థపరచినా లేకున్నా
||యేసు నిన్ను నే||

4. అసాధ్యుడవు నీవు సర్వాధికారివి 
సార్వభౌముడవు దయాలుడవు
నా జీవితములో నా మేలుకోరకే
సమస్తమును జరిగించు వాడవు
||యేసు నిన్ను నే||`,keywords:["మానను మానను","యేసు నిన్ను నే స్తుతియించుట","yesu ninnu ne sthuthiyinchuta","maananu maananu","mananu mananu","yeesu ninnu ne sthuthiyinchuta"],video:"",artist:"Joel Kodali, Daniel J. Kiran , Nissi John, Surya Prakash, Kiran Kaki, Rohith Ganta and Shalom Benhur",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"యేసుని ప్రేమను నేమారకను",lyrics:`యేసుని ప్రేమను నేమారకను నెప్పుడు దలచవే యో మనసా
వాసిగ నాతని వర నామంబును వదలక పొగడవె యో మనసా

1. పాపుల కొరకై ప్రాణం బెట్టిన ప్రభునిల దలచవె యో మనసా
శాపమ నంతయు జక్కగ నోర్చిన శాంతుని పొగడవె యో మనసా

2. కష్టములలో మన కండగ నుండి కర్తను దలచవె యో మనసా
నష్టము లన్నియు నణచిన యాగురు శ్రేష్ఠునిపొగడవె యో మనసా

3. మరణతఱిని మన శరణుగ నుండెడు మాన్యుని దలచవె యో మనసా
కరుణను మన కన్నీటిని దుడిచిన కర్తను పొగడవె యో మనసా

4. ప్రార్ధనలు విని ఫలముల నొసగిన ప్రభునిక దలచవె యో మనసా
వర్ధన గోరుచు శ్రద్ధతో దిద్దిన వంద్యుని పొగడవె యో మనసా

5. వంచనలేక వరముల నొసగిన వరదుని దలచవె యో మనసా
కొంచము కాని కూర్మితో దేవుని కొమరుని పొగడవె యో మనసా`,keywords:["yesuni premanu nemarakanu","yesuni premanu ney marakanu","yesuni preemanu nee maarakanu","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"యేసుని రూపంలోనికి మారాలి",lyrics:`యేసుని రూపంలోనికి మారాలి
యేసుని మాదిరి మనకు రావాలి
ఇదే ప్రభుని నిర్ణయం - ఇదే ప్రభుని పిలుపు
ఇదే ప్రభుని నీతి - ఇదే ప్రభువుకు మహిమ

1. యేసుతో నడావాలి - యేసు ప్రేమను చాటాలి
యేసు త్యాగం చూపాలి - యేసు సహనం చాటాలి
యేసే లోక రక్షణని - జనులందరికి చాటించు
అన్య జనులందరికి చాటించు

2.యేసు కొరకు జీవించు - యేసు మార్గం పయనించు
యేసు నీతిని పాటించు - యేసు మాటలు నెరవేర్చు
యేసు లేని జీవితమే - నరకమని ప్రకటించు
ఘోర నరకమని ప్రకటించు`,keywords:["yesuni rupamloniki marali","yeesuni rupam loniki maarali","yeesuni rupamloniki marali","sharon sisters"],video:"",artist:"Sharon Sisters",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసు నీ నామామృతము",lyrics:`యేసు నీ నామామృతము మా – కెంతో రుచి యయ్యా (2) దేవ
మా – దోషములను హరించి మోక్షని
వాసులుగా జేయుటకు – భాసుర ప్రకాశమైన  ||యేసు||

1. వేడు కలరగ గూడి నిను గొని – యాడు వారికి (2) దేవ
యెంతో – కీడు జేసిన పాడు వైరిని
గోడుగో డనంగ వాని – తాడనము జేసితివి   ||యేసు||

2. పాపములు హరింప నీవే – ప్రాపు మాకయ్యా (2) దేవ
నీ – దాపు జేరిన వారి కందరి
కాపదలు బాపి నిత్య కాపుగతి జూపినావు   ||యేసు||

3. అక్షయ కరుణేక్ష భువన – రక్షకా నీవే (2) దేవ
మమ్ము పక్షముగ రక్షించి మోక్షసు
రక్షణకు దీక్ష గొని – వీక్షితులమైన మాకు   ||యేసు||

4. అందమగు నీ మందిరమున – బొందుగా మేము (2) దేవ
నీ – సుందర కరుణామృతము మా
డెందముల యందు గ్రోలు – టందుకు సుందరమైన  ||యేసు||`,keywords:["yesu ni naamaamruthamu","yesuni namamruthamu","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"యేసు నీవే కావాలయ్యా",lyrics:`యేసు నీవే కావాలయ్యా – నాతో కూడ రావాలయ్యా (2)
ఘనుడా నీ దివ్య సన్నిధి – నను ఆదుకునే నా పెన్నిధి
నీవే కావాలయ్యా – నాతో రావాలయ్యా (2)

1. నీవే నాతో వస్తే – దిగులు నాకుండదు (2)
నీవే ఆజ్ఞాపిస్తే – తెగులు నన్నంటదు (2)
నీవే కావాలయ్యా – నాతో రావాలయ్యా (2) || యేసు నీవే ||

2. నీవే నాతో వస్తే – కొరత నాకుండదు (2)
నీవే ఆజ్ఞాపిస్తే – క్షయత నన్నంటదు (2)
నీవే కావాలయ్యా – నాతో రావాలయ్యా (2) || యేసు నీవే ||

3. నీవే నాతో వస్తే – ఓటమి నాకుండదు (2)
నీవే ఆజ్ఞాపిస్తే – చీకటి నన్నంటదు (2)
నీవే కావాలయ్యా – నాతో రావాలయ్యా (2) || యేసు నీవే ||`,keywords:["yesu neeve kaavalayya","yesuneeve kavalayya","yesu nive kavali ayya","yesu neeve kavali ayya","yesuu neeve kavalayya","stevenson","ar stevenson","4/4"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసు నీ త్యాగమే - నా పాప శిక్షకై",lyrics:`యేసు నీ త్యాగమే
నా పాప శిక్షకై (2)

ఎన్నో నిందలు అవి నా కోసమా 
మలినమైన నా గతం ఇక లేదయా (2)

నా జీవితమే నీదేనయా - నాకంటూ ఏమొద్దయ్య (2)

1. బంధువులే భాధించెడబాసినా
నా వారే నన్నే అమ్మేసిన (2)

స్నేహితులే చూడనట్టు వెళ్లిపోయిన 
నన్ను ఒంటరిని చేసి రాళ్లు రువ్విన (2)
||నా జీవితమే||

2. బ్రతుకంతా చీకటి కమ్మేసిన 
రక్కసి వేదనలే శోధించిన (2)

రోధనలే రోగమై వేధించిన
మరణాలు విలయాలు కబలించిన (2)
||నా జీవితమే||

3. బలహీనతలో నను బలపరిచిన 
పాపినైన నాకై మరణించిన (2)

మృతమైన నన్ను మహిమగా మార్చిన 
మారని నీ ప్రేమకై బానిసైనా (2)
||నా జీవితమే||`,keywords:["yesu ni tyagame na papa sikshakai","yeesu ni thyaagame","yesu ni thyagame","good friday","lent","goodfriday","yesu nee tyagame na papa","yesu ne thyagame"],video:"",artist:"P James & Moses Dany",genre:["Good Friday","Lent"],timeSignature:"3/4"},{id:l(),title:"యేసు మమ్ము నడిపించు",lyrics:`1. యేసు మమ్ము నడిపించు, నీదు కాపు కావలెన్
నీవు మమ్మును బోషించు - మమ్ము జేర్చు దొడ్డిలోన్
యేసునాథా! ప్రియనాథా! మమ్ము విమోచింపుమా

2. మమ్ము నాదరించు యేసూ - మాకు పాలకుండవు
పాప మార్గమందు నుండి - ప్రేమతో దప్పించుమీ
యేసునాథా! ప్రియనాథా! మొఱనాలకించుమా

3. బీద పాపులైన మమ్ము - నీ వంగీకరింతువు
మమ్మును బవిత్రపర్చి - మమ్ము విడిపించుమీ
యేసునాథా! ప్రియనాథా! నిన్ను నాశ్రయింతుము

4. బాల్యమందు నిన్నుఁ జేరి - నిన్ను హత్తుకొందుము
ప్రియ రక్షకుండ, యేసూ! నీదు ప్రేమఁజూపుమా
యేసునాథా! ప్రియనాథా! మమ్మింకఁబ్రేమించుమా`,keywords:["yesu mammu nadipinchu","yesu mamu nadipinchu","yeesu mammu nadipinchu","yesu mamu nadepinchu","yeesu mamu nadepenchu","yesu mammu nadipenchu","eesu mamu nadipinchu","yesu mammu nadipincho","yesumamu nadipinchu","yesu mamunadipinchu","yeesumamu nadipinchu","andhra christian song","andhra christian songs","andhra kraisthava keerthanalu","Aandhra kraisthava keerthanalu","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"యేసు రక్తము రక్తము రక్తము",lyrics:`యేసు రక్తము రక్తము రక్తము (2)
అమూల్యమైన రక్తము
నిష్కళంకమైన రక్తము ||యేసు రక్తము||

1. ప్రతి ఘోర పాపమును కడుగును
మన యేసయ్య రక్తము (2)
బహు దు:ఖములో మునిగెనే
చెమట రక్తముగా మారెనే (2) ||యేసు రక్తము||

2. మనస్సాక్షిని శుద్ధి చేయును
మన యేసయ్య రక్తము (2)
మన శిక్షను తొలగించెను
సంహారమునే తప్పించెను (2) ||యేసు రక్తము||

3. మహా పరిశుద్ద స్థలములో చేర్చును
మన యేసయ్య రక్తము (2)
మన ప్రధాన యాజకుడు
మన కంటె ముందుగా వెళ్ళెను (2) ||యేసు రక్తము||`,keywords:["yesu rakthamu","rakthamu rakthamu rakthamu","lent","good friday","goodfriday","yeesu rakthamu","yeesu raktamu","yesu raktamu","yesu raktam","yeesu raktham","yesu raktham","blood","eesu rakthamu","holy communion","communion","4/4"],video:"",artist:"",genre:["Lent","Redemption"],timeSignature:"4/4"},{id:l(),title:"యేసు రక్షకా శతకోటి స్తోత్రం",lyrics:`యేసు రక్షకా శతకోటి స్తోత్రం
జీవన దాత కోటి కోటి స్తోత్రం
యేసు భజియించి పూజించి ఆరాధించెదను (2)
నా సమస్తము అర్పించి ఆరాధించెదను (2)
యేసు ఆరాధించెదను – ఆరాధించెదను

1. శౌర్యుడు నా ప్రాణ ప్రియుడు
నన్ను రక్షింప నర రూపమెత్తాడు (2)
నా సిల్వ మోసి నన్ను స్వర్గ లోకమెక్కించాడు (2)
చల్లని దేవుడు నా చక్కని యేసుడు (2) ||యేసు రక్షకా||

2. పిలిచినాడు నీవే నా సొత్తన్నాడు
ఎన్నటికిని ఎడబాయనన్నాడు (2)
తన ప్రేమ చూప నాకు నేల దిగినాడు (2)
నా సేద దీర్చి నన్ను జీవింపజేసాడు (2) ||యేసు రక్షకా||

యేసు ఆరాధించెదను – ఆరాధించెదను
నా సమస్తము అర్పించి – ఆరాధించెదను
నా సర్వము అర్పించి – ఆరాధించెదను
శరణం శరణం యేసు స్వామి శరణం (3) ||యేసు ఆరాధించెదను||`,keywords:["4/4","yesu rakshaka satha koti","yeesu rakshaka satha kooti sthrothram","yeesu rakshakaa satha koti","yesu rakshaka sata koti","yesu rakshaka satakoti","yesu rakshaka sathakoti"],video:"",artist:"Raj Prakash Paul",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసు రాజుగా వచ్చుచున్నాడు",lyrics:`యేసు రాజుగా వచ్చుచున్నాడు
భూలోకమంతా తెలుసుకొంటారు (2)
రవికోటి తేజుడు రమ్యమైన దేవుడు (2)
రారాజుగా వచ్చు చున్నాడు (2)    ||యేసు||

1. మేఘాలమీద యేసు వచ్చుచున్నాడు
పరిశుద్దులందరిని తీసుకుపోతాడు (2)
లోకమంతా శ్రమకాలం (2)
విడువబడుట బహుఘోరం   ||యేసు||

2. ఏడేండ్లు పరిశుద్దులకు విందవబోతుంది
ఏడేండ్లు లోకం మీదికి శ్రమ రాబోతుంది (2)
ఈ సువార్త మూయబడున్‌ (2)
వాక్యమే కరువగును    ||యేసు||

3. వెయ్యేండ్లు ఇలపై యేసు రాజ్యమేలును
ఈ లోక రాజ్యాలన్ని ఆయన ఏలును (2)
నీతి శాంతి వర్ధిల్లును (2)
న్యాయమే కనబడును   ||యేసు||

4. ఈ లోక దేవతలన్నీ ఆయన ముందర
సాగిలపడి నమస్కరించి గడగడలాడును (2)
వంగని మోకాళ్ళన్నీ (2)
యేసయ్య యెదుట వంగిపోవును   ||యేసు||

5. క్రైస్తవుడా మరువవద్దు ఆయన రాకడ
కనిపెట్టి ప్రార్ధనచేసి సిద్ధముగానుండు (2)
రెప్ప పాటున మారాలి (2)
యేసయ్య చెంతకు చేరాలి   ||యేసు||`,keywords:["యేసు రాజుగా వచ్చుచున్నాడు","yesu rajuga vachuchunnadu","yeesu raaju ga vachuchunnadu","yesu raju ga vachu chunnadu","yesu rajuga vachuchunnadu","yesu rajuga vachuchunadu"],video:"",artist:"Veedhi Eliya",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసు సామి నీకు నేను",lyrics:`యేసు సామి నీకు నేను నా సమస్త మిత్తును
నీ సన్నిధిలో వసించి ఆశతో సేవింతును
నా సమస్తము నా సమస్తము 
నా సురక్షకా నీకిత్తు నా సమస్తము

1. యేసు సామి నీకె నేను దోసి లొగ్గి మ్రొక్కెదన్
తీసివేతు లోకయాశల్ యేసు చేర్చుమిప్పుడే

2. నేను నీవాడను యేసు నీవును నావాడవు
నీవు నేను నేకమాయె నీ శుద్ధాత్మ సాక్ష్యము

౩. నీకు నన్ను యేసు ప్రభూ ఈయనేనె యేగితి
నీదు ప్రేమశక్తి నింపు నీదు దీవెనియ్యవే

4. యేసు నీదె నా సర్వాస్తి హా సుజ్వాలన్ బొందితి
హా సురక్షణానందమా హాల్లెలూయా స్తోత్రము`,keywords:["yesu sami niku nenu","yeesu saami niku nenu","yesu sami neku nenu","yesu swamy niku nenu","yeesu swamy neku nenu","andhra christian hymn","4/4"],video:"",artist:"M. G. Ramanjulu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"యేసయ్య నీవే మా దేవుడవు",lyrics:`యేసయ్య నీవే మా దేవుడవు నీ నానం మేమిలలొ హెచ్చించెదము
పాపము నుండి మమ్ముని రక్షించావు
పరమ రాజ్య వారసత్వమును ఇచ్చవు

నీవే మార్గము నీవే సత్యం నీతోనే జీవము యేసయ్య (2)

1. దుష్టుల ఆలోచనలో మేము నడువక
పాపుల మార్గము నందు మేము నిలువక
అపహాసకులతో మేము చేరక
నీ సన్నిధి లో ఆనందింప నేర్పుమా
ఆకు వాడక తగిన కాలము నందు (2)ఫలమిచ్చు చెట్టువలె మమ్ము మార్చుమా (2) ||నీవే మార్గము||
 
2. ఏ బండ నుండి మేము చెక్కబడితిమో
ఏ గుంట నుండి మేము తీయబడితిమో
ఏనాడు మా మదిలో మరువకుండగా
ఎల్లప్పుడు దీనులమై బ్రతుక నేర్పుమా
బలిష్టమైన నీదు చేతి క్రింద (2)
ఉంచ తగిన కాలమందు హెచ్చించుమా (2) ||నీవే మార్గము||`,keywords:["yesayya neeve ma dhevudavu","yesayya nive ma dhevudavu","yeesayya neeve ma dhevudavu","yesayya nive maadhevudavu","yesayya nevema dhevudavu","yesayya nivema dhevudavu","yesayya nive ma devudavu","yesayya neeve ma devudavu"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"యేసూ నన్ను ప్రేమించినావు",lyrics:`యేసూ నన్ను ప్రేమించినావు
పాపినైన – నన్ను ప్రేమించినావు (2)

1. నన్ను ప్రేమింప మా-నవ రూపమెత్తి
దా-నముగా జీవము సిలువపై (2)
ఇచ్చి – కన్న తల్లిదండ్రుల – అన్నదమ్ముల ప్రేమ
కన్న మించిన ప్రేమతో (2)   ||యేసూ||

2. తల్లి గర్భమున నే – ధరియింపబడి నపుడే
దురుతుండనై యుంటిని (2)
నా – వల్ల జేయబడెడు – నెల్ల కార్యము లెప్పు
డేహ్యంబులై యుండగ (2)     ||యేసూ||

3. మంచి నాలో పుట్ట – దంచు నీ విరిగి నన్
మించ ప్రేమించి-నావు (2)
ఆహా – యెంచ శక్యముగాని – మంచి నాలో బెంచ
నెంచి ప్రేమించినావు (2)    ||యేసూ||

4. నన్ను ప్రేమింప నీ-కున్న కష్టములన్ని
మున్నై తెలిసియుంటివి (2)
తెలిసి – నన్ను ప్రేమింప నీ-కున్న కారణమేమో
యన్నా తెలియదు చిత్రము (2)    ||యేసూ||

5. నా వంటి నరుడొకడు – నన్ను ప్రేమించిన
నా వలన ఫలము కోరు (2)
ఆహా – నీవంటి పుణ్యునికి – నా వంటి పాపితో
కేవలంబేమీ లేక (2)   ||యేసూ||`,keywords:["yesu nannu preminchinaavu","andhra christian song","andhra christian songs","yeesu nannu preeminchinavu","yeesu nannu preemincheenavu","yeesu nannu preemincheenaavu","yesunannu premincheenavu","7/8"],video:"",artist:"Beethaala John",genre:["Andhra Christian Hymn","Lent","Love"],timeSignature:"7/8"},{id:l(),title:"యేసు నావాడని నమ్ముదున్",lyrics:`1. యేసు నావాడని నమ్ముదున్
భాసిల్లు దివ్య సౌభాగ్యము
దాసుఁడ నౌచు పాల్పొందెదన్
నాశంబు లేని సౌఖ్యంబును

ఇదే నా పాట నాసుకధ
యేసుని సదా స్తుతించుట
ఇదే నా పాట నాసుకధ
యేసుని నిత్యం ధ్యానించుట 

2. సంపూర్ణ భక్తితో నుండెదన్
పెంపార యేసున్ ధ్యానించెదన్
సొంపైన దూతల్ పాడుచుండన్
ఇంపైన పాటల్ నే విందును  ||ఇదే నా పాట||

3. నిండైన భక్తియే నెమ్మది
గెల్చున దేమి యేసుండగ
మెండైన దీప్తిన్ బ్రార్థించుచు
దండిగ బ్రేమన్ సుఖింతును ||ఇదే నా పాట||`,keywords:["andhra christian song","andhra christian songs","yeesu na vaadani","blessed assurance in telugu","yesu na vaadani","yesu navadanu","yesu na vadani","yeesu naa vaadaani","yeesu na vaadane","yesunaa vaadani","yesu naavadaani","yesu navadani"],video:"https://www.youtube.com/embed/X5q7xykqRYU?start=248",artist:"Fransis Jenven Alsteen",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"యేసుని కొరకై యిల జీవించెద",lyrics:`యేసుని కొరకై యిల జీవించెద
భాసురముగ నే ననుదినము
దోసములన్నియు బాపెను మోక్ష
ని వాసమున ప్రభు జేర్చునుగా ||యేసుని||

1. నాశనకరమగు గుంటలోనుండియు
మోసకరంబగు యూబినుండి - 2
నాశచె నిలపై కెత్తెను నన్ను
పి - శాచి పథంబున దొలగించెన్ ||యేసుని||

2. పలువిధముల పాపంబును జేసితి
వలదని ద్రోసితి వాక్యమును - 2
కలుషము బాపెను కరుణను బిలిచెను
సిలువలో నన్నాకర్షించెను ||యేసుని||

3. అలయక సొలయక సాగిపోదును
వెలయగ నా ప్రభు మార్గములన్ - 2
కలిగెను నెమ్మది కలువరిగిరిలో
విలువగు రక్తము చిందించిన ప్రభు||యేసుని||

4. శోధన బాధలు శ్రమలిల కల్గిన
ఆదుకొనును నా ప్రభువనిశం - 2
వ్యాధులు లేములు మరణము
వచ్చిన నాధుడే నా నిరీక్షణగున్||యేసుని||

5. బుద్ధి విజ్ఞాన సర్వసంపదలు
గుప్తమై యున్నవి ప్రభునందు - 2
అద్భుతముగ ప్రభు వన్నియునొసగి
దిద్దును నా బ్రతుకంటిని ||యేసుని||

6. అర్పించెను దన ప్రాణమునకై
రక్షించెను నా ప్రియ ప్రభువు - 2
అర్పింతును నా యావజ్జీవము
రక్షకు డేసుని సేవింప||యేసుని||

7. ప్రభునందానందింతును నిరతము
ప్రార్థన విజ్ఞాపనములతో విభుడే - 2
దీర్చునుయిలనా చింతలు
అభయముతో స్తుతియింతు ప్రభున్ ||యేసుని||

8. యౌవన జనమా యిదియే
సమయము యేసుని చాటను - 2
రారండి పావన నామము పరిశుద్ధ నామము
జీవపు మార్గము ప్రచురింపన్ ||యేసుని||`,keywords:["yesuni korake ila jeevinchedha","yesuni korake ela jevinchedha","yesu ni korake ila jevinchedha","yesuni korake ilajeevinchedha","andhra christian hymn","4/4"],video:"",artist:"Raavi John Sundharavu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"యేసే గొప్ప దేవుడు",lyrics:`యేసే గొప్ప దేవుడు – మన యేసే శక్తిమంతుడు (2)
యేసే ప్రేమ పూర్ణుడు – యుగయుగములు స్తుతిపాత్రుడు (2)
స్తోత్రము మహిమ జ్ఞానము శక్తి
ఘనతా బలము కలుగును ఆమెన్ (2) ||యేసే||

1. మహా శ్రమలలో వ్యాధి బాధలలో
సహనము చూపి స్థిరముగ నిలచిన
యోబు వలె నే జీవించెదను (2)
అద్వితీయుడు ఆదిసంభూతుడు
దీర్ఘ శాంతుడు మన ప్రభు యేసే (2)  ||స్తోత్రము||

2. ప్రార్థన శక్తితో ఆత్మ బలముతో
లోకమునకు ప్రభువును చాటిన
దానియేలు వలె జీవింతును (2)
మహోన్నతుడు మన రక్షకుడు
ఆశ్రయ దుర్గము మన ప్రభు యేసే (2) |స్తోత్రము||

3. జీవితమంతా ప్రభుతో నడచి
ఎంతో ఇష్టుడై సాక్ష్యము పొందిన
హనోకు వలె నే జీవించెదను (2)
అద్భుతకరుడు ఆశ్చర్యకరుడు
నీతి సూర్యుడు మన ప్రభు యేసే (2) ||స్తోత్రము||`,keywords:["yese goppa dhevudu","yese gopa dhevudu","yesegoppadhevudu","yese goppadhevudu","yesegoppa devudu","yesey goppa dhevudu","yesey gopa dhevudu","yesey gopa devudu","yesey goppa dheevudu","2/4"],video:"",artist:"Philip Gariki",genre:["General"],timeSignature:"2/4"},{id:l(),title:"యేసే నా ఆశ్రయము యేసే నా ఆధారము",lyrics:`యేసే నా ఆశ్రయము యేసే నా ఆధారము
నా కోట నీవే… నా దుర్గము నీవే
నా కాపరి నీవే (2)

1. శ్రమలోయలు ఎన్నో ఎదురు వచ్చినా
కష్టాల ఊభిలో కూరుకున్ననూ (2)
నన్ను లేవనెత్తును నన్ను బలపరచును
నాకు శక్తినిచ్చి నడిపించును (2)   ||యేసే నా||

2. జీవ నావలో తుఫాను చెలరేగినా
ఆత్మీయ జీవితంలో అలలు ఎగసినా (2)
నాకు తోడైయుండును నన్ను దరి చేర్చును
చుక్కాని అయి దారిచుపును (2)    ||యేసే నా||

3. దినమంతయు చీకటి అలుముకున్ననూ
బ్రతుకే భారమైన సంద్రమైననూ (2)
నాకు వెలుగిచ్చిను నన్ను వెలుగించును
నా నావలో నాతో నుండును (2)    ||యేసే నా||`,keywords:["yese naku asrayamu","yese naakaasrayamu","yeese naakaasrayamu","yese nakasrayamu","yese nakaasrayamu","yeese nakaasrayamu","yeese naaku asrayamu","yese naakasrayamu","yesee nakasrayamu","yeese nakasrayamu","yese naakaasrayamo","yese naakasrayamo","4/4"],video:"",artist:"K. Amarpaul Jairaj",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"యేసే నా పరిహారి",lyrics:`యేసే నా పరిహారి
ప్రియ యేసే నా పరిహారి
నా జీవిత కాలమెల్ల
ప్రియ ప్రభువే నా పరిహారి (2)  ||యేసే నా||

1. ఎన్ని కష్టాలు కలిగిననూ
నన్ను కృంగించె భాదలెన్నో (2)
ఎన్ని నష్టాలు వాటిల్లినా
ప్రియ ప్రభువే నా పరిహారి (2)         ||యేసే నా||

2. నన్ను సాతాను వెంబడించినా
నన్ను శత్రువు ఎదిరించినా (2)
పలు నిందలు నను చుట్టినా
ప్రియ ప్రభువే నా పరిహారి (2)   ||యేసే నా||

3. మణి మాన్యాలు లేకున్ననూ
పలు వేదనలు వేధించినా (2)
నరులెల్లరు నను విడచినా
ప్రియ ప్రభువే నా పరిహారి (2)   ||యేసే నా||

4. బహు వ్యాధులు నను సోకినా
నాకు శాంతి కరువైనా (2)
నను శోధకుడు శోధించినా
ప్రియ ప్రభువే నా పరిహారి (2)   ||యేసే నా||

5. దేవా నీవే నా ఆధారం
నీ ప్రేమకు సాటెవ్వరూ (2)
నా జీవిత కాలమంతా
నిన్ను పాడి స్తుతించెదను (2)  ||యేసే నా||`,keywords:["yese na parihaari","yese na parihari","yeese na parihari","yeese naa parihaari","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసే నా మార్గము - యేసే నా సత్యము - జీవమని పాడెదం",lyrics:`యేసే నా మార్గము
యేసే నా సత్యము
జీవమని పాడెదం (2)

1. పరిశుద్ధ దేవుడు ఆధారభూతుడు
ఆదరించు దేవుడు ఓదార్పునిచ్చును
నా ప్రతి అవసరములో ఆదుకొను దేవుడు
రోగములన్నిటిని స్వస్థపరచువాడు         ||యేసే నా||

2. యేసే నా సర్వము యేసే నా సమస్తము
ఆయనే నా సంగీతము ఆనందముతో పాడుదం
నా ప్రతి అవసరములో ఆదుకొను దేవుడు
రోగములన్నిటిని స్వస్థపరచువాడు        ||యేసే నా||`,keywords:["yese na margamu","yese na satyam","yese na margamu yese na sathyam","yeese na maargamu","yese naa margamu","yese na maargamu"],video:"",artist:"Kripal Mohan",genre:["General"],timeSignature:"4/4"},{id:l(),title:"యేసే నీ ఆధారము/నిరీక్షణ ",lyrics:`1. యేసే నీ ఆధారము దిగులు చెందకు
మరలా వెనుదిరుగకు ధైర్యముగా ఉండు 
ఓర్పుతో వేచి ఉండు నూతన బలము నొందెదవు 
పక్షిరాజు వలే పైపైకి ఎగురుదువు

సహనమును విడువకు ఇక కొద్ది కాలమే x3
నిబ్బరం కలిగి ఉండు విజయము నీదే 

నిరీక్షణ కోలిపోకుము - యేసేగా నీ సహాయము x2

2. యేసే నా ఆధారము దిగులు చెందను
మరలా వెనుదిరుగను  ధైర్యముగా ఉందున్ 
ఓర్పుతో వేచి ఉందున్  నూతన బలము నొందెదను
పక్షిరాజు వలే పైపైకి ఎగురుదును 

సహనమును విడువను ఇక కొద్ది కాలమే x3
నిబ్బరం కలిగి ఉందున్ విజయము నాదే 

నిరీక్షణ కోలిపోను నేను  - యేసేగా నా  సహాయము x2

Bridge:
యేసే నా రక్షణ యేసే నా నిరీక్షణ x4

బంధకము లోను నిరీక్షణ గలవారలారా 
రెండింతల మేలును చేయువాడు ఆయనే 
నీ గూర్చి ఉద్దేశించిన తలంపులాయన ఎరుగును 
అవి మేలైనవి కీడు కొరకు కాదు`,keywords:["yese ni aadharamu","ni reekshana","nereekshsana","yese nee aadharamu","yese ni adharamu","yeese nee aadharamu","nireekshana"],video:"",artist:"Anu Roy Samuel, Anu Roy Samuel, Rufas Ganta, Rahul Roy, John Rohith",genre:["General","Hope"],timeSignature:"4/4"},{id:l(),title:"యేసే సత్యం యేసే నిత్యం",lyrics:`యేసే సత్యం యేసే నిత్యం
యేసే సర్వము జగతికి
యేసే జీవం యేసే గమ్యం
యేసే గమనము (2)
పాట పాడెదం ప్రభువునకు
స్తోత్రార్పణ చేసెదం (2)  ||యేసే||

1. పలు రకాల మనుష్యులు – పలు విధాలు పలికిన
మాయలెన్నో చేసినా – లీలలెన్నో చూపినా (2)
యేసులోనే నిత్య జీవం
యేసులోనే రక్షణ (2)  ||యేసే||

2. బలము లేని వారికి – బలము నిచ్చు దేవుడు
కృంగియున్న వారిని – లేవనెత్తు దేవుడు (2)
యేసులోనే నిత్య రాజ్యం
యేసులోనే విడుదల (2)  ||యేసే||`,keywords:["yese sathyam","yese nithyam","yeese sathyam","yese satyam","yeese satyam","yase sathyam","yase satyam","yese satam","yise satam","yise sathyam","eese sathyam","eese satyam","yesey sathyam","yesey satyam","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"యోగ్యుడవో యోగ్యుడవో యేసు ప్రభో నీవే యోగ్యుడవో",lyrics:`యోగ్యుడవో యోగ్యుడవో యేసు ప్రభో నీవే యోగ్యుడవో
మరణము గెలిచిన యోధుడవో నా జీవితమున పూజ్యుడవో

1. సృష్టికర్తవు నిర్మాణకుడవు జీవనదాతా జీవించువాడవు
శిరమును వంచి కరములు జోడించి స్తుతియించెద నిను యేసుప్రభో

2. గొఱ్ఱెపిల్లవై యాగమైతివి సిలువయందే పాపమైతివె
శిరమును వంచి కరములు జోడించి సేవించెద నిను యేసు ప్రభో

3. స్నేహితుడవై నన్నిల కోరితివి విడువక నన్ను ఆదుకొంటివి
శిరమును వంచి కరములు జోడించి భజియించెద నిను యేసుప్రభో`,keywords:["yogyudavo","yogyudavu","ogyudavu","yoogudavu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"}],ర:[{id:l(),title:"రక్షకుండుదయించినాడట",lyrics:`రక్షకుండుదయించినాడట – మన కొరకు పరమ
రక్షకుండుదయించినాడట
రక్షకుండుదయించినాడు – రారే గొల్ల బోయలార
తక్షనమున బోయి మన ని – రీక్షణ ఫల మొందెదము ||రక్షకుండు||

1. దావీదు వంశమందు ధన్యుడు జన్మించినాడు (2)
దేవుడగు యెహోవా మన – దిక్కు దేరి చూచినాడు ||రక్షకుండు||

2. గగనము నుండి డిగ్గి – ఘనుడు గాబ్రియేలు దూత (2)
తగినట్టు చెప్పే వారికి – మిగుల సంతోష వార్త ||రక్షకుండు||

3. వర్తమానము జెప్పి దూత – వైభవమున పోవుచున్నాడు (2)
కర్తను జూచిన వెనుక – కాంతుము విశ్రమం బప్పుడు ||రక్షకుండు||

4. పశువుల తొట్టిలోన – భాసిల్లు వస్త్రముల జుట్టి (2)
శిశువును గనుగొందురని – శీఘ్రముగను దూత తెల్పె ||రక్షకుండు||

5. అనుచు గొల్ల లొకరి కొకరు – ఆనవాలు జెప్పుకొనుచు (2)
అనుమతించి కడకు క్రీస్తు – నందరికినీ దెల్పినారు ||రక్షకుండు||`,keywords:["Rakshakudu udhayinchi naadata","andhra christian hymn","christmas","7/8","4/4"],video:"",artist:"Mocharla Raghavayya",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"7/8 or 4/4"},{id:l(),title:"రండి ఉత్సాహించి పాడుదము",lyrics:`రండి ఉత్సాహించి పాడుదము
రక్షణ దుర్గము మన ప్రభువే (2)

1. రండి కృతజ్ఞత స్తోత్రముతో
రారాజు సన్నిధికేగుదము (2)
సత్ప్రభు నామము కీర్తనలన్
సంతోష గానము చేయుదము  ||రండి||

2. మన ప్రభువే మహా దేవుండు
ఘన మహాత్యము గల రాజు (2)
భూమ్యాగాధపు లోయలును
భూధర శిఖరములాయనవే     ||రండి||

3. సముద్రము సృష్టించెనాయనదే
సత్యుని హస్తమే భువిజేసెన్ (2)
ఆయన దైవము పాలితుల
ఆయన మేపెడి గొర్రెలము  ||రండి||

4. ఆ ప్రభు సన్నిధి మోకరించి
ఆయన ముందర మ్రొక్కుదము (2)
ఆయన మాటలు గైకొనిన
అయ్యవి మనకెంతో మేలగును   ||రండి||

5. తండ్రి కుమార శుద్దాత్మకును
తగు స్తుతి మహిమలు కల్గు గాక (2)
ఆదిని ఇప్పుడు ఎల్లప్పుడూ
అయినట్లు యుగములనౌను ఆమెన్    ||రండి||`,keywords:["randi uthsahinchi padudhamu","randi uthsahinchedham","randi uthsahinche padedhamu","Andhra Christian Hymn","4/4"],video:"",artist:"Samuyelu Paakyanaadhamu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"రండి పాడ దూతలారా నిండు సంతోషంబుతో",lyrics:`1. రండి పాడ దూతలారా నిండు సంతోషంబుతో 
యేసుని జన్మంబు గూర్చి ఈ భూలోకమంతట 
రండి నేడు పుట్టినట్టి రాజు నారాధించుడి.

2. మందగాయు గొల్లలార! మనుష్యులతో నేడు 
వాసంబు జేయుచున్నాఁడు వాసిగాను దేవుండు
రండి నేడు పుట్టినట్టి రాజు నారాధించుడి.

3. జ్ఞానులారా! మానుడింక యోచనలం జేయుట 
మానుగాను వెదకుడేసున్ చూచుచు నక్షత్రమున్
రండి నేడు పుట్టినట్టి రాజు నారాధించుడి.

4. పరిశుద్ధులారా! విూరు నిరీక్షించుచుండిన 
యేసు ప్రభువాలయంబు యేతెంచెను చూడుడి 
రండి నేడు పుట్టినట్టి రాజు నారాధించుఁడి.

5. పశ్చాత్తాప మొందియున్న పాపులార! మీకు వి
ముక్తి గల్గె; శక్తి నొంది రక్తి నేసుంజేరుడి
రండి నేడు పుట్టినట్టి రాజు నారాధించుడి.`,keywords:["Randi paada dhuthalaara","rando pada dhuthalara","christmas","Andhra christian hymn","christmas","4/4"],video:"",artist:"Ongolu Dhaveedhu",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"},{id:l(),title:"రండి సువార్త సునాదముతో",lyrics:`రండి సువార్త సునాదముతో – రంజిలు సిలువ నినాదముతో
తంబుర సితార నాదముతో – ప్రభుయేసు దయానిధి సన్నిధికి

1. యేసే మానవజాతి వికాసం – యేసే మానవ నీతి విలాసం
యేసే పతిత పావన నామం – భాసుర క్రైస్తవ శుభనామం ||రండి||

2. యేసే దేవుని ప్రేమ స్వరూపం – యేసే సర్వేశ్వర ప్రతిరూపం
యేసే ప్రజాపతి పరమేశం – ఆశ్రిత జనముల సుఖవాసం ||రండి||

3. యేసే సిలువను మోసిన దైవం – యేసే ఆత్మల శాశ్వత జీవం
యేసే క్షమాపణ అధికారం – దాసుల ప్రార్ధన సహకారం ||రండి||

4. యేసే సంఘములో మన కాంతి – యేసే హృదయములో ఘనశాంతి
యేసే కుటుంబ జీవన జ్యోతి – పసిపాపల దీవెన మూర్తి ||రండి||

5. యేసే జీవన ముక్తికి మార్గం – యేసే భక్తుల భూతల స్వర్గం
యేసే ప్రపంచ శాంతికి సూత్రం – వాసిగ నమ్మిన జనస్తోత్రం ||రండి||`,keywords:["randi suvartha sunadhamutho","Randi suvartha sunaadhamutho","randi suvaartha sunaadhamuto","andhra christian hymn","4/4"],video:"",artist:"Dr. A. B. Masilamani",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"రమ్మనుచున్నాడు నిన్ను ప్రభు యేసు",lyrics:`రమ్మానుచున్నాడు నిన్ను ప్రభు యేసు
వాంఛతో తన కరము చాపి రమ్మనుచున్నాడు

1. ఎటువంటి శ్రమలందును ఆదరణ నీ కిచ్చునని
గ్రహించి నీవు యేసునిచేరినా
హద్దులేని యింపునొందెదవు

2. కన్నీరంతా తుడుచును కనుపాపవలె కాపాడున్
కారు మేఘమువలె కష్టములు వచ్చినను
కనికరించి నిన్ను కాపాడును

3. సొమ్మసిల్లు వేళలో బలమును నీ కిచ్చును
ఆయన నీ వెలుగు రక్షణ అయినందున
ఆలసింపక నీవు త్వరపడి రమ్ము

4. సకల వ్యాధులను స్వస్థపరచుటకు
శక్తిమంతుడగు ప్రభు యేసు ప్రేమతో
అందరికి తన కృపల నిచ్చున్`,keywords:["dinakaran","dhinakaran","rammanuchunnadu","ramanuchunnadu","ramanu chunadu","Rammanu chunnadu","rammanu chunadu","rammanu chunnaadu","3/4"],video:"",artist:"D. G. S Dhinakaran",genre:["General"],timeSignature:"3/4"},{id:l(),title:"రాకడ సమయంలో – కడబూర శబ్ధంతో",lyrics:`రాకడ సమయంలో – కడబూర శబ్ధంతో
యేసుని చేరుకునే – విశ్వాసం నీకుందా? (2)
రావయ్య యేసయ్య – వేగరావయ్యా
రావయ్య యేసునాథా – వేగమెరావయ్యా (2)  ||రాకడ||
యేసయ్య రాకడ సమయంలో
ఎదురేగె రక్షణ నీకుందా? (2)
లోకాశలపై విజయం నీకుందా? (2)  ||రావయ్య||

1. ఇంపైన ధూపవేదికగా
ఏకాంత ప్రార్థన నీకుందా? (2)
యేసు ఆశించే దీన మనస్సుందా? (2)  ||రావయ్య||

2. దినమంతా దేవుని సన్నధిలో
వాక్యం కొరకు ఆకలి నీకుందా? (2)
యేసునాథునితో సహవాసం నీకుందా? (2)   ||రావయ్య||

3. శ్రమలోన సహనం నీకుందా?
స్తుతియించే నాలుక నీకుందా? (2)
ఆత్మలకొరకైన భారం నీకుందా? (2)  ||రావయ్య||

4. నీ పాత రోత జీవితము
నీ పాప హృదయం మారిందా? (2)
నూతన హృదయంతో ఆరాధన నీకుందా? (2)  ||రావయ్య||

5. అన్నీటికన్నా మిన్నగను
కన్నీటి ప్రార్థన నీకుందా? (2)
ఎల్లవేళలలో స్తుతియాగం నీకుందా? (2)  ||రావయ్య||`,keywords:[],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"రాజ్యము నీవే బలము నీవే",lyrics:`రాజ్యము నీవే బలము నీవే మహిమ ప్రభావములు నీవే
సింహాసనాసీనుడా సర్వాధికారుడా (2)

We Sing Praise Adonai
We Sing Praise Adonai
We Sing Praise to the Holy One (2)

1. పునరుధానుడవై మేఘరూఢుడవై (2)
స్వాగతించగా కోట్లాది దూతలు విజయుత్సాహముతో
స్వాగతించగా కోట్లాది దూతలు విజయార్భాటముతో ||We Sing Praise||

2. నీ రాజ్యము శాశ్వతము నీ సింహాసనము శాశ్వతం (2)
సర్వ రాష్ట్రాలు సకల దేశాలు నీ పాదముల యెదుట
సర్వ రాష్ట్రాలు సకల దేశాలు నిన్నారాధింతురు ||We Sing Praise||`,keywords:["rajyamu neeve balamu neeve","rajyamu nive balamu nive","rajiyamu neve","rajiyamo neve","rajiyamo neeve","rajyamu neve","rajyamu neevey","4/4"],video:"",artist:"Ravinder Vottepu",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"రాజా నీ సన్నిధిలోనే ఉంటానయ్య",lyrics:`రాజా నీ సన్నిధిలోనే ఉంటానయ్య
మనసారా ఆరాధిస్తు బ్రతికేస్తానయ్య  (2)
నేనుండలేనయ్య నే బ్రతుకలేనయ్య  (2)
నీవే లేకుండా నేనుండలేనయ్య  (2)
నీ తోడే లేకుండా నే బ్రతుకలేనయ్య  (2) ||నేనుండ||

1. నీ సన్నిధానములో సంపూర్ణ సంతోషం
ఆరాధించుకొనే విలువైన అవకాశం  (2)
కోల్పోయినవన్ని నాకు ఇచ్చుటకును
బ్రతికించుటకు  (2)
నీవే రాకపోతే నేనేమైపోదునో  (2) ||నేనుండ||

2. ఒంటరి పోరు నన్ను విసిగించిన
మనుషులెల్లరు నన్ను తప్పుపట్టినా  (2)
ఒంటరివాడే వేయి మంది అన్నావు
నేనున్నానులే భయపడకు అన్నావు (2)
నేనంటే నీకు ఇంత ప్రేమ ఏంటయ్య (2) ||నేనుండ||

3. ఊపిరాగేవరకు నీతోనే జీవిస్తా
ఏ దారిలో నడిపిన నీ వెంటే నడిచోస్తా (2)
విశ్వానికి కర్త నీవే నా గమ్యము
నీ బాటలో నడుచుట నాకెంతో ఇష్టము (2)
నిన్ను మించిన దేవుడే లేడయ్య (2) ||నేనుండ||`,keywords:["Raaja ni sanidhilone untaanayya","raja ni sannidhilone","Raja nee sannidhilone","raja ne sannidhilone","raja ni sannidilone","raja ni sannidilo","rajaa nee sannidilo","raja ni sannidhi","worship","4/4"],video:"",artist:"John J",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"రాజా నీ భవనములో",lyrics:`రాజా నీ భవనములో
రేయి పగలు వేచియుందును (2)
స్తుతించి ఆనందింతును
చింతలు మరచెదను (2)   ||రాజా||

1. నా బలమా నా కోట
ఆరాధన నీకే (2)
నా దుర్గమా ఆశ్రయమా
ఆరాధన నీకే (2)
ఆరాధనా ఆరాధనా
అబ్బ తండ్రి నీకేనయ్యా   ||రాజా||

2. అంతట నివసించు యెహోవా ఎలోహిం
ఆరాధన నీకే (2)
మా యొక్క నీతి యెహోవా సిద్కేను
ఆరాధన నీకే (2)
ఆరాధనా ఆరాధనా
అబ్బ తండ్రి నీకేనయ్యా    ||రాజా||

3. పరిశుద్ధ పరచు యెహోవా కాదేషు
ఆరాధన నీకే (2)
రూపించు దైవం యెహోవా హోషేను
ఆరాధన నీకే (2)
ఆరాధనా ఆరాధనా
అబ్బ తండ్రి నీకేనయ్యా   ||రాజా||`,keywords:["raaja ni bhavanamulo","raja ni bhavanamulo","raja ni bavanamulo","raja nee bavanamulo","raja nee bhavanamulo","rajaa ni bavanamulo","rajani bavanamulo","rajanee bhavanamulo","raja nibhavanamulo","rajanibavanamulo","rajaa nibhavanamulo","worship","4/4"],video:"",artist:"Barchmans",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"రాజుల రాజా ప్రభువుల ప్రభువా/భయపడను",lyrics:`రాజుల రాజా ప్రభువుల ప్రభువా
నాతో ఉన్నవాడా
ఇచ్చిన మాట తప్పనివాడా
స్థిరపరచువాడా
భయపడను - నిలిచెదను
నీ వాగ్ధానము దృఢపరచును – నిరంతరము

నీ కార్యములు సంపూర్ణము – పరిపూర్ణము
నీ వాక్యములు జీవమునిచ్చును – నెమ్మదినిచ్చును
భయపడను - నిలిచెదను
నీ వాగ్ధానము దృఢపరచును – నిరంతరము
భయపడను… నిలిచెదను…
నీ వాగ్ధానము దృఢపరచును – నిరంతరము
నిరంతరము…

ఓ ఓ ఓ ఓ…
ఓ ఓ ఓ ఓ…
ఓ ఓ ఓ ఓ…

నీ చిత్తమే జరుగును
నీ సన్నిధే జయమిచ్చును (2)
నీ చిత్తమే జరుగును...ఆమేన్...ఆమేన్...
నీ సన్నిధే జయమిచ్చును...ఆమేన్...ఆమేన్...(2)
అనుదినము నీ వాగ్ధానములో - నే నడిచెదను (2)
భయపడను - నిలిచెదను
నీ వాగ్ధానము దృఢపరచును – నిరంతరము
నిరంతరము`,keywords:["raajula raja","rajula raaja","Raju la raja","raajularaja","raajularaaja","rajularaja","rajula raja","bhayapadanu","bayapadanu","bhayapadano","bayapadano","bypadanu","baypadanu","baipadanu","bhaypadanu","johnerry","john erry","worship","4/4"],video:"",artist:"John Erry",genre:["General"],timeSignature:"4/4"},{id:l(),title:"రాజులకు రాజైన ఈ మన విభుని",lyrics:`రాజులకు రాజైన ఈ మన విభుని
పూజ చేయుటకు రండి
ఈ జయశాలి కన్నా
మనకింకా రాజెవ్వరును లేరని       ||రాజులకు||

1. కరుణ గల సోదరుండై ఈయన
ధరణికేతెంచెనయ్యా (2)
స్థిరముగా నమ్ముకొనిన
మనకొసగు పరలోక రాజ్యమును       ||రాజులకు||

2. నక్కలకు బొరియలుండే నాకాశ
పక్షులకు గూళ్లుండెను (2)
ఒక్కింత స్థలమైనను
మన విభుని కెక్కడ లేకుండెను       ||రాజులకు||

3. త్వరపడి రండి రండి ఈ పరమ
గురుని యొద్దకు మీరలు (2)
దరికి జేరిన వారిని
ఈ ప్రభువు తరుమడెన్నడు దూరము       ||రాజులకు||`,keywords:["rajulaku rajaina ye","raajulaku raajaina ee","andhra christian hymn","rajulaku raajaina ee","Rajulaku rajaina ee"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"6/8"},{id:l(),title:"రాజాధి రాజా రారా",lyrics:`రాజాధి రాజా రారా – రాజులకు రాజువై రారా
రాజయేసు రాజ్యమేల రారా – రవికోటి తేజ యేసు రారా (2)
ఓ… మేఘ వాహనంబు మీద వేగమే
ఓ… మించు వైభవంబు తోడ వేగమే   ||రాజాధి||

1. ఓ… భూజనంబులెల్ల తేరిచూడగా
ఓ… నీ జనంబు స్వాగతంబునీయగా
నీ రాజ్యస్థాపనంబు సేయ – భూరాజులెల్ల గూలిపోవ
భూమి ఆకసంబు మారిపోవ – నీ మహా ప్రభావమున వేగ   ||రాజాధి||

2. ఆ… ఆకసమున దూత లార్భటింపగా
ఆ… ఆదిభక్త సంఘ సమేతంబుగా
ఆకసంబు మధ్య వీధిలోన – ఏకమై మహాసభ జేయ
యేసు నాధ! నీదు మహిమలోన – మాకదే మహానందమౌగ   ||రాజాధి||

3. ఓ… పరమ యెరుషలేము పుణ్య సంఘమా
ఓ… గొఱియపిల్ల క్రీస్తు పుణ్య సంఘమా
పరమ దూతలార! భక్తులారా! – పౌలపోస్తులారా! పెద్దలారా!
గొఱియపిల్ల యేసురాజు పేర – క్రొత్త గీతమెత్తి పాడరారా  ||రాజాధి||`,keywords:["raajaadhi raaja raara","raajadhi raja rara","Rajadhi raja rara","Rajadhi raja rave","andhra christian hymn","6/8"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"6/8"},{id:l(),title:"రారె చూతము రాజ సుతుని",lyrics:`రారె చూతము రాజ సుతుని రేయి జనన మాయెను (2)
రాజులకు రా రాజు మెస్సియ (2)
రాజితంబగు తేజమదిగో (2) ||రారె||

1.దూత గణములన్ దేరి చూడరే దైవ వాక్కులన్ దెల్పగా (2)
దేవుడే మన దీనరూపున (2)
ధరణి కరిగెనీ దినమున (2)  ||రారె||

2.కల్లగాదిది కలయు గాదిది గొల్ల బోయల దర్శనం (2)
తెల్లగానది తేజరిల్లెడి (2)
తారగాంచరే త్వరగ రారే (2)  ||రారె||

3.బాలుడడుగో వేల సూర్యల బోలు సద్గుణ శీలుడు (2)
బాల బాలిక బాల వృద్ధుల (2)
నేల గల్గిన నాధుడు (2)  ||రారె||

4. యూద వంశము నుద్ధరింప దావీదు పురమున 
నుద్భవించే - సదమలంబగు మదిని గొల్చిన 
సర్వజనులకు సార్వ భౌముడు (2)   ||రారె||`,keywords:["raare chuthumu raaja suthuni","Rare chuthumu raja suthuni","andhra christian hymn","Christmas","4/4"],video:"",artist:"Chetti Bhanu Murthi",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"},{id:l(),title:"రారాజు పుట్టాడోయ్ మారాజు పుట్టాడోయ్",lyrics:`రారాజు పుట్టాడోయ్ మారాజు పుట్టాడోయ్ 
సూడంగా రారండోయ్ వేడంగా రారండోయ్ 

ఈ లోకమునకు రక్షకుడిక పుట్టినాడండోయ్
మన కొరకు దేవ దేవుడు దిగి వచ్చినాడండోయ్

నింగి నేల పొంగిపోయే , ఆ తార వెలసి మురిసిపోయే
సంబరమాయెనే, హోయ్ ...

1. వెన్నెల వెలుగుల్లో పూసెను సలిమంట
ఊరువాడ వింతబోయే గొల్లల సవ్వడులు 

కన్నుల విందుగా దూతలు పాడగా 
సందడే సిందేయంగా మిన్నుల పండగ 

సుక్కల్లో సంద్రుడల్లే సూడ సక్కనోడంట
పశువుల పాకలో (న ) ఆ పసి బాలుడంట
చెరగని స్నేహమై .....

2. మచ్చలేని ముత్యమల్లే పొడిసే సూరీడు 
మనసులో దీపమై దారి సూపు దేవుడు 

ప్రేమ పొంగు సంద్రమల్లే , కంటికి రెప్పలా 
అందరి తోడునీడై మాయని మమతలా

సల్లంగ సూడ యేసు ఇల వచ్చినాడంట 
వరముగ చేర యేసు పరమును వీడేనంట
మరువని బంధమై .....`,keywords:["raaraju puttadoi maaraju puttadoi","raraju puttadoi","raraju puttadoi","raraaju puttadooi","raaraaju puttaadooi","christmas","pranam kamlakhar"],video:"",artist:"Pranam Kamlakhar",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"రుచి చూచి ఎరిగితిని – యెహోవా ఉత్తముడనియు",lyrics:`రుచి చూచి ఎరిగితిని – యెహోవా ఉత్తముడనియు (2)
రక్షకు నాశ్రయించి – నే ధన్యుడనైతిని (2)         || రుచి చూచి||

1. గొప్ప దేవుడవు నీవే – స్తుతులకు పాత్రుడ నీవే (2)
తప్పక ఆరాధింతున్ – దయాళుడవు నీవే (2)   || రుచి చూచి||

2. మహోన్నతుడవగు దేవా – ప్రభావము గలవాడా(2)
మనసార పొగడెదను నీ – ఆశ్చర్యకార్యములన్ (2)   || రుచి చూచి||

3. మంచి తనము గల దేవా – అతి శ్రేష్టుడవు అందరిలో(2)
ముదమార పాడెద నిన్ను- అతి సుందరడవనియు (2)  || రుచి చూచి||

4. కృతజ్ఞతా చెల్లింతున్ – ప్రతి దాని కొరకు నేను (2)
క్రీస్తుని యందే తృప్తి – పొంది హర్షించెదను (2)     || రుచి చూచి||

5. ప్రార్ధింతును ఎడతెగక – ప్రభు సన్నిధిలో చేరి (2)
సంపూర్ణముగ పొందెదను – అడుగువాటన్నిటిని (2)    || రుచి చూచి||`,keywords:["ruchi chuchi yerigithini","ruchi chuchi erigithini","ruchi chuchi yeregithini","ruchi chuchi eregithini","ruche chuche yerigithini","ruchi chuchi erigithine"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"రెండే రెండు మార్గాలు జీవం మరణం",lyrics:`రెండే రెండు మార్గాలు జీవం మరణం (2) 
ఒకటే మోక్షమార్గము యేసే ఆమార్గం (2)  
యేసే ఆమార్గం  ప్రభుయేసేఆమార్గం ||రెండే|| 

1.పాపము పోయే మార్గముతెలియక  
చీకటిలోమనిషి వెదకుచున్నాడు 
వ్రతములు  పూజలు చేసినగాని 
పుణ్యనదులలో మునిగినగాని  
పాపము పోదు మోక్షమురాదు (2) 
యేసే ఆమార్గం ప్రభుయేసేఆమార్గం ||రెండే|| 

2.పాపిని కోరి సిలువ వదించెను 
పాపపు శిక్షను తానెబరించెను 
నీటిలొ నరులకు కొయ్యపై వ్రేలాడి  
చక్కమగనమును పొందెను యేసు  
రక్తము కార్చెను ముక్తి నొసగెను (2) 
యేసే ఆమార్గం  ప్రభుయేసేఆమార్గం ||రెండే|| `,keywords:["rende rendu maargalu","Rende rendu margalu","Rendey rendu margaalu","Rende rendu maargaalu","akumarthi daniel"],video:"",artist:"Dr. Akumarthi Daniel",genre:["General"],timeSignature:"4/4"}],ల:[{id:l(),title:"లాలి లాలి లాలి",lyrics:`లాలి లాలి లాలి లాలమ్మ లాలీ లాలియని
పాడరే బాలయేసునకు

1. పరలోక దేవుని తనయుడో యమ్మా పుడమిపై
బాలుడుగ బుట్టెనో యమ్మా

2. ఇహ పరాదుల కర్త యీతడో యమ్మ మహి పాలనము
జేయు మహితుడో యమ్మా

3. ఆద్యంతములు లేని దేవుడో యమ్మా
ఆదాము దోషమున కడ్డు పడె నమ్మా

4. యూదులకు రాజుగాబుట్టెనో యమ్మా
యూదు లాతని తోడ వాదించి రమ్మా

5. నరగొఱ్ఱెల మంద కాపరో యమ్మా గొరియల
ప్రాణంబు క్రీస్తు తానమ్మా`,keywords:["laali laali laali","lali lali lali","andhra christian hymn","christmas"],video:"",artist:"Thirukovalluri Steven",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"7/8"},{id:l(),title:"లెక్కించలేని స్తోత్రముల్",lyrics:`లెక్కించలేని స్తోత్రముల్
దేవా ఎల్లప్పుడూ నే పాడెదన్
దేవా ఎల్లప్పుడూ నే పాడెదన్ (2)
ఇంత వరకు నా బ్రతుకులో (2)
నువ్వు చేసిన మేళ్ళకై   ||లెక్కించలేని||

1. ఆకాశ మహాకాశముల్
వాటియందున్న సర్వంబును (2)
భూమిలో కనబడునవన్ని (2)
ప్రభువా నిన్నే కీర్తించున్   ||లెక్కించలేని|| 

2. అడవిలో నివసించువన్ని
సుడిగాలియు మంచును (2)
భూమిపైనున్నవన్ని (2)
దేవా నిన్నే పొగడును   ||లెక్కించలేని|| 

3. నీటిలో నివసించు ప్రాణుల్
ఈ భువిలోన జీవ రాసులు (2)
ఆకాశమున ఎగురునవన్ని (2)
ప్రభువా నిన్నే కీర్తించున్      ||లెక్కించేని|||| `,keywords:["lekkinchaleni sthothramul","lekkinchaleni","lekkinchalene","lekinchaleni","lekinchalene","lekkinchaleney","lekkincha","worship","sthothramul","lekkinchalenii","lekkincha leeni","lekkincha leeni sthothramul","3/4"],video:"",artist:"",genre:["Worship","General"],timeSignature:"3/4"},{id:l(),title:"లేచినాడురా సమాధి గెలచినాడురా",lyrics:`లేచినాడురా
సమాధి గెలచినాడురా (2) యేసు
లేతునని తా చెప్పినట్లు (2)
లేఖనములలో పలికినట్లు   ||లేచినాడురా||

1. భద్రముగా సమాధిపైన
పెద్ద రాతిని ఉంచిరి భటులు (2)
ముద్ర వేసి రాత్రి అంతా (2)
నిద్ర లేక కావలియుండ   ||లేచినాడురా||

2. ప్రభువు దూత పరమునుండి 
త్వరగా దిగి రాతిని పొర్లించి 
భళిర దానిపై కూర్చుండె 
భయమునొంద కావలివారు  ||లేచినాడురా||

3. పాప భారము లేదు మనకు
మరణ భయము లేదు మనకు (2)
నరక బాధ లేదు మనకు (2)
పరమ తండ్రి యేసు ప్రభువు   ||లేచినాడురా||

4. యేసునందే రక్షణ భాగ్యం
యేసునందే నిత్య జీవం (2)
యేసునందే ఆత్మ శాంతి (2)
యేసునందే మోక్ష భాగ్యం   ||లేచినాడురా||

5. పాపులకై వచ్చినాడు
పాపులను కరుణించినాడు (2)
పాపులను ప్రేమించినాడు (2)
ప్రాణ దానము చేసినాడు  ||లేచినాడురా||`,keywords:["lechinadu ra samaadhi","lechinaadu raa samaadhi","leechi naadu ra samadhi","leechi naadu ra samaadhi"],video:"",artist:"",genre:["Andhra Christian Hymn","Easter"],timeSignature:"4/4"},{id:l(),title:"లోయలెల్ల పూడ్చబడాలి",lyrics:`లోయలెల్ల పూడ్చబడాలి
కొండలు కోనలు కదలిపోవాలి
వక్రమార్గము సక్రమవ్వాలి
కరకు మార్గము నునుపవ్వాలి (2)
   
రాజు వస్తున్నాడు ఆయత్తమవుదాం(2)
యేసు వస్తున్నాడు ఎదురు వెళ్ళుదాం (2)

1. ఫలం ఇవ్వని చెట్టులెల్ల
నరకబడి అగ్నిలో వేయబడును (2)

2. గోధుమను వేర్పరచి గింజలను చేర్చి
పొట్టును నిప్పులో కాల్చివేయును (2)

3. పరిశుద్ధులుగా మచ్చలు లేక
ప్రభుకై జీవించి సాగిపోదాం (2)

4. రోజు రోజు మేల్కొని ప్రార్ధించెదం
అభిషేక తైలముతో నింపబడెదం (2)`,keywords:["లోయలెల్ల పూడ్చబడాలి","looyalella poodchabadaali","loyalella pudchabadali","looyalella podchabadali"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"లంగరేసినావా నా నావకు",lyrics:`లంగరేసినావా నా నావకు 
కొట్టుకొని పోకుండా నే చివరకు 
లంగరేసినావా నా నావకు 
పట్టు జారి పోకుండా నా బ్రతుకుకు 
అలలను అదిమిపెట్టి అలజడి అనగగొట్టి 
తీరం చేరే దాక నావ లోన అడుగు పెట్టి 
కలవరమిడిచి పెట్టి కలతను తరిమి కొట్టి 
ఊపిరి ఆగే దాకా ప్రేమ తోనే చంకబెట్టి 
లోక సంద్రాన నా జీవ నౌక 
అద్దరికి చేరేదాక సాగు గాక 
నీ దరికి చేరే దాక సాగు గాక 

1. చుట్టూ ఉన్న లోకం మాయదారి 
మాయ సుడిగుండం 
నట్ట నడి సంద్రాన పట్టి లాగే వైనం (2)
రాకాసి అలలెన్నో ఎగసి ఎగసి పడుతుంటే 
ముంచేసి నేను చూస్తూ మురిసి మురిసి పోతుంటే 
నా ఆశలన్నీ కరిగి ఒంటరిగా నేనుంటే
నిరాశ వలలు తెంపి నిరీక్షణ తో నను పిలిచే 

చూసాను నీ వైపు (2)
ఆహా ఎంత చల్లని  చూపు 
ఆహా ఎంత చల్లని నీ చూపు    ||అలలను అదిమి||

2. సందేహాల గాలి తుఫాను సాగ నీక ఆగుతుంటే 
సత్య వాక్య జాడ లేక ఓడ బద్ధలవుతుంటే 
శోధన కెరటాలే ఎగసి ఎగసి పడుతుంటే 
వేదన సుడులెన్నో తరిమి తరిమి కొడుతుంటే 
ఏ దారి కానరాక దిక్కు లేక నేనుంటే 
నీ దారి నేనంటూ న నా వెంటే 

చూసాను నీవైపు (2)
ఆహా ఎంత చూపు
ఆహా ఎంత చల్లని నీ చూపు. 
||అలలను అదిమి||

3. జీవ వాక్కు చేత పట్టి నీ చిత్తాన్ని మదిన పెట్టి
జీవ దాత నీదు సేవే జీవితాని కర్ధమంటూ (2)
నా వెనుక ఉన్నవి మరచి ముందున్న వాటిని తలచి 
నేత్రాశ శరీరాశ జీవపు డంబాన్ని విడిచి 
నిను జేర రమ్మంటూ జగమంతా నే పిలచి 
క్రీస్తేసు కృపలో నిలిచి పాపపు లోకాన్ని గెలిచి 

చూస్తాను నే వైపు (2)
ఊపిరి ఉన్నంత సేపు 
నాలో ఊపిరి ఉన్నంత సేపు   
||అలలను అదిమి||`,keywords:["langaresinava","langareesinava","langaresinaava","langareesinaava","langaresenava"],video:"",artist:"Sis Kanthi Kala",genre:["General"],timeSignature:"6/8"}],వ:[{id:l(),title:"వధియింపబడిన గొర్రెపిల్లా",lyrics:`వధియింపబడిన గొర్రెపిల్లా – సింహాసనాసీనుడా (2)
నీ రక్తమిచ్చి… ప్రాణమిచ్చి… మమ్ములను కొన్నావే
ప్రతి జనములో - నీ ప్రజలను - నీ యాజక రాజ్యము చేసావే

రక్షణ జ్ఞానము స్తోత్రము – శక్తియు ఐశ్వర్యము నీదే
రాజ్యము బలము ప్రభావము – మహిమ ఘనత నీదే
అర్హుడా - యోగ్యుడా - కృతజ్ఞతకు పాత్రుడా (2)   ||వధియింప||

1. అన్నిటికి పైనున్నావు – అందరిని చూస్తున్నావు
అధికారం ఇచ్చే మహా దేవుడవు
ఆకాశ భూములయందు ఈ సృష్టి సర్వమునందు
నీ చిత్తము జరిగించే మహారాజు నువ్వు
నీ రాజ్యము నిలుచును నిరతము
నీదేగా సర్వాధికారము
నీవెవ్వరికి ఇత్తువో వారిదే ఔను భూ రాజ్యము
మహోన్నతుడు యేసుని శుద్ధులదే ఈ అధికారము   ||రక్షణ||

2. దృశ్యములు అదృశ్యములు – ఆకాశ భూజల జీవులు
అన్నియును నీ యందే సృజియింపబడెన్
సింహాసన ప్రభుత్వములు – ప్రధానులు అధికారములు
అందరును నీ శాసనముకు లోబడును
నీ మాటతో ఏలెడి ప్రభుడవు
నీవొకడివే సృష్టికి కర్తవు
పరలోక పెద్దలందరు తమ కిరీటము తీసి నిన్ను కొలుతురే
భూ రాజులు నివాసులు తమ మహిమనంతా తెచ్చి పూజింతురే    ||రక్షణ||

3. దావీదు చిగురువు నువ్వు – యూదా స్తుతి సింహము నువ్వు
దావీదు తాళపు చెవి యజమానుడవు
నువ్వు తలుపును మూసావంటే – తెరిచేటి వారే లేరు
నువ్వు తెరిచిన తలుపును మూసే వారెవరు
నీ భుజములపై రాజ్య భారము
నీదేగా నిత్య సింహాసనము
భూరాజ్యములన్నింటిని కూలగొట్టి నిలుచును నీ రాజ్యము
నిను విశ్వసించు వారికే చెందుతుంది నీ సత్య రాజ్యము    ||రక్షణ||

4. సెరాపులు కెరూబులచే – పరిశుద్ధుడు పరిశుద్ధుడని
తరతరములు కొనియాడబడే శుద్ధుడవు
నీ స్తుతిని ప్రచురము చేయ – మమ్మును నిర్మించావయ్యా
మా ఆరాధనకు నీవే యోగ్యుడవు
నీ నామము బహు పూజనీయము
ప్రతి నామమునకు పై నామము
ప్రతి వాని మోకాలును ప్రభు యేసు నామమందున వంగును
ప్రతి నాలుక యేసుడే అద్వితీయ ప్రభువని ఒప్పును    ||రక్షణ||`,keywords:["anil kumar","anilkumar","vadhiyimpabadina gorre pilla","vadhiyimpa","vadiyimpa badina","vadhimpabadina gorri pilla","vadimpabadina gorre","vadimpabadina gorre","vadhiyimpabadina gorre","4/4"],video:"",artist:"Anil Kumar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"వచ్చింది క్రిస్మస్ వచ్చింది",lyrics:`వచ్చింది క్రిస్మస్ వచ్చింది  తెచ్చింది పండుగ తెచ్చింది 
వచ్చింది క్రిస్మస్ వచ్చింది  తెచ్చింది రక్షణ  తెచ్చింది (2)
ఉరువాడ పల్లెపల్లెలోన ఆనందమే ఎంతో సంతోషమే (2)
మన చీకటి బ్రతుకులలోన ప్రభు యేసు జన్మించెను (2)
రారండోయ్ వేడుక చేద్దాం కలిసి రారండోయ్ పండుగ చేద్దాం (2)
||వచ్చింది (2)||

1. దావీదు పట్టణములో భేత్లేహేము గ్రామములో 
కన్యమరియ గర్బమునందు బాలుడిగా జన్మించెను(2)
అంధకారమే తొలగిపోయెను చికుచింతలే తీరిపొయెను (2) 
మన చీకటి బ్రతుకులలోన ప్రభు యేసు జన్మించెను (2)
రారండోయ్ వేడుక చేద్దాం కలిసి రారండోయ్ పండుగ చేద్దాం (2)
||వచ్చింది (2)||

2. ఆకాశంలో ఒక ధూత పలికింది శుభవార్త  
మనకొరకు రక్షకుడేసు ధీనునిగ పుట్టాడని (2) 
పాపశాపమే తొలగించుటకు గొప్పరక్షణ మనకిచ్చుటకు  
మన చీకటి బ్రతుకులలోన ప్రభు యేసు జన్మించెను (2)
రారండోయ్ వేడుక చేద్దాం కలిసి రారండోయ్ పండుగ చేద్దాం (2)
||వచ్చింది (2)||`,keywords:["vachindhi christmas vachindhi","raarandoi veeduka chedham","Rarandoi veduka chedham","rarandi voy veduka chedham","vachindi christmas vachindi","vachinde christmas vachinde","vachende christmas","vachendi"],video:"",artist:"Bro Joshua Gariki",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"వరించిన దైవమా - వసించే వాక్యమా",lyrics:`వరించిన దైవమా - వసించే వాక్యమా
మహోన్నత శిఖరమా - ఆధారమా 
క్షమించిన బంధమా  - సహించే స్నేహమా 
నిరంతర స్వాస్థ్యమా - నా యేసయా
వరించిన దైవమా

1.  ప్రేమింతును -  ప్రార్థింతును
నిన్నే - ఆత్మతో 
నీ నామమే  -  నా బలం 
నిన్నే - కీర్తింతును 
నా జీవితం - నీకే అంకితం
దయా సాగరా - దీవించవా 
చేరాను  -   నీ పాదము
చూపించు - నీ  మార్గము  

2.  బలపరచుమా  - స్థిరపరచుమా
తోడై - కావుమా
వెలిగించుమా  - దీపమా 
నీకే  - ఆరాధన 
నీ ప్రేమయే - నన్నే తాకగా
ఇదే ఆశతో  - నా యేసయ్య 
జీవింతు - నీ ప్రేమలో  
తరియింతు  - నీ సేవలో`,keywords:["varinchina dhaivama","varinchena daivama","varinchena dhaivamaa","varenchina daivama","pranam kamlakhar","varinchina daivama"],video:"",artist:"Pranam Kamlakhar, Shweta Mohan, Joshua Shaik",genre:["General"],timeSignature:"4/4"},{id:l(),title:"వర్ణింపతరమా నిన్ను నేను యేసువా",lyrics:`వర్ణింపతరమా నిన్ను నేను యేసువా 
పాడతరమా నీదు కృపను యేసువా (2)
నీ కౌగిట చేరు కొనుటకై
ఆశించితి ప్రాణనాథుడ 
నీ స్వరమును నిరాతం వినుటకై
ఆశించితి ఆత్మనాథుడ 

కృపకు మూలము నీవెగా (2)

1. సిలువను నే చూడగా
నిండెను కృతజ్ఞతా (2)
కనులు నిండే భాష్పములతో 
నోరు నిండే స్తోత్రములతో
ఆత్మ రక్షణ నాకోసగ బలియైతివే
నీ యెదుట నిలిచెదా నా సర్వం ఇచ్చేద
కరుణా సాగరా నీవెగా (2)

2. నీ వాక్కును నే చూడగా
నా భాగ్యము కనుగొంటిని (2)
నీదు సుతగా శ్రేష్ట స్థితిని
సంతసంబగు స్వర్గ స్థితిని 
దానముగా నీ కృప వరములను పొందితి 
నీ ఆత్మ శక్తితో జీవింతును సాక్షిగా 
మహిమ ప్రభుడవు నీవెగా (2)`,keywords:["varnimpatharama","varnimpatarama","varnimpa tharama","varnimpa tarama"],video:"",artist:"Pastor Samuel Wilson, Jeeva R. Pakerla, Nithya Mammen, Jonah Samuel",genre:["General"],timeSignature:"4/4"},{id:l(),title:"వందనాలు యేసు",lyrics:`వందనాలు యేసు నీకే వందనాలు యేసు
కాంటిపాపలా కాచినందుకు వందనాలు యేసు 
కన్నతండ్రిలా సాకినందుకు వందనాలు యేసు(2)

1.నిన్న నేడు ఎన్నడు మారని
మా మంచివాడా యేసు నీకే వందనం(2)
మంచివాడా మంచి చేయువాడా
నీ హస్తాలతో నన్ను చెక్కుకుంటివి(2)  ||వందనాలు||

2.దీనా దశలో నేను ఉన్నప్పుడు
నా నీడ నన్ను విడిచి పోయినప్పుడు/2/
చెంత చేరి నా చింత తీర్చి
నీ వింతైన ప్రేమలో ముంచెత్తితివి(2)
     ||వందనాలు యేసు||`,keywords:["vandhanaalu yesu","vandhanaalu yeesu","vandanalu yesu","vandanaalu yeesu","vandhanaalu","vandanaalu","vandanalu","vandhanalu"],video:"",artist:"",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"వాగ్దానములు అన్ని నెరవేర్చు చున్నడు",lyrics:`వాగ్దానములు అన్ని నెరవేర్చు చున్నడు
నాలో నెరవేర్చుచున్నాడు (2)
నేను జడియను భయపడను
అలసిపొను 
వాగ్దానము నా సొంతమెగా

1. కన్నీటిని తుడుచువాడవు
కదలకుండ నన్ను నిలబెట్టు వాడవు (2)
ప్రతి వాగ్దానమును నెరవేర్చు వాడవు(2)
నా నీతి వలన కానే కాదయా
అంతా నీ నీతి వలనేనయ్య(2)
||నేను జడియను||

2. క్రూంగిపొక నే సాగిపొదును
నీ కృప నా తోడు వున్నదిగ అయ్యా (2)
అది ఇరుకైనను 
విశాలము అయినను (2)
విస్తారమైన కృప వుండగా
నేను అలియక సాగేదేను అయ్యా(2)
(నేను జడియను )

నా యేసయ్యా తోడు వుండగా`,keywords:["vaakdhaanamulu anni neraveerchuchunnadu","vaakdhanamulu anni neraverchuchunnadu","vakdhanamulu anni neraverchuchunnadu","vakdanamulu anni neraverchu","vaagdhaanamulu anni neraveerchu","vagdhanamulanni neraverchu","vakdaanamulu anni neraverchu"],video:"",artist:"Pastor Vinod Kumar, Benjamin Johnson",genre:["General"],timeSignature:"6/8"},{id:l(),title:"వాడిపోకముందే నన్ను వాడుకో",lyrics:`వాడిపోకముందే నన్ను వాడుకో
పొద్దు వాలిపోకముందే నన్ను వాడుకో (2)
వాడుకో యేసయ్యా – నీ కాడి నే మోస్తా (2)  ||వాడిపోక||

1. నీవిచ్చిన యవ్వన బలము నిర్వీర్యము కాకముందే
నాకున్న సంపదలన్నీ రెక్కలొచ్చి పోకముందే (2)  ||వాడుకో||

2. నీవిచ్చిన జీవితానికి వెలుగులింక పోకముందే
నా బ్రతుకు యాత్రకు చీకటింక రాకముందే (2)  ||వాడుకో||

3. నీవిచ్చిన ప్రాణము దేహాన్ని వీడకముందే
నా దినముల పరిమాణం సంపూర్ణం కాకముందే (2)  ||వాడుకో||

4. నీవిచ్చిన ఆరోగ్యం ఆవిరిగా మారకముందే
నాకున్న అవకాశం చేజారి పోకముందే (2) ||వాడుకో||`,keywords:["vaadipooka mundhe nannu vaaduko","vadipoka mundhe nannu vaduko","vadipoka munde nanu vaduko"],video:"",artist:"Bro Subhakar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"విజయ గీతముల్ పాడరే",lyrics:`విజయ గీతముల్ పాడరే
క్రీస్తుకు జయ – విజయ గీతముల్ పాడరే (2)
వృజిన మంతటి మీద – విజయ మిచ్చెడు దేవ
నిజ కుమారుని నామమున్
హృదయములతో – భజన జేయుచు నిత్యమున్  ||విజయ||

1. మంగళముగ యేసుడే
మనకు రక్షణ – శృంగమై మరి నిలచెను
నింగిన్ విడిచి వచ్చెను
శత్రుని యుద్ధ – రంగమందున గెల్చెను
రంగు మీరగదన – రక్త బలము వలన
పొంగు నణగ జేసెను
సాతానుని బల్ – కృంగ నలిపి చీల్చెను ||విజయ||

2. పాపముల్ దొలగింపను
మనలను దన స్వ – రూపంబునకు మార్పను
శాపం బంతయు నోర్చెను
దేవుని న్యాయ – కోపమున్ భరియించెను
పాపమెరుగని యేసు – పాపమై మనకొరకు
పాప యాగము దీర్చెను
దేవుని నీతిన్ – ధీరుడై నెరవేర్చెను ||విజయ||

3. సిలువ మరణము నొందియు
మనలను దనకై – గెలువన్ లేచిన వానికి
చెలువుగన్ విమలాత్ముని
ప్రేమను మనలో – నిలువన్ జేసిన వానికి
కొలువు జేతుమెగాని – ఇలను మరువక వాని
సిలువ మోయుచు నీ కృపా
రక్షణ చాల విలువ గలదని చాటుచు ||విజయ||`,keywords:["vijaya geethamul paadaare","vijaya gethamul padare","vijaya getamul padare","vijaya gethamulu padarey","vijaaya","vijaaya geethamul paadarey","holy communion","communion","7/8"],video:"",artist:"",genre:["Andhra Christian Hymn","Redemption","Salvation"],timeSignature:"7/8"},{id:l(),title:"విజయంబు విజయంబు",lyrics:`విజయంబు విజయంబు విజయంబు మా యేసు నిజమె మృత్యువు
గెల్చి నేడు వేంచేసె యజమాను డెల్ల ప్ర యాసము లెడబాప
స్వజనుల రక్షింప సమసె సిలువమీద ||విజయంబు||

1. విజయంబు విజయంబు విజయంబు మానవుల వృజిన నివృత్తిని
విభు డొనరింపన్ గుజనులచే నతడు క్రూర మరణము నొంది విజిత
మృత్యువు నుండి విజయుండై వేంచేసె ||విజయంబు||

2. విజయంబు విజయంబు విజయంబు మా యేసు భుజము మీఁదను
మోయు బరిపాలనంబు కుజము మీదను బ్రాణ త్యజనము జేసెను
ధ్వజము మోయుచు సిల్వ పాప మోడింతము ||విజయంబు||

3. విజయంబు విజయంబు విజయం బికను మా క పజయము కాకుండఁ
బ్రభు యేసు క్రీస్తు సుజనత్వమున వైరి వ్రజము గెల్వగజేసి
నిజముగ బరలోక నిలయంబులో నిల్పు ||విజయంబు||

4. విజయంబు విజయంబు విజయం బనెడి పాట నిజభక్తితో మనము
నేర్చిన వాని భజియించుదము భూన భములు తా బాలించు అజిత
జీవ ప్రదు డమరత్వ మిడు మనకు ||విజయంబు||`,keywords:["vijayambu vijayambu","vijayambhu vijayambhu","andhra christian hymn","7/8"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"విడువని దేవుడ నీవే మా మంచి యేసయ్యా",lyrics:`విడువని దేవుడ నీవే మా మంచి యేసయ్యా
పాపికి ఆశ్రయపురము నీవే మెస్సయ్యా
ప్రేమించుటకు క్షమియించుటకు
రక్షించుటకు అర్హుడ నీవే (2)
యేసయ్యా యేసయ్యా యేసయ్యా యేసయ్యా

1. నలువది సంవత్రరములు మా పితరుల నడిపిన దేవా
అరణ్య మార్గమైనా అన్నీ నీవైనావు (2)
జీవాహారమై ఆకలి తీర్చావు
కదిలే బండవై దాహము తీర్చావు (2)
యేసయ్యా యేసయ్యా యేసయ్యా యేసయ్యా

2. ఇత్తడి సర్పమువోలే పైకెత్తబడినావు
నిన్ను చూచినవారు ఆనాడు బ్రతికారు (2)
సిలువపై వ్రేలాడే నీ దరి చేరిన
జనులందరు నేడునిత్యము బ్రతుకుదురు (2)
యేసయ్యా యేసయ్యా యేసయ్యా యేసయ్యా`,keywords:["viduvani dhevuda neeve","viduvani devuda neeve","veduvani devuda neeve","viduvani dhevuda nive","viduvani dhevuda nivey","akumarthi daniel"],video:"",artist:"Dr. Akumarthi Daniel",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"వినరండి నా ప్రియుని విశేషము",lyrics:`వినరండి నా ప్రియుని విశేషము
నా ప్రియుడు సుందరుడు మహా ఘనుడు (2)
వినరండి నా ప్రియుని విశేషము
నా వరుడు సుందరుడు మహా ఘనుడు (2)
నా ప్రియుని నీడలో చేరితిని
ప్రేమకు రూపము చూసితిని (2)
ఆహ ఎంతో మనసంతా ఇక ఆనందమే
తనువంతా పులకించి మహదానందమే       ||వినరండి||

1. మహిమతో నిండిన వీధులలో
బూరలు మ్రోగే ఆకాశ పందిరిలో (2)
జతగా చేరెదను ఆ సన్నిధిలో
కురిసె చిరుజల్లై ప్రేమామృతము
నా ప్రియ యేసు నను చూసి దరి చేరునే
జతగా చేరెదను ఆ సన్నిధిలో
నా ప్రేమను ప్రియునికి తెలిపెదను
కన్నీరు తుడిచేది నా ప్రభువే       ||వినరండి||

2. జగతికి రూపము లేనప్పుడు
కోరెను నన్ను తన కొరకు నా ప్రభువు (2)
స్తుతినే వస్త్రముగా ధరించుకొని
కృపన్ జయధ్వనితో కీర్తించెదను
నా ప్రభు యేసు చెంతన చేరెదను
స్తుతినే వస్త్రముగా ధరించుకొని
నా ప్రభు యేసు చెంతన చేరెదను
యుగమొక క్షణముగ జీవింతును       ||వినరండి||

3. తలపుల ప్రతి మలుపు గెలుపులతో
నిలిచె శుద్ధ హృదయాల వీరులతో (2)
ఫలము ప్రతిఫలము నే పొందుకొని
ప్రియ యేసు రాజ్యములో నే నిలిచెదను
ఆ శుభవేళ నాకెంతో ఆనందమే
ఫలము ప్రతిఫలము నే పొందుకొని
ఆ శుభవేళ నాకెంతో ఆనందమే
నా ప్రియుని విడువను నేనెన్నడు  ||వినరండి||`,keywords:["vinarandi na yesuni viseshamu","vinarandi naa yesuni","venarande na yesuni","venarandi na yesuni","vinarandi naa yeesuni","vinarandi nayesuni","vinarandi naayeesuni","kamalakar","pranam kalamakar","4/4"],video:"",artist:"Pranam Kamlakhar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"వినరే యో నరులారా",lyrics:`వినరే యో నరులారా – వీనుల కింపు మీర
మనల రక్షింప క్రీస్తు – మానుజావతారుడయ్యె – వినరే
అనుదినమును దే-వుని తనయుని పద
వనజంబులు మన-మున నిడికొనుచును     ||వినరే||

1. నర రూపు బూని ఘోర – నరకుల రారమ్మని
దురితము బాపు దొడ్డ – దొరయౌ మరియా వరపుత్రుడు
కర మరు దగు క-ల్వరి గిరి దరి కరి
గి రయంబున ప్రభు – కరుణను గనరే     ||వినరే||

2. ఆనందమైన మోక్ష-మందరి కియ్య దీక్ష
బూని తన మేని సిలువ – మ్రాను నణచి మృతి బొందెను
దీన దయా పరు-డైన మహాత్ముడు
జానుగ యాగము – సలిపిన తెరంగిది     ||వినరే||

3. ఇల మాయావాదుల మాని – యితడే సద్గురు డని
తలపోసి చూచి మతి ని-శ్చల భక్తిని గొలిచిన వారికి
నిల జనులకు గలు-ములనలరెడు ధని
కుల కందని సుఖ-ములు మరి యొసఁగును     ||వినరే||

4. దురితము లణప వచ్చి – మరణమై తిరిగి లేచి
నిరత మోక్షానంద సుం-దర మందిరమున కరుదుగ జనె
బిరబిర మన మం-దర మా కరుణా
శరనిధి చరణ మె – శరణని పోదము     ||వినరే||`,keywords:["vinare yo narulaara","vinare yo narulara","vinareyo narulara","vinarey yo narulara","andhra christian hymn","christmas","4/4"],video:"",artist:"Purushotham Chowdary",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"వినవా మనవి యేసయ్య",lyrics:`వినవా మనవి యేసయ్య
ప్రభువా శరణం నీవయ్యా
మలినము నా గతం
పగిలెను జీవితం
చేసుకో నీ వశం
వినవా ప్రభువా

1.లోక స్నేహమే కోరి దూరమైతిని
వీడిపోయి నీ దారి ఓడిపోతిని
విరిగిన మనస్సుతో నిన్ను చేరాను
చితికిన బ్రతుకులో బాగు కోరాను
నన్ను స్వీకరించి నీతో ఉండనీ యేసయ్యా
నా తండ్రి నీవేనయ్యా

2.ఆశ యేది కనరాక బేలనైతిని
బాధలింక పడలేక సోలిపోతిని
అలసిన కనులతో నిన్ను చూశాను
చెదరిన కలలతో కృంగిపోయాను
నన్ను సేదదీర్చి సంతోషించనీ యేసయ్యా
నా దైవము నీవయ్యా`,keywords:["vinava manavi yesayya","vinavaa manavi","vinava manave","stevenson","vinava manavie","Pranam Kamlakhar","vinavamanavi yesayya"],video:"",artist:"Dr. A.R. Stevenson, Pranam Kamlakhar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"విరబూసిన పుష్పమా జత కలిసే బంధమా",lyrics:`విరబూసిన పుష్పమా జత కలిసే బంధమా
నెడు సంతసించుమా
ప్రేమించే స్నేహమా నాతోడై వుండుమా
దేవుని చిత్తమందునా
నువ్వు నేను ఒకరికి ఒకరై 
విశ్వాస ప్రేమలతో జీవిద్దామా
గృహ జీవితమే, ప్రభుని దీవెనయె
కలకాలం ఉందాం క్రీస్తే అధిపతిగా  ||విరబూసిన||

1. నీ జీవితాన ప్రభు యేసు కోసం
మన మిద్దరం ఒక మందిరం (2)
మన ఆశలన్నీ తీర్చే దేవుడుండగా
భయమేల,ఇక దిగులేల (2)  ||విరబూసిన||

2. హృదయాలు రెండు, ఒకటాయే నేడు
ప్రార్థించగా, దీవించగా (2)
కష్ట సుఖాల యందు తోడు తొడునీడగా
కడదాకా కలిసి వెళదామా (2)  ||విరబూసిన||`,keywords:["విరబూసిన పుష్పమా","virabusina pushpama","viraboosina pushpama","virabosina pushpamaa","marriage"],video:"",artist:"JK Christopher, Sharon Philip",genre:["Marriage"],timeSignature:"3/4"},{id:l(),title:"విరిసిన హృదయాలకు కలిసెను బంధం",lyrics:`విరిసిన హృదయాలకు కలిసెను బంధం
కనుసైగలు చేయుచు ముచ్చటించెను (2)
తీయని భాసలే కమ్మని ఊసులే
బంధువుల రాక స్నేహితుల యేర మనసు మురిపించెనే ||విరిసిన||

1. ఆశకే లేవు హద్దులు మనిషైనా ప్రతివానికి
అవి కలతలా బాధ రేపెను మరు క్షణము నీ బ్రతుకులో (2)
ఉన్నదంత చాలని – ప్రభువు మనకు తొడని (2)
మరువకుమా ప్రియ మరువకుమా ||విరిసిన||

2. మనసులో దాగే తపనకు ప్రతిరూపమే ఈ దినం
ఎదురు చూసే పరువానికి ప్రతిరూపమే ఈ దినం (2)
ఏక మనస్సుతోనే – చక్కనైన జీవితం (2)
మరువకుమా ప్రియ మరువకుమా ||విరిసిన||`,keywords:["విరిసిన హృదయాలకు కలిసెను బంధం","virisina hrudayaalaku","viresina hrudayaalaku","virisina hrudhayaalaku","veresina hrudayaalaku","marriage"],video:"",artist:"Jonah Samuel, Jonah Samuel",genre:["Marriage"],timeSignature:"2/4"},{id:l(),title:"విలువేలేని నా జీవితం",lyrics:`విలువేలేని నా జీవితం – నీ చేతిలో పడగానే
అది ఎంతో విలువని నాకు చూపితివే
జీవమే లేని నాలో నీ – జీవమును నింపుటకు
నీ జీవితాన్నే ధారబోసితివే (2)

నీది శాశ్వత ప్రేమయా – నేను మరచిపోలేనయా
ఎన్ని యుగాలైనా మారదు
ఎండిన ప్రతి మోడును – మరలా చిగురించును
నా దేవునికి సమస్తము సాధ్యమే (2)

1. పాపములో పడిన నన్ను
శాపములో మునిగిన నన్ను
నీ ప్రేమతో లేపితివే
రోగమే నన్ను చుట్టుకొనియుండగా
రోదనతో ఒంటరినైయుండగా
నా కన్నీటిని తుడిచితివే (2) ||నీది||

2. పగలంతా మేఘ స్తంభమై
రాత్రంతా అగ్ని స్తంభమై
దినమంతయు రెక్కలతో కప్పితివే
స్నేహితులే నన్ను వదిలేసినా
బంధువులే భారమని తలచినా
నా కొరకే బలి అయితివే (2) ||నీది||

3. సాధ్యమే సాధ్యమే సాధ్యమే
నా యేసుకు సమస్తము
సాధ్యమే సాధ్యమే సాధ్యమే
నా ప్రియునికి సమస్తము (2)

ఎండిన ప్రతి మోడును మరలా చిగురించును
నా దేవునికి సమస్తము సాధ్యమే (2) ||విలువేలేని||`,keywords:["viluvee leeni naa jeevitham","viluva leni na jivitham","viluvee","viluvaa","viluve leeni","viluvee leni","viluvee leeni","veluve lene na jevetham","veluve leni","veluvee leeni","4/4"],video:"https://www.youtube.com/embed/sAo6-X8zPZ4?start=1016",artist:"Vinod Kumar & Benjamin Johnson",genre:["Worship","Love"],timeSignature:"4/4"},{id:l(),title:"వివాహమన్నది పవిత్రమైనది",lyrics:`వివాహమన్నది పవిత్రమైనది
ఘనుడైన దేవుడు ఏర్పరచినది (2)
ఎముకలలో ఒక ఎముకగా – దేహములో సగ భాగముగా (2)
నారిగా సహకారిగా- స్త్రీని నిర్మించినాడు దేవుడు (2) ||వివాహమన్నది||

1. ఒంటరిగా ఉండరాదని – జంటగా ఉండ మేలని (2)
శిరస్సుగా నిలవాలని – పురుషుని నియమించినాడు దేవుడు (2)  ||వివాహమన్నది||

2. దేవునికి అతిప్రియులుగా – ఫలములతో వృద్ధి పొందగా (2)
వేరుగా నున్న వారిని – ఒకటిగ ఇల చేసినాడు దేవుడు (2)   ||వివాహమన్నది||`,keywords:["vivaahamannadhi pavithramainadhi","vivaham annadhi pavitham ayenadhi","vivahamannadhi pavithramainadhi","vivahamanadi pavitramainadi"],video:"",artist:"",genre:["General"],timeSignature:"6/8"},{id:l(),title:"విశాల గగనంలో ఉదయించెను ఒక తార",lyrics:`విశాల గగనంలో ఉదయించెను ఒక తార
వెన్నెల కిరణాలే ప్రసరించెను భువిపైన
హృదయంలో ఆనందం పొంగెను ఈ శుభతరుణం
యేసుని జన్మదినం ప్రభుయేసుని జన్మదినం
లా లల...లా లల...

1. తార దీపం త్రోవ చూపగా
సాగిరి ముగ్గురు జ్ఞానులు
దైవకుమారుని చూడగా 
దివ్యానందం పొందగా
పరమ పావనుని పశులశాలలో 
గాంచిరి జన్మము తరించగా
లా లల...లా లల...

2. మరియ కుమారుడు మనుజ రక్షకుడు
దర్శన మొసెగెను పశులశాలలో
ఆరని వెలుగు రాశిగా అందకారమె బాపగా
సాగిల పడిరి తన యాత్రికులు
బాల యేసుని స్తోత్రము చేయగా
లా లల...లా లల...`,keywords:["christmas","visaala gaganamulo","vishala gaganamulo","vishaala gaganamu lo","visaala gaganamu loo","vishaalagaganamulo","vishalagaganamulo"],video:"",artist:"",genre:["Christmas"],timeSignature:"2/4"},{id:l(),title:"విందాము రండి యేసయ్య మాట",lyrics:`విందాము రండి యేసయ్య మాట
ఉందాము రండి యేసయ్య చెంత

ఆయన లో జీవము ఆయనలొ దైవము
ఆయనె సమస్తము...ఆయనె సర్వస్వము  ||విందాము||

1. పేతురు విన్నడు వలను వేసాడు  
విస్తార పంటను కళ్ళార చుసాడు (2)
ఆయన మాట విందాము దీవెన కరముగ ఉందాము (2)
మనమందరము యేసుని సన్నిధిలో
మనమందరము యేసుని సముఖములో   ||విందాము||

2. లాజరు విన్నడు సజీవుడయ్యడు 
యేసయ్యను గూర్చి సాక్ష్యమిచ్చాడు (2)
ఆయన మాట విందాము దీవెన కరముగ ఉందాము (2)
మనమందరము యేసుని సన్నిధిలో
మనమందరము యేసుని సముఖములో   ||విందాము||

3. జక్కయ్య విన్నడు చెట్టు దిగినాడు
మార్పు చెందాడు మనిషిగ మార్చాడు
ఆయన మాట విందాము దీవెన కరముగ ఉందాము (2)
మనమందరము యేసుని సన్నిధిలో
మనమందరము యేసుని సముఖములో  ||విందాము||`,keywords:["vindhaamu randi","vindamu randi","vindhaamu rande","vindamu rande","vindhaamu rande","vindaamu randi","yesayya maata","joseph","vindhamu randi","vendhamu randi","vendamu randi","vindhamurandi","vindamurandi"],video:"",artist:"Bro V.Joseph",genre:["General"],timeSignature:"4/4"},{id:l(),title:"వెలసెనులే గగనాన తూర్పుతార",lyrics:`వెలసెనులే గగనాన తూర్పుతార - నిశీధిరేయి జాములో 
కురిసెనులే జగాన ప్రేమధార - రక్షకుడేసు జన్మలో 
క్రిస్మస్ కాంతులే లోకాన వెలిగెనే - ప్రభుయేసే జన్మించగా 
కన్యకు పుట్టేనేడు పరిశుద్ధుడే - దీనులు ధన్యులాయెనే  

శుభవార్త దూతదెల్పగ - ఆ గొల్లలే గంతులేసేనే 
లోకాన రక్షణానందమే - పరలోకానా సంగీతమాయెనే

1. తరించిపోయే ఆ తూర్పు జ్ఞానులు - తీరాలు దాటి నిను చూడగా 
బంగారు సాంబ్రాణి బోళములర్పించి - నమస్కరించి పూజించిరి 
రారాజే రక్షకుడై మనకోసం జన్మించెనని 

2. జగాలనేలే జయశీలుడేసే - జీవాధిపతిగా జనియించెనే 
శరీరధారై పరిశుద్ధుడేసే - పశుశాలలోన పవళించెనే 
జయగీతం పాడి - కీర్తించి కొనియాడెదము 

3. మా పాపభారం భరియించెనే - మా దుఃఖ దోషం తొలగించెనే 
మన్నించి మమ్ము క్షమియించెనే - కరుణించి మాపై కృపచూపునే 
మనసున్న మహారాజై - మా మదిలో ఉదయించెనే`,keywords:["velasenule gaganaana","velasenu le gaganaana","velasenu le gaganana","velasenule gaganana"],video:"",artist:"JK Christopher & Sharon Sisters",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"వెలిగించుమయా నా యేసయ్య",lyrics:`వెలిగించుమయా నా యేసయ్య
నా జీవన దీపం నీవేనయ్య (2)
శరణం శరణం శరణం దేవా (2)

1. నిను చూడలేని ఈ కనులెందుకయా
నిను కోరలేని ఈ బ్రతుకెందుకయా
నిను చేరలేని ఈ తనువెందుకయా
నాకున్న సర్వం నీవేనయ్య (2)  ||శరణం...||

2.ఆత్మాంధకారం తొలగించుమయా
నీ జీవన వేదం బోదించుమయా
పరిపూర్ణ స్వస్థతను నాకొసగుమయా
నీ చెంత చేరే వరమీయుమయా (2) ||శరణం...|`,keywords:["veliginchumaya","veliginchumayaa","veliginchumaya","velinchu maya","viliginchu maya","light","candle light service","christmas","velinchumia","3/4"],video:"",artist:"",genre:["Light","Christmas"],timeSignature:"3/4"},{id:l(),title:"వెలివేయబడిననని - వంటరినై పోయానని/వారసునిగా",lyrics:`వెలివేయబడిననని - వంటరినై పోయానని
వేదనతో ఉన్నవేమో

నీవు నా క౦టిపాపని - నిను మరువలేనని
చెప్పాడు మరిచావేమెా

గు౦డెలో గాయము - మానును కాయము
యేసు నీ స్థితిని సరిచేయును - నీ కన్నీరు తుడిచేయును
||వెలివేయ...||

1. త్రోసివేసిన - అన్నలే - అమ్మివేసినా  (2)
నాన్న  తోడు లేకున్న - బ౦దకాలలో వున్న (2)
బలపరచి అతన్ని - చేసాడు అధిపతిని
విడువక తన చేతిని
యోసేపు వలె నిన్ను - నిజమైన దీవెనకు
చేస్తాడు వారసునిగా
|| గు౦డెలో గాయము...||
||వెలివేయ...||

2. పేరె వేదన - ప్రతి - రోజు రోదన
ప్రయత్ని౦చిన - ఓటమి పలుకరించిన
కల్ల ని౦డ నీళ్లున్న - దారి కానరాకున్న ||2||
వేదనను దీవెనగా - ప్రతి రోజు పండుగల
మార్చాడు ఓ జీవితం
యబ్బేజు వలె నిన్ను - నిజమైన దీవెనకు
చేస్తాడు వారసునిగా
|| గు౦డెలో గాయము...||
||వెలివేయ...||`,keywords:["వెలివేయబడిననని వంటరినై పోయానని","వారసునిగా","veliveeyabadinanani","veliveeya badinanani","vaarasuniga","varasuniga","varasunega","hope","encouragement"],video:"",artist:"Samuel Karmoji, Joel Suhas karmoji",genre:["Hope","General"],timeSignature:"4/4"},{id:l(),title:"వెండి బంగారాల కన్న మిన్న అయినది",lyrics:`వెండి బంగారాల కన్న మిన్న అయినది
యేసు ప్రేమ – నా యేసు ప్రేమ (2)
లోక జ్ఞానమునకు మించిన ప్రేమ (2)
లోకస్థులు ఎవ్వరు చూపలేని ప్రేమ (2)   ||వెండి||

1. లోకమునకు వెలుగైన ప్రేమ
లోకమును వెలిగించిన ప్రేమ (2)
లోకులకై కరిగిపోయిన ప్రేమ
లోకాన్ని జయించిన ప్రేమ (2)
యేసు ప్రేమా – శాశ్వత ప్రేమా (2)
హల్లెలూయా మహదానందమే (2)    ||వెండి||

2. ఏ స్థితికైనా చాలిన ప్రేమ
నీ పరిస్థితిని మార్చగల ప్రేమ (2)
నీకు బదులు మరణించిన ప్రేమ
చిర జీవము నీకొసగిన ప్రేమ (2)
యేసు ప్రేమా – శాశ్వత ప్రేమా (2)
హల్లెలూయా మహదానందమే (2)    ||వెండి||`,keywords:["vendi bangaaralakanna","vendi bangaarala kanna","andhra christian hymn","general","6/8"],video:"",artist:"",genre:["Andhra Christian Hymn","General","Love"],timeSignature:"6/8"},{id:l(),title:"వేసారిన మనసే ఊగెనే",lyrics:`వేసారిన మనసే ఊగెనే
చేజారిన స్ధితికి చేరెనే
యే గాయమైన మానదే
నాకున్న బలము చాలదే (2)
వినిపించు యేసు నీ స్వరం
నడిపించు నీతో అనుక్షణం   ||వేసారిన||

1. కోరినాను శ్రేయమైన నీ ప్రేమనే
తాళలేను లేసమైన నీ కోపమే
భారము మోపకే లోపమూ చూడకే
ఎన్నడు నీ కృప దూరము చేయకే   ||వేసారిన||

2. వాడిపోదు శ్రేష్టమైన ఈ బంధమే
వీడిపోదు ఆదరించే నీ స్నేహమే
తోడుగా ఉండునే – త్రోవను చూపునే
చేకటి కమ్మినా క్షేమము పంపునే    ||వేసారిన||`,keywords:["veesaarina manase oogene","vesarina manase oogene","vesaarina manase","vesaarena manase","vesaarina","veesaarina","veesarina manase","veysarina manase","vesarena manase","kamalakar","pranam kamalakar","4/4"],video:"",artist:"Pranam Kamlakhar",genre:["General"],timeSignature:"4/4"},{id:l(),title:"వందనంబొనర్తుమో ప్రభో ప్రభో",lyrics:`వందనంబొనర్తుమో ప్రభో ప్రభో
వందనంబొనర్తుమో ప్రభో ప్రభో
వందనంబు తండ్రి తనయ శుద్ధాత్ముడా
వందనంబు లందుకో ప్రభో    ||వందనం||

1. ఇన్ని నాళ్ళు ధరను మమ్ము బ్రోచియు
గన్న తండ్రి మించి ఎపుడు గాచియు
ఎన్నలేని దీవెన లిడు నన్న యేసువా
యన్ని రెట్లు స్తోత్రములివిగో   ||వందనం||

2. ప్రాత వత్సరంపు బాప మంతయు
బ్రీతిని మన్నించి మమ్ము గావుము
నూత నాబ్దమునను నీదు నీతి నొసగుమా
దాత క్రీస్తు నాథ రక్షకా  ||వందనం||

3. దేవ మాదు కాలుసేతు లెల్లను
సేవకాలి తనువు దినములన్నియు
నీ వొసంగు వెండి పసిడి జ్ఞానమంత నీ
సేవకై యంగీకరించుమా  ||వందనం||

4. కోతకొరకు దాసజనము నంపుము
ఈ తరి మా లోటుపాట్లు దీర్చుము
పాతకంబు లెల్ల మాపి భీతి బాపుము
ఖ్యాతి నొందు నీతి సూర్యుడా    ||వందనం||

5. మా సభలను పెద్దజేసి పెంచుము
నీ సువార్త జెప్ప శక్తి నీయుము
మోసపుచ్చు నందకార మంత ద్రోయుము
యేసు కృపన్ గుమ్మరించుము   ||వందనం||`,keywords:["vandhanambu nathumo prabho","vandhanambu nathumo prabhu","vandhanambu natthumo prabho","vandanambu nathumo prabho","new year","andhra christian hymns","6/8"],video:"",artist:"Matthayi Samuyelu",genre:["Andhra Christian Hymn","New Year"],timeSignature:"6/8"},{id:l(),title:"వింతైన తారక వెలిసింది గగణన",lyrics:`వింతైన తారక వెలిసింది గగణన 
యేసయ్య జన్మస్థలము చూపించు కార్యాన (2)
జ్ఞానులకే తప్పలేదు ఆ తార అనుసరణ
దైవమే పంపెనని గ్రహియించు హృదయాన (2)

మనమంతా జగమంతా
తారవలె క్రీస్తును చాటుదాం
హ్యాప్పీ క్రిస్మస్ మెర్రీ క్రిస్మస్
వి విష్ యూ హ్యాపీ క్రిస్మస్

1. ఆకాశమంతా ఆ దూతలంతా - గొంతెత్తి స్తుతి పాడగా
సర్వోన్నతమైన స్థలములలోన - దేవునికే నిత్య మహిమ (2)
భయముతో భ్రమలతో ఉన్న గొర్రెల కాపరులన్
ముదముతో కలిసిరి జనన వార్త చాటిరి ||మనమంతా||

2. ఆ తూర్పు జ్ఞానులు ఆ గొర్రెల కాపరులు - యేసయ్యను దర్శించిరి
ఎంతో విలువైన కానుకలను అర్పించిరారాజు పూజించిరి (2)
హేరోదు పురజనులకు శుభవార్త చాటిరి
అవనిలో వీరును దూతలై నిలిచిరి ||మనమంతా||`,keywords:["vinthaina thaaraka","vinthaina taraka","christmas","vintaina taraka"],video:"",artist:"JK Christopher & Chithra",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"వుండేదెవరు పోయేదెవరు ఊగిసలాటలో",lyrics:`వుండేదెవరు పోయేదెవరు ఊగిసలాటలో
మరణము తెచ్చుకున్నాము కదా ఏదేను తోటలో  (2)

జీవము దిగివచ్చింది - ప్రభు యేసుని రూపంలో 
అవకాశము మనకొచ్చింది - పరలోకము చేరుటకూ 

ఇదే చివరి దినమైతే  - ఎటు వైపో నీ ప్రయాణం
అదే పాత బ్రతుకైతే - రక్షణ పొందిన వ్యర్థం
||వుండేదెవరు||

1. ఏది నీది ఏది నాది ఏది మనదయ్యా
ఉన్నవి అన్నీ పోయేవేనని చెప్పెను యేసయ్యా (2)

చేప నోటిలో షెకెలు ఉందని తెలిసిన ఆయనకు 
సృష్టిలో బహుసంపద ఉందని తెలియదా యేసునకు (2)

సిరికి దేవునికి - దాసులుగా ఉండలేమని 
నాకు నేర్పించాలని - తాను కొదువ కలిగి జీవించాడు 
||ఇదే||
 
2. తల్లిని విడిచిన జీవరాశులు తిరిగి రావయ్యా
రెక్కలు వచ్చి ఎగిరి పోతే గతమే గుర్తుకు రాదయ్యా (2)

నిన్ను విడిచిన నీ పిల్లలు నిన్ను చూడగ వస్తారు 
దూరము భారము అనుకోకుండా నిన్ను చూసి వెళతారు (2)

నీ తండ్రిని చూచుటకు - పరలోకం చేరుటకు 
తప్పిపోయిన కుమారుడా - తప్పు దిద్దుకొని రావయ్యా
||ఇదే||

3. క్రీస్తు వచ్చే వేళ అయినది సిద్దపడవయ్యా
ఆత్మీయమైన యాత్రలో బాటసారివి నీవయ్యా (2)

నీ దుఖఃదినములను ఆనందముగా మార్చే దేవునితో 
రాత్రి లేని లోకములో నిత్యము యేసుని వెలుగులో (2)

సంచరించుటకూ - నువు సంతోషించుటకూ
నూతనముగా జన్మించి - నీతి వస్త్రమును ధరించుము
||ఇదే||`,keywords:["వుండేదెవరు పోయేదెవరు ఊగిసలాటలో","undedhi evaro poyedhi evaro","undedhevaro poyedhevaro","undedevaro poyedevaro"],video:"",artist:"K.SatyaVeda Sagar, F.Prasanth Garu, Dhanunjay",genre:["General","Eternal Life","Repentance"],timeSignature:"4/4"}],శ:[{id:l(),title:"శాశ్వత ప్రేమతో నన్ను ప్రేమించావయ్యా",lyrics:`శాశ్వత ప్రేమతో నన్ను ప్రేమించావయ్యా
కృప చూపి నన్ను రక్షించవయ్యా (2)
నీ ప్రేమ గొప్పది – నీ జాలి గొప్పది
నీ కృపా గొప్పది – నీ దయ గొప్పది (2)

1. అనాథనైనా నన్ను వెదకి వచ్చావు
ఆదరించి కౌగిలించి హత్తుకొంటివి (2)        ||నీ ప్రేమ||

2. అస్థిరమైన లోకములో తిరిగితినయ్యా
సాటిలేని యేసయ్య చేర్చుకొంటివి (2)        ||నీ ప్రేమ||

3. తల్లి గర్భమందు నన్ను చూచియుంటివి
తల్లిలా ఆదరించి నడిపించితివి (2)        ||నీ ప్రేమ||

4. నడుచుచున్న మర్గమంత యోచించగా
కన్నీటితో వందనములు తెలుపుదునయ్యా (2)        ||నీ ప్రేమ||

5. ప్రభువు చేయవలసినది ఆటంకం లేదు
సమస్తము మేలుకై చేసిన దేవా (2)        ||నీ ప్రేమ||`,keywords:["Sasvatha prematho","Saswatha prematho","sasvatha preematho","saswatha preematho","sasvata prema","sasvatha premato","6/8"],video:"",artist:"",genre:["Love","General"],timeSignature:"6/8"},{id:l(),title:"శాశ్వతమైనది నీవు నాయెడ చూపిన కృప",lyrics:`శాశ్వతమైనది నీవు నాయెడ చూపిన కృప
అనుక్షణం నను కనుపాపవలె (2)
కాచిన కృప ||శాశ్వతమైనది||

1. నీకు బహుదూరమైన నన్ను చేరదీసిన నా తండ్రివి (2)
నిత్య సుఖశాంతియే నాకు నీదు కౌగిలిలో (2)       ||శాశ్వత||

2. తల్లి తన బిడ్డలను మరచినా నేను మరువలేనంటివే (2)
నీదు ముఖకాంతియే నన్ను ఆదరించెనులే (2)       ||శాశ్వత||

3. పర్వతములు తొలగినను మెట్టలు తత్తరిల్లిన (2)
నా కృప నిను వీడదని అభయమిచ్చితివే (2)       ||శాశ్వత||`,keywords:["శాశ్వతమైనది నీవు నాయెడ చూపిన కృప","Sasvathamainadhi neevu na yeda","Sasvathamainadhi neevu na yeda","sasvatha mainadhi neevu na yeda","Saswatha mainadi nevu na yeda"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"శాశ్వతుడా",lyrics:`శాశ్వతుడా! విస్మయమొంది నేను
నీ స్వంతహస్త సృష్టిజూడగా
నీ స్వరం విందున్ ఉరుములయందు 
యేసు ప్రభూ నిన్నారాధింతును

ఓ రక్షకా! నీ స్తుతి పాడెదన్ నూరంతలన్ మహాదేవా
నా రక్షకా! నమస్కరింతునిన్ మారని యో మహాదేవా

1. వృక్షంబులందున్, అడవులలోనే 
పక్షుల పాటలాలకింతును
తక్షణ మగ్రపర్వతంబు నుండి
అక్షులతో నీ మహిమ గందున్.

2. మహాదేవా! నీయేక పుత్రుండిలన్
నా హేయపాపముల్ భరించి, నా       
సహాయుడై తా మరణించె నంచు 
ఓహో! యాశ్చర్యపడి స్మరింతున్.

3. క్రీస్తు విజయార్భాటముతో వచ్చి
నీ స్థలమందు నన్ను జేర్చగా
నే స్థిరతుష్టితో సాష్టాంగపడి
నీ స్తుతి జేతునో మహాదేవా.`,keywords:["Sasvathuda","Saswathuda","sasvathoda","saswatuda","sasvatuda","sasvathooda","sasvatuda","how great thou art in telugu","andhra christian songs","andhra christian song","andhra kraisthava keerthanalu","aandhra kraisthava keerthanalu","4/4"],video:"https://www.youtube.com/embed/udne5IfgGl4?start=236",artist:"Karl Boberg",genre:["Andhra Christian Hymn","Worship"],timeSignature:"4/4"},{id:l(),title:"శ్రీమంతుడు నా శ్రీయేసుడు సిలువ పై వ్రెలడేను",lyrics:`శ్రీమంతుడు నా శ్రీయేసుడు సిలువ పై వ్రెలడేను (2)

ననెంత గానో ప్రేమించెను నా కొరకై బలియాయెను
ననెంత గానో దివించెను నా కొరకై శ్రమ నొందెను ||శ్రీమంతుడు||

1. దినుడైన ఘనుడు ఈ ధరకేగెను
ఎన్నో వేతలలో నన్ను వెతికితివి   (2)
అర్హుడనే కక్కునను నీ ఐశ్వర్యము నాకీచ్చితివె
దప్పికని నీవు పలికినను చేదు చిరకను నీకిచ్చితినె స్వామీ ||శ్రీమంతుడు||  
                                            
2. చిందిన నీ రక్తము నా పరిహారము
విడిచిన నీ ఆత్మను  నాలో నింపితివి  (2)
నీ నా రక్షణకై తన సుతుడై సిలువ నొందనే
మరెదను హతసాక్షిగా నీ కొరకై నా ప్రియుడా ఈలలో ||శ్రీమంతుడు||`,keywords:["srimanthudu naa sriyesudu","srimanthudu na sri yesudu","sri manthudu na sri yesudu","sreemanthudu naa sriyesudu","good friday","lent"],video:"",artist:"Nissy John, Yadidya Strings & Enoch Jagan",genre:["Good Friday","Lent","Easter"],timeSignature:"3/4"},{id:l(),title:"శ్రీ యేసుండు జన్మించె రేయిలో",lyrics:`శ్రీ యేసుండు జన్మించె రేయిలో (2)
నేడు పాయక బెత్లెహేము ఊరిలో (2)   ||శ్రీ యేసుండు||

1. ఆ కన్నియ మరియమ్మ గర్భమందున (2)
ఇమ్మానుయేలనెడి నామమందున (2)  ||శ్రీ యేసుండు||

2. సత్రమందున పశువులశాల యందున (2)
దేవపుత్రుండు మనుజుండాయెనందునా (2)  ||శ్రీ యేసుండు||

3. పట్టి పొత్తి గుడ్డలతో చుట్టబడి (2)
పశుల తొట్టిలో పరుండ బెట్టబడి (2)   ||శ్రీ యేసుండు||

4. గొల్లలెల్లరు మిగుల భీతిల్లగా (2)
దెల్పె గొప్ప వార్త దూత చల్లగా (2)   ||శ్రీ యేసుండు||

5. మన కొరకొక్క శిశువు పుట్టెను (2)
ధరను మన దోషములబోగొట్టెను (2)   ||శ్రీ యేసుండు||

6. పరలోకపు సైన్యంబు గూడెను (2)
మింట వర రక్షకుని గూర్చి పాడెను (2)   ||శ్రీ యేసుండు||

7. అక్షయుండగు యేసు పుట్టెను (2)
మనకు రక్షణంబు సిద్ధపరచెను (2)   ||శ్రీ యేసుండు||`,keywords:["sri yesundu janminche reyilo","sriyesundu janminche reyilo","sriyesundu janminche","sre yesundu janminche","sree yesundu janminche","sri yesundu janminche","sri yeesundu janminche","sri yesundo janminche","Andhra Christian Hymn","Christmas"],video:"",artist:"",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"6/8 or 4/4"},{id:l(),title:"శ్రీ రక్షకుండు పుట్టగా నాకాశ సైన్యము",lyrics:`1. శ్రీ రక్షకుండు పుట్టగా
నాకాశ సైన్యము
ఇహంబున కేతెంచుచు
ఈ పాట పాడెను.

'పరంబునందు స్వామికి
మహా ప్రభావము
ఇహంబునందు శాంతిని
వ్యాపింపనీయుడు'.

2. ఆ రమ్యమైన గానము
ఈ వేళ మ్రోగును
సంతుష్టులైన భక్తులు
ఆ ధ్వని విందురు
ప్రయాసపడు ప్రజల
దుఃఖంబు తీరగా
ఆ శ్రావ్యమైన గానము
ఈ వేళ విందురు.

3. పూర్వంబు దూతగానము
భువిన్ వినంబడి
రెండువేల వర్షములు
గతించిపోయెను
భూప్రజలు విరోధులై
యుద్ధంబు లాడి యా
మనోజ్ఞమైన గానము
నలక్ష్యపెట్టిరి.

4. పాపాత్ములారా - వినుడి
శ్రీ యేసు ప్రభువు
మీ పాపభార మంతయు
వహింప వచ్చెను
తాపత్రయంబు నంతయుఁ
దానే వహించును
సంపూర్ణ శాంతి సంపద
లను గ్రహించును.

5. సద్భక్తులు స్తుతించిన
ఈ సత్యయుగము
ఈ వేళ నే నిజంబుగా
సమీప మాయెను
ఆ కాలమందు క్షేమము
వ్యాపించుచుండెను
ఆ దివ్య గాన మందఱు
పాడుచు నెప్పుడు.`,keywords:["Sri rakshakundu puttaga","sri rakshakundu puttagaa","sri rakshakunduputtaga","srirakshakundu","Andhra Christian Hymn","Christmas"],video:"",artist:"",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"3/4"},{id:l(),title:"శ్రీ రక్షకుని నామము",lyrics:`1. శ్రీ రక్షకుని నామము
కీర్తించి కొల్వుఁడీ
కిరీట ముంచి చాటుఁడి
-శ్రీ రాజా, రాజా, రాజా,
రాజాధిరాజా!

2. పరేశుహత సైన్యమా
మీ రాజు ఈయనే
కిరీట ముంచి చాటుఁడి
-శ్రీ రాజా, రాజా, రాజా,
రాజాధిరాజా!

3. నరులారా! మీ కోసము
చావును నొందెను
కిరీట ముంచి చాటుఁడి
-శ్రీ రాజా, రాజా, రాజా,
రాజాధిరాజా!

4. సర్వ జనాంగములారా!
శరణ్యుఁ డీయనే
కిరీట ముంచి చాటుఁడి
-శ్రీ రాజా, రాజా, రాజా,
రాజాధిరాజా!

5. పరంబునందు యేసుకుఁ
కిరీట ముంచుచు
హర్షంబుతోఁ గీర్తింతుము
-శ్రీ రాజా, రాజా, రాజా,
రాజాధిరాజా!`,keywords:["sri rakshakuni naanamu","sri rakshakuninamamu","srirakshakuni nanamu","Sri rakshakuni naamamu","Andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"శుద్ధరాత్రి! సద్ధణంగ",lyrics:`1. శుద్ధరాత్రి! సద్ధణంగ 
నందరు నిద్రపోవ 
శుద్ధ దంపతుల్ మేల్కొనగా 
బరిశుద్ధుడౌ బాలకుఁడా! 
దివ్య నిద్ర పొమ్మా 
దివ్య నిద్ర పొమ్మా

2. శుద్ధరాత్రి! సద్ధణంగ 
దూతల హల్లెలూయ 
గొల్లవాండ్రకుఁ దెలిపెను 
ఎందు కిట్టులు పాడెదరు? 
క్రీస్తు జన్మించెను 
క్రీస్తు జన్మించెను

3. శుద్ధరాత్రి! సద్ధణంగ 
దేవుని కొమరుడ! 
నీ ముఖంబున బ్రేమ లొల్కు 
నేడు రక్షణ మాకు వచ్చె 
నీవు పుట్టుటచే 
నీవు పుట్టుటచే`,keywords:["shudha rathri","sudha rathri","suddha rathri","sudha raathri","shuddha raathri","sudha raathre","Andhra Christian Hymn","christmas","3/4"],video:"",artist:"Boseph More",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"3/4"},{id:l(),title:"శుద్ధ హృదయం కలుగ జేయుము",lyrics:`శుద్ధ హృదయం కలుగ జేయుము - (2)
నాలోనా... నాలోనా  (2) ||శుద్ధ||

1. నీ వాత్సల్యం నీ బాహుళ్యం
నీ కృప కనికరము చూపించుము  (2)
పాపము చేశాను దోషినై యున్నాను  (2)
తెలిసియున్నది నా అతిక్రమమే
తెలిసియున్నవి నా పాపములే  (2)
నీ సన్నిధిలో నా పాపములే ఒప్పుకుందునయ్య  (2) ||శుద్ధ||

2. నీ జ్ఞానమును నీ సత్యమును నా
అంతర్యములో పుట్టించుమా (2)
ఉత్సాహ సంతోషం నీ రక్షణానందం (2)
కలుగజేయుము నా హృదయములో  (4)
నీ సన్నిధిలో పరిశుద్ధాత్మతో నన్ను నింపుమయ్యా  (2) ||శుద్ధి||`,keywords:["shudha hrudhayam","sudha hrudhayam","sudhahrudhayam","shudhahrudhayam","shuda hrudhayam","sudhaahrudhayam","sudhaa hrudhayam","shudda hrudhayam","shudha hrudayam","shuddha hrudhayam","shuddha hrudayam","anil kumar","anilkumar","4/4"],video:"",artist:"Anil Kumar",genre:["General","Prayer","Sin","Repentance"],timeSignature:"4/4"},{id:l(),title:"శుద్ధి, శుద్ధి, శుద్ధి! సర్వశక్త ప్రభు",lyrics:`1. శుద్ధి, శుద్ధి, శుద్ధి! సర్వశక్త ప్రభు
ప్రాతఃకాలస్తుతి నీకీ చెల్లింతుము
శుద్ధి, శుద్ధి, శుద్ధి! కృపగల దేవా!
ముగ్గురైయుండు దైవత్ర్యేకుఁడా!

2. శుద్ధి, శుద్ధి, శుద్ధి! అని పరమందుఁ
బరవాసు లెల్ల నిన్నేశ్లాఘింతురు
శెరపుల్ ఖెరూబుల్ సాష్టంగపడి
నిత్యుఁడవైన నిన్ నుతింతురు.

3. శుద్ధి, శుద్ధి, శుద్ధి! తేజరిల్లు దేవ
పాపి కన్ను చూడలేని మేఘ వాసివి
అద్వితీయప్రభు, నీవు మాత్రమేను
కరుణ, శక్తి, ప్రేమరూపివి.

4. శుద్ధి, శుద్ధి, శుద్ధి! సర్వశక్త ప్రభు
సృష్టిజాలమంత నీ కీర్తిఁబాడును
శుద్ధి, శుద్ధి, శుద్ధి! కృపగల దేవ
ముగ్గురైయుండు దైవత్ర్యేకుఁడా!`,keywords:["sudhi sudhi sudhi","shudhi shudhi shudhi","holy","holy holy holy","suddhi suddhi suddhi","shuddhi shuddhi","trinity","andhra christian song","andhra christian songs","andhra kraisthava keerthanalu","aandhra kraisthava keerthanalu","4/4"],video:"https://www.youtube.com/embed/gzrFgakT7WQ?si=u1QhIn-l3sUK499T",artist:"Reginald Hebar",genre:["Andhra Christian Hymn","Worship"],timeSignature:"4/4"},{id:l(),title:"శుద్దుడా ఘనుడా రక్షకుడా",lyrics:`శుద్దుడా ఘనుడా రక్షకుడా
నా కాపరి నీవే నా దేవుడా
శక్తి లేని నాకు బలమిచు వాడా
నా స్నేహితుడా బలవంతుడా

1. హర్షింతును నిన్ను ఆరాధింతును
స్తుతియింతును నే కీర్తింతును
శక్తి లేని నాకు బలమిచ్చు వాడా
నా స్నేహితుడా బలవంతుడా

రక్షణా ఆధారం నీవే
విమోచనా నీవే యేసయ్యా
నా స్నేహితుడా బలవంతుడా`,keywords:["shudhuda ghanuda rakshakuda","sudhuda ganuda rakshakuda","shududa ganuda rakshakuda"],video:"",artist:"",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"శుభవేళ – స్తోత్రబలి",lyrics:`శుభవేళ – స్తోత్రబలి
తండ్రీ దేవా – నీకేనయ్యా
ఆరాధన – స్తోత్రబలి
తండ్రీ దేవా – నీకేనయ్యా
తండ్రీ దేవా – నీకేనయ్యా (2) ||శుభవేళ||

1. ఎల్ షడ్డాయ్ – ఎల్ షడ్డాయ్ – సర్వ శక్తిమంతుడా (2)
సర్వ శక్తిమంతుడా – ఎల్ షడ్డాయ్ ఎల్ షడ్డాయ్ (2) ||శుభవేళ||

2. ఎల్ రోయి – ఎల్ రోయి – నన్నిల చూచువాడా (2)
నన్నిల చూచువాడా – ఎల్ రోయి ఎల్ రోయి (2) ||శుభవేళ||

3. యెహోవా షమ్మా – మాతో ఉన్నవాడా (2)
మాతో ఉన్నవాడా – యెహోవా షమ్మా (2) ||శుభవేళ||

4. యెహోవా షాలోం – శాంతి నొసగు వాడా (2)
శాంతి నొసగువాడా – యెహోవా షాలోం (2) ||శుభవేళ||`,keywords:["shuba vela sthothra bali","shuba vela","suba vela","shubha vela","shubha veela","worship","2/4"],video:"",artist:"Anil Kumar",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"శృతి చేసి నే పాడనా",lyrics:`శృతి చేసి నే పాడనా - స్తోత్రగీతం 
భజియించి నే పొగడనా - స్వామీ = 2
హల్లెలూయా.. హల్లెలూయా..
హలెలూయ హలెలూయ - హల్లెలూయా  (2) 

1. దానియేలును సింహపుబోనులో - కాపాడినది నీవే కదా  (2)
జలప్రళయములో నోవాహును కాచిన - బలవంతుడవు నీవే కదా (2)
నీవే కదా - నీవే కదా - నీవే కదా.. 
హల్లెలూయా.. హల్లెలూయా..
హలెలూయ హలెలూయ - హల్లెలూయా  (2) 

2. సమరయ స్త్రీని కరుణతో బ్రోచిన - సచ్చరితుడవు నీవే కదా  (2)
పాపులకొరకై ప్రాణమునిచ్చిన  - కరుణామయుడవు  నీవే కదా  (2)
నీవే కదా - నీవే కదా - నీవే కదా.. 
హల్లెలూయా.. హల్లెలూయా..
హలెలూయ హలెలూయ - హల్లెలూయా  (2) `,keywords:["sruthi chesi ney paadedha","sruthi chesi ne paadedha","sruthi chese ne paadedha","sruti chesi ne padedha","Sruti chesi ne padeda","sruthi","sruthi chese ne padeda","4/4"],video:"",artist:"",genre:["General"],timeSignature:"4/4"}],ష:[{id:l(),title:"షాలేము రాజా శాంతికి రాజా",lyrics:`షాలేము రాజా శాంతికి రాజా
షాలేము రాజా
సర్వోన్నతుడా నా దేవా
కృపామయుడవు నీవయ్యా

రాజా రాజా రాజా యేసు రాజా
దేవా దేవా నిత్యుడగు దేవా

1. లోకంలో లేదు నిజమైనా శాంతి
పరలోకంలో మాకుంది
యుగయుగాలు రారాజువై నీవు
మమ్మును పాలింతువు
మా నీతియు మా న్యాయము
ఎల్లప్పుడు నీవయ్యా
మా కేడెము మా దుర్గము
మా జీవము నీవయ్యా

2. క్రీస్తు నందు ఉన్నవారికి
ఏ శిక్షావిధి లేదు
క్రీస్తుని పోలి నడుచుకొనుచూ
చిత్తము నెరవేర్చెదం
నా మట్టుకైతే బ్రతుకుట క్రీస్తే
చావైతే మరి లాభము
నా అతిశయం నా లక్ష్యము
ఎల్లప్పుడు క్రీస్తేగా`,keywords:["shalemu raja","shalem raja","shalemu raja santhiki raja","shalemraja"],video:"",artist:"Ps. Philip Gariki, JK Christopher",genre:["General"],timeSignature:"2/4 (Arabic)"},{id:l(),title:"షారోను రోజావే - నా ప్రాణ స్నేహమే",lyrics:`షారోను రోజావే - నా ప్రాణ స్నేహమే
నిర్దోష రక్తమే - దైవ గొర్రెపిల్లవే

సుందరుడవు - నీవు సుందరుడవు
పదివేలలో నీవు శ్రేష్టుడవు
సుందరుడవు - బహు సుందరుడవు
పదివేలలో అతిశ్రేష్టుడవు

హోసన్నా - ఉన్నత దైవమా
హోసన్నా - దావీదు తనయుడా

1. స్నేహితులు మరచిపోయినా - బంధువులే విడిచిపోయినా
తోడుగా నిలిచిన ప్రేమను మరువలేనే 
సహచారివే సహచారివే
వేదనలో ఆదరించే నా ప్రియుడవే

2. రోగపు పడకలోన - నిరీక్షణ కోల్పోయినా 
నను తాకి స్వస్థపరచిన వైద్యుడవే
పరిహారివే - పరిహారివే
నా వ్యాధులు భరియించిన యేసువే`,keywords:["sharonu rojave","sharon roja","sharonuu roojaave","sharoonu rojave","sharoonu rojave","sharoonu roojavee","sharon roojave"],video:"",artist:"Anu Roy Samuel, Nirmal Elroi, John Rohith,",genre:["General","Worship"],timeSignature:"4/4"}],స:[{id:l(),title:"సదాకాలము నీతో నేను",lyrics:`సదాకాలము నీతో నేను జీవించెదను యేసయ్య
యేసయ్యా యేసయ్యా యేసయ్యా యేసయ్యా (2)   ||సదాకాలము||

1. పాపాల ఊభిలో పడియున్న నన్ను
నీ ప్రేమతో నన్ను లేపావయ్యా (2)
ఏ తోడులేని నాకు నా తోడుగా
నా అండగా నీవు నిలిచావయ్యా (2)     ||యేసయ్యా||

2. నీ వాత్సల్యమును నాపై చూపించి
నీ సాక్షిగా నన్ను నిలిపావయ్యా (2)
ఆశ్చర్యకార్యములు ఎన్నో చేసి
నీ పాత్రగా నన్ను మలిచావయ్యా (2)    ||యేసయ్యా||`,keywords:["sadhaa kaalamu","Sadhakalamu","sadakalamu","sadakaalamu","Sadhaakaalamu","sadhaa kaalamu nitho nenu","Sadha kalamu netho nenu","sadha kalamu neetho nenu","4/4"],video:"",artist:"",genre:["General","Hope"],timeSignature:"4/4"},{id:l(),title:"సన్నిధి సన్నిధియే సన్నిధి సన్నిధియే",lyrics:`సన్నిధి సన్నిధియే
సన్నిధి సన్నిధియే(2)
నా ఆశ అంతా నీ సన్నిధియే 
నా సామర్ధ్యము నీ సన్నిధియే (2) 

1. నిన్ను విడిచి పారిపోయినా
నా వెంటోచ్చి నను హత్తుకొంటివే (2)
పోవు మార్గము బహుదూరమే 
నీ సన్నిధి నాలో బలమాయెనే (2) ||సన్నిధి||

2. నాకున్నవి నే చూస్తున్నవీ 
వాటిలో స్థిరమైనది నీ సన్నిధియే (2)
దీనులైన వారిని రాజుల ముందు
నిలబెట్టునది నీ సన్నిధియే (2) ||సన్నిధి||

3. గొర్రెల మధ్య తిరుగుచుంటిని
సింహాసనం ఎక్కించితివే(2)
రాజుల చేత తరుమబడితిని
రాజుగ నన్ను నిలబెట్టితివి (2) ||సన్నిధి||`,keywords:["sannidhi sannidhiye","sanidhi sanidhi ye","sannidhe sannidheye","sannedhi sannedhi ye","sannedhi sannedi ye","sannedhi sannediye","sannedhi sannedhiye"],video:"",artist:"Sammy Thangiah & Deepak Cherian",genre:["General","Worship"],timeSignature:"3/4"},{id:l(),title:"సన్నుతింతుమో ప్రభో",lyrics:`1. సన్నుతింతుమో ప్రభో
సదమలమగు భక్తితో (2)
కన్న తండ్రి కావుమా (2)
కలుషము నెడబాపుమా     ||సన్నుతింతుమో||

2. నీతి సూర్య తేజమా
జ్యోతి రత్న రాజమా (2)
పాతక జన రక్షకా (2)
పతిత పావన నామకా     ||సన్నుతింతుమో||

3. మానవ సంరక్షకా
దీన నిచయ పోషకా (2)
దేవా మానవ నందనా (2)
దివ్య సుగుణ మందనా     ||సన్నుతింతుమో||

4. ప్రేమ తత్వ బోధకా
క్షేమ దాత వీవెగా (2)
కామిత ఫలదాయక (2)
స్వామి యేసు నాయక    ||సన్నుతింతుమో||

5. పాప చింతలన్నిటిన్
పారదోలుమో ప్రభో (2)
నీ పవిత్ర నామమున్ (2)
నిరతము స్మరియించెదన్     ||సన్నుతింతుమో||`,keywords:["sannuthinthumo prabho","sannuthinthumu prabhu","sannuthinthumo prabo","andhra christian hymn","4/4"],video:"",artist:"Bontha Samuyelu",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"సన్నుతింతు యేసు స్వామి నిన్ను అనుదినం",lyrics:`సన్నుతింతు యేసు స్వామి నిన్ను అనుదినం
నీ మహత్య  కార్యములను పాడి వివరింతును
శోధన వేదన కష్ట సమయాన నా తోడుగా నుందువు
ఆశ్చర్య కార్యములు ఆనంద గడియలు ఎన్నడూ మరువను

1. సమాధిలోనుండి నా ప్రాణము విమోచించియున్నావు
కరుణా కటాక్షములు కిరీటముగా నా కిచ్చియున్నావు
నా దోషములన్నిటిని క్షమియించినావు కరుణా సమృద్ధుడవు
మేలులతో నా హృదయం తృప్తిపరిచావు నీకేమి చెల్లింతును

2. సజీవ యాగముగా నా శరీరము సమర్పించు కొందును నీకు
ఈ లోక మాదిరిని అనుసరింపక నిను మాత్రమే అనుకరింతును
యేసు నీ పోలికగా మారుట నీ చిత్తమని నేనెరిగి జీవించెదను
నా సిలువను ఎత్తుకుని నీ అడుగు జాడలలో కడవరకు నే నడిచెదను`,keywords:["sannuthinthu yesu swamy","sannutintu yesu swamy","sanutintu yesu swamy","Sannuthenthu yesu swamy"],video:"",artist:"Joel Kodali & JK Christopher",genre:["General"],timeSignature:"3/4"},{id:l(),title:"సమయము పోనీయక సిద్ధపడుమా సంఘమా",lyrics:`సమయము పోనీయక సిద్ధపడుమా సంఘమా (2)
సిద్దెలలో నూనెను సిద్ధముగ చేసుకో (2)
రారాజు రానైయున్నాడు
వేగమే తీసుకెళ్తాడు (2)      ||సమయము||

1. కాలం బహు కొంచమేగా
నీకై ప్రభు వేచెనుగా
జాగు చేసెనేమో నీ కోసమే (2)
సిద్ధమేనా ఇకనైనా
సంధింప యేసు రాజుని త్వరపడవా   ||సమయము||

2. యేసు వచ్చు వేళకై
వేచి నీవు ప్రార్ధించి
పరిశుద్ధముగా నిలిచెదవా (2)
సిద్ధమేనా ఇకనైనా
సంధింప యేసు రాజుని త్వరపడవా   ||సమయము||`,keywords:["samayamu pooneeyaka","samayamu poniyyaka","samayamuponiyaka","samayamu poniyaka","samayam poniyaka","samayam poneyaka","samayamu pooniyaka","samayamu pooniyyaka","samayam pooniyaka","6/8"],video:"",artist:"Jonah Samuel",genre:["General"],timeSignature:"6/8"},{id:l(),title:"సమయం ఈ సమయం మధురం అతి మధురం",lyrics:`సమయం ఈ సమయం మధురం అతి మధురం
బంధం అనుబంధం అందరికీ సుఖీభవం (2)
చల్లగా ఉండాలి ఆ దేవుని సన్నిధిలో 
ముందర నిలవాలి ఆ దేవుని కార్యములో (2)

1. ఎక్కడో ఉన్న మీరు ఇక్కడికి వచ్చారు 
వేరుగా ఉన్న మీరు ఏకమైఉన్నారు  (2)
జతపరచిన దేవుని మీరు కలకాలం కొనియడలి
అందరి ఆశీస్సులతో అనుబంధం పెరగాలి (2)  ||చల్లగా ఉండాలి||         

2. ఇప్పుడు ఉన్న ప్రేమ ఎల్లప్పుడూ ఉండాలి 
ఇప్పుడు ఉన్న బంధం బాధ్యతలను తెలపాలి (2)
స్థితిగతులకు అతీతంగా దేవుని స్తుతించాలి
ఆ స్థితిని దేవునికిచ్చి పరిపూర్ణత పొందాలి (2)  ||చల్లగా ఉండాలి||`,keywords:["సమయం ఈ సమయం మధురం అతి మధురం","marriage","samayam ee samayam madhuram","samayamu ee samayamu"],video:"",artist:"",genre:["Marriage"],timeSignature:"2/4"},{id:l(),title:"సమర్పించెదను సమస్తము",lyrics:`సమర్పించెదను సమస్తము
సన్నుతించెదను సతతము
చాలును, చాలును, క్రీస్తుయేసు చాలును,
చాలును, చాలును, క్రీస్తుయేసు చాలును
చాలును, చాలును, క్రీస్తుయేసు చాలును

1. శ్రేష్టమైనవి కలిగించెను నష్టము
లోకజ్ఞానము ఆయెను వెర్రితనము
ధనము దరిచేర్చెను నాశనము
పరపతి చూపించెను దుష్టత్వము

2. నిలుపుకొనెదను నీ మాదిరి వినయము
చెల్లించెదను ఉచ్వాస నిశ్వాసములు
అర్పించెదను నా ప్రాణము 
ఇదియే ఆరాధనా బలిపీఠము`,keywords:[],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Anwesshaa",genre:["General"],timeSignature:"4/4"},{id:l(),title:"సమస్తానికి - ఆధారమైన యేసయ్య",lyrics:`సమస్తానికి - ఆధారమైన యేసయ్య 
కృపతో నన్ను - జ్ఞాపకం చేసుకోవయ్యా 
'ఏ దారిలో వెళ్లాలో తెలియక - ఆగిపోయానయ్యా 
మార్గము చూపించి - కరుణతో నడిపించు యేసయ్య'

1. ఆత్మలోక్రుంగి అలసిననాకు - నీవే ఆధారము 
నా వేదనలో ఒంటరి బ్రతుకులో - నీవే నా ఆశ్రయము 
మార్గము చూపించి కరుణతో నడిపించు యేసయ్య

2. గడచినా కాలం నీ మేలులను - నేను తలపోయగా 
నీయందే నాకు ఆశలు చిగురించి - ఆనందమునిచ్చెను
మార్గము చూపించి కరుణతో నడిపించు యేసయ్య 

3. గాఢాంధకారం కమ్మినవేళ - నీవే నా దీపము
కన్నీటి కెరటాలు నను ముంచువేళ - నీవే నా నిరీక్షణ
మార్గము చూపించి కరుణతో నడిపించు యేసయ్య`,keywords:["Samasthaaniki aadharamaina yesayya","samasthaniki aadharamaina yesayya","samastaniki aadaramaina yesayya"],video:"",artist:"Prabhavati Ramesh, JK Christopher, Sharon Philip, & Sreeramchandra",genre:["General"],timeSignature:"6/8"},{id:l(),title:"సమానులెవరు ప్రభో",lyrics:`సమానులెవరు ప్రభో
నీ సమానులెవరు ప్రభో (2)
సమానులెవరు ప్రభో
సమస్త మానవ శ్రమాను భవమును (2)
సహించి వహించి ప్రేమించగల నీ (2)  ||సమానులెవరో||

1. సమాన తత్వము – సహోదరత్వము (2)
సమంజసము గాను మాకు దెలుప (నీ) (2) ||సమానులెవరో||

2. పరార్ధమై భవ – శరీర మొసగిన (2)
పరోపకారా నరావ తారా (నీ) (2)   ||సమానులెవరో||

3. దయా హృదయ యీ – దురాత్మ లెల్లరున్ (2)
నయాన భయాన దయాన బ్రోవ (నీ) (2)   ||సమానులెవరో||

4. ఓ పావనాత్ముడ – ఓ పుణ్య శీలుడ (2)
పాపాత్ములను బ్రోవ – పరమాత్మ సుత (నీ) (2)   ||సమానులెవరో||`,keywords:["Samaanulevaro prabhu","samanulevaro prabhu","samanu levaro prabhu","samaanulevaro prabho","Samanulevaru prabho","samaanulevaro prabu"],video:"",artist:"Chetti Bhanu Murthi",genre:["Andhra Christian Hymn","General"],timeSignature:"4/4"},{id:l(),title:"సర్వదేశములారా",lyrics:`సర్వదేశములారా శ్రీ యేసే దేవుండు ఉర్వి నుత్సాహముతో
గురుస్తోత్రము జేయను రండి ||సర్వ||

1. ఆ ప్రభువే దేవుండు అధికస్తోత్రార్హుండు భూప్రజలు నందరిని
బుట్టించిన భగవంతుండు ||సర్వ||

2. మనము దేవుని వార మును మరి యాయన ప్రజల మనయము నా
ఘనప్రభువు నెనరుతో మేపెడి గొఱ్ఱెలము ||సర్వ|| 

3. కృతజ్ఞతార్పణలు కొల్లగను జెల్లింప నాతని యావరణములో నతి
వినయముతోఁజేరండి ||సర్వ||

4. ఆయన దయామయుఁడు ఆయన కృపామయుఁడు ఆయన ప్రేమ
సత్యం బనవరతం బుండును నిజమే ||సర్వ||

5. శుభనామం మదినుంచి ప్రభునామం స్తుతియించి ఘననామం బతిభక్తిన్
అనయము గొలువుడి జనులారా ||సర్వ||`,keywords:["sarvaadhesamulara","sarva dhesamulaara","Sarvadhesamulara","Sarvadheesamulaara","andhra christian hymn","andhra kraisthava keerthana","andhra christian songs","4/4"],video:"",artist:"Sarella Samyuyelu Subbayya",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"సర్వశక్తుని స్తోత్రగానము",lyrics:`సర్వశక్తుని స్తోత్రగానము
సల్పరే జగమెల్లను
నిర్వహించును దాస భారము
నిత్యమెద రాజిల్లను (2)    ||సర్వ||

1. ముదముతో నిర్మానకుండగు
మూల కర్తను బాడరే
వదన మీక్ష్మాన్వoచి దేవుని
వందనముతో వేడరే (2)   ||సర్వ||

2. వేదపారాయణము సేయుచు
విశ్వమంత జయింపరే
సాదరముగా దేవు నిక మీ
స్వాoతమున బూజింపరే (2)  ||సర్వ||

3. ఎదను విశ్రాంతిన్ పరేశుని
హెచ్చుఁగా నుతి జేయరే
సదమలంబగు భక్తితో మీ
సర్వ మాయన కీయరే (2)  ||సర్వ||

4. చావు పుట్టుక లేనివాడుగ
సంతతము జీవించును
ఈవులిచ్చుచు దన్ను వేడు మ-
హేష్టులను రక్షించును (2)   ||సర్వ||

5. దాసులై దేవునికి నెదలో
దర్పమును బోగాల్పరే
యేసుక్రీస్తుని పుణ్య వస్త్రము
నే మరక మైదాల్పరే (2)  ||సర్వ||`,keywords:["Sarva shakthuni sthothra gaanamu","Sarva shakthuni stothraganamu","sarva shakthuni sthorthraganamu","andhra christian hymn"],video:"",artist:"Mikkili Samuyelu",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"సర్వ లోక నివాసులారా",lyrics:`సర్వ లోక నివాసులార సజీవుడు మన దేవుడు
భూదిగంత నివాసులార బలవంతుడు మన దేవుడు
మంచి దేవుడు మరువని దేవుడు 
విడువని దేవుడు ఎన్నడు ఎడబాయడు

యేసే మార్గం యేసే సత్యం యేసే జీవం
ఆ యేసే మన సర్వం

1. వేట కాని ఉరిలో నుండి నిన్ను విడిపించును
నాశన కరమైన తెగులు రాకుండ నిన్ను రక్షించును
పూజ్యనీయుడు ప్రేమ పూర్నుడు
సర్వ శక్తుడు సర్వ సృష్టికి కారకుడు ||యేసే మార్గం||

2. తల్లి కంటే మిన్నగ నిన్ను ఆదరించును
తండ్రి కంటే మిన్నగ నీపై జాలి చూపును
కనికరించును నిన్ను కరుణించును
కృపను చూపును ఎల్ల వేళళ కాయును ||యేసే మార్గం||`,keywords:["saarva looka","sarva looka","sarva loka","saarva loka","vijay roy","vijayroi","vijayroy","vijay roi","sarwa loka","sarvaloka","sarvalooka nivasulaara","sarva loka nivaasu lara","sarva looka nivaasu laara","sarva loka nivaasu laara","sarva loka nivasu lara","sarva loka nivasulara","sarvalooka nivasulara","sarvaloka nivasulara","sarvalooka nivaasulaara","sarvalooka nevaasulaara","sarvaloka nevasulara","Sarvaloka nivaasulara","sarvalooka nevasulara","Sarvaloka nivaasulaara","Saarvalooka nivaasulaara","saarvaloka nevaasulaara","2/4"],video:"",artist:"Vijai Roy",genre:["General"],timeSignature:"2/4"},{id:l(),title:"సర్వ చిత్తంబు నీదేనయ్యా",lyrics:`1. సర్వ చిత్తంబు నీదేనయ్యా
స్వరూపమిచ్చు కుమ్మరివే (2)
సారెపైనున్న మంటినయ్యా
సరియైన పాత్రన్ చేయుమయ్యా
సర్వేశ్వరా నే రిక్తుండను
సర్వదా నిన్నే సేవింతును   ||సర్వ చిత్తంబు||

2. ప్రభూ! సిద్ధించు నీ చిత్తమే
ప్రార్ధించుచుంటి నీ సన్నిధి (2)
పరికింపు నన్నీ దివసంబున
పరిశుభ్రమైన హిమము కన్నా
పరిశుద్ధున్ జేసి పాలింపుమా
పాపంబు పోవ నను కడుగుమా    ||సర్వ చిత్తంబు||

3. నీ చిత్తమే సిద్ధించు ప్రభూ
నిన్నే ప్రార్ధింతు నా రక్షకా (2)
నీఛమౌ గాయముల చేతను
నిత్యంబు కృంగి అలసియుండ
నిజమైన సర్వ శక్తుండవే
నీ చేత పట్టి నన్ రక్షింపుమా   ||సర్వ చిత్తంబు||

4. ఆత్మ స్వరూప నీ చిత్తమే
అనిశంబు చెల్లు ఇహ పరమున (2)
అధికంబుగా నన్ నీ ఆత్మతో
ఆవరింపుమో నా రక్షకా
అందరు నాలో క్రీస్తుని జూడ
ఆత్మతో నన్ను నింపుము దేవా   ||సర్వ చిత్తంబు||`,keywords:["sarva chithambu","Sarva chitambu","sarvachittambu","Sarvachithambu","Sarva chitthambu","andhra christinan hymns","6/8"],video:"",artist:"A. Charles Kinsinger",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"సర్వేశ్వరా నీకే స్తుతి - సర్వము నీకే ప్రభూ",lyrics:`సర్వేశ్వరా నీకే స్తుతి - సర్వము నీకే ప్రభూ 
ఆధారము ఆశ్రయము - నీవే నా యేసూ

నన్ను కన్న తండ్రి - నన్ను కొన్న తండ్రి 
రక్తమిచ్చిన తండ్రి - ప్రాణమిచ్చిన తండ్రి ||సర్వే||

1. చిన్న చిన్న గొర్రెపిల్లలము - కాపరివై మము కాయుము
అమ్మానాన్న అన్నీ నీవే - ఆదరించి సేదదీర్చుము ||సర్వే||

2. పరుగెత్తినా కొండ కోనలలోన - పచ్చని పచ్చికలో
అండా, దండా - కొండా కోనా నీవే నా యేసు ||సర్వే|| 

3. చెంగు చెంగుమని దూకే నన్ను - కంగారు పడనీయకు
గుట్టలను, మెట్టలను - దాటించి నను మేపుము ||సర్వే||

4. సంకెళ్ళ లోక బంధాలలో - ఎందాక నీవుందువు 
ఓ సోదరా, ఓ సోదరీ - నేడే విడుదలనొందు ||సర్వే||`,keywords:["sarvesvara neke sthuthi","sarveswara neke sthuthi","Sarweswara neke sthithi","sarvesvara nike sthuthi","Sarvesvara nike stuti"],video:"",artist:"",genre:["General","Worship"],timeSignature:"6/8"},{id:l(),title:"సర్వోన్నత స్థలములలో సమాధానము",lyrics:`సర్వోన్నత స్థలములలో సమాధానము 
ప్రాప్తించే ప్రజాకోరకు ప్రభుజన్మముతోను 
సర్వోన్నత స్థలములలో సమాధానము 
ప్రాప్తించే ప్రజాకోరకు ప్రభుజన్మముతోను 
హల్లెలూయా అర్పణలు  
ఉల్లముతో చెలింతుమ్ 
రాజాధి రాజునకు హోసన్నా ప్రభువునకు (2)

సర్వోన్నత స్థలములలో సమాధానము 
ప్రాప్తించే ప్రజాకోరకు ప్రభుజన్మముతోను 

1. పశువుల పాకలో - మనకు శిశువు జన్మించే 
పొత్తిగుడ్డలలో చుట్టగా పవళించిన తండ్రి

పశువుల పాకలో - మనకు శిశువు జన్మించే 
పొత్తిగుడ్డలలో చుట్టగా పవళించిన తండ్రి 

ఆశ్చర్యకరుడు ఆలోచనకర్త 
ఆశ్చర్యకరుడు ఆలోచనకర్త 

నిత్యుండు సత్యుండు నిజారక్షణ క్రీస్తు 
నిత్యుండు సత్యుండు నిజారక్షణ క్రీస్తు 
హల్లెలూయా అర్పణలు  
ఉల్లముతో చెలింతుమ్ 
రాజాధి రాజునకు హోసన్నా ప్రభువునకు (2)

2. మన వ్యసనములను బాప మొత్తబడుటకొరకై 
మన సమాధానార్థ శిక్ష - మోపబడుటకొరకై 

మన వ్యసనములను బాప మొత్తబడుటకొరకై 
మన సమాధానార్థ శిక్ష - మోపబడుటకొరకై 

మన దోషము బాప - మానవరూపమున 
మన దోషము బాప - మానవరూపమున 

జనియించె బాలుఁడు ఇమ్మానుయేల్లుండు 
జనియించె బాలుఁడు ఇమ్మానుయేల్లుండు 
హల్లెలూయా అర్పణలు  
ఉల్లముతో చెలింతుమ్ 
రాజాధి రాజునకు హోసన్నా ప్రభువునకు (4)`,keywords:["sarvonnatha sthalamulalo samaadhaanamu","sarvonatha sthalamulalo","sarvonata stalamulalo"],video:"",artist:"Ps Divya David, Sis Sreshta Karmoji, Sis Jessica Blessy (Elsy)",genre:["Christmas"],timeSignature:"4/4"},{id:l(),title:"సర్వోన్నతుడా - నీవే నాకు ఆశ్రయదుర్గము",lyrics:`సర్వోన్నతుడా
నీవే నాకు ఆశ్రయదుర్గము (2)
ఎవ్వరు లేరు – నాకు ఇలలో (2)
ఆదరణ నీవేగా - ఆనందం నీవేగా (2)

1. నీ దినములన్నిట ఎవ్వరు నీ ఎదుట
నిలువలేరని యెహోషువాతో (2)
వాగ్దానము చేసినావు
వాగ్దాన భూమిలో చేర్చినావు (2)  ||సర్వోన్నతుడా||

2. నిందలపాలై నిత్య నిబంధన
నీతో చేసిన దానియేలుకు (2)
సింహాసనమిచ్చినావు
సింహాల నోళ్లను మూసినావు (2)  ||సర్వోన్నతుడా||

3. నీతి కిరీటం దర్శనముగా
దర్శించిన పరిశుద్ధ పౌలుకు (2)
విశ్వాసము కాచినావు
జయజీవితము ఇచ్చినావు (2)  ||సర్వోన్నతుడా||`,keywords:["sarvonnathuda neeve naaku","Sarvonathuda neve naku","Sarvonnatuda neeve naku","Sarvonnatuda neve naku","Sarvonnathuda nive naku"],video:"",artist:"Bro. Yesanna",genre:["General","Worship","Hope"],timeSignature:"4/4"},{id:l(),title:"సాక్ష్యమిచ్చెద మన స్వామి యేసు దేవుడంచు",lyrics:`సాక్ష్యమిచ్చెద మన స్వామి యేసు దేవుడంచు
సాక్ష్యమనగా గనిన వినిన సంగతులను దెల్పుటయే (2)
సాక్ష్య మిచ్చు కొరకు నన్ను స్వామి రక్షించె నంచు    ||సాక్ష్య||

1. దిక్కు దెసయు లేని నన్ను దేవుడెంతో కనికరించి (2)
మక్కువతో నాకు నెట్లు మనశ్శాంతి నిచ్చినడో     ||సాక్ష్య||

2. పల్లెటూళ్ళ జనుల రక్షణ భారము నా పైని గలదు (2)
పిల్లలకును బెద్దలకును బ్రేమతో నా స్వానుభవము  ||సాక్ష్య||

3. బోధ చేయలేను వాద ములకు బోను నాక దేల (2)
నాధు డేసు ప్రభుని గూర్చి నాకు దెలసినంత వరకు    ||సాక్ష్య||

4. పాపులకును మిత్రుడంచు బ్రాణ మొసగి లేచెనంచు (2)
బాపముల క్షమించు నంచు బ్రభుని విశ్వసించు డంచు  ||సాక్ష్య||

5. చోరు లైన జారు లనా చారు లైన నెవ్వరైన (2)
ఘోరపాపు లైన క్రీస్తు కూర్మితో రక్షించు నంచు    ||సాక్ష్య||

6. పరమత దూషణము లేల పరిహసించి పలుకు టేల (2)
ఇరుగు పొరుగు వారి కెల్ల యేసు క్రీస్తు దేవు డంచు   ||సాక్ష్య||

7. ఎల్లకాల మూరకుండ నేల యాత్మ శాంతి లేక (2)
తల్లడిల్లు వారలకును తండ్రి కుమా రాత్మ పేర   ||సాక్ష్య||`,keywords:["sakshya michedha","sakshyamidhedha","sakshamichedha","sakshamicheda","andhra christian hymn","6/8"],video:"",artist:"Mallela Dhaveedhu",genre:["Andhra Christian Hymn"],timeSignature:"6/8"},{id:l(),title:"సాగిలపడి మ్రొక్కెదము",lyrics:`సాగిలపడి మ్రొక్కెదము సత్యముతో ఆత్మలో
మన ప్రభు యేసుని ఆ ఆ ఆఆ (2)  ||సాగిలపడి||

1. మోషేకంటే శ్రేష్టుడు
అన్ని మోసములనుండి విడిపించున్ (2)
వేషధారులను ద్వేషించున్
ఆశతో మ్రొక్కెదము (2)  ||సాగిలపడి||

2. అహరోనుకంటే శ్రేష్టుడు
మన ఆరాధనకు పాత్రుండు (2)
ఆయనే ప్రధాన యాజకుడు
అందరము మ్రొక్కెదము (2)  ||సాగిలపడి||

3. ఆలయముకన్న శ్రేష్టుడు
నిజ ఆలయముగ తానే యుండెన్ (2)
ఆలయము మీరేయనెను
ఎల్లకాలము మ్రొక్కెదము (2)   ||సాగిలపడి||

4. యోనా కంటె శ్రేష్టుడు
ప్రాణ దానముగా తన్ను అర్పించెన్ (2)
మానవులను విమోచించెన్
ఘనపరచి మ్రొక్కెదము (2)  ||సాగిలపడి||

5. సొలోమోను కన్న శ్రేష్ఠుడు
సర్వజ్ఞానమునకు ఆధారుండు (2)
పదివేలలో అతిప్రియుండు
పదిలముగ మ్రొక్కెదము (2)  ||సాగిలపడి||

6. రాజులకంటే శ్రేష్ఠుడు
యాజకులనుగా మనలను చేసెన్ (2)
రారాజుగ త్వరలో వచ్చున్
రయముగను మ్రొక్కెదము (2)  ||సాగిలపడి||

7. అందరిలో అతి శ్రేష్ఠుడు
మనకందరికి తానే ప్రభువు (2)
హల్లెలూయకు పాత్రుండు
అనుదినము మ్రొక్కెదము (2)  ||సాగిలపడి||`,keywords:["saagila padi mrokkedhamu","sagila padi mrokedhamu","sagila padi mokedhamu","sagilapadi mrokedhamu","Andhra Christian Hymn"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"సిద్ధపడుదాం సిద్ధపడుదాం మన దేవుని సన్నిధికై",lyrics:`సిద్ధపడుదాం సిద్ధపడుదాం మన దేవుని సన్నిధికై
సిద్ధపరచుదాం సిద్ధపరచుదాం మన హృదయము ప్రభు కొరకై (2) 

సిద్ధ మనస్సను జోడు తొడిగి – సమాధాన సువార్త
 చాటెదం – సమాధాన సువార్త చాటెదం

1. ప్రతి ఉదయమున  ప్రార్ధనతో – నీ సన్నిధికి సిద్ధమౌదును 
జీవము కలిగిన వాక్కులకై – నీ సన్నిధిలో వేచి యుందును (2) ||సిద్ధ||

2. సత్కార్యముకై సిద్ధపడి – పరిశుద్ధతతో నుందును  
అన్ని వేళలయందు ప్రభుయేసును – ఘనపరచి కీర్తింతును (2) ||సిద్ధ||

3. బుద్ధిని కలిగి నీ రాకడకై – మెలకువతో నేనుందును 
నీ రాజ్య సువార్తను ప్రకటించి – ప్రతివారిని సిద్ధపరతును (2) ||సిద్ధ||`,keywords:["sidha padudham","sidda padudham","sidda padidam","sida padudham","sida padudam","siddha padudham","sidha padudhaa","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"స్థిరపరచువాడవు బలపరచువాడవు/ఏమైనా చేయగలవు",lyrics:`స్థిరపరచువాడవు బలపరచువాడవు
పడిపోయిన చోటే నిలబెట్టువాడవు
ఘనపరచువాడవు హెచ్చించువాడవు
మా పక్షము నిలిచి జయమిచ్చువాడవు (2)

ఏమైనా చేయగలవు కథ మొత్తం మార్చగలవు
నీ నామముకే మహిమంతా తెచ్చుకుందువు (2)
యేసయ్యా యేసయ్యా నీకే నీకే సాధ్యము (2)

1. సర్వకృపానిధి మా పరమ కుమ్మరి
నీ చేతిలోనే మా జీవమున్నది (2)
మా దేవా నీ ఆలోచనలన్ని ఎంతో గొప్పవి
మా ఊహకు మించిన కార్యములెన్నో జరిగించుచున్నవి (2)            ||ఏమైనా||

2. నీ ఆజ్ఞ లేనిదే ఏదైన జరుగునా?
నీ కంచె దాటగ శత్రువుకు సాధ్యమా? (2)
మా దేవా నీవే మా తోడుంటే అంతే చాలును
అపవాది తలచిన కీడులన్ని మేలైపోవును (2)            ||ఏమైనా||`,keywords:["sthiraparachu vaadavu, balaparachuvaadavu","stiraparachuvadavu","sthiraparachu vadavu","sthira parachu vaadavu","stira parachu vadavu"],video:"",artist:"Bro. Daniel Praneeth",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"సిల్వ చెంత నేసువా",lyrics:`1. సిల్వ చెంత నేసువా
చేర్చి నన్ను నుంచు
కల్వరిన్ స్రవించెడు
కల్వలో నన్నుంచు.

సిల్వకే సిల్వకే
చెల్లునా విముక్తి
చెల్వ మొప్ప నద్దరిన్
జేర నాకు ముక్తి 

2. కంపితాత్ము నంధునై
కానలేక యుండ
సొంపు మీరఁ బ్రోచితి
సూర్యతేజ స్కుండ

3. దేవ గొఱ్ఱె పిల్ల ఈన
దీప్తి నాకుఁ జూపు
నీ వధా ప్రభావముల్
పావనుండ నేర్పు.

4. నే నిరీక్షణంబుతో
నెప్డు వేచి యుందున్
భూ నితాంత వారధిన్
బూని యీది మందున్`,keywords:["silva chentha nesuva","silvachentha","silvachenta","siluvachenta","siluvachentha","siva chenta nesuva","silva chenta neysuva","silva chentha neysuva","silva chentha neesuva","andhra christian hymn","6/8"],video:"",artist:"Alfred Thyagaraju Saamar",genre:["Andhra Christian Hymn","Cross","Lent"],timeSignature:"6/8"},{id:l(),title:"సిల్వలో నాకై కార్చెను – యేసు రక్తము",lyrics:`సిల్వలో నాకై కార్చెను – యేసు రక్తము (2)
శిలనైన నన్ను మార్చెను – యేసు రక్తము (2)

యేసు రక్తము – ప్రభు యేసు రక్తము (2)
అమూల్యమైన రక్తము – యేసు రక్తము (2)

1. సమకూర్చు నన్ను తండ్రితో – యేసు రక్తము (2)
సంధి చేసి చేర్చును – యేసు రక్తము (2)
యేసు రక్తము – ప్రభు యేసు రక్తము (2)
ఐక్యపరచును తండ్రితో – యేసు రక్తము (2)

2. సమాధాన పరచును – యేసు రక్తము (2)
సమస్యలన్ని తీర్చును – యేసు రక్తము (2)
యేసు రక్తము – ప్రభు యేసు రక్తము (2)
సంపూర్ణ శాంతినిచ్చును – యేసు రక్తము (2)

3. నీతిమంతులుగ చేయును – యేసు రక్తము (2)
దుర్నీతి నంత బాపును – యేసు రక్తము (2)
యేసు రక్తము – ప్రభు యేసు రక్తము (2)
నిబంధన నిలుపును రక్తము – యేసు రక్తము (2)

4. రోగములను బాపును – యేసు రక్తము (2)
దురాత్మల పారద్రోలును – యేసు రక్తము (2)
యేసు రక్తము – ప్రభు యేసు రక్తము (2)
శక్తి బలము నిచ్చును – యేసు రక్తము`,keywords:["silva lo","siluvalo","lent","good friday","goodfriday","silvalo","siluvalo","siluvaloo","silvaloo","4/4"],video:"",artist:"",genre:["Lent","Cross"],timeSignature:"4/4"},{id:l(),title:"సిలువ చెంత చేరిననాడు కలుషములను కడిగివేయున్",lyrics:`సిలువ చెంత చేరిననాడు
కలుషములను కడిగివేయున్
పౌలువలెను సీలవలెను
సిద్ధపడిన భక్తులజూచి

1. కొండలాంటి బండలాంటి
మొండి హృదయంబు మండించు
పండియున్న పాపులనైన
పిలచుచుండే పరము చేర      ||సిలువ||

2. వంద గొర్రెల మందలోనుండి
ఒకటి తప్పి ఒంటరియాయే
తొంబది తొమ్మిది గొర్రెల విడిచి
ఒంటరియైన గొర్రెను వెదకెన్    ||సిలువ||

3. తప్పిపోయిన కుమారుండు
తండ్రిని విడచి తరలిపోయే
తప్పు తెలిసి తిరిగిరాగా
తండ్రియతని జేర్చుకొనియే     ||సిలువ||

4. పాపి రావా పాపము విడచి
పరిశుద్ధుల విందుల జేర
పాపుల గతిని పరికించితివా
పాతాళంబే వారి యంతము    ||సిలువ||`,keywords:["siluva chentha cherina vaadu","siluvachenta","siluvachenta","siluva chenta cherina nadu","silva chentha cherina nadu","siluvachentha cherina nadu","Andhra christian hymn","సిలువ చెంత చేరిన నాడు","siluva chentha cheerina naadu","siluva chenta cherina naadu","siluva chentha cheerina nadu","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn","Cross","Lent"],timeSignature:"4/4"},{id:l(),title:"సిలువపైన ప్రేమ చూప మరణమాయెను",lyrics:`సిలువపైన ప్రేమ చూప మరణమాయెను

1. దురిత జనుల దోషం బాప భువికెంచె ఈ ప్రేమ
నిసిని వీడి కాంతి నివ్వ వెలుగునింపే ఈ ప్రేమ
క్షమణోసంగ కఠిన నరుల శ్రమ సహించే ఈ ప్రేమ
విశ్వమంత ముక్తి నొంద దానమాయె ఈ ప్రేమ
పరిశుద్ధతను నీకు నివ్వ పాపమయ్యెను
పరమపురము నీవు చేర మార్గమాయెను

2. లోక పాప బారం మోయ బలిగా మారే ఈ ప్రేమ
దోష శిక్ష తబరించి రక్త మోడ్చే ఈ ప్రేమ
శాంతి రక్ష మనకు నీయ శిక్షా నొందే ఈ ప్రేమ
మహిమ రూపం నీవు దాల్చ సొగసు విడిచే ఈ ప్రేమ
మరణమున్ మరణింపజేయ మరణమాయెను
తిరిగిలేచి మరణం గెల్చి విజయుడాయెను`,keywords:["siluva paina prema chupa","siluvapaina prema chupa","siluva payna preema chupa","siluva paina preema chupa","siluva paina preema choopa"],video:"",artist:"Jeeva R Pakerla & Jonah Samuel",genre:["Good Friday","Lent","Cross"],timeSignature:"3/4"},{id:l(),title:"సిలువపై వ్రేలాడు శ్రీయేసుడు",lyrics:`సిలువపై వ్రేలాడు శ్రీయేసుడు
నరులకై విలపించు నజరేయుడు
ఆ దేవుడు చిందించిన రుధిర దారలే
ఈ జగతిని విమోచించు జీవధారలు

1. నిరపరాధి మౌనభుని దీనుడాయెను
మాతృమూర్తి వేదననే ఓదార్చెను
అపవాది అహంకార మణచి వేసెను
పగవారి కొరకై ప్రభు ప్రార్ధించెను 
||సిలువపై||

2. కలువరి గిరి కన్నీళ్ళతో కరిగిపోయెను
పాప జగతి పునాదులే కదలిపోయెను
లోక మంత చీకటి ఆవరించెను
శ్రీయేసుడు తలవాల్చి కన్నుమూసెను
||సిలువపై||`,keywords:["siluvapai vrelaadu sriyesudu","siluvapai vreladu sriyesudu","siluva pai vreladu sri yesudu","siluva pai veeladu","siluva pai veeladu","siluva pai veladu sriyesudu"],video:"",artist:"",genre:["Good Friday","Lent","Cross"],timeSignature:"6/8"},{id:l(),title:"సిలువలో ఆ సిలువలో ఆ ఘోర కల్వరిలో",lyrics:`సిలువలో ఆ సిలువలో ఆ ఘోర కల్వరిలో
తులువల మధ్యలో వ్రేళాడిన యేసయ్యా (2)
వెలి అయిన యేసయ్యా – బలి అయిన యేసయ్యా
నిలువెల్ల నలిగితివా – నీవెంతో అలసితివా          ||సిలువలో||

1. నేరము చేయని నీవు – ఈ ఘోర పాపి కొరకు
భారమైన సిలువ - మోయలేక మోసావు (2)
కొరడాలు చెల్లని చీల్చెనే – నీ సుందర దేహమునే (2)
తడిపెను నీ తనువునే – రుధిరంబు ధారలే (2)        ||వెలి||

2. నాదు పాప భారం – నిను సిలువకు గురి చేసెనే
నాదు దోషమే నిన్ను – అణువణువున హింసించెనే (2)
నీవు కార్చిన రక్త ధారలే – నా రక్షణకాధారం (2)
సిలువలో చేరెదన్ – విరిగిన హృదయముతోను (2)        ||వెలి||`,keywords:["siluvalo aa siluvalo","silvalo aa silvalo","siluvalo a siluvalo","seluvalo aa seluvalo"],video:"",artist:"",genre:["Good Friday","Lent","Cross"],timeSignature:"4/4"},{id:l(),title:"సిలువలో నా కొరకు - వ్రేలాడిన యేసయ్యా",lyrics:`సిలువలో నా కొరకు - వ్రేలాడిన యేసయ్యా
పరిశుద్ధ రక్తమును - చిందించినావయ్యా (2)
ఏల ఈ ఘోర శ్రమ - ఘనదైవమా నీకు  
పాపిని రక్షించుటకు - బలియైతివా(నీవు) (2)

1. నా పాపయోచనలు - ముండ్ల మకుటమాయెను
నే చేసిన దోషములు - చేతులలో సీలలాయె (2)
నా చెడు నడతలు - ప్రక్కలో బల్లెమాయె (2)
నేనే ప్రభు నిన్ను  - సిలువకప్పగించినది (2)
||సిలువలో నా కొరకు||

2. నా పాపభారమంత - సిలువలో మోసితివి
వ్యాధి బాధలన్నియు - నీవే భరియించితివి (2)
సురూపివి నీవయ్యా - కురూపిగా మారితివి (2)
ఏమని(నేనేమని) వర్ణింతును - నీ త్యాగ నిరతిని (2)
||సిలువలో నా కొరకు||

3. నీ సిలువను చూడగనే - మనసు నీరై కరిగెను
నా హృదయం ఎంతో - వేదనతో నిండెను (2)
ఈ లోకమును వీడి - నిను వెంబడింతునయ్య (2)
క్షమియించి నీ సాక్షిగ - స్థిరపరచుము యేసయ్యా (2)
||సిలువలో నా కొరకు||`,keywords:["good friday","lent","goodfriday","siluvalo nakoraku vreladina yesayya","siluvalo na koraku vrelaadina yesayya","siluvalo nakoraku vreeladina yesayya","silvalo nakoraku","siluvaloo nakoraku","siluvalo na korako"],video:"",artist:"John Kennedy Bethapudi, KJW Prem, & Anjana Swamya",genre:["Good Friday","Lent","Cross"],timeSignature:"3/4"},{id:l(),title:"సిలువలో సాగింది యాత్ర",lyrics:`సిలువలో సాగింది యాత్రా
కరుణామయుని దయగల పాత్ర
ఇది ఎవరి కోసమో...
ఈ జగతి కోసమే ఈ జనుల కోసమే

1. పాలుగారు దేహముపైనా – పాపాత్ముల కొరడాలెన్నో
నాట్యమాడి నాయి నడి వీధిలో నడిపాయి
నోరుతెరువ లేదాయె ప్రేమా 
బదులు పలుక లేదాయె ప్రేమా ||ఇది||

2. వెనుక నుండి తన్నింది ఒకరు – తనముందు నిలచి నవ్వింది మరియొకరు
బంతులాడినారు పలు బాధలు పెట్టినారు
నోరుతెరువ లేదాయె ప్రేమా 
బదులు పలుక లేదాయె ప్రేమా ||ఇది||

3. చెళ్ళుమని కొట్టింది ఒకరు – తన మోముపైన ఊసింది మరియొకరు
గేలిచేసి నారు పరిహాస మాడినారు
నోరుతెరువ లేదాయె ప్రేమా 
బదులు పలుక లేదాయె ప్రేమా ||ఇది||`,keywords:["lent","good friday","goodfriday","cross","siluvalo sagindhi yathra","siluvalo sagindhi yatra","siluvalo saagindhi yaathra","siluvalo","siluva lo","siluva lo saagindhi","siluvalo saagindi","siluvalosaagindhi","seluvalo","6/8"],video:"",artist:"",genre:["Lent","Cross","Good Friday"],timeSignature:"6/8"},{id:l(),title:"సీయోనుకన్యా",lyrics:`సీయోనుకన్యా – సంభ్రమపడుచు - వేయుము కేకల్ = పాయక నీ రాజు = భారవాహక మెక్కి - బాలస్తోత్రములతో - బైలుదేరి వచ్చె ||సీయోను||

1. హెబ్రాయిలోను - నీ రాజు పేరు – యూదులరాజు = హెబ్రీయ జనులను - అబ్రాము కొడుకులను - విభవదేశము జేర్చు - శుభరాజు యీతండే ||సీయోను||

2. హెల్లేనీలోను - నీ రాజు పేరు – యూదులరాజే = యెల్లపాపులఁ బ్రోచు - తాల్మిరక్షకుడితడు - చల్లని ప్రభువని - గొల్గొత మ్రోగెను ||సీయోను||

3. ఉర్వి రోమాలో - నీ రాజు పేరు - యూదులరాజే = సర్వరాష్ట్రికులకు -బూర్వపితరులతోను - వరసింహాసన మిచ్చు - వరదేశాధిపు డితఁడు ||సీయోను||

4. వాసిగ హెబ్రీ - హెల్లేనీలో రోమాయిలోను = హోసన్నా హోసన్నా- ప్రభుని పేరట వచ్చు - మెస్సీయ్యదావీదు - కొడుకా శ్రీశుభములు ||సీయోను||`,keywords:["siyonu kanya","seyonu kanya","siyyonu kanya","siyonukanya","Ceyonu kanya","seyoonu kanya","andhra christian hymn","7/8","seeyonu kanya"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"7/8"},{id:l(),title:"సీయోను పాటలు సంతోషముగా",lyrics:`సీయోను పాటలు సంతోషముగా
పాడుచు సీయోను వెల్లుదము (2)

1. లోకాన శాశ్వతానందమేమియు
లేదని చెప్పెను ప్రియుడేసు (2)
పొందవలె నీ లోకమునందు
కొంతకాలమెన్నో శ్రమలు (2)       ||సీయోను||

2. ఐగుప్తును విడచినట్టి మీరు
అరణ్యవాసులే ఈ ధరలో (2)
నిత్యనివాసము లేదిలలోన
నేత్రాలు కానానుపై నిల్పుడి (2)   ||సీయోను||

3. మారాను పోలిన చేదైన స్థలముల
ద్వారా పోవలసియున్ననేమి (2)
నీ రక్షకుండగు యేసే నడుపును
మారని తనదు మాట నమ్ము (2) ||సీయోను||

4. ఐగుప్తు ఆశలనన్నియు విడిచి
రంగుగ యేసుని వెంబడించి (2)
పాడైన కోరహు పాపంబుమాని
విధేయులై విరాజిల్లుడి (2)          ||సీయోను||

5. ఆనందమయ పరలోకంబు మనది
అక్కడనుండి వచ్చునేసు (2)
సీయోను గీతము సొంపుగ కలసి
పాడెదము ప్రభుయేసుకు జై (2)   ||సీయోను||`,keywords:["siyonu paatalu santhoshamuga","siyonu patalu santhoshamuga","seyonu paatalu santhoshamuga","seeyonu patalu santhooshamuga","siyonu patalu","siyoonu paatalu","seeyono patalu","Andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"సుగుణాల సంపన్నుడా",lyrics:`సుగుణాల సంపన్నుడా – స్తుతి గానాల వారసుడా
జీవింతును నిత్యము నీ నీడలో
ఆస్వాదింతును నీ మాటల మకరందము

1. యేసయ్య నీతో జీవించగానే
నా బ్రతుకు బ్రతుకుగా మారేనులే
నాట్యమాడేను నా అంతరంగము
ఇది రక్షణానంద భాగ్యమే            ||సుగుణాల||

2. యేసయ్య నిన్ను వెన్నంటగానే
ఆజ్ఞల మార్గము కనిపించెనే
నీవు నన్ను నడిపించగలవు
నేను నడవవలసిన త్రోవలో         ||సుగుణాల||

3. యేసయ్య నీ కృప తలంచగానే
నా శ్రమలు శ్రమలుగా అనిపించలేదే
నీవు నాకిచ్చే మహిమ ఎదుట
ఇవి ఎన్నతగినవి కావే               ||సుగుణాల||`,keywords:["sugunaala sampannuda","sughunaala sampannuda","sugunala sampannuda","sugunala sampanuda","suggunaala sampannuda","suggunala sampannuda","sugunalasampanuda"],video:"",artist:"Hosanna Ministries",genre:["General","Worship"],timeSignature:"4/4"},{id:l(),title:"సుడిగాలి రేగెను - అలలేమో లేచెను",lyrics:`సుడిగాలి రేగెను - అలలేమో లేచెను 
అతిచిన్న దోనె నేనయా
యేసయ్యా నాతోడు ఉండరావయా 

1. లోకమనే సంద్రంలో పయనించే నేను 
లోతైన సుడిగుండములో చిక్కుకొంటిని (2)
లోకాలనేలే సర్వాధికారి  
లోపాల నెంచక దరిచేర్చగ రావా (2) 
లేదు నాకు తోడు - శరణంటిని దేవా (2)
శరణంటిని దేవా.. ||సుడిగాలి|| 

2. శోధననే చీకట్లు ముసురుతున్న వేళలో 
చుక్కాని విడిపోయి అల్లాడే నావలో (2) 
సూర్యచంద్ర జగతిని సృష్టించిన దేవా 
సిలువ జ్యోతితో నన్ను వెలిగించగ రావా (2) 
నా దీక్కునీవే - కరుణించుము దేవా (2)
కరుణించుము దేవా.. ||సుడిగాలి|| 

3. ఎవరులేరు నాకు ఒంటరిని నేను 
అందరు విడచిన అనాధను నేను (2)
ఆదరించి ఆదుకునే ఆశ్చర్య రూపా 
అనుక్షణము నానావను కాపాడు దేవా (2) 
అర్పింతు సర్వం అనుసరింతు నిన్నే (2) 
అనుసరింతు నిన్నే ... ||సుడిగాలి||`,keywords:["sudigaali regenu","sudi gaali regenu","sidigali regenu"],video:"",artist:"Raj Alanka, Ashirvad Luke, & M M Keeravani",genre:["General"],timeSignature:"6/8"},{id:l(),title:"సుదూరము ఈ పయనము",lyrics:`సుదూరము ఈ పయనము ముందు ఇరుకు మార్గము
యేసు నాకు తోడుగా నాతోనే నడుచుచుండగా
నే వెంట వెల్లెదా నా రాజు వెంబడి
సుమధుర భాగ్యము యేసుతో పయనము

1. అలలపై నే నడిచెదా తుఫానులో హుషారుగా
ఆ ఎత్తులు ఆ లోతులు ఆ మలుపులు నే తిరిగెదా
ఉల్లాసమే యేసుతో నా పయనమంతయు
ఆశ్చర్యమైనది నే నడుచు మార్గము
ఒకొక్క అడుగులో ఓ క్రొత్త అనుభవం

2. హోరు గాలి వీచినా అలలు పైకి లేచినా
 ఏ భయము నాకు కలగదు నా పాదము తొట్రిల్లదు
నా చెంతనే ఉన్న యేసు నన్ను మోయును
ఇది నా భాగ్యము నాలోని ధైర్యము
ఏ దిగులు లేకనే నే సాగిపోదును

3. నా జీవితం పదిలము యేసుని చేతిలో
నా పయనము సఫలము యేసుదే భారము
నే చేరేదా నిశ్చయంబుగా నా గమ్యము
ఇది నా విశ్వాసము నాకున్న అభయము
కృపగల దేవుడు  విడువడు ఎన్నడూ`,keywords:["sudhuramu ee payanamu","sudhooramu ee payanamu","sodooramu","sodhooramu","sudhooramu","sudhoramu ee payanamu","sudhuram ee payanamu","suduuramu","6/8"],video:"",artist:"Surya Prakash Injarapu",genre:["General"],timeSignature:"6/8"},{id:l(),title:"సుమధుర స్వరముల గానాలతో",lyrics:`సుమధుర స్వరముల గానాలతో – వేలాది దూతల గళములతో
కొనియాడబడుచున్న నా యేసయ్యా – నీకే నా ఆరాధన (2)
మహదానందమే నాలో పరవశమే
నిన్ను స్తుతించిన ప్రతీక్షణం (2)        ||సుమధుర||

1. ఎడారి త్రోవలో నే నడచినా – ఎరుగని మార్గములో నను నడిపినా
నా ముందు నడచిన జయవీరుడా – నా విజయ సంకేతమా (2)
నీవే నీవే నా ఆనందము
(నీవే) నీవే నా ఆధారము (2)        ||సుమధుర||

2. సంపూర్ణమైన నీ చిత్తమే – అనుకూలమైన సంకల్పమే
జరిగించుచున్నావు నను విడువక – నా ధైర్యము నీవేగా (2)
నీవే నీవే నా జయగీతము
(నీవే) నీవే నా స్తుతిగీతము (2)        ||సుమధుర||

3. వేలాది నదులన్ని నీ మహిమను – తరంగపు పొంగులు నీ బలమును
పర్వత శ్రేణులు నీ కీర్తినే – ప్రకటించుచున్నవేగా (2)
నీవే నీవే నా అతిశయము
(నీకే) నీకే నా ఆరాధన (2)        ||సుమధుర||`,keywords:["sumadhura swaramula gaanalatho","sumadura svaramula","sumadura swaramula"],video:"",artist:"Hosanna Ministries",genre:["General"],timeSignature:"4/4"},{id:l(),title:"స్తుతి స్తుతి నా యేసుకే",lyrics:`స్తుతి స్తుతి నా యేసునికే - ఎల్లలు లేని ప్రేమకై
షరతులులేని క్షమాపణకై - ఎన్నడు మారని దేవునికే

హల్లెలూయా హల్లెలూయా హల్లెలూయా హల్లెలూయా (2)

అన్ని నామముల కంటెను - ఉన్నతమౌ యేసు నామమును
కీర్తించెదను ఘనపరచెదను ఆరాధించెదను

1. మోషే కంటే శ్రేష్టుడు - అబ్రహాము కంటె ముందున్నవాడు (2)
సొలోమోనుకంటె జ్ఞానవంతుడు అద్వితీయ సత్యదేవుడు (2)  ||హల్లెలూయా||

2. మరణము మీద అధికారి - పాపదాస్యపు పరిహారి (2)
యేసు అందరి ఉపకారి - ఆ యేసే మంచి కాపరి (2)  ||హల్లెలూయా||`,keywords:["sthuthi sthuthi","stuti","stuthi","sthuti","worship","sthuthi","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"స్తుతికి పాత్రుడా స్తోత్రార్హుడా",lyrics:`స్తుతికి పాత్రుడా - స్తోత్రార్హుడా
ఘనత నీకేనయ్య - మహోన్నతుడైన రాజు (2)

ఆరాధనా ఆరాధనా 
హల్లెలూయా హల్లెలూయా 
సదా పాడెద నా యేసుకే ఆరాధన
స్తుతి పాడుచు కొనసాగెద జీవితాంతము (2)

1. యుగముక పూర్వము నుండి
సర్వయుగముల వరకు
ఆది అంతము లేని ఆధ్యంతరహితుడవు (2)
వున్నవాడనువాడవ్వు - మారని ప్రేమకు వందనము ||ఆరాధనా ||

2. ప్రేమను ధ్వజముచే - మమ్మునాదరించావు
క్రీస్తును ఘటకముచే - మమ్ము చూచుచున్నావు
యేసునందున్న మమ్ములను - నూతన సృష్టిగా చేశావు ||ఆరాధనా||`,keywords:["sthuthiki paathruda","stutiki pathruda","sthutiki paatruda","3/4"],video:"",artist:"",genre:["Worship"],timeSignature:"3/4"},{id:l(),title:"స్తుతియు మహిమయు నీకె",lyrics:`స్తుతియు మహిమయు నీకె - క్షితికిన్ దివికిన్ నీటి - వితతికిన్ కర్తవై
- వెలయు మా దేవా = ప్రతి వస్తువును మాకు బహుమతిగా నిచ్చు - హితుఁడా మా ప్రేమ నీ -
కెట్లు చూపుదుము
||స్తుతియు||

1. పసిడి వర్ణపు టెండ - భాగ్య ధారల వాన - విసరు మంచి గాలి - విరియు పుష్పములు = రస
మొల్కు పండ్లు నీ - రమ్య ప్రేమన్ జాటున్ - బ్రసరించు కో తలో - పల నుందు వీవు
||స్తుతియు||

2. నెమ్మదిగల యిండ్లు - నిజసౌఖ్య కాలములు - ఇమ్మహి ఫలియించు - నైశ్వర్యాధికముల్ =
ఇమ్ముగ గలిగిన - హృదయులమై వంద - నమ్ములు ఋణపడి యు - న్నాము నీకు
||స్తుతియు||

3. దురితంబు లొనరించి - దౌర్భాగ్య స్థితి నున్న - ధరణికి నీ పుత్రున్ ధర్మంబు జేసి
= నరుల కీ ధర్మమున - కొరత దీర్చెడు సర్వ - వరము లమర్చిన పరమోపకారి
||స్తుతియు||

4. జీవంబు ప్రేమను - జేవ గల్గించెడు - పావనాత్మను మాకై పంపితివి - దీవెన లేడు రె -
ట్లావరింపను మమ్ము - నీ విమలాత్మ వా - నిని గుమ్మ
రించు
||స్తుతియు||

5. నరులకు విమోచ - నము గల్గె పాపంబుల్ - పరిహార మాయె గృ - పాసాధనముల్ = దొరికె
మోక్షాంశంబు - స్ధిరమాయె - మేము నీ కొరకేమి తేగలము పరిపూర్ణ జనకా 
||స్తుతియు||

6. మాకై వాడుకొనెడి - రూకల్ వ్యర్థం బగును - నీకై యప్పుగ నిచ్చు నిఖిల వస్తువులు =
శ్రీకరంబగు నిత్య శ్రేష్ఠ ధననిధియై పై - లోకంబు నందుండు
లోపంబు లేక   
||స్తుతియు||

7. జీవంబు వస్తువులు - శ్రేయస్సు దాన స్వ - భావంబు శక్తియు - భాగ్యంబులు = నీవలననే
లభ్య - మై వెలయుచున్నవి - నీ వాసమే మాకు - నిత్యానందంబు 
||స్తుతియు||`,keywords:["sthithiyu mahimayu neeke","stutity mahimayu neke","sthuthiyumahimayu neke"],video:"",artist:"Mangamuri Devadasu",genre:["Andhra Christian Hymn","Worship"],timeSignature:"7/8"},{id:l(),title:"స్తుతి ఘనమహిమంతయు యేసుకే చెల్లింతుము",lyrics:`స్తుతి ఘనమహిమంతయు యేసుకే చెల్లింతుము (2)

1. దూతలారా స్తుతియించుడి దూత సైన్యమ స్తుతియించుడి 
సూర్య చంద్రులార స్తుతియించుడి – నక్షత్రములార స్తుతియించుడి

2. పరమాకాశమ స్తుతియించుడి – ఆకాశ మండలమ స్తుతియించుడి
అగాధజలమా స్తుతియించుడి – భూమియు సమస్తమా స్తుతియించుడి

3. అగ్నివడగండ్లార స్తుతియించుడి – హిమము తూఫాను స్తుతియించుడి
పర్వతము గుట్టలార స్తుతియించుడి- వృక్షము పక్షులార స్తుతియించుడి

4. యవ్వనులు కన్యలు స్తుతియించుడి – పిన్నలు ప్రేద్దలు స్తుతియించుడి
వృద్ధులు బాలురు స్తుతియించుడి – నిత్యమేసు నామము స్తుతియించుడి`,keywords:["sthuthi mahimanthayu","stuti mahimantayu","2/4"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"స్తుతించి ఆరాధింతును - సర్వోన్నతుడా",lyrics:`స్తుతించి ఆరాధింతును - సర్వోన్నతుడా
స్తోత్రించి ఘనపరతుము - మహోన్నతుడా (2)

యేసయ్యా మా యేసయ్యా - నీవేగా అర్హుడవు

స్తుతియించెదము - స్తోత్రించెదము - 
పూజించెదము - ఘనపరచెదము 
||స్తుతించి ఆరాధింతును ||

1. నా దేహం నీ ఆలయమై - నా సర్వం నీకంకితమై (2)
నా జీవితమంత నీకై నేను పాడి - నా సర్వమునర్పింతును (2) 
||యేసయ్యా మా యేసయ్యా||  

2. ప్రతి క్షణము నీ సముఖములో - అనుదినము నీ అడుగులలో
నా జీవితమంత నీకై నేను పాడి - నా సర్వమునర్పింతును ||యేసయ్యా మా యేసయ్యా||`,keywords:["sthuthinchi aaradhinthunu","sthutinchi aaradhintunu","stuthi","sthuti","worship","sthuthi"],video:"",artist:"Samy Pachigalla, Susanna Esther Geddam , Jonah Samuel",genre:["General"],timeSignature:"4/4"},{id:l(),title:"స్తుతి పాత్రుడా స్తోత్రార్హుడా",lyrics:`స్తుతి పాత్రుడా స్తోత్రార్హుడా
స్తుతులందుకో పూజార్హుడా (2)
ఆకాశమందు నీవు తప్ప
నాకెవరు నా ప్రభువు (2) ||స్తుతి||

1. నా శత్రువులు నను తరుముచుండగా
నా యాత్మ నాలో కృంగెనే ప్రభు (2)
నా మనస్సు నీవైపు – తిప్పిన వెంటనే
శత్రువుల చేతినుండి విడిపించినావు
కాపాడినావు (2) ||స్తుతి||

2. నా ప్రాణ స్నేహితులు నన్ను చూచి
దూరాన నిలిచేరు నా ప్రభూ (2)
నీ వాక్య ధ్యానమే – నా త్రోవకు వెలుగై
నను నిల్పెను నీ సన్నిధిలో
నీ సంఘములో (2) ||స్తుతి||`,keywords:["sthuthi paathrudaa","sthuthi pathruda","sthuthi paathruda","sthuti pathruda","stuthi pathrudaa","sthuti patruda","worship","sthuthi"],video:"",artist:"",genre:["General"],timeSignature:"3/4"},{id:l(),title:"స్తుతులివిగో నా ప్రభువా",lyrics:`స్తుతులివిగో నా ప్రభువా
ప్రియమైన నా దేవా 
మేలులకై స్తోత్రములు
దీవెనకై కృతజ్ఞతలు 

శుద్దుడ పరిశుద్ధుడా నిన్నే కీర్తించెదన్
పూర్ణుడా పరిపూర్ణుడా నిన్నే కొలిచెదన్ 
ఎంతో ఘనమైనది నీ స్నేహం 
వివరింప లేనిది నీ త్యాగం 
నన్ను ప్రేమించే ప్రియనేస్తమా 

1.పోరాటముల పరిస్థితులలో 
నీ వైపే చూసేదన్ 
శోధన శ్రమలలో కన్నీటి బాధలలో
నిన్నే కనుగొందును 

ఓ దేవా నా దేవా నీవే 
నా క్షేమాదారము నీవే 
ఓ ప్రేమ నా ప్రేమ నీవే 
జీవన మార్గము నీవే (2)

ఏది ఏమైనా కానీ నిన్ను స్తుతియింతును 
కష్టమేమైన కానీ నిన్ను విడువను ప్రభు
నీతోనుండుటే జీవితం 
నీతోనుండుటే ధన్యము  ||స్తుతులివిగో||

2.ప్రతిస్థితిగతులను మార్చు వాడ
నీవే ఆశ్రయదుర్గము
దిక్కులేని వారలను ఆదుకొనువాడా 
మేలు చేయు దేవుడవు(2)

ఓ రాజా నా రాజా నీవే 
నా రక్షణ కేడంబు నీవే
ఓ ప్రభువా నా ప్రభువా నీవే 
నా ఆశ్రయదుర్గము నీవే(2)

బానిసనైయున్న నన్ను బిడ్డగా చేసితివే 
యోగ్యతే లేని నన్ను అర్హునిగా చేసితివే 
ఎలా నీ రుణం తీర్చెదన్ 
నా సర్వం నీకే అంకితం ||స్తుతులివిగో||`,keywords:["స్తుతులివిగో నా ప్రభువా","sthuthulivigo na prabhuva","sthuthulivego na prabhuva","sthutulivigo na prabhuva","raj prakash paul","worship"],video:"",artist:"Raj Prakash Paul",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"స్తుతులు చెల్లింతుము",lyrics:`స్తుతులు చెల్లింతుము స్తోత్రగీతముతో
పాడెదము కొనియాడెదము మా ప్రభువును
మా రక్షణకై ఆ...ఆ విమోచనకై ఆ..ఆ (2)

1. సర్వాధికారివి శక్తిమంతుడవు (2)
సృష్టికి కారకుడా స్తుతులకు పాత్రుడా (2) ||మా రక్షణకై||

2. సర్వాంగ హోమములు నీకర్పించెదము (2)
విరిగిన హృదయముతో నలిగిన మనస్సుతో (2) ||మా రక్షణకై||`,keywords:["sthuthulu chellinthumu","sthuthulu chelinthumu","stutulu chelintumu","sthutulu chelintumu","sthuthulu chelintumu","sthuthulu chellintumu","sthutulu chellinthumu","stuthulu chellinthumu","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"సృష్టిపితా సర్వోన్నతా",lyrics:`సృష్టిపితా సర్వోన్నతా - సమర్పింతున్ సర్వస్వమున్

1. భూమి ఆకాశము నీవే - భూధర శిఖరములు నీవే 
భూ ప్రజలు నీవారే - బలశౌర్యములు నీవే ||సృష్టి||

2. మా వెండి బంగారములు నీవే - మాకున్న వరములు నీవే 
మా దేహముల్ మా గేహముల్ - మా జీవితము నీవే ||సృష్టి||

3. వెలలేని గాలి వెలుతురులు - విలువైన పాడి పైరులు 
వివిధంబులైన దీవెనలు - నీ కరుణా వర్షములు ||సృష్టి||

4. పరిశుద్ధ గ్రంథపు పలుకులు - పాలోక తేనె చినుకులు 
ప్రభు యేసుని మాటలు - మా వెల్గు బాటలు ||సృష్టి||

5. మాదంత నీదే మహా దేవా - మా రాజువయ్యా యెహోవా 
మా తనువుల్ మా బ్రతుకుల్ - మా యావదాస్తి నీవే ||సృష్టి||

6. మేమిచ్చు కాన్క యేపాటిది? - యే ప్రేమ నీకు సాటిది? 
మోక్ష నాధా యేసుప్రభో - అంగీకరించువిభో ||సృష్టి||

7. తండ్రి కుమార శుద్ధాత్ముడా - త్రియేక దేవ స్తోత్రముల్ 
దాత వీవే నేతవీవే - దేవాది దేవుండవే ||సృష్టి||`,keywords:["srusti pitha sarvonnatha","srusti petha sarvoatha","Srusti pitha sarvnatha","andhra christian hymn","3/4"],video:"",artist:"D. V. Daniel",genre:["Andhra Christian Hymn"],timeSignature:"3/4"},{id:l(),title:"సేవకులారా సువార్తికులారా",lyrics:`సేవకులారా సువార్తికులారా
యేసయ్య కోరుకున్న శ్రామికులారా
సేవకులారా సువార్తికులారా
మీ మాదిరికై వందనము
ఉన్నత పనికై మమ్మును పిలచిన దేవా
మా కొరకై నీ ప్రాణం అర్పించితివి
నీలో నిలిచి యుండుటే మా భాగ్యము
నీ కొరకై జీవించెదము   ||సేవకులారా||

1. దైవాజ్ఞను నెరవేర్చుటకు – మా కోసం బలి అయ్యారు
ప్రభు రాజ్యం ప్రకటించుటకు – ప్రాణాలని ఇల విరిచారు
మా ఆత్మలు రక్షించుటకు – హత సాక్షులు మీరయ్యారు
నీతి కిరీటము పొందుటకు – అర్హులుగా మీరున్నారు     ||ఉన్నత||

2. సంఘమును కాపాడుటలో – కాపరులుగ మీరున్నారు
సువార్తకై పోరాడుటలో – సిద్ధపడిన సైన్యం మీరు
మీ ప్రేమను ఎరుగని వారు – అన్యాయముగ మిము చంపారు
మీ త్యాగం మేము – ఎన్నటికీ మరచిపోము   ||సేవకులారా||

3. సువార్తను అందించుటకు – ఎన్నో హింసలు పొందారు
ఆకలితో మోకాళ్లూని – సంఘమును పోషించారు
మాకు మాదిరి చూపించుటకు – క్రీస్తుని పోలి జీవించారు
మీ జత పని వారమే మేము – మీ జాడలో ఇక నిలిచెదము    ||ఉన్నత||`,keywords:["seevakulaara","seevakulaara suvaarthikulaara","sevakulara suvarthikulara","sevakulaara suvaartikulara","sevakulaara","sevakularaa","savakulara","4/4"],video:"",artist:"Enosh Kumar Vasamsetti",genre:["Pastors"],timeSignature:"4/4"},{id:l(),title:"సేవించెదను నిన్నిలలో",lyrics:`సేవించెదను నిన్నిలలో జీవించు దినములన్నిటిలో 
పూజించుటకు యోగ్యుడవు యుగములలో 
స్తోత్రించెదను జనములలో

1. పొరుగువారంతా కూడుకొని కష్టకాలమున నన్నుగని 
నీ దేవుడు ఏమాయెనని హేళన చేసినగాని 
నీ మాటను విని నిను నమ్ముకొని 
కడదాకా నడిచెదను - సాక్షిగ నే నిలిచెదను

2. అధిపతులు మాట్లాడుకొని కూటసాక్షుల మాటవిని 
నిన్ను విడిచిపెట్టాలని నను బెదిరించినగాని 
నీ మాటను విని నిను నమ్ముకొని 
కడదాకా నడిచెదను - సాక్షిగ నే నిలిచెదను

3. బంధువులు నను చేరుకొని మాతో ఉండుట కూడదని 
నాకున్నదంతా దోచుకొని నను వెలివేసినగాని 
నీ మాటను విని నిను నమ్ముకొని 
కడదాకా నడిచెదను - సాక్షిగ నే నిలిచెదను`,keywords:["సేవించెదను నిన్నిలలో","stevenson","seevinchedhanu ninnilalo","sevinchedhanu ninilalo","seevinchedanu"],video:"",artist:"Dr. A.R. Stevenson",genre:["General"],timeSignature:"4/4"},{id:l(),title:"సంతోష వస్త్రం",lyrics:`సంతోష వస్త్రం మాకు ధరియింపజేశావు
మా దుఃఖ దినములు సమాప్తపరచావు (2)

సంతోషం యేసు వందనం
నీవిచ్చిన ఈ సంతోష వస్త్రముకై
స్తుతి స్తోత్రం ప్రతి నిత్యం
మా దేవా నీకే అర్పితం  ||సంతోష||

1. నిత్య సుఖములు కలవు నీ సన్నిధిలో
దీవెన కలదు నీ ప్రతి మాటలో (2)
విడువను ఎడబాయనని
వాగ్ధానమిచ్చి బలపరచావు (2)    ||సంతోషం||

2. రక్షణ ఆనందం మాకిచ్చావు
మా క్రయ ధనమంతా చెల్లించావు (2)
ఏ తెగులు నీ గుడారమును
సమీపించదని సెలవిచ్చావు (2)   ||సంతోషం||`,keywords:["santhosha vasthram","santhoosha vasthram","santhosha","santosha","jk christopher","sharon sisters","sharonsisters","santosha vastram","santosa vastram","4/4"],video:"",artist:"Sharon Sisters",genre:["General"],timeSignature:"4/4"},{id:l(),title:"సంతోషముతో నిచ్చెడు వారిని",lyrics:`సంతోషముతో నిచ్చెడు వారిని
నెంతో దేవుడు ప్రేమించెన్
వింతగ వలసిన-దంతయు నొసంగును
వినయ మనసుగల విశ్వాసులకును  ||సంతోషముతో||

1. అత్యాసక్తితో నధిక ప్రేమతో
నంధకార జను-లందరకు
సత్య సువార్తను జాటించుటకై
సతతము దిరిగెడు సద్భక్తులకు    ||సంతోషముతో||

2. వేద వాక్యమును వేరు వేరు గ్రా
మాదుల నుండెడు బాలురకు
సాధులు ప్రభుని సు-బోధలు నేర్పెడి
సజ్జన క్రైస్తవోపాధ్యాయులకు    ||సంతోషముతో||

3. దిక్కెవ్వరు లేకుండెడి దీనుల
తక్కువ లన్నిటి దీర్చుటకై
నిక్కపు రక్షణ – నిద్ధరలో నలు
ప్రక్కలలో బ్రక-టించుట కొరకై    ||సంతోషముతో||

4. ఇయ్యండీ మీ కీయం బడు నని
యియ్యంగల ప్రభు యే-సనెను
ఇయ్యది మరువక మదిని నుంచుకొని
యియ్యవలెను మన యీవుల నికను    ||సంతోషముతో||

5. భక్తి గలిగి ప్రభు పని కిచ్చుఁట బహు
యుక్త మటంచు ను-దారతతో
శక్తి కొలది మన భుక్తి నుండి యా
శక్తితో నిరతము నియ్య వలెను    ||సంతోషముతో||`,keywords:["Santhoshamutho nichedu vaarini","santhoshamuto nichedu varini","andhra christian hymns","4/4"],video:"",artist:"Mocharla Raghavayya",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"సంతోషించుడి యందరు నాతో సంతోషించుడి",lyrics:`సంతోషించుడి యందరు నాతో సంతోషించుడి
యొక వింతగు కీర్తన బాడ వచ్చితిని
సంతోషించుడి నాతో సంతోషించుడి    ||సంతోషించుడి||

1. అంధకార మయమైన భూమి నా
ద్యంతము వెలిగింప – దాని యా-వేశము దొలఁగింప
వందితుండు క్రీస్తేసు నాథుడు – వచ్చె బ్రకాశుండై
భూమికి నిచ్చె ప్రకాశంబు   ||సంతోషించుడి||

2. కాన నంధకారంబు దొలఁగఁ ప్ర
కాశించెను లెండు – మీరు ప్ర-కాశింపను రెండు
మానవులను సంతోష పర్చనై – మహిని నవతరించె
భక్తుల మనము సంతసించె    ||సంతోషించుడి||

3. మిన్ను నుండి సంతోషోదయము
మిగుల ప్రకాశించె – హృదయములఁ – దగుల ప్రకాశించె
మున్ను జేయబడిన వాగ్ధత్థము – తిన్నగ నెరవేరే
భక్తుల కన్ను లాస దీరె    ||సంతోషించుడి||

4. ప్రీతియైన నీ పండుగ గూర్చి
నూతన కీర్తనను – గలసికొని – నాతో పాడుచును
నీ తరి దూరస్థుల-కీ వార్తను – నే తీరును నైనఁ
దెలుపఁగ నాతురపడవలెను    ||సంతోషించుడి||

5. పాపులపై దేవునికి గలిగిన
ప్రబలమైన దయను – లోకమునఁ – జూపింపఁ గవలెను
జూపక పోయిన లోపము మనపై – మోపబడును నిజము
వేగము జూపుద మా పథము  ||సంతోషించుడి||`,keywords:["santhoshinchudi yandharu natho","santhoshinchudi andharu natho","santoshinchudi yandaru nato","Andhra Christian Hymn","Christmas","4/4"],video:"",artist:"Mocharla Raghavayya",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"},{id:l(),title:"సందడి చేద్దామా  సంతోషిద్దామా",lyrics:`సందడి చేద్దామా సంతోషిద్దామా
రారాజు పుట్టేనని
గంతులు వేద్దామా  గానము చేద్దామా
శ్రీ యేసు పుట్టేనని (2)
మనసున్న మారాజు పుట్టేనని
సందడి చేద్దామా  సంతోషిద్దామా
మన కొరకు మారాజు పుట్టేనని
సందడి చేద్దామా...
సందడే సందడే...
సందడే సందడి సందడే సందడి
సందడే సందడి (4)

1. బెత్లహేములో సందడి చేద్దామా 
పశుశాలలో సందడి చేద్దామా 
దూతలతో చేరి సందడి చేద్దామా 
గొల్లలతో చూచి సందడి చేద్దామా (2)
మైమరచి మనసారా సందడి చేద్దామా 
ఆటలతో పాటలతో సందడి చేద్దామా 
శాలలో చేరి క్రీస్తుని చూచి సంతోషించి సందడి చేద్దామా
సందడే సందడే...
//సందడే సందడి//

2. అర్ధరాత్రిలో సందడి చేద్దామా
చుక్కను చూచి సందడి చేద్దామా
దారి చూపగ సందడి చేద్దామా
గొర్రెల విడిచి సందడి చేద్దామా (2)
మైమరచి మదినిండా సందడి చేద్దామా
మన కొరకు పుట్టేనని సందడి చేద్దామా
శాలలో చేరి క్రీస్తుని చూచి
సంతోషించి సందడి చేద్దామా
సందడే సందడే...
//సందడే సందడి//

3. రాజును చూచి సందడి చేద్దామా 
హృదయమార సందడి చేద్దామా
 కానుకలిచ్చి సందడి చేద్దామా
 సాగిలపడి సందడి చేద్దామా (2)
 మైమరచి మనసిచ్చి సందడి చేద్దామా 
మన కొరకు పుట్టేనని సందడి చేద్దామా 
శాలలో చేరి క్రీస్తుని చూచి సంతోషించి సందడి చేద్దామా
సందడే సందడే...
సందడే సందడి సందడే సందడి
సందడే సందడి (8)`,keywords:["sandhadi chedhama","sandadi chedama","sandadi chedhama","sandhadi sandhadi","sandhadi 3","sandhadi3","shalem raj","sandhadi chedhama santhoshidhama"],video:"",artist:"Dr. Shalem Raj",genre:["Christmas"],timeSignature:"6/8"},{id:l(),title:"సుందర రక్షకా! సృష్టియొక్క నాధా",lyrics:`1. సుందర రక్షకా! సృష్టియొక్క నాధా 
దేవమానవ పుత్రుఁడా నిన్నుఁ బ్రేమింతున్ 
సదా సేవింతున్ మదాత్మతోఁ గిరీటమా. 

2. మైదాన మంతయుఁ పచ్చిక బయళ్లు 
నొప్పగఁ బూచుచున్నవి ఐనను యేసుతో 
నాయన కాంతిలో దుఃఖములేనివారము. 

3. సూర్యుని కాంతియుఁ చంద్రుని శాంతియు 
ఎంతో శ్రేష్ఠమైయున్నవి. అట్లవి యున్న 
అన్నిటి కన్న యేసుని కాంతి గొప్పది. 

4. ఆనంద రక్షకా! ప్రజల నాధుఁడా 
దేవమానవ పుత్రుఁడా మహిమ, ఘనత 
స్తుతి, యారాధన నిరంతరంబు నీకగున్.`,keywords:["sundhara rakshakaa","sundhara rakshaka","sundara rakshaka","sundara rakshakaa","sundhararakshaka","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"సుందరుడా... అతిశయుడా",lyrics:`సుందరుడా... అతిశయుడా...
మహోన్నతుడా... నా ప్రియుడా (2)

పదివేలలో అతిసుందరుడవు
నా ప్రాణప్రియుడవు నీవే
షారోను పుష్పమా... లోయలోని పద్మమా...
నిను నేను నీవు కనబడినే (2) ||సుందరుడా||

1. నిను చూడాలని
నీ ప్రేమలో ఉండాలని
నేనాశించుచున్నాను (4) ||సుందరుడా||

యేసయ్యా నా యేసయ్యా
నీ వంటి వారెవ్వరు
యేసయ్యా నా యేసయ్యా
నీలాగ లేరెవ్వరు (2) ||సుందరుడా||`,keywords:["sundharuda","sundarudaa","sundharudaa","shundharuda","shundharudaa","sundaruda","sandaruda","sundharuda athisayudaa","sundharuda athisayuda","sundaruda atisayuda","sundaruda athisauda","4/4"],video:"",artist:"Sounds of Zion",genre:["Worship"],timeSignature:"4/4"},{id:l(),title:"స్నేహమై, ప్రాణమై వరించే దైవమై",lyrics:`స్నేహమై, ప్రాణమై వరించే దైవమై 
ఇదే జీవితం, నీకే అంకితం 
ఇదే నా వరం, నీవే అమృతం 
నిరంతరం సేవించనీ 

1. జగతిన వెలసి - మనసున నిలచి 
కోరె నన్ను దైవము         (2)

లోకమందు జీవమాయె - చీకటందు దీపమాయె 
పలకరించే నేస్తమాయె - కనికరించే బంధమాయె 

ఎంత ప్రేమ యేసయా - నన్ను నీలో జీవించనీ

2. తలపున కొలువై - మనవుల బదులై 
చేరె నన్ను నిరతము (2)

కలతలన్నీ కరిగిపోయే - భారమంతా తొలగిపోయే 
ఆపదందు క్షేమమాయె - తరిగిపోని భాగ్యమాయే 

ఎంత ప్రేమ యేసయా - నన్ను నీలో తరియించనీ`,keywords:["snehamai pranamai varinche dhaivama","snehamay pranamai","snehamai praanamai","snehamai pranamai varinchi"],video:"",artist:"Joshua Shaik, Pranam Kamalkhar, & Anwesshaa",genre:["General"],timeSignature:"3/4"},{id:l(),title:"సోలిపోవలదు మనస్సా",lyrics:`సోలిపోవలదు మనస్సా – సోలిపోవలదు
నిను గని పిలచిన దేవుడు విడచి పోతాడా?

1. ఇక్కట్టులు ఇబ్బందులు నిన్ను చుట్టు ముట్టినను 
ప్రియుడు నిన్ను చేరదీసిన ఆనందము కాదా?  || సోలిపోవలదు ||

2. శోధనలను జయించినచో భాగ్యవంతుడవు
జీవ కిరీటం మోయువేళ ఎంతో సంతోషము || సోలిపోవలదు ||

3. వాక్కు ఇచ్చిన దేవుని నీవు పాడి కొనియాడు
తీర్చి దిద్దే ఆత్మ నిన్ను చేర ప్రార్ధించు  || సోలిపోవలదు ||`,keywords:["soolipoovaladhu manasa","soolipovaladu","soolipoovaladhu","soolipovaladhu","soolipovaladho","solipovaladu","4/4"],video:"",artist:"Pastor D.G.S. Dhinakaran",genre:["General"],timeSignature:"4/4"},{id:l(),title:"స్తోత్రం చెల్లింతుము",lyrics:`స్తోత్రం చెల్లింతుము స్తుతి స్తోత్రం చెల్లింతుము
యేసు నాథుని మేలులు తలంచి  ||స్తోత్రం||

1. దివారాత్రములు కంటిపాపవలె కాచి (2)
దయగల హస్తముతో బ్రోచి నడిపించితివి (2)  ||స్తోత్రం||

2. గాడాంధకారములో కన్నీటి లోయలలో (2)
కృశించి పోనీయక కృపలతో బలపరచితివి (2)  ||స్తోత్రం||

3. సజీవ యాగముగా మా శరీరము సమర్పించి (2)
సంపూర్ణ సిద్దినొంద శుద్ధాత్మను నొసగితివి (2)  ||స్తోత్రం||

4. సీయోను మార్గములో పలుశోధనలు రాగా (2)
సాతాన్ని జయించుటకు విశ్వాసము నిచ్చితివి (2)   ||స్తోత్రం||

5. సిలువను మోసుకొని సువార్తను చేపట్టి (2)
యేసుని వెంబడింప ఎంత భాగ్యము నిచ్చితివి (2)  ||స్తోత్రం||

6. పాడెద హల్లెలూయా మరనాత హల్లెలూయా (2)
సద పాడెద హల్లెలూయా ప్రభుయేసుకే హల్లెలూయా (2)   ||స్తోత్రం||`,keywords:["sthothram chellinthumu","sthoothram chellinthumu","stotram chelintumu","stothram chelinthumu","sthuthram chellinthumu"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"స్తోత్రబలి స్తోత్రబలి మంచిదేవా నీకేనయ్యా",lyrics:`స్తోత్రబలి స్తోత్రబలి మంచిదేవా నీకేనయ్యా
శుభవేళ ఆనందమే నా తండ్రి నీ చిరుపాదమే
శుభవేళ ఆనందమే నా తండ్రి నీ చిరుపాదమే

కోటి కోటి స్తోత్రం డాడి (3)
కోటి కోటి స్తోత్రం డాడి (3)

1. నిన్నటి బాధలంత నేటికి మాయమయ్యె (2)
నెమ్మది వుదయించే అది శాశ్వతమైనదయ్యా (2)

కోటి కోటి స్తోత్రం డాడి (3)
కోటి కోటి స్తోత్రం డాడి (3)

2. రేయంతా కాచితివి మరో దినమిచ్చితివి (2)
మరువని నా స్నేహమా కలసి సంతోషించుము (2)

కోటి కోటి స్తోత్రం డాడి (3)
కోటి కోటి స్తోత్రం డాడి (3)

3. నీ సేవా మార్గములో వుత్సాహం నొసగితివి (2)
ఉరికురికి పనిచేయా నాకు ఆరోగ్యం ఇచ్చితివి (2) 

కోటి కోటి స్తోత్రం డాడి (3)
కోటి కోటి స్తోత్రం డాడి (3)

4. వేదన దుఃఖమైనా ఎన్నడు విడదీయదు (2)
యేసయ్య నీ నీడలో నే దినదినము జీవింతును (3)

కోటి కోటి స్తోత్రం డాడి (3)
కోటి కోటి స్తోత్రం డాడి (3)

స్తోత్రబలి స్తోత్రబలి మంచిదేవా నీకేనయ్యా
శుభవేళ ఆనందమే నా తండ్రి నీ చిరుపాదమే
శుభవేళ ఆనందమే నా తండ్రి నీ చిరుపాదమే

కోటి కోటి స్తోత్రం డాడి`,keywords:["sthothrabali sthothrabali","stotrabali stotrabali","worship","berchmans"],video:"",artist:"Father S.J.Berchmans",genre:["Worship","General"],timeSignature:"4/4"},{id:l(),title:"స్తోత్రము స్తుతి స్తోత్రము - వేలాది వందనాలు",lyrics:`స్తోత్రము స్తుతి స్తోత్రము
వేలాది వందనాలు
కలుగును గాక నీకే మహిమ
ఎల్లప్పుడూ స్తుతి స్తోత్రము
యేసయ్య యేసయ్య యేసయ్య (4)

1. శూన్యము నుండి సమస్తము కలుగజేసెను
నిరాకారమైన నా జీవితమునకు రూపము నిచ్చెను
యేసే నా సర్వము
యేసే నా సమస్తము  ||యేసయ్య||

2. పరము నుండి భూమికి దిగివచ్చిన యేసు
సిలువ మరణమునొంది మార్గము తెరిచెను
యేసే నా రక్షణ
యేసే నా నిరీక్షణ   ||యేసయ్య||`,keywords:["sthothramu sthuthi sthothramu","sthoothram sthuthi sthoothram","stotram stuti stotram","2/4"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"స్తోత్రముల్‌ స్తుతి స్తోత్రముల్‌ - వేలాది వందనాలు",lyrics:`స్తోత్రముల్‌ స్తుతి స్తోత్రముల్‌ - వేలాది వందనాలుకలుగును నీకే మహిమ - ఎల్లప్పుడు - స్తుతి స్తోత్రముల్‌
యేసయ్యా...యేసయ్యా...యేసయ్యా (4)

1. శూన్యము నుండి సమస్తము కలుగజేసెను
నిరాకారమైన నా జీవితమునకు రూపము నిచ్చెను (2)
యేసే నా సర్వము - యేసే నా సమస్తము (2) ||యేసయ్యా||

2. పరమును వీడి మానవునిగా భువికి ఏతెంచెను
మన పాపములు బాపగా శ్రమలు సహించి రక్తమును కార్చెను (2)
సిల్వలో బలియాయెను సజీవుడై తిరిగి లేచెను (2) ||యేసయ్యా||`,keywords:["స్తోత్రముల్‌ స్తుతి స్తోత్రముల్‌ వేలాది వందనాలు","sthothramul sthuthi sthothramul"],video:"",artist:"",genre:["General"],timeSignature:"2/4"},{id:l(),title:"స్తోత్రం స్తుతి స్తోత్రం - మహిమ ఘనత నీకే",lyrics:`స్తోత్రం స్తుతి స్తోత్రం - మహిమ ఘనత నీకే - అర్పింతును యేసయ్య (2)
నా కోసం మరణించి తిరిగి లేచిన - నీకే నా  స్తుతి స్తోత్రము (2)   ||స్తోత్రం స్తుతి||

1. బాధ కలుగు సమయములో నాకు తోడై నిలిచి
కష్ట నష్టాలలో నాకు నీడై నిలచి (2)
నను ధైర్యపరచితివి - నా వెంట నిలిచితివి  (2)
నా కోసం మరణించి తిరిగి లేచిన - నీకే నా  స్తుతి స్తోత్రము (2)   ||స్తోత్రం స్తుతి||

2. నే చేసిన పాపముకై - శిక్ష నీవు పొందితివి
నే చేసిన దోషముకై - సిలువలో మరణించితివి (2)
మృతుంజయుడైలేచి - మరణనే గెలిచితివి (2)
నా కోసం మరణించి తిరిగి లేచిన - నీకే నా  స్తుతి స్తోత్రము (2)   ||స్తోత్రం స్తుతి||`,keywords:["sthothram sthuthi sthothram","sthothramu sthuthi sthothramu","sthoothram sthuthi sthothram","stotram stuti stotram","sthotram sthuti stothram","jk christopher","good friday","lent"],video:"",artist:"J.K. Christopher & Jessica Blessy",genre:["Easter","Good Friday","Hope","Worship"],timeSignature:"4/4"},{id:l(),title:"సంగీత నాదముతో స్తోత్ర సంకీర్తనతో",lyrics:`సంగీత నాదముతో స్తోత్ర సంకీర్తనతో
నీ ప్రేమ గీతం పాడెద
నీ గోప్ప కార్యం చాటెద
నా జీవితం మార్చిన యేసయ్యా
ఈ నీ రుణం తీర్చుట ఎటులయ్యా           ||సంగీత||

1. నా కఠిన హృదయమున కారుణ్యమును నింపి
కలువలు పూయించిన కృపలను కొనియాడెద (2)
పాపములు క్షమియించి నను మార్చిన
దోషములు భరియించి దరిచేర్చిన         ||నీ ప్రేమ||

2. నా కష్ట సమయమున నా చెంతనే నిలచి
విడువక నడిపించిన విధమును వివరించెద (2)
క్షేమమును కలిగించి నను లేపిన
దీవెనలు కురిపించి కృపచూపిన          ||నీ ప్రేమ||

3. నా దుఃఖ దినములలో ఓదార్పు కలిగించి
కన్నీటిని తుడిచిన క్రమమును ప్రకటించెద (2)
వాక్యముతో దర్శించి బలపరిచిన
సత్యముతో సంధించి స్థిరపరిచిన         ||నీ ప్రేమ||`,keywords:["sangeetha naadhamutho","sangeeta nadhamuto","sangitha nadhamutho","sangitha nadhamuto","Sangetha nadhamutho","sangetha nadamuto","stevenson"],video:"",artist:"Dr. A.R.Stevenson",timeSignature:"4/4"}],హ:[{id:l(),title:"హాయి లోకమా! ప్రభువచ్చెన్",lyrics:`1. హాయి లోకమా! ప్రభువచ్చెన్
అంగీకరించుమీ
పాపాత్ములెల్ల రేసునున్
కీర్తించి పాడుడీ

2. హాయి రక్షకుండు ఏలును
సాతాను రాజ్యమున్
నశింపజేసి మా యేసే
జయంబు నొందును

3. పాప దుఃఖంబులెల్లను
నివృత్తి జేయును
రక్షణ్య సుఖక్షేమముల్
సదా వ్యాపించును

4. సునీతి సత్యకృపలన్
రాజ్యంబు నేలును
భూజనులార మ్రొక్కుడీ
స్తోత్రార్హుడాయెనే`,keywords:["hayi lokama prabhu vachen","hai lokama prabhu vachen","hai lokama","hailokama","hayilokama","joy to the world","andhra christian hymn","christmas","4/4"],video:"",artist:"Jacob Charles",genre:["Andhra Christian Hymn","Christmas"],timeSignature:"4/4"},{id:l(),title:"హల్లెలూయా ఆరాధన రాజాధి రాజు యేసునకే",lyrics:`హల్లెలూయా ఆరాధన
రాజాధి రాజు యేసునకే
మహిమయు ఘనతయు
సర్వాధికారి క్రీస్తునకే (2)

చప్పట్లు కొట్టుచూ – పాటలు పాడుచూ
ఆ ప్రభుని కీర్తించెదం
నాట్యము చేయుచు – ఉత్సాహ ధ్వనులతో
స్తోత్రార్పణ చేసెదం    ||హల్లెలూయా||

1. రూపింప బడక ముందే నన్ను ఎరిగితివి
నా పాదములు జారకుండా రక్షించి నడిపితివి (2)    ||చప్పట్లు||

2. అభిషేక వస్త్రము నిచ్చి వీరులుగా చేసితివి
అపవాది క్రియలను జయించే ప్రార్థన శక్తినిచ్చితివి (2)  ||చప్పట్లు||

3. నీ సొత్తైన జనముగ ప్రత్యేగ పరచితివీ
యుగయుగములు నీతో నివసించే భాగ్యమునిచ్చితివి (2)  ||చప్పట్లు||`,keywords:["halleluya aaradhana","halleluya aaraadhana","hallelujah aradhana","halleluyaa aradana","haleluya aradanaa","sharonsisters","sharon sisters","jk christopher","jkchristopher","worship","2/4"],video:"",artist:"Sharon Sisters",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"హల్లెలూయ యని పాడి స్తుతింపను",lyrics:`హల్లెలూయ యని పాడి స్తుతింపను
రారె జనులారా మనసారా ఊరూర

1. పాడి పంటలనిచ్చి - పాలించి దేవుడని - కూడు గుడ్డల నిచ్చి
పోషించు దేవుడని - తోడు నీడగ నిన్ను - కాపాడు దేవుడని
పోషించు దేవుడని - తోడు నీడగ నిన్ను - కాపాడు దేవుడని

2. తాత ముత్తాతలకన్న - ముందున్న దేవుడని - తల్లి దండ్రులకన్న
ప్రేమించు దేవుడని - కల్లాకపటములేని - కరుణ సంపన్నుడని
పూజించి - పూజించి - పాటించి - 
చాటించ రారె

3. బందూ మిత్రులకన్నా - బలమైన దేవుడని - అన్నదమ్ములకన్న
ప్రియమైన దేవుడని - కన్నబిడ్డలకన్న - కన్నుల పండుగని
పూజించి - పూజించి - పాటించి - 
చాటించ రారె

4. రాజాధి రాజుల కన్న రాజైన దేవుడని - నీచాతి నీచులను
ప్రేమించవచ్చెనని - నిన్న నేడు ఏకరీతిగా ఉన్నాడని
పూజించి - పూజించి - పాటించి - 
చాటించ రారె`,keywords:["halleluya ani paadi","halleluya ane padi sthuthinpanu","haleluya ani padi","halleluya yani padi","halleluya yani paadi"],video:"",artist:"Ps. Raja Babu, Prem Joseph, & Enosh Kumar Vasamsetti",genre:["General"],timeSignature:"4/4"},{id:l(),title:"హల్లెలూయా యేసు ప్రభున్ ఎల్లరు స్తుతియించుడి",lyrics:`హల్లెలూయా యేసు ప్రభున్ ఎల్లరు స్తుతియించుడి
వల్లభుని చర్యలను తిలకించి స్తుతియించుడి
బలమైన పని చేయు బలవంతుని స్తుతియించుడి
ఎల్లరిని స్వీకరించు యేసుని స్తుతియించుడి

రాజుల రాజైన యేసు రాజు భూజనులనేలున్
హల్లెలూయా, హల్లెలూయా దేవుని స్తుతియించుడి

1. తంబురతోను వీణతోను ప్రభువుని స్తుతియించుడి
పాపమును రక్తముతో తుడిచెను స్తుతియించుడి
బూరతోను తాళముతో మ్రోగించి స్తుతియించుడి
నిరంతరము మారని యేసుని స్తుతియించుడి  ||రాజుల||

2. సూర్య చంద్రులారా ఇల దేవుని స్తుతియించుడి
హృదయమును వెలిగించిన యేసుని స్తుతియించుడి
అగ్నివడగండ్లార మీరు  కర్తను స్తుతియించుడి
హృదయమును చేధించిన నాథుని స్తుతియించుడి  ||రాజుల||

3. యువకులారా పిల్లలారా దేవుని స్తుతియించుడి
జీవితమున్ ప్రభుపనికై సమర్పించి స్తుతియించుడి
పెద్దలారా ప్రభువులారా యెహోవాను స్తుతియించుడి
ఆస్తులను యేసునకై అర్పించి స్తుతియించుడి     ||రాజుల||

4. అగాథమైన జలములారా దేవుని స్తుతియించుడి
అలలవలె సేవకులు లేచిరి స్తుతియించుడి
దూతలారా పూర్వ భక్తులారా దేవుని స్తుతియించుడి
పరమందు పరిశుద్ధులు ఎల్లరు స్తుతియించుడి   ||రాజుల||`,keywords:["halleluya yesu prabun","halleluya yesuprabhun","halleluyaa yesu prabun","haleluya yesu prabhun","worship","2/4"],video:"",artist:"",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"హల్లెలూయ స్తుతి మహిమ",lyrics:`హల్లెలూయ స్తుతి మహిమ
ఎల్లప్పుడు దేవుని కిచ్చెదము (2)

ఆ... హల్లెలూయా హల్లెలూయా హల్లెలూయా (2)

1. అల సైన్యములకు అధిపతియైన ఆ దేవుని స్తుతించెదము (2)
అల సంద్రములను దాటిన ఆ యెహోవాను స్తుతించెదము (2) ||హల్లెలూయ||

2. ఆకాశమునుండి మన్నాను పంపిన దేవుని స్తుతించెదము (2)
బండనుండి మధుర జలమును పంపిన ఆ యెహోవాను స్తుతించెదము (2) ||హల్లెలూయ||`,keywords:["halleluya sthuthi mahima","halleluya sthuthimahima","hallelujah","halleluyaa","haleluya","hallelua","halleluya stuti mahima","halle luya stutimahima","hallelooya sthuthi mahima","hallelooya","hallelooa sthuthi","haleluya stuti","worship","2/4"],video:"",artist:"",genre:["Worship"],timeSignature:"2/4"},{id:l(),title:"హల్లెలూయా స్తోత్రం యేసయ్యా",lyrics:`హల్లెలూయా స్తోత్రం యేసయ్యా (4)

యేసయ్యా నీవే నా రక్షకుడవు
యేసయ్యా నీవే నా సృష్టికర్తవు

దరి చేర్చి ఆదరించుమా ఓ యేసయ్యా
దరి చేర్చి ఆదరించుమా

We Praise You and Worship You 
Almighty God, 
Praise You and Worship You
హల్లెలూయా ఆమెన్ ఓ యేసయ్యా
ఆమెన్ హల్లెలూయా

1. పరిశుద్ద తండ్రివి - పరమా స్వరూపివి
సర్వాదికారివి - ఓ యేసయ్యా 
కృప చూపి నడిపించుమా ఓ యేసయ్యా 
కృప చూపి నడిపించుమా 

2. స్తుతులకు పాత్రుడా - స్తోత్రించి కీర్తింతున్ 
కొనియాడి పొగడెదన్ - ఓ యేసయ్యా
కరుణించి కాపాడుమా 
ఓ యేసయ్యా - కరుణించి కాపాడుమా`,keywords:["హల్లెలూయా స్తోత్రం యేసయ్యా","halleluya sthothram yesayya","hallelooya sthothram yesayya","haleluya sthothram yeesayya"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"హల్లెలూయ హల్లెలూయ స్తోత్రములు",lyrics:`హల్లెలూయ హల్లెలూయ స్తోత్రములు
హల్లెలూయ హల్లెలూయ స్తోత్రములు (2)

రాజుల రాజా ప్రభువుల ప్రభువా
రానైయున్నవాడా (2)

మహిమా మహిమా ఆ యేసుకే
మహిమా మహిమా మన యేసుకే (2)    ||హల్లెలూయ||

సూర్యునిలో చంద్రునిలో
తారలలో ఆకాశములో (2)           ||మహిమా||

కొండలలో లోయలలో
జీవులలో ఆ జలములలో (2)       ||మహిమా||

ఆశ్చర్యకరుడా ఆదిసంభూతుడా
యుగయుగముల నిత్యుడా (2)    ||మహిమా||`,keywords:[],video:"",artist:"",genre:["Worship","General"],timeSignature:"2/4"},{id:l(),title:"హృదయమే నీ ఆలయం క్రీస్తు",lyrics:`హృదయమే నీ ఆలయం క్రీస్తు
నీ నామమే నా గానం
విదితము కాదే ఇలలో ఎవరికీ
వివరింపగా నీ పవన రూపం
హృదయమే నీ ఆలయం క్రీస్తు

1. మనిషి మనిషిగా బ్రతకాలని
మంచిని మనసున పెంచాలని
సిలువలో నీవు మరణించి (2)
మృత్యువునే నీవు ఎదురించి
వెలసిన దేవుడా నీవే
పాపుల రక్షణ నీవే ||హృదయమే||

2. కారు చీకటిలో కాంతి రేఖవై
మూగ గుండెల్లో దివ్య వాణివై
దీనులనే నీవు కరుణించి(2)
వేదనలే నీవు తరలించి
పరమున చేరిన దేవా
శరణు శరణు ఓ ప్రభువా ||హృదయమే||`,keywords:["హృదయమే నీ ఆలయం క్రీస్తు","hrudhayame ni aalayam kreesthu","hrudayame nee aalayam kreesthu","hrudhayame ni aalayam kresthu","hrudhayame nee aalayam kristhu"],video:"",artist:"",genre:["General"],timeSignature:"4/4"},{id:l(),title:"హే ప్రభుయేసు",lyrics:`హే ప్రభుయేసు హే ప్రభుయేసు హే ప్రభు దేవసుతా
సిల్వధరా – పాపహరా – శాంతికరా  ||హే ప్రభు||

1. శాంతి సమాధానాధిపతీ
స్వాంతములో ప్రశాంతనిధీ (2)
శాంతి స్వరూపా జీవనదీపా (2)
శాంతి సువార్తనిధీ  ||సిల్వధరా||

2. తపములు తరచిన నిన్నెగదా
జపములు గొలిచిన నిన్నెగదా (2)
విఫలులు చేసిన విజ్ఞాపనలకు (2)
సఫలత నీవెగదా   ||సిల్వధరా||

3. మతములు వెదకిన నిన్నెకదా
వ్రతములుగోరిన నిన్నేగదా (2)
పతితులు దేవుని సుతులని నేర్పిన (2)
హితమతి వీవెగదా ||సిల్వధరా||

4. పలుకులలో నీ శాంతికధ
తొలకరి వానగా కురిసెగదా (2)
మలమల మాడిన మానవ హృదయము (2)
కలకలలాడె కదా  ||సిల్వధరా||

5. కాననతుల్య సమాజములో
హీనత జెందెను మానవత (2)
మానవ మైత్రిని సిల్వ పతాకము (2)
దానము జేసెగదా  ||సిల్వ ధరా||

6. దేవుని బాసిన లోకములో
చావుయే కాపురముండె గదా (2)
దేవునితో సఖ్యంబును జగతికి (2)
యీవి నిడితివి గదా  ||సిల్వ ధరా||

7. పాపము చేసిన స్త్రీని గని
పాపుల కోపము మండె గదా (2)
దాపున జేరి పాపిని బ్రోచిన (2)
కాపరి వీవెగదా   ||సిల్వ ధరా||

8. ఖాళీ సమాధిలో మరణమును
ఖైదిగ జేసిన నీవే గదా (2)
ఖలమయుడగు సాతానుని గర్వము (2)
ఖండనమాయె గదా   ||సిల్వ ధరా||

9. కలువరిలో నీ శాంతి సుధా
సెలయెరుగ బ్రవహించే గదా (2)
కలుష ఎడారిలో కలువలు పూయుట (2)
సిలువ విజయము గదా   ||సిల్వ ధరా||`,keywords:["hey prabhu yesu","he prabhu yesu","hey prabu yeesu","hey prabhu yeesu","andhra christian hymn","4/4"],video:"",artist:"",genre:["Andhra Christian Hymn"],timeSignature:"4/4"},{id:l(),title:"హోసన్న హోసన్న జయ గీతం పాడెదం",lyrics:`హోసన్న హోసన్న 
జయ గీతం పాడెదం 
హోసన్న హోసన్న 
జయ ధ్వనులు చేసెదం 
మన ప్రభువు మహా దేవుడు 
యేసునకు హోసన్న 
రక్షకుడు పరిశుద్ధుడు 
యేసునకు హోసన్న

1. శిక్షకు పాత్రులము దైవ విరోధులము
దేవుని క్రోధము దిగి రావలెను
దయగల దేవుడు కనికరము చూపెను
యేసును లోకముకు పంపెను
శిక్షకు బదులుగా కృపయే దిగి వచ్చెను

2. మన అపవాదిని యేసు జయించెను
పాపపు సంకెళ్ళను తెంచెను
మరణపు ముళ్ళును విరిచి వేసెను
మనలో తన జీవమును నింపెను
తన జయ గాధలో మనలను చేర్చెను

3. మన ఈ జీవితము దానము దేవునిదే
మన ఆనందమే తన ఆశయము
ఆనందించెదము యేసులో ఎల్లప్పుడు
స్తుతి పాటలు పాడుచు ఉల్లాసముగా
యేసు మన బ్రతుకును నాట్యముగా మార్చెను`,keywords:["hosanna hosanna","hosana hosana","easter"],video:"",artist:"Joel Kodali & Hadlee Xavier",genre:["Easter","General","Hope"],timeSignature:"4/4"}]},Zh=()=>{let h=[];for(const o in Ot)Array.isArray(Ot[o])&&(h=h.concat(Ot[o]));return h},Lf=()=>Object.keys(Ot),Kf="Vinnu's Telugu Christian Lyrics",Bt=({title:h,children:o})=>{const m=dl(),c=Me().pathname==="/",p=()=>{m(-1)};return O.jsxs("header",{className:"app-header",children:[O.jsx("div",{className:"constant-header",children:O.jsx("h1",{className:"website-name",children:Kf})}),O.jsxs("div",{className:"sub-header",children:[O.jsxs("div",{className:"header-left",children:[!c&&O.jsx("button",{onClick:p,className:"header-icon back-icon",children:"◀ "}),c&&o&&o[0]]}),O.jsx("h2",{className:"page-title",children:h}),O.jsx("div",{className:"header-right-icons",children:!c&&O.jsx("button",{onClick:()=>m("/"),className:"header-icon home-icon",children:"⌂ "})})]})]})},Yf=({isOpen:h,onClose:o})=>{const m=C.useMemo(()=>Zh().length,[]);return h?O.jsx("div",{className:"modal-backdrop",onClick:o,children:O.jsxs("div",{className:"modal-content settings-modal",onClick:s=>s.stopPropagation(),children:[O.jsx("h2",{children:"App Info"}),O.jsxs("div",{className:"settings-section",children:[O.jsx("h3",{children:"Total Songs in the App:"}),O.jsx("p",{className:"song-count-display",children:m})]}),O.jsxs("div",{className:"settings-section",children:[O.jsx("h3",{children:"Contact:"}),O.jsx("p",{children:"Please contact us at example@email.com for support."})]}),O.jsxs("div",{className:"settings-section",children:[O.jsx("h3",{children:"About:"}),O.jsx("p",{children:"This is a lightweight Telugu Christian Lyrics Application, created using React.js and Vite."})]}),O.jsx("button",{onClick:o,className:"modal-close-button primary-btn",children:"Close"})]})}):null},qf=({song:h,viewType:o})=>{const m=dl(),s=()=>{m(`/song/${h.id}`)},c=h.genre||[],p=o==="grid";return O.jsxs("div",{className:"song-list-item",onClick:s,children:[O.jsx("h3",{className:"song-title",children:h.title}),!p&&O.jsxs("div",{className:"song-details-small",children:[O.jsx("span",{className:"detail-genre",children:c.slice(0,2).join(", ")}),O.jsx("span",{className:"detail-separator",children:"|"}),O.jsx("span",{className:"detail-timesig",children:h.timeSignature||"N/A"}),O.jsx("span",{className:"detail-separator",children:"|"}),O.jsx("span",{className:"detail-artist",children:h.artist||"Unknown Artist"})]})]})},Ty=({songs:h,viewType:o="list"})=>{if(!h||h.length===0)return O.jsx("p",{className:"no-data-message",children:"No songs found in this list."});const m=o==="grid"?"grid-view":"list-view";return O.jsx("div",{className:`song-list-container ${m}`,children:h.map(s=>O.jsx(qf,{song:s,viewType:o},s.id))})},Xf=(h,o)=>{const[m,s]=C.useState(h);return C.useEffect(()=>{const c=setTimeout(()=>{s(h)},o);return()=>{clearTimeout(c)}},[h,o]),m},Vf=Zh(),Qf=Lf(),Zf=()=>{dl();const[h,o]=C.useState(""),[m,s]=C.useState([]),[c,p]=C.useState(!1),A=Xf(h,300);return C.useEffect(()=>{if(A.trim()===""){s([]);return}const H=A.toLowerCase(),S=Vf.filter(v=>v.title.toLowerCase().includes(H)||v.keywords.some(R=>R.toLowerCase().includes(H)));s(S)},[A]),O.jsxs("div",{className:"home-page page-container",children:[O.jsx(Bt,{title:"Home",children:O.jsx("button",{onClick:()=>p(!0),className:"header-icon",children:"⋮"})}),O.jsxs("div",{className:"content-area",children:[O.jsx("div",{className:"search-bar-container",children:O.jsx("input",{type:"text",placeholder:"Search songs by title or keyword...",value:h,onChange:H=>o(H.target.value),className:"search-input"})}),h.trim()===""?O.jsxs(O.Fragment,{children:[O.jsx("hr",{}),O.jsx("div",{className:"alphabet-nav-grid",children:Qf.map(H=>O.jsx(Qh,{to:`/alphabet/${H}`,className:"alphabet-link",children:H},H))})]}):O.jsxs("div",{className:"search-results-area",children:[O.jsxs("h3",{children:['Search Results for: "',h,'"']}),m.length>0?O.jsx(Ty,{songs:m}):O.jsx("p",{children:"No songs found matching your search."})]})]}),O.jsx(Yf,{isOpen:c,onClose:()=>p(!1)})]})},Wf=()=>{const{char:h}=Ay(),[o,m]=C.useState("All Genres"),[s,c]=C.useState("list"),p=C.useMemo(()=>Ot[h]||[],[h]),A=C.useMemo(()=>{const v=new Set;return p.forEach(R=>{R.genre.forEach(z=>v.add(z))}),["All Genres",...Array.from(v).sort()]},[p]),H=C.useMemo(()=>o==="All Genres"?p:p.filter(v=>v.genre.includes(o)),[p,o]);C.useEffect(()=>{m("All Genres")},[h]);const S=C.useCallback(()=>{m("All Genres")},[]);return p.length===0?O.jsxs("div",{className:"page-container",children:[O.jsx(Bt,{title:`Songs Starting with "${h}"`}),O.jsxs("p",{className:"no-data-message",children:['No songs found starting with "',h,'".']})]}):O.jsxs("div",{className:"alphabet-songs-screen page-container",children:[O.jsx(Bt,{title:`Songs Starting with "${h}"`}),O.jsxs("div",{className:"filter-controls",children:[O.jsxs("div",{className:"genre-filter",children:[O.jsx("label",{htmlFor:"genre-select",children:"Filter by Genre:"}),O.jsx("select",{id:"genre-select",value:o,onChange:v=>m(v.target.value),className:"dropdown-select",children:A.map(v=>O.jsx("option",{value:v,children:v},v))})]}),O.jsxs("div",{className:"view-toggle-buttons",children:[O.jsx("button",{onClick:()=>c("list"),className:`view-toggle-btn ${s==="list"?"active-view":""}`,children:"☰ "}),O.jsx("button",{onClick:()=>c("grid"),className:`view-toggle-btn ${s==="grid"?"active-view":""}`,children:"▦ "})]}),O.jsx("button",{onClick:S,className:"reset-button",children:"Reset Filter"})]}),O.jsxs("p",{className:"song-count",children:[H.length," songs displayed"]}),O.jsx(Ty,{songs:H,viewType:s})]})},$f=({isOpen:h,onClose:o,song:m})=>h?O.jsx("div",{className:"modal-backdrop",onClick:o,children:O.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[O.jsx("h2",{children:"Song Information"}),O.jsxs("p",{className:"modal-song-title",children:["**",m.title,"**"]}),O.jsxs("div",{className:"modal-details-grid",children:[O.jsxs("div",{className:"detail-row",children:[O.jsx("strong",{children:"Genre(s):"}),O.jsx("span",{children:m.genre.join(", ")})]}),O.jsxs("div",{className:"detail-row",children:[O.jsx("strong",{children:"Time Signature:"}),O.jsx("span",{children:m.timeSignature})]}),O.jsxs("div",{className:"detail-row",children:[O.jsx("strong",{children:"Artist:"}),O.jsx("span",{children:m.artist})]})]}),O.jsx("button",{onClick:o,className:"modal-close-button",children:"Close"})]})}):null,Ff=()=>{const{id:h}=Ay(),[o,m]=C.useState(!1),s=C.useMemo(()=>Zh().find(A=>A.id===h),[h]);if(!s)return O.jsxs("div",{className:"page-container",children:[O.jsx(Bt,{title:"Lyrics Not Found"}),O.jsx("p",{className:"no-data-message",children:"Sorry, the song you are looking for does not exist."})]});const c=s.lyrics.split(`
`).map((p,A)=>O.jsxs(cy.Fragment,{children:[p,O.jsx("br",{})]},A));return O.jsxs("div",{className:"lyrics-screen page-container",children:[O.jsx(Bt,{title:s.title}),O.jsxs("div",{className:"lyrics-toolbar",children:[O.jsx("button",{onClick:()=>m(!0),className:"info-button",children:"ℹ Song Details"}),s.video&&O.jsx("a",{href:s.video,target:"_blank",rel:"noopener noreferrer",className:"youtube-link",children:"▶ YouTube"})]}),O.jsx("div",{className:"lyrics-content",children:c}),O.jsx($f,{isOpen:o,onClose:()=>m(!1),song:s})]})},Pf="/vinnu-lyrics-website/",If=()=>O.jsx(Cf,{basename:Pf,children:O.jsx("div",{className:"app-main-container",children:O.jsxs(ef,{children:[O.jsx(_t,{path:"/",element:O.jsx(Zf,{})}),O.jsx(_t,{path:"/alphabet/:char",element:O.jsx(Wf,{})}),O.jsx(_t,{path:"/song/:id",element:O.jsx(Ff,{})}),O.jsx(_t,{path:"*",element:O.jsx("h1",{style:{textAlign:"center",marginTop:"50px"},children:"404 - Page Not Found"})})]})})});m2.createRoot(document.getElementById("root")).render(O.jsx(cy.StrictMode,{children:O.jsx(If,{})}));
