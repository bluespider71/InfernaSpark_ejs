import{e as w,v as C,a5 as B,y as r,S,P as k,o as N,f as A,g as s,h as e,w as a,i as l,j as I,D as c,A as u,p as $,k as L,m as n,s as R,u as T}from"./index.65d9db8a.js";import{_ as V}from"./ThemeToggle.520d4118.js";import{_ as j}from"./NavbarDropdown.92097295.js";import{_ as D}from"./Hamburger.271b6c16.js";const p=i=>($("data-v-54f6526f"),i=i(),L(),i),K={class:"container"},M={class:"navbar-brand"},P=p(()=>s("img",{class:"navbar-logo",src:T,alt:"logo"},null,-1)),z={class:"navbar-start"},E=n(" Features "),F=n(" Pricing "),H=n(" About "),J=n(" About "),O=n(" Jobs "),U=n(" Contact "),W=p(()=>s("hr",{class:"navbar-divider"},null,-1)),q=n(" Report an issue "),G={class:"navbar-end"},Q={class:"navbar-item is-flex is-align-items-center is-justify-content-center"},X=n(" Login "),Y={class:"navbar-item"},Z=n("Sign Up"),ee=C({props:{fixed:{type:Boolean,default:!1},dropdownBoxed:{type:Boolean,default:!1},mode:{default:"fade"}},setup(i){const _=i,{y:v}=B(),m=r(()=>v.value>60),t=S(!1),f=r(()=>[_.fixed&&"is-fixed-top",_.mode&&`is-${_.mode}`,_.fixed&&m.value&&"is-scrolled",t.value&&"is-solid"]),b=r(()=>[t.value&&"is-active"]);return(ae,d)=>{const o=k("RouterLink"),h=D,x=j,g=V,y=R;return N(),A("nav",{class:c(["navbar is-transparent",u(f)])},[s("div",K,[s("div",M,[e(o,{to:{name:"index"},class:"navbar-item"},{default:a(()=>[P]),_:1}),s("div",{class:"navbar-burger",onClick:d[0]||(d[0]=l(se=>t.value=!t.value,["prevent"])),onKeydown:d[1]||(d[1]=I(l(()=>t.value=!t.value,["prevent"]),["space"]))},[e(h,{open:t.value},null,8,["open"])],32)]),s("div",{class:c(["navbar-menu b-centered-mobile b-centered-tablet-p",u(b)])},[s("div",z,[e(o,{to:{name:"index"},class:"navbar-item has-naver"},{default:a(()=>[E]),_:1}),e(o,{to:{name:"index"},class:"navbar-item has-naver"},{default:a(()=>[F]),_:1}),e(o,{to:{name:"index"},class:"navbar-item has-naver"},{default:a(()=>[H]),_:1}),e(x,{label:"Company",boxed:_.dropdownBoxed},{default:a(()=>[e(o,{to:{name:"index"},class:"navbar-item"},{default:a(()=>[J]),_:1}),e(o,{to:{name:"index"},class:"navbar-item"},{default:a(()=>[O]),_:1}),e(o,{to:{name:"index"},class:"navbar-item"},{default:a(()=>[U]),_:1}),W,e(o,{to:{name:"index"},class:"navbar-item"},{default:a(()=>[q]),_:1})]),_:1},8,["boxed"])]),s("div",G,[s("div",Q,[e(g)]),e(o,{to:{name:"index"},class:"navbar-item has-naver"},{default:a(()=>[X]),_:1}),s("div",Y,[e(y,{color:"primary",raised:"",bold:"",custom:""},{default:a(()=>[Z]),_:1})])])],2)])],2)}}});var _e=w(ee,[["__scopeId","data-v-54f6526f"]]);export{_e as _};