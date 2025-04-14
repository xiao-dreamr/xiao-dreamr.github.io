import{M as ln,N as an,O as Y,P as O,Q,R as un,S as y,T as tn,V as j,W as _,X as rn,Y as o,Z as sn,$ as on,a0 as fn}from"./mermaid.core-ka97BwPi.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function dn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,h,D,S,v,R,V,a){var E=D-l,i=S-h,n=V-v,d=a-R,u=d*E-n*i;if(!(u*u<y))return u=(n*(h-R)-d*(l-v))/u,[l+u*E,h+u*i]}function H(l,h,D,S,v,R,V){var a=l-D,E=h-S,i=(V?R:-R)/j(a*a+E*E),n=i*E,d=-i*a,u=l+n,s=h+d,f=D+n,c=S+d,W=(u+f)/2,t=(s+c)/2,m=f-u,g=c-s,A=m*m+g*g,T=v-R,P=u*c-f*s,I=(g<0?-1:1)*j(on(0,T*T*A-P*P)),M=(P*g-m*I)/A,N=(-P*m-g*I)/A,w=(P*g+m*I)/A,p=(-P*m+g*I)/A,x=M-W,e=N-t,r=w-W,X=p-t;return x*x+e*e>r*r+X*X&&(M=w,N=p),{cx:M,cy:N,x01:-n,y01:-d,x11:M*(v/T-1),y11:N*(v/T-1)}}function hn(){var l=cn,h=yn,D=Q(0),S=null,v=gn,R=dn,V=mn,a=null,E=ln(i);function i(){var n,d,u=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-un,c=R.apply(this,arguments)-un,W=rn(c-f),t=c>f;if(a||(a=n=E()),s<u&&(d=s,s=u,u=d),!(s>y))a.moveTo(0,0);else if(W>tn-y)a.moveTo(s*Y(f),s*O(f)),a.arc(0,0,s,f,c,!t),u>y&&(a.moveTo(u*Y(c),u*O(c)),a.arc(0,0,u,c,f,t));else{var m=f,g=c,A=f,T=c,P=W,I=W,M=V.apply(this,arguments)/2,N=M>y&&(S?+S.apply(this,arguments):j(u*u+s*s)),w=_(rn(s-u)/2,+D.apply(this,arguments)),p=w,x=w,e,r;if(N>y){var X=sn(N/u*O(M)),z=sn(N/s*O(M));(P-=X*2)>y?(X*=t?1:-1,A+=X,T-=X):(P=0,A=T=(f+c)/2),(I-=z*2)>y?(z*=t?1:-1,m+=z,g-=z):(I=0,m=g=(f+c)/2)}var Z=s*Y(m),$=s*O(m),B=u*Y(T),C=u*O(T);if(w>y){var F=s*Y(g),G=s*O(g),J=u*Y(A),K=u*O(A),q;if(W<an)if(q=pn(Z,$,J,K,F,G,B,C)){var L=Z-q[0],U=$-q[1],k=F-q[0],b=G-q[1],nn=1/O(fn((L*k+U*b)/(j(L*L+U*U)*j(k*k+b*b)))/2),en=j(q[0]*q[0]+q[1]*q[1]);p=_(w,(u-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else p=x=0}I>y?x>y?(e=H(J,K,Z,$,s,x,t),r=H(F,G,B,C,s,x,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),!t),a.arc(r.cx,r.cy,x,o(r.y11,r.x11),o(r.y01,r.x01),!t))):(a.moveTo(Z,$),a.arc(0,0,s,m,g,!t)):a.moveTo(Z,$),!(u>y)||!(P>y)?a.lineTo(B,C):p>y?(e=H(B,C,F,G,u,-p,t),r=H(Z,$,J,K,u,-p,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),p<w?a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,u,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),t),a.arc(r.cx,r.cy,p,o(r.y11,r.x11),o(r.y01,r.x01),!t))):a.arc(0,0,u,T,A,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,d=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[Y(d)*n,O(d)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:Q(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:Q(+n),i):h},i.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:Q(+n),i):D},i.padRadius=function(n){return arguments.length?(S=n==null?null:typeof n=="function"?n:Q(+n),i):S},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:Q(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:Q(+n),i):R},i.padAngle=function(n){return arguments.length?(V=typeof n=="function"?n:Q(+n),i):V},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{hn as d};
