import{v as o,a1 as d,a2 as n,e as r}from"./index.65d9db8a.js";const _="_wrap_11dt7_2",i="_content_11dt7_6",u="_text_11dt7_10",c="_animation_11dt7_1",p="_paused_11dt7_17";var l={wrap:_,content:i,text:u,animation:c,paused:p};const m=o({name:"MarqueeText",props:{duration:{type:Number,default:15},repeat:{type:Number,default:2},paused:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},setup(e,{slots:a}){const t=d();return()=>{var s;return n("div",{class:[t.wrap]},[n("div",{class:[e.paused?t.paused:void 0,t.content]},Array(e.repeat).fill(n("div",{class:t.text,style:{animationDuration:`${e.duration}s`,animationDirection:e.reverse?"reverse":void 0}},(s=a.default)==null?void 0:s.call(a))))])}}}),f={$style:l};var y=r(m,[["__cssModules",f]]);export{y as _};