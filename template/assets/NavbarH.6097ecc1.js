import{e as C,v as S,a5 as B,y as l,S as V,P as I,o as N,f as $,g as e,h as s,w as o,i as d,j as H,D as p,A as u,p as L,k as T,u as v,m as r,Q as j,s as K}from"./index.65d9db8a.js";import{_ as M}from"./ThemeToggle.520d4118.js";import{_ as R}from"./VInput.e415d3f2.js";import{_ as z}from"./Hamburger.271b6c16.js";const _=a=>(L("data-v-180589c8"),a=a(),T(),a),A={class:"container"},D={class:"navbar-brand"},E=_(()=>e("img",{class:"navbar-logo",src:v,alt:"logo"},null,-1)),O=_(()=>e("span",{class:"is-sr-only"},"Spark",-1)),P={class:"navbar-start"},Q={class:"left-brand"},U=_(()=>e("img",{src:v,alt:"logo"},null,-1)),W=_(()=>e("span",{class:"is-sr-only"},"Spark",-1)),q={class:"navbar-center"},F={class:"navbar-item is-search"},G={class:"navbar-end"},J=r(" Help "),X=r(" Login "),Y={class:"navbar-item is-flex is-align-items-center is-justify-content-center"},Z={class:"navbar-item"},ee=r("Sign Up"),se=S({props:{fixed:{type:Boolean,default:!1},dropdownBoxed:{type:Boolean,default:!1},mode:{default:"fade"}},setup(a){const t=a,{y:m}=B(),f=l(()=>m.value>60),n=V(!1),b=l(()=>[t.fixed&&"is-fixed-top",t.mode&&`is-${t.mode}`,t.fixed&&f.value&&"is-scrolled",n.value&&"is-solid"]),h=l(()=>[n.value&&"is-active"]);return(ne,i)=>{const c=I("RouterLink"),g=z,x=R,y=j,k=M,w=K;return N(),$("nav",{class:p(["navbar is-transparent is-centered",u(b)])},[e("div",A,[e("div",D,[s(c,{to:{name:"index"},class:"navbar-item"},{default:o(()=>[E,O]),_:1}),e("div",{class:"navbar-burger",onClick:i[0]||(i[0]=d(oe=>n.value=!n.value,["prevent"])),onKeydown:i[1]||(i[1]=H(d(()=>n.value=!n.value,["prevent"]),["space"]))},[s(g,{open:n.value},null,8,["open"])],32)]),e("div",{class:p(["navbar-menu b-centered-mobile b-centered-tablet-p",u(h)])},[e("div",P,[e("div",Q,[s(c,{to:{name:"index"},class:"navbar-item"},{default:o(()=>[U,W]),_:1})])]),e("div",q,[e("div",F,[s(y,{icon:"feather:search"},{default:o(()=>[s(x,{placeholder:"Search...",rounded:""})]),_:1})])]),e("div",G,[s(c,{to:{name:"index"},class:"navbar-item has-naver"},{default:o(()=>[J]),_:1}),s(c,{to:{name:"index"},class:"navbar-item has-naver"},{default:o(()=>[X]),_:1}),e("div",Y,[s(k)]),e("div",Z,[s(w,{color:"primary",raised:"",bold:"",custom:""},{default:o(()=>[ee]),_:1})])])],2)])],2)}}});var _e=C(se,[["__scopeId","data-v-180589c8"]]);export{_e as _};