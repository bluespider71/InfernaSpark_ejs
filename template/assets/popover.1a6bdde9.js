import{_ as D}from"./DemoLinks.b68e1d3f.js";import{_ as v,a as H}from"./DemoTitle.8129d84d.js";import{v as _,o as u,C as g,w as t,h as o,g as e,A as i,m as a,bY as b,n as f,M as $,s as S,bZ as y,e as A,f as k,z as C,H as z,a3 as B}from"./index.65d9db8a.js";import{_ as x,a as w}from"./PrismCode.c318c48c.js";import{D as L}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./FooterBubbles.b04e47b0.js";const P=`
<script setup lang="ts">
export type PopoverPlacement = 'top' | 'bottom' | 'right' | 'left'
export type PopoverColor =
  | 'default'
  | 'inverted'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'

export type PopoverSpacing = 'small' | 'medium' | 'large'

export interface PopoverProps {
  content?: string
  placement?: PopoverPlacement
  spacing?: PopoverSpacing
  arrow?: boolean
  hover?: boolean
  custom?: boolean
  color?: PopoverColor
  offsetDistance?: number
  openDelay?: number
  closeDelay?: number
}
<\/script>
`,j=`
<template>
  <Popover
    content="This is a top popover"
    placement="top"
    arrow
    hover
  >
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`,Y=`
<template>
  <Popover
    content="This is a hover popover"
    placement="top"
    arrow
    hover
  >
    <Button>Hover me</Button>
  </Popover>
</template>
`,V=`
<template>
  <Popover
    content="This is a primary popover"
    placement="top"
    hover
    arrow
    color="primary"
  >
    <p class="paragraph cursor-pointer">Primary</p>
  </Popover>

  <Popover
    content="This is a success popover"
    placement="top"
    hover
    arrow
    color="success"
  >
    <p class="paragraph cursor-pointer">Success</p>
  </Popover>
</template>
`,I=`
<template>
  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:skull-outline"
        color="danger"
        heading="Danger ahead"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>

  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:rocket-outline"
        color="info"
        heading="Startup nation"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        rounded
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`,N=`
<template>
  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg"
        heading="Helen Miller"
        subheading="Software Engineer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>

  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg"
        heading="Chris Wyatt"
        subheading="Frontend Developer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
        squared
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`,q={class:"mx-auto max-w-6"},O={class:"pt-4 pb-6"},E={class:"columns pt-4"},M={class:"column is-3 has-text-centered"},W=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),F={class:"column is-3 has-text-centered"},U=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),X={class:"column is-3 has-text-centered"},Z=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),G={class:"column is-3 has-text-centered"},J=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),K=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Q=e("p",{class:"paragraph rem-95"},[a(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),a(" prop. Accepted values are "),e("code",null,"medium"),a(" and "),e("code",null,"large"),a(" You can also make a button text bolder by adding the "),e("code",null,"bold"),a(" prop or make the button wider using the "),e("code",null,"long"),a(" prop. ")],-1),R=_({setup(m){return(r,h)=>{const c=v,s=b,n=x,p=w,l=f,d=$;return u(),g(d,{id:"popover-placement-demo","bordered-bottom":""},{default:t(()=>[o(l,null,{default:t(()=>[e("div",q,[e("div",O,[o(c,{title:"Popover placement",subtitle:"Available positions"}),e("div",E,[e("div",M,[o(s,{content:"This is a top popover",placement:"top",arrow:"",hover:""},{default:t(()=>[W]),_:1})]),e("div",F,[o(s,{content:"This is a bottom popover",placement:"bottom",hover:"",arrow:""},{default:t(()=>[U]),_:1})]),e("div",X,[o(s,{content:"This is a left popover",placement:"left",hover:"",arrow:""},{default:t(()=>[Z]),_:1})]),e("div",G,[o(s,{content:"This is a right popover",placement:"right",spacing:"medium",hover:"",arrow:""},{default:t(()=>[J]),_:1})])])]),o(p,null,{code:t(()=>[o(n,{language:"html",code:i(j)},null,8,["code"])]),props:t(()=>[o(n,{language:"javascript",code:i(P)},null,8,["code"])]),sample:t(()=>[K]),usage:t(()=>[Q]),_:1})])]),_:1})]),_:1})}}}),ee={class:"mx-auto max-w-6"},oe={class:"pt-4 pb-6"},te={class:"columns pt-4"},ae={class:"column is-3 has-text-centered"},se=a("Hover me"),ne={class:"column is-3 has-text-centered"},re=a("Click me"),ce=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),pe=e("p",{class:"paragraph rem-95"},[a(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),a(" prop. Accepted values are "),e("code",null,"medium"),a(" and "),e("code",null,"large"),a(" You can also make a button text bolder by adding the "),e("code",null,"bold"),a(" prop or make the button wider using the "),e("code",null,"long"),a(" prop. ")],-1),ie=_({setup(m){return(r,h)=>{const c=v,s=S,n=b,p=x,l=w,d=f,T=$;return u(),g(T,{id:"popover-trigger-demo","bordered-bottom":""},{default:t(()=>[o(d,null,{default:t(()=>[e("div",ee,[e("div",oe,[o(c,{title:"Popover trigger",subtitle:"Available triggers"}),e("div",te,[e("div",ae,[o(n,{content:"This is a hover popover",placement:"top",arrow:"",hover:""},{default:t(()=>[o(s,null,{default:t(()=>[se]),_:1})]),_:1})]),e("div",ne,[o(n,{content:"This is a click popover",placement:"top",arrow:""},{default:t(()=>[o(s,null,{default:t(()=>[re]),_:1})]),_:1})])])]),o(l,null,{code:t(()=>[o(p,{language:"html",code:i(Y)},null,8,["code"])]),props:t(()=>[o(p,{language:"javascript",code:i(P)},null,8,["code"])]),sample:t(()=>[ce]),usage:t(()=>[pe]),_:1})])]),_:1})]),_:1})}}}),le={class:"mx-auto max-w-6"},de={class:"pt-4 pb-6"},ue={class:"columns is-multiline pt-4"},me={class:"column is-3 has-text-centered"},_e=e("p",{class:"paragraph cursor-pointer"},"Default",-1),he={class:"column is-3 has-text-centered"},ve=e("p",{class:"paragraph cursor-pointer"},"Primary",-1),ge={class:"column is-3 has-text-centered"},be=e("p",{class:"paragraph cursor-pointer"},"Inverted",-1),fe={class:"column is-3 has-text-centered"},$e=e("p",{class:"paragraph cursor-pointer"},"Info",-1),xe={class:"column is-3 has-text-centered"},we=e("p",{class:"paragraph cursor-pointer"},"Success",-1),Pe={class:"column is-3 has-text-centered"},ye=e("p",{class:"paragraph cursor-pointer"},"Warning",-1),Te={class:"column is-3 has-text-centered"},Ce=e("p",{class:"paragraph cursor-pointer"},"Danger",-1),ke={class:"column is-3 has-text-centered"},De=e("p",{class:"paragraph cursor-pointer"},"Purple",-1),He=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Se=e("p",{class:"paragraph rem-95"},[a(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),a(" prop. Accepted values are "),e("code",null,"medium"),a(" and "),e("code",null,"large"),a(" You can also make a button text bolder by adding the "),e("code",null,"bold"),a(" prop or make the button wider using the "),e("code",null,"long"),a(" prop. ")],-1),Ae=_({setup(m){return(r,h)=>{const c=v,s=b,n=x,p=w,l=f,d=$;return u(),g(d,{id:"popover-colors-demo","bordered-bottom":""},{default:t(()=>[o(l,null,{default:t(()=>[e("div",le,[e("div",de,[o(c,{title:"Popover colors",subtitle:"Available colors"}),e("div",ue,[e("div",me,[o(s,{content:"This is a default popover",placement:"top",arrow:"",hover:""},{default:t(()=>[_e]),_:1})]),e("div",he,[o(s,{content:"This is a primary popover",placement:"top",hover:"",arrow:"",color:"primary"},{default:t(()=>[ve]),_:1})]),e("div",ge,[o(s,{content:"This is a inverted popover",placement:"top",hover:"",arrow:"",color:"inverted"},{default:t(()=>[be]),_:1})]),e("div",fe,[o(s,{content:"This is a info popover",placement:"top",spacing:"medium",hover:"",arrow:"",color:"info"},{default:t(()=>[$e]),_:1})]),e("div",xe,[o(s,{content:"This is a success popover",placement:"top",hover:"",arrow:"",color:"success"},{default:t(()=>[we]),_:1})]),e("div",Pe,[o(s,{content:"This is a warning popover",placement:"top",hover:"",arrow:"",color:"warning"},{default:t(()=>[ye]),_:1})]),e("div",Te,[o(s,{content:"This is a danger popover",placement:"top",hover:"",arrow:"",color:"danger"},{default:t(()=>[Ce]),_:1})]),e("div",ke,[o(s,{content:"This is a purple popover",placement:"top",hover:"",arrow:"",color:"purple"},{default:t(()=>[De]),_:1})])])]),o(p,null,{code:t(()=>[o(n,{language:"html",code:i(V)},null,8,["code"])]),props:t(()=>[o(n,{language:"javascript",code:i(P)},null,8,["code"])]),sample:t(()=>[He]),usage:t(()=>[Se]),_:1})])]),_:1})]),_:1})}}}),ze={class:"mx-auto max-w-6"},Be={class:"pt-4 pb-6"},Le={class:"columns pt-4"},je={class:"column is-3 has-text-centered"},Ye=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Ve={class:"column is-3 has-text-centered"},Ie=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Ne={class:"column is-3 has-text-centered"},qe=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Oe={class:"column is-3 has-text-centered"},Ee=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Me=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),We=e("p",{class:"paragraph rem-95"},[a(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),a(" prop. Accepted values are "),e("code",null,"medium"),a(" and "),e("code",null,"large"),a(" You can also make a button text bolder by adding the "),e("code",null,"bold"),a(" prop or make the button wider using the "),e("code",null,"long"),a(" prop. ")],-1),Fe=_({setup(m){return(r,h)=>{const c=v,s=b,n=x,p=w,l=f,d=$;return u(),g(d,{id:"custom-icons-demo","bordered-bottom":""},{default:t(()=>[o(l,null,{default:t(()=>[e("div",ze,[e("div",Be,[o(c,{title:"Custom - Icons",subtitle:"Custom icon layout"}),e("div",Le,[e("div",je,[o(s,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(y,{icon:"ion:skull-outline",color:"danger",heading:"Danger ahead",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]),default:t(()=>[Ye]),_:1})]),e("div",Ve,[o(s,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(y,{icon:"ion:leaf-outline",color:"success",heading:"Environment",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]),default:t(()=>[Ie]),_:1})]),e("div",Ne,[o(s,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(y,{icon:"ion:pizza-outline",color:"orange",heading:"Pizza slices",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",rounded:""})]),default:t(()=>[qe]),_:1})]),e("div",Oe,[o(s,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(y,{icon:"ion:rocket-outline",color:"info",heading:"Startup nation",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",rounded:""})]),default:t(()=>[Ee]),_:1})])])]),o(p,null,{code:t(()=>[o(n,{language:"html",code:i(I)},null,8,["code"])]),props:t(()=>[o(n,{language:"javascript",code:i(P)},null,8,["code"])]),sample:t(()=>[Me]),usage:t(()=>[We]),_:1})])]),_:1})]),_:1})}}});const Ue={class:"popover-wrap"},Xe={class:"popover-head"},Ze={class:"meta"},Ge={class:"meta-title"},Je={key:0,class:"meta-subtitle"},Ke={class:"popover-body"},Qe={class:"paragraph rem-80"},Re=_({props:{avatar:null,heading:null,subheading:{default:void 0},content:null,squared:{type:Boolean,default:!1}},setup(m){const r=m;return(h,c)=>{const s=B;return u(),k("div",Ue,[e("div",Xe,[o(s,{picture:r.avatar,squared:r.squared,size:"medium"},null,8,["picture","squared"]),e("div",Ze,[e("span",Ge,C(r.heading),1),r.subheading?(u(),k("span",Je,C(r.subheading),1)):z("",!0)])]),e("div",Ke,[e("p",Qe,C(r.content),1)])])}}});var eo=A(Re,[["__scopeId","data-v-6d3690d0"]]);const oo={class:"mx-auto max-w-6"},to={class:"pt-4 pb-6"},ao={class:"columns pt-4"},so={class:"column is-3 has-text-centered"},no=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),ro={class:"column is-3 has-text-centered"},co=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),po={class:"column is-3 has-text-centered"},io=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),lo={class:"column is-3 has-text-centered"},uo=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),mo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),_o=e("p",{class:"paragraph rem-95"},[a(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),a(" prop. Accepted values are "),e("code",null,"medium"),a(" and "),e("code",null,"large"),a(" You can also make a button text bolder by adding the "),e("code",null,"bold"),a(" prop or make the button wider using the "),e("code",null,"long"),a(" prop. ")],-1),ho=_({setup(m){return(r,h)=>{const c=v,s=eo,n=b,p=x,l=w,d=f,T=$;return u(),g(T,{id:"custom-avatars-demo","bordered-bottom":""},{default:t(()=>[o(d,null,{default:t(()=>[e("div",oo,[e("div",to,[o(c,{title:"Custom - Avatars",subtitle:"Custom avatar layout"}),e("div",ao,[e("div",so,[o(n,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(s,{avatar:"/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg",heading:"Helen Miller",subheading:"Software Engineer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."})]),default:t(()=>[no]),_:1})]),e("div",ro,[o(n,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(s,{avatar:"/https://infernaco.com/spark-files/assets/demo/img/avatars/45.jpg",heading:"Dayron Williams",subheading:"UX Designer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."})]),default:t(()=>[co]),_:1})]),e("div",po,[o(n,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(s,{avatar:"/https://infernaco.com/spark-files/assets/demo/img/avatars/25.jpg",heading:"Chris Wyatt",subheading:"Frontend Developer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus.",squared:""})]),default:t(()=>[io]),_:1})]),e("div",lo,[o(n,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(s,{avatar:"/https://infernaco.com/spark-files/assets/demo/img/avatars/29.jpg",heading:"Christina Chu",subheading:"Product Manager",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus.",squared:""})]),default:t(()=>[uo]),_:1})])])]),o(l,null,{code:t(()=>[o(p,{language:"html",code:i(N)},null,8,["code"])]),props:t(()=>[o(p,{language:"javascript",code:i(P)},null,8,["code"])]),sample:t(()=>[mo]),usage:t(()=>[_o]),_:1})])]),_:1})]),_:1})}}}),yo=_({setup(m){const r=[{label:"Placement",target:"popover-placement-demo"},{label:"Trigger",target:"popover-trigger-demo"},{label:"Colors",target:"popover-colors-demo"},{label:"Icons",target:"custom-icons-demo"},{label:"Avatars",target:"custom-avatars-demo"}];return(h,c)=>{const s=H,n=D;return u(),k("div",null,[o(s,{title:"Popover Component",subtitle:"Popovers are a central part in all web and mobile application with a wide variety of usage. Explore Spark popovers."}),o(n,{links:r,width:"500px"}),o(R),o(ie),o(Ae),o(Fe),o(ho),o(L)])}}});export{yo as default};
