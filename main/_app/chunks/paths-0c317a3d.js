import{C as t,s as n}from"./index-e4289dff.js";const s=[];function e(e,o=t){let c;const f=[];function l(t){if(n(e,t)&&(e=t,c)){const t=!s.length;for(let n=0;n<f.length;n+=1){const t=f[n];t[1](),s.push(t,e)}if(t){for(let t=0;t<s.length;t+=2)s[t][0](s[t+1]);s.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(n,s=t){const i=[n,s];return f.push(i),1===f.length&&(c=o(l)||t),n(e),()=>{const t=f.indexOf(i);-1!==t&&f.splice(t,1),0===f.length&&(c(),c=null)}}}}let o="",c="/.";function f(t){({base:o,assets:c}=t)}export{c as a,o as b,f as s,e as w};
