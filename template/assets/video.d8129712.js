import{_ as A}from"./DemoLinks.b68e1d3f.js";import{_ as k,a as S}from"./DemoTitle.8129d84d.js";import{D as V}from"./DocumentationFooter.26e38be2.js";import{_ as b,a as v}from"./PrismCode.c318c48c.js";import{_ as B}from"./DemoProps.3732b33d.js";import{v as d,o as m,f as _,h as e,w as t,A as o,F as y,g as h,n as x,M as C}from"./index.65d9db8a.js";import{_ as q}from"./VideoBlockA.d067f87f.js";import{c as u,d as P}from"./index.0f18d7b9.js";import{_ as L}from"./VideoBlockB.db540f9c.js";import{_ as j}from"./VideoBlockC.e85ad954.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";const D={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},T=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockA
    title="On point delivery."
    source="/https://infernaco.com/spark-files/assets/video/meeting.mp4"
    poster="/https://infernaco.com/spark-files/assets/demo/img/posters/poster-1d.jpg"
    :features="features4"
  />
</template>
`,$=`
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
`,O={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},w=`
<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockB
    title="Our Product"
    :features="features5"
    source="/https://infernaco.com/spark-files/assets/video/meeting.mp4"
    poster="/https://infernaco.com/spark-files/assets/demo/img/posters/poster-2g.jpg"
  />
</template>
`,F=`
export const features5: IconFeature[] = [
  {
    title: 'Stay Relaxed',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'primary',
    icon: 'feather:coffee',
    link: '/',
  },
  {
    title: 'Save Time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'green',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Earn More',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'info',
    icon: 'feather:zap',
    link: '/',
  },
]
`,E={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},M=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockC
    title="Our Product"
    :features="features4"
    source="/https://infernaco.com/spark-files/assets/video/meeting.mp4"
    poster="/https://infernaco.com/spark-files/assets/demo/img/posters/poster-3d.jpg"
  />
</template>
`,N=`
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
`,z=h("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Spark video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),H=d({setup(f){return(c,g)=>{const r=k,i=q,s=x,a=C,l=b,n=B,p=v;return m(),_(y,null,[e(a,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(i,{title:"On point delivery.",source:"/https://infernaco.com/spark-files/assets/video/meeting.mp4",poster:"/https://infernaco.com/spark-files/assets/demo/img/posters/poster-1d.jpg",features:o(u)},null,8,["features"])]),_:1})]),_:1}),e(a,{"bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(i,{title:"On point delivery.",source:"/https://infernaco.com/spark-files/assets/video/meeting.mp4",poster:"/https://infernaco.com/spark-files/assets/demo/img/posters/poster-1.jpg",features:o(u),links:""},null,8,["features"])]),_:1})]),_:1}),e(a,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block A Props",subtitle:"Available props for block A"}),e(p,null,{code:t(()=>[e(l,{language:"html",code:o(T)},null,8,["code"])]),props:t(()=>[e(n,{props:o(D).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o($)},null,8,["code"])]),usage:t(()=>[z]),_:1})]),_:1})]),_:1})],64)}}}),I=h("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Spark video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),R=d({setup(f){return(c,g)=>{const r=k,i=L,s=x,a=C,l=b,n=B,p=v;return m(),_(y,null,[e(a,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(i,{title:"Our Product",features:o(P),source:"/https://infernaco.com/spark-files/assets/video/meeting.mp4",poster:"/https://infernaco.com/spark-files/assets/demo/img/posters/poster-2g.jpg"},null,8,["features"])]),_:1})]),_:1}),e(a,{"bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(i,{title:"Our Product",features:o(P),source:"/https://infernaco.com/spark-files/assets/video/meeting.mp4",poster:"/https://infernaco.com/spark-files/assets/demo/img/posters/poster-2a.jpg"},null,8,["features"])]),_:1})]),_:1}),e(a,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block B Props",subtitle:"Available props for block B"}),e(p,null,{code:t(()=>[e(l,{language:"html",code:o(w)},null,8,["code"])]),props:t(()=>[e(n,{props:o(O).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o(F)},null,8,["code"])]),usage:t(()=>[I]),_:1})]),_:1})]),_:1})],64)}}}),Y=h("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Spark video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),G=d({setup(f){return(c,g)=>{const r=k,i=j,s=x,a=C,l=b,n=B,p=v;return m(),_(y,null,[e(a,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(i,{title:"Our Product",features:o(u),source:"/https://infernaco.com/spark-files/assets/video/meeting.mp4",poster:"/https://infernaco.com/spark-files/assets/demo/img/posters/poster-3d.jpg"},null,8,["features"])]),_:1})]),_:1}),e(a,{"bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props"}),e(i,{title:"Our Product",features:o(u),source:"/https://infernaco.com/spark-files/assets/video/meeting.mp4",poster:"/https://infernaco.com/spark-files/assets/demo/img/posters/poster-3a.jpg",links:""},null,8,["features"])]),_:1})]),_:1}),e(a,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block C Props",subtitle:"Available props for block C"}),e(p,null,{code:t(()=>[e(l,{language:"html",code:o(M)},null,8,["code"])]),props:t(()=>[e(n,{props:o(E).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o(N)},null,8,["code"])]),usage:t(()=>[Y]),_:1})]),_:1})]),_:1})],64)}}}),le=d({setup(f){const c=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"}];return(g,r)=>{const i=S,s=A;return m(),_("div",null,[e(i,{title:"Video Blocks",subtitle:"Spark ships with 3 ready to use video section block variations. You can of course easily create your own from the existing ones."}),e(s,{links:c,width:"320px"}),e(H),e(R),e(G),e(V)])}}});export{le as default};
