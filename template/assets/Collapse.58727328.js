import{_ as v}from"./Icon.8a0a132b.js";import{v as _,S as f,o as i,f as d,G as C,D as w,r,g as a,m as p,z as h,C as u,H as g,j as x,i as m,F as B}from"./index.65d9db8a.js";const y=["open"],K=["onKeydown","onClick"],N={class:"collapse-icon"},O={class:"collapse-content"},D=_({props:{items:{default:()=>[]},itemOpen:{default:void 0},withChevron:{type:Boolean}},setup(o){const l=f(o.itemOpen),t=n=>{if(l.value===n){l.value=void 0;return}l.value=n};return(n,V)=>{const c=v;return i(!0),d(B,null,C(o.items,(s,e)=>(i(),d("details",{key:e,class:w([[o.withChevron&&"has-chevron",!o.withChevron&&"has-plus"],"collapse"]),open:l.value===e||void 0},[r(n.$slots,"collapse-item",{item:s,index:e,toggle:t},()=>[a("summary",{class:"collapse-header",tabindex:"0",onKeydown:x(m(()=>t(e),["prevent"]),["space"]),onClick:m(()=>t(e),["prevent"])},[a("h3",null,[r(n.$slots,"collapse-item-summary",{item:s,index:e,toggle:t},()=>[p(h(s.title),1)])]),a("div",N,[o.withChevron?(i(),u(c,{key:0,icon:"feather:chevron-down"})):o.withChevron?g("",!0):(i(),u(c,{key:1,icon:"feather:plus"}))])],40,K),a("div",O,[a("p",null,[r(n.$slots,"collapse-item-content",{item:s,index:e,toggle:t},()=>[p(h(s.content),1)])])])])],10,y))),128)}}});export{D as _};