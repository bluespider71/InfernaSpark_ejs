import{m as q,g as o,S as I,am as Nn,y as z,a7 as zn,b8 as An,b4 as Mn,o as b,f as _,r as B,A as g,H as rn,F as Tn,G as En,z as k,e as mn,v as bn,W as Ln,bR as W,h as d,w as A,j as In,i as Fn,p as Vn,k as jn,s as Dn,n as Hn,M as On}from"./index.65d9db8a.js";import{_ as Bn,a as Wn}from"./DemoTitle.8129d84d.js";import{D as Pn}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";function M(n,e,t){return Math.max(e,Math.min(n,t))}function m(n,e=2){return n.toFixed(e).replace(/0+$/,"").replace(/\.$/,"")}function vn(n){return n.endsWith(".")?NaN:(parseFloat(n)%360+360)%360/360}function hn(n){return m(360*n)}function F(n){if(!n.endsWith("%"))return NaN;const e=n.substring(0,n.length-1);if(e.endsWith("."))return NaN;const t=parseFloat(e);return Number.isNaN(t)?NaN:M(t,0,100)/100}function P(n){return m(100*n)+"%"}function Y(n){if(n.endsWith("%"))return F(n);if(n.endsWith("."))return NaN;const e=parseFloat(n);return Number.isNaN(e)?NaN:M(e,0,255)/255}function G(n){return m(255*n)}function J(n){return n.endsWith("%")?F(n):M(parseFloat(n),0,1)}function Q(n){return String(n)}const cn={hsl:{h:{to:hn,from:vn},s:{to:P,from:F},l:{to:P,from:F},a:{to:Q,from:J}},hwb:{h:{to:hn,from:vn},w:{to:P,from:F},b:{to:P,from:F},a:{to:Q,from:J}},rgb:{r:{to:G,from:Y},g:{to:G,from:Y},b:{to:G,from:Y},a:{to:Q,from:J}}};function K(n){const e=n.replace(/^#/,""),t=[],r=e.length>4?2:1;for(let f=0;f<e.length;f+=r){const x=e.slice(f,f+r);t.push(x.repeat(r%2+1))}t.length===3&&t.push("ff");const i=t.map(f=>parseInt(f,16)/255);return{r:i[0],g:i[1],b:i[2],a:i[3]}}function Z(n){const e=n.l<.5?n.l*(1+n.s):n.l+n.s-n.l*n.s,t=2*n.l-e;return{r:nn(t,e,n.h+1/3),g:nn(t,e,n.h),b:nn(t,e,n.h-1/3),a:n.a}}function nn(n,e,t){return t<0?t+=1:t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function sn(n){return{r:en(5,n),g:en(3,n),b:en(1,n),a:n.a}}function en(n,e){const t=(n+6*e.h)%6;return e.v-e.v*e.s*Math.max(0,Math.min(t,4-t,1))}function ln(n){return{h:n.h,s:n.b===1?0:1-n.w/(1-n.b),v:1-n.b,a:n.a}}function D(n){const e=Math.min(n.r,n.g,n.b),t=Math.max(n.r,n.g,n.b);let r;return r=t===e?0:t===n.r?(0+(n.g-n.b)/(t-e))/6:t===n.g?(2+(n.b-n.r)/(t-e))/6:(4+(n.r-n.g)/(t-e))/6,r<0&&(r+=1),{h:r,w:e,b:1-t,a:n.a}}function tn(n){const e=D(n),t=e.w,r=1-e.b,i=(r+t)/2;let f;return f=r===0||t===1?0:(r-i)/Math.min(i,1-i),{h:e.h,s:f,l:i,a:n.a}}function R(n){return"#"+Object.values(n).map(e=>{const t=255*e,r=Math.round(t).toString(16);return r.length===1?"0"+r:r}).join("")}const Kn={hex:[["hsl",function(n){return tn(K(n))}],["hsv",function(n){return fn(K(n))}],["hwb",function(n){return D(K(n))}],["rgb",K]],hsl:[["hex",function(n){return R(Z(n))}],["hsv",function(n){const e=n.l+n.s*Math.min(n.l,1-n.l),t=e===0?0:2-2*n.l/e;return{h:n.h,s:t,v:e,a:n.a}}],["hwb",function(n){return D(Z(n))}],["rgb",Z]],hsv:[["hex",function(n){return R(sn(n))}],["hsl",function(n){const e=n.v-n.v*n.s/2,t=Math.min(e,1-e),r=t===0?0:(n.v-e)/t;return{h:n.h,s:r,l:e,a:n.a}}],["hwb",function(n){return{h:n.h,w:(1-n.s)*n.v,b:1-n.v,a:n.a}}],["rgb",sn]],hwb:[["hex",function(n){return R(on(n))}],["hsl",function(n){return tn(on(n))}],["hsv",ln],["rgb",on]],rgb:[["hex",R],["hsl",tn],["hsv",fn],["hwb",D]]};function on(n){return sn(ln(n))}function fn(n){return ln(D(n))}function j(n){const e={};for(const t in n)e[t]=n[t];return e}const Rn={hex:(n,e)=>e?n.substring(0,n.length-(n.length-1)/4):n,hsl:(n,e)=>`hsl(${m(360*n.h)} ${m(100*n.s)}% ${m(100*n.l)}%`+(e?")":` / ${m(n.a)})`),hwb:(n,e)=>`hwb(${m(360*n.h)} ${m(100*n.w)}% ${m(100*n.b)}%`+(e?")":` / ${m(n.a)})`),rgb:(n,e)=>`rgb(${m(255*n.r)} ${m(255*n.g)} ${m(255*n.b)}`+(e?")":` / ${m(n.a)})`)};function gn(n,e,t){return Rn[e](n,t)}function _n(n){return!!n.startsWith("#")&&!![3,4,6,8].includes(n.length-1)&&/^#[0-9A-Fa-f]+$/.test(n)}function qn(n){if(typeof n!="string")return{format:function(s){return Object.prototype.hasOwnProperty.call(s,"r")?"rgb":Object.prototype.hasOwnProperty.call(s,"w")?"hwb":Object.prototype.hasOwnProperty.call(s,"v")?"hsv":"hsl"}(n),color:n};if(_n(n))return{format:"hex",color:n};if(!n.includes("(")){const p=document.createElement("canvas").getContext("2d");p.fillStyle=n;const s=p.fillStyle;return s==="#000000"&&n!=="black"?null:{format:"hex",color:s}}const[e,t]=n.split("("),r=e.substring(0,3),i=t.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");i.length===3&&i.push("1");const f=r.split("").concat("a"),x=Object.fromEntries(f.map((p,s)=>[p,cn[r][p].from(i[s])]));return{format:r,color:x}}const an=["hex","hsl","hwb","rgb"],Un=["show","hide"],Xn={class:"vacp-range-input-group"},Yn=["for"],Gn={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},Jn=q("Hue"),Qn=["id","value"],Zn=["for"],ne={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},ee=q("Alpha"),te=["id","value"],oe=q(" Copy color "),ae={class:"vacp-color-inputs"},re={class:"vacp-color-input-group"},ce=["for"],se=o("span",{class:"vacp-color-input-label-text"}," Hex ",-1),le=["id","value"],ie=["id","for","onInput"],ue={class:"vacp-color-input-label-text"},pe=["id","value","onInput"],de=q(" Switch format ");var ve={props:{color:{type:[String,Object],required:!1,default:null},id:{type:String,required:!1,default:"color-picker"},visibleFormats:{type:Array,required:!1,default:()=>an,validator:n=>n.length>0&&n.every(e=>an.includes(e))},defaultFormat:{type:String,required:!1,default:"hsl",validator:n=>an.includes(n)},alphaChannel:{type:String,required:!1,default:"show",validator:n=>Un.includes(n)}},emits:["color-change"],setup(n,{emit:e}){const t=n,r=I(null),i=I(null),f=I(null),x=I(!1),p=I(t.defaultFormat),s=Nn({hex:"#ffffffff",hsl:{h:0,s:0,l:1,a:1},hsv:{h:0,s:0,v:1,a:1},hwb:{h:0,w:1,b:0,a:1},rgb:{r:1,g:1,b:1,a:1}}),T=z(()=>{const a=Object.keys(s[p.value]);return p.value!=="hex"&&t.alphaChannel==="hide"?a.slice(0,3):a}),U=z(()=>t.alphaChannel==="hide"&&[5,7].includes(s.hex.length)?s.hex.substring(0,s.hex.length-(s.hex.length-1)/4):s.hex);function E(){const a=t.visibleFormats.findIndex(l=>l===p.value),c=a===t.visibleFormats.length-1?0:a+1;p.value=t.visibleFormats[c]}function H(a){x.value=!0,L(a)}function X(a){x.value=!0,S(a)}function $(){x.value=!1}function L(a){a.buttons===1&&x.value!==!1&&i.value instanceof HTMLElement&&O(i.value,a.clientX,a.clientY)}function S(a){x.value!==!1&&i.value instanceof HTMLElement&&(a.preventDefault(),O(i.value,a.touches[0].clientX,a.touches[0].clientY))}function O(a,c,l){const u=function(h,C,V){const w=h.getBoundingClientRect(),Cn=C-w.left,Sn=V-w.top;return{x:M(Cn/w.width,0,1),y:M(1-Sn/w.height,0,1)}}(a,c,l),v=j(s.hsv);v.s=u.x,v.v=u.y,N("hsv",v)}function yn(a){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(a.key))return;a.preventDefault();const c=["ArrowLeft","ArrowDown"].includes(a.key)?-1:1,l=["ArrowLeft","ArrowRight"].includes(a.key)?"s":"v",u=a.shiftKey?10:1,v=s.hsv[l]+c*u*.01,h=j(s.hsv);h[l]=M(v,0,1),N("hsv",h)}function un(a){if(a===null)return;const c=qn(a);c!==null&&N(c.format,c.color)}function xn(a){const c=a.currentTarget,l=j(s.hsv);l.h=parseInt(c.value)/360,N("hsv",l)}function wn(a){const c=a.currentTarget,l=j(s.hsv);l.a=parseInt(c.value)/100,N("hsv",l)}function pn(a,c,l){const u=a.target,v=j(s[c]),h=cn[c][l].from(u.value);Number.isNaN(h)||h===void 0||(v[l]=h,N(c,v))}function N(a,c){let l=c;if(t.alphaChannel==="hide"){if(typeof c!="string")c.a=1,l=c;else if([5,9].includes(c.length)){const u=(c.length-1)/4;l=c.substring(0,c.length-u)+"f".repeat(u)}}if(!function(u,v){if(typeof u=="string"||typeof v=="string")return u===v;for(const h in u)if(u[h]!==v[h])return!1;return!0}(s[a],l)){s[a]=l;const u=function(v){for(const[h,C]of Kn[v])s[h]=C(s[v]);return r.value instanceof HTMLElement&&i.value instanceof HTMLElement&&f.value instanceof HTMLElement&&function(h,C,V,w){h.style.setProperty("--vacp-hsl-h",String(w.hsl.h)),h.style.setProperty("--vacp-hsl-s",String(w.hsl.s)),h.style.setProperty("--vacp-hsl-l",String(w.hsl.l)),h.style.setProperty("--vacp-hsl-a",String(w.hsl.a)),C.setAttribute("style",`
    position: relative;
    background-color: hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%); /* 1. */
    background-image:
      linear-gradient(to top, #000, transparent),  /* 2. */
      linear-gradient(to right, #fff, transparent) /* 2. */
    ;
  `),V.setAttribute("style",`
    box-sizing: border-box;
    position: absolute;
    left: ${100*w.hsv.s}%;   /* 3. */
    bottom: ${100*w.hsv.v}%; /* 3. */
  `)}(r.value,i.value,f.value,s),function(h,C){const V=t.alphaChannel==="hide";return{colors:h,cssColor:gn(h[C],C,V)}}(s,p.value)}(a);e("color-change",u)}}function kn(){const a=s[p.value],c=t.alphaChannel==="hide";(function(l){if(typeof document.queryCommandSupported!="function"||!document.queryCommandSupported("copy"))return!1;const u=document.createElement("textarea");let v;u.textContent=l,u.style.position="fixed",document.body.appendChild(u),u.select();try{v=document.execCommand("copy")}catch{v=!1}finally{document.body.removeChild(u)}})(gn(a,p.value,c))}function $n(a,c){return cn[a][c].to(s[a][c])}function dn(a){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(a.key)||!a.shiftKey)return;const c=a.currentTarget,l=parseFloat(c.step),u=["ArrowLeft","ArrowDown"].includes(a.key)?-1:1,v=M(parseFloat(c.value)+u*l*10,parseInt(c.min),parseInt(c.max));c.value=String(v-u*l)}return zn(()=>t.color,a=>{un(a)}),An(()=>{document.addEventListener("mousemove",L,{passive:!1}),document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("mouseup",$),document.addEventListener("touchend",$),un(t.color)}),Mn(()=>{document.removeEventListener("mousemove",L),document.removeEventListener("touchmove",S),document.removeEventListener("mouseup",$),document.removeEventListener("touchend",$)}),(a,c)=>(b(),_("div",{ref_key:"colorPicker",ref:r,class:"vacp-color-picker"},[o("div",{ref_key:"colorSpace",ref:i,class:"vacp-color-space",onMousedown:H,onTouchstart:X},[o("div",{ref_key:"thumb",ref:f,class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",onKeydown:yn},null,544)],544),o("div",Xn,[o("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${n.id}-hue-slider`},[o("span",Gn,[B(a.$slots,"hue-range-input-label",{},()=>[Jn])]),o("input",{id:`${n.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:360*g(s).hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:dn,onInput:xn},null,40,Qn)],8,Yn),n.alphaChannel==="show"?(b(),_("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${n.id}-alpha-slider`},[o("span",ne,[B(a.$slots,"alpha-range-input-label",{},()=>[ee])]),o("input",{id:`${n.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:100*g(s).hsv.a,type:"range",min:"0",max:"100",step:"1",onKeydownPassive:dn,onInput:wn},null,40,te)],8,Zn)):rn("",!0)]),o("button",{class:"vacp-copy-button",type:"button",onClick:kn},[B(a.$slots,"copy-button",{},()=>[oe])]),o("div",ae,[o("div",re,[p.value==="hex"?(b(),_("label",{key:0,class:"vacp-color-input-label",for:`${n.id}-color-hex`},[se,o("input",{id:`${n.id}-color-hex`,class:"vacp-color-input",type:"text",value:g(U),onInput:c[0]||(c[0]=l=>function(u){const v=u.target;_n(v.value)&&N("hex",v.value)}(l))},null,40,le)],8,ce)):(b(!0),_(Tn,{key:1},En(g(T),l=>(b(),_("label",{id:`${n.id}-color-${p.value}-${l}`,key:`${n.id}-color-${p.value}-${l}`,class:"vacp-color-input-label",for:`${n.id}-color-${p.value}`,onInput:u=>pn(u,p.value,l)},[o("span",ue,k(l.toUpperCase()),1),o("input",{id:`${n.id}-color-${p.value}`,class:"vacp-color-input",type:"text",value:$n(p.value,l),onInput:u=>pn(u,p.value,l)},null,40,pe)],40,ie))),128))]),n.visibleFormats.length>1?(b(),_("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:E},[B(a.$slots,"format-switch-button",{},()=>[de])])):rn("",!0)])],512))}};(function(n,e){e===void 0&&(e={});var t=e.insertAt;if(n&&typeof document!="undefined"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}})(`
/*
This style block is unscoped intentionally.

This is done to have a lower specificity for its selectors which in turn makes it easier to override their styles.

The specificity for \`.vacp-color-space[data-v-76c97bd2]\` is 20 while the specificity for \`.vacp-color-space\` is 10.
*/
.vacp-color-picker {
  --vacp-color: hsl(
    calc(var(--vacp-hsl-h) * 360)
    calc(var(--vacp-hsl-s) * 100%)
    calc(var(--vacp-hsl-l) * 100%)
    / var(--vacp-hsl-a)
  );
  --vacp-focus-color: dodgerblue;
  --vacp-color-space-width: 300px;
  --vacp-spacing: 6px;
  --vacp-tiled-background-image: linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee
    ),
    linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee
    )
  ;

  max-width: var(--vacp-color-space-width);
  padding: var(--vacp-spacing);
  display: grid;
  grid-gap: var(--vacp-spacing);
  grid-template-columns: 1fr min-content;
  grid-template-areas:
    "color-space  color-space"
    "range-inputs copy-button"
    "color-inputs color-inputs"
  ;
  font-size: 0.8em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #fff;
}
.vacp-color-picker *,
.vacp-color-picker *::before,
.vacp-color-picker *::after {
  box-sizing: border-box;
}
.vacp-color-picker button::-moz-focus-inner {
  border: none;
  padding: 0;
}
.vacp-color-picker :focus {
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-color-space {
  grid-area: color-space;

  overflow: hidden;
  height: calc(var(--vacp-color-space-width) * 0.6);
}
.vacp-color-space-thumb {
  --vacp-thumb-size: calc(var(--vacp-spacing) * 4);

  width: var(--vacp-thumb-size);
  height: var(--vacp-thumb-size);
  margin-left: calc(-1 * var(--vacp-thumb-size) / 2);
  margin-bottom: calc(-1 * var(--vacp-thumb-size) / 2);
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #000;
}

/*
1. Don\u2019t fully remove a focus outline or border. This is important to maintain a focus style in Windows\u2019 high contrast mode.
*/
.vacp-color-space-thumb:focus {
  outline-color: transparent; /* 1. */
  box-shadow: 0 0 0 1px #000, 0 0 0 3px var(--vacp-focus-color);
}
.vacp-range-input-label {
  --vacp-slider-track-width: 100%;
  --vacp-slider-track-height: calc(var(--vacp-spacing) * 3);
  --vacp-slider-thumb-size: calc(var(--vacp-slider-track-height) + var(--vacp-spacing));

  display: block;
}
.vacp-range-input-group {
  grid-area: range-inputs;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.vacp-range-input-group > :not(:first-child) {
  margin-top: var(--vacp-spacing);
}
.vacp-range-input,
.vacp-range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.vacp-range-input {
  display: block;
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  margin-right: 0;
  margin-left: 0;
  margin-top: calc(var(--vacp-spacing) / 2);
  margin-bottom: calc(var(--vacp-spacing) / 2);
  padding: 0;
  border: none;
  background: none;
}
.vacp-range-input:focus {
  outline: none;
}

/* Resets one of these annoying custom focus styles in Firefox. */
.vacp-range-input::-moz-focus-outer {
  border: none;
}
.vacp-range-input--alpha {
  background-color: #fff;
  background-image: var(--vacp-tiled-background-image);
  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);
  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);
}

/*
Range input: Tracks
*/
.vacp-range-input::-moz-range-track {
  display: block;
  box-sizing: border-box;
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input::-webkit-slider-runnable-track {
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input::-ms-track {
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input:focus::-moz-range-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input:focus::-webkit-slider-runnable-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input:focus::-ms-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input--alpha::-moz-range-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--alpha::-webkit-slider-runnable-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--alpha::-ms-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--hue::-moz-range-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}
.vacp-range-input--hue::-webkit-slider-runnable-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}
.vacp-range-input--hue::-ms-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}

/*
Range input: thumbs
*/
.vacp-range-input::-moz-range-thumb {
  box-sizing: border-box;
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-range-input::-webkit-slider-thumb {
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  margin-top: calc((var(--vacp-slider-track-height) - var(--vacp-slider-thumb-size)) / 2);
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-range-input::-ms-thumb {
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  margin-top: 0;
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-copy-button {
  grid-area: copy-button;
  justify-self: center;
  align-self: center;

  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--vacp-spacing) * 6);
  height: calc(var(--vacp-spacing) * 6);
  border: 1px solid transparent;
  border-radius: 50%;
  color: #fff;

  /* Tiled background */
  background-color: #fff;
  background-image:
    linear-gradient(var(--vacp-color), var(--vacp-color)),
    var(--vacp-tiled-background-image)
  ;
  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);
  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);
}
.vacp-copy-button:enabled:not(:hover) svg {
  display: none;
}

/*
1. Justification for removing the outline: The focus styles are maintained using a solid border style. This maintains a focus style in Windows\u2019 high contrast mode which would be lost with a combination of \`outline: none\` and a box shadow because box shadows are removed in high contrast mode.
*/
.vacp-copy-button:enabled:focus {
  outline: none; /* 1. */
  box-shadow: 0 0 0 2px var(--vacp-focus-color);
  border-color: var(--vacp-focus-color);
}
.vacp-copy-button:enabled:hover {
  background-color: var(--vacp-color);
  background-image: linear-gradient(rgb(0 0 0 / 0.25), rgb(0 0 0 / 0.25));
}
.vacp-color-inputs {
  grid-area: color-inputs;
  display: flex;
  align-items: center;
}
.vacp-color-inputs > :not(:first-child) {
  margin-left: var(--vacp-spacing);
}
.vacp-color-input-group {
  flex-grow: 1;
  display: flex;
}
.vacp-color-input-label {
  flex-grow: 1;
  text-align: center;
}
.vacp-color-input-label:not(:first-child) {
  margin-left: var(--vacp-spacing);
}
.vacp-color-input {
  width: 100%;
  margin: 0;
  margin-top: calc(var(--vacp-spacing) / 2);
  padding: var(--vacp-spacing);
  border: 1px solid #ccc;
  font: inherit;
  text-align: center;
  color: inherit;
  background-color: #fff;
}
.vacp-color-input:enabled:focus {
  border-color: var(--vacp-focus-color);
}
.vacp-format-switch-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: var(--vacp-spacing);
  border: 1px solid transparent;
  font: inherit;
  color: inherit;
  background-color: #fff;
}
.vacp-format-switch-button:enabled:focus {
  border-color: var(--vacp-focus-color);
}
.vacp-format-switch-button:enabled:hover {
  background-color: #eee;
}
`);const y=n=>(Vn("data-v-64b13b29"),n=n(),jn(),n),he={class:"color-card"},fe={class:"color-card-header"},ge=y(()=>o("div",{class:"color-dot is-primary"},null,-1)),me={class:"meta"},be={class:"actions"},_e={key:0},ye={key:1},xe={key:0},we=y(()=>o("div",{class:"is-divider"},null,-1)),ke={class:"color-picker"},$e=y(()=>o("span",{class:"sr-only"},"Hue",-1)),Ce=y(()=>o("span",{class:"sr-only"},"Alpha",-1)),Se=y(()=>o("span",{class:"is-sr-only"},"Copy color",-1)),Ne=y(()=>o("i",{class:"iconify is-clickable","aria-hidden":"true","data-icon":"feather:copy"},null,-1)),ze=y(()=>o("span",{class:"sr-only"},"Switch format",-1)),Ae=y(()=>o("i",{class:"iconify rem-120 is-clickable","aria-hidden":"true","data-icon":"fluent:chevron-up-down-20-filled"},null,-1)),Me=y(()=>o("div",{class:"is-divider"},null,-1)),Te=y(()=>o("span",null,"Hue",-1)),Ee=y(()=>o("span",null,"Saturation",-1)),Le=y(()=>o("span",null,"Luminance",-1)),Ie=bn({props:{color:null},setup(n){const e=n;Ln($=>({"0a7f7d4c":g(U)}));const t=z(()=>`--${e.color}`),r=z(()=>`--${e.color}-h`),i=z(()=>`--${e.color}-s`),f=z(()=>`--${e.color}-l`),x=W(t.value),p=W(r.value),s=W(i.value),T=W(f.value),U=z(()=>`hsl(${p.value}, ${s.value}, ${T.value})`),E=I(!1),H=()=>{E.value=!E.value};function X({colors:$}){const{h:L,s:S,l:O}=$.hsl;p.value=`${Math.round(L*360)}`,s.value=`${Math.round(S*100)}%`,T.value=`${Math.round(O*100)}%`}return($,L)=>{const S=Dn;return b(),_("div",he,[o("div",fe,[ge,o("div",me,[o("span",null,"var("+k(g(t))+")",1),o("span",null,k(g(x)),1)]),o("div",be,[d(S,{tabindex:"0",onKeydown:In(Fn(H,["prevent"]),["space"]),onClick:H},{default:A(()=>[E.value?(b(),_("span",_e,"Close")):(b(),_("span",ye,"Customize"))]),_:1},8,["onKeydown"])])]),E.value?(b(),_("div",xe,[we,o("div",ke,[d(g(ve),{id:e.color,class:"hide-alpha hide-copy",color:`hsl(${g(p)}, ${g(s)}, ${g(T)})`,onColorChange:X},{"hue-range-input-label":A(()=>[$e]),"alpha-range-input-label":A(()=>[Ce]),"copy-button":A(()=>[Se,Ne]),"format-switch-button":A(()=>[ze,Ae]),_:1},8,["id","color"])]),Me,o("dl",null,[o("dt",null,[Te,o("small",null,"var("+k(g(r))+")",1)]),o("dd",null,k(g(p)),1)]),o("dl",null,[o("dt",null,[Ee,o("small",null,"var("+k(g(i))+")",1)]),o("dd",null,k(g(s)),1)]),o("dl",null,[o("dt",null,[Le,o("small",null,"var("+k(g(f))+")",1)]),o("dd",null,k(g(T)),1)])])):rn("",!0)])}}});var Fe=mn(Ie,[["__scopeId","data-v-64b13b29"]]);const Ve={},je={class:"theme-colors pb-6"},De={class:"columns is-multiline py-4"},He={class:"column is-4"},Oe={class:"column is-4"},Be={class:"column is-4"},We={class:"column is-4"},Pe={class:"column is-4"},Ke={class:"column is-4"},Re={class:"columns is-multiline py-4"},qe={class:"column is-4"},Ue={class:"column is-4"},Xe={class:"column is-4"},Ye={class:"column is-4"},Ge={class:"column is-4"},Je={class:"column is-4"},Qe={class:"column is-4"},Ze={class:"column is-4"},nt={class:"columns is-multiline py-4"},et={class:"column is-4"},tt={class:"column is-4"},ot={class:"column is-4"};function at(n,e){const t=Bn,r=Fe;return b(),_("div",je,[d(t,{title:"Main colors",subtitle:"Main theme and primary colors"}),o("div",De,[o("div",He,[d(r,{color:"primary"})]),o("div",Oe,[d(r,{color:"secondary"})]),o("div",Be,[d(r,{color:"info"})]),o("div",We,[d(r,{color:"success"})]),o("div",Pe,[d(r,{color:"warning"})]),o("div",Ke,[d(r,{color:"danger"})])]),d(t,{title:"Additional colors",subtitle:"Additional and secondary colors"}),o("div",Re,[o("div",qe,[d(r,{color:"dark"})]),o("div",Ue,[d(r,{color:"dark-bg"})]),o("div",Xe,[d(r,{color:"green"})]),o("div",Ye,[d(r,{color:"blue"})]),o("div",Ge,[d(r,{color:"purple"})]),o("div",Je,[d(r,{color:"yellow"})]),o("div",Qe,[d(r,{color:"orange"})]),o("div",Ze,[d(r,{color:"red"})])]),d(t,{title:"Text colors",subtitle:"typography and text colors"}),o("div",nt,[o("div",et,[d(r,{color:"light-text"})]),o("div",tt,[d(r,{color:"medium-text"})]),o("div",ot,[d(r,{color:"dark-text"})])])])}var rt=mn(Ve,[["render",at],["__scopeId","data-v-0415ef28"]]);const pt=bn({setup(n){return(e,t)=>{const r=Wn,i=Hn,f=On;return b(),_("div",null,[d(r,{title:"Spark Colors",subtitle:"Although it is based on Bulma and Sass, Spark uses native CSS variables for colors. Explore Spark colors."}),d(f,null,{default:A(()=>[d(i,null,{default:A(()=>[d(rt)]),_:1})]),_:1}),d(Pn)])}}});export{pt as default};
