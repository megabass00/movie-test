/*
 AngularJS v1.4.14
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,U,x){'use strict';function B(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.14/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function Aa(a){if(null==a||Ya(a))return!1;if(L(a)||H(a)||D&&a instanceof D)return!0;
var b="length"in Object(a)&&a.length;return P(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function p(a,b,d){var c,e;if(a)if(G(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||Aa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Xd(){return++mb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(K(g)||G(g))for(var h=Object.keys(g),k=0,m=h.length;k<m;k++){var l=h[k],n=g[l];d&&K(n)?ea(n)?a[l]=new Date(n.valueOf()):La(n)?a[l]=new RegExp(n):n.nodeName?a[l]=n.cloneNode(!0):
Nb(n)?a[l]=n.clone():(K(a[l])||(a[l]=L(n)?[]:{}),Mb(a[l],[n],!0)):a[l]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function N(a){return Mb(a,ta.call(arguments,1),!1)}function Yd(a){return Mb(a,ta.call(arguments,1),!0)}function ca(a){return parseInt(a,10)}function Ob(a,b){return N(Object.create(a),b)}function v(){}function Za(a){return a}function ma(a){return function(){return a}}function qc(a){return G(a.toString)&&a.toString!==na}function r(a){return"undefined"===typeof a}function u(a){return"undefined"!==
typeof a}function K(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function H(a){return"string"===typeof a}function P(a){return"number"===typeof a}function ea(a){return"[object Date]"===na.call(a)}function G(a){return"function"===typeof a}function La(a){return"[object RegExp]"===na.call(a)}function Ya(a){return a&&a.window===a}function $a(a){return a&&a.$evalAsync&&a.$watch}function Ma(a){return"boolean"===typeof a}function sc(a){return a&&P(a.length)&&
Zd.test(na.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function $d(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function oa(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Na(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!K(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Ya(a)||$a(a))throw Ba("cpws");var b=!1,c;L(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):ea(a)?c=new Date(a.getTime()):La(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):"[object Blob]"===na.call(a)?c=new a.constructor([a],{type:a.type}):G(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),
b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Ba("cpta");if(a===b)throw Ba("cpi");L(b)?b.length=0:p(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function fa(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(K(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function la(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,
c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!la(a[c],b[c]))return!1;return!0}}else{if(ea(a))return ea(b)?la(a.getTime(),b.getTime()):!1;if(La(a))return La(b)?a.toString()==b.toString():!1;if($a(a)||$a(b)||Ya(a)||Ya(b)||L(b)||ea(b)||La(b))return!1;d=Z();for(c in a)if("$"!==c.charAt(0)&&!G(a[c])){if(!la(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!G(b[c]))return!1;return!0}return!1}function bb(a,b,d){return a.concat(ta.call(b,
d))}function tc(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!G(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,bb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ae(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=x:Ya(b)?d="$WINDOW":b&&U===b?d="$DOCUMENT":$a(b)&&(d="$SCOPE");return d}function cb(a,b){if(r(a))return x;P(b)||(b=b?2:null);return JSON.stringify(a,ae,b)}function uc(a){return H(a)?
JSON.parse(a):a}function vc(a,b){a=a.replace(be,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=vc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ua(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Oa?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};p((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),u(e)&&(f=u(f)?wc(f):!0,sa.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];p(a,function(a,c){L(a)?p(a,function(a){b.push(ha(c,!0)+(!0===a?"":"="+ha(a,!0)))}):b.push(ha(c,!0)+(!0===a?"":"="+ha(a,!0)))});return b.length?b.join("&"):""}function nb(a){return ha(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ha(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ce(a,b){var d,c,e=Pa.length;for(c=0;c<e;++c)if(d=Pa[c]+b,H(d=a.getAttribute(d)))return d;return null}function de(a,b){var d,c,e={};p(Pa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Pa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ce(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){K(d)||(d={});d=N({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===U?"document":ua(a);throw Ba("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(d.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return c();R.name=R.name.replace(f,"");da.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};G(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function ee(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}
function fe(a){a=da.element(a).injector();if(!a)throw Ba("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(ge,function(a,c){return(c?b:"")+a.toLowerCase()})}function he(){var a;if(!Ac){var b=ob();(pa=r(b)?R.jQuery:b?R[b]:x)&&pa.fn.on?(D=pa,N(pa.fn,{scope:Qa.scope,isolateScope:Qa.isolateScope,controller:Qa.controller,injector:Qa.injector,inheritedData:Qa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):D=S;da.element=D;Ac=!0}}function pb(a,b,d){if(!a)throw Ba("areq",b||"?",d||"required");return a}function Ra(a,b,d){d&&L(a)&&(a=a[a.length-1]);pb(G(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Sa(a,b){if("hasOwnProperty"===a)throw Ba("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
G(a)?tc(e,a):a}function qb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=D(ta.call(a,0,e))),c.push(b);return c||a}function Z(){return Object.create(null)}function ie(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=B("$injector"),c=B("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||B;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return t}}function b(a,d){return function(b,e){e&&G(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return t}}if(!g)throw d("nomod",f);var c=[],e=[],J=[],z=a("$injector","invoke","push",e),t={_invokeQueue:c,_configBlocks:e,_runBlocks:J,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:z,run:function(a){J.push(a);return this}};h&&z(h);return t})}})}function je(a){N(a,{bootstrap:yc,copy:Na,extend:N,merge:Yd,equals:la,element:D,forEach:p,injector:db,noop:v,bind:tc,toJson:cb,fromJson:uc,identity:Za,isUndefined:r,isDefined:u,isString:H,isFunction:G,isObject:K,isNumber:P,isElement:Nb,isArray:L,
version:ke,isDate:ea,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:fe,$$minErr:B,$$csp:Ca,reloadWithDebugInfo:ee});Sb=ie(R);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:le});a.provider("$compile",Cc).directive({a:me,input:Dc,textarea:Dc,form:ne,script:oe,select:pe,style:qe,option:re,ngBind:se,ngBindHtml:te,ngBindTemplate:ue,ngClass:ve,ngClassEven:we,ngClassOdd:xe,ngCloak:ye,ngController:ze,ngForm:Ae,ngHide:Be,ngIf:Ce,ngInclude:De,ngInit:Ee,ngNonBindable:Fe,
ngPluralize:Ge,ngRepeat:He,ngShow:Ie,ngStyle:Je,ngSwitch:Ke,ngSwitchWhen:Le,ngSwitchDefault:Me,ngOptions:Ne,ngTransclude:Oe,ngModel:Pe,ngList:Qe,ngChange:Re,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Se,ngModelOptions:Te}).directive({ngInclude:Ue}).directive(sb).directive(Ic);a.provider({$anchorScroll:Ve,$animate:We,$animateCss:Xe,$$animateJs:Ye,$$animateQueue:Ze,$$AnimateRunner:$e,$$animateAsyncRun:af,$browser:bf,$cacheFactory:cf,
$controller:df,$document:ef,$exceptionHandler:ff,$filter:Jc,$$forceReflow:gf,$interpolate:hf,$interval:jf,$http:kf,$httpParamSerializer:lf,$httpParamSerializerJQLike:mf,$httpBackend:nf,$xhrFactory:of,$location:pf,$log:qf,$parse:rf,$rootScope:sf,$q:tf,$$q:uf,$sce:vf,$sceDelegate:wf,$sniffer:xf,$templateCache:yf,$templateRequest:zf,$$testability:Af,$timeout:Bf,$window:Cf,$$rAF:Df,$$jqLite:Ef,$$HashMap:Ff,$$cookieReader:Gf})}])}function eb(a){return a.replace(Hf,function(a,d,c,e){return e?c.toUpperCase():
c}).replace(If,"Moz$1")}function Kc(a){a=a.nodeType;return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Jf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Kf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=bb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function Mc(a,
b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function S(a){if(a instanceof S)return a;var b;H(a)&&(a=T(a),b=!0);if(!(this instanceof S)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new S(a)}if(b){b=U;var d;a=(d=Lf.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Nc(this,a)}function Vb(a){return a.cloneNode(!0)}function tb(a,b){b||ub(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)ub(d[c])}function Oc(a,b,d,c){if(u(c))throw Ub("offargs");
var e=(c=vb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&ab(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};p(b.split(" "),function(a){g(a);wb[a]&&g(wb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function ub(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Oc(a)),delete fb[d],a.ng339=x))}function vb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Mf,
d=fb[d]={events:{},data:{},handle:x});return d}function Wb(a,b,d){if(Kc(a)){var c=u(d),e=!c&&b&&!K(b),f=!b;a=(a=vb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];N(a,b)}}}function xb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function yb(a,b){b&&a.setAttribute&&p(b.split(" "),function(b){a.setAttribute("class",T((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(b)+" "," ")))})}function zb(a,
b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(b.split(" "),function(a){a=T(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",T(d))}}function Nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Pc(a,b){return Ab(a,"$"+(b||"ngController")+"Controller")}function Ab(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=
L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Qc(a){for(tb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||tb(a);var d=a.parentNode;d&&d.removeChild(a)}function Nf(a,b){b=b||R;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function Rc(a,b){var d=Bb[b.toLowerCase()];return d&&Sc[oa(a)]&&d}function Of(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};
var f=b[d||c.type],g=f?f.length:0;if(g){if(r(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Pf;1<g&&(f=fa(f));for(var m=0;m<g;m++)c.isImmediatePropagationStopped()||k(a,c,f[m])}};d.elem=a;return d}function Pf(a,b,d){d.call(a,b)}function Qf(a,b,
d){var c=b.relatedTarget;c&&(c===a||Rf.call(a,c))||d.call(a,b)}function Ef(){this.$get=function(){return N(S,{hasClass:function(a,b){a.attr&&(a=a[0]);return xb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)}})}}function Da(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Xd)():d+":"+a}function Ta(a,b){if(b){var d=0;this.nextUid=
function(){return++d}}p(a,this.put,this)}function Sf(a){return(a=a.toString().replace(Tc,"").match(Uc))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(K(b))p(b,pc(a));else return a(b,c)}}function c(a,b){Sa(a,"service");if(G(b)||L(b))b=J.instantiate(b);if(!b.$get)throw Ea("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(r(c))throw Ea("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==
d?e(a,b):b})}function g(a){pb(r(a)||L(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=J.get(e[0]);f[e[1]].apply(f,e[2])}}if(!l.get(a)){l.put(a,!0);try{H(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(J.invoke(a)):L(a)?b.push(J.invoke(a)):Ra(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+
e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ea("cdep",b+" <- "+m.join(" <- "));return a[b]}try{return m.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{m.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=db.$$annotate(a,b,g),m,l,q;l=0;for(m=h.length;l<m;l++){q=h[l];if("string"!==typeof q)throw Ea("itkn",q);k.push(f&&f.hasOwnProperty(q)?f[q]:d(q,g))}L(a)&&
(a=a[m]);return a.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((L(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return K(a)||G(a)?a:d},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},m=[],l=new Ta([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ma(b),!1)}),constant:d(function(a,
b){Sa(a,"constant");n[a]=b;z[a]=b}),decorator:function(a,b){var c=J.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},J=n.$injector=h(n,function(a,b){da.isString(b)&&m.push(b);throw Ea("unpr",m.join(" <- "));}),z={},t=z.$injector=h(z,function(a,b){var c=J.get(a+"Provider",b);return t.invoke(c.$get,c,x,a)});p(g(a),function(a){a&&t.invoke(a)});return t}function Ve(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location",
"$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===oa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):P(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=H(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):
f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Nf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Tf(a){H(a)&&(a=a.split(" "));var b=Z();p(a,function(a){a.length&&(b[a]=!0)});return b}function Fa(a){return K(a)?a:{}}function Uf(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(t--,0===t)for(;A.length;)try{A.pop()()}catch(b){d.error(b)}}}
function f(){F=null;g();h()}function g(){a:{try{q=l.state;break a}catch(a){}q=void 0}q=r(q)?null:q;la(q,C)&&(q=C);C=q}function h(){if(w!==k.url()||y!==q)w=k.url(),y=q,p(Q,function(a){a(k.url(),q)})}var k=this,m=a.location,l=a.history,n=a.setTimeout,J=a.clearTimeout,z={};k.isMock=!1;var t=0,A=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){t++};k.notifyWhenNoOutstandingRequests=function(a){0===t?a():A.push(a)};var q,y,w=m.href,V=b.find("base"),F=null;g();y=q;k.url=function(b,
d,e){r(e)&&(e=null);m!==a.location&&(m=a.location);l!==a.history&&(l=a.history);if(b){var f=y===e;if(w===b&&(!c.history||f))return k;var h=w&&Ga(w)===Ga(b);w=b;y=e;if(!c.history||h&&f){if(!h||F)F=b;d?m.replace(b):h?(d=m,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):m.href=b;m.href!==b&&(F=b)}else l[d?"replaceState":"pushState"](e,"",b),g(),y=q;return k}return F||m.href.replace(/%27/g,"'")};k.state=function(){return q};var Q=[],E=!1,C=null;k.onUrlChange=function(b){if(!E){if(c.history)D(a).on("popstate",
f);D(a).on("hashchange",f);E=!0}Q.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=V.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;t++;c=n(function(){delete z[c];e(a)},b||0);z[c]=!0;return c};k.defer.cancel=function(a){return z[a]?(delete z[a],J(a),e(v),!0):!1}}function bf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Uf(a,c,b,
d)}]}function cf(){this.$get=function(){function a(a,c){function e(a){a!=n&&(J?J==a&&(J=a.n):J=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw B("$cacheFactory")("iid",a);var g=0,h=N({},c,{id:a}),k=Z(),m=c&&c.capacity||Number.MAX_VALUE,l=Z(),n=null,J=null;return b[a]={put:function(a,b){if(!r(b)){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}a in k||g++;k[a]=b;g>m&&this.remove(J.key);return b}},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==J&&(J=b.n);f(b.n,b.p);delete l[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=Z();g=0;l=Z();n=J=null},destroy:function(){l=h=k=null;delete b[a]},info:function(){return N({},h,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function yf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e=Z();p(a,function(a,f){if(a in l)e[f]=l[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(l[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=
/(([\w\-]+)(?:\:([^;]+))?;?)/,h=$d("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,l=Z();this.directive=function z(b,d){Sa(b,"directive");H(b)?(c(b),pb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(e[b],function(e,f){try{var g=a.invoke(e);G(g)?g={compile:ma(g)}:!g.compile&&g.link&&(g.compile=ma(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||b;g.require=g.require||
g.controller&&g.name;g.restrict=g.restrict||"EA";g.$$moduleName=e.$$moduleName;d.push(g)}catch(h){c(h)}});return d}])),e[b].push(d)):p(b,pc(z));return this};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return u(a)?(n=a,this):n};this.$get=["$injector",
"$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,l,y,w,V,F,Q,E){function C(a,b){try{a.addClass(b)}catch(c){}}function I(a,b,c,d,e){a instanceof D||(a=D(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Oa&&k.nodeValue.match(f)&&Mc(k,a[g]=U.createElement("span"))}var m=W(a,b,a,c,d,e);I.$$addScopeClass(a);var l=null;return function(b,c,d){pb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());
d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);l||(l=(d=d&&d[0])?"foreignobject"!==oa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==l?D(Yb(l,D("<div>").append(a).html())):c?Qa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);I.$$addScopeInfo(d,b);c&&c(d,b);m&&m(b,d,d,f);return d}}function W(a,b,c,d,e,f){function g(a,c,d,e){var f,k,m,l,n,E,A;if(q)for(A=Array(c.length),
l=0;l<h.length;l+=3)f=h[l],A[f]=c[f];else A=c;l=0;for(n=h.length;l<n;)k=A[h[l++]],c=h[l++],f=h[l++],c?(c.scope?(m=a.$new(),I.$$addScopeInfo(D(k),m)):m=a,E=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,m,k,d,E)):f&&f(a,k.childNodes,x,e)}for(var h=[],k,m,l,n,q,E=0;E<a.length;E++){k=new da;m=ia(a[E],[],k,0===E?d:x,e);(f=m.length?$(m,a[E],k,b,c,null,[],[],f):null)&&f.scope&&I.$$addScopeClass(k.$$element);k=f&&f.terminal||!(l=a[E].childNodes)||!l.length?
null:W(l,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(E,f,k),n=!0,q=q||f;f=null}return n?g:null}function O(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ia(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:k=oa(a);qa(b,va(k),"E",d,e);for(var m,l,n,q,E=a.attributes,A=0,w=E&&E.length;A<w;A++){var I=!1,y=!1;m=E[A];l=m.name;n=T(m.value);
m=va(l);if(q=ja.test(m))l=l.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(m=m.match(ka))&&B(m[1])&&(I=l,y=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));m=va(l.toLowerCase());h[m]=l;if(q||!c.hasOwnProperty(m))c[m]=n,Rc(a,m)&&(c[m]=!0);X(a,b,n,m,q);qa(b,m,"A",d,e,I,y)}"input"===k&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");a=a.className;K(a)&&(a=a.animVal);if(H(a)&&""!==a)for(;k=g.exec(a);)m=va(k[2]),qa(b,m,"C",d,e)&&(c[m]=T(k[3])),
a=a.substr(k.index+k[0].length);break;case Oa:if(11===Ha)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Oa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);P(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))m=va(k[1]),qa(b,m,"M",d,e)&&(c[m]=T(k[2]))}catch(O){}}b.sort(wa);return b}function Ua(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);
a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function s(a,b,c){return function(d,e,f,g,h){e=Ua(e[0],b,c);return a(d,e,f,g,h)}}function $(a,b,d,e,f,g,h,m,l){function n(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=r.require;a.directiveName=u;if(C===r||r.$$isolateScope)a=ba(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=r.require;b.directiveName=u;if(C===r||r.$$isolateScope)b=ba(b,{isolateScope:!0});m.push(b)}}function q(a,b,c,d){var e;if(H(b)){var f=b.match(k);b=b.substring(f[0].length);
var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=q(a,b[g],c,d);return e||null}function E(a,b,c,d,e,f){var g=Z(),h;for(h in d){var k=d[h],m={$scope:k===C||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},l=k.controller;"@"==l&&(l=b[k.name]);m=w(l,m,!0,k.controllerAs);g[k.name]=m;a.data("$"+k.name+"Controller",m.instance)}return g}
function y(a,c,e,f,g){function k(a,b,c){var d;$a(a)||(c=b,b=a,a=x);Q&&(d=w);c||(c=Q?F.parent():F);return g(a,b,d,c,Ua)}var l,n,A,w,O,F,ia;b===e?(f=d,F=d.$$element):(F=D(e),f=new da(F,d));A=c;C?n=c.$new(!0):t&&(A=c.$parent);g&&(O=k,O.$$boundTransclude=g);z&&(w=E(F,f,O,z,n,c));C&&(I.$$addScopeInfo(F,n,!0,!(W&&(W===C||W===C.$$originalDirective))),I.$$addScopeClass(F,!0),n.$$isolateBindings=C.$$isolateBindings,(ia=aa(c,f,n,n.$$isolateBindings,C))&&n.$on("$destroy",ia));for(var Vc in w){ia=z[Vc];var V=
w[Vc],p=ia.$$bindings.bindToController;V.identifier&&p&&(l=aa(A,f,V.instance,p,ia));var r=V();r!==V.instance&&(V.instance=r,F.data("$"+ia.name+"Controller",r),l&&l(),l=aa(A,f,V.instance,p,ia))}B=0;for(M=h.length;B<M;B++)l=h[B],ca(l,l.isolateScope?n:c,F,f,l.require&&q(l.directiveName,l.require,F,w),O);var Ua=c;C&&(C.template||null===C.templateUrl)&&(Ua=n);a&&a(Ua,e.childNodes,x,g);for(B=m.length-1;0<=B;B--)l=m[B],ca(l,l.isolateScope?n:c,F,f,l.require&&q(l.directiveName,l.require,F,w),O)}l=l||{};for(var O=
-Number.MAX_VALUE,t=l.newScopeDirective,z=l.controllerDirectives,C=l.newIsolateScopeDirective,W=l.templateDirective,F=l.nonTlbTranscludeDirective,V=!1,p=!1,Q=l.hasElementTranscludeDirective,$=d.$$element=D(b),r,u,v,qa=e,wa,B=0,M=a.length;B<M;B++){r=a[B];var N=r.$$start,P=r.$$end;N&&($=Ua(b,N,P));v=x;if(O>r.priority)break;if(v=r.scope)r.templateUrl||(K(v)?(Va("new/isolated scope",C||t,r,$),C=r):Va("new/isolated scope",C,r,$)),t=t||r;u=r.name;!r.templateUrl&&r.controller&&(v=r.controller,z=z||Z(),Va("'"+
u+"' controller",z[u],r,$),z[u]=r);if(v=r.transclude)V=!0,r.$$tlb||(Va("transclusion",F,r,$),F=r),"element"==v?(Q=!0,O=r.priority,v=$,$=d.$$element=D(U.createComment(" "+u+": "+d[u]+" ")),b=$[0],Y(f,ta.call(v,0),b),qa=I(v,e,O,g&&g.name,{nonTlbTranscludeDirective:F})):(v=D(Vb(b)).contents(),$.empty(),qa=I(v,e,x,x,{needsNewScope:r.$$isolateScope||r.$$newScope}));if(r.template)if(p=!0,Va("template",W,r,$),W=r,v=G(r.template)?r.template($,d):r.template,v=ha(v),r.replace){g=r;v=Tb.test(v)?Xc(Yb(r.templateNamespace,
T(v))):[];b=v[0];if(1!=v.length||1!==b.nodeType)throw ga("tplrt",u,"");Y(f,$,b);v={$attr:{}};var S=ia(b,[],v),Vf=a.splice(B+1,a.length-(B+1));(C||t)&&Yc(S,C,t);a=a.concat(S).concat(Vf);R(d,v);M=a.length}else $.html(v);if(r.templateUrl)p=!0,Va("template",W,r,$),W=r,r.replace&&(g=r),y=Wf(a.splice(B,a.length-B),$,d,f,V&&qa,h,m,{controllerDirectives:z,newScopeDirective:t!==r&&t,newIsolateScopeDirective:C,templateDirective:W,nonTlbTranscludeDirective:F}),M=a.length;else if(r.compile)try{wa=r.compile($,
d,qa),G(wa)?n(null,wa,N,P):wa&&n(wa.pre,wa.post,N,P)}catch(X){c(X,ua($))}r.terminal&&(y.terminal=!0,O=Math.max(O,r.priority))}y.scope=t&&!0===t.scope;y.transcludeOnThisElement=V;y.templateOnThisElement=p;y.transclude=qa;l.hasElementTranscludeDirective=Q;return y}function Yc(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function qa(b,f,g,h,k,m,l){if(f===k)return null;k=null;if(e.hasOwnProperty(f)){var n;f=a.get(f+"Directive");for(var q=0,E=f.length;q<E;q++)try{if(n=
f[q],(r(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){m&&(n=Ob(n,{$$start:m,$$end:l}));if(!n.$$bindings){var w=n,I=n,y=n.name,O={isolateScope:null,bindToController:null};K(I.scope)&&(!0===I.bindToController?(O.bindToController=d(I.scope,y,!0),O.isolateScope={}):O.isolateScope=d(I.scope,y,!1));K(I.bindToController)&&(O.bindToController=d(I.bindToController,y,!0));if(K(O.bindToController)){var t=I.controller,C=I.controllerAs;if(!t)throw ga("noctrl",y);var F;a:{var I=t,W=C;if(W&&H(W))F=W;else{if(H(I)){var ia=
Zc.exec(I);if(ia){F=ia[3];break a}}F=void 0}}if(!F)throw ga("noident",y);}var V=w.$$bindings=O;K(V.isolateScope)&&(n.$$isolateBindings=V.isolateScope)}b.push(n);k=n}}catch(p){c(p)}}return k}function B(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;p(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,
f){"class"==f?(C(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Wf(a,b,c,d,e,f,g,h){var k=[],m,n,E=b[0],A=a.shift(),w=Ob(A,{templateUrl:null,transclude:null,replace:null,$$originalDirective:A}),I=G(A.templateUrl)?A.templateUrl(b,c):A.templateUrl,y=A.templateNamespace;b.empty();l(I).then(function(l){var q,t;l=ha(l);if(A.replace){l=Tb.test(l)?
Xc(Yb(y,T(l))):[];q=l[0];if(1!=l.length||1!==q.nodeType)throw ga("tplrt",A.name,I);l={$attr:{}};Y(d,b,q);var z=ia(q,[],l);K(A.scope)&&Yc(z,!0);a=z.concat(a);R(c,l)}else q=E,b.html(l);a.unshift(w);m=$(a,q,c,e,b,A,f,g,h);p(d,function(a,c){a==q&&(d[c]=b[0])});for(n=W(b[0].childNodes,e);k.length;){l=k.shift();t=k.shift();var F=k.shift(),V=k.shift(),z=b[0];if(!l.$$destroyed){if(t!==E){var Q=t.className;h.hasElementTranscludeDirective&&A.replace||(z=Vb(q));Y(F,D(t),z);C(D(z),Q)}t=m.transcludeOnThisElement?
O(l,m.transclude,V):V;m(n,l,z,d,t)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(m.transcludeOnThisElement&&(a=O(b,m.transclude,e)),m(n,b,c,d,a)))}}function wa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Va(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function P(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&I.$$addBindingClass(a);return function(a,c){var e=c.parent();b||I.$$addBindingClass(e);I.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function S(a,b){if("srcdoc"==b)return F.HTML;var c=oa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return F.RESOURCE_URL}function X(a,c,d,e,f){var g=S(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===oa(a))throw ga("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=Z());if(m.test(e))throw ga("nodomevents");var l=h[e];l!==d&&(k=l&&b(l,!0,g,f),d=l);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,
a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);D.hasData(d)&&(D.data(c,D.data(d)),pa?(Rb=!0,pa.cleanData([d])):delete D.cache[d[D.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ba(a,
b){return N(function(){return a.apply(null,arguments)},a,b)}function ca(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function aa(a,c,d,e,f){var g=[];p(e,function(e,h){var k=e.attrName,m=e.optional,l,n,q,A;switch(e.mode){case "@":m||sa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){H(a)&&(d[h]=a)});c.$$observers[k].$$scope=a;l=c[k];H(l)?d[h]=b(l)(a):Ma(l)&&(d[h]=l);break;case "=":if(!sa.call(c,k)){if(m)break;c[k]=void 0}if(m&&!c[k])break;n=y(c[k]);A=n.literal?la:function(a,b){return a===
b||a!==a&&b!==b};q=n.assign||function(){l=d[h]=n(a);throw ga("nonassign",c[k],k,f.name);};l=d[h]=n(a);m=function(b){A(b,d[h])||(A(b,l)?q(a,b=d[h]):d[h]=b);return l=b};m.$stateful=!0;m=e.collection?a.$watchCollection(c[k],m):a.$watch(y(c[k],m),null,n.literal);g.push(m);break;case "&":n=c.hasOwnProperty(k)?y(c[k]):v;if(n===v&&m)break;d[h]=function(b){return n(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var da=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<
e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};da.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&Q.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&Q.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&Q.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&Q.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=ad[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=
e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=oa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),m=0;m<k;m++)var l=2*m,f=f+E(T(g[l]),!0),f=f+(" "+T(g[l+1]));g=T(g[2*m]).split(/\s/);f+=E(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||r(b)?this.$$element.removeAttr(e):this.$$element.attr(e,
b));(a=this.$$observers)&&p(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=Z()),e=d[a]||(d[a]=[]);e.push(b);V.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||r(c[a])||b(c[a])});return function(){ab(e,b)}}};var ea=b.startSymbol(),fa=b.endSymbol(),ha="{{"==ea&&"}}"==fa?Za:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,fa)},ja=/^ngAttr[A-Z]/,ka=/^(.+)Start$/;I.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];L(b)?
c=c.concat(b):c.push(b);a.data("$binding",c)}:v;I.$$addBindingClass=n?function(a){C(a,"ng-binding")}:v;I.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;I.$$addScopeClass=n?function(a,b){C(a,b?"ng-isolate-scope":"ng-scope")}:v;return I}]}function va(a){return eb(a.replace(Wc,""))}function $c(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+
g}return d}function Xc(a){a=D(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Xf.call(a,b,1);return a}function df(){var a={},b=!1;this.register=function(b,c){Sa(b,"controller");K(b)?N(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!K(a.$scope))throw B("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var m,l,n;h=!0===h;k&&H(k)&&(n=k);if(H(f)){k=f.match(Zc);if(!k)throw Yf("ctrlfmt",f);l=k[1];
n=n||k[3];f=a.hasOwnProperty(l)?a[l]:Bc(g.$scope,l,!0)||(b?Bc(c,l,!0):x);Ra(f,l,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,m=Object.create(h||null),n&&e(g,n,m,l||f.name),N(function(){var a=d.invoke(f,m,g,l);a!==m&&(K(a)||G(a))&&(m=a,n&&e(g,n,m,l||f.name));return m},{instance:m,identifier:n});m=d.instantiate(f,g,l);n&&e(g,n,m,l||f.name);return m}}]}function ef(){this.$get=["$window",function(a){return D(a.document)}]}function ff(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,
arguments)}}]}function Zb(a){return K(a)?ea(a)?a.toISOString():cb(a):a}function lf(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||r(a)||(L(a)?p(a,function(a,d){b.push(ha(c)+"="+ha(Zb(a)))}):b.push(ha(c)+"="+ha(Zb(a))))});return b.join("&")}}}function mf(){this.$get=function(){return function(a){function b(a,e,f){null===a||r(a)||(L(a)?p(a,function(a,c){b(a,e+"["+(K(a)?c:"")+"]")}):K(a)&&!ea(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ha(e)+
"="+ha(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(H(a)){var d=a.replace(Zf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(bd))||(c=(c=d.match($f))&&ag[c[0]].test(d));c&&(a=uc(d))}}return a}function cd(a){var b=Z(),d;H(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=M(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):K(a)&&p(a,function(a,d){var f=M(d),g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function dd(a){var b;
return function(d){b||(b=cd(a));return d?(d=b[M(d)],void 0===d&&(d=null),d):b}}function ed(a,b,d,c){if(G(c))return c(a,b,d);p(c,function(c){a=c(a,b,d)});return a}function kf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return K(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ac),put:fa(ac),patch:fa(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return u(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,m){function l(b){function c(a){var b=N({},a);b.data=ed(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};p(a,function(a,
e){G(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!da.isObject(b))throw B("$http")("badreq",b);if(!H(b.url))throw B("$http")("badreq",b.url);var f=N({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=N({},b.headers),f,g,h,c=N({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,fa(b))}(b);f.method=rb(f.method);f.paramSerializer=
H(f.paramSerializer)?m.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=ed(b.data,dd(d),x,b.transformRequest);r(e)&&p(d,function(a,b){"content-type"===M(b)&&delete d[b]});r(b.withCredentials)&&!r(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,c)},x],h=k.when(f);for(p(t,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var l=
g.shift(),h=h.then(b,l)}d?(h.success=function(a){Ra(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Ra(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function n(c,d){function g(a,c,d,e){function f(){m(c,a,d,e)}C&&(200<=a&&300>a?C.put(O,[a,c,cd(d),e]):C.remove(O));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?p.resolve:p.reject)({data:a,
status:b,headers:dd(d),config:c,statusText:e})}function n(a){m(a.data,a.status,fa(a.headers()),a.statusText)}function t(){var a=l.pendingRequests.indexOf(c);-1!==a&&l.pendingRequests.splice(a,1)}var p=k.defer(),E=p.promise,C,I,W=c.headers,O=J(c.url,c.paramSerializer(c.params));l.pendingRequests.push(c);E.then(t,t);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(C=K(c.cache)?c.cache:K(a.cache)?a.cache:z);C&&(I=C.get(O),u(I)?I&&G(I.then)?I.then(n,n):L(I)?m(I[1],I[0],fa(I[2]),
I[3]):m(I,200,{},"OK"):C.put(O,E));r(I)&&((I=gd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:x)&&(W[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,O,d,g,W,c.timeout,c.withCredentials,c.responseType));return E}function J(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var z=g("$http");a.paramSerializer=H(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var t=[];p(c,function(a){t.unshift(H(a)?m.get(a):m.invoke(a))});l.pendingRequests=[];(function(a){p(arguments,function(a){l[a]=
function(b,c){return l(N({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){l[a]=function(b,c,d){return l(N({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=a;return l}]}function of(){this.$get=function(){return function(){return new R.XMLHttpRequest}}}function nf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return bg(a,c,a.defer,b.angular.callbacks,d[0])}]}function bg(a,b,d,c,e){function f(a,
b,d){var f=e.createElement("script"),l=null;f.type="text/javascript";f.src=a;f.async=!0;l=function(a){f.removeEventListener("load",l,!1);f.removeEventListener("error",l,!1);e.body.removeChild(f);f=null;var g=-1,z="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),z=a.type,g="error"===a.type?404:200);d&&d(g,z)};f.addEventListener("load",l,!1);f.addEventListener("error",l,!1);e.body.appendChild(f);return l}return function(e,h,k,m,l,n,J,z){function t(){y&&y();w&&w.abort()}function A(b,c,
e,f,g){u(F)&&d.cancel(F);y=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(v)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var q="_"+(c.counter++).toString(36);c[q]=function(a){c[q].data=a;c[q].called=!0};var y=f(h.replace("JSON_CALLBACK","angular.callbacks."+q),q,function(a,b){A(m,a,c[q].data,"",b);c[q]=v})}else{var w=b(e,h);w.open(e,h,!0);p(l,function(a,b){u(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=
1223===w.status?204:w.status;0===c&&(c=b?200:"file"==xa(h).protocol?404:0);A(m,c,b,w.getAllResponseHeaders(),a)};e=function(){A(m,-1,null,null,"")};w.onerror=e;w.onabort=e;J&&(w.withCredentials=!0);if(z)try{w.responseType=z}catch(V){if("json"!==z)throw V;}w.send(r(k)?null:k)}if(0<n)var F=d(t,n);else n&&G(n.then)&&n.then(t)}}function hf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",
function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(l,a).replace(n,b)}function h(f,h,l,n){function q(a){try{var b=a;a=l?e.getTrusted(l,b):e.valueOf(b);var d;if(n&&!u(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ia.interr(f,g))}}n=!!n;for(var y,w,p=0,F=[],Q=[],E=f.length,C=[],I=[];p<E;)if(-1!=(y=f.indexOf(a,p))&&-1!=(w=f.indexOf(b,y+k)))p!==y&&C.push(g(f.substring(p,y))),p=f.substring(y+
k,w),F.push(p),Q.push(d(p,q)),p=w+m,I.push(C.length),C.push("");else{p!==E&&C.push(g(f.substring(p)));break}l&&1<C.length&&Ia.throwNoconcat(f);if(!h||F.length){var W=function(a){for(var b=0,c=F.length;b<c;b++){if(n&&r(a[b]))return;C[I[b]]=a[b]}return C.join("")};return N(function(a){var b=0,d=F.length,e=Array(d);try{for(;b<d;b++)e[b]=Q[b](a);return W(e)}catch(g){c(Ia.interr(f,g))}},{exp:f,expressions:F,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Q,function(d,e){var f=W(d);G(b)&&b.call(this,
f,d!==e?c:f,a);c=f})}})}}var k=a.length,m=b.length,l=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function jf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,m){var l=4<arguments.length,n=l?ta.call(arguments,4):[],J=b.setInterval,z=b.clearInterval,t=0,A=u(m)&&!m,q=(A?c:d).defer(),y=q.promise;k=u(k)?k:0;y.then(null,null,l?function(){e.apply(null,n)}:e);y.$$intervalId=
J(function(){q.notify(t++);0<k&&t>=k&&(q.resolve(t),z(y.$$intervalId),delete f[y.$$intervalId]);A||a.$apply()},h);f[y.$$intervalId]=q;return y}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=nb(a[b]);return a.join("/")}function hd(a,b){var d=xa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ca(d.port)||cg[d.protocol]||
null}function id(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=xa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ra(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Ga(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function hb(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";
hd(a,this);this.$$parse=function(a){var d=ra(b,a);if(!H(d))throw Cb("ipthprfx",a,b);id(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=ra(a,c))?(g=f,g=u(f=ra(d,f))?b+(ra("/",f)||f):a+g):u(f=ra(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);
return!!g}}function dc(a,b,d){hd(a,this);this.$$parse=function(c){var e=ra(a,c)||ra(b,c),f;r(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",r(e)&&(a=c,this.replace())):(f=ra(d,e),r(f)&&(f=e));id(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?
d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ga(a)==Ga(b)?(this.$$parse(b),!0):!1}}function jd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ga(c)?f=c:(g=ra(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Db(a){return function(){return this[a]}}
function kd(a,b){return function(d){if(r(d))return this[a];this[a]=b(d);this.$$compose();return this}}function pf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){return Ma(a)?(b.enabled=a,this):K(a)?(Ma(a.enabled)&&(b.enabled=a.enabled),Ma(a.requireBase)&&(b.requireBase=a.requireBase),Ma(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",
function(d,c,e,f,g){function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,l;l=c.baseHref();var n=c.url(),J;if(b.enabled){if(!l&&b.requireBase)throw Cb("nobase");J=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(l||"/");l=e.history?cc:jd}else J=Ga(n),l=dc;var z=J.substr(0,Ga(J).lastIndexOf("/")+1);m=new l(J,z,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=
c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=D(a.target);"a"!==oa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");K(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=xa(h.animVal).href);t.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!m.$$parseLinkUrl(h,k)||(a.preventDefault(),m.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});hb(m.absUrl())!=hb(n)&&c.url(m.absUrl(),!0);var A=!0;c.onUrlChange(function(a,b){r(ra(z,a))?g.location.href=a:(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;a=hb(a);m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(A=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=hb(c.url()),b=hb(m.absUrl()),f=c.state(),g=m.$$replace,l=a!==b||m.$$html5&&e.history&&f!==m.$$state;if(A||
l)A=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(l&&h(b,g,f===m.$$state?null:m.$$state),k(a,f)))});m.$$replace=!1});return m}]}function qf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];p(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Wa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw aa("isecfld",b);return a}function ld(a,b){a+="";if(!H(a))throw aa("iseccst",b);return a}function ya(a,b){if(a){if(a.constructor===a)throw aa("isecfn",b);if(a.window===a)throw aa("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw aa("isecdom",b);if(a===Object)throw aa("isecobj",b);}return a}function md(a,b){if(a){if(a.constructor===a)throw aa("isecfn",b);if(a===dg||a===eg||a===fg)throw aa("isecff",b);}}function Eb(a,b){if(a&&(a===(0).constructor||a===
(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw aa("isecaf",b);}function gg(a,b){return"undefined"!==typeof a?a:b}function nd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function X(a,b){var d,c;switch(a.type){case s.Program:d=!0;p(a.body,function(a){X(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:X(a.argument,b);a.constant=a.argument.constant;
a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:X(a.test,b);X(a.alternate,b);X(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:X(a.object,b);a.computed&&X(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];p(a.arguments,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];p(a.elements,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];p(a.properties,function(a){X(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function od(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:x}}
function pd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function qd(a){if(1===a.body.length&&pd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function sd(a,b){this.astBuilder=a;this.$filter=b}function td(a,
b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return G(a.valueOf)?a.valueOf():hg.call(a)}function rf(){var a=Z(),b=Z();this.$get=["$filter",function(d){function c(c,f,n){var w,p,F;n=n||t;switch(typeof c){case "string":F=c=c.trim();var r=n?b:a;w=r[F];if(!w){":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2));w=n?z:J;var E=new fc(w);w=(new gc(E,d,w)).parse(c);w.constant?w.$$watchDelegate=m:p?w.$$watchDelegate=w.literal?k:h:w.inputs&&(w.$$watchDelegate=
g);n&&(w=e(w));r[F]=w}return l(w,f);case "function":return l(c,f);default:return l(v,f)}}function e(a){function b(c,d,e,f){var g=t;t=!0;try{return a(c,d,e,f)}finally{t=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=e(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=e(a.inputs[c]);b.inputs=a.inputs;return b}function f(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==
b}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k)||(h=d(a,x,x,[b]),k=b&&ec(b));return h},b,c,e)}for(var l=[],m=[],n=0,J=g.length;n<J;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c])))m[c]=k,l[c]=k&&ec(k)}b&&(h=d(a,x,x,m));return h},b,c,e)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);u(a)&&
d.$$postDigest(function(){u(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;p(a,function(a){u(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,
e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return u(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==g?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=g,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var n=Ca().noUnsafeEval,J={csp:n,expensiveChecks:!1},z={csp:n,expensiveChecks:!0},t=!1;c.$$runningExpensiveChecks=function(){return t};return c}]}function tf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return ud(function(b){a.$evalAsync(b)},
b)}]}function uf(){this.$get=["$browser","$exceptionHandler",function(a,b){return ud(function(b){a.defer(b)},b)}]}function ud(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=x;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{G(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=B("$q",TypeError);N(c.prototype,{then:function(a,b,c){if(r(a)&&r(b)&&r(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return m(b,!0,a)},function(b){return m(b,!1,a)},b)}});N(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(K(a)||G(a))c=a&&a.then;G(c)?(this.promise.$$state.status=-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),
b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(G(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},m=function(a,b,c){var d=null;try{G(c)&&
(d=c())}catch(e){return k(e,!1)}return d&&G(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},l=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},n=function z(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof z))return new z(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=l;n.resolve=l;n.all=function(a){var b=
new g,c=0,d=L(a)?[]:{};p(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function Df(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function sf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=B("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function m(a){a.currentScope.$$destroyed=
!0}function l(a){9===Ha&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function n(){this.$id=++mb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function J(a){if(w.$$phase)throw d("inprog",
w.$$phase);w.$$phase=a}function z(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function A(){}function q(){for(;Q.length;)try{Q.shift()()}catch(a){g(a)}e=null}function y(){null===e&&(e=k.defer(function(){w.$apply(q)}))}n.prototype={constructor:n,$new:function(b,c){var d;c=c||this;b?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",m);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,l={fn:b,last:A,get:f,exp:e||a,eq:!!d};c=null;G(b)||(l.fn=v);k||(k=g.$$watchers=[]);k.unshift(l);z(this,1);return function(){0<=ab(k,l)&&z(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=
!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});p(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!r(e)){if(K(e))if(Aa(e))for(f!==
n&&(f=n,p=f.length=0,l++),a=e.length,p!==a&&(l++,f.length=p=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},p=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(p++,f[b]=g,l++));if(p>a)for(b in l++,f)sa.call(e,b)||(p--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=h(a,c),n=[],q={},J=!0,p=0;return this.$watch(m,function(){J?(J=!1,b(e,e,d)):b(e,g,d);if(k)if(K(e))if(Aa(e)){g=
Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)sa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,l,m,n,p,z,y=b,t,r=[],Q,x;J("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),q());c=null;do{z=!1;for(t=this;s.length;){try{x=s.shift(),x.scope.$eval(x.expression,x.locals)}catch(u){g(u)}c=null}a:do{if(n=t.$$watchers)for(p=n.length;p--;)try{if(a=n[p])if(m=a.get,(f=m(t))!==(h=a.last)&&!(a.eq?la(f,h):"number"===typeof f&&"number"===typeof h&&
isNaN(f)&&isNaN(h)))z=!0,c=a,a.last=a.eq?Na(f,null):f,l=a.fn,l(f,h===A?f:h,t),5>y&&(Q=4-y,r[Q]||(r[Q]=[]),r[Q].push({msg:G(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){z=!1;break a}}catch(v){g(v)}if(!(n=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(n=t.$$nextSibling);)t=t.$parent}while(t=n);if((z||s.length)&&!y--)throw w.$$phase=null,d("infdig",b,r);}while(z||s.length);for(w.$$phase=null;F.length;)try{F.shift()()}catch(D){g(D)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();z(this,-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){w.$$phase||s.length||k.defer(function(){s.length&&w.$digest()});s.push({scope:this,expression:h(a),locals:b})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{J("$apply");try{return this.$eval(a)}finally{w.$$phase=null}}catch(b){g(b)}finally{try{w.$digest()}catch(c){throw g(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&Q.push(b);a=h(a);y()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},k=bb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){g(n)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=bb([e],arguments,1),h,k;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new n,s=w.$$asyncQueue=[],F=w.$$postDigestQueue=[],Q=w.$$applyAsyncQueue=[];return w}]}function le(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=xa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ig(a){if("self"===a)return a;if(H(a)){if(-1<a.indexOf("***"))throw za("iwcard",a);a=vd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(La(a))return new RegExp("^"+a.source+"$");throw za("imatcher");}function wd(a){var b=[];u(a)&&p(a,function(a){b.push(ig(a))});
return b}function wf(){this.SCE_CONTEXTS=ka;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=wd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=wd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw za("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw za("icontext",a,b);if(null===b||r(b)||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||r(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(d===ka.RESOURCE_URL){var g=xa(e.toString()),n,p,z=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){z=!0;break}if(z)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){z=!1;break}if(z)return e;throw za("insecurl",e.toString());}if(d===ka.HTML)return f(e);throw za("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function vf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&
8>Ha)throw za("iequirks");var c=fa(ka);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Za);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;p(ka,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+
d)]=function(b){return g(a,b)}});return c}]}function xf(){this.$get=["$window","$document",function(a,b){var d={},c=ca((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,m=!1,l=!1;if(k){for(var n in k)if(m=h.exec(n)){g=m[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||g+"Transition"in k);l=!!("animation"in k||g+"Animation"in
k);!c||m&&l||(m=H(k.webkitTransition),l=H(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(r(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ca(),vendorPrefix:g,transitions:m,animations:l,android:c}}]}function zf(){this.$get=["$templateCache","$http","$q","$sce",function(a,b,d,c){function e(f,g){e.totalPendingRequests++;if(!H(f)||r(a.get(f)))f=c.getTrustedResourceUrl(f);var h=b.defaults&&b.defaults.transformResponse;
L(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ga("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function Af(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=
da.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+vd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Bf(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,m){G(f)||(m=k,k=f,f=v);var l=ta.call(arguments,3),n=u(m)&&!m,p=(n?c:d).defer(),z=p.promise,t;t=b.defer(function(){try{p.resolve(f.apply(null,l))}catch(b){p.reject(b),e(b)}finally{delete g[z.$$timeoutId]}n||a.$apply()},k);z.$$timeoutId=t;g[t]=p;return z}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}
function xa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function gd(a){a=H(a)?xa(a):a;return a.protocol===xd.protocol&&a.host===xd.host}function Cf(){this.$get=ma(R)}function yd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,m;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(m=b(g.substring(0,k)),r(c[m])&&(c[m]=b(g.substring(k+1))));return c}}function Gf(){this.$get=yd}function Jc(a){function b(d,c){if(K(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",zd);b("date",Ad);
b("filter",jg);b("json",kg);b("limitTo",lg);b("lowercase",mg);b("number",Bd);b("orderBy",Cd);b("uppercase",ng)}function jg(){return function(a,b,d){if(!Aa(a)){if(null==a)return a;throw B("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=og(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function og(a,b,d){var c=K(a)&&"$"in a;!0===b?b=la:G(b)||(b=function(a,b){if(r(a))return!1;if(null===
a||null===b)return a===b;if(K(b)||K(a)&&!qc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!K(e)?Ja(e,a.$,b,!1):Ja(e,a,b,d)}}function Ja(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ja(a,b.substring(1),d,c);if(L(a))return a.some(function(a){return Ja(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ja(a[h],b,d,!0))return!0;return e?!1:Ja(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!G(e)&&!r(e)&&
(f="$"===h,!Ja(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function zd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){r(c)&&(c=b.CURRENCY_SYM);r(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Dd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Dd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function pg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Ed))&&(a=a.replace(Ed,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==ic;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==ic;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Fd&&(d=d.splice(0,Fd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function qg(a,b,d,c){var e=a.d,f=e.length-a.i;b=r(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d)e.splice(d);else{a.i=1;e.length=d=b+1;for(var g=0;g<d;g++)e[g]=
0}for(5<=c&&e[d-1]++;f<b;f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Dd(a,b,d,c,e){if(!H(a)&&!P(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=pg(h);qg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Gb(a,b,d){var c="";0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a=ic+a;d&&(a=a.substr(a.length-b));return c+a}function ba(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=rb(b?"SHORT"+
a:a);return c[f][e]}}function Gd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Hd(a){return function(b){var d=Gd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ad(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ca(b[9]+
b[10]),g=ca(b[9]+b[11]));h.call(a,ca(b[1]),ca(b[2])-1,ca(b[3]));f=ca(b[4]||0)-f;g=ca(b[5]||0)-g;h=ca(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,m;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;H(c)&&(c=rg.test(c)?ca(c):b(c));P(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;d;)(m=sg.exec(d))?(h=bb(h,
m,1),d=h.pop()):(h.push(d),d=null);var l=c.getTimezoneOffset();f&&(l=vc(f,l),c=Pb(c,f,!0));p(h,function(b){k=tg[b];g+=k?k(c,a.DATETIME_FORMATS,l):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function kg(){return function(a,b){r(b)&&(b=2);return cb(a,b)}}function lg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):ca(b);if(isNaN(b))return a;P(a)&&(a=a.toString());if(!L(a)&&!H(a))return a;d=!d||isNaN(d)?0:ca(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,
d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Cd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Za;if(G(b))h=b;else if(H(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!Aa(a))return a;L(e)||(e=[e]);0===
e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],
f=b.predicateValues[d],p=0;c.type===f.type?c.value!==f.value&&(p=c.value<f.value?-1:1):p=c.type<f.type?-1:1;if(c=p*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ka(a){G(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Id(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=x;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){p(g,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){p(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Sa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];p(f.$pending,function(b,c){f.$setValidity(c,null,a)});p(f.$error,function(b,c){f.$setValidity(c,null,a)});p(f.$$success,function(b,c){f.$setValidity(c,
null,a)});ab(g,a);a.$$parentForm=Ib};Jd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Xa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Xa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;p(g,function(a){a.$setPristine()})};f.$setUntouched=function(){p(g,
function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function ib(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});b.on("compositionend",function(){h=!1;m()})}var k,m=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||
(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",m);else{var l=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||m(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||l(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",l)}b.on("change",m);if(Kd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;
k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||m(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(ea(d))return d;if(H(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(ug.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),
sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(a,b,d,c){return function(e,f,g,h,k,m,l){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ea(a)?d(a)||x:a}Ld(e,f,g,h);ib(e,f,g,h,k,m);var z=h&&h.$options&&h.$options.timezone,t;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?
(a=d(a,t),z&&(a=Pb(a,z)),a):x});h.$formatters.push(function(a){if(a&&!ea(a))throw kb("datefmt",a);if(n(a))return(t=a)&&z&&(t=Pb(t,z,!0)),l("date")(a,c,z);t=null;return""});if(u(g.min)||g.ngMin){var A;h.$validators.min=function(a){return!n(a)||r(A)||d(a)>=A};g.$observe("min",function(a){A=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||r(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Ld(a,b,d,c){(c.$$hasNativeValidators=K(b[0].validity))&&
c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput&&!c.typeMismatch?x:a})}function Md(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw kb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(p(a,function(a){b=b.concat(e(a))}),b):H(a)?a.split(" "):K(a)?(p(a,function(a,c){a&&
(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=m(a,1);h.$addClass(a)}function m(a,b){var c=g.data("$classCounts")||Z(),d=[];p(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a,b){var e=c(b,a),f=c(a,b),e=m(e,1),f=m(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||f.$index%2===b){var c=e(a||[]);if(!r)k(c);else if(!la(a,r)){var d=e(r);l(d,
c)}}r=L(a)?a.map(function(a){return fa(a)}):fa(a)}var r;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?k(l):(g=m(l,-1),h.$removeClass(g))}})}}}]}function Jd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(lb+a,!0===c);b(Nd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;
f[Nd]=!(f[lb]=e.hasClass(lb));c.$setValidity=function(a,e,f){r(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Od(c.$pending)&&(c.$pending=x));Ma(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Pd,!0),c.$valid=c.$invalid=x,d("",null)):(b(Pd,!1),c.$valid=Od(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?x:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,
e,c)}}function Od(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var vg=/^\/(.+)\/([a-z]*)$/,M=function(a){return H(a)?a.toLowerCase():a},sa=Object.prototype.hasOwnProperty,rb=function(a){return H(a)?a.toUpperCase():a},Ha,D,pa,ta=[].slice,Xf=[].splice,wg=[].push,na=Object.prototype.toString,rc=Object.getPrototypeOf,Ba=B("ng"),da=R.angular||(R.angular={}),Sb,mb=0;Ha=U.documentMode;v.$inject=[];Za.$inject=[];var L=Array.isArray,Zd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
T=function(a){return H(a)?a.trim():a},vd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ca=function(){if(!u(Ca.rules)){var a=U.querySelector("[ng-csp]")||U.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ca.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ca;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ca.rules},
ob=function(){if(u(ob.name_))return ob.name_;var a,b,d=Pa.length,c,e;for(b=0;b<d;++b)if(c=Pa[b],a=U.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return ob.name_=e},be=/:/g,Pa=["ng-","data-ng-","ng:","x-ng-"],ge=/[A-Z]/g,Ac=!1,Rb,Oa=3,ke={full:"1.4.14",major:1,minor:4,dot:14,codeName:"material-distinction"};S.expando="ng339";var fb=S.cache={},Mf=1;S._data=function(a){return this.cache[a[this.expando]]||{}};var Hf=/([\:\-\_]+(.))/g,If=/^moz([A-Z])/,wb={mouseleave:"mouseout",
mouseenter:"mouseover"},Ub=B("jqLite"),Lf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Jf=/<([\w:-]+)/,Kf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;
ja.th=ja.td;var Rf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Qa=S.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===U.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),S(R).on("load",b))},toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+a])},length:0,push:wg,sort:[].sort,splice:[].splice},Bb={};p("multiple selected checked disabled readOnly required open".split(" "),
function(a){Bb[M(a)]=a});var Sc={};p("input select option textarea button form details".split(" "),function(a){Sc[a]=!0});var ad={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};p({data:Wb,removeData:ub,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1}},function(a,b){S[b]=a});p({data:Wb,inheritedData:Ab,scope:function(a){return D.data(a,"$scope")||Ab(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||
D.data(a,"$isolateScopeNoTemplate")},controller:Pc,injector:function(a){return Ab(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:xb,css:function(a,b,d){b=eb(b);if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c)if(c=M(b),Bb[c])if(u(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||v).specified?c:x;else if(u(d))a.setAttribute(b,d);else if(a.getAttribute)return a=
a.getAttribute(b,2),null===a?x:a},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(r(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(r(b)){if(a.multiple&&"select"===oa(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(r(b))return a.innerHTML;tb(a,!0);a.innerHTML=b},empty:Qc},function(a,b){S.prototype[b]=
function(b,c){var e,f,g=this.length;if(a!==Qc&&r(2==a.length&&a!==xb&&a!==Pc?b:c)){if(K(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=r(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});p({removeData:ub,on:function(a,b,d,c){if(u(c))throw Ub("onargs");if(Kc(a)){c=vb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Of(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,
h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],wb[b]?(h(wb[b],Qf),h(b,x,!0)):h(b)}},off:Oc,one:function(a,b,d){a=D(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;tb(a);p(new S(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new S(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new S(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Mc(a,D(b).eq(0).clone()[0])},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new S(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,
b,d){b&&p(b.split(" "),function(b){var e=d;r(e)&&(e=!xb(a,b));(e?zb:yb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=vb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:f,target:a},b.type&&(c=N(c,b)),b=fa(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){S.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)r(f)?(f=a(this[g],b,c,e),u(f)&&(f=D(f))):Nc(f,a(this[g],b,c,e));return u(f)?f:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});Ta.prototype={put:function(a,
b){this[Da(a,this.nextUid)]=b},get:function(a){return this[Da(a,this.nextUid)]},remove:function(a){var b=this[a=Da(a,this.nextUid)];delete this[a];return b}};var Ff=[function(){this.$get=[function(){return Ta}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,xg=/,/,yg=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=B("$injector");db.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw H(d)&&d||(d=a.name||Sf(a)),Ea("strictdi",d);b=a.toString().replace(Tc,
"");b=b.match(Uc);p(b[1].split(xg),function(a){a.replace(yg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Ra(a[b],"fn"),c=a.slice(0,b)):Ra(a,"fn",!0);return c};var Qd=B("$animate"),Ye=function(){this.$get=function(){}},Ze=function(){var a=new Ta,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=H(b)?b.split(" "):L(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=Tf(b.attr("class")),
e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&zb(a,e);f&&yb(a,f)});a.remove(b)}});b.length=0}return{enabled:v,on:v,off:v,pin:v,push:function(g,h,k,m){m&&m();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,m=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),m=e(k,m,!1),h||m)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},We=["$provide",function(a){var b=this;
this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Qd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Qd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;
a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&D(f);g=g&&D(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Fa(h))},move:function(e,f,g,h){f=f&&D(f);g=g&&D(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Fa(h))},leave:function(b,c){return a.push(b,"leave",Fa(c),function(){b.remove()})},
addClass:function(b,c,g){g=Fa(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Fa(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Fa(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Fa(k);k.from=k.from?N(k.from,c):c;k.to=k.to?N(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],af=
function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},$e=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===
a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:v,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Xe=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=Na(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=B("$compile");Cc.$inject=
["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Yf=B("$controller"),Zc=/^(\S+)(\s+as\s+([\w$]+))?$/,gf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},$f=/^\[|^\{(?!\{)/,ag={"[":/]$/,"{":/}$/},Zf=/^\)\]\}',?\n/,zg=B("$http"),fd=function(a){return function(){throw zg("legacy",a);}},Ia=da.$interpolateMinErr=B("$interpolate");
Ia.throwNoconcat=function(a){throw Ia("noconcat",a);};Ia.interr=function(a,b){return Ia("interr",a,b.toString())};var Ag=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,cg={http:80,https:443,ftp:21},Cb=B("$location"),Bg={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(r(a))return this.$$url;var b=Ag.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Db("$$protocol"),host:Db("$$host"),port:Db("$$port"),
path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(H(a)||P(a))a=a.toString(),this.$$search=xc(a);else if(K(a))a=Na(a,{}),p(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Cb("isrcharg");break;default:r(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=
!0;return this}};p([jd,dc,cc],function(a){a.prototype=Object.create(Bg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Cb("nostate");this.$$state=r(b)?null:b;return this}});var aa=B("$parse"),dg=Function.prototype.call,eg=Function.prototype.apply,fg=Function.prototype.bind,Lb=Z();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var Cg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=
a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];
Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw aa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&
c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=
this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Cg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=
function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression=
"ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,
consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=
this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+",
"-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=Na(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(",
"[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},
parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");
return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw aa("syntax",b.text,a,b.index+1,this.text,
this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw aa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw aa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},
expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:x},"this":{type:s.ThisExpression}}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};X(c,d.$filter);var e="",f;this.stage="assign";
if(f=qd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=od(c.body);d.stage="inputs";p(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Wa,ya,md,ld,Eb,gg,nd,a);this.state=this.stage=x;e.literal=rd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;p(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},
generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,m,l;c=c||v;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",
this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:p(a.body,function(b,c){k.recurse(b.expression,x,x,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:l=this.escape(a.value);this.assign(b,l);c(l);break;case s.UnaryExpression:this.recurse(a.argument,x,x,function(a){h=a});l=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,l);c(l);break;case s.BinaryExpression:this.recurse(a.left,
x,x,function(a){g=a});this.recurse(a.right,x,x,function(a){h=a});l="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,l);c(l);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);
break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Wa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",
a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,x,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),l=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,l),d&&(d.computed=!0,d.name=h);else{Wa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));l=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))l=k.ensureSafeObject(l);k.assign(b,l);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),m=[],p(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);m.push(b)}),l=h+"("+m.join(",")+")",k.assign(b,l),c(b)):(h=k.nextId(),g={},m=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);p(a.arguments,function(a){k.recurse(a,k.nextId(),x,function(a){m.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),l=k.member(g.context,g.name,g.computed)+"("+m.join(",")+")"):l=h+"("+m.join(",")+")";l=k.ensureSafeObject(l);k.assign(b,l)},
function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!pd(a.left))throw aa("lval");this.recurse(a.left,x,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);l=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,l);c(b||l)})},1);break;case s.ArrayExpression:m=[];p(a.elements,function(a){k.recurse(a,k.nextId(),x,function(a){m.push(a)})});
l="["+m.join(",")+"]";this.assign(b,l);c(l);break;case s.ObjectExpression:m=[];p(a.properties,function(a){k.recurse(a.value,k.nextId(),x,function(b){m.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});l="{"+m.join(",")+"}";this.assign(b,l);c(l);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(H(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(P(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw aa("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;X(c,d.$filter);var e,f;if(e=qd(c))f=this.recurse(e);e=od(c.body);var g;e&&(g=[],p(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];p(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;p(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=rd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Wa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Wa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(x,n,f);return b?{context:x,name:x,value:a}:a}:function(a,
c,d,l){var n=e(a,c,d,l),p;if(null!=n.value){ya(n.context,f.expression);md(n.value,f.expression);p=[];for(var r=0;r<g.length;++r)p.push(ya(g[r](a,c,d,l),f.expression));p=ya(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,l){var n=c(a,d,g,l);a=e(a,d,g,l);ya(n.value,f.expression);Eb(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],p(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=nd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:x,name:x,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:x;b&&ya(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var m=a(f,g,h,k),l,n;null!=m&&(l=b(f,g,h,k),l=ld(l),Wa(l,e),c&&1!==c&&(Eb(m),m&&!m[l]&&(m[l]={})),n=m[l],ya(n,e));return d?{context:m,name:l,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,m){g=a(g,h,k,m);e&&1!==e&&(Eb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:x;(d||Fb(b))&&ya(h,f);return c?{context:g,name:b,value:h}:
h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new td(this.ast,b):new sd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var hg=Object.prototype.valueOf,za=B("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ga=B("$compile"),Y=U.createElement("a"),
xd=xa(R.location.href);yd.$inject=["$document"];Jc.$inject=["$provide"];var Fd=22,Ed=".",ic="0";zd.$inject=["$locale"];Bd.$inject=["$locale"];var tg={yyyy:ba("FullYear",4),yy:ba("FullYear",2,0,!0),y:ba("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:Hb("Day"),
EEE:Hb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Hd(2),w:Hd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},sg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,rg=/^\-?\d+$/;Ad.$inject=["$locale"];var mg=ma(M),ng=ma(rb);Cd.$inject=["$parse"];var me=ma({restrict:"E",compile:function(a,
b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),sb={};p(Bb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});sb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(ad,function(a,b){sb[b]=
function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(vg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=va("ng-"+a);sb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),
Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,b){a.$name=b},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Id.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Rd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Id,compile:function(d,f){d.addClass(Xa).addClass(lb);
var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):v;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,x),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));
d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,x);N(n,Ib)})}}}}}]},ne=Rd(),Ae=Rd(!0),ug=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Dg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Eg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Fg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Sd=/^(\d{4})-(\d{2})-(\d{2})$/,Td=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
mc=/^(\d{4})-W(\d\d)$/,Ud=/^(\d{4})-(\d\d)$/,Vd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kd=Z();p(["date","datetime-local","month","time","week"],function(a){Kd[a]=!0});var Wd={text:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c)},date:jb("date",Sd,Kb(Sd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Td,Kb(Td,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Vd,Kb(Vd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",mc,function(a,b){if(ea(a))return a;
if(H(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Gd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:jb("month",Ud,Kb(Ud,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Ld(a,b,d,c);ib(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:Fg.test(a)?parseFloat(a):x});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!P(a))throw kb("numfmt",
a);a=a.toString()}return a});if(u(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||r(g)||a>=g};d.$observe("min",function(a){u(a)&&!P(a)&&(a=parseFloat(a,10));g=P(a)&&!isNaN(a)?a:x;c.$validate()})}if(u(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||r(h)||a<=h};d.$observe("max",function(a){u(a)&&!P(a)&&(a=parseFloat(a,10));h=P(a)&&!isNaN(a)?a:x;c.$validate()})}},url:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Dg.test(d)}},email:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Eg.test(d)}},radio:function(a,b,d,c){r(d.name)&&b.attr("name",++mb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Md(h,a,"ngTrueValue",d.ngTrueValue,
!0),m=Md(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return la(a,k)});c.$parsers.push(function(a){return a?k:m})},hidden:v,button:v,submit:v,reset:v,file:v},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Wd[M(g.type)]||Wd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Gg=/^(true|false|\d+)$/,Se=function(){return{restrict:"A",priority:100,compile:function(a,b){return Gg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},se=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=r(a)?"":a})}}}}],ue=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=r(a)?"":a})}}}}],te=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Re=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ve=lc("",!0),xe=lc("Odd",0),we=lc("Even",1),ye=Ka({compile:function(a,b){b.$set("ngCloak",x);a.removeClass("ng-cloak")}}),ze=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},Hg={blur:!0,focus:!0};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Hg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ce=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=U.createComment(" end ngIf: "+
c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=qb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],De=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,l,n,p){var r=0,t,s,q,y=function(){s&&(s.remove(),s=null);t&&(t.$destroy(),t=null);q&&
(d.leave(q).then(function(){s=null}),s=q,q=null)};c.$watch(f,function(f){var l=function(){!u(h)||h&&!c.$eval(h)||b()},s=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&s===r){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(l)});t=b;q=a;t.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||s!==r||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],Ue=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,U).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ee=Ka({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Qe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!r(a)){var b=
[];a&&p(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){return L(a)?a.join(e):x});c.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Nd="ng-invalid",Xa="ng-pristine",Jb="ng-dirty",Pd="ng-pending",kb=B("ngModel"),Ig=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=x;this.$validators={};this.$asyncValidators=
{};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=x;this.$name=m(d.name||"",!1)(a);this.$$parentForm=Ib;var l=e(d.ngModel),n=l.assign,s=l,z=n,t=null,A,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");s=function(a){var c=l(a);G(c)&&(c=b(a));return c};z=function(a,
b){G(l(a))?f(a,{$$$p:q.$modelValue}):n(a,q.$modelValue)}}else if(!l.assign)throw kb("nonassign",d.ngModel,ua(c));};this.$render=v;this.$isEmpty=function(a){return r(a)||""===a||null===a||a!==a};var y=0;Jd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Xa)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Xa);f.addClass(c,Jb);q.$$parentForm.$setDirty()};
this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!P(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,
function(e){d||b===e||(q.$modelValue=e?a:x,q.$modelValue!==c&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;p(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(p(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!G(h.then))throw kb("nopromise",h);f(g,x);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},
v):g(!0)}function f(a,b){h===y&&q.$setValidity(a,b)}function g(a){h===y&&c(a)}y++;var h=y;(function(){var a=q.$$parserName||"parse";if(r(A))f(a,null);else return A||(p(q.$validators,function(a,b){f(b,null)}),p(q.$asyncValidators,function(a,b){f(b,null)})),f(a,A),A;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};
this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;if(A=r(b)?x:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),r(b)){A=!1;break}P(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=s(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:x,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=
function(){z(a,q.$modelValue);p(q.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&u(d.debounce)&&(d=d.debounce,P(d)?c=d:P(d[b])?c=d[b]:P(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=
s(a);if(b!==q.$modelValue&&(q.$modelValue===q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;A=x;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,v))}return b})}],Pe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ig,priority:1,compile:function(b){b.addClass(Xa).addClass("ng-untouched").addClass(lb);return{pre:function(a,b,e,f){var g=
f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Jg=/(\s+|^)default(\s+|$)/,
Te=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Na(a.$eval(b.ngModelOptions));u(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(Jg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Fe=Ka({terminal:!0,priority:1E3}),Kg=B("ngOptions"),Lg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Ne=["$compile","$parse",function(a,b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function m(a){var b;if(!p&&Aa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var l=a.match(Lg);if(!l)throw Kg("iexp",a,ua(c));var n=l[5]||l[7],p=l[6];a=/ as /.test(l[0])&&l[1];var r=l[9];c=b(l[2]?l[1]:n);var t=a&&b(a)||c,s=r&&b(r),q=r?function(a,b){return s(d,b)}:function(a){return Da(a)},y=function(a,
b){return q(a,C(a,b))},w=b(l[2]||l[1]),x=b(l[3]||""),F=b(l[4]||""),u=b(l[8]),v={},C=p?function(a,b){v[p]=b;v[n]=a;return v}:function(a){v[n]=a;return v};return{trackBy:r,getTrackByValue:y,getWatchables:b(u,function(a){var b=[];a=a||[];for(var c=m(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=C(a[g],g),g=q(a[g],k);b.push(g);if(l[2]||l[1])g=w(d,k),b.push(g);l[4]&&(k=F(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=u(d)||[],f=m(c),g=f.length,l=0;l<g;l++){var n=c===f?l:f[l],p=
C(c[n],n),s=t(d,p),n=q(s,p),v=w(d,p),A=x(d,p),p=F(d,p),s=new e(n,s,v,A,p);a.push(s);b[n]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[y(a)]},getViewValueFromOption:function(a){return r?da.copy(a.viewValue):a.viewValue}}}}}var c=U.createElement("option"),e=U.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=v},post:function(b,g,h,k){function m(a,b){a.element=b;b.disabled=a.disabled;
a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function l(a,b,c,d){b&&M(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function n(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function r(a){var b=y&&y[0],c=u&&u[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||"option"===oa(a)&&""===a.value);)a=a.nextSibling;return a}function s(){var a=E&&x.readValue();E=C.getOptions();var b={},d=g[0].firstChild;F&&g.prepend(y);
d=r(d);E.items.forEach(function(a){var f,h;a.group?(f=b[a.group],f||(f=l(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=l(f.groupElement,f.currentOptionElement,"option",c),m(a,h),f.currentOptionElement=h.nextSibling):(h=l(g[0],d,"option",c),m(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){n(b[a].currentOptionElement)});n(d);t.$render();if(!t.$isEmpty(a)){var f=x.readValue();(C.trackBy||q?la(a,f):a===f)||(t.$setViewValue(f),
t.$render())}}var t=k[1];if(t){var x=k[0],q=h.multiple,y;k=0;for(var w=g.children(),v=w.length;k<v;k++)if(""===w[k].value){y=w.eq(k);break}var F=!!y,u=D(c.cloneNode(!1));u.val("?");var E,C=d(h.ngOptions,g,b);q?(t.$isEmpty=function(a){return!a||0===a.length},x.writeValue=function(a){E.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=E.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},x.readValue=function(){var a=g.val()||[],b=[];p(a,function(a){(a=E.selectValueMap[a])&&
!a.disabled&&b.push(E.getViewValueFromOption(a))});return b},C.trackBy&&b.$watchCollection(function(){if(L(t.$viewValue))return t.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){t.$render()})):(x.writeValue=function(a){var b=E.getOptionFromViewValue(a);b&&!b.disabled?(g[0].value!==b.selectValue&&(u.remove(),F||y.remove(),g[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||F?(u.remove(),F||g.prepend(y),g.val(""),y.prop("selected",
!0),y.attr("selected",!0)):(F||y.remove(),g.prepend(u),g.val("?"),u.prop("selected",!0),u.attr("selected",!0))},x.readValue=function(){var a=E.selectValueMap[g.val()];return a&&!a.disabled?(F||y.remove(),u.remove(),E.getViewValueFromOption(a)):null},C.trackBy&&b.$watch(function(){return C.getTrackByValue(t.$viewValue)},function(){t.$render()}));F?(y.remove(),a(y)(b),y.removeClass("ng-scope")):y=D(c.cloneNode(!1));s();b.$watchCollection(C.getWatchables,s)}}}}}],Ge=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var m=h.count,l=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,s=f.$eval(l)||{},x={},t=b.startSymbol(),u=b.endSymbol(),q=t+m+"-"+n+u,y=da.noop,w;p(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),s[c]=g.attr(h.$attr[b]))});p(s,function(a,d){x[d]=b(a.replace(c,q))});f.$watch(m,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-n));c===w||e&&P(w)&&isNaN(w)||(y(),
e=x[c],r(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+l),y=v,k()):y=f.$watch(e,k),w=c)})}}}],He=["$parse","$animate",function(a,b){var d=B("ngRepeat"),c=function(a,b,c,d,k,m,l){a[c]=d;k&&(a[k]=m);a.$index=b;a.$first=0===b;a.$last=b===l-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=U.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var m=k[1],l=k[2],n=k[3],r=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var s=k[3]||k[1],t=k[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw d("badident",n);var u,q,y,w,v={$id:Da};r?u=a(r):(y=function(a,b){return Da(b)},w=function(a){return a});return function(a,e,f,k,m){u&&(q=function(b,c,d){t&&(v[t]=b);v[s]=c;v.$index=
d;return u(a,v)});var r=Z();a.$watchCollection(l,function(f){var k,l,u=e[0],v,A=Z(),C,D,J,E,G,B,H;n&&(a[n]=f);if(Aa(f))G=f,l=q||y;else for(H in l=q||w,G=[],f)sa.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);C=G.length;H=Array(C);for(k=0;k<C;k++)if(D=f===G?k:G[k],J=f[D],E=l(D,J,k),r[E])B=r[E],delete r[E],A[E]=B,H[k]=B;else{if(A[E])throw p(H,function(a){a&&a.scope&&(r[a.id]=a)}),d("dupes",g,E,J);H[k]={id:E,scope:x,clone:x};A[E]=!0}for(v in r){B=r[v];E=qb(B.clone);b.leave(E);if(E[0].parentNode)for(k=0,l=E.length;k<
l;k++)E[k].$$NG_REMOVED=!0;B.scope.$destroy()}for(k=0;k<C;k++)if(D=f===G?k:G[k],J=f[D],B=H[k],B.scope){v=u;do v=v.nextSibling;while(v&&v.$$NG_REMOVED);B.clone[0]!=v&&b.move(qb(B.clone),null,u);u=B.clone[B.clone.length-1];c(B.scope,k,s,J,t,D,C)}else m(function(a,d){B.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,u);u=e;B.clone=a;A[B.id]=B;c(B.scope,k,s,J,t,D,C)});r=A})}}}}],Ie=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Be=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Je=Ka(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ke=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],m=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var r=qb(g[c].clone);k[c].$destroy();(h[c]=a.leave(r)).then(m(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&p(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=U.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Le=Ka({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Me=Ka({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Oe=Ka({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw B("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
b.append(a)})}}),oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Mg={$setViewValue:v,$render:v},Ng=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Ta;c.ngModelCtrl=Mg;c.unknownOption=D(U.createElement("option"));c.renderUnknownOption=function(b){b="? "+Da(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=v});c.removeUnknownOption=
function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){if(8!==b[0].nodeType){Sa(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&
(b[0].selected=!0)}};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=x)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,m){if(e){var l;d.$observe("value",function(a){u(l)&&c.removeOption(l);l=a;c.addOption(a,b)})}else m?a.$watch(m,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Ng,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ta(a);p(b.find("option"),function(a){a.selected=u(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||la(g,e.$viewValue)||(g=
fa(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},re=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(u(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,
b,d,c,e)}}}}],qe=ma({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){H(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw B("ngPattern")("noregexp",
f,a,ua(b));e=a||x;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||r(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ca(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ca(a)||0;c.$validate()});
c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};R.angular.bootstrap?R.console&&console.log("WARNING: Tried to load angular more than once."):(he(),je(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,
MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",
shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;x===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),D(U).ready(function(){de(U,yc)}))})(window,document);
!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.14
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function w(s,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=s.current&&s.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=s.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(u)||u&&!a.$eval(u)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(v)}else z()}var m,n,l,u=b.autoscroll,v=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function s(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(a,d,b,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&
(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=
t.current;(w=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!v)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var g=t.current,e=p;if(w)g.params=e.params,d.copy(g.params,b),a.$broadcast("$routeUpdate",g);else if(e||g)v=!1,(t.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(u(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),d.isDefined(g)&&(e.loadedTemplateUrl=x.valueOf(g),b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==t.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,g))},function(b){e==t.current&&a.$broadcast("$routeChangeError",
e,g,b)})}function l(){var a,b;d.forEach(h,function(c,h){var r;if(r=!b){var k=f.path();r=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=r[l-1],q=k[l];p&&q&&(m[p.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=s(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function u(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var g=a.match(/(\w+)(?:[?*])?(.*)/),
f=g[1];c.push(b[f]);c.push(g[2]||"");delete b[f]}});return c.join("")}var v=!1,p,w,t={routes:h,reload:function(){v=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;v=!1}};a.$evalAsync(function(){m(b);b.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(u(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",
n);return t}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});q.directive("ngView",w);q.directive("ngView",A);w.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
/*!
 * Font Awesome Free 5.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function() {
    "use strict";
    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
    }
    function i(t, n) {
        for (var e = 0; e < n.length; e++) {
            var a = n[e];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    function W(r) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {}, n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable;
            }))), n.forEach(function(t) {
                var n, e, a;
                n = r, a = i[e = t], e in n ? Object.defineProperty(n, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = a;
            });
        }
        return r;
    }
    function m(t, n) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t) || function(t, n) {
            var e = [], a = !0, r = !1, i = void 0;
            try {
                for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (e.push(o.value), 
                !n || e.length !== n); a = !0) ;
            } catch (t) {
                r = !0, i = t;
            } finally {
                try {
                    a || null == s.return || s.return();
                } finally {
                    if (r) throw i;
                }
            }
            return e;
        }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    function d(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                return e;
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    var t = function() {}, n = {}, e = {}, a = null, o = {
        mark: t,
        measure: t
    };
    try {
        "undefined" != typeof window && (n = window), "undefined" != typeof document && (e = document), 
        "undefined" != typeof MutationObserver && (a = MutationObserver), "undefined" != typeof performance && (o = performance);
    } catch (t) {}
    var s = (n.navigator || {}).userAgent, c = void 0 === s ? "" : s, h = n, g = e, l = a, f = o, u = !!h.document, p = !!g.documentElement && !!g.head && "function" == typeof g.addEventListener && "function" == typeof g.createElement, k = ~c.indexOf("MSIE") || ~c.indexOf("Trident/"), v = "___FONT_AWESOME___", A = 16, b = "fa", y = "svg-inline--fa", U = "data-fa-i2svg", w = "data-fa-pseudo-element", x = "data-fa-pseudo-element-pending", C = "data-prefix", M = "data-icon", N = "fontawesome-i2svg", S = [ "HTML", "HEAD", "STYLE", "SCRIPT" ], z = function() {
        try {
            return !1;
        } catch (t) {
            return !1;
        }
    }(), O = {
        fas: "solid",
        far: "regular",
        fal: "light",
        fab: "brands",
        fa: "solid"
    }, E = {
        solid: "fas",
        regular: "far",
        light: "fal",
        brands: "fab"
    }, j = "fa-layers-text", P = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/, L = {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
    }, T = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], _ = T.concat([ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]), I = [ "class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask" ], R = [ "xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter" ].concat(T.map(function(t) {
        return "".concat(t, "x");
    })).concat(_.map(function(t) {
        return "w-".concat(t);
    })), H = h.FontAwesomeConfig || {};
    if (g && "function" == typeof g.querySelector) {
        [ [ "data-family-prefix", "familyPrefix" ], [ "data-replacement-class", "replacementClass" ], [ "data-auto-replace-svg", "autoReplaceSvg" ], [ "data-auto-add-css", "autoAddCss" ], [ "data-auto-a11y", "autoA11y" ], [ "data-search-pseudo-elements", "searchPseudoElements" ], [ "data-observe-mutations", "observeMutations" ], [ "data-keep-original-source", "keepOriginalSource" ], [ "data-measure-performance", "measurePerformance" ], [ "data-show-missing-icons", "showMissingIcons" ] ].forEach(function(t) {
            var n, e = m(t, 2), a = e[0], r = e[1], i = "" === (n = function(t) {
                var n = g.querySelector("script[" + t + "]");
                if (n) return n.getAttribute(t);
            }(a)) || "false" !== n && ("true" === n || n);
            null != i && (H[r] = i);
        });
    }
    var D = W({}, {
        familyPrefix: b,
        replacementClass: y,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, H);
    D.autoReplaceSvg || (D.observeMutations = !1);
    var V = W({}, D);
    h.FontAwesomeConfig = V;
    var F = h || {};
    F[v] || (F[v] = {}), F[v].styles || (F[v].styles = {}), F[v].hooks || (F[v].hooks = {}), 
    F[v].shims || (F[v].shims = []);
    var X = F[v], B = [], Y = !1;
    function q(t) {
        p && (Y ? setTimeout(t, 0) : B.push(t));
    }
    p && ((Y = (g.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(g.readyState)) || g.addEventListener("DOMContentLoaded", function t() {
        g.removeEventListener("DOMContentLoaded", t), Y = 1, B.map(function(t) {
            return t();
        });
    }));
    var K, G = "pending", J = "settled", Q = "fulfilled", Z = "rejected", $ = function() {}, tt = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit, nt = "undefined" == typeof setImmediate ? setTimeout : setImmediate, et = [];
    function at() {
        for (var t = 0; t < et.length; t++) et[t][0](et[t][1]);
        K = !(et = []);
    }
    function rt(t, n) {
        et.push([ t, n ]), K || (K = !0, nt(at, 0));
    }
    function it(t) {
        var n = t.owner, e = n._state, a = n._data, r = t[e], i = t.then;
        if ("function" == typeof r) {
            e = Q;
            try {
                a = r(a);
            } catch (t) {
                lt(i, t);
            }
        }
        ot(i, a) || (e === Q && st(i, a), e === Z && lt(i, a));
    }
    function ot(n, e) {
        var a;
        try {
            if (n === e) throw new TypeError("A promises callback cannot return that same promise.");
            if (e && ("function" == typeof e || "object" === r(e))) {
                var t = e.then;
                if ("function" == typeof t) return t.call(e, function(t) {
                    a || (a = !0, e === t ? ct(n, t) : st(n, t));
                }, function(t) {
                    a || (a = !0, lt(n, t));
                }), !0;
            }
        } catch (t) {
            return a || lt(n, t), !0;
        }
        return !1;
    }
    function st(t, n) {
        t !== n && ot(t, n) || ct(t, n);
    }
    function ct(t, n) {
        t._state === G && (t._state = J, t._data = n, rt(ut, t));
    }
    function lt(t, n) {
        t._state === G && (t._state = J, t._data = n, rt(mt, t));
    }
    function ft(t) {
        t._then = t._then.forEach(it);
    }
    function ut(t) {
        t._state = Q, ft(t);
    }
    function mt(t) {
        t._state = Z, ft(t), !t._handled && tt && global.process.emit("unhandledRejection", t._data, t);
    }
    function dt(t) {
        global.process.emit("rejectionHandled", t);
    }
    function ht(t) {
        if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof ht == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [], function(t, n) {
            function e(t) {
                lt(n, t);
            }
            try {
                t(function(t) {
                    st(n, t);
                }, e);
            } catch (t) {
                e(t);
            }
        }(t, this);
    }
    ht.prototype = {
        constructor: ht,
        _state: G,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function(t, n) {
            var e = {
                owner: this,
                then: new this.constructor($),
                fulfilled: t,
                rejected: n
            };
            return !n && !t || this._handled || (this._handled = !0, this._state === Z && tt && rt(dt, this)), 
            this._state === Q || this._state === Z ? rt(it, e) : this._then.push(e), e.then;
        },
        catch: function(t) {
            return this.then(null, t);
        }
    }, ht.all = function(s) {
        if (!Array.isArray(s)) throw new TypeError("You must pass an array to Promise.all().");
        return new ht(function(e, t) {
            var a = [], r = 0;
            function n(n) {
                return r++, function(t) {
                    a[n] = t, --r || e(a);
                };
            }
            for (var i, o = 0; o < s.length; o++) (i = s[o]) && "function" == typeof i.then ? i.then(n(o), t) : a[o] = i;
            r || e(a);
        });
    }, ht.race = function(r) {
        if (!Array.isArray(r)) throw new TypeError("You must pass an array to Promise.race().");
        return new ht(function(t, n) {
            for (var e, a = 0; a < r.length; a++) (e = r[a]) && "function" == typeof e.then ? e.then(t, n) : t(e);
        });
    }, ht.resolve = function(n) {
        return n && "object" === r(n) && n.constructor === ht ? n : new ht(function(t) {
            t(n);
        });
    }, ht.reject = function(e) {
        return new ht(function(t, n) {
            n(e);
        });
    };
    var gt = "function" == typeof Promise ? Promise : ht, pt = A, vt = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
    };
    function bt(t) {
        if (t && p) {
            var n = g.createElement("style");
            n.setAttribute("type", "text/css"), n.innerHTML = t;
            for (var e = g.head.childNodes, a = null, r = e.length - 1; -1 < r; r--) {
                var i = e[r], o = (i.tagName || "").toUpperCase();
                -1 < [ "STYLE", "LINK" ].indexOf(o) && (a = i);
            }
            return g.head.insertBefore(n, a), t;
        }
    }
    var yt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function wt() {
        for (var t = 12, n = ""; 0 < t--; ) n += yt[62 * Math.random() | 0];
        return n;
    }
    function xt(t) {
        for (var n = [], e = (t || []).length >>> 0; e--; ) n[e] = t[e];
        return n;
    }
    function kt(t) {
        return t.classList ? xt(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(t) {
            return t;
        });
    }
    function At(t, n) {
        var e, a = n.split("-"), r = a[0], i = a.slice(1).join("-");
        return r !== t || "" === i || (e = i, ~R.indexOf(e)) ? null : i;
    }
    function Ct(t) {
        return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function Mt(e) {
        return Object.keys(e || {}).reduce(function(t, n) {
            return t + "".concat(n, ": ").concat(e[n], ";");
        }, "");
    }
    function Nt(t) {
        return t.size !== vt.size || t.x !== vt.x || t.y !== vt.y || t.rotate !== vt.rotate || t.flipX || t.flipY;
    }
    function St(t) {
        var n = t.transform, e = t.containerWidth, a = t.iconWidth, r = {
            transform: "translate(".concat(e / 2, " 256)")
        }, i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "), o = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), s = "rotate(".concat(n.rotate, " 0 0)");
        return {
            outer: r,
            inner: {
                transform: "".concat(i, " ").concat(o, " ").concat(s)
            },
            path: {
                transform: "translate(".concat(a / 2 * -1, " -256)")
            }
        };
    }
    var zt = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };
    function Ot(t) {
        var n = t.icons, e = n.main, a = n.mask, r = t.prefix, i = t.iconName, o = t.transform, s = t.symbol, c = t.title, l = t.extra, f = t.watchable, u = void 0 !== f && f, m = a.found ? a : e, d = m.width, h = m.height, g = "fa-w-".concat(Math.ceil(d / h * 16)), p = [ V.replacementClass, i ? "".concat(V.familyPrefix, "-").concat(i) : "", g ].filter(function(t) {
            return -1 === l.classes.indexOf(t);
        }).concat(l.classes).join(" "), v = {
            children: [],
            attributes: W({}, l.attributes, {
                "data-prefix": r,
                "data-icon": i,
                class: p,
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(d, " ").concat(h)
            })
        };
        u && (v.attributes[U] = ""), c && v.children.push({
            tag: "title",
            attributes: {
                id: v.attributes["aria-labelledby"] || "title-".concat(wt())
            },
            children: [ c ]
        });
        var b, y, w, x, k, A, C, M, N, S, z, O, E, j, P, L, T, _, I, R, H, D, F, X = W({}, v, {
            prefix: r,
            iconName: i,
            main: e,
            mask: a,
            transform: o,
            symbol: s,
            styles: l.styles
        }), B = a.found && e.found ? (y = (b = X).children, w = b.attributes, x = b.main, 
        k = b.mask, A = b.transform, C = x.width, M = x.icon, N = k.width, S = k.icon, z = St({
            transform: A,
            containerWidth: N,
            iconWidth: C
        }), O = {
            tag: "rect",
            attributes: W({}, zt, {
                fill: "white"
            })
        }, E = {
            tag: "g",
            attributes: W({}, z.inner),
            children: [ {
                tag: "path",
                attributes: W({}, M.attributes, z.path, {
                    fill: "black"
                })
            } ]
        }, j = {
            tag: "g",
            attributes: W({}, z.outer),
            children: [ E ]
        }, P = "mask-".concat(wt()), L = "clip-".concat(wt()), T = {
            tag: "defs",
            children: [ {
                tag: "clipPath",
                attributes: {
                    id: L
                },
                children: [ S ]
            }, {
                tag: "mask",
                attributes: W({}, zt, {
                    id: P,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [ O, j ]
            } ]
        }, y.push(T, {
            tag: "rect",
            attributes: W({
                fill: "currentColor",
                "clip-path": "url(#".concat(L, ")"),
                mask: "url(#".concat(P, ")")
            }, zt)
        }), {
            children: y,
            attributes: w
        }) : function(t) {
            var n = t.children, e = t.attributes, a = t.main, r = t.transform, i = Mt(t.styles);
            if (0 < i.length && (e.style = i), Nt(r)) {
                var o = St({
                    transform: r,
                    containerWidth: a.width,
                    iconWidth: a.width
                });
                n.push({
                    tag: "g",
                    attributes: W({}, o.outer),
                    children: [ {
                        tag: "g",
                        attributes: W({}, o.inner),
                        children: [ {
                            tag: a.icon.tag,
                            children: a.icon.children,
                            attributes: W({}, a.icon.attributes, o.path)
                        } ]
                    } ]
                });
            } else n.push(a.icon);
            return {
                children: n,
                attributes: e
            };
        }(X), Y = B.children, q = B.attributes;
        return X.children = Y, X.attributes = q, s ? (I = (_ = X).prefix, R = _.iconName, 
        H = _.children, D = _.attributes, F = _.symbol, [ {
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [ {
                tag: "symbol",
                attributes: W({}, D, {
                    id: !0 === F ? "".concat(I, "-").concat(V.familyPrefix, "-").concat(R) : F
                }),
                children: H
            } ]
        } ]) : function(t) {
            var n = t.children, e = t.main, a = t.mask, r = t.attributes, i = t.styles, o = t.transform;
            if (Nt(o) && e.found && !a.found) {
                var s = e.width / e.height / 2, c = .5;
                r.style = Mt(W({}, i, {
                    "transform-origin": "".concat(s + o.x / 16, "em ").concat(c + o.y / 16, "em")
                }));
            }
            return [ {
                tag: "svg",
                attributes: r,
                children: n
            } ];
        }(X);
    }
    function Et(t) {
        var n = t.content, e = t.width, a = t.height, r = t.transform, i = t.title, o = t.extra, s = t.watchable, c = void 0 !== s && s, l = W({}, o.attributes, i ? {
            title: i
        } : {}, {
            class: o.classes.join(" ")
        });
        c && (l[U] = "");
        var f, u, m, d, h, g, p, v, b, y = W({}, o.styles);
        Nt(r) && (y.transform = (u = (f = {
            transform: r,
            startCentered: !0,
            width: e,
            height: a
        }).transform, m = f.width, d = void 0 === m ? A : m, h = f.height, g = void 0 === h ? A : h, 
        p = f.startCentered, b = "", b += (v = void 0 !== p && p) && k ? "translate(".concat(u.x / pt - d / 2, "em, ").concat(u.y / pt - g / 2, "em) ") : v ? "translate(calc(-50% + ".concat(u.x / pt, "em), calc(-50% + ").concat(u.y / pt, "em)) ") : "translate(".concat(u.x / pt, "em, ").concat(u.y / pt, "em) "), 
        b += "scale(".concat(u.size / pt * (u.flipX ? -1 : 1), ", ").concat(u.size / pt * (u.flipY ? -1 : 1), ") "), 
        b += "rotate(".concat(u.rotate, "deg) ")), y["-webkit-transform"] = y.transform);
        var w = Mt(y);
        0 < w.length && (l.style = w);
        var x = [];
        return x.push({
            tag: "span",
            attributes: l,
            children: [ n ]
        }), i && x.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [ i ]
        }), x;
    }
    var jt = function() {}, Pt = V.measurePerformance && f && f.mark && f.measure ? f : {
        mark: jt,
        measure: jt
    }, Lt = 'FA "5.7.2"', Tt = function(t) {
        Pt.mark("".concat(Lt, " ").concat(t, " ends")), Pt.measure("".concat(Lt, " ").concat(t), "".concat(Lt, " ").concat(t, " begins"), "".concat(Lt, " ").concat(t, " ends"));
    }, _t = {
        begin: function(t) {
            return Pt.mark("".concat(Lt, " ").concat(t, " begins")), function() {
                return Tt(t);
            };
        },
        end: Tt
    }, It = function(t, n, e, a) {
        var r, i, o, s, c, l = Object.keys(t), f = l.length, u = void 0 !== a ? (s = n, 
        c = a, function(t, n, e, a) {
            return s.call(c, t, n, e, a);
        }) : n;
        for (o = void 0 === e ? (r = 1, t[l[0]]) : (r = 0, e); r < f; r++) o = u(o, t[i = l[r]], i, t);
        return o;
    };
    var Rt = X.styles, Ht = X.shims, Dt = {}, Ft = {}, Xt = {}, Bt = function() {
        var t = function(a) {
            return It(Rt, function(t, n, e) {
                return t[e] = It(n, a, {}), t;
            }, {});
        };
        Dt = t(function(t, n, e) {
            return n[3] && (t[n[3]] = e), t;
        }), Ft = t(function(n, t, e) {
            var a = t[2];
            return n[e] = e, a.forEach(function(t) {
                n[t] = e;
            }), n;
        });
        var i = "far" in Rt;
        Xt = It(Ht, function(t, n) {
            var e = n[0], a = n[1], r = n[2];
            return "far" !== a || i || (a = "fas"), t[e] = {
                prefix: a,
                iconName: r
            }, t;
        }, {});
    };
    function Yt(t, n) {
        return Dt[t][n];
    }
    Bt();
    var qt = X.styles, Wt = function() {
        return {
            prefix: null,
            iconName: null,
            rest: []
        };
    };
    function Ut(t) {
        return t.reduce(function(t, n) {
            var e = At(V.familyPrefix, n);
            if (qt[n]) t.prefix = n; else if (V.autoFetchSvg && -1 < [ "fas", "far", "fal", "fab", "fa" ].indexOf(n)) t.prefix = n; else if (e) {
                var a = "fa" === t.prefix ? Xt[e] || {
                    prefix: null,
                    iconName: null
                } : {};
                t.iconName = a.iconName || e, t.prefix = a.prefix || t.prefix;
            } else n !== V.replacementClass && 0 !== n.indexOf("fa-w-") && t.rest.push(n);
            return t;
        }, Wt());
    }
    function Vt(t, n, e) {
        if (t && t[n] && t[n][e]) return {
            prefix: n,
            iconName: e,
            icon: t[n][e]
        };
    }
    function Kt(t) {
        var e, n = t.tag, a = t.attributes, r = void 0 === a ? {} : a, i = t.children, o = void 0 === i ? [] : i;
        return "string" == typeof t ? Ct(t) : "<".concat(n, " ").concat((e = r, Object.keys(e || {}).reduce(function(t, n) {
            return t + "".concat(n, '="').concat(Ct(e[n]), '" ');
        }, "").trim()), ">").concat(o.map(Kt).join(""), "</").concat(n, ">");
    }
    var Gt = function() {};
    function Jt(t) {
        return "string" == typeof (t.getAttribute ? t.getAttribute(U) : null);
    }
    var Qt = {
        replace: function(t) {
            var n = t[0], e = t[1].map(function(t) {
                return Kt(t);
            }).join("\n");
            if (n.parentNode && n.outerHTML) n.outerHTML = e + (V.keepOriginalSource && "svg" !== n.tagName.toLowerCase() ? "\x3c!-- ".concat(n.outerHTML, " --\x3e") : ""); else if (n.parentNode) {
                var a = document.createElement("span");
                n.parentNode.replaceChild(a, n), a.outerHTML = e;
            }
        },
        nest: function(t) {
            var n = t[0], e = t[1];
            if (~kt(n).indexOf(V.replacementClass)) return Qt.replace(t);
            var a = new RegExp("".concat(V.familyPrefix, "-.*"));
            delete e[0].attributes.style;
            var r = e[0].attributes.class.split(" ").reduce(function(t, n) {
                return n === V.replacementClass || n.match(a) ? t.toSvg.push(n) : t.toNode.push(n), 
                t;
            }, {
                toNode: [],
                toSvg: []
            });
            e[0].attributes.class = r.toSvg.join(" ");
            var i = e.map(function(t) {
                return Kt(t);
            }).join("\n");
            n.setAttribute("class", r.toNode.join(" ")), n.setAttribute(U, ""), n.innerHTML = i;
        }
    };
    function Zt(e, t) {
        var a = "function" == typeof t ? t : Gt;
        0 === e.length ? a() : (h.requestAnimationFrame || function(t) {
            return t();
        })(function() {
            var t = !0 === V.autoReplaceSvg ? Qt.replace : Qt[V.autoReplaceSvg] || Qt.replace, n = _t.begin("mutate");
            e.map(t), n(), a();
        });
    }
    var $t = !1;
    function tn() {
        $t = !1;
    }
    var nn = null;
    function en(t) {
        if (l && V.observeMutations) {
            var r = t.treeCallback, i = t.nodeCallback, o = t.pseudoElementsCallback, n = t.observeMutationsRoot, e = void 0 === n ? g : n;
            nn = new l(function(t) {
                $t || xt(t).forEach(function(t) {
                    if ("childList" === t.type && 0 < t.addedNodes.length && !Jt(t.addedNodes[0]) && (V.searchPseudoElements && o(t.target), 
                    r(t.target)), "attributes" === t.type && t.target.parentNode && V.searchPseudoElements && o(t.target.parentNode), 
                    "attributes" === t.type && Jt(t.target) && ~I.indexOf(t.attributeName)) if ("class" === t.attributeName) {
                        var n = Ut(kt(t.target)), e = n.prefix, a = n.iconName;
                        e && t.target.setAttribute("data-prefix", e), a && t.target.setAttribute("data-icon", a);
                    } else i(t.target);
                });
            }), p && nn.observe(e, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            });
        }
    }
    function an(t) {
        for (var n = "", e = 0; e < t.length; e++) {
            n += ("000" + t.charCodeAt(e).toString(16)).slice(-4);
        }
        return n;
    }
    function rn(t) {
        var n, e, a = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), i = void 0 !== t.innerText ? t.innerText.trim() : "", o = Ut(kt(t));
        return a && r && (o.prefix = a, o.iconName = r), o.prefix && 1 < i.length ? o.iconName = (n = o.prefix, 
        e = t.innerText, Ft[n][e]) : o.prefix && 1 === i.length && (o.iconName = Yt(o.prefix, an(t.innerText))), 
        o;
    }
    var on = function(t) {
        var n = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return t ? t.toLowerCase().split(" ").reduce(function(t, n) {
            var e = n.toLowerCase().split("-"), a = e[0], r = e.slice(1).join("-");
            if (a && "h" === r) return t.flipX = !0, t;
            if (a && "v" === r) return t.flipY = !0, t;
            if (r = parseFloat(r), isNaN(r)) return t;
            switch (a) {
              case "grow":
                t.size = t.size + r;
                break;

              case "shrink":
                t.size = t.size - r;
                break;

              case "left":
                t.x = t.x - r;
                break;

              case "right":
                t.x = t.x + r;
                break;

              case "up":
                t.y = t.y - r;
                break;

              case "down":
                t.y = t.y + r;
                break;

              case "rotate":
                t.rotate = t.rotate + r;
            }
            return t;
        }, n) : n;
    };
    function sn(t) {
        var n, e, a, r, i, o, s, c = rn(t), l = c.iconName, f = c.prefix, u = c.rest, m = (n = t.getAttribute("style"), 
        e = [], n && (e = n.split(";").reduce(function(t, n) {
            var e = n.split(":"), a = e[0], r = e.slice(1);
            return a && 0 < r.length && (t[a] = r.join(":").trim()), t;
        }, {})), e), d = on(t.getAttribute("data-fa-transform")), h = null !== (a = t.getAttribute("data-fa-symbol")) && ("" === a || a), g = (i = xt((r = t).attributes).reduce(function(t, n) {
            return "class" !== t.name && "style" !== t.name && (t[n.name] = n.value), t;
        }, {}), o = r.getAttribute("title"), V.autoA11y && (o ? i["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(wt()) : (i["aria-hidden"] = "true", 
        i.focusable = "false")), i), p = (s = t.getAttribute("data-fa-mask")) ? Ut(s.split(" ").map(function(t) {
            return t.trim();
        })) : Wt();
        return {
            iconName: l,
            title: t.getAttribute("title"),
            prefix: f,
            transform: d,
            symbol: h,
            mask: p,
            extra: {
                classes: u,
                styles: m,
                attributes: g
            }
        };
    }
    function cn(t) {
        this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = new Error().stack;
    }
    (cn.prototype = Object.create(Error.prototype)).constructor = cn;
    var ln = {
        fill: "currentColor"
    }, fn = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
    }, un = {
        tag: "path",
        attributes: W({}, ln, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
    }, mn = W({}, fn, {
        attributeName: "opacity"
    }), dn = {
        tag: "g",
        children: [ un, {
            tag: "circle",
            attributes: W({}, ln, {
                cx: "256",
                cy: "364",
                r: "28"
            }),
            children: [ {
                tag: "animate",
                attributes: W({}, fn, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: W({}, mn, {
                    values: "1;0;1;1;0;1;"
                })
            } ]
        }, {
            tag: "path",
            attributes: W({}, ln, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }),
            children: [ {
                tag: "animate",
                attributes: W({}, mn, {
                    values: "1;0;0;0;0;1;"
                })
            } ]
        }, {
            tag: "path",
            attributes: W({}, ln, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }),
            children: [ {
                tag: "animate",
                attributes: W({}, mn, {
                    values: "0;0;1;1;0;0;"
                })
            } ]
        } ]
    }, hn = X.styles;
    function gn(r, i) {
        return new gt(function(t, n) {
            var e = {
                found: !1,
                width: 512,
                height: 512,
                icon: dn
            };
            if (r && i && hn[i] && hn[i][r]) {
                var a = hn[i][r];
                return t(e = {
                    found: !0,
                    width: a[0],
                    height: a[1],
                    icon: {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: a.slice(4)[0]
                        }
                    }
                });
            }
            r && i && !V.showMissingIcons ? n(new cn("Icon is missing for prefix ".concat(i, " with icon name ").concat(r))) : t(e);
        });
    }
    var pn = X.styles;
    function vn(t) {
        var i, n, o, s, c, l, f, e, u, a = sn(t);
        return ~a.extra.classes.indexOf(j) ? function(t, n) {
            var e = n.title, a = n.transform, r = n.extra, i = null, o = null;
            if (k) {
                var s = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
                i = c.width / s, o = c.height / s;
            }
            return V.autoA11y && !e && (r.attributes["aria-hidden"] = "true"), gt.resolve([ t, Et({
                content: t.innerHTML,
                width: i,
                height: o,
                transform: a,
                title: e,
                extra: r,
                watchable: !0
            }) ]);
        }(t, a) : (i = t, o = (n = a).iconName, s = n.title, c = n.prefix, l = n.transform, 
        f = n.symbol, e = n.mask, u = n.extra, new gt(function(r, t) {
            gt.all([ gn(o, c), gn(e.iconName, e.prefix) ]).then(function(t) {
                var n = m(t, 2), e = n[0], a = n[1];
                r([ i, Ot({
                    icons: {
                        main: e,
                        mask: a
                    },
                    prefix: c,
                    iconName: o,
                    transform: l,
                    symbol: f,
                    mask: a,
                    title: s,
                    extra: u,
                    watchable: !0
                }) ]);
            });
        }));
    }
    function bn(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (p) {
            var n = g.documentElement.classList, a = function(t) {
                return n.add("".concat(N, "-").concat(t));
            }, r = function(t) {
                return n.remove("".concat(N, "-").concat(t));
            }, i = V.autoFetchSvg ? Object.keys(O) : Object.keys(pn), o = [ ".".concat(j, ":not([").concat(U, "])") ].concat(i.map(function(t) {
                return ".".concat(t, ":not([").concat(U, "])");
            })).join(", ");
            if (0 !== o.length) {
                var s = xt(t.querySelectorAll(o));
                if (0 < s.length) {
                    a("pending"), r("complete");
                    var c = _t.begin("onTree"), l = s.reduce(function(t, n) {
                        try {
                            var e = vn(n);
                            e && t.push(e);
                        } catch (t) {
                            z || t instanceof cn && console.error(t);
                        }
                        return t;
                    }, []);
                    return new gt(function(n, t) {
                        gt.all(l).then(function(t) {
                            Zt(t, function() {
                                a("active"), a("complete"), r("pending"), "function" == typeof e && e(), c(), n();
                            });
                        }).catch(function() {
                            c(), t();
                        });
                    });
                }
            }
        }
    }
    function yn(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        vn(t).then(function(t) {
            t && Zt([ t ], n);
        });
    }
    function wn(u, m) {
        var d = "".concat(x).concat(m.replace(":", "-"));
        return new gt(function(a, t) {
            if (null !== u.getAttribute(d)) return a();
            var n = xt(u.children).filter(function(t) {
                return t.getAttribute(w) === m;
            })[0], e = h.getComputedStyle(u, m), r = e.getPropertyValue("font-family").match(P), i = e.getPropertyValue("font-weight");
            if (n && !r) return u.removeChild(n), a();
            if (r) {
                var o = e.getPropertyValue("content"), s = ~[ "Light", "Regular", "Solid", "Brands" ].indexOf(r[1]) ? E[r[1].toLowerCase()] : L[i], c = Yt(s, an(3 === o.length ? o.substr(1, 1) : o));
                if (n && n.getAttribute(C) === s && n.getAttribute(M) === c) a(); else {
                    u.setAttribute(d, c), n && u.removeChild(n);
                    var l = {
                        iconName: null,
                        title: null,
                        prefix: null,
                        transform: vt,
                        symbol: !1,
                        mask: null,
                        extra: {
                            classes: [],
                            styles: {},
                            attributes: {}
                        }
                    }, f = l.extra;
                    f.attributes[w] = m, gn(c, s).then(function(t) {
                        var n = Ot(W({}, l, {
                            icons: {
                                main: t,
                                mask: Wt()
                            },
                            prefix: s,
                            iconName: c,
                            extra: f,
                            watchable: !0
                        })), e = g.createElement("svg");
                        ":before" === m ? u.insertBefore(e, u.firstChild) : u.appendChild(e), e.outerHTML = n.map(function(t) {
                            return Kt(t);
                        }).join("\n"), u.removeAttribute(d), a();
                    }).catch(t);
                }
            } else a();
        });
    }
    function xn(t) {
        return gt.all([ wn(t, ":before"), wn(t, ":after") ]);
    }
    function kn(t) {
        return !(t.parentNode === document.head || ~S.indexOf(t.tagName.toUpperCase()) || t.getAttribute(w) || t.parentNode && "svg" === t.parentNode.tagName);
    }
    function An(r) {
        if (p) return new gt(function(t, n) {
            var e = xt(r.querySelectorAll("*")).filter(kn).map(xn), a = _t.begin("searchPseudoElements");
            $t = !0, gt.all(e).then(function() {
                a(), tn(), t();
            }).catch(function() {
                a(), tn(), n();
            });
        });
    }
    var Cn = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}';
    function Mn() {
        var t = b, n = y, e = V.familyPrefix, a = V.replacementClass, r = Cn;
        if (e !== t || a !== n) {
            var i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\.".concat(n), "g");
            r = r.replace(i, ".".concat(e, "-")).replace(o, ".".concat(a));
        }
        return r;
    }
    function Nn(t) {
        return {
            found: !0,
            width: t[0],
            height: t[1],
            icon: {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: t.slice(4)[0]
                }
            }
        };
    }
    function Sn() {
        V.autoAddCss && !Pn && (bt(Mn()), Pn = !0);
    }
    function zn(n, t) {
        return Object.defineProperty(n, "abstract", {
            get: t
        }), Object.defineProperty(n, "html", {
            get: function() {
                return n.abstract.map(function(t) {
                    return Kt(t);
                });
            }
        }), Object.defineProperty(n, "node", {
            get: function() {
                if (p) {
                    var t = g.createElement("div");
                    return t.innerHTML = n.html, t.children;
                }
            }
        }), n;
    }
    function On(t) {
        var n = t.prefix, e = void 0 === n ? "fa" : n, a = t.iconName;
        if (a) return Vt(jn.definitions, e, a) || Vt(X.styles, e, a);
    }
    var En, jn = new (function() {
        function t() {
            !function(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.definitions = {};
        }
        var n, e, a;
        return n = t, (e = [ {
            key: "add",
            value: function() {
                for (var n = this, t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
                var r = e.reduce(this._pullDefinitions, {});
                Object.keys(r).forEach(function(t) {
                    n.definitions[t] = W({}, n.definitions[t] || {}, r[t]), function t(n, a) {
                        var e = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks, r = void 0 !== e && e, i = Object.keys(a).reduce(function(t, n) {
                            var e = a[n];
                            return e.icon ? t[e.iconName] = e.icon : t[n] = e, t;
                        }, {});
                        "function" != typeof X.hooks.addPack || r ? X.styles[n] = W({}, X.styles[n] || {}, i) : X.hooks.addPack(n, i), 
                        "fas" === n && t("fa", a);
                    }(t, r[t]), Bt();
                });
            }
        }, {
            key: "reset",
            value: function() {
                this.definitions = {};
            }
        }, {
            key: "_pullDefinitions",
            value: function(i, t) {
                var o = t.prefix && t.iconName && t.icon ? {
                    0: t
                } : t;
                return Object.keys(o).map(function(t) {
                    var n = o[t], e = n.prefix, a = n.iconName, r = n.icon;
                    i[e] || (i[e] = {}), i[e][a] = r;
                }), i;
            }
        } ]) && i(n.prototype, e), a && i(n, a), t;
    }())(), Pn = !1, Ln = {
        i2svg: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if (p) {
                Sn();
                var n = t.node, e = void 0 === n ? g : n, a = t.callback, r = void 0 === a ? function() {} : a;
                return V.searchPseudoElements && An(e), bn(e, r);
            }
            return gt.reject("Operation requires a DOM of some kind.");
        },
        css: Mn,
        insertCss: function() {
            Pn || (bt(Mn()), Pn = !0);
        },
        watch: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = t.autoReplaceSvgRoot, e = t.observeMutationsRoot;
            !1 === V.autoReplaceSvg && (V.autoReplaceSvg = !0), V.observeMutations = !0, q(function() {
                In({
                    autoReplaceSvgRoot: n
                }), en({
                    treeCallback: bn,
                    nodeCallback: yn,
                    pseudoElementsCallback: An,
                    observeMutationsRoot: e
                });
            });
        }
    }, Tn = (En = function(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = n.transform, a = void 0 === e ? vt : e, r = n.symbol, i = void 0 !== r && r, o = n.mask, s = void 0 === o ? null : o, c = n.title, l = void 0 === c ? null : c, f = n.classes, u = void 0 === f ? [] : f, m = n.attributes, d = void 0 === m ? {} : m, h = n.styles, g = void 0 === h ? {} : h;
        if (t) {
            var p = t.prefix, v = t.iconName, b = t.icon;
            return zn(W({
                type: "icon"
            }, t), function() {
                return Sn(), V.autoA11y && (l ? d["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(wt()) : (d["aria-hidden"] = "true", 
                d.focusable = "false")), Ot({
                    icons: {
                        main: Nn(b),
                        mask: s ? Nn(s.icon) : {
                            found: !1,
                            width: null,
                            height: null,
                            icon: {}
                        }
                    },
                    prefix: p,
                    iconName: v,
                    transform: W({}, vt, a),
                    symbol: i,
                    title: l,
                    extra: {
                        attributes: d,
                        styles: g,
                        classes: u
                    }
                });
            });
        }
    }, function(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = (t || {}).icon ? t : On(t || {}), a = n.mask;
        return a && (a = (a || {}).icon ? a : On(a || {})), En(e, W({}, n, {
            mask: a
        }));
    }), _n = {
        noAuto: function() {
            V.autoReplaceSvg = !1, V.observeMutations = !1, nn && nn.disconnect();
        },
        config: V,
        dom: Ln,
        library: jn,
        parse: {
            transform: function(t) {
                return on(t);
            }
        },
        findIconDefinition: On,
        icon: Tn,
        text: function(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = n.transform, a = void 0 === e ? vt : e, r = n.title, i = void 0 === r ? null : r, o = n.classes, s = void 0 === o ? [] : o, c = n.attributes, l = void 0 === c ? {} : c, f = n.styles, u = void 0 === f ? {} : f;
            return zn({
                type: "text",
                content: t
            }, function() {
                return Sn(), Et({
                    content: t,
                    transform: W({}, vt, a),
                    title: i,
                    extra: {
                        attributes: l,
                        styles: u,
                        classes: [ "".concat(V.familyPrefix, "-layers-text") ].concat(d(s))
                    }
                });
            });
        },
        counter: function(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = n.title, a = void 0 === e ? null : e, r = n.classes, i = void 0 === r ? [] : r, o = n.attributes, s = void 0 === o ? {} : o, c = n.styles, l = void 0 === c ? {} : c;
            return zn({
                type: "counter",
                content: t
            }, function() {
                return Sn(), function(t) {
                    var n = t.content, e = t.title, a = t.extra, r = W({}, a.attributes, e ? {
                        title: e
                    } : {}, {
                        class: a.classes.join(" ")
                    }), i = Mt(a.styles);
                    0 < i.length && (r.style = i);
                    var o = [];
                    return o.push({
                        tag: "span",
                        attributes: r,
                        children: [ n ]
                    }), e && o.push({
                        tag: "span",
                        attributes: {
                            class: "sr-only"
                        },
                        children: [ e ]
                    }), o;
                }({
                    content: t.toString(),
                    title: a,
                    extra: {
                        attributes: s,
                        styles: l,
                        classes: [ "".concat(V.familyPrefix, "-layers-counter") ].concat(d(i))
                    }
                });
            });
        },
        layer: function(t) {
            return zn({
                type: "layer"
            }, function() {
                Sn();
                var n = [];
                return t(function(t) {
                    Array.isArray(t) ? t.map(function(t) {
                        n = n.concat(t.abstract);
                    }) : n = n.concat(t.abstract);
                }), [ {
                    tag: "span",
                    attributes: {
                        class: "".concat(V.familyPrefix, "-layers")
                    },
                    children: n
                } ];
            });
        },
        toHtml: Kt
    }, In = function() {
        var t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot, n = void 0 === t ? g : t;
        (0 < Object.keys(X.styles).length || V.autoFetchSvg) && p && V.autoReplaceSvg && _n.dom.i2svg({
            node: n
        });
    };
    !function(t) {
        try {
            t();
        } catch (t) {
            if (!z) throw t;
        }
    }(function() {
        u && (h.FontAwesome || (h.FontAwesome = _n), q(function() {
            In(), en({
                treeCallback: bn,
                nodeCallback: yn,
                pseudoElementsCallback: An
            });
        })), X.hooks = W({}, X.hooks, {
            addPack: function(t, n) {
                X.styles[t] = W({}, X.styles[t] || {}, n), Bt(), In();
            },
            addShims: function(t) {
                var n;
                (n = X.shims).push.apply(n, d(t)), Bt(), In();
            }
        });
    });
}();
var testMoviesApp = angular.module('testMoviesApp', ['ngRoute'])
testMoviesApp.run(['$rootScope', '$location', 'SessionStorage', function($rootScope, $location, SessionStorage) {
    $rootScope.apiKey = 'f12ba140';
    $rootScope.apiMoviesURL = 'http://www.omdbapi.com/?apikey=' + $rootScope.apiKey + '&';
    $rootScope.apiSearchURL = 'http://img.omdbapi.com/?apikey=' + $rootScope.apiKey + '&';
    $rootScope.movies = [];
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (Object.keys(SessionStorage.getUser()).length !== 0) {
            $rootScope.loggedUser = SessionStorage.getUser();
        };
        if ($location.path() !== '/login' && Object.keys(SessionStorage.getUser()).length === 0) {
            alert('You need to be logged in to can enter here');
            $location.path('/login');
        }
    });
}])
.config(function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('LoginService');
    $routeProvider
        .when('/login', { 
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            templateUrl: 'login.html'
        })
        .when('/movies', {
            controller: 'MoviesCtrl',
            controllerAs: 'vm',
            templateUrl: 'movies.html'
        })
        .when('/detail/:id', {
            controller: 'DetailCtrl',
            controllerAs: 'vm',
            templateUrl: 'detail.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
testMoviesApp.factory('LocalStorage', ['$window', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
            },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        },
        setArray: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getArray: function(key) {
            return JSON.parse($window.localStorage[key] || '[]');
        },
        clean: function (key) {
            $window.localStorage[key] = JSON.stringify([]);
        }
    }
}])
.factory('SessionStorage', ['$window', 'LocalStorage', function($window, $location, LocalStorage) {
    return {
        setUser: function(user) {
            $window.sessionStorage['LoggedUser'] = JSON.stringify(user);
        },
        getUser: function() {
            return JSON.parse($window.sessionStorage['LoggedUser'] || '{}');
        },
        cleanSession: function() {
            $window.sessionStorage.removeItem('LoggedUser');
            console.log('Session closed');
        }
    };
}])
.factory('Global', ['LocalStorage', 'SessionStorage', '$rootScope', '$location', function(LocalStorage, SessionStorage, $rootScope, $location) {
    return {
        getMovieById: function (imdbID) {
            var favs = LocalStorage.getArray('movies-favourites');
            return favs.find(x => x.imdbID === imdbID); 
        },
        getNumFavs: function() {
            var favs = LocalStorage.getArray('movies-favourites');
            return favs.length;
        },
        getFavs: function() {
            return LocalStorage.getArray('movies-favourites');
        },
        cleanFavs: function() {
            if (confirm('Are you sure?')) {
                LocalStorage.clean('movies-favourites');
                $rootScope.$broadcast('cleanFavs', {
                    numFavs: 0
                });
            }
        },
        addToFav: function(movie) {
            var favs = LocalStorage.getArray('movies-favourites');
            favs.push(movie);
            LocalStorage.setArray('movies-favourites', favs);
            console.log(movie.Title + ' was added to favs (' + favs.length + ' total)');
            $rootScope.$broadcast('addFav', {
                favs: favs
            });
        },
        removeToFav: function(movie) {
            var favs = LocalStorage.getArray('movies-favourites');
            favs = favs.filter(item => item.imdbID !== movie.imdbID);
            LocalStorage.setArray('movies-favourites', favs);
            console.log(movie.Title + ' was removed to favs (' + favs.length + ' total)');
            $rootScope.$broadcast('removeFav', {
                favs: favs
            });
        },
        cleanUserSession: function() {
            SessionStorage.cleanSession();
            LocalStorage.clean('movies-favourites');
            $rootScope.loggedUser = null;
            $location.path('/login');
        }
    }
}])
.factory("LoginService", ['$timeout', function ($timeout) {
    var service = {};
    service.Login = function (username, password, callback) {
        $timeout(function(){
            var response = { success: username === 'user1' && password === 'gfi' };
            if(!response.success) {
                response.message = 'Username or password is incorrect';
            }else{
                response.message = 'Login ok';
                response.user = {
                    username,
                    password
                };
            }
            callback(response);
        }, 1000);
    };
    return service;
}])

testMoviesApp.controller('NavigationCtrl', ['$scope', 'Global', function ($scope, Global) {
    $scope.numFavs = Global.getNumFavs();
    $scope.cleanFavs = Global.cleanFavs;
    $scope.logout = function() {
        if (confirm('Are you sure to close session? You will lose your favourites movies saved!')) {
            Global.cleanUserSession();
        }
    };
    $scope.$on('cleanFavs', function(e, opt) {
        $scope.numFavs = opt.numFavs;
    });
    $scope.$on('addFav', function(e, opt) {
        $scope.numFavs = opt.favs.length;
    });
    $scope.$on('removeFav', function(e, opt) {
        $scope.numFavs = opt.favs.length;
    });
}])
.controller('FavsCtrl', ['$scope', 'Global', function ($scope, Global) {
    $scope.favs = Global.getFavs();
    $scope.$on('cleanFavs', function(e, opt) {
        $scope.favs = [];
    });
    $scope.$on('addFav', function(e, opt) {
        $scope.favs = opt.favs;
    });
    $scope.$on('removeFav', function(e, opt) {
        $scope.favs = opt.favs;
    });
}])
.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'LoginService', 'SessionStorage', function($scope, $rootScope, $location, LoginService, SessionStorage) {
    $scope.loading = false;
    $scope.username = 'user1';
    $scope.password = 'gfi';
    $scope.login = function () {
        $scope.error = '';
        $scope.loading = true;
        console.log('Logging in with', $scope.username, $scope.password);
        LoginService.Login($scope.username, $scope.password, function(response) {
            if(response.success) {
                $rootScope.loggedUser = response.user;
                SessionStorage.setUser($rootScope.loggedUser);
                $location.path('/movies');
            } else {
                $scope.error = response.message;
                $scope.loading = false;
            }
        });
    };
}])
.controller('MoviesCtrl', ['$scope', '$rootScope', '$http', 'Global', function($scope, $rootScope, $http, Global) {
    $scope.totalResults = 0;
    $scope.searching = false;
    $scope.error = '';
    $scope.textToSearch = '';
    
    $scope.searchMovies = function() {
        $scope.searching = true;
        $rootScope.movies = [];
        $scope.totalResults = 0;
        
        var requestUrl = $rootScope.apiMoviesURL + 's=' + $scope.textToSearch;
        console.log('Get Movies URL', requestUrl);
        $http.get(requestUrl)
            .success(function(data) {
                $scope.searching = false;
                if (data.Response === 'True') {
                    $scope.totalResults = data.totalResults;
                    $rootScope.movies = data.Search;
                    // console.log($rootScope.movies);
                }else{
                    $scope.error = 'There was an error searching movies';
                }
            })
            .error(function(err) {
                console.log(err);
                $scope.searching = false;
                $scope.error = 'There was an error searching movies';
                $rootScope.movies = [];
            });
    };
    $scope.enterPressed = function(keyEvent) {
        if (keyEvent.which === 13) {
            $scope.searchMovies();
        }
    }
}])
.controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', '$http', 'Global', 'LocalStorage', function($scope, $rootScope, $routeParams, $http, Global, LocalStorage) {
    $scope.movie = {};
    $scope.addToFav = Global.addToFav;
    $scope.searching = true;
    $scope.isAdded;
    $scope.init = function() {  
        $scope.movie = Global.getMovieById($routeParams.id);
        if ($scope.movie === undefined) {
            $scope.isAdded = false;
            var requestUrl = $rootScope.apiMoviesURL + 'i=' + $routeParams.id;
            console.log('Get Movie Info URL', requestUrl);
            $http.get(requestUrl)
                .success(function(data) {
                    $scope.searching = false;
                    if (data.Response === 'True') {
                        $scope.movie = data;
                    }else{
                        $scope.error = 'There was an error searching movies';
                    }
                })
                .error(function(err) {
                    console.log(err);
                    $scope.searching = false;
                    $scope.error = 'There was an error searching movies';
                    $rootScope.movies = [];
                });
        }else{
            $scope.isAdded = true;
            $scope.searching = false;
        }
    }

    $scope.addToFav = function() {
        Global.addToFav($scope.movie);
        $scope.isAdded = true;
    } 

    $scope.removeToFav = function() {
        Global.removeToFav($scope.movie);
        $scope.isAdded = false;
    } 

}]);