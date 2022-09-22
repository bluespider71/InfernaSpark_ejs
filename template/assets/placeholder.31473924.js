import{_ as k,a as v}from"./DemoTitle.8129d84d.js";import{v as r,o as i,C as x,w as e,h as t,g as o,A as c,m as n,V as B,s as P,t as y,bX as w,n as D,M as C,f as j}from"./index.65d9db8a.js";import{_ as V,a as T}from"./PrismCode.c318c48c.js";import{D as $}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./FooterBubbles.b04e47b0.js";const N=`
<script setup lang="ts">
export interface PlaceholderProps {
  title: string
  subtitle?: string
  larger?: boolean
}
<\/script>
`,H=`
<template>
  <Placeholder
    title="Project not found"
    subtitle="some nice subtitle text."
  >
    <template #image>
      <DarkImage
        src="https://dummyimage.com/800x600"
        src-dark="https://dummyimage.com/800c600"
        alt="illustration"
      />
    </template>
    <template #action>
      <Buttons alignment="centered">
        <Button color="primary" :long="2" raised>Projects</Button>
        <Button :long="2">Dashboard</Button>
      </Buttons>
    </template>
  </Placeholder>
</template>
`,I={class:"mx-auto max-w-6"},M={class:"pt-4 pb-6"},S={class:"is-flex is-align-items-flex-end pt-4"},A=n("Projects"),E=n("Dashboard"),F=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),G=o("p",{class:"paragraph rem-95"},[n(" Spark's placeholder is a very versatile component that can be used in a wide variety of setups. The core is the placeholder text props. Two additionnal slots ( "),o("code",null,"#image"),n(" and "),o("code",null,"#action"),n(" ) let you insert images and action buttons / links. ")],-1),X=r({setup(p){return(_,m)=>{const s=k,u=B,a=P,d=y,g=w,l=V,h=T,f=D,b=C;return i(),x(b,{id:"placeholder-component-demo","bordered-bottom":""},{default:e(()=>[t(f,null,{default:e(()=>[o("div",I,[o("div",M,[t(s,{title:"Placeholder",subtitle:"Content placeholder layout"}),o("div",S,[t(g,{title:"Project not found",subtitle:"Hey there, looks like you've hit an empty state. Make sure to create a project before assigning tasks."},{image:e(()=>[t(u,{src:"/https://infernaco.com/spark-files/assets/illustrations/hero/working-laptop.svg","src-dark":"/https://infernaco.com/spark-files/assets/illustrations/hero/working-laptop-dark.svg",alt:"illustration"})]),action:e(()=>[t(d,{alignment:"centered"},{default:e(()=>[t(a,{color:"primary",long:2,raised:""},{default:e(()=>[A]),_:1}),t(a,{long:2},{default:e(()=>[E]),_:1})]),_:1})]),_:1})])]),t(h,null,{code:e(()=>[t(l,{language:"html",code:c(H)},null,8,["code"])]),props:e(()=>[t(l,{language:"javascript",code:c(N)},null,8,["code"])]),sample:e(()=>[F]),usage:e(()=>[G]),_:1})])]),_:1})]),_:1})}}}),R=r({setup(p){return(_,m)=>{const s=v;return i(),j("div",null,[t(s,{title:"Placeholder",subtitle:"Content placeholders have been growing as a core component in modern web applications. Get familiar with Spark's content placeholder."}),t(X),t($)])}}});export{R as default};
