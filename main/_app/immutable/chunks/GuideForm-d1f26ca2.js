import{S as _t,i as kt,s as St,u as nt,ad as ot,bd as vt,aH as Dt,e as m,Z as H,a as D,aa as Z,c as d,d as g,_ as M,g as I,f as u,ab as z,a7 as w,j as F,a5 as o,$ as G,J as It,ae as ut,be as Tt,m as L,t as C,a1 as j,al as qt,ac as X,q as x}from"./vendor-93f46a94.js";import{o as yt,s as ft,T as ct,V as $t,c as Nt,v as Pt,r as At}from"./forms-5fcb6172.js";import{t as Ht}from"./forms-2903de53.js";import{m as wt}from"./markdown-6a2ff7f0.js";const xt=yt({name:ft().min(3).max(32),short_description:ft().min(16).max(128),guide:ft()});function Mt(s){let t,a=(s[11]||"")+"",l;return{c(){t=m("span"),l=Z(a),this.h()},l(e){t=d(e,"SPAN",{class:!0});var i=g(t);l=z(i,a),i.forEach(u),this.h()},h(){w(t,"class","validation-message")},m(e,i){F(e,t,i),o(t,l)},p(e,i){i&2048&&a!==(a=(e[11]||"")+"")&&X(l,a)},d(e){e&&u(t)}}}function Gt(s){let t,a=(s[11]||"")+"",l;return{c(){t=m("span"),l=Z(a),this.h()},l(e){t=d(e,"SPAN",{class:!0});var i=g(t);l=z(i,a),i.forEach(u),this.h()},h(){w(t,"class","validation-message")},m(e,i){F(e,t,i),o(t,l)},p(e,i){i&2048&&a!==(a=(e[11]||"")+"")&&X(l,a)},d(e){e&&u(t)}}}function Lt(s){let t,a=(s[11]||"")+"",l;return{c(){t=m("span"),l=Z(a),this.h()},l(e){t=d(e,"SPAN",{class:!0});var i=g(t);l=z(i,a),i.forEach(u),this.h()},h(){w(t,"class","validation-message")},m(e,i){F(e,t,i),o(t,l)},p(e,i){i&2048&&a!==(a=(e[11]||"")+"")&&X(l,a)},d(e){e&&u(t)}}}function Ct(s){return{c:x,l:x,m:x,p:x,d:x}}function jt(s){let t,a=s[10]+"";return{c(){t=m("div"),this.h()},l(l){t=d(l,"DIV",{class:!0});var e=g(t);e.forEach(u),this.h()},h(){w(t,"class","markdown-content right svelte-k92wki")},m(l,e){F(l,t,e),t.innerHTML=a},p(l,e){e&4&&a!==(a=l[10]+"")&&(t.innerHTML=a)},d(l){l&&u(t)}}}function Ft(s){return{c:x,l:x,m:x,p:x,d:x}}function Jt(s){let t;return{c(){t=Z(s[0])},l(a){t=z(a,s[0])},m(a,l){F(a,t,l)},p(a,l){l&1&&X(t,a[0])},d(a){a&&u(t)}}}function Kt(s){let t,a,l,e,i,T,p,J,c,h,K,O,n,Y,E,_,b,tt,et,k,st,V,Q,at,rt,B,lt,R,S,W,it,mt;function bt(r){s[7](r)}let dt={label:"Name",required:!0};s[1].name!==void 0&&(dt.value=s[1].name),e=new ct({props:dt}),nt.push(()=>ot(e,"value",bt)),p=new $t({props:{for:"name",$$slots:{default:[Mt,({messages:r})=>({11:r}),({messages:r})=>r?2048:0]},$$scope:{ctx:s}}});function Vt(r){s[8](r)}let gt={label:"Short Description",required:!0};s[1].short_description!==void 0&&(gt.value=s[1].short_description),h=new ct({props:gt}),nt.push(()=>ot(h,"value",Vt)),n=new $t({props:{for:"short_description",$$slots:{default:[Gt,({messages:r})=>({11:r}),({messages:r})=>r?2048:0]},$$scope:{ctx:s}}});function Et(r){s[9](r)}let pt={textarea:!0,class:"vertical-textarea",label:"Guide",required:!0,input$rows:10};s[1].guide!==void 0&&(pt.value=s[1].guide),b=new ct({props:pt}),nt.push(()=>ot(b,"value",Et)),k=new $t({props:{for:"guide",$$slots:{default:[Lt,({messages:r})=>({11:r}),({messages:r})=>r?2048:0]},$$scope:{ctx:s}}});let $={ctx:s,current:null,token:null,hasCatch:!1,pending:Ft,then:jt,catch:Ct,value:10};return vt(B=wt(s[2]),$),S=new Dt({props:{variant:"outlined",type:"submit",$$slots:{default:[Jt]},$$scope:{ctx:s}}}),{c(){t=m("form"),a=m("div"),l=m("div"),H(e.$$.fragment),T=D(),H(p.$$.fragment),J=D(),c=m("div"),H(h.$$.fragment),O=D(),H(n.$$.fragment),Y=D(),E=m("div"),_=m("div"),H(b.$$.fragment),et=D(),H(k.$$.fragment),st=D(),V=m("div"),Q=m("span"),at=Z("Preview:"),rt=D(),$.block.c(),lt=D(),R=m("div"),H(S.$$.fragment),this.h()},l(r){t=d(r,"FORM",{});var f=g(t);a=d(f,"DIV",{class:!0});var v=g(a);l=d(v,"DIV",{class:!0});var q=g(l);M(e.$$.fragment,q),T=I(q),M(p.$$.fragment,q),q.forEach(u),J=I(v),c=d(v,"DIV",{class:!0});var y=g(c);M(h.$$.fragment,y),O=I(y),M(n.$$.fragment,y),y.forEach(u),Y=I(v),E=d(v,"DIV",{class:!0});var N=g(E);_=d(N,"DIV",{class:!0});var P=g(_);M(b.$$.fragment,P),et=I(P),M(k.$$.fragment,P),P.forEach(u),st=I(N),V=d(N,"DIV",{class:!0});var A=g(V);Q=d(A,"SPAN",{});var U=g(Q);at=z(U,"Preview:"),U.forEach(u),rt=I(A),$.block.l(A),A.forEach(u),N.forEach(u),lt=I(v),R=d(v,"DIV",{});var ht=g(R);M(S.$$.fragment,ht),ht.forEach(u),v.forEach(u),f.forEach(u),this.h()},h(){w(l,"class","grid grid-flow-row gap-2"),w(c,"class","grid grid-flow-row gap-2"),w(_,"class","grid grid-flow-row gap-2 auto-rows-max"),w(V,"class","grid grid-flow-row gap-2 auto-rows-max"),w(E,"class","grid gap-6 split svelte-k92wki"),w(a,"class","grid grid-flow-row gap-6")},m(r,f){F(r,t,f),o(t,a),o(a,l),G(e,l,null),o(l,T),G(p,l,null),o(a,J),o(a,c),G(h,c,null),o(c,O),G(n,c,null),o(a,Y),o(a,E),o(E,_),G(b,_,null),o(_,et),G(k,_,null),o(E,st),o(E,V),o(V,Q),o(Q,at),o(V,rt),$.block.m(V,$.anchor=null),$.mount=()=>V,$.anchor=null,o(a,lt),o(a,R),G(S,R,null),W=!0,it||(mt=It(s[3].call(null,t)),it=!0)},p(r,[f]){s=r;const v={};!i&&f&2&&(i=!0,v.value=s[1].name,ut(()=>i=!1)),e.$set(v);const q={};f&6144&&(q.$$scope={dirty:f,ctx:s}),p.$set(q);const y={};!K&&f&2&&(K=!0,y.value=s[1].short_description,ut(()=>K=!1)),h.$set(y);const N={};f&6144&&(N.$$scope={dirty:f,ctx:s}),n.$set(N);const P={};!tt&&f&2&&(tt=!0,P.value=s[1].guide,ut(()=>tt=!1)),b.$set(P);const A={};f&6144&&(A.$$scope={dirty:f,ctx:s}),k.$set(A),$.ctx=s,f&4&&B!==(B=wt(s[2]))&&vt(B,$)||Tt($,s,f);const U={};f&4097&&(U.$$scope={dirty:f,ctx:s}),S.$set(U)},i(r){W||(L(e.$$.fragment,r),L(p.$$.fragment,r),L(h.$$.fragment,r),L(n.$$.fragment,r),L(b.$$.fragment,r),L(k.$$.fragment,r),L(S.$$.fragment,r),W=!0)},o(r){C(e.$$.fragment,r),C(p.$$.fragment,r),C(h.$$.fragment,r),C(n.$$.fragment,r),C(b.$$.fragment,r),C(k.$$.fragment,r),C(S.$$.fragment,r),W=!1},d(r){r&&u(t),j(e),j(p),j(h),j(n),j(b),j(k),$.block.d(),$.token=null,$=null,j(S),it=!1,mt()}}}function Ot(s,t,a){let l,e,{onSubmit:i}=t,{initialValues:T={name:"",guide:"",short_description:""}}=t,{submitText:p="Create"}=t;const{form:J,data:c}=Nt({initialValues:T,extend:[Pt({schema:xt}),At],onSubmit:n=>i(Ht(n,xt))});qt(s,c,n=>a(1,e=n));function h(n){s.$$.not_equal(e.name,n)&&(e.name=n,c.set(e))}function K(n){s.$$.not_equal(e.short_description,n)&&(e.short_description=n,c.set(e))}function O(n){s.$$.not_equal(e.guide,n)&&(e.guide=n,c.set(e))}return s.$$set=n=>{"onSubmit"in n&&a(5,i=n.onSubmit),"initialValues"in n&&a(6,T=n.initialValues),"submitText"in n&&a(0,p=n.submitText)},s.$$.update=()=>{s.$$.dirty&2&&a(2,l=e.guide||"")},[p,e,l,J,c,i,T,h,K,O]}class zt extends _t{constructor(t){super(),kt(this,t,Ot,Kt,St,{onSubmit:5,initialValues:6,submitText:0})}}export{zt as G};
//# sourceMappingURL=GuideForm-d1f26ca2.js.map
