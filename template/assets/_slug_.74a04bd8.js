import{_ as x}from"./FooterD.1c10450e.js";import{o as i,f as _,g as t,e as A,v as b,S as y,i as $,j as M,h as a,w as d,z as p,A as C,D as l,p as Z,k as B,m as S,q as N,O as R,x as H,c0 as q,b8 as z,bb as I,a7 as P,C as V,H as Y,n as D,M as W}from"./index.65d9db8a.js";import{_ as j}from"./arrow-left-bold.977ea4f2.js";import{M as E}from"./vue3-markdown-it.umd.min.b70c1162.js";import{a as K,_ as L}from"./index.393dc32c.js";import{s as T}from"./sleep.2a252ff4.js";import{s as F}from"./index.aa4f1d8c.js";import"./VInput.e415d3f2.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./PageTitle.258fd718.js";const O={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},U=t("path",{fill:"currentColor",d:"M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z",opacity:".2"},null,-1),G=t("path",{fill:"currentColor",d:"M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88ZM80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm72 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm24.5 48a56 56 0 0 1-97 0a8 8 0 1 1 13.8-8a40.1 40.1 0 0 0 69.4 0a8 8 0 0 1 13.8 8Z"},null,-1),J=[U,G];function Q(o,e){return i(),_("svg",O,J)}var X={name:"ph-smiley-duotone",render:Q};const tt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},et=t("circle",{cx:"128",cy:"128",r:"96",fill:"currentColor",opacity:".2"},null,-1),ot=t("circle",{cx:"92",cy:"108",r:"12",fill:"currentColor"},null,-1),st=t("circle",{cx:"164",cy:"108",r:"12",fill:"currentColor"},null,-1),nt=t("path",{fill:"currentColor",d:"M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"},null,-1),at=[et,ot,st,nt];function lt(o,e){return i(),_("svg",tt,at)}var it={name:"ph-smiley-blank-duotone",render:lt};const ct={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},rt=t("circle",{cx:"128",cy:"128",r:"96",fill:"currentColor",opacity:".2"},null,-1),_t=t("path",{fill:"currentColor",d:"M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm84 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm68 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Zm-49.8 19a7.9 7.9 0 0 0-12.4 0l-9.8 12.2l-9.8-12.2a7.9 7.9 0 0 0-12.4 0l-9.8 12.2l-9.8-12.2a7.9 7.9 0 0 0-12.4 0l-16 20a8 8 0 0 0 12.4 10l9.8-12.2l9.8 12.2a7.9 7.9 0 0 0 12.4 0l9.8-12.2l9.8 12.2a7.9 7.9 0 0 0 12.4 0l9.8-12.2l9.8 12.2a7.8 7.8 0 0 0 6.2 3a8 8 0 0 0 6.2-13Z"},null,-1),ut=[rt,_t];function pt(o,e){return i(),_("svg",ct,ut)}var dt={name:"ph-smiley-nervous-duotone",render:pt};const k=o=>(Z("data-v-df9d97de"),o=o(),B(),o),mt={class:"help-container"},ht={class:"help-toolbar"},vt=k(()=>t("span",null,"Back",-1)),ft={class:"flex-card single-help-article"},gt={class:"article-inner"},$t={class:"article-meta"},bt=["src"],yt={class:"meta-info"},Ct={class:"author"},kt=S(" Written by "),wt={class:"status"},xt={class:"content"},At={class:"rating-section"},Mt=k(()=>t("div",{class:"question"},"Was this article helpful ?",-1)),Zt={class:"rating-buttons"},Bt=b({props:{article:null},setup(o){const e=o,s=y("");return(u,n)=>{const c=j,f=N,g=R,m=dt,h=it,v=X;return i(),_("div",mt,[t("div",ht,[t("a",{class:"back-link",onClick:n[0]||(n[0]=$(r=>u.$router.back(),["prevent"])),onKeydown:n[1]||(n[1]=M($(()=>u.$router.back(),["prevent"]),["space"]))},[a(c),vt],32)]),t("div",ft,[t("div",gt,[a(f,{tag:"h2",size:3},{default:d(()=>[t("span",null,p(e.article.title),1)]),_:1}),a(g,{tag:"h3",size:5},{default:d(()=>[t("span",null,p(e.article.subtitle),1)]),_:1}),t("div",$t,[t("img",{class:"small-avatar",src:e.article.author.picture,alt:"Author photo"},null,8,bt),t("div",yt,[t("div",Ct,[kt,t("span",null,p(e.article.author.name),1)]),t("div",wt,"Updated "+p(e.article.updated),1)])]),t("div",xt,[a(C(E),{source:e.article.content},null,8,["source"])]),t("div",At,[Mt,t("div",Zt,[t("button",{class:l(["rating-button",s.value==="bad"&&"is-active"]),onClick:n[2]||(n[2]=r=>s.value="bad")},[a(m)],2),t("button",{class:l(["rating-button",s.value==="neutral"&&"is-active"]),onClick:n[3]||(n[3]=r=>s.value="neutral")},[a(h)],2),t("button",{class:l(["rating-button",s.value==="good"&&"is-active"]),onClick:n[4]||(n[4]=r=>s.value="good")},[a(v)],2),t("span",{class:l(["rating-message is-bad",s.value==="bad"&&"is-active"])}," Nope, that was bad. ",2),t("span",{class:l(["rating-message is-neutral",s.value==="neutral"&&"is-active"])}," Well, that was so so. ",2),t("span",{class:l(["rating-message is-good",s.value==="good"&&"is-active"])}," Yes, that was good. ",2)])])])])])}}});var St=A(Bt,[["__scopeId","data-v-df9d97de"]]);const Nt=K.map(o=>{var e;return(e=o.articles.map(s=>({article:s})))!=null?e:[]}),Rt=Nt.flat(1),Ht=Rt.map(o=>o.article);async function qt(o){const e=Ht.find(s=>s.slug===o);return await T(200),e?Promise.resolve(e):Promise.reject(new Error(`Article ${o} not found`))}const Tt=b({setup(o){const e=H(),s=q(),u=e.params.slug,n=y();async function c(){try{n.value=await qt(u)}catch{s.replace({name:"all",params:{all:`not-found-${e.params.slug}`}})}}return z(c),I(c),P(()=>e.fullPath,c),(f,g)=>{const m=L,h=St,v=D,r=W,w=x;return i(),_("div",null,[a(r,{color:"grey",overflown:""},{default:d(()=>[n.value?(i(),V(v,{key:0},{default:d(()=>[a(m,{title:n.value.title,subtitle:"Article",compact:""},null,8,["title"]),a(h,{article:n.value},null,8,["article"])]),_:1})):Y("",!0)]),_:1}),a(w,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light","social-links":C(F)},null,8,["social-links"])])}}});export{Tt as default};