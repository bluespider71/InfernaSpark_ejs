import{e as p,v as h,y as g,o,f as a,g as e,F as v,G as f,h as n,w as i,z as c,D as k,A as x,bV as y,q as w,V as B}from"./index.65d9db8a.js";const I={class:"py-6"},b={class:"stacked-section"},z={class:"columns is-vcentered b-columns-half-tablet-p"},C={class:"column is-5 is-offset-1"},V={class:"media-left"},D=["data-icon"],F={class:"media-content"},S={class:"paragraph rem-85"},H={class:"column is-6"},N={class:"color-box"},W={class:"character"},$=h({props:{features:null,image:null,darkImage:null,imageWidth:{default:"500"},imageHeight:{default:"500"},rounded:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(d){const s=d,l=g(()=>[s.inverted&&"opacity-10"]);return(q,A)=>{const _=y,r=w,u=B;return o(),a("div",I,[e("div",b,[e("div",z,[e("div",C,[(o(!0),a(v,null,f(s.features.slice(0,3),(t,m)=>(o(),a("div",{key:m,class:"media max-w-4"},[e("div",V,[n(_,{color:t.color,size:"medium",rounded:s.rounded,inverted:s.inverted},{default:i(()=>[e("i",{class:"iconify","data-icon":t.icon},null,8,D)]),_:2},1032,["color","rounded","inverted"])]),e("div",F,[n(r,{tag:"h3",size:6,weight:"semi",leading:"",inverted:s.inverted},{default:i(()=>[e("span",null,c(t.title),1)]),_:2},1032,["inverted"]),e("p",S,c(t.text),1)])]))),128))]),e("div",H,[e("div",N,[e("div",{class:k(["color-box-inner",x(l)])},null,2),e("div",W,[n(u,{src:s.image,"src-dark":s.darkImage,alt:"Featured Image",width:s.imageWidth,height:s.imageHeight},null,8,["src","src-dark","width","height"])])])])])])])}}});var G=p($,[["__scopeId","data-v-230664ad"]]);export{G as _};