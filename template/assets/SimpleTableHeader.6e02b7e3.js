import{e as a,v as i,y as r,o as t,f as _,g as p,D as c,A as d,r as l}from"./index.65d9db8a.js";const f={class:"table-container"},v=i({props:{striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!1}},setup(s){const e=s,n=r(()=>[e.scrollable&&"table-container"]),o=r(()=>[e.bordered&&"is-bordered",e.striped&&"is-striped"]);return(u,C)=>(t(),_("div",{class:c(["py-2 w-full",d(n)])},[p("div",f,[p("table",{class:c(["table",d(o)])},[l(u.$slots,"default",{},void 0,!0)],2)])],2))}});var x=a(v,[["__scopeId","data-v-7cc894a0"]]);const m=i({props:{color:{default:"medium"},size:{default:""}},setup(s){const e=s,n=r(()=>[e.color&&`is-${e.color}`,e.size==="small"&&"rem-90"]);return(o,u)=>(t(),_("td",{class:c(d(n))},[l(o.$slots,"default",{},void 0,!0)],2))}});var B=a(m,[["__scopeId","data-v-5458cdfd"]]);const b={};function y(s,e){return t(),_("tr",null,[l(s.$slots,"default",{},void 0,!0)])}var S=a(b,[["render",y],["__scopeId","data-v-85233e3a"]]);const g={};function $(s,e){return t(),_("th",null,[l(s.$slots,"default",{},void 0,!0)])}var I=a(g,[["render",$],["__scopeId","data-v-1854c1d0"]]);export{I as _,S as a,B as b,x as c};
