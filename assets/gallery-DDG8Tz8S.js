const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-Do7KdCn0.js","assets/app-w2VyQ2jN.js","assets/app-CrCHT_hu.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-D6XyMqUG.js"])))=>i.map(i=>d[i]);
import{G as D,h as w,r as b,o as c,c as v,H as g,i as h,d as r,Y as $,Z as B,n as E,$ as V,z as i,u as K,m as S,q as G,s as Y,x as O,y as T,l as F,a0 as R,a1 as j,w as f,A as L,a as s,t as M,F as U,B as z,D as H,E as I,a2 as N}from"./app-w2VyQ2jN.js";import{_ as W}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D6XyMqUG.js";function q(a){const o=new TextEncoder;return window.crypto.subtle.importKey("raw",o.encode(a),"PBKDF2",!1,["deriveBits","deriveKey"])}function J(a,o){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:o,iterations:1e5,hash:"SHA-256"},a,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function Z(){const a=D(),{encrypt:o}=a.value,n=Uint8Array.from(Object.values(o.iv)),e=Uint8Array.from(Object.values(o.salt));return{decrypt:async(l,u)=>{if(!l)return;const d=await q(l),y=await J(d,e),p=Uint8Array.from(u,_=>_.charCodeAt(0)),t=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:n},y,p);return new TextDecoder().decode(t)}}}const Q=w({__name:"YunGallery",props:{photos:{}},setup(a){return(o,n)=>{const e=b("VAGallery");return c(),v(e,{photos:o.photos},null,8,["photos"])}}}),X={key:0,"w-full":"","pt-14":"","pb-10":""},ee={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},te={key:1},oe=w({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(a){const o=a,n=g(""),e=g(""),l=g(!1),{decrypt:u}=Z();async function d(){const p=o.encryptedPhotos;if(p)try{const t=await u(n.value,p);e.value=t||""}catch(t){l.value=!0,console.error(t)}}function y(){e.value="",n.value=""}return(p,t)=>{const _=Q;return c(),h("div",null,[e.value?(c(),h("div",te,[i(_,{photos:JSON.parse(e.value)},null,8,["photos"]),r("div",{"w-full":"","text-center":"","mt-8":""},[r("button",{"m-auto":"",class:"btn","font-bold":"",onClick:y}," Encrypt Again ")])])):(c(),h("div",X,[r("div",ee,[$(r("input",{"onUpdate:modelValue":t[0]||(t[0]=m=>n.value=m),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:E(l.value&&"border-red"),onInput:t[1]||(t[1]=m=>l.value=!1),onKeyup:V(d,["enter"])},null,34),[[B,n.value]]),r("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d})])]))])}}}),ne={text:"center",class:"yun-text-light",p:"2"},se={class:"page-action",text:"center"},ae=["title"],re=w({__name:"gallery",setup(a){const o=K(),{t:n}=S(),e=G(),l=Y(e);O([T({"@type":"CollectionPage"})]);const u=F(()=>e.value.photos||[]),y=R().value.addons["valaxy-addon-lightgallery"]?j(()=>N(()=>import("./YunGallery-Do7KdCn0.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(p,t)=>{const _=z,m=W,x=oe,C=b("RouterView"),k=H,A=I;return c(),h(U,null,[i(k,null,{default:f(()=>[i(_),i(C,null,{default:f(({Component:P})=>[(c(),v(L(P),null,{"main-header":f(()=>[i(m,{title:s(l)||s(n)("title.gallery"),icon:s(e).icon||"i-ri-gallery-line",color:s(e).color,"page-title-class":s(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":f(()=>[r("div",ne,M(s(n)("counter.photos",u.value.length)),1),r("div",se,[r("a",{class:"yun-icon-btn",title:s(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>s(o).back())},t[1]||(t[1]=[r("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,ae)]),s(e).encryptedPhotos?(c(),v(x,{key:0,"encrypted-photos":s(e).encryptedPhotos},null,8,["encrypted-photos"])):(c(),v(s(y),{key:1,photos:u.value},null,8,["photos"])),i(C)]),_:2},1024))]),_:1})]),_:1}),i(A)],64)}}}),ie=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{Q as _,ie as g};