import{_ as $}from"./DemoLinks.b68e1d3f.js";import{_ as v,a as q}from"./DemoTitle.8129d84d.js";import{v as d,o as u,C as h,w as t,h as e,g as a,A as n,m as i,a3 as A,n as x,M as f,f as w}from"./index.65d9db8a.js";import{_ as b,a as j}from"./PrismCode.c318c48c.js";import{_ as k}from"./AvatarGroup.69ee90ae.js";import{D as C}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./FooterBubbles.b04e47b0.js";const S=`
export type AvatarSimpleSize = 'small' | 
            'medium' | 'large' | 'big' | 'xl' | ''

export interface AvatarSimpleProps {
  size?: AvatarSimpleSize
  picture: string
  squared?: boolean
  badge?: string
}
`,z=`
export const avatars = [
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
]
`,D=`
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="small"
  />
  <AvatarSimple 
    picture="https://dummyimage.com/150x150.jpg" />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="medium"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="large"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="big"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="xl"
  />
</template>
`,T=`
<template>
  <AvatarSimple picture="https://dummyimage.com/150x150" size="small" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="medium" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="large" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="big" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="xl" squared />
</template>
`,G=`
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150"
    size="medium"
    badge="/@src/https://infernaco.com/spark-files/assets/icons/flags/united-states-of-america.svg"
  />
</template>
`,P=`
<template>
  <AvatarGroup 
    size="medium" 
    :avatars="avatars" 
    :limit="5" 
    compact 
    counter 
  />
</template>
`,V=`
<script setup lang="ts">
import type { AvatarSimpleProps } from '/@src/components/base/avatar/AvatarSimplevue'

export type AvatarGroupSize = 'small' | 'medium' | 'large'

export interface AvatarGroupProps {
  avatars: AvatarSimpleProps[]
  size?: AvatarGroupSize
  compact?: boolean
  squared?: boolean
  limit?: number
  counter?: boolean
  boxed?: boolean
}
<\/script>
`,B={class:"mx-auto max-w-6"},Y={class:"py-6"},N={class:"is-flex is-align-items-flex-end is-justify-content-center"},E={class:"px-2"},L={class:"px-2"},F={class:"px-2"},H={class:"px-2"},I={class:"px-2"},M={class:"px-2"},J=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Spark avatars come in different flavors. You can control the avatar size using the "),a("code",null,"size"),i(" prop. Accepted values are "),a("code",null,"small"),i(" , "),a("code",null,"medium"),i(" , "),a("code",null,"large"),i(" , "),a("code",null,"big"),i(" , "),a("code",null,"xl"),i(" . ")],-1),K=d({setup(_){return(r,g)=>{const m=v,s=A,o=b,c=j,l=x,p=f;return u(),h(p,{id:"avatar-size-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[a("div",B,[a("div",Y,[e(m,{title:"Avatar Sizes",subtitle:"Available avatar sizes"}),a("div",N,[a("div",E,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/14.jpg",size:"small"})]),a("div",L,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/41.jpg"})]),a("div",F,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg",size:"medium"})]),a("div",H,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg",size:"large"})]),a("div",I,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/39.jpg",size:"big"})]),a("div",M,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg",size:"xl"})])])]),e(c,null,{code:t(()=>[e(o,{language:"html",code:n(D)},null,8,["code"])]),props:t(()=>[e(o,{language:"javascript",code:n(S)},null,8,["code"])]),sample:t(()=>[e(o,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[J]),_:1})])]),_:1})]),_:1})}}}),O={class:"mx-auto max-w-7"},Q={class:"py-6"},R={class:"is-flex is-align-items-flex-end is-justify-content-center"},U={class:"px-2"},W={class:"px-2"},X={class:"px-2"},Z={class:"px-2"},ee={class:"px-2"},ae={class:"px-2"},se=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Spark avatars come in different flavors. You can control the avatar shape and make it square by using the "),a("code",null,"squared"),i(" prop. This prop is a "),a("code",null,"boolean"),i(" , it doesn't need any value. ")],-1),te=d({setup(_){return(r,g)=>{const m=v,s=A,o=b,c=j,l=x,p=f;return u(),h(p,{id:"avatar-square-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[a("div",O,[a("div",Q,[e(m,{title:"Squared shape",subtitle:"Avatar squared variation"}),a("div",R,[a("div",U,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/14.jpg",size:"small",squared:""})]),a("div",W,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/41.jpg",squared:""})]),a("div",X,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg",size:"medium",squared:""})]),a("div",Z,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg",size:"large",squared:""})]),a("div",ee,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/39.jpg",size:"big",squared:""})]),a("div",ae,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg",size:"xl",squared:""})])])]),e(c,null,{code:t(()=>[e(o,{language:"html",code:n(T)},null,8,["code"])]),props:t(()=>[e(o,{language:"javascript",code:n(S)},null,8,["code"])]),sample:t(()=>[e(o,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[se]),_:1})])]),_:1})]),_:1})}}}),oe={class:"mx-auto max-w-6"},ie={class:"py-6"},ne={class:"is-flex is-align-items-flex-end is-justify-content-center"},ce={class:"px-2"},re={class:"px-2"},me={class:"px-2"},le={class:"px-2"},pe={class:"px-2"},de={class:"px-2"},ue={class:"is-flex is-align-items-flex-end is-justify-content-center pt-4"},_e={class:"px-2"},ge={class:"px-2"},ve={class:"px-2"},he={class:"px-2"},xe={class:"px-2"},fe={class:"px-2"},be=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Spark avatars come in different flavors. You can add a badge to any avatar using the "),a("code",null,"badge"),i(" prop. The badge prop type is a "),a("code",null,"string"),i(" and waits for an image url. ")],-1),je=d({setup(_){return(r,g)=>{const m=v,s=A,o=b,c=j,l=x,p=f;return u(),h(p,{id:"avatar-badge-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[a("div",oe,[a("div",ie,[e(m,{title:"Badge",subtitle:"Avatar badge images"}),a("div",ne,[a("div",ce,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/14.jpg",size:"small",badge:"/https://infernaco.com/spark-files/assets/icons/flags/canada.svg"})]),a("div",re,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/41.jpg",badge:"/https://infernaco.com/spark-files/assets/icons/flags/spain.svg"})]),a("div",me,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg",size:"medium",badge:"/https://infernaco.com/spark-files/assets/icons/flags/brazil.svg"})]),a("div",le,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg",size:"large",badge:"/https://infernaco.com/spark-files/assets/icons/flags/france.svg"})]),a("div",pe,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/39.jpg",size:"big",badge:"/https://infernaco.com/spark-files/assets/icons/flags/germany.svg"})]),a("div",de,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg",size:"xl",badge:"/https://infernaco.com/spark-files/assets/icons/flags/united-states-of-america.svg"})])]),a("div",ue,[a("div",_e,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/14.jpg",size:"small",badge:"/https://infernaco.com/spark-files/assets/icons/flags/canada.svg",squared:""})]),a("div",ge,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/41.jpg",badge:"/https://infernaco.com/spark-files/assets/icons/flags/spain.svg",squared:""})]),a("div",ve,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg",size:"medium",badge:"/https://infernaco.com/spark-files/assets/icons/flags/brazil.svg",squared:""})]),a("div",he,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg",size:"large",badge:"/https://infernaco.com/spark-files/assets/icons/flags/france.svg",squared:""})]),a("div",xe,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/39.jpg",size:"big",badge:"/https://infernaco.com/spark-files/assets/icons/flags/germany.svg",squared:""})]),a("div",fe,[e(s,{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg",size:"xl",badge:"/https://infernaco.com/spark-files/assets/icons/flags/united-states-of-america.svg",squared:""})])])]),e(c,null,{code:t(()=>[e(o,{language:"html",code:n(G)},null,8,["code"])]),props:t(()=>[e(o,{language:"javascript",code:n(S)},null,8,["code"])]),sample:t(()=>[e(o,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[be]),_:1})])]),_:1})]),_:1})}}}),ze={class:"mx-auto max-w-6"},Ae={class:"py-6"},Se={class:"is-flex is-align-items-flex-end is-justify-content-center"},ye=a("div",{class:"py-4"},null,-1),$e={class:"is-flex is-align-items-flex-end is-justify-content-center"},qe=a("div",{class:"py-4"},null,-1),we={class:"is-flex is-align-items-flex-end is-justify-content-center pt-4"},ke=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Spark avatars come in different flavors. Avatars can be grouped using the "),a("code",null,"<AvatarGroup />"),i(" component. It waits for an "),a("code",null,"Array"),i(" of avatars. You can also control the size, the shape, the number of rendered avatars and if you wish to display a counter for the remaining unshown avatars. ")],-1),Ce=d({setup(_){const r=[{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/43.jpg"},{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg"},{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/57.jpg"},{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/19.jpg"},{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg"},{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/39.jpg"},{picture:"/https://infernaco.com/spark-files/assets/demo/img/avatars/41.jpg"}];return(g,m)=>{const s=v,o=k,c=b,l=j,p=x,y=f;return u(),h(y,{id:"avatar-group-demo","bordered-bottom":""},{default:t(()=>[e(p,null,{default:t(()=>[a("div",ze,[a("div",Ae,[e(s,{title:"Group",subtitle:"Avatar groups"}),a("div",Se,[e(o,{size:"medium",avatars:r,limit:5,compact:"",counter:""})]),ye,a("div",$e,[e(o,{size:"small",avatars:r,limit:3})]),qe,a("div",we,[e(o,{avatars:r,limit:5,squared:"",counter:"",compact:""})])]),e(l,null,{code:t(()=>[e(c,{language:"html",code:n(P)},null,8,["code"])]),props:t(()=>[e(c,{language:"javascript",code:n(V)},null,8,["code"])]),sample:t(()=>[e(c,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[ke]),_:1})])]),_:1})]),_:1})}}}),Le=d({setup(_){const r=[{label:"Sizes",target:"avatar-size-demo"},{label:"Square",target:"avatar-square-demo"},{label:"Badge",target:"avatar-badge-demo"},{label:"Group",target:"avatar-group-demo"}];return(g,m)=>{const s=q,o=$;return u(),w("div",null,[e(s,{title:"Avatar Component",subtitle:"Avatars have become a central component in almost all web and mobile application. Explore Spark avatars."}),e(o,{links:r,width:"340px"}),e(K),e(te),e(je),e(Ce),e(C)])}}});export{Le as default};
