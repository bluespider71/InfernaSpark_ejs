import{_ as C}from"./DemoLinks.b68e1d3f.js";import{_ as v,a as H}from"./DemoTitle.8129d84d.js";import{_ as y,a as q}from"./PrismCode.c318c48c.js";import{_ as B}from"./DemoProps.3732b33d.js";import{v as g,o as u,f as d,h as t,w as e,A as n,F as h,g as o,n as w,M as x,e as I,y as M,G as T,D as R,m as L,z as k,p as P,k as D,q as j,P as J,C as z,a3 as G}from"./index.65d9db8a.js";import{_ as U}from"./TestimonialBlockA.929f6112.js";import{b as f,a as E,c as S,s as A}from"./index.9576ac9e.js";import{_ as V}from"./TestimonialBlockC.665399ee.js";import{_ as K}from"./TestimonialBlockE.0f34ee57.js";import{D as F}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";import"./FooterBubbles.b04e47b0.js";const N={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"boxed",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},O=`
<script setup lang="ts">
import { baseTestimonials } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockA :testimonials="baseTestimonials" boxed :columns="3" :limit="8" />
</template>
`,W=`
export const baseTestimonials = [
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg',
    name: 'Henry Statterman',
    position: 'Sales Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/19.jpg',
    name: 'Joey Bagara',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/21.jpg',
    name: 'Linda Stinson',
    position: 'Art Director',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/17.jpg',
    name: 'Anika Geller',
    position: 'Business Analyst',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/35.jpg',
    name: 'Ross Martin',
    position: 'Product Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg',
    name: 'Miranda Wallace',
    position: 'UX Designer',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg',
    name: 'Anna Klecenszki',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/43.jpg',
    name: 'Taha El Maliki',
    position: 'Business Developer',
  },
]
`,X=o("div",{class:"py-4"},null,-1),Y=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Q=g({setup(c){return(m,_)=>{const i=v,l=U,s=w,a=x,r=y,b=B,p=q;return u(),d(h,null,[t(a,{id:"block-a-demo","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),t(l,{testimonials:n(f),limit:6},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),t(l,{testimonials:n(f),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),t(l,{testimonials:n(f),limit:8,columns:3},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block A",subtitle:"Block A variation 4",link:"block-a-props"}),t(l,{testimonials:n(f),boxed:""},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block A",subtitle:"Block A variation 4",link:"block-a-props"}),t(l,{testimonials:n(f),boxed:"",columns:3,limit:8},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{id:"block-a-props","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block A Props",subtitle:"Available props for block A"}),X,t(p,null,{code:e(()=>[t(r,{language:"html",code:n(O)},null,8,["code"])]),props:e(()=>[t(b,{props:n(N).props},null,8,["props"])]),sample:e(()=>[t(r,{language:"javascript",code:n(W)},null,8,["code"])]),usage:e(()=>[Y]),_:1})]),_:1})]),_:1})],64)}}});const Z=c=>(P("data-v-39076c6a"),c=c(),D(),c),tt={class:"py-6"},et=["src"],ot={class:"is-relative max-w-5 px-4 small:px-0 small:mx-auto"},at={class:"paragraph rem-90 mb-4"},st=Z(()=>o("i",{class:"iconify mr-2 text-light","data-icon":"fa:quote-left"},null,-1)),it={class:"paragraph rem-90 text-light"},nt=["src"],lt=g({props:{testimonials:null,squared:{type:Boolean,default:!1},limit:{default:3}},setup(c){const m=c,_=M(()=>[m.squared&&"is-squared"]);return(i,l)=>{const s=j;return u(),d("div",tt,[(u(!0),d(h,null,T(m.testimonials.slice(0,m.limit),(a,r)=>(u(),d("div",{key:r,class:R(["testimonial-box max-w-7 mx-auto",n(_)])},[o("div",null,[o("img",{class:"testimonial-avatar small:mx-auto small:mb-4",src:a.avatar,alt:"Testimonial image"},null,8,et)]),o("div",ot,[o("p",at,[st,L(" "+k(a.content),1)]),t(s,{tag:"h3",size:7,weight:"semi",narrow:""},{default:e(()=>[o("span",null,k(a.name),1)]),_:2},1024),o("p",it,k(a.position),1),o("img",{class:"testimonial-logo",src:a.logo,alt:"company logo"},null,8,nt)])],2))),128))])}}});var rt=I(lt,[["__scopeId","data-v-39076c6a"]]);const ct={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},mt=`
<script setup lang="ts">
import { boxedTestimonials2 } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockB :testimonials="boxedTestimonials2" squared />
</template>
`,ut=`
export const baseTestimonials = [
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg',
    name: 'Henry Statterman',
    position: 'Sales Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/19.jpg',
    name: 'Joey Bagara',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/21.jpg',
    name: 'Linda Stinson',
    position: 'Art Director',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/17.jpg',
    name: 'Anika Geller',
    position: 'Business Analyst',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/35.jpg',
    name: 'Ross Martin',
    position: 'Product Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg',
    name: 'Miranda Wallace',
    position: 'UX Designer',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg',
    name: 'Anna Klecenszki',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/43.jpg',
    name: 'Taha El Maliki',
    position: 'Business Developer',
  },
]
`,pt=o("div",{class:"py-4"},null,-1),dt=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),bt=g({setup(c){return(m,_)=>{const i=v,l=rt,s=w,a=x,r=y,b=B,p=q;return u(),d(h,null,[t(a,{id:"block-b-demo","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),t(l,{testimonials:n(E)},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),t(l,{testimonials:n(S),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{id:"block-b-props","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block B Props",subtitle:"Available props for block B"}),pt,t(p,null,{code:e(()=>[t(r,{language:"html",code:n(mt)},null,8,["code"])]),props:e(()=>[t(b,{props:n(ct).props},null,8,["props"])]),sample:e(()=>[t(r,{language:"javascript",code:n(ut)},null,8,["code"])]),usage:e(()=>[dt]),_:1})]),_:1})]),_:1})],64)}}}),_t={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ht=`
<script setup lang="ts">
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockC :testimonials="boxedTestimonials" squared />
</template>
`,gt=`
export const boxedTestimonials = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg',
    name: 'Henry Statterman',
    position: 'Sales Manager',
    logo: '/https://infernaco.com/spark-files/assets/brands/infinite.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/19.jpg',
    name: 'Joey Bagara',
    position: 'Project Manager',
    logo: '/https://infernaco.com/spark-files/assets/brands/proactive.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/21.jpg',
    name: 'Linda Stinson',
    position: 'Art Director',
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/17.jpg',
    name: 'Anika Geller',
    position: 'Business Analyst',
    logo: '/https://infernaco.com/spark-files/assets/brands/kromo.svg',
  },
]
`,kt=o("div",{class:"py-4"},null,-1),ft=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),vt=g({setup(c){return(m,_)=>{const i=v,l=V,s=w,a=x,r=y,b=B,p=q;return u(),d(h,null,[t(a,{id:"block-c-demo","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),t(l,{testimonials:n(S)},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props"}),t(l,{testimonials:n(E),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{id:"block-c-props","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block C Props",subtitle:"Available props for block C"}),kt,t(p,null,{code:e(()=>[t(r,{language:"html",code:n(ht)},null,8,["code"])]),props:e(()=>[t(b,{props:n(_t).props},null,8,["props"])]),sample:e(()=>[t(r,{language:"javascript",code:n(gt)},null,8,["code"])]),usage:e(()=>[ft]),_:1})]),_:1})]),_:1})],64)}}});const yt=c=>(P("data-v-ab82cba4"),c=c(),D(),c),qt={class:"py-6"},Bt={class:"testimonials"},wt={class:"columns is-multiline"},xt={class:"testimonial-box"},Tt={class:"testimonial-content"},At={class:"mb-4"},It={class:"paragraph rem-80 text-light"},Lt={class:"paragraph rem-85 mb-4"},Pt=yt(()=>o("i",{class:"iconify mr-2 text-light","data-icon":"fa:quote-left"},null,-1)),Dt={class:"social"},jt=["data-icon"],Et={class:"is-sr-only"},St={class:"image"},$t=["src"],Ct=g({props:{testimonials:null,squared:{type:Boolean,default:!1},limit:{default:4}},setup(c){const m=c;return(_,i)=>{const l=j,s=J("RouterLink"),a=G;return u(),d("div",qt,[o("div",Bt,[o("div",wt,[(u(!0),d(h,null,T(m.testimonials.slice(0,m.limit),(r,b)=>(u(),d("div",{key:b,class:"column is-6"},[o("div",xt,[o("div",Tt,[o("div",At,[t(l,{tag:"h3",size:6,weight:"semi",narrow:""},{default:e(()=>[o("span",null,k(r.name),1)]),_:2},1024),o("p",It,k(r.position),1)]),o("p",Lt,[Pt,L(" "+k(r.content),1)]),o("div",Dt,[(u(!0),d(h,null,T(r.socialLinks,(p,$)=>(u(),z(s,{key:$,to:p.url,target:"_blank",class:"px-1"},{default:e(()=>[o("i",{class:"iconify","data-icon":p.icon},null,8,jt),o("span",Et,k(p.name),1)]),_:2},1032,["to"]))),128))])]),o("div",St,[t(a,{size:"xl",picture:r.avatar,squared:m.squared},null,8,["picture","squared"]),o("img",{class:"testimonial-logo",src:r.logo,alt:"company logo"},null,8,$t)])])]))),128))])])])}}});var Ht=I(Ct,[["__scopeId","data-v-ab82cba4"]]);const Mt={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Rt=`
<script setup lang="ts">
import { socialTestimonials } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockD :testimonials="socialTestimonials" squared />
</template>
`,Jt=`
export const socialTestimonials = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/32.jpg',
    name: 'Yenela Paloupakis',
    position: 'Solution Architect',
    logo: '/https://infernaco.com/spark-files/assets/brands/infinite.svg',
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
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/57.jpg',
    name: "Kenneth O'Hara",
    position: 'Project Manager',
    logo: '/https://infernaco.com/spark-files/assets/brands/proactive.svg',
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
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/15.jpg',
    name: 'Melinda Callaway',
    position: 'Customer Support',
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
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
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/33.jpg',
    name: 'Eddie Finch',
    position: 'Business Analyst',
    logo: '/https://infernaco.com/spark-files/assets/brands/kromo.svg',
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
`,zt=o("div",{class:"py-4"},null,-1),Gt=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Ut=g({setup(c){return(m,_)=>{const i=v,l=Ht,s=w,a=x,r=y,b=B,p=q;return u(),d(h,null,[t(a,{id:"block-d-demo","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),t(l,{testimonials:n(A)},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{id:"block-d-demo","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"}),t(l,{testimonials:n(A),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),t(a,{id:"block-d-props","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block D Props",subtitle:"Available props for block D"}),zt,t(p,null,{code:e(()=>[t(r,{language:"html",code:n(Rt)},null,8,["code"])]),props:e(()=>[t(b,{props:n(Mt).props},null,8,["props"])]),sample:e(()=>[t(r,{language:"javascript",code:n(Jt)},null,8,["code"])]),usage:e(()=>[Gt]),_:1})]),_:1})]),_:1})],64)}}}),Vt={props:[{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"name",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"position",type:"string",required:"true",default:"undefined",values:["string"]},{name:"logo",type:"string",required:"false",default:"undefined",values:["string"]},{name:"curved",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"reversed",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Kt=`
<template>
  <TestimonialBlockE
    image="https://dummyimage.com/800x600.jpg"
    name="Kim Lee Seung"
    position="Solution Architect"
    content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate 
    quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
    logo="/@src/https://infernaco.com/spark-files/assets/brands/kromo.svg"
    curved
    reversed
  />
</template>
`,Ft=o("div",{class:"py-4"},null,-1),Nt=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ot=o("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Wt=g({setup(c){return(m,_)=>{const i=v,l=K,s=w,a=x,r=y,b=B,p=q;return u(),d(h,null,[t(a,{id:"block-e-demo","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block E",subtitle:"Block E variation 1",link:"block-e-props"}),t(l,{image:"/https://infernaco.com/spark-files/assets/demo/img/people/3.jpg",name:"Irina Smirkova",position:"Sales Director",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/https://infernaco.com/spark-files/assets/brands/tribe.svg"})]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block E",subtitle:"Block E variation 2",link:"block-e-props"}),t(l,{image:"/https://infernaco.com/spark-files/assets/demo/img/people/13.jpg",name:"Basile Olembe",position:"General Manager",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/https://infernaco.com/spark-files/assets/brands/infinite.svg",curved:""})]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block E",subtitle:"Block E variation 3",link:"block-e-props"}),t(l,{image:"/https://infernaco.com/spark-files/assets/demo/img/people/7.jpg",name:"Matt Henriks",position:"Ux Design Lead",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/https://infernaco.com/spark-files/assets/brands/proactive.svg",reversed:""})]),_:1})]),_:1}),t(a,{"bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block E",subtitle:"Block E variation 4",link:"block-e-props"}),t(l,{image:"/https://infernaco.com/spark-files/assets/demo/img/people/8.jpg",name:"Kim Lee Seung",position:"Solution Architect",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/https://infernaco.com/spark-files/assets/brands/kromo.svg",curved:"",reversed:""})]),_:1})]),_:1}),t(a,{id:"block-e-props","bordered-bottom":""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{title:"Block E Props",subtitle:"Available props for block E"}),Ft,t(p,null,{code:e(()=>[t(r,{language:"html",code:n(Kt)},null,8,["code"])]),props:e(()=>[t(b,{props:n(Vt).props},null,8,["props"])]),sample:e(()=>[Nt]),usage:e(()=>[Ot]),_:1})]),_:1})]),_:1})],64)}}}),me=g({setup(c){const m=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"}];return(_,i)=>{const l=H,s=C;return u(),d("div",null,[t(l,{title:"Testimonial Blocks",subtitle:"More than 3 customizable Testimonial blocks are awaiting for you to build your own layouts, pages, and content."}),t(s,{links:m,width:"480px"}),t(Q),t(bt),t(vt),t(Ut),t(Wt),t(F)])}}});export{me as default};
