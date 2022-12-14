import{_ as S}from"./DemoLinks.b68e1d3f.js";import{_ as f,a as w}from"./DemoTitle.8129d84d.js";import{D as $}from"./DocumentationFooter.26e38be2.js";import{_ as k,a as y}from"./PrismCode.c318c48c.js";import{_ as h}from"./DemoProps.3732b33d.js";import{v as d,o as m,f as _,h as e,w as t,A as o,F as v,g as n,n as P,M as B}from"./index.65d9db8a.js";import{_ as A}from"./PricingSection.3309d31c.js";import{p as x,l as C,f as D}from"./index.9ce19dcf.js";import{e as T,_ as q}from"./index.9f3132f8.js";import{_ as E}from"./PricingDuo.d72b8bfd.js";import{b as F}from"./index.7b22cfcc.js";import{_ as U}from"./PricingAction.65621bec.js";import{_ as L}from"./PricingSolo.014ed57c.js";import{_ as j}from"./PricingSoloCentered.959813cb.js";import{_ as H}from"./PricingLong.9302407d.js";import{_ as G}from"./PricingCompact.0585806d.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";import"./NinjaToggle.2f00f488.js";import"./PolkaDots.4ca1fe29.js";import"./save-10.1192e752.js";const V={props:[{name:"plans",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},M=`
<script setup lang="ts">
import { plans } from '/@src/data/blocks/advanced/pricing'
<\/script>

<template>
  <PricingSection :plans="plans" />
</template>
`,N=`
export const plans = [
  {
    id: 0,
    icon: '/https://infernaco.com/spark-files/assets/icons/pricing/pricing-1.svg',
    title: 'GROWTH',
    subtitle: 'Under $10,000 in monthly ad spend',
    price: {
      monthly: 250,
      yearly: 1750,
    },
    benefits: [
      {
        id: 0,
        content: 'Access to slack community',
      },
      {
        id: 1,
        content: 'Access to support team',
      },
      {
        id: 2,
        content: 'Algorithmic bidding',
      },
      {
        id: 3,
        content: 'Keyword and ASIN harvesting',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Search term isolation',
      },
      {
        id: 1,
        content: 'Total sales analytics',
      },
      {
        id: 2,
        content: 'Best seller rank',
      },
      {
        id: 3,
        content: 'Placement optimization',
      },
    ],
  },
  {
    id: 1,
    icon: '/https://infernaco.com/spark-files/assets/icons/pricing/pricing-2.svg',
    title: 'BUSINESS',
    subtitle: 'Over $10,000 in monthly ad spend',
    price: {
      monthly: 500,
      yearly: 3500,
    },
    benefits: [
      {
        id: 0,
        content: 'All features in Growth',
      },
      {
        id: 1,
        content: '3 week checkpoint call',
      },
      {
        id: 2,
        content: '6 week checkpoint call',
      },
      {
        id: 3,
        content: 'Quarterly account assessment',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Google Ads integration',
      },
      {
        id: 1,
        content: 'Automated rules and strategies',
      },
      {
        id: 2,
        content: 'Brand analytics',
      },
      {
        id: 3,
        content: 'Competitor intelligence',
      },
    ],
  },
  {
    id: 2,
    icon: '/https://infernaco.com/spark-files/assets/icons/pricing/pricing-3.svg',
    title: 'ENTERPRISE',
    subtitle: 'Over $300,000 in monthly ad spend',
    price: {
      monthly: 1250,
      yearly: 15000,
    },
    benefits: [
      {
        id: 0,
        content: 'All features in Business',
      },
      {
        id: 1,
        content: 'Strategic Partner Manager',
      },
      {
        id: 2,
        content: 'Quarterly Business Review',
      },
      {
        id: 3,
        content: 'Yearly Account Planning',
      },
    ],
    features: [
      {
        id: 0,
        content: 'Amazon DSP instance',
      },
      {
        id: 1,
        content: 'Amazon Marketing Cloud',
      },
      {
        id: 2,
        content: 'Datalake integration',
      },
      {
        id: 3,
        content: 'Custom dashboard',
      },
    ],
  },
]
`,R=n("div",{class:"py-4"},null,-1),O=n("div",{class:"py-4"},null,-1),z=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),I=d({setup(b){return(u,g)=>{const l=f,i=A,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),R,e(i,{plans:o(x)},null,8,["plans"])]),_:1})]),_:1}),e(s,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block A Props",subtitle:"Available props for block A"}),O,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(M)},null,8,["code"])]),props:t(()=>[e(c,{props:o(V).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(N)},null,8,["code"])]),usage:t(()=>[z]),_:1})]),_:1})]),_:1})],64)}}}),Q={props:[{name:"plans",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["2","3","4"]},{name:"label",type:"string",required:"false",default:"undefined",values:["string"]},{name:"pulled",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"polkaDots",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},K=`
<script setup lang="ts">
import { eventPlans } from '/@src/data/pages/conference'
<\/script>

<template>
  <PricingCardsA
    :plans="eventPlans"
    :columns="3"
    label="Buy Ticket"
    rounded
    pulled
    polka-dots
  />
</template>
`,W=`
import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-card/PricingCardsA.vue'

export const eventPlans: PricingPlan[] = [
  {
    name: 'Super Early',
    price: 199,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: true,
  },
  {
    name: 'Early',
    price: 249,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: false,
  },
  {
    name: 'On Time',
    price: 299,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: false,
  },
  {
    name: 'Late',
    price: 349,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: false,
  },
]
`,Y=n("div",{class:"py-4"},null,-1),J=n("div",{class:"py-4"},null,-1),X=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Z=d({setup(b){return(u,g)=>{const l=f,i=q,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-a-props"}),Y,e(i,{plans:o(T),columns:3,label:"Buy Ticket",rounded:"",pulled:"","polka-dots":""},null,8,["plans"])]),_:1})]),_:1}),e(s,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block B Props",subtitle:"Available props for block B"}),J,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(K)},null,8,["code"])]),props:t(()=>[e(c,{props:o(Q).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(W)},null,8,["code"])]),usage:t(()=>[X]),_:1})]),_:1})]),_:1})],64)}}}),ee={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"plans",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"pulled",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"polkaDots",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},te=`
<script setup lang="ts">
import { workoutPricingPlans } from '/@src/data/pages/workout'
<\/script>

<template>
  <PricingDuo
    title="Our plans"
    subtitle="Duplexque isdem diebus acciderat malum, quod et Theophilum insontem
        atrox interceperat casus."
    :plans="workoutPricingPlans"
    rounded
    polka-dots
  />
</template>
`,oe=`
export const workoutPricingPlans = [
  {
    name: 'Standard',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 19,
      yearly: 210,
    },
    features: [
      'Premium programs',
      'Social integration',
      'Social network',
      '2h of coaching /month',
      'Live Events',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    icon: 'ph:rocket-duotone',
    price: {
      monthly: 39,
      yearly: 420,
    },
    features: [
      'Custom programs',
      'Live streaming',
      'Personal page',
      '10h of coaching /month',
      'VIP invites',
    ],
    featured: false,
  },
]
`,ne=n("div",{class:"py-4"},null,-1),ae=n("div",{class:"py-4"},null,-1),le=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),se=d({setup(b){return(u,g)=>{const l=f,i=E,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block C",subtitle:"Advanced block C variation 1",link:"block-c-props"}),ne,e(i,{title:"Our plans",subtitle:`Duplexque isdem diebus acciderat malum, quod et Theophilum insontem
            atrox interceperat casus.`,plans:o(F),rounded:"","polka-dots":""},null,8,["plans"])]),_:1})]),_:1}),e(s,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block C Props",subtitle:"Available props for block C"}),ae,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(te)},null,8,["code"])]),props:t(()=>[e(c,{props:o(ee).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(oe)},null,8,["code"])]),usage:t(()=>[le]),_:1})]),_:1})]),_:1})],64)}}}),re={props:[{name:"monthlyPrice",type:"number",required:"true",default:"undefined",values:["number"]},{name:"quarterlyPrice",type:"number",required:"true",default:"undefined",values:["number"]},{name:"yearlyPrice",type:"number",required:"true",default:"undefined",values:["number"]},{name:"discount",type:"number",required:"true",default:"undefined",values:["number"]}],slots:[]},ie=`
<template>
  <PricingAction
    :monthly-price="75"
    :quarterly-price="225"
    :yearly-price="600"
    :discount="30"
  />
</template>
`,ce=n("div",{class:"py-4"},null,-1),pe=n("div",{class:"py-4"},null,-1),ue=n("div",{class:"empty-text"},[n("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),de=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),me=d({setup(b){return(u,g)=>{const l=f,i=U,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block D",subtitle:"Advanced block D variation 1",link:"block-d-props"}),ce,e(i,{"monthly-price":75,"quarterly-price":225,"yearly-price":600,discount:30})]),_:1})]),_:1}),e(s,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block D Props",subtitle:"Available props for block D"}),pe,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(ie)},null,8,["code"])]),props:t(()=>[e(c,{props:o(re).props},null,8,["props"])]),sample:t(()=>[ue]),usage:t(()=>[de]),_:1})]),_:1})]),_:1})],64)}}}),_e={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"monthlyPrice",type:"number",required:"true",default:"undefined",values:["number"]},{name:"yearlyPrice",type:"number",required:"true",default:"undefined",values:["number"]},{name:"link",type:"string",required:"true",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"true",default:"undefined",values:["string"]}],slots:[]},be=`
<template>
  <PricingSolo
    title="Solution pricing"
    subtitle="All features you'll ever need to run a project"
    :features="[
      'Unlimited projects',
      'Desktop and mobile app',
      'Unlimited tasks',
      'Email integration',
      'Unlimited time records',
      'Client management',
      'Task dependencies',
      'Budget tracking',
      'Recurring tasks',
      'Advanced reports',
    ]"
    :monthly-price="7"
    :yearly-price="79"
    link-label="Start Free Trial"
    link="/"
  />
</template>
`,ge=`
export const pricingFeatures = [
  'Unlimited projects',
  'Desktop and mobile app',
  'Unlimited tasks',
  'Email integration',
  'Unlimited time records',
  'Client management',
  'Task dependencies',
  'Budget tracking',
  'Recurring tasks',
  'Advanced reports',
]
`,fe={class:"py-6"},ke=n("div",{class:"py-4"},null,-1),ye=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),he=d({setup(b){return(u,g)=>{const l=f,i=L,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block E",subtitle:"Advanced block E variation 1",link:"block-e-props"}),n("div",fe,[e(i,{title:"Solution pricing",subtitle:"All features you'll ever need to run a project",features:["Unlimited projects","Desktop and mobile app","Unlimited tasks","Email integration","Unlimited time records","Client management","Task dependencies","Budget tracking","Recurring tasks","Advanced reports"],"monthly-price":7,"yearly-price":79,"link-label":"Start Free Trial",link:"/"})])]),_:1})]),_:1}),e(s,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block E Props",subtitle:"Available props for block E"}),ke,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(be)},null,8,["code"])]),props:t(()=>[e(c,{props:o(_e).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(ge)},null,8,["code"])]),usage:t(()=>[ye]),_:1})]),_:1})]),_:1})],64)}}}),ve={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"price",type:"number",required:"true",default:"undefined",values:["number"]},{name:"link",type:"string",required:"true",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"true",default:"undefined",values:["string"]}],slots:[]},Pe=`
<template>
  <PricingSoloCentered
    :features="[
      'Unlimited projects',
      'Desktop and mobile app',
      'Unlimited tasks',
      'Email integration',
      'Unlimited time records',
    ]"
    :price="0"
    link-label="Get Started Now"
    link="/"
  />
</template>
`,Be=`
export const pricingFeatures = [
  'Unlimited projects',
  'Desktop and mobile app',
  'Unlimited tasks',
  'Email integration',
  'Unlimited time records',
]
`,Se={class:"pt-6"},we=n("div",{class:"py-4"},null,-1),$e=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Ae=d({setup(b){return(u,g)=>{const l=f,i=j,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block F",subtitle:"Advanced block F variation 1",link:"block-e-props"}),n("div",Se,[e(i,{features:["Unlimited projects","Desktop and mobile app","Unlimited tasks","Email integration","Unlimited time records"],price:0,"link-label":"Get Started Now",link:"/"})])]),_:1})]),_:1}),e(s,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block F Props",subtitle:"Available props for block F"}),we,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(Pe)},null,8,["code"])]),props:t(()=>[e(c,{props:o(ve).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(Be)},null,8,["code"])]),usage:t(()=>[$e]),_:1})]),_:1})]),_:1})],64)}}}),xe={props:[{name:"plans",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},Ce=`
<script setup lang="ts">
import { longPlans } from '/@src/data/blocks/advanced/pricing'
<\/script>

<template>
  <PricingLong
    :plans="longPlans"
    :columns="4"
    :limit="3"
    rounded
    shadow
    polka-dots
  />
</template>
`,De=`
import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-long/PricingLong.vue'

export const longPlans: PricingPlan[] = [
  {
    name: 'Starter',
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
    price: 15,
    color: 'primary',
    featured: true,
    SPARK: false,
    features: [
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$3/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$5/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.65%',
        label: 'Tax rate',
      },
      {
        value: '$0.75',
        label: 'Bank transfer',
      },
      {
        value: '$5',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Business',
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
    price: 25,
    color: 'secondary',
    featured: false,
    SPARK: true,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$10/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$2/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.55%',
        label: 'Tax rate',
      },
      {
        value: '$0.5',
        label: 'Bank transfer',
      },
      {
        value: '$3',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Enterprise',
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
    price: 45,
    color: 'yellow',
    featured: false,
    SPARK: false,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$15/mo',
        label: 'Stocks & Shares',
      },
      {
        value: 'Free',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.25%',
        label: 'Tax rate',
      },
      {
        value: 'Free',
        label: 'Bank transfer',
      },
      {
        value: '$2',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Custom',
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
    price: 24,
    color: 'info',
    featured: false,
    SPARK: false,
    features: [
      {
        value: '$8',
        label: 'Trades',
      },
      {
        value: '$25/month',
        label: 'Basic Account',
      },
      {
        value: '$4.95',
        label: 'Monthly fees',
      },
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
]
`,Te={class:"py-6"},qe=n("div",{class:"py-4"},null,-1),Ee=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Fe=d({setup(b){return(u,g)=>{const l=f,i=H,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-g-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block G",subtitle:"Advanced block G variation 1",link:"block-e-props"}),n("div",Te,[e(i,{plans:o(C),columns:4,limit:3,rounded:"",shadow:"","polka-dots":""},null,8,["plans"])])]),_:1})]),_:1}),e(s,{id:"block-g-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block G Props",subtitle:"Available props for block G"}),qe,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(Ce)},null,8,["code"])]),props:t(()=>[e(c,{props:o(xe).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(De)},null,8,["code"])]),usage:t(()=>[Ee]),_:1})]),_:1})]),_:1})],64)}}}),Ue={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"monthlyPrice",type:"number",required:"true",default:"undefined",values:["number"]},{name:"yearlyPrice",type:"number",required:"true",default:"undefined",values:["number"]},{name:"link",type:"string",required:"true",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"true",default:"undefined",values:["string"]}],slots:[]},Le=`
<script setup lang="ts">
import { pricingCompactPlans } from '/@src/data/blocks/advanced/pricing'
<\/script>

<template>
  <PricingCompact :plans="pricingCompactPlans" />
</template>
`,je=`
export const pricingCompactPlans = [
  {
    name: 'Basic',
    description:
      'For individuals who just need to start with the basic features',
    monthlyPrice: 0,
    yearlyPrice: 0,
    actionLabel: 'Start For Free',
    SPARK: false,
  },
  {
    name: 'Team',
    description: 'For teams who just need to start with the basic features',
    monthlyPrice: 5,
    yearlyPrice: 49,
    actionLabel: 'Start Free Trial',
    SPARK: true,
  },
  {
    name: 'Pro',
    description:
      'For medium businesses who need advanced features for their activity',
    monthlyPrice: 15,
    yearlyPrice: 149,
    actionLabel: 'Start Free Trial',
    SPARK: false,
  },
  {
    name: 'Enterprise',
    description:
      'For large businesses who need advanced features for their activity',
    monthlyPrice: 99,
    yearlyPrice: 899,
    actionLabel: 'Contact Us',
    SPARK: false,
  },
]
`,He={class:"py-6"},Ge=n("div",{class:"py-4"},null,-1),Ve=n("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Pricing blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Me=d({setup(b){return(u,g)=>{const l=f,i=G,a=P,s=B,r=k,c=h,p=y;return m(),_(v,null,[e(s,{id:"block-h-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block H",subtitle:"Advanced block H variation 1",link:"block-h-props"}),n("div",He,[e(i,{plans:o(D)},null,8,["plans"])])]),_:1})]),_:1}),e(s,{id:"block-h-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(l,{title:"Block H Props",subtitle:"Available props for block H"}),Ge,e(p,null,{code:t(()=>[e(r,{language:"html",code:o(Le)},null,8,["code"])]),props:t(()=>[e(c,{props:o(Ue).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(je)},null,8,["code"])]),usage:t(()=>[Ve]),_:1})]),_:1})]),_:1})],64)}}}),ut=d({setup(b){const u=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"}];return(g,l)=>{const i=w,a=S;return m(),_("div",null,[e(i,{title:"Advanced Pricing",subtitle:"Discover Spark's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),e(a,{links:u,width:"780px"}),e(I),e(Z),e(se),e(me),e(he),e(Ae),e(Fe),e(Me),e($)])}}});export{ut as default};
