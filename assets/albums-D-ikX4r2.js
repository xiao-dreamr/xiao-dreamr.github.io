import{h as i,o as a,c as m,w as c,d as u,a as s,t as f,a6 as Y,i as r,F as b,I as L,m as x,q as A,s as C,x as k,y as B,l as w,r as F,z as n,A as P,B as V,D,E}from"./app-w2VyQ2jN.js";import{o as I}from"./index-CNfyxfjL.js";import{_ as z}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D6XyMqUG.js";import"./animation-BMhtL6cz.js";const N=["title"],R=["src","alt","on-error"],S={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex"},T=i({__name:"YunAlbum",props:{album:{}},setup(_){return(t,e)=>{const o=Y;return a(),m(o,{class:"yun-album-list-item",to:t.album.url},{default:c(()=>[u("figure",{class:"m-10",flex:"~ col",title:t.album.desc},[u("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":s(I)},null,40,R),u("figcaption",S,f(t.album.caption),1)],8,N)]),_:1},8,["to"])}}}),W={class:"yun-album-list mb-4"},q=i({__name:"YunAlbumList",props:{albums:{}},setup(_){return(t,e)=>{const o=T;return a(),r("div",W,[(a(!0),r(b,null,L(t.albums,l=>(a(),m(o,{key:l.url,album:l},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},Q=i({__name:"albums",setup(_){const{t}=x(),e=A(),o=C(e);k([B({"@type":"CollectionPage"})]);const l=w(()=>e.value.albums||[]);return(O,j)=>{const d=V,g=z,y=q,p=F("RouterView"),h=D,v=E;return a(),r(b,null,[n(h,null,{default:c(()=>[n(d),n(p,null,{default:c(({Component:$})=>[(a(),m(P($),null,{"main-header":c(()=>[n(g,{title:s(o)||s(t)("title.album"),icon:s(e).icon||"i-ri-gallery-line",color:s(e).color,"page-title-class":s(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":c(()=>[u("div",H,f(s(t)("counter.albums",l.value.length)),1),n(y,{albums:l.value},null,8,["albums"]),n(p)]),_:2},1024))]),_:1})]),_:1}),n(v)],64)}}});export{Q as default};