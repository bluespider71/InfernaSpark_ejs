import{_ as K}from"./DemoLinks.b68e1d3f.js";import{_ as x,a as R}from"./DemoTitle.8129d84d.js";import{_ as w,a as D}from"./PrismCode.c318c48c.js";import{_ as z}from"./DemoProps.3732b33d.js";import{e as T,v as b,S as B,y as A,T as Y,o as c,f as g,g as d,F as v,G as L,J as H,D as j,i as N,A as s,C as I,h as e,U as E,w as a,n as G,M as C,j as O}from"./index.65d9db8a.js";import{e as V}from"./lightbox.esm.9b2793eb.js";import{m as P,a as S,b as W,s as h}from"./index.923f0249.js";import{_ as Q}from"./GalleryBlockB.af3be767.js";import{_ as X}from"./GalleryBlockC.bd989984.js";import{D as Z}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";import"./FooterBubbles.b04e47b0.js";const ee={class:"py-6"},ae=["src","onClick"],se=b({props:{items:null,squared:{type:Boolean,default:!1},limit:{default:99}},setup(_){var p,m;const r=_,y=B("all"),o=B(""),i=(m=(p=r.items)==null?void 0:p.map(k=>({name:k.image})))!=null?m:[],l=k=>{o.value=k},t=()=>{o.value=""},n=A(()=>[r.squared&&"is-squared"]);return(k,f)=>{const q=Y("background");return c(),g("div",ee,[d("div",{class:j(["parent",s(n)])},[(c(!0),g(v,null,L(r.items.slice(0,r.limit),(u,$)=>H((c(),g("div",{key:$,class:j(["block has-background-image",`frame-${u.frame}`])},[d("img",{src:u.image,alt:"shadow image","aria-hidden":"true",onClick:N(J=>l(u.image),["prevent"])},null,8,ae)],2)),[[q,{src:u.image,placeholder:`https://dummyimage.com/${u.size}/ededed/000000`}]])),128))],2),(c(),I(E,{to:"body"},[e(s(V),{images:s(i),"current-image-name":o.value,filter:y.value,"timeout-duration":5e3,"close-on-backdrop-click":!0,onOnLightboxClose:t},null,8,["images","current-image-name","filter"])]))])}}});var oe=T(se,[["__scopeId","data-v-3eb0bfa4"]]);const le={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},te=`
<script setup lang="ts">
import { masonryGallery } from '/@src/data/blocks/gallery'
<\/script>

<template>
  <GalleryBlockA :items="masonryGallery" squared />
</template>
`,re=`
import type { GalleryBlockAItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockA.vue'

export const masonryGallery: GalleryBlockAItem[] = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/3.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/2.jpg',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/1.jpg',
    size: '800x600',
    frame: '1x2',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/4.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/6.jpg',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/5.jpg',
    size: '800x600',
    frame: '3x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/7.jpg',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/8.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/9.jpg',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/10.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/11.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/12.jpg',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/14.jpg',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/13.jpg',
    size: '800x600',
    frame: '1x1',
  },
]
`,ie=d("div",{class:"py-4"},null,-1),ne=d("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),me=b({setup(_){return(r,y)=>{const o=x,i=oe,l=G,t=C,n=w,p=z,m=D;return c(),g(v,null,[e(t,{id:"block-a-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(i,{items:s(P)},null,8,["items"])]),_:1})]),_:1}),e(t,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(i,{items:s(P),squared:""},null,8,["items"])]),_:1})]),_:1}),e(t,{id:"block-a-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block A Props",subtitle:"Available props for block A"}),ie,e(m,null,{code:a(()=>[e(n,{language:"html",code:s(te)},null,8,["code"])]),props:a(()=>[e(p,{props:s(le).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:s(re)},null,8,["code"])]),usage:a(()=>[ne]),_:1})]),_:1})]),_:1})],64)}}}),ce={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},pe=`
<script setup lang="ts">
import { advancedGallery } from '/@src/data/blocks/gallery'
<\/script>

<template>
  <GalleryBlockB :items="advancedGallery" squared />
</template>
`,de=`
import type { GalleryBlockBRow } from '/@src/components/blocks/gallery-blocks/GalleryBlockB.vue'

export const advancedGallery: GalleryBlockBRow[] = [
  {
    items: [
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/15.jpg',
        size: 1,
        date: 'Nov 11, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/11.jpg',
          name: 'Jane Mitchells',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/16.jpg',
        size: 1,
        date: 'Nov 11, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/32.jpg',
          name: 'Chiara Simoni',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/17.jpg',
        size: 2,
        date: 'Nov 13, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/51.jpg',
          name: 'Ben Wilson',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/18.jpg',
        size: 1,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg',
          name: 'Terry Spitz',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/19.jpg',
        size: 2,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/17.jpg',
          name: 'Anya Sykorsky',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/20.jpg',
        size: 2,
        date: 'Nov 15, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/57.jpg',
          name: 'Yoni Fuller',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/21.jpg',
        size: 2,
        date: 'Nov 17, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/43.jpg',
          name: 'Jaime Escudero',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/22.jpg',
        size: 3,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/58.jpg',
          name: 'Lakisha Jackson',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/23.jpg',
        size: 2,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/41.jpg',
          name: 'Vishnu Prasad',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/24.jpg',
        size: 1,
        date: 'Nov 18, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/19.jpg',
          name: 'Erik Smith',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/25.jpg',
        size: 1,
        date: 'Nov 20, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/7.jpg',
          name: 'Daniel Walder',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/26.jpg',
        size: 1,
        date: 'Nov 21, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/21.jpg',
          name: 'Trisha Haze',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/30.jpg',
        size: 2,
        date: 'Nov 23, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/22.jpg',
          name: 'Robert Caradine',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/28.jpg',
        size: 1,
        date: 'Nov 24, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/18.jpg',
          name: 'Malik Shahid',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/29.jpg',
        size: 2,
        date: 'Nov 26, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg',
          name: 'Yasmine Gunei',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/27.jpg',
        size: 3,
        date: 'Nov 30, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/55.jpg',
          name: 'Anthony Tether',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/31.jpg',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg',
          name: 'Mia Schultz',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/32.jpg',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/28.jpg',
          name: 'Catarina Kolovskaya',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/33.jpg',
        size: 1,
        date: 'Dec 5, 2021',
        liked: true,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/35.jpg',
          name: 'Robert Plant',
        },
      },
      {
        image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/34.jpg',
        size: 1,
        date: 'Dec 6, 2021',
        liked: false,
        owner: {
          avatar: '/https://infernaco.com/spark-files/assets/demo/img/avatars/29.jpg',
          name: 'Christina Yang',
        },
      },
    ],
  },
]
`,ge=d("div",{class:"py-4"},null,-1),ue=d("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),_e=b({setup(_){return(r,y)=>{const o=x,i=Q,l=G,t=C,n=w,p=z,m=D;return c(),g(v,null,[e(t,{id:"block-b-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(i,{items:s(S)},null,8,["items"])]),_:1})]),_:1}),e(t,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(i,{items:s(S),squared:""},null,8,["items"])]),_:1})]),_:1}),e(t,{id:"block-b-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block B Props",subtitle:"Available props for block B"}),ge,e(m,null,{code:a(()=>[e(n,{language:"html",code:s(pe)},null,8,["code"])]),props:a(()=>[e(p,{props:s(ce).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:s(de)},null,8,["code"])]),usage:a(()=>[ue]),_:1})]),_:1})]),_:1})],64)}}}),F={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},M=`
<script setup lang="ts">
import { simpleGallery } from '/@src/data/blocks/gallery'
<\/script>

<template>
  <GalleryBlockD :items="simpleGallery" gap="xs" :columns="4" :limit="6" />
</template>
`,U=`
import type { GalleryBlockDItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockD.vue'

export const simpleGallery: GalleryBlockDItem[] = [
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/41.jpg',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/42.jpg',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/43.jpg',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/44.jpg',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/45.jpg',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/46.jpg',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/47.jpg',
  },
  {
    image: '/https://infernaco.com/spark-files/assets/demo/img/gallery/48.jpg',
  },
]
`,ye=d("div",{class:"py-4"},null,-1),ke=d("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),be=b({setup(_){return(r,y)=>{const o=x,i=X,l=G,t=C,n=w,p=z,m=D;return c(),g(v,null,[e(t,{id:"block-c-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(i,{items:s(W)},null,8,["items"])]),_:1})]),_:1}),e(t,{id:"block-c-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block C Props",subtitle:"Available props for block C"}),ye,e(m,null,{code:a(()=>[e(n,{language:"html",code:s(M)},null,8,["code"])]),props:a(()=>[e(p,{props:s(F).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:s(U)},null,8,["code"])]),usage:a(()=>[ke]),_:1})]),_:1})]),_:1})],64)}}});const ve={class:"columns is-multiline b-columns-half-tablet-p"},fe=["src","onClick","onKeydown"],he=b({props:{items:null,columns:{default:3},limit:{default:32},gap:{default:"default"},squared:{type:Boolean,default:!1}},setup(_){var m,k;const r=_,y=B("all"),o=B(""),i=(k=(m=r.items)==null?void 0:m.map(f=>({name:f.image})))!=null?k:[],l=f=>{o.value=f},t=()=>{o.value=""},n=A(()=>[r.gap&&`gap-${r.gap}`,r.squared&&"is-squared"]),p=A(()=>[r.columns&&`is-${r.columns}`]);return(f,q)=>(c(),g("div",{class:j(["gallery py-6",s(n)])},[d("div",ve,[(c(!0),g(v,null,L(r.items.slice(0,r.limit),(u,$)=>(c(),g("div",{key:$,class:j(["column",s(p)])},[d("img",{class:"block",src:u.image,alt:"featured image",onClick:N(J=>l(u.image),["prevent"]),onKeydown:O(N(()=>l(u.image),["prevent"]),["space"])},null,40,fe)],2))),128))]),(c(),I(E,{to:"body"},[e(s(V),{images:s(i),"current-image-name":o.value,filter:y.value,"timeout-duration":5e3,"close-on-backdrop-click":!0,onOnLightboxClose:t},null,8,["images","current-image-name","filter"])]))],2))}});var Be=T(he,[["__scopeId","data-v-a7c26b3c"]]);const je=d("div",{class:"py-4"},null,-1),xe=d("p",{class:"paragraph rem-95"}," Spark ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),we=b({setup(_){return(r,y)=>{const o=x,i=Be,l=G,t=C,n=w,p=z,m=D;return c(),g(v,null,[e(t,{id:"block-d-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(i,{items:s(h)},null,8,["items"])]),_:1})]),_:1}),e(t,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"}),e(i,{items:s(h),gap:"sm"},null,8,["items"])]),_:1})]),_:1}),e(t,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"}),e(i,{items:s(h),gap:"xs"},null,8,["items"])]),_:1})]),_:1}),e(t,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 4",link:"block-d-props"}),e(i,{items:s(h),gap:"sm",squared:""},null,8,["items"])]),_:1})]),_:1}),e(t,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 5",link:"block-d-props"}),e(i,{items:s(h),gap:"xs",columns:4,limit:6},null,8,["items"])]),_:1})]),_:1}),e(t,{id:"block-d-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D Props",subtitle:"Available props for block D"}),je,e(m,null,{code:a(()=>[e(n,{language:"html",code:s(M)},null,8,["code"])]),props:a(()=>[e(p,{props:s(F).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:s(U)},null,8,["code"])]),usage:a(()=>[xe]),_:1})]),_:1})]),_:1})],64)}}}),Ve=b({setup(_){const r=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(y,o)=>{const i=R,l=K;return c(),g("div",null,[e(i,{title:"Gallery Blocks",subtitle:"More than 4 customizable gallery blocks are awaiting for you to build your own layouts, pages, and content."}),e(l,{links:r,width:"420px"}),e(me),e(_e),e(be),e(we),e(Z)])}}});export{Ve as default};
