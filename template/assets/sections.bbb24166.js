import{_ as N}from"./DemoLinks.b68e1d3f.js";import{_ as b,a as V}from"./DemoTitle.8129d84d.js";import{D as W}from"./DocumentationFooter.26e38be2.js";import{_ as y,a as f}from"./PrismCode.c318c48c.js";import{e as T,v as g,o as u,C as m,w as t,h as o,g as e,A as p,p as k,k as z,m as c,q as S,n as w,M as $,T as P,J as Y,f as A}from"./index.65d9db8a.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";const C=`
<script setup lang="ts">
export type SectionSize = 'medium' | 'large'
export type SectionColor = 'grey' | 'darker' | 'primary' | 'gradient'
export type SectionWave = 'wave-1' | 'wave-2'
export type SectionTongue = 'tongue-1' | 'tongue-2'
export type SectionShapeColor =
  | 'grey'
  | 'darker'
  | 'primary'
  | 'white'
  | 'footer-dark'

export interface SectionProps {
  size?: SectionSize
  color?: SectionColor
  borderedTop?: boolean
  borderedBottom?: boolean
  bottomSpaced?: boolean
  bottomNarrow?: boolean
  topNarrow?: boolean
  overflown?: boolean
  wave?: SectionWave
  tongue?: SectionTongue
  shapeColor?: SectionShapeColor
  overlay?: boolean
}
<\/script>
`,E=`
<template>
  <Section>
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`,L=`
<template>
  <Section color="grey">
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`,q=`
<template>
  <Section bordered-top bordered-bottom>
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`,F=`
<template>
  <!--Wave 1-->
  <Section wave="wave-1" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
  <Section color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>

  <!--Wave 2-->
  <Section wave="wave-2" shape-color="darker">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
  <Section color="darker">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
</template>
`,H=`
<template>
<!--Tongue 1-->
  <Section tongue="tongue-1" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>

  <!--Tongue 2-->
  <Section tongue="tongue-2" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
</template>
`,J=`
<template>
  <Section
    v-background="{
      src: '/https://infernaco.com/spark-files/assets/demo/img/bg/3.jpeg',
      placeholder: 'https://dummyimage.com/1920x1080/',
    }"
    overlay
  >
    <Container>
      <div class="has-text-centered content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph is-inverted-light">
          I can hold any type of content
        </p>
      </div>
    </Container>
  </Section>
</template>
`;const B=n=>(k("data-v-35d38b70"),n=n(),z(),n),M={class:"mx-auto max-w-6"},G={class:"pt-4 pb-6"},K={class:"section-holder mt-4"},O={class:"content py-6"},Q=B(()=>e("span",null,"Iam a Section",-1)),R=B(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),U=B(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),X=B(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Spark sections sizes can be customized using the "),e("code",null,"size"),c(" prop. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1)),Z=g({setup(n){return(h,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),m(s,{id:"section-base-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",M,[e("div",G,[o(r,{title:"Section",subtitle:"Section base layout"}),e("div",K,[o(s,null,{default:t(()=>[o(a,null,{default:t(()=>[e("div",O,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[Q]),_:1}),R])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:p(E)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:p(C)},null,8,["code"])]),sample:t(()=>[U]),usage:t(()=>[X]),_:1})])]),_:1})]),_:1})}}});var ee=T(Z,[["__scopeId","data-v-35d38b70"]]);const I=n=>(k("data-v-c42b4c14"),n=n(),z(),n),oe={class:"mx-auto max-w-6"},te={class:"pt-4 pb-6"},ne={class:"section-holder mt-4"},ae={class:"content py-6"},se=I(()=>e("span",null,"Iam a Section",-1)),ce=I(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),ie={class:"mt-4"},le={class:"content py-6"},re=I(()=>e("span",null,"Iam a Section",-1)),pe=I(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),de=I(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),_e=I(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Spark sections colors can be customized using the "),e("code",null,"color"),c(" prop. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1)),ue=g({setup(n){return(h,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),m(s,{id:"section-color-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",oe,[e("div",te,[o(r,{title:"Section Color",subtitle:"Available section colors"}),e("div",ne,[o(s,{color:"darker"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",ae,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[se]),_:1}),ce])]),_:1})]),_:1})]),e("div",ie,[o(s,{color:"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",le,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[re]),_:1}),pe])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:p(L)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:p(C)},null,8,["code"])]),sample:t(()=>[de]),usage:t(()=>[_e]),_:1})])]),_:1})]),_:1})}}});var he=T(ue,[["__scopeId","data-v-c42b4c14"]]);const me={class:"mx-auto max-w-6"},ge={class:"pt-4 pb-6"},ve={class:"section-holder mt-4"},be={class:"content py-6"},ye=e("span",null,"Iam a Section",-1),fe=e("p",{class:"paragraph"},"I can hold any type of content",-1),Se=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),we=e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Spark sections top and bottom borders can be added using the "),e("code",null,"bordered-bottom"),c(" and "),e("code",null,"bordered-top"),c(" props. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1),$e=g({setup(n){return(h,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),m(s,{id:"section-borders-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",me,[e("div",ge,[o(r,{title:"Section Borders",subtitle:"Section borders setup"}),e("div",ve,[o(s,{"bordered-top":"","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",be,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[ye]),_:1}),fe])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:p(q)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:p(C)},null,8,["code"])]),sample:t(()=>[Se]),usage:t(()=>[we]),_:1})])]),_:1})]),_:1})}}});const _=n=>(k("data-v-140672ec"),n=n(),z(),n),Ce={class:"mx-auto max-w-6"},Ie={class:"pt-4 pb-6"},xe={class:"section-holder mt-4"},Te={class:"content py-6"},ke=_(()=>e("span",null,"Iam a Section",-1)),ze=_(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Be={class:"content py-6"},De=_(()=>e("span",null,"Iam a Section",-1)),je=_(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Ne={class:"section-holder mt-4"},Ve={class:"content py-6"},We=_(()=>e("span",null,"Iam a Section",-1)),Pe=_(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Ye={class:"content py-6"},Ae=_(()=>e("span",null,"Iam a Section",-1)),Ee=_(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Le=_(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),qe=_(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Spark sections can have svg waves using the "),e("code",null,"wave"),c(" and optional "),e("code",null,"shape-color"),c(" props. The "),e("code",null,"shape-color"),c(" should be set to the color of the following section. ")],-1)),Fe=g({setup(n){return(h,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),m(s,{id:"section-wave-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Ce,[e("div",Ie,[o(r,{title:"Section Wave",subtitle:"Section wave shape"}),e("div",xe,[o(s,{wave:"wave-1","shape-color":"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Te,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[ke]),_:1}),ze])]),_:1})]),_:1}),o(s,{color:"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Be,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[De]),_:1}),je])]),_:1})]),_:1})]),e("div",Ne,[o(s,{wave:"wave-2","shape-color":"darker"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Ve,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[We]),_:1}),Pe])]),_:1})]),_:1}),o(s,{color:"darker"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Ye,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[Ae]),_:1}),Ee])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:p(F)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:p(C)},null,8,["code"])]),sample:t(()=>[Le]),usage:t(()=>[qe]),_:1})])]),_:1})]),_:1})}}});var He=T(Fe,[["__scopeId","data-v-140672ec"]]);const x=n=>(k("data-v-62df5e2e"),n=n(),z(),n),Je={class:"mx-auto max-w-6"},Me={class:"pt-4 pb-6"},Ge={class:"section-holder mt-4"},Ke={class:"content py-6"},Oe=x(()=>e("span",null,"Iam a Section",-1)),Qe=x(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Re={class:"content py-6"},Ue=x(()=>e("span",null,"Iam a Section",-1)),Xe=x(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Ze=x(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),eo=x(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Spark sections can have svg tongues using the "),e("code",null,"tongue"),c(" and optional "),e("code",null,"shape-color"),c(" props. The "),e("code",null,"shape-color"),c(" should be set to the color of the following section. ")],-1)),oo=g({setup(n){return(h,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),m(s,{id:"section-tongue-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Je,[e("div",Me,[o(r,{title:"Section Wave",subtitle:"Section wave shape"}),e("div",Ge,[o(s,{tongue:"tongue-1","shape-color":"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Ke,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[Oe]),_:1}),Qe])]),_:1})]),_:1}),o(s,{tongue:"tongue-2","shape-color":"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Re,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[Ue]),_:1}),Xe])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:p(H)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:p(C)},null,8,["code"])]),sample:t(()=>[Ze]),usage:t(()=>[eo]),_:1})])]),_:1})]),_:1})}}});var to=T(oo,[["__scopeId","data-v-62df5e2e"]]);const D=n=>(k("data-v-c3b33c96"),n=n(),z(),n),no={class:"mx-auto max-w-6"},ao={class:"pt-4 pb-6"},so={class:"section-holder mt-4"},co={class:"has-text-centered content py-6"},io=D(()=>e("span",null,"Iam a Section",-1)),lo=D(()=>e("p",{class:"paragraph is-inverted-light"}," I can hold any type of content ",-1)),ro=D(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),po=D(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Spark sections sizes can have a background image using the "),e("code",null,"v-background"),c(" prop. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1)),_o=g({setup(n){return(h,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f,j=P("background");return u(),m(s,{id:"section-background-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",no,[e("div",ao,[o(r,{title:"Background",subtitle:"Section background image"}),e("div",so,[Y((u(),m(s,{overlay:""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",co,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[io]),_:1}),lo])]),_:1})]),_:1})),[[j,{src:"/https://infernaco.com/spark-files/assets/demo/img/bg/3.jpeg",placeholder:"https://dummyimage.com/1920x1080/"}]])])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:p(J)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:p(C)},null,8,["code"])]),sample:t(()=>[ro]),usage:t(()=>[po]),_:1})])]),_:1})]),_:1})}}});var uo=T(_o,[["__scopeId","data-v-c3b33c96"]]);const wo=g({setup(n){const h=[{label:"Section",target:"section-base-demo"},{label:"Color",target:"section-color-demo"},{label:"Borders",target:"section-borders-demo"},{label:"Waves",target:"section-wave-demo"},{label:"Tongues",target:"section-tongue-demo"},{label:"Background",target:"section-background-demo"}];return(v,r)=>{const i=V,a=N;return u(),A("div",null,[o(i,{title:"Section Blocks",subtitle:"Sections are the base layout building block for any website. Spark sections are very versatile and easily customizable. Explore Spark sections."}),o(a,{links:h,width:"580px"}),o(ee),o(he),o($e),o(He),o(to),o(uo),o(W)])}}});export{wo as default};
