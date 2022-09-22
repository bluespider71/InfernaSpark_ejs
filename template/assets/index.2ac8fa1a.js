import{_ as C}from"./FooterD.1c10450e.js";import{e as k,v as h,P as j,o as t,C as b,w as l,g as e,h as n,f as _,G as p,z as c,F as m,p as y,k as x,m as P,bQ as S,V as E,A as $,n as R,M as V}from"./index.65d9db8a.js";import{p as A,a as B,b as N,c as D,_ as F,d as q}from"./index.8f42e084.js";import{s as T}from"./index.aa4f1d8c.js";import"./VInput.e415d3f2.js";import"./FooterBubbles.b04e47b0.js";const z=s=>(y("data-v-4e6cdbaa"),s=s(),x(),s),G={class:"education-card-head"},H=z(()=>e("h3",null,"Education",-1)),M=P("View All"),Q={class:"education-card-body"},W={class:"educations"},J=["src"],K={class:"meta"},O=h({props:{education:null},setup(s){const r=s;return(v,d)=>{const a=j("RouterLink"),u=S;return t(),b(u,{class:"education-card"},{default:l(()=>[e("div",G,[H,n(a,{to:"/profile"},{default:l(()=>[M]),_:1})]),e("div",Q,[e("div",W,[(t(!0),_(m,null,p(r.education,(o,i)=>(t(),_("div",{key:i,class:"education"},[e("img",{src:o.school.logo,alt:""},null,8,J),e("div",K,[e("h3",null,c(o.degree),1),e("span",null,c(o.school.name),1),e("span",null,c(o.duration),1),e("p",null,c(o.summary),1)])]))),128))])])]),_:1})}}});var U=k(O,[["__scopeId","data-v-4e6cdbaa"]]);const X=s=>(y("data-v-bda27dec"),s=s(),x(),s),Y={class:"experience-card-head"},Z=X(()=>e("h3",null,"Experience",-1)),ee=P("View All"),se={class:"experience-card-body"},oe={class:"experiences"},te=["src"],ne={class:"meta"},ce=h({props:{experiences:null},setup(s){const r=s;return(v,d)=>{const a=j("RouterLink"),u=S;return t(),b(u,{class:"experience-card"},{default:l(()=>[e("div",Y,[Z,n(a,{to:"/profile"},{default:l(()=>[ee]),_:1})]),e("div",se,[e("div",oe,[(t(!0),_(m,null,p(r.experiences,(o,i)=>(t(),_("div",{key:i,class:"experience"},[e("img",{src:o.company.logo,alt:"Company logo"},null,8,te),e("div",ne,[e("h3",null,c(o.role),1),e("span",null,[P(c(o.company.name)+" ",1),e("small",null,c(o.type),1)]),e("span",null,c(o.duration),1),e("p",null,c(o.summary),1)])]))),128))])])]),_:1})}}});var le=k(ce,[["__scopeId","data-v-bda27dec"]]);const _e=s=>(y("data-v-146fa58f"),s=s(),x(),s),ae={class:"skills-card-head"},ie=_e(()=>e("h3",null,"Tools & Skills",-1)),re=P("View All"),ue={class:"skills-card-body"},de={class:"skills"},pe={class:"columns b-columns-third-tablet-p"},me={class:"skill-list"},he=["src"],ve=h({props:{skills:null},setup(s){const r=s;return(v,d)=>{const a=j("RouterLink"),u=S;return t(),b(u,{class:"skills-card"},{default:l(()=>[e("div",ae,[ie,n(a,{to:"/profile"},{default:l(()=>[re]),_:1})]),e("div",ue,[e("div",de,[e("div",pe,[(t(!0),_(m,null,p(r.skills.slice(0,3),(o,i)=>(t(),_("div",{key:i,class:"column is-4"},[n(u,{class:"skill-box"},{default:l(()=>[e("h3",null,c(o.title),1),e("p",null,c(o.subtitle),1),e("div",me,[(t(!0),_(m,null,p(o.skills.slice(0,3),(f,g)=>(t(),_("img",{key:g,src:f,alt:"Skill icon"},null,8,he))),128))])]),_:2},1024)]))),128))])])])]),_:1})}}});var fe=k(ve,[["__scopeId","data-v-146fa58f"]]);const ge=s=>(y("data-v-5dcb40c0"),s=s(),x(),s),$e={class:"projects-card-head"},ke=ge(()=>e("h3",null,"Projects",-1)),be=P("View All"),ye={class:"projects-card-body"},xe={class:"projects"},Pe={class:"columns b-columns-third-tablet-p"},Se={class:"project-members"},je=["src"],Ie=h({props:{projects:null},setup(s){const r=s;return(v,d)=>{const a=j("RouterLink"),u=E,o=S;return t(),b(o,{class:"projects-card"},{default:l(()=>[e("div",$e,[ke,n(a,{to:"/profile/projects"},{default:l(()=>[be]),_:1})]),e("div",ye,[e("div",xe,[e("div",Pe,[(t(!0),_(m,null,p(r.projects.slice(0,3),(i,f)=>(t(),_("div",{key:f,class:"column is-4"},[n(a,{to:"/profile",class:"project"},{default:l(()=>[n(u,{src:i.image,alt:"Project image",width:"400",height:"300"},null,8,["src"]),e("h3",null,c(i.title),1),e("p",null,c(i.subtitle),1),e("div",Se,[(t(!0),_(m,null,p(i.members.slice(0,4),(g,I)=>(t(),_("img",{key:I,src:g,alt:"project user"},null,8,je))),128))])]),_:2},1024)]))),128))])])])]),_:1})}}});var we=k(Ie,[["__scopeId","data-v-5dcb40c0"]]);const Le=s=>(y("data-v-1c655ca8"),s=s(),x(),s),Ce=Le(()=>e("div",{class:"bio-card-head"},[e("h3",null,"About")],-1)),Ee={class:"bio-card-body"},Re=h({props:{bio:null},setup(s){const r=s;return(v,d)=>{const a=S;return t(),b(a,{class:"bio-card"},{default:l(()=>[Ce,e("div",Ee,[e("p",null,c(r.bio),1)])]),_:1})}}});var Ve=k(Re,[["__scopeId","data-v-1c655ca8"]]);const Te=h({setup(s){return(r,v)=>{const d=F,a=Ve,u=we,o=fe,i=le,f=U,g=q,I=R,w=V,L=C;return t(),_("div",null,[n(d,{active:"overview"}),n(w,{color:"grey"},{default:l(()=>[n(I,null,{default:l(()=>[n(g,null,{default:l(()=>[n(a,{bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paria sunt
        igitur. Eam tum adesse, cum dolor omnis absit; Suo genere perveniant ad
        extremum; Ita credo. Duo Reges: constructio interrete. Nihil opus est
        exemplis hoc facere longius.`}),n(u,{projects:$(A)},null,8,["projects"]),n(o,{skills:$(B)},null,8,["skills"]),n(i,{experiences:$(N)},null,8,["experiences"]),n(f,{education:$(D)},null,8,["education"])]),_:1})]),_:1})]),_:1}),n(L,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":$(T)},null,8,["social-links"])])}}});export{Te as default};