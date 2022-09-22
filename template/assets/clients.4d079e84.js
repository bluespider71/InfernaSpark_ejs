import{_ as A}from"./DemoLinks.b68e1d3f.js";import{_ as k,a as C}from"./DemoTitle.8129d84d.js";import{D as R}from"./DocumentationFooter.26e38be2.js";import{_ as f,a as h}from"./PrismCode.c318c48c.js";import{_ as y}from"./DemoProps.3732b33d.js";import{v as g,o as m,f as b,h as o,w as s,A as e,F as B,g as r,n as E,M as w}from"./index.65d9db8a.js";import{_ as S}from"./LogoSection.3aaf5a33.js";import{c}from"./index.046fb491.js";import{_ as T}from"./LogoMarquee.424a3d44.js";import{_ as x}from"./CompanyGrid.2bc461d2.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";import"./MarqueeText.f47e1a6b.js";const L={props:[{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},D=`
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
<\/script>

<template>
  <LogoSection
    title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
    :logos="customerLogos"
  />
</template>
`,P=`
export const customerLogos = [
  {
    id: 0,
    logo: '/https://infernaco.com/spark-files/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/https://infernaco.com/spark-files/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/https://infernaco.com/spark-files/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/https://infernaco.com/spark-files/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/https://infernaco.com/spark-files/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/https://infernaco.com/spark-files/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/https://infernaco.com/spark-files/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/https://infernaco.com/spark-files/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/https://infernaco.com/spark-files/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/https://infernaco.com/spark-files/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/https://infernaco.com/spark-files/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/https://infernaco.com/spark-files/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/https://infernaco.com/spark-files/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/https://infernaco.com/spark-files/assets/brands/tetra.svg',
  },
]
`,$=r("div",{class:"py-4"},null,-1),q=r("div",{class:"py-4"},null,-1),U=r("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced logo blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),N=g({setup(_){return(u,v)=>{const a=k,n=S,t=E,l=w,i=f,p=y,d=h;return m(),b(B,null,[o(l,{id:"block-a-demo","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),$,o(n,{title:"WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500",logos:e(c)},null,8,["logos"])]),_:1})]),_:1}),o(l,{color:"darker"},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block A",subtitle:"Advanced block A variation 2",link:"block-a-props",inverted:""}),o(n,{title:"WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500",logos:e(c),inverted:""},null,8,["logos"])]),_:1})]),_:1}),o(l,{id:"block-a-props","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block A Props",subtitle:"Available props for block A"}),q,o(d,null,{code:s(()=>[o(i,{language:"html",code:e(D)},null,8,["code"])]),props:s(()=>[o(p,{props:e(L).props},null,8,["props"])]),sample:s(()=>[o(i,{language:"javascript",code:e(P)},null,8,["code"])]),usage:s(()=>[U]),_:1})]),_:1})]),_:1})],64)}}}),F={props:[{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},O=`
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
<\/script>

<template>
  <LogoMarquee :logos="customerLogos" compact />
</template>
`,V=`
export const customerLogos = [
  {
    id: 0,
    logo: '/https://infernaco.com/spark-files/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/https://infernaco.com/spark-files/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/https://infernaco.com/spark-files/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/https://infernaco.com/spark-files/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/https://infernaco.com/spark-files/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/https://infernaco.com/spark-files/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/https://infernaco.com/spark-files/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/https://infernaco.com/spark-files/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/https://infernaco.com/spark-files/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/https://infernaco.com/spark-files/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/https://infernaco.com/spark-files/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/https://infernaco.com/spark-files/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/https://infernaco.com/spark-files/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/https://infernaco.com/spark-files/assets/brands/tetra.svg',
  },
]
`,W=r("div",{class:"py-4"},null,-1),j=r("div",{class:"py-4"},null,-1),H=r("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced logo blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),I=g({setup(_){return(u,v)=>{const a=k,n=T,t=E,l=w,i=f,p=y,d=h;return m(),b(B,null,[o(l,{id:"block-b-demo","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),W,o(n,{logos:e(c)},null,8,["logos"])]),_:1})]),_:1}),o(l,{color:"darker"},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block B",subtitle:"Advanced block B variation 2",link:"block-b-props",inverted:""}),o(n,{logos:e(c),inverted:""},null,8,["logos"])]),_:1})]),_:1}),o(l,{id:"block-b-props","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block B Props",subtitle:"Available props for block B"}),j,o(d,null,{code:s(()=>[o(i,{language:"html",code:e(O)},null,8,["code"])]),props:s(()=>[o(p,{props:e(F).props},null,8,["props"])]),sample:s(()=>[o(i,{language:"javascript",code:e(V)},null,8,["code"])]),usage:s(()=>[H]),_:1})]),_:1})]),_:1})],64)}}}),M={props:[{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"limit",type:"number",required:"false",default:"15",values:["number"]},{name:"compact",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},G=`
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
<\/script>

<template>
  <CompanyGrid
    title="Who are our partners?"
    :logos="customerLogos"
    :limit="20"
  />
</template>
`,z=`
export const customerLogos = [
  {
    id: 0,
    logo: '/https://infernaco.com/spark-files/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/https://infernaco.com/spark-files/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/https://infernaco.com/spark-files/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/https://infernaco.com/spark-files/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/https://infernaco.com/spark-files/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/https://infernaco.com/spark-files/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/https://infernaco.com/spark-files/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/https://infernaco.com/spark-files/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/https://infernaco.com/spark-files/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/https://infernaco.com/spark-files/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/https://infernaco.com/spark-files/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/https://infernaco.com/spark-files/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/https://infernaco.com/spark-files/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/https://infernaco.com/spark-files/assets/brands/tetra.svg',
  },
]
`,J=r("div",{class:"py-4"},null,-1),K=r("div",{class:"py-4"},null,-1),Q=r("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced logo blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),X=g({setup(_){return(u,v)=>{const a=k,n=x,t=E,l=w,i=f,p=y,d=h;return m(),b(B,null,[o(l,{id:"block-c-demo","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block C",subtitle:"Advanced block C variation 1",link:"block-b-props"}),J,o(n,{title:"Who are our partners?",logos:e(c),limit:20},null,8,["logos"])]),_:1})]),_:1}),o(l,{color:"darker"},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block C",subtitle:"Advanced block C variation 2",link:"block-b-props",inverted:""}),o(n,{title:"Who are our partners?",logos:e(c),limit:20,inverted:""},null,8,["logos"])]),_:1})]),_:1}),o(l,{id:"block-c-props","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block C Props",subtitle:"Available props for block C"}),K,o(d,null,{code:s(()=>[o(i,{language:"html",code:e(G)},null,8,["code"])]),props:s(()=>[o(p,{props:e(M).props},null,8,["props"])]),sample:s(()=>[o(i,{language:"javascript",code:e(z)},null,8,["code"])]),usage:s(()=>[Q]),_:1})]),_:1})]),_:1})],64)}}}),mo=g({setup(_){const u=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"}];return(v,a)=>{const n=C,t=A;return m(),b("div",null,[o(n,{title:"Advanced Clients",subtitle:"Discover Spark's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),o(t,{links:u,width:"360px"}),o(N),o(I),o(X),o(R)])}}});export{mo as default};
