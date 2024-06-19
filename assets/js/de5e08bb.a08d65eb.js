/*! For license information please see de5e08bb.a08d65eb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[581707],{619243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(824246),i=n(511151);const o={id:"org--old",title:"GitHub Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from a GitHub organization into Backstage"},a=void 0,s={id:"integrations/github/org--old",title:"GitHub Organizational Data",description:"Importing users and groups from a GitHub organization into Backstage",source:"@site/../docs/integrations/github/org--old.md",sourceDirName:"integrations/github",slug:"/integrations/github/org--old",permalink:"/docs/integrations/github/org--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/org--old.md",tags:[],version:"current",frontMatter:{id:"org--old",title:"GitHub Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from a GitHub organization into Backstage"}},c={},l=[{value:"Installation without Events Support",id:"installation-without-events-support",level:2},{value:"Installation with Events Support",id:"installation-with-events-support",level:2},{value:"Legacy Backend System",id:"legacy-backend-system",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Custom Transformers",id:"custom-transformers",level:3},{value:"Resolving GitHub users via organization email",id:"resolving-github-users-via-organization-email",level:3},{value:"Using a Processor instead of a Provider",id:"using-a-processor-instead-of-a-provider",level:2},{value:"Processor Installation",id:"processor-installation",level:3},{value:"Processor Configuration",id:"processor-configuration",level:3}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This documentation is written for the old backend which has been replaced by ",(0,r.jsx)(t.a,{href:"/docs/backend-system/",children:"the new backend system"}),", being the default since Backstage ",(0,r.jsx)(t.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new backend system, you may want to read ",(0,r.jsx)(t.a,{href:"/docs/integrations/github/org",children:"its own article"})," instead.Otherwise, ",(0,r.jsx)(t.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,r.jsxs)(t.p,{children:["The Backstage catalog can be set up to ingest organizational data - users and\nteams - directly from an organization in GitHub or GitHub Enterprise. The result\nis a hierarchy of\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,r.jsx)(t.code,{children:"User"})})," and\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,r.jsx)(t.code,{children:"Group"})})," kind\nentities that mirror your org setup."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: This adds ",(0,r.jsx)(t.code,{children:"User"})," and ",(0,r.jsx)(t.code,{children:"Group"})," entities to the catalog, but does not\nprovide authentication. See the\n",(0,r.jsx)(t.a,{href:"/docs/auth/github/provider",children:"GitHub auth provider"})," for that."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation-without-events-support",children:"Installation without Events Support"}),"\n",(0,r.jsx)(t.p,{children:"This guide will use the Entity Provider method. If you for some reason prefer\nthe Processor method (not recommended), it is described separately below."}),"\n",(0,r.jsxs)(t.p,{children:["The provider is not installed by default, therefore you have to add a dependency\nto ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-github"})," to your backend package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-github\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: When configuring to use a Provider instead of a Processor you do not\nneed to add a ",(0,r.jsx)(t.em,{children:"location"})," pointing to your GitHub server/organization"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Update the catalog plugin initialization in your backend to add the provider and\nschedule it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GithubOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The org URL below needs to match a configured integrations.github entry\n  // specified in your app-config.\n  builder.addEntityProvider(\n    GithubOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      orgUrl: 'https://github.com/backstage',\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, if you wish to ingest data from multiple GitHub organizations you can use\nthe ",(0,r.jsx)(t.code,{children:"GithubMultiOrgEntityProvider"})," instead. Note that by default, this provider will namespace\ngroups according to the org they originate from to avoid potential name duplicates:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GithubMultiOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The GitHub URL below needs to match a configured integrations.github entry\n  // specified in your app-config.\n  builder.addEntityProvider(\n    GithubMultiOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      githubUrl: 'https://github.com',\n      // Set the following to list the GitHub orgs you wish to ingest from. You can\n      // also omit this option to ingest all orgs accessible by your GitHub integration\n      orgs: ['org-a', 'org-b'],\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"installation-with-events-support",children:"Installation with Events Support"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"For the legacy backend system, please read the subsection below."})}),"\n",(0,r.jsxs)(t.p,{children:["The catalog module ",(0,r.jsx)(t.code,{children:"github-org"})," comes with events support enabled for the ",(0,r.jsx)(t.code,{children:"GithubMultiOrgEntityProvider"}),".\nThis will make it subscribe to its relevant topics and expects these events to be published via the ",(0,r.jsx)(t.code,{children:"EventsService"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Topics:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"github.installation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"github.membership"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"github.organization"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"github.team"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, you should install the\n",(0,r.jsxs)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md",children:["event router by ",(0,r.jsx)(t.code,{children:"events-backend-module-github"})]}),"\nwhich will route received events from the generic topic ",(0,r.jsx)(t.code,{children:"github"})," to more specific ones\nbased on the event type (e.g., ",(0,r.jsx)(t.code,{children:"github.membership"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["In order to receive Webhook events by GitHub, you have to decide how you want them\nto be ingested into Backstage and published to its ",(0,r.jsx)(t.code,{children:"EventsService"}),".\nYou can decide between the following options (extensible):"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"legacy-backend-system",children:"Legacy Backend System"}),"\n",(0,r.jsx)(t.p,{children:"Please follow the installation instructions at"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Additionally, you need to decide how you want to receive events from external sources like"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Set up your provider"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { CatalogBuilder } from '@backstage/plugin-catalog-backend';\n/* highlight-add-next-line */\nimport { GithubOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\nimport { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  builder.addProcessor(new ScaffolderEntitiesProcessor());\n  /* highlight-add-start */\n  const githubOrgProvider = GithubOrgEntityProvider.fromConfig(env.config, {\n    id: 'production',\n    orgUrl: 'https://github.com/backstage',\n    logger: env.logger,\n    events: env.events,\n    schedule: env.scheduler.createScheduledTaskRunner({\n      frequency: { minutes: 60 },\n      timeout: { minutes: 15 },\n    }),\n  });\n  builder.addEntityProvider(githubOrgProvider);\n  /* highlight-add-end */\n  const { processingEngine, router } = await builder.build();\n  await processingEngine.start();\n  return router;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Or, alternatively, if using the ",(0,r.jsx)(t.code,{children:"GithubMultiOrgEntityProvider"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GithubMultiOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The GitHub URL below needs to match a configured integrations.github entry\n  // specified in your app-config.\n  builder.addEntityProvider(\n    GithubMultiOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      githubUrl: 'https://github.com',\n      // Set the following to list the GitHub orgs you wish to ingest from. You can\n      // also omit this option to ingest all orgs accessible by your GitHub integration\n      orgs: ['org-a', 'org-b'],\n      logger: env.logger,\n      events: env.events,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can check the official docs to ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks",children:"configure your webhook"})," and to ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks",children:"secure your request"}),".\nThe webhook will need to be configured to forward ",(0,r.jsx)(t.code,{children:"organization"}),",",(0,r.jsx)(t.code,{children:"team"})," and ",(0,r.jsx)(t.code,{children:"membership"})," events."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"As mentioned above, you also must have some configuration in your app-config\nthat describes the targets that you want to import. This lets the entity\nprovider know what authorization to use, and what the API endpoints are. You may\nor may not have such an entry already added since before:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  github:\n    # example for public github\n    - host: github.com\n      token: ${GITHUB_TOKEN}\n    # example for a private GitHub Enterprise instance\n    - host: ghe.example.net\n      apiBaseUrl: https://ghe.example.net/api/v3\n      token: ${GHE_TOKEN}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["These examples use ",(0,r.jsx)(t.code,{children:"${}"})," placeholders to reference environment variables. This\nis often suitable for production setups, but also means that you will have to\nsupply those variables to the backend as it starts up. If you want, for local\ndevelopment in particular, you can experiment first by putting the actual tokens\nin a mirrored config directly in your ",(0,r.jsx)(t.code,{children:"app-config.local.yaml"})," as well."]}),"\n",(0,r.jsxs)(t.p,{children:["If Backstage is configured to use GitHub Apps authentication you must grant\n",(0,r.jsx)(t.code,{children:"Read-Only"})," access for ",(0,r.jsx)(t.code,{children:"Members"})," under ",(0,r.jsx)(t.code,{children:"Organization"})," in order to ingest users\ncorrectly. You can modify the app's permissions under the organization settings,\n",(0,r.jsx)(t.code,{children:"https://github.com/organizations/{ORG}/settings/apps/{APP_NAME}/permissions"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"permissions",src:n(542791).Z+"",width:"1534",height:"324"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Please note that when you change permissions, the app owner will get an email\nthat must be approved first before the changes are applied."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"email",src:n(934431).Z+"",width:"1262",height:"732"})}),"\n",(0,r.jsx)(t.h3,{id:"custom-transformers",children:"Custom Transformers"}),"\n",(0,r.jsx)(t.p,{children:"You can inject your own transformation logic to help map from GH API responses\ninto backstage entities. You can do this on the user and team requests to\nenable you to do further processing or updates to the entities."}),"\n",(0,r.jsxs)(t.p,{children:["To enable this you pass a function into the ",(0,r.jsx)(t.code,{children:"GitHubOrgEntityProvider"}),". You can\npass a ",(0,r.jsx)(t.code,{children:"UserTransformer"}),", ",(0,r.jsx)(t.code,{children:"TeamTransformer"})," or both. The function is invoked\nfor each item (user or team) that is returned from the API. You can either\nreturn an Entity (User or Group) or ",(0,r.jsx)(t.code,{children:"undefined"})," if you do not want to import\nthat item."]}),"\n",(0,r.jsxs)(t.p,{children:["There is also a ",(0,r.jsx)(t.code,{children:"defaultUserTransformer"})," and ",(0,r.jsx)(t.code,{children:"defaultOrganizationTeamTransformer"}),".\nYou could use these and simply decorate the response from the default\ntransformation if you only need to change a few properties."]}),"\n",(0,r.jsx)(t.h3,{id:"resolving-github-users-via-organization-email",children:"Resolving GitHub users via organization email"}),"\n",(0,r.jsx)(t.p,{children:"When you authenticate users you should resolve them to an entity within the\ncatalog. Often the authentication you use could be a corporate SSO system that\nprovides you with email as a key. To enable you to find and resolve GitHub users\nit's useful to also import the private domain verified emails into the User\nentity in backstage."}),"\n",(0,r.jsxs)(t.p,{children:["The integration attempts to return ",(0,r.jsx)(t.code,{children:"organizationVerifiedDomainEmails"})," from the\nGitHub API and makes this available as part of the object passed to\n",(0,r.jsx)(t.code,{children:"UserTransformer"}),". The GitHub API will only return emails that use a domain\nthat's a verified domain for your GitHub Org. It also relies on the user having\nconfigured such an email in their own account. The API will only return these\nvalues when using GitHub App authentication and with the correct app permission\nallowing access to emails."]}),"\n",(0,r.jsxs)(t.p,{children:["You can decorate the default ",(0,r.jsx)(t.code,{children:"userTransformer"})," to replace the org email in the\nreturned identity."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"const githubOrgProvider = GithubOrgEntityProvider.fromConfig(env.config, {\n  id: 'production',\n  orgUrl: 'https://github.com/backstage',\n  logger: env.logger,\n  schedule: env.scheduler.createScheduledTaskRunner({\n    frequency: { minutes: 60 },\n    timeout: { minutes: 15 },\n  }),\n  /* highlight-add-start */\n  userTransformer: async (user, ctx) => {\n    const entity = await defaultUserTransformer(user, ctx);\n    if (entity && user.organizationVerifiedDomainEmails?.length) {\n      entity.spec.profile!.email = user.organizationVerifiedDomainEmails[0];\n    }\n    return entity;\n  },\n  /* highlight-add-end */\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once you have imported the emails you can resolve users in your ",(0,r.jsx)(t.a,{href:"/docs/auth/github/provider",children:"sign-in resolver"})," using the catalog entity search via email"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/auth.ts"',children:"ctx.signInWithCatalogUser({\n  filter: {\n    kind: ['User'],\n    'spec.profile.email': email as string,\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"using-a-processor-instead-of-a-provider",children:"Using a Processor instead of a Provider"}),"\n",(0,r.jsx)(t.p,{children:"An alternative to using the Provider for ingesting organizational entities is to\nuse a Processor. This is the old way that's based on registering locations with\nthe proper type and target, triggering the processor to run."}),"\n",(0,r.jsx)(t.p,{children:"The drawback of this method is that it will leave orphaned Group/User entities\nwhenever they are deleted on your GitHub server, and you cannot control the\nfrequency with which they are refreshed, separately from other processors."}),"\n",(0,r.jsx)(t.h3,{id:"processor-installation",children:"Processor Installation"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"GithubOrgReaderProcessor"})," is not registered by default, so you have to\ninstall and register it in the catalog plugin:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-github\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { GithubOrgReaderProcessor } from '@backstage/plugin-catalog-backend-module-github';\n\nbuilder.addProcessor(\n  GithubOrgReaderProcessor.fromConfig(env.config, { logger: env.logger }),\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"processor-configuration",children:"Processor Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The integration section of your app-config needs to be set up in the same way as\nfor the Entity Provider - see above."}),"\n",(0,r.jsxs)(t.p,{children:["In addition to that, you typically want to add a few static locations to your\napp-config, which reference your organizations to import. The following\nconfiguration enables an import of the teams and users under the org\n",(0,r.jsx)(t.code,{children:"https://github.com/my-org-name"})," on public GitHub."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: github-org\n      target: https://github.com/my-org-name\n      rules:\n        - allow: [User, Group]\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},934431:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/email-d5628d6813a978b367112f533ff20242.png"},542791:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/permissions-a2f1b6967d5d744368b60016dfba17ba.png"},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var x=v.prototype=new y;x.constructor=v,f(x,b.prototype),x.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!E.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+T(c,0):o,j(a)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),O(a,t,i,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var u=o+T(s=e[l],l);c+=O(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=O(s=s.value,t,i,u=o+T(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],i=0;return O(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function G(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},H={transition:null},I={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:H,ReactCurrentOwner:w};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=i,t.Profiler=a,t.PureComponent=v,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=f({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)k.call(t,l)&&!E.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:G}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=H.transition;H.transition={};try{e()}finally{H.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,n){return C.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,n){return C.current.useReducer(e,t,n)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);