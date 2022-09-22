import{_ as x}from"./DemoLinks.b68e1d3f.js";import{_ as h,a as w}from"./DemoTitle.8129d84d.js";import{D}from"./DocumentationFooter.26e38be2.js";import{_ as k,a as g}from"./PrismCode.c318c48c.js";import{v as m,o as d,f as _,h as e,w as t,g as o,A as c,F as v,n as y,M as C}from"./index.65d9db8a.js";import{_ as A,c as $,a as q}from"./index.7fbf19ca.js";import{_ as B}from"./DemoProps.3732b33d.js";import{_ as P}from"./SideContact.3d6cac8d.js";import{_ as S}from"./BlockContact.d93607a0.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./VTextarea.e87b8464.js";import"./VInput.e415d3f2.js";import"./FieldLabel.d20401a9.js";import"./PolkaDots.4ca1fe29.js";import"./SimpleTableHeader.6e02b7e3.js";import"./MapBox.8afc757d.js";const E=`
<template>
  <ContactForm />
</template>
`,F={class:"mx-auto max-w-3 py-4"},L=o("div",{class:"py-4"},null,-1),z=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No props available for this component ")],-1),T=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),U=o("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Contact blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),V=m({setup(b){return(i,f)=>{const l=h,a=A,n=y,s=C,r=k,p=g;return d(),_(v,null,[e(s,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),o("div",F,[e(a)])]),_:1})]),_:1}),e(s,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block A Props",subtitle:"Available props for block A"}),L,e(p,null,{code:t(()=>[e(r,{language:"html",code:c(E)},null,8,["code"])]),props:t(()=>[z]),sample:t(()=>[T]),usage:t(()=>[U]),_:1})]),_:1})]),_:1})],64)}}}),I={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"lng",type:"number",required:"true",default:"undefined",values:["number"]},{name:"lat",type:"number",required:"true",default:"undefined",values:["number"]},{name:"zoom",type:"number",required:"true",default:"undefined",values:["number"]}],slots:[]},N=`
<template>
  <SideContact
    title="Contact Us"
    subtitle="Fill out the form below to reach us"
    :lng="12.550343"
    :lat="55.665957"
    :zoom="16"
  />
</template>
`,j={class:"py-4"},H=o("div",{class:"py-4"},null,-1),M=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),G=o("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Contact blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),J=m({setup(b){return(i,f)=>{const l=h,a=P,n=y,s=C,r=k,p=B,u=g;return d(),_(v,null,[e(s,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),o("div",j,[e(a,{title:"Contact Us",subtitle:"Fill out the form below to reach us",lng:12.550343,lat:55.665957,zoom:16},null,8,["lng","lat"])])]),_:1})]),_:1}),e(s,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block B Props",subtitle:"Available props for block B"}),H,e(u,null,{code:t(()=>[e(r,{language:"html",code:c(N)},null,8,["code"])]),props:t(()=>[e(p,{props:c(I).props},null,8,["props"])]),sample:t(()=>[M]),usage:t(()=>[G]),_:1})]),_:1})]),_:1})],64)}}}),K={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"lng",type:"number",required:"true",default:"undefined",values:["number"]},{name:"lat",type:"number",required:"true",default:"undefined",values:["number"]},{name:"zoom",type:"number",required:"true",default:"undefined",values:["number"]}],slots:[]},O=`
<template>
  <BlockContact
    title="Contact Us"
    subtitle="Fill out the form below to reach us"
    :lng="12.550343"
    :lat="55.665957"
    :zoom="16"
  />
</template>
`,Q={class:"py-4"},R=o("div",{class:"py-4"},null,-1),W=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),X=o("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Contact blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Y=m({setup(b){return(i,f)=>{const l=h,a=S,n=y,s=C,r=k,p=B,u=g;return d(),_(v,null,[e(s,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block C",subtitle:"Advanced block C variation 1",link:"block-c-props",class:"is-relative z-3"}),o("div",Q,[e(a,{title:"Contact Us",subtitle:"Fill out the form below to reach us",lng:12.550343,lat:55.665957,zoom:16},null,8,["lng","lat"])])]),_:1})]),_:1}),e(s,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block C Props",subtitle:"Available props for block C"}),R,e(u,null,{code:t(()=>[e(r,{language:"html",code:c(O)},null,8,["code"])]),props:t(()=>[e(p,{props:c(K).props},null,8,["props"])]),sample:t(()=>[W]),usage:t(()=>[X]),_:1})]),_:1})]),_:1})],64)}}}),Z={props:[{name:"infos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["2","3","4"]},{name:"limit",type:"number",required:"false",default:"undefined",values:["number"]},{name:"polkaDots",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ee=`
<script setup lang="ts">
import { contactInfo } from '/@src/data/pages/contact'
<\/script>

<template>
  <ContactInfo :infos="contactInfo" />
</template>
`,te=`
export const contactInfo = [
  {
    icon: 'ph:envelope-duotone',
    title: 'Email',
    info: 'contact@Spark.io',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'primary',
  },
  {
    icon: 'ph:phone-duotone',
    title: 'Phone',
    info: '+1 44 598-5598',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'success',
  },
  {
    icon: 'ph:map-pin-duotone',
    title: 'Location',
    info: '28, Baker Street, Los Angeles, CA',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'yellow',
  },
  {
    icon: 'ph:chat-circle-text-duotone',
    title: 'Live Chat',
    info: 'https://support.Spark.io',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'orange',
  },
]
`,oe={class:"py-4"},ne=o("div",{class:"py-4"},null,-1),le=o("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Contact blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),se=m({setup(b){return(i,f)=>{const l=h,a=q,n=y,s=C,r=k,p=B,u=g;return d(),_(v,null,[e(s,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block D",subtitle:"Advanced block D variation 1",link:"block-d-props"}),o("div",oe,[e(a,{infos:c($)},null,8,["infos"])])]),_:1})]),_:1}),e(s,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{title:"Block D Props",subtitle:"Available props for block D"}),ne,e(u,null,{code:t(()=>[e(r,{language:"html",code:c(ee)},null,8,["code"])]),props:t(()=>[e(p,{props:c(Z).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"html",code:c(te)},null,8,["code"])]),usage:t(()=>[le]),_:1})]),_:1})]),_:1})],64)}}}),xe=m({setup(b){const i=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(f,l)=>{const a=w,n=x;return d(),_("div",null,[e(a,{title:"Advanced Contact",subtitle:"Discover Spark's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),e(n,{links:i,width:"400px"}),e(V),e(J),e(Y),e(se),e(D)])}}});export{xe as default};
