import{h as y,m as F,G as k,l as d,o as s,i as _,d as a,t as u,a as o,g as i,c as m,q as R,a3 as T,a4 as C,x as U,a5 as A,r as D,z as r,w as p,A as M,e as N,F as H,B as x,C as E,D as I,E as q}from"./app-w2VyQ2jN.js";import{_ as G}from"./YunSponsor.vue_vue_type_style_index_0_lang-Ckl6UW6-.js";import{_ as O,a as W,b as j}from"./YunPostMeta.vue_vue_type_style_index_0_lang-CdaQbMxy.js";import"./index-CNfyxfjL.js";import"./animation-BMhtL6cz.js";const J={class:"post-copyright"},K={class:"post-copyright-author"},Q={key:0,class:"post-copyright-link"},X=["href","title"],Z={class:"post-copyright-license"},ee=["innerHTML"],te=y({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:t}=F(),n=k(),l=n.value.license.type==="zero"?"1.0":"4.0",f=n.value.license.type==="zero"?"publicdomain":"licenses",g=d(()=>{const c=n.value.license.language?n.value.license.language:t.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${f}/${n.value.license.type}/${l}/deed.${c}`}),h=d(()=>e("post.copyright.license_content",[`<a href="${g.value}" target="_blank" rel="noopener" title="CC ${`${n.value.license.type.toUpperCase()} ${l}`} ">CC ${n.value.license.type.toUpperCase()}</a>`]));return(c,$)=>(s(),_("ul",J,[a("li",K,[a("strong",null,u(o(e)("post.copyright.author")+o(e)("symbol.colon")),1),a("span",null,u(o(n).author.name),1)]),c.url?(s(),_("li",Q,[a("strong",null,u(o(e)("post.copyright.link")+o(e)("symbol.colon")),1),a("a",{href:c.url,target:"_blank",title:o(e)("post.copyright.link")},u(decodeURI(c.url)),9,X)])):i("v-if",!0),a("li",Z,[a("strong",null,u(o(e)("post.copyright.license_title")+o(e)("symbol.colon")),1),a("span",{innerHTML:h.value},null,8,ee)])]))}}),oe={class:"inline-flex",text:"sm",py:"1"},ne={key:1,mx:"2"},se=y({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,t)=>{const n=O,l=W;return s(),_("div",oe,[e.frontmatter.categories?(s(),m(n,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):i("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(s(),_("span",ne)):i("v-if",!0),e.frontmatter.tags?(s(),m(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):i("v-if",!0)])}}}),ue=y({__name:"post",setup(v){const e=k(),t=R(),n=T(),l=d(()=>typeof t.value.sponsor=="boolean"?t.value.sponsor:e.value.sponsor.enable),f={"@type":"BlogPosting",headline:t.value.title,description:t.value.description,author:[{name:e.value.author.name,url:e.value.author.link}],datePublished:C(t.value.date||""),dateModified:C(t.value.updated||"")},g=t.value.image||t.value.cover;return g&&(f.image=g),U(A(f)),(h,c)=>{const $=x,b=j,Y=se,L=G,P=te,V=D("RouterView"),B=E,S=I,w=q;return s(),_(H,null,[r(S,null,{default:p(()=>[r($),r(V,null,{default:p(({Component:z})=>[(s(),m(M(z),null,{"main-header-after":p(()=>[r(b,{frontmatter:o(t)},null,8,["frontmatter"]),r(Y,{class:"mt-2",frontmatter:o(t)},null,8,["frontmatter"])]),"main-content-after":p(()=>[l.value?(s(),m(L,{key:0,m:"t-6"})):i("v-if",!0),o(t).copyright||o(t).copyright!==!1&&o(e).license.enabled?(s(),m(P,{key:1,url:o(n),m:"y-4"},null,8,["url"])):i("v-if",!0)]),"aside-custom":p(()=>[N(h.$slots,"aside-custom")]),_:2},1024))]),_:3}),r(B)]),_:3}),r(w)],64)}}});export{ue as default};