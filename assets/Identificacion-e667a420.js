import{r as d,_ as s,c as n,w as r,v as f,a as t,o as l,p,b as _,d as u}from"./index-ce616bdd.js";const m={setup(){const i=()=>{o.value==="abcd1234"&&(window.location.href="/home")};let o=d("");return{identificarse:i,identificador:o}}},c=i=>(p("data-v-6ff65c6f"),i=i(),_(),i),b={class:"child"},v=c(()=>t("img",{alt:"Logo",class:"logo",src:u},null,-1)),h=c(()=>t("label",{for:"identificador",class:"block"},"Identificador:",-1));function w(i,o,I,e,k,x){return l(),n("div",b,[v,h,r(t("input",{type:"password",name:"identificador",id:"identificador","onUpdate:modelValue":o[0]||(o[0]=a=>e.identificador=a)},null,512),[[f,e.identificador]]),t("button",{class:"block button",onClick:o[1]||(o[1]=(...a)=>e.identificarse&&e.identificarse(...a))},"Acceder")])}const B=s(m,[["render",w],["__scopeId","data-v-6ff65c6f"]]);export{B as default};
