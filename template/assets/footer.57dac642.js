import{_ as B}from"./DemoLinks.b68e1d3f.js";import{_ as L,a as G}from"./DemoTitle.8129d84d.js";import{_ as y,a as F}from"./PrismCode.c318c48c.js";import{_ as I}from"./FooterBubbles.b04e47b0.js";import{e as q,v as g,y as N,P as b,o as u,f as k,C as x,H as P,g as o,r as T,h as e,w as t,F as $,G as H,z as Y,D as Q,A as r,m as l,p as U,k as j,u as V,T as C,J as R,n as D,M as S,q as z}from"./index.65d9db8a.js";import{s as m}from"./index.aa4f1d8c.js";import{_ as M,D as E}from"./DocumentationFooter.26e38be2.js";import{_ as J}from"./FooterC.3b552328.js";import{_ as K}from"./FooterD.1c10450e.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./VInput.e415d3f2.js";const w=f=>(U("data-v-4b9e83bf"),f=f(),j(),f),O={class:"container"},W={class:"columns is-vcentered b-flex-tablet-p"},X={class:"column is-4"},Z={class:"level is-mobile mobile:mb-4"},ee=l(" Product "),te=l(" Features "),oe=l(" Docs "),le={class:"column is-4 has-text-centered"},ne=w(()=>o("img",{class:"is-block size-44x44",src:V,alt:"Footer logo"},null,-1)),ie=w(()=>o("span",{class:"is-sr-only"},"Logo",-1)),se={key:0,class:"level is-mobile py-4 mx-auto max-w-1"},ae={class:"icon"},ce=["data-icon"],re={class:"is-sr-only"},de={class:"column is-4 has-text-right"},ue={class:"level is-mobile"},_e=l(" Company "),me=l(" About "),pe=l(" Support "),fe=w(()=>o("p",{class:"paragraph rem-90 footer-text has-text-centered is-6"},[o("span",{role:"img","aria-label":"copyright"},"\xA9"),l(" 2022 Spark. All rights reserved. ")],-1)),ke=g({props:{color:{default:void 0},socialLinks:{default:void 0},bubbles:{type:Boolean,default:!1},curved:{type:Boolean,default:!1}},setup(f){const _=f,v=N(()=>[_.color&&`footer-${_.color}`,_.curved&&"footer-curved",_.bubbles&&"footer-overflow"]);return(s,c)=>{const a=I,i=b("RouterLink");return u(),k("footer",{class:Q(["footer",r(v)])},[_.bubbles?(u(),x(a,{key:0})):P("",!0),o("div",O,[o("div",W,[o("div",X,[o("div",Z,[T(s.$slots,"leftLinks",{},()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ee]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[te]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[oe]),_:1})],!0)])]),o("div",le,[e(i,{class:"footer-logo-centered",to:{name:"index"}},{default:t(()=>[ne,ie]),_:1}),_.socialLinks?(u(),k("div",se,[(u(!0),k($,null,H(_.socialLinks,(n,d)=>(u(),x(i,{key:d,to:n.url,class:"level-item footer-link"},{default:t(()=>[o("span",ae,[o("i",{class:"iconify","data-icon":n.icon},null,8,ce)]),o("span",re,Y(n.name),1)]),_:2},1032,["to"]))),128))])):P("",!0)]),o("div",de,[o("div",ue,[T(s.$slots,"rightLinks",{},()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[_e]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[me]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[pe]),_:1})],!0)])])]),fe])],2)}}});var he=q(ke,[["__scopeId","data-v-4b9e83bf"]]);const ve=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterASocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterAProps {
  color?: FooterColors
  socialLinks?: FooterASocialLink[]
  bubbles?: boolean
  curved?: boolean
}
<\/script>
`,xe=`
<template>
  <FooterA color="dark" :social-links="socialLinks">
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Product</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Docs</RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Company</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">About</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Support</RouterLink>
    </template>
  </FooterA>
</template>
`,ge=`
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`,be={class:"py-12"},$e=l(" Product "),Le=l(" Features "),ye=l(" Docs "),Fe=l(" Company "),Ce=l(" About "),Re=l(" Support "),De={class:"py-12"},Se=l(" Product "),Ae=l(" Features "),we=l(" Docs "),Pe=l(" Company "),Te=l(" About "),ze=l(" Support "),Be={class:"py-12"},Ge=l(" Product "),Ie=l(" Features "),qe=l(" Docs "),Ne=l(" Company "),He=l(" About "),Ye=l(" Support "),Qe={class:"py-12"},Ue=l(" Product "),je=l(" Features "),Ve=l(" Docs "),Me=l(" Company "),Ee=l(" About "),Je=l(" Support "),Ke={class:"py-4"},Oe=o("p",{class:"paragraph rem-95"},[l(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),o("code",null,"color"),l(" prop. You can choose to display some animated bubbles by activating the "),o("code",null,"bubbles"),l(" prop. You can also give a curved shape to your footer using the "),o("code",null,"curved"),l(" prop. ")],-1),We=g({setup(f){return(_,v)=>{const s=L,c=D,a=S,i=b("RouterLink"),n=he,d=y,p=F,h=C("background");return u(),k($,null,[e(a,{id:"block-a-demo"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",be,[e(s,{title:"Footer A",subtitle:"Footer A variation 1",link:"block-a-props"})])]),_:1})]),_:1}),e(n,{color:"dark","social-links":r(m)},{"left-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[$e]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Le]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ye]),_:1})]),"right-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Fe]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ce]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Re]),_:1})]),_:1},8,["social-links"]),e(a,{color:"grey"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",De,[e(s,{title:"Footer A",subtitle:"Footer A variation 2",link:"block-a-props"})])]),_:1})]),_:1}),e(n,{color:"light",bubbles:"","social-links":r(m)},{"left-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Se]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ae]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[we]),_:1})]),"right-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Pe]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Te]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ze]),_:1})]),_:1},8,["social-links"]),e(a,{"bordered-top":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Be,[e(s,{title:"Footer A",subtitle:"Footer A variation 3",link:"block-a-props"})])]),_:1})]),_:1}),e(n,{curved:"","social-links":r(m)},{"left-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ge]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ie]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[qe]),_:1})]),"right-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ne]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[He]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ye]),_:1})]),_:1},8,["social-links"]),e(a,null,{default:t(()=>[e(c,null,{default:t(()=>[o("div",Qe,[e(s,{title:"Footer A",subtitle:"Footer A variation 4",link:"block-a-props"})])]),_:1})]),_:1}),R((u(),x(n,{color:"dark",curved:"","social-links":r(m)},{"left-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ue]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[je]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ve]),_:1})]),"right-links":t(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Me]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ee]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Je]),_:1})]),_:1},8,["social-links"])),[[h,{src:"/https://infernaco.com/spark-files/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(a,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Ke,[e(s,{title:"Props",subtitle:"Footer A available props"})]),e(p,null,{code:t(()=>[e(d,{language:"html",code:r(xe)},null,8,["code"])]),props:t(()=>[e(d,{language:"javascript",code:r(ve)},null,8,["code"])]),sample:t(()=>[e(d,{language:"javascript",code:r(ge)},null,8,["code"])]),usage:t(()=>[Oe]),_:1})]),_:1})]),_:1})],64)}}}),Xe=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterBProps {
  color?: FooterColors
  bubbles?: boolean
}
<\/script>
`,Ze=`
<template>
  <FooterB color="dark">
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Demos</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Components</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Documentation</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Support</RouterLink>
      </li>
    </template>
  </FooterB>
</template>
`,et={class:"py-12"},tt={class:"inline-block px-2"},ot=l(" Demos "),lt={class:"inline-block px-2"},nt=l(" Components "),it={class:"inline-block px-2"},st=l(" Documentation "),at={class:"inline-block px-2"},ct=l(" Support "),rt={class:"py-12"},dt={class:"inline-block px-2"},ut=l(" Demos "),_t={class:"inline-block px-2"},mt=l(" Components "),pt={class:"inline-block px-2"},ft=l(" Documentation "),kt={class:"inline-block px-2"},ht=l(" Support "),vt={class:"py-12"},xt={class:"inline-block px-2"},gt=l(" Demos "),bt={class:"inline-block px-2"},$t=l(" Components "),Lt={class:"inline-block px-2"},yt=l(" Documentation "),Ft={class:"inline-block px-2"},Ct=l(" Support "),Rt={class:"py-12"},Dt={class:"inline-block px-2"},St=l(" Demos "),At={class:"inline-block px-2"},wt=l(" Components "),Pt={class:"inline-block px-2"},Tt=l(" Documentation "),zt={class:"inline-block px-2"},Bt=l(" Support "),Gt={class:"py-4"},It=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),qt=o("p",{class:"paragraph rem-95"},[l(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),o("code",null,"color"),l(" prop. You can choose to display some animated bubbles by activating the "),o("code",null,"bubbles"),l(" prop. ")],-1),Nt=g({setup(f){return(_,v)=>{const s=L,c=D,a=S,i=b("RouterLink"),n=M,d=y,p=F,h=C("background");return u(),k($,null,[e(a,{id:"block-b-demo"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",et,[e(s,{title:"Footer B",subtitle:"Footer B variation 1",link:"block-b-props"})])]),_:1})]),_:1}),e(n,{color:"dark"},{links:t(()=>[o("li",tt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[ot]),_:1})]),o("li",lt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[nt]),_:1})]),o("li",it,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[st]),_:1})]),o("li",at,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[ct]),_:1})])]),_:1}),e(a,{color:"grey"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",rt,[e(s,{title:"Footer B",subtitle:"Footer B variation 2",link:"block-b-props"})])]),_:1})]),_:1}),e(n,{color:"light",bubbles:""},{links:t(()=>[o("li",dt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[ut]),_:1})]),o("li",_t,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[mt]),_:1})]),o("li",pt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[ft]),_:1})]),o("li",kt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[ht]),_:1})])]),_:1}),e(a,{"bordered-top":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",vt,[e(s,{title:"Footer B",subtitle:"Footer B variation 3",link:"block-b-props"})])]),_:1})]),_:1}),e(n,null,{links:t(()=>[o("li",xt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[gt]),_:1})]),o("li",bt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[$t]),_:1})]),o("li",Lt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[yt]),_:1})]),o("li",Ft,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[Ct]),_:1})])]),_:1}),e(a,{id:"block-b-demo"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Rt,[e(s,{title:"Footer B",subtitle:"Footer B variation 4",link:"block-b-props"})])]),_:1})]),_:1}),R((u(),x(n,{color:"dark"},{links:t(()=>[o("li",Dt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[St]),_:1})]),o("li",At,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[wt]),_:1})]),o("li",Pt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[Tt]),_:1})]),o("li",zt,[e(i,{to:{name:"index"},class:"footer-link"},{default:t(()=>[Bt]),_:1})])]),_:1})),[[h,{src:"/https://infernaco.com/spark-files/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(a,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Gt,[e(s,{title:"Props",subtitle:"Footer B available props"})]),e(p,null,{code:t(()=>[e(d,{language:"html",code:r(Ze)},null,8,["code"])]),props:t(()=>[e(d,{language:"javascript",code:r(Xe)},null,8,["code"])]),sample:t(()=>[It]),usage:t(()=>[qt]),_:1})]),_:1})]),_:1})],64)}}}),Ht=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterCSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterCProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterCSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}
<\/script>
`,Yt=`
<template>
  <FooterC text="SPARK (Scam Protection and Rugpull Killer) is the first of its kind scam protection API for NFT marketplaces"
    color="dark"
    :social-links="socialLinks"
    image="/@src/https://infernaco.com/spark-files/assets/illustrations/footer/footer-cityscape.png"
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Get Started</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Product</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign In</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Company</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">About</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Training</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">FAQs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Contact</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Help Center</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Guides</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">API Docs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Terms</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Privacy</RouterLink>
        </li>
      </ul>
    </template>
  </FooterC>
</template>
`,Qt=`
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`,Ut={class:"py-12"},jt=o("span",null,"Discover",-1),Vt=l(" Get Started "),Mt=l(" Product "),Et=l(" Features "),Jt=l(" Sign Up "),Kt=l(" Sign In "),Ot=o("span",null,"Company",-1),Wt=l(" Company "),Xt=l(" About "),Zt=l(" Training "),eo=l(" FAQs "),to=l(" Contact "),oo=o("span",null,"Support",-1),lo=l(" Help Center "),no=l(" Guides "),io=l(" API Docs "),so=l(" Terms "),ao=l(" Privacy "),co={class:"py-12"},ro=o("span",null,"Discover",-1),uo=l(" Get Started "),_o=l(" Product "),mo=l(" Features "),po=l(" Sign Up "),fo=l(" Sign In "),ko=o("span",null,"Company",-1),ho=l(" Company "),vo=l(" About "),xo=l(" Training "),go=l(" FAQs "),bo=l(" Contact "),$o=o("span",null,"Support",-1),Lo=l(" Help Center "),yo=l(" Guides "),Fo=l(" API Docs "),Co=l(" Terms "),Ro=l(" Privacy "),Do={class:"py-12"},So=o("span",null,"Discover",-1),Ao=l(" Get Started "),wo=l(" Product "),Po=l(" Features "),To=l(" Sign Up "),zo=l(" Sign In "),Bo=o("span",null,"Company",-1),Go=l(" Company "),Io=l(" About "),qo=l(" Training "),No=l(" FAQs "),Ho=l(" Contact "),Yo=o("span",null,"Support",-1),Qo=l(" Help Center "),Uo=l(" Guides "),jo=l(" API Docs "),Vo=l(" Terms "),Mo=l(" Privacy "),Eo={class:"py-12"},Jo=o("span",null,"Discover",-1),Ko=l(" Get Started "),Oo=l(" Product "),Wo=l(" Features "),Xo=l(" Sign Up "),Zo=l(" Sign In "),el=o("span",null,"Company",-1),tl=l(" Company "),ol=l(" About "),ll=l(" Training "),nl=l(" FAQs "),il=l(" Contact "),sl=o("span",null,"Support",-1),al=l(" Help Center "),cl=l(" Guides "),rl=l(" API Docs "),dl=l(" Terms "),ul=l(" Privacy "),_l={class:"py-4"},ml=o("p",{class:"paragraph rem-95"},[l(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),o("code",null,"color"),l(" prop. You can choose to display some animated bubbles by activating the "),o("code",null,"bubbles"),l(" prop. You can also give a curved shape to your footer using the "),o("code",null,"curved"),l(" prop. ")],-1),pl=g({setup(f){return(_,v)=>{const s=L,c=D,a=S,i=z,n=b("RouterLink"),d=J,p=y,h=F,A=C("background");return u(),k($,null,[e(a,{id:"block-c-demo"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Ut,[e(s,{title:"Footer C",subtitle:"Footer C variation 1",link:"block-c-props"})])]),_:1})]),_:1}),e(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":r(m),image:"/https://infernaco.com/spark-files/assets/illustrations/footer/footer-cityscape.png"},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[jt]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Vt]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Mt]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Et]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Jt]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Kt]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[Ot]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Wt]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Xt]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Zt]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[eo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[to]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[oo]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[lo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[no]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[io]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[so]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ao]),_:1})])])]),_:1},8,["social-links"]),e(a,{color:"grey"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",co,[e(s,{title:"Footer C",subtitle:"Footer C variation 2",link:"block-c-props"})])]),_:1})]),_:1}),e(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light",bubbles:"","social-links":r(m),image:"/https://infernaco.com/spark-files/assets/illustrations/footer/footer-cityscape.png"},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[ro]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[uo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[_o]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[mo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[po]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[fo]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[ko]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ho]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[vo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[xo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[go]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[bo]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[$o]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Lo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[yo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Fo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Co]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ro]),_:1})])])]),_:1},8,["social-links"]),e(a,{"bordered-top":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Do,[e(s,{title:"Footer C",subtitle:"Footer C variation 3",link:"block-c-props"})])]),_:1})]),_:1}),e(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,"social-links":r(m),curved:"",image:"/https://infernaco.com/spark-files/assets/illustrations/footer/footer-cityscape.png"},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[So]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ao]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[wo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Po]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[To]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[zo]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[Bo]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Go]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Io]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[qo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[No]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ho]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[Yo]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Qo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Uo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[jo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Vo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Mo]),_:1})])])]),_:1},8,["social-links"]),e(a,null,{default:t(()=>[e(c,null,{default:t(()=>[o("div",Eo,[e(s,{title:"Footer C",subtitle:"Footer C variation 4",link:"block-c-props"})])]),_:1})]),_:1}),R((u(),x(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":r(m),image:"/https://infernaco.com/spark-files/assets/illustrations/footer/footer-cityscape.png"},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[Jo]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ko]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Oo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Wo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Xo]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Zo]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[el]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[tl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ol]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ll]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[nl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[il]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[sl]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[al]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[cl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[rl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[dl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[ul]),_:1})])])]),_:1},8,["social-links"])),[[A,{src:"/https://infernaco.com/spark-files/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(a,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",_l,[e(s,{title:"Props",subtitle:"Footer C available props"})]),e(h,null,{code:t(()=>[e(p,{language:"html",code:r(Yt)},null,8,["code"])]),props:t(()=>[e(p,{language:"javascript",code:r(Ht)},null,8,["code"])]),sample:t(()=>[e(p,{language:"javascript",code:r(Qt)},null,8,["code"])]),usage:t(()=>[ml]),_:1})]),_:1})]),_:1})],64)}}}),fl=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark' | 'default'

export interface FooterDSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterDProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterDSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}
<\/script>
`,kl=`
<template>
  <FooterD text="SPARK (Scam Protection and Rugpull Killer) is the first of its kind scam protection API for NFT marketplaces"
    color="light"
    :social-links="socialLinks"
    bubbles
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Get Started</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Product</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign In</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Company</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">About</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Training</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">FAQs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Contact</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Help Center</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Guides</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">API Docs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Terms</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Privacy</RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>
</template>
`,hl=`
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`,vl={class:"py-12"},xl=o("span",null,"Discover",-1),gl=l(" Get Started "),bl=l(" Product "),$l=l(" Features "),Ll=l(" Sign Up "),yl=l(" Sign In "),Fl=o("span",null,"Company",-1),Cl=l(" Company "),Rl=l(" About "),Dl=l(" Training "),Sl=l(" FAQs "),Al=l(" Contact "),wl=o("span",null,"Support",-1),Pl=l(" Help Center "),Tl=l(" Guides "),zl=l(" API Docs "),Bl=l(" Terms "),Gl=l(" Privacy "),Il={class:"py-12"},ql=o("span",null,"Discover",-1),Nl=l(" Get Started "),Hl=l(" Product "),Yl=l(" Features "),Ql=l(" Sign Up "),Ul=l(" Sign In "),jl=o("span",null,"Company",-1),Vl=l(" Company "),Ml=l(" About "),El=l(" Training "),Jl=l(" FAQs "),Kl=l(" Contact "),Ol=o("span",null,"Support",-1),Wl=l(" Help Center "),Xl=l(" Guides "),Zl=l(" API Docs "),en=l(" Terms "),tn=l(" Privacy "),on={class:"py-12"},ln=o("span",null,"Discover",-1),nn=l(" Get Started "),sn=l(" Product "),an=l(" Features "),cn=l(" Sign Up "),rn=l(" Sign In "),dn=o("span",null,"Company",-1),un=l(" Company "),_n=l(" About "),mn=l(" Training "),pn=l(" FAQs "),fn=l(" Contact "),kn=o("span",null,"Support",-1),hn=l(" Help Center "),vn=l(" Guides "),xn=l(" API Docs "),gn=l(" Terms "),bn=l(" Privacy "),$n={class:"py-12"},Ln=o("span",null,"Discover",-1),yn=l(" Get Started "),Fn=l(" Product "),Cn=l(" Features "),Rn=l(" Sign Up "),Dn=l(" Sign In "),Sn=o("span",null,"Company",-1),An=l(" Company "),wn=l(" About "),Pn=l(" Training "),Tn=l(" FAQs "),zn=l(" Contact "),Bn=o("span",null,"Support",-1),Gn=l(" Help Center "),In=l(" Guides "),qn=l(" API Docs "),Nn=l(" Terms "),Hn=l(" Privacy "),Yn={class:"py-4"},Qn=o("p",{class:"paragraph rem-95"},[l(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),o("code",null,"color"),l(" prop. You can choose to display some animated bubbles by activating the "),o("code",null,"bubbles"),l(" prop. You can also give a curved shape to your footer using the "),o("code",null,"curved"),l(" prop. ")],-1),Un=g({setup(f){return(_,v)=>{const s=L,c=D,a=S,i=z,n=b("RouterLink"),d=K,p=y,h=F,A=C("background");return u(),k($,null,[e(a,{id:"block-d-demo"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",vl,[e(s,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"})])]),_:1})]),_:1}),e(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":r(m)},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[xl]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[gl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[bl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[$l]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ll]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[yl]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[Fl]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Cl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Rl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Dl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Sl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Al]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[wl]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Pl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Tl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[zl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Bl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Gl]),_:1})])])]),_:1},8,["social-links"]),e(a,{color:"grey"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Il,[e(s,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"})])]),_:1})]),_:1}),e(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light","social-links":r(m),bubbles:""},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[ql]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Nl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Hl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Yl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ql]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ul]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[jl]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Vl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Ml]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[El]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Jl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Kl]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[Ol]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Wl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Xl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Zl]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[en]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[tn]),_:1})])])]),_:1},8,["social-links"]),e(a,{"bordered-top":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",on,[e(s,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"})])]),_:1})]),_:1}),e(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,"social-links":r(m),curved:""},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[ln]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[nn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[sn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[an]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[cn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[rn]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[dn]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[un]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[_n]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[mn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[pn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[fn]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:t(()=>[kn]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[hn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[vn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[xn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[gn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[bn]),_:1})])])]),_:1},8,["social-links"]),e(a,{id:"block-d-demo"},{default:t(()=>[e(c,null,{default:t(()=>[o("div",$n,[e(s,{title:"Block D",subtitle:"Block D variation 4",link:"block-d-props"})])]),_:1})]),_:1}),R((u(),x(d,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":r(m)},{"column-1":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[Ln]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[yn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Fn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Cn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Rn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Dn]),_:1})])])]),"column-2":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[Sn]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[An]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[wn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Pn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Tn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[zn]),_:1})])])]),"column-3":t(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:t(()=>[Bn]),_:1}),o("ul",null,[o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Gn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[In]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[qn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Nn]),_:1})]),o("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:t(()=>[Hn]),_:1})])])]),_:1},8,["social-links"])),[[A,{src:"/https://infernaco.com/spark-files/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(a,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(c,null,{default:t(()=>[o("div",Yn,[e(s,{title:"Props",subtitle:"Footer D available props"})]),e(h,null,{code:t(()=>[e(p,{language:"html",code:r(kl)},null,8,["code"])]),props:t(()=>[e(p,{language:"javascript",code:r(fl)},null,8,["code"])]),sample:t(()=>[e(p,{language:"javascript",code:r(hl)},null,8,["code"])]),usage:t(()=>[Qn]),_:1})]),_:1})]),_:1})],64)}}}),oi=g({setup(f){const _=[{label:"Footer A",target:"block-a-demo"},{label:"Footer B",target:"block-b-demo"},{label:"Footer C",target:"block-c-demo"},{label:"Footer D",target:"block-d-demo"}];return(v,s)=>{const c=G,a=B;return u(),k("div",null,[e(c,{title:"Footer Blocks",subtitle:"More than 4 customizable footer blocks are awaiting for you to build your own layouts, pages, and content."}),e(a,{links:_,width:"440px"}),e(We),e(Nt),e(pl),e(Un),e(E)])}}});export{oi as default};
