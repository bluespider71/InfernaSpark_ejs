import{e as m,v as u,S as g,o,f as c,g as s,F as n,G as r,D as l,j as v,i as f,h as w,w as k,m as b,z as _,C as y,q as x,V as C}from"./index.65d9db8a.js";var $="/https://infernaco.com/spark-files/assets/illustrations/workflow/workflow.png";const B={class:"process-section py-6"},D={class:"columns"},V={class:"column is-5 is-offset-1"},z=["onClick","onKeydown"],H={class:"box"},K={class:"box-header"},N=["src"],S={class:"box-body"},T={class:"column is-5 is-relative"},W=["width","height"],F=u({props:{steps:{default:()=>[]},imageWidth:{default:"800"},imageHeight:{default:"800"}},setup(d){const t=d,i=g("process-tab-0");return(I,j)=>{const p=x,h=C;return o(),c("div",B,[s("div",D,[s("div",V,[(o(!0),c(n,null,r(t.steps,(a,e)=>(o(),c("div",{key:e,class:l(["process-item",[i.value===`process-tab-${e}`&&"is-active"]]),"data-content":"1",onClick:q=>i.value=`process-tab-${e}`,onKeydown:v(f(()=>i.value=`process-tab-${e}`,["prevent"]),["space"])},[s("div",H,[s("div",K,[s("img",{src:a.icon,alt:"process image"},null,8,N),w(p,{tag:"h3",size:6,weight:"bold"},{default:k(()=>[b(_(a.title),1)]),_:2},1024)]),s("div",S,[s("p",null,_(a.content),1)])])],42,z))),128))]),s("div",T,[s("img",{class:"process-image is-base is-relative is-block mx-auto",src:$,alt:"process image",width:t.imageWidth,height:t.imageHeight},null,8,W),(o(!0),c(n,null,r(t.steps,(a,e)=>(o(),y(h,{key:e,class:l(["process-image is-slide mx-auto",[i.value===`process-tab-${e}`&&"is-active"]]),src:a.image,"src-dark":a.imageDark,alt:"process image",width:t.imageWidth,height:t.imageHeight},null,8,["class","src","src-dark","width","height"]))),128))])])])}}});var G=m(F,[["__scopeId","data-v-96393512"]]);export{G as _};
