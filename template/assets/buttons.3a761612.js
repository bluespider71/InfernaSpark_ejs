import{_ as T}from"./DemoLinks.b68e1d3f.js";import{_ as b,a as S}from"./DemoTitle.8129d84d.js";import{v as p,o as m,C as f,w as o,h as t,g as e,A as i,m as n,s as v,t as B,n as $,M as x,f as k}from"./index.65d9db8a.js";import{_ as y,a as w}from"./PrismCode.c318c48c.js";import{D as C}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./FooterBubbles.b04e47b0.js";const D=`
<script setup lang="ts">
export type ButtonSize = 'medium' | 'large' | 'form'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  long?: 1 | 2 | 3
  rounded?: boolean
  outlined?: boolean
  raised?: boolean
  elevated?: boolean
  bold?: boolean
  fullwidth?: boolean
  to?: RouteLocationRaw
  loading?: boolean
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
}
<\/script>
`,z=`
<template>
  <Button>Normal</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</template>
`,P=`
<template>
  <Button rounded>Normal</Button>
  <Button size="medium" rounded>Medium</Button>
  <Button size="large" rounded>Large</Button>
</template>
`,I=`
<template>
  <Button>Iam a Button</Button>
  <Button href="https://google.com">Iam a Link</Button>
  <Button to="index">Iam a RouterLink</Button>
</template>
`,L=`
<template>
  <Button color="primary" :long="1">Primary</Button>
  <Button color="success" :long="1">Success</Button>
</template>
`,N=`
<template>
  <Button color="primary" :long="1" outlined>Primary</Button>
  <Button color="success" :long="1" outlined>Success</Button>
  <Button color="info" :long="1" outlined>Info</Button>
</template>
`,V=`
<template>
  <Button icon-left="feather:github">GitHub</Button>
  <Button icon-right="feather:arrow-right">Go Right</Button>
</template>
`,j=`
<template>
  <Button color="primary" elevated>Primary</Button>
  <Button color="success" raised>Success</Button>
  <Button color="info" elevated>Info</Button>
</template>
`,R=`
<template>
  <Button loading>Default</Button>
  <Button color="primary" loading>Primary</Button>
  <Button color="success"loading>Success</Button>
</template>
`,A=`
<template>
  <Button disabled>Default</Button>
  <Button color="primary" disabled>Primary</Button>
  <Button color="success"disabled>Success</Button>
</template>
`,H={class:"mx-auto max-w-6"},G={class:"pt-4 pb-6"},M={class:"is-flex is-align-items-flex-end pt-4"},Y=n("Normal"),E=n("Medium"),O=n("Large"),W=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),F=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),n(" prop. Accepted values are "),e("code",null,"medium"),n(" and "),e("code",null,"large"),n(" You can also make a button text bolder by adding the "),e("code",null,"bold"),n(" prop or make the button wider using the "),e("code",null,"long"),n(" prop. ")],-1),q=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-size-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",H,[e("div",G,[t(c,{title:"Button Sizes",subtitle:"Available button sizes"}),e("div",M,[t(l,null,{default:o(()=>[t(a,null,{default:o(()=>[Y]),_:1}),t(a,{size:"medium"},{default:o(()=>[E]),_:1}),t(a,{size:"large"},{default:o(()=>[O]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(z)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[W]),usage:o(()=>[F]),_:1})])]),_:1})]),_:1})}}}),J={class:"mx-auto max-w-6"},K={class:"pt-4 pb-6"},Q={class:"is-flex is-align-items-flex-end pt-4"},U=n("Iam a Button"),X=n("Iam a Link"),Z=n("Iam a RouterLink"),tt=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ot=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the render element type by using the "),e("code",null,"to"),n(" prop. If you enter an external link as a value, it generates an HTML "),e("code",null,"<a></a>"),n(" tag. If you enter a route, it generates a "),e("code",null,"<RouterLink />"),n(" element. Omitting it generates a standard HTML "),e("code",null,"<button></button>"),n(" element. ")],-1),et=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-types-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",J,[e("div",K,[t(c,{title:"Button Type",subtitle:"Available button types"}),e("div",Q,[t(l,null,{default:o(()=>[t(a,null,{default:o(()=>[U]),_:1}),t(a,{href:"https://google.com"},{default:o(()=>[X]),_:1}),t(a,{to:"index"},{default:o(()=>[Z]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(I)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[tt]),usage:o(()=>[ot]),_:1})])]),_:1})]),_:1})}}}),nt={class:"mx-auto max-w-6"},at={class:"pt-4 pb-6"},st={class:"is-flex is-align-items-flex-end pt-4"},lt=n("Normal"),ct=n("Medium"),it=n("Large"),ut=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),dt=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control the button shape using the "),e("code",null,"rounded"),n(" prop. This prop is a "),e("code",null,"boolean"),n(" and does not need a value. ")],-1),_t=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-shape-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",nt,[e("div",at,[t(c,{title:"Button Shape",subtitle:"Rounded button variation"}),e("div",st,[t(l,null,{default:o(()=>[t(a,{rounded:""},{default:o(()=>[lt]),_:1}),t(a,{size:"medium",rounded:""},{default:o(()=>[ct]),_:1}),t(a,{size:"large",rounded:""},{default:o(()=>[it]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(P)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[ut]),usage:o(()=>[dt]),_:1})])]),_:1})]),_:1})}}}),rt={class:"mx-auto max-w-6"},pt={class:"pt-4 pb-6"},mt={class:"is-flex is-align-items-flex-end pt-4"},gt=n("Default"),ht=n("Primary"),bt=n("Success"),ft=n("Info"),vt=n("Warning"),Bt=n("Danger"),$t=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),xt=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can control button colors using the "),e("code",null,"color"),n(" prop. Allowed values are "),e("code",null,"primary"),n(" , "),e("code",null,"success"),n(" , "),e("code",null,"info"),n(" , "),e("code",null,"warning"),n(" and "),e("code",null,"danger"),n(" . ")],-1),yt=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-colors-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",rt,[e("div",pt,[t(c,{title:"Button Colors",subtitle:"Available button colors"}),e("div",mt,[t(l,null,{default:o(()=>[t(a,{long:1},{default:o(()=>[gt]),_:1}),t(a,{color:"primary",long:1},{default:o(()=>[ht]),_:1}),t(a,{color:"success",long:1},{default:o(()=>[bt]),_:1}),t(a,{color:"info",long:1},{default:o(()=>[ft]),_:1}),t(a,{color:"warning",long:1},{default:o(()=>[vt]),_:1}),t(a,{color:"danger",long:1},{default:o(()=>[Bt]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(L)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[$t]),usage:o(()=>[xt]),_:1})])]),_:1})]),_:1})}}}),wt={class:"mx-auto max-w-6"},Dt={class:"pt-4 pb-6"},Tt={class:"is-flex is-align-items-flex-end pt-4"},St=n("GitHub"),kt=n(" Go Right "),Ct=n("GitHub"),zt=n(" GitHub "),Pt=n(" GitHub "),It=n(" I Love it "),Lt=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Nt=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. Buttons can have icons either on the left or on the right side. To insert a left icon, use the "),e("code",null,"icon-left"),n(" prop. To insert a right icon, use the "),e("code",null,"icon-right"),n(" prop. All ionify ico sets are available. ")],-1),Vt=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-icons-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",wt,[e("div",Dt,[t(c,{title:"Button Icons",subtitle:"Icon buttons variation"}),e("div",Tt,[t(l,null,{default:o(()=>[t(a,{long:1,"icon-left":"feather:github"},{default:o(()=>[St]),_:1}),t(a,{color:"primary",long:1,"icon-right":"feather:arrow-right"},{default:o(()=>[kt]),_:1}),t(a,{long:1,"icon-left":"feather:github"},{default:o(()=>[Ct]),_:1}),t(a,{size:"medium",long:1,"icon-left":"feather:github"},{default:o(()=>[zt]),_:1}),t(a,{size:"large",long:1,"icon-left":"feather:github"},{default:o(()=>[Pt]),_:1}),t(a,{color:"danger",outlined:"",long:1,"icon-left":"feather:heart"},{default:o(()=>[It]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(V)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[Lt]),usage:o(()=>[Nt]),_:1})])]),_:1})]),_:1})}}}),jt={class:"mx-auto max-w-6"},Rt={class:"pt-4 pb-6"},At={class:"is-flex is-align-items-flex-end pt-4"},Ht=n("Primary"),Gt=n("Success"),Mt=n("Info"),Yt=n("Warning"),Et=n("Danger"),Ot=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Wt=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. You can make outlined buttons using the "),e("code",null,"outlined"),n(" prop. The outlined prop is a boolean an doesn't need a value. Only works on colored buttons. ")],-1),Ft=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-outlined-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",jt,[e("div",Rt,[t(c,{title:"Outlined",subtitle:"Available outlined buttons"}),e("div",At,[t(l,null,{default:o(()=>[t(a,{color:"primary",long:1,outlined:""},{default:o(()=>[Ht]),_:1}),t(a,{color:"success",long:1,outlined:""},{default:o(()=>[Gt]),_:1}),t(a,{color:"info",long:1,outlined:""},{default:o(()=>[Mt]),_:1}),t(a,{color:"warning",long:1,outlined:""},{default:o(()=>[Yt]),_:1}),t(a,{color:"danger",long:1,outlined:""},{default:o(()=>[Et]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(N)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[Ot]),usage:o(()=>[Wt]),_:1})])]),_:1})]),_:1})}}}),qt={class:"mx-auto max-w-6"},Jt={class:"pt-4 pb-6"},Kt={class:"is-flex is-align-items-flex-end pt-4"},Qt=n("Primary"),Ut=n("Success"),Xt=n("Info"),Zt=n("Warning"),to=n("Danger"),oo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),eo=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. Buttons can be elevated, showing a colored box shadow wether it is by default or on hover. To elevate a button by default, use the "),e("code",null,"elevated"),n(" prop. To elevate a button on hover, use the "),e("code",null,"raised"),n(" prop. ")],-1),no=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-elevation-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",qt,[e("div",Jt,[t(c,{title:"Elevation",subtitle:"Button elevation variations"}),e("div",Kt,[t(l,null,{default:o(()=>[t(a,{color:"primary",long:1,elevated:""},{default:o(()=>[Qt]),_:1}),t(a,{color:"success",long:1,elevated:""},{default:o(()=>[Ut]),_:1}),t(a,{color:"info",long:1,elevated:""},{default:o(()=>[Xt]),_:1}),t(a,{color:"warning",long:1,elevated:""},{default:o(()=>[Zt]),_:1}),t(a,{color:"danger",long:1,elevated:""},{default:o(()=>[to]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(j)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[oo]),usage:o(()=>[eo]),_:1})])]),_:1})]),_:1})}}}),ao={class:"mx-auto max-w-6"},so={class:"pt-4 pb-6"},lo={class:"is-flex is-align-items-flex-end pt-4"},co=n("Default"),io=n("Primary"),uo=n("Success"),_o=n("Info"),ro=n("Warning"),po=n("Danger"),mo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),go=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. Buttons can have a loading state. To show a loading button, use the "),e("code",null,"loading"),n(" prop. ")],-1),ho=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-loading-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",ao,[e("div",so,[t(c,{title:"Button Loading",subtitle:"Loading button state"}),e("div",lo,[t(l,null,{default:o(()=>[t(a,{long:1,loading:""},{default:o(()=>[co]),_:1}),t(a,{color:"primary",long:1,loading:""},{default:o(()=>[io]),_:1}),t(a,{color:"success",long:1,loading:""},{default:o(()=>[uo]),_:1}),t(a,{color:"info",long:1,loading:""},{default:o(()=>[_o]),_:1}),t(a,{color:"warning",long:1,loading:""},{default:o(()=>[ro]),_:1}),t(a,{color:"danger",long:1,loading:""},{default:o(()=>[po]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(R)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[mo]),usage:o(()=>[go]),_:1})])]),_:1})]),_:1})}}}),bo={class:"mx-auto max-w-6"},fo={class:"pt-4 pb-6"},vo={class:"is-flex is-align-items-flex-end pt-4"},Bo=n("Default"),$o=n("Primary"),xo=n("Success"),yo=n("Info"),wo=n("Warning"),Do=n("Danger"),To=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),So=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Spark buttons come in different flavors. Buttons can have a disabled state. To show a disabled button, use the "),e("code",null,"disabled"),n(" prop. ")],-1),ko=p({setup(g){return(r,h)=>{const c=b,a=v,l=B,s=y,u=w,d=$,_=x;return m(),f(_,{id:"button-disabled-demo","bordered-bottom":""},{default:o(()=>[t(d,null,{default:o(()=>[e("div",bo,[e("div",fo,[t(c,{title:"Button disabled",subtitle:"Disabled button state"}),e("div",vo,[t(l,null,{default:o(()=>[t(a,{long:1,disabled:""},{default:o(()=>[Bo]),_:1}),t(a,{color:"primary",long:1,disabled:""},{default:o(()=>[$o]),_:1}),t(a,{color:"success",long:1,disabled:""},{default:o(()=>[xo]),_:1}),t(a,{color:"info",long:1,disabled:""},{default:o(()=>[yo]),_:1}),t(a,{color:"warning",long:1,disabled:""},{default:o(()=>[wo]),_:1}),t(a,{color:"danger",long:1,disabled:""},{default:o(()=>[Do]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(s,{language:"html",code:i(A)},null,8,["code"])]),props:o(()=>[t(s,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[To]),usage:o(()=>[So]),_:1})])]),_:1})]),_:1})}}}),Ro=p({setup(g){const r=[{label:"Sizes",target:"button-size-demo"},{label:"Shape",target:"button-shape-demo"},{label:"Types",target:"button-types-demo"},{label:"Color",target:"button-colors-demo"},{label:"Outlined",target:"button-outlined-demo"},{label:"Icons",target:"button-icons-demo"},{label:"Elevation",target:"button-elevation-demo"},{label:"Loading",target:"button-loading-demo"},{label:"Disabled",target:"button-disabled-demo"}];return(h,c)=>{const a=S,l=T;return m(),k("div",null,[t(a,{title:"Button Component",subtitle:"Buttons are a central part in all web and mobile application with a wide variety of usage. Explore Spark buttons."}),t(l,{links:r,width:"800px"}),t(q),t(_t),t(et),t(yt),t(Ft),t(Vt),t(no),t(ho),t(ko),t(C)])}}});export{Ro as default};
