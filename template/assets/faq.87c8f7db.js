import{_ as C}from"./DemoLinks.b68e1d3f.js";import{_ as h,a as w}from"./DemoTitle.8129d84d.js";import{D as x}from"./DocumentationFooter.26e38be2.js";import{v as p,o as c,C as b,w as e,h as t,g as i,A as n,n as q,M as f,e as F,f as g,F as A,G as I,z as k,bV as L,q as P}from"./index.65d9db8a.js";import{_ as Q,a as y}from"./PrismCode.c318c48c.js";import{_ as B}from"./DoubleFaqCollapse.83d538fd.js";import{f as v}from"./index.0e9f7a09.js";import{_ as D}from"./FaqList.9be2ca13.js";import{c as $}from"./index.e3806ea8.js";import{g as S,_ as H}from"./index.fa65d8fc.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./Collapse.58727328.js";import"./Icon.8a0a132b.js";const V=`
<script setup lang="ts">
export interface DoubleFaqCollapseItem {
  title: string
  content: string
}

export interface DoubleFaqCollapseProps {
  left: DoubleFaqCollapseItem[]
  right: DoubleFaqCollapseItem[]
  chevrons: boolean
}
<\/script>
`,W=`
<script setup lang="ts">
import { faq } from '/@src/data/pages/commerce'
<\/script>

<template>
  <DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
</template>
`,j=`
export const faq = {
  left: [
    {
      title: 'How much does it cost?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Does it really work anywhere?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'How does it differ from other tools?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
  right: [
    {
      title: 'How does it work?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Can I try it for free?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'How many agents are allowed?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
}
`,E={class:"mx-auto max-w-10"},T={class:"pt-4 pb-6"},z={class:"pt-4"},U=i("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),N=p({setup(d){return(m,_)=>{const u=h,a=B,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-a-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",E,[i("div",T,[t(u,{title:"Block A",subtitle:"Faq variation 1"}),i("div",z,[t(a,{left:n(v).left,right:n(v).right,chevrons:""},null,8,["left","right"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(W)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(V)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(j)},null,8,["code"])]),usage:e(()=>[U]),_:1})])]),_:1})]),_:1})}}}),G=`
<script setup lang="ts">
export interface FaqCollapseItem {
  title: string
  content: string
}

export interface FaqCollapseProps {
  items: FaqCollapseItem[]
  chevrons?: boolean
}
<\/script>
`,M=`
<script setup lang="ts">
import { mentorsFaq } from '/@src/data/pages/mentors'
<\/script>

<template>
  <FaqList :items="mentorsFaq" />
</template>
`,J=`
export const mentorsFaq = [
  {
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'All the free calls with mentors really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'Do mentors do calls for free?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's the catch? Will mentors simply pitch me?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'How do I become a Spark mentor?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
]
`,K={class:"mx-auto max-w-10"},O={class:"pt-4 pb-6"},R={class:"pt-4"},X=i("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Y=p({setup(d){return(m,_)=>{const u=h,a=D,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-b-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",K,[i("div",O,[t(u,{title:"Block B",subtitle:"Faq variation 2"}),i("div",R,[t(a,{items:n($)},null,8,["items"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(M)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(G)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(J)},null,8,["code"])]),usage:e(()=>[X]),_:1})])]),_:1})]),_:1})}}});const Z={class:"py-6"},tt={class:"mx-auto max-w-9"},et={class:"columns is-multiline b-columns-half-tablet-p"},it={class:"faq-item"},ot=["data-icon"],nt={class:"item-content"},st={class:"paragraph rem-90"},at=p({props:{items:{default:()=>[]}},setup(d){const m=d;return(_,u)=>{const a=L,o=P;return c(),g("div",Z,[i("div",tt,[i("div",et,[(c(!0),g(A,null,I(m.items,(s,r)=>(c(),g("div",{key:r,class:"column is-6"},[i("div",it,[t(a,{color:s.color,size:"medium"},{default:e(()=>[i("i",{class:"iconify","data-icon":s.icon},null,8,ot)]),_:2},1032,["color"]),i("div",nt,[t(o,{tag:"h3",size:6,weight:"semi",leading:""},{default:e(()=>[i("span",null,k(s.title),1)]),_:2},1024),i("p",st,k(s.content),1)])])]))),128))])])])}}});var ut=F(at,[["__scopeId","data-v-9ba1c94c"]]);const rt=[{icon:"ph:gear-six-duotone",color:"primary",title:"How does it work?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."},{icon:"ph:crown-duotone",color:"success",title:"What's included with membership?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam."},{icon:"ph:phone-duotone",color:"yellow",title:"All the free calls with mentors really unlimited?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo."},{icon:"ph:confetti-duotone",color:"info",title:"Do mentors do calls for free?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."},{icon:"ph:lightbulb-filament-duotone",color:"orange",title:"What's the catch? Will mentors simply pitch me?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur."},{icon:"ph:trophy-duotone",color:"green",title:"How do I become a Spark mentor?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo."}],ct=`
<script setup lang="ts">
export interface FaqStaticItem {
  title: string
  content: string
  icon: string
  color: IconBoxColor
}

export interface FaqStaticProps {
  items: FaqStaticItem[]
}
<\/script>
`,mt=`
<script setup lang="ts">
import { staticFaq } from '/@src/data/blocks/faq'
<\/script>

<template>
  <FaqStatic :items="staticFaq" />
</template>
`,lt=`
import type { FaqStaticItem } from '/@src/components/advanced/faq/FaqStatic.vue'

export const staticFaq: FaqStaticItem[] = [
  {
    icon: 'ph:gear-six-duotone',
    color: 'primary',
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    icon: 'ph:crown-duotone',
    color: 'success',
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam.',
  },
  {
    icon: 'ph:phone-duotone',
    color: 'yellow',
    title: 'All the free calls with mentors really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
  },
  {
    icon: 'ph:confetti-duotone',
    color: 'info',
    title: 'Do mentors do calls for free?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    icon: 'ph:lightbulb-filament-duotone',
    color: 'orange',
    title: "What's the catch? Will mentors simply pitch me?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur.',
  },
  {
    icon: 'ph:trophy-duotone',
    color: 'green',
    title: 'How do I become a Spark mentor?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
  },
]
`,dt={class:"mx-auto max-w-10"},pt={class:"pt-4 pb-6"},_t={class:"pt-4"},gt=i("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),ht=p({setup(d){return(m,_)=>{const u=h,a=ut,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-c-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",dt,[i("div",pt,[t(u,{title:"Block C",subtitle:"Faq variation 3"}),i("div",_t,[t(a,{items:n(rt)},null,8,["items"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(mt)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(ct)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(lt)},null,8,["code"])]),usage:e(()=>[gt]),_:1})])]),_:1})]),_:1})}}}),bt=`
<script setup lang="ts">
export interface FaqBoxedCollapseItem {
  title: string
  content: string
}

export interface FaqBoxedCollapseProps {
  items: FaqBoxedCollapseItem[]
  chevrons?: boolean
}
<\/script>
`,qt=`
<script setup lang="ts">
import { genericFaq } from '/@src/data/blocks/advanced/faq'
<\/script>

<template>
  <FaqListBoxed :items="genericFaq" />
</template>
`,ft=`
export const genericFaq = [
  {
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'All the free API services really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'How does billing work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'Can I sign up for dedicated support?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'How do I upgrade my account?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
]
`,Qt={class:"mx-auto max-w-10"},yt={class:"pt-4 pb-6"},kt={class:"pt-4"},vt=i("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Ct=p({setup(d){return(m,_)=>{const u=h,a=H,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-d-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",Qt,[i("div",yt,[t(u,{title:"Block D",subtitle:"Faq variation 4"}),i("div",kt,[t(a,{items:n(S)},null,8,["items"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(qt)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(bt)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(ft)},null,8,["code"])]),usage:e(()=>[vt]),_:1})])]),_:1})]),_:1})}}}),Et=p({setup(d){const m=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(_,u)=>{const a=w,o=C;return c(),g("div",null,[t(a,{title:"Advanced FAQ",subtitle:"Discover Spark's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),t(o,{links:m,width:"420px"}),t(N),t(Y),t(ht),t(Ct),t(x)])}}});export{Et as default};
