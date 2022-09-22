import{_ as Z}from"./DemoLinks.b68e1d3f.js";import{_ as $,a as ee}from"./DemoTitle.8129d84d.js";import{D as te}from"./DocumentationFooter.26e38be2.js";import{_ as S,a as D}from"./PrismCode.c318c48c.js";import{_ as I}from"./DemoProps.3732b33d.js";import{v as k,o as p,f as m,h as e,w as o,A as t,F as f,g as n,m as b,n as L,M as j,bS as oe,e as F,y as h,r as C,D as x,G as T,z as w,C as X,H as W,N as K,bT as Q,q as N,a3 as ne,s as se,t as le}from"./index.65d9db8a.js";import{_ as ae}from"./ContentBlockA.9dfe2866.js";import{c as z,a as R,b as P,d as J,e as E,f as M,g as v,h as H,i as V,j as A,k as U,l as y,m as q,n as O,o as ie,p as B}from"./index.a8025e10.js";import{_ as re}from"./ContentBlockH.c885ed3a.js";import{_ as ue}from"./ContentBlockI.8ae84c01.js";import{_ as ce}from"./Counter.6b3b6418.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";const de={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},pe=`
<script setup lang="ts">
import { content } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockA
    :title="content.title"
    :text="content.text"
    link="index"
    :images="content.images"
  />
</template>
`,me=`
export const content = {
  title: 'Supported languages',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  link: 'index',
  linkLabel: 'Learn More',
  images: [
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/bulma.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/html5.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/js.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/sass.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/photoshop.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/illustrator.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/vuejs.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/reactjs.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/alpinejs.svg',
      label: 'programming language',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/nodejs.svg',
      label: 'programming language',
    },
  ],
}
`,ge=n("div",{class:"py-4"},null,-1),_e=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),be=k({setup(g){return(s,_)=>{const a=$,r=ae,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-a-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(r,{title:t(z).title,text:t(z).text,link:"index",images:t(z).images},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props",inverted:""}),e(r,{title:t(z).title,text:t(z).text,link:"index",images:t(z).images,inverted:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(r,{title:t(R).title,text:t(R).text,link:"index",images:t(R).images,squared:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{id:"block-a-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block A Props",subtitle:"Available props for block A"}),ge,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(pe)},null,8,["code"])]),props:o(()=>[e(c,{props:t(de).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(me)},null,8,["code"])]),usage:o(()=>[_e]),_:1})]),_:1})]),_:1})],64)}}}),fe={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ke=`
<script setup lang="ts">
import { content3 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockB
    :title="content3.title"
    :subtitle="content3.subtitle"
    :text="content3.text"
    :images="content3.images"
    link="index"
  />
</template>
`,ve=`
export const content3 = {
  title: 'Our Decision Board',
  subtitle: 'Meet our advisors',
  text: [
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
    },
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
    },
  ],
  images: [
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/avatars/21.jpg',
      name: 'Mila Jensen',
      position: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/avatars/19.jpg',
      name: 'Rob Carlyle',
      position: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/avatars/57.jpg',
      name: 'Danny Spitz',
      position: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg',
      name: 'Melany Cambell',
      position: 'Business Analyst',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/avatars/41.jpg',
      name: 'Navad Prasad',
      position: 'Sales Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
}
`,he=n("div",{class:"py-4"},null,-1),xe=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ye=k({setup(g){return(s,_)=>{const a=$,r=oe,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-b-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(r,{title:t(P).title,subtitle:t(P).subtitle,text:t(P).text,images:t(P).images,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props",inverted:""}),e(r,{title:t(P).title,subtitle:t(P).subtitle,text:t(P).text,images:t(P).images,link:"index",inverted:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block B",subtitle:"Block B variation 3",link:"block-b-props"}),e(r,{title:t(J).title,subtitle:t(J).subtitle,text:t(J).text,images:t(J).images,link:"index",squared:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{id:"block-b-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block B Props",subtitle:"Available props for block B"}),he,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(ke)},null,8,["code"])]),props:o(()=>[e(c,{props:t(fe).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(ve)},null,8,["code"])]),usage:o(()=>[xe]),_:1})]),_:1})]),_:1})],64)}}});const qe={class:"py-6 mx-auto max-w-6"},Be={class:"has-text-centered pb-6"},we=["src"],Ce={class:"columns b-columns-half-tablet-p py-4"},$e=k({props:{title:null,subtitle:null,text:null,image:null,links:{type:Boolean,default:!1},linksLabel:{default:"Learn More"},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const s=g,_=h(()=>[s.imageSquared&&"image-squared"]),a=h(()=>[s.inverted&&"text-light"]);return(r,l)=>{const i=K,u=Q;return p(),m("div",qe,[C(r.$slots,"title",{},()=>[n("div",Be,[e(i,{title:s.title,subtitle:s.subtitle,inverted:s.inverted},null,8,["title","subtitle","inverted"])])],!0),C(r.$slots,"image",{},()=>[n("div",null,[n("img",{class:x(["inline-block",t(_)]),src:s.image,alt:"featured image"},null,10,we)])],!0),C(r.$slots,"content",{},()=>[n("div",Ce,[(p(!0),m(f,null,T(s.text.slice(0,2),(c,d)=>(p(),m("div",{key:d,class:"column is-6"},[n("p",{class:x(["paragraph rem-95",t(a)])},w(c.paragraph),3),s.links?(p(),X(u,{key:0,label:s.linksLabel,link:c.link,size:"small"},null,8,["label","link"])):W("",!0)]))),128))])],!0)])}}});var Se=F($e,[["__scopeId","data-v-ec70f854"]]);const De={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linksLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ie=`
<script setup lang="ts">
import { content5 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockC
    :title="content5.title"
    :subtitle="content5.subtitle"
    :text="content5.text"
    :image="content5.image"
  />
</template>
`,Le=`
export const content5 = {
  title: 'The number one solution',
  subtitle: 'Some amazing features',
  image: '/https://infernaco.com/spark-files/assets/demo/img/content/600x400/1.jpg',
  text: [
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
      link: 'index',
    },
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
      link: 'index',
    },
  ],
}
`,je=n("div",{class:"py-4"},null,-1),Pe=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ee=k({setup(g){return(s,_)=>{const a=$,r=Se,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-c-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(r,{title:t(E).title,subtitle:t(E).subtitle,text:t(E).text,image:t(E).image},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props",inverted:""}),e(r,{title:t(E).title,subtitle:t(E).subtitle,text:t(E).text,image:t(E).image,inverted:""},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block C",subtitle:"Block C variation 3",link:"block-c-props"}),e(r,{title:t(M).title,subtitle:t(M).subtitle,text:t(M).text,image:t(M).image,links:"","image-squared":""},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{id:"block-c-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block C Props",subtitle:"Available props for block C"}),je,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Ie)},null,8,["code"])]),props:o(()=>[e(c,{props:t(De).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Le)},null,8,["code"])]),usage:o(()=>[Pe]),_:1})]),_:1})]),_:1})],64)}}});const He={class:"py-12 mx-auto max-w-9"},Ae={class:"has-text-centered mb-8"},Te={class:"is-flex b-only-mobile-flex-wrap"},ze=["src","alt"],Fe={class:"px-4 py-4"},Ge={class:"columns"},Je={class:"column"},Me=k({props:{title:null,subtitle:null,text:null,images:null,link:{default:void 0},linkLabel:{default:"Learn More"},limit:{default:2},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const s=g,_=h(()=>[s.limit&&`max-w-1/${s.limit}`]),a=h(()=>[s.imageSquared&&"image-squared"]),r=h(()=>[s.inverted&&"text-light"]);return(l,i)=>{const u=K,c=Q;return p(),m("div",He,[C(l.$slots,"title",{},()=>[n("div",Ae,[e(u,{title:s.title,subtitle:s.subtitle,inverted:s.inverted},null,8,["title","subtitle","inverted"])])],!0),C(l.$slots,"images",{},()=>[n("div",Te,[(p(!0),m(f,null,T(s.images.slice(0,s.limit),(d,G)=>(p(),m("div",{key:G,class:x(["max-w-mobile px-2",t(_)])},[n("img",{class:x(["inline-block mx-2",t(a)]),src:d.url,alt:d.label},null,10,ze)],2))),128))])],!0),n("div",Fe,[C(l.$slots,"content",{},()=>[n("div",Ge,[n("div",Je,[n("p",{class:x(["paragraph",t(r)])},w(s.text),3),s.link?(p(),X(c,{key:0,label:s.linkLabel,link:s.link},null,8,["label","link"])):W("",!0)])])],!0)])])}}});var Ve=F(Me,[["__scopeId","data-v-6e659615"]]);const Ue={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"2",values:["number"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ne=`
<script setup lang="ts">
import { content7 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockD
    :title="content7.title"
    :subtitle="content7.subtitle"
    :text="content7.text"
    :images="content7.images"
    link="index"
    inverted
  />
</template>     
`,Re=`
export const content7 = {
  title: 'The number one solution',
  subtitle: 'Some amazing features',
  images: [
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/600x400/1.jpg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/600x400/2.jpg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/600x400/3.jpg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/600x400/4.jpg',
      label: 'featured image',
    },
  ],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam; Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Ita ne hoc quidem modo paria peccata sunt.',
  link: 'index',
}
`,We=n("div",{class:"py-4"},null,-1),Oe=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Xe=k({setup(g){return(s,_)=>{const a=$,r=Ve,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-d-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props",inverted:""}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,link:"index",inverted:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,limit:3,"image-squared":""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block D",subtitle:"Block D variation 4",link:"block-d-props"}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,limit:4,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{id:"block-d-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block D Props",subtitle:"Available props for block D"}),We,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Ne)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Ue).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Re)},null,8,["code"])]),usage:o(()=>[Oe]),_:1})]),_:1})]),_:1})],64)}}});const Ke={class:"py-6 mx-auto max-w-8"},Qe={class:"columns is-vcentered b-only-tablet-p-flex"},Ye={class:"column is-6"},Ze={class:"py-2"},et={class:"is-flex pt-4"},tt={class:"column is-6"},ot=["src"],nt=k({props:{title:null,image:null,text:null,icons:{default:()=>[]},iconSquared:{type:Boolean,default:!1},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const s=g,_=h(()=>[s.imageSquared&&"image-squared"]),a=h(()=>[s.inverted&&"text-light"]);return(r,l)=>{const i=N,u=ne;return p(),m("div",Ke,[n("div",Qe,[n("div",Ye,[C(r.$slots,"content",{},()=>[n("p",{class:x(["paragraph mb-4",t(a)])},w(s.text),3),n("div",Ze,[e(i,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:s.inverted},{default:o(()=>[n("span",null,w(s.title),1)]),_:1},8,["inverted"])]),n("div",et,[(p(!0),m(f,null,T(s.icons.slice(0,5),(c,d)=>(p(),m("div",{key:d,class:"icon-wrapper px-2"},[e(u,{picture:c.url,squared:s.iconSquared},null,8,["picture","squared"])]))),128))])],!0)]),n("div",tt,[C(r.$slots,"image",{},()=>[n("img",{src:s.image,class:x(t(_)),alt:"featured image"},null,10,ot)],!0)])])])}}});var st=F(nt,[["__scopeId","data-v-4172c660"]]);const lt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"icons",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"iconSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},at=`
<script setup lang="ts">
import { content8 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockE
    :title="content8.title"
    :text="content8.text"
    :icons="content8.icons"
    :image="content8.image"
  />
</template> 
`,it=`
export const content8 = {
  title: 'Works with all frameworks',
  image: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/2.png',
  icons: [
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/js.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/vuejs.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/reactjs.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/angular.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/stacks/alpinejs.svg',
      label: 'featured image',
    },
  ],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
}
`,rt=n("div",{class:"py-4"},null,-1),ut=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ct=k({setup(g){return(s,_)=>{const a=$,r=st,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-e-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block E",subtitle:"Block E variation 1",link:"block-e-props"}),e(r,{title:t(H).title,text:t(H).text,icons:t(H).icons,image:t(H).image},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block E",subtitle:"Block E variation 2",link:"block-e-props",inverted:""}),e(r,{title:t(H).title,text:t(H).text,icons:t(H).icons,image:t(H).image,inverted:""},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block E",subtitle:"Block E variation 3",link:"block-e-props"}),e(r,{title:t(V).title,text:t(V).text,icons:t(V).icons,image:t(V).image,"icon-squared":"","image-squared":""},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{id:"block-e-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block E Props",subtitle:"Available props for block E"}),rt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(at)},null,8,["code"])]),props:o(()=>[e(c,{props:t(lt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(it)},null,8,["code"])]),usage:o(()=>[ut]),_:1})]),_:1})]),_:1})],64)}}});const dt={class:"columns is-vcentered b-only-tablet-p-flex"},pt={class:"column is-6"},mt=["src"],gt={class:"column is-6"},_t={class:"is-flex is-align-items-center pt-4"},bt=["src","alt"],ft=k({props:{title:null,image:null,text:null,logos:{default:()=>[]},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const s=g,_=h(()=>[s.inverted&&"is-inverted"]),a=h(()=>[s.imageSquared&&"image-squared"]),r=h(()=>[s.inverted&&"text-light"]);return(l,i)=>{const u=N;return p(),m("div",{class:x(["py-6 mx-auto max-w-8",t(_)])},[n("div",dt,[n("div",pt,[C(l.$slots,"image",{},()=>[n("img",{src:s.image,class:x(t(a)),alt:"featured image"},null,10,mt)],!0)]),n("div",gt,[C(l.$slots,"content",{},()=>[e(u,{tag:"h3",size:5,weight:"semi",leading:"",inverted:s.inverted},{default:o(()=>[n("span",null,w(s.title),1)]),_:1},8,["inverted"]),n("p",{class:x(["paragraph",t(r)])},w(s.text),3),n("div",_t,[(p(!0),m(f,null,T(s.logos.slice(0,5),(c,d)=>(p(),m("img",{key:d,class:"small-logo mx-2 max-w-1/5",src:c.url,alt:c.label},null,8,bt))),128))])],!0)])])],2)}}});var kt=F(ft,[["__scopeId","data-v-5db6b074"]]);const vt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ht=`
<script setup lang="ts">
import { content10 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockF
    :title="content10.title"
    :text="content10.text"
    :image="content10.image"
    :logos="content10.logos"
  />
</template>
`,xt=`
export const content10 = {
  title: 'They trust our brand',
  image: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/3.png',
  logos: [
    {
      url: '/https://infernaco.com/spark-files/assets/brands/infinite.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/brands/kromo.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/brands/gutwork.svg',
      label: 'featured image',
    },
  ],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
}
`,yt=n("div",{class:"py-4"},null,-1),qt=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Bt=k({setup(g){return(s,_)=>{const a=$,r=kt,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-f-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block F",subtitle:"Block F variation 1",link:"block-f-props"}),e(r,{title:t(A).title,text:t(A).text,image:t(A).image,logos:t(A).logos},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block F",subtitle:"Block F variation 2",link:"block-f-props",inverted:""}),e(r,{title:t(A).title,text:t(A).text,image:t(A).image,logos:t(A).logos,"image-squared":"",inverted:""},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block F",subtitle:"Block F variation 3",link:"block-f-props"}),e(r,{title:t(U).title,text:t(U).text,image:t(U).image,logos:t(U).logos,"image-squared":""},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{id:"block-f-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block F Props",subtitle:"Available props for block F"}),yt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(ht)},null,8,["code"])]),props:o(()=>[e(c,{props:t(vt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(xt)},null,8,["code"])]),usage:o(()=>[qt]),_:1})]),_:1})]),_:1})],64)}}});const wt={class:"columns is-vcentered b-columns-half-tablet-p"},Ct={class:"column is-5"},$t={class:"is-flex is-align-items-center py-4 small:mx-auto small:max-w-4 j-center-tablet-p j-center-mobile"},St=["src","alt"],Dt={class:"column is-7"},It={class:"columns is-multiline image-columns b-columns-half-mobile b-only-tablet-p-flex"},Lt=["src","alt"],jt=k({props:{title:null,images:null,text:null,logos:{default:()=>[]},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const s=g,_=h(()=>[s.inverted&&"is-inverted"]),a=h(()=>[s.imageSquared&&"image-squared"]),r=h(()=>[s.inverted&&"text-light"]);return(l,i)=>{const u=N;return p(),m("div",{class:x(["py-6 mx-auto max-w-8",t(_)])},[n("div",wt,[n("div",Ct,[C(l.$slots,"content",{},()=>[e(u,{tag:"h3",size:5,weight:"semi",leading:"",inverted:s.inverted},{default:o(()=>[n("span",null,w(s.title),1)]),_:1},8,["inverted"]),n("p",{class:x(["paragraph",t(r)])},w(s.text),3),n("div",$t,[(p(!0),m(f,null,T(s.logos.slice(0,4),(c,d)=>(p(),m("img",{key:d,class:"small-logo mx-2 max-w-1/5",src:c.url,alt:c.label},null,8,St))),128))])],!0)]),n("div",Dt,[C(l.$slots,"images",{},()=>[n("div",It,[(p(!0),m(f,null,T(s.images.slice(0,4),(c,d)=>(p(),m("div",{key:d,class:"column is-6 p-2"},[n("img",{class:x(["block",t(a)]),src:c.url,alt:c.label},null,10,Lt)]))),128))])],!0)])])],2)}}});var Pt=F(jt,[["__scopeId","data-v-6077f659"]]);const Et={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ht=`
<script setup lang="ts">
import { content12 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockG
    :title="content12.title"
    :text="content12.text"
    :images="content12.images"
    :logos="content12.logos"
  />
</template>
`,At=`
export const content12 = {
  title: 'They trust our brand',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  images: [
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/5.jpg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/6.jpg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/7.jpg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/8.jpg',
      label: 'featured image',
    },
  ],
  logos: [
    {
      url: '/https://infernaco.com/spark-files/assets/brands/covenant.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/brands/proactive.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/brands/tribe.svg',
      label: 'featured image',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/brands/infinite.svg',
      label: 'featured image',
    },
  ],
}
`,Tt=n("div",{class:"py-4"},null,-1),zt=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ft=k({setup(g){return(s,_)=>{const a=$,r=Pt,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-g-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block G",subtitle:"Block G variation 1",link:"block-g-props"}),e(r,{title:t(y).title,text:t(y).text,images:t(y).images,logos:t(y).logos},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block G",subtitle:"Block G variation 1",link:"block-g-props",inverted:""}),e(r,{title:t(y).title,text:t(y).text,images:t(y).images,logos:t(y).logos,inverted:""},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block G",subtitle:"Block G variation 2",link:"block-g-props"}),e(r,{title:t(y).title,text:t(y).text,images:t(y).images,logos:t(y).logos,"image-squared":""},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{id:"block-g-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block G Props",subtitle:"Available props for block G"}),Tt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Ht)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Et).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(At)},null,8,["code"])]),usage:o(()=>[zt]),_:1})]),_:1})]),_:1})],64)}}}),Gt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["2","3","4"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linksLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Jt=`
<script setup lang="ts">
import { content13 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockH 
    :title="content13.title" 
    :text="content13.text" 
    :images="content13.images" 
  />
</template>  
`,Mt=`
export const content13 = {
  title: 'Ready To Go?',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones.',
  images: [
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/5.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/6.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/7.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/8.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
  ],
}
`,Vt=n("div",{class:"py-4"},null,-1),Ut=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Nt=k({setup(g){return(s,_)=>{const a=$,r=re,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-h-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block H",subtitle:"Block H variation 1",link:"block-h-props"}),e(r,{title:t(q).title,text:t(q).text,images:t(q).images},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block H",subtitle:"Block H variation 1",link:"block-h-props",inverted:""}),e(r,{title:t(q).title,text:t(q).text,images:t(q).images,inverted:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block H",subtitle:"Block H variation 2",link:"block-h-props"}),e(r,{title:t(q).title,text:t(q).text,images:t(q).images,limit:2,links:"","image-squared":""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block H",subtitle:"Block H variation 3",link:"block-h-props"}),e(r,{title:t(q).title,text:t(q).text,images:t(q).images,limit:4,links:"","image-squared":""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{id:"block-h-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block H Props",subtitle:"Available props for block H"}),Vt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Jt)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Gt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Mt)},null,8,["code"])]),usage:o(()=>[Ut]),_:1})]),_:1})]),_:1})],64)}}}),Rt={props:[{name:"counters",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"icons",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Wt=`
<script setup lang="ts">
import { content14 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockI :counters="content14" />
</template>  
`,Ot=`
export const content14 = [
  {
    icon: 'ion:card-outline',
    number: 74,
    text: 'Available payment gateways',
  },
  {
    icon: 'ion:diamond-outline',
    number: 9718,
    text: 'Customers across the world',
  },
  {
    icon: 'ion:timer-outline',
    number: 534,
    text: 'Real time balance metrics',
  },
  {
    icon: 'ion:business-outline',
    number: 92,
    text: 'Regional and local offices',
  },
]
`,Xt=n("div",{class:"py-4"},null,-1),Kt=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Qt=k({setup(g){return(s,_)=>{const a=$,r=ue,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-i-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props"}),e(r,{counters:t(O)},null,8,["counters"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props",inverted:""}),e(r,{counters:t(O),inverted:""},null,8,["counters"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props"}),e(r,{counters:t(ie)},null,8,["counters"])]),_:1})]),_:1}),e(i,{id:"block-i-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block I Props",subtitle:"Available props for block I"}),Xt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Wt)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Rt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Ot)},null,8,["code"])]),usage:o(()=>[Kt]),_:1})]),_:1})]),_:1})],64)}}});const Yt={class:"py-6 mx-auto max-w-10"},Zt={class:"columns is-vcentered b-only-tablet-p-flex"},eo={class:"column is-6"},to={class:"paragraph"},oo={class:"py-4"},no={class:"columns b-flex-mobile b-columns-third-tablet-p is-multiline m-0 has-text-centered"},so={class:"counter-icon"},lo=["data-icon"],ao={class:"pb-4"},io={key:0},ro={class:"column is-6"},uo=["src"],co=k({props:{title:null,text:null,image:null,imageSquared:{type:Boolean,default:!1},counters:null,link:{default:void 0},linkLabel:{default:"Learn More"},inverted:{type:Boolean,default:!1}},setup(g){const s=g,_=h(()=>[s.imageSquared&&"image-squared"]),a=h(()=>[s.inverted&&"text-light"]);return(r,l)=>{const i=N,u=ce,c=se,d=le;return p(),m("div",Yt,[n("div",Zt,[n("div",eo,[e(i,{tag:"h2",size:4,weight:"semi",leading:"",inverted:s.inverted},{default:o(()=>[n("span",null,w(s.title),1)]),_:1},8,["inverted"]),n("p",to,w(s.text),1),n("div",oo,[n("div",no,[(p(!0),m(f,null,T(s.counters,(G,Y)=>(p(),m("div",{key:Y,class:"column is-4"},[n("div",so,[n("i",{class:"iconify","data-icon":G.icon},null,8,lo)]),n("div",ao,[e(i,{tag:"h3",size:4,weight:"bold",narrow:"",inverted:s.inverted},{default:o(()=>[e(u,{number:G.number},null,8,["number"])]),_:2},1032,["inverted"]),n("p",{class:x(["paragraph pt-2 max-w-3 rem-95",t(a)])},w(G.text),3)])]))),128))]),s.link?(p(),m("div",io,[e(d,{alignment:"centered"},{default:o(()=>[e(c,{to:s.link,color:"primary",bold:"",raised:""},{default:o(()=>[b(w(s.linkLabel),1)]),_:1},8,["to"])]),_:1})])):W("",!0)])]),n("div",ro,[n("img",{src:s.image,class:x(t(_)),alt:"featured image"},null,10,uo)])])])}}});var po=F(co,[["__scopeId","data-v-01b3ad61"]]);const mo={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"counters",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},go=`
<script setup lang="ts">
import { content16 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockJ
    :title="content16.title"
    :text="content16.text"
    :image="content16.image"
    :counters="content16.counters"
  />
</template>
`,_o=`
export const content16 = {
  title: 'Great starter kits',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  image: '/https://infernaco.com/spark-files/assets/demo/img/content/800x600/7.jpg',
  link: 'index',
  counters: [
    {
      icon: 'logos:bootstrap',
      number: 250,
      text: 'Bootstrap components',
    },
    {
      icon: 'logos:bulma',
      number: 180,
      text: 'Bulma components',
    },
    {
      icon: 'logos:android-icon',
      number: 94,
      text: 'Android components',
    },
  ],
}
`,bo=n("div",{class:"py-4"},null,-1),fo=n("p",{class:"paragraph rem-95"},[b(" Spark ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ko=k({setup(g){return(s,_)=>{const a=$,r=po,l=L,i=j,u=S,c=I,d=D;return p(),m(f,null,[e(i,{id:"block-j-demo","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block J",subtitle:"Block J variation 1",link:"block-j-props"}),e(r,{title:t(B).title,text:t(B).text,image:t(B).image,counters:t(B).counters},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block J",subtitle:"Block J variation 1",link:"block-j-props",inverted:""}),e(r,{title:t(B).title,text:t(B).text,image:t(B).image,counters:t(B).counters,inverted:""},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block J",subtitle:"Block J variation 2",link:"block-j-props"}),e(r,{title:t(B).title,text:t(B).text,image:t(B).image,counters:t(B).counters,link:"index","image-squared":""},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{id:"block-j-props","bordered-bottom":""},{default:o(()=>[e(l,null,{default:o(()=>[e(a,{title:"Block J Props",subtitle:"Available props for block J"}),bo,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(go)},null,8,["code"])]),props:o(()=>[e(c,{props:t(mo).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(_o)},null,8,["code"])]),usage:o(()=>[fo]),_:1})]),_:1})]),_:1})],64)}}}),Eo=k({setup(g){const s=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"},{label:"Block I",target:"block-i-demo"},{label:"Block J",target:"block-j-demo"}];return(_,a)=>{const r=ee,l=Z;return p(),m("div",null,[e(r,{title:"Content Blocks",subtitle:"More than 10 customizable content blocks are awaiting for you to build your own layouts, pages, and content."}),e(l,{links:s,width:"940px"}),e(be),e(ye),e(Ee),e(Xe),e(ct),e(Bt),e(Ft),e(Nt),e(Qt),e(ko),e(te)])}}});export{Eo as default};
