import{e as b,v as h,y as a,o as r,f as u,h as c,w as _,g as n,r as l,m as p,z as o,D as i,A as d,H as y,O as C,q as w}from"./index.65d9db8a.js";const B={class:"paragraph rem-125"},k=h({props:{title:{default:void 0},subtitle:{default:void 0},text:{default:void 0},inverted:{type:Boolean,default:!1},aligned:{type:Boolean,default:!1},leading:{type:Boolean,default:!1}},setup(t){const e=t,g=a(()=>[e.aligned&&"is-aligned",e.leading&&"is-leading"]),v=a(()=>[e.inverted?"text-white":"text-gradient"]),f=a(()=>[e.aligned?"":"mx-auto"]);return(s,z)=>{const m=C,x=w;return r(),u("div",{class:i(["page-title",d(g)])},[c(m,{tag:"h3",size:5,weight:"bold",inverted:e.inverted,class:"m-0 pb-5"},{default:_(()=>[n("span",{class:i(d(v))},[l(s.$slots,"subtitle",{},()=>[p(o(t.subtitle),1)],!0)],2)]),_:3},8,["inverted"]),c(x,{tag:"h1",size:2,weight:"bold",inverted:e.inverted,leading:""},{default:_(()=>[n("span",null,[l(s.$slots,"default",{},()=>[p(o(t.title),1)],!0)])]),_:3},8,["inverted"]),e.text?(r(),u("div",{key:0,class:i(["max-w-5",d(f)])},[n("p",B,o(e.text),1)],2)):y("",!0),l(s.$slots,"content",{},void 0,!0)],2)}}});var V=b(k,[["__scopeId","data-v-16f868b6"]]);export{V as _};