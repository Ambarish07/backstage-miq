/*! For license information please see af81b72f.580309a7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[714158],{187113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>c});var r=n(824246),o=n(511151);const u={id:"index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins"},i=void 0,a={id:"plugins/index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins",source:"@site/../docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/docs/plugins/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins"},sidebar:"docs",previous:{title:"Org Data",permalink:"/docs/integrations/ldap/org"},next:{title:"Existing plugins",permalink:"/docs/plugins/existing-plugins"}},s={},c=[{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"Suggesting a plugin",id:"suggesting-a-plugin",level:2},{value:"Integrate into the Software Catalog",id:"integrate-into-the-software-catalog",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backstage is a single-page application composed of a set of plugins."}),"\n",(0,r.jsxs)(t.p,{children:["Our goal for the plugin ecosystem is that the definition of a plugin is flexible\nenough to allow you to expose pretty much any kind of infrastructure or software\ndevelopment tool as a plugin in Backstage. By following strong\n",(0,r.jsx)(t.a,{href:"/docs/dls/design",children:"design guidelines"})," we ensure the overall user experience\nstays consistent between plugins."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"plugin",src:n(172961).Z+"",width:"1552",height:"989"})}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["To create a plugin, follow the steps outlined ",(0,r.jsx)(t.a,{href:"/docs/plugins/create-a-plugin",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"suggesting-a-plugin",children:"Suggesting a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["If you start developing a plugin that you aim to release as open source, we\nsuggest that you create a\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/issues/new/choose",children:"new Issue in the community plugins repo"}),".\nThis helps the community know what plugins are in development."]}),"\n",(0,r.jsx)(t.p,{children:"You can also use this process if you have an idea for a good plugin but you hope\nthat someone else will pick up the work."}),"\n",(0,r.jsx)(t.h2,{id:"integrate-into-the-software-catalog",children:"Integrate into the Software Catalog"}),"\n",(0,r.jsxs)(t.p,{children:['If your plugin isn\'t supposed to live as a standalone page, but rather needs to\nbe presented as a part of a Software Catalog (e.g. a separate tab or a card on\nan "Overview" tab), then check out\n',(0,r.jsx)(t.a,{href:"/docs/plugins/integrating-plugin-into-software-catalog",children:"the instruction"})," on how to do it."]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},172961:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/my-plugin_screenshot-f22dc7520c6896fbaeeff8f717227c1b.png"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,u={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:u,_owner:a.current}}t.Fragment=u,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function v(){}function _(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=_.prototype=new v;b.constructor=_,y(b,m.prototype),b.isPureReactComponent=!0;var w=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,u={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,o)&&!S.hasOwnProperty(o)&&(u[o]=t[o]);var s=arguments.length-2;if(1===s)u.children=r;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];u.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:a,props:u,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===u?"."+R(s,0):u,w(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),$(i,t,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,u=""===u?".":u+":",w(e))for(var c=0;c<e.length;c++){var l=u+R(a=e[c],c);s+=$(a,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)s+=$(a=a.value,t,o,l=u+R(a,c++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function I(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},D={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:D,ReactCurrentOwner:k};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=i,t.PureComponent=_,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)x.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:n,type:e.type,key:u,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(667294);const o={},u=r.createContext(o);function i(e){const t=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(u.Provider,{value:t},e.children)}}}]);