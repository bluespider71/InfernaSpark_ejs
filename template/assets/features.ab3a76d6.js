import{_ as te}from"./DemoLinks.b68e1d3f.js";import{_ as F,a as se}from"./DemoTitle.8129d84d.js";import{D as oe}from"./DocumentationFooter.26e38be2.js";import{_ as I,a as $}from"./PrismCode.c318c48c.js";import{_ as L}from"./DemoProps.3732b33d.js";import{v,o as d,f as p,h as e,w as t,A as a,F as h,g as s,m as _,n as D,M as S,bU as ae,e as R,y,P as O,G as H,D as k,r as q,z as b,C,H as E,p as W,k as Q,l as X,bV as Y,q as P,V as A,bT as T,bW as ie}from"./index.65d9db8a.js";import{_ as le}from"./FeatureBlockA.b2a9a01b.js";import{f as B,a as z,b as j,c as V,d as G,e as J,g as M,h as K,i as U}from"./index.0f18d7b9.js";import{_ as ne}from"./FeatureBlockL.86a95850.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";import"./Blob.117c105e.js";const re={props:[{name:"alignment",type:"string",required:"false",default:"undefined",values:["centered"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ue=`
<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockA
    alignment="centered"
    :features="features"
    :columns="4"
    :limit="6"
    size="medium"
    inverted
  />
</template>
`,ce=`
export const features: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]
`,de=s("div",{class:"py-4"},null,-1),me=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),pe=v({setup(f){return(o,g)=>{const i=F,r=le,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 1",link:"block-a-props"}),e(r,{alignment:"centered",features:a(B),columns:4,limit:6,size:"medium"},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 2",link:"block-a-props"}),e(r,{alignment:"centered",features:a(B),columns:4,limit:6,size:"medium",rounded:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 3",link:"block-a-props",inverted:""}),e(r,{alignment:"centered",features:a(B),columns:4,limit:6,size:"medium",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 4",link:"block-a-props"}),e(r,{features:a(B),columns:3,limit:8,size:"small"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 5",link:"block-a-props",inverted:""}),e(r,{features:a(B),columns:3,limit:8,size:"small",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 6",link:"block-a-props"}),e(r,{features:a(B),columns:3,limit:8,size:"small",rounded:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 7",link:"block-a-props"}),e(r,{features:a(B),columns:6,limit:4,size:"medium"},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A Props",subtitle:"Available props for block A"}),de,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(ue)},null,8,["code"])]),props:t(()=>[e(c,{props:a(re).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(ce)},null,8,["code"])]),usage:t(()=>[me]),_:1})]),_:1})]),_:1})],64)}}}),fe={props:[{name:"alignment",type:"string",required:"false",default:"undefined",values:["centered"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ge=`
<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockB
    alignment="centered"
    :features="features"
    :columns="4"
    :limit="6"
    size="medium"
    inverted
  />
</template>
`,be=`
export const features2: ImageFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/laptop-mail.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/laptop-mail.svg',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/papers.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/papers.svg',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/compass.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/compass.svg',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/credit-card.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/credit-card.svg',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/clock.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/clock.svg',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/bell.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/bell.svg',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/puzzle.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/puzzle.svg',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/chat.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/chat.svg',
    link: '/',
  },
]
`,_e=s("div",{class:"py-4"},null,-1),ke=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ve=v({setup(f){return(o,g)=>{const i=F,r=ae,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 1",link:"block-b-props"}),e(r,{alignment:"centered",features:a(z),columns:4,limit:6},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 2",link:"block-b-props",inverted:""}),e(r,{alignment:"centered",features:a(z),columns:4,limit:6,inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 3",link:"block-b-props"}),e(r,{alignment:"centered",features:a(z),columns:4,limit:6,size:"small",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 4",link:"block-b-props"}),e(r,{size:"small",features:a(z),columns:3,limit:8},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 5",link:"block-b-props",inverted:""}),e(r,{size:"small",features:a(z),columns:3,limit:8,inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B Props",subtitle:"Available props for block B"}),_e,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(ge)},null,8,["code"])]),props:t(()=>[e(c,{props:a(fe).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(be)},null,8,["code"])]),usage:t(()=>[ke]),_:1})]),_:1})]),_:1})],64)}}});const Z=f=>(W("data-v-02cdee10"),f=f(),Q(),f),he={class:"py-6 mx-auto max-w-9"},ye={class:"columns is-multiline b-columns-half-tablet-p"},xe=["data-icon"],Be={class:"paragraph rem-95"},qe=Z(()=>s("span",null,"Read More",-1)),we=Z(()=>s("i",{class:"iconify","data-icon":"feather:arrow-right"},null,-1)),Fe=X('<div class="bubble bubble-1" data-v-02cdee10></div><div class="bubble bubble-2" data-v-02cdee10></div><div class="bubble bubble-3" data-v-02cdee10></div><div class="bubble bubble-4" data-v-02cdee10></div><div class="bubble bubble-5" data-v-02cdee10></div>',5),Ie=v({props:{features:null,limit:{default:3},size:{default:void 0},rounded:{type:Boolean,default:!1},links:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.horizontal?"is-6":"is-4"]),i=y(()=>[o.animated&&"animated",!o.horizontal&&"has-text-centered p-6 large:p-10"]),r=y(()=>[o.size==="small"&&"rem-90",o.links&&"mb-4",!o.horizontal&&"mx-auto max-w-2"]);return(l,n)=>{const u=Y,c=P,m=O("RouterLink");return d(),p("div",he,[s("div",ye,[(d(!0),p(h,null,H(o.features.slice(0,o.limit),(w,x)=>(d(),p("div",{key:x,class:k(["column",a(g)])},[s("div",{class:k(["box",a(i)])},[q(l.$slots,"column",{feature:w,index:x},()=>[e(u,{color:w.color,size:o.size,rounded:o.rounded},{default:t(()=>[s("i",{class:"iconify","data-icon":w.icon},null,8,xe)]),_:2},1032,["color","size","rounded"]),e(c,{tag:"h3",size:6,weight:"semi",leading:""},{default:t(()=>[s("span",null,b(w.title),1)]),_:2},1024),s("p",Be,b(w.text),1),o.links?(d(),C(m,{key:0,class:k(["action",a(r)]),to:w.link},{default:t(()=>[qe,we]),_:2},1032,["class","to"])):E("",!0),Fe],!0)],2)],2))),128))])])}}});var $e=R(Ie,[["__scopeId","data-v-02cdee10"]]);const Le={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},De=`
<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockC
    :features="features"
    :limit="6"
    size="medium"
    links
    animated
  />
</template>
`,Se=`
export const features: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]
`,ze=s("div",{class:"py-4"},null,-1),He=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ce=v({setup(f){return(o,g)=>{const i=F,r=$e,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C",subtitle:"Feature block C variation 1",link:"block-c-props"}),e(r,{features:a(B),limit:6,size:"medium",links:"",animated:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C",subtitle:"Feature block C variation 2",link:"block-c-props"}),e(r,{features:a(B),limit:6,size:"small",animated:"",horizontal:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C",subtitle:"Feature block C variation 3",link:"block-c-props"}),e(r,{features:a(B),limit:6,size:"medium",links:"",rounded:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C Props",subtitle:"Available props for block C"}),ze,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(De)},null,8,["code"])]),props:t(()=>[e(c,{props:a(Le).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Se)},null,8,["code"])]),usage:t(()=>[He]),_:1})]),_:1})]),_:1})],64)}}});const ee=f=>(W("data-v-0c4a7f77"),f=f(),Q(),f),Ee={class:"py-6 mx-auto max-w-9"},Pe={class:"columns is-multiline b-columns-half-tablet-p"},Ae={class:"paragraph rem-95"},Te=ee(()=>s("span",null,"Read More",-1)),Ve=ee(()=>s("i",{class:"iconify","data-icon":"feather:arrow-right"},null,-1)),Re=X('<div class="bubble bubble-1" data-v-0c4a7f77></div><div class="bubble bubble-2" data-v-0c4a7f77></div><div class="bubble bubble-3" data-v-0c4a7f77></div><div class="bubble bubble-4" data-v-0c4a7f77></div><div class="bubble bubble-5" data-v-0c4a7f77></div>',5),Ne=v({props:{features:null,limit:{default:3},size:{default:void 0},links:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.horizontal?"is-6":"is-4"]),i=y(()=>[o.animated&&"animated",!o.horizontal&&"has-text-centered p-6 large:p-10"]),r=y(()=>[o.size&&`is-${o.size}`]),l=y(()=>[o.size==="small"&&"rem-90",o.links&&"mb-4",!o.horizontal&&"mx-auto max-w-2"]);return(n,u)=>{const c=A,m=P,w=O("RouterLink");return d(),p("div",Ee,[s("div",Pe,[(d(!0),p(h,null,H(o.features.slice(0,o.limit),(x,N)=>(d(),p("div",{key:N,class:k(["column",a(g)])},[s("div",{class:k(["box",a(i)])},[q(n.$slots,"column",{feature:x,index:N},()=>[e(c,{src:x.image,"src-dark":x.darkImage,class:k(["feature-block-image",...a(r)]),alt:"featured image"},null,8,["src","src-dark","class"]),e(m,{tag:"h3",size:6,weight:"semi",leading:""},{default:t(()=>[s("span",null,b(x.title),1)]),_:2},1024),s("p",Ae,b(x.text),1),o.links?(d(),C(w,{key:0,class:k(["action",a(l)]),to:x.link},{default:t(()=>[Te,Ve]),_:2},1032,["class","to"])):E("",!0),Re],!0)],2)],2))),128))])])}}});var je=R(Ne,[["__scopeId","data-v-0c4a7f77"]]);const Ge={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Me=`
<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockD
    :features="features2"
    :limit="6"
    size="medium"
    links
    animated
  />
</template>
`,Je=`
export const features2: ImageFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/laptop-mail.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/laptop-mail.svg',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/papers.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/papers.svg',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/compass.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/compass.svg',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/credit-card.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/credit-card.svg',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/clock.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/clock.svg',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/bell.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/bell.svg',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/puzzle.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/puzzle.svg',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/icons/colored/chat.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/icons/colored/chat.svg',
    link: '/',
  },
]
`,Ke=s("div",{class:"py-4"},null,-1),Ue=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Oe=v({setup(f){return(o,g)=>{const i=F,r=je,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D",subtitle:"Feature block D variation 1",link:"block-d-props"}),e(r,{features:a(z),limit:6,size:"medium",links:"",animated:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D",subtitle:"Feature block D variation 2",link:"block-d-props"}),e(r,{features:a(z),limit:6,size:"small",horizontal:"",animated:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D",subtitle:"Feature block D variation 3",link:"block-d-props"}),e(r,{features:a(z),limit:6,links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D Props",subtitle:"Available props for block D"}),Ke,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Me)},null,8,["code"])]),props:t(()=>[e(c,{props:a(Ge).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Je)},null,8,["code"])]),usage:t(()=>[Ue]),_:1})]),_:1})]),_:1})],64)}}}),We={class:"py-6"},Qe={class:"columns is-multiline is-vcentered"},Xe={class:"column is-6"},Ye={class:"columns b-columns-half-tablet-p"},Ze={class:"py-2 medium:py-4"},et={class:"column is-6"},tt=v({props:{title:null,content:null,features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.inverted&&"text-light"]);return(i,r)=>{const l=P,n=T,u=A;return d(),p("div",We,[s("div",Qe,[s("div",Xe,[e(l,{tag:"h2",size:3,weight:"semi",leading:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(o.title),1)]),_:1},8,["inverted"]),s("p",{class:k(["paragraph max-w-tp-full medium:max-w-4 mb-5",a(g)])},b(o.content),3),q(i.$slots,"features",{},()=>[s("div",Ye,[(d(!0),p(h,null,H(o.features.slice(0,2),(c,m)=>(d(),p("div",{key:m,class:"column is-6"},[s("div",Ze,[e(l,{tag:"h3",size:6,weight:"semi",leading:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(c.title),1)]),_:2},1032,["inverted"]),s("p",{class:k(["paragraph max-w-3 rem-95",a(g)])},b(c.text),3),o.links?(d(),C(n,{key:0,link:c.link,size:"small"},null,8,["link"])):E("",!0)])]))),128))])])]),s("div",et,[q(i.$slots,"image",{},()=>[e(u,{src:o.image,"src-dark":o.darkImage,class:k(["block","mx-auto"]),alt:"featured image"},null,8,["src","src-dark"])])])])])}}}),st={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ot=`
<script setup lang="ts">
import { features3 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockE
    title="VR For Business."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
      inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
      respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
      constructio interrete. Disserendi artem nullam habuit. Videsne quam
      sit magna dissensio? Ecce aliud simile dissimile."
    :features="features3"
    image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/vr.svg"
    dark-image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/vr-dark.svg"
    links
  />
</template>
`,at=`
export const features3: SimpleFeature[] = [
  {
    title: 'Monthly reports',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Pro Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`,it=s("div",{class:"py-4"},null,-1),lt=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),nt=v({setup(f){return(o,g)=>{const i=F,r=tt,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E",subtitle:"Feature block E variation 1",link:"block-e-props"}),e(r,{title:"Grow Faster.",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile.`,features:a(j),image:"/https://infernaco.com/spark-files/assets/illustrations/features/thinking.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/thinking.svg"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E",subtitle:"Feature block E variation 2",link:"block-e-props",inverted:""}),e(r,{title:"Grow Faster.",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile.`,features:a(j),image:"/https://infernaco.com/spark-files/assets/illustrations/features/bike-dark.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/bike-dark.svg",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E",subtitle:"Feature block E variation 3",link:"block-e-props"}),e(r,{title:"VR For Business.",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile.`,features:a(j),image:"/https://infernaco.com/spark-files/assets/illustrations/features/vr.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/vr-dark.svg",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E Props",subtitle:"Available props for block E"}),it,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(ot)},null,8,["code"])]),props:t(()=>[e(c,{props:a(st).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(at)},null,8,["code"])]),usage:t(()=>[lt]),_:1})]),_:1})]),_:1})],64)}}}),rt={class:"py-6"},ut={class:"columns is-multiline is-vcentered"},ct={class:"column is-6"},dt={class:"column is-6"},mt={class:"mb-6"},pt={class:"columns is-multiline b-columns-half-tablet-p"},ft={class:"py-2 medium:py-4"},gt=v({props:{title:null,features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.inverted&&"text-light"]);return(i,r)=>{const l=A,n=P,u=T;return d(),p("div",rt,[s("div",ut,[s("div",ct,[q(i.$slots,"image",{},()=>[e(l,{src:o.image,"src-dark":o.darkImage,class:k(["block","mx-auto"]),alt:"featured image"},null,8,["src","src-dark"])])]),s("div",dt,[q(i.$slots,"title",{},()=>[s("div",mt,[e(n,{tag:"h2",size:3,weight:"bold",narrow:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(o.title),1)]),_:1},8,["inverted"])])]),q(i.$slots,"features",{},()=>[s("div",pt,[(d(!0),p(h,null,H(o.features.slice(0,4),(c,m)=>(d(),p("div",{key:m,class:"column is-6"},[s("div",ft,[e(n,{tag:"h3",size:6,weight:"semi",leading:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(c.title),1)]),_:2},1032,["inverted"]),s("p",{class:k(["paragraph max-w-3",a(g)])},b(c.text),3),o.links?(d(),C(u,{key:0,link:c.link,size:"small"},null,8,["link"])):E("",!0)])]))),128))])])])])])}}}),bt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},_t=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockF
    title="On point delivery."
    :features="features4"
    image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/flying.svg"
    dark-image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/flying-dark.svg"
    links
  />
</template>
`,kt=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

`,vt=s("div",{class:"py-4"},null,-1),ht=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),yt=v({setup(f){return(o,g)=>{const i=F,r=gt,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F",subtitle:"Feature block F variation 1",link:"block-f-props"}),e(r,{title:"On point delivery.",features:a(V),image:"/https://infernaco.com/spark-files/assets/illustrations/features/bike.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/bike-dark.svg"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F",subtitle:"Feature block F variation 2",link:"block-f-props",inverted:""}),e(r,{title:"On point delivery.",features:a(V),image:"/https://infernaco.com/spark-files/assets/illustrations/features/flying-dark.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/flying-dark.svg",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F",subtitle:"Feature block F variation 3",link:"block-f-props"}),e(r,{title:"On point delivery.",features:a(V),image:"/https://infernaco.com/spark-files/assets/illustrations/features/flying.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/flying-dark.svg",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F Props",subtitle:"Available props for block F"}),vt,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(_t)},null,8,["code"])]),props:t(()=>[e(c,{props:a(bt).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(kt)},null,8,["code"])]),usage:t(()=>[ht]),_:1})]),_:1})]),_:1})],64)}}}),xt={class:"py-6"},Bt={class:"columns is-multiline"},qt={class:"column is-12"},wt={class:"block mb-4 has-text-centered mx-auto max-w-8"},Ft={class:"columns b-columns-third-tablet-p has-text-left mt-4"},It={class:"media"},$t={class:"media-left"},Lt=["data-icon"],Dt={class:"media-content"},St=v({props:{features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.inverted&&"text-light"]);return(i,r)=>{const l=A,n=Y,u=P,c=T;return d(),p("div",xt,[s("div",Bt,[s("div",qt,[s("div",wt,[q(i.$slots,"image",{},()=>[e(l,{src:o.image,"src-dark":o.darkImage,alt:"featured image"},null,8,["src","src-dark"])]),s("div",Ft,[q(i.$slots,"features",{},()=>[(d(!0),p(h,null,H(o.features.slice(0,3),(m,w)=>(d(),p("div",{key:w,class:"column is-4"},[s("div",It,[s("div",$t,[e(n,{color:m.color,size:"small",inverted:o.inverted},{default:t(()=>[s("i",{class:"iconify","data-icon":m.icon},null,8,Lt)]),_:2},1032,["color","inverted"])]),s("div",Dt,[e(u,{tag:"h3",size:6,weight:"semi",leading:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(m.title),1)]),_:2},1032,["inverted"]),s("p",{class:k(["paragraph rem-90",a(g)])},b(m.text),3),o.links?(d(),C(c,{key:0,link:m.link,size:"small"},null,8,["link"])):E("",!0)])])]))),128))])])])])])])}}}),zt={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ht=`
<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockG
    :features="features5"
    image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/feature-image-tablet.svg"
    dark-image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/feature-image-tablet.svg"
    links
  />
</template>
`,Ct=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

`,Et=s("div",{class:"py-4"},null,-1),Pt=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),At=v({setup(f){return(o,g)=>{const i=F,r=St,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-g-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G",subtitle:"Feature block G variation 1",link:"block-g-props"}),e(r,{features:a(G),image:"/https://infernaco.com/spark-files/assets/illustrations/features/feature-image-meditation.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/feature-image-meditation.svg"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G",subtitle:"Feature block G variation 2",link:"block-g-props",inverted:""}),e(r,{features:a(G),image:"/https://infernaco.com/spark-files/assets/demo/img/content/800x400/1.jpg","dark-image":"/https://infernaco.com/spark-files/assets/demo/img/content/800x400/1.jpg",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G",subtitle:"Feature block G variation 3",link:"block-g-props"}),e(r,{features:a(G),image:"/https://infernaco.com/spark-files/assets/illustrations/features/feature-image-tablet.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/feature-image-tablet.svg",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-g-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G Props",subtitle:"Available props for block G"}),Et,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Ht)},null,8,["code"])]),props:t(()=>[e(c,{props:a(zt).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Ct)},null,8,["code"])]),usage:t(()=>[Pt]),_:1})]),_:1})]),_:1})],64)}}}),Tt={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Vt=`
<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockH :features="features" :columns="3" :limit="8" />
</template>
`,Rt=`
export const features: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]
`,Nt=s("div",{class:"py-4"},null,-1),jt=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Gt=v({setup(f){return(o,g)=>{const i=F,r=ie,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-h-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 1",link:"block-h-props"}),e(r,{features:a(B)},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 2",link:"block-h-props"}),e(r,{features:a(B),rounded:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 3",link:"block-h-props",inverted:""}),e(r,{features:a(B),rounded:"",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 4",link:"block-h-props"}),e(r,{features:a(B),columns:3,limit:8},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-h-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H Props",subtitle:"Available props for block H"}),Nt,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Vt)},null,8,["code"])]),props:t(()=>[e(c,{props:a(Tt).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Rt)},null,8,["code"])]),usage:t(()=>[jt]),_:1})]),_:1})]),_:1})],64)}}});const Mt={class:"py-6"},Jt={class:"pb-6"},Kt={class:"columns is-multiline b-columns-half-tablet-p"},Ut=v({props:{title:null,content:null,features:null,columns:{default:4},limit:{default:3},links:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.rounded&&"image-rounded"]),i=y(()=>[o.columns&&`is-${o.columns}`]),r=y(()=>[o.inverted&&"text-light"]),l=y(()=>[o.columns!=6&&"rem-90",o.columns===6&&"rem-95",o.inverted&&"text-light"]);return(n,u)=>{const c=P,m=A,w=T;return d(),p("div",Mt,[q(n.$slots,"title",{},()=>[s("div",Jt,[e(c,{tag:"h2",size:3,weight:"bold",leading:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(o.title),1)]),_:1},8,["inverted"]),s("p",{class:k(["paragraph max-w-7 pt-2",a(r)])},b(o.content),3)])],!0),s("div",Kt,[(d(!0),p(h,null,H(o.features.slice(0,o.limit),(x,N)=>(d(),p("div",{key:N,class:k(["column mobile:mb-6",a(i)])},[e(m,{class:k([...a(g)]),src:x.image,"src-dark":x.darkImage,alt:"featured image"},null,8,["class","src","src-dark"]),s("div",null,[e(c,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(x.title),1)]),_:2},1032,["inverted"]),s("p",{class:k(["paragraph pt-2",a(l)])},b(x.text),3),o.links?(d(),C(w,{key:0,link:x.link,size:"small"},null,8,["link"])):E("",!0)])],2))),128))])])}}});var Ot=R(Ut,[["__scopeId","data-v-da9ff6e4"]]);const Wt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Qt=`
<script setup lang="ts">
import { features7 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockI
    title="Amazing Features"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
    inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
    respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
    constructio interrete. Disserendi artem nullam habuit."
    :features="features7"
    links
    rounded
  />
</template>
`,Xt=`
export const features7: ImageFeature[] = [
  {
    title: 'Forest places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-1.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-1.svg',
    link: '/',
  },
  {
    title: 'Authentic places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-2.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-2.svg',
    link: '/',
  },
  {
    title: 'Countryside places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-3.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-3.svg',
    link: '/',
  },
  {
    title: 'Waterfall places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-4.svg',
    darkImage: '/https://infernaco.com/spark-files/assets/illustrations/features/standard-landscape-4.svg',
    link: '/',
  },
]
`,Yt=s("div",{class:"py-4"},null,-1),Zt=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),es=v({setup(f){return(o,g)=>{const i=F,r=Ot,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-i-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 1",link:"block-i-props"}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(J)},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 2",link:"block-i-props",inverted:""}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(J),inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 3",link:"block-i-props"}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(M),links:"",rounded:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 4",link:"block-i-props",inverted:""}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(M),links:"",rounded:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 5",link:"block-i-props"}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(M),columns:3,limit:4,rounded:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-i-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I Props",subtitle:"Available props for block I"}),Yt,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Qt)},null,8,["code"])]),props:t(()=>[e(c,{props:a(Wt).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Xt)},null,8,["code"])]),usage:t(()=>[Zt]),_:1})]),_:1})]),_:1})],64)}}});const ts={class:"py-6"},ss={class:"columns is-vcentered md:mb-4"},os={class:"column is-5"},as={class:"column is-6 is-offset-1"},is={class:"columns b-columns-half-tablet-p"},ls={class:"py-2 medium:py-4"},ns=v({props:{title:null,content:null,features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.inverted&&"text-light"]);return(i,r)=>{const l=P,n=A,u=T;return d(),p("div",ts,[s("div",ss,[s("div",os,[q(i.$slots,"content",{},()=>[e(l,{tag:"h2",size:3,weight:"semi",leading:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(o.title),1)]),_:1},8,["inverted"]),s("p",{class:k(["paragraph max-w-tp-full medium:max-w-4 mb-4",a(g)])},b(o.content),3)],!0)]),s("div",as,[q(i.$slots,"image",{},()=>[e(n,{src:o.image,"src-dark":o.darkImage,class:k(["mx-auto"]),alt:"featured image"},null,8,["src","src-dark"])],!0)])]),s("div",is,[(d(!0),p(h,null,H(o.features.slice(0,4),(c,m)=>(d(),p("div",{key:m,class:"column is-3"},[s("div",ls,[e(l,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(c.title),1)]),_:2},1032,["inverted"]),s("p",{class:k(["paragraph rem-95 pt-2 max-w-3",a(g)])},b(c.text),3),o.links?(d(),C(u,{key:0,link:c.link,size:"small"},null,8,["link"])):E("",!0)])]))),128))])])}}});var rs=R(ns,[["__scopeId","data-v-24748415"]]);const us={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},cs=`
<script setup lang="ts">
import { features8 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockJ
    title="Fresh Vegetables"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
      enim inter se dissentiunt. Expectoque quid ad id, quod
      quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
      Duo Reges: constructio interrete. Disserendi artem nullam
      habuit. Videsne quam sit magna dissensio? Ecce aliud simile
      dissimile."
    image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/carrying-vegetables.svg"
    dark-image="/@src/https://infernaco.com/spark-files/assets/illustrations/features/carrying-vegetables.svg"
    :features="features8"
    links
  />
</template>
`,ds=`
export const features8: SimpleFeature[] = [
  {
    title: 'Delivered to your place',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Fresh and yummy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'No GMOs',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Reseller program',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`,ms=s("div",{class:"py-4"},null,-1),ps=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),fs=v({setup(f){return(o,g)=>{const i=F,r=rs,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-j-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block J",subtitle:"Feature block J variation 1",link:"block-j-props"}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,image:"/https://infernaco.com/spark-files/assets/illustrations/features/carrying-vegetables.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/carrying-vegetables.svg",features:a(K),links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block J",subtitle:"Feature block J variation 2",link:"block-j-props",inverted:""}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,image:"/https://infernaco.com/spark-files/assets/illustrations/features/carrying-vegetables.svg","dark-image":"/https://infernaco.com/spark-files/assets/illustrations/features/carrying-vegetables.svg",features:a(K),links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-j-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block J Props",subtitle:"Available props for block J"}),ms,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(cs)},null,8,["code"])]),props:t(()=>[e(c,{props:a(us).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(ds)},null,8,["code"])]),usage:t(()=>[ps]),_:1})]),_:1})]),_:1})],64)}}});const gs={class:"py-6"},bs={class:"columns is-multiline is-vcentered"},_s={class:"column is-5"},ks={class:"column is-6 is-offset-1"},vs={class:"columns is-multiline b-columns-half-tablet-p"},hs={class:"py-2 medium:py-4"},ys=v({props:{title:null,content:null,features:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const o=f,g=y(()=>[o.inverted&&"text-light"]);return(i,r)=>{const l=P,n=T;return d(),p("div",gs,[s("div",bs,[s("div",_s,[q(i.$slots,"content",{},()=>[e(l,{tag:"h2",size:2,weight:"semi",leading:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(o.title),1)]),_:1},8,["inverted"]),s("p",{class:k(["paragraph max-w-tp-full medium:max-w-4 mb-4",a(g)])},b(o.content),3)],!0)]),s("div",ks,[s("div",vs,[(d(!0),p(h,null,H(o.features.slice(0,4),(u,c)=>(d(),p("div",{key:c,class:"column is-6"},[s("div",hs,[e(l,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:o.inverted},{default:t(()=>[s("span",null,b(u.title),1)]),_:2},1032,["inverted"]),s("p",{class:k(["paragraph rem-95 pt-2 max-w-3",a(g)])},b(u.text),3),o.links?(d(),C(n,{key:0,link:u.link,label:"Read More",size:"small"},null,8,["link"])):E("",!0)])]))),128))])])])])}}});var xs=R(ys,[["__scopeId","data-v-4efdf4cd"]]);const Bs={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},qs=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockK
    title="Fresh Vegetables"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
      enim inter se dissentiunt. Expectoque quid ad id, quod
      quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
      Duo Reges: constructio interrete. Disserendi artem nullam
      habuit. Videsne quam sit magna dissensio? Ecce aliud simile
      dissimile."
    :features="features4"
    links
  />
</template>
`,ws=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

`,Fs=s("div",{class:"py-4"},null,-1),Is=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),$s=v({setup(f){return(o,g)=>{const i=F,r=xs,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-k-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block K",subtitle:"Feature block K variation 1",link:"block-k-props"}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,features:a(V),links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block K",subtitle:"Feature block K variation 1",link:"block-k-props",inverted:""}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,features:a(V),links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-k-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block K Props",subtitle:"Available props for block K"}),Fs,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(qs)},null,8,["code"])]),props:t(()=>[e(c,{props:a(Bs).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(ws)},null,8,["code"])]),usage:t(()=>[Is]),_:1})]),_:1})]),_:1})],64)}}}),Ls={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"blob",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"dots",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ds=`
<script setup lang="ts">
import { features9 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockL :features="features9" blob dots links />
</template>
`,Ss=`
export const features9: BlobFeature[] = [
  {
    subtitle: 'Teamwork',
    title: 'Collaborate easily',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: '/https://infernaco.com/spark-files/assets/demo/img/features/side-feature-1.jpg',
    link: '/',
  },
  {
    subtitle: 'Efficiency',
    title: 'Save tons of time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: '/https://infernaco.com/spark-files/assets/demo/img/features/side-feature-2.jpg',
    link: '/',
  },
  {
    subtitle: 'Satisfaction',
    title: 'Get the job done',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: '/https://infernaco.com/spark-files/assets/demo/img/features/side-feature-3.jpg',
    link: '/',
  },
]
`,zs=s("div",{class:"py-4"},null,-1),Hs=s("p",{class:"paragraph rem-95"},[_(" Spark ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),s("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Cs=v({setup(f){return(o,g)=>{const i=F,r=ne,l=D,n=S,u=I,c=L,m=$;return d(),p(h,null,[e(n,{id:"block-l-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block L",subtitle:"Feature block L variation 1",link:"block-l-props"}),e(r,{features:a(U),blob:"",dots:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block L",subtitle:"Feature block L variation 1",link:"block-l-props",inverted:""}),e(r,{features:a(U),blob:"",dots:"",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-l-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block L Props",subtitle:"Available props for block L"}),zs,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Ds)},null,8,["code"])]),props:t(()=>[e(c,{props:a(Ls).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Ss)},null,8,["code"])]),usage:t(()=>[Hs]),_:1})]),_:1})]),_:1})],64)}}}),Ws=v({setup(f){const o=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"},{label:"Block I",target:"block-i-demo"},{label:"Block J",target:"block-j-demo"},{label:"Block K",target:"block-k-demo"},{label:"Block L",target:"block-l-demo"}];return(g,i)=>{const r=se,l=te;return d(),p("div",null,[e(r,{title:"Feature Blocks",subtitle:"More than 12 customizable feature blocks are awaiting for you to build your own layouts, pages, and content."}),e(l,{links:o,width:"1080px"}),e(pe),e(ve),e(Ce),e(Oe),e(nt),e(yt),e(At),e(Gt),e(es),e(fs),e($s),e(Cs),e(oe)])}}});export{Ws as default};
