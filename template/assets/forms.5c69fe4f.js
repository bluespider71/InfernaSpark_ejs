import{_ as W}from"./DemoLinks.b68e1d3f.js";import{_ as F,a as J}from"./DemoTitle.8129d84d.js";import{v as C,S as $,o as w,C as k,w as l,h as o,g as e,z as f,A as h,m as d,Q as I,R as P,q as L,bQ as z,n as T,M as O,e as Q,y as q,f as B,H as G,D as K,p as X,k as Z}from"./index.65d9db8a.js";import{_ as U,a as S}from"./PrismCode.c318c48c.js";import{_ as N}from"./VInput.e415d3f2.js";import{_ as j}from"./FieldLabel.d20401a9.js";import{_ as E}from"./VTextarea.e87b8464.js";import{_ as H}from"./VSelect.7c24d260.js";import{_ as ee}from"./Checkbox.40c4d2f9.js";import{_ as oe}from"./NinjaToggle.2f00f488.js";import{D as le}from"./DocumentationFooter.26e38be2.js";import"./Hero.cf13b060.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./FooterBubbles.b04e47b0.js";const R=`
<script setup lang="ts">
export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void
}

export interface InputProps {
  type?: string
  placeholder?: string
  value?: string | number
  modelValue?: string | number
  readonly?: boolean
  rounded?: boolean
  inverted?: boolean
}
<\/script>
`,te=`
<script setup lang="ts">
import { ref } from 'vue'

const inputOneValue = ref()
<\/script>

<template>
  <Field>
    <FieldLabel label="Username"></FieldLabel>
    <Control>
      <VInput
        v-model="inputOneValue"
        placeholder="John Doe"
      />
    </Control>
  </Field>
</template>
`,ae=`
<template>
  <Field>
    <FieldLabel label="Email Address"></FieldLabel>
    <Control icon="feather:mail">
      <VInput placeholder="johndoe@gmail.com" />
    </Control>
  </Field>
</template>
`,ne=`
<template>
  <Field>
    <FieldLabel label="Email Address"></FieldLabel>
    <Control icon="feather:mail" validation is-valid>
      <VInput
        placeholder="johndoe@gmail.com"
        value="mymail@gmail.com"
      />
    </Control>
  </Field>
  <Field>
    <FieldLabel label="Password"></FieldLabel>
    <Control icon="feather:lock" validation is-invalid>
      <VInput type="password" value="" />
    </Control>
  </Field>
</template>
`,Y=`
export interface TextareaEmits {
  (e: 'update:modelValue', value: string): void
}

export interface TextareaProps {
  rows?: number
  placeholder?: string
  value?: string
  modelValue?: string
  readonly?: boolean
  resize?: boolean
}
<\/script>
`,se=`
<script setup lang="ts">
import { ref } from 'vue'

const textareaValue = ref('')
<\/script>

<template>
  <Field>
    <FieldLabel label="Message"></FieldLabel>
    <Control>
      <VTextarea
        v-model="textareaValue"
        placeholder="Write something..."
      />
    </Control>
  </Field>
</template>
`,de=`
<script setup lang="ts">
import { ref } from 'vue'

const textareaValue = ref('')
<\/script>

<template>
  <Field>
    <FieldLabel label="Message"></FieldLabel>
    <Control icon="feather:mail">
      <VTextarea
        v-model="textareaValue"
        :resize="false"
        placeholder="Write something..."
      />
    </Control>
  </Field>
</template>
`,A=`
<script setup lang="ts">
export interface SelectOption {
  value: string | number
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: any
  placeholder?: string
  readonly?: boolean
  rounded?: boolean
}
<\/script>
`,ie=`
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    value: 'Hamburger',
    label: 'Hamburger',
  },
  {
    value: 'Cheeseburger',
    label: 'Cheeseburger',
  },
  {
    value: 'Burito',
    label: 'Burito',
  },
]

const selectOneValue = ref()
<\/script>

<template>
  <Field>
    <FieldLabel label="Choose an option"></FieldLabel>
    <Control>
      <VSelect
        v-model="selectOneValue"
        :options="options"
      />
    </Control>
  </Field>
</template>
`,ue=`
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    value: 'Hamburger',
    label: 'Hamburger',
  },
  {
    value: 'Cheeseburger',
    label: 'Cheeseburger',
  },
  {
    value: 'Burito',
    label: 'Burito',
  },
]

const selectOneValue = ref()
<\/script>

<template>
  <Field>
    <FieldLabel label="Choose an option"></FieldLabel>
    <Control icon="feather:globe">
      <VSelect
        v-model="selectOneValue"
        :options="options"
      />
    </Control>
  </Field>
</template>
`,re=`
<script setup lang="ts">
export interface CheckboxEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}

export type CheckboxColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface CheckboxProps {
  name: string
  color?: CheckboxColor
  value?: string | number
  modelValue?: (string | number)[]
  disabled?: boolean
  rounded?: boolean
  label?: string
}
<\/script>
`,ce=`
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(['Option 2'])
<\/script>

<template>
  <!--Regular checkbox-->
  <Checkbox
    v-model="options"
    name="checkbox-1"
    label="Option 1"
    value="Option 1"
  />

  <!--Rounded checkbox-->
  <Checkbox 
    v-model="options"
    name="checkbox-2"
    label="Option 2"
    value="Option 2"
    rounded 
  />
</template>
`,pe=`
<script setup lang="ts">
export type RadioColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface RadioProps {
  name: string
  group: string
  color?: RadioColor
  value?: boolean
  disabled?: boolean
  rounded?: boolean
  label?: string
}
<\/script>
`,me=`
<template>
  <Radio 
    name="radio-1" 
    label="Choice 1" 
    group="radio-group-1" 
    color="default" 
  />
</template>
`,_e=`
<script setup lang="ts">
export type ToggleFlavor = 'thin' | 'switch'

export type ToggleColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface ToggleProps {
  flavor?: ToggleFlavor
  name: string
  color?: ToggleColor
  value?: boolean
  disabled?: boolean
  icon?: boolean
}
<\/script>
`,ve=`
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(['Option 2', 'Option 9'])
<\/script>

<template>
  <!--Thin Toggle-->
  <NinjaToggle
    v-model="options"
    name="demo-toggle-1"
    value="Option 0"
  />

  <!--Switch Toggle-->
  <NinjaToggle
    v-model="options"
    name="demo-toggle-9"
    icon
    flavor="switch"
    color="success"
    value="Option 8"
  />
</template>
`,ge={class:"mx-auto max-w-6"},he={class:"pt-4 pb-6"},be={class:"is-flex d-column-mobile pt-4"},fe={class:"w-full max-w-1/2 max-w-mobile"},Ve={class:"w-full max-w-1/2 max-w-mobile p-4"},xe={class:"mb-4"},$e=e("span",null,"First",-1),we={class:"paragraph rem-90"},Ce=e("span",null,"Second",-1),ye={class:"paragraph rem-90"},Fe=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ke=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark inputs are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VInput />")],-1),Te=C({setup(b){const t=$(),i=$();return(a,r)=>{const n=F,_=j,u=N,p=I,v=P,m=L,g=z,s=U,V=S,c=T,y=O;return w(),k(y,{id:"input-base-demo","bordered-bottom":""},{default:l(()=>[o(c,null,{default:l(()=>[e("div",ge,[e("div",he,[o(n,{title:"Input",subtitle:"Input base layout"}),e("div",be,[e("div",fe,[o(v,null,{default:l(()=>[o(_,{label:"Username"}),o(p,null,{default:l(()=>[o(u,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=x=>t.value=x),placeholder:"John Doe"},null,8,["modelValue"])]),_:1})]),_:1}),o(v,null,{default:l(()=>[o(_,{label:"Username"}),o(p,null,{default:l(()=>[o(u,{modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=x=>i.value=x),placeholder:"John Doe",rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",Ve,[o(g,{shape:"squared",muted:""},{default:l(()=>[e("div",xe,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[$e]),_:1}),e("p",we,"value: "+f(t.value),1)]),e("div",null,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Ce]),_:1}),e("p",ye,"value: "+f(i.value),1)])]),_:1})])])]),o(V,null,{code:l(()=>[o(s,{language:"html",code:h(te)},null,8,["code"])]),props:l(()=>[o(s,{language:"javascript",code:h(R)},null,8,["code"])]),sample:l(()=>[Fe]),usage:l(()=>[ke]),_:1})])]),_:1})]),_:1})}}}),Oe={class:"mx-auto max-w-6"},Ue={class:"pt-4 pb-6"},Se={class:"is-flex d-column-mobile pt-4"},Le={class:"w-full max-w-1/2 max-w-mobile"},ze={class:"w-full max-w-1/2 max-w-mobile p-4"},De={class:"mb-4"},Ie=e("span",null,"First",-1),Pe={class:"paragraph rem-90"},je=e("span",null,"Second",-1),Be={class:"paragraph rem-90"},Ne=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Re=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark inputs are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VInput />"),d(" . You can add an icon to an input element by using the "),e("code",null,"icon"),d(" prop on the "),e("code",null,"<Control />"),d(" component. ")],-1),qe=C({setup(b){const t=$(),i=$();return(a,r)=>{const n=F,_=j,u=N,p=I,v=P,m=L,g=z,s=U,V=S,c=T,y=O;return w(),k(y,{id:"input-icon-demo","bordered-bottom":""},{default:l(()=>[o(c,null,{default:l(()=>[e("div",Oe,[e("div",Ue,[o(n,{title:"Input",subtitle:"Input icon layout"}),e("div",Se,[e("div",Le,[o(v,null,{default:l(()=>[o(_,{label:"Email Address"}),o(p,{icon:"feather:mail"},{default:l(()=>[o(u,{modelValue:t.value,"onUpdate:modelValue":[r[0]||(r[0]=x=>t.value=x),r[1]||(r[1]=x=>t.value=x)],placeholder:"johndoe@gmail.com"},null,8,["modelValue"])]),_:1})]),_:1}),o(v,null,{default:l(()=>[o(_,{label:"Email Address"}),o(p,{icon:"feather:mail"},{default:l(()=>[o(u,{modelValue:i.value,"onUpdate:modelValue":[r[2]||(r[2]=x=>i.value=x),r[3]||(r[3]=x=>i.value=x)],placeholder:"johndoe@gmail.com",rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",ze,[o(g,{shape:"squared",muted:""},{default:l(()=>[e("div",De,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Ie]),_:1}),e("p",Pe,"value: "+f(t.value),1)]),e("div",null,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[je]),_:1}),e("p",Be,"value: "+f(i.value),1)])]),_:1})])])]),o(V,null,{code:l(()=>[o(s,{language:"html",code:h(ae)},null,8,["code"])]),props:l(()=>[o(s,{language:"javascript",code:h(R)},null,8,["code"])]),sample:l(()=>[Ne]),usage:l(()=>[Re]),_:1})])]),_:1})]),_:1})}}}),Ee={class:"mx-auto max-w-6"},He={class:"pt-4 pb-6"},Ye={class:"max-w-1/2 max-w-mobile pt-4"},Ae=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Me=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark inputs are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VInput />"),d(" . You can add an icon to an input element by using the "),e("code",null,"icon"),d(" prop on the "),e("code",null,"<Control />"),d(" component. ")],-1),We=C({setup(b){return(t,i)=>{const a=F,r=j,n=N,_=I,u=P,p=U,v=S,m=T,g=O;return w(),k(g,{id:"input-validation-demo","bordered-bottom":""},{default:l(()=>[o(m,null,{default:l(()=>[e("div",Ee,[e("div",He,[o(a,{title:"Validation",subtitle:"Input validation layout"}),e("div",Ye,[o(u,null,{default:l(()=>[o(r,{label:"Email Address"}),o(_,{icon:"feather:mail",validation:"","is-valid":""},{default:l(()=>[o(n,{placeholder:"johndoe@gmail.com",value:"mymail@gmail.com"})]),_:1})]),_:1}),o(u,null,{default:l(()=>[o(r,{label:"Password"}),o(_,{icon:"feather:lock",validation:"","is-invalid":""},{default:l(()=>[o(n,{type:"password",value:"deaefeafeqfqf"})]),_:1})]),_:1})])]),o(v,null,{code:l(()=>[o(p,{language:"html",code:h(ne)},null,8,["code"])]),props:l(()=>[o(p,{language:"javascript",code:h(R)},null,8,["code"])]),sample:l(()=>[Ae]),usage:l(()=>[Me]),_:1})])]),_:1})]),_:1})}}}),Je={class:"mx-auto max-w-6"},Qe={class:"pt-4 pb-6"},Ge={class:"is-flex d-column-mobile pt-4"},Ke={class:"w-full max-w-1/2 max-w-mobile"},Xe={class:"w-full max-w-1/2 max-w-mobile p-4"},Ze={class:"mb-4"},eo=e("span",null,"Textarea",-1),oo={class:"paragraph rem-90"},lo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),to=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark textareas are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VTextarea />")],-1),ao=C({setup(b){const t=$("");return(i,a)=>{const r=F,n=j,_=E,u=I,p=P,v=L,m=z,g=U,s=S,V=T,c=O;return w(),k(c,{id:"textarea-base-demo","bordered-bottom":""},{default:l(()=>[o(V,null,{default:l(()=>[e("div",Je,[e("div",Qe,[o(r,{title:"Textarea",subtitle:"Textarea base layout"}),e("div",Ge,[e("div",Ke,[o(p,null,{default:l(()=>[o(n,{label:"Message"}),o(u,null,{default:l(()=>[o(_,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=y=>t.value=y),placeholder:"Write something..."},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",Xe,[o(m,{shape:"squared",muted:""},{default:l(()=>[e("div",Ze,[o(v,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[eo]),_:1}),e("p",oo,"value: "+f(t.value),1)])]),_:1})])])]),o(s,null,{code:l(()=>[o(g,{language:"html",code:h(se)},null,8,["code"])]),props:l(()=>[o(g,{language:"javascript",code:h(Y)},null,8,["code"])]),sample:l(()=>[lo]),usage:l(()=>[to]),_:1})])]),_:1})]),_:1})}}}),no={class:"mx-auto max-w-6"},so={class:"pt-4 pb-6"},io={class:"is-flex d-column-mobile pt-4"},uo={class:"w-full max-w-1/2 max-w-mobile"},ro={class:"w-full max-w-1/2 max-w-mobile p-4"},co={class:"mb-4"},po=e("span",null,"Textarea",-1),mo={class:"paragraph rem-90"},_o=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),vo=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark textareas are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VTextarea />"),d(" . You can prevent a textarea from being resizable by using the "),e("code",null,"no-resize"),d(" prop. You can also change the number of rows using the "),e("code",null,":rows"),d(" prop. ")],-1),go=C({setup(b){const t=$("");return(i,a)=>{const r=F,n=j,_=E,u=I,p=P,v=L,m=z,g=U,s=S,V=T,c=O;return w(),k(c,{id:"textarea-resize-demo","bordered-bottom":""},{default:l(()=>[o(V,null,{default:l(()=>[e("div",no,[e("div",so,[o(r,{title:"No Resize",subtitle:"Textarea no resize variation"}),e("div",io,[e("div",uo,[o(p,null,{default:l(()=>[o(n,{label:"Message"}),o(u,null,{default:l(()=>[o(_,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=y=>t.value=y),rows:3,resize:!1,placeholder:"Write something..."},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",ro,[o(m,{shape:"squared",muted:""},{default:l(()=>[e("div",co,[o(v,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[po]),_:1}),e("p",mo,"value: "+f(t.value),1)])]),_:1})])])]),o(s,null,{code:l(()=>[o(g,{language:"html",code:h(de)},null,8,["code"])]),props:l(()=>[o(g,{language:"javascript",code:h(Y)},null,8,["code"])]),sample:l(()=>[_o]),usage:l(()=>[vo]),_:1})])]),_:1})]),_:1})}}}),ho={class:"mx-auto max-w-6"},bo={class:"pt-4 pb-6"},fo={class:"is-flex d-column-mobile pt-4"},Vo={class:"w-full max-w-1/2 max-w-mobile"},xo={class:"w-full max-w-1/2 max-w-mobile p-4"},$o={class:"mb-4"},wo=e("span",null,"First",-1),Co={class:"paragraph rem-90"},yo=e("span",null,"Second",-1),Fo={class:"paragraph rem-90"},ko=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),To=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark selects are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VSelect />"),d(" . ")],-1),Oo=C({setup(b){const t=[{value:"Hamburger",label:"Hamburger"},{value:"Cheeseburger",label:"Cheeseburger"},{value:"Burito",label:"Burito"}],i=$(),a=$();return(r,n)=>{const _=F,u=j,p=H,v=I,m=P,g=L,s=z,V=U,c=S,y=T,x=O;return w(),k(x,{id:"select-base-demo","bordered-bottom":""},{default:l(()=>[o(y,null,{default:l(()=>[e("div",ho,[e("div",bo,[o(_,{title:"Select",subtitle:"Select base layout"}),e("div",fo,[e("div",Vo,[o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,null,{default:l(()=>[o(p,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=D=>i.value=D),options:t},null,8,["modelValue"])]),_:1})]),_:1}),o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,null,{default:l(()=>[o(p,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=D=>a.value=D),options:t,rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",xo,[o(s,{shape:"squared",muted:""},{default:l(()=>[e("div",$o,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[wo]),_:1}),e("p",Co,"value: "+f(i.value),1)]),e("div",null,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[yo]),_:1}),e("p",Fo,"value: "+f(a.value),1)])]),_:1})])])]),o(c,null,{code:l(()=>[o(V,{language:"html",code:h(ie)},null,8,["code"])]),props:l(()=>[o(V,{language:"javascript",code:h(A)},null,8,["code"])]),sample:l(()=>[ko]),usage:l(()=>[To]),_:1})])]),_:1})]),_:1})}}}),Uo={class:"mx-auto max-w-6"},So={class:"pt-4 pb-6"},Lo={class:"is-flex d-column-mobile pt-4"},zo={class:"w-full max-w-1/2 max-w-mobile"},Do={class:"w-full max-w-1/2 max-w-mobile p-4"},Io={class:"mb-4"},Po=e("span",null,"First",-1),jo={class:"paragraph rem-90"},Bo=e("span",null,"Second",-1),No={class:"paragraph rem-90"},Ro=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),qo=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark selects are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VSelect />"),d(" . ")],-1),Eo=C({setup(b){const t=[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"},{value:"France",label:"France"}],i=$(),a=$();return(r,n)=>{const _=F,u=j,p=H,v=I,m=P,g=L,s=z,V=U,c=S,y=T,x=O;return w(),k(x,{id:"select-icon-demo","bordered-bottom":""},{default:l(()=>[o(y,null,{default:l(()=>[e("div",Uo,[e("div",So,[o(_,{title:"Icon",subtitle:"Select icon layout"}),e("div",Lo,[e("div",zo,[o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,{icon:"feather:globe"},{default:l(()=>[o(p,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=D=>i.value=D),options:t},null,8,["modelValue"])]),_:1})]),_:1}),o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,{icon:"feather:globe"},{default:l(()=>[o(p,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=D=>a.value=D),options:t,rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",Do,[o(s,{shape:"squared",muted:""},{default:l(()=>[e("div",Io,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Po]),_:1}),e("p",jo,"value: "+f(i.value),1)]),e("div",null,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Bo]),_:1}),e("p",No,"value: "+f(a.value),1)])]),_:1})])])]),o(c,null,{code:l(()=>[o(V,{language:"html",code:h(ue)},null,8,["code"])]),props:l(()=>[o(V,{language:"javascript",code:h(A)},null,8,["code"])]),sample:l(()=>[Ro]),usage:l(()=>[qo]),_:1})])]),_:1})]),_:1})}}}),Ho={class:"mx-auto max-w-6"},Yo={class:"pt-4 pb-6"},Ao={class:"columns"},Mo={class:"column pt-4"},Wo=e("div",{class:"py-2"},null,-1),Jo=e("div",{class:"py-2"},null,-1),Qo=e("div",{class:"py-2"},null,-1),Go=e("div",{class:"py-2"},null,-1),Ko=e("div",{class:"py-2"},null,-1),Xo={class:"column pt-4"},Zo=e("div",{class:"py-2"},null,-1),el=e("div",{class:"py-2"},null,-1),ol=e("div",{class:"py-2"},null,-1),ll=e("div",{class:"py-2"},null,-1),tl=e("div",{class:"py-2"},null,-1),al={class:"column is-5 pt-4"},nl={class:"mb-4"},sl=e("span",null,"Checkboxes",-1),dl={class:"paragraph rem-90"},il=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ul=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark checkboxes ship with a clean and modern style. You can control the checkbox colors by using the "),e("code",null,"color"),d(" prop. You can make a rounded checkbox using the "),e("code",null,"rounded"),d(" prop. The "),e("code",null,"name"),d(" prop is required. ")],-1),rl=C({setup(b){const t=$(["Option 2"]);return(i,a)=>{const r=F,n=ee,_=L,u=z,p=U,v=S,m=T,g=O;return w(),k(g,{id:"checkbox-base-demo","bordered-bottom":""},{default:l(()=>[o(m,null,{default:l(()=>[e("div",Ho,[e("div",Yo,[o(r,{title:"Checkbox",subtitle:"Checkbox base layout"}),e("div",Ao,[e("div",Mo,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),name:"checkbox-default-1",label:"Option 0",color:"default",value:"Option 0"},null,8,["modelValue"]),Wo,o(n,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=s=>t.value=s),name:"checkbox-1",label:"Option 1",value:"Option 1"},null,8,["modelValue"]),Jo,o(n,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=s=>t.value=s),name:"checkbox-2",label:"Option 2",color:"success",value:"Option 2"},null,8,["modelValue"]),Qo,o(n,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=s=>t.value=s),name:"checkbox-3",label:"Option 3",color:"info",value:"Option 3"},null,8,["modelValue"]),Go,o(n,{modelValue:t.value,"onUpdate:modelValue":a[4]||(a[4]=s=>t.value=s),name:"checkbox-4",label:"Option 4",color:"warning",value:"Option 4"},null,8,["modelValue"]),Ko,o(n,{modelValue:t.value,"onUpdate:modelValue":a[5]||(a[5]=s=>t.value=s),name:"checkbox-5",label:"Option 5",color:"danger",value:"Option 5"},null,8,["modelValue"])]),e("div",Xo,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[6]||(a[6]=s=>t.value=s),name:"checkbox-default-2",label:"Option 6",color:"default",rounded:"",value:"Option 6"},null,8,["modelValue"]),Zo,o(n,{modelValue:t.value,"onUpdate:modelValue":a[7]||(a[7]=s=>t.value=s),name:"checkbox-6",label:"Option 7",rounded:"",value:"Option 7"},null,8,["modelValue"]),el,o(n,{modelValue:t.value,"onUpdate:modelValue":a[8]||(a[8]=s=>t.value=s),name:"checkbox-7",label:"Option 8",color:"success",rounded:"",value:"Option 8"},null,8,["modelValue"]),ol,o(n,{modelValue:t.value,"onUpdate:modelValue":a[9]||(a[9]=s=>t.value=s),name:"checkbox-8",label:"Option 9",color:"info",rounded:"",value:"Option 9"},null,8,["modelValue"]),ll,o(n,{modelValue:t.value,"onUpdate:modelValue":a[10]||(a[10]=s=>t.value=s),name:"checkbox-9",label:"Option 10",color:"warning",rounded:"",value:"Option 10"},null,8,["modelValue"]),tl,o(n,{modelValue:t.value,"onUpdate:modelValue":a[11]||(a[11]=s=>t.value=s),name:"checkbox-10",label:"Option 11",color:"danger",rounded:"",value:"Option 11"},null,8,["modelValue"])]),e("div",al,[o(u,{shape:"squared",muted:""},{default:l(()=>[e("div",nl,[o(_,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[sl]),_:1}),e("p",dl,"Selected: "+f(t.value),1)])]),_:1})])])]),o(v,null,{code:l(()=>[o(p,{language:"html",code:h(ce)},null,8,["code"])]),props:l(()=>[o(p,{language:"javascript",code:h(re)},null,8,["code"])]),sample:l(()=>[il]),usage:l(()=>[ul]),_:1})])]),_:1})]),_:1})}}});const M=b=>(X("data-v-7176386d"),b=b(),Z(),b),cl=["for"],pl={class:"radio-inner"},ml=["id","name","checked","value"],_l=M(()=>e("i",{class:"iconify rem-50","data-icon":"feather:circle"},null,-1)),vl=M(()=>e("span",{class:"inner-overlay"},null,-1)),gl={key:0,class:"radio-label"},hl=C({props:{name:null,group:null,color:{default:"primary"},value:null,modelValue:{default:void 0},disabled:{type:Boolean,default:!1},rounded:{type:Boolean},label:{default:void 0}},emits:["update:modelValue"],setup(b,{emit:t}){const i=b,a=q(()=>i.value===i.modelValue);function r(){t("update:modelValue",i.value)}const n=q(()=>[i.color&&`is-${i.color}`]);return(_,u)=>(w(),B("div",{class:K(["radio",h(n)])},[e("label",{for:`radio-${i.group}`,class:"radio-inner-wrap"},[e("span",pl,[e("input",{id:`radio-${i.group}`,name:i.name,checked:h(a),value:i.value,type:"radio",onChange:r},null,40,ml),_l,vl]),i.label?(w(),B("span",gl,f(i.label),1)):G("",!0)],8,cl)],2))}});var bl=Q(hl,[["__scopeId","data-v-7176386d"]]);const fl={class:"mx-auto max-w-6"},Vl={class:"pt-4 pb-6"},xl={class:"columns"},$l={class:"column is-8 pt-4"},wl={class:"is-flex pt-4"},Cl={class:"mr-4"},yl={class:"mr-4"},Fl={class:"mr-4"},kl={class:"is-flex pt-4"},Tl={class:"mr-4"},Ol={class:"mr-4"},Ul={class:"mr-4"},Sl={class:"is-flex pt-4"},Ll={class:"mr-4"},zl={class:"mr-4"},Dl={class:"mr-4"},Il={class:"mr-4"},Pl={class:"column pt-4"},jl={class:"mb-4"},Bl=e("span",null,"Radios 1",-1),Nl={class:"paragraph rem-90"},Rl={class:"mb-4"},ql=e("span",null,"Radios 2",-1),El={class:"paragraph rem-90"},Hl={class:"mb-4"},Yl=e("span",null,"Radios 3",-1),Al={class:"paragraph rem-90"},Ml=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Wl=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark radio buttons ship with a clean and modern style. You can control the radio colors by using the "),e("code",null,"color"),d(" prop. "),e("code",null,"name"),d(" and "),e("code",null,"group"),d(" props are required. ")],-1),Jl=C({setup(b){const t=$("value_2"),i=$("value_3"),a=$("value_1");return(r,n)=>{const _=F,u=bl,p=L,v=z,m=U,g=S,s=T,V=O;return w(),k(V,{id:"radio-base-demo","bordered-bottom":""},{default:l(()=>[o(s,null,{default:l(()=>[e("div",fl,[e("div",Vl,[o(_,{title:"Radio",subtitle:"Radio base layout"}),e("div",xl,[e("div",$l,[e("div",wl,[e("div",Cl,[o(u,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=c=>t.value=c),value:"value_1",name:"radio_first",label:"Choice 1",group:"radio-group-1",color:"default"},null,8,["modelValue"])]),e("div",yl,[o(u,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=c=>t.value=c),value:"value_2",name:"radio_first",label:"Choice 2",group:"radio-group-2",color:"default"},null,8,["modelValue"])]),e("div",Fl,[o(u,{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=c=>t.value=c),value:"value_3",name:"radio_first",label:"Choice 3",group:"radio-group-3",color:"default"},null,8,["modelValue"])])]),e("div",kl,[e("div",Tl,[o(u,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=c=>i.value=c),value:"value_1",name:"radio_second",label:"Choice 1",group:"radio-group-4",color:"primary"},null,8,["modelValue"])]),e("div",Ol,[o(u,{modelValue:i.value,"onUpdate:modelValue":n[4]||(n[4]=c=>i.value=c),value:"value_2",name:"radio_second",label:"Choice 2",group:"radio-group-5",color:"primary"},null,8,["modelValue"])]),e("div",Ul,[o(u,{modelValue:i.value,"onUpdate:modelValue":n[5]||(n[5]=c=>i.value=c),value:"value_3",name:"radio_second",label:"Choice 3",group:"radio-group-6",color:"primary"},null,8,["modelValue"])])]),e("div",Sl,[e("div",Ll,[o(u,{modelValue:a.value,"onUpdate:modelValue":n[6]||(n[6]=c=>a.value=c),value:"value_1",name:"radio_third",label:"Choice 1",group:"radio-group-7",color:"success"},null,8,["modelValue"])]),e("div",zl,[o(u,{modelValue:a.value,"onUpdate:modelValue":n[7]||(n[7]=c=>a.value=c),value:"value_2",name:"radio_third",label:"Choice 2",group:"radio-group-8",color:"info"},null,8,["modelValue"])]),e("div",Dl,[o(u,{modelValue:a.value,"onUpdate:modelValue":n[8]||(n[8]=c=>a.value=c),value:"value_3",name:"radio_third",label:"Choice 3",group:"radio-group-9",color:"warning"},null,8,["modelValue"])]),e("div",Il,[o(u,{modelValue:a.value,"onUpdate:modelValue":n[9]||(n[9]=c=>a.value=c),value:"value_4",name:"radio_third",label:"Choice 4",group:"radio-group-10",color:"danger"},null,8,["modelValue"])])])]),e("div",Pl,[o(v,{shape:"squared",muted:""},{default:l(()=>[e("div",jl,[o(p,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Bl]),_:1}),e("p",Nl,"Selected: "+f(t.value),1)]),e("div",Rl,[o(p,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[ql]),_:1}),e("p",El,"selected: "+f(i.value),1)]),e("div",Hl,[o(p,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Yl]),_:1}),e("p",Al,"selected: "+f(a.value),1)])]),_:1})])])]),o(g,null,{code:l(()=>[o(m,{language:"html",code:h(me)},null,8,["code"])]),props:l(()=>[o(m,{language:"javascript",code:h(pe)},null,8,["code"])]),sample:l(()=>[Ml]),usage:l(()=>[Wl]),_:1})])]),_:1})]),_:1})}}}),Ql={class:"mx-auto max-w-6"},Gl={class:"pt-4 pb-6"},Kl={class:"columns"},Xl={class:"column pt-4"},Zl={class:"is-block"},et={class:"py-4"},ot={class:"py-4"},lt={class:"py-4"},tt={class:"py-4"},at={class:"py-4"},nt={class:"py-4"},st={class:"column pt-4"},dt={class:"is-block"},it={class:"py-4"},ut={class:"py-4"},rt={class:"py-4"},ct={class:"py-4"},pt={class:"py-4"},mt={class:"py-4"},_t={class:"column is-5 pt-4"},vt={class:"mb-4"},gt=e("span",null,"Toggles",-1),ht={class:"paragraph rem-90"},bt=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ft=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Spark form controls are very versatile and support a wide variety of usage. Spark ships with a custom toggle component that can have 2 different flavors. Use the "),e("code",null,"flavor"),d(" prop to alternate between "),e("code",null,"thin"),d(" and "),e("code",null,"swicth"),d(" modes. Use the "),e("code",null,"color"),d(" prop to change the color. You can also show some icons using the "),e("code",null,"icon"),d(" prop. ")],-1),Vt=C({setup(b){const t=$(["Option 2","Option 9"]);return(i,a)=>{const r=F,n=oe,_=L,u=z,p=U,v=S,m=T,g=O;return w(),k(g,{id:"toggle-base-demo","bordered-bottom":""},{default:l(()=>[o(m,null,{default:l(()=>[e("div",Ql,[e("div",Gl,[o(r,{title:"Custom Toggle",subtitle:"Toggle checkbox variations"}),e("div",Kl,[e("div",Xl,[e("div",Zl,[e("div",et,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),name:"demo-toggle-1",value:"Option 0"},null,8,["modelValue"])]),e("div",ot,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=s=>t.value=s),name:"demo-toggle-2",icon:"",value:"Option 1"},null,8,["modelValue"])]),e("div",lt,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=s=>t.value=s),name:"demo-toggle-3",icon:"",color:"success",value:"Option 2"},null,8,["modelValue"])]),e("div",tt,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=s=>t.value=s),name:"demo-toggle-4",icon:"",color:"info",value:"Option 3"},null,8,["modelValue"])]),e("div",at,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[4]||(a[4]=s=>t.value=s),name:"demo-toggle-5",icon:"",color:"warning",value:"Option 4"},null,8,["modelValue"])]),e("div",nt,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[5]||(a[5]=s=>t.value=s),name:"demo-toggle-6",icon:"",color:"danger",value:"Option 5"},null,8,["modelValue"])])])]),e("div",st,[e("div",dt,[e("div",it,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[6]||(a[6]=s=>t.value=s),name:"demo-toggle-7",flavor:"switch",value:"Option 6"},null,8,["modelValue"])]),e("div",ut,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[7]||(a[7]=s=>t.value=s),name:"demo-toggle-8",icon:"",flavor:"switch",value:"Option 7"},null,8,["modelValue"])]),e("div",rt,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[8]||(a[8]=s=>t.value=s),name:"demo-toggle-9",icon:"",flavor:"switch",color:"success",value:"Option 8"},null,8,["modelValue"])]),e("div",ct,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[9]||(a[9]=s=>t.value=s),name:"demo-toggle-10",icon:"",flavor:"switch",color:"info",value:"Option 9"},null,8,["modelValue"])]),e("div",pt,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[10]||(a[10]=s=>t.value=s),name:"demo-toggle-11",icon:"",flavor:"switch",color:"warning",value:"Option 10"},null,8,["modelValue"])]),e("div",mt,[o(n,{modelValue:t.value,"onUpdate:modelValue":a[11]||(a[11]=s=>t.value=s),name:"demo-toggle-12",icon:"",flavor:"switch",color:"danger",value:"Option 11"},null,8,["modelValue"])])])]),e("div",_t,[o(u,{shape:"squared",muted:""},{default:l(()=>[e("div",vt,[o(_,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[gt]),_:1}),e("p",ht,"active: "+f(t.value),1)])]),_:1})])])]),o(v,null,{code:l(()=>[o(p,{language:"html",code:h(ve)},null,8,["code"])]),props:l(()=>[o(p,{language:"javascript",code:h(_e)},null,8,["code"])]),sample:l(()=>[bt]),usage:l(()=>[ft]),_:1})])]),_:1})]),_:1})}}}),It=C({setup(b){const t=[{label:"Input",target:"input-base-demo"},{label:"Icons",target:"input-icon-demo"},{label:"Validation",target:"input-validation-demo"},{label:"Textarea",target:"textarea-base-demo"},{label:"Resize",target:"textarea-resize-demo"},{label:"Select",target:"select-base-demo"},{label:"Icon",target:"select-icon-demo"},{label:"Checkbox",target:"checkbox-base-demo"},{label:"Radio",target:"radio-base-demo"},{label:"Toggle",target:"toggle-base-demo"}];return(i,a)=>{const r=J,n=W;return w(),B("div",null,[o(r,{title:"Form Components",subtitle:"Forms are a central part of every web and mobile application. They help users interact with your app. Explore Spark forms."}),o(n,{links:t,width:"840px"}),o(Te),o(qe),o(We),o(ao),o(go),o(Oo),o(Eo),o(rl),o(Jl),o(Vt),o(le)])}}});export{It as default};
