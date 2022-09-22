import{_ as D}from"./DemoLinks.b68e1d3f.js";import{_ as g,a as q}from"./DemoTitle.8129d84d.js";import{D as R}from"./DocumentationFooter.26e38be2.js";import{v as p,o as h,C as y,w as a,h as t,g as e,A as r,m as s,V as C,n as b,M as f,e as T,W as S,y as k,f as I,r as V,D as B}from"./index.65d9db8a.js";import{_ as x,a as v}from"./PrismCode.c318c48c.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";const j=`
<script setup lang="ts">
export interface DarkImageProps {
  src: string
  srcDark?: string
  alt?: string
  width?: string
  height?: string
  inline?: boolean
}
<\/script>
`,P=`
<template>
  <DarkImage
    src="/@src/https://infernaco.com/spark-files/assets/illustrations/features/vr.svg"
    src-dark="/@src/https://infernaco.com/spark-files/assets/illustrations/features/vr-dark.svg"
    alt="dark image"
    width="800"
    height="600"
  />
</template>
`,w=`
<script setup lang="ts">
export type ImageRatio =
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3'

export type ImageDimensions = 16 | 24 | 32 | 48 | 64 | 96 | 128

export interface ImageRatioProps {
  ratio: ImageRatio
  rounded?: boolean
  curve?: string
  squareDimensions?: ImageDimensions
}
<\/script>
`,N=`
<template>
  <ImageRatio ratio="4by3">
    <img src="https://dummyimage.com/640x480/" alt="ratio image" width="640" height="480" />
  </ImageRatio>
</template>
`,E=`
<template>
  <ImageRatio ratio="4by3" rounded>
    <img src="https://dummyimage.com/640x480/" alt="ratio image" width="640" height="480" />
  </ImageRatio>
</template>
`,L=`
<template>
  <ImageRatio ratio="1by1" :square-dimensions="96" rounded>
    <img src="https://dummyimage.com/250x250" alt="ratio image" width="250" height="250" />
  </ImageRatio>
</template>
`,W={class:"mx-auto max-w-6"},X={class:"pt-4 pb-6"},z={class:"is-flex is-justify-content-center mx-auto max-w-4 pt-4"},A=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),F=e("p",{class:"paragraph rem-95"},[s(" Images play a central part of every web and mobile application. Spark's dark image component let's you setup images for both light and dark mode, removing the hassle. The dark image component receives 2 image sources with the "),e("code",null,"src"),s(" and the "),e("code",null,"dark-src"),s(" prop. It also provides a "),e("code",null,"width"),s(" and a "),e("code",null,"height"),s(" prop as well as a way to set the image display to "),e("code",null,"inline"),s(" . ")],-1),H=p({setup(_){return(i,u)=>{const d=g,o=C,n=x,m=v,l=b,c=f;return h(),y(c,{id:"image-dark-demo","bordered-bottom":""},{default:a(()=>[t(l,null,{default:a(()=>[e("div",W,[e("div",X,[t(d,{title:"Dark Image",subtitle:"Dark image feature"}),e("div",z,[t(o,{src:"/https://infernaco.com/spark-files/assets/illustrations/features/vr.svg","src-dark":"/https://infernaco.com/spark-files/assets/illustrations/features/vr-dark.svg",alt:"dark image",width:"800",height:"600"})])]),t(m,null,{code:a(()=>[t(n,{language:"html",code:r(P)},null,8,["code"])]),props:a(()=>[t(n,{language:"javascript",code:r(j)},null,8,["code"])]),sample:a(()=>[A]),usage:a(()=>[F]),_:1})])]),_:1})]),_:1})}}});const M=p({props:{ratio:null,rounded:{type:Boolean,default:!1},curve:{default:"1rem"},squareDimensions:{default:void 0}},setup(_){const i=_;S(o=>({"7e7af054":r(d),"1a809c08":i.curve}));const u=k(()=>[i.ratio&&`is-${i.ratio}`,i.ratio==="1by1"&&i.squareDimensions&&`is-${i.squareDimensions}x${i.squareDimensions}`,i.rounded&&"is-rounded"]),d=k(()=>i.squareDimensions+"px");return(o,n)=>(h(),I("figure",{class:B(["image",r(u)])},[V(o.$slots,"default",{},void 0,!0)],2))}});var $=T(M,[["__scopeId","data-v-743af174"]]);const Y={class:"mx-auto max-w-6"},G={class:"pt-4 pb-6"},J={class:"is-flex pt-4"},K={class:"w-full max-w-1/4 px-1"},O=e("p",{class:"paragraph rem-90"},"4by3 ratio",-1),Q=e("img",{src:"https://dummyimage.com/640x480/ededed/000000",alt:"ratio image",width:"640",height:"480"},null,-1),U={class:"w-full max-w-1/4 px-1"},Z=e("p",{class:"paragraph rem-90"},"3by4 ratio",-1),ee=e("img",{src:"https://dummyimage.com/480x640/ededed/000000",alt:"ratio image",width:"480",height:"640"},null,-1),te={class:"w-full max-w-1/4 px-1"},ae=e("p",{class:"paragraph rem-90"},"5by4 ratio",-1),oe=e("img",{src:"https://dummyimage.com/600X480/ededed/000000",alt:"ratio image",width:"640",height:"480"},null,-1),se={class:"w-full max-w-1/4 px-1"},ie=e("p",{class:"paragraph rem-90"},"16by9 ratio",-1),ne=e("img",{src:"https://dummyimage.com/640x360/ededed/000000",alt:"ratio image",width:"640",height:"360"},null,-1),de=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),re=e("p",{class:"paragraph rem-95"},[s(" Images play a central part of every web and mobile application. Spark's dark image ratio component let's you create images with the perfect ratio just by using the "),e("code",null,"ratio"),s(" prop. Take a look at the "),e("a",{href:"https://bulma.io/documentation/elements/image/",class:"link"}," Bulma documentation "),s(" to see al available ratios. ")],-1),me=p({setup(_){return(i,u)=>{const d=g,o=$,n=x,m=v,l=b,c=f;return h(),y(c,{id:"image-ratio-demo","bordered-bottom":""},{default:a(()=>[t(l,null,{default:a(()=>[e("div",Y,[e("div",G,[t(d,{title:"Image Ratio",subtitle:"Image ratio feature"}),e("div",J,[e("div",K,[O,t(o,{ratio:"4by3"},{default:a(()=>[Q]),_:1})]),e("div",U,[Z,t(o,{ratio:"3by4"},{default:a(()=>[ee]),_:1})]),e("div",te,[ae,t(o,{ratio:"5by4"},{default:a(()=>[oe]),_:1})]),e("div",se,[ie,t(o,{ratio:"16by9"},{default:a(()=>[ne]),_:1})])])]),t(m,null,{code:a(()=>[t(n,{language:"html",code:r(N)},null,8,["code"])]),props:a(()=>[t(n,{language:"javascript",code:r(w)},null,8,["code"])]),sample:a(()=>[de]),usage:a(()=>[re]),_:1})])]),_:1})]),_:1})}}}),le={class:"mx-auto max-w-6"},ce={class:"pt-4 pb-6"},_e={class:"is-flex pt-4"},ue={class:"w-full max-w-1/4 px-1"},pe=e("p",{class:"paragraph rem-90"},"4by3 ratio",-1),he=e("img",{src:"https://dummyimage.com/640x480/ededed/000000",alt:"ratio image",width:"640",height:"480"},null,-1),ge={class:"w-full max-w-1/4 px-1"},ye=e("p",{class:"paragraph rem-90"},"3by4 ratio",-1),be=e("img",{src:"https://dummyimage.com/480x640/ededed/000000",alt:"ratio image",width:"480",height:"640"},null,-1),fe={class:"w-full max-w-1/4 px-1"},xe=e("p",{class:"paragraph rem-90"},"5by4 ratio",-1),ve=e("img",{src:"https://dummyimage.com/600X480/ededed/000000",alt:"ratio image",width:"640",height:"480"},null,-1),we={class:"w-full max-w-1/4 px-1"},$e=e("p",{class:"paragraph rem-90"},"16by9 ratio",-1),ke=e("img",{src:"https://dummyimage.com/640x360/ededed/000000",alt:"ratio image",width:"640",height:"360"},null,-1),Ie=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),De=e("p",{class:"paragraph rem-95"},[s(" Images play a central part of every web and mobile application. Spark's dark image ratio component let's you create images with the perfect ratio just by using the "),e("code",null,"ratio"),s(" prop. Take a look at the "),e("a",{href:"https://bulma.io/documentation/elements/image/",class:"link"}," Bulma documentation "),s(" to see al available ratios. You can also make the images rounded by using the "),e("code",null,"rounded"),s(" prop. ")],-1),qe=p({setup(_){return(i,u)=>{const d=g,o=$,n=x,m=v,l=b,c=f;return h(),y(c,{id:"image-rounded-demo","bordered-bottom":""},{default:a(()=>[t(l,null,{default:a(()=>[e("div",le,[e("div",ce,[t(d,{title:"Rounded Ratio",subtitle:"Rounded ratio feature"}),e("div",_e,[e("div",ue,[pe,t(o,{ratio:"4by3",rounded:""},{default:a(()=>[he]),_:1})]),e("div",ge,[ye,t(o,{ratio:"3by4",rounded:""},{default:a(()=>[be]),_:1})]),e("div",fe,[xe,t(o,{ratio:"5by4",rounded:""},{default:a(()=>[ve]),_:1})]),e("div",we,[$e,t(o,{ratio:"16by9",rounded:""},{default:a(()=>[ke]),_:1})])])]),t(m,null,{code:a(()=>[t(n,{language:"html",code:r(E)},null,8,["code"])]),props:a(()=>[t(n,{language:"javascript",code:r(w)},null,8,["code"])]),sample:a(()=>[Ie]),usage:a(()=>[De]),_:1})])]),_:1})]),_:1})}}}),Re={class:"mx-auto max-w-6"},Ce={class:"pt-4 pb-6"},Te={class:"is-flex pt-4"},Se={class:"px-1"},Ve=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Be={class:"px-1"},je=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Pe={class:"px-1"},Ne=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Ee={class:"px-1"},Le=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),We={class:"is-flex pt-4"},Xe={class:"px-1"},ze=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Ae={class:"px-1"},Fe=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),He={class:"px-1"},Me=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Ye={class:"px-1"},Ge=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Je={class:"is-flex pt-4"},Ke={class:"px-1"},Oe=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Qe={class:"px-1"},Ue=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),Ze={class:"px-1"},et=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),tt={class:"px-1"},at=e("img",{src:"https://dummyimage.com/250x250/ededed/000000",alt:"ratio image",width:"250",height:"250"},null,-1),ot=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),st=e("p",{class:"paragraph rem-95"},[s(" Images play a central part of every web and mobile application. Spark's dark image ratio component let's you create images with the perfect ratio just by using the "),e("code",null,"ratio"),s(" prop. Take a look at the "),e("a",{href:"https://bulma.io/documentation/elements/image/",class:"link"}," Bulma documentation "),s(" to see al available ratios. When using the "),e("code",null,"1by1"),s(" ratio, you have access to an additional "),e("code",null,"square-dimensions"),s(" that gives you control over the images dimensions. ")],-1),it=p({setup(_){return(i,u)=>{const d=g,o=$,n=x,m=v,l=b,c=f;return h(),y(c,{id:"image-square-demo","bordered-bottom":""},{default:a(()=>[t(l,null,{default:a(()=>[e("div",Re,[e("div",Ce,[t(d,{title:"Square Ratio",subtitle:"Square ratio feature"}),e("div",Te,[e("div",Se,[t(o,{ratio:"1by1","square-dimensions":48},{default:a(()=>[Ve]),_:1})]),e("div",Be,[t(o,{ratio:"1by1","square-dimensions":48},{default:a(()=>[je]),_:1})]),e("div",Pe,[t(o,{ratio:"1by1","square-dimensions":48},{default:a(()=>[Ne]),_:1})]),e("div",Ee,[t(o,{ratio:"1by1","square-dimensions":48},{default:a(()=>[Le]),_:1})])]),e("div",We,[e("div",Xe,[t(o,{ratio:"1by1","square-dimensions":64,rounded:""},{default:a(()=>[ze]),_:1})]),e("div",Ae,[t(o,{ratio:"1by1","square-dimensions":64,rounded:""},{default:a(()=>[Fe]),_:1})]),e("div",He,[t(o,{ratio:"1by1","square-dimensions":64,rounded:""},{default:a(()=>[Me]),_:1})]),e("div",Ye,[t(o,{ratio:"1by1","square-dimensions":64,rounded:""},{default:a(()=>[Ge]),_:1})])]),e("div",Je,[e("div",Ke,[t(o,{ratio:"1by1","square-dimensions":96,rounded:""},{default:a(()=>[Oe]),_:1})]),e("div",Qe,[t(o,{ratio:"1by1","square-dimensions":96,rounded:""},{default:a(()=>[Ue]),_:1})]),e("div",Ze,[t(o,{ratio:"1by1","square-dimensions":96,rounded:""},{default:a(()=>[et]),_:1})]),e("div",tt,[t(o,{ratio:"1by1","square-dimensions":96,rounded:""},{default:a(()=>[at]),_:1})])])]),t(m,null,{code:a(()=>[t(n,{language:"html",code:r(L)},null,8,["code"])]),props:a(()=>[t(n,{language:"javascript",code:r(w)},null,8,["code"])]),sample:a(()=>[ot]),usage:a(()=>[st]),_:1})])]),_:1})]),_:1})}}}),pt=p({setup(_){const i=[{label:"Dark",target:"image-dark-demo"},{label:"Ratio",target:"image-ratio-demo"},{label:"Rounded",target:"image-rounded-demo"},{label:"Square",target:"image-square-demo"}];return(u,d)=>{const o=q,n=D;return h(),I("div",null,[t(o,{title:"Image Components",subtitle:"Images are very important in today's websites. They help carry your message to your users, without writing anything. Explore Spark images."}),t(n,{links:i,width:"360px"}),t(H),t(me),t(qe),t(it),t(R)])}}});export{pt as default};
