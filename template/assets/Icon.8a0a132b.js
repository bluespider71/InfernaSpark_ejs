import{e as _,v as l,y as s,o,f as n,A as c,D as a}from"./index.65d9db8a.js";const d=["data-icon"],u=l({props:{icon:null,size:{default:void 0},color:{default:void 0}},setup(i){const e=i,t=s(()=>e.icon&&e.icon.indexOf(":")!==-1),r=s(()=>[e.size&&`rem-${e.size}`,e.color&&`text-${e.color}`]);return(p,f)=>(o(),n("span",{key:e.icon},[c(t)?(o(),n("i",{key:0,"aria-hidden":"true",class:a(["iconify",c(r)]),"data-icon":e.icon},null,10,d)):(o(),n("i",{key:1,"aria-hidden":"true",class:a(e.icon)},null,2))]))}});var v=_(u,[["__scopeId","data-v-6195ce11"]]);export{v as _};
