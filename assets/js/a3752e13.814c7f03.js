/*! For license information please see a3752e13.814c7f03.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[414672],{831021:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(785893),o=a(511151);const s={title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},r=void 0,i={permalink:"/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport",source:"@site/blog/2020-07-01-how-to-enable-authentication-in-backstage-using-passport.mdx",title:"How to enable authentication in Backstage using Passport",description:"auth-landing-page",date:"2020-07-01T00:00:00.000Z",tags:[],readingTime:2.02,hasTruncateMarker:!0,authors:[{name:"Lee Mills, Spotify",url:"https://github.com/leemills83",imageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"}],frontMatter:{title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},unlisted:!1,prevItem:{title:"Announcing Backstage Software Templates",permalink:"/blog/2020/08/05/announcing-backstage-software-templates"},nextItem:{title:"Backstage Service Catalog released in alpha",permalink:"/blog/2020/06/22/backstage-service-catalog-alpha"}},c={authorsImageUrls:[void 0]},u=[];function l(t){const e={a:"a",img:"img",p:"p",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"auth-landing-page",src:a(634689).Z+"",width:"1548",height:"622"})}),"\n",(0,n.jsxs)(e.p,{children:["Getting authentication right is important. It helps keep your platform safe, it\u2019s one of the first things users will interact with, and there are many different authentication providers to support. To this end, we chose to use ",(0,n.jsx)(e.a,{href:"http://www.passportjs.org/",children:"Passport"})," to provide an easy-to-use, out-of-the-box experience that can be extended to your own, pre-existing authentication providers (known as strategies). The Auth APIs in Backstage serve two purposes: identify the user and provide a way for plugins to request access to third-party services on behalf of the user. We\u2019ve already implemented Google and GitHub authentication to provide examples and to get you started."]})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},675251:(t,e,a)=>{var n=a(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,a){var n,s={},u=null,l=null;for(n in void 0!==a&&(u=""+a),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(l=e.ref),e)r.call(e,n)&&!c.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===s[n]&&(s[n]=e[n]);return{$$typeof:o,type:t,key:u,ref:l,props:s,_owner:i.current}}e.Fragment=s,e.jsx=u,e.jsxs=u},785893:(t,e,a)=>{t.exports=a(675251)},634689:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/auth-landing-36c55882496255abe67830e1ea6db2ea.png"},511151:(t,e,a)=>{a.d(e,{Z:()=>i,a:()=>r});var n=a(667294);const o={},s=n.createContext(o);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);