/*! For license information please see ddd1c732.6c31bd7a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[465275],{517048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(785893),i=n(511151);const s={title:"FYI \ud83d\udce3 The Plugin Analytics API",author:"Eric Peterson, Spotify",authorURL:"https://github.com/iamEAP",authorImageURL:"https://avatars.githubusercontent.com/u/3496491?v=4"},o=void 0,r={permalink:"/blog/2022/09/08/fyi-plugin-analytics-api",source:"@site/blog/2022-09-08-fyi-plugin-analytics-api.mdx",title:"FYI \ud83d\udce3 The Plugin Analytics API",description:"TL;DR If you didn't know, now you know: the Backstage plugin analytics API is here to help you understand how developers in your organization are using Backstage.",date:"2022-09-08T00:00:00.000Z",tags:[],readingTime:3.225,hasTruncateMarker:!0,authors:[{name:"Eric Peterson, Spotify",url:"https://github.com/iamEAP",imageURL:"https://avatars.githubusercontent.com/u/3496491?v=4"}],frontMatter:{title:"FYI \ud83d\udce3 The Plugin Analytics API",author:"Eric Peterson, Spotify",authorURL:"https://github.com/iamEAP",authorImageURL:"https://avatars.githubusercontent.com/u/3496491?v=4"},unlisted:!1,prevItem:{title:"ICYMI: BackstageCon & KubeCon NA 2022 Recap",permalink:"/blog/2022/10/28/backstagecon-kubecon-2022"},nextItem:{title:"Backstage Security Audit & Updates",permalink:"/blog/2022/08/23/backstage-security-audit"}},c={authorsImageUrls:[void 0]},l=[{value:"What is the plugin analytics API?",id:"what-is-the-plugin-analytics-api",level:2},{value:"Start collecting data",id:"start-collecting-data",level:2},{value:"Instrument plugins",id:"instrument-plugins",level:2},{value:"Get involved",id:"get-involved",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TL;DR"})," If you didn't know, now you know: the Backstage plugin analytics API is here to help you understand how developers in your organization are using Backstage."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The Plugin Analytics API",src:n(712002).Z+"",width:"1200",height:"630"})}),"\n","\n",(0,a.jsx)(t.h2,{id:"what-is-the-plugin-analytics-api",children:"What is the plugin analytics API?"}),"\n",(0,a.jsxs)(t.p,{children:["The plugin analytics API is a ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/api/utility-apis",children:"utility api"})," available by default in every Backstage instance, intended to bridge the gap between the needs of Backstage integrators and plugin developers. While Backstage integrators want visibility into the plugins they\u2019ve installed, they lack the power to instrument those plugins. And although plugin developers have the power to instrument plugins, they can\u2019t do so without a single, vendor-agnostic way to track events. Enter: the plugin analytics API."]}),"\n",(0,a.jsx)(t.p,{children:"While \u201canalytics\u201d as a concept can be broad, the goal of the API is narrowly focused: empower those deploying Backstage to understand usage of their instance. The plugin analytics API isn\u2019t designed to solve for observability use-cases like tracing, logging, performance monitoring, error metrics, or alerting. Rather, the API is designed to capture and quantify real user interactions, which can form the basis for metrics like daily active users, top plugins, and more."}),"\n",(0,a.jsx)(t.h2,{id:"start-collecting-data",children:"Start collecting data"}),"\n",(0,a.jsxs)(t.p,{children:["Backstage core (and a few other plugins) are already instrumented with ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/plugins/analytics#key-events",children:"key events"})," that are ready for you to start collecting and analyzing."]}),"\n",(0,a.jsxs)(t.p,{children:["The simplest way to get started is to use one of the ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/plugins/analytics#supported-analytics-tools",children:"supported analytics tools"})," and install its provided API implementation like you would any other utility API. For example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"// packages/app/src/apis.ts\nimport {\n  analyticsApiRef,\n  configApiRef,\n  identityApiRef,\n} from '@backstage/core-plugin-api';\nimport { GoogleAnalytics } from '@backstage/plugin-analytics-module-ga';\n\nexport const apis: AnyApiFactory[] = [\n  // Instantiate and register the GA Analytics API Implementation.\n  createApiFactory({\n    api: analyticsApiRef,\n    deps: { configApi: configApiRef, identityApi: identityApiRef },\n    factory: ({ configApi, identityApi }) =>\n      GoogleAnalytics.fromConfig(configApi, {\n        identityApi,\n      }),\n  }),\n];\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If your chosen analytics tool doesn\u2019t have an integration yet, you can write a custom integration by ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/plugins/analytics#writing-integrations",children:"following these instructions"}),". (And if you\u2019re integrating with a publicly available analytics service, as opposed to a custom in-house system, why not ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/plugins/create-a-plugin",children:"consider contributing it back to the community"}),"?)"]}),"\n",(0,a.jsx)(t.h2,{id:"instrument-plugins",children:"Instrument plugins"}),"\n",(0,a.jsx)(t.p,{children:"While some key events are already instrumented, there may be important actions in open source plugins that are un-instrumented, not to mention in your custom, InnerSource plugins. Luckily, the plugin analytics API can be leveraged by open source and InnerSource plugins all the same."}),"\n",(0,a.jsxs)(t.p,{children:["To capture an event, invoke the ",(0,a.jsx)(t.code,{children:"useAnalytics()"})," react hook and call the function it returns when the user performs the action you wish to track (e.g. merging a pull request):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useAnalytics } from '@backstage/core-plugin-api';\n\nconst analytics = useAnalytics();\nanalytics.captureEvent('merge', pullRequestName);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Don\u2019t worry about having to stuff additional levels of detail into just the event action and subject, you can provide extra dimensional data on the ",(0,a.jsx)(t.code,{children:"attributes"})," property, as well as a primary metric on the ",(0,a.jsx)(t.code,{children:"value"})," property, like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"analytics.captureEvent('merge', pullRequestName, {\n  value: pullRequestAgeInMinutes,\n  attributes: {\n    org: orgName,\n    repo: repoName,\n  },\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In situations where your plugin is tracking multiple events and you want all of those events to share common dimensional data, you can use the ",(0,a.jsx)(t.code,{children:"<AnalyticsContext>"}),". Every event captured in child components underneath this context automatically inherits the values you set:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { AnalyticsContext } from '@backstage/core-plugin-api';\n\n<AnalyticsContext attributes={{ vcsProvider: 'github' }}>\n  {children}\n</AnalyticsContext\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In fact, Backstage core uses an ",(0,a.jsx)(t.code,{children:"<AnalyticsContext>"})," to automatically decorate every event with a corresponding plugin ID and an extension name in order to facilitate plugin-level analysis."]}),"\n",(0,a.jsxs)(t.p,{children:["While the above should be enough to get you going, don\u2019t forget to check out ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/plugins/analytics#capturing-events",children:"the complete guide to event capture"}),", which covers event naming considerations, testing, and more."]}),"\n",(0,a.jsx)(t.h2,{id:"get-involved",children:"Get involved"}),"\n",(0,a.jsxs)(t.p,{children:["If you didn\u2019t know, now you know! If you\u2019re passionate about data and want to help push the Backstage analytics ecosystem forward, join us in the ",(0,a.jsx)(t.a,{href:"https://discord.com/channels/687207715902193673/1007303347914690610",children:"#analytics channel on discord"}),", contribute ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=plugin&template=plugin_template.md&title=%5BAnalytics+Module%5D+THE+ANALYTICS+TOOL+TO+INTEGRATE",children:"integration ideas"}),", or ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=enhancement&template=feature_template.md&title=%5BAnalytics%20Event%5D:%20THE+EVENT+TO+CAPTURE",children:"suggest a new analytics event"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},675251:(e,t,n)=>{var a=n(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,s={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:r.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},712002:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/analytics-api-fyi-c26c23b9aae00e45ee0cf4a4661c806c.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(667294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);