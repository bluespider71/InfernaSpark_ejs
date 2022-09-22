import{_ as w}from"./DemoLinks.b68e1d3f.js";import{_ as g,a as S}from"./DemoTitle.8129d84d.js";import{D as z}from"./DocumentationFooter.26e38be2.js";import{v as _,o as u,C as b,w as o,h as e,g as t,A as p,m as s,q as L,n as f,M as T,O as P,s as y,t as C,N as D,P as A,bT as B,f as V}from"./index.65d9db8a.js";import{_ as v,a as k}from"./PrismCode.c318c48c.js";import{_ as I}from"./PageTitle.258fd718.js";import{_ as N}from"./CollectionTitle.3b888b9c.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";const R=`
<script setup lang="ts">
export type TitleSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type TitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type TitleTag = 'h1' | 'h2' | 'h3'

export interface TitleProps {
  size?: TitleSize
  weight?: TitleWeight
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
  tag: TitleTag
}

<\/script>
`,M=`
<template>
  <Title 
    tag="h2" 
    :size="2" 
    weight="thin" 
    leading>
    This is a title
  </Title>
</template>
`,j=`
<script setup lang="ts">
export type SubtitleSize = 1 | 2 | 3 | 4 | 5 | 6
export type SubtitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type SubtitleTag = 'h3' | 'h4' | 'p'

export interface SubtitleProps {
  size?: SubtitleSize
  weight?: SubtitleWeight
  tag: SubtitleTag
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
}
<\/script>
`,G=`
<template>
  <Subtitle 
    tag="h3" 
    :size="3" 
    weight="thin" 
    leading>
    This is a subtitle
  </Subtitle>
</template>
`,W=`
<script setup lang="ts">
export interface PageTitleProps {
  title: string
  subtitle: string
  text?: string
  inverted?: boolean
  aligned?: boolean
  leading?: boolean
}
<\/script>
`,Y=`
<template>
  <PageTitle
    title="Make it count again"
    subtitle="Get Started"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"
  >
    <template #content>
      <Buttons alignment="centered" class="mt-4">
        <Button color="primary" :long="3" bold raised>
          Get Started
        </Button>
        <Button :long="3" bold>Learn More</Button>
      </Buttons>
    </template>
  </PageTitle>
</template>
`,q=`
<script setup lang="ts">
export interface SectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
<\/script>
`,H=`
<template>
  <SectionTitle title="Make it count again" subtitle="Get Started" />
</template>
`,F=`
<script setup lang="ts">
export interface CollectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
<\/script>
`,Q=`
<template>
  <CollectionTitle
    title="Trending \u{1F525}"
    subtitle="Take a closer look at our trending items"
  >
    <template #toolbar>
      <Button :long="2">View All</Button>
    </template>
  </CollectionTitle>
</template>
`,E=`
<template>
  <!--Paragraph size-->
  <p class="paragraph rem-125">This is a paragraph at 1.25rem</p>

  <!--Paragraph color-->
  <p class="paragraph text-primary">This is a paragraph (primary)</p>
</template>
`,U=`
<script setup lang="ts">
export type ActionLinkSize = 'tiny' | 'small'

export interface ActionLinkProps {
  link: RouteLocationRaw
  label?: string
  size?: ActionLinkSize
  narrow?: boolean
  heavy?: boolean
}
<\/script>
`,O=`
<template>
  <!--Normal link-->
  <a href="https://cssninja.io" class="link">Iam a normal link</a>

  <!--RouterLink-->
  <RouterLink :to="{ name: 'index' }" class="link">Iam a RouterLink</RouterLink>

  <!--ActionLink-->
  <ActionLink label="Iam an action link" link="index" />

  <!--Animated-->
  <a href="https://cssninja.io" class="link has-underline">Animated link</a>
</template>
`,J={class:"mx-auto max-w-8"},K={class:"pt-4 pb-6"},X={class:"columns pt-4"},Z={class:"column is-6"},tt=s("This is a title"),et=s("This is a title"),ot=s("This is a title"),st=s("This is a title"),at=s("This is a title"),nt=s("This is a title"),it={class:"column is-6"},lt=s(" This is a title "),ct=s(" This is a title "),pt=s(" This is a title "),rt=s(" This is a title "),dt=s(" This is a title "),_t=s(" This is a title "),ut=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ht=t("p",{class:"paragraph rem-95"},[s(" Spark provides a title component that you can safely use in all parts of your application. It provides many props so you can control every aspect of it like the "),t("code",null,"size"),s(" , the "),t("code",null,"weight"),s(" , the spacing and even the rendered HTML "),t("code",null,"tag"),s(" . Titles have a bottom spacing of "),t("code",null,"1.5rem"),s(" by default. Use the "),t("code",null,"narrow"),s(" and the "),t("code",null,"leading"),s(" props to change this behaviour. ")],-1),mt=_({setup(h){return(d,m)=>{const l=g,a=L,n=v,i=k,c=f,r=T;return u(),b(r,{id:"title-base-demo","bordered-bottom":""},{default:o(()=>[e(c,null,{default:o(()=>[t("div",J,[t("div",K,[e(l,{title:"Title",subtitle:"Title component variations"}),t("div",X,[t("div",Z,[e(a,{tag:"h1",size:1,leading:""},{default:o(()=>[tt]),_:1}),e(a,{tag:"h2",size:2,leading:""},{default:o(()=>[et]),_:1}),e(a,{tag:"h2",size:3,leading:""},{default:o(()=>[ot]),_:1}),e(a,{tag:"h2",size:4,leading:""},{default:o(()=>[st]),_:1}),e(a,{tag:"h2",size:5,leading:""},{default:o(()=>[at]),_:1}),e(a,{tag:"h2",size:6,leading:""},{default:o(()=>[nt]),_:1})]),t("div",it,[e(a,{tag:"h1",size:1,weight:"thin",leading:""},{default:o(()=>[lt]),_:1}),e(a,{tag:"h2",size:2,weight:"thin",leading:""},{default:o(()=>[ct]),_:1}),e(a,{tag:"h2",size:3,weight:"thin",leading:""},{default:o(()=>[pt]),_:1}),e(a,{tag:"h3",size:4,weight:"thin",leading:""},{default:o(()=>[rt]),_:1}),e(a,{tag:"h3",size:5,weight:"thin",leading:""},{default:o(()=>[dt]),_:1}),e(a,{tag:"h3",size:6,weight:"thin",leading:""},{default:o(()=>[_t]),_:1})])])]),e(i,null,{code:o(()=>[e(n,{language:"html",code:p(M)},null,8,["code"])]),props:o(()=>[e(n,{language:"javascript",code:p(R)},null,8,["code"])]),sample:o(()=>[ut]),usage:o(()=>[ht]),_:1})])]),_:1})]),_:1})}}}),gt={class:"mx-auto max-w-8"},bt={class:"pt-4 pb-6"},ft={class:"columns pt-4"},Tt={class:"column is-6"},vt=s("This is a subtitle"),kt=s("This is a subtitle"),$t=s("This is a subtitle"),yt=s("This is a subtitle"),xt=s("This is a subtitle"),wt=s("This is a subtitle"),St={class:"column is-6"},zt=s(" This is a subtitle "),Lt=s(" This is a subtitle "),Pt=s(" This is a subtitle "),Ct=s(" This is a subtitle "),Dt=s(" This is a subtitle "),At=s(" This is a subtitle "),Bt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Vt=t("p",{class:"paragraph rem-95"},[s(" Spark provides a subtitle component that you can safely use in all parts of your application. It provides many props so you can control every aspect of it like the "),t("code",null,"size"),s(" , the "),t("code",null,"weight"),s(" , the spacing and even the rendered HTML "),t("code",null,"tag"),s(" . Subtitles have a bottom spacing of "),t("code",null,"1.5rem"),s(" by default. Use the "),t("code",null,"narrow"),s(" and the "),t("code",null,"leading"),s(" props to change this behaviour. ")],-1),It=_({setup(h){return(d,m)=>{const l=g,a=P,n=v,i=k,c=f,r=T;return u(),b(r,{id:"subtitle-base-demo","bordered-bottom":""},{default:o(()=>[e(c,null,{default:o(()=>[t("div",gt,[t("div",bt,[e(l,{title:"Subtitle",subtitle:"Subtitle component variations"}),t("div",ft,[t("div",Tt,[e(a,{tag:"h3",size:1,leading:""},{default:o(()=>[vt]),_:1}),e(a,{tag:"h3",size:2,leading:""},{default:o(()=>[kt]),_:1}),e(a,{tag:"h3",size:3,leading:""},{default:o(()=>[$t]),_:1}),e(a,{tag:"h4",size:4,leading:""},{default:o(()=>[yt]),_:1}),e(a,{tag:"h4",size:5,leading:""},{default:o(()=>[xt]),_:1}),e(a,{tag:"h4",size:6,leading:""},{default:o(()=>[wt]),_:1})]),t("div",St,[e(a,{tag:"h3",size:1,weight:"thin",leading:""},{default:o(()=>[zt]),_:1}),e(a,{tag:"h3",size:2,weight:"thin",leading:""},{default:o(()=>[Lt]),_:1}),e(a,{tag:"h3",size:3,weight:"thin",leading:""},{default:o(()=>[Pt]),_:1}),e(a,{tag:"p",size:4,weight:"thin",leading:""},{default:o(()=>[Ct]),_:1}),e(a,{tag:"p",size:5,weight:"thin",leading:""},{default:o(()=>[Dt]),_:1}),e(a,{tag:"p",size:6,weight:"thin",leading:""},{default:o(()=>[At]),_:1})])])]),e(i,null,{code:o(()=>[e(n,{language:"html",code:p(G)},null,8,["code"])]),props:o(()=>[e(n,{language:"javascript",code:p(j)},null,8,["code"])]),sample:o(()=>[Bt]),usage:o(()=>[Vt]),_:1})])]),_:1})]),_:1})}}}),Nt={class:"mx-auto max-w-8"},Rt={class:"pt-4 pb-6"},Mt={class:"pt-4"},jt=s(" Get Started "),Gt=s("Learn More"),Wt={class:"pt-4 pb-6"},Yt={class:"pt-4"},qt=s(" Get Started "),Ht=s("Learn More"),Ft=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Qt=t("p",{class:"paragraph rem-95"},[s(" Spark provides a page title component that you can safely use in all parts of your application. It provides a few props so you can control every aspect of it like content, handled by the "),t("code",null,"title"),s(" , the "),t("code",null,"subtitle"),s(" , and the "),t("code",null,"text"),s(" (optional) props. It also provides a "),t("code",null,"#content"),s(" slot that you can use to insert additional elements. You can also left align your page title by using the "),t("code",null,"aligned"),s(" prop. ")],-1),Et=_({setup(h){return(d,m)=>{const l=g,a=y,n=C,i=I,c=v,r=k,$=f,x=T;return u(),b(x,{id:"page-title-base-demo","bordered-bottom":""},{default:o(()=>[e($,null,{default:o(()=>[t("div",Nt,[t("div",Rt,[e(l,{title:"Page Title",subtitle:"Page title component variations"}),t("div",Mt,[e(i,{title:"Make it count again",subtitle:"Get Started",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"},{content:o(()=>[e(n,{alignment:"centered",class:"mt-4"},{default:o(()=>[e(a,{color:"primary",long:3,bold:"",raised:""},{default:o(()=>[jt]),_:1}),e(a,{long:3,bold:""},{default:o(()=>[Gt]),_:1})]),_:1})]),_:1})])]),t("div",Wt,[t("div",Yt,[e(i,{title:"Make it count again",subtitle:"Get Started",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis",aligned:""},{content:o(()=>[e(n,{class:"mt-4"},{default:o(()=>[e(a,{color:"primary",long:3,bold:"",raised:""},{default:o(()=>[qt]),_:1}),e(a,{long:3,bold:""},{default:o(()=>[Ht]),_:1})]),_:1})]),_:1})])]),e(r,null,{code:o(()=>[e(c,{language:"html",code:p(Y)},null,8,["code"])]),props:o(()=>[e(c,{language:"javascript",code:p(W)},null,8,["code"])]),sample:o(()=>[Ft]),usage:o(()=>[Qt]),_:1})])]),_:1})]),_:1})}}}),Ut={class:"mx-auto max-w-8"},Ot={class:"pt-4 pb-6"},Jt={class:"pt-4"},Kt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Xt=t("p",{class:"paragraph rem-95"},[s(" Spark provides a section title component that you can safely use in all parts of your application. It provides a few props so you can control its content, using the "),t("code",null,"title"),s(" , the "),t("code",null,"subtitle"),s(" props . ")],-1),Zt=_({setup(h){return(d,m)=>{const l=g,a=D,n=v,i=k,c=f,r=T;return u(),b(r,{id:"section-title-base-demo","bordered-bottom":""},{default:o(()=>[e(c,null,{default:o(()=>[t("div",Ut,[t("div",Ot,[e(l,{title:"Section Title",subtitle:"Section title component variations"}),t("div",Jt,[e(a,{title:"Make it count again",subtitle:"Get Started"})])]),e(i,null,{code:o(()=>[e(n,{language:"html",code:p(H)},null,8,["code"])]),props:o(()=>[e(n,{language:"javascript",code:p(q)},null,8,["code"])]),sample:o(()=>[Kt]),usage:o(()=>[Xt]),_:1})])]),_:1})]),_:1})}}}),te={class:"mx-auto max-w-8"},ee={class:"pt-4 pb-6"},oe={class:"pt-4"},se=s("View All"),ae=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ne=t("p",{class:"paragraph rem-95"},[s(" Spark provides a collection title component that you can safely use in your application's collection based pages. It provides a few props so you can control its content, using the "),t("code",null,"title"),s(" , the "),t("code",null,"subtitle"),s(" props. It also provides a "),t("code",null,"#toolbar"),s(" slot that you can use to insert additional elements at the right side. ")],-1),ie=_({setup(h){return(d,m)=>{const l=g,a=y,n=N,i=v,c=k,r=f,$=T;return u(),b($,{id:"collection-title-base-demo","bordered-bottom":""},{default:o(()=>[e(r,null,{default:o(()=>[t("div",te,[t("div",ee,[e(l,{title:"Collection Title",subtitle:"Collection title component variations"}),t("div",oe,[e(n,{title:"Trending \u{1F525}",subtitle:"Take a closer look at our trending items"},{toolbar:o(()=>[e(a,{long:2},{default:o(()=>[se]),_:1})]),_:1})])]),e(c,null,{code:o(()=>[e(i,{language:"html",code:p(Q)},null,8,["code"])]),props:o(()=>[e(i,{language:"javascript",code:p(F)},null,8,["code"])]),sample:o(()=>[ae]),usage:o(()=>[ne]),_:1})])]),_:1})]),_:1})}}}),le={class:"mx-auto max-w-8"},ce={class:"pt-4 pb-6"},pe=t("div",{class:"columns pt-4"},[t("div",{class:"column is-6"},[t("p",{class:"paragraph rem-125"},"This is a paragraph at 1.25rem"),t("p",{class:"paragraph"},"This is a paragraph at 1rem"),t("p",{class:"paragraph rem-90"},"This is a paragraph at .9rem"),t("p",{class:"paragraph rem-80"},"This is a paragraph at .8rem")]),t("div",{class:"column is-6"},[t("p",{class:"paragraph"},"This is a paragraph (default)"),t("p",{class:"paragraph text-primary"}," This is a paragraph (primary) "),t("p",{class:"paragraph text-success"}," This is a paragraph (success) "),t("p",{class:"paragraph text-info"},"This is a paragraph (info)"),t("p",{class:"paragraph text-warning"}," This is a paragraph (warning) "),t("p",{class:"paragraph text-danger"},"This is a paragraph (danger)")])],-1),re=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No props needed, not a vue component ")],-1),de=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),_e=t("p",{class:"paragraph rem-95"},[s(" Spark ships with basic styles for paragraph text. We chose not to make it a component for more flexibility and customization possibilities. To make a paragraph, simply add the "),t("code",null,"paragraph"),s(" class to a "),t("code",null,"p"),s(" HTMl element. You can then control font size using Spark helpers like "),t("code",null,"rem-*"),s(" . You can also control the text color by using Spark's color helpers like "),t("code",null,"text-*"),s(" . ")],-1),ue=_({setup(h){return(d,m)=>{const l=g,a=v,n=k,i=f,c=T;return u(),b(c,{id:"paragraph-base-demo","bordered-bottom":""},{default:o(()=>[e(i,null,{default:o(()=>[t("div",le,[t("div",ce,[e(l,{title:"Paragraph",subtitle:"Paragraph text variations"}),pe]),e(n,null,{code:o(()=>[e(a,{language:"html",code:p(E)},null,8,["code"])]),props:o(()=>[re]),sample:o(()=>[de]),usage:o(()=>[_e]),_:1})])]),_:1})]),_:1})}}}),he={class:"mx-auto max-w-8"},me={class:"pt-4 pb-6"},ge={class:"columns pt-4"},be={class:"column is-6"},fe=t("div",{class:"mb-4"},[t("a",{href:"https://cssninja.io",class:"link"},"Iam a normal link")],-1),Te={class:"mb-4"},ve=s(" Iam a RouterLink "),ke={class:"mb-4"},$e=s(" Disabled RouterLink "),ye={class:"column is-6"},xe={class:"mb-4"},we=t("div",{class:"mb-4"},[t("a",{href:"https://cssninja.io",class:"link has-underline"}," Animated link ")],-1),Se={class:"mb-4"},ze=s(" Animated RouterLink "),Le=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Pe=t("p",{class:"paragraph rem-95"},[s(" Links are an import part of any typography system. You can use regular links like "),t("code",null,"<a></a>"),s(" or "),t("code",null,"<RouterLink></RouterLink>"),s(" . You can make links with a sliding underline using the "),t("code",null,"has-underline"),s(" class. Alternatively, you ca use a special component called "),t("code",null,"<ActionLink></ActionLink>"),s(" to show a link with a sliding arrow on hover. ")],-1),Ce=_({setup(h){return(d,m)=>{const l=g,a=A("RouterLink"),n=B,i=v,c=k,r=f,$=T;return u(),b($,{id:"link-base-demo","bordered-bottom":""},{default:o(()=>[e(r,null,{default:o(()=>[t("div",he,[t("div",me,[e(l,{title:"Link",subtitle:"Link element variations"}),t("div",ge,[t("div",be,[fe,t("div",Te,[e(a,{to:{name:"index"},class:"link"},{default:o(()=>[ve]),_:1})]),t("div",ke,[e(a,{to:{name:"index"},class:"link is-disabled"},{default:o(()=>[$e]),_:1})])]),t("div",ye,[t("div",xe,[e(n,{label:"Iam an action link",link:"index"})]),we,t("div",Se,[e(a,{to:{name:"index"},class:"link has-underline is-reversed"},{default:o(()=>[ze]),_:1})])])])]),e(c,null,{code:o(()=>[e(i,{language:"html",code:p(O)},null,8,["code"])]),props:o(()=>[e(i,{language:"javascript",code:p(U)},null,8,["code"])]),sample:o(()=>[Le]),usage:o(()=>[Pe]),_:1})])]),_:1})]),_:1})}}}),We=_({setup(h){const d=[{label:"Title",target:"title-base-demo"},{label:"Subtitle",target:"subtitle-base-demo"},{label:"Page Title",target:"page-title-base-demo"},{label:"Section Title",target:"section-title-base-demo"},{label:"Collection Title",target:"collection-title-base-demo"},{label:"Paragraph",target:"paragraph-base-demo"},{label:"Link",target:"link-base-demo"}];return(m,l)=>{const a=S,n=w;return u(),V("div",null,[e(a,{title:"Typography",subtitle:"Typography is the thing that makes the difference between and well designed and an average website. Explore Spark's typography."}),e(n,{links:d,width:"750px"}),e(mt),e(It),e(Et),e(Zt),e(ie),e(ue),e(Ce),e(z)])}}});export{We as default};
