import{_ as I}from"./DemoLinks.b68e1d3f.js";import{_ as L,a as M}from"./DemoTitle.8129d84d.js";import{_ as y,a as B}from"./PrismCode.c318c48c.js";import{_ as T}from"./DemoProps.3732b33d.js";import{e as C,v as g,y as $,P as G,o as u,f as d,g as o,F as _,G as v,D as j,A as i,a4 as E,h as e,w as t,z as f,C as F,q as S,n as D,M as x,H as O,l as R}from"./index.65d9db8a.js";import{b as q,a as P,l as V,c as z,d as w,g as H,_ as U}from"./index.4df1c944.js";import{_ as K}from"./TeamBlockB.d08ca401.js";import{_ as N}from"./TeamBlockC.953851e1.js";import{D as X}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";import"./Bubbles.8c85b5bd.js";import"./FooterBubbles.b04e47b0.js";const J={class:"py-6"},Q={class:"card"},W={class:"card-image"},Y=["src"],Z={class:"card-content"},ee={class:"media is-align-items-center"},te={class:"media-content"},ie={class:"paragraph rem-85"},oe={class:"media-right"},ae=["data-icon"],ne={class:"is-sr-only"},se=g({props:{items:null,columns:{default:3},limit:{default:32},curved:{type:Boolean,default:!1},grayscale:{type:Boolean,default:!1},scale:{type:Boolean,default:!1},plain:{type:Boolean,default:!1}},setup(h){const r=h,k=$(()=>[r.grayscale&&"is-grayscale",r.scale&&"is-scale",r.plain&&"is-plain",r.plain&&r.curved&&"is-curved"]),n=$(()=>[r.columns&&`is-${r.columns}`]);return(l,a)=>{const s=S,c=G("RouterLink");return u(),d("div",J,[o("div",{class:j(["columns is-multiline b-columns-half-tablet-p",i(k)])},[(u(!0),d(_,null,v(r.items.slice(0,r.limit),(m,p)=>(u(),d("div",{key:p,class:j(["column",i(n)])},[o("div",Q,[o("div",W,[o("img",{src:m.image,alt:"Team member image",onErrorOnce:a[0]||(a[0]=b=>i(E)(b,"500x333"))},null,40,Y)]),o("div",Z,[o("div",ee,[o("div",te,[e(s,{tag:"h3",size:7,weight:"semi",narrow:""},{default:t(()=>[o("span",null,f(m.name),1)]),_:2},1024),o("p",ie,f(m.position),1)]),o("div",oe,[(u(!0),d(_,null,v(m.socialLinks,(b,A)=>(u(),F(c,{key:A,to:b.url,target:"_blank",class:"px-1"},{default:t(()=>[o("i",{class:"iconify","data-icon":b.icon},null,8,ae),o("span",ne,f(b.name),1)]),_:2},1032,["to"]))),128))])])])])],2))),128))],2)])}}});var le=C(se,[["__scopeId","data-v-e8eb3e5c"]]);const re={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"grayscale",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"scale",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"plain",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"curved",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ce=`
<script setup lang="ts">
import { boxTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockA :items="boxTeam" :columns="4" :limit="6" scale />
</template>
`,me=`
export const boxTeam = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/2.jpg',
    name: 'Daniel Abikzer',
    position: 'CEO',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/13.jpg',
    name: 'Basile Olembe',
    position: 'General Manager',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/3.jpg',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/6.jpg',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/7.jpg',
    name: 'Matt Henriks',
    position: 'UX Design Lead',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/8.jpg',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/1.jpg',
    name: 'Gianni Collaro',
    position: 'Fullstack Developer',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/12.jpg',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`,ue=o("div",{class:"py-4"},null,-1),pe=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),de=g({setup(h){return(r,k)=>{const n=L,l=le,a=D,s=x,c=y,m=T,p=B;return u(),d(_,null,[e(s,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(l,{items:i(q)},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(l,{items:i(q),columns:4,limit:6,scale:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),e(l,{items:i(q),grayscale:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),e(l,{items:i(q),plain:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),e(l,{items:i(q),plain:"",curved:""},null,8,["items"])]),_:1})]),_:1}),e(s,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block A Props",subtitle:"Available props for block A"}),ue,e(p,null,{code:t(()=>[e(c,{language:"html",code:i(ce)},null,8,["code"])]),props:t(()=>[e(m,{props:i(re).props},null,8,["props"])]),sample:t(()=>[e(c,{language:"javascript",code:i(me)},null,8,["code"])]),usage:t(()=>[pe]),_:1})]),_:1})]),_:1})],64)}}}),be={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"bubbles",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},he=`
<script setup lang="ts">
import { avatarTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockB :items="avatarTeam" squared bubbles />
</template>
`,ke=`
export const avatarTeam = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/2a.jpg',
    name: 'Daniel Abikzer',
    position: 'CEO',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/13a.jpg',
    name: 'Basile Olembe',
    position: 'General Manager',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/3a.jpg',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/6a.jpg',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/7a.jpg',
    name: 'Matt Henriks',
    position: 'UX Design Lead',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/8a.jpg',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/1a.jpg',
    name: 'Gianni Collaro',
    position: 'Fullstack Developer',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/12a.jpg',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`,_e=o("div",{class:"py-4"},null,-1),fe=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),ge=g({setup(h){return(r,k)=>{const n=L,l=K,a=D,s=x,c=y,m=T,p=B;return u(),d(_,null,[e(s,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(l,{items:i(P)},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(l,{items:i(P),squared:"",bubbles:""},null,8,["items"])]),_:1})]),_:1}),e(s,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block B Props",subtitle:"Available props for block B"}),_e,e(p,null,{code:t(()=>[e(c,{language:"html",code:i(he)},null,8,["code"])]),props:t(()=>[e(m,{props:i(be).props},null,8,["props"])]),sample:t(()=>[e(c,{language:"javascript",code:i(ke)},null,8,["code"])]),usage:t(()=>[fe]),_:1})]),_:1})]),_:1})],64)}}}),we={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"bubbles",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ve=`
<script setup lang="ts">
import { longTeam2 } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockC :items="longTeam2" squared bubbles />
</template>
`,Le=`
export const longTeam2 = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/15b.jpg',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/11b.jpg',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/3b.jpg',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/12b.jpg',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`,ye=o("div",{class:"py-4"},null,-1),Be=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Te=g({setup(h){return(r,k)=>{const n=L,l=N,a=D,s=x,c=y,m=T,p=B;return u(),d(_,null,[e(s,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(l,{items:i(V)},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props"}),e(l,{items:i(z),squared:"",bubbles:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block C",subtitle:"Block C variation 3",link:"block-c-props"}),e(l,{items:i(z),squared:"",grayscale:""},null,8,["items"])]),_:1})]),_:1}),e(s,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block C Props",subtitle:"Available props for block C"}),ye,e(p,null,{code:t(()=>[e(c,{language:"html",code:i(ve)},null,8,["code"])]),props:t(()=>[e(m,{props:i(we).props},null,8,["props"])]),sample:t(()=>[e(c,{language:"javascript",code:i(Le)},null,8,["code"])]),usage:t(()=>[Be]),_:1})]),_:1})]),_:1})],64)}}});const De={class:"team-block py-6 mx-auto"},xe={class:"columns is-multiline b-columns-third-tablet-p"},qe=["src"],$e={class:"paragraph rem-85 mb-2"},je={class:"paragraph rem-85 mb-4 text-light mx-auto max-w-3"},He={class:"is-flex is-justify-content-center"},Ae=["data-icon"],Ce={class:"is-sr-only"},Ge={key:0,class:"bubble-container"},Ee=R('<div class="bubble bubble-1" data-v-76c97a76></div><div class="bubble bubble-2" data-v-76c97a76></div><div class="bubble bubble-3" data-v-76c97a76></div><div class="bubble bubble-4" data-v-76c97a76></div><div class="bubble bubble-5" data-v-76c97a76></div>',5),Fe=[Ee],Se=g({props:{items:null,columns:{default:3},limit:{default:8},squared:{type:Boolean,default:!1},bubbles:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(h){const r=h,k=$(()=>[r.squared&&"is-squared",r.animated&&"is-animated"]),n=$(()=>[r.columns&&`is-${r.columns}`]);return(l,a)=>{const s=S,c=G("RouterLink");return u(),d("div",De,[o("div",xe,[(u(!0),d(_,null,v(r.items.slice(0,r.limit),(m,p)=>(u(),d("div",{key:p,class:j(["column",i(n)])},[o("div",{class:j(["team-block-item has-text-centered",i(k)])},[o("img",{class:"block mx-auto size-110x110",src:m.image,alt:"featured image",height:"110",width:"110",onErrorOnce:a[0]||(a[0]=b=>i(E)(b,"110x110"))},null,40,qe),o("div",null,[e(s,{tag:"h3",size:7,weight:"semi",narrow:""},{default:t(()=>[o("span",null,f(m.name),1)]),_:2},1024),o("p",$e,f(m.position),1),o("p",je,f(m.bio),1)]),o("div",He,[(u(!0),d(_,null,v(m.socialLinks,(b,A)=>(u(),F(c,{key:A,to:b.url,target:"_blank",class:"px-2"},{default:t(()=>[o("i",{class:"iconify","data-icon":b.icon},null,8,Ae),o("span",Ce,f(b.name),1)]),_:2},1032,["to"]))),128))]),r.bubbles?(u(),d("div",Ge,Fe)):O("",!0)],2)],2))),128))])])}}});var Pe=C(Se,[["__scopeId","data-v-76c97a76"]]);const ze={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"bubbles",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"grayscale",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ie=`
<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockD :items="cardTeam" bubbles animated squared />
</template>
`,Me=`
export const cardTeam = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/2a.jpg',
    name: 'Daniel Abikzer',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/13a.jpg',
    name: 'Basile Olembe',
    position: 'General Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/3a.jpg',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/6a.jpg',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/15a.jpg',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/11a.jpg',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/8a.jpg',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/12a.jpg',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`,Oe=o("div",{class:"py-4"},null,-1),Re=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Ve=g({setup(h){return(r,k)=>{const n=L,l=Pe,a=D,s=x,c=y,m=T,p=B;return u(),d(_,null,[e(s,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(l,{items:i(w)},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"}),e(l,{items:i(w),bubbles:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"}),e(l,{items:i(w),bubbles:"",animated:"",squared:""},null,8,["items"])]),_:1})]),_:1}),e(s,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block D Props",subtitle:"Available props for block D"}),Oe,e(p,null,{code:t(()=>[e(c,{language:"html",code:i(Ie)},null,8,["code"])]),props:t(()=>[e(m,{props:i(ze).props},null,8,["props"])]),sample:t(()=>[e(c,{language:"javascript",code:i(Me)},null,8,["code"])]),usage:t(()=>[Re]),_:1})]),_:1})]),_:1})],64)}}}),Ue={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"9",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"animated",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ke=`
<script setup lang="ts">
import { gridTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockE :items="gridTeam" :limit="12" squared shapes animated />
</template>
`,Ne=`
export const cardTeam = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/2a.jpg',
    name: 'Daniel Abikzer',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/13a.jpg',
    name: 'Basile Olembe',
    position: 'General Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/3a.jpg',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/6a.jpg',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/15a.jpg',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/11a.jpg',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/8a.jpg',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/12a.jpg',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`,Xe=o("div",{class:"py-4"},null,-1),Je=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Qe=g({setup(h){return(r,k)=>{const n=L,l=U,a=D,s=x,c=y,m=T,p=B;return u(),d(_,null,[e(s,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block E",subtitle:"Block E variation 1",link:"block-e-props"}),e(l,{items:i(H)},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block E",subtitle:"Block E variation 2",link:"block-e-props"}),e(l,{items:i(H),squared:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block E",subtitle:"Block E variation 3",link:"block-e-props"}),e(l,{items:i(H),limit:12,shapes:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block E",subtitle:"Block E variation 4",link:"block-e-props"}),e(l,{items:i(H),limit:12,squared:"",shapes:"",animated:""},null,8,["items"])]),_:1})]),_:1}),e(s,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block E Props",subtitle:"Available props for block E"}),Xe,e(p,null,{code:t(()=>[e(c,{language:"html",code:i(Ke)},null,8,["code"])]),props:t(()=>[e(m,{props:i(Ue).props},null,8,["props"])]),sample:t(()=>[e(c,{language:"javascript",code:i(Ne)},null,8,["code"])]),usage:t(()=>[Je]),_:1})]),_:1})]),_:1})],64)}}});const We={class:"columns is-multiline b-columns-half-tablet-p"},Ye={class:"team-block-item media is-align-items-center mb-8"},Ze={class:"media-left"},et=["src"],tt={class:"media-content ml-2"},it={class:"paragraph rem-85"},ot={class:"paragraph bio rem-85 mb-1 text-light"},at={class:"is-flex"},nt=["data-icon"],st={class:"is-sr-only"},lt=g({props:{items:null,limit:{default:6},squared:{type:Boolean,default:!1},bubbles:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(h){const r=h,k=$(()=>[r.squared&&"is-squared",r.animated&&"is-animated"]);return(n,l)=>{const a=S,s=G("RouterLink");return u(),d("div",{class:j(["team-block py-6",i(k)])},[o("div",We,[(u(!0),d(_,null,v(r.items.slice(0,r.limit),(c,m)=>(u(),d("div",{key:m,class:"column is-4"},[o("div",Ye,[o("div",Ze,[o("img",{class:"block size-120x120",src:c.image,alt:"Team member photo",height:"120",width:"120",onErrorOnce:l[0]||(l[0]=p=>i(E)(p,"120x120"))},null,40,et)]),o("div",tt,[o("div",null,[e(a,{tag:"h3",size:7,weight:"semi",narrow:""},{default:t(()=>[o("span",null,f(c.name),1)]),_:2},1024),o("p",it,f(c.position),1),o("p",ot,f(c.bio),1)]),o("div",at,[(u(!0),d(_,null,v(c.socialLinks,(p,b)=>(u(),F(s,{key:b,to:p.url,target:"_blank",class:"mr-2"},{default:t(()=>[o("i",{class:"iconify","data-icon":p.icon},null,8,nt),o("span",st,f(p.name),1)]),_:2},1032,["to"]))),128))])])])]))),128))])],2)}}});var rt=C(lt,[["__scopeId","data-v-0f486bc2"]]);const ct={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"shapes",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"animated",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},mt=`
<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockF :items="cardTeam" squared animated />
</template>
`,ut=`
export const cardTeam = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/2a.jpg',
    name: 'Daniel Abikzer',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/13a.jpg',
    name: 'Basile Olembe',
    position: 'General Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/3a.jpg',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/6a.jpg',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/15a.jpg',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/11a.jpg',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/8a.jpg',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/people/12a.jpg',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`,pt=o("div",{class:"py-4"},null,-1),dt=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),bt=g({setup(h){return(r,k)=>{const n=L,l=rt,a=D,s=x,c=y,m=T,p=B;return u(),d(_,null,[e(s,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block F",subtitle:"Block F variation 1",link:"block-f-props"}),e(l,{items:i(w)},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block F",subtitle:"Block F variation 2",link:"block-f-props"}),e(l,{items:i(w),squared:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block F",subtitle:"Block F variation 3",link:"block-f-props"}),e(l,{items:i(w),animated:""},null,8,["items"])]),_:1})]),_:1}),e(s,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block F",subtitle:"Block F variation 4",link:"block-f-props"}),e(l,{items:i(w),squared:"",animated:""},null,8,["items"])]),_:1})]),_:1}),e(s,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block F Props",subtitle:"Available props for block F"}),pt,e(p,null,{code:t(()=>[e(c,{language:"html",code:i(mt)},null,8,["code"])]),props:t(()=>[e(m,{props:i(ct).props},null,8,["props"])]),sample:t(()=>[e(c,{language:"javascript",code:i(ut)},null,8,["code"])]),usage:t(()=>[dt]),_:1})]),_:1})]),_:1})],64)}}}),$t=g({setup(h){const r=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"}];return(k,n)=>{const l=M,a=I;return u(),d("div",null,[e(l,{title:"Team Blocks",subtitle:"More than 6 customizable Team blocks are awaiting for you to build your own layouts, pages, and content."}),e(a,{links:r,width:"600px"}),e(de),e(ge),e(Te),e(Ve),e(Qe),e(bt),e(X)])}}});export{$t as default};
